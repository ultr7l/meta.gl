
import { GraphicsDriver } from "../index.js";
import { ThreeJsInitializationContext } from "./three.js.context.js";

import { Light  } from "../../elements/1_0_light.js";
import { Camera } from "../../elements/2_0_camera.js";
import { Visual } from "../../elements/3_0_visual.js";
import { Wave   } from "../../elements/3_2_visual-material.wave.js";

import { VertexShader, FragmentShader } from "../../index.js";

import * as THREE from "three";
import { VertexBufferType } from "../vertex-buffer.type.js";


export class WebGLThreeJSDriver implements GraphicsDriver<THREE.Mesh, THREE.Scene, ThreeJsInitializationContext> {
    
    state: { context: any; scene: THREE.Scene; };
    

    initializeContext(params: ThreeJsInitializationContext): this {
        throw new Error("Method not implemented.");
    }
    getVisualResource(object: Light | Camera | Visual) {
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
    render(input: Visual) {
        throw new Error("Method not implemented.");
    }
    
}