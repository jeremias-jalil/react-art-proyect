(this["webpackJsonpreact-art-proyect"]=this["webpackJsonpreact-art-proyect"]||[]).push([[0],[,,,,,,,,function(e,t,c){e.exports={div:"App_div__39SxS",divNav:"App_divNav__3oSg3",none:"App_none__3oRFW",divContent:"App_divContent__2LjR-",topBar:"App_topBar__2uFzS",line:"App_line__djlSe",hamb:"App_hamb__2Xl1P",transp:"App_transp__3ikTf",divNavNone:"App_divNavNone__-fKKi"}},,,function(e,t,c){e.exports={cuadro:"cuadro_cuadro__3GgK_",div:"cuadro_div__2LnDS",divReverse:"cuadro_divReverse__1Jzf3",divImage:"cuadro_divImage__BOhVV",divInfo:"cuadro_divInfo__1bSiG",title:"cuadro_title__1fs43",date:"cuadro_date___g7t9",artist:"cuadro_artist__1XMqK",link:"cuadro_link__10v8V",button:"cuadro_button__bKsFU",buttonOff:"cuadro_buttonOff__3dEIl"}},,function(e,t,c){e.exports={div:"Detalle_div__2pLPq",img:"Detalle_img__6M7CU",divImg:"Detalle_divImg__38dkV",divCont:"Detalle_divCont__EH6M5",title:"Detalle_title__JkmWZ",divInfo:"Detalle_divInfo__1XbfF",link:"Detalle_link__23Jna",button:"Detalle_button__2p95x",buttonOff:"Detalle_buttonOff__2cRVn"}},,function(e,t,c){e.exports={logo:"TopBar_logo__1ac1_",div:"TopBar_div__3FltY",menu:"TopBar_menu__1dZpz",activeMenu:"TopBar_activeMenu__1UH3e",menuElement:"TopBar_menuElement__IziWr"}},,,,,,,function(e,t,c){e.exports={div:"FiltroAutores_div__2USJB",h5:"FiltroAutores_h5__2Hw2S",h3:"FiltroAutores_h3__1ouVb",h3Hide:"FiltroAutores_h3Hide__PfUi1"}},function(e,t,c){e.exports={div:"About_div__R8mlW",a:"About_a__35UQn",content:"About_content__-LBj3",img:"About_img__3IaQw"}},,,,function(e,t,c){e.exports={button:"Search_button__2opKq",input:"Search_input__3L7zr",select:"Search_select__3eQ-X"}},function(e,t,c){e.exports={div:"NoFavourite_div__1rbBs",img:"NoFavourite_img__cadMM",divMobile:"NoFavourite_divMobile__3xYGm"}},,,,,function(e,t,c){e.exports={title:"NavBar_title__3nnt3"}},function(e,t,c){e.exports={div:"Loading_div__3qY6n",load:"Loading_load__3CfTh"}},function(e,t,c){e.exports={div:"cuadros_div__lXMeR"}},function(e,t,c){e.exports={div:"Landing_div__EgrzJ"}},function(e,t,c){e.exports={div:"Favourite_div__2JjtG"}},,,,,,,,function(e,t,c){},,,,,,,,function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(17),r=c.n(i),o=(c(45),c(16)),s=c(8),u=c.n(s),l=c(4),d=c(3),j="GET_SEARCH",b="GET_SEARCH_ARTIST",v="GET_SEARCH_ART",m="CLEAN",h="CLEAN_ART",_="LOADING",f="ADD_FAVOURITE",O="REMOVE_FAVOURITE";function p(e,t){return function(c){return c({type:_}),function(e,t){return fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?medium=".concat(t,"&q=").concat(e)).then((function(e){return e.json()})).then((function(e){if(0!==e.total){var t=e.objectIDs;t.length>20&&(t=t.slice(0,20));var c=t.map((function(e,t){return fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/".concat(e)).then((function(e){return e.json()})).then((function(e){return e}))}));return Promise.all(c).then((function(e){return e}))}alert("No se encuentras coincidencias")}))}(e,t).then((function(e){return c({type:j,payload:e}),c({type:_})}))}}function x(e){return function(t){return t({type:_}),(c=e,fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=".concat(c)).then((function(e){return e.json()})).then((function(e){if(0!==e.total){var t=e.objectIDs;t.length>20&&(t=t.slice(0,20));var c=t.map((function(e){return fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/".concat(e)).then((function(e){return e.json()})).then((function(e){return e}))}));return Promise.all(c).then((function(e){return e}))}alert("No se encuentras coincidencias")}))).then((function(e){return t({type:b,payload:e}),t({type:_})}));var c}}function g(e){return function(t){return t({type:_}),function(e){return fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/".concat(e)).then((function(e){return e.json()})).then((function(e){return e}))}(e).then((function(e){return t({type:v,payload:e}),t({type:_})}))}}var N=c(27),y=c.n(N),A=c(1);function S(){var e=Object(a.useState)("Paintings"),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),s=r[0],u=r[1],j=Object(d.b)();function b(e,t){j(p(e,t))}var v=Object(l.e)();return Object(A.jsxs)("form",{onSubmit:function(e){v.push("/"),e.preventDefault(),b(s,c)},children:[Object(A.jsx)("input",{className:y.a.input,type:"text",placeholder:"Art",onChange:function(e){return u(e.target.value)}}),Object(A.jsxs)("select",{className:y.a.select,name:"Tipo de arte",onChange:function(e){return n(e.target.value),b(s,e.target.value),v.push("/")},children:[Object(A.jsx)("option",{children:"Paintings"}),Object(A.jsx)("option",{children:"Ceramics"}),Object(A.jsx)("option",{children:"Sculpture"})]}),Object(A.jsx)("button",{className:y.a.button,type:"submit",children:"Search"})]})}var I=c(21),D=c(5),k=c(22),C=c.n(k);function E(){var e=Object(d.c)((function(e){return e.cuadros})),t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],i=c[1];return Object(a.useEffect)((function(){i(new Set(null===e||void 0===e?void 0:e.map((function(e){return e.artistDisplayName}))))}),[e]),Object(A.jsxs)("div",{children:[Object(A.jsx)("h3",{className:Object(I.a)(n).length>0?C.a.h3:C.a.h3Hide,children:"Artists found: "}),Object(A.jsx)("div",{className:C.a.div,children:Object(I.a)(n).map((function(e){return Object(A.jsx)(D.b,{to:"/artist/".concat(e),children:Object(A.jsx)("h5",{className:C.a.h5,children:e})})}))})]})}var T=c(33),F=c.n(T);function M(){return Object(A.jsxs)("div",{className:F.a.div,children:[Object(A.jsx)("h2",{className:F.a.title,children:"Search for your favorite artwork"}),Object(A.jsx)(S,{}),Object(A.jsx)(l.a,{exact:!0,path:"/",children:Object(A.jsx)(E,{})}),Object(A.jsx)(l.a,{path:"/artist",children:Object(A.jsx)(E,{})})]})}var R=c(11),w=c.n(R);function B(e){var t=e.id,c=e.artist,a=e.date,n=e.imgSmall,i=e.title,r=e.index,o=Object(d.b)(),s=0===Object(d.c)((function(e){return e.favourite})).filter((function(e){return e.objectID===t})).length;return Object(A.jsxs)("div",{className:r%2===0?w.a.div:w.a.divReverse,children:[Object(A.jsx)("div",{className:w.a.divImage,children:Object(A.jsx)("img",{className:w.a.cuadro,src:n})}),Object(A.jsxs)("div",{className:w.a.divInfo,children:[Object(A.jsx)("h2",{className:w.a.title,children:i}),Object(A.jsx)("h3",{className:w.a.date,children:a}),Object(A.jsx)("h3",{className:w.a.artist,children:c}),Object(A.jsx)(D.b,{to:"/art/".concat(t),className:w.a.link,children:Object(A.jsx)("button",{className:w.a.button,children:"Take a close look"})}),Object(A.jsx)("button",{className:s?w.a.buttonOff:w.a.button,onClick:function(){return o(function(e){return{type:O,payload:e}}(t))},children:"Remove favourite"})]})]})}var L=c(35),J=c.n(L);function H(e){var t=e.cuadros;return Object(A.jsx)("div",{className:J.a.div,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(A.jsx)(B,{id:e.objectID,artist:e.artistDisplayName,date:e.objectDate,imgSmall:e.primaryImageSmall,title:e.title,index:t},e.objectID)}))})}var P=c(40),V=(c(52),c(13)),z=c.n(V);function G(e){var t=Object(d.b)();Object(a.useEffect)((function(){return t(g(e.match.params.artId))}),[]),Object(a.useEffect)((function(){return function(){return t({type:h})}}),[]);var c=Object(d.c)((function(e){return e.cuadro})),n=0===Object(d.c)((function(e){return e.favourite})).filter((function(e){return e.objectID===c.objectID})).length,i=Object(l.e)();return Object(A.jsxs)("div",{className:z.a.div,children:[Object(A.jsx)("h1",{className:z.a.title,children:c.title}),Object(A.jsx)("div",{className:z.a.divImg,children:Object(A.jsx)(P.a,{className:z.a.img,zoomType:"click",src:c.primaryImageSmall,zoomSrc:c.primaryImage})}),Object(A.jsx)("div",{className:z.a.divCont,children:Object(A.jsxs)("div",{className:z.a.divInfo,children:[Object(A.jsx)("h2",{children:"Date: "}),Object(A.jsx)("h4",{children:c.objectDate}),Object(A.jsx)("h2",{children:"Autor: "}),Object(A.jsx)(D.b,{to:"/artist/".concat(c.artistDisplayName),className:z.a.link,children:c.artistDisplayName}),Object(A.jsx)("h2",{children:"Autor Bio: "}),Object(A.jsx)("h4",{children:c.artistDisplayBio}),Object(A.jsx)("h2",{children:"Dimentions: "}),Object(A.jsx)("h4",{children:c.dimensions}),Object(A.jsx)("button",{className:n?z.a.button:z.a.buttonOff,onClick:function(){return t({type:f,payload:c})},children:"Add favourite"}),Object(A.jsx)("button",{className:n?z.a.buttonOff:z.a.button,onClick:function(){return i.push("/favourite")},children:"View my favourites"})]})})]})}var U=c(15),q=c.n(U);function K(){var e=Object(d.b)();return Object(A.jsxs)("div",{className:q.a.div,children:[Object(A.jsx)(D.b,{to:"/",children:Object(A.jsx)("img",{className:q.a.logo,onClick:function(){return e({type:m})},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Metropolitan_Museum_of_Art_Logo.svg/1028px-The_Metropolitan_Museum_of_Art_Logo.svg.png"})}),Object(A.jsxs)("div",{className:q.a.menu,children:[Object(A.jsx)(D.c,{className:q.a.menuElement,exact:!0,to:"/",activeClassName:q.a.activeMenu,children:"Home"}),Object(A.jsx)(D.c,{className:q.a.menuElement,exact:!0,to:"/favourite",activeClassName:q.a.activeMenu,children:"Favourite"}),Object(A.jsx)(D.c,{className:q.a.menuElement,exact:!0,to:"/about",activeClassName:q.a.activeMenu,children:"About"})]})]})}var W=c(20),X=c(36),Y=c.n(X);function Q(){var e;return Object(A.jsx)("div",{className:Y.a.div,children:Object(A.jsx)("iframe",(e={title:"vimeo-player",src:"https://player.vimeo.com/video/555289972?background=1",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:!0,background:"1"},Object(W.a)(e,"title","(2021) HomePage"),Object(W.a)(e,"id","vimeo-3227808"),e))})}var Z=c(34),$=c.n(Z);function ee(){return Object(A.jsx)("div",{className:$.a.div,children:Object(A.jsx)("img",{className:$.a.load,src:"https://felixbulnes.cl/wp-content/plugins/form-maker/images/spinner.gif"})})}function te(e){var t=Object(d.c)((function(e){return e.loading})),c=Object(d.c)((function(e){return e.cuadrosArtist})),n=Object(d.b)();return Object(a.useEffect)((function(){return n(x(e.match.params.artistName))}),[]),Object(a.useEffect)((function(){return n(x(e.match.params.artistName))}),[e.match.params.artistName]),Object(A.jsx)("div",{children:t?Object(A.jsx)(ee,{}):Object(A.jsx)(H,{cuadros:c})})}var ce=c(37),ae=c.n(ce),ne=c(28),ie=c.n(ne);function re(){return Object(A.jsx)("div",{className:ie.a.div,children:Object(A.jsxs)("div",{className:ie.a.divMobile,children:[Object(A.jsx)("img",{className:ie.a.img,src:"https://images.vexels.com/media/users/3/201518/isolated/preview/8fdf595356aa78bdc51ea055a15f3e5e-elemento-de-pincel-de-pintura-de-corazon.png"}),Object(A.jsx)("h1",{children:"No favourites"}),Object(A.jsx)("h2",{children:"You can add favourites by entering each work of art."})]})})}function oe(){var e=Object(d.c)((function(e){return e.loading})),t=Object(d.c)((function(e){return e.favourite}));return Object(A.jsx)("div",{className:ae.a.div,children:e?Object(A.jsx)(ee,{}):(null===t||void 0===t?void 0:t.length)?Object(A.jsx)(H,{cuadros:t}):Object(A.jsx)(re,{})})}var se=c(23),ue=c.n(se);function le(){return Object(A.jsxs)("div",{className:ue.a.div,children:[Object(A.jsx)("img",{className:ue.a.img,src:"https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"}),Object(A.jsxs)("div",{className:ue.a.content,children:[Object(A.jsx)("h1",{children:"Practice app"}),Object(A.jsx)("h2",{children:"This is a development by Jerem\xedas Jalil, used as a practice of the concepts acquired on Reac, Redux, Route, API conection and CSS module, in the Full Stack Web Developer Bootcamp"}),Object(A.jsx)("a",{className:ue.a.a,href:"https://www.linkedin.com/in/jeremiasjalil/",target:"_blank",children:"Jerem\xedas Jalil LinkedIn"})]})]})}var de=function(){var e=Object(d.c)((function(e){return e.favourite})),t=Object(d.c)((function(e){return e.cuadros})),c=Object(d.c)((function(e){return e.loading})),n=Object(a.useState)(!0),i=Object(o.a)(n,2),r=i[0],s=i[1];return Object(a.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(e))}),[e]),Object(A.jsxs)("div",{className:u.a.div,children:[Object(A.jsx)(l.a,{path:"/",children:Object(A.jsx)("div",{className:u.a.topBar,children:Object(A.jsx)(K,{})})}),Object(A.jsx)(l.a,{path:"/",children:Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:r?u.a.divNav:u.a.divNavNone,children:[Object(A.jsxs)("div",{className:u.a.hamb,onClick:function(){return s(!r)},children:[Object(A.jsx)("div",{className:u.a.line}),Object(A.jsx)("div",{className:u.a.line}),Object(A.jsx)("div",{className:u.a.line})]}),Object(A.jsx)("div",{className:r?u.a.navBar:u.a.none,children:Object(A.jsx)(M,{})})]}),Object(A.jsx)("div",{className:r?u.a.transp:u.a.none,onClick:function(){return s(!r)}})]})}),Object(A.jsxs)("div",{className:u.a.divContent,children:[Object(A.jsx)(l.a,{exact:!0,path:"/",children:c?Object(A.jsx)(ee,{}):(null===t||void 0===t?void 0:t.length)?Object(A.jsx)(H,{cuadros:t}):Object(A.jsx)(Q,{})}),Object(A.jsx)(l.a,{path:"/art/:artId",component:G}),Object(A.jsx)(l.a,{exact:!0,path:"/artist/:artistName",component:te}),Object(A.jsx)(l.a,{exact:!0,path:"/favourite",children:Object(A.jsx)(oe,{})}),Object(A.jsx)(l.a,{exact:!0,path:"/about",children:Object(A.jsx)(le,{})})]})]})},je=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))},be=c(26),ve=c(6),me={cuadros:[],cuadrosArtist:[],cuadro:{},loading:!1,favourite:JSON.parse(localStorage.getItem("favourites"))};var he=c(38),_e=c(39),fe=Object(be.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(ve.a)(Object(ve.a)({},e),{},{cuadros:t.payload});case b:return Object(ve.a)(Object(ve.a)({},e),{},{cuadrosArtist:t.payload});case v:return Object(ve.a)(Object(ve.a)({},e),{},{cuadro:t.payload});case m:return Object(ve.a)(Object(ve.a)({},e),{},{cuadros:[],cuadro:{}});case h:return Object(ve.a)(Object(ve.a)({},e),{},{cuadro:{}});case _:return Object(ve.a)(Object(ve.a)({},e),{},{loading:!e.loading});case f:return Object(ve.a)(Object(ve.a)({},e),{},{favourite:[].concat(Object(I.a)(e.favourite),[t.payload])});case O:return Object(ve.a)(Object(ve.a)({},e),{},{favourite:e.favourite.filter((function(e){return e.objectID!==t.payload}))});default:return e}}),Object(_e.composeWithDevTools)(Object(be.applyMiddleware)(he.a)));r.a.render(Object(A.jsx)(d.a,{store:fe,children:Object(A.jsx)(D.a,{basename:"/react-art-proyect",children:Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(de,{})})})}),document.getElementById("root")),je()}],[[53,1,2]]]);
//# sourceMappingURL=main.252f0749.chunk.js.map