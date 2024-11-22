"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[636],{5224:function(e,n,t){t.d(n,{z:function(){return s}});var i,a=t(168),o=(0,t(1191).ZP)("button")(i||(i=(0,a.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n"])),(function(e){return e.color||"#2e186a"}),(function(e){return e.color?"#2E186A":"#fff"})),r=t(184),s=function(e){var n=e.color,t=e.children,i=e.onClick;return(0,r.jsx)(o,{color:n,onClick:i,children:t})}},9636:function(e,n,t){t.r(n),t.d(n,{default:function(){return je}});var i,a,o,r,s,l,d,c,h,m,u,p,f,x,g,w,v,b,Z,y,j,k,A,P,z,S,T,C,L,I,R,M,E,F,J,_=t(2791),W=t(4260),N=t(9439),O=t(9603),H=t(5594),U=t(4350),B=t(2419),D=t(1758),X=t(4720),G=t(5224),V=t(168),q=t(8786),Q=t(1191),Y=(0,Q.ZP)("section")(i||(i=(0,V.Z)(["\n  position: relative;\n  padding: 4rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),K=(0,Q.ZP)("p")(a||(a=(0,V.Z)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),$=(0,Q.ZP)(q.Z)(o||(o=(0,V.Z)(["\n  flex-direction: ",";\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column; // Stack columns vertically for smaller screens\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(e){return"left"===e.direction?"row":"row-reverse"})),ee=(0,Q.ZP)("div")(r||(r=(0,V.Z)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 575px) {\n    padding-top: 4rem;\n  }\n"]))),ne=((0,Q.ZP)("div")(s||(s=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),(0,Q.ZP)("h6")(l||(l=(0,V.Z)(['\n  font-size: 15px;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n  text-transform: uppercase;\n  color: #000;\n  \n  font-family: "Motiva Sans Light", sans-serif;\n']))),(0,Q.ZP)("p")(d||(d=(0,V.Z)(["\n  font-size: 13px;\n"]))),(0,Q.ZP)("div")(c||(c=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n\n  @media screen and (min-width: 1024px) {\n    max-width: 80%;\n  }\n\n  button:last-child {\n    margin-left: 0px;\n  }\n"])))),te=(0,Q.ZP)("h6")(h||(h=(0,V.Z)(["\n  font-size: 20px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),ie=(0,Q.ZP)("p")(m||(m=(0,V.Z)(["\n  font-size: 20px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),ae=(0,Q.ZP)("p")(u||(u=(0,V.Z)(["\n  font-size: 18px; // Adjust this value to match the button size\n  color: #000;\n\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),oe=(0,Q.ZP)("u")(p||(p=(0,V.Z)(["\n  color: #000;\n\n  font-size: 18px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),re=t(184),se=(0,X.Z)()((function(e){var n,t,i=e.title,a=e.content,o=e.instruction,r=(e.button,e.t),s=e.id,l=e.direction,d=e.fade_direction,c=(0,_.useState)(!1),h=(0,N.Z)(c,2),m=h[0],u=h[1];return(0,re.jsx)(Y,{children:(0,re.jsx)(D.pT,{direction:d,triggerOnce:!0,children:(0,re.jsx)("div",{children:(0,re.jsxs)($,{justify:"space-between",align:"middle",id:s,direction:l,children:[(0,re.jsx)(O.Z,{lg:12,md:11,sm:12,xs:24,children:(0,re.jsx)(ee,{children:(0,re.jsx)(H.Z.Ribbon,{text:a.venue,children:(0,re.jsxs)(U.Z,{size:"small",children:[(0,re.jsx)(te,{style:{maxWidth:"90%"},children:a.title}),(0,re.jsx)(B.Z,{placement:"right",color:"#18216d",title:a.bio,overlayStyle:{maxWidth:"900px"},showArrow:!1,children:(0,re.jsx)(ie,{children:a.speaker+" ("+a.affiliation+")"})}),(0,re.jsx)(ie,{children:a.time+", "+a.date}),a.place&&(0,re.jsx)(ie,{children:a.place}),(0,re.jsx)("br",{}),!m&&(0,re.jsxs)("div",{children:[(0,re.jsx)(ae,{children:"Abstract: "+(n=a.abstract,t=200,n.length>t?n.substring(0,t)+"...":n)}),(0,re.jsx)(oe,{onClick:function(){u(!m)},children:"Find more..."})]}),(0,re.jsx)(ae,{children:m&&"Abstract: "+a.abstract}),(0,re.jsx)(ne,{children:a.link&&(0,re.jsx)(G.z,{onClick:function(){return window.open(a.link,"_blank")},children:"Join Zoom Meeting"})})]})})})}),(0,re.jsx)(O.Z,{lg:11,md:11,sm:11,xs:24,children:(0,re.jsxs)(ee,{children:[(0,re.jsx)("h6",{children:r(i)}),(0,re.jsx)(K,{children:o})]})})]})})})})})),le=(0,Q.ZP)("section")(f||(f=(0,V.Z)(["\n  position: relative;\n  padding: 4rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),de=((0,Q.ZP)("p")(x||(x=(0,V.Z)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),(0,Q.ZP)(q.Z)(g||(g=(0,V.Z)(["\n  flex-direction: ",";\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column; // Stack columns vertically for smaller screens\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(e){return"left"===e.direction?"row":"row-reverse"}))),ce=(0,Q.ZP)("div")(w||(w=(0,V.Z)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 575px) {\n    padding-top: 4rem;\n  }\n"]))),he=((0,Q.ZP)("div")(v||(v=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),(0,Q.ZP)("h6")(b||(b=(0,V.Z)(['\n  font-size: 15px;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n  text-transform: uppercase;\n  color: #000;\n  \n  font-family: "Motiva Sans Light", sans-serif;\n']))),(0,Q.ZP)("p")(Z||(Z=(0,V.Z)(["\n  font-size: 13px;\n"]))),(0,Q.ZP)("div")(y||(y=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n\n  @media screen and (min-width: 1024px) {\n    max-width: 80%;\n  }\n\n  button:last-child {\n    margin-left: 0px;\n  }\n"]))),(0,Q.ZP)("h6")(j||(j=(0,V.Z)(["\n  padding: 0rem 0 2rem;\n  //font-size: 30px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"])))),me=(0,Q.ZP)("p")(k||(k=(0,V.Z)(["\n  font-size: 20px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),ue=(0,Q.ZP)("h6")(A||(A=(0,V.Z)(["\n  font-size: 20px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),pe=t(2941),fe=((0,Q.ZP)("section")(P||(P=(0,V.Z)(["\n  position: relative;\n  padding: 4rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),(0,Q.ZP)("p")(z||(z=(0,V.Z)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),(0,Q.ZP)(q.Z)(S||(S=(0,V.Z)(["\n  flex-direction: ",";\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column; // Stack columns vertically for smaller screens\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(e){return"left"===e.direction?"row":"row-reverse"})),(0,Q.ZP)("div")(T||(T=(0,V.Z)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 575px) {\n    padding-top: 4rem;\n  }\n"]))),(0,Q.ZP)("div")(C||(C=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),(0,Q.ZP)("h6")(L||(L=(0,V.Z)(['\n  font-size: 15px;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n  text-transform: uppercase;\n  color: #000;\n  \n  font-family: "Motiva Sans Light", sans-serif;\n']))),(0,Q.ZP)("p")(I||(I=(0,V.Z)(["\n  font-size: 13px;\n"]))),(0,Q.ZP)("div")(R||(R=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n\n  @media screen and (min-width: 1024px) {\n    max-width: 80%;\n  }\n\n  button:last-child {\n    margin-left: 0px;\n  }\n"]))),(0,Q.ZP)("h6")(M||(M=(0,V.Z)(["\n  font-size: 20px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"])))),xe=(0,Q.ZP)("p")(E||(E=(0,V.Z)(["\n  \n  font-size: 20px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),ge=(0,Q.ZP)("p")(F||(F=(0,V.Z)(["\n  font-size: 18px; // Adjust this value to match the button size\n  color: #000;\n\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),we=(0,Q.ZP)("u")(J||(J=(0,V.Z)(["\n  color: #000;\n\n  font-size: 18px; // Adjust this value to match the button size\n  margin: 0;\n  font-weight: normal; // Adjust if needed to match the button\n"]))),ve=(0,X.Z)()((function(e){var n,t,i=e.content,a=e.show_detail,o=void 0===a||a,r=(0,_.useState)(!1),s=(0,N.Z)(r,2),l=s[0],d=s[1];return(0,re.jsx)(H.Z.Ribbon,{text:i.venue,children:(0,re.jsxs)(U.Z,{size:"small",children:[(0,re.jsx)(fe,{style:{maxWidth:"90%"},children:i.title}),(0,re.jsx)(B.Z,{placement:"right",color:"#18216d",title:i.bio,overlayStyle:{maxWidth:"900px"},showArrow:!1,children:(0,re.jsx)(xe,{children:i.speaker+" ("+i.affiliation+")"})}),(0,re.jsx)(xe,{children:i.time+", "+i.date}),i.place&&o&&(0,re.jsx)("div",{children:(0,re.jsx)(xe,{children:i.place})}),i.link&&o&&(0,re.jsx)("div",{children:(0,re.jsx)(ge,{children:(0,re.jsx)("a",{onClick:function(){return e=i.link,void navigator.clipboard.writeText(e).then((function(){pe.ZP.success("Copied Meeting Link to Clipboard!")})).catch((function(){pe.ZP.error("Failed to Copy!")}));var e},style:{cursor:"pointer",color:"#18216d",textDecoration:"underline"},children:"Copy Link"})})}),(0,re.jsx)("br",{}),!l&&o&&(0,re.jsxs)("div",{children:[(0,re.jsx)(ge,{children:"Abstract: "+(n=i.abstract,t=200,n.length>t?n.substring(0,t)+"...":n)}),(0,re.jsx)(we,{onClick:function(){d(!l)},children:"Find more..."})]}),(0,re.jsx)(ge,{children:l&&o&&"Abstract: "+i.abstract})]})})})),be=(0,X.Z)()((function(e){var n=e.upcoming_talks,t=void 0===n?[]:n,i=(e.completed_talks,e.t),a=e.id,o=e.direction,r=e.fade_direction;return(0,re.jsx)(le,{children:(0,re.jsx)(D.pT,{direction:r,triggerOnce:!0,children:(0,re.jsx)("div",{children:(0,re.jsxs)(de,{justify:"space-between",align:"top",id:a,direction:o,children:[(0,re.jsxs)(O.Z,{lg:12,md:12,sm:12,xs:24,children:[(0,re.jsx)(he,{children:i("Upcoming Talks")}),t.length>0&&t.map((function(e,n){return(0,re.jsx)(ce,{style:{marginBottom:"20px"},children:(0,re.jsx)(ve,{content:e,show_detail:!0})})}))]}),(0,re.jsx)(O.Z,{lg:11,md:11,sm:11,xs:24,children:(0,re.jsxs)(ce,{children:[(0,re.jsx)(he,{children:"Previous Talks"}),t.length>0&&t.map((function(e,n){return(0,re.jsx)(ce,{style:{marginBottom:"20px"},children:(0,re.jsxs)(U.Z,{size:"small",children:[(0,re.jsx)(ue,{style:{maxWidth:"90%"},children:e.title}),(0,re.jsx)(B.Z,{placement:"right",color:"#18216d",title:e.bio,overlayStyle:{maxWidth:"900px"},showArrow:!1,children:(0,re.jsx)(me,{children:e.speaker+" ("+e.affiliation+")"})}),(0,re.jsx)(me,{children:e.date})]})})}))]})})]})})})})})),Ze=(0,_.lazy)((function(){return Promise.resolve().then(t.bind(t,2478))})),ye=(0,_.lazy)((function(){return t.e(69).then(t.bind(t,8290))})),je=function(){var e=W.length>0?W[1]:null;return(0,re.jsxs)(Ze,{children:[(0,re.jsx)(ye,{direction:"right",title:"Seminars",content:"LTL seminars are held every Thursday during term time, either in person at the English Faculty Building or online. Some in-person seminars may also offer a hybrid option for remote participation. We welcome attendees from the University and the wider public.",button:[],icon:"LTL-seminar-2.jpeg",id:"home",fade_direction:"up"}),e&&(0,re.jsx)(se,{title:"Next Talk",content:e,id:"seminar",instruction:"Our seminars are held every Thursday from 11:00 AM to 12:00 PM during term time (unless otherwise specified). For more information about our talks, please visit our talks.cam page (talks.cam.ac.uk/show/index/60438).",direction:"left",fade_direction:"up"}),(0,re.jsx)(be,{upcoming_talks:W,completed_talks:W,id:"seminar_list",direction:"left",fade_direction:"up"})]})}},4260:function(e){e.exports=JSON.parse('[{"type":"seminar","title":"Generative AI for Science","speaker":"Greg Durrett","affiliation":"UT Austin Computer Science","link":"https://cam-ac-uk.zoom.us/j/97599459216?pwd=QTRsOWZCOXRTREVnbTJBdXVpOXFvdz09","venue":"online","place":"","date":"Thursday, 6 June 2024","time":"3 pm - 4 pm","abstract":"This talk will explore how we can develop and use generative AI to help researchers and clinicians. I will first discuss how LLMs can act as research co-advisors. Then I will present Dragonfly, our new architecture for large visual-language model that leverages multi-resolution Zoom to achieve state-of-the-art performance across several medical tasks. Finally, I will explore the role of language as the foundational data modality for science.","bio":"James Zou is an associate professor of Biomedical Data Science, CS, and EE at Stanford University. He is also the faculty director of Stanford AI4Health. He works on improving the foundations of ML by making models more trustworthy and reliable, as well as in-depth scientific and clinical applications. Many of his innovations are widely used in tech and biotech industries.  He has received a Sloan Fellowship, an NSF CAREER Award, two Chan-Zuckerberg Investigator Awards, a Top Ten Clinical Achievement Award, several best paper awards, and faculty awards from Google, Amazon, Tencent, and Adobe. His research has also been profiled in popular press, including the NY Times, WSJ, and WIRED."},{"type":"seminar","title":"Generative AI for Science","speaker":"James Zou","affiliation":"Stanford University","link":"https://cam-ac-uk.zoom.us/j/97599459216?pwd=QTRsOWZCOXRTREVnbTJBdXVpOXFvdz09","venue":"online","place":"","date":"Thursday, 6 June 2024","time":"3 pm - 4 pm","abstract":"This talk will explore how we can develop and use generative AI to help researchers and clinicians. I will first discuss how LLMs can act as research co-advisors. Then I will present Dragonfly, our new architecture for large visual-language model that leverages multi-resolution Zoom to achieve state-of-the-art performance across several medical tasks. Finally, I will explore the role of language as the foundational data modality for science.","bio":"James Zou is an associate professor of Biomedical Data Science, CS, and EE at Stanford University. He is also the faculty director of Stanford AI4Health. He works on improving the foundations of ML by making models more trustworthy and reliable, as well as in-depth scientific and clinical applications. Many of his innovations are widely used in tech and biotech industries.  He has received a Sloan Fellowship, an NSF CAREER Award, two Chan-Zuckerberg Investigator Awards, a Top Ten Clinical Achievement Award, several best paper awards, and faculty awards from Google, Amazon, Tencent, and Adobe. His research has also been profiled in popular press, including the NY Times, WSJ, and WIRED."},{"type":"seminar","title":"Practical and Specialised NLP Solutions: The Case of Social Media","speaker":"Jose Camacho-Collados","affiliation":"Cardiff University.","link":"https://cam-ac-uk.zoom.us/j/97599459216?pwd=QTRsOWZCOXRTREVnbTJBdXVpOXFvdz09","venue":"hybrid","place":"Room SR-24 in the English Faculty Building","date":"Thursday, 30 May 2024","time":"3 pm - 4 pm","abstract":"Large generative language models (LLMs) are currently ubiquitous in NLP research. However, when it comes to specific applications, these powerful models are often impractical and not always the optimal choice, and there may be more adequate solutions for specific problems. In this talk, I will advocate for practical and effective solutions in NLP. I will try to revisit the importance of high-quality data (including labelled data) and reliable evaluation benchmarks in the current LLM landscape. Using social media as a case study, I will explain some of the challenges arising from processing content in these platforms. The multilingual, dynamic, informal and multimodal nature of social media, as well as the constant influx of new content, means that standard techniques are seldom optimal, and specialised models are often required.","bio":"Jose Camacho-Collados is a Professor at Cardiff University, leading the Cardiff NLP group. Before joining Cardiff University, he completed his PhD in Sapienza University of Rome and was a Google AI PhD Fellow. Until recently, his research has focused on various semantics aspects in NLP with a distributional perspective. He wrote the \u201cEmbeddings in Natural Language Processing\\" book and is the General Chair of *SEM 2024. More related to the topic of the talk, in the last few years Jose has been working in social media analysis and applications, developing NLP tools specifically targeted to this domain."}]')}}]);
//# sourceMappingURL=636.910dc1a6.chunk.js.map