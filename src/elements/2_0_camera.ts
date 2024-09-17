import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept";
import { Identity_Matrix4, Matrix4 } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/maths/matrix/matrix-4";
import { Visual } from "./3_0_visual";

export type Principle = (c: Concept<_CONCEPT[], { [name: string]: any; }>) => any;

export interface CameraQualities {
    Camera: {
        near:   number;
        far:    number;
        matrix: Matrix4;
    }
}

export interface CameraPrinciples {

}

/**
 * 
 *  Camera element
 * 
 */
export class Camera extends Concept<_CONCEPT[], CameraQualities> {
   
    id:   string;
    name: string;
    
    foundation: _CONCEPT[] = [ 
        new Visual() 
    ];

    principles: { [principleName: string]: Principle } = {
        Camera: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => {
            c.qualities.Camera.near = 0.1;
            c.qualities.Camera.far = 1000;
            c.qualities.Camera.matrix = Identity_Matrix4;
        }
    };

    qualities: CameraQualities = {
        Camera: {
            near:   0.1,
            far:    1000,
            matrix: Identity_Matrix4 // TODO: set to camera matrix
        }
    };
   
   
}