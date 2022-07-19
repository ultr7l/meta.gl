import { Camera } from "src/elements/camera.js";
import { Light } from "src/elements/light.js";
import { Visual } from "src/elements/visual.js";
import { GraphicsDriver } from "../index.js";
import { ThreeJSObject } from "./three.js-object.js";
import { ThreeJsInitializationContext } from "./three.js.init-ctx.js";

export class WebGLThreeJSDriver implements GraphicsDriver<ThreeJSObject> {
   
    initializeContext(params: ThreeJsInitializationContext): void {
        throw new Error("Method not implemented.");
    }

    addToScene(object: Light | Camera | Visual): void {
        throw new Error("Method not implemented.");
    }
    
    render(input: Visual): ThreeJSObject {
        throw new Error("Method not implemented.");
    }
    
}