export function assemblShape(topology: number, vertexIndex: number, vertices: number[][]): number[][] {
    let payload = [
        vertices[vertexIndex], vertices[vertexIndex + 1], vertices[vertexIndex + 2]
    ];
    
    if (topology == 3) { // SURFACE_TOPOLOGY.QUAD
        payload.push(vertices[vertexIndex + 3]);
    }
    return payload;
}