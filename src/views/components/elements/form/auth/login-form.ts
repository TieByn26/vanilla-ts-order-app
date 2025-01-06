import { HtmlElement } from "../../../../../utils";
import { Form } from "..";
import { localIcon } from "../../../../../assets/icons";

export class LoginForm {
    container: HTMLElement;
    title: HTMLElement;
    constructor() {
        this.container = HtmlElement.divELement("form-login");
        this.title = document.createElement("h1");
        this.title.innerText = "Login";
        this.title.appendChild(HtmlElement.imgElement(localIcon("ic_logo"), "icon"));
        this.container.appendChild(this.title);
        this.input();
    }
    input() {
        const inputUsername = HtmlElement.inputElement("text", "form_username", "username", "Username");
        const inputPassword = HtmlElement.inputElement("password", "form_password", "password", "Password");
        const submitButton = HtmlElement.buttonElement("submit", "form_submit", "submit");
        const form = Form(()=>{});
        this.container.appendChild(
            form.render([inputUsername, inputPassword, submitButton])
        );
    }
    render(): Node{
        return this.container;
    }
}
