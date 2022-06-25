import { Matrix4 } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/maths/matrix/matrix-4.js"
import { VisualMaterial } from "./visual-material.js";

/**
 * 
 */
export class Visual {

    id:    string;
    name?: string
   
    matrix: Matrix4;
    mesh: any[];
    
    materials: VisualMaterial[] = [];
    children: Visual[]          = [];

    data: Record<string, any>   = {};

    public updateMatrix(matrix: Matrix4): Visual {
        this.matrix = matrix;
        // TODO: handle side-effects
        return this;
    }

    public updateMesh(mesh: any[]): Visual {
        this.mesh = mesh;
        // TODO: handle side-effects
        return this;
    }

    public updateMaterial(material: VisualMaterial, index: number): Visual {
        this.materials[index] = material;
        // TODO: handle side-effects
        return this;
    }
}