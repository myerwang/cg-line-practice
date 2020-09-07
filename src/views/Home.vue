<template>
  <div>
    <div ref="p1" :style="p1" class="point"></div>
    <div ref="p2" :style="p2" class="point"></div>
    <div></div>
    <div v-show="development" class="force">{{this.pressure}}</div>
    <div v-show="development" class="touches" v-html="this.touches"></div>
    <canvas ref="myCanvas" v-plug>Sorry, your browser is too old for this demo.</canvas>
  </div>
</template>

<script>

export default {
    data() {
      return {
        pressure:0,          //笔压力
        touches:"",          //笔属性文字展示
        development:true,    //是否为开发模式，开发模式下响应鼠标绘画
        p1:{
          left:0,
          top:0,
          width:"30px",
          height:"30px"
        },//p1点style
        p2:{
          left:0,
          top:0,
          width:"30px",
          height:"30px"
        },//p2点style



      }
    },
    components: {
    },
    methods: {
      clearCanvas:function(){  
        const c = this.$refs.myCanvas
        const context = c.getContext("2d")
          
        context.fillStyle="#ffffff"
        context.beginPath()
        context.fillRect(0,0,c.width,c.height)
        context.closePath()
      },//清除画布
      posePoint:function(){

        const minH = Math.round(window.innerHeight/10)
        const maxH = Math.round(window.innerHeight - minH)
        const minW = Math.round(window.innerWidth/10)
        const maxW = Math.round(window.innerWidth - minW)

        console.log("minH:" + minH + " maxH:" + maxH + " minW:"+minW +" maxW:"+maxW)

        this.p1.top = minH + Math.round(Math.random() * (maxH - minH)) + "px"
        this.p1.left = minW + Math.round(Math.random() * (maxW - minW)) + "px"
        this.p2.top = minH + Math.round(Math.random() * (maxH - minH)) + "px"
        this.p2.left = minW + Math.round(Math.random() * (maxW - minW)) + "px"
        
      },//随机摆放点位置 



    },
    mounted () {

      //构建两点
      this.posePoint()

      //环境判断
      if("development" == process.env.NODE_ENV){
        this.development = true
      }else{
        this.development = false
      }

      console.log("process.env.NODE_ENV:"+process.env.NODE_ENV)
      
    },
    watch:{

    },
    directives:{
      plug:{
        bind(el, binding, vnode) {

          const context = el.getContext('2d')
          const that = vnode.context
          let lineWidth = 0
          let isMousedown = false
          let points = []

          el.width = window.innerWidth * 2
          el.height = window.innerHeight * 2

          console.log("el.width" + el.width + " el.height" + el.height)

          const requestIdleCallback = window.requestIdleCallback || function (fn) { setTimeout(fn, 1) };

          for (const ev of ["touchstart", "mousedown"]) {

            if(!that.development && "mousedown" == ev) continue
            
            el.addEventListener(ev, function (e) {

              let pressure = 0.1;
              let x, y;
              if (e.touches && e.touches[0] && typeof e.touches[0]["force"] !== "undefined") {
                if (e.touches[0]["force"] > 0) {
                  pressure = e.touches[0]["force"]
                }
                x = e.touches[0].pageX * 2
                y = e.touches[0].pageY * 2
              } else {
                pressure = 1.0
                x = e.pageX * 2
                y = e.pageY * 2
              }

              isMousedown = true

              lineWidth = Math.log(pressure + 1) * 40
              context.lineWidth = lineWidth// pressure * 50;
              context.strokeStyle = 'black'
              context.lineCap = 'round'
              context.lineJoin = 'round'
              context.beginPath()
              context.moveTo(x, y)

              points.push({ x, y, lineWidth })
            
            })
          } //for

          for (const ev of ['touchmove', 'mousemove']) {
            
            if(!that.development && "mousemove" == ev) continue
            
            el.addEventListener(ev, function (e) {
              if (!isMousedown) return
              e.preventDefault()

              let pressure = 0.1
              let x, y
              if (e.touches && e.touches[0] && typeof e.touches[0]["force"] !== "undefined") {
                if (e.touches[0]["force"] > 0) {
                  pressure = e.touches[0]["force"]
                }
                x = e.touches[0].pageX * 2
                y = e.touches[0].pageY * 2
              } else {
                pressure = 1.0
                x = e.pageX * 2
                y = e.pageY * 2
              }

              // smoothen line width
              lineWidth = (Math.log(pressure + 1) * 40 * 0.2 + lineWidth * 0.8)
              points.push({ x, y, lineWidth })

              context.strokeStyle = 'black'
              context.lineCap = 'round'
              context.lineJoin = 'round'
              // context.lineWidth   = lineWidth// pressure * 50;
              // context.lineTo(x, y);
              // context.moveTo(x, y);

              if (points.length >= 3) {
                const l = points.length - 1
                const xc = (points[l].x + points[l - 1].x) / 2
                const yc = (points[l].y + points[l - 1].y) / 2
                context.lineWidth = points[l - 1].lineWidth
                context.quadraticCurveTo(points[l - 1].x, points[l - 1].y, xc, yc)
                context.stroke()
                context.beginPath()
                context.moveTo(xc, yc)
              }

              const touch = e.touches ? e.touches[0] : null

              requestIdleCallback(() => {
                vnode.context.pressure = pressure
                if(touch){
                  vnode.context.touches = `
                    touchType = ${touch.touchType} ${touch.touchType === 'direct' ? '👆' : '✍️'} <br/>
                    radiusX = ${touch.radiusX} <br/>
                    radiusY = ${touch.radiusY} <br/>
                    rotationAngle = ${touch.rotationAngle} <br/>
                    altitudeAngle = ${touch.altitudeAngle} <br/>
                    azimuthAngle = ${touch.azimuthAngle} <br/>
                  `
                }

              })

            })
          } //for

          for (const ev of ['touchend', 'touchleave', 'mouseup']) {
            
            if(!that.development && "mouseup" == ev) continue
            
            el.addEventListener(ev, function (e) {
              let pressure = 0.1;
              let x, y;

              if (e.touches && e.touches[0] && typeof e.touches[0]["force"] !== "undefined") {
                if (e.touches[0]["force"] > 0) {
                  pressure = e.touches[0]["force"]
                }
                x = e.touches[0].pageX * 2
                y = e.touches[0].pageY * 2
              } else {
                pressure = 1.0
                x = e.pageX * 2
                y = e.pageY * 2
              }

              isMousedown = false

              context.strokeStyle = 'black'
              context.lineCap = 'round'
              context.lineJoin = 'round'

              if (points.length >= 3) {
                const l = points.length - 1
                context.quadraticCurveTo(points[l].x, points[l].y, x, y)
                context.stroke()
              }

              console.log(points)
              console.log("!!!!!!!!!!!!!!!!!!!!!!!")

              points = []
              lineWidth = 0

              //重置点位置，擦出线
              that.posePoint()
              that.clearCanvas()

            })
          } //for


          

        } //bind
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
body {
  position: absolute;
  margin: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  font-size: 13px;
  box-sizing: border-box;
}
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
}
.force{
  position: absolute;
  width: 100%;
  padding-top:100px;
  z-index: 100;
  pointer-events: none;
  color:red
}
.touches{
  position: absolute;
  width: 100%;
  z-index: 100;
  padding-top:120px;
  pointer-events: none;
  color:blue
}
.point{
  position: absolute;
  left:50%;
  top:50%;
  z-index:100;
  background-color: #111111;
  width:30px;
  height:30px;
  border-radius: 50%;
}
</style>

