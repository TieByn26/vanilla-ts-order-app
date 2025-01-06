import { HtmlElement } from "../../../../utils";
import { Link } from "../link";
export class button {
    constructor() {

    }

    buttonLink(to: string, label: string, icon: string) {
        const container = new Link(to).render();
        const img = HtmlElement.imgElement(icon, "icon");
        const span = HtmlElement.spanElement("",label);

        container.appendChild(img);
        container.appendChild(span);

        return container;
    }

    createButton({to = '', label = '',icon = '', className = '' } = {}) {
        const container = document.createElement("button");
        container.className = className;
        
        container.appendChild(this.buttonLink(to, label, icon));

        return container;
    }

    render(params: string, options = {}): HTMLElement {
        return this.createButton({...options, className: params});
    }
}
