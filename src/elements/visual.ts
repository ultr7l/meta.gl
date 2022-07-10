import { Matrix4 } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/maths/matrix/matrix-4.js"
import { VisualMaterial } from "./visual-material.js";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept"
import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";

export interface VisualQualities {
    Visual: {
        
    } 
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
    principles: { 
                    [principleName: string]: 
                    (c: Concept<
                            _CONCEPT[], 
                            { [name: string]: any; }>
                    ) => any 
                }               = {};
    qualities: VisualQualities = { 
        Visual: {

        }
    };

   
    matrix: Matrix4;
    mesh: [number, number, number][];
    
    materials: VisualMaterial[] = [];
    children:  Visual[]         = [];

    data: Record<string, any>   = {};

    
    public transform(input?: Concept<_CONCEPT[]>): Concept<_CONCEPT[]> {

        return this;
        //throw new Error("Method not implemented.");
    
    
    }

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