import { HtmlElement } from "../../../../utils";
import { Breadcrumb } from "../breadcrumb";
import { RoutesPath } from "../../../../routes";
import { button } from "../button";
import { localIcon } from "../../../../assets/icons";

export class HeadAddProduct{
    container: HTMLElement;
    constructor(){
        this.container = HtmlElement.divELement("productde-head-container");
        this.initHead();
    }
    createButton(text = "", icon = "") {
        const button = document.createElement("button");
        button.appendChild(HtmlElement.imgElement(icon, "icon", ""));
        button.appendChild(HtmlElement.spanElement("",text));  
        button.className = "save-button";
        button.setAttribute('unactive', '');
        return button;
    };
    initHead(){
        const breadcrumb = new Breadcrumb([RoutesPath.Product, RoutesPath.AddProduct],"Add Product").render();
        const buttonContainer = HtmlElement.divELement("productde-head-container_button");
        const saveButton = this.createButton("Save Product",localIcon("ic_save"));
        buttonContainer.append(
            new button().render("button-white",{to:"/",label:"Cancel",icon:localIcon("ic_cross")}),
            saveButton
        );
        this.container.append(breadcrumb, buttonContainer);
    }
    render(){
        return this.container;
    }
}
