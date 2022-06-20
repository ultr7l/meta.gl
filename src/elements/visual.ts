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
    
    materials: VisualMaterial[];
}