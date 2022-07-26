
import { Wave } from "./3_2_visual-material.wave";

/**
 * 
 * Waves:
 * 
 *  Maps associated with a visual material.
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *  AKA: Textures, 
 *          or 
 *       1, 2 or 3 dimensional raster "images" / (compressed) bitmaps.
 * 
 * 
 *  
 * 
 */
export interface VisualMaterialWaves<X extends number = 2048, 
                                     Y extends number = 2048, 
                                     Z extends number = 1> 
{
    
    diffuse?:  Wave< X, Y, Z >
    
    normal?:   Wave< X, Y, Z >,
    ao?:       Wave< X, Y, Z >,
    
    roughness: Wave< X, Y, Z >,
    metalness: Wave< X, Y, Z >,
    
    bump?:     Wave< X, Y, Z >,

    custom: {
        [waveName: string]: Wave< X, Y, Z >
    }
}


export const PHYSICAL_MATERIAL_WAVES: (keyof VisualMaterialWaves)[] = [
    "diffuse",
    
    "normal",
    "ao",
    
    "roughness",
    "metalness",
    
    "bump",
];