(this.webpackJsonpcafe=this.webpackJsonpcafe||[]).push([[0],{28:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(12),s=c.n(a),r=c(5),j=c(13),l=c(2),o=c(3),d=c(16),b=c.n(d),u=c(19),O=function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t),{method:"GET",redirect:"follow"});case 3:if((c=e.sent).ok){e.next=6;break}throw new Error("Failed with status code: ".concat(c.status));case 6:return e.next=8,c.json();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(!1),j=Object(r.a)(s,2),l=j[0],o=j[1];return Object(n.useEffect)((function(){o(!0),O(e).then((function(e){o(!1);var t=e.drinks;a(t)})).catch((function(e){return console.log(e)}))}),[e,a,o]),[l,i]},x=c(10),m=c(0),p=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",children:[Object(m.jsx)("title",{}),Object(m.jsxs)("g",{"data-name":"1",id:"_1",children:[Object(m.jsx)("path",{d:"M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"}),Object(m.jsx)("path",{d:"M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"}),Object(m.jsx)("path",{d:"M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"}),Object(m.jsx)("path",{d:"M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"})]})]})})},k=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("svg",{className:"searchSvg",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",x:"0px",y:"0px",viewBox:"0 0 512 512",children:[Object(m.jsx)("g",{children:Object(m.jsx)("g",{children:Object(m.jsx)("path",{d:"M508.875,493.792L353.089,338.005c32.358-35.927,52.245-83.296,52.245-135.339C405.333,90.917,314.417,0,202.667,0S0,90.917,0,202.667s90.917,202.667,202.667,202.667c52.043,0,99.411-19.887,135.339-52.245l155.786,155.786c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125C513.042,504.708,513.042,497.958,508.875,493.792z M202.667,384c-99.979,0-181.333-81.344-181.333-181.333S102.688,21.333,202.667,21.333S384,102.677,384,202.667S302.646,384,202.667,384z"})})}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{}),Object(m.jsx)("g",{})]})})},f=c(21),v=(c(28),function(){var e=Object(n.useContext)(z),t=e.state,c=e.goHome,i=e.updateModal,a=e.updateSearch,s=e.onChangeInputText,r=t.basketDrinks,j=t.inputValue,l=Object.keys(r).length;return Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"nav",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsxs)(x.b,{onClick:function(){return c},to:"/cafe-app",className:"logo",children:[Object(m.jsx)(f.a,{}),"NALUVAYKO"]})}),Object(m.jsx)("div",{className:"formContainer",children:Object(m.jsxs)("form",{id:"new-film-search",className:"form",children:[Object(m.jsx)("input",{id:"input",name:"text",placeholder:"Search",value:j,className:"searchData",onChange:s}),Object(m.jsx)("button",{className:"searchButton",id:"submit",disabled:""===j,onClick:a(j),children:Object(m.jsx)(k,{})})]})}),Object(m.jsxs)("div",{className:"basket",onClick:function(){return i(l)},children:[0!==l?Object(m.jsx)("div",{className:"buble",children:Object(m.jsx)("span",{children:l})}):null,Object(m.jsx)(p,{})]})]})})}),g=(c(37),["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),C=function(){var e=Object(n.useContext)(z).searchWithLetter;return Object(m.jsx)("footer",{children:Object(m.jsx)("ul",{className:"footer",children:g.map((function(t){return Object(m.jsx)("li",{className:"footerLi",onClick:e(t),children:t},t)}))})})},N=function(e){var t=e.Component,c=Object(n.useContext)(z),i=c.state,a=c.isModalOpen;return i.isOpen&&s.a.createPortal(Object(m.jsxs)("div",{className:"PopUp",children:[Object(m.jsx)("div",{className:"closeButton",children:Object(m.jsx)("span",{onClick:a,children:"x"})}),Object(m.jsx)(t,{})]}),document.getElementById("modal"))},w=function(){var e=Object(n.useContext)(z),t=e.state,c=e.onRemoveItemClick,i=e.onItemSendClick,a=t.basketDrinks,s=Object.keys(a);return Object(m.jsxs)("div",{children:[s.length?Object(m.jsx)("ul",{className:"ulBasket",children:Object(m.jsx)("div",{className:"contentBasketContainer",children:s.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("div",{className:"deleteAndCount",children:Object(m.jsx)("div",{className:"delete",onClick:c(e),children:"X"})}),Object(m.jsx)("div",{className:"smallImageContainer",children:Object(m.jsx)("img",{className:"imageContainer",loading:"lazy",width:"100",height:"100",src:a[e].drink.strDrinkThumb,alt:"loading ..."})}),Object(m.jsx)("div",{className:"titleCocktailContainer",children:a[e].drink.strDrink}),Object(m.jsxs)("div",{children:[" \u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043e: ",a[e].count]})]},e)}))})}):null,Object(m.jsx)("div",{className:"btnBasketContainer",children:Object(m.jsx)("button",{className:"btn",onClick:function(){return i(s)},children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})})]})},D=(c(38),"https://www.thecocktaildb.com/api/json/v1/1/random.php"),y=function(e){return"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e)},S=function(e){return"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(e)},I=function(e){return"https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(e)},L={url:D,isOpen:!1,inputValue:"",letter:"///",basketDrinks:{}},B=function(e){var t=e.children,c=Object(o.f)(),i=Object(n.useState)(L),a=Object(r.a)(i,2),s=a[0],d=a[1],b=s.url,u=s.isOpen,O=h(b),x=Object(r.a)(O,2),p=x[0],k=x[1],f=Object(o.g)(),g=f.pathname.split("/");Object(n.useEffect)((function(){var e=Object(r.a)(g,3),t=e[1],c=e[2];"cafe-app"===t&&d(Object(l.a)(Object(l.a)({},s),{},{url:D})),"letter"===t&&d(Object(l.a)(Object(l.a)({},s),{},{letter:c,url:I(c)})),"search"===t&&d(Object(l.a)(Object(l.a)({},s),{},{url:S(c)})),"cocktail"===t&&d(Object(l.a)(Object(l.a)({},s),{},{url:y(c)}))}),[f.pathname]);return Object(m.jsx)(z.Provider,{value:{state:s,drinks:k,selectCocktail:function(e,t){c.push("/cocktail/".concat(t)),d(Object(l.a)(Object(l.a)({},s),{},{url:y(t)}))},addCocktailToButton:function(e,t,c){var n=e[t]&&e[t].count||0,i=Object(j.a)({},t,{drink:c,count:n+1});d(Object(l.a)(Object(l.a)({},s),{},{basketDrinks:Object(l.a)(Object(l.a)({},s.basketDrinks),i)}))},updateModal:function(e){0!==e?d(Object(l.a)(Object(l.a)({},s),{},{isOpen:!s.isOpen})):alert("\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u044c")},updateSearch:function(e){return function(t){t.preventDefault(),c.push("/search/".concat(e)),d(Object(l.a)(Object(l.a)({},s),{},{url:S(e),inputValue:""}))}},onChangeInputText:function(e){d(Object(l.a)(Object(l.a)({},s),{},{inputValue:e.target.value}))},goHome:function(){d(Object(l.a)(Object(l.a)({},s),{},{url:D}))},searchWithLetter:function(e){return function(t){t.preventDefault(),d(Object(l.a)(Object(l.a)({},s),{},{letter:e,url:I(e)})),c.push("/letter/".concat(e))}},isModalOpen:function(){return d(Object(l.a)(Object(l.a)({},s),{},{isOpen:!s.isOpen}))},onRemoveItemClick:function(e){return function(){var t=Object(l.a)({},s.basketDrinks);1===t[e].count?delete t[e]:t[e].count=t[e].count-1,d(Object(l.a)(Object(l.a)({},s),{},{basketDrinks:t}))}},onItemSendClick:function(e){0!==e.length&&console.log("\u0412\u0438 \u0437\u0430\u043c\u043e\u0432\u0438\u043b\u0438",s.basketDrinks),d(Object(l.a)(Object(l.a)({},s),{},{basketDrinks:{},isOpen:!u}))},isLoading:p},children:Object(m.jsxs)("div",{className:u?"WrapperBlur":"Wrapper",children:[Object(m.jsx)(v,{}),t,Object(m.jsx)(C,{}),Object(m.jsx)(N,{Component:w})]})})},M=(c(39),function(){var e=Object(n.useContext)(z),t=e.selectCocktail,c=e.drinks,i=e.isLoading;return Object(m.jsxs)("div",{children:[i?Object(m.jsx)("p",{children:"loading"}):null,c?Object(m.jsx)("ul",{children:Object(m.jsx)("div",{className:"contentContainer",children:c.map((function(e){return Object(m.jsxs)("li",{className:"listContainer",onClick:function(){return t(e,e.idDrink)},children:[Object(m.jsx)("div",{className:"smallImageContainer",children:Object(m.jsx)("img",{className:"imageContainer",id:e.idDrink,loading:"lazy",width:"220",height:"291",src:e.strDrinkThumb,alt:"loading ..."})}),Object(m.jsx)("div",{className:"titleCocktailContainer",children:e.strDrink})]},e.idDrink)}))})}):Object(m.jsx)("div",{className:"notfound",children:Object(m.jsx)("p",{children:"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437"})})]})}),A=function(e){var t=e.title,c=e.cocktails,i=e.id,a=e.drink,s=Object(n.useContext)(z).addCocktailToButton;return Object(m.jsx)("div",{className:"btnContainer",children:Object(m.jsx)("button",{onClick:function(){return s(c,i,a)},className:"btn",children:Object(m.jsx)("span",{children:t})})})},H=(c(40),function(){var e=Object(n.useContext)(z),t=e.state,c=e.selectCocktail,i=e.drinks,a=e.isLoading,s=t.basketDrinks,j=i||[],l=Object(r.a)(j,1)[0];return Object(m.jsxs)("div",{className:"HomeContainer",children:[Object(m.jsx)("div",{children:"\u0414\u043b\u044f \u0432\u0438\u0431\u043e\u0440\u0443 \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u044e \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u043c \u0430\u0431\u043e \u0444\u0456\u043b\u044c\u0442\u0440\u043e\u043c"}),a?Object(m.jsx)("p",{children:"loading"}):null,l?Object(m.jsxs)("div",{className:"wrapCocktail",children:[Object(m.jsxs)("div",{className:"titleContainer",id:l.idDrink,children:[Object(m.jsx)("div",{className:"text",id:"text",children:" \u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0456\u044f: "}),Object(m.jsx)("div",{className:"text",children:l.strDrink})]}),Object(m.jsx)("div",{onClick:function(){return c(l,l.idDrink)},className:"homeImage",children:Object(m.jsx)("img",{className:"imageContainer",id:l.idDrink,loading:"lazy",width:"500",height:"500",src:l.strDrinkThumb,alt:"loading ..."})}),Object(m.jsx)("div",{children:Object(m.jsx)(A,{title:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",cocktails:s,drink:l,id:l.idDrink})})]}):null]})}),T=(c(41),function(){var e=Object(n.useContext)(z),t=e.state,c=e.drinks,i=e.isLoading,a=t.basketDrinks,s=Object(r.a)(c,1)[0];return Object(m.jsxs)("div",{className:"contentContainer",children:[i?Object(m.jsx)("p",{children:"loading"}):null,s?Object(m.jsxs)("div",{className:"wrapCocktail",children:[Object(m.jsx)("div",{className:"titleContainer",id:s.idDrink,children:Object(m.jsxs)("div",{className:"text",id:"text",children:[s.strDrink," "]})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"imageContainer",id:s.idDrink,loading:"lazy",width:"700",height:"700",src:s.strDrinkThumb,alt:"loading ..."})}),Object(m.jsxs)("div",{className:"instruction",children:[Object(m.jsx)("div",{children:"Instruction:  "}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"text",id:"text",children:[s.strInstructions," "]})]}),Object(m.jsx)("div",{children:Object(m.jsx)(A,{title:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",cocktails:a,drink:s,id:s.idDrink})})]}):null]})}),z=i.a.createContext(),E=[{layout:B,routes:[["/cafe-app",H,!0],["/search/:text",M,!0],["/letter/:letter",M,!0],["/cocktail/:id",T,!0]]}],Z=function(e){var t=e.config;return Object(m.jsx)(x.a,{children:Object(m.jsx)(o.c,{children:t.map((function(e){var t=e.layout,c=e.routes;return Object(m.jsx)(o.a,{path:c.map((function(e){return Object(r.a)(e,1)[0]})),children:Object(m.jsx)(t,{children:Object(m.jsx)(o.c,{children:c.map((function(e){var t=Object(r.a)(e,3),c=t[0],i=t[1],a=t[2];return Object(n.createElement)(o.a,{path:c,exact:a,key:c},Object(m.jsx)(i,{}))}))})})},c[0][0])}))})})},V=function(){return Object(m.jsx)(Z,{config:E})};c(42);s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.18b3850c.chunk.js.map