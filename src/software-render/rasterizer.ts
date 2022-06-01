import { ObjectType }            from "wrapt.co_re/dist/Domain [╍🌐╍🧭╍]/object/object-type.enum";
import { _BuiltinFunctionObject } from "wrapt.co_re/dist/Model [╍⬡╍ꙮ╍▦╍]/object/1_0_1_object";

import { ASCII, ASCII_BLOCK_SIZE, colorRenderer, PALLET_UNICODE, PALLET_UNICODE_HDR, PIXEL_BLOCK_SIZE, UNICODE } from ".";
import { FragmentShader }   from "src/index";
import { assemblShape }     from "./shape-assembler";
import { triangleOverlapsSquare, pointIsWithinTriangle } from "./triangle-intersection";


export enum RASTER_MODE__ORDINAL {
    "PIXEL"             = 0, 
    
    "ASCII"             = 1, 
     
    "ANSI_SOLID_COLOR"  = 2, 
    "UNICODE_RGBA"      = 3, 
    "UNICODE_RGBA_HDR"  = 4
}

export function drawPixel(
                    type:               RASTER_MODE__ORDINAL, 
                    x:                  number, 
                    y:                  number, 
                    
                    width:              number,
                    color:              [number, number, number, number], 
                    
                    frameBuffer:        number[],
                    stringFrameBuffer:  string[][],  
) 
{
    switch (type) {
        case 0:
            let idx = (y * width) + x;
            // RGBA 32bit      A           B                 G                  R                    
            frameBuffer[idx] = color[3] | (color[2] << 8) | (color[1] << 16) | (color[0] << 24);

            break;
        case 1:
            stringFrameBuffer[y][x] = ASCII.Value[Math.floor(((color[0] + color[1] + color[2]) / 3) * 14) % 14];
            break;
        case 2:
            stringFrameBuffer[y][x] = colorRenderer(color, ASCII.Value[Math.floor(((color[0] + color[1] + color[2]) / 3) * 14) % 14]);
            break;
        case 3:
            stringFrameBuffer[y][x] = colorRenderer(
                color, 
                PALLET_UNICODE.charAt(Math.floor(color[3] * 12))
            );
            break;
        case 4:    
            stringFrameBuffer[y][x] = colorRenderer(
                color, 
                PALLET_UNICODE_HDR.charAt(Math.floor(color[3] * 12))
            );
    }
}


export function rasterizeBlock(
    type:               number,  

    topLeft:            [number, number],  
    bottom:             number,  
    end:                number, 
    width:              number,

    frameBuffer:        number[],                  
    stringFrameBuffer:  string[][],  

    vertices:           [number, number, number][],        
    topology:           number, 

    fragmentShader:     FragmentShader, 
    uniforms:           number[],   
    varyings:           number[]
) 
{
    let l = vertices.length; // Vertex index is required to associate varyings with fragments
    let v = 0;

    while (v < l) {
        let shape = assemblShape(topology, v, vertices);
        // check 4 corners of block against each shape:
        // TODO: FIRST, check if the bounding box of the shape overlaps this block
        let corners = triangleOverlapsSquare(topLeft, type ? ASCII_BLOCK_SIZE : PIXEL_BLOCK_SIZE, shape[0] as [number, number], shape[1] as [number, number], shape[2] as [number, number]);

        if (corners == 4) { // are all four corners inside of the triangle?
            for (let y = topLeft[1]; y < bottom; y++) {
                for (let x = topLeft[0]; x < end; x++) {
                    //let varying = interpolateVaryings([x, y], shape, topology, v, varyings);
                    let value   = fragmentShader([x, y], uniforms, {}); //varying);
                    
                                                        // TODO: Handle non-string[][] frame-buffer
                    drawPixel(type, x, y, width, value, [], stringFrameBuffer);
                }
            }
        }
        else if (corners > 0) { // some of them are contained.
            for (let y = topLeft[1]; y < bottom; y++) {
                for (let x = topLeft[0]; x < end; x++) {
                    if (pointIsWithinTriangle([x, y], shape[0] as [number, number], shape[1] as [number, number], shape[2] as [number, number])) {
                        //let varying = interpolateVaryings([x, y], shape, topology, v, varyings);
                        let value   = fragmentShader([x, y], uniforms, {}); //varying);

                                                            // TODO: Handle non-string[][] frame-buffer
                        drawPixel(type, x, y, width, value, [], stringFrameBuffer);
                    }
                }
            }
        }
        v += 3;
    }
}
// by this point, shapes and bounding boxes are identified and associated with fragment shaders
export const rasterize = new _BuiltinFunctionObject("rasterize", [ObjectType.ARRAY, ObjectType.INTEGER_OBJ, ObjectType.ARRAY, ObjectType.ARRAY, ObjectType.ARRAY], 
    function (
        _: unknown, _2: unknown, 
        frameBuffer:        number[],              
        stringFrameBufer:   string[][],    
        pixelHeight:        number,                
        vertices:           [number, number, number][],            
        toplogies:          number[], 
        fragmentShaders:    FragmentShader[], 
        uniforms:           number[],              
        varyings:           number[]
) {
    let cols, rows;

    if (frameBuffer) {
        let width = frameBuffer.length / pixelHeight;

        cols = Math.ceil(width / PIXEL_BLOCK_SIZE);
        rows = Math.ceil(pixelHeight / PIXEL_BLOCK_SIZE);
    } else {
        cols = Math.ceil(stringFrameBufer[0].length / ASCII_BLOCK_SIZE);
        rows = Math.ceil(stringFrameBufer.length / ASCII_BLOCK_SIZE);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // how many corners of this block are inside the triangle?
            const blockSize = (!stringFrameBufer ? ASCII_BLOCK_SIZE : PIXEL_BLOCK_SIZE);
            let topLeft: [number, number] = [c * blockSize, r * blockSize];
            let bottom                    = topLeft[1] + blockSize;
            let end                       = topLeft[0] + blockSize;

            rasterizeBlock(
                !!frameBuffer ? 0 : 1, topLeft, bottom, end, blockSize,
                frameBuffer, stringFrameBufer, 
                vertices, toplogies[0], 
                fragmentShaders[0], uniforms, varyings, 
            );
        }
    }

    return frameBuffer; // crucial to return this. Otherwise, the reference could be lost across runtime environments
});
