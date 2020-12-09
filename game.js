let ctx = document.getElementById("game").getContext("2d")
let ball = new Ball(20, 20, 4, 4, 20, 20, ctx)
let stick = new Stick(150, 540, 100, 10, ctx)
timeLoop = 1000 / 30
setInterval(gameStart, timeLoop)
function gameStart() {
    ball.ctx.clearRect(0, 0, 800, 600)
    ball.move()
    ball.draw()
    stick.draw()
}

