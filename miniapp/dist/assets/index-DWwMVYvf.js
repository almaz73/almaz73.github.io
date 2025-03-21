function zt(t,e){const n=qs();return zt=function(s,i){return s=s-487,n[s]},zt(t,e)}(function(t,e){const n=zt,s=t();for(;;)try{if(parseInt(n(502))/1*(-parseInt(n(500))/2)+-parseInt(n(531))/3+parseInt(n(512))/4*(parseInt(n(501))/5)+-parseInt(n(508))/6+parseInt(n(487))/7+-parseInt(n(534))/8+parseInt(n(542))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(qs,974251),function(){const e=zt,n={Aurwz:function(l,a){return l!==a},AjAMQ:"childList",LxrrQ:e(545),mmwmY:function(l,a){return l===a},zaHBI:e(543),XThDE:function(l,a){return l(a)},bVtqz:function(l,a){return l===a},APhbX:e(499),UUixs:e(515),qFGhJ:e(524),VGLUS:function(l,a){return l+a},vKdCC:"return (function() ",QDDJT:function(l){return l()},RXSrF:e(544),SybTX:"warn",cEVqd:e(510),PWfju:e(497),qyrHr:e(507),GvTDF:function(l,a){return l<a},FvUMU:function(l,a,c){return l(a,c)},kFpki:e(540),VUtSf:e(489),BwwTj:function(l,a){return l(a)}},s=function(){let l=!0;return function(a,c){const u=l?function(){const h=zt;if(c){const f=c[h(488)](a,arguments);return c=null,f}}:function(){};return l=!1,u}}(),i=document[e(498)](n.kFpki)[e(535)];if(i&&i[e(504)]&&i[e(504)]("modulepreload"))return;for(const l of document[e(523)](n.VUtSf))n[e(506)](o,l);new MutationObserver(l=>{const a=e;for(const c of l)if(!n[a(548)](c.type,n[a(533)]))for(const u of c[a(492)])u.tagName===n[a(539)]&&n[a(530)](u[a(490)],n[a(505)])&&n[a(538)](o,u)})[e(528)](document,{childList:!0,subtree:!0});function r(l){const a=e,c={};return l[a(493)]&&(c[a(493)]=l[a(493)]),l.referrerPolicy&&(c[a(529)]=l[a(529)]),n[a(527)](l[a(496)],"use-credentials")?c[a(541)]=n.APhbX:n.bVtqz(l.crossOrigin,a(536))?c[a(541)]=n[a(503)]:c[a(541)]=n[a(537)],c}function o(l){const a=e,c={uePIO:function(f,g){return n[zt(511)](f,g)},KNBbq:n.vKdCC,HlDjW:function(f){return n.QDDJT(f)},EziDx:n.RXSrF,rnljU:n[a(522)],bChVK:n.cEVqd,feSsv:n[a(509)],VxuHX:n[a(519)],vSJmZ:function(f,g){return n.GvTDF(f,g)}};if(n[a(518)](s,this,function(){const f=a,g={rbNQu:function(B,k){return B(k)},HZXns:function(B,k){return c[zt(526)](B,k)},ReDKl:c.KNBbq,ZNqiQ:f(517)},_=function(){const B=f;let k;try{k=g.rbNQu(Function,g.HZXns(g[B(520)]+g[B(491)],");"))()}catch{k=window}return k},C=c.HlDjW(_),L=C.console=C[f(514)]||{},U=[c[f(547)],c[f(516)],f(532),c[f(525)],c.feSsv,c[f(495)],f(521)];for(let B=0;c.vSJmZ(B,U[f(494)]);B++){const k=s.constructor.prototype[f(513)](s),N=U[B],q=L[N]||k;k.__proto__=s[f(513)](s),k[f(546)]=q.toString[f(513)](q),L[N]=k}})(),l.ep)return;l.ep=!0;const h=r(l);n[a(518)](fetch,l.href,h)}}();function qs(){const t=["505CpPdZf","232723GlLvPH","UUixs","supports","zaHBI","BwwTj","table","238026XOBSYt","PWfju","error","VGLUS","8188SesrXi","bind","console","omit","rnljU",'{}.constructor("return this")( )',"FvUMU","qyrHr","ReDKl","trace","SybTX","querySelectorAll","same-origin","bChVK","uePIO","bVtqz","observe","referrerPolicy","mmwmY","5403507isiZVC","info","AjAMQ","9752656brBSxn","relList","anonymous","qFGhJ","XThDE","LxrrQ","link","credentials","26278821MxdZqc","modulepreload","log","LINK","toString","EziDx","Aurwz","11240082ybjMvb","apply",'link[rel="modulepreload"]',"rel","ZNqiQ","addedNodes","integrity","length","VxuHX","crossOrigin","exception","createElement","include","6ccdlfL"];return qs=function(){return t},qs()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const J={},gn=[],nt=()=>{},vh=()=>!1,bi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qr=t=>t.startsWith("onUpdate:"),Se=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xh=Object.prototype.hasOwnProperty,Q=(t,e)=>xh.call(t,e),M=Array.isArray,mn=t=>Ci(t)==="[object Map]",Ea=t=>Ci(t)==="[object Set]",F=t=>typeof t=="function",ue=t=>typeof t=="string",Ft=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",wa=t=>(oe(t)||F(t))&&F(t.then)&&F(t.catch),Ia=Object.prototype.toString,Ci=t=>Ia.call(t),bh=t=>Ci(t).slice(8,-1),Sa=t=>Ci(t)==="[object Object]",Jr=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kn=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ch=/-(\w)/g,Ue=Ei(t=>t.replace(Ch,(e,n)=>n?n.toUpperCase():"")),Eh=/\B([A-Z])/g,rn=Ei(t=>t.replace(Eh,"-$1").toLowerCase()),wi=Ei(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ki=Ei(t=>t?`on${wi(t)}`:""),St=(t,e)=>!Object.is(t,e),Hs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ta=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},yr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jo;const Ii=()=>Jo||(Jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Si(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ue(s)?Th(s):Si(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ue(t)||oe(t))return t}const wh=/;(?![^(]*\))/g,Ih=/:([^]+)/,Sh=/\/\*[^]*?\*\//g;function Th(t){const e={};return t.replace(Sh,"").split(wh).forEach(n=>{if(n){const s=n.split(Ih);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Zr(t){let e="";if(ue(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=Zr(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=Yr(Nh);function Na(t){return!!t||t===""}const Ra=t=>!!(t&&t.__v_isRef===!0),at=t=>ue(t)?t:t==null?"":M(t)||oe(t)&&(t.toString===Ia||!F(t.toString))?Ra(t)?at(t.value):JSON.stringify(t,Aa,2):String(t),Aa=(t,e)=>Ra(e)?Aa(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Yi(s,r)+" =>"]=i,n),{})}:Ea(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Yi(n))}:Ft(e)?Yi(e):oe(e)&&!M(e)&&!Sa(e)?String(e):e,Yi=(t,e="")=>{var n;return Ft(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Pa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Da(t){return new Pa(t)}function Oa(){return Ee}function Ah(t,e=!1){Ee&&Ee.cleanups.push(t)}let ne;const Qi=new WeakSet;class Ma{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qi.has(this)&&(Qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zo(this),La(this);const e=ne,n=Ge;ne=this,Ge=!0;try{return this.fn()}finally{Ba(this),ne=e,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)no(e);this.deps=this.depsTail=void 0,Zo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vr(this)&&this.run()}get dirty(){return vr(this)}}let ka=0,Yn,Qn;function Fa(t,e=!1){if(t.flags|=8,e){t.next=Qn,Qn=t;return}t.next=Yn,Yn=t}function eo(){ka++}function to(){if(--ka>0)return;if(Qn){let e=Qn;for(Qn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Yn;){let e=Yn;for(Yn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function La(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ba(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),no(s),Ph(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function vr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ua(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ua(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ls))return;t.globalVersion=ls;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vr(t)){t.flags&=-3;return}const n=ne,s=Ge;ne=t,Ge=!0;try{La(t);const i=t.fn(t._value);(e.version===0||St(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,Ge=s,Ba(t),t.flags&=-3}}function no(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)no(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ph(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ge=!0;const Ha=[];function Lt(){Ha.push(Ge),Ge=!1}function Bt(){const t=Ha.pop();Ge=t===void 0?!0:t}function Zo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let ls=0;class Dh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class so{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Ge||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Dh(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Wa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,ls++,this.notify(e)}notify(e){eo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{to()}}}function Wa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Wa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zs=new WeakMap,Xt=Symbol(""),xr=Symbol(""),as=Symbol("");function ve(t,e,n){if(Ge&&ne){let s=zs.get(t);s||zs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new so),i.map=s,i.key=n),i.track()}}function ut(t,e,n,s,i,r){const o=zs.get(t);if(!o){ls++;return}const l=a=>{a&&a.trigger()};if(eo(),e==="clear")o.forEach(l);else{const a=M(t),c=a&&Jr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===as||!Ft(f)&&f>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(as)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Xt)),mn(t)&&l(o.get(xr)));break;case"delete":a||(l(o.get(Xt)),mn(t)&&l(o.get(xr)));break;case"set":mn(t)&&l(o.get(Xt));break}}to()}function Oh(t,e){const n=zs.get(t);return n&&n.get(e)}function ln(t){const e=K(t);return e===t?e:(ve(e,"iterate",as),Be(t)?e:e.map(xe))}function Ti(t){return ve(t=K(t),"iterate",as),t}const Mh={__proto__:null,[Symbol.iterator](){return Xi(this,Symbol.iterator,xe)},concat(...t){return ln(this).concat(...t.map(e=>M(e)?ln(e):e))},entries(){return Xi(this,"entries",t=>(t[1]=xe(t[1]),t))},every(t,e){return lt(this,"every",t,e,void 0,arguments)},filter(t,e){return lt(this,"filter",t,e,n=>n.map(xe),arguments)},find(t,e){return lt(this,"find",t,e,xe,arguments)},findIndex(t,e){return lt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return lt(this,"findLast",t,e,xe,arguments)},findLastIndex(t,e){return lt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return lt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ji(this,"includes",t)},indexOf(...t){return Ji(this,"indexOf",t)},join(t){return ln(this).join(t)},lastIndexOf(...t){return Ji(this,"lastIndexOf",t)},map(t,e){return lt(this,"map",t,e,void 0,arguments)},pop(){return Bn(this,"pop")},push(...t){return Bn(this,"push",t)},reduce(t,...e){return el(this,"reduce",t,e)},reduceRight(t,...e){return el(this,"reduceRight",t,e)},shift(){return Bn(this,"shift")},some(t,e){return lt(this,"some",t,e,void 0,arguments)},splice(...t){return Bn(this,"splice",t)},toReversed(){return ln(this).toReversed()},toSorted(t){return ln(this).toSorted(t)},toSpliced(...t){return ln(this).toSpliced(...t)},unshift(...t){return Bn(this,"unshift",t)},values(){return Xi(this,"values",xe)}};function Xi(t,e,n){const s=Ti(t),i=s[e]();return s!==t&&!Be(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const kh=Array.prototype;function lt(t,e,n,s,i,r){const o=Ti(t),l=o!==t&&!Be(t),a=o[e];if(a!==kh[e]){const h=a.apply(t,r);return l?xe(h):h}let c=n;o!==t&&(l?c=function(h,f){return n.call(this,xe(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function el(t,e,n,s){const i=Ti(t);let r=n;return i!==t&&(Be(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,xe(l),a,t)}),i[e](r,...s)}function Ji(t,e,n){const s=K(t);ve(s,"iterate",as);const i=s[e](...n);return(i===-1||i===!1)&&oo(n[0])?(n[0]=K(n[0]),s[e](...n)):i}function Bn(t,e,n=[]){Lt(),eo();const s=K(t)[e].apply(t,n);return to(),Bt(),s}const Fh=Yr("__proto__,__v_isRef,__isVue"),Va=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ft));function Lh(t){Ft(t)||(t=String(t));const e=K(this);return ve(e,"has",t),e.hasOwnProperty(t)}class $a{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?zh:za:r?qa:Ga).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=M(e);if(!i){let a;if(o&&(a=Mh[n]))return a;if(n==="hasOwnProperty")return Lh}const l=Reflect.get(e,n,ce(e)?e:s);return(Ft(n)?Va.has(n):Fh(n))||(i||ve(e,"get",n),r)?l:ce(l)?o&&Jr(n)?l:l.value:oe(l)?i?Ka(l):Ni(l):l}}class ja extends $a{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Zt(r);if(!Be(s)&&!Zt(s)&&(r=K(r),s=K(s)),!M(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=M(e)&&Jr(n)?Number(n)<e.length:Q(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===K(i)&&(o?St(s,r)&&ut(e,"set",n,s):ut(e,"add",n,s)),l}deleteProperty(e,n){const s=Q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ut(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ft(n)||!Va.has(n))&&ve(e,"has",n),s}ownKeys(e){return ve(e,"iterate",M(e)?"length":Xt),Reflect.ownKeys(e)}}class Bh extends $a{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uh=new ja,Hh=new Bh,Wh=new ja(!0);const br=t=>t,ks=t=>Reflect.getPrototypeOf(t);function Vh(t,e,n){return function(...s){const i=this.__v_raw,r=K(i),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?br:e?Cr:xe;return!e&&ve(r,"iterate",a?xr:Xt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Fs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $h(t,e){const n={get(i){const r=this.__v_raw,o=K(r),l=K(i);t||(St(i,l)&&ve(o,"get",i),ve(o,"get",l));const{has:a}=ks(o),c=e?br:t?Cr:xe;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ve(K(i),"iterate",Xt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=K(r),l=K(i);return t||(St(i,l)&&ve(o,"has",i),ve(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=K(l),c=e?br:t?Cr:xe;return!t&&ve(a,"iterate",Xt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Se(n,t?{add:Fs("add"),set:Fs("set"),delete:Fs("delete"),clear:Fs("clear")}:{add(i){!e&&!Be(i)&&!Zt(i)&&(i=K(i));const r=K(this);return ks(r).has.call(r,i)||(r.add(i),ut(r,"add",i,i)),this},set(i,r){!e&&!Be(r)&&!Zt(r)&&(r=K(r));const o=K(this),{has:l,get:a}=ks(o);let c=l.call(o,i);c||(i=K(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?St(r,u)&&ut(o,"set",i,r):ut(o,"add",i,r),this},delete(i){const r=K(this),{has:o,get:l}=ks(r);let a=o.call(r,i);a||(i=K(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&ut(r,"delete",i,void 0),c},clear(){const i=K(this),r=i.size!==0,o=i.clear();return r&&ut(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Vh(i,t,e)}),n}function io(t,e){const n=$h(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const jh={get:io(!1,!1)},Gh={get:io(!1,!0)},qh={get:io(!0,!1)};const Ga=new WeakMap,qa=new WeakMap,za=new WeakMap,zh=new WeakMap;function Kh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yh(t){return t.__v_skip||!Object.isExtensible(t)?0:Kh(bh(t))}function Ni(t){return Zt(t)?t:ro(t,!1,Uh,jh,Ga)}function Qh(t){return ro(t,!1,Wh,Gh,qa)}function Ka(t){return ro(t,!0,Hh,qh,za)}function ro(t,e,n,s,i){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Yh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Tt(t){return Zt(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function Zt(t){return!!(t&&t.__v_isReadonly)}function Be(t){return!!(t&&t.__v_isShallow)}function oo(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function lo(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&Ta(t,"__v_skip",!0),t}const xe=t=>oe(t)?Ni(t):t,Cr=t=>oe(t)?Ka(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function ft(t){return Ya(t,!1)}function Xh(t){return Ya(t,!0)}function Ya(t,e){return ce(t)?t:new Jh(t,e)}class Jh{constructor(e,n){this.dep=new so,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:K(e),this._value=n?e:xe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Be(e)||Zt(e);e=s?e:K(e),St(e,n)&&(this._rawValue=e,this._value=s?e:xe(e),this.dep.trigger())}}function Kt(t){return ce(t)?t.value:t}const Zh={get:(t,e,n)=>e==="__v_raw"?t:Kt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Qa(t){return Tt(t)?t:new Proxy(t,Zh)}function ef(t){const e=M(t)?new Array(t.length):{};for(const n in t)e[n]=nf(t,n);return e}class tf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Oh(K(this._object),this._key)}}function nf(t,e,n){const s=t[e];return ce(s)?s:new tf(t,e,n)}class sf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new so(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Fa(this,!0),!0}get value(){const e=this.dep.track();return Ua(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rf(t,e,n=!1){let s,i;return F(t)?s=t:(s=t.get,i=t.set),new sf(s,i,n)}const Ls={},Ks=new WeakMap;let jt;function of(t,e=!1,n=jt){if(n){let s=Ks.get(n);s||Ks.set(n,s=[]),s.push(t)}}function lf(t,e,n=J){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=N=>i?N:Be(N)||i===!1||i===0?ht(N,1):ht(N);let u,h,f,g,_=!1,C=!1;if(ce(t)?(h=()=>t.value,_=Be(t)):Tt(t)?(h=()=>c(t),_=!0):M(t)?(C=!0,_=t.some(N=>Tt(N)||Be(N)),h=()=>t.map(N=>{if(ce(N))return N.value;if(Tt(N))return c(N);if(F(N))return a?a(N,2):N()})):F(t)?e?h=a?()=>a(t,2):t:h=()=>{if(f){Lt();try{f()}finally{Bt()}}const N=jt;jt=u;try{return a?a(t,3,[g]):t(g)}finally{jt=N}}:h=nt,e&&i){const N=h,q=i===!0?1/0:i;h=()=>ht(N(),q)}const L=Oa(),U=()=>{u.stop(),L&&L.active&&Xr(L.effects,u)};if(r&&e){const N=e;e=(...q)=>{N(...q),U()}}let B=C?new Array(t.length).fill(Ls):Ls;const k=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(e){const q=u.run();if(i||_||(C?q.some((ot,ye)=>St(ot,B[ye])):St(q,B))){f&&f();const ot=jt;jt=u;try{const ye=[q,B===Ls?void 0:C&&B[0]===Ls?[]:B,g];a?a(e,3,ye):e(...ye),B=q}finally{jt=ot}}}else u.run()};return l&&l(k),u=new Ma(h),u.scheduler=o?()=>o(k,!1):k,g=N=>of(N,!1,u),f=u.onStop=()=>{const N=Ks.get(u);if(N){if(a)a(N,4);else for(const q of N)q();Ks.delete(u)}},e?s?k(!0):B=u.run():o?o(k.bind(null,!0),!0):u.run(),U.pause=u.pause.bind(u),U.resume=u.resume.bind(u),U.stop=U,U}function ht(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))ht(t.value,e,n);else if(M(t))for(let s=0;s<t.length;s++)ht(t[s],e,n);else if(Ea(t)||mn(t))t.forEach(s=>{ht(s,e,n)});else if(Sa(t)){for(const s in t)ht(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ht(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Es(t,e,n,s){try{return s?t(...s):t()}catch(i){Ri(i,e,n)}}function it(t,e,n,s){if(F(t)){const i=Es(t,e,n,s);return i&&wa(i)&&i.catch(r=>{Ri(r,e,n)}),i}if(M(t)){const i=[];for(let r=0;r<t.length;r++)i.push(it(t[r],e,n,s));return i}}function Ri(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||J;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Lt(),Es(r,null,10,[t,a,c]),Bt();return}}af(t,n,i,s,o)}function af(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const we=[];let Ze=-1;const yn=[];let Et=null,fn=0;const Xa=Promise.resolve();let Ys=null;function Ja(t){const e=Ys||Xa;return t?e.then(this?t.bind(this):t):e}function cf(t){let e=Ze+1,n=we.length;for(;e<n;){const s=e+n>>>1,i=we[s],r=cs(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ao(t){if(!(t.flags&1)){const e=cs(t),n=we[we.length-1];!n||!(t.flags&2)&&e>=cs(n)?we.push(t):we.splice(cf(e),0,t),t.flags|=1,Za()}}function Za(){Ys||(Ys=Xa.then(tc))}function uf(t){M(t)?yn.push(...t):Et&&t.id===-1?Et.splice(fn+1,0,t):t.flags&1||(yn.push(t),t.flags|=1),Za()}function tl(t,e,n=Ze+1){for(;n<we.length;n++){const s=we[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;we.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ec(t){if(yn.length){const e=[...new Set(yn)].sort((n,s)=>cs(n)-cs(s));if(yn.length=0,Et){Et.push(...e);return}for(Et=e,fn=0;fn<Et.length;fn++){const n=Et[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,fn=0}}const cs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tc(t){try{for(Ze=0;Ze<we.length;Ze++){const e=we[Ze];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Es(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ze<we.length;Ze++){const e=we[Ze];e&&(e.flags&=-2)}Ze=-1,we.length=0,ec(),Ys=null,(we.length||yn.length)&&tc()}}let Ne=null,nc=null;function Qs(t){const e=Ne;return Ne=t,nc=t&&t.type.__scopeId||null,e}function hf(t,e=Ne,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hl(-1);const r=Qs(e);let o;try{o=t(...i)}finally{Qs(r),s._d&&hl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ff(t,e){if(Ne===null)return t;const n=Oi(Ne),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=J]=e[i];r&&(F(r)&&(r={mounted:r,updated:r}),r.deep&&ht(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Lt(),it(a,n,8,[t.el,l,t,e]),Bt())}}const df=Symbol("_vte"),pf=t=>t.__isTeleport;function co(t,e){t.shapeFlag&6&&t.component?(t.transition=e,co(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xs(t,e,n,s,i=!1){if(M(t)){t.forEach((_,C)=>Xs(_,e&&(M(e)?e[C]:e),n,s,i));return}if(Xn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Oi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===J?l.refs={}:l.refs,h=l.setupState,f=K(h),g=h===J?()=>!1:_=>Q(f,_);if(c!=null&&c!==a&&(ue(c)?(u[c]=null,g(c)&&(h[c]=null)):ce(c)&&(c.value=null)),F(a))Es(a,l,12,[o,u]);else{const _=ue(a),C=ce(a);if(_||C){const L=()=>{if(t.f){const U=_?g(a)?h[a]:u[a]:a.value;i?M(U)&&Xr(U,r):M(U)?U.includes(r)||U.push(r):_?(u[a]=[r],g(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else _?(u[a]=o,g(a)&&(h[a]=o)):C&&(a.value=o,t.k&&(u[t.k]=o))};o?(L.id=-1,Me(L,n)):L()}}}Ii().requestIdleCallback;Ii().cancelIdleCallback;const Xn=t=>!!t.type.__asyncLoader,ic=t=>t.type.__isKeepAlive;function _f(t,e){rc(t,"a",e)}function gf(t,e){rc(t,"da",e)}function rc(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ai(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ic(i.parent.vnode)&&mf(s,e,n,i),i=i.parent}}function mf(t,e,n,s){const i=Ai(e,t,s,!0);oc(()=>{Xr(s[e],i)},n)}function Ai(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Lt();const l=ws(n),a=it(e,n,t,o);return l(),Bt(),a});return s?i.unshift(r):i.push(r),r}}const mt=t=>(e,n=me)=>{(!hs||t==="sp")&&Ai(t,(...s)=>e(...s),n)},yf=mt("bm"),uo=mt("m"),vf=mt("bu"),xf=mt("u"),bf=mt("bum"),oc=mt("um"),Cf=mt("sp"),Ef=mt("rtg"),wf=mt("rtc");function If(t,e=me){Ai("ec",t,e)}const Sf="components",lc=Symbol.for("v-ndc");function Tf(t){return ue(t)?Nf(Sf,t,!1)||t:t||lc}function Nf(t,e,n=!0,s=!1){const i=Ne||me;if(i){const r=i.type;{const l=md(r,!1);if(l&&(l===e||l===Ue(e)||l===wi(Ue(e))))return r}const o=nl(i[t]||r[t],e)||nl(i.appContext[t],e);return!o&&s?r:o}}function nl(t,e){return t&&(t[e]||t[Ue(e)]||t[wi(Ue(e))])}function Rf(t,e,n,s){let i;const r=n,o=M(t);if(o||ue(t)){const l=o&&Tt(t);let a=!1;l&&(a=!Be(t),t=Ti(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?xe(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const Er=t=>t?Ac(t)?Oi(t):Er(t.parent):null,Jn=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Er(t.parent),$root:t=>Er(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cc(t),$forceUpdate:t=>t.f||(t.f=()=>{ao(t.update)}),$nextTick:t=>t.n||(t.n=Ja.bind(t.proxy)),$watch:t=>Jf.bind(t)}),Zi=(t,e)=>t!==J&&!t.__isScriptSetup&&Q(t,e),Af={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Zi(s,e))return o[e]=1,s[e];if(i!==J&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==J&&Q(n,e))return o[e]=4,n[e];wr&&(o[e]=0)}}const u=Jn[e];let h,f;if(u)return e==="$attrs"&&ve(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==J&&Q(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Zi(i,e)?(i[e]=n,!0):s!==J&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==J&&Q(t,o)||Zi(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(Jn,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sl(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wr=!0;function Pf(t){const e=cc(t),n=t.proxy,s=t.ctx;wr=!1,e.beforeCreate&&il(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:_,activated:C,deactivated:L,beforeDestroy:U,beforeUnmount:B,destroyed:k,unmounted:N,render:q,renderTracked:ot,renderTriggered:ye,errorCaptured:j,serverPrefetch:z,expose:he,inheritAttrs:Fe,components:ze,directives:xt,filters:Mn}=e;if(c&&Df(c,s,null),o)for(const $ in o){const ee=o[$];F(ee)&&(s[$]=ee.bind(n))}if(i){const $=i.call(n,n);oe($)&&(t.data=Ni($))}if(wr=!0,r)for(const $ in r){const ee=r[$],Ut=F(ee)?ee.bind(n,n):F(ee.get)?ee.get.bind(n,n):nt,Os=!F(ee)&&F(ee.set)?ee.set.bind(n):nt,Ht=Dc({get:Ut,set:Os});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Ke=>Ht.value=Ke})}if(l)for(const $ in l)ac(l[$],s,n,$);if(a){const $=F(a)?a.call(n):a;Reflect.ownKeys($).forEach(ee=>{Bf(ee,$[ee])})}u&&il(u,t,"c");function ae($,ee){M(ee)?ee.forEach(Ut=>$(Ut.bind(n))):ee&&$(ee.bind(n))}if(ae(yf,h),ae(uo,f),ae(vf,g),ae(xf,_),ae(_f,C),ae(gf,L),ae(If,j),ae(wf,ot),ae(Ef,ye),ae(bf,B),ae(oc,N),ae(Cf,z),M(he))if(he.length){const $=t.exposed||(t.exposed={});he.forEach(ee=>{Object.defineProperty($,ee,{get:()=>n[ee],set:Ut=>n[ee]=Ut})})}else t.exposed||(t.exposed={});q&&t.render===nt&&(t.render=q),Fe!=null&&(t.inheritAttrs=Fe),ze&&(t.components=ze),xt&&(t.directives=xt),z&&sc(t)}function Df(t,e,n=nt){M(t)&&(t=Ir(t));for(const s in t){const i=t[s];let r;oe(i)?"default"in i?r=Zn(i.from||s,i.default,!0):r=Zn(i.from||s):r=Zn(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function il(t,e,n){it(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ac(t,e,n,s){let i=s.includes(".")?Ec(n,s):()=>n[s];if(ue(t)){const r=e[t];F(r)&&Ws(i,r)}else if(F(t))Ws(i,t.bind(n));else if(oe(t))if(M(t))t.forEach(r=>ac(r,e,n,s));else{const r=F(t.handler)?t.handler.bind(n):e[t.handler];F(r)&&Ws(i,r,t)}}function cc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Js(a,c,o,!0)),Js(a,e,o)),oe(e)&&r.set(e,a),a}function Js(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Js(t,r,n,!0),i&&i.forEach(o=>Js(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Of[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Of={data:rl,props:ol,emits:ol,methods:zn,computed:zn,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:zn,directives:zn,watch:kf,provide:rl,inject:Mf};function rl(t,e){return e?t?function(){return Se(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Mf(t,e){return zn(Ir(t),Ir(e))}function Ir(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ce(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?Se(Object.create(null),t,e):e}function ol(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:Se(Object.create(null),sl(t),sl(e??{})):e}function kf(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const s in e)n[s]=Ce(t[s],e[s]);return n}function uc(){return{app:null,config:{isNativeTag:vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ff=0;function Lf(t,e){return function(s,i=null){F(s)||(s=Se({},s)),i!=null&&!oe(i)&&(i=null);const r=uc(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Ff++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:vd,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(c,...h)):F(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!a){const g=c._ceVNode||st(s,i);return g.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(g,u,f),a=!0,c._container=u,u.__vue_app__=c,Oi(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(it(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Jt;Jt=c;try{return u()}finally{Jt=h}}};return c}}let Jt=null;function Bf(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function Zn(t,e,n=!1){const s=me||Ne;if(s||Jt){const i=Jt?Jt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(s&&s.proxy):e}}function Uf(){return!!(me||Ne||Jt)}const hc={},fc=()=>Object.create(hc),dc=t=>Object.getPrototypeOf(t)===hc;function Hf(t,e,n,s=!1){const i={},r=fc();t.propsDefaults=Object.create(null),pc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Qh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Wf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=K(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Pi(t.emitsOptions,f))continue;const g=e[f];if(a)if(Q(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const _=Ue(f);i[_]=Sr(a,l,_,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{pc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=rn(h))===h||!Q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Sr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&ut(t.attrs,"set","")}function pc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Kn(a))continue;const c=e[a];let u;i&&Q(i,u=Ue(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Pi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=K(n),c=l||J;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Sr(i,a,h,c[h],t,!Q(c,h))}}return o}function Sr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&F(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ws(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===rn(n))&&(s=!0))}return s}const Vf=new WeakMap;function _c(t,e,n=!1){const s=n?Vf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!F(t)){const u=h=>{a=!0;const[f,g]=_c(h,e,!0);Se(o,f),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return oe(t)&&s.set(t,gn),gn;if(M(r))for(let u=0;u<r.length;u++){const h=Ue(r[u]);ll(h)&&(o[h]=J)}else if(r)for(const u in r){const h=Ue(u);if(ll(h)){const f=r[u],g=o[h]=M(f)||F(f)?{type:f}:Se({},f),_=g.type;let C=!1,L=!0;if(M(_))for(let U=0;U<_.length;++U){const B=_[U],k=F(B)&&B.name;if(k==="Boolean"){C=!0;break}else k==="String"&&(L=!1)}else C=F(_)&&_.name==="Boolean";g[0]=C,g[1]=L,(C||Q(g,"default"))&&l.push(h)}}const c=[o,l];return oe(t)&&s.set(t,c),c}function ll(t){return t[0]!=="$"&&!Kn(t)}const gc=t=>t[0]==="_"||t==="$stable",ho=t=>M(t)?t.map(tt):[tt(t)],$f=(t,e,n)=>{if(e._n)return e;const s=hf((...i)=>ho(e(...i)),n);return s._c=!1,s},mc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(gc(i))continue;const r=t[i];if(F(r))e[i]=$f(i,r,s);else if(r!=null){const o=ho(r);e[i]=()=>o}}},yc=(t,e)=>{const n=ho(e);t.slots.default=()=>n},vc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},jf=(t,e,n)=>{const s=t.slots=fc();if(t.vnode.shapeFlag&32){const i=e._;i?(vc(s,e,n),n&&Ta(s,"_",i,!0)):mc(e,s)}else e&&yc(t,e)},Gf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=J;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:vc(i,e,n):(r=!e.$stable,mc(e,i)),o=e}else e&&(yc(t,e),o={default:1});if(r)for(const l in i)!gc(l)&&o[l]==null&&delete i[l]},Me=rd;function qf(t){return zf(t)}function zf(t,e){const n=Ii();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=nt,insertStaticContent:_}=t,C=(d,p,m,x=null,y=null,v=null,S=void 0,I=null,w=!!p.dynamicChildren)=>{if(d===p)return;d&&!Un(d,p)&&(x=Ms(d),Ke(d,y,v,!0),d=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:b,ref:A,shapeFlag:T}=p;switch(b){case Di:L(d,p,m,x);break;case en:U(d,p,m,x);break;case tr:d==null&&B(p,m,x,S);break;case We:ze(d,p,m,x,y,v,S,I,w);break;default:T&1?q(d,p,m,x,y,v,S,I,w):T&6?xt(d,p,m,x,y,v,S,I,w):(T&64||T&128)&&b.process(d,p,m,x,y,v,S,I,w,Fn)}A!=null&&y&&Xs(A,d&&d.ref,v,p||d,!p)},L=(d,p,m,x)=>{if(d==null)s(p.el=l(p.children),m,x);else{const y=p.el=d.el;p.children!==d.children&&c(y,p.children)}},U=(d,p,m,x)=>{d==null?s(p.el=a(p.children||""),m,x):p.el=d.el},B=(d,p,m,x)=>{[d.el,d.anchor]=_(d.children,p,m,x,d.el,d.anchor)},k=({el:d,anchor:p},m,x)=>{let y;for(;d&&d!==p;)y=f(d),s(d,m,x),d=y;s(p,m,x)},N=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),i(d),d=m;i(p)},q=(d,p,m,x,y,v,S,I,w)=>{p.type==="svg"?S="svg":p.type==="math"&&(S="mathml"),d==null?ot(p,m,x,y,v,S,I,w):z(d,p,y,v,S,I,w)},ot=(d,p,m,x,y,v,S,I)=>{let w,b;const{props:A,shapeFlag:T,transition:R,dirs:D}=d;if(w=d.el=o(d.type,v,A&&A.is,A),T&8?u(w,d.children):T&16&&j(d.children,w,null,x,y,er(d,v),S,I),D&&Wt(d,null,x,"created"),ye(w,d,d.scopeId,S,x),A){for(const te in A)te!=="value"&&!Kn(te)&&r(w,te,null,A[te],v,x);"value"in A&&r(w,"value",null,A.value,v),(b=A.onVnodeBeforeMount)&&Je(b,x,d)}D&&Wt(d,null,x,"beforeMount");const G=Kf(y,R);G&&R.beforeEnter(w),s(w,p,m),((b=A&&A.onVnodeMounted)||G||D)&&Me(()=>{b&&Je(b,x,d),G&&R.enter(w),D&&Wt(d,null,x,"mounted")},y)},ye=(d,p,m,x,y)=>{if(m&&g(d,m),x)for(let v=0;v<x.length;v++)g(d,x[v]);if(y){let v=y.subTree;if(p===v||Ic(v.type)&&(v.ssContent===p||v.ssFallback===p)){const S=y.vnode;ye(d,S,S.scopeId,S.slotScopeIds,y.parent)}}},j=(d,p,m,x,y,v,S,I,w=0)=>{for(let b=w;b<d.length;b++){const A=d[b]=I?It(d[b]):tt(d[b]);C(null,A,p,m,x,y,v,S,I)}},z=(d,p,m,x,y,v,S)=>{const I=p.el=d.el;let{patchFlag:w,dynamicChildren:b,dirs:A}=p;w|=d.patchFlag&16;const T=d.props||J,R=p.props||J;let D;if(m&&Vt(m,!1),(D=R.onVnodeBeforeUpdate)&&Je(D,m,p,d),A&&Wt(p,d,m,"beforeUpdate"),m&&Vt(m,!0),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&u(I,""),b?he(d.dynamicChildren,b,I,m,x,er(p,y),v):S||ee(d,p,I,null,m,x,er(p,y),v,!1),w>0){if(w&16)Fe(I,T,R,m,y);else if(w&2&&T.class!==R.class&&r(I,"class",null,R.class,y),w&4&&r(I,"style",T.style,R.style,y),w&8){const G=p.dynamicProps;for(let te=0;te<G.length;te++){const X=G[te],De=T[X],Te=R[X];(Te!==De||X==="value")&&r(I,X,De,Te,y,m)}}w&1&&d.children!==p.children&&u(I,p.children)}else!S&&b==null&&Fe(I,T,R,m,y);((D=R.onVnodeUpdated)||A)&&Me(()=>{D&&Je(D,m,p,d),A&&Wt(p,d,m,"updated")},x)},he=(d,p,m,x,y,v,S)=>{for(let I=0;I<p.length;I++){const w=d[I],b=p[I],A=w.el&&(w.type===We||!Un(w,b)||w.shapeFlag&70)?h(w.el):m;C(w,b,A,null,x,y,v,S,!0)}},Fe=(d,p,m,x,y)=>{if(p!==m){if(p!==J)for(const v in p)!Kn(v)&&!(v in m)&&r(d,v,p[v],null,y,x);for(const v in m){if(Kn(v))continue;const S=m[v],I=p[v];S!==I&&v!=="value"&&r(d,v,I,S,y,x)}"value"in m&&r(d,"value",p.value,m.value,y)}},ze=(d,p,m,x,y,v,S,I,w)=>{const b=p.el=d?d.el:l(""),A=p.anchor=d?d.anchor:l("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:D}=p;D&&(I=I?I.concat(D):D),d==null?(s(b,m,x),s(A,m,x),j(p.children||[],m,A,y,v,S,I,w)):T>0&&T&64&&R&&d.dynamicChildren?(he(d.dynamicChildren,R,m,y,v,S,I),(p.key!=null||y&&p===y.subTree)&&xc(d,p,!0)):ee(d,p,m,A,y,v,S,I,w)},xt=(d,p,m,x,y,v,S,I,w)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?y.ctx.activate(p,m,x,S,w):Mn(p,m,x,y,v,S,w):Ds(d,p,w)},Mn=(d,p,m,x,y,v,S)=>{const I=d.component=fd(d,x,y);if(ic(d)&&(I.ctx.renderer=Fn),dd(I,!1,S),I.asyncDep){if(y&&y.registerDep(I,ae,S),!d.el){const w=I.subTree=st(en);U(null,w,p,m)}}else ae(I,d,p,m,y,v,S)},Ds=(d,p,m)=>{const x=p.component=d.component;if(sd(d,p,m))if(x.asyncDep&&!x.asyncResolved){$(x,p,m);return}else x.next=p,x.update();else p.el=d.el,x.vnode=p},ae=(d,p,m,x,y,v,S)=>{const I=()=>{if(d.isMounted){let{next:T,bu:R,u:D,parent:G,vnode:te}=d;{const Qe=bc(d);if(Qe){T&&(T.el=te.el,$(d,T,S)),Qe.asyncDep.then(()=>{d.isUnmounted||I()});return}}let X=T,De;Vt(d,!1),T?(T.el=te.el,$(d,T,S)):T=te,R&&Hs(R),(De=T.props&&T.props.onVnodeBeforeUpdate)&&Je(De,G,T,te),Vt(d,!0);const Te=cl(d),Ye=d.subTree;d.subTree=Te,C(Ye,Te,h(Ye.el),Ms(Ye),d,y,v),T.el=Te.el,X===null&&id(d,Te.el),D&&Me(D,y),(De=T.props&&T.props.onVnodeUpdated)&&Me(()=>Je(De,G,T,te),y)}else{let T;const{el:R,props:D}=p,{bm:G,m:te,parent:X,root:De,type:Te}=d,Ye=Xn(p);Vt(d,!1),G&&Hs(G),!Ye&&(T=D&&D.onVnodeBeforeMount)&&Je(T,X,p),Vt(d,!0);{De.ce&&De.ce._injectChildStyle(Te);const Qe=d.subTree=cl(d);C(null,Qe,m,x,d,y,v),p.el=Qe.el}if(te&&Me(te,y),!Ye&&(T=D&&D.onVnodeMounted)){const Qe=p;Me(()=>Je(T,X,Qe),y)}(p.shapeFlag&256||X&&Xn(X.vnode)&&X.vnode.shapeFlag&256)&&d.a&&Me(d.a,y),d.isMounted=!0,p=m=x=null}};d.scope.on();const w=d.effect=new Ma(I);d.scope.off();const b=d.update=w.run.bind(w),A=d.job=w.runIfDirty.bind(w);A.i=d,A.id=d.uid,w.scheduler=()=>ao(A),Vt(d,!0),b()},$=(d,p,m)=>{p.component=d;const x=d.vnode.props;d.vnode=p,d.next=null,Wf(d,p.props,x,m),Gf(d,p.children,m),Lt(),tl(d),Bt()},ee=(d,p,m,x,y,v,S,I,w=!1)=>{const b=d&&d.children,A=d?d.shapeFlag:0,T=p.children,{patchFlag:R,shapeFlag:D}=p;if(R>0){if(R&128){Os(b,T,m,x,y,v,S,I,w);return}else if(R&256){Ut(b,T,m,x,y,v,S,I,w);return}}D&8?(A&16&&kn(b,y,v),T!==b&&u(m,T)):A&16?D&16?Os(b,T,m,x,y,v,S,I,w):kn(b,y,v,!0):(A&8&&u(m,""),D&16&&j(T,m,x,y,v,S,I,w))},Ut=(d,p,m,x,y,v,S,I,w)=>{d=d||gn,p=p||gn;const b=d.length,A=p.length,T=Math.min(b,A);let R;for(R=0;R<T;R++){const D=p[R]=w?It(p[R]):tt(p[R]);C(d[R],D,m,null,y,v,S,I,w)}b>A?kn(d,y,v,!0,!1,T):j(p,m,x,y,v,S,I,w,T)},Os=(d,p,m,x,y,v,S,I,w)=>{let b=0;const A=p.length;let T=d.length-1,R=A-1;for(;b<=T&&b<=R;){const D=d[b],G=p[b]=w?It(p[b]):tt(p[b]);if(Un(D,G))C(D,G,m,null,y,v,S,I,w);else break;b++}for(;b<=T&&b<=R;){const D=d[T],G=p[R]=w?It(p[R]):tt(p[R]);if(Un(D,G))C(D,G,m,null,y,v,S,I,w);else break;T--,R--}if(b>T){if(b<=R){const D=R+1,G=D<A?p[D].el:x;for(;b<=R;)C(null,p[b]=w?It(p[b]):tt(p[b]),m,G,y,v,S,I,w),b++}}else if(b>R)for(;b<=T;)Ke(d[b],y,v,!0),b++;else{const D=b,G=b,te=new Map;for(b=G;b<=R;b++){const Oe=p[b]=w?It(p[b]):tt(p[b]);Oe.key!=null&&te.set(Oe.key,b)}let X,De=0;const Te=R-G+1;let Ye=!1,Qe=0;const Ln=new Array(Te);for(b=0;b<Te;b++)Ln[b]=0;for(b=D;b<=T;b++){const Oe=d[b];if(De>=Te){Ke(Oe,y,v,!0);continue}let Xe;if(Oe.key!=null)Xe=te.get(Oe.key);else for(X=G;X<=R;X++)if(Ln[X-G]===0&&Un(Oe,p[X])){Xe=X;break}Xe===void 0?Ke(Oe,y,v,!0):(Ln[Xe-G]=b+1,Xe>=Qe?Qe=Xe:Ye=!0,C(Oe,p[Xe],m,null,y,v,S,I,w),De++)}const Qo=Ye?Yf(Ln):gn;for(X=Qo.length-1,b=Te-1;b>=0;b--){const Oe=G+b,Xe=p[Oe],Xo=Oe+1<A?p[Oe+1].el:x;Ln[b]===0?C(null,Xe,m,Xo,y,v,S,I,w):Ye&&(X<0||b!==Qo[X]?Ht(Xe,m,Xo,2):X--)}}},Ht=(d,p,m,x,y=null)=>{const{el:v,type:S,transition:I,children:w,shapeFlag:b}=d;if(b&6){Ht(d.component.subTree,p,m,x);return}if(b&128){d.suspense.move(p,m,x);return}if(b&64){S.move(d,p,m,Fn);return}if(S===We){s(v,p,m);for(let T=0;T<w.length;T++)Ht(w[T],p,m,x);s(d.anchor,p,m);return}if(S===tr){k(d,p,m);return}if(x!==2&&b&1&&I)if(x===0)I.beforeEnter(v),s(v,p,m),Me(()=>I.enter(v),y);else{const{leave:T,delayLeave:R,afterLeave:D}=I,G=()=>s(v,p,m),te=()=>{T(v,()=>{G(),D&&D()})};R?R(v,G,te):te()}else s(v,p,m)},Ke=(d,p,m,x=!1,y=!1)=>{const{type:v,props:S,ref:I,children:w,dynamicChildren:b,shapeFlag:A,patchFlag:T,dirs:R,cacheIndex:D}=d;if(T===-2&&(y=!1),I!=null&&Xs(I,null,m,d,!0),D!=null&&(p.renderCache[D]=void 0),A&256){p.ctx.deactivate(d);return}const G=A&1&&R,te=!Xn(d);let X;if(te&&(X=S&&S.onVnodeBeforeUnmount)&&Je(X,p,d),A&6)yh(d.component,m,x);else{if(A&128){d.suspense.unmount(m,x);return}G&&Wt(d,null,p,"beforeUnmount"),A&64?d.type.remove(d,p,m,Fn,x):b&&!b.hasOnce&&(v!==We||T>0&&T&64)?kn(b,p,m,!1,!0):(v===We&&T&384||!y&&A&16)&&kn(w,p,m),x&&Ko(d)}(te&&(X=S&&S.onVnodeUnmounted)||G)&&Me(()=>{X&&Je(X,p,d),G&&Wt(d,null,p,"unmounted")},m)},Ko=d=>{const{type:p,el:m,anchor:x,transition:y}=d;if(p===We){mh(m,x);return}if(p===tr){N(d);return}const v=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:I}=y,w=()=>S(m,v);I?I(d.el,v,w):w()}else v()},mh=(d,p)=>{let m;for(;d!==p;)m=f(d),i(d),d=m;i(p)},yh=(d,p,m)=>{const{bum:x,scope:y,job:v,subTree:S,um:I,m:w,a:b}=d;al(w),al(b),x&&Hs(x),y.stop(),v&&(v.flags|=8,Ke(S,d,p,m)),I&&Me(I,p),Me(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},kn=(d,p,m,x=!1,y=!1,v=0)=>{for(let S=v;S<d.length;S++)Ke(d[S],p,m,x,y)},Ms=d=>{if(d.shapeFlag&6)return Ms(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),m=p&&p[df];return m?f(m):p};let zi=!1;const Yo=(d,p,m)=>{d==null?p._vnode&&Ke(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,m),p._vnode=d,zi||(zi=!0,tl(),ec(),zi=!1)},Fn={p:C,um:Ke,m:Ht,r:Ko,mt:Mn,mc:j,pc:ee,pbc:he,n:Ms,o:t};return{render:Yo,hydrate:void 0,createApp:Lf(Yo)}}function er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Kf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xc(t,e,n=!1){const s=t.children,i=e.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=It(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&xc(o,l)),l.type===Di&&(l.el=o.el)}}function Yf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function bc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bc(e)}function al(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qf=Symbol.for("v-scx"),Xf=()=>Zn(Qf);function Ws(t,e,n){return Cc(t,e,n)}function Cc(t,e,n=J){const{immediate:s,deep:i,flush:r,once:o}=n,l=Se({},n),a=e&&s||!e&&r!=="post";let c;if(hs){if(r==="sync"){const g=Xf();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=nt,g.resume=nt,g.pause=nt,g}}const u=me;l.call=(g,_,C)=>it(g,u,_,C);let h=!1;r==="post"?l.scheduler=g=>{Me(g,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(g,_)=>{_?g():ao(g)}),l.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const f=lf(t,e,l);return hs&&(c?c.push(f):a&&f()),f}function Jf(t,e,n){const s=this.proxy,i=ue(t)?t.includes(".")?Ec(s,t):()=>s[t]:t.bind(s,s);let r;F(e)?r=e:(r=e.handler,n=e);const o=ws(this),l=Cc(i,r.bind(s),n);return o(),l}function Ec(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Zf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ue(e)}Modifiers`]||t[`${rn(e)}Modifiers`];function ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||J;let i=n;const r=e.startsWith("update:"),o=r&&Zf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ue(u)?u.trim():u)),o.number&&(i=n.map(yr)));let l,a=s[l=Ki(e)]||s[l=Ki(Ue(e))];!a&&r&&(a=s[l=Ki(rn(e))]),a&&it(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,it(c,t,6,i)}}function wc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!F(t)){const a=c=>{const u=wc(c,e,!0);u&&(l=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(oe(t)&&s.set(t,null),null):(M(r)?r.forEach(a=>o[a]=null):Se(o,r),oe(t)&&s.set(t,o),o)}function Pi(t,e){return!t||!bi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,rn(e))||Q(t,e))}function cl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:g,ctx:_,inheritAttrs:C}=t,L=Qs(t);let U,B;try{if(n.shapeFlag&4){const N=i||s,q=N;U=tt(c.call(q,N,u,h,g,f,_)),B=l}else{const N=e;U=tt(N.length>1?N(h,{attrs:l,slots:o,emit:a}):N(h,null)),B=e.props?l:td(l)}}catch(N){es.length=0,Ri(N,t,1),U=st(en)}let k=U;if(B&&C!==!1){const N=Object.keys(B),{shapeFlag:q}=k;N.length&&q&7&&(r&&N.some(Qr)&&(B=nd(B,r)),k=Cn(k,B,!1,!0))}return n.dirs&&(k=Cn(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&co(k,n.transition),U=k,Qs(L),U}const td=t=>{let e;for(const n in t)(n==="class"||n==="style"||bi(n))&&((e||(e={}))[n]=t[n]);return e},nd=(t,e)=>{const n={};for(const s in t)(!Qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function sd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ul(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Pi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ul(s,o,c):!0:!!o;return!1}function ul(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Pi(n,r))return!0}return!1}function id({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ic=t=>t.__isSuspense;function rd(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):uf(t)}const We=Symbol.for("v-fgt"),Di=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),es=[];let ke=null;function Le(t=!1){es.push(ke=t?null:[])}function od(){es.pop(),ke=es[es.length-1]||null}let us=1;function hl(t,e=!1){us+=t,t<0&&ke&&e&&(ke.hasOnce=!0)}function Sc(t){return t.dynamicChildren=us>0?ke||gn:null,od(),us>0&&ke&&ke.push(t),t}function et(t,e,n,s,i,r){return Sc(O(t,e,n,s,i,r,!0))}function Tc(t,e,n,s,i){return Sc(st(t,e,n,s,i,!0))}function Nc(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const Rc=({key:t})=>t??null,Vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ce(t)||F(t)?{i:Ne,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,s=0,i=null,r=t===We?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rc(e),ref:e&&Vs(e),scopeId:nc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ne};return l?(fo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),us>0&&!o&&ke&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ke.push(a),a}const st=ld;function ld(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===lc)&&(t=en),Nc(t)){const l=Cn(t,e,!0);return n&&fo(l,n),us>0&&!r&&ke&&(l.shapeFlag&6?ke[ke.indexOf(t)]=l:ke.push(l)),l.patchFlag=-2,l}if(yd(t)&&(t=t.__vccOpts),e){e=ad(e);let{class:l,style:a}=e;l&&!ue(l)&&(e.class=Zr(l)),oe(a)&&(oo(a)&&!M(a)&&(a=Se({},a)),e.style=Si(a))}const o=ue(t)?1:Ic(t)?128:pf(t)?64:oe(t)?4:F(t)?2:0;return O(t,e,n,s,i,o,r,!0)}function ad(t){return t?oo(t)||dc(t)?Se({},t):t:null}function Cn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?cd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Rc(c),ref:e&&e.ref?n&&r?M(r)?r.concat(Vs(e)):[r,Vs(e)]:Vs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&co(u,a.clone(u)),u}function wt(t=" ",e=0){return st(Di,null,t,e)}function pn(t="",e=!1){return e?(Le(),Tc(en,null,t)):st(en,null,t)}function tt(t){return t==null||typeof t=="boolean"?st(en):M(t)?st(We,null,t.slice()):Nc(t)?It(t):st(Di,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function fo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!dc(e)?e._ctx=Ne:i===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),s&64?(n=16,e=[wt(e)]):n=8);t.children=e,t.shapeFlag|=n}function cd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Zr([e.class,s.class]));else if(i==="style")e.style=Si([e.style,s.style]);else if(bi(i)){const r=e[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Je(t,e,n,s=null){it(t,e,7,[n,s])}const ud=uc();let hd=0;function fd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ud,r={uid:hd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_c(s,i),emitsOptions:wc(s,i),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ed.bind(null,r),t.ce&&t.ce(r),r}let me=null,Zs,Tr;{const t=Ii(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Zs=e("__VUE_INSTANCE_SETTERS__",n=>me=n),Tr=e("__VUE_SSR_SETTERS__",n=>hs=n)}const ws=t=>{const e=me;return Zs(t),t.scope.on(),()=>{t.scope.off(),Zs(e)}},fl=()=>{me&&me.scope.off(),Zs(null)};function Ac(t){return t.vnode.shapeFlag&4}let hs=!1;function dd(t,e=!1,n=!1){e&&Tr(e);const{props:s,children:i}=t.vnode,r=Ac(t);Hf(t,s,r,e),jf(t,i,n);const o=r?pd(t,e):void 0;return e&&Tr(!1),o}function pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Af);const{setup:s}=n;if(s){Lt();const i=t.setupContext=s.length>1?gd(t):null,r=ws(t),o=Es(s,t,0,[t.props,i]),l=wa(o);if(Bt(),r(),(l||t.sp)&&!Xn(t)&&sc(t),l){if(o.then(fl,fl),e)return o.then(a=>{dl(t,a)}).catch(a=>{Ri(a,t,0)});t.asyncDep=o}else dl(t,o)}else Pc(t)}function dl(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Qa(e)),Pc(t)}function Pc(t,e,n){const s=t.type;t.render||(t.render=s.render||nt);{const i=ws(t);Lt();try{Pf(t)}finally{Bt(),i()}}}const _d={get(t,e){return ve(t,"get",""),t[e]}};function gd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_d),slots:t.slots,emit:t.emit,expose:e}}function Oi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qa(lo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jn)return Jn[n](t)},has(e,n){return n in e||n in Jn}})):t.proxy}function md(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function yd(t){return F(t)&&"__vccOpts"in t}const Dc=(t,e)=>rf(t,e,hs),vd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nr;const pl=typeof window<"u"&&window.trustedTypes;if(pl)try{Nr=pl.createPolicy("vue",{createHTML:t=>t})}catch{}const Oc=Nr?t=>Nr.createHTML(t):t=>t,xd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,_l=ct&&ct.createElement("template"),Cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ct.createElementNS(xd,t):e==="mathml"?ct.createElementNS(bd,t):n?ct.createElement(t,{is:n}):ct.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ct.createTextNode(t),createComment:t=>ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{_l.innerHTML=Oc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=_l.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ed=Symbol("_vtc");function wd(t,e,n){const s=t[Ed];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gl=Symbol("_vod"),Id=Symbol("_vsh"),Sd=Symbol(""),Td=/(^|;)\s*display\s*:/;function Nd(t,e,n){const s=t.style,i=ue(n);let r=!1;if(n&&!i){if(e)if(ue(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&$s(s,l,"")}else for(const o in e)n[o]==null&&$s(s,o,"");for(const o in n)o==="display"&&(r=!0),$s(s,o,n[o])}else if(i){if(e!==n){const o=s[Sd];o&&(n+=";"+o),s.cssText=n,r=Td.test(n)}}else e&&t.removeAttribute("style");gl in t&&(t[gl]=r?s.display:"",t[Id]&&(s.display="none"))}const ml=/\s*!important$/;function $s(t,e,n){if(M(n))n.forEach(s=>$s(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rd(t,e);ml.test(n)?t.setProperty(rn(s),n.replace(ml,""),"important"):t[s]=n}}const yl=["Webkit","Moz","ms"],nr={};function Rd(t,e){const n=nr[e];if(n)return n;let s=Ue(e);if(s!=="filter"&&s in t)return nr[e]=s;s=wi(s);for(let i=0;i<yl.length;i++){const r=yl[i]+s;if(r in t)return nr[e]=r}return e}const vl="http://www.w3.org/1999/xlink";function xl(t,e,n,s,i,r=Rh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vl,e.slice(6,e.length)):t.setAttributeNS(vl,e,n):n==null||r&&!Na(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ft(n)?String(n):n)}function bl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Oc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Na(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function dn(t,e,n,s){t.addEventListener(e,n,s)}function Ad(t,e,n,s){t.removeEventListener(e,n,s)}const Cl=Symbol("_vei");function Pd(t,e,n,s,i=null){const r=t[Cl]||(t[Cl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Dd(e);if(s){const c=r[e]=kd(s,i);dn(t,l,c,a)}else o&&(Ad(t,l,o,a),r[e]=void 0)}}const El=/(?:Once|Passive|Capture)$/;function Dd(t){let e;if(El.test(t)){e={};let s;for(;s=t.match(El);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),e]}let sr=0;const Od=Promise.resolve(),Md=()=>sr||(Od.then(()=>sr=0),sr=Date.now());function kd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;it(Fd(s,n.value),e,5,[s])};return n.value=t,n.attached=Md(),n}function Fd(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ld=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?wd(t,s,o):e==="style"?Nd(t,n,s):bi(e)?Qr(e)||Pd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bd(t,e,s,o))?(bl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue(s))?bl(t,Ue(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xl(t,e,s,o))};function Bd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wl(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wl(e)&&ue(n)?!1:e in t}const Il=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>Hs(e,n):e};function Ud(t){t.target.composing=!0}function Sl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ir=Symbol("_assign"),Hd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ir]=Il(i);const r=s||i.props&&i.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=yr(l)),t[ir](l)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Ud),dn(t,"compositionend",Sl),dn(t,"change",Sl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[ir]=Il(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?yr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Wd=Se({patchProp:Ld},Cd);let Tl;function Vd(){return Tl||(Tl=qf(Wd))}const $d=(...t)=>{const e=Vd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Gd(s);if(!i)return;const r=e._component;!F(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,jd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gd(t){return ue(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Mc;const Mi=t=>Mc=t,kc=Symbol();function Rr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ts;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ts||(ts={}));function qd(){const t=Da(!0),e=t.run(()=>ft({}));let n=[],s=[];const i=lo({install(r){Mi(i),i._a=r,r.provide(kc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Fc=()=>{};function Nl(t,e,n,s=Fc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Oa()&&Ah(i),i}function an(t,...e){t.slice().forEach(n=>{n(...e)})}const zd=t=>t(),Rl=Symbol(),rr=Symbol();function Ar(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Rr(i)&&Rr(s)&&t.hasOwnProperty(n)&&!ce(s)&&!Tt(s)?t[n]=Ar(i,s):t[n]=s}return t}const Kd=Symbol();function Yd(t){return!Rr(t)||!t.hasOwnProperty(Kd)}const{assign:Ct}=Object;function Qd(t){return!!(ce(t)&&t.effect)}function Xd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=ef(n.state.value[t]);return Ct(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=lo(Dc(()=>{Mi(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return a=Lc(t,c,e,n,s,!0),a}function Lc(t,e,n={},s,i,r){let o;const l=Ct({actions:{}},n),a={deep:!0};let c,u,h=[],f=[],g;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),ft({});let C;function L(j){let z;c=u=!1,typeof j=="function"?(j(s.state.value[t]),z={type:ts.patchFunction,storeId:t,events:g}):(Ar(s.state.value[t],j),z={type:ts.patchObject,payload:j,storeId:t,events:g});const he=C=Symbol();Ja().then(()=>{C===he&&(c=!0)}),u=!0,an(h,z,s.state.value[t])}const U=r?function(){const{state:z}=n,he=z?z():{};this.$patch(Fe=>{Ct(Fe,he)})}:Fc;function B(){o.stop(),h=[],f=[],s._s.delete(t)}const k=(j,z="")=>{if(Rl in j)return j[rr]=z,j;const he=function(){Mi(s);const Fe=Array.from(arguments),ze=[],xt=[];function Mn($){ze.push($)}function Ds($){xt.push($)}an(f,{args:Fe,name:he[rr],store:q,after:Mn,onError:Ds});let ae;try{ae=j.apply(this&&this.$id===t?this:q,Fe)}catch($){throw an(xt,$),$}return ae instanceof Promise?ae.then($=>(an(ze,$),$)).catch($=>(an(xt,$),Promise.reject($))):(an(ze,ae),ae)};return he[Rl]=!0,he[rr]=z,he},N={_p:s,$id:t,$onAction:Nl.bind(null,f),$patch:L,$reset:U,$subscribe(j,z={}){const he=Nl(h,j,z.detached,()=>Fe()),Fe=o.run(()=>Ws(()=>s.state.value[t],ze=>{(z.flush==="sync"?u:c)&&j({storeId:t,type:ts.direct,events:g},ze)},Ct({},a,z)));return he},$dispose:B},q=Ni(N);s._s.set(t,q);const ye=(s._a&&s._a.runWithContext||zd)(()=>s._e.run(()=>(o=Da()).run(()=>e({action:k}))));for(const j in ye){const z=ye[j];if(ce(z)&&!Qd(z)||Tt(z))r||(_&&Yd(z)&&(ce(z)?z.value=_[j]:Ar(z,_[j])),s.state.value[t][j]=z);else if(typeof z=="function"){const he=k(z,j);ye[j]=he,l.actions[j]=z}}return Ct(q,ye),Ct(K(q),ye),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:j=>{L(z=>{Ct(z,j)})}}),s._p.forEach(j=>{Ct(q,o.run(()=>j({store:q,app:s._a,pinia:s,options:l})))}),_&&r&&n.hydrate&&n.hydrate(q.$state,_),c=!0,u=!0,q}/*! #__NO_SIDE_EFFECTS__ */function Jd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=Uf();return o=o||(a?Zn(kc,null):null),o&&Mi(o),o=Mc,o._s.has(t)||(i?Lc(t,e,s,o):Xd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Zd=()=>{};var Al={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Rn(e)},Rn=function(t){return new Error("Firebase Database ("+Bc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ep=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ep(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new tp;const f=r<<2|l>>4;if(s.push(f),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hc=function(t){const e=Uc(t);return po.encodeByteArray(e,!0)},ei=function(t){return Hc(t).replace(/\./g,"")},Pr=function(t){try{return po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){return Wc(void 0,t)}function Wc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sp(n)||(t[n]=Wc(t[n],e[n]));return t}function sp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=()=>ip().__FIREBASE_DEFAULTS__,op=()=>{if(typeof process>"u"||typeof Al>"u")return;const t=Al.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pr(t[1]);return e&&JSON.parse(e)},Vc=()=>{try{return Zd()||rp()||op()||lp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cp=t=>{const e=ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$c=()=>{var t;return(t=Vc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ei(JSON.stringify(n)),ei(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hp())}function fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dp(){return Bc.NODE_ADMIN===!0}function pp(){try{return typeof indexedDB=="object"}catch{return!1}}function _p(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="FirebaseError";class Is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gp,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gc.prototype.create)}}class Gc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?mp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Is(i,l,s)}}function mp(t,e){return t.replace(yp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=fs(Pr(r[0])||""),n=fs(Pr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vp=function(t){const e=qc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xp=function(t){const e=qc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function En(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Dl(r)&&Dl(o)){if(!ni(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Dl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function _o(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ki;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sp(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ip(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ip(t){return t===Gt?void 0:t}function Sp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Np={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Rp=se.INFO,Ap={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Pp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ap[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=Rp,this._logHandler=Pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Dp=(t,e)=>e.some(n=>t instanceof n);let Ol,Ml;function Op(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mp(){return Ml||(Ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kc=new WeakMap,Dr=new WeakMap,Yc=new WeakMap,or=new WeakMap,go=new WeakMap;function kp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kc.set(n,t)}).catch(()=>{}),go.set(e,t),e}function Fp(t){if(Dr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Dr.set(t,e)}let Or={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lp(t){Or=t(Or)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lr(this),e,...n);return Yc.set(s,e.sort?e.sort():[e]),Nt(s)}:Mp().includes(t)?function(...e){return t.apply(lr(this),e),Nt(Kc.get(this))}:function(...e){return Nt(t.apply(lr(this),e))}}function Up(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&Fp(t),Dp(t,Op())?new Proxy(t,Or):t)}function Nt(t){if(t instanceof IDBRequest)return kp(t);if(or.has(t))return or.get(t);const e=Up(t);return e!==t&&(or.set(t,e),go.set(e,t)),e}const lr=t=>go.get(t);function Hp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Nt(o.result),a.oldVersion,a.newVersion,Nt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Wp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],ar=new Map;function kl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ar.get(e))return ar.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Vp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Wp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return ar.set(e,r),r}Lp(t=>({...t,get:(e,n,s)=>kl(e,n)||t.get(e,n,s),has:(e,n)=>!!kl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mr="@firebase/app",Fl="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new zc("@firebase/app"),Gp="@firebase/app-compat",qp="@firebase/analytics-compat",zp="@firebase/analytics",Kp="@firebase/app-check-compat",Yp="@firebase/app-check",Qp="@firebase/auth",Xp="@firebase/auth-compat",Jp="@firebase/database",Zp="@firebase/data-connect",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",s_="@firebase/installations",i_="@firebase/installations-compat",r_="@firebase/messaging",o_="@firebase/messaging-compat",l_="@firebase/performance",a_="@firebase/performance-compat",c_="@firebase/remote-config",u_="@firebase/remote-config-compat",h_="@firebase/storage",f_="@firebase/storage-compat",d_="@firebase/firestore",p_="@firebase/vertexai",__="@firebase/firestore-compat",g_="firebase",m_="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]",y_={[Mr]:"fire-core",[Gp]:"fire-core-compat",[zp]:"fire-analytics",[qp]:"fire-analytics-compat",[Yp]:"fire-app-check",[Kp]:"fire-app-check-compat",[Qp]:"fire-auth",[Xp]:"fire-auth-compat",[Jp]:"fire-rtdb",[Zp]:"fire-data-connect",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[s_]:"fire-iid",[i_]:"fire-iid-compat",[r_]:"fire-fcm",[o_]:"fire-fcm-compat",[l_]:"fire-perf",[a_]:"fire-perf-compat",[c_]:"fire-rc",[u_]:"fire-rc-compat",[h_]:"fire-gcs",[f_]:"fire-gcs-compat",[d_]:"fire-fst",[__]:"fire-fst-compat",[p_]:"fire-vertex","fire-js":"fire-js",[g_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Map,v_=new Map,Fr=new Map;function Ll(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Fr.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Fr.set(e,t);for(const n of si.values())Ll(n,t);for(const n of v_.values())Ll(n,t);return!0}function x_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function b_(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new Gc("app","Firebase",C_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=m_;function Qc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(n||(n=$c()),!n)throw Rt.create("no-options");const r=si.get(i);if(r){if(ni(n,r.options)&&ni(s,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new Tp(i);for(const a of Fr.values())o.addComponent(a);const l=new E_(n,s,o);return si.set(i,l),l}function I_(t=kr){const e=si.get(t);if(!e&&t===kr&&$c())return Qc();if(!e)throw Rt.create("no-app",{appName:t});return e}function vn(t,e,n){var s;let i=(s=y_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(l.join(" "));return}ii(new ds(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebase-heartbeat-database",T_=1,ps="firebase-heartbeat-store";let cr=null;function Xc(){return cr||(cr=Hp(S_,T_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ps)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),cr}async function N_(t){try{const n=(await Xc()).transaction(ps),s=await n.objectStore(ps).get(Jc(t));return await n.done,s}catch(e){if(e instanceof Is)_t.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(n.message)}}}async function Bl(t,e){try{const s=(await Xc()).transaction(ps,"readwrite");await s.objectStore(ps).put(e,Jc(t)),await s.done}catch(n){if(n instanceof Is)_t.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(s.message)}}}function Jc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=1024,A_=30;class P_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ul();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>A_){const o=M_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_t.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ul(),{heartbeatsToSend:s,unsentEntries:i}=D_(this._heartbeatsCache.heartbeats),r=ei(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return _t.warn(n),""}}}function Ul(){return new Date().toISOString().substring(0,10)}function D_(t,e=R_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Hl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class O_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pp()?_p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await N_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hl(t){return ei(JSON.stringify({version:2,heartbeats:t})).length}function M_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){ii(new ds("platform-logger",e=>new $p(e),"PRIVATE")),ii(new ds("heartbeat",e=>new P_(e),"PRIVATE")),vn(Mr,Fl,t),vn(Mr,Fl,"esm2017"),vn("fire-js","")}k_("");var F_="firebase",L_="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(F_,L_,"app");var Wl={};const Vl="@firebase/database",$l="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc="";function B_(t){Zc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new U_(e)}}catch{}return new H_},Yt=eu("localStorage"),W_=eu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new zc("@firebase/database"),V_=function(){let t=1;return function(){return t++}}(),tu=function(t){const e=Ep(t),n=new Cp;n.update(e);const s=n.digest();return po.encodeByteArray(s)},Ss=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ss.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let ns=null,jl=!0;const $_=function(t,e){E(!0,"Can't turn on custom loggers persistently."),xn.logLevel=se.VERBOSE,ns=xn.log.bind(xn)},be=function(...t){if(jl===!0&&(jl=!1,ns===null&&W_.get("logging_enabled")===!0&&$_()),ns){const e=Ss.apply(null,t);ns(e)}},Ts=function(t){return function(...e){be(t,...e)}},Lr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ss(...t);xn.error(e)},gt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ss(...t)}`;throw xn.error(e),new Error(e)},Ae=function(...t){const e="FIREBASE WARNING: "+Ss(...t);xn.warn(e)},j_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wn="[MIN_NAME]",tn="[MAX_NAME]",Pn=function(t,e){if(t===e)return 0;if(t===wn||e===tn)return-1;if(e===wn||t===tn)return 1;{const n=Gl(t),s=Gl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},q_=function(t,e){return t===e?0:t<e?-1:1},Hn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},mo=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=mo(t[e[s]]);return n+="}",n},su=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iu=function(t){E(!nu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},z_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},K_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Y_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Q_=new RegExp("^-?(0*)\\d{1,10}$"),X_=-2147483648,J_=2147483647,Gl=function(t){if(Q_.test(t)){const e=Number(t);if(e>=X_&&e<=J_)return e}return null},Dn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ae("Exception was thrown by user callback.",n),e},Math.floor(0))}},Z_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,b_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ae(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ae(e)}}class js{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}js.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="5",ru="v",ou="s",lu="r",au="f",cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uu="ls",hu="p",Br="ac",fu="websocket",du="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ng(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _u(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===fu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===du)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ng(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return np(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={},hr={};function vo(t){const e=t.toString();return ur[e]||(ur[e]=new sg),ur[e]}function ig(t,e){const n=t.toString();return hr[n]||(hr[n]=e()),hr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Dn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="start",og="close",lg="pLPCommand",ag="pRTLPCB",gu="id",mu="pw",yu="ser",cg="cb",ug="seg",hg="ts",fg="d",dg="dframe",vu=1870,xu=30,pg=vu-xu,_g=25e3,gg=3e4;class _n{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=vo(n),this.urlFn=a=>(this.appCheckToken&&(a[Br]=this.appCheckToken),_u(n,du,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gg)),G_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ql)this.id=l,this.password=a;else if(o===og)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ql]="t",s[yu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ru]=yo,this.transportSessionId&&(s[ou]=this.transportSessionId),this.lastSessionId&&(s[uu]=this.lastSessionId),this.applicationId&&(s[hu]=this.applicationId),this.appCheckToken&&(s[Br]=this.appCheckToken),typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(s[lu]=au);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!z_()&&!K_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hc(n),i=su(s,pg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[dg]="t",s[gu]=e,s[mu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=V_(),window[lg+this.uniqueCallbackIdentifier]=e,window[ag+this.uniqueCallbackIdentifier]=n,this.myIFrame=xo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gu]=this.myID,e[mu]=this.myPW,e[yu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xu+s.length<=vu;){const o=this.pendingSegs.shift();s=s+"&"+ug+i+"="+o.seg+"&"+hg+i+"="+o.ts+"&"+fg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(_g)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=16384,yg=45e3;let ri=null;typeof MozWebSocket<"u"?ri=MozWebSocket:typeof WebSocket<"u"&&(ri=WebSocket);class Ve{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=vo(n),this.connURL=Ve.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ru]=yo,typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(o[lu]=au),n&&(o[ou]=n),s&&(o[uu]=s),i&&(o[Br]=i),r&&(o[hu]=r),_u(e,fu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{let s;dp(),this.mySock=new ri(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ri!==null&&!Ve.forceDisallow_}static previouslyFailed(){return Yt.isInMemoryStorage||Yt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=fs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=su(n,mg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ve.responsesRequiredToBeHealthy=2;Ve.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static get ALL_TRANSPORTS(){return[_n,Ve]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ve&&Ve.isAvailable();let s=n&&!Ve.previouslyFailed();if(e.webSocketOnly&&(n||Ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ve];else{const i=this.transports_=[];for(const r of _s.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);_s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_s.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=6e4,xg=5e3,bg=10*1024,Cg=100*1024,fr="t",zl="d",Eg="s",Kl="r",wg="e",Yl="o",Ql="a",Xl="n",Jl="p",Ig="h";class Sg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new _s(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Cg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fr in e){const n=e[fr];n===Ql?this.upgradeIfSecondaryHealthy_():n===Kl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hn("t",e),s=Hn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ql,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hn("t",e),s=Hn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hn(fr,e);if(zl in e){const s=e[zl];if(n===Ig){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Eg?this.onConnectionShutdown_(s):n===Kl?this.onReset_(s):n===wg?Lr("Server Error: "+s):n===Yl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yo!==s&&Ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Cu{static getInstance(){return new oi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=32,ea=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new Z("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function Eu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Tg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Iu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Ie(t,e){const n=H(t),s=H(e);if(n===null)return e;if(n===s)return Ie(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bo(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $e(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ng{constructor(e,n){this.errorPrefix_=n,this.parts_=wu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fi(this.parts_[s]);Su(this)}}function Rg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fi(e),Su(t)}function Ag(t){const e=t.parts_.pop();t.byteLength_-=Fi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Su(t){if(t.byteLength_>ea)throw new Error(t.errorPrefix_+"has a key path longer than "+ea+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zl+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Cu{static getInstance(){return new Co}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e3,Pg=60*5*1e3,ta=30*1e3,Dg=1.3,Og=3e4,Mg="server_kill",na=3;class pt extends bu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=pt.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=Pg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Co.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ki,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;pt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=En(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ta)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lr("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Og&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Sg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ae(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ae(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pl(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>mo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=na&&(this.reconnectDelay_=ta,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=na&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Zc.replace(/\./g,"-")]=1,jc()?e["framework.cordova"]=1:fp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oi.getInstance().currentlyOnline();return Pl(this.interruptReasons_)&&e}}pt.nextPersistentConnectionId_=0;pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new W(wn,e),i=new W(wn,n);return this.compare(s,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class Tu extends Li{static get __EMPTY_NODE(){return Bs}static set __EMPTY_NODE(e){Bs=e}compare(e,n){return Pn(e.name,n.name)}isDefinedOn(e){throw Rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(tn,Bs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Bs)}toString(){return".key"}}const bn=new Tu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Re.EMPTY_NODE,this.right=r??Re.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class kg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Us(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Us(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new kg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){return Pn(t.name,e.name)}function Eo(t,e){return Pn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur;function Lg(t){Ur=t}const Nu=function(t){return typeof t=="number"?"number:"+iu(t):"string:"+t},Ru=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else E(t===Ur||t.isEmpty(),"priority of unexpected type.");E(t===Ur||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;class pe{static set __childrenNodeConstructor(e){sa=e}static get __childrenNodeConstructor(){return sa}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ru(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:H(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=H(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iu(this.value_):e+=this.value_,this.lazyHash_=tu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au,Pu;function Bg(t){Au=t}function Ug(t){Pu=t}class Hg extends Li{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Pn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(tn,new pe("[PRIORITY-POST]",Pu))}makePost(e,n){const s=Au(e);return new W(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new Hg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=Math.log(2);class Vg{constructor(e){const n=r=>parseInt(Math.log(r)/Wg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new _e(f,h.node,_e.BLACK,null,null);{const g=parseInt(u/2,10)+a,_=i(a,g),C=i(g+1,c);return h=t[g],f=n?n(h):h,new _e(f,h.node,_e.BLACK,_,C)}},r=function(a){let c=null,u=null,h=t.length;const f=function(_,C){const L=h-_,U=h;h-=_;const B=i(L+1,U),k=t[L],N=n?n(k):k;g(new _e(N,k.node,C,null,B))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<a.count;++_){const C=a.nextBitIsOne(),L=Math.pow(2,a.count-(_+1));C?f(L,_e.BLACK):(f(L,_e.BLACK),f(L,_e.RED))}return u},o=new Vg(t.length),l=r(o);return new Re(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const cn={};class dt{static get Default(){return E(cn&&le,"ChildrenNode.ts has not been loaded"),dr=dr||new dt({".priority":cn},{".priority":le}),dr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=En(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(W.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=li(s,e.getCompare()):l=cn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new dt(u,c)}addToIndexes(e,n){const s=ti(this.indexes_,(i,r)=>{const o=En(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===cn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(W.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),li(l,o.getCompare())}else return cn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new W(e.name,l))),a.insert(e,e.node)}});return new dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ti(this.indexes_,i=>{if(i===cn)return i;{const r=n.get(e.name);return r?i.remove(new W(e.name,r)):i}});return new dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class P{static get EMPTY_NODE(){return Vn||(Vn=new P(new Re(Eo),null,dt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ru(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vn:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new W(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=H(e);if(s===null)return n;{E(H(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nu(this.getPriority().val())+":"),this.forEachChild(le,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new W(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ns?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(le),i=n.getIterator(le);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $g extends P{constructor(){super(new Re(Eo),P.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ns=new $g;Object.defineProperties(W,{MIN:{value:new W(wn,P.EMPTY_NODE)},MAX:{value:new W(tn,Ns)}});Tu.__EMPTY_NODE=P.EMPTY_NODE;pe.__childrenNodeConstructor=P;Lg(Ns);Ug(Ns);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=!0;function ge(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,ge(e))}if(!(t instanceof Array)&&jg){const n=[];let s=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new W(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=li(n,Fg,o=>o.name,Eo);if(s){const o=li(n,le.getCompare());return new P(r,ge(e),new dt({".priority":o},{".priority":le}))}else return new P(r,ge(e),dt.Default)}else{let n=P.EMPTY_NODE;return Pe(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}Bg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends Li{constructor(e){super(),this.indexPath_=e,E(!V(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Pn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new W(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ns);return new W(tn,e)}toString(){return wu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg extends Li{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const s=ge(e);return new W(n,s)}toString(){return".value"}}const zg=new qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Kg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(In(n,s)):o.trackChildChange(ms(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(i,r)=>{n.hasChild(i)||s.trackChildChange(gs(i,r))}),n.isLeafNode()||n.forEachChild(le,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ms(i,r,o))}else s.trackChildChange(In(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.indexedFilter_=new wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new W(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(le,(o,l)=>{r.matches(new W(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new W(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new W(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ms(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(gs(n,h));const C=l.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(In(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(gs(c.name,c.node)),r.trackChildChange(In(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new Io;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qg(t){return t.loadsAllData()?new wo(t.getIndex()):t.hasLimit()?new Yg(t):new ys(t)}function ia(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===zg?n="$value":t.index_===bn?n="$key":(E(t.index_ instanceof Gg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ra(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends bu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ai.getListenId_(e,s),l={};this.listens_[o]=l;const a=ia(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),En(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ai.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ia(e._queryParams),s=e._path.toString(),i=new ki;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=fs(l.responseText)}catch{Ae("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ae("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return{value:null,children:new Map}}function Ou(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=H(e);t.children.has(s)||t.children.set(s,ci());const i=t.children.get(s);e=ie(e),Ou(i,e,n)}}function Hr(t,e,n){t.value!==null?n(e,t.value):Jg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Hr(i,r,n)})}function Jg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=10*1e3,em=30*1e3,tm=5*60*1e3;class nm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zg(e);const s=oa+(em-oa)*Math.random();ss(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Pe(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*tm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(je||(je={}));function Mu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function So(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function To(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=je.ACK_USER_WRITE,this.source=Mu()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new ui(Y(),n,this.revert)}}else return E(H(this.path)===e,"operationForChild called for unrelated child."),new ui(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.source=e,this.path=n,this.type=je.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new vs(this.source,Y()):new vs(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=je.OVERWRITE}operationForChild(e){return V(this.path)?new nn(this.source,Y(),this.snap.getImmediateChild(e)):new nn(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=je.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new nn(this.source,Y(),n.value):new xs(this.source,Y(),n)}else return E(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xs(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function im(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Kg(o.childName,o.snapshotNode))}),$n(t,i,"child_removed",e,s,n),$n(t,i,"child_added",e,s,n),$n(t,i,"child_moved",r,s,n),$n(t,i,"child_changed",e,s,n),$n(t,i,"value",e,s,n),i}function $n(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>om(t,l,a)),o.forEach(l=>{const a=rm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function rm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function om(t,e,n){if(e.childName==null||n.childName==null)throw Rn("Should only compare child_ events.");const s=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t,e){return{eventCache:t,serverCache:e}}function is(t,e,n,s){return Bi(new Ot(e,n,s),t.serverCache)}function ku(t,e,n,s){return Bi(t.eventCache,new Ot(e,n,s))}function hi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;const lm=()=>(pr||(pr=new Re(q_)),pr);class re{static fromObject(e){let n=new re(null);return Pe(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=lm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(V(e))return null;{const s=H(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=H(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(V(e))return new re(n,this.children);{const s=H(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=H(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const n=H(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(V(e))return n;{const s=H(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(V(e))return null;{const r=H(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(V(e))return this;{this.value&&s(n,this.value);const i=H(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),de(n,i),s):new re(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.writeTree_=e}static empty(){return new qe(new re(null))}}function rs(t,e,n){if(V(e))return new qe(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ie(i,e);return r=r.updateChild(o,n),new qe(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new qe(r)}}}function la(t,e,n){let s=t;return Pe(n,(i,r)=>{s=rs(s,de(e,i),r)}),s}function aa(t,e){if(V(e))return qe.empty();{const n=t.writeTree_.setTree(e,new re(null));return new qe(n)}}function Wr(t,e){return on(t,e)!=null}function on(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ie(n.path,e)):null}function ca(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(s,i)=>{e.push(new W(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new W(s,i.value))}),e}function At(t,e){if(V(e))return t;{const n=on(t,e);return n!=null?new qe(new re(n)):new qe(t.writeTree_.subtree(e))}}function Vr(t){return t.writeTree_.isEmpty()}function Sn(t,e){return Fu(Y(),t.writeTree_,e)}function Fu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Fu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e){return Hu(e,t)}function am(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=rs(t.visibleWrites,e,n)),t.lastWriteId=s}function cm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function um(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&hm(l,s.path)?i=!1:$e(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return fm(t),!0;if(s.snap)t.visibleWrites=aa(t.visibleWrites,s.path);else{const l=s.children;Pe(l,a=>{t.visibleWrites=aa(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function hm(t,e){if(t.snap)return $e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$e(de(t.path,n),e))return!0;return!1}function fm(t){t.visibleWrites=Lu(t.allWrites,dm,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dm(t){return t.visible}function Lu(t,e,n){let s=qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)$e(n,o)?(l=Ie(n,o),s=rs(s,l,r.snap)):$e(o,n)&&(l=Ie(o,n),s=rs(s,Y(),r.snap.getChild(l)));else if(r.children){if($e(n,o))l=Ie(n,o),s=la(s,l,r.children);else if($e(o,n))if(l=Ie(o,n),V(l))s=la(s,Y(),r.children);else{const a=En(r.children,H(l));if(a){const c=a.getChild(ie(l));s=rs(s,Y(),c)}}}else throw Rn("WriteRecord should have .snap or .children")}}return s}function Bu(t,e,n,s,i){if(!s&&!i){const r=on(t.visibleWrites,e);if(r!=null)return r;{const o=At(t.visibleWrites,e);if(Vr(o))return n;if(n==null&&!Wr(o,Y()))return null;{const l=n||P.EMPTY_NODE;return Sn(o,l)}}}else{const r=At(t.visibleWrites,e);if(!i&&Vr(r))return n;if(!i&&n==null&&!Wr(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&($e(c.path,e)||$e(e,c.path))},l=Lu(t.allWrites,o,e),a=n||P.EMPTY_NODE;return Sn(l,a)}}}function pm(t,e,n){let s=P.EMPTY_NODE;const i=on(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=At(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=Sn(At(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),ca(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(t.visibleWrites,e);return ca(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function _m(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(Wr(t.visibleWrites,r))return null;{const o=At(t.visibleWrites,r);return Vr(o)?i.getChild(n):Sn(o,i.getChild(n))}}function gm(t,e,n,s){const i=de(e,n),r=on(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=At(t.visibleWrites,i);return Sn(o,s.getNode().getImmediateChild(n))}else return null}function mm(t,e){return on(t.visibleWrites,e)}function ym(t,e,n,s,i,r,o){let l;const a=At(t.visibleWrites,e),c=on(a,Y());if(c!=null)l=c;else if(n!=null)l=Sn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function vm(){return{visibleWrites:qe.empty(),allWrites:[],lastWriteId:-1}}function fi(t,e,n,s){return Bu(t.writeTree,t.treePath,e,n,s)}function No(t,e){return pm(t.writeTree,t.treePath,e)}function ua(t,e,n,s){return _m(t.writeTree,t.treePath,e,n,s)}function di(t,e){return mm(t.writeTree,de(t.treePath,e))}function xm(t,e,n,s,i,r){return ym(t.writeTree,t.treePath,e,n,s,i,r)}function Ro(t,e,n){return gm(t.writeTree,t.treePath,e,n)}function Uu(t,e){return Hu(de(t.treePath,e),t.writeTree)}function Hu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ms(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,In(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ms(s,e.snapshotNode,i.oldSnap));else throw Rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wu=new Cm;class Ao{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ro(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=xm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){return{filter:t}}function wm(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Im(t,e,n,s,i){const r=new bm;let o,l;if(n.type===je.OVERWRITE){const c=n;c.source.fromUser?o=$r(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=pi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===je.MERGE){const c=n;c.source.fromUser?o=Tm(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=jr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===je.ACK_USER_WRITE){const c=n;c.revert?o=Am(t,e,c.path,s,i,r):o=Nm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===je.LISTEN_COMPLETE)o=Rm(t,e,n.path,s,r);else throw Rn("Unknown operation type: "+n.type);const a=r.getChanges();return Sm(e,o,a),{viewCache:o,changes:a}}function Sm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=hi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Du(hi(e)))}}function Vu(t,e,n,s,i,r){const o=e.eventCache;if(di(s,n)!=null)return e;{let l,a;if(V(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sn(e),u=c instanceof P?c:P.EMPTY_NODE,h=No(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=fi(s,sn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=H(n);if(c===".priority"){E(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=ua(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=ua(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Ro(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return is(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function pi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=H(n);if(!a.isCompleteForPath(n)&&Dt(n)>1)return e;const _=ie(n),L=a.getNode().getImmediateChild(g).updateChild(_,s);g===".priority"?c=u.updatePriority(a.getNode(),L):c=u.updateChild(a.getNode(),g,L,_,Wu,null)}const h=ku(e,c,a.isFullyInitialized()||V(n),u.filtersNodes()),f=new Ao(i,h,r);return Vu(t,h,n,i,f,l)}function $r(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ao(i,e,r);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=is(e,c,!0,t.filter.filtersNodes());else{const h=H(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=is(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ie(n),g=l.getNode().getImmediateChild(h);let _;if(V(f))_=s;else{const C=u.getCompleteChild(h);C!=null?Eu(f)===".priority"&&C.getChild(Iu(f)).isEmpty()?_=C:_=C.updateChild(f,s):_=P.EMPTY_NODE}if(g.equals(_))a=e;else{const C=t.filter.updateChild(l.getNode(),h,_,f,u,o);a=is(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ha(t,e){return t.eventCache.isCompleteForChild(e)}function Tm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);ha(e,H(u))&&(l=$r(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);ha(e,H(u))||(l=$r(t,l,u,c,i,r,o))}),l}function fa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function jr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;V(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=fa(t,g,f);a=pi(t,a,new Z(h),_,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),C=fa(t,_,f);a=pi(t,a,new Z(h),C,i,r,o,l)}}),a}function Nm(t,e,n,s,i,r,o){if(di(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return pi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(V(n)){let c=new re(null);return a.getNode().forEachChild(bn,(u,h)=>{c=c.set(new Z(u),h)}),jr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const f=de(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),jr(t,e,n,c,i,r,l,o)}}function Rm(t,e,n,s,i){const r=e.serverCache,o=ku(e,r.getNode(),r.isFullyInitialized()||V(n),r.isFiltered());return Vu(t,o,n,s,Wu,i)}function Am(t,e,n,s,i,r){let o;if(di(s,n)!=null)return e;{const l=new Ao(s,e,i),a=e.eventCache.getNode();let c;if(V(n)||H(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=fi(s,sn(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=No(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=H(n);let h=Ro(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fi(s,sn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||di(s,Y())!=null,is(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new wo(s.getIndex()),r=Qg(s);this.processor_=Em(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new Ot(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ot(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Bi(h,u),this.eventGenerator_=new sm(this.query_)}get query(){return this.query_}}function Dm(t){return t.viewCache_.serverCache.getNode()}function Om(t){return hi(t.viewCache_)}function Mm(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function da(t){return t.eventRegistrations_.length===0}function km(t,e){t.eventRegistrations_.push(e)}function pa(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function _a(t,e,n,s){e.type===je.MERGE&&e.source.queryId!==null&&(E(sn(t.viewCache_),"We should always have a full cache before handling merges"),E(hi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Im(t.processor_,i,e,n,s);return wm(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$u(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Fm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(r,o)=>{s.push(In(r,o))}),n.isFullyInitialized()&&s.push(Du(n.getNode())),$u(t,s,n.getNode(),e)}function $u(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return im(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class ju{constructor(){this.views=new Map}}function Lm(t){E(!_i,"__referenceConstructor has already been defined"),_i=t}function Bm(){return E(_i,"Reference.ts has not been loaded"),_i}function Um(t){return t.views.size===0}function Po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),_a(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(_a(o,e,n,s));return r}}function Gu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=fi(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=No(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=Bi(new Ot(l,a,!1),new Ot(s,i,!1));return new Pm(e,c)}return o}function Hm(t,e,n,s,i,r){const o=Gu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),km(o,n),Fm(o,n)}function Wm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Mt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(pa(c,n,s)),da(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(pa(a,n,s)),da(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Mt(t)&&r.push(new(Bm())(e._repo,e._path)),{removed:r,events:o}}function qu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pt(t,e){let n=null;for(const s of t.views.values())n=n||Mm(s,e);return n}function zu(t,e){if(e._queryParams.loadsAllData())return Hi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ku(t,e){return zu(t,e)!=null}function Mt(t){return Hi(t)!=null}function Hi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;function Vm(t){E(!gi,"__referenceConstructor has already been defined"),gi=t}function $m(){return E(gi,"Reference.ts has not been loaded"),gi}let jm=1;class ga{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=vm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yu(t,e,n,s,i){return am(t.pendingWriteTree_,e,n,s,i),i?As(t,new nn(Mu(),e,n)):[]}function Qt(t,e,n=!1){const s=cm(t.pendingWriteTree_,e);if(um(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Y(),!0):Pe(s.children,o=>{r=r.set(new Z(o),!0)}),As(t,new ui(s.path,r,n))}else return[]}function Rs(t,e,n){return As(t,new nn(So(),e,n))}function Gm(t,e,n){const s=re.fromObject(n);return As(t,new xs(So(),e,s))}function qm(t,e){return As(t,new vs(So(),e))}function zm(t,e,n){const s=Oo(t,n);if(s){const i=Mo(s),r=i.path,o=i.queryId,l=Ie(r,e),a=new vs(To(o),l);return ko(t,r,a)}else return[]}function mi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ku(o,e))){const a=Wm(o,e,n,s);Um(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,g)=>Mt(g));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=Qm(f);for(let _=0;_<g.length;++_){const C=g[_],L=C.query,U=Zu(t,C);t.listenProvider_.startListening(os(L),bs(t,L),U.hashFn,U.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(os(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(Wi(f));t.listenProvider_.stopListening(os(f),g)}))}Xm(t,c)}return l}function Qu(t,e,n,s){const i=Oo(t,s);if(i!=null){const r=Mo(i),o=r.path,l=r.queryId,a=Ie(o,e),c=new nn(To(l),a,n);return ko(t,o,c)}else return[]}function Km(t,e,n,s){const i=Oo(t,s);if(i){const r=Mo(i),o=r.path,l=r.queryId,a=Ie(o,e),c=re.fromObject(n),u=new xs(To(l),a,c);return ko(t,o,u)}else return[]}function Gr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=Ie(f,i);r=r||Pt(g,_),o=o||Mt(g)});let l=t.syncPointTree_.get(i);l?(o=o||Mt(l),r=r||Pt(l,Y())):(l=new ju,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const C=Pt(_,Y());C&&(r=r.updateImmediateChild(g,C))}));const c=Ku(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Wi(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Jm();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=Ui(t.pendingWriteTree_,i);let h=Hm(l,e,n,u,r,a);if(!c&&!o&&!s){const f=zu(l,e);h=h.concat(Zm(t,e,f))}return h}function Do(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ie(o,e),c=Pt(l,a);if(c)return c});return Bu(i,e,r,n,!0)}function Ym(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ie(c,n);s=s||Pt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Pt(i,Y()):(i=new ju,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ot(s,!0,!1):null,l=Ui(t.pendingWriteTree_,e._path),a=Gu(i,e,l,r?o.getNode():P.EMPTY_NODE,r);return Om(a)}function As(t,e){return Xu(e,t.syncPointTree_,null,Ui(t.pendingWriteTree_,Y()))}function Xu(t,e,n,s){if(V(t.path))return Ju(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=Pt(i,Y()));let r=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Uu(s,o);r=r.concat(Xu(l,a,c,u))}return i&&(r=r.concat(Po(i,t,s,n))),r}}function Ju(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=Pt(i,Y()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Uu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ju(u,l,a,c)))}),i&&(r=r.concat(Po(i,t,s,n))),r}function Zu(t,e){const n=e.query,s=bs(t,n);return{hashFn:()=>(Dm(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?zm(t,n._path,s):qm(t,n._path);{const r=Y_(i,n);return mi(t,n,null,r)}}}}function bs(t,e){const n=Wi(e);return t.queryToTagMap.get(n)}function Wi(t){return t._path.toString()+"$"+t._queryIdentifier}function Oo(t,e){return t.tagToQueryMap.get(e)}function Mo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function ko(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Ui(t.pendingWriteTree_,e);return Po(s,n,i,null)}function Qm(t){return t.fold((e,n,s)=>{if(n&&Mt(n))return[Hi(n)];{let i=[];return n&&(i=qu(n)),Pe(s,(r,o)=>{i=i.concat(o)}),i}})}function os(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($m())(t._repo,t._path):t}function Xm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Wi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Jm(){return jm++}function Zm(t,e,n){const s=e._path,i=bs(t,e),r=Zu(t,n),o=t.listenProvider_.startListening(os(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!V(c)&&u&&Mt(u))return[Hi(u).query];{let f=[];return u&&(f=f.concat(qu(u).map(g=>g.query))),Pe(h,(g,_)=>{f=f.concat(_)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(os(u),bs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fo(n)}node(){return this.node_}}class Lo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Lo(this.syncTree_,n)}node(){return Do(this.syncTree_,this.path_)}}const ey=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ma=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ty(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ny(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ty=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},ny=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},sy=function(t,e,n,s){return Bo(e,new Lo(n,t),s)},eh=function(t,e,n){return Bo(t,new Fo(e),n)};function Bo(t,e,n){const s=t.getPriority().val(),i=ma(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ma(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(le,(l,a)=>{const c=Bo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ho(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=H(n);for(;i!==null;){const r=En(s.node.children,i)||{children:{},childCount:0};s=new Uo(i,s,r),n=ie(n),i=H(n)}return s}function On(t){return t.node.value}function th(t,e){t.node.value=e,qr(t)}function nh(t){return t.node.childCount>0}function iy(t){return On(t)===void 0&&!nh(t)}function Vi(t,e){Pe(t.node.children,(n,s)=>{e(new Uo(n,t,s))})}function sh(t,e,n,s){n&&e(t),Vi(t,i=>{sh(i,e,!0)})}function ry(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ps(t){return new Z(t.parent===null?t.name:Ps(t.parent)+"/"+t.name)}function qr(t){t.parent!==null&&oy(t.parent,t.name,t)}function oy(t,e,n){const s=iy(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,qr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=/[\[\].#$\/\u0000-\u001F\u007F]/,ay=/[\[\].#$\u0000-\u001F\u007F]/,_r=10*1024*1024,ih=function(t){return typeof t=="string"&&t.length!==0&&!ly.test(t)},rh=function(t){return typeof t=="string"&&t.length!==0&&!ay.test(t)},cy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rh(t)},uy=function(t,e,n,s){Wo(_o(t,"value"),e,n)},Wo=function(t,e,n){const s=n instanceof Z?new Ng(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+qt(s)+" with contents = "+e.toString());if(nu(e))throw new Error(t+"contains "+e.toString()+" "+qt(s));if(typeof e=="string"&&e.length>_r/3&&Fi(e)>_r)throw new Error(t+"contains a string greater than "+_r+" utf8 bytes "+qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Pe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ih(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Rg(s,o),Wo(t,l,s),Ag(s)}),i&&r)throw new Error(t+' contains ".value" child '+qt(s)+" in addition to actual children.")}},oh=function(t,e,n,s){if(!rh(n))throw new Error(_o(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hy=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oh(t,e,n)},lh=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ih(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cy(n))throw new Error(_o(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!bo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ah(t,e,n){Vo(t,n),ch(t,s=>bo(s,e))}function rt(t,e,n){Vo(t,n),ch(t,s=>$e(s,e)||$e(e,s))}function ch(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(py(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function py(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ns&&be("event: "+n.toString()),Dn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="repo_interrupt",gy=25;class my{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ci(),this.transactionQueueTree_=new Uo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yy(t,e,n){if(t.stats_=vo(t.repoInfo_),t.forceRestClient_||Z_())t.server_=new ai(t.repoInfo_,(s,i,r,o)=>{ya(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>va(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pt(t.repoInfo_,e,(s,i,r,o)=>{ya(t,s,i,r,o)},s=>{va(t,s)},s=>{xy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ig(t.repoInfo_,()=>new nm(t.stats_,t.server_)),t.infoData_=new Xg,t.infoSyncTree_=new ga({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Rs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),jo(t,"connected",!1),t.serverSyncTree_=new ga({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function vy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $o(t){return ey({timestamp:vy(t)})}function ya(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ti(n,c=>ge(c));o=Km(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=Qu(t.serverSyncTree_,r,a,i)}else if(s){const a=ti(n,c=>ge(c));o=Gm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=Rs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ji(t,r)),rt(t.eventQueue_,l,o)}function va(t,e){jo(t,"connected",e),e===!1&&Ey(t)}function xy(t,e){Pe(e,(n,s)=>{jo(t,n,s)})}function jo(t,e,n){const s=new Z("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=Rs(t.infoSyncTree_,s,i);rt(t.eventQueue_,s,r)}function uh(t){return t.nextWriteId_++}function by(t,e,n){const s=Ym(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());Gr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Rs(t.serverSyncTree_,e._path,r);else{const l=bs(t.serverSyncTree_,e);o=Qu(t.serverSyncTree_,e._path,r,l)}return rt(t.eventQueue_,e._path,o),mi(t.serverSyncTree_,e,n,null,!0),r},i=>($i(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Cy(t,e,n,s,i){$i(t,"set",{path:e.toString(),value:n,priority:s});const r=$o(t),o=ge(n,s),l=Do(t.serverSyncTree_,e),a=eh(o,l,r),c=uh(t),u=Yu(t.serverSyncTree_,e,a,c,!0);Vo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const _=f==="ok";_||Ae("set at "+e+" failed: "+f);const C=Qt(t.serverSyncTree_,c,!_);rt(t.eventQueue_,e,C),Sy(t,i,f,g)});const h=_h(t,e);ji(t,h),rt(t.eventQueue_,h,[])}function Ey(t){$i(t,"onDisconnectEvents");const e=$o(t),n=ci();Hr(t.onDisconnect_,Y(),(i,r)=>{const o=sy(i,r,t.serverSyncTree_,e);Ou(n,i,o)});let s=[];Hr(n,Y(),(i,r)=>{s=s.concat(Rs(t.serverSyncTree_,i,r));const o=_h(t,i);ji(t,o)}),t.onDisconnect_=ci(),rt(t.eventQueue_,Y(),s)}function wy(t,e,n){let s;H(e._path)===".info"?s=Gr(t.infoSyncTree_,e,n):s=Gr(t.serverSyncTree_,e,n),ah(t.eventQueue_,e._path,s)}function xa(t,e,n){let s;H(e._path)===".info"?s=mi(t.infoSyncTree_,e,n):s=mi(t.serverSyncTree_,e,n),ah(t.eventQueue_,e._path,s)}function Iy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_y)}function $i(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Sy(t,e,n,s){e&&Dn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function hh(t,e,n){return Do(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Go(t,e=t.transactionQueueTree_){if(e||Gi(t,e),On(e)){const n=dh(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ty(t,Ps(e),n)}else nh(e)&&Vi(e,n=>{Go(t,n)})}function Ty(t,e,n){const s=n.map(c=>c.currentWriteId),i=hh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ie(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{$i(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Qt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Gi(t,Ho(t.transactionQueueTree_,e)),Go(t,t.transactionQueueTree_),rt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Dn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ae("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ji(t,e)}},o)}function ji(t,e){const n=fh(t,e),s=Ps(n),i=dh(t,n);return Ny(t,i,s),s}function Ny(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ie(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Qt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=gy)u=!0,h="maxretry",i=i.concat(Qt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=hh(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Wo("transaction failed: Data returned ",g,a.path);let _=ge(g);typeof g=="object"&&g!=null&&yt(g,".priority")||(_=_.updatePriority(f.getPriority()));const L=a.currentWriteId,U=$o(t),B=eh(_,f,U);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=B,a.currentWriteId=uh(t),o.splice(o.indexOf(L),1),i=i.concat(Yu(t.serverSyncTree_,a.path,B,a.currentWriteId,a.applyLocally)),i=i.concat(Qt(t.serverSyncTree_,L,!0))}else u=!0,h="nodata",i=i.concat(Qt(t.serverSyncTree_,a.currentWriteId,!0))}rt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Gi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Dn(s[l]);Go(t,t.transactionQueueTree_)}function fh(t,e){let n,s=t.transactionQueueTree_;for(n=H(e);n!==null&&On(s)===void 0;)s=Ho(s,n),e=ie(e),n=H(e);return s}function dh(t,e){const n=[];return ph(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ph(t,e,n){const s=On(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Vi(e,i=>{ph(t,i,n)})}function Gi(t,e){const n=On(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,th(e,n.length>0?n:void 0)}Vi(e,s=>{Gi(t,s)})}function _h(t,e){const n=Ps(fh(t,e)),s=Ho(t.transactionQueueTree_,e);return ry(s,i=>{gr(t,i)}),gr(t,s),sh(s,i=>{gr(t,i)}),n}function gr(t,e){const n=On(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?th(e,void 0):n.length=r+1,rt(t.eventQueue_,Ps(e),i);for(let o=0;o<s.length;o++)Dn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ay(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ae(`Invalid query segment '${n}' in query '${t}'`)}return e}const ba=function(t,e){const n=Py(t),s=n.namespace;n.domain==="firebase.com"&&gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||j_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},Py=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Ry(t.substring(u,h)));const f=Ay(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class Oy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:Eu(this._path)}get ref(){return new vt(this._repo,this._path)}get _queryIdentifier(){const e=ra(this._queryParams),n=mo(e);return n==="{}"?"default":n}get _queryObject(){return ra(this._queryParams)}isEqual(e){if(e=An(e),!(e instanceof qo))return!1;const n=this._repo===e._repo,s=bo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Tg(this._path)}}class vt extends qo{constructor(e,n){super(e,n,new Io,!1)}get parent(){const e=Iu(this._path);return e===null?null:new vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=zr(this.ref,e);return new Cs(this._node.getChild(n),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Cs(i,zr(this.ref,s),le)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function un(t,e){return t=An(t),t._checkNotDeleted("ref"),e!==void 0?zr(t._root,e):t._root}function zr(t,e){return t=An(t),H(t._path)===null?hy("child","path",e):oh("child","path",e),new vt(t._repo,de(t._path,e))}function My(t){return lh("remove",t._path),Gs(t,null)}function Gs(t,e){t=An(t),lh("set",t._path),uy("set",e,t._path);const n=new ki;return Cy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ky(t){t=An(t);const e=new gh(()=>{}),n=new qi(e);return by(t._repo,t,n).then(s=>new Cs(s,new vt(t._repo,t._path),t._queryParams.getIndex()))}class qi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Dy("value",this,new Cs(e.snapshotNode,new vt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Oy(this,e,n):null}matches(e){return e instanceof qi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Fy(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{xa(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new gh(n,r||void 0),l=new qi(o);return wy(t._repo,t,l),()=>xa(t._repo,t,l)}function Ly(t,e,n,s){return Fy(t,"value",e,n,s)}Lm(vt);Vm(vt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="FIREBASE_DATABASE_EMULATOR_HOST",Kr={};let Uy=!1;function Hy(t,e,n,s){t.repoInfo_=new pu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Wy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ba(r,i),l=o.repoInfo,a;typeof process<"u"&&Wl&&(a=Wl[By]),a?(r=`http://${a}?ns=${l.namespace}`,o=ba(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new tg(t.name,t.options,e);fy("Invalid Firebase Database URL",o),V(o.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=$y(l,t,c,new eg(t,n));return new jy(u,t)}function Vy(t,e){const n=Kr[e];(!n||n[t.key]!==t)&&gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Iy(t),delete n[t.key]}function $y(t,e,n,s){let i=Kr[e.name];i||(i={},Kr[e.name]=i);let r=i[t.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new my(t,Uy,n,s),i[t.toURLString()]=r,r}class jy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function Gy(t=I_(),e){const n=x_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=cp("database");s&&qy(n,...s)}return n}function qy(t,e,n,s={}){t=An(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ni(s,r.repoInfo_.emulatorOptions))return;gt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new js(js.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:up(s.mockUserToken,t.app.options.projectId);o=new js(l)}Hy(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){B_(w_),ii(new ds("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Wy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),vn(Vl,$l,t),vn(Vl,$l,"esm2017")}pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zy();const bt=Tn;function Tn(t,e){const n=yi();return Tn=function(s,i){return s=s-394,n[s]},Tn(t,e)}(function(t,e){const n=Tn,s=t();for(;;)try{if(parseInt(n(413))/1+-parseInt(n(434))/2*(parseInt(n(408))/3)+parseInt(n(432))/4*(parseInt(n(409))/5)+parseInt(n(421))/6+-parseInt(n(400))/7*(parseInt(n(415))/8)+parseInt(n(405))/9*(parseInt(n(410))/10)+-parseInt(n(402))/11*(parseInt(n(424))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,568605);const jn=function(){let t=!0;return function(e,n){const s=t?function(){const i=Tn;if(n){const r=n[i(433)](e,arguments);return n=null,r}}:function(){};return t=!1,s}}(),Ky=jn(void 0,function(){const t=Tn,e={lHLFZ:function(r,o){return r(o)},gNgiD:function(r,o){return r+o},uHUIz:function(r,o){return r+o},GCTvg:"return (function() ",HsbmC:t(395),vUuwZ:function(r){return r()},fAjot:t(422),uuMpb:t(407),lDOZW:t(404),lnOAQ:t(414),XGSuw:t(394)};let n;try{const r=e.lHLFZ(Function,e[t(411)](e.uHUIz(e.GCTvg,e[t(427)]),");"));n=e[t(430)](r)}catch{n=window}const s=n[t(418)]=n[t(418)]||{},i=[e[t(425)],e[t(416)],t(396),e[t(417)],t(426),e[t(412)],e.XGSuw];for(let r=0;r<i.length;r++){const o=jn[t(428)][t(419)][t(435)](jn),l=i[r],a=s[l]||o;o[t(420)]=jn[t(435)](jn),o[t(429)]=a[t(429)].bind(a),s[l]=o}});Ky();const Yy={apiKey:bt(423),authDomain:bt(406),databaseURL:bt(431),projectId:bt(397),storageBucket:bt(399),messagingSenderId:bt(398),appId:bt(401),measurementId:bt(403)},Qy=Qc(Yy),hn=Gy(Qy);function yi(){const t=["1:720775593565:web:1a263bf6a87ecfea3817b4","187bEMTeW","G-3RRDNZ9ME5","error","1802313TDJMEV","iamwait.firebaseapp.com","warn","255VlALnF","3802670HeofSm","20ckiarK","gNgiD","lnOAQ","49006bVTZrt","table","8JoRIgq","uuMpb","lDOZW","console","prototype","__proto__","2632218NMrBfL","log","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","365988YigfFd","fAjot","exception","HsbmC","constructor","toString","vUuwZ","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","4Czsynz","apply","9518umbfLZ","bind","trace",'{}.constructor("return this")( )',"info","iamwait","720775593565","iamwait.firebasestorage.app","1100078WIvSFu"];return yi=function(){return t},yi()}function vi(){const t=["iAzFD"," на прослушке","__proto__","name","warn","Данные успешно записаны!","length","1689681rnxBJS","wnuuo","oyEkO","Данные ","17190XdaBVt","PFQYQ","info","WgiTc","OLMWW","nickname","getItem","constructor","HgdVM",'{}.constructor("return this")( )',"qDGMS","fbStore","qTOFQ","19240DlYifM","includes","then","3549511DVgmPa","log","bind","HPBZg","catch","igyuY","ZzrqJ"," удалены!","games","split","JHXlm","AjRSE","console","toNee","KQwxz","wShCZ","RuoEc","1489828XXUvfT","Аллигатор222","88776655","table","112233","aGOLB","userId","color: green","pgNBM","dAAgf","KQKbF","ObnrZ","findIndex","return (function() ","val","trace","eUbEy","MWNin","gameId","UTdeC","xXrqZ","readyToPlay/","parse","toString","apply"," : данные не найдены",">>> Данные пользователя:","axGAK","prototype","JxeaI","userName","HmMYz","Ошибка записи данных: ","Ошибка активирования: ","1612398HfqURp","8185320qpwDXm","60BrnYqN","%c ","error","exists","jTPxs"];return vi=function(){return t},vi()}const He=kt;(function(t,e){const n=kt,s=t();for(;;)try{if(-parseInt(n(377))/1+parseInt(n(359))/2+parseInt(n(373))/3+-parseInt(n(410))/4+parseInt(n(390))/5*(parseInt(n(361))/6)+parseInt(n(393))/7+-parseInt(n(360))/8===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,502167);const Gn=function(){let t=!0;return function(e,n){const s=t?function(){const i=kt;if(n){const r=n[i(349)](e,arguments);return n=null,r}}:function(){};return t=!1,s}}(),Xy=Gn(void 0,function(){const t=kt,e={KQKbF:function(o,l){return o+l},wShCZ:t(423),wnuuo:t(386),nAhrB:function(o){return o()},UTdeC:t(394),HgdVM:t(370),JHXlm:t(379),ouQwN:"error",JdfEe:"exception",mwaDU:t(413),MWNin:t(425)},n=function(){const o=t;let l;try{l=Function(e[o(420)](e[o(420)](e[o(408)],e[o(374)]),");"))()}catch{l=window}return l},s=e.nAhrB(n),i=s[t(405)]=s.console||{},r=[e[t(429)],e[t(385)],e[t(403)],e.ouQwN,e.JdfEe,e.mwaDU,e[t(427)]];for(let o=0;o<r[t(372)];o++){const l=Gn[t(384)][t(353)].bind(Gn),a=r[o],c=i[a]||l;l[t(368)]=Gn[t(395)](Gn),l.toString=c[t(433)][t(395)](c),i[a]=l}});Xy();function kt(t,e){const n=vi();return kt=function(s,i){return s=s-349,n[s]},kt(t,e)}const zo=Jd(He(388),{state:()=>({userId:"",userName:"",nickname:"",opponentId:"",opponentName:"",gameId:""}),actions:{async getField(t){const e=He,n={igyuY:function(i,r){return i(r)},uVyIc:function(i,r){return i+r},AjRSE:function(i,r){return i+r},ObnrZ:e(350),axGAK:function(i,r,o){return i(r,o)}},s=n[e(352)](un,hn,t);return ky(s).then(i=>{const r=e;if(i[r(364)]()){const o=i.val();return n[r(398)]($t,n.uVyIc(r(351),o)),o}else n[r(398)]($t,n[r(404)](t,n[r(421)]))})},async setField(t,e){const n=He,s={PFQYQ:function(r,o){return r(o)},JxeaI:n(371),HPBZg:n(357),toNee:function(r,o,l){return r(o,l)}},i=s[n(406)](un,hn,t);return Gs(i,{text:e})[n(392)](()=>{const r=n;s[r(378)]($t,s[r(354)])})[n(397)](r=>{const o=n;console[o(363)](s[o(396)],r)})},async removeField(t){const e=He,n={iAzFD:function(i,r,o){return i(r,o)}};console[e(394)](t);const s=n[e(366)](un,hn,t);My(s).then(()=>{const i=e;$t(i(376)+t+i(400))})},async updateValue(t){const e=He,n={dAAgf:function(i,r){return i(r)},WgiTc:function(i,r,o){return i(r,o)},eUbEy:function(i,r,o){return i(r,o)}},s=n[e(426)](un,hn,t);return new Promise(i=>{const r=e,o={xXrqZ:function(l,a){return n[kt(419)](l,a)}};n[r(380)](Ly,s,l=>{const a=r;o[a(430)]($t,a(376)+t+a(367)),console[a(394)](t+"=",l.val()),i(l[a(424)]())})})},getOpponent(){const t=He,e={oyEkO:t(401)};let n=localStorage[t(383)](e[t(375)]);if(n){let s=this.gameId,i=JSON[t(432)](n);if(!i[s])return null;let r=i[s][t(422)](l=>!l[t(391)](this[t(416)])),o=i[s][r][t(402)]("::");return{name:o[1],id:o[0]}}else return null},async setReadyToPlay(){const t=He,e={EBUEV:function(s,i){return s(i)},niMUB:"Игрок активировался!",BNzAt:t(358),pgNBM:"Аллигатор",DndiS:t(412),HmMYz:function(s,i,r){return s(i,r)},qTOFQ:function(s,i){return s+i}};this.userName=this[t(355)]||e[t(418)],this[t(416)]=this[t(416)]||e.DndiS;const n=e[t(356)](un,hn,e[t(389)](e[t(389)](t(431),this[t(428)])+"/",this[t(416)]));Gs(n,{name:this[t(382)]||this[t(355)]})[t(392)](()=>{e.EBUEV($t,e.niMUB)})[t(397)](s=>{console[t(363)](e.BNzAt,s)})},acceptInvitation(t){const e=He,n={qDGMS:function(o,l){return o(l)},KQwxz:function(o,l){return o+l},wFFkC:function(o,l){return o+l},jTPxs:function(o,l){return o+l},DSyPW:e(411),Ixxfq:e(414),RuoEc:function(o,l){return o>l},aGOLB:function(o,l){return o<=l},OLMWW:function(o,l,a){return o(l,a)},bsopo:function(o,l){return o+l}};this[e(355)]=this[e(355)]||n.DSyPW,this[e(416)]=this.userId||n.Ixxfq;let s=n[e(409)](this[e(416)],t.id)?this[e(416)]:t.id,i=n[e(415)](this[e(416)],t.id)?this.userId:t.id;const r=n[e(381)](un,hn,n[e(365)](n.bsopo(n[e(365)](n[e(365)](this[e(428)],"/"),s),"::"),i));return new Promise(o=>{const l=e,a={ZzrqJ:function(c,u){return c(u)},RHSCT:function(c,u){return n[kt(387)](c,u)}};Gs(r,{start:[n[l(407)](n.wFFkC(t.id,"::"),t[l(369)]),n[l(365)](this[l(416)]+"::",this[l(355)])],ask:this[l(416)]})[l(392)](()=>{a[l(399)]($t,"Предложено играть"),a.RHSCT(o,"start")})})}}}),$t=t=>console[He(394)](He(362)+t,He(417)),Jy={key:0},Zy={key:1},e0=["onClick"],t0={key:2},n0={key:3},s0={__name:"SearchOpponent",setup(t){const e=zo(),n=ft(localStorage.getItem("myNickName")),s=ft(1),i=ft([]);let r=!1,o;function l(){e.nickname=n.value,localStorage.setItem("myNickName",n.value)}function a(){e.setReadyToPlay().then(g=>{g&&(s.value=2)})}function c(){e.updateValue("readyToPlay/"+e.gameId).then(g=>{g&&(s.value=2,delete g[e.userId],Object.keys(g).forEach(_=>i.value.push({name:g[_].name,id:_})))})}function u(){e.updateValue(e.gameId).then(g=>{if(console.log("res",g),!g)return c(),!1;if(o=Object.keys(g).find(_=>_.includes(e.userId)),o){console.log("game = ",g[o]);let _=g[o].start.findIndex(C=>C.includes(e.userId));if(_>-1){let C=g[o].start[_===0?1:0].split("::");e.opponentId=C[0],e.opponentName=C[1],console.log("opponent",C),C[0]?s.value=4:s.value=3}}})}function h(g){console.log("game = ",o),g||(e.removeField(e.gameId+"/"+o),s.value=2)}function f(g){if(r)return!1;r=setTimeout(()=>r=!1,3e3),e.acceptInvitation(g).then(_=>{_&&(s.value=3)})}return uo(()=>{u()}),(g,_)=>(Le(),et(We,null,[_[25]||(_[25]=O("hr",null,null,-1)),_[26]||(_[26]=O("i",null,"SearchOpponent",-1)),_[27]||(_[27]=O("hr",null,null,-1)),s.value===1?(Le(),et("div",Jy,[O("p",null," Привет, "+at(Kt(e).nickname||Kt(e).userName)+" ! ",1),O("p",null,[ff(O("input",{"onUpdate:modelValue":_[0]||(_[0]=C=>n.value=C),style:{"font-size":"larger",padding:"4px","text-align":"center"},onInput:_[1]||(_[1]=C=>l(n.value)),placeholder:"Сменить nickName"},null,544),[[Hd,n.value]])]),_[7]||(_[7]=O("div",{class:"red-notice"},"* тут можно поменять Никнейм",-1)),O("button",{class:"red-bt",onClick:_[2]||(_[2]=C=>a())}," Искать соперника! "),_[8]||(_[8]=O("br",null,null,-1)),_[9]||(_[9]=O("br",null,null,-1))])):pn("",!0),s.value===2?(Le(),et("div",Zy,[_[10]||(_[10]=O("h3",null,"Список желающих играть:",-1)),(Le(!0),et(We,null,Rf(i.value,C=>(Le(),et("button",{class:"green-bt",key:C.id,onClick:L=>f(C)},at(C.name),9,e0))),128)),wt(" "+at(i.value.length?"":" ... тут пока пусто, ждем ...")+" ",1),_[11]||(_[11]=O("br",null,null,-1)),_[12]||(_[12]=O("br",null,null,-1)),O("button",{onClick:_[3]||(_[3]=C=>a()),class:"red-bt"}," Искать нового соперника! ")])):pn("",!0),s.value===3?(Le(),et("div",t0,[_[13]||(_[13]=wt(" Вы пригласил играть ")),O("b",null,at(Kt(e).opponentName),1),_[14]||(_[14]=wt(". ")),_[15]||(_[15]=O("br",null,null,-1)),_[16]||(_[16]=wt("Ждем пока примет приглашение ")),_[17]||(_[17]=O("br",null,null,-1)),_[18]||(_[18]=O("br",null,null,-1)),O("button",{onClick:_[4]||(_[4]=C=>a()),class:"red-bt"}," Отказаться от "+at(Kt(e).opponentName)+". Искать нового соперника ",1)])):pn("",!0),s.value===4?(Le(),et("div",n0,[_[20]||(_[20]=wt(" Ваше приглашение принял ")),O("b",null,at(Kt(e).opponentName),1),_[21]||(_[21]=O("br",null,null,-1)),_[22]||(_[22]=O("br",null,null,-1)),O("button",{class:"green-bt",onClick:_[5]||(_[5]=C=>h(!1))},"Отказаться"),O("button",{class:"green-bt",onClick:_[6]||(_[6]=C=>h(!0))},"Согласиться"),_[23]||(_[23]=O("br",null,null,-1)),_[24]||(_[24]=O("br",null,null,-1)),O("small",null,[_[19]||(_[19]=wt("Ваш никнейм : ")),O("b",null,at(n.value),1)])])):pn("",!0),_[28]||(_[28]=O("br",null,null,-1)),_[29]||(_[29]=O("br",null,null,-1))],64))}},i0=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},r0={key:0},o0={key:1},l0={style:{"font-size":"larger"}},a0={__name:"RockPaperSScissors",setup(t){const e=zo(),n=ft(0);ft("");const s=ft(""),i=ft("");e.gameId="g1";let r=e.getOpponent();return console.log("opponent",r),r?(setTimeout(()=>{n.value=2},100),i.value=r.name,s.value=r.id):setTimeout(()=>{n.value=1},1e3),(o,l)=>(Le(),et("div",{class:"game",style:Si({background:n.value===2?"orange":n.value===1?"#3c3c3c":""})},[l[6]||(l[6]=O("h1",null,"♕",-1)),l[7]||(l[7]=O("h2",null,null,-1)),n.value===1?(Le(),et("div",r0,[st(s0)])):pn("",!0),n.value===2?(Le(),et("div",o0,[O("p",null,[l[0]||(l[0]=wt(" Против вас играет: ")),l[1]||(l[1]=O("br",null,null,-1)),O("b",l0,at(i.value||s.value),1)]),l[2]||(l[2]=O("p",null," Выбери: ",-1)),l[3]||(l[3]=O("p",null,[O("button",null,"камень"),O("button",null,"ножницы"),O("button",null,"бумага")],-1)),l[4]||(l[4]=O("br",null,null,-1)),l[5]||(l[5]=O("p",null,[O("button",null," ИГРАТЬ")],-1))])):pn("",!0)],4))}},c0=i0(a0,[["__scopeId","data-v-aaf1e0aa"]]),u0={__name:"App",setup(t){const e=zo();let n=Xh(c0);return uo(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.userId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||"",e.userName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"")}),(s,i)=>(Le(),Tc(Tf(Kt(n))))}},mr=Nn;(function(t,e){const n=Nn,s=t();for(;;)try{if(-parseInt(n(304))/1+parseInt(n(330))/2+-parseInt(n(329))/3*(parseInt(n(321))/4)+-parseInt(n(307))/5*(parseInt(n(306))/6)+-parseInt(n(327))/7+parseInt(n(325))/8+-parseInt(n(310))/9*(-parseInt(n(328))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,780708);const qn=function(){let t=!0;return function(e,n){const s=t?function(){const i=Nn;if(n){const r=n[i(314)](e,arguments);return n=null,r}}:function(){};return t=!1,s}}(),h0=qn(void 0,function(){const t=Nn,e={PkyGq:function(r,o){return r(o)},UUhiB:function(r,o){return r+o},JSUXv:t(322),FUEog:'{}.constructor("return this")( )',LsPPE:function(r){return r()},Zlgfj:t(309),pNCbG:t(311),HlyZn:t(303),CeZqT:t(316),RaNvp:t(323),ovoYw:t(333)};let n;try{const r=e.PkyGq(Function,e[t(320)](e[t(305)]+e.FUEog,");"));n=e.LsPPE(r)}catch{n=window}const s=n[t(319)]=n.console||{},i=[t(318),e.Zlgfj,e[t(334)],e[t(317)],e.CeZqT,e[t(312)],e.ovoYw];for(let r=0;r<i[t(332)];r++){const o=qn.constructor[t(324)][t(315)](qn),l=i[r],a=s[l]||o;o[t(331)]=qn[t(315)](qn),o[t(326)]=a.toString[t(315)](a),s[l]=o}});h0();function xi(){const t=["mount","error","40004Vqolno","JSUXv","3246rZdfyq","5995crFEvK","#app","warn","901341sQkGep","info","RaNvp","use","apply","bind","exception","HlyZn","log","console","UUhiB","568ucuJDP","return (function() ","table","prototype","2889416VZqzxa","toString","253939BRomrT","190kCrdKF","31653EJTGiU","1479764dQBuDC","__proto__","length","trace","pNCbG"];return xi=function(){return t},xi()}function Nn(t,e){const n=xi();return Nn=function(s,i){return s=s-302,n[s]},Nn(t,e)}const f0=qd(),Ca=$d(u0);Ca[mr(313)](f0),Ca[mr(302)](mr(308));
