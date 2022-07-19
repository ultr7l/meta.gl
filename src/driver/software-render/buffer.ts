import { ObjectType } from "wrapt.co_re/dist/Domain [╍🌐╍🧭╍]/object/object-type.enum";
import { _BuiltinFunctionObject } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_1_object";

export function makeBuffer(mode: number, width: number, height: number) {
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