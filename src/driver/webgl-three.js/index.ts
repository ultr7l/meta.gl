import { Visual } from "src/elements/visual.js";
import { GraphicsDriver } from "../index.js";
import { ThreeJSObject } from "./three.js-object.js";

export class WebGLThreeJSDriver implements GraphicsDriver<ThreeJSObject> {
    render(input: Visual): ThreeJSObject {
        throw new Error("Method not implemented.");
    }
    
}