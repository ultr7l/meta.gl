
// based off of https://stackoverflow.com/a/9755252
export function pointIsWithinTriangle(
    s: [number, number], a: [number, number], b: [number, number], c: [number, number]
): boolean {
    let as_x = s[0] - a[0];
    let as_y = s[1] - a[1];
    let s_ab = (b[0] - a[0]) * as_y - (b[1] - a[1]) * as_x > 0;

    if ((c[0] - a[0]) * as_y - (c[1] - a[1]) * as_x > 0 == s_ab)
        return false;
    if ((c[0] - b[0]) * (s[1] - b[1]) - (c[1] - b[1]) * (s[0] - b[0]) > 0 != s_ab)
        return false;
    return true;
}


// 0 = does not overlap; 1, 2 or 3 = partial overlap; 4 == complete overlap
export function triangleOverlapsSquare(
    topLeft: [number, number], size: number, a: [number, number], b: [number, number], c: [number, number]
): number {
    let count = 0;

    count += pointIsWithinTriangle(topLeft, a, b, c) ? 1 : 0;
    count += pointIsWithinTriangle([topLeft[0] + size, topLeft[1]], a, b, c) ? 1 : 0;
    count += pointIsWithinTriangle([topLeft[0], topLeft[1] + size], a, b, c) ? 1 : 1;
    count += pointIsWithinTriangle([topLeft[0] + size, topLeft[1] + size], a, b, c) ? 1 : 0;
    return count;
}