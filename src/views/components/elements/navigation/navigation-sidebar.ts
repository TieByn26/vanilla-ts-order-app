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
                to: RoutesPath.Product, 
                label: "Product", 
                componentPath: ["/product", "/product-detail/:productId", "/add-product"],
                chevdown: localIcon("ic_chevron_down"),
                chevup: localImage("ic_chevron_up"), 
                isTrue: true
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
                to: "/support", 
                label: "Support", 
                componentPath: ["/support"] 
            }
        ];
    
        const fragment = document.createDocumentFragment();
        fragment.appendChild(this.createLogo());
    
        const createNavLinkItem = (item: any) => {
            const li = document.createElement("li");
            const navlink = new navLink({
                icon: item.icon,
                iconActive: item.iconActive,
                label: item.label,
                to: item.to,
                componentPaths: item.componentPath,
                chevdown: item.chevdown,
                chevup: item.chevup
            }).render();
            li.appendChild(navlink);
            return { li, navlink };
        };
    
        const subLinks = [
            {
                icon: localIcon("pic_white"),
                iconActive: localIcon("ic_product_blue"),
                label: "Product List",
                to: RoutesPath.Product,
                componentPath: ["/product", "/product-detail/:productId", "/add-product"]
            },
            {
                icon: localImage("pic_white"),
                iconActive: localIcon("ic_product_blue"),
                label: "Categories",
                to: "categories",
                componentPath: ["/categories", "/category-detail/:categoryId", "/add-category"]
            }
        ];
        // render navigation link 
        navigationLinkItems.forEach(item => {
            const { li, navlink } = createNavLinkItem(item);
            fragment.appendChild(li);
            // if the item is true and the navlink has the class 'nav-link-active'
            item.isTrue && navlink.classList.contains('nav-link-active') &&
                subLinks.forEach(subItem => {
                    fragment.appendChild(createNavLinkItem(subItem).li);
                });
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
