import { addProduct } from "../services";
import { PostProductBody } from "../types/product";
import { Toast } from "../views/components/elements/toast";
import { localImage } from "../assets/images";

export class AddNew {
    /**
     * Initialize the product
     * @param data 
     * @returns 
     */
    public async init(data: PostProductBody): Promise<void> {
        try {
            await addProduct(data as PostProductBody);
            Toast.toastShow("toast-success", localImage("icon_success"), "Success", "Product added successfully!");
        } catch (error) {
            Toast.toastShow("toast-error", localImage("icon_error"), "Error", "Error adding product!");
        }
    }
}
