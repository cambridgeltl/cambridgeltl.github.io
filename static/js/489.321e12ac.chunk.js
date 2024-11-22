"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[489,609,606],{5224:function(e,n,r){r.d(n,{z:function(){return o}});var a,i=r(168),t=(0,r(1191).ZP)("button")(a||(a=(0,i.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n"])),(function(e){return e.color||"#2e186a"}),(function(e){return e.color?"#2E186A":"#fff"})),s=r(184),o=function(e){var n=e.color,r=e.children,a=e.onClick;return(0,s.jsx)(t,{color:n,onClick:a,children:r})}},4609:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var a=r(8786),i=r(9603),t=r(4720),s=r(1758),o=r(4942),l=r(4165),d=r(5861),c=r(1413),u=r(9439),m=r(2791),p=r(8863),h={name:"",email:"",message:""};function x(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var g,Z,f,v,j,b,y,w,k,C,P,S,z=r(5224),E=r(168),O=r(1191),M=(0,O.ZP)("p")(g||(g=(0,E.Z)(["\n  margin-top: 1.5rem;\n"]))),Y=(0,O.ZP)("div")(Z||(Z=(0,E.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),q=(0,O.ZP)("div")(f||(f=(0,E.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),F=r(184),N=(0,t.Z)()((function(e){var n=e.title,r=e.content,a=e.t;return(0,F.jsxs)(Y,{children:[(0,F.jsx)("h6",{children:a(n)}),(0,F.jsx)(q,{children:(0,F.jsx)(M,{children:a(r)})})]})})),T=(0,O.ZP)("div")(v||(v=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),_=(0,O.ZP)("input")(j||(j=(0,E.Z)(["\n  font-size: 0.875rem;\n"]))),A=(0,O.ZP)("div")(b||(b=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),D=(0,O.ZP)("textarea")(y||(y=(0,E.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),J=(0,O.ZP)("label")(w||(w=(0,E.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),B=(0,t.Z)()((function(e){var n=e.name,r=e.placeholder,a=e.onChange,i=e.t;return(0,F.jsxs)(T,{children:[(0,F.jsx)(J,{htmlFor:n,children:i(n)}),(0,F.jsx)(_,{placeholder:i(r),name:n,id:n,onChange:a})]})})),G=(0,t.Z)()((function(e){var n=e.name,r=e.placeholder,a=e.onChange,i=e.t;return(0,F.jsxs)(A,{children:[(0,F.jsx)(J,{htmlFor:n,children:i(n)}),(0,F.jsx)(D,{placeholder:i(r),id:n,name:n,onChange:a})]})})),H=(0,O.ZP)("div")(k||(k=(0,E.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),I=(0,O.ZP)("form")(C||(C=(0,E.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),K=(0,O.ZP)("span")(P||(P=(0,E.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),L=(0,O.ZP)("div")(S||(S=(0,E.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),Q=(0,t.Z)()((function(e){var n=e.title,r=e.content,t=e.id,g=e.t,Z=function(e){var n=(0,m.useState)({values:(0,c.Z)({},h),errors:(0,c.Z)({},h)}),r=(0,u.Z)(n,2),a=r[0],i=r[1],t=function(){var n=(0,d.Z)((0,l.Z)().mark((function n(r){var t,s;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t=a.values,s=e(t),i((function(e){return(0,c.Z)((0,c.Z)({},e),{},{errors:s})})),n.prev=5,!Object.values(s).every((function(e){return""===e}))){n.next=11;break}return n.next=9,fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 9:n.sent.ok?(r.target.reset(),i((function(){return{values:(0,c.Z)({},h),errors:(0,c.Z)({},h)}})),p.Z.success({message:"Success",description:"Your message has been sent!"})):p.Z.error({message:"Error",description:"There was an error sending your message, please try again later."});case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(5),p.Z.error({message:"Error",description:"Failed to submit form. Please try again later."});case 16:case"end":return n.stop()}}),n,null,[[5,13]])})));return function(e){return n.apply(this,arguments)}}();return{handleChange:function(e){e.persist();var n=e.target,r=n.name,a=n.value;i((function(e){return(0,c.Z)((0,c.Z)({},e),{},{values:(0,c.Z)((0,c.Z)({},e.values),{},(0,o.Z)({},r,a)),errors:(0,c.Z)((0,c.Z)({},e.errors),{},(0,o.Z)({},r,""))})}))},handleSubmit:t,values:a.values,errors:a.errors}}(x),f=Z.values,v=Z.errors,j=Z.handleChange,b=Z.handleSubmit,y=function(e){var n=e.type,r=v[n];return(0,F.jsx)(K,{children:r})};return(0,F.jsx)(H,{id:t,children:(0,F.jsxs)(a.Z,{justify:"space-between",align:"middle",children:[(0,F.jsx)(i.Z,{lg:12,md:11,sm:24,xs:24,children:(0,F.jsx)(s.Mi,{direction:"left",triggerOnce:!0,children:(0,F.jsx)(N,{title:n,content:r})})}),(0,F.jsx)(i.Z,{lg:12,md:12,sm:24,xs:24,children:(0,F.jsx)(s.Mi,{direction:"right",triggerOnce:!0,children:(0,F.jsxs)(I,{autoComplete:"off",onSubmit:b,children:[(0,F.jsxs)(i.Z,{span:24,children:[(0,F.jsx)(B,{type:"text",name:"name",placeholder:"Your Name",value:f.name||"",onChange:j}),(0,F.jsx)(y,{type:"name"})]}),(0,F.jsxs)(i.Z,{span:24,children:[(0,F.jsx)(B,{type:"text",name:"email",placeholder:"Your Email",value:f.email||"",onChange:j}),(0,F.jsx)(y,{type:"email"})]}),(0,F.jsxs)(i.Z,{span:24,children:[(0,F.jsx)(G,{placeholder:"Your Message",value:f.message||"",name:"message",onChange:j}),(0,F.jsx)(y,{type:"message"})]}),(0,F.jsx)(L,{children:(0,F.jsx)(z.z,{name:"submit",children:g("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=489.321e12ac.chunk.js.map