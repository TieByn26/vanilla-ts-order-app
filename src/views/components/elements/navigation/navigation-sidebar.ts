import { navLink } from "../link";
import { HtmlElement } from "../../../../utils";
import { localIcon } from "../../../../assets/icons";
import { localImage } from "../../../../assets/images";
import { RoutesPath } from "../../../../routes";

export class NavList {
    ul: HTMLUListElement;
    
    constructor() {
        this.ul = document.createElement("ul");
        this.renderNavigationLinks();
    }

    /**
     * create lít of navigation link
     */
    renderNavigationLinks() {
        const navigationLinkItems = [
            { 
                icon: localIcon("ic_shoping"), 
                iconActive: localIcon("ic_product_blue"), 
                to: RoutesPath.Product , 
                label: "Product", 
                componentPath: ["/product", "/product-detail/:productId", "/add-product"],
                chevdown: localIcon("ic_chevron_down"),
                chevup: localImage("ic_chevron_up"), 
                isTrue:true
            },
            { 
                icon: localIcon("ic_setting"),
                iconActive: localIcon("ic_setting"), 
                to: "/setting", 
                label: "Setting", 
                componentPath: ["/setting"] 
            },
            { 
                icon: localIcon("ic_support"), 
                iconActive: localIcon("ic_support"), 
                to: "/support", label: "Support", 
                componentPath: ["/support"] 
            }
        ];

        //minimizes reflows and improves performance when inserting multiple elements into the DOM.
        const fragment = document.createDocumentFragment();
        fragment.appendChild(this.createLogo());

        navigationLinkItems.forEach(item => {
            const li = document.createElement("li");
            if (item.isTrue){
                const navlink = new navLink({
                    icon: item.icon,
                    iconActive: item.iconActive,
                    label: item.label,
                    to: item.to,
                    componentPaths: item.componentPath, 
                    chevdown: item.chevdown,
                    chevup: item.chevup
                });                
                li.appendChild(navlink.render());
                fragment.appendChild(li);
                if (item.isTrue && navlink.render().classList.contains('nav-link-active')){
                    const li1 = document.createElement("li");
                    const componentPathPro = ["/product", "/product-detail/:productId", "/add-product"];
                    const navlink1 = new navLink({
                        icon: localIcon("pic_white"),
                        iconActive: localIcon("ic_product_blue"),
                        label: "Product List",
                        to: RoutesPath.Product,
                        componentPaths: componentPathPro,
                    })
                    .render();
                    li1.appendChild(navlink1);
                    fragment.appendChild(li1);
                    const li2 = document.createElement("li");
                    const componentPathCate = ["/categories", "/category-detail/:categoryId", "/add-category"];
                    const navlink2 = new navLink({
                        icon: localImage("pic_white"),
                        iconActive: localIcon("ic_product_blue"),
                        label: "Categories",
                        to: "categories",
                        componentPaths: componentPathCate 
                    }).render();
                    
                    li2.appendChild(navlink2);
                    fragment.appendChild(li2);
                }
                return;
            }
            const navlink = new navLink({
                icon: item.icon,
                iconActive: item.iconActive,
                label: item.label,
                to: item.to,
                componentPaths: item.componentPath, 
            });
            
            li.appendChild(navlink.render());
            fragment.appendChild(li);
        });

        this.ul.appendChild(fragment);
    }


    /**
     * create logo element
     * @returns {HTMLElement}
     */
    createLogo(): Node {
        const li = HtmlElement.liElement("logo");
        li.appendChild(HtmlElement.imgElement(localIcon("ic_logo"), "logo", ""));
        li.appendChild(HtmlElement.spanElement("", "Dashlab"));
        return li;
    }

    render(): Node {
        return this.ul;
    }
}
