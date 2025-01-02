import { elementHtml } from "@/utils";
import { Link } from "../link";
export class button {
    constructor() {}
    elHtml = new elementHtml();

    buttonLink(to, label, icon) {
        const container = new Link(to).render();
        const img = this.elHtml.imgElement(icon, "icon");
        const span = this.elHtml.spanElement("",label);

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

    render(params, options = {}) {
        return this.createButton({...options, className: params});
    }
}
