export default class Circle {
    x:number
    y:number
    w:number
    h:number
    private fill: boolean;
    constructor(x: number, y: number, w: number, h: number, fill?:boolean ,) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.fill = fill;
    }
}