webpackJsonp([1],{ILYg:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),i=(e("rplX"),"/wp-json/wp/v2/"),a={data:function(){return{list:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;fetch(i+"/categories/").then(function(t){return console.log(t),t.json()}).then(function(n){console.log("nav parsed json",n),t.list=n}).catch(function(t){console.log("parsing failed",t)})}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav"},t._l(t.list,function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"cates",params:{catid:n.id}}}},[t._v("\n      "+t._s(n.name)+"\n    ")])],1)}))},staticRenderFns:[]},o={name:"App",components:{Nav:e("VU/8")(a,r,!1,null,null,null).exports}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var c=e("VU/8")(o,l,!1,function(t){e("ILYg")},null,null).exports,u=e("/ocq"),d={data:function(){return{listId:"",flag:!1,list:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this,n=this.$route.params.catid;console.log(n);var e="";e=n?i+"/posts?categories="+n:i+"/posts/",fetch(e).then(function(t){return t.json()}).then(function(n){console.log("list parsed json",n),t.list=n,t.flag=!0}).catch(function(t){console.log("parsing failed",t)})},dataIsempty:function(){return!!(Array.isArray(this.list)&&this.list.length<=0)}},watch:{$route:function(t,n){this.getList()}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"news_list"},[e("ul",[t._l(t.list,function(n){return e("li",{key:n.id},[e("span",[t._v("[ "+t._s(n.date.split("T")[0])+" ]")]),t._v(" "),e("router-link",{attrs:{to:{name:"news",params:{newsid:n.id}}}},[t._v("\n        "+t._s(n.title.rendered)+"\n      ")])],1)}),t._v(" "),t.flag?t._e():e("div",[t._v("加载中...")])],2)])},staticRenderFns:[]},f=e("VU/8")(d,p,!1,null,null,null).exports,h={data:function(){return{loading:!0,detail:[]}},created:function(){var t=this,n=this.$route.params.newsid;fetch(i+"/posts/"+n).then(function(t){return t.json()}).then(function(n){console.log("detail parsed json",n),t.detail=n,t.loading=!1}).catch(function(t){console.log("parsing failed",t)})}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"detail"},[t.loading?e("div",[t._v("加载中...")]):t._e(),t._v(" "),e("h1",[t._v(t._s(t.detail.title.rendered))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.detail.content.rendered)}})])},staticRenderFns:[]},_=e("VU/8")(h,v,!1,null,null,null).exports;s.a.use(u.a);var g=new u.a({routes:[{path:"/",component:f},{path:"/cates/:catid",name:"cates",component:f},{path:"/news/:newsid",name:"news",component:_}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.a2f116db938d91c0d7c8.js.map