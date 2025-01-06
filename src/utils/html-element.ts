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
}
