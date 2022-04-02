import { ObjectType }                           from "wrapt.co_re/lib/esm/Domain [╍🌐╍🧭╍]/object/object-type.enum";
import { BuiltinFunctionObject, StringObject }  from "wrapt.co_re/lib/esm/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_object";
import { distance2d }                           from "wrapt.co_re/lib/esm/Model [╍⬡╍ꙮ╍▦╍]/util/1_ubiquitous-util";

import { VertexShader } from "..";
import { ColorRendererFactory } from "../color";



export const PIXEL_BLOCK_SIZE   =     16;
export const ASCII_BLOCK_SIZE   =      8;
export const ASCII              = new  StringObject(" .`,-_*x=/|FXH$#@");
export const colorRenderer      =             ColorRendererFactory.get();




// TODO: re-design & refactor format of varyings
function interpolateVaryings(
        pixel: [number, number], shape: number[][], topology: number, 
        vertIndex: number, varyings: number[]
) {
    // TODO: support topology parameter
    let interpolated: Record<string, number> = {};
    let shapeVaryings = [
        varyings[vertIndex],
        varyings[vertIndex + 1],
        varyings[vertIndex + 2]
    ];

    let scalars = [
        distance2d(shape[0], pixel),
        distance2d(shape[1], pixel),
        distance2d(shape[2], pixel),
    ];
    let normalize = Math.max.apply(null, scalars);

    scalars[0] = scalars[0] / normalize;
    scalars[1] = scalars[1] / normalize;
    scalars[2] = scalars[2] / normalize;

    for (let v in varyings) {
        interpolated[v] = shapeVaryings[0] * scalars[0] + shapeVaryings[1] * scalars[1] + shapeVaryings[2] * scalars[2];
    }

    return interpolated;
}


export const shadeVertices = new BuiltinFunctionObject("shadeVertices", [ObjectType.ARRAY, ObjectType.ARRAY, ObjectType.HASH, ObjectType.FUNCTION], 
    function (
        _: unknown, _2: unknown, vertexShader: VertexShader, 
        vertices: [number, number, number][], 
        uniforms: number[],         
        attributes = []
    ) {
        let varyings = [];

        for (let v in vertices) {
            let varying = {};

            vertices[v] = vertexShader(vertices[v], attributes, uniforms, varying).slice(0, 2) as [number, number, number];
            varyings.push(varying);
        }
        return {
            varyings: varyings,
            vertices: vertices
        };
});

export const blit = new BuiltinFunctionObject(
    "blit", [ObjectType.ARRAY, ObjectType.INTEGER_OBJ, ObjectType.INTEGER_OBJ], 
    function (_: unknown, _2: unknown, RASTER_MODE: number, frameBuffer: number[], stringFrameBufer: number[][], width: number) {
        let out = "";

        if (0 == RASTER_MODE) {
            let w = width * 3, h = frameBuffer.length / w;

            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x += 3) {
                    let idx = y * width + x,
                        value: [number, number, number, number] = [
                            frameBuffer[idx], 
                            frameBuffer[idx + 1], 
                            frameBuffer[idx + 2], 
                            1                       //TODO: Support opacity
                        ];

                    out += colorRenderer(value, "█");
                }
                out += "\n";
            }
        } else {

            for (let x in stringFrameBufer) {
                out += stringFrameBufer[x].join("") + "\n";
            }
        }
        return out;
});