import { Visual } from "src/elements/visual";
import { GraphicsDriver } from "..";
import { ThreeJSObject } from "./three.js-object";

export class WebGLThreeJSDriver implements GraphicsDriver<ThreeJSObject> {
    render(input: Visual): ThreeJSObject {
        throw new Error("Method not implemented.");
    }
    
}