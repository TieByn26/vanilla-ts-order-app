// import { ic_chevron_down, ic_dollar, icon_error, icon_success, pic_media_ad, pic_media_de } from "@/constants";
import { HtmlElement } from "../../../../utils";
import { localIcon } from "../../../../assets/icons";
import { localImage } from "../../../../assets/images";
import { button } from "../button";
import { Form } from ".";

export class AddProductForm {
    container: HTMLElement;
    containerLeft: HTMLElement;
    containerRight: HTMLElement;
 
    constructor() {
        this.container = HtmlElement.divELement("add-product-form");
        this.containerLeft = HtmlElement.divELement("add-product-form_left");
        this.containerRight = HtmlElement.divELement("add-product-form_right");
        this.containerLeft.append(this.general(), this.media(), this.pricing(), this.inventory());
        this.containerRight.append(this.category(), this.status());
        this.container.append(this.containerLeft, this.containerRight);
    }
    general(){
        const generalContainer = HtmlElement.divELement("general-container");
        const title = HtmlElement.spanElement("general-container_title", "General Information");
        //name container
        const nameContainer = HtmlElement.divELement("general-container_name");
        const nameTitle = HtmlElement.spanElement("general-container_name-title", "Product Name");
        const nameInput = HtmlElement.inputElement("input", "general-container_name-input", "Enter product name", "name");
        nameContainer.append(nameTitle, nameInput);
        //Description container
        const descriptionContainer = HtmlElement.divELement("general-container_description");
        const descriptionTitle = HtmlElement.spanElement("general-container_description-title", "Description");
        const descriptionArea = HtmlElement.textAreaElement("general-container_description-area", "Enter product description", "description");
        descriptionContainer.append(descriptionTitle, descriptionArea);
        generalContainer.append(title, nameContainer, descriptionContainer);
        return generalContainer;
    }
    media(){
        const mediaContainer = HtmlElement.divELement("media-container");
        const title = HtmlElement.spanElement("media-container_title", "Media");
        const photoContainer = HtmlElement.divELement("media-container_photo");
        const photoTitle = HtmlElement.spanElement("media-container_photo-title", "Photo");
        const photoUpload = HtmlElement.divELement("media-container_photo-upload");
        const image = HtmlElement.imgElement(localImage("icon_success"),"icon","media-container_photo-upload-image");
        const photoNote = HtmlElement.spanElement("media-container_photo-upload-note", "Drag and drop image here, or click add image");
        const button = HtmlElement.buttonElement( "Add Image","media-container_photo-upload-button");
        photoUpload.append(image, photoNote, button);
        photoContainer.append(photoTitle, photoUpload);
        mediaContainer.append(title, photoContainer);
        return mediaContainer;
    }
    pricing(){
        const pricingContainer = HtmlElement.divELement("pricing-container");
        const title = HtmlElement.spanElement("pricing-container_title", "Pricing");
        const priceContainer = HtmlElement.divELement("pricing-container_price");
        const priceTitle = HtmlElement.spanElement("pricing-container_price-title", "Base Price");
        const priceInput = HtmlElement.inputElement("input", "pricing-container_price-input", "Enter product price", "price");
        priceContainer.append(priceTitle, priceInput);
        const amountContainer = HtmlElement.divELement("pricing-container_amount");
        const amountTitle = HtmlElement.spanElement("pricing-container_amount-title", "VAT Amount (%)");
        const amountInput = HtmlElement.inputElement("input", "pricing-container_amount-input", "Enter product amount", "amount");
        amountContainer.append(amountTitle, amountInput);
        pricingContainer.append(title, priceContainer, amountContainer);
        return pricingContainer;
    }
    inventory(){
        const inventoryContainer = HtmlElement.divELement("inventory-container");
        const title = HtmlElement.spanElement("inventory-container_title", "Inventory");
        const body = HtmlElement.divELement("inventory-container_body");
        const skuContainer = HtmlElement.divELement("inventory-container_body-sku");
        const skuTitle = HtmlElement.spanElement("inventory-container_body-sku-title", "SKU");
        const skuInput = HtmlElement.inputElement("input", "inventory-container_body-sku-input", "Enter product sku", "sku");
        const barcode = HtmlElement.divELement("inventory-container_barcode");
        const barcodeTitle = HtmlElement.spanElement("inventory-container_body-barcode-title", "Barcode");
        const barcodeInput = HtmlElement.inputElement("input", "inventory-container_body-barcode-input", "Enter product barcode", "barcode");
        const quantityContainer = HtmlElement.divELement("inventory-container_body-quantity");
        const quantityTitle = HtmlElement.spanElement("inventory-container_body-quantity-title", "Quantity");
        const quantityInput = HtmlElement.inputElement("input", "inventory-container_body-quantity-input", "Enter product quantity", "quantity");
        skuContainer.append(skuTitle, skuInput);
        barcode.append(barcodeTitle, barcodeInput);
        quantityContainer.append(quantityTitle, quantityInput);
        body.append(skuContainer, barcode, quantityContainer);
        inventoryContainer.append(title, body);
        return inventoryContainer;
    }
    category(){
        const categoryContainer = HtmlElement.divELement("category-container");
        const title = HtmlElement.spanElement("category-container_title", "Category");
        const selectContainer = HtmlElement.divELement("category-container_select");
        const selectTitle = HtmlElement.spanElement("category-container_select-title", "Product Category");
        const select = HtmlElement.selectElement("category-container_select-select");
        select.append(HtmlElement.optionElement("Select Category", "Select Category"));
        select.append(HtmlElement.optionElement("Category 1", "Category 1"));
        select.append(HtmlElement.optionElement("Category 2", "Category 2"));
        selectContainer.append(selectTitle, select);
        categoryContainer.append(title, selectContainer);
        return categoryContainer;
    }
    status(){
        const statusContainer = HtmlElement.divELement("status-container");
        const titleContainer = HtmlElement.divELement("status-container_title");
        const title = HtmlElement.spanElement("status-container_title-text", "Status");
        const label = HtmlElement.spanElement("status-container_title-label", "Draft");
        const selectContainer = HtmlElement.divELement("status-container_select");
        const selectTitle = HtmlElement.spanElement("status-container_select-title", "Product Status");
        const select = HtmlElement.selectElement("status-container_select-select");
        select.append(HtmlElement.optionElement("Select Status", "Select Status"));
        select.append(HtmlElement.optionElement("Active", "Active"));
        select.append(HtmlElement.optionElement("Inactive", "Inactive"));
        titleContainer.append(title, label);
        selectContainer.append(selectTitle, select);
        statusContainer.append(titleContainer, selectContainer);
        return statusContainer;
    }

    // // function to attach listeners to all inputs and dropdowns
    // attachInputListeners(inputs, dropdowns, initialValues, button1, button2) {
    //     const checkChanges = () => {
    //         let hasChanges = false;

    //         // check all inputs
    //         inputs.forEach((input, index) => {
    //             if (input.value !== initialValues.inputs[index]) {
    //                 hasChanges = true;
    //             }
    //         });

    //         // check all dropdowns
    //         dropdowns.forEach((dropdown, index) => {
    //             if (dropdown.value !== initialValues.dropdowns[index]) {
    //                 hasChanges = true;
    //             }
    //         });

    //         if (hasChanges) {
    //             button1.removeAttribute("unactive");
    //         } else {
    //             button1.setAttribute("unactive", "true");
    //         }
    //         if (hasChanges) {
    //             button2.removeAttribute("unactive");
    //         } else {
    //             button2.setAttribute("unactive", "true");
    //         }
    //     };

    //     // attach listeners to all inputs
    //     inputs.forEach((input) => {
    //         input.addEventListener("input", checkChanges);
    //     });

    //     // attach listeners to all dropdowns
    //     dropdowns.forEach((dropdown) => {
    //         dropdown.addEventListener("change", checkChanges);
    //     });
    // }

    // handleData(head, foott) {
    //     const button1 = foott.querySelector(".productde-container-foot_button .save-button");
    //     const button2 = head.querySelector(".save-button");
    //     this.information(head, foott);
    //     this.media();
    //     this.pricing(head, foott);
    //     this.inventory(head, foott);
    //     this.createEventSave(button1);
    //     this.createEventSave(button2);
    // }

    // /**
    //  * @param {HTMLElement} button 
    //  */
    // createEventSave(button) {
    //     button.addEventListener('click', async () => {
    //         if (!button.hasAttribute("unactive")) {
                
    //             const nameInput = this.container.querySelector('.input-name');
    //             const descriptionArea = this.container.querySelector('.input-description');
    //             const priceInput = this.container.querySelector('.input-price');
    //             const skuInput = this.container.querySelector('.input-sku');
    //             const barcodeInput = this.container.querySelector('.input-barcode');
    //             const quantityInput = this.container.querySelector('.input-quantity');
    //             const statusSelect = document.querySelector('.dropdown-status');
    //             const categorySelect = document.querySelector('.dropdown-category');

    //             const newProductData = {
    //                 sku: skuInput.value,
    //                 name: nameInput.value,
    //                 sales: 120,
    //                 variant: "3 Variants",
    //                 quantity: parseInt(quantityInput.value),
    //                 amount: "$1,210.00",
    //                 price: '$' + priceInput.value,
    //                 status: statusSelect.value,
    //                 added: new Date().toLocaleDateString("en-GB", {
    //                     day: '2-digit',
    //                     month: 'short',
    //                     year: 'numeric'
    //                 }),
    //                 description: descriptionArea.value,
    //                 categoryId: parseInt(categorySelect.value),
    //                 imageId: 1,
    //                 barcode: barcodeInput.value
    //             };  

    //             try {
    //                 await productController.addNewProduct(newProductData);
                    
    //                 this.updateInitialValues(newProductData);
    //                 button.setAttribute("unactive", "true");
                    
    //                 console.log(newProductData);
    //                 Toast.toastShow("toast-success",icon_success,"ADD SUCCESS","Successful add product");
    //             } catch (err) {
    //                 Toast.toastShow("toast-error",icon_error,"ADD ERROR","Error add product");
    //             }
    //         } else {
    //             Toast.toastShow("toast-error",icon_error,"ERROR","Pls enter all input");
    //         }
    //     });
    // }

    // updateInitialValues(newData) {
    //     const inputs = this.container.querySelectorAll('input, textarea');
    //     inputs.forEach(input => {
    //         const name = input.name || input.id;
    //         if (newData[name] !== undefined) {
    //             input.value = newData[name];
    //         }
    //     });
    // }

    // showToast(message, type) {
    //     console.log(`${type.toUpperCase()}: ${message}`);
    // }

    addProductFormFoot() {
        const addProductFormFoot = HtmlElement.divELement("add-product-form_foot");
        const completionContainer = HtmlElement.divELement("completion-container");
        const completionTitle = HtmlElement.spanElement("completion-container_title", "Product Completion: ");
        const completionValue = HtmlElement.spanElement("completion-container_value", "0%");
        completionContainer.append(completionTitle, completionValue);
        const buttonContainer = HtmlElement.divELement("productde-head-container_button");
        const saveButton = this.createButton("Save Product",localIcon("ic_save"));
        buttonContainer.append(
            new button().render("button-white",{to:"/",label:"Cancel",icon:localIcon("ic_cross")}),
            saveButton
        );
        addProductFormFoot.append(completionContainer, buttonContainer);
        return addProductFormFoot;
    }
    createButton(text = "", icon = "") {
        const button = document.createElement("button");
        button.appendChild(HtmlElement.imgElement(icon, "icon", ""));
        button.appendChild(HtmlElement.spanElement("",text));  
        button.className = "save-button";
        button.setAttribute('unactive', '');
        return button;
    };
    render() {
        return this.container;
    }
}