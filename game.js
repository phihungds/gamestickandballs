function Game(canvas, scoreElement) {
    this.canvas = canvas
    this.scoreElement = scoreElement

    let ctx = document.getElementById("game").getContext("2d")
    let ball = new Ball(20, 20, 4, 4, 20, 20, ctx)
    let stick = new Stick(150, 540, 100, 10, ctx)
    timeLoop = 1000 / 30
    
    this.draw = function() {
        ball.ctx.clearRect(0, 0, 800, 600)
        ball.move()
        ball.draw()
        stick.draw()
    }
    this.moveStickToward = function(Coordinates) {
        if (stick.x > Coordinates) {
          stick.moveLeft()
        } else if (stick.x < Coordinates) {
          stick.moveRight()
        }
      }
}

