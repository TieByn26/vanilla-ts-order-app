import { axiosInstance } from "./api-client";

// Function get data by endpoint url
export const axiosApiGetData = async (endPointUrl: string) => {
    try {
        const res = await axiosInstance.get(endPointUrl);
        return res.data;
    } catch (err: any) {
        return err.message;
    }
};

// Function add new data
export const axiosApiAddData = async (endPointUrl: string, newData: object) => {
    try {
        await axiosInstance.post(endPointUrl, newData);
    } catch (err: any) {
        return err.message;
    }
};

// Function update data
export const axiosApiUpdateData = async (endPointUrl: string, updatedData: object) => {
    try {
        await axiosInstance.put(endPointUrl, updatedData);
    } catch (err: any) {
        return err.message;
    }
};

//Function patch data
export const axiosApiPatchData = async (endPointUrl: string, updatedData: object) => {
    try {
        await axiosInstance.patch(endPointUrl, updatedData);
    } catch (err: any) {
        return err.message;
    }
};


// Function delete data
export const axiosApiDeleteData = async (endPointUrl: string) => {
    try {
        await axiosInstance.delete(endPointUrl);
    } catch (err: any) {
        return err.message;
    }
};