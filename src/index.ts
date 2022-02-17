
import { ObjectType }                           from "wrapt.co_re/src/Domain [╍🌐╍🧭╍]/object/object-type.enum";
import { BuiltinFunctionObject }                from "wrapt.co_re/src/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_object";
import { makeBuiltinEnum, makeBuiltinHashmap }  from "wrapt.co_re/src/Model [╍⬡╍ꙮ╍▦╍]/util/3_builtin_util";
 
import { Shaders }  from "./builtin/shader-factory";
import { Shape }    from "./builtin/shape-factory";
import { ASCII, blit, shadeVertices } from "./software-render";
import { rasterize } from "./software-render/rasterizer";



export type FragmentShader = (

                point: [number, number], 
                uniforms: number[], 
                varyings: Record<string, number[]>

            ) => number[];


let builtin_makeBuffer = new BuiltinFunctionObject("makeBuffer", [ObjectType.INTEGER_OBJ, ObjectType.INTEGER_OBJ, ObjectType.INTEGER_OBJ], 
    function (scope: any, jsScope: any, mode: number, width, height) {
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
}, undefined, undefined, undefined);




let SURFACE_TOPOLOGY = makeBuiltinEnum(["TRIANGLE_LIST"] //, "TRIANGLE_STRIP", "TRIANGLE_FAN", "QUAD"]
);

let BLEND_MODE = makeBuiltinEnum(["ADD", "SUBTRACT", "MULTIPLY", "NONE"]);
let RASTER_MODE = makeBuiltinEnum(["PIXEL", "ASCII", "ANSI_COLOR", "ANSI_SOLID_COLOR"]);

export const Graphics = makeBuiltinHashmap([
    ["SURFACE_TOPOLOGY", SURFACE_TOPOLOGY],
    ["BLEND_MODE", BLEND_MODE],
    ["RASTER_MODE", RASTER_MODE],
    ["ASCII", ASCII],
    ["SHAPE", Shape],
    ["Shaders", Shaders],
    ["makeBuffer", builtin_makeBuffer],
    ["shadeVertices", shadeVertices],
    ["rasterize", rasterize],
    ["blit", blit]
]);
