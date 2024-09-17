import { ObjectType } from "wrapt.co_re/dist/Domain [╍🌐╍🧭╍]/object/object-type.enum.js";
import { _BuiltinFunctionObject } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_1_object.js";
import { colorRenderer } from "./index.js";

export const builtin_blit = new _BuiltinFunctionObject(
    "blit", [ObjectType.ARRAY, ObjectType.INTEGER_OBJ, ObjectType.INTEGER_OBJ], 
    (
        _: unknown, _2: unknown,
        RASTER_MODE: number, frameBuffer: number[], stringFrameBufer: string[], width: number 
        
    ) => blit(RASTER_MODE, frameBuffer, stringFrameBufer, width) 
);


export function blit(RASTER_MODE: number, frameBuffer: number[], stringFrameBufer: string[], width: number) {
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
            out += stringFrameBufer[x] + "\n";
        }
    }
    return out;
    }