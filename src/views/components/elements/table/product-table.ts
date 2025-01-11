import { headTable } from ".";
import { ProductIntro } from "../../../../types";
import { rowTable } from ".";
import { footTable } from "./foot-table";

/**
 * Create a table with the product information
 * @param products 
 * @returns 
 */
export const productTable = (products: ProductIntro[]): Node => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.appendChild(headTable());
    products.forEach((product) => {
        tbody.appendChild(rowTable(product));
    });
    table.appendChild(tbody);
    table.appendChild(footTable());
    return table;
}
