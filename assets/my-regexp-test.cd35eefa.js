import{k as r,o as l,c as u,a as e,Y as _,Z as i,X as m}from"./app.aca78d73.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const d={class:"reg-body"},v={class:"reg-search reg-bar"},g={class:"reg-form"},x={key:0},f=["src"],h={__name:"my-regexp-test",setup(y){const t=r(".*?"),a=r(`https://jex.im/regulex/#!embed=true&flags=&re=${t.value}`),s=r(!0);function n(){s.value=!1,setTimeout(()=>{s.value=!0},50),a.value=`https://jex.im/regulex/#!embed=true&flags=&re=${t.value}`}return(b,o)=>(l(),u("div",d,[e("div",v,[e("div",g,[_(e("input",{class:"reg-input",placeholder:"\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F","onUpdate:modelValue":o[0]||(o[0]=c=>t.value=c),name:"cname",type:"text"},null,512),[[i,t.value]]),e("button",{class:"reg-btn",onClick:n})])]),s.value?(l(),u("div",x,[e("iframe",{frameborder:"0",width:"100%",height:"400px",src:a.value},null,8,f)])):m("",!0)]))}};var w=p(h,[["__file","my-regexp-test.vue"]]);export{w as default};
