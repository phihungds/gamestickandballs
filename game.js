function Game(canvas, scoreElement) {
  this.canvas = canvas
  this.scoreElement = scoreElement

  let ctx = document.getElementById("game").getContext("2d")
  let ball = new Ball(20, 20, 2, 2, 20, 20, ctx)
  let stick = new Stick(150, 540, 100, 10, ctx)
  let score = 0

  this.draw = function () {
    ball.ctx.clearRect(0, 0, 800, 600)
    ball.draw()
    stick.draw()

  }
  this.updateTarget = function (Coordinate) {
    stick.updateTarget(Coordinate)
  }
  this.stickTouchBall = function () {
    this.reverseY()
    score++
  }
  this.reverseY = function () {
    ball.vy = -ball.vy
  }
  this.reverseX = function () {
    ball.vx = -ball.vx
  }
  this.gameOver = function () {
    alert("Bạn thua ! Điểm số của bạn là : " + score)
    document.location.reload()
  }
  this.checkTouch = function () {
    if (ball.y + ball.h > stick.y) {
      if (ball.x > stick.x && ball.x < stick.x + stick.w) {
        this.stickTouchBall()
      }
      else if (ball.y > 550) {
        this.gameOver()
      }
    }
    else if (ball.y <= 0) {
      this.reverseY()
    }
    else if (ball.x + ball.w > 400 || ball.x <= 0) {
      this.reverseX()
    }
  }
  this.updateSpeed = function () {
    switch (score) {
      case 3:
        ball.vx = 3
        ball.vy =3
        break
      case 15:
        ball.vx++
        ball.vy++
        break
    }
  }

  this.moreBall = function () {
    let newBall = new Ball(ball.x, ball.y, -ball.vx, ball.vy, 20, 20, ctx)
  }
  this.updateScore = function () {
    document.getElementById("score").innerText = score
  }
  this.calculatorNextState = function () {
    ball.move()
    stick.moveTowardTarget()
    this.checkTouch()
    this.updateScore()
    //this.updateSpeed()
  }
}

