import { ProductIntro } from "../../../models";
import { HtmlElement } from "../../../utils";
import { HeadProduct } from "../../components/elements/head";
import { productTable } from "../../components/elements/table";
import { FindProduct } from "../../../controllers";

export class Product {
    container: HTMLElement;
    products: FindProduct = new FindProduct();
    constructor() {
        this.container = HtmlElement.divELement("product-container");
        this.handleData();
    }
    initHead(products?: Node){
        const head = new HeadProduct().render();
        this.container.appendChild(head);
    }
    initTable(products: ProductIntro[]){
        const tableContainer = HtmlElement.divELement("product-table-container");
        const table = productTable(products);
        tableContainer.append(table);
        this.container.appendChild(tableContainer);
    }
    async handleData(){
        await this.products.init();
        this.initHead();
        this.initTable(this.products.getProducts());
    }
    render(): Node{
        return this.container;
    }
}
