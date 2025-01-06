/**
 * Form component to get dât 
 * @param callback 
 * @returns 
 */
export const Form = (callback: (data: Record<string, FormDataEntryValue>) => void) => {
    const form: HTMLFormElement = document.createElement("form");
    form.className = "form";
    form.setAttribute("method", "post");

    /**
     *  Render the form
     * @param children 
     * @returns 
     */
    const render = (children: HTMLElement[]): HTMLFormElement => {
        children.forEach((child) => {
            form.appendChild(child);
        });
        return form;
    };

    /**
     * Get the form data
     * @returns 
     */
    const getData = (): {} => {
        const formData = new FormData(form);
        const data: Record<string, FormDataEntryValue> = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    };

    form.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault(); 
        callback(getData());
        console.log(getData());
    });

    return {
        render
    };
};
