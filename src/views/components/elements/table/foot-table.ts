import { HtmlElement } from "../../../../utils";
import { paginationRender } from "../button/pagination";

export const footTable = (): Node => {
    const footContainer = HtmlElement.divELement("foot-container");
    const title = HtmlElement.spanElement("title", "Showing 1-10 from 100"); 
    footContainer.append(title, paginationRender());
    return footContainer;
}
