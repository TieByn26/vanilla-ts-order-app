import { deleteProduct } from "../services/delete-product";

export class DeleteProduct {
    private response: string;

    public async init(id: number): Promise<void> {
        try {
            await deleteProduct(id);
            this.response = "Product deleted successfully!";
        } catch (error) {
            this.response = "Error deleting product!";
            console.error("Error deleting product:", error);
        }
    }

    public getRespone(): string {
        return this.response;
    }
}
