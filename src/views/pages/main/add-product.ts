import { HtmlElement } from "../../../utils";
import { HeadAddProduct } from "../../components/elements/head";
import { AddProductForm } from "../../components/elements/form";

export class AddProduct {
    container: HTMLElement;

    constructor() {
        this.container = HtmlElement.divELement("add-product-container");
        this.initForm();
    }
    async initForm(){
        const head = new HeadAddProduct();
        const form = new AddProductForm();
        this.container.appendChild(head.render());
        this.container.appendChild(form.render());
        this.container.appendChild(form.addProductFormFoot());
    }
    render(): Node{
        return this.container;
    }
}
