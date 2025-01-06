import { HtmlElement } from "../../../../utils";
import { anchorAttributes } from "../../../../utils";
import { Router } from "../../../../routes";

type NavLink = {
    icon: string,
    iconActive: string,
    label: string,
    to: string,
    componentPaths?: string[],
    chevdown?: string,
    chevup?: string
};

export class navLink {
    navlink: HTMLElement;
    icon: string;
    iconActive: string;
    label: string;
    to?: string;
    componentPaths: string[];
    chevdown?: string;
    chevup?: string;

    constructor({icon, iconActive, label, to, componentPaths = [], chevdown, chevup}: NavLink) {
        if (chevdown && chevup){
            this.chevdown = chevdown;
            this.chevup = chevup;
        }
        this.icon = icon;
        this.iconActive = iconActive;
        this.label = label;
        this.to = to;
        this.componentPaths = componentPaths;
        this.navlink = this.createLink(label);
        this.addEvents();
    }

    createLink(label: string): HTMLElement {
        const link = HtmlElement.aElement(this.getActiveClass(), this.to);
        link.setAttribute(anchorAttributes.navLink, "");
        link.append(
            HtmlElement.imgElement(this.icon, "icon", ""),
            HtmlElement.spanElement("", label)
        );
        if (this.chevdown){
            link.appendChild(HtmlElement.imgElement(this.chevdown, "icon","chev"));
        }
        return link;
    }

    getActiveClass(): string {
        const isActive = this.isActive();
        if (isActive) {
            this.icon = this.iconActive;
            if (this.chevdown) {
                this.chevdown = this.chevup;
            }
        }
        return `nav-link ${isActive ? "nav-link-active" : ""}`;
    }

    isActive() {
        const currentPath = location.pathname;
        const catePath = ["/categories", "/category-detail/:categoryId", "/add-category"];
        if (this.label === "Product") {
            return this.componentPaths.some(path => this.matchPath(currentPath, path)) ||
                   currentPath.startsWith("/") ||
                   catePath.some(path => this.matchPath(currentPath, path))
        }
        if (this.label === "Product List") {
            return this.componentPaths.some(path => this.matchPath(currentPath, path)) ||
                   currentPath.startsWith("/");
        }
        if (this.label === "Categories") {
            return this.componentPaths.some(path => this.matchPath(currentPath, path));
        }

        return this.componentPaths.some(path => this.matchPath(currentPath, path));
    }

    matchPath(url: string, path: string): boolean {
        const urlSegments = url.split("/");
        const pathSegments = path.split("/");
        return pathSegments.every((seg, i) => seg.startsWith(":") || seg === urlSegments[i]);
    }

    addEvents() {
        this.navlink.addEventListener("click", (e) => {
            e.preventDefault();
            Router.pushState(this.to as string);
        });
    }

    render(): HTMLElement {
        return this.navlink;
    }
}