import { axiosApiAddData } from ".";
import { PostProductBody } from "../types";

export const addProduct = async (data: PostProductBody): Promise<PostProductBody> => {
    try {
        const response = await axiosApiAddData("/products", data);
        return response;
    } catch (error: any) {
        return error;
    }
}