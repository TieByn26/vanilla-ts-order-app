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
    /**
     * Check the input focus
     * @returns void
     */
    checkInputFocus() {
        const inputs = this.container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select');
        const saveButtons = this.container.querySelectorAll<HTMLButtonElement>('.save-button');
        const valueComplete = this.container.querySelector<HTMLSpanElement>('.completion-container_value');
    
        // set initial values 
        const toggleSaveButton = () => {
            const filledInputs = Array.from(inputs).filter(input => input.value.trim() !== '');
            const totalInputs = inputs.length;
            
            const percentage = (filledInputs.length / totalInputs) * 100;
            const hasFilledInputs = filledInputs.length > 0;
            // check if the input is filled and the percentage is 100
            valueComplete!.textContent = `${Math.round(hasFilledInputs ? percentage : 0)}%`;
        
            saveButtons.forEach(button => {
                const isComplete = hasFilledInputs && percentage === 100;
                button.toggleAttribute('unactive', !isComplete);
                button.classList.toggle('active', isComplete);
            });
        };
    
        inputs.forEach(input => {
            input.addEventListener('input', toggleSaveButton);
        });
    }
    
    /**
     * Event add product
     * @returns void
     * @event add product
     */
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
