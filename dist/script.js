import DOM from "./base/dom.js";
import Tedit from "./core/tedit.js";
const tedit = new Tedit([
    {
        type: "text",
        data: {
            text: "hello",
            variant: 1,
        }
    },
    {
        type: "text",
        data: {
            text: "hello",
            variant: 0,
        }
    },
]);
const button = DOM.create("button", {
    innerText: "Get Content",
    onclick: () => {
        document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]);
        DOM.render(DOM.create("pre", { className: "out", innerText: JSON.stringify(tedit.getContent(), null, 3) }));
        tedit.save();
    }
});
DOM.render(tedit.getDomElement());
DOM.render(button);
DOM.render(DOM.create("pre", { className: "out", innerText: JSON.stringify(tedit.getContent(), null, 3) }));
//# sourceMappingURL=script.js.map