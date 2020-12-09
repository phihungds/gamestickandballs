function Stick(x, y, w, h, ctx) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h 
    this.ctx = ctx
    
    this.moveLeft = function () {
        this.x--
    }
    this.moveRight = function () {
        this.x++
    }
    this.draw = function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}