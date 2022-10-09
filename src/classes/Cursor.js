export default class Cursor{
    constructor(ctx) {
        this.ctx = ctx
        this.draw()
    }
    draw(){
        this.ctx.fillRect(25, 25,20 , 20);
    }
}
