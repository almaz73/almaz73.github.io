function $s(t,e){const n=Ks();return $s=function(s,i){return s=s-203,n[s]},$s(t,e)}function Ks(){const t=["supports","href","571128HTckcQ","179058XzvCzl","same-origin","querySelectorAll","relList","2148mVjINo","anonymous","Iswzv","createElement","omit","LAPDx","bCNry","9961040qLPeKr","type","use-credentials","referrerPolicy","10frsIuC","tJKCn","174BUiUGG","jBZSd","25xTJTuL","44572jTxIbD","rel","link","9LMnNcL","integrity","LINK","BkpZb","61243cSyQnu",'link[rel="modulepreload"]',"juIPB","credentials","crossOrigin","ifqjI","2445328GJonSX","LUyHA","5323812eYuqvq"];return Ks=function(){return t},Ks()}(function(t,e){const n=$s,s=t();for(;;)try{if(-parseInt(n(218))/1*(parseInt(n(233))/2)+parseInt(n(214))/3+-parseInt(n(217))/4*(parseInt(n(237))/5)+-parseInt(n(235))/6*(-parseInt(n(206))/7)+-parseInt(n(212))/8*(-parseInt(n(241))/9)+parseInt(n(229))/10+-parseInt(n(238))/11*(parseInt(n(222))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ks,995587),function(){const e=$s,n={tJKCn:function(o,l){return o!==l},VryTJ:"childList",ifqjI:function(o,l){return o===l},bCNry:e(204),juIPB:e(231),KtsfP:"include",xaZhL:function(o,l){return o===l},LUyHA:e(223),jBZSd:e(226),DtVHy:function(o,l,c){return o(l,c)},LAPDx:e(240),dVswl:"modulepreload",Iswzv:e(207),BkpZb:function(o,l){return o(l)}},s=document[e(225)](n[e(227)])[e(221)];if(s&&s[e(215)]&&s[e(215)](n.dVswl))return;for(const o of document[e(220)](n[e(224)]))n[e(205)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(234)](c[l(230)],n.VryTJ))for(const a of c.addedNodes)n[l(211)](a.tagName,n[l(228)])&&a[l(239)]==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(203)]&&(c.integrity=o[l(203)]),o.referrerPolicy&&(c[l(232)]=o[l(232)]),n.ifqjI(o[l(210)],n[l(208)])?c.credentials=n.KtsfP:n.xaZhL(o.crossOrigin,n[l(213)])?c[l(209)]=n[l(236)]:c[l(209)]=l(219),c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=i(o);n.DtVHy(fetch,o[l(216)],c)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},gn=[],ht=()=>{},Wf=()=>!1,Li=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,ho=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bf=Object.prototype.hasOwnProperty,ee=(t,e)=>Bf.call(t,e),H=Array.isArray,mn=t=>Fi(t)==="[object Map]",Bc=t=>Fi(t)==="[object Set]",U=t=>typeof t=="function",xe=t=>typeof t=="string",Ut=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Hc=t=>(_e(t)||U(t))&&U(t.then)&&U(t.catch),Uc=Object.prototype.toString,Fi=t=>Uc.call(t),Hf=t=>Fi(t).slice(8,-1),Vc=t=>Fi(t)==="[object Object]",po=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kn=uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uf=/-(\w)/g,Xe=Wi(t=>t.replace(Uf,(e,n)=>n?n.toUpperCase():"")),Vf=/\B([A-Z])/g,cn=Wi(t=>t.replace(Vf,"-$1").toLowerCase()),Bi=Wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),cr=Wi(t=>t?`on${Bi(t)}`:""),Dt=(t,e)=>!Object.is(t,e),Us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Dr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hl;const Hi=()=>hl||(hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _o(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Kf(s):_o(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(xe(t)||_e(t))return t}const jf=/;(?![^(]*\))/g,Gf=/:([^]+)/,$f=/\/\*[^]*?\*\//g;function Kf(t){const e={};return t.replace($f,"").split(jf).forEach(n=>{if(n){const s=n.split(Gf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xn(t){let e="";if(xe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=xn(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qf=uo(zf);function Gc(t){return!!t||t===""}const $c=t=>!!(t&&t.__v_isRef===!0),Oe=t=>xe(t)?t:t==null?"":H(t)||_e(t)&&(t.toString===Uc||!U(t.toString))?$c(t)?Oe(t.value):JSON.stringify(t,Kc,2):String(t),Kc=(t,e)=>$c(e)?Kc(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ar(s,r)+" =>"]=i,n),{})}:Bc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ar(n))}:Ut(e)?ar(e):_e(e)&&!H(e)&&!Vc(e)?String(e):e,ar=(t,e="")=>{var n;return Ut(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class zc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function qc(t){return new zc(t)}function Yc(){return Me}function Yf(t,e=!1){Me&&Me.cleanups.push(t)}let fe;const ur=new WeakSet;class Qc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&Me.active&&Me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ur.has(this)&&(ur.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dl(this),Zc(this);const e=fe,n=st;fe=this,st=!0;try{return this.fn()}finally{ea(this),fe=e,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xo(e);this.deps=this.depsTail=void 0,dl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ur.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kr(this)&&this.run()}get dirty(){return kr(this)}}let Xc=0,zn,qn;function Jc(t,e=!1){if(t.flags|=8,e){t.next=qn,qn=t;return}t.next=zn,zn=t}function go(){Xc++}function mo(){if(--Xc>0)return;if(qn){let e=qn;for(qn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zn;){let e=zn;for(zn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Zc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ea(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),xo(s),Qf(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function kr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ta(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ta(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===rs))return;t.globalVersion=rs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!kr(t)){t.flags&=-3;return}const n=fe,s=st;fe=t,st=!0;try{Zc(t);const i=t.fn(t._value);(e.version===0||Dt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{fe=n,st=s,ea(t),t.flags&=-3}}function xo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)xo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let st=!0;const na=[];function Vt(){na.push(st),st=!1}function jt(){const t=na.pop();st=t===void 0?!0:t}function dl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=fe;fe=void 0;try{e()}finally{fe=n}}}let rs=0;class Xf{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!fe||!st||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Xf(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,sa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=s)}return n}trigger(e){this.version++,rs++,this.notify(e)}notify(e){go();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{mo()}}}function sa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)sa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zs=new WeakMap,en=Symbol(""),Or=Symbol(""),os=Symbol("");function Ne(t,e,n){if(st&&fe){let s=zs.get(t);s||zs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new yo),i.map=s,i.key=n),i.track()}}function yt(t,e,n,s,i,r){const o=zs.get(t);if(!o){rs++;return}const l=c=>{c&&c.trigger()};if(go(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&po(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,g)=>{(g==="length"||g===os||!Ut(g)&&g>=u)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(os)),e){case"add":c?a&&l(o.get("length")):(l(o.get(en)),mn(t)&&l(o.get(Or)));break;case"delete":c||(l(o.get(en)),mn(t)&&l(o.get(Or)));break;case"set":mn(t)&&l(o.get(en));break}}mo()}function Jf(t,e){const n=zs.get(t);return n&&n.get(e)}function un(t){const e=X(t);return e===t?e:(Ne(e,"iterate",os),Ye(t)?e:e.map(Re))}function Ui(t){return Ne(t=X(t),"iterate",os),t}const Zf={__proto__:null,[Symbol.iterator](){return fr(this,Symbol.iterator,Re)},concat(...t){return un(this).concat(...t.map(e=>H(e)?un(e):e))},entries(){return fr(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return mt(this,"every",t,e,void 0,arguments)},filter(t,e){return mt(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return mt(this,"find",t,e,Re,arguments)},findIndex(t,e){return mt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mt(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return mt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mt(this,"forEach",t,e,void 0,arguments)},includes(...t){return hr(this,"includes",t)},indexOf(...t){return hr(this,"indexOf",t)},join(t){return un(this).join(t)},lastIndexOf(...t){return hr(this,"lastIndexOf",t)},map(t,e){return mt(this,"map",t,e,void 0,arguments)},pop(){return Wn(this,"pop")},push(...t){return Wn(this,"push",t)},reduce(t,...e){return pl(this,"reduce",t,e)},reduceRight(t,...e){return pl(this,"reduceRight",t,e)},shift(){return Wn(this,"shift")},some(t,e){return mt(this,"some",t,e,void 0,arguments)},splice(...t){return Wn(this,"splice",t)},toReversed(){return un(this).toReversed()},toSorted(t){return un(this).toSorted(t)},toSpliced(...t){return un(this).toSpliced(...t)},unshift(...t){return Wn(this,"unshift",t)},values(){return fr(this,"values",Re)}};function fr(t,e,n){const s=Ui(t),i=s[e]();return s!==t&&!Ye(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const eh=Array.prototype;function mt(t,e,n,s,i,r){const o=Ui(t),l=o!==t&&!Ye(t),c=o[e];if(c!==eh[e]){const p=c.apply(t,r);return l?Re(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Re(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function pl(t,e,n,s){const i=Ui(t);let r=n;return i!==t&&(Ye(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Re(l),c,t)}),i[e](r,...s)}function hr(t,e,n){const s=X(t);Ne(s,"iterate",os);const i=s[e](...n);return(i===-1||i===!1)&&Co(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function Wn(t,e,n=[]){Vt(),go();const s=X(t)[e].apply(t,n);return mo(),jt(),s}const th=uo("__proto__,__v_isRef,__isVue"),ia=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ut));function nh(t){Ut(t)||(t=String(t));const e=X(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class ra{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?hh:aa:r?ca:la).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=Zf[n]))return c;if(n==="hasOwnProperty")return nh}const l=Reflect.get(e,n,me(e)?e:s);return(Ut(n)?ia.has(n):th(n))||(i||Ne(e,"get",n),r)?l:me(l)?o&&po(n)?l:l.value:_e(l)?i?ua(l):Vi(l):l}}class oa extends ra{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=nn(r);if(!Ye(s)&&!nn(s)&&(r=X(r),s=X(s)),!H(e)&&me(r)&&!me(s))return c?!1:(r.value=s,!0)}const o=H(e)&&po(n)?Number(n)<e.length:ee(e,n),l=Reflect.set(e,n,s,me(e)?e:i);return e===X(i)&&(o?Dt(s,r)&&yt(e,"set",n,s):yt(e,"add",n,s)),l}deleteProperty(e,n){const s=ee(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ut(n)||!ia.has(n))&&Ne(e,"has",n),s}ownKeys(e){return Ne(e,"iterate",H(e)?"length":en),Reflect.ownKeys(e)}}class sh extends ra{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ih=new oa,rh=new sh,oh=new oa(!0);const Mr=t=>t,Os=t=>Reflect.getPrototypeOf(t);function lh(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Mr:e?Lr:Re;return!e&&Ne(r,"iterate",c?Or:en),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function Ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ch(t,e){const n={get(i){const r=this.__v_raw,o=X(r),l=X(i);t||(Dt(i,l)&&Ne(o,"get",i),Ne(o,"get",l));const{has:c}=Os(o),a=e?Mr:t?Lr:Re;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ne(X(i),"iterate",en),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),l=X(i);return t||(Dt(i,l)&&Ne(o,"has",i),Ne(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=X(l),a=e?Mr:t?Lr:Re;return!t&&Ne(c,"iterate",en),l.forEach((u,p)=>i.call(r,a(u),a(p),o))}};return Pe(n,t?{add:Ms("add"),set:Ms("set"),delete:Ms("delete"),clear:Ms("clear")}:{add(i){!e&&!Ye(i)&&!nn(i)&&(i=X(i));const r=X(this);return Os(r).has.call(r,i)||(r.add(i),yt(r,"add",i,i)),this},set(i,r){!e&&!Ye(r)&&!nn(r)&&(r=X(r));const o=X(this),{has:l,get:c}=Os(o);let a=l.call(o,i);a||(i=X(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?Dt(r,u)&&yt(o,"set",i,r):yt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:l}=Os(r);let c=o.call(r,i);c||(i=X(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&yt(r,"delete",i,void 0),a},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&yt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=lh(i,t,e)}),n}function vo(t,e){const n=ch(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const ah={get:vo(!1,!1)},uh={get:vo(!1,!0)},fh={get:vo(!0,!1)};const la=new WeakMap,ca=new WeakMap,aa=new WeakMap,hh=new WeakMap;function dh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ph(t){return t.__v_skip||!Object.isExtensible(t)?0:dh(Hf(t))}function Vi(t){return nn(t)?t:bo(t,!1,ih,ah,la)}function _h(t){return bo(t,!1,oh,uh,ca)}function ua(t){return bo(t,!0,rh,fh,aa)}function bo(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ph(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function kt(t){return nn(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function nn(t){return!!(t&&t.__v_isReadonly)}function Ye(t){return!!(t&&t.__v_isShallow)}function Co(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Eo(t){return!ee(t,"__v_skip")&&Object.isExtensible(t)&&jc(t,"__v_skip",!0),t}const Re=t=>_e(t)?Vi(t):t,Lr=t=>_e(t)?ua(t):t;function me(t){return t?t.__v_isRef===!0:!1}function Be(t){return fa(t,!1)}function gh(t){return fa(t,!0)}function fa(t,e){return me(t)?t:new mh(t,e)}class mh{constructor(e,n){this.dep=new yo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ye(e)||nn(e);e=s?e:X(e),Dt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function Se(t){return me(t)?t.value:t}const xh={get:(t,e,n)=>e==="__v_raw"?t:Se(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ha(t){return kt(t)?t:new Proxy(t,xh)}function yh(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=bh(t,n);return e}class vh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Jf(X(this._object),this._key)}}function bh(t,e,n){const s=t[e];return me(s)?s:new vh(t,e,n)}class Ch{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Jc(this,!0),!0}get value(){const e=this.dep.track();return ta(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Eh(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new Ch(s,i,n)}const Ls={},qs=new WeakMap;let Yt;function Ih(t,e=!1,n=Yt){if(n){let s=qs.get(n);s||qs.set(n,s=[]),s.push(t)}}function wh(t,e,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=L=>i?L:Ye(L)||i===!1||i===0?vt(L,1):vt(L);let u,p,g,y,w=!1,O=!1;if(me(t)?(p=()=>t.value,w=Ye(t)):kt(t)?(p=()=>a(t),w=!0):H(t)?(O=!0,w=t.some(L=>kt(L)||Ye(L)),p=()=>t.map(L=>{if(me(L))return L.value;if(kt(L))return a(L);if(U(L))return c?c(L,2):L()})):U(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Vt();try{g()}finally{jt()}}const L=Yt;Yt=u;try{return c?c(t,3,[y]):t(y)}finally{Yt=L}}:p=ht,e&&i){const L=p,Q=i===!0?1/0:i;p=()=>vt(L(),Q)}const j=Yc(),V=()=>{u.stop(),j&&j.active&&ho(j.effects,u)};if(r&&e){const L=e;e=(...Q)=>{L(...Q),V()}}let Y=O?new Array(t.length).fill(Ls):Ls;const Z=L=>{if(!(!(u.flags&1)||!u.dirty&&!L))if(e){const Q=u.run();if(i||w||(O?Q.some((Je,ye)=>Dt(Je,Y[ye])):Dt(Q,Y))){g&&g();const Je=Yt;Yt=u;try{const ye=[Q,Y===Ls?void 0:O&&Y[0]===Ls?[]:Y,y];c?c(e,3,ye):e(...ye),Y=Q}finally{Yt=Je}}}else u.run()};return l&&l(Z),u=new Qc(p),u.scheduler=o?()=>o(Z,!1):Z,y=L=>Ih(L,!1,u),g=u.onStop=()=>{const L=qs.get(u);if(L){if(c)c(L,4);else for(const Q of L)Q();qs.delete(u)}},e?s?Z(!0):Y=u.run():o?o(Z.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function vt(t,e=1/0,n){if(e<=0||!_e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))vt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)vt(t[s],e,n);else if(Bc(t)||mn(t))t.forEach(s=>{vt(s,e,n)});else if(Vc(t)){for(const s in t)vt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bs(t,e,n,s){try{return s?t(...s):t()}catch(i){ji(i,e,n)}}function pt(t,e,n,s){if(U(t)){const i=bs(t,e,n,s);return i&&Hc(i)&&i.catch(r=>{ji(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(pt(t[r],e,n,s));return i}}function ji(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,c,a)===!1)return}l=l.parent}if(r){Vt(),bs(r,null,10,[t,c,a]),jt();return}}Sh(t,n,i,s,o)}function Sh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Le=[];let ut=-1;const yn=[];let At=null,dn=0;const da=Promise.resolve();let Ys=null;function pa(t){const e=Ys||da;return t?e.then(this?t.bind(this):t):e}function Th(t){let e=ut+1,n=Le.length;for(;e<n;){const s=e+n>>>1,i=Le[s],r=ls(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Io(t){if(!(t.flags&1)){const e=ls(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=ls(n)?Le.push(t):Le.splice(Th(e),0,t),t.flags|=1,_a()}}function _a(){Ys||(Ys=da.then(ma))}function Nh(t){H(t)?yn.push(...t):At&&t.id===-1?At.splice(dn+1,0,t):t.flags&1||(yn.push(t),t.flags|=1),_a()}function _l(t,e,n=ut+1){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ga(t){if(yn.length){const e=[...new Set(yn)].sort((n,s)=>ls(n)-ls(s));if(yn.length=0,At){At.push(...e);return}for(At=e,dn=0;dn<At.length;dn++){const n=At[dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}At=null,dn=0}}const ls=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ma(t){try{for(ut=0;ut<Le.length;ut++){const e=Le[ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ut<Le.length;ut++){const e=Le[ut];e&&(e.flags&=-2)}ut=-1,Le.length=0,ga(),Ys=null,(Le.length||yn.length)&&ma()}}let He=null,xa=null;function Qs(t){const e=He;return He=t,xa=t&&t.type.__scopeId||null,e}function Rh(t,e=He,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Sl(-1);const r=Qs(e);let o;try{o=t(...i)}finally{Qs(r),s._d&&Sl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ah(t,e){if(He===null)return t;const n=zi(He),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ie]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&vt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Vt(),pt(c,n,8,[t.el,l,t,e]),jt())}}const Ph=Symbol("_vte"),Dh=t=>t.__isTeleport;function wo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Nn(t,e){return U(t)?Pe({name:t.name},e,{setup:t}):t}function ya(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xs(t,e,n,s,i=!1){if(H(t)){t.forEach((w,O)=>Xs(w,e&&(H(e)?e[O]:e),n,s,i));return}if(Yn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?zi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ie?l.refs={}:l.refs,p=l.setupState,g=X(p),y=p===ie?()=>!1:w=>ee(g,w);if(a!=null&&a!==c&&(xe(a)?(u[a]=null,y(a)&&(p[a]=null)):me(a)&&(a.value=null)),U(c))bs(c,l,12,[o,u]);else{const w=xe(c),O=me(c);if(w||O){const j=()=>{if(t.f){const V=w?y(c)?p[c]:u[c]:c.value;i?H(V)&&ho(V,r):H(V)?V.includes(r)||V.push(r):w?(u[c]=[r],y(c)&&(p[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else w?(u[c]=o,y(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,Ke(j,n)):j()}}}Hi().requestIdleCallback;Hi().cancelIdleCallback;const Yn=t=>!!t.type.__asyncLoader,va=t=>t.type.__isKeepAlive;function kh(t,e){ba(t,"a",e)}function Oh(t,e){ba(t,"da",e)}function ba(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Gi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)va(i.parent.vnode)&&Mh(s,e,n,i),i=i.parent}}function Mh(t,e,n,s){const i=Gi(e,t,s,!0);Ca(()=>{ho(s[e],i)},n)}function Gi(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vt();const l=Es(n),c=pt(e,n,t,o);return l(),jt(),c});return s?i.unshift(r):i.push(r),r}}const wt=t=>(e,n=Te)=>{(!as||t==="sp")&&Gi(t,(...s)=>e(...s),n)},Lh=wt("bm"),Cs=wt("m"),Fh=wt("bu"),Wh=wt("u"),Bh=wt("bum"),Ca=wt("um"),Hh=wt("sp"),Uh=wt("rtg"),Vh=wt("rtc");function jh(t,e=Te){Gi("ec",t,e)}const Gh="components",Ea=Symbol.for("v-ndc");function $h(t){return xe(t)?Kh(Gh,t,!1)||t:t||Ea}function Kh(t,e,n=!0,s=!1){const i=He||Te;if(i){const r=i.type;{const l=Od(r,!1);if(l&&(l===e||l===Xe(e)||l===Bi(Xe(e))))return r}const o=gl(i[t]||r[t],e)||gl(i.appContext[t],e);return!o&&s?r:o}}function gl(t,e){return t&&(t[e]||t[Xe(e)]||t[Bi(Xe(e))])}function ml(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||xe(t)){const l=o&&kt(t);let c=!1;l&&(c=!Ye(t),t=Ui(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Re(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Fr=t=>t?Ka(t)?zi(t):Fr(t.parent):null,Qn=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fr(t.parent),$root:t=>Fr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wa(t),$forceUpdate:t=>t.f||(t.f=()=>{Io(t.update)}),$nextTick:t=>t.n||(t.n=pa.bind(t.proxy)),$watch:t=>_d.bind(t)}),dr=(t,e)=>t!==ie&&!t.__isScriptSetup&&ee(t,e),zh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(dr(s,e))return o[e]=1,s[e];if(i!==ie&&ee(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&ee(a,e))return o[e]=3,r[e];if(n!==ie&&ee(n,e))return o[e]=4,n[e];Wr&&(o[e]=0)}}const u=Qn[e];let p,g;if(u)return e==="$attrs"&&Ne(t.attrs,"get",""),u(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==ie&&ee(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ee(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return dr(i,e)?(i[e]=n,!0):s!==ie&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ie&&ee(t,o)||dr(e,o)||(l=r[0])&&ee(l,o)||ee(s,o)||ee(Qn,o)||ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wr=!0;function qh(t){const e=wa(t),n=t.proxy,s=t.ctx;Wr=!1,e.beforeCreate&&yl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:p,mounted:g,beforeUpdate:y,updated:w,activated:O,deactivated:j,beforeDestroy:V,beforeUnmount:Y,destroyed:Z,unmounted:L,render:Q,renderTracked:Je,renderTriggered:ye,errorCaptured:h,serverPrefetch:f,expose:d,inheritAttrs:x,components:C,directives:P,filters:oe}=e;if(a&&Yh(a,s,null),o)for(const K in o){const ce=o[K];U(ce)&&(s[K]=ce.bind(n))}if(i){const K=i.call(n,n);_e(K)&&(t.data=Vi(K))}if(Wr=!0,r)for(const K in r){const ce=r[K],Gt=U(ce)?ce.bind(n,n):U(ce.get)?ce.get.bind(n,n):ht,Ds=!U(ce)&&U(ce.set)?ce.set.bind(n):ht,$t=qa({get:Gt,set:Ds});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>$t.value,set:rt=>$t.value=rt})}if(l)for(const K in l)Ia(l[K],s,n,K);if(c){const K=U(c)?c.call(n):c;Reflect.ownKeys(K).forEach(ce=>{td(ce,K[ce])})}u&&yl(u,t,"c");function le(K,ce){H(ce)?ce.forEach(Gt=>K(Gt.bind(n))):ce&&K(ce.bind(n))}if(le(Lh,p),le(Cs,g),le(Fh,y),le(Wh,w),le(kh,O),le(Oh,j),le(jh,h),le(Vh,Je),le(Uh,ye),le(Bh,Y),le(Ca,L),le(Hh,f),H(d))if(d.length){const K=t.exposed||(t.exposed={});d.forEach(ce=>{Object.defineProperty(K,ce,{get:()=>n[ce],set:Gt=>n[ce]=Gt})})}else t.exposed||(t.exposed={});Q&&t.render===ht&&(t.render=Q),x!=null&&(t.inheritAttrs=x),C&&(t.components=C),P&&(t.directives=P),f&&ya(t)}function Yh(t,e,n=ht){H(t)&&(t=Br(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=Xn(i.from||s,i.default,!0):r=Xn(i.from||s):r=Xn(i),me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function yl(t,e,n){pt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ia(t,e,n,s){let i=s.includes(".")?Ba(n,s):()=>n[s];if(xe(t)){const r=e[t];U(r)&&dt(i,r)}else if(U(t))dt(i,t.bind(n));else if(_e(t))if(H(t))t.forEach(r=>Ia(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&dt(i,r,t)}}function wa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Js(c,a,o,!0)),Js(c,e,o)),_e(e)&&r.set(e,c),c}function Js(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Js(t,r,n,!0),i&&i.forEach(o=>Js(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Qh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Qh={data:vl,props:bl,emits:bl,methods:$n,computed:$n,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:$n,directives:$n,watch:Jh,provide:vl,inject:Xh};function vl(t,e){return e?t?function(){return Pe(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Xh(t,e){return $n(Br(t),Br(e))}function Br(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?Pe(Object.create(null),t,e):e}function bl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),xl(t),xl(e??{})):e}function Jh(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=De(t[s],e[s]);return n}function Sa(){return{app:null,config:{isNativeTag:Wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zh=0;function ed(t,e){return function(s,i=null){U(s)||(s=Pe({},s)),i!=null&&!_e(i)&&(i=null);const r=Sa(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Zh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ld,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(a,...p)):U(u)&&(o.add(u),u(a,...p))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,p){return p?(r.components[u]=p,a):r.components[u]},directive(u,p){return p?(r.directives[u]=p,a):r.directives[u]},mount(u,p,g){if(!c){const y=a._ceVNode||Qe(s,i);return y.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(y,u,g),c=!0,a._container=u,u.__vue_app__=a,zi(y.component)}},onUnmount(u){l.push(u)},unmount(){c&&(pt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,p){return r.provides[u]=p,a},runWithContext(u){const p=tn;tn=a;try{return u()}finally{tn=p}}};return a}}let tn=null;function td(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function Xn(t,e,n=!1){const s=Te||He;if(s||tn){const i=tn?tn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function nd(){return!!(Te||He||tn)}const Ta={},Na=()=>Object.create(Ta),Ra=t=>Object.getPrototypeOf(t)===Ta;function sd(t,e,n,s=!1){const i={},r=Na();t.propsDefaults=Object.create(null),Aa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:_h(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function id(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if($i(t.emitsOptions,g))continue;const y=e[g];if(c)if(ee(r,g))y!==r[g]&&(r[g]=y,a=!0);else{const w=Xe(g);i[w]=Hr(c,l,w,y,t,!1)}else y!==r[g]&&(r[g]=y,a=!0)}}}else{Aa(t,e,i,r)&&(a=!0);let u;for(const p in l)(!e||!ee(e,p)&&((u=cn(p))===p||!ee(e,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=Hr(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!ee(e,p))&&(delete r[p],a=!0)}a&&yt(t.attrs,"set","")}function Aa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Kn(c))continue;const a=e[c];let u;i&&ee(i,u=Xe(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:$i(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=X(n),a=l||ie;for(let u=0;u<r.length;u++){const p=r[u];n[p]=Hr(i,c,p,a[p],t,!ee(a,p))}}return o}function Hr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ee(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=Es(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===cn(n))&&(s=!0))}return s}const rd=new WeakMap;function Pa(t,e,n=!1){const s=n?rd:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!U(t)){const u=p=>{c=!0;const[g,y]=Pa(p,e,!0);Pe(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return _e(t)&&s.set(t,gn),gn;if(H(r))for(let u=0;u<r.length;u++){const p=Xe(r[u]);Cl(p)&&(o[p]=ie)}else if(r)for(const u in r){const p=Xe(u);if(Cl(p)){const g=r[u],y=o[p]=H(g)||U(g)?{type:g}:Pe({},g),w=y.type;let O=!1,j=!0;if(H(w))for(let V=0;V<w.length;++V){const Y=w[V],Z=U(Y)&&Y.name;if(Z==="Boolean"){O=!0;break}else Z==="String"&&(j=!1)}else O=U(w)&&w.name==="Boolean";y[0]=O,y[1]=j,(O||ee(y,"default"))&&l.push(p)}}const a=[o,l];return _e(t)&&s.set(t,a),a}function Cl(t){return t[0]!=="$"&&!Kn(t)}const Da=t=>t[0]==="_"||t==="$stable",So=t=>H(t)?t.map(ft):[ft(t)],od=(t,e,n)=>{if(e._n)return e;const s=Rh((...i)=>So(e(...i)),n);return s._c=!1,s},ka=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Da(i))continue;const r=t[i];if(U(r))e[i]=od(i,r,s);else if(r!=null){const o=So(r);e[i]=()=>o}}},Oa=(t,e)=>{const n=So(e);t.slots.default=()=>n},Ma=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},ld=(t,e,n)=>{const s=t.slots=Na();if(t.vnode.shapeFlag&32){const i=e._;i?(Ma(s,e,n),n&&jc(s,"_",i,!0)):ka(e,s)}else e&&Oa(t,e)},cd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ma(i,e,n):(r=!e.$stable,ka(e,i)),o=e}else e&&(Oa(t,e),o={default:1});if(r)for(const l in i)!Da(l)&&o[l]==null&&delete i[l]},Ke=Cd;function ad(t){return ud(t)}function ud(t,e){const n=Hi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:p,nextSibling:g,setScopeId:y=ht,insertStaticContent:w}=t,O=(_,m,b,S=null,E=null,I=null,D=void 0,A=null,R=!!m.dynamicChildren)=>{if(_===m)return;_&&!Bn(_,m)&&(S=ks(_),rt(_,E,I,!0),_=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:T,ref:F,shapeFlag:k}=m;switch(T){case Ki:j(_,m,b,S);break;case sn:V(_,m,b,S);break;case _r:_==null&&Y(m,b,S,D);break;case qe:C(_,m,b,S,E,I,D,A,R);break;default:k&1?Q(_,m,b,S,E,I,D,A,R):k&6?P(_,m,b,S,E,I,D,A,R):(k&64||k&128)&&T.process(_,m,b,S,E,I,D,A,R,Ln)}F!=null&&E&&Xs(F,_&&_.ref,I,m||_,!m)},j=(_,m,b,S)=>{if(_==null)s(m.el=l(m.children),b,S);else{const E=m.el=_.el;m.children!==_.children&&a(E,m.children)}},V=(_,m,b,S)=>{_==null?s(m.el=c(m.children||""),b,S):m.el=_.el},Y=(_,m,b,S)=>{[_.el,_.anchor]=w(_.children,m,b,S,_.el,_.anchor)},Z=({el:_,anchor:m},b,S)=>{let E;for(;_&&_!==m;)E=g(_),s(_,b,S),_=E;s(m,b,S)},L=({el:_,anchor:m})=>{let b;for(;_&&_!==m;)b=g(_),i(_),_=b;i(m)},Q=(_,m,b,S,E,I,D,A,R)=>{m.type==="svg"?D="svg":m.type==="math"&&(D="mathml"),_==null?Je(m,b,S,E,I,D,A,R):f(_,m,E,I,D,A,R)},Je=(_,m,b,S,E,I,D,A)=>{let R,T;const{props:F,shapeFlag:k,transition:M,dirs:B}=_;if(R=_.el=o(_.type,I,F&&F.is,F),k&8?u(R,_.children):k&16&&h(_.children,R,null,S,E,pr(_,I),D,A),B&&Kt(_,null,S,"created"),ye(R,_,_.scopeId,D,S),F){for(const ae in F)ae!=="value"&&!Kn(ae)&&r(R,ae,null,F[ae],I,S);"value"in F&&r(R,"value",null,F.value,I),(T=F.onVnodeBeforeMount)&&at(T,S,_)}B&&Kt(_,null,S,"beforeMount");const q=fd(E,M);q&&M.beforeEnter(R),s(R,m,b),((T=F&&F.onVnodeMounted)||q||B)&&Ke(()=>{T&&at(T,S,_),q&&M.enter(R),B&&Kt(_,null,S,"mounted")},E)},ye=(_,m,b,S,E)=>{if(b&&y(_,b),S)for(let I=0;I<S.length;I++)y(_,S[I]);if(E){let I=E.subTree;if(m===I||Ua(I.type)&&(I.ssContent===m||I.ssFallback===m)){const D=E.vnode;ye(_,D,D.scopeId,D.slotScopeIds,E.parent)}}},h=(_,m,b,S,E,I,D,A,R=0)=>{for(let T=R;T<_.length;T++){const F=_[T]=A?Pt(_[T]):ft(_[T]);O(null,F,m,b,S,E,I,D,A)}},f=(_,m,b,S,E,I,D)=>{const A=m.el=_.el;let{patchFlag:R,dynamicChildren:T,dirs:F}=m;R|=_.patchFlag&16;const k=_.props||ie,M=m.props||ie;let B;if(b&&zt(b,!1),(B=M.onVnodeBeforeUpdate)&&at(B,b,m,_),F&&Kt(m,_,b,"beforeUpdate"),b&&zt(b,!0),(k.innerHTML&&M.innerHTML==null||k.textContent&&M.textContent==null)&&u(A,""),T?d(_.dynamicChildren,T,A,b,S,pr(m,E),I):D||ce(_,m,A,null,b,S,pr(m,E),I,!1),R>0){if(R&16)x(A,k,M,b,E);else if(R&2&&k.class!==M.class&&r(A,"class",null,M.class,E),R&4&&r(A,"style",k.style,M.style,E),R&8){const q=m.dynamicProps;for(let ae=0;ae<q.length;ae++){const te=q[ae],Ge=k[te],We=M[te];(We!==Ge||te==="value")&&r(A,te,Ge,We,E,b)}}R&1&&_.children!==m.children&&u(A,m.children)}else!D&&T==null&&x(A,k,M,b,E);((B=M.onVnodeUpdated)||F)&&Ke(()=>{B&&at(B,b,m,_),F&&Kt(m,_,b,"updated")},S)},d=(_,m,b,S,E,I,D)=>{for(let A=0;A<m.length;A++){const R=_[A],T=m[A],F=R.el&&(R.type===qe||!Bn(R,T)||R.shapeFlag&70)?p(R.el):b;O(R,T,F,null,S,E,I,D,!0)}},x=(_,m,b,S,E)=>{if(m!==b){if(m!==ie)for(const I in m)!Kn(I)&&!(I in b)&&r(_,I,m[I],null,E,S);for(const I in b){if(Kn(I))continue;const D=b[I],A=m[I];D!==A&&I!=="value"&&r(_,I,A,D,E,S)}"value"in b&&r(_,"value",m.value,b.value,E)}},C=(_,m,b,S,E,I,D,A,R)=>{const T=m.el=_?_.el:l(""),F=m.anchor=_?_.anchor:l("");let{patchFlag:k,dynamicChildren:M,slotScopeIds:B}=m;B&&(A=A?A.concat(B):B),_==null?(s(T,b,S),s(F,b,S),h(m.children||[],b,F,E,I,D,A,R)):k>0&&k&64&&M&&_.dynamicChildren?(d(_.dynamicChildren,M,b,E,I,D,A),(m.key!=null||E&&m===E.subTree)&&La(_,m,!0)):ce(_,m,b,F,E,I,D,A,R)},P=(_,m,b,S,E,I,D,A,R)=>{m.slotScopeIds=A,_==null?m.shapeFlag&512?E.ctx.activate(m,b,S,D,R):oe(m,b,S,E,I,D,R):Ce(_,m,R)},oe=(_,m,b,S,E,I,D)=>{const A=_.component=Rd(_,S,E);if(va(_)&&(A.ctx.renderer=Ln),Ad(A,!1,D),A.asyncDep){if(E&&E.registerDep(A,le,D),!_.el){const R=A.subTree=Qe(sn);V(null,R,m,b)}}else le(A,_,m,b,E,I,D)},Ce=(_,m,b)=>{const S=m.component=_.component;if(vd(_,m,b))if(S.asyncDep&&!S.asyncResolved){K(S,m,b);return}else S.next=m,S.update();else m.el=_.el,S.vnode=m},le=(_,m,b,S,E,I,D)=>{const A=()=>{if(_.isMounted){let{next:k,bu:M,u:B,parent:q,vnode:ae}=_;{const lt=Fa(_);if(lt){k&&(k.el=ae.el,K(_,k,D)),lt.asyncDep.then(()=>{_.isUnmounted||A()});return}}let te=k,Ge;zt(_,!1),k?(k.el=ae.el,K(_,k,D)):k=ae,M&&Us(M),(Ge=k.props&&k.props.onVnodeBeforeUpdate)&&at(Ge,q,k,ae),zt(_,!0);const We=Il(_),ot=_.subTree;_.subTree=We,O(ot,We,p(ot.el),ks(ot),_,E,I),k.el=We.el,te===null&&bd(_,We.el),B&&Ke(B,E),(Ge=k.props&&k.props.onVnodeUpdated)&&Ke(()=>at(Ge,q,k,ae),E)}else{let k;const{el:M,props:B}=m,{bm:q,m:ae,parent:te,root:Ge,type:We}=_,ot=Yn(m);zt(_,!1),q&&Us(q),!ot&&(k=B&&B.onVnodeBeforeMount)&&at(k,te,m),zt(_,!0);{Ge.ce&&Ge.ce._injectChildStyle(We);const lt=_.subTree=Il(_);O(null,lt,b,S,_,E,I),m.el=lt.el}if(ae&&Ke(ae,E),!ot&&(k=B&&B.onVnodeMounted)){const lt=m;Ke(()=>at(k,te,lt),E)}(m.shapeFlag&256||te&&Yn(te.vnode)&&te.vnode.shapeFlag&256)&&_.a&&Ke(_.a,E),_.isMounted=!0,m=b=S=null}};_.scope.on();const R=_.effect=new Qc(A);_.scope.off();const T=_.update=R.run.bind(R),F=_.job=R.runIfDirty.bind(R);F.i=_,F.id=_.uid,R.scheduler=()=>Io(F),zt(_,!0),T()},K=(_,m,b)=>{m.component=_;const S=_.vnode.props;_.vnode=m,_.next=null,id(_,m.props,S,b),cd(_,m.children,b),Vt(),_l(_),jt()},ce=(_,m,b,S,E,I,D,A,R=!1)=>{const T=_&&_.children,F=_?_.shapeFlag:0,k=m.children,{patchFlag:M,shapeFlag:B}=m;if(M>0){if(M&128){Ds(T,k,b,S,E,I,D,A,R);return}else if(M&256){Gt(T,k,b,S,E,I,D,A,R);return}}B&8?(F&16&&Mn(T,E,I),k!==T&&u(b,k)):F&16?B&16?Ds(T,k,b,S,E,I,D,A,R):Mn(T,E,I,!0):(F&8&&u(b,""),B&16&&h(k,b,S,E,I,D,A,R))},Gt=(_,m,b,S,E,I,D,A,R)=>{_=_||gn,m=m||gn;const T=_.length,F=m.length,k=Math.min(T,F);let M;for(M=0;M<k;M++){const B=m[M]=R?Pt(m[M]):ft(m[M]);O(_[M],B,b,null,E,I,D,A,R)}T>F?Mn(_,E,I,!0,!1,k):h(m,b,S,E,I,D,A,R,k)},Ds=(_,m,b,S,E,I,D,A,R)=>{let T=0;const F=m.length;let k=_.length-1,M=F-1;for(;T<=k&&T<=M;){const B=_[T],q=m[T]=R?Pt(m[T]):ft(m[T]);if(Bn(B,q))O(B,q,b,null,E,I,D,A,R);else break;T++}for(;T<=k&&T<=M;){const B=_[k],q=m[M]=R?Pt(m[M]):ft(m[M]);if(Bn(B,q))O(B,q,b,null,E,I,D,A,R);else break;k--,M--}if(T>k){if(T<=M){const B=M+1,q=B<F?m[B].el:S;for(;T<=M;)O(null,m[T]=R?Pt(m[T]):ft(m[T]),b,q,E,I,D,A,R),T++}}else if(T>M)for(;T<=k;)rt(_[T],E,I,!0),T++;else{const B=T,q=T,ae=new Map;for(T=q;T<=M;T++){const $e=m[T]=R?Pt(m[T]):ft(m[T]);$e.key!=null&&ae.set($e.key,T)}let te,Ge=0;const We=M-q+1;let ot=!1,lt=0;const Fn=new Array(We);for(T=0;T<We;T++)Fn[T]=0;for(T=B;T<=k;T++){const $e=_[T];if(Ge>=We){rt($e,E,I,!0);continue}let ct;if($e.key!=null)ct=ae.get($e.key);else for(te=q;te<=M;te++)if(Fn[te-q]===0&&Bn($e,m[te])){ct=te;break}ct===void 0?rt($e,E,I,!0):(Fn[ct-q]=T+1,ct>=lt?lt=ct:ot=!0,O($e,m[ct],b,null,E,I,D,A,R),Ge++)}const ul=ot?hd(Fn):gn;for(te=ul.length-1,T=We-1;T>=0;T--){const $e=q+T,ct=m[$e],fl=$e+1<F?m[$e+1].el:S;Fn[T]===0?O(null,ct,b,fl,E,I,D,A,R):ot&&(te<0||T!==ul[te]?$t(ct,b,fl,2):te--)}}},$t=(_,m,b,S,E=null)=>{const{el:I,type:D,transition:A,children:R,shapeFlag:T}=_;if(T&6){$t(_.component.subTree,m,b,S);return}if(T&128){_.suspense.move(m,b,S);return}if(T&64){D.move(_,m,b,Ln);return}if(D===qe){s(I,m,b);for(let k=0;k<R.length;k++)$t(R[k],m,b,S);s(_.anchor,m,b);return}if(D===_r){Z(_,m,b);return}if(S!==2&&T&1&&A)if(S===0)A.beforeEnter(I),s(I,m,b),Ke(()=>A.enter(I),E);else{const{leave:k,delayLeave:M,afterLeave:B}=A,q=()=>s(I,m,b),ae=()=>{k(I,()=>{q(),B&&B()})};M?M(I,q,ae):ae()}else s(I,m,b)},rt=(_,m,b,S=!1,E=!1)=>{const{type:I,props:D,ref:A,children:R,dynamicChildren:T,shapeFlag:F,patchFlag:k,dirs:M,cacheIndex:B}=_;if(k===-2&&(E=!1),A!=null&&Xs(A,null,b,_,!0),B!=null&&(m.renderCache[B]=void 0),F&256){m.ctx.deactivate(_);return}const q=F&1&&M,ae=!Yn(_);let te;if(ae&&(te=D&&D.onVnodeBeforeUnmount)&&at(te,m,_),F&6)Ff(_.component,b,S);else{if(F&128){_.suspense.unmount(b,S);return}q&&Kt(_,null,m,"beforeUnmount"),F&64?_.type.remove(_,m,b,Ln,S):T&&!T.hasOnce&&(I!==qe||k>0&&k&64)?Mn(T,m,b,!1,!0):(I===qe&&k&384||!E&&F&16)&&Mn(R,m,b),S&&cl(_)}(ae&&(te=D&&D.onVnodeUnmounted)||q)&&Ke(()=>{te&&at(te,m,_),q&&Kt(_,null,m,"unmounted")},b)},cl=_=>{const{type:m,el:b,anchor:S,transition:E}=_;if(m===qe){Lf(b,S);return}if(m===_r){L(_);return}const I=()=>{i(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(_.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:A}=E,R=()=>D(b,I);A?A(_.el,I,R):R()}else I()},Lf=(_,m)=>{let b;for(;_!==m;)b=g(_),i(_),_=b;i(m)},Ff=(_,m,b)=>{const{bum:S,scope:E,job:I,subTree:D,um:A,m:R,a:T}=_;El(R),El(T),S&&Us(S),E.stop(),I&&(I.flags|=8,rt(D,_,m,b)),A&&Ke(A,m),Ke(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Mn=(_,m,b,S=!1,E=!1,I=0)=>{for(let D=I;D<_.length;D++)rt(_[D],m,b,S,E)},ks=_=>{if(_.shapeFlag&6)return ks(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),b=m&&m[Ph];return b?g(b):m};let lr=!1;const al=(_,m,b)=>{_==null?m._vnode&&rt(m._vnode,null,null,!0):O(m._vnode||null,_,m,null,null,null,b),m._vnode=_,lr||(lr=!0,_l(),ga(),lr=!1)},Ln={p:O,um:rt,m:$t,r:cl,mt:oe,mc:h,pc:ce,pbc:d,n:ks,o:t};return{render:al,hydrate:void 0,createApp:ed(al)}}function pr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function La(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Pt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&La(o,l)),l.type===Ki&&(l.el=o.el)}}function hd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Fa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fa(e)}function El(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const dd=Symbol.for("v-scx"),pd=()=>Xn(dd);function dt(t,e,n){return Wa(t,e,n)}function Wa(t,e,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,l=Pe({},n),c=e&&s||!e&&r!=="post";let a;if(as){if(r==="sync"){const y=pd();a=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=ht,y.resume=ht,y.pause=ht,y}}const u=Te;l.call=(y,w,O)=>pt(y,u,w,O);let p=!1;r==="post"?l.scheduler=y=>{Ke(y,u&&u.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(y,w)=>{w?y():Io(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const g=wh(t,e,l);return as&&(a?a.push(g):c&&g()),g}function _d(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?Ba(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=Es(this),l=Wa(i,r.bind(s),n);return o(),l}function Ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const gd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xe(e)}Modifiers`]||t[`${cn(e)}Modifiers`];function md(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&gd(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>xe(u)?u.trim():u)),o.number&&(i=n.map(Dr)));let l,c=s[l=cr(e)]||s[l=cr(Xe(e))];!c&&r&&(c=s[l=cr(cn(e))]),c&&pt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pt(a,t,6,i)}}function Ha(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const c=a=>{const u=Ha(a,e,!0);u&&(l=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(_e(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Pe(o,r),_e(t)&&s.set(t,o),o)}function $i(t,e){return!t||!Li(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,cn(e))||ee(t,e))}function Il(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:p,data:g,setupState:y,ctx:w,inheritAttrs:O}=t,j=Qs(t);let V,Y;try{if(n.shapeFlag&4){const L=i||s,Q=L;V=ft(a.call(Q,L,u,p,y,g,w)),Y=l}else{const L=e;V=ft(L.length>1?L(p,{attrs:l,slots:o,emit:c}):L(p,null)),Y=e.props?l:xd(l)}}catch(L){Jn.length=0,ji(L,t,1),V=Qe(sn)}let Z=V;if(Y&&O!==!1){const L=Object.keys(Y),{shapeFlag:Q}=Z;L.length&&Q&7&&(r&&L.some(fo)&&(Y=yd(Y,r)),Z=En(Z,Y,!1,!0))}return n.dirs&&(Z=En(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&wo(Z,n.transition),V=Z,Qs(j),V}const xd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Li(n))&&((e||(e={}))[n]=t[n]);return e},yd=(t,e)=>{const n={};for(const s in t)(!fo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function vd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?wl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(o[g]!==s[g]&&!$i(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?wl(s,o,a):!0:!!o;return!1}function wl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!$i(n,r))return!0}return!1}function bd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ua=t=>t.__isSuspense;function Cd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Nh(t)}const qe=Symbol.for("v-fgt"),Ki=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),_r=Symbol.for("v-stc"),Jn=[];let ze=null;function ne(t=!1){Jn.push(ze=t?null:[])}function Ed(){Jn.pop(),ze=Jn[Jn.length-1]||null}let cs=1;function Sl(t,e=!1){cs+=t,t<0&&ze&&e&&(ze.hasOnce=!0)}function Va(t){return t.dynamicChildren=cs>0?ze||gn:null,Ed(),cs>0&&ze&&ze.push(t),t}function ue(t,e,n,s,i,r){return Va(v(t,e,n,s,i,r,!0))}function ja(t,e,n,s,i){return Va(Qe(t,e,n,s,i,!0))}function Ga(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const $a=({key:t})=>t??null,Vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||me(t)||U(t)?{i:He,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$a(e),ref:e&&Vs(e),scopeId:xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return l?(To(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),cs>0&&!o&&ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ze.push(c),c}const Qe=Id;function Id(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ea)&&(t=sn),Ga(t)){const l=En(t,e,!0);return n&&To(l,n),cs>0&&!r&&ze&&(l.shapeFlag&6?ze[ze.indexOf(t)]=l:ze.push(l)),l.patchFlag=-2,l}if(Md(t)&&(t=t.__vccOpts),e){e=wd(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=xn(l)),_e(c)&&(Co(c)&&!H(c)&&(c=Pe({},c)),e.style=_o(c))}const o=xe(t)?1:Ua(t)?128:Dh(t)?64:_e(t)?4:U(t)?2:0;return v(t,e,n,s,i,o,r,!0)}function wd(t){return t?Co(t)||Ra(t)?Pe({},t):t:null}function En(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?Sd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$a(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Vs(e)):[r,Vs(e)]:Vs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&wo(u,c.clone(u)),u}function se(t=" ",e=0){return Qe(Ki,null,t,e)}function ke(t="",e=!1){return e?(ne(),ja(sn,null,t)):Qe(sn,null,t)}function ft(t){return t==null||typeof t=="boolean"?Qe(sn):H(t)?Qe(qe,null,t.slice()):Ga(t)?Pt(t):Qe(Ki,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:En(t)}function To(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),To(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ra(e)?e._ctx=He:i===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[se(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=xn([e.class,s.class]));else if(i==="style")e.style=_o([e.style,s.style]);else if(Li(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function at(t,e,n,s=null){pt(t,e,7,[n,s])}const Td=Sa();let Nd=0;function Rd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Td,r={uid:Nd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pa(s,i),emitsOptions:Ha(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=md.bind(null,r),t.ce&&t.ce(r),r}let Te=null,Zs,Ur;{const t=Hi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Zs=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),Ur=e("__VUE_SSR_SETTERS__",n=>as=n)}const Es=t=>{const e=Te;return Zs(t),t.scope.on(),()=>{t.scope.off(),Zs(e)}},Tl=()=>{Te&&Te.scope.off(),Zs(null)};function Ka(t){return t.vnode.shapeFlag&4}let as=!1;function Ad(t,e=!1,n=!1){e&&Ur(e);const{props:s,children:i}=t.vnode,r=Ka(t);sd(t,s,r,e),ld(t,i,n);const o=r?Pd(t,e):void 0;return e&&Ur(!1),o}function Pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,zh);const{setup:s}=n;if(s){Vt();const i=t.setupContext=s.length>1?kd(t):null,r=Es(t),o=bs(s,t,0,[t.props,i]),l=Hc(o);if(jt(),r(),(l||t.sp)&&!Yn(t)&&ya(t),l){if(o.then(Tl,Tl),e)return o.then(c=>{Nl(t,c)}).catch(c=>{ji(c,t,0)});t.asyncDep=o}else Nl(t,o)}else za(t)}function Nl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=ha(e)),za(t)}function za(t,e,n){const s=t.type;t.render||(t.render=s.render||ht);{const i=Es(t);Vt();try{qh(t)}finally{jt(),i()}}}const Dd={get(t,e){return Ne(t,"get",""),t[e]}};function kd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Dd),slots:t.slots,emit:t.emit,expose:e}}function zi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ha(Eo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qn)return Qn[n](t)},has(e,n){return n in e||n in Qn}})):t.proxy}function Od(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function Md(t){return U(t)&&"__vccOpts"in t}const qa=(t,e)=>Eh(t,e,as),Ld="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vr;const Rl=typeof window<"u"&&window.trustedTypes;if(Rl)try{Vr=Rl.createPolicy("vue",{createHTML:t=>t})}catch{}const Ya=Vr?t=>Vr.createHTML(t):t=>t,Fd="http://www.w3.org/2000/svg",Wd="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,Al=xt&&xt.createElement("template"),Bd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?xt.createElementNS(Fd,t):e==="mathml"?xt.createElementNS(Wd,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Al.innerHTML=Ya(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Al.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hd=Symbol("_vtc");function Ud(t,e,n){const s=t[Hd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pl=Symbol("_vod"),Vd=Symbol("_vsh"),jd=Symbol(""),Gd=/(^|;)\s*display\s*:/;function $d(t,e,n){const s=t.style,i=xe(n);let r=!1;if(n&&!i){if(e)if(xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&js(s,l,"")}else for(const o in e)n[o]==null&&js(s,o,"");for(const o in n)o==="display"&&(r=!0),js(s,o,n[o])}else if(i){if(e!==n){const o=s[jd];o&&(n+=";"+o),s.cssText=n,r=Gd.test(n)}}else e&&t.removeAttribute("style");Pl in t&&(t[Pl]=r?s.display:"",t[Vd]&&(s.display="none"))}const Dl=/\s*!important$/;function js(t,e,n){if(H(n))n.forEach(s=>js(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Kd(t,e);Dl.test(n)?t.setProperty(cn(s),n.replace(Dl,""),"important"):t[s]=n}}const kl=["Webkit","Moz","ms"],gr={};function Kd(t,e){const n=gr[e];if(n)return n;let s=Xe(e);if(s!=="filter"&&s in t)return gr[e]=s;s=Bi(s);for(let i=0;i<kl.length;i++){const r=kl[i]+s;if(r in t)return gr[e]=r}return e}const Ol="http://www.w3.org/1999/xlink";function Ml(t,e,n,s,i,r=qf(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ol,e.slice(6,e.length)):t.setAttributeNS(Ol,e,n):n==null||r&&!Gc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ut(n)?String(n):n)}function Ll(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ya(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function pn(t,e,n,s){t.addEventListener(e,n,s)}function zd(t,e,n,s){t.removeEventListener(e,n,s)}const Fl=Symbol("_vei");function qd(t,e,n,s,i=null){const r=t[Fl]||(t[Fl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Yd(e);if(s){const a=r[e]=Jd(s,i);pn(t,l,a,c)}else o&&(zd(t,l,o,c),r[e]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function Yd(t){let e;if(Wl.test(t)){e={};let s;for(;s=t.match(Wl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cn(t.slice(2)),e]}let mr=0;const Qd=Promise.resolve(),Xd=()=>mr||(Qd.then(()=>mr=0),mr=Date.now());function Jd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(Zd(s,n.value),e,5,[s])};return n.value=t,n.attached=Xd(),n}function Zd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ep=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Ud(t,s,o):e==="style"?$d(t,n,s):Li(e)?fo(e)||qd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tp(t,e,s,o))?(Ll(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ml(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(s))?Ll(t,Xe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ml(t,e,s,o))};function tp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Bl(e)&&xe(n)?!1:e in t}const Hl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Us(e,n):e};function np(t){t.target.composing=!0}function Ul(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xr=Symbol("_assign"),sp={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[xr]=Hl(i);const r=s||i.props&&i.props.type==="number";pn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Dr(l)),t[xr](l)}),n&&pn(t,"change",()=>{t.value=t.value.trim()}),e||(pn(t,"compositionstart",np),pn(t,"compositionend",Ul),pn(t,"change",Ul))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[xr]=Hl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Dr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},ip=Pe({patchProp:ep},Bd);let Vl;function rp(){return Vl||(Vl=ad(ip))}const op=(...t)=>{const e=rp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=cp(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,lp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function lp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cp(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Qa;const qi=t=>Qa=t,Xa=Symbol();function jr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zn||(Zn={}));function ap(){const t=qc(!0),e=t.run(()=>Be({}));let n=[],s=[];const i=Eo({install(r){qi(i),i._a=r,r.provide(Xa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ja=()=>{};function jl(t,e,n,s=Ja){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Yc()&&Yf(i),i}function fn(t,...e){t.slice().forEach(n=>{n(...e)})}const up=t=>t(),Gl=Symbol(),yr=Symbol();function Gr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];jr(i)&&jr(s)&&t.hasOwnProperty(n)&&!me(s)&&!kt(s)?t[n]=Gr(i,s):t[n]=s}return t}const fp=Symbol();function hp(t){return!jr(t)||!t.hasOwnProperty(fp)}const{assign:Nt}=Object;function dp(t){return!!(me(t)&&t.effect)}function pp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=yh(n.state.value[t]);return Nt(u,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=Eo(qa(()=>{qi(n);const y=n._s.get(t);return o[g].call(y,y)})),p),{}))}return c=Za(t,a,e,n,s,!0),c}function Za(t,e,n={},s,i,r){let o;const l=Nt({actions:{}},n),c={deep:!0};let a,u,p=[],g=[],y;const w=s.state.value[t];!r&&!w&&(s.state.value[t]={}),Be({});let O;function j(h){let f;a=u=!1,typeof h=="function"?(h(s.state.value[t]),f={type:Zn.patchFunction,storeId:t,events:y}):(Gr(s.state.value[t],h),f={type:Zn.patchObject,payload:h,storeId:t,events:y});const d=O=Symbol();pa().then(()=>{O===d&&(a=!0)}),u=!0,fn(p,f,s.state.value[t])}const V=r?function(){const{state:f}=n,d=f?f():{};this.$patch(x=>{Nt(x,d)})}:Ja;function Y(){o.stop(),p=[],g=[],s._s.delete(t)}const Z=(h,f="")=>{if(Gl in h)return h[yr]=f,h;const d=function(){qi(s);const x=Array.from(arguments),C=[],P=[];function oe(K){C.push(K)}function Ce(K){P.push(K)}fn(g,{args:x,name:d[yr],store:Q,after:oe,onError:Ce});let le;try{le=h.apply(this&&this.$id===t?this:Q,x)}catch(K){throw fn(P,K),K}return le instanceof Promise?le.then(K=>(fn(C,K),K)).catch(K=>(fn(P,K),Promise.reject(K))):(fn(C,le),le)};return d[Gl]=!0,d[yr]=f,d},L={_p:s,$id:t,$onAction:jl.bind(null,g),$patch:j,$reset:V,$subscribe(h,f={}){const d=jl(p,h,f.detached,()=>x()),x=o.run(()=>dt(()=>s.state.value[t],C=>{(f.flush==="sync"?u:a)&&h({storeId:t,type:Zn.direct,events:y},C)},Nt({},c,f)));return d},$dispose:Y},Q=Vi(L);s._s.set(t,Q);const ye=(s._a&&s._a.runWithContext||up)(()=>s._e.run(()=>(o=qc()).run(()=>e({action:Z}))));for(const h in ye){const f=ye[h];if(me(f)&&!dp(f)||kt(f))r||(w&&hp(f)&&(me(f)?f.value=w[h]:Gr(f,w[h])),s.state.value[t][h]=f);else if(typeof f=="function"){const d=Z(f,h);ye[h]=d,l.actions[h]=f}}return Nt(Q,ye),Nt(X(Q),ye),Object.defineProperty(Q,"$state",{get:()=>s.state.value[t],set:h=>{j(f=>{Nt(f,h)})}}),s._p.forEach(h=>{Nt(Q,o.run(()=>h({store:Q,app:s._a,pinia:s,options:l})))}),w&&r&&n.hydrate&&n.hydrate(Q.$state,w),a=!0,u=!0,Q}/*! #__NO_SIDE_EFFECTS__ */function _p(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=nd();return o=o||(c?Xn(Xa,null):null),o&&qi(o),o=Qa,o._s.has(t)||(i?Za(t,e,s,o):pp(t,s,o)),o._s.get(t)}return r.$id=t,r}const gp=""+new URL("waiter-GGyCVIlv.gif",import.meta.url).href,mp=()=>{};var $l={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Rn(e)},Rn=function(t){return new Error("Firebase Database ("+eu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,y=a&63;c||(y=64,o||(g=64)),s.push(n[u],n[p],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new yp;const g=r<<2|l>>4;if(s.push(g),a!==64){const y=l<<4&240|a>>2;if(s.push(y),p!==64){const w=a<<6&192|p;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nu=function(t){const e=tu(t);return No.encodeByteArray(e,!0)},ei=function(t){return nu(t).replace(/\./g,"")},$r=function(t){try{return No.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){return su(void 0,t)}function su(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bp(n)||(t[n]=su(t[n],e[n]));return t}function bp(t){return t!=="__proto__"}/**
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
 */function Cp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ep=()=>Cp().__FIREBASE_DEFAULTS__,Ip=()=>{if(typeof process>"u"||typeof $l>"u")return;const t=$l.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$r(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return mp()||Ep()||Ip()||wp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sp=t=>{var e,n;return(n=(e=iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tp=t=>{const e=Sp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ru=()=>{var t;return(t=iu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Np(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ei(JSON.stringify(n)),ei(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ou(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rp())}function Ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pp(){return eu.NODE_ADMIN===!0}function Dp(){try{return typeof indexedDB=="object"}catch{return!1}}function kp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="FirebaseError";class Is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Op,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lu.prototype.create)}}class lu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Mp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Is(i,l,s)}}function Mp(t,e){return t.replace(Lp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Lp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=us($r(r[0])||""),n=us($r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Fp=function(t){const e=cu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wp=function(t){const e=cu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function In(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Kl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(zl(r)&&zl(o)){if(!ni(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function zl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):p<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ro(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,N(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function An(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Vp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Yi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gp(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jp(t){return t===Qt?void 0:t}function Gp(t){return t.instantiationMode==="EAGER"}/**
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
 */class $p{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Kp={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},zp=he.INFO,qp={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Yp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=qp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=zp,this._logHandler=Yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Qp=(t,e)=>e.some(n=>t instanceof n);let ql,Yl;function Xp(){return ql||(ql=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jp(){return Yl||(Yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uu=new WeakMap,Kr=new WeakMap,fu=new WeakMap,vr=new WeakMap,Ao=new WeakMap;function Zp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ot(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uu.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function e_(t){if(Kr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function t_(t){zr=t(zr)}function n_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(br(this),e,...n);return fu.set(s,e.sort?e.sort():[e]),Ot(s)}:Jp().includes(t)?function(...e){return t.apply(br(this),e),Ot(uu.get(this))}:function(...e){return Ot(t.apply(br(this),e))}}function s_(t){return typeof t=="function"?n_(t):(t instanceof IDBTransaction&&e_(t),Qp(t,Xp())?new Proxy(t,zr):t)}function Ot(t){if(t instanceof IDBRequest)return Zp(t);if(vr.has(t))return vr.get(t);const e=s_(t);return e!==t&&(vr.set(t,e),Ao.set(e,t)),e}const br=t=>Ao.get(t);function i_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ot(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const r_=["get","getKey","getAll","getAllKeys","count"],o_=["put","add","delete","clear"],Cr=new Map;function Ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cr.get(e))return Cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=o_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||r_.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Cr.set(e,r),r}t_(t=>({...t,get:(e,n,s)=>Ql(e,n)||t.get(e,n,s),has:(e,n)=>!!Ql(e,n)||t.has(e,n)}));/**
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
 */class l_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function c_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qr="@firebase/app",Xl="0.11.2";/**
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
 */const Et=new au("@firebase/app"),a_="@firebase/app-compat",u_="@firebase/analytics-compat",f_="@firebase/analytics",h_="@firebase/app-check-compat",d_="@firebase/app-check",p_="@firebase/auth",__="@firebase/auth-compat",g_="@firebase/database",m_="@firebase/data-connect",x_="@firebase/database-compat",y_="@firebase/functions",v_="@firebase/functions-compat",b_="@firebase/installations",C_="@firebase/installations-compat",E_="@firebase/messaging",I_="@firebase/messaging-compat",w_="@firebase/performance",S_="@firebase/performance-compat",T_="@firebase/remote-config",N_="@firebase/remote-config-compat",R_="@firebase/storage",A_="@firebase/storage-compat",P_="@firebase/firestore",D_="@firebase/vertexai",k_="@firebase/firestore-compat",O_="firebase",M_="11.4.0";/**
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
 */const Yr="[DEFAULT]",L_={[qr]:"fire-core",[a_]:"fire-core-compat",[f_]:"fire-analytics",[u_]:"fire-analytics-compat",[d_]:"fire-app-check",[h_]:"fire-app-check-compat",[p_]:"fire-auth",[__]:"fire-auth-compat",[g_]:"fire-rtdb",[m_]:"fire-data-connect",[x_]:"fire-rtdb-compat",[y_]:"fire-fn",[v_]:"fire-fn-compat",[b_]:"fire-iid",[C_]:"fire-iid-compat",[E_]:"fire-fcm",[I_]:"fire-fcm-compat",[w_]:"fire-perf",[S_]:"fire-perf-compat",[T_]:"fire-rc",[N_]:"fire-rc-compat",[R_]:"fire-gcs",[A_]:"fire-gcs-compat",[P_]:"fire-fst",[k_]:"fire-fst-compat",[D_]:"fire-vertex","fire-js":"fire-js",[O_]:"fire-js-all"};/**
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
 */const si=new Map,F_=new Map,Qr=new Map;function Jl(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Qr.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,t);for(const n of si.values())Jl(n,t);for(const n of F_.values())Jl(n,t);return!0}function W_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function B_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const H_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new lu("app","Firebase",H_);/**
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
 */class U_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const V_=M_;function hu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=ru()),!n)throw Mt.create("no-options");const r=si.get(i);if(r){if(ni(n,r.options)&&ni(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new $p(i);for(const c of Qr.values())o.addComponent(c);const l=new U_(n,s,o);return si.set(i,l),l}function j_(t=Yr){const e=si.get(t);if(!e&&t===Yr&&ru())return hu();if(!e)throw Mt.create("no-app",{appName:t});return e}function vn(t,e,n){var s;let i=(s=L_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}ii(new fs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const G_="firebase-heartbeat-database",$_=1,hs="firebase-heartbeat-store";let Er=null;function du(){return Er||(Er=i_(G_,$_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Er}async function K_(t){try{const n=(await du()).transaction(hs),s=await n.objectStore(hs).get(pu(t));return await n.done,s}catch(e){if(e instanceof Is)Et.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(n.message)}}}async function Zl(t,e){try{const s=(await du()).transaction(hs,"readwrite");await s.objectStore(hs).put(e,pu(t)),await s.done}catch(n){if(n instanceof Is)Et.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(s.message)}}}function pu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const z_=1024,q_=30;class Y_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ec();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>q_){const o=J_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Et.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ec(),{heartbeatsToSend:s,unsentEntries:i}=Q_(this._heartbeatsCache.heartbeats),r=ei(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Et.warn(n),""}}}function ec(){return new Date().toISOString().substring(0,10)}function Q_(t,e=z_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),tc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class X_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dp()?kp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await K_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tc(t){return ei(JSON.stringify({version:2,heartbeats:t})).length}function J_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Z_(t){ii(new fs("platform-logger",e=>new l_(e),"PRIVATE")),ii(new fs("heartbeat",e=>new Y_(e),"PRIVATE")),vn(qr,Xl,t),vn(qr,Xl,"esm2017"),vn("fire-js","")}Z_("");var e0="firebase",t0="11.4.0";/**
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
 */vn(e0,t0,"app");var nc={};const sc="@firebase/database",ic="1.0.13";/**
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
 */let _u="";function n0(t){_u=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:us(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new s0(e)}}catch{}return new i0},Jt=gu("localStorage"),r0=gu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new au("@firebase/database"),o0=function(){let t=1;return function(){return t++}}(),mu=function(t){const e=Up(t),n=new Hp;n.update(e);const s=n.digest();return No.encodeByteArray(s)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ws.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let es=null,rc=!0;const l0=function(t,e){N(!0,"Can't turn on custom loggers persistently."),bn.logLevel=he.VERBOSE,es=bn.log.bind(bn)},Ae=function(...t){if(rc===!0&&(rc=!1,es===null&&r0.get("logging_enabled")===!0&&l0()),es){const e=ws.apply(null,t);es(e)}},Ss=function(t){return function(...e){Ae(t,...e)}},Xr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);bn.error(e)},It=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw bn.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+ws(...t);bn.warn(e)},c0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},a0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wn="[MIN_NAME]",rn="[MAX_NAME]",Pn=function(t,e){if(t===e)return 0;if(t===wn||e===rn)return-1;if(e===wn||t===rn)return 1;{const n=oc(t),s=oc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},u0=function(t,e){return t===e?0:t<e?-1:1},Hn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Po=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=Po(t[e[s]]);return n+="}",n},yu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vu=function(t){N(!xu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},f0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},h0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function d0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const p0=new RegExp("^-?(0*)\\d{1,10}$"),_0=-2147483648,g0=2147483647,oc=function(t){if(p0.test(t)){const e=Number(t);if(e>=_0&&e<=g0)return e}return null},Dn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},m0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class x0{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,B_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class Gs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="5",bu="v",Cu="s",Eu="r",Iu="f",wu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Su="ls",Tu="p",Jr="ac",Nu="websocket",Ru="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function v0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pu(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let s;if(e===Nu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ru)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);v0(t)&&(n.ns=t.namespace);const i=[];return je(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return vp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={},wr={};function ko(t){const e=t.toString();return Ir[e]||(Ir[e]=new b0),Ir[e]}function C0(t,e){const n=t.toString();return wr[n]||(wr[n]=e()),wr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Dn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="start",I0="close",w0="pLPCommand",S0="pRTLPCB",Du="id",ku="pw",Ou="ser",T0="cb",N0="seg",R0="ts",A0="d",P0="dframe",Mu=1870,Lu=30,D0=Mu-Lu,k0=25e3,O0=3e4;class _n{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ss(e),this.stats_=ko(n),this.urlFn=c=>(this.appCheckToken&&(c[Jr]=this.appCheckToken),Pu(n,Ru,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new E0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(O0)),a0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lc)this.id=l,this.password=c;else if(o===I0)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[lc]="t",s[Ou]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[T0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bu]=Do,this.transportSessionId&&(s[Cu]=this.transportSessionId),this.lastSessionId&&(s[Su]=this.lastSessionId),this.applicationId&&(s[Tu]=this.applicationId),this.appCheckToken&&(s[Jr]=this.appCheckToken),typeof location<"u"&&location.hostname&&wu.test(location.hostname)&&(s[Eu]=Iu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!f0()&&!h0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nu(n),i=yu(s,D0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[P0]="t",s[Du]=e,s[ku]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Oo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=o0(),window[w0+this.uniqueCallbackIdentifier]=e,window[S0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Oo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Du]=this.myID,e[ku]=this.myPW,e[Ou]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lu+s.length<=Mu;){const o=this.pendingSegs.shift();s=s+"&"+N0+i+"="+o.seg+"&"+R0+i+"="+o.ts+"&"+A0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(k0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=16384,L0=45e3;let ri=null;typeof MozWebSocket<"u"?ri=MozWebSocket:typeof WebSocket<"u"&&(ri=WebSocket);class et{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ss(this.connId),this.stats_=ko(n),this.connURL=et.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[bu]=Do,typeof location<"u"&&location.hostname&&wu.test(location.hostname)&&(o[Eu]=Iu),n&&(o[Cu]=n),s&&(o[Su]=s),i&&(o[Jr]=i),r&&(o[Tu]=r),Pu(e,Nu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jt.set("previous_websocket_failure",!0);try{let s;Pp(),this.mySock=new ri(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ri!==null&&!et.forceDisallow_}static previouslyFailed(){return Jt.isInMemoryStorage||Jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=us(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yu(n,M0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(L0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static get ALL_TRANSPORTS(){return[_n,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=et&&et.isAvailable();let s=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[et];else{const i=this.transports_=[];for(const r of ds.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=6e4,W0=5e3,B0=10*1024,H0=100*1024,Sr="t",cc="d",U0="s",ac="r",V0="e",uc="o",fc="a",hc="n",dc="p",j0="h";class G0{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ss("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>H0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>B0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sr in e){const n=e[Sr];n===fc?this.upgradeIfSecondaryHealthy_():n===ac?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hn("t",e),s=Hn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hn("t",e),s=Hn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hn(Sr,e);if(cc in e){const s=e[cc];if(n===j0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===U0?this.onConnectionShutdown_(s):n===ac?this.onReset_(s):n===V0?Xr("Server Error: "+s):n===uc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Do!==s&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(F0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(W0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Wu{static getInstance(){return new oi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ou()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=32,_c=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new re("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wt(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Fe(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mo(t,e){if(Wt(t)!==Wt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Wt(t)>Wt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class K0{constructor(e,n){this.errorPrefix_=n,this.parts_=Hu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Qi(this.parts_[s]);Vu(this)}}function z0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qi(e),Vu(t)}function q0(t){const e=t.parts_.pop();t.byteLength_-=Qi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vu(t){if(t.byteLength_>_c)throw new Error(t.errorPrefix_+"has a key path longer than "+_c+" bytes ("+t.byteLength_+").");if(t.parts_.length>pc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pc+") or object contains a cycle "+Xt(t))}function Xt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Wu{static getInstance(){return new Lo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e3,Y0=60*5*1e3,gc=30*1e3,Q0=1.3,X0=3e4,J0="server_kill",mc=3;class Ct extends Fu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Ct.nextPersistentConnectionId_++,this.log_=Ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=Y0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Yi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;Ct.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const s=In(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xr("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>X0&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Q0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new G0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,y=>{Ve(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(J0)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ve(p),c())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kl(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Po(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mc&&(this.reconnectDelay_=gc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_u.replace(/\./g,"-")]=1,ou()?e["framework.cordova"]=1:Ap()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oi.getInstance().currentlyOnline();return Kl(this.interruptReasons_)&&e}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new $(wn,e),i=new $(wn,n);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class ju extends Xi{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,n){return Pn(e.name,n.name)}isDefinedOn(e){throw Rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(rn,Fs)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Fs)}toString(){return".key"}}const Cn=new ju;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class Z0{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ws(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Z0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e){return Pn(t.name,e.name)}function Fo(t,e){return Pn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;function tg(t){Zr=t}const Gu=function(t){return typeof t=="number"?"number:"+vu(t):"string:"+t},$u=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else N(t===Zr||t.isEmpty(),"priority of unexpected type.");N(t===Zr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;class Ee{static set __childrenNodeConstructor(e){xc=e}static get __childrenNodeConstructor(){return xc}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$u(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:G(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(N(s!==".priority"||Wt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vu(this.value_):e+=this.value_,this.lazyHash_=mu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return N(i>=0,"Unknown leaf type: "+n),N(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku,zu;function ng(t){Ku=t}function sg(t){zu=t}class ig extends Xi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Pn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(rn,new Ee("[PRIORITY-POST]",zu))}makePost(e,n){const s=Ku(e);return new $(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new ig;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=Math.log(2);class og{constructor(e){const n=r=>parseInt(Math.log(r)/rg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let p,g;if(u===0)return null;if(u===1)return p=t[c],g=n?n(p):p,new Ie(g,p.node,Ie.BLACK,null,null);{const y=parseInt(u/2,10)+c,w=i(c,y),O=i(y+1,a);return p=t[y],g=n?n(p):p,new Ie(g,p.node,Ie.BLACK,w,O)}},r=function(c){let a=null,u=null,p=t.length;const g=function(w,O){const j=p-w,V=p;p-=w;const Y=i(j+1,V),Z=t[j],L=n?n(Z):Z;y(new Ie(L,Z.node,O,null,Y))},y=function(w){a?(a.left=w,a=w):(u=w,a=w)};for(let w=0;w<c.count;++w){const O=c.nextBitIsOne(),j=Math.pow(2,c.count-(w+1));O?g(j,Ie.BLACK):(g(j,Ie.BLACK),g(j,Ie.RED))}return u},o=new og(t.length),l=r(o);return new Ue(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;const hn={};class bt{static get Default(){return N(hn&&ge,"ChildrenNode.ts has not been loaded"),Tr=Tr||new bt({".priority":hn},{".priority":ge}),Tr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=In(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=li(s,e.getCompare()):l=hn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new bt(u,a)}addToIndexes(e,n){const s=ti(this.indexes_,(i,r)=>{const o=In(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),i===hn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator($.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),li(l,o.getCompare())}else return hn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new $(e.name,l))),c.insert(e,e.node)}});return new bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ti(this.indexes_,i=>{if(i===hn)return i;{const r=n.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new bt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class W{static get EMPTY_NODE(){return Vn||(Vn=new W(new Ue(Fo),null,bt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$u(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vn}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vn:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new $(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vn:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{N(G(e)!==".priority"||Wt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(de(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gu(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lg extends W{constructor(){super(new Ue(Fo),W.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Ts=new lg;Object.defineProperties($,{MIN:{value:new $(wn,W.EMPTY_NODE)},MAX:{value:new $(rn,Ts)}});ju.__EMPTY_NODE=W.EMPTY_NODE;Ee.__childrenNodeConstructor=W;tg(Ts);sg(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=!0;function we(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,we(e))}if(!(t instanceof Array)&&cg){const n=[];let s=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=we(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new $(o,c)))}}),n.length===0)return W.EMPTY_NODE;const r=li(n,eg,o=>o.name,Fo);if(s){const o=li(n,ge.getCompare());return new W(r,we(e),new bt({".priority":o},{".priority":ge}))}else return new W(r,we(e),bt.Default)}else{let n=W.EMPTY_NODE;return je(t,(s,i)=>{if(St(t,s)&&s.substring(0,1)!=="."){const r=we(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(we(e))}}ng(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends Xi{constructor(e){super(),this.indexPath_=e,N(!z(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Pn(e.name,n.name):r}makePost(e,n){const s=we(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new $(rn,e)}toString(){return Hu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends Xi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const s=we(e);return new $(n,s)}toString(){return".value"}}const fg=new ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){return{type:"value",snapshotNode:t}}function Sn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ps(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ps(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Sn(n,s)):o.trackChildChange(_s(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ge,(i,r)=>{n.hasChild(i)||s.trackChildChange(ps(i,r))}),n.isLeafNode()||n.forEachChild(ge,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(_s(i,r,o))}else s.trackChildChange(Sn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.indexedFilter_=new Wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gs.getStartPost_(e),this.endPost_=gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new $(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,l)=>{r.matches(new $(o,l))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new $(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,y)=>p(y,g)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const c=new $(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const y=g==null?1:o(g,c);if(u&&!s.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(_s(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ps(n,p));const O=l.updateImmediateChild(n,W.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(Sn(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ps(a.name,a.node)),r.trackChildChange(Sn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wn}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pg(t){return t.loadsAllData()?new Wo(t.getIndex()):t.hasLimit()?new dg(t):new gs(t)}function yc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===fg?n="$value":t.index_===Cn?n="$key":(N(t.index_ instanceof ag,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Fu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ss("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ci.getListenId_(e,s),l={};this.listens_[o]=l;const c=yc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let p=u;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),In(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ci.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yc(e._queryParams),s=e._path.toString(),i=new Yi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=us(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){return{value:null,children:new Map}}function Yu(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,ai());const i=t.children.get(s);e=de(e),Yu(i,e,n)}}function eo(t,e,n){t.value!==null?n(e,t.value):gg(t,(s,i)=>{const r=new re(e.toString()+"/"+s);eo(i,r,n)})}function gg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=10*1e3,xg=30*1e3,yg=5*60*1e3;class vg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mg(e);const s=bc+(xg-bc)*Math.random();ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;je(e,(i,r)=>{r>0&&St(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*yg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function Qu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ho(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Uo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=nt.ACK_USER_WRITE,this.source=Qu()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ui(J(),n,this.revert)}}else return N(G(this.path)===e,"operationForChild called for unrelated child."),new ui(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=nt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new ms(this.source,J()):new ms(this.source,de(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=nt.OVERWRITE}operationForChild(e){return z(this.path)?new on(this.source,J(),this.snap.getImmediateChild(e)):new on(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=nt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new on(this.source,J(),n.value):new xs(this.source,J(),n)}else return N(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xs(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Cg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hg(o.childName,o.snapshotNode))}),jn(t,i,"child_removed",e,s,n),jn(t,i,"child_added",e,s,n),jn(t,i,"child_moved",r,s,n),jn(t,i,"child_changed",e,s,n),jn(t,i,"value",e,s,n),i}function jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Ig(t,l,c)),o.forEach(l=>{const c=Eg(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Eg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ig(t,e,n){if(e.childName==null||n.childName==null)throw Rn("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e){return{eventCache:t,serverCache:e}}function ns(t,e,n,s){return Ji(new Bt(e,n,s),t.serverCache)}function Xu(t,e,n,s){return Ji(t.eventCache,new Bt(e,n,s))}function fi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ln(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr;const wg=()=>(Nr||(Nr=new Ue(u0)),Nr);class pe{static fromObject(e){let n=new pe(null);return je(e,(s,i)=>{n=n.set(new re(s),i)}),n}constructor(e,n=wg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(de(e),n);return r!=null?{path:be(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(de(e)):new pe(null)}}set(e,n){if(z(e))return new pe(n,this.children);{const s=G(e),r=(this.children.get(s)||new pe(null)).set(de(e),n),o=this.children.insert(s,r);return new pe(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(de(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(de(e)):null}}setTree(e,n){if(z(e))return n;{const s=G(e),r=(this.children.get(s)||new pe(null)).setTree(de(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new pe(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(de(e),be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(de(e),be(n,i),s):new pe(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.writeTree_=e}static empty(){return new it(new pe(null))}}function ss(t,e,n){if(z(e))return new it(new pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new it(t.writeTree_.set(i,r))}else{const i=new pe(n),r=t.writeTree_.setTree(e,i);return new it(r)}}}function Cc(t,e,n){let s=t;return je(n,(i,r)=>{s=ss(s,be(e,i),r)}),s}function Ec(t,e){if(z(e))return it.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new it(n)}}function to(t,e){return an(t,e)!=null}function an(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function Ic(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{e.push(new $(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function Lt(t,e){if(z(e))return t;{const n=an(t,e);return n!=null?new it(new pe(n)):new it(t.writeTree_.subtree(e))}}function no(t){return t.writeTree_.isEmpty()}function Tn(t,e){return Ju(J(),t.writeTree_,e)}function Ju(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ju(be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(be(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e){return nf(e,t)}function Sg(t,e,n,s,i){N(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ss(t.visibleWrites,e,n)),t.lastWriteId=s}function Tg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ng(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Rg(l,s.path)?i=!1:tt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Ag(t),!0;if(s.snap)t.visibleWrites=Ec(t.visibleWrites,s.path);else{const l=s.children;je(l,c=>{t.visibleWrites=Ec(t.visibleWrites,be(s.path,c))})}return!0}else return!1}function Rg(t,e){if(t.snap)return tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tt(be(t.path,n),e))return!0;return!1}function Ag(t){t.visibleWrites=Zu(t.allWrites,Pg,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pg(t){return t.visible}function Zu(t,e,n){let s=it.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)tt(n,o)?(l=Fe(n,o),s=ss(s,l,r.snap)):tt(o,n)&&(l=Fe(o,n),s=ss(s,J(),r.snap.getChild(l)));else if(r.children){if(tt(n,o))l=Fe(n,o),s=Cc(s,l,r.children);else if(tt(o,n))if(l=Fe(o,n),z(l))s=Cc(s,J(),r.children);else{const c=In(r.children,G(l));if(c){const a=c.getChild(de(l));s=ss(s,J(),a)}}}else throw Rn("WriteRecord should have .snap or .children")}}return s}function ef(t,e,n,s,i){if(!s&&!i){const r=an(t.visibleWrites,e);if(r!=null)return r;{const o=Lt(t.visibleWrites,e);if(no(o))return n;if(n==null&&!to(o,J()))return null;{const l=n||W.EMPTY_NODE;return Tn(o,l)}}}else{const r=Lt(t.visibleWrites,e);if(!i&&no(r))return n;if(!i&&n==null&&!to(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(tt(a.path,e)||tt(e,a.path))},l=Zu(t.allWrites,o,e),c=n||W.EMPTY_NODE;return Tn(l,c)}}}function Dg(t,e,n){let s=W.EMPTY_NODE;const i=an(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Lt(t.visibleWrites,e);return n.forEachChild(ge,(o,l)=>{const c=Tn(Lt(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),Ic(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Lt(t.visibleWrites,e);return Ic(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kg(t,e,n,s,i){N(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=be(e,n);if(to(t.visibleWrites,r))return null;{const o=Lt(t.visibleWrites,r);return no(o)?i.getChild(n):Tn(o,i.getChild(n))}}function Og(t,e,n,s){const i=be(e,n),r=an(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Lt(t.visibleWrites,i);return Tn(o,s.getNode().getImmediateChild(n))}else return null}function Mg(t,e){return an(t.visibleWrites,e)}function Lg(t,e,n,s,i,r,o){let l;const c=Lt(t.visibleWrites,e),a=an(c,J());if(a!=null)l=a;else if(n!=null)l=Tn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let y=g.getNext();for(;y&&u.length<i;)p(y,s)!==0&&u.push(y),y=g.getNext();return u}else return[]}function Fg(){return{visibleWrites:it.empty(),allWrites:[],lastWriteId:-1}}function hi(t,e,n,s){return ef(t.writeTree,t.treePath,e,n,s)}function Vo(t,e){return Dg(t.writeTree,t.treePath,e)}function wc(t,e,n,s){return kg(t.writeTree,t.treePath,e,n,s)}function di(t,e){return Mg(t.writeTree,be(t.treePath,e))}function Wg(t,e,n,s,i,r){return Lg(t.writeTree,t.treePath,e,n,s,i,r)}function jo(t,e,n){return Og(t.writeTree,t.treePath,e,n)}function tf(t,e){return nf(be(t.treePath,e),t.writeTree)}function nf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,_s(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ps(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Sn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,_s(s,e.snapshotNode,i.oldSnap));else throw Rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sf=new Hg;class Go{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ln(this.viewCache_),r=Wg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){return{filter:t}}function Vg(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jg(t,e,n,s,i){const r=new Bg;let o,l;if(n.type===nt.OVERWRITE){const a=n;a.source.fromUser?o=so(t,e,a.path,a.snap,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!z(a.path),o=pi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===nt.MERGE){const a=n;a.source.fromUser?o=$g(t,e,a.path,a.children,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=io(t,e,a.path,a.children,s,i,l,r))}else if(n.type===nt.ACK_USER_WRITE){const a=n;a.revert?o=qg(t,e,a.path,s,i,r):o=Kg(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===nt.LISTEN_COMPLETE)o=zg(t,e,n.path,s,r);else throw Rn("Unknown operation type: "+n.type);const c=r.getChanges();return Gg(e,o,c),{viewCache:o,changes:c}}function Gg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(qu(fi(e)))}}function rf(t,e,n,s,i,r){const o=e.eventCache;if(di(s,n)!=null)return e;{let l,c;if(z(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=ln(e),u=a instanceof W?a:W.EMPTY_NODE,p=Vo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=hi(s,ln(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=G(n);if(a===".priority"){N(Wt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const p=wc(s,n,u,c);p!=null?l=t.filter.updatePriority(u,p):l=o.getNode()}else{const u=de(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=wc(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(u,g):p=o.getNode().getImmediateChild(a)}else p=jo(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,u,i,r):l=o.getNode()}}return ns(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function pi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const y=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),y,null)}else{const y=G(n);if(!c.isCompleteForPath(n)&&Wt(n)>1)return e;const w=de(n),j=c.getNode().getImmediateChild(y).updateChild(w,s);y===".priority"?a=u.updatePriority(c.getNode(),j):a=u.updateChild(c.getNode(),y,j,w,sf,null)}const p=Xu(e,a,c.isFullyInitialized()||z(n),u.filtersNodes()),g=new Go(i,p,r);return rf(t,p,n,i,g,l)}function so(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Go(i,e,r);if(z(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ns(e,a,!0,t.filter.filtersNodes());else{const p=G(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ns(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=de(n),y=l.getNode().getImmediateChild(p);let w;if(z(g))w=s;else{const O=u.getCompleteChild(p);O!=null?Bu(g)===".priority"&&O.getChild(Uu(g)).isEmpty()?w=O:w=O.updateChild(g,s):w=W.EMPTY_NODE}if(y.equals(w))c=e;else{const O=t.filter.updateChild(l.getNode(),p,w,g,u,o);c=ns(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Sc(t,e){return t.eventCache.isCompleteForChild(e)}function $g(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=be(n,c);Sc(e,G(u))&&(l=so(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=be(n,c);Sc(e,G(u))||(l=so(t,l,u,a,i,r,o))}),l}function Tc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function io(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;z(n)?a=s:a=new pe(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(u.hasChild(p)){const y=e.serverCache.getNode().getImmediateChild(p),w=Tc(t,y,g);c=pi(t,c,new re(p),w,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const y=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!u.hasChild(p)&&!y){const w=e.serverCache.getNode().getImmediateChild(p),O=Tc(t,w,g);c=pi(t,c,new re(p),O,i,r,o,l)}}),c}function Kg(t,e,n,s,i,r,o){if(di(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return pi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(z(n)){let a=new pe(null);return c.getNode().forEachChild(Cn,(u,p)=>{a=a.set(new re(u),p)}),io(t,e,n,a,i,r,l,o)}else return e}else{let a=new pe(null);return s.foreach((u,p)=>{const g=be(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),io(t,e,n,a,i,r,l,o)}}function zg(t,e,n,s,i){const r=e.serverCache,o=Xu(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return rf(t,o,n,s,sf,i)}function qg(t,e,n,s,i,r){let o;if(di(s,n)!=null)return e;{const l=new Go(s,e,i),c=e.eventCache.getNode();let a;if(z(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=hi(s,ln(e));else{const p=e.serverCache.getNode();N(p instanceof W,"serverChildren would be complete if leaf node"),u=Vo(s,p)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=G(n);let p=jo(s,u,e.serverCache);p==null&&e.serverCache.isCompleteForChild(u)&&(p=c.getImmediateChild(u)),p!=null?a=t.filter.updateChild(c,u,p,de(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,W.EMPTY_NODE,de(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hi(s,ln(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||di(s,J())!=null,ns(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wo(s.getIndex()),r=pg(s);this.processor_=Ug(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(W.EMPTY_NODE,l.getNode(),null),u=new Bt(c,o.isFullyInitialized(),i.filtersNodes()),p=new Bt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ji(p,u),this.eventGenerator_=new bg(this.query_)}get query(){return this.query_}}function Qg(t){return t.viewCache_.serverCache.getNode()}function Xg(t){return fi(t.viewCache_)}function Jg(t,e){const n=ln(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Nc(t){return t.eventRegistrations_.length===0}function Zg(t,e){t.eventRegistrations_.push(e)}function Rc(t,e,n){const s=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ac(t,e,n,s){e.type===nt.MERGE&&e.source.queryId!==null&&(N(ln(t.viewCache_),"We should always have a full cache before handling merges"),N(fi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=jg(t.processor_,i,e,n,s);return Vg(t.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,of(t,r.changes,r.viewCache.eventCache.getNode(),null)}function em(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(r,o)=>{s.push(Sn(r,o))}),n.isFullyInitialized()&&s.push(qu(n.getNode())),of(t,s,n.getNode(),e)}function of(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Cg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class lf{constructor(){this.views=new Map}}function tm(t){N(!_i,"__referenceConstructor has already been defined"),_i=t}function nm(){return N(_i,"Reference.ts has not been loaded"),_i}function sm(t){return t.views.size===0}function $o(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return N(r!=null,"SyncTree gave us an op for an invalid query."),Ac(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ac(o,e,n,s));return r}}function cf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=hi(n,i?s:null),c=!1;l?c=!0:s instanceof W?(l=Vo(n,s),c=!1):(l=W.EMPTY_NODE,c=!1);const a=Ji(new Bt(l,c,!1),new Bt(s,i,!1));return new Yg(e,a)}return o}function im(t,e,n,s,i,r){const o=cf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Zg(o,n),em(o,n)}function rm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ht(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Rc(a,n,s)),Nc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Rc(c,n,s)),Nc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Ht(t)&&r.push(new(nm())(e._repo,e._path)),{removed:r,events:o}}function af(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ft(t,e){let n=null;for(const s of t.views.values())n=n||Jg(s,e);return n}function uf(t,e){if(e._queryParams.loadsAllData())return er(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ff(t,e){return uf(t,e)!=null}function Ht(t){return er(t)!=null}function er(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;function om(t){N(!gi,"__referenceConstructor has already been defined"),gi=t}function lm(){return N(gi,"Reference.ts has not been loaded"),gi}let cm=1;class Pc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=Fg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hf(t,e,n,s,i){return Sg(t.pendingWriteTree_,e,n,s,i),i?Rs(t,new on(Qu(),e,n)):[]}function Zt(t,e,n=!1){const s=Tg(t.pendingWriteTree_,e);if(Ng(t.pendingWriteTree_,e)){let r=new pe(null);return s.snap!=null?r=r.set(J(),!0):je(s.children,o=>{r=r.set(new re(o),!0)}),Rs(t,new ui(s.path,r,n))}else return[]}function Ns(t,e,n){return Rs(t,new on(Ho(),e,n))}function am(t,e,n){const s=pe.fromObject(n);return Rs(t,new xs(Ho(),e,s))}function um(t,e){return Rs(t,new ms(Ho(),e))}function fm(t,e,n){const s=zo(t,n);if(s){const i=qo(s),r=i.path,o=i.queryId,l=Fe(r,e),c=new ms(Uo(o),l);return Yo(t,r,c)}else return[]}function mi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ff(o,e))){const c=rm(o,e,n,s);sm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,y)=>Ht(y));if(u&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const y=pm(g);for(let w=0;w<y.length;++w){const O=y[w],j=O.query,V=gf(t,O);t.listenProvider_.startListening(is(j),ys(t,j),V.hashFn,V.onComplete)}}}!p&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(is(e),null):a.forEach(g=>{const y=t.queryToTagMap.get(tr(g));t.listenProvider_.stopListening(is(g),y)}))}_m(t,a)}return l}function df(t,e,n,s){const i=zo(t,s);if(i!=null){const r=qo(i),o=r.path,l=r.queryId,c=Fe(o,e),a=new on(Uo(l),c,n);return Yo(t,o,a)}else return[]}function hm(t,e,n,s){const i=zo(t,s);if(i){const r=qo(i),o=r.path,l=r.queryId,c=Fe(o,e),a=pe.fromObject(n),u=new xs(Uo(l),c,a);return Yo(t,o,u)}else return[]}function ro(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,y)=>{const w=Fe(g,i);r=r||Ft(y,w),o=o||Ht(y)});let l=t.syncPointTree_.get(i);l?(o=o||Ht(l),r=r||Ft(l,J())):(l=new lf,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,w)=>{const O=Ft(w,J());O&&(r=r.updateImmediateChild(y,O))}));const a=ff(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=tr(e);N(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const y=gm();t.queryToTagMap.set(g,y),t.tagToQueryMap.set(y,g)}const u=Zi(t.pendingWriteTree_,i);let p=im(l,e,n,u,r,c);if(!a&&!o&&!s){const g=uf(l,e);p=p.concat(mm(t,e,g))}return p}function Ko(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Fe(o,e),a=Ft(l,c);if(a)return a});return ef(i,e,r,n,!0)}function dm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const p=Fe(a,n);s=s||Ft(u,p)});let i=t.syncPointTree_.get(n);i?s=s||Ft(i,J()):(i=new lf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Bt(s,!0,!1):null,l=Zi(t.pendingWriteTree_,e._path),c=cf(i,e,l,r?o.getNode():W.EMPTY_NODE,r);return Xg(c)}function Rs(t,e){return pf(e,t.syncPointTree_,null,Zi(t.pendingWriteTree_,J()))}function pf(t,e,n,s){if(z(t.path))return _f(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Ft(i,J()));let r=[];const o=G(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=tf(s,o);r=r.concat(pf(l,c,a,u))}return i&&(r=r.concat($o(i,t,s,n))),r}}function _f(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Ft(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=tf(s,o),u=t.operationForChild(o);u&&(r=r.concat(_f(u,l,c,a)))}),i&&(r=r.concat($o(i,t,s,n))),r}function gf(t,e){const n=e.query,s=ys(t,n);return{hashFn:()=>(Qg(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?fm(t,n._path,s):um(t,n._path);{const r=d0(i,n);return mi(t,n,null,r)}}}}function ys(t,e){const n=tr(e);return t.queryToTagMap.get(n)}function tr(t){return t._path.toString()+"$"+t._queryIdentifier}function zo(t,e){return t.tagToQueryMap.get(e)}function qo(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Yo(t,e,n){const s=t.syncPointTree_.get(e);N(s,"Missing sync point for query tag that we're tracking");const i=Zi(t.pendingWriteTree_,e);return $o(s,n,i,null)}function pm(t){return t.fold((e,n,s)=>{if(n&&Ht(n))return[er(n)];{let i=[];return n&&(i=af(n)),je(s,(r,o)=>{i=i.concat(o)}),i}})}function is(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(lm())(t._repo,t._path):t}function _m(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=tr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function gm(){return cm++}function mm(t,e,n){const s=e._path,i=ys(t,e),r=gf(t,n),o=t.listenProvider_.startListening(is(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)N(!Ht(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,p)=>{if(!z(a)&&u&&Ht(u))return[er(u).query];{let g=[];return u&&(g=g.concat(af(u).map(y=>y.query))),je(p,(y,w)=>{g=g.concat(w)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(is(u),ys(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qo(n)}node(){return this.node_}}class Xo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new Xo(this.syncTree_,n)}node(){return Ko(this.syncTree_,this.path_)}}const xm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dc=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ym(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vm(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ym=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},vm=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&N(!1,"Unexpected increment value: "+s);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bm=function(t,e,n,s){return Jo(e,new Xo(n,t),s)},mf=function(t,e,n){return Jo(t,new Qo(e),n)};function Jo(t,e,n){const s=t.getPriority().val(),i=Dc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Dc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,we(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(ge,(l,c)=>{const a=Jo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function el(t,e){let n=e instanceof re?e:new re(e),s=t,i=G(n);for(;i!==null;){const r=In(s.node.children,i)||{children:{},childCount:0};s=new Zo(i,s,r),n=de(n),i=G(n)}return s}function kn(t){return t.node.value}function xf(t,e){t.node.value=e,oo(t)}function yf(t){return t.node.childCount>0}function Cm(t){return kn(t)===void 0&&!yf(t)}function nr(t,e){je(t.node.children,(n,s)=>{e(new Zo(n,t,s))})}function vf(t,e,n,s){n&&e(t),nr(t,i=>{vf(i,e,!0)})}function Em(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function As(t){return new re(t.parent===null?t.name:As(t.parent)+"/"+t.name)}function oo(t){t.parent!==null&&Im(t.parent,t.name,t)}function Im(t,e,n){const s=Cm(n),i=St(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,oo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,oo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=/[\[\].#$\/\u0000-\u001F\u007F]/,Sm=/[\[\].#$\u0000-\u001F\u007F]/,Rr=10*1024*1024,bf=function(t){return typeof t=="string"&&t.length!==0&&!wm.test(t)},Cf=function(t){return typeof t=="string"&&t.length!==0&&!Sm.test(t)},Tm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cf(t)},Nm=function(t,e,n,s){tl(Ro(t,"value"),e,n)},tl=function(t,e,n){const s=n instanceof re?new K0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xt(s)+" with contents = "+e.toString());if(xu(e))throw new Error(t+"contains "+e.toString()+" "+Xt(s));if(typeof e=="string"&&e.length>Rr/3&&Qi(e)>Rr)throw new Error(t+"contains a string greater than "+Rr+" utf8 bytes "+Xt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!bf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);z0(s,o),tl(t,l,s),q0(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xt(s)+" in addition to actual children.")}},Ef=function(t,e,n,s){if(!Cf(n))throw new Error(Ro(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Rm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ef(t,e,n)},If=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Am=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Tm(n))throw new Error(Ro(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Mo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function wf(t,e,n){nl(t,n),Sf(t,s=>Mo(s,e))}function _t(t,e,n){nl(t,n),Sf(t,s=>tt(s,e)||tt(e,s))}function Sf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Dm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Dm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();es&&Ae("event: "+n.toString()),Dn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="repo_interrupt",Om=25;class Mm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ai(),this.transactionQueueTree_=new Zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lm(t,e,n){if(t.stats_=ko(t.repoInfo_),t.forceRestClient_||m0())t.server_=new ci(t.repoInfo_,(s,i,r,o)=>{kc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Oc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ct(t.repoInfo_,e,(s,i,r,o)=>{kc(t,s,i,r,o)},s=>{Oc(t,s)},s=>{Wm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=C0(t.repoInfo_,()=>new vg(t.stats_,t.server_)),t.infoData_=new _g,t.infoSyncTree_=new Pc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ns(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),il(t,"connected",!1),t.serverSyncTree_=new Pc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);_t(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Fm(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sl(t){return xm({timestamp:Fm(t)})}function kc(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ti(n,a=>we(a));o=hm(t.serverSyncTree_,r,c,i)}else{const c=we(n);o=df(t.serverSyncTree_,r,c,i)}else if(s){const c=ti(n,a=>we(a));o=am(t.serverSyncTree_,r,c)}else{const c=we(n);o=Ns(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=ir(t,r)),_t(t.eventQueue_,l,o)}function Oc(t,e){il(t,"connected",e),e===!1&&Um(t)}function Wm(t,e){je(e,(n,s)=>{il(t,n,s)})}function il(t,e,n){const s=new re("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(s,i);const r=Ns(t.infoSyncTree_,s,i);_t(t.eventQueue_,s,r)}function Tf(t){return t.nextWriteId_++}function Bm(t,e,n){const s=dm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=we(i).withIndex(e._queryParams.getIndex());ro(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ns(t.serverSyncTree_,e._path,r);else{const l=ys(t.serverSyncTree_,e);o=df(t.serverSyncTree_,e._path,r,l)}return _t(t.eventQueue_,e._path,o),mi(t.serverSyncTree_,e,n,null,!0),r},i=>(sr(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function Hm(t,e,n,s,i){sr(t,"set",{path:e.toString(),value:n,priority:s});const r=sl(t),o=we(n,s),l=Ko(t.serverSyncTree_,e),c=mf(o,l,r),a=Tf(t),u=hf(t.serverSyncTree_,e,c,a,!0);nl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,y)=>{const w=g==="ok";w||Ve("set at "+e+" failed: "+g);const O=Zt(t.serverSyncTree_,a,!w);_t(t.eventQueue_,e,O),Gm(t,i,g,y)});const p=Df(t,e);ir(t,p),_t(t.eventQueue_,p,[])}function Um(t){sr(t,"onDisconnectEvents");const e=sl(t),n=ai();eo(t.onDisconnect_,J(),(i,r)=>{const o=bm(i,r,t.serverSyncTree_,e);Yu(n,i,o)});let s=[];eo(n,J(),(i,r)=>{s=s.concat(Ns(t.serverSyncTree_,i,r));const o=Df(t,i);ir(t,o)}),t.onDisconnect_=ai(),_t(t.eventQueue_,J(),s)}function Vm(t,e,n){let s;G(e._path)===".info"?s=ro(t.infoSyncTree_,e,n):s=ro(t.serverSyncTree_,e,n),wf(t.eventQueue_,e._path,s)}function Mc(t,e,n){let s;G(e._path)===".info"?s=mi(t.infoSyncTree_,e,n):s=mi(t.serverSyncTree_,e,n),wf(t.eventQueue_,e._path,s)}function jm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(km)}function sr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function Gm(t,e,n,s){e&&Dn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Nf(t,e,n){return Ko(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function rl(t,e=t.transactionQueueTree_){if(e||rr(t,e),kn(e)){const n=Af(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$m(t,As(e),n)}else yf(e)&&nr(e,n=>{rl(t,n)})}function $m(t,e,n){const s=n.map(a=>a.currentWriteId),i=Nf(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const p=Fe(e,u.path);r=r.updateChild(p,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{sr(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(Zt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();rr(t,el(t.transactionQueueTree_,e)),rl(t,t.transactionQueueTree_),_t(t.eventQueue_,e,u);for(let g=0;g<p.length;g++)Dn(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ve("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}ir(t,e)}},o)}function ir(t,e){const n=Rf(t,e),s=As(n),i=Af(t,n);return Km(t,i,s),s}function Km(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Fe(n,c.path);let u=!1,p;if(N(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,p=c.abortReason,i=i.concat(Zt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Om)u=!0,p="maxretry",i=i.concat(Zt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=Nf(t,c.path,o);c.currentInputSnapshot=g;const y=e[l].update(g.val());if(y!==void 0){tl("transaction failed: Data returned ",y,c.path);let w=we(y);typeof y=="object"&&y!=null&&St(y,".priority")||(w=w.updatePriority(g.getPriority()));const j=c.currentWriteId,V=sl(t),Y=mf(w,g,V);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=Y,c.currentWriteId=Tf(t),o.splice(o.indexOf(j),1),i=i.concat(hf(t.serverSyncTree_,c.path,Y,c.currentWriteId,c.applyLocally)),i=i.concat(Zt(t.serverSyncTree_,j,!0))}else u=!0,p="nodata",i=i.concat(Zt(t.serverSyncTree_,c.currentWriteId,!0))}_t(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}rr(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Dn(s[l]);rl(t,t.transactionQueueTree_)}function Rf(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&kn(s)===void 0;)s=el(s,n),e=de(e),n=G(e);return s}function Af(t,e){const n=[];return Pf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Pf(t,e,n){const s=kn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);nr(e,i=>{Pf(t,i,n)})}function rr(t,e){const n=kn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xf(e,n.length>0?n:void 0)}nr(e,s=>{rr(t,s)})}function Df(t,e){const n=As(Rf(t,e)),s=el(t.transactionQueueTree_,e);return Em(s,i=>{Ar(t,i)}),Ar(t,s),vf(s,i=>{Ar(t,i)}),n}function Ar(t,e){const n=kn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xf(e,void 0):n.length=r+1,_t(t.eventQueue_,As(e),i);for(let o=0;o<s.length;o++)Dn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lc=function(t,e){const n=Ym(t),s=n.namespace;n.domain==="firebase.com"&&It(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||c0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Au(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},Ym=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(u,p)),u<p&&(i=zm(t.substring(u,p)));const g=qm(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const y=e.slice(0,a);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class Xm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ol{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:Bu(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=vc(this._queryParams),n=Po(e);return n==="{}"?"default":n}get _queryObject(){return vc(this._queryParams)}isEqual(e){if(e=An(e),!(e instanceof ol))return!1;const n=this._repo===e._repo,s=Mo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$0(this._path)}}class Tt extends ol{constructor(e,n){super(e,n,new Bo,!1)}get parent(){const e=Uu(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=lo(this.ref,e);return new vs(this._node.getChild(n),s,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new vs(i,lo(this.ref,s),ge)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bs(t,e){return t=An(t),t._checkNotDeleted("ref"),e!==void 0?lo(t._root,e):t._root}function lo(t,e){return t=An(t),G(t._path)===null?Rm("child","path",e):Ef("child","path",e),new Tt(t._repo,be(t._path,e))}function Jm(t){return If("remove",t._path),Of(t,null)}function Of(t,e){t=An(t),If("set",t._path),Nm("set",e,t._path);const n=new Yi;return Hm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Zm(t){t=An(t);const e=new kf(()=>{}),n=new or(e);return Bm(t._repo,t,n).then(s=>new vs(s,new Tt(t._repo,t._path),t._queryParams.getIndex()))}class or{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Qm("value",this,new vs(e.snapshotNode,new Tt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Xm(this,e,n):null}matches(e){return e instanceof or?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ex(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,p)=>{Mc(t._repo,t,l),c(u,p)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new kf(n,r||void 0),l=new or(o);return Vm(t._repo,t,l),()=>Mc(t._repo,t,l)}function tx(t,e,n,s){return ex(t,"value",e,n,s)}tm(Tt);om(Tt);/**
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
 */const nx="FIREBASE_DATABASE_EMULATOR_HOST",co={};let sx=!1;function ix(t,e,n,s){t.repoInfo_=new Au(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function rx(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lc(r,i),l=o.repoInfo,c;typeof process<"u"&&nc&&(c=nc[nx]),c?(r=`http://${c}?ns=${l.namespace}`,o=Lc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new y0(t.name,t.options,e);Am("Invalid Firebase Database URL",o),z(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const u=lx(l,t,a,new x0(t,n));return new cx(u,t)}function ox(t,e){const n=co[e];(!n||n[t.key]!==t)&&It(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jm(t),delete n[t.key]}function lx(t,e,n,s){let i=co[e.name];i||(i={},co[e.name]=i);let r=i[t.toURLString()];return r&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mm(t,sx,n,s),i[t.toURLString()]=r,r}class cx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ox(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}}function ax(t=j_(),e){const n=W_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Tp("database");s&&ux(n,...s)}return n}function ux(t,e,n,s={}){t=An(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ni(s,r.repoInfo_.emulatorOptions))return;It("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&It('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Gs(Gs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Np(s.mockUserToken,t.app.options.projectId);o=new Gs(l)}ix(r,i,s,o)}/**
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
 */function fx(t){n0(V_),ii(new fs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rx(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),vn(sc,ic,t),vn(sc,ic,"esm2017")}Ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fx();function xi(t,e){const n=yi();return xi=function(s,i){return s=s-467,n[s]},xi(t,e)}const qt=xi;(function(t,e){const n=xi,s=t();for(;;)try{if(-parseInt(n(468))/1*(parseInt(n(478))/2)+parseInt(n(472))/3*(-parseInt(n(474))/4)+-parseInt(n(480))/5*(parseInt(n(483))/6)+-parseInt(n(469))/7+parseInt(n(479))/8+-parseInt(n(477))/9+parseInt(n(467))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,725839);function yi(){const t=["113547SURoOw","720775593565","20RtcSBd","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","1:720775593565:web:1a263bf6a87ecfea3817b4","5283225RgLjQa","2093488GIQZSw","3866048HzCntm","4985815WEOora","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","iamwait","6VcLAig","38690950RNFObK","1IUEGJT","5644345zAsOhT","iamwait.firebasestorage.app","iamwait.firebaseapp.com"];return yi=function(){return t},yi()}const hx={apiKey:qt(481),authDomain:qt(471),databaseURL:qt(475),projectId:qt(482),storageBucket:qt(470),messagingSenderId:qt(473),appId:qt(476),measurementId:"G-3RRDNZ9ME5"},dx=hu(hx),Hs=ax(dx);function vi(t,e){const n=bi();return vi=function(s,i){return s=s-177,n[s]},vi(t,e)}function bi(){const t=["then","uIqrJ","stringify","########### ########## Данные ","Камень ножницы бумага","30961sCVsUE","11TaMkvL","193569vlSMou"," -  данные записаны","val","SdCqc","KHIZU","log","eWfit"," удалены!","14CSwVPu"," : данные не найдены","35528gJJXqF","pWLht","PAXGD","arAmG","4KRHTah","1501510dhuoWZ","133qyrfUf","42270nmFEVj","TiINH","NGHUh","1449162YmfTLZ","FULQF","catch","lookField","Морской бой","98502bRbAIp","Данные ","jxSaJ","exists","Крестики нолики",">>> Данные по "];return bi=function(){return t},bi()}const Rt=vi;(function(t,e){const n=vi,s=t();for(;;)try{if(-parseInt(n(190))/1*(-parseInt(n(200))/2)+parseInt(n(192))/3*(-parseInt(n(206))/4)+-parseInt(n(209))/5+parseInt(n(179))/6+-parseInt(n(208))/7*(-parseInt(n(202))/8)+parseInt(n(212))/9+parseInt(n(207))/10*(-parseInt(n(191))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(bi,255413);const On=_p("fbStore2",{state:()=>({gameId:"",gameNames:{g1:Rt(189),g2:Rt(183),g3:Rt(178)},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:-1,playNumber:0,gameLink:""}),actions:{async getField(t){const e=Rt,n={uIqrJ:function(i,r){return i(r)},NGHUh:function(i,r){return i+r},SdCqc:function(i,r){return i(r)},jxSaJ:"empty",pWLht:function(i,r,o){return i(r,o)},rrMrg:function(i,r){return i(r)}},s=n[e(203)](Bs,Hs,t);return n.rrMrg(Zm,s).then(i=>{const r=e;if(i[r(182)]()){const o=i[r(194)]();return n[r(186)](Gn,n[r(211)](r(184)+t+" = ",JSON[r(187)](o))),o}else return n[r(195)](Gn,t+r(201)),n[r(181)]})},async setField(t,e){const n=Rt,s={PYpsM:function(r,o){return r(o)},PAXGD:function(r,o){return r+o},KHIZU:"Ошибка записи данных: ",FULQF:function(r,o,l){return r(o,l)}},i=Bs(Hs,t);return s[n(213)](Of,i,e).then(()=>{const r=n;s.PYpsM(Gn,s[r(204)](t,r(193)))})[n(214)](r=>{console.error(s[n(196)],r)})},async onValue(t){const e=Rt,n={wcIuc:function(i,r){return i(r)},arAmG:function(i,r,o){return i(r,o)}},s=Bs(Hs,t);n[e(205)](tx,s,i=>{const r=e;n.wcIuc(Gn,r(188)+t+" на прослушке"),this[r(177)]=i[r(194)]()})},async removeField(t){const e=Rt,n={eWfit:function(i,r){return i(r)},TiINH:function(i,r,o){return i(r,o)}};console[e(197)](t);const s=n[e(210)](Bs,Hs,t);Jm(s)[e(185)](()=>{const i=e;n[i(198)](Gn,i(180)+t+i(199))})}}}),Gn=t=>console[Rt(197)]("%c "+t,"color: darkgreen"),Pr=Ci;(function(t,e){const n=Ci,s=t();for(;;)try{if(-parseInt(n(459))/1+-parseInt(n(444))/2*(-parseInt(n(430))/3)+parseInt(n(438))/4*(-parseInt(n(445))/5)+parseInt(n(450))/6+parseInt(n(436))/7*(-parseInt(n(455))/8)+-parseInt(n(454))/9*(-parseInt(n(427))/10)+parseInt(n(421))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ei,347857);function Ci(t,e){const n=Ei();return Ci=function(s,i){return s=s-420,n[s]},Ci(t,e)}function Ei(){const t=["vPezW","GbfzP","4775180aHdhtV","bAjZE","XYxBF","288OACRxz","LYGYe","QIGHD","GoEHJ","KZoyp","gameChanged","665RoQnsi"," Начальная страница ","4748vSyCna","SryeG","iAmWaitingForYou","div","button"," Крестики нолики ","8998CQpwZx","2795ZIwJOO","ListGames","gameId","XvqMw","yLEjj","3063648lGXrug","FTSHn"," Необходимо будет попросить другого участника найти этот miniapp по имени: ","pMkre","9OOKeLT","3200kgjqZl","kWEmi","log","Выберите игру","468162ddddRg","RGcan","1072742yTRiWu"," Камень ножницы бумага ","AqUMZ","DcjDV"];return Ei=function(){return t},Ei()}const px=Nn({__name:Pr(446),emits:[Pr(435)],setup(t,{emit:e}){const n=Pr,s={cVBtv:function(l,c){return l+c},RGcan:function(l,c){return l(c)},GbfzP:n(435),kWEmi:function(l){return l()},SryeG:function(l,c,a,u){return l(c,a,u)},yLEjj:n(441),LZtvy:n(437),GoEHJ:function(l,c,a,u,p){return l(c,a,u,p)},DcjDV:n(458),iObxn:function(l,c,a,u,p){return l(c,a,u,p)},LcevQ:n(422),vPezW:function(l,c,a,u,p){return l(c,a,u,p)},XvqMw:n(442),KZoyp:n(443),TpmmE:function(l){return l()},XYxBF:function(l,c,a,u,p){return l(c,a,u,p)},ODlJJ:" Морской бой ",QIGHD:function(l,c,a,u,p){return l(c,a,u,p)},AqUMZ:function(l,c,a,u,p){return l(c,a,u,p)},pMkre:function(l){return l()},YWofD:function(l){return l()},LYGYe:function(l,c,a,u,p){return l(c,a,u,p)},FTSHn:function(l,c,a,u,p){return l(c,a,u,p)},bAjZE:function(l){return l()}},i=s[n(428)](On),r=e;function o(l){const c=n;console[c(457)](l),i[c(447)]=s.cVBtv("g",l),s.RGcan(r,s[c(426)])}return(l,c)=>{const a=n;return s[a(456)](ne),s[a(439)](ue,s[a(449)],null,[c[3]||(c[3]=se(s.LZtvy)),c[4]||(c[4]=s[a(433)](v,"h3",null,s[a(424)],-1)),c[5]||(c[5]=s.iObxn(v,"br",null,null,-1)),v(a(442),{onClick:c[0]||(c[0]=u=>o(1))},s.LcevQ),c[6]||(c[6]=s[a(425)](v,"br",null,null,-1)),c[7]||(c[7]=se()),c[8]||(c[8]=s[a(425)](v,"br",null,null,-1)),s[a(439)](v,s.XvqMw,{onClick:c[1]||(c[1]=u=>o(2))},s[a(434)]),c[9]||(c[9]=v("br",null,null,-1)),c[10]||(c[10]=s.TpmmE(se)),c[11]||(c[11]=s[a(429)](v,"br",null,null,-1)),v(s[a(448)],{onClick:c[2]||(c[2]=u=>o(3))},s.ODlJJ),c[12]||(c[12]=s[a(432)](v,"br",null,null,-1)),c[13]||(c[13]=s[a(423)](v,"br",null,null,-1)),c[14]||(c[14]=s[a(453)](se)),c[15]||(c[15]=s[a(429)](v,"br",null,null,-1)),c[16]||(c[16]=s[a(420)](se,a(452))),c[17]||(c[17]=s[a(433)](v,"br",null,null,-1)),c[18]||(c[18]=s.YWofD(se)),c[19]||(c[19]=s[a(431)](v,"br",null,null,-1)),c[20]||(c[20]=s[a(423)](v,"b",null,a(440),-1)),c[21]||(c[21]=s[a(451)](v,"br",null,null,-1)),c[22]||(c[22]=se()),c[23]||(c[23]=s[a(429)](v,"br",null,null,-1)),c[24]||(c[24]=se(" и договориться о выборе игры "))])}}}),ao=wi;(function(t,e){const n=wi,s=t();for(;;)try{if(parseInt(n(279))/1+parseInt(n(281))/2+parseInt(n(273))/3*(-parseInt(n(288))/4)+-parseInt(n(285))/5*(parseInt(n(277))/6)+-parseInt(n(275))/7+-parseInt(n(276))/8+-parseInt(n(289))/9*(-parseInt(n(294))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,818020);function Ii(){const t=["nPjGU","6053726OUlxvQ","6907136FHxliW","140598UMSrpa","JiBET","463355uNodMl","menuBt","1683058GrPmne","Удалить игру","button","nlJpe","5bLKsiC","value","gCFGa","4vObiok","36JIURGP","fVkiq","Инфо","RWYhh","AipVn","4041970smwJjp","toExit","div","menuBt_bt","1056027HftzDr"];return Ii=function(){return t},Ii()}function wi(t,e){const n=Ii();return wi=function(s,i){return s=s-273,n[s]},wi(t,e)}const _x={class:ao(280)},gx={key:0,class:"panel"},mx=Nn({__name:"MenuButton",emits:[ao(295)],setup(t,{emit:e}){const n=ao,s={kGANf:function(l){return l()},nPjGU:function(l,c,a,u){return l(c,a,u)},gCFGa:n(296),nlJpe:n(283),AipVn:n(297),JiBET:n(282),CkSkg:function(l,c,a,u,p){return l(c,a,u,p)},fVkiq:function(l,c,a,u,p){return l(c,a,u,p)},nnJWP:n(291),RWYhh:function(l,c,a){return l(c,a)}},i=e,r=s.kGANf(Be);function o(l){const c=n;switch(l){case(l=1):i(c(295));break}r.value=!1}return(l,c)=>{const a=n;return s.kGANf(ne),s[a(274)](ue,s.gCFGa,_x,[s.nPjGU(v,s[a(287)],null,[s.nPjGU(v,s[a(284)],{class:s[a(293)],onClick:c[0]||(c[0]=u=>r[a(286)]=!r[a(286)])},"❁")]),r[a(286)]?(ne(),ue(s[a(287)],gx,[v("a",{onClick:c[1]||(c[1]=u=>o(1))},s[a(278)]),c[2]||(c[2]=se()),c[3]||(c[3]=s.CkSkg(v,"br",null,null,-1)),c[4]||(c[4]=s[a(290)](v,"a",null,s.nnJWP,-1))])):s[a(292)](ke,"",!0)])}}}),Ps=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},xx=Ps(mx,[["__scopeId","data-v-ff2e1591"]]),gt=Ze;(function(t,e){const n=Ze,s=t();for(;;)try{if(-parseInt(n(378))/1+-parseInt(n(554))/2+parseInt(n(384))/3+parseInt(n(403))/4*(parseInt(n(501))/5)+parseInt(n(556))/6*(parseInt(n(437))/7)+-parseInt(n(546))/8+parseInt(n(508))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Si,670740);function Si(){const t=["getItem","WblBz","Нахожусь в списке, жду соперника","rWiKd","forEach","lLcDB","AAXmv","hdZjS","red-bt","gTdLy","aFpmO","/games/","ZpFYc","KHLXg","ouTPL","1331853GYxyHE","bzsJq","gameId","HNist","red-notice","TBiLo","1514190SRRDOs","mAyon","LRBVt","MUZxE",">>>> ANALIZ ","wMsXE","Kzjxw","UayMO","voVoy","input","FPOBX","myNickName","EGQWW","ZHvdi","DmEZi","pgBsI","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","log","gameLink","148dNqGGI"," Выбрал игрока ","eYhsc","zWsOF","hkxZt","AJKWT","iGnhv"," Привет ","30px","KMEZA","#ddd","GfqDc","swLsv","lookField","myId","Согласиться","accept","ВСЕ НАСТРОЙКИ ИГРЫ","ENSNV","BLRwA","KeNvh"," Вас выбрал игрок: ","20px","VkAiO","ihHFd","larger","AJELv","BinderComp","kFlRJ","HSnvl","res","lpRwP","button","reload","67431tpyjgZ","Играть","CkaYW","context","IwgLi","FhNWh","stage","Sjmsz","nZALi","qwWAS","Нет желающих, отменяю ожидание","...загрузка","tEmuC","wpMWy","kUCOT","KrbTt","slice","red","nrEjx","OhTMG","Хорошо бы сообщить сопернику, что вы ушли из игры","whDeq","div","qqsdI","antmk","then"," ИГРАЙТЕ ВДВОЕМ ","ooAuV","HUAYw","aRFSw","uaKUn","TyaCd","* нельзя выбирать себя","GltCR","setField","myName","jDwlV","nick","trsQl","value","UeWTG","id2","OBTJU","zkRMG","playNumber","split","QZnjO","viPHT","HUBXK","Список желающих играть:","UYyZf","TEumr","NnlxY","/list/","EXwNZ","name","RoUxq","mTXOg","TdldX","NHhpf","length","VeGBt","nOpfc","hIqLj","166805BxSOVj","/look/","hvdSy","removeField","DwiwB","sGWkD","DoKzu","8828136CDdqmT","sMDop","push","KhvDW","iVwgX","TjuTm","aEnOb","includes","green-bt","QgyMQ","bCZtO","Tiomv","Ewdde","xooWC","RLKRU"," : ","fNBmz","eTcXD","ZHgkt","TPjLx","getField","kGJoI","HnDRz","Играем","onClick","JVgYG","EmQBo","Сменить nickName","fImtb","Jbssm","uPbeA","/look","жду пока не откликнится ","iCZta","XZSed","XMROT","NcwJE","RfVMn","4420024HsxkuH"," Зарегистрироваться в поиске ","OhgQa","fRRTw","ovGWZ","pPkaN","Нет ответа, отменяю выбор","oIcUo","387588itYXda","4px","18IgHDjk","Msgvm","QpSSH","zRAqL","frIEA","setItem","0|5|7|1|3|6|2|4"];return Si=function(){return t},Si()}function Ze(t,e){const n=Si();return Ze=function(s,i){return s=s-377,n[s]},Ze(t,e)}const yx={key:0},vx={key:1},bx={key:2},Cx={key:3},Ex={key:4},Ix={class:gt(382)},wx={key:0},Sx=[gt(532)],Tx={key:5},Nx={key:0},Rx=[gt(532)],Ax={key:1,class:"red-notice"},Px={key:6},Dx={key:7},kx={key:8},Ox={style:{"font-size":gt(411)}},Mx={style:{color:gt(454),"font-size":gt(425)}},Lx={key:9},Fx={style:{"font-size":gt(411),background:gt(413)}},Wx={key:10},Bx=!1,Hx=Nn({__name:gt(430),setup(t){const e=gt,n={fNBmz:e(395),uaKUn:function(h){return h()},NnlxY:function(h,f){return h===f},FhNWh:"empty",AJELv:e(574),GfqDc:e(490),DzMuw:function(h,f){return h!==f},UeWTG:function(h,f){return h==f},UayMO:function(h,f){return h(f)},lLcDB:function(h,f){return h>f},KHLXg:e(388),oIcUo:function(h,f){return h+f},KrbTt:e(539),TEumr:function(h,f){return h<f},TPjLx:e(502),pgBsI:e(433),rWiKd:function(h,f){return h+f},hkxZt:function(h,f){return h+f},XMROT:function(h,f){return h+f},fRRTw:function(h,f){return h+f},Ewdde:function(h,f){return h+f},nZALi:function(h,f){return h+f},TjuTm:function(h,f){return h+f},uSWyY:function(h,f){return h+f},CkaYW:function(h,f,d){return h(f,d)},HUBXK:function(h,f){return h+f},Tiomv:e(402),iGnhv:function(h,f,d){return h(f,d)},TBiLo:function(h,f,d,x,C,P){return h(f,d,x,C,P)},HnDRz:e(435),qwWAS:"green-bt",UYyZf:function(h){return h()},VeGBt:function(h,f,d,x,C,P){return h(f,d,x,C,P)},OBTJU:function(h,f){return h(f)},eYhsc:function(h,f,d,x,C){return h(f,d,x,C)},bzsJq:function(h,f,d,x){return h(f,d,x)},ovGWZ:function(h,f,d,x,C){return h(f,d,x,C)},NKQhL:"::::::: Связывание :::::::",IwgLi:function(h,f,d,x,C){return h(f,d,x,C)},fImtb:function(h,f,d){return h(f,d)},zWsOF:function(h,f){return h+f},iIZGC:function(h,f){return h+f},ouTPL:function(h,f){return h+f},trsQl:function(h,f){return h(f)},lpRwP:" stage:",mAyon:function(h,f,d,x,C){return h(f,d,x,C)},viPHT:function(h,f,d){return h(f,d)},jDwlV:function(h,f){return h(f)},GltCR:function(h){return h()},lXNEB:function(h,f,d,x){return h(f,d,x)},hvdSy:e(459),qqsdI:function(h,f,d){return h(f,d)},whDeq:function(h,f){return h(f)},RLKRU:function(h,f,d,x,C){return h(f,d,x,C)},Emebd:function(h,f,d,x,C){return h(f,d,x,C)},WblBz:function(h,f){return h(f)},Msgvm:e(463),QZnjO:e(448),fDVYW:function(h,f,d,x,C){return h(f,d,x,C)},OhTMG:function(h,f,d,x,C){return h(f,d,x,C)},nOpfc:function(h,f){return h(f)},uPbeA:function(h,f,d,x){return h(f,d,x)},frIEA:function(h,f,d){return h(f,d)},DwiwB:function(h,f,d){return h(f,d)},NHhpf:function(h,f,d,x){return h(f,d,x)},ZHgkt:e(410),DmEZi:function(h,f,d,x){return h(f,d,x)},RoUxq:e(393),kFlRJ:e(428),AAXmv:e(555),aFpmO:"center",ZHvdi:e(535),sMDop:function(h,f,d,x,C){return h(f,d,x,C)},IcETe:function(h,f,d,x){return h(f,d,x)},BLRwA:function(h,f,d,x,C){return h(f,d,x,C)},wMsXE:e(486),pPkaN:function(h,f,d,x,C){return h(f,d,x,C)},ENSNV:function(h,f,d,x,C){return h(f,d,x,C)},aEnOb:function(h,f,d){return h(f,d)},BKEwt:e(571),KeWck:function(h,f,d,x,C){return h(f,d,x,C)},hIqLj:function(h){return h()},QgyMQ:function(h,f,d,x,C){return h(f,d,x,C)},gTdLy:function(h,f,d,x,C){return h(f,d,x,C)},TyaCd:"small",CaFAD:e(400),LRBVt:function(h,f,d,x,C){return h(f,d,x,C)},kUCOT:function(h,f){return h===f},QpSSH:function(h,f){return h(f)},NgRkS:function(h,f,d,x){return h(f,d,x)},CEIze:e(565),mTXOg:function(h){return h()},tEmuC:function(h,f,d,x){return h(f,d,x)},xooWC:function(h,f,d,x,C){return h(f,d,x,C)},EXwNZ:function(h,f,d,x,C){return h(f,d,x,C)},ooAuV:function(h,f,d){return h(f,d)},iAxWo:function(h,f,d,x,C){return h(f,d,x,C)},RfVMn:function(h,f,d,x,C){return h(f,d,x,C)},nWJWd:function(h,f,d){return h(f,d)},JVgYG:function(h,f,d,x,C){return h(f,d,x,C)},hdZjS:e(447),ryfTn:function(h,f,d){return h(f,d)},CnfNF:function(h,f){return h(f)},antmk:function(h){return h()},kGJoI:e(404),KhvDW:function(h,f){return h(f)},CSpIa:function(h){return h()},AJKWT:function(h,f,d,x,C){return h(f,d,x,C)},Kzjxw:e(540),TkGqk:function(h,f,d,x){return h(f,d,x)},KMEZA:e(552),ngAGG:function(h,f,d){return h(f,d)},HUAYw:function(h,f){return h(f)},FPOBX:function(h){return h()},nrEjx:e(424),MUZxE:function(h,f,d,x,C){return h(f,d,x,C)},VkAiO:e(418),EmQBo:function(h,f,d){return h(f,d)},KbIvq:function(h,f){return h===f},iVwgX:function(h,f){return h(f)},OhgQa:function(h){return h()},KeNvh:function(h,f,d,x){return h(f,d,x)},QuoON:function(h,f,d,x,C){return h(f,d,x,C)},NcwJE:e(531),Jbssm:function(h,f,d,x,C){return h(f,d,x,C)},zRAqL:function(h,f,d,x,C){return h(f,d,x,C)},voVoy:function(h,f,d,x,C){return h(f,d,x,C)},iCZta:function(h,f,d,x,C){return h(f,d,x,C)},swLsv:function(h,f,d,x){return h(f,d,x)},wpMWy:function(h,f,d){return h(f,d)},GrCUP:function(h,f){return h(f)},ihHFd:function(h,f,d,x){return h(f,d,x)},Sjmsz:function(h,f){return h(f)},HdNJg:function(h,f){return h(f)},XZSed:function(h){return h()},XiKOJ:function(h,f,d,x,C){return h(f,d,x,C)},HNist:e(474),kjmxq:function(h,f){return h(f)}},s=On(),i=n[e(473)](Be,localStorage[e(563)](n[e(524)])||n[e(381)]),r=n.kjmxq(Be,[]),o=n[e(470)](Be),l=Be(),c=n.HdNJg(Be,""),a=Be(""),u=n[e(511)](Be,"* можете поменять ваш Никнейм"),p=function(){const h=e;i[h(476)]&&localStorage[h(561)](n[h(524)],i[h(476)])};function g(){const h=e,f={zkRMG:function(d){return n[Ze(467)](d)},sGWkD:function(d,x){return n[Ze(489)](d,x)},bCZtO:n[h(442)],DoKzu:function(d,x){return d+x},EcMUP:n[h(429)]};i[h(476)]||(i[h(476)]=s[h(472)]),console[h(401)](2323),s[h(528)](n[h(414)]+s[h(417)])[h(462)](d=>{const x=h;if(d){if(f[x(506)](d,f[x(518)]))return s[x(443)]=0,!1;o[x(476)]={id:d.id,name:d[x(492)]},s[x(528)](f[x(507)](f.EcMUP,d[x(402)]))[x(462)](C=>{const P=x;console.log(P(440),C),s.gameId=C.gameId,c[P(476)]=C,s.stage=5,s[P(402)]=d.gameLink,f[P(480)](ye)})}})}const y=function(h){const f=e,d={QlYQJ:function(C,P){return C===P},DyMWb:function(C,P){return n[Ze(489)](C,P)},hPXDQ:function(C,P){return n.DzMuw(C,P)},ZpFYc:function(C,P){return n[Ze(477)](C,P)},eTcXD:function(C,P){return C===P},TdldX:function(C,P){return n[Ze(391)](C,P)},aRFSw:function(C,P){return n[Ze(568)](C,P)}};if(console.log(n[f(576)],h),r[f(476)]=[],n[f(489)](s[f(443)],0))return!1;s.stage=1;let x=!1;h&&Object.keys(h)[f(567)](C=>{const P=f,oe=P(562)[P(482)]("|");let Ce=0;for(;;){switch(oe[Ce++]){case"0":h[C][P(478)]&&d.QlYQJ(h[C].id2,s[P(417)])&&(o[P(476)]={id:C,name:h[C][P(492)]});continue;case"1":d.DyMWb(C,String(s[P(417)]))&&C&&(x=!0,d.hPXDQ(s[P(443)],3)&&(s.stage=2),h[C][P(478)]&&(s.stage=4));continue;case"2":h[C][P(419)]&&Je();continue;case"3":d[P(575)](h[C][P(478)],s[P(417)])&&(x=!0,s[P(443)]=3);continue;case"4":C&&h[C]&&r.value[P(510)]({id:C,name:h[C][P(492)]});continue;case"5":d[P(525)](C,d[P(495)](String,s[P(417)]))&&(o.value={id:h[C][P(478)],name:h[C].name2});continue;case"6":d[P(466)](s[P(443)],2)&&!x&&location[P(436)]();continue;case"7":if(s[P(443)]>3)return!1;continue}break}})};n[e(505)](dt,()=>s[e(417)],h=>h&&setTimeout(g,500));function w(){n[e(467)](O),s.stage=1}function O(){const h=e;s.onValue(n[h(553)](s[h(380)],n[h(452)]))[h(462)](f=>y(f)),dt(()=>s[h(416)],f=>y(f))}function j(){const h=e;if(n[h(488)](i.value[h(497)],2))return u[h(476)]="* nickname не может быть меньше 2 букв",!1;s[h(471)](n[h(553)](s[h(380)]+n[h(527)],s[h(417)]),{name:i.value})}function V(h){const f=e;if(n[f(477)](h.id,s[f(417)]))return l[f(476)]=!0,setTimeout(()=>l[f(476)]=!1,2e3),!1;s[f(471)](n[f(553)](n[f(566)](s[f(380)],f(502)),h.id),{name:h[f(492)],id2:s[f(417)],name2:i[f(476)]||s.myName})[f(462)](d=>{const x=f;console[x(401)](n[x(399)],d),o[x(476)]={id:h.id,name:h[x(492)]},s[x(443)]=3})}function Y(h){const f=e;h&&o[f(476)]&&s[f(471)](n[f(407)](n[f(543)](s.gameId,n[f(527)]),o[f(476)].id),{name:o.value.name,id2:s[f(417)],name2:i[f(476)]||s[f(472)],accept:!0}),!h&&s[f(471)](n.rWiKd(s[f(380)],f(502))+s[f(417)],{name:i.value||s[f(472)]})[f(462)](()=>s.stage=2)}function Z(){const h=e;s[h(471)](n[h(549)](n[h(520)](s[h(380)],"/look/"),o[h(476)].id),{name:o[h(476)].name})[h(462)](()=>s.stage=2)}function L(){const h=e;s.removeField(n[h(445)](s[h(380)],n[h(527)])+s[h(417)]).then(()=>s[h(443)]=0)}function Q(){var d;const h=e;debugger;a[h(476)]=h(457);let f=String(o[h(476)].id);n[h(568)](o[h(476)].id,s[h(417)])?f+="::"+s[h(417)]:f=n[h(513)](n[h(553)](s.myId,"::"),f),s.removeField(n[h(414)]+s[h(417)]),s.removeField(n.uSWyY(n[h(414)],(d=o[h(476)])==null?void 0:d.id)),s[h(504)](n.fRRTw(n[h(429)],f)),n[h(439)](setTimeout,()=>location[h(436)](),3e3)}function Je(){var C,P,oe;const h=e,f={EGQWW:function(Ce,le){return n[Ze(485)](Ce,le)},HSnvl:n[h(527)]};let d=Date.now(),x=n[h(391)](String,o.value.id);n[h(568)](o.value.id,s.myId)?x+=n.fRRTw("::",s[h(417)]):x=s[h(417)]+"::"+x,console[h(401)](n[h(519)],x),s.setField(n.GfqDc+s[h(417)],{id:(C=o.value)==null?void 0:C.id,name:(P=o.value)==null?void 0:P[h(492)],gameLink:x,date:d}),s.setField(n[h(513)](n[h(414)],(oe=o.value)==null?void 0:oe.id),{id:s[h(417)],name:i[h(476)]||s[h(472)],gameLink:x,date:d}),s[h(471)](h(574)+x,{game:h(420),gameId:s[h(380)]}),n[h(409)](setTimeout,()=>{var le;const Ce=h;s[Ce(504)](f[Ce(396)](f[Ce(396)](s[Ce(380)],f.HSnvl),(le=o[Ce(476)])==null?void 0:le.id)),s[Ce(504)](f.EGQWW(s.gameId+f[Ce(432)],s.myId)),location.reload()},2e3)}function ye(){const h=e;s[h(481)]=+s[h(380)][h(453)](1)}return(h,f)=>{var x,C;const d=e;return n[d(467)](ne),n[d(405)](ue,qe,null,[Bx?(n[d(487)](ne),n[d(379)](ue,"div",yx,[f[9]||(f[9]=n.ovGWZ(v,"hr",null,null,-1)),f[10]||(f[10]=n[d(550)](v,"i",null,n.NKQhL,-1)),f[11]||(f[11]=n[d(441)](v,"br",null,null,-1)),n.fImtb(se,n[d(406)](n.iIZGC(n[d(377)](" ",n.trsQl(Oe,n[d(391)](Se,s)[d(417)]))+d(523),Oe(i[d(476)]))," "),1),f[12]||(f[12]=v("br",null,null,-1)),se(n[d(434)]+n[d(475)](Oe,Se(s)[d(443)])+" ",1),f[13]||(f[13]=n[d(385)](v,"hr",null,null,-1))])):n[d(484)](ke,"",!0),n[d(473)](Se,s)[d(443)]===5?(n[d(470)](ne),n.lXNEB(ue,n[d(503)],vx,[n.qqsdI(Qe,xx,{onToExit:f[0]||(f[0]=P=>Q())})])):ke("",!0),n.whDeq(Se,s)[d(443)]===-1?(n[d(470)](ne),ue(n.hvdSy,bx,f[14]||(f[14]=[n[d(522)](v,"br",null,null,-1),n.Emebd(v,"br",null,null,-1),v("br",null,null,-1),n[d(550)](v,"br",null,null,-1),n[d(564)](se,n[d(557)]),v("img",{alt:n[d(483)],src:gp},null,-1),n.RLKRU(v,"br",null,null,-1),n.fDVYW(v,"br",null,null,-1),n[d(456)](v,"br",null,null,-1),n.IwgLi(v,"br",null,null,-1),v("br",null,null,-1),n[d(550)](v,"br",null,null,-1)]))):n[d(536)](ke,"",!0),n[d(489)](n[d(499)](Se,s)[d(443)],0)?(ne(),n[d(538)](ue,n.hvdSy,Cx,[n[d(560)](Qe,px,{onGameChanged:w})])):n[d(505)](ke,"",!0),n[d(489)](n.jDwlV(Se,s)[d(443)],1)?(ne(),n[d(496)](ue,d(459),Ex,[f[18]||(f[18]=n[d(405)](v,"p",null,n[d(526)],-1)),n[d(398)](v,"p",null,[n.fImtb(Ah,n[d(522)](v,n[d(493)],{"onUpdate:modelValue":f[1]||(f[1]=P=>i.value=P),maxlength:"16",minlength:"3",style:{"font-size":n[d(431)],padding:n[d(569)],"text-align":n[d(573)]},onInput:f[2]||(f[2]=P=>p()),placeholder:n[d(397)]},null,544),[[sp,i[d(476)]]])]),n[d(509)](v,n[d(503)],Ix,n.WblBz(Oe,u[d(476)]),1),r.value&&r[d(476)].length>1?(n[d(467)](ne),n.IcETe(ue,n[d(503)],wx,[f[15]||(f[15]=n[d(422)](v,"h3",null,n[d(389)],-1)),(ne(!0),n[d(551)](ue,qe,null,n[d(460)](ml,r[d(476)],P=>{const oe=d;return n[oe(467)](ne),n[oe(383)](ue,n[oe(530)],{class:n[oe(446)],key:P.id,onClick:Ce=>V(P)},n.UayMO(Oe,P[oe(492)]),9,Sx)}),128)),f[16]||(f[16]=v("br",null,null,-1)),f[17]||(f[17]=n[d(421)](v,"br",null,null,-1))])):n[d(514)](ke,"",!0),v(n.HnDRz,{class:n.BKEwt,onClick:f[3]||(f[3]=P=>j())},d(547)),f[19]||(f[19]=n.KeWck(v,"br",null,null,-1)),f[20]||(f[20]=n[d(500)](se)),f[21]||(f[21]=n[d(517)](v,"br",null,null,-1)),f[22]||(f[22]=n[d(572)](v,n[d(468)],null,n.CaFAD,-1)),f[23]||(f[23]=n[d(572)](v,"br",null,null,-1)),f[24]||(f[24]=n[d(386)](v,"br",null,null,-1))])):ke("",!0),n[d(451)](n[d(558)](Se,s)[d(443)],2)?(ne(),n.NgRkS(ue,d(459),Tx,[f[28]||(f[28]=n[d(550)](v,"p",null,n.CEIze,-1)),r.value.length?(n[d(494)](ne),n[d(449)](ue,n[d(503)],Nx,[f[25]||(f[25]=n[d(521)](v,"h3",null,n[d(389)],-1)),(n[d(479)](ne,!0),n[d(491)](ue,qe,null,n[d(464)](ml,r[d(476)],P=>{const oe=d;return n[oe(487)](ne),n[oe(498)](ue,n[oe(530)],{class:n.qwWAS,key:P.id,onClick:Ce=>V(P)},n[oe(479)](Oe,P[oe(492)]),9,Rx)}),128)),f[26]||(f[26]=n.iAxWo(v,"br",null,null,-1)),f[27]||(f[27]=n[d(545)](v,"br",null,null,-1))])):n[d(536)](ke,"",!0),l.value?(n[d(500)](ne),ue(n[d(503)],Ax,d(469))):n.nWJWd(ke,"",!0),f[29]||(f[29]=n[d(533)](v,"br",null,null,-1)),f[30]||(f[30]=v("br",null,null,-1)),n[d(496)](v,"button",{onClick:f[4]||(f[4]=P=>L())},n[d(570)]),f[31]||(f[31]=n[d(517)](v,"br",null,null,-1)),f[32]||(f[32]=v("br",null,null,-1))])):n.ryfTn(ke,"",!0),n.NnlxY(n.CnfNF(Se,s)[d(443)],3)?(n[d(461)](ne),n.NgRkS(ue,n[d(503)],Px,[n.IcETe(v,"p",null,[f[33]||(f[33]=n[d(458)](se,n[d(529)])),f[34]||(f[34]=v("br",null,null,-1)),n[d(491)](v,"b",null,n[d(511)](Oe,(x=o[d(476)])==null?void 0:x[d(492)]),1),f[35]||(f[35]=n.CSpIa(se)),f[36]||(f[36]=n[d(408)](v,"br",null,null,-1)),f[37]||(f[37]=n[d(473)](se,n[d(390)]))]),n.TkGqk(v,n[d(530)],{onClick:f[5]||(f[5]=P=>Z())},n[d(412)])])):n.ngAGG(ke,"",!0),n[d(465)](Se,s)[d(443)]===4&&((C=o[d(476)])!=null&&C.id)?(n[d(394)](ne),n[d(379)](ue,n[d(503)],Dx,[f[38]||(f[38]=n[d(458)](se,n[d(455)])),f[39]||(f[39]=v("br",null,null,-1)),f[40]||(f[40]=n[d(385)](v,"br",null,null,-1)),v("b",null,n[d(479)](Oe,o[d(476)][d(492)]),1),f[41]||(f[41]=n[d(387)](v,"br",null,null,-1)),f[42]||(f[42]=n.Emebd(v,"br",null,null,-1)),v("button",{class:d(516),onClick:f[6]||(f[6]=P=>Y(!1))},"Отказаться"),v(n.HnDRz,{class:n[d(446)],onClick:f[7]||(f[7]=P=>Y(!0))},n[d(426)])])):n[d(534)](ke,"",!0),n.KbIvq(n[d(512)](Se,s).stage,5)&&o[d(476)]?(n[d(548)](ne),n[d(423)](ue,n[d(503)],kx,[f[43]||(f[43]=n.QuoON(v,"h3",null,n[d(544)],-1)),f[44]||(f[44]=se(" с игроком ")),f[45]||(f[45]=n[d(537)](v,"br",null,null,-1)),f[46]||(f[46]=n[d(559)](v,"br",null,null,-1)),n[d(496)](v,n.hvdSy,Ox,[n[d(392)](v,"b",null,Oe(o.value.name),1)]),f[47]||(f[47]=n[d(559)](v,"br",null,null,-1)),f[48]||(f[48]=n[d(541)](v,"br",null,null,-1)),n[d(415)](v,n[d(503)],Mx,[v("b",null,n[d(465)](Oe,a[d(476)]),1)])])):n[d(450)](ke,"",!0),n[d(511)](Se,s)[d(443)]&&[1,2,3,4,5][d(515)](n.GrCUP(Se,s)[d(443)])?(n[d(494)](ne),n[d(427)](ue,d(459),Lx,[f[49]||(f[49]=v("hr",null,null,-1)),f[50]||(f[50]=v("br",null,null,-1)),n.iCZta(v,n.hvdSy,Fx,n[d(444)](Oe,n.HdNJg(Se,s).gameNames[n[d(558)](Se,s).gameId]),1),f[51]||(f[51]=n.QgyMQ(v,"br",null,null,-1)),f[52]||(f[52]=n[d(522)](v,"br",null,null,-1))])):n[d(534)](ke,"",!0),n[d(479)](Se,s)[d(443)]===5?(n[d(542)](ne),n[d(398)](ue,n.hvdSy,Wx,[v(n[d(530)],{onClick:f[8]||(f[8]=P=>ye())},d(438))])):ke("",!0),f[53]||(f[53]=v("br",null,null,-1)),f[54]||(f[54]=n.XiKOJ(v,"br",null,null,-1))],64)}}}),Ux={class:"game"},Vx={__name:"StartPage",setup(t){return(e,n)=>(ne(),ue("div",Ux,[n[0]||(n[0]=v("h1",null,"♕",-1)),v("div",null,[Qe(Hx)])]))}},jx=Ps(Vx,[["__scopeId","data-v-8b01c1fe"]]),Mf=Ti;(function(t,e){const n=Ti,s=t();for(;;)try{if(parseInt(n(482))/1+parseInt(n(472))/2+-parseInt(n(496))/3+parseInt(n(486))/4*(-parseInt(n(503))/5)+parseInt(n(516))/6+parseInt(n(495))/7+-parseInt(n(511))/8===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ni,394777);const Gx={class:"rama"},$x={style:{"font-size":Mf(478)}};function Ti(t,e){const n=Ni();return Ti=function(s,i){return s=s-464,n[s]},Ti(t,e)}function Ni(){const t=["EZqCv","DmBvF","5427448PERFMp","PTugb","value","mTOVU","rFxkx","4046310wvBwNw","SXvLj","res=","lTkab","OaLBs","then","div","RDHIT","RwZKN","OFXzl","/games/","setField","MyHuI","sSgUU","gLTqe","TfJgk"," << ","1274930EpFrON","myId","lookField","haNuX","Бумага","niRlu","20px","Unvkp","Ножницы","green-bt","587972UkHFXF","GipJc","obCgr"," Выбери: ","551864eOodkC","gameLink","pSYKo","mpXrF","log","Камень","HUytc",">> ","dBiYn","684915KtaLLc","2359479iPmPlt","button","onValue","/game","Zrvqs","BTsfR","aCfXa","5EObStb","hpVhe","vdiVz","dHJoa","GXXMa","Камень ножницы бумага"];return Ni=function(){return t},Ni()}const Kx=Nn({__name:"1_StounScissorsPaper",setup(t){const e=Mf,n={AchEx:e(518),PTugb:"!!! res",TfJgk:function(c,a){return c+a},PovQE:"/game/",sSEVB:"9999999999999",GXXMa:function(c,a){return c+a},pDgOU:e(499),niRlu:function(c){return c()},gLTqe:function(c,a,u,p,g){return c(a,u,p,g)},haNuX:function(c,a,u,p,g){return c(a,u,p,g)},MyHuI:e(508),hpVhe:function(c,a,u,p,g){return c(a,u,p,g)},DmBvF:function(c,a){return c(a)},lTkab:e(485),vdiVz:function(c,a,u,p,g){return c(a,u,p,g)},OaLBs:function(c,a,u,p,g){return c(a,u,p,g)},aCfXa:e(497),SXvLj:function(c,a){return c(a)},RcFFF:function(c,a){return c===a},obCgr:e(491),Unvkp:function(c,a,u,p,g){return c(a,u,p,g)},dHJoa:function(c,a){return c===a},dBiYn:e(480),pSYKo:function(c,a,u,p,g){return c(a,u,p,g)},RDHIT:function(c,a){return c===a},GipJc:e(476),OFXzl:function(c,a,u,p,g){return c(a,u,p,g)},RwZKN:function(c,a,u,p){return c(a,u,p)},mTOVU:e(481),XqFVW:"Свериться",EZqCv:function(c,a,u,p,g){return c(a,u,p,g)},Zrvqs:function(c,a){return c(a)},mpXrF:e(471),RCGpB:function(c,a){return c(a)},sSgUU:e(493),BTsfR:function(c){return c()},rFxkx:function(c){return c()},HUytc:function(c,a,u){return c(a,u)}},s=n[e(501)](On),i=n[e(500)](Be,0),r=n[e(515)](Be);n[e(492)](dt,()=>s[e(474)],c=>o(c));function o(c){console[e(490)](n.AchEx,c),r.value=c}function l(){const c=e;s[c(466)](n[c(470)](n[c(470)](c(465),s.gameLink),n.PovQE)+s[c(473)],{q:i[c(513)]})[c(521)](a=>{const u=c;console[u(490)](n[u(512)],a)})}return Cs(()=>{const c=e;console[c(490)](n.sSEVB),s[c(498)](n[c(470)](n[c(507)](c(465),s[c(487)]),n.pDgOU))}),(c,a)=>{const u=e;return n[u(477)](ne),ue(u(522),Gx,[a[4]||(a[4]=n.gLTqe(v,"br",null,null,-1)),a[5]||(a[5]=n.haNuX(v,"h2",null,n[u(467)],-1)),a[6]||(a[6]=n[u(504)](v,"br",null,null,-1)),a[7]||(a[7]=n.gLTqe(v,"br",null,null,-1)),a[8]||(a[8]=n[u(510)](se,n[u(519)])),a[9]||(a[9]=n.gLTqe(v,"br",null,null,-1)),a[10]||(a[10]=n[u(505)](v,"br",null,null,-1)),a[11]||(a[11]=n.OaLBs(v,"br",null,null,-1)),v(n[u(502)],{class:n[u(517)](xn,{active:n.RcFFF(i[u(513)],1)}),onClick:a[0]||(a[0]=p=>i[u(513)]=1)},n[u(484)],2),a[12]||(a[12]=n[u(469)](v,"br",null,null,-1)),a[13]||(a[13]=v("br",null,null,-1)),n[u(479)](v,n.aCfXa,{class:n[u(510)](xn,{active:n[u(506)](i[u(513)],2)}),onClick:a[1]||(a[1]=p=>i.value=2)},n[u(494)],2),a[14]||(a[14]=n[u(520)](v,"br",null,null,-1)),a[15]||(a[15]=n[u(475)](v,"br",null,null,-1)),n[u(488)](v,u(497),{class:xn({active:n[u(523)](i[u(513)],3)}),onClick:a[2]||(a[2]=p=>i[u(513)]=3)},n[u(483)],2),a[16]||(a[16]=n.vdiVz(v,"br",null,null,-1)),a[17]||(a[17]=v("br",null,null,-1)),a[18]||(a[18]=n[u(505)](v,"br",null,null,-1)),a[19]||(a[19]=n[u(464)](v,"br",null,null,-1)),a[20]||(a[20]=n[u(464)](v,"br",null,null,-1)),a[21]||(a[21]=v("br",null,null,-1)),n[u(524)](v,u(497),{class:n[u(514)],onClick:a[3]||(a[3]=p=>l())},n.XqFVW),a[22]||(a[22]=n[u(509)](v,"br",null,null,-1)),a[23]||(a[23]=n[u(500)](se,n[u(489)])),n.pSYKo(v,"b",$x,Oe(r.value),1),a[24]||(a[24]=n.RCGpB(se,n[u(468)]))])}}}),zx=Ps(Kx,[["__scopeId","data-v-71335afa"]]),ll=Ri;(function(t,e){const n=Ri,s=t();for(;;)try{if(parseInt(n(221))/1*(-parseInt(n(217))/2)+parseInt(n(227))/3*(-parseInt(n(231))/4)+-parseInt(n(223))/5*(parseInt(n(213))/6)+-parseInt(n(216))/7+parseInt(n(211))/8+-parseInt(n(242))/9+parseInt(n(228))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ai,757263);function Ri(t,e){const n=Ai();return Ri=function(s,i){return s=s-210,n[s]},Ri(t,e)}function Ai(){const t=["крестики нолики ANALIZ=","value","9607696RMXZKc","oprLQ","5124738spNpkx","rama","/games/","8937698RGkSgb","166472mymWFE"," Under construction ","log","INDdv","12zepPoN","RARQc","5ISQKxQ","Крестики нолики"," << ","KoCLB","27folZQx","44602530XAVKVU","VYXmk","sSwnx","661212cptYLP","NbXkR","lookField","udwlE","onValue","rcMSc","/game","IEsYE","CMLqz","DfVPj","20px","2578104ZHxNNk"];return Ai=function(){return t},Ai()}const qx={class:ll(214)},Yx={style:{"font-size":ll(241)}},Qx=Nn({__name:"2_KrestikiNoliki",setup(t){const e=ll,n={rcMSc:e(243),DfVPj:function(o){return o()},SATyp:function(o,l,c,a){return o(l,c,a)},udwlE:"div",CQOxX:function(o,l,c,a,u){return o(l,c,a,u)},oprLQ:function(o,l,c,a,u){return o(l,c,a,u)},INDdv:e(224),NbXkR:function(o,l,c,a,u){return o(l,c,a,u)},sSwnx:function(o,l){return o(l)},CMLqz:function(o,l,c,a,u){return o(l,c,a,u)},TfFvy:e(225),zKwkj:function(o,l,c,a,u){return o(l,c,a,u)},KoCLB:">> ",IEsYE:function(o){return o()},RARQc:function(o,l,c){return o(l,c)},VYXmk:function(o,l){return o(l)}},s=On(),i=n[e(238)](Be);n[e(222)](dt,()=>s[e(233)],o=>r(o));function r(o){const l=e;console[l(219)](n[l(236)],o),i[l(210)]=o}return n[e(229)](Cs,()=>s[e(235)](e(215)+s.gameLink+e(237))),(o,l)=>{const c=e;return n[c(240)](ne),n.SATyp(ue,n[c(234)],qx,[l[0]||(l[0]=n.CQOxX(v,"br",null,null,-1)),l[1]||(l[1]=n[c(212)](v,"h2",null,n[c(220)],-1)),l[2]||(l[2]=n[c(232)](v,"br",null,null,-1)),l[3]||(l[3]=v("br",null,null,-1)),l[4]||(l[4]=n[c(230)](se,c(218))),l[5]||(l[5]=n[c(239)](v,"br",null,null,-1)),l[6]||(l[6]=n[c(230)](se,n.TfFvy)),n.zKwkj(v,"b",Yx,Oe(i[c(210)]),1),l[7]||(l[7]=n.sSwnx(se,n[c(226)]))])}}}),Xx=Ps(Qx,[["__scopeId","data-v-88731bf9"]]),Pi=ki;(function(t,e){const n=ki,s=t();for(;;)try{if(parseInt(n(319))/1+-parseInt(n(305))/2+-parseInt(n(313))/3+-parseInt(n(308))/4*(parseInt(n(311))/5)+-parseInt(n(295))/6+parseInt(n(310))/7+-parseInt(n(302))/8*(-parseInt(n(294))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Di,110695);function Di(){const t=["/games/","ApquI","fCYlU","21134JKRQZE","rama","uwtja","tzkOi","/game"," << ","gameLink","95337vKCYex","542232dSRVfr","3_SeaWar","Морской бой","20px","Gsvod"," Under construction "," >> ","216VIoinA","Морской бой ANALIZ=","bmyIK","157110rELezM","eXCax","WrbCI","4vNoDQa","pIiIg","1538383HKUtVu","517630EOBGNH","value","431298RVdwpU","onValue","lookField"];return Di=function(){return t},Di()}const Jx={class:Pi(320)},Zx={style:{"font-size":Pi(298)}};function ki(t,e){const n=Di();return ki=function(s,i){return s=s-293,n[s]},ki(t,e)}const ey=Nn({__name:Pi(296),setup(t){const e=Pi,n={tzkOi:e(303),sTsoL:function(o){return o()},WrbCI:function(o,l,c,a){return o(l,c,a)},bmyIK:function(o,l,c,a,u){return o(l,c,a,u)},fCYlU:e(297),eXCax:function(o,l,c,a,u){return o(l,c,a,u)},ApquI:function(o,l){return o(l)},ZqIct:e(300),pIiIg:function(o,l,c,a,u){return o(l,c,a,u)},QaIiI:function(o,l){return o(l)},uwtja:e(324),Gsvod:function(o,l){return o(l)},uBzxr:e(301),bLdrj:function(o){return o()},aouRz:function(o,l){return o(l)}},s=On(),i=n.bLdrj(Be);dt(()=>s[e(315)],o=>r(o));function r(o){const l=e;console.log(n[l(322)],o),i[l(312)]=o}return n.aouRz(Cs,()=>s[e(314)](e(316)+s[e(293)]+e(323))),(o,l)=>{const c=e;return n.sTsoL(ne),n[c(307)](ue,"div",Jx,[l[0]||(l[0]=n[c(304)](v,"br",null,null,-1)),l[1]||(l[1]=v("h2",null,n[c(318)],-1)),l[2]||(l[2]=n[c(306)](v,"br",null,null,-1)),l[3]||(l[3]=v("br",null,null,-1)),l[4]||(l[4]=n[c(317)](se,n.ZqIct)),l[5]||(l[5]=n[c(309)](v,"br",null,null,-1)),l[6]||(l[6]=n.QaIiI(se,n[c(321)])),n[c(306)](v,"b",Zx,n.ApquI(Oe,i.value),1),l[7]||(l[7]=n[c(299)](se,n.uBzxr))])}}}),ty=Ps(ey,[["__scopeId","data-v-5ed39d34"]]),ny={__name:"App",setup(t){const e=On();let n=gh(jx);dt(()=>e.playNumber,i=>s(i));function s(i){switch(console.log(i),i){case 1:n.value=zx;break;case 2:n.value=Xx;break;case 3:n.value=ty;break}}return Cs(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.myId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||0,e.myName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(i,r)=>(ne(),ja($h(Se(n))))}},Fc=Mi;(function(t,e){const n=Mi,s=t();for(;;)try{if(parseInt(n(155))/1*(-parseInt(n(151))/2)+-parseInt(n(156))/3*(parseInt(n(159))/4)+parseInt(n(154))/5+parseInt(n(158))/6+parseInt(n(160))/7*(parseInt(n(163))/8)+parseInt(n(153))/9+parseInt(n(152))/10*(-parseInt(n(157))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Oi,745410);function Oi(){const t=["6ZpDgTS","406912JThsel","8008962gXMgiZ","1900496hudoHS","1967cvYdUS","use","mount","33848MvNSzx","2XvnGbW","440HCmjGp","4794291PFbLDt","2943415NPTSoN","321814prVJHJ"];return Oi=function(){return t},Oi()}function Mi(t,e){const n=Oi();return Mi=function(s,i){return s=s-151,n[s]},Mi(t,e)}const sy=ap(),Wc=op(ny);Wc[Fc(161)](sy),Wc[Fc(162)]("#app");
