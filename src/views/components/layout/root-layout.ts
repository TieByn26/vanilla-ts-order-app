// import { navigation, header, main } from '.';
import { HtmlElement } from '../../../utils/html-element';

export class RootLayout {
    rootContainer: HTMLElement;

    constructor() {
        this.rootContainer = HtmlElement.divELement("root-container");
        // this.nav = new navigation();
        // this.nodeContainer = HtmlElement.divELement("node-container");
        
        // this.headerContent = new header();
        // this.mainContent = new main();

        this.initLayout();
    }

    /**
     * initialize the default layout structure
     */
    initLayout() {
        // this.rootContainer.appendChild(this.nav.render());
        // this.rootContainer.appendChild(this.nodeContainer);
        // this.nodeContainer.append(this.headerContent.render(), this.mainContent.render());
    }

    /**
     * @param {HTMLElement} childNode 
     */
    render(childNode: HTMLElement) {
        // this.mainContent.container.replaceChildren(childNode);
        return this.rootContainer;
    }
}