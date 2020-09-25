<template>
  <div>
    <div ref="p1" :style="p1" class="point"></div>
    <div ref="p2" :style="p2" class="point"></div>
    <div v-show="development" class="force">{{this.pressure}}</div>
    <div v-show="development" class="touches" v-html="this.touches"></div>
    <div class="panel">
      <div class="basic silent"><span :style="{fontSize:showSumFontSize}">{{showSum}}</span></div>
      <div class="basic silent green"><span :style="{fontSize:showSumFontSizePassed}">{{this.$store.state.passed}}</span></div>
      <div class="basic silent"><span style="fontSize:30px">{{showPercentage}}</span></div>
      <div class="basic silent"><span :style="{fontSize:showComboCss}">{{showCombo}}</span></div>
      <div class="basic silent"><span :style="{fontSize:showComboMaxCss}">{{this.$store.state.comboMax}}</span></div>
      <div class="basic clear" @click="clearCanvasAndPoints"><span class="icon iconfont iconxiangpica"></span></div>
    </div>
    <canvas ref="myCanvas" v-if="hackReset" v-plug>Sorry, your browser is too old for this demo.</canvas>
  </div>
</template>

<script>

export default {
    data() {
      return {
        points:[],
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
        isFullscreen: false,
        hackReset:true,         //重载组件
        combo:false,



      }
    },
    components: {
    },
    computed:{
      showSum(){
        return this.$store.state.points.length
      },//显示总分
      showSumFontSize(){
        if(this.$store.state.points.length >= 100000) return "14px"
        if(this.$store.state.points.length >= 10000) return "25px"
        if(this.$store.state.points.length >= 1000) return "30px"
        if(this.$store.state.points.length >= 100) return "44px"
        return "60px"
      },//总分文字大小
      showSumFontSizePassed(){
        if(this.$store.state.passed >= 100000) return "14px"
        if(this.$store.state.passed >= 10000) return "25px"
        if(this.$store.state.passed >= 1000) return "30px"
        if(this.$store.state.passed >= 100) return "44px"
        return "60px"
      },
      showComboMaxCss(){
        if(this.$store.state.comboMax >= 100000) return "14px"
        if(this.$store.state.comboMax >= 10000) return "25px"
        if(this.$store.state.comboMax >= 1000) return "30px"
        if(this.$store.state.comboMax >= 100) return "44px"
        return "60px"
      },
      showComboCss(){
        if(this.$store.state.combo >= 10000) return "15px"
        if(this.$store.state.combo >= 1000) return "20px"
        if(this.$store.state.combo >= 100) return "34px"
        return "50px"
      },
      showCombo(){
        if(this.$store.state.combo > 0) return "+"+this.$store.state.combo
        return "0"
      },
      showPercentage(){
        if(parseInt(this.$store.state.passed/this.$store.state.points.length*100)) return parseInt(this.$store.state.passed/this.$store.state.points.length*100) + "%"
        return "0"
      },

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
      clearCanvasAndPoints:function(){  

        this.clearCanvas()
        this.$store.commit('clearLineData')

      },//清除画布与历史记录
      posePoint:function(){

        const minH = Math.round(window.innerHeight/10)
        const maxH = Math.round(window.innerHeight - minH)
        const minW = Math.round(window.innerWidth/10)
        const maxW = Math.round(window.innerWidth - minW)

        //console.log("minH:" + minH + " maxH:" + maxH + " minW:"+minW +" maxW:"+maxW)

        this.p1.top = minH + Math.round(Math.random() * (maxH - minH)) + "px"
        this.p1.left = minW + Math.round(Math.random() * (maxW - minW)) + "px"
        this.p2.top = minH + Math.round(Math.random() * (maxH - minH)) + "px"
        this.p2.left = minW + Math.round(Math.random() * (maxW - minW)) + "px"

        this.p1.width = this.$store.state.pointSize + "px"
        this.p1.height = this.$store.state.pointSize + "px"
        this.p2.width = this.$store.state.pointSize + "px"
        this.p2.height = this.$store.state.pointSize + "px"

        //console.log("p1.top:" +  parseInt(this.p1.top)*2  + "  p1.left" + parseInt(this.p1.left)*2 + " p2.top:" +  parseInt(this.p2.top)*2  + "  p2.left" + parseInt(this.p2.left)*2)
        
      },//随机摆放点位置
      strokePoints:function(step){
        const c = this.$refs.myCanvas
        const context = c.getContext("2d")
        let configShowLineLast = 0
        let colors = ["#666666","#999999","#cccccc"]
        if(step){
          configShowLineLast = parseInt(this.$store.state.configShowLineLast)
        }
        for (const key in this.$store.state.points) {
          if (this.$store.state.points.hasOwnProperty(key)) {
            const element = this.$store.state.points[key]

            if(configShowLineLast <= key) break
            let color = colors[key]
            if (this.$store.state.combo >= 3) color = this.getRandomColor()

            for (const keySon in element) {
              if (element.hasOwnProperty(keySon)) {
                const elementSon = element[keySon];

                if(0 == keySon){
                  context.lineWidth = elementSon.lineWidth
                  context.strokeStyle = color
                  context.lineCap = 'round'
                  context.lineJoin = 'round'
                  context.beginPath()
                  context.moveTo(elementSon.x, elementSon.y)
                }

                if (keySon >= 3) {
                  const l = keySon - 1
                  const xc = (element[l].x + element[l - 1].x) / 2
                  const yc = (element[l].y + element[l - 1].y) / 2
                  context.lineWidth = element[l - 1].lineWidth
                  context.quadraticCurveTo(element[l - 1].x, element[l - 1].y, xc, yc)
                  context.stroke()
                  context.beginPath()
                  context.moveTo(xc, yc)
                }

                
              }

            }

          }
        }

      },//重绘数组内线段
      rebuileCanvas() {
        // 销毁子标签
        this.hackReset = false
        // 重新创建子标签
        this.$nextTick(() => {
          this.hackReset = true
        })
      },//重载组件
      passedCheck(){

        let a1 = parseInt(this.p1.left)*2 + this.$store.state.pointSize/2
        let b1 = parseInt(this.p1.top)*2 + this.$store.state.pointSize/2

        let a2 = parseInt(this.p2.left)*2 + this.$store.state.pointSize/2
        let b2 = parseInt(this.p2.top)*2 + this.$store.state.pointSize/2

        let passed = false

        let x0 = this.points[0].x
        let y0 = this.points[0].y

        let xx = this.points[this.points.length-1].x
        let yy = this.points[this.points.length-1].y

        //增加容差
        if(x0 < xx){
          x0 = x0 - this.$store.state.pointSize * 2
          xx = xx + this.$store.state.pointSize * 2
        }else{
          x0 = x0 + this.$store.state.pointSize * 2
          xx = xx - this.$store.state.pointSize * 2
        }
        if(y0 < yy){
          y0 = y0 - this.$store.state.pointSize * 2
          yy = yy + this.$store.state.pointSize * 2
        }else{
          y0 = y0 + this.$store.state.pointSize * 2
          yy = yy - this.$store.state.pointSize * 2
        }

        //比对第一个点
        if(Math.min(x0,xx) <= a1 && a1 <= Math.max(x0,xx) && Math.min(y0,yy) <= b1 && b1 <= Math.max(y0,yy)){
          if(Math.min(x0,xx) <= a2 && a2 <= Math.max(x0,xx) && Math.min(y0,yy) <= b2 && b2 <= Math.max(y0,yy)){
            //console.log("!!!!!!!!!!!!!!!!!!!!!!!" + Math.random() * 256)
              
            //删除容差
            x0 = this.points[0].x
            y0 = this.points[0].y
            xx = this.points[this.points.length-1].x
            yy = this.points[this.points.length-1].y

            let p1 = {x:x0,y:y0}
            let p2 = {x:xx,y:yy}
            
            //两条线的向量
            let a = p1.y - p2.y
            let b = p1.x - p2.x
            let len = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
            a /= len
            b /= len
            b = b + 1 - a
            let k = {x:1,y:b} //向量 k

            //点线的向量 1
            a = b1 - p2.y
            b = a1 - p2.x
            len = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
            a /= len
            b /= len
            b = b + 1 - a
            let j = {x:1,y:b} //向量 k

            //点线的向量 2
            a = b2 - p2.y
            b = a2 - p2.x
            len = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
            a /= len
            b /= len
            b = b + 1 - a
            let l = {x:1,y:b} //向量 k

            //x位置固定比对y位置
            let z1 = k.y - j.y
            let z2 = k.y - l.y
            
            // console.log("线的向量k" + k.x + " " + k.y)
            // console.log("点线的向量j" + j.x + " " + j.y)
            

            if(Math.abs(z1 * 100) <= this.$store.state.pointSize/this.$store.state.configPassedCheckLimit && Math.abs(z2 * 100 ) <= this.$store.state.pointSize/this.$store.state.configPassedCheckLimit) {
              passed = true
              if(this.combo){
                this.$store.commit('addCombo')
              }
              this.combo = true
            }else{
              this.combo = false
              this.$store.commit('clearCombo')
            }

            // console.log("点线的点乘1:" + (z1 * 100) + " " + passed)
            // console.log("点线的点乘2:" + (z2 * 100) + " " + passed)

          }//if
        }//if

        //重置点位置
        this.posePoint()
        return passed

      },//判断坐标是否穿过
      getRandomColor(){
        let r = parseInt(Math.random() * 256)
        let g = parseInt(Math.random() * 256)
        let b = parseInt(Math.random() * 256)

        return `rgba(${r},${g},${b},1)`
      },//获得随机颜色


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
//this.development = false
      //开始拉伸窗口事件
      const that = this;
      window.onresize = () => {
        return (() => {
          this.rebuileCanvas()
        })()
      }

      console.log("process.env.NODE_ENV:"+process.env.NODE_ENV)

    },
    watch:{
      '$store.state.points':function(){
        //重绘
        this.strokePoints(true)
      },//触发重绘
    },
    directives:{
      plug:{
        bind(el, binding, vnode) {

          const context = el.getContext('2d')
          const that = vnode.context
          let lineWidth = 0
          let isMousedown = false //判断笔迹合法性
          let canPencil = false    //判断是否在apple pencil可用环境

          el.width = window.innerWidth * 2
          el.height = window.innerHeight * 2

          //console.log("el.width" + el.width + " el.height" + el.height)

          const requestIdleCallback = window.requestIdleCallback || function (fn) { setTimeout(fn, 1) };

          for (const ev of ["touchstart", "mousedown"]) {

            if(!that.development && "mousedown" == ev) continue
            
            el.addEventListener(ev, function (e) {
              e.preventDefault()
console.log("touchstart")
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

              that.points.push()
              //that.$store.commit('addLineData',{ x, y, lineWidth })
            
            })
          } //for

          for (const ev of ['touchmove', 'mousemove']) {

            if(!that.development && "mousemove" == ev) continue

            el.addEventListener(ev, function (e) {
              if (!isMousedown) return
              e.preventDefault()

              const touch = e.touches ? e.touches[0] : null

              if(touch && !that.development && touch.touchType !== undefined){
                canPencil = true
                if(touch.touchType !== "stylus"){
                  that.points = []
                  isMousedown = false
                  return
                }
              }

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

              that.points.push({ x, y, lineWidth })

              context.strokeStyle = 'black'
              context.lineCap = 'round'
              context.lineJoin = 'round'
              // context.lineWidth   = lineWidth// pressure * 50;
              // context.lineTo(x, y);
              // context.moveTo(x, y);

              if (that.points.length >= 3) {
                const l = that.points.length - 1
                const xc = (that.points[l].x + that.points[l - 1].x) / 2
                const yc = (that.points[l].y + that.points[l - 1].y) / 2
                context.lineWidth = that.points[l - 1].lineWidth
                context.quadraticCurveTo(that.points[l - 1].x, that.points[l - 1].y, xc, yc)
                context.stroke()
                context.beginPath()
                context.moveTo(xc, yc)
              }

              requestIdleCallback(() => {
                vnode.context.pressure = pressure
                if(touch){
                  vnode.context.touches = `
                    development = ${that.development}<br/>
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

              if (canPencil && !isMousedown) return
              e.preventDefault()

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

              if (that.points.length >= 3) {
                const l = that.points.length - 1
                context.quadraticCurveTo(that.points[l].x, that.points[l].y, x, y)
                context.stroke()
              }

              that.points.push({ x, y, lineWidth })

              //console.log(that.points)
              //console.log("!!!!!!!!!!!!!!!!!!!!!!!")

              //过滤误触
              if (that.points.length >= 10) {
                //判别准确性
                if(that.passedCheck()){
                  that.$store.commit('addPassed')
                }
                //清除画布
                that.clearCanvas()
                //保存点集合
                that.$store.commit('addLineData',that.points)
              }

              //删除本地点集合
              that.points = []
              
              //console.log(that.$store.state.points)

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
  overflow: hidden;
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
.panel{
  position: absolute;
  left:0;
  top:20%;
  z-index:150;
  width: 100px;
  background-color: rgba(0, 0, 0, .7);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  touch-action: none;
  .basic{
    margin: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    height: 80px;
    line-height: 80px;
    span{
      font-size: 60px;
      color: #4c4c4c;
    }
  }
  .green{
    span{
      color: #79ff77;
    }
  }
  .match{
    background-color: #79ff77;
  }
  .clear{
    background-color: #ff7777;
  }
}
</style>

