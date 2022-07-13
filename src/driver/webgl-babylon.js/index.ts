import { Visual } from "src/elements/visual";
import { GraphicsDriver } from "..";
import { BabylonJSObject } from "./babylon.js-object";

export class WebGLBabylonJSDriver implements GraphicsDriver<BabylonJSObject> {
    render(input: Visual): BabylonJSObject {

        return null;
    }
}