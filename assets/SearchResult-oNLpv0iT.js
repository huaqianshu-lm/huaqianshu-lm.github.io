import{u as _,d as te,l as ae,m as M,p as se,P as le,q as re,s as oe,k as q,v as R,x as ie,y as Y,j as a,z as ne,R as P,A as ue,B as ce,C as pe,D as de,E as ve,G as ye,H as he,I as me,J as ge,K as k,L as Se,M as Ee,N as Ue,O as T,Q as $,S as Be}from"./app-Bm8950XS.js";const fe=["/README%20copy.html","/","/intro.html","/css/","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/en-US/","/en-US/intro.html","/html/","/javascript/","/project/","/solidity/1-1.solidity%20%E4%BB%8B%E7%BB%8D.html","/solidity/1-2.%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix.html","/solidity/1-3.solidity%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84.html","/solidity/1-4.HelloWorld.html","/solidity/1-5.%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","/solidity/1-6.%E5%8F%98%E9%87%8F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html","/solidity/1-7.%E5%87%BD%E6%95%B0.html","/solidity/1-8.%E5%B8%B8%E9%87%8F.html","/solidity/1-9.%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF.html","/solidity/","/timeline/","/en-US/demo/","/en-US/demo/disable.html","/en-US/demo/layout.html","/en-US/demo/markdown.html","/en-US/demo/page.html","/en-US/posts/cherry.html","/en-US/posts/dragonfruit.html","/en-US/posts/strawberry.html","/en-US/posts/tomato.html","/en-US/posts/apple/1.html","/en-US/posts/apple/2.html","/en-US/posts/apple/3.html","/en-US/posts/apple/4.html","/en-US/posts/banana/1.html","/en-US/posts/banana/2.html","/en-US/posts/banana/3.html","/en-US/posts/banana/4.html","/404.html","/en-US/posts/","/en-US/posts/apple/","/en-US/posts/banana/","/category/","/category/css/","/category/javascript/","/category/%E9%A1%B9%E7%9B%AE/","/category/solidity/","/en-US/category/","/en-US/category/guide/","/en-US/category/cherry/","/en-US/category/dragon-fruit/","/en-US/category/fruit/","/en-US/category/strawberry/","/en-US/category/vegetable/","/en-US/category/apple/","/en-US/category/banana/","/tag/","/tag/remix/","/tag/solidity/","/en-US/tag/","/en-US/tag/disable/","/en-US/tag/encryption/","/en-US/tag/layout/","/en-US/tag/markdown/","/en-US/tag/page-config/","/en-US/tag/guide/","/en-US/tag/red/","/en-US/tag/small/","/en-US/tag/round/","/en-US/tag/big/","/en-US/tag/yellow/","/en-US/tag/curly/","/en-US/tag/long/","/article/","/en-US/article/","/star/","/en-US/star/","/en-US/timeline/"],He="SEARCH_PRO_QUERY_HISTORY",g=_(He,[]),Re=()=>{const{queryHistoryCount:s}=k,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=s=>fe[s.id]+("anchor"in s?`#${s.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=k,S=_(ke,[]),we=()=>{const s=I>0;return{enabled:s,resultHistory:S,addResultHistory:l=>{if(s){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),S.value=[r,...S.value.slice(0,I-1)]}},removeResultHistory:l=>{S.value=[...S.value.slice(0,l),...S.value.slice(l+1)]}}},be=s=>{const l=de(),r=M(),w=ve(),i=q(0),B=R(()=>i.value>0),y=ye([]);return he(()=>{const{search:h,terminate:b}=me(),E=ge(c=>{const U=c.join(" "),{searchFilter:A=v=>v,splitWord:Q,suggestionsFilter:L,...m}=l.value;U?(i.value+=1,h(c.join(" "),r.value,m).then(v=>A(v,U,r.value,w.value)).then(v=>{i.value-=1,y.value=v}).catch(v=>{console.warn(v),i.value-=1,i.value||(y.value=[])})):y.value=[]},k.searchDelay-k.suggestDelay);Y([s,r],([c])=>E(c),{immediate:!0}),Se(()=>{b()})}),{isSearching:B,results:y}};var Qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),w=M(),i=se(le),{enabled:B,addQueryHistory:y,queryHistory:h,removeQueryHistory:b}=Re(),{enabled:E,resultHistory:c,addResultHistory:U,removeResultHistory:A}=we(),Q=B||E,L=re(s,"queries"),{results:m,isSearching:v}=be(L),o=oe({isQuery:!0,index:0}),p=q(0),d=q(0),j=R(()=>Q&&(h.value.length>0||c.value.length>0)),x=R(()=>m.value.length>0),C=R(()=>m.value[p.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?c.value.length-1:h.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?h.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{p.value=p.value>0?p.value-1:m.value.length-1,d.value=C.value.contents.length-1},K=()=>{p.value=p.value<m.value.length-1?p.value+1:0,d.value=0},N=()=>{d.value<C.value.contents.length-1?d.value+=1:K()},V=()=>{d.value>0?d.value-=1:J()},D=e=>e.map(t=>Be(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ee[e.index]||"$content",[n,H=""]=Ue(t)?t[w.value].split("$content"):t.split("$content");return e.display.map(u=>a("div",D([n,...u,H])))}return e.display.map(t=>a("div",D(t)))},f=()=>{p.value=0,d.value=0,l("updateQuery",""),l("close")},X=()=>B?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[a(T,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),b(t)}})]))])):null,Z=()=>E?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>a(P,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{f()}},()=>[a(T,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>D(n)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),A(t)}})]))])):null;return ie("keydown",e=>{if(s.isFocusing){if(x.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=C.value.contents[d.value];y(s.queries.join(" ")),U(t),r.push(F(t)),f()}}else if(E){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(r.push(c.value[t].link),f())}}}}),Y([p,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!x.value:!j.value}],id:"search-pro-results"},s.queries.length?v.value?a(ne,{hint:i.value.searching}):x.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},n)=>{const H=p.value===n;return a("li",{class:["search-pro-result-list-item",{active:H}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((u,ee)=>{const O=H&&d.value===ee;return a(P,{to:F(u),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{y(s.queries.join(" ")),U(u),f()}},()=>[u.type==="text"?null:a(u.type==="title"?ue:u.type==="heading"?ce:pe,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?a("div",{class:"content-header"},u.header):null,a("div",W(u))])])})])})):i.value.emptyResult:Q?j.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Qe as default};
