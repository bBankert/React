(this["webpackJsonpsandbox-app"]=this["webpackJsonpsandbox-app"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"l",(function(){return o})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return E}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",c="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAILURE",l="PURCHASE_BURGER_START",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",b="AUTH_FAIL",g="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(21),a=function(e,t){return Object(r.a)({},e,{},t)},c=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)}},,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return E})),n.d(t,"c",(function(){return v}));var r=n(1),a=n(17),c=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){a.a.get("https://first-react-project-88d5a.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(21),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){var a,c;n((a=t.data,c=e,{type:r.l,orderId:a,orderData:c}))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},s=function(){return{type:r.m}},d=function(e){return function(t){a.a.get("/orders.json?auth="+e).then((function(e){var n,a=[];for(var c in e.data)a.push(Object(u.a)({},e.data[c],{id:c}));t((n=a,{type:r.i,orders:n}))})).catch((function(e){t(function(e){return{type:r.g,error:e}}(e))}))}},p=n(27),m=n.n(p),h=function(e,t){return{type:r.e,token:e,UID:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("UID"),{type:r.c}},b=function(e){return function(t){setTimeout((function(){t(f())}),1e3*e)}},g=function(e,t,n){return function(a){a({type:r.d});var c={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="),m.a.post(i.concat("AIzaSyA4mqhAKCT_d245M2C3xgPIgXo96v0hzxI"),c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("UID",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(b(e.data.expiresIn))})).catch((function(e){a((e.response.data.error,{type:r.b}))}))}},E=function(e){return{type:r.o,path:e}},v=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("UID");e(h(t,r)),e(b((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}}},,,function(e,t,n){"use strict";var r=n(27),a=n.n(r).a.create({baseURL:"https://first-react-project-88d5a.firebaseio.com/"});t.a=a},,,,,,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(67);t.a=function(e){return e.show?a.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=(n(92),n(10)),i=n(26);t.a=function(e){return a.a.createElement(c.a,null,a.a.createElement(i.a,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(93);t.a=function(e){var t="Button "+e.btnType;return a.a.createElement("button",{className:t,onClick:e.clicked,disabled:e.disabled},e.children)}},,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(94);t.a=function(){return a.a.createElement("div",{className:"Loader"},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),c=n(6),i=n(7),o=n(0),u=n.n(o),l=n(28),s=n(10);t.a=function(e,t){return function(n){Object(i.a)(d,n);var o=Object(c.a)(d);function d(){var e;Object(r.a)(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=o.call.apply(o,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(a.a)(d,[{key:"componentDidMount",value:function(){var e=this;this.requestInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.responseInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.requestInterceptor),t.interceptors.response.eject(this.responseInterceptor)}},{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(l.a,{show:this.state.error,clicked:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),d}(o.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(51),a=n(0),c=n.n(a),i=n(4),o=n(5),u=n(6),l=n(7),s=(n(88),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=c.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=c.a.createElement("div",{className:"BreadTop"},c.a.createElement("div",{className:"Seeds1"}),c.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=c.a.createElement("div",{className:"Meat"});break;case"cheese":e=c.a.createElement("div",{className:"Cheese"});break;case"bacon":e=c.a.createElement("div",{className:"Bacon"});break;case"salad":e=c.a.createElement("div",{className:"Salad"});break;default:e=null}return e}}]),n}(a.Component));n(89),t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return c.a.createElement(s,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=c.a.createElement("p",null,"MMM.... Bread sandwich....")),c.a.createElement("div",{className:"Burger"},c.a.createElement(s,{type:"bread-top"}),t,c.a.createElement(s,{type:"bread-bottom"}))}},function(e,t,n){e.exports=n.p+"static/media/burger.2a7f4eda.png"},,,,,function(e,t,n){e.exports=n(95)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),i=n.n(c),o=(n(57),n(4)),u=n(5),l=n(6),s=n(7),d=n(10),p=(n(58),n(47)),m=n.n(p),h=(n(59),function(e){return a.a.createElement("div",{className:"Logo",style:{height:e.height}},a.a.createElement("img",{src:m.a,alt:"Broken Burger"}))}),f=(n(60),n(19)),b=(n(61),function(e){return a.a.createElement("li",{className:"NavigationItem"},a.a.createElement(f.b,{to:e.link,exact:!0,activeClassName:"active"},e.children))}),g=function(e){return a.a.createElement("ul",{className:"NavigationItems"},a.a.createElement(b,{link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(b,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(b,{link:"/logout"},"Logout"):a.a.createElement(b,{link:"/auth"},"Authenticate"))},E=(n(66),n(26)),v=function(e){var t=["SideDrawer","Closed"];return e.open&&(t=["SideDrawer","Open"]),a.a.createElement(d.a,null,a.a.createElement(E.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement(h,{height:"11%"}),a.a.createElement("nav",null,a.a.createElement(g,{isAuthenticated:e.isAuth}))))},y=(n(68),n(69),function(e){return a.a.createElement("div",{className:"DrawerToggle",onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}),O=function(e){return a.a.createElement("header",{className:"Toolbar"},a.a.createElement(y,{clicked:e.drawerToggleClicked}),a.a.createElement(h,{height:"80%"}),a.a.createElement("nav",{className:"DesktopOnly"},a.a.createElement(g,{isAuthenticated:e.isAuth})))},k=n(13),j=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHanlder=function(){e.setState((function(t){return{showSideDrawer:!e.state.showSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(O,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHanlder}),a.a.createElement(v,{closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),a.a.createElement("main",{className:"Content"},this.props.children))}}]),n}(r.Component),S=Object(k.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(j),I=n(21),C=n(17),w=n(46),A=(n(90),n(91),function(e){return a.a.createElement("div",{className:"BuildControl"},a.a.createElement("div",{className:"Label"},e.label),a.a.createElement("button",{onClick:e.removed,disabled:e.disabled,className:"Less"},"Less"),a.a.createElement("button",{onClick:e.added,className:"More"},"More"))}),D=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],T=function(e){return a.a.createElement("div",{className:"BuildControls"},a.a.createElement("p",null,"Total: ",a.a.createElement("strong",null,e.price.toFixed(2))),D.map((function(t){return a.a.createElement(A,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{disabled:!e.purchasable,className:"OrderButton",onClick:e.ordered},e.isAuth?"Order":"Login to Order"))},N=n(28),R=n(29),_=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return a.a.createElement(d.a,null,a.a.createElement("h3",null,"Order Summary"),a.a.createElement("p",null,"Burger Ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total: ",e.price.toFixed(2))),a.a.createElement("p",null,"Checkout"),a.a.createElement(R.a,{btnType:"Danger",clicked:e.purchaseCancelled},"Cancel"),a.a.createElement(R.a,{btnType:"Success",clicked:e.purchaseContinued},"Continue"))},P=n(34),U=n(35),H=n(14),B=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={currentlyPurchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({currentlyPurchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({currentlyPurchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(I.a)({},this.props.ingred);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Can't load ingredients"):a.a.createElement(P.a,null);return this.props.ingred&&(r=a.a.createElement(d.a,null,a.a.createElement(w.a,{ingredients:this.props.ingred}),a.a.createElement(T,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ingred),price:this.props.price,ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),n=a.a.createElement(_,{ingredients:this.props.ingred,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.props.price})),a.a.createElement(d.a,null,a.a.createElement(N.a,{show:this.state.currentlyPurchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),L=Object(k.b)((function(e){return{ingred:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token,redirectPath:e.auth.authRedirectPath}}),(function(e){return{onIngredientAdded:function(t){return e(H.a(t))},onIngredientRemoved:function(t){return e(H.i(t))},onInitIngredients:function(){return e(H.e())},onInitPurchase:function(){return e(H.h())},onSetAuthRedirectPath:function(t){return e(H.j(t))}}}))(Object(U.a)(B,C.a)),x=n(16),M=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(x.a,{to:"/"})}}]),n}(r.Component),F=Object(k.b)(null,(function(e){return{onLogout:function(){return e(H.f())}}}))(M),G=function(e){return function(t){Object(s.a)(r,t);var n=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),r}(r.Component)},q=G((function(){return n.e(3).then(n.bind(null,102))})),W=G((function(){return n.e(5).then(n.bind(null,103))})),z=G((function(){return n.e(4).then(n.bind(null,104))})),X=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoLogin()}},{key:"render",value:function(){var e=a.a.createElement(x.d,null,a.a.createElement(x.b,{path:"/auth",component:z}),a.a.createElement(x.b,{path:"/",component:L}),a.a.createElement(x.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(x.d,null,a.a.createElement(x.b,{path:"/checkout",component:q}),a.a.createElement(x.b,{path:"/orders",component:W}),a.a.createElement(x.b,{path:"/logout",component:F}),a.a.createElement(x.b,{path:"/auth",component:z}),a.a.createElement(x.b,{path:"/",component:L}),a.a.createElement(x.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(S,null,e))}}]),n}(r.Component),J=Object(x.g)(Object(k.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoLogin:function(){return e(H.c())}}}))(X)),V=n(50);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(18),K=n(22),$=n(1),Q=n(3),Z={ingredients:null,totalPrice:4,error:!1,building:!1},ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},te=function(e,t){var n=Object(K.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r=Object(Q.b)(e.ingredients,n);return Object(Q.b)(e,{ingredients:r,totalPrice:e.totalPrice+ee[t.ingredientName],building:!0})},ne=function(e,t){var n=Object(K.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r=Object(Q.b)(e.ingredients,n);return Object(Q.b)(e,{ingredients:r,totalPrice:e.totalPrice+ee[t.ingredientName],building:!0})},re=function(e,t){return Object(Q.b)(e,{ingredients:t.ingredients,totalPrice:4,error:!1,building:!1})},ae=function(e,t){return Object(Q.b)(e,{error:!0})},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.a:return te(e,t);case $.n:return ne(e,t);case $.p:return re(e,t);case $.f:return ae(e);default:return e}},ie={orders:[],loading:!1,purchased:!1},oe=function(e,t){return Object(Q.b)(e,{purcased:!1})},ue=function(e,t){return Object(Q.b)(e,{loading:!0})},le=function(e,t){return Object(Q.b)(e,{loading:!1})},se=function(e,t){var n=Object(Q.b)(t.orderData,{id:t.orderId});return Object(Q.b)(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})},de=function(e,t){return Object(Q.b)(e,{loading:!0})},pe=function(e,t){return Object(Q.b)(e,{loading:!1})},me=function(e,t){return Object(Q.b)(e,{orders:t.orders,loading:!1})},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.l:return se(e,t);case $.j:return le(e);case $.k:return ue(e);case $.m:return oe(e);case $.h:return de(e);case $.i:return me(e,t);case $.g:return pe(e);default:return e}},fe={token:null,UID:null,error:null,loading:!1,authRedirectPath:"/"},be=function(e,t){return Object(Q.b)(e,{error:null,loading:!0})},ge=function(e,t){return Object(Q.b)(e,{token:t.token,UID:t.UID,error:null,loading:!1})},Ee=function(e,t){return Object(Q.b)(e,{error:t.error,loading:!1})},ve=function(e,t){return Object(Q.b)(e,{token:null,UID:null})},ye=function(e,t){return Object(Q.b)(e,{authRedirectPath:t.path})},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.d:return be(e);case $.e:return ge(e,t);case $.b:return Ee(e,t);case $.c:return ve(e);case $.o:return ye(e,t);default:return e}},ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,je=Object(Y.c)({burgerBuilder:ce,order:he,auth:Oe}),Se=Object(Y.e)(je,ke(Object(Y.a)(V.a))),Ie=a.a.createElement(k.a,{store:Se},a.a.createElement(f.a,null,a.a.createElement(J,null)));i.a.render(Ie,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[52,1,2]]]);
//# sourceMappingURL=main.a19d7b68.chunk.js.map