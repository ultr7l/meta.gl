/**
 ░░
    GraphicsDriver API
 ░░
 **/

import { Visual } from "src/elements/visual";


export interface GraphicsDriver<RenderTo> {

    render(input: Visual): RenderTo;

}