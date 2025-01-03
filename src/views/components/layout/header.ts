import { NavHeader } from "../elements/navigation";
export class Header {
    constructor(){

    }
    headerLayout(){
        const header = document.createElement("header");
        const nav = document.createElement("nav");
        nav.className = "nav-header";
        nav.appendChild(new NavHeader().render());
        header.appendChild(nav);

        return header;
    }

    render(){
        return this.headerLayout();
    }
}