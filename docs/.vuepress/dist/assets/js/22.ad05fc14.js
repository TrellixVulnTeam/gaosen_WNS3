(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{568:function(t,s,i){},651:function(t,s,i){"use strict";i(568)},681:function(t,s,i){"use strict";i.r(s);i(50),i(6),i(51),i(21),i(38),i(59),i(121),i(12),i(271),i(270);var e=i(650);i(0).default.use(e.a);var n={src:"https://cdn.jsdelivr.net/gh/buuing/cdn/demo/cell-80.png",width:"100%",height:"100%"},o={src:"/img/prizeBg.png",height:"100%"},a={name:"prize",data:function(){return{msg:"",isShowMsg:!1,prizeWidth:"500",prizeHeight:"500",blocks:[{padding:"50px",background:"#869cfa",imgs:[o]},{padding:"10px",background:"#e9e8fe"}],prizes:[{x:0,y:0,imgs:[n],fonts:[{text:"1",top:"35%",fontWeight:"600"}]},{x:1,y:0,imgs:[n],fonts:[{text:"2",top:"35%",fontWeight:"600"}]},{x:2,y:0,imgs:[n],fonts:[{text:"3",top:"35%",fontWeight:"600"}]},{x:3,y:0,imgs:[n],fonts:[{text:"4",top:"35%",fontWeight:"600"}]},{x:4,y:0,imgs:[n],fonts:[{text:"5",top:"35%",fontWeight:"600"}]},{x:5,y:0,imgs:[n],fonts:[{text:"6",top:"35%",fontWeight:"600"}]},{x:0,y:1,imgs:[n],fonts:[{text:"7",top:"35%",fontWeight:"600"}]},{x:1,y:1,imgs:[n],fonts:[{text:"8",top:"35%",fontWeight:"600"}]},{x:2,y:1,imgs:[n],fonts:[{text:"9",top:"35%",fontWeight:"600"}]},{x:3,y:1,imgs:[n],fonts:[{text:"10",top:"35%",fontWeight:"600"}]},{x:4,y:1,imgs:[n],fonts:[{text:"11",top:"35%",fontWeight:"600"}]},{x:5,y:1,imgs:[n],fonts:[{text:"12",top:"35%",fontWeight:"600"}]},{x:0,y:2,imgs:[n],fonts:[{text:"13",top:"35%",fontWeight:"600"}]},{x:1,y:2,imgs:[n],fonts:[{text:"14",top:"35%",fontWeight:"600"}]},{x:2,y:2,imgs:[n],fonts:[{text:"15",top:"35%",fontWeight:"600"}]},{x:3,y:2,imgs:[n],fonts:[{text:"16",top:"35%",fontWeight:"600"}]},{x:4,y:2,imgs:[n],fonts:[{text:"17",top:"35%",fontWeight:"600"}]},{x:5,y:2,imgs:[n],fonts:[{text:"18",top:"35%",fontWeight:"600"}]},{x:1,y:3,imgs:[n],fonts:[{text:"19",top:"35%",fontWeight:"600"}]},{x:2,y:3,imgs:[n],fonts:[{text:"20",top:"35%",fontWeight:"600"}]},{x:3,y:3,imgs:[n],fonts:[{text:"21",top:"35%",fontWeight:"600"}]},{x:4,y:3,imgs:[n],fonts:[{text:"22",top:"35%",fontWeight:"600"}]}],defaultConfig:{speed:30,accelerationTime:500,decelerationTime:1e3},activeStyle:{fontColor:"#e9e8fe",fontSize:"26px"},userNumbers:[],btnClickNum:0,confirmRes:!1,adminNumbers:[],specialNumber:0,grade:0,userInput:"",isShowInput:!1}},watch:{userNumbers:function(t){t.length>=5?(this.userNumbers.forEach((function(t,s,i){i[s]++})),setTimeout((function(){$(".userNum").animate({opacity:"1"})}),1500)):setTimeout((function(){$(".userNum").animate({opacity:"0"})}),1500)},adminNumbers:function(t){setTimeout((function(){$(".admin .numbers").animate({opacity:"1"})}),500)}},methods:{startCallback:function(){var t=this;this.$refs.myLucky.play(),setTimeout((function(){for(var s;;)if(s=Math.floor(21*Math.random()+1),!1===t.checkHaveSame(t.userNumbers,s)){t.userNumbers.push(s);break}t.$refs.myLucky.stop(s)}),1e3)},endCallback:function(t){this.msg="你抽到了数字："+t.fonts[0].text,this.showMsg()},singleClick:function(){var t=this;this.btnClickNum++,1===this.btnClickNum&&(this.userNumbers.length>=5?(this.confirmRes=confirm("你已经抽到了5个数，确定重开吗"),this.confirmRes&&(this.userNumbers=[],this.startCallback(),this.confirmRes=!1)):this.userNumbers.length>=0&&this.startCallback(),setTimeout((function(){t.btnClickNum=0}),2e3))},seriesDraw:function(){var t=this;if(this.btnClickNum++,1===this.btnClickNum)if(setTimeout((function(){t.btnClickNum=0}),2e3),this.userNumbers.length>=5){if(this.confirmRes=confirm("你已经抽到了5个数，确定重开吗"),this.confirmRes){this.userNumbers=[],$(".userNum").animate({opacity:"0"});for(var s=0;s<=4;s++)setTimeout((function(){t.startCallback()}),3e3*s);this.confirmRes=!1}}else if(this.userNumbers.length>=1)this.msg="你已经单抽了，不能五连抽",this.showMsg();else if(this.userNumbers.length>=0)for(var i=0;i<=4;i++)setTimeout((function(){t.startCallback()}),3e3*i)},getAdminNumbers:function(){var t=this;if(this.btnClickNum++,1===this.btnClickNum)if(setTimeout((function(){t.btnClickNum=0}),2e3),this.adminNumbers.length>=5){if(this.confirmRes=confirm("你已开奖，确定重新开奖？"),this.confirmRes){this.confirmRes=!1;var s=Math.floor(21*Math.random()+1);for(this.adminNumbers=[],this.adminNumbers.push(s);this.adminNumbers.length<5;){var i=Math.floor(21*Math.random()+1);!1===this.checkHaveSame(this.adminNumbers,i)&&this.adminNumbers.push(i)}this.specialNumber=Math.floor(21*Math.random()+1)}}else if(0===this.adminNumbers.length){var e=Math.floor(21*Math.random()+1);for(this.adminNumbers=[],this.adminNumbers.push(e);this.adminNumbers.length<5;){var n=Math.floor(21*Math.random()+1);!1===this.checkHaveSame(this.adminNumbers,n)&&this.adminNumbers.push(n)}this.specialNumber=Math.floor(21*Math.random()+1)}},getMyPrize:function(){if(this.userNumbers.length>=5&&this.adminNumbers.length>=5){var t=this.compareArray(this.userNumbers,this.adminNumbers),s=!1;for(var i in this.userNumbers)if(this.userNumbers[i]===this.specialNumber){s=!0;break}t<2?this.grade=0:2===t?this.grade=1:3===t?this.grade=2:4===t?this.grade=s?4:3:5===t&&(this.grade=s?6:5),alert("获奖等级："+this.switchGradeToStr(this.grade))}},compareArray:function(t,s){var i=0;for(var e in t)for(var n in s)t[e].toString()===s[n].toString()&&i++;return i},checkHaveSame:function(t,s){for(var i in t)if(t[i]===s)return!0;return!1},switchGradeToStr:function(t){var s;switch(t){case 0:s="没有获奖";break;case 1:s="五等奖";break;case 2:s="四等奖";break;case 3:s="三等奖";break;case 4:s="二等奖";break;case 5:s="一等奖";break;case 6:s="特等奖";break;default:s="出了什么错误？"}return s},showMsg:function(){$(".msg").animate({opacity:"1"}),this.isShowMsg=!0,setTimeout((function(){$(".msg").animate({opacity:"0"})}),1500)},showInput:function(){this.isShowInput?($(".input-box").animate({opacity:"0",zIndex:"-1"}),this.isShowInput=!1):($(".input-box").animate({opacity:"1",zIndex:"1"}),this.isShowInput=!0)},cheat:function(){this.userNumbers=[],this.userNumbers=this.userInput.split("-"),this.userNumbers.forEach((function(t,s,i){i[s]=parseInt(t)-1}))}}},r=(i(651),i(3)),u=Object(r.a)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bx"},[i("div",{staticClass:"admin"},[i("button",{staticClass:"lottery",on:{click:t.getAdminNumbers}},[i("i",{staticClass:"iconfont reco-suggestion"}),t._v("开奖")]),t._v(" "),i("div",{staticClass:"numbers"},[t._v("\n      开奖号码是："),i("span",{staticStyle:{"font-weight":"600","font-size":"20px"}},[t._v(t._s(t.adminNumbers.join("-")))]),t._v(" "),i("br"),t._v("\n      以及特殊号码："),i("span",{staticStyle:{"font-weight":"600","font-size":"20px"}},[t._v(t._s(t.specialNumber))])])]),t._v(" "),i("div",{staticClass:"msg"},[i("i",{staticClass:"iconfont reco-tongzhi"}),t._v(t._s(t.msg))]),t._v(" "),i("div",{staticClass:"cheatBx"},[i("button",{staticClass:"cheatBtn",on:{click:t.showInput}},[i("i",{staticClass:"iconfont reco-other",staticStyle:{color:"white"}}),t._v("不响丸辣，我要作弊！")]),t._v(" "),i("div",{staticClass:"input-box"},[i("i",{staticClass:"iconfont reco-douyin"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入你想抽到的数字,以“-”分隔"},domProps:{value:t.userInput},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.cheat.apply(null,arguments)},input:function(s){s.target.composing||(t.userInput=s.target.value)}}}),t._v(" "),i("div",{on:{click:t.cheat}},[t._v("确定")])])]),t._v(" "),i("div",{staticClass:"userNum"},[i("i",{staticClass:"iconfont reco-suggestion"}),t._v("现在你拥有的数字是：\n    "+t._s(t.userNumbers.join("-")))]),t._v(" "),i("div",{staticStyle:{"padding-top":"180px"}},[i("LuckyGrid",{ref:"myLucky",attrs:{rows:"5",cols:"6",width:t.prizeWidth,height:t.prizeHeight,prizes:t.prizes,blocks:t.blocks,"default-config":t.defaultConfig,"active-style":t.activeStyle},on:{start:t.startCallback,end:t.endCallback}})],1),t._v(" "),i("div",{staticClass:"btn-box"},[i("button",{staticClass:"btn",on:{click:t.singleClick}},[i("i",{staticClass:"iconfont reco-three"}),t._v("\n      单抽\n    ")]),t._v(" "),i("button",{staticClass:"btn",on:{click:t.seriesDraw}},[i("i",{staticClass:"iconfont reco-up"}),t._v("\n      五连抽\n    ")]),t._v(" "),i("button",{staticClass:"btn",on:{click:t.getMyPrize}},[i("i",{staticClass:"iconfont reco-search"}),t._v("\n      兑奖\n    ")])])])}),[],!1,null,"f153294e",null);s.default=u.exports}}]);