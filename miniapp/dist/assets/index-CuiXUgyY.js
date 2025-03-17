(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Br(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},fn=[],it=()=>{},ch=()=>!1,ui=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wr=t=>t.startsWith("onUpdate:"),xe=Object.assign,Ur=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uh=Object.prototype.hasOwnProperty,q=(t,e)=>uh.call(t,e),k=Array.isArray,dn=t=>hi(t)==="[object Map]",ha=t=>hi(t)==="[object Set]",M=t=>typeof t=="function",he=t=>typeof t=="string",Dt=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",fa=t=>(le(t)||M(t))&&M(t.then)&&M(t.catch),da=Object.prototype.toString,hi=t=>da.call(t),hh=t=>hi(t).slice(8,-1),pa=t=>hi(t)==="[object Object]",Hr=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hn=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fh=/-(\w)/g,Ue=fi(t=>t.replace(fh,(e,n)=>n?n.toUpperCase():"")),dh=/\B([A-Z])/g,nn=fi(t=>t.replace(dh,"-$1").toLowerCase()),di=fi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Li=fi(t=>t?`on${di(t)}`:""),It=(t,e)=>!Object.is(t,e),Ds=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_a=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},or=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uo;const pi=()=>Uo||(Uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _i(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?mh(s):_i(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||le(t))return t}const ph=/;(?![^(]*\))/g,_h=/:([^]+)/,gh=/\/\*[^]*?\*\//g;function mh(t){const e={};return t.replace(gh,"").split(ph).forEach(n=>{if(n){const s=n.split(_h);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $r(t){let e="";if(he(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=$r(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vh=Br(yh);function ga(t){return!!t||t===""}const ma=t=>!!(t&&t.__v_isRef===!0),He=t=>he(t)?t:t==null?"":k(t)||le(t)&&(t.toString===da||!M(t.toString))?ma(t)?He(t.value):JSON.stringify(t,ya,2):String(t),ya=(t,e)=>ma(e)?ya(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Bi(s,r)+" =>"]=i,n),{})}:ha(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bi(n))}:Dt(e)?Bi(e):le(e)&&!k(e)&&!pa(e)?String(e):e,Bi=(t,e="")=>{var n;return Dt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class va{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ca(t){return new va(t)}function ba(){return we}function Ch(t,e=!1){we&&we.cleanups.push(t)}let ne;const Wi=new WeakSet;class Ea{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wi.has(this)&&(Wi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ho(this),Ia(this);const e=ne,n=Ge;ne=this,Ge=!0;try{return this.fn()}finally{Ta(this),ne=e,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gr(e);this.deps=this.depsTail=void 0,Ho(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lr(this)&&this.run()}get dirty(){return lr(this)}}let wa=0,$n,Vn;function Sa(t,e=!1){if(t.flags|=8,e){t.next=Vn,Vn=t;return}t.next=$n,$n=t}function Vr(){wa++}function jr(){if(--wa>0)return;if(Vn){let e=Vn;for(Vn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$n;){let e=$n;for($n=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ia(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ta(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Gr(s),bh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function lr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===es))return;t.globalVersion=es;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!lr(t)){t.flags&=-3;return}const n=ne,s=Ge;ne=t,Ge=!0;try{Ia(t);const i=t.fn(t._value);(e.version===0||It(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,Ge=s,Ta(t),t.flags&=-3}}function Gr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Gr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ge=!0;const Na=[];function kt(){Na.push(Ge),Ge=!1}function Mt(){const t=Na.pop();Ge=t===void 0?!0:t}function Ho(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let es=0;class Eh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Ge||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Eh(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Ra(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,es++,this.notify(e)}notify(e){Vr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jr()}}}function Ra(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ra(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Bs=new WeakMap,Kt=Symbol(""),ar=Symbol(""),ts=Symbol("");function Ce(t,e,n){if(Ge&&ne){let s=Bs.get(t);s||Bs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Kr),i.map=s,i.key=n),i.track()}}function ht(t,e,n,s,i,r){const o=Bs.get(t);if(!o){es++;return}const l=a=>{a&&a.trigger()};if(Vr(),e==="clear")o.forEach(l);else{const a=k(t),c=a&&Hr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===ts||!Dt(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(ts)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Kt)),dn(t)&&l(o.get(ar)));break;case"delete":a||(l(o.get(Kt)),dn(t)&&l(o.get(ar)));break;case"set":dn(t)&&l(o.get(Kt));break}}jr()}function wh(t,e){const n=Bs.get(t);return n&&n.get(e)}function rn(t){const e=G(t);return e===t?e:(Ce(e,"iterate",ts),Ke(t)?e:e.map(Se))}function zr(t){return Ce(t=G(t),"iterate",ts),t}const Sh={__proto__:null,[Symbol.iterator](){return Ui(this,Symbol.iterator,Se)},concat(...t){return rn(this).concat(...t.map(e=>k(e)?rn(e):e))},entries(){return Ui(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return ct(this,"every",t,e,void 0,arguments)},filter(t,e){return ct(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return ct(this,"find",t,e,Se,arguments)},findIndex(t,e){return ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ct(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hi(this,"includes",t)},indexOf(...t){return Hi(this,"indexOf",t)},join(t){return rn(this).join(t)},lastIndexOf(...t){return Hi(this,"lastIndexOf",t)},map(t,e){return ct(this,"map",t,e,void 0,arguments)},pop(){return On(this,"pop")},push(...t){return On(this,"push",t)},reduce(t,...e){return $o(this,"reduce",t,e)},reduceRight(t,...e){return $o(this,"reduceRight",t,e)},shift(){return On(this,"shift")},some(t,e){return ct(this,"some",t,e,void 0,arguments)},splice(...t){return On(this,"splice",t)},toReversed(){return rn(this).toReversed()},toSorted(t){return rn(this).toSorted(t)},toSpliced(...t){return rn(this).toSpliced(...t)},unshift(...t){return On(this,"unshift",t)},values(){return Ui(this,"values",Se)}};function Ui(t,e,n){const s=zr(t),i=s[e]();return s!==t&&!Ke(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Ih=Array.prototype;function ct(t,e,n,s,i,r){const o=zr(t),l=o!==t&&!Ke(t),a=o[e];if(a!==Ih[e]){const h=a.apply(t,r);return l?Se(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,Se(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function $o(t,e,n,s){const i=zr(t);let r=n;return i!==t&&(Ke(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Se(l),a,t)}),i[e](r,...s)}function Hi(t,e,n){const s=G(t);Ce(s,"iterate",ts);const i=s[e](...n);return(i===-1||i===!1)&&Qr(n[0])?(n[0]=G(n[0]),s[e](...n)):i}function On(t,e,n=[]){kt(),Vr();const s=G(t)[e].apply(t,n);return jr(),Mt(),s}const Th=Br("__proto__,__v_isRef,__isVue"),Aa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function xh(t){Dt(t)||(t=String(t));const e=G(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Pa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Lh:Ma:r?ka:Da).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=k(e);if(!i){let a;if(o&&(a=Sh[n]))return a;if(n==="hasOwnProperty")return xh}const l=Reflect.get(e,n,ce(e)?e:s);return(Dt(n)?Aa.has(n):Th(n))||(i||Ce(e,"get",n),r)?l:ce(l)?o&&Hr(n)?l:l.value:le(l)?i?Fa(l):gi(l):l}}class Oa extends Pa{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Jt(r);if(!Ke(s)&&!Jt(s)&&(r=G(r),s=G(s)),!k(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=k(e)&&Hr(n)?Number(n)<e.length:q(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===G(i)&&(o?It(s,r)&&ht(e,"set",n,s):ht(e,"add",n,s)),l}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ht(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Dt(n)||!Aa.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",k(e)?"length":Kt),Reflect.ownKeys(e)}}class Nh extends Pa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rh=new Oa,Ah=new Nh,Ph=new Oa(!0);const cr=t=>t,Ns=t=>Reflect.getPrototypeOf(t);function Oh(t,e,n){return function(...s){const i=this.__v_raw,r=G(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?cr:e?ur:Se;return!e&&Ce(r,"iterate",a?ar:Kt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dh(t,e){const n={get(i){const r=this.__v_raw,o=G(r),l=G(i);t||(It(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:a}=Ns(o),c=e?cr:t?ur:Se;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(G(i),"iterate",Kt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=G(r),l=G(i);return t||(It(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=G(l),c=e?cr:t?ur:Se;return!t&&Ce(a,"iterate",Kt),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return xe(n,t?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(i){!e&&!Ke(i)&&!Jt(i)&&(i=G(i));const r=G(this);return Ns(r).has.call(r,i)||(r.add(i),ht(r,"add",i,i)),this},set(i,r){!e&&!Ke(r)&&!Jt(r)&&(r=G(r));const o=G(this),{has:l,get:a}=Ns(o);let c=l.call(o,i);c||(i=G(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?It(r,u)&&ht(o,"set",i,r):ht(o,"add",i,r),this},delete(i){const r=G(this),{has:o,get:l}=Ns(r);let a=o.call(r,i);a||(i=G(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&ht(r,"delete",i,void 0),c},clear(){const i=G(this),r=i.size!==0,o=i.clear();return r&&ht(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Oh(i,t,e)}),n}function qr(t,e){const n=Dh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const kh={get:qr(!1,!1)},Mh={get:qr(!1,!0)},Fh={get:qr(!0,!1)};const Da=new WeakMap,ka=new WeakMap,Ma=new WeakMap,Lh=new WeakMap;function Bh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wh(t){return t.__v_skip||!Object.isExtensible(t)?0:Bh(hh(t))}function gi(t){return Jt(t)?t:Yr(t,!1,Rh,kh,Da)}function Uh(t){return Yr(t,!1,Ph,Mh,ka)}function Fa(t){return Yr(t,!0,Ah,Fh,Ma)}function Yr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Wh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function zt(t){return Jt(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function Ke(t){return!!(t&&t.__v_isShallow)}function Qr(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Jr(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&_a(t,"__v_skip",!0),t}const Se=t=>le(t)?gi(t):t,ur=t=>le(t)?Fa(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function fe(t){return La(t,!1)}function Hh(t){return La(t,!0)}function La(t,e){return ce(t)?t:new $h(t,e)}class $h{constructor(e,n){this.dep=new Kr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:G(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ke(e)||Jt(e);e=s?e:G(e),It(e,n)&&(this._rawValue=e,this._value=s?e:Se(e),this.dep.trigger())}}function dt(t){return ce(t)?t.value:t}const Vh={get:(t,e,n)=>e==="__v_raw"?t:dt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ba(t){return zt(t)?t:new Proxy(t,Vh)}function jh(t){const e=k(t)?new Array(t.length):{};for(const n in t)e[n]=Kh(t,n);return e}class Gh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wh(G(this._object),this._key)}}function Kh(t,e,n){const s=t[e];return ce(s)?s:new Gh(t,e,n)}class zh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Kr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Sa(this,!0),!0}get value(){const e=this.dep.track();return xa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qh(t,e,n=!1){let s,i;return M(t)?s=t:(s=t.get,i=t.set),new zh(s,i,n)}const As={},Ws=new WeakMap;let Ut;function Yh(t,e=!1,n=Ut){if(n){let s=Ws.get(n);s||Ws.set(n,s=[]),s.push(t)}}function Qh(t,e,n=X){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=A=>i?A:Ke(A)||i===!1||i===0?ft(A,1):ft(A);let u,h,d,_,m=!1,x=!1;if(ce(t)?(h=()=>t.value,m=Ke(t)):zt(t)?(h=()=>c(t),m=!0):k(t)?(x=!0,m=t.some(A=>zt(A)||Ke(A)),h=()=>t.map(A=>{if(ce(A))return A.value;if(zt(A))return c(A);if(M(A))return a?a(A,2):A()})):M(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){kt();try{d()}finally{Mt()}}const A=Ut;Ut=u;try{return a?a(t,3,[_]):t(_)}finally{Ut=A}}:h=it,e&&i){const A=h,z=i===!0?1/0:i;h=()=>ft(A(),z)}const W=ba(),U=()=>{u.stop(),W&&W.active&&Ur(W.effects,u)};if(r&&e){const A=e;e=(...z)=>{A(...z),U()}}let Y=x?new Array(t.length).fill(As):As;const Q=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const z=u.run();if(i||m||(x?z.some((at,ve)=>It(at,Y[ve])):It(z,Y))){d&&d();const at=Ut;Ut=u;try{const ve=[z,Y===As?void 0:x&&Y[0]===As?[]:Y,_];a?a(e,3,ve):e(...ve),Y=z}finally{Ut=at}}}else u.run()};return l&&l(Q),u=new Ea(h),u.scheduler=o?()=>o(Q,!1):Q,_=A=>Yh(A,!1,u),d=u.onStop=()=>{const A=Ws.get(u);if(A){if(a)a(A,4);else for(const z of A)z();Ws.delete(u)}},e?s?Q(!0):Y=u.run():o?o(Q.bind(null,!0),!0):u.run(),U.pause=u.pause.bind(u),U.resume=u.resume.bind(u),U.stop=U,U}function ft(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))ft(t.value,e,n);else if(k(t))for(let s=0;s<t.length;s++)ft(t[s],e,n);else if(ha(t)||dn(t))t.forEach(s=>{ft(s,e,n)});else if(pa(t)){for(const s in t)ft(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ft(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(t,e,n,s){try{return s?t(...s):t()}catch(i){mi(i,e,n)}}function ot(t,e,n,s){if(M(t)){const i=gs(t,e,n,s);return i&&fa(i)&&i.catch(r=>{mi(r,e,n)}),i}if(k(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ot(t[r],e,n,s));return i}}function mi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){kt(),gs(r,null,10,[t,a,c]),Mt();return}}Jh(t,n,i,s,o)}function Jh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ie=[];let nt=-1;const pn=[];let wt=null,cn=0;const Wa=Promise.resolve();let Us=null;function Ua(t){const e=Us||Wa;return t?e.then(this?t.bind(this):t):e}function Xh(t){let e=nt+1,n=Ie.length;for(;e<n;){const s=e+n>>>1,i=Ie[s],r=ns(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Xr(t){if(!(t.flags&1)){const e=ns(t),n=Ie[Ie.length-1];!n||!(t.flags&2)&&e>=ns(n)?Ie.push(t):Ie.splice(Xh(e),0,t),t.flags|=1,Ha()}}function Ha(){Us||(Us=Wa.then(Va))}function Zh(t){k(t)?pn.push(...t):wt&&t.id===-1?wt.splice(cn+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),Ha()}function Vo(t,e,n=nt+1){for(;n<Ie.length;n++){const s=Ie[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $a(t){if(pn.length){const e=[...new Set(pn)].sort((n,s)=>ns(n)-ns(s));if(pn.length=0,wt){wt.push(...e);return}for(wt=e,cn=0;cn<wt.length;cn++){const n=wt[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,cn=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Va(t){try{for(nt=0;nt<Ie.length;nt++){const e=Ie[nt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nt<Ie.length;nt++){const e=Ie[nt];e&&(e.flags&=-2)}nt=-1,Ie.length=0,$a(),Us=null,(Ie.length||pn.length)&&Va()}}let Re=null,ja=null;function Hs(t){const e=Re;return Re=t,ja=t&&t.type.__scopeId||null,e}function ef(t,e=Re,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zo(-1);const r=Hs(e);let o;try{o=t(...i)}finally{Hs(r),s._d&&Zo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function qt(t,e){if(Re===null)return t;const n=Ei(Re),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=X]=e[i];r&&(M(r)&&(r={mounted:r,updated:r}),r.deep&&ft(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Bt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(kt(),ot(a,n,8,[t.el,l,t,e]),Mt())}}const tf=Symbol("_vte"),nf=t=>t.__isTeleport;function Zr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ga(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $s(t,e,n,s,i=!1){if(k(t)){t.forEach((m,x)=>$s(m,e&&(k(e)?e[x]:e),n,s,i));return}if(jn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$s(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ei(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===X?l.refs={}:l.refs,h=l.setupState,d=G(h),_=h===X?()=>!1:m=>q(d,m);if(c!=null&&c!==a&&(he(c)?(u[c]=null,_(c)&&(h[c]=null)):ce(c)&&(c.value=null)),M(a))gs(a,l,12,[o,u]);else{const m=he(a),x=ce(a);if(m||x){const W=()=>{if(t.f){const U=m?_(a)?h[a]:u[a]:a.value;i?k(U)&&Ur(U,r):k(U)?U.includes(r)||U.push(r):m?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else m?(u[a]=o,_(a)&&(h[a]=o)):x&&(a.value=o,t.k&&(u[t.k]=o))};o?(W.id=-1,Me(W,n)):W()}}}pi().requestIdleCallback;pi().cancelIdleCallback;const jn=t=>!!t.type.__asyncLoader,Ka=t=>t.type.__isKeepAlive;function sf(t,e){za(t,"a",e)}function rf(t,e){za(t,"da",e)}function za(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(yi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ka(i.parent.vnode)&&of(s,e,n,i),i=i.parent}}function of(t,e,n,s){const i=yi(e,t,s,!0);qa(()=>{Ur(s[e],i)},n)}function yi(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{kt();const l=ms(n),a=ot(e,n,t,o);return l(),Mt(),a});return s?i.unshift(r):i.push(r),r}}const yt=t=>(e,n=ye)=>{(!is||t==="sp")&&yi(t,(...s)=>e(...s),n)},lf=yt("bm"),vi=yt("m"),af=yt("bu"),cf=yt("u"),uf=yt("bum"),qa=yt("um"),hf=yt("sp"),ff=yt("rtg"),df=yt("rtc");function pf(t,e=ye){yi("ec",t,e)}const _f="components",Ya=Symbol.for("v-ndc");function gf(t){return he(t)?mf(_f,t,!1)||t:t||Ya}function mf(t,e,n=!0,s=!1){const i=Re||ye;if(i){const r=i.type;{const l=rd(r,!1);if(l&&(l===e||l===Ue(e)||l===di(Ue(e))))return r}const o=jo(i[t]||r[t],e)||jo(i.appContext[t],e);return!o&&s?r:o}}function jo(t,e){return t&&(t[e]||t[Ue(e)]||t[di(Ue(e))])}const hr=t=>t?yc(t)?Ei(t):hr(t.parent):null,Gn=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hr(t.parent),$root:t=>hr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ja(t),$forceUpdate:t=>t.f||(t.f=()=>{Xr(t.update)}),$nextTick:t=>t.n||(t.n=Ua.bind(t.proxy)),$watch:t=>Uf.bind(t)}),$i=(t,e)=>t!==X&&!t.__isScriptSetup&&q(t,e),yf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if($i(s,e))return o[e]=1,s[e];if(i!==X&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==X&&q(n,e))return o[e]=4,n[e];fr&&(o[e]=0)}}const u=Gn[e];let h,d;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==X&&q(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return $i(i,e)?(i[e]=n,!0):s!==X&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==X&&q(t,o)||$i(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(Gn,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Go(t){return k(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fr=!0;function vf(t){const e=Ja(t),n=t.proxy,s=t.ctx;fr=!1,e.beforeCreate&&Ko(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:x,deactivated:W,beforeDestroy:U,beforeUnmount:Y,destroyed:Q,unmounted:A,render:z,renderTracked:at,renderTriggered:ve,errorCaptured:$,serverPrefetch:j,expose:ue,inheritAttrs:Be,components:Qe,directives:bt,filters:Nn}=e;if(c&&Cf(c,s,null),o)for(const H in o){const ee=o[H];M(ee)&&(s[H]=ee.bind(n))}if(i){const H=i.call(n,n);le(H)&&(t.data=gi(H))}if(fr=!0,r)for(const H in r){const ee=r[H],Ft=M(ee)?ee.bind(n,n):M(ee.get)?ee.get.bind(n,n):it,Ts=!M(ee)&&M(ee.set)?ee.set.bind(n):it,Lt=Cc({get:Ft,set:Ts});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:Je=>Lt.value=Je})}if(l)for(const H in l)Qa(l[H],s,n,H);if(a){const H=M(a)?a.call(n):a;Reflect.ownKeys(H).forEach(ee=>{Tf(ee,H[ee])})}u&&Ko(u,t,"c");function ae(H,ee){k(ee)?ee.forEach(Ft=>H(Ft.bind(n))):ee&&H(ee.bind(n))}if(ae(lf,h),ae(vi,d),ae(af,_),ae(cf,m),ae(sf,x),ae(rf,W),ae(pf,$),ae(df,at),ae(ff,ve),ae(uf,Y),ae(qa,A),ae(hf,j),k(ue))if(ue.length){const H=t.exposed||(t.exposed={});ue.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>n[ee],set:Ft=>n[ee]=Ft})})}else t.exposed||(t.exposed={});z&&t.render===it&&(t.render=z),Be!=null&&(t.inheritAttrs=Be),Qe&&(t.components=Qe),bt&&(t.directives=bt),j&&Ga(t)}function Cf(t,e,n=it){k(t)&&(t=dr(t));for(const s in t){const i=t[s];let r;le(i)?"default"in i?r=Kn(i.from||s,i.default,!0):r=Kn(i.from||s):r=Kn(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ko(t,e,n){ot(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qa(t,e,n,s){let i=s.includes(".")?hc(n,s):()=>n[s];if(he(t)){const r=e[t];M(r)&&ks(i,r)}else if(M(t))ks(i,t.bind(n));else if(le(t))if(k(t))t.forEach(r=>Qa(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&ks(i,r,t)}}function Ja(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Vs(a,c,o,!0)),Vs(a,e,o)),le(e)&&r.set(e,a),a}function Vs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Vs(t,r,n,!0),i&&i.forEach(o=>Vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=bf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const bf={data:zo,props:qo,emits:qo,methods:Bn,computed:Bn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Bn,directives:Bn,watch:wf,provide:zo,inject:Ef};function zo(t,e){return e?t?function(){return xe(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Ef(t,e){return Bn(dr(t),dr(e))}function dr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Bn(t,e){return t?xe(Object.create(null),t,e):e}function qo(t,e){return t?k(t)&&k(e)?[...new Set([...t,...e])]:xe(Object.create(null),Go(t),Go(e??{})):e}function wf(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Ee(t[s],e[s]);return n}function Xa(){return{app:null,config:{isNativeTag:ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function If(t,e){return function(s,i=null){M(s)||(s=xe({},s)),i!=null&&!le(i)&&(i=null);const r=Xa(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Sf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ld,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&M(u.install)?(o.add(u),u.install(c,...h)):M(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||ze(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,Ei(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(ot(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Yt;Yt=c;try{return u()}finally{Yt=h}}};return c}}let Yt=null;function Tf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Kn(t,e,n=!1){const s=ye||Re;if(s||Yt){const i=Yt?Yt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}function xf(){return!!(ye||Re||Yt)}const Za={},ec=()=>Object.create(Za),tc=t=>Object.getPrototypeOf(t)===Za;function Nf(t,e,n,s=!1){const i={},r=ec();t.propsDefaults=Object.create(null),nc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Uh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Rf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=G(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ci(t.emitsOptions,d))continue;const _=e[d];if(a)if(q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Ue(d);i[m]=pr(a,l,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{nc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=nn(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=pr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&ht(t.attrs,"set","")}function nc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Hn(a))continue;const c=e[a];let u;i&&q(i,u=Ue(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Ci(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=G(n),c=l||X;for(let u=0;u<r.length;u++){const h=r[u];n[h]=pr(i,a,h,c[h],t,!q(c,h))}}return o}function pr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ms(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}const Af=new WeakMap;function sc(t,e,n=!1){const s=n?Af:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,_]=sc(h,e,!0);xe(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return le(t)&&s.set(t,fn),fn;if(k(r))for(let u=0;u<r.length;u++){const h=Ue(r[u]);Yo(h)&&(o[h]=X)}else if(r)for(const u in r){const h=Ue(u);if(Yo(h)){const d=r[u],_=o[h]=k(d)||M(d)?{type:d}:xe({},d),m=_.type;let x=!1,W=!0;if(k(m))for(let U=0;U<m.length;++U){const Y=m[U],Q=M(Y)&&Y.name;if(Q==="Boolean"){x=!0;break}else Q==="String"&&(W=!1)}else x=M(m)&&m.name==="Boolean";_[0]=x,_[1]=W,(x||q(_,"default"))&&l.push(h)}}const c=[o,l];return le(t)&&s.set(t,c),c}function Yo(t){return t[0]!=="$"&&!Hn(t)}const ic=t=>t[0]==="_"||t==="$stable",eo=t=>k(t)?t.map(st):[st(t)],Pf=(t,e,n)=>{if(e._n)return e;const s=ef((...i)=>eo(e(...i)),n);return s._c=!1,s},rc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ic(i))continue;const r=t[i];if(M(r))e[i]=Pf(i,r,s);else if(r!=null){const o=eo(r);e[i]=()=>o}}},oc=(t,e)=>{const n=eo(e);t.slots.default=()=>n},lc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Of=(t,e,n)=>{const s=t.slots=ec();if(t.vnode.shapeFlag&32){const i=e._;i?(lc(s,e,n),n&&_a(s,"_",i,!0)):rc(e,s)}else e&&oc(t,e)},Df=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=X;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:lc(i,e,n):(r=!e.$stable,rc(e,i)),o=e}else e&&(oc(t,e),o={default:1});if(r)for(const l in i)!ic(l)&&o[l]==null&&delete i[l]},Me=zf;function kf(t){return Mf(t)}function Mf(t,e){const n=pi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=it,insertStaticContent:m}=t,x=(f,p,g,C=null,y=null,v=null,I=void 0,S=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!Dn(f,p)&&(C=xs(f),Je(f,y,v,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:b,ref:P,shapeFlag:T}=p;switch(b){case bi:W(f,p,g,C);break;case Xt:U(f,p,g,C);break;case ji:f==null&&Y(p,g,C,I);break;case Fe:Qe(f,p,g,C,y,v,I,S,w);break;default:T&1?z(f,p,g,C,y,v,I,S,w):T&6?bt(f,p,g,C,y,v,I,S,w):(T&64||T&128)&&b.process(f,p,g,C,y,v,I,S,w,An)}P!=null&&y&&$s(P,f&&f.ref,v,p||f,!p)},W=(f,p,g,C)=>{if(f==null)s(p.el=l(p.children),g,C);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},U=(f,p,g,C)=>{f==null?s(p.el=a(p.children||""),g,C):p.el=f.el},Y=(f,p,g,C)=>{[f.el,f.anchor]=m(f.children,p,g,C,f.el,f.anchor)},Q=({el:f,anchor:p},g,C)=>{let y;for(;f&&f!==p;)y=d(f),s(f,g,C),f=y;s(p,g,C)},A=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},z=(f,p,g,C,y,v,I,S,w)=>{p.type==="svg"?I="svg":p.type==="math"&&(I="mathml"),f==null?at(p,g,C,y,v,I,S,w):j(f,p,y,v,I,S,w)},at=(f,p,g,C,y,v,I,S)=>{let w,b;const{props:P,shapeFlag:T,transition:R,dirs:D}=f;if(w=f.el=o(f.type,v,P&&P.is,P),T&8?u(w,f.children):T&16&&$(f.children,w,null,C,y,Vi(f,v),I,S),D&&Bt(f,null,C,"created"),ve(w,f,f.scopeId,I,C),P){for(const te in P)te!=="value"&&!Hn(te)&&r(w,te,null,P[te],v,C);"value"in P&&r(w,"value",null,P.value,v),(b=P.onVnodeBeforeMount)&&tt(b,C,f)}D&&Bt(f,null,C,"beforeMount");const V=Ff(y,R);V&&R.beforeEnter(w),s(w,p,g),((b=P&&P.onVnodeMounted)||V||D)&&Me(()=>{b&&tt(b,C,f),V&&R.enter(w),D&&Bt(f,null,C,"mounted")},y)},ve=(f,p,g,C,y)=>{if(g&&_(f,g),C)for(let v=0;v<C.length;v++)_(f,C[v]);if(y){let v=y.subTree;if(p===v||dc(v.type)&&(v.ssContent===p||v.ssFallback===p)){const I=y.vnode;ve(f,I,I.scopeId,I.slotScopeIds,y.parent)}}},$=(f,p,g,C,y,v,I,S,w=0)=>{for(let b=w;b<f.length;b++){const P=f[b]=S?St(f[b]):st(f[b]);x(null,P,p,g,C,y,v,I,S)}},j=(f,p,g,C,y,v,I)=>{const S=p.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:P}=p;w|=f.patchFlag&16;const T=f.props||X,R=p.props||X;let D;if(g&&Wt(g,!1),(D=R.onVnodeBeforeUpdate)&&tt(D,g,p,f),P&&Bt(p,f,g,"beforeUpdate"),g&&Wt(g,!0),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&u(S,""),b?ue(f.dynamicChildren,b,S,g,C,Vi(p,y),v):I||ee(f,p,S,null,g,C,Vi(p,y),v,!1),w>0){if(w&16)Be(S,T,R,g,y);else if(w&2&&T.class!==R.class&&r(S,"class",null,R.class,y),w&4&&r(S,"style",T.style,R.style,y),w&8){const V=p.dynamicProps;for(let te=0;te<V.length;te++){const J=V[te],De=T[J],Ne=R[J];(Ne!==De||J==="value")&&r(S,J,De,Ne,y,g)}}w&1&&f.children!==p.children&&u(S,p.children)}else!I&&b==null&&Be(S,T,R,g,y);((D=R.onVnodeUpdated)||P)&&Me(()=>{D&&tt(D,g,p,f),P&&Bt(p,f,g,"updated")},C)},ue=(f,p,g,C,y,v,I)=>{for(let S=0;S<p.length;S++){const w=f[S],b=p[S],P=w.el&&(w.type===Fe||!Dn(w,b)||w.shapeFlag&70)?h(w.el):g;x(w,b,P,null,C,y,v,I,!0)}},Be=(f,p,g,C,y)=>{if(p!==g){if(p!==X)for(const v in p)!Hn(v)&&!(v in g)&&r(f,v,p[v],null,y,C);for(const v in g){if(Hn(v))continue;const I=g[v],S=p[v];I!==S&&v!=="value"&&r(f,v,S,I,y,C)}"value"in g&&r(f,"value",p.value,g.value,y)}},Qe=(f,p,g,C,y,v,I,S,w)=>{const b=p.el=f?f.el:l(""),P=p.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:D}=p;D&&(S=S?S.concat(D):D),f==null?(s(b,g,C),s(P,g,C),$(p.children||[],g,P,y,v,I,S,w)):T>0&&T&64&&R&&f.dynamicChildren?(ue(f.dynamicChildren,R,g,y,v,I,S),(p.key!=null||y&&p===y.subTree)&&ac(f,p,!0)):ee(f,p,g,P,y,v,I,S,w)},bt=(f,p,g,C,y,v,I,S,w)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?y.ctx.activate(p,g,C,I,w):Nn(p,g,C,y,v,I,w):Is(f,p,w)},Nn=(f,p,g,C,y,v,I)=>{const S=f.component=ed(f,C,y);if(Ka(f)&&(S.ctx.renderer=An),td(S,!1,I),S.asyncDep){if(y&&y.registerDep(S,ae,I),!f.el){const w=S.subTree=ze(Xt);U(null,w,p,g)}}else ae(S,f,p,g,y,v,I)},Is=(f,p,g)=>{const C=p.component=f.component;if(Gf(f,p,g))if(C.asyncDep&&!C.asyncResolved){H(C,p,g);return}else C.next=p,C.update();else p.el=f.el,C.vnode=p},ae=(f,p,g,C,y,v,I)=>{const S=()=>{if(f.isMounted){let{next:T,bu:R,u:D,parent:V,vnode:te}=f;{const Ze=cc(f);if(Ze){T&&(T.el=te.el,H(f,T,I)),Ze.asyncDep.then(()=>{f.isUnmounted||S()});return}}let J=T,De;Wt(f,!1),T?(T.el=te.el,H(f,T,I)):T=te,R&&Ds(R),(De=T.props&&T.props.onVnodeBeforeUpdate)&&tt(De,V,T,te),Wt(f,!0);const Ne=Jo(f),Xe=f.subTree;f.subTree=Ne,x(Xe,Ne,h(Xe.el),xs(Xe),f,y,v),T.el=Ne.el,J===null&&Kf(f,Ne.el),D&&Me(D,y),(De=T.props&&T.props.onVnodeUpdated)&&Me(()=>tt(De,V,T,te),y)}else{let T;const{el:R,props:D}=p,{bm:V,m:te,parent:J,root:De,type:Ne}=f,Xe=jn(p);Wt(f,!1),V&&Ds(V),!Xe&&(T=D&&D.onVnodeBeforeMount)&&tt(T,J,p),Wt(f,!0);{De.ce&&De.ce._injectChildStyle(Ne);const Ze=f.subTree=Jo(f);x(null,Ze,g,C,f,y,v),p.el=Ze.el}if(te&&Me(te,y),!Xe&&(T=D&&D.onVnodeMounted)){const Ze=p;Me(()=>tt(T,J,Ze),y)}(p.shapeFlag&256||J&&jn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&Me(f.a,y),f.isMounted=!0,p=g=C=null}};f.scope.on();const w=f.effect=new Ea(S);f.scope.off();const b=f.update=w.run.bind(w),P=f.job=w.runIfDirty.bind(w);P.i=f,P.id=f.uid,w.scheduler=()=>Xr(P),Wt(f,!0),b()},H=(f,p,g)=>{p.component=f;const C=f.vnode.props;f.vnode=p,f.next=null,Rf(f,p.props,C,g),Df(f,p.children,g),kt(),Vo(f),Mt()},ee=(f,p,g,C,y,v,I,S,w=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,T=p.children,{patchFlag:R,shapeFlag:D}=p;if(R>0){if(R&128){Ts(b,T,g,C,y,v,I,S,w);return}else if(R&256){Ft(b,T,g,C,y,v,I,S,w);return}}D&8?(P&16&&Rn(b,y,v),T!==b&&u(g,T)):P&16?D&16?Ts(b,T,g,C,y,v,I,S,w):Rn(b,y,v,!0):(P&8&&u(g,""),D&16&&$(T,g,C,y,v,I,S,w))},Ft=(f,p,g,C,y,v,I,S,w)=>{f=f||fn,p=p||fn;const b=f.length,P=p.length,T=Math.min(b,P);let R;for(R=0;R<T;R++){const D=p[R]=w?St(p[R]):st(p[R]);x(f[R],D,g,null,y,v,I,S,w)}b>P?Rn(f,y,v,!0,!1,T):$(p,g,C,y,v,I,S,w,T)},Ts=(f,p,g,C,y,v,I,S,w)=>{let b=0;const P=p.length;let T=f.length-1,R=P-1;for(;b<=T&&b<=R;){const D=f[b],V=p[b]=w?St(p[b]):st(p[b]);if(Dn(D,V))x(D,V,g,null,y,v,I,S,w);else break;b++}for(;b<=T&&b<=R;){const D=f[T],V=p[R]=w?St(p[R]):st(p[R]);if(Dn(D,V))x(D,V,g,null,y,v,I,S,w);else break;T--,R--}if(b>T){if(b<=R){const D=R+1,V=D<P?p[D].el:C;for(;b<=R;)x(null,p[b]=w?St(p[b]):st(p[b]),g,V,y,v,I,S,w),b++}}else if(b>R)for(;b<=T;)Je(f[b],y,v,!0),b++;else{const D=b,V=b,te=new Map;for(b=V;b<=R;b++){const ke=p[b]=w?St(p[b]):st(p[b]);ke.key!=null&&te.set(ke.key,b)}let J,De=0;const Ne=R-V+1;let Xe=!1,Ze=0;const Pn=new Array(Ne);for(b=0;b<Ne;b++)Pn[b]=0;for(b=D;b<=T;b++){const ke=f[b];if(De>=Ne){Je(ke,y,v,!0);continue}let et;if(ke.key!=null)et=te.get(ke.key);else for(J=V;J<=R;J++)if(Pn[J-V]===0&&Dn(ke,p[J])){et=J;break}et===void 0?Je(ke,y,v,!0):(Pn[et-V]=b+1,et>=Ze?Ze=et:Xe=!0,x(ke,p[et],g,null,y,v,I,S,w),De++)}const Bo=Xe?Lf(Pn):fn;for(J=Bo.length-1,b=Ne-1;b>=0;b--){const ke=V+b,et=p[ke],Wo=ke+1<P?p[ke+1].el:C;Pn[b]===0?x(null,et,g,Wo,y,v,I,S,w):Xe&&(J<0||b!==Bo[J]?Lt(et,g,Wo,2):J--)}}},Lt=(f,p,g,C,y=null)=>{const{el:v,type:I,transition:S,children:w,shapeFlag:b}=f;if(b&6){Lt(f.component.subTree,p,g,C);return}if(b&128){f.suspense.move(p,g,C);return}if(b&64){I.move(f,p,g,An);return}if(I===Fe){s(v,p,g);for(let T=0;T<w.length;T++)Lt(w[T],p,g,C);s(f.anchor,p,g);return}if(I===ji){Q(f,p,g);return}if(C!==2&&b&1&&S)if(C===0)S.beforeEnter(v),s(v,p,g),Me(()=>S.enter(v),y);else{const{leave:T,delayLeave:R,afterLeave:D}=S,V=()=>s(v,p,g),te=()=>{T(v,()=>{V(),D&&D()})};R?R(v,V,te):te()}else s(v,p,g)},Je=(f,p,g,C=!1,y=!1)=>{const{type:v,props:I,ref:S,children:w,dynamicChildren:b,shapeFlag:P,patchFlag:T,dirs:R,cacheIndex:D}=f;if(T===-2&&(y=!1),S!=null&&$s(S,null,g,f,!0),D!=null&&(p.renderCache[D]=void 0),P&256){p.ctx.deactivate(f);return}const V=P&1&&R,te=!jn(f);let J;if(te&&(J=I&&I.onVnodeBeforeUnmount)&&tt(J,p,f),P&6)ah(f.component,g,C);else{if(P&128){f.suspense.unmount(g,C);return}V&&Bt(f,null,p,"beforeUnmount"),P&64?f.type.remove(f,p,g,An,C):b&&!b.hasOnce&&(v!==Fe||T>0&&T&64)?Rn(b,p,g,!1,!0):(v===Fe&&T&384||!y&&P&16)&&Rn(w,p,g),C&&Fo(f)}(te&&(J=I&&I.onVnodeUnmounted)||V)&&Me(()=>{J&&tt(J,p,f),V&&Bt(f,null,p,"unmounted")},g)},Fo=f=>{const{type:p,el:g,anchor:C,transition:y}=f;if(p===Fe){lh(g,C);return}if(p===ji){A(f);return}const v=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:S}=y,w=()=>I(g,v);S?S(f.el,v,w):w()}else v()},lh=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},ah=(f,p,g)=>{const{bum:C,scope:y,job:v,subTree:I,um:S,m:w,a:b}=f;Qo(w),Qo(b),C&&Ds(C),y.stop(),v&&(v.flags|=8,Je(I,f,p,g)),S&&Me(S,p),Me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Rn=(f,p,g,C=!1,y=!1,v=0)=>{for(let I=v;I<f.length;I++)Je(f[I],p,g,C,y)},xs=f=>{if(f.shapeFlag&6)return xs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[tf];return g?d(g):p};let Fi=!1;const Lo=(f,p,g)=>{f==null?p._vnode&&Je(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,g),p._vnode=f,Fi||(Fi=!0,Vo(),$a(),Fi=!1)},An={p:x,um:Je,m:Lt,r:Fo,mt:Nn,mc:$,pc:ee,pbc:ue,n:xs,o:t};return{render:Lo,hydrate:void 0,createApp:If(Lo)}}function Vi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ff(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ac(t,e,n=!1){const s=t.children,i=e.children;if(k(s)&&k(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=St(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ac(o,l)),l.type===bi&&(l.el=o.el)}}function Lf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function cc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cc(e)}function Qo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Bf=Symbol.for("v-scx"),Wf=()=>Kn(Bf);function ks(t,e,n){return uc(t,e,n)}function uc(t,e,n=X){const{immediate:s,deep:i,flush:r,once:o}=n,l=xe({},n),a=e&&s||!e&&r!=="post";let c;if(is){if(r==="sync"){const _=Wf();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=it,_.resume=it,_.pause=it,_}}const u=ye;l.call=(_,m,x)=>ot(_,u,m,x);let h=!1;r==="post"?l.scheduler=_=>{Me(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,m)=>{m?_():Xr(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=Qh(t,e,l);return is&&(c?c.push(d):a&&d()),d}function Uf(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?hc(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=ms(this),l=uc(i,r.bind(s),n);return o(),l}function hc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Hf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ue(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function $f(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let i=n;const r=e.startsWith("update:"),o=r&&Hf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(or)));let l,a=s[l=Li(e)]||s[l=Li(Ue(e))];!a&&r&&(a=s[l=Li(nn(e))]),a&&ot(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ot(c,t,6,i)}}function fc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=fc(c,e,!0);u&&(l=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(le(t)&&s.set(t,null),null):(k(r)?r.forEach(a=>o[a]=null):xe(o,r),le(t)&&s.set(t,o),o)}function Ci(t,e){return!t||!ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,nn(e))||q(t,e))}function Jo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:x}=t,W=Hs(t);let U,Y;try{if(n.shapeFlag&4){const A=i||s,z=A;U=st(c.call(z,A,u,h,_,d,m)),Y=l}else{const A=e;U=st(A.length>1?A(h,{attrs:l,slots:o,emit:a}):A(h,null)),Y=e.props?l:Vf(l)}}catch(A){zn.length=0,mi(A,t,1),U=ze(Xt)}let Q=U;if(Y&&x!==!1){const A=Object.keys(Y),{shapeFlag:z}=Q;A.length&&z&7&&(r&&A.some(Wr)&&(Y=jf(Y,r)),Q=yn(Q,Y,!1,!0))}return n.dirs&&(Q=yn(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Zr(Q,n.transition),U=Q,Hs(W),U}const Vf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ui(n))&&((e||(e={}))[n]=t[n]);return e},jf=(t,e)=>{const n={};for(const s in t)(!Wr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Xo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ci(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Xo(s,o,c):!0:!!o;return!1}function Xo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ci(n,r))return!0}return!1}function Kf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const dc=t=>t.__isSuspense;function zf(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):Zh(t)}const Fe=Symbol.for("v-fgt"),bi=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),ji=Symbol.for("v-stc"),zn=[];let Le=null;function We(t=!1){zn.push(Le=t?null:[])}function qf(){zn.pop(),Le=zn[zn.length-1]||null}let ss=1;function Zo(t,e=!1){ss+=t,t<0&&Le&&e&&(Le.hasOnce=!0)}function pc(t){return t.dynamicChildren=ss>0?Le||fn:null,qf(),ss>0&&Le&&Le.push(t),t}function rt(t,e,n,s,i,r){return pc(N(t,e,n,s,i,r,!0))}function _c(t,e,n,s,i){return pc(ze(t,e,n,s,i,!0))}function gc(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const mc=({key:t})=>t??null,Ms=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||ce(t)||M(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,s=0,i=null,r=t===Fe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mc(e),ref:e&&Ms(e),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return l?(to(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),ss>0&&!o&&Le&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Le.push(a),a}const ze=Yf;function Yf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ya)&&(t=Xt),gc(t)){const l=yn(t,e,!0);return n&&to(l,n),ss>0&&!r&&Le&&(l.shapeFlag&6?Le[Le.indexOf(t)]=l:Le.push(l)),l.patchFlag=-2,l}if(od(t)&&(t=t.__vccOpts),e){e=Qf(e);let{class:l,style:a}=e;l&&!he(l)&&(e.class=$r(l)),le(a)&&(Qr(a)&&!k(a)&&(a=xe({},a)),e.style=_i(a))}const o=he(t)?1:dc(t)?128:nf(t)?64:le(t)?4:M(t)?2:0;return N(t,e,n,s,i,o,r,!0)}function Qf(t){return t?Qr(t)||tc(t)?xe({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Jf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&mc(c),ref:e&&e.ref?n&&r?k(r)?r.concat(Ms(e)):[r,Ms(e)]:Ms(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Zr(u,a.clone(u)),u}function Vt(t=" ",e=0){return ze(bi,null,t,e)}function js(t="",e=!1){return e?(We(),_c(Xt,null,t)):ze(Xt,null,t)}function st(t){return t==null||typeof t=="boolean"?ze(Xt):k(t)?ze(Fe,null,t.slice()):gc(t)?St(t):ze(bi,null,String(t))}function St(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function to(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),to(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!tc(e)?e._ctx=Re:i===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),s&64?(n=16,e=[Vt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=$r([e.class,s.class]));else if(i==="style")e.style=_i([e.style,s.style]);else if(ui(i)){const r=e[i],o=s[i];o&&r!==o&&!(k(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function tt(t,e,n,s=null){ot(t,e,7,[n,s])}const Xf=Xa();let Zf=0;function ed(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Xf,r={uid:Zf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new va(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sc(s,i),emitsOptions:fc(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$f.bind(null,r),t.ce&&t.ce(r),r}let ye=null,Gs,_r;{const t=pi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Gs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),_r=e("__VUE_SSR_SETTERS__",n=>is=n)}const ms=t=>{const e=ye;return Gs(t),t.scope.on(),()=>{t.scope.off(),Gs(e)}},el=()=>{ye&&ye.scope.off(),Gs(null)};function yc(t){return t.vnode.shapeFlag&4}let is=!1;function td(t,e=!1,n=!1){e&&_r(e);const{props:s,children:i}=t.vnode,r=yc(t);Nf(t,s,r,e),Of(t,i,n);const o=r?nd(t,e):void 0;return e&&_r(!1),o}function nd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yf);const{setup:s}=n;if(s){kt();const i=t.setupContext=s.length>1?id(t):null,r=ms(t),o=gs(s,t,0,[t.props,i]),l=fa(o);if(Mt(),r(),(l||t.sp)&&!jn(t)&&Ga(t),l){if(o.then(el,el),e)return o.then(a=>{tl(t,a)}).catch(a=>{mi(a,t,0)});t.asyncDep=o}else tl(t,o)}else vc(t)}function tl(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Ba(e)),vc(t)}function vc(t,e,n){const s=t.type;t.render||(t.render=s.render||it);{const i=ms(t);kt();try{vf(t)}finally{Mt(),i()}}}const sd={get(t,e){return Ce(t,"get",""),t[e]}};function id(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sd),slots:t.slots,emit:t.emit,expose:e}}function Ei(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ba(Jr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function rd(t,e=!0){return M(t)?t.displayName||t.name:t.name||e&&t.__name}function od(t){return M(t)&&"__vccOpts"in t}const Cc=(t,e)=>qh(t,e,is),ld="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gr;const nl=typeof window<"u"&&window.trustedTypes;if(nl)try{gr=nl.createPolicy("vue",{createHTML:t=>t})}catch{}const bc=gr?t=>gr.createHTML(t):t=>t,ad="http://www.w3.org/2000/svg",cd="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,sl=ut&&ut.createElement("template"),ud={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ut.createElementNS(ad,t):e==="mathml"?ut.createElementNS(cd,t):n?ut.createElement(t,{is:n}):ut.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ut.createTextNode(t),createComment:t=>ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{sl.innerHTML=bc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=sl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hd=Symbol("_vtc");function fd(t,e,n){const s=t[hd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const il=Symbol("_vod"),dd=Symbol("_vsh"),pd=Symbol(""),_d=/(^|;)\s*display\s*:/;function gd(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Fs(s,l,"")}else for(const o in e)n[o]==null&&Fs(s,o,"");for(const o in n)o==="display"&&(r=!0),Fs(s,o,n[o])}else if(i){if(e!==n){const o=s[pd];o&&(n+=";"+o),s.cssText=n,r=_d.test(n)}}else e&&t.removeAttribute("style");il in t&&(t[il]=r?s.display:"",t[dd]&&(s.display="none"))}const rl=/\s*!important$/;function Fs(t,e,n){if(k(n))n.forEach(s=>Fs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=md(t,e);rl.test(n)?t.setProperty(nn(s),n.replace(rl,""),"important"):t[s]=n}}const ol=["Webkit","Moz","ms"],Gi={};function md(t,e){const n=Gi[e];if(n)return n;let s=Ue(e);if(s!=="filter"&&s in t)return Gi[e]=s;s=di(s);for(let i=0;i<ol.length;i++){const r=ol[i]+s;if(r in t)return Gi[e]=r}return e}const ll="http://www.w3.org/1999/xlink";function al(t,e,n,s,i,r=vh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ll,e.slice(6,e.length)):t.setAttributeNS(ll,e,n):n==null||r&&!ga(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Dt(n)?String(n):n)}function cl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?bc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ga(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function yd(t,e,n,s){t.removeEventListener(e,n,s)}const ul=Symbol("_vei");function vd(t,e,n,s,i=null){const r=t[ul]||(t[ul]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Cd(e);if(s){const c=r[e]=wd(s,i);un(t,l,c,a)}else o&&(yd(t,l,o,a),r[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function Cd(t){let e;if(hl.test(t)){e={};let s;for(;s=t.match(hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let Ki=0;const bd=Promise.resolve(),Ed=()=>Ki||(bd.then(()=>Ki=0),Ki=Date.now());function wd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ot(Sd(s,n.value),e,5,[s])};return n.value=t,n.attached=Ed(),n}function Sd(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const fl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Id=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?fd(t,s,o):e==="style"?gd(t,n,s):ui(e)?Wr(e)||vd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Td(t,e,s,o))?(cl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&al(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(s))?cl(t,Ue(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),al(t,e,s,o))};function Td(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&fl(e)&&M(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return fl(e)&&he(n)?!1:e in t}const dl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return k(e)?n=>Ds(e,n):e};function xd(t){t.target.composing=!0}function pl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zi=Symbol("_assign"),Qt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[zi]=dl(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=or(l)),t[zi](l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",xd),un(t,"compositionend",pl),un(t,"change",pl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[zi]=dl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?or(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Nd=xe({patchProp:Id},ud);let _l;function Rd(){return _l||(_l=kf(Nd))}const Ad=(...t)=>{const e=Rd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Od(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Pd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Pd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Od(t){return he(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ec;const wi=t=>Ec=t,wc=Symbol();function mr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qn||(qn={}));function Dd(){const t=Ca(!0),e=t.run(()=>fe({}));let n=[],s=[];const i=Jr({install(r){wi(i),i._a=r,r.provide(wc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Sc=()=>{};function gl(t,e,n,s=Sc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ba()&&Ch(i),i}function on(t,...e){t.slice().forEach(n=>{n(...e)})}const kd=t=>t(),ml=Symbol(),qi=Symbol();function yr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];mr(i)&&mr(s)&&t.hasOwnProperty(n)&&!ce(s)&&!zt(s)?t[n]=yr(i,s):t[n]=s}return t}const Md=Symbol();function Fd(t){return!mr(t)||!t.hasOwnProperty(Md)}const{assign:Et}=Object;function Ld(t){return!!(ce(t)&&t.effect)}function Bd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=jh(n.state.value[t]);return Et(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Jr(Cc(()=>{wi(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=Ic(t,c,e,n,s,!0),a}function Ic(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),fe({});let x;function W($){let j;c=u=!1,typeof $=="function"?($(s.state.value[t]),j={type:qn.patchFunction,storeId:t,events:_}):(yr(s.state.value[t],$),j={type:qn.patchObject,payload:$,storeId:t,events:_});const ue=x=Symbol();Ua().then(()=>{x===ue&&(c=!0)}),u=!0,on(h,j,s.state.value[t])}const U=r?function(){const{state:j}=n,ue=j?j():{};this.$patch(Be=>{Et(Be,ue)})}:Sc;function Y(){o.stop(),h=[],d=[],s._s.delete(t)}const Q=($,j="")=>{if(ml in $)return $[qi]=j,$;const ue=function(){wi(s);const Be=Array.from(arguments),Qe=[],bt=[];function Nn(H){Qe.push(H)}function Is(H){bt.push(H)}on(d,{args:Be,name:ue[qi],store:z,after:Nn,onError:Is});let ae;try{ae=$.apply(this&&this.$id===t?this:z,Be)}catch(H){throw on(bt,H),H}return ae instanceof Promise?ae.then(H=>(on(Qe,H),H)).catch(H=>(on(bt,H),Promise.reject(H))):(on(Qe,ae),ae)};return ue[ml]=!0,ue[qi]=j,ue},A={_p:s,$id:t,$onAction:gl.bind(null,d),$patch:W,$reset:U,$subscribe($,j={}){const ue=gl(h,$,j.detached,()=>Be()),Be=o.run(()=>ks(()=>s.state.value[t],Qe=>{(j.flush==="sync"?u:c)&&$({storeId:t,type:qn.direct,events:_},Qe)},Et({},a,j)));return ue},$dispose:Y},z=gi(A);s._s.set(t,z);const ve=(s._a&&s._a.runWithContext||kd)(()=>s._e.run(()=>(o=Ca()).run(()=>e({action:Q}))));for(const $ in ve){const j=ve[$];if(ce(j)&&!Ld(j)||zt(j))r||(m&&Fd(j)&&(ce(j)?j.value=m[$]:yr(j,m[$])),s.state.value[t][$]=j);else if(typeof j=="function"){const ue=Q(j,$);ve[$]=ue,l.actions[$]=j}}return Et(z,ve),Et(G(z),ve),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:$=>{W(j=>{Et(j,$)})}}),s._p.forEach($=>{Et(z,o.run(()=>$({store:z,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(z.$state,m),c=!0,u=!0,z}/*! #__NO_SIDE_EFFECTS__ */function Wd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=xf();return o=o||(a?Kn(wc,null):null),o&&wi(o),o=Ec,o._s.has(t)||(i?Ic(t,e,s,o):Bd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Ud=()=>{};var yl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw wn(e)},wn=function(t){return new Error("Firebase Database ("+Tc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},no={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new $d;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nc=function(t){const e=xc(t);return no.encodeByteArray(e,!0)},Ks=function(t){return Nc(t).replace(/\./g,"")},vr=function(t){try{return no.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){return Rc(void 0,t)}function Rc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jd(n)||(t[n]=Rc(t[n],e[n]));return t}function jd(t){return t!=="__proto__"}/**
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
 */function Gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kd=()=>Gd().__FIREBASE_DEFAULTS__,zd=()=>{if(typeof process>"u"||typeof yl>"u")return;const t=yl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vr(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return Ud()||Kd()||zd()||qd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yd=t=>{var e,n;return(n=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qd=t=>{const e=Yd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Pc=()=>{var t;return(t=Ac())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Jd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ks(JSON.stringify(n)),Ks(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xd())}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){return Tc.NODE_ADMIN===!0}function tp(){try{return typeof indexedDB=="object"}catch{return!1}}function np(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="FirebaseError";class ys extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sp,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dc.prototype.create)}}class Dc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ip(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ys(i,l,s)}}function ip(t,e){return t.replace(rp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const rp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rs(vr(r[0])||""),n=rs(vr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},op=function(t){const e=kc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lp=function(t){const e=kc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ap(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function so(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ii=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class hp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Si;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dp(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fp(t){return t===Ht?void 0:t}function dp(t){return t.instantiationMode==="EAGER"}/**
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
 */class pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const _p={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},gp=se.INFO,mp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},yp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=mp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=gp,this._logHandler=yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const vp=(t,e)=>e.some(n=>t instanceof n);let bl,El;function Cp(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bp(){return El||(El=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fc=new WeakMap,Cr=new WeakMap,Lc=new WeakMap,Yi=new WeakMap,io=new WeakMap;function Ep(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fc.set(n,t)}).catch(()=>{}),io.set(e,t),e}function wp(t){if(Cr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Cr.set(t,e)}let br={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sp(t){br=t(br)}function Ip(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Qi(this),e,...n);return Lc.set(s,e.sort?e.sort():[e]),Tt(s)}:bp().includes(t)?function(...e){return t.apply(Qi(this),e),Tt(Fc.get(this))}:function(...e){return Tt(t.apply(Qi(this),e))}}function Tp(t){return typeof t=="function"?Ip(t):(t instanceof IDBTransaction&&wp(t),vp(t,Cp())?new Proxy(t,br):t)}function Tt(t){if(t instanceof IDBRequest)return Ep(t);if(Yi.has(t))return Yi.get(t);const e=Tp(t);return e!==t&&(Yi.set(t,e),io.set(e,t)),e}const Qi=t=>io.get(t);function xp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Tt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Tt(o.result),a.oldVersion,a.newVersion,Tt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Np=["get","getKey","getAll","getAllKeys","count"],Rp=["put","add","delete","clear"],Ji=new Map;function wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ji.get(e))return Ji.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Rp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Np.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ji.set(e,r),r}Sp(t=>({...t,get:(e,n,s)=>wl(e,n)||t.get(e,n,s),has:(e,n)=>!!wl(e,n)||t.has(e,n)}));/**
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
 */class Ap{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Pp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Er="@firebase/app",Sl="0.11.2";/**
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
 */const gt=new Mc("@firebase/app"),Op="@firebase/app-compat",Dp="@firebase/analytics-compat",kp="@firebase/analytics",Mp="@firebase/app-check-compat",Fp="@firebase/app-check",Lp="@firebase/auth",Bp="@firebase/auth-compat",Wp="@firebase/database",Up="@firebase/data-connect",Hp="@firebase/database-compat",$p="@firebase/functions",Vp="@firebase/functions-compat",jp="@firebase/installations",Gp="@firebase/installations-compat",Kp="@firebase/messaging",zp="@firebase/messaging-compat",qp="@firebase/performance",Yp="@firebase/performance-compat",Qp="@firebase/remote-config",Jp="@firebase/remote-config-compat",Xp="@firebase/storage",Zp="@firebase/storage-compat",e_="@firebase/firestore",t_="@firebase/vertexai",n_="@firebase/firestore-compat",s_="firebase",i_="11.4.0";/**
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
 */const wr="[DEFAULT]",r_={[Er]:"fire-core",[Op]:"fire-core-compat",[kp]:"fire-analytics",[Dp]:"fire-analytics-compat",[Fp]:"fire-app-check",[Mp]:"fire-app-check-compat",[Lp]:"fire-auth",[Bp]:"fire-auth-compat",[Wp]:"fire-rtdb",[Up]:"fire-data-connect",[Hp]:"fire-rtdb-compat",[$p]:"fire-fn",[Vp]:"fire-fn-compat",[jp]:"fire-iid",[Gp]:"fire-iid-compat",[Kp]:"fire-fcm",[zp]:"fire-fcm-compat",[qp]:"fire-perf",[Yp]:"fire-perf-compat",[Qp]:"fire-rc",[Jp]:"fire-rc-compat",[Xp]:"fire-gcs",[Zp]:"fire-gcs-compat",[e_]:"fire-fst",[n_]:"fire-fst-compat",[t_]:"fire-vertex","fire-js":"fire-js",[s_]:"fire-js-all"};/**
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
 */const Ys=new Map,o_=new Map,Sr=new Map;function Il(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(Sr.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Sr.set(e,t);for(const n of Ys.values())Il(n,t);for(const n of o_.values())Il(n,t);return!0}function l_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function a_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const c_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Dc("app","Firebase",c_);/**
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
 */class u_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const h_=i_;function Bc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=Pc()),!n)throw xt.create("no-options");const r=Ys.get(i);if(r){if(qs(n,r.options)&&qs(s,r.config))return r;throw xt.create("duplicate-app",{appName:i})}const o=new pp(i);for(const a of Sr.values())o.addComponent(a);const l=new u_(n,s,o);return Ys.set(i,l),l}function f_(t=wr){const e=Ys.get(t);if(!e&&t===wr&&Pc())return Bc();if(!e)throw xt.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=r_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}Qs(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const d_="firebase-heartbeat-database",p_=1,ls="firebase-heartbeat-store";let Xi=null;function Wc(){return Xi||(Xi=xp(d_,p_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),Xi}async function __(t){try{const n=(await Wc()).transaction(ls),s=await n.objectStore(ls).get(Uc(t));return await n.done,s}catch(e){if(e instanceof ys)gt.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function Tl(t,e){try{const s=(await Wc()).transaction(ls,"readwrite");await s.objectStore(ls).put(e,Uc(t)),await s.done}catch(n){if(n instanceof ys)gt.warn(n.message);else{const s=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(s.message)}}}function Uc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const g_=1024,m_=30;class y_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new C_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>m_){const o=b_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xl(),{heartbeatsToSend:s,unsentEntries:i}=v_(this._heartbeatsCache.heartbeats),r=Ks(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return gt.warn(n),""}}}function xl(){return new Date().toISOString().substring(0,10)}function v_(t,e=g_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Nl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class C_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tp()?np().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await __(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nl(t){return Ks(JSON.stringify({version:2,heartbeats:t})).length}function b_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function E_(t){Qs(new os("platform-logger",e=>new Ap(e),"PRIVATE")),Qs(new os("heartbeat",e=>new y_(e),"PRIVATE")),_n(Er,Sl,t),_n(Er,Sl,"esm2017"),_n("fire-js","")}E_("");var w_="firebase",S_="11.4.0";/**
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
 */_n(w_,S_,"app");var Rl={};const Al="@firebase/database",Pl="1.0.13";/**
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
 */let Hc="";function I_(t){Hc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new T_(e)}}catch{}return new x_},jt=$c("localStorage"),N_=$c("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Mc("@firebase/database"),R_=function(){let t=1;return function(){return t++}}(),Vc=function(t){const e=up(t),n=new cp;n.update(e);const s=n.digest();return no.encodeByteArray(s)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vs.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let Yn=null,Ol=!0;const A_=function(t,e){E(!0,"Can't turn on custom loggers persistently."),gn.logLevel=se.VERBOSE,Yn=gn.log.bind(gn)},be=function(...t){if(Ol===!0&&(Ol=!1,Yn===null&&N_.get("logging_enabled")===!0&&A_()),Yn){const e=vs.apply(null,t);Yn(e)}},Cs=function(t){return function(...e){be(t,...e)}},Ir=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);gn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw gn.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+vs(...t);gn.warn(e)},P_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},O_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",Zt="[MAX_NAME]",In=function(t,e){if(t===e)return 0;if(t===Cn||e===Zt)return-1;if(e===Cn||t===Zt)return 1;{const n=Dl(t),s=Dl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},D_=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},ro=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=de(e[s]),n+=":",n+=ro(t[e[s]]);return n+="}",n},Gc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Kc=function(t){E(!jc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},k_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function F_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const L_=new RegExp("^-?(0*)\\d{1,10}$"),B_=-2147483648,W_=2147483647,Dl=function(t){if(L_.test(t)){const e=Number(t);if(e>=B_&&e<=W_)return e}return null},Tn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},U_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class H_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,a_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class Ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="5",zc="v",qc="s",Yc="r",Qc="f",Jc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xc="ls",Zc="p",Tr="ac",eu="websocket",tu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function V_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function su(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===eu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===tu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);V_(t)&&(n.ns=t.namespace);const i=[];return Oe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Vd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={},er={};function lo(t){const e=t.toString();return Zi[e]||(Zi[e]=new j_),Zi[e]}function G_(t,e){const n=t.toString();return er[n]||(er[n]=e()),er[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Tn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="start",z_="close",q_="pLPCommand",Y_="pRTLPCB",iu="id",ru="pw",ou="ser",Q_="cb",J_="seg",X_="ts",Z_="d",eg="dframe",lu=1870,au=30,tg=lu-au,ng=25e3,sg=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=lo(n),this.urlFn=a=>(this.appCheckToken&&(a[Tr]=this.appCheckToken),su(n,tu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new K_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sg)),O_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ao((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kl)this.id=l,this.password=a;else if(o===z_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[kl]="t",s[ou]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Q_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zc]=oo,this.transportSessionId&&(s[qc]=this.transportSessionId),this.lastSessionId&&(s[Xc]=this.lastSessionId),this.applicationId&&(s[Zc]=this.applicationId),this.appCheckToken&&(s[Tr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jc.test(location.hostname)&&(s[Yc]=Qc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!k_()&&!M_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nc(n),i=Gc(s,tg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[eg]="t",s[iu]=e,s[ru]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ao{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=R_(),window[q_+this.uniqueCallbackIdentifier]=e,window[Y_+this.uniqueCallbackIdentifier]=n,this.myIFrame=ao.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iu]=this.myID,e[ru]=this.myPW,e[ou]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+au+s.length<=lu;){const o=this.pendingSegs.shift();s=s+"&"+J_+i+"="+o.seg+"&"+X_+i+"="+o.ts+"&"+Z_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(ng)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=16384,rg=45e3;let Js=null;typeof MozWebSocket<"u"?Js=MozWebSocket:typeof WebSocket<"u"&&(Js=WebSocket);class $e{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=lo(n),this.connURL=$e.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[zc]=oo,typeof location<"u"&&location.hostname&&Jc.test(location.hostname)&&(o[Yc]=Qc),n&&(o[qc]=n),s&&(o[Xc]=s),i&&(o[Tr]=i),r&&(o[Zc]=r),su(e,eu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jt.set("previous_websocket_failure",!0);try{let s;ep(),this.mySock=new Js(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Js!==null&&!$e.forceDisallow_}static previouslyFailed(){return jt.isInMemoryStorage||jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Gc(n,ig);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{static get ALL_TRANSPORTS(){return[hn,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$e&&$e.isAvailable();let s=n&&!$e.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of as.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);as.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}as.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=6e4,lg=5e3,ag=10*1024,cg=100*1024,tr="t",Ml="d",ug="s",Fl="r",hg="e",Ll="o",Bl="a",Wl="n",Ul="p",fg="h";class dg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new as(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ag?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tr in e){const n=e[tr];n===Bl?this.upgradeIfSecondaryHealthy_():n===Fl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ll&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ul,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(tr,e);if(Ml in e){const s=e[Ml];if(n===fg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ug?this.onConnectionShutdown_(s):n===Fl?this.onReset_(s):n===hg?Ir("Server Error: "+s):n===Ll?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ir("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),oo!==s&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(og))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ul,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends uu{static getInstance(){return new Xs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=32,$l=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new Z("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function At(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function hu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function du(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=F(t),s=F(e);if(n===null)return e;if(n===s)return Te(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function co(t,e){if(At(t)!==At(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ve(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(At(t)>At(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class _g{constructor(e,n){this.errorPrefix_=n,this.parts_=fu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ii(this.parts_[s]);pu(this)}}function gg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ii(e),pu(t)}function mg(t){const e=t.parts_.pop();t.byteLength_-=Ii(e),t.parts_.length>0&&(t.byteLength_-=1)}function pu(t){if(t.byteLength_>$l)throw new Error(t.errorPrefix_+"has a key path longer than "+$l+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hl+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends uu{static getInstance(){return new uo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=1e3,yg=60*5*1e3,Vl=30*1e3,vg=1.3,Cg=3e4,bg="server_kill",jl=3;class _t extends cu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=_t.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mn,this.maxReconnectDelay_=yg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(de(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Si,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;_t.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=op(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ir("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Cg&&(this.reconnectDelay_=Mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new dg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Pe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(bg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pe(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vl(this.interruptReasons_)&&(this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ro(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jl&&(this.reconnectDelay_=Vl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hc.replace(/\./g,"-")]=1,Oc()?e["framework.cordova"]=1:Zd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xs.getInstance().currentlyOnline();return vl(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ti{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new L(Cn,e),i=new L(Cn,n);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;class _u extends Ti{static get __EMPTY_NODE(){return Ps}static set __EMPTY_NODE(e){Ps=e}compare(e,n){return In(e.name,n.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Zt,Ps)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Ps)}toString(){return".key"}}const mn=new _u;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ge.RED,this.left=i??Ae.EMPTY_NODE,this.right=r??Ae.EMPTY_NODE}copy(e,n,s,i,r){return new ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class Eg{copy(e,n,s,i,r){return this}insert(e,n,s){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,n=Ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Os(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new Eg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e){return In(t.name,e.name)}function ho(t,e){return In(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;function Sg(t){xr=t}const gu=function(t){return typeof t=="number"?"number:"+Kc(t):"string:"+t},mu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else E(t===xr||t.isEmpty(),"priority of unexpected type.");E(t===xr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;class _e{static set __childrenNodeConstructor(e){Gl=e}static get __childrenNodeConstructor(){return Gl}constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:F(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=F(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||At(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Kc(this.value_):e+=this.value_,this.lazyHash_=Vc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),r=_e.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu,vu;function Ig(t){yu=t}function Tg(t){vu=t}class xg extends Ti{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?In(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Zt,new _e("[PRIORITY-POST]",vu))}makePost(e,n){const s=yu(e);return new L(n,new _e("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new xg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=Math.log(2);class Rg{constructor(e){const n=r=>parseInt(Math.log(r)/Ng,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new ge(d,h.node,ge.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),x=i(_+1,c);return h=t[_],d=n?n(h):h,new ge(d,h.node,ge.BLACK,m,x)}},r=function(a){let c=null,u=null,h=t.length;const d=function(m,x){const W=h-m,U=h;h-=m;const Y=i(W+1,U),Q=t[W],A=n?n(Q):Q;_(new ge(A,Q.node,x,null,Y))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const x=a.nextBitIsOne(),W=Math.pow(2,a.count-(m+1));x?d(W,ge.BLACK):(d(W,ge.BLACK),d(W,ge.RED))}return u},o=new Rg(t.length),l=r(o);return new Ae(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;const ln={};class pt{static get Default(){return E(ln&&oe,"ChildrenNode.ts has not been loaded"),nr=nr||new pt({".priority":ln},{".priority":oe}),nr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ae?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Zs(s,e.getCompare()):l=ln;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new pt(u,c)}addToIndexes(e,n){const s=zs(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===ln)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Zs(l,o.getCompare())}else return ln;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=zs(this.indexes_,i=>{if(i===ln)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;class O{static get EMPTY_NODE(){return Fn||(Fn=new O(new Ae(ho),null,pt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&mu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fn:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new O(i,o,r)}}updateChild(e,n){const s=F(e);if(s===null)return n;{E(F(e)!==".priority"||At(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),s++,r&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gu(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ag extends O{constructor(){super(new Ae(ho),O.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const bs=new Ag;Object.defineProperties(L,{MIN:{value:new L(Cn,O.EMPTY_NODE)},MAX:{value:new L(Zt,bs)}});_u.__EMPTY_NODE=O.EMPTY_NODE;_e.__childrenNodeConstructor=O;Sg(bs);Tg(bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=!0;function me(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,me(e))}if(!(t instanceof Array)&&Pg){const n=[];let s=!1;if(Oe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return O.EMPTY_NODE;const r=Zs(n,wg,o=>o.name,ho);if(s){const o=Zs(n,oe.getCompare());return new O(r,me(e),new pt({".priority":o},{".priority":oe}))}else return new O(r,me(e),pt.Default)}else{let n=O.EMPTY_NODE;return Oe(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}Ig(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og extends Ti{constructor(e){super(),this.indexPath_=e,E(!B(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?In(e.name,n.name):r}makePost(e,n){const s=me(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,bs);return new L(Zt,e)}toString(){return fu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg extends Ti{compare(e,n){const s=e.node.compareTo(n.node);return s===0?In(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=me(e);return new L(n,s)}toString(){return".value"}}const kg=new Dg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function us(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Mg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=O.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new L(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(us(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(cs(n,h));const x=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(bn(d.name,d.node)),x.updateImmediateChild(d.name,d.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(cs(c.name,c.node)),r.trackChildChange(bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new po;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lg(t){return t.loadsAllData()?new fo(t.getIndex()):t.hasLimit()?new Fg(t):new hs(t)}function Kl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===kg?n="$value":t.index_===mn?n="$key":(E(t.index_ instanceof Og,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=de(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+de(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=de(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends cu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Cs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ei.getListenId_(e,s),l={};this.listens_[o]=l;const a=Kl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),vn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=ei.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Kl(e._queryParams),s=e._path.toString(),i=new Si;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ap(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=rs(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return{value:null,children:new Map}}function bu(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=F(e);t.children.has(s)||t.children.set(s,ti());const i=t.children.get(s);e=ie(e),bu(i,e,n)}}function Nr(t,e,n){t.value!==null?n(e,t.value):Wg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);Nr(i,r,n)})}function Wg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Oe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=10*1e3,Hg=30*1e3,$g=5*60*1e3;class Vg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ug(e);const s=ql+(Hg-ql)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Oe(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*$g))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(je||(je={}));function Eu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _o(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function go(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=je.ACK_USER_WRITE,this.source=Eu()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new ni(K(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new ni(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=je.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new fs(this.source,K()):new fs(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=je.OVERWRITE}operationForChild(e){return B(this.path)?new en(this.source,K(),this.snap.getImmediateChild(e)):new en(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=je.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new en(this.source,K(),n.value):new ds(this.source,K(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Mg(o.childName,o.snapshotNode))}),Ln(t,i,"child_removed",e,s,n),Ln(t,i,"child_added",e,s,n),Ln(t,i,"child_moved",r,s,n),Ln(t,i,"child_changed",e,s,n),Ln(t,i,"value",e,s,n),i}function Ln(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>zg(t,l,a)),o.forEach(l=>{const a=Kg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Kg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zg(t,e,n){if(e.childName==null||n.childName==null)throw wn("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e){return{eventCache:t,serverCache:e}}function Jn(t,e,n,s){return xi(new Pt(e,n,s),t.serverCache)}function wu(t,e,n,s){return xi(t.eventCache,new Pt(e,n,s))}function si(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;const qg=()=>(sr||(sr=new Ae(D_)),sr);class re{static fromObject(e){let n=new re(null);return Oe(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=qg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(B(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:pe(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=F(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(B(e))return new re(n,this.children);{const s=F(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=F(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=F(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(B(e))return n;{const s=F(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),pe(n,i),s):new re(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.writeTree_=e}static empty(){return new qe(new re(null))}}function Xn(t,e,n){if(B(e))return new qe(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Te(i,e);return r=r.updateChild(o,n),new qe(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new qe(r)}}}function Yl(t,e,n){let s=t;return Oe(n,(i,r)=>{s=Xn(s,pe(e,i),r)}),s}function Ql(t,e){if(B(e))return qe.empty();{const n=t.writeTree_.setTree(e,new re(null));return new qe(n)}}function Rr(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function Jl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function Nt(t,e){if(B(e))return t;{const n=sn(t,e);return n!=null?new qe(new re(n)):new qe(t.writeTree_.subtree(e))}}function Ar(t){return t.writeTree_.isEmpty()}function En(t,e){return Su(K(),t.writeTree_,e)}function Su(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Su(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t,e){return Nu(e,t)}function Yg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function Qg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Jg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Xg(l,s.path)?i=!1:Ve(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Zg(t),!0;if(s.snap)t.visibleWrites=Ql(t.visibleWrites,s.path);else{const l=s.children;Oe(l,a=>{t.visibleWrites=Ql(t.visibleWrites,pe(s.path,a))})}return!0}else return!1}function Xg(t,e){if(t.snap)return Ve(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ve(pe(t.path,n),e))return!0;return!1}function Zg(t){t.visibleWrites=Iu(t.allWrites,em,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function em(t){return t.visible}function Iu(t,e,n){let s=qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ve(n,o)?(l=Te(n,o),s=Xn(s,l,r.snap)):Ve(o,n)&&(l=Te(o,n),s=Xn(s,K(),r.snap.getChild(l)));else if(r.children){if(Ve(n,o))l=Te(n,o),s=Yl(s,l,r.children);else if(Ve(o,n))if(l=Te(o,n),B(l))s=Yl(s,K(),r.children);else{const a=vn(r.children,F(l));if(a){const c=a.getChild(ie(l));s=Xn(s,K(),c)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function Tu(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=Nt(t.visibleWrites,e);if(Ar(o))return n;if(n==null&&!Rr(o,K()))return null;{const l=n||O.EMPTY_NODE;return En(o,l)}}}else{const r=Nt(t.visibleWrites,e);if(!i&&Ar(r))return n;if(!i&&n==null&&!Rr(r,K()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ve(c.path,e)||Ve(e,c.path))},l=Iu(t.allWrites,o,e),a=n||O.EMPTY_NODE;return En(l,a)}}}function tm(t,e,n){let s=O.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nt(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=En(Nt(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),Jl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nt(t.visibleWrites,e);return Jl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function nm(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Rr(t.visibleWrites,r))return null;{const o=Nt(t.visibleWrites,r);return Ar(o)?i.getChild(n):En(o,i.getChild(n))}}function sm(t,e,n,s){const i=pe(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nt(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function im(t,e){return sn(t.visibleWrites,e)}function rm(t,e,n,s,i,r,o){let l;const a=Nt(t.visibleWrites,e),c=sn(a,K());if(c!=null)l=c;else if(n!=null)l=En(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function om(){return{visibleWrites:qe.empty(),allWrites:[],lastWriteId:-1}}function ii(t,e,n,s){return Tu(t.writeTree,t.treePath,e,n,s)}function mo(t,e){return tm(t.writeTree,t.treePath,e)}function Xl(t,e,n,s){return nm(t.writeTree,t.treePath,e,n,s)}function ri(t,e){return im(t.writeTree,pe(t.treePath,e))}function lm(t,e,n,s,i,r){return rm(t.writeTree,t.treePath,e,n,s,i,r)}function yo(t,e,n){return sm(t.writeTree,t.treePath,e,n)}function xu(t,e){return Nu(pe(t.treePath,e),t.writeTree)}function Nu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,us(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,cs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,us(s,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ru=new cm;class vo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=lm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){return{filter:t}}function hm(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fm(t,e,n,s,i){const r=new am;let o,l;if(n.type===je.OVERWRITE){const c=n;c.source.fromUser?o=Pr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=oi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===je.MERGE){const c=n;c.source.fromUser?o=pm(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Or(t,e,c.path,c.children,s,i,l,r))}else if(n.type===je.ACK_USER_WRITE){const c=n;c.revert?o=mm(t,e,c.path,s,i,r):o=_m(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===je.LISTEN_COMPLETE)o=gm(t,e,n.path,s,r);else throw wn("Unknown operation type: "+n.type);const a=r.getChanges();return dm(e,o,a),{viewCache:o,changes:a}}function dm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=si(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Cu(si(e)))}}function Au(t,e,n,s,i,r){const o=e.eventCache;if(ri(s,n)!=null)return e;{let l,a;if(B(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tn(e),u=c instanceof O?c:O.EMPTY_NODE,h=mo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ii(s,tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){E(At(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Xl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Xl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=yo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Jn(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function oi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=F(n);if(!a.isCompleteForPath(n)&&At(n)>1)return e;const m=ie(n),W=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),W):c=u.updateChild(a.getNode(),_,W,m,Ru,null)}const h=wu(e,c,a.isFullyInitialized()||B(n),u.filtersNodes()),d=new vo(i,h,r);return Au(t,h,n,i,d,l)}function Pr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new vo(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Jn(e,c,!0,t.filter.filtersNodes());else{const h=F(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Jn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),_=l.getNode().getImmediateChild(h);let m;if(B(d))m=s;else{const x=u.getCompleteChild(h);x!=null?hu(d)===".priority"&&x.getChild(du(d)).isEmpty()?m=x:m=x.updateChild(d,s):m=O.EMPTY_NODE}if(_.equals(m))a=e;else{const x=t.filter.updateChild(l.getNode(),h,m,d,u,o);a=Jn(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Zl(t,e){return t.eventCache.isCompleteForChild(e)}function pm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=pe(n,a);Zl(e,F(u))&&(l=Pr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=pe(n,a);Zl(e,F(u))||(l=Pr(t,l,u,c,i,r,o))}),l}function ea(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Or(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=ea(t,_,d);a=oi(t,a,new Z(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),x=ea(t,m,d);a=oi(t,a,new Z(h),x,i,r,o,l)}}),a}function _m(t,e,n,s,i,r,o){if(ri(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return oi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(B(n)){let c=new re(null);return a.getNode().forEachChild(mn,(u,h)=>{c=c.set(new Z(u),h)}),Or(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=pe(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Or(t,e,n,c,i,r,l,o)}}function gm(t,e,n,s,i){const r=e.serverCache,o=wu(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return Au(t,o,n,s,Ru,i)}function mm(t,e,n,s,i,r){let o;if(ri(s,n)!=null)return e;{const l=new vo(s,e,i),a=e.eventCache.getNode();let c;if(B(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ii(s,tn(e));else{const h=e.serverCache.getNode();E(h instanceof O,"serverChildren would be complete if leaf node"),u=mo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=F(n);let h=yo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,O.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ii(s,tn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ri(s,K())!=null,Jn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new fo(s.getIndex()),r=Lg(s);this.processor_=um(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),u=new Pt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Pt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=xi(h,u),this.eventGenerator_=new jg(this.query_)}get query(){return this.query_}}function vm(t){return t.viewCache_.serverCache.getNode()}function Cm(t){return si(t.viewCache_)}function bm(t,e){const n=tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function ta(t){return t.eventRegistrations_.length===0}function Em(t,e){t.eventRegistrations_.push(e)}function na(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function sa(t,e,n,s){e.type===je.MERGE&&e.source.queryId!==null&&(E(tn(t.viewCache_),"We should always have a full cache before handling merges"),E(si(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=fm(t.processor_,i,e,n,s);return hm(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Pu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function wm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(Cu(n.getNode())),Pu(t,s,n.getNode(),e)}function Pu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Gg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class Ou{constructor(){this.views=new Map}}function Sm(t){E(!li,"__referenceConstructor has already been defined"),li=t}function Im(){return E(li,"Reference.ts has not been loaded"),li}function Tm(t){return t.views.size===0}function Co(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),sa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sa(o,e,n,s));return r}}function Du(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ii(n,i?s:null),a=!1;l?a=!0:s instanceof O?(l=mo(n,s),a=!1):(l=O.EMPTY_NODE,a=!1);const c=xi(new Pt(l,a,!1),new Pt(s,i,!1));return new ym(e,c)}return o}function xm(t,e,n,s,i,r){const o=Du(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Em(o,n),wm(o,n)}function Nm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(na(c,n,s)),ta(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(na(a,n,s)),ta(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ot(t)&&r.push(new(Im())(e._repo,e._path)),{removed:r,events:o}}function ku(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rt(t,e){let n=null;for(const s of t.views.values())n=n||bm(s,e);return n}function Mu(t,e){if(e._queryParams.loadsAllData())return Ri(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Fu(t,e){return Mu(t,e)!=null}function Ot(t){return Ri(t)!=null}function Ri(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;function Rm(t){E(!ai,"__referenceConstructor has already been defined"),ai=t}function Am(){return E(ai,"Reference.ts has not been loaded"),ai}let Pm=1;class ia{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=om(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lu(t,e,n,s,i){return Yg(t.pendingWriteTree_,e,n,s,i),i?ws(t,new en(Eu(),e,n)):[]}function Gt(t,e,n=!1){const s=Qg(t.pendingWriteTree_,e);if(Jg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(K(),!0):Oe(s.children,o=>{r=r.set(new Z(o),!0)}),ws(t,new ni(s.path,r,n))}else return[]}function Es(t,e,n){return ws(t,new en(_o(),e,n))}function Om(t,e,n){const s=re.fromObject(n);return ws(t,new ds(_o(),e,s))}function Dm(t,e){return ws(t,new fs(_o(),e))}function km(t,e,n){const s=Eo(t,n);if(s){const i=wo(s),r=i.path,o=i.queryId,l=Te(r,e),a=new fs(go(o),l);return So(t,r,a)}else return[]}function ci(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Fu(o,e))){const a=Nm(o,e,n,s);Tm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Ot(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Lm(d);for(let m=0;m<_.length;++m){const x=_[m],W=x.query,U=Hu(t,x);t.listenProvider_.startListening(Zn(W),ps(t,W),U.hashFn,U.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Zn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Ai(d));t.listenProvider_.stopListening(Zn(d),_)}))}Bm(t,c)}return l}function Bu(t,e,n,s){const i=Eo(t,s);if(i!=null){const r=wo(i),o=r.path,l=r.queryId,a=Te(o,e),c=new en(go(l),a,n);return So(t,o,c)}else return[]}function Mm(t,e,n,s){const i=Eo(t,s);if(i){const r=wo(i),o=r.path,l=r.queryId,a=Te(o,e),c=re.fromObject(n),u=new ds(go(l),a,c);return So(t,o,u)}else return[]}function Dr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=Te(d,i);r=r||Rt(_,m),o=o||Ot(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ot(l),r=r||Rt(l,K())):(l=new Ou,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const x=Rt(m,K());x&&(r=r.updateImmediateChild(_,x))}));const c=Fu(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ai(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Wm();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Ni(t.pendingWriteTree_,i);let h=xm(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Mu(l,e);h=h.concat(Um(t,e,d))}return h}function bo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Te(o,e),c=Rt(l,a);if(c)return c});return Tu(i,e,r,n,!0)}function Fm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Te(c,n);s=s||Rt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Rt(i,K()):(i=new Ou,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Pt(s,!0,!1):null,l=Ni(t.pendingWriteTree_,e._path),a=Du(i,e,l,r?o.getNode():O.EMPTY_NODE,r);return Cm(a)}function ws(t,e){return Wu(e,t.syncPointTree_,null,Ni(t.pendingWriteTree_,K()))}function Wu(t,e,n,s){if(B(t.path))return Uu(t,e,n,s);{const i=e.get(K());n==null&&i!=null&&(n=Rt(i,K()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=xu(s,o);r=r.concat(Wu(l,a,c,u))}return i&&(r=r.concat(Co(i,t,s,n))),r}}function Uu(t,e,n,s){const i=e.get(K());n==null&&i!=null&&(n=Rt(i,K()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=xu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Uu(u,l,a,c)))}),i&&(r=r.concat(Co(i,t,s,n))),r}function Hu(t,e){const n=e.query,s=ps(t,n);return{hashFn:()=>(vm(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?km(t,n._path,s):Dm(t,n._path);{const r=F_(i,n);return ci(t,n,null,r)}}}}function ps(t,e){const n=Ai(e);return t.queryToTagMap.get(n)}function Ai(t){return t._path.toString()+"$"+t._queryIdentifier}function Eo(t,e){return t.tagToQueryMap.get(e)}function wo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function So(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Ni(t.pendingWriteTree_,e);return Co(s,n,i,null)}function Lm(t){return t.fold((e,n,s)=>{if(n&&Ot(n))return[Ri(n)];{let i=[];return n&&(i=ku(n)),Oe(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Am())(t._repo,t._path):t}function Bm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ai(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Wm(){return Pm++}function Um(t,e,n){const s=e._path,i=ps(t,e),r=Hu(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!B(c)&&u&&Ot(u))return[Ri(u).query];{let d=[];return u&&(d=d.concat(ku(u).map(_=>_.query))),Oe(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Zn(u),ps(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Io(n)}node(){return this.node_}}class To{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new To(this.syncTree_,n)}node(){return bo(this.syncTree_,this.path_)}}const Hm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ra=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $m(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Vm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$m=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Vm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},jm=function(t,e,n,s){return xo(e,new To(n,t),s)},$u=function(t,e,n){return xo(t,new Io(e),n)};function xo(t,e,n){const s=t.getPriority().val(),i=ra(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ra(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new _e(l,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new _e(i))),o.forEachChild(oe,(l,a)=>{const c=xo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ro(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=F(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new No(i,s,r),n=ie(n),i=F(n)}return s}function xn(t){return t.node.value}function Vu(t,e){t.node.value=e,kr(t)}function ju(t){return t.node.childCount>0}function Gm(t){return xn(t)===void 0&&!ju(t)}function Pi(t,e){Oe(t.node.children,(n,s)=>{e(new No(n,t,s))})}function Gu(t,e,n,s){n&&e(t),Pi(t,i=>{Gu(i,e,!0)})}function Km(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(t){return new Z(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function kr(t){t.parent!==null&&zm(t.parent,t.name,t)}function zm(t,e,n){const s=Gm(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,kr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=/[\[\].#$\/\u0000-\u001F\u007F]/,Ym=/[\[\].#$\u0000-\u001F\u007F]/,ir=10*1024*1024,Ku=function(t){return typeof t=="string"&&t.length!==0&&!qm.test(t)},zu=function(t){return typeof t=="string"&&t.length!==0&&!Ym.test(t)},Qm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zu(t)},Jm=function(t,e,n,s){Ao(so(t,"value"),e,n)},Ao=function(t,e,n){const s=n instanceof Z?new _g(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(jc(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>ir/3&&Ii(e)>ir)throw new Error(t+"contains a string greater than "+ir+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Oe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ku(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gg(s,o),Ao(t,l,s),mg(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},qu=function(t,e,n,s){if(!zu(n))throw new Error(so(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Xm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qu(t,e,n)},Zm=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ey=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ku(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Qm(n))throw new Error(so(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Po(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!co(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yu(t,e,n){Po(t,n),Qu(t,s=>co(s,e))}function lt(t,e,n){Po(t,n),Qu(t,s=>Ve(s,e)||Ve(e,s))}function Qu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ny(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ny(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&be("event: "+n.toString()),Tn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="repo_interrupt",iy=25;class ry{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ty,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ti(),this.transactionQueueTree_=new No,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oy(t,e,n){if(t.stats_=lo(t.repoInfo_),t.forceRestClient_||U_())t.server_=new ei(t.repoInfo_,(s,i,r,o)=>{oa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>la(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{oa(t,s,i,r,o)},s=>{la(t,s)},s=>{ay(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=G_(t.repoInfo_,()=>new Vg(t.stats_,t.server_)),t.infoData_=new Bg,t.infoSyncTree_=new ia({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Es(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Do(t,"connected",!1),t.serverSyncTree_=new ia({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);lt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ly(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oo(t){return Hm({timestamp:ly(t)})}function oa(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=zs(n,c=>me(c));o=Mm(t.serverSyncTree_,r,a,i)}else{const a=me(n);o=Bu(t.serverSyncTree_,r,a,i)}else if(s){const a=zs(n,c=>me(c));o=Om(t.serverSyncTree_,r,a)}else{const a=me(n);o=Es(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Di(t,r)),lt(t.eventQueue_,l,o)}function la(t,e){Do(t,"connected",e),e===!1&&hy(t)}function ay(t,e){Oe(e,(n,s)=>{Do(t,n,s)})}function Do(t,e,n){const s=new Z("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=Es(t.infoSyncTree_,s,i);lt(t.eventQueue_,s,r)}function Ju(t){return t.nextWriteId_++}function cy(t,e,n){const s=Fm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=me(i).withIndex(e._queryParams.getIndex());Dr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Es(t.serverSyncTree_,e._path,r);else{const l=ps(t.serverSyncTree_,e);o=Bu(t.serverSyncTree_,e._path,r,l)}return lt(t.eventQueue_,e._path,o),ci(t.serverSyncTree_,e,n,null,!0),r},i=>(Oi(t,"get for query "+de(e)+" failed: "+i),Promise.reject(new Error(i))))}function uy(t,e,n,s,i){Oi(t,"set",{path:e.toString(),value:n,priority:s});const r=Oo(t),o=me(n,s),l=bo(t.serverSyncTree_,e),a=$u(o,l,r),c=Ju(t),u=Lu(t.serverSyncTree_,e,a,c,!0);Po(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Pe("set at "+e+" failed: "+d);const x=Gt(t.serverSyncTree_,c,!m);lt(t.eventQueue_,e,x),_y(t,i,d,_)});const h=nh(t,e);Di(t,h),lt(t.eventQueue_,h,[])}function hy(t){Oi(t,"onDisconnectEvents");const e=Oo(t),n=ti();Nr(t.onDisconnect_,K(),(i,r)=>{const o=jm(i,r,t.serverSyncTree_,e);bu(n,i,o)});let s=[];Nr(n,K(),(i,r)=>{s=s.concat(Es(t.serverSyncTree_,i,r));const o=nh(t,i);Di(t,o)}),t.onDisconnect_=ti(),lt(t.eventQueue_,K(),s)}function fy(t,e,n){let s;F(e._path)===".info"?s=Dr(t.infoSyncTree_,e,n):s=Dr(t.serverSyncTree_,e,n),Yu(t.eventQueue_,e._path,s)}function dy(t,e,n){let s;F(e._path)===".info"?s=ci(t.infoSyncTree_,e,n):s=ci(t.serverSyncTree_,e,n),Yu(t.eventQueue_,e._path,s)}function py(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sy)}function Oi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function _y(t,e,n,s){e&&Tn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Xu(t,e,n){return bo(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function ko(t,e=t.transactionQueueTree_){if(e||ki(t,e),xn(e)){const n=eh(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gy(t,Ss(e),n)}else ju(e)&&Pi(e,n=>{ko(t,n)})}function gy(t,e,n){const s=n.map(c=>c.currentWriteId),i=Xu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Te(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Oi(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Gt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ki(t,Ro(t.transactionQueueTree_,e)),ko(t,t.transactionQueueTree_),lt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Tn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Di(t,e)}},o)}function Di(t,e){const n=Zu(t,e),s=Ss(n),i=eh(t,n);return my(t,i,s),s}function my(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Te(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=iy)u=!0,h="maxretry",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Xu(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Ao("transaction failed: Data returned ",_,a.path);let m=me(_);typeof _=="object"&&_!=null&&vt(_,".priority")||(m=m.updatePriority(d.getPriority()));const W=a.currentWriteId,U=Oo(t),Y=$u(m,d,U);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=Y,a.currentWriteId=Ju(t),o.splice(o.indexOf(W),1),i=i.concat(Lu(t.serverSyncTree_,a.path,Y,a.currentWriteId,a.applyLocally)),i=i.concat(Gt(t.serverSyncTree_,W,!0))}else u=!0,h="nodata",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ki(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Tn(s[l]);ko(t,t.transactionQueueTree_)}function Zu(t,e){let n,s=t.transactionQueueTree_;for(n=F(e);n!==null&&xn(s)===void 0;)s=Ro(s,n),e=ie(e),n=F(e);return s}function eh(t,e){const n=[];return th(t,e,n),n.sort((s,i)=>s.order-i.order),n}function th(t,e,n){const s=xn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Pi(e,i=>{th(t,i,n)})}function ki(t,e){const n=xn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Vu(e,n.length>0?n:void 0)}Pi(e,s=>{ki(t,s)})}function nh(t,e){const n=Ss(Zu(t,e)),s=Ro(t.transactionQueueTree_,e);return Km(s,i=>{rr(t,i)}),rr(t,s),Gu(s,i=>{rr(t,i)}),n}function rr(t,e){const n=xn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Vu(e,void 0):n.length=r+1,lt(t.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)Tn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const aa=function(t,e){const n=Cy(t),s=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||P_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},Cy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=yy(t.substring(u,h)));const d=vy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Ey{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Mo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:hu(this._path)}get ref(){return new Ct(this._repo,this._path)}get _queryIdentifier(){const e=zl(this._queryParams),n=ro(e);return n==="{}"?"default":n}get _queryObject(){return zl(this._queryParams)}isEqual(e){if(e=Sn(e),!(e instanceof Mo))return!1;const n=this._repo===e._repo,s=co(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pg(this._path)}}class Ct extends Mo{constructor(e,n){super(e,n,new po,!1)}get parent(){const e=du(this._path);return e===null?null:new Ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=Mr(this.ref,e);return new _s(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,Mr(this.ref,s),oe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wn(t,e){return t=Sn(t),t._checkNotDeleted("ref"),e!==void 0?Mr(t._root,e):t._root}function Mr(t,e){return t=Sn(t),F(t._path)===null?Xm("child","path",e):qu("child","path",e),new Ct(t._repo,pe(t._path,e))}function Fr(t,e){t=Sn(t),Zm("set",t._path),Jm("set",e,t._path);const n=new Si;return uy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ih(t){t=Sn(t);const e=new sh(()=>{}),n=new Mi(e);return cy(t._repo,t,n).then(s=>new _s(s,new Ct(t._repo,t._path),t._queryParams.getIndex()))}class Mi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new by("value",this,new _s(e.snapshotNode,new Ct(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ey(this,e,n):null}matches(e){return e instanceof Mi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wy(t,e,n,s,i){const r=new sh(n,void 0),o=new Mi(r);return fy(t._repo,t,o),()=>dy(t._repo,t,o)}function rh(t,e,n,s){return wy(t,"value",e)}Sm(Ct);Rm(Ct);/**
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
 */const Sy="FIREBASE_DATABASE_EMULATOR_HOST",Lr={};let Iy=!1;function Ty(t,e,n,s){t.repoInfo_=new nu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function xy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=aa(r,i),l=o.repoInfo,a;typeof process<"u"&&Rl&&(a=Rl[Sy]),a?(r=`http://${a}?ns=${l.namespace}`,o=aa(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new $_(t.name,t.options,e);ey("Invalid Firebase Database URL",o),B(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ry(l,t,c,new H_(t,n));return new Ay(u,t)}function Ny(t,e){const n=Lr[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),py(t),delete n[t.key]}function Ry(t,e,n,s){let i=Lr[e.name];i||(i={},Lr[e.name]=i);let r=i[t.toURLString()];return r&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ry(t,Iy,n,s),i[t.toURLString()]=r,r}class Ay{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ct(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ny(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function Py(t=f_(),e){const n=l_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Qd("database");s&&Oy(n,...s)}return n}function Oy(t,e,n,s={}){t=Sn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&qs(s,r.repoInfo_.emulatorOptions))return;mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ls(Ls.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Jd(s.mockUserToken,t.app.options.projectId);o=new Ls(l)}Ty(r,i,s,o)}/**
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
 */function Dy(t){I_(h_),Qs(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_n(Al,Pl,t),_n(Al,Pl,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Dy();var ky={apiKey:"AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",authDomain:"iamwaitingforyou-73.firebaseapp.com",databaseURL:"https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwaitingforyou-73",storageBucket:"iamwaitingforyou-73.firebasestorage.app",messagingSenderId:"576527778879",appId:"1:576527778879:web:059f06122df2b01d9a248a",measurementId:"G-62LMJM4Z24"};const My=Bc(ky),Un=Py(My),Fy={class:"fb-check"},Ly={style:{"font-size":"18px",background:"orange",margin:"16px",padding:"5px"}},By={__name:"FireBaseCheck",setup(t){const e=fe(""),n=fe(""),s=Wn(Un,"guest"),i=fe(),r=fe("");function o(c){Fr(s,{text:c}).then(()=>{console.log("Данные успешно записаны!"),i.value="Записано!"}).catch(u=>{console.error("Ошибка записи данных: ",u),i.value="Ошибка"})}rh(s,c=>{r.value=c.val(),console.log("Данные пользователя обновлены:",r.value)});function l(){o(e.value)}function a(){ih(s).then(c=>{if(c.exists()){const u=c.val();n.value=u,console.log("Данные пользователя:",u)}else console.log("Данные не найдены")}).catch(c=>{console.error("Ошибка чтения данных: ",c)})}return(c,u)=>(We(),rt("div",Fy,[u[3]||(u[3]=N("div",{class:"about"},[N("h2",null,"Пишем/Читаем")],-1)),qt(N("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h)},null,512),[[Qt,e.value]]),N("button",{onClick:u[1]||(u[1]=h=>l())}," Сохранить"),N("span",null,He(i.value),1),N("h3",null,He(n.value),1),N("button",{onClick:u[2]||(u[2]=h=>a())}," Читать"),N("div",Ly,He(r.value),1)]))}},Ye=Wd("fbStore",{state:()=>({userId:"",userName:"",nickname:"",oppponentId:"",opponentName:"",gameId:""}),actions:{async getField(t){const e=Wn(Un,t);return ih(e).then(n=>{if(n.exists()){const s=n.val();return an(">>> Данные пользователя:"),s}else an(t+" : данные не найдены")})},async setField(t,e){const n=Wn(Un,t);return Fr(n,{text:e}).then(()=>{an("Данные успешно записаны!")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async setReadyToPlay(t){ca("this.gameId = "+this.gameId);const e=Wn(Un,"readyToPlay/"+this.gameId);ca(JSON.stringify(t)),Fr(e,{id:this.userId,name:this.nickname|this.userName}).then(()=>{an("Данные астива успешно записаны!")}).catch(n=>{console.error("2222Ошибка записи данных: ",n)})},async updateValue(t){const e=Wn(Un,t);return new Promise(n=>{rh(e,s=>{an(`Данные ${t} получены`),n(s.val())})})},getOpponent(){let t=localStorage.getItem("games");if(t){let e=this.gameId,n=JSON.parse(t);if(!n[e])return null;let s=n[e].findIndex(r=>!r.includes(this.userId)),i=n[e][s].split("::");return{name:i[1],id:i[0]}}else return null},setGame(t,e,n){let s=localStorage.getItem("games");if(s){let i=JSON.parse(s);an(i),i[t]=[e,n],localStorage.setItem("games",JSON.stringify(i))}}}});function an(t){console.log("%c "+t,"color: green")}function ca(t){console.log("%c "+t,"color: pink")}const Wy={__name:"KrestikiNoliki",setup(t){const e=Ye(),n=fe("");return e.updateValue("guest").then(s=>{n.value=JSON.stringify(s)}),(s,i)=>(We(),rt(Fe,null,[i[1]||(i[1]=N("h3",null,"Крестики нолики!!!",-1)),qt(N("textarea",{"onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r),style:{width:"100%"},placeholder:"данные с сайта"},null,512),[[Qt,n.value]]),i[2]||(i[2]=N("br",null,null,-1)),i[3]||(i[3]=N("br",null,null,-1))],64))}};function Uy(){console.log("searchOpp searchOpp searchOpp searchOpp"),Ye().getField(Ye().gameId).then(t=>{console.log("res=",t);let e="";try{e=JSON.parse(t.text)}catch{}console.log("games",e),e||Hy()})}function Hy(){Ye().getField("readyToPlay").then(t=>{console.log("READY TO PLAY res=",t),$y()})}function $y(){let t=`{id:${Ye().userId}, name:${Ye().userName}}`;console.log(t),Ye().setReadyToPlay(t).then(e=>{console.log("active res=",e)})}const Vy={__name:"SearchOpponent",setup(t){const e=Ye(),n=fe("");return vi(()=>{e.updateValue("readyToPlay/"+e.gameId).then(s=>{console.log("res=",s),s&&(n.value=JSON.stringify(s))})}),(s,i)=>(We(),rt(Fe,null,[i[1]||(i[1]=N("br",null,null,-1)),qt(N("textarea",{"onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r),rows:"5",style:{width:"95%"}},null,512),[[Qt,n.value]])],64))}},jy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Gy={key:0},Ky={key:1},zy={style:{"font-size":"larger"}},qy={__name:"RockPaperSScissors",setup(t){const e=Ye(),n=fe(0),s=fe(""),i=fe(""),r=fe("");e.gameId="g1";let o=e.getOpponent();console.log("opponent",o),o?(setTimeout(()=>{n.value=2},100),r.value=o.name,i.value=o.id):setTimeout(()=>{n.value=1},1e3);function l(){Uy()}return(a,c)=>(We(),rt("div",{class:"game",style:_i({background:n.value===2?"orange":n.value===1?"pink":""})},[c[12]||(c[12]=N("h1",null,"♕",-1)),c[13]||(c[13]=N("h2",null," Камень Ножницы Бумага ",-1)),n.value===1?(We(),rt("div",Gy,[N("p",null," Привет, "+He(dt(e).nickname||dt(e).userName)+" ! ",1),N("p",null,[qt(N("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),style:{"font-size":"larger",padding:"4px","text-align":"center"},onInput:c[1]||(c[1]=u=>dt(e).nickname=s.value),placeholder:"Сменить nickName"},null,544),[[Qt,s.value]])]),N("button",{onClick:c[2]||(c[2]=u=>l())}," Искать соперника! "),c[3]||(c[3]=N("br",null,null,-1)),ze(Vy),c[4]||(c[4]=N("br",null,null,-1)),c[5]||(c[5]=N("br",null,null,-1))])):js("",!0),n.value===2?(We(),rt("div",Ky,[N("p",null,[c[6]||(c[6]=Vt(" Против вас играет: ")),c[7]||(c[7]=N("br",null,null,-1)),N("b",zy,He(r.value||i.value),1)]),c[8]||(c[8]=N("p",null," Выбери: ",-1)),c[9]||(c[9]=N("p",null,[N("button",null,"камень"),N("button",null,"ножницы"),N("button",null,"бумага")],-1)),c[10]||(c[10]=N("br",null,null,-1)),c[11]||(c[11]=N("p",null,[N("button",null," ИГРАТЬ")],-1))])):js("",!0)],4))}},ua=jy(qy,[["__scopeId","data-v-924e97eb"]]),Yy={key:0},Qy={key:1},Jy={__name:"DevelopPart",setup(t){const e=Ye(),n=fe("g1"),s=fe(""),i=fe(""),r=fe(""),o=fe(!1),l=fe(!1),a=fe("");function c(){e.getField(n.value||"guest").then(d=>{i.value=JSON.stringify(d)})}function u(){e.setField(n.value,s.value).then(d=>{r.value=JSON.stringify(d)})}function h(){navigator.clipboard.writeText(a.value).then(function(){console.log("Текст успешно скопирован в буфер обмена")},function(d){console.error("Произошла ошибка при копировании текста: ",d)})}return vi(()=>{var _,m,x;let d=(_=window.Telegram)==null?void 0:_.WebApp;d&&(e.userName=((m=d.initDataUnsafe.user)==null?void 0:m.username)||"-",e.userId=((x=d.initDataUnsafe.user)==null?void 0:x.id)||"-"),a.value=JSON.stringify(d)}),(d,_)=>(We(),rt(Fe,null,[_[16]||(_[16]=N("hr",null,null,-1)),_[17]||(_[17]=N("hr",null,null,-1)),_[18]||(_[18]=N("hr",null,null,-1)),N("h3",null,"userId : "+He(dt(e).userId),1),N("h3",null,"userName : "+He(dt(e).userName),1),N("h2",{style:{"text-align":"center"},onClick:_[0]||(_[0]=m=>o.value=!o.value)}," Админка FB ▼"),o.value?(We(),rt("div",Yy,[_[8]||(_[8]=N("h4",null," Чтение (Админка)",-1)),_[9]||(_[9]=Vt(" Поле: ")),qt(N("input",{"onUpdate:modelValue":_[1]||(_[1]=m=>n.value=m)},null,512),[[Qt,n.value]]),N("button",{onClick:_[2]||(_[2]=m=>c())}," Получить"),_[10]||(_[10]=N("br",null,null,-1)),qt(N("textarea",{rows:"7","onUpdate:modelValue":_[3]||(_[3]=m=>i.value=m),style:{width:"98%"}},null,512),[[Qt,i.value]]),_[11]||(_[11]=N("hr",null,null,-1)),_[12]||(_[12]=N("h4",null," Сохранение ",-1)),qt(N("textarea",{rows:"2","onUpdate:modelValue":_[4]||(_[4]=m=>s.value=m),placeholder:"текст для сохранения",style:{width:"98%"}},null,512),[[Qt,s.value]]),N("button",{onClick:_[5]||(_[5]=m=>u())}," Сохранить"),_[13]||(_[13]=N("br",null,null,-1))])):js("",!0),N("h2",{style:{"text-align":"center"},onClick:_[6]||(_[6]=m=>l.value=!l.value)}," Админка Телеграмм ▼"),l.value?(We(),rt("div",Qy,[Vt(" userName: "+He(dt(e).userName),1),_[15]||(_[15]=N("br",null,null,-1)),Vt(" userId: "+He(dt(e).userId)+" ",1),N("p",null,[N("button",{onClick:_[7]||(_[7]=m=>h())},"Скопировать "),Vt(" txtArea: "+He(a.value),1),_[14]||(_[14]=N("br",null,null,-1))])])):js("",!0)],64))}},Xy={__name:"App",setup(t){const e=Ye();let n=Hh(ua);function s(i){switch(i){case 1:n.value=By;break;case 2:n.value=Wy;break;case 3:n.value=ua;break}}return vi(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.userId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||"-",e.userName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"-")}),(i,r)=>(We(),rt(Fe,null,[(We(),_c(gf(dt(n)))),r[3]||(r[3]=Vt(" игры ")),N("button",{onClick:r[0]||(r[0]=o=>s(1))},"1"),N("button",{onClick:r[1]||(r[1]=o=>s(2))},"2"),N("button",{onClick:r[2]||(r[2]=o=>s(3))},"3"),ze(Jy)],64))}},Zy=Dd(),oh=Ad(Xy);oh.use(Zy);oh.mount("#app");
