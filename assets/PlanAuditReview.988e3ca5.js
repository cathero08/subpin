import{e as t,S as e,D as r}from"./dataTables.select.21a18a12.js";import{l as u}from"./tableLanguage.e3f722c7.js";import{r as s,b as p,d as c,f as m,i as f}from"./index.c91cc030.js";const _={class:"row col-12"},v={__name:"PlanAuditReview",setup(h){t.use(e),t.use(e),t.use(e),t.use(r);const a=s([]),i=s(),l={dom:"tip",select:!0,language:u,pageLength:25},n=[{data:"planName",title:"\u8A08\u756B\u540D\u7A31\xA0\xA0",width:""},{data:"auditType",title:"\u5BE9\u67E5\u7A2E\u985E\xA0\xA0\xA0",width:""},{data:"auditDept",title:"\u5BE9\u67E5\u7D44\u5BA4\xA0\xA0\xA0",width:""},{data:"auditTime",title:"\u9001\u5BE9\u6642\u9593\xA0\xA0\xA0",width:""},{data:"",title:"\u4F5C\u696D\xA0",render:function(o,d,w){return`<a href="../PlanAuditReviewDetail" type="button" class="btn">
                  <span>\u7D00\u9304</span>
              </a>`}}];return a.value.push({planName:"\u7D93\u8CBB",auditType:1,auditDept:"123",auditTime:new Date}),(o,d)=>(p(),c("div",_,[m(f(t),{class:"display table table-striped table-hover",columns:n,data:a.value,options:l,ref_key:"table",ref:i,width:"100%"},null,8,["data"])]))}};export{v as default};