class Component {
    constructor() {
        this.navbarModules = [];
    }
    render(template) {
        Component.tedit.html.appendChild(template.html);
    }
    static setTedit(tedit) {
        this.tedit = tedit;
    }
}
export default Component;
//# sourceMappingURL=component.js.map