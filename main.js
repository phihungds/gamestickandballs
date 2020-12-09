let canvas = document.getElementById('gameCanvas')
let score = document.getElementById("score")
let game = new Game(canvas, score)

window.requestAnimationFrame(tick)

window.addEventListener ("mousemove", function move(event){
  let mouseCoordinates = event.clientX
  game.moveStickToward(mouseCoordinates)
})
function tick() {
  // ... chạy các câu lệnh tại mỗi khung hình
  //game.requestNextFrame()
  //game.draw()

  window.requestAnimationFrame(tick)
}
function checkCoordinates(e) {
  return e.clientX
}