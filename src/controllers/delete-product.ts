import { deleteProduct } from "../services/delete-product";

export class DeleteProduct {
    private response: string;

    /**
     * Initialize the class with the id of the product to delete
     * @param id 
     */
    public async init(id: number): Promise<void> {
        try {
            await deleteProduct(id);
            this.response = "Product deleted successfully!";
        } catch (error) {
            this.response = "Error deleting product!";
        }
    }

    public getRespone(): string {
        return this.response;
    }
}
