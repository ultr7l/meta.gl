var fg  =   Array
            .apply(null, new Array(256))
            .map    (function (_: any, idx: number)     {
                        return '\x1b[38;5;'+idx+'m';
                    }), 
        
    rgb =   fg.slice    
            (16, 232);

function getRGB(r: number, g: number, b: number, _: number) { 
    return rgb
    [
        + (b % 6)
        + (r % 6) * 36 
        + (g % 6) * 6
        
    ]; 
}

function render8BitColor(vec: [number, number, number, number], str: string) {
    return  getRGB ( 
        Math.floor(Math.abs(vec[0] * 4)), 
        Math.floor(Math.abs(vec[1] * 4)), 
        Math.floor(Math.abs(vec[2] * 4)),
        0                                 
    )
    +   str;
}
// TODO: implement blit to canvas to avoid using this abomination:
function renderHTMLColor(color: [number, number, number, number], str: string ) {
    return  '<span style="color: rgb('  
            +  
            [
                Math.floor(color[0] * 255 ), 
                Math.floor(color[1] * 255 ), 
                Math.floor(color[2] * 255 )
            ]                              
            .join(  ','                     )  
            
            +   ')">'                       
            +   str 
            +   '</span>';
}

export class ColorRendererFactory {
    
    public static get() {
        if (typeof Window != 'undefined') {
            return renderHTMLColor;
        }
        return render8BitColor;
    };   
}



export let systemColorRenderer = ColorRendererFactory.get();
