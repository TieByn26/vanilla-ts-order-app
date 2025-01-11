import { ProductIntro } from "../../../../types";
import { localIcon } from "../../../../assets/icons";
import { HtmlElement } from "../../../../utils";
import { Link } from "../link";
import { DeleteProduct } from "../../../../controllers/delete-product";
import { Toast } from "../toast";
import { localImage } from "../../../../assets/images";

/**
 * Create a cell with the action icons for the product
 * @param id 
 * @returns 
 */
const cellAction = (id: number): Node => {
    const cellactions = document.createElement("td");

    const eyeIcon = HtmlElement.imgElement(localIcon("ic_eye"), "icon", "view");
    const editIcon = HtmlElement.imgElement(localIcon("ic_pen"), "icon", "edit");
    const trashIcon = HtmlElement.imgElement(localIcon("ic_trash"), "icon", "delete");

    const eyeLink = new Link(`/product-detail/${id}`, "").render();
    eyeLink.appendChild(eyeIcon);     
    const editLink = new Link(`/product-detail/${id}`, "").render();
    editLink.appendChild(editIcon);
    
    trashIcon.addEventListener("click", async (e) => {
        e.preventDefault();

        // use closest to get the row of the product
        const currentRow = trashIcon.closest("tr")!;

        const deleteProduct = new DeleteProduct();  
        await deleteProduct.init(id);

        Toast.toastShow(
            "toast-success",
            localImage("icon_success"),
            "DELETE SUCCESS",
            deleteProduct.getRespone()
        );
        currentRow.remove();
    });

    cellactions.append(eyeLink, editLink, trashIcon);

    return cellactions;
};



/**
 * Create a row for a table with the product information, excluding the 'id' key
 * @param product 
 * @returns 
 */
export const rowTable = (product: ProductIntro): Node => {
    const row = document.createElement("tr");

    const cellfirst = document.createElement("td");
    const image = HtmlElement.imgElement(product.imageUrl, "product-image");
    const titleContainer = HtmlElement.divELement("product-title");
    const name = HtmlElement.spanElement( "product-name", product.name);
    const variant = HtmlElement.spanElement("product-variant",product.variant);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    titleContainer.append(name, variant);
    cellfirst.append(checkbox, image, titleContainer);

    row.appendChild(cellfirst);

    Object.keys(product).forEach((key) => {
        if (["id", "name", "variant", "imageUrl"].includes(key)) {
            return;
        }
        
        const typedKey = key as keyof ProductIntro;
        const cell = document.createElement("td");
        const text = document.createElement("span");
        // Add a class to the cell based on the status of the product
        typedKey === "status" && (text.className = 
            product[typedKey] === "Low Stock" ? "lowstock" : 
            product[typedKey] === "Published" ? "published" : 
            "draft"
        );        
        text.textContent = product[typedKey] as string;
        cell.appendChild(text);
        row.appendChild(cell);
    });
    // Add the actions cell
    row.appendChild(cellAction(product.id));

    return row;
};
