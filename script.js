const road = document.querySelector('.road')
let positionY = 0
const roadHeight = road.offsetHeight
function moveroad(){
    positionY += 2
    road.style.backgroundPositionY = `${positionY}px`
}
setInterval(moveroad, 16);