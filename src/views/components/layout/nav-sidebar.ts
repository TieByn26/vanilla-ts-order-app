import { NavList } from "../elements/navigation";

export class Navigation{
    container: HTMLElement;
    
    constructor(){
        this.container = document.createElement("nav");
        this.container.className = "nav-container";
        const navlist = new NavList();
        this.container.appendChild(navlist.render())
    }   
    render(){
        return this.container;
    }
}