import{_ as oe,s as w,u as se,g as le,w as ne,c as ue,r,o as re,a as d,b as x,d as M,e as y,f as t,h as o,i as h,j as m,n as de,k as S,l as ie,F as ce,m as b,p as pe,q as me,t as v}from"./index.c91cc030.js";const ve=["src"],fe=b(" \u767B\u5165 "),_e=b("\u8A3B\u518A "),xe=b(" \u8AAA\u660E:\u7CFB\u7D71\u5C07\u6703\u5BC4\u9001\u542B\u5C08\u5C6C\u9A57\u8B49\u9023\u7D50(\u6709\u6548\u6642\u959315\u5206\u9418)\u4E4BEmail\u81F3\u8A3B\u518A\u4FE1\u7BB1\u3002\u8ACB\u65BC15\u5206\u9418\u5167\u958B\u555F\u9A57\u8B49\u9023\u7D50\u4E26\u8A2D\u5B9A\u65B0\u5BC6\u78BC\u3002 "),ge={key:1},we={__name:"Login",setup(ye){const{menuList:B,userName:K,userNo:E,userEmail:V,userId:W,token:j}=w(se()),{api:f,cf:he,cc:be,formRules:k,naiveUi:z}=w(le()),{windowInnerHeight:T}=w(ne()),H=ue(()=>T.value+"px"),N=r(null),R=r(null),D={userNo:"req",email:"req|email"},G={userNo:"req",userPw:"req",captcha:"req"},$=({hours:l,minutes:e,seconds:a})=>pe("span",e*60+l*60*60+a);let P=r([]),C=r([]);const c=r({userNo:"",email:""}),s=r({userNo:"",userPw:"",captcha:"",captchaId:""});P.value=k.value.createFormRules(G,s),C.value=k.value.createFormRules(D,c);const _=r(!1),g=z.value.useMessage(),A=me(),I=r(),i=r(!1),U=r(),J=()=>{var l;i.value=!0,(l=R.value)==null||l.validate(e=>{e?g.error("\u9A57\u8B49\u5931\u6557"):i.value=!0})},F=()=>{s.value.captcha="";let l="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var a=Math.random()*16|0,n=e=="x"?a:a&3|8;return n.toString(16)});f.value.getGenerateCaptcha(l).then(e=>{I.value=e.request.responseURL,s.value.captchaId=l})},O=async()=>{let l=await f.value.userLogin(s.value).catch(e=>{let a=e.response.status,n="";switch(a){case 400:n="\u5E33\u865F/\u5BC6\u78BC\u932F\u8AA4";case 406:n="\u9A57\u8B49\u78BC\u904E\u671F/\u932F\u8AA4";case 500:n="\u9A57\u8B49\u78BC\u904E\u671F/\u932F\u8AA4";default:n="\u5E33\u865F/\u5BC6\u78BC\u932F\u8AA4"}g.error(n)});if(l){j.value=l.data.token,q();const[e,a]=await Promise.all([f.value.getMenu(),f.value.userInfo()]);B.value=e.data,K.value=a.data.userName,E.value=a.data.userNo,V.value=a.data.userEmail,W.value=a.data.userId,A.push("/main")}},q=()=>{s.value.userNo="1234567890",s.value.userPw="11111",s.value.captchaId="",s.value.captcha=""},Q=()=>{var l;(l=N.value)==null||l.validate(e=>{e?g.error("\u9A57\u8B49\u5931\u6557"):O()})};return re(()=>{F(),q()}),(l,e)=>{const a=d("n-input"),n=d("n-form-item"),p=d("n-space"),X=d("n-button"),Y=d("router-link"),L=d("n-form"),Z=d("n-card"),ee=d("n-countdown"),te=d("commonBtn"),ae=d("n-modal");return x(),M(ce,null,[y("div",{style:de({height:h(H)})},[t(Z,{class:"cradPosition",title:"\u7528\u6236\u767B\u5165",hoverable:"","header-style":{"text-align":"center"},size:"medium",style:{width:"400px"}},{default:o(()=>[t(L,{ref_key:"formRef",ref:N,model:s.value,rules:h(P),style:{maxWidth:"300px",minWidth:"280px",margin:"auto"}},{default:o(()=>[t(n,{path:"userNo",label:"\u5E33\u865F :"},{default:o(()=>[t(a,{placeholder:"\u8ACB\u8F38\u5165\u5E33\u865F",value:s.value.userNo,"onUpdate:value":e[0]||(e[0]=u=>s.value.userNo=u),onKeydown:e[1]||(e[1]=m(v(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),t(n,{path:"userPw",label:"\u5BC6\u78BC :"},{default:o(()=>[t(a,{placeholder:"\u8ACB\u8F38\u5165\u5BC6\u78BC",type:"password","show-password-on":"click",value:s.value.userPw,"onUpdate:value":e[2]||(e[2]=u=>s.value.userPw=u),onKeydown:e[3]||(e[3]=m(v(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),t(p,null,{default:o(()=>[t(n,{path:"captcha",label:"\u9A57\u8B49\u78BC :"},{default:o(()=>[t(a,{maxlength:5,class:"captcha",placeholder:"\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC",value:s.value.captcha,"onUpdate:value":e[4]||(e[4]=u=>s.value.captcha=u),onKeydown:e[5]||(e[5]=m(v(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),y("img",{src:I.value,onClick:F},null,8,ve)]),_:1}),t(p,{size:40},{default:o(()=>[t(X,{style:{width:"100px","margin-top":"0.5rem"},type:"primary",onClick:Q},{default:o(()=>[fe]),_:1}),t(p,{vertical:""},{default:o(()=>[y("span",{class:"btn btn-sm border-0 p-0 link-btn",onClick:e[6]||(e[6]=u=>_.value=!_.value)}," \u5FD8\u8A18\u5BC6\u78BC "),t(Y,{to:"/register",class:"btn btn-sm border-0 p-0 link-btn"},{default:o(()=>[_e]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})],4),t(ae,{show:_.value,"onUpdate:show":e[12]||(e[12]=u=>_.value=u),preset:"dialog",title:"\u5FD8\u8A18\u5BC6\u78BC",class:"p-modal-body p-border"},{default:o(()=>[t(L,{ref_key:"forgetFormRef",ref:R,class:"my-4",model:c.value,rules:h(C),style:{maxWidth:"300px",minWidth:"280px",margin:"auto"}},{default:o(()=>[t(n,{path:"userNo",label:"\u5E33\u865F :"},{default:o(()=>[t(a,{placeholder:"\u8ACB\u8F38\u5165\u5E33\u865F",value:c.value.userNo,"onUpdate:value":e[7]||(e[7]=u=>c.value.userNo=u),onKeydown:e[8]||(e[8]=m(v(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),t(n,{path:"email",label:"\u96FB\u5B50\u90F5\u7BB1 :"},{default:o(()=>[t(a,{placeholder:"\u8ACB\u8F38\u5165\u96FB\u5B50\u90F5\u7BB1",value:c.value.email,"onUpdate:value":e[9]||(e[9]=u=>c.value.email=u),onKeydown:e[10]||(e[10]=m(v(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1})]),_:1},8,["model","rules"]),i.value?(x(),S(p,{key:0,justify:"center",class:"px-5 illustrateText"},{default:o(()=>[xe]),_:1})):ie("",!0),t(p,{class:"mt-3",justify:"center"},{default:o(()=>[t(te,{disabled:i.value,type:i.value?"time":"",onClick:J},{default:o(()=>[i.value?(x(),S(ee,{key:0,ref_key:"countdownRef",ref:U,duration:18e4,active:i.value,render:$,onFinish:e[11]||(e[11]=()=>{i.value=!1,U.value.reset()})},null,8,["active"])):(x(),M("span",ge,"\u9001\u51FA"))]),_:1},8,["disabled","type"])]),_:1})]),_:1},8,["show"])],64)}}},Ne=oe(we,[["__scopeId","data-v-6b0006b3"]]);export{Ne as default};
