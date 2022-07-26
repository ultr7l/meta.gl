import { Engine, Mesh, PolygonMeshBuilder, Scene, SceneOptions } from "babylonjs";
import { VertexBuffer } from "babylonjs/Meshes/buffer";
import { Light } from "src/elements/1_0_light.js";
import { Camera } from "src/elements/2_0_camera.js";
import { Visual } from "src/elements/3_0_visual.js";
import { Wave } from "src/elements/3_2_visual-material.wave.js";
import { VertexShader, FragmentShader } from "src/index.js";

import { GraphicsDriver }                 from "../index.js";
import { VertexBufferType } from "../vertex-buffer.type.js";
import { BabylonJsInitializationContext } from "./babylon.js.context.js";

export      class         WebGLBabylonJSDriver 
            implements          GraphicsDriver
                                       <
                                        Mesh, 
                                        Scene,
                 BabylonJsInitializationContext
                                        > 
{
    
    state: { 
        context: BabylonJsInitializationContext; 
        canvas:               HTMLCanvasElement;
        scene:                          Scene;
        engine:                         Engine;
        meshBuilder:         PolygonMeshBuilder 
    };


    initializeContext(params: BabylonJsInitializationContext): this {
    
        const canvas = new HTMLCanvasElement(); 
        const sceneOptions: SceneOptions = {
        
        }
        
        this.state.canvas = canvas;
        this.state.engine = new params.engine(canvas);
        this.state.scene  = new params.scene(this.state.engine, sceneOptions);

        return this;
    }

    getVisualResource(object: Light | Camera | Visual): Mesh {
        
        const id =  object.id;

        return this.state.scene.getMeshById(id) as Mesh;

    }


    attachObject( object: Light | Camera | Visual ): this {
        this.state.scene.addMesh(    this.getVisualResource(object) );
        return this;
    }
    removeObject( object: Light | Camera | Visual ): this {
        this.state.scene.removeMesh( this.getVisualResource(object) );
        return this;
    }


    updateMatrix(object: Light | Camera | Visual): void {
        
        // Implement: P2: 
        //this.getVisualResource(object).updateMatrix();
    }
    updateTextures(object: Light | Camera | Visual, textures: Wave[], mapNames = ["diffuse"]): void {
        
    }



    public VertexBufferTypeMap = {
        "position": VertexBuffer.PositionKind,
        "color":    VertexBuffer.ColorKind,
        "uv":       VertexBuffer.UVKind,
        "normal":   VertexBuffer.NormalKind,
    };
        



    updateBuffers(object:    Light | Camera | Visual, 
                  buffer:    number[], 
            bufferType:      VertexBufferType, 
                  updatable: boolean): void 
    {
        
        const resource = this.getVisualResource(object);

        if (resource instanceof Visual) {
            resource.setVerticesBuffer( 
                
                new VertexBuffer(
                        this.state.engine,  
                        (resource as Visual).qualities.Visual.buffer,
                        this.VertexBufferTypeMap[bufferType],
                        updatable
                ) 
                
            )
        }
        
    }
    
    
    updateUniforms(object: Light | Camera | Visual): void {
        throw new Error("Method not implemented.");
    }
    updateAttributes(object: Light | Camera | Visual): void {
        throw new Error("Method not implemented.");
    }
    updateShaders(vertexShader: VertexShader, fragmentShader: FragmentShader) {
        throw new Error("Method not implemented.");
    }

    render(input: Visual): Mesh {

        return;
    }
}