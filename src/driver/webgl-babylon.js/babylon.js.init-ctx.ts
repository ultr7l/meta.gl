import { Engine, Scene, Camera } from "babylonjs";

export interface BabylonJsInitializationContext {
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    camera: Camera;    
}