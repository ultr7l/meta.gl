import { Engine, Scene, Camera, Mesh, Material } from "babylonjs";

export interface BabylonJsInitializationContext {

    canvas:        HTMLCanvasElement;

    engine:   typeof Engine;
    scene:    typeof Scene;
    camera:   typeof Camera;    
    mesh:     typeof Mesh;
    material: typeof Material;
    
}