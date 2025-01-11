import { HtmlElement } from "../../../../utils";
import { localIcon } from "../../../../assets/icons";
import { localImage } from "../../../../assets/images";
import { button } from "../button";
import { Router } from "../../../../routes";
import { FindProductDetail } from "../../../../controllers";
import { Product } from "../../../../types/product";

export class UpdateProductForm {
    container: HTMLElement;
    containerLeft: HTMLElement;
    containerRight: HTMLElement;
    findProductDetail: FindProductDetail = new FindProductDetail();
    productDetail: Product;
 
    constructor() {
        this.container = HtmlElement.divELement("add-product-form");
        this.containerLeft = HtmlElement.divELement("add-product-form_left");
        this.containerRight = HtmlElement.divELement("add-product-form_right");
    }

    // Phương thức async để gọi API
    async fetchProductDetail() {
        try {
            this.productDetail = await this.findProductDetail.init(`/${Router.getParam()!.productId}`) as Product;
            this.containerLeft.append(this.general(), this.media(), this.pricing(), this.inventory());
            this.containerRight.append(this.category(), this.status());
            this.container.append(this.containerLeft, this.containerRight);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }
    general(){

        const generalContainer = HtmlElement.divELement("general-container");
        const title = HtmlElement.spanElement("general-container_title", "General Information");
        //name container
        const nameContainer = HtmlElement.divELement("general-container_name");
        const nameTitle = HtmlElement.spanElement("general-container_name-title", "Product Name");
        const nameInput = HtmlElement.inputElement("input", "general-container_name-input", "Enter product name", "name");
        nameInput.value = this.productDetail.name;
        nameContainer.append(nameTitle, nameInput);
        //Description container
        const descriptionContainer = HtmlElement.divELement("general-container_description");
        const descriptionTitle = HtmlElement.spanElement("general-container_description-title", "Description");
        const descriptionArea = HtmlElement.textAreaElement("general-container_description-area", "Enter product description", "description");
        descriptionArea.value = this.productDetail.description;
        descriptionContainer.append(descriptionTitle, descriptionArea);
        generalContainer.append(title, nameContainer, descriptionContainer);
        return generalContainer;
    }
    media() {
        const mediaContainer = HtmlElement.divELement("media-container");
        const title = HtmlElement.spanElement("media-container_title", "Media");
        const photoContainer = HtmlElement.divELement("media-container_photo");
        const photoTitle = HtmlElement.spanElement("media-container_photo-title", "Photo");
        const photoUpload = HtmlElement.divELement("media-container_photo-upload");
        const photoInput = HtmlElement.inputElement("file", "media-container_photo-upload-input", "Upload product photo", "image");
        const photoTempInput = HtmlElement.inputElement("input", "media-container_photo-upload-input", "Upload product photo", "imageUrl");
        photoTempInput.value = this.productDetail.imageUrl;
        photoTempInput.style.display = "none"; 
        photoInput.style.display = "none";  
    
        const image = HtmlElement.imgElement(this.productDetail.imageUrl, "icon", "media-container_photo-upload-image");
        const photoNote = HtmlElement.spanElement("media-container_photo-upload-note", "Drag and drop image here, or click add image");
        const button = HtmlElement.buttonElement("Add Image", "media-container_photo-upload-button");
    
        photoUpload.append(image, photoInput, photoTempInput, photoNote, button);
        photoContainer.append(photoTitle, photoUpload);
        mediaContainer.append(title, photoContainer);
    
        // Cloudinary config
        const CLOUDINARY_UPLOAD_PRESET = 'tienpreset';
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhsv9jnul/image/upload';
    
        // Xử lý upload ảnh
        const buttonUploadHandle = () => {
            photoInput.click(); // Mở cửa sổ chọn ảnh
        };
        photoInput.addEventListener('change', async (e) => {
            const target = e.target as HTMLInputElement;
            if (target && target.files && target.files[0]) {
                const file = target.files[0];
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        
                try {
                    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
                        method: 'POST',
                        body: formData
                    });
                    const data = await response.json();
        
                    if (data.secure_url) {
                        photoTempInput.value = data.secure_url; 
                        image.src = data.secure_url;
                    }
                } catch (error) {
                    console.error("Upload failed:", error);
                }
            }
        });
        
        
        button.addEventListener('click', buttonUploadHandle);
    
        return mediaContainer;
    }
    
    pricing(){
        const pricingContainer = HtmlElement.divELement("pricing-container");
        const title = HtmlElement.spanElement("pricing-container_title", "Pricing");
        const priceContainer = HtmlElement.divELement("pricing-container_price");
        const priceTitle = HtmlElement.spanElement("pricing-container_price-title", "Base Price");
        const priceInput = HtmlElement.inputElement("input", "pricing-container_price-input", "Enter product price", "price");
        priceInput.value = this.productDetail.price;
        priceContainer.append(priceTitle, priceInput);
        const amountContainer = HtmlElement.divELement("pricing-container_amount");
        const amountTitle = HtmlElement.spanElement("pricing-container_amount-title", "VAT Amount (%)");
        const amountInput = HtmlElement.inputElement("input", "pricing-container_amount-input", "Enter product amount", "amount");
        amountInput.value = this.productDetail.amount;
        const salesContainer = HtmlElement.divELement("pricing-container_sales");
        const salesTitle = HtmlElement.spanElement("pricing-container_sales-title", "Sales Price");
        const salesInput = HtmlElement.inputElement("input", "pricing-container_sales-input", "Enter product sales price", "sales");
        salesInput.value = this.productDetail.sales.toString();
        salesContainer.append(salesTitle, salesInput);
        amountContainer.append(amountTitle, amountInput);
        pricingContainer.append(title, priceContainer, amountContainer, salesContainer);
        return pricingContainer;
    }
    inventory(){
        const inventoryContainer = HtmlElement.divELement("inventory-container");
        const title = HtmlElement.spanElement("inventory-container_title", "Inventory");
        const body = HtmlElement.divELement("inventory-container_body");
        const skuContainer = HtmlElement.divELement("inventory-container_body-sku");
        const skuTitle = HtmlElement.spanElement("inventory-container_body-sku-title", "SKU");
        const skuInput = HtmlElement.inputElement("input", "inventory-container_body-sku-input", "Enter product sku", "sku");
        skuInput.value = this.productDetail.sku;
        const barcode = HtmlElement.divELement("inventory-container_barcode");
        const barcodeTitle = HtmlElement.spanElement("inventory-container_body-barcode-title", "Barcode");
        const barcodeInput = HtmlElement.inputElement("input", "inventory-container_body-barcode-input", "Enter product barcode", "barcode");
        barcodeInput.value = this.productDetail.barcode;
        const quantityContainer = HtmlElement.divELement("inventory-container_body-quantity");
        const quantityTitle = HtmlElement.spanElement("inventory-container_body-quantity-title", "Quantity");
        const quantityInput = HtmlElement.inputElement("input", "inventory-container_body-quantity-input", "Enter product quantity", "quantity");
        quantityInput.value = this.productDetail.quantity.toString();
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
        const select = HtmlElement.selectElement("category-container_select-select","category");
        select.append(HtmlElement.optionElement("Watch", "Watch"));
        select.append(HtmlElement.optionElement("Bag", "Bag"));
        select.append(HtmlElement.optionElement("Phone", "Phone"));
        select.value = this.productDetail.category;
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
        const select = HtmlElement.selectElement("status-container_select-select","status");
        select.append(HtmlElement.optionElement("Draft", "Draft"));
        select.append(HtmlElement.optionElement("Published", "Published"));
        select.append(HtmlElement.optionElement("Low Stock", "Low Stock"));
        select.value = this.productDetail.status;
        titleContainer.append(title, label);
        selectContainer.append(selectTitle, select);
        statusContainer.append(titleContainer, selectContainer);
        return statusContainer;
    }

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
        button.type = "submit";
        button.setAttribute('unactive', '');
        return button;
    };
    
    async render() {
        await this.fetchProductDetail();
        return this.container;
    }
}
