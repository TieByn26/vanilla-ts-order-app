import { HtmlElement } from "../../../../utils";
import { FindProduct } from "../../../../controllers";
import { rowTable } from "../table";

const totalPages: number = 5;
let currentPage: number = 1;
const itemsPerPage: number = 10;

export const paginationRender = (): Node => {
    const paginationContainer = HtmlElement.divELement("pagination-container");

    const prevButton = HtmlElement.buttonElement("<", "prev-button");
    prevButton.addEventListener("click", async () => {
        if (currentPage > 1) {
            currentPage--;
            await updatePagination(currentPage);
        }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const paginationButton = HtmlElement.buttonElement(i.toString(), "pagination-button");
        paginationButton.setAttribute("data-page", i.toString());
        if (i === 1) {
            paginationButton.classList.add("active");
        }
        paginationButton.addEventListener("click", async () => {
            currentPage = i;
            await updatePagination(currentPage);
        });
        paginationContainer.appendChild(paginationButton);
    }

    const nextButton = HtmlElement.buttonElement(">", "next-button");
    nextButton.addEventListener("click", async () => {
        if (currentPage < totalPages) {
            currentPage++;
            await updatePagination(currentPage);
        }
    });
    paginationContainer.appendChild(nextButton);

    return paginationContainer;
};

const updatePagination = async (currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const findProduct = new FindProduct();
    
    await findProduct.init(`?_start=${startIndex}&_limit=${itemsPerPage}`);
    const products = findProduct.getProducts();

    const tbodyOld = document.querySelector("tbody");
    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
        fragment.appendChild(rowTable(product));
    });
    const tbodyNew = document.createElement("tbody");
    tbodyNew.appendChild(fragment);
    if (!tbodyOld) return;
    tbodyOld.replaceWith(tbodyNew);
    const buttons = document.querySelectorAll(".pagination-button");
    buttons.forEach((button) => {
        if (parseInt(button.getAttribute("data-page") || "0") === currentPage) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
};

