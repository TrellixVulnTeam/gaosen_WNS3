(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{586:function(t,e,o){"use strict";o.d(e,"b",(function(){return v})),o.d(e,"a",(function(){return y}));var n=o(610),r=o.n(n),a=o(20),i=o(21),c=o(183),s=o(182),u=o(59),l=(o(305),o(6),o(181),o(95),o(12),o(27),o(40),o(128),o(184),o(602),o(0)),d=o(10),f=function(t,e,o,n){var r,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===("undefined"==typeof Reflect?"undefined":Object(u.a)(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,o,i):r(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},p=/^(\w+)\-/,h=function(t){Object(c.a)(o,t);var e=Object(s.a)(o);function o(){return Object(a.a)(this,o),e.apply(this,arguments)}return Object(i.a)(o,[{key:"getClass",value:function(t){return p.test(t)?t.replace(p,(function(){return"reco"===(arguments.length<=1?void 0:arguments[1])?"iconfont ".concat(arguments.length<=0?void 0:arguments[0]):"".concat(arguments.length<=1?void 0:arguments[1]," ").concat(arguments.length<=0?void 0:arguments[0])})):t}},{key:"go",value:function(t){""!==t&&window.open(t)}},{key:"render",value:function(){var t=arguments[0];return t("i",r()([{},{class:this.getClass(this.icon),on:{click:this.go.bind(this,this.link)}}]),[this.$slots.default])}}]),o}(l.default.extend({props:{icon:{type:String,default:""},link:{type:String,default:""}}})),v=h=f([d.b],h),m=o(7),g=function(t,e,o,n){var r,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===("undefined"==typeof Reflect?"undefined":Object(u.a)(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,o,i):r(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},b=function(t){Object(c.a)(o,t);var e=Object(s.a)(o);function o(){return Object(a.a)(this,o),e.apply(this,arguments)}return Object(i.a)(o,[{key:"setStyle",value:function(t){t.style.transition="transform ".concat(this.duration,"s ease-in-out ").concat(this.delay,"s, opacity ").concat(this.duration,"s ease-in-out ").concat(this.delay,"s"),t.style.transform=this.transform[0],t.style.opacity=0}},{key:"unsetStyle",value:function(t){t.style.transform=this.transform[1],t.style.opacity=1}},{key:"render",value:function(){var t=arguments[0];return t("transition",{attrs:Object(m.a)({},{name:"module"}),on:Object(m.a)({},{enter:this.setStyle,appear:this.setStyle,"before-leave":this.setStyle,"after-appear":this.unsetStyle,"after-enter":this.unsetStyle})},[this.$slots.default])}}]),o}(l.default.extend({props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"},transform:{type:Array,default:function(){return["translateY(-20px)","translateY(0)"]}}}})),y=b=g([d.b],b)},602:function(t,e,o){"use strict";var n=o(2),r=o(611);n({target:"String",proto:!0,forced:o(612)("link")},{link:function(t){return r(this,"a","href",t)}})},603:function(t,e,o){},604:function(t,e,o){},610:function(t,e,o){"use strict";function n(){return(n=Object.assign||function(t){for(var e,o=1;o<arguments.length;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)}var r=["attrs","props","domProps"],a=["class","style","directives"],i=["on","nativeOn"],c=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var o in e)if(t[o])if(-1!==r.indexOf(o))t[o]=n({},t[o],e[o]);else if(-1!==a.indexOf(o)){var s=t[o]instanceof Array?t[o]:[t[o]],u=e[o]instanceof Array?e[o]:[e[o]];t[o]=s.concat(u)}else if(-1!==i.indexOf(o))for(var l in e[o])if(t[o][l]){var d=t[o][l]instanceof Array?t[o][l]:[t[o][l]],f=e[o][l]instanceof Array?e[o][l]:[e[o][l]];t[o][l]=d.concat(f)}else t[o][l]=e[o][l];else if("hook"==o)for(var p in e[o])t[o][p]=t[o][p]?c(t[o][p],e[o][p]):e[o][p];else t[o]=e[o];else t[o]=e[o];return t}),{})}},611:function(t,e,o){var n=o(4),r=o(28),a=o(16),i=/"/g,c=n("".replace);t.exports=function(t,e,o,n){var s=a(r(t)),u="<"+e;return""!==o&&(u+=" "+o+'="'+c(a(n),i,"&quot;")+'"'),u+">"+s+"</"+e+">"}},612:function(t,e,o){var n=o(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},613:function(t,e){function o(t){return"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1)}function n(t){return void 0!==t.componentInstance&&t.componentInstance.$isServer}t.exports={bind:function(t,e,r){if(!o(e))return;function a(e){if(r.context){var o=e.path||e.composedPath&&e.composedPath();o&&o.length>0&&o.unshift(e.target),t.contains(e.target)||function(t,e){if(!t||!e)return!1;for(var o=0,n=e.length;o<n;o++)try{if(t.contains(e[o]))return!0;if(e[o].contains(t))return!1}catch(t){return!1}return!1}(r.context.popupItem,o)||t.__vueClickOutside__.callback(e)}}t.__vueClickOutside__={handler:a,callback:e.value};const i="ontouchstart"in document.documentElement?"touchstart":"click";!n(r)&&document.addEventListener(i,a)},update:function(t,e){o(e)&&(t.__vueClickOutside__.callback=e.value)},unbind:function(t,e,o){const r="ontouchstart"in document.documentElement?"touchstart":"click";!n(o)&&t.__vueClickOutside__&&document.removeEventListener(r,t.__vueClickOutside__.handler),delete t.__vueClickOutside__}}},614:function(t,e,o){"use strict";o(603)},615:function(t,e,o){"use strict";o(604)},619:function(t,e,o){"use strict";var n=o(586),r=o(613),a=o.n(r),i=(o(64),{light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888","--box-bg-color-1":"#eeeeee","--background-color":"#EAEAEAFF"},dark:{"--default-color-10":"rgba(29, 32, 37, 1)","--default-color-9":"rgba(29, 32, 37, .9)","--default-color-8":"rgba(29, 32, 37, .8)","--default-color-7":"rgba(29, 32, 37, .7)","--default-color-6":"rgba(29, 32, 37, .6)","--default-color-5":"rgba(29, 32, 37, .5)","--default-color-4":"rgba(29, 32, 37, .4)","--default-color-3":"rgba(29, 32, 37, .3)","--default-color-2":"rgba(29, 32, 37, .2)","--default-color-1":"rgba(29, 32, 37, .1)","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000","--background-color":"#1d2025","--box-bg-color-1":"#252934"}});function c(t){var e=document.querySelector(":root"),o=i[t],n="dark"===t?"light":"dark";for(var r in o)e.style.setProperty(r,o[r]);e.classList.remove(n),e.classList.add(t)}function s(t){if("auto"===t){var e=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(e&&c("dark"),o&&c("light"),!e&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");var n=(new Date).getHours();c(n<6||n>=18?"dark":"light")}}else c(t)}var u={name:"ModeOptions",data:function(){return{modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}},mounted:function(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var t=this;window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){"auto"===t.$data.currentMode&&s(t.$data.currentMode)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){"auto"===t.$data.currentMode&&s(t.$data.currentMode)})),s(this.currentMode)},methods:{selectMode:function(t){t!==this.currentMode&&(this.currentMode=t,s(t),localStorage.setItem("mode",t))},getClass:function(t){return t!==this.currentMode?t:"".concat(t," active")}}},l=(o(614),o(3)),d=Object(l.a)(u,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mode-options"},[o("h4",{staticClass:"title"},[t._v("Choose mode")]),t._v(" "),o("ul",{staticClass:"color-mode-options"},t._l(t.modeOptions,(function(e,n){return o("li",{key:n,class:t.getClass(e.mode),on:{click:function(o){return t.selectMode(e.mode)}}},[t._v(t._s(e.title))])})),0)])}),[],!1,null,null,null).exports,f={name:"UserSettings",directives:{"click-outside":a.a},components:{ModePicker:d,RecoIcon:n.b,ModuleTransition:n.a},data:function(){return{showMenu:!1}},mounted:function(){var t=this.$themeConfig.mode||"auto";!1===this.$themeConfig.modePicker&&("auto"===t&&(window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){s(t)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){s(t)}))),s(t))},methods:{hideMenu:function(){this.showMenu=!1}}},p=(o(615),Object(l.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return!1!==t.$themeConfig.modePicker?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[o("a",{staticClass:"color-button",on:{click:function(e){e.preventDefault(),t.showMenu=!t.showMenu}}},[o("reco-icon",{attrs:{icon:"reco-color"}})],1),t._v(" "),o("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[o("ModePicker")],1)])],1):t._e()}),[],!1,null,null,null));e.a=p.exports},653:function(t,e,o){},763:function(t,e,o){"use strict";o(653)},794:function(t,e,o){"use strict";o.r(e);o(55),o(6),o(56),o(22),o(41),o(64),o(131),o(12),o(303),o(53),o(302);var n={components:{Mode:o(619).a},name:"piano",data:function(){return{keyNum:38,songStr:[],playIndex:[],userInput:""}},methods:{f0:function(){document.querySelectorAll(".audio-box audio").forEach((function(t,e){setTimeout((function(){t.play()}),500*e)}))},f1:function(){document.querySelectorAll(".audio-box audio").forEach((function(t,e){e%2==0&&setTimeout((function(){t.play()}),250*e)}))},f2:function(t){document.querySelector("#piano"+t).play(),console.log("btn")},compose:function(){var t=this;this.playIndex.length>0?function(){var e=function(e){console.log("循环"),console.log("此次序数为:"+t.playIndex[e]);var o=t.playIndex[e].toString();setTimeout((function(){document.querySelector("#piano"+o).play()}),1e3*e)};for(var o in t.playIndex)e(o)}():(document.querySelector("#piano20").play(),alert("请输入自定义曲子,然后点击确定"))},inputCompo:function(){var t=this;for(var e in this.songStr=[],this.playIndex=[],console.log(this.userInput),this.userInput.split("/").forEach((function(e){t.songStr.push(e)})),console.log("songStr:"),console.log(this.songStr),this.songStr){var o=this.songStr[e].slice(1),n=this.songStr[e].slice(0,1);if(o>13)return void alert("谱曲字符串不合法");"A"===n?this.playIndex.push(o):"B"===n?this.playIndex.push(parseInt(o)+13):"C"===n?this.playIndex.push(parseInt(o)+26):alert("谱曲字符串不合法")}console.log("audio实际序数:\n"),console.log(this.playIndex)}}},r=(o(763),o(3)),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("h2",[t._v("465asdaa312sad")]),t._v(" "),o("Mode")],1),t._v(" "),o("div",{staticClass:"layout-box"},[o("h2",[t._v("奏乐输入请以以下图片布局为准")]),t._v(" "),o("br"),t._v(" "),o("span",[t._v("如:一闪一闪亮晶晶:B1/B1/B4/B4/B5/B5/B4/B4/B4/B3/B3/B2/B2/B1\n\n      B5/B5/B4/B4/B3/B3/B2/B5/B5/B4/B4/B3/B3/B2\n\n      B1/B1/B4/B4/B5/B5/B4/B4/B4/B3/B3/B2/B2/B1\n    ")]),t._v(" "),o("br"),t._v(" "),o("img",{attrs:{src:t.$withBase("/img/layout.png"),alt:"示例图"}})]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"btn-box"},[o("button",{staticClass:"f1",on:{click:t.f0}},[t._v("轮询测试")]),t._v(" "),o("button",{staticClass:"f1",on:{click:t.f1}},[t._v("100 ~ 2000Hz")]),t._v(" "),o("button",{staticClass:"f1",on:{click:t.compose}},[t._v("奏乐")]),t._v(" "),o("div",{staticClass:"input-box"},[o("i",{staticClass:"iconfont reco-douyin"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入曲子，以'/'分隔"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}}),t._v(" "),o("div",{on:{click:t.inputCompo}},[t._v("确定")])])]),t._v(" "),o("ul",{staticStyle:{display:"none"}},t._l(t.keyNum,(function(e){return o("li",{staticClass:"audio-box"},[o("audio",{attrs:{src:t.$withBase("/music/piano("+e+").mp3"),id:"piano"+e}})])})),0),t._v(" "),o("ul",{staticClass:"key-ul"},t._l(t.keyNum,(function(e){return o("li",{staticClass:"key-box"},[o("button",{staticClass:"f1 key-button",on:{click:function(o){return t.f2(e)}}})])})),0)])}),[],!1,null,"7f754eda",null);e.default=a.exports}}]);