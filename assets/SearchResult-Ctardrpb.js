import{u as M,d as te,l as se,m as _,p as ae,P as le,q as re,s as ie,k as x,v as f,x as oe,y as Y,j as s,z as ne,R as P,A as ue,B as ce,C as de,D as pe,E as ye,G as ve,H as he,I as me,J as Ee,K as H,L as ge,M as Se,N as Ae,O as T,Q as $,S as Be}from"./app-Cog72NFS.js";const Ue=["/README%20copy.html","/","/intro.html","/css/","/en-US/","/en-US/intro.html","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/html/","/javascript/","/project/","/solidity%E5%9F%BA%E7%A1%80/1-1.solidity%20%E4%BB%8B%E7%BB%8D.html","/solidity%E5%9F%BA%E7%A1%80/1-10.%E4%BF%AE%E9%A5%B0%E7%AC%A6-Modifier.html","/solidity%E5%9F%BA%E7%A1%80/1-11.%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0.html","/solidity%E5%9F%BA%E7%A1%80/1-12.%E4%BA%8B%E4%BB%B6.html","/solidity%E5%9F%BA%E7%A1%80/1-13.%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.html","/solidity%E5%9F%BA%E7%A1%80/1-2.%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix.html","/solidity%E5%9F%BA%E7%A1%80/1-3.solidity%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84.html","/solidity%E5%9F%BA%E7%A1%80/1-4.HelloWorld.html","/solidity%E5%9F%BA%E7%A1%80/1-5.%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","/solidity%E5%9F%BA%E7%A1%80/1-6.%E5%8F%98%E9%87%8F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html","/solidity%E5%9F%BA%E7%A1%80/1-7.%E5%87%BD%E6%95%B0.html","/solidity%E5%9F%BA%E7%A1%80/1-8.%E5%B8%B8%E9%87%8F.html","/solidity%E5%9F%BA%E7%A1%80/1-9.%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF.html","/solidity%E5%9F%BA%E7%A1%80/","/timeline/","/en-US/demo/","/en-US/demo/disable.html","/en-US/demo/layout.html","/en-US/demo/markdown.html","/en-US/demo/page.html","/en-US/posts/cherry.html","/en-US/posts/dragonfruit.html","/en-US/posts/strawberry.html","/en-US/posts/tomato.html","/en-US/posts/apple/1.html","/en-US/posts/apple/2.html","/en-US/posts/apple/3.html","/en-US/posts/apple/4.html","/en-US/posts/banana/1.html","/en-US/posts/banana/2.html","/en-US/posts/banana/3.html","/en-US/posts/banana/4.html","/404.html","/en-US/posts/","/en-US/posts/apple/","/en-US/posts/banana/","/category/","/category/css/","/category/javascript/","/category/%E9%A1%B9%E7%9B%AE/","/category/solidity/","/en-US/category/","/en-US/category/guide/","/en-US/category/cherry/","/en-US/category/dragon-fruit/","/en-US/category/fruit/","/en-US/category/strawberry/","/en-US/category/vegetable/","/en-US/category/apple/","/en-US/category/banana/","/tag/","/tag/remix/","/tag/solidity/","/en-US/tag/","/en-US/tag/disable/","/en-US/tag/encryption/","/en-US/tag/layout/","/en-US/tag/markdown/","/en-US/tag/page-config/","/en-US/tag/guide/","/en-US/tag/red/","/en-US/tag/small/","/en-US/tag/round/","/en-US/tag/big/","/en-US/tag/yellow/","/en-US/tag/curly/","/en-US/tag/long/","/article/","/en-US/article/","/star/","/en-US/star/","/en-US/timeline/"],Fe="SEARCH_PRO_QUERY_HISTORY",E=M(Fe,[]),fe=()=>{const{queryHistoryCount:a}=H,l=a>0;return{enabled:l,queryHistory:E,addQueryHistory:r=>{l&&(E.value=Array.from(new Set([r,...E.value.slice(0,a-1)])))},removeQueryHistory:r=>{E.value=[...E.value.slice(0,r),...E.value.slice(r+1)]}}},q=a=>Ue[a.id]+("anchor"in a?`#${a.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=H,g=M(He,[]),Re=()=>{const a=I>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:q(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,I-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},ke=a=>{const l=pe(),r=_(),R=ye(),o=x(0),B=f(()=>o.value>0),v=ve([]);return he(()=>{const{search:h,terminate:k}=me(),S=Ee(c=>{const A=c.join(" "),{searchFilter:w=y=>y,splitWord:b,suggestionsFilter:L,...m}=l.value;A?(o.value+=1,h(c.join(" "),r.value,m).then(y=>w(y,A,r.value,R.value)).then(y=>{o.value-=1,v.value=y}).catch(y=>{console.warn(y),o.value-=1,o.value||(v.value=[])})):v.value=[]},H.searchDelay-H.suggestDelay);Y([a,r],([c])=>S(c),{immediate:!0}),ge(()=>{k()})}),{isSearching:B,results:v}};var be=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),R=_(),o=ae(le),{enabled:B,addQueryHistory:v,queryHistory:h,removeQueryHistory:k}=fe(),{enabled:S,resultHistory:c,addResultHistory:A,removeResultHistory:w}=Re(),b=B||S,L=re(a,"queries"),{results:m,isSearching:y}=ke(L),i=ie({isQuery:!0,index:0}),d=x(0),p=x(0),j=f(()=>b&&(h.value.length>0||c.value.length>0)),C=f(()=>m.value.length>0),D=f(()=>m.value[d.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:h.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?h.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{d.value=d.value>0?d.value-1:m.value.length-1,p.value=D.value.contents.length-1},K=()=>{d.value=d.value<m.value.length-1?d.value+1:0,p.value=0},N=()=>{p.value<D.value.contents.length-1?p.value+=1:K()},V=()=>{p.value>0?p.value-=1:J()},Q=e=>e.map(t=>Be(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Se[e.index]||"$content",[n,F=""]=Ae(t)?t[R.value].split("$content"):t.split("$content");return e.display.map(u=>s("div",Q([n,...u,F])))}return e.display.map(t=>s("div",Q(t)))},U=()=>{d.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>B?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.queryHistory),h.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),k(t)}})]))])):null,Z=()=>S?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,t)=>s(P,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{U()}},()=>[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>Q(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),w(t)}})]))])):null;return oe("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=D.value.contents[p.value];v(a.queries.join(" ")),A(t),r.push(q(t)),U()}}else if(S){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(r.push(c.value[t].link),U())}}}}),Y([d,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!C.value:!j.value}],id:"search-pro-results"},a.queries.length?y.value?s(ne,{hint:o.value.searching}):C.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},n)=>{const F=d.value===n;return s("li",{class:["search-pro-result-list-item",{active:F}]},[s("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),t.map((u,ee)=>{const O=F&&p.value===ee;return s(P,{to:q(u),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{v(a.queries.join(" ")),A(u),U()}},()=>[u.type==="text"?null:s(u.type==="title"?ue:u.type==="heading"?ce:de,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?s("div",{class:"content-header"},u.header):null,s("div",W(u))])])})])})):o.value.emptyResult:b?j.value?[X(),Z()]:o.value.emptyHistory:o.value.emptyResult)}});export{be as default};
