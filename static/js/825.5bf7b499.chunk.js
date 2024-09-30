"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[825],{5961:(e,t,i)=>{i.d(t,{A:()=>o});var a=i(3188);const n=(0,i(1529).Ay)(a.Ay)`
   background: #5285EC 0% 0% no-repeat padding-box;
   border-radius: 8px;
   border-color: #5285EC;
   opacity: 1;
   color: #FFFFFF;
   width: ${e=>e.width};
   height: ${e=>e.height};
`;var d=i(579);const o=e=>{let{btnText:t,width:i,height:a,onClick:o}=e;return(0,d.jsx)(n,{onClick:()=>o(),width:i,height:a,children:t})}},1087:(e,t,i)=>{i.d(t,{A:()=>o});var a=i(5444);const n=(0,i(1529).Ay)(a.A)`
    margin-bottom: 12px;
    border-radius: 8px;
    height: 40px;
`;var d=i(579);const o=e=>{let{placeholder:t,onChange:i,type:a,name:o,id:r,value:s}=e;return(0,d.jsx)(n,{value:s,name:o,id:r,onChange:i,type:a,placeholder:t,variant:"filled"})}},2825:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(5043),n=i(1529),d=i(9195),o=i(7586);const r=(0,n.Ay)(d.A)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;
    opacity: 1;
    width: 350px;
    padding-right: 4px;
    padding-bottom: 9px;

    @media (max-width: ${o.E.mobile}) {
        max-width: 100%;
        text-align: center;
    }
`,s=n.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    font-family: 'Montserrat';

  @media (max-width: ${o.E.mobile}) {
    padding: 0 10px; 
  }
`,h=n.Ay.div`
    text-align: left;
    letter-spacing: 0px;
    color: #537178;
    opacity: 1;
    font-size: 20px;
    margin-bottom: 24px;
`;var l=i(3892),p=i(1087),x=i(5961),c=i(899);const m=c.Ik().shape({id:c.Yj().required("This Feild is Required!"),name:c.Yj().required("This Feild is Required!")});var g=i(3211),u=i(3536),b=i(5336),y=i(3216),f=i(5970),v=i(579);const A=()=>{const[e,t]=(0,a.useState)(!1),i=(0,y.Zp)(),n=(0,l.Wx)({initialValues:{id:"",name:""},validationSchema:m,onSubmit:e=>{t(!0),(0,g._5)(f.S,e),setTimeout((()=>{i("/dashboard"),t(!1)}),1e3)}});(0,a.useEffect)((()=>{t(!0),d()}),[]);const d=()=>{const e=(0,g.S7)(f.S);(0,u.isEmpty)(e)||i("/dashboard"),t(!1)};return(0,v.jsxs)(s,{children:[(0,v.jsx)(b.A,{open:e}),(0,v.jsxs)(r,{children:[(0,v.jsx)(h,{children:"Login"}),(0,v.jsx)(p.A,{name:"id",id:"id",onChange:n.handleChange,placeholder:"Id"}),(0,v.jsx)(p.A,{name:"name",id:"name",onChange:n.handleChange,placeholder:"Name"}),(0,v.jsx)(x.A,{onClick:n.handleSubmit,btnText:"Login",width:"100%",height:"40px"})]})]})}},7586:(e,t,i)=>{i.d(t,{E:()=>a});const a={mobile:"576px",tablet:"992px",laptop:"1024px",desktop:"2560px"}}}]);
//# sourceMappingURL=825.5bf7b499.chunk.js.map