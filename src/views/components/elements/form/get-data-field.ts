type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Get data field from form elements
 * how to use: getDataField(Array.from(formElements));
 * @param elements 
 * @returns 
 */
export const getDataField = (elements: FormElement[]): Record<string, any> => {
    const data: Record<string, any> = {};
    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        };
        return date.toLocaleDateString('en-GB', options);
    }

    // assign data properties
    data["variant"] = "2 Variants";
    data["added"] = formatDate(new Date());
    // define handlers for each type of form element
    const handlers = new Map<string, (element: FormElement) => any>([
        ["input:checkbox", (element) => (element as HTMLInputElement).checked],
        ["input:default", (element) => (element as HTMLInputElement).value],
        ["select", (element) => {
            const select = element as HTMLSelectElement;
            const selectedOption = select.selectedOptions[0];
            return selectedOption?.value || selectedOption?.textContent || null;
        }],
        ["textarea", (element) => (element as HTMLTextAreaElement).value],
    ]);

    elements.forEach((element) => {
        if (element.name && element.type !== "file") {  // "File" cần viết hoa chữ cái F thành "file"
            // get key for handlers map
            const key = element.tagName.toLowerCase() === "input"
                ? `input:${(element as HTMLInputElement).type === "checkbox" ? "checkbox" : "default"}`
                : element.tagName.toLowerCase();

            data[element.name] = handlers.get(key)?.(element) ?? null;
        }
    });

    return data;
};
