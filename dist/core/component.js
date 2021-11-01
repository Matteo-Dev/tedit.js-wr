class Component {
    constructor() {
        this.navbarModules = [];
        this.templates = [];
    }
    render(template) {
        this.html = template.html;
        template.html.addEventListener("click", this.onclick.bind(this));
        Component.tedit.html.appendChild(template.html);
    }
    loadTemp(index) {
        this.templates[index].loadData(this.content);
        this.render(this.templates[index]);
        this.activeTemplate = this.templates[index];
    }
    getContent() {
        return this.content;
    }
    getCompData() {
        return {
            type: this.name,
            content: this.content,
            template: this.templates.indexOf(this.activeTemplate),
        };
    }
    static setTedit(tedit) {
        this.tedit = tedit;
    }
    onclick() {
        console.log(this);
        Component.tedit.navbar.load(this.activeTemplate.barConfig);
    }
}
export default Component;
//# sourceMappingURL=component.js.map