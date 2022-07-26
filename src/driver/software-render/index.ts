import { _BuiltinFunctionObject, StringObject } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_1_object.js";
import { FragmentShader, VertexShader } from "../..";
import { ColorRendererFactory } from "../../builtin/color.js";
import { GraphicsDriver } from "..";
import { SoftwareRenderInitiationContext } from "./software.init-ctx.js";
import { Wave } from "src/elements/3_2_visual-material.wave.js";

import { VertexBufferType } from "../vertex-buffer.type.js";

import { Light  } from "src/elements/1_0_light.js";
import { Camera } from "src/elements/2_0_camera.js";
import { Visual } from "src/elements/3_0_visual.js";



export const PIXEL_BLOCK_SIZE   =     16;
export const ASCII_BLOCK_SIZE   =      8;

export const PALLET_ASCII       =     " .`,-_*x=/|FXH$#@";
export const PALLET_UNICODE     =     "   ░░░▒▒▒▒███";
export const PALLET_UNICODE_HDR =     " ░░░░░░░▒▒▒██";

export const ASCII              = new StringObject(PALLET_ASCII);
export const UNICODE            = new StringObject(PALLET_UNICODE);
export const UNICODE_HDR        = new StringObject(PALLET_UNICODE_HDR);

export const colorRenderer      =     ColorRendererFactory.get();

export interface SoftwareFBO {

}

export class SoftwareRenderer implements GraphicsDriver<SoftwareFBO, SoftwareRenderInitiationContext> {
    state: { context: any; scene: SoftwareRenderInitiationContext; };
    
    initializeContext(params: any): this {
        throw new Error("Method not implemented.");
    }
    
    getVisualResource(object: Light | Camera | Visual): SoftwareFBO {
        throw new Error("Method not implemented.");
    }
    
    attachObject(object: Light | Camera | Visual): this {
        throw new Error("Method not implemented.");
    }
    removeObject(object: Light | Camera | Visual): this {
        throw new Error("Method not implemented.");
    }
    
    updateMatrix(object: Light | Camera | Visual): void {
        throw new Error("Method not implemented.");
    }
    
    updateUniforms(object: Light | Camera | Visual): void {
        throw new Error("Method not implemented.");
    }
    updateAttributes(object: Light | Camera | Visual): void {
        throw new Error("Method not implemented.");
    }
    updateShaders(vertexShader: VertexShader, fragmentShader: FragmentShader): void {
        throw new Error("Method not implemented.");
    }
    
    updateTextures(object: Light | Camera | Visual, texture: Wave<2048, 2048, 1>[], mapNames: string[]): void {
        throw new Error("Method not implemented.");
    }
    updateBuffers(object: Light | Camera | Visual, buffer: number[], bufferType: VertexBufferType, updatable: boolean): void {
        throw new Error("Method not implemented.");
    }


    addToScene(object: Light | Camera | Visual): void {
        throw new Error("Method not implemented.");
    }

    render(input: Visual): SoftwareFBO {

        return null;
    }
    
}