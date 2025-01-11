import { deleteProduct } from "../services/delete-product";
import { message } from "../utils";
import { Toast } from "../views/components/elements/toast";
import { localImage } from "../assets/images";

export class DeleteProduct {
    /**
     * Initialize the class with the id of the product to delete
     * @param id 
     */
    public async init(id: number): Promise<void> {
        try {
            await deleteProduct(id);
            Toast.toastShow("toast-success",localImage("icon_success") ,"Success", message.deleteSuccess);
        } catch (error) {
            Toast.toastShow("toast-error", localImage("icon_error"), "Error", message.deleteError);
        }
    }
}
