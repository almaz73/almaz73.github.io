(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Mr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},dn=[],ot=()=>{},uh=()=>!1,ci=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fr=t=>t.startsWith("onUpdate:"),we=Object.assign,Lr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hh=Object.prototype.hasOwnProperty,Q=(t,e)=>hh.call(t,e),F=Array.isArray,pn=t=>ui(t)==="[object Map]",aa=t=>ui(t)==="[object Set]",B=t=>typeof t=="function",ue=t=>typeof t=="string",Lt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",ca=t=>(oe(t)||B(t))&&B(t.then)&&B(t.catch),ua=Object.prototype.toString,ui=t=>ua.call(t),fh=t=>ui(t).slice(8,-1),ha=t=>ui(t)==="[object Object]",Br=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dh=/-(\w)/g,$e=hi(t=>t.replace(dh,(e,n)=>n?n.toUpperCase():"")),ph=/\B([A-Z])/g,sn=hi(t=>t.replace(ph,"-$1").toLowerCase()),fi=hi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mi=hi(t=>t?`on${fi(t)}`:""),Rt=(t,e)=>!Object.is(t,e),ks=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},fa=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ir=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bo;const di=()=>Bo||(Bo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ue(s)?yh(s):Wr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ue(t)||oe(t))return t}const _h=/;(?![^(]*\))/g,gh=/:([^]+)/,mh=/\/\*[^]*?\*\//g;function yh(t){const e={};return t.replace(mh,"").split(_h).forEach(n=>{if(n){const s=n.split(gh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hr(t){let e="";if(ue(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=Hr(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ch=Mr(vh);function da(t){return!!t||t===""}const pa=t=>!!(t&&t.__v_isRef===!0),Ve=t=>ue(t)?t:t==null?"":F(t)||oe(t)&&(t.toString===ua||!B(t.toString))?pa(t)?Ve(t.value):JSON.stringify(t,_a,2):String(t),_a=(t,e)=>pa(e)?_a(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Fi(s,r)+" =>"]=i,n),{})}:aa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fi(n))}:Lt(e)?Fi(e):oe(e)&&!F(e)&&!ha(e)?String(e):e,Fi=(t,e="")=>{var n;return Lt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class ga{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ma(t){return new ga(t)}function ya(){return Te}function bh(t,e=!1){Te&&Te.cleanups.push(t)}let ne;const Li=new WeakSet;class va{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Li.has(this)&&(Li.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ba(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wo(this),Ea(this);const e=ne,n=Qe;ne=this,Qe=!0;try{return this.fn()}finally{wa(this),ne=e,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vr(e);this.deps=this.depsTail=void 0,Wo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Li.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rr(this)&&this.run()}get dirty(){return rr(this)}}let Ca=0,$n,Vn;function ba(t,e=!1){if(t.flags|=8,e){t.next=Vn,Vn=t;return}t.next=$n,$n=t}function Ur(){Ca++}function $r(){if(--Ca>0)return;if(Vn){let e=Vn;for(Vn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$n;){let e=$n;for($n=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ea(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wa(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Vr(s),Eh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function rr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ia(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ia(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ts))return;t.globalVersion=ts;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!rr(t)){t.flags&=-3;return}const n=ne,s=Qe;ne=t,Qe=!0;try{Ea(t);const i=t.fn(t._value);(e.version===0||Rt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,Qe=s,wa(t),t.flags&=-3}}function Vr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Vr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Eh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qe=!0;const Sa=[];function Bt(){Sa.push(Qe),Qe=!1}function Wt(){const t=Sa.pop();Qe=t===void 0?!0:t}function Wo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let ts=0;class wh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Qe||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new wh(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Ta(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,ts++,this.notify(e)}notify(e){Ur();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$r()}}}function Ta(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ta(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Bs=new WeakMap,Qt=Symbol(""),or=Symbol(""),ns=Symbol("");function Ce(t,e,n){if(Qe&&ne){let s=Bs.get(t);s||Bs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new jr),i.map=s,i.key=n),i.track()}}function _t(t,e,n,s,i,r){const o=Bs.get(t);if(!o){ts++;return}const l=a=>{a&&a.trigger()};if(Ur(),e==="clear")o.forEach(l);else{const a=F(t),c=a&&Br(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===ns||!Lt(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(ns)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Qt)),pn(t)&&l(o.get(or)));break;case"delete":a||(l(o.get(Qt)),pn(t)&&l(o.get(or)));break;case"set":pn(t)&&l(o.get(Qt));break}}$r()}function Ih(t,e){const n=Bs.get(t);return n&&n.get(e)}function on(t){const e=q(t);return e===t?e:(Ce(e,"iterate",ns),Ue(t)?e:e.map(be))}function pi(t){return Ce(t=q(t),"iterate",ns),t}const Sh={__proto__:null,[Symbol.iterator](){return Bi(this,Symbol.iterator,be)},concat(...t){return on(this).concat(...t.map(e=>F(e)?on(e):e))},entries(){return Bi(this,"entries",t=>(t[1]=be(t[1]),t))},every(t,e){return ht(this,"every",t,e,void 0,arguments)},filter(t,e){return ht(this,"filter",t,e,n=>n.map(be),arguments)},find(t,e){return ht(this,"find",t,e,be,arguments)},findIndex(t,e){return ht(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ht(this,"findLast",t,e,be,arguments)},findLastIndex(t,e){return ht(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ht(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wi(this,"includes",t)},indexOf(...t){return Wi(this,"indexOf",t)},join(t){return on(this).join(t)},lastIndexOf(...t){return Wi(this,"lastIndexOf",t)},map(t,e){return ht(this,"map",t,e,void 0,arguments)},pop(){return Dn(this,"pop")},push(...t){return Dn(this,"push",t)},reduce(t,...e){return Ho(this,"reduce",t,e)},reduceRight(t,...e){return Ho(this,"reduceRight",t,e)},shift(){return Dn(this,"shift")},some(t,e){return ht(this,"some",t,e,void 0,arguments)},splice(...t){return Dn(this,"splice",t)},toReversed(){return on(this).toReversed()},toSorted(t){return on(this).toSorted(t)},toSpliced(...t){return on(this).toSpliced(...t)},unshift(...t){return Dn(this,"unshift",t)},values(){return Bi(this,"values",be)}};function Bi(t,e,n){const s=pi(t),i=s[e]();return s!==t&&!Ue(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Th=Array.prototype;function ht(t,e,n,s,i,r){const o=pi(t),l=o!==t&&!Ue(t),a=o[e];if(a!==Th[e]){const h=a.apply(t,r);return l?be(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,be(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Ho(t,e,n,s){const i=pi(t);let r=n;return i!==t&&(Ue(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,be(l),a,t)}),i[e](r,...s)}function Wi(t,e,n){const s=q(t);Ce(s,"iterate",ns);const i=s[e](...n);return(i===-1||i===!1)&&zr(n[0])?(n[0]=q(n[0]),s[e](...n)):i}function Dn(t,e,n=[]){Bt(),Ur();const s=q(t)[e].apply(t,n);return $r(),Wt(),s}const Nh=Mr("__proto__,__v_isRef,__isVue"),Na=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lt));function Rh(t){Lt(t)||(t=String(t));const e=q(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Ra{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Bh:Oa:r?Pa:Aa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=F(e);if(!i){let a;if(o&&(a=Sh[n]))return a;if(n==="hasOwnProperty")return Rh}const l=Reflect.get(e,n,ce(e)?e:s);return(Lt(n)?Na.has(n):Nh(n))||(i||Ce(e,"get",n),r)?l:ce(l)?o&&Br(n)?l:l.value:oe(l)?i?Da(l):_i(l):l}}class xa extends Ra{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Xt(r);if(!Ue(s)&&!Xt(s)&&(r=q(r),s=q(s)),!F(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=F(e)&&Br(n)?Number(n)<e.length:Q(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===q(i)&&(o?Rt(s,r)&&_t(e,"set",n,s):_t(e,"add",n,s)),l}deleteProperty(e,n){const s=Q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&_t(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Lt(n)||!Na.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",F(e)?"length":Qt),Reflect.ownKeys(e)}}class xh extends Ra{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ah=new xa,Ph=new xh,Oh=new xa(!0);const lr=t=>t,xs=t=>Reflect.getPrototypeOf(t);function Dh(t,e,n){return function(...s){const i=this.__v_raw,r=q(i),o=pn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?lr:e?ar:be;return!e&&Ce(r,"iterate",a?or:Qt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function As(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kh(t,e){const n={get(i){const r=this.__v_raw,o=q(r),l=q(i);t||(Rt(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:a}=xs(o),c=e?lr:t?ar:be;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(q(i),"iterate",Qt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=q(r),l=q(i);return t||(Rt(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=q(l),c=e?lr:t?ar:be;return!t&&Ce(a,"iterate",Qt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return we(n,t?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(i){!e&&!Ue(i)&&!Xt(i)&&(i=q(i));const r=q(this);return xs(r).has.call(r,i)||(r.add(i),_t(r,"add",i,i)),this},set(i,r){!e&&!Ue(r)&&!Xt(r)&&(r=q(r));const o=q(this),{has:l,get:a}=xs(o);let c=l.call(o,i);c||(i=q(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Rt(r,u)&&_t(o,"set",i,r):_t(o,"add",i,r),this},delete(i){const r=q(this),{has:o,get:l}=xs(r);let a=o.call(r,i);a||(i=q(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&_t(r,"delete",i,void 0),c},clear(){const i=q(this),r=i.size!==0,o=i.clear();return r&&_t(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Dh(i,t,e)}),n}function Gr(t,e){const n=kh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Mh={get:Gr(!1,!1)},Fh={get:Gr(!1,!0)},Lh={get:Gr(!0,!1)};const Aa=new WeakMap,Pa=new WeakMap,Oa=new WeakMap,Bh=new WeakMap;function Wh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hh(t){return t.__v_skip||!Object.isExtensible(t)?0:Wh(fh(t))}function _i(t){return Xt(t)?t:Kr(t,!1,Ah,Mh,Aa)}function Uh(t){return Kr(t,!1,Oh,Fh,Pa)}function Da(t){return Kr(t,!0,Ph,Lh,Oa)}function Kr(t,e,n,s,i){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Hh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function xt(t){return Xt(t)?xt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function Ue(t){return!!(t&&t.__v_isShallow)}function zr(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function qr(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&fa(t,"__v_skip",!0),t}const be=t=>oe(t)?_i(t):t,ar=t=>oe(t)?Da(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function Ke(t){return ka(t,!1)}function $h(t){return ka(t,!0)}function ka(t,e){return ce(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.dep=new jr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ue(e)||Xt(e);e=s?e:q(e),Rt(e,n)&&(this._rawValue=e,this._value=s?e:be(e),this.dep.trigger())}}function We(t){return ce(t)?t.value:t}const jh={get:(t,e,n)=>e==="__v_raw"?t:We(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ma(t){return xt(t)?t:new Proxy(t,jh)}function Gh(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=zh(t,n);return e}class Kh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ih(q(this._object),this._key)}}function zh(t,e,n){const s=t[e];return ce(s)?s:new Kh(t,e,n)}class qh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ts-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return ba(this,!0),!0}get value(){const e=this.dep.track();return Ia(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yh(t,e,n=!1){let s,i;return B(t)?s=t:(s=t.get,i=t.set),new qh(s,i,n)}const Ps={},Ws=new WeakMap;let Gt;function Qh(t,e=!1,n=Gt){if(n){let s=Ws.get(n);s||Ws.set(n,s=[]),s.push(t)}}function Jh(t,e,n=X){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=A=>i?A:Ue(A)||i===!1||i===0?gt(A,1):gt(A);let u,h,d,g,v=!1,x=!1;if(ce(t)?(h=()=>t.value,v=Ue(t)):xt(t)?(h=()=>c(t),v=!0):F(t)?(x=!0,v=t.some(A=>xt(A)||Ue(A)),h=()=>t.map(A=>{if(ce(A))return A.value;if(xt(A))return c(A);if(B(A))return a?a(A,2):A()})):B(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Bt();try{d()}finally{Wt()}}const A=Gt;Gt=u;try{return a?a(t,3,[g]):t(g)}finally{Gt=A}}:h=ot,e&&i){const A=h,j=i===!0?1/0:i;h=()=>gt(A(),j)}const N=ya(),_=()=>{u.stop(),N&&N.active&&Lr(N.effects,u)};if(r&&e){const A=e;e=(...j)=>{A(...j),_()}}let k=x?new Array(t.length).fill(Ps):Ps;const V=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const j=u.run();if(i||v||(x?j.some((ut,ve)=>Rt(ut,k[ve])):Rt(j,k))){d&&d();const ut=Gt;Gt=u;try{const ve=[j,k===Ps?void 0:x&&k[0]===Ps?[]:k,g];a?a(e,3,ve):e(...ve),k=j}finally{Gt=ut}}}else u.run()};return l&&l(V),u=new va(h),u.scheduler=o?()=>o(V,!1):V,g=A=>Qh(A,!1,u),d=u.onStop=()=>{const A=Ws.get(u);if(A){if(a)a(A,4);else for(const j of A)j();Ws.delete(u)}},e?s?V(!0):k=u.run():o?o(V.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function gt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))gt(t.value,e,n);else if(F(t))for(let s=0;s<t.length;s++)gt(t[s],e,n);else if(aa(t)||pn(t))t.forEach(s=>{gt(s,e,n)});else if(ha(t)){for(const s in t)gt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&gt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(t,e,n,s){try{return s?t(...s):t()}catch(i){gi(i,e,n)}}function at(t,e,n,s){if(B(t)){const i=ms(t,e,n,s);return i&&ca(i)&&i.catch(r=>{gi(r,e,n)}),i}if(F(t)){const i=[];for(let r=0;r<t.length;r++)i.push(at(t[r],e,n,s));return i}}function gi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Bt(),ms(r,null,10,[t,a,c]),Wt();return}}Xh(t,n,i,s,o)}function Xh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ne=[];let it=-1;const _n=[];let Tt=null,cn=0;const Fa=Promise.resolve();let Hs=null;function La(t){const e=Hs||Fa;return t?e.then(this?t.bind(this):t):e}function Zh(t){let e=it+1,n=Ne.length;for(;e<n;){const s=e+n>>>1,i=Ne[s],r=ss(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Yr(t){if(!(t.flags&1)){const e=ss(t),n=Ne[Ne.length-1];!n||!(t.flags&2)&&e>=ss(n)?Ne.push(t):Ne.splice(Zh(e),0,t),t.flags|=1,Ba()}}function Ba(){Hs||(Hs=Fa.then(Ha))}function ef(t){F(t)?_n.push(...t):Tt&&t.id===-1?Tt.splice(cn+1,0,t):t.flags&1||(_n.push(t),t.flags|=1),Ba()}function Uo(t,e,n=it+1){for(;n<Ne.length;n++){const s=Ne[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ne.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Wa(t){if(_n.length){const e=[...new Set(_n)].sort((n,s)=>ss(n)-ss(s));if(_n.length=0,Tt){Tt.push(...e);return}for(Tt=e,cn=0;cn<Tt.length;cn++){const n=Tt[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,cn=0}}const ss=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ha(t){try{for(it=0;it<Ne.length;it++){const e=Ne[it];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;it<Ne.length;it++){const e=Ne[it];e&&(e.flags&=-2)}it=-1,Ne.length=0,Wa(),Hs=null,(Ne.length||_n.length)&&Ha()}}let Ae=null,Ua=null;function Us(t){const e=Ae;return Ae=t,Ua=t&&t.type.__scopeId||null,e}function tf(t,e=Ae,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Xo(-1);const r=Us(e);let o;try{o=t(...i)}finally{Us(r),s._d&&Xo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function nf(t,e){if(Ae===null)return t;const n=Ci(Ae),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=X]=e[i];r&&(B(r)&&(r={mounted:r,updated:r}),r.deep&&gt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function $t(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Bt(),at(a,n,8,[t.el,l,t,e]),Wt())}}const sf=Symbol("_vte"),rf=t=>t.__isTeleport;function Qr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function of(t,e){return B(t)?we({name:t.name},e,{setup:t}):t}function $a(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $s(t,e,n,s,i=!1){if(F(t)){t.forEach((v,x)=>$s(v,e&&(F(e)?e[x]:e),n,s,i));return}if(jn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$s(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ci(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===X?l.refs={}:l.refs,h=l.setupState,d=q(h),g=h===X?()=>!1:v=>Q(d,v);if(c!=null&&c!==a&&(ue(c)?(u[c]=null,g(c)&&(h[c]=null)):ce(c)&&(c.value=null)),B(a))ms(a,l,12,[o,u]);else{const v=ue(a),x=ce(a);if(v||x){const N=()=>{if(t.f){const _=v?g(a)?h[a]:u[a]:a.value;i?F(_)&&Lr(_,r):F(_)?_.includes(r)||_.push(r):v?(u[a]=[r],g(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else v?(u[a]=o,g(a)&&(h[a]=o)):x&&(a.value=o,t.k&&(u[t.k]=o))};o?(N.id=-1,Fe(N,n)):N()}}}di().requestIdleCallback;di().cancelIdleCallback;const jn=t=>!!t.type.__asyncLoader,Va=t=>t.type.__isKeepAlive;function lf(t,e){ja(t,"a",e)}function af(t,e){ja(t,"da",e)}function ja(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Va(i.parent.vnode)&&cf(s,e,n,i),i=i.parent}}function cf(t,e,n,s){const i=mi(e,t,s,!0);Ga(()=>{Lr(s[e],i)},n)}function mi(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Bt();const l=ys(n),a=at(e,n,t,o);return l(),Wt(),a});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=ye)=>{(!rs||t==="sp")&&mi(t,(...s)=>e(...s),n)},uf=bt("bm"),Jr=bt("m"),hf=bt("bu"),ff=bt("u"),df=bt("bum"),Ga=bt("um"),pf=bt("sp"),_f=bt("rtg"),gf=bt("rtc");function mf(t,e=ye){mi("ec",t,e)}const yf="components",Ka=Symbol.for("v-ndc");function vf(t){return ue(t)?Cf(yf,t,!1)||t:t||Ka}function Cf(t,e,n=!0,s=!1){const i=Ae||ye;if(i){const r=i.type;{const l=ad(r,!1);if(l&&(l===e||l===$e(e)||l===fi($e(e))))return r}const o=$o(i[t]||r[t],e)||$o(i.appContext[t],e);return!o&&s?r:o}}function $o(t,e){return t&&(t[e]||t[$e(e)]||t[fi($e(e))])}function Vo(t,e,n,s){let i;const r=n,o=F(t);if(o||ue(t)){const l=o&&xt(t);let a=!1;l&&(a=!Ue(t),t=pi(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?be(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const cr=t=>t?_c(t)?Ci(t):cr(t.parent):null,Gn=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cr(t.parent),$root:t=>cr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qa(t),$forceUpdate:t=>t.f||(t.f=()=>{Yr(t.update)}),$nextTick:t=>t.n||(t.n=La.bind(t.proxy)),$watch:t=>Vf.bind(t)}),Hi=(t,e)=>t!==X&&!t.__isScriptSetup&&Q(t,e),bf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Hi(s,e))return o[e]=1,s[e];if(i!==X&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==X&&Q(n,e))return o[e]=4,n[e];ur&&(o[e]=0)}}const u=Gn[e];let h,d;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==X&&Q(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Hi(i,e)?(i[e]=n,!0):s!==X&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==X&&Q(t,o)||Hi(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(Gn,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jo(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ur=!0;function Ef(t){const e=qa(t),n=t.proxy,s=t.ctx;ur=!1,e.beforeCreate&&Go(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:x,deactivated:N,beforeDestroy:_,beforeUnmount:k,destroyed:V,unmounted:A,render:j,renderTracked:ut,renderTriggered:ve,errorCaptured:G,serverPrefetch:z,expose:he,inheritAttrs:Be,components:Xe,directives:It,filters:xn}=e;if(c&&wf(c,s,null),o)for(const $ in o){const ee=o[$];B(ee)&&(s[$]=ee.bind(n))}if(i){const $=i.call(n,n);oe($)&&(t.data=_i($))}if(ur=!0,r)for(const $ in r){const ee=r[$],Ht=B(ee)?ee.bind(n,n):B(ee.get)?ee.get.bind(n,n):ot,Ns=!B(ee)&&B(ee.set)?ee.set.bind(n):ot,Ut=mc({get:Ht,set:Ns});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Ze=>Ut.value=Ze})}if(l)for(const $ in l)za(l[$],s,n,$);if(a){const $=B(a)?a.call(n):a;Reflect.ownKeys($).forEach(ee=>{xf(ee,$[ee])})}u&&Go(u,t,"c");function ae($,ee){F(ee)?ee.forEach(Ht=>$(Ht.bind(n))):ee&&$(ee.bind(n))}if(ae(uf,h),ae(Jr,d),ae(hf,g),ae(ff,v),ae(lf,x),ae(af,N),ae(mf,G),ae(gf,ut),ae(_f,ve),ae(df,k),ae(Ga,A),ae(pf,z),F(he))if(he.length){const $=t.exposed||(t.exposed={});he.forEach(ee=>{Object.defineProperty($,ee,{get:()=>n[ee],set:Ht=>n[ee]=Ht})})}else t.exposed||(t.exposed={});j&&t.render===ot&&(t.render=j),Be!=null&&(t.inheritAttrs=Be),Xe&&(t.components=Xe),It&&(t.directives=It),z&&$a(t)}function wf(t,e,n=ot){F(t)&&(t=hr(t));for(const s in t){const i=t[s];let r;oe(i)?"default"in i?r=Kn(i.from||s,i.default,!0):r=Kn(i.from||s):r=Kn(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Go(t,e,n){at(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function za(t,e,n,s){let i=s.includes(".")?ac(n,s):()=>n[s];if(ue(t)){const r=e[t];B(r)&&zn(i,r)}else if(B(t))zn(i,t.bind(n));else if(oe(t))if(F(t))t.forEach(r=>za(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&zn(i,r,t)}}function qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Vs(a,c,o,!0)),Vs(a,e,o)),oe(e)&&r.set(e,a),a}function Vs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Vs(t,r,n,!0),i&&i.forEach(o=>Vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=If[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const If={data:Ko,props:zo,emits:zo,methods:Hn,computed:Hn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Hn,directives:Hn,watch:Tf,provide:Ko,inject:Sf};function Ko(t,e){return e?t?function(){return we(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Sf(t,e){return Hn(hr(t),hr(e))}function hr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?we(Object.create(null),t,e):e}function zo(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:we(Object.create(null),jo(t),jo(e??{})):e}function Tf(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=Ie(t[s],e[s]);return n}function Ya(){return{app:null,config:{isNativeTag:uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nf=0;function Rf(t,e){return function(s,i=null){B(s)||(s=we({},s)),i!=null&&!oe(i)&&(i=null);const r=Ya(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Nf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ud,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(c,...h)):B(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const g=c._ceVNode||lt(s,i);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(g,u,d),a=!0,c._container=u,u.__vue_app__=c,Ci(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(at(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Jt;Jt=c;try{return u()}finally{Jt=h}}};return c}}let Jt=null;function xf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Kn(t,e,n=!1){const s=ye||Ae;if(s||Jt){const i=Jt?Jt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s&&s.proxy):e}}function Af(){return!!(ye||Ae||Jt)}const Qa={},Ja=()=>Object.create(Qa),Xa=t=>Object.getPrototypeOf(t)===Qa;function Pf(t,e,n,s=!1){const i={},r=Ja();t.propsDefaults=Object.create(null),Za(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Uh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Of(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=q(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(yi(t.emitsOptions,d))continue;const g=e[d];if(a)if(Q(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const v=$e(d);i[v]=fr(a,l,v,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Za(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=sn(h))===h||!Q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=fr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&_t(t.attrs,"set","")}function Za(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Un(a))continue;const c=e[a];let u;i&&Q(i,u=$e(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:yi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=q(n),c=l||X;for(let u=0;u<r.length;u++){const h=r[u];n[h]=fr(i,a,h,c[h],t,!Q(c,h))}}return o}function fr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ys(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===sn(n))&&(s=!0))}return s}const Df=new WeakMap;function ec(t,e,n=!1){const s=n?Df:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!B(t)){const u=h=>{a=!0;const[d,g]=ec(h,e,!0);we(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return oe(t)&&s.set(t,dn),dn;if(F(r))for(let u=0;u<r.length;u++){const h=$e(r[u]);qo(h)&&(o[h]=X)}else if(r)for(const u in r){const h=$e(u);if(qo(h)){const d=r[u],g=o[h]=F(d)||B(d)?{type:d}:we({},d),v=g.type;let x=!1,N=!0;if(F(v))for(let _=0;_<v.length;++_){const k=v[_],V=B(k)&&k.name;if(V==="Boolean"){x=!0;break}else V==="String"&&(N=!1)}else x=B(v)&&v.name==="Boolean";g[0]=x,g[1]=N,(x||Q(g,"default"))&&l.push(h)}}const c=[o,l];return oe(t)&&s.set(t,c),c}function qo(t){return t[0]!=="$"&&!Un(t)}const tc=t=>t[0]==="_"||t==="$stable",Xr=t=>F(t)?t.map(rt):[rt(t)],kf=(t,e,n)=>{if(e._n)return e;const s=tf((...i)=>Xr(e(...i)),n);return s._c=!1,s},nc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(tc(i))continue;const r=t[i];if(B(r))e[i]=kf(i,r,s);else if(r!=null){const o=Xr(r);e[i]=()=>o}}},sc=(t,e)=>{const n=Xr(e);t.slots.default=()=>n},ic=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Mf=(t,e,n)=>{const s=t.slots=Ja();if(t.vnode.shapeFlag&32){const i=e._;i?(ic(s,e,n),n&&fa(s,"_",i,!0)):nc(e,s)}else e&&sc(t,e)},Ff=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=X;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ic(i,e,n):(r=!e.$stable,nc(e,i)),o=e}else e&&(sc(t,e),o={default:1});if(r)for(const l in i)!tc(l)&&o[l]==null&&delete i[l]},Fe=Qf;function Lf(t){return Bf(t)}function Bf(t,e){const n=di();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=ot,insertStaticContent:v}=t,x=(f,p,m,b=null,y=null,C=null,T=void 0,S=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!kn(f,p)&&(b=Rs(f),Ze(f,y,C,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:E,ref:O,shapeFlag:R}=p;switch(E){case vi:N(f,p,m,b);break;case Zt:_(f,p,m,b);break;case $i:f==null&&k(p,m,b,T);break;case He:Xe(f,p,m,b,y,C,T,S,I);break;default:R&1?j(f,p,m,b,y,C,T,S,I):R&6?It(f,p,m,b,y,C,T,S,I):(R&64||R&128)&&E.process(f,p,m,b,y,C,T,S,I,Pn)}O!=null&&y&&$s(O,f&&f.ref,C,p||f,!p)},N=(f,p,m,b)=>{if(f==null)s(p.el=l(p.children),m,b);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},_=(f,p,m,b)=>{f==null?s(p.el=a(p.children||""),m,b):p.el=f.el},k=(f,p,m,b)=>{[f.el,f.anchor]=v(f.children,p,m,b,f.el,f.anchor)},V=({el:f,anchor:p},m,b)=>{let y;for(;f&&f!==p;)y=d(f),s(f,m,b),f=y;s(p,m,b)},A=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),i(f),f=m;i(p)},j=(f,p,m,b,y,C,T,S,I)=>{p.type==="svg"?T="svg":p.type==="math"&&(T="mathml"),f==null?ut(p,m,b,y,C,T,S,I):z(f,p,y,C,T,S,I)},ut=(f,p,m,b,y,C,T,S)=>{let I,E;const{props:O,shapeFlag:R,transition:P,dirs:M}=f;if(I=f.el=o(f.type,C,O&&O.is,O),R&8?u(I,f.children):R&16&&G(f.children,I,null,b,y,Ui(f,C),T,S),M&&$t(f,null,b,"created"),ve(I,f,f.scopeId,T,b),O){for(const te in O)te!=="value"&&!Un(te)&&r(I,te,null,O[te],C,b);"value"in O&&r(I,"value",null,O.value,C),(E=O.onVnodeBeforeMount)&&st(E,b,f)}M&&$t(f,null,b,"beforeMount");const K=Wf(y,P);K&&P.beforeEnter(I),s(I,p,m),((E=O&&O.onVnodeMounted)||K||M)&&Fe(()=>{E&&st(E,b,f),K&&P.enter(I),M&&$t(f,null,b,"mounted")},y)},ve=(f,p,m,b,y)=>{if(m&&g(f,m),b)for(let C=0;C<b.length;C++)g(f,b[C]);if(y){let C=y.subTree;if(p===C||uc(C.type)&&(C.ssContent===p||C.ssFallback===p)){const T=y.vnode;ve(f,T,T.scopeId,T.slotScopeIds,y.parent)}}},G=(f,p,m,b,y,C,T,S,I=0)=>{for(let E=I;E<f.length;E++){const O=f[E]=S?Nt(f[E]):rt(f[E]);x(null,O,p,m,b,y,C,T,S)}},z=(f,p,m,b,y,C,T)=>{const S=p.el=f.el;let{patchFlag:I,dynamicChildren:E,dirs:O}=p;I|=f.patchFlag&16;const R=f.props||X,P=p.props||X;let M;if(m&&Vt(m,!1),(M=P.onVnodeBeforeUpdate)&&st(M,m,p,f),O&&$t(p,f,m,"beforeUpdate"),m&&Vt(m,!0),(R.innerHTML&&P.innerHTML==null||R.textContent&&P.textContent==null)&&u(S,""),E?he(f.dynamicChildren,E,S,m,b,Ui(p,y),C):T||ee(f,p,S,null,m,b,Ui(p,y),C,!1),I>0){if(I&16)Be(S,R,P,m,y);else if(I&2&&R.class!==P.class&&r(S,"class",null,P.class,y),I&4&&r(S,"style",R.style,P.style,y),I&8){const K=p.dynamicProps;for(let te=0;te<K.length;te++){const J=K[te],ke=R[J],xe=P[J];(xe!==ke||J==="value")&&r(S,J,ke,xe,y,m)}}I&1&&f.children!==p.children&&u(S,p.children)}else!T&&E==null&&Be(S,R,P,m,y);((M=P.onVnodeUpdated)||O)&&Fe(()=>{M&&st(M,m,p,f),O&&$t(p,f,m,"updated")},b)},he=(f,p,m,b,y,C,T)=>{for(let S=0;S<p.length;S++){const I=f[S],E=p[S],O=I.el&&(I.type===He||!kn(I,E)||I.shapeFlag&70)?h(I.el):m;x(I,E,O,null,b,y,C,T,!0)}},Be=(f,p,m,b,y)=>{if(p!==m){if(p!==X)for(const C in p)!Un(C)&&!(C in m)&&r(f,C,p[C],null,y,b);for(const C in m){if(Un(C))continue;const T=m[C],S=p[C];T!==S&&C!=="value"&&r(f,C,S,T,y,b)}"value"in m&&r(f,"value",p.value,m.value,y)}},Xe=(f,p,m,b,y,C,T,S,I)=>{const E=p.el=f?f.el:l(""),O=p.anchor=f?f.anchor:l("");let{patchFlag:R,dynamicChildren:P,slotScopeIds:M}=p;M&&(S=S?S.concat(M):M),f==null?(s(E,m,b),s(O,m,b),G(p.children||[],m,O,y,C,T,S,I)):R>0&&R&64&&P&&f.dynamicChildren?(he(f.dynamicChildren,P,m,y,C,T,S),(p.key!=null||y&&p===y.subTree)&&rc(f,p,!0)):ee(f,p,m,O,y,C,T,S,I)},It=(f,p,m,b,y,C,T,S,I)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?y.ctx.activate(p,m,b,T,I):xn(p,m,b,y,C,T,I):Ts(f,p,I)},xn=(f,p,m,b,y,C,T)=>{const S=f.component=sd(f,b,y);if(Va(f)&&(S.ctx.renderer=Pn),id(S,!1,T),S.asyncDep){if(y&&y.registerDep(S,ae,T),!f.el){const I=S.subTree=lt(Zt);_(null,I,p,m)}}else ae(S,f,p,m,y,C,T)},Ts=(f,p,m)=>{const b=p.component=f.component;if(qf(f,p,m))if(b.asyncDep&&!b.asyncResolved){$(b,p,m);return}else b.next=p,b.update();else p.el=f.el,b.vnode=p},ae=(f,p,m,b,y,C,T)=>{const S=()=>{if(f.isMounted){let{next:R,bu:P,u:M,parent:K,vnode:te}=f;{const tt=oc(f);if(tt){R&&(R.el=te.el,$(f,R,T)),tt.asyncDep.then(()=>{f.isUnmounted||S()});return}}let J=R,ke;Vt(f,!1),R?(R.el=te.el,$(f,R,T)):R=te,P&&ks(P),(ke=R.props&&R.props.onVnodeBeforeUpdate)&&st(ke,K,R,te),Vt(f,!0);const xe=Qo(f),et=f.subTree;f.subTree=xe,x(et,xe,h(et.el),Rs(et),f,y,C),R.el=xe.el,J===null&&Yf(f,xe.el),M&&Fe(M,y),(ke=R.props&&R.props.onVnodeUpdated)&&Fe(()=>st(ke,K,R,te),y)}else{let R;const{el:P,props:M}=p,{bm:K,m:te,parent:J,root:ke,type:xe}=f,et=jn(p);Vt(f,!1),K&&ks(K),!et&&(R=M&&M.onVnodeBeforeMount)&&st(R,J,p),Vt(f,!0);{ke.ce&&ke.ce._injectChildStyle(xe);const tt=f.subTree=Qo(f);x(null,tt,m,b,f,y,C),p.el=tt.el}if(te&&Fe(te,y),!et&&(R=M&&M.onVnodeMounted)){const tt=p;Fe(()=>st(R,J,tt),y)}(p.shapeFlag&256||J&&jn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&Fe(f.a,y),f.isMounted=!0,p=m=b=null}};f.scope.on();const I=f.effect=new va(S);f.scope.off();const E=f.update=I.run.bind(I),O=f.job=I.runIfDirty.bind(I);O.i=f,O.id=f.uid,I.scheduler=()=>Yr(O),Vt(f,!0),E()},$=(f,p,m)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,Of(f,p.props,b,m),Ff(f,p.children,m),Bt(),Uo(f),Wt()},ee=(f,p,m,b,y,C,T,S,I=!1)=>{const E=f&&f.children,O=f?f.shapeFlag:0,R=p.children,{patchFlag:P,shapeFlag:M}=p;if(P>0){if(P&128){Ns(E,R,m,b,y,C,T,S,I);return}else if(P&256){Ht(E,R,m,b,y,C,T,S,I);return}}M&8?(O&16&&An(E,y,C),R!==E&&u(m,R)):O&16?M&16?Ns(E,R,m,b,y,C,T,S,I):An(E,y,C,!0):(O&8&&u(m,""),M&16&&G(R,m,b,y,C,T,S,I))},Ht=(f,p,m,b,y,C,T,S,I)=>{f=f||dn,p=p||dn;const E=f.length,O=p.length,R=Math.min(E,O);let P;for(P=0;P<R;P++){const M=p[P]=I?Nt(p[P]):rt(p[P]);x(f[P],M,m,null,y,C,T,S,I)}E>O?An(f,y,C,!0,!1,R):G(p,m,b,y,C,T,S,I,R)},Ns=(f,p,m,b,y,C,T,S,I)=>{let E=0;const O=p.length;let R=f.length-1,P=O-1;for(;E<=R&&E<=P;){const M=f[E],K=p[E]=I?Nt(p[E]):rt(p[E]);if(kn(M,K))x(M,K,m,null,y,C,T,S,I);else break;E++}for(;E<=R&&E<=P;){const M=f[R],K=p[P]=I?Nt(p[P]):rt(p[P]);if(kn(M,K))x(M,K,m,null,y,C,T,S,I);else break;R--,P--}if(E>R){if(E<=P){const M=P+1,K=M<O?p[M].el:b;for(;E<=P;)x(null,p[E]=I?Nt(p[E]):rt(p[E]),m,K,y,C,T,S,I),E++}}else if(E>P)for(;E<=R;)Ze(f[E],y,C,!0),E++;else{const M=E,K=E,te=new Map;for(E=K;E<=P;E++){const Me=p[E]=I?Nt(p[E]):rt(p[E]);Me.key!=null&&te.set(Me.key,E)}let J,ke=0;const xe=P-K+1;let et=!1,tt=0;const On=new Array(xe);for(E=0;E<xe;E++)On[E]=0;for(E=M;E<=R;E++){const Me=f[E];if(ke>=xe){Ze(Me,y,C,!0);continue}let nt;if(Me.key!=null)nt=te.get(Me.key);else for(J=K;J<=P;J++)if(On[J-K]===0&&kn(Me,p[J])){nt=J;break}nt===void 0?Ze(Me,y,C,!0):(On[nt-K]=E+1,nt>=tt?tt=nt:et=!0,x(Me,p[nt],m,null,y,C,T,S,I),ke++)}const Fo=et?Hf(On):dn;for(J=Fo.length-1,E=xe-1;E>=0;E--){const Me=K+E,nt=p[Me],Lo=Me+1<O?p[Me+1].el:b;On[E]===0?x(null,nt,m,Lo,y,C,T,S,I):et&&(J<0||E!==Fo[J]?Ut(nt,m,Lo,2):J--)}}},Ut=(f,p,m,b,y=null)=>{const{el:C,type:T,transition:S,children:I,shapeFlag:E}=f;if(E&6){Ut(f.component.subTree,p,m,b);return}if(E&128){f.suspense.move(p,m,b);return}if(E&64){T.move(f,p,m,Pn);return}if(T===He){s(C,p,m);for(let R=0;R<I.length;R++)Ut(I[R],p,m,b);s(f.anchor,p,m);return}if(T===$i){V(f,p,m);return}if(b!==2&&E&1&&S)if(b===0)S.beforeEnter(C),s(C,p,m),Fe(()=>S.enter(C),y);else{const{leave:R,delayLeave:P,afterLeave:M}=S,K=()=>s(C,p,m),te=()=>{R(C,()=>{K(),M&&M()})};P?P(C,K,te):te()}else s(C,p,m)},Ze=(f,p,m,b=!1,y=!1)=>{const{type:C,props:T,ref:S,children:I,dynamicChildren:E,shapeFlag:O,patchFlag:R,dirs:P,cacheIndex:M}=f;if(R===-2&&(y=!1),S!=null&&$s(S,null,m,f,!0),M!=null&&(p.renderCache[M]=void 0),O&256){p.ctx.deactivate(f);return}const K=O&1&&P,te=!jn(f);let J;if(te&&(J=T&&T.onVnodeBeforeUnmount)&&st(J,p,f),O&6)ch(f.component,m,b);else{if(O&128){f.suspense.unmount(m,b);return}K&&$t(f,null,p,"beforeUnmount"),O&64?f.type.remove(f,p,m,Pn,b):E&&!E.hasOnce&&(C!==He||R>0&&R&64)?An(E,p,m,!1,!0):(C===He&&R&384||!y&&O&16)&&An(I,p,m),b&&ko(f)}(te&&(J=T&&T.onVnodeUnmounted)||K)&&Fe(()=>{J&&st(J,p,f),K&&$t(f,null,p,"unmounted")},m)},ko=f=>{const{type:p,el:m,anchor:b,transition:y}=f;if(p===He){ah(m,b);return}if(p===$i){A(f);return}const C=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:S}=y,I=()=>T(m,C);S?S(f.el,C,I):I()}else C()},ah=(f,p)=>{let m;for(;f!==p;)m=d(f),i(f),f=m;i(p)},ch=(f,p,m)=>{const{bum:b,scope:y,job:C,subTree:T,um:S,m:I,a:E}=f;Yo(I),Yo(E),b&&ks(b),y.stop(),C&&(C.flags|=8,Ze(T,f,p,m)),S&&Fe(S,p),Fe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},An=(f,p,m,b=!1,y=!1,C=0)=>{for(let T=C;T<f.length;T++)Ze(f[T],p,m,b,y)},Rs=f=>{if(f.shapeFlag&6)return Rs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),m=p&&p[sf];return m?d(m):p};let ki=!1;const Mo=(f,p,m)=>{f==null?p._vnode&&Ze(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,m),p._vnode=f,ki||(ki=!0,Uo(),Wa(),ki=!1)},Pn={p:x,um:Ze,m:Ut,r:ko,mt:xn,mc:G,pc:ee,pbc:he,n:Rs,o:t};return{render:Mo,hydrate:void 0,createApp:Rf(Mo)}}function Ui({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Wf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rc(t,e,n=!1){const s=t.children,i=e.children;if(F(s)&&F(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Nt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&rc(o,l)),l.type===vi&&(l.el=o.el)}}function Hf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function oc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:oc(e)}function Yo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uf=Symbol.for("v-scx"),$f=()=>Kn(Uf);function zn(t,e,n){return lc(t,e,n)}function lc(t,e,n=X){const{immediate:s,deep:i,flush:r,once:o}=n,l=we({},n),a=e&&s||!e&&r!=="post";let c;if(rs){if(r==="sync"){const g=$f();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=ot,g.resume=ot,g.pause=ot,g}}const u=ye;l.call=(g,v,x)=>at(g,u,v,x);let h=!1;r==="post"?l.scheduler=g=>{Fe(g,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(g,v)=>{v?g():Yr(g)}),l.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=Jh(t,e,l);return rs&&(c?c.push(d):a&&d()),d}function Vf(t,e,n){const s=this.proxy,i=ue(t)?t.includes(".")?ac(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=ys(this),l=lc(i,r.bind(s),n);return o(),l}function ac(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const jf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$e(e)}Modifiers`]||t[`${sn(e)}Modifiers`];function Gf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let i=n;const r=e.startsWith("update:"),o=r&&jf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ue(u)?u.trim():u)),o.number&&(i=n.map(ir)));let l,a=s[l=Mi(e)]||s[l=Mi($e(e))];!a&&r&&(a=s[l=Mi(sn(e))]),a&&at(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,at(c,t,6,i)}}function cc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!B(t)){const a=c=>{const u=cc(c,e,!0);u&&(l=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(oe(t)&&s.set(t,null),null):(F(r)?r.forEach(a=>o[a]=null):we(o,r),oe(t)&&s.set(t,o),o)}function yi(t,e){return!t||!ci(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,sn(e))||Q(t,e))}function Qo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:g,ctx:v,inheritAttrs:x}=t,N=Us(t);let _,k;try{if(n.shapeFlag&4){const A=i||s,j=A;_=rt(c.call(j,A,u,h,g,d,v)),k=l}else{const A=e;_=rt(A.length>1?A(h,{attrs:l,slots:o,emit:a}):A(h,null)),k=e.props?l:Kf(l)}}catch(A){qn.length=0,gi(A,t,1),_=lt(Zt)}let V=_;if(k&&x!==!1){const A=Object.keys(k),{shapeFlag:j}=V;A.length&&j&7&&(r&&A.some(Fr)&&(k=zf(k,r)),V=vn(V,k,!1,!0))}return n.dirs&&(V=vn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Qr(V,n.transition),_=V,Us(N),_}const Kf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ci(n))&&((e||(e={}))[n]=t[n]);return e},zf=(t,e)=>{const n={};for(const s in t)(!Fr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Jo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!yi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Jo(s,o,c):!0:!!o;return!1}function Jo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!yi(n,r))return!0}return!1}function Yf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const uc=t=>t.__isSuspense;function Qf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):ef(t)}const He=Symbol.for("v-fgt"),vi=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),$i=Symbol.for("v-stc"),qn=[];let Le=null;function me(t=!1){qn.push(Le=t?null:[])}function Jf(){qn.pop(),Le=qn[qn.length-1]||null}let is=1;function Xo(t,e=!1){is+=t,t<0&&Le&&e&&(Le.hasOnce=!0)}function hc(t){return t.dynamicChildren=is>0?Le||dn:null,Jf(),is>0&&Le&&Le.push(t),t}function Se(t,e,n,s,i,r){return hc(L(t,e,n,s,i,r,!0))}function fc(t,e,n,s,i){return hc(lt(t,e,n,s,i,!0))}function dc(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const pc=({key:t})=>t??null,Ms=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ce(t)||B(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,s=0,i=null,r=t===He?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pc(e),ref:e&&Ms(e),scopeId:Ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ae};return l?(Zr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),is>0&&!o&&Le&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Le.push(a),a}const lt=Xf;function Xf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ka)&&(t=Zt),dc(t)){const l=vn(t,e,!0);return n&&Zr(l,n),is>0&&!r&&Le&&(l.shapeFlag&6?Le[Le.indexOf(t)]=l:Le.push(l)),l.patchFlag=-2,l}if(cd(t)&&(t=t.__vccOpts),e){e=Zf(e);let{class:l,style:a}=e;l&&!ue(l)&&(e.class=Hr(l)),oe(a)&&(zr(a)&&!F(a)&&(a=we({},a)),e.style=Wr(a))}const o=ue(t)?1:uc(t)?128:rf(t)?64:oe(t)?4:B(t)?2:0;return L(t,e,n,s,i,o,r,!0)}function Zf(t){return t?zr(t)||Xa(t)?we({},t):t:null}function vn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?ed(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&pc(c),ref:e&&e.ref?n&&r?F(r)?r.concat(Ms(e)):[r,Ms(e)]:Ms(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Qr(u,a.clone(u)),u}function ft(t=" ",e=0){return lt(vi,null,t,e)}function dt(t="",e=!1){return e?(me(),fc(Zt,null,t)):lt(Zt,null,t)}function rt(t){return t==null||typeof t=="boolean"?lt(Zt):F(t)?lt(He,null,t.slice()):dc(t)?Nt(t):lt(vi,null,String(t))}function Nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function Zr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Zr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Xa(e)?e._ctx=Ae:i===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),s&64?(n=16,e=[ft(e)]):n=8);t.children=e,t.shapeFlag|=n}function ed(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Hr([e.class,s.class]));else if(i==="style")e.style=Wr([e.style,s.style]);else if(ci(i)){const r=e[i],o=s[i];o&&r!==o&&!(F(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){at(t,e,7,[n,s])}const td=Ya();let nd=0;function sd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||td,r={uid:nd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ga(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ec(s,i),emitsOptions:cc(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Gf.bind(null,r),t.ce&&t.ce(r),r}let ye=null,js,dr;{const t=di(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};js=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),dr=e("__VUE_SSR_SETTERS__",n=>rs=n)}const ys=t=>{const e=ye;return js(t),t.scope.on(),()=>{t.scope.off(),js(e)}},Zo=()=>{ye&&ye.scope.off(),js(null)};function _c(t){return t.vnode.shapeFlag&4}let rs=!1;function id(t,e=!1,n=!1){e&&dr(e);const{props:s,children:i}=t.vnode,r=_c(t);Pf(t,s,r,e),Mf(t,i,n);const o=r?rd(t,e):void 0;return e&&dr(!1),o}function rd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bf);const{setup:s}=n;if(s){Bt();const i=t.setupContext=s.length>1?ld(t):null,r=ys(t),o=ms(s,t,0,[t.props,i]),l=ca(o);if(Wt(),r(),(l||t.sp)&&!jn(t)&&$a(t),l){if(o.then(Zo,Zo),e)return o.then(a=>{el(t,a)}).catch(a=>{gi(a,t,0)});t.asyncDep=o}else el(t,o)}else gc(t)}function el(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Ma(e)),gc(t)}function gc(t,e,n){const s=t.type;t.render||(t.render=s.render||ot);{const i=ys(t);Bt();try{Ef(t)}finally{Wt(),i()}}}const od={get(t,e){return Ce(t,"get",""),t[e]}};function ld(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,od),slots:t.slots,emit:t.emit,expose:e}}function Ci(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ma(qr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function ad(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function cd(t){return B(t)&&"__vccOpts"in t}const mc=(t,e)=>Yh(t,e,rs),ud="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pr;const tl=typeof window<"u"&&window.trustedTypes;if(tl)try{pr=tl.createPolicy("vue",{createHTML:t=>t})}catch{}const yc=pr?t=>pr.createHTML(t):t=>t,hd="http://www.w3.org/2000/svg",fd="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,nl=pt&&pt.createElement("template"),dd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?pt.createElementNS(hd,t):e==="mathml"?pt.createElementNS(fd,t):n?pt.createElement(t,{is:n}):pt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{nl.innerHTML=yc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=nl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pd=Symbol("_vtc");function _d(t,e,n){const s=t[pd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sl=Symbol("_vod"),gd=Symbol("_vsh"),md=Symbol(""),yd=/(^|;)\s*display\s*:/;function vd(t,e,n){const s=t.style,i=ue(n);let r=!1;if(n&&!i){if(e)if(ue(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Fs(s,l,"")}else for(const o in e)n[o]==null&&Fs(s,o,"");for(const o in n)o==="display"&&(r=!0),Fs(s,o,n[o])}else if(i){if(e!==n){const o=s[md];o&&(n+=";"+o),s.cssText=n,r=yd.test(n)}}else e&&t.removeAttribute("style");sl in t&&(t[sl]=r?s.display:"",t[gd]&&(s.display="none"))}const il=/\s*!important$/;function Fs(t,e,n){if(F(n))n.forEach(s=>Fs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Cd(t,e);il.test(n)?t.setProperty(sn(s),n.replace(il,""),"important"):t[s]=n}}const rl=["Webkit","Moz","ms"],Vi={};function Cd(t,e){const n=Vi[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return Vi[e]=s;s=fi(s);for(let i=0;i<rl.length;i++){const r=rl[i]+s;if(r in t)return Vi[e]=r}return e}const ol="http://www.w3.org/1999/xlink";function ll(t,e,n,s,i,r=Ch(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ol,e.slice(6,e.length)):t.setAttributeNS(ol,e,n):n==null||r&&!da(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Lt(n)?String(n):n)}function al(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=da(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function bd(t,e,n,s){t.removeEventListener(e,n,s)}const cl=Symbol("_vei");function Ed(t,e,n,s,i=null){const r=t[cl]||(t[cl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=wd(e);if(s){const c=r[e]=Td(s,i);un(t,l,c,a)}else o&&(bd(t,l,o,a),r[e]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function wd(t){let e;if(ul.test(t)){e={};let s;for(;s=t.match(ul);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let ji=0;const Id=Promise.resolve(),Sd=()=>ji||(Id.then(()=>ji=0),ji=Date.now());function Td(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;at(Nd(s,n.value),e,5,[s])};return n.value=t,n.attached=Sd(),n}function Nd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?_d(t,s,o):e==="style"?vd(t,n,s):ci(e)?Fr(e)||Ed(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xd(t,e,s,o))?(al(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ll(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue(s))?al(t,$e(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ll(t,e,s,o))};function xd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&hl(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return hl(e)&&ue(n)?!1:e in t}const fl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>ks(e,n):e};function Ad(t){t.target.composing=!0}function dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gi=Symbol("_assign"),Pd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Gi]=fl(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ir(l)),t[Gi](l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",Ad),un(t,"compositionend",dl),un(t,"change",dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Gi]=fl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?ir(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Od=we({patchProp:Rd},dd);let pl;function Dd(){return pl||(pl=Lf(Od))}const kd=(...t)=>{const e=Dd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Fd(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Md(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Md(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fd(t){return ue(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vc;const bi=t=>vc=t,Cc=Symbol();function _r(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yn||(Yn={}));function Ld(){const t=ma(!0),e=t.run(()=>Ke({}));let n=[],s=[];const i=qr({install(r){bi(i),i._a=r,r.provide(Cc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const bc=()=>{};function _l(t,e,n,s=bc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ya()&&bh(i),i}function ln(t,...e){t.slice().forEach(n=>{n(...e)})}const Bd=t=>t(),gl=Symbol(),Ki=Symbol();function gr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];_r(i)&&_r(s)&&t.hasOwnProperty(n)&&!ce(s)&&!xt(s)?t[n]=gr(i,s):t[n]=s}return t}const Wd=Symbol();function Hd(t){return!_r(t)||!t.hasOwnProperty(Wd)}const{assign:St}=Object;function Ud(t){return!!(ce(t)&&t.effect)}function $d(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Gh(n.state.value[t]);return St(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=qr(mc(()=>{bi(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return a=Ec(t,c,e,n,s,!0),a}function Ec(t,e,n={},s,i,r){let o;const l=St({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],g;const v=s.state.value[t];!r&&!v&&(s.state.value[t]={}),Ke({});let x;function N(G){let z;c=u=!1,typeof G=="function"?(G(s.state.value[t]),z={type:Yn.patchFunction,storeId:t,events:g}):(gr(s.state.value[t],G),z={type:Yn.patchObject,payload:G,storeId:t,events:g});const he=x=Symbol();La().then(()=>{x===he&&(c=!0)}),u=!0,ln(h,z,s.state.value[t])}const _=r?function(){const{state:z}=n,he=z?z():{};this.$patch(Be=>{St(Be,he)})}:bc;function k(){o.stop(),h=[],d=[],s._s.delete(t)}const V=(G,z="")=>{if(gl in G)return G[Ki]=z,G;const he=function(){bi(s);const Be=Array.from(arguments),Xe=[],It=[];function xn($){Xe.push($)}function Ts($){It.push($)}ln(d,{args:Be,name:he[Ki],store:j,after:xn,onError:Ts});let ae;try{ae=G.apply(this&&this.$id===t?this:j,Be)}catch($){throw ln(It,$),$}return ae instanceof Promise?ae.then($=>(ln(Xe,$),$)).catch($=>(ln(It,$),Promise.reject($))):(ln(Xe,ae),ae)};return he[gl]=!0,he[Ki]=z,he},A={_p:s,$id:t,$onAction:_l.bind(null,d),$patch:N,$reset:_,$subscribe(G,z={}){const he=_l(h,G,z.detached,()=>Be()),Be=o.run(()=>zn(()=>s.state.value[t],Xe=>{(z.flush==="sync"?u:c)&&G({storeId:t,type:Yn.direct,events:g},Xe)},St({},a,z)));return he},$dispose:k},j=_i(A);s._s.set(t,j);const ve=(s._a&&s._a.runWithContext||Bd)(()=>s._e.run(()=>(o=ma()).run(()=>e({action:V}))));for(const G in ve){const z=ve[G];if(ce(z)&&!Ud(z)||xt(z))r||(v&&Hd(z)&&(ce(z)?z.value=v[G]:gr(z,v[G])),s.state.value[t][G]=z);else if(typeof z=="function"){const he=V(z,G);ve[G]=he,l.actions[G]=z}}return St(j,ve),St(q(j),ve),Object.defineProperty(j,"$state",{get:()=>s.state.value[t],set:G=>{N(z=>{St(z,G)})}}),s._p.forEach(G=>{St(j,o.run(()=>G({store:j,app:s._a,pinia:s,options:l})))}),v&&r&&n.hydrate&&n.hydrate(j.$state,v),c=!0,u=!0,j}/*! #__NO_SIDE_EFFECTS__ */function wc(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=Af();return o=o||(a?Kn(Cc,null):null),o&&bi(o),o=vc,o._s.has(t)||(i?Ec(t,e,s,o):$d(t,s,o)),o._s.get(t)}return r.$id=t,r}const Vd=()=>{};var ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const w=function(t,e){if(!t)throw In(e)},In=function(t){return new Error("Firebase Database ("+Ic.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Gd;const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tc=function(t){const e=Sc(t);return eo.encodeByteArray(e,!0)},Gs=function(t){return Tc(t).replace(/\./g,"")},mr=function(t){try{return eo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t){return Nc(void 0,t)}function Nc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zd(n)||(t[n]=Nc(t[n],e[n]));return t}function zd(t){return t!=="__proto__"}/**
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
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yd=()=>qd().__FIREBASE_DEFAULTS__,Qd=()=>{if(typeof process>"u"||typeof ml>"u")return;const t=ml.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mr(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return Vd()||Yd()||Qd()||Jd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xd=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zd=t=>{const e=Xd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xc=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ep(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Gs(JSON.stringify(n)),Gs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ac(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tp())}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){return Ic.NODE_ADMIN===!0}function ip(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="FirebaseError";class vs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=op,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pc.prototype.create)}}class Pc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?lp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function lp(t,e){return t.replace(ap,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ap=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=os(mr(r[0])||""),n=os(mr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},cp=function(t){const e=Oc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},up=function(t){const e=Oc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ks(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function zs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vl(r)&&vl(o)){if(!zs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function to(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Sn(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class pp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ei;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_p(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _p(t){return t===Kt?void 0:t}function gp(t){return t.instantiationMode==="EAGER"}/**
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
 */class mp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const yp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},vp=se.INFO,Cp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},bp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Cp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=vp,this._logHandler=bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Ep=(t,e)=>e.some(n=>t instanceof n);let Cl,bl;function wp(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ip(){return bl||(bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kc=new WeakMap,yr=new WeakMap,Mc=new WeakMap,zi=new WeakMap,no=new WeakMap;function Sp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(At(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kc.set(n,t)}).catch(()=>{}),no.set(e,t),e}function Tp(t){if(yr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});yr.set(t,e)}let vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Np(t){vr=t(vr)}function Rp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qi(this),e,...n);return Mc.set(s,e.sort?e.sort():[e]),At(s)}:Ip().includes(t)?function(...e){return t.apply(qi(this),e),At(kc.get(this))}:function(...e){return At(t.apply(qi(this),e))}}function xp(t){return typeof t=="function"?Rp(t):(t instanceof IDBTransaction&&Tp(t),Ep(t,wp())?new Proxy(t,vr):t)}function At(t){if(t instanceof IDBRequest)return Sp(t);if(zi.has(t))return zi.get(t);const e=xp(t);return e!==t&&(zi.set(t,e),no.set(e,t)),e}const qi=t=>no.get(t);function Ap(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=At(o);return s&&o.addEventListener("upgradeneeded",a=>{s(At(o.result),a.oldVersion,a.newVersion,At(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Pp=["get","getKey","getAll","getAllKeys","count"],Op=["put","add","delete","clear"],Yi=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yi.get(e))return Yi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Op.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Pp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Yi.set(e,r),r}Np(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
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
 */class Dp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cr="@firebase/app",wl="0.11.2";/**
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
 */const vt=new Dc("@firebase/app"),Mp="@firebase/app-compat",Fp="@firebase/analytics-compat",Lp="@firebase/analytics",Bp="@firebase/app-check-compat",Wp="@firebase/app-check",Hp="@firebase/auth",Up="@firebase/auth-compat",$p="@firebase/database",Vp="@firebase/data-connect",jp="@firebase/database-compat",Gp="@firebase/functions",Kp="@firebase/functions-compat",zp="@firebase/installations",qp="@firebase/installations-compat",Yp="@firebase/messaging",Qp="@firebase/messaging-compat",Jp="@firebase/performance",Xp="@firebase/performance-compat",Zp="@firebase/remote-config",e_="@firebase/remote-config-compat",t_="@firebase/storage",n_="@firebase/storage-compat",s_="@firebase/firestore",i_="@firebase/vertexai",r_="@firebase/firestore-compat",o_="firebase",l_="11.4.0";/**
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
 */const br="[DEFAULT]",a_={[Cr]:"fire-core",[Mp]:"fire-core-compat",[Lp]:"fire-analytics",[Fp]:"fire-analytics-compat",[Wp]:"fire-app-check",[Bp]:"fire-app-check-compat",[Hp]:"fire-auth",[Up]:"fire-auth-compat",[$p]:"fire-rtdb",[Vp]:"fire-data-connect",[jp]:"fire-rtdb-compat",[Gp]:"fire-fn",[Kp]:"fire-fn-compat",[zp]:"fire-iid",[qp]:"fire-iid-compat",[Yp]:"fire-fcm",[Qp]:"fire-fcm-compat",[Jp]:"fire-perf",[Xp]:"fire-perf-compat",[Zp]:"fire-rc",[e_]:"fire-rc-compat",[t_]:"fire-gcs",[n_]:"fire-gcs-compat",[s_]:"fire-fst",[r_]:"fire-fst-compat",[i_]:"fire-vertex","fire-js":"fire-js",[o_]:"fire-js-all"};/**
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
 */const qs=new Map,c_=new Map,Er=new Map;function Il(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ys(t){const e=t.name;if(Er.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Er.set(e,t);for(const n of qs.values())Il(n,t);for(const n of c_.values())Il(n,t);return!0}function u_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function h_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const f_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Pc("app","Firebase",f_);/**
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
 */class d_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const p_=l_;function Fc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:br,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pt.create("bad-app-name",{appName:String(i)});if(n||(n=xc()),!n)throw Pt.create("no-options");const r=qs.get(i);if(r){if(zs(n,r.options)&&zs(s,r.config))return r;throw Pt.create("duplicate-app",{appName:i})}const o=new mp(i);for(const a of Er.values())o.addComponent(a);const l=new d_(n,s,o);return qs.set(i,l),l}function __(t=br){const e=qs.get(t);if(!e&&t===br&&xc())return Fc();if(!e)throw Pt.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=a_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(l.join(" "));return}Ys(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const g_="firebase-heartbeat-database",m_=1,as="firebase-heartbeat-store";let Qi=null;function Lc(){return Qi||(Qi=Ap(g_,m_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),Qi}async function y_(t){try{const n=(await Lc()).transaction(as),s=await n.objectStore(as).get(Bc(t));return await n.done,s}catch(e){if(e instanceof vs)vt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function Sl(t,e){try{const s=(await Lc()).transaction(as,"readwrite");await s.objectStore(as).put(e,Bc(t)),await s.done}catch(n){if(n instanceof vs)vt.warn(n.message);else{const s=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(s.message)}}}function Bc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const v_=1024,C_=30;class b_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>C_){const o=I_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tl(),{heartbeatsToSend:s,unsentEntries:i}=E_(this._heartbeatsCache.heartbeats),r=Gs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return vt.warn(n),""}}}function Tl(){return new Date().toISOString().substring(0,10)}function E_(t,e=v_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Nl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class w_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ip()?rp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nl(t){return Gs(JSON.stringify({version:2,heartbeats:t})).length}function I_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function S_(t){Ys(new ls("platform-logger",e=>new Dp(e),"PRIVATE")),Ys(new ls("heartbeat",e=>new b_(e),"PRIVATE")),gn(Cr,wl,t),gn(Cr,wl,"esm2017"),gn("fire-js","")}S_("");var T_="firebase",N_="11.4.0";/**
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
 */gn(T_,N_,"app");var Rl={};const xl="@firebase/database",Al="1.0.13";/**
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
 */let Wc="";function R_(t){Wc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new x_(e)}}catch{}return new A_},qt=Hc("localStorage"),P_=Hc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Dc("@firebase/database"),O_=function(){let t=1;return function(){return t++}}(),Uc=function(t){const e=dp(t),n=new fp;n.update(e);const s=n.digest();return eo.encodeByteArray(s)},Cs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Cs.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let Qn=null,Pl=!0;const D_=function(t,e){w(!0,"Can't turn on custom loggers persistently."),mn.logLevel=se.VERBOSE,Qn=mn.log.bind(mn)},Ee=function(...t){if(Pl===!0&&(Pl=!1,Qn===null&&P_.get("logging_enabled")===!0&&D_()),Qn){const e=Cs.apply(null,t);Qn(e)}},bs=function(t){return function(...e){Ee(t,...e)}},wr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cs(...t);mn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${Cs(...t)}`;throw mn.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+Cs(...t);mn.warn(e)},k_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$c=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},M_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bn="[MIN_NAME]",en="[MAX_NAME]",Tn=function(t,e){if(t===e)return 0;if(t===bn||e===en)return-1;if(e===bn||t===en)return 1;{const n=Ol(t),s=Ol(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},F_=function(t,e){return t===e?0:t<e?-1:1},Mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},so=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=so(t[e[s]]);return n+="}",n},Vc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function De(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jc=function(t){w(!$c(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},L_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},B_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function W_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const H_=new RegExp("^-?(0*)\\d{1,10}$"),U_=-2147483648,$_=2147483647,Ol=function(t){if(H_.test(t)){const e=Number(t);if(e>=U_&&e<=$_)return e}return null},Nn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},V_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class j_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,h_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="5",Gc="v",Kc="s",zc="r",qc="f",Yc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qc="ls",Jc="p",Ir="ac",Xc="websocket",Zc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function K_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function tu(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===Xc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);K_(t)&&(n.ns=t.namespace);const i=[];return De(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Kd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={},Xi={};function ro(t){const e=t.toString();return Ji[e]||(Ji[e]=new z_),Ji[e]}function q_(t,e){const n=t.toString();return Xi[n]||(Xi[n]=e()),Xi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Nn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="start",Q_="close",J_="pLPCommand",X_="pRTLPCB",nu="id",su="pw",iu="ser",Z_="cb",eg="seg",tg="ts",ng="d",sg="dframe",ru=1870,ou=30,ig=ru-ou,rg=25e3,og=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=ro(n),this.urlFn=a=>(this.appCheckToken&&(a[Ir]=this.appCheckToken),tu(n,Zc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Y_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(og)),M_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new oo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dl)this.id=l,this.password=a;else if(o===Q_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dl]="t",s[iu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Z_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Gc]=io,this.transportSessionId&&(s[Kc]=this.transportSessionId),this.lastSessionId&&(s[Qc]=this.lastSessionId),this.applicationId&&(s[Jc]=this.applicationId),this.appCheckToken&&(s[Ir]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yc.test(location.hostname)&&(s[zc]=qc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!L_()&&!B_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tc(n),i=Vc(s,ig);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sg]="t",s[nu]=e,s[su]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class oo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=O_(),window[J_+this.uniqueCallbackIdentifier]=e,window[X_+this.uniqueCallbackIdentifier]=n,this.myIFrame=oo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nu]=this.myID,e[su]=this.myPW,e[iu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ou+s.length<=ru;){const o=this.pendingSegs.shift();s=s+"&"+eg+i+"="+o.seg+"&"+tg+i+"="+o.ts+"&"+ng+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(rg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=16384,ag=45e3;let Qs=null;typeof MozWebSocket<"u"?Qs=MozWebSocket:typeof WebSocket<"u"&&(Qs=WebSocket);class ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=ro(n),this.connURL=ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Gc]=io,typeof location<"u"&&location.hostname&&Yc.test(location.hostname)&&(o[zc]=qc),n&&(o[Kc]=n),s&&(o[Qc]=s),i&&(o[Ir]=i),r&&(o[Jc]=r),tu(e,Xc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let s;sp(),this.mySock=new Qs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qs!==null&&!ze.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vc(n,lg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ag))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ze.responsesRequiredToBeHealthy=2;ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static get ALL_TRANSPORTS(){return[hn,ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ze&&ze.isAvailable();let s=n&&!ze.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ze];else{const i=this.transports_=[];for(const r of cs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=6e4,ug=5e3,hg=10*1024,fg=100*1024,Zi="t",kl="d",dg="s",Ml="r",pg="e",Fl="o",Ll="a",Bl="n",Wl="p",_g="h";class gg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Jn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zi in e){const n=e[Zi];n===Ll?this.upgradeIfSecondaryHealthy_():n===Ml?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ll,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mn(Zi,e);if(kl in e){const s=e[kl];if(n===_g){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dg?this.onConnectionShutdown_(s):n===Ml?this.onReset_(s):n===pg?wr("Server Error: "+s):n===Fl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),io!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Jn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ug))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends au{static getInstance(){return new Js}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=32,Ul=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new Z("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function cu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=W(t),s=W(e);if(n===null)return e;if(n===s)return Re(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lo(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class yg{constructor(e,n){this.errorPrefix_=n,this.parts_=uu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wi(this.parts_[s]);fu(this)}}function vg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wi(e),fu(t)}function Cg(t){const e=t.parts_.pop();t.byteLength_-=wi(e),t.parts_.length>0&&(t.byteLength_-=1)}function fu(t){if(t.byteLength_>Ul)throw new Error(t.errorPrefix_+"has a key path longer than "+Ul+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hl+") or object contains a cycle "+zt(t))}function zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends au{static getInstance(){return new ao}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e3,bg=60*5*1e3,$l=30*1e3,Eg=1.3,wg=3e4,Ig="server_kill",Vl=3;class yt extends lu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=yt.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fn,this.maxReconnectDelay_=bg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ao.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Js.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ei,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;yt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||up(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$l)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wr("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wg&&(this.reconnectDelay_=Fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Eg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new gg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Oe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ig)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),a())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yl(this.interruptReasons_)&&(this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>so(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vl&&(this.reconnectDelay_=$l,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wc.replace(/\./g,"-")]=1,Ac()?e["framework.cordova"]=1:np()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Js.getInstance().currentlyOnline();return yl(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new H(bn,e),i=new H(bn,n);return this.compare(s,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class du extends Ii{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return Tn(e.name,n.name)}isDefinedOn(e){throw In("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(en,Os)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Os)}toString(){return".key"}}const yn=new du;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Pe.EMPTY_NODE,this.right=r??Pe.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class Sg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pe{constructor(e,n=Pe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Pe.EMPTY_NODE=new Sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){return Tn(t.name,e.name)}function co(t,e){return Tn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr;function Ng(t){Sr=t}const pu=function(t){return typeof t=="number"?"number:"+jc(t):"string:"+t},_u=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else w(t===Sr||t.isEmpty(),"priority of unexpected type.");w(t===Sr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;class pe{static set __childrenNodeConstructor(e){jl=e}static get __childrenNodeConstructor(){return jl}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_u(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:W(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=W(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jc(this.value_):e+=this.value_,this.lazyHash_=Uc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu,mu;function Rg(t){gu=t}function xg(t){mu=t}class Ag extends Ii{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(en,new pe("[PRIORITY-POST]",mu))}makePost(e,n){const s=gu(e);return new H(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new Ag;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=Math.log(2);class Og{constructor(e){const n=r=>parseInt(Math.log(r)/Pg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const g=parseInt(u/2,10)+a,v=i(a,g),x=i(g+1,c);return h=t[g],d=n?n(h):h,new _e(d,h.node,_e.BLACK,v,x)}},r=function(a){let c=null,u=null,h=t.length;const d=function(v,x){const N=h-v,_=h;h-=v;const k=i(N+1,_),V=t[N],A=n?n(V):V;g(new _e(A,V.node,x,null,k))},g=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const x=a.nextBitIsOne(),N=Math.pow(2,a.count-(v+1));x?d(N,_e.BLACK):(d(N,_e.BLACK),d(N,_e.RED))}return u},o=new Og(t.length),l=r(o);return new Pe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;const an={};class mt{static get Default(){return w(an&&le,"ChildrenNode.ts has not been loaded"),er=er||new mt({".priority":an},{".priority":le}),er}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pe?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){w(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(H.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Xs(s,e.getCompare()):l=an;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new mt(u,c)}addToIndexes(e,n){const s=Ks(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(H.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Xs(l,o.getCompare())}else return an;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new H(e.name,l))),a.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ks(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new H(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;class D{static get EMPTY_NODE(){return Ln||(Ln=new D(new Pe(co),null,mt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_u(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ln:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new H(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ln:this.priorityNode_;return new D(i,o,r)}}updateChild(e,n){const s=W(e);if(s===null)return n;{w(W(e)!==".priority"||kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),s++,r&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pu(this.getPriority().val())+":"),this.forEachChild(le,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Uc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new H(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(le),i=n.getIterator(le);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dg extends D{constructor(){super(new Pe(co),D.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Es=new Dg;Object.defineProperties(H,{MIN:{value:new H(bn,D.EMPTY_NODE)},MAX:{value:new H(en,Es)}});du.__EMPTY_NODE=D.EMPTY_NODE;pe.__childrenNodeConstructor=D;Ng(Es);xg(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=!0;function ge(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,ge(e))}if(!(t instanceof Array)&&kg){const n=[];let s=!1;if(De(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new H(o,a)))}}),n.length===0)return D.EMPTY_NODE;const r=Xs(n,Tg,o=>o.name,co);if(s){const o=Xs(n,le.getCompare());return new D(r,ge(e),new mt({".priority":o},{".priority":le}))}else return new D(r,ge(e),mt.Default)}else{let n=D.EMPTY_NODE;return De(t,(s,i)=>{if(Et(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}Rg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends Ii{constructor(e){super(),this.indexPath_=e,w(!U(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,s);return new H(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Es);return new H(en,e)}toString(){return uu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends Ii{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Tn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const s=ge(e);return new H(n,s)}toString(){return".value"}}const Lg=new Fg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t){return{type:"value",snapshotNode:t}}function En(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function us(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Bg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(us(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(En(n,s)):o.trackChildChange(hs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(i,r)=>{n.hasChild(i)||s.trackChildChange(us(i,r))}),n.isLeafNode()||n.forEachChild(le,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(hs(i,r,o))}else s.trackChildChange(En(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.indexedFilter_=new uo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fs.getStartPost_(e),this.endPost_=fs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new H(n,s))||(s=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(le,(o,l)=>{r.matches(new H(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new H(n,s))||(s=D.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const a=new H(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(hs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(us(n,h));const x=l.updateImmediateChild(n,D.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(En(d.name,d.node)),x.updateImmediateChild(d.name,d.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(us(c.name,c.node)),r.trackChildChange(En(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new ho;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hg(t){return t.loadsAllData()?new uo(t.getIndex()):t.hasLimit()?new Wg(t):new fs(t)}function Gl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===Lg?n="$value":t.index_===yn?n="$key":(w(t.index_ instanceof Mg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends lu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Gl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Cn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Zs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gl(e._queryParams),s=e._path.toString(),i=new Ei;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=os(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return{value:null,children:new Map}}function vu(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=W(e);t.children.has(s)||t.children.set(s,ei());const i=t.children.get(s);e=ie(e),vu(i,e,n)}}function Tr(t,e,n){t.value!==null?n(e,t.value):$g(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Tr(i,r,n)})}function $g(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&De(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=10*1e3,jg=30*1e3,Gg=5*60*1e3;class Kg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Vg(e);const s=zl+(jg-zl)*Math.random();Jn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;De(e,(i,r)=>{r>0&&Et(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Jn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function Cu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function po(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=Cu()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new ti(Y(),n,this.revert)}}else return w(W(this.path)===e,"operationForChild called for unrelated child."),new ti(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ds(this.source,Y()):new ds(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return U(this.path)?new tn(this.source,Y(),this.snap.getImmediateChild(e)):new tn(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new tn(this.source,Y(),n.value):new ps(this.source,Y(),n)}else return w(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bg(o.childName,o.snapshotNode))}),Bn(t,i,"child_removed",e,s,n),Bn(t,i,"child_added",e,s,n),Bn(t,i,"child_moved",r,s,n),Bn(t,i,"child_changed",e,s,n),Bn(t,i,"value",e,s,n),i}function Bn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Qg(t,l,a)),o.forEach(l=>{const a=Yg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Yg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qg(t,e,n){if(e.childName==null||n.childName==null)throw In("Should only compare child_ events.");const s=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){return{eventCache:t,serverCache:e}}function Xn(t,e,n,s){return Si(new Mt(e,n,s),t.serverCache)}function bu(t,e,n,s){return Si(t.eventCache,new Mt(e,n,s))}function ni(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;const Jg=()=>(tr||(tr=new Pe(F_)),tr);class re{static fromObject(e){let n=new re(null);return De(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=Jg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(U(e))return null;{const s=W(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=W(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(U(e))return new re(n,this.children);{const s=W(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=W(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const n=W(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(U(e))return n;{const s=W(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(U(e))return null;{const r=W(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(U(e))return this;{this.value&&s(n,this.value);const i=W(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),de(n,i),s):new re(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new re(null))}}function Zn(t,e,n){if(U(e))return new Je(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Re(i,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Je(r)}}}function ql(t,e,n){let s=t;return De(n,(i,r)=>{s=Zn(s,de(e,i),r)}),s}function Yl(t,e){if(U(e))return Je.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Je(n)}}function Nr(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function Ql(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(s,i)=>{e.push(new H(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new H(s,i.value))}),e}function Ot(t,e){if(U(e))return t;{const n=rn(t,e);return n!=null?new Je(new re(n)):new Je(t.writeTree_.subtree(e))}}function Rr(t){return t.writeTree_.isEmpty()}function wn(t,e){return Eu(Y(),t.writeTree_,e)}function Eu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Eu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){return Tu(e,t)}function Xg(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zn(t.visibleWrites,e,n)),t.lastWriteId=s}function Zg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function em(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&tm(l,s.path)?i=!1:qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return nm(t),!0;if(s.snap)t.visibleWrites=Yl(t.visibleWrites,s.path);else{const l=s.children;De(l,a=>{t.visibleWrites=Yl(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function tm(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(de(t.path,n),e))return!0;return!1}function nm(t){t.visibleWrites=wu(t.allWrites,sm,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sm(t){return t.visible}function wu(t,e,n){let s=Je.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)qe(n,o)?(l=Re(n,o),s=Zn(s,l,r.snap)):qe(o,n)&&(l=Re(o,n),s=Zn(s,Y(),r.snap.getChild(l)));else if(r.children){if(qe(n,o))l=Re(n,o),s=ql(s,l,r.children);else if(qe(o,n))if(l=Re(o,n),U(l))s=ql(s,Y(),r.children);else{const a=Cn(r.children,W(l));if(a){const c=a.getChild(ie(l));s=Zn(s,Y(),c)}}}else throw In("WriteRecord should have .snap or .children")}}return s}function Iu(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(Rr(o))return n;if(n==null&&!Nr(o,Y()))return null;{const l=n||D.EMPTY_NODE;return wn(o,l)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&Rr(r))return n;if(!i&&n==null&&!Nr(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(qe(c.path,e)||qe(e,c.path))},l=wu(t.allWrites,o,e),a=n||D.EMPTY_NODE;return wn(l,a)}}}function im(t,e,n){let s=D.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=wn(Ot(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),Ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return Ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rm(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(Nr(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return Rr(o)?i.getChild(n):wn(o,i.getChild(n))}}function om(t,e,n,s){const i=de(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return wn(o,s.getNode().getImmediateChild(n))}else return null}function lm(t,e){return rn(t.visibleWrites,e)}function am(t,e,n,s,i,r,o){let l;const a=Ot(t.visibleWrites,e),c=rn(a,Y());if(c!=null)l=c;else if(n!=null)l=wn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function cm(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function si(t,e,n,s){return Iu(t.writeTree,t.treePath,e,n,s)}function _o(t,e){return im(t.writeTree,t.treePath,e)}function Jl(t,e,n,s){return rm(t.writeTree,t.treePath,e,n,s)}function ii(t,e){return lm(t.writeTree,de(t.treePath,e))}function um(t,e,n,s,i,r){return am(t.writeTree,t.treePath,e,n,s,i,r)}function go(t,e,n){return om(t.writeTree,t.treePath,e,n)}function Su(t,e){return Tu(de(t.treePath,e),t.writeTree)}function Tu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,hs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,us(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,En(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,hs(s,e.snapshotNode,i.oldSnap));else throw In("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Nu=new fm;class mo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return go(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=um(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t){return{filter:t}}function pm(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _m(t,e,n,s,i){const r=new hm;let o,l;if(n.type===Ye.OVERWRITE){const c=n;c.source.fromUser?o=xr(t,e,c.path,c.snap,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=ri(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const c=n;c.source.fromUser?o=mm(t,e,c.path,c.children,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ar(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const c=n;c.revert?o=Cm(t,e,c.path,s,i,r):o=ym(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=vm(t,e,n.path,s,r);else throw In("Unknown operation type: "+n.type);const a=r.getChanges();return gm(e,o,a),{viewCache:o,changes:a}}function gm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ni(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(yu(ni(e)))}}function Ru(t,e,n,s,i,r){const o=e.eventCache;if(ii(s,n)!=null)return e;{let l,a;if(U(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=nn(e),u=c instanceof D?c:D.EMPTY_NODE,h=_o(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=si(s,nn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=W(n);if(c===".priority"){w(kt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Jl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Jl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=go(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Xn(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function ri(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=W(n);if(!a.isCompleteForPath(n)&&kt(n)>1)return e;const v=ie(n),N=a.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?c=u.updatePriority(a.getNode(),N):c=u.updateChild(a.getNode(),g,N,v,Nu,null)}const h=bu(e,c,a.isFullyInitialized()||U(n),u.filtersNodes()),d=new mo(i,h,r);return Ru(t,h,n,i,d,l)}function xr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new mo(i,e,r);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Xn(e,c,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Xn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),g=l.getNode().getImmediateChild(h);let v;if(U(d))v=s;else{const x=u.getCompleteChild(h);x!=null?cu(d)===".priority"&&x.getChild(hu(d)).isEmpty()?v=x:v=x.updateChild(d,s):v=D.EMPTY_NODE}if(g.equals(v))a=e;else{const x=t.filter.updateChild(l.getNode(),h,v,d,u,o);a=Xn(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Xl(t,e){return t.eventCache.isCompleteForChild(e)}function mm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);Xl(e,W(u))&&(l=xr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);Xl(e,W(u))||(l=xr(t,l,u,c,i,r,o))}),l}function Zl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ar(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;U(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=Zl(t,g,d);a=ri(t,a,new Z(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),x=Zl(t,v,d);a=ri(t,a,new Z(h),x,i,r,o,l)}}),a}function ym(t,e,n,s,i,r,o){if(ii(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ri(t,e,n,a.getNode().getChild(n),i,r,l,o);if(U(n)){let c=new re(null);return a.getNode().forEachChild(yn,(u,h)=>{c=c.set(new Z(u),h)}),Ar(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=de(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Ar(t,e,n,c,i,r,l,o)}}function vm(t,e,n,s,i){const r=e.serverCache,o=bu(e,r.getNode(),r.isFullyInitialized()||U(n),r.isFiltered());return Ru(t,o,n,s,Nu,i)}function Cm(t,e,n,s,i,r){let o;if(ii(s,n)!=null)return e;{const l=new mo(s,e,i),a=e.eventCache.getNode();let c;if(U(n)||W(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=si(s,nn(e));else{const h=e.serverCache.getNode();w(h instanceof D,"serverChildren would be complete if leaf node"),u=_o(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=W(n);let h=go(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,D.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=si(s,nn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ii(s,Y())!=null,Xn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new uo(s.getIndex()),r=Hg(s);this.processor_=dm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(D.EMPTY_NODE,l.getNode(),null),u=new Mt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Mt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Si(h,u),this.eventGenerator_=new zg(this.query_)}get query(){return this.query_}}function Em(t){return t.viewCache_.serverCache.getNode()}function wm(t){return ni(t.viewCache_)}function Im(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function ea(t){return t.eventRegistrations_.length===0}function Sm(t,e){t.eventRegistrations_.push(e)}function ta(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function na(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(w(nn(t.viewCache_),"We should always have a full cache before handling merges"),w(ni(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=_m(t.processor_,i,e,n,s);return pm(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,xu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Tm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(r,o)=>{s.push(En(r,o))}),n.isFullyInitialized()&&s.push(yu(n.getNode())),xu(t,s,n.getNode(),e)}function xu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return qg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;class Au{constructor(){this.views=new Map}}function Nm(t){w(!oi,"__referenceConstructor has already been defined"),oi=t}function Rm(){return w(oi,"Reference.ts has not been loaded"),oi}function xm(t){return t.views.size===0}function yo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),na(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(na(o,e,n,s));return r}}function Pu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=si(n,i?s:null),a=!1;l?a=!0:s instanceof D?(l=_o(n,s),a=!1):(l=D.EMPTY_NODE,a=!1);const c=Si(new Mt(l,a,!1),new Mt(s,i,!1));return new bm(e,c)}return o}function Am(t,e,n,s,i,r){const o=Pu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Sm(o,n),Tm(o,n)}function Pm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ft(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ta(c,n,s)),ea(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ta(a,n,s)),ea(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ft(t)&&r.push(new(Rm())(e._repo,e._path)),{removed:r,events:o}}function Ou(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dt(t,e){let n=null;for(const s of t.views.values())n=n||Im(s,e);return n}function Du(t,e){if(e._queryParams.loadsAllData())return Ni(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ku(t,e){return Du(t,e)!=null}function Ft(t){return Ni(t)!=null}function Ni(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;function Om(t){w(!li,"__referenceConstructor has already been defined"),li=t}function Dm(){return w(li,"Reference.ts has not been loaded"),li}let km=1;class sa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=cm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mu(t,e,n,s,i){return Xg(t.pendingWriteTree_,e,n,s,i),i?Is(t,new tn(Cu(),e,n)):[]}function Yt(t,e,n=!1){const s=Zg(t.pendingWriteTree_,e);if(em(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Y(),!0):De(s.children,o=>{r=r.set(new Z(o),!0)}),Is(t,new ti(s.path,r,n))}else return[]}function ws(t,e,n){return Is(t,new tn(fo(),e,n))}function Mm(t,e,n){const s=re.fromObject(n);return Is(t,new ps(fo(),e,s))}function Fm(t,e){return Is(t,new ds(fo(),e))}function Lm(t,e,n){const s=Co(t,n);if(s){const i=bo(s),r=i.path,o=i.queryId,l=Re(r,e),a=new ds(po(o),l);return Eo(t,r,a)}else return[]}function ai(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ku(o,e))){const a=Pm(o,e,n,s);xm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>Ft(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Hm(d);for(let v=0;v<g.length;++v){const x=g[v],N=x.query,_=Wu(t,x);t.listenProvider_.startListening(es(N),_s(t,N),_.hashFn,_.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(es(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(Ri(d));t.listenProvider_.stopListening(es(d),g)}))}Um(t,c)}return l}function Fu(t,e,n,s){const i=Co(t,s);if(i!=null){const r=bo(i),o=r.path,l=r.queryId,a=Re(o,e),c=new tn(po(l),a,n);return Eo(t,o,c)}else return[]}function Bm(t,e,n,s){const i=Co(t,s);if(i){const r=bo(i),o=r.path,l=r.queryId,a=Re(o,e),c=re.fromObject(n),u=new ps(po(l),a,c);return Eo(t,o,u)}else return[]}function Pr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const v=Re(d,i);r=r||Dt(g,v),o=o||Ft(g)});let l=t.syncPointTree_.get(i);l?(o=o||Ft(l),r=r||Dt(l,Y())):(l=new Au,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const x=Dt(v,Y());x&&(r=r.updateImmediateChild(g,x))}));const c=ku(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ri(e);w(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=$m();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Ti(t.pendingWriteTree_,i);let h=Am(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Du(l,e);h=h.concat(Vm(t,e,d))}return h}function vo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Re(o,e),c=Dt(l,a);if(c)return c});return Iu(i,e,r,n,!0)}function Wm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Re(c,n);s=s||Dt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Dt(i,Y()):(i=new Au,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Mt(s,!0,!1):null,l=Ti(t.pendingWriteTree_,e._path),a=Pu(i,e,l,r?o.getNode():D.EMPTY_NODE,r);return wm(a)}function Is(t,e){return Lu(e,t.syncPointTree_,null,Ti(t.pendingWriteTree_,Y()))}function Lu(t,e,n,s){if(U(t.path))return Bu(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=Dt(i,Y()));let r=[];const o=W(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Su(s,o);r=r.concat(Lu(l,a,c,u))}return i&&(r=r.concat(yo(i,t,s,n))),r}}function Bu(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=Dt(i,Y()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Su(s,o),u=t.operationForChild(o);u&&(r=r.concat(Bu(u,l,a,c)))}),i&&(r=r.concat(yo(i,t,s,n))),r}function Wu(t,e){const n=e.query,s=_s(t,n);return{hashFn:()=>(Em(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Lm(t,n._path,s):Fm(t,n._path);{const r=W_(i,n);return ai(t,n,null,r)}}}}function _s(t,e){const n=Ri(e);return t.queryToTagMap.get(n)}function Ri(t){return t._path.toString()+"$"+t._queryIdentifier}function Co(t,e){return t.tagToQueryMap.get(e)}function bo(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Eo(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Ti(t.pendingWriteTree_,e);return yo(s,n,i,null)}function Hm(t){return t.fold((e,n,s)=>{if(n&&Ft(n))return[Ni(n)];{let i=[];return n&&(i=Ou(n)),De(s,(r,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Dm())(t._repo,t._path):t}function Um(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ri(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function $m(){return km++}function Vm(t,e,n){const s=e._path,i=_s(t,e),r=Wu(t,n),o=t.listenProvider_.startListening(es(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!Ft(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!U(c)&&u&&Ft(u))return[Ni(u).query];{let d=[];return u&&(d=d.concat(Ou(u).map(g=>g.query))),De(h,(g,v)=>{d=d.concat(v)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(es(u),_s(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wo(n)}node(){return this.node_}}class Io{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Io(this.syncTree_,n)}node(){return vo(this.syncTree_,this.path_)}}const jm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ia=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Gm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Km(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Gm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Km=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},zm=function(t,e,n,s){return So(e,new Io(n,t),s)},Hu=function(t,e,n){return So(t,new wo(e),n)};function So(t,e,n){const s=t.getPriority().val(),i=ia(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ia(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(le,(l,a)=>{const c=So(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function No(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=W(n);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new To(i,s,r),n=ie(n),i=W(n)}return s}function Rn(t){return t.node.value}function Uu(t,e){t.node.value=e,Or(t)}function $u(t){return t.node.childCount>0}function qm(t){return Rn(t)===void 0&&!$u(t)}function xi(t,e){De(t.node.children,(n,s)=>{e(new To(n,t,s))})}function Vu(t,e,n,s){n&&e(t),xi(t,i=>{Vu(i,e,!0)})}function Ym(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(t){return new Z(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function Or(t){t.parent!==null&&Qm(t.parent,t.name,t)}function Qm(t,e,n){const s=qm(n),i=Et(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Or(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Or(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=/[\[\].#$\/\u0000-\u001F\u007F]/,Xm=/[\[\].#$\u0000-\u001F\u007F]/,nr=10*1024*1024,ju=function(t){return typeof t=="string"&&t.length!==0&&!Jm.test(t)},Gu=function(t){return typeof t=="string"&&t.length!==0&&!Xm.test(t)},Zm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Gu(t)},ey=function(t,e,n,s){Ro(to(t,"value"),e,n)},Ro=function(t,e,n){const s=n instanceof Z?new yg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+zt(s)+" with contents = "+e.toString());if($c(e))throw new Error(t+"contains "+e.toString()+" "+zt(s));if(typeof e=="string"&&e.length>nr/3&&wi(e)>nr)throw new Error(t+"contains a string greater than "+nr+" utf8 bytes "+zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(De(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ju(o)))throw new Error(t+" contains an invalid key ("+o+") "+zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vg(s,o),Ro(t,l,s),Cg(s)}),i&&r)throw new Error(t+' contains ".value" child '+zt(s)+" in addition to actual children.")}},Ku=function(t,e,n,s){if(!Gu(n))throw new Error(to(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ty=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ku(t,e,n)},zu=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ny=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ju(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Zm(n))throw new Error(to(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!lo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qu(t,e,n){xo(t,n),Yu(t,s=>lo(s,e))}function ct(t,e,n){xo(t,n),Yu(t,s=>qe(s,e)||qe(e,s))}function Yu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(iy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Qn&&Ee("event: "+n.toString()),Nn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="repo_interrupt",oy=25;class ly{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ei(),this.transactionQueueTree_=new To,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ay(t,e,n){if(t.stats_=ro(t.repoInfo_),t.forceRestClient_||V_())t.server_=new Zs(t.repoInfo_,(s,i,r,o)=>{ra(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>oa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new yt(t.repoInfo_,e,(s,i,r,o)=>{ra(t,s,i,r,o)},s=>{oa(t,s)},s=>{uy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=q_(t.repoInfo_,()=>new Kg(t.stats_,t.server_)),t.infoData_=new Ug,t.infoSyncTree_=new sa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ws(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Po(t,"connected",!1),t.serverSyncTree_=new sa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ct(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function cy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ao(t){return jm({timestamp:cy(t)})}function ra(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ks(n,c=>ge(c));o=Bm(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=Fu(t.serverSyncTree_,r,a,i)}else if(s){const a=Ks(n,c=>ge(c));o=Mm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=ws(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Pi(t,r)),ct(t.eventQueue_,l,o)}function oa(t,e){Po(t,"connected",e),e===!1&&dy(t)}function uy(t,e){De(e,(n,s)=>{Po(t,n,s)})}function Po(t,e,n){const s=new Z("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=ws(t.infoSyncTree_,s,i);ct(t.eventQueue_,s,r)}function Qu(t){return t.nextWriteId_++}function hy(t,e,n){const s=Wm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());Pr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ws(t.serverSyncTree_,e._path,r);else{const l=_s(t.serverSyncTree_,e);o=Fu(t.serverSyncTree_,e._path,r,l)}return ct(t.eventQueue_,e._path,o),ai(t.serverSyncTree_,e,n,null,!0),r},i=>(Ai(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function fy(t,e,n,s,i){Ai(t,"set",{path:e.toString(),value:n,priority:s});const r=Ao(t),o=ge(n,s),l=vo(t.serverSyncTree_,e),a=Hu(o,l,r),c=Qu(t),u=Mu(t.serverSyncTree_,e,a,c,!0);xo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||Oe("set at "+e+" failed: "+d);const x=Yt(t.serverSyncTree_,c,!v);ct(t.eventQueue_,e,x),my(t,i,d,g)});const h=th(t,e);Pi(t,h),ct(t.eventQueue_,h,[])}function dy(t){Ai(t,"onDisconnectEvents");const e=Ao(t),n=ei();Tr(t.onDisconnect_,Y(),(i,r)=>{const o=zm(i,r,t.serverSyncTree_,e);vu(n,i,o)});let s=[];Tr(n,Y(),(i,r)=>{s=s.concat(ws(t.serverSyncTree_,i,r));const o=th(t,i);Pi(t,o)}),t.onDisconnect_=ei(),ct(t.eventQueue_,Y(),s)}function py(t,e,n){let s;W(e._path)===".info"?s=Pr(t.infoSyncTree_,e,n):s=Pr(t.serverSyncTree_,e,n),qu(t.eventQueue_,e._path,s)}function _y(t,e,n){let s;W(e._path)===".info"?s=ai(t.infoSyncTree_,e,n):s=ai(t.serverSyncTree_,e,n),qu(t.eventQueue_,e._path,s)}function gy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ry)}function Ai(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function my(t,e,n,s){e&&Nn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ju(t,e,n){return vo(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Oo(t,e=t.transactionQueueTree_){if(e||Oi(t,e),Rn(e)){const n=Zu(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&yy(t,Ss(e),n)}else $u(e)&&xi(e,n=>{Oo(t,n)})}function yy(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ju(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Re(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ai(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Yt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Oi(t,No(t.transactionQueueTree_,e)),Oo(t,t.transactionQueueTree_),ct(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Nn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Oe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Pi(t,e)}},o)}function Pi(t,e){const n=Xu(t,e),s=Ss(n),i=Zu(t,n);return vy(t,i,s),s}function vy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Re(n,a.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Yt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=oy)u=!0,h="maxretry",i=i.concat(Yt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Ju(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Ro("transaction failed: Data returned ",g,a.path);let v=ge(g);typeof g=="object"&&g!=null&&Et(g,".priority")||(v=v.updatePriority(d.getPriority()));const N=a.currentWriteId,_=Ao(t),k=Hu(v,d,_);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=k,a.currentWriteId=Qu(t),o.splice(o.indexOf(N),1),i=i.concat(Mu(t.serverSyncTree_,a.path,k,a.currentWriteId,a.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(Yt(t.serverSyncTree_,a.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Oi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Nn(s[l]);Oo(t,t.transactionQueueTree_)}function Xu(t,e){let n,s=t.transactionQueueTree_;for(n=W(e);n!==null&&Rn(s)===void 0;)s=No(s,n),e=ie(e),n=W(e);return s}function Zu(t,e){const n=[];return eh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function eh(t,e,n){const s=Rn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);xi(e,i=>{eh(t,i,n)})}function Oi(t,e){const n=Rn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Uu(e,n.length>0?n:void 0)}xi(e,s=>{Oi(t,s)})}function th(t,e){const n=Ss(Xu(t,e)),s=No(t.transactionQueueTree_,e);return Ym(s,i=>{sr(t,i)}),sr(t,s),Vu(s,i=>{sr(t,i)}),n}function sr(t,e){const n=Rn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Uu(e,void 0):n.length=r+1,ct(t.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)Nn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function by(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const la=function(t,e){const n=Ey(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||k_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},Ey=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Cy(t.substring(u,h)));const d=by(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class Iy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Do{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:cu(this._path)}get ref(){return new wt(this._repo,this._path)}get _queryIdentifier(){const e=Kl(this._queryParams),n=so(e);return n==="{}"?"default":n}get _queryObject(){return Kl(this._queryParams)}isEqual(e){if(e=Sn(e),!(e instanceof Do))return!1;const n=this._repo===e._repo,s=lo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mg(this._path)}}class wt extends Do{constructor(e,n){super(e,n,new ho,!1)}get parent(){const e=hu(this._path);return e===null?null:new wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=Dr(this.ref,e);return new gs(this._node.getChild(n),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gs(i,Dr(this.ref,s),le)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function je(t,e){return t=Sn(t),t._checkNotDeleted("ref"),e!==void 0?Dr(t._root,e):t._root}function Dr(t,e){return t=Sn(t),W(t._path)===null?ty("child","path",e):Ku("child","path",e),new wt(t._repo,de(t._path,e))}function sh(t){return zu("remove",t._path),fn(t,null)}function fn(t,e){t=Sn(t),zu("set",t._path),ey("set",e,t._path);const n=new Ei;return fy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ih(t){t=Sn(t);const e=new nh(()=>{}),n=new Di(e);return hy(t._repo,t,n).then(s=>new gs(s,new wt(t._repo,t._path),t._queryParams.getIndex()))}class Di{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new wy("value",this,new gs(e.snapshotNode,new wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Iy(this,e,n):null}matches(e){return e instanceof Di?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Sy(t,e,n,s,i){const r=new nh(n,void 0),o=new Di(r);return py(t._repo,t,o),()=>_y(t._repo,t,o)}function rh(t,e,n,s){return Sy(t,"value",e)}Nm(wt);Om(wt);/**
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
 */const Ty="FIREBASE_DATABASE_EMULATOR_HOST",kr={};let Ny=!1;function Ry(t,e,n,s){t.repoInfo_=new eu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function xy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=la(r,i),l=o.repoInfo,a;typeof process<"u"&&Rl&&(a=Rl[Ty]),a?(r=`http://${a}?ns=${l.namespace}`,o=la(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new G_(t.name,t.options,e);ny("Invalid Firebase Database URL",o),U(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Py(l,t,c,new j_(t,n));return new Oy(u,t)}function Ay(t,e){const n=kr[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gy(t),delete n[t.key]}function Py(t,e,n,s){let i=kr[e.name];i||(i={},kr[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ly(t,Ny,n,s),i[t.toURLString()]=r,r}class Oy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ay(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ay(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function Dy(t=__(),e){const n=u_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Zd("database");s&&ky(n,...s)}return n}function ky(t,e,n,s={}){t=Sn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&zs(s,r.repoInfo_.emulatorOptions))return;Ct("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ls(Ls.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:ep(s.mockUserToken,t.app.options.projectId);o=new Ls(l)}Ry(r,i,s,o)}/**
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
 */function My(t){R_(p_),Ys(new ls("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(xl,Al,t),gn(xl,Al,"esm2017")}yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};My();const Fy={apiKey:"AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw",authDomain:"iamwait.firebaseapp.com",databaseURL:"https://iamwait-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwait",storageBucket:"iamwait.firebasestorage.app",messagingSenderId:"720775593565",appId:"1:720775593565:web:1a263bf6a87ecfea3817b4",measurementId:"G-3RRDNZ9ME5"},Ly=Fc(Fy),Ge=Dy(Ly),oh=wc("fbStore",{state:()=>({userId:"",userName:"",nickname:"",opponentId:"",opponentName:"",gameId:""}),actions:{async getField(t){const e=je(Ge,t);return ih(e).then(n=>{if(n.exists()){const s=n.val();return jt(">>> Данные пользователя:"+s),s}else jt(t+" : данные не найдены")})},async setField(t,e){const n=je(Ge,t);return fn(n,{text:e}).then(()=>{jt("Данные успешно записаны!")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async removeField(t){console.log(t);const e=je(Ge,t);sh(e).then(()=>{jt(`Данные ${t} удалены!`)})},async updateValue(t){const e=je(Ge,t);return new Promise(n=>{rh(e,s=>{jt(`Данные ${t} на прослушке`),console.log(`${t}=`,s.val()),n(s.val())})})},getOpponent(){let t=localStorage.getItem("games");if(t){let e=this.gameId,n=JSON.parse(t);if(!n[e])return null;let s=n[e].findIndex(r=>!r.includes(this.userId)),i=n[e][s].split("::");return{name:i[1],id:i[0]}}else return null},async setReadyToPlay(){location.href.includes("localhost:")&&(this.userName=this.userName||"Ищущий_Игрок",this.userId=this.userId||"1111111",console.log("this.nickname = ",this.nickname));const t=je(Ge,"readyToPlay/"+this.gameId+"/"+this.userId);fn(t,{name:this.nickname||this.userName}).then(()=>{jt("Игрок активировался! удалился из ждущих")}).catch(e=>{console.error("Ошибка активирования: ",e)})},acceptInvitation(t){location.href.includes("localhost:")&&(this.userName=this.userName||"ПРИНИМАЮЩИЙ_ИГРОК",this.userId=this.userId||"2222222");let e=this.userId>t.id?this.userId:t.id,n=this.userId<=t.id?this.userId:t.id;const s=je(Ge,this.gameId+"/"+e+"::"+n);return new Promise(i=>{fn(s,{start:[t.id+"::"+t.name,this.userId+"::"+this.userName],ask:this.userId}).then(()=>{jt("Предложено играть"),i("start")})})},setGameStages(t,e,n){console.log("gameLink=",t);const s=je(Ge,this.gameId+"/"+t);return new Promise(i=>{fn(s,{gamers:e,stage:n}).then(()=>{n&&this.removeField(this.opponentId),i("игра")})})}}}),jt=t=>console.log("%c "+t,"color: green"),By=wc("fbStore2",{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:4}),actions:{async getField(t){const e=je(Ge,t);return ih(e).then(n=>{if(n.exists()){const s=n.val();return Wn(`>>> Данные по ${t} = `+JSON.stringify(s)),s}else Wn(t+" : данные не найдены")})},async setField(t,e){const n=je(Ge,t);return fn(n,e).then(()=>{Wn(t+" -  данные записаны")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async onValue(t){const e=je(Ge,t);rh(e,n=>{Wn(`########### ########## Данные ${t} на прослушке`),this.lookField=n.val()})},async removeField(t){console.log(t);const e=je(Ge,t);sh(e).then(()=>{Wn(`Данные ${t} удалены!`)})}}}),Wn=t=>console.log("%c "+t,"color: darkgreen"),Wy={key:0},Hy={key:0},Uy=["onClick"],$y={key:1},Vy={key:0},jy=["onClick"],Gy={key:1,class:"red-notice"},Ky={key:2},zy={key:3},qy={key:4},Yy=of({__name:"BinderComp",props:{game:{}},setup(t){const e=By(),n=Ke(localStorage.getItem("myNickName")),s=Ke([]),i=Ke(),r=Ke(),o=Ke(""),l=function(){location.href.includes("localhost:")&&(e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя"+parseInt(String(Math.random()*100)))},a=function(){e.nickName=n.value,n.value&&localStorage.setItem("myNickName",n.value)};function c(){console.log("game = ",t.game),e.getField(t.game+"/play/"+e.myId).then(N=>{if(console.log("RES=",N),!N)h(),e.stage=1;else{i.value={id:N.id,name:N.name},e.stage=5;let _=t.game+"/game/"+N.game;console.log("link",_),e.getField(t.game+"/game/"+N.game).then(k=>{o.value=k})}})}const u=function(N){console.log("ANALIZ ",N),s.value=[],e.stage=1;let _=!1;N&&Object.keys(N).forEach(k=>{if(e.stage>3)return!1;k===String(e.myId)&&k&&(_=!0,e.stage=2,N[k].id2&&(i.value={id:N[k].id2,name:N[k].name2},e.stage=4)),N[k].id2==e.myId&&(_=!0,e.stage=3),e.stage>2&&!_&&(console.log("................ОБНОВИЛСЯ А Я ПРОПАЛ"),alert(),location.reload()),N[k].accept&&x(),s.value.push({id:k,name:N[k].name})})};function h(){e.onValue("g1/look").then(N=>{console.log("111",N),u(N)}),zn(()=>e.lookField,N=>u(N))}function d(){l(),e.setField("g1/look/"+e.myId,{name:e.myName})}function g(N){if(N.id==e.myId)return r.value=!0,setTimeout(()=>r.value=!1,1500),!1;l(),e.setField("g1/look/"+N.id,{name:N.name,id2:e.myId,name2:e.myName}).then(_=>{console.log("res",_),i.value={id:N.id,name:N.name},e.stage=3})}function v(N){l(),N&&i.value&&e.setField("g1/look/"+i.value.id,{name:i.value.name,id2:e.myId,name2:e.myName,accept:!0}).then(_=>{console.log("res",_)})}function x(){var k,V,A;let N=Date.now(),_=String(i.value.id);i.value.id>e.myId?_+="::"+e.myId:_=e.myId+"::"+_,console.log("gameLink",_),console.log("> >> > >> gotoStartgane"),e.setField("g1/play/"+e.myId,{id:(k=i.value)==null?void 0:k.id,name:(V=i.value)==null?void 0:V.name,game:_,date:N}),e.setField("g1/play/"+((A=i.value)==null?void 0:A.id),{id:e.myId,name:e.myName,game:_,date:N}),e.setField("g1/game/"+_,{game:"ВСЕ НАСТРОЙКИ ИГРЫ"}),setTimeout(()=>{var j;e.removeField("g1/look/"+((j=i.value)==null?void 0:j.id)),e.removeField("g1/look/"+e.myId),location.reload()},2e3)}return Jr(()=>{c()}),(N,_)=>{var k,V;return me(),Se(He,null,[_[32]||(_[32]=L("hr",null,null,-1)),_[33]||(_[33]=L("i",null,"::::::: Связывание :::::::",-1)),_[34]||(_[34]=L("br",null,null,-1)),ft(" "+Ve(We(e).myId)+" : "+Ve(We(e).myName)+" ",1),_[35]||(_[35]=L("br",null,null,-1)),ft(" stage:"+Ve(We(e).stage)+" ",1),_[36]||(_[36]=L("hr",null,null,-1)),We(e).stage===1?(me(),Se("div",Wy,[L("p",null," Привет, "+Ve(We(e).nickName||We(e).myName)+" ! ",1),L("p",null,[nf(L("input",{"onUpdate:modelValue":_[0]||(_[0]=A=>n.value=A),maxlength:"16",style:{"font-size":"larger",padding:"4px","text-align":"center"},onInput:_[1]||(_[1]=A=>a()),placeholder:"Сменить nickName"},null,544),[[Pd,n.value]])]),_[8]||(_[8]=L("div",{class:"red-notice"},"* тут можно поменять ваш Никнейм",-1)),s.value.length?(me(),Se("div",Hy,[_[5]||(_[5]=L("h3",null,"Список желающих играть:",-1)),(me(!0),Se(He,null,Vo(s.value,A=>(me(),Se("button",{class:"green-bt",key:A.id,onClick:j=>g(A)},Ve(A.name),9,Uy))),128)),_[6]||(_[6]=L("br",null,null,-1)),_[7]||(_[7]=L("br",null,null,-1))])):dt("",!0),L("button",{class:"red-bt",onClick:_[2]||(_[2]=A=>d())}," Зарегистрироваться в поиске "),_[9]||(_[9]=L("br",null,null,-1)),_[10]||(_[10]=L("br",null,null,-1))])):dt("",!0),We(e).stage===2?(me(),Se("div",$y,[_[14]||(_[14]=L("p",null,"Добавился в список, жду",-1)),s.value.length?(me(),Se("div",Vy,[_[11]||(_[11]=L("h3",null,"Список желающих играть:",-1)),(me(!0),Se(He,null,Vo(s.value,A=>(me(),Se("button",{class:"green-bt",key:A.id,onClick:j=>g(A)},Ve(A.name),9,jy))),128)),_[12]||(_[12]=L("br",null,null,-1)),_[13]||(_[13]=L("br",null,null,-1))])):dt("",!0),r.value?(me(),Se("div",Gy,"* нельзя выбирать себя")):dt("",!0)])):dt("",!0),We(e).stage===3?(me(),Se("div",Ky,[L("p",null,[_[15]||(_[15]=ft(" Жду игрока ")),L("b",null,Ve((k=i.value)==null?void 0:k.name),1),_[16]||(_[16]=ft(", поеп не откликнится "))]),_[17]||(_[17]=L("h3",null,"Список желающих играть:",-1))])):dt("",!0),We(e).stage===4&&((V=i.value)!=null&&V.id)?(me(),Se("div",zy,[_[18]||(_[18]=ft(" Вас выбрал игрок: ")),_[19]||(_[19]=L("br",null,null,-1)),_[20]||(_[20]=L("br",null,null,-1)),L("b",null,Ve(i.value.name),1),_[21]||(_[21]=L("br",null,null,-1)),_[22]||(_[22]=L("br",null,null,-1)),L("button",{class:"green-bt",onClick:_[3]||(_[3]=A=>v(!1))},"Отказаться"),L("button",{class:"green-bt",onClick:_[4]||(_[4]=A=>v(!0))},"Согласиться")])):dt("",!0),We(e).stage===5&&i.value?(me(),Se("div",qy,[_[23]||(_[23]=L("h3",null,"Играем",-1)),_[24]||(_[24]=ft(" с игроком ")),_[25]||(_[25]=L("br",null,null,-1)),L("b",null,Ve(i.value.name),1),_[26]||(_[26]=L("br",null,null,-1)),_[27]||(_[27]=L("br",null,null,-1)),_[28]||(_[28]=ft(" Контекс игры:")),_[29]||(_[29]=L("br",null,null,-1)),ft(" "+Ve(o.value)+" ",1),_[30]||(_[30]=L("br",null,null,-1)),_[31]||(_[31]=L("br",null,null,-1))])):dt("",!0),_[37]||(_[37]=L("br",null,null,-1)),_[38]||(_[38]=L("br",null,null,-1))],64)}}}),Qy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Jy={class:"game"},Xy={key:0},Zy={__name:"RockPaperSScissors",setup(t){const e=oh(),n=Ke(0);Ke("");const s=Ke(""),i=Ke("");e.gameId="g1";let r=e.getOpponent();return console.log("opponent",r),r?(setTimeout(()=>{n.value=2},100),i.value=r.name,s.value=r.id):setTimeout(()=>{n.value=1},1e3),(o,l)=>(me(),Se("div",Jy,[l[0]||(l[0]=L("h1",null,"♕",-1)),l[1]||(l[1]=L("h2",null,null,-1)),n.value===1?(me(),Se("div",Xy,[lt(Yy,{game:"g1"})])):dt("",!0)]))}},ev=Qy(Zy,[["__scopeId","data-v-0ee567a3"]]),tv={__name:"App",setup(t){const e=oh();let n=$h(ev);return Jr(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.userId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||"",e.userName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"")}),(s,i)=>(me(),fc(vf(We(n))))}},nv=Ld(),lh=kd(tv);lh.use(nv);lh.mount("#app");
