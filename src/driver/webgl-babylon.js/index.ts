import { Camera } from "src/elements/camera.js";
import { Light } from "src/elements/light.js";
import { Visual } from "src/elements/visual.js";
import { GraphicsDriver } from "../index.js";
import { BabylonJSObject } from "./babylon.js-object.js";
import { BabylonJsInitializationContext } from "./babylon.js.init-ctx.js";




export class WebGLBabylonJSDriver implements GraphicsDriver<BabylonJSObject, BabylonJsInitializationContext> {

    initializeContext(params: BabylonJsInitializationContext): void {
    
    }

    addToScene(object: Light | Camera | Visual): void {
        



    }

    render(input: Visual): BabylonJSObject {

        return;
    }
}