export const headTable = (keys = [
    "Product",
    "SKU",
    "Category",
    "Stock",
    "Price",
    "Status",
    "Added",
    "Action"
]): Node => {
    const headTable = document.createElement("thead");
    headTable.className = "table-head";
    const row = document.createElement("tr");
    row.className = "table-head_row";
    keys.forEach((key) => {
        const cell = document.createElement("th");
        if (key === "Product") {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            cell.appendChild(checkbox);
            const textNode = document.createTextNode(` ${key}`); 
            cell.appendChild(textNode);
        } else {
            const textNode = document.createTextNode(` ${key}`); 
            cell.appendChild(textNode);
        }
        row.appendChild(cell);
    });
    headTable.appendChild(row);
    return headTable;
};
