import { HtmlElement } from "../../../utils";
import { HeadProductDetail } from "../../components/elements/head";
import { UpdateProductForm } from "../../components/elements/form/update-product-form";
import { Form } from "../../components/elements/form";
import { getDataField } from "../../components/elements/form/get-data-field";
import { UpdateProduct } from "../../../controllers/update-product";
import { ProductMapper } from "../../../models";
import { Router } from "../../../routes";
import { validateInput } from "../../../utils/validate";

export class ProductDetail {
    container: HTMLElement;

    constructor() {
        this.container = HtmlElement.divELement("add-product-container");
        this.initForm();
    }
    async initForm(){
        const head = new HeadProductDetail();
        const addProductForm = new UpdateProductForm();
        const form = Form(() => {}).render([head.render(),await addProductForm.render(), addProductForm.addProductFormFoot()])
        this.container.appendChild(form);
        this.checkInputFocus();
        this.eventAddProduct();
        validateInput(this.container);
    }
    /**
     * Check the input focus
     * @returns void
     */
    checkInputFocus() {
        const inputs = this.container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select');
        const saveButtons = this.container.querySelectorAll<HTMLButtonElement>('.save-button');
        const valueComplete = this.container.querySelector<HTMLSpanElement>('.completion-container_value');
        
        const initialValues = new Map<Element, string>();
        // set initial values 
        inputs.forEach(input => {
            !input.type.includes('file') && initialValues.set(input, input.value);
        });
    
        const toggleSaveButton = () => {
            const validInputs = Array.from(inputs).filter(input => input.type !== 'file');
            const filledInputs = validInputs.filter(input => input.value.trim() !== '');
            const totalInputs = validInputs.length;
            // check if the input value is changed
            const isChanged = validInputs.some(input => input.value !== initialValues.get(input));
            const percentage = (filledInputs.length / totalInputs) * 100;
    
            // check if the input is filled
            saveButtons.forEach(button => {
                const hasFilledInputs = filledInputs.length > 0;
                const isComplete = hasFilledInputs && percentage === 100 && isChanged;
            
                valueComplete!.textContent = `${Math.round(hasFilledInputs ? percentage : 0)}%`;
            
                button.toggleAttribute('unactive', !isComplete);
                button.classList.toggle('active', isComplete);
            });
            
        };
        // start checking the input focus
        toggleSaveButton();

        inputs.forEach(input => {
            !input.type.includes('file') && input.addEventListener('input', toggleSaveButton);
        });
    }
    
    /**
     * Event to add product
     * @returns void
     */
    eventAddProduct() {
        const inputs = this.container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select');
        const saveButtons = this.container.querySelectorAll<HTMLButtonElement>('.save-button');
    
        saveButtons.forEach(button => {
            button.addEventListener('click', async () => {
                !button.hasAttribute('unactive') && (() => {
                    const data = getDataField(Array.from(inputs));
                    const dataToPost = ProductMapper.toPostProductBody(data);
                    const updateProduct = new UpdateProduct();
                    updateProduct.init(Router.getParam()!.productId ,dataToPost);
                })();
            });
        });
    }
    

    render(): Node{
        return this.container;
    }
}
