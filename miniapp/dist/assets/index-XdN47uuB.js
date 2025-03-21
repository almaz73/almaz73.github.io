function Bs(t,e){const n=Hs();return Bs=function(s,i){return s=s-203,n[s]},Bs(t,e)}(function(t,e){const n=Bs,s=t();for(;;)try{if(-parseInt(n(235))/1+-parseInt(n(228))/2*(parseInt(n(222))/3)+-parseInt(n(231))/4*(-parseInt(n(214))/5)+-parseInt(n(204))/6+-parseInt(n(203))/7*(-parseInt(n(213))/8)+-parseInt(n(224))/9*(-parseInt(n(226))/10)+parseInt(n(210))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Hs,232204),function(){const e=Bs,n={vJjaj:function(o,l){return o!==l},FGQcJ:"childList",AZVjP:function(o,l){return o===l},FtJRg:e(225),qIvfp:e(221),Bfhzw:function(o,l){return o(l)},AaPlq:e(232),IKUcU:e(227),aulKb:function(o,l){return o===l},NNjKF:e(220),OnqrF:"omit",WGMgx:e(215),NSsWG:e(219),FzWnE:e(216)},s=document.createElement(n[e(212)])[e(205)];if(s&&s.supports&&s.supports(n[e(206)]))return;for(const o of document[e(218)](n.FzWnE))r(o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(234)](c[l(223)],n.FGQcJ))for(const a of c.addedNodes)n.AZVjP(a.tagName,n.FtJRg)&&n.AZVjP(a[l(233)],n.qIvfp)&&n[l(209)](r,a)}).observe(document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(217)]&&(c[l(217)]=o[l(217)]),o[l(230)]&&(c[l(230)]=o[l(230)]),n.AZVjP(o[l(236)],n.AaPlq)?c.credentials=n.IKUcU:n[l(229)](o[l(236)],n[l(207)])?c[l(208)]=n[l(211)]:c[l(208)]=n[l(237)],c}function r(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}}();function Hs(){const t=["querySelectorAll","link","anonymous","modulepreload","6kJkmIO","type","9TPHwQE","LINK","403790lntMMA","include","428262mwcTcc","aulKb","referrerPolicy","464TmQXHq","use-credentials","rel","vJjaj","10378giyQsU","crossOrigin","WGMgx","70ADCNme","256212OCuJWM","relList","qIvfp","NNjKF","credentials","Bfhzw","790097CSSdSV","OnqrF","NSsWG","270416CtHhbf","11350DRFCQM","same-origin",'link[rel="modulepreload"]',"integrity"];return Hs=function(){return t},Hs()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},fn=[],ot=()=>{},vh=()=>!1,yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ch=Object.prototype.hasOwnProperty,J=(t,e)=>Ch.call(t,e),B=Array.isArray,dn=t=>vi(t)==="[object Map]",Cc=t=>vi(t)==="[object Set]",U=t=>typeof t=="function",de=t=>typeof t=="string",Ft=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",bc=t=>(ce(t)||U(t))&&U(t.then)&&U(t.catch),Ec=Object.prototype.toString,vi=t=>Ec.call(t),bh=t=>vi(t).slice(8,-1),Ic=t=>vi(t)==="[object Object]",Yr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ci=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Eh=/-(\w)/g,$e=Ci(t=>t.replace(Eh,(e,n)=>n?n.toUpperCase():"")),Ih=/\B([A-Z])/g,sn=Ci(t=>t.replace(Ih,"-$1").toLowerCase()),bi=Ci(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gi=Ci(t=>t?`on${bi(t)}`:""),Tt=(t,e)=>!Object.is(t,e),Ms=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},_r=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zo;const Ei=()=>zo||(zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?Nh(s):Qr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(de(t)||ce(t))return t}const wh=/;(?![^(]*\))/g,Sh=/:([^]+)/,Th=/\/\*[^]*?\*\//g;function Nh(t){const e={};return t.replace(Th,"").split(wh).forEach(n=>{if(n){const s=n.split(Sh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(de(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ah=Kr(Rh);function Sc(t){return!!t||t===""}const Tc=t=>!!(t&&t.__v_isRef===!0),Ge=t=>de(t)?t:t==null?"":B(t)||ce(t)&&(t.toString===Ec||!U(t.toString))?Tc(t)?Ge(t.value):JSON.stringify(t,Nc,2):String(t),Nc=(t,e)=>Tc(e)?Nc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ki(s,r)+" =>"]=i,n),{})}:Cc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ki(n))}:Ft(e)?Ki(e):ce(e)&&!B(e)&&!Ic(e)?String(e):e,Ki=(t,e="")=>{var n;return Ft(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Rc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ac(t){return new Rc(t)}function Pc(){return Se}function Ph(t,e=!1){Se&&Se.cleanups.push(t)}let se;const qi=new WeakSet;class Oc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qi.has(this)&&(qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yo(this),Mc(this);const e=se,n=Ye;se=this,Ye=!0;try{return this.fn()}finally{Fc(this),se=e,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eo(e);this.deps=this.depsTail=void 0,Yo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gr(this)&&this.run()}get dirty(){return gr(this)}}let Dc=0,Vn,jn;function kc(t,e=!1){if(t.flags|=8,e){t.next=jn,jn=t;return}t.next=Vn,Vn=t}function Xr(){Dc++}function Zr(){if(--Dc>0)return;if(jn){let e=jn;for(jn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vn;){let e=Vn;for(Vn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Mc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),eo(s),Oh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function gr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===es))return;t.globalVersion=es;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gr(t)){t.flags&=-3;return}const n=se,s=Ye;se=t,Ye=!0;try{Mc(t);const i=t.fn(t._value);(e.version===0||Tt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{se=n,Ye=s,Fc(t),t.flags&=-3}}function eo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)eo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Oh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ye=!0;const Wc=[];function Lt(){Wc.push(Ye),Ye=!1}function Wt(){const t=Wc.pop();Ye=t===void 0?!0:t}function Yo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let es=0;class Dh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class to{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!se||!Ye||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new Dh(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Bc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=s)}return n}trigger(e){this.version++,es++,this.notify(e)}notify(e){Xr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zr()}}}function Bc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Bc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Us=new WeakMap,Qt=Symbol(""),mr=Symbol(""),ts=Symbol("");function Ce(t,e,n){if(Ye&&se){let s=Us.get(t);s||Us.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new to),i.map=s,i.key=n),i.track()}}function dt(t,e,n,s,i,r){const o=Us.get(t);if(!o){es++;return}const l=c=>{c&&c.trigger()};if(Xr(),e==="clear")o.forEach(l);else{const c=B(t),a=c&&Yr(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,g)=>{(g==="length"||g===ts||!Ft(g)&&g>=u)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ts)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Qt)),dn(t)&&l(o.get(mr)));break;case"delete":c||(l(o.get(Qt)),dn(t)&&l(o.get(mr)));break;case"set":dn(t)&&l(o.get(Qt));break}}Zr()}function kh(t,e){const n=Us.get(t);return n&&n.get(e)}function on(t){const e=Y(t);return e===t?e:(Ce(e,"iterate",ts),je(t)?e:e.map(be))}function Ii(t){return Ce(t=Y(t),"iterate",ts),t}const Mh={__proto__:null,[Symbol.iterator](){return zi(this,Symbol.iterator,be)},concat(...t){return on(this).concat(...t.map(e=>B(e)?on(e):e))},entries(){return zi(this,"entries",t=>(t[1]=be(t[1]),t))},every(t,e){return ht(this,"every",t,e,void 0,arguments)},filter(t,e){return ht(this,"filter",t,e,n=>n.map(be),arguments)},find(t,e){return ht(this,"find",t,e,be,arguments)},findIndex(t,e){return ht(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ht(this,"findLast",t,e,be,arguments)},findLastIndex(t,e){return ht(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ht(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yi(this,"includes",t)},indexOf(...t){return Yi(this,"indexOf",t)},join(t){return on(this).join(t)},lastIndexOf(...t){return Yi(this,"lastIndexOf",t)},map(t,e){return ht(this,"map",t,e,void 0,arguments)},pop(){return Dn(this,"pop")},push(...t){return Dn(this,"push",t)},reduce(t,...e){return Qo(this,"reduce",t,e)},reduceRight(t,...e){return Qo(this,"reduceRight",t,e)},shift(){return Dn(this,"shift")},some(t,e){return ht(this,"some",t,e,void 0,arguments)},splice(...t){return Dn(this,"splice",t)},toReversed(){return on(this).toReversed()},toSorted(t){return on(this).toSorted(t)},toSpliced(...t){return on(this).toSpliced(...t)},unshift(...t){return Dn(this,"unshift",t)},values(){return zi(this,"values",be)}};function zi(t,e,n){const s=Ii(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Fh=Array.prototype;function ht(t,e,n,s,i,r){const o=Ii(t),l=o!==t&&!je(t),c=o[e];if(c!==Fh[e]){const f=c.apply(t,r);return l?be(f):f}let a=n;o!==t&&(l?a=function(f,g){return n.call(this,be(f),g,t)}:n.length>2&&(a=function(f,g){return n.call(this,f,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function Qo(t,e,n,s){const i=Ii(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,be(l),c,t)}),i[e](r,...s)}function Yi(t,e,n){const s=Y(t);Ce(s,"iterate",ts);const i=s[e](...n);return(i===-1||i===!1)&&io(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function Dn(t,e,n=[]){Lt(),Xr();const s=Y(t)[e].apply(t,n);return Zr(),Wt(),s}const Lh=Kr("__proto__,__v_isRef,__isVue"),Hc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ft));function Wh(t){Ft(t)||(t=String(t));const e=Y(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Uc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?zh:Gc:r?$c:jc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!i){let c;if(o&&(c=Mh[n]))return c;if(n==="hasOwnProperty")return Wh}const l=Reflect.get(e,n,fe(e)?e:s);return(Ft(n)?Hc.has(n):Lh(n))||(i||Ce(e,"get",n),r)?l:fe(l)?o&&Yr(n)?l:l.value:ce(l)?i?Kc(l):wi(l):l}}class Vc extends Uc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Xt(r);if(!je(s)&&!Xt(s)&&(r=Y(r),s=Y(s)),!B(e)&&fe(r)&&!fe(s))return c?!1:(r.value=s,!0)}const o=B(e)&&Yr(n)?Number(n)<e.length:J(e,n),l=Reflect.set(e,n,s,fe(e)?e:i);return e===Y(i)&&(o?Tt(s,r)&&dt(e,"set",n,s):dt(e,"add",n,s)),l}deleteProperty(e,n){const s=J(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&dt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ft(n)||!Hc.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",B(e)?"length":Qt),Reflect.ownKeys(e)}}class Bh extends Uc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hh=new Vc,Uh=new Bh,Vh=new Vc(!0);const xr=t=>t,Ns=t=>Reflect.getPrototypeOf(t);function jh(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?xr:e?yr:be;return!e&&Ce(r,"iterate",c?mr:Qt),{next(){const{value:f,done:g}=a.next();return g?{value:f,done:g}:{value:l?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function Rs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $h(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(Tt(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:c}=Ns(o),a=e?xr:t?yr:be;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(Y(i),"iterate",Qt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(Tt(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Y(l),a=e?xr:t?yr:be;return!t&&Ce(c,"iterate",Qt),l.forEach((u,f)=>i.call(r,a(u),a(f),o))}};return Ie(n,t?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(i){!e&&!je(i)&&!Xt(i)&&(i=Y(i));const r=Y(this);return Ns(r).has.call(r,i)||(r.add(i),dt(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!Xt(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=Ns(o);let a=l.call(o,i);a||(i=Y(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?Tt(r,u)&&dt(o,"set",i,r):dt(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Ns(r);let c=o.call(r,i);c||(i=Y(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&dt(r,"delete",i,void 0),a},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&dt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=jh(i,t,e)}),n}function no(t,e){const n=$h(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const Gh={get:no(!1,!1)},Kh={get:no(!1,!0)},qh={get:no(!0,!1)};const jc=new WeakMap,$c=new WeakMap,Gc=new WeakMap,zh=new WeakMap;function Yh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qh(t){return t.__v_skip||!Object.isExtensible(t)?0:Yh(bh(t))}function wi(t){return Xt(t)?t:so(t,!1,Hh,Gh,jc)}function Jh(t){return so(t,!1,Vh,Kh,$c)}function Kc(t){return so(t,!0,Uh,qh,Gc)}function so(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Qh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Nt(t){return Xt(t)?Nt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function io(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function ro(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&wc(t,"__v_skip",!0),t}const be=t=>ce(t)?wi(t):t,yr=t=>ce(t)?Kc(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function qt(t){return qc(t,!1)}function Xh(t){return qc(t,!0)}function qc(t,e){return fe(t)?t:new Zh(t,e)}class Zh{constructor(e,n){this.dep=new to,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||je(e)||Xt(e);e=s?e:Y(e),Tt(e,n)&&(this._rawValue=e,this._value=s?e:be(e),this.dep.trigger())}}function Ue(t){return fe(t)?t.value:t}const ef={get:(t,e,n)=>e==="__v_raw"?t:Ue(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function zc(t){return Nt(t)?t:new Proxy(t,ef)}function tf(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=sf(t,n);return e}class nf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kh(Y(this._object),this._key)}}function sf(t,e,n){const s=t[e];return fe(s)?s:new nf(t,e,n)}class rf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new to(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return kc(this,!0),!0}get value(){const e=this.dep.track();return Lc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function of(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new rf(s,i,n)}const As={},Vs=new WeakMap;let $t;function lf(t,e=!1,n=$t){if(n){let s=Vs.get(n);s||Vs.set(n,s=[]),s.push(t)}}function cf(t,e,n=Z){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=x=>i?x:je(x)||i===!1||i===0?pt(x,1):pt(x);let u,f,g,y,b=!1,O=!1;if(fe(t)?(f=()=>t.value,b=je(t)):Nt(t)?(f=()=>a(t),b=!0):B(t)?(O=!0,b=t.some(x=>Nt(x)||je(x)),f=()=>t.map(x=>{if(fe(x))return x.value;if(Nt(x))return a(x);if(U(x))return c?c(x,2):x()})):U(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){Lt();try{g()}finally{Wt()}}const x=$t;$t=u;try{return c?c(t,3,[y]):t(y)}finally{$t=x}}:f=ot,e&&i){const x=f,S=i===!0?1/0:i;f=()=>pt(x(),S)}const j=Pc(),d=()=>{u.stop(),j&&j.active&&zr(j.effects,u)};if(r&&e){const x=e;e=(...S)=>{x(...S),d()}}let h=O?new Array(t.length).fill(As):As;const _=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const S=u.run();if(i||b||(O?S.some((ae,V)=>Tt(ae,h[V])):Tt(S,h))){g&&g();const ae=$t;$t=u;try{const V=[S,h===As?void 0:O&&h[0]===As?[]:h,y];c?c(e,3,V):e(...V),h=S}finally{$t=ae}}}else u.run()};return l&&l(_),u=new Oc(f),u.scheduler=o?()=>o(_,!1):_,y=x=>lf(x,!1,u),g=u.onStop=()=>{const x=Vs.get(u);if(x){if(c)c(x,4);else for(const S of x)S();Vs.delete(u)}},e?s?_(!0):h=u.run():o?o(_.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function pt(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))pt(t.value,e,n);else if(B(t))for(let s=0;s<t.length;s++)pt(t[s],e,n);else if(Cc(t)||dn(t))t.forEach(s=>{pt(s,e,n)});else if(Ic(t)){for(const s in t)pt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&pt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(t,e,n,s){try{return s?t(...s):t()}catch(i){Si(i,e,n)}}function ct(t,e,n,s){if(U(t)){const i=gs(t,e,n,s);return i&&bc(i)&&i.catch(r=>{Si(r,e,n)}),i}if(B(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ct(t[r],e,n,s));return i}}function Si(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,a)===!1)return}l=l.parent}if(r){Lt(),gs(r,null,10,[t,c,a]),Wt();return}}af(t,n,i,s,o)}function af(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Te=[];let st=-1;const pn=[];let It=null,an=0;const Yc=Promise.resolve();let js=null;function Qc(t){const e=js||Yc;return t?e.then(this?t.bind(this):t):e}function uf(t){let e=st+1,n=Te.length;for(;e<n;){const s=e+n>>>1,i=Te[s],r=ns(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function oo(t){if(!(t.flags&1)){const e=ns(t),n=Te[Te.length-1];!n||!(t.flags&2)&&e>=ns(n)?Te.push(t):Te.splice(uf(e),0,t),t.flags|=1,Jc()}}function Jc(){js||(js=Yc.then(Zc))}function hf(t){B(t)?pn.push(...t):It&&t.id===-1?It.splice(an+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),Jc()}function Jo(t,e,n=st+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Xc(t){if(pn.length){const e=[...new Set(pn)].sort((n,s)=>ns(n)-ns(s));if(pn.length=0,It){It.push(...e);return}for(It=e,an=0;an<It.length;an++){const n=It[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,an=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zc(t){try{for(st=0;st<Te.length;st++){const e=Te[st];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;st<Te.length;st++){const e=Te[st];e&&(e.flags&=-2)}st=-1,Te.length=0,Xc(),js=null,(Te.length||pn.length)&&Zc()}}let Oe=null,ea=null;function $s(t){const e=Oe;return Oe=t,ea=t&&t.type.__scopeId||null,e}function ff(t,e=Oe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&cl(-1);const r=$s(e);let o;try{o=t(...i)}finally{$s(r),s._d&&cl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function df(t,e){if(Oe===null)return t;const n=Ai(Oe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Z]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&pt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ut(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Lt(),ct(c,n,8,[t.el,l,t,e]),Wt())}}const pf=Symbol("_vte"),_f=t=>t.__isTeleport;function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function gf(t,e){return U(t)?Ie({name:t.name},e,{setup:t}):t}function ta(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gs(t,e,n,s,i=!1){if(B(t)){t.forEach((b,O)=>Gs(b,e&&(B(e)?e[O]:e),n,s,i));return}if($n(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ai(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===Z?l.refs={}:l.refs,f=l.setupState,g=Y(f),y=f===Z?()=>!1:b=>J(g,b);if(a!=null&&a!==c&&(de(a)?(u[a]=null,y(a)&&(f[a]=null)):fe(a)&&(a.value=null)),U(c))gs(c,l,12,[o,u]);else{const b=de(c),O=fe(c);if(b||O){const j=()=>{if(t.f){const d=b?y(c)?f[c]:u[c]:c.value;i?B(d)&&zr(d,r):B(d)?d.includes(r)||d.push(r):b?(u[c]=[r],y(c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else b?(u[c]=o,y(c)&&(f[c]=o)):O&&(c.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,We(j,n)):j()}}}Ei().requestIdleCallback;Ei().cancelIdleCallback;const $n=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function mf(t,e){sa(t,"a",e)}function xf(t,e){sa(t,"da",e)}function sa(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ti(e,s,n),n){let i=n.parent;for(;i&&i.parent;)na(i.parent.vnode)&&yf(s,e,n,i),i=i.parent}}function yf(t,e,n,s){const i=Ti(e,t,s,!0);ra(()=>{zr(s[e],i)},n)}function Ti(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Lt();const l=ms(n),c=ct(e,n,t,o);return l(),Wt(),c});return s?i.unshift(r):i.push(r),r}}const yt=t=>(e,n=ye)=>{(!is||t==="sp")&&Ti(t,(...s)=>e(...s),n)},vf=yt("bm"),ia=yt("m"),Cf=yt("bu"),bf=yt("u"),Ef=yt("bum"),ra=yt("um"),If=yt("sp"),wf=yt("rtg"),Sf=yt("rtc");function Tf(t,e=ye){Ti("ec",t,e)}const Nf="components",oa=Symbol.for("v-ndc");function Rf(t){return de(t)?Af(Nf,t,!1)||t:t||oa}function Af(t,e,n=!0,s=!1){const i=Oe||ye;if(i){const r=i.type;{const l=xd(r,!1);if(l&&(l===e||l===$e(e)||l===bi($e(e))))return r}const o=Xo(i[t]||r[t],e)||Xo(i.appContext[t],e);return!o&&s?r:o}}function Xo(t,e){return t&&(t[e]||t[$e(e)]||t[bi($e(e))])}function Zo(t,e,n,s){let i;const r=n&&n[s],o=B(t);if(o||de(t)){const l=o&&Nt(t);let c=!1;l&&(c=!je(t),t=Ii(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?be(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const vr=t=>t?Ra(t)?Ai(t):vr(t.parent):null,Gn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ca(t),$forceUpdate:t=>t.f||(t.f=()=>{oo(t.update)}),$nextTick:t=>t.n||(t.n=Qc.bind(t.proxy)),$watch:t=>Zf.bind(t)}),Qi=(t,e)=>t!==Z&&!t.__isScriptSetup&&J(t,e),Pf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Qi(s,e))return o[e]=1,s[e];if(i!==Z&&J(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&J(a,e))return o[e]=3,r[e];if(n!==Z&&J(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const u=Gn[e];let f,g;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Z&&J(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,J(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Qi(i,e)?(i[e]=n,!0):s!==Z&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Z&&J(t,o)||Qi(e,o)||(l=r[0])&&J(l,o)||J(s,o)||J(Gn,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function el(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cr=!0;function Of(t){const e=ca(t),n=t.proxy,s=t.ctx;Cr=!1,e.beforeCreate&&tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:f,mounted:g,beforeUpdate:y,updated:b,activated:O,deactivated:j,beforeDestroy:d,beforeUnmount:h,destroyed:_,unmounted:x,render:S,renderTracked:ae,renderTriggered:V,errorCaptured:D,serverPrefetch:H,expose:le,inheritAttrs:Re,components:He,directives:ut,filters:Rn}=e;if(a&&Df(a,s,null),o)for(const q in o){const te=o[q];U(te)&&(s[q]=te.bind(n))}if(i){const q=i.call(n,n);ce(q)&&(t.data=wi(q))}if(Cr=!0,r)for(const q in r){const te=r[q],Bt=U(te)?te.bind(n,n):U(te.get)?te.get.bind(n,n):ot,Ss=!U(te)&&U(te.set)?te.set.bind(n):ot,Ht=Pa({get:Bt,set:Ss});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Je=>Ht.value=Je})}if(l)for(const q in l)la(l[q],s,n,q);if(c){const q=U(c)?c.call(n):c;Reflect.ownKeys(q).forEach(te=>{Bf(te,q[te])})}u&&tl(u,t,"c");function he(q,te){B(te)?te.forEach(Bt=>q(Bt.bind(n))):te&&q(te.bind(n))}if(he(vf,f),he(ia,g),he(Cf,y),he(bf,b),he(mf,O),he(xf,j),he(Tf,D),he(Sf,ae),he(wf,V),he(Ef,h),he(ra,x),he(If,H),B(le))if(le.length){const q=t.exposed||(t.exposed={});le.forEach(te=>{Object.defineProperty(q,te,{get:()=>n[te],set:Bt=>n[te]=Bt})})}else t.exposed||(t.exposed={});S&&t.render===ot&&(t.render=S),Re!=null&&(t.inheritAttrs=Re),He&&(t.components=He),ut&&(t.directives=ut),H&&ta(t)}function Df(t,e,n=ot){B(t)&&(t=br(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=Kn(i.from||s,i.default,!0):r=Kn(i.from||s):r=Kn(i),fe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function tl(t,e,n){ct(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function la(t,e,n,s){let i=s.includes(".")?ba(n,s):()=>n[s];if(de(t)){const r=e[t];U(r)&&_n(i,r)}else if(U(t))_n(i,t.bind(n));else if(ce(t))if(B(t))t.forEach(r=>la(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&_n(i,r,t)}}function ca(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Ks(c,a,o,!0)),Ks(c,e,o)),ce(e)&&r.set(e,c),c}function Ks(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ks(t,r,n,!0),i&&i.forEach(o=>Ks(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=kf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const kf={data:nl,props:sl,emits:sl,methods:Hn,computed:Hn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Hn,directives:Hn,watch:Ff,provide:nl,inject:Mf};function nl(t,e){return e?t?function(){return Ie(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Mf(t,e){return Hn(br(t),br(e))}function br(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?Ie(Object.create(null),t,e):e}function sl(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Ie(Object.create(null),el(t),el(e??{})):e}function Ff(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function aa(){return{app:null,config:{isNativeTag:vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lf=0;function Wf(t,e){return function(s,i=null){U(s)||(s=Ie({},s)),i!=null&&!ce(i)&&(i=null);const r=aa(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Lf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:vd,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(a,...f)):U(u)&&(o.add(u),u(a,...f))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,f){return f?(r.components[u]=f,a):r.components[u]},directive(u,f){return f?(r.directives[u]=f,a):r.directives[u]},mount(u,f,g){if(!c){const y=a._ceVNode||lt(s,i);return y.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(y,u,g),c=!0,a._container=u,u.__vue_app__=a,Ai(y.component)}},onUnmount(u){l.push(u)},unmount(){c&&(ct(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,f){return r.provides[u]=f,a},runWithContext(u){const f=Jt;Jt=a;try{return u()}finally{Jt=f}}};return a}}let Jt=null;function Bf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Kn(t,e,n=!1){const s=ye||Oe;if(s||Jt){const i=Jt?Jt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function Hf(){return!!(ye||Oe||Jt)}const ua={},ha=()=>Object.create(ua),fa=t=>Object.getPrototypeOf(t)===ua;function Uf(t,e,n,s=!1){const i={},r=ha();t.propsDefaults=Object.create(null),da(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Vf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(Ni(t.emitsOptions,g))continue;const y=e[g];if(c)if(J(r,g))y!==r[g]&&(r[g]=y,a=!0);else{const b=$e(g);i[b]=Er(c,l,b,y,t,!1)}else y!==r[g]&&(r[g]=y,a=!0)}}}else{da(t,e,i,r)&&(a=!0);let u;for(const f in l)(!e||!J(e,f)&&((u=sn(f))===f||!J(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Er(c,l,f,void 0,t,!0)):delete i[f]);if(r!==l)for(const f in r)(!e||!J(e,f))&&(delete r[f],a=!0)}a&&dt(t.attrs,"set","")}function da(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Un(c))continue;const a=e[c];let u;i&&J(i,u=$e(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ni(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||Z;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Er(i,c,f,a[f],t,!J(a,f))}}return o}function Er(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=ms(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===sn(n))&&(s=!0))}return s}const jf=new WeakMap;function pa(t,e,n=!1){const s=n?jf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!U(t)){const u=f=>{c=!0;const[g,y]=pa(f,e,!0);Ie(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ce(t)&&s.set(t,fn),fn;if(B(r))for(let u=0;u<r.length;u++){const f=$e(r[u]);il(f)&&(o[f]=Z)}else if(r)for(const u in r){const f=$e(u);if(il(f)){const g=r[u],y=o[f]=B(g)||U(g)?{type:g}:Ie({},g),b=y.type;let O=!1,j=!0;if(B(b))for(let d=0;d<b.length;++d){const h=b[d],_=U(h)&&h.name;if(_==="Boolean"){O=!0;break}else _==="String"&&(j=!1)}else O=U(b)&&b.name==="Boolean";y[0]=O,y[1]=j,(O||J(y,"default"))&&l.push(f)}}const a=[o,l];return ce(t)&&s.set(t,a),a}function il(t){return t[0]!=="$"&&!Un(t)}const _a=t=>t[0]==="_"||t==="$stable",co=t=>B(t)?t.map(it):[it(t)],$f=(t,e,n)=>{if(e._n)return e;const s=ff((...i)=>co(e(...i)),n);return s._c=!1,s},ga=(t,e,n)=>{const s=t._ctx;for(const i in t){if(_a(i))continue;const r=t[i];if(U(r))e[i]=$f(i,r,s);else if(r!=null){const o=co(r);e[i]=()=>o}}},ma=(t,e)=>{const n=co(e);t.slots.default=()=>n},xa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Gf=(t,e,n)=>{const s=t.slots=ha();if(t.vnode.shapeFlag&32){const i=e._;i?(xa(s,e,n),n&&wc(s,"_",i,!0)):ga(e,s)}else e&&ma(t,e)},Kf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Z;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:xa(i,e,n):(r=!e.$stable,ga(e,i)),o=e}else e&&(ma(t,e),o={default:1});if(r)for(const l in i)!_a(l)&&o[l]==null&&delete i[l]},We=od;function qf(t){return zf(t)}function zf(t,e){const n=Ei();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:f,nextSibling:g,setScopeId:y=ot,insertStaticContent:b}=t,O=(p,m,v,I=null,C=null,E=null,A=void 0,R=null,N=!!m.dynamicChildren)=>{if(p===m)return;p&&!kn(p,m)&&(I=Ts(p),Je(p,C,E,!0),p=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:w,ref:M,shapeFlag:P}=m;switch(w){case Ri:j(p,m,v,I);break;case Zt:d(p,m,v,I);break;case Xi:p==null&&h(m,v,I,A);break;case Ve:He(p,m,v,I,C,E,A,R,N);break;default:P&1?S(p,m,v,I,C,E,A,R,N):P&6?ut(p,m,v,I,C,E,A,R,N):(P&64||P&128)&&w.process(p,m,v,I,C,E,A,R,N,Pn)}M!=null&&C&&Gs(M,p&&p.ref,E,m||p,!m)},j=(p,m,v,I)=>{if(p==null)s(m.el=l(m.children),v,I);else{const C=m.el=p.el;m.children!==p.children&&a(C,m.children)}},d=(p,m,v,I)=>{p==null?s(m.el=c(m.children||""),v,I):m.el=p.el},h=(p,m,v,I)=>{[p.el,p.anchor]=b(p.children,m,v,I,p.el,p.anchor)},_=({el:p,anchor:m},v,I)=>{let C;for(;p&&p!==m;)C=g(p),s(p,v,I),p=C;s(m,v,I)},x=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=g(p),i(p),p=v;i(m)},S=(p,m,v,I,C,E,A,R,N)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),p==null?ae(m,v,I,C,E,A,R,N):H(p,m,C,E,A,R,N)},ae=(p,m,v,I,C,E,A,R)=>{let N,w;const{props:M,shapeFlag:P,transition:k,dirs:L}=p;if(N=p.el=o(p.type,E,M&&M.is,M),P&8?u(N,p.children):P&16&&D(p.children,N,null,I,C,Ji(p,E),A,R),L&&Ut(p,null,I,"created"),V(N,p,p.scopeId,A,I),M){for(const ne in M)ne!=="value"&&!Un(ne)&&r(N,ne,null,M[ne],E,I);"value"in M&&r(N,"value",null,M.value,E),(w=M.onVnodeBeforeMount)&&tt(w,I,p)}L&&Ut(p,null,I,"beforeMount");const z=Yf(C,k);z&&k.beforeEnter(N),s(N,m,v),((w=M&&M.onVnodeMounted)||z||L)&&We(()=>{w&&tt(w,I,p),z&&k.enter(N),L&&Ut(p,null,I,"mounted")},C)},V=(p,m,v,I,C)=>{if(v&&y(p,v),I)for(let E=0;E<I.length;E++)y(p,I[E]);if(C){let E=C.subTree;if(m===E||Ia(E.type)&&(E.ssContent===m||E.ssFallback===m)){const A=C.vnode;V(p,A,A.scopeId,A.slotScopeIds,C.parent)}}},D=(p,m,v,I,C,E,A,R,N=0)=>{for(let w=N;w<p.length;w++){const M=p[w]=R?wt(p[w]):it(p[w]);O(null,M,m,v,I,C,E,A,R)}},H=(p,m,v,I,C,E,A)=>{const R=m.el=p.el;let{patchFlag:N,dynamicChildren:w,dirs:M}=m;N|=p.patchFlag&16;const P=p.props||Z,k=m.props||Z;let L;if(v&&Vt(v,!1),(L=k.onVnodeBeforeUpdate)&&tt(L,v,m,p),M&&Ut(m,p,v,"beforeUpdate"),v&&Vt(v,!0),(P.innerHTML&&k.innerHTML==null||P.textContent&&k.textContent==null)&&u(R,""),w?le(p.dynamicChildren,w,R,v,I,Ji(m,C),E):A||te(p,m,R,null,v,I,Ji(m,C),E,!1),N>0){if(N&16)Re(R,P,k,v,C);else if(N&2&&P.class!==k.class&&r(R,"class",null,k.class,C),N&4&&r(R,"style",P.style,k.style,C),N&8){const z=m.dynamicProps;for(let ne=0;ne<z.length;ne++){const X=z[ne],Fe=P[X],Ae=k[X];(Ae!==Fe||X==="value")&&r(R,X,Fe,Ae,C,v)}}N&1&&p.children!==m.children&&u(R,m.children)}else!A&&w==null&&Re(R,P,k,v,C);((L=k.onVnodeUpdated)||M)&&We(()=>{L&&tt(L,v,m,p),M&&Ut(m,p,v,"updated")},I)},le=(p,m,v,I,C,E,A)=>{for(let R=0;R<m.length;R++){const N=p[R],w=m[R],M=N.el&&(N.type===Ve||!kn(N,w)||N.shapeFlag&70)?f(N.el):v;O(N,w,M,null,I,C,E,A,!0)}},Re=(p,m,v,I,C)=>{if(m!==v){if(m!==Z)for(const E in m)!Un(E)&&!(E in v)&&r(p,E,m[E],null,C,I);for(const E in v){if(Un(E))continue;const A=v[E],R=m[E];A!==R&&E!=="value"&&r(p,E,R,A,C,I)}"value"in v&&r(p,"value",m.value,v.value,C)}},He=(p,m,v,I,C,E,A,R,N)=>{const w=m.el=p?p.el:l(""),M=m.anchor=p?p.anchor:l("");let{patchFlag:P,dynamicChildren:k,slotScopeIds:L}=m;L&&(R=R?R.concat(L):L),p==null?(s(w,v,I),s(M,v,I),D(m.children||[],v,M,C,E,A,R,N)):P>0&&P&64&&k&&p.dynamicChildren?(le(p.dynamicChildren,k,v,C,E,A,R),(m.key!=null||C&&m===C.subTree)&&ya(p,m,!0)):te(p,m,v,M,C,E,A,R,N)},ut=(p,m,v,I,C,E,A,R,N)=>{m.slotScopeIds=R,p==null?m.shapeFlag&512?C.ctx.activate(m,v,I,A,N):Rn(m,v,I,C,E,A,N):ws(p,m,N)},Rn=(p,m,v,I,C,E,A)=>{const R=p.component=dd(p,I,C);if(na(p)&&(R.ctx.renderer=Pn),pd(R,!1,A),R.asyncDep){if(C&&C.registerDep(R,he,A),!p.el){const N=R.subTree=lt(Zt);d(null,N,m,v)}}else he(R,p,m,v,C,E,A)},ws=(p,m,v)=>{const I=m.component=p.component;if(id(p,m,v))if(I.asyncDep&&!I.asyncResolved){q(I,m,v);return}else I.next=m,I.update();else m.el=p.el,I.vnode=m},he=(p,m,v,I,C,E,A)=>{const R=()=>{if(p.isMounted){let{next:P,bu:k,u:L,parent:z,vnode:ne}=p;{const Ze=va(p);if(Ze){P&&(P.el=ne.el,q(p,P,A)),Ze.asyncDep.then(()=>{p.isUnmounted||R()});return}}let X=P,Fe;Vt(p,!1),P?(P.el=ne.el,q(p,P,A)):P=ne,k&&Ms(k),(Fe=P.props&&P.props.onVnodeBeforeUpdate)&&tt(Fe,z,P,ne),Vt(p,!0);const Ae=ol(p),Xe=p.subTree;p.subTree=Ae,O(Xe,Ae,f(Xe.el),Ts(Xe),p,C,E),P.el=Ae.el,X===null&&rd(p,Ae.el),L&&We(L,C),(Fe=P.props&&P.props.onVnodeUpdated)&&We(()=>tt(Fe,z,P,ne),C)}else{let P;const{el:k,props:L}=m,{bm:z,m:ne,parent:X,root:Fe,type:Ae}=p,Xe=$n(m);Vt(p,!1),z&&Ms(z),!Xe&&(P=L&&L.onVnodeBeforeMount)&&tt(P,X,m),Vt(p,!0);{Fe.ce&&Fe.ce._injectChildStyle(Ae);const Ze=p.subTree=ol(p);O(null,Ze,v,I,p,C,E),m.el=Ze.el}if(ne&&We(ne,C),!Xe&&(P=L&&L.onVnodeMounted)){const Ze=m;We(()=>tt(P,X,Ze),C)}(m.shapeFlag&256||X&&$n(X.vnode)&&X.vnode.shapeFlag&256)&&p.a&&We(p.a,C),p.isMounted=!0,m=v=I=null}};p.scope.on();const N=p.effect=new Oc(R);p.scope.off();const w=p.update=N.run.bind(N),M=p.job=N.runIfDirty.bind(N);M.i=p,M.id=p.uid,N.scheduler=()=>oo(M),Vt(p,!0),w()},q=(p,m,v)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,Vf(p,m.props,I,v),Kf(p,m.children,v),Lt(),Jo(p),Wt()},te=(p,m,v,I,C,E,A,R,N=!1)=>{const w=p&&p.children,M=p?p.shapeFlag:0,P=m.children,{patchFlag:k,shapeFlag:L}=m;if(k>0){if(k&128){Ss(w,P,v,I,C,E,A,R,N);return}else if(k&256){Bt(w,P,v,I,C,E,A,R,N);return}}L&8?(M&16&&An(w,C,E),P!==w&&u(v,P)):M&16?L&16?Ss(w,P,v,I,C,E,A,R,N):An(w,C,E,!0):(M&8&&u(v,""),L&16&&D(P,v,I,C,E,A,R,N))},Bt=(p,m,v,I,C,E,A,R,N)=>{p=p||fn,m=m||fn;const w=p.length,M=m.length,P=Math.min(w,M);let k;for(k=0;k<P;k++){const L=m[k]=N?wt(m[k]):it(m[k]);O(p[k],L,v,null,C,E,A,R,N)}w>M?An(p,C,E,!0,!1,P):D(m,v,I,C,E,A,R,N,P)},Ss=(p,m,v,I,C,E,A,R,N)=>{let w=0;const M=m.length;let P=p.length-1,k=M-1;for(;w<=P&&w<=k;){const L=p[w],z=m[w]=N?wt(m[w]):it(m[w]);if(kn(L,z))O(L,z,v,null,C,E,A,R,N);else break;w++}for(;w<=P&&w<=k;){const L=p[P],z=m[k]=N?wt(m[k]):it(m[k]);if(kn(L,z))O(L,z,v,null,C,E,A,R,N);else break;P--,k--}if(w>P){if(w<=k){const L=k+1,z=L<M?m[L].el:I;for(;w<=k;)O(null,m[w]=N?wt(m[w]):it(m[w]),v,z,C,E,A,R,N),w++}}else if(w>k)for(;w<=P;)Je(p[w],C,E,!0),w++;else{const L=w,z=w,ne=new Map;for(w=z;w<=k;w++){const Le=m[w]=N?wt(m[w]):it(m[w]);Le.key!=null&&ne.set(Le.key,w)}let X,Fe=0;const Ae=k-z+1;let Xe=!1,Ze=0;const On=new Array(Ae);for(w=0;w<Ae;w++)On[w]=0;for(w=L;w<=P;w++){const Le=p[w];if(Fe>=Ae){Je(Le,C,E,!0);continue}let et;if(Le.key!=null)et=ne.get(Le.key);else for(X=z;X<=k;X++)if(On[X-z]===0&&kn(Le,m[X])){et=X;break}et===void 0?Je(Le,C,E,!0):(On[et-z]=w+1,et>=Ze?Ze=et:Xe=!0,O(Le,m[et],v,null,C,E,A,R,N),Fe++)}const Ko=Xe?Qf(On):fn;for(X=Ko.length-1,w=Ae-1;w>=0;w--){const Le=z+w,et=m[Le],qo=Le+1<M?m[Le+1].el:I;On[w]===0?O(null,et,v,qo,C,E,A,R,N):Xe&&(X<0||w!==Ko[X]?Ht(et,v,qo,2):X--)}}},Ht=(p,m,v,I,C=null)=>{const{el:E,type:A,transition:R,children:N,shapeFlag:w}=p;if(w&6){Ht(p.component.subTree,m,v,I);return}if(w&128){p.suspense.move(m,v,I);return}if(w&64){A.move(p,m,v,Pn);return}if(A===Ve){s(E,m,v);for(let P=0;P<N.length;P++)Ht(N[P],m,v,I);s(p.anchor,m,v);return}if(A===Xi){_(p,m,v);return}if(I!==2&&w&1&&R)if(I===0)R.beforeEnter(E),s(E,m,v),We(()=>R.enter(E),C);else{const{leave:P,delayLeave:k,afterLeave:L}=R,z=()=>s(E,m,v),ne=()=>{P(E,()=>{z(),L&&L()})};k?k(E,z,ne):ne()}else s(E,m,v)},Je=(p,m,v,I=!1,C=!1)=>{const{type:E,props:A,ref:R,children:N,dynamicChildren:w,shapeFlag:M,patchFlag:P,dirs:k,cacheIndex:L}=p;if(P===-2&&(C=!1),R!=null&&Gs(R,null,v,p,!0),L!=null&&(m.renderCache[L]=void 0),M&256){m.ctx.deactivate(p);return}const z=M&1&&k,ne=!$n(p);let X;if(ne&&(X=A&&A.onVnodeBeforeUnmount)&&tt(X,m,p),M&6)yh(p.component,v,I);else{if(M&128){p.suspense.unmount(v,I);return}z&&Ut(p,null,m,"beforeUnmount"),M&64?p.type.remove(p,m,v,Pn,I):w&&!w.hasOnce&&(E!==Ve||P>0&&P&64)?An(w,m,v,!1,!0):(E===Ve&&P&384||!C&&M&16)&&An(N,m,v),I&&$o(p)}(ne&&(X=A&&A.onVnodeUnmounted)||z)&&We(()=>{X&&tt(X,m,p),z&&Ut(p,null,m,"unmounted")},v)},$o=p=>{const{type:m,el:v,anchor:I,transition:C}=p;if(m===Ve){xh(v,I);return}if(m===Xi){x(p);return}const E=()=>{i(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:R}=C,N=()=>A(v,E);R?R(p.el,E,N):N()}else E()},xh=(p,m)=>{let v;for(;p!==m;)v=g(p),i(p),p=v;i(m)},yh=(p,m,v)=>{const{bum:I,scope:C,job:E,subTree:A,um:R,m:N,a:w}=p;rl(N),rl(w),I&&Ms(I),C.stop(),E&&(E.flags|=8,Je(A,p,m,v)),R&&We(R,m),We(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},An=(p,m,v,I=!1,C=!1,E=0)=>{for(let A=E;A<p.length;A++)Je(p[A],m,v,I,C)},Ts=p=>{if(p.shapeFlag&6)return Ts(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=g(p.anchor||p.el),v=m&&m[pf];return v?g(v):m};let $i=!1;const Go=(p,m,v)=>{p==null?m._vnode&&Je(m._vnode,null,null,!0):O(m._vnode||null,p,m,null,null,null,v),m._vnode=p,$i||($i=!0,Jo(),Xc(),$i=!1)},Pn={p:O,um:Je,m:Ht,r:$o,mt:Rn,mc:D,pc:te,pbc:le,n:Ts,o:t};return{render:Go,hydrate:void 0,createApp:Wf(Go)}}function Ji({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ya(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=wt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ya(o,l)),l.type===Ri&&(l.el=o.el)}}function Qf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function va(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:va(e)}function rl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Jf=Symbol.for("v-scx"),Xf=()=>Kn(Jf);function _n(t,e,n){return Ca(t,e,n)}function Ca(t,e,n=Z){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ie({},n),c=e&&s||!e&&r!=="post";let a;if(is){if(r==="sync"){const y=Xf();a=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=ot,y.resume=ot,y.pause=ot,y}}const u=ye;l.call=(y,b,O)=>ct(y,u,b,O);let f=!1;r==="post"?l.scheduler=y=>{We(y,u&&u.suspense)}:r!=="sync"&&(f=!0,l.scheduler=(y,b)=>{b?y():oo(y)}),l.augmentJob=y=>{e&&(y.flags|=4),f&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const g=cf(t,e,l);return is&&(a?a.push(g):c&&g()),g}function Zf(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=ms(this),l=Ca(i,r.bind(s),n);return o(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ed=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$e(e)}Modifiers`]||t[`${sn(e)}Modifiers`];function td(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const r=e.startsWith("update:"),o=r&&ed(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>de(u)?u.trim():u)),o.number&&(i=n.map(_r)));let l,c=s[l=Gi(e)]||s[l=Gi($e(e))];!c&&r&&(c=s[l=Gi(sn(e))]),c&&ct(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ct(a,t,6,i)}}function Ea(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const c=a=>{const u=Ea(a,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ce(t)&&s.set(t,null),null):(B(r)?r.forEach(c=>o[c]=null):Ie(o,r),ce(t)&&s.set(t,o),o)}function Ni(t,e){return!t||!yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,sn(e))||J(t,e))}function ol(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:f,data:g,setupState:y,ctx:b,inheritAttrs:O}=t,j=$s(t);let d,h;try{if(n.shapeFlag&4){const x=i||s,S=x;d=it(a.call(S,x,u,f,y,g,b)),h=l}else{const x=e;d=it(x.length>1?x(f,{attrs:l,slots:o,emit:c}):x(f,null)),h=e.props?l:nd(l)}}catch(x){qn.length=0,Si(x,t,1),d=lt(Zt)}let _=d;if(h&&O!==!1){const x=Object.keys(h),{shapeFlag:S}=_;x.length&&S&7&&(r&&x.some(qr)&&(h=sd(h,r)),_=yn(_,h,!1,!0))}return n.dirs&&(_=yn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&lo(_,n.transition),d=_,$s(j),d}const nd=t=>{let e;for(const n in t)(n==="class"||n==="style"||yi(n))&&((e||(e={}))[n]=t[n]);return e},sd=(t,e)=>{const n={};for(const s in t)(!qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function id(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ll(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(o[g]!==s[g]&&!Ni(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ll(s,o,a):!0:!!o;return!1}function ll(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ni(n,r))return!0}return!1}function rd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ia=t=>t.__isSuspense;function od(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):hf(t)}const Ve=Symbol.for("v-fgt"),Ri=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),qn=[];let Be=null;function ve(t=!1){qn.push(Be=t?null:[])}function ld(){qn.pop(),Be=qn[qn.length-1]||null}let ss=1;function cl(t,e=!1){ss+=t,t<0&&Be&&e&&(Be.hasOnce=!0)}function wa(t){return t.dynamicChildren=ss>0?Be||fn:null,ld(),ss>0&&Be&&Be.push(t),t}function Pe(t,e,n,s,i,r){return wa(W(t,e,n,s,i,r,!0))}function Sa(t,e,n,s,i){return wa(lt(t,e,n,s,i,!0))}function Ta(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const Na=({key:t})=>t??null,Fs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||fe(t)||U(t)?{i:Oe,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,s=0,i=null,r=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Na(e),ref:e&&Fs(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return l?(ao(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),ss>0&&!o&&Be&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Be.push(c),c}const lt=cd;function cd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===oa)&&(t=Zt),Ta(t)){const l=yn(t,e,!0);return n&&ao(l,n),ss>0&&!r&&Be&&(l.shapeFlag&6?Be[Be.indexOf(t)]=l:Be.push(l)),l.patchFlag=-2,l}if(yd(t)&&(t=t.__vccOpts),e){e=ad(e);let{class:l,style:c}=e;l&&!de(l)&&(e.class=Jr(l)),ce(c)&&(io(c)&&!B(c)&&(c=Ie({},c)),e.style=Qr(c))}const o=de(t)?1:Ia(t)?128:_f(t)?64:ce(t)?4:U(t)?2:0;return W(t,e,n,s,i,o,r,!0)}function ad(t){return t?io(t)||fa(t)?Ie({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?ud(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Na(a),ref:e&&e.ref?n&&r?B(r)?r.concat(Fs(e)):[r,Fs(e)]:Fs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&lo(u,c.clone(u)),u}function nt(t=" ",e=0){return lt(Ri,null,t,e)}function bt(t="",e=!1){return e?(ve(),Sa(Zt,null,t)):lt(Zt,null,t)}function it(t){return t==null||typeof t=="boolean"?lt(Zt):B(t)?lt(Ve,null,t.slice()):Ta(t)?wt(t):lt(Ri,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function ao(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ao(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!fa(e)?e._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),s&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function ud(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(i==="style")e.style=Qr([e.style,s.style]);else if(yi(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function tt(t,e,n,s=null){ct(t,e,7,[n,s])}const hd=aa();let fd=0;function dd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hd,r={uid:fd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pa(s,i),emitsOptions:Ea(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=td.bind(null,r),t.ce&&t.ce(r),r}let ye=null,qs,Ir;{const t=Ei(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Ir=e("__VUE_SSR_SETTERS__",n=>is=n)}const ms=t=>{const e=ye;return qs(t),t.scope.on(),()=>{t.scope.off(),qs(e)}},al=()=>{ye&&ye.scope.off(),qs(null)};function Ra(t){return t.vnode.shapeFlag&4}let is=!1;function pd(t,e=!1,n=!1){e&&Ir(e);const{props:s,children:i}=t.vnode,r=Ra(t);Uf(t,s,r,e),Gf(t,i,n);const o=r?_d(t,e):void 0;return e&&Ir(!1),o}function _d(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Pf);const{setup:s}=n;if(s){Lt();const i=t.setupContext=s.length>1?md(t):null,r=ms(t),o=gs(s,t,0,[t.props,i]),l=bc(o);if(Wt(),r(),(l||t.sp)&&!$n(t)&&ta(t),l){if(o.then(al,al),e)return o.then(c=>{ul(t,c)}).catch(c=>{Si(c,t,0)});t.asyncDep=o}else ul(t,o)}else Aa(t)}function ul(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=zc(e)),Aa(t)}function Aa(t,e,n){const s=t.type;t.render||(t.render=s.render||ot);{const i=ms(t);Lt();try{Of(t)}finally{Wt(),i()}}}const gd={get(t,e){return Ce(t,"get",""),t[e]}};function md(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gd),slots:t.slots,emit:t.emit,expose:e}}function Ai(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zc(ro(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function xd(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function yd(t){return U(t)&&"__vccOpts"in t}const Pa=(t,e)=>of(t,e,is),vd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wr;const hl=typeof window<"u"&&window.trustedTypes;if(hl)try{wr=hl.createPolicy("vue",{createHTML:t=>t})}catch{}const Oa=wr?t=>wr.createHTML(t):t=>t,Cd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,fl=ft&&ft.createElement("template"),Ed={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ft.createElementNS(Cd,t):e==="mathml"?ft.createElementNS(bd,t):n?ft.createElement(t,{is:n}):ft.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ft.createTextNode(t),createComment:t=>ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{fl.innerHTML=Oa(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=fl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Id=Symbol("_vtc");function wd(t,e,n){const s=t[Id];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dl=Symbol("_vod"),Sd=Symbol("_vsh"),Td=Symbol(""),Nd=/(^|;)\s*display\s*:/;function Rd(t,e,n){const s=t.style,i=de(n);let r=!1;if(n&&!i){if(e)if(de(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ls(s,l,"")}else for(const o in e)n[o]==null&&Ls(s,o,"");for(const o in n)o==="display"&&(r=!0),Ls(s,o,n[o])}else if(i){if(e!==n){const o=s[Td];o&&(n+=";"+o),s.cssText=n,r=Nd.test(n)}}else e&&t.removeAttribute("style");dl in t&&(t[dl]=r?s.display:"",t[Sd]&&(s.display="none"))}const pl=/\s*!important$/;function Ls(t,e,n){if(B(n))n.forEach(s=>Ls(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ad(t,e);pl.test(n)?t.setProperty(sn(s),n.replace(pl,""),"important"):t[s]=n}}const _l=["Webkit","Moz","ms"],Zi={};function Ad(t,e){const n=Zi[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return Zi[e]=s;s=bi(s);for(let i=0;i<_l.length;i++){const r=_l[i]+s;if(r in t)return Zi[e]=r}return e}const gl="http://www.w3.org/1999/xlink";function ml(t,e,n,s,i,r=Ah(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gl,e.slice(6,e.length)):t.setAttributeNS(gl,e,n):n==null||r&&!Sc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ft(n)?String(n):n)}function xl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Oa(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function Pd(t,e,n,s){t.removeEventListener(e,n,s)}const yl=Symbol("_vei");function Od(t,e,n,s,i=null){const r=t[yl]||(t[yl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Dd(e);if(s){const a=r[e]=Fd(s,i);un(t,l,a,c)}else o&&(Pd(t,l,o,c),r[e]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function Dd(t){let e;if(vl.test(t)){e={};let s;for(;s=t.match(vl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let er=0;const kd=Promise.resolve(),Md=()=>er||(kd.then(()=>er=0),er=Date.now());function Fd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ct(Ld(s,n.value),e,5,[s])};return n.value=t,n.attached=Md(),n}function Ld(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Wd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?wd(t,s,o):e==="style"?Rd(t,n,s):yi(e)?qr(e)||Od(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bd(t,e,s,o))?(xl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ml(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(s))?xl(t,$e(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ml(t,e,s,o))};function Bd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Cl(e)&&de(n)?!1:e in t}const bl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Ms(e,n):e};function Hd(t){t.target.composing=!0}function El(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),Ud={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[tr]=bl(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=_r(l)),t[tr](l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",Hd),un(t,"compositionend",El),un(t,"change",El))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[tr]=bl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?_r(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Vd=Ie({patchProp:Wd},Ed);let Il;function jd(){return Il||(Il=qf(Vd))}const $d=(...t)=>{const e=jd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Kd(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Gd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Gd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Kd(t){return de(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Da;const Pi=t=>Da=t,ka=Symbol();function Sr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zn||(zn={}));function qd(){const t=Ac(!0),e=t.run(()=>qt({}));let n=[],s=[];const i=ro({install(r){Pi(i),i._a=r,r.provide(ka,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ma=()=>{};function wl(t,e,n,s=Ma){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Pc()&&Ph(i),i}function ln(t,...e){t.slice().forEach(n=>{n(...e)})}const zd=t=>t(),Sl=Symbol(),nr=Symbol();function Tr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Sr(i)&&Sr(s)&&t.hasOwnProperty(n)&&!fe(s)&&!Nt(s)?t[n]=Tr(i,s):t[n]=s}return t}const Yd=Symbol();function Qd(t){return!Sr(t)||!t.hasOwnProperty(Yd)}const{assign:Et}=Object;function Jd(t){return!!(fe(t)&&t.effect)}function Xd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=tf(n.state.value[t]);return Et(u,r,Object.keys(o||{}).reduce((f,g)=>(f[g]=ro(Pa(()=>{Pi(n);const y=n._s.get(t);return o[g].call(y,y)})),f),{}))}return c=Fa(t,a,e,n,s,!0),c}function Fa(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),c={deep:!0};let a,u,f=[],g=[],y;const b=s.state.value[t];!r&&!b&&(s.state.value[t]={}),qt({});let O;function j(D){let H;a=u=!1,typeof D=="function"?(D(s.state.value[t]),H={type:zn.patchFunction,storeId:t,events:y}):(Tr(s.state.value[t],D),H={type:zn.patchObject,payload:D,storeId:t,events:y});const le=O=Symbol();Qc().then(()=>{O===le&&(a=!0)}),u=!0,ln(f,H,s.state.value[t])}const d=r?function(){const{state:H}=n,le=H?H():{};this.$patch(Re=>{Et(Re,le)})}:Ma;function h(){o.stop(),f=[],g=[],s._s.delete(t)}const _=(D,H="")=>{if(Sl in D)return D[nr]=H,D;const le=function(){Pi(s);const Re=Array.from(arguments),He=[],ut=[];function Rn(q){He.push(q)}function ws(q){ut.push(q)}ln(g,{args:Re,name:le[nr],store:S,after:Rn,onError:ws});let he;try{he=D.apply(this&&this.$id===t?this:S,Re)}catch(q){throw ln(ut,q),q}return he instanceof Promise?he.then(q=>(ln(He,q),q)).catch(q=>(ln(ut,q),Promise.reject(q))):(ln(He,he),he)};return le[Sl]=!0,le[nr]=H,le},x={_p:s,$id:t,$onAction:wl.bind(null,g),$patch:j,$reset:d,$subscribe(D,H={}){const le=wl(f,D,H.detached,()=>Re()),Re=o.run(()=>_n(()=>s.state.value[t],He=>{(H.flush==="sync"?u:a)&&D({storeId:t,type:zn.direct,events:y},He)},Et({},c,H)));return le},$dispose:h},S=wi(x);s._s.set(t,S);const V=(s._a&&s._a.runWithContext||zd)(()=>s._e.run(()=>(o=Ac()).run(()=>e({action:_}))));for(const D in V){const H=V[D];if(fe(H)&&!Jd(H)||Nt(H))r||(b&&Qd(H)&&(fe(H)?H.value=b[D]:Tr(H,b[D])),s.state.value[t][D]=H);else if(typeof H=="function"){const le=_(H,D);V[D]=le,l.actions[D]=H}}return Et(S,V),Et(Y(S),V),Object.defineProperty(S,"$state",{get:()=>s.state.value[t],set:D=>{j(H=>{Et(H,D)})}}),s._p.forEach(D=>{Et(S,o.run(()=>D({store:S,app:s._a,pinia:s,options:l})))}),b&&r&&n.hydrate&&n.hydrate(S.$state,b),a=!0,u=!0,S}/*! #__NO_SIDE_EFFECTS__ */function Zd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Hf();return o=o||(c?Kn(ka,null):null),o&&Pi(o),o=Da,o._s.has(t)||(i?Fa(t,e,s,o):Xd(t,s,o)),o._s.get(t)}return r.$id=t,r}const ep=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},tp=()=>{};var Tl={};/**
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
 */const La={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw In(e)},In=function(t){return new Error("Firebase Database ("+La.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Wa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},np=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,y=a&63;c||(y=64,o||(g=64)),s.push(n[u],n[f],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):np(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||f==null)throw new sp;const g=r<<2|l>>4;if(s.push(g),a!==64){const y=l<<4&240|a>>2;if(s.push(y),f!==64){const b=a<<6&192|f;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ba=function(t){const e=Wa(t);return uo.encodeByteArray(e,!0)},zs=function(t){return Ba(t).replace(/\./g,"")},Nr=function(t){try{return uo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ip(t){return Ha(void 0,t)}function Ha(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rp(n)||(t[n]=Ha(t[n],e[n]));return t}function rp(t){return t!=="__proto__"}/**
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
 */function op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lp=()=>op().__FIREBASE_DEFAULTS__,cp=()=>{if(typeof process>"u"||typeof Tl>"u")return;const t=Tl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ap=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nr(t[1]);return e&&JSON.parse(e)},Ua=()=>{try{return tp()||lp()||cp()||ap()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},up=t=>{var e,n;return(n=(e=Ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hp=t=>{const e=up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Va=()=>{var t;return(t=Ua())===null||t===void 0?void 0:t.config};/**
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
 */class Oi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function fp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zs(JSON.stringify(n)),zs(JSON.stringify(o)),""].join(".")}/**
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
 */function dp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dp())}function pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _p(){return La.NODE_ADMIN===!0}function gp(){try{return typeof indexedDB=="object"}catch{return!1}}function mp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const xp="FirebaseError";class xs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=xp,Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xs(i,l,s)}}function yp(t,e){return t.replace(vp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vp=/\{\$([^}]+)}/g;/**
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
 */function rs(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const Ga=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rs(Nr(r[0])||""),n=rs(Nr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Cp=function(t){const e=Ga(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(t){const e=Ga(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ys(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Qs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rl(r)&&Rl(o)){if(!Qs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rl(t){return t!==null&&typeof t=="object"}/**
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
 */function Ep(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Ip{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let f=0;f<80;f++){f<40?f<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):f<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[f]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ho(t,e){return`${t} failed: ${e} argument `}/**
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
 */const wp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Di=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function wn(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Sp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Np(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tp(t){return t===Gt?void 0:t}function Np(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Ap={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Pp=ie.INFO,Op={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Dp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Op[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=Pp,this._logHandler=Dp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ap[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const kp=(t,e)=>e.some(n=>t instanceof n);let Al,Pl;function Mp(){return Al||(Al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fp(){return Pl||(Pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Rr=new WeakMap,za=new WeakMap,sr=new WeakMap,fo=new WeakMap;function Lp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qa.set(n,t)}).catch(()=>{}),fo.set(e,t),e}function Wp(t){if(Rr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rr.set(t,e)}let Ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||za.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bp(t){Ar=t(Ar)}function Hp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ir(this),e,...n);return za.set(s,e.sort?e.sort():[e]),Rt(s)}:Fp().includes(t)?function(...e){return t.apply(ir(this),e),Rt(qa.get(this))}:function(...e){return Rt(t.apply(ir(this),e))}}function Up(t){return typeof t=="function"?Hp(t):(t instanceof IDBTransaction&&Wp(t),kp(t,Mp())?new Proxy(t,Ar):t)}function Rt(t){if(t instanceof IDBRequest)return Lp(t);if(sr.has(t))return sr.get(t);const e=Up(t);return e!==t&&(sr.set(t,e),fo.set(e,t)),e}const ir=t=>fo.get(t);function Vp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const jp=["get","getKey","getAll","getAllKeys","count"],$p=["put","add","delete","clear"],rr=new Map;function Ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rr.get(e))return rr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$p.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return rr.set(e,r),r}Bp(t=>({...t,get:(e,n,s)=>Ol(e,n)||t.get(e,n,s),has:(e,n)=>!!Ol(e,n)||t.has(e,n)}));/**
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
 */class Gp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pr="@firebase/app",Dl="0.11.2";/**
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
 */const mt=new Ka("@firebase/app"),qp="@firebase/app-compat",zp="@firebase/analytics-compat",Yp="@firebase/analytics",Qp="@firebase/app-check-compat",Jp="@firebase/app-check",Xp="@firebase/auth",Zp="@firebase/auth-compat",e_="@firebase/database",t_="@firebase/data-connect",n_="@firebase/database-compat",s_="@firebase/functions",i_="@firebase/functions-compat",r_="@firebase/installations",o_="@firebase/installations-compat",l_="@firebase/messaging",c_="@firebase/messaging-compat",a_="@firebase/performance",u_="@firebase/performance-compat",h_="@firebase/remote-config",f_="@firebase/remote-config-compat",d_="@firebase/storage",p_="@firebase/storage-compat",__="@firebase/firestore",g_="@firebase/vertexai",m_="@firebase/firestore-compat",x_="firebase",y_="11.4.0";/**
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
 */const Or="[DEFAULT]",v_={[Pr]:"fire-core",[qp]:"fire-core-compat",[Yp]:"fire-analytics",[zp]:"fire-analytics-compat",[Jp]:"fire-app-check",[Qp]:"fire-app-check-compat",[Xp]:"fire-auth",[Zp]:"fire-auth-compat",[e_]:"fire-rtdb",[t_]:"fire-data-connect",[n_]:"fire-rtdb-compat",[s_]:"fire-fn",[i_]:"fire-fn-compat",[r_]:"fire-iid",[o_]:"fire-iid-compat",[l_]:"fire-fcm",[c_]:"fire-fcm-compat",[a_]:"fire-perf",[u_]:"fire-perf-compat",[h_]:"fire-rc",[f_]:"fire-rc-compat",[d_]:"fire-gcs",[p_]:"fire-gcs-compat",[__]:"fire-fst",[m_]:"fire-fst-compat",[g_]:"fire-vertex","fire-js":"fire-js",[x_]:"fire-js-all"};/**
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
 */const Js=new Map,C_=new Map,Dr=new Map;function kl(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xs(t){const e=t.name;if(Dr.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const n of Js.values())kl(n,t);for(const n of C_.values())kl(n,t);return!0}function b_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function E_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const I_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new $a("app","Firebase",I_);/**
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
 */class w_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const S_=y_;function Ya(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Or,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=Va()),!n)throw At.create("no-options");const r=Js.get(i);if(r){if(Qs(n,r.options)&&Qs(s,r.config))return r;throw At.create("duplicate-app",{appName:i})}const o=new Rp(i);for(const c of Dr.values())o.addComponent(c);const l=new w_(n,s,o);return Js.set(i,l),l}function T_(t=Or){const e=Js.get(t);if(!e&&t===Or&&Va())return Ya();if(!e)throw At.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=v_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(l.join(" "));return}Xs(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const N_="firebase-heartbeat-database",R_=1,ls="firebase-heartbeat-store";let or=null;function Qa(){return or||(or=Vp(N_,R_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),or}async function A_(t){try{const n=(await Qa()).transaction(ls),s=await n.objectStore(ls).get(Ja(t));return await n.done,s}catch(e){if(e instanceof xs)mt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(n.message)}}}async function Ml(t,e){try{const s=(await Qa()).transaction(ls,"readwrite");await s.objectStore(ls).put(e,Ja(t)),await s.done}catch(n){if(n instanceof xs)mt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mt.warn(s.message)}}}function Ja(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P_=1024,O_=30;class D_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new M_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>O_){const o=F_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fl(),{heartbeatsToSend:s,unsentEntries:i}=k_(this._heartbeatsCache.heartbeats),r=zs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return mt.warn(n),""}}}function Fl(){return new Date().toISOString().substring(0,10)}function k_(t,e=P_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ll(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ll(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class M_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ll(t){return zs(JSON.stringify({version:2,heartbeats:t})).length}function F_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function L_(t){Xs(new os("platform-logger",e=>new Gp(e),"PRIVATE")),Xs(new os("heartbeat",e=>new D_(e),"PRIVATE")),gn(Pr,Dl,t),gn(Pr,Dl,"esm2017"),gn("fire-js","")}L_("");var W_="firebase",B_="11.4.0";/**
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
 */gn(W_,B_,"app");var Wl={};const Bl="@firebase/database",Hl="1.0.13";/**
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
 */let Xa="";function H_(t){Xa=t}/**
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
 */class U_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class V_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Za=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new U_(e)}}catch{}return new V_},zt=Za("localStorage"),j_=Za("sessionStorage");/**
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
 */const mn=new Ka("@firebase/database"),$_=function(){let t=1;return function(){return t++}}(),eu=function(t){const e=wp(t),n=new Ip;n.update(e);const s=n.digest();return uo.encodeByteArray(s)},ys=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ys.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let Yn=null,Ul=!0;const G_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),mn.logLevel=ie.VERBOSE,Yn=mn.log.bind(mn)},Ee=function(...t){if(Ul===!0&&(Ul=!1,Yn===null&&j_.get("logging_enabled")===!0&&G_()),Yn){const e=ys.apply(null,t);Yn(e)}},vs=function(t){return function(...e){Ee(t,...e)}},kr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ys(...t);mn.error(e)},xt=function(...t){const e=`FIREBASE FATAL ERROR: ${ys(...t)}`;throw mn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+ys(...t);mn.warn(e)},K_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},q_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",en="[MAX_NAME]",Sn=function(t,e){if(t===e)return 0;if(t===Cn||e===en)return-1;if(e===Cn||t===en)return 1;{const n=Vl(t),s=Vl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},z_=function(t,e){return t===e?0:t<e?-1:1},Mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},po=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=po(t[e[s]]);return n+="}",n},nu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const su=function(t){T(!tu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},Y_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Q_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function J_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const X_=new RegExp("^-?(0*)\\d{1,10}$"),Z_=-2147483648,eg=2147483647,Vl=function(t){if(X_.test(t)){const e=Number(t);if(e>=Z_&&e<=eg)return e}return null},Tn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},tg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ng{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,E_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class sg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Ws{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ws.OWNER="owner";/**
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
 */const _o="5",iu="v",ru="s",ou="r",lu="f",cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,au="ls",uu="p",Mr="ac",hu="websocket",fu="long_polling";/**
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
 */class du{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ig(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pu(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===hu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ig(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class rg{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ip(this.counters_)}}/**
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
 */const lr={},cr={};function go(t){const e=t.toString();return lr[e]||(lr[e]=new rg),lr[e]}function og(t,e){const n=t.toString();return cr[n]||(cr[n]=e()),cr[n]}/**
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
 */class lg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Tn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const jl="start",cg="close",ag="pLPCommand",ug="pRTLPCB",_u="id",gu="pw",mu="ser",hg="cb",fg="seg",dg="ts",pg="d",_g="dframe",xu=1870,yu=30,gg=xu-yu,mg=25e3,xg=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vs(e),this.stats_=go(n),this.urlFn=c=>(this.appCheckToken&&(c[Mr]=this.appCheckToken),pu(n,fu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xg)),q_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jl)this.id=l,this.password=c;else if(o===cg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[jl]="t",s[mu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[iu]=_o,this.transportSessionId&&(s[ru]=this.transportSessionId),this.lastSessionId&&(s[au]=this.lastSessionId),this.applicationId&&(s[uu]=this.applicationId),this.appCheckToken&&(s[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(s[ou]=lu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Y_()&&!Q_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ba(n),i=nu(s,gg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[_g]="t",s[_u]=e,s[gu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$_(),window[ag+this.uniqueCallbackIdentifier]=e,window[ug+this.uniqueCallbackIdentifier]=n,this.myIFrame=mo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_u]=this.myID,e[gu]=this.myPW,e[mu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yu+s.length<=xu;){const o=this.pendingSegs.shift();s=s+"&"+fg+i+"="+o.seg+"&"+dg+i+"="+o.ts+"&"+pg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const yg=16384,vg=45e3;let Zs=null;typeof MozWebSocket<"u"?Zs=MozWebSocket:typeof WebSocket<"u"&&(Zs=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vs(this.connId),this.stats_=go(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[iu]=_o,typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(o[ou]=lu),n&&(o[ru]=n),s&&(o[au]=s),i&&(o[Mr]=i),r&&(o[uu]=r),pu(e,hu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;_p(),this.mySock=new Zs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zs!==null&&!Ke.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nu(n,yg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
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
 */class cs{static get ALL_TRANSPORTS(){return[hn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of cs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
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
 */const Cg=6e4,bg=5e3,Eg=10*1024,Ig=100*1024,ar="t",$l="d",wg="s",Gl="r",Sg="e",Kl="o",ql="a",zl="n",Yl="p",Tg="h";class Ng{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ig?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Eg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ar in e){const n=e[ar];n===ql?this.upgradeIfSecondaryHealthy_():n===Gl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ql,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mn(ar,e);if($l in e){const s=e[$l];if(n===Tg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===zl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wg?this.onConnectionShutdown_(s):n===Gl?this.onReset_(s):n===Sg?kr("Server Error: "+s):n===Kl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_o!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Cg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class vu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Cu{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ei extends Cu{static getInstance(){return new ei}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ql=32,Jl=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ee("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Rg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Eu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Iu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Ne(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xo(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ag{constructor(e,n){this.errorPrefix_=n,this.parts_=Eu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Di(this.parts_[s]);wu(this)}}function Pg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Di(e),wu(t)}function Og(t){const e=t.parts_.pop();t.byteLength_-=Di(e),t.parts_.length>0&&(t.byteLength_-=1)}function wu(t){if(t.byteLength_>Jl)throw new Error(t.errorPrefix_+"has a key path longer than "+Jl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ql)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ql+") or object contains a cycle "+Kt(t))}function Kt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yo extends Cu{static getInstance(){return new yo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fn=1e3,Dg=60*5*1e3,Xl=30*1e3,kg=1.3,Mg=3e4,Fg="server_kill",Zl=3;class gt extends vu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=gt.nextPersistentConnectionId_++,this.log_=vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fn,this.maxReconnectDelay_=Dg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Oi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;gt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Cp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kr("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mg&&(this.reconnectDelay_=Fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(f){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,l=new Ng(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,y=>{ke(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fg)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ke(f),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nl(this.interruptReasons_)&&(this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>po(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zl&&(this.reconnectDelay_=Xl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xa.replace(/\./g,"-")]=1,ja()?e["framework.cordova"]=1:pp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ei.getInstance().currentlyOnline();return Nl(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Cn,e),i=new G(Cn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let Ps;class Su extends ki{static get __EMPTY_NODE(){return Ps}static set __EMPTY_NODE(e){Ps=e}compare(e,n){return Sn(e.name,n.name)}isDefinedOn(e){throw In("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(en,Ps)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ps)}toString(){return".key"}}const xn=new Su;/**
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
 */class Os{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??me.RED,this.left=i??De.EMPTY_NODE,this.right=r??De.EMPTY_NODE}copy(e,n,s,i,r){return new me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Lg{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Os(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new Lg;/**
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
 */function Wg(t,e){return Sn(t.name,e.name)}function vo(t,e){return Sn(t,e)}/**
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
 */let Fr;function Bg(t){Fr=t}const Tu=function(t){return typeof t=="number"?"number:"+su(t):"string:"+t},Nu=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else T(t===Fr||t.isEmpty(),"priority of unexpected type.");T(t===Fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ec;class ge{static set __childrenNodeConstructor(e){ec=e}static get __childrenNodeConstructor(){return ec}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:$(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=su(this.value_):e+=this.value_,this.lazyHash_=eu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ru,Au;function Hg(t){Ru=t}function Ug(t){Au=t}class Vg extends ki{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Sn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(en,new ge("[PRIORITY-POST]",Au))}makePost(e,n){const s=Ru(e);return new G(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new Vg;/**
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
 */const jg=Math.log(2);class $g{constructor(e){const n=r=>parseInt(Math.log(r)/jg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ti=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let f,g;if(u===0)return null;if(u===1)return f=t[c],g=n?n(f):f,new me(g,f.node,me.BLACK,null,null);{const y=parseInt(u/2,10)+c,b=i(c,y),O=i(y+1,a);return f=t[y],g=n?n(f):f,new me(g,f.node,me.BLACK,b,O)}},r=function(c){let a=null,u=null,f=t.length;const g=function(b,O){const j=f-b,d=f;f-=b;const h=i(j+1,d),_=t[j],x=n?n(_):_;y(new me(x,_.node,O,null,h))},y=function(b){a?(a.left=b,a=b):(u=b,a=b)};for(let b=0;b<c.count;++b){const O=c.nextBitIsOne(),j=Math.pow(2,c.count-(b+1));O?g(j,me.BLACK):(g(j,me.BLACK),g(j,me.RED))}return u},o=new $g(t.length),l=r(o);return new De(s||e,l)};/**
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
 */let ur;const cn={};class _t{static get Default(){return T(cn&&ue,"ChildrenNode.ts has not been loaded"),ur=ur||new _t({".priority":cn},{".priority":ue}),ur}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ti(s,e.getCompare()):l=cn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new _t(u,a)}addToIndexes(e,n){const s=Ys(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===cn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ti(l,o.getCompare())}else return cn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new _t(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ys(this.indexes_,i=>{if(i===cn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new _t(s,this.indexSet_)}}/**
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
 */let Ln;class F{static get EMPTY_NODE(){return Ln||(Ln=new F(new De(vo),null,_t.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nu(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ln:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ln:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{T($(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tu(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":eu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gg extends F{constructor(){super(new De(vo),F.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Cs=new Gg;Object.defineProperties(G,{MIN:{value:new G(Cn,F.EMPTY_NODE)},MAX:{value:new G(en,Cs)}});Su.__EMPTY_NODE=F.EMPTY_NODE;ge.__childrenNodeConstructor=F;Bg(Cs);Ug(Cs);/**
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
 */const Kg=!0;function xe(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,xe(e))}if(!(t instanceof Array)&&Kg){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return F.EMPTY_NODE;const r=ti(n,Wg,o=>o.name,vo);if(s){const o=ti(n,ue.getCompare());return new F(r,xe(e),new _t({".priority":o},{".priority":ue}))}else return new F(r,xe(e),_t.Default)}else{let n=F.EMPTY_NODE;return Me(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Hg(xe);/**
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
 */class qg extends ki{constructor(e){super(),this.indexPath_=e,T(!K(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Sn(e.name,n.name):r}makePost(e,n){const s=xe(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new G(en,e)}toString(){return Eu(this.indexPath_,0).join("/")}}/**
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
 */class zg extends ki{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Sn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=xe(e);return new G(n,s)}toString(){return".value"}}const Yg=new zg;/**
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
 */function Pu(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function as(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function us(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Qg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Co{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(as(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(bn(n,s)):o.trackChildChange(us(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(as(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(us(i,r,o))}else s.trackChildChange(bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class hs{constructor(e){this.indexedFilter_=new Co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Jg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,y)=>f(y,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const f=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const y=g==null?1:o(g,c);if(u&&!s.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(us(n,s,f)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(as(n,f));const O=l.updateImmediateChild(n,F.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(bn(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(as(a.name,a.node)),r.trackChildChange(bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,F.EMPTY_NODE)):e}}/**
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
 */class bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xg(t){return t.loadsAllData()?new Co(t.getIndex()):t.hasLimit()?new Jg(t):new hs(t)}function tc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===Yg?n="$value":t.index_===xn?n="$key":(T(t.index_ instanceof qg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
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
 */class ni extends vu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=vs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ni.getListenId_(e,s),l={};this.listens_[o]=l;const c=tc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let f=u;if(a===404&&(f=null,a=null),a===null&&this.onDataUpdate_(r,f,!1,s),vn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ni.getListenId_(e,n);delete this.listens_[s]}get(e){const n=tc(e._queryParams),s=e._path.toString(),i=new Oi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ep(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=rs(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Zg{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function si(){return{value:null,children:new Map}}function Ou(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,si());const i=t.children.get(s);e=re(e),Ou(i,e,n)}}function Lr(t,e,n){t.value!==null?n(e,t.value):em(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);Lr(i,r,n)})}function em(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class tm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const sc=10*1e3,nm=30*1e3,sm=5*60*1e3;class im{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tm(e);const s=sc+(nm-sc)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*sm))}}/**
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
 */var ze;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function Du(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Io(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ze.ACK_USER_WRITE,this.source=Du()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new ii(Q(),n,this.revert)}}else return T($(this.path)===e,"operationForChild called for unrelated child."),new ii(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=ze.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new fs(this.source,Q()):new fs(this.source,re(this.path))}}/**
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
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ze.OVERWRITE}operationForChild(e){return K(this.path)?new tn(this.source,Q(),this.snap.getImmediateChild(e)):new tn(this.source,re(this.path),this.snap)}}/**
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
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ze.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new tn(this.source,Q(),n.value):new ds(this.source,Q(),n)}else return T($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class kt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class rm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function om(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qg(o.childName,o.snapshotNode))}),Wn(t,i,"child_removed",e,s,n),Wn(t,i,"child_added",e,s,n),Wn(t,i,"child_moved",r,s,n),Wn(t,i,"child_changed",e,s,n),Wn(t,i,"value",e,s,n),i}function Wn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>cm(t,l,c)),o.forEach(l=>{const c=lm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function lm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cm(t,e,n){if(e.childName==null||n.childName==null)throw In("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Mi(t,e){return{eventCache:t,serverCache:e}}function Jn(t,e,n,s){return Mi(new kt(e,n,s),t.serverCache)}function ku(t,e,n,s){return Mi(t.eventCache,new kt(e,n,s))}function ri(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let hr;const am=()=>(hr||(hr=new De(z_)),hr);class oe{static fromObject(e){let n=new oe(null);return Me(e,(s,i)=>{n=n.set(new ee(s),i)}),n}constructor(e,n=am()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:_e(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new oe(null)}}set(e,n){if(K(e))return new oe(n,this.children);{const s=$(e),r=(this.children.get(s)||new oe(null)).set(re(e),n),o=this.children.insert(s,r);return new oe(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(K(e))return n;{const s=$(e),r=(this.children.get(s)||new oe(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new oe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(re(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),_e(n,i),s):new oe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new oe(null))}}function Xn(t,e,n){if(K(e))return new Qe(new oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new oe(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function ic(t,e,n){let s=t;return Me(n,(i,r)=>{s=Xn(s,_e(e,i),r)}),s}function rc(t,e){if(K(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new Qe(n)}}function Wr(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function oc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Pt(t,e){if(K(e))return t;{const n=rn(t,e);return n!=null?new Qe(new oe(n)):new Qe(t.writeTree_.subtree(e))}}function Br(t){return t.writeTree_.isEmpty()}function En(t,e){return Mu(Q(),t.writeTree_,e)}function Mu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Mu(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
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
 */function Fi(t,e){return Bu(e,t)}function um(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function hm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function fm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&dm(l,s.path)?i=!1:qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return pm(t),!0;if(s.snap)t.visibleWrites=rc(t.visibleWrites,s.path);else{const l=s.children;Me(l,c=>{t.visibleWrites=rc(t.visibleWrites,_e(s.path,c))})}return!0}else return!1}function dm(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(_e(t.path,n),e))return!0;return!1}function pm(t){t.visibleWrites=Fu(t.allWrites,_m,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _m(t){return t.visible}function Fu(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)qe(n,o)?(l=Ne(n,o),s=Xn(s,l,r.snap)):qe(o,n)&&(l=Ne(o,n),s=Xn(s,Q(),r.snap.getChild(l)));else if(r.children){if(qe(n,o))l=Ne(n,o),s=ic(s,l,r.children);else if(qe(o,n))if(l=Ne(o,n),K(l))s=ic(s,Q(),r.children);else{const c=vn(r.children,$(l));if(c){const a=c.getChild(re(l));s=Xn(s,Q(),a)}}}else throw In("WriteRecord should have .snap or .children")}}return s}function Lu(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=Pt(t.visibleWrites,e);if(Br(o))return n;if(n==null&&!Wr(o,Q()))return null;{const l=n||F.EMPTY_NODE;return En(o,l)}}}else{const r=Pt(t.visibleWrites,e);if(!i&&Br(r))return n;if(!i&&n==null&&!Wr(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(qe(a.path,e)||qe(e,a.path))},l=Fu(t.allWrites,o,e),c=n||F.EMPTY_NODE;return En(l,c)}}}function gm(t,e,n){let s=F.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Pt(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const c=En(Pt(r,new ee(o)),l);s=s.updateImmediateChild(o,c)}),oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pt(t.visibleWrites,e);return oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mm(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Wr(t.visibleWrites,r))return null;{const o=Pt(t.visibleWrites,r);return Br(o)?i.getChild(n):En(o,i.getChild(n))}}function xm(t,e,n,s){const i=_e(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Pt(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function ym(t,e){return rn(t.visibleWrites,e)}function vm(t,e,n,s,i,r,o){let l;const c=Pt(t.visibleWrites,e),a=rn(c,Q());if(a!=null)l=a;else if(n!=null)l=En(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let y=g.getNext();for(;y&&u.length<i;)f(y,s)!==0&&u.push(y),y=g.getNext();return u}else return[]}function Cm(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function oi(t,e,n,s){return Lu(t.writeTree,t.treePath,e,n,s)}function wo(t,e){return gm(t.writeTree,t.treePath,e)}function lc(t,e,n,s){return mm(t.writeTree,t.treePath,e,n,s)}function li(t,e){return ym(t.writeTree,_e(t.treePath,e))}function bm(t,e,n,s,i,r){return vm(t.writeTree,t.treePath,e,n,s,i,r)}function So(t,e,n){return xm(t.writeTree,t.treePath,e,n)}function Wu(t,e){return Bu(_e(t.treePath,e),t.writeTree)}function Bu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Em{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,us(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,us(s,e.snapshotNode,i.oldSnap));else throw In("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Im{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Hu=new Im;class To{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return So(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=bm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function wm(t){return{filter:t}}function Sm(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Tm(t,e,n,s,i){const r=new Em;let o,l;if(n.type===ze.OVERWRITE){const a=n;a.source.fromUser?o=Hr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!K(a.path),o=ci(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===ze.MERGE){const a=n;a.source.fromUser?o=Rm(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Ur(t,e,a.path,a.children,s,i,l,r))}else if(n.type===ze.ACK_USER_WRITE){const a=n;a.revert?o=Om(t,e,a.path,s,i,r):o=Am(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===ze.LISTEN_COMPLETE)o=Pm(t,e,n.path,s,r);else throw In("Unknown operation type: "+n.type);const c=r.getChanges();return Nm(e,o,c),{viewCache:o,changes:c}}function Nm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ri(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Pu(ri(e)))}}function Uu(t,e,n,s,i,r){const o=e.eventCache;if(li(s,n)!=null)return e;{let l,c;if(K(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=nn(e),u=a instanceof F?a:F.EMPTY_NODE,f=wo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const a=oi(s,nn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){T(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const f=lc(s,n,u,c);f!=null?l=t.filter.updatePriority(u,f):l=o.getNode()}else{const u=re(n);let f;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=lc(s,n,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(a).updateChild(u,g):f=o.getNode().getImmediateChild(a)}else f=So(s,a,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),a,f,u,i,r):l=o.getNode()}}return Jn(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function ci(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const y=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),y,null)}else{const y=$(n);if(!c.isCompleteForPath(n)&&Dt(n)>1)return e;const b=re(n),j=c.getNode().getImmediateChild(y).updateChild(b,s);y===".priority"?a=u.updatePriority(c.getNode(),j):a=u.updateChild(c.getNode(),y,j,b,Hu,null)}const f=ku(e,a,c.isFullyInitialized()||K(n),u.filtersNodes()),g=new To(i,f,r);return Uu(t,f,n,i,g,l)}function Hr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new To(i,e,r);if(K(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Jn(e,a,!0,t.filter.filtersNodes());else{const f=$(n);if(f===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Jn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=re(n),y=l.getNode().getImmediateChild(f);let b;if(K(g))b=s;else{const O=u.getCompleteChild(f);O!=null?bu(g)===".priority"&&O.getChild(Iu(g)).isEmpty()?b=O:b=O.updateChild(g,s):b=F.EMPTY_NODE}if(y.equals(b))c=e;else{const O=t.filter.updateChild(l.getNode(),f,b,g,u,o);c=Jn(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function cc(t,e){return t.eventCache.isCompleteForChild(e)}function Rm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=_e(n,c);cc(e,$(u))&&(l=Hr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=_e(n,c);cc(e,$(u))||(l=Hr(t,l,u,a,i,r,o))}),l}function ac(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ur(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;K(n)?a=s:a=new oe(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((f,g)=>{if(u.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),b=ac(t,y,g);c=ci(t,c,new ee(f),b,i,r,o,l)}}),a.children.inorderTraversal((f,g)=>{const y=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!u.hasChild(f)&&!y){const b=e.serverCache.getNode().getImmediateChild(f),O=ac(t,b,g);c=ci(t,c,new ee(f),O,i,r,o,l)}}),c}function Am(t,e,n,s,i,r,o){if(li(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ci(t,e,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new oe(null);return c.getNode().forEachChild(xn,(u,f)=>{a=a.set(new ee(u),f)}),Ur(t,e,n,a,i,r,l,o)}else return e}else{let a=new oe(null);return s.foreach((u,f)=>{const g=_e(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Ur(t,e,n,a,i,r,l,o)}}function Pm(t,e,n,s,i){const r=e.serverCache,o=ku(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Uu(t,o,n,s,Hu,i)}function Om(t,e,n,s,i,r){let o;if(li(s,n)!=null)return e;{const l=new To(s,e,i),c=e.eventCache.getNode();let a;if(K(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oi(s,nn(e));else{const f=e.serverCache.getNode();T(f instanceof F,"serverChildren would be complete if leaf node"),u=wo(s,f)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let f=So(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=c.getImmediateChild(u)),f!=null?a=t.filter.updateChild(c,u,f,re(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,F.EMPTY_NODE,re(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oi(s,nn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||li(s,Q())!=null,Jn(e,a,o,t.filter.filtersNodes())}}/**
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
 */class Dm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Co(s.getIndex()),r=Xg(s);this.processor_=wm(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new kt(c,o.isFullyInitialized(),i.filtersNodes()),f=new kt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Mi(f,u),this.eventGenerator_=new rm(this.query_)}get query(){return this.query_}}function km(t){return t.viewCache_.serverCache.getNode()}function Mm(t){return ri(t.viewCache_)}function Fm(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function uc(t){return t.eventRegistrations_.length===0}function Lm(t,e){t.eventRegistrations_.push(e)}function hc(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function fc(t,e,n,s){e.type===ze.MERGE&&e.source.queryId!==null&&(T(nn(t.viewCache_),"We should always have a full cache before handling merges"),T(ri(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Tm(t.processor_,i,e,n,s);return Sm(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Vu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Wm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(Pu(n.getNode())),Vu(t,s,n.getNode(),e)}function Vu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return om(t.eventGenerator_,e,n,i)}/**
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
 */let ai;class ju{constructor(){this.views=new Map}}function Bm(t){T(!ai,"__referenceConstructor has already been defined"),ai=t}function Hm(){return T(ai,"Reference.ts has not been loaded"),ai}function Um(t){return t.views.size===0}function No(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),fc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(fc(o,e,n,s));return r}}function $u(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=oi(n,i?s:null),c=!1;l?c=!0:s instanceof F?(l=wo(n,s),c=!1):(l=F.EMPTY_NODE,c=!1);const a=Mi(new kt(l,c,!1),new kt(s,i,!1));return new Dm(e,a)}return o}function Vm(t,e,n,s,i,r){const o=$u(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Lm(o,n),Wm(o,n)}function jm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Mt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(hc(a,n,s)),uc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(hc(c,n,s)),uc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Mt(t)&&r.push(new(Hm())(e._repo,e._path)),{removed:r,events:o}}function Gu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ot(t,e){let n=null;for(const s of t.views.values())n=n||Fm(s,e);return n}function Ku(t,e){if(e._queryParams.loadsAllData())return Li(t);{const s=e._queryIdentifier;return t.views.get(s)}}function qu(t,e){return Ku(t,e)!=null}function Mt(t){return Li(t)!=null}function Li(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ui;function $m(t){T(!ui,"__referenceConstructor has already been defined"),ui=t}function Gm(){return T(ui,"Reference.ts has not been loaded"),ui}let Km=1;class dc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=Cm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zu(t,e,n,s,i){return um(t.pendingWriteTree_,e,n,s,i),i?Es(t,new tn(Du(),e,n)):[]}function Yt(t,e,n=!1){const s=hm(t.pendingWriteTree_,e);if(fm(t.pendingWriteTree_,e)){let r=new oe(null);return s.snap!=null?r=r.set(Q(),!0):Me(s.children,o=>{r=r.set(new ee(o),!0)}),Es(t,new ii(s.path,r,n))}else return[]}function bs(t,e,n){return Es(t,new tn(Eo(),e,n))}function qm(t,e,n){const s=oe.fromObject(n);return Es(t,new ds(Eo(),e,s))}function zm(t,e){return Es(t,new fs(Eo(),e))}function Ym(t,e,n){const s=Ao(t,n);if(s){const i=Po(s),r=i.path,o=i.queryId,l=Ne(r,e),c=new fs(Io(o),l);return Oo(t,r,c)}else return[]}function hi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||qu(o,e))){const c=jm(o,e,n,s);Um(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(g,y)=>Mt(y));if(u&&!f){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const y=Xm(g);for(let b=0;b<y.length;++b){const O=y[b],j=O.query,d=Xu(t,O);t.listenProvider_.startListening(Zn(j),ps(t,j),d.hashFn,d.onComplete)}}}!f&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(Zn(e),null):a.forEach(g=>{const y=t.queryToTagMap.get(Wi(g));t.listenProvider_.stopListening(Zn(g),y)}))}Zm(t,a)}return l}function Yu(t,e,n,s){const i=Ao(t,s);if(i!=null){const r=Po(i),o=r.path,l=r.queryId,c=Ne(o,e),a=new tn(Io(l),c,n);return Oo(t,o,a)}else return[]}function Qm(t,e,n,s){const i=Ao(t,s);if(i){const r=Po(i),o=r.path,l=r.queryId,c=Ne(o,e),a=oe.fromObject(n),u=new ds(Io(l),c,a);return Oo(t,o,u)}else return[]}function Vr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,y)=>{const b=Ne(g,i);r=r||Ot(y,b),o=o||Mt(y)});let l=t.syncPointTree_.get(i);l?(o=o||Mt(l),r=r||Ot(l,Q())):(l=new ju,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,b)=>{const O=Ot(b,Q());O&&(r=r.updateImmediateChild(y,O))}));const a=qu(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Wi(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const y=e0();t.queryToTagMap.set(g,y),t.tagToQueryMap.set(y,g)}const u=Fi(t.pendingWriteTree_,i);let f=Vm(l,e,n,u,r,c);if(!a&&!o&&!s){const g=Ku(l,e);f=f.concat(t0(t,e,g))}return f}function Ro(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ne(o,e),a=Ot(l,c);if(a)return a});return Lu(i,e,r,n,!0)}function Jm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const f=Ne(a,n);s=s||Ot(u,f)});let i=t.syncPointTree_.get(n);i?s=s||Ot(i,Q()):(i=new ju,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new kt(s,!0,!1):null,l=Fi(t.pendingWriteTree_,e._path),c=$u(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return Mm(c)}function Es(t,e){return Qu(e,t.syncPointTree_,null,Fi(t.pendingWriteTree_,Q()))}function Qu(t,e,n,s){if(K(t.path))return Ju(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Ot(i,Q()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Wu(s,o);r=r.concat(Qu(l,c,a,u))}return i&&(r=r.concat(No(i,t,s,n))),r}}function Ju(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Ot(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Wu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ju(u,l,c,a)))}),i&&(r=r.concat(No(i,t,s,n))),r}function Xu(t,e){const n=e.query,s=ps(t,n);return{hashFn:()=>(km(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ym(t,n._path,s):zm(t,n._path);{const r=J_(i,n);return hi(t,n,null,r)}}}}function ps(t,e){const n=Wi(e);return t.queryToTagMap.get(n)}function Wi(t){return t._path.toString()+"$"+t._queryIdentifier}function Ao(t,e){return t.tagToQueryMap.get(e)}function Po(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Oo(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Fi(t.pendingWriteTree_,e);return No(s,n,i,null)}function Xm(t){return t.fold((e,n,s)=>{if(n&&Mt(n))return[Li(n)];{let i=[];return n&&(i=Gu(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Gm())(t._repo,t._path):t}function Zm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Wi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function e0(){return Km++}function t0(t,e,n){const s=e._path,i=ps(t,e),r=Xu(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,f)=>{if(!K(a)&&u&&Mt(u))return[Li(u).query];{let g=[];return u&&(g=g.concat(Gu(u).map(y=>y.query))),Me(f,(y,b)=>{g=g.concat(b)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(Zn(u),ps(t,u))}}return o}/**
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
 */class Do{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Do(n)}node(){return this.node_}}class ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new ko(this.syncTree_,n)}node(){return Ro(this.syncTree_,this.path_)}}const n0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pc=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return s0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return i0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},s0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},i0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},r0=function(t,e,n,s){return Mo(e,new ko(n,t),s)},Zu=function(t,e,n){return Mo(t,new Do(e),n)};function Mo(t,e,n){const s=t.getPriority().val(),i=pc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=pc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(ue,(l,c)=>{const a=Mo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class Fo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Lo(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=$(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new Fo(i,s,r),n=re(n),i=$(n)}return s}function Nn(t){return t.node.value}function eh(t,e){t.node.value=e,jr(t)}function th(t){return t.node.childCount>0}function o0(t){return Nn(t)===void 0&&!th(t)}function Bi(t,e){Me(t.node.children,(n,s)=>{e(new Fo(n,t,s))})}function nh(t,e,n,s){n&&e(t),Bi(t,i=>{nh(i,e,!0)})}function l0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Is(t){return new ee(t.parent===null?t.name:Is(t.parent)+"/"+t.name)}function jr(t){t.parent!==null&&c0(t.parent,t.name,t)}function c0(t,e,n){const s=o0(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,jr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jr(t))}/**
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
 */const a0=/[\[\].#$\/\u0000-\u001F\u007F]/,u0=/[\[\].#$\u0000-\u001F\u007F]/,fr=10*1024*1024,sh=function(t){return typeof t=="string"&&t.length!==0&&!a0.test(t)},ih=function(t){return typeof t=="string"&&t.length!==0&&!u0.test(t)},h0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ih(t)},f0=function(t,e,n,s){Wo(ho(t,"value"),e,n)},Wo=function(t,e,n){const s=n instanceof ee?new Ag(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kt(s)+" with contents = "+e.toString());if(tu(e))throw new Error(t+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>fr/3&&Di(e)>fr)throw new Error(t+"contains a string greater than "+fr+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!sh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pg(s,o),Wo(t,l,s),Og(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},rh=function(t,e,n,s){if(!ih(n))throw new Error(ho(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},d0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rh(t,e,n)},oh=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},p0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!h0(n))throw new Error(ho(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class _0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!xo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function lh(t,e,n){Bo(t,n),ch(t,s=>xo(s,e))}function at(t,e,n){Bo(t,n),ch(t,s=>qe(s,e)||qe(e,s))}function ch(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(g0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function g0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&Ee("event: "+n.toString()),Tn(s)}}}/**
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
 */const m0="repo_interrupt",x0=25;class y0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new Fo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function v0(t,e,n){if(t.stats_=go(t.repoInfo_),t.forceRestClient_||tg())t.server_=new ni(t.repoInfo_,(s,i,r,o)=>{_c(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>gc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new gt(t.repoInfo_,e,(s,i,r,o)=>{_c(t,s,i,r,o)},s=>{gc(t,s)},s=>{b0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=og(t.repoInfo_,()=>new im(t.stats_,t.server_)),t.infoData_=new Zg,t.infoSyncTree_=new dc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=bs(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Uo(t,"connected",!1),t.serverSyncTree_=new dc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);at(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function C0(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ho(t){return n0({timestamp:C0(t)})}function _c(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ys(n,a=>xe(a));o=Qm(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=Yu(t.serverSyncTree_,r,c,i)}else if(s){const c=Ys(n,a=>xe(a));o=qm(t.serverSyncTree_,r,c)}else{const c=xe(n);o=bs(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ui(t,r)),at(t.eventQueue_,l,o)}function gc(t,e){Uo(t,"connected",e),e===!1&&w0(t)}function b0(t,e){Me(e,(n,s)=>{Uo(t,n,s)})}function Uo(t,e,n){const s=new ee("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=bs(t.infoSyncTree_,s,i);at(t.eventQueue_,s,r)}function ah(t){return t.nextWriteId_++}function E0(t,e,n){const s=Jm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Vr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bs(t.serverSyncTree_,e._path,r);else{const l=ps(t.serverSyncTree_,e);o=Yu(t.serverSyncTree_,e._path,r,l)}return at(t.eventQueue_,e._path,o),hi(t.serverSyncTree_,e,n,null,!0),r},i=>(Hi(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function I0(t,e,n,s,i){Hi(t,"set",{path:e.toString(),value:n,priority:s});const r=Ho(t),o=xe(n,s),l=Ro(t.serverSyncTree_,e),c=Zu(o,l,r),a=ah(t),u=zu(t.serverSyncTree_,e,c,a,!0);Bo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,y)=>{const b=g==="ok";b||ke("set at "+e+" failed: "+g);const O=Yt(t.serverSyncTree_,a,!b);at(t.eventQueue_,e,O),N0(t,i,g,y)});const f=ph(t,e);Ui(t,f),at(t.eventQueue_,f,[])}function w0(t){Hi(t,"onDisconnectEvents");const e=Ho(t),n=si();Lr(t.onDisconnect_,Q(),(i,r)=>{const o=r0(i,r,t.serverSyncTree_,e);Ou(n,i,o)});let s=[];Lr(n,Q(),(i,r)=>{s=s.concat(bs(t.serverSyncTree_,i,r));const o=ph(t,i);Ui(t,o)}),t.onDisconnect_=si(),at(t.eventQueue_,Q(),s)}function S0(t,e,n){let s;$(e._path)===".info"?s=Vr(t.infoSyncTree_,e,n):s=Vr(t.serverSyncTree_,e,n),lh(t.eventQueue_,e._path,s)}function mc(t,e,n){let s;$(e._path)===".info"?s=hi(t.infoSyncTree_,e,n):s=hi(t.serverSyncTree_,e,n),lh(t.eventQueue_,e._path,s)}function T0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(m0)}function Hi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function N0(t,e,n,s){e&&Tn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function uh(t,e,n){return Ro(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Vo(t,e=t.transactionQueueTree_){if(e||Vi(t,e),Nn(e)){const n=fh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&R0(t,Is(e),n)}else th(e)&&Bi(e,n=>{Vo(t,n)})}function R0(t,e,n){const s=n.map(a=>a.currentWriteId),i=uh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ne(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Hi(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(Yt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Vi(t,Lo(t.transactionQueueTree_,e)),Vo(t,t.transactionQueueTree_),at(t.eventQueue_,e,u);for(let g=0;g<f.length;g++)Tn(f[g])}else{if(a==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ke("transaction at "+c.toString()+" failed: "+a);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=a}Ui(t,e)}},o)}function Ui(t,e){const n=hh(t,e),s=Is(n),i=fh(t,n);return A0(t,i,s),s}function A0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Ne(n,c.path);let u=!1,f;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,f=c.abortReason,i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=x0)u=!0,f="maxretry",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=uh(t,c.path,o);c.currentInputSnapshot=g;const y=e[l].update(g.val());if(y!==void 0){Wo("transaction failed: Data returned ",y,c.path);let b=xe(y);typeof y=="object"&&y!=null&&vt(y,".priority")||(b=b.updatePriority(g.getPriority()));const j=c.currentWriteId,d=Ho(t),h=Zu(b,g,d);c.currentOutputSnapshotRaw=b,c.currentOutputSnapshotResolved=h,c.currentWriteId=ah(t),o.splice(o.indexOf(j),1),i=i.concat(zu(t.serverSyncTree_,c.path,h,c.currentWriteId,c.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,j,!0))}else u=!0,f="nodata",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0))}at(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}Vi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Tn(s[l]);Vo(t,t.transactionQueueTree_)}function hh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Nn(s)===void 0;)s=Lo(s,n),e=re(e),n=$(e);return s}function fh(t,e){const n=[];return dh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function dh(t,e,n){const s=Nn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Bi(e,i=>{dh(t,i,n)})}function Vi(t,e){const n=Nn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,eh(e,n.length>0?n:void 0)}Bi(e,s=>{Vi(t,s)})}function ph(t,e){const n=Is(hh(t,e)),s=Lo(t.transactionQueueTree_,e);return l0(s,i=>{dr(t,i)}),dr(t,s),nh(s,i=>{dr(t,i)}),n}function dr(t,e){const n=Nn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?eh(e,void 0):n.length=r+1,at(t.eventQueue_,Is(e),i);for(let o=0;o<s.length;o++)Tn(s[o])}}/**
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
 */function P0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function O0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const xc=function(t,e){const n=D0(t),s=n.namespace;n.domain==="firebase.com"&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new du(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},D0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=P0(t.substring(u,f)));const g=O0(t.substring(Math.min(t.length,f)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const y=e.slice(0,a);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class k0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class M0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class _h{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:bu(this._path)}get ref(){return new Ct(this._repo,this._path)}get _queryIdentifier(){const e=nc(this._queryParams),n=po(e);return n==="{}"?"default":n}get _queryObject(){return nc(this._queryParams)}isEqual(e){if(e=wn(e),!(e instanceof jo))return!1;const n=this._repo===e._repo,s=xo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Rg(this._path)}}class Ct extends jo{constructor(e,n){super(e,n,new bo,!1)}get parent(){const e=Iu(this._path);return e===null?null:new Ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=$r(this.ref,e);return new _s(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,$r(this.ref,s),ue)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ds(t,e){return t=wn(t),t._checkNotDeleted("ref"),e!==void 0?$r(t._root,e):t._root}function $r(t,e){return t=wn(t),$(t._path)===null?d0("child","path",e):rh("child","path",e),new Ct(t._repo,_e(t._path,e))}function F0(t){return oh("remove",t._path),gh(t,null)}function gh(t,e){t=wn(t),oh("set",t._path),f0("set",e,t._path);const n=new Oi;return I0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function L0(t){t=wn(t);const e=new _h(()=>{}),n=new ji(e);return E0(t._repo,t,n).then(s=>new _s(s,new Ct(t._repo,t._path),t._queryParams.getIndex()))}class ji{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new k0("value",this,new _s(e.snapshotNode,new Ct(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M0(this,e,n):null}matches(e){return e instanceof ji?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function W0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,f)=>{mc(t._repo,t,l),c(u,f)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new _h(n,r||void 0),l=new ji(o);return S0(t._repo,t,l),()=>mc(t._repo,t,l)}function B0(t,e,n,s){return W0(t,"value",e,n,s)}Bm(Ct);$m(Ct);/**
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
 */const H0="FIREBASE_DATABASE_EMULATOR_HOST",Gr={};let U0=!1;function V0(t,e,n,s){t.repoInfo_=new du(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function j0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xc(r,i),l=o.repoInfo,c;typeof process<"u"&&Wl&&(c=Wl[H0]),c?(r=`http://${c}?ns=${l.namespace}`,o=xc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new sg(t.name,t.options,e);p0("Invalid Firebase Database URL",o),K(o.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=G0(l,t,a,new ng(t,n));return new K0(u,t)}function $0(t,e){const n=Gr[e];(!n||n[t.key]!==t)&&xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),T0(t),delete n[t.key]}function G0(t,e,n,s){let i=Gr[e.name];i||(i={},Gr[e.name]=i);let r=i[t.toURLString()];return r&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new y0(t,U0,n,s),i[t.toURLString()]=r,r}class K0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(v0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ct(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&($0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xt("Cannot call "+e+" on a deleted database.")}}function q0(t=T_(),e){const n=b_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=hp("database");s&&z0(n,...s)}return n}function z0(t,e,n,s={}){t=wn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Qs(s,r.repoInfo_.emulatorOptions))return;xt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ws(Ws.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:fp(s.mockUserToken,t.app.options.projectId);o=new Ws(l)}V0(r,i,s,o)}/**
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
 */function Y0(t){H_(S_),Xs(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return j0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(Bl,Hl,t),gn(Bl,Hl,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Y0();function fi(){const t=["115357cqlwqj","17792BLSlgy","86886NXpwAc","92889ylDgeU","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","10060RqjdFu","1908852gbyzOy","156KruBgo","408WlbIZO","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","720775593565","iamwait.firebasestorage.app","140UOcxmX","iamwait.firebaseapp.com","6AwGpCm","1057XoUCff","1:720775593565:web:1a263bf6a87ecfea3817b4","G-3RRDNZ9ME5","4136hLnbbt"];return fi=function(){return t},fi()}const jt=di;(function(t,e){const n=di,s=t();for(;;)try{if(parseInt(n(351))/1+parseInt(n(345))/2*(parseInt(n(352))/3)+parseInt(n(358))/4*(parseInt(n(355))/5)+-parseInt(n(356))/6+parseInt(n(346))/7*(-parseInt(n(349))/8)+parseInt(n(353))/9*(parseInt(n(362))/10)+-parseInt(n(350))/11*(-parseInt(n(357))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(fi,194518);function di(t,e){const n=fi();return di=function(s,i){return s=s-344,n[s]},di(t,e)}const Q0={apiKey:jt(359),authDomain:jt(344),databaseURL:jt(354),projectId:"iamwait",storageBucket:jt(361),messagingSenderId:jt(360),appId:jt(347),measurementId:jt(348)},J0=Ya(Q0),ks=q0(J0),pr=St;(function(t,e){const n=St,s=t();for(;;)try{if(parseInt(n(227))/1*(parseInt(n(233))/2)+parseInt(n(207))/3*(parseInt(n(231))/4)+-parseInt(n(223))/5+-parseInt(n(204))/6*(parseInt(n(229))/7)+parseInt(n(217))/8*(-parseInt(n(230))/9)+parseInt(n(212))/10*(parseInt(n(221))/11)+parseInt(n(216))/12*(parseInt(n(203))/13)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(pi,987514);const mh=Zd("fbStore2",{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:4}),actions:{async getField(t){const e={ZMmlr:function(s,i){return s(i)},XOgNl:function(s,i){return s+i},rpeBL:function(s,i){return s+i}},n=Ds(ks,t);return L0(n).then(s=>{const i=St;if(s[i(225)]()){const r=s[i(213)]();return e[i(211)](Bn,e[i(234)](">>> Данные по "+t+i(201),JSON.stringify(r))),r}else e[i(211)](Bn,e.rpeBL(t,i(199)))})},async setField(t,e){const n=St,s={fhlCi:function(r,o){return r(o)},JKjru:function(r,o){return r+o},Fgxyr:n(208),CPtpL:n(218),uEjot:function(r,o,l){return r(o,l)}},i=Ds(ks,t);return s[n(202)](gh,i,e)[n(224)](()=>{const r=n;s[r(228)](Bn,s[r(210)](t,s.Fgxyr))}).catch(r=>{const o=n;console[o(206)](s[o(200)],r)})},async onValue(t){const e=St,n={AkdUQ:function(i,r){return i(r)},RTQlj:function(i,r,o){return i(r,o)}},s=n[e(219)](Ds,ks,t);n[e(219)](B0,s,i=>{const r=e;n[r(214)](Bn,"########### ########## Данные "+t+r(215)),this[r(222)]=i[r(213)]()})},async removeField(t){const e=St,n={zDyAk:function(i,r){return i(r)}};console[e(209)](t);const s=Ds(ks,t);n[e(220)](F0,s)[e(224)](()=>{const i=e;n[i(220)](Bn,i(235)+t+i(232))})}}});function St(t,e){const n=pi();return St=function(s,i){return s=s-199,n[s]},St(t,e)}function pi(){const t=[" = ","uEjot","13iOYAbT","126FqvbZi","%c ","error","3nQyozy"," -  данные записаны","log","JKjru","ZMmlr","16298530bOwYTS","val","AkdUQ"," на прослушке","13094844HIAfCc","32FKciif","Ошибка записи данных: ","RTQlj","zDyAk","11eajLVN","lookField","3592550itEEFI","then","exists","color: darkgreen","10krICVY","fhlCi","512449dOamQm","1278090dIIToU","182564rJWgfD"," удалены!","208936mtQUZl","XOgNl","Данные "," : данные не найдены","CPtpL"];return pi=function(){return t},pi()}const Bn=t=>console[pr(209)](pr(205)+t,pr(226)),_i=rt;(function(t,e){const n=rt,s=t();for(;;)try{if(parseInt(n(334))/1*(-parseInt(n(312))/2)+-parseInt(n(375))/3+parseInt(n(267))/4+-parseInt(n(358))/5*(-parseInt(n(418))/6)+parseInt(n(293))/7+-parseInt(n(268))/8*(-parseInt(n(406))/9)+-parseInt(n(366))/10*(-parseInt(n(393))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,385961);function rt(t,e){const n=gi();return rt=function(s,i){return s=s-256,n[s]},rt(t,e)}const X0={key:0},Z0={key:0},ex=[_i(381)],tx={key:1},nx={key:0},sx=[_i(381)],ix={key:1,class:"red-notice"},rx={key:2},ox={key:3},lx={key:4},cx=gf({__name:_i(395),props:{game:{}},setup(t){const e=_i,n={VgevY:e(328),ssVgQ:function(d){return d()},tQpgN:function(d,h){return d+h},KhyaY:function(d,h){return d+h},jCJJC:e(286),ljEKT:e(379),AwSgE:function(d,h){return d+h},ckXRw:e(321),vAsjq:e(348),zDxwk:e(259),GWKXN:function(d,h){return d>h},Ptptn:function(d,h){return d==h},fwich:function(d){return d()},brJZT:e(276),UNrHf:e(282),GzXVL:function(d,h){return d+h},MXqFY:e(374),YAOrx:function(d,h){return d+h},EEsNU:e(403),Bwrmr:function(d,h){return d+h},eXRmI:function(d,h){return d+h},tHjTP:function(d,h){return d+h},jBOGU:e(331),qWdEj:e(399),NcIom:function(d,h){return d+h},DeRWt:function(d,h,_){return d(h,_)},jNJPG:function(d,h,_,x,S,ae){return d(h,_,x,S,ae)},WVdbJ:e(272),DwDPS:"green-bt",tjbfY:function(d){return d()},Jfjxm:function(d,h){return d(h)},tHGXY:function(d,h,_,x,S){return d(h,_,x,S)},zfiNa:e(397),xrZLR:function(d,h){return d+h},JOqJr:function(d,h){return d+h},pQwSq:" : ",cekuN:function(d,h){return d(h)},AGRTh:function(d,h,_,x,S){return d(h,_,x,S)},KqBvk:function(d,h){return d+h},CBODS:e(269),uWndl:function(d,h){return d(h)},UeFay:function(d,h){return d(h)},kOTwH:function(d,h,_,x,S){return d(h,_,x,S)},jQOst:function(d,h){return d(h)},IAiLU:function(d){return d()},tghvy:e(411),uZXqp:e(288),VWVWS:e(326),aMUfn:function(d,h,_,x){return d(h,_,x)},nHPyF:e(389),Omjqj:e(407),tKePE:e(347),vlDno:"* тут можно поменять ваш Никнейм",IPkvl:function(d,h){return d>h},ylJHT:function(d){return d()},RZNAo:e(310),hllJa:function(d,h){return d(h)},XDctH:function(d,h,_,x,S){return d(h,_,x,S)},yEIhB:function(d,h,_,x){return d(h,_,x)},jPzcK:e(413),KpRrN:function(d,h,_,x,S){return d(h,_,x,S)},pItdq:function(d,h,_){return d(h,_)},uTEcX:function(d,h){return d===h},ULKOQ:e(318),PfKJz:function(d){return d()},PEHxQ:function(d,h,_,x){return d(h,_,x)},fItUH:function(d){return d()},vfFos:function(d,h){return d===h},WybdP:function(d,h){return d(h)},vBEEt:function(d){return d()},LFMTg:e(412),fSmfS:function(d,h,_,x,S){return d(h,_,x,S)},AVRIs:function(d,h){return d(h)},DiRlN:function(d,h,_,x,S){return d(h,_,x,S)},WqOZT:e(298),jqhfg:function(d,h,_){return d(h,_)},UXvSm:function(d,h,_,x,S){return d(h,_,x,S)},ZuroW:function(d,h,_,x,S){return d(h,_,x,S)},wcfIp:function(d,h,_,x,S){return d(h,_,x,S)},VUbsD:function(d,h,_,x){return d(h,_,x)},QyBvZ:function(d,h,_,x){return d(h,_,x)},rlGum:function(d,h,_,x){return d(h,_,x)},vFjwQ:e(376),mlkoe:" с игроком ",rVcZX:function(d,h,_,x,S){return d(h,_,x,S)},hrPHE:e(301),RzBvV:function(d,h,_,x,S){return d(h,_,x,S)},RedNh:function(d){return d()},iciHP:function(d,h){return d(h)},DrMLE:function(d,h){return d(h)},DaDVX:function(d,h){return d(h)},JWWuG:function(d,h,_){return d(h,_)}},s=n[e(364)](mh),i=n[e(387)](qt,localStorage[e(324)](n[e(292)])),r=n[e(360)](qt,[]),o=n[e(417)](qt),l=n.tjbfY(qt),c=n[e(349)](qt,""),a=function(){const d=e;s[d(299)]=i[d(416)],i[d(416)]&&localStorage[d(316)](n[d(292)],i[d(416)])};function u(){const d=e,h={SqawM:function(_){return n[rt(315)](_)},PHScw:function(_,x){return _+x},JKNgG:function(_,x){return n[rt(386)](_,x)},JMKKv:function(_,x){return n[rt(385)](_,x)},pCIWs:n.jCJJC};console[d(317)](n[d(336)],t[d(258)]),s[d(303)](n.AwSgE(n[d(265)](t[d(258)],n[d(280)]),s[d(352)])).then(_=>{const x=d;_?(o[x(416)]={id:_.id,name:h[x(351)](_[x(355)],x(382))+_.id},s[x(343)]=5,s[x(303)](h[x(400)](h.JMKKv(t[x(258)],h[x(277)]),_.game))[x(410)](S=>{const ae=x;c[ae(416)]=S})):(h[x(368)](g),s[x(343)]=1)})}const f=function(d){const h=e;console[h(317)](n[h(273)],d),r[h(416)]=[],s[h(343)]=1;let _=!1;d&&Object[h(392)](d)[h(256)](x=>{const S=h;if(console.log(n[S(356)],x),console[S(317)](n[S(370)],d[x]),n.GWKXN(s.stage,3))return!1;if(x===String(s[S(352)])&&x&&(_=!0,s[S(343)]!==3&&(s[S(343)]=2),d[x][S(380)])){s[S(343)]=4;let ae=localStorage[S(324)]("Opponent");ae&&(o.value=JSON[S(271)](ae)),d[x][S(380)]&&(o[S(416)]={id:d[x].id2,name:d[x][S(287)]})}n.Ptptn(d[x][S(380)],s[S(352)])&&(_=!0,s[S(343)]=3),s[S(343)]>2&&!_&&location[S(306)](),d[x][S(362)]&&n[S(333)](j),x&&d[x]&&r[S(416)][S(329)]({id:x,name:d[x].name})})};n[e(300)](_n,()=>s[e(352)],d=>d&&setTimeout(u,500));function g(){const d=e;s.onValue(n[d(390)]).then(h=>f(h)),_n(()=>s.lookField,h=>f(h))}function y(){const d=e;s[d(323)](n[d(373)](n[d(353)],s[d(352)]),{name:s[d(299)]||s.myName})}function b(d){const h=e;if(n[h(313)](d.id,s[h(352)]))return l[h(416)]=!0,setTimeout(()=>l[h(416)]=!1,1500),!1;s.setField(n[h(419)](n[h(353)],d.id),{name:d.name,id2:s[h(352)],name2:s[h(299)]||s[h(341)]}).then(_=>{const x=h;console[x(317)](x(279),_),o[x(416)]={id:d.id,name:d.name},s[x(343)]=3})}function O(d){const h=e;d&&o[h(416)]&&(n[h(333)](alert),s[h(323)](n[h(291)](n.MXqFY,o.value.id),{name:o[h(416)][h(355)],id2:s[h(352)],name2:s[h(341)],accept:!0})[h(410)](_=>{const x=h;let S={id:o[x(416)].id,name:o.value.name};localStorage[x(316)](n[x(330)],JSON.stringify(S)),console[x(317)](x(279),_)})),!d&&s[h(323)](h(374)+s.myId,{name:s.nickName||s[h(341)]})[h(410)](()=>s[h(343)]=2)}function j(){var S,ae,V;const d=e,h={mvyOQ:function(D,H){return n[rt(274)](D,H)},vMtsm:n.MXqFY,UrASJ:function(D,H){return D+H}};let _=Date[d(337)](),x=String(o[d(416)].id);n.GWKXN(o.value.id,s[d(352)])?x+=n[d(265)]("::",s[d(352)]):x=n[d(307)](s.myId,"::")+x,console[d(317)](n[d(270)],x),console.log(d(304)),s.setField(n[d(372)]+s.myId,{id:(S=o[d(416)])==null?void 0:S.id,name:(ae=o[d(416)])==null?void 0:ae.name,game:x,date:_}),s[d(323)](n[d(260)](d(399),(V=o.value)==null?void 0:V.id),{id:s[d(352)],name:s[d(341)],game:x,date:_}),s[d(323)](n.YAOrx("g1/game/",x),{game:d(294)}),n[d(308)](setTimeout,()=>{var H;const D=d;s[D(338)](h[D(378)](h[D(346)],(H=o[D(416)])==null?void 0:H.id)),s[D(338)](h[D(409)]("g1/look/",s[D(352)])),location[D(306)]()},2e3)}return(d,h)=>{var S,ae;const _=e,x={VyOSD:function(V){return n[rt(319)](V)},vLlkS:function(V,D,H,le,Re,He){return n[rt(311)](V,D,H,le,Re,He)},MCyKe:_(272),iAZZC:n[_(309)],BMakY:function(V,D){return n.Jfjxm(V,D)}};return ve(),Pe(Ve,null,[h[34]||(h[34]=n.tHGXY(W,"hr",null,null,-1)),h[35]||(h[35]=W("i",null,n[_(345)],-1)),h[36]||(h[36]=W("br",null,null,-1)),n[_(308)](nt,n[_(265)](n[_(274)](n[_(322)](n[_(320)](" ",Ge(Ue(s)[_(352)])),n[_(396)]),Ge(n[_(257)](Ue,s)[_(341)]))," "),1),h[37]||(h[37]=n[_(377)](W,"br",null,null,-1)),n[_(308)](nt,n[_(262)](n[_(354)],n[_(398)](Ge,n[_(350)](Ue,s).stage))+" ",1),h[38]||(h[38]=n[_(314)](W,"hr",null,null,-1)),n.jQOst(Ue,s)[_(343)]===1?(n[_(297)](ve),Pe(n[_(344)],X0,[W("p",null,n.tHjTP(n[_(335)],n.Jfjxm(Ge,n[_(290)](Ue,s)[_(299)]||n[_(275)](Ue,s)[_(341)]))+n[_(391)],1),n[_(363)](W,"p",null,[n[_(308)](df,n[_(314)](W,"input",{"onUpdate:modelValue":h[0]||(h[0]=V=>i[_(416)]=V),maxlength:"16",style:{"font-size":"larger",padding:n[_(401)],"text-align":n[_(402)]},onInput:h[1]||(h[1]=V=>a()),placeholder:n.tKePE},null,544),[[Ud,i.value]])]),h[8]||(h[8]=n[_(377)](W,n[_(344)],{class:_(408)},n[_(369)],-1)),r[_(416)]&&n[_(332)](r[_(416)][_(325)],1)?(n.ylJHT(ve),n[_(363)](Pe,_(411),Z0,[h[5]||(h[5]=W("h3",null,n[_(357)],-1)),(n.hllJa(ve,!0),Pe(Ve,null,n[_(308)](Zo,r.value,V=>{const D=_;return x.VyOSD(ve),x[D(383)](Pe,x[D(342)],{class:x[D(414)],key:V.id,onClick:H=>b(V)},x[D(278)](Ge,V[D(355)]),9,ex)}),128)),h[6]||(h[6]=n[_(367)](W,"br",null,null,-1)),h[7]||(h[7]=W("br",null,null,-1))])):n[_(308)](bt,"",!0),n[_(264)](W,"button",{class:_(263),onClick:h[2]||(h[2]=V=>y())},n[_(302)]),h[9]||(h[9]=W("br",null,null,-1)),h[10]||(h[10]=n[_(371)](W,"br",null,null,-1))])):n[_(404)](bt,"",!0),n.uTEcX(n[_(290)](Ue,s)[_(343)],2)?(n[_(394)](ve),n.yEIhB(Pe,n.tghvy,tx,[h[14]||(h[14]=n[_(405)](W,"p",null,n[_(283)],-1)),r.value[_(325)]?(n[_(305)](ve),n[_(340)](Pe,n[_(344)],nx,[h[11]||(h[11]=n.XDctH(W,"h3",null,_(310),-1)),(n[_(350)](ve,!0),Pe(Ve,null,Zo(r[_(416)],V=>{const D=_;return n[D(333)](ve),n.jNJPG(Pe,n[D(327)],{class:n[D(309)],key:V.id,onClick:H=>b(V)},Ge(V[D(355)]),9,sx)}),128)),h[12]||(h[12]=n[_(405)](W,"br",null,null,-1)),h[13]||(h[13]=n[_(367)](W,"br",null,null,-1))])):bt("",!0),l.value?(n.fItUH(ve),n[_(264)](Pe,n[_(344)],ix,"* нельзя выбирать себя")):bt("",!0)])):n.DeRWt(bt,"",!0),n[_(339)](n[_(420)](Ue,s).stage,3)?(n[_(284)](ve),Pe(n.tghvy,rx,[W("p",null,[h[15]||(h[15]=n.uWndl(nt,n[_(289)])),h[16]||(h[16]=n[_(384)](W,"br",null,null,-1)),n.AGRTh(W,"b",null,n[_(281)](Ge,(S=o[_(416)])==null?void 0:S[_(355)]),1),h[17]||(h[17]=n.fwich(nt)),h[18]||(h[18]=n[_(365)](W,"br",null,null,-1)),h[19]||(h[19]=n[_(281)](nt,n[_(361)]))])])):n.jqhfg(bt,"",!0),n[_(295)](Ue,s)[_(343)]===4&&((ae=o[_(416)])!=null&&ae.id)?(n[_(333)](ve),n.aMUfn(Pe,n.tghvy,ox,[h[20]||(h[20]=nt(" Вас выбрал игрок: ")),h[21]||(h[21]=n.UXvSm(W,"br",null,null,-1)),h[22]||(h[22]=n.ZuroW(W,"br",null,null,-1)),n[_(405)](W,"b",null,n[_(295)](Ge,o[_(416)][_(355)]),1),h[23]||(h[23]=W("br",null,null,-1)),h[24]||(h[24]=n.wcfIp(W,"br",null,null,-1)),n[_(359)](W,"button",{class:n[_(309)],onClick:h[3]||(h[3]=V=>O(!1))},"Отказаться"),n[_(388)](W,n[_(327)],{class:n[_(309)],onClick:h[4]||(h[4]=V=>O(!0))},"Согласиться")])):bt("",!0),n[_(281)](Ue,s)[_(343)]===5&&o[_(416)]?(n[_(394)](ve),n[_(415)](Pe,n[_(344)],lx,[h[25]||(h[25]=W("h3",null,n[_(266)],-1)),h[26]||(h[26]=n.hllJa(nt,n[_(296)])),h[27]||(h[27]=n[_(365)](W,"br",null,null,-1)),W("b",null,Ge(o.value.name),1),h[28]||(h[28]=W("br",null,null,-1)),h[29]||(h[29]=n.rVcZX(W,"br",null,null,-1)),h[30]||(h[30]=n[_(281)](nt,n[_(285)])),h[31]||(h[31]=W("br",null,null,-1)),nt(n[_(320)](n[_(320)](" ",Ge(c[_(416)]))," "),1),h[32]||(h[32]=n[_(261)](W,"br",null,null,-1)),h[33]||(h[33]=W("br",null,null,-1))])):n.jqhfg(bt,"",!0),h[39]||(h[39]=W("br",null,null,-1)),h[40]||(h[40]=W("br",null,null,-1))],64)}}});function gi(){const t=["NcIom","RzBvV","KqBvk","red-bt","yEIhB","AwSgE","vFjwQ","28808TXEAHx","80HBTLIr"," stage:","jBOGU","parse","button","brJZT","eXRmI","Jfjxm",">>>> ANALIZ ","pCIWs","BMakY","res","ckXRw","AVRIs","g1/look","ULKOQ","vBEEt","hrPHE","/game/","name2"," Привет, ","LFMTg","jQOst","Bwrmr","VgevY","3459134MfhxsY","ВСЕ НАСТРОЙКИ ИГРЫ","hllJa","mlkoe","IAiLU","жду пока не откликнится ","nickName","JWWuG"," Контекс игры:","jPzcK","getField","> >> > >> gotoStartgane","PfKJz","reload","tHjTP","DeRWt","DwDPS","Список желающих играть:","jNJPG","126422sJkXdz","Ptptn","kOTwH","ssVgQ","setItem","log","Добавился в список, жду","tjbfY","JOqJr","/play/","xrZLR","setField","getItem","length"," ! ","WVdbJ","myNickName","push","EEsNU","gameLink","IPkvl","fwich","11RCcJBh","uZXqp","ljEKT","now","removeField","vfFos","PEHxQ","myName","MCyKe","stage","tghvy","zfiNa","vMtsm","Сменить nickName",">>> ","DaDVX","UeFay","PHScw","myId","MXqFY","CBODS","name","vAsjq","RZNAo","1212540FFrbdY","VUbsD","DrMLE","WqOZT","accept","aMUfn","RedNh","DiRlN","13890YMwQNG","XDctH","SqawM","vlDno","zDxwk","KpRrN","qWdEj","GzXVL","g1/look/","2205153kVNlPP","Играем","AGRTh","mvyOQ","game = ","id2","onClick","::::","vLlkS","fSmfS","KhyaY","tQpgN","iciHP","QyBvZ","4px","UNrHf","VWVWS","keys","627GQhJeL","ylJHT","BinderComp","pQwSq","::::::: Связывание :::::::","uWndl","g1/play/","JKNgG","nHPyF","Omjqj","Opponent","pItdq","tHGXY","675702fxHeLV","center","red-notice","UrASJ","then","div"," Выбрал игрока "," Зарегистрироваться в поиске ","iAZZC","rlGum","value","fItUH","12TlneDy","YAOrx","WybdP","forEach","cekuN","game","==== res[el]"];return gi=function(){return t},gi()}const ax={class:"game"},ux={__name:"RockPaperSScissors",setup(t){return(e,n)=>(ve(),Pe("div",ax,[n[0]||(n[0]=W("h1",null,"♕",-1)),n[1]||(n[1]=W("h2",null,null,-1)),W("div",null,[lt(cx,{game:"g1"})])]))}},hx=ep(ux,[["__scopeId","data-v-7afa5ccc"]]),fx={__name:"App",setup(t){const e=mh();let n=Xh(hx);return ia(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=953446309)},500))}),(s,i)=>(ve(),Sa(Rf(Ue(n))))}};function mi(t,e){const n=xi();return mi=function(s,i){return s=s-418,n[s]},mi(t,e)}const yc=mi;(function(t,e){const n=mi,s=t();for(;;)try{if(parseInt(n(420))/1+parseInt(n(427))/2+parseInt(n(422))/3*(parseInt(n(419))/4)+-parseInt(n(426))/5+-parseInt(n(421))/6+parseInt(n(428))/7*(-parseInt(n(425))/8)+-parseInt(n(418))/9*(parseInt(n(424))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,921407);function xi(){const t=["use","160IhqIMj","320wFlMsk","1489860BmbrVZ","3475938SruXKh","73031trZeCd","mount","859644YZyKHC","728716hQCNUg","1414171bGMioW","7574628YIEMys","21ZqiquP"];return xi=function(){return t},xi()}const dx=qd(),vc=$d(fx);vc[yc(423)](dx),vc[yc(429)]("#app");
