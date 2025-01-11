import { HtmlElement } from "../../../../utils";
import { localIcon } from "../../../../assets/icons";
import { FindProduct } from "../../../../controllers";
import { rowTable } from "../table";

/**
 * Search component for searching product by name
 * @param table 
 * @returns 
 */
export const search = (table: HTMLElement): Node => {
    const searchContainer = HtmlElement.divELement("search-container");
    const image = HtmlElement.imgElement(localIcon("ic_search"), "search-icon");
    const input = HtmlElement.inputElement("input", "search-input");
    input.placeholder = "Search product...";

    searchContainer.append(image, input);

    const fetchProducts = async (query?: string) => {
        const url = query !== "" ? `` : `?_start=0&_limit=10`;
        const findProduct = new FindProduct();
        await findProduct.init(url);
        const tbodyOld = table.querySelector("tbody");
        const tbodyNew = document.createElement("tbody");
        const fragment = document.createDocumentFragment();
    
        if (query?.trim() !== "") {
            const filteredProducts = findProduct.getProducts().filter((product) =>
                product.name.toLowerCase().includes(query as string)
            );
            filteredProducts.forEach((product) => {
                fragment.appendChild(rowTable(product));
            });
            tbodyNew.appendChild(fragment);
            tbodyOld?.replaceChildren(tbodyNew);
        } else {
            findProduct.getProducts().forEach((product) => {
                fragment.appendChild(rowTable(product));
            });
            tbodyNew.appendChild(fragment);
            tbodyOld?.replaceChildren(tbodyNew);
        }
    };
    
    
    input.addEventListener(
        "input",
        debounce((e: Event) => {
            const searchText = (e.target as HTMLInputElement).value.toLowerCase();
            fetchProducts(searchText);
        }, 300)
    );

    return searchContainer;
};

//debounce
const debounce = (func: Function, delay: number) => {
    let debounceTimer: number;
    return (...args: any[]) => {
        clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(() => func(...args), delay);
    };
};


