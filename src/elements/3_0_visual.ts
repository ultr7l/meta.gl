import { Identity_Matrix4, Matrix4 } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/maths/matrix/matrix-4.js"
import { VisualMaterial } from "./3_2_visual-material.js";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept.js"
import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type.js";
import { VertexBufferType } from "src/driver/vertex-buffer.type.js";

export interface VisualQualities {
    
    Visual: {
        matrix: Matrix4;
        buffer: number[] | Float64Array;

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
 *  Visual element
 * 
 */
export class Visual extends Concept<_CONCEPT[], VisualQualities, VisualPrinciples> {

    id:   string;
    name: string = "Visual"; 
    
    foundation = [] as _CONCEPT[];
    principles: VisualPrinciples = {

    } as VisualPrinciples;
    qualities:  VisualQualities  = { 
        Visual: {
            matrix: Identity_Matrix4,
            buffer:      [],
            materials: [],
            children:  []
        },

        Data: {
            data: {}
        }
    } as VisualQualities;

    
    constructor() {
        super();
        this.setVisualQualities();
    }

    private setVisualQualities() {
        this.qualities.Visual = this.qualities.Visual;
    }

    public transform(previous?: Concept<_CONCEPT[]>): Concept<_CONCEPT[]> {

        if (previous.name === "Physical") {

        }

        return this;
    }

    public updateMatrix(matrix: Matrix4): Visual {
        this.qualities.Visual.matrix = matrix;
        // TODO: handle side-effects ?
        return this;
    }

    public updateBuffer(bufferType: VertexBufferType, buffer: number[] | Float64Array): Visual {
        this.qualities.Visual.buffer = buffer;
        // TODO: ^^^ ?
        return this;
    }

    public updateMaterial(material: VisualMaterial, index: number): Visual {
        this.qualities.Visual.materials[index] = material;
    
        return this;
    }
}