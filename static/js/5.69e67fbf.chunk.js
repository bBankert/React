(this["webpackJsonpsandbox-app"]=this["webpackJsonpsandbox-app"]||[]).push([[5],{100:function(e,n,t){},103:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t(5),i=t(6),o=t(7),c=t(0),s=t.n(c),p=(t(100),function(e){var n=[];for(var t in e.ingredients)n.push({name:t,amount:e.ingredients[t]});var r=n.map((function(e){return s.a.createElement("span",{style:{testTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name,"  (",e.amount,")")}));return s.a.createElement("div",{className:"Order"},s.a.createElement("p",null,"Ingredients: ",r),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"USD ",e.price.toFixed(2))))}),u=t(17),l=t(13),d=t(35),m=t(14),f=t(34),b=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token)}},{key:"render",value:function(){var e=s.a.createElement(f.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return s.a.createElement(p,{key:e.id,ingredients:e.ingredients,price:e.price})}))),s.a.createElement("div",null,e)}}]),t}(c.Component);n.default=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token}}),(function(e){return{onFetchOrders:function(n){return e(m.d(n))}}}))(Object(d.a)(b,u.a))}}]);
//# sourceMappingURL=5.69e67fbf.chunk.js.map