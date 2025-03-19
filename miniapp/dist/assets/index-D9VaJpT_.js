(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Or(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},sn=[],Ze=()=>{},oh=()=>!1,ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Dr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Mr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lh=Object.prototype.hasOwnProperty,z=(t,e)=>lh.call(t,e),D=Array.isArray,rn=t=>oi(t)==="[object Map]",ca=t=>oi(t)==="[object Set]",M=t=>typeof t=="function",he=t=>typeof t=="string",xt=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",ua=t=>(le(t)||M(t))&&M(t.then)&&M(t.catch),ha=Object.prototype.toString,oi=t=>ha.call(t),ah=t=>oi(t).slice(8,-1),fa=t=>oi(t)==="[object Object]",kr=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Dn=Or(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),li=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ch=/-(\w)/g,Le=li(t=>t.replace(ch,(e,n)=>n?n.toUpperCase():"")),uh=/\B([A-Z])/g,Yt=li(t=>t.replace(uh,"-$1").toLowerCase()),ai=li(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pi=li(t=>t?`on${ai(t)}`:""),Ct=(t,e)=>!Object.is(t,e),xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},da=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},tr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fo;const ci=()=>Fo||(Fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ui(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?ph(s):ui(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||le(t))return t}const hh=/;(?![^(]*\))/g,fh=/:([^]+)/,dh=/\/\*[^]*?\*\//g;function ph(t){const e={};return t.replace(dh,"").split(hh).forEach(n=>{if(n){const s=n.split(fh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fr(t){let e="";if(he(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=Fr(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gh=Or(_h);function pa(t){return!!t||t===""}const _a=t=>!!(t&&t.__v_isRef===!0),Lr=t=>he(t)?t:t==null?"":D(t)||le(t)&&(t.toString===ha||!M(t.toString))?_a(t)?Lr(t.value):JSON.stringify(t,ga,2):String(t),ga=(t,e)=>_a(e)?ga(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Oi(s,r)+" =>"]=i,n),{})}:ca(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oi(n))}:xt(e)?Oi(e):le(e)&&!D(e)&&!fa(e)?String(e):e,Oi=(t,e="")=>{var n;return xt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class ma{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ya(t){return new ma(t)}function va(){return Ee}function mh(t,e=!1){Ee&&Ee.cleanups.push(t)}let ne;const Di=new WeakSet;class Ca{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Di.has(this)&&(Di.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ea(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lo(this),wa(this);const e=ne,n=Ue;ne=this,Ue=!0;try{return this.fn()}finally{Sa(this),ne=e,Ue=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hr(e);this.deps=this.depsTail=void 0,Lo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Di.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nr(this)&&this.run()}get dirty(){return nr(this)}}let ba=0,Mn,kn;function Ea(t,e=!1){if(t.flags|=8,e){t.next=kn,kn=t;return}t.next=Mn,Mn=t}function Br(){ba++}function Wr(){if(--ba>0)return;if(kn){let e=kn;for(kn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mn;){let e=Mn;for(Mn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function wa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sa(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Hr(s),yh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function nr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ia(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ia(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zn))return;t.globalVersion=zn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!nr(t)){t.flags&=-3;return}const n=ne,s=Ue;ne=t,Ue=!0;try{wa(t);const i=t.fn(t._value);(e.version===0||Ct(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,Ue=s,Sa(t),t.flags&=-3}}function Hr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Hr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ue=!0;const Ta=[];function Rt(){Ta.push(Ue),Ue=!1}function At(){const t=Ta.pop();Ue=t===void 0?!0:t}function Lo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let zn=0;class vh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ur{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Ue||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new vh(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Na(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,zn++,this.notify(e)}notify(e){Br();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wr()}}}function Na(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Na(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ms=new WeakMap,Ut=Symbol(""),sr=Symbol(""),qn=Symbol("");function ve(t,e,n){if(Ue&&ne){let s=Ms.get(t);s||Ms.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ur),i.map=s,i.key=n),i.track()}}function ot(t,e,n,s,i,r){const o=Ms.get(t);if(!o){zn++;return}const l=a=>{a&&a.trigger()};if(Br(),e==="clear")o.forEach(l);else{const a=D(t),c=a&&kr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===qn||!xt(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(qn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Ut)),rn(t)&&l(o.get(sr)));break;case"delete":a||(l(o.get(Ut)),rn(t)&&l(o.get(sr)));break;case"set":rn(t)&&l(o.get(Ut));break}}Wr()}function Ch(t,e){const n=Ms.get(t);return n&&n.get(e)}function Jt(t){const e=j(t);return e===t?e:(ve(e,"iterate",qn),Ve(t)?e:e.map(we))}function Vr(t){return ve(t=j(t),"iterate",qn),t}const bh={__proto__:null,[Symbol.iterator](){return Mi(this,Symbol.iterator,we)},concat(...t){return Jt(this).concat(...t.map(e=>D(e)?Jt(e):e))},entries(){return Mi(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return it(this,"every",t,e,void 0,arguments)},filter(t,e){return it(this,"filter",t,e,n=>n.map(we),arguments)},find(t,e){return it(this,"find",t,e,we,arguments)},findIndex(t,e){return it(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return it(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return it(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return it(this,"forEach",t,e,void 0,arguments)},includes(...t){return ki(this,"includes",t)},indexOf(...t){return ki(this,"indexOf",t)},join(t){return Jt(this).join(t)},lastIndexOf(...t){return ki(this,"lastIndexOf",t)},map(t,e){return it(this,"map",t,e,void 0,arguments)},pop(){return In(this,"pop")},push(...t){return In(this,"push",t)},reduce(t,...e){return Bo(this,"reduce",t,e)},reduceRight(t,...e){return Bo(this,"reduceRight",t,e)},shift(){return In(this,"shift")},some(t,e){return it(this,"some",t,e,void 0,arguments)},splice(...t){return In(this,"splice",t)},toReversed(){return Jt(this).toReversed()},toSorted(t){return Jt(this).toSorted(t)},toSpliced(...t){return Jt(this).toSpliced(...t)},unshift(...t){return In(this,"unshift",t)},values(){return Mi(this,"values",we)}};function Mi(t,e,n){const s=Vr(t),i=s[e]();return s!==t&&!Ve(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Eh=Array.prototype;function it(t,e,n,s,i,r){const o=Vr(t),l=o!==t&&!Ve(t),a=o[e];if(a!==Eh[e]){const h=a.apply(t,r);return l?we(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,we(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Bo(t,e,n,s){const i=Vr(t);let r=n;return i!==t&&(Ve(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,we(l),a,t)}),i[e](r,...s)}function ki(t,e,n){const s=j(t);ve(s,"iterate",qn);const i=s[e](...n);return(i===-1||i===!1)&&Gr(n[0])?(n[0]=j(n[0]),s[e](...n)):i}function In(t,e,n=[]){Rt(),Br();const s=j(t)[e].apply(t,n);return Wr(),At(),s}const wh=Or("__proto__,__v_isRef,__isVue"),xa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xt));function Sh(t){xt(t)||(t=String(t));const e=j(this);return ve(e,"has",t),e.hasOwnProperty(t)}class Ra{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Mh:Da:r?Oa:Pa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=D(e);if(!i){let a;if(o&&(a=bh[n]))return a;if(n==="hasOwnProperty")return Sh}const l=Reflect.get(e,n,ce(e)?e:s);return(xt(n)?xa.has(n):wh(n))||(i||ve(e,"get",n),r)?l:ce(l)?o&&kr(n)?l:l.value:le(l)?i?Ma(l):hi(l):l}}class Aa extends Ra{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=jt(r);if(!Ve(s)&&!jt(s)&&(r=j(r),s=j(s)),!D(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=D(e)&&kr(n)?Number(n)<e.length:z(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===j(i)&&(o?Ct(s,r)&&ot(e,"set",n,s):ot(e,"add",n,s)),l}deleteProperty(e,n){const s=z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ot(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!xt(n)||!xa.has(n))&&ve(e,"has",n),s}ownKeys(e){return ve(e,"iterate",D(e)?"length":Ut),Reflect.ownKeys(e)}}class Ih extends Ra{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Th=new Aa,Nh=new Ih,xh=new Aa(!0);const ir=t=>t,bs=t=>Reflect.getPrototypeOf(t);function Rh(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=rn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?ir:e?rr:we;return!e&&ve(r,"iterate",a?sr:Ut),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ah(t,e){const n={get(i){const r=this.__v_raw,o=j(r),l=j(i);t||(Ct(i,l)&&ve(o,"get",i),ve(o,"get",l));const{has:a}=bs(o),c=e?ir:t?rr:we;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ve(j(i),"iterate",Ut),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=j(r),l=j(i);return t||(Ct(i,l)&&ve(o,"has",i),ve(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=j(l),c=e?ir:t?rr:we;return!t&&ve(a,"iterate",Ut),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Te(n,t?{add:Es("add"),set:Es("set"),delete:Es("delete"),clear:Es("clear")}:{add(i){!e&&!Ve(i)&&!jt(i)&&(i=j(i));const r=j(this);return bs(r).has.call(r,i)||(r.add(i),ot(r,"add",i,i)),this},set(i,r){!e&&!Ve(r)&&!jt(r)&&(r=j(r));const o=j(this),{has:l,get:a}=bs(o);let c=l.call(o,i);c||(i=j(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Ct(r,u)&&ot(o,"set",i,r):ot(o,"add",i,r),this},delete(i){const r=j(this),{has:o,get:l}=bs(r);let a=o.call(r,i);a||(i=j(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&ot(r,"delete",i,void 0),c},clear(){const i=j(this),r=i.size!==0,o=i.clear();return r&&ot(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Rh(i,t,e)}),n}function $r(t,e){const n=Ah(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(z(n,i)&&i in s?n:s,i,r)}const Ph={get:$r(!1,!1)},Oh={get:$r(!1,!0)},Dh={get:$r(!0,!1)};const Pa=new WeakMap,Oa=new WeakMap,Da=new WeakMap,Mh=new WeakMap;function kh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fh(t){return t.__v_skip||!Object.isExtensible(t)?0:kh(ah(t))}function hi(t){return jt(t)?t:jr(t,!1,Th,Ph,Pa)}function Lh(t){return jr(t,!1,xh,Oh,Oa)}function Ma(t){return jr(t,!0,Nh,Dh,Da)}function jr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Fh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Vt(t){return jt(t)?Vt(t.__v_raw):!!(t&&t.__v_isReactive)}function jt(t){return!!(t&&t.__v_isReadonly)}function Ve(t){return!!(t&&t.__v_isShallow)}function Gr(t){return t?!!t.__v_raw:!1}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Kr(t){return!z(t,"__v_skip")&&Object.isExtensible(t)&&da(t,"__v_skip",!0),t}const we=t=>le(t)?hi(t):t,rr=t=>le(t)?Ma(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function Bt(t){return ka(t,!1)}function Bh(t){return ka(t,!0)}function ka(t,e){return ce(t)?t:new Wh(t,e)}class Wh{constructor(e,n){this.dep=new Ur,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:j(e),this._value=n?e:we(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ve(e)||jt(e);e=s?e:j(e),Ct(e,n)&&(this._rawValue=e,this._value=s?e:we(e),this.dep.trigger())}}function Fn(t){return ce(t)?t.value:t}const Hh={get:(t,e,n)=>e==="__v_raw"?t:Fn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Fa(t){return Vt(t)?t:new Proxy(t,Hh)}function Uh(t){const e=D(t)?new Array(t.length):{};for(const n in t)e[n]=$h(t,n);return e}class Vh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ch(j(this._object),this._key)}}function $h(t,e,n){const s=t[e];return ce(s)?s:new Vh(t,e,n)}class jh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ur(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Ea(this,!0),!0}get value(){const e=this.dep.track();return Ia(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gh(t,e,n=!1){let s,i;return M(t)?s=t:(s=t.get,i=t.set),new jh(s,i,n)}const ws={},ks=new WeakMap;let kt;function Kh(t,e=!1,n=kt){if(n){let s=ks.get(n);s||ks.set(n,s=[]),s.push(t)}}function zh(t,e,n=X){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=R=>i?R:Ve(R)||i===!1||i===0?lt(R,1):lt(R);let u,h,d,_,b=!1,N=!1;if(ce(t)?(h=()=>t.value,b=Ve(t)):Vt(t)?(h=()=>c(t),b=!0):D(t)?(N=!0,b=t.some(R=>Vt(R)||Ve(R)),h=()=>t.map(R=>{if(ce(R))return R.value;if(Vt(R))return c(R);if(M(R))return a?a(R,2):R()})):M(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Rt();try{d()}finally{At()}}const R=kt;kt=u;try{return a?a(t,3,[_]):t(_)}finally{kt=R}}:h=Ze,e&&i){const R=h,K=i===!0?1/0:i;h=()=>lt(R(),K)}const B=va(),W=()=>{u.stop(),B&&B.active&&Mr(B.effects,u)};if(r&&e){const R=e;e=(...K)=>{R(...K),W()}}let q=N?new Array(t.length).fill(ws):ws;const Y=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(e){const K=u.run();if(i||b||(N?K.some((st,ye)=>Ct(st,q[ye])):Ct(K,q))){d&&d();const st=kt;kt=u;try{const ye=[K,q===ws?void 0:N&&q[0]===ws?[]:q,_];a?a(e,3,ye):e(...ye),q=K}finally{kt=st}}}else u.run()};return l&&l(Y),u=new Ca(h),u.scheduler=o?()=>o(Y,!1):Y,_=R=>Kh(R,!1,u),d=u.onStop=()=>{const R=ks.get(u);if(R){if(a)a(R,4);else for(const K of R)K();ks.delete(u)}},e?s?Y(!0):q=u.run():o?o(Y.bind(null,!0),!0):u.run(),W.pause=u.pause.bind(u),W.resume=u.resume.bind(u),W.stop=W,W}function lt(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))lt(t.value,e,n);else if(D(t))for(let s=0;s<t.length;s++)lt(t[s],e,n);else if(ca(t)||rn(t))t.forEach(s=>{lt(s,e,n)});else if(fa(t)){for(const s in t)lt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&lt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(t,e,n,s){try{return s?t(...s):t()}catch(i){fi(i,e,n)}}function tt(t,e,n,s){if(M(t)){const i=cs(t,e,n,s);return i&&ua(i)&&i.catch(r=>{fi(r,e,n)}),i}if(D(t)){const i=[];for(let r=0;r<t.length;r++)i.push(tt(t[r],e,n,s));return i}}function fi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Rt(),cs(r,null,10,[t,a,c]),At();return}}qh(t,n,i,s,o)}function qh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Se=[];let Qe=-1;const on=[];let yt=null,en=0;const La=Promise.resolve();let Fs=null;function Ba(t){const e=Fs||La;return t?e.then(this?t.bind(this):t):e}function Yh(t){let e=Qe+1,n=Se.length;for(;e<n;){const s=e+n>>>1,i=Se[s],r=Yn(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function zr(t){if(!(t.flags&1)){const e=Yn(t),n=Se[Se.length-1];!n||!(t.flags&2)&&e>=Yn(n)?Se.push(t):Se.splice(Yh(e),0,t),t.flags|=1,Wa()}}function Wa(){Fs||(Fs=La.then(Ua))}function Qh(t){D(t)?on.push(...t):yt&&t.id===-1?yt.splice(en+1,0,t):t.flags&1||(on.push(t),t.flags|=1),Wa()}function Wo(t,e,n=Qe+1){for(;n<Se.length;n++){const s=Se[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ha(t){if(on.length){const e=[...new Set(on)].sort((n,s)=>Yn(n)-Yn(s));if(on.length=0,yt){yt.push(...e);return}for(yt=e,en=0;en<yt.length;en++){const n=yt[en];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,en=0}}const Yn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ua(t){try{for(Qe=0;Qe<Se.length;Qe++){const e=Se[Qe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qe<Se.length;Qe++){const e=Se[Qe];e&&(e.flags&=-2)}Qe=-1,Se.length=0,Ha(),Fs=null,(Se.length||on.length)&&Ua()}}let xe=null,Va=null;function Ls(t){const e=xe;return xe=t,Va=t&&t.type.__scopeId||null,e}function Jh(t,e=xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Qo(-1);const r=Ls(e);let o;try{o=t(...i)}finally{Ls(r),s._d&&Qo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ho(t,e){if(xe===null)return t;const n=gi(xe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=X]=e[i];r&&(M(r)&&(r={mounted:r,updated:r}),r.deep&&lt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Dt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Rt(),tt(a,n,8,[t.el,l,t,e]),At())}}const Xh=Symbol("_vte"),Zh=t=>t.__isTeleport;function qr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,qr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $a(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Bs(t,e,n,s,i=!1){if(D(t)){t.forEach((b,N)=>Bs(b,e&&(D(e)?e[N]:e),n,s,i));return}if(Ln(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Bs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?gi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===X?l.refs={}:l.refs,h=l.setupState,d=j(h),_=h===X?()=>!1:b=>z(d,b);if(c!=null&&c!==a&&(he(c)?(u[c]=null,_(c)&&(h[c]=null)):ce(c)&&(c.value=null)),M(a))cs(a,l,12,[o,u]);else{const b=he(a),N=ce(a);if(b||N){const B=()=>{if(t.f){const W=b?_(a)?h[a]:u[a]:a.value;i?D(W)&&Mr(W,r):D(W)?W.includes(r)||W.push(r):b?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else b?(u[a]=o,_(a)&&(h[a]=o)):N&&(a.value=o,t.k&&(u[t.k]=o))};o?(B.id=-1,Me(B,n)):B()}}}ci().requestIdleCallback;ci().cancelIdleCallback;const Ln=t=>!!t.type.__asyncLoader,ja=t=>t.type.__isKeepAlive;function ef(t,e){Ga(t,"a",e)}function tf(t,e){Ga(t,"da",e)}function Ga(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(di(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ja(i.parent.vnode)&&nf(s,e,n,i),i=i.parent}}function nf(t,e,n,s){const i=di(e,t,s,!0);Ka(()=>{Mr(s[e],i)},n)}function di(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Rt();const l=us(n),a=tt(e,n,t,o);return l(),At(),a});return s?i.unshift(r):i.push(r),r}}const dt=t=>(e,n=me)=>{(!Jn||t==="sp")&&di(t,(...s)=>e(...s),n)},sf=dt("bm"),Yr=dt("m"),rf=dt("bu"),of=dt("u"),lf=dt("bum"),Ka=dt("um"),af=dt("sp"),cf=dt("rtg"),uf=dt("rtc");function hf(t,e=me){di("ec",t,e)}const ff="components",za=Symbol.for("v-ndc");function df(t){return he(t)?pf(ff,t,!1)||t:t||za}function pf(t,e,n=!0,s=!1){const i=xe||me;if(i){const r=i.type;{const l=nd(r,!1);if(l&&(l===e||l===Le(e)||l===ai(Le(e))))return r}const o=Uo(i[t]||r[t],e)||Uo(i.appContext[t],e);return!o&&s?r:o}}function Uo(t,e){return t&&(t[e]||t[Le(e)]||t[ai(Le(e))])}const or=t=>t?mc(t)?gi(t):or(t.parent):null,Bn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>or(t.parent),$root:t=>or(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ya(t),$forceUpdate:t=>t.f||(t.f=()=>{zr(t.update)}),$nextTick:t=>t.n||(t.n=Ba.bind(t.proxy)),$watch:t=>Lf.bind(t)}),Fi=(t,e)=>t!==X&&!t.__isScriptSetup&&z(t,e),_f={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Fi(s,e))return o[e]=1,s[e];if(i!==X&&z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&z(c,e))return o[e]=3,r[e];if(n!==X&&z(n,e))return o[e]=4,n[e];lr&&(o[e]=0)}}const u=Bn[e];let h,d;if(u)return e==="$attrs"&&ve(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==X&&z(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,z(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Fi(i,e)?(i[e]=n,!0):s!==X&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==X&&z(t,o)||Fi(e,o)||(l=r[0])&&z(l,o)||z(s,o)||z(Bn,o)||z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vo(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lr=!0;function gf(t){const e=Ya(t),n=t.proxy,s=t.ctx;lr=!1,e.beforeCreate&&$o(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:b,activated:N,deactivated:B,beforeDestroy:W,beforeUnmount:q,destroyed:Y,unmounted:R,render:K,renderTracked:st,renderTriggered:ye,errorCaptured:U,serverPrefetch:$,expose:ue,inheritAttrs:Fe,components:je,directives:gt,filters:bn}=e;if(c&&mf(c,s,null),o)for(const H in o){const ee=o[H];M(ee)&&(s[H]=ee.bind(n))}if(i){const H=i.call(n,n);le(H)&&(t.data=hi(H))}if(lr=!0,r)for(const H in r){const ee=r[H],Pt=M(ee)?ee.bind(n,n):M(ee.get)?ee.get.bind(n,n):Ze,vs=!M(ee)&&M(ee.set)?ee.set.bind(n):Ze,Ot=vc({get:Pt,set:vs});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Ge=>Ot.value=Ge})}if(l)for(const H in l)qa(l[H],s,n,H);if(a){const H=M(a)?a.call(n):a;Reflect.ownKeys(H).forEach(ee=>{wf(ee,H[ee])})}u&&$o(u,t,"c");function ae(H,ee){D(ee)?ee.forEach(Pt=>H(Pt.bind(n))):ee&&H(ee.bind(n))}if(ae(sf,h),ae(Yr,d),ae(rf,_),ae(of,b),ae(ef,N),ae(tf,B),ae(hf,U),ae(uf,st),ae(cf,ye),ae(lf,q),ae(Ka,R),ae(af,$),D(ue))if(ue.length){const H=t.exposed||(t.exposed={});ue.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>n[ee],set:Pt=>n[ee]=Pt})})}else t.exposed||(t.exposed={});K&&t.render===Ze&&(t.render=K),Fe!=null&&(t.inheritAttrs=Fe),je&&(t.components=je),gt&&(t.directives=gt),$&&$a(t)}function mf(t,e,n=Ze){D(t)&&(t=ar(t));for(const s in t){const i=t[s];let r;le(i)?"default"in i?r=Wn(i.from||s,i.default,!0):r=Wn(i.from||s):r=Wn(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function $o(t,e,n){tt(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qa(t,e,n,s){let i=s.includes(".")?cc(n,s):()=>n[s];if(he(t)){const r=e[t];M(r)&&Rs(i,r)}else if(M(t))Rs(i,t.bind(n));else if(le(t))if(D(t))t.forEach(r=>qa(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&Rs(i,r,t)}}function Ya(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ws(a,c,o,!0)),Ws(a,e,o)),le(e)&&r.set(e,a),a}function Ws(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ws(t,r,n,!0),i&&i.forEach(o=>Ws(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=yf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yf={data:jo,props:Go,emits:Go,methods:On,computed:On,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:On,directives:On,watch:Cf,provide:jo,inject:vf};function jo(t,e){return e?t?function(){return Te(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function vf(t,e){return On(ar(t),ar(e))}function ar(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function On(t,e){return t?Te(Object.create(null),t,e):e}function Go(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:Te(Object.create(null),Vo(t),Vo(e??{})):e}function Cf(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=be(t[s],e[s]);return n}function Qa(){return{app:null,config:{isNativeTag:oh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function Ef(t,e){return function(s,i=null){M(s)||(s=Te({},s)),i!=null&&!le(i)&&(i=null);const r=Qa(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:bf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:id,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&M(u.install)?(o.add(u),u.install(c,...h)):M(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||et(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,gi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(tt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=$t;$t=c;try{return u()}finally{$t=h}}};return c}}let $t=null;function wf(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function Wn(t,e,n=!1){const s=me||xe;if(s||$t){const i=$t?$t._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}function Sf(){return!!(me||xe||$t)}const Ja={},Xa=()=>Object.create(Ja),Za=t=>Object.getPrototypeOf(t)===Ja;function If(t,e,n,s=!1){const i={},r=Xa();t.propsDefaults=Object.create(null),ec(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Lh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Tf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(pi(t.emitsOptions,d))continue;const _=e[d];if(a)if(z(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const b=Le(d);i[b]=cr(a,l,b,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{ec(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!z(e,h)&&((u=Yt(h))===h||!z(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=cr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!z(e,h))&&(delete r[h],c=!0)}c&&ot(t.attrs,"set","")}function ec(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Dn(a))continue;const c=e[a];let u;i&&z(i,u=Le(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:pi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||X;for(let u=0;u<r.length;u++){const h=r[u];n[h]=cr(i,a,h,c[h],t,!z(c,h))}}return o}function cr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=z(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=us(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Yt(n))&&(s=!0))}return s}const Nf=new WeakMap;function tc(t,e,n=!1){const s=n?Nf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,_]=tc(h,e,!0);Te(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return le(t)&&s.set(t,sn),sn;if(D(r))for(let u=0;u<r.length;u++){const h=Le(r[u]);Ko(h)&&(o[h]=X)}else if(r)for(const u in r){const h=Le(u);if(Ko(h)){const d=r[u],_=o[h]=D(d)||M(d)?{type:d}:Te({},d),b=_.type;let N=!1,B=!0;if(D(b))for(let W=0;W<b.length;++W){const q=b[W],Y=M(q)&&q.name;if(Y==="Boolean"){N=!0;break}else Y==="String"&&(B=!1)}else N=M(b)&&b.name==="Boolean";_[0]=N,_[1]=B,(N||z(_,"default"))&&l.push(h)}}const c=[o,l];return le(t)&&s.set(t,c),c}function Ko(t){return t[0]!=="$"&&!Dn(t)}const nc=t=>t[0]==="_"||t==="$stable",Qr=t=>D(t)?t.map(Xe):[Xe(t)],xf=(t,e,n)=>{if(e._n)return e;const s=Jh((...i)=>Qr(e(...i)),n);return s._c=!1,s},sc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(nc(i))continue;const r=t[i];if(M(r))e[i]=xf(i,r,s);else if(r!=null){const o=Qr(r);e[i]=()=>o}}},ic=(t,e)=>{const n=Qr(e);t.slots.default=()=>n},rc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Rf=(t,e,n)=>{const s=t.slots=Xa();if(t.vnode.shapeFlag&32){const i=e._;i?(rc(s,e,n),n&&da(s,"_",i,!0)):sc(e,s)}else e&&ic(t,e)},Af=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=X;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:rc(i,e,n):(r=!e.$stable,sc(e,i)),o=e}else e&&(ic(t,e),o={default:1});if(r)for(const l in i)!nc(l)&&o[l]==null&&delete i[l]},Me=jf;function Pf(t){return Of(t)}function Of(t,e){const n=ci();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Ze,insertStaticContent:b}=t,N=(f,p,g,v=null,m=null,y=null,I=void 0,S=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!Tn(f,p)&&(v=Cs(f),Ge(f,m,y,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:C,ref:A,shapeFlag:T}=p;switch(C){case _i:B(f,p,g,v);break;case Gt:W(f,p,g,v);break;case Bi:f==null&&q(p,g,v,I);break;case Je:je(f,p,g,v,m,y,I,S,w);break;default:T&1?K(f,p,g,v,m,y,I,S,w):T&6?gt(f,p,g,v,m,y,I,S,w):(T&64||T&128)&&C.process(f,p,g,v,m,y,I,S,w,wn)}A!=null&&m&&Bs(A,f&&f.ref,y,p||f,!p)},B=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},W=(f,p,g,v)=>{f==null?s(p.el=a(p.children||""),g,v):p.el=f.el},q=(f,p,g,v)=>{[f.el,f.anchor]=b(f.children,p,g,v,f.el,f.anchor)},Y=({el:f,anchor:p},g,v)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,v),f=m;s(p,g,v)},R=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},K=(f,p,g,v,m,y,I,S,w)=>{p.type==="svg"?I="svg":p.type==="math"&&(I="mathml"),f==null?st(p,g,v,m,y,I,S,w):$(f,p,m,y,I,S,w)},st=(f,p,g,v,m,y,I,S)=>{let w,C;const{props:A,shapeFlag:T,transition:x,dirs:O}=f;if(w=f.el=o(f.type,y,A&&A.is,A),T&8?u(w,f.children):T&16&&U(f.children,w,null,v,m,Li(f,y),I,S),O&&Dt(f,null,v,"created"),ye(w,f,f.scopeId,I,v),A){for(const te in A)te!=="value"&&!Dn(te)&&r(w,te,null,A[te],y,v);"value"in A&&r(w,"value",null,A.value,y),(C=A.onVnodeBeforeMount)&&Ye(C,v,f)}O&&Dt(f,null,v,"beforeMount");const V=Df(m,x);V&&x.beforeEnter(w),s(w,p,g),((C=A&&A.onVnodeMounted)||V||O)&&Me(()=>{C&&Ye(C,v,f),V&&x.enter(w),O&&Dt(f,null,v,"mounted")},m)},ye=(f,p,g,v,m)=>{if(g&&_(f,g),v)for(let y=0;y<v.length;y++)_(f,v[y]);if(m){let y=m.subTree;if(p===y||hc(y.type)&&(y.ssContent===p||y.ssFallback===p)){const I=m.vnode;ye(f,I,I.scopeId,I.slotScopeIds,m.parent)}}},U=(f,p,g,v,m,y,I,S,w=0)=>{for(let C=w;C<f.length;C++){const A=f[C]=S?vt(f[C]):Xe(f[C]);N(null,A,p,g,v,m,y,I,S)}},$=(f,p,g,v,m,y,I)=>{const S=p.el=f.el;let{patchFlag:w,dynamicChildren:C,dirs:A}=p;w|=f.patchFlag&16;const T=f.props||X,x=p.props||X;let O;if(g&&Mt(g,!1),(O=x.onVnodeBeforeUpdate)&&Ye(O,g,p,f),A&&Dt(p,f,g,"beforeUpdate"),g&&Mt(g,!0),(T.innerHTML&&x.innerHTML==null||T.textContent&&x.textContent==null)&&u(S,""),C?ue(f.dynamicChildren,C,S,g,v,Li(p,m),y):I||ee(f,p,S,null,g,v,Li(p,m),y,!1),w>0){if(w&16)Fe(S,T,x,g,m);else if(w&2&&T.class!==x.class&&r(S,"class",null,x.class,m),w&4&&r(S,"style",T.style,x.style,m),w&8){const V=p.dynamicProps;for(let te=0;te<V.length;te++){const Q=V[te],Oe=T[Q],Ne=x[Q];(Ne!==Oe||Q==="value")&&r(S,Q,Oe,Ne,m,g)}}w&1&&f.children!==p.children&&u(S,p.children)}else!I&&C==null&&Fe(S,T,x,g,m);((O=x.onVnodeUpdated)||A)&&Me(()=>{O&&Ye(O,g,p,f),A&&Dt(p,f,g,"updated")},v)},ue=(f,p,g,v,m,y,I)=>{for(let S=0;S<p.length;S++){const w=f[S],C=p[S],A=w.el&&(w.type===Je||!Tn(w,C)||w.shapeFlag&70)?h(w.el):g;N(w,C,A,null,v,m,y,I,!0)}},Fe=(f,p,g,v,m)=>{if(p!==g){if(p!==X)for(const y in p)!Dn(y)&&!(y in g)&&r(f,y,p[y],null,m,v);for(const y in g){if(Dn(y))continue;const I=g[y],S=p[y];I!==S&&y!=="value"&&r(f,y,S,I,m,v)}"value"in g&&r(f,"value",p.value,g.value,m)}},je=(f,p,g,v,m,y,I,S,w)=>{const C=p.el=f?f.el:l(""),A=p.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:x,slotScopeIds:O}=p;O&&(S=S?S.concat(O):O),f==null?(s(C,g,v),s(A,g,v),U(p.children||[],g,A,m,y,I,S,w)):T>0&&T&64&&x&&f.dynamicChildren?(ue(f.dynamicChildren,x,g,m,y,I,S),(p.key!=null||m&&p===m.subTree)&&oc(f,p,!0)):ee(f,p,g,A,m,y,I,S,w)},gt=(f,p,g,v,m,y,I,S,w)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?m.ctx.activate(p,g,v,I,w):bn(p,g,v,m,y,I,w):ys(f,p,w)},bn=(f,p,g,v,m,y,I)=>{const S=f.component=Jf(f,v,m);if(ja(f)&&(S.ctx.renderer=wn),Xf(S,!1,I),S.asyncDep){if(m&&m.registerDep(S,ae,I),!f.el){const w=S.subTree=et(Gt);W(null,w,p,g)}}else ae(S,f,p,g,m,y,I)},ys=(f,p,g)=>{const v=p.component=f.component;if(Vf(f,p,g))if(v.asyncDep&&!v.asyncResolved){H(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},ae=(f,p,g,v,m,y,I)=>{const S=()=>{if(f.isMounted){let{next:T,bu:x,u:O,parent:V,vnode:te}=f;{const ze=lc(f);if(ze){T&&(T.el=te.el,H(f,T,I)),ze.asyncDep.then(()=>{f.isUnmounted||S()});return}}let Q=T,Oe;Mt(f,!1),T?(T.el=te.el,H(f,T,I)):T=te,x&&xs(x),(Oe=T.props&&T.props.onVnodeBeforeUpdate)&&Ye(Oe,V,T,te),Mt(f,!0);const Ne=qo(f),Ke=f.subTree;f.subTree=Ne,N(Ke,Ne,h(Ke.el),Cs(Ke),f,m,y),T.el=Ne.el,Q===null&&$f(f,Ne.el),O&&Me(O,m),(Oe=T.props&&T.props.onVnodeUpdated)&&Me(()=>Ye(Oe,V,T,te),m)}else{let T;const{el:x,props:O}=p,{bm:V,m:te,parent:Q,root:Oe,type:Ne}=f,Ke=Ln(p);Mt(f,!1),V&&xs(V),!Ke&&(T=O&&O.onVnodeBeforeMount)&&Ye(T,Q,p),Mt(f,!0);{Oe.ce&&Oe.ce._injectChildStyle(Ne);const ze=f.subTree=qo(f);N(null,ze,g,v,f,m,y),p.el=ze.el}if(te&&Me(te,m),!Ke&&(T=O&&O.onVnodeMounted)){const ze=p;Me(()=>Ye(T,Q,ze),m)}(p.shapeFlag&256||Q&&Ln(Q.vnode)&&Q.vnode.shapeFlag&256)&&f.a&&Me(f.a,m),f.isMounted=!0,p=g=v=null}};f.scope.on();const w=f.effect=new Ca(S);f.scope.off();const C=f.update=w.run.bind(w),A=f.job=w.runIfDirty.bind(w);A.i=f,A.id=f.uid,w.scheduler=()=>zr(A),Mt(f,!0),C()},H=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Tf(f,p.props,v,g),Af(f,p.children,g),Rt(),Wo(f),At()},ee=(f,p,g,v,m,y,I,S,w=!1)=>{const C=f&&f.children,A=f?f.shapeFlag:0,T=p.children,{patchFlag:x,shapeFlag:O}=p;if(x>0){if(x&128){vs(C,T,g,v,m,y,I,S,w);return}else if(x&256){Pt(C,T,g,v,m,y,I,S,w);return}}O&8?(A&16&&En(C,m,y),T!==C&&u(g,T)):A&16?O&16?vs(C,T,g,v,m,y,I,S,w):En(C,m,y,!0):(A&8&&u(g,""),O&16&&U(T,g,v,m,y,I,S,w))},Pt=(f,p,g,v,m,y,I,S,w)=>{f=f||sn,p=p||sn;const C=f.length,A=p.length,T=Math.min(C,A);let x;for(x=0;x<T;x++){const O=p[x]=w?vt(p[x]):Xe(p[x]);N(f[x],O,g,null,m,y,I,S,w)}C>A?En(f,m,y,!0,!1,T):U(p,g,v,m,y,I,S,w,T)},vs=(f,p,g,v,m,y,I,S,w)=>{let C=0;const A=p.length;let T=f.length-1,x=A-1;for(;C<=T&&C<=x;){const O=f[C],V=p[C]=w?vt(p[C]):Xe(p[C]);if(Tn(O,V))N(O,V,g,null,m,y,I,S,w);else break;C++}for(;C<=T&&C<=x;){const O=f[T],V=p[x]=w?vt(p[x]):Xe(p[x]);if(Tn(O,V))N(O,V,g,null,m,y,I,S,w);else break;T--,x--}if(C>T){if(C<=x){const O=x+1,V=O<A?p[O].el:v;for(;C<=x;)N(null,p[C]=w?vt(p[C]):Xe(p[C]),g,V,m,y,I,S,w),C++}}else if(C>x)for(;C<=T;)Ge(f[C],m,y,!0),C++;else{const O=C,V=C,te=new Map;for(C=V;C<=x;C++){const De=p[C]=w?vt(p[C]):Xe(p[C]);De.key!=null&&te.set(De.key,C)}let Q,Oe=0;const Ne=x-V+1;let Ke=!1,ze=0;const Sn=new Array(Ne);for(C=0;C<Ne;C++)Sn[C]=0;for(C=O;C<=T;C++){const De=f[C];if(Oe>=Ne){Ge(De,m,y,!0);continue}let qe;if(De.key!=null)qe=te.get(De.key);else for(Q=V;Q<=x;Q++)if(Sn[Q-V]===0&&Tn(De,p[Q])){qe=Q;break}qe===void 0?Ge(De,m,y,!0):(Sn[qe-V]=C+1,qe>=ze?ze=qe:Ke=!0,N(De,p[qe],g,null,m,y,I,S,w),Oe++)}const Mo=Ke?Mf(Sn):sn;for(Q=Mo.length-1,C=Ne-1;C>=0;C--){const De=V+C,qe=p[De],ko=De+1<A?p[De+1].el:v;Sn[C]===0?N(null,qe,g,ko,m,y,I,S,w):Ke&&(Q<0||C!==Mo[Q]?Ot(qe,g,ko,2):Q--)}}},Ot=(f,p,g,v,m=null)=>{const{el:y,type:I,transition:S,children:w,shapeFlag:C}=f;if(C&6){Ot(f.component.subTree,p,g,v);return}if(C&128){f.suspense.move(p,g,v);return}if(C&64){I.move(f,p,g,wn);return}if(I===Je){s(y,p,g);for(let T=0;T<w.length;T++)Ot(w[T],p,g,v);s(f.anchor,p,g);return}if(I===Bi){Y(f,p,g);return}if(v!==2&&C&1&&S)if(v===0)S.beforeEnter(y),s(y,p,g),Me(()=>S.enter(y),m);else{const{leave:T,delayLeave:x,afterLeave:O}=S,V=()=>s(y,p,g),te=()=>{T(y,()=>{V(),O&&O()})};x?x(y,V,te):te()}else s(y,p,g)},Ge=(f,p,g,v=!1,m=!1)=>{const{type:y,props:I,ref:S,children:w,dynamicChildren:C,shapeFlag:A,patchFlag:T,dirs:x,cacheIndex:O}=f;if(T===-2&&(m=!1),S!=null&&Bs(S,null,g,f,!0),O!=null&&(p.renderCache[O]=void 0),A&256){p.ctx.deactivate(f);return}const V=A&1&&x,te=!Ln(f);let Q;if(te&&(Q=I&&I.onVnodeBeforeUnmount)&&Ye(Q,p,f),A&6)rh(f.component,g,v);else{if(A&128){f.suspense.unmount(g,v);return}V&&Dt(f,null,p,"beforeUnmount"),A&64?f.type.remove(f,p,g,wn,v):C&&!C.hasOnce&&(y!==Je||T>0&&T&64)?En(C,p,g,!1,!0):(y===Je&&T&384||!m&&A&16)&&En(w,p,g),v&&Oo(f)}(te&&(Q=I&&I.onVnodeUnmounted)||V)&&Me(()=>{Q&&Ye(Q,p,f),V&&Dt(f,null,p,"unmounted")},g)},Oo=f=>{const{type:p,el:g,anchor:v,transition:m}=f;if(p===Je){ih(g,v);return}if(p===Bi){R(f);return}const y=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:I,delayLeave:S}=m,w=()=>I(g,y);S?S(f.el,y,w):w()}else y()},ih=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},rh=(f,p,g)=>{const{bum:v,scope:m,job:y,subTree:I,um:S,m:w,a:C}=f;zo(w),zo(C),v&&xs(v),m.stop(),y&&(y.flags|=8,Ge(I,f,p,g)),S&&Me(S,p),Me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},En=(f,p,g,v=!1,m=!1,y=0)=>{for(let I=y;I<f.length;I++)Ge(f[I],p,g,v,m)},Cs=f=>{if(f.shapeFlag&6)return Cs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[Xh];return g?d(g):p};let Ai=!1;const Do=(f,p,g)=>{f==null?p._vnode&&Ge(p._vnode,null,null,!0):N(p._vnode||null,f,p,null,null,null,g),p._vnode=f,Ai||(Ai=!0,Wo(),Ha(),Ai=!1)},wn={p:N,um:Ge,m:Ot,r:Oo,mt:bn,mc:U,pc:ee,pbc:ue,n:Cs,o:t};return{render:Do,hydrate:void 0,createApp:Ef(Do)}}function Li({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Df(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function oc(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=vt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&oc(o,l)),l.type===_i&&(l.el=o.el)}}function Mf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function lc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lc(e)}function zo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const kf=Symbol.for("v-scx"),Ff=()=>Wn(kf);function Rs(t,e,n){return ac(t,e,n)}function ac(t,e,n=X){const{immediate:s,deep:i,flush:r,once:o}=n,l=Te({},n),a=e&&s||!e&&r!=="post";let c;if(Jn){if(r==="sync"){const _=Ff();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=Ze,_.resume=Ze,_.pause=Ze,_}}const u=me;l.call=(_,b,N)=>tt(_,u,b,N);let h=!1;r==="post"?l.scheduler=_=>{Me(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,b)=>{b?_():zr(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=zh(t,e,l);return Jn&&(c?c.push(d):a&&d()),d}function Lf(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?cc(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=us(this),l=ac(i,r.bind(s),n);return o(),l}function cc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Bf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Le(e)}Modifiers`]||t[`${Yt(e)}Modifiers`];function Wf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let i=n;const r=e.startsWith("update:"),o=r&&Bf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(tr)));let l,a=s[l=Pi(e)]||s[l=Pi(Le(e))];!a&&r&&(a=s[l=Pi(Yt(e))]),a&&tt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tt(c,t,6,i)}}function uc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=uc(c,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(le(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):Te(o,r),le(t)&&s.set(t,o),o)}function pi(t,e){return!t||!ri(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Yt(e))||z(t,e))}function qo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:b,inheritAttrs:N}=t,B=Ls(t);let W,q;try{if(n.shapeFlag&4){const R=i||s,K=R;W=Xe(c.call(K,R,u,h,_,d,b)),q=l}else{const R=e;W=Xe(R.length>1?R(h,{attrs:l,slots:o,emit:a}):R(h,null)),q=e.props?l:Hf(l)}}catch(R){Hn.length=0,fi(R,t,1),W=et(Gt)}let Y=W;if(q&&N!==!1){const R=Object.keys(q),{shapeFlag:K}=Y;R.length&&K&7&&(r&&R.some(Dr)&&(q=Uf(q,r)),Y=hn(Y,q,!1,!0))}return n.dirs&&(Y=hn(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&qr(Y,n.transition),W=Y,Ls(B),W}const Hf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ri(n))&&((e||(e={}))[n]=t[n]);return e},Uf=(t,e)=>{const n={};for(const s in t)(!Dr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Yo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!pi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Yo(s,o,c):!0:!!o;return!1}function Yo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!pi(n,r))return!0}return!1}function $f({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const hc=t=>t.__isSuspense;function jf(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Qh(t)}const Je=Symbol.for("v-fgt"),_i=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),Bi=Symbol.for("v-stc"),Hn=[];let ke=null;function ln(t=!1){Hn.push(ke=t?null:[])}function Gf(){Hn.pop(),ke=Hn[Hn.length-1]||null}let Qn=1;function Qo(t,e=!1){Qn+=t,t<0&&ke&&e&&(ke.hasOnce=!0)}function fc(t){return t.dynamicChildren=Qn>0?ke||sn:null,Gf(),Qn>0&&ke&&ke.push(t),t}function As(t,e,n,s,i,r){return fc(J(t,e,n,s,i,r,!0))}function dc(t,e,n,s,i){return fc(et(t,e,n,s,i,!0))}function pc(t){return t?t.__v_isVNode===!0:!1}function Tn(t,e){return t.type===e.type&&t.key===e.key}const _c=({key:t})=>t??null,Ps=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||ce(t)||M(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function J(t,e=null,n=null,s=0,i=null,r=t===Je?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_c(e),ref:e&&Ps(e),scopeId:Va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xe};return l?(Jr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),Qn>0&&!o&&ke&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ke.push(a),a}const et=Kf;function Kf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===za)&&(t=Gt),pc(t)){const l=hn(t,e,!0);return n&&Jr(l,n),Qn>0&&!r&&ke&&(l.shapeFlag&6?ke[ke.indexOf(t)]=l:ke.push(l)),l.patchFlag=-2,l}if(sd(t)&&(t=t.__vccOpts),e){e=zf(e);let{class:l,style:a}=e;l&&!he(l)&&(e.class=Fr(l)),le(a)&&(Gr(a)&&!D(a)&&(a=Te({},a)),e.style=ui(a))}const o=he(t)?1:hc(t)?128:Zh(t)?64:le(t)?4:M(t)?2:0;return J(t,e,n,s,i,o,r,!0)}function zf(t){return t?Gr(t)||Za(t)?Te({},t):t:null}function hn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?qf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&_c(c),ref:e&&e.ref?n&&r?D(r)?r.concat(Ps(e)):[r,Ps(e)]:Ps(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&qr(u,a.clone(u)),u}function gc(t=" ",e=0){return et(_i,null,t,e)}function Jo(t="",e=!1){return e?(ln(),dc(Gt,null,t)):et(Gt,null,t)}function Xe(t){return t==null||typeof t=="boolean"?et(Gt):D(t)?et(Je,null,t.slice()):pc(t)?vt(t):et(_i,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function Jr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Jr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Za(e)?e._ctx=xe:i===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),s&64?(n=16,e=[gc(e)]):n=8);t.children=e,t.shapeFlag|=n}function qf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Fr([e.class,s.class]));else if(i==="style")e.style=ui([e.style,s.style]);else if(ri(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ye(t,e,n,s=null){tt(t,e,7,[n,s])}const Yf=Qa();let Qf=0;function Jf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yf,r={uid:Qf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ma(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tc(s,i),emitsOptions:uc(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wf.bind(null,r),t.ce&&t.ce(r),r}let me=null,Hs,ur;{const t=ci(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Hs=e("__VUE_INSTANCE_SETTERS__",n=>me=n),ur=e("__VUE_SSR_SETTERS__",n=>Jn=n)}const us=t=>{const e=me;return Hs(t),t.scope.on(),()=>{t.scope.off(),Hs(e)}},Xo=()=>{me&&me.scope.off(),Hs(null)};function mc(t){return t.vnode.shapeFlag&4}let Jn=!1;function Xf(t,e=!1,n=!1){e&&ur(e);const{props:s,children:i}=t.vnode,r=mc(t);If(t,s,r,e),Rf(t,i,n);const o=r?Zf(t,e):void 0;return e&&ur(!1),o}function Zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_f);const{setup:s}=n;if(s){Rt();const i=t.setupContext=s.length>1?td(t):null,r=us(t),o=cs(s,t,0,[t.props,i]),l=ua(o);if(At(),r(),(l||t.sp)&&!Ln(t)&&$a(t),l){if(o.then(Xo,Xo),e)return o.then(a=>{Zo(t,a)}).catch(a=>{fi(a,t,0)});t.asyncDep=o}else Zo(t,o)}else yc(t)}function Zo(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Fa(e)),yc(t)}function yc(t,e,n){const s=t.type;t.render||(t.render=s.render||Ze);{const i=us(t);Rt();try{gf(t)}finally{At(),i()}}}const ed={get(t,e){return ve(t,"get",""),t[e]}};function td(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ed),slots:t.slots,emit:t.emit,expose:e}}function gi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fa(Kr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bn)return Bn[n](t)},has(e,n){return n in e||n in Bn}})):t.proxy}function nd(t,e=!0){return M(t)?t.displayName||t.name:t.name||e&&t.__name}function sd(t){return M(t)&&"__vccOpts"in t}const vc=(t,e)=>Gh(t,e,Jn),id="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hr;const el=typeof window<"u"&&window.trustedTypes;if(el)try{hr=el.createPolicy("vue",{createHTML:t=>t})}catch{}const Cc=hr?t=>hr.createHTML(t):t=>t,rd="http://www.w3.org/2000/svg",od="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,tl=rt&&rt.createElement("template"),ld={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?rt.createElementNS(rd,t):e==="mathml"?rt.createElementNS(od,t):n?rt.createElement(t,{is:n}):rt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rt.createTextNode(t),createComment:t=>rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{tl.innerHTML=Cc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=tl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ad=Symbol("_vtc");function cd(t,e,n){const s=t[ad];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nl=Symbol("_vod"),ud=Symbol("_vsh"),hd=Symbol(""),fd=/(^|;)\s*display\s*:/;function dd(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Os(s,l,"")}else for(const o in e)n[o]==null&&Os(s,o,"");for(const o in n)o==="display"&&(r=!0),Os(s,o,n[o])}else if(i){if(e!==n){const o=s[hd];o&&(n+=";"+o),s.cssText=n,r=fd.test(n)}}else e&&t.removeAttribute("style");nl in t&&(t[nl]=r?s.display:"",t[ud]&&(s.display="none"))}const sl=/\s*!important$/;function Os(t,e,n){if(D(n))n.forEach(s=>Os(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pd(t,e);sl.test(n)?t.setProperty(Yt(s),n.replace(sl,""),"important"):t[s]=n}}const il=["Webkit","Moz","ms"],Wi={};function pd(t,e){const n=Wi[e];if(n)return n;let s=Le(e);if(s!=="filter"&&s in t)return Wi[e]=s;s=ai(s);for(let i=0;i<il.length;i++){const r=il[i]+s;if(r in t)return Wi[e]=r}return e}const rl="http://www.w3.org/1999/xlink";function ol(t,e,n,s,i,r=gh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rl,e.slice(6,e.length)):t.setAttributeNS(rl,e,n):n==null||r&&!pa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":xt(n)?String(n):n)}function ll(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=pa(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function tn(t,e,n,s){t.addEventListener(e,n,s)}function _d(t,e,n,s){t.removeEventListener(e,n,s)}const al=Symbol("_vei");function gd(t,e,n,s,i=null){const r=t[al]||(t[al]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=md(e);if(s){const c=r[e]=Cd(s,i);tn(t,l,c,a)}else o&&(_d(t,l,o,a),r[e]=void 0)}}const cl=/(?:Once|Passive|Capture)$/;function md(t){let e;if(cl.test(t)){e={};let s;for(;s=t.match(cl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yt(t.slice(2)),e]}let Hi=0;const yd=Promise.resolve(),vd=()=>Hi||(yd.then(()=>Hi=0),Hi=Date.now());function Cd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(bd(s,n.value),e,5,[s])};return n.value=t,n.attached=vd(),n}function bd(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ul=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ed=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?cd(t,s,o):e==="style"?dd(t,n,s):ri(e)?Dr(e)||gd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wd(t,e,s,o))?(ll(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ol(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(s))?ll(t,Le(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ol(t,e,s,o))};function wd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ul(e)&&M(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ul(e)&&he(n)?!1:e in t}const hl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>xs(e,n):e};function Sd(t){t.target.composing=!0}function fl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ui=Symbol("_assign"),dl={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Ui]=hl(i);const r=s||i.props&&i.props.type==="number";tn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=tr(l)),t[Ui](l)}),n&&tn(t,"change",()=>{t.value=t.value.trim()}),e||(tn(t,"compositionstart",Sd),tn(t,"compositionend",fl),tn(t,"change",fl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Ui]=hl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?tr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Id=Te({patchProp:Ed},ld);let pl;function Td(){return pl||(pl=Pf(Id))}const Nd=(...t)=>{const e=Td().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Rd(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,xd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function xd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rd(t){return he(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bc;const mi=t=>bc=t,Ec=Symbol();function fr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Un||(Un={}));function Ad(){const t=ya(!0),e=t.run(()=>Bt({}));let n=[],s=[];const i=Kr({install(r){mi(i),i._a=r,r.provide(Ec,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const wc=()=>{};function _l(t,e,n,s=wc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&va()&&mh(i),i}function Xt(t,...e){t.slice().forEach(n=>{n(...e)})}const Pd=t=>t(),gl=Symbol(),Vi=Symbol();function dr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];fr(i)&&fr(s)&&t.hasOwnProperty(n)&&!ce(s)&&!Vt(s)?t[n]=dr(i,s):t[n]=s}return t}const Od=Symbol();function Dd(t){return!fr(t)||!t.hasOwnProperty(Od)}const{assign:mt}=Object;function Md(t){return!!(ce(t)&&t.effect)}function kd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Uh(n.state.value[t]);return mt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Kr(vc(()=>{mi(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=Sc(t,c,e,n,s,!0),a}function Sc(t,e,n={},s,i,r){let o;const l=mt({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],_;const b=s.state.value[t];!r&&!b&&(s.state.value[t]={}),Bt({});let N;function B(U){let $;c=u=!1,typeof U=="function"?(U(s.state.value[t]),$={type:Un.patchFunction,storeId:t,events:_}):(dr(s.state.value[t],U),$={type:Un.patchObject,payload:U,storeId:t,events:_});const ue=N=Symbol();Ba().then(()=>{N===ue&&(c=!0)}),u=!0,Xt(h,$,s.state.value[t])}const W=r?function(){const{state:$}=n,ue=$?$():{};this.$patch(Fe=>{mt(Fe,ue)})}:wc;function q(){o.stop(),h=[],d=[],s._s.delete(t)}const Y=(U,$="")=>{if(gl in U)return U[Vi]=$,U;const ue=function(){mi(s);const Fe=Array.from(arguments),je=[],gt=[];function bn(H){je.push(H)}function ys(H){gt.push(H)}Xt(d,{args:Fe,name:ue[Vi],store:K,after:bn,onError:ys});let ae;try{ae=U.apply(this&&this.$id===t?this:K,Fe)}catch(H){throw Xt(gt,H),H}return ae instanceof Promise?ae.then(H=>(Xt(je,H),H)).catch(H=>(Xt(gt,H),Promise.reject(H))):(Xt(je,ae),ae)};return ue[gl]=!0,ue[Vi]=$,ue},R={_p:s,$id:t,$onAction:_l.bind(null,d),$patch:B,$reset:W,$subscribe(U,$={}){const ue=_l(h,U,$.detached,()=>Fe()),Fe=o.run(()=>Rs(()=>s.state.value[t],je=>{($.flush==="sync"?u:c)&&U({storeId:t,type:Un.direct,events:_},je)},mt({},a,$)));return ue},$dispose:q},K=hi(R);s._s.set(t,K);const ye=(s._a&&s._a.runWithContext||Pd)(()=>s._e.run(()=>(o=ya()).run(()=>e({action:Y}))));for(const U in ye){const $=ye[U];if(ce($)&&!Md($)||Vt($))r||(b&&Dd($)&&(ce($)?$.value=b[U]:dr($,b[U])),s.state.value[t][U]=$);else if(typeof $=="function"){const ue=Y($,U);ye[U]=ue,l.actions[U]=$}}return mt(K,ye),mt(j(K),ye),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:U=>{B($=>{mt($,U)})}}),s._p.forEach(U=>{mt(K,o.run(()=>U({store:K,app:s._a,pinia:s,options:l})))}),b&&r&&n.hydrate&&n.hydrate(K.$state,b),c=!0,u=!0,K}/*! #__NO_SIDE_EFFECTS__ */function Fd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=Sf();return o=o||(a?Wn(Ec,null):null),o&&mi(o),o=bc,o._s.has(t)||(i?Sc(t,e,s,o):kd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Ld=()=>{};var ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const E=function(t,e){if(!t)throw gn(e)},gn=function(t){return new Error("Firebase Database ("+Ic.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Wd;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const b=c<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nc=function(t){const e=Tc(t);return Xr.encodeByteArray(e,!0)},Us=function(t){return Nc(t).replace(/\./g,"")},pr=function(t){try{return Xr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){return xc(void 0,t)}function xc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ud(n)||(t[n]=xc(t[n],e[n]));return t}function Ud(t){return t!=="__proto__"}/**
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
 */const $d=()=>Vd().__FIREBASE_DEFAULTS__,jd=()=>{if(typeof process>"u"||typeof ml>"u")return;const t=ml.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pr(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return Ld()||$d()||jd()||Gd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kd=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zd=t=>{const e=Kd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ac=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function qd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Us(JSON.stringify(n)),Us(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yd())}function Qd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jd(){return Ic.NODE_ADMIN===!0}function Xd(){try{return typeof indexedDB=="object"}catch{return!1}}function Zd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="FirebaseError";class hs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ep,Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oc.prototype.create)}}class Oc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new hs(i,l,s)}}function tp(t,e){return t.replace(np,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const np=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Xn(pr(r[0])||""),n=Xn(pr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sp=function(t){const e=Dc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ip=function(t){const e=Dc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function $s(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vl(r)&&vl(o)){if(!$s(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Zr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function mn(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class ap{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(t){return t===Ft?void 0:t}function up(t){return t.instantiationMode==="EAGER"}/**
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
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ap(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const fp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},dp=se.INFO,pp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},_p=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=dp,this._logHandler=_p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const gp=(t,e)=>e.some(n=>t instanceof n);let Cl,bl;function mp(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return bl||(bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kc=new WeakMap,_r=new WeakMap,Fc=new WeakMap,$i=new WeakMap,eo=new WeakMap;function vp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kc.set(n,t)}).catch(()=>{}),eo.set(e,t),e}function Cp(t){if(_r.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_r.set(t,e)}let gr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _r.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bp(t){gr=t(gr)}function Ep(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ji(this),e,...n);return Fc.set(s,e.sort?e.sort():[e]),bt(s)}:yp().includes(t)?function(...e){return t.apply(ji(this),e),bt(kc.get(this))}:function(...e){return bt(t.apply(ji(this),e))}}function wp(t){return typeof t=="function"?Ep(t):(t instanceof IDBTransaction&&Cp(t),gp(t,mp())?new Proxy(t,gr):t)}function bt(t){if(t instanceof IDBRequest)return vp(t);if($i.has(t))return $i.get(t);const e=wp(t);return e!==t&&($i.set(t,e),eo.set(e,t)),e}const ji=t=>eo.get(t);function Sp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=bt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(bt(o.result),a.oldVersion,a.newVersion,bt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ip=["get","getKey","getAll","getAllKeys","count"],Tp=["put","add","delete","clear"],Gi=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gi.get(e))return Gi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Tp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ip.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Gi.set(e,r),r}bp(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
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
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mr="@firebase/app",wl="0.11.2";/**
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
 */const ht=new Mc("@firebase/app"),Rp="@firebase/app-compat",Ap="@firebase/analytics-compat",Pp="@firebase/analytics",Op="@firebase/app-check-compat",Dp="@firebase/app-check",Mp="@firebase/auth",kp="@firebase/auth-compat",Fp="@firebase/database",Lp="@firebase/data-connect",Bp="@firebase/database-compat",Wp="@firebase/functions",Hp="@firebase/functions-compat",Up="@firebase/installations",Vp="@firebase/installations-compat",$p="@firebase/messaging",jp="@firebase/messaging-compat",Gp="@firebase/performance",Kp="@firebase/performance-compat",zp="@firebase/remote-config",qp="@firebase/remote-config-compat",Yp="@firebase/storage",Qp="@firebase/storage-compat",Jp="@firebase/firestore",Xp="@firebase/vertexai",Zp="@firebase/firestore-compat",e_="firebase",t_="11.4.0";/**
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
 */const yr="[DEFAULT]",n_={[mr]:"fire-core",[Rp]:"fire-core-compat",[Pp]:"fire-analytics",[Ap]:"fire-analytics-compat",[Dp]:"fire-app-check",[Op]:"fire-app-check-compat",[Mp]:"fire-auth",[kp]:"fire-auth-compat",[Fp]:"fire-rtdb",[Lp]:"fire-data-connect",[Bp]:"fire-rtdb-compat",[Wp]:"fire-fn",[Hp]:"fire-fn-compat",[Up]:"fire-iid",[Vp]:"fire-iid-compat",[$p]:"fire-fcm",[jp]:"fire-fcm-compat",[Gp]:"fire-perf",[Kp]:"fire-perf-compat",[zp]:"fire-rc",[qp]:"fire-rc-compat",[Yp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Jp]:"fire-fst",[Zp]:"fire-fst-compat",[Xp]:"fire-vertex","fire-js":"fire-js",[e_]:"fire-js-all"};/**
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
 */const js=new Map,s_=new Map,vr=new Map;function Sl(t,e){try{t.container.addComponent(e)}catch(n){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(vr.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;vr.set(e,t);for(const n of js.values())Sl(n,t);for(const n of s_.values())Sl(n,t);return!0}function i_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function r_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const o_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new Oc("app","Firebase",o_);/**
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
 */class l_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
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
 */const a_=t_;function Lc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Et.create("bad-app-name",{appName:String(i)});if(n||(n=Ac()),!n)throw Et.create("no-options");const r=js.get(i);if(r){if($s(n,r.options)&&$s(s,r.config))return r;throw Et.create("duplicate-app",{appName:i})}const o=new hp(i);for(const a of vr.values())o.addComponent(a);const l=new l_(n,s,o);return js.set(i,l),l}function c_(t=yr){const e=js.get(t);if(!e&&t===yr&&Ac())return Lc();if(!e)throw Et.create("no-app",{appName:t});return e}function an(t,e,n){var s;let i=(s=n_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(l.join(" "));return}Gs(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const u_="firebase-heartbeat-database",h_=1,es="firebase-heartbeat-store";let Ki=null;function Bc(){return Ki||(Ki=Sp(u_,h_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(es)}catch(n){console.warn(n)}}}}).catch(t=>{throw Et.create("idb-open",{originalErrorMessage:t.message})})),Ki}async function f_(t){try{const n=(await Bc()).transaction(es),s=await n.objectStore(es).get(Wc(t));return await n.done,s}catch(e){if(e instanceof hs)ht.warn(e.message);else{const n=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(n.message)}}}async function Il(t,e){try{const s=(await Bc()).transaction(es,"readwrite");await s.objectStore(es).put(e,Wc(t)),await s.done}catch(n){if(n instanceof hs)ht.warn(n.message);else{const s=Et.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(s.message)}}}function Wc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const d_=1024,p_=30;class __{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new m_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>p_){const o=y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ht.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tl(),{heartbeatsToSend:s,unsentEntries:i}=g_(this._heartbeatsCache.heartbeats),r=Us(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ht.warn(n),""}}}function Tl(){return new Date().toISOString().substring(0,10)}function g_(t,e=d_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Nl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class m_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xd()?Zd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await f_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nl(t){return Us(JSON.stringify({version:2,heartbeats:t})).length}function y_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function v_(t){Gs(new Zn("platform-logger",e=>new Np(e),"PRIVATE")),Gs(new Zn("heartbeat",e=>new __(e),"PRIVATE")),an(mr,wl,t),an(mr,wl,"esm2017"),an("fire-js","")}v_("");var C_="firebase",b_="11.4.0";/**
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
 */an(C_,b_,"app");var xl={};const Rl="@firebase/database",Al="1.0.13";/**
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
 */let Hc="";function E_(t){Hc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new w_(e)}}catch{}return new S_},Wt=Uc("localStorage"),I_=Uc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Mc("@firebase/database"),T_=function(){let t=1;return function(){return t++}}(),Vc=function(t){const e=lp(t),n=new op;n.update(e);const s=n.digest();return Xr.encodeByteArray(s)},fs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fs.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let Vn=null,Pl=!0;const N_=function(t,e){E(!0,"Can't turn on custom loggers persistently."),cn.logLevel=se.VERBOSE,Vn=cn.log.bind(cn)},Ce=function(...t){if(Pl===!0&&(Pl=!1,Vn===null&&I_.get("logging_enabled")===!0&&N_()),Vn){const e=fs.apply(null,t);Vn(e)}},ds=function(t){return function(...e){Ce(t,...e)}},Cr=function(...t){const e="FIREBASE INTERNAL ERROR: "+fs(...t);cn.error(e)},ft=function(...t){const e=`FIREBASE FATAL ERROR: ${fs(...t)}`;throw cn.error(e),new Error(e)},Ae=function(...t){const e="FIREBASE WARNING: "+fs(...t);cn.warn(e)},x_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$c=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},R_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},dn="[MIN_NAME]",Kt="[MAX_NAME]",yn=function(t,e){if(t===e)return 0;if(t===dn||e===Kt)return-1;if(e===dn||t===Kt)return 1;{const n=Ol(t),s=Ol(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},A_=function(t,e){return t===e?0:t<e?-1:1},Nn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},to=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=to(t[e[s]]);return n+="}",n},jc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gc=function(t){E(!$c(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},P_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function D_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const M_=new RegExp("^-?(0*)\\d{1,10}$"),k_=-2147483648,F_=2147483647,Ol=function(t){if(M_.test(t)){const e=Number(t);if(e>=k_&&e<=F_)return e}return null},vn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ae("Exception was thrown by user callback.",n),e},Math.floor(0))}},L_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$n=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class B_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,r_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ae(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ae(e)}}class Ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ds.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="5",Kc="v",zc="s",qc="r",Yc="f",Qc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jc="ls",Xc="p",br="ac",Zc="websocket",eu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function H_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nu(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===Zc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===eu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);H_(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.counters_={}}incrementCounter(e,n=1){pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={},qi={};function so(t){const e=t.toString();return zi[e]||(zi[e]=new U_),zi[e]}function V_(t,e){const n=t.toString();return qi[n]||(qi[n]=e()),qi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="start",j_="close",G_="pLPCommand",K_="pRTLPCB",su="id",iu="pw",ru="ser",z_="cb",q_="seg",Y_="ts",Q_="d",J_="dframe",ou=1870,lu=30,X_=ou-lu,Z_=25e3,eg=3e4;class nn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ds(e),this.stats_=so(n),this.urlFn=a=>(this.appCheckToken&&(a[br]=this.appCheckToken),nu(n,eu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eg)),R_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new io((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dl)this.id=l,this.password=a;else if(o===j_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dl]="t",s[ru]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[z_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kc]=no,this.transportSessionId&&(s[zc]=this.transportSessionId),this.lastSessionId&&(s[Jc]=this.lastSessionId),this.applicationId&&(s[Xc]=this.applicationId),this.appCheckToken&&(s[br]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qc.test(location.hostname)&&(s[qc]=Yc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nn.forceAllow_=!0}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){return nn.forceAllow_?!0:!nn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!P_()&&!O_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nc(n),i=jc(s,X_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[J_]="t",s[su]=e,s[iu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class io{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=T_(),window[G_+this.uniqueCallbackIdentifier]=e,window[K_+this.uniqueCallbackIdentifier]=n,this.myIFrame=io.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[su]=this.myID,e[iu]=this.myPW,e[ru]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lu+s.length<=ou;){const o=this.pendingSegs.shift();s=s+"&"+q_+i+"="+o.seg+"&"+Y_+i+"="+o.ts+"&"+Q_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Z_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=16384,ng=45e3;let Ks=null;typeof MozWebSocket<"u"?Ks=MozWebSocket:typeof WebSocket<"u"&&(Ks=WebSocket);class Be{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ds(this.connId),this.stats_=so(n),this.connURL=Be.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Kc]=no,typeof location<"u"&&location.hostname&&Qc.test(location.hostname)&&(o[qc]=Yc),n&&(o[zc]=n),s&&(o[Jc]=s),i&&(o[br]=i),r&&(o[Xc]=r),nu(e,Zc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wt.set("previous_websocket_failure",!0);try{let s;Jd(),this.mySock=new Ks(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ks!==null&&!Be.forceDisallow_}static previouslyFailed(){return Wt.isInMemoryStorage||Wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jc(n,tg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ng))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Be.responsesRequiredToBeHealthy=2;Be.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{static get ALL_TRANSPORTS(){return[nn,Be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Be&&Be.isAvailable();let s=n&&!Be.previouslyFailed();if(e.webSocketOnly&&(n||Ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Be];else{const i=this.transports_=[];for(const r of ts.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=6e4,ig=5e3,rg=10*1024,og=100*1024,Yi="t",Ml="d",lg="s",kl="r",ag="e",Fl="o",Ll="a",Bl="n",Wl="p",cg="h";class ug{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ds("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$n(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>og?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yi in e){const n=e[Yi];n===Ll?this.upgradeIfSecondaryHealthy_():n===kl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nn("t",e),s=Nn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ll,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nn("t",e),s=Nn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nn(Yi,e);if(Ml in e){const s=e[Ml];if(n===cg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lg?this.onConnectionShutdown_(s):n===kl?this.onReset_(s):n===ag?Cr("Server Error: "+s):n===Fl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),no!==s&&Ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),$n(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$n(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ig))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zs extends cu{static getInstance(){return new zs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=32,Ul=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new Z("")}function k(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function It(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function uu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Ie(t,e){const n=k(t),s=k(e);if(n===null)return e;if(n===s)return Ie(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ro(t,e){if(It(t)!==It(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function We(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(It(t)>It(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class fg{constructor(e,n){this.errorPrefix_=n,this.parts_=hu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=vi(this.parts_[s]);du(this)}}function dg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vi(e),du(t)}function pg(t){const e=t.parts_.pop();t.byteLength_-=vi(e),t.parts_.length>0&&(t.byteLength_-=1)}function du(t){if(t.byteLength_>Ul)throw new Error(t.errorPrefix_+"has a key path longer than "+Ul+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hl+") or object contains a cycle "+Lt(t))}function Lt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends cu{static getInstance(){return new oo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=1e3,_g=60*5*1e3,Vl=30*1e3,gg=1.3,mg=3e4,yg="server_kill",$l=3;class ct extends au{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ct.nextPersistentConnectionId_++,this.log_=ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xn,this.maxReconnectDelay_=_g,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");oo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new yi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ct.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pt(e,"w")){const s=fn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ip(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cr("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mg&&(this.reconnectDelay_=xn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new ug(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ae(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(yg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ae(h),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yl(this.interruptReasons_)&&(this.reconnectDelay_=xn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>to(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$l&&(this.reconnectDelay_=Vl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$l&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hc.replace(/\./g,"-")]=1,Pc()?e["framework.cordova"]=1:Qd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zs.getInstance().currentlyOnline();return yl(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(dn,e),i=new F(dn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class pu extends Ci{static get __EMPTY_NODE(){return Ss}static set __EMPTY_NODE(e){Ss=e}compare(e,n){return yn(e.name,n.name)}isDefinedOn(e){throw gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Kt,Ss)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Ss)}toString(){return".key"}}const un=new pu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Re.EMPTY_NODE,this.right=r??Re.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class vg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new vg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e){return yn(t.name,e.name)}function lo(t,e){return yn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;function bg(t){Er=t}const _u=function(t){return typeof t=="number"?"number:"+Gc(t):"string:"+t},gu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pt(e,".sv"),"Priority must be a string or number.")}else E(t===Er||t.isEmpty(),"priority of unexpected type.");E(t===Er||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;class pe{static set __childrenNodeConstructor(e){jl=e}static get __childrenNodeConstructor(){return jl}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:k(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=k(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||It(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_u(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gc(this.value_):e+=this.value_,this.lazyHash_=Vc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu,yu;function Eg(t){mu=t}function wg(t){yu=t}class Sg extends Ci{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Kt,new pe("[PRIORITY-POST]",yu))}makePost(e,n){const s=mu(e);return new F(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new Sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=Math.log(2);class Tg{constructor(e){const n=r=>parseInt(Math.log(r)/Ig,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const _=parseInt(u/2,10)+a,b=i(a,_),N=i(_+1,c);return h=t[_],d=n?n(h):h,new _e(d,h.node,_e.BLACK,b,N)}},r=function(a){let c=null,u=null,h=t.length;const d=function(b,N){const B=h-b,W=h;h-=b;const q=i(B+1,W),Y=t[B],R=n?n(Y):Y;_(new _e(R,Y.node,N,null,q))},_=function(b){c?(c.left=b,c=b):(u=b,c=b)};for(let b=0;b<a.count;++b){const N=a.nextBitIsOne(),B=Math.pow(2,a.count-(b+1));N?d(B,_e.BLACK):(d(B,_e.BLACK),d(B,_e.RED))}return u},o=new Tg(t.length),l=r(o);return new Re(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;const Zt={};class at{static get Default(){return E(Zt&&oe,"ChildrenNode.ts has not been loaded"),Qi=Qi||new at({".priority":Zt},{".priority":oe}),Qi}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=fn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return pt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=qs(s,e.getCompare()):l=Zt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new at(u,c)}addToIndexes(e,n){const s=Vs(this.indexes_,(i,r)=>{const o=fn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Zt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),qs(l,o.getCompare())}else return Zt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new at(s,this.indexSet_)}removeFromIndexes(e,n){const s=Vs(this.indexes_,i=>{if(i===Zt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new at(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;class P{static get EMPTY_NODE(){return Rn||(Rn=new P(new Re(lo),null,at.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Rn:n}}getChild(e){const n=k(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Rn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=k(e);if(s===null)return n;{E(k(e)!==".priority"||It(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_u(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ps?-1:0}withIndex(e){if(e===un||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===un?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ng extends P{constructor(){super(new Re(lo),P.EMPTY_NODE,at.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const ps=new Ng;Object.defineProperties(F,{MIN:{value:new F(dn,P.EMPTY_NODE)},MAX:{value:new F(Kt,ps)}});pu.__EMPTY_NODE=P.EMPTY_NODE;pe.__childrenNodeConstructor=P;bg(ps);wg(ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=!0;function ge(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,ge(e))}if(!(t instanceof Array)&&xg){const n=[];let s=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=qs(n,Cg,o=>o.name,lo);if(s){const o=qs(n,oe.getCompare());return new P(r,ge(e),new at({".priority":o},{".priority":oe}))}else return new P(r,ge(e),at.Default)}else{let n=P.EMPTY_NODE;return Pe(t,(s,i)=>{if(pt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}Eg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Ci{constructor(e){super(),this.indexPath_=e,E(!L(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,ps);return new F(Kt,e)}toString(){return hu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends Ci{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ge(e);return new F(n,s)}toString(){return".value"}}const Pg=new Ag;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return{type:"value",snapshotNode:t}}function pn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Og(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(pn(n,s)):o.trackChildChange(ss(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ns(i,r))}),n.isLeafNode()||n.forEachChild(oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ss(i,r,o))}else s.trackChildChange(pn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.indexedFilter_=new ao(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ss(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ns(n,h));const N=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(pn(d.name,d.node)),N.updateImmediateChild(d.name,d.node)):N}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ns(c.name,c.node)),r.trackChildChange(pn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new co;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Mg(t){return t.loadsAllData()?new ao(t.getIndex()):t.hasLimit()?new Dg(t):new is(t)}function Gl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===Pg?n="$value":t.index_===un?n="$key":(E(t.index_ instanceof Rg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends au{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ds("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ys.getListenId_(e,s),l={};this.listens_[o]=l;const a=Gl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),fn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ys.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gl(e._queryParams),s=e._path.toString(),i=new yi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Xn(l.responseText)}catch{Ae("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ae("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(){return{value:null,children:new Map}}function Cu(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=k(e);t.children.has(s)||t.children.set(s,Qs());const i=t.children.get(s);e=ie(e),Cu(i,e,n)}}function wr(t,e,n){t.value!==null?n(e,t.value):Fg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);wr(i,r,n)})}function Fg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=10*1e3,Bg=30*1e3,Wg=5*60*1e3;class Hg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Lg(e);const s=zl+(Bg-zl)*Math.random();$n(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Pe(e,(i,r)=>{r>0&&pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),$n(this.reportStats_.bind(this),Math.floor(Math.random()*2*Wg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(He||(He={}));function bu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ho(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=He.ACK_USER_WRITE,this.source=bu()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Js(G(),n,this.revert)}}else return E(k(this.path)===e,"operationForChild called for unrelated child."),new Js(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.source=e,this.path=n,this.type=He.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new rs(this.source,G()):new rs(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=He.OVERWRITE}operationForChild(e){return L(this.path)?new zt(this.source,G(),this.snap.getImmediateChild(e)):new zt(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=He.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new zt(this.source,G(),n.value):new os(this.source,G(),n)}else return E(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=k(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Og(o.childName,o.snapshotNode))}),An(t,i,"child_removed",e,s,n),An(t,i,"child_added",e,s,n),An(t,i,"child_moved",r,s,n),An(t,i,"child_changed",e,s,n),An(t,i,"value",e,s,n),i}function An(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>jg(t,l,a)),o.forEach(l=>{const a=$g(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function $g(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jg(t,e,n){if(e.childName==null||n.childName==null)throw gn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,e){return{eventCache:t,serverCache:e}}function jn(t,e,n,s){return bi(new Tt(e,n,s),t.serverCache)}function Eu(t,e,n,s){return bi(t.eventCache,new Tt(e,n,s))}function Xs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;const Gg=()=>(Ji||(Ji=new Re(A_)),Ji);class re{static fromObject(e){let n=new re(null);return Pe(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=Gg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(L(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=k(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(L(e))return new re(n,this.children);{const s=k(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=k(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=k(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(L(e))return n;{const s=k(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),de(n,i),s):new re(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.writeTree_=e}static empty(){return new $e(new re(null))}}function Gn(t,e,n){if(L(e))return new $e(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ie(i,e);return r=r.updateChild(o,n),new $e(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new $e(r)}}}function ql(t,e,n){let s=t;return Pe(n,(i,r)=>{s=Gn(s,de(e,i),r)}),s}function Yl(t,e){if(L(e))return $e.empty();{const n=t.writeTree_.setTree(e,new re(null));return new $e(n)}}function Sr(t,e){return Qt(t,e)!=null}function Qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ie(n.path,e)):null}function Ql(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function wt(t,e){if(L(e))return t;{const n=Qt(t,e);return n!=null?new $e(new re(n)):new $e(t.writeTree_.subtree(e))}}function Ir(t){return t.writeTree_.isEmpty()}function _n(t,e){return wu(G(),t.writeTree_,e)}function wu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=wu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e){return Nu(e,t)}function Kg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gn(t.visibleWrites,e,n)),t.lastWriteId=s}function zg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function qg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Yg(l,s.path)?i=!1:We(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Qg(t),!0;if(s.snap)t.visibleWrites=Yl(t.visibleWrites,s.path);else{const l=s.children;Pe(l,a=>{t.visibleWrites=Yl(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function Yg(t,e){if(t.snap)return We(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&We(de(t.path,n),e))return!0;return!1}function Qg(t){t.visibleWrites=Su(t.allWrites,Jg,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Jg(t){return t.visible}function Su(t,e,n){let s=$e.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)We(n,o)?(l=Ie(n,o),s=Gn(s,l,r.snap)):We(o,n)&&(l=Ie(o,n),s=Gn(s,G(),r.snap.getChild(l)));else if(r.children){if(We(n,o))l=Ie(n,o),s=ql(s,l,r.children);else if(We(o,n))if(l=Ie(o,n),L(l))s=ql(s,G(),r.children);else{const a=fn(r.children,k(l));if(a){const c=a.getChild(ie(l));s=Gn(s,G(),c)}}}else throw gn("WriteRecord should have .snap or .children")}}return s}function Iu(t,e,n,s,i){if(!s&&!i){const r=Qt(t.visibleWrites,e);if(r!=null)return r;{const o=wt(t.visibleWrites,e);if(Ir(o))return n;if(n==null&&!Sr(o,G()))return null;{const l=n||P.EMPTY_NODE;return _n(o,l)}}}else{const r=wt(t.visibleWrites,e);if(!i&&Ir(r))return n;if(!i&&n==null&&!Sr(r,G()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(We(c.path,e)||We(e,c.path))},l=Su(t.allWrites,o,e),a=n||P.EMPTY_NODE;return _n(l,a)}}}function Xg(t,e,n){let s=P.EMPTY_NODE;const i=Qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=wt(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=_n(wt(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),Ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=wt(t.visibleWrites,e);return Ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Zg(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(Sr(t.visibleWrites,r))return null;{const o=wt(t.visibleWrites,r);return Ir(o)?i.getChild(n):_n(o,i.getChild(n))}}function em(t,e,n,s){const i=de(e,n),r=Qt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=wt(t.visibleWrites,i);return _n(o,s.getNode().getImmediateChild(n))}else return null}function tm(t,e){return Qt(t.visibleWrites,e)}function nm(t,e,n,s,i,r,o){let l;const a=wt(t.visibleWrites,e),c=Qt(a,G());if(c!=null)l=c;else if(n!=null)l=_n(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function sm(){return{visibleWrites:$e.empty(),allWrites:[],lastWriteId:-1}}function Zs(t,e,n,s){return Iu(t.writeTree,t.treePath,e,n,s)}function fo(t,e){return Xg(t.writeTree,t.treePath,e)}function Jl(t,e,n,s){return Zg(t.writeTree,t.treePath,e,n,s)}function ei(t,e){return tm(t.writeTree,de(t.treePath,e))}function im(t,e,n,s,i,r){return nm(t.writeTree,t.treePath,e,n,s,i,r)}function po(t,e,n){return em(t.writeTree,t.treePath,e,n)}function Tu(t,e){return Nu(de(t.treePath,e),t.writeTree)}function Nu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ss(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ns(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,pn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ss(s,e.snapshotNode,i.oldSnap));else throw gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const xu=new om;class _o{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return po(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qt(this.viewCache_),r=im(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){return{filter:t}}function am(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cm(t,e,n,s,i){const r=new rm;let o,l;if(n.type===He.OVERWRITE){const c=n;c.source.fromUser?o=Tr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=ti(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===He.MERGE){const c=n;c.source.fromUser?o=hm(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Nr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===He.ACK_USER_WRITE){const c=n;c.revert?o=pm(t,e,c.path,s,i,r):o=fm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===He.LISTEN_COMPLETE)o=dm(t,e,n.path,s,r);else throw gn("Unknown operation type: "+n.type);const a=r.getChanges();return um(e,o,a),{viewCache:o,changes:a}}function um(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(vu(Xs(e)))}}function Ru(t,e,n,s,i,r){const o=e.eventCache;if(ei(s,n)!=null)return e;{let l,a;if(L(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qt(e),u=c instanceof P?c:P.EMPTY_NODE,h=fo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Zs(s,qt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(n);if(c===".priority"){E(It(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Jl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Jl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=po(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return jn(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function ti(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=k(n);if(!a.isCompleteForPath(n)&&It(n)>1)return e;const b=ie(n),B=a.getNode().getImmediateChild(_).updateChild(b,s);_===".priority"?c=u.updatePriority(a.getNode(),B):c=u.updateChild(a.getNode(),_,B,b,xu,null)}const h=Eu(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new _o(i,h,r);return Ru(t,h,n,i,d,l)}function Tr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new _o(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=jn(e,c,!0,t.filter.filtersNodes());else{const h=k(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=jn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),_=l.getNode().getImmediateChild(h);let b;if(L(d))b=s;else{const N=u.getCompleteChild(h);N!=null?uu(d)===".priority"&&N.getChild(fu(d)).isEmpty()?b=N:b=N.updateChild(d,s):b=P.EMPTY_NODE}if(_.equals(b))a=e;else{const N=t.filter.updateChild(l.getNode(),h,b,d,u,o);a=jn(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Xl(t,e){return t.eventCache.isCompleteForChild(e)}function hm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);Xl(e,k(u))&&(l=Tr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);Xl(e,k(u))||(l=Tr(t,l,u,c,i,r,o))}),l}function Zl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),b=Zl(t,_,d);a=ti(t,a,new Z(h),b,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const b=e.serverCache.getNode().getImmediateChild(h),N=Zl(t,b,d);a=ti(t,a,new Z(h),N,i,r,o,l)}}),a}function fm(t,e,n,s,i,r,o){if(ei(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ti(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new re(null);return a.getNode().forEachChild(un,(u,h)=>{c=c.set(new Z(u),h)}),Nr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=de(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Nr(t,e,n,c,i,r,l,o)}}function dm(t,e,n,s,i){const r=e.serverCache,o=Eu(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Ru(t,o,n,s,xu,i)}function pm(t,e,n,s,i,r){let o;if(ei(s,n)!=null)return e;{const l=new _o(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||k(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zs(s,qt(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=fo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=k(n);let h=po(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zs(s,qt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ei(s,G())!=null,jn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ao(s.getIndex()),r=Mg(s);this.processor_=lm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new Tt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Tt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=bi(h,u),this.eventGenerator_=new Ug(this.query_)}get query(){return this.query_}}function gm(t){return t.viewCache_.serverCache.getNode()}function mm(t){return Xs(t.viewCache_)}function ym(t,e){const n=qt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(k(e)).isEmpty())?n.getChild(e):null}function ea(t){return t.eventRegistrations_.length===0}function vm(t,e){t.eventRegistrations_.push(e)}function ta(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function na(t,e,n,s){e.type===He.MERGE&&e.source.queryId!==null&&(E(qt(t.viewCache_),"We should always have a full cache before handling merges"),E(Xs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=cm(t.processor_,i,e,n,s);return am(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Au(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Cm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(pn(r,o))}),n.isFullyInitialized()&&s.push(vu(n.getNode())),Au(t,s,n.getNode(),e)}function Au(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Vg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;class Pu{constructor(){this.views=new Map}}function bm(t){E(!ni,"__referenceConstructor has already been defined"),ni=t}function Em(){return E(ni,"Reference.ts has not been loaded"),ni}function wm(t){return t.views.size===0}function go(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),na(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(na(o,e,n,s));return r}}function Ou(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Zs(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=fo(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=bi(new Tt(l,a,!1),new Tt(s,i,!1));return new _m(e,c)}return o}function Sm(t,e,n,s,i,r){const o=Ou(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vm(o,n),Cm(o,n)}function Im(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Nt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ta(c,n,s)),ea(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ta(a,n,s)),ea(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Nt(t)&&r.push(new(Em())(e._repo,e._path)),{removed:r,events:o}}function Du(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function St(t,e){let n=null;for(const s of t.views.values())n=n||ym(s,e);return n}function Mu(t,e){if(e._queryParams.loadsAllData())return wi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ku(t,e){return Mu(t,e)!=null}function Nt(t){return wi(t)!=null}function wi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;function Tm(t){E(!si,"__referenceConstructor has already been defined"),si=t}function Nm(){return E(si,"Reference.ts has not been loaded"),si}let xm=1;class sa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=sm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fu(t,e,n,s,i){return Kg(t.pendingWriteTree_,e,n,s,i),i?gs(t,new zt(bu(),e,n)):[]}function Ht(t,e,n=!1){const s=zg(t.pendingWriteTree_,e);if(qg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(G(),!0):Pe(s.children,o=>{r=r.set(new Z(o),!0)}),gs(t,new Js(s.path,r,n))}else return[]}function _s(t,e,n){return gs(t,new zt(uo(),e,n))}function Rm(t,e,n){const s=re.fromObject(n);return gs(t,new os(uo(),e,s))}function Am(t,e){return gs(t,new rs(uo(),e))}function Pm(t,e,n){const s=yo(t,n);if(s){const i=vo(s),r=i.path,o=i.queryId,l=Ie(r,e),a=new rs(ho(o),l);return Co(t,r,a)}else return[]}function ii(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ku(o,e))){const a=Im(o,e,n,s);wm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Nt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Mm(d);for(let b=0;b<_.length;++b){const N=_[b],B=N.query,W=Hu(t,N);t.listenProvider_.startListening(Kn(B),ls(t,B),W.hashFn,W.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Kn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Si(d));t.listenProvider_.stopListening(Kn(d),_)}))}km(t,c)}return l}function Lu(t,e,n,s){const i=yo(t,s);if(i!=null){const r=vo(i),o=r.path,l=r.queryId,a=Ie(o,e),c=new zt(ho(l),a,n);return Co(t,o,c)}else return[]}function Om(t,e,n,s){const i=yo(t,s);if(i){const r=vo(i),o=r.path,l=r.queryId,a=Ie(o,e),c=re.fromObject(n),u=new os(ho(l),a,c);return Co(t,o,u)}else return[]}function xr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const b=Ie(d,i);r=r||St(_,b),o=o||Nt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Nt(l),r=r||St(l,G())):(l=new Pu,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,b)=>{const N=St(b,G());N&&(r=r.updateImmediateChild(_,N))}));const c=ku(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Si(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Fm();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Ei(t.pendingWriteTree_,i);let h=Sm(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Mu(l,e);h=h.concat(Lm(t,e,d))}return h}function mo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ie(o,e),c=St(l,a);if(c)return c});return Iu(i,e,r,n,!0)}function Dm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ie(c,n);s=s||St(u,h)});let i=t.syncPointTree_.get(n);i?s=s||St(i,G()):(i=new Pu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Tt(s,!0,!1):null,l=Ei(t.pendingWriteTree_,e._path),a=Ou(i,e,l,r?o.getNode():P.EMPTY_NODE,r);return mm(a)}function gs(t,e){return Bu(e,t.syncPointTree_,null,Ei(t.pendingWriteTree_,G()))}function Bu(t,e,n,s){if(L(t.path))return Wu(t,e,n,s);{const i=e.get(G());n==null&&i!=null&&(n=St(i,G()));let r=[];const o=k(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Tu(s,o);r=r.concat(Bu(l,a,c,u))}return i&&(r=r.concat(go(i,t,s,n))),r}}function Wu(t,e,n,s){const i=e.get(G());n==null&&i!=null&&(n=St(i,G()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Tu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Wu(u,l,a,c)))}),i&&(r=r.concat(go(i,t,s,n))),r}function Hu(t,e){const n=e.query,s=ls(t,n);return{hashFn:()=>(gm(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Pm(t,n._path,s):Am(t,n._path);{const r=D_(i,n);return ii(t,n,null,r)}}}}function ls(t,e){const n=Si(e);return t.queryToTagMap.get(n)}function Si(t){return t._path.toString()+"$"+t._queryIdentifier}function yo(t,e){return t.tagToQueryMap.get(e)}function vo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Co(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Ei(t.pendingWriteTree_,e);return go(s,n,i,null)}function Mm(t){return t.fold((e,n,s)=>{if(n&&Nt(n))return[wi(n)];{let i=[];return n&&(i=Du(n)),Pe(s,(r,o)=>{i=i.concat(o)}),i}})}function Kn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Nm())(t._repo,t._path):t}function km(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Si(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Fm(){return xm++}function Lm(t,e,n){const s=e._path,i=ls(t,e),r=Hu(t,n),o=t.listenProvider_.startListening(Kn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Nt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&Nt(u))return[wi(u).query];{let d=[];return u&&(d=d.concat(Du(u).map(_=>_.query))),Pe(h,(_,b)=>{d=d.concat(b)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Kn(u),ls(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bo(n)}node(){return this.node_}}class Eo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Eo(this.syncTree_,n)}node(){return mo(this.syncTree_,this.path_)}}const Bm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ia=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Wm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Hm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Wm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Hm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Um=function(t,e,n,s){return wo(e,new Eo(n,t),s)},Uu=function(t,e,n){return wo(t,new bo(e),n)};function wo(t,e,n){const s=t.getPriority().val(),i=ia(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ia(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(oe,(l,a)=>{const c=wo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Io(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=k(n);for(;i!==null;){const r=fn(s.node.children,i)||{children:{},childCount:0};s=new So(i,s,r),n=ie(n),i=k(n)}return s}function Cn(t){return t.node.value}function Vu(t,e){t.node.value=e,Rr(t)}function $u(t){return t.node.childCount>0}function Vm(t){return Cn(t)===void 0&&!$u(t)}function Ii(t,e){Pe(t.node.children,(n,s)=>{e(new So(n,t,s))})}function ju(t,e,n,s){n&&e(t),Ii(t,i=>{ju(i,e,!0)})}function $m(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ms(t){return new Z(t.parent===null?t.name:ms(t.parent)+"/"+t.name)}function Rr(t){t.parent!==null&&jm(t.parent,t.name,t)}function jm(t,e,n){const s=Vm(n),i=pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Rr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Rr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=/[\[\].#$\/\u0000-\u001F\u007F]/,Km=/[\[\].#$\u0000-\u001F\u007F]/,Xi=10*1024*1024,Gu=function(t){return typeof t=="string"&&t.length!==0&&!Gm.test(t)},Ku=function(t){return typeof t=="string"&&t.length!==0&&!Km.test(t)},zm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ku(t)},qm=function(t,e,n,s){To(Zr(t,"value"),e,n)},To=function(t,e,n){const s=n instanceof Z?new fg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Lt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Lt(s)+" with contents = "+e.toString());if($c(e))throw new Error(t+"contains "+e.toString()+" "+Lt(s));if(typeof e=="string"&&e.length>Xi/3&&vi(e)>Xi)throw new Error(t+"contains a string greater than "+Xi+" utf8 bytes "+Lt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Pe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Lt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dg(s,o),To(t,l,s),pg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Lt(s)+" in addition to actual children.")}},zu=function(t,e,n,s){if(!Ku(n))throw new Error(Zr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ym=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zu(t,e,n)},Qm=function(t,e){if(k(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Jm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zm(n))throw new Error(Zr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function No(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ro(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qu(t,e,n){No(t,n),Yu(t,s=>ro(s,e))}function nt(t,e,n){No(t,n),Yu(t,s=>We(s,e)||We(e,s))}function Yu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Zm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Zm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Vn&&Ce("event: "+n.toString()),vn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="repo_interrupt",ty=25;class ny{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qs(),this.transactionQueueTree_=new So,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sy(t,e,n){if(t.stats_=so(t.repoInfo_),t.forceRestClient_||L_())t.server_=new Ys(t.repoInfo_,(s,i,r,o)=>{ra(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>oa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ct(t.repoInfo_,e,(s,i,r,o)=>{ra(t,s,i,r,o)},s=>{oa(t,s)},s=>{ry(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=V_(t.repoInfo_,()=>new Hg(t.stats_,t.server_)),t.infoData_=new kg,t.infoSyncTree_=new sa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=_s(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ro(t,"connected",!1),t.serverSyncTree_=new sa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function iy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xo(t){return Bm({timestamp:iy(t)})}function ra(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Vs(n,c=>ge(c));o=Om(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=Lu(t.serverSyncTree_,r,a,i)}else if(s){const a=Vs(n,c=>ge(c));o=Rm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=_s(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ni(t,r)),nt(t.eventQueue_,l,o)}function oa(t,e){Ro(t,"connected",e),e===!1&&ay(t)}function ry(t,e){Pe(e,(n,s)=>{Ro(t,n,s)})}function Ro(t,e,n){const s=new Z("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=_s(t.infoSyncTree_,s,i);nt(t.eventQueue_,s,r)}function Qu(t){return t.nextWriteId_++}function oy(t,e,n){const s=Dm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());xr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_s(t.serverSyncTree_,e._path,r);else{const l=ls(t.serverSyncTree_,e);o=Lu(t.serverSyncTree_,e._path,r,l)}return nt(t.eventQueue_,e._path,o),ii(t.serverSyncTree_,e,n,null,!0),r},i=>(Ti(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function ly(t,e,n,s,i){Ti(t,"set",{path:e.toString(),value:n,priority:s});const r=xo(t),o=ge(n,s),l=mo(t.serverSyncTree_,e),a=Uu(o,l,r),c=Qu(t),u=Fu(t.serverSyncTree_,e,a,c,!0);No(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const b=d==="ok";b||Ae("set at "+e+" failed: "+d);const N=Ht(t.serverSyncTree_,c,!b);nt(t.eventQueue_,e,N),fy(t,i,d,_)});const h=th(t,e);Ni(t,h),nt(t.eventQueue_,h,[])}function ay(t){Ti(t,"onDisconnectEvents");const e=xo(t),n=Qs();wr(t.onDisconnect_,G(),(i,r)=>{const o=Um(i,r,t.serverSyncTree_,e);Cu(n,i,o)});let s=[];wr(n,G(),(i,r)=>{s=s.concat(_s(t.serverSyncTree_,i,r));const o=th(t,i);Ni(t,o)}),t.onDisconnect_=Qs(),nt(t.eventQueue_,G(),s)}function cy(t,e,n){let s;k(e._path)===".info"?s=xr(t.infoSyncTree_,e,n):s=xr(t.serverSyncTree_,e,n),qu(t.eventQueue_,e._path,s)}function uy(t,e,n){let s;k(e._path)===".info"?s=ii(t.infoSyncTree_,e,n):s=ii(t.serverSyncTree_,e,n),qu(t.eventQueue_,e._path,s)}function hy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ey)}function Ti(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function fy(t,e,n,s){e&&vn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ju(t,e,n){return mo(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Ao(t,e=t.transactionQueueTree_){if(e||xi(t,e),Cn(e)){const n=Zu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&dy(t,ms(e),n)}else $u(e)&&Ii(e,n=>{Ao(t,n)})}function dy(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ju(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ie(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ti(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ht(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();xi(t,Io(t.transactionQueueTree_,e)),Ao(t,t.transactionQueueTree_),nt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)vn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ae("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ni(t,e)}},o)}function Ni(t,e){const n=Xu(t,e),s=ms(n),i=Zu(t,n);return py(t,i,s),s}function py(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ie(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Ht(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ty)u=!0,h="maxretry",i=i.concat(Ht(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Ju(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){To("transaction failed: Data returned ",_,a.path);let b=ge(_);typeof _=="object"&&_!=null&&pt(_,".priority")||(b=b.updatePriority(d.getPriority()));const B=a.currentWriteId,W=xo(t),q=Uu(b,d,W);a.currentOutputSnapshotRaw=b,a.currentOutputSnapshotResolved=q,a.currentWriteId=Qu(t),o.splice(o.indexOf(B),1),i=i.concat(Fu(t.serverSyncTree_,a.path,q,a.currentWriteId,a.applyLocally)),i=i.concat(Ht(t.serverSyncTree_,B,!0))}else u=!0,h="nodata",i=i.concat(Ht(t.serverSyncTree_,a.currentWriteId,!0))}nt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}xi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)vn(s[l]);Ao(t,t.transactionQueueTree_)}function Xu(t,e){let n,s=t.transactionQueueTree_;for(n=k(e);n!==null&&Cn(s)===void 0;)s=Io(s,n),e=ie(e),n=k(e);return s}function Zu(t,e){const n=[];return eh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function eh(t,e,n){const s=Cn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ii(e,i=>{eh(t,i,n)})}function xi(t,e){const n=Cn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Vu(e,n.length>0?n:void 0)}Ii(e,s=>{xi(t,s)})}function th(t,e){const n=ms(Xu(t,e)),s=Io(t.transactionQueueTree_,e);return $m(s,i=>{Zi(t,i)}),Zi(t,s),ju(s,i=>{Zi(t,i)}),n}function Zi(t,e){const n=Cn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ht(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Vu(e,void 0):n.length=r+1,nt(t.eventQueue_,ms(e),i);for(let o=0;o<s.length;o++)vn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ae(`Invalid query segment '${n}' in query '${t}'`)}return e}const la=function(t,e){const n=my(t),s=n.namespace;n.domain==="firebase.com"&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},my=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=_y(t.substring(u,h)));const d=gy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Po{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:uu(this._path)}get ref(){return new _t(this._repo,this._path)}get _queryIdentifier(){const e=Kl(this._queryParams),n=to(e);return n==="{}"?"default":n}get _queryObject(){return Kl(this._queryParams)}isEqual(e){if(e=mn(e),!(e instanceof Po))return!1;const n=this._repo===e._repo,s=ro(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+hg(this._path)}}class _t extends Po{constructor(e,n){super(e,n,new co,!1)}get parent(){const e=fu(this._path);return e===null?null:new _t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class as{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=Ar(this.ref,e);return new as(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new as(i,Ar(this.ref,s),oe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ts(t,e){return t=mn(t),t._checkNotDeleted("ref"),e!==void 0?Ar(t._root,e):t._root}function Ar(t,e){return t=mn(t),k(t._path)===null?Ym("child","path",e):zu("child","path",e),new _t(t._repo,de(t._path,e))}function aa(t,e){t=mn(t),Qm("set",t._path),qm("set",e,t._path);const n=new yi;return ly(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Cy(t){t=mn(t);const e=new nh(()=>{}),n=new Ri(e);return oy(t._repo,t,n).then(s=>new as(s,new _t(t._repo,t._path),t._queryParams.getIndex()))}class Ri{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new yy("value",this,new as(e.snapshotNode,new _t(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vy(this,e,n):null}matches(e){return e instanceof Ri?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function by(t,e,n,s,i){const r=new nh(n,void 0),o=new Ri(r);return cy(t._repo,t,o),()=>uy(t._repo,t,o)}function Ey(t,e,n,s){return by(t,"value",e)}bm(_t);Tm(_t);/**
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
 */const wy="FIREBASE_DATABASE_EMULATOR_HOST",Pr={};let Sy=!1;function Iy(t,e,n,s){t.repoInfo_=new tu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Ty(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=la(r,i),l=o.repoInfo,a;typeof process<"u"&&xl&&(a=xl[wy]),a?(r=`http://${a}?ns=${l.namespace}`,o=la(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new W_(t.name,t.options,e);Jm("Invalid Firebase Database URL",o),L(o.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const u=xy(l,t,c,new B_(t,n));return new Ry(u,t)}function Ny(t,e){const n=Pr[e];(!n||n[t.key]!==t)&&ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hy(t),delete n[t.key]}function xy(t,e,n,s){let i=Pr[e.name];i||(i={},Pr[e.name]=i);let r=i[t.toURLString()];return r&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ny(t,Sy,n,s),i[t.toURLString()]=r,r}class Ry{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _t(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ny(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ft("Cannot call "+e+" on a deleted database.")}}function Ay(t=c_(),e){const n=i_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=zd("database");s&&Py(n,...s)}return n}function Py(t,e,n,s={}){t=mn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&$s(s,r.repoInfo_.emulatorOptions))return;ft("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ds(Ds.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:qd(s.mockUserToken,t.app.options.projectId);o=new Ds(l)}Iy(r,i,s,o)}/**
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
 */function Oy(t){E_(a_),Gs(new Zn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ty(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),an(Rl,Al,t),an(Rl,Al,"esm2017")}ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Oy();var Dy={apiKey:"AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",authDomain:"iamwaitingforyou-73.firebaseapp.com",databaseURL:"https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwaitingforyou-73",storageBucket:"iamwaitingforyou-73.firebasestorage.app",messagingSenderId:"576527778879",appId:"1:576527778879:web:059f06122df2b01d9a248a",measurementId:"G-62LMJM4Z24"};const My=Lc(Dy),Ns=Ay(My),ut=Fd("fbStore",{state:()=>({userId:"",userName:"",nickname:"",opponentId:"",opponentName:"",gameId:""}),actions:{async getField(t){const e=Ts(Ns,t);return Cy(e).then(n=>{if(n.exists()){const s=n.val();return Pn(">>> Данные пользователя:"+s),s}else Pn(t+" : данные не найдены")})},async setField(t,e){const n=Ts(Ns,t);return aa(n,{text:e}).then(()=>{Pn("Данные успешно записаны!")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async updateValue(t){er("updateValue "+t);const e=Ts(Ns,t);return new Promise(n=>{Ey(e,s=>{Pn(`Данные ${t} получены`),n(s.val())})})},getOpponent(){let t=localStorage.getItem("games");if(t){let e=this.gameId,n=JSON.parse(t);if(!n[e])return null;let s=n[e].findIndex(r=>!r.includes(this.userId)),i=n[e][s].split("::");return{name:i[1],id:i[0]}}else return null},async setReadyToPlay(t){er("this.gameId = "+this.gameId);const e=Ts(Ns,"readyToPlay/"+this.gameId+"/"+this.userId);er(JSON.stringify(t)),aa(e,{name:this.nickname||this.userName}).then(()=>{Pn("Игрок активировался!")}).catch(n=>{console.error("Ошибка активирования: ",n)})}}}),Pn=t=>console.log("%c "+t,"color: green"),er=t=>console.log("%c "+t,"color: pink");function ky(){console.log("searchOpp searchOpp searchOpp searchOpp"),ut().getField(ut().gameId).then(t=>{console.log("res=",t);let e="";try{e=JSON.parse(t.text)}catch{}console.log("games",e),e||Fy()})}function Fy(){ut().getField("readyToPlay").then(t=>{console.log("READY TO PLAY res=",t),Ly()})}function Ly(){let t=`{id:${ut().userId}, name:${ut().userName}}`;console.log(t),ut().setReadyToPlay(t).then(e=>{console.log("active res=",e)})}const By={__name:"SearchOpponent",setup(t){const e=ut(),n=Bt("");function s(){ky(),setTimeout(i,500)}function i(){e.updateValue("readyToPlay/"+e.gameId).then(r=>{console.log("res=",r),r&&(n.value=JSON.stringify(r))})}return Yr(()=>{i()}),(r,o)=>(ln(),As(Je,null,[o[4]||(o[4]=J("hr",null,null,-1)),o[5]||(o[5]=J("i",null,"SearchOpponent",-1)),o[6]||(o[6]=J("hr",null,null,-1)),J("p",null," Привет, "+Lr(Fn(e).nickname||Fn(e).userName)+" ! ",1),J("p",null,[Ho(J("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>r.nickName=l),style:{"font-size":"larger",padding:"4px","text-align":"center"},onInput:o[1]||(o[1]=l=>Fn(e).nickname=r.nickName),placeholder:"Сменить nickName"},null,544),[[dl,r.nickName]])]),J("button",{onClick:o[2]||(o[2]=l=>s())}," Искать соперника! "),o[7]||(o[7]=J("br",null,null,-1)),o[8]||(o[8]=J("br",null,null,-1)),Ho(J("textarea",{"onUpdate:modelValue":o[3]||(o[3]=l=>n.value=l),rows:"5",style:{width:"95%"}},null,512),[[dl,n.value]]),o[9]||(o[9]=J("br",null,null,-1)),o[10]||(o[10]=J("br",null,null,-1))],64))}},Wy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Hy={key:0},Uy={key:1},Vy={style:{"font-size":"larger"}},$y={__name:"RockPaperSScissors",setup(t){const e=ut(),n=Bt(0);Bt("");const s=Bt(""),i=Bt("");e.gameId="g1";let r=e.getOpponent();return console.log("opponent",r),r?(setTimeout(()=>{n.value=2},100),i.value=r.name,s.value=r.id):setTimeout(()=>{n.value=1},1e3),(o,l)=>(ln(),As("div",{class:"game",style:ui({background:n.value===2?"orange":n.value===1?"pink":""})},[l[6]||(l[6]=J("h1",null,"♕",-1)),l[7]||(l[7]=J("h2",null," Камень Ножницы Бумага ",-1)),n.value===1?(ln(),As("div",Hy,[et(By)])):Jo("",!0),n.value===2?(ln(),As("div",Uy,[J("p",null,[l[0]||(l[0]=gc(" Против вас играет: ")),l[1]||(l[1]=J("br",null,null,-1)),J("b",Vy,Lr(i.value||s.value),1)]),l[2]||(l[2]=J("p",null," Выбери: ",-1)),l[3]||(l[3]=J("p",null,[J("button",null,"камень"),J("button",null,"ножницы"),J("button",null,"бумага")],-1)),l[4]||(l[4]=J("br",null,null,-1)),l[5]||(l[5]=J("p",null,[J("button",null," ИГРАТЬ")],-1))])):Jo("",!0)],4))}},jy=Wy($y,[["__scopeId","data-v-a981f474"]]),Gy={__name:"App",setup(t){const e=ut();let n=Bh(jy);return Yr(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.userId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||"-",e.userName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"-")}),(s,i)=>(ln(),dc(df(Fn(n))))}},Ky=Ad(),sh=Nd(Gy);sh.use(Ky);sh.mount("#app");
