"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[27],{5961:(t,e,a)=>{a.d(e,{A:()=>r});var i=a(3188);const n=(0,a(1529).Ay)(i.Ay)`
   background: #5285EC 0% 0% no-repeat padding-box;
   border-radius: 8px;
   border-color: #5285EC;
   opacity: 1;
   color: #FFFFFF;
   width: ${t=>t.width};
   height: ${t=>t.height};
`;var s=a(579);const r=t=>{let{btnText:e,width:a,height:i,onClick:r}=t;return(0,s.jsx)(n,{onClick:()=>r(),width:a,height:i,children:e})}},1087:(t,e,a)=>{a.d(e,{A:()=>r});var i=a(5444);const n=(0,a(1529).Ay)(i.A)`
    margin-bottom: 12px;
    border-radius: 8px;
    height: 40px;
`;var s=a(579);const r=t=>{let{placeholder:e,onChange:a,type:i,name:r,id:o,value:d}=t;return(0,s.jsx)(n,{value:d,name:r,id:o,onChange:a,type:i,placeholder:e,variant:"filled"})}},1027:(t,e,a)=>{a.r(e),a.d(e,{default:()=>jt});var i=a(5043),n=a(3722),s=a(1529),r=a(8632),o=a(3188),d=a(7586);const l=s.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; 
  padding: 0 20px;
  box-shadow: 0 1px 4px #00000029; 
  height: 72px; 

  
  @media (max-width: ${d.E.tablet}) {
    padding: 0 10px !important;  
  }
`,A=s.Ay.div`
  display: flex;
  align-items: center;
`,x=(0,s.Ay)(r.A)`
    width: 40px;
    height: 40px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,p=s.Ay.span`
  font-size: 18px;
  color: #555;
  margin-left: 12px;

  @media (max-width: 768px) {
    font-size: 16px; 
    margin-left: 8px;
  }
`,c=s.Ay.div`
  display: flex;
  align-items: center;
`,h=(0,s.Ay)(o.Ay)`
  font-size: 16px;
  color: #555;

  @media (${d.E.tablet}) {
    font-size: 14px;
  }
`;var g=a(3211),m=a(5970),u=a(3536),f=a(3216),k=a(3003);const b=(t,e)=>{const a={userId:t,tasks:e};(0,g.XO)(m.n,a)};var y=a(7773),w=a(2073);const j=t=>({type:y.xB,tasks:t}),C=()=>t=>{t({type:y.JT})};var v=a(579);const E=(0,k.Ng)(null,(t=>({clearTasks:()=>t(C())})))((t=>{let{clearTasks:e}=t;const i=(0,f.Zp)();return(0,v.jsxs)(l,{children:[(0,v.jsxs)(A,{children:[(0,v.jsx)(x,{size:48,src:a(5572),icon:(0,v.jsx)(n.A,{})}),(0,v.jsx)(p,{children:(()=>{const t=(0,g.S7)(m.S);return(0,u.get)(t,"name","")})()})]}),(0,v.jsx)(c,{children:(0,v.jsx)(h,{onClick:()=>{(0,g.hF)(m.S),e(),i("/")},type:"text",children:"Logout"})})]})}));var T=a(3620),Q=a(9195),F=a(9672),B=a(7110),S=a(5444);const{Text:I}=T.A,z=s.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';

  @media (max-width: ${d.E.tablet}) {
    justify-content: left;
    align-items: flex-start ;
  }
`,D=(0,s.Ay)(Q.A)`
    justify-content: center;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000000A;
    opacity: 1;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    height: 158px;
    padding-bottom: 37px;

    @media (min-width: ${d.E.tablet}) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 304px;
    }
`,U=s.Ay.div`
    margin-top: 17px;
    margin-bottom: 20px;
    font-size: 20px;
    color: #537178;
    text-align: center;
    letter-spacing: 0px;
`,R=(s.Ay.div`
    margin-top: -10px;
`,s.Ay.div`
    text-align: left;
    font-size: 20px;
    letter-spacing: 0px;
    color: #537178;
    opacity: 1;
`),M=s.Ay.div`
  display: flex;
  align-items: baseline; 
  font-family: 'Arial', sans-serif;
`,Y=(0,s.Ay)(I)`
  font-size: 64px;  
  color: #5285EC;  
  font-weight: bold;
`,G=(0,s.Ay)(I)`
  font-size: 20px;
  color: #A0A0A0;  
  margin-left: 5px; 
`,N=s.Ay.ul`
  padding-inline-start: 10px !important;
  letter-spacing: 0px;
  color: #8F9EA2;
  opacity: 1;
`,J=s.Ay.li`
    ${t=>{let{completed:e}=t;return e&&"\n        text-decoration: line-through;\n        color: gray;\n        text-decoration-thickness: 2px;\n    "}}
`,W=(0,s.Ay)(F.A)`
  margin-top: 22px;
  margin-bottom: 44px;
  padding-left: 120px;
  padding-right: 120px;
  margin-left: 0px !important; 
  margin-right: 0px !important;
  
  @media (max-width: ${d.E.tablet}) {
    padding-left: 0px;
    padding-right: 0px;
  }
`,X=(0,s.Ay)(Q.A)`
    height: 158px;
    box-shadow: 0px 3px 6px #0000000A;
    border-radius: 12px;
    background-color: #fff;
    margin-bottom:0px;

    ${t=>{let{center:e}=t;return e&&"\n        padding-left : 100px\n    "}}

    @media (max-width: ${d.E.tablet}) {
     margin-bottom: 8px;
  }
`,Z=s.Ay.div`
    text-align: left;
    letter-spacing: 0px;
    color: #537178;
    opacity: 1;
    font-size: 20px;
`,V=s.Ay.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 100%;
  margin-left: 136px;
  margin-right: 136px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${d.E.tablet}) {
    max-width: 100% !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
`,O=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`,H=(0,s.Ay)(I)`
  font-size: 16px;
  margin-left: 10px;
  color: #5285EC;

  ${t=>{let{completed:e}=t;return e&&"\n    text-decoration: line-through;\n    color: #537178;\n  "}}
`,K=s.Ay.div`
  display: flex;
  gap: 10px;
  margin-right: 35px;
`,q=(0,s.Ay)(B.A)`
  margin-right: 10px;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #fff; 
    border: 2px solid #95A4AB;
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border: 2px solid #95A4AB;
  }

  .ant-checkbox-checked::after {
    border: 3px solid red;
  }
`,$=s.Ay.div`
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
`,P=s.Ay.div`
    position: relative;
`,L=s.Ay.div`
    width: 103px; 
    height: 103px;
`,_=(0,s.Ay)(F.A)`
  padding: 20px;
  background-color: #f5f5f5;
  margin-left: 0px !important;
  margin-right: 0px !important;
  padding-left: 120px !important;
  padding-right: 120px !important;

  @media (max-width: ${d.E.tablet}) {
    padding-left: 0px !important;
    padding-right: 0px !important;
    text-align: center;
  }
`,tt=s.Ay.div`
  font-size: 20px;
  color: #537178;
  margin: 0;

  @media (max-width: ${d.E.tablet}) {
    margin-bottom: 10px;
  }
`,et=(0,s.Ay)(S.A.Search)`
  width: 290px;
  margin-right:20px;
  
  .ant-input-group-addon {
    display: none;
  }

  .ant-input-affix-wrapper {
    border-radius: 8px !important;
    border: none !important;
    background-color: #D9DFEB ;
    height: 40px;
  }

  @media (max-width: ${d.E.tablet}) {
    margin-bottom: 10px;
    width: 100%;
  }
`;var at=a(5961);const it=t=>{let{onClick:e}=t;return(0,v.jsx)(z,{children:(0,v.jsxs)(D,{children:[(0,v.jsx)(U,{children:"You have no task."}),(0,v.jsx)(at.A,{onClick:()=>e(!0),btnText:"+ New Task",width:"124px",height:"35px"})]})})};var nt=a(1031);const st=()=>{const[t,e]=(0,i.useState)(window.innerWidth),a=()=>{e(window.innerWidth)};(0,i.useEffect)((()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]);return t<1024};var rt=a(1087),ot=a(3892),dt=a(899);const lt=dt.Ik().shape({name:dt.Yj().required("This Feild is Required!")}),At=t=>{let{openModal:e,submitTask:a,editTask:i,rowData:n}=t;const s=st(),r=(0,ot.Wx)({initialValues:{id:(0,u.get)(n,"id",""),name:(0,u.get)(n,"name",""),status:(0,u.get)(n,"status","")},enableReinitialize:!0,validationSchema:lt,onSubmit:(t,e)=>{let{resetForm:s}=e;(0,u.isEmpty)(n)?(a({...t,status:0}),s()):(i({...n,...t}),s())}});return(0,v.jsxs)(nt.A,{closable:!1,width:s?"100%":296,centered:!s,title:(0,v.jsx)(R,{children:"+ New Task"}),open:e,footer:null,children:[(0,v.jsx)(rt.A,{value:r.values.name,type:"text",placeholder:"Task Name",id:"name",name:"name",onChange:r.handleChange}),(0,v.jsx)(at.A,{width:"100%",height:"40px",btnText:(0,u.isEmpty)(n)?"+ New Task":"Update Task",onClick:r.handleSubmit})]})};var xt=a(5336),pt=a(4647),ct=a(6058),ht=a(461);ht.t1.register(ht.Bs,ht.m_,ht.s$);const gt=t=>{let{tasks:e=[]}=t;const a={labels:["Completed Tasks","Remaining Tasks"],datasets:[{data:(0,i.useMemo)((()=>(()=>{const t=e.filter((t=>(0,u.get)(t,"status",0))).length,a=e.length;return[t/a*100,(a-t)/a*100]})()),[e]),backgroundColor:["#5285EC","#E8ECEC"],borderWidth:3}]};return(0,v.jsx)($,{children:(0,v.jsx)(P,{children:(0,v.jsx)(L,{children:(0,v.jsx)(ct.Fq,{data:a,options:{plugins:{legend:{display:!1},tooltip:{enabled:!1}}}})})})})},mt=t=>{let{tasks:e=[]}=t;return(0,v.jsxs)(W,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,v.jsx)(pt.A,{xs:24,sm:24,md:24,lg:8,xl:8,children:(0,v.jsxs)(X,{children:[(0,v.jsx)(Z,{children:"Tasks Completed"}),(0,v.jsxs)(M,{children:[(0,v.jsx)(Y,{children:e.filter((t=>(0,u.get)(t,"status",0))).length}),(0,v.jsxs)(G,{children:["/ ",e.length]})]})]})}),(0,v.jsx)(pt.A,{xs:24,sm:24,md:24,lg:8,xl:8,children:(0,v.jsxs)(X,{children:[(0,v.jsx)(Z,{children:"Latest Created Tasks"}),(0,v.jsx)(N,{children:[...e.slice(Math.max(e.length-3,0))].reverse().map(((t,e)=>(0,v.jsx)(J,{completed:(0,u.get)(t,"status",0),children:(0,u.get)(t,"name","")},e)))})]})}),(0,v.jsx)(pt.A,{xs:24,sm:24,md:24,lg:8,xl:8,children:(0,v.jsx)(X,{center:"true",children:(0,v.jsx)(gt,{tasks:e})})})]})},ut=i.memo(mt);var ft=a(9061),kt=a(3387);const bt=t=>{let{tasks:e=[],removeTask:i,setOpenAddEditTaskModal:n,setRowData:s,completeTheTask:r}=t;return(0,v.jsx)(V,{children:[...e].reverse().map(((t,e)=>(0,v.jsxs)(O,{children:[(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(q,{onChange:e=>r(e,t),checked:(0,u.get)(t,"status",0),completed:(0,u.get)(t,"status",0),disabled:1==(0,u.get)(t,"status",0)}),(0,v.jsx)(H,{completed:(0,u.get)(t,"status",0),children:(0,u.get)(t,"name")})]}),(0,v.jsxs)(K,{children:[(0,v.jsx)(kt.A,{onClick:()=>{s({...t}),n(!0)},component:()=>(0,v.jsx)(ft.A,{width:18,height:18,preview:!1,src:a(2572)})}),(0,v.jsx)(kt.A,{onClick:()=>i(t.id),component:()=>(0,v.jsx)(ft.A,{width:18,height:18,preview:!1,src:a(8863)})})]})]},e)))})};var yt=a(2058);const wt=t=>{let{onClick:e,onSearch:a,handleChangeSearch:i,searchData:n}=t;const s=st();return(0,v.jsxs)(_,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,v.jsx)(pt.A,{xs:24,sm:24,md:24,lg:6,xl:6,children:(0,v.jsx)(tt,{children:"Tasks"})}),(0,v.jsx)(pt.A,{xs:24,sm:24,md:24,lg:9,xl:9}),(0,v.jsx)(pt.A,{xs:24,sm:24,md:24,lg:6,xl:6,children:(0,v.jsx)(et,{value:n,onChange:i,onSearch:t=>a(t),allowClear:!0,prefix:(0,v.jsx)(yt.A,{width:16}),suffix:null,placeholder:"Search by task name"})}),(0,v.jsx)(pt.A,{xs:24,sm:24,md:24,lg:3,xl:3,children:(0,v.jsx)(at.A,{onClick:()=>e(!0),height:"40px",width:s?"100%":"120px",btnText:"+ New Task"})})]})},jt=(0,k.Ng)((t=>({tasksData:t.task.tasks})),(t=>({addTaskAction:e=>t((t=>{let{task:e,tasks:a=[],userId:i}=t;return async t=>{const n={...e,id:(0,w.A)()};a.push(n),t(j(a)),b(i,a)}})(e)),updateTaskAction:e=>t((t=>{let{task:e,tasks:a=[],userId:i}=t;return async t=>{const n=a.map((t=>t.id===e.id?e:t));t(j(n)),b(i,n)}})(e)),deleteTaskAction:e=>t((t=>{let{id:e,tasks:a=[],userId:i}=t;return async t=>{let n=a.map((t=>t.id)).indexOf(e);a.splice(n,1),t(j(a)),b(i,a)}})(e))})))((t=>{let{tasksData:e=[],addTaskAction:a,updateTaskAction:n,deleteTaskAction:s}=t;const[r,o]=(0,i.useState)(!1),[d,l]=(0,i.useState)(!1),[A,x]=(0,i.useState)(null),[p,c]=(0,i.useState)(null),[h,f]=(0,i.useState)([]),[k,b]=(0,i.useState)("");(0,i.useEffect)((()=>{const t=(0,g.S7)(m.S);if(!(0,u.isEmpty)(t)){const e=(0,u.get)(t,"id",null);x(e)}}),[]),(0,i.useEffect)((()=>{f([...e]),(0,u.isEmpty)(k)||b("")}),[e]);const y=()=>{setTimeout((()=>{l(!1)}),1e3)},w=t=>{l(!0),n({task:t,tasks:e,userId:A}),o(!1),c(null),y()};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(E,{}),(0,v.jsx)(xt.A,{open:d}),0===h.length&&(0,u.isEmpty)(k)&&(0,v.jsx)(it,{onClick:o}),h&&h.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(ut,{tasks:h}),(0,v.jsx)(wt,{searchData:k,handleChangeSearch:t=>{b(t.target.value)},onSearch:t=>{if(b(t),(0,u.isEmpty)(t))f([...e]);else{const e=h.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())));f([...e])}},onClick:o}),(0,v.jsx)(bt,{completeTheTask:(t,e)=>{const a={...e,status:t.target.checked?1:0};w(a)},setOpenAddEditTaskModal:o,setRowData:c,removeTask:t=>{l(!0),s({index:t,tasks:e,userId:A}),y()},tasks:h})]}),(0,v.jsx)(At,{rowData:p,submitTask:t=>{l(!0),a({task:t,tasks:e,userId:A}),o(!1),y()},editTask:w,openModal:r})]})}))},7586:(t,e,a)=>{a.d(e,{E:()=>i});const i={mobile:"576px",tablet:"992px",laptop:"1024px",desktop:"2560px"}},2572:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIaADAAQAAAABAAAAIQAAAAA1iKI6AAABhklEQVRYCcXVzU3DMBQH8OcwATeOjFC4BXWIjpAAE+SUG+KWU1iAQkaAEZCQOAIjdAQGoMb/Sg8Z4yS2YyeWKn8k8fvl2XEFJS7XVX0jJRUIIwR1921za4YU5kDM/lVVP6oAhT6nJOq2bVPqY0d6J2bbBsD8CrU6y9en72+vzxwvCaIPwEFNSHTEGMAGiY5QqT5Wb7rhYEM1MnKeX3xFR6i1/ljl650rhCSdZENS12tYAvz4/oe26fZEJfeHazE9E7wHkFp91ztnRFI5aTkYwG/qC0G2tnfNUzDCBPhCAMCy4bkgRB/AFaID8IzKoF8ZA+izmUf0ZVUXuM4Z4Hu9ED4ADmBCeFyvnZcjBIBA5mbVg3Pb6ZwIBXAQlY0Xbtvq0eWYCjA3oTdiDgBQvZmYC9CLmBNgRcwN+IdYAvAHsRTgF7Ek4IBYGgBEpr7RAo2Q4nIQuczrdGzbJooFwNxBiJiAIERsgDciBcALkQpwQKj/+h0aQyUlAHGzbP+9kSQ/+xCpAYj7A0PG4KsxmvN0AAAAAElFTkSuQmCC"},5572:(t,e,a)=>{t.exports=a.p+"static/media/profile.1fc6222832b4cdff80e8.png"},8863:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAJQAAAABHrs+5AAABt0lEQVRYCe2Wy1EDMQyGpQ13lg4oIXQAtRDOJMww5Aa5hWGGJGdCLaSElAAVAAVkhQ2ztmXsXU92ZS744rEt6fv9ko2QWM4nN+8I8AqAH80uVBLA8fPi/qjZ7mf0IMVI2yBiqaphuz2CEppcvm1HV9NbIDht9MKWcd+ZYON3sTbCZv04n6Fa2qWa3SUbzNQgolXxV3A9R80uMk02itGHcEZYbXFXtJzuaIy9BmhQlUhFwqHeK/y/U/oKmJwxmkxf0t26W64X8zMdxWZCpBN1MQ67h06JQJ+1lb2GhNu6U7x2WFaAODUMcARQxjxgWVYAZtwCh2UFhFdIvNcRUGXcAsuyAqoi3y1wWFaA+GKHAUYAwi7bFrgsk4q1PvU1U/9J+aK+YoZrVkAeGyZ4AmyODpv30csZXICTo/tABWN4DC4g6CHb6QmwOVoOyxlcgJOjxQR4DC5AjBoP7AmwOTru0nWEM7gAJ0d3xUT9PQYXEPWSG2AC3BwthfQZJifXQOn3wH0HNJOtgO5Qr9GbriVKKHZIwJ2SYf7t/QlRMbEa+/F+bUFtcDG+HhIMyrrdpdb7/rR8CP64vgCUgG1c+DxQRgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=27.1d6d965d.chunk.js.map