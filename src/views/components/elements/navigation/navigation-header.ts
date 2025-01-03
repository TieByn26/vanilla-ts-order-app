import { HtmlElement } from "../../../../utils";
import { localIcon } from "../../../../assets/icons";

export class NavHeader {
    list = [
        this.navHeaderLink(localIcon("ic_search")),
        this.navHeaderLink(localIcon("ic_calendar")),
        this.navHeaderLink(localIcon("ic_notification")),
        this.navHeaderLink(localIcon("ic_envelope_menu")),
        this.navHeaderLink(localIcon("ic_gray"))
    ];

    constructor() {
        
    }
    navHeaderLink(icon: string): Node  {
        const a = HtmlElement.aElement("","#");
        const img = HtmlElement.imgElement(icon,"icon","");
        a.appendChild(img);

        return a;
    };
    

    navList() {
        const ul = document.createElement("ul");
        this.list.forEach(item => {
            const li = document.createElement("li");
            li.appendChild(item);
            ul.appendChild(li);
        });
        return ul;
    }

    manager() {
        const figure = document.createElement("figure");
        const img = HtmlElement.imgElement(localIcon("ic_avatar"),"icon","");
        figure.appendChild(img);

        const div = document.createElement("div");
        const spanName = HtmlElement.spanElement("span-name","Jay Hargudson");
        const spanPosition = HtmlElement.spanElement("span-position","Manager");

        div.appendChild(spanName);
        div.appendChild(spanPosition);

        const chevron = document.createElement("div");
        chevron.appendChild(this.navHeaderLink(localIcon("ic_chevron")));

        const container = HtmlElement.divELement("container-admin");
        container.appendChild(figure);
        container.appendChild(div);
        container.appendChild(chevron);

        return container;
    }

    header() {
        // nav-header_menu
        const divContainer1 = HtmlElement.divELement("nav-header_menu");
        divContainer1.appendChild(this.navHeaderLink(localIcon("ic_menu")));

        // nav-header_container
        const divContainer2 = HtmlElement.divELement("nav-header_container");

        // nav-header_container-leftmenu
        const divContainer3 = HtmlElement.divELement("nav-header_container-leftmenu");
        divContainer3.appendChild(this.navList());

        // nav-header_container-rightmenu
        const divContainer4 = HtmlElement.divELement("nav-header_container-rightmenu");
        divContainer4.appendChild(this.manager());

        divContainer2.appendChild(divContainer3);
        divContainer2.appendChild(divContainer4);

        // Append all to a container div and return it
        const navTop = HtmlElement.divELement("nav-header-top");;
        navTop.appendChild(divContainer1);
        navTop.appendChild(divContainer2);

        return navTop;
    }

    render(): Node {
        return this.header();
    }
}
