(function(e){function n(n){for(var r,c,a=n[0],s=n[1],o=n[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&p.push(l[c][0]),l[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(n);while(p.length)p.shift()();return i.push.apply(i,o||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var s=t[a];0!==l[s]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},l={app:0},i=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/tic-tac-toe/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var o=0;o<a.length;o++)n(a[o]);var u=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2c32":function(e,n,t){"use strict";var r=t("ba63"),l=t.n(r);l.a},"4e2d":function(e,n,t){},5146:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("game")],1)},i=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"game"},[t("div",{staticClass:"game-area"},[t("Board",{attrs:{cells:e.cells,winner:e.winner},on:{click:e.click}}),t("div",{staticClass:"game-info"},[0===e.stepNumber?t("p",[e._v(" スタート！"),t("b",{class:e.currentPlayer},[e._v(e._s(e.currentPlayer))])]):e.winner?t("p",[e._v(" 勝者は "),t("b",{class:e.currentPlayer},[e._v(e._s(e.currentPlayer))]),t("button",{on:{click:e.restart}},[e._v("もう一回！")])]):e.stepNumber>8?t("p",[e._v(" 引き分け！ "),t("button",{on:{click:e.restart}},[e._v("もう一回！")])]):t("p",[e._v(" 升目を選んでね "),t("b",{class:e.currentPlayer},[e._v(e._s(e.currentPlayer))])])])],1)])},a=[],s=(t("cb29"),t("3835")),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.cells?t("div",{staticClass:"board"},e._l(3,(function(n){return t("div",{key:n,staticClass:"board-row"},e._l(3,(function(r){return t("cell",{key:e.indexByRow(r,n),attrs:{value:e.cells[e.indexByRow(r,n)],disabled:!!e.winner,winner:!!e.winner&&e.winner.includes(e.indexByRow(r,n))},on:{click:function(t){return e.click(r,n)}}})})),1)})),0):e._e()},u=[],f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"cell",class:[e.value,{winner:e.winner}],attrs:{disabled:e.disabled},on:{click:e.click}},[e._v(" "+e._s(e.value)+" ")])},p=[],d={name:"Cell",props:{value:String,winner:Boolean,disabled:Boolean},methods:{click:function(){this.$emit("click")}}},v=d,h=(t("2c32"),t("2877")),b=Object(h["a"])(v,f,p,!1,null,"4326ab33",null),y=b.exports,m={name:"Board",props:{cells:Array,winner:Array},components:{Cell:y},methods:{indexByRow:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return n*t+e-(t+1)},click:function(e,n){this.$emit("click",this.indexByRow(e,n))}}},w=m,_=(t("60e9"),Object(h["a"])(w,o,u,!1,null,"1ff4fcce",null)),g=_.exports,P={name:"Game",components:{Board:g},data:function(){return{cells:Array(9).fill(null),stepNumber:0,currentPlayer:"X",winner:null}},methods:{hasWinner:function(){if(this.winner)return!0;for(var e=this.cells,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var r=Object(s["a"])(n[t],3),l=r[0],i=r[1],c=r[2];if(e[l]&&e[l]===e[i]&&e[l]===e[c])return this.winner=[l,i,c],!0}return!1},restart:function(){this.cells=Array(9).fill(null),this.stepNumber=0,this.currentPlayer=self.currentPlayer,this.winner=null},click:function(e){this.cells[e]||this.winner||(this.$set(this.cells,e,this.currentPlayer),this.hasWinner()||(this.stepNumber++,this.currentPlayer="X"===this.currentPlayer?"O":"X"))}}},k=P,O=(t("68e4"),Object(h["a"])(k,c,a,!1,null,null,null)),x=O.exports,j={name:"App",components:{Game:x}},B=j,C=Object(h["a"])(B,l,i,!1,null,null,null),$=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e($)}}).$mount("#app")},"60e9":function(e,n,t){"use strict";var r=t("5146"),l=t.n(r);l.a},"68e4":function(e,n,t){"use strict";var r=t("4e2d"),l=t.n(r);l.a},ba63:function(e,n,t){}});
//# sourceMappingURL=app.1dcb1c26.js.map