import { Navigation, Main, Header } from ".";
import { HtmlElement } from '../../../utils/html-element';

export class RootLayout {
    rootContainer: HTMLElement;
    nav: Navigation;
    nodeContainer: HTMLElement;
    headerContent: any;
    mainContent: Main;


    constructor() {
        this.rootContainer = HtmlElement.divELement("root-container");
        this.nav = new Navigation();
        this.nodeContainer = HtmlElement.divELement("node-container");
        
        this.headerContent = new Header();
        this.mainContent = new Main();

        this.initLayout();
    }

    /**
     * initialize the default layout structure
     */
    initLayout() {
        this.rootContainer.appendChild(this.nav.render());
        this.rootContainer.appendChild(this.nodeContainer);
        this.nodeContainer.append(this.headerContent.render(), this.mainContent.render());
    }

    /**
     * @param {HTMLElement} childNode 
     */
    render(childNode: Node) {
        this.mainContent.container.replaceChildren(childNode);
        return this.rootContainer;
    }
}