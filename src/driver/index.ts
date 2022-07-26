/**
 ░░
    GraphicsDriver API
 ░░
 **/

 
import { Light } from "src/elements/1_0_light.js";
import { Camera } from "src/elements/2_0_camera.js";
import { Visual } from "src/elements/3_0_visual.js";
import { Wave }   from "src/elements/3_2_visual-material.wave.js";
import { FragmentShader, VertexShader } from "../index.js";
import { VertexBufferType } from "./vertex-buffer.type.js";


export interface GraphicsDriver<RenderTo, Scene, CTXParams = any> {

    state: {

        context: CTXParams;
        scene:      Scene;
    }


    initializeContext(params: CTXParams): this;
    getVisualResource(object: Light | Camera | Visual): RenderTo;


    attachObject(     object: Light | Camera | Visual): this;
    removeObject(     object: Light | Camera | Visual): this;

    updateMatrix(     object: Light | Camera | Visual): void;
    
    updateUniforms(   object: Light | Camera | Visual): void;
    updateAttributes( object: Light | Camera | Visual): void;
    updateShaders(    vertexShader: VertexShader, fragmentShader: FragmentShader):void;
    
    updateTextures(   object: Light | Camera | Visual, texture: Wave[], mapNames: string[]): void;
    updateBuffers(    object: Light | Camera | Visual, buffer: number[], bufferType: VertexBufferType, updatable: boolean): void;


    render(input: Visual): RenderTo;
}
