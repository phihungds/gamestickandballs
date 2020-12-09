
function Ball(x, y, vx, vy, w, h, ctx) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.w = w
    this.h = h
    this.ctx = ctx
    this.move = function () {
        if (this.y + this.h > 550 || this.y <= 0) {
            this.vy = -this.vy
        }
        if (this.x + this.w > 400 || this.x <= 0) {
            this.vx = -this.vx
        }
        this.x += this.vx
        this.y += this.vy
    }
    this.draw = function () {
        let img = new Image()
        img.src = "ball_img.png"
        img.width = "50"
        img.height = "50"
        ctx.drawImage(img, this.x, this.y)
    }
}

