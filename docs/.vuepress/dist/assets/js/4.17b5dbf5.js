(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{649:function(e,s,a){},765:function(e,s,a){"use strict";a(649)},785:function(e,s,a){"use strict";a.r(s);var r=a(125),t=(a(185),a(65),a(53),a(55),a(6),a(56),a(301),a(22),a(12),a(302),a(599)),i=a.n(t),c={name:"Chess",props:{displayChess:{type:Array,default:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},playerSide:{type:Boolean,default:!1},isSelectMachine:{type:Boolean,default:!1}},data:function(){return{visible:!1,test:[],IN_BOARD_:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],IN_FORT_:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],displayChessTemp:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],FEN:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR",FENArray:[],userInputFEN:"",userInput:"",sqSelected:0,currentChess:"",displayChess_Old:[],isHaveK_w:!1,isHaveK_b:!1}},computed:{imgDomArr:function(){return document.querySelectorAll("div.imgBox img")}},watch:{displayChess:{handler:function(e,s){void 0!==e&&(this.displayChess_Old=s.map((function(e){return e})),this.displayChessTemp=e.map((function(e){return e})),this.drawWithSq())}},playerSide:function(e,s){var a=this;return Object(r.a)(regeneratorRuntime.mark((function s(){var r,t,i,c;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(e||!a.isSelectMachine){s.next=5;break}return s.next=3,a.machine_passiveSkills();case 3:1===(r=s.sent)?a.$message.warning("触发被动技能：兵线刷新"):2===r?a.$message.warning("触发被动技能：替父从军"):3===r?a.$message.warning("触发被动技能：草木皆兵"):0===r&&(t=a.machine_getPcToBeMoved().map((function(e){return e})),i=t[0],c=t[1],a.$message.success("电脑移动了"+a.ImgNameToChessName(i.attr("src").slice(11,12))),a.machineMove(i,c));case 5:case"end":return s.stop()}}),s)})))()}},mounted:function(){var e=this;this.initBoard(),document.querySelectorAll("div.imgBox img").forEach((function(s,a){s.addEventListener("mousedown",(function(s,a){var r=s.target.src.slice(32,33),t=(e.ImgNameToChessName(r),parseInt(s.target.id.slice(3))+1),i={displayChess:e.displayChessTemp,fileName:r,imgIndex:t,sqSelected:e.imgIndexToSq(t)};e.chess1Click(i)}))}))},methods:{machineMove:function(e,s){var a=this,r=e.attr("src").slice(11,12),t=parseInt(e.attr("id").slice(3))+1,i={displayChess:this.displayChessTemp,fileName:r,imgIndex:t,sqSelected:this.imgIndexToSq(t)};this.chess1Click(i),setTimeout((function(){var e=s.attr("src").slice(11,12),r=parseInt(s.attr("id").slice(3))+1,t={displayChess:a.displayChessTemp,fileName:e,imgIndex:r,sqSelected:a.imgIndexToSq(r)};a.chess1Click(t)}),500)},machine_getSteps:function(e,s){if(void 0!==s){var a=[],r=e.attr("src").slice(11,12),t=this.imgIndexToSq(parseInt(e.attr("id").slice(3))+1);switch(r){case"k":var c=[-16,-1,1,16];for(var n in c){var h=t+c[n];if(this.IN_BOARD(h)&&(s[h]<16&&this.IN_FORT(h))){var o=h-7*this.RANK_Y(h)-29-1,u=i()("#pos"+o);a.push(u)}}break;case"a":var l=[-15,-17,17,15];for(var p in l){var m=t+l[p];if(this.IN_BOARD(m)&&(s[m]<16&&this.IN_FORT(m))){var d=m-7*this.RANK_Y(m)-29-1,v=i()("#pos"+d);a.push(v)}}break;case"b":var _=[-34,-30,30,34];for(var f in _){var k=t+_[f];if(this.IN_BOARD(k)&&this.SAME_HALF(t,k)&&!(s[(t+k)/2]>1)&&s[k]<16){var N=k-7*this.RANK_Y(k)-29-1,b=i()("#pos"+N);a.push(b)}}break;case"n":var T=[-16,-1,1,16],R=[[-33,-31],[-18,14],[-14,18],[31,33]];for(var C in R){var A=t+T[C];if(!(s[A]>1))for(var y=0;y<2;y++)if(A=t+R[C][y],this.IN_BOARD(A)&&s[A]<16){var g=A-7*this.RANK_Y(A)-29-1,B=i()("#pos"+g);a.push(B)}}break;case"r":for(var I=[-16,-1,1,16],O=0;O<4;O++)for(var S=I[O],D=t+S;this.IN_BOARD(D)&&s[D]<16;){var q=D-7*this.RANK_Y(D)-29-1,E=i()("#pos"+q);if(a.push(E),s[D]>=8)break;D+=S}break;case"c":for(var F=[-16,-1,1,16],w=0;w<4;w++){for(var K=F[w],x=t+K;this.IN_BOARD(x)&&1===s[x];){var Y=x-7*this.RANK_Y(x)-29-1,M=i()("#pos"+Y);a.push(M),x+=K}for(x+=K;this.IN_BOARD(x);){if(s[x]>=8&&s[x]<16){var P=x-7*this.RANK_Y(x)-29-1,$=i()("#pos"+P);a.push($);break}x+=K}}break;case"p":var X=[16,1,-1],L=t+X[0];if(s[L]<16){var W=L-7*this.RANK_Y(L)-29-1,U=i()("#pos"+W);a.push(U)}if(t>=this.domToSq(i()("#pos45")))for(var H=0;H<2&&(L=t+X[H+1],this.IN_BOARD(L));H++)if(s[L]<16){var V=L-7*this.RANK_Y(L)-29-1,j=i()("#pos"+V);a.push(j)}break;case"K":var J=[-16,-1,1,16];for(var z in J){var Z=t+J[z];if(this.IN_BOARD(Z)&&(!(8&s[Z])&&this.IN_FORT(Z))){var G=Z-7*this.RANK_Y(Z)-29-1,Q=i()("#pos"+G);a.push(Q)}}break;case"A":var ee=[-15,-17,17,15];for(var se in ee){var ae=t+ee[se];if(this.IN_BOARD(ae)&&(!(8&s[ae])&&this.IN_FORT(ae))){var re=ae-7*this.RANK_Y(ae)-29-1,te=i()("#pos"+re);a.push(te)}}break;case"B":var ie=[-34,-30,30,34];for(var ce in ie){var ne=t+ie[ce];if(this.IN_BOARD(ne)&&this.SAME_HALF(t,ne)&&!(s[(t+ne)/2]>1)&&!(8&s[ne])){var he=ne-7*this.RANK_Y(ne)-29-1,oe=i()("#pos"+he);a.push(oe)}}break;case"N":var ue=[-16,-1,1,16],le=[[-33,-31],[-18,14],[-14,18],[31,33]];for(var pe in le){var me=t+ue[pe];if(!(s[me]>1))for(var de=0;de<2;de++)if(me=t+le[pe][de],this.IN_BOARD(me)&&!(8&s[me])){var ve=me-7*this.RANK_Y(me)-29-1,_e=i()("#pos"+ve);a.push(_e)}}break;case"R":for(var fe=[-16,-1,1,16],ke=0;ke<4;ke++)for(var Ne=fe[ke],be=t+Ne;this.IN_BOARD(be)&&!(8&s[be]);){var Te=be-7*this.RANK_Y(be)-29-1,Re=i()("#pos"+Te);if(a.push(Re),16&s[be])break;be+=Ne}break;case"C":for(var Ce=[-16,-1,1,16],Ae=0;Ae<4;Ae++){for(var ye=Ce[Ae],ge=t+ye;this.IN_BOARD(ge)&&1===s[ge];){var Be=ge-7*this.RANK_Y(ge)-29-1,Ie=i()("#pos"+Be);a.push(Ie),ge+=ye}for(ge+=ye;this.IN_BOARD(ge);){if(16&s[ge]){var Oe=ge-7*this.RANK_Y(ge)-29-1,Se=i()("#pos"+Oe);a.push(Se);break}ge+=ye}}break;case"P":var De=[-16,1,-1],qe=t+De[0];if(!(8&s[qe])){var Ee=qe-7*this.RANK_Y(qe)-29-1,Fe=i()("#pos"+Ee);a.push(Fe)}if(t<131&&this.IN_BOARD(qe))for(var we=0;we<2&&(qe=t+De[we+1],this.IN_BOARD(qe));we++)if(!(8&s[qe])){var Ke=qe-7*this.RANK_Y(qe)-29-1,xe=i()("#pos"+Ke);a.push(xe)}break;default:a.push(null)}return a}return"ERROR"},machine_getPcToBeMoved:function(){var e=[],s=[],a=this.displayChessTemp.map((function(e){return e}));for(var r in this.displayChessTemp)16&this.displayChessTemp[r]?e.push(r):8&this.displayChessTemp[r]&&s.push(r);var t,i=Math.floor(Math.random()*e.length),c=0,n=0,h=e[i];for(var o in s){var u=s[o];if(void 0!==(t=this.machine_getExactStep(this.sqToDom(u),this.displayChessTemp))){var l=this.domToSq(t),p=this.machine_supposeToMove(a,u,l);c=this.machine_evaluate(a),this.machine_recoverFicBoard(a,u,l,p),c>=n&&(n=c,h=u)}}var m,d,v=this.machine_getExactStep(this.sqToDom(h),this.displayChessTemp);if(void 0===v.attr("id")){var _=this.machine_getSteps(this.sqToDom(h),this.displayChessTemp);v=_[Math.floor(Math.random()*_.length)]}void 0===this.sqToDom(h).attr("id")&&(h=s[i]);var f=0,k=n;for(var N in e){var b=e[N],T=this.machine_getSteps(this.sqToDom(b),this.displayChessTemp).map((function(e){return e}));for(var R in T){var C=this.domToSq(T[R]),A=this.machine_supposeToMove(a,b,C),y=this.machine_getExactStep(this.sqToDom(h),a);if(void 0!==y){var g=this.domToSq(y),B=this.machine_supposeToMove(a,h,g);f=this.machine_evaluate(a),this.machine_recoverFicBoard(a,h,g,B),this.machine_recoverFicBoard(a,b,C,A),f<=k&&(k=f,m=C,d=b,console.log("最小评估值"+k)),this.sqToDom(b).attr("id")}}}return[this.sqToDom(d),this.sqToDom(m)]},machine_getExactStep:function(e,s){var a,r;if(void 0!==s&&(a=this.machine_getSteps(e,s),r=s.map((function(e){return e}))),this.playerSide){var t=this.machine_evaluate(s),i=a[Math.floor(Math.random()*a.length)];for(var c in a){var n=r[this.domToSq(e)],h=this.domToSq(a[c]),o=r[h];r[h]=n;this.machine_evaluate(r);this.machine_evaluate(r)<t&&(t=this.machine_evaluate(r),i=this.sqToDom(h)),r[this.domToSq(e)]=n,r[h]=o}return i}var u=this.machine_evaluate(s),l=a[Math.floor(Math.random()*a.length)];for(var p in a){var m=r[this.domToSq(e)],d=this.domToSq(a[p]),v=r[d];r[d]=m;this.machine_evaluate(r);this.machine_evaluate(r)>u&&(u=this.machine_evaluate(r),l=this.sqToDom(d)),r[this.domToSq(e)]=m,r[d]=v}return l},machine_evaluate:function(e){return this.machine_getVal(e,!0)-this.machine_getVal(e,!1)},machine_getVal:function(e,s){var a=0;for(var r in e)if(s)switch(e[r]){case 8:a+=1e3;break;case 9:case 10:a+=20;break;case 11:a+=45;break;case 12:a+=90;break;case 13:a+=40;break;case 14:a+=10;break;default:a+=0}else switch(e[r]){case 16:a+=1e3;break;case 17:case 18:a+=20;break;case 19:a+=45;break;case 20:a+=90;break;case 21:a+=40;break;case 22:a+=10;break;default:a+=0}return a},machine_supposeToMove:function(e,s,a){if(void 0===e||void 0===s||void 0===a)return"ERROR";var r=e[a];return e[a]=e[s],e[s]=1,r},machine_recoverFicBoard:function(e,s,a,r){if(void 0===e||void 0===s||void 0===a||void 0===r)return"ERROR";e[s]=e[a],e[a]=r},machine_passiveSkills:function(){var e=this;return new Promise((function(s,a){var r=0,t=!1,c=e.machine_evaluate(e.displayChessTemp),n=!1;for(var h in e.displayChessTemp)22===e.displayChessTemp[h]&&r++,8&e.displayChessTemp[h]&&16&e.displayChess_Old[h]&&Math.floor(Math.random()+.3)&&(t=!0,e.displayChessTemp[h]=e.displayChess_Old[h]),(c>180||e.machine_getVal(e.displayChessTemp,!1)<1220)&&(n=!0,1===e.displayChessTemp[h]&&(e.displayChessTemp[h]=22));if(r<3){for(var o=0,u=0;o<5;o++,u+=2){var l=e.domToSq(i()("#pos".concat(27+u)));e.displayChessTemp[l]=22}document.querySelector("#skill1").play(),setTimeout((function(){e.drawWithSq(),e.chess1Click(null),s(1)}),3e3)}else t?(document.querySelector("#skill2").play(),setTimeout((function(){e.drawWithSq(),e.chess1Click(null),s(2)}),3e3)):n?(document.querySelector("#skill3").play(),setTimeout((function(){e.drawWithSq(),e.chess1Click(null),s(3)}),3e3)):s(0)}))},sqToDom:function(e){var s=e-7*this.RANK_Y(e)-29-1;return i()("#pos"+s)},domToSq:function(e){var s=parseInt(e.attr("id").slice(3))+1;return this.imgIndexToSq(s)},IN_BOARD:function(e){return 0!==this.IN_BOARD_[e]},IN_FORT:function(e){return 0!==this.IN_FORT_[e]},COORD_XY:function(e,s){return e+(s<<4)},RANK_Y:function(e){return e>>4},FILE_X:function(e){return 15&e},initBoard:function(){this.displayChessTemp=[],this.FENArray=this.FEN.split(""),this.FENtoBoard(this.FENArray);for(var e=0;e<256;e++)this.IN_BOARD(e)||(this.displayChessTemp[e]=null);for(var s=this.COORD_XY(3,3),a=this.COORD_XY(11,12),r="",t=0,i=0,c=s;c<=a;c++)if(this.IN_BOARD(c)){switch(this.displayChessTemp[c]){case 8:r="K";break;case 9:r="A";break;case 10:r="B";break;case 11:r="N";break;case 12:r="R";break;case 13:r="C";break;case 14:r="P";break;case 16:r="k_";break;case 17:r="a_";break;case 18:r="b_";break;case 19:r="n_";break;case 20:r="r_";break;case 21:r="c_";break;case 22:r="p_";break;case 1:case 0:r="UNexist";break;default:r="UNexist"}t=this.RANK_Y(c),this.FILE_X(c),i=c-7*t-30;var n="/img/chess/".concat(r,".png");this.imgDomArr[i].src=n,r="",t=0,i=0}},FENtoBoard:function(e){var s=3,a=3;for(var r in e){var t=e[r];if("/"===t&&a++,a>12)break;if(s>11)s=3;else if(t>="1"&&t<="9")s+=parseInt(t);else if(t>="a"&&t<="z"){var i=s+(a<<4);this.displayChessTemp[i]=this.FENCharToNum(t),s++}else if(t>="A"&&t<="Z"){var c=s+(a<<4);this.displayChessTemp[c]=this.FENCharToNum(t),s++}else console.log("err")}},FENCharToNum:function(e){switch(e){case"K":return 8;case"A":return 9;case"B":return 10;case"N":return 11;case"R":return 12;case"C":return 13;case"P":return 14;case"k":return 16;case"a":return 17;case"b":return 18;case"n":return 19;case"r":return 20;case"c":return 21;case"p":return 22;default:return"err"}},FENCharToImg:function(e){switch(e){case"K":return"K";case"A":return"A";case"B":return"B";case"N":return"N";case"R":return"R";case"C":return"C";case"P":return"P";case"k":return"k_";case"a":return"a_";case"b":return"b_";case"n":return"n_";case"r":return"r_";case"c":return"c_";case"p":return"p_";default:return"err"}},ImgNameToChessName:function(e){switch(e){case"K":return"红方_帅";case"A":return"红方_士";case"B":return"红方_相";case"N":return"红方_马";case"R":return"红方_车";case"C":return"红方_炮";case"P":return"红方_兵";case"k":return"黑方_将";case"a":return"黑方_仕";case"b":return"黑方_象";case"n":return"黑方_马";case"r":return"黑方_车";case"c":return"黑方_炮";case"p":return"黑方_卒";default:return"空"}},drawWithFEN:function(e){this.FENArray=[],this.FENArray=e.split(""),this.displayChessTemp=[],this.FENtoBoard(this.FENArray);for(var s=0;s<256;s++)this.IN_BOARD(s)||(this.displayChessTemp[s]=null);for(var a=this.COORD_XY(3,3),r=this.COORD_XY(11,12),t="",i=0,c=0,n=a;n<=r;n++)if(this.IN_BOARD(n)){switch(this.displayChessTemp[n]){case 8:t="K";break;case 9:t="A";break;case 10:t="B";break;case 11:t="N";break;case 12:t="R";break;case 13:t="C";break;case 14:t="P";break;case 16:t="k_";break;case 17:t="a_";break;case 18:t="b_";break;case 19:t="n_";break;case 20:t="r_";break;case 21:t="c_";break;case 22:t="p_";break;case 1:case 0:t="UNexist";break;default:t="UNexist"}i=this.RANK_Y(n),this.FILE_X(n),c=n-7*i-30;var h="/img/chess/".concat(t,".png");this.imgDomArr[c].src=h,t="",i=0,c=0}},drawWithSq:function(){this.$emit("board-update",this.displayChessTemp);for(var e=this.COORD_XY(3,3),s=this.COORD_XY(11,12),a="",r=0,t=0,i=e;i<=s;i++)if(this.IN_BOARD(i)){switch(this.displayChessTemp[i]){case 8:a="K";break;case 9:a="A";break;case 10:a="B";break;case 11:a="N";break;case 12:a="R";break;case 13:a="C";break;case 14:a="P";break;case 16:a="k_";break;case 17:a="a_";break;case 18:a="b_";break;case 19:a="n_";break;case 20:a="r_";break;case 21:a="c_";break;case 22:a="p_";break;case 1:case 0:a="UNexist";break;default:a="UNexist"}r=this.RANK_Y(i),this.FILE_X(i),t=i-7*r-30;var c="/img/chess/".concat(a,".png");this.imgDomArr[t].src=c,a="",r=0,t=0}},imgIndexToSq:function(e){return e+30+7*(Math.floor((e-1)/9)+3)-1},SAME_HALF:function(e,s){return 0==(128&(e^s))},sureInput:function(){var e=this.userInput;this.drawWithFEN(e)},test2:function(){this.drawWithFEN("1n1akabnr/r8/9/9/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR")},btnClick2:function(){document.querySelectorAll(".audioBx li > audio").forEach((function(e){e.play()}))},chess1Click:function(e){this.$emit("show",e)}}},n=(a(765),a(4)),h=Object(n.a)(c,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("div",{staticClass:"chessBoard"},[e._l(90,(function(s,r){return a("div",{staticClass:"imgBox myImgBox"},[a("img",{key:r,attrs:{src:e.$withBase("/img/chess/K_.png"),id:"pos"+r,alt:"一个棋子"}})])})),e._v(" "),e._m(0)],2),e._v(" "),a("ul",{staticClass:"audioBx",staticStyle:{display:"none"}},[a("li",[a("audio",{attrs:{id:"skill1",src:e.$withBase("/music/兵线刷新.mp3")}})]),e._v(" "),a("li",[a("audio",{attrs:{id:"skill2",src:e.$withBase("/music/替父从军.mp3")}})]),e._v(" "),a("li",[a("audio",{attrs:{id:"skill3",src:e.$withBase("/music/草木皆兵.mp3")}})])])])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"myFontBox"},[s("div",{staticClass:"css2ebd673af7243b7"},[this._v("楚河")]),this._v(" "),s("div",{staticClass:"css2ebd673af7243b7"},[this._v("汉界")])])}],!1,null,"00b4c20d",null);s.default=h.exports}}]);