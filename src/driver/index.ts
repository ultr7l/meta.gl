/**
 ░░
    GraphicsDriver API
 ░░
 **/

import { Visual } from "src/elements/visual.js";


export interface GraphicsDriver<RenderTo> {

    render(input: Visual): RenderTo;

}