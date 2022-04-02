import { makeBuiltinHashmap } from "wrapt.co_re/lib/Model [╍⬡╍ꙮ╍▦╍]/util/3_builtin_util";

export const Shaders = makeBuiltinHashmap([
    ["VERTEX", makeBuiltinHashmap([
            ["PROJECTION", makeBuiltinHashmap([
                // ["PERSPECTIVE", new BuiltinFunctionObject("perspectiveProjection", [ObjectType.ARRAY, FLOAT_OBJ],
                //     function(context: WorkerContext, scope: Hash, jsScope: AnyObject, vertex: number[], cameraDistance: number){
                //         return vertex;
                //     })
                // ],
                // ["ORTHOGONAL", new BuiltinFunctionObject("orthogonalProjection", [ObjectType.ARRAY, FLOAT_OBJ],
                //     function(context: WorkerContext, scope: Hash, jsScope: AnyObject, vertex: number[], cameraDistance: number){
                //         return vertex;
                //     })
                // ]
                ])],
        ])],
    ["FRAGMENT", makeBuiltinHashmap([
        //    ["DEPTH_PASS", new BuiltinFunctionObject("depthPass", [ObjectType.ARRAY],  function(context: WorkerContext, scope: Hash, jsScope: AnyObject, vertex: number[], cameraDistance: number){
        //     return vertex;
        //    })]
        ])]
]);