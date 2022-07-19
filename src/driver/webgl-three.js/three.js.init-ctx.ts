import * as THREE from "three";

export interface ThreeJsInitializationContext {
    
    canvas: HTMLCanvasElement;
    renderer: THREE.WebGLRenderer;

    scene: THREE.Scene;
    camera: THREE.Camera;

}

