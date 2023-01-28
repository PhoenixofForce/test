var app=function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function o(e){return e()}function i(){return Object.create(null)}function l(e){e.forEach(o)}function r(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}const s="undefined"!=typeof window;let c=s?()=>window.performance.now():()=>Date.now(),u=s?e=>requestAnimationFrame(e):e;const m=new Set;function h(e){m.forEach((t=>{t.c(e)||(m.delete(t),t.f())})),0!==m.size&&u(h)}function d(e){let t;return 0===m.size&&u(h),{promise:new Promise((n=>{m.add(t={c:e,f:n})})),abort(){m.delete(t)}}}function g(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function v(){return x(" ")}function k(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function S(e,t,n){e.classList[n?"add":"remove"](t)}const C=new Set;let T,F=0;function L(e,t,n,o,i,l,r,a=0){const s=16.666/o;let c="{\n";for(let e=0;e<=1;e+=s){const o=t+(n-t)*l(e);c+=100*e+`%{${r(o,1-o)}}\n`}const u=c+`100% {${r(n,1-n)}}\n}`,m=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,h=e.ownerDocument;C.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(b("style")).sheet),g=h.__svelte_rules||(h.__svelte_rules={});g[m]||(g[m]=!0,d.insertRule(`@keyframes ${m} ${u}`,d.cssRules.length));const f=e.style.animation||"";return e.style.animation=`${f?`${f}, `:""}${m} ${o}ms linear ${i}ms 1 both`,F+=1,m}function D(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-o.length;i&&(e.style.animation=o.join(", "),F-=i,F||u((()=>{F||(C.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),C.clear())})))}function P(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const o=getComputedStyle(e),i="none"===o.transform?"":o.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}function J(e){T=e}const j=[],E=[],G=[],A=[],M=Promise.resolve();let H=!1;function V(e){G.push(e)}function I(e){A.push(e)}let N=!1;const O=new Set;function z(){if(!N){N=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];J(t),W(t.$$)}for(J(null),j.length=0;E.length;)E.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];O.has(t)||(O.add(t),t())}G.length=0}while(j.length);for(;A.length;)A.pop()();H=!1,N=!1,O.clear()}}function W(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}let B;function R(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const q=new Set;let K;function U(){K={r:0,c:[],p:K}}function Y(){K.r||l(K.c),K=K.p}function Q(e,t){e&&e.i&&(q.delete(e),e.i(t))}function X(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),K.c.push((()=>{q.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const Z={duration:0};function ee(n,o,i,a){let s=o(n,i),u=a?0:1,m=null,h=null,g=null;function f(){g&&D(n,g)}function p(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function y(o){const{delay:i=0,duration:r=300,easing:a=t,tick:y=e,css:b}=s||Z,x={start:c()+i,b:o};o||(x.group=K,K.r+=1),m||h?h=x:(b&&(f(),g=L(n,u,o,r,i,a,b)),o&&y(0,1),m=p(x,r),V((()=>R(n,o,"start"))),d((e=>{if(h&&e>h.start&&(m=p(h,r),h=null,R(n,m.b,"start"),b&&(f(),g=L(n,u,m.b,m.duration,0,a,s.css))),m)if(e>=m.end)y(u=m.b,1-u),R(n,m.b,"end"),h||(m.b?f():--m.group.r||l(m.group.c)),m=null;else if(e>=m.start){const t=e-m.start;u=m.a+m.d*a(t/m.duration),y(u,1-u)}return!(!m&&!h)})))}return{run(e){r(s)?(B||(B=Promise.resolve(),B.then((()=>{B=null}))),B).then((()=>{s=s(),y(e)})):y(e)},end(){f(),m=h=null}}}function te(e,t){e.f(),function(e,t){X(e,1,1,(()=>{t.delete(e.key)}))}(e,t)}function ne(e,t,n){const o=e.$$.props[t];void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function oe(e){e&&e.c()}function ie(e,t,n){const{fragment:i,on_mount:a,on_destroy:s,after_update:c}=e.$$;i&&i.m(t,n),V((()=>{const t=a.map(o).filter(r);s?s.push(...t):l(t),e.$$.on_mount=[]})),c.forEach(V)}function le(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){-1===e.$$.dirty[0]&&(j.push(e),H||(H=!0,M.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(t,n,o,r,a,s,c=[-1]){const u=T;J(t);const m=n.props||{},h=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:c,skip_bound:!1};let d=!1;if(h.ctx=o?o(t,m,((e,n,...o)=>{const i=o.length?o[0]:n;return h.ctx&&a(h.ctx[e],h.ctx[e]=i)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](i),d&&re(t,e)),n})):[],h.update(),d=!0,l(h.before_update),h.fragment=!!r&&r(h.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);h.fragment&&h.fragment.l(e),e.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&Q(t.$$.fragment),ie(t,n.target,n.anchor),z()}J(u)}class se{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ce(t){let n,o,i,l;return{c(){n=b("div"),o=b("nav"),o.innerHTML='<div class="nav-left"><a class="brand noselect" href="/">PhoenixofForce</a></div> \n      \n          <div class="nav-right svelte-1lh1bo9"><a href="/">About</a> \n                <a href="projects" class="active">Projects</a></div>',$(o,"class","nav svelte-1lh1bo9"),$(n,"class","header svelte-1lh1bo9"),_(n,"--x",t[0]+"px")},m(e,r){f(e,n,r),g(n,o),i||(l=k(n,"mousemove",t[1]),i=!0)},p(e,[t]){1&t&&_(n,"--x",e[0]+"px")},i:e,o:e,d(e){e&&p(n),i=!1,l()}}}function ue(e,t,n){let o=250;return[o,e=>n(0,o=e.x)]}class me extends se{constructor(e){super(),ae(this,e,ue,ce,a,{})}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var he,de;(function(e,t){e.exports=function(){var e={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:6,maxFontSize:80,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!1};return function(n,o){o||(o={});var i={};for(var l in e)o.hasOwnProperty(l)?i[l]=o[l]:i[l]=e[l];"function"==typeof n.toArray&&(n=n.toArray());var r=Object.prototype.toString.call(n);"[object Array]"!==r&&"[object NodeList]"!==r&&"[object HTMLCollection]"!==r&&(n=[n]);for(var a=0;a<n.length;a++)t(n[a],i)};function t(e,t){if(!i(e)||!t.reProcess&&e.getAttribute("textFitted"))return!1;var a,s,c,u,m,h,d;if(t.reProcess||e.setAttribute("textFitted",1),c=e.innerHTML,u=o(e),s=n(e),!u||!t.widthOnly&&!s)throw t.widthOnly?new Error("Set a static width on the target element "+e.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+e.outerHTML+" before using textFit!");-1===c.indexOf("textFitted")?((a=document.createElement("span")).className="textFitted",a.style.display="inline-block",a.innerHTML=c,e.innerHTML="",e.appendChild(a)):l(a=e.querySelector("span.textFitted"),"textFitAlignVert")&&(a.className=a.className.replace("textFitAlignVert",""),a.style.height="",e.className.replace("textFitAlignVertFlex","")),t.alignHoriz&&(e.style["text-align"]="center",a.style["text-align"]="center");var g=t.multiLine;t.detectMultiLine&&!g&&a.scrollHeight>=2*parseInt(window.getComputedStyle(a)["font-size"],10)&&(g=!0),g||(e.style["white-space"]="nowrap"),m=t.minFontSize,d=t.maxFontSize;for(var f=m;m<=d;)h=d+m>>1,a.style.fontSize=h+"px",a.scrollWidth<=u&&(t.widthOnly||a.scrollHeight<=s)?(f=h,m=h+1):d=h-1;if(a.style.fontSize!=f+"px"&&(a.style.fontSize=f+"px"),t.alignVert){r();var p=a.scrollHeight;"static"===window.getComputedStyle(e).position&&(e.style.position="relative"),l(a,"textFitAlignVert")||(a.className=a.className+" textFitAlignVert"),a.style.height=p+"px",t.alignVertWithFlexbox&&!l(e,"textFitAlignVertFlex")&&(e.className=e.className+" textFitAlignVertFlex")}}function n(e){var t=window.getComputedStyle(e,null);return e.clientHeight-parseInt(t.getPropertyValue("padding-top"),10)-parseInt(t.getPropertyValue("padding-bottom"),10)}function o(e){var t=window.getComputedStyle(e,null);return e.clientWidth-parseInt(t.getPropertyValue("padding-left"),10)-parseInt(t.getPropertyValue("padding-right"),10)}function i(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function l(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function r(){if(!document.getElementById("textFitStyleSheet")){var e=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),t=document.createElement("style");t.type="text/css",t.id="textFitStyleSheet",t.innerHTML=e,document.body.appendChild(t)}}}()})(de={path:he,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&de.path)}},de.exports),de.exports;function ge(e){let t,n;return{c(){t=b("span"),n=x(e[2]),_(t,"color","#"+e[4]),$(t,"class","svelte-1sryv4q")},m(e,o){f(e,t,o),g(t,n)},p(e,o){4&o&&w(n,e[2]),16&o&&_(t,"color","#"+e[4])},d(e){e&&p(t)}}}function fe(t){let n,o,i,r,a,s,c,u=t[3]&&ge(t);return{c(){n=b("a"),o=b("img"),a=v(),u&&u.c(),o.src!==(i=t[1]+"&color="+t[4])&&$(o,"src",i),$(o,"alt",r="link to "+t[0]),$(n,"href",t[0]),$(n,"class","button icon-only clear hide-pr image-link svelte-1sryv4q"),$(n,"title",t[2])},m(e,i){f(e,n,i),g(n,o),g(n,a),u&&u.m(n,null),s||(c=[k(n,"mouseover",t[5]),k(n,"mouseout",t[6])],s=!0)},p(e,[t]){18&t&&o.src!==(i=e[1]+"&color="+e[4])&&$(o,"src",i),1&t&&r!==(r="link to "+e[0])&&$(o,"alt",r),e[3]?u?u.p(e,t):(u=ge(e),u.c(),u.m(n,null)):u&&(u.d(1),u=null),1&t&&$(n,"href",e[0]),4&t&&$(n,"title",e[2])},i:e,o:e,d(e){e&&p(n),u&&u.d(),s=!1,l(c)}}}function pe(e,t,n){let{link:o}=t,{imgLink:i}=t,{title:l=""}=t,{showTitle:r=!1}=t,a="FAFAFA";return e.$$set=e=>{"link"in e&&n(0,o=e.link),"imgLink"in e&&n(1,i=e.imgLink),"title"in e&&n(2,l=e.title),"showTitle"in e&&n(3,r=e.showTitle)},[o,i,l,r,a,function(){n(4,a=getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim().substring(1))},function(){n(4,a=getComputedStyle(document.documentElement).getPropertyValue("--font-color").trim().substring(1))}]}class ye extends se{constructor(e){super(),ae(this,e,pe,fe,a,{link:0,imgLink:1,title:2,showTitle:3})}}function be(e){const t=e-1;return t*t*t+1}function xe(e,{delay:n=0,duration:o=400,easing:i=t}){const l=+getComputedStyle(e).opacity;return{delay:n,duration:o,easing:i,css:e=>"opacity: "+e*l}}function ve(e,t,n){const o=getComputedStyle(e),i="none"===o.transform?"":o.transform,l=t.from.width/e.clientWidth,a=t.from.height/e.clientHeight,s=(t.from.left-t.to.left)/l,c=(t.from.top-t.to.top)/a,u=Math.sqrt(s*s+c*c),{delay:m=0,duration:h=(e=>120*Math.sqrt(e)),easing:d=be}=n;return{delay:m,duration:r(h)?h(u):h,easing:d,css:(e,t)=>`transform: ${i} translate(${t*s}px, ${t*c}px);`}}function ke(e,t,n){const o=e.slice();return o[0]=t[n],o}function $e(e,t,n){const o=e.slice();return o[12]=t[n],o}function we(e){let t,n;return{c(){t=b("img"),t.src!==(n="./images/"+e[4]+".png")&&$(t,"src",n),_(t,"display","block"),_(t,"max-width",Fe+"px"),_(t,"max-height",Le+"px"),_(t,"width","auto"),_(t,"height","auto"),$(t,"alt","Screenshot"),$(t,"class","svelte-1y0w8yy")},m(e,n){f(e,t,n)},p(e,o){16&o&&t.src!==(n="./images/"+e[4]+".png")&&$(t,"src",n)},d(e){e&&p(t)}}}function _e(e){let t,n;return{c(){t=b("span"),n=x(e[3]),$(t,"class","year svelte-1y0w8yy")},m(e,o){f(e,t,o),g(t,n)},p(e,t){8&t&&w(n,e[3])},d(e){e&&p(t)}}}function Se(e){let t,n,o,i=e[12]+"";return{c(){t=b("span"),n=x(i),o=v(),$(t,"class","tag is-small")},m(e,i){f(e,t,i),g(t,n),g(t,o)},p(e,t){32&t&&i!==(i=e[12]+"")&&w(n,i)},d(e){e&&p(t)}}}function Ce(e){let t,n;return t=new ye({props:{link:e[0].link,imgLink:"https://icongr.am/"+e[0].icon+".svg?size=20",title:e[0].alt}}),{c(){oe(t.$$.fragment)},m(e,o){ie(t,e,o),n=!0},p(e,n){const o={};64&n&&(o.link=e[0].link),64&n&&(o.imgLink="https://icongr.am/"+e[0].icon+".svg?size=20"),64&n&&(o.title=e[0].alt),t.$set(o)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Te(e){let t,n,o,i,r,a,s,c,u,m,h,d,C,T,F,L,D,P,J,j,E=e[4]&&we(e),G=e[3]&&_e(e),A=e[5].sort(),M=[];for(let t=0;t<A.length;t+=1)M[t]=Se($e(e,A,t));let H=e[6],V=[];for(let t=0;t<H.length;t+=1)V[t]=Ce(ke(e,H,t));const I=e=>X(V[e],1,1,(()=>{V[e]=null}));return{c(){t=b("div"),n=b("a"),o=b("div"),E&&E.c(),i=v(),r=b("div"),a=b("a"),s=b("b"),c=x(e[1]),m=v(),G&&G.c(),h=v(),d=b("div"),C=x(e[2]),T=v(),F=b("div");for(let e=0;e<M.length;e+=1)M[e].c();L=v(),D=b("div");for(let e=0;e<V.length;e+=1)V[e].c();$(o,"class","image-display svelte-1y0w8yy"),_(o,"width",Fe+"px"),_(o,"height",Le+"px"),_(o,"overflow","hidden"),_(o,"--border-color",(e[7]?"var(--color-primary)":"var(--bg-secondary-color)")+"\r\n      "),S(o,"no-image",!e[4]),$(n,"href",e[0]),$(n,"class","svelte-1y0w8yy"),$(s,"class","svelte-1y0w8yy"),$(a,"href",u=e[0]?e[0]:"javascript:void(0);"),$(a,"class","svelte-1y0w8yy"),$(r,"class","title"),$(d,"class","textholder svelte-1y0w8yy"),$(t,"id",e[1]),_(t,"width",Fe+"px")},m(l,u){f(l,t,u),g(t,n),g(n,o),E&&E.m(o,null),g(t,i),g(t,r),g(r,a),g(a,s),g(s,c),g(r,m),G&&G.m(r,null),g(t,h),g(t,d),g(d,C),g(t,T),g(t,F);for(let e=0;e<M.length;e+=1)M[e].m(F,null);g(t,L),g(t,D);for(let e=0;e<V.length;e+=1)V[e].m(D,null);P=!0,J||(j=[k(o,"mouseenter",e[8]),k(o,"mouseleave",e[9])],J=!0)},p(e,[i]){if(e[4]?E?E.p(e,i):(E=we(e),E.c(),E.m(o,null)):E&&(E.d(1),E=null),(!P||128&i)&&_(o,"--border-color",(e[7]?"var(--color-primary)":"var(--bg-secondary-color)")+"\r\n      "),16&i&&S(o,"no-image",!e[4]),(!P||1&i)&&$(n,"href",e[0]),(!P||2&i)&&w(c,e[1]),(!P||1&i&&u!==(u=e[0]?e[0]:"javascript:void(0);"))&&$(a,"href",u),e[3]?G?G.p(e,i):(G=_e(e),G.c(),G.m(r,null)):G&&(G.d(1),G=null),(!P||4&i)&&w(C,e[2]),32&i){let t;for(A=e[5].sort(),t=0;t<A.length;t+=1){const n=$e(e,A,t);M[t]?M[t].p(n,i):(M[t]=Se(n),M[t].c(),M[t].m(F,null))}for(;t<M.length;t+=1)M[t].d(1);M.length=A.length}if(64&i){let t;for(H=e[6],t=0;t<H.length;t+=1){const n=ke(e,H,t);V[t]?(V[t].p(n,i),Q(V[t],1)):(V[t]=Ce(n),V[t].c(),Q(V[t],1),V[t].m(D,null))}for(U(),t=H.length;t<V.length;t+=1)I(t);Y()}(!P||2&i)&&$(t,"id",e[1])},i(e){if(!P){for(let e=0;e<H.length;e+=1)Q(V[e]);P=!0}},o(e){V=V.filter(Boolean);for(let e=0;e<V.length;e+=1)X(V[e]);P=!1},d(e){e&&p(t),E&&E.d(),G&&G.d(),y(M,e),y(V,e),J=!1,l(j)}}}let Fe=315,Le=250;function De(e,t,n){let o=!1,{title:i="Working Title"}=t,{text:l="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam n"}=t,{year:r=""}=t,{image:a}=t,{tags:s=[]}=t,{link:c=""}=t,{links:u=[]}=t;0==c.length&&u.length>0&&(c=u[0].link);return e.$$set=e=>{"title"in e&&n(1,i=e.title),"text"in e&&n(2,l=e.text),"year"in e&&n(3,r=e.year),"image"in e&&n(4,a=e.image),"tags"in e&&n(5,s=e.tags),"link"in e&&n(0,c=e.link),"links"in e&&n(6,u=e.links)},[c,i,l,r,a,s,u,o,e=>n(7,o=!0),e=>n(7,o=!1)]}class Pe extends se{constructor(e){super(),ae(this,e,De,Te,a,{title:1,text:2,year:3,image:4,tags:5,link:0,links:6})}}let Je=[{title:"Speed Barber",text:"You play as the SpeedBarber who chose the busy travellers of the subway as his customers. Because they are so busy, you have to finish their requests in 10 seconds or less.",tags:["C++","Game","GameJam"],image:"speedbarber",year:"LD51",links:[{link:"https://ldjam.com/events/ludum-dare/51/speed-barber",icon:"material/web",alt:"LD Entry"},{link:"https://github.com/PhoenixofForce/Ludum_Dare_51",icon:"material/github",alt:"Source Code"}]},{title:"Dont Sleep",text:"A point and click game made in 48h with the current state of my engine. Tomorrow is the next DudumDare and you have to delay the inevitable sleep to see the theme as early as possible.",tags:["Java","Game","GameJam"],image:"DontSleep_Cover",year:"LD50",links:[{link:"https://ldjam.com/events/ludum-dare/50/dont-sleep",icon:"material/web",alt:"LD Entry"},{link:"https://github.com/PhoenixofForce/Ludum_Dare_50",icon:"material/github",alt:"Source Code"}]},{title:"LWJGL Framework",text:"A work in progress game codebase written in Java and OpenGL.",tags:["Java","Game"],image:"engine",year:"2022",links:[{link:"https://github.com/PhoenixofForce/LWJGL_Framework",icon:"material/github",alt:"Source Code"}]},{title:"0 Hour Game",text:"Turns out 2021 wasnt the last. So i made a game in 0 hours again. This time an easy endless runner where you have to jump over obstacles.",tags:["Java","GameJam","Game"],image:"zero_game_2",year:"0h Jam 2021",links:[{link:"http://0hgame.eu/games.php?year=2021",icon:"material/web",alt:"Event Page"},{link:"https://github.com/PhoenixofForce/0HGameJam_21",icon:"material/github",alt:"Source Code"}]},{title:"Chrono Jump",text:"A very short game for the 48 LD, which plays with the time. Travel back in time to open doors or change the position of moving platforms.",tags:["Java","Game","GameJam"],image:"ld48",year:"LD48",links:[{link:"https://ldjam.com/events/ludum-dare/48/chronojump",icon:"material/web",alt:"LD Entry"},{link:"https://github.com/PhoenixofForce/Ludum_Dare_48",icon:"material/github",alt:"Source Code"}]},{title:"DnD Utils",text:"Want to roll some digital dice? Compare Spell damage? Then this site is for you.",tags:["DND","Svelte","Web","Tool"],image:"dnd_util",year:2021,links:[{link:"https://phoenixofforce.github.io/DND_Utils/",icon:"material/web",alt:"Website"},{link:"https://github.com/PhoenixofForce/DND_Utils",icon:"material/github",alt:"Source Code"}]},{title:"Dungeon Creator",text:"Create a custom Dungeon for your next session.",tags:["DND","Svelte","Web","Tool"],image:"dungeon_creator",year:2020,links:[{link:"https://phoenixofforce.github.io/DungeonCreator/",icon:"material/web",alt:"Website"},{link:"https://github.com/PhoenixofForce/DungeonCreator",icon:"material/github",alt:"Source Code"}]},{title:"Dungeon Viewer",text:"Host a game, share the link and watch your player struggle as you throw some dragons at them! This project no longer works as the host service I used discontinued its free plan. ",tags:["DND","Svelte","Web","Tool"],image:"dungeon_viewer_1",year:2020,links:[{link:"https://phoenixofforce.github.io/Dungeon_Viewer/",icon:"material/web",alt:"Website"},{link:"https://github.com/PhoenixofForce/Dungeon_Viewer",icon:"material/github",alt:"Source Code"}]},{title:"Entity Component System",text:"This is a test of an entity component system (ecs) featuring abilities, a moving platform, an enemy and a dash.",tags:["Java","Mechanic","Game"],image:"ecs",year:2020,links:[{link:"https://github.com/PhoenixofForce/ECS_Test",icon:"material/github",alt:"Source Code"}]},{title:"0 Hour Game",text:"A Game made in 0 Hours, -40 Minutes. This game jam was (supposed to be) the last of its kind. Play my version of Space Invaders",tags:["Java","GameJam","Game"],image:"zero_game",year:"0h Jam 2020",links:[{link:"http://0hgame.eu/games.php?year=2020",icon:"material/web",alt:"Event Page"},{link:"https://github.com/PhoenixofForce/0HGameJam",icon:"material/github",alt:"Source Code"}]},{title:"LaTxT",text:"Write LaTxT-like code to create magnificent .txt files.",tags:["Java","Tool"],image:"",year:2020,links:[{link:"https://github.com/PhoenixofForce/LaTxT",icon:"material/github",alt:"Source Code"}]},{title:"Parser",text:"A parser for all sort of languages. Write your own language and compile the code in Java.",tags:["Java"],image:"",year:2020,links:[{link:"https://github.com/PhoenixofForce/Parser",icon:"material/github",alt:"Source Code"}]},{title:"Bloody Medic",text:"Dwelve into the Dungeon to rescue your villagers. But watch your health as your life is currency.",tags:["GameJam","Game","Java"],image:"bloody_medic",year:"LD44",links:[{link:"https://ldjam.com/events/ludum-dare/44/bloody-medic",icon:"material/web",alt:"LD Entry"},{link:"https://github.com/Nottrex/LudumDare44",icon:"material/github",alt:"Source Code"}]},{title:"Dialogue System",text:"Dialogue System in the command line that uses tags, which are established in other projects of mine.",tags:["Mechanic","Java"],image:"",year:"2019",links:[{link:"https://github.com/PhoenixofForce/DialogueSystem",icon:"material/github",alt:"Source Code"}]},{title:"RayCast Scene",text:"This raycast scene renders 3D Prisms (objects with flat top and bottom) by sending rays from the player position in all directions.",tags:["Mechanic","Java"],image:"raycast",year:"2018",links:[{link:"https://github.com/PhoenixofForce/RayCast-Scene",icon:"material/github",alt:"Source Code"}]},{title:"Triangulated Polygon Collision",text:"You can create polygons that get translated into a group of triangles. These triangles are used for collision testing with the Separating Axis Theorem.",tags:["Mechanic","Java"],image:"axis",year:"2018",links:[{link:"https://github.com/PhoenixofForce/TriangulatedPolygonCollision",icon:"material/github",alt:"Source Code"}]},{title:"Clicker Defense",text:"Protect your Base from very unfriendly Slimes. Get resources to build powerful Towers.",tags:["GameJam","Game","Java"],image:"clicker_defense",year:"LD41",links:[{link:"https://ldjam.com/events/ludum-dare/41/clickerdefense",icon:"material/web",alt:"LD Entry"},{link:"https://github.com/PhoenixofForce/LudumDare41",icon:"material/github",alt:"Source Code"}]},{title:"Texture Packer",text:"A texture packer based on steering algorithms.",tags:["Java","Tool"],image:"texture_packer",year:2017,links:[{link:"https://github.com/PhoenixofForce/TexturePacker",icon:"material/github",alt:"Source Code"}]},{title:"LevelEditor",text:"Import your spritesheet and start making levels for your game.",tags:["Java","Tool"],image:"level_editor",year:2017,links:[{link:"https://github.com/PhoenixofForce/Level_Editor",icon:"material/github",alt:"Source Code"}]},{title:"Jump and Run",text:"Jump your way through multiple levels to collect all shiny coins.",tags:["Game","Java"],image:"jump_and_run",year:2017,links:[{link:"https://github.com/Nottrex/JumpAndRun",icon:"material/github",alt:"Source Code"}]},{title:"Tank My Bug",text:"In this buggy Shooter you can shoot your friends on the couch next to you.",tags:["GameJam","Game","Java"],image:"tank_my_bug",year:"Kenney 1",links:[{link:"https://phoenixofforce.itch.io/tankmybug",icon:"material/web",alt:"Event Page"},{link:"https://github.com/PhoenixofForce/Kenney_Jam_1",icon:"material/github",alt:"Source Code"}]},{title:"Lights Out",text:"An earthquake caused your lights to turn off. Find a way out of the building as long as you can!",tags:["GameJam","Game","Java"],image:"Lights_Out",year:"LD39",links:[{link:"https://ldjam.com/events/ludum-dare/39/lightsout",icon:"material/web",alt:"LD Entry"},{link:"https://github.com/PhoenixofForce/Ludum_Dare_39",icon:"material/github",alt:"Source Code"}]},{title:"My Lamp",text:"Jump across one screen full of enemies while you juggle your lamps fuel.",tags:["GameJam","Game","Java"],image:"my_lamp",year:"GMTK 1",links:[{link:"https://phoenixofforce.itch.io/my-lamp",icon:"material/web",alt:"Event Page"},{link:"https://github.com/PhoenixofForce/GMTK_Jam",icon:"material/github",alt:"Source Code"}]},{title:"Hex Game",text:"Blast of your enemies in this turn based stategy game.",tags:["Game","Java"],image:"hexgame_",year:2017,links:[{link:"https://github.com/Nottrex/HexGame_",icon:"material/github",alt:"Source Code"}]}];function je(e,t,n){const o=e.slice();return o[5]=t[n],o}function Ee(o,i){let l,r,a,s,u,m,h=e;const y=[i[5]];let x={};for(let e=0;e<y.length;e+=1)x=n(x,y[e]);return r=new Pe({props:x}),{key:o,first:null,c(){l=b("div"),oe(r.$$.fragment),a=v(),$(l,"class","project-holder svelte-ul6ulj"),this.first=l},m(e,t){f(e,l,t),ie(r,l,null),g(l,a),m=!0},p(e,t){i=e;const n=1&t?function(e,t){const n={},o={},i={$$scope:1};let l=e.length;for(;l--;){const r=e[l],a=t[l];if(a){for(const e in r)e in a||(o[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[l]=a}else for(const e in r)i[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}(y,[(o=i[5],"object"==typeof o&&null!==o?o:{})]):{};var o;r.$set(n)},r(){u=l.getBoundingClientRect()},f(){!function(e){const t=getComputedStyle(e);if("absolute"!==t.position&&"fixed"!==t.position){const{width:n,height:o}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=o,P(e,i)}}(l),h(),P(l,u)},a(){h(),h=function(n,o,i,l){if(!o)return e;const r=n.getBoundingClientRect();if(o.left===r.left&&o.right===r.right&&o.top===r.top&&o.bottom===r.bottom)return e;const{delay:a=0,duration:s=300,easing:u=t,start:m=c()+a,end:h=m+s,tick:g=e,css:f}=i(n,{from:o,to:r},l);let p,y=!0,b=!1;function x(){f&&D(n,p),y=!1}return d((e=>{if(!b&&e>=m&&(b=!0),b&&e>=h&&(g(1,0),x()),!y)return!1;if(b){const t=0+1*u((e-m)/s);g(t,1-t)}return!0})),f&&(p=L(n,0,1,s,a,u,f)),a||(b=!0),g(0,1),x}(l,u,ve,{duration:300})},i(e){m||(Q(r.$$.fragment,e),V((()=>{s||(s=ee(l,xe,{duration:250},!0)),s.run(1)})),m=!0)},o(e){X(r.$$.fragment,e),s||(s=ee(l,xe,{duration:250},!1)),s.run(0),m=!1},d(e){e&&p(l),le(r),e&&s&&s.end()}}}function Ge(e){let t,n,o,i=[],l=new Map,r=e[0];const a=e=>e[5].id;for(let t=0;t<r.length;t+=1){let n=je(e,r,t),o=a(n);l.set(o,i[t]=Ee(o,n))}return{c(){t=b("div"),n=b("div");for(let e=0;e<i.length;e+=1)i[e].c();$(n,"class","flex svelte-ul6ulj")},m(e,l){f(e,t,l),g(t,n);for(let e=0;e<i.length;e+=1)i[e].m(n,null);o=!0},p(e,[t]){if(1&t){r=e[0],U();for(let e=0;e<i.length;e+=1)i[e].r();i=function(e,t,n,o,i,l,r,a,s,c,u,m){let h=e.length,d=l.length,g=h;const f={};for(;g--;)f[e[g].key]=g;const p=[],y=new Map,b=new Map;for(g=d;g--;){const e=m(i,l,g),a=n(e);let s=r.get(a);s?o&&s.p(e,t):(s=c(a,e),s.c()),y.set(a,p[g]=s),a in f&&b.set(a,Math.abs(g-f[a]))}const x=new Set,v=new Set;function k(e){Q(e,1),e.m(a,u),r.set(e.key,e),u=e.first,d--}for(;h&&d;){const t=p[d-1],n=e[h-1],o=t.key,i=n.key;t===n?(u=t.first,h--,d--):y.has(i)?!r.has(o)||x.has(o)?k(t):v.has(i)?h--:b.get(o)>b.get(i)?(v.add(o),k(t)):(x.add(i),h--):(s(n,r),h--)}for(;h--;){const t=e[h];y.has(t.key)||s(t,r)}for(;d;)k(p[d-1]);return p}(i,t,a,1,e,r,l,n,te,Ee,null,je);for(let e=0;e<i.length;e+=1)i[e].a();Y()}},i(e){if(!o){for(let e=0;e<r.length;e+=1)Q(i[e]);o=!0}},o(e){for(let e=0;e<i.length;e+=1)X(i[e]);o=!1},d(e){e&&p(t);for(let e=0;e<i.length;e+=1)i[e].d()}}}function Ae(e,t,n){let{projectCountToDisplay:o=0}=t,{selectedTags:i=[]}=t;for(let e=0;e<Je.length;e++)Je[e].id=e;0==o&&(o=Je.length);let l=[];function r(){n(0,l=Je.slice(0,o)),n(0,l=l.filter((e=>0==i||e.tags.some((e=>i.includes(e))))))}return r(),e.$$set=e=>{"projectCountToDisplay"in e&&n(1,o=e.projectCountToDisplay),"selectedTags"in e&&n(2,i=e.selectedTags)},e.$$.update=()=>{4&e.$$.dirty&&(console.log("test"),r())},[l,o,i]}class Me extends se{constructor(e){super(),ae(this,e,Ae,Ge,a,{projectCountToDisplay:1,selectedTags:2})}}function He(e,t,n){const o=e.slice();return o[4]=t[n],o}function Ve(e){let t,n,o,i,l,r,a,s,c,u=e[4]+"";return{c(){t=b("span"),n=b("label"),o=b("input"),l=v(),r=x(u),a=v(),$(o,"type","checkbox"),$(o,"name","items"),o.__value=i=e[4],o.value=o.__value,e[3][0].push(o),$(t,"class","filter-label svelte-x611kz")},m(i,u){f(i,t,u),g(t,n),g(n,o),o.checked=~e[1].indexOf(o.__value),g(n,l),g(n,r),g(t,a),s||(c=k(o,"change",e[2]),s=!0)},p(e,t){1&t&&i!==(i=e[4])&&(o.__value=i,o.value=o.__value),2&t&&(o.checked=~e[1].indexOf(o.__value)),1&t&&u!==(u=e[4]+"")&&w(r,u)},d(n){n&&p(t),e[3][0].splice(e[3][0].indexOf(o),1),s=!1,c()}}}function Ie(t){let n,o=t[0],i=[];for(let e=0;e<o.length;e+=1)i[e]=Ve(He(t,o,e));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();n=x("")},m(e,t){for(let n=0;n<i.length;n+=1)i[n].m(e,t);f(e,n,t)},p(e,[t]){if(3&t){let l;for(o=e[0],l=0;l<o.length;l+=1){const r=He(e,o,l);i[l]?i[l].p(r,t):(i[l]=Ve(r),i[l].c(),i[l].m(n.parentNode,n))}for(;l<i.length;l+=1)i[l].d(1);i.length=o.length}},i:e,o:e,d(e){y(i,e),e&&p(n)}}}function Ne(e,t,n){return n.indexOf(e)===t}function Oe(e,t,n){let{allItems:o=[]}=t,{selectedItems:i=[]}=t;o=o.filter(Ne).sort();const l=[[]];return e.$$set=e=>{"allItems"in e&&n(0,o=e.allItems),"selectedItems"in e&&n(1,i=e.selectedItems)},[o,i,function(){i=function(e,t,n){const o=new Set;for(let t=0;t<e.length;t+=1)e[t].checked&&o.add(e[t].__value);return n||o.delete(t),Array.from(o)}(l[0],this.__value,this.checked),n(1,i)},l]}class ze extends se{constructor(e){super(),ae(this,e,Oe,Ie,a,{allItems:0,selectedItems:1})}}function We(e){let t,n,o,i,l,r,a,s,c,u,m;function h(t){e[2].call(null,t)}let d={allItems:e[0]};function y(t){e[3].call(null,t)}void 0!==e[1]&&(d.selectedItems=e[1]),r=new ze({props:d}),E.push((()=>ne(r,"selectedItems",h)));let x={};return void 0!==e[1]&&(x.selectedTags=e[1]),c=new Me({props:x}),E.push((()=>ne(c,"selectedTags",y))),{c(){t=b("div"),n=b("div"),o=b("details"),i=b("summary"),i.textContent="Filter",l=v(),oe(r.$$.fragment),s=v(),oe(c.$$.fragment),$(i,"class","noselect"),$(n,"class","filter hide-pr svelte-19f2pyj")},m(e,a){f(e,t,a),g(t,n),g(n,o),g(o,i),g(o,l),ie(r,o,null),g(t,s),ie(c,t,null),m=!0},p(e,[t]){const n={};1&t&&(n.allItems=e[0]),!a&&2&t&&(a=!0,n.selectedItems=e[1],I((()=>a=!1))),r.$set(n);const o={};!u&&2&t&&(u=!0,o.selectedTags=e[1],I((()=>u=!1))),c.$set(o)},i(e){m||(Q(r.$$.fragment,e),Q(c.$$.fragment,e),m=!0)},o(e){X(r.$$.fragment,e),X(c.$$.fragment,e),m=!1},d(e){e&&p(t),le(r),le(c)}}}function Be(e,t,n){let o=Je.map((e=>e.tags));o=[].concat.apply([],o);let i=[];return[o,i,function(e){i=e,n(1,i)},function(e){i=e,n(1,i)}]}class Re extends se{constructor(e){super(),ae(this,e,Be,We,a,{})}}function qe(e){let t,n,o,i,l;t=new me({});var r=e[0];return r&&(i=new r({})),{c(){oe(t.$$.fragment),n=v(),o=b("div"),i&&oe(i.$$.fragment),$(o,"class","main svelte-znt9hy")},m(e,r){ie(t,e,r),f(e,n,r),f(e,o,r),i&&ie(i,o,null),l=!0},p(e,[t]){if(r!==(r=e[0])){if(i){U();const e=i;X(e.$$.fragment,1,0,(()=>{le(e,1)})),Y()}r?(i=new r({}),oe(i.$$.fragment),Q(i.$$.fragment,1),ie(i,o,null)):i=null}},i(e){l||(Q(t.$$.fragment,e),i&&Q(i.$$.fragment,e),l=!0)},o(e){X(t.$$.fragment,e),i&&X(i.$$.fragment,e),l=!1},d(e){le(t,e),e&&p(n),e&&p(o),i&&le(i)}}}function Ke(e){return[Re]}return new class extends se{constructor(e){super(),ae(this,e,Ke,qe,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map