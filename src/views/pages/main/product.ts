import { HtmlElement } from "../../../utils";
import { HeadProduct } from "../../components/elements/head";
// import { TableProduct } from "../components";
// import { CategoryController, productController } from "@/controllers";

export class Product {
    container: HTMLElement;
    constructor() {
        this.container = HtmlElement.divELement("product-container");
        this.handleData();
    }
    initHead(products?: Node, categories?: Node){
        const head = new HeadProduct().render();
        this.container.appendChild(head);
    }
    initTable(products: Node, categories: Node){
        const tableContainer = HtmlElement.divELement("product-table-container");
        // const table = new TableProduct(products, categories).render();
        // const foot = new FootProduct(products, categories).render();
        // tableContainer.append(table, foot);
        this.container.appendChild(tableContainer);
    }
    async handleData(){
        // const products = await productController.getAllProduct();
        // const categories = await CategoryContro  ller.getAllCategory();
        this.initHead();
        // this.initTable(products, categories);
    }
    render(): Node{
        return this.container;
    }
}
