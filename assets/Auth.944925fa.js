import{s as _,g as Y,w as Z,u as ee,c as v,r as t,a as u,b as te,d as ae,f as n,h as m,i as g,m as R,D as B,n as P,F as oe,p as S}from"./index.c91cc030.js";const ne=R(" \u7CFB\u7D71\u6B0A\u9650 "),me={__name:"Auth",setup(le){const{api:h,cf:T,cc:x,_:j,formRules:k,naiveUi:N}=_(Y()),{windowInnerHeight:y,isLoading:D}=_(Z()),{userNo:E}=_(ee()),H=v(()=>y.value*.75+"px"),G=v(()=>y.value*.95+"px"),i=N.value.useMessage(),f=t(!1),M=v(()=>y.value*.5+"px"),r=t(""),b=t(!1),w=t([]),C=t(null),q={},O=t([]),p=t({});O.value=k.value.createFormRules(q,p);const z=t([{option:"btn",showLabel:!1,showFeedback:!1,style:{"margin-bottom":"0.75rem"},span:24,btnObject:[{name:"\u65B0\u589E\u7CFB\u7D71\u6B0A\u9650",type:"add",onClick:()=>{r.value="new",f.value=!0}}]},{name:"\u89D2\u8272\u540D\u7A31",option:"input",key:"name"},{option:"btnTip",btnObject:[{name:"\u67E5\u8A62",type:"search",onClick:()=>{b.value=!0,F(!0)}},{name:"\u6E05\u7A7A",type:"clear",onClick:()=>{p.value.name=""}}]}]),F=a=>{h.value.queryAuthCode(p.value).then(e=>{e.status==200?(a&&i.success("\u67E5\u8A62\u6210\u529F"),w.value=e.data):a&&i.error("\u67E5\u8A62\u5931\u6557"),b.value=!1})},I=()=>{(r.value="edit")||j.value.forEach(d.value,(a,e)=>{e!="name"&&e!="userNo"&&h.value.createAuthCode({}).then(l=>{l.status==201?i.success("\u65B0\u589E\u6210\u529F"):i.error("\u65B0\u589E\u5931\u6557")})})},$=t([{title:"\u89D2\u8272\u540D\u7A31",key:"name"},{title:"\u5EFA\u8B70\u8005",key:"c"},{title:"\u4F5C\u696D",key:"actions",render:(a,e)=>[S(x.value.commonBtn,{style:{marginRight:"8px"},type:"edit",onClick:()=>{r.value="edit",T.value.objectPutAll(d.value,a),f.value=!0}},"\u4FEE\u6539"),S(x.value.commonBtn,{type:"delete",popClick:()=>{D.value=!0,h.value.deleteAuthCode({id:a.id}).then(l=>{l.status==204?(i.success("\u522A\u9664\u6210\u529F"),F()):i.error("\u522A\u9664\u5931\u6557")})}},"\u522A\u9664")]}]),L=t(null),J={},V=t([]),d=t({userNo:E.value});V.value=k.value.createFormRules(J,d);const U=t([{name:v(()=>`${r.value=="new"?"\u65B0\u589E":""}\u89D2\u8272\u6B0A\u9650\u8A2D\u7F6E : `),showLabel:!1,span:24,option:"title"},{name:"\u89D2\u8272\u540D\u7A31",option:"input",style:{width:"250px"},span:24,key:"name"}]),K=[{name:"\u7DB1\u8981\u8A08\u5283\u7BA1\u7406 \u7DB1\u8981\u8A08\u756B\u67E5\u8A62",actions:"\u67E5\u8A62,\u65B0\u589E/\u7DE8\u8F2F,\u522A\u9664"},{name:"\u8A08\u756B\u5BE9\u67E5\u4F5C\u696D \u5F85\u5BE9\u6E05\u55AE",actions:"\u67E5\u8A62"},{name:"\u524D\u53F0\u7BA1\u7406",actions:"\u67E5\u8A62,\u65B0\u589E/\u7DE8\u8F2F"},{name:"\u6A19\u6848\u8A08\u756B\u7BA1\u7406 \u7DB1\u8981\u7D93\u8CBB\u5207\u5272",actions:"\u65B0\u589E/\u7DE8\u8F2F,\u522A\u9664"}];return(()=>{K.forEach((a,e)=>{let l=[];a.actions.split(",").forEach(s=>{let c;s=="\u67E5\u8A62"?c="search":s=="\u65B0\u589E/\u7DE8\u8F2F"?c="edit":s=="\u522A\u9664"&&(c="delete"),l.push({label:s,value:c})}),U.value.push({name:a.name,option:"checkbox",key:e,checkboxObject:l})})})(),(a,e)=>{const l=u("commonTitle"),s=u("commonForm"),c=u("n-data-table"),A=u("n-space"),Q=u("n-layout"),W=u("commonBtn"),X=u("n-modal");return te(),ae(oe,null,[n(l,null,{default:m(()=>[ne]),_:1}),n(s,{class:"mt-2",formRef:C.value,"onUpdate:formRef":e[0]||(e[0]=o=>C.value=o),formRules:O.value,formOption:z.value,formLabelPlacement:"top",xGap:16,modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=o=>p.value=o),span:4},null,8,["formRef","formRules","formOption","modelValue"]),n(c,{columns:$.value,data:w.value,"single-line":!1,loading:b.value,"max-height":g(M),"paginate-single-page":!1},null,8,["columns","data","loading","max-height"]),n(X,{show:f.value,"onUpdate:show":e[4]||(e[4]=o=>f.value=o),preset:"card",class:"p-modal-body-l p-border",style:P({height:g(G)}),"header-style":{"padding-bottom":"0px"}},{header:m(()=>[n(A,{class:"p-cardTitle"},{default:m(()=>[R("\u3000 "+B((r.value=="new"?"\u65B0\u589E":"\u4FEE\u6539")+"\u89D2\u8272  "),1)]),_:1})]),default:m(()=>[n(Q,{"native-scrollbar":!1,style:P({height:g(H)})},{default:m(()=>[n(s,{class:"mt-4 px-4 pt-4",formRef:L.value,"onUpdate:formRef":e[2]||(e[2]=o=>L.value=o),formRules:V.value,formOption:U.value,formLabelPlacement:"top",xGap:24,modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=o=>d.value=o),span:8},null,8,["formRef","formRules","formOption","modelValue"])]),_:1},8,["style"]),n(A,{class:"mt-3",justify:"center"},{default:m(()=>[n(W,{type:"save",onClick:I},{default:m(()=>[R(B(r.value=="new"?"\u65B0\u589E":"\u5132\u5B58"),1)]),_:1})]),_:1})]),_:1},8,["show","style"])],64)}}};export{me as default};