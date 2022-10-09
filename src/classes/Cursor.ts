export default class Cursor {

    readonly PPI: number;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement
    private _x: number;
    private _y: number;
    private w: number;
    private h: number;

    constructor(canvas: HTMLCanvasElement | null) {
        if (canvas) {
            this.PPI = window.devicePixelRatio;
            this.ctx = canvas.getContext('2d')
            this.canvas = canvas
            this.setCanvasSize()
            this._x = 0
            this._y = 0
            this.attachListener()
            window.onresize = this.setCanvasSize.bind(this)
        } else {
            new Error('canvas is null')
        }
    }

    setCanvasSize(): void {
        console.log('res')
        this.w = this.canvas.width = window.innerWidth
        this.h = this.canvas.height = window.innerHeight
    }


    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value * this.PPI;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value * this.PPI;
    }


    clearCanvas() {
        this.ctx.clearRect(0, 0, this.w, this.h)
    }

    attachListener(): void {
        this.canvas.addEventListener('mousemove', this.handler.bind(this))
    }

    handler(e: MouseEvent): void {
        this.x = e.pageX
        this.y = e.pageY

        this.draw()
    }

    draw() {
        this.clearCanvas()
        this.ctx.arc(this.x - 10, this.y - 10, 10, 0, Math.PI * 2, true); // Outer circle
        this.ctx.stroke();
    }
}
