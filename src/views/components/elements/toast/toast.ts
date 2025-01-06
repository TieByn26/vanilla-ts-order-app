import { HtmlElement } from "../../../../utils";
import { localIcon } from "../../../../assets/icons";

export class Toast {

    static toastShow(className: string, icon: string, title: string, message: string){
        const toastM = HtmlElement.divELement(className);
        const iconn = HtmlElement.imgElement(icon,"icon","")
        const divContent = HtmlElement.divELement("");
        const spanTitle = HtmlElement.spanElement("",title);
        const spanMessage = HtmlElement.spanElement("",message);
        divContent.append(spanTitle, spanMessage);
        const cancel = HtmlElement.imgElement(localIcon("pic_white"),"icon","cancel-icon");
        toastM.append(iconn, divContent, cancel);

        setTimeout(()=>{
            toastM.style.right = "30px";
        }, 100);

        cancel.addEventListener('click', () => {
            setTimeout(() => {
                toastM.style.right = "-300px"; 
                setTimeout(() => {
                    toastM.remove();
                }, 500);
            }, 30);
        });

        setTimeout(() => {
            toastM.style.right = "-300px"; 
            setTimeout(() => {
                toastM.remove();
            }, 500);
        }, 3000);
        document.body.appendChild(toastM);
    }
}