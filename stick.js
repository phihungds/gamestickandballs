function Stick(x, y, w, h, ctx) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.ctx = ctx
    this.v = 0
     let target = this.x

    this.draw = function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    this.moveTowardTarget = function () {
        console.log(this.x)
        let doLech = target - this.x
        this.v = Math.round(doLech / 20)
         this.x += this.v
    }
    this.updateTarget = function (coordinate) {
        target = coordinate
    }
}