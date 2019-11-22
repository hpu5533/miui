let key = document.querySelector('.key')
let content = document.querySelector('.content-detail')
let fontWeight = ""
drag(key)
function drag(obj){
  obj.onmousedown = function (e) {
    e = e || window.event
    // 此处是当obj的onmousedown事件发生时，该元素获得全局捕获
    if(obj.setCapture){
      obj.setCapture()
    }
    var currentX = e.clientX - obj.offsetLeft
    document.onmousemove = function (e) {
      content.style.fontWeight = (obj.offsetLeft/344>0.5)?'bold':'normal'
      console.log(obj.offsetLeft/344*900)
      e = e || window.event
      let offsetleft = e.clientX - currentX
      if(offsetleft<=0){
        obj.style.left = 0
      }else if(offsetleft>=obj.parentNode.offsetWidth - obj.offsetWidth){
        obj.style.left = obj.parentNode.offsetWidth - obj.offsetWidth
      }else{
        obj.style.left = e.clientX - currentX + "px"
      }
      
    }
    document.onmouseup = function () {
      console.log(obj.offsetLeft)
      document.onmousemove = null
      document.onmouseup = null
      if(obj.releaseCapture){
        obj.releaseCapture() 
      }
    }
    return false
  }
}
