let ctx = document.getElementById("game").getContext("2d")
let ball = new Ball(20, 20, 4, 4, 20, 20, ctx)
timeLoop = 1000 / 30
setInterval(gameStart, timeLoop)
function gameStart() {
    ball.ctx.clearRect(0, 0, 800, 600)
    ball.move()
    ball.draw()
}

