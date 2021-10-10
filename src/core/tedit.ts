import Component from "./component.js";
import { isDuplicate } from "../utilities/listOperations.js";
import {getKeyValue, setKeyValue} from "../utilities/objectOperations.js";
import Navbar from "./navbar.js";
import blockMap from "./internals/blockMap.js";
import { Init } from "./data.js";
import Content from "./content.js";
import ContextMenu from "./contextMenu.js";
import DomWorker from "../base/DomWorker.js";

class Tedit {
    private elements: Array<Component>;
    public html: HTMLElement;

    constructor({data, types}: Init){
        console.log(data, types);
        this.html = DomWorker.create("div");
        this.html.appendChild(DomWorker.create("div"));

        Component.setTedit(this);

        if(data) {
            for(let i=0; i<data.length; i++){
                //blockMap[data[i].type]
                this.append((new (getKeyValue(data[i].type as never)(blockMap))()));
            }
        }
    }

    public append(element: Component){
        console.log("# Appending <", element, ">");
    }

    public save(){
        console.log("# Saving...");
    }

    public getContent(){
        console.log("# Fetching content...");
    }
}

export default Tedit;