import { Visual } from "src/elements/visual.js";
import { GraphicsDriver } from "../index.js";
import { BabylonJSObject } from "./babylon.js-object.js";

export class WebGLBabylonJSDriver implements GraphicsDriver<BabylonJSObject> {
    render(input: Visual): BabylonJSObject {

        return null;
    }
}