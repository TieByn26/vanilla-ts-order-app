import { updateProduct } from "../services/update-product";
import { Toast } from "../views/components/elements/toast";
import { localImage } from "../assets/images";
import  { PostProductBody } from "../types/product";
import { message } from "../utils";

// Update product by id
export class UpdateProduct {
    public async init(id: string, data: PostProductBody): Promise<void> {
        try {
            await updateProduct(id, data);
            Toast.toastShow("toast-success", localImage("icon_success"), "Success", message.updateSuccess);
        } catch (error) {
            Toast.toastShow("toast-error", localImage("icon_error"), "Error", message.updateError);
        }
    }
}