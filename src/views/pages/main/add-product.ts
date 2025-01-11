import { HtmlElement } from "../../../utils";
import { HeadAddProduct } from "../../components/elements/head";
import { AddProductForm } from "../../components/elements/form";
import { Form } from "../../components/elements/form";
import { getDataField } from "../../components/elements/form/get-data-field";
import { AddNew } from "../../../controllers";
import { ProductMapper } from "../../../models";
import { validateInput } from "../../../utils/validate";


export class AddProduct {
    container: HTMLElement;

    constructor() {
        this.container = HtmlElement.divELement("add-product-container");
        this.initForm();
        this.checkInputFocus();
        this.eventAddProduct();
        validateInput(this.container);
    }
    async initForm(){
        const head = new HeadAddProduct();
        const addProductForm = new AddProductForm();
        const form = Form(() => {}).render([head.render(), addProductForm.render(), addProductForm.addProductFormFoot()])
        this.container.appendChild(form);
    }
    checkInputFocus() {
        const inputs = this.container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select');
        const saveButtons = this.container.querySelectorAll<HTMLButtonElement>('.save-button');
        const valueComplete = this.container.querySelector<HTMLSpanElement>('.completion-container_value');
    
        const toggleSaveButton = () => {
            // Đếm số trường input đã được điền
            const filledInputs = Array.from(inputs).filter(input => input.value.trim() !== '');
            const totalInputs = inputs.length;
    
            // Tính tỷ lệ phần trăm
            const percentage = (filledInputs.length / totalInputs) * 100;
    
            saveButtons.forEach(button => {
                if (filledInputs.length > 0) {
                    // Cập nhật phần trăm vào completion container
                    valueComplete!.textContent = `${Math.round(percentage)}%`;
    
                    // Nếu phần trăm đạt 100%, kích hoạt nút save
                    if (percentage === 100) {
                        button.removeAttribute('unactive');
                        button.classList.add('active');
                    } else {
                        button.setAttribute('unactive', '');
                        button.classList.remove('active');
                    }
                } else {
                    button.setAttribute('unactive', '');
                    button.classList.remove('active');
                }
            });
        };
    
        inputs.forEach(input => {
            input.addEventListener('input', toggleSaveButton);
        });
    }
    
    eventAddProduct() {
        const inputs = this.container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select');
        const saveButtons = this.container.querySelectorAll<HTMLButtonElement>('.save-button');
    
        saveButtons.forEach(button => {
            button.addEventListener('click', async () => {
                !button.hasAttribute('unactive') && (() => {
                    const data = getDataField(Array.from(inputs));
                    const dataToPost = ProductMapper.toPostProductBody(data);
                    const addNew = new AddNew();
                    addNew.init(dataToPost);
                    inputs.forEach(input => {
                        input.value = '';
                    });
                })();
            });
        });
    }
    

    render(): Node{
        return this.container;
    }
}
