import { HtmlElement } from "../../../../utils";
import { button } from "../button";
import { RoutesPath } from "../../../../routes";
import { Breadcrumb } from "../breadcrumb";
import { localIcon } from "../../../../assets/icons";

export class HeadProduct{
    container: HTMLElement;

    constructor(){
        this.container = HtmlElement.divELement("product-head-container");
        this.initHeadTop();
    }
    initHeadTop(){
        const headTop = HtmlElement.divELement("product-head-container_top");
        const breadcrumb = new Breadcrumb([RoutesPath.Product],"Product").render();

        const buttonContainer = HtmlElement.divELement("product-head-container_top-button");
        buttonContainer.append(
            new button().render("button-middle",{to:"/404",label:"Export",icon:localIcon("ic_export")}),
            new button().render("button-blue",{to:"/add-product",label:"Add Product",icon:localIcon("ic_plus")})
        );
        headTop.append(breadcrumb, buttonContainer);
        this.container.appendChild(headTop);

    }
    render(): Node{
        return this.container;
    }
}