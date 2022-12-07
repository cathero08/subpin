import{e as t,S as s,D as o}from"./dataTables.select.21a18a12.js";import{l as r}from"./tableLanguage.e3f722c7.js";import{r as n,b as c,d as m,f as h,i as b}from"./index.c91cc030.js";const y={class:"row col-12"},w={__name:"PlanAuditSearch",setup(f){t.use(s),t.use(s),t.use(s),t.use(o);const a=n([]),u=n(),p={dom:"tip",select:!0,language:r,pageLength:25},i=[{data:"planName",title:"\u8A08\u756B\u540D\u7A31",width:""},{data:"auditType",title:"\u5BE9\u67E5\u7A2E\u985E",width:""},{data:"auditDept",title:"\u5BE9\u67E5\u7D44\u5BA4",width:""},{data:"auditTime",title:"\u9001\u5BE9\u6642\u9593",width:""},{data:"work",title:"\u4F5C\u696D",render:function(d,l,e){return e.auditType===1?`<a href="../PlanAuditExp" type="button" class="btn">
                <span>\u5BE9\u67E5</span>
            </a>
            <a href="../PlanAuditRecords" type="button" class="btn">
              <span>\u7D00\u9304</span>
            </a>`:e.auditType===2?`<a href="../PlanAuditMidterm" type="button" class="btn">
                <span>\u5BE9\u67E5</span>
            </a>`:e.auditType===3?`<a href="../PlanAuditProposal" type="button" class="btn">
                <span>\u5BE9\u67E5</span>
            </a>`:`<a href="../PlanAuditAbroad" type="button" class="btn">
                <span>\u5BE9\u67E5</span>
            </a>`}}];return a.value.push({planName:"\u7D93\u8CBB",auditType:1,auditDept:"123",auditTime:new Date}),a.value.push({planName:"\u671F\u4E2D\u5831\u544A",auditType:2,auditDept:"123",auditTime:new Date}),a.value.push({planName:"\u8A08\u756B\u66F8",auditType:3,auditDept:"123",auditTime:new Date}),a.value.push({planName:"\u51FA\u570B",auditType:4,auditDept:"123",auditTime:new Date}),(d,l)=>(c(),m("div",y,[h(b(t),{class:"display table table-striped table-hover",columns:i,data:a.value,options:p,ref_key:"table",ref:u,width:"100%"},null,8,["data"])]))}};export{w as default};
