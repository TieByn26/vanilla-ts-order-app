import { routes } from "./routes";

export class Router {
    constructor() {
        window.addEventListener("popstate", () => window.dispatchEvent(new CustomEvent("urlChanged")));
        window.addEventListener("urlChanged", Router.routeToMatchingComponent);
        /**
         * web start
         */

        Router.pushState(window.location.pathname);
    }
    static async authentication(){
       
    }
    /**
     * get params from the current URL
     * @returns {object|null}
     */
    static getParam(): Record<string, string> | null{
        const urlPath = window.location.pathname;
    
        const routes = Router.getFlattenedRoutes() as { path: string }[];
    
        for (const route of routes) {
            const { path } = route;
            if (Router.correctPath(urlPath, path)) {
                return Router.extractParams(urlPath, path);
            }
        }
    
        return null;
    }
    

    /**
     * retrieve all routes (including child routes)
     * @returns {Array}
     */
    
    static getFlattenedRoutes() : Record<string, any>[]{
        return routes.flatMap(route => {
            if (route.children) {
                return route.children.map(child => ({
                    ...child,
                    parentComponent: route.component, 
                }));
            } else {
                return [{ ...route, parentComponent: route.component }];
            }
        });
    }

    /**
     * ẽtract params from URL and corresponding path
     * @param {String} url 
     * @param {String} path 
     * @returns {object}
     */
    static extractParams(url: string, path: string): Record<string, string> {
        const urlSegments = url.split("/");
        const pathSegments = path.split("/");
    
        return pathSegments.reduce<Record<string, string>>((params, segment, i) => {
            if (segment.startsWith(":")) {
                params[segment.slice(1)] = urlSegments[i];
            }
            return params;
        }, {});
    }
    

    /**
     * get the component and render it based on the current URL
     * @returns {object}
     */
    static getRoutes(): { childNode: HTMLElement | null,
         path: string | null
         , params: Record<string, string> | null }{
        const urlPath = window.location.pathname;
        for (const route of Router.getFlattenedRoutes()) {
            const { path, component, parentComponent } = route;
            if (Router.correctPath(urlPath, path)) {
                const params = Router.extractParams(urlPath, path);
                const childNode = new component().render();
                if (parentComponent) {
                    if (path === "/login") { 
                        return { childNode: new parentComponent().authrender(childNode), path, params };
                    }
                    return { childNode: new parentComponent().render(childNode), path, params };
                }
                return { childNode, path, params };
            }
        }
        return { childNode: null, path: null, params: null };
    }

    /**
     * check if the URL matches the routes path
     * @param {string} url 
     * @param {string} path 
     * @param {boolean} isEqualLength 
     * @returns {boolean}
     */
    static correctPath(url: string, path: string, isEqualLength: boolean = true): boolean {
        const urlSegments = url.split("/");
        const pathSegments = path.split("/");
        
        if (isEqualLength && urlSegments.length !== pathSegments.length) return false;

        return pathSegments.every((segment, i) => segment.startsWith(":") || segment === urlSegments[i]);
    }

    /**
     * navigate to the component that matches the current URL
     */
    static routeToMatchingComponent() {
        const app = document.querySelector("#app");
        const { childNode } = Router.getRoutes();
        if (app ) {
            app.replaceChildren(childNode || Router.createNotFoundComponent());
        }
    }

    /**
     * create a "404" component when no matching route is found
     * @returns {HTMLElement}
     */
    static createNotFoundComponent(): HTMLElement {
        const div = document.createElement("div");
        div.className = "notfound-page";
        const img = document.createElement("img");
        img.src = "https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1880.jpg?w=740&t=st=1726988079~exp=1726988679~hmac=1a8c363360a589080d27afddf4fe8f9e2f0f0d8b8d7bb51af5043f2b1772f176";
        div.appendChild(img);
        return div;
    }

    /**
     * change the URL and dispatch the urlChanged event
     * @param {String} pathUrl 
     */
    static pushState(pathUrl: string) {
        window.history.pushState(null, "", pathUrl);
        window.dispatchEvent(new CustomEvent("urlChanged"));
    }
}