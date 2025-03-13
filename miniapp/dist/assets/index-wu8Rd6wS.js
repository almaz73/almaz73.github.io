(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const K={},Kt=[],ze=()=>{},Eu=()=>!1,Ks=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_r=t=>t.startsWith("onUpdate:"),Ce=Object.assign,gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bu=Object.prototype.hasOwnProperty,$=(t,e)=>bu.call(t,e),O=Array.isArray,zt=t=>zs(t)==="[object Map]",Bl=t=>zs(t)==="[object Set]",M=t=>typeof t=="function",le=t=>typeof t=="string",Ct=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Wl=t=>(se(t)||M(t))&&M(t.then)&&M(t.catch),Hl=Object.prototype.toString,zs=t=>Hl.call(t),wu=t=>zs(t).slice(8,-1),Ul=t=>zs(t)==="[object Object]",mr=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,En=pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Iu=/-(\w)/g,gt=qs(t=>t.replace(Iu,(e,n)=>n?n.toUpperCase():"")),Su=/\B([A-Z])/g,Wt=qs(t=>t.replace(Su,"-$1").toLowerCase()),Vl=qs(t=>t.charAt(0).toUpperCase()+t.slice(1)),_i=qs(t=>t?`on${Vl(t)}`:""),ht=(t,e)=>!Object.is(t,e),gs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$l=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yo;const Ys=()=>yo||(yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=le(s)?Ru(s):yr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(le(t)||se(t))return t}const Tu=/;(?![^(]*\))/g,xu=/:([^]+)/,Nu=/\/\*[^]*?\*\//g;function Ru(t){const e={};return t.replace(Nu,"").split(Tu).forEach(n=>{if(n){const s=n.split(xu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function vr(t){let e="";if(le(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=vr(t[n]);s&&(e+=s+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Au="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pu=pr(Au);function jl(t){return!!t||t===""}const Gl=t=>!!(t&&t.__v_isRef===!0),ms=t=>le(t)?t:t==null?"":O(t)||se(t)&&(t.toString===Hl||!M(t.toString))?Gl(t)?ms(t.value):JSON.stringify(t,Kl,2):String(t),Kl=(t,e)=>Gl(e)?Kl(t,e.value):zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[gi(s,r)+" =>"]=i,n),{})}:Bl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gi(n))}:Ct(e)?gi(e):se(e)&&!O(e)&&!Ul(e)?String(e):e,gi=(t,e="")=>{var n;return Ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Du{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ou(){return Ne}let J;const mi=new WeakSet;class zl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mi.has(this)&&(mi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vo(this),Ql(this);const e=J,n=Me;J=this,Me=!0;try{return this.fn()}finally{Jl(this),J=e,Me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)br(e);this.deps=this.depsTail=void 0,vo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wi(this)&&this.run()}get dirty(){return Wi(this)}}let ql=0,bn,wn;function Yl(t,e=!1){if(t.flags|=8,e){t.next=wn,wn=t;return}t.next=bn,bn=t}function Cr(){ql++}function Er(){if(--ql>0)return;if(wn){let e=wn;for(wn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;bn;){let e=bn;for(bn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ql(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jl(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),br(s),Mu(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Wi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===On))return;t.globalVersion=On;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Wi(t)){t.flags&=-3;return}const n=J,s=Me;J=t,Me=!0;try{Ql(t);const i=t.fn(t._value);(e.version===0||ht(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{J=n,Me=s,Jl(t),t.flags&=-3}}function br(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)br(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Mu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Me=!0;const Zl=[];function Et(){Zl.push(Me),Me=!1}function bt(){const t=Zl.pop();Me=t===void 0?!0:t}function vo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=J;J=void 0;try{e()}finally{J=n}}}let On=0;class ku{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!J||!Me||J===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==J)n=this.activeLink=new ku(J,this),J.deps?(n.prevDep=J.depsTail,J.depsTail.nextDep=n,J.depsTail=n):J.deps=J.depsTail=n,ea(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=J.depsTail,n.nextDep=void 0,J.depsTail.nextDep=n,J.depsTail=n,J.deps===n&&(J.deps=s)}return n}trigger(e){this.version++,On++,this.notify(e)}notify(e){Cr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Er()}}}function ea(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ea(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hi=new WeakMap,Ot=Symbol(""),Ui=Symbol(""),Mn=Symbol("");function he(t,e,n){if(Me&&J){let s=Hi.get(t);s||Hi.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new wr),i.map=s,i.key=n),i.track()}}function Xe(t,e,n,s,i,r){const o=Hi.get(t);if(!o){On++;return}const l=a=>{a&&a.trigger()};if(Cr(),e==="clear")o.forEach(l);else{const a=O(t),c=a&&mr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,p)=>{(p==="length"||p===Mn||!Ct(p)&&p>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Mn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Ot)),zt(t)&&l(o.get(Ui)));break;case"delete":a||(l(o.get(Ot)),zt(t)&&l(o.get(Ui)));break;case"set":zt(t)&&l(o.get(Ot));break}}Er()}function Ut(t){const e=V(t);return e===t?e:(he(e,"iterate",Mn),ke(t)?e:e.map(ge))}function Ir(t){return he(t=V(t),"iterate",Mn),t}const Fu={__proto__:null,[Symbol.iterator](){return yi(this,Symbol.iterator,ge)},concat(...t){return Ut(this).concat(...t.map(e=>O(e)?Ut(e):e))},entries(){return yi(this,"entries",t=>(t[1]=ge(t[1]),t))},every(t,e){return Qe(this,"every",t,e,void 0,arguments)},filter(t,e){return Qe(this,"filter",t,e,n=>n.map(ge),arguments)},find(t,e){return Qe(this,"find",t,e,ge,arguments)},findIndex(t,e){return Qe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qe(this,"findLast",t,e,ge,arguments)},findLastIndex(t,e){return Qe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qe(this,"forEach",t,e,void 0,arguments)},includes(...t){return vi(this,"includes",t)},indexOf(...t){return vi(this,"indexOf",t)},join(t){return Ut(this).join(t)},lastIndexOf(...t){return vi(this,"lastIndexOf",t)},map(t,e){return Qe(this,"map",t,e,void 0,arguments)},pop(){return pn(this,"pop")},push(...t){return pn(this,"push",t)},reduce(t,...e){return Co(this,"reduce",t,e)},reduceRight(t,...e){return Co(this,"reduceRight",t,e)},shift(){return pn(this,"shift")},some(t,e){return Qe(this,"some",t,e,void 0,arguments)},splice(...t){return pn(this,"splice",t)},toReversed(){return Ut(this).toReversed()},toSorted(t){return Ut(this).toSorted(t)},toSpliced(...t){return Ut(this).toSpliced(...t)},unshift(...t){return pn(this,"unshift",t)},values(){return yi(this,"values",ge)}};function yi(t,e,n){const s=Ir(t),i=s[e]();return s!==t&&!ke(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Lu=Array.prototype;function Qe(t,e,n,s,i,r){const o=Ir(t),l=o!==t&&!ke(t),a=o[e];if(a!==Lu[e]){const h=a.apply(t,r);return l?ge(h):h}let c=n;o!==t&&(l?c=function(h,p){return n.call(this,ge(h),p,t)}:n.length>2&&(c=function(h,p){return n.call(this,h,p,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Co(t,e,n,s){const i=Ir(t);let r=n;return i!==t&&(ke(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,ge(l),a,t)}),i[e](r,...s)}function vi(t,e,n){const s=V(t);he(s,"iterate",Mn);const i=s[e](...n);return(i===-1||i===!1)&&Nr(n[0])?(n[0]=V(n[0]),s[e](...n)):i}function pn(t,e,n=[]){Et(),Cr();const s=V(t)[e].apply(t,n);return Er(),bt(),s}const Bu=pr("__proto__,__v_isRef,__isVue"),ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ct));function Wu(t){Ct(t)||(t=String(t));const e=V(this);return he(e,"has",t),e.hasOwnProperty(t)}class na{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Yu:oa:r?ra:ia).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=O(e);if(!i){let a;if(o&&(a=Fu[n]))return a;if(n==="hasOwnProperty")return Wu}const l=Reflect.get(e,n,de(e)?e:s);return(Ct(n)?ta.has(n):Bu(n))||(i||he(e,"get",n),r)?l:de(l)?o&&mr(n)?l:l.value:se(l)?i?la(l):Tr(l):l}}class sa extends na{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=kt(r);if(!ke(s)&&!kt(s)&&(r=V(r),s=V(s)),!O(e)&&de(r)&&!de(s))return a?!1:(r.value=s,!0)}const o=O(e)&&mr(n)?Number(n)<e.length:$(e,n),l=Reflect.set(e,n,s,de(e)?e:i);return e===V(i)&&(o?ht(s,r)&&Xe(e,"set",n,s):Xe(e,"add",n,s)),l}deleteProperty(e,n){const s=$(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Xe(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ct(n)||!ta.has(n))&&he(e,"has",n),s}ownKeys(e){return he(e,"iterate",O(e)?"length":Ot),Reflect.ownKeys(e)}}class Hu extends na{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uu=new sa,Vu=new Hu,$u=new sa(!0);const Vi=t=>t,us=t=>Reflect.getPrototypeOf(t);function ju(t,e,n){return function(...s){const i=this.__v_raw,r=V(i),o=zt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Vi:e?$i:ge;return!e&&he(r,"iterate",a?Ui:Ot),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:l?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function hs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gu(t,e){const n={get(i){const r=this.__v_raw,o=V(r),l=V(i);t||(ht(i,l)&&he(o,"get",i),he(o,"get",l));const{has:a}=us(o),c=e?Vi:t?$i:ge;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&he(V(i),"iterate",Ot),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=V(r),l=V(i);return t||(ht(i,l)&&he(o,"has",i),he(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=V(l),c=e?Vi:t?$i:ge;return!t&&he(a,"iterate",Ot),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ce(n,t?{add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear")}:{add(i){!e&&!ke(i)&&!kt(i)&&(i=V(i));const r=V(this);return us(r).has.call(r,i)||(r.add(i),Xe(r,"add",i,i)),this},set(i,r){!e&&!ke(r)&&!kt(r)&&(r=V(r));const o=V(this),{has:l,get:a}=us(o);let c=l.call(o,i);c||(i=V(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?ht(r,u)&&Xe(o,"set",i,r):Xe(o,"add",i,r),this},delete(i){const r=V(this),{has:o,get:l}=us(r);let a=o.call(r,i);a||(i=V(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&Xe(r,"delete",i,void 0),c},clear(){const i=V(this),r=i.size!==0,o=i.clear();return r&&Xe(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ju(i,t,e)}),n}function Sr(t,e){const n=Gu(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get($(n,i)&&i in s?n:s,i,r)}const Ku={get:Sr(!1,!1)},zu={get:Sr(!1,!0)},qu={get:Sr(!0,!1)};const ia=new WeakMap,ra=new WeakMap,oa=new WeakMap,Yu=new WeakMap;function Qu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ju(t){return t.__v_skip||!Object.isExtensible(t)?0:Qu(wu(t))}function Tr(t){return kt(t)?t:xr(t,!1,Uu,Ku,ia)}function Xu(t){return xr(t,!1,$u,zu,ra)}function la(t){return xr(t,!0,Vu,qu,oa)}function xr(t,e,n,s,i){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Ju(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function In(t){return kt(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function kt(t){return!!(t&&t.__v_isReadonly)}function ke(t){return!!(t&&t.__v_isShallow)}function Nr(t){return t?!!t.__v_raw:!1}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Zu(t){return!$(t,"__v_skip")&&Object.isExtensible(t)&&$l(t,"__v_skip",!0),t}const ge=t=>se(t)?Tr(t):t,$i=t=>se(t)?la(t):t;function de(t){return t?t.__v_isRef===!0:!1}function fs(t){return eh(t,!1)}function eh(t,e){return de(t)?t:new th(t,e)}class th{constructor(e,n){this.dep=new wr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:V(e),this._value=n?e:ge(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ke(e)||kt(e);e=s?e:V(e),ht(e,n)&&(this._rawValue=e,this._value=s?e:ge(e),this.dep.trigger())}}function nh(t){return de(t)?t.value:t}const sh={get:(t,e,n)=>e==="__v_raw"?t:nh(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return de(i)&&!de(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function aa(t){return In(t)?t:new Proxy(t,sh)}class ih{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=On-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&J!==this)return Yl(this,!0),!0}get value(){const e=this.dep.track();return Xl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rh(t,e,n=!1){let s,i;return M(t)?s=t:(s=t.get,i=t.set),new ih(s,i,n)}const ds={},bs=new WeakMap;let Nt;function oh(t,e=!1,n=Nt){if(n){let s=bs.get(n);s||bs.set(n,s=[]),s.push(t)}}function lh(t,e,n=K){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=P=>i?P:ke(P)||i===!1||i===0?Ze(P,1):Ze(P);let u,h,p,g,E=!1,x=!1;if(de(t)?(h=()=>t.value,E=ke(t)):In(t)?(h=()=>c(t),E=!0):O(t)?(x=!0,E=t.some(P=>In(P)||ke(P)),h=()=>t.map(P=>{if(de(P))return P.value;if(In(P))return c(P);if(M(P))return a?a(P,2):P()})):M(t)?e?h=a?()=>a(t,2):t:h=()=>{if(p){Et();try{p()}finally{bt()}}const P=Nt;Nt=u;try{return a?a(t,3,[g]):t(g)}finally{Nt=P}}:h=ze,e&&i){const P=h,ie=i===!0?1/0:i;h=()=>Ze(P(),ie)}const H=Ou(),B=()=>{u.stop(),H&&H.active&&gr(H.effects,u)};if(r&&e){const P=e;e=(...ie)=>{P(...ie),B()}}let G=x?new Array(t.length).fill(ds):ds;const q=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const ie=u.run();if(i||E||(x?ie.some((lt,Le)=>ht(lt,G[Le])):ht(ie,G))){p&&p();const lt=Nt;Nt=u;try{const Le=[ie,G===ds?void 0:x&&G[0]===ds?[]:G,g];a?a(e,3,Le):e(...Le),G=ie}finally{Nt=lt}}}else u.run()};return l&&l(q),u=new zl(h),u.scheduler=o?()=>o(q,!1):q,g=P=>oh(P,!1,u),p=u.onStop=()=>{const P=bs.get(u);if(P){if(a)a(P,4);else for(const ie of P)ie();bs.delete(u)}},e?s?q(!0):G=u.run():o?o(q.bind(null,!0),!0):u.run(),B.pause=u.pause.bind(u),B.resume=u.resume.bind(u),B.stop=B,B}function Ze(t,e=1/0,n){if(e<=0||!se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,de(t))Ze(t.value,e,n);else if(O(t))for(let s=0;s<t.length;s++)Ze(t[s],e,n);else if(Bl(t)||zt(t))t.forEach(s=>{Ze(s,e,n)});else if(Ul(t)){for(const s in t)Ze(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ze(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qn(t,e,n,s){try{return s?t(...s):t()}catch(i){Qs(i,e,n)}}function qe(t,e,n,s){if(M(t)){const i=Qn(t,e,n,s);return i&&Wl(i)&&i.catch(r=>{Qs(r,e,n)}),i}if(O(t)){const i=[];for(let r=0;r<t.length;r++)i.push(qe(t[r],e,n,s));return i}}function Qs(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||K;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Et(),Qn(r,null,10,[t,a,c]),bt();return}}ah(t,n,i,s,o)}function ah(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const me=[];let $e=-1;const qt=[];let ct=null,$t=0;const ca=Promise.resolve();let ws=null;function ch(t){const e=ws||ca;return t?e.then(this?t.bind(this):t):e}function uh(t){let e=$e+1,n=me.length;for(;e<n;){const s=e+n>>>1,i=me[s],r=kn(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Rr(t){if(!(t.flags&1)){const e=kn(t),n=me[me.length-1];!n||!(t.flags&2)&&e>=kn(n)?me.push(t):me.splice(uh(e),0,t),t.flags|=1,ua()}}function ua(){ws||(ws=ca.then(fa))}function hh(t){O(t)?qt.push(...t):ct&&t.id===-1?ct.splice($t+1,0,t):t.flags&1||(qt.push(t),t.flags|=1),ua()}function Eo(t,e,n=$e+1){for(;n<me.length;n++){const s=me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ha(t){if(qt.length){const e=[...new Set(qt)].sort((n,s)=>kn(n)-kn(s));if(qt.length=0,ct){ct.push(...e);return}for(ct=e,$t=0;$t<ct.length;$t++){const n=ct[$t];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ct=null,$t=0}}const kn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fa(t){try{for($e=0;$e<me.length;$e++){const e=me[$e];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$e<me.length;$e++){const e=me[$e];e&&(e.flags&=-2)}$e=-1,me.length=0,ha(),ws=null,(me.length||qt.length)&&fa()}}let Ae=null,da=null;function Is(t){const e=Ae;return Ae=t,da=t&&t.type.__scopeId||null,e}function fh(t,e=Ae,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ao(-1);const r=Is(e);let o;try{o=t(...i)}finally{Is(r),s._d&&Ao(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function dh(t,e){if(Ae===null)return t;const n=ei(Ae),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=K]=e[i];r&&(M(r)&&(r={mounted:r,updated:r}),r.deep&&Ze(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Tt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Et(),qe(a,n,8,[t.el,l,t,e]),bt())}}const ph=Symbol("_vte"),_h=t=>t.__isTeleport;function Ar(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ar(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ss(t,e,n,s,i=!1){if(O(t)){t.forEach((E,x)=>Ss(E,e&&(O(e)?e[x]:e),n,s,i));return}if(Sn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ss(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?ei(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===K?l.refs={}:l.refs,h=l.setupState,p=V(h),g=h===K?()=>!1:E=>$(p,E);if(c!=null&&c!==a&&(le(c)?(u[c]=null,g(c)&&(h[c]=null)):de(c)&&(c.value=null)),M(a))Qn(a,l,12,[o,u]);else{const E=le(a),x=de(a);if(E||x){const H=()=>{if(t.f){const B=E?g(a)?h[a]:u[a]:a.value;i?O(B)&&gr(B,r):O(B)?B.includes(r)||B.push(r):E?(u[a]=[r],g(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else E?(u[a]=o,g(a)&&(h[a]=o)):x&&(a.value=o,t.k&&(u[t.k]=o))};o?(H.id=-1,xe(H,n)):H()}}}Ys().requestIdleCallback;Ys().cancelIdleCallback;const Sn=t=>!!t.type.__asyncLoader,_a=t=>t.type.__isKeepAlive;function gh(t,e){ga(t,"a",e)}function mh(t,e){ga(t,"da",e)}function ga(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Js(e,s,n),n){let i=n.parent;for(;i&&i.parent;)_a(i.parent.vnode)&&yh(s,e,n,i),i=i.parent}}function yh(t,e,n,s){const i=Js(e,t,s,!0);ma(()=>{gr(s[e],i)},n)}function Js(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Et();const l=Jn(n),a=qe(e,n,t,o);return l(),bt(),a});return s?i.unshift(r):i.push(r),r}}const it=t=>(e,n=ye)=>{(!Bn||t==="sp")&&Js(t,(...s)=>e(...s),n)},vh=it("bm"),Ch=it("m"),Eh=it("bu"),bh=it("u"),wh=it("bum"),ma=it("um"),Ih=it("sp"),Sh=it("rtg"),Th=it("rtc");function xh(t,e=ye){Js("ec",t,e)}const Nh=Symbol.for("v-ndc"),ji=t=>t?Ba(t)?ei(t):ji(t.parent):null,Tn=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ji(t.parent),$root:t=>ji(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>va(t),$forceUpdate:t=>t.f||(t.f=()=>{Rr(t.update)}),$nextTick:t=>t.n||(t.n=ch.bind(t.proxy)),$watch:t=>Qh.bind(t)}),Ci=(t,e)=>t!==K&&!t.__isScriptSetup&&$(t,e),Rh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ci(s,e))return o[e]=1,s[e];if(i!==K&&$(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&$(c,e))return o[e]=3,r[e];if(n!==K&&$(n,e))return o[e]=4,n[e];Gi&&(o[e]=0)}}const u=Tn[e];let h,p;if(u)return e==="$attrs"&&he(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==K&&$(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,$(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ci(i,e)?(i[e]=n,!0):s!==K&&$(s,e)?(s[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==K&&$(t,o)||Ci(e,o)||(l=r[0])&&$(l,o)||$(s,o)||$(Tn,o)||$(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bo(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Gi=!0;function Ah(t){const e=va(t),n=t.proxy,s=t.ctx;Gi=!1,e.beforeCreate&&wo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:E,activated:x,deactivated:H,beforeDestroy:B,beforeUnmount:G,destroyed:q,unmounted:P,render:ie,renderTracked:lt,renderTriggered:Le,errorCaptured:at,serverPrefetch:rs,expose:wt,inheritAttrs:un,components:os,directives:ls,filters:di}=e;if(c&&Ph(c,s,null),o)for(const te in o){const Y=o[te];M(Y)&&(s[te]=Y.bind(n))}if(i){const te=i.call(n,n);se(te)&&(t.data=Tr(te))}if(Gi=!0,r)for(const te in r){const Y=r[te],It=M(Y)?Y.bind(n,n):M(Y.get)?Y.get.bind(n,n):ze,as=!M(Y)&&M(Y.set)?Y.set.bind(n):ze,St=Ef({get:It,set:as});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>St.value,set:Be=>St.value=Be})}if(l)for(const te in l)ya(l[te],s,n,te);if(a){const te=M(a)?a.call(n):a;Reflect.ownKeys(te).forEach(Y=>{Lh(Y,te[Y])})}u&&wo(u,t,"c");function pe(te,Y){O(Y)?Y.forEach(It=>te(It.bind(n))):Y&&te(Y.bind(n))}if(pe(vh,h),pe(Ch,p),pe(Eh,g),pe(bh,E),pe(gh,x),pe(mh,H),pe(xh,at),pe(Th,lt),pe(Sh,Le),pe(wh,G),pe(ma,P),pe(Ih,rs),O(wt))if(wt.length){const te=t.exposed||(t.exposed={});wt.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:It=>n[Y]=It})})}else t.exposed||(t.exposed={});ie&&t.render===ze&&(t.render=ie),un!=null&&(t.inheritAttrs=un),os&&(t.components=os),ls&&(t.directives=ls),rs&&pa(t)}function Ph(t,e,n=ze){O(t)&&(t=Ki(t));for(const s in t){const i=t[s];let r;se(i)?"default"in i?r=ys(i.from||s,i.default,!0):r=ys(i.from||s):r=ys(i),de(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function wo(t,e,n){qe(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ya(t,e,n,s){let i=s.includes(".")?Oa(n,s):()=>n[s];if(le(t)){const r=e[t];M(r)&&bi(i,r)}else if(M(t))bi(i,t.bind(n));else if(se(t))if(O(t))t.forEach(r=>ya(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&bi(i,r,t)}}function va(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ts(a,c,o,!0)),Ts(a,e,o)),se(e)&&r.set(e,a),a}function Ts(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ts(t,r,n,!0),i&&i.forEach(o=>Ts(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Dh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Dh={data:Io,props:So,emits:So,methods:Cn,computed:Cn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Cn,directives:Cn,watch:Mh,provide:Io,inject:Oh};function Io(t,e){return e?t?function(){return Ce(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Oh(t,e){return Cn(Ki(t),Ki(e))}function Ki(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function Cn(t,e){return t?Ce(Object.create(null),t,e):e}function So(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:Ce(Object.create(null),bo(t),bo(e??{})):e}function Mh(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=_e(t[s],e[s]);return n}function Ca(){return{app:null,config:{isNativeTag:Eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kh=0;function Fh(t,e){return function(s,i=null){M(s)||(s=Ce({},s)),i!=null&&!se(i)&&(i=null);const r=Ca(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:kh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:bf,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&M(u.install)?(o.add(u),u.install(c,...h)):M(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,p){if(!a){const g=c._ceVNode||Mt(s,i);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),t(g,u,p),a=!0,c._container=u,u.__vue_app__=c,ei(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(qe(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Yt;Yt=c;try{return u()}finally{Yt=h}}};return c}}let Yt=null;function Lh(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function ys(t,e,n=!1){const s=ye||Ae;if(s||Yt){const i=Yt?Yt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}const Ea={},ba=()=>Object.create(Ea),wa=t=>Object.getPrototypeOf(t)===Ea;function Bh(t,e,n,s=!1){const i={},r=ba();t.propsDefaults=Object.create(null),Ia(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Xu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Wh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=V(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Xs(t.emitsOptions,p))continue;const g=e[p];if(a)if($(r,p))g!==r[p]&&(r[p]=g,c=!0);else{const E=gt(p);i[E]=zi(a,l,E,g,t,!1)}else g!==r[p]&&(r[p]=g,c=!0)}}}else{Ia(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!$(e,h)&&((u=Wt(h))===h||!$(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=zi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!$(e,h))&&(delete r[h],c=!0)}c&&Xe(t.attrs,"set","")}function Ia(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(En(a))continue;const c=e[a];let u;i&&$(i,u=gt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Xs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=V(n),c=l||K;for(let u=0;u<r.length;u++){const h=r[u];n[h]=zi(i,a,h,c[h],t,!$(c,h))}}return o}function zi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=$(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Jn(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Wt(n))&&(s=!0))}return s}const Hh=new WeakMap;function Sa(t,e,n=!1){const s=n?Hh:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[p,g]=Sa(h,e,!0);Ce(o,p),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return se(t)&&s.set(t,Kt),Kt;if(O(r))for(let u=0;u<r.length;u++){const h=gt(r[u]);To(h)&&(o[h]=K)}else if(r)for(const u in r){const h=gt(u);if(To(h)){const p=r[u],g=o[h]=O(p)||M(p)?{type:p}:Ce({},p),E=g.type;let x=!1,H=!0;if(O(E))for(let B=0;B<E.length;++B){const G=E[B],q=M(G)&&G.name;if(q==="Boolean"){x=!0;break}else q==="String"&&(H=!1)}else x=M(E)&&E.name==="Boolean";g[0]=x,g[1]=H,(x||$(g,"default"))&&l.push(h)}}const c=[o,l];return se(t)&&s.set(t,c),c}function To(t){return t[0]!=="$"&&!En(t)}const Ta=t=>t[0]==="_"||t==="$stable",Pr=t=>O(t)?t.map(Ke):[Ke(t)],Uh=(t,e,n)=>{if(e._n)return e;const s=fh((...i)=>Pr(e(...i)),n);return s._c=!1,s},xa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ta(i))continue;const r=t[i];if(M(r))e[i]=Uh(i,r,s);else if(r!=null){const o=Pr(r);e[i]=()=>o}}},Na=(t,e)=>{const n=Pr(e);t.slots.default=()=>n},Ra=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Vh=(t,e,n)=>{const s=t.slots=ba();if(t.vnode.shapeFlag&32){const i=e._;i?(Ra(s,e,n),n&&$l(s,"_",i,!0)):xa(e,s)}else e&&Na(t,e)},$h=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=K;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ra(i,e,n):(r=!e.$stable,xa(e,i)),o=e}else e&&(Na(t,e),o={default:1});if(r)for(const l in i)!Ta(l)&&o[l]==null&&delete i[l]},xe=sf;function jh(t){return Gh(t)}function Gh(t,e){const n=Ys();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=ze,insertStaticContent:E}=t,x=(f,d,_,v=null,m=null,y=null,S=void 0,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!_n(f,d)&&(v=cs(f),Be(f,m,y,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:C,ref:R,shapeFlag:T}=d;switch(C){case Zs:H(f,d,_,v);break;case Fn:B(f,d,_,v);break;case wi:f==null&&G(d,_,v,S);break;case Ge:os(f,d,_,v,m,y,S,I,w);break;default:T&1?ie(f,d,_,v,m,y,S,I,w):T&6?ls(f,d,_,v,m,y,S,I,w):(T&64||T&128)&&C.process(f,d,_,v,m,y,S,I,w,fn)}R!=null&&m&&Ss(R,f&&f.ref,y,d||f,!d)},H=(f,d,_,v)=>{if(f==null)s(d.el=l(d.children),_,v);else{const m=d.el=f.el;d.children!==f.children&&c(m,d.children)}},B=(f,d,_,v)=>{f==null?s(d.el=a(d.children||""),_,v):d.el=f.el},G=(f,d,_,v)=>{[f.el,f.anchor]=E(f.children,d,_,v,f.el,f.anchor)},q=({el:f,anchor:d},_,v)=>{let m;for(;f&&f!==d;)m=p(f),s(f,_,v),f=m;s(d,_,v)},P=({el:f,anchor:d})=>{let _;for(;f&&f!==d;)_=p(f),i(f),f=_;i(d)},ie=(f,d,_,v,m,y,S,I,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?lt(d,_,v,m,y,S,I,w):rs(f,d,m,y,S,I,w)},lt=(f,d,_,v,m,y,S,I)=>{let w,C;const{props:R,shapeFlag:T,transition:N,dirs:D}=f;if(w=f.el=o(f.type,y,R&&R.is,R),T&8?u(w,f.children):T&16&&at(f.children,w,null,v,m,Ei(f,y),S,I),D&&Tt(f,null,v,"created"),Le(w,f,f.scopeId,S,v),R){for(const Q in R)Q!=="value"&&!En(Q)&&r(w,Q,null,R[Q],y,v);"value"in R&&r(w,"value",null,R.value,y),(C=R.onVnodeBeforeMount)&&Ve(C,v,f)}D&&Tt(f,null,v,"beforeMount");const W=Kh(m,N);W&&N.beforeEnter(w),s(w,d,_),((C=R&&R.onVnodeMounted)||W||D)&&xe(()=>{C&&Ve(C,v,f),W&&N.enter(w),D&&Tt(f,null,v,"mounted")},m)},Le=(f,d,_,v,m)=>{if(_&&g(f,_),v)for(let y=0;y<v.length;y++)g(f,v[y]);if(m){let y=m.subTree;if(d===y||ka(y.type)&&(y.ssContent===d||y.ssFallback===d)){const S=m.vnode;Le(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},at=(f,d,_,v,m,y,S,I,w=0)=>{for(let C=w;C<f.length;C++){const R=f[C]=I?ut(f[C]):Ke(f[C]);x(null,R,d,_,v,m,y,S,I)}},rs=(f,d,_,v,m,y,S)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:C,dirs:R}=d;w|=f.patchFlag&16;const T=f.props||K,N=d.props||K;let D;if(_&&xt(_,!1),(D=N.onVnodeBeforeUpdate)&&Ve(D,_,d,f),R&&Tt(d,f,_,"beforeUpdate"),_&&xt(_,!0),(T.innerHTML&&N.innerHTML==null||T.textContent&&N.textContent==null)&&u(I,""),C?wt(f.dynamicChildren,C,I,_,v,Ei(d,m),y):S||Y(f,d,I,null,_,v,Ei(d,m),y,!1),w>0){if(w&16)un(I,T,N,_,m);else if(w&2&&T.class!==N.class&&r(I,"class",null,N.class,m),w&4&&r(I,"style",T.style,N.style,m),w&8){const W=d.dynamicProps;for(let Q=0;Q<W.length;Q++){const j=W[Q],Se=T[j],Ee=N[j];(Ee!==Se||j==="value")&&r(I,j,Se,Ee,m,_)}}w&1&&f.children!==d.children&&u(I,d.children)}else!S&&C==null&&un(I,T,N,_,m);((D=N.onVnodeUpdated)||R)&&xe(()=>{D&&Ve(D,_,d,f),R&&Tt(d,f,_,"updated")},v)},wt=(f,d,_,v,m,y,S)=>{for(let I=0;I<d.length;I++){const w=f[I],C=d[I],R=w.el&&(w.type===Ge||!_n(w,C)||w.shapeFlag&70)?h(w.el):_;x(w,C,R,null,v,m,y,S,!0)}},un=(f,d,_,v,m)=>{if(d!==_){if(d!==K)for(const y in d)!En(y)&&!(y in _)&&r(f,y,d[y],null,m,v);for(const y in _){if(En(y))continue;const S=_[y],I=d[y];S!==I&&y!=="value"&&r(f,y,I,S,m,v)}"value"in _&&r(f,"value",d.value,_.value,m)}},os=(f,d,_,v,m,y,S,I,w)=>{const C=d.el=f?f.el:l(""),R=d.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:N,slotScopeIds:D}=d;D&&(I=I?I.concat(D):D),f==null?(s(C,_,v),s(R,_,v),at(d.children||[],_,R,m,y,S,I,w)):T>0&&T&64&&N&&f.dynamicChildren?(wt(f.dynamicChildren,N,_,m,y,S,I),(d.key!=null||m&&d===m.subTree)&&Aa(f,d,!0)):Y(f,d,_,R,m,y,S,I,w)},ls=(f,d,_,v,m,y,S,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?m.ctx.activate(d,_,v,S,w):di(d,_,v,m,y,S,w):fo(f,d,w)},di=(f,d,_,v,m,y,S)=>{const I=f.component=_f(f,v,m);if(_a(f)&&(I.ctx.renderer=fn),gf(I,!1,S),I.asyncDep){if(m&&m.registerDep(I,pe,S),!f.el){const w=I.subTree=Mt(Fn);B(null,w,d,_)}}else pe(I,f,d,_,m,y,S)},fo=(f,d,_)=>{const v=d.component=f.component;if(tf(f,d,_))if(v.asyncDep&&!v.asyncResolved){te(v,d,_);return}else v.next=d,v.update();else d.el=f.el,v.vnode=d},pe=(f,d,_,v,m,y,S)=>{const I=()=>{if(f.isMounted){let{next:T,bu:N,u:D,parent:W,vnode:Q}=f;{const He=Pa(f);if(He){T&&(T.el=Q.el,te(f,T,S)),He.asyncDep.then(()=>{f.isUnmounted||I()});return}}let j=T,Se;xt(f,!1),T?(T.el=Q.el,te(f,T,S)):T=Q,N&&gs(N),(Se=T.props&&T.props.onVnodeBeforeUpdate)&&Ve(Se,W,T,Q),xt(f,!0);const Ee=No(f),We=f.subTree;f.subTree=Ee,x(We,Ee,h(We.el),cs(We),f,m,y),T.el=Ee.el,j===null&&nf(f,Ee.el),D&&xe(D,m),(Se=T.props&&T.props.onVnodeUpdated)&&xe(()=>Ve(Se,W,T,Q),m)}else{let T;const{el:N,props:D}=d,{bm:W,m:Q,parent:j,root:Se,type:Ee}=f,We=Sn(d);xt(f,!1),W&&gs(W),!We&&(T=D&&D.onVnodeBeforeMount)&&Ve(T,j,d),xt(f,!0);{Se.ce&&Se.ce._injectChildStyle(Ee);const He=f.subTree=No(f);x(null,He,_,v,f,m,y),d.el=He.el}if(Q&&xe(Q,m),!We&&(T=D&&D.onVnodeMounted)){const He=d;xe(()=>Ve(T,j,He),m)}(d.shapeFlag&256||j&&Sn(j.vnode)&&j.vnode.shapeFlag&256)&&f.a&&xe(f.a,m),f.isMounted=!0,d=_=v=null}};f.scope.on();const w=f.effect=new zl(I);f.scope.off();const C=f.update=w.run.bind(w),R=f.job=w.runIfDirty.bind(w);R.i=f,R.id=f.uid,w.scheduler=()=>Rr(R),xt(f,!0),C()},te=(f,d,_)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Wh(f,d.props,v,_),$h(f,d.children,_),Et(),Eo(f),bt()},Y=(f,d,_,v,m,y,S,I,w=!1)=>{const C=f&&f.children,R=f?f.shapeFlag:0,T=d.children,{patchFlag:N,shapeFlag:D}=d;if(N>0){if(N&128){as(C,T,_,v,m,y,S,I,w);return}else if(N&256){It(C,T,_,v,m,y,S,I,w);return}}D&8?(R&16&&hn(C,m,y),T!==C&&u(_,T)):R&16?D&16?as(C,T,_,v,m,y,S,I,w):hn(C,m,y,!0):(R&8&&u(_,""),D&16&&at(T,_,v,m,y,S,I,w))},It=(f,d,_,v,m,y,S,I,w)=>{f=f||Kt,d=d||Kt;const C=f.length,R=d.length,T=Math.min(C,R);let N;for(N=0;N<T;N++){const D=d[N]=w?ut(d[N]):Ke(d[N]);x(f[N],D,_,null,m,y,S,I,w)}C>R?hn(f,m,y,!0,!1,T):at(d,_,v,m,y,S,I,w,T)},as=(f,d,_,v,m,y,S,I,w)=>{let C=0;const R=d.length;let T=f.length-1,N=R-1;for(;C<=T&&C<=N;){const D=f[C],W=d[C]=w?ut(d[C]):Ke(d[C]);if(_n(D,W))x(D,W,_,null,m,y,S,I,w);else break;C++}for(;C<=T&&C<=N;){const D=f[T],W=d[N]=w?ut(d[N]):Ke(d[N]);if(_n(D,W))x(D,W,_,null,m,y,S,I,w);else break;T--,N--}if(C>T){if(C<=N){const D=N+1,W=D<R?d[D].el:v;for(;C<=N;)x(null,d[C]=w?ut(d[C]):Ke(d[C]),_,W,m,y,S,I,w),C++}}else if(C>N)for(;C<=T;)Be(f[C],m,y,!0),C++;else{const D=C,W=C,Q=new Map;for(C=W;C<=N;C++){const Te=d[C]=w?ut(d[C]):Ke(d[C]);Te.key!=null&&Q.set(Te.key,C)}let j,Se=0;const Ee=N-W+1;let We=!1,He=0;const dn=new Array(Ee);for(C=0;C<Ee;C++)dn[C]=0;for(C=D;C<=T;C++){const Te=f[C];if(Se>=Ee){Be(Te,m,y,!0);continue}let Ue;if(Te.key!=null)Ue=Q.get(Te.key);else for(j=W;j<=N;j++)if(dn[j-W]===0&&_n(Te,d[j])){Ue=j;break}Ue===void 0?Be(Te,m,y,!0):(dn[Ue-W]=C+1,Ue>=He?He=Ue:We=!0,x(Te,d[Ue],_,null,m,y,S,I,w),Se++)}const go=We?zh(dn):Kt;for(j=go.length-1,C=Ee-1;C>=0;C--){const Te=W+C,Ue=d[Te],mo=Te+1<R?d[Te+1].el:v;dn[C]===0?x(null,Ue,_,mo,m,y,S,I,w):We&&(j<0||C!==go[j]?St(Ue,_,mo,2):j--)}}},St=(f,d,_,v,m=null)=>{const{el:y,type:S,transition:I,children:w,shapeFlag:C}=f;if(C&6){St(f.component.subTree,d,_,v);return}if(C&128){f.suspense.move(d,_,v);return}if(C&64){S.move(f,d,_,fn);return}if(S===Ge){s(y,d,_);for(let T=0;T<w.length;T++)St(w[T],d,_,v);s(f.anchor,d,_);return}if(S===wi){q(f,d,_);return}if(v!==2&&C&1&&I)if(v===0)I.beforeEnter(y),s(y,d,_),xe(()=>I.enter(y),m);else{const{leave:T,delayLeave:N,afterLeave:D}=I,W=()=>s(y,d,_),Q=()=>{T(y,()=>{W(),D&&D()})};N?N(y,W,Q):Q()}else s(y,d,_)},Be=(f,d,_,v=!1,m=!1)=>{const{type:y,props:S,ref:I,children:w,dynamicChildren:C,shapeFlag:R,patchFlag:T,dirs:N,cacheIndex:D}=f;if(T===-2&&(m=!1),I!=null&&Ss(I,null,_,f,!0),D!=null&&(d.renderCache[D]=void 0),R&256){d.ctx.deactivate(f);return}const W=R&1&&N,Q=!Sn(f);let j;if(Q&&(j=S&&S.onVnodeBeforeUnmount)&&Ve(j,d,f),R&6)Cu(f.component,_,v);else{if(R&128){f.suspense.unmount(_,v);return}W&&Tt(f,null,d,"beforeUnmount"),R&64?f.type.remove(f,d,_,fn,v):C&&!C.hasOnce&&(y!==Ge||T>0&&T&64)?hn(C,d,_,!1,!0):(y===Ge&&T&384||!m&&R&16)&&hn(w,d,_),v&&po(f)}(Q&&(j=S&&S.onVnodeUnmounted)||W)&&xe(()=>{j&&Ve(j,d,f),W&&Tt(f,null,d,"unmounted")},_)},po=f=>{const{type:d,el:_,anchor:v,transition:m}=f;if(d===Ge){vu(_,v);return}if(d===wi){P(f);return}const y=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:I}=m,w=()=>S(_,y);I?I(f.el,y,w):w()}else y()},vu=(f,d)=>{let _;for(;f!==d;)_=p(f),i(f),f=_;i(d)},Cu=(f,d,_)=>{const{bum:v,scope:m,job:y,subTree:S,um:I,m:w,a:C}=f;xo(w),xo(C),v&&gs(v),m.stop(),y&&(y.flags|=8,Be(S,f,d,_)),I&&xe(I,d),xe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},hn=(f,d,_,v=!1,m=!1,y=0)=>{for(let S=y;S<f.length;S++)Be(f[S],d,_,v,m)},cs=f=>{if(f.shapeFlag&6)return cs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=p(f.anchor||f.el),_=d&&d[ph];return _?p(_):d};let pi=!1;const _o=(f,d,_)=>{f==null?d._vnode&&Be(d._vnode,null,null,!0):x(d._vnode||null,f,d,null,null,null,_),d._vnode=f,pi||(pi=!0,Eo(),ha(),pi=!1)},fn={p:x,um:Be,m:St,r:po,mt:di,mc:at,pc:Y,pbc:wt,n:cs,o:t};return{render:_o,hydrate:void 0,createApp:Fh(_o)}}function Ei({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Kh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Aa(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ut(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Aa(o,l)),l.type===Zs&&(l.el=o.el)}}function zh(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Pa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pa(e)}function xo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const qh=Symbol.for("v-scx"),Yh=()=>ys(qh);function bi(t,e,n){return Da(t,e,n)}function Da(t,e,n=K){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ce({},n),a=e&&s||!e&&r!=="post";let c;if(Bn){if(r==="sync"){const g=Yh();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=ze,g.resume=ze,g.pause=ze,g}}const u=ye;l.call=(g,E,x)=>qe(g,u,E,x);let h=!1;r==="post"?l.scheduler=g=>{xe(g,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(g,E)=>{E?g():Rr(g)}),l.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=lh(t,e,l);return Bn&&(c?c.push(p):a&&p()),p}function Qh(t,e,n){const s=this.proxy,i=le(t)?t.includes(".")?Oa(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=Jn(this),l=Da(i,r.bind(s),n);return o(),l}function Oa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Jh=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gt(e)}Modifiers`]||t[`${Wt(e)}Modifiers`];function Xh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||K;let i=n;const r=e.startsWith("update:"),o=r&&Jh(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>le(u)?u.trim():u)),o.number&&(i=n.map(Bi)));let l,a=s[l=_i(e)]||s[l=_i(gt(e))];!a&&r&&(a=s[l=_i(Wt(e))]),a&&qe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qe(c,t,6,i)}}function Ma(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=Ma(c,e,!0);u&&(l=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(se(t)&&s.set(t,null),null):(O(r)?r.forEach(a=>o[a]=null):Ce(o,r),se(t)&&s.set(t,o),o)}function Xs(t,e){return!t||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,Wt(e))||$(t,e))}function No(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:p,setupState:g,ctx:E,inheritAttrs:x}=t,H=Is(t);let B,G;try{if(n.shapeFlag&4){const P=i||s,ie=P;B=Ke(c.call(ie,P,u,h,g,p,E)),G=l}else{const P=e;B=Ke(P.length>1?P(h,{attrs:l,slots:o,emit:a}):P(h,null)),G=e.props?l:Zh(l)}}catch(P){xn.length=0,Qs(P,t,1),B=Mt(Fn)}let q=B;if(G&&x!==!1){const P=Object.keys(G),{shapeFlag:ie}=q;P.length&&ie&7&&(r&&P.some(_r)&&(G=ef(G,r)),q=Zt(q,G,!1,!0))}return n.dirs&&(q=Zt(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Ar(q,n.transition),B=q,Is(H),B}const Zh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ks(n))&&((e||(e={}))[n]=t[n]);return e},ef=(t,e)=>{const n={};for(const s in t)(!_r(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function tf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ro(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==s[p]&&!Xs(c,p))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ro(s,o,c):!0:!!o;return!1}function Ro(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Xs(n,r))return!0}return!1}function nf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ka=t=>t.__isSuspense;function sf(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):hh(t)}const Ge=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),wi=Symbol.for("v-stc"),xn=[];let Re=null;function rf(t=!1){xn.push(Re=t?null:[])}function of(){xn.pop(),Re=xn[xn.length-1]||null}let Ln=1;function Ao(t,e=!1){Ln+=t,t<0&&Re&&e&&(Re.hasOnce=!0)}function lf(t){return t.dynamicChildren=Ln>0?Re||Kt:null,of(),Ln>0&&Re&&Re.push(t),t}function af(t,e,n,s,i,r){return lf(je(t,e,n,s,i,r,!0))}function Fa(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const La=({key:t})=>t??null,vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?le(t)||de(t)||M(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function je(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&La(e),ref:e&&vs(e),scopeId:da,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ae};return l?(Dr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=le(n)?8:16),Ln>0&&!o&&Re&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Re.push(a),a}const Mt=cf;function cf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Nh)&&(t=Fn),Fa(t)){const l=Zt(t,e,!0);return n&&Dr(l,n),Ln>0&&!r&&Re&&(l.shapeFlag&6?Re[Re.indexOf(t)]=l:Re.push(l)),l.patchFlag=-2,l}if(Cf(t)&&(t=t.__vccOpts),e){e=uf(e);let{class:l,style:a}=e;l&&!le(l)&&(e.class=vr(l)),se(a)&&(Nr(a)&&!O(a)&&(a=Ce({},a)),e.style=yr(a))}const o=le(t)?1:ka(t)?128:_h(t)?64:se(t)?4:M(t)?2:0;return je(t,e,n,s,i,o,r,!0)}function uf(t){return t?Nr(t)||wa(t)?Ce({},t):t:null}function Zt(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?ff(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&La(c),ref:e&&e.ref?n&&r?O(r)?r.concat(vs(e)):[r,vs(e)]:vs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Ar(u,a.clone(u)),u}function hf(t=" ",e=0){return Mt(Zs,null,t,e)}function Ke(t){return t==null||typeof t=="boolean"?Mt(Fn):O(t)?Mt(Ge,null,t.slice()):Fa(t)?ut(t):Mt(Zs,null,String(t))}function ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function Dr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Dr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!wa(e)?e._ctx=Ae:i===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),s&64?(n=16,e=[hf(e)]):n=8);t.children=e,t.shapeFlag|=n}function ff(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=vr([e.class,s.class]));else if(i==="style")e.style=yr([e.style,s.style]);else if(Ks(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ve(t,e,n,s=null){qe(t,e,7,[n,s])}const df=Ca();let pf=0;function _f(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||df,r={uid:pf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(s,i),emitsOptions:Ma(s,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Xh.bind(null,r),t.ce&&t.ce(r),r}let ye=null,xs,qi;{const t=Ys(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};xs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),qi=e("__VUE_SSR_SETTERS__",n=>Bn=n)}const Jn=t=>{const e=ye;return xs(t),t.scope.on(),()=>{t.scope.off(),xs(e)}},Po=()=>{ye&&ye.scope.off(),xs(null)};function Ba(t){return t.vnode.shapeFlag&4}let Bn=!1;function gf(t,e=!1,n=!1){e&&qi(e);const{props:s,children:i}=t.vnode,r=Ba(t);Bh(t,s,r,e),Vh(t,i,n);const o=r?mf(t,e):void 0;return e&&qi(!1),o}function mf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rh);const{setup:s}=n;if(s){Et();const i=t.setupContext=s.length>1?vf(t):null,r=Jn(t),o=Qn(s,t,0,[t.props,i]),l=Wl(o);if(bt(),r(),(l||t.sp)&&!Sn(t)&&pa(t),l){if(o.then(Po,Po),e)return o.then(a=>{Do(t,a)}).catch(a=>{Qs(a,t,0)});t.asyncDep=o}else Do(t,o)}else Wa(t)}function Do(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=aa(e)),Wa(t)}function Wa(t,e,n){const s=t.type;t.render||(t.render=s.render||ze);{const i=Jn(t);Et();try{Ah(t)}finally{bt(),i()}}}const yf={get(t,e){return he(t,"get",""),t[e]}};function vf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yf),slots:t.slots,emit:t.emit,expose:e}}function ei(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(aa(Zu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tn)return Tn[n](t)},has(e,n){return n in e||n in Tn}})):t.proxy}function Cf(t){return M(t)&&"__vccOpts"in t}const Ef=(t,e)=>rh(t,e,Bn),bf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yi;const Oo=typeof window<"u"&&window.trustedTypes;if(Oo)try{Yi=Oo.createPolicy("vue",{createHTML:t=>t})}catch{}const Ha=Yi?t=>Yi.createHTML(t):t=>t,wf="http://www.w3.org/2000/svg",If="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,Mo=Je&&Je.createElement("template"),Sf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Je.createElementNS(wf,t):e==="mathml"?Je.createElementNS(If,t):n?Je.createElement(t,{is:n}):Je.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Je.createTextNode(t),createComment:t=>Je.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Je.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Mo.innerHTML=Ha(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Mo.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Tf=Symbol("_vtc");function xf(t,e,n){const s=t[Tf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ko=Symbol("_vod"),Nf=Symbol("_vsh"),Rf=Symbol(""),Af=/(^|;)\s*display\s*:/;function Pf(t,e,n){const s=t.style,i=le(n);let r=!1;if(n&&!i){if(e)if(le(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Cs(s,l,"")}else for(const o in e)n[o]==null&&Cs(s,o,"");for(const o in n)o==="display"&&(r=!0),Cs(s,o,n[o])}else if(i){if(e!==n){const o=s[Rf];o&&(n+=";"+o),s.cssText=n,r=Af.test(n)}}else e&&t.removeAttribute("style");ko in t&&(t[ko]=r?s.display:"",t[Nf]&&(s.display="none"))}const Fo=/\s*!important$/;function Cs(t,e,n){if(O(n))n.forEach(s=>Cs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Df(t,e);Fo.test(n)?t.setProperty(Wt(s),n.replace(Fo,""),"important"):t[s]=n}}const Lo=["Webkit","Moz","ms"],Ii={};function Df(t,e){const n=Ii[e];if(n)return n;let s=gt(e);if(s!=="filter"&&s in t)return Ii[e]=s;s=Vl(s);for(let i=0;i<Lo.length;i++){const r=Lo[i]+s;if(r in t)return Ii[e]=r}return e}const Bo="http://www.w3.org/1999/xlink";function Wo(t,e,n,s,i,r=Pu(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Bo,e.slice(6,e.length)):t.setAttributeNS(Bo,e,n):n==null||r&&!jl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ct(n)?String(n):n)}function Ho(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ha(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jl(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function jt(t,e,n,s){t.addEventListener(e,n,s)}function Of(t,e,n,s){t.removeEventListener(e,n,s)}const Uo=Symbol("_vei");function Mf(t,e,n,s,i=null){const r=t[Uo]||(t[Uo]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=kf(e);if(s){const c=r[e]=Bf(s,i);jt(t,l,c,a)}else o&&(Of(t,l,o,a),r[e]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function kf(t){let e;if(Vo.test(t)){e={};let s;for(;s=t.match(Vo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wt(t.slice(2)),e]}let Si=0;const Ff=Promise.resolve(),Lf=()=>Si||(Ff.then(()=>Si=0),Si=Date.now());function Bf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qe(Wf(s,n.value),e,5,[s])};return n.value=t,n.attached=Lf(),n}function Wf(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const $o=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Hf=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?xf(t,s,o):e==="style"?Pf(t,n,s):Ks(e)?_r(e)||Mf(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uf(t,e,s,o))?(Ho(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wo(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!le(s))?Ho(t,gt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wo(t,e,s,o))};function Uf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&$o(e)&&M(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return $o(e)&&le(n)?!1:e in t}const jo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>gs(e,n):e};function Vf(t){t.target.composing=!0}function Go(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ti=Symbol("_assign"),$f={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Ti]=jo(i);const r=s||i.props&&i.props.type==="number";jt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Bi(l)),t[Ti](l)}),n&&jt(t,"change",()=>{t.value=t.value.trim()}),e||(jt(t,"compositionstart",Vf),jt(t,"compositionend",Go),jt(t,"change",Go))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Ti]=jo(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Bi(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},jf=Ce({patchProp:Hf},Sf);let Ko;function Gf(){return Ko||(Ko=jh(jf))}const Kf=(...t)=>{const e=Gf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qf(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,zf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qf(t){return le(t)?document.querySelector(t):t}const Yf=()=>{};var zo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw rn(e)},rn=function(t){return new Error("Firebase Database ("+Ua.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Or={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let p=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(p=64)),s.push(n[u],n[h],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Jf;const p=r<<2|l>>4;if(s.push(p),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const E=c<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $a=function(t){const e=Va(t);return Or.encodeByteArray(e,!0)},Ns=function(t){return $a(t).replace(/\./g,"")},Qi=function(t){try{return Or.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){return ja(void 0,t)}function ja(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zf(n)||(t[n]=ja(t[n],e[n]));return t}function Zf(t){return t!=="__proto__"}/**
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
 */function ed(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const td=()=>ed().__FIREBASE_DEFAULTS__,nd=()=>{if(typeof process>"u"||typeof zo>"u")return;const t=zo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qi(t[1]);return e&&JSON.parse(e)},Ga=()=>{try{return Yf()||td()||nd()||sd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},id=t=>{var e,n;return(n=(e=Ga())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rd=t=>{const e=id(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ka=()=>{var t;return(t=Ga())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function od(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ns(JSON.stringify(n)),Ns(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function za(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ld())}function ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cd(){return Ua.NODE_ADMIN===!0}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function hd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fd,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?dd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,l,s)}}function dd(t,e){return t.replace(pd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){return JSON.parse(t)}function re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Wn(Qi(r[0])||""),n=Wn(Qi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},_d=function(t){const e=Ya(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gd=function(t){const e=Ya(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function en(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function As(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Yo(r)&&Yo(o)){if(!As(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Yo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const p=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Mr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ni=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function on(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class Cd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ti;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bd(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ed(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ed(t){return t===Rt?void 0:t}function bd(t){return t.instantiationMode==="EAGER"}/**
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
 */class wd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Id={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Sd=X.INFO,Td={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},xd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Td[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=Sd,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Nd=(t,e)=>e.some(n=>t instanceof n);let Qo,Jo;function Rd(){return Qo||(Qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ad(){return Jo||(Jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,Ji=new WeakMap,Xa=new WeakMap,xi=new WeakMap,kr=new WeakMap;function Pd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ft(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ja.set(n,t)}).catch(()=>{}),kr.set(e,t),e}function Dd(t){if(Ji.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ji.set(t,e)}let Xi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ji.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Od(t){Xi=t(Xi)}function Md(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ni(this),e,...n);return Xa.set(s,e.sort?e.sort():[e]),ft(s)}:Ad().includes(t)?function(...e){return t.apply(Ni(this),e),ft(Ja.get(this))}:function(...e){return ft(t.apply(Ni(this),e))}}function kd(t){return typeof t=="function"?Md(t):(t instanceof IDBTransaction&&Dd(t),Nd(t,Rd())?new Proxy(t,Xi):t)}function ft(t){if(t instanceof IDBRequest)return Pd(t);if(xi.has(t))return xi.get(t);const e=kd(t);return e!==t&&(xi.set(t,e),kr.set(e,t)),e}const Ni=t=>kr.get(t);function Fd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=ft(o);return s&&o.addEventListener("upgradeneeded",a=>{s(ft(o.result),a.oldVersion,a.newVersion,ft(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ld=["get","getKey","getAll","getAllKeys","count"],Bd=["put","add","delete","clear"],Ri=new Map;function Xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Bd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ld.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ri.set(e,r),r}Od(t=>({...t,get:(e,n,s)=>Xo(e,n)||t.get(e,n,s),has:(e,n)=>!!Xo(e,n)||t.has(e,n)}));/**
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
 */class Wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zi="@firebase/app",Zo="0.11.2";/**
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
 */const nt=new Qa("@firebase/app"),Ud="@firebase/app-compat",Vd="@firebase/analytics-compat",$d="@firebase/analytics",jd="@firebase/app-check-compat",Gd="@firebase/app-check",Kd="@firebase/auth",zd="@firebase/auth-compat",qd="@firebase/database",Yd="@firebase/data-connect",Qd="@firebase/database-compat",Jd="@firebase/functions",Xd="@firebase/functions-compat",Zd="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",sp="@firebase/performance",ip="@firebase/performance-compat",rp="@firebase/remote-config",op="@firebase/remote-config-compat",lp="@firebase/storage",ap="@firebase/storage-compat",cp="@firebase/firestore",up="@firebase/vertexai",hp="@firebase/firestore-compat",fp="firebase",dp="11.4.0";/**
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
 */const er="[DEFAULT]",pp={[Zi]:"fire-core",[Ud]:"fire-core-compat",[$d]:"fire-analytics",[Vd]:"fire-analytics-compat",[Gd]:"fire-app-check",[jd]:"fire-app-check-compat",[Kd]:"fire-auth",[zd]:"fire-auth-compat",[qd]:"fire-rtdb",[Yd]:"fire-data-connect",[Qd]:"fire-rtdb-compat",[Jd]:"fire-fn",[Xd]:"fire-fn-compat",[Zd]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[sp]:"fire-perf",[ip]:"fire-perf-compat",[rp]:"fire-rc",[op]:"fire-rc-compat",[lp]:"fire-gcs",[ap]:"fire-gcs-compat",[cp]:"fire-fst",[hp]:"fire-fst-compat",[up]:"fire-vertex","fire-js":"fire-js",[fp]:"fire-js-all"};/**
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
 */const Ps=new Map,_p=new Map,tr=new Map;function el(t,e){try{t.container.addComponent(e)}catch(n){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(tr.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;tr.set(e,t);for(const n of Ps.values())el(n,t);for(const n of _p.values())el(n,t);return!0}function gp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mp(t){return t==null?!1:t.settings!==void 0}/**
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
 */const yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new qa("app","Firebase",yp);/**
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
 */class vp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Cp=dp;function Za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:er,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw dt.create("bad-app-name",{appName:String(i)});if(n||(n=Ka()),!n)throw dt.create("no-options");const r=Ps.get(i);if(r){if(As(n,r.options)&&As(s,r.config))return r;throw dt.create("duplicate-app",{appName:i})}const o=new wd(i);for(const a of tr.values())o.addComponent(a);const l=new vp(n,s,o);return Ps.set(i,l),l}function Ep(t=er){const e=Ps.get(t);if(!e&&t===er&&Ka())return Za();if(!e)throw dt.create("no-app",{appName:t});return e}function Qt(t,e,n){var s;let i=(s=pp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(l.join(" "));return}Ds(new Hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",wp=1,Un="firebase-heartbeat-store";let Ai=null;function ec(){return Ai||(Ai=Fd(bp,wp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Un)}catch(n){console.warn(n)}}}}).catch(t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})})),Ai}async function Ip(t){try{const n=(await ec()).transaction(Un),s=await n.objectStore(Un).get(tc(t));return await n.done,s}catch(e){if(e instanceof Xn)nt.warn(e.message);else{const n=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nt.warn(n.message)}}}async function tl(t,e){try{const s=(await ec()).transaction(Un,"readwrite");await s.objectStore(Un).put(e,tc(t)),await s.done}catch(n){if(n instanceof Xn)nt.warn(n.message);else{const s=dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nt.warn(s.message)}}}function tc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sp=1024,Tp=30;class xp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Tp){const o=Ap(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){nt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nl(),{heartbeatsToSend:s,unsentEntries:i}=Np(this._heartbeatsCache.heartbeats),r=Ns(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return nt.warn(n),""}}}function nl(){return new Date().toISOString().substring(0,10)}function Np(t,e=Sp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ip(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sl(t){return Ns(JSON.stringify({version:2,heartbeats:t})).length}function Ap(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Pp(t){Ds(new Hn("platform-logger",e=>new Wd(e),"PRIVATE")),Ds(new Hn("heartbeat",e=>new xp(e),"PRIVATE")),Qt(Zi,Zo,t),Qt(Zi,Zo,"esm2017"),Qt("fire-js","")}Pp("");var Dp="firebase",Op="11.4.0";/**
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
 */Qt(Dp,Op,"app");var il={};const rl="@firebase/database",ol="1.0.13";/**
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
 */let nc="";function Mp(t){nc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kp(e)}}catch{}return new Fp},Pt=sc("localStorage"),Lp=sc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Qa("@firebase/database"),Bp=function(){let t=1;return function(){return t++}}(),ic=function(t){const e=vd(t),n=new yd;n.update(e);const s=n.digest();return Or.encodeByteArray(s)},Zn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zn.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let Nn=null,ll=!0;const Wp=function(t,e){b(!0,"Can't turn on custom loggers persistently."),Jt.logLevel=X.VERBOSE,Nn=Jt.log.bind(Jt)},fe=function(...t){if(ll===!0&&(ll=!1,Nn===null&&Lp.get("logging_enabled")===!0&&Wp()),Nn){const e=Zn.apply(null,t);Nn(e)}},es=function(t){return function(...e){fe(t,...e)}},nr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zn(...t);Jt.error(e)},st=function(...t){const e=`FIREBASE FATAL ERROR: ${Zn(...t)}`;throw Jt.error(e),new Error(e)},we=function(...t){const e="FIREBASE WARNING: "+Zn(...t);Jt.warn(e)},Hp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&we("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Up=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},tn="[MIN_NAME]",Ft="[MAX_NAME]",ln=function(t,e){if(t===e)return 0;if(t===tn||e===Ft)return-1;if(e===tn||t===Ft)return 1;{const n=al(t),s=al(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Vp=function(t,e){return t===e?0:t<e?-1:1},gn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+re(e))},Fr=function(t){if(typeof t!="object"||t===null)return re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=re(e[s]),n+=":",n+=Fr(t[e[s]]);return n+="}",n},oc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lc=function(t){b(!rc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let p=parseInt(u.substr(a,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},$p=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Gp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Kp=new RegExp("^-?(0*)\\d{1,10}$"),zp=-2147483648,qp=2147483647,al=function(t){if(Kp.test(t)){const e=Number(t);if(e>=zp&&e<=qp)return e}return null},an=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw we("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Qp{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,mp(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){we(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',we(e)}}class Es{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Es.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="5",ac="v",cc="s",uc="r",hc="f",fc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dc="ls",pc="p",sr="ac",_c="websocket",gc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Xp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yc(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===_c)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xp(t)&&(n.ns=t.namespace);const i=[];return Ie(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.counters_={}}incrementCounter(e,n=1){rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Xf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={},Di={};function Br(t){const e=t.toString();return Pi[e]||(Pi[e]=new Zp),Pi[e]}function e_(t,e){const n=t.toString();return Di[n]||(Di[n]=e()),Di[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&an(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="start",n_="close",s_="pLPCommand",i_="pRTLPCB",vc="id",Cc="pw",Ec="ser",r_="cb",o_="seg",l_="ts",a_="d",c_="dframe",bc=1870,wc=30,u_=bc-wc,h_=25e3,f_=3e4;class Gt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=es(e),this.stats_=Br(n),this.urlFn=a=>(this.appCheckToken&&(a[sr]=this.appCheckToken),yc(n,gc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new t_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(f_)),Up(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cl)this.id=l,this.password=a;else if(o===n_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[cl]="t",s[Ec]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[r_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ac]=Lr,this.transportSessionId&&(s[cc]=this.transportSessionId),this.lastSessionId&&(s[dc]=this.lastSessionId),this.applicationId&&(s[pc]=this.applicationId),this.appCheckToken&&(s[sr]=this.appCheckToken),typeof location<"u"&&location.hostname&&fc.test(location.hostname)&&(s[uc]=hc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gt.forceAllow_=!0}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){return Gt.forceAllow_?!0:!Gt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$p()&&!jp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$a(n),i=oc(s,u_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[c_]="t",s[vc]=e,s[Cc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bp(),window[s_+this.uniqueCallbackIdentifier]=e,window[i_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){fe("frame writing exception"),l.stack&&fe(l.stack),fe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vc]=this.myID,e[Cc]=this.myPW,e[Ec]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wc+s.length<=bc;){const o=this.pendingSegs.shift();s=s+"&"+o_+i+"="+o.seg+"&"+l_+i+"="+o.ts+"&"+a_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(h_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=16384,p_=45e3;let Os=null;typeof MozWebSocket<"u"?Os=MozWebSocket:typeof WebSocket<"u"&&(Os=WebSocket);class Pe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=es(this.connId),this.stats_=Br(n),this.connURL=Pe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ac]=Lr,typeof location<"u"&&location.hostname&&fc.test(location.hostname)&&(o[uc]=hc),n&&(o[cc]=n),s&&(o[dc]=s),i&&(o[sr]=i),r&&(o[pc]=r),yc(e,_c,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pt.set("previous_websocket_failure",!0);try{let s;cd(),this.mySock=new Os(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Os!==null&&!Pe.forceDisallow_}static previouslyFailed(){return Pt.isInMemoryStorage||Pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Wn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=oc(n,d_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(p_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pe.responsesRequiredToBeHealthy=2;Pe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{static get ALL_TRANSPORTS(){return[Gt,Pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Pe&&Pe.isAvailable();let s=n&&!Pe.previouslyFailed();if(e.webSocketOnly&&(n||we("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pe];else{const i=this.transports_=[];for(const r of Vn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Vn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=6e4,g_=5e3,m_=10*1024,y_=100*1024,Oi="t",ul="d",v_="s",hl="r",C_="e",fl="o",dl="a",pl="n",_l="p",E_="h";class b_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=es("c:"+this.id+":"),this.transportManager_=new Vn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Rn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>y_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>m_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Oi in e){const n=e[Oi];n===dl?this.upgradeIfSecondaryHealthy_():n===hl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_l,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gn("t",e),s=gn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gn(Oi,e);if(ul in e){const s=e[ul];if(n===E_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===pl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===v_?this.onConnectionShutdown_(s):n===hl?this.onReset_(s):n===C_?nr("Server Error: "+s):n===fl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lr!==s&&we("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Rn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(__))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(g_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_l,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Sc{static getInstance(){return new Ms}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!za()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=32,ml=768;class z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function U(){return new z("")}function k(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mt(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new z(t.pieces_,e)}function Tc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function w_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new z(e,0)}function oe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new z(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function ve(t,e){const n=k(t),s=k(e);if(n===null)return e;if(n===s)return ve(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Hr(t,e){if(mt(t)!==mt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function De(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(mt(t)>mt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class I_{constructor(e,n){this.errorPrefix_=n,this.parts_=xc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ni(this.parts_[s]);Rc(this)}}function S_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ni(e),Rc(t)}function T_(t){const e=t.parts_.pop();t.byteLength_-=ni(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rc(t){if(t.byteLength_>ml)throw new Error(t.errorPrefix_+"has a key path longer than "+ml+" bytes ("+t.byteLength_+").");if(t.parts_.length>gl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gl+") or object contains a cycle "+At(t))}function At(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Sc{static getInstance(){return new Ur}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=1e3,x_=60*5*1e3,yl=30*1e3,N_=1.3,R_=3e4,A_="server_kill",vl=3;class tt extends Ic{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=tt.nextPersistentConnectionId_++,this.log_=es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mn,this.maxReconnectDelay_=x_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ur.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ms.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(re(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ti,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;tt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rt(e,"w")){const s=en(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();we(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_d(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):nr("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>R_&&(this.reconnectDelay_=mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*N_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?fe("getToken() completed but was canceled"):(fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,l=new b_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{we(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(A_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&we(h),a())}}}interrupt(e){fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qo(this.interruptReasons_)&&(this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Fr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vl&&(this.reconnectDelay_=yl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nc.replace(/\./g,"-")]=1,za()?e["framework.cordova"]=1:ad()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ms.getInstance().currentlyOnline();return qo(this.interruptReasons_)&&e}}tt.nextPersistentConnectionId_=0;tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class si{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(tn,e),i=new F(tn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class Ac extends si{static get __EMPTY_NODE(){return ps}static set __EMPTY_NODE(e){ps=e}compare(e,n){return ln(e.name,n.name)}isDefinedOn(e){throw rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Ft,ps)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,ps)}toString(){return".key"}}const Xt=new Ac;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ce.RED,this.left=i??be.EMPTY_NODE,this.right=r??be.EMPTY_NODE}copy(e,n,s,i,r){return new ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class P_{copy(e,n,s,i,r){return this}insert(e,n,s){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _s(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _s(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _s(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new P_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t,e){return ln(t.name,e.name)}function Vr(t,e){return ln(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;function O_(t){ir=t}const Pc=function(t){return typeof t=="number"?"number:"+lc(t):"string:"+t},Dc=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rt(e,".sv"),"Priority must be a string or number.")}else b(t===ir||t.isEmpty(),"priority of unexpected type.");b(t===ir||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class ae{static set __childrenNodeConstructor(e){Cl=e}static get __childrenNodeConstructor(){return Cl}constructor(e,n=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dc(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:k(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=k(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lc(this.value_):e+=this.value_,this.lazyHash_=ic(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ae.VALUE_TYPE_ORDER.indexOf(n),r=ae.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc,Mc;function M_(t){Oc=t}function k_(t){Mc=t}class F_ extends si{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ln(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Ft,new ae("[PRIORITY-POST]",Mc))}makePost(e,n){const s=Oc(e);return new F(n,new ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const ne=new F_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=Math.log(2);class B_{constructor(e){const n=r=>parseInt(Math.log(r)/L_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ks=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,p;if(u===0)return null;if(u===1)return h=t[a],p=n?n(h):h,new ce(p,h.node,ce.BLACK,null,null);{const g=parseInt(u/2,10)+a,E=i(a,g),x=i(g+1,c);return h=t[g],p=n?n(h):h,new ce(p,h.node,ce.BLACK,E,x)}},r=function(a){let c=null,u=null,h=t.length;const p=function(E,x){const H=h-E,B=h;h-=E;const G=i(H+1,B),q=t[H],P=n?n(q):q;g(new ce(P,q.node,x,null,G))},g=function(E){c?(c.left=E,c=E):(u=E,c=E)};for(let E=0;E<a.count;++E){const x=a.nextBitIsOne(),H=Math.pow(2,a.count-(E+1));x?p(H,ce.BLACK):(p(H,ce.BLACK),p(H,ce.RED))}return u},o=new B_(t.length),l=r(o);return new be(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;const Vt={};class et{static get Default(){return b(Vt&&ne,"ChildrenNode.ts has not been loaded"),Mi=Mi||new et({".priority":Vt},{".priority":ne}),Mi}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=en(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return rt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==Xt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ks(s,e.getCompare()):l=Vt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new et(u,c)}addToIndexes(e,n){const s=Rs(this.indexes_,(i,r)=>{const o=en(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Vt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ks(l,o.getCompare())}else return Vt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new et(s,this.indexSet_)}removeFromIndexes(e,n){const s=Rs(this.indexes_,i=>{if(i===Vt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new et(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;class A{static get EMPTY_NODE(){return yn||(yn=new A(new be(Vr),null,et.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Dc(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yn:n}}getChild(e){const n=k(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?yn:this.priorityNode_;return new A(i,o,r)}}updateChild(e,n){const s=k(e);if(s===null)return n;{b(k(e)!==".priority"||mt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Z(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pc(this.getPriority().val())+":"),this.forEachChild(ne,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ic(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ts?-1:0}withIndex(e){if(e===Xt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ne),i=n.getIterator(ne);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xt?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W_ extends A{constructor(){super(new be(Vr),A.EMPTY_NODE,et.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const ts=new W_;Object.defineProperties(F,{MIN:{value:new F(tn,A.EMPTY_NODE)},MAX:{value:new F(Ft,ts)}});Ac.__EMPTY_NODE=A.EMPTY_NODE;ae.__childrenNodeConstructor=A;O_(ts);k_(ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=!0;function ue(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ae(n,ue(e))}if(!(t instanceof Array)&&H_){const n=[];let s=!1;if(Ie(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const r=ks(n,D_,o=>o.name,Vr);if(s){const o=ks(n,ne.getCompare());return new A(r,ue(e),new et({".priority":o},{".priority":ne}))}else return new A(r,ue(e),et.Default)}else{let n=A.EMPTY_NODE;return Ie(t,(s,i)=>{if(rt(t,s)&&s.substring(0,1)!=="."){const r=ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ue(e))}}M_(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends si{constructor(e){super(),this.indexPath_=e,b(!L(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ln(e.name,n.name):r}makePost(e,n){const s=ue(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,ts);return new F(Ft,e)}toString(){return xc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_ extends si{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ln(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ue(e);return new F(n,s)}toString(){return".value"}}const $_=new V_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){return{type:"value",snapshotNode:t}}function nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $n(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function j_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange($n(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(nn(n,s)):o.trackChildChange(jn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,r)=>{n.hasChild(i)||s.trackChildChange($n(i,r))}),n.isLeafNode()||n.forEachChild(ne,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(jn(i,r,o))}else s.trackChildChange(nn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.indexedFilter_=new $r(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gn.getStartPost_(e),this.endPost_=Gn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return n.forEachChild(ne,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=A.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(p,g)=>h(g,p)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const g=p==null?1:o(p,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(jn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange($n(n,h));const x=l.updateImmediateChild(n,A.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(nn(p.name,p.node)),x.updateImmediateChild(p.name,p.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange($n(c.name,c.node)),r.trackChildChange(nn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ft}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new jr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function K_(t){return t.loadsAllData()?new $r(t.getIndex()):t.hasLimit()?new G_(t):new Gn(t)}function El(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===$_?n="$value":t.index_===Xt?n="$key":(b(t.index_ instanceof U_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Ic{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=es("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Fs.getListenId_(e,s),l={};this.listens_[o]=l;const a=El(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),en(this.listens_,o)===l){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const s=Fs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=El(e._queryParams),s=e._path.toString(),i=new ti;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+md(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wn(l.responseText)}catch{we("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&we("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){return{value:null,children:new Map}}function Fc(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=k(e);t.children.has(s)||t.children.set(s,Ls());const i=t.children.get(s);e=Z(e),Fc(i,e,n)}}function rr(t,e,n){t.value!==null?n(e,t.value):q_(t,(s,i)=>{const r=new z(e.toString()+"/"+s);rr(i,r,n)})}function q_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=10*1e3,Q_=30*1e3,J_=5*60*1e3;class X_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y_(e);const s=wl+(Q_-wl)*Math.random();Rn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ie(e,(i,r)=>{r>0&&rt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Rn(this.reportStats_.bind(this),Math.floor(Math.random()*2*J_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Oe||(Oe={}));function Lc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Oe.ACK_USER_WRITE,this.source=Lc()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new z(e));return new Bs(U(),n,this.revert)}}else return b(k(this.path)===e,"operationForChild called for unrelated child."),new Bs(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.source=e,this.path=n,this.type=Oe.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new Kn(this.source,U()):new Kn(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Oe.OVERWRITE}operationForChild(e){return L(this.path)?new Lt(this.source,U(),this.snap.getImmediateChild(e)):new Lt(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Oe.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new z(e));return n.isEmpty()?null:n.value?new Lt(this.source,U(),n.value):new zn(this.source,U(),n)}else return b(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zn(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=k(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(j_(o.childName,o.snapshotNode))}),vn(t,i,"child_removed",e,s,n),vn(t,i,"child_added",e,s,n),vn(t,i,"child_moved",r,s,n),vn(t,i,"child_changed",e,s,n),vn(t,i,"value",e,s,n),i}function vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>ng(t,l,a)),o.forEach(l=>{const a=tg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function tg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ng(t,e,n){if(e.childName==null||n.childName==null)throw rn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){return{eventCache:t,serverCache:e}}function An(t,e,n,s){return ii(new yt(e,n,s),t.serverCache)}function Bc(t,e,n,s){return ii(t.eventCache,new yt(e,n,s))}function Ws(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;const sg=()=>(ki||(ki=new be(Vp)),ki);class ee{static fromObject(e){let n=new ee(null);return Ie(e,(s,i)=>{n=n.set(new z(s),i)}),n}constructor(e,n=sg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(L(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Z(e),n);return r!=null?{path:oe(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=k(e),s=this.children.get(n);return s!==null?s.subtree(Z(e)):new ee(null)}}set(e,n){if(L(e))return new ee(n,this.children);{const s=k(e),r=(this.children.get(s)||new ee(null)).set(Z(e),n),o=this.children.insert(s,r);return new ee(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=k(e),s=this.children.get(n);if(s){const i=s.remove(Z(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ee(null):new ee(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=k(e),s=this.children.get(n);return s?s.get(Z(e)):null}}setTree(e,n){if(L(e))return n;{const s=k(e),r=(this.children.get(s)||new ee(null)).setTree(Z(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ee(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(oe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,U(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(Z(e),oe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,U(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(Z(e),oe(n,i),s):new ee(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(oe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.writeTree_=e}static empty(){return new Fe(new ee(null))}}function Pn(t,e,n){if(L(e))return new Fe(new ee(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ve(i,e);return r=r.updateChild(o,n),new Fe(t.writeTree_.set(i,r))}else{const i=new ee(n),r=t.writeTree_.setTree(e,i);return new Fe(r)}}}function Il(t,e,n){let s=t;return Ie(n,(i,r)=>{s=Pn(s,oe(e,i),r)}),s}function Sl(t,e){if(L(e))return Fe.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new Fe(n)}}function or(t,e){return Ht(t,e)!=null}function Ht(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ve(n.path,e)):null}function Tl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function pt(t,e){if(L(e))return t;{const n=Ht(t,e);return n!=null?new Fe(new ee(n)):new Fe(t.writeTree_.subtree(e))}}function lr(t){return t.writeTree_.isEmpty()}function sn(t,e){return Wc(U(),t.writeTree_,e)}function Wc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Wc(oe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(oe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){return $c(e,t)}function ig(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Pn(t.visibleWrites,e,n)),t.lastWriteId=s}function rg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function og(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&lg(l,s.path)?i=!1:De(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return ag(t),!0;if(s.snap)t.visibleWrites=Sl(t.visibleWrites,s.path);else{const l=s.children;Ie(l,a=>{t.visibleWrites=Sl(t.visibleWrites,oe(s.path,a))})}return!0}else return!1}function lg(t,e){if(t.snap)return De(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&De(oe(t.path,n),e))return!0;return!1}function ag(t){t.visibleWrites=Hc(t.allWrites,cg,U()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cg(t){return t.visible}function Hc(t,e,n){let s=Fe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)De(n,o)?(l=ve(n,o),s=Pn(s,l,r.snap)):De(o,n)&&(l=ve(o,n),s=Pn(s,U(),r.snap.getChild(l)));else if(r.children){if(De(n,o))l=ve(n,o),s=Il(s,l,r.children);else if(De(o,n))if(l=ve(o,n),L(l))s=Il(s,U(),r.children);else{const a=en(r.children,k(l));if(a){const c=a.getChild(Z(l));s=Pn(s,U(),c)}}}else throw rn("WriteRecord should have .snap or .children")}}return s}function Uc(t,e,n,s,i){if(!s&&!i){const r=Ht(t.visibleWrites,e);if(r!=null)return r;{const o=pt(t.visibleWrites,e);if(lr(o))return n;if(n==null&&!or(o,U()))return null;{const l=n||A.EMPTY_NODE;return sn(o,l)}}}else{const r=pt(t.visibleWrites,e);if(!i&&lr(r))return n;if(!i&&n==null&&!or(r,U()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(De(c.path,e)||De(e,c.path))},l=Hc(t.allWrites,o,e),a=n||A.EMPTY_NODE;return sn(l,a)}}}function ug(t,e,n){let s=A.EMPTY_NODE;const i=Ht(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=pt(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=sn(pt(r,new z(o)),l);s=s.updateImmediateChild(o,a)}),Tl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=pt(t.visibleWrites,e);return Tl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function hg(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=oe(e,n);if(or(t.visibleWrites,r))return null;{const o=pt(t.visibleWrites,r);return lr(o)?i.getChild(n):sn(o,i.getChild(n))}}function fg(t,e,n,s){const i=oe(e,n),r=Ht(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=pt(t.visibleWrites,i);return sn(o,s.getNode().getImmediateChild(n))}else return null}function dg(t,e){return Ht(t.visibleWrites,e)}function pg(t,e,n,s,i,r,o){let l;const a=pt(t.visibleWrites,e),c=Ht(a,U());if(c!=null)l=c;else if(n!=null)l=sn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),p=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=p.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=p.getNext();return u}else return[]}function _g(){return{visibleWrites:Fe.empty(),allWrites:[],lastWriteId:-1}}function Hs(t,e,n,s){return Uc(t.writeTree,t.treePath,e,n,s)}function zr(t,e){return ug(t.writeTree,t.treePath,e)}function xl(t,e,n,s){return hg(t.writeTree,t.treePath,e,n,s)}function Us(t,e){return dg(t.writeTree,oe(t.treePath,e))}function gg(t,e,n,s,i,r){return pg(t.writeTree,t.treePath,e,n,s,i,r)}function qr(t,e,n){return fg(t.writeTree,t.treePath,e,n)}function Vc(t,e){return $c(oe(t.treePath,e),t.writeTree)}function $c(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,jn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,$n(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,nn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,jn(s,e.snapshotNode,i.oldSnap));else throw rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const jc=new yg;class Yr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bt(this.viewCache_),r=gg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){return{filter:t}}function Cg(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Eg(t,e,n,s,i){const r=new mg;let o,l;if(n.type===Oe.OVERWRITE){const c=n;c.source.fromUser?o=ar(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Vs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Oe.MERGE){const c=n;c.source.fromUser?o=wg(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=cr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Oe.ACK_USER_WRITE){const c=n;c.revert?o=Tg(t,e,c.path,s,i,r):o=Ig(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Oe.LISTEN_COMPLETE)o=Sg(t,e,n.path,s,r);else throw rn("Unknown operation type: "+n.type);const a=r.getChanges();return bg(e,o,a),{viewCache:o,changes:a}}function bg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ws(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(kc(Ws(e)))}}function Gc(t,e,n,s,i,r){const o=e.eventCache;if(Us(s,n)!=null)return e;{let l,a;if(L(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bt(e),u=c instanceof A?c:A.EMPTY_NODE,h=zr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Hs(s,Bt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(n);if(c===".priority"){b(mt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=xl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Z(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const p=xl(s,n,o.getNode(),a);p!=null?h=o.getNode().getImmediateChild(c).updateChild(u,p):h=o.getNode().getImmediateChild(c)}else h=qr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return An(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Vs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=k(n);if(!a.isCompleteForPath(n)&&mt(n)>1)return e;const E=Z(n),H=a.getNode().getImmediateChild(g).updateChild(E,s);g===".priority"?c=u.updatePriority(a.getNode(),H):c=u.updateChild(a.getNode(),g,H,E,jc,null)}const h=Bc(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),p=new Yr(i,h,r);return Gc(t,h,n,i,p,l)}function ar(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Yr(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=An(e,c,!0,t.filter.filtersNodes());else{const h=k(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=An(e,c,l.isFullyInitialized(),l.isFiltered());else{const p=Z(n),g=l.getNode().getImmediateChild(h);let E;if(L(p))E=s;else{const x=u.getCompleteChild(h);x!=null?Tc(p)===".priority"&&x.getChild(Nc(p)).isEmpty()?E=x:E=x.updateChild(p,s):E=A.EMPTY_NODE}if(g.equals(E))a=e;else{const x=t.filter.updateChild(l.getNode(),h,E,p,u,o);a=An(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Nl(t,e){return t.eventCache.isCompleteForChild(e)}function wg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=oe(n,a);Nl(e,k(u))&&(l=ar(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=oe(n,a);Nl(e,k(u))||(l=ar(t,l,u,c,i,r,o))}),l}function Rl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function cr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new ee(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),E=Rl(t,g,p);a=Vs(t,a,new z(h),E,i,r,o,l)}}),c.children.inorderTraversal((h,p)=>{const g=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!g){const E=e.serverCache.getNode().getImmediateChild(h),x=Rl(t,E,p);a=Vs(t,a,new z(h),x,i,r,o,l)}}),a}function Ig(t,e,n,s,i,r,o){if(Us(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Vs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new ee(null);return a.getNode().forEachChild(Xt,(u,h)=>{c=c.set(new z(u),h)}),cr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ee(null);return s.foreach((u,h)=>{const p=oe(n,u);a.isCompleteForPath(p)&&(c=c.set(u,a.getNode().getChild(p)))}),cr(t,e,n,c,i,r,l,o)}}function Sg(t,e,n,s,i){const r=e.serverCache,o=Bc(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Gc(t,o,n,s,jc,i)}function Tg(t,e,n,s,i,r){let o;if(Us(s,n)!=null)return e;{const l=new Yr(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||k(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Hs(s,Bt(e));else{const h=e.serverCache.getNode();b(h instanceof A,"serverChildren would be complete if leaf node"),u=zr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=k(n);let h=qr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Z(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,A.EMPTY_NODE,Z(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hs(s,Bt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Us(s,U())!=null,An(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new $r(s.getIndex()),r=K_(s);this.processor_=vg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(A.EMPTY_NODE,l.getNode(),null),u=new yt(a,o.isFullyInitialized(),i.filtersNodes()),h=new yt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ii(h,u),this.eventGenerator_=new Z_(this.query_)}get query(){return this.query_}}function Ng(t){return t.viewCache_.serverCache.getNode()}function Rg(t){return Ws(t.viewCache_)}function Ag(t,e){const n=Bt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(k(e)).isEmpty())?n.getChild(e):null}function Al(t){return t.eventRegistrations_.length===0}function Pg(t,e){t.eventRegistrations_.push(e)}function Pl(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Dl(t,e,n,s){e.type===Oe.MERGE&&e.source.queryId!==null&&(b(Bt(t.viewCache_),"We should always have a full cache before handling merges"),b(Ws(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Eg(t.processor_,i,e,n,s);return Cg(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Kc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Dg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(r,o)=>{s.push(nn(r,o))}),n.isFullyInitialized()&&s.push(kc(n.getNode())),Kc(t,s,n.getNode(),e)}function Kc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return eg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;class zc{constructor(){this.views=new Map}}function Og(t){b(!$s,"__referenceConstructor has already been defined"),$s=t}function Mg(){return b($s,"Reference.ts has not been loaded"),$s}function kg(t){return t.views.size===0}function Qr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Dl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Dl(o,e,n,s));return r}}function qc(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Hs(n,i?s:null),a=!1;l?a=!0:s instanceof A?(l=zr(n,s),a=!1):(l=A.EMPTY_NODE,a=!1);const c=ii(new yt(l,a,!1),new yt(s,i,!1));return new xg(e,c)}return o}function Fg(t,e,n,s,i,r){const o=qc(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Pg(o,n),Dg(o,n)}function Lg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=vt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Pl(c,n,s)),Al(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Pl(a,n,s)),Al(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!vt(t)&&r.push(new(Mg())(e._repo,e._path)),{removed:r,events:o}}function Yc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _t(t,e){let n=null;for(const s of t.views.values())n=n||Ag(s,e);return n}function Qc(t,e){if(e._queryParams.loadsAllData())return oi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Jc(t,e){return Qc(t,e)!=null}function vt(t){return oi(t)!=null}function oi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js;function Bg(t){b(!js,"__referenceConstructor has already been defined"),js=t}function Wg(){return b(js,"Reference.ts has not been loaded"),js}let Hg=1;class Ol{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=_g(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xc(t,e,n,s,i){return ig(t.pendingWriteTree_,e,n,s,i),i?ss(t,new Lt(Lc(),e,n)):[]}function Dt(t,e,n=!1){const s=rg(t.pendingWriteTree_,e);if(og(t.pendingWriteTree_,e)){let r=new ee(null);return s.snap!=null?r=r.set(U(),!0):Ie(s.children,o=>{r=r.set(new z(o),!0)}),ss(t,new Bs(s.path,r,n))}else return[]}function ns(t,e,n){return ss(t,new Lt(Gr(),e,n))}function Ug(t,e,n){const s=ee.fromObject(n);return ss(t,new zn(Gr(),e,s))}function Vg(t,e){return ss(t,new Kn(Gr(),e))}function $g(t,e,n){const s=Xr(t,n);if(s){const i=Zr(s),r=i.path,o=i.queryId,l=ve(r,e),a=new Kn(Kr(o),l);return eo(t,r,a)}else return[]}function Gs(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Jc(o,e))){const a=Lg(o,e,n,s);kg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(p,g)=>vt(g));if(u&&!h){const p=t.syncPointTree_.subtree(r);if(!p.isEmpty()){const g=Kg(p);for(let E=0;E<g.length;++E){const x=g[E],H=x.query,B=nu(t,x);t.listenProvider_.startListening(Dn(H),qn(t,H),B.hashFn,B.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Dn(e),null):c.forEach(p=>{const g=t.queryToTagMap.get(li(p));t.listenProvider_.stopListening(Dn(p),g)}))}zg(t,c)}return l}function Zc(t,e,n,s){const i=Xr(t,s);if(i!=null){const r=Zr(i),o=r.path,l=r.queryId,a=ve(o,e),c=new Lt(Kr(l),a,n);return eo(t,o,c)}else return[]}function jg(t,e,n,s){const i=Xr(t,s);if(i){const r=Zr(i),o=r.path,l=r.queryId,a=ve(o,e),c=ee.fromObject(n),u=new zn(Kr(l),a,c);return eo(t,o,u)}else return[]}function ur(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,g)=>{const E=ve(p,i);r=r||_t(g,E),o=o||vt(g)});let l=t.syncPointTree_.get(i);l?(o=o||vt(l),r=r||_t(l,U())):(l=new zc,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,E)=>{const x=_t(E,U());x&&(r=r.updateImmediateChild(g,x))}));const c=Jc(l,e);if(!c&&!e._queryParams.loadsAllData()){const p=li(e);b(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const g=qg();t.queryToTagMap.set(p,g),t.tagToQueryMap.set(g,p)}const u=ri(t.pendingWriteTree_,i);let h=Fg(l,e,n,u,r,a);if(!c&&!o&&!s){const p=Qc(l,e);h=h.concat(Yg(t,e,p))}return h}function Jr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ve(o,e),c=_t(l,a);if(c)return c});return Uc(i,e,r,n,!0)}function Gg(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ve(c,n);s=s||_t(u,h)});let i=t.syncPointTree_.get(n);i?s=s||_t(i,U()):(i=new zc,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new yt(s,!0,!1):null,l=ri(t.pendingWriteTree_,e._path),a=qc(i,e,l,r?o.getNode():A.EMPTY_NODE,r);return Rg(a)}function ss(t,e){return eu(e,t.syncPointTree_,null,ri(t.pendingWriteTree_,U()))}function eu(t,e,n,s){if(L(t.path))return tu(t,e,n,s);{const i=e.get(U());n==null&&i!=null&&(n=_t(i,U()));let r=[];const o=k(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Vc(s,o);r=r.concat(eu(l,a,c,u))}return i&&(r=r.concat(Qr(i,t,s,n))),r}}function tu(t,e,n,s){const i=e.get(U());n==null&&i!=null&&(n=_t(i,U()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Vc(s,o),u=t.operationForChild(o);u&&(r=r.concat(tu(u,l,a,c)))}),i&&(r=r.concat(Qr(i,t,s,n))),r}function nu(t,e){const n=e.query,s=qn(t,n);return{hashFn:()=>(Ng(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$g(t,n._path,s):Vg(t,n._path);{const r=Gp(i,n);return Gs(t,n,null,r)}}}}function qn(t,e){const n=li(e);return t.queryToTagMap.get(n)}function li(t){return t._path.toString()+"$"+t._queryIdentifier}function Xr(t,e){return t.tagToQueryMap.get(e)}function Zr(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new z(t.substr(0,e))}}function eo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=ri(t.pendingWriteTree_,e);return Qr(s,n,i,null)}function Kg(t){return t.fold((e,n,s)=>{if(n&&vt(n))return[oi(n)];{let i=[];return n&&(i=Yc(n)),Ie(s,(r,o)=>{i=i.concat(o)}),i}})}function Dn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Wg())(t._repo,t._path):t}function zg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=li(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function qg(){return Hg++}function Yg(t,e,n){const s=e._path,i=qn(t,e),r=nu(t,n),o=t.listenProvider_.startListening(Dn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!vt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&vt(u))return[oi(u).query];{let p=[];return u&&(p=p.concat(Yc(u).map(g=>g.query))),Ie(h,(g,E)=>{p=p.concat(E)}),p}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Dn(u),qn(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new to(n)}node(){return this.node_}}class no{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new no(this.syncTree_,n)}node(){return Jr(this.syncTree_,this.path_)}}const Qg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ml=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Jg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Xg(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Jg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Xg=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Zg=function(t,e,n,s){return so(e,new no(n,t),s)},su=function(t,e,n){return so(t,new to(e),n)};function so(t,e,n){const s=t.getPriority().val(),i=Ml(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ml(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ae(l,ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ae(i))),o.forEachChild(ne,(l,a)=>{const c=so(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ro(t,e){let n=e instanceof z?e:new z(e),s=t,i=k(n);for(;i!==null;){const r=en(s.node.children,i)||{children:{},childCount:0};s=new io(i,s,r),n=Z(n),i=k(n)}return s}function cn(t){return t.node.value}function iu(t,e){t.node.value=e,hr(t)}function ru(t){return t.node.childCount>0}function em(t){return cn(t)===void 0&&!ru(t)}function ai(t,e){Ie(t.node.children,(n,s)=>{e(new io(n,t,s))})}function ou(t,e,n,s){n&&e(t),ai(t,i=>{ou(i,e,!0)})}function tm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function is(t){return new z(t.parent===null?t.name:is(t.parent)+"/"+t.name)}function hr(t){t.parent!==null&&nm(t.parent,t.name,t)}function nm(t,e,n){const s=em(n),i=rt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,hr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,hr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=/[\[\].#$\/\u0000-\u001F\u007F]/,im=/[\[\].#$\u0000-\u001F\u007F]/,Fi=10*1024*1024,lu=function(t){return typeof t=="string"&&t.length!==0&&!sm.test(t)},au=function(t){return typeof t=="string"&&t.length!==0&&!im.test(t)},rm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),au(t)},om=function(t,e,n,s){oo(Mr(t,"value"),e,n)},oo=function(t,e,n){const s=n instanceof z?new I_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+At(s));if(typeof e=="function")throw new Error(t+"contains a function "+At(s)+" with contents = "+e.toString());if(rc(e))throw new Error(t+"contains "+e.toString()+" "+At(s));if(typeof e=="string"&&e.length>Fi/3&&ni(e)>Fi)throw new Error(t+"contains a string greater than "+Fi+" utf8 bytes "+At(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ie(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lu(o)))throw new Error(t+" contains an invalid key ("+o+") "+At(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);S_(s,o),oo(t,l,s),T_(s)}),i&&r)throw new Error(t+' contains ".value" child '+At(s)+" in addition to actual children.")}},cu=function(t,e,n,s){if(!au(n))throw new Error(Mr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cu(t,e,n)},am=function(t,e){if(k(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rm(n))throw new Error(Mr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Hr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function uu(t,e,n){lo(t,n),hu(t,s=>Hr(s,e))}function Ye(t,e,n){lo(t,n),hu(t,s=>De(s,e)||De(e,s))}function hu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(hm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Nn&&fe("event: "+n.toString()),an(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="repo_interrupt",dm=25;class pm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new um,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ls(),this.transactionQueueTree_=new io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _m(t,e,n){if(t.stats_=Br(t.repoInfo_),t.forceRestClient_||Yp())t.server_=new Fs(t.repoInfo_,(s,i,r,o)=>{kl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new tt(t.repoInfo_,e,(s,i,r,o)=>{kl(t,s,i,r,o)},s=>{Fl(t,s)},s=>{mm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=e_(t.repoInfo_,()=>new X_(t.stats_,t.server_)),t.infoData_=new z_,t.infoSyncTree_=new Ol({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ns(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),co(t,"connected",!1),t.serverSyncTree_=new Ol({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Ye(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gm(t){const n=t.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ao(t){return Qg({timestamp:gm(t)})}function kl(t,e,n,s,i){t.dataUpdateCount++;const r=new z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Rs(n,c=>ue(c));o=jg(t.serverSyncTree_,r,a,i)}else{const a=ue(n);o=Zc(t.serverSyncTree_,r,a,i)}else if(s){const a=Rs(n,c=>ue(c));o=Ug(t.serverSyncTree_,r,a)}else{const a=ue(n);o=ns(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ui(t,r)),Ye(t.eventQueue_,l,o)}function Fl(t,e){co(t,"connected",e),e===!1&&Cm(t)}function mm(t,e){Ie(e,(n,s)=>{co(t,n,s)})}function co(t,e,n){const s=new z("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(s,i);const r=ns(t.infoSyncTree_,s,i);Ye(t.eventQueue_,s,r)}function fu(t){return t.nextWriteId_++}function ym(t,e,n){const s=Gg(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ue(i).withIndex(e._queryParams.getIndex());ur(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ns(t.serverSyncTree_,e._path,r);else{const l=qn(t.serverSyncTree_,e);o=Zc(t.serverSyncTree_,e._path,r,l)}return Ye(t.eventQueue_,e._path,o),Gs(t.serverSyncTree_,e,n,null,!0),r},i=>(ci(t,"get for query "+re(e)+" failed: "+i),Promise.reject(new Error(i))))}function vm(t,e,n,s,i){ci(t,"set",{path:e.toString(),value:n,priority:s});const r=ao(t),o=ue(n,s),l=Jr(t.serverSyncTree_,e),a=su(o,l,r),c=fu(t),u=Xc(t.serverSyncTree_,e,a,c,!0);lo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(p,g)=>{const E=p==="ok";E||we("set at "+e+" failed: "+p);const x=Dt(t.serverSyncTree_,c,!E);Ye(t.eventQueue_,e,x),Im(t,i,p,g)});const h=mu(t,e);ui(t,h),Ye(t.eventQueue_,h,[])}function Cm(t){ci(t,"onDisconnectEvents");const e=ao(t),n=Ls();rr(t.onDisconnect_,U(),(i,r)=>{const o=Zg(i,r,t.serverSyncTree_,e);Fc(n,i,o)});let s=[];rr(n,U(),(i,r)=>{s=s.concat(ns(t.serverSyncTree_,i,r));const o=mu(t,i);ui(t,o)}),t.onDisconnect_=Ls(),Ye(t.eventQueue_,U(),s)}function Em(t,e,n){let s;k(e._path)===".info"?s=ur(t.infoSyncTree_,e,n):s=ur(t.serverSyncTree_,e,n),uu(t.eventQueue_,e._path,s)}function bm(t,e,n){let s;k(e._path)===".info"?s=Gs(t.infoSyncTree_,e,n):s=Gs(t.serverSyncTree_,e,n),uu(t.eventQueue_,e._path,s)}function wm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fm)}function ci(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),fe(n,...e)}function Im(t,e,n,s){e&&an(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function du(t,e,n){return Jr(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function uo(t,e=t.transactionQueueTree_){if(e||hi(t,e),cn(e)){const n=_u(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Sm(t,is(e),n)}else ru(e)&&ai(e,n=>{uo(t,n)})}function Sm(t,e,n){const s=n.map(c=>c.currentWriteId),i=du(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ve(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ci(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Dt(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();hi(t,ro(t.transactionQueueTree_,e)),uo(t,t.transactionQueueTree_),Ye(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)an(h[p])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{we("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ui(t,e)}},o)}function ui(t,e){const n=pu(t,e),s=is(n),i=_u(t,n);return Tm(t,i,s),s}function Tm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ve(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=dm)u=!0,h="maxretry",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else{const p=du(t,a.path,o);a.currentInputSnapshot=p;const g=e[l].update(p.val());if(g!==void 0){oo("transaction failed: Data returned ",g,a.path);let E=ue(g);typeof g=="object"&&g!=null&&rt(g,".priority")||(E=E.updatePriority(p.getPriority()));const H=a.currentWriteId,B=ao(t),G=su(E,p,B);a.currentOutputSnapshotRaw=E,a.currentOutputSnapshotResolved=G,a.currentWriteId=fu(t),o.splice(o.indexOf(H),1),i=i.concat(Xc(t.serverSyncTree_,a.path,G,a.currentWriteId,a.applyLocally)),i=i.concat(Dt(t.serverSyncTree_,H,!0))}else u=!0,h="nodata",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0))}Ye(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(p){setTimeout(p,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}hi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)an(s[l]);uo(t,t.transactionQueueTree_)}function pu(t,e){let n,s=t.transactionQueueTree_;for(n=k(e);n!==null&&cn(s)===void 0;)s=ro(s,n),e=Z(e),n=k(e);return s}function _u(t,e){const n=[];return gu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function gu(t,e,n){const s=cn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ai(e,i=>{gu(t,i,n)})}function hi(t,e){const n=cn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,iu(e,n.length>0?n:void 0)}ai(e,s=>{hi(t,s)})}function mu(t,e){const n=is(pu(t,e)),s=ro(t.transactionQueueTree_,e);return tm(s,i=>{Li(t,i)}),Li(t,s),ou(s,i=>{Li(t,i)}),n}function Li(t,e){const n=cn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?iu(e,void 0):n.length=r+1,Ye(t.eventQueue_,is(e),i);for(let o=0;o<s.length;o++)an(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):we(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ll=function(t,e){const n=Rm(t),s=n.namespace;n.domain==="firebase.com"&&st(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&st("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new z(n.pathString)}},Rm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=xm(t.substring(u,h)));const p=Nm(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class Pm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ho{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:Tc(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=bl(this._queryParams),n=Fr(e);return n==="{}"?"default":n}get _queryObject(){return bl(this._queryParams)}isEqual(e){if(e=on(e),!(e instanceof ho))return!1;const n=this._repo===e._repo,s=Hr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+w_(this._path)}}class ot extends ho{constructor(e,n){super(e,n,new jr,!1)}get parent(){const e=Nc(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new z(e),s=fr(this.ref,e);return new Yn(this._node.getChild(n),s,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Yn(i,fr(this.ref,s),ne)))}hasChild(e){const n=new z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dm(t,e){return t=on(t),t._checkNotDeleted("ref"),fr(t._root,e)}function fr(t,e){return t=on(t),k(t._path)===null?lm("child","path",e):cu("child","path",e),new ot(t._repo,oe(t._path,e))}function Om(t,e){t=on(t),am("set",t._path),om("set",e,t._path);const n=new ti;return vm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Mm(t){t=on(t);const e=new yu(()=>{}),n=new fi(e);return ym(t._repo,t,n).then(s=>new Yn(s,new ot(t._repo,t._path),t._queryParams.getIndex()))}class fi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Am("value",this,new Yn(e.snapshotNode,new ot(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pm(this,e,n):null}matches(e){return e instanceof fi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function km(t,e,n,s,i){const r=new yu(n,void 0),o=new fi(r);return Em(t._repo,t,o),()=>bm(t._repo,t,o)}function Fm(t,e,n,s){return km(t,"value",e)}Og(ot);Bg(ot);/**
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
 */const Lm="FIREBASE_DATABASE_EMULATOR_HOST",dr={};let Bm=!1;function Wm(t,e,n,s){t.repoInfo_=new mc(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Hm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||st("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ll(r,i),l=o.repoInfo,a;typeof process<"u"&&il&&(a=il[Lm]),a?(r=`http://${a}?ns=${l.namespace}`,o=Ll(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new Jp(t.name,t.options,e);cm("Invalid Firebase Database URL",o),L(o.path)||st("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Vm(l,t,c,new Qp(t,n));return new $m(u,t)}function Um(t,e){const n=dr[e];(!n||n[t.key]!==t)&&st(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wm(t),delete n[t.key]}function Vm(t,e,n,s){let i=dr[e.name];i||(i={},dr[e.name]=i);let r=i[t.toURLString()];return r&&st("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new pm(t,Bm,n,s),i[t.toURLString()]=r,r}class $m{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_m(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Um(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&st("Cannot call "+e+" on a deleted database.")}}function jm(t=Ep(),e){const n=gp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=rd("database");s&&Gm(n,...s)}return n}function Gm(t,e,n,s={}){t=on(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&As(s,r.repoInfo_.emulatorOptions))return;st("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&st('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Es(Es.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:od(s.mockUserToken,t.app.options.projectId);o=new Es(l)}Wm(r,i,s,o)}/**
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
 */function Km(t){Mp(Cp),Ds(new Hn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Hm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Qt(rl,ol,t),Qt(rl,ol,"esm2017")}tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Km();var zm={apiKey:"AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",authDomain:"iamwaitingforyou-73.firebaseapp.com",databaseURL:"https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwaitingforyou-73",storageBucket:"iamwaitingforyou-73.firebasestorage.app",messagingSenderId:"576527778879",appId:"1:576527778879:web:059f06122df2b01d9a248a",measurementId:"G-62LMJM4Z24"};const qm=Za(zm),Ym=jm(qm),Qm={style:{"font-size":"18px",background:"orange",margin:"16px",padding:"5px"}},Jm={__name:"App",setup(t){const e=fs(""),n=fs(""),s=Dm(Ym,"guest"),i=fs(),r=fs("");function o(c){Om(s,{text:c}).then(()=>{console.log("Данные успешно записаны!"),i.value="Записано!"}).catch(u=>{console.error("Ошибка записи данных: ",u),i.value="Ошибка"})}Fm(s,c=>{r.value=c.val(),console.log("Данные пользователя обновлены:",r.value)});function l(){o(e.value)}function a(){Mm(s).then(c=>{if(c.exists()){const u=c.val();n.value=u,console.log("Данные пользователя:",u)}else console.log("Данные не найдены")}).catch(c=>{console.error("Ошибка чтения данных: ",c)})}return(c,u)=>(rf(),af(Ge,null,[u[3]||(u[3]=je("div",{class:"about"},[je("h2",null,"Пишем/Читаем")],-1)),dh(je("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h)},null,512),[[$f,e.value]]),je("button",{onClick:u[1]||(u[1]=h=>l())}," Сохранить"),je("span",null,ms(i.value),1),je("h3",null,ms(n.value),1),je("button",{onClick:u[2]||(u[2]=h=>a())}," Читать"),je("div",Qm,ms(r.value),1)],64))}},Xm=Kf(Jm);Xm.mount("#app");
