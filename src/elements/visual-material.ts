import { FragmentShader, VertexShader } from "src/index.js";
import { VisualMaterialMaps } from "./visual-material-maps.js";

/**
 * 
 * 
 */
export class VisualMaterial {

    diffuseColor: number;

    fragmentShader: FragmentShader;
    vertexShader: VertexShader;

    maps: VisualMaterialMaps = {
        roughness: "",
        metalness: "",
        custom: {

        }
    }

    attributes: any[];

    uniforms: Record<string, any> = {};

}
