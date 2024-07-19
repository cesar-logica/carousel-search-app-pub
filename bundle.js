var app=function(){"use strict";function t(){}function e(t){return t()}function s(){return Object.create(null)}function n(t){t.forEach(e)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function o(t,e,s){t.insertBefore(e,s||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function p(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function $(t,e,s,n){null==s?t.style.removeProperty(e):t.style.setProperty(e,s,n?"important":"")}let v;function b(t){v=t}function g(){const t=function(){if(!v)throw new Error("Function called outside component initialization");return v}();return(e,s,{cancelable:n=!1}={})=>{const c=t.$$.callbacks[e];if(c){const a=function(t,e,{bubbles:s=!1,cancelable:n=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,s,n,e),c}(e,s,{cancelable:n});return c.slice().forEach((e=>{e.call(t,a)})),!a.defaultPrevented}return!0}}const x=[],y=[];let w=[];const k=[],R=Promise.resolve();let C=!1;function S(t){w.push(t)}const N=new Set;let j=0;function E(){if(0!==j)return;const t=v;do{try{for(;j<x.length;){const t=x[j];j++,b(t),_(t.$$)}}catch(t){throw x.length=0,j=0,t}for(b(null),x.length=0,j=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];N.has(e)||(N.add(e),e())}w.length=0}while(x.length);for(;k.length;)k.pop()();C=!1,N.clear(),b(t)}function _(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const A=new Set;let O;function D(){O={r:0,c:[],p:O}}function L(){O.r||n(O.c),O=O.p}function I(t,e){t&&t.i&&(A.delete(t),t.i(e))}function q(t,e,s,n){if(t&&t.o){if(A.has(t))return;A.add(t),O.c.push((()=>{A.delete(t),n&&(s&&t.d(1),n())})),t.o(e)}else n&&n()}function J(t){t&&t.c()}function M(t,s,a,r){const{fragment:o,after_update:i}=t.$$;o&&o.m(s,a),r||S((()=>{const s=t.$$.on_mount.map(e).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...s):n(s),t.$$.on_mount=[]})),i.forEach(S)}function T(t,e){const s=t.$$;null!==s.fragment&&(!function(t){const e=[],s=[];w.forEach((n=>-1===t.indexOf(n)?e.push(n):s.push(n))),s.forEach((t=>t())),w=e}(s.after_update),n(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,R.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,c,a,r,o,l,u,d=[-1]){const f=v;b(e);const p=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:o,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(f?f.$$.context:[])),callbacks:s(),dirty:d,skip_bound:!1,root:c.target||f.$$.root};u&&u(p.root);let h=!1;if(p.ctx=a?a(e,c.props||{},((t,s,...n)=>{const c=n.length?n[0]:s;return p.ctx&&o(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),h&&P(e,t)),s})):[],p.update(),h=!0,n(p.before_update),p.fragment=!!r&&r(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();c.intro&&I(e.$$.fragment),M(e,c.target,c.anchor,c.customElement),E()}b(f)}class F{$destroy(){T(this,1),this.$destroy=t}$on(e,s){if(!c(s))return t;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const t=n.indexOf(s);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(t){let e;return{c(){e=l("div"),e.textContent="Job number not found.",p(e,"class","csa-not-found-msg")},m(t,s){o(t,e,s)},d(t){t&&i(e)}}}function Q(e){let s,c,a,h,$,v,b,g,x,y,w,k,R,C,S=e[1]&&0==e[1].count&&H();return{c(){s=l("div"),c=l("div"),a=l("form"),h=l("div"),h.textContent="Order Lookup",$=d(),v=l("input"),b=d(),g=l("input"),w=d(),S&&S.c(),k=u(""),p(h,"class","csa-search-form-text-block"),p(v,"id","csa-repairs-search-number"),p(v,"name","csa-repairs-search-number"),p(v,"class","csa-text-field csa-w-input csa-repairs-search-number"),p(v,"maxlength","256"),p(v,"placeholder","Enter Job Number..."),p(v,"type","text"),p(v,"autocomplete","off"),g.disabled=x=e[3]||e[2],p(g,"type","submit"),p(g,"id","csa-repairs-search-button"),p(g,"class","csa-submit-button"),g.value=y=e[2]?"Searching...":"Track My Repair",p(a,"id","csa-email-form"),p(a,"name","csa-email-form"),p(a,"class","csa-section-search-form"),p(a,"aria-label","Search Form"),p(c,"class","csa-section-search-form-block"),p(s,"class","csa-section-search")},m(t,n){var i;o(t,s,n),r(s,c),r(c,a),r(a,h),r(a,$),r(a,v),m(v,e[0]),r(a,b),r(a,g),o(t,w,n),S&&S.m(t,n),o(t,k,n),R||(C=[f(v,"input",e[6]),f(v,"keypress",e[5]),f(a,"submit",(i=e[4],function(t){return t.preventDefault(),i.call(this,t)}))],R=!0)},p(t,[e]){1&e&&v.value!==t[0]&&m(v,t[0]),12&e&&x!==(x=t[3]||t[2])&&(g.disabled=x),4&e&&y!==(y=t[2]?"Searching...":"Track My Repair")&&(g.value=y),t[1]&&0==t[1].count?S||(S=H(),S.c(),S.m(k.parentNode,k)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&i(s),t&&i(w),S&&S.d(t),t&&i(k),R=!1,n(C)}}}function B(t,e,s){let n;const c=g();let a,r="",o=!1;return t.$$.update=()=>{1&t.$$.dirty&&s(3,n=r.trim().length<1)},[r,a,o,n,async function(){try{s(1,a=null),s(2,o=!0);const t=window.location.hostname,e=await fetch(`https://carousel-airtable-proxy.vercel.app/?jobId=${r}&host=${t}`,{headers:{"Content-Type":"application/json"},crossDomain:!0});if(!e.ok)throw new Error("Error fetching job data.");s(1,a=await e.json())}catch(t){s(1,a={count:0,msg:t})}finally{s(2,o=!1),c("onSearch",a)}},function(t){const e=t.which?t.which:t.keyCode;e<48||e>57?t.preventDefault():s(0,r=t.target.value)},function(){r=this.value,s(0,r)}]}class z extends F{constructor(t){super(),W(this,t,B,Q,a,{})}}function G(e){let s,n,c,a,r;return{c(){s=l("div"),s.innerHTML='<button class="csa-footer-btn">Give us a call</button> \n    <div class="csa-footer-gap"></div> \n    <button class="csa-footer-btn">Send us a note</button>',n=d(),c=l("div"),a=d(),r=l("div"),r.innerHTML='<img src="./imgs/poweredby.png" alt="powered by carousel"/>',p(s,"class","csa-layout-hflex csa-card csa-card-footer"),p(c,"class","csa-vgap"),p(r,"class","csa-powered-by")},m(t,e){o(t,s,e),o(t,n,e),o(t,c,e),o(t,a,e),o(t,r,e)},p:t,i:t,o:t,d(t){t&&i(s),t&&i(n),t&&i(c),t&&i(a),t&&i(r)}}}class K extends F{constructor(t){super(),W(this,t,null,G,a,{})}}function U(t,e,s){const n=t.slice();return n[3]=e[s],n[5]=s,n}function V(t){let e,s,n,c,a,f,h,m,v,b,g=t[3]+"";return{c(){e=l("div"),s=l("div"),n=l("div"),c=d(),a=l("div"),f=d(),h=l("div"),m=u(" "),v=u(g),b=d(),p(n,"class","csa-tl-block-line"),$(n,"background-color",t[2](t[5],t[0])),p(a,"class","csa-w-layout-blockcontainer csa-tl-block-indicator csa-w-container"),$(a,"background-color",t[2](t[5],t[0])),p(s,"class","csa-section-timeline-block-indicator"),p(h,"class","csa-text-bold"),p(e,"class","csa-layout-vflex csa-section-timeline-block")},m(t,i){o(t,e,i),r(e,s),r(s,n),r(s,c),r(s,a),r(e,f),r(e,h),r(h,m),r(h,v),r(e,b)},p(t,e){1&e&&$(n,"background-color",t[2](t[5],t[0])),1&e&&$(a,"background-color",t[2](t[5],t[0]))},d(t){t&&i(e)}}}function X(e){let s,n=e[1],c=[];for(let t=0;t<n.length;t+=1)c[t]=V(U(e,n,t));return{c(){s=l("div");for(let t=0;t<c.length;t+=1)c[t].c();p(s,"class","csa-section-timeline csa-section-timeline--mobile")},m(t,e){o(t,s,e);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(s,null)},p(t,[e]){if(7&e){let a;for(n=t[1],a=0;a<n.length;a+=1){const r=U(t,n,a);c[a]?c[a].p(r,e):(c[a]=V(r),c[a].c(),c[a].m(s,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=n.length}},i:t,o:t,d(t){t&&i(s),function(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}(c,t)}}}function Y(t,e,s){let{currentStatus:n=""}=e;const c=["New","Received","In Work","In Q.C.","Returned"];return t.$$set=t=>{"currentStatus"in t&&s(0,n=t.currentStatus)},[n,c,function(t){return t<=c.indexOf(n)?"#999283":"#dfdfdf"}]}class Z extends F{constructor(t){super(),W(this,t,Y,X,a,{currentStatus:0})}}function tt(t){let e,s;return e=new Z({props:{currentStatus:t[1]}}),{c(){J(e.$$.fragment)},m(t,n){M(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.currentStatus=t[1]),e.$set(n)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function et(t){let e,s,n,c,a,f,m,$,v,b,g,x,y,w,k,R,C,S,N,j,E,_,A,O,P,W,F,H,Q,B,z,G,U,V,X,Y,Z,et,st,nt,ct,at,rt,ot,it,lt,ut,dt,ft,pt,ht,mt,$t,vt,bt,gt,xt,yt,wt,kt,Rt,Ct,St,Nt,jt,Et,_t,At,Ot,Dt,Lt,It,qt=t[0].jobNumber+"",Jt=t[0].returnAddress+"",Mt=t[0].jobNumber+"",Tt=t[6](t[0].jobStatus),Pt=t[0].serviceDescription+"",Wt=Tt&&tt(t);return Lt=new K({}),{c(){e=l("div"),s=l("div"),s.innerHTML='<span class="csa-text-title">Repair Status Lookup</span>',n=d(),c=l("div"),a=d(),f=l("div"),m=l("div"),$=l("div"),v=l("div"),b=l("h1"),g=u(t[5]),x=d(),y=l("div"),w=d(),k=l("div"),k.textContent="Current Repairs",R=d(),C=l("div"),S=u("Job: "),N=u(qt),j=d(),E=l("div"),_=l("div"),A=l("div"),O=l("div"),O.textContent="Order Placed:",P=d(),W=l("div"),F=u(t[3]),H=d(),Q=l("div"),B=l("div"),B.textContent="Return Address:",z=d(),G=l("div"),U=u(Jt),V=d(),X=l("div"),Y=l("div"),Y.textContent="Job Number:",Z=d(),et=l("div"),st=u(Mt),nt=d(),ct=l("div"),at=l("div"),at.textContent="Order Status: ",rt=d(),ot=l("div"),it=u(t[2]),lt=d(),Wt&&Wt.c(),ut=d(),dt=l("div"),ft=d(),pt=l("div"),ht=l("div"),mt=l("div"),$t=l("h1"),$t.textContent="Artisan Notes",vt=d(),bt=l("div"),gt=d(),xt=l("div"),yt=u(Pt),wt=d(),kt=l("div"),Rt=l("h1"),Rt.textContent="Anticipated Completion",Ct=d(),St=l("div"),Nt=d(),jt=l("div"),Et=u(t[4]),_t=d(),At=l("div"),Ot=d(),Dt=l("div"),J(Lt.$$.fragment),p(c,"class","csa-vgap"),p(b,"class","csa-text-header"),p(y,"class","csa-status-line"),p(k,"class","csa-text-regular"),p(C,"class","csa-text-bold"),p(v,"class","csa-section-status-left"),p(O,"class","csa-text-regular"),p(W,"class","csa-text-bold csa-text-status-detail"),p(A,"class","csa-section-status-header-block"),p(B,"class","csa-text-regular"),p(G,"class","csa-text-bold csa-text-status-detail"),p(Q,"class","csa-section-status-header-block"),p(Y,"class","csa-text-regular"),p(et,"class","csa-text-bold csa-text-status-detail"),p(X,"class","csa-section-status-header-block"),p(_,"class","csa-layout-hflex csa-section-status-header"),p(at,"class","csa-text-regular"),p(ot,"class","csa-text-bold csa-text-status-detail"),p(ct,"class","csa-section-status-text"),p(E,"class","csa-section-status-right"),p($,"class","csa-layout-hflex csa-section-status"),p(m,"class","csa-section-container"),p(f,"class","csa-section"),p(dt,"class","csa-vgap"),p($t,"class","csa-text-header csa-section-heading-bottom"),p(bt,"class","csa-status-line csa-status-line-bottom"),p(xt,"class","csa-text-bold"),p(mt,"class","csa-layout-vflex csa-section-status csa-section-status-bottom"),p(Rt,"class","csa-text-header csa-section-heading-bottom"),p(St,"class","csa-status-line csa-status-line-bottom"),p(jt,"class","csa-text-completion-date"),p(kt,"class","csa-layout-vflex csa-section-status csa-section-status-bottom"),p(ht,"class","csa-layout-hflex csa-section-container csa-section-container-bottom"),p(pt,"class","csa-section"),p(At,"class","csa-vgap"),p(Dt,"class","csa-section"),p(e,"class","csa-result-container")},m(t,i){o(t,e,i),r(e,s),r(e,n),r(e,c),r(e,a),r(e,f),r(f,m),r(m,$),r($,v),r(v,b),r(b,g),r(v,x),r(v,y),r(v,w),r(v,k),r(v,R),r(v,C),r(C,S),r(C,N),r($,j),r($,E),r(E,_),r(_,A),r(A,O),r(A,P),r(A,W),r(W,F),r(_,H),r(_,Q),r(Q,B),r(Q,z),r(Q,G),r(G,U),r(_,V),r(_,X),r(X,Y),r(X,Z),r(X,et),r(et,st),r(E,nt),r(E,ct),r(ct,at),r(ct,rt),r(ct,ot),r(ot,it),r(E,lt),Wt&&Wt.m(E,null),r(e,ut),r(e,dt),r(e,ft),r(e,pt),r(pt,ht),r(ht,mt),r(mt,$t),r(mt,vt),r(mt,bt),r(mt,gt),r(mt,xt),r(xt,yt),r(ht,wt),r(ht,kt),r(kt,Rt),r(kt,Ct),r(kt,St),r(kt,Nt),r(kt,jt),r(jt,Et),r(e,_t),r(e,At),r(e,Ot),r(e,Dt),M(Lt,Dt,null),It=!0},p(t,[e]){(!It||32&e)&&h(g,t[5]),(!It||1&e)&&qt!==(qt=t[0].jobNumber+"")&&h(N,qt),(!It||8&e)&&h(F,t[3]),(!It||1&e)&&Jt!==(Jt=t[0].returnAddress+"")&&h(U,Jt),(!It||1&e)&&Mt!==(Mt=t[0].jobNumber+"")&&h(st,Mt),(!It||4&e)&&h(it,t[2]),1&e&&(Tt=t[6](t[0].jobStatus)),Tt?Wt?(Wt.p(t,e),1&e&&I(Wt,1)):(Wt=tt(t),Wt.c(),I(Wt,1),Wt.m(E,null)):Wt&&(D(),q(Wt,1,1,(()=>{Wt=null})),L()),(!It||1&e)&&Pt!==(Pt=t[0].serviceDescription+"")&&h(yt,Pt),(!It||16&e)&&h(Et,t[4])},i(t){It||(I(Wt),I(Lt.$$.fragment,t),It=!0)},o(t){q(Wt),q(Lt.$$.fragment,t),It=!1},d(t){t&&i(e),Wt&&Wt.d(),T(Lt)}}}function st(t){if(console.log(t),!t)return"Pending Estimation";const e=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."][parseInt(t.slice(5,7))-1],s=parseInt(t.slice(8));return`${e} ${s}${function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(s)}`}function nt(t,e,s){let n,c,a,r,o,{searchResult:i}=e;const l=["action required","declined","not repairable"];function u(t){const e={New:["new","arriving to facility"],Received:["received","quote approved"],"In Work":["in-work","overdue in-work"],"In Q.C.":["in qc","ready to ship"],Returned:["returned","complete"],"Not Repairable":["not repairable"],Declined:["declined"],"Action Required":["action required"]},s=t.toLowerCase();for(const[t,n]of Object.entries(e))if(n.includes(s))return t;return null}return t.$$set=t=>{"searchResult"in t&&s(0,i=t.searchResult)},t.$$.update=()=>{1&t.$$.dirty&&s(5,n=function(t){let e="This Repair";return t&&(e=function(t){return t.endsWith("s")||t.endsWith("S")?`${t}' Repair`:`${t}'s Repair`}(t)),e}(i.clientFirstName)),1&t.$$.dirty&&s(4,c=st(i.dueDate)),1&t.$$.dirty&&s(3,a=st(i.subDate)),1&t.$$.dirty&&s(2,r=function(t){const e=u(t);let s="";return s=l.includes(e.toLowerCase())?"One of our service reps will contact you shortly.":e,s}(i.jobStatus)),1&t.$$.dirty&&s(1,o=u(i.jobStatus))},[i,o,r,a,c,n,function(t){return!l.includes(t.toLowerCase())}]}class ct extends F{constructor(t){super(),W(this,t,nt,et,a,{searchResult:0})}}function at(t){let e,s,n;return s=new Z({props:{currentStatus:t[1]}}),{c(){e=l("div"),J(s.$$.fragment),p(e,"class","csa-section-4")},m(t,c){o(t,e,c),M(s,e,null),n=!0},p(t,e){const n={};2&e&&(n.currentStatus=t[1]),s.$set(n)},i(t){n||(I(s.$$.fragment,t),n=!0)},o(t){q(s.$$.fragment,t),n=!1},d(t){t&&i(e),T(s)}}}function rt(t){let e,s,n,c,a,f,m,$,v,b,g,x,y,w,k,R,C,S,N,j,E,_,A,O,P,W,F,H,Q,B,z,G,U,V,X,Y,Z,tt,et,st,nt,ct,rt,ot,it,lt,ut,dt,ft,pt,ht,mt,$t,vt,bt,gt,xt=t[0].jobNumber+"",yt=t[6](t[0].jobStatus),wt=t[0].returnAddress+"",kt=t[0].serviceDescription+"",Rt=yt&&at(t);return $t=new K({}),{c(){e=l("div"),s=l("div"),n=l("div"),c=l("div"),a=l("h1"),f=u(t[5]),m=d(),$=l("div"),v=l("h1"),v.textContent="Anticipated Completion",b=d(),g=l("div"),x=u(t[4]),y=d(),w=l("div"),k=l("div"),R=l("div"),R.textContent="Order Placed:",C=d(),S=l("div"),N=u(t[3]),j=d(),E=l("div"),_=l("div"),_.textContent="Job Number:",A=d(),O=l("div"),P=u(xt),W=d(),F=l("div"),H=l("div"),H.textContent="Order Status: ",Q=d(),B=l("div"),z=u(t[2]),G=d(),Rt&&Rt.c(),U=d(),V=l("div"),X=l("div"),X.textContent="Return Address:",Y=d(),Z=l("div"),tt=u(wt),et=d(),st=l("div"),nt=d(),ct=l("div"),rt=l("div"),ot=l("h1"),ot.textContent="Artisan Notes",it=d(),lt=l("div"),ut=d(),dt=l("div"),ft=u(kt),pt=d(),ht=l("div"),mt=d(),J($t.$$.fragment),vt=d(),bt=l("div"),p(a,"class","csa-text-header"),p(c,"class","csa-client-name--mobile"),p(v,"class","csa-text-header"),p(g,"class","csa-text-completion-date"),p($,"class","csa-layout-vflex csa-completion-date--mobile"),p(n,"class","csa-layout-hflex csa-section-1"),p(R,"class","csa-text-regular"),p(S,"class","csa-text-bold csa-text-status-detail"),p(_,"class","csa-text-regular"),p(O,"class","csa-text-bold csa-text-status-detail"),p(w,"class","csa-layout-hflex csa-section-status-header csa-section-2"),p(H,"class","csa-text-regular"),p(B,"class","csa-text-bold csa-text-status-detail"),p(F,"class","csa-section-status-text csa-section-3"),p(X,"class","csa-text-regular"),p(Z,"class","csa-text-bold csa-text-status-detail"),p(V,"class","csa-section-status-header-block csa-section-5"),p(s,"class","csa-card csa-layout-vflex"),p(st,"class","csa-vgap"),p(ot,"class","csa-text-header csa-section-heading-bottom"),p(lt,"class","csa-status-line csa-status-line-bottom"),p(dt,"class","csa-text-bold"),p(rt,"class","csa-layout-vflex"),p(ct,"class","csa-card csa-layout-vflex csa-artisan-notes"),p(ht,"class","csa-vgap"),p(bt,"class","csa-vgap"),p(e,"class","csa-result-container--mobile")},m(t,i){o(t,e,i),r(e,s),r(s,n),r(n,c),r(c,a),r(a,f),r(n,m),r(n,$),r($,v),r($,b),r($,g),r(g,x),r(s,y),r(s,w),r(w,k),r(k,R),r(k,C),r(k,S),r(S,N),r(w,j),r(w,E),r(E,_),r(E,A),r(E,O),r(O,P),r(s,W),r(s,F),r(F,H),r(F,Q),r(F,B),r(B,z),r(s,G),Rt&&Rt.m(s,null),r(s,U),r(s,V),r(V,X),r(V,Y),r(V,Z),r(Z,tt),r(e,et),r(e,st),r(e,nt),r(e,ct),r(ct,rt),r(rt,ot),r(rt,it),r(rt,lt),r(rt,ut),r(rt,dt),r(dt,ft),r(e,pt),r(e,ht),r(e,mt),M($t,e,null),r(e,vt),r(e,bt),gt=!0},p(t,[e]){(!gt||32&e)&&h(f,t[5]),(!gt||16&e)&&h(x,t[4]),(!gt||8&e)&&h(N,t[3]),(!gt||1&e)&&xt!==(xt=t[0].jobNumber+"")&&h(P,xt),(!gt||4&e)&&h(z,t[2]),1&e&&(yt=t[6](t[0].jobStatus)),yt?Rt?(Rt.p(t,e),1&e&&I(Rt,1)):(Rt=at(t),Rt.c(),I(Rt,1),Rt.m(s,U)):Rt&&(D(),q(Rt,1,1,(()=>{Rt=null})),L()),(!gt||1&e)&&wt!==(wt=t[0].returnAddress+"")&&h(tt,wt),(!gt||1&e)&&kt!==(kt=t[0].serviceDescription+"")&&h(ft,kt)},i(t){gt||(I(Rt),I($t.$$.fragment,t),gt=!0)},o(t){q(Rt),q($t.$$.fragment,t),gt=!1},d(t){t&&i(e),Rt&&Rt.d(),T($t)}}}function ot(t){if(console.log(t),!t)return"Pending Estimation";const e=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."][parseInt(t.slice(5,7))-1],s=parseInt(t.slice(8));return`${e} ${s}${function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(s)}`}function it(t,e,s){let n,c,a,r,o,{searchResult:i}=e;const l=["action required","declined","not repairable"];function u(t){const e={New:["new","arriving to facility"],Received:["received","quote approved"],"In Work":["in-work","overdue in-work"],"In Q.C.":["in qc","ready to ship"],Returned:["returned","complete"],"Not Repairable":["not repairable"],Declined:["declined"],"Action Required":["action required"]},s=t.toLowerCase();for(const[t,n]of Object.entries(e))if(n.includes(s))return t;return null}return t.$$set=t=>{"searchResult"in t&&s(0,i=t.searchResult)},t.$$.update=()=>{1&t.$$.dirty&&s(5,n=function(t){let e="This Repair";return t&&(e=function(t){return t.endsWith("s")||t.endsWith("S")?`${t}' Repair`:`${t}'s Repair`}(t)),e}(i.clientFirstName)),1&t.$$.dirty&&s(4,c=ot(i.dueDate)),1&t.$$.dirty&&s(3,a=ot(i.subDate)),1&t.$$.dirty&&s(2,r=function(t){const e=u(t);let s="";return s=l.includes(e.toLowerCase())?"One of our service reps will contact you shortly.":e,s}(i.jobStatus)),1&t.$$.dirty&&s(1,o=u(i.jobStatus))},[i,o,r,a,c,n,function(t){return!l.includes(t.toLowerCase())}]}class lt extends F{constructor(t){super(),W(this,t,it,rt,a,{searchResult:0})}}function ut(t){let e,s,n,c;return e=new lt({props:{searchResult:t[0]}}),n=new ct({props:{searchResult:t[0]}}),{c(){J(e.$$.fragment),s=d(),J(n.$$.fragment)},m(t,a){M(e,t,a),o(t,s,a),M(n,t,a),c=!0},p(t,s){const c={};1&s&&(c.searchResult=t[0]),e.$set(c);const a={};1&s&&(a.searchResult=t[0]),n.$set(a)},i(t){c||(I(e.$$.fragment,t),I(n.$$.fragment,t),c=!0)},o(t){q(e.$$.fragment,t),q(n.$$.fragment,t),c=!1},d(t){T(e,t),t&&i(s),T(n,t)}}}function dt(t){let e,s,n,c;s=new z({}),s.$on("onSearch",t[1]);let a=t[0].count>0&&ut(t);return{c(){e=l("div"),J(s.$$.fragment),n=d(),a&&a.c(),p(e,"class","carousel-search-app")},m(t,i){o(t,e,i),M(s,e,null),r(e,n),a&&a.m(e,null),c=!0},p(t,[s]){t[0].count>0?a?(a.p(t,s),1&s&&I(a,1)):(a=ut(t),a.c(),I(a,1),a.m(e,null)):a&&(D(),q(a,1,1,(()=>{a=null})),L())},i(t){c||(I(s.$$.fragment,t),I(a),c=!0)},o(t){q(s.$$.fragment,t),q(a),c=!1},d(t){t&&i(e),T(s),a&&a.d()}}}function ft(t,e,s){let n={count:0};return[n,function(t){console.log(t.detail),s(0,n={count:0}),s(0,n=t.detail)}]}return new class extends F{constructor(t){super(),W(this,t,ft,dt,a,{})}}({target:document.getElementById("carousel-search-app")})}();
//# sourceMappingURL=bundle.js.map
