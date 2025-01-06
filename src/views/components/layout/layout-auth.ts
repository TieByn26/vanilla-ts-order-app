import { Login } from "../..";

export class AuthLayout {
    container: HTMLElement;
    login: Login;
    
    constructor(){
        this.container = document.createElement("div");
        this.container.className = "layout-auth";
        this.container.appendChild(this.login.render() as Node);
    }
    render(){
        return this.container;
    }
}