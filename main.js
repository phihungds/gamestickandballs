let canvas = document.getElementById('gameCanvas')
let score = document.getElementById("score")
let game = new Game(canvas, score)

window.requestAnimationFrame(tick)

window.addEventListener ("mousemove", function move(event){
  let target = event.clientX
  game.updateTarget(target)
})
function tick() {
  game.calculatorNextState()
  game.draw()
  window.requestAnimationFrame(tick)
}
