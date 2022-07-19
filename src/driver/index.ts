/**
 ░░
    GraphicsDriver API
 ░░
 **/

import { Camera } from "src/elements/camera";
import { Light }  from "src/elements/light";
import { Visual } from "src/elements/visual.js";


export interface GraphicsDriver<RenderTo, CTXParams = any> {

    initializeContext(params: CTXParams): void;

    addToScene(object: Light | Camera | Visual): void;

    render(input: Visual): RenderTo;

}