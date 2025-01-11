import { addProduct } from "../services";
import { PostProductBody } from "../models";
import { Toast } from "../views/components/elements/toast";
import { localImage } from "../assets/images";

export class AddNew {
    public async init(data: PostProductBody): Promise<void> {
        try {
            const response = await addProduct(data as PostProductBody);
            Toast.toastShow("toast-success", localImage("icon_success"), "Success", "Product added successfully!");
            return response;
        } catch (error) {
            Toast.toastShow("toast-error", localImage("icon_error"), "Error", "Error adding product!");
        }
    }
}
