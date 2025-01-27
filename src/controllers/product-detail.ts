import { findData } from "../services";
import { Toast } from "../views/components/elements/toast";
import { localImage } from "../assets/images";
import { Product } from "../types/product";
import { message } from "../utils";

export class FindProductDetail {
    private product: Product;

    /**
     * Initialize the product detail
     * @param url 
     * @returns 
     */
    public async init(url = ""): Promise<Product | void> {
        try {
            const data = await findData<Product>(`/products${url}`);
            return data as Product;
        } catch (error) {
            Toast.toastShow("toast-error", localImage("icon_error"), "Error", message.findError);
        }
    }

    public getProducts(): Product {
        return this.product;
    }
}
