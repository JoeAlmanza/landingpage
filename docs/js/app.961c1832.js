(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],p=0,h=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1a8a":function(t,e,a){"use strict";var s=a("b5e8"),n=a.n(s);n.a},3241:function(t,e,a){t.exports=a.p+"img/BugLogImg.72623894.png"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark fixed-top flex-column",attrs:{id:"navbar"}},[s("router-link",{staticClass:"navbar-brand d-flex m-auto",attrs:{to:{name:"Home"}}},[s("div",{staticClass:"text-center"},[s("img",{attrs:{src:a("afa5"),alt:""}})])]),t._m(0),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto text-light text-shadow"},[a("a",{staticClass:"nav-link",attrs:{href:"#about"}},[t._v(" About ")]),a("a",{staticClass:"nav-link",attrs:{href:"#skills"}},[t._v(" Skills ")]),a("a",{staticClass:"nav-link",attrs:{href:"#portfolio"}},[t._v(" Portfolio ")]),a("a",{staticClass:"nav-link",attrs:{href:"#contact"}},[t._v(" Contact ")])])])}],c=a("335d"),l=a("bc3a"),u=a.n(l);const p=u.a.create({baseURL:"https://cw-bloggr.herokuapp.com/api/",timeout:3e3}),h=function(t){p.defaults.headers.authorization=t},f=function(){p.defaults.headers.authorization=""};var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(h(this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){f(),await this.$auth.logout({returnTo:window.location.origin})}}},m=d,g=(a("1a8a"),a("2877")),v=Object(g["a"])(m,r,i,!1,null,null,null),b=v.exports,_={name:"App",async beforeCreate(){await Object(c["b"])(),this.$auth.isAuthenticated&&h(this.$auth.bearer)},components:{Navbar:b}},x=_,w=(a("5c0b"),Object(g["a"])(x,n,o,!1,null,null,null)),y=w.exports,C=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container-fluid bg-image",attrs:{"data-spy":"scroll","data-target":"#navbar","data-offset":"0"}},[t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"row justify-content-center contactRow",attrs:{id:"contact"}},[t._m(4),a("div",{staticClass:"col-4 pt-4 mx-0 text-center"},[a("a",{staticClass:"my-4",attrs:{href:"mailto:JoeAlmanza2113@gmail.com"}},[a("i",{staticClass:"fa fa-envelope-o contactImg text-light",attrs:{"aria-hidden":"true"}}),a("br"),a("h5",{staticClass:"text-light"},[t._v("JoeAlmanza2113@gmail.com")])])]),t._m(5)])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center align-items-center mainRow"},[a("div",{staticClass:"col-lg-10 d-flex justify-content-center"},[a("h1",{staticClass:"text-center text-light"},[a("strong",[t._v(" Full-Stack Software Developer ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center aboutRow",attrs:{id:"about"}},[a("div",{staticClass:"col-lg-10 text-center text-light"},[a("h2",{staticClass:"mb-0"},[t._v("About Me")]),a("h2",[t._v("_____")]),a("h5",{staticClass:"mt-4"},[t._v(" Joe is a Software Developer who was born and raised in Idaho. His background in Escrow has ingrained a strong sense of importance when it comes to communication, meeting deadlines, thoroughly completing tasks, and providing client satisfaction by keeping them informed while managing hundreds of thousands of their dollars. While Escrow provided a sense of accomplishment when helping people buy or sell property, Joe has never been able to escape the curiousity for software development that comes with being a long time gamer, and growing up watching computers and the internet grow exponentially. Alongside Software Development and video games, Joe also loves animals, cars, clothes, sneakers and fitness. Joe also holds an Associates of Arts Degree in Information Technology from The University of Phoenix. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center skillsRow",attrs:{id:"skills"}},[s("h2",{staticClass:"col-12 mb-4 text-center"},[s("u",[t._v("Technologies and Tools")])]),s("img",{staticClass:"mt-4",attrs:{src:a("dddb"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center appRow text-light",attrs:{id:"portfolio"}},[s("h2",{staticClass:"col-12 mb-5 text-center"},[s("u",[t._v("Applications")])]),s("a",{staticClass:"contents card text-center mx-5 my-2",attrs:{href:"https://bug-log89.herokuapp.com/"}},[s("img",{staticClass:"appImg",attrs:{src:a("3241"),alt:""}}),s("div",{staticClass:"overlay text-center text-light p-1"},[s("h4",{},[t._v("Bug-Log")]),s("h5",[t._v("Vue.js, Node.js, MongoDB")]),s("p",[t._v(" Bug tracker app where users can login, open bugs, add comments, edit bugs and comments, and close bugs. ")])])]),s("a",{staticClass:"contents card text-center mx-5 my-2",attrs:{href:"https://keepr20.herokuapp.com/"}},[s("img",{staticClass:"appImg",attrs:{src:a("baf4"),alt:""}}),s("div",{staticClass:"overlay text-center text-light p-1"},[s("h4",{},[t._v("Keepr")]),s("h5",[t._v("Vue.js, .Net, MongoDB")]),s("p",[t._v(" App where users can log in, add images(keeps) and save others' images to public or private vaults. ")])])]),s("a",{staticClass:"contents card text-center mx-5 my-2",attrs:{href:"https://petpal7.herokuapp.com/"}},[s("img",{staticClass:"appImg",attrs:{src:a("da16"),alt:""}}),s("div",{staticClass:"overlay text-center text-light p-1"},[s("h4",{},[t._v("Pet-Pal")]),s("h5",[t._v("Vue.js, Node.js, MongoDB")]),s("p",[t._v(" Card swiping app utilizing nationwide shelter data to help users find adoptable pets in their area and contact the shelters holding the pets. ")])])]),s("h5",{staticClass:"col-12 text-center mt-5"},[t._v("Check out all my projects here!")]),s("input",{staticClass:"btn btn-secondary",attrs:{type:"button",onclick:"location.href='https://github.com/JoeAlmanza';",value:"My Github!"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 text-center text-light"},[a("h2",{},[a("u",[t._v("Contact Me!")])]),a("h2",[t._v("_____")]),a("h5",{staticClass:"my-4"},[t._v("If you like what you see, let me know!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4 pt-4 mx-0 text-center"},[a("a",{staticClass:"my-4",attrs:{onclick:"location.href='joealmanza.github.io/Joe-Almanza/';"}},[a("i",{staticClass:"fa fa-file-text-o contactImg text-light",attrs:{"aria-hidden":"true"}}),a("br"),a("h5",{staticClass:"text-light"},[t._v("Resume & More Info...")])])])}],$={name:"home"},P=$,O=(a("89f1"),Object(g["a"])(P,k,j,!1,null,null,null)),A=O.exports;s["a"].use(C["a"]);const E=[{path:"/",name:"Home",component:A}],I=new C["a"]({routes:E});var M=I,S=a("2f62");s["a"].use(S["a"]);var T=new S["a"].Store({state:{profile:{}},mutations:{setProfile(t,e){t.profile=e}},actions:{async getProfile({commit:t}){try{let e=await p.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}}}});const J="codeworksclassroom.auth0.com",R="pOXw2OGv1LsYi7LEBmDF04RLkXQvldml",z="https://codeworksclassroom.com";s["a"].use(c["a"],{domain:J,clientId:R,audience:z,onRedirectCallback:t=>{M.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:M,store:T,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"89f1":function(t,e,a){"use strict";var s=a("fca2"),n=a.n(s);n.a},"9c0c":function(t,e,a){},afa5:function(t,e,a){t.exports=a.p+"img/name2.11cc391b.png"},b5e8:function(t,e,a){},baf4:function(t,e,a){t.exports=a.p+"img/KeeprImg.a128a3c7.png"},da16:function(t,e,a){t.exports=a.p+"img/PetPalImg.55a69c70.png"},dddb:function(t,e,a){t.exports=a.p+"img/Icons.18898703.png"},fca2:function(t,e,a){}});
//# sourceMappingURL=app.961c1832.js.map