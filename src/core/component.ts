import Content from "./content.js";
import NavbarModule from "./navbarModule.js";
import Tedit from "./tedit.js";
import Template from "./Template.js";

abstract class Component {
    protected content:Content;
    protected ID: string;
    protected name: string;
    protected position: number;
    protected navbarModules: NavbarModule[];
    public html: HTMLElement;
    protected templates: Template[];
    protected activeTemplate: Template; // the currently loaded template

    // TODO: do not forget to bring back to protected!
    public static tedit: Tedit;

    constructor(){
        this.navbarModules = [];
    }

    // ! pretty bad way of rendering - or not?
    protected render(template: Template){
        // TODO: not only appending, but replacing the previous version of the element
        template.html.addEventListener("click", this.onclick.bind(this));
        Component.tedit.html.appendChild(template.html);
    }

    public static setTedit(tedit: Tedit){
        this.tedit = tedit;
    }

    // TODO: check for already loaded navbar - otherwise unecessary loading cycles
    private onclick() {
        console.log(this);
        Component.tedit.navbar.load(this.activeTemplate.barConfig);
    }
}

export default Component;