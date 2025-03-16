(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ar(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},tn=[],et=()=>{},sh=()=>!1,ii=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Or=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ih=Object.prototype.hasOwnProperty,q=(t,e)=>ih.call(t,e),D=Array.isArray,nn=t=>ri(t)==="[object Map]",sa=t=>ri(t)==="[object Set]",M=t=>typeof t=="function",he=t=>typeof t=="string",Rt=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",ia=t=>(le(t)||M(t))&&M(t.then)&&M(t.catch),ra=Object.prototype.toString,ri=t=>ra.call(t),rh=t=>ri(t).slice(8,-1),oa=t=>ri(t)==="[object Object]",Dr=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nn=Ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oh=/-(\w)/g,Le=oi(t=>t.replace(oh,(e,n)=>n?n.toUpperCase():"")),lh=/\B([A-Z])/g,zt=oi(t=>t.replace(lh,"-$1").toLowerCase()),li=oi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ni=oi(t=>t?`on${li(t)}`:""),vt=(t,e)=>!Object.is(t,e),Ss=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},la=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Xi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mo;const ai=()=>Mo||(Mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=he(s)?hh(s):Mr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(he(t)||le(t))return t}const ah=/;(?![^(]*\))/g,ch=/:([^]+)/,uh=/\/\*[^]*?\*\//g;function hh(t){const e={};return t.replace(uh,"").split(ah).forEach(n=>{if(n){const s=n.split(ch);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kr(t){let e="";if(he(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=kr(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dh=Ar(fh);function aa(t){return!!t||t===""}const ca=t=>!!(t&&t.__v_isRef===!0),Is=t=>he(t)?t:t==null?"":D(t)||le(t)&&(t.toString===ra||!M(t.toString))?ca(t)?Is(t.value):JSON.stringify(t,ua,2):String(t),ua=(t,e)=>ca(e)?ua(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ai(s,r)+" =>"]=i,n),{})}:sa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ai(n))}:Rt(e)?Ai(e):le(e)&&!D(e)&&!oa(e)?String(e):e,Ai=(t,e="")=>{var n;return Rt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class ha{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function fa(t){return new ha(t)}function da(){return Ee}function ph(t,e=!1){Ee&&Ee.cleanups.push(t)}let ne;const Pi=new WeakSet;class pa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pi.has(this)&&(Pi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ga(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ko(this),ma(this);const e=ne,n=$e;ne=this,$e=!0;try{return this.fn()}finally{ya(this),ne=e,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Br(e);this.deps=this.depsTail=void 0,ko(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zi(this)&&this.run()}get dirty(){return Zi(this)}}let _a=0,An,Pn;function ga(t,e=!1){if(t.flags|=8,e){t.next=Pn,Pn=t;return}t.next=An,An=t}function Fr(){_a++}function Lr(){if(--_a>0)return;if(Pn){let e=Pn;for(Pn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;An;){let e=An;for(An=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ma(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ya(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Br(s),_h(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Zi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(va(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function va(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===jn))return;t.globalVersion=jn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Zi(t)){t.flags&=-3;return}const n=ne,s=$e;ne=t,$e=!0;try{ma(t);const i=t.fn(t._value);(e.version===0||vt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ne=n,$e=s,ya(t),t.flags&=-3}}function Br(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Br(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _h(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $e=!0;const Ca=[];function Nt(){Ca.push($e),$e=!1}function At(){const t=Ca.pop();$e=t===void 0?!0:t}function ko(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let jn=0;class gh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!$e||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new gh(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,ba(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(e){this.version++,jn++,this.notify(e)}notify(e){Fr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Lr()}}}function ba(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ba(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Os=new WeakMap,Ht=Symbol(""),er=Symbol(""),Gn=Symbol("");function ve(t,e,n){if($e&&ne){let s=Os.get(t);s||Os.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Wr),i.map=s,i.key=n),i.track()}}function ot(t,e,n,s,i,r){const o=Os.get(t);if(!o){jn++;return}const l=a=>{a&&a.trigger()};if(Fr(),e==="clear")o.forEach(l);else{const a=D(t),c=a&&Dr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Gn||!Rt(d)&&d>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Gn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Ht)),nn(t)&&l(o.get(er)));break;case"delete":a||(l(o.get(Ht)),nn(t)&&l(o.get(er)));break;case"set":nn(t)&&l(o.get(Ht));break}}Lr()}function mh(t,e){const n=Os.get(t);return n&&n.get(e)}function Yt(t){const e=j(t);return e===t?e:(ve(e,"iterate",Gn),je(t)?e:e.map(we))}function Hr(t){return ve(t=j(t),"iterate",Gn),t}const yh={__proto__:null,[Symbol.iterator](){return Oi(this,Symbol.iterator,we)},concat(...t){return Yt(this).concat(...t.map(e=>D(e)?Yt(e):e))},entries(){return Oi(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return it(this,"every",t,e,void 0,arguments)},filter(t,e){return it(this,"filter",t,e,n=>n.map(we),arguments)},find(t,e){return it(this,"find",t,e,we,arguments)},findIndex(t,e){return it(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return it(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return it(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return it(this,"forEach",t,e,void 0,arguments)},includes(...t){return Di(this,"includes",t)},indexOf(...t){return Di(this,"indexOf",t)},join(t){return Yt(this).join(t)},lastIndexOf(...t){return Di(this,"lastIndexOf",t)},map(t,e){return it(this,"map",t,e,void 0,arguments)},pop(){return En(this,"pop")},push(...t){return En(this,"push",t)},reduce(t,...e){return Fo(this,"reduce",t,e)},reduceRight(t,...e){return Fo(this,"reduceRight",t,e)},shift(){return En(this,"shift")},some(t,e){return it(this,"some",t,e,void 0,arguments)},splice(...t){return En(this,"splice",t)},toReversed(){return Yt(this).toReversed()},toSorted(t){return Yt(this).toSorted(t)},toSpliced(...t){return Yt(this).toSpliced(...t)},unshift(...t){return En(this,"unshift",t)},values(){return Oi(this,"values",we)}};function Oi(t,e,n){const s=Hr(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const vh=Array.prototype;function it(t,e,n,s,i,r){const o=Hr(t),l=o!==t&&!je(t),a=o[e];if(a!==vh[e]){const h=a.apply(t,r);return l?we(h):h}let c=n;o!==t&&(l?c=function(h,d){return n.call(this,we(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Fo(t,e,n,s){const i=Hr(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,we(l),a,t)}),i[e](r,...s)}function Di(t,e,n){const s=j(t);ve(s,"iterate",Gn);const i=s[e](...n);return(i===-1||i===!1)&&$r(n[0])?(n[0]=j(n[0]),s[e](...n)):i}function En(t,e,n=[]){Nt(),Fr();const s=j(t)[e].apply(t,n);return Lr(),At(),s}const Ch=Ar("__proto__,__v_isRef,__isVue"),Ea=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rt));function bh(t){Rt(t)||(t=String(t));const e=j(this);return ve(e,"has",t),e.hasOwnProperty(t)}class wa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Ph:xa:r?Ta:Ia).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=D(e);if(!i){let a;if(o&&(a=yh[n]))return a;if(n==="hasOwnProperty")return bh}const l=Reflect.get(e,n,ce(e)?e:s);return(Rt(n)?Ea.has(n):Ch(n))||(i||ve(e,"get",n),r)?l:ce(l)?o&&Dr(n)?l:l.value:le(l)?i?Ra(l):ci(l):l}}class Sa extends wa{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=$t(r);if(!je(s)&&!$t(s)&&(r=j(r),s=j(s)),!D(e)&&ce(r)&&!ce(s))return a?!1:(r.value=s,!0)}const o=D(e)&&Dr(n)?Number(n)<e.length:q(e,n),l=Reflect.set(e,n,s,ce(e)?e:i);return e===j(i)&&(o?vt(s,r)&&ot(e,"set",n,s):ot(e,"add",n,s)),l}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ot(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Rt(n)||!Ea.has(n))&&ve(e,"has",n),s}ownKeys(e){return ve(e,"iterate",D(e)?"length":Ht),Reflect.ownKeys(e)}}class Eh extends wa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const wh=new Sa,Sh=new Eh,Ih=new Sa(!0);const tr=t=>t,vs=t=>Reflect.getPrototypeOf(t);function Th(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=nn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?tr:e?nr:we;return!e&&ve(r,"iterate",a?er:Ht),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Cs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xh(t,e){const n={get(i){const r=this.__v_raw,o=j(r),l=j(i);t||(vt(i,l)&&ve(o,"get",i),ve(o,"get",l));const{has:a}=vs(o),c=e?tr:t?nr:we;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ve(j(i),"iterate",Ht),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=j(r),l=j(i);return t||(vt(i,l)&&ve(o,"has",i),ve(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=j(l),c=e?tr:t?nr:we;return!t&&ve(a,"iterate",Ht),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Te(n,t?{add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear")}:{add(i){!e&&!je(i)&&!$t(i)&&(i=j(i));const r=j(this);return vs(r).has.call(r,i)||(r.add(i),ot(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!$t(r)&&(r=j(r));const o=j(this),{has:l,get:a}=vs(o);let c=l.call(o,i);c||(i=j(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?vt(r,u)&&ot(o,"set",i,r):ot(o,"add",i,r),this},delete(i){const r=j(this),{has:o,get:l}=vs(r);let a=o.call(r,i);a||(i=j(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&ot(r,"delete",i,void 0),c},clear(){const i=j(this),r=i.size!==0,o=i.clear();return r&&ot(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Th(i,t,e)}),n}function Ur(t,e){const n=xh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const Rh={get:Ur(!1,!1)},Nh={get:Ur(!1,!0)},Ah={get:Ur(!0,!1)};const Ia=new WeakMap,Ta=new WeakMap,xa=new WeakMap,Ph=new WeakMap;function Oh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dh(t){return t.__v_skip||!Object.isExtensible(t)?0:Oh(rh(t))}function ci(t){return $t(t)?t:Vr(t,!1,wh,Rh,Ia)}function Mh(t){return Vr(t,!1,Ih,Nh,Ta)}function Ra(t){return Vr(t,!0,Sh,Ah,xa)}function Vr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Dh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ut(t){return $t(t)?Ut(t.__v_raw):!!(t&&t.__v_isReactive)}function $t(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function $r(t){return t?!!t.__v_raw:!1}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function jr(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&la(t,"__v_skip",!0),t}const we=t=>le(t)?ci(t):t,nr=t=>le(t)?Ra(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function He(t){return Na(t,!1)}function kh(t){return Na(t,!0)}function Na(t,e){return ce(t)?t:new Fh(t,e)}class Fh{constructor(e,n){this.dep=new Wr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:j(e),this._value=n?e:we(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||je(e)||$t(e);e=s?e:j(e),vt(e,n)&&(this._rawValue=e,this._value=s?e:we(e),this.dep.trigger())}}function Aa(t){return ce(t)?t.value:t}const Lh={get:(t,e,n)=>e==="__v_raw"?t:Aa(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Pa(t){return Ut(t)?t:new Proxy(t,Lh)}function Bh(t){const e=D(t)?new Array(t.length):{};for(const n in t)e[n]=Hh(t,n);return e}class Wh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mh(j(this._object),this._key)}}function Hh(t,e,n){const s=t[e];return ce(s)?s:new Wh(t,e,n)}class Uh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return ga(this,!0),!0}get value(){const e=this.dep.track();return va(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vh(t,e,n=!1){let s,i;return M(t)?s=t:(s=t.get,i=t.set),new Uh(s,i,n)}const bs={},Ds=new WeakMap;let kt;function $h(t,e=!1,n=kt){if(n){let s=Ds.get(n);s||Ds.set(n,s=[]),s.push(t)}}function jh(t,e,n=X){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=N=>i?N:je(N)||i===!1||i===0?lt(N,1):lt(N);let u,h,d,_,b=!1,x=!1;if(ce(t)?(h=()=>t.value,b=je(t)):Ut(t)?(h=()=>c(t),b=!0):D(t)?(x=!0,b=t.some(N=>Ut(N)||je(N)),h=()=>t.map(N=>{if(ce(N))return N.value;if(Ut(N))return c(N);if(M(N))return a?a(N,2):N()})):M(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){Nt();try{d()}finally{At()}}const N=kt;kt=u;try{return a?a(t,3,[_]):t(_)}finally{kt=N}}:h=et,e&&i){const N=h,K=i===!0?1/0:i;h=()=>lt(N(),K)}const B=da(),W=()=>{u.stop(),B&&B.active&&Or(B.effects,u)};if(r&&e){const N=e;e=(...K)=>{N(...K),W()}}let Y=x?new Array(t.length).fill(bs):bs;const Q=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(e){const K=u.run();if(i||b||(x?K.some((st,ye)=>vt(st,Y[ye])):vt(K,Y))){d&&d();const st=kt;kt=u;try{const ye=[K,Y===bs?void 0:x&&Y[0]===bs?[]:Y,_];a?a(e,3,ye):e(...ye),Y=K}finally{kt=st}}}else u.run()};return l&&l(Q),u=new pa(h),u.scheduler=o?()=>o(Q,!1):Q,_=N=>$h(N,!1,u),d=u.onStop=()=>{const N=Ds.get(u);if(N){if(a)a(N,4);else for(const K of N)K();Ds.delete(u)}},e?s?Q(!0):Y=u.run():o?o(Q.bind(null,!0),!0):u.run(),W.pause=u.pause.bind(u),W.resume=u.resume.bind(u),W.stop=W,W}function lt(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))lt(t.value,e,n);else if(D(t))for(let s=0;s<t.length;s++)lt(t[s],e,n);else if(sa(t)||nn(t))t.forEach(s=>{lt(s,e,n)});else if(oa(t)){for(const s in t)lt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&lt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ls(t,e,n,s){try{return s?t(...s):t()}catch(i){ui(i,e,n)}}function tt(t,e,n,s){if(M(t)){const i=ls(t,e,n,s);return i&&ia(i)&&i.catch(r=>{ui(r,e,n)}),i}if(D(t)){const i=[];for(let r=0;r<t.length;r++)i.push(tt(t[r],e,n,s));return i}}function ui(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Nt(),ls(r,null,10,[t,a,c]),At();return}}Gh(t,n,i,s,o)}function Gh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Se=[];let Xe=-1;const sn=[];let mt=null,Xt=0;const Oa=Promise.resolve();let Ms=null;function Da(t){const e=Ms||Oa;return t?e.then(this?t.bind(this):t):e}function Kh(t){let e=Xe+1,n=Se.length;for(;e<n;){const s=e+n>>>1,i=Se[s],r=Kn(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Gr(t){if(!(t.flags&1)){const e=Kn(t),n=Se[Se.length-1];!n||!(t.flags&2)&&e>=Kn(n)?Se.push(t):Se.splice(Kh(e),0,t),t.flags|=1,Ma()}}function Ma(){Ms||(Ms=Oa.then(Fa))}function zh(t){D(t)?sn.push(...t):mt&&t.id===-1?mt.splice(Xt+1,0,t):t.flags&1||(sn.push(t),t.flags|=1),Ma()}function Lo(t,e,n=Xe+1){for(;n<Se.length;n++){const s=Se[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ka(t){if(sn.length){const e=[...new Set(sn)].sort((n,s)=>Kn(n)-Kn(s));if(sn.length=0,mt){mt.push(...e);return}for(mt=e,Xt=0;Xt<mt.length;Xt++){const n=mt[Xt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mt=null,Xt=0}}const Kn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fa(t){try{for(Xe=0;Xe<Se.length;Xe++){const e=Se[Xe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ls(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xe<Se.length;Xe++){const e=Se[Xe];e&&(e.flags&=-2)}Xe=-1,Se.length=0,ka(),Ms=null,(Se.length||sn.length)&&Fa()}}let Re=null,La=null;function ks(t){const e=Re;return Re=t,La=t&&t.type.__scopeId||null,e}function qh(t,e=Re,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zo(-1);const r=ks(e);let o;try{o=t(...i)}finally{ks(r),s._d&&zo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function On(t,e){if(Re===null)return t;const n=pi(Re),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=X]=e[i];r&&(M(r)&&(r={mounted:r,updated:r}),r.deep&&lt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Dt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Nt(),tt(a,n,8,[t.el,l,t,e]),At())}}const Yh=Symbol("_vte"),Qh=t=>t.__isTeleport;function Kr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ba(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fs(t,e,n,s,i=!1){if(D(t)){t.forEach((b,x)=>Fs(b,e&&(D(e)?e[x]:e),n,s,i));return}if(Dn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Fs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?pi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===X?l.refs={}:l.refs,h=l.setupState,d=j(h),_=h===X?()=>!1:b=>q(d,b);if(c!=null&&c!==a&&(he(c)?(u[c]=null,_(c)&&(h[c]=null)):ce(c)&&(c.value=null)),M(a))ls(a,l,12,[o,u]);else{const b=he(a),x=ce(a);if(b||x){const B=()=>{if(t.f){const W=b?_(a)?h[a]:u[a]:a.value;i?D(W)&&Or(W,r):D(W)?W.includes(r)||W.push(r):b?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else b?(u[a]=o,_(a)&&(h[a]=o)):x&&(a.value=o,t.k&&(u[t.k]=o))};o?(B.id=-1,Me(B,n)):B()}}}ai().requestIdleCallback;ai().cancelIdleCallback;const Dn=t=>!!t.type.__asyncLoader,Wa=t=>t.type.__isKeepAlive;function Jh(t,e){Ha(t,"a",e)}function Xh(t,e){Ha(t,"da",e)}function Ha(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(hi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Wa(i.parent.vnode)&&Zh(s,e,n,i),i=i.parent}}function Zh(t,e,n,s){const i=hi(e,t,s,!0);Ua(()=>{Or(s[e],i)},n)}function hi(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Nt();const l=as(n),a=tt(e,n,t,o);return l(),At(),a});return s?i.unshift(r):i.push(r),r}}const ft=t=>(e,n=me)=>{(!Yn||t==="sp")&&hi(t,(...s)=>e(...s),n)},ef=ft("bm"),tf=ft("m"),nf=ft("bu"),sf=ft("u"),rf=ft("bum"),Ua=ft("um"),of=ft("sp"),lf=ft("rtg"),af=ft("rtc");function cf(t,e=me){hi("ec",t,e)}const uf="components",Va=Symbol.for("v-ndc");function hf(t){return he(t)?ff(uf,t,!1)||t:t||Va}function ff(t,e,n=!0,s=!1){const i=Re||me;if(i){const r=i.type;{const l=td(r,!1);if(l&&(l===e||l===Le(e)||l===li(Le(e))))return r}const o=Bo(i[t]||r[t],e)||Bo(i.appContext[t],e);return!o&&s?r:o}}function Bo(t,e){return t&&(t[e]||t[Le(e)]||t[li(Le(e))])}const sr=t=>t?uc(t)?pi(t):sr(t.parent):null,Mn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sr(t.parent),$root:t=>sr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ja(t),$forceUpdate:t=>t.f||(t.f=()=>{Gr(t.update)}),$nextTick:t=>t.n||(t.n=Da.bind(t.proxy)),$watch:t=>kf.bind(t)}),Mi=(t,e)=>t!==X&&!t.__isScriptSetup&&q(t,e),df={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Mi(s,e))return o[e]=1,s[e];if(i!==X&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==X&&q(n,e))return o[e]=4,n[e];ir&&(o[e]=0)}}const u=Mn[e];let h,d;if(u)return e==="$attrs"&&ve(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==X&&q(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Mi(i,e)?(i[e]=n,!0):s!==X&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==X&&q(t,o)||Mi(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(Mn,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wo(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ir=!0;function pf(t){const e=ja(t),n=t.proxy,s=t.ctx;ir=!1,e.beforeCreate&&Ho(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:b,activated:x,deactivated:B,beforeDestroy:W,beforeUnmount:Y,destroyed:Q,unmounted:N,render:K,renderTracked:st,renderTriggered:ye,errorCaptured:U,serverPrefetch:$,expose:ue,inheritAttrs:Fe,components:Ke,directives:_t,filters:yn}=e;if(c&&_f(c,s,null),o)for(const H in o){const ee=o[H];M(ee)&&(s[H]=ee.bind(n))}if(i){const H=i.call(n,n);le(H)&&(t.data=ci(H))}if(ir=!0,r)for(const H in r){const ee=r[H],Pt=M(ee)?ee.bind(n,n):M(ee.get)?ee.get.bind(n,n):et,ms=!M(ee)&&M(ee.set)?ee.set.bind(n):et,Ot=fc({get:Pt,set:ms});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:ze=>Ot.value=ze})}if(l)for(const H in l)$a(l[H],s,n,H);if(a){const H=M(a)?a.call(n):a;Reflect.ownKeys(H).forEach(ee=>{bf(ee,H[ee])})}u&&Ho(u,t,"c");function ae(H,ee){D(ee)?ee.forEach(Pt=>H(Pt.bind(n))):ee&&H(ee.bind(n))}if(ae(ef,h),ae(tf,d),ae(nf,_),ae(sf,b),ae(Jh,x),ae(Xh,B),ae(cf,U),ae(af,st),ae(lf,ye),ae(rf,Y),ae(Ua,N),ae(of,$),D(ue))if(ue.length){const H=t.exposed||(t.exposed={});ue.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>n[ee],set:Pt=>n[ee]=Pt})})}else t.exposed||(t.exposed={});K&&t.render===et&&(t.render=K),Fe!=null&&(t.inheritAttrs=Fe),Ke&&(t.components=Ke),_t&&(t.directives=_t),$&&Ba(t)}function _f(t,e,n=et){D(t)&&(t=rr(t));for(const s in t){const i=t[s];let r;le(i)?"default"in i?r=kn(i.from||s,i.default,!0):r=kn(i.from||s):r=kn(i),ce(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ho(t,e,n){tt(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function $a(t,e,n,s){let i=s.includes(".")?ic(n,s):()=>n[s];if(he(t)){const r=e[t];M(r)&&Ts(i,r)}else if(M(t))Ts(i,t.bind(n));else if(le(t))if(D(t))t.forEach(r=>$a(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&Ts(i,r,t)}}function ja(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ls(a,c,o,!0)),Ls(a,e,o)),le(e)&&r.set(e,a),a}function Ls(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ls(t,r,n,!0),i&&i.forEach(o=>Ls(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=gf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const gf={data:Uo,props:Vo,emits:Vo,methods:Rn,computed:Rn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Rn,directives:Rn,watch:yf,provide:Uo,inject:mf};function Uo(t,e){return e?t?function(){return Te(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function mf(t,e){return Rn(rr(t),rr(e))}function rr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function Rn(t,e){return t?Te(Object.create(null),t,e):e}function Vo(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:Te(Object.create(null),Wo(t),Wo(e??{})):e}function yf(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=be(t[s],e[s]);return n}function Ga(){return{app:null,config:{isNativeTag:sh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vf=0;function Cf(t,e){return function(s,i=null){M(s)||(s=Te({},s)),i!=null&&!le(i)&&(i=null);const r=Ga(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:vf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:sd,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&M(u.install)?(o.add(u),u.install(c,...h)):M(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!a){const _=c._ceVNode||Ct(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),a=!0,c._container=u,u.__vue_app__=c,pi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(tt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Vt;Vt=c;try{return u()}finally{Vt=h}}};return c}}let Vt=null;function bf(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function kn(t,e,n=!1){const s=me||Re;if(s||Vt){const i=Vt?Vt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}function Ef(){return!!(me||Re||Vt)}const Ka={},za=()=>Object.create(Ka),qa=t=>Object.getPrototypeOf(t)===Ka;function wf(t,e,n,s=!1){const i={},r=za();t.propsDefaults=Object.create(null),Ya(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Mh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Sf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(fi(t.emitsOptions,d))continue;const _=e[d];if(a)if(q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const b=Le(d);i[b]=or(a,l,b,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Ya(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=zt(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=or(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&ot(t.attrs,"set","")}function Ya(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Nn(a))continue;const c=e[a];let u;i&&q(i,u=Le(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:fi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||X;for(let u=0;u<r.length;u++){const h=r[u];n[h]=or(i,a,h,c[h],t,!q(c,h))}}return o}function or(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&M(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=as(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===zt(n))&&(s=!0))}return s}const If=new WeakMap;function Qa(t,e,n=!1){const s=n?If:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,_]=Qa(h,e,!0);Te(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return le(t)&&s.set(t,tn),tn;if(D(r))for(let u=0;u<r.length;u++){const h=Le(r[u]);$o(h)&&(o[h]=X)}else if(r)for(const u in r){const h=Le(u);if($o(h)){const d=r[u],_=o[h]=D(d)||M(d)?{type:d}:Te({},d),b=_.type;let x=!1,B=!0;if(D(b))for(let W=0;W<b.length;++W){const Y=b[W],Q=M(Y)&&Y.name;if(Q==="Boolean"){x=!0;break}else Q==="String"&&(B=!1)}else x=M(b)&&b.name==="Boolean";_[0]=x,_[1]=B,(x||q(_,"default"))&&l.push(h)}}const c=[o,l];return le(t)&&s.set(t,c),c}function $o(t){return t[0]!=="$"&&!Nn(t)}const Ja=t=>t[0]==="_"||t==="$stable",zr=t=>D(t)?t.map(Ze):[Ze(t)],Tf=(t,e,n)=>{if(e._n)return e;const s=qh((...i)=>zr(e(...i)),n);return s._c=!1,s},Xa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ja(i))continue;const r=t[i];if(M(r))e[i]=Tf(i,r,s);else if(r!=null){const o=zr(r);e[i]=()=>o}}},Za=(t,e)=>{const n=zr(e);t.slots.default=()=>n},ec=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},xf=(t,e,n)=>{const s=t.slots=za();if(t.vnode.shapeFlag&32){const i=e._;i?(ec(s,e,n),n&&la(s,"_",i,!0)):Xa(e,s)}else e&&Za(t,e)},Rf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=X;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ec(i,e,n):(r=!e.$stable,Xa(e,i)),o=e}else e&&(Za(t,e),o={default:1});if(r)for(const l in i)!Ja(l)&&o[l]==null&&delete i[l]},Me=Vf;function Nf(t){return Af(t)}function Af(t,e){const n=ai();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=et,insertStaticContent:b}=t,x=(f,p,g,v=null,m=null,y=null,I=void 0,S=null,w=!!p.dynamicChildren)=>{if(f===p)return;f&&!wn(f,p)&&(v=ys(f),ze(f,m,y,!0),f=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:C,ref:A,shapeFlag:T}=p;switch(C){case di:B(f,p,g,v);break;case zn:W(f,p,g,v);break;case Fi:f==null&&Y(p,g,v,I);break;case Be:Ke(f,p,g,v,m,y,I,S,w);break;default:T&1?K(f,p,g,v,m,y,I,S,w):T&6?_t(f,p,g,v,m,y,I,S,w):(T&64||T&128)&&C.process(f,p,g,v,m,y,I,S,w,Cn)}A!=null&&m&&Fs(A,f&&f.ref,y,p||f,!p)},B=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},W=(f,p,g,v)=>{f==null?s(p.el=a(p.children||""),g,v):p.el=f.el},Y=(f,p,g,v)=>{[f.el,f.anchor]=b(f.children,p,g,v,f.el,f.anchor)},Q=({el:f,anchor:p},g,v)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,v),f=m;s(p,g,v)},N=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},K=(f,p,g,v,m,y,I,S,w)=>{p.type==="svg"?I="svg":p.type==="math"&&(I="mathml"),f==null?st(p,g,v,m,y,I,S,w):$(f,p,m,y,I,S,w)},st=(f,p,g,v,m,y,I,S)=>{let w,C;const{props:A,shapeFlag:T,transition:R,dirs:O}=f;if(w=f.el=o(f.type,y,A&&A.is,A),T&8?u(w,f.children):T&16&&U(f.children,w,null,v,m,ki(f,y),I,S),O&&Dt(f,null,v,"created"),ye(w,f,f.scopeId,I,v),A){for(const te in A)te!=="value"&&!Nn(te)&&r(w,te,null,A[te],y,v);"value"in A&&r(w,"value",null,A.value,y),(C=A.onVnodeBeforeMount)&&Je(C,v,f)}O&&Dt(f,null,v,"beforeMount");const V=Pf(m,R);V&&R.beforeEnter(w),s(w,p,g),((C=A&&A.onVnodeMounted)||V||O)&&Me(()=>{C&&Je(C,v,f),V&&R.enter(w),O&&Dt(f,null,v,"mounted")},m)},ye=(f,p,g,v,m)=>{if(g&&_(f,g),v)for(let y=0;y<v.length;y++)_(f,v[y]);if(m){let y=m.subTree;if(p===y||oc(y.type)&&(y.ssContent===p||y.ssFallback===p)){const I=m.vnode;ye(f,I,I.scopeId,I.slotScopeIds,m.parent)}}},U=(f,p,g,v,m,y,I,S,w=0)=>{for(let C=w;C<f.length;C++){const A=f[C]=S?yt(f[C]):Ze(f[C]);x(null,A,p,g,v,m,y,I,S)}},$=(f,p,g,v,m,y,I)=>{const S=p.el=f.el;let{patchFlag:w,dynamicChildren:C,dirs:A}=p;w|=f.patchFlag&16;const T=f.props||X,R=p.props||X;let O;if(g&&Mt(g,!1),(O=R.onVnodeBeforeUpdate)&&Je(O,g,p,f),A&&Dt(p,f,g,"beforeUpdate"),g&&Mt(g,!0),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&u(S,""),C?ue(f.dynamicChildren,C,S,g,v,ki(p,m),y):I||ee(f,p,S,null,g,v,ki(p,m),y,!1),w>0){if(w&16)Fe(S,T,R,g,m);else if(w&2&&T.class!==R.class&&r(S,"class",null,R.class,m),w&4&&r(S,"style",T.style,R.style,m),w&8){const V=p.dynamicProps;for(let te=0;te<V.length;te++){const J=V[te],Oe=T[J],xe=R[J];(xe!==Oe||J==="value")&&r(S,J,Oe,xe,m,g)}}w&1&&f.children!==p.children&&u(S,p.children)}else!I&&C==null&&Fe(S,T,R,g,m);((O=R.onVnodeUpdated)||A)&&Me(()=>{O&&Je(O,g,p,f),A&&Dt(p,f,g,"updated")},v)},ue=(f,p,g,v,m,y,I)=>{for(let S=0;S<p.length;S++){const w=f[S],C=p[S],A=w.el&&(w.type===Be||!wn(w,C)||w.shapeFlag&70)?h(w.el):g;x(w,C,A,null,v,m,y,I,!0)}},Fe=(f,p,g,v,m)=>{if(p!==g){if(p!==X)for(const y in p)!Nn(y)&&!(y in g)&&r(f,y,p[y],null,m,v);for(const y in g){if(Nn(y))continue;const I=g[y],S=p[y];I!==S&&y!=="value"&&r(f,y,S,I,m,v)}"value"in g&&r(f,"value",p.value,g.value,m)}},Ke=(f,p,g,v,m,y,I,S,w)=>{const C=p.el=f?f.el:l(""),A=p.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:O}=p;O&&(S=S?S.concat(O):O),f==null?(s(C,g,v),s(A,g,v),U(p.children||[],g,A,m,y,I,S,w)):T>0&&T&64&&R&&f.dynamicChildren?(ue(f.dynamicChildren,R,g,m,y,I,S),(p.key!=null||m&&p===m.subTree)&&tc(f,p,!0)):ee(f,p,g,A,m,y,I,S,w)},_t=(f,p,g,v,m,y,I,S,w)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?m.ctx.activate(p,g,v,I,w):yn(p,g,v,m,y,I,w):gs(f,p,w)},yn=(f,p,g,v,m,y,I)=>{const S=f.component=Qf(f,v,m);if(Wa(f)&&(S.ctx.renderer=Cn),Jf(S,!1,I),S.asyncDep){if(m&&m.registerDep(S,ae,I),!f.el){const w=S.subTree=Ct(zn);W(null,w,p,g)}}else ae(S,f,p,g,m,y,I)},gs=(f,p,g)=>{const v=p.component=f.component;if(Hf(f,p,g))if(v.asyncDep&&!v.asyncResolved){H(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},ae=(f,p,g,v,m,y,I)=>{const S=()=>{if(f.isMounted){let{next:T,bu:R,u:O,parent:V,vnode:te}=f;{const Ye=nc(f);if(Ye){T&&(T.el=te.el,H(f,T,I)),Ye.asyncDep.then(()=>{f.isUnmounted||S()});return}}let J=T,Oe;Mt(f,!1),T?(T.el=te.el,H(f,T,I)):T=te,R&&Ss(R),(Oe=T.props&&T.props.onVnodeBeforeUpdate)&&Je(Oe,V,T,te),Mt(f,!0);const xe=Go(f),qe=f.subTree;f.subTree=xe,x(qe,xe,h(qe.el),ys(qe),f,m,y),T.el=xe.el,J===null&&Uf(f,xe.el),O&&Me(O,m),(Oe=T.props&&T.props.onVnodeUpdated)&&Me(()=>Je(Oe,V,T,te),m)}else{let T;const{el:R,props:O}=p,{bm:V,m:te,parent:J,root:Oe,type:xe}=f,qe=Dn(p);Mt(f,!1),V&&Ss(V),!qe&&(T=O&&O.onVnodeBeforeMount)&&Je(T,J,p),Mt(f,!0);{Oe.ce&&Oe.ce._injectChildStyle(xe);const Ye=f.subTree=Go(f);x(null,Ye,g,v,f,m,y),p.el=Ye.el}if(te&&Me(te,m),!qe&&(T=O&&O.onVnodeMounted)){const Ye=p;Me(()=>Je(T,J,Ye),m)}(p.shapeFlag&256||J&&Dn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&Me(f.a,m),f.isMounted=!0,p=g=v=null}};f.scope.on();const w=f.effect=new pa(S);f.scope.off();const C=f.update=w.run.bind(w),A=f.job=w.runIfDirty.bind(w);A.i=f,A.id=f.uid,w.scheduler=()=>Gr(A),Mt(f,!0),C()},H=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Sf(f,p.props,v,g),Rf(f,p.children,g),Nt(),Lo(f),At()},ee=(f,p,g,v,m,y,I,S,w=!1)=>{const C=f&&f.children,A=f?f.shapeFlag:0,T=p.children,{patchFlag:R,shapeFlag:O}=p;if(R>0){if(R&128){ms(C,T,g,v,m,y,I,S,w);return}else if(R&256){Pt(C,T,g,v,m,y,I,S,w);return}}O&8?(A&16&&vn(C,m,y),T!==C&&u(g,T)):A&16?O&16?ms(C,T,g,v,m,y,I,S,w):vn(C,m,y,!0):(A&8&&u(g,""),O&16&&U(T,g,v,m,y,I,S,w))},Pt=(f,p,g,v,m,y,I,S,w)=>{f=f||tn,p=p||tn;const C=f.length,A=p.length,T=Math.min(C,A);let R;for(R=0;R<T;R++){const O=p[R]=w?yt(p[R]):Ze(p[R]);x(f[R],O,g,null,m,y,I,S,w)}C>A?vn(f,m,y,!0,!1,T):U(p,g,v,m,y,I,S,w,T)},ms=(f,p,g,v,m,y,I,S,w)=>{let C=0;const A=p.length;let T=f.length-1,R=A-1;for(;C<=T&&C<=R;){const O=f[C],V=p[C]=w?yt(p[C]):Ze(p[C]);if(wn(O,V))x(O,V,g,null,m,y,I,S,w);else break;C++}for(;C<=T&&C<=R;){const O=f[T],V=p[R]=w?yt(p[R]):Ze(p[R]);if(wn(O,V))x(O,V,g,null,m,y,I,S,w);else break;T--,R--}if(C>T){if(C<=R){const O=R+1,V=O<A?p[O].el:v;for(;C<=R;)x(null,p[C]=w?yt(p[C]):Ze(p[C]),g,V,m,y,I,S,w),C++}}else if(C>R)for(;C<=T;)ze(f[C],m,y,!0),C++;else{const O=C,V=C,te=new Map;for(C=V;C<=R;C++){const De=p[C]=w?yt(p[C]):Ze(p[C]);De.key!=null&&te.set(De.key,C)}let J,Oe=0;const xe=R-V+1;let qe=!1,Ye=0;const bn=new Array(xe);for(C=0;C<xe;C++)bn[C]=0;for(C=O;C<=T;C++){const De=f[C];if(Oe>=xe){ze(De,m,y,!0);continue}let Qe;if(De.key!=null)Qe=te.get(De.key);else for(J=V;J<=R;J++)if(bn[J-V]===0&&wn(De,p[J])){Qe=J;break}Qe===void 0?ze(De,m,y,!0):(bn[Qe-V]=C+1,Qe>=Ye?Ye=Qe:qe=!0,x(De,p[Qe],g,null,m,y,I,S,w),Oe++)}const Oo=qe?Of(bn):tn;for(J=Oo.length-1,C=xe-1;C>=0;C--){const De=V+C,Qe=p[De],Do=De+1<A?p[De+1].el:v;bn[C]===0?x(null,Qe,g,Do,m,y,I,S,w):qe&&(J<0||C!==Oo[J]?Ot(Qe,g,Do,2):J--)}}},Ot=(f,p,g,v,m=null)=>{const{el:y,type:I,transition:S,children:w,shapeFlag:C}=f;if(C&6){Ot(f.component.subTree,p,g,v);return}if(C&128){f.suspense.move(p,g,v);return}if(C&64){I.move(f,p,g,Cn);return}if(I===Be){s(y,p,g);for(let T=0;T<w.length;T++)Ot(w[T],p,g,v);s(f.anchor,p,g);return}if(I===Fi){Q(f,p,g);return}if(v!==2&&C&1&&S)if(v===0)S.beforeEnter(y),s(y,p,g),Me(()=>S.enter(y),m);else{const{leave:T,delayLeave:R,afterLeave:O}=S,V=()=>s(y,p,g),te=()=>{T(y,()=>{V(),O&&O()})};R?R(y,V,te):te()}else s(y,p,g)},ze=(f,p,g,v=!1,m=!1)=>{const{type:y,props:I,ref:S,children:w,dynamicChildren:C,shapeFlag:A,patchFlag:T,dirs:R,cacheIndex:O}=f;if(T===-2&&(m=!1),S!=null&&Fs(S,null,g,f,!0),O!=null&&(p.renderCache[O]=void 0),A&256){p.ctx.deactivate(f);return}const V=A&1&&R,te=!Dn(f);let J;if(te&&(J=I&&I.onVnodeBeforeUnmount)&&Je(J,p,f),A&6)nh(f.component,g,v);else{if(A&128){f.suspense.unmount(g,v);return}V&&Dt(f,null,p,"beforeUnmount"),A&64?f.type.remove(f,p,g,Cn,v):C&&!C.hasOnce&&(y!==Be||T>0&&T&64)?vn(C,p,g,!1,!0):(y===Be&&T&384||!m&&A&16)&&vn(w,p,g),v&&Ao(f)}(te&&(J=I&&I.onVnodeUnmounted)||V)&&Me(()=>{J&&Je(J,p,f),V&&Dt(f,null,p,"unmounted")},g)},Ao=f=>{const{type:p,el:g,anchor:v,transition:m}=f;if(p===Be){th(g,v);return}if(p===Fi){N(f);return}const y=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:I,delayLeave:S}=m,w=()=>I(g,y);S?S(f.el,y,w):w()}else y()},th=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},nh=(f,p,g)=>{const{bum:v,scope:m,job:y,subTree:I,um:S,m:w,a:C}=f;jo(w),jo(C),v&&Ss(v),m.stop(),y&&(y.flags|=8,ze(I,f,p,g)),S&&Me(S,p),Me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},vn=(f,p,g,v=!1,m=!1,y=0)=>{for(let I=y;I<f.length;I++)ze(f[I],p,g,v,m)},ys=f=>{if(f.shapeFlag&6)return ys(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[Yh];return g?d(g):p};let Ri=!1;const Po=(f,p,g)=>{f==null?p._vnode&&ze(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,g),p._vnode=f,Ri||(Ri=!0,Lo(),ka(),Ri=!1)},Cn={p:x,um:ze,m:Ot,r:Ao,mt:yn,mc:U,pc:ee,pbc:ue,n:ys,o:t};return{render:Po,hydrate:void 0,createApp:Cf(Po)}}function ki({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Pf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tc(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=yt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&tc(o,l)),l.type===di&&(l.el=o.el)}}function Of(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function nc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nc(e)}function jo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Df=Symbol.for("v-scx"),Mf=()=>kn(Df);function Ts(t,e,n){return sc(t,e,n)}function sc(t,e,n=X){const{immediate:s,deep:i,flush:r,once:o}=n,l=Te({},n),a=e&&s||!e&&r!=="post";let c;if(Yn){if(r==="sync"){const _=Mf();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=et,_.resume=et,_.pause=et,_}}const u=me;l.call=(_,b,x)=>tt(_,u,b,x);let h=!1;r==="post"?l.scheduler=_=>{Me(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,b)=>{b?_():Gr(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=jh(t,e,l);return Yn&&(c?c.push(d):a&&d()),d}function kf(t,e,n){const s=this.proxy,i=he(t)?t.includes(".")?ic(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=as(this),l=sc(i,r.bind(s),n);return o(),l}function ic(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ff=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Le(e)}Modifiers`]||t[`${zt(e)}Modifiers`];function Lf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let i=n;const r=e.startsWith("update:"),o=r&&Ff(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>he(u)?u.trim():u)),o.number&&(i=n.map(Xi)));let l,a=s[l=Ni(e)]||s[l=Ni(Le(e))];!a&&r&&(a=s[l=Ni(zt(e))]),a&&tt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tt(c,t,6,i)}}function rc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=rc(c,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(le(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):Te(o,r),le(t)&&s.set(t,o),o)}function fi(t,e){return!t||!ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,zt(e))||q(t,e))}function Go(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:b,inheritAttrs:x}=t,B=ks(t);let W,Y;try{if(n.shapeFlag&4){const N=i||s,K=N;W=Ze(c.call(K,N,u,h,_,d,b)),Y=l}else{const N=e;W=Ze(N.length>1?N(h,{attrs:l,slots:o,emit:a}):N(h,null)),Y=e.props?l:Bf(l)}}catch(N){Fn.length=0,ui(N,t,1),W=Ct(zn)}let Q=W;if(Y&&x!==!1){const N=Object.keys(Y),{shapeFlag:K}=Q;N.length&&K&7&&(r&&N.some(Pr)&&(Y=Wf(Y,r)),Q=an(Q,Y,!1,!0))}return n.dirs&&(Q=an(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Kr(Q,n.transition),W=Q,ks(B),W}const Bf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ii(n))&&((e||(e={}))[n]=t[n]);return e},Wf=(t,e)=>{const n={};for(const s in t)(!Pr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Hf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ko(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!fi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ko(s,o,c):!0:!!o;return!1}function Ko(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!fi(n,r))return!0}return!1}function Uf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const oc=t=>t.__isSuspense;function Vf(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):zh(t)}const Be=Symbol.for("v-fgt"),di=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),Fi=Symbol.for("v-stc"),Fn=[];let ke=null;function Bs(t=!1){Fn.push(ke=t?null:[])}function $f(){Fn.pop(),ke=Fn[Fn.length-1]||null}let qn=1;function zo(t,e=!1){qn+=t,t<0&&ke&&e&&(ke.hasOnce=!0)}function lc(t){return t.dynamicChildren=qn>0?ke||tn:null,$f(),qn>0&&ke&&ke.push(t),t}function qr(t,e,n,s,i,r){return lc(z(t,e,n,s,i,r,!0))}function jf(t,e,n,s,i){return lc(Ct(t,e,n,s,i,!0))}function ac(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const cc=({key:t})=>t??null,xs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||ce(t)||M(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,s=0,i=null,r=t===Be?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cc(e),ref:e&&xs(e),scopeId:La,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return l?(Yr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),qn>0&&!o&&ke&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ke.push(a),a}const Ct=Gf;function Gf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Va)&&(t=zn),ac(t)){const l=an(t,e,!0);return n&&Yr(l,n),qn>0&&!r&&ke&&(l.shapeFlag&6?ke[ke.indexOf(t)]=l:ke.push(l)),l.patchFlag=-2,l}if(nd(t)&&(t=t.__vccOpts),e){e=Kf(e);let{class:l,style:a}=e;l&&!he(l)&&(e.class=kr(l)),le(a)&&($r(a)&&!D(a)&&(a=Te({},a)),e.style=Mr(a))}const o=he(t)?1:oc(t)?128:Qh(t)?64:le(t)?4:M(t)?2:0;return z(t,e,n,s,i,o,r,!0)}function Kf(t){return t?$r(t)||qa(t)?Te({},t):t:null}function an(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?zf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&cc(c),ref:e&&e.ref?n&&r?D(r)?r.concat(xs(e)):[r,xs(e)]:xs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Kr(u,a.clone(u)),u}function lr(t=" ",e=0){return Ct(di,null,t,e)}function Ze(t){return t==null||typeof t=="boolean"?Ct(zn):D(t)?Ct(Be,null,t.slice()):ac(t)?yt(t):Ct(di,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function Yr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Yr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!qa(e)?e._ctx=Re:i===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),s&64?(n=16,e=[lr(e)]):n=8);t.children=e,t.shapeFlag|=n}function zf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=kr([e.class,s.class]));else if(i==="style")e.style=Mr([e.style,s.style]);else if(ii(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Je(t,e,n,s=null){tt(t,e,7,[n,s])}const qf=Ga();let Yf=0;function Qf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qf,r={uid:Yf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ha(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qa(s,i),emitsOptions:rc(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Lf.bind(null,r),t.ce&&t.ce(r),r}let me=null,Ws,ar;{const t=ai(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Ws=e("__VUE_INSTANCE_SETTERS__",n=>me=n),ar=e("__VUE_SSR_SETTERS__",n=>Yn=n)}const as=t=>{const e=me;return Ws(t),t.scope.on(),()=>{t.scope.off(),Ws(e)}},qo=()=>{me&&me.scope.off(),Ws(null)};function uc(t){return t.vnode.shapeFlag&4}let Yn=!1;function Jf(t,e=!1,n=!1){e&&ar(e);const{props:s,children:i}=t.vnode,r=uc(t);wf(t,s,r,e),xf(t,i,n);const o=r?Xf(t,e):void 0;return e&&ar(!1),o}function Xf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,df);const{setup:s}=n;if(s){Nt();const i=t.setupContext=s.length>1?ed(t):null,r=as(t),o=ls(s,t,0,[t.props,i]),l=ia(o);if(At(),r(),(l||t.sp)&&!Dn(t)&&Ba(t),l){if(o.then(qo,qo),e)return o.then(a=>{Yo(t,a)}).catch(a=>{ui(a,t,0)});t.asyncDep=o}else Yo(t,o)}else hc(t)}function Yo(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Pa(e)),hc(t)}function hc(t,e,n){const s=t.type;t.render||(t.render=s.render||et);{const i=as(t);Nt();try{pf(t)}finally{At(),i()}}}const Zf={get(t,e){return ve(t,"get",""),t[e]}};function ed(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zf),slots:t.slots,emit:t.emit,expose:e}}function pi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pa(jr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mn)return Mn[n](t)},has(e,n){return n in e||n in Mn}})):t.proxy}function td(t,e=!0){return M(t)?t.displayName||t.name:t.name||e&&t.__name}function nd(t){return M(t)&&"__vccOpts"in t}const fc=(t,e)=>Vh(t,e,Yn),sd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cr;const Qo=typeof window<"u"&&window.trustedTypes;if(Qo)try{cr=Qo.createPolicy("vue",{createHTML:t=>t})}catch{}const dc=cr?t=>cr.createHTML(t):t=>t,id="http://www.w3.org/2000/svg",rd="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,Jo=rt&&rt.createElement("template"),od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?rt.createElementNS(id,t):e==="mathml"?rt.createElementNS(rd,t):n?rt.createElement(t,{is:n}):rt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rt.createTextNode(t),createComment:t=>rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Jo.innerHTML=dc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Jo.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ld=Symbol("_vtc");function ad(t,e,n){const s=t[ld];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xo=Symbol("_vod"),cd=Symbol("_vsh"),ud=Symbol(""),hd=/(^|;)\s*display\s*:/;function fd(t,e,n){const s=t.style,i=he(n);let r=!1;if(n&&!i){if(e)if(he(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Rs(s,l,"")}else for(const o in e)n[o]==null&&Rs(s,o,"");for(const o in n)o==="display"&&(r=!0),Rs(s,o,n[o])}else if(i){if(e!==n){const o=s[ud];o&&(n+=";"+o),s.cssText=n,r=hd.test(n)}}else e&&t.removeAttribute("style");Xo in t&&(t[Xo]=r?s.display:"",t[cd]&&(s.display="none"))}const Zo=/\s*!important$/;function Rs(t,e,n){if(D(n))n.forEach(s=>Rs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=dd(t,e);Zo.test(n)?t.setProperty(zt(s),n.replace(Zo,""),"important"):t[s]=n}}const el=["Webkit","Moz","ms"],Li={};function dd(t,e){const n=Li[e];if(n)return n;let s=Le(e);if(s!=="filter"&&s in t)return Li[e]=s;s=li(s);for(let i=0;i<el.length;i++){const r=el[i]+s;if(r in t)return Li[e]=r}return e}const tl="http://www.w3.org/1999/xlink";function nl(t,e,n,s,i,r=dh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(tl,e.slice(6,e.length)):t.setAttributeNS(tl,e,n):n==null||r&&!aa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Rt(n)?String(n):n)}function sl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=aa(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Zt(t,e,n,s){t.addEventListener(e,n,s)}function pd(t,e,n,s){t.removeEventListener(e,n,s)}const il=Symbol("_vei");function _d(t,e,n,s,i=null){const r=t[il]||(t[il]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=gd(e);if(s){const c=r[e]=vd(s,i);Zt(t,l,c,a)}else o&&(pd(t,l,o,a),r[e]=void 0)}}const rl=/(?:Once|Passive|Capture)$/;function gd(t){let e;if(rl.test(t)){e={};let s;for(;s=t.match(rl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zt(t.slice(2)),e]}let Bi=0;const md=Promise.resolve(),yd=()=>Bi||(md.then(()=>Bi=0),Bi=Date.now());function vd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(Cd(s,n.value),e,5,[s])};return n.value=t,n.attached=yd(),n}function Cd(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ol=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?ad(t,s,o):e==="style"?fd(t,n,s):ii(e)?Pr(e)||_d(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ed(t,e,s,o))?(sl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(s))?sl(t,Le(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),nl(t,e,s,o))};function Ed(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ol(e)&&M(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ol(e)&&he(n)?!1:e in t}const ll=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>Ss(e,n):e};function wd(t){t.target.composing=!0}function al(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wi=Symbol("_assign"),Ln={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Wi]=ll(i);const r=s||i.props&&i.props.type==="number";Zt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Xi(l)),t[Wi](l)}),n&&Zt(t,"change",()=>{t.value=t.value.trim()}),e||(Zt(t,"compositionstart",wd),Zt(t,"compositionend",al),Zt(t,"change",al))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Wi]=ll(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Xi(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Sd=Te({patchProp:bd},od);let cl;function Id(){return cl||(cl=Nf(Sd))}const Td=(...t)=>{const e=Id().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Rd(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,xd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function xd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rd(t){return he(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pc;const _i=t=>pc=t,_c=Symbol();function ur(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Bn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bn||(Bn={}));function Nd(){const t=fa(!0),e=t.run(()=>He({}));let n=[],s=[];const i=jr({install(r){_i(i),i._a=r,r.provide(_c,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const gc=()=>{};function ul(t,e,n,s=gc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&da()&&ph(i),i}function Qt(t,...e){t.slice().forEach(n=>{n(...e)})}const Ad=t=>t(),hl=Symbol(),Hi=Symbol();function hr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ur(i)&&ur(s)&&t.hasOwnProperty(n)&&!ce(s)&&!Ut(s)?t[n]=hr(i,s):t[n]=s}return t}const Pd=Symbol();function Od(t){return!ur(t)||!t.hasOwnProperty(Pd)}const{assign:gt}=Object;function Dd(t){return!!(ce(t)&&t.effect)}function Md(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Bh(n.state.value[t]);return gt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=jr(fc(()=>{_i(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=mc(t,c,e,n,s,!0),a}function mc(t,e,n={},s,i,r){let o;const l=gt({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],_;const b=s.state.value[t];!r&&!b&&(s.state.value[t]={}),He({});let x;function B(U){let $;c=u=!1,typeof U=="function"?(U(s.state.value[t]),$={type:Bn.patchFunction,storeId:t,events:_}):(hr(s.state.value[t],U),$={type:Bn.patchObject,payload:U,storeId:t,events:_});const ue=x=Symbol();Da().then(()=>{x===ue&&(c=!0)}),u=!0,Qt(h,$,s.state.value[t])}const W=r?function(){const{state:$}=n,ue=$?$():{};this.$patch(Fe=>{gt(Fe,ue)})}:gc;function Y(){o.stop(),h=[],d=[],s._s.delete(t)}const Q=(U,$="")=>{if(hl in U)return U[Hi]=$,U;const ue=function(){_i(s);const Fe=Array.from(arguments),Ke=[],_t=[];function yn(H){Ke.push(H)}function gs(H){_t.push(H)}Qt(d,{args:Fe,name:ue[Hi],store:K,after:yn,onError:gs});let ae;try{ae=U.apply(this&&this.$id===t?this:K,Fe)}catch(H){throw Qt(_t,H),H}return ae instanceof Promise?ae.then(H=>(Qt(Ke,H),H)).catch(H=>(Qt(_t,H),Promise.reject(H))):(Qt(Ke,ae),ae)};return ue[hl]=!0,ue[Hi]=$,ue},N={_p:s,$id:t,$onAction:ul.bind(null,d),$patch:B,$reset:W,$subscribe(U,$={}){const ue=ul(h,U,$.detached,()=>Fe()),Fe=o.run(()=>Ts(()=>s.state.value[t],Ke=>{($.flush==="sync"?u:c)&&U({storeId:t,type:Bn.direct,events:_},Ke)},gt({},a,$)));return ue},$dispose:Y},K=ci(N);s._s.set(t,K);const ye=(s._a&&s._a.runWithContext||Ad)(()=>s._e.run(()=>(o=fa()).run(()=>e({action:Q}))));for(const U in ye){const $=ye[U];if(ce($)&&!Dd($)||Ut($))r||(b&&Od($)&&(ce($)?$.value=b[U]:hr($,b[U])),s.state.value[t][U]=$);else if(typeof $=="function"){const ue=Q($,U);ye[U]=ue,l.actions[U]=$}}return gt(K,ye),gt(j(K),ye),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:U=>{B($=>{gt($,U)})}}),s._p.forEach(U=>{gt(K,o.run(()=>U({store:K,app:s._a,pinia:s,options:l})))}),b&&r&&n.hydrate&&n.hydrate(K.$state,b),c=!0,u=!0,K}/*! #__NO_SIDE_EFFECTS__ */function kd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=Ef();return o=o||(a?kn(_c,null):null),o&&_i(o),o=pc,o._s.has(t)||(i?mc(t,e,s,o):Md(t,s,o)),o._s.get(t)}return r.$id=t,r}const Fd=()=>{};var fl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw dn(e)},dn=function(t){return new Error("Firebase Database ("+yc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ld=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ld(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Bd;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const b=c<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cc=function(t){const e=vc(t);return Qr.encodeByteArray(e,!0)},Hs=function(t){return Cc(t).replace(/\./g,"")},fr=function(t){try{return Qr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){return bc(void 0,t)}function bc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hd(n)||(t[n]=bc(t[n],e[n]));return t}function Hd(t){return t!=="__proto__"}/**
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
 */function Ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vd=()=>Ud().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof fl>"u")return;const t=fl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fr(t[1]);return e&&JSON.parse(e)},Ec=()=>{try{return Fd()||Vd()||$d()||jd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gd=t=>{var e,n;return(n=(e=Ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kd=t=>{const e=Gd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},wc=()=>{var t;return(t=Ec())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function zd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hs(JSON.stringify(n)),Hs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qd())}function Yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qd(){return yc.NODE_ADMIN===!0}function Jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Xd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="FirebaseError";class cs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zd,Object.setPrototypeOf(this,cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ic.prototype.create)}}class Ic{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ep(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cs(i,l,s)}}function ep(t,e){return t.replace(tp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const tp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Qn(fr(r[0])||""),n=Qn(fr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},np=function(t){const e=Tc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sp=function(t){const e=Tc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(pl(r)&&pl(o)){if(!Vs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function pl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Jr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pn(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class lp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new gi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cp(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ap(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ap(t){return t===Ft?void 0:t}function cp(t){return t.instantiationMode==="EAGER"}/**
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
 */class up{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const hp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},fp=se.INFO,dp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},pp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const _p=(t,e)=>e.some(n=>t instanceof n);let _l,gl;function gp(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mp(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rc=new WeakMap,dr=new WeakMap,Nc=new WeakMap,Ui=new WeakMap,Xr=new WeakMap;function yp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rc.set(n,t)}).catch(()=>{}),Xr.set(e,t),e}function vp(t){if(dr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});dr.set(t,e)}let pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cp(t){pr=t(pr)}function bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vi(this),e,...n);return Nc.set(s,e.sort?e.sort():[e]),bt(s)}:mp().includes(t)?function(...e){return t.apply(Vi(this),e),bt(Rc.get(this))}:function(...e){return bt(t.apply(Vi(this),e))}}function Ep(t){return typeof t=="function"?bp(t):(t instanceof IDBTransaction&&vp(t),_p(t,gp())?new Proxy(t,pr):t)}function bt(t){if(t instanceof IDBRequest)return yp(t);if(Ui.has(t))return Ui.get(t);const e=Ep(t);return e!==t&&(Ui.set(t,e),Xr.set(e,t)),e}const Vi=t=>Xr.get(t);function wp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=bt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(bt(o.result),a.oldVersion,a.newVersion,bt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Sp=["get","getKey","getAll","getAllKeys","count"],Ip=["put","add","delete","clear"],$i=new Map;function ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ip.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return $i.set(e,r),r}Cp(t=>({...t,get:(e,n,s)=>ml(e,n)||t.get(e,n,s),has:(e,n)=>!!ml(e,n)||t.has(e,n)}));/**
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
 */class Tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _r="@firebase/app",yl="0.11.2";/**
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
 */const ut=new xc("@firebase/app"),Rp="@firebase/app-compat",Np="@firebase/analytics-compat",Ap="@firebase/analytics",Pp="@firebase/app-check-compat",Op="@firebase/app-check",Dp="@firebase/auth",Mp="@firebase/auth-compat",kp="@firebase/database",Fp="@firebase/data-connect",Lp="@firebase/database-compat",Bp="@firebase/functions",Wp="@firebase/functions-compat",Hp="@firebase/installations",Up="@firebase/installations-compat",Vp="@firebase/messaging",$p="@firebase/messaging-compat",jp="@firebase/performance",Gp="@firebase/performance-compat",Kp="@firebase/remote-config",zp="@firebase/remote-config-compat",qp="@firebase/storage",Yp="@firebase/storage-compat",Qp="@firebase/firestore",Jp="@firebase/vertexai",Xp="@firebase/firestore-compat",Zp="firebase",e_="11.4.0";/**
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
 */const gr="[DEFAULT]",t_={[_r]:"fire-core",[Rp]:"fire-core-compat",[Ap]:"fire-analytics",[Np]:"fire-analytics-compat",[Op]:"fire-app-check",[Pp]:"fire-app-check-compat",[Dp]:"fire-auth",[Mp]:"fire-auth-compat",[kp]:"fire-rtdb",[Fp]:"fire-data-connect",[Lp]:"fire-rtdb-compat",[Bp]:"fire-fn",[Wp]:"fire-fn-compat",[Hp]:"fire-iid",[Up]:"fire-iid-compat",[Vp]:"fire-fcm",[$p]:"fire-fcm-compat",[jp]:"fire-perf",[Gp]:"fire-perf-compat",[Kp]:"fire-rc",[zp]:"fire-rc-compat",[qp]:"fire-gcs",[Yp]:"fire-gcs-compat",[Qp]:"fire-fst",[Xp]:"fire-fst-compat",[Jp]:"fire-vertex","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
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
 */const $s=new Map,n_=new Map,mr=new Map;function vl(t,e){try{t.container.addComponent(e)}catch(n){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(mr.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;mr.set(e,t);for(const n of $s.values())vl(n,t);for(const n of n_.values())vl(n,t);return!0}function s_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function i_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new Ic("app","Firebase",r_);/**
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
 */class o_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
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
 */const l_=e_;function Ac(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:gr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Et.create("bad-app-name",{appName:String(i)});if(n||(n=wc()),!n)throw Et.create("no-options");const r=$s.get(i);if(r){if(Vs(n,r.options)&&Vs(s,r.config))return r;throw Et.create("duplicate-app",{appName:i})}const o=new up(i);for(const a of mr.values())o.addComponent(a);const l=new o_(n,s,o);return $s.set(i,l),l}function a_(t=gr){const e=$s.get(t);if(!e&&t===gr&&wc())return Ac();if(!e)throw Et.create("no-app",{appName:t});return e}function rn(t,e,n){var s;let i=(s=t_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(l.join(" "));return}js(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const c_="firebase-heartbeat-database",u_=1,Xn="firebase-heartbeat-store";let ji=null;function Pc(){return ji||(ji=wp(c_,u_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Et.create("idb-open",{originalErrorMessage:t.message})})),ji}async function h_(t){try{const n=(await Pc()).transaction(Xn),s=await n.objectStore(Xn).get(Oc(t));return await n.done,s}catch(e){if(e instanceof cs)ut.warn(e.message);else{const n=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(n.message)}}}async function Cl(t,e){try{const s=(await Pc()).transaction(Xn,"readwrite");await s.objectStore(Xn).put(e,Oc(t)),await s.done}catch(n){if(n instanceof cs)ut.warn(n.message);else{const s=Et.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ut.warn(s.message)}}}function Oc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const f_=1024,d_=30;class p_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>d_){const o=m_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ut.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bl(),{heartbeatsToSend:s,unsentEntries:i}=__(this._heartbeatsCache.heartbeats),r=Hs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ut.warn(n),""}}}function bl(){return new Date().toISOString().substring(0,10)}function __(t,e=f_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),El(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),El(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class g_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jd()?Xd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function El(t){return Hs(JSON.stringify({version:2,heartbeats:t})).length}function m_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function y_(t){js(new Jn("platform-logger",e=>new Tp(e),"PRIVATE")),js(new Jn("heartbeat",e=>new p_(e),"PRIVATE")),rn(_r,yl,t),rn(_r,yl,"esm2017"),rn("fire-js","")}y_("");var v_="firebase",C_="11.4.0";/**
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
 */rn(v_,C_,"app");var wl={};const Sl="@firebase/database",Il="1.0.13";/**
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
 */let Dc="";function b_(t){Dc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E_(e)}}catch{}return new w_},Bt=Mc("localStorage"),S_=Mc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new xc("@firebase/database"),I_=function(){let t=1;return function(){return t++}}(),kc=function(t){const e=op(t),n=new rp;n.update(e);const s=n.digest();return Qr.encodeByteArray(s)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=us.apply(null,s):typeof s=="object"?e+=fe(s):e+=s,e+=" "}return e};let Wn=null,Tl=!0;const T_=function(t,e){E(!0,"Can't turn on custom loggers persistently."),on.logLevel=se.VERBOSE,Wn=on.log.bind(on)},Ce=function(...t){if(Tl===!0&&(Tl=!1,Wn===null&&S_.get("logging_enabled")===!0&&T_()),Wn){const e=us.apply(null,t);Wn(e)}},hs=function(t){return function(...e){Ce(t,...e)}},yr=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);on.error(e)},ht=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw on.error(e),new Error(e)},Ae=function(...t){const e="FIREBASE WARNING: "+us(...t);on.warn(e)},x_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},R_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},un="[MIN_NAME]",jt="[MAX_NAME]",_n=function(t,e){if(t===e)return 0;if(t===un||e===jt)return-1;if(e===un||t===jt)return 1;{const n=xl(t),s=xl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},N_=function(t,e){return t===e?0:t<e?-1:1},Sn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},Zr=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=fe(e[s]),n+=":",n+=Zr(t[e[s]]);return n+="}",n},Lc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bc=function(t){E(!Fc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},A_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function O_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const D_=new RegExp("^-?(0*)\\d{1,10}$"),M_=-2147483648,k_=2147483647,xl=function(t){if(D_.test(t)){const e=Number(t);if(e>=M_&&e<=k_)return e}return null},gn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ae("Exception was thrown by user callback.",n),e},Math.floor(0))}},F_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class L_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,i_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ae(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ae(e)}}class Ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ns.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="5",Wc="v",Hc="s",Uc="r",Vc="f",$c=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jc="ls",Gc="p",vr="ac",Kc="websocket",zc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function W_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Yc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===Kc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W_(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={},Ki={};function to(t){const e=t.toString();return Gi[e]||(Gi[e]=new H_),Gi[e]}function U_(t,e){const n=t.toString();return Ki[n]||(Ki[n]=e()),Ki[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&gn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="start",$_="close",j_="pLPCommand",G_="pRTLPCB",Qc="id",Jc="pw",Xc="ser",K_="cb",z_="seg",q_="ts",Y_="d",Q_="dframe",Zc=1870,eu=30,J_=Zc-eu,X_=25e3,Z_=3e4;class en{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hs(e),this.stats_=to(n),this.urlFn=a=>(this.appCheckToken&&(a[vr]=this.appCheckToken),Yc(n,zc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new V_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Z_)),R_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new no((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rl)this.id=l,this.password=a;else if(o===$_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Rl]="t",s[Xc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[K_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wc]=eo,this.transportSessionId&&(s[Hc]=this.transportSessionId),this.lastSessionId&&(s[jc]=this.lastSessionId),this.applicationId&&(s[Gc]=this.applicationId),this.appCheckToken&&(s[vr]=this.appCheckToken),typeof location<"u"&&location.hostname&&$c.test(location.hostname)&&(s[Uc]=Vc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){en.forceAllow_=!0}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){return en.forceAllow_?!0:!en.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!A_()&&!P_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cc(n),i=Lc(s,J_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Q_]="t",s[Qc]=e,s[Jc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class no{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=I_(),window[j_+this.uniqueCallbackIdentifier]=e,window[G_+this.uniqueCallbackIdentifier]=n,this.myIFrame=no.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qc]=this.myID,e[Jc]=this.myPW,e[Xc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eu+s.length<=Zc;){const o=this.pendingSegs.shift();s=s+"&"+z_+i+"="+o.seg+"&"+q_+i+"="+o.ts+"&"+Y_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(X_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=16384,tg=45e3;let Gs=null;typeof MozWebSocket<"u"?Gs=MozWebSocket:typeof WebSocket<"u"&&(Gs=WebSocket);class We{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hs(this.connId),this.stats_=to(n),this.connURL=We.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Wc]=eo,typeof location<"u"&&location.hostname&&$c.test(location.hostname)&&(o[Uc]=Vc),n&&(o[Hc]=n),s&&(o[jc]=s),i&&(o[vr]=i),r&&(o[Gc]=r),Yc(e,Kc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bt.set("previous_websocket_failure",!0);try{let s;Qd(),this.mySock=new Gs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Gs!==null&&!We.forceDisallow_}static previouslyFailed(){return Bt.isInMemoryStorage||Bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Qn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lc(n,eg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2;We.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{static get ALL_TRANSPORTS(){return[en,We]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=We&&We.isAvailable();let s=n&&!We.previouslyFailed();if(e.webSocketOnly&&(n||Ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[We];else{const i=this.transports_=[];for(const r of Zn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Zn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=6e4,sg=5e3,ig=10*1024,rg=100*1024,zi="t",Nl="d",og="s",Al="r",lg="e",Pl="o",Ol="a",Dl="n",Ml="p",ag="h";class cg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hs("c:"+this.id+":"),this.transportManager_=new Zn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Hn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ig?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zi in e){const n=e[zi];n===Ol?this.upgradeIfSecondaryHealthy_():n===Al?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Sn("t",e),s=Sn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ml,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ol,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Sn("t",e),s=Sn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Sn(zi,e);if(Nl in e){const s=e[Nl];if(n===ag){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Dl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===og?this.onConnectionShutdown_(s):n===Al?this.onReset_(s):n===lg?yr("Server Error: "+s):n===Pl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),eo!==s&&Ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Hn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ng))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ml,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends nu{static getInstance(){return new Ks}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=32,Fl=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new Z("")}function k(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function It(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function su(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ug(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function iu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ru(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Ie(t,e){const n=k(t),s=k(e);if(n===null)return e;if(n===s)return Ie(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function so(t,e){if(It(t)!==It(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ue(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(It(t)>It(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class hg{constructor(e,n){this.errorPrefix_=n,this.parts_=iu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=mi(this.parts_[s]);ou(this)}}function fg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=mi(e),ou(t)}function dg(t){const e=t.parts_.pop();t.byteLength_-=mi(e),t.parts_.length>0&&(t.byteLength_-=1)}function ou(t){if(t.byteLength_>Fl)throw new Error(t.errorPrefix_+"has a key path longer than "+Fl+" bytes ("+t.byteLength_+").");if(t.parts_.length>kl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kl+") or object contains a cycle "+Lt(t))}function Lt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends nu{static getInstance(){return new io}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=1e3,pg=60*5*1e3,Ll=30*1e3,_g=1.3,gg=3e4,mg="server_kill",Bl=3;class ct extends tu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ct.nextPersistentConnectionId_++,this.log_=hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=In,this.maxReconnectDelay_=pg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");io.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ks.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(fe(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new gi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ct.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const s=cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ll)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=np(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yr("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gg&&(this.reconnectDelay_=In),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_g)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new cg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ae(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(mg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ae(h),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dl(this.interruptReasons_)&&(this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Zr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bl&&(this.reconnectDelay_=Ll,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Dc.replace(/\./g,"-")]=1,Sc()?e["framework.cordova"]=1:Yd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ks.getInstance().currentlyOnline();return dl(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(un,e),i=new F(un,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class lu extends yi{static get __EMPTY_NODE(){return Es}static set __EMPTY_NODE(e){Es=e}compare(e,n){return _n(e.name,n.name)}isDefinedOn(e){throw dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(jt,Es)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Es)}toString(){return".key"}}const ln=new lu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Ne.EMPTY_NODE,this.right=r??Ne.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class yg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,n=Ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ws(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ws(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ws(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new yg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t,e){return _n(t.name,e.name)}function ro(t,e){return _n(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;function Cg(t){Cr=t}const au=function(t){return typeof t=="number"?"number:"+Bc(t):"string:"+t},cu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else E(t===Cr||t.isEmpty(),"priority of unexpected type.");E(t===Cr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;class pe{static set __childrenNodeConstructor(e){Wl=e}static get __childrenNodeConstructor(){return Wl}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:k(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=k(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||It(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+au(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bc(this.value_):e+=this.value_,this.lazyHash_=kc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu,hu;function bg(t){uu=t}function Eg(t){hu=t}class wg extends yi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(jt,new pe("[PRIORITY-POST]",hu))}makePost(e,n){const s=uu(e);return new F(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new wg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=Math.log(2);class Ig{constructor(e){const n=r=>parseInt(Math.log(r)/Sg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const _=parseInt(u/2,10)+a,b=i(a,_),x=i(_+1,c);return h=t[_],d=n?n(h):h,new _e(d,h.node,_e.BLACK,b,x)}},r=function(a){let c=null,u=null,h=t.length;const d=function(b,x){const B=h-b,W=h;h-=b;const Y=i(B+1,W),Q=t[B],N=n?n(Q):Q;_(new _e(N,Q.node,x,null,Y))},_=function(b){c?(c.left=b,c=b):(u=b,c=b)};for(let b=0;b<a.count;++b){const x=a.nextBitIsOne(),B=Math.pow(2,a.count-(b+1));x?d(B,_e.BLACK):(d(B,_e.BLACK),d(B,_e.RED))}return u},o=new Ig(t.length),l=r(o);return new Ne(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;const Jt={};class at{static get Default(){return E(Jt&&oe,"ChildrenNode.ts has not been loaded"),qi=qi||new at({".priority":Jt},{".priority":oe}),qi}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ne?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=zs(s,e.getCompare()):l=Jt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new at(u,c)}addToIndexes(e,n){const s=Us(this.indexes_,(i,r)=>{const o=cn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Jt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),zs(l,o.getCompare())}else return Jt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new at(s,this.indexSet_)}removeFromIndexes(e,n){const s=Us(this.indexes_,i=>{if(i===Jt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new at(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class P{static get EMPTY_NODE(){return Tn||(Tn=new P(new Ne(ro),null,at.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Tn:n}}getChild(e){const n=k(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=k(e);if(s===null)return n;{E(k(e)!==".priority"||It(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+au(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fs?-1:0}withIndex(e){if(e===ln||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ln?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tg extends P{constructor(){super(new Ne(ro),P.EMPTY_NODE,at.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const fs=new Tg;Object.defineProperties(F,{MIN:{value:new F(un,P.EMPTY_NODE)},MAX:{value:new F(jt,fs)}});lu.__EMPTY_NODE=P.EMPTY_NODE;pe.__childrenNodeConstructor=P;Cg(fs);Eg(fs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=!0;function ge(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,ge(e))}if(!(t instanceof Array)&&xg){const n=[];let s=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=zs(n,vg,o=>o.name,ro);if(s){const o=zs(n,oe.getCompare());return new P(r,ge(e),new at({".priority":o},{".priority":oe}))}else return new P(r,ge(e),at.Default)}else{let n=P.EMPTY_NODE;return Pe(t,(s,i)=>{if(dt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}bg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends yi{constructor(e){super(),this.indexPath_=e,E(!L(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}makePost(e,n){const s=ge(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,fs);return new F(jt,e)}toString(){return iu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends yi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_n(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ge(e);return new F(n,s)}toString(){return".value"}}const Ag=new Ng;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){return{type:"value",snapshotNode:t}}function hn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function es(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ts(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Pg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(es(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(hn(n,s)):o.trackChildChange(ts(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(es(i,r))}),n.isLeafNode()||n.forEachChild(oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ts(i,r,o))}else s.trackChildChange(hn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.indexedFilter_=new oo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ns.getStartPost_(e),this.endPost_=ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ts(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(es(n,h));const x=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(hn(d.name,d.node)),x.updateImmediateChild(d.name,d.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(es(c.name,c.node)),r.trackChildChange(hn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:un}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new lo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dg(t){return t.loadsAllData()?new oo(t.getIndex()):t.hasLimit()?new Og(t):new ns(t)}function Hl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===Ag?n="$value":t.index_===ln?n="$key":(E(t.index_ instanceof Rg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ul(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends tu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=hs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=qs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Hl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),cn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=qs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Hl(e._queryParams),s=e._path.toString(),i=new gi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ip(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Qn(l.responseText)}catch{Ae("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ae("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){return{value:null,children:new Map}}function du(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=k(e);t.children.has(s)||t.children.set(s,Ys());const i=t.children.get(s);e=ie(e),du(i,e,n)}}function br(t,e,n){t.value!==null?n(e,t.value):kg(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);br(i,r,n)})}function kg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=10*1e3,Lg=30*1e3,Bg=5*60*1e3;class Wg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Fg(e);const s=Vl+(Lg-Vl)*Math.random();Hn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Pe(e,(i,r)=>{r>0&&dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Hn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Bg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function pu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ao(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function co(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ve.ACK_USER_WRITE,this.source=pu()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Qs(G(),n,this.revert)}}else return E(k(this.path)===e,"operationForChild called for unrelated child."),new Qs(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new ss(this.source,G()):new ss(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ve.OVERWRITE}operationForChild(e){return L(this.path)?new Gt(this.source,G(),this.snap.getImmediateChild(e)):new Gt(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ve.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new Gt(this.source,G(),n.value):new is(this.source,G(),n)}else return E(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new is(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ug(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Pg(o.childName,o.snapshotNode))}),xn(t,i,"child_removed",e,s,n),xn(t,i,"child_added",e,s,n),xn(t,i,"child_moved",r,s,n),xn(t,i,"child_changed",e,s,n),xn(t,i,"value",e,s,n),i}function xn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>$g(t,l,a)),o.forEach(l=>{const a=Vg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Vg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $g(t,e,n){if(e.childName==null||n.childName==null)throw dn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e){return{eventCache:t,serverCache:e}}function Un(t,e,n,s){return vi(new Tt(e,n,s),t.serverCache)}function _u(t,e,n,s){return vi(t.eventCache,new Tt(e,n,s))}function Js(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi;const jg=()=>(Yi||(Yi=new Ne(N_)),Yi);class re{static fromObject(e){let n=new re(null);return Pe(e,(s,i)=>{n=n.set(new Z(s),i)}),n}constructor(e,n=jg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(L(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=k(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(L(e))return new re(n,this.children);{const s=k(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=k(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=k(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(L(e))return n;{const s=k(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),de(n,i),s):new re(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new re(null))}}function Vn(t,e,n){if(L(e))return new Ge(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ie(i,e);return r=r.updateChild(o,n),new Ge(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Ge(r)}}}function $l(t,e,n){let s=t;return Pe(n,(i,r)=>{s=Vn(s,de(e,i),r)}),s}function jl(t,e){if(L(e))return Ge.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Ge(n)}}function Er(t,e){return qt(t,e)!=null}function qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ie(n.path,e)):null}function Gl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function wt(t,e){if(L(e))return t;{const n=qt(t,e);return n!=null?new Ge(new re(n)):new Ge(t.writeTree_.subtree(e))}}function wr(t){return t.writeTree_.isEmpty()}function fn(t,e){return gu(G(),t.writeTree_,e)}function gu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=gu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e){return Cu(e,t)}function Gg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Vn(t.visibleWrites,e,n)),t.lastWriteId=s}function Kg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&qg(l,s.path)?i=!1:Ue(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Yg(t),!0;if(s.snap)t.visibleWrites=jl(t.visibleWrites,s.path);else{const l=s.children;Pe(l,a=>{t.visibleWrites=jl(t.visibleWrites,de(s.path,a))})}return!0}else return!1}function qg(t,e){if(t.snap)return Ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ue(de(t.path,n),e))return!0;return!1}function Yg(t){t.visibleWrites=mu(t.allWrites,Qg,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Qg(t){return t.visible}function mu(t,e,n){let s=Ge.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ue(n,o)?(l=Ie(n,o),s=Vn(s,l,r.snap)):Ue(o,n)&&(l=Ie(o,n),s=Vn(s,G(),r.snap.getChild(l)));else if(r.children){if(Ue(n,o))l=Ie(n,o),s=$l(s,l,r.children);else if(Ue(o,n))if(l=Ie(o,n),L(l))s=$l(s,G(),r.children);else{const a=cn(r.children,k(l));if(a){const c=a.getChild(ie(l));s=Vn(s,G(),c)}}}else throw dn("WriteRecord should have .snap or .children")}}return s}function yu(t,e,n,s,i){if(!s&&!i){const r=qt(t.visibleWrites,e);if(r!=null)return r;{const o=wt(t.visibleWrites,e);if(wr(o))return n;if(n==null&&!Er(o,G()))return null;{const l=n||P.EMPTY_NODE;return fn(o,l)}}}else{const r=wt(t.visibleWrites,e);if(!i&&wr(r))return n;if(!i&&n==null&&!Er(r,G()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ue(c.path,e)||Ue(e,c.path))},l=mu(t.allWrites,o,e),a=n||P.EMPTY_NODE;return fn(l,a)}}}function Jg(t,e,n){let s=P.EMPTY_NODE;const i=qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=wt(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=fn(wt(r,new Z(o)),l);s=s.updateImmediateChild(o,a)}),Gl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=wt(t.visibleWrites,e);return Gl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Xg(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(Er(t.visibleWrites,r))return null;{const o=wt(t.visibleWrites,r);return wr(o)?i.getChild(n):fn(o,i.getChild(n))}}function Zg(t,e,n,s){const i=de(e,n),r=qt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=wt(t.visibleWrites,i);return fn(o,s.getNode().getImmediateChild(n))}else return null}function em(t,e){return qt(t.visibleWrites,e)}function tm(t,e,n,s,i,r,o){let l;const a=wt(t.visibleWrites,e),c=qt(a,G());if(c!=null)l=c;else if(n!=null)l=fn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function nm(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function Xs(t,e,n,s){return yu(t.writeTree,t.treePath,e,n,s)}function uo(t,e){return Jg(t.writeTree,t.treePath,e)}function Kl(t,e,n,s){return Xg(t.writeTree,t.treePath,e,n,s)}function Zs(t,e){return em(t.writeTree,de(t.treePath,e))}function sm(t,e,n,s,i,r){return tm(t.writeTree,t.treePath,e,n,s,i,r)}function ho(t,e,n){return Zg(t.writeTree,t.treePath,e,n)}function vu(t,e){return Cu(de(t.treePath,e),t.writeTree)}function Cu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ts(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,es(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,hn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ts(s,e.snapshotNode,i.oldSnap));else throw dn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bu=new rm;class fo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ho(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kt(this.viewCache_),r=sm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){return{filter:t}}function lm(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function am(t,e,n,s,i){const r=new im;let o,l;if(n.type===Ve.OVERWRITE){const c=n;c.source.fromUser?o=Sr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=ei(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ve.MERGE){const c=n;c.source.fromUser?o=um(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ir(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ve.ACK_USER_WRITE){const c=n;c.revert?o=dm(t,e,c.path,s,i,r):o=hm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ve.LISTEN_COMPLETE)o=fm(t,e,n.path,s,r);else throw dn("Unknown operation type: "+n.type);const a=r.getChanges();return cm(e,o,a),{viewCache:o,changes:a}}function cm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Js(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(fu(Js(e)))}}function Eu(t,e,n,s,i,r){const o=e.eventCache;if(Zs(s,n)!=null)return e;{let l,a;if(L(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Kt(e),u=c instanceof P?c:P.EMPTY_NODE,h=uo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Xs(s,Kt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(n);if(c===".priority"){E(It(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Kl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Kl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ho(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Un(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function ei(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=k(n);if(!a.isCompleteForPath(n)&&It(n)>1)return e;const b=ie(n),B=a.getNode().getImmediateChild(_).updateChild(b,s);_===".priority"?c=u.updatePriority(a.getNode(),B):c=u.updateChild(a.getNode(),_,B,b,bu,null)}const h=_u(e,c,a.isFullyInitialized()||L(n),u.filtersNodes()),d=new fo(i,h,r);return Eu(t,h,n,i,d,l)}function Sr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new fo(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Un(e,c,!0,t.filter.filtersNodes());else{const h=k(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Un(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ie(n),_=l.getNode().getImmediateChild(h);let b;if(L(d))b=s;else{const x=u.getCompleteChild(h);x!=null?su(d)===".priority"&&x.getChild(ru(d)).isEmpty()?b=x:b=x.updateChild(d,s):b=P.EMPTY_NODE}if(_.equals(b))a=e;else{const x=t.filter.updateChild(l.getNode(),h,b,d,u,o);a=Un(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function zl(t,e){return t.eventCache.isCompleteForChild(e)}function um(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=de(n,a);zl(e,k(u))&&(l=Sr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=de(n,a);zl(e,k(u))||(l=Sr(t,l,u,c,i,r,o))}),l}function ql(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ir(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),b=ql(t,_,d);a=ei(t,a,new Z(h),b,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const b=e.serverCache.getNode().getImmediateChild(h),x=ql(t,b,d);a=ei(t,a,new Z(h),x,i,r,o,l)}}),a}function hm(t,e,n,s,i,r,o){if(Zs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ei(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new re(null);return a.getNode().forEachChild(ln,(u,h)=>{c=c.set(new Z(u),h)}),Ir(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=de(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Ir(t,e,n,c,i,r,l,o)}}function fm(t,e,n,s,i){const r=e.serverCache,o=_u(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Eu(t,o,n,s,bu,i)}function dm(t,e,n,s,i,r){let o;if(Zs(s,n)!=null)return e;{const l=new fo(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||k(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xs(s,Kt(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=uo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=k(n);let h=ho(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xs(s,Kt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zs(s,G())!=null,Un(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new oo(s.getIndex()),r=Dg(s);this.processor_=om(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new Tt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Tt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=vi(h,u),this.eventGenerator_=new Hg(this.query_)}get query(){return this.query_}}function _m(t){return t.viewCache_.serverCache.getNode()}function gm(t){return Js(t.viewCache_)}function mm(t,e){const n=Kt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(k(e)).isEmpty())?n.getChild(e):null}function Yl(t){return t.eventRegistrations_.length===0}function ym(t,e){t.eventRegistrations_.push(e)}function Ql(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Jl(t,e,n,s){e.type===Ve.MERGE&&e.source.queryId!==null&&(E(Kt(t.viewCache_),"We should always have a full cache before handling merges"),E(Js(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=am(t.processor_,i,e,n,s);return lm(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,wu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function vm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(hn(r,o))}),n.isFullyInitialized()&&s.push(fu(n.getNode())),wu(t,s,n.getNode(),e)}function wu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ug(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;class Su{constructor(){this.views=new Map}}function Cm(t){E(!ti,"__referenceConstructor has already been defined"),ti=t}function bm(){return E(ti,"Reference.ts has not been loaded"),ti}function Em(t){return t.views.size===0}function po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Jl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Jl(o,e,n,s));return r}}function Iu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Xs(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=uo(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=vi(new Tt(l,a,!1),new Tt(s,i,!1));return new pm(e,c)}return o}function wm(t,e,n,s,i,r){const o=Iu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ym(o,n),vm(o,n)}function Sm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=xt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ql(c,n,s)),Yl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ql(a,n,s)),Yl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!xt(t)&&r.push(new(bm())(e._repo,e._path)),{removed:r,events:o}}function Tu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function St(t,e){let n=null;for(const s of t.views.values())n=n||mm(s,e);return n}function xu(t,e){if(e._queryParams.loadsAllData())return bi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ru(t,e){return xu(t,e)!=null}function xt(t){return bi(t)!=null}function bi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;function Im(t){E(!ni,"__referenceConstructor has already been defined"),ni=t}function Tm(){return E(ni,"Reference.ts has not been loaded"),ni}let xm=1;class Xl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=nm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nu(t,e,n,s,i){return Gg(t.pendingWriteTree_,e,n,s,i),i?ps(t,new Gt(pu(),e,n)):[]}function Wt(t,e,n=!1){const s=Kg(t.pendingWriteTree_,e);if(zg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(G(),!0):Pe(s.children,o=>{r=r.set(new Z(o),!0)}),ps(t,new Qs(s.path,r,n))}else return[]}function ds(t,e,n){return ps(t,new Gt(ao(),e,n))}function Rm(t,e,n){const s=re.fromObject(n);return ps(t,new is(ao(),e,s))}function Nm(t,e){return ps(t,new ss(ao(),e))}function Am(t,e,n){const s=go(t,n);if(s){const i=mo(s),r=i.path,o=i.queryId,l=Ie(r,e),a=new ss(co(o),l);return yo(t,r,a)}else return[]}function si(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ru(o,e))){const a=Sm(o,e,n,s);Em(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>xt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Dm(d);for(let b=0;b<_.length;++b){const x=_[b],B=x.query,W=Du(t,x);t.listenProvider_.startListening($n(B),rs(t,B),W.hashFn,W.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening($n(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Ei(d));t.listenProvider_.stopListening($n(d),_)}))}Mm(t,c)}return l}function Au(t,e,n,s){const i=go(t,s);if(i!=null){const r=mo(i),o=r.path,l=r.queryId,a=Ie(o,e),c=new Gt(co(l),a,n);return yo(t,o,c)}else return[]}function Pm(t,e,n,s){const i=go(t,s);if(i){const r=mo(i),o=r.path,l=r.queryId,a=Ie(o,e),c=re.fromObject(n),u=new is(co(l),a,c);return yo(t,o,u)}else return[]}function Tr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const b=Ie(d,i);r=r||St(_,b),o=o||xt(_)});let l=t.syncPointTree_.get(i);l?(o=o||xt(l),r=r||St(l,G())):(l=new Su,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,b)=>{const x=St(b,G());x&&(r=r.updateImmediateChild(_,x))}));const c=Ru(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ei(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=km();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Ci(t.pendingWriteTree_,i);let h=wm(l,e,n,u,r,a);if(!c&&!o&&!s){const d=xu(l,e);h=h.concat(Fm(t,e,d))}return h}function _o(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ie(o,e),c=St(l,a);if(c)return c});return yu(i,e,r,n,!0)}function Om(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ie(c,n);s=s||St(u,h)});let i=t.syncPointTree_.get(n);i?s=s||St(i,G()):(i=new Su,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Tt(s,!0,!1):null,l=Ci(t.pendingWriteTree_,e._path),a=Iu(i,e,l,r?o.getNode():P.EMPTY_NODE,r);return gm(a)}function ps(t,e){return Pu(e,t.syncPointTree_,null,Ci(t.pendingWriteTree_,G()))}function Pu(t,e,n,s){if(L(t.path))return Ou(t,e,n,s);{const i=e.get(G());n==null&&i!=null&&(n=St(i,G()));let r=[];const o=k(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=vu(s,o);r=r.concat(Pu(l,a,c,u))}return i&&(r=r.concat(po(i,t,s,n))),r}}function Ou(t,e,n,s){const i=e.get(G());n==null&&i!=null&&(n=St(i,G()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=vu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ou(u,l,a,c)))}),i&&(r=r.concat(po(i,t,s,n))),r}function Du(t,e){const n=e.query,s=rs(t,n);return{hashFn:()=>(_m(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Am(t,n._path,s):Nm(t,n._path);{const r=O_(i,n);return si(t,n,null,r)}}}}function rs(t,e){const n=Ei(e);return t.queryToTagMap.get(n)}function Ei(t){return t._path.toString()+"$"+t._queryIdentifier}function go(t,e){return t.tagToQueryMap.get(e)}function mo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function yo(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Ci(t.pendingWriteTree_,e);return po(s,n,i,null)}function Dm(t){return t.fold((e,n,s)=>{if(n&&xt(n))return[bi(n)];{let i=[];return n&&(i=Tu(n)),Pe(s,(r,o)=>{i=i.concat(o)}),i}})}function $n(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Tm())(t._repo,t._path):t}function Mm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ei(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function km(){return xm++}function Fm(t,e,n){const s=e._path,i=rs(t,e),r=Du(t,n),o=t.listenProvider_.startListening($n(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!L(c)&&u&&xt(u))return[bi(u).query];{let d=[];return u&&(d=d.concat(Tu(u).map(_=>_.query))),Pe(h,(_,b)=>{d=d.concat(b)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening($n(u),rs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vo(n)}node(){return this.node_}}class Co{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Co(this.syncTree_,n)}node(){return _o(this.syncTree_,this.path_)}}const Lm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Bm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Wm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Bm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Wm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Hm=function(t,e,n,s){return bo(e,new Co(n,t),s)},Mu=function(t,e,n){return bo(t,new vo(e),n)};function bo(t,e,n){const s=t.getPriority().val(),i=Zl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Zl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(oe,(l,a)=>{const c=bo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function wo(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=k(n);for(;i!==null;){const r=cn(s.node.children,i)||{children:{},childCount:0};s=new Eo(i,s,r),n=ie(n),i=k(n)}return s}function mn(t){return t.node.value}function ku(t,e){t.node.value=e,xr(t)}function Fu(t){return t.node.childCount>0}function Um(t){return mn(t)===void 0&&!Fu(t)}function wi(t,e){Pe(t.node.children,(n,s)=>{e(new Eo(n,t,s))})}function Lu(t,e,n,s){n&&e(t),wi(t,i=>{Lu(i,e,!0)})}function Vm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _s(t){return new Z(t.parent===null?t.name:_s(t.parent)+"/"+t.name)}function xr(t){t.parent!==null&&$m(t.parent,t.name,t)}function $m(t,e,n){const s=Um(n),i=dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,xr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=/[\[\].#$\/\u0000-\u001F\u007F]/,Gm=/[\[\].#$\u0000-\u001F\u007F]/,Qi=10*1024*1024,Bu=function(t){return typeof t=="string"&&t.length!==0&&!jm.test(t)},Wu=function(t){return typeof t=="string"&&t.length!==0&&!Gm.test(t)},Km=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wu(t)},zm=function(t,e,n,s){So(Jr(t,"value"),e,n)},So=function(t,e,n){const s=n instanceof Z?new hg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Lt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Lt(s)+" with contents = "+e.toString());if(Fc(e))throw new Error(t+"contains "+e.toString()+" "+Lt(s));if(typeof e=="string"&&e.length>Qi/3&&mi(e)>Qi)throw new Error(t+"contains a string greater than "+Qi+" utf8 bytes "+Lt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Pe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Bu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Lt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fg(s,o),So(t,l,s),dg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Lt(s)+" in addition to actual children.")}},Hu=function(t,e,n,s){if(!Wu(n))throw new Error(Jr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hu(t,e,n)},Ym=function(t,e){if(k(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Qm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Km(n))throw new Error(Jr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Io(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!so(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Uu(t,e,n){Io(t,n),Vu(t,s=>so(s,e))}function nt(t,e,n){Io(t,n),Vu(t,s=>Ue(s,e)||Ue(e,s))}function Vu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Xm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Xm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Wn&&Ce("event: "+n.toString()),gn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="repo_interrupt",ey=25;class ty{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ys(),this.transactionQueueTree_=new Eo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ny(t,e,n){if(t.stats_=to(t.repoInfo_),t.forceRestClient_||F_())t.server_=new qs(t.repoInfo_,(s,i,r,o)=>{ea(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ta(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ct(t.repoInfo_,e,(s,i,r,o)=>{ea(t,s,i,r,o)},s=>{ta(t,s)},s=>{iy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=U_(t.repoInfo_,()=>new Wg(t.stats_,t.server_)),t.infoData_=new Mg,t.infoSyncTree_=new Xl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ds(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xo(t,"connected",!1),t.serverSyncTree_=new Xl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function sy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function To(t){return Lm({timestamp:sy(t)})}function ea(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Us(n,c=>ge(c));o=Pm(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=Au(t.serverSyncTree_,r,a,i)}else if(s){const a=Us(n,c=>ge(c));o=Rm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=ds(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ii(t,r)),nt(t.eventQueue_,l,o)}function ta(t,e){xo(t,"connected",e),e===!1&&ly(t)}function iy(t,e){Pe(e,(n,s)=>{xo(t,n,s)})}function xo(t,e,n){const s=new Z("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=ds(t.infoSyncTree_,s,i);nt(t.eventQueue_,s,r)}function $u(t){return t.nextWriteId_++}function ry(t,e,n){const s=Om(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());Tr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ds(t.serverSyncTree_,e._path,r);else{const l=rs(t.serverSyncTree_,e);o=Au(t.serverSyncTree_,e._path,r,l)}return nt(t.eventQueue_,e._path,o),si(t.serverSyncTree_,e,n,null,!0),r},i=>(Si(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function oy(t,e,n,s,i){Si(t,"set",{path:e.toString(),value:n,priority:s});const r=To(t),o=ge(n,s),l=_o(t.serverSyncTree_,e),a=Mu(o,l,r),c=$u(t),u=Nu(t.serverSyncTree_,e,a,c,!0);Io(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const b=d==="ok";b||Ae("set at "+e+" failed: "+d);const x=Wt(t.serverSyncTree_,c,!b);nt(t.eventQueue_,e,x),hy(t,i,d,_)});const h=qu(t,e);Ii(t,h),nt(t.eventQueue_,h,[])}function ly(t){Si(t,"onDisconnectEvents");const e=To(t),n=Ys();br(t.onDisconnect_,G(),(i,r)=>{const o=Hm(i,r,t.serverSyncTree_,e);du(n,i,o)});let s=[];br(n,G(),(i,r)=>{s=s.concat(ds(t.serverSyncTree_,i,r));const o=qu(t,i);Ii(t,o)}),t.onDisconnect_=Ys(),nt(t.eventQueue_,G(),s)}function ay(t,e,n){let s;k(e._path)===".info"?s=Tr(t.infoSyncTree_,e,n):s=Tr(t.serverSyncTree_,e,n),Uu(t.eventQueue_,e._path,s)}function cy(t,e,n){let s;k(e._path)===".info"?s=si(t.infoSyncTree_,e,n):s=si(t.serverSyncTree_,e,n),Uu(t.eventQueue_,e._path,s)}function uy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zm)}function Si(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function hy(t,e,n,s){e&&gn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ju(t,e,n){return _o(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Ro(t,e=t.transactionQueueTree_){if(e||Ti(t,e),mn(e)){const n=Ku(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fy(t,_s(e),n)}else Fu(e)&&wi(e,n=>{Ro(t,n)})}function fy(t,e,n){const s=n.map(c=>c.currentWriteId),i=ju(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ie(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Si(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Wt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ti(t,wo(t.transactionQueueTree_,e)),Ro(t,t.transactionQueueTree_),nt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)gn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ae("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ii(t,e)}},o)}function Ii(t,e){const n=Gu(t,e),s=_s(n),i=Ku(t,n);return dy(t,i,s),s}function dy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ie(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Wt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ey)u=!0,h="maxretry",i=i.concat(Wt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=ju(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){So("transaction failed: Data returned ",_,a.path);let b=ge(_);typeof _=="object"&&_!=null&&dt(_,".priority")||(b=b.updatePriority(d.getPriority()));const B=a.currentWriteId,W=To(t),Y=Mu(b,d,W);a.currentOutputSnapshotRaw=b,a.currentOutputSnapshotResolved=Y,a.currentWriteId=$u(t),o.splice(o.indexOf(B),1),i=i.concat(Nu(t.serverSyncTree_,a.path,Y,a.currentWriteId,a.applyLocally)),i=i.concat(Wt(t.serverSyncTree_,B,!0))}else u=!0,h="nodata",i=i.concat(Wt(t.serverSyncTree_,a.currentWriteId,!0))}nt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ti(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)gn(s[l]);Ro(t,t.transactionQueueTree_)}function Gu(t,e){let n,s=t.transactionQueueTree_;for(n=k(e);n!==null&&mn(s)===void 0;)s=wo(s,n),e=ie(e),n=k(e);return s}function Ku(t,e){const n=[];return zu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function zu(t,e,n){const s=mn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);wi(e,i=>{zu(t,i,n)})}function Ti(t,e){const n=mn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ku(e,n.length>0?n:void 0)}wi(e,s=>{Ti(t,s)})}function qu(t,e){const n=_s(Gu(t,e)),s=wo(t.transactionQueueTree_,e);return Vm(s,i=>{Ji(t,i)}),Ji(t,s),Lu(s,i=>{Ji(t,i)}),n}function Ji(t,e){const n=mn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ku(e,void 0):n.length=r+1,nt(t.eventQueue_,_s(e),i);for(let o=0;o<s.length;o++)gn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _y(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ae(`Invalid query segment '${n}' in query '${t}'`)}return e}const na=function(t,e){const n=gy(t),s=n.namespace;n.domain==="firebase.com"&&ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Z(n.pathString)}},gy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=py(t.substring(u,h)));const d=_y(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class yy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class No{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:su(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=Ul(this._queryParams),n=Zr(e);return n==="{}"?"default":n}get _queryObject(){return Ul(this._queryParams)}isEqual(e){if(e=pn(e),!(e instanceof No))return!1;const n=this._repo===e._repo,s=so(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ug(this._path)}}class pt extends No{constructor(e,n){super(e,n,new lo,!1)}get parent(){const e=ru(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class os{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=Rr(this.ref,e);return new os(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new os(i,Rr(this.ref,s),oe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function As(t,e){return t=pn(t),t._checkNotDeleted("ref"),e!==void 0?Rr(t._root,e):t._root}function Rr(t,e){return t=pn(t),k(t._path)===null?qm("child","path",e):Hu("child","path",e),new pt(t._repo,de(t._path,e))}function Qu(t,e){t=pn(t),Ym("set",t._path),zm("set",e,t._path);const n=new gi;return oy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ju(t){t=pn(t);const e=new Yu(()=>{}),n=new xi(e);return ry(t._repo,t,n).then(s=>new os(s,new pt(t._repo,t._path),t._queryParams.getIndex()))}class xi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new my("value",this,new os(e.snapshotNode,new pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yy(this,e,n):null}matches(e){return e instanceof xi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vy(t,e,n,s,i){const r=new Yu(n,void 0),o=new xi(r);return ay(t._repo,t,o),()=>cy(t._repo,t,o)}function Xu(t,e,n,s){return vy(t,"value",e)}Cm(pt);Im(pt);/**
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
 */const Cy="FIREBASE_DATABASE_EMULATOR_HOST",Nr={};let by=!1;function Ey(t,e,n,s){t.repoInfo_=new qc(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function wy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=na(r,i),l=o.repoInfo,a;typeof process<"u"&&wl&&(a=wl[Cy]),a?(r=`http://${a}?ns=${l.namespace}`,o=na(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new B_(t.name,t.options,e);Qm("Invalid Firebase Database URL",o),L(o.path)||ht("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Iy(l,t,c,new L_(t,n));return new Ty(u,t)}function Sy(t,e){const n=Nr[e];(!n||n[t.key]!==t)&&ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uy(t),delete n[t.key]}function Iy(t,e,n,s){let i=Nr[e.name];i||(i={},Nr[e.name]=i);let r=i[t.toURLString()];return r&&ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ty(t,by,n,s),i[t.toURLString()]=r,r}class Ty{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ny(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Sy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ht("Cannot call "+e+" on a deleted database.")}}function xy(t=a_(),e){const n=s_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Kd("database");s&&Ry(n,...s)}return n}function Ry(t,e,n,s={}){t=pn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Vs(s,r.repoInfo_.emulatorOptions))return;ht("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ns(Ns.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:zd(s.mockUserToken,t.app.options.projectId);o=new Ns(l)}Ey(r,i,s,o)}/**
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
 */function Ny(t){b_(l_),js(new Jn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),rn(Sl,Il,t),rn(Sl,Il,"esm2017")}ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ny();var Ay={apiKey:"AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",authDomain:"iamwaitingforyou-73.firebaseapp.com",databaseURL:"https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",projectId:"iamwaitingforyou-73",storageBucket:"iamwaitingforyou-73.firebasestorage.app",messagingSenderId:"576527778879",appId:"1:576527778879:web:059f06122df2b01d9a248a",measurementId:"G-62LMJM4Z24"};const Py=Ac(Ay),Ps=xy(Py),Oy={class:"fb-check"},Dy={style:{"font-size":"18px",background:"orange",margin:"16px",padding:"5px"}},My={__name:"FireBaseCheck",setup(t){const e=He(""),n=He(""),s=As(Ps,"guest"),i=He(),r=He("");function o(c){Qu(s,{text:c}).then(()=>{console.log("Данные успешно записаны!"),i.value="Записано!"}).catch(u=>{console.error("Ошибка записи данных: ",u),i.value="Ошибка"})}Xu(s,c=>{r.value=c.val(),console.log("Данные пользователя обновлены:",r.value)});function l(){o(e.value)}function a(){Ju(s).then(c=>{if(c.exists()){const u=c.val();n.value=u,console.log("Данные пользователя:",u)}else console.log("Данные не найдены")}).catch(c=>{console.error("Ошибка чтения данных: ",c)})}return(c,u)=>(Bs(),qr("div",Oy,[u[3]||(u[3]=z("div",{class:"about"},[z("h2",null,"Пишем/Читаем")],-1)),On(z("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h)},null,512),[[Ln,e.value]]),z("button",{onClick:u[1]||(u[1]=h=>l())}," Сохранить"),z("span",null,Is(i.value),1),z("h3",null,Is(n.value),1),z("button",{onClick:u[2]||(u[2]=h=>a())}," Читать"),z("div",Dy,Is(r.value),1)]))}},Zu=kd("fbStore",{state:()=>({list:[]}),actions:{async getField(t){const e=As(Ps,t);return Ju(e).then(n=>{if(n.exists()){const s=n.val();return console.log(">>> Данные пользователя:",s),s}else console.log("Данные не найдены")})},async setField(t,e){const n=As(Ps,t);return Qu(n,{text:e}).then(()=>{console.log("Данные успешно записаны!")}).catch(s=>{console.error("Ошибка записи данных: ",s)})},async updateValue(t){const e=As(Ps,t);return new Promise(n=>{Xu(e,s=>{console.log("Данные обновлены:",s.val()),n(s.val())})})}}}),ky={__name:"KrestikiNoliki",setup(t){const e=Zu(),n=He("");return e.updateValue("guest").then(s=>{n.value=JSON.stringify(s)}),(s,i)=>(Bs(),qr(Be,null,[i[1]||(i[1]=z("h3",null,"Крестики нолики!!!",-1)),On(z("textarea",{"onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r),style:{width:"100%"},placeholder:"данные с сайта"},null,512),[[Ln,n.value]]),i[2]||(i[2]=z("br",null,null,-1)),i[3]||(i[3]=z("br",null,null,-1))],64))}},Fy={__name:"App",setup(t){const e=Zu(),n=He("g1"),s=He(""),i=He(""),r=He("");let o=kh(null);function l(u){switch(u){case 1:o.value=My;break;case 2:o.value=ky;break}}localStorage.getItem("games");function a(){e.getField(n.value||"guest").then(u=>{i.value=JSON.stringify(u)})}function c(){e.setField(n.value,s.value).then(u=>{r.value=JSON.stringify(u)})}return(u,h)=>(Bs(),qr(Be,null,[(Bs(),jf(hf(Aa(o)))),h[7]||(h[7]=lr(" игры ")),z("button",{onClick:h[0]||(h[0]=d=>l(1))},"1"),z("button",{onClick:h[1]||(h[1]=d=>l(2))},"2"),h[8]||(h[8]=z("br",null,null,-1)),h[9]||(h[9]=z("br",null,null,-1)),h[10]||(h[10]=z("hr",null,null,-1)),h[11]||(h[11]=z("h2",{style:{"text-align":"center"}}," Админка",-1)),h[12]||(h[12]=z("h4",null," Чтение (Админка)",-1)),h[13]||(h[13]=lr(" Поле: ")),On(z("input",{"onUpdate:modelValue":h[2]||(h[2]=d=>n.value=d)},null,512),[[Ln,n.value]]),z("button",{onClick:h[3]||(h[3]=d=>a())}," Получить "),h[14]||(h[14]=z("br",null,null,-1)),On(z("textarea",{rows:"7","onUpdate:modelValue":h[4]||(h[4]=d=>i.value=d),style:{width:"98%"}},null,512),[[Ln,i.value]]),h[15]||(h[15]=z("hr",null,null,-1)),h[16]||(h[16]=z("h4",null," Сохранение ",-1)),On(z("textarea",{rows:"2","onUpdate:modelValue":h[5]||(h[5]=d=>s.value=d),placeholder:"текст для сохранения",style:{width:"98%"}},null,512),[[Ln,s.value]]),z("button",{onClick:h[6]||(h[6]=d=>c())}," Сохранить "),h[17]||(h[17]=z("br",null,null,-1))],64))}},Ly=Nd(),eh=Td(Fy);eh.use(Ly);eh.mount("#app");
