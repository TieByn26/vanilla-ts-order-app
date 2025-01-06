import { HtmlElement } from "../../../utils";
import { LoginForm } from "../../components/elements/form";

export class Login {
    container: Node; 
    
    constructor() {
        this.container = HtmlElement.divELement("login-container");
        this.container.appendChild(new LoginForm().render());
        console.log(new LoginForm().render());
    }
    render(): HtmlElement {
        return this.container;
    }
}