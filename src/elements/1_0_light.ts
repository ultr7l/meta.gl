import { _CONCEPT } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/0_1_concept.type";
import { Concept } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/concept/1_0_concept";
import { Visual } from "./3_0_visual";

export enum LightType {
    Ambient,
    Point,
    Directional
    // Spot,
    // Hemi,
}

export interface LightQualities {
    Light: {
        lightType: LightType;
    }
};



export type LightPrinciples = {
    Light: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => void;
    Diffuse: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => void;
    Reflection: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => void;
    Refraction: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => void;
    Diffraction: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => void;
}



/**
 * 
 * Light element
 * 
 */
export class Light extends Concept<_CONCEPT[], LightQualities> {
    
    id:   string;
    name: string;

    foundation: _CONCEPT[] = [ 
        new Visual() 
    ];

    principles: LightPrinciples = {
        Light: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => {
            c.qualities.Light.lightType = LightType.Ambient;
        },
        Diffuse: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => {
        
        },
        Reflection: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => {

        },
        Refraction: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => {
        
        },
        Diffraction: (c: Concept<_CONCEPT[], { [name: string]: any; }>) => {

        }
    };
    
    qualities: LightQualities;

    constructor() {
        super();
    }
}