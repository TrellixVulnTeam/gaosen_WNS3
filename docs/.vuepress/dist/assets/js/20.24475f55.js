(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{566:function(t,n,o){},644:function(t,n,o){"use strict";o(566)},672:function(t,n,o){"use strict";o.r(n);o(50),o(6),o(51),o(21),o(38),o(59),o(121),o(12),o(271),o(49),o(270);var s={name:"piano",data:function(){return{keyNum:38,songStr:[],playIndex:[],userInput:""}},mounted:function(){},methods:{f0:function(){document.querySelectorAll(".audio-box audio").forEach((function(t,n){setTimeout((function(){t.play()}),500*n)}))},f1:function(){document.querySelectorAll(".audio-box audio").forEach((function(t,n){n%2==0&&setTimeout((function(){t.play()}),250*n)}))},f2:function(t){document.querySelector("#piano"+t).play(),console.log("btn")},compose:function(){var t=this;this.playIndex.length>0?function(){var n=function(n){console.log("循环"),console.log("此次序数为:"+t.playIndex[n]);var o=t.playIndex[n].toString();setTimeout((function(){document.querySelector("#piano"+o).play()}),1e3*n)};for(var o in t.playIndex)n(o)}():(document.querySelector("#piano20").play(),alert("请输入自定义曲子,然后点击确定"))},inputCompo:function(){var t=this;for(var n in this.songStr=[],this.playIndex=[],console.log(this.userInput),this.userInput.split("/").forEach((function(n){t.songStr.push(n)})),console.log("songStr:"),console.log(this.songStr),this.songStr){var o=this.songStr[n].slice(1),s=this.songStr[n].slice(0,1);if(o>13)return void alert("谱曲字符串不合法");"A"===s?this.playIndex.push(o):"B"===s?this.playIndex.push(parseInt(o)+13):"C"===s?this.playIndex.push(parseInt(o)+26):alert("谱曲字符串不合法")}console.log("audio实际序数:\n"),console.log(this.playIndex)}}},e=(o(644),o(3)),i=Object(e.a)(s,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"layout-box"},[o("h2",[t._v("奏乐输入请以以下图片布局为准")]),t._v(" "),o("br"),t._v(" "),o("span",[t._v("如:一闪一闪亮晶晶:B1/B1/B4/B4/B5/B5/B4/B4/B4/B3/B3/B2/B2/B1\n\n      B5/B5/B4/B4/B3/B3/B2/B5/B5/B4/B4/B3/B3/B2\n\n      B1/B1/B4/B4/B5/B5/B4/B4/B4/B3/B3/B2/B2/B1\n    ")]),t._v(" "),o("br"),t._v(" "),o("img",{attrs:{src:t.$withBase("/img/layout.png"),alt:"示例图"}})]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"btn-box"},[o("button",{staticClass:"f1",on:{click:t.f0}},[t._v("轮询测试")]),t._v(" "),o("button",{staticClass:"f1",on:{click:t.f1}},[t._v("100 ~ 2000Hz")]),t._v(" "),o("button",{staticClass:"f1",on:{click:t.compose}},[t._v("奏乐")]),t._v(" "),o("div",{staticClass:"input-box"},[o("i",{staticClass:"iconfont reco-douyin"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入曲子，以'/'分隔"},domProps:{value:t.userInput},on:{input:function(n){n.target.composing||(t.userInput=n.target.value)}}}),t._v(" "),o("div",{on:{click:t.inputCompo}},[t._v("确定")])])]),t._v(" "),o("ul",{staticStyle:{display:"none"}},t._l(t.keyNum,(function(n){return o("li",{staticClass:"audio-box"},[o("audio",{attrs:{src:t.$withBase("/music/piano("+n+").mp3"),id:"piano"+n}})])})),0),t._v(" "),o("ul",{staticClass:"key-ul"},t._l(t.keyNum,(function(n){return o("li",{staticClass:"key-box"},[o("button",{staticClass:"f1 key-button",on:{click:function(o){return t.f2(n)}}})])})),0)])}),[],!1,null,"0ccb63d4",null);n.default=i.exports}}]);