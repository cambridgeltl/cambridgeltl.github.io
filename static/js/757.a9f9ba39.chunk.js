"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[757],{5757:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var o,a,i,r,s,c,l,u,d,m=n(2791),p=n(4350),h=n(9603),g=n(5594),f=n(1758),y=n(4720),v=n(168),b=n(8786),x=n(1191),w=(0,x.ZP)("section")(o||(o=(0,v.Z)(["\n  position: relative;\n  padding: 2rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),Z=(0,x.ZP)("p")(a||(a=(0,v.Z)(["\n  margin: 1rem 0 1rem 0;\n  color: #000000;\n\n"]))),k=(0,x.ZP)(b.Z)(i||(i=(0,v.Z)(["\n  flex-direction: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column; // Stack items on smaller screens\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(e){return"left"===e.direction?"row":"row-reverse"})),N=((0,x.ZP)("div")(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  text-align: left;\n\n  @media only screen and (max-width: 768px) {\n    text-align: center; // Center-align text on smaller screens\n    margin-bottom: 2rem; // Add spacing between stacked items\n  }\n"]))),(0,x.ZP)("div")(s||(s=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n\n  button {\n    margin: 0 auto;\n  }\n\n  @media only screen and (max-width: 768px) {\n    display: none; // Hide the button on screens smaller than 768px\n  }\n"]))),(0,x.ZP)("h6")(c||(c=(0,v.Z)(["\n  margin: 1rem 0 1rem 0;\n  font-size: 20px;\n  font-weight: normal;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 30px; // Reduce title size on smaller screens\n  }\n"])))),j=(0,x.ZP)("p")(l||(l=(0,v.Z)(["\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: #bababa;\n  //color: gray;\n\n  //color: #18216d;\n  \n  @media only screen and (max-width: 768px) {\n    font-size: 18px; // Reduce title size on smaller screens\n  }\n"]))),C=(0,x.ZP)("li")(u||(u=(0,v.Z)(["\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: #808080;\n  //color: #18216d;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px; // Reduce title size on smaller screens\n  }\n"]))),P=(x.ZP.img(d||(d=(0,v.Z)(["\n  \n  width: ",";  // Default width is 100%, but it can be overridden\n  height: ",";  // Default height is 200px, but it can be overridden\n  object-fit: cover;  // Maintain aspect ratio and cover the given area\n  object-position: center;  // Center the image\n  border-radius: 5px;  // Optional: add some border-radius\n"])),(function(e){return e.width||"100%"}),(function(e){return e.height||"200px"})),n(184)),E=(p.Z.Meta,(0,y.Z)()((function(e){var t=e.content,n=void 0===t?[]:t,o=(e.t,e.id),a=e.fade_direction;return(0,P.jsx)(w,{children:(0,P.jsx)(f.pT,{direction:a,triggerOnce:!0,children:(0,P.jsx)("div",{children:(0,P.jsx)(k,{justify:"space-between",align:"middle",id:o,direction:"left",gutter:[24,24],children:n.map((function(e,t){var n={text:"A"===e.category?"A. Machine Learning":"B"===e.category?"B. Computational Linguistics":"C. Data-Driven Linguistics",color:"A"===e.category?"default":"B"===e.category?"cyan":"green"};return(0,P.jsx)(h.Z,{lg:24,md:24,sm:24,xs:24,children:(0,P.jsx)(g.Z.Ribbon,{text:n.text,placement:"start",color:n.color,children:(0,P.jsxs)(p.Z,{hoverable:!0,children:[(0,P.jsx)(N,{style:{maxWidth:"100%"},children:e.title}),(0,P.jsx)(Z,{children:e.abstract}),e.references&&e.references.length>0&&(0,P.jsxs)("div",{children:[(0,P.jsx)(j,{children:"Reference:"}),(0,P.jsx)("ol",{children:e.references.map((function(e,t){return(0,P.jsx)(C,{children:e.text},t)}))})]}),e.contacts&&(0,P.jsxs)("div",{children:[(0,P.jsx)(j,{children:"Contact:"}),(0,P.jsx)("ul",{children:e.contacts.map((function(e,t){return(0,P.jsx)(C,{children:e},t)}))})]})]})})},t)}))})})})})}))),M=JSON.parse('[{"title":"Probing pre-trained language models for specialist knowledge","abstract":"Knowledge probing is crucial for understanding the knowledge transfer mechanism behind the pre-trained language models (PLMs) [5]. Despite the growing progress of probing knowledge for PLMs in the general domain, specialised areas such as the biomedical domain are vastly under-explored. To this end, we have proposed a contrastive probing approach [1] that can well address the multi-token issue existing in biomedical knowledge probing tasks. Our initial findings [1] indicate that the real lower bound on the amount of factual knowledge encoded by PLMs is higher than we estimated. Meanwhile, prompt-based probing approaches such as AutoPrompt [3], SoftPrompt [4] and OptiPrompt [5] have been investigated for further improving such lower bound with additional labelled data for fine-tuning prompts. In this project, we will continue to analyse and improve our estimation of the lower bound by optimising both the encoding space (e.g. using our self-supervised contrastive learning technique [1]) and the input space (e.g. using the prompt optimising techniques) [2-4].","references":[{"text":"Zaiqiao Meng, Fangyu Liu, Ehsan Shareghi, Yixuan Su, Charlotte Collins, Nigel Collier. Rewire-then-Probe: A Contrastive Recipe for Probing Biomedical Knowledge of Pre-trained Language Models","link":"https://arxiv.org/abs/2110.08173"},{"text":"Taylor Shin, Yasaman Razeghi, Robert L Logan IV, Eric Wallace, and Sameer Singh. 2020a. Auto-prompt: Eliciting knowledge from language models with automatically generated prompts.","link":"https://aclanthology.org/2020.emnlp-main.346/"},{"text":"Guanghui Qin and Jason Eisner. 2021. Learning how to ask: Querying LMS with mixtures of soft prompts.","link":"https://aclanthology.org/2021.naacl-main.410/"},{"text":"Zexuan Zhong, Dan Friedman, and Danqi Chen. 2021. Factual probing is [mask]: Learning vs. learning to recall.","link":"https://aclanthology.org/2021.naacl-main.398/"},{"text":"Fabio Petroni, Tim Rockta\u0308schel, Sebastian Riedel, Patrick Lewis, Anton Bakhtin, Yuxiang Wu, and Alexander Miller. 2019. Language models as knowledge bases?","link":"https://aclanthology.org/D19-1250/"}],"contacts":["Nigel Collier (nhc30@cam.ac.uk)","Zaiqiao Meng (zm324@cam.ac.uk)"],"category":"A"},{"title":"Identifying focal geographic locations in news event reports","abstract":"News event reports contain many location identifiers including the name of the place where the event is occurring, but also other locations such as a victim\'s country of origin and where they have travelled through, the location of the reporting organisation, the location of agencies, as well as demonyms identifying people involved in the event. Locations are reported at various levels of granularity such as country, province, city and town depending on the assumed readership of the news report. The goals of this work are: (a) to look through a sample of GeoWebNews data (https://github.com/milangritta/Pragmatic-Guide-to-Geoparsing-Evaluation), and to use this to produce a gold standard for evaluation; (b) to survey what is already known about the challenge of identifying location entities (toponyms) in the text (e.g. see Milan Gritta\'s published works as a starting point); (c) to use state of the art tools (e.g. SpaCy, FLAIR) to perform named entity recognition for locations on the document, possibly linking entities to geographic coordinates as an extension; (d) to develop a classifier to identify focal locations for events (if the news report does report an event); (e) to identify categories of errors in the outputs of the state of the art classifier; (f) suggest improved strategies based on what you have learnt.","references":[{"text":"Gritta, M., Pilehvar, M. T., Limsopatham, N., & Collier, N. (2018). What\u2019s missing in geographical parsing?","link":"https://link.springer.com/article/10.1007/s10579-017-9385-8"},{"text":"Gritta, M., Pilehvar, M. T., & Collier, N. (2020). A pragmatic guide to geoparsing evaluation.","link":"https://link.springer.com/article/10.1007/s10579-019-09475-3"},{"text":"Gritta, M. (2019). Where are you talking about? advances and challenges of geographic analysis of text with application to disease monitoring.","link":"https://www.repository.cam.ac.uk/items/6915c499-6c6e-4123-ad3c-9e37de65e6a5"},{"text":"Gritta, M., Pilehvar, M. T., Limsopatham, N., & Collier, N. (2017, July). Vancouver welcomes you! Minimalist location metonymy resolution.\\n","link":"https://aclanthology.org/P17-1115/"}],"contacts":["Nigel Collier (nhc30@cam.ac.uk)"],"category":"B"},{"title":"Typology of subjects from Universal Dependencies","abstract":"The notion of \\"subject\\" has been debated for long, and yet its exact definition is still an open research question: cross-lingually, subjects vary their position with respect to the verb and the object, their morphosyntactic alignment, their anaphoric reductions based on the transitivity of the verb and the range of constructions they may appear in. In the past, quantitative linguistic studies on subject typology were hindered by the lack of syntactic annotation in large multilingual corpora. Now the Universal Dependencies can provide the annotations. The student will perform a quantitative analysis of subjects and their properties (animacy, position, topicality, etc.) within this resource and will look for interesting cross-lingual correlations.","references":[],"contacts":["Edoardo Ponti (ep490@cam.ac.uk)","Anna Korhonen (alk23@cam.ac.uk)"],"category":"C"}]'),O=(0,m.lazy)((function(){return Promise.resolve().then(n.bind(n,2478))})),S=(0,m.lazy)((function(){return n.e(423).then(n.bind(n,4423))})),L=function(){return(0,P.jsxs)(O,{children:[(0,P.jsx)(S,{direction:"right",title:"Student Projects",content:"We offer research projects for MPhil students, some of which can also be adapted for Part II and Part III students. Because we supervise students from a variety of courses in Cambridge, we have classified our projects according to the educational background and the skills required.",button:[],icon:"chia_presentation.jpeg",id:"home",fade_direction:"up"}),(0,P.jsx)(E,{fade_direction:"up",content:M,id:"student_project_list"})]})}},5594:function(e,t,n){n.d(t,{Z:function(){return k}});var o=n(4942),a=n(1002),i=n(7462),r=n(1694),s=n.n(r),c=n(8568),l=n(2791),u=n(1929),d=n(1113),m=n(4466);function p(e){return m.Y.includes(e)}var h=function(e){var t,n=e.className,a=e.prefixCls,r=e.style,c=e.color,d=e.children,m=e.text,h=e.placement,g=void 0===h?"end":h,f=l.useContext(u.E_),y=f.getPrefixCls,v=f.direction,b=y("ribbon",a),x=p(c),w=s()(b,"".concat(b,"-placement-").concat(g),(t={},(0,o.Z)(t,"".concat(b,"-rtl"),"rtl"===v),(0,o.Z)(t,"".concat(b,"-color-").concat(c),x),t),n),Z={},k={};return c&&!x&&(Z.background=c,k.color=c),l.createElement("div",{className:"".concat(b,"-wrapper")},d,l.createElement("div",{className:w,style:(0,i.Z)((0,i.Z)({},Z),r)},l.createElement("span",{className:"".concat(b,"-text")},m),l.createElement("div",{className:"".concat(b,"-corner"),style:k})))},g=n(9439);function f(e){var t,n=e.prefixCls,o=e.value,a=e.current,i=e.offset,r=void 0===i?0:i;return r&&(t={position:"absolute",top:"".concat(r,"00%"),left:0}),l.createElement("span",{style:t,className:s()("".concat(n,"-only-unit"),{current:a})},o)}function y(e,t,n){for(var o=e,a=0;(o+10)%10!==t;)o+=n,a+=n;return a}function v(e){var t,n,o=e.prefixCls,a=e.count,r=e.value,s=Number(r),c=Math.abs(a),u=l.useState(s),d=(0,g.Z)(u,2),m=d[0],p=d[1],h=l.useState(c),v=(0,g.Z)(h,2),b=v[0],x=v[1],w=function(){p(s),x(c)};if(l.useEffect((function(){var e=setTimeout((function(){w()}),1e3);return function(){clearTimeout(e)}}),[s]),m===s||Number.isNaN(s)||Number.isNaN(m))t=[l.createElement(f,(0,i.Z)({},e,{key:s,current:!0}))],n={transition:"none"};else{t=[];for(var Z=s+10,k=[],N=s;N<=Z;N+=1)k.push(N);var j=k.findIndex((function(e){return e%10===m}));t=k.map((function(t,n){var o=t%10;return l.createElement(f,(0,i.Z)({},e,{key:t,value:o,offset:n-j,current:n===j}))})),n={transform:"translateY(".concat(-y(m,s,b<c?1:-1),"00%)")}}return l.createElement("span",{className:"".concat(o,"-only"),style:n,onTransitionEnd:w},t)}var b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},x=function(e){var t=e.prefixCls,n=e.count,o=e.className,a=e.motionClassName,r=e.style,c=e.title,m=e.show,p=e.component,h=void 0===p?"sup":p,g=e.children,f=b(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),y=(0,l.useContext(u.E_).getPrefixCls)("scroll-number",t),x=(0,i.Z)((0,i.Z)({},f),{"data-show":m,style:r,className:s()(y,o,a),title:c}),w=n;if(n&&Number(n)%1===0){var Z=String(n).split("");w=Z.map((function(e,t){return l.createElement(v,{prefixCls:y,count:Number(n),value:e,key:Z.length-t})}))}return r&&r.borderColor&&(x.style=(0,i.Z)((0,i.Z)({},r),{boxShadow:"0 0 0 1px ".concat(r.borderColor," inset")})),g?(0,d.Tm)(g,(function(e){return{className:s()("".concat(y,"-custom-component"),null===e||void 0===e?void 0:e.className,a)}})):l.createElement(h,x,w)},w=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},Z=function(e){var t,n,r=e.prefixCls,m=e.scrollNumberPrefixCls,h=e.children,g=e.status,f=e.text,y=e.color,v=e.count,b=void 0===v?null:v,Z=e.overflowCount,k=void 0===Z?99:Z,N=e.dot,j=void 0!==N&&N,C=e.size,P=void 0===C?"default":C,E=e.title,M=e.offset,O=e.style,S=e.className,L=e.showZero,T=void 0!==L&&L,z=w(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),R=l.useContext(u.E_),I=R.getPrefixCls,A=R.direction,D=I("badge",r),_=b>k?"".concat(k,"+"):b,q="0"===_||0===_,G=(null!==g&&void 0!==g||null!==y&&void 0!==y)&&(null===b||q&&!T),B=j&&!q,W=B?"":_,F=(0,l.useMemo)((function(){return(null===W||void 0===W||""===W||q&&!T)&&!B}),[W,q,T,B]),Y=(0,l.useRef)(b);F||(Y.current=b);var J=Y.current,K=(0,l.useRef)(W);F||(K.current=W);var Q=K.current,U=(0,l.useRef)(B);F||(U.current=B);var V=(0,l.useMemo)((function(){if(!M)return(0,i.Z)({},O);var e={marginTop:M[1]};return"rtl"===A?e.left=parseInt(M[0],10):e.right=-parseInt(M[0],10),(0,i.Z)((0,i.Z)({},e),O)}),[A,M,O]),H=null!==E&&void 0!==E?E:"string"===typeof J||"number"===typeof J?J:void 0,X=F||!f?null:l.createElement("span",{className:"".concat(D,"-status-text")},f),$=J&&"object"===(0,a.Z)(J)?(0,d.Tm)(J,(function(e){return{style:(0,i.Z)((0,i.Z)({},V),e.style)}})):void 0,ee=s()((t={},(0,o.Z)(t,"".concat(D,"-status-dot"),G),(0,o.Z)(t,"".concat(D,"-status-").concat(g),!!g),(0,o.Z)(t,"".concat(D,"-status-").concat(y),p(y)),t)),te={};y&&!p(y)&&(te.background=y);var ne=s()(D,(n={},(0,o.Z)(n,"".concat(D,"-status"),G),(0,o.Z)(n,"".concat(D,"-not-a-wrapper"),!h),(0,o.Z)(n,"".concat(D,"-rtl"),"rtl"===A),n),S);if(!h&&G){var oe=V.color;return l.createElement("span",(0,i.Z)({},z,{className:ne,style:V}),l.createElement("span",{className:ee,style:te}),f&&l.createElement("span",{style:{color:oe},className:"".concat(D,"-status-text")},f))}return l.createElement("span",(0,i.Z)({},z,{className:ne}),h,l.createElement(c.ZP,{visible:!F,motionName:"".concat(D,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,a=I("scroll-number",m),r=U.current,c=s()((t={},(0,o.Z)(t,"".concat(D,"-dot"),r),(0,o.Z)(t,"".concat(D,"-count"),!r),(0,o.Z)(t,"".concat(D,"-count-sm"),"small"===P),(0,o.Z)(t,"".concat(D,"-multiple-words"),!r&&Q&&Q.toString().length>1),(0,o.Z)(t,"".concat(D,"-status-").concat(g),!!g),(0,o.Z)(t,"".concat(D,"-status-").concat(y),p(y)),t)),u=(0,i.Z)({},V);return y&&!p(y)&&((u=u||{}).background=y),l.createElement(x,{prefixCls:a,show:!F,motionClassName:n,className:c,count:Q,title:H,style:u,key:"scrollNumber"},$)})),X)};Z.Ribbon=h;var k=Z}}]);
//# sourceMappingURL=757.a9f9ba39.chunk.js.map