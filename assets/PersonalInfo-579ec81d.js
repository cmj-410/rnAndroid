import{_ as m,r as c,a as v,c as p,b as e,t as u,w as f,v as y,F as r,f as b,d as I,p as g,e as k}from"./index-b6a551fb.js";const S={class:"personalModal"},$={__name:"PersonalModal",props:["type"],emits:["someEvent","submit"],setup(o,{emit:a}){const i=o,l=c(""),d=()=>{a("submit",{data:l.value,type:i.type}),a("someEvent")};return(n,s)=>(v(),p(r,null,[e("div",{class:"mask",onClick:s[0]||(s[0]=t=>n.$emit("someEvent"))}),e("div",S,[e("h3",null,"请修改你的"+u(i.type=="name"?"名称":"签名"),1),f(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>l.value=t),class:"basicInput"},null,512),[[y,l.value]]),e("div",{class:"btn btnLeft",onClick:d},"提交"),e("div",{class:"btn btnRight",onClick:s[2]||(s[2]=t=>n.$emit("someEvent"))},"返回")])],64))}},h=m($,[["__scopeId","data-v-43cd7dc3"]]);const _=o=>(g("data-v-f40bff8c"),o=o(),k(),o),x={class:"personalInfo"},C={class:"basicInfo"},E=_(()=>e("div",{class:"avater"},null,-1)),M={class:"name"},P=_(()=>e("div",{class:"id"},"ID:1271267",-1)),q={class:"qianming"},w={class:"edit"},B=_(()=>e("div",{class:"mima",style:{color:"red"}},"退出登录",-1)),D={__name:"PersonalInfo",setup(o){const a=c("name"),i=c("朝花夕拾"),l=c("面对疾风吧！"),d=s=>{s.type=="name"?i.value=s.data:s.type=="qianming"&&(l.value=s.data)},n=c(!1);return(s,t)=>(v(),p(r,null,[e("div",x,[e("div",C,[E,e("div",M,u(i.value),1),P,e("div",q,u(l.value),1)]),e("div",w,[e("div",{class:"mima",onClick:t[0]||(t[0]=()=>{a.value="name",n.value=!0})}," 修改用户名称 "),e("div",{class:"mima",onClick:t[1]||(t[1]=()=>{a.value="qianming",n.value=!0})}," 修改个性签名 "),B])]),n.value?(v(),b(h,{key:0,onSomeEvent:t[2]||(t[2]=V=>n.value=!1),onSubmit:d,type:a.value},null,8,["type"])):I("",!0)],64))}},N=m(D,[["__scopeId","data-v-f40bff8c"]]);export{N as default};