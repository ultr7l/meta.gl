import { ObjectType }                           from "wrapt.co_re/dist/Domain [╍🌐╍🧭╍]/object/object-type.enum.js";
import { _BuiltinFunctionObject, StringObject } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_1_object.js";
import { distance2d }                           from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/maths/2d/util.js";
import { VertexShader } from "../..";
import { ColorRendererFactory } from "../../builtin/color.js";
import { GraphicsDriver } from "..";
import { Visual } from "src/elements/visual";



export const PIXEL_BLOCK_SIZE   =     16;
export const ASCII_BLOCK_SIZE   =      8;

export const PALLET_ASCII       =     " .`,-_*x=/|FXH$#@";
export const PALLET_UNICODE     =     "   ░░░▒▒▒▒███";
export const PALLET_UNICODE_HDR =     " ░░░░░░░▒▒▒██";

export const ASCII              = new StringObject(PALLET_ASCII);
export const UNICODE            = new StringObject(PALLET_UNICODE);
export const UNICODE_HDR        = new StringObject(PALLET_UNICODE_HDR);

export const colorRenderer      =     ColorRendererFactory.get();

export interface SoftwareFBO {

}

export class SoftwareRenderer implements GraphicsDriver<SoftwareFBO> {
    render(input: Visual): SoftwareFBO {

        return null;
    }
}