export class Main {
    container: HTMLElement;
    
    constructor(){
        this.container = document.createElement("main");
        this.container.className = "main-container";
    }
    render(){
        return this.container;
    }
}