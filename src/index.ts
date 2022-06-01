
import { ObjectType }                           from "wrapt.co_re/dist/Domain [╍🌐╍🧭╍]/object/object-type.enum";
import { _BuiltinFunctionObject }                from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_1_object";
import { makeBuiltinEnum, makeBuiltinHashmap }  from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/util/3_builtin_util";
 
import { Shaders }  from "./builtin/shader-factory";
import { Shape }    from "./builtin/shape-factory";
import { systemColorRenderer } from "./color";
import { ASCII, blit, builtin_blit, builtin_shadeVertices, shadeVertices } from "./software-render";
import { rasterize } from "./software-render/rasterizer";



export  type FragmentShader = (

                point:      [number, number], 
                uniforms:   number[], 
                varyings:   Record<string, number[]>

        ) => [number, number, number, number];



export  type VertexShader = (

                vertex:     [number, number, number], 
                attributes: number[], 
                uniforms:   number[],
                varyings:   Record<string, number[]>

        ) => [number, number, number];


function makeBuffer(mode: number, width: number, height: number) {
    let elems = [];
    
    for (let y = 0; y < height; y++) {
        if (mode == 0) { // 4 channel RGBA based
            for (let x = 0; x < width; x++) {
                elems.push(0, 0, 0, 0);
            }
        }
        else { // ASCII
            let rowEls = [];
            for (let x = 0; x < width; x++) {
                rowEls.push(" ");
            }
            elems.push(rowEls);
        }
    }
    return elems;
}

export let builtin_makeBuffer = new _BuiltinFunctionObject(
    "makeBuffer", [ObjectType.INTEGER_OBJ, ObjectType.INTEGER_OBJ, ObjectType.INTEGER_OBJ], 
    (
        scope: any, jsScope: any, 
        mode: number, width: number, height: number
    ) => makeBuffer(mode, width, height),
    
    undefined, undefined, undefined
);


const SURFACE_TOPOLOGY = makeBuiltinEnum(["TRIANGLE_LIST"] /*, "TRIANGLE_STRIP", "TRIANGLE_FAN", "QUAD"] */ );
const BLEND_MODE  = ["ADD", "SUBTRACT", "MULTIPLY", "NONE"];
const RASTER_MODE = ["PIXEL", "ASCII", "ANSI_COLOR", "UNICODE_RGBA", "UNICODE_RGBA_HDR"];

export { ImageObject }         from "./image";
export const Graphics = makeBuiltinHashmap([
    ["SURFACE_TOPOLOGY", SURFACE_TOPOLOGY],
    ["BLEND_MODE", makeBuiltinEnum(BLEND_MODE)],
    ["RASTER_MODE", makeBuiltinEnum(RASTER_MODE)],
    ["ASCII", ASCII],
    ["SHAPE", Shape],
    ["Shaders", Shaders],
    ["makeBuffer", builtin_makeBuffer],
    ["shadeVertices", builtin_shadeVertices],
    ["rasterize", rasterize],
    ["blit", builtin_blit]
]);


export { systemColorRenderer } from "./color";

export const Graphics_TS = {
    SURFACE_TOPOLOGY,
    BLEND_MODE,
    RASTER_MODE,
    ASCII,
    Shape,
    Shaders,
    makeBuffer,
    shadeVertices,
    rasterize,
    blit
}