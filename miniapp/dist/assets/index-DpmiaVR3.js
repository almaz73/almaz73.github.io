(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Lr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},un=[],nt=()=>{},ah=()=>!1,ui=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Br=t=>t.startsWith("onUpdate:"),xe=Object.assign,Wr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ch=Object.prototype.hasOwnProperty,q=(t,e)=>ch.call(t,e),M=Array.isArray,hn=t=>hi(t)==="[object Map]",ua=t=>hi(t)==="[object Set]",k=t=>typeof t=="function",he=t=>typeof t=="string",Dt=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",ha=t=>(le(t)||k(t))&&k(t.then)&&k(t.catch),fa=Object.prototype.toString,hi=t=>fa.call(t),uh=t=>hi(t).slice(8,-1),da=t=>hi(t)==="[object Object]",Ur=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hn=Lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hh=/-(\w)/g,We=fi(t=>t.replace(hh,(e,n)=>n?n.toUpperCase():"")),fh=/\B([A-Z])/g,en=fi(t=>t.replace(fh,"-$1").toLowerCase()),di=fi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fi=fi(t=>t?`on${di(t)}`:""),It=(t,e)=>!Object.is(t,e),Ds=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},pa=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},rr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uo;const pi=()=>Uo||(Uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _i(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?gh(s):_i(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||le(t))return t}const dh=/;(?![^(]*\))/g,ph=/:([^]+)/,_h=/\/\*[^]*?\*\//g;function gh(t){const e={};return t.replace(_h,"").split(dh).forEach(n=>{if(n){const s=n.split(ph);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hr(t){let e="";if(he(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=Hr(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yh=Lr(mh);function _a(t){return!!t||t===""}const ga=t=>!!(t&&t.__v_isRef===!0),Ue=t=>he(t)?t:t==null?"":M(t)||le(t)&&(t.toString===fa||!k(t.toString))?ga(t)?Ue(t.value):JSON.stringify(t,ma,2):String(t),ma=(t,e)=>ga(e)?ma(t,e.value):hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Li(s,r)+" =>"]=i,n),{})}:ua(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Li(n))}:Dt(e)?Li(e):le(e)&&!M(e)&&!da(e)?String(e):e,Li=(t,e="")=>{var n;return Dt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class ya{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function va(t){return new ya(t)}function Ca(){return we}function vh(t,e=!1){we&&we.cleanups.push(t)}let ne;const Bi=new WeakSet;class ba{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bi.has(this)&&(Bi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ho(this),Sa(this);const e=ne,n=je;ne=this,je=!0;try{return this.fn()}finally{Ia(this),ne=e,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jr(e);this.deps=this.depsTail=void 0,Ho(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){or(this)&&this.run()}get dirty(){return or(this)}}let Ea=0,$n,Vn;function wa(t,e=!1){if(t.flags|=8,e){t.next=Vn,Vn=t;return}t.next=$n,$n=t}function $r(){Ea++}function Vr(){if(--Ea>0)return;if(Vn){let e=Vn;for(Vn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$n;){let e=$n;for($n=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ia(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),jr(s),Ch(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function or(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ta(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ta(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===es))return;t.globalVersion=es;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!or(t)){t.flags&=-3;return}const n=ne,s=je;ne=t,je=!0;try{Sa(t);const i=t.fn(t._value);(e.version===0||It(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,je=s,Ia(t),t.flags&=-3}}function jr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)jr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ch(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let je=!0;const xa=[];function Mt(){xa.push(je),je=!1}function kt(){const t=xa.pop();je=t===void 0?!0:t}function Ho(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let es=0;class bh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!je||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new bh(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Na(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,es++,this.notify(e)}notify(e){$r();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vr()}}}function Na(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Na(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Bs=new WeakMap,Kt=Symbol(""),lr=Symbol(""),ts=Symbol("");function Ce(t,e,n){if(je&&ne){let s=Bs.get(t);s||Bs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Gr),i.map=s,i.key=n),i.track()}}function ut(t,e,n,s,i,r){const o=Bs.get(t);if(!o){es++;return}const l=a=>{a&&a.trigger()};if($r(),e==="clear")o.forEach(l);else{const a=M(t),c=a&&Ur(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===ts||!Dt(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(ts)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Kt)),hn(t)&&l(o.get(lr)));break;case"delete":a||(l(o.get(Kt)),hn(t)&&l(o.get(lr)));break;case"set":hn(t)&&l(o.get(Kt));break}}Vr()}function Eh(t,e){const n=Bs.get(t);return n&&n.get(e)}function nn(t){const e=G(t);return e===t?e:(Ce(e,"iterate",ts),Ge(t)?e:e.map(Se))}function Kr(t){return Ce(t=G(t),"iterate",ts),t}const wh={__proto__:null,[Symbol.iterator](){return Wi(this,Symbol.iterator,Se)},concat(...t){return nn(this).concat(...t.map(e=>M(e)?nn(e):e))},entries(){return Wi(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return at(this,"every",t,e,void 0,arguments)},filter(t,e){return at(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return at(this,"find",t,e,Se,arguments)},findIndex(t,e){return at(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return at(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return at(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return at(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ui(this,"includes",t)},indexOf(...t){return Ui(this,"indexOf",t)},join(t){return nn(this).join(t)},lastIndexOf(...t){return Ui(this,"lastIndexOf",t)},map(t,e){return at(this,"map",t,e,void 0,arguments)},pop(){return On(this,"pop")},push(...t){return On(this,"push",t)},reduce(t,...e){return $o(this,"reduce",t,e)},reduceRight(t,...e){return $o(this,"reduceRight",t,e)},shift(){return On(this,"shift")},some(t,e){return at(this,"some",t,e,void 0,arguments)},splice(...t){return On(this,"splice",t)},toReversed(){return nn(this).toReversed()},toSorted(t){return nn(this).toSorted(t)},toSpliced(...t){return nn(this).toSpliced(...t)},unshift(...t){return On(this,"unshift",t)},values(){return Wi(this,"values",Se)}};function Wi(t,e,n){const s=Kr(t),i=s[e]();return s!==t&&!Ge(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Sh=Array.prototype;function at(t,e,n,s,i,r){const o=Kr(t),l=o!==t&&!Ge(t),a=o[e];if(a!==Sh[e]){const h=a.apply(t,r);return l?Se(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,Se(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function $o(t,e,n,s){const i=Kr(t);let r=n;return i!==t&&(Ge(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Se(l),a,t)}),i[e](r,...s)}function Ui(t,e,n){const s=G(t);Ce(s,"iterate",ts);const i=s[e](...n);return(i===-1||i===!1)&&Yr(n[0])?(n[0]=G(n[0]),s[e](...n)):i}function On(t,e,n=[]){Mt(),$r();const s=G(t)[e].apply(t,n);return Vr(),kt(),s}const Ih=Lr("__proto__,__v_isRef,__isVue"),Ra=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function Th(t){Dt(t)||(t=String(t));const e=G(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Aa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Fh:Ma:r?Da:Oa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=M(e);if(!i){let a;if(o&&(a=wh[n]))return a;if(n==="hasOwnProperty")return Th}const l=Reflect.get(e,n,ce(e)?e:s);return(Dt(n)?Ra.has(n):Ih(n))||(i||Ce(e,"get",n),r)?l:ce(l)?o&&Ur(n)?l:l.value:le(l)?i?ka(l):gi(l):l}}class Pa extends Aa{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Yt(r);if(!Ge(s)&&!Yt(s)&&(r=G(r),s=G(s)),!M(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=M(e)&&Ur(n)?Number(n)<e.length:q(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===G(i)&&(o?It(s,r)&&ut(e,"set",n,s):ut(e,"add",n,s)),l}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ut(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Dt(n)||!Ra.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",M(e)?"length":Kt),Reflect.ownKeys(e)}}class xh extends Aa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nh=new Pa,Rh=new xh,Ah=new Pa(!0);const ar=t=>t,Ns=t=>Reflect.getPrototypeOf(t);function Ph(t,e,n){return function(...s){const i=this.__v_raw,r=G(i),o=hn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?ar:e?cr:Se;return!e&&Ce(r,"iterate",a?lr:Kt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Oh(t,e){const n={get(i){const r=this.__v_raw,o=G(r),l=G(i);t||(It(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:a}=Ns(o),c=e?ar:t?cr:Se;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(G(i),"iterate",Kt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=G(r),l=G(i);return t||(It(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=G(l),c=e?ar:t?cr:Se;return!t&&Ce(a,"iterate",Kt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return xe(n,t?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(i){!e&&!Ge(i)&&!Yt(i)&&(i=G(i));const r=G(this);return Ns(r).has.call(r,i)||(r.add(i),ut(r,"add",i,i)),this},set(i,r){!e&&!Ge(r)&&!Yt(r)&&(r=G(r));const o=G(this),{has:l,get:a}=Ns(o);let c=l.call(o,i);c||(i=G(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?It(r,u)&&ut(o,"set",i,r):ut(o,"add",i,r),this},delete(i){const r=G(this),{has:o,get:l}=Ns(r);let a=o.call(r,i);a||(i=G(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&ut(r,"delete",i,void 0),c},clear(){const i=G(this),r=i.size!==0,o=i.clear();return r&&ut(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ph(i,t,e)}),n}function zr(t,e){const n=Oh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const Dh={get:zr(!1,!1)},Mh={get:zr(!1,!0)},kh={get:zr(!0,!1)};const Oa=new WeakMap,Da=new WeakMap,Ma=new WeakMap,Fh=new WeakMap;function Lh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bh(t){return t.__v_skip||!Object.isExtensible(t)?0:Lh(uh(t))}function gi(t){return Yt(t)?t:qr(t,!1,Nh,Dh,Oa)}function Wh(t){return qr(t,!1,Ah,Mh,Da)}function ka(t){return qr(t,!0,Rh,kh,Ma)}function qr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Bh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function zt(t){return Yt(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Yt(t){return!!(t&&t.__v_isReadonly)}function Ge(t){return!!(t&&t.__v_isShallow)}function Yr(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Qr(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&pa(t,"__v_skip",!0),t}const Se=t=>le(t)?gi(t):t,cr=t=>le(t)?ka(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function ge(t){return Fa(t,!1)}function Uh(t){return Fa(t,!0)}function Fa(t,e){return ce(t)?t:new Hh(t,e)}class Hh{constructor(e,n){this.dep=new Gr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:G(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ge(e)||Yt(e);e=s?e:G(e),It(e,n)&&(this._rawValue=e,this._value=s?e:Se(e),this.dep.trigger())}}function ft(t){return ce(t)?t.value:t}const $h={get:(t,e,n)=>e==="__v_raw"?t:ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function La(t){return zt(t)?t:new Proxy(t,$h)}function Vh(t){const e=M(t)?new Array(t.length):{};for(const n in t)e[n]=Gh(t,n);return e}class jh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Eh(G(this._object),this._key)}}function Gh(t,e,n){const s=t[e];return ce(s)?s:new jh(t,e,n)}class Kh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return wa(this,!0),!0}get value(){const e=this.dep.track();return Ta(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zh(t,e,n=!1){let s,i;return k(t)?s=t:(s=t.get,i=t.set),new Kh(s,i,n)}const As={},Ws=new WeakMap;let Ut;function qh(t,e=!1,n=Ut){if(n){let s=Ws.get(n);s||Ws.set(n,s=[]),s.push(t)}}function Yh(t,e,n=X){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=A=>i?A:Ge(A)||i===!1||i===0?ht(A,1):ht(A);let u,h,d,_,m=!1,x=!1;if(ce(t)?(h=()=>t.value,m=Ge(t)):zt(t)?(h=()=>c(t),m=!0):M(t)?(x=!0,m=t.some(A=>zt(A)||Ge(A)),h=()=>t.map(A=>{if(ce(A))return A.value;if(zt(A))return c(A);if(k(A))return a?a(A,2):A()})):k(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Mt();try{d()}finally{kt()}}const A=Ut;Ut=u;try{return a?a(t,3,[_]):t(_)}finally{Ut=A}}:h=nt,e&&i){const A=h,z=i===!0?1/0:i;h=()=>ht(A(),z)}const W=Ca(),U=()=>{u.stop(),W&&W.active&&Wr(W.effects,u)};if(r&&e){const A=e;e=(...z)=>{A(...z),U()}}let Y=x?new Array(t.length).fill(As):As;const Q=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const z=u.run();if(i||m||(x?z.some((lt,ve)=>It(lt,Y[ve])):It(z,Y))){d&&d();const lt=Ut;Ut=u;try{const ve=[z,Y===As?void 0:x&&Y[0]===As?[]:Y,_];a?a(e,3,ve):e(...ve),Y=z}finally{Ut=lt}}}else u.run()};return l&&l(Q),u=new ba(h),u.scheduler=o?()=>o(Q,!1):Q,_=A=>qh(A,!1,u),d=u.onStop=()=>{const A=Ws.get(u);if(A){if(a)a(A,4);else for(const z of A)z();Ws.delete(u)}},e?s?Q(!0):Y=u.run():o?o(Q.bind(null,!0),!0):u.run(),U.pause=u.pause.bind(u),U.resume=u.resume.bind(u),U.stop=U,U}function ht(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))ht(t.value,e,n);else if(M(t))for(let s=0;s<t.length;s++)ht(t[s],e,n);else if(ua(t)||hn(t))t.forEach(s=>{ht(s,e,n)});else if(da(t)){for(const s in t)ht(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ht(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(t,e,n,s){try{return s?t(...s):t()}catch(i){mi(i,e,n)}}function rt(t,e,n,s){if(k(t)){const i=gs(t,e,n,s);return i&&ha(i)&&i.catch(r=>{mi(r,e,n)}),i}if(M(t)){const i=[];for(let r=0;r<t.length;r++)i.push(rt(t[r],e,n,s));return i}}function mi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Mt(),gs(r,null,10,[t,a,c]),kt();return}}Qh(t,n,i,s,o)}function Qh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ie=[];let et=-1;const fn=[];let wt=null,ln=0;const Ba=Promise.resolve();let Us=null;function Wa(t){const e=Us||Ba;return t?e.then(this?t.bind(this):t):e}function Jh(t){let e=et+1,n=Ie.length;for(;e<n;){const s=e+n>>>1,i=Ie[s],r=ns(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Jr(t){if(!(t.flags&1)){const e=ns(t),n=Ie[Ie.length-1];!n||!(t.flags&2)&&e>=ns(n)?Ie.push(t):Ie.splice(Jh(e),0,t),t.flags|=1,Ua()}}function Ua(){Us||(Us=Ba.then($a))}function Xh(t){M(t)?fn.push(...t):wt&&t.id===-1?wt.splice(ln+1,0,t):t.flags&1||(fn.push(t),t.flags|=1),Ua()}function Vo(t,e,n=et+1){for(;n<Ie.length;n++){const s=Ie[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ha(t){if(fn.length){const e=[...new Set(fn)].sort((n,s)=>ns(n)-ns(s));if(fn.length=0,wt){wt.push(...e);return}for(wt=e,ln=0;ln<wt.length;ln++){const n=wt[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,ln=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $a(t){try{for(et=0;et<Ie.length;et++){const e=Ie[et];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;et<Ie.length;et++){const e=Ie[et];e&&(e.flags&=-2)}et=-1,Ie.length=0,Ha(),Us=null,(Ie.length||fn.length)&&$a()}}let Re=null,Va=null;function Hs(t){const e=Re;return Re=t,Va=t&&t.type.__scopeId||null,e}function Zh(t,e=Re,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zo(-1);const r=Hs(e);let o;try{o=t(...i)}finally{Hs(r),s._d&&Zo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function dn(t,e){if(Re===null)return t;const n=bi(Re),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=X]=e[i];r&&(k(r)&&(r={mounted:r,updated:r}),r.deep&&ht(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Bt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Mt(),rt(a,n,8,[t.el,l,t,e]),kt())}}const ef=Symbol("_vte"),tf=t=>t.__isTeleport;function Xr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ja(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $s(t,e,n,s,i=!1){if(M(t)){t.forEach((m,x)=>$s(m,e&&(M(e)?e[x]:e),n,s,i));return}if(jn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$s(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?bi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===X?l.refs={}:l.refs,h=l.setupState,d=G(h),_=h===X?()=>!1:m=>q(d,m);if(c!=null&&c!==a&&(he(c)?(u[c]=null,_(c)&&(h[c]=null)):ce(c)&&(c.value=null)),k(a))gs(a,l,12,[o,u]);else{const m=he(a),x=ce(a);if(m||x){const W=()=>{if(t.f){const U=m?_(a)?h[a]:u[a]:a.value;i?M(U)&&Wr(U,r):M(U)?U.includes(r)||U.push(r):m?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else m?(u[a]=o,_(a)&&(h[a]=o)):x&&(a.value=o,t.k&&(u[t.k]=o))};o?(W.id=-1,ke(W,n)):W()}}}pi().requestIdleCallback;pi().cancelIdleCallback;const jn=t=>!!t.type.__asyncLoader,Ga=t=>t.type.__isKeepAlive;function nf(t,e){Ka(t,"a",e)}function sf(t,e){Ka(t,"da",e)}function Ka(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(yi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ga(i.parent.vnode)&&rf(s,e,n,i),i=i.parent}}function rf(t,e,n,s){const i=yi(e,t,s,!0);za(()=>{Wr(s[e],i)},n)}function yi(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Mt();const l=ms(n),a=rt(e,n,t,o);return l(),kt(),a});return s?i.unshift(r):i.push(r),r}}const yt=t=>(e,n=ye)=>{(!is||t==="sp")&&yi(t,(...s)=>e(...s),n)},of=yt("bm"),Zr=yt("m"),lf=yt("bu"),af=yt("u"),cf=yt("bum"),za=yt("um"),uf=yt("sp"),hf=yt("rtg"),ff=yt("rtc");function df(t,e=ye){yi("ec",t,e)}const pf="components",qa=Symbol.for("v-ndc");function _f(t){return he(t)?gf(pf,t,!1)||t:t||qa}function gf(t,e,n=!0,s=!1){const i=Re||ye;if(i){const r=i.type;{const l=id(r,!1);if(l&&(l===e||l===We(e)||l===di(We(e))))return r}const o=jo(i[t]||r[t],e)||jo(i.appContext[t],e);return!o&&s?r:o}}function jo(t,e){return t&&(t[e]||t[We(e)]||t[di(We(e))])}const ur=t=>t?mc(t)?bi(t):ur(t.parent):null,Gn=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ur(t.parent),$root:t=>ur(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Qa(t),$forceUpdate:t=>t.f||(t.f=()=>{Jr(t.update)}),$nextTick:t=>t.n||(t.n=Wa.bind(t.proxy)),$watch:t=>Wf.bind(t)}),Hi=(t,e)=>t!==X&&!t.__isScriptSetup&&q(t,e),mf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Hi(s,e))return o[e]=1,s[e];if(i!==X&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==X&&q(n,e))return o[e]=4,n[e];hr&&(o[e]=0)}}const u=Gn[e];let h,d;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==X&&q(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Hi(i,e)?(i[e]=n,!0):s!==X&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==X&&q(t,o)||Hi(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(Gn,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Go(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hr=!0;function yf(t){const e=Qa(t),n=t.proxy,s=t.ctx;hr=!1,e.beforeCreate&&Ko(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:x,deactivated:W,beforeDestroy:U,beforeUnmount:Y,destroyed:Q,unmounted:A,render:z,renderTracked:lt,renderTriggered:ve,errorCaptured:$,serverPrefetch:j,expose:ue,inheritAttrs:Le,components:qe,directives:bt,filters:Nn}=e;if(c&&vf(c,s,null),o)for(const H in o){const ee=o[H];k(ee)&&(s[H]=ee.bind(n))}if(i){const H=i.call(n,n);le(H)&&(t.data=gi(H))}if(hr=!0,r)for(const H in r){const ee=r[H],Ft=k(ee)?ee.bind(n,n):k(ee.get)?ee.get.bind(n,n):nt,Ts=!k(ee)&&k(ee.set)?ee.set.bind(n):nt,Lt=vc({get:Ft,set:Ts});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:Ye=>Lt.value=Ye})}if(l)for(const H in l)Ya(l[H],s,n,H);if(a){const H=k(a)?a.call(n):a;Reflect.ownKeys(H).forEach(ee=>{If(ee,H[ee])})}u&&Ko(u,t,"c");function ae(H,ee){M(ee)?ee.forEach(Ft=>H(Ft.bind(n))):ee&&H(ee.bind(n))}if(ae(of,h),ae(Zr,d),ae(lf,_),ae(af,m),ae(nf,x),ae(sf,W),ae(df,$),ae(ff,lt),ae(hf,ve),ae(cf,Y),ae(za,A),ae(uf,j),M(ue))if(ue.length){const H=t.exposed||(t.exposed={});ue.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>n[ee],set:Ft=>n[ee]=Ft})})}else t.exposed||(t.exposed={});z&&t.render===nt&&(t.render=z),Le!=null&&(t.inheritAttrs=Le),qe&&(t.components=qe),bt&&(t.directives=bt),j&&ja(t)}function vf(t,e,n=nt){M(t)&&(t=fr(t));for(const s in t){const i=t[s];let r;le(i)?"default"in i?r=Kn(i.from||s,i.default,!0):r=Kn(i.from||s):r=Kn(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ko(t,e,n){rt(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ya(t,e,n,s){let i=s.includes(".")?uc(n,s):()=>n[s];if(he(t)){const r=e[t];k(r)&&Ms(i,r)}else if(k(t))Ms(i,t.bind(n));else if(le(t))if(M(t))t.forEach(r=>Ya(r,e,n,s));else{const r=k(t.handler)?t.handler.bind(n):e[t.handler];k(r)&&Ms(i,r,t)}}function Qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Vs(a,c,o,!0)),Vs(a,e,o)),le(e)&&r.set(e,a),a}function Vs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Vs(t,r,n,!0),i&&i.forEach(o=>Vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Cf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Cf={data:zo,props:qo,emits:qo,methods:Bn,computed:Bn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Bn,directives:Bn,watch:Ef,provide:zo,inject:bf};function zo(t,e){return e?t?function(){return xe(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function bf(t,e){return Bn(fr(t),fr(e))}function fr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Bn(t,e){return t?xe(Object.create(null),t,e):e}function qo(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:xe(Object.create(null),Go(t),Go(e??{})):e}function Ef(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Ee(t[s],e[s]);return n}function Ja(){return{app:null,config:{isNativeTag:ah,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wf=0;function Sf(t,e){return function(s,i=null){k(s)||(s=xe({},s)),i!=null&&!le(i)&&(i=null);const r=Ja(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:wf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:od,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&k(u.install)?(o.add(u),u.install(c,...h)):k(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||st(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,bi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(rt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=qt;qt=c;try{return u()}finally{qt=h}}};return c}}let qt=null;function If(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Kn(t,e,n=!1){const s=ye||Re;if(s||qt){const i=qt?qt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&k(e)?e.call(s&&s.proxy):e}}function Tf(){return!!(ye||Re||qt)}const Xa={},Za=()=>Object.create(Xa),ec=t=>Object.getPrototypeOf(t)===Xa;function xf(t,e,n,s=!1){const i={},r=Za();t.propsDefaults=Object.create(null),tc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Wh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Nf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=G(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(vi(t.emitsOptions,d))continue;const _=e[d];if(a)if(q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=We(d);i[m]=dr(a,l,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{tc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=en(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=dr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&ut(t.attrs,"set","")}function tc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Hn(a))continue;const c=e[a];let u;i&&q(i,u=We(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:vi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=G(n),c=l||X;for(let u=0;u<r.length;u++){const h=r[u];n[h]=dr(i,a,h,c[h],t,!q(c,h))}}return o}function dr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&k(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ms(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===en(n))&&(s=!0))}return s}const Rf=new WeakMap;function nc(t,e,n=!1){const s=n?Rf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!k(t)){const u=h=>{a=!0;const[d,_]=nc(h,e,!0);xe(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return le(t)&&s.set(t,un),un;if(M(r))for(let u=0;u<r.length;u++){const h=We(r[u]);Yo(h)&&(o[h]=X)}else if(r)for(const u in r){const h=We(u);if(Yo(h)){const d=r[u],_=o[h]=M(d)||k(d)?{type:d}:xe({},d),m=_.type;let x=!1,W=!0;if(M(m))for(let U=0;U<m.length;++U){const Y=m[U],Q=k(Y)&&Y.name;if(Q==="Boolean"){x=!0;break}else Q==="String"&&(W=!1)}else x=k(m)&&m.name==="Boolean";_[0]=x,_[1]=W,(x||q(_,"default"))&&l.push(h)}}const c=[o,l];return le(t)&&s.set(t,c),c}function Yo(t){return t[0]!=="$"&&!Hn(t)}const sc=t=>t[0]==="_"||t==="$stable",eo=t=>M(t)?t.map(tt):[tt(t)],Af=(t,e,n)=>{if(e._n)return e;const s=Zh((...i)=>eo(e(...i)),n);return s._c=!1,s},ic=(t,e,n)=>{const s=t._ctx;for(const i in t){if(sc(i))continue;const r=t[i];if(k(r))e[i]=Af(i,r,s);else if(r!=null){const o=eo(r);e[i]=()=>o}}},rc=(t,e)=>{const n=eo(e);t.slots.default=()=>n},oc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Pf=(t,e,n)=>{const s=t.slots=Za();if(t.vnode.shapeFlag&32){const i=e._;i?(oc(s,e,n),n&&pa(s,"_",i,!0)):ic(e,s)}else e&&rc(t,e)},Of=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=X;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:oc(i,e,n):(r=!e.$stable,ic(e,i)),o=e}else e&&(rc(t,e),o={default:1});if(r)for(const l in i)!sc(l)&&o[l]==null&&delete i[l]},ke=Kf;function Df(t){return Mf(t)}function Mf(t,e){const n=pi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=nt,insertStaticContent:m}=t,x=(f,p,g,C=null,y=null,v=null,I=void 0,S=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!Dn(f,p)&&(C=xs(f),Ye(f,y,v,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:b,ref:P,shapeFlag:T}=p;switch(b){case Ci:W(f,p,g,C);break;case Qt:U(f,p,g,C);break;case Vi:f==null&&Y(p,g,C,I);break;case Be:qe(f,p,g,C,y,v,I,S,w);break;default:T&1?z(f,p,g,C,y,v,I,S,w):T&6?bt(f,p,g,C,y,v,I,S,w):(T&64||T&128)&&b.process(f,p,g,C,y,v,I,S,w,An)}P!=null&&y&&$s(P,f&&f.ref,v,p||f,!p)},W=(f,p,g,C)=>{if(f==null)s(p.el=l(p.children),g,C);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},U=(f,p,g,C)=>{f==null?s(p.el=a(p.children||""),g,C):p.el=f.el},Y=(f,p,g,C)=>{[f.el,f.anchor]=m(f.children,p,g,C,f.el,f.anchor)},Q=({el:f,anchor:p},g,C)=>{let y;for(;f&&f!==p;)y=d(f),s(f,g,C),f=y;s(p,g,C)},A=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},z=(f,p,g,C,y,v,I,S,w)=>{p.type==="svg"?I="svg":p.type==="math"&&(I="mathml"),f==null?lt(p,g,C,y,v,I,S,w):j(f,p,y,v,I,S,w)},lt=(f,p,g,C,y,v,I,S)=>{let w,b;const{props:P,shapeFlag:T,transition:R,dirs:D}=f;if(w=f.el=o(f.type,v,P&&P.is,P),T&8?u(w,f.children):T&16&&$(f.children,w,null,C,y,$i(f,v),I,S),D&&Bt(f,null,C,"created"),ve(w,f,f.scopeId,I,C),P){for(const te in P)te!=="value"&&!Hn(te)&&r(w,te,null,P[te],v,C);"value"in P&&r(w,"value",null,P.value,v),(b=P.onVnodeBeforeMount)&&Ze(b,C,f)}D&&Bt(f,null,C,"beforeMount");const V=kf(y,R);V&&R.beforeEnter(w),s(w,p,g),((b=P&&P.onVnodeMounted)||V||D)&&ke(()=>{b&&Ze(b,C,f),V&&R.enter(w),D&&Bt(f,null,C,"mounted")},y)},ve=(f,p,g,C,y)=>{if(g&&_(f,g),C)for(let v=0;v<C.length;v++)_(f,C[v]);if(y){let v=y.subTree;if(p===v||fc(v.type)&&(v.ssContent===p||v.ssFallback===p)){const I=y.vnode;ve(f,I,I.scopeId,I.slotScopeIds,y.parent)}}},$=(f,p,g,C,y,v,I,S,w=0)=>{for(let b=w;b<f.length;b++){const P=f[b]=S?St(f[b]):tt(f[b]);x(null,P,p,g,C,y,v,I,S)}},j=(f,p,g,C,y,v,I)=>{const S=p.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:P}=p;w|=f.patchFlag&16;const T=f.props||X,R=p.props||X;let D;if(g&&Wt(g,!1),(D=R.onVnodeBeforeUpdate)&&Ze(D,g,p,f),P&&Bt(p,f,g,"beforeUpdate"),g&&Wt(g,!0),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&u(S,""),b?ue(f.dynamicChildren,b,S,g,C,$i(p,y),v):I||ee(f,p,S,null,g,C,$i(p,y),v,!1),w>0){if(w&16)Le(S,T,R,g,y);else if(w&2&&T.class!==R.class&&r(S,"class",null,R.class,y),w&4&&r(S,"style",T.style,R.style,y),w&8){const V=p.dynamicProps;for(let te=0;te<V.length;te++){const J=V[te],De=T[J],Ne=R[J];(Ne!==De||J==="value")&&r(S,J,De,Ne,y,g)}}w&1&&f.children!==p.children&&u(S,p.children)}else!I&&b==null&&Le(S,T,R,g,y);((D=R.onVnodeUpdated)||P)&&ke(()=>{D&&Ze(D,g,p,f),P&&Bt(p,f,g,"updated")},C)},ue=(f,p,g,C,y,v,I)=>{for(let S=0;S<p.length;S++){const w=f[S],b=p[S],P=w.el&&(w.type===Be||!Dn(w,b)||w.shapeFlag&70)?h(w.el):g;x(w,b,P,null,C,y,v,I,!0)}},Le=(f,p,g,C,y)=>{if(p!==g){if(p!==X)for(const v in p)!Hn(v)&&!(v in g)&&r(f,v,p[v],null,y,C);for(const v in g){if(Hn(v))continue;const I=g[v],S=p[v];I!==S&&v!=="value"&&r(f,v,S,I,y,C)}"value"in g&&r(f,"value",p.value,g.value,y)}},qe=(f,p,g,C,y,v,I,S,w)=>{const b=p.el=f?f.el:l(""),P=p.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:D}=p;D&&(S=S?S.concat(D):D),f==null?(s(b,g,C),s(P,g,C),$(p.children||[],g,P,y,v,I,S,w)):T>0&&T&64&&R&&f.dynamicChildren?(ue(f.dynamicChildren,R,g,y,v,I,S),(p.key!=null||y&&p===y.subTree)&&lc(f,p,!0)):ee(f,p,g,P,y,v,I,S,w)},bt=(f,p,g,C,y,v,I,S,w)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?y.ctx.activate(p,g,C,I,w):Nn(p,g,C,y,v,I,w):Is(f,p,w)},Nn=(f,p,g,C,y,v,I)=>{const S=f.component=Zf(f,C,y);if(Ga(f)&&(S.ctx.renderer=An),ed(S,!1,I),S.asyncDep){if(y&&y.registerDep(S,ae,I),!f.el){const w=S.subTree=st(Qt);U(null,w,p,g)}}else ae(S,f,p,g,y,v,I)},Is=(f,p,g)=>{const C=p.component=f.component;if(jf(f,p,g))if(C.asyncDep&&!C.asyncResolved){H(C,p,g);return}else C.next=p,C.update();else p.el=f.el,C.vnode=p},ae=(f,p,g,C,y,v,I)=>{const S=()=>{if(f.isMounted){let{next:T,bu:R,u:D,parent:V,vnode:te}=f;{const Je=ac(f);if(Je){T&&(T.el=te.el,H(f,T,I)),Je.asyncDep.then(()=>{f.isUnmounted||S()});return}}let J=T,De;Wt(f,!1),T?(T.el=te.el,H(f,T,I)):T=te,R&&Ds(R),(De=T.props&&T.props.onVnodeBeforeUpdate)&&Ze(De,V,T,te),Wt(f,!0);const Ne=Jo(f),Qe=f.subTree;f.subTree=Ne,x(Qe,Ne,h(Qe.el),xs(Qe),f,y,v),T.el=Ne.el,J===null&&Gf(f,Ne.el),D&&ke(D,y),(De=T.props&&T.props.onVnodeUpdated)&&ke(()=>Ze(De,V,T,te),y)}else{let T;const{el:R,props:D}=p,{bm:V,m:te,parent:J,root:De,type:Ne}=f,Qe=jn(p);Wt(f,!1),V&&Ds(V),!Qe&&(T=D&&D.onVnodeBeforeMount)&&Ze(T,J,p),Wt(f,!0);{De.ce&&De.ce._injectChildStyle(Ne);const Je=f.subTree=Jo(f);x(null,Je,g,C,f,y,v),p.el=Je.el}if(te&&ke(te,y),!Qe&&(T=D&&D.onVnodeMounted)){const Je=p;ke(()=>Ze(T,J,Je),y)}(p.shapeFlag&256||J&&jn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&ke(f.a,y),f.isMounted=!0,p=g=C=null}};f.scope.on();const w=f.effect=new ba(S);f.scope.off();const b=f.update=w.run.bind(w),P=f.job=w.runIfDirty.bind(w);P.i=f,P.id=f.uid,w.scheduler=()=>Jr(P),Wt(f,!0),b()},H=(f,p,g)=>{p.component=f;const C=f.vnode.props;f.vnode=p,f.next=null,Nf(f,p.props,C,g),Of(f,p.children,g),Mt(),Vo(f),kt()},ee=(f,p,g,C,y,v,I,S,w=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,T=p.children,{patchFlag:R,shapeFlag:D}=p;if(R>0){if(R&128){Ts(b,T,g,C,y,v,I,S,w);return}else if(R&256){Ft(b,T,g,C,y,v,I,S,w);return}}D&8?(P&16&&Rn(b,y,v),T!==b&&u(g,T)):P&16?D&16?Ts(b,T,g,C,y,v,I,S,w):Rn(b,y,v,!0):(P&8&&u(g,""),D&16&&$(T,g,C,y,v,I,S,w))},Ft=(f,p,g,C,y,v,I,S,w)=>{f=f||un,p=p||un;const b=f.length,P=p.length,T=Math.min(b,P);let R;for(R=0;R<T;R++){const D=p[R]=w?St(p[R]):tt(p[R]);x(f[R],D,g,null,y,v,I,S,w)}b>P?Rn(f,y,v,!0,!1,T):$(p,g,C,y,v,I,S,w,T)},Ts=(f,p,g,C,y,v,I,S,w)=>{let b=0;const P=p.length;let T=f.length-1,R=P-1;for(;b<=T&&b<=R;){const D=f[b],V=p[b]=w?St(p[b]):tt(p[b]);if(Dn(D,V))x(D,V,g,null,y,v,I,S,w);else break;b++}for(;b<=T&&b<=R;){const D=f[T],V=p[R]=w?St(p[R]):tt(p[R]);if(Dn(D,V))x(D,V,g,null,y,v,I,S,w);else break;T--,R--}if(b>T){if(b<=R){const D=R+1,V=D<P?p[D].el:C;for(;b<=R;)x(null,p[b]=w?St(p[b]):tt(p[b]),g,V,y,v,I,S,w),b++}}else if(b>R)for(;b<=T;)Ye(f[b],y,v,!0),b++;else{const D=b,V=b,te=new Map;for(b=V;b<=R;b++){const Me=p[b]=w?St(p[b]):tt(p[b]);Me.key!=null&&te.set(Me.key,b)}let J,De=0;const Ne=R-V+1;let Qe=!1,Je=0;const Pn=new Array(Ne);for(b=0;b<Ne;b++)Pn[b]=0;for(b=D;b<=T;b++){const Me=f[b];if(De>=Ne){Ye(Me,y,v,!0);continue}let Xe;if(Me.key!=null)Xe=te.get(Me.key);else for(J=V;J<=R;J++)if(Pn[J-V]===0&&Dn(Me,p[J])){Xe=J;break}Xe===void 0?Ye(Me,y,v,!0):(Pn[Xe-V]=b+1,Xe>=Je?Je=Xe:Qe=!0,x(Me,p[Xe],g,null,y,v,I,S,w),De++)}const Bo=Qe?Ff(Pn):un;for(J=Bo.length-1,b=Ne-1;b>=0;b--){const Me=V+b,Xe=p[Me],Wo=Me+1<P?p[Me+1].el:C;Pn[b]===0?x(null,Xe,g,Wo,y,v,I,S,w):Qe&&(J<0||b!==Bo[J]?Lt(Xe,g,Wo,2):J--)}}},Lt=(f,p,g,C,y=null)=>{const{el:v,type:I,transition:S,children:w,shapeFlag:b}=f;if(b&6){Lt(f.component.subTree,p,g,C);return}if(b&128){f.suspense.move(p,g,C);return}if(b&64){I.move(f,p,g,An);return}if(I===Be){s(v,p,g);for(let T=0;T<w.length;T++)Lt(w[T],p,g,C);s(f.anchor,p,g);return}if(I===Vi){Q(f,p,g);return}if(C!==2&&b&1&&S)if(C===0)S.beforeEnter(v),s(v,p,g),ke(()=>S.enter(v),y);else{const{leave:T,delayLeave:R,afterLeave:D}=S,V=()=>s(v,p,g),te=()=>{T(v,()=>{V(),D&&D()})};R?R(v,V,te):te()}else s(v,p,g)},Ye=(f,p,g,C=!1,y=!1)=>{const{type:v,props:I,ref:S,children:w,dynamicChildren:b,shapeFlag:P,patchFlag:T,dirs:R,cacheIndex:D}=f;if(T===-2&&(y=!1),S!=null&&$s(S,null,g,f,!0),D!=null&&(p.renderCache[D]=void 0),P&256){p.ctx.deactivate(f);return}const V=P&1&&R,te=!jn(f);let J;if(te&&(J=I&&I.onVnodeBeforeUnmount)&&Ze(J,p,f),P&6)lh(f.component,g,C);else{if(P&128){f.suspense.unmount(g,C);return}V&&Bt(f,null,p,"beforeUnmount"),P&64?f.type.remove(f,p,g,An,C):b&&!b.hasOnce&&(v!==Be||T>0&&T&64)?Rn(b,p,g,!1,!0):(v===Be&&T&384||!y&&P&16)&&Rn(w,p,g),C&&Fo(f)}(te&&(J=I&&I.onVnodeUnmounted)||V)&&ke(()=>{J&&Ze(J,p,f),V&&Bt(f,null,p,"unmounted")},g)},Fo=f=>{const{type:p,el:g,anchor:C,transition:y}=f;if(p===Be){oh(g,C);return}if(p===Vi){A(f);return}const v=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:S}=y,w=()=>I(g,v);S?S(f.el,v,w):w()}else v()},oh=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},lh=(f,p,g)=>{const{bum:C,scope:y,job:v,subTree:I,um:S,m:w,a:b}=f;Qo(w),Qo(b),C&&Ds(C),y.stop(),v&&(v.flags|=8,Ye(I,f,p,g)),S&&ke(S,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Rn=(f,p,g,C=!1,y=!1,v=0)=>{for(let I=v;I<f.length;I++)Ye(f[I],p,g,C,y)},xs=f=>{if(f.shapeFlag&6)return xs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[ef];return g?d(g):p};let ki=!1;const Lo=(f,p,g)=>{f==null?p._vnode&&Ye(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,g),p._vnode=f,ki||(ki=!0,Vo(),Ha(),ki=!1)},An={p:x,um:Ye,m:Lt,r:Fo,mt:Nn,mc:$,pc:ee,pbc:ue,n:xs,o:t};return{render:Lo,hydrate:void 0,createApp:Sf(Lo)}}function $i({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function kf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lc(t,e,n=!1){const s=t.children,i=e.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=St(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&lc(o,l)),l.type===Ci&&(l.el=o.el)}}function Ff(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ac(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ac(e)}function Qo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Lf=Symbol.for("v-scx"),Bf=()=>Kn(Lf);function Ms(t,e,n){return cc(t,e,n)}function cc(t,e,n=X){const{immediate:s,deep:i,flush:r,once:o}=n,l=xe({},n),a=e&&s||!e&&r!=="post";let c;if(is){if(r==="sync"){const _=Bf();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=nt,_.resume=nt,_.pause=nt,_}}const u=ye;l.call=(_,m,x)=>rt(_,u,m,x);let h=!1;r==="post"?l.scheduler=_=>{ke(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,m)=>{m?_():Jr(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=Yh(t,e,l);return is&&(c?c.push(d):a&&d()),d}function Wf(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?uc(s,t):()=>s[t]:t.bind(s,s);let r;k(e)?r=e:(r=e.handler,n=e);const o=ms(this),l=cc(i,r.bind(s),n);return o(),l}function uc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Uf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${We(e)}Modifiers`]||t[`${en(e)}Modifiers`];function Hf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let i=n;const r=e.startsWith("update:"),o=r&&Uf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(rr)));let l,a=s[l=Fi(e)]||s[l=Fi(We(e))];!a&&r&&(a=s[l=Fi(en(e))]),a&&rt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,rt(c,t,6,i)}}function hc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!k(t)){const a=c=>{const u=hc(c,e,!0);u&&(l=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(le(t)&&s.set(t,null),null):(M(r)?r.forEach(a=>o[a]=null):xe(o,r),le(t)&&s.set(t,o),o)}function vi(t,e){return!t||!ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,en(e))||q(t,e))}function Jo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:x}=t,W=Hs(t);let U,Y;try{if(n.shapeFlag&4){const A=i||s,z=A;U=tt(c.call(z,A,u,h,_,d,m)),Y=l}else{const A=e;U=tt(A.length>1?A(h,{attrs:l,slots:o,emit:a}):A(h,null)),Y=e.props?l:$f(l)}}catch(A){zn.length=0,mi(A,t,1),U=st(Qt)}let Q=U;if(Y&&x!==!1){const A=Object.keys(Y),{shapeFlag:z}=Q;A.length&&z&7&&(r&&A.some(Br)&&(Y=Vf(Y,r)),Q=yn(Q,Y,!1,!0))}return n.dirs&&(Q=yn(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Xr(Q,n.transition),U=Q,Hs(W),U}const $f=t=>{let e;for(const n in t)(n==="class"||n==="style"||ui(n))&&((e||(e={}))[n]=t[n]);return e},Vf=(t,e)=>{const n={};for(const s in t)(!Br(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Xo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!vi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Xo(s,o,c):!0:!!o;return!1}function Xo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!vi(n,r))return!0}return!1}function Gf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const fc=t=>t.__isSuspense;function Kf(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):Xh(t)}const Be=Symbol.for("v-fgt"),Ci=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Vi=Symbol.for("v-stc"),zn=[];let Fe=null;function Ke(t=!1){zn.push(Fe=t?null:[])}function zf(){zn.pop(),Fe=zn[zn.length-1]||null}let ss=1;function Zo(t,e=!1){ss+=t,t<0&&Fe&&e&&(Fe.hasOnce=!0)}function dc(t){return t.dynamicChildren=ss>0?Fe||un:null,zf(),ss>0&&Fe&&Fe.push(t),t}function pt(t,e,n,s,i,r){return dc(N(t,e,n,s,i,r,!0))}function pc(t,e,n,s,i){return dc(st(t,e,n,s,i,!0))}function _c(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const gc=({key:t})=>t??null,ks=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||ce(t)||k(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,s=0,i=null,r=t===Be?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gc(e),ref:e&&ks(e),scopeId:Va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return l?(to(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),ss>0&&!o&&Fe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Fe.push(a),a}const st=qf;function qf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===qa)&&(t=Qt),_c(t)){const l=yn(t,e,!0);return n&&to(l,n),ss>0&&!r&&Fe&&(l.shapeFlag&6?Fe[Fe.indexOf(t)]=l:Fe.push(l)),l.patchFlag=-2,l}if(rd(t)&&(t=t.__vccOpts),e){e=Yf(e);let{class:l,style:a}=e;l&&!he(l)&&(e.class=Hr(l)),le(a)&&(Yr(a)&&!M(a)&&(a=xe({},a)),e.style=_i(a))}const o=he(t)?1:fc(t)?128:tf(t)?64:le(t)?4:k(t)?2:0;return N(t,e,n,s,i,o,r,!0)}function Yf(t){return t?Yr(t)||ec(t)?xe({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Qf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&gc(c),ref:e&&e.ref?n&&r?M(r)?r.concat(ks(e)):[r,ks(e)]:ks(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Xr(u,a.clone(u)),u}function Vt(t=" ",e=0){return st(Ci,null,t,e)}function js(t="",e=!1){return e?(Ke(),pc(Qt,null,t)):st(Qt,null,t)}function tt(t){return t==null||typeof t=="boolean"?st(Qt):M(t)?st(Be,null,t.slice()):_c(t)?St(t):st(Ci,null,String(t))}function St(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function to(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),to(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ec(e)?e._ctx=Re:i===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),s&64?(n=16,e=[Vt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Hr([e.class,s.class]));else if(i==="style")e.style=_i([e.style,s.style]);else if(ui(i)){const r=e[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ze(t,e,n,s=null){rt(t,e,7,[n,s])}const Jf=Ja();let Xf=0;function Zf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Jf,r={uid:Xf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ya(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nc(s,i),emitsOptions:hc(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Hf.bind(null,r),t.ce&&t.ce(r),r}let ye=null,Gs,pr;{const t=pi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Gs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),pr=e("__VUE_SSR_SETTERS__",n=>is=n)}const ms=t=>{const e=ye;return Gs(t),t.scope.on(),()=>{t.scope.off(),Gs(e)}},el=()=>{ye&&ye.scope.off(),Gs(null)};function mc(t){return t.vnode.shapeFlag&4}let is=!1;function ed(t,e=!1,n=!1){e&&pr(e);const{props:s,children:i}=t.vnode,r=mc(t);xf(t,s,r,e),Pf(t,i,n);const o=r?td(t,e):void 0;return e&&pr(!1),o}function td(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mf);const{setup:s}=n;if(s){Mt();const i=t.setupContext=s.length>1?sd(t):null,r=ms(t),o=gs(s,t,0,[t.props,i]),l=ha(o);if(kt(),r(),(l||t.sp)&&!jn(t)&&ja(t),l){if(o.then(el,el),e)return o.then(a=>{tl(t,a)}).catch(a=>{mi(a,t,0)});t.asyncDep=o}else tl(t,o)}else yc(t)}function tl(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=La(e)),yc(t)}function yc(t,e,n){const s=t.type;t.render||(t.render=s.render||nt);{const i=ms(t);Mt();try{yf(t)}finally{kt(),i()}}}const nd={get(t,e){return Ce(t,"get",""),t[e]}};function sd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nd),slots:t.slots,emit:t.emit,expose:e}}function bi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(La(Qr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function id(t,e=!0){return k(t)?t.displayName||t.name:t.name||e&&t.__name}function rd(t){return k(t)&&"__vccOpts"in t}const vc=(t,e)=>zh(t,e,is),od="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _r;const nl=typeof window<"u"&&window.trustedTypes;if(nl)try{_r=nl.createPolicy("vue",{createHTML:t=>t})}catch{}const Cc=_r?t=>_r.createHTML(t):t=>t,ld="http://www.w3.org/2000/svg",ad="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,sl=ct&&ct.createElement("template"),cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ct.createElementNS(ld,t):e==="mathml"?ct.createElementNS(ad,t):n?ct.createElement(t,{is:n}):ct.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ct.createTextNode(t),createComment:t=>ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{sl.innerHTML=Cc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=sl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ud=Symbol("_vtc");function hd(t,e,n){const s=t[ud];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const il=Symbol("_vod"),fd=Symbol("_vsh"),dd=Symbol(""),pd=/(^|;)\s*display\s*:/;function _d(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Fs(s,l,"")}else for(const o in e)n[o]==null&&Fs(s,o,"");for(const o in n)o==="display"&&(r=!0),Fs(s,o,n[o])}else if(i){if(e!==n){const o=s[dd];o&&(n+=";"+o),s.cssText=n,r=pd.test(n)}}else e&&t.removeAttribute("style");il in t&&(t[il]=r?s.display:"",t[fd]&&(s.display="none"))}const rl=/\s*!important$/;function Fs(t,e,n){if(M(n))n.forEach(s=>Fs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gd(t,e);rl.test(n)?t.setProperty(en(s),n.replace(rl,""),"important"):t[s]=n}}const ol=["Webkit","Moz","ms"],ji={};function gd(t,e){const n=ji[e];if(n)return n;let s=We(e);if(s!=="filter"&&s in t)return ji[e]=s;s=di(s);for(let i=0;i<ol.length;i++){const r=ol[i]+s;if(r in t)return ji[e]=r}return e}const ll="http://www.w3.org/1999/xlink";function al(t,e,n,s,i,r=yh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ll,e.slice(6,e.length)):t.setAttributeNS(ll,e,n):n==null||r&&!_a(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Dt(n)?String(n):n)}function cl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=_a(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function an(t,e,n,s){t.addEventListener(e,n,s)}function md(t,e,n,s){t.removeEventListener(e,n,s)}const ul=Symbol("_vei");function yd(t,e,n,s,i=null){const r=t[ul]||(t[ul]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=vd(e);if(s){const c=r[e]=Ed(s,i);an(t,l,c,a)}else o&&(md(t,l,o,a),r[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function vd(t){let e;if(hl.test(t)){e={};let s;for(;s=t.match(hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let Gi=0;const Cd=Promise.resolve(),bd=()=>Gi||(Cd.then(()=>Gi=0),Gi=Date.now());function Ed(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rt(wd(s,n.value),e,5,[s])};return n.value=t,n.attached=bd(),n}function wd(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const fl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?hd(t,s,o):e==="style"?_d(t,n,s):ui(e)?Br(e)||yd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Id(t,e,s,o))?(cl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&al(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(s))?cl(t,We(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),al(t,e,s,o))};function Id(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&fl(e)&&k(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return fl(e)&&he(n)?!1:e in t}const dl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>Ds(e,n):e};function Td(t){t.target.composing=!0}function pl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ki=Symbol("_assign"),pn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Ki]=dl(i);const r=s||i.props&&i.props.type==="number";an(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=rr(l)),t[Ki](l)}),n&&an(t,"change",()=>{t.value=t.value.trim()}),e||(an(t,"compositionstart",Td),an(t,"compositionend",pl),an(t,"change",pl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Ki]=dl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?rr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},xd=xe({patchProp:Sd},cd);let _l;function Nd(){return _l||(_l=Df(xd))}const Rd=(...t)=>{const e=Nd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Pd(s);if(!i)return;const r=e._component;!k(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Ad(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ad(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pd(t){return he(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bc;const Ei=t=>bc=t,Ec=Symbol();function gr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qn||(qn={}));function Od(){const t=va(!0),e=t.run(()=>ge({}));let n=[],s=[];const i=Qr({install(r){Ei(i),i._a=r,r.provide(Ec,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const wc=()=>{};function gl(t,e,n,s=wc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ca()&&vh(i),i}function sn(t,...e){t.slice().forEach(n=>{n(...e)})}const Dd=t=>t(),ml=Symbol(),zi=Symbol();function mr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];gr(i)&&gr(s)&&t.hasOwnProperty(n)&&!ce(s)&&!zt(s)?t[n]=mr(i,s):t[n]=s}return t}const Md=Symbol();function kd(t){return!gr(t)||!t.hasOwnProperty(Md)}const{assign:Et}=Object;function Fd(t){return!!(ce(t)&&t.effect)}function Ld(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Vh(n.state.value[t]);return Et(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Qr(vc(()=>{Ei(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=Sc(t,c,e,n,s,!0),a}function Sc(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),ge({});let x;function W($){let j;c=u=!1,typeof $=="function"?($(s.state.value[t]),j={type:qn.patchFunction,storeId:t,events:_}):(mr(s.state.value[t],$),j={type:qn.patchObject,payload:$,storeId:t,events:_});const ue=x=Symbol();Wa().then(()=>{x===ue&&(c=!0)}),u=!0,sn(h,j,s.state.value[t])}const U=r?function(){const{state:j}=n,ue=j?j():{};this.$patch(Le=>{Et(Le,ue)})}:wc;function Y(){o.stop(),h=[],d=[],s._s.delete(t)}const Q=($,j="")=>{if(ml in $)return $[zi]=j,$;const ue=function(){Ei(s);const Le=Array.from(arguments),qe=[],bt=[];function Nn(H){qe.push(H)}function Is(H){bt.push(H)}sn(d,{args:Le,name:ue[zi],store:z,after:Nn,onError:Is});let ae;try{ae=$.apply(this&&this.$id===t?this:z,Le)}catch(H){throw sn(bt,H),H}return ae instanceof Promise?ae.then(H=>(sn(qe,H),H)).catch(H=>(sn(bt,H),Promise.reject(H))):(sn(qe,ae),ae)};return ue[ml]=!0,ue[zi]=j,ue},A={_p:s,$id:t,$onAction:gl.bind(null,d),$patch:W,$reset:U,$subscribe($,j={}){const ue=gl(h,$,j.detached,()=>Le()),Le=o.run(()=>Ms(()=>s.state.value[t],qe=>{(j.flush==="sync"?u:c)&&$({storeId:t,type:qn.direct,events:_},qe)},Et({},a,j)));return ue},$dispose:Y},z=gi(A);s._s.set(t,z);const ve=(s._a&&s._a.runWithContext||Dd)(()=>s._e.run(()=>(o=va()).run(()=>e({action:Q}))));for(const $ in ve){const j=ve[$];if(ce(j)&&!Fd(j)||zt(j))r||(m&&kd(j)&&(ce(j)?j.value=m[$]:mr(j,m[$])),s.state.value[t][$]=j);else if(typeof j=="function"){const ue=Q(j,$);ve[$]=ue,l.actions[$]=j}}return Et(z,ve),Et(G(z),ve),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:$=>{W(j=>{Et(j,$)})}}),s._p.forEach($=>{Et(z,o.run(()=>$({store:z,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(z.$state,m),c=!0,u=!0,z}/*! #__NO_SIDE_EFFECTS__ */function Bd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=Tf();return o=o||(a?Kn(Ec,null):null),o&&Ei(o),o=bc,o._s.has(t)||(i?Sc(t,e,s,o):Ld(t,s,o)),o._s.get(t)}return r.$id=t,r}const Wd=()=>{};var yl={};/**
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
 */const Ic={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw wn(e)},wn=function(t){return new Error("Firebase Database ("+Ic.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Tc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ud=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},no={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ud(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Hd;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xc=function(t){const e=Tc(t);return no.encodeByteArray(e,!0)},Ks=function(t){return xc(t).replace(/\./g,"")},yr=function(t){try{return no.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $d(t){return Nc(void 0,t)}function Nc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vd(n)||(t[n]=Nc(t[n],e[n]));return t}function Vd(t){return t!=="__proto__"}/**
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
 */function jd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gd=()=>jd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof yl>"u")return;const t=yl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yr(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return Wd()||Gd()||Kd()||zd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qd=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yd=t=>{const e=qd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ac=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config};/**
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
 */class wi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Qd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ks(JSON.stringify(n)),Ks(JSON.stringify(o)),""].join(".")}/**
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
 */function Jd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jd())}function Xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zd(){return Ic.NODE_ADMIN===!0}function ep(){try{return typeof indexedDB=="object"}catch{return!1}}function tp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const np="FirebaseError";class ys extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=np,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oc.prototype.create)}}class Oc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?sp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ys(i,l,s)}}function sp(t,e){return t.replace(ip,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ip=/\{\$([^}]+)}/g;/**
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
 */function rs(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
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
 */const Dc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rs(yr(r[0])||""),n=rs(yr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},rp=function(t){const e=Dc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},op=function(t){const e=Dc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function qs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Cl(r)&&Cl(o)){if(!qs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Cl(t){return t!==null&&typeof t=="object"}/**
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
 */function lp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class ap{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function so(t,e){return`${t} failed: ${e} argument `}/**
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
 */const cp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Si=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Sn(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class up{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fp(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hp(t){return t===Ht?void 0:t}function fp(t){return t.instantiationMode==="EAGER"}/**
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
 */class dp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new up(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const pp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},_p=se.INFO,gp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},mp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=_p,this._logHandler=mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const yp=(t,e)=>e.some(n=>t instanceof n);let bl,El;function vp(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cp(){return El||(El=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kc=new WeakMap,vr=new WeakMap,Fc=new WeakMap,qi=new WeakMap,io=new WeakMap;function bp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kc.set(n,t)}).catch(()=>{}),io.set(e,t),e}function Ep(t){if(vr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});vr.set(t,e)}let Cr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wp(t){Cr=t(Cr)}function Sp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Yi(this),e,...n);return Fc.set(s,e.sort?e.sort():[e]),Tt(s)}:Cp().includes(t)?function(...e){return t.apply(Yi(this),e),Tt(kc.get(this))}:function(...e){return Tt(t.apply(Yi(this),e))}}function Ip(t){return typeof t=="function"?Sp(t):(t instanceof IDBTransaction&&Ep(t),yp(t,vp())?new Proxy(t,Cr):t)}function Tt(t){if(t instanceof IDBRequest)return bp(t);if(qi.has(t))return qi.get(t);const e=Ip(t);return e!==t&&(qi.set(t,e),io.set(e,t)),e}const Yi=t=>io.get(t);function Tp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Tt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Tt(o.result),a.oldVersion,a.newVersion,Tt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const xp=["get","getKey","getAll","getAllKeys","count"],Np=["put","add","delete","clear"],Qi=new Map;function wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Np.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Qi.set(e,r),r}wp(t=>({...t,get:(e,n,s)=>wl(e,n)||t.get(e,n,s),has:(e,n)=>!!wl(e,n)||t.has(e,n)}));/**
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
 */class Rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ap(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ap(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const br="@firebase/app",Sl="0.11.2";/**
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
 */const gt=new Mc("@firebase/app"),Pp="@firebase/app-compat",Op="@firebase/analytics-compat",Dp="@firebase/analytics",Mp="@firebase/app-check-compat",kp="@firebase/app-check",Fp="@firebase/auth",Lp="@firebase/auth-compat",Bp="@firebase/database",Wp="@firebase/data-connect",Up="@firebase/database-compat",Hp="@firebase/functions",$p="@firebase/functions-compat",Vp="@firebase/installations",jp="@firebase/installations-compat",Gp="@firebase/messaging",Kp="@firebase/messaging-compat",zp="@firebase/performance",qp="@firebase/performance-compat",Yp="@firebase/remote-config",Qp="@firebase/remote-config-compat",Jp="@firebase/storage",Xp="@firebase/storage-compat",Zp="@firebase/firestore",e_="@firebase/vertexai",t_="@firebase/firestore-compat",n_="firebase",s_="11.4.0";/**
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
 */const Er="[DEFAULT]",i_={[br]:"fire-core",[Pp]:"fire-core-compat",[Dp]:"fire-analytics",[Op]:"fire-analytics-compat",[kp]:"fire-app-check",[Mp]:"fire-app-check-compat",[Fp]:"fire-auth",[Lp]:"fire-auth-compat",[Bp]:"fire-rtdb",[Wp]:"fire-data-connect",[Up]:"fire-rtdb-compat",[Hp]:"fire-fn",[$p]:"fire-fn-compat",[Vp]:"fire-iid",[jp]:"fire-iid-compat",[Gp]:"fire-fcm",[Kp]:"fire-fcm-compat",[zp]:"fire-perf",[qp]:"fire-perf-compat",[Yp]:"fire-rc",[Qp]:"fire-rc-compat",[Jp]:"fire-gcs",[Xp]:"fire-gcs-compat",[Zp]:"fire-fst",[t_]:"fire-fst-compat",[e_]:"fire-vertex","fire-js":"fire-js",[n_]:"fire-js-all"};/**
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
 */const Ys=new Map,r_=new Map,wr=new Map;function Il(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(wr.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;wr.set(e,t);for(const n of Ys.values())Il(n,t);for(const n of r_.values())Il(n,t);return!0}function o_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function l_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const a_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Oc("app","Firebase",a_);/**
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
 */class c_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const u_=s_;function Lc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Er,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=Ac()),!n)throw xt.create("no-options");const r=Ys.get(i);if(r){if(qs(n,r.options)&&qs(s,r.config))return r;throw xt.create("duplicate-app",{appName:i})}const o=new dp(i);for(const a of wr.values())o.addComponent(a);const l=new c_(n,s,o);return Ys.set(i,l),l}function h_(t=Er){const e=Ys.get(t);if(!e&&t===Er&&Ac())return Lc();if(!e)throw xt.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=i_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}Qs(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const f_="firebase-heartbeat-database",d_=1,ls="firebase-heartbeat-store";let Ji=null;function Bc(){return Ji||(Ji=Tp(f_,d_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),Ji}async function p_(t){try{const n=(await Bc()).transaction(ls),s=await n.objectStore(ls).get(Wc(t));return await n.done,s}catch(e){if(e instanceof ys)gt.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function Tl(t,e){try{const s=(await Bc()).transaction(ls,"readwrite");await s.objectStore(ls).put(e,Wc(t)),await s.done}catch(n){if(n instanceof ys)gt.warn(n.message);else{const s=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(s.message)}}}function Wc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const __=1024,g_=30;class m_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>g_){const o=C_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xl(),{heartbeatsToSend:s,unsentEntries:i}=y_(this._heartbeatsCache.heartbeats),r=Ks(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return gt.warn(n),""}}}function xl(){return new Date().toISOString().substring(0,10)}function y_(t,e=__){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Nl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class v_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ep()?tp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await p_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nl(t){return Ks(JSON.stringify({version:2,heartbeats:t})).length}function C_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function b_(t){Qs(new os("platform-logger",e=>new Rp(e),"PRIVATE")),Qs(new os("heartbeat",e=>new m_(e),"PRIVATE")),_n(br,Sl,t),_n(br,Sl,"esm2017"),_n("fire-js","")}b_("");var E_="firebase",w_="11.4.0";/**
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
 */_n(E_,w_,"app");var Rl={};const Al="@firebase/database",Pl="1.0.13";/**
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
 */let Uc="";function S_(t){Uc=t}/**
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
 */class I_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class T_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Hc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new I_(e)}}catch{}return new T_},jt=Hc("localStorage"),x_=Hc("sessionStorage");/**
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
 */const gn=new Mc("@firebase/database"),N_=function(){let t=1;return function(){return t++}}(),$c=function(t){const e=cp(t),n=new ap;n.update(e);const s=n.digest();return no.encodeByteArray(s)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vs.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let Yn=null,Ol=!0;const R_=function(t,e){E(!0,"Can't turn on custom loggers persistently."),gn.logLevel=se.VERBOSE,Yn=gn.log.bind(gn)},be=function(...t){if(Ol===!0&&(Ol=!1,Yn===null&&x_.get("logging_enabled")===!0&&R_()),Yn){const e=vs.apply(null,t);Yn(e)}},Cs=function(t){return function(...e){be(t,...e)}},Sr=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);gn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw gn.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+vs(...t);gn.warn(e)},A_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},P_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",Jt="[MAX_NAME]",In=function(t,e){if(t===e)return 0;if(t===Cn||e===Jt)return-1;if(e===Cn||t===Jt)return 1;{const n=Dl(t),s=Dl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},O_=function(t,e){return t===e?0:t<e?-1:1},Mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},ro=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=ro(t[e[s]]);return n+="}",n},jc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gc=function(t){E(!Vc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},D_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function k_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const F_=new RegExp("^-?(0*)\\d{1,10}$"),L_=-2147483648,B_=2147483647,Dl=function(t){if(F_.test(t)){const e=Number(t);if(e>=L_&&e<=B_)return e}return null},Tn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},W_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class U_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,l_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class H_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class Ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ls.OWNER="owner";/**
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
 */const oo="5",Kc="v",zc="s",qc="r",Yc="f",Qc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jc="ls",Xc="p",Ir="ac",Zc="websocket",eu="long_polling";/**
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
 */class tu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nu(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===Zc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===eu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$_(t)&&(n.ns=t.namespace);const i=[];return Oe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class V_{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $d(this.counters_)}}/**
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
 */const Xi={},Zi={};function lo(t){const e=t.toString();return Xi[e]||(Xi[e]=new V_),Xi[e]}function j_(t,e){const n=t.toString();return Zi[n]||(Zi[n]=e()),Zi[n]}/**
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
 */class G_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Tn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ml="start",K_="close",z_="pLPCommand",q_="pRTLPCB",su="id",iu="pw",ru="ser",Y_="cb",Q_="seg",J_="ts",X_="d",Z_="dframe",ou=1870,lu=30,eg=ou-lu,tg=25e3,ng=3e4;class cn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=lo(n),this.urlFn=a=>(this.appCheckToken&&(a[Ir]=this.appCheckToken),nu(n,eu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new G_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ng)),P_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ao((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ml)this.id=l,this.password=a;else if(o===K_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ml]="t",s[ru]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Y_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kc]=oo,this.transportSessionId&&(s[zc]=this.transportSessionId),this.lastSessionId&&(s[Jc]=this.lastSessionId),this.applicationId&&(s[Xc]=this.applicationId),this.appCheckToken&&(s[Ir]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qc.test(location.hostname)&&(s[qc]=Yc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cn.forceAllow_=!0}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){return cn.forceAllow_?!0:!cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!D_()&&!M_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xc(n),i=jc(s,eg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Z_]="t",s[su]=e,s[iu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ao{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=N_(),window[z_+this.uniqueCallbackIdentifier]=e,window[q_+this.uniqueCallbackIdentifier]=n,this.myIFrame=ao.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[su]=this.myID,e[iu]=this.myPW,e[ru]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lu+s.length<=ou;){const o=this.pendingSegs.shift();s=s+"&"+Q_+i+"="+o.seg+"&"+J_+i+"="+o.ts+"&"+X_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(tg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const sg=16384,ig=45e3;let Js=null;typeof MozWebSocket<"u"?Js=MozWebSocket:typeof WebSocket<"u"&&(Js=WebSocket);class He{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=lo(n),this.connURL=He.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Kc]=oo,typeof location<"u"&&location.hostname&&Qc.test(location.hostname)&&(o[qc]=Yc),n&&(o[zc]=n),s&&(o[Jc]=s),i&&(o[Ir]=i),r&&(o[Xc]=r),nu(e,Zc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jt.set("previous_websocket_failure",!0);try{let s;Zd(),this.mySock=new Js(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Js!==null&&!He.forceDisallow_}static previouslyFailed(){return jt.isInMemoryStorage||jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jc(n,sg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ig))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}He.responsesRequiredToBeHealthy=2;He.healthyTimeout=3e4;/**
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
 */class as{static get ALL_TRANSPORTS(){return[cn,He]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=He&&He.isAvailable();let s=n&&!He.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[He];else{const i=this.transports_=[];for(const r of as.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);as.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}as.globalTransportInitialized_=!1;/**
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
 */const rg=6e4,og=5e3,lg=10*1024,ag=100*1024,er="t",kl="d",cg="s",Fl="r",ug="e",Ll="o",Bl="a",Wl="n",Ul="p",hg="h";class fg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new as(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ag?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(er in e){const n=e[er];n===Bl?this.upgradeIfSecondaryHealthy_():n===Fl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ll&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ul,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mn(er,e);if(kl in e){const s=e[kl];if(n===hg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cg?this.onConnectionShutdown_(s):n===Fl?this.onReset_(s):n===ug?Sr("Server Error: "+s):n===Ll?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),oo!==s&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(og))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ul,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class au{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class cu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Xs extends cu{static getInstance(){return new Xs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hl=32,$l=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new Z("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function At(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function uu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=F(t),s=F(e);if(n===null)return e;if(n===s)return Te(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function co(t,e){if(At(t)!==At(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $e(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(At(t)>At(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class pg{constructor(e,n){this.errorPrefix_=n,this.parts_=hu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Si(this.parts_[s]);du(this)}}function _g(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Si(e),du(t)}function gg(t){const e=t.parts_.pop();t.byteLength_-=Si(e),t.parts_.length>0&&(t.byteLength_-=1)}function du(t){if(t.byteLength_>$l)throw new Error(t.errorPrefix_+"has a key path longer than "+$l+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hl+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class uo extends cu{static getInstance(){return new uo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const kn=1e3,mg=60*5*1e3,Vl=30*1e3,yg=1.3,vg=3e4,Cg="server_kill",jl=3;class _t extends au{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=_t.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kn,this.maxReconnectDelay_=mg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;_t.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||op(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sr("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vg&&(this.reconnectDelay_=kn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new fg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Pe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Cg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pe(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vl(this.interruptReasons_)&&(this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ro(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jl&&(this.reconnectDelay_=Vl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Uc.replace(/\./g,"-")]=1,Pc()?e["framework.cordova"]=1:Xd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xs.getInstance().currentlyOnline();return vl(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
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
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
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
 */class Ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new L(Cn,e),i=new L(Cn,n);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
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
 */let Ps;class pu extends Ii{static get __EMPTY_NODE(){return Ps}static set __EMPTY_NODE(e){Ps=e}compare(e,n){return In(e.name,n.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Jt,Ps)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Ps)}toString(){return".key"}}const mn=new pu;/**
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
 */class Os{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Ae.EMPTY_NODE,this.right=r??Ae.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class bg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,n=Ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Os(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new bg;/**
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
 */function Eg(t,e){return In(t.name,e.name)}function ho(t,e){return In(t,e)}/**
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
 */let Tr;function wg(t){Tr=t}const _u=function(t){return typeof t=="number"?"number:"+Gc(t):"string:"+t},gu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else E(t===Tr||t.isEmpty(),"priority of unexpected type.");E(t===Tr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gl;class pe{static set __childrenNodeConstructor(e){Gl=e}static get __childrenNodeConstructor(){return Gl}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:F(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=F(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||At(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_u(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gc(this.value_):e+=this.value_,this.lazyHash_=$c(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let mu,yu;function Sg(t){mu=t}function Ig(t){yu=t}class Tg extends Ii{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?In(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Jt,new pe("[PRIORITY-POST]",yu))}makePost(e,n){const s=mu(e);return new L(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new Tg;/**
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
 */const xg=Math.log(2);class Ng{constructor(e){const n=r=>parseInt(Math.log(r)/xg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),x=i(_+1,c);return h=t[_],d=n?n(h):h,new _e(d,h.node,_e.BLACK,m,x)}},r=function(a){let c=null,u=null,h=t.length;const d=function(m,x){const W=h-m,U=h;h-=m;const Y=i(W+1,U),Q=t[W],A=n?n(Q):Q;_(new _e(A,Q.node,x,null,Y))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const x=a.nextBitIsOne(),W=Math.pow(2,a.count-(m+1));x?d(W,_e.BLACK):(d(W,_e.BLACK),d(W,_e.RED))}return u},o=new Ng(t.length),l=r(o);return new Ae(s||e,l)};/**
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
 */let tr;const rn={};class dt{static get Default(){return E(rn&&oe,"ChildrenNode.ts has not been loaded"),tr=tr||new dt({".priority":rn},{".priority":oe}),tr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ae?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Zs(s,e.getCompare()):l=rn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new dt(u,c)}addToIndexes(e,n){const s=zs(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===rn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Zs(l,o.getCompare())}else return rn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=zs(this.indexes_,i=>{if(i===rn)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new dt(s,this.indexSet_)}}/**
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
 */let Fn;class O{static get EMPTY_NODE(){return Fn||(Fn=new O(new Ae(ho),null,dt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fn:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new O(i,o,r)}}updateChild(e,n){const s=F(e);if(s===null)return n;{E(F(e)!==".priority"||At(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),s++,r&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_u(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":$c(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rg extends O{constructor(){super(new Ae(ho),O.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const bs=new Rg;Object.defineProperties(L,{MIN:{value:new L(Cn,O.EMPTY_NODE)},MAX:{value:new L(Jt,bs)}});pu.__EMPTY_NODE=O.EMPTY_NODE;pe.__childrenNodeConstructor=O;wg(bs);Ig(bs);/**
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
 */const Ag=!0;function me(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,me(e))}if(!(t instanceof Array)&&Ag){const n=[];let s=!1;if(Oe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return O.EMPTY_NODE;const r=Zs(n,Eg,o=>o.name,ho);if(s){const o=Zs(n,oe.getCompare());return new O(r,me(e),new dt({".priority":o},{".priority":oe}))}else return new O(r,me(e),dt.Default)}else{let n=O.EMPTY_NODE;return Oe(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}Sg(me);/**
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
 */class Pg extends Ii{constructor(e){super(),this.indexPath_=e,E(!B(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?In(e.name,n.name):r}makePost(e,n){const s=me(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,bs);return new L(Jt,e)}toString(){return hu(this.indexPath_,0).join("/")}}/**
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
 */class Og extends Ii{compare(e,n){const s=e.node.compareTo(n.node);return s===0?In(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=me(e);return new L(n,s)}toString(){return".value"}}const Dg=new Og;/**
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
 */function vu(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function us(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Mg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class fo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(cs(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(bn(n,s)):o.trackChildChange(us(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(cs(i,r))}),n.isLeafNode()||n.forEachChild(oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(us(i,r,o))}else s.trackChildChange(bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class hs{constructor(e){this.indexedFilter_=new fo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new L(n,s))||(s=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,l)=>{r.matches(new L(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=O.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new L(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(us(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(cs(n,h));const x=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(bn(d.name,d.node)),x.updateImmediateChild(d.name,d.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(cs(c.name,c.node)),r.trackChildChange(bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class po{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new po;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fg(t){return t.loadsAllData()?new fo(t.getIndex()):t.hasLimit()?new kg(t):new hs(t)}function Kl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===Dg?n="$value":t.index_===mn?n="$key":(E(t.index_ instanceof Pg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
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
 */class ei extends au{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Cs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ei.getListenId_(e,s),l={};this.listens_[o]=l;const a=Kl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),vn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=ei.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Kl(e._queryParams),s=e._path.toString(),i=new wi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=rs(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Lg{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ti(){return{value:null,children:new Map}}function Cu(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=F(e);t.children.has(s)||t.children.set(s,ti());const i=t.children.get(s);e=ie(e),Cu(i,e,n)}}function xr(t,e,n){t.value!==null?n(e,t.value):Bg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);xr(i,r,n)})}function Bg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Wg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Oe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ql=10*1e3,Ug=30*1e3,Hg=5*60*1e3;class $g{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Wg(e);const s=ql+(Ug-ql)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Oe(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hg))}}/**
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
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function bu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _o(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function go(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ni{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ve.ACK_USER_WRITE,this.source=bu()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new ni(K(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new ni(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new fs(this.source,K()):new fs(this.source,ie(this.path))}}/**
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
 */class Xt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ve.OVERWRITE}operationForChild(e){return B(this.path)?new Xt(this.source,K(),this.snap.getImmediateChild(e)):new Xt(this.source,ie(this.path),this.snap)}}/**
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
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ve.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new Xt(this.source,K(),n.value):new ds(this.source,K(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Vg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Mg(o.childName,o.snapshotNode))}),Ln(t,i,"child_removed",e,s,n),Ln(t,i,"child_added",e,s,n),Ln(t,i,"child_moved",r,s,n),Ln(t,i,"child_changed",e,s,n),Ln(t,i,"value",e,s,n),i}function Ln(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Kg(t,l,a)),o.forEach(l=>{const a=Gg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Gg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Kg(t,e,n){if(e.childName==null||n.childName==null)throw wn("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ti(t,e){return{eventCache:t,serverCache:e}}function Jn(t,e,n,s){return Ti(new Pt(e,n,s),t.serverCache)}function Eu(t,e,n,s){return Ti(t.eventCache,new Pt(e,n,s))}function si(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let nr;const zg=()=>(nr||(nr=new Ae(O_)),nr);class re{static fromObject(e){let n=new re(null);return Oe(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=zg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(B(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=F(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(B(e))return new re(n,this.children);{const s=F(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=F(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=F(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(B(e))return n;{const s=F(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),de(n,i),s):new re(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ze{constructor(e){this.writeTree_=e}static empty(){return new ze(new re(null))}}function Xn(t,e,n){if(B(e))return new ze(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Te(i,e);return r=r.updateChild(o,n),new ze(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new ze(r)}}}function Yl(t,e,n){let s=t;return Oe(n,(i,r)=>{s=Xn(s,de(e,i),r)}),s}function Ql(t,e){if(B(e))return ze.empty();{const n=t.writeTree_.setTree(e,new re(null));return new ze(n)}}function Nr(t,e){return tn(t,e)!=null}function tn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function Jl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function Nt(t,e){if(B(e))return t;{const n=tn(t,e);return n!=null?new ze(new re(n)):new ze(t.writeTree_.subtree(e))}}function Rr(t){return t.writeTree_.isEmpty()}function En(t,e){return wu(K(),t.writeTree_,e)}function wu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=wu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
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
 */function xi(t,e){return xu(e,t)}function qg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function Yg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Qg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Jg(l,s.path)?i=!1:$e(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Xg(t),!0;if(s.snap)t.visibleWrites=Ql(t.visibleWrites,s.path);else{const l=s.children;Oe(l,a=>{t.visibleWrites=Ql(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function Jg(t,e){if(t.snap)return $e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$e(de(t.path,n),e))return!0;return!1}function Xg(t){t.visibleWrites=Su(t.allWrites,Zg,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Zg(t){return t.visible}function Su(t,e,n){let s=ze.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)$e(n,o)?(l=Te(n,o),s=Xn(s,l,r.snap)):$e(o,n)&&(l=Te(o,n),s=Xn(s,K(),r.snap.getChild(l)));else if(r.children){if($e(n,o))l=Te(n,o),s=Yl(s,l,r.children);else if($e(o,n))if(l=Te(o,n),B(l))s=Yl(s,K(),r.children);else{const a=vn(r.children,F(l));if(a){const c=a.getChild(ie(l));s=Xn(s,K(),c)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function Iu(t,e,n,s,i){if(!s&&!i){const r=tn(t.visibleWrites,e);if(r!=null)return r;{const o=Nt(t.visibleWrites,e);if(Rr(o))return n;if(n==null&&!Nr(o,K()))return null;{const l=n||O.EMPTY_NODE;return En(o,l)}}}else{const r=Nt(t.visibleWrites,e);if(!i&&Rr(r))return n;if(!i&&n==null&&!Nr(r,K()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&($e(c.path,e)||$e(e,c.path))},l=Su(t.allWrites,o,e),a=n||O.EMPTY_NODE;return En(l,a)}}}function em(t,e,n){let s=O.EMPTY_NODE;const i=tn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nt(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=En(Nt(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),Jl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nt(t.visibleWrites,e);return Jl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function tm(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(Nr(t.visibleWrites,r))return null;{const o=Nt(t.visibleWrites,r);return Rr(o)?i.getChild(n):En(o,i.getChild(n))}}function nm(t,e,n,s){const i=de(e,n),r=tn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nt(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function sm(t,e){return tn(t.visibleWrites,e)}function im(t,e,n,s,i,r,o){let l;const a=Nt(t.visibleWrites,e),c=tn(a,K());if(c!=null)l=c;else if(n!=null)l=En(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function rm(){return{visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1}}function ii(t,e,n,s){return Iu(t.writeTree,t.treePath,e,n,s)}function mo(t,e){return em(t.writeTree,t.treePath,e)}function Xl(t,e,n,s){return tm(t.writeTree,t.treePath,e,n,s)}function ri(t,e){return sm(t.writeTree,de(t.treePath,e))}function om(t,e,n,s,i,r){return im(t.writeTree,t.treePath,e,n,s,i,r)}function yo(t,e,n){return nm(t.writeTree,t.treePath,e,n)}function Tu(t,e){return xu(de(t.treePath,e),t.writeTree)}function xu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class lm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,us(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,cs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,us(s,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class am{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Nu=new am;class vo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zt(this.viewCache_),r=om(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function cm(t){return{filter:t}}function um(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hm(t,e,n,s,i){const r=new lm;let o,l;if(n.type===Ve.OVERWRITE){const c=n;c.source.fromUser?o=Ar(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=oi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ve.MERGE){const c=n;c.source.fromUser?o=dm(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Pr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ve.ACK_USER_WRITE){const c=n;c.revert?o=gm(t,e,c.path,s,i,r):o=pm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ve.LISTEN_COMPLETE)o=_m(t,e,n.path,s,r);else throw wn("Unknown operation type: "+n.type);const a=r.getChanges();return fm(e,o,a),{viewCache:o,changes:a}}function fm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=si(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(vu(si(e)))}}function Ru(t,e,n,s,i,r){const o=e.eventCache;if(ri(s,n)!=null)return e;{let l,a;if(B(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zt(e),u=c instanceof O?c:O.EMPTY_NODE,h=mo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ii(s,Zt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){E(At(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Xl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Xl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=yo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Jn(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function oi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=F(n);if(!a.isCompleteForPath(n)&&At(n)>1)return e;const m=ie(n),W=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),W):c=u.updateChild(a.getNode(),_,W,m,Nu,null)}const h=Eu(e,c,a.isFullyInitialized()||B(n),u.filtersNodes()),d=new vo(i,h,r);return Ru(t,h,n,i,d,l)}function Ar(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new vo(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Jn(e,c,!0,t.filter.filtersNodes());else{const h=F(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Jn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),_=l.getNode().getImmediateChild(h);let m;if(B(d))m=s;else{const x=u.getCompleteChild(h);x!=null?uu(d)===".priority"&&x.getChild(fu(d)).isEmpty()?m=x:m=x.updateChild(d,s):m=O.EMPTY_NODE}if(_.equals(m))a=e;else{const x=t.filter.updateChild(l.getNode(),h,m,d,u,o);a=Jn(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Zl(t,e){return t.eventCache.isCompleteForChild(e)}function dm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);Zl(e,F(u))&&(l=Ar(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);Zl(e,F(u))||(l=Ar(t,l,u,c,i,r,o))}),l}function ea(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=ea(t,_,d);a=oi(t,a,new Z(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),x=ea(t,m,d);a=oi(t,a,new Z(h),x,i,r,o,l)}}),a}function pm(t,e,n,s,i,r,o){if(ri(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return oi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(B(n)){let c=new re(null);return a.getNode().forEachChild(mn,(u,h)=>{c=c.set(new Z(u),h)}),Pr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=de(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Pr(t,e,n,c,i,r,l,o)}}function _m(t,e,n,s,i){const r=e.serverCache,o=Eu(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return Ru(t,o,n,s,Nu,i)}function gm(t,e,n,s,i,r){let o;if(ri(s,n)!=null)return e;{const l=new vo(s,e,i),a=e.eventCache.getNode();let c;if(B(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ii(s,Zt(e));else{const h=e.serverCache.getNode();E(h instanceof O,"serverChildren would be complete if leaf node"),u=mo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=F(n);let h=yo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,O.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ii(s,Zt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ri(s,K())!=null,Jn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class mm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new fo(s.getIndex()),r=Fg(s);this.processor_=cm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),u=new Pt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Pt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ti(h,u),this.eventGenerator_=new Vg(this.query_)}get query(){return this.query_}}function ym(t){return t.viewCache_.serverCache.getNode()}function vm(t){return si(t.viewCache_)}function Cm(t,e){const n=Zt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function ta(t){return t.eventRegistrations_.length===0}function bm(t,e){t.eventRegistrations_.push(e)}function na(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function sa(t,e,n,s){e.type===Ve.MERGE&&e.source.queryId!==null&&(E(Zt(t.viewCache_),"We should always have a full cache before handling merges"),E(si(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=hm(t.processor_,i,e,n,s);return um(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Au(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Em(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(vu(n.getNode())),Au(t,s,n.getNode(),e)}function Au(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return jg(t.eventGenerator_,e,n,i)}/**
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
 */let li;class Pu{constructor(){this.views=new Map}}function wm(t){E(!li,"__referenceConstructor has already been defined"),li=t}function Sm(){return E(li,"Reference.ts has not been loaded"),li}function Im(t){return t.views.size===0}function Co(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),sa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sa(o,e,n,s));return r}}function Ou(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ii(n,i?s:null),a=!1;l?a=!0:s instanceof O?(l=mo(n,s),a=!1):(l=O.EMPTY_NODE,a=!1);const c=Ti(new Pt(l,a,!1),new Pt(s,i,!1));return new mm(e,c)}return o}function Tm(t,e,n,s,i,r){const o=Ou(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),bm(o,n),Em(o,n)}function xm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(na(c,n,s)),ta(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(na(a,n,s)),ta(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ot(t)&&r.push(new(Sm())(e._repo,e._path)),{removed:r,events:o}}function Du(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rt(t,e){let n=null;for(const s of t.views.values())n=n||Cm(s,e);return n}function Mu(t,e){if(e._queryParams.loadsAllData())return Ni(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ku(t,e){return Mu(t,e)!=null}function Ot(t){return Ni(t)!=null}function Ni(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ai;function Nm(t){E(!ai,"__referenceConstructor has already been defined"),ai=t}function Rm(){return E(ai,"Reference.ts has not been loaded"),ai}let Am=1;class ia{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=rm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fu(t,e,n,s,i){return qg(t.pendingWriteTree_,e,n,s,i),i?ws(t,new Xt(bu(),e,n)):[]}function Gt(t,e,n=!1){const s=Yg(t.pendingWriteTree_,e);if(Qg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(K(),!0):Oe(s.children,o=>{r=r.set(new Z(o),!0)}),ws(t,new ni(s.path,r,n))}else return[]}function Es(t,e,n){return ws(t,new Xt(_o(),e,n))}function Pm(t,e,n){const s=re.fromObject(n);return ws(t,new ds(_o(),e,s))}function Om(t,e){return ws(t,new fs(_o(),e))}function Dm(t,e,n){const s=Eo(t,n);if(s){const i=wo(s),r=i.path,o=i.queryId,l=Te(r,e),a=new fs(go(o),l);return So(t,r,a)}else return[]}function ci(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ku(o,e))){const a=xm(o,e,n,s);Im(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Ot(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Fm(d);for(let m=0;m<_.length;++m){const x=_[m],W=x.query,U=Uu(t,x);t.listenProvider_.startListening(Zn(W),ps(t,W),U.hashFn,U.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Zn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Ri(d));t.listenProvider_.stopListening(Zn(d),_)}))}Lm(t,c)}return l}function Lu(t,e,n,s){const i=Eo(t,s);if(i!=null){const r=wo(i),o=r.path,l=r.queryId,a=Te(o,e),c=new Xt(go(l),a,n);return So(t,o,c)}else return[]}function Mm(t,e,n,s){const i=Eo(t,s);if(i){const r=wo(i),o=r.path,l=r.queryId,a=Te(o,e),c=re.fromObject(n),u=new ds(go(l),a,c);return So(t,o,u)}else return[]}function Or(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=Te(d,i);r=r||Rt(_,m),o=o||Ot(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ot(l),r=r||Rt(l,K())):(l=new Pu,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const x=Rt(m,K());x&&(r=r.updateImmediateChild(_,x))}));const c=ku(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ri(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Bm();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=xi(t.pendingWriteTree_,i);let h=Tm(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Mu(l,e);h=h.concat(Wm(t,e,d))}return h}function bo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Te(o,e),c=Rt(l,a);if(c)return c});return Iu(i,e,r,n,!0)}function km(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Te(c,n);s=s||Rt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Rt(i,K()):(i=new Pu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Pt(s,!0,!1):null,l=xi(t.pendingWriteTree_,e._path),a=Ou(i,e,l,r?o.getNode():O.EMPTY_NODE,r);return vm(a)}function ws(t,e){return Bu(e,t.syncPointTree_,null,xi(t.pendingWriteTree_,K()))}function Bu(t,e,n,s){if(B(t.path))return Wu(t,e,n,s);{const i=e.get(K());n==null&&i!=null&&(n=Rt(i,K()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Tu(s,o);r=r.concat(Bu(l,a,c,u))}return i&&(r=r.concat(Co(i,t,s,n))),r}}function Wu(t,e,n,s){const i=e.get(K());n==null&&i!=null&&(n=Rt(i,K()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Tu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Wu(u,l,a,c)))}),i&&(r=r.concat(Co(i,t,s,n))),r}function Uu(t,e){const n=e.query,s=ps(t,n);return{hashFn:()=>(ym(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Dm(t,n._path,s):Om(t,n._path);{const r=k_(i,n);return ci(t,n,null,r)}}}}function ps(t,e){const n=Ri(e);return t.queryToTagMap.get(n)}function Ri(t){return t._path.toString()+"$"+t._queryIdentifier}function Eo(t,e){return t.tagToQueryMap.get(e)}function wo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function So(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=xi(t.pendingWriteTree_,e);return Co(s,n,i,null)}function Fm(t){return t.fold((e,n,s)=>{if(n&&Ot(n))return[Ni(n)];{let i=[];return n&&(i=Du(n)),Oe(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Rm())(t._repo,t._path):t}function Lm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ri(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Bm(){return Am++}function Wm(t,e,n){const s=e._path,i=ps(t,e),r=Uu(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!B(c)&&u&&Ot(u))return[Ni(u).query];{let d=[];return u&&(d=d.concat(Du(u).map(_=>_.query))),Oe(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Zn(u),ps(t,u))}}return o}/**
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
 */class Io{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Io(n)}node(){return this.node_}}class To{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new To(this.syncTree_,n)}node(){return bo(this.syncTree_,this.path_)}}const Um=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ra=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Hm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $m(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Hm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},$m=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Vm=function(t,e,n,s){return xo(e,new To(n,t),s)},Hu=function(t,e,n){return xo(t,new Io(e),n)};function xo(t,e,n){const s=t.getPriority().val(),i=ra(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ra(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(oe,(l,a)=>{const c=xo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class No{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ro(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=F(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new No(i,s,r),n=ie(n),i=F(n)}return s}function xn(t){return t.node.value}function $u(t,e){t.node.value=e,Dr(t)}function Vu(t){return t.node.childCount>0}function jm(t){return xn(t)===void 0&&!Vu(t)}function Ai(t,e){Oe(t.node.children,(n,s)=>{e(new No(n,t,s))})}function ju(t,e,n,s){n&&e(t),Ai(t,i=>{ju(i,e,!0)})}function Gm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(t){return new Z(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function Dr(t){t.parent!==null&&Km(t.parent,t.name,t)}function Km(t,e,n){const s=jm(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Dr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Dr(t))}/**
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
 */const zm=/[\[\].#$\/\u0000-\u001F\u007F]/,qm=/[\[\].#$\u0000-\u001F\u007F]/,sr=10*1024*1024,Gu=function(t){return typeof t=="string"&&t.length!==0&&!zm.test(t)},Ku=function(t){return typeof t=="string"&&t.length!==0&&!qm.test(t)},Ym=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ku(t)},Qm=function(t,e,n,s){Ao(so(t,"value"),e,n)},Ao=function(t,e,n){const s=n instanceof Z?new pg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(Vc(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>sr/3&&Si(e)>sr)throw new Error(t+"contains a string greater than "+sr+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Oe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gu(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_g(s,o),Ao(t,l,s),gg(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},zu=function(t,e,n,s){if(!Ku(n))throw new Error(so(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zu(t,e,n)},Xm=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Zm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ym(n))throw new Error(so(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ey{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Po(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!co(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qu(t,e,n){Po(t,n),Yu(t,s=>co(s,e))}function ot(t,e,n){Po(t,n),Yu(t,s=>$e(s,e)||$e(e,s))}function Yu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ty(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ty(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&be("event: "+n.toString()),Tn(s)}}}/**
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
 */const ny="repo_interrupt",sy=25;class iy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ey,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ti(),this.transactionQueueTree_=new No,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ry(t,e,n){if(t.stats_=lo(t.repoInfo_),t.forceRestClient_||W_())t.server_=new ei(t.repoInfo_,(s,i,r,o)=>{oa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>la(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{oa(t,s,i,r,o)},s=>{la(t,s)},s=>{ly(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=j_(t.repoInfo_,()=>new $g(t.stats_,t.server_)),t.infoData_=new Lg,t.infoSyncTree_=new ia({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Es(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Do(t,"connected",!1),t.serverSyncTree_=new ia({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ot(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function oy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oo(t){return Um({timestamp:oy(t)})}function oa(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=zs(n,c=>me(c));o=Mm(t.serverSyncTree_,r,a,i)}else{const a=me(n);o=Lu(t.serverSyncTree_,r,a,i)}else if(s){const a=zs(n,c=>me(c));o=Pm(t.serverSyncTree_,r,a)}else{const a=me(n);o=Es(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Oi(t,r)),ot(t.eventQueue_,l,o)}function la(t,e){Do(t,"connected",e),e===!1&&uy(t)}function ly(t,e){Oe(e,(n,s)=>{Do(t,n,s)})}function Do(t,e,n){const s=new Z("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=Es(t.infoSyncTree_,s,i);ot(t.eventQueue_,s,r)}function Qu(t){return t.nextWriteId_++}function ay(t,e,n){const s=km(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=me(i).withIndex(e._queryParams.getIndex());Or(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Es(t.serverSyncTree_,e._path,r);else{const l=ps(t.serverSyncTree_,e);o=Lu(t.serverSyncTree_,e._path,r,l)}return ot(t.eventQueue_,e._path,o),ci(t.serverSyncTree_,e,n,null,!0),r},i=>(Pi(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function cy(t,e,n,s,i){Pi(t,"set",{path:e.toString(),value:n,priority:s});const r=Oo(t),o=me(n,s),l=bo(t.serverSyncTree_,e),a=Hu(o,l,r),c=Qu(t),u=Fu(t.serverSyncTree_,e,a,c,!0);Po(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Pe("set at "+e+" failed: "+d);const x=Gt(t.serverSyncTree_,c,!m);ot(t.eventQueue_,e,x),py(t,i,d,_)});const h=th(t,e);Oi(t,h),ot(t.eventQueue_,h,[])}function uy(t){Pi(t,"onDisconnectEvents");const e=Oo(t),n=ti();xr(t.onDisconnect_,K(),(i,r)=>{const o=Vm(i,r,t.serverSyncTree_,e);Cu(n,i,o)});let s=[];xr(n,K(),(i,r)=>{s=s.concat(Es(t.serverSyncTree_,i,r));const o=th(t,i);Oi(t,o)}),t.onDisconnect_=ti(),ot(t.eventQueue_,K(),s)}function hy(t,e,n){let s;F(e._path)===".info"?s=Or(t.infoSyncTree_,e,n):s=Or(t.serverSyncTree_,e,n),qu(t.eventQueue_,e._path,s)}function fy(t,e,n){let s;F(e._path)===".info"?s=ci(t.infoSyncTree_,e,n):s=ci(t.serverSyncTree_,e,n),qu(t.eventQueue_,e._path,s)}function dy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ny)}function Pi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function py(t,e,n,s){e&&Tn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ju(t,e,n){return bo(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Mo(t,e=t.transactionQueueTree_){if(e||Di(t,e),xn(e)){const n=Zu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_y(t,Ss(e),n)}else Vu(e)&&Ai(e,n=>{Mo(t,n)})}function _y(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ju(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Te(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Pi(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Gt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Di(t,Ro(t.transactionQueueTree_,e)),Mo(t,t.transactionQueueTree_),ot(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Tn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Oi(t,e)}},o)}function Oi(t,e){const n=Xu(t,e),s=Ss(n),i=Zu(t,n);return gy(t,i,s),s}function gy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Te(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=sy)u=!0,h="maxretry",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Ju(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Ao("transaction failed: Data returned ",_,a.path);let m=me(_);typeof _=="object"&&_!=null&&vt(_,".priority")||(m=m.updatePriority(d.getPriority()));const W=a.currentWriteId,U=Oo(t),Y=Hu(m,d,U);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=Y,a.currentWriteId=Qu(t),o.splice(o.indexOf(W),1),i=i.concat(Fu(t.serverSyncTree_,a.path,Y,a.currentWriteId,a.applyLocally)),i=i.concat(Gt(t.serverSyncTree_,W,!0))}else u=!0,h="nodata",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Di(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Tn(s[l]);Mo(t,t.transactionQueueTree_)}function Xu(t,e){let n,s=t.transactionQueueTree_;for(n=F(e);n!==null&&xn(s)===void 0;)s=Ro(s,n),e=ie(e),n=F(e);return s}function Zu(t,e){const n=[];return eh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function eh(t,e,n){const s=xn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ai(e,i=>{eh(t,i,n)})}function Di(t,e){const n=xn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,$u(e,n.length>0?n:void 0)}Ai(e,s=>{Di(t,s)})}function th(t,e){const n=Ss(Xu(t,e)),s=Ro(t.transactionQueueTree_,e);return Gm(s,i=>{ir(t,i)}),ir(t,s),ju(s,i=>{ir(t,i)}),n}function ir(t,e){const n=xn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$u(e,void 0):n.length=r+1,ot(t.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)Tn(s[o])}}/**
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
 */function my(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const aa=function(t,e){const n=vy(t),s=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},vy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=my(t.substring(u,h)));const d=yy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Cy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class by{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ko{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:uu(this._path)}get ref(){return new Ct(this._repo,this._path)}get _queryIdentifier(){const e=zl(this._queryParams),n=ro(e);return n==="{}"?"default":n}get _queryObject(){return zl(this._queryParams)}isEqual(e){if(e=Sn(e),!(e instanceof ko))return!1;const n=this._repo===e._repo,s=co(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dg(this._path)}}class Ct extends ko{constructor(e,n){super(e,n,new po,!1)}get parent(){const e=fu(this._path);return e===null?null:new Ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=Mr(this.ref,e);return new _s(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,Mr(this.ref,s),oe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wn(t,e){return t=Sn(t),t._checkNotDeleted("ref"),e!==void 0?Mr(t._root,e):t._root}function Mr(t,e){return t=Sn(t),F(t._path)===null?Jm("child","path",e):zu("child","path",e),new Ct(t._repo,de(t._path,e))}function kr(t,e){t=Sn(t),Xm("set",t._path),Qm("set",e,t._path);const n=new wi;return cy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function sh(t){t=Sn(t);const e=new nh(()=>{}),n=new Mi(e);return ay(t._repo,t,n).then(s=>new _s(s,new Ct(t._repo,t._path),t._queryParams.getIndex()))}class Mi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Cy("value",this,new _s(e.snapshotNode,new Ct(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new by(this,e,n):null}matches(e){return e instanceof Mi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Ey(t,e,n,s,i){const r=new nh(n,void 0),o=new Mi(r);return hy(t._repo,t,o),()=>fy(t._repo,t,o)}function ih(t,e,n,s){return Ey(t,"value",e)}wm(Ct);Nm(Ct);/**
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
 */const wy="FIREBASE_DATABASE_EMULATOR_HOST",Fr={};let Sy=!1;function Iy(t,e,n,s){t.repoInfo_=new tu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Ty(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=aa(r,i),l=o.repoInfo,a;typeof process<"u"&&Rl&&(a=Rl[wy]),a?(r=`http://${a}?ns=${l.namespace}`,o=aa(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new H_(t.name,t.options,e);Zm("Invalid Firebase Database URL",o),B(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ny(l,t,c,new U_(t,n));return new Ry(u,t)}function xy(t,e){const n=Fr[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dy(t),delete n[t.key]}function Ny(t,e,n,s){let i=Fr[e.name];i||(i={},Fr[e.name]=i);let r=i[t.toURLString()];return r&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iy(t,Sy,n,s),i[t.toURLString()]=r,r}class Ry{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ry(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ct(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function Ay(t=h_(),e){const n=o_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Yd("database");s&&Py(n,...s)}return n}function Py(t,e,n,s={}){t=Sn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&qs(s,r.repoInfo_.emulatorOptions))return;mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ls(Ls.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Qd(s.mockUserToken,t.app.options.projectId);o=new Ls(l)}Iy(r,i,s,o)}/**
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
 */function Oy(t){S_(u_),Qs(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ty(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_n(Al,Pl,t),_n(Al,Pl,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Oy();var Dy={apiKey:"AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",authDomain:"iamwaitingforyou-73.firebaseapp.com",databaseURL:"https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwaitingforyou-73",storageBucket:"iamwaitingforyou-73.firebasestorage.app",messagingSenderId:"576527778879",appId:"1:576527778879:web:059f06122df2b01d9a248a",measurementId:"G-62LMJM4Z24"};const My=Lc(Dy),Un=Ay(My),ky={class:"fb-check"},Fy={style:{"font-size":"18px",background:"orange",margin:"16px",padding:"5px"}},Ly={__name:"FireBaseCheck",setup(t){const e=ge(""),n=ge(""),s=Wn(Un,"guest"),i=ge(),r=ge("");function o(c){kr(s,{text:c}).then(()=>{console.log("Данные успешно записаны!"),i.value="Записано!"}).catch(u=>{console.error("Ошибка записи данных: ",u),i.value="Ошибка"})}ih(s,c=>{r.value=c.val(),console.log("Данные пользователя обновлены:",r.value)});function l(){o(e.value)}function a(){sh(s).then(c=>{if(c.exists()){const u=c.val();n.value=u,console.log("Данные пользователя:",u)}else console.log("Данные не найдены")}).catch(c=>{console.error("Ошибка чтения данных: ",c)})}return(c,u)=>(Ke(),pt("div",ky,[u[3]||(u[3]=N("div",{class:"about"},[N("h2",null,"Пишем/Читаем")],-1)),dn(N("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h)},null,512),[[pn,e.value]]),N("button",{onClick:u[1]||(u[1]=h=>l())}," Сохранить"),N("span",null,Ue(i.value),1),N("h3",null,Ue(n.value),1),N("button",{onClick:u[2]||(u[2]=h=>a())}," Читать"),N("div",Fy,Ue(r.value),1)]))}},it=Bd("fbStore",{state:()=>({userId:"",userName:"",nickname:"",oppponentId:"",opponentName:"",gameId:""}),actions:{async getField(t){const e=Wn(Un,t);return sh(e).then(n=>{if(n.exists()){const s=n.val();return on(">>> Данные пользователя:"),s}else on(t+" : данные не найдены")})},async setField(t,e){const n=Wn(Un,t);return kr(n,{text:e}).then(()=>{on("Данные успешно записаны!")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async setActive(t){const e=Wn(Un,"readyToPlay/333");console.log("link=",t),kr(e,{text:999}).then(()=>{on("2222Данные успешно записаны!")}).catch(n=>{console.error("2222Ошибка записи данных: ",n)})},async updateValue(t){const e=Wn(Un,t);return new Promise(n=>{ih(e,s=>{on("Данные обновлены:",s.val()),n(s.val())})})},getOpponent(){let t=localStorage.getItem("games");if(t){let e=this.gameId,n=JSON.parse(t);if(!n[e])return null;let s=n[e].findIndex(r=>!r.includes(this.userId)),i=n[e][s].split("::");return{name:i[1],id:i[0]}}else return null},setGame(t,e,n){let s=localStorage.getItem("games");if(s){let i=JSON.parse(s);on(i),i[t]=[e,n],localStorage.setItem("games",JSON.stringify(i))}},deleteGame(t,e,n){let s=localStorage.getItem("games");if(s){let i=JSON.parse(s);delete i[t],localStorage.setItem("games",JSON.stringify(i))}}}});function on(t){console.log("%c "+t,"color: green")}const By={__name:"KrestikiNoliki",setup(t){const e=it(),n=ge("");return e.updateValue("guest").then(s=>{n.value=JSON.stringify(s)}),(s,i)=>(Ke(),pt(Be,null,[i[1]||(i[1]=N("h3",null,"Крестики нолики!!!",-1)),dn(N("textarea",{"onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r),style:{width:"100%"},placeholder:"данные с сайта"},null,512),[[pn,n.value]]),i[2]||(i[2]=N("br",null,null,-1)),i[3]||(i[3]=N("br",null,null,-1))],64))}};function Wy(){console.log("searchOpp searchOpp searchOpp searchOpp"),it().getField(it().gameId).then(t=>{console.log("res=",t);let e="";try{e=JSON.parse(t.text)}catch{}console.log("games",e),e||Uy()})}function Uy(){it().getField("readyToPlay").then(t=>{console.log("READY TO PLAY res=",t),Hy()})}function Hy(){let t=`{${it().userId}: ${it().userName}}`;t={129121831921:"Маша"},console.log(t),it().setActive(t).then(e=>{console.log("active res=",e)})}const $y=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Vy={key:0},jy={key:1},Gy={style:{"font-size":"larger"}},Ky={__name:"RockPaperSScissors",setup(t){const e=it(),n=ge(0),s=ge(""),i=ge(""),r=ge("");e.gameId="g1";let o=e.getOpponent();console.log("opponent",o),o?(setTimeout(()=>{n.value=2},100),r.value=o.name,i.value=o.id):setTimeout(()=>{n.value=1},1e3);function l(){Wy()}return(a,c)=>(Ke(),pt("div",{class:"game",style:_i({background:n.value===2?"orange":n.value===1?"pink":""})},[c[11]||(c[11]=N("h1",null,"♕",-1)),c[12]||(c[12]=N("h2",null," Камень Ножницы Бумага ",-1)),n.value==1?(Ke(),pt("div",Vy,[N("p",null," Привет, "+Ue(ft(e).nickname||ft(e).userName)+" ! ",1),N("p",null,[dn(N("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),style:{"font-size":"larger",padding:"4px","text-align":"center"},onInput:c[1]||(c[1]=u=>ft(e).nickname=s.value),placeholder:"Сменить nickName"},null,544),[[pn,s.value]])]),N("button",{onClick:c[2]||(c[2]=u=>l())}," Искать соперника! "),c[3]||(c[3]=N("br",null,null,-1)),c[4]||(c[4]=N("br",null,null,-1))])):js("",!0),n.value===2?(Ke(),pt("div",jy,[N("p",null,[c[5]||(c[5]=Vt(" Против вас играет: ")),c[6]||(c[6]=N("br",null,null,-1)),N("b",Gy,Ue(r.value||i.value),1)]),c[7]||(c[7]=N("p",null," Выбери: ",-1)),c[8]||(c[8]=N("p",null,[N("button",null,"камень"),N("button",null,"ножницы"),N("button",null,"бумага")],-1)),c[9]||(c[9]=N("br",null,null,-1)),c[10]||(c[10]=N("p",null,[N("button",null," ИГРАТЬ")],-1))])):js("",!0)],4))}},ca=$y(Ky,[["__scopeId","data-v-577073ca"]]),zy={key:0},qy={key:1},Yy={__name:"DevelopPart",setup(t){const e=it(),n=ge("g1"),s=ge(""),i=ge(""),r=ge(""),o=ge(!1),l=ge(!1),a=ge("");function c(){e.getField(n.value||"guest").then(d=>{i.value=JSON.stringify(d)})}function u(){e.setField(n.value,s.value).then(d=>{r.value=JSON.stringify(d)})}function h(){navigator.clipboard.writeText(a.value).then(function(){console.log("Текст успешно скопирован в буфер обмена")},function(d){console.error("Произошла ошибка при копировании текста: ",d)})}return Zr(()=>{var _,m,x;let d=(_=window.Telegram)==null?void 0:_.WebApp;d&&(e.userName=((m=d.initDataUnsafe.user)==null?void 0:m.username)||"-",e.userId=((x=d.initDataUnsafe.user)==null?void 0:x.id)||"-"),a.value=JSON.stringify(d)}),(d,_)=>(Ke(),pt(Be,null,[_[16]||(_[16]=N("hr",null,null,-1)),_[17]||(_[17]=N("hr",null,null,-1)),_[18]||(_[18]=N("hr",null,null,-1)),N("h3",null,"userId : "+Ue(ft(e).userId),1),N("h3",null,"userName : "+Ue(ft(e).userName),1),N("h2",{style:{"text-align":"center"},onClick:_[0]||(_[0]=m=>o.value=!o.value)}," Админка FB ▼"),o.value?(Ke(),pt("div",zy,[_[8]||(_[8]=N("h4",null," Чтение (Админка)",-1)),_[9]||(_[9]=Vt(" Поле: ")),dn(N("input",{"onUpdate:modelValue":_[1]||(_[1]=m=>n.value=m)},null,512),[[pn,n.value]]),N("button",{onClick:_[2]||(_[2]=m=>c())}," Получить"),_[10]||(_[10]=N("br",null,null,-1)),dn(N("textarea",{rows:"7","onUpdate:modelValue":_[3]||(_[3]=m=>i.value=m),style:{width:"98%"}},null,512),[[pn,i.value]]),_[11]||(_[11]=N("hr",null,null,-1)),_[12]||(_[12]=N("h4",null," Сохранение ",-1)),dn(N("textarea",{rows:"2","onUpdate:modelValue":_[4]||(_[4]=m=>s.value=m),placeholder:"текст для сохранения",style:{width:"98%"}},null,512),[[pn,s.value]]),N("button",{onClick:_[5]||(_[5]=m=>u())}," Сохранить"),_[13]||(_[13]=N("br",null,null,-1))])):js("",!0),N("h2",{style:{"text-align":"center"},onClick:_[6]||(_[6]=m=>l.value=!l.value)}," Админка Телеграмм ▼"),l.value?(Ke(),pt("div",qy,[Vt(" userName: "+Ue(ft(e).userName),1),_[15]||(_[15]=N("br",null,null,-1)),Vt(" userId: "+Ue(ft(e).userId)+" ",1),N("p",null,[N("button",{onClick:_[7]||(_[7]=m=>h())},"Скопировать "),Vt(" txtArea: "+Ue(a.value),1),_[14]||(_[14]=N("br",null,null,-1))])])):js("",!0)],64))}},Qy={__name:"App",setup(t){const e=it();let n=Uh(ca);function s(i){switch(i){case 1:n.value=Ly;break;case 2:n.value=By;break;case 3:n.value=ca;break}}return Zr(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.userId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||"-",e.userName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"-")}),(i,r)=>(Ke(),pt(Be,null,[(Ke(),pc(_f(ft(n)))),r[3]||(r[3]=Vt(" игры ")),N("button",{onClick:r[0]||(r[0]=o=>s(1))},"1"),N("button",{onClick:r[1]||(r[1]=o=>s(2))},"2"),N("button",{onClick:r[2]||(r[2]=o=>s(3))},"3"),st(Yy)],64))}},Jy=Od(),rh=Rd(Qy);rh.use(Jy);rh.mount("#app");
