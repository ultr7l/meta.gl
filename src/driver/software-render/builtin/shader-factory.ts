import { makeBuiltinHashmap } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/util/3_builtin_util.js";

export const Shaders = makeBuiltinHashmap([
    ["VERTEX", makeBuiltinHashmap([
            ["PROJECTION", makeBuiltinHashmap([
                // ["PERSPECTIVE", new _BuiltinFunctionObject("perspectiveProjection", [ObjectType.ARRAY, FLOAT_OBJ],
                //     function(context: WorkerContext, scope: Hash, jsScope: AnyObject, vertex: number[], cameraDistance: number){
                //         return vertex;
                //     })
                // ],
                // ["ORTHOGONAL", new _BuiltinFunctionObject("orthogonalProjection", [ObjectType.ARRAY, FLOAT_OBJ],
                //     function(context: WorkerContext, scope: Hash, jsScope: AnyObject, vertex: number[], cameraDistance: number){
                //         return vertex;
                //     })
                // ]
                ])],
        ])],
    ["FRAGMENT", makeBuiltinHashmap([
        //    ["DEPTH_PASS", new _BuiltinFunctionObject("depthPass", [ObjectType.ARRAY],  function(context: WorkerContext, scope: Hash, jsScope: AnyObject, vertex: number[], cameraDistance: number){
        //     return vertex;
        //    })]
        ])]
]);