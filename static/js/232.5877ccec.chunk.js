"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[232],{6232:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r,o,a,i,c,s,l,u,d,m=n(2791),p=n(3008),f=n(4350),h=n(9603),v=n(5594),x=n(1758),g=n(4720),y=n(168),b=n(8786),Z=n(1191),w=(0,Z.ZP)("section")(r||(r=(0,y.Z)(["\n  position: relative;\n  padding: 0rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),N=((0,Z.ZP)("p")(o||(o=(0,y.Z)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),(0,Z.ZP)(b.Z)(a||(a=(0,y.Z)(["\n  flex-direction: ",";\n  display: flex;\n  align-items: center;\n  //justify-content: space-between;\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column; // Stack items on smaller screens\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(e){return"left"===e.direction?"row":"row-reverse"}))),j=((0,Z.ZP)("div")(i||(i=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  text-align: left;\n\n  @media only screen and (max-width: 768px) {\n    text-align: center; // Center-align text on smaller screens\n    margin-bottom: 2rem; // Add spacing between stacked items\n  }\n"]))),(0,Z.ZP)("div")(c||(c=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n\n  button {\n    margin: 0 auto;\n  }\n\n  @media only screen and (max-width: 768px) {\n    display: none; // Hide the button on screens smaller than 768px\n  }\n"]))),(0,Z.ZP)("h6")(s||(s=(0,y.Z)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n  padding: 0rem 0 0rem;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 20px; // Reduce title size on smaller screens\n  }\n"])))),C=((0,Z.ZP)("p")(l||(l=(0,y.Z)(["\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: #bababa;\n  padding: 0rem 0 0rem;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px; // Reduce title size on smaller screens\n  }\n"]))),Z.ZP.img(u||(u=(0,y.Z)(["\n  \n  width: ",";  // Default width is 100%, but it can be overridden\n  height: ",";  // Default height is 200px, but it can be overridden\n  object-fit: cover;  // Maintain aspect ratio and cover the given area\n  object-position: center;  // Center the image\n  border-radius: 5px;  // Optional: add some border-radius\n"])),(function(e){return e.width||"100%"}),(function(e){return e.height||"200px"}))),E=(0,Z.ZP)("p")(d||(d=(0,y.Z)(["\n  font-size: 18px; // Adjust this value to match the button size\n  color: #000;\n  padding: 0rem 0 0.2rem;\n\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),k=n(4880),P=n(184),O=f.Z.Meta,L=(0,g.Z)()((function(e){e.title;var t=e.content,n=void 0===t?[]:t,r=(e.button,e.t,e.id),o=e.fade_direction;(0,k.k6)();return(0,P.jsx)(w,{children:(0,P.jsx)(x.pT,{direction:o,triggerOnce:!0,children:(0,P.jsx)("div",{children:(0,P.jsx)(N,{justify:"start",align:"middle",id:r,direction:"left",gutter:[24,24],children:n.map((function(e,t){return(0,P.jsx)(h.Z,{lg:8,md:12,sm:24,xs:24,children:(0,P.jsx)(v.Z.Ribbon,{text:e.type,children:(0,P.jsxs)(f.Z,{style:{height:440},hoverable:!0,onClick:e.link?function(){return window.open(e.link,"_blank")}:void 0,cover:(0,P.jsx)(C,{src:"".concat("","/img/photo/").concat(e.photo),width:"100%",height:"250px",alt:e.title}),children:[(0,P.jsx)(j,{children:e.title}),(0,P.jsx)(E,{children:(n=e.text,r=125,n.length>r?n.substring(0,r)+"...":n)}),(0,P.jsx)(O,{description:e.date})]})})},t);var n,r}))})})})})})),T=(0,m.lazy)((function(){return n.e(281).then(n.bind(n,6281))})),z=(0,m.lazy)((function(){return Promise.resolve().then(n.bind(n,2478))})),S=function(){return(0,P.jsxs)(z,{children:[(0,P.jsx)(T,{title:"News & Events",content:"Stay up to date with the latest news and events from us."}),(0,P.jsx)(L,{title:"Highlights",content:p,id:"highlight",fade_direction:"up",button:{link:"/news",title:"More Highlights"}})]})}},5594:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(4942),o=n(1002),a=n(7462),i=n(1694),c=n.n(i),s=n(8568),l=n(2791),u=n(1929),d=n(1113),m=n(4466);function p(e){return m.Y.includes(e)}var f=function(e){var t,n=e.className,o=e.prefixCls,i=e.style,s=e.color,d=e.children,m=e.text,f=e.placement,h=void 0===f?"end":f,v=l.useContext(u.E_),x=v.getPrefixCls,g=v.direction,y=x("ribbon",o),b=p(s),Z=c()(y,"".concat(y,"-placement-").concat(h),(t={},(0,r.Z)(t,"".concat(y,"-rtl"),"rtl"===g),(0,r.Z)(t,"".concat(y,"-color-").concat(s),b),t),n),w={},N={};return s&&!b&&(w.background=s,N.color=s),l.createElement("div",{className:"".concat(y,"-wrapper")},d,l.createElement("div",{className:Z,style:(0,a.Z)((0,a.Z)({},w),i)},l.createElement("span",{className:"".concat(y,"-text")},m),l.createElement("div",{className:"".concat(y,"-corner"),style:N})))},h=n(9439);function v(e){var t,n=e.prefixCls,r=e.value,o=e.current,a=e.offset,i=void 0===a?0:a;return i&&(t={position:"absolute",top:"".concat(i,"00%"),left:0}),l.createElement("span",{style:t,className:c()("".concat(n,"-only-unit"),{current:o})},r)}function x(e,t,n){for(var r=e,o=0;(r+10)%10!==t;)r+=n,o+=n;return o}function g(e){var t,n,r=e.prefixCls,o=e.count,i=e.value,c=Number(i),s=Math.abs(o),u=l.useState(c),d=(0,h.Z)(u,2),m=d[0],p=d[1],f=l.useState(s),g=(0,h.Z)(f,2),y=g[0],b=g[1],Z=function(){p(c),b(s)};if(l.useEffect((function(){var e=setTimeout((function(){Z()}),1e3);return function(){clearTimeout(e)}}),[c]),m===c||Number.isNaN(c)||Number.isNaN(m))t=[l.createElement(v,(0,a.Z)({},e,{key:c,current:!0}))],n={transition:"none"};else{t=[];for(var w=c+10,N=[],j=c;j<=w;j+=1)N.push(j);var C=N.findIndex((function(e){return e%10===m}));t=N.map((function(t,n){var r=t%10;return l.createElement(v,(0,a.Z)({},e,{key:t,value:r,offset:n-C,current:n===C}))})),n={transform:"translateY(".concat(-x(m,c,y<s?1:-1),"00%)")}}return l.createElement("span",{className:"".concat(r,"-only"),style:n,onTransitionEnd:Z},t)}var y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},b=function(e){var t=e.prefixCls,n=e.count,r=e.className,o=e.motionClassName,i=e.style,s=e.title,m=e.show,p=e.component,f=void 0===p?"sup":p,h=e.children,v=y(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),x=(0,l.useContext(u.E_).getPrefixCls)("scroll-number",t),b=(0,a.Z)((0,a.Z)({},v),{"data-show":m,style:i,className:c()(x,r,o),title:s}),Z=n;if(n&&Number(n)%1===0){var w=String(n).split("");Z=w.map((function(e,t){return l.createElement(g,{prefixCls:x,count:Number(n),value:e,key:w.length-t})}))}return i&&i.borderColor&&(b.style=(0,a.Z)((0,a.Z)({},i),{boxShadow:"0 0 0 1px ".concat(i.borderColor," inset")})),h?(0,d.Tm)(h,(function(e){return{className:c()("".concat(x,"-custom-component"),null===e||void 0===e?void 0:e.className,o)}})):l.createElement(f,b,Z)},Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},w=function(e){var t,n,i=e.prefixCls,m=e.scrollNumberPrefixCls,f=e.children,h=e.status,v=e.text,x=e.color,g=e.count,y=void 0===g?null:g,w=e.overflowCount,N=void 0===w?99:w,j=e.dot,C=void 0!==j&&j,E=e.size,k=void 0===E?"default":E,P=e.title,O=e.offset,L=e.style,T=e.className,z=e.showZero,S=void 0!==z&&z,_=Z(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),M=l.useContext(u.E_),H=M.getPrefixCls,I=M.direction,R=H("badge",i),A=y>N?"".concat(N,"+"):y,D="0"===A||0===A,W=(null!==h&&void 0!==h||null!==x&&void 0!==x)&&(null===y||D&&!S),Y=C&&!D,J=Y?"":A,q=(0,l.useMemo)((function(){return(null===J||void 0===J||""===J||D&&!S)&&!Y}),[J,D,S,Y]),B=(0,l.useRef)(y);q||(B.current=y);var F=B.current,G=(0,l.useRef)(J);q||(G.current=J);var K=G.current,Q=(0,l.useRef)(Y);q||(Q.current=Y);var U=(0,l.useMemo)((function(){if(!O)return(0,a.Z)({},L);var e={marginTop:O[1]};return"rtl"===I?e.left=parseInt(O[0],10):e.right=-parseInt(O[0],10),(0,a.Z)((0,a.Z)({},e),L)}),[I,O,L]),V=null!==P&&void 0!==P?P:"string"===typeof F||"number"===typeof F?F:void 0,X=q||!v?null:l.createElement("span",{className:"".concat(R,"-status-text")},v),$=F&&"object"===(0,o.Z)(F)?(0,d.Tm)(F,(function(e){return{style:(0,a.Z)((0,a.Z)({},U),e.style)}})):void 0,ee=c()((t={},(0,r.Z)(t,"".concat(R,"-status-dot"),W),(0,r.Z)(t,"".concat(R,"-status-").concat(h),!!h),(0,r.Z)(t,"".concat(R,"-status-").concat(x),p(x)),t)),te={};x&&!p(x)&&(te.background=x);var ne=c()(R,(n={},(0,r.Z)(n,"".concat(R,"-status"),W),(0,r.Z)(n,"".concat(R,"-not-a-wrapper"),!f),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===I),n),T);if(!f&&W){var re=U.color;return l.createElement("span",(0,a.Z)({},_,{className:ne,style:U}),l.createElement("span",{className:ee,style:te}),v&&l.createElement("span",{style:{color:re},className:"".concat(R,"-status-text")},v))}return l.createElement("span",(0,a.Z)({},_,{className:ne}),f,l.createElement(s.ZP,{visible:!q,motionName:"".concat(R,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,o=H("scroll-number",m),i=Q.current,s=c()((t={},(0,r.Z)(t,"".concat(R,"-dot"),i),(0,r.Z)(t,"".concat(R,"-count"),!i),(0,r.Z)(t,"".concat(R,"-count-sm"),"small"===k),(0,r.Z)(t,"".concat(R,"-multiple-words"),!i&&K&&K.toString().length>1),(0,r.Z)(t,"".concat(R,"-status-").concat(h),!!h),(0,r.Z)(t,"".concat(R,"-status-").concat(x),p(x)),t)),u=(0,a.Z)({},U);return x&&!p(x)&&((u=u||{}).background=x),l.createElement(b,{prefixCls:o,show:!q,motionClassName:n,className:s,count:K,title:V,style:u,key:"scrollNumber"},$)})),X)};w.Ribbon=f;var N=w},3008:function(e){e.exports=JSON.parse('[{"type":"news","title":"LTL Christmas Dinner","text":"We enjoyed a lovely lab-wide dinner to celebrate the end of the term together!","photo":"LTL_Christmas_2024.jpg","link":"","date":"2024-12-03"},{"type":"events","title":"LTL @ CHIA Conference","text":"LTL has been invited to present at the CHIA Conference. We are very happy to share our research presentations and posters with academic and professional communities worldwide!","photo":"chia_presentation.jpeg","link":"https://www.chia.cam.ac.uk/events/chia-conference-11-june-2024","date":"2024-06-11"},{"type":"events","title":"LTL @ EMNLP 2023","text":"Please find attached a selection of group photos of LTL at the EMNLP 2023 Conference in Singapore! ","photo":"ltl_emnlp_group.jpg","link":"","date":"2023-12-09"},{"type":"events","title":"LTL Halloween Party","text":"What a fun night at our Halloween party have a look at the pumpkin carving competition entries!","photo":"halloween.jpeg","link":"https://x.com/CambridgeLTL/status/1587754105191239680","date":"2021-08-02"}]')}}]);
//# sourceMappingURL=232.5877ccec.chunk.js.map