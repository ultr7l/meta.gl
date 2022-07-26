/**
 * 
 *  Visual Material Wave 
 * 
 */
 export class Wave<Width  extends number = 2048, 
                   Height extends number = 2048, 
                   Depth  extends number = 1> 
{
        data:   ImageData;   

        width:  Width;
        height: Height;
        depth:  Depth;
        
        constructor(width: Width, height: Height, depth: Depth,
            image?: Promise<HTMLImageElement | HTMLCanvasElement | HTMLVideoElement>,
            data?:  ImageData
        ) {
            this.width = width;
            this.height = height;
            this.depth = depth;
            this.data = data || new ImageData(width, height);

            if (image) {
                image.then(image => {
                    let tempCanvas;

                    if (image instanceof HTMLImageElement || image instanceof HTMLVideoElement) {
                        
                        if (depth == 1) {
                            tempCanvas = document.createElement("canvas");;

                            tempCanvas.width = image.width;
                            tempCanvas.height = image.height;
                        
                        } else {
                            throw new Error("Warn: Volumetric image not yet supported");
                        }                        
                    } else if (image instanceof HTMLCanvasElement) {
                        tempCanvas = image;
                    }

                    const ctx = tempCanvas.getContext("2d");

                                ctx.drawImage(image, 0, 0);
                    this.data = ctx.getImageData(0, 0, image.width, image.height);

                    
                });
            }
        }

        get widthInPixels(): number {
            return this.width;
        }

        get heightInPixels(): number {
            return this.height;
        }

 }