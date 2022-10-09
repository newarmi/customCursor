export default class Cursor {
    private ctx: CanvasRenderingContext2D;
    private area: HTMLCanvasElement

    constructor(canvas: HTMLCanvasElement | null) {
        if (canvas) {
            this.ctx = canvas.getContext('2d')
            this.area = canvas
            this.draw(20, 20)
        } else {
            new Error('canvas is null')
        }
    }

    draw(x: number, y: number) {
        this.ctx.fillRect(x, y, 20, 20);
    }
}
