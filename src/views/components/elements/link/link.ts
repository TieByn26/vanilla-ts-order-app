import { anchorAttributes } from "../../../../utils";
import { Router } from "../../../../routes";

/** USAGE
 * const link = new Link(to, text);
 * const componentLink = link.render();
 */
export class Link {
    /**
     * 
     * @param {String} to - target URL 
     * @param {String} text - optional text for the link element
     */
    link: HTMLElement;
    constructor(to: string, text: string = '') {
        this.link = this.createLinkElement(to, text);
    }

    /**
     * Create and configure the link element
     * @param {String} to 
     * @param {String} text 
     * @returns {HTMLElement} - anchor element
     */
    createLinkElement(to: string, text: string): HTMLElement {
        const link = document.createElement("a");
        link.href = to;
        link.textContent = text;  // Set text if provided
        link.setAttribute(anchorAttributes.link, "");

        // Bind event listener
        link.addEventListener("click", this.handleLinkClick.bind(this));
        return link;
    }

    /**
     * Handle click event to prevent page reload and update new path
     * @param {Event} event 
     */
    handleLinkClick(event: Event) {
        event.preventDefault();
        Router.pushState(this.link.getAttribute("href") as string);
    }

    /**
     * Render the anchor element
     * @returns {HTMLElement} - the link element
     */
    render(): HTMLElement {
        return this.link;
    }
}
