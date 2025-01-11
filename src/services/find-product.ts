import { axiosApiGetData } from ".";

/**
 * @param endPointUrl 
 * @returns 
 */
export const findData = async <T>(endPointUrl: string): Promise<T[] | T> => {
    try {
        const data = await axiosApiGetData(endPointUrl);
        return data as T[];
    } catch (error) {
        return [];
    }
};
