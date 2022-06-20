/**
 * 
 * 
 */

export interface VisualMaterialMaps {
    ao?: string,
    bump?: string,
    roughness: string,
    metalness: string,
    custom: {
        [mapName: string]: any
    }
}