import { RoutesPath, breadcrumbs, getPath } from "../../../../routes";
import { Link } from "../link";
import { HtmlElement } from "../../../../utils";
import { localIcon } from "../../../../assets/icons";
/** USAGE:
 * const breadcrumb = new Breadcrumb(routePaths.home, routePaths.products, ...);
 * this.container.append(breadcrumb.render());
 */
export class Breadcrumb{
    routePaths: string[];
    container: HTMLElement;
    title: HTMLElement;
    breadcrumb: HTMLElement;
    staticBreadcrumb: HTMLElement;
    
    constructor(routePaths: string[], title: string){
        this.routePaths = routePaths;
        this.container = HtmlElement.divELement("breadcrumb-container");
        //title page
        this.title = HtmlElement.spanElement("breadcrumb-title",title);
        //breadcrumb
        this.breadcrumb = HtmlElement.divELement("breadcrumb-attributes");
        this.initBreadcrumbLink();
        const lastRoutePath = routePaths.slice(-1)[0] as RoutesPath; // Lấy phần tử cuối cùng
        this.staticBreadcrumb = HtmlElement.spanElement("static-breadcrumb", breadcrumbs[lastRoutePath]);        
        this.breadcrumb.appendChild(this.staticBreadcrumb);
        this.container.append(this.title, this.breadcrumb);
    }
    initBreadcrumbLink(){
        this.routePaths.forEach((path, index) => {
            if (index === this.routePaths.length -1) {
                return;
            }
            const link = new Link(getPath[path as RoutesPath]() ,breadcrumbs[path as RoutesPath]).render();
            link.className = "breadcrumb-link";
            this.breadcrumb.append(link, this.getSeparator());
        })
    }
    getSeparator(){
        const separator = HtmlElement.imgElement(localIcon("ic_chevron_down"),"icon","breadcrumb-separator");
        // separator.textContent = ">";
        return separator;
    }
    render(): Node{
        return this.container;
    }
}
