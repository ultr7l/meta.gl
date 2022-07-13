import { VertexShader } from "../../index.js";
import { ObjectType } from "wrapt.co_re/dist/Domain [╍🌐╍🧭╍]/object/object-type.enum";
import { distance2d } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/maths/2d/util";
import { _BuiltinFunctionObject } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_1_object";
import { colorRenderer } from ".";


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


export function shadeVertices(
vertexShader: VertexShader, 
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
}

export const builtin_shadeVertices = new _BuiltinFunctionObject(
"shadeVertices", [ObjectType.ARRAY, ObjectType.ARRAY, ObjectType.HASH, ObjectType.FUNCTION], 
(
    _: unknown, _2: unknown, 
    vertexShader: VertexShader, 
    vertices: [number, number, number][], 
    uniforms: number[],         
    attributes = []
) => shadeVertices(vertexShader, vertices, uniforms, attributes)
);
