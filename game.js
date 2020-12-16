function Game(canvas, scoreElement) {
  this.canvas = canvas
  this.scoreElement = scoreElement

  let ctx = document.getElementById("game").getContext("2d")
  let ball = new Ball(20, 20, 2, -2, 20, 20, ctx)
  let stick = new Stick(150, 540, 100, 10, ctx)

  this.draw = function () {
    ball.ctx.clearRect(0, 0, 800, 600)

    ball.draw()
    stick.draw()

  }
  this.updateTarget = function (Coordinate) {
    stick.updateTarget(Coordinate)
  }
  this.stickTouchBall = function () {
     if (ball.y + ball.h > stick.y) {
      if (ball.x > stick.x && ball.x < stick.x + stick.w) {
        ball.vy = -ball.vy
        
      }
      else {

      }
    }
  }
  this.calculatorNextState = function () {
    ball.move()
    stick.moveTowardTarget()
    this.stickTouchBall()
  }
}

