(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function kr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},fn=[],tt=()=>{},ih=()=>!1,ai=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Lr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rh=Object.prototype.hasOwnProperty,q=(t,e)=>rh.call(t,e),M=Array.isArray,dn=t=>ci(t)==="[object Map]",la=t=>ci(t)==="[object Set]",k=t=>typeof t=="function",ue=t=>typeof t=="string",Dt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",aa=t=>(oe(t)||k(t))&&k(t.then)&&k(t.catch),ca=Object.prototype.toString,ci=t=>ca.call(t),oh=t=>ci(t).slice(8,-1),ua=t=>ci(t)==="[object Object]",Br=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wn=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lh=/-(\w)/g,We=ui(t=>t.replace(lh,(e,n)=>n?n.toUpperCase():"")),ah=/\B([A-Z])/g,en=ui(t=>t.replace(ah,"-$1").toLowerCase()),hi=ui(t=>t.charAt(0).toUpperCase()+t.slice(1)),ki=ui(t=>t?`on${hi(t)}`:""),It=(t,e)=>!Object.is(t,e),Ps=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ha=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ir=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bo;const fi=()=>Bo||(Bo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function di(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ue(s)?fh(s):di(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ue(t)||oe(t))return t}const ch=/;(?![^(]*\))/g,uh=/:([^]+)/,hh=/\/\*[^]*?\*\//g;function fh(t){const e={};return t.replace(hh,"").split(ch).forEach(n=>{if(n){const s=n.split(uh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Wr(t){let e="";if(ue(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=Wr(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ph=kr(dh);function fa(t){return!!t||t===""}const da=t=>!!(t&&t.__v_isRef===!0),lt=t=>ue(t)?t:t==null?"":M(t)||oe(t)&&(t.toString===ca||!k(t.toString))?da(t)?lt(t.value):JSON.stringify(t,pa,2):String(t),pa=(t,e)=>da(e)?pa(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Fi(s,r)+" =>"]=i,n),{})}:la(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fi(n))}:Dt(e)?Fi(e):oe(e)&&!M(e)&&!ua(e)?String(e):e,Fi=(t,e="")=>{var n;return Dt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class _a{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ga(t){return new _a(t)}function ma(){return we}function _h(t,e=!1){we&&we.cleanups.push(t)}let ne;const Li=new WeakSet;class ya{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Li.has(this)&&(Li.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ca(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wo(this),ba(this);const e=ne,n=je;ne=this,je=!0;try{return this.fn()}finally{Ea(this),ne=e,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$r(e);this.deps=this.depsTail=void 0,Wo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Li.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rr(this)&&this.run()}get dirty(){return rr(this)}}let va=0,Hn,Un;function Ca(t,e=!1){if(t.flags|=8,e){t.next=Un,Un=t;return}t.next=Hn,Hn=t}function Hr(){va++}function Ur(){if(--va>0)return;if(Un){let e=Un;for(Un=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hn;){let e=Hn;for(Hn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ba(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ea(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),$r(s),gh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function rr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xn))return;t.globalVersion=Xn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!rr(t)){t.flags&=-3;return}const n=ne,s=je;ne=t,je=!0;try{ba(t);const i=t.fn(t._value);(e.version===0||It(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,je=s,Ea(t),t.flags&=-3}}function $r(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)$r(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function gh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let je=!0;const Ia=[];function Mt(){Ia.push(je),je=!1}function kt(){const t=Ia.pop();je=t===void 0?!0:t}function Wo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let Xn=0;class mh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!je||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new mh(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Sa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,Xn++,this.notify(e)}notify(e){Hr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ur()}}}function Sa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Sa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ls=new WeakMap,zt=Symbol(""),or=Symbol(""),Zn=Symbol("");function ve(t,e,n){if(je&&ne){let s=Ls.get(t);s||Ls.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Vr),i.map=s,i.key=n),i.track()}}function ct(t,e,n,s,i,r){const o=Ls.get(t);if(!o){Xn++;return}const l=a=>{a&&a.trigger()};if(Hr(),e==="clear")o.forEach(l);else{const a=M(t),c=a&&Br(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Zn||!Dt(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Zn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(zt)),dn(t)&&l(o.get(or)));break;case"delete":a||(l(o.get(zt)),dn(t)&&l(o.get(or)));break;case"set":dn(t)&&l(o.get(zt));break}}Ur()}function yh(t,e){const n=Ls.get(t);return n&&n.get(e)}function nn(t){const e=G(t);return e===t?e:(ve(e,"iterate",Zn),Be(t)?e:e.map(Ce))}function pi(t){return ve(t=G(t),"iterate",Zn),t}const vh={__proto__:null,[Symbol.iterator](){return Bi(this,Symbol.iterator,Ce)},concat(...t){return nn(this).concat(...t.map(e=>M(e)?nn(e):e))},entries(){return Bi(this,"entries",t=>(t[1]=Ce(t[1]),t))},every(t,e){return ot(this,"every",t,e,void 0,arguments)},filter(t,e){return ot(this,"filter",t,e,n=>n.map(Ce),arguments)},find(t,e){return ot(this,"find",t,e,Ce,arguments)},findIndex(t,e){return ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ot(this,"findLast",t,e,Ce,arguments)},findLastIndex(t,e){return ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wi(this,"includes",t)},indexOf(...t){return Wi(this,"indexOf",t)},join(t){return nn(this).join(t)},lastIndexOf(...t){return Wi(this,"lastIndexOf",t)},map(t,e){return ot(this,"map",t,e,void 0,arguments)},pop(){return On(this,"pop")},push(...t){return On(this,"push",t)},reduce(t,...e){return Ho(this,"reduce",t,e)},reduceRight(t,...e){return Ho(this,"reduceRight",t,e)},shift(){return On(this,"shift")},some(t,e){return ot(this,"some",t,e,void 0,arguments)},splice(...t){return On(this,"splice",t)},toReversed(){return nn(this).toReversed()},toSorted(t){return nn(this).toSorted(t)},toSpliced(...t){return nn(this).toSpliced(...t)},unshift(...t){return On(this,"unshift",t)},values(){return Bi(this,"values",Ce)}};function Bi(t,e,n){const s=pi(t),i=s[e]();return s!==t&&!Be(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Ch=Array.prototype;function ot(t,e,n,s,i,r){const o=pi(t),l=o!==t&&!Be(t),a=o[e];if(a!==Ch[e]){const h=a.apply(t,r);return l?Ce(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,Ce(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Ho(t,e,n,s){const i=pi(t);let r=n;return i!==t&&(Be(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Ce(l),a,t)}),i[e](r,...s)}function Wi(t,e,n){const s=G(t);ve(s,"iterate",Zn);const i=s[e](...n);return(i===-1||i===!1)&&Kr(n[0])?(n[0]=G(n[0]),s[e](...n)):i}function On(t,e,n=[]){Mt(),Hr();const s=G(t)[e].apply(t,n);return Ur(),kt(),s}const bh=kr("__proto__,__v_isRef,__isVue"),Ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function Eh(t){Dt(t)||(t=String(t));const e=G(this);return ve(e,"has",t),e.hasOwnProperty(t)}class Na{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Oh:Pa:r?Aa:Ra).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=M(e);if(!i){let a;if(o&&(a=vh[n]))return a;if(n==="hasOwnProperty")return Eh}const l=Reflect.get(e,n,ce(e)?e:s);return(Dt(n)?Ta.has(n):bh(n))||(i||ve(e,"get",n),r)?l:ce(l)?o&&Br(n)?l:l.value:oe(l)?i?Oa(l):_i(l):l}}class xa extends Na{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Yt(r);if(!Be(s)&&!Yt(s)&&(r=G(r),s=G(s)),!M(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=M(e)&&Br(n)?Number(n)<e.length:q(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===G(i)&&(o?It(s,r)&&ct(e,"set",n,s):ct(e,"add",n,s)),l}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ct(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Dt(n)||!Ta.has(n))&&ve(e,"has",n),s}ownKeys(e){return ve(e,"iterate",M(e)?"length":zt),Reflect.ownKeys(e)}}class wh extends Na{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ih=new xa,Sh=new wh,Th=new xa(!0);const lr=t=>t,Ts=t=>Reflect.getPrototypeOf(t);function Nh(t,e,n){return function(...s){const i=this.__v_raw,r=G(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?lr:e?ar:Ce;return!e&&ve(r,"iterate",a?or:zt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ns(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xh(t,e){const n={get(i){const r=this.__v_raw,o=G(r),l=G(i);t||(It(i,l)&&ve(o,"get",i),ve(o,"get",l));const{has:a}=Ts(o),c=e?lr:t?ar:Ce;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ve(G(i),"iterate",zt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=G(r),l=G(i);return t||(It(i,l)&&ve(o,"has",i),ve(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=G(l),c=e?lr:t?ar:Ce;return!t&&ve(a,"iterate",zt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Te(n,t?{add:Ns("add"),set:Ns("set"),delete:Ns("delete"),clear:Ns("clear")}:{add(i){!e&&!Be(i)&&!Yt(i)&&(i=G(i));const r=G(this);return Ts(r).has.call(r,i)||(r.add(i),ct(r,"add",i,i)),this},set(i,r){!e&&!Be(r)&&!Yt(r)&&(r=G(r));const o=G(this),{has:l,get:a}=Ts(o);let c=l.call(o,i);c||(i=G(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?It(r,u)&&ct(o,"set",i,r):ct(o,"add",i,r),this},delete(i){const r=G(this),{has:o,get:l}=Ts(r);let a=o.call(r,i);a||(i=G(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&ct(r,"delete",i,void 0),c},clear(){const i=G(this),r=i.size!==0,o=i.clear();return r&&ct(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Nh(i,t,e)}),n}function jr(t,e){const n=xh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const Rh={get:jr(!1,!1)},Ah={get:jr(!1,!0)},Ph={get:jr(!0,!1)};const Ra=new WeakMap,Aa=new WeakMap,Pa=new WeakMap,Oh=new WeakMap;function Dh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mh(t){return t.__v_skip||!Object.isExtensible(t)?0:Dh(oh(t))}function _i(t){return Yt(t)?t:Gr(t,!1,Ih,Rh,Ra)}function kh(t){return Gr(t,!1,Th,Ah,Aa)}function Oa(t){return Gr(t,!0,Sh,Ph,Pa)}function Gr(t,e,n,s,i){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Mh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function St(t){return Yt(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function Yt(t){return!!(t&&t.__v_isReadonly)}function Be(t){return!!(t&&t.__v_isShallow)}function Kr(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function zr(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&ha(t,"__v_skip",!0),t}const Ce=t=>oe(t)?_i(t):t,ar=t=>oe(t)?Oa(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function ht(t){return Da(t,!1)}function Fh(t){return Da(t,!0)}function Da(t,e){return ce(t)?t:new Lh(t,e)}class Lh{constructor(e,n){this.dep=new Vr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:G(e),this._value=n?e:Ce(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Be(e)||Yt(e);e=s?e:G(e),It(e,n)&&(this._rawValue=e,this._value=s?e:Ce(e),this.dep.trigger())}}function jt(t){return ce(t)?t.value:t}const Bh={get:(t,e,n)=>e==="__v_raw"?t:jt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ma(t){return St(t)?t:new Proxy(t,Bh)}function Wh(t){const e=M(t)?new Array(t.length):{};for(const n in t)e[n]=Uh(t,n);return e}class Hh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return yh(G(this._object),this._key)}}function Uh(t,e,n){const s=t[e];return ce(s)?s:new Hh(t,e,n)}class $h{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Ca(this,!0),!0}get value(){const e=this.dep.track();return wa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vh(t,e,n=!1){let s,i;return k(t)?s=t:(s=t.get,i=t.set),new $h(s,i,n)}const xs={},Bs=new WeakMap;let Ut;function jh(t,e=!1,n=Ut){if(n){let s=Bs.get(n);s||Bs.set(n,s=[]),s.push(t)}}function Gh(t,e,n=X){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=R=>i?R:Be(R)||i===!1||i===0?ut(R,1):ut(R);let u,h,d,g,_=!1,w=!1;if(ce(t)?(h=()=>t.value,_=Be(t)):St(t)?(h=()=>c(t),_=!0):M(t)?(w=!0,_=t.some(R=>St(R)||Be(R)),h=()=>t.map(R=>{if(ce(R))return R.value;if(St(R))return c(R);if(k(R))return a?a(R,2):R()})):k(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Mt();try{d()}finally{kt()}}const R=Ut;Ut=u;try{return a?a(t,3,[g]):t(g)}finally{Ut=R}}:h=tt,e&&i){const R=h,z=i===!0?1/0:i;h=()=>ut(R(),z)}const B=ma(),H=()=>{u.stop(),B&&B.active&&Lr(B.effects,u)};if(r&&e){const R=e;e=(...z)=>{R(...z),H()}}let Y=w?new Array(t.length).fill(xs):xs;const Q=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(e){const z=u.run();if(i||_||(w?z.some((rt,ye)=>It(rt,Y[ye])):It(z,Y))){d&&d();const rt=Ut;Ut=u;try{const ye=[z,Y===xs?void 0:w&&Y[0]===xs?[]:Y,g];a?a(e,3,ye):e(...ye),Y=z}finally{Ut=rt}}}else u.run()};return l&&l(Q),u=new ya(h),u.scheduler=o?()=>o(Q,!1):Q,g=R=>jh(R,!1,u),d=u.onStop=()=>{const R=Bs.get(u);if(R){if(a)a(R,4);else for(const z of R)z();Bs.delete(u)}},e?s?Q(!0):Y=u.run():o?o(Q.bind(null,!0),!0):u.run(),H.pause=u.pause.bind(u),H.resume=u.resume.bind(u),H.stop=H,H}function ut(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))ut(t.value,e,n);else if(M(t))for(let s=0;s<t.length;s++)ut(t[s],e,n);else if(la(t)||dn(t))t.forEach(s=>{ut(s,e,n)});else if(ua(t)){for(const s in t)ut(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ut(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ps(t,e,n,s){try{return s?t(...s):t()}catch(i){gi(i,e,n)}}function st(t,e,n,s){if(k(t)){const i=ps(t,e,n,s);return i&&aa(i)&&i.catch(r=>{gi(r,e,n)}),i}if(M(t)){const i=[];for(let r=0;r<t.length;r++)i.push(st(t[r],e,n,s));return i}}function gi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Mt(),ps(r,null,10,[t,a,c]),kt();return}}Kh(t,n,i,s,o)}function Kh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ie=[];let Xe=-1;const pn=[];let bt=null,an=0;const ka=Promise.resolve();let Ws=null;function Fa(t){const e=Ws||ka;return t?e.then(this?t.bind(this):t):e}function zh(t){let e=Xe+1,n=Ie.length;for(;e<n;){const s=e+n>>>1,i=Ie[s],r=es(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function qr(t){if(!(t.flags&1)){const e=es(t),n=Ie[Ie.length-1];!n||!(t.flags&2)&&e>=es(n)?Ie.push(t):Ie.splice(zh(e),0,t),t.flags|=1,La()}}function La(){Ws||(Ws=ka.then(Wa))}function qh(t){M(t)?pn.push(...t):bt&&t.id===-1?bt.splice(an+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),La()}function Uo(t,e,n=Xe+1){for(;n<Ie.length;n++){const s=Ie[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ba(t){if(pn.length){const e=[...new Set(pn)].sort((n,s)=>es(n)-es(s));if(pn.length=0,bt){bt.push(...e);return}for(bt=e,an=0;an<bt.length;an++){const n=bt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,an=0}}const es=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wa(t){try{for(Xe=0;Xe<Ie.length;Xe++){const e=Ie[Xe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ps(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xe<Ie.length;Xe++){const e=Ie[Xe];e&&(e.flags&=-2)}Xe=-1,Ie.length=0,Ba(),Ws=null,(Ie.length||pn.length)&&Wa()}}let xe=null,Ha=null;function Hs(t){const e=xe;return xe=t,Ha=t&&t.type.__scopeId||null,e}function Yh(t,e=xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Jo(-1);const r=Hs(e);let o;try{o=t(...i)}finally{Hs(r),s._d&&Jo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qh(t,e){if(xe===null)return t;const n=Ci(xe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=X]=e[i];r&&(k(r)&&(r={mounted:r,updated:r}),r.deep&&ut(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Bt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Mt(),st(a,n,8,[t.el,l,t,e]),kt())}}const Jh=Symbol("_vte"),Xh=t=>t.__isTeleport;function Yr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Yr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ua(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Us(t,e,n,s,i=!1){if(M(t)){t.forEach((_,w)=>Us(_,e&&(M(e)?e[w]:e),n,s,i));return}if($n(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Us(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ci(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===X?l.refs={}:l.refs,h=l.setupState,d=G(h),g=h===X?()=>!1:_=>q(d,_);if(c!=null&&c!==a&&(ue(c)?(u[c]=null,g(c)&&(h[c]=null)):ce(c)&&(c.value=null)),k(a))ps(a,l,12,[o,u]);else{const _=ue(a),w=ce(a);if(_||w){const B=()=>{if(t.f){const H=_?g(a)?h[a]:u[a]:a.value;i?M(H)&&Lr(H,r):M(H)?H.includes(r)||H.push(r):_?(u[a]=[r],g(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else _?(u[a]=o,g(a)&&(h[a]=o)):w&&(a.value=o,t.k&&(u[t.k]=o))};o?(B.id=-1,Me(B,n)):B()}}}fi().requestIdleCallback;fi().cancelIdleCallback;const $n=t=>!!t.type.__asyncLoader,$a=t=>t.type.__isKeepAlive;function Zh(t,e){Va(t,"a",e)}function ef(t,e){Va(t,"da",e)}function Va(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)$a(i.parent.vnode)&&tf(s,e,n,i),i=i.parent}}function tf(t,e,n,s){const i=mi(e,t,s,!0);ja(()=>{Lr(s[e],i)},n)}function mi(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Mt();const l=_s(n),a=st(e,n,t,o);return l(),kt(),a});return s?i.unshift(r):i.push(r),r}}const gt=t=>(e,n=me)=>{(!ns||t==="sp")&&mi(t,(...s)=>e(...s),n)},nf=gt("bm"),Qr=gt("m"),sf=gt("bu"),rf=gt("u"),of=gt("bum"),ja=gt("um"),lf=gt("sp"),af=gt("rtg"),cf=gt("rtc");function uf(t,e=me){mi("ec",t,e)}const hf="components",Ga=Symbol.for("v-ndc");function ff(t){return ue(t)?df(hf,t,!1)||t:t||Ga}function df(t,e,n=!0,s=!1){const i=xe||me;if(i){const r=i.type;{const l=nd(r,!1);if(l&&(l===e||l===We(e)||l===hi(We(e))))return r}const o=$o(i[t]||r[t],e)||$o(i.appContext[t],e);return!o&&s?r:o}}function $o(t,e){return t&&(t[e]||t[We(e)]||t[hi(We(e))])}function pf(t,e,n,s){let i;const r=n,o=M(t);if(o||ue(t)){const l=o&&St(t);let a=!1;l&&(a=!Be(t),t=pi(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?Ce(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const cr=t=>t?pc(t)?Ci(t):cr(t.parent):null,Vn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cr(t.parent),$root:t=>cr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>za(t),$forceUpdate:t=>t.f||(t.f=()=>{qr(t.update)}),$nextTick:t=>t.n||(t.n=Fa.bind(t.proxy)),$watch:t=>Lf.bind(t)}),Hi=(t,e)=>t!==X&&!t.__isScriptSetup&&q(t,e),_f={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Hi(s,e))return o[e]=1,s[e];if(i!==X&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==X&&q(n,e))return o[e]=4,n[e];ur&&(o[e]=0)}}const u=Vn[e];let h,d;if(u)return e==="$attrs"&&ve(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==X&&q(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Hi(i,e)?(i[e]=n,!0):s!==X&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==X&&q(t,o)||Hi(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(Vn,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vo(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ur=!0;function gf(t){const e=za(t),n=t.proxy,s=t.ctx;ur=!1,e.beforeCreate&&jo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:_,activated:w,deactivated:B,beforeDestroy:H,beforeUnmount:Y,destroyed:Q,unmounted:R,render:z,renderTracked:rt,renderTriggered:ye,errorCaptured:$,serverPrefetch:j,expose:he,inheritAttrs:Fe,components:Ke,directives:vt,filters:xn}=e;if(c&&mf(c,s,null),o)for(const U in o){const ee=o[U];k(ee)&&(s[U]=ee.bind(n))}if(i){const U=i.call(n,n);oe(U)&&(t.data=_i(U))}if(ur=!0,r)for(const U in r){const ee=r[U],Ft=k(ee)?ee.bind(n,n):k(ee.get)?ee.get.bind(n,n):tt,Is=!k(ee)&&k(ee.set)?ee.set.bind(n):tt,Lt=gc({get:Ft,set:Is});Object.defineProperty(s,U,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:ze=>Lt.value=ze})}if(l)for(const U in l)Ka(l[U],s,n,U);if(a){const U=k(a)?a.call(n):a;Reflect.ownKeys(U).forEach(ee=>{wf(ee,U[ee])})}u&&jo(u,t,"c");function ae(U,ee){M(ee)?ee.forEach(Ft=>U(Ft.bind(n))):ee&&U(ee.bind(n))}if(ae(nf,h),ae(Qr,d),ae(sf,g),ae(rf,_),ae(Zh,w),ae(ef,B),ae(uf,$),ae(cf,rt),ae(af,ye),ae(of,Y),ae(ja,R),ae(lf,j),M(he))if(he.length){const U=t.exposed||(t.exposed={});he.forEach(ee=>{Object.defineProperty(U,ee,{get:()=>n[ee],set:Ft=>n[ee]=Ft})})}else t.exposed||(t.exposed={});z&&t.render===tt&&(t.render=z),Fe!=null&&(t.inheritAttrs=Fe),Ke&&(t.components=Ke),vt&&(t.directives=vt),j&&Ua(t)}function mf(t,e,n=tt){M(t)&&(t=hr(t));for(const s in t){const i=t[s];let r;oe(i)?"default"in i?r=jn(i.from||s,i.default,!0):r=jn(i.from||s):r=jn(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function jo(t,e,n){st(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ka(t,e,n,s){let i=s.includes(".")?lc(n,s):()=>n[s];if(ue(t)){const r=e[t];k(r)&&Os(i,r)}else if(k(t))Os(i,t.bind(n));else if(oe(t))if(M(t))t.forEach(r=>Ka(r,e,n,s));else{const r=k(t.handler)?t.handler.bind(n):e[t.handler];k(r)&&Os(i,r,t)}}function za(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>$s(a,c,o,!0)),$s(a,e,o)),oe(e)&&r.set(e,a),a}function $s(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&$s(t,r,n,!0),i&&i.forEach(o=>$s(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=yf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yf={data:Go,props:Ko,emits:Ko,methods:Bn,computed:Bn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Bn,directives:Bn,watch:Cf,provide:Go,inject:vf};function Go(t,e){return e?t?function(){return Te(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function vf(t,e){return Bn(hr(t),hr(e))}function hr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Bn(t,e){return t?Te(Object.create(null),t,e):e}function Ko(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:Te(Object.create(null),Vo(t),Vo(e??{})):e}function Cf(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Ee(t[s],e[s]);return n}function qa(){return{app:null,config:{isNativeTag:ih,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function Ef(t,e){return function(s,i=null){k(s)||(s=Te({},s)),i!=null&&!oe(i)&&(i=null);const r=qa(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:bf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:id,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&k(u.install)?(o.add(u),u.install(c,...h)):k(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const g=c._ceVNode||nt(s,i);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(g,u,d),a=!0,c._container=u,u.__vue_app__=c,Ci(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(st(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=qt;qt=c;try{return u()}finally{qt=h}}};return c}}let qt=null;function wf(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function jn(t,e,n=!1){const s=me||xe;if(s||qt){const i=qt?qt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&k(e)?e.call(s&&s.proxy):e}}function If(){return!!(me||xe||qt)}const Ya={},Qa=()=>Object.create(Ya),Ja=t=>Object.getPrototypeOf(t)===Ya;function Sf(t,e,n,s=!1){const i={},r=Qa();t.propsDefaults=Object.create(null),Xa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:kh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Tf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=G(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(yi(t.emitsOptions,d))continue;const g=e[d];if(a)if(q(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const _=We(d);i[_]=fr(a,l,_,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Xa(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=en(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=fr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&ct(t.attrs,"set","")}function Xa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Wn(a))continue;const c=e[a];let u;i&&q(i,u=We(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:yi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=G(n),c=l||X;for(let u=0;u<r.length;u++){const h=r[u];n[h]=fr(i,a,h,c[h],t,!q(c,h))}}return o}function fr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&k(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=_s(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===en(n))&&(s=!0))}return s}const Nf=new WeakMap;function Za(t,e,n=!1){const s=n?Nf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!k(t)){const u=h=>{a=!0;const[d,g]=Za(h,e,!0);Te(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return oe(t)&&s.set(t,fn),fn;if(M(r))for(let u=0;u<r.length;u++){const h=We(r[u]);zo(h)&&(o[h]=X)}else if(r)for(const u in r){const h=We(u);if(zo(h)){const d=r[u],g=o[h]=M(d)||k(d)?{type:d}:Te({},d),_=g.type;let w=!1,B=!0;if(M(_))for(let H=0;H<_.length;++H){const Y=_[H],Q=k(Y)&&Y.name;if(Q==="Boolean"){w=!0;break}else Q==="String"&&(B=!1)}else w=k(_)&&_.name==="Boolean";g[0]=w,g[1]=B,(w||q(g,"default"))&&l.push(h)}}const c=[o,l];return oe(t)&&s.set(t,c),c}function zo(t){return t[0]!=="$"&&!Wn(t)}const ec=t=>t[0]==="_"||t==="$stable",Jr=t=>M(t)?t.map(et):[et(t)],xf=(t,e,n)=>{if(e._n)return e;const s=Yh((...i)=>Jr(e(...i)),n);return s._c=!1,s},tc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ec(i))continue;const r=t[i];if(k(r))e[i]=xf(i,r,s);else if(r!=null){const o=Jr(r);e[i]=()=>o}}},nc=(t,e)=>{const n=Jr(e);t.slots.default=()=>n},sc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Rf=(t,e,n)=>{const s=t.slots=Qa();if(t.vnode.shapeFlag&32){const i=e._;i?(sc(s,e,n),n&&ha(s,"_",i,!0)):tc(e,s)}else e&&nc(t,e)},Af=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=X;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:sc(i,e,n):(r=!e.$stable,tc(e,i)),o=e}else e&&(nc(t,e),o={default:1});if(r)for(const l in i)!ec(l)&&o[l]==null&&delete i[l]},Me=jf;function Pf(t){return Of(t)}function Of(t,e){const n=fi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=tt,insertStaticContent:_}=t,w=(f,p,m,C=null,y=null,v=null,T=void 0,S=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Dn(f,p)&&(C=Ss(f),ze(f,y,v,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:A,shapeFlag:N}=p;switch(b){case vi:B(f,p,m,C);break;case Qt:H(f,p,m,C);break;case $i:f==null&&Y(p,m,C,T);break;case He:Ke(f,p,m,C,y,v,T,S,I);break;default:N&1?z(f,p,m,C,y,v,T,S,I):N&6?vt(f,p,m,C,y,v,T,S,I):(N&64||N&128)&&b.process(f,p,m,C,y,v,T,S,I,An)}A!=null&&y&&Us(A,f&&f.ref,v,p||f,!p)},B=(f,p,m,C)=>{if(f==null)s(p.el=l(p.children),m,C);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},H=(f,p,m,C)=>{f==null?s(p.el=a(p.children||""),m,C):p.el=f.el},Y=(f,p,m,C)=>{[f.el,f.anchor]=_(f.children,p,m,C,f.el,f.anchor)},Q=({el:f,anchor:p},m,C)=>{let y;for(;f&&f!==p;)y=d(f),s(f,m,C),f=y;s(p,m,C)},R=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),i(f),f=m;i(p)},z=(f,p,m,C,y,v,T,S,I)=>{p.type==="svg"?T="svg":p.type==="math"&&(T="mathml"),f==null?rt(p,m,C,y,v,T,S,I):j(f,p,y,v,T,S,I)},rt=(f,p,m,C,y,v,T,S)=>{let I,b;const{props:A,shapeFlag:N,transition:x,dirs:O}=f;if(I=f.el=o(f.type,v,A&&A.is,A),N&8?u(I,f.children):N&16&&$(f.children,I,null,C,y,Ui(f,v),T,S),O&&Bt(f,null,C,"created"),ye(I,f,f.scopeId,T,C),A){for(const te in A)te!=="value"&&!Wn(te)&&r(I,te,null,A[te],v,C);"value"in A&&r(I,"value",null,A.value,v),(b=A.onVnodeBeforeMount)&&Je(b,C,f)}O&&Bt(f,null,C,"beforeMount");const V=Df(y,x);V&&x.beforeEnter(I),s(I,p,m),((b=A&&A.onVnodeMounted)||V||O)&&Me(()=>{b&&Je(b,C,f),V&&x.enter(I),O&&Bt(f,null,C,"mounted")},y)},ye=(f,p,m,C,y)=>{if(m&&g(f,m),C)for(let v=0;v<C.length;v++)g(f,C[v]);if(y){let v=y.subTree;if(p===v||cc(v.type)&&(v.ssContent===p||v.ssFallback===p)){const T=y.vnode;ye(f,T,T.scopeId,T.slotScopeIds,y.parent)}}},$=(f,p,m,C,y,v,T,S,I=0)=>{for(let b=I;b<f.length;b++){const A=f[b]=S?wt(f[b]):et(f[b]);w(null,A,p,m,C,y,v,T,S)}},j=(f,p,m,C,y,v,T)=>{const S=p.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:A}=p;I|=f.patchFlag&16;const N=f.props||X,x=p.props||X;let O;if(m&&Wt(m,!1),(O=x.onVnodeBeforeUpdate)&&Je(O,m,p,f),A&&Bt(p,f,m,"beforeUpdate"),m&&Wt(m,!0),(N.innerHTML&&x.innerHTML==null||N.textContent&&x.textContent==null)&&u(S,""),b?he(f.dynamicChildren,b,S,m,C,Ui(p,y),v):T||ee(f,p,S,null,m,C,Ui(p,y),v,!1),I>0){if(I&16)Fe(S,N,x,m,y);else if(I&2&&N.class!==x.class&&r(S,"class",null,x.class,y),I&4&&r(S,"style",N.style,x.style,y),I&8){const V=p.dynamicProps;for(let te=0;te<V.length;te++){const J=V[te],Oe=N[J],Ne=x[J];(Ne!==Oe||J==="value")&&r(S,J,Oe,Ne,y,m)}}I&1&&f.children!==p.children&&u(S,p.children)}else!T&&b==null&&Fe(S,N,x,m,y);((O=x.onVnodeUpdated)||A)&&Me(()=>{O&&Je(O,m,p,f),A&&Bt(p,f,m,"updated")},C)},he=(f,p,m,C,y,v,T)=>{for(let S=0;S<p.length;S++){const I=f[S],b=p[S],A=I.el&&(I.type===He||!Dn(I,b)||I.shapeFlag&70)?h(I.el):m;w(I,b,A,null,C,y,v,T,!0)}},Fe=(f,p,m,C,y)=>{if(p!==m){if(p!==X)for(const v in p)!Wn(v)&&!(v in m)&&r(f,v,p[v],null,y,C);for(const v in m){if(Wn(v))continue;const T=m[v],S=p[v];T!==S&&v!=="value"&&r(f,v,S,T,y,C)}"value"in m&&r(f,"value",p.value,m.value,y)}},Ke=(f,p,m,C,y,v,T,S,I)=>{const b=p.el=f?f.el:l(""),A=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:x,slotScopeIds:O}=p;O&&(S=S?S.concat(O):O),f==null?(s(b,m,C),s(A,m,C),$(p.children||[],m,A,y,v,T,S,I)):N>0&&N&64&&x&&f.dynamicChildren?(he(f.dynamicChildren,x,m,y,v,T,S),(p.key!=null||y&&p===y.subTree)&&ic(f,p,!0)):ee(f,p,m,A,y,v,T,S,I)},vt=(f,p,m,C,y,v,T,S,I)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?y.ctx.activate(p,m,C,T,I):xn(p,m,C,y,v,T,I):ws(f,p,I)},xn=(f,p,m,C,y,v,T)=>{const S=f.component=Jf(f,C,y);if($a(f)&&(S.ctx.renderer=An),Xf(S,!1,T),S.asyncDep){if(y&&y.registerDep(S,ae,T),!f.el){const I=S.subTree=nt(Qt);H(null,I,p,m)}}else ae(S,f,p,m,y,v,T)},ws=(f,p,m)=>{const C=p.component=f.component;if($f(f,p,m))if(C.asyncDep&&!C.asyncResolved){U(C,p,m);return}else C.next=p,C.update();else p.el=f.el,C.vnode=p},ae=(f,p,m,C,y,v,T)=>{const S=()=>{if(f.isMounted){let{next:N,bu:x,u:O,parent:V,vnode:te}=f;{const Ye=rc(f);if(Ye){N&&(N.el=te.el,U(f,N,T)),Ye.asyncDep.then(()=>{f.isUnmounted||S()});return}}let J=N,Oe;Wt(f,!1),N?(N.el=te.el,U(f,N,T)):N=te,x&&Ps(x),(Oe=N.props&&N.props.onVnodeBeforeUpdate)&&Je(Oe,V,N,te),Wt(f,!0);const Ne=Yo(f),qe=f.subTree;f.subTree=Ne,w(qe,Ne,h(qe.el),Ss(qe),f,y,v),N.el=Ne.el,J===null&&Vf(f,Ne.el),O&&Me(O,y),(Oe=N.props&&N.props.onVnodeUpdated)&&Me(()=>Je(Oe,V,N,te),y)}else{let N;const{el:x,props:O}=p,{bm:V,m:te,parent:J,root:Oe,type:Ne}=f,qe=$n(p);Wt(f,!1),V&&Ps(V),!qe&&(N=O&&O.onVnodeBeforeMount)&&Je(N,J,p),Wt(f,!0);{Oe.ce&&Oe.ce._injectChildStyle(Ne);const Ye=f.subTree=Yo(f);w(null,Ye,m,C,f,y,v),p.el=Ye.el}if(te&&Me(te,y),!qe&&(N=O&&O.onVnodeMounted)){const Ye=p;Me(()=>Je(N,J,Ye),y)}(p.shapeFlag&256||J&&$n(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&Me(f.a,y),f.isMounted=!0,p=m=C=null}};f.scope.on();const I=f.effect=new ya(S);f.scope.off();const b=f.update=I.run.bind(I),A=f.job=I.runIfDirty.bind(I);A.i=f,A.id=f.uid,I.scheduler=()=>qr(A),Wt(f,!0),b()},U=(f,p,m)=>{p.component=f;const C=f.vnode.props;f.vnode=p,f.next=null,Tf(f,p.props,C,m),Af(f,p.children,m),Mt(),Uo(f),kt()},ee=(f,p,m,C,y,v,T,S,I=!1)=>{const b=f&&f.children,A=f?f.shapeFlag:0,N=p.children,{patchFlag:x,shapeFlag:O}=p;if(x>0){if(x&128){Is(b,N,m,C,y,v,T,S,I);return}else if(x&256){Ft(b,N,m,C,y,v,T,S,I);return}}O&8?(A&16&&Rn(b,y,v),N!==b&&u(m,N)):A&16?O&16?Is(b,N,m,C,y,v,T,S,I):Rn(b,y,v,!0):(A&8&&u(m,""),O&16&&$(N,m,C,y,v,T,S,I))},Ft=(f,p,m,C,y,v,T,S,I)=>{f=f||fn,p=p||fn;const b=f.length,A=p.length,N=Math.min(b,A);let x;for(x=0;x<N;x++){const O=p[x]=I?wt(p[x]):et(p[x]);w(f[x],O,m,null,y,v,T,S,I)}b>A?Rn(f,y,v,!0,!1,N):$(p,m,C,y,v,T,S,I,N)},Is=(f,p,m,C,y,v,T,S,I)=>{let b=0;const A=p.length;let N=f.length-1,x=A-1;for(;b<=N&&b<=x;){const O=f[b],V=p[b]=I?wt(p[b]):et(p[b]);if(Dn(O,V))w(O,V,m,null,y,v,T,S,I);else break;b++}for(;b<=N&&b<=x;){const O=f[N],V=p[x]=I?wt(p[x]):et(p[x]);if(Dn(O,V))w(O,V,m,null,y,v,T,S,I);else break;N--,x--}if(b>N){if(b<=x){const O=x+1,V=O<A?p[O].el:C;for(;b<=x;)w(null,p[b]=I?wt(p[b]):et(p[b]),m,V,y,v,T,S,I),b++}}else if(b>x)for(;b<=N;)ze(f[b],y,v,!0),b++;else{const O=b,V=b,te=new Map;for(b=V;b<=x;b++){const De=p[b]=I?wt(p[b]):et(p[b]);De.key!=null&&te.set(De.key,b)}let J,Oe=0;const Ne=x-V+1;let qe=!1,Ye=0;const Pn=new Array(Ne);for(b=0;b<Ne;b++)Pn[b]=0;for(b=O;b<=N;b++){const De=f[b];if(Oe>=Ne){ze(De,y,v,!0);continue}let Qe;if(De.key!=null)Qe=te.get(De.key);else for(J=V;J<=x;J++)if(Pn[J-V]===0&&Dn(De,p[J])){Qe=J;break}Qe===void 0?ze(De,y,v,!0):(Pn[Qe-V]=b+1,Qe>=Ye?Ye=Qe:qe=!0,w(De,p[Qe],m,null,y,v,T,S,I),Oe++)}const Fo=qe?Mf(Pn):fn;for(J=Fo.length-1,b=Ne-1;b>=0;b--){const De=V+b,Qe=p[De],Lo=De+1<A?p[De+1].el:C;Pn[b]===0?w(null,Qe,m,Lo,y,v,T,S,I):qe&&(J<0||b!==Fo[J]?Lt(Qe,m,Lo,2):J--)}}},Lt=(f,p,m,C,y=null)=>{const{el:v,type:T,transition:S,children:I,shapeFlag:b}=f;if(b&6){Lt(f.component.subTree,p,m,C);return}if(b&128){f.suspense.move(p,m,C);return}if(b&64){T.move(f,p,m,An);return}if(T===He){s(v,p,m);for(let N=0;N<I.length;N++)Lt(I[N],p,m,C);s(f.anchor,p,m);return}if(T===$i){Q(f,p,m);return}if(C!==2&&b&1&&S)if(C===0)S.beforeEnter(v),s(v,p,m),Me(()=>S.enter(v),y);else{const{leave:N,delayLeave:x,afterLeave:O}=S,V=()=>s(v,p,m),te=()=>{N(v,()=>{V(),O&&O()})};x?x(v,V,te):te()}else s(v,p,m)},ze=(f,p,m,C=!1,y=!1)=>{const{type:v,props:T,ref:S,children:I,dynamicChildren:b,shapeFlag:A,patchFlag:N,dirs:x,cacheIndex:O}=f;if(N===-2&&(y=!1),S!=null&&Us(S,null,m,f,!0),O!=null&&(p.renderCache[O]=void 0),A&256){p.ctx.deactivate(f);return}const V=A&1&&x,te=!$n(f);let J;if(te&&(J=T&&T.onVnodeBeforeUnmount)&&Je(J,p,f),A&6)sh(f.component,m,C);else{if(A&128){f.suspense.unmount(m,C);return}V&&Bt(f,null,p,"beforeUnmount"),A&64?f.type.remove(f,p,m,An,C):b&&!b.hasOnce&&(v!==He||N>0&&N&64)?Rn(b,p,m,!1,!0):(v===He&&N&384||!y&&A&16)&&Rn(I,p,m),C&&Mo(f)}(te&&(J=T&&T.onVnodeUnmounted)||V)&&Me(()=>{J&&Je(J,p,f),V&&Bt(f,null,p,"unmounted")},m)},Mo=f=>{const{type:p,el:m,anchor:C,transition:y}=f;if(p===He){nh(m,C);return}if(p===$i){R(f);return}const v=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:S}=y,I=()=>T(m,v);S?S(f.el,v,I):I()}else v()},nh=(f,p)=>{let m;for(;f!==p;)m=d(f),i(f),f=m;i(p)},sh=(f,p,m)=>{const{bum:C,scope:y,job:v,subTree:T,um:S,m:I,a:b}=f;qo(I),qo(b),C&&Ps(C),y.stop(),v&&(v.flags|=8,ze(T,f,p,m)),S&&Me(S,p),Me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Rn=(f,p,m,C=!1,y=!1,v=0)=>{for(let T=v;T<f.length;T++)ze(f[T],p,m,C,y)},Ss=f=>{if(f.shapeFlag&6)return Ss(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),m=p&&p[Jh];return m?d(m):p};let Mi=!1;const ko=(f,p,m)=>{f==null?p._vnode&&ze(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,m),p._vnode=f,Mi||(Mi=!0,Uo(),Ba(),Mi=!1)},An={p:w,um:ze,m:Lt,r:Mo,mt:xn,mc:$,pc:ee,pbc:he,n:Ss,o:t};return{render:ko,hydrate:void 0,createApp:Ef(ko)}}function Ui({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Df(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ic(t,e,n=!1){const s=t.children,i=e.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=wt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ic(o,l)),l.type===vi&&(l.el=o.el)}}function Mf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function rc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rc(e)}function qo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const kf=Symbol.for("v-scx"),Ff=()=>jn(kf);function Os(t,e,n){return oc(t,e,n)}function oc(t,e,n=X){const{immediate:s,deep:i,flush:r,once:o}=n,l=Te({},n),a=e&&s||!e&&r!=="post";let c;if(ns){if(r==="sync"){const g=Ff();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=tt,g.resume=tt,g.pause=tt,g}}const u=me;l.call=(g,_,w)=>st(g,u,_,w);let h=!1;r==="post"?l.scheduler=g=>{Me(g,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(g,_)=>{_?g():qr(g)}),l.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=Gh(t,e,l);return ns&&(c?c.push(d):a&&d()),d}function Lf(t,e,n){const s=this.proxy,i=ue(t)?t.includes(".")?lc(s,t):()=>s[t]:t.bind(s,s);let r;k(e)?r=e:(r=e.handler,n=e);const o=_s(this),l=oc(i,r.bind(s),n);return o(),l}function lc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Bf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${We(e)}Modifiers`]||t[`${en(e)}Modifiers`];function Wf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let i=n;const r=e.startsWith("update:"),o=r&&Bf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ue(u)?u.trim():u)),o.number&&(i=n.map(ir)));let l,a=s[l=ki(e)]||s[l=ki(We(e))];!a&&r&&(a=s[l=ki(en(e))]),a&&st(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,st(c,t,6,i)}}function ac(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!k(t)){const a=c=>{const u=ac(c,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(oe(t)&&s.set(t,null),null):(M(r)?r.forEach(a=>o[a]=null):Te(o,r),oe(t)&&s.set(t,o),o)}function yi(t,e){return!t||!ai(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,en(e))||q(t,e))}function Yo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:g,ctx:_,inheritAttrs:w}=t,B=Hs(t);let H,Y;try{if(n.shapeFlag&4){const R=i||s,z=R;H=et(c.call(z,R,u,h,g,d,_)),Y=l}else{const R=e;H=et(R.length>1?R(h,{attrs:l,slots:o,emit:a}):R(h,null)),Y=e.props?l:Hf(l)}}catch(R){Gn.length=0,gi(R,t,1),H=nt(Qt)}let Q=H;if(Y&&w!==!1){const R=Object.keys(Y),{shapeFlag:z}=Q;R.length&&z&7&&(r&&R.some(Fr)&&(Y=Uf(Y,r)),Q=yn(Q,Y,!1,!0))}return n.dirs&&(Q=yn(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Yr(Q,n.transition),H=Q,Hs(B),H}const Hf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ai(n))&&((e||(e={}))[n]=t[n]);return e},Uf=(t,e)=>{const n={};for(const s in t)(!Fr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function $f(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Qo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!yi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Qo(s,o,c):!0:!!o;return!1}function Qo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!yi(n,r))return!0}return!1}function Vf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const cc=t=>t.__isSuspense;function jf(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):qh(t)}const He=Symbol.for("v-fgt"),vi=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),$i=Symbol.for("v-stc"),Gn=[];let ke=null;function Le(t=!1){Gn.push(ke=t?null:[])}function Gf(){Gn.pop(),ke=Gn[Gn.length-1]||null}let ts=1;function Jo(t,e=!1){ts+=t,t<0&&ke&&e&&(ke.hasOnce=!0)}function uc(t){return t.dynamicChildren=ts>0?ke||fn:null,Gf(),ts>0&&ke&&ke.push(t),t}function Ze(t,e,n,s,i,r){return uc(D(t,e,n,s,i,r,!0))}function hc(t,e,n,s,i){return uc(nt(t,e,n,s,i,!0))}function fc(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const dc=({key:t})=>t??null,Ds=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ce(t)||k(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,s=0,i=null,r=t===He?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dc(e),ref:e&&Ds(e),scopeId:Ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xe};return l?(Xr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),ts>0&&!o&&ke&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ke.push(a),a}const nt=Kf;function Kf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ga)&&(t=Qt),fc(t)){const l=yn(t,e,!0);return n&&Xr(l,n),ts>0&&!r&&ke&&(l.shapeFlag&6?ke[ke.indexOf(t)]=l:ke.push(l)),l.patchFlag=-2,l}if(sd(t)&&(t=t.__vccOpts),e){e=zf(e);let{class:l,style:a}=e;l&&!ue(l)&&(e.class=Wr(l)),oe(a)&&(Kr(a)&&!M(a)&&(a=Te({},a)),e.style=di(a))}const o=ue(t)?1:cc(t)?128:Xh(t)?64:oe(t)?4:k(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function zf(t){return t?Kr(t)||Ja(t)?Te({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?qf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&dc(c),ref:e&&e.ref?n&&r?M(r)?r.concat(Ds(e)):[r,Ds(e)]:Ds(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Yr(u,a.clone(u)),u}function Et(t=" ",e=0){return nt(vi,null,t,e)}function un(t="",e=!1){return e?(Le(),hc(Qt,null,t)):nt(Qt,null,t)}function et(t){return t==null||typeof t=="boolean"?nt(Qt):M(t)?nt(He,null,t.slice()):fc(t)?wt(t):nt(vi,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function Xr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Xr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ja(e)?e._ctx=xe:i===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),s&64?(n=16,e=[Et(e)]):n=8);t.children=e,t.shapeFlag|=n}function qf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Wr([e.class,s.class]));else if(i==="style")e.style=di([e.style,s.style]);else if(ai(i)){const r=e[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Je(t,e,n,s=null){st(t,e,7,[n,s])}const Yf=qa();let Qf=0;function Jf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yf,r={uid:Qf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Za(s,i),emitsOptions:ac(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wf.bind(null,r),t.ce&&t.ce(r),r}let me=null,Vs,dr;{const t=fi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Vs=e("__VUE_INSTANCE_SETTERS__",n=>me=n),dr=e("__VUE_SSR_SETTERS__",n=>ns=n)}const _s=t=>{const e=me;return Vs(t),t.scope.on(),()=>{t.scope.off(),Vs(e)}},Xo=()=>{me&&me.scope.off(),Vs(null)};function pc(t){return t.vnode.shapeFlag&4}let ns=!1;function Xf(t,e=!1,n=!1){e&&dr(e);const{props:s,children:i}=t.vnode,r=pc(t);Sf(t,s,r,e),Rf(t,i,n);const o=r?Zf(t,e):void 0;return e&&dr(!1),o}function Zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_f);const{setup:s}=n;if(s){Mt();const i=t.setupContext=s.length>1?td(t):null,r=_s(t),o=ps(s,t,0,[t.props,i]),l=aa(o);if(kt(),r(),(l||t.sp)&&!$n(t)&&Ua(t),l){if(o.then(Xo,Xo),e)return o.then(a=>{Zo(t,a)}).catch(a=>{gi(a,t,0)});t.asyncDep=o}else Zo(t,o)}else _c(t)}function Zo(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Ma(e)),_c(t)}function _c(t,e,n){const s=t.type;t.render||(t.render=s.render||tt);{const i=_s(t);Mt();try{gf(t)}finally{kt(),i()}}}const ed={get(t,e){return ve(t,"get",""),t[e]}};function td(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ed),slots:t.slots,emit:t.emit,expose:e}}function Ci(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ma(zr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vn)return Vn[n](t)},has(e,n){return n in e||n in Vn}})):t.proxy}function nd(t,e=!0){return k(t)?t.displayName||t.name:t.name||e&&t.__name}function sd(t){return k(t)&&"__vccOpts"in t}const gc=(t,e)=>Vh(t,e,ns),id="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pr;const el=typeof window<"u"&&window.trustedTypes;if(el)try{pr=el.createPolicy("vue",{createHTML:t=>t})}catch{}const mc=pr?t=>pr.createHTML(t):t=>t,rd="http://www.w3.org/2000/svg",od="http://www.w3.org/1998/Math/MathML",at=typeof document<"u"?document:null,tl=at&&at.createElement("template"),ld={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?at.createElementNS(rd,t):e==="mathml"?at.createElementNS(od,t):n?at.createElement(t,{is:n}):at.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>at.createTextNode(t),createComment:t=>at.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>at.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{tl.innerHTML=mc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=tl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ad=Symbol("_vtc");function cd(t,e,n){const s=t[ad];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nl=Symbol("_vod"),ud=Symbol("_vsh"),hd=Symbol(""),fd=/(^|;)\s*display\s*:/;function dd(t,e,n){const s=t.style,i=ue(n);let r=!1;if(n&&!i){if(e)if(ue(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ms(s,l,"")}else for(const o in e)n[o]==null&&Ms(s,o,"");for(const o in n)o==="display"&&(r=!0),Ms(s,o,n[o])}else if(i){if(e!==n){const o=s[hd];o&&(n+=";"+o),s.cssText=n,r=fd.test(n)}}else e&&t.removeAttribute("style");nl in t&&(t[nl]=r?s.display:"",t[ud]&&(s.display="none"))}const sl=/\s*!important$/;function Ms(t,e,n){if(M(n))n.forEach(s=>Ms(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pd(t,e);sl.test(n)?t.setProperty(en(s),n.replace(sl,""),"important"):t[s]=n}}const il=["Webkit","Moz","ms"],Vi={};function pd(t,e){const n=Vi[e];if(n)return n;let s=We(e);if(s!=="filter"&&s in t)return Vi[e]=s;s=hi(s);for(let i=0;i<il.length;i++){const r=il[i]+s;if(r in t)return Vi[e]=r}return e}const rl="http://www.w3.org/1999/xlink";function ol(t,e,n,s,i,r=ph(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rl,e.slice(6,e.length)):t.setAttributeNS(rl,e,n):n==null||r&&!fa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Dt(n)?String(n):n)}function ll(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=fa(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function cn(t,e,n,s){t.addEventListener(e,n,s)}function _d(t,e,n,s){t.removeEventListener(e,n,s)}const al=Symbol("_vei");function gd(t,e,n,s,i=null){const r=t[al]||(t[al]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=md(e);if(s){const c=r[e]=Cd(s,i);cn(t,l,c,a)}else o&&(_d(t,l,o,a),r[e]=void 0)}}const cl=/(?:Once|Passive|Capture)$/;function md(t){let e;if(cl.test(t)){e={};let s;for(;s=t.match(cl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let ji=0;const yd=Promise.resolve(),vd=()=>ji||(yd.then(()=>ji=0),ji=Date.now());function Cd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;st(bd(s,n.value),e,5,[s])};return n.value=t,n.attached=vd(),n}function bd(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ul=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ed=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?cd(t,s,o):e==="style"?dd(t,n,s):ai(e)?Fr(e)||gd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wd(t,e,s,o))?(ll(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ol(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue(s))?ll(t,We(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ol(t,e,s,o))};function wd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ul(e)&&k(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ul(e)&&ue(n)?!1:e in t}const hl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>Ps(e,n):e};function Id(t){t.target.composing=!0}function fl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gi=Symbol("_assign"),Sd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Gi]=hl(i);const r=s||i.props&&i.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ir(l)),t[Gi](l)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",Id),cn(t,"compositionend",fl),cn(t,"change",fl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Gi]=hl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?ir(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Td=Te({patchProp:Ed},ld);let dl;function Nd(){return dl||(dl=Pf(Td))}const xd=(...t)=>{const e=Nd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ad(s);if(!i)return;const r=e._component;!k(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Rd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Rd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ad(t){return ue(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let yc;const bi=t=>yc=t,vc=Symbol();function _r(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kn||(Kn={}));function Pd(){const t=ga(!0),e=t.run(()=>ht({}));let n=[],s=[];const i=zr({install(r){bi(i),i._a=r,r.provide(vc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Cc=()=>{};function pl(t,e,n,s=Cc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ma()&&_h(i),i}function sn(t,...e){t.slice().forEach(n=>{n(...e)})}const Od=t=>t(),_l=Symbol(),Ki=Symbol();function gr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];_r(i)&&_r(s)&&t.hasOwnProperty(n)&&!ce(s)&&!St(s)?t[n]=gr(i,s):t[n]=s}return t}const Dd=Symbol();function Md(t){return!_r(t)||!t.hasOwnProperty(Dd)}const{assign:Ct}=Object;function kd(t){return!!(ce(t)&&t.effect)}function Fd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Wh(n.state.value[t]);return Ct(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=zr(gc(()=>{bi(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return a=bc(t,c,e,n,s,!0),a}function bc(t,e,n={},s,i,r){let o;const l=Ct({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],g;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),ht({});let w;function B($){let j;c=u=!1,typeof $=="function"?($(s.state.value[t]),j={type:Kn.patchFunction,storeId:t,events:g}):(gr(s.state.value[t],$),j={type:Kn.patchObject,payload:$,storeId:t,events:g});const he=w=Symbol();Fa().then(()=>{w===he&&(c=!0)}),u=!0,sn(h,j,s.state.value[t])}const H=r?function(){const{state:j}=n,he=j?j():{};this.$patch(Fe=>{Ct(Fe,he)})}:Cc;function Y(){o.stop(),h=[],d=[],s._s.delete(t)}const Q=($,j="")=>{if(_l in $)return $[Ki]=j,$;const he=function(){bi(s);const Fe=Array.from(arguments),Ke=[],vt=[];function xn(U){Ke.push(U)}function ws(U){vt.push(U)}sn(d,{args:Fe,name:he[Ki],store:z,after:xn,onError:ws});let ae;try{ae=$.apply(this&&this.$id===t?this:z,Fe)}catch(U){throw sn(vt,U),U}return ae instanceof Promise?ae.then(U=>(sn(Ke,U),U)).catch(U=>(sn(vt,U),Promise.reject(U))):(sn(Ke,ae),ae)};return he[_l]=!0,he[Ki]=j,he},R={_p:s,$id:t,$onAction:pl.bind(null,d),$patch:B,$reset:H,$subscribe($,j={}){const he=pl(h,$,j.detached,()=>Fe()),Fe=o.run(()=>Os(()=>s.state.value[t],Ke=>{(j.flush==="sync"?u:c)&&$({storeId:t,type:Kn.direct,events:g},Ke)},Ct({},a,j)));return he},$dispose:Y},z=_i(R);s._s.set(t,z);const ye=(s._a&&s._a.runWithContext||Od)(()=>s._e.run(()=>(o=ga()).run(()=>e({action:Q}))));for(const $ in ye){const j=ye[$];if(ce(j)&&!kd(j)||St(j))r||(_&&Md(j)&&(ce(j)?j.value=_[$]:gr(j,_[$])),s.state.value[t][$]=j);else if(typeof j=="function"){const he=Q(j,$);ye[$]=he,l.actions[$]=j}}return Ct(z,ye),Ct(G(z),ye),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:$=>{B(j=>{Ct(j,$)})}}),s._p.forEach($=>{Ct(z,o.run(()=>$({store:z,app:s._a,pinia:s,options:l})))}),_&&r&&n.hydrate&&n.hydrate(z.$state,_),c=!0,u=!0,z}/*! #__NO_SIDE_EFFECTS__ */function Ld(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=If();return o=o||(a?jn(vc,null):null),o&&bi(o),o=yc,o._s.has(t)||(i?bc(t,e,s,o):Fd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Bd=()=>{};var gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw wn(e)},wn=function(t){return new Error("Firebase Database ("+Ec.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Hd;const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ic=function(t){const e=wc(t);return Zr.encodeByteArray(e,!0)},js=function(t){return Ic(t).replace(/\./g,"")},mr=function(t){try{return Zr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t){return Sc(void 0,t)}function Sc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$d(n)||(t[n]=Sc(t[n],e[n]));return t}function $d(t){return t!=="__proto__"}/**
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
 */const jd=()=>Vd().__FIREBASE_DEFAULTS__,Gd=()=>{if(typeof process>"u"||typeof gl>"u")return;const t=gl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mr(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return Bd()||jd()||Gd()||Kd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zd=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qd=t=>{const e=zd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Nc=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Yd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[js(JSON.stringify(n)),js(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qd())}function Jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xd(){return Ec.NODE_ADMIN===!0}function Zd(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class gs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=tp,Object.setPrototypeOf(this,gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rc.prototype.create)}}class Rc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?np(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gs(i,l,s)}}function np(t,e){return t.replace(sp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ss(mr(r[0])||""),n=ss(mr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ip=function(t){const e=Ac(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rp=function(t){const e=Ac(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ks(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yl(r)&&yl(o)){if(!Ks(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function eo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function In(t){return t&&t._delegate?t._delegate:t}class is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class cp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ei;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hp(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:up(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function up(t){return t===$t?void 0:t}function hp(t){return t.instantiationMode==="EAGER"}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const dp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},pp=se.INFO,_p={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},gp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=_p[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=pp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const mp=(t,e)=>e.some(n=>t instanceof n);let vl,Cl;function yp(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oc=new WeakMap,yr=new WeakMap,Dc=new WeakMap,zi=new WeakMap,to=new WeakMap;function Cp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oc.set(n,t)}).catch(()=>{}),to.set(e,t),e}function bp(t){if(yr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});yr.set(t,e)}let vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ep(t){vr=t(vr)}function wp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qi(this),e,...n);return Dc.set(s,e.sort?e.sort():[e]),Tt(s)}:vp().includes(t)?function(...e){return t.apply(qi(this),e),Tt(Oc.get(this))}:function(...e){return Tt(t.apply(qi(this),e))}}function Ip(t){return typeof t=="function"?wp(t):(t instanceof IDBTransaction&&bp(t),mp(t,yp())?new Proxy(t,vr):t)}function Tt(t){if(t instanceof IDBRequest)return Cp(t);if(zi.has(t))return zi.get(t);const e=Ip(t);return e!==t&&(zi.set(t,e),to.set(e,t)),e}const qi=t=>to.get(t);function Sp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Tt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Tt(o.result),a.oldVersion,a.newVersion,Tt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Tp=["get","getKey","getAll","getAllKeys","count"],Np=["put","add","delete","clear"],Yi=new Map;function bl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yi.get(e))return Yi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Np.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Yi.set(e,r),r}Ep(t=>({...t,get:(e,n,s)=>bl(e,n)||t.get(e,n,s),has:(e,n)=>!!bl(e,n)||t.has(e,n)}));/**
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
 */class xp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cr="@firebase/app",El="0.11.2";/**
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
 */const pt=new Pc("@firebase/app"),Ap="@firebase/app-compat",Pp="@firebase/analytics-compat",Op="@firebase/analytics",Dp="@firebase/app-check-compat",Mp="@firebase/app-check",kp="@firebase/auth",Fp="@firebase/auth-compat",Lp="@firebase/database",Bp="@firebase/data-connect",Wp="@firebase/database-compat",Hp="@firebase/functions",Up="@firebase/functions-compat",$p="@firebase/installations",Vp="@firebase/installations-compat",jp="@firebase/messaging",Gp="@firebase/messaging-compat",Kp="@firebase/performance",zp="@firebase/performance-compat",qp="@firebase/remote-config",Yp="@firebase/remote-config-compat",Qp="@firebase/storage",Jp="@firebase/storage-compat",Xp="@firebase/firestore",Zp="@firebase/vertexai",e_="@firebase/firestore-compat",t_="firebase",n_="11.4.0";/**
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
 */const br="[DEFAULT]",s_={[Cr]:"fire-core",[Ap]:"fire-core-compat",[Op]:"fire-analytics",[Pp]:"fire-analytics-compat",[Mp]:"fire-app-check",[Dp]:"fire-app-check-compat",[kp]:"fire-auth",[Fp]:"fire-auth-compat",[Lp]:"fire-rtdb",[Bp]:"fire-data-connect",[Wp]:"fire-rtdb-compat",[Hp]:"fire-fn",[Up]:"fire-fn-compat",[$p]:"fire-iid",[Vp]:"fire-iid-compat",[jp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Kp]:"fire-perf",[zp]:"fire-perf-compat",[qp]:"fire-rc",[Yp]:"fire-rc-compat",[Qp]:"fire-gcs",[Jp]:"fire-gcs-compat",[Xp]:"fire-fst",[e_]:"fire-fst-compat",[Zp]:"fire-vertex","fire-js":"fire-js",[t_]:"fire-js-all"};/**
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
 */const zs=new Map,i_=new Map,Er=new Map;function wl(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(Er.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;Er.set(e,t);for(const n of zs.values())wl(n,t);for(const n of i_.values())wl(n,t);return!0}function r_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function o_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const l_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new Rc("app","Firebase",l_);/**
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
 */class a_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const c_=n_;function Mc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:br,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=Nc()),!n)throw Nt.create("no-options");const r=zs.get(i);if(r){if(Ks(n,r.options)&&Ks(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new fp(i);for(const a of Er.values())o.addComponent(a);const l=new a_(n,s,o);return zs.set(i,l),l}function u_(t=br){const e=zs.get(t);if(!e&&t===br&&Nc())return Mc();if(!e)throw Nt.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=s_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(l.join(" "));return}qs(new is(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const h_="firebase-heartbeat-database",f_=1,rs="firebase-heartbeat-store";let Qi=null;function kc(){return Qi||(Qi=Sp(h_,f_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),Qi}async function d_(t){try{const n=(await kc()).transaction(rs),s=await n.objectStore(rs).get(Fc(t));return await n.done,s}catch(e){if(e instanceof gs)pt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(n.message)}}}async function Il(t,e){try{const s=(await kc()).transaction(rs,"readwrite");await s.objectStore(rs).put(e,Fc(t)),await s.done}catch(n){if(n instanceof gs)pt.warn(n.message);else{const s=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(s.message)}}}function Fc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p_=1024,__=30;class g_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>__){const o=v_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sl(),{heartbeatsToSend:s,unsentEntries:i}=m_(this._heartbeatsCache.heartbeats),r=js(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return pt.warn(n),""}}}function Sl(){return new Date().toISOString().substring(0,10)}function m_(t,e=p_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class y_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zd()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tl(t){return js(JSON.stringify({version:2,heartbeats:t})).length}function v_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function C_(t){qs(new is("platform-logger",e=>new xp(e),"PRIVATE")),qs(new is("heartbeat",e=>new g_(e),"PRIVATE")),_n(Cr,El,t),_n(Cr,El,"esm2017"),_n("fire-js","")}C_("");var b_="firebase",E_="11.4.0";/**
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
 */_n(b_,E_,"app");var Nl={};const xl="@firebase/database",Rl="1.0.13";/**
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
 */let Lc="";function w_(t){Lc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ss(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new I_(e)}}catch{}return new S_},Gt=Bc("localStorage"),T_=Bc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Pc("@firebase/database"),N_=function(){let t=1;return function(){return t++}}(),Wc=function(t){const e=ap(t),n=new lp;n.update(e);const s=n.digest();return Zr.encodeByteArray(s)},ms=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ms.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let zn=null,Al=!0;const x_=function(t,e){E(!0,"Can't turn on custom loggers persistently."),gn.logLevel=se.VERBOSE,zn=gn.log.bind(gn)},be=function(...t){if(Al===!0&&(Al=!1,zn===null&&T_.get("logging_enabled")===!0&&x_()),zn){const e=ms.apply(null,t);zn(e)}},ys=function(t){return function(...e){be(t,...e)}},wr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ms(...t);gn.error(e)},_t=function(...t){const e=`FIREBASE FATAL ERROR: ${ms(...t)}`;throw gn.error(e),new Error(e)},Ae=function(...t){const e="FIREBASE WARNING: "+ms(...t);gn.warn(e)},R_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",Jt="[MAX_NAME]",Sn=function(t,e){if(t===e)return 0;if(t===Cn||e===Jt)return-1;if(e===Cn||t===Jt)return 1;{const n=Pl(t),s=Pl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},P_=function(t,e){return t===e?0:t<e?-1:1},Mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},no=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=no(t[e[s]]);return n+="}",n},Uc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $c=function(t){E(!Hc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},O_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},D_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function M_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const k_=new RegExp("^-?(0*)\\d{1,10}$"),F_=-2147483648,L_=2147483647,Pl=function(t){if(k_.test(t)){const e=Number(t);if(e>=F_&&e<=L_)return e}return null},Tn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ae("Exception was thrown by user callback.",n),e},Math.floor(0))}},B_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class W_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,o_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ae(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ae(e)}}class ks{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ks.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="5",Vc="v",jc="s",Gc="r",Kc="f",zc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qc="ls",Yc="p",Ir="ac",Qc="websocket",Jc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function U_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===Qc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);U_(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.counters_={}}incrementCounter(e,n=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ud(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={},Xi={};function io(t){const e=t.toString();return Ji[e]||(Ji[e]=new $_),Ji[e]}function V_(t,e){const n=t.toString();return Xi[n]||(Xi[n]=e()),Xi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Tn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="start",G_="close",K_="pLPCommand",z_="pRTLPCB",eu="id",tu="pw",nu="ser",q_="cb",Y_="seg",Q_="ts",J_="d",X_="dframe",su=1870,iu=30,Z_=su-iu,eg=25e3,tg=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ys(e),this.stats_=io(n),this.urlFn=a=>(this.appCheckToken&&(a[Ir]=this.appCheckToken),Zc(n,Jc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new j_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tg)),A_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ro((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ol)this.id=l,this.password=a;else if(o===G_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ol]="t",s[nu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[q_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Vc]=so,this.transportSessionId&&(s[jc]=this.transportSessionId),this.lastSessionId&&(s[qc]=this.lastSessionId),this.applicationId&&(s[Yc]=this.applicationId),this.appCheckToken&&(s[Ir]=this.appCheckToken),typeof location<"u"&&location.hostname&&zc.test(location.hostname)&&(s[Gc]=Kc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!O_()&&!D_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ic(n),i=Uc(s,Z_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[X_]="t",s[eu]=e,s[tu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ro{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=N_(),window[K_+this.uniqueCallbackIdentifier]=e,window[z_+this.uniqueCallbackIdentifier]=n,this.myIFrame=ro.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eu]=this.myID,e[tu]=this.myPW,e[nu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iu+s.length<=su;){const o=this.pendingSegs.shift();s=s+"&"+Y_+i+"="+o.seg+"&"+Q_+i+"="+o.ts+"&"+J_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(eg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=16384,sg=45e3;let Ys=null;typeof MozWebSocket<"u"?Ys=MozWebSocket:typeof WebSocket<"u"&&(Ys=WebSocket);class Ue{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ys(this.connId),this.stats_=io(n),this.connURL=Ue.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Vc]=so,typeof location<"u"&&location.hostname&&zc.test(location.hostname)&&(o[Gc]=Kc),n&&(o[jc]=n),s&&(o[qc]=s),i&&(o[Ir]=i),r&&(o[Yc]=r),Zc(e,Qc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gt.set("previous_websocket_failure",!0);try{let s;Xd(),this.mySock=new Ys(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ys!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Gt.isInMemoryStorage||Gt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ss(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Uc(n,ng);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static get ALL_TRANSPORTS(){return[hn,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ue&&Ue.isAvailable();let s=n&&!Ue.previouslyFailed();if(e.webSocketOnly&&(n||Ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ue];else{const i=this.transports_=[];for(const r of os.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}os.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=6e4,rg=5e3,og=10*1024,lg=100*1024,Zi="t",Dl="d",ag="s",Ml="r",cg="e",kl="o",Fl="a",Ll="n",Bl="p",ug="h";class hg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ys("c:"+this.id+":"),this.transportManager_=new os(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>og?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zi in e){const n=e[Zi];n===Fl?this.upgradeIfSecondaryHealthy_():n===Ml?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ll,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mn(Zi,e);if(Dl in e){const s=e[Dl];if(n===ug){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ll){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ag?this.onConnectionShutdown_(s):n===Ml?this.onReset_(s):n===cg?wr("Server Error: "+s):n===kl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),so!==s&&Ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ig))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends ou{static getInstance(){return new Qs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=32,Hl=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new Z("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function At(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function lu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function au(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function cu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Se(t,e){const n=F(t),s=F(e);if(n===null)return e;if(n===s)return Se(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oo(t,e){if(At(t)!==At(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $e(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(At(t)>At(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dg{constructor(e,n){this.errorPrefix_=n,this.parts_=au(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wi(this.parts_[s]);uu(this)}}function pg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wi(e),uu(t)}function _g(t){const e=t.parts_.pop();t.byteLength_-=wi(e),t.parts_.length>0&&(t.byteLength_-=1)}function uu(t){if(t.byteLength_>Hl)throw new Error(t.errorPrefix_+"has a key path longer than "+Hl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wl+") or object contains a cycle "+Vt(t))}function Vt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends ou{static getInstance(){return new lo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=1e3,gg=60*5*1e3,Ul=30*1e3,mg=1.3,yg=3e4,vg="server_kill",$l=3;class dt extends ru{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=dt.nextPersistentConnectionId_++,this.log_=ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kn,this.maxReconnectDelay_=gg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ei,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;dt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ul)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ip(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wr("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yg&&(this.reconnectDelay_=kn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new hg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ae(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(vg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ae(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>no(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$l&&(this.reconnectDelay_=Ul,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$l&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Lc.replace(/\./g,"-")]=1,xc()?e["framework.cordova"]=1:Jd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qs.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Rs;class hu extends Ii{static get __EMPTY_NODE(){return Rs}static set __EMPTY_NODE(e){Rs=e}compare(e,n){return Sn(e.name,n.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Jt,Rs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Rs)}toString(){return".key"}}const mn=new hu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Re.EMPTY_NODE,this.right=r??Re.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class Cg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new As(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new As(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new As(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new As(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new Cg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){return Sn(t.name,e.name)}function ao(t,e){return Sn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr;function Eg(t){Sr=t}const fu=function(t){return typeof t=="number"?"number:"+$c(t):"string:"+t},du=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mt(e,".sv"),"Priority must be a string or number.")}else E(t===Sr||t.isEmpty(),"priority of unexpected type.");E(t===Sr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl;class pe{static set __childrenNodeConstructor(e){Vl=e}static get __childrenNodeConstructor(){return Vl}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),du(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:F(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=F(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||At(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$c(this.value_):e+=this.value_,this.lazyHash_=Wc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu,_u;function wg(t){pu=t}function Ig(t){_u=t}class Sg extends Ii{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Sn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Jt,new pe("[PRIORITY-POST]",_u))}makePost(e,n){const s=pu(e);return new L(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new Sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=Math.log(2);class Ng{constructor(e){const n=r=>parseInt(Math.log(r)/Tg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Js=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const g=parseInt(u/2,10)+a,_=i(a,g),w=i(g+1,c);return h=t[g],d=n?n(h):h,new _e(d,h.node,_e.BLACK,_,w)}},r=function(a){let c=null,u=null,h=t.length;const d=function(_,w){const B=h-_,H=h;h-=_;const Y=i(B+1,H),Q=t[B],R=n?n(Q):Q;g(new _e(R,Q.node,w,null,Y))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<a.count;++_){const w=a.nextBitIsOne(),B=Math.pow(2,a.count-(_+1));w?d(B,_e.BLACK):(d(B,_e.BLACK),d(B,_e.RED))}return u},o=new Ng(t.length),l=r(o);return new Re(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;const rn={};class ft{static get Default(){return E(rn&&le,"ChildrenNode.ts has not been loaded"),er=er||new ft({".priority":rn},{".priority":le}),er}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Js(s,e.getCompare()):l=rn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ft(u,c)}addToIndexes(e,n){const s=Gs(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===rn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Js(l,o.getCompare())}else return rn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new ft(s,this.indexSet_)}removeFromIndexes(e,n){const s=Gs(this.indexes_,i=>{if(i===rn)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new ft(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;class P{static get EMPTY_NODE(){return Fn||(Fn=new P(new Re(ao),null,ft.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&du(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fn:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=F(e);if(s===null)return n;{E(F(e)!==".priority"||At(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fu(this.getPriority().val())+":"),this.forEachChild(le,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vs?-1:0}withIndex(e){if(e===mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(le),i=n.getIterator(le);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xg extends P{constructor(){super(new Re(ao),P.EMPTY_NODE,ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const vs=new xg;Object.defineProperties(L,{MIN:{value:new L(Cn,P.EMPTY_NODE)},MAX:{value:new L(Jt,vs)}});hu.__EMPTY_NODE=P.EMPTY_NODE;pe.__childrenNodeConstructor=P;Eg(vs);Ig(vs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=!0;function ge(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,ge(e))}if(!(t instanceof Array)&&Rg){const n=[];let s=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=Js(n,bg,o=>o.name,ao);if(s){const o=Js(n,le.getCompare());return new P(r,ge(e),new ft({".priority":o},{".priority":le}))}else return new P(r,ge(e),ft.Default)}else{let n=P.EMPTY_NODE;return Pe(t,(s,i)=>{if(mt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}wg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends Ii{constructor(e){super(),this.indexPath_=e,E(!W(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Sn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,vs);return new L(Jt,e)}toString(){return au(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg extends Ii{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Sn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=ge(e);return new L(n,s)}toString(){return".value"}}const Og=new Pg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ls(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function as(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Dg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ls(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(bn(n,s)):o.trackChildChange(as(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(i,r)=>{n.hasChild(i)||s.trackChildChange(ls(i,r))}),n.isLeafNode()||n.forEachChild(le,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(as(i,r,o))}else s.trackChildChange(bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.indexedFilter_=new co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=cs.getStartPost_(e),this.endPost_=cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new L(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(le,(o,l)=>{r.matches(new L(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new L(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(as(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ls(n,h));const w=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(bn(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ls(c.name,c.node)),r.trackChildChange(bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new uo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kg(t){return t.loadsAllData()?new co(t.getIndex()):t.hasLimit()?new Mg(t):new cs(t)}function jl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===Og?n="$value":t.index_===mn?n="$key":(E(t.index_ instanceof Ag,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends ru{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ys("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Xs.getListenId_(e,s),l={};this.listens_[o]=l;const a=jl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),vn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Xs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=jl(e._queryParams),s=e._path.toString(),i=new Ei;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+op(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ss(l.responseText)}catch{Ae("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ae("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){return{value:null,children:new Map}}function mu(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=F(e);t.children.has(s)||t.children.set(s,Zs());const i=t.children.get(s);e=ie(e),mu(i,e,n)}}function Tr(t,e,n){t.value!==null?n(e,t.value):Lg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Tr(i,r,n)})}function Lg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=10*1e3,Wg=30*1e3,Hg=5*60*1e3;class Ug{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bg(e);const s=Kl+(Wg-Kl)*Math.random();qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Pe(e,(i,r)=>{r>0&&mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function yu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ho(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ve.ACK_USER_WRITE,this.source=yu()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new ei(K(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new ei(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new us(this.source,K()):new us(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ve.OVERWRITE}operationForChild(e){return W(this.path)?new Xt(this.source,K(),this.snap.getImmediateChild(e)):new Xt(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ve.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new Xt(this.source,K(),n.value):new hs(this.source,K(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hs(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Dg(o.childName,o.snapshotNode))}),Ln(t,i,"child_removed",e,s,n),Ln(t,i,"child_added",e,s,n),Ln(t,i,"child_moved",r,s,n),Ln(t,i,"child_changed",e,s,n),Ln(t,i,"value",e,s,n),i}function Ln(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Gg(t,l,a)),o.forEach(l=>{const a=jg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function jg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Gg(t,e,n){if(e.childName==null||n.childName==null)throw wn("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){return{eventCache:t,serverCache:e}}function Yn(t,e,n,s){return Si(new Pt(e,n,s),t.serverCache)}function vu(t,e,n,s){return Si(t.eventCache,new Pt(e,n,s))}function ti(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;const Kg=()=>(tr||(tr=new Re(P_)),tr);class re{static fromObject(e){let n=new re(null);return Pe(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=Kg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(W(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=F(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(W(e))return new re(n,this.children);{const s=F(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=F(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=F(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(W(e))return n;{const s=F(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),de(n,i),s):new re(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new re(null))}}function Qn(t,e,n){if(W(e))return new Ge(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Se(i,e);return r=r.updateChild(o,n),new Ge(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Ge(r)}}}function zl(t,e,n){let s=t;return Pe(n,(i,r)=>{s=Qn(s,de(e,i),r)}),s}function ql(t,e){if(W(e))return Ge.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Ge(n)}}function Nr(t,e){return tn(t,e)!=null}function tn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Se(n.path,e)):null}function Yl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function xt(t,e){if(W(e))return t;{const n=tn(t,e);return n!=null?new Ge(new re(n)):new Ge(t.writeTree_.subtree(e))}}function xr(t){return t.writeTree_.isEmpty()}function En(t,e){return Cu(K(),t.writeTree_,e)}function Cu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Cu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){return Iu(e,t)}function zg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Qn(t.visibleWrites,e,n)),t.lastWriteId=s}function qg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Yg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Qg(l,s.path)?i=!1:$e(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Jg(t),!0;if(s.snap)t.visibleWrites=ql(t.visibleWrites,s.path);else{const l=s.children;Pe(l,a=>{t.visibleWrites=ql(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function Qg(t,e){if(t.snap)return $e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$e(de(t.path,n),e))return!0;return!1}function Jg(t){t.visibleWrites=bu(t.allWrites,Xg,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Xg(t){return t.visible}function bu(t,e,n){let s=Ge.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)$e(n,o)?(l=Se(n,o),s=Qn(s,l,r.snap)):$e(o,n)&&(l=Se(o,n),s=Qn(s,K(),r.snap.getChild(l)));else if(r.children){if($e(n,o))l=Se(n,o),s=zl(s,l,r.children);else if($e(o,n))if(l=Se(o,n),W(l))s=zl(s,K(),r.children);else{const a=vn(r.children,F(l));if(a){const c=a.getChild(ie(l));s=Qn(s,K(),c)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function Eu(t,e,n,s,i){if(!s&&!i){const r=tn(t.visibleWrites,e);if(r!=null)return r;{const o=xt(t.visibleWrites,e);if(xr(o))return n;if(n==null&&!Nr(o,K()))return null;{const l=n||P.EMPTY_NODE;return En(o,l)}}}else{const r=xt(t.visibleWrites,e);if(!i&&xr(r))return n;if(!i&&n==null&&!Nr(r,K()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&($e(c.path,e)||$e(e,c.path))},l=bu(t.allWrites,o,e),a=n||P.EMPTY_NODE;return En(l,a)}}}function Zg(t,e,n){let s=P.EMPTY_NODE;const i=tn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xt(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=En(xt(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),Yl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xt(t.visibleWrites,e);return Yl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function em(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(Nr(t.visibleWrites,r))return null;{const o=xt(t.visibleWrites,r);return xr(o)?i.getChild(n):En(o,i.getChild(n))}}function tm(t,e,n,s){const i=de(e,n),r=tn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xt(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function nm(t,e){return tn(t.visibleWrites,e)}function sm(t,e,n,s,i,r,o){let l;const a=xt(t.visibleWrites,e),c=tn(a,K());if(c!=null)l=c;else if(n!=null)l=En(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function im(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function ni(t,e,n,s){return Eu(t.writeTree,t.treePath,e,n,s)}function po(t,e){return Zg(t.writeTree,t.treePath,e)}function Ql(t,e,n,s){return em(t.writeTree,t.treePath,e,n,s)}function si(t,e){return nm(t.writeTree,de(t.treePath,e))}function rm(t,e,n,s,i,r){return sm(t.writeTree,t.treePath,e,n,s,i,r)}function _o(t,e,n){return tm(t.writeTree,t.treePath,e,n)}function wu(t,e){return Iu(de(t.treePath,e),t.writeTree)}function Iu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,as(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ls(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,as(s,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Su=new lm;class go{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _o(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zt(this.viewCache_),r=rm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){return{filter:t}}function cm(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function um(t,e,n,s,i){const r=new om;let o,l;if(n.type===Ve.OVERWRITE){const c=n;c.source.fromUser?o=Rr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=ii(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ve.MERGE){const c=n;c.source.fromUser?o=fm(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ar(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ve.ACK_USER_WRITE){const c=n;c.revert?o=_m(t,e,c.path,s,i,r):o=dm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ve.LISTEN_COMPLETE)o=pm(t,e,n.path,s,r);else throw wn("Unknown operation type: "+n.type);const a=r.getChanges();return hm(e,o,a),{viewCache:o,changes:a}}function hm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ti(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(gu(ti(e)))}}function Tu(t,e,n,s,i,r){const o=e.eventCache;if(si(s,n)!=null)return e;{let l,a;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zt(e),u=c instanceof P?c:P.EMPTY_NODE,h=po(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ni(s,Zt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){E(At(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ql(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ql(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=_o(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Yn(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function ii(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=F(n);if(!a.isCompleteForPath(n)&&At(n)>1)return e;const _=ie(n),B=a.getNode().getImmediateChild(g).updateChild(_,s);g===".priority"?c=u.updatePriority(a.getNode(),B):c=u.updateChild(a.getNode(),g,B,_,Su,null)}const h=vu(e,c,a.isFullyInitialized()||W(n),u.filtersNodes()),d=new go(i,h,r);return Tu(t,h,n,i,d,l)}function Rr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new go(i,e,r);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Yn(e,c,!0,t.filter.filtersNodes());else{const h=F(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Yn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),g=l.getNode().getImmediateChild(h);let _;if(W(d))_=s;else{const w=u.getCompleteChild(h);w!=null?lu(d)===".priority"&&w.getChild(cu(d)).isEmpty()?_=w:_=w.updateChild(d,s):_=P.EMPTY_NODE}if(g.equals(_))a=e;else{const w=t.filter.updateChild(l.getNode(),h,_,d,u,o);a=Yn(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Jl(t,e){return t.eventCache.isCompleteForChild(e)}function fm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);Jl(e,F(u))&&(l=Rr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);Jl(e,F(u))||(l=Rr(t,l,u,c,i,r,o))}),l}function Xl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ar(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;W(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=Xl(t,g,d);a=ii(t,a,new Z(h),_,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),w=Xl(t,_,d);a=ii(t,a,new Z(h),w,i,r,o,l)}}),a}function dm(t,e,n,s,i,r,o){if(si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ii(t,e,n,a.getNode().getChild(n),i,r,l,o);if(W(n)){let c=new re(null);return a.getNode().forEachChild(mn,(u,h)=>{c=c.set(new Z(u),h)}),Ar(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=de(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Ar(t,e,n,c,i,r,l,o)}}function pm(t,e,n,s,i){const r=e.serverCache,o=vu(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return Tu(t,o,n,s,Su,i)}function _m(t,e,n,s,i,r){let o;if(si(s,n)!=null)return e;{const l=new go(s,e,i),a=e.eventCache.getNode();let c;if(W(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ni(s,Zt(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=po(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=F(n);let h=_o(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ni(s,Zt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||si(s,K())!=null,Yn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new co(s.getIndex()),r=kg(s);this.processor_=am(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new Pt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Pt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Si(h,u),this.eventGenerator_=new $g(this.query_)}get query(){return this.query_}}function mm(t){return t.viewCache_.serverCache.getNode()}function ym(t){return ti(t.viewCache_)}function vm(t,e){const n=Zt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Zl(t){return t.eventRegistrations_.length===0}function Cm(t,e){t.eventRegistrations_.push(e)}function ea(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ta(t,e,n,s){e.type===Ve.MERGE&&e.source.queryId!==null&&(E(Zt(t.viewCache_),"We should always have a full cache before handling merges"),E(ti(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=um(t.processor_,i,e,n,s);return cm(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Nu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function bm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(gu(n.getNode())),Nu(t,s,n.getNode(),e)}function Nu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Vg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri;class xu{constructor(){this.views=new Map}}function Em(t){E(!ri,"__referenceConstructor has already been defined"),ri=t}function wm(){return E(ri,"Reference.ts has not been loaded"),ri}function Im(t){return t.views.size===0}function mo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),ta(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ta(o,e,n,s));return r}}function Ru(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ni(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=po(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=Si(new Pt(l,a,!1),new Pt(s,i,!1));return new gm(e,c)}return o}function Sm(t,e,n,s,i,r){const o=Ru(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Cm(o,n),bm(o,n)}function Tm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ea(c,n,s)),Zl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ea(a,n,s)),Zl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ot(t)&&r.push(new(wm())(e._repo,e._path)),{removed:r,events:o}}function Au(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rt(t,e){let n=null;for(const s of t.views.values())n=n||vm(s,e);return n}function Pu(t,e){if(e._queryParams.loadsAllData())return Ni(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ou(t,e){return Pu(t,e)!=null}function Ot(t){return Ni(t)!=null}function Ni(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;function Nm(t){E(!oi,"__referenceConstructor has already been defined"),oi=t}function xm(){return E(oi,"Reference.ts has not been loaded"),oi}let Rm=1;class na{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=im(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Du(t,e,n,s,i){return zg(t.pendingWriteTree_,e,n,s,i),i?bs(t,new Xt(yu(),e,n)):[]}function Kt(t,e,n=!1){const s=qg(t.pendingWriteTree_,e);if(Yg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(K(),!0):Pe(s.children,o=>{r=r.set(new Z(o),!0)}),bs(t,new ei(s.path,r,n))}else return[]}function Cs(t,e,n){return bs(t,new Xt(ho(),e,n))}function Am(t,e,n){const s=re.fromObject(n);return bs(t,new hs(ho(),e,s))}function Pm(t,e){return bs(t,new us(ho(),e))}function Om(t,e,n){const s=vo(t,n);if(s){const i=Co(s),r=i.path,o=i.queryId,l=Se(r,e),a=new us(fo(o),l);return bo(t,r,a)}else return[]}function li(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ou(o,e))){const a=Tm(o,e,n,s);Im(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>Ot(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=km(d);for(let _=0;_<g.length;++_){const w=g[_],B=w.query,H=Lu(t,w);t.listenProvider_.startListening(Jn(B),fs(t,B),H.hashFn,H.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Jn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(xi(d));t.listenProvider_.stopListening(Jn(d),g)}))}Fm(t,c)}return l}function Mu(t,e,n,s){const i=vo(t,s);if(i!=null){const r=Co(i),o=r.path,l=r.queryId,a=Se(o,e),c=new Xt(fo(l),a,n);return bo(t,o,c)}else return[]}function Dm(t,e,n,s){const i=vo(t,s);if(i){const r=Co(i),o=r.path,l=r.queryId,a=Se(o,e),c=re.fromObject(n),u=new hs(fo(l),a,c);return bo(t,o,u)}else return[]}function Pr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const _=Se(d,i);r=r||Rt(g,_),o=o||Ot(g)});let l=t.syncPointTree_.get(i);l?(o=o||Ot(l),r=r||Rt(l,K())):(l=new xu,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const w=Rt(_,K());w&&(r=r.updateImmediateChild(g,w))}));const c=Ou(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=xi(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Lm();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Ti(t.pendingWriteTree_,i);let h=Sm(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Pu(l,e);h=h.concat(Bm(t,e,d))}return h}function yo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Se(o,e),c=Rt(l,a);if(c)return c});return Eu(i,e,r,n,!0)}function Mm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Se(c,n);s=s||Rt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Rt(i,K()):(i=new xu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Pt(s,!0,!1):null,l=Ti(t.pendingWriteTree_,e._path),a=Ru(i,e,l,r?o.getNode():P.EMPTY_NODE,r);return ym(a)}function bs(t,e){return ku(e,t.syncPointTree_,null,Ti(t.pendingWriteTree_,K()))}function ku(t,e,n,s){if(W(t.path))return Fu(t,e,n,s);{const i=e.get(K());n==null&&i!=null&&(n=Rt(i,K()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=wu(s,o);r=r.concat(ku(l,a,c,u))}return i&&(r=r.concat(mo(i,t,s,n))),r}}function Fu(t,e,n,s){const i=e.get(K());n==null&&i!=null&&(n=Rt(i,K()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=wu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Fu(u,l,a,c)))}),i&&(r=r.concat(mo(i,t,s,n))),r}function Lu(t,e){const n=e.query,s=fs(t,n);return{hashFn:()=>(mm(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Om(t,n._path,s):Pm(t,n._path);{const r=M_(i,n);return li(t,n,null,r)}}}}function fs(t,e){const n=xi(e);return t.queryToTagMap.get(n)}function xi(t){return t._path.toString()+"$"+t._queryIdentifier}function vo(t,e){return t.tagToQueryMap.get(e)}function Co(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function bo(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Ti(t.pendingWriteTree_,e);return mo(s,n,i,null)}function km(t){return t.fold((e,n,s)=>{if(n&&Ot(n))return[Ni(n)];{let i=[];return n&&(i=Au(n)),Pe(s,(r,o)=>{i=i.concat(o)}),i}})}function Jn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xm())(t._repo,t._path):t}function Fm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=xi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Lm(){return Rm++}function Bm(t,e,n){const s=e._path,i=fs(t,e),r=Lu(t,n),o=t.listenProvider_.startListening(Jn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!W(c)&&u&&Ot(u))return[Ni(u).query];{let d=[];return u&&(d=d.concat(Au(u).map(g=>g.query))),Pe(h,(g,_)=>{d=d.concat(_)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Jn(u),fs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Eo(n)}node(){return this.node_}}class wo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new wo(this.syncTree_,n)}node(){return yo(this.syncTree_,this.path_)}}const Wm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sa=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Hm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Um(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Hm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Um=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},$m=function(t,e,n,s){return Io(e,new wo(n,t),s)},Bu=function(t,e,n){return Io(t,new Eo(e),n)};function Io(t,e,n){const s=t.getPriority().val(),i=sa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=sa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(le,(l,a)=>{const c=Io(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function To(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=F(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new So(i,s,r),n=ie(n),i=F(n)}return s}function Nn(t){return t.node.value}function Wu(t,e){t.node.value=e,Or(t)}function Hu(t){return t.node.childCount>0}function Vm(t){return Nn(t)===void 0&&!Hu(t)}function Ri(t,e){Pe(t.node.children,(n,s)=>{e(new So(n,t,s))})}function Uu(t,e,n,s){n&&e(t),Ri(t,i=>{Uu(i,e,!0)})}function jm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Es(t){return new Z(t.parent===null?t.name:Es(t.parent)+"/"+t.name)}function Or(t){t.parent!==null&&Gm(t.parent,t.name,t)}function Gm(t,e,n){const s=Vm(n),i=mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Or(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Or(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/[\[\].#$\/\u0000-\u001F\u007F]/,zm=/[\[\].#$\u0000-\u001F\u007F]/,nr=10*1024*1024,$u=function(t){return typeof t=="string"&&t.length!==0&&!Km.test(t)},Vu=function(t){return typeof t=="string"&&t.length!==0&&!zm.test(t)},qm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vu(t)},Ym=function(t,e,n,s){No(eo(t,"value"),e,n)},No=function(t,e,n){const s=n instanceof Z?new dg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Vt(s)+" with contents = "+e.toString());if(Hc(e))throw new Error(t+"contains "+e.toString()+" "+Vt(s));if(typeof e=="string"&&e.length>nr/3&&wi(e)>nr)throw new Error(t+"contains a string greater than "+nr+" utf8 bytes "+Vt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Pe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$u(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pg(s,o),No(t,l,s),_g(s)}),i&&r)throw new Error(t+' contains ".value" child '+Vt(s)+" in addition to actual children.")}},ju=function(t,e,n,s){if(!Vu(n))throw new Error(eo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ju(t,e,n)},Gu=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Jm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$u(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qm(n))throw new Error(eo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!oo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ku(t,e,n){xo(t,n),zu(t,s=>oo(s,e))}function it(t,e,n){xo(t,n),zu(t,s=>$e(s,e)||$e(e,s))}function zu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Zm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Zm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();zn&&be("event: "+n.toString()),Tn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="repo_interrupt",ty=25;class ny{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zs(),this.transactionQueueTree_=new So,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sy(t,e,n){if(t.stats_=io(t.repoInfo_),t.forceRestClient_||B_())t.server_=new Xs(t.repoInfo_,(s,i,r,o)=>{ia(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ra(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dt(t.repoInfo_,e,(s,i,r,o)=>{ia(t,s,i,r,o)},s=>{ra(t,s)},s=>{ry(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=V_(t.repoInfo_,()=>new Ug(t.stats_,t.server_)),t.infoData_=new Fg,t.infoSyncTree_=new na({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Cs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ao(t,"connected",!1),t.serverSyncTree_=new na({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);it(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function iy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ro(t){return Wm({timestamp:iy(t)})}function ia(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Gs(n,c=>ge(c));o=Dm(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=Mu(t.serverSyncTree_,r,a,i)}else if(s){const a=Gs(n,c=>ge(c));o=Am(t.serverSyncTree_,r,a)}else{const a=ge(n);o=Cs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Pi(t,r)),it(t.eventQueue_,l,o)}function ra(t,e){Ao(t,"connected",e),e===!1&&ay(t)}function ry(t,e){Pe(e,(n,s)=>{Ao(t,n,s)})}function Ao(t,e,n){const s=new Z("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=Cs(t.infoSyncTree_,s,i);it(t.eventQueue_,s,r)}function qu(t){return t.nextWriteId_++}function oy(t,e,n){const s=Mm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());Pr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Cs(t.serverSyncTree_,e._path,r);else{const l=fs(t.serverSyncTree_,e);o=Mu(t.serverSyncTree_,e._path,r,l)}return it(t.eventQueue_,e._path,o),li(t.serverSyncTree_,e,n,null,!0),r},i=>(Ai(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function ly(t,e,n,s,i){Ai(t,"set",{path:e.toString(),value:n,priority:s});const r=Ro(t),o=ge(n,s),l=yo(t.serverSyncTree_,e),a=Bu(o,l,r),c=qu(t),u=Du(t.serverSyncTree_,e,a,c,!0);xo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const _=d==="ok";_||Ae("set at "+e+" failed: "+d);const w=Kt(t.serverSyncTree_,c,!_);it(t.eventQueue_,e,w),fy(t,i,d,g)});const h=Zu(t,e);Pi(t,h),it(t.eventQueue_,h,[])}function ay(t){Ai(t,"onDisconnectEvents");const e=Ro(t),n=Zs();Tr(t.onDisconnect_,K(),(i,r)=>{const o=$m(i,r,t.serverSyncTree_,e);mu(n,i,o)});let s=[];Tr(n,K(),(i,r)=>{s=s.concat(Cs(t.serverSyncTree_,i,r));const o=Zu(t,i);Pi(t,o)}),t.onDisconnect_=Zs(),it(t.eventQueue_,K(),s)}function cy(t,e,n){let s;F(e._path)===".info"?s=Pr(t.infoSyncTree_,e,n):s=Pr(t.serverSyncTree_,e,n),Ku(t.eventQueue_,e._path,s)}function uy(t,e,n){let s;F(e._path)===".info"?s=li(t.infoSyncTree_,e,n):s=li(t.serverSyncTree_,e,n),Ku(t.eventQueue_,e._path,s)}function hy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ey)}function Ai(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function fy(t,e,n,s){e&&Tn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Yu(t,e,n){return yo(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Po(t,e=t.transactionQueueTree_){if(e||Oi(t,e),Nn(e)){const n=Ju(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&dy(t,Es(e),n)}else Hu(e)&&Ri(e,n=>{Po(t,n)})}function dy(t,e,n){const s=n.map(c=>c.currentWriteId),i=Yu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Se(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ai(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Kt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Oi(t,To(t.transactionQueueTree_,e)),Po(t,t.transactionQueueTree_),it(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Tn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ae("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Pi(t,e)}},o)}function Pi(t,e){const n=Qu(t,e),s=Es(n),i=Ju(t,n);return py(t,i,s),s}function py(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Se(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Kt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ty)u=!0,h="maxretry",i=i.concat(Kt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Yu(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){No("transaction failed: Data returned ",g,a.path);let _=ge(g);typeof g=="object"&&g!=null&&mt(g,".priority")||(_=_.updatePriority(d.getPriority()));const B=a.currentWriteId,H=Ro(t),Y=Bu(_,d,H);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=Y,a.currentWriteId=qu(t),o.splice(o.indexOf(B),1),i=i.concat(Du(t.serverSyncTree_,a.path,Y,a.currentWriteId,a.applyLocally)),i=i.concat(Kt(t.serverSyncTree_,B,!0))}else u=!0,h="nodata",i=i.concat(Kt(t.serverSyncTree_,a.currentWriteId,!0))}it(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Oi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Tn(s[l]);Po(t,t.transactionQueueTree_)}function Qu(t,e){let n,s=t.transactionQueueTree_;for(n=F(e);n!==null&&Nn(s)===void 0;)s=To(s,n),e=ie(e),n=F(e);return s}function Ju(t,e){const n=[];return Xu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Xu(t,e,n){const s=Nn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ri(e,i=>{Xu(t,i,n)})}function Oi(t,e){const n=Nn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Wu(e,n.length>0?n:void 0)}Ri(e,s=>{Oi(t,s)})}function Zu(t,e){const n=Es(Qu(t,e)),s=To(t.transactionQueueTree_,e);return jm(s,i=>{sr(t,i)}),sr(t,s),Uu(s,i=>{sr(t,i)}),n}function sr(t,e){const n=Nn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Kt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Wu(e,void 0):n.length=r+1,it(t.eventQueue_,Es(e),i);for(let o=0;o<s.length;o++)Tn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ae(`Invalid query segment '${n}' in query '${t}'`)}return e}const oa=function(t,e){const n=my(t),s=n.namespace;n.domain==="firebase.com"&&_t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&_t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},my=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=_y(t.substring(u,h)));const d=gy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class vy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Oo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:lu(this._path)}get ref(){return new yt(this._repo,this._path)}get _queryIdentifier(){const e=Gl(this._queryParams),n=no(e);return n==="{}"?"default":n}get _queryObject(){return Gl(this._queryParams)}isEqual(e){if(e=In(e),!(e instanceof Oo))return!1;const n=this._repo===e._repo,s=oo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fg(this._path)}}class yt extends Oo{constructor(e,n){super(e,n,new uo,!1)}get parent(){const e=cu(this._path);return e===null?null:new yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ds{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=Dr(this.ref,e);return new ds(this._node.getChild(n),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ds(i,Dr(this.ref,s),le)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function on(t,e){return t=In(t),t._checkNotDeleted("ref"),e!==void 0?Dr(t._root,e):t._root}function Dr(t,e){return t=In(t),F(t._path)===null?Qm("child","path",e):ju("child","path",e),new yt(t._repo,de(t._path,e))}function Cy(t){return Gu("remove",t._path),Fs(t,null)}function Fs(t,e){t=In(t),Gu("set",t._path),Ym("set",e,t._path);const n=new Ei;return ly(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function by(t){t=In(t);const e=new eh(()=>{}),n=new Di(e);return oy(t._repo,t,n).then(s=>new ds(s,new yt(t._repo,t._path),t._queryParams.getIndex()))}class Di{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new yy("value",this,new ds(e.snapshotNode,new yt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vy(this,e,n):null}matches(e){return e instanceof Di?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Ey(t,e,n,s,i){const r=new eh(n,void 0),o=new Di(r);return cy(t._repo,t,o),()=>uy(t._repo,t,o)}function wy(t,e,n,s){return Ey(t,"value",e)}Em(yt);Nm(yt);/**
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
 */const Iy="FIREBASE_DATABASE_EMULATOR_HOST",Mr={};let Sy=!1;function Ty(t,e,n,s){t.repoInfo_=new Xc(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Ny(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||_t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oa(r,i),l=o.repoInfo,a;typeof process<"u"&&Nl&&(a=Nl[Iy]),a?(r=`http://${a}?ns=${l.namespace}`,o=oa(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new H_(t.name,t.options,e);Jm("Invalid Firebase Database URL",o),W(o.path)||_t("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ry(l,t,c,new W_(t,n));return new Ay(u,t)}function xy(t,e){const n=Mr[e];(!n||n[t.key]!==t)&&_t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hy(t),delete n[t.key]}function Ry(t,e,n,s){let i=Mr[e.name];i||(i={},Mr[e.name]=i);let r=i[t.toURLString()];return r&&_t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ny(t,Sy,n,s),i[t.toURLString()]=r,r}class Ay{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_t("Cannot call "+e+" on a deleted database.")}}function Py(t=u_(),e){const n=r_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=qd("database");s&&Oy(n,...s)}return n}function Oy(t,e,n,s={}){t=In(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Ks(s,r.repoInfo_.emulatorOptions))return;_t("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&_t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ks(ks.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Yd(s.mockUserToken,t.app.options.projectId);o=new ks(l)}Ty(r,i,s,o)}/**
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
 */function Dy(t){w_(c_),qs(new is("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ny(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_n(xl,Rl,t),_n(xl,Rl,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Dy();var My={apiKey:"AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",authDomain:"iamwaitingforyou-73.firebaseapp.com",databaseURL:"https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwaitingforyou-73",storageBucket:"iamwaitingforyou-73.firebasestorage.app",messagingSenderId:"576527778879",appId:"1:576527778879:web:059f06122df2b01d9a248a",measurementId:"G-62LMJM4Z24"};const ky=Mc(My),ln=Py(ky),Do=Ld("fbStore",{state:()=>({userId:"",userName:"",nickname:"",opponentId:"",opponentName:"",gameId:""}),actions:{async getField(t){const e=on(ln,t);return by(e).then(n=>{if(n.exists()){const s=n.val();return Ht(">>> Данные пользователя:"+s),s}else Ht(t+" : данные не найдены")})},async setField(t,e){const n=on(ln,t);return Fs(n,{text:e}).then(()=>{Ht("Данные успешно записаны!")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async removeField(t){console.log(t);const e=on(ln,t);Cy(e).then(()=>{Ht(`Данные ${t} удалены!`)})},async updateValue(t){const e=on(ln,t);return new Promise(n=>{wy(e,s=>{Ht(`Данные ${t} на прослушке`),console.log(`${t}=`,s.val()),n(s.val())})})},getOpponent(){let t=localStorage.getItem("games");if(t){let e=this.gameId,n=JSON.parse(t);if(!n[e])return null;let s=n[e].findIndex(r=>!r.includes(this.userId)),i=n[e][s].split("::");return{name:i[1],id:i[0]}}else return null},async setReadyToPlay(){this.userName=this.userName||"Аллигатор",this.userId=this.userId||"88776655";const t=on(ln,"readyToPlay/"+this.gameId+"/"+this.userId);Fs(t,{name:this.nickname||this.userName}).then(()=>{Ht("Игрок активировался!")}).catch(e=>{console.error("Ошибка активирования: ",e)})},acceptInvitation(t){this.userName=this.userName||"Аллигатор222",this.userId=this.userId||"112233";let e=this.userId>t.id?this.userId:t.id,n=this.userId<=t.id?this.userId:t.id;const s=on(ln,this.gameId+"/"+e+"::"+n);return new Promise(i=>{Fs(s,{start:[t.id+"::"+t.name,this.userId+"::"+this.userName],ask:this.userId}).then(()=>{Ht("Предложено играть"),i("start")})})}}}),Ht=t=>console.log("%c "+t,"color: green"),Fy={key:0},Ly={key:1},By=["onClick"],Wy={key:2},Hy={key:3},Uy={__name:"SearchOpponent",setup(t){const e=Do(),n=ht(localStorage.getItem("myNickName")),s=ht(1),i=ht([]);let r=!1,o;function l(){e.nickname=n.value,localStorage.setItem("myNickName",n.value)}function a(){e.setReadyToPlay().then(g=>{g&&(s.value=2)})}function c(){e.updateValue("readyToPlay/"+e.gameId).then(g=>{g&&(s.value=2,delete g[e.userId],Object.keys(g).forEach(_=>i.value.push({name:g[_].name,id:_})))})}function u(){e.updateValue(e.gameId).then(g=>{if(console.log("res",g),!g)return c(),!1;if(o=Object.keys(g).find(_=>_.includes(e.userId)),o){console.log("game = ",g[o]);let _=g[o].start.findIndex(w=>w.includes(e.userId));if(_>-1){let w=g[o].start[_===0?1:0].split("::");e.opponentId=w[0],e.opponentName=w[1],console.log("opponent",w),w[0]?s.value=4:s.value=3}}})}function h(g){console.log("game = ",o),g||(e.removeField(e.gameId+"/"+o),s.value=2)}function d(g){if(r)return!1;r=setTimeout(()=>r=!1,3e3),e.acceptInvitation(g).then(_=>{_&&(s.value=3)})}return Qr(()=>{u()}),(g,_)=>(Le(),Ze(He,null,[_[25]||(_[25]=D("hr",null,null,-1)),_[26]||(_[26]=D("i",null,"SearchOpponent",-1)),_[27]||(_[27]=D("hr",null,null,-1)),s.value===1?(Le(),Ze("div",Fy,[D("p",null," Привет, "+lt(jt(e).nickname||jt(e).userName)+" ! ",1),D("p",null,[Qh(D("input",{"onUpdate:modelValue":_[0]||(_[0]=w=>n.value=w),style:{"font-size":"larger",padding:"4px","text-align":"center"},onInput:_[1]||(_[1]=w=>l(n.value)),placeholder:"Сменить nickName"},null,544),[[Sd,n.value]])]),_[7]||(_[7]=D("div",{class:"red-notice"},"* тут можно поменять Никнейм",-1)),D("button",{class:"red-bt",onClick:_[2]||(_[2]=w=>a())}," Искать соперника! "),_[8]||(_[8]=D("br",null,null,-1)),_[9]||(_[9]=D("br",null,null,-1))])):un("",!0),s.value===2?(Le(),Ze("div",Ly,[_[10]||(_[10]=D("h3",null,"Список желающих играть:",-1)),(Le(!0),Ze(He,null,pf(i.value,w=>(Le(),Ze("button",{class:"green-bt",key:w.id,onClick:B=>d(w)},lt(w.name),9,By))),128)),Et(" "+lt(i.value.length?"":" ... тут пока пусто, ждем ...")+" ",1),_[11]||(_[11]=D("br",null,null,-1)),_[12]||(_[12]=D("br",null,null,-1)),D("button",{onClick:_[3]||(_[3]=w=>a()),class:"red-bt"}," Искать нового соперника! ")])):un("",!0),s.value===3?(Le(),Ze("div",Wy,[_[13]||(_[13]=Et(" Вы пригласил играть ")),D("b",null,lt(jt(e).opponentName),1),_[14]||(_[14]=Et(". ")),_[15]||(_[15]=D("br",null,null,-1)),_[16]||(_[16]=Et("Ждем пока примет приглашение ")),_[17]||(_[17]=D("br",null,null,-1)),_[18]||(_[18]=D("br",null,null,-1)),D("button",{onClick:_[4]||(_[4]=w=>a()),class:"red-bt"}," Отказаться от "+lt(jt(e).opponentName)+". Искать нового соперника ",1)])):un("",!0),s.value===4?(Le(),Ze("div",Hy,[_[20]||(_[20]=Et(" Ваше приглашение принял ")),D("b",null,lt(jt(e).opponentName),1),_[21]||(_[21]=D("br",null,null,-1)),_[22]||(_[22]=D("br",null,null,-1)),D("button",{class:"green-bt",onClick:_[5]||(_[5]=w=>h(!1))},"Отказаться"),D("button",{class:"green-bt",onClick:_[6]||(_[6]=w=>h(!0))},"Согласиться"),_[23]||(_[23]=D("br",null,null,-1)),_[24]||(_[24]=D("br",null,null,-1)),D("small",null,[_[19]||(_[19]=Et("Ваш никнейм : ")),D("b",null,lt(n.value),1)])])):un("",!0),_[28]||(_[28]=D("br",null,null,-1)),_[29]||(_[29]=D("br",null,null,-1))],64))}},$y=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Vy={key:0},jy={key:1},Gy={style:{"font-size":"larger"}},Ky={__name:"RockPaperSScissors",setup(t){const e=Do(),n=ht(0);ht("");const s=ht(""),i=ht("");e.gameId="g1";let r=e.getOpponent();return console.log("opponent",r),r?(setTimeout(()=>{n.value=2},100),i.value=r.name,s.value=r.id):setTimeout(()=>{n.value=1},1e3),(o,l)=>(Le(),Ze("div",{class:"game",style:di({background:n.value===2?"orange":n.value===1?"#3c3c3c":""})},[l[6]||(l[6]=D("h1",null,"♕",-1)),l[7]||(l[7]=D("h2",null,null,-1)),n.value===1?(Le(),Ze("div",Vy,[nt(Uy)])):un("",!0),n.value===2?(Le(),Ze("div",jy,[D("p",null,[l[0]||(l[0]=Et(" Против вас играет: ")),l[1]||(l[1]=D("br",null,null,-1)),D("b",Gy,lt(i.value||s.value),1)]),l[2]||(l[2]=D("p",null," Выбери: ",-1)),l[3]||(l[3]=D("p",null,[D("button",null,"камень"),D("button",null,"ножницы"),D("button",null,"бумага")],-1)),l[4]||(l[4]=D("br",null,null,-1)),l[5]||(l[5]=D("p",null,[D("button",null," ИГРАТЬ")],-1))])):un("",!0)],4))}},zy=$y(Ky,[["__scopeId","data-v-fde333e5"]]),qy={__name:"App",setup(t){const e=Do();let n=Fh(zy);return Qr(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.userId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||"",e.userName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"")}),(s,i)=>(Le(),hc(ff(jt(n))))}},Yy=Pd(),th=xd(qy);th.use(Yy);th.mount("#app");
