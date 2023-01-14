(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="",j="Simran Sankhala",b="Simran Sankhala",h="Security Engineer",d="Having 3+ Years of Industry Experience",u="https://drive.google.com/file/d/1sL2BvouftNdB7pc1ck6la9zhgUgWCGqW/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/simran-sankhala/",github:"https://github.com/simran-sankhala"},O=[{name:"OSCP",description:"Offensive Security Certified Professional",stack:["Offensive Security"],livePreview:"https://www.credential.net/4d2a913c-4b45-42c6-8ea6-9a617e230343#gs.mbyozd"},{name:"CRTP",description:"Certified Red Team Professional",stack:["Pentester Academy"],livePreview:"https://www.credential.net/037a8507-3e13-48fd-a61b-1bd1476d91c7"},{name:"CTIA",description:"Certified Threat Intelligence Analyst",stack:["EC-Council"],livePreview:"https://drive.google.com/file/d/1skA8HcrPD2npTnxLBZ6z2i1T8pTxjN8N/view?usp=sharing"}],x=["Web App Penetration Testing","Network Penetration Testing","API Penetration Testing","Active Directory","Thick Client Penetration Testing","Python","Bash Scripting","Bug Bounty","CTF"],f="simransankhala08@mail.com",k=n(16),p=n.n(k),v=n(14),g=n.n(v),N=n(18),_=n.n(N),w=n(17),C=n.n(w),y=(n(28),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],b=o[1],h=function(){return b(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Certifications"})}):null,x.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,f?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(g.a,{}):Object(a.jsx)(p.a,{})}),Object(a.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),P=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(y,{})]})}),S=n(11),T=n.n(S),E=n(19),A=n.n(E),B=(n(33),function(){var e=b,t=h,n=d,c=u,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsx)("span",{className:"about__name",children:e})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(T.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})}),I=n(7),L=n.n(I),z=n(20),H=n.n(z),R=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(T.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(H.a,{})})]})}),W=(n(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Certifications"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(R,{project:e},L()())}))})]}):null}),D=(n(37),function(){return x.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),F=n(21),J=n.n(F),Y=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(J.a,{fontSize:"large"})})}):null}),q=(n(39),function(){return f?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(f),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email :)"})})]}):null}),G=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/simran-sankhala",className:"link footer__link",children:"Created By Simran"})})}),M=(n(41),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(P,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(B,{}),Object(a.jsx)(W,{}),Object(a.jsx)(D,{}),Object(a.jsx)(q,{})]}),Object(a.jsx)(Y,{}),Object(a.jsx)(G,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.01e02819.chunk.js.map