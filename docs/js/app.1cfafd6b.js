(function(e){function t(t){for(var o,r,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"297f203e"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"3905348f"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===o||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("7c55"),n("2877")),u={},s=Object(i["a"])(u,r,a,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"p1",staticClass:"point",style:e.p1}),n("div",{ref:"p2",staticClass:"point",style:e.p2}),n("div"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.development,expression:"development"}],staticClass:"force"},[e._v(e._s(this.pressure))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.development,expression:"development"}],staticClass:"touches",domProps:{innerHTML:e._s(this.touches)}}),n("canvas",{directives:[{name:"plug",rawName:"v-plug"}],ref:"myCanvas"},[e._v("Sorry, your browser is too old for this demo.")])])},h=[],p=(n("99af"),{data:function(){return{pressure:0,touches:"",development:!0,p1:{left:0,top:0,width:"30px",height:"30px"},p2:{left:0,top:0,width:"30px",height:"30px"}}},components:{},methods:{clearCanvas:function(){var e=this.$refs.myCanvas,t=e.getContext("2d");t.fillStyle="#ffffff",t.beginPath(),t.fillRect(0,0,e.width,e.height),t.closePath()},posePoint:function(){var e=Math.round(window.innerHeight/10),t=Math.round(window.innerHeight-e),n=Math.round(window.innerWidth/10),o=Math.round(window.innerWidth-n);console.log("minH:"+e+" maxH:"+t+" minW:"+n+" maxW:"+o),this.p1.top=e+Math.round(Math.random()*(t-e))+"px",this.p1.left=n+Math.round(Math.random()*(o-n))+"px",this.p2.top=e+Math.round(Math.random()*(t-e))+"px",this.p2.left=n+Math.round(Math.random()*(o-n))+"px"}},mounted:function(){this.posePoint(),this.development=!1,console.log("process.env.NODE_ENV:production")},watch:{},directives:{plug:{bind:function(e,t,n){var o=e.getContext("2d"),r=n.context,a=0,i=!1,u=[];e.width=2*window.innerWidth,e.height=2*window.innerHeight,console.log("el.width"+e.width+" el.height"+e.height);for(var s=window.requestIdleCallback||function(e){setTimeout(e,1)},c=0,l=["touchstart","mousedown"];c<l.length;c++){var d=l[c];(r.development||"mousedown"!=d)&&e.addEventListener(d,(function(e){var t,n,r=.1;e.touches&&e.touches[0]&&"undefined"!==typeof e.touches[0]["force"]?(e.touches[0]["force"]>0&&(r=e.touches[0]["force"]),t=2*e.touches[0].pageX,n=2*e.touches[0].pageY):(r=1,t=2*e.pageX,n=2*e.pageY),i=!0,a=40*Math.log(r+1),o.lineWidth=a,o.strokeStyle="black",o.lineCap="round",o.lineJoin="round",o.beginPath(),o.moveTo(t,n),u.push({x:t,y:n,lineWidth:a})}))}for(var h=0,p=["touchmove","mousemove"];h<p.length;h++){var f=p[h];(r.development||"mousemove"!=f)&&e.addEventListener(f,(function(e){if(i){e.preventDefault();var t,r,c=.1;if(e.touches&&e.touches[0]&&"undefined"!==typeof e.touches[0]["force"]?(e.touches[0]["force"]>0&&(c=e.touches[0]["force"]),t=2*e.touches[0].pageX,r=2*e.touches[0].pageY):(c=1,t=2*e.pageX,r=2*e.pageY),a=40*Math.log(c+1)*.2+.8*a,u.push({x:t,y:r,lineWidth:a}),o.strokeStyle="black",o.lineCap="round",o.lineJoin="round",u.length>=3){var l=u.length-1,d=(u[l].x+u[l-1].x)/2,h=(u[l].y+u[l-1].y)/2;o.lineWidth=u[l-1].lineWidth,o.quadraticCurveTo(u[l-1].x,u[l-1].y,d,h),o.stroke(),o.beginPath(),o.moveTo(d,h)}var p=e.touches?e.touches[0]:null;s((function(){n.context.pressure=c,p&&(n.context.touches="\n                    touchType = ".concat(p.touchType," ").concat("direct"===p.touchType?"👆":"✍️"," <br/>\n                    radiusX = ").concat(p.radiusX," <br/>\n                    radiusY = ").concat(p.radiusY," <br/>\n                    rotationAngle = ").concat(p.rotationAngle," <br/>\n                    altitudeAngle = ").concat(p.altitudeAngle," <br/>\n                    azimuthAngle = ").concat(p.azimuthAngle," <br/>\n                  "))}))}}))}for(var v=0,m=["touchend","touchleave","mouseup"];v<m.length;v++){var g=m[v];(r.development||"mouseup"!=g)&&e.addEventListener(g,(function(e){var t,n;if(e.touches&&e.touches[0]&&"undefined"!==typeof e.touches[0]["force"]?(e.touches[0]["force"]>0&&e.touches[0]["force"],t=2*e.touches[0].pageX,n=2*e.touches[0].pageY):(1,t=2*e.pageX,n=2*e.pageY),i=!1,o.strokeStyle="black",o.lineCap="round",o.lineJoin="round",u.length>=3){var s=u.length-1;o.quadraticCurveTo(u[s].x,u[s].y,t,n),o.stroke()}console.log(u),console.log("!!!!!!!!!!!!!!!!!!!!!!!"),u=[],a=0,r.posePoint(),r.clearCanvas()}))}}}}}),f=p,v=(n("de16"),Object(i["a"])(f,d,h,!1,null,null,null)),m=v.exports;o["a"].use(l["a"]);var g=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],b=new l["a"]({routes:g}),w=b,y=n("2f62");o["a"].use(y["a"]);var x=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:w,store:x,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var o=n("2395"),r=n.n(o);r.a},"8d91":function(e,t,n){},de16:function(e,t,n){"use strict";var o=n("8d91"),r=n.n(o);r.a}});
//# sourceMappingURL=app.1cfafd6b.js.map