(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},ln=[],et=()=>{},lh=()=>!1,oi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Or=t=>t.startsWith("onUpdate:"),xe=Object.assign,Dr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ah=Object.prototype.hasOwnProperty,Y=(t,e)=>ah.call(t,e),k=Array.isArray,an=t=>li(t)==="[object Map]",la=t=>li(t)==="[object Set]",F=t=>typeof t=="function",he=t=>typeof t=="string",At=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",aa=t=>(le(t)||F(t))&&F(t.then)&&F(t.catch),ca=Object.prototype.toString,li=t=>ca.call(t),ch=t=>li(t).slice(8,-1),ua=t=>li(t)==="[object Object]",Mr=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mn=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uh=/-(\w)/g,We=ai(t=>t.replace(uh,(e,n)=>n?n.toUpperCase():"")),hh=/\B([A-Z])/g,Xt=ai(t=>t.replace(hh,"-$1").toLowerCase()),ci=ai(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pi=ai(t=>t?`on${ci(t)}`:""),Et=(t,e)=>!Object.is(t,e),Ns=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ha=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},er=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fo;const ui=()=>Fo||(Fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?_h(s):kr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||le(t))return t}const fh=/;(?![^(]*\))/g,dh=/:([^]+)/,ph=/\/\*[^]*?\*\//g;function _h(t){const e={};return t.replace(ph,"").split(fh).forEach(n=>{if(n){const s=n.split(dh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fr(t){let e="";if(he(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=Fr(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mh=Pr(gh);function fa(t){return!!t||t===""}const da=t=>!!(t&&t.__v_isRef===!0),lt=t=>he(t)?t:t==null?"":k(t)||le(t)&&(t.toString===ca||!F(t.toString))?da(t)?lt(t.value):JSON.stringify(t,pa,2):String(t),pa=(t,e)=>da(e)?pa(t,e.value):an(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Oi(s,r)+" =>"]=i,n),{})}:la(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oi(n))}:At(e)?Oi(e):le(e)&&!k(e)&&!ua(e)?String(e):e,Oi=(t,e="")=>{var n;return At(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class _a{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ga(t){return new _a(t)}function ma(){return we}function yh(t,e=!1){we&&we.cleanups.push(t)}let ne;const Di=new WeakSet;class ya{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Di.has(this)&&(Di.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ca(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lo(this),ba(this);const e=ne,n=Ve;ne=this,Ve=!0;try{return this.fn()}finally{Ea(this),ne=e,Ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wr(e);this.deps=this.depsTail=void 0,Lo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Di.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tr(this)&&this.run()}get dirty(){return tr(this)}}let va=0,kn,Fn;function Ca(t,e=!1){if(t.flags|=8,e){t.next=Fn,Fn=t;return}t.next=kn,kn=t}function Lr(){va++}function Br(){if(--va>0)return;if(Fn){let e=Fn;for(Fn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;kn;){let e=kn;for(kn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ba(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ea(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Wr(s),vh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function tr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yn))return;t.globalVersion=Yn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!tr(t)){t.flags&=-3;return}const n=ne,s=Ve;ne=t,Ve=!0;try{ba(t);const i=t.fn(t._value);(e.version===0||Et(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,Ve=s,Ea(t),t.flags&=-3}}function Wr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Wr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ve=!0;const Sa=[];function Pt(){Sa.push(Ve),Ve=!1}function Ot(){const t=Sa.pop();Ve=t===void 0?!0:t}function Lo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let Yn=0;class Ch{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ur{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Ve||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Ch(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Ia(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,Yn++,this.notify(e)}notify(e){Lr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Br()}}}function Ia(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ia(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ks=new WeakMap,Vt=Symbol(""),nr=Symbol(""),Qn=Symbol("");function Ce(t,e,n){if(Ve&&ne){let s=ks.get(t);s||ks.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ur),i.map=s,i.key=n),i.track()}}function at(t,e,n,s,i,r){const o=ks.get(t);if(!o){Yn++;return}const l=a=>{a&&a.trigger()};if(Lr(),e==="clear")o.forEach(l);else{const a=k(t),c=a&&Mr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Qn||!At(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Qn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Vt)),an(t)&&l(o.get(nr)));break;case"delete":a||(l(o.get(Vt)),an(t)&&l(o.get(nr)));break;case"set":an(t)&&l(o.get(Vt));break}}Br()}function bh(t,e){const n=ks.get(t);return n&&n.get(e)}function en(t){const e=K(t);return e===t?e:(Ce(e,"iterate",Qn),je(t)?e:e.map(Se))}function Hr(t){return Ce(t=K(t),"iterate",Qn),t}const Eh={__proto__:null,[Symbol.iterator](){return Mi(this,Symbol.iterator,Se)},concat(...t){return en(this).concat(...t.map(e=>k(e)?en(e):e))},entries(){return Mi(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return rt(this,"every",t,e,void 0,arguments)},filter(t,e){return rt(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return rt(this,"find",t,e,Se,arguments)},findIndex(t,e){return rt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rt(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return rt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ki(this,"includes",t)},indexOf(...t){return ki(this,"indexOf",t)},join(t){return en(this).join(t)},lastIndexOf(...t){return ki(this,"lastIndexOf",t)},map(t,e){return rt(this,"map",t,e,void 0,arguments)},pop(){return xn(this,"pop")},push(...t){return xn(this,"push",t)},reduce(t,...e){return Bo(this,"reduce",t,e)},reduceRight(t,...e){return Bo(this,"reduceRight",t,e)},shift(){return xn(this,"shift")},some(t,e){return rt(this,"some",t,e,void 0,arguments)},splice(...t){return xn(this,"splice",t)},toReversed(){return en(this).toReversed()},toSorted(t){return en(this).toSorted(t)},toSpliced(...t){return en(this).toSpliced(...t)},unshift(...t){return xn(this,"unshift",t)},values(){return Mi(this,"values",Se)}};function Mi(t,e,n){const s=Hr(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const wh=Array.prototype;function rt(t,e,n,s,i,r){const o=Hr(t),l=o!==t&&!je(t),a=o[e];if(a!==wh[e]){const h=a.apply(t,r);return l?Se(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,Se(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Bo(t,e,n,s){const i=Hr(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Se(l),a,t)}),i[e](r,...s)}function ki(t,e,n){const s=K(t);Ce(s,"iterate",Qn);const i=s[e](...n);return(i===-1||i===!1)&&jr(n[0])?(n[0]=K(n[0]),s[e](...n)):i}function xn(t,e,n=[]){Pt(),Lr();const s=K(t)[e].apply(t,n);return Br(),Ot(),s}const Sh=Pr("__proto__,__v_isRef,__isVue"),Ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(At));function Ih(t){At(t)||(t=String(t));const e=K(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class xa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?kh:Pa:r?Aa:Ra).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=k(e);if(!i){let a;if(o&&(a=Eh[n]))return a;if(n==="hasOwnProperty")return Ih}const l=Reflect.get(e,n,ce(e)?e:s);return(At(n)?Ta.has(n):Sh(n))||(i||Ce(e,"get",n),r)?l:ce(l)?o&&Mr(n)?l:l.value:le(l)?i?Oa(l):hi(l):l}}class Na extends xa{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=zt(r);if(!je(s)&&!zt(s)&&(r=K(r),s=K(s)),!k(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=k(e)&&Mr(n)?Number(n)<e.length:Y(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===K(i)&&(o?Et(s,r)&&at(e,"set",n,s):at(e,"add",n,s)),l}deleteProperty(e,n){const s=Y(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&at(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!At(n)||!Ta.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",k(e)?"length":Vt),Reflect.ownKeys(e)}}class Th extends xa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xh=new Na,Nh=new Th,Rh=new Na(!0);const sr=t=>t,ws=t=>Reflect.getPrototypeOf(t);function Ah(t,e,n){return function(...s){const i=this.__v_raw,r=K(i),o=an(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?sr:e?ir:Se;return!e&&Ce(r,"iterate",a?nr:Vt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ss(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ph(t,e){const n={get(i){const r=this.__v_raw,o=K(r),l=K(i);t||(Et(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:a}=ws(o),c=e?sr:t?ir:Se;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(K(i),"iterate",Vt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=K(r),l=K(i);return t||(Et(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=K(l),c=e?sr:t?ir:Se;return!t&&Ce(a,"iterate",Vt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return xe(n,t?{add:Ss("add"),set:Ss("set"),delete:Ss("delete"),clear:Ss("clear")}:{add(i){!e&&!je(i)&&!zt(i)&&(i=K(i));const r=K(this);return ws(r).has.call(r,i)||(r.add(i),at(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!zt(r)&&(r=K(r));const o=K(this),{has:l,get:a}=ws(o);let c=l.call(o,i);c||(i=K(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Et(r,u)&&at(o,"set",i,r):at(o,"add",i,r),this},delete(i){const r=K(this),{has:o,get:l}=ws(r);let a=o.call(r,i);a||(i=K(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&at(r,"delete",i,void 0),c},clear(){const i=K(this),r=i.size!==0,o=i.clear();return r&&at(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ah(i,t,e)}),n}function $r(t,e){const n=Ph(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Y(n,i)&&i in s?n:s,i,r)}const Oh={get:$r(!1,!1)},Dh={get:$r(!1,!0)},Mh={get:$r(!0,!1)};const Ra=new WeakMap,Aa=new WeakMap,Pa=new WeakMap,kh=new WeakMap;function Fh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lh(t){return t.__v_skip||!Object.isExtensible(t)?0:Fh(ch(t))}function hi(t){return zt(t)?t:Vr(t,!1,xh,Oh,Ra)}function Bh(t){return Vr(t,!1,Rh,Dh,Aa)}function Oa(t){return Vr(t,!0,Nh,Mh,Pa)}function Vr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Lh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function jt(t){return zt(t)?jt(t.__v_raw):!!(t&&t.__v_isReactive)}function zt(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function jr(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Gr(t){return!Y(t,"__v_skip")&&Object.isExtensible(t)&&ha(t,"__v_skip",!0),t}const Se=t=>le(t)?hi(t):t,ir=t=>le(t)?Oa(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function me(t){return Da(t,!1)}function Wh(t){return Da(t,!0)}function Da(t,e){return ce(t)?t:new Uh(t,e)}class Uh{constructor(e,n){this.dep=new Ur,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:K(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||je(e)||zt(e);e=s?e:K(e),Et(e,n)&&(this._rawValue=e,this._value=s?e:Se(e),this.dep.trigger())}}function Kr(t){return ce(t)?t.value:t}const Hh={get:(t,e,n)=>e==="__v_raw"?t:Kr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ma(t){return jt(t)?t:new Proxy(t,Hh)}function $h(t){const e=k(t)?new Array(t.length):{};for(const n in t)e[n]=jh(t,n);return e}class Vh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return bh(K(this._object),this._key)}}function jh(t,e,n){const s=t[e];return ce(s)?s:new Vh(t,e,n)}class Gh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ur(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Ca(this,!0),!0}get value(){const e=this.dep.track();return wa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kh(t,e,n=!1){let s,i;return F(t)?s=t:(s=t.get,i=t.set),new Gh(s,i,n)}const Is={},Fs=new WeakMap;let Lt;function zh(t,e=!1,n=Lt){if(n){let s=Fs.get(n);s||Fs.set(n,s=[]),s.push(t)}}function qh(t,e,n=X){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=A=>i?A:je(A)||i===!1||i===0?ct(A,1):ct(A);let u,h,d,_,y=!1,m=!1;if(ce(t)?(h=()=>t.value,y=je(t)):jt(t)?(h=()=>c(t),y=!0):k(t)?(m=!0,y=t.some(A=>jt(A)||je(A)),h=()=>t.map(A=>{if(ce(A))return A.value;if(jt(A))return c(A);if(F(A))return a?a(A,2):A()})):F(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Pt();try{d()}finally{Ot()}}const A=Lt;Lt=u;try{return a?a(t,3,[_]):t(_)}finally{Lt=A}}:h=et,e&&i){const A=h,q=i===!0?1/0:i;h=()=>ct(A(),q)}const R=ma(),L=()=>{u.stop(),R&&R.active&&Dr(R.effects,u)};if(r&&e){const A=e;e=(...q)=>{A(...q),L()}}let j=m?new Array(t.length).fill(Is):Is;const Q=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const q=u.run();if(i||y||(m?q.some((it,ve)=>Et(it,j[ve])):Et(q,j))){d&&d();const it=Lt;Lt=u;try{const ve=[q,j===Is?void 0:m&&j[0]===Is?[]:j,_];a?a(e,3,ve):e(...ve),j=q}finally{Lt=it}}}else u.run()};return l&&l(Q),u=new ya(h),u.scheduler=o?()=>o(Q,!1):Q,_=A=>zh(A,!1,u),d=u.onStop=()=>{const A=Fs.get(u);if(A){if(a)a(A,4);else for(const q of A)q();Fs.delete(u)}},e?s?Q(!0):j=u.run():o?o(Q.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function ct(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))ct(t.value,e,n);else if(k(t))for(let s=0;s<t.length;s++)ct(t[s],e,n);else if(la(t)||an(t))t.forEach(s=>{ct(s,e,n)});else if(ua(t)){for(const s in t)ct(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ct(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hs(t,e,n,s){try{return s?t(...s):t()}catch(i){fi(i,e,n)}}function nt(t,e,n,s){if(F(t)){const i=hs(t,e,n,s);return i&&aa(i)&&i.catch(r=>{fi(r,e,n)}),i}if(k(t)){const i=[];for(let r=0;r<t.length;r++)i.push(nt(t[r],e,n,s));return i}}function fi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Pt(),hs(r,null,10,[t,a,c]),Ot();return}}Yh(t,n,i,s,o)}function Yh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ie=[];let Xe=-1;const cn=[];let Ct=null,sn=0;const ka=Promise.resolve();let Ls=null;function Fa(t){const e=Ls||ka;return t?e.then(this?t.bind(this):t):e}function Qh(t){let e=Xe+1,n=Ie.length;for(;e<n;){const s=e+n>>>1,i=Ie[s],r=Jn(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function zr(t){if(!(t.flags&1)){const e=Jn(t),n=Ie[Ie.length-1];!n||!(t.flags&2)&&e>=Jn(n)?Ie.push(t):Ie.splice(Qh(e),0,t),t.flags|=1,La()}}function La(){Ls||(Ls=ka.then(Wa))}function Jh(t){k(t)?cn.push(...t):Ct&&t.id===-1?Ct.splice(sn+1,0,t):t.flags&1||(cn.push(t),t.flags|=1),La()}function Wo(t,e,n=Xe+1){for(;n<Ie.length;n++){const s=Ie[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ba(t){if(cn.length){const e=[...new Set(cn)].sort((n,s)=>Jn(n)-Jn(s));if(cn.length=0,Ct){Ct.push(...e);return}for(Ct=e,sn=0;sn<Ct.length;sn++){const n=Ct[sn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ct=null,sn=0}}const Jn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wa(t){try{for(Xe=0;Xe<Ie.length;Xe++){const e=Ie[Xe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xe<Ie.length;Xe++){const e=Ie[Xe];e&&(e.flags&=-2)}Xe=-1,Ie.length=0,Ba(),Ls=null,(Ie.length||cn.length)&&Wa()}}let Re=null,Ua=null;function Bs(t){const e=Re;return Re=t,Ua=t&&t.type.__scopeId||null,e}function Xh(t,e=Re,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Yo(-1);const r=Bs(e);let o;try{o=t(...i)}finally{Bs(r),s._d&&Yo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ln(t,e){if(Re===null)return t;const n=gi(Re),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=X]=e[i];r&&(F(r)&&(r={mounted:r,updated:r}),r.deep&&ct(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Pt(),nt(a,n,8,[t.el,l,t,e]),Ot())}}const Zh=Symbol("_vte"),ef=t=>t.__isTeleport;function qr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,qr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ha(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ws(t,e,n,s,i=!1){if(k(t)){t.forEach((y,m)=>Ws(y,e&&(k(e)?e[m]:e),n,s,i));return}if(Bn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ws(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?gi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===X?l.refs={}:l.refs,h=l.setupState,d=K(h),_=h===X?()=>!1:y=>Y(d,y);if(c!=null&&c!==a&&(he(c)?(u[c]=null,_(c)&&(h[c]=null)):ce(c)&&(c.value=null)),F(a))hs(a,l,12,[o,u]);else{const y=he(a),m=ce(a);if(y||m){const R=()=>{if(t.f){const L=y?_(a)?h[a]:u[a]:a.value;i?k(L)&&Dr(L,r):k(L)?L.includes(r)||L.push(r):y?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else y?(u[a]=o,_(a)&&(h[a]=o)):m&&(a.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,ke(R,n)):R()}}}ui().requestIdleCallback;ui().cancelIdleCallback;const Bn=t=>!!t.type.__asyncLoader,$a=t=>t.type.__isKeepAlive;function tf(t,e){Va(t,"a",e)}function nf(t,e){Va(t,"da",e)}function Va(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(di(e,s,n),n){let i=n.parent;for(;i&&i.parent;)$a(i.parent.vnode)&&sf(s,e,n,i),i=i.parent}}function sf(t,e,n,s){const i=di(e,t,s,!0);Ga(()=>{Dr(s[e],i)},n)}function di(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Pt();const l=fs(n),a=nt(e,n,t,o);return l(),Ot(),a});return s?i.unshift(r):i.push(r),r}}const _t=t=>(e,n=ye)=>{(!Zn||t==="sp")&&di(t,(...s)=>e(...s),n)},rf=_t("bm"),ja=_t("m"),of=_t("bu"),lf=_t("u"),af=_t("bum"),Ga=_t("um"),cf=_t("sp"),uf=_t("rtg"),hf=_t("rtc");function ff(t,e=ye){di("ec",t,e)}const df="components",Ka=Symbol.for("v-ndc");function pf(t){return he(t)?_f(df,t,!1)||t:t||Ka}function _f(t,e,n=!0,s=!1){const i=Re||ye;if(i){const r=i.type;{const l=sd(r,!1);if(l&&(l===e||l===We(e)||l===ci(We(e))))return r}const o=Uo(i[t]||r[t],e)||Uo(i.appContext[t],e);return!o&&s?r:o}}function Uo(t,e){return t&&(t[e]||t[We(e)]||t[ci(We(e))])}const rr=t=>t?_c(t)?gi(t):rr(t.parent):null,Wn=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rr(t.parent),$root:t=>rr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qa(t),$forceUpdate:t=>t.f||(t.f=()=>{zr(t.update)}),$nextTick:t=>t.n||(t.n=Fa.bind(t.proxy)),$watch:t=>Bf.bind(t)}),Fi=(t,e)=>t!==X&&!t.__isScriptSetup&&Y(t,e),gf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Fi(s,e))return o[e]=1,s[e];if(i!==X&&Y(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,r[e];if(n!==X&&Y(n,e))return o[e]=4,n[e];or&&(o[e]=0)}}const u=Wn[e];let h,d;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==X&&Y(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,Y(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Fi(i,e)?(i[e]=n,!0):s!==X&&Y(s,e)?(s[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==X&&Y(t,o)||Fi(e,o)||(l=r[0])&&Y(l,o)||Y(s,o)||Y(Wn,o)||Y(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ho(t){return k(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let or=!0;function mf(t){const e=qa(t),n=t.proxy,s=t.ctx;or=!1,e.beforeCreate&&$o(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:y,activated:m,deactivated:R,beforeDestroy:L,beforeUnmount:j,destroyed:Q,unmounted:A,render:q,renderTracked:it,renderTriggered:ve,errorCaptured:$,serverPrefetch:G,expose:ue,inheritAttrs:Le,components:Ke,directives:yt,filters:wn}=e;if(c&&yf(c,s,null),o)for(const H in o){const ee=o[H];F(ee)&&(s[H]=ee.bind(n))}if(i){const H=i.call(n,n);le(H)&&(t.data=hi(H))}if(or=!0,r)for(const H in r){const ee=r[H],Dt=F(ee)?ee.bind(n,n):F(ee.get)?ee.get.bind(n,n):et,bs=!F(ee)&&F(ee.set)?ee.set.bind(n):et,Mt=mc({get:Dt,set:bs});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:ze=>Mt.value=ze})}if(l)for(const H in l)za(l[H],s,n,H);if(a){const H=F(a)?a.call(n):a;Reflect.ownKeys(H).forEach(ee=>{Sf(ee,H[ee])})}u&&$o(u,t,"c");function ae(H,ee){k(ee)?ee.forEach(Dt=>H(Dt.bind(n))):ee&&H(ee.bind(n))}if(ae(rf,h),ae(ja,d),ae(of,_),ae(lf,y),ae(tf,m),ae(nf,R),ae(ff,$),ae(hf,it),ae(uf,ve),ae(af,j),ae(Ga,A),ae(cf,G),k(ue))if(ue.length){const H=t.exposed||(t.exposed={});ue.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>n[ee],set:Dt=>n[ee]=Dt})})}else t.exposed||(t.exposed={});q&&t.render===et&&(t.render=q),Le!=null&&(t.inheritAttrs=Le),Ke&&(t.components=Ke),yt&&(t.directives=yt),G&&Ha(t)}function yf(t,e,n=et){k(t)&&(t=lr(t));for(const s in t){const i=t[s];let r;le(i)?"default"in i?r=Un(i.from||s,i.default,!0):r=Un(i.from||s):r=Un(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function $o(t,e,n){nt(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function za(t,e,n,s){let i=s.includes(".")?ac(n,s):()=>n[s];if(he(t)){const r=e[t];F(r)&&Rs(i,r)}else if(F(t))Rs(i,t.bind(n));else if(le(t))if(k(t))t.forEach(r=>za(r,e,n,s));else{const r=F(t.handler)?t.handler.bind(n):e[t.handler];F(r)&&Rs(i,r,t)}}function qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Us(a,c,o,!0)),Us(a,e,o)),le(e)&&r.set(e,a),a}function Us(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Us(t,r,n,!0),i&&i.forEach(o=>Us(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=vf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const vf={data:Vo,props:jo,emits:jo,methods:Dn,computed:Dn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Dn,directives:Dn,watch:bf,provide:Vo,inject:Cf};function Vo(t,e){return e?t?function(){return xe(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Cf(t,e){return Dn(lr(t),lr(e))}function lr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?xe(Object.create(null),t,e):e}function jo(t,e){return t?k(t)&&k(e)?[...new Set([...t,...e])]:xe(Object.create(null),Ho(t),Ho(e??{})):e}function bf(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Ee(t[s],e[s]);return n}function Ya(){return{app:null,config:{isNativeTag:lh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function wf(t,e){return function(s,i=null){F(s)||(s=xe({},s)),i!=null&&!le(i)&&(i=null);const r=Ya(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Ef++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:rd,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(c,...h)):F(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||tt(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,gi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(nt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Gt;Gt=c;try{return u()}finally{Gt=h}}};return c}}let Gt=null;function Sf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Un(t,e,n=!1){const s=ye||Re;if(s||Gt){const i=Gt?Gt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(s&&s.proxy):e}}function If(){return!!(ye||Re||Gt)}const Qa={},Ja=()=>Object.create(Qa),Xa=t=>Object.getPrototypeOf(t)===Qa;function Tf(t,e,n,s=!1){const i={},r=Ja();t.propsDefaults=Object.create(null),Za(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Bh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function xf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=K(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(pi(t.emitsOptions,d))continue;const _=e[d];if(a)if(Y(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const y=We(d);i[y]=ar(a,l,y,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Za(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!Y(e,h)&&((u=Xt(h))===h||!Y(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ar(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Y(e,h))&&(delete r[h],c=!0)}c&&at(t.attrs,"set","")}function Za(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Mn(a))continue;const c=e[a];let u;i&&Y(i,u=We(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:pi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=K(n),c=l||X;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ar(i,a,h,c[h],t,!Y(c,h))}}return o}function ar(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Y(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&F(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=fs(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}const Nf=new WeakMap;function ec(t,e,n=!1){const s=n?Nf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!F(t)){const u=h=>{a=!0;const[d,_]=ec(h,e,!0);xe(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return le(t)&&s.set(t,ln),ln;if(k(r))for(let u=0;u<r.length;u++){const h=We(r[u]);Go(h)&&(o[h]=X)}else if(r)for(const u in r){const h=We(u);if(Go(h)){const d=r[u],_=o[h]=k(d)||F(d)?{type:d}:xe({},d),y=_.type;let m=!1,R=!0;if(k(y))for(let L=0;L<y.length;++L){const j=y[L],Q=F(j)&&j.name;if(Q==="Boolean"){m=!0;break}else Q==="String"&&(R=!1)}else m=F(y)&&y.name==="Boolean";_[0]=m,_[1]=R,(m||Y(_,"default"))&&l.push(h)}}const c=[o,l];return le(t)&&s.set(t,c),c}function Go(t){return t[0]!=="$"&&!Mn(t)}const tc=t=>t[0]==="_"||t==="$stable",Yr=t=>k(t)?t.map(Ze):[Ze(t)],Rf=(t,e,n)=>{if(e._n)return e;const s=Xh((...i)=>Yr(e(...i)),n);return s._c=!1,s},nc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(tc(i))continue;const r=t[i];if(F(r))e[i]=Rf(i,r,s);else if(r!=null){const o=Yr(r);e[i]=()=>o}}},sc=(t,e)=>{const n=Yr(e);t.slots.default=()=>n},ic=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Af=(t,e,n)=>{const s=t.slots=Ja();if(t.vnode.shapeFlag&32){const i=e._;i?(ic(s,e,n),n&&ha(s,"_",i,!0)):nc(e,s)}else e&&sc(t,e)},Pf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=X;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ic(i,e,n):(r=!e.$stable,nc(e,i)),o=e}else e&&(sc(t,e),o={default:1});if(r)for(const l in i)!tc(l)&&o[l]==null&&delete i[l]},ke=Gf;function Of(t){return Df(t)}function Df(t,e){const n=ui();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=et,insertStaticContent:y}=t,m=(f,p,g,b=null,v=null,C=null,T=void 0,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Nn(f,p)&&(b=Es(f),ze(f,v,C,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:P,shapeFlag:x}=p;switch(E){case _i:R(f,p,g,b);break;case qt:L(f,p,g,b);break;case Bi:f==null&&j(p,g,b,T);break;case Be:Ke(f,p,g,b,v,C,T,I,S);break;default:x&1?q(f,p,g,b,v,C,T,I,S):x&6?yt(f,p,g,b,v,C,T,I,S):(x&64||x&128)&&E.process(f,p,g,b,v,C,T,I,S,In)}P!=null&&v&&Ws(P,f&&f.ref,C,p||f,!p)},R=(f,p,g,b)=>{if(f==null)s(p.el=l(p.children),g,b);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},L=(f,p,g,b)=>{f==null?s(p.el=a(p.children||""),g,b):p.el=f.el},j=(f,p,g,b)=>{[f.el,f.anchor]=y(f.children,p,g,b,f.el,f.anchor)},Q=({el:f,anchor:p},g,b)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,b),f=v;s(p,g,b)},A=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},q=(f,p,g,b,v,C,T,I,S)=>{p.type==="svg"?T="svg":p.type==="math"&&(T="mathml"),f==null?it(p,g,b,v,C,T,I,S):G(f,p,v,C,T,I,S)},it=(f,p,g,b,v,C,T,I)=>{let S,E;const{props:P,shapeFlag:x,transition:N,dirs:D}=f;if(S=f.el=o(f.type,C,P&&P.is,P),x&8?u(S,f.children):x&16&&$(f.children,S,null,b,v,Li(f,C),T,I),D&&kt(f,null,b,"created"),ve(S,f,f.scopeId,T,b),P){for(const te in P)te!=="value"&&!Mn(te)&&r(S,te,null,P[te],C,b);"value"in P&&r(S,"value",null,P.value,C),(E=P.onVnodeBeforeMount)&&Je(E,b,f)}D&&kt(f,null,b,"beforeMount");const V=Mf(v,N);V&&N.beforeEnter(S),s(S,p,g),((E=P&&P.onVnodeMounted)||V||D)&&ke(()=>{E&&Je(E,b,f),V&&N.enter(S),D&&kt(f,null,b,"mounted")},v)},ve=(f,p,g,b,v)=>{if(g&&_(f,g),b)for(let C=0;C<b.length;C++)_(f,b[C]);if(v){let C=v.subTree;if(p===C||uc(C.type)&&(C.ssContent===p||C.ssFallback===p)){const T=v.vnode;ve(f,T,T.scopeId,T.slotScopeIds,v.parent)}}},$=(f,p,g,b,v,C,T,I,S=0)=>{for(let E=S;E<f.length;E++){const P=f[E]=I?bt(f[E]):Ze(f[E]);m(null,P,p,g,b,v,C,T,I)}},G=(f,p,g,b,v,C,T)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:E,dirs:P}=p;S|=f.patchFlag&16;const x=f.props||X,N=p.props||X;let D;if(g&&Ft(g,!1),(D=N.onVnodeBeforeUpdate)&&Je(D,g,p,f),P&&kt(p,f,g,"beforeUpdate"),g&&Ft(g,!0),(x.innerHTML&&N.innerHTML==null||x.textContent&&N.textContent==null)&&u(I,""),E?ue(f.dynamicChildren,E,I,g,b,Li(p,v),C):T||ee(f,p,I,null,g,b,Li(p,v),C,!1),S>0){if(S&16)Le(I,x,N,g,v);else if(S&2&&x.class!==N.class&&r(I,"class",null,N.class,v),S&4&&r(I,"style",x.style,N.style,v),S&8){const V=p.dynamicProps;for(let te=0;te<V.length;te++){const J=V[te],De=x[J],Ne=N[J];(Ne!==De||J==="value")&&r(I,J,De,Ne,v,g)}}S&1&&f.children!==p.children&&u(I,p.children)}else!T&&E==null&&Le(I,x,N,g,v);((D=N.onVnodeUpdated)||P)&&ke(()=>{D&&Je(D,g,p,f),P&&kt(p,f,g,"updated")},b)},ue=(f,p,g,b,v,C,T)=>{for(let I=0;I<p.length;I++){const S=f[I],E=p[I],P=S.el&&(S.type===Be||!Nn(S,E)||S.shapeFlag&70)?h(S.el):g;m(S,E,P,null,b,v,C,T,!0)}},Le=(f,p,g,b,v)=>{if(p!==g){if(p!==X)for(const C in p)!Mn(C)&&!(C in g)&&r(f,C,p[C],null,v,b);for(const C in g){if(Mn(C))continue;const T=g[C],I=p[C];T!==I&&C!=="value"&&r(f,C,I,T,v,b)}"value"in g&&r(f,"value",p.value,g.value,v)}},Ke=(f,p,g,b,v,C,T,I,S)=>{const E=p.el=f?f.el:l(""),P=p.anchor=f?f.anchor:l("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:D}=p;D&&(I=I?I.concat(D):D),f==null?(s(E,g,b),s(P,g,b),$(p.children||[],g,P,v,C,T,I,S)):x>0&&x&64&&N&&f.dynamicChildren?(ue(f.dynamicChildren,N,g,v,C,T,I),(p.key!=null||v&&p===v.subTree)&&rc(f,p,!0)):ee(f,p,g,P,v,C,T,I,S)},yt=(f,p,g,b,v,C,T,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,g,b,T,S):wn(p,g,b,v,C,T,S):Cs(f,p,S)},wn=(f,p,g,b,v,C,T)=>{const I=f.component=Xf(f,b,v);if($a(f)&&(I.ctx.renderer=In),Zf(I,!1,T),I.asyncDep){if(v&&v.registerDep(I,ae,T),!f.el){const S=I.subTree=tt(qt);L(null,S,p,g)}}else ae(I,f,p,g,v,C,T)},Cs=(f,p,g)=>{const b=p.component=f.component;if(Vf(f,p,g))if(b.asyncDep&&!b.asyncResolved){H(b,p,g);return}else b.next=p,b.update();else p.el=f.el,b.vnode=p},ae=(f,p,g,b,v,C,T)=>{const I=()=>{if(f.isMounted){let{next:x,bu:N,u:D,parent:V,vnode:te}=f;{const Ye=oc(f);if(Ye){x&&(x.el=te.el,H(f,x,T)),Ye.asyncDep.then(()=>{f.isUnmounted||I()});return}}let J=x,De;Ft(f,!1),x?(x.el=te.el,H(f,x,T)):x=te,N&&Ns(N),(De=x.props&&x.props.onVnodeBeforeUpdate)&&Je(De,V,x,te),Ft(f,!0);const Ne=zo(f),qe=f.subTree;f.subTree=Ne,m(qe,Ne,h(qe.el),Es(qe),f,v,C),x.el=Ne.el,J===null&&jf(f,Ne.el),D&&ke(D,v),(De=x.props&&x.props.onVnodeUpdated)&&ke(()=>Je(De,V,x,te),v)}else{let x;const{el:N,props:D}=p,{bm:V,m:te,parent:J,root:De,type:Ne}=f,qe=Bn(p);Ft(f,!1),V&&Ns(V),!qe&&(x=D&&D.onVnodeBeforeMount)&&Je(x,J,p),Ft(f,!0);{De.ce&&De.ce._injectChildStyle(Ne);const Ye=f.subTree=zo(f);m(null,Ye,g,b,f,v,C),p.el=Ye.el}if(te&&ke(te,v),!qe&&(x=D&&D.onVnodeMounted)){const Ye=p;ke(()=>Je(x,J,Ye),v)}(p.shapeFlag&256||J&&Bn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&ke(f.a,v),f.isMounted=!0,p=g=b=null}};f.scope.on();const S=f.effect=new ya(I);f.scope.off();const E=f.update=S.run.bind(S),P=f.job=S.runIfDirty.bind(S);P.i=f,P.id=f.uid,S.scheduler=()=>zr(P),Ft(f,!0),E()},H=(f,p,g)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,xf(f,p.props,b,g),Pf(f,p.children,g),Pt(),Wo(f),Ot()},ee=(f,p,g,b,v,C,T,I,S=!1)=>{const E=f&&f.children,P=f?f.shapeFlag:0,x=p.children,{patchFlag:N,shapeFlag:D}=p;if(N>0){if(N&128){bs(E,x,g,b,v,C,T,I,S);return}else if(N&256){Dt(E,x,g,b,v,C,T,I,S);return}}D&8?(P&16&&Sn(E,v,C),x!==E&&u(g,x)):P&16?D&16?bs(E,x,g,b,v,C,T,I,S):Sn(E,v,C,!0):(P&8&&u(g,""),D&16&&$(x,g,b,v,C,T,I,S))},Dt=(f,p,g,b,v,C,T,I,S)=>{f=f||ln,p=p||ln;const E=f.length,P=p.length,x=Math.min(E,P);let N;for(N=0;N<x;N++){const D=p[N]=S?bt(p[N]):Ze(p[N]);m(f[N],D,g,null,v,C,T,I,S)}E>P?Sn(f,v,C,!0,!1,x):$(p,g,b,v,C,T,I,S,x)},bs=(f,p,g,b,v,C,T,I,S)=>{let E=0;const P=p.length;let x=f.length-1,N=P-1;for(;E<=x&&E<=N;){const D=f[E],V=p[E]=S?bt(p[E]):Ze(p[E]);if(Nn(D,V))m(D,V,g,null,v,C,T,I,S);else break;E++}for(;E<=x&&E<=N;){const D=f[x],V=p[N]=S?bt(p[N]):Ze(p[N]);if(Nn(D,V))m(D,V,g,null,v,C,T,I,S);else break;x--,N--}if(E>x){if(E<=N){const D=N+1,V=D<P?p[D].el:b;for(;E<=N;)m(null,p[E]=S?bt(p[E]):Ze(p[E]),g,V,v,C,T,I,S),E++}}else if(E>N)for(;E<=x;)ze(f[E],v,C,!0),E++;else{const D=E,V=E,te=new Map;for(E=V;E<=N;E++){const Me=p[E]=S?bt(p[E]):Ze(p[E]);Me.key!=null&&te.set(Me.key,E)}let J,De=0;const Ne=N-V+1;let qe=!1,Ye=0;const Tn=new Array(Ne);for(E=0;E<Ne;E++)Tn[E]=0;for(E=D;E<=x;E++){const Me=f[E];if(De>=Ne){ze(Me,v,C,!0);continue}let Qe;if(Me.key!=null)Qe=te.get(Me.key);else for(J=V;J<=N;J++)if(Tn[J-V]===0&&Nn(Me,p[J])){Qe=J;break}Qe===void 0?ze(Me,v,C,!0):(Tn[Qe-V]=E+1,Qe>=Ye?Ye=Qe:qe=!0,m(Me,p[Qe],g,null,v,C,T,I,S),De++)}const Mo=qe?kf(Tn):ln;for(J=Mo.length-1,E=Ne-1;E>=0;E--){const Me=V+E,Qe=p[Me],ko=Me+1<P?p[Me+1].el:b;Tn[E]===0?m(null,Qe,g,ko,v,C,T,I,S):qe&&(J<0||E!==Mo[J]?Mt(Qe,g,ko,2):J--)}}},Mt=(f,p,g,b,v=null)=>{const{el:C,type:T,transition:I,children:S,shapeFlag:E}=f;if(E&6){Mt(f.component.subTree,p,g,b);return}if(E&128){f.suspense.move(p,g,b);return}if(E&64){T.move(f,p,g,In);return}if(T===Be){s(C,p,g);for(let x=0;x<S.length;x++)Mt(S[x],p,g,b);s(f.anchor,p,g);return}if(T===Bi){Q(f,p,g);return}if(b!==2&&E&1&&I)if(b===0)I.beforeEnter(C),s(C,p,g),ke(()=>I.enter(C),v);else{const{leave:x,delayLeave:N,afterLeave:D}=I,V=()=>s(C,p,g),te=()=>{x(C,()=>{V(),D&&D()})};N?N(C,V,te):te()}else s(C,p,g)},ze=(f,p,g,b=!1,v=!1)=>{const{type:C,props:T,ref:I,children:S,dynamicChildren:E,shapeFlag:P,patchFlag:x,dirs:N,cacheIndex:D}=f;if(x===-2&&(v=!1),I!=null&&Ws(I,null,g,f,!0),D!=null&&(p.renderCache[D]=void 0),P&256){p.ctx.deactivate(f);return}const V=P&1&&N,te=!Bn(f);let J;if(te&&(J=T&&T.onVnodeBeforeUnmount)&&Je(J,p,f),P&6)oh(f.component,g,b);else{if(P&128){f.suspense.unmount(g,b);return}V&&kt(f,null,p,"beforeUnmount"),P&64?f.type.remove(f,p,g,In,b):E&&!E.hasOnce&&(C!==Be||x>0&&x&64)?Sn(E,p,g,!1,!0):(C===Be&&x&384||!v&&P&16)&&Sn(S,p,g),b&&Oo(f)}(te&&(J=T&&T.onVnodeUnmounted)||V)&&ke(()=>{J&&Je(J,p,f),V&&kt(f,null,p,"unmounted")},g)},Oo=f=>{const{type:p,el:g,anchor:b,transition:v}=f;if(p===Be){rh(g,b);return}if(p===Bi){A(f);return}const C=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:I}=v,S=()=>T(g,C);I?I(f.el,C,S):S()}else C()},rh=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},oh=(f,p,g)=>{const{bum:b,scope:v,job:C,subTree:T,um:I,m:S,a:E}=f;Ko(S),Ko(E),b&&Ns(b),v.stop(),C&&(C.flags|=8,ze(T,f,p,g)),I&&ke(I,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Sn=(f,p,g,b=!1,v=!1,C=0)=>{for(let T=C;T<f.length;T++)ze(f[T],p,g,b,v)},Es=f=>{if(f.shapeFlag&6)return Es(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[Zh];return g?d(g):p};let Ai=!1;const Do=(f,p,g)=>{f==null?p._vnode&&ze(p._vnode,null,null,!0):m(p._vnode||null,f,p,null,null,null,g),p._vnode=f,Ai||(Ai=!0,Wo(),Ba(),Ai=!1)},In={p:m,um:ze,m:Mt,r:Oo,mt:wn,mc:$,pc:ee,pbc:ue,n:Es,o:t};return{render:Do,hydrate:void 0,createApp:wf(Do)}}function Li({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ft({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rc(t,e,n=!1){const s=t.children,i=e.children;if(k(s)&&k(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=bt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&rc(o,l)),l.type===_i&&(l.el=o.el)}}function kf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function oc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:oc(e)}function Ko(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ff=Symbol.for("v-scx"),Lf=()=>Un(Ff);function Rs(t,e,n){return lc(t,e,n)}function lc(t,e,n=X){const{immediate:s,deep:i,flush:r,once:o}=n,l=xe({},n),a=e&&s||!e&&r!=="post";let c;if(Zn){if(r==="sync"){const _=Lf();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=et,_.resume=et,_.pause=et,_}}const u=ye;l.call=(_,y,m)=>nt(_,u,y,m);let h=!1;r==="post"?l.scheduler=_=>{ke(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,y)=>{y?_():zr(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=qh(t,e,l);return Zn&&(c?c.push(d):a&&d()),d}function Bf(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?ac(s,t):()=>s[t]:t.bind(s,s);let r;F(e)?r=e:(r=e.handler,n=e);const o=fs(this),l=lc(i,r.bind(s),n);return o(),l}function ac(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Wf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${We(e)}Modifiers`]||t[`${Xt(e)}Modifiers`];function Uf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let i=n;const r=e.startsWith("update:"),o=r&&Wf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(er)));let l,a=s[l=Pi(e)]||s[l=Pi(We(e))];!a&&r&&(a=s[l=Pi(Xt(e))]),a&&nt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,nt(c,t,6,i)}}function cc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!F(t)){const a=c=>{const u=cc(c,e,!0);u&&(l=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(le(t)&&s.set(t,null),null):(k(r)?r.forEach(a=>o[a]=null):xe(o,r),le(t)&&s.set(t,o),o)}function pi(t,e){return!t||!oi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Xt(e))||Y(t,e))}function zo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:y,inheritAttrs:m}=t,R=Bs(t);let L,j;try{if(n.shapeFlag&4){const A=i||s,q=A;L=Ze(c.call(q,A,u,h,_,d,y)),j=l}else{const A=e;L=Ze(A.length>1?A(h,{attrs:l,slots:o,emit:a}):A(h,null)),j=e.props?l:Hf(l)}}catch(A){Hn.length=0,fi(A,t,1),L=tt(qt)}let Q=L;if(j&&m!==!1){const A=Object.keys(j),{shapeFlag:q}=Q;A.length&&q&7&&(r&&A.some(Or)&&(j=$f(j,r)),Q=dn(Q,j,!1,!0))}return n.dirs&&(Q=dn(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&qr(Q,n.transition),L=Q,Bs(R),L}const Hf=t=>{let e;for(const n in t)(n==="class"||n==="style"||oi(n))&&((e||(e={}))[n]=t[n]);return e},$f=(t,e)=>{const n={};for(const s in t)(!Or(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?qo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!pi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?qo(s,o,c):!0:!!o;return!1}function qo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!pi(n,r))return!0}return!1}function jf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const uc=t=>t.__isSuspense;function Gf(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):Jh(t)}const Be=Symbol.for("v-fgt"),_i=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),Bi=Symbol.for("v-stc"),Hn=[];let Fe=null;function ht(t=!1){Hn.push(Fe=t?null:[])}function Kf(){Hn.pop(),Fe=Hn[Hn.length-1]||null}let Xn=1;function Yo(t,e=!1){Xn+=t,t<0&&Fe&&e&&(Fe.hasOnce=!0)}function hc(t){return t.dynamicChildren=Xn>0?Fe||ln:null,Kf(),Xn>0&&Fe&&Fe.push(t),t}function Kt(t,e,n,s,i,r){return hc(M(t,e,n,s,i,r,!0))}function fc(t,e,n,s,i){return hc(tt(t,e,n,s,i,!0))}function dc(t){return t?t.__v_isVNode===!0:!1}function Nn(t,e){return t.type===e.type&&t.key===e.key}const pc=({key:t})=>t??null,As=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||ce(t)||F(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,s=0,i=null,r=t===Be?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pc(e),ref:e&&As(e),scopeId:Ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return l?(Qr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),Xn>0&&!o&&Fe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Fe.push(a),a}const tt=zf;function zf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ka)&&(t=qt),dc(t)){const l=dn(t,e,!0);return n&&Qr(l,n),Xn>0&&!r&&Fe&&(l.shapeFlag&6?Fe[Fe.indexOf(t)]=l:Fe.push(l)),l.patchFlag=-2,l}if(id(t)&&(t=t.__vccOpts),e){e=qf(e);let{class:l,style:a}=e;l&&!he(l)&&(e.class=Fr(l)),le(a)&&(jr(a)&&!k(a)&&(a=xe({},a)),e.style=kr(a))}const o=he(t)?1:uc(t)?128:ef(t)?64:le(t)?4:F(t)?2:0;return M(t,e,n,s,i,o,r,!0)}function qf(t){return t?jr(t)||Xa(t)?xe({},t):t:null}function dn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Yf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&pc(c),ref:e&&e.ref?n&&r?k(r)?r.concat(As(e)):[r,As(e)]:As(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&qr(u,a.clone(u)),u}function Ut(t=" ",e=0){return tt(_i,null,t,e)}function Qo(t="",e=!1){return e?(ht(),fc(qt,null,t)):tt(qt,null,t)}function Ze(t){return t==null||typeof t=="boolean"?tt(qt):k(t)?tt(Be,null,t.slice()):dc(t)?bt(t):tt(_i,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function Qr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Qr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Xa(e)?e._ctx=Re:i===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),s&64?(n=16,e=[Ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Fr([e.class,s.class]));else if(i==="style")e.style=kr([e.style,s.style]);else if(oi(i)){const r=e[i],o=s[i];o&&r!==o&&!(k(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Je(t,e,n,s=null){nt(t,e,7,[n,s])}const Qf=Ya();let Jf=0;function Xf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Qf,r={uid:Jf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ec(s,i),emitsOptions:cc(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Uf.bind(null,r),t.ce&&t.ce(r),r}let ye=null,Hs,cr;{const t=ui(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Hs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),cr=e("__VUE_SSR_SETTERS__",n=>Zn=n)}const fs=t=>{const e=ye;return Hs(t),t.scope.on(),()=>{t.scope.off(),Hs(e)}},Jo=()=>{ye&&ye.scope.off(),Hs(null)};function _c(t){return t.vnode.shapeFlag&4}let Zn=!1;function Zf(t,e=!1,n=!1){e&&cr(e);const{props:s,children:i}=t.vnode,r=_c(t);Tf(t,s,r,e),Af(t,i,n);const o=r?ed(t,e):void 0;return e&&cr(!1),o}function ed(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gf);const{setup:s}=n;if(s){Pt();const i=t.setupContext=s.length>1?nd(t):null,r=fs(t),o=hs(s,t,0,[t.props,i]),l=aa(o);if(Ot(),r(),(l||t.sp)&&!Bn(t)&&Ha(t),l){if(o.then(Jo,Jo),e)return o.then(a=>{Xo(t,a)}).catch(a=>{fi(a,t,0)});t.asyncDep=o}else Xo(t,o)}else gc(t)}function Xo(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Ma(e)),gc(t)}function gc(t,e,n){const s=t.type;t.render||(t.render=s.render||et);{const i=fs(t);Pt();try{mf(t)}finally{Ot(),i()}}}const td={get(t,e){return Ce(t,"get",""),t[e]}};function nd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,td),slots:t.slots,emit:t.emit,expose:e}}function gi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ma(Gr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}})):t.proxy}function sd(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function id(t){return F(t)&&"__vccOpts"in t}const mc=(t,e)=>Kh(t,e,Zn),rd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ur;const Zo=typeof window<"u"&&window.trustedTypes;if(Zo)try{ur=Zo.createPolicy("vue",{createHTML:t=>t})}catch{}const yc=ur?t=>ur.createHTML(t):t=>t,od="http://www.w3.org/2000/svg",ld="http://www.w3.org/1998/Math/MathML",ot=typeof document<"u"?document:null,el=ot&&ot.createElement("template"),ad={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ot.createElementNS(od,t):e==="mathml"?ot.createElementNS(ld,t):n?ot.createElement(t,{is:n}):ot.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ot.createTextNode(t),createComment:t=>ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{el.innerHTML=yc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=el.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cd=Symbol("_vtc");function ud(t,e,n){const s=t[cd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const tl=Symbol("_vod"),hd=Symbol("_vsh"),fd=Symbol(""),dd=/(^|;)\s*display\s*:/;function pd(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ps(s,l,"")}else for(const o in e)n[o]==null&&Ps(s,o,"");for(const o in n)o==="display"&&(r=!0),Ps(s,o,n[o])}else if(i){if(e!==n){const o=s[fd];o&&(n+=";"+o),s.cssText=n,r=dd.test(n)}}else e&&t.removeAttribute("style");tl in t&&(t[tl]=r?s.display:"",t[hd]&&(s.display="none"))}const nl=/\s*!important$/;function Ps(t,e,n){if(k(n))n.forEach(s=>Ps(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_d(t,e);nl.test(n)?t.setProperty(Xt(s),n.replace(nl,""),"important"):t[s]=n}}const sl=["Webkit","Moz","ms"],Wi={};function _d(t,e){const n=Wi[e];if(n)return n;let s=We(e);if(s!=="filter"&&s in t)return Wi[e]=s;s=ci(s);for(let i=0;i<sl.length;i++){const r=sl[i]+s;if(r in t)return Wi[e]=r}return e}const il="http://www.w3.org/1999/xlink";function rl(t,e,n,s,i,r=mh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(il,e.slice(6,e.length)):t.setAttributeNS(il,e,n):n==null||r&&!fa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":At(n)?String(n):n)}function ol(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=fa(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function rn(t,e,n,s){t.addEventListener(e,n,s)}function gd(t,e,n,s){t.removeEventListener(e,n,s)}const ll=Symbol("_vei");function md(t,e,n,s,i=null){const r=t[ll]||(t[ll]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=yd(e);if(s){const c=r[e]=bd(s,i);rn(t,l,c,a)}else o&&(gd(t,l,o,a),r[e]=void 0)}}const al=/(?:Once|Passive|Capture)$/;function yd(t){let e;if(al.test(t)){e={};let s;for(;s=t.match(al);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}let Ui=0;const vd=Promise.resolve(),Cd=()=>Ui||(vd.then(()=>Ui=0),Ui=Date.now());function bd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(Ed(s,n.value),e,5,[s])};return n.value=t,n.attached=Cd(),n}function Ed(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?ud(t,s,o):e==="style"?pd(t,n,s):oi(e)?Or(e)||md(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sd(t,e,s,o))?(ol(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(s))?ol(t,We(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rl(t,e,s,o))};function Sd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&cl(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return cl(e)&&he(n)?!1:e in t}const ul=t=>{const e=t.props["onUpdate:modelValue"]||!1;return k(e)?n=>Ns(e,n):e};function Id(t){t.target.composing=!0}function hl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hi=Symbol("_assign"),$n={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Hi]=ul(i);const r=s||i.props&&i.props.type==="number";rn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=er(l)),t[Hi](l)}),n&&rn(t,"change",()=>{t.value=t.value.trim()}),e||(rn(t,"compositionstart",Id),rn(t,"compositionend",hl),rn(t,"change",hl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Hi]=ul(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?er(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Td=xe({patchProp:wd},ad);let fl;function xd(){return fl||(fl=Of(Td))}const Nd=(...t)=>{const e=xd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ad(s);if(!i)return;const r=e._component;!F(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Rd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Rd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ad(t){return he(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vc;const mi=t=>vc=t,Cc=Symbol();function hr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vn||(Vn={}));function Pd(){const t=ga(!0),e=t.run(()=>me({}));let n=[],s=[];const i=Gr({install(r){mi(i),i._a=r,r.provide(Cc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const bc=()=>{};function dl(t,e,n,s=bc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ma()&&yh(i),i}function tn(t,...e){t.slice().forEach(n=>{n(...e)})}const Od=t=>t(),pl=Symbol(),$i=Symbol();function fr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];hr(i)&&hr(s)&&t.hasOwnProperty(n)&&!ce(s)&&!jt(s)?t[n]=fr(i,s):t[n]=s}return t}const Dd=Symbol();function Md(t){return!hr(t)||!t.hasOwnProperty(Dd)}const{assign:vt}=Object;function kd(t){return!!(ce(t)&&t.effect)}function Fd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=$h(n.state.value[t]);return vt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Gr(mc(()=>{mi(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=Ec(t,c,e,n,s,!0),a}function Ec(t,e,n={},s,i,r){let o;const l=vt({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],_;const y=s.state.value[t];!r&&!y&&(s.state.value[t]={}),me({});let m;function R($){let G;c=u=!1,typeof $=="function"?($(s.state.value[t]),G={type:Vn.patchFunction,storeId:t,events:_}):(fr(s.state.value[t],$),G={type:Vn.patchObject,payload:$,storeId:t,events:_});const ue=m=Symbol();Fa().then(()=>{m===ue&&(c=!0)}),u=!0,tn(h,G,s.state.value[t])}const L=r?function(){const{state:G}=n,ue=G?G():{};this.$patch(Le=>{vt(Le,ue)})}:bc;function j(){o.stop(),h=[],d=[],s._s.delete(t)}const Q=($,G="")=>{if(pl in $)return $[$i]=G,$;const ue=function(){mi(s);const Le=Array.from(arguments),Ke=[],yt=[];function wn(H){Ke.push(H)}function Cs(H){yt.push(H)}tn(d,{args:Le,name:ue[$i],store:q,after:wn,onError:Cs});let ae;try{ae=$.apply(this&&this.$id===t?this:q,Le)}catch(H){throw tn(yt,H),H}return ae instanceof Promise?ae.then(H=>(tn(Ke,H),H)).catch(H=>(tn(yt,H),Promise.reject(H))):(tn(Ke,ae),ae)};return ue[pl]=!0,ue[$i]=G,ue},A={_p:s,$id:t,$onAction:dl.bind(null,d),$patch:R,$reset:L,$subscribe($,G={}){const ue=dl(h,$,G.detached,()=>Le()),Le=o.run(()=>Rs(()=>s.state.value[t],Ke=>{(G.flush==="sync"?u:c)&&$({storeId:t,type:Vn.direct,events:_},Ke)},vt({},a,G)));return ue},$dispose:j},q=hi(A);s._s.set(t,q);const ve=(s._a&&s._a.runWithContext||Od)(()=>s._e.run(()=>(o=ga()).run(()=>e({action:Q}))));for(const $ in ve){const G=ve[$];if(ce(G)&&!kd(G)||jt(G))r||(y&&Md(G)&&(ce(G)?G.value=y[$]:fr(G,y[$])),s.state.value[t][$]=G);else if(typeof G=="function"){const ue=Q(G,$);ve[$]=ue,l.actions[$]=G}}return vt(q,ve),vt(K(q),ve),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:$=>{R(G=>{vt(G,$)})}}),s._p.forEach($=>{vt(q,o.run(()=>$({store:q,app:s._a,pinia:s,options:l})))}),y&&r&&n.hydrate&&n.hydrate(q.$state,y),c=!0,u=!0,q}/*! #__NO_SIDE_EFFECTS__ */function Ld(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=If();return o=o||(a?Un(Cc,null):null),o&&mi(o),o=vc,o._s.has(t)||(i?Ec(t,e,s,o):Fd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Bd=()=>{};var _l={};/**
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
 */const wc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw yn(e)},yn=function(t){return new Error("Firebase Database ("+wc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Sc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Ud;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ic=function(t){const e=Sc(t);return Jr.encodeByteArray(e,!0)},$s=function(t){return Ic(t).replace(/\./g,"")},dr=function(t){try{return Jr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hd(t){return Tc(void 0,t)}function Tc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$d(n)||(t[n]=Tc(t[n],e[n]));return t}function $d(t){return t!=="__proto__"}/**
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
 */function Vd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jd=()=>Vd().__FIREBASE_DEFAULTS__,Gd=()=>{if(typeof process>"u"||typeof _l>"u")return;const t=_l.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dr(t[1]);return e&&JSON.parse(e)},xc=()=>{try{return Bd()||jd()||Gd()||Kd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zd=t=>{var e,n;return(n=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qd=t=>{const e=zd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Nc=()=>{var t;return(t=xc())===null||t===void 0?void 0:t.config};/**
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
 */class yi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Yd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$s(JSON.stringify(n)),$s(JSON.stringify(o)),""].join(".")}/**
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
 */function Qd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qd())}function Jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xd(){return wc.NODE_ADMIN===!0}function Zd(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const tp="FirebaseError";class ds extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=tp,Object.setPrototypeOf(this,ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ac.prototype.create)}}class Ac{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?np(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ds(i,l,s)}}function np(t,e){return t.replace(sp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sp=/\{\$([^}]+)}/g;/**
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
 */function es(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
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
 */const Pc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=es(dr(r[0])||""),n=es(dr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ip=function(t){const e=Pc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rp=function(t){const e=Pc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function pn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ml(r)&&ml(o)){if(!js(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ml(t){return t!==null&&typeof t=="object"}/**
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
 */function op(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class lp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Xr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ap=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function vn(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class cp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hp(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:up(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function up(t){return t===Bt?void 0:t}function hp(t){return t.instantiationMode==="EAGER"}/**
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
 */class fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const dp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},pp=se.INFO,_p={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},gp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=_p[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=pp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const mp=(t,e)=>e.some(n=>t instanceof n);let yl,vl;function yp(){return yl||(yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dc=new WeakMap,pr=new WeakMap,Mc=new WeakMap,Vi=new WeakMap,Zr=new WeakMap;function Cp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(wt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dc.set(n,t)}).catch(()=>{}),Zr.set(e,t),e}function bp(t){if(pr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});pr.set(t,e)}let _r={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ep(t){_r=t(_r)}function wp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ji(this),e,...n);return Mc.set(s,e.sort?e.sort():[e]),wt(s)}:vp().includes(t)?function(...e){return t.apply(ji(this),e),wt(Dc.get(this))}:function(...e){return wt(t.apply(ji(this),e))}}function Sp(t){return typeof t=="function"?wp(t):(t instanceof IDBTransaction&&bp(t),mp(t,yp())?new Proxy(t,_r):t)}function wt(t){if(t instanceof IDBRequest)return Cp(t);if(Vi.has(t))return Vi.get(t);const e=Sp(t);return e!==t&&(Vi.set(t,e),Zr.set(e,t)),e}const ji=t=>Zr.get(t);function Ip(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=wt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(wt(o.result),a.oldVersion,a.newVersion,wt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Tp=["get","getKey","getAll","getAllKeys","count"],xp=["put","add","delete","clear"],Gi=new Map;function Cl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gi.get(e))return Gi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Gi.set(e,r),r}Ep(t=>({...t,get:(e,n,s)=>Cl(e,n)||t.get(e,n,s),has:(e,n)=>!!Cl(e,n)||t.has(e,n)}));/**
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
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gr="@firebase/app",bl="0.11.2";/**
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
 */const dt=new Oc("@firebase/app"),Ap="@firebase/app-compat",Pp="@firebase/analytics-compat",Op="@firebase/analytics",Dp="@firebase/app-check-compat",Mp="@firebase/app-check",kp="@firebase/auth",Fp="@firebase/auth-compat",Lp="@firebase/database",Bp="@firebase/data-connect",Wp="@firebase/database-compat",Up="@firebase/functions",Hp="@firebase/functions-compat",$p="@firebase/installations",Vp="@firebase/installations-compat",jp="@firebase/messaging",Gp="@firebase/messaging-compat",Kp="@firebase/performance",zp="@firebase/performance-compat",qp="@firebase/remote-config",Yp="@firebase/remote-config-compat",Qp="@firebase/storage",Jp="@firebase/storage-compat",Xp="@firebase/firestore",Zp="@firebase/vertexai",e_="@firebase/firestore-compat",t_="firebase",n_="11.4.0";/**
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
 */const mr="[DEFAULT]",s_={[gr]:"fire-core",[Ap]:"fire-core-compat",[Op]:"fire-analytics",[Pp]:"fire-analytics-compat",[Mp]:"fire-app-check",[Dp]:"fire-app-check-compat",[kp]:"fire-auth",[Fp]:"fire-auth-compat",[Lp]:"fire-rtdb",[Bp]:"fire-data-connect",[Wp]:"fire-rtdb-compat",[Up]:"fire-fn",[Hp]:"fire-fn-compat",[$p]:"fire-iid",[Vp]:"fire-iid-compat",[jp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Kp]:"fire-perf",[zp]:"fire-perf-compat",[qp]:"fire-rc",[Yp]:"fire-rc-compat",[Qp]:"fire-gcs",[Jp]:"fire-gcs-compat",[Xp]:"fire-fst",[e_]:"fire-fst-compat",[Zp]:"fire-vertex","fire-js":"fire-js",[t_]:"fire-js-all"};/**
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
 */const Gs=new Map,i_=new Map,yr=new Map;function El(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(yr.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;yr.set(e,t);for(const n of Gs.values())El(n,t);for(const n of i_.values())El(n,t);return!0}function r_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function o_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const l_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new Ac("app","Firebase",l_);/**
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
 */class a_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const c_=n_;function kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(n||(n=Nc()),!n)throw St.create("no-options");const r=Gs.get(i);if(r){if(js(n,r.options)&&js(s,r.config))return r;throw St.create("duplicate-app",{appName:i})}const o=new fp(i);for(const a of yr.values())o.addComponent(a);const l=new a_(n,s,o);return Gs.set(i,l),l}function u_(t=mr){const e=Gs.get(t);if(!e&&t===mr&&Nc())return kc();if(!e)throw St.create("no-app",{appName:t});return e}function un(t,e,n){var s;let i=(s=s_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(l.join(" "));return}Ks(new ts(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const h_="firebase-heartbeat-database",f_=1,ns="firebase-heartbeat-store";let Ki=null;function Fc(){return Ki||(Ki=Ip(h_,f_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ns)}catch(n){console.warn(n)}}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),Ki}async function d_(t){try{const n=(await Fc()).transaction(ns),s=await n.objectStore(ns).get(Lc(t));return await n.done,s}catch(e){if(e instanceof ds)dt.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(n.message)}}}async function wl(t,e){try{const s=(await Fc()).transaction(ns,"readwrite");await s.objectStore(ns).put(e,Lc(t)),await s.done}catch(n){if(n instanceof ds)dt.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dt.warn(s.message)}}}function Lc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p_=1024,__=30;class g_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>__){const o=v_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){dt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sl(),{heartbeatsToSend:s,unsentEntries:i}=m_(this._heartbeatsCache.heartbeats),r=$s(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return dt.warn(n),""}}}function Sl(){return new Date().toISOString().substring(0,10)}function m_(t,e=p_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Il(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class y_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zd()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Il(t){return $s(JSON.stringify({version:2,heartbeats:t})).length}function v_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function C_(t){Ks(new ts("platform-logger",e=>new Np(e),"PRIVATE")),Ks(new ts("heartbeat",e=>new g_(e),"PRIVATE")),un(gr,bl,t),un(gr,bl,"esm2017"),un("fire-js","")}C_("");var b_="firebase",E_="11.4.0";/**
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
 */un(b_,E_,"app");var Tl={};const xl="@firebase/database",Nl="1.0.13";/**
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
 */let Bc="";function w_(t){Bc=t}/**
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
 */class S_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class I_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new S_(e)}}catch{}return new I_},Ht=Wc("localStorage"),T_=Wc("sessionStorage");/**
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
 */const hn=new Oc("@firebase/database"),x_=function(){let t=1;return function(){return t++}}(),Uc=function(t){const e=ap(t),n=new lp;n.update(e);const s=n.digest();return Jr.encodeByteArray(s)},ps=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ps.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let jn=null,Rl=!0;const N_=function(t,e){w(!0,"Can't turn on custom loggers persistently."),hn.logLevel=se.VERBOSE,jn=hn.log.bind(hn)},be=function(...t){if(Rl===!0&&(Rl=!1,jn===null&&T_.get("logging_enabled")===!0&&N_()),jn){const e=ps.apply(null,t);jn(e)}},_s=function(t){return function(...e){be(t,...e)}},vr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ps(...t);hn.error(e)},pt=function(...t){const e=`FIREBASE FATAL ERROR: ${ps(...t)}`;throw hn.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+ps(...t);hn.warn(e)},R_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_n="[MIN_NAME]",Yt="[MAX_NAME]",Cn=function(t,e){if(t===e)return 0;if(t===_n||e===Yt)return-1;if(e===_n||t===Yt)return 1;{const n=Al(t),s=Al(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},P_=function(t,e){return t===e?0:t<e?-1:1},Rn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},eo=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=eo(t[e[s]]);return n+="}",n},$c=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Vc=function(t){w(!Hc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},O_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},D_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function M_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const k_=new RegExp("^-?(0*)\\d{1,10}$"),F_=-2147483648,L_=2147483647,Al=function(t){if(k_.test(t)){const e=Number(t);if(e>=F_&&e<=L_)return e}return null},bn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},B_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class W_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,o_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class U_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class Os{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Os.OWNER="owner";/**
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
 */const to="5",jc="v",Gc="s",Kc="r",zc="f",qc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yc="ls",Qc="p",Cr="ac",Jc="websocket",Xc="long_polling";/**
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
 */class Zc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function H_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function eu(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===Jc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);H_(t)&&(n.ns=t.namespace);const i=[];return Oe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class $_{constructor(){this.counters_={}}incrementCounter(e,n=1){gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hd(this.counters_)}}/**
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
 */const zi={},qi={};function no(t){const e=t.toString();return zi[e]||(zi[e]=new $_),zi[e]}function V_(t,e){const n=t.toString();return qi[n]||(qi[n]=e()),qi[n]}/**
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
 */class j_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pl="start",G_="close",K_="pLPCommand",z_="pRTLPCB",tu="id",nu="pw",su="ser",q_="cb",Y_="seg",Q_="ts",J_="d",X_="dframe",iu=1870,ru=30,Z_=iu-ru,eg=25e3,tg=3e4;class on{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_s(e),this.stats_=no(n),this.urlFn=a=>(this.appCheckToken&&(a[Cr]=this.appCheckToken),eu(n,Xc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new j_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tg)),A_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new so((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pl)this.id=l,this.password=a;else if(o===G_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pl]="t",s[su]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[q_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[jc]=to,this.transportSessionId&&(s[Gc]=this.transportSessionId),this.lastSessionId&&(s[Yc]=this.lastSessionId),this.applicationId&&(s[Qc]=this.applicationId),this.appCheckToken&&(s[Cr]=this.appCheckToken),typeof location<"u"&&location.hostname&&qc.test(location.hostname)&&(s[Kc]=zc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){on.forceAllow_=!0}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){return on.forceAllow_?!0:!on.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!O_()&&!D_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ic(n),i=$c(s,Z_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[X_]="t",s[tu]=e,s[nu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class so{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x_(),window[K_+this.uniqueCallbackIdentifier]=e,window[z_+this.uniqueCallbackIdentifier]=n,this.myIFrame=so.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tu]=this.myID,e[nu]=this.myPW,e[su]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ru+s.length<=iu;){const o=this.pendingSegs.shift();s=s+"&"+Y_+i+"="+o.seg+"&"+Q_+i+"="+o.ts+"&"+J_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(eg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const ng=16384,sg=45e3;let zs=null;typeof MozWebSocket<"u"?zs=MozWebSocket:typeof WebSocket<"u"&&(zs=WebSocket);class Ue{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_s(this.connId),this.stats_=no(n),this.connURL=Ue.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[jc]=to,typeof location<"u"&&location.hostname&&qc.test(location.hostname)&&(o[Kc]=zc),n&&(o[Gc]=n),s&&(o[Yc]=s),i&&(o[Cr]=i),r&&(o[Qc]=r),eu(e,Jc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ht.set("previous_websocket_failure",!0);try{let s;Xd(),this.mySock=new zs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&zs!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Ht.isInMemoryStorage||Ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=es(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$c(n,ng);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
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
 */class ss{static get ALL_TRANSPORTS(){return[on,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ue&&Ue.isAvailable();let s=n&&!Ue.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ue];else{const i=this.transports_=[];for(const r of ss.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ss.globalTransportInitialized_=!1;/**
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
 */const ig=6e4,rg=5e3,og=10*1024,lg=100*1024,Yi="t",Ol="d",ag="s",Dl="r",cg="e",Ml="o",kl="a",Fl="n",Ll="p",ug="h";class hg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_s("c:"+this.id+":"),this.transportManager_=new ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>og?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yi in e){const n=e[Yi];n===kl?this.upgradeIfSecondaryHealthy_():n===Dl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ml&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Rn("t",e),s=Rn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ll,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:kl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Rn("t",e),s=Rn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Rn(Yi,e);if(Ol in e){const s=e[Ol];if(n===ug){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ag?this.onConnectionShutdown_(s):n===Dl?this.onReset_(s):n===cg?vr("Server Error: "+s):n===Ml?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),to!==s&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Gn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ig))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ll,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ou{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class lu{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qs extends lu{static getInstance(){return new qs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Bl=32,Wl=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new Z("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function au(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=B(t),s=B(e);if(n===null)return e;if(n===s)return Te(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function io(t,e){if(xt(t)!==xt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function He(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(xt(t)>xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dg{constructor(e,n){this.errorPrefix_=n,this.parts_=cu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=vi(this.parts_[s]);hu(this)}}function pg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vi(e),hu(t)}function _g(t){const e=t.parts_.pop();t.byteLength_-=vi(e),t.parts_.length>0&&(t.byteLength_-=1)}function hu(t){if(t.byteLength_>Wl)throw new Error(t.errorPrefix_+"has a key path longer than "+Wl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bl+") or object contains a cycle "+Wt(t))}function Wt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ro extends lu{static getInstance(){return new ro}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const An=1e3,gg=60*5*1e3,Ul=30*1e3,mg=1.3,yg=3e4,vg="server_kill",Hl=3;class ft extends ou{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ft.nextPersistentConnectionId_++,this.log_=_s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=An,this.maxReconnectDelay_=gg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new yi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ft.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gt(e,"w")){const s=pn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ul)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ip(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vr("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yg&&(this.reconnectDelay_=An),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new hg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Pe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(vg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pe(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gl(this.interruptReasons_)&&(this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>eo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hl&&(this.reconnectDelay_=Ul,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Bc.replace(/\./g,"-")]=1,Rc()?e["framework.cordova"]=1:Jd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qs.getInstance().currentlyOnline();return gl(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
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
 */class Ci{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new W(_n,e),i=new W(_n,n);return this.compare(s,i)!==0}minPost(){return W.MIN}}/**
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
 */let Ts;class fu extends Ci{static get __EMPTY_NODE(){return Ts}static set __EMPTY_NODE(e){Ts=e}compare(e,n){return Cn(e.name,n.name)}isDefinedOn(e){throw yn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(Yt,Ts)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Ts)}toString(){return".key"}}const fn=new fu;/**
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
 */class xs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Ae.EMPTY_NODE,this.right=r??Ae.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class Cg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,n=Ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xs(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new Cg;/**
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
 */function bg(t,e){return Cn(t.name,e.name)}function oo(t,e){return Cn(t,e)}/**
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
 */let br;function Eg(t){br=t}const du=function(t){return typeof t=="number"?"number:"+Vc(t):"string:"+t},pu=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gt(e,".sv"),"Priority must be a string or number.")}else w(t===br||t.isEmpty(),"priority of unexpected type.");w(t===br||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $l;class pe{static set __childrenNodeConstructor(e){$l=e}static get __childrenNodeConstructor(){return $l}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:B(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=B(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+du(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Vc(this.value_):e+=this.value_,this.lazyHash_=Uc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _u,gu;function wg(t){_u=t}function Sg(t){gu=t}class Ig extends Ci{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Cn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(Yt,new pe("[PRIORITY-POST]",gu))}makePost(e,n){const s=_u(e);return new W(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new Ig;/**
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
 */const Tg=Math.log(2);class xg{constructor(e){const n=r=>parseInt(Math.log(r)/Tg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ys=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const _=parseInt(u/2,10)+a,y=i(a,_),m=i(_+1,c);return h=t[_],d=n?n(h):h,new _e(d,h.node,_e.BLACK,y,m)}},r=function(a){let c=null,u=null,h=t.length;const d=function(y,m){const R=h-y,L=h;h-=y;const j=i(R+1,L),Q=t[R],A=n?n(Q):Q;_(new _e(A,Q.node,m,null,j))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<a.count;++y){const m=a.nextBitIsOne(),R=Math.pow(2,a.count-(y+1));m?d(R,_e.BLACK):(d(R,_e.BLACK),d(R,_e.RED))}return u},o=new xg(t.length),l=r(o);return new Ae(s||e,l)};/**
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
 */let Qi;const nn={};class ut{static get Default(){return w(nn&&oe,"ChildrenNode.ts has not been loaded"),Qi=Qi||new ut({".priority":nn},{".priority":oe}),Qi}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=pn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ae?n:null}hasIndex(e){return gt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==fn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(W.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ys(s,e.getCompare()):l=nn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ut(u,c)}addToIndexes(e,n){const s=Vs(this.indexes_,(i,r)=>{const o=pn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===nn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(W.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ys(l,o.getCompare())}else return nn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new W(e.name,l))),a.insert(e,e.node)}});return new ut(s,this.indexSet_)}removeFromIndexes(e,n){const s=Vs(this.indexes_,i=>{if(i===nn)return i;{const r=n.get(e.name);return r?i.remove(new W(e.name,r)):i}});return new ut(s,this.indexSet_)}}/**
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
 */let Pn;class O{static get EMPTY_NODE(){return Pn||(Pn=new O(new Ae(oo),null,ut.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&pu(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pn}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pn:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new W(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Pn:this.priorityNode_;return new O(i,o,r)}}updateChild(e,n){const s=B(e);if(s===null)return n;{w(B(e)!==".priority"||xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),s++,r&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+du(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Uc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new W(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gs?-1:0}withIndex(e){if(e===fn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ng extends O{constructor(){super(new Ae(oo),O.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const gs=new Ng;Object.defineProperties(W,{MIN:{value:new W(_n,O.EMPTY_NODE)},MAX:{value:new W(Yt,gs)}});fu.__EMPTY_NODE=O.EMPTY_NODE;pe.__childrenNodeConstructor=O;Eg(gs);Sg(gs);/**
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
 */const Rg=!0;function ge(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,ge(e))}if(!(t instanceof Array)&&Rg){const n=[];let s=!1;if(Oe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new W(o,a)))}}),n.length===0)return O.EMPTY_NODE;const r=Ys(n,bg,o=>o.name,oo);if(s){const o=Ys(n,oe.getCompare());return new O(r,ge(e),new ut({".priority":o},{".priority":oe}))}else return new O(r,ge(e),ut.Default)}else{let n=O.EMPTY_NODE;return Oe(t,(s,i)=>{if(gt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}wg(ge);/**
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
 */class Ag extends Ci{constructor(e){super(),this.indexPath_=e,w(!U(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Cn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,s);return new W(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,gs);return new W(Yt,e)}toString(){return cu(this.indexPath_,0).join("/")}}/**
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
 */class Pg extends Ci{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Cn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const s=ge(e);return new W(n,s)}toString(){return".value"}}const Og=new Pg;/**
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
 */function mu(t){return{type:"value",snapshotNode:t}}function gn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function is(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Dg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(is(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(gn(n,s)):o.trackChildChange(rs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(is(i,r))}),n.isLeafNode()||n.forEachChild(oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(rs(i,r,o))}else s.trackChildChange(gn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class os{constructor(e){this.indexedFilter_=new lo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=os.getStartPost_(e),this.endPost_=os.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new W(n,s))||(s=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,l)=>{r.matches(new W(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Mg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new W(n,s))||(s=O.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const a=new W(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(rs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(is(n,h));const m=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(gn(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(is(c.name,c.node)),r.trackChildChange(gn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class ao{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_n}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new ao;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kg(t){return t.loadsAllData()?new lo(t.getIndex()):t.hasLimit()?new Mg(t):new os(t)}function Vl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===Og?n="$value":t.index_===fn?n="$key":(w(t.index_ instanceof Ag,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
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
 */class Qs extends ou{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_s("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Vl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),pn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Qs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Vl(e._queryParams),s=e._path.toString(),i=new yi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+op(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=es(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Fg{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Js(){return{value:null,children:new Map}}function yu(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=B(e);t.children.has(s)||t.children.set(s,Js());const i=t.children.get(s);e=ie(e),yu(i,e,n)}}function Er(t,e,n){t.value!==null?n(e,t.value):Lg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Er(i,r,n)})}function Lg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Bg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Oe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Gl=10*1e3,Wg=30*1e3,Ug=5*60*1e3;class Hg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bg(e);const s=Gl+(Wg-Gl)*Math.random();Gn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Oe(e,(i,r)=>{r>0&&gt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Gn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ug))}}/**
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
 */var $e;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($e||($e={}));function vu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function co(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Xs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=$e.ACK_USER_WRITE,this.source=vu()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Xs(z(),n,this.revert)}}else return w(B(this.path)===e,"operationForChild called for unrelated child."),new Xs(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class ls{constructor(e,n){this.source=e,this.path=n,this.type=$e.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ls(this.source,z()):new ls(this.source,ie(this.path))}}/**
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
 */class Qt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=$e.OVERWRITE}operationForChild(e){return U(this.path)?new Qt(this.source,z(),this.snap.getImmediateChild(e)):new Qt(this.source,ie(this.path),this.snap)}}/**
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
 */class as{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=$e.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new Qt(this.source,z(),n.value):new as(this.source,z(),n)}else return w(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new as(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class $g{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Dg(o.childName,o.snapshotNode))}),On(t,i,"child_removed",e,s,n),On(t,i,"child_added",e,s,n),On(t,i,"child_moved",r,s,n),On(t,i,"child_changed",e,s,n),On(t,i,"value",e,s,n),i}function On(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Gg(t,l,a)),o.forEach(l=>{const a=jg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function jg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Gg(t,e,n){if(e.childName==null||n.childName==null)throw yn("Should only compare child_ events.");const s=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function bi(t,e){return{eventCache:t,serverCache:e}}function Kn(t,e,n,s){return bi(new Nt(e,n,s),t.serverCache)}function Cu(t,e,n,s){return bi(t.eventCache,new Nt(e,n,s))}function Zs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ji;const Kg=()=>(Ji||(Ji=new Ae(P_)),Ji);class re{static fromObject(e){let n=new re(null);return Oe(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=Kg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(U(e))return null;{const s=B(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=B(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(U(e))return new re(n,this.children);{const s=B(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=B(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const n=B(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(U(e))return n;{const s=B(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(U(e))return null;{const r=B(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,s){if(U(e))return this;{this.value&&s(n,this.value);const i=B(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),de(n,i),s):new re(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new re(null))}}function zn(t,e,n){if(U(e))return new Ge(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Te(i,e);return r=r.updateChild(o,n),new Ge(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Ge(r)}}}function Kl(t,e,n){let s=t;return Oe(n,(i,r)=>{s=zn(s,de(e,i),r)}),s}function zl(t,e){if(U(e))return Ge.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Ge(n)}}function wr(t,e){return Zt(t,e)!=null}function Zt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function ql(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new W(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new W(s,i.value))}),e}function It(t,e){if(U(e))return t;{const n=Zt(t,e);return n!=null?new Ge(new re(n)):new Ge(t.writeTree_.subtree(e))}}function Sr(t){return t.writeTree_.isEmpty()}function mn(t,e){return bu(z(),t.writeTree_,e)}function bu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=bu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
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
 */function Ei(t,e){return Iu(e,t)}function zg(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=zn(t.visibleWrites,e,n)),t.lastWriteId=s}function qg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Yg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Qg(l,s.path)?i=!1:He(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Jg(t),!0;if(s.snap)t.visibleWrites=zl(t.visibleWrites,s.path);else{const l=s.children;Oe(l,a=>{t.visibleWrites=zl(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function Qg(t,e){if(t.snap)return He(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&He(de(t.path,n),e))return!0;return!1}function Jg(t){t.visibleWrites=Eu(t.allWrites,Xg,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Xg(t){return t.visible}function Eu(t,e,n){let s=Ge.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)He(n,o)?(l=Te(n,o),s=zn(s,l,r.snap)):He(o,n)&&(l=Te(o,n),s=zn(s,z(),r.snap.getChild(l)));else if(r.children){if(He(n,o))l=Te(n,o),s=Kl(s,l,r.children);else if(He(o,n))if(l=Te(o,n),U(l))s=Kl(s,z(),r.children);else{const a=pn(r.children,B(l));if(a){const c=a.getChild(ie(l));s=zn(s,z(),c)}}}else throw yn("WriteRecord should have .snap or .children")}}return s}function wu(t,e,n,s,i){if(!s&&!i){const r=Zt(t.visibleWrites,e);if(r!=null)return r;{const o=It(t.visibleWrites,e);if(Sr(o))return n;if(n==null&&!wr(o,z()))return null;{const l=n||O.EMPTY_NODE;return mn(o,l)}}}else{const r=It(t.visibleWrites,e);if(!i&&Sr(r))return n;if(!i&&n==null&&!wr(r,z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},l=Eu(t.allWrites,o,e),a=n||O.EMPTY_NODE;return mn(l,a)}}}function Zg(t,e,n){let s=O.EMPTY_NODE;const i=Zt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=It(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=mn(It(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=It(t.visibleWrites,e);return ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function em(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(wr(t.visibleWrites,r))return null;{const o=It(t.visibleWrites,r);return Sr(o)?i.getChild(n):mn(o,i.getChild(n))}}function tm(t,e,n,s){const i=de(e,n),r=Zt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=It(t.visibleWrites,i);return mn(o,s.getNode().getImmediateChild(n))}else return null}function nm(t,e){return Zt(t.visibleWrites,e)}function sm(t,e,n,s,i,r,o){let l;const a=It(t.visibleWrites,e),c=Zt(a,z());if(c!=null)l=c;else if(n!=null)l=mn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function im(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function ei(t,e,n,s){return wu(t.writeTree,t.treePath,e,n,s)}function ho(t,e){return Zg(t.writeTree,t.treePath,e)}function Yl(t,e,n,s){return em(t.writeTree,t.treePath,e,n,s)}function ti(t,e){return nm(t.writeTree,de(t.treePath,e))}function rm(t,e,n,s,i,r){return sm(t.writeTree,t.treePath,e,n,s,i,r)}function fo(t,e,n){return tm(t.writeTree,t.treePath,e,n)}function Su(t,e){return Iu(de(t.treePath,e),t.writeTree)}function Iu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class om{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,rs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,is(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,gn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,rs(s,e.snapshotNode,i.oldSnap));else throw yn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class lm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Tu=new lm;class po{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Nt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jt(this.viewCache_),r=rm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function am(t){return{filter:t}}function cm(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function um(t,e,n,s,i){const r=new om;let o,l;if(n.type===$e.OVERWRITE){const c=n;c.source.fromUser?o=Ir(t,e,c.path,c.snap,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=ni(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===$e.MERGE){const c=n;c.source.fromUser?o=fm(t,e,c.path,c.children,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Tr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===$e.ACK_USER_WRITE){const c=n;c.revert?o=_m(t,e,c.path,s,i,r):o=dm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===$e.LISTEN_COMPLETE)o=pm(t,e,n.path,s,r);else throw yn("Unknown operation type: "+n.type);const a=r.getChanges();return hm(e,o,a),{viewCache:o,changes:a}}function hm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Zs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(mu(Zs(e)))}}function xu(t,e,n,s,i,r){const o=e.eventCache;if(ti(s,n)!=null)return e;{let l,a;if(U(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Jt(e),u=c instanceof O?c:O.EMPTY_NODE,h=ho(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ei(s,Jt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=B(n);if(c===".priority"){w(xt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Yl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Yl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=fo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Kn(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function ni(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=B(n);if(!a.isCompleteForPath(n)&&xt(n)>1)return e;const y=ie(n),R=a.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(a.getNode(),R):c=u.updateChild(a.getNode(),_,R,y,Tu,null)}const h=Cu(e,c,a.isFullyInitialized()||U(n),u.filtersNodes()),d=new po(i,h,r);return xu(t,h,n,i,d,l)}function Ir(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new po(i,e,r);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Kn(e,c,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Kn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),_=l.getNode().getImmediateChild(h);let y;if(U(d))y=s;else{const m=u.getCompleteChild(h);m!=null?au(d)===".priority"&&m.getChild(uu(d)).isEmpty()?y=m:y=m.updateChild(d,s):y=O.EMPTY_NODE}if(_.equals(y))a=e;else{const m=t.filter.updateChild(l.getNode(),h,y,d,u,o);a=Kn(e,m,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ql(t,e){return t.eventCache.isCompleteForChild(e)}function fm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);Ql(e,B(u))&&(l=Ir(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);Ql(e,B(u))||(l=Ir(t,l,u,c,i,r,o))}),l}function Jl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;U(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=Jl(t,_,d);a=ni(t,a,new Z(h),y,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),m=Jl(t,y,d);a=ni(t,a,new Z(h),m,i,r,o,l)}}),a}function dm(t,e,n,s,i,r,o){if(ti(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ni(t,e,n,a.getNode().getChild(n),i,r,l,o);if(U(n)){let c=new re(null);return a.getNode().forEachChild(fn,(u,h)=>{c=c.set(new Z(u),h)}),Tr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=de(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Tr(t,e,n,c,i,r,l,o)}}function pm(t,e,n,s,i){const r=e.serverCache,o=Cu(e,r.getNode(),r.isFullyInitialized()||U(n),r.isFiltered());return xu(t,o,n,s,Tu,i)}function _m(t,e,n,s,i,r){let o;if(ti(s,n)!=null)return e;{const l=new po(s,e,i),a=e.eventCache.getNode();let c;if(U(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ei(s,Jt(e));else{const h=e.serverCache.getNode();w(h instanceof O,"serverChildren would be complete if leaf node"),u=ho(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=B(n);let h=fo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,O.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ei(s,Jt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ti(s,z())!=null,Kn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class gm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new lo(s.getIndex()),r=kg(s);this.processor_=am(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),u=new Nt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Nt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=bi(h,u),this.eventGenerator_=new $g(this.query_)}get query(){return this.query_}}function mm(t){return t.viewCache_.serverCache.getNode()}function ym(t){return Zs(t.viewCache_)}function vm(t,e){const n=Jt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Xl(t){return t.eventRegistrations_.length===0}function Cm(t,e){t.eventRegistrations_.push(e)}function Zl(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ea(t,e,n,s){e.type===$e.MERGE&&e.source.queryId!==null&&(w(Jt(t.viewCache_),"We should always have a full cache before handling merges"),w(Zs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=um(t.processor_,i,e,n,s);return cm(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Nu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function bm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(gn(r,o))}),n.isFullyInitialized()&&s.push(mu(n.getNode())),Nu(t,s,n.getNode(),e)}function Nu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Vg(t.eventGenerator_,e,n,i)}/**
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
 */let si;class Ru{constructor(){this.views=new Map}}function Em(t){w(!si,"__referenceConstructor has already been defined"),si=t}function wm(){return w(si,"Reference.ts has not been loaded"),si}function Sm(t){return t.views.size===0}function _o(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),ea(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ea(o,e,n,s));return r}}function Au(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ei(n,i?s:null),a=!1;l?a=!0:s instanceof O?(l=ho(n,s),a=!1):(l=O.EMPTY_NODE,a=!1);const c=bi(new Nt(l,a,!1),new Nt(s,i,!1));return new gm(e,c)}return o}function Im(t,e,n,s,i,r){const o=Au(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Cm(o,n),bm(o,n)}function Tm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Rt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Zl(c,n,s)),Xl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Zl(a,n,s)),Xl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Rt(t)&&r.push(new(wm())(e._repo,e._path)),{removed:r,events:o}}function Pu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tt(t,e){let n=null;for(const s of t.views.values())n=n||vm(s,e);return n}function Ou(t,e){if(e._queryParams.loadsAllData())return wi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Du(t,e){return Ou(t,e)!=null}function Rt(t){return wi(t)!=null}function wi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ii;function xm(t){w(!ii,"__referenceConstructor has already been defined"),ii=t}function Nm(){return w(ii,"Reference.ts has not been loaded"),ii}let Rm=1;class ta{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=im(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mu(t,e,n,s,i){return zg(t.pendingWriteTree_,e,n,s,i),i?ys(t,new Qt(vu(),e,n)):[]}function $t(t,e,n=!1){const s=qg(t.pendingWriteTree_,e);if(Yg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(z(),!0):Oe(s.children,o=>{r=r.set(new Z(o),!0)}),ys(t,new Xs(s.path,r,n))}else return[]}function ms(t,e,n){return ys(t,new Qt(co(),e,n))}function Am(t,e,n){const s=re.fromObject(n);return ys(t,new as(co(),e,s))}function Pm(t,e){return ys(t,new ls(co(),e))}function Om(t,e,n){const s=mo(t,n);if(s){const i=yo(s),r=i.path,o=i.queryId,l=Te(r,e),a=new ls(uo(o),l);return vo(t,r,a)}else return[]}function ri(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Du(o,e))){const a=Tm(o,e,n,s);Sm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Rt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=km(d);for(let y=0;y<_.length;++y){const m=_[y],R=m.query,L=Bu(t,m);t.listenProvider_.startListening(qn(R),cs(t,R),L.hashFn,L.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(qn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Si(d));t.listenProvider_.stopListening(qn(d),_)}))}Fm(t,c)}return l}function ku(t,e,n,s){const i=mo(t,s);if(i!=null){const r=yo(i),o=r.path,l=r.queryId,a=Te(o,e),c=new Qt(uo(l),a,n);return vo(t,o,c)}else return[]}function Dm(t,e,n,s){const i=mo(t,s);if(i){const r=yo(i),o=r.path,l=r.queryId,a=Te(o,e),c=re.fromObject(n),u=new as(uo(l),a,c);return vo(t,o,u)}else return[]}function xr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const y=Te(d,i);r=r||Tt(_,y),o=o||Rt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Rt(l),r=r||Tt(l,z())):(l=new Ru,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const m=Tt(y,z());m&&(r=r.updateImmediateChild(_,m))}));const c=Du(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Si(e);w(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Lm();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Ei(t.pendingWriteTree_,i);let h=Im(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Ou(l,e);h=h.concat(Bm(t,e,d))}return h}function go(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Te(o,e),c=Tt(l,a);if(c)return c});return wu(i,e,r,n,!0)}function Mm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Te(c,n);s=s||Tt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Tt(i,z()):(i=new Ru,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Nt(s,!0,!1):null,l=Ei(t.pendingWriteTree_,e._path),a=Au(i,e,l,r?o.getNode():O.EMPTY_NODE,r);return ym(a)}function ys(t,e){return Fu(e,t.syncPointTree_,null,Ei(t.pendingWriteTree_,z()))}function Fu(t,e,n,s){if(U(t.path))return Lu(t,e,n,s);{const i=e.get(z());n==null&&i!=null&&(n=Tt(i,z()));let r=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Su(s,o);r=r.concat(Fu(l,a,c,u))}return i&&(r=r.concat(_o(i,t,s,n))),r}}function Lu(t,e,n,s){const i=e.get(z());n==null&&i!=null&&(n=Tt(i,z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Su(s,o),u=t.operationForChild(o);u&&(r=r.concat(Lu(u,l,a,c)))}),i&&(r=r.concat(_o(i,t,s,n))),r}function Bu(t,e){const n=e.query,s=cs(t,n);return{hashFn:()=>(mm(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Om(t,n._path,s):Pm(t,n._path);{const r=M_(i,n);return ri(t,n,null,r)}}}}function cs(t,e){const n=Si(e);return t.queryToTagMap.get(n)}function Si(t){return t._path.toString()+"$"+t._queryIdentifier}function mo(t,e){return t.tagToQueryMap.get(e)}function yo(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function vo(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Ei(t.pendingWriteTree_,e);return _o(s,n,i,null)}function km(t){return t.fold((e,n,s)=>{if(n&&Rt(n))return[wi(n)];{let i=[];return n&&(i=Pu(n)),Oe(s,(r,o)=>{i=i.concat(o)}),i}})}function qn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Nm())(t._repo,t._path):t}function Fm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Si(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Lm(){return Rm++}function Bm(t,e,n){const s=e._path,i=cs(t,e),r=Bu(t,n),o=t.listenProvider_.startListening(qn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!Rt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!U(c)&&u&&Rt(u))return[wi(u).query];{let d=[];return u&&(d=d.concat(Pu(u).map(_=>_.query))),Oe(h,(_,y)=>{d=d.concat(y)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(qn(u),cs(t,u))}}return o}/**
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
 */class Co{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Co(n)}node(){return this.node_}}class bo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new bo(this.syncTree_,n)}node(){return go(this.syncTree_,this.path_)}}const Wm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},na=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Um(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Hm(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Um=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Hm=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},$m=function(t,e,n,s){return Eo(e,new bo(n,t),s)},Wu=function(t,e,n){return Eo(t,new Co(e),n)};function Eo(t,e,n){const s=t.getPriority().val(),i=na(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=na(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(oe,(l,a)=>{const c=Eo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class wo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function So(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=B(n);for(;i!==null;){const r=pn(s.node.children,i)||{children:{},childCount:0};s=new wo(i,s,r),n=ie(n),i=B(n)}return s}function En(t){return t.node.value}function Uu(t,e){t.node.value=e,Nr(t)}function Hu(t){return t.node.childCount>0}function Vm(t){return En(t)===void 0&&!Hu(t)}function Ii(t,e){Oe(t.node.children,(n,s)=>{e(new wo(n,t,s))})}function $u(t,e,n,s){n&&e(t),Ii(t,i=>{$u(i,e,!0)})}function jm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vs(t){return new Z(t.parent===null?t.name:vs(t.parent)+"/"+t.name)}function Nr(t){t.parent!==null&&Gm(t.parent,t.name,t)}function Gm(t,e,n){const s=Vm(n),i=gt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Nr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nr(t))}/**
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
 */const Km=/[\[\].#$\/\u0000-\u001F\u007F]/,zm=/[\[\].#$\u0000-\u001F\u007F]/,Xi=10*1024*1024,Vu=function(t){return typeof t=="string"&&t.length!==0&&!Km.test(t)},ju=function(t){return typeof t=="string"&&t.length!==0&&!zm.test(t)},qm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ju(t)},Ym=function(t,e,n,s){Io(Xr(t,"value"),e,n)},Io=function(t,e,n){const s=n instanceof Z?new dg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Wt(s)+" with contents = "+e.toString());if(Hc(e))throw new Error(t+"contains "+e.toString()+" "+Wt(s));if(typeof e=="string"&&e.length>Xi/3&&vi(e)>Xi)throw new Error(t+"contains a string greater than "+Xi+" utf8 bytes "+Wt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Oe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pg(s,o),Io(t,l,s),_g(s)}),i&&r)throw new Error(t+' contains ".value" child '+Wt(s)+" in addition to actual children.")}},Gu=function(t,e,n,s){if(!ju(n))throw new Error(Xr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gu(t,e,n)},Jm=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Xm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qm(n))throw new Error(Xr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function To(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!io(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ku(t,e,n){To(t,n),zu(t,s=>io(s,e))}function st(t,e,n){To(t,n),zu(t,s=>He(s,e)||He(e,s))}function zu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ey(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ey(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();jn&&be("event: "+n.toString()),bn(s)}}}/**
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
 */const ty="repo_interrupt",ny=25;class sy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Js(),this.transactionQueueTree_=new wo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iy(t,e,n){if(t.stats_=no(t.repoInfo_),t.forceRestClient_||B_())t.server_=new Qs(t.repoInfo_,(s,i,r,o)=>{sa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ia(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ft(t.repoInfo_,e,(s,i,r,o)=>{sa(t,s,i,r,o)},s=>{ia(t,s)},s=>{oy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=V_(t.repoInfo_,()=>new Hg(t.stats_,t.server_)),t.infoData_=new Fg,t.infoSyncTree_=new ta({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ms(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),No(t,"connected",!1),t.serverSyncTree_=new ta({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);st(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ry(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xo(t){return Wm({timestamp:ry(t)})}function sa(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Vs(n,c=>ge(c));o=Dm(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=ku(t.serverSyncTree_,r,a,i)}else if(s){const a=Vs(n,c=>ge(c));o=Am(t.serverSyncTree_,r,a)}else{const a=ge(n);o=ms(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=xi(t,r)),st(t.eventQueue_,l,o)}function ia(t,e){No(t,"connected",e),e===!1&&cy(t)}function oy(t,e){Oe(e,(n,s)=>{No(t,n,s)})}function No(t,e,n){const s=new Z("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=ms(t.infoSyncTree_,s,i);st(t.eventQueue_,s,r)}function qu(t){return t.nextWriteId_++}function ly(t,e,n){const s=Mm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());xr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ms(t.serverSyncTree_,e._path,r);else{const l=cs(t.serverSyncTree_,e);o=ku(t.serverSyncTree_,e._path,r,l)}return st(t.eventQueue_,e._path,o),ri(t.serverSyncTree_,e,n,null,!0),r},i=>(Ti(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function ay(t,e,n,s,i){Ti(t,"set",{path:e.toString(),value:n,priority:s});const r=xo(t),o=ge(n,s),l=go(t.serverSyncTree_,e),a=Wu(o,l,r),c=qu(t),u=Mu(t.serverSyncTree_,e,a,c,!0);To(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const y=d==="ok";y||Pe("set at "+e+" failed: "+d);const m=$t(t.serverSyncTree_,c,!y);st(t.eventQueue_,e,m),dy(t,i,d,_)});const h=Zu(t,e);xi(t,h),st(t.eventQueue_,h,[])}function cy(t){Ti(t,"onDisconnectEvents");const e=xo(t),n=Js();Er(t.onDisconnect_,z(),(i,r)=>{const o=$m(i,r,t.serverSyncTree_,e);yu(n,i,o)});let s=[];Er(n,z(),(i,r)=>{s=s.concat(ms(t.serverSyncTree_,i,r));const o=Zu(t,i);xi(t,o)}),t.onDisconnect_=Js(),st(t.eventQueue_,z(),s)}function uy(t,e,n){let s;B(e._path)===".info"?s=xr(t.infoSyncTree_,e,n):s=xr(t.serverSyncTree_,e,n),Ku(t.eventQueue_,e._path,s)}function hy(t,e,n){let s;B(e._path)===".info"?s=ri(t.infoSyncTree_,e,n):s=ri(t.serverSyncTree_,e,n),Ku(t.eventQueue_,e._path,s)}function fy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ty)}function Ti(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function dy(t,e,n,s){e&&bn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Yu(t,e,n){return go(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Ro(t,e=t.transactionQueueTree_){if(e||Ni(t,e),En(e)){const n=Ju(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&py(t,vs(e),n)}else Hu(e)&&Ii(e,n=>{Ro(t,n)})}function py(t,e,n){const s=n.map(c=>c.currentWriteId),i=Yu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Te(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ti(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat($t(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ni(t,So(t.transactionQueueTree_,e)),Ro(t,t.transactionQueueTree_),st(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)bn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}xi(t,e)}},o)}function xi(t,e){const n=Qu(t,e),s=vs(n),i=Ju(t,n);return _y(t,i,s),s}function _y(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Te(n,a.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat($t(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ny)u=!0,h="maxretry",i=i.concat($t(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Yu(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Io("transaction failed: Data returned ",_,a.path);let y=ge(_);typeof _=="object"&&_!=null&&gt(_,".priority")||(y=y.updatePriority(d.getPriority()));const R=a.currentWriteId,L=xo(t),j=Wu(y,d,L);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=j,a.currentWriteId=qu(t),o.splice(o.indexOf(R),1),i=i.concat(Mu(t.serverSyncTree_,a.path,j,a.currentWriteId,a.applyLocally)),i=i.concat($t(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat($t(t.serverSyncTree_,a.currentWriteId,!0))}st(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ni(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)bn(s[l]);Ro(t,t.transactionQueueTree_)}function Qu(t,e){let n,s=t.transactionQueueTree_;for(n=B(e);n!==null&&En(s)===void 0;)s=So(s,n),e=ie(e),n=B(e);return s}function Ju(t,e){const n=[];return Xu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Xu(t,e,n){const s=En(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ii(e,i=>{Xu(t,i,n)})}function Ni(t,e){const n=En(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Uu(e,n.length>0?n:void 0)}Ii(e,s=>{Ni(t,s)})}function Zu(t,e){const n=vs(Qu(t,e)),s=So(t.transactionQueueTree_,e);return jm(s,i=>{Zi(t,i)}),Zi(t,s),$u(s,i=>{Zi(t,i)}),n}function Zi(t,e){const n=En(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($t(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Uu(e,void 0):n.length=r+1,st(t.eventQueue_,vs(e),i);for(let o=0;o<s.length;o++)bn(s[o])}}/**
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
 */function gy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function my(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ra=function(t,e){const n=yy(t),s=n.namespace;n.domain==="firebase.com"&&pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},yy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=gy(t.substring(u,h)));const d=my(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class vy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class Cy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class eh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ao{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:au(this._path)}get ref(){return new mt(this._repo,this._path)}get _queryIdentifier(){const e=jl(this._queryParams),n=eo(e);return n==="{}"?"default":n}get _queryObject(){return jl(this._queryParams)}isEqual(e){if(e=vn(e),!(e instanceof Ao))return!1;const n=this._repo===e._repo,s=io(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fg(this._path)}}class mt extends Ao{constructor(e,n){super(e,n,new ao,!1)}get parent(){const e=uu(this._path);return e===null?null:new mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class us{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=Rr(this.ref,e);return new us(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new us(i,Rr(this.ref,s),oe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ds(t,e){return t=vn(t),t._checkNotDeleted("ref"),e!==void 0?Rr(t._root,e):t._root}function Rr(t,e){return t=vn(t),B(t._path)===null?Qm("child","path",e):Gu("child","path",e),new mt(t._repo,de(t._path,e))}function th(t,e){t=vn(t),Jm("set",t._path),Ym("set",e,t._path);const n=new yi;return ay(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function nh(t){t=vn(t);const e=new eh(()=>{}),n=new Ri(e);return ly(t._repo,t,n).then(s=>new us(s,new mt(t._repo,t._path),t._queryParams.getIndex()))}class Ri{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new vy("value",this,new us(e.snapshotNode,new mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Cy(this,e,n):null}matches(e){return e instanceof Ri?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function by(t,e,n,s,i){const r=new eh(n,void 0),o=new Ri(r);return uy(t._repo,t,o),()=>hy(t._repo,t,o)}function sh(t,e,n,s){return by(t,"value",e)}Em(mt);xm(mt);/**
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
 */const Ey="FIREBASE_DATABASE_EMULATOR_HOST",Ar={};let wy=!1;function Sy(t,e,n,s){t.repoInfo_=new Zc(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Iy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ra(r,i),l=o.repoInfo,a;typeof process<"u"&&Tl&&(a=Tl[Ey]),a?(r=`http://${a}?ns=${l.namespace}`,o=ra(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new U_(t.name,t.options,e);Xm("Invalid Firebase Database URL",o),U(o.path)||pt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=xy(l,t,c,new W_(t,n));return new Ny(u,t)}function Ty(t,e){const n=Ar[e];(!n||n[t.key]!==t)&&pt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fy(t),delete n[t.key]}function xy(t,e,n,s){let i=Ar[e.name];i||(i={},Ar[e.name]=i);let r=i[t.toURLString()];return r&&pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sy(t,wy,n,s),i[t.toURLString()]=r,r}class Ny{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ty(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pt("Cannot call "+e+" on a deleted database.")}}function Ry(t=u_(),e){const n=r_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=qd("database");s&&Ay(n,...s)}return n}function Ay(t,e,n,s={}){t=vn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&js(s,r.repoInfo_.emulatorOptions))return;pt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Os(Os.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Yd(s.mockUserToken,t.app.options.projectId);o=new Os(l)}Sy(r,i,s,o)}/**
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
 */function Py(t){w_(c_),Ks(new ts("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Iy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),un(xl,Nl,t),un(xl,Nl,"esm2017")}ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Py();var Oy={apiKey:"AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",authDomain:"iamwaitingforyou-73.firebaseapp.com",databaseURL:"https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwaitingforyou-73",storageBucket:"iamwaitingforyou-73.firebasestorage.app",messagingSenderId:"576527778879",appId:"1:576527778879:web:059f06122df2b01d9a248a",measurementId:"G-62LMJM4Z24"};const Dy=kc(Oy),Ms=Ry(Dy),My={class:"fb-check"},ky={style:{"font-size":"18px",background:"orange",margin:"16px",padding:"5px"}},Fy={__name:"FireBaseCheck",setup(t){const e=me(""),n=me(""),s=Ds(Ms,"guest"),i=me(),r=me("");function o(c){th(s,{text:c}).then(()=>{console.log("Данные успешно записаны!"),i.value="Записано!"}).catch(u=>{console.error("Ошибка записи данных: ",u),i.value="Ошибка"})}sh(s,c=>{r.value=c.val(),console.log("Данные пользователя обновлены:",r.value)});function l(){o(e.value)}function a(){nh(s).then(c=>{if(c.exists()){const u=c.val();n.value=u,console.log("Данные пользователя:",u)}else console.log("Данные не найдены")}).catch(c=>{console.error("Ошибка чтения данных: ",c)})}return(c,u)=>(ht(),Kt("div",My,[u[3]||(u[3]=M("div",{class:"about"},[M("h2",null,"Пишем/Читаем")],-1)),Ln(M("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h)},null,512),[[$n,e.value]]),M("button",{onClick:u[1]||(u[1]=h=>l())}," Сохранить"),M("span",null,lt(i.value),1),M("h3",null,lt(n.value),1),M("button",{onClick:u[2]||(u[2]=h=>a())}," Читать"),M("div",ky,lt(r.value),1)]))}},Po=Ld("fbStore",{state:()=>({userId:0}),actions:{async getField(t){const e=Ds(Ms,t);return nh(e).then(n=>{if(n.exists()){const s=n.val();return console.log(">>> Данные пользователя:",s),s}else console.log("Данные не найдены")})},async setField(t,e){const n=Ds(Ms,t);return th(n,{text:e}).then(()=>{console.log("Данные успешно записаны!")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async updateValue(t){const e=Ds(Ms,t);return new Promise(n=>{sh(e,s=>{console.log("Данные обновлены:",s.val()),n(s.val())})})}}}),Ly={__name:"KrestikiNoliki",setup(t){const e=Po(),n=me("");return e.updateValue("guest").then(s=>{n.value=JSON.stringify(s)}),(s,i)=>(ht(),Kt(Be,null,[i[1]||(i[1]=M("h3",null,"Крестики нолики!!!",-1)),Ln(M("textarea",{"onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r),style:{width:"100%"},placeholder:"данные с сайта"},null,512),[[$n,n.value]]),i[2]||(i[2]=M("br",null,null,-1)),i[3]||(i[3]=M("br",null,null,-1))],64))}},By=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Wy={},Uy={class:"game"};function Hy(t,e){return ht(),Kt("div",Uy,e[0]||(e[0]=[M("h2",null," Камень Ножницы Бумага ",-1),M("p",null," Выбери: ",-1),M("p",null,[M("button",null,"камень"),M("button",null,"ножницы"),M("button",null,"бумага")],-1),M("br",null,null,-1),M("p",null,[M("button",null," ИГРАТЬ ")],-1)]))}const oa=By(Wy,[["render",Hy],["__scopeId","data-v-eaa57d33"]]),$y={key:0},Vy={key:1},jy={__name:"DevelopPart",setup(t){const e=Po(),n=me("g1"),s=me(""),i=me(""),r=me(""),o=me(!1),l=me(!0),a=me(""),c=me(""),u=me(""),h=me("");localStorage.getItem("games");function d(){e.getField(n.value||"guest").then(y=>{i.value=JSON.stringify(y)})}function _(){e.setField(n.value,s.value).then(y=>{r.value=JSON.stringify(y)})}return ja(()=>{var R,L,j;let y=(R=window.Telegram)==null?void 0:R.WebApp;console.log("webApp",y),c.value=((L=y.initDataUnsafe.user)==null?void 0:L.username)||"Unknown",a.value=((j=y.initDataUnsafe.user)==null?void 0:j.id)||"-",e.userId=a.value,console.log("location.search=",location.search);const m=new URLSearchParams(window.location.search);console.log("===",m.get("_ijt")),y.ready(),m.value=y.initData,u.value=JSON.stringify(y),h.value=JSON.stringify(y.initData),console.log("  initData.value=",m.value)}),(y,m)=>(ht(),Kt(Be,null,[m[15]||(m[15]=M("br",null,null,-1)),m[16]||(m[16]=M("br",null,null,-1)),m[17]||(m[17]=M("hr",null,null,-1)),M("h1",null,"userId : "+lt(Kr(e).userId),1),M("h2",{style:{"text-align":"center"},onClick:m[0]||(m[0]=R=>o.value=!o.value)}," Админка FB ▼"),o.value?(ht(),Kt("div",$y,[m[7]||(m[7]=M("h4",null," Чтение (Админка)",-1)),m[8]||(m[8]=Ut(" Поле: ")),Ln(M("input",{"onUpdate:modelValue":m[1]||(m[1]=R=>n.value=R)},null,512),[[$n,n.value]]),M("button",{onClick:m[2]||(m[2]=R=>d())}," Получить"),m[9]||(m[9]=M("br",null,null,-1)),Ln(M("textarea",{rows:"7","onUpdate:modelValue":m[3]||(m[3]=R=>i.value=R),style:{width:"98%"}},null,512),[[$n,i.value]]),m[10]||(m[10]=M("hr",null,null,-1)),m[11]||(m[11]=M("h4",null," Сохранение ",-1)),Ln(M("textarea",{rows:"2","onUpdate:modelValue":m[4]||(m[4]=R=>s.value=R),placeholder:"текст для сохранения",style:{width:"98%"}},null,512),[[$n,s.value]]),M("button",{onClick:m[5]||(m[5]=R=>_())}," Сохранить"),m[12]||(m[12]=M("br",null,null,-1))])):Qo("",!0),M("h2",{style:{"text-align":"center"},onClick:m[6]||(m[6]=R=>l.value=!l.value)}," Админка Телеграмм ▼"),l.value?(ht(),Kt("div",Vy,[Ut(" userName: "+lt(c.value),1),m[13]||(m[13]=M("br",null,null,-1)),Ut(" userId: "+lt(a.value),1)])):Qo("",!0),M("p",null,[Ut(" txtArea: "+lt(u.value),1),m[14]||(m[14]=M("br",null,null,-1)),Ut(" txtArea2: "+lt(h.value),1)])],64))}},Gy={__name:"App",setup(t){Po();let e=Wh(oa);function n(s){switch(s){case 1:e.value=Fy;break;case 2:e.value=Ly;break;case 3:e.value=oa;break}}return(s,i)=>(ht(),Kt(Be,null,[(ht(),fc(pf(Kr(e)))),i[3]||(i[3]=Ut(" игры ")),M("button",{onClick:i[0]||(i[0]=r=>n(1))},"1"),M("button",{onClick:i[1]||(i[1]=r=>n(2))},"2"),M("button",{onClick:i[2]||(i[2]=r=>n(3))},"3"),tt(jy)],64))}},Ky=Pd(),ih=Nd(Gy);ih.use(Ky);ih.mount("#app");
