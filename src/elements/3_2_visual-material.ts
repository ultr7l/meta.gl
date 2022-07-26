import { FragmentShader, VertexShader } from "src/index.js";
import { Wave } from "./3_2_visual-material.wave.js";
import { VisualMaterialWaves } from "./3_3_visual-material.wave.s.js";

/**
 * 
 * Material, Visual Quality
 * 
 */
export class VisualMaterial {

    diffuseColor: number;

    fragmentShader: FragmentShader;
    vertexShader:   VertexShader;

    maps: VisualMaterialWaves = {
        diffuse: new Wave(2048, 2048, 1, VisualMaterial.loadImage("pattern_001.png")),
        roughness: null, // new Wave< 2048, 2048, 1 >(2048, 2048, null),
        metalness: null, // new Wave< 2048, 2048, 1 >(2048, 2048, null),
        custom: {

        }
    }

    attributes: any[];

    uniforms: Record<string, any> = {};

    public static loadImage(url: string): Promise<HTMLImageElement> {
        const image = new Image();
        image.src = url;
     
        return new Promise<HTMLImageElement>((resolve, reject) => {
            image.onload = () => resolve(image);
            image.onerror = () => reject(image);
        });
    }
}
