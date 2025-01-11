type ButtonType = "button" | "submit" | "reset";
export class HtmlElement{
    constructor(){

    }
    static divELement(className: string = ""){
        const div = document.createElement("div");
        div.className = className;

        return div;
    }
    static aElement(className: string = "", href: string =""){
        const a = document.createElement("a");
        a.className = className;
        a.href = href;

        return a;
    }
    static imgElement(src: string, alt: string, className: string = ""){
        const img = document.createElement("img");
        img.className = className;
        img.src = src;
        img.alt = alt;

        return img;
    }
    static spanElement(className: string = "", content: string){
        const span = document.createElement("span");
        span.className = className;
        span.textContent = content;

        return span;
    }
    static ulElement(className: string = ""){
        const ul = document.createElement("ul");
        ul.className = className;

        return ul;
    }
    static liElement(className: string = ""){
        const li = document.createElement("li");
        li.className = className;

        return li;
    }
    static inputElement(type: string, className: string = "", placeholder: string = "", name: string = "") {
        const input = document.createElement("input");
        input.className = className;
        input.type = type;
        input.placeholder = placeholder;
        input.name = name; 
    
        return input;
    }
    static textAreaElement(className: string = "", placeholder: string = "", name: string = ""){
        const textArea = document.createElement("textarea");
        textArea.className = className;
        textArea.placeholder = placeholder;
        textArea.name = name;

        return textArea;
    }
    static buttonElement(text: string, className: string = "", type: ButtonType = "button") {
        const button = document.createElement("button");
        button.className = className;
        button.type = type; 
        button.textContent = text;
        return button;
    }
    static selectElement(className: string = ""){
        const select = document.createElement("select");
        select.className = className;

        return select;
    }
    static optionElement(value: string, text: string){
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;

        return option;
    }
}
