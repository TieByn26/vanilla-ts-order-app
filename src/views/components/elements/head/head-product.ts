import { HtmlElement } from "../../../../utils";
import { button } from "../button";
import { RoutesPath } from "../../../../routes";
import { Breadcrumb } from "../breadcrumb";
import { localIcon } from "../../../../assets/icons";
import { search } from "../search";

export class HeadProduct{
    container: HTMLElement;

    constructor(table: HTMLElement){
        this.container = HtmlElement.divELement("product-head-container");
        this.initHeadTop();
        this.initHeadBottom(table);
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
    initHeadBottom(table: HTMLElement){
        const headBottom = HtmlElement.divELement("product-head-container_bottom");
        headBottom.append(search(table));
        this.container.appendChild(headBottom);
    }
    render(): Node{
        return this.container;
    }
}