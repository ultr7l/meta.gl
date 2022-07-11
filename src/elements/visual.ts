import { Identity_Matrix4, Matrix4 } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/maths/matrix/matrix-4.js"
import { VisualMaterial } from "./visual-material.js";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept"
import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";

export interface VisualQualities {
    
    Visual: {
        matrix: Matrix4;
        mesh: [number, number, number][];

        materials: VisualMaterial[];
        children:  Visual[];
    } 

    Data: {
        data: Record<string, any>;
    }

}

export type VisualPrinciples = {

}

/**
 * 
 *  Visual Concept
 * 
 */
export class Visual extends Concept<_CONCEPT[], VisualQualities> {

    id:   string;

    name: string = "Visual"; 
    foundation = [] as _CONCEPT[];
    principles: VisualPrinciples = {

    } as VisualPrinciples;
    qualities:  VisualQualities  = { 
        Visual: {
            matrix: Identity_Matrix4,
            mesh:      [],
            materials: [],
            children:  []
        },

        Data: {
            data: {}
        }
    } as VisualQualities;

    private visualQualities;

    
    constructor() {
        super();
        this.setVisualQualities();
    }

    private setVisualQualities() {
        this.visualQualities = this.qualities.Visual;
    }

    public transform(previous?: Concept<_CONCEPT[]>): Concept<_CONCEPT[]> {

        if (previous.name === "Physical") {

        }

        return this;
    }

    public updateMatrix(matrix: Matrix4): Visual {
        this.visualQualities.matrix = matrix;
        // TODO: handle side-effects
        return this;
    }

    public updateMesh(mesh: any[]): Visual {
        this.visualQualities.mesh = mesh;
        // TODO: handle side-effects
        return this;
    }

    public updateMaterial(material: VisualMaterial, index: number): Visual {
        this.visualQualities.materials[index] = material;
        // TODO: handle side-effects
        return this;
    }
}