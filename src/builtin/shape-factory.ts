import { ArrayObject }              from "wrapt.co_re/lib/esm/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_object";
import { numberArrayToFloatArray }  from "wrapt.co_re/lib/esm/Model [╍⬡╍ꙮ╍▦╍]/util/3_0_object-util";
import { makeBuiltinHashmap }       from "wrapt.co_re/lib/esm/Model [╍⬡╍ꙮ╍▦╍]/util/3_builtin_util";

let triangleListCube = [
    // back-left
    [-0.5, -0.5, -0.5, 0.0],
    [-0.5, 0.5, -0.5, 0.0],
    [0.5, -0.5, -0.5, 0.0],
    // back-right
    [0.5, 0.5, -0.5, 0.0],
    [0.5, -0.5, -0.5, 0.0],
    [-0.5, 0.5, -0.5, 0.0],
    // front-left
    [-0.5, -0.5, 0.5, 0.0],
    [-0.5, 0.5, 0.5, 0.0],
    [0.5, -0.5, 0.5, 0.0],
    // front-right
    [0.5, 0.5, 0.5, 0.0],
    [0.5, -0.5, 0.5, 0.0],
    [-0.5, 0.5, 0.5, 0.0],
    // left-front
    [-0.5, -0.5, 0.5, 0.0],
    [-0.5, 0.5, -0.5, 0.0],
    [-0.5, -0.5, -0.5, 0.0],
    // left-back
    [-0.5, 0.5, -0.5, 0.0],
    [-0.5, -0.5, 0.5, 0.0],
    [-0.5, 0.5, 0.5, 0.0],
    // right-front
    // [ 0.5,  0.5, -0.5, 0.0],
    // [ 0.5,  0.5,  0.5, 0.0],
    // [ 0.5, -0.5,  0.5, 0.0],
    // // right-back
    // [ 0.5,  0.5,  0.5, 0.0],
    // [ 0.5,  0.5, -0.5, 0.0],
    // [ 0.5, -0.5, -0.5, 0.0],
    // // top-left
    // [ -0.5,  0.5, -0.5, 0.0],
    // [ -0.5,  0.5,  0.5, 0.0],
    // [  0.5,  0.5, -0.5, 0.0],
    // // top right
    // [  0.5,  0.5, 0.5, 0.0],
    // [  0.5,  0.5, -0.5, 0.0],
    // [ -0.5,  0.5,  0.5, 0.0],   
    // bottom-left
    [-0.5, -0.5, -0.5, 0.0],
    [-0.5, -0.5, 0.5, 0.0],
    [ 0.5, -0.5, -0.5, 0.0],
    // bottom right
    [ 0.5, -0.5, 0.5, 0.0],
    [ 0.5, -0.5, -0.5, 0.0],
    [-0.5, -0.5, 0.5, 0.0],
];


export const Shape = makeBuiltinHashmap([

    ["CUBE", new ArrayObject([
            [-0.5, -0.5, -0.5, 0.0],
            [ 0.5, -0.5, -0.5, 0.0],
            [ 0.5,  0.5, -0.5, 0.0],
            [-0.5,  0.5, -0.5, 0.0],
            [-0.5, -0.5,  0.5, 0.0],
            [ 0.5, -0.5,  0.5, 0.0],
            [ 0.5,  0.5,  0.5, 0.0],
            [-0.5,  0.5,  0.5, 0.0]
        ].map(function (r) { return numberArrayToFloatArray(r); })),
    ],

    ["TRIANGLE_CUBE", new ArrayObject(triangleListCube.map(function (r) { return numberArrayToFloatArray(r); }))]
    
]);