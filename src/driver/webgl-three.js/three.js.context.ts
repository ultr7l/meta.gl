import * as THREE from "three";

export interface ThreeJsInitializationContext {
    
    canvas:          HTMLCanvasElement;
    
    renderer: typeof THREE.WebGLRenderer;
    
    scene:    typeof THREE.Scene;
    
    camera:   typeof THREE.Camera;
    mesh:     typeof THREE.Mesh;
    material: typeof THREE.Material;
    texture:  typeof THREE.Texture;
    geometry: typeof THREE.Geometry;
}

