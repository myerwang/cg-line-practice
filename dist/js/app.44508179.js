(function(t){function e(e){for(var s,n,r=e[0],c=e[1],h=e[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(u.length)u.shift()();return a.push.apply(a,h||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,n=1;n<o.length;n++){var r=o[n];0!==i[r]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var s={},n={app:0},i={app:0},a=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0796b5f0"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={about:1};n[t]?e.push(n[t]):0!==n[t]&&o[t]&&e.push(n[t]=new Promise((function(e,o){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"3905348f"}[t]+".css",i=c.p+s,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var h=a[r],p=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(p===s||p===i))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){h=u[r],p=h.getAttribute("data-href");if(p===s||p===i)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var s=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=s,delete n[t],l.parentNode.removeChild(l),o(a)},l.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,o){s=i[t]=[e,o]}));e.push(s[2]=a);var h,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=r(t);var u=new Error;h=function(e){p.onerror=p.onload=null,clearTimeout(l);var o=i[t];if(0!==o){if(o){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,o[1](u)}i[t]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:p})}),12e4);p.onerror=p.onload=h,document.head.appendChild(p)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(o,s,function(e){return t[e]}.bind(null,s));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],p=h.push.bind(h);h.push=e,h=h.slice();for(var u=0;u<h.length;u++)e(h[u]);var l=p;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},2395:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("router-view")],1)},i=[],a=(o("7c55"),o("2877")),r={},c=Object(a["a"])(r,n,i,!1,null,null,null),h=c.exports,p=(o("d3b7"),o("8c4f")),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{ref:"p1",staticClass:"point",style:t.p1}),o("div",{ref:"p2",staticClass:"point",style:t.p2}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.development,expression:"development"}],staticClass:"force"},[t._v(t._s(this.pressure))]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.development,expression:"development"}],staticClass:"touches",domProps:{innerHTML:t._s(this.touches)}}),o("div",{staticClass:"panel"},[o("div",{staticClass:"basic silent"},[o("span",{style:{fontSize:t.showSumFontSize}},[t._v(t._s(t.showSum))])]),o("div",{staticClass:"basic silent green"},[o("span",{style:{fontSize:t.showSumFontSizePassed}},[t._v(t._s(this.$store.state.passed))])]),o("div",{staticClass:"basic silent"},[o("span",{staticStyle:{fontSize:"30px"}},[t._v(t._s(t.showPercentage))])]),o("div",{staticClass:"basic silent"},[o("span",{style:{fontSize:t.showComboCss}},[t._v(t._s(t.showCombo))])]),o("div",{staticClass:"basic silent"},[o("span",{style:{fontSize:t.showComboMaxCss}},[t._v(t._s(this.$store.state.comboMax))])]),o("div",{staticClass:"basic clear",on:{click:t.clearCanvasAndPoints}},[o("span",{staticClass:"icon iconfont iconxiangpica"})])]),t.hackReset?o("canvas",{directives:[{name:"plug",rawName:"v-plug"}],ref:"myCanvas"},[t._v("Sorry, your browser is too old for this demo.")]):t._e()])},l=[],d=(o("99af"),{data:function(){return{points:[],pressure:0,touches:"",development:!0,p1:{left:0,top:0,width:"30px",height:"30px"},p2:{left:0,top:0,width:"30px",height:"30px"},isFullscreen:!1,hackReset:!0,combo:!1}},components:{},computed:{showSum:function(){return this.$store.state.points.length},showSumFontSize:function(){return this.$store.state.points.length>=1e5?"14px":this.$store.state.points.length>=1e4?"25px":this.$store.state.points.length>=1e3?"30px":this.$store.state.points.length>=100?"44px":"60px"},showSumFontSizePassed:function(){return this.$store.state.passed>=1e5?"14px":this.$store.state.passed>=1e4?"25px":this.$store.state.passed>=1e3?"30px":this.$store.state.passed>=100?"44px":"60px"},showComboMaxCss:function(){return this.$store.state.comboMax>=1e5?"14px":this.$store.state.comboMax>=1e4?"25px":this.$store.state.comboMax>=1e3?"30px":this.$store.state.comboMax>=100?"44px":"60px"},showComboCss:function(){return this.$store.state.combo>=1e4?"15px":this.$store.state.combo>=1e3?"20px":this.$store.state.combo>=100?"34px":"50px"},showCombo:function(){return this.$store.state.combo>0?"+"+this.$store.state.combo:"0"},showPercentage:function(){return parseInt(this.$store.state.passed/this.$store.state.points.length*100)?parseInt(this.$store.state.passed/this.$store.state.points.length*100)+"%":"0"}},methods:{clearCanvas:function(){var t=this.$refs.myCanvas,e=t.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.fillRect(0,0,t.width,t.height),e.closePath()},clearCanvasAndPoints:function(){this.clearCanvas(),this.$store.commit("clearLineData")},posePoint:function(){var t=Math.round(window.innerHeight/10),e=Math.round(window.innerHeight-t),o=Math.round(window.innerWidth/10),s=Math.round(window.innerWidth-o);this.p1.top=t+Math.round(Math.random()*(e-t))+"px",this.p1.left=o+Math.round(Math.random()*(s-o))+"px",this.p2.top=t+Math.round(Math.random()*(e-t))+"px",this.p2.left=o+Math.round(Math.random()*(s-o))+"px",this.p1.width=this.$store.state.pointSize+"px",this.p1.height=this.$store.state.pointSize+"px",this.p2.width=this.$store.state.pointSize+"px",this.p2.height=this.$store.state.pointSize+"px"},strokePoints:function(t){var e=this.$refs.myCanvas,o=e.getContext("2d"),s=0,n=["#666666","#999999","#cccccc"];for(var i in t&&(s=parseInt(this.$store.state.configShowLineLast)),this.$store.state.points)if(this.$store.state.points.hasOwnProperty(i)){var a=this.$store.state.points[i];if(s<=i)break;var r=n[i];for(var c in this.$store.state.combo>=3&&(r=this.getRandomColor()),a)if(a.hasOwnProperty(c)){var h=a[c];if(0==c&&(o.lineWidth=h.lineWidth,o.strokeStyle=r,o.lineCap="round",o.lineJoin="round",o.beginPath(),o.moveTo(h.x,h.y)),c>=3){var p=c-1,u=(a[p].x+a[p-1].x)/2,l=(a[p].y+a[p-1].y)/2;o.lineWidth=a[p-1].lineWidth,o.quadraticCurveTo(a[p-1].x,a[p-1].y,u,l),o.stroke(),o.beginPath(),o.moveTo(u,l)}}}},rebuileCanvas:function(){var t=this;this.hackReset=!1,this.$nextTick((function(){t.hackReset=!0}))},passedCheck:function(){var t=2*parseInt(this.p1.left)+this.$store.state.pointSize/2,e=2*parseInt(this.p1.top)+this.$store.state.pointSize/2,o=2*parseInt(this.p2.left)+this.$store.state.pointSize/2,s=2*parseInt(this.p2.top)+this.$store.state.pointSize/2,n=!1,i=this.points[0].x,a=this.points[0].y,r=this.points[this.points.length-1].x,c=this.points[this.points.length-1].y;if(i<r?(i-=2*this.$store.state.pointSize,r+=2*this.$store.state.pointSize):(i+=2*this.$store.state.pointSize,r-=2*this.$store.state.pointSize),a<c?(a-=2*this.$store.state.pointSize,c+=2*this.$store.state.pointSize):(a+=2*this.$store.state.pointSize,c-=2*this.$store.state.pointSize),Math.min(i,r)<=t&&t<=Math.max(i,r)&&Math.min(a,c)<=e&&e<=Math.max(a,c)&&Math.min(i,r)<=o&&o<=Math.max(i,r)&&Math.min(a,c)<=s&&s<=Math.max(a,c)){i=this.points[0].x,a=this.points[0].y,r=this.points[this.points.length-1].x,c=this.points[this.points.length-1].y;var h={x:i,y:a},p={x:r,y:c},u=h.y-p.y,l=h.x-p.x,d=Math.sqrt(Math.pow(u,2)+Math.pow(l,2));u/=d,l/=d,l=l+1-u;var f={x:1,y:l};u=e-p.y,l=t-p.x,d=Math.sqrt(Math.pow(u,2)+Math.pow(l,2)),u/=d,l/=d,l=l+1-u;var m={x:1,y:l};u=s-p.y,l=o-p.x,d=Math.sqrt(Math.pow(u,2)+Math.pow(l,2)),u/=d,l/=d,l=l+1-u;var v={x:1,y:l},b=f.y-m.y,g=f.y-v.y;Math.abs(100*b)<=this.$store.state.pointSize/this.$store.state.configPassedCheckLimit&&Math.abs(100*g)<=this.$store.state.pointSize/this.$store.state.configPassedCheckLimit?(n=!0,this.combo&&this.$store.commit("addCombo"),this.combo=!0):(this.combo=!1,this.$store.commit("clearCombo"))}return this.posePoint(),n},getRandomColor:function(){var t=parseInt(256*Math.random()),e=parseInt(256*Math.random()),o=parseInt(256*Math.random());return"rgba(".concat(t,",").concat(e,",").concat(o,",1)")}},mounted:function(){var t=this;this.posePoint(),this.development=!1;window.onresize=function(){return function(){t.rebuileCanvas()}()},console.log("process.env.NODE_ENV:production")},watch:{"$store.state.points":function(){this.strokePoints(!0)}},directives:{plug:{bind:function(t,e,o){var s=t.getContext("2d"),n=o.context,i=0,a=!1;t.width=2*window.innerWidth,t.height=2*window.innerHeight;for(var r=window.requestIdleCallback||function(t){setTimeout(t,1)},c=0,h=["touchstart","mousedown"];c<h.length;c++){var p=h[c];"mousedown"!=p&&t.addEventListener(p,(function(t){var e,o,r=.1;t.touches&&t.touches[0]&&"undefined"!==typeof t.touches[0]["force"]?(t.touches[0]["force"]>0&&(r=t.touches[0]["force"]),e=2*t.touches[0].pageX,o=2*t.touches[0].pageY):(r=1,e=2*t.pageX,o=2*t.pageY),a=!0,i=40*Math.log(r+1),s.lineWidth=i,s.strokeStyle="black",s.lineCap="round",s.lineJoin="round",s.beginPath(),s.moveTo(e,o),n.points.push()}))}for(var u=0,l=["touchmove","mousemove"];u<l.length;u++){var d=l[u];"mousemove"!=d&&t.addEventListener(d,(function(t){if(a){t.preventDefault();var e,c,h=.1;if(t.touches&&t.touches[0]&&"undefined"!==typeof t.touches[0]["force"]?(t.touches[0]["force"]>0&&(h=t.touches[0]["force"]),e=2*t.touches[0].pageX,c=2*t.touches[0].pageY):(h=1,e=2*t.pageX,c=2*t.pageY),i=40*Math.log(h+1)*.2+.8*i,n.points.push({x:e,y:c,lineWidth:i}),s.strokeStyle="black",s.lineCap="round",s.lineJoin="round",n.points.length>=3){var p=n.points.length-1,u=(n.points[p].x+n.points[p-1].x)/2,l=(n.points[p].y+n.points[p-1].y)/2;s.lineWidth=n.points[p-1].lineWidth,s.quadraticCurveTo(n.points[p-1].x,n.points[p-1].y,u,l),s.stroke(),s.beginPath(),s.moveTo(u,l)}var d=t.touches?t.touches[0]:null;r((function(){o.context.pressure=h,d&&(o.context.touches="\n                    touchType = ".concat(d.touchType," ").concat("direct"===d.touchType?"👆":"✍️"," <br/>\n                    radiusX = ").concat(d.radiusX," <br/>\n                    radiusY = ").concat(d.radiusY," <br/>\n                    rotationAngle = ").concat(d.rotationAngle," <br/>\n                    altitudeAngle = ").concat(d.altitudeAngle," <br/>\n                    azimuthAngle = ").concat(d.azimuthAngle," <br/>\n                  "))}))}}))}for(var f=0,m=["touchend","touchleave","mouseup"];f<m.length;f++){var v=m[f];"mouseup"!=v&&t.addEventListener(v,(function(t){var e,o;if(t.touches&&t.touches[0]&&"undefined"!==typeof t.touches[0]["force"]?(t.touches[0]["force"]>0&&t.touches[0]["force"],e=2*t.touches[0].pageX,o=2*t.touches[0].pageY):(1,e=2*t.pageX,o=2*t.pageY),a=!1,s.strokeStyle="black",s.lineCap="round",s.lineJoin="round",n.points.length>=3){var r=n.points.length-1;s.quadraticCurveTo(n.points[r].x,n.points[r].y,e,o),s.stroke()}n.points.push({x:e,y:o,lineWidth:i}),i=0,n.passedCheck()&&n.$store.commit("addPassed"),n.clearCanvas(),n.$store.commit("addLineData",n.points),n.points=[]}))}}}}}),f=d,m=(o("de16"),Object(a["a"])(f,u,l,!1,null,null,null)),v=m.exports;s["a"].use(p["a"]);var b=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],g=new p["a"]({routes:b}),x=g,y=o("2f62"),w=o("0e44");s["a"].use(y["a"]);var C=new y["a"].Store({state:{points:[],passed:0,combo:0,comboMax:0,pointSize:30,configShowLineLast:3,configPassedCheckLimit:3},mutations:{addLineData:function(t,e){t.points.unshift(e)},clearLineData:function(t){t.points=[],t.passed=0,t.combo=0},addPassed:function(t){t.passed++},addCombo:function(t){t.combo++,t.combo>=t.comboMax&&(t.comboMax=t.combo)},clearCombo:function(t){t.combo=0}},actions:{addLineData:function(t,e){t.commit("addLineData",e)},clearLineData:function(t){t.commit("clearLineData")}},modules:{},plugins:[Object(w["a"])()]});o("ed2c");s["a"].config.productionTip=!1,new s["a"]({router:x,store:C,render:function(t){return t(h)}}).$mount("#app")},"7c55":function(t,e,o){"use strict";var s=o("2395"),n=o.n(s);n.a},"8d91":function(t,e,o){},de16:function(t,e,o){"use strict";var s=o("8d91"),n=o.n(s);n.a},ed2c:function(t,e,o){}});
//# sourceMappingURL=app.44508179.js.map