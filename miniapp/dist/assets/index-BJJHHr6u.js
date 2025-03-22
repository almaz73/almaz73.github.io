function Us(t,e){const n=Vs();return Us=function(s,i){return s=s-127,n[s]},Us(t,e)}(function(t,e){const n=Us,s=t();for(;;)try{if(-parseInt(n(138))/1+parseInt(n(132))/2+-parseInt(n(165))/3+parseInt(n(152))/4+parseInt(n(161))/5*(-parseInt(n(159))/6)+parseInt(n(167))/7+parseInt(n(144))/8*(parseInt(n(135))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Vs,571609),function(){const e=Us,n={NOLAr:function(o,l){return o!==l},fbEfj:e(151),guuOo:e(130),JEprD:function(o,l){return o===l},OZGLO:"modulepreload",xyPkF:function(o,l){return o(l)},PsZTg:function(o,l){return o===l},EFXoh:e(131),zYCJm:"omit",bHmLC:"same-origin",eveoa:function(o,l,c){return o(l,c)},MOpVT:e(168),TfeSE:e(150),Wyisr:function(o,l){return o(l)}},s=document[e(136)](n.MOpVT)[e(160)];if(s&&s[e(146)]&&s[e(146)](n[e(155)]))return;for(const o of document[e(129)](n[e(147)]))n[e(141)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(127)](c[l(134)],n.fbEfj))for(const a of c[l(142)])a[l(133)]===n[l(148)]&&n[l(140)](a[l(145)],n[l(155)])&&n[l(143)](r,a)})[e(164)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o.integrity&&(c[l(163)]=o[l(163)]),o[l(137)]&&(c[l(137)]=o[l(137)]),n[l(140)](o[l(157)],l(162))?c.credentials=l(154):n[l(139)](o[l(157)],n[l(153)])?c[l(158)]=n[l(149)]:c[l(158)]=n[l(128)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(143)](i,o);n[l(166)](fetch,o[l(156)],c)}}();function Vs(){const t=["48lbYBTp","relList","690095HwvABk","use-credentials","integrity","observe","1069269nYUomH","eveoa","642446YqfoqM","link","NOLAr","bHmLC","querySelectorAll","LINK","anonymous","499518EATqNo","tagName","type","14525829lcHdeS","createElement","referrerPolicy","600107aXcPjd","PsZTg","JEprD","Wyisr","addedNodes","xyPkF","8mVWfNK","rel","supports","TfeSE","guuOo","zYCJm",'link[rel="modulepreload"]',"childList","2707092QqRTJy","EFXoh","include","OZGLO","href","crossOrigin","credentials"];return Vs=function(){return t},Vs()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},pn=[],at=()=>{},Th=()=>!1,Ii=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xr=t=>t.startsWith("onUpdate:"),Ae=Object.assign,Zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nh=Object.prototype.hasOwnProperty,te=(t,e)=>Nh.call(t,e),H=Array.isArray,_n=t=>wi(t)==="[object Map]",Nc=t=>wi(t)==="[object Set]",V=t=>typeof t=="function",xe=t=>typeof t=="string",Wt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Rc=t=>(pe(t)||V(t))&&V(t.then)&&V(t.catch),Ac=Object.prototype.toString,wi=t=>Ac.call(t),Rh=t=>wi(t).slice(8,-1),Pc=t=>wi(t)==="[object Object]",eo=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jn=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Si=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ah=/-(\w)/g,Ye=Si(t=>t.replace(Ah,(e,n)=>n?n.toUpperCase():"")),Ph=/\B([A-Z])/g,rn=Si(t=>t.replace(Ph,"-$1").toLowerCase()),Ti=Si(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qi=Si(t=>t?`on${Ti(t)}`:""),Rt=(t,e)=>!Object.is(t,e),Ls=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},yr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tl;const Ni=()=>tl||(tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function to(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Mh(s):to(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(xe(t)||pe(t))return t}const Oh=/;(?![^(]*\))/g,Dh=/:([^]+)/,kh=/\/\*[^]*?\*\//g;function Mh(t){const e={};return t.replace(kh,"").split(Oh).forEach(n=>{if(n){const s=n.split(Dh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function no(t){let e="";if(xe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=no(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lh=Jr(Fh);function Dc(t){return!!t||t===""}const kc=t=>!!(t&&t.__v_isRef===!0),Ge=t=>xe(t)?t:t==null?"":H(t)||pe(t)&&(t.toString===Ac||!V(t.toString))?kc(t)?Ge(t.value):JSON.stringify(t,Mc,2):String(t),Mc=(t,e)=>kc(e)?Mc(t,e.value):_n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ji(s,r)+" =>"]=i,n),{})}:Nc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ji(n))}:Wt(e)?Ji(e):pe(e)&&!H(e)&&!Pc(e)?String(e):e,Ji=(t,e="")=>{var n;return Wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Fc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Lc(t){return new Fc(t)}function Wc(){return Oe}function Wh(t,e=!1){Oe&&Oe.cleanups.push(t)}let le;const Xi=new WeakSet;class Bc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xi.has(this)&&(Xi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nl(this),Vc(this);const e=le,n=Ze;le=this,Ze=!0;try{return this.fn()}finally{jc(this),le=e,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ro(e);this.deps=this.depsTail=void 0,nl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vr(this)&&this.run()}get dirty(){return vr(this)}}let Hc=0,$n,Gn;function Uc(t,e=!1){if(t.flags|=8,e){t.next=Gn,Gn=t;return}t.next=$n,$n=t}function so(){Hc++}function io(){if(--Hc>0)return;if(Gn){let e=Gn;for(Gn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$n;){let e=$n;for($n=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Vc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ro(s),Bh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function vr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($c(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $c(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ns))return;t.globalVersion=ns;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vr(t)){t.flags&=-3;return}const n=le,s=Ze;le=t,Ze=!0;try{Vc(t);const i=t.fn(t._value);(e.version===0||Rt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{le=n,Ze=s,jc(t),t.flags&=-3}}function ro(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ro(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ze=!0;const Gc=[];function Bt(){Gc.push(Ze),Ze=!1}function Ht(){const t=Gc.pop();Ze=t===void 0?!0:t}function nl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=le;le=void 0;try{e()}finally{le=n}}}let ns=0;class Hh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!le||!Ze||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new Hh(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,zc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(e){this.version++,ns++,this.notify(e)}notify(e){so();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{io()}}}function zc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)zc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const js=new WeakMap,Jt=Symbol(""),br=Symbol(""),ss=Symbol("");function Te(t,e,n){if(Ze&&le){let s=js.get(t);s||js.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new oo),i.map=s,i.key=n),i.track()}}function gt(t,e,n,s,i,r){const o=js.get(t);if(!o){ns++;return}const l=c=>{c&&c.trigger()};if(so(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&eo(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,g)=>{(g==="length"||g===ss||!Wt(g)&&g>=u)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ss)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Jt)),_n(t)&&l(o.get(br)));break;case"delete":c||(l(o.get(Jt)),_n(t)&&l(o.get(br)));break;case"set":_n(t)&&l(o.get(Jt));break}}io()}function Uh(t,e){const n=js.get(t);return n&&n.get(e)}function cn(t){const e=X(t);return e===t?e:(Te(e,"iterate",ss),Ke(t)?e:e.map(Ne))}function Ri(t){return Te(t=X(t),"iterate",ss),t}const Vh={__proto__:null,[Symbol.iterator](){return Zi(this,Symbol.iterator,Ne)},concat(...t){return cn(this).concat(...t.map(e=>H(e)?cn(e):e))},entries(){return Zi(this,"entries",t=>(t[1]=Ne(t[1]),t))},every(t,e){return ft(this,"every",t,e,void 0,arguments)},filter(t,e){return ft(this,"filter",t,e,n=>n.map(Ne),arguments)},find(t,e){return ft(this,"find",t,e,Ne,arguments)},findIndex(t,e){return ft(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ft(this,"findLast",t,e,Ne,arguments)},findLastIndex(t,e){return ft(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ft(this,"forEach",t,e,void 0,arguments)},includes(...t){return er(this,"includes",t)},indexOf(...t){return er(this,"indexOf",t)},join(t){return cn(this).join(t)},lastIndexOf(...t){return er(this,"lastIndexOf",t)},map(t,e){return ft(this,"map",t,e,void 0,arguments)},pop(){return Mn(this,"pop")},push(...t){return Mn(this,"push",t)},reduce(t,...e){return sl(this,"reduce",t,e)},reduceRight(t,...e){return sl(this,"reduceRight",t,e)},shift(){return Mn(this,"shift")},some(t,e){return ft(this,"some",t,e,void 0,arguments)},splice(...t){return Mn(this,"splice",t)},toReversed(){return cn(this).toReversed()},toSorted(t){return cn(this).toSorted(t)},toSpliced(...t){return cn(this).toSpliced(...t)},unshift(...t){return Mn(this,"unshift",t)},values(){return Zi(this,"values",Ne)}};function Zi(t,e,n){const s=Ri(t),i=s[e]();return s!==t&&!Ke(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const jh=Array.prototype;function ft(t,e,n,s,i,r){const o=Ri(t),l=o!==t&&!Ke(t),c=o[e];if(c!==jh[e]){const p=c.apply(t,r);return l?Ne(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Ne(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function sl(t,e,n,s){const i=Ri(t);let r=n;return i!==t&&(Ke(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ne(l),c,t)}),i[e](r,...s)}function er(t,e,n){const s=X(t);Te(s,"iterate",ss);const i=s[e](...n);return(i===-1||i===!1)&&ao(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function Mn(t,e,n=[]){Bt(),so();const s=X(t)[e].apply(t,n);return io(),Ht(),s}const $h=Jr("__proto__,__v_isRef,__isVue"),Kc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt));function Gh(t){Wt(t)||(t=String(t));const e=X(this);return Te(e,"has",t),e.hasOwnProperty(t)}class qc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?tf:Xc:r?Jc:Qc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=Vh[n]))return c;if(n==="hasOwnProperty")return Gh}const l=Reflect.get(e,n,me(e)?e:s);return(Wt(n)?Kc.has(n):$h(n))||(i||Te(e,"get",n),r)?l:me(l)?o&&eo(n)?l:l.value:pe(l)?i?Zc(l):Ai(l):l}}class Yc extends qc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Zt(r);if(!Ke(s)&&!Zt(s)&&(r=X(r),s=X(s)),!H(e)&&me(r)&&!me(s))return c?!1:(r.value=s,!0)}const o=H(e)&&eo(n)?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,me(e)?e:i);return e===X(i)&&(o?Rt(s,r)&&gt(e,"set",n,s):gt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&gt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Wt(n)||!Kc.has(n))&&Te(e,"has",n),s}ownKeys(e){return Te(e,"iterate",H(e)?"length":Jt),Reflect.ownKeys(e)}}class zh extends qc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kh=new Yc,qh=new zh,Yh=new Yc(!0);const Cr=t=>t,As=t=>Reflect.getPrototypeOf(t);function Qh(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=_n(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Cr:e?Er:Ne;return!e&&Te(r,"iterate",c?br:Jt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function Ps(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jh(t,e){const n={get(i){const r=this.__v_raw,o=X(r),l=X(i);t||(Rt(i,l)&&Te(o,"get",i),Te(o,"get",l));const{has:c}=As(o),a=e?Cr:t?Er:Ne;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Te(X(i),"iterate",Jt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),l=X(i);return t||(Rt(i,l)&&Te(o,"has",i),Te(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=X(l),a=e?Cr:t?Er:Ne;return!t&&Te(c,"iterate",Jt),l.forEach((u,p)=>i.call(r,a(u),a(p),o))}};return Ae(n,t?{add:Ps("add"),set:Ps("set"),delete:Ps("delete"),clear:Ps("clear")}:{add(i){!e&&!Ke(i)&&!Zt(i)&&(i=X(i));const r=X(this);return As(r).has.call(r,i)||(r.add(i),gt(r,"add",i,i)),this},set(i,r){!e&&!Ke(r)&&!Zt(r)&&(r=X(r));const o=X(this),{has:l,get:c}=As(o);let a=l.call(o,i);a||(i=X(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?Rt(r,u)&&gt(o,"set",i,r):gt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:l}=As(r);let c=o.call(r,i);c||(i=X(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&gt(r,"delete",i,void 0),a},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&gt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Qh(i,t,e)}),n}function lo(t,e){const n=Jh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const Xh={get:lo(!1,!1)},Zh={get:lo(!1,!0)},ef={get:lo(!0,!1)};const Qc=new WeakMap,Jc=new WeakMap,Xc=new WeakMap,tf=new WeakMap;function nf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sf(t){return t.__v_skip||!Object.isExtensible(t)?0:nf(Rh(t))}function Ai(t){return Zt(t)?t:co(t,!1,Kh,Xh,Qc)}function rf(t){return co(t,!1,Yh,Zh,Jc)}function Zc(t){return co(t,!0,qh,ef,Xc)}function co(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=sf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function At(t){return Zt(t)?At(t.__v_raw):!!(t&&t.__v_isReactive)}function Zt(t){return!!(t&&t.__v_isReadonly)}function Ke(t){return!!(t&&t.__v_isShallow)}function ao(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function uo(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Oc(t,"__v_skip",!0),t}const Ne=t=>pe(t)?Ai(t):t,Er=t=>pe(t)?Zc(t):t;function me(t){return t?t.__v_isRef===!0:!1}function _t(t){return ea(t,!1)}function of(t){return ea(t,!0)}function ea(t,e){return me(t)?t:new lf(t,e)}class lf{constructor(e,n){this.dep=new oo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Ne(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ke(e)||Zt(e);e=s?e:X(e),Rt(e,n)&&(this._rawValue=e,this._value=s?e:Ne(e),this.dep.trigger())}}function Se(t){return me(t)?t.value:t}const cf={get:(t,e,n)=>e==="__v_raw"?t:Se(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ta(t){return At(t)?t:new Proxy(t,cf)}function af(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=hf(t,n);return e}class uf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Uh(X(this._object),this._key)}}function hf(t,e,n){const s=t[e];return me(s)?s:new uf(t,e,n)}class ff{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new oo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Uc(this,!0),!0}get value(){const e=this.dep.track();return $c(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function df(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new ff(s,i,n)}const Os={},$s=new WeakMap;let zt;function pf(t,e=!1,n=zt){if(n){let s=$s.get(n);s||$s.set(n,s=[]),s.push(t)}}function _f(t,e,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=F=>i?F:Ke(F)||i===!1||i===0?mt(F,1):mt(F);let u,p,g,x,I=!1,D=!1;if(me(t)?(p=()=>t.value,I=Ke(t)):At(t)?(p=()=>a(t),I=!0):H(t)?(D=!0,I=t.some(F=>At(F)||Ke(F)),p=()=>t.map(F=>{if(me(F))return F.value;if(At(F))return a(F);if(V(F))return c?c(F,2):F()})):V(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Bt();try{g()}finally{Ht()}}const F=zt;zt=u;try{return c?c(t,3,[x]):t(x)}finally{zt=F}}:p=at,e&&i){const F=p,J=i===!0?1/0:i;p=()=>mt(F(),J)}const $=Wc(),j=()=>{u.stop(),$&&$.active&&Zr($.effects,u)};if(r&&e){const F=e;e=(...J)=>{F(...J),j()}}let Q=D?new Array(t.length).fill(Os):Os;const ee=F=>{if(!(!(u.flags&1)||!u.dirty&&!F))if(e){const J=u.run();if(i||I||(D?J.some((d,h)=>Rt(d,Q[h])):Rt(J,Q))){g&&g();const d=zt;zt=u;try{const h=[J,Q===Os?void 0:D&&Q[0]===Os?[]:Q,x];c?c(e,3,h):e(...h),Q=J}finally{zt=d}}}else u.run()};return l&&l(ee),u=new Bc(p),u.scheduler=o?()=>o(ee,!1):ee,x=F=>pf(F,!1,u),g=u.onStop=()=>{const F=$s.get(u);if(F){if(c)c(F,4);else for(const J of F)J();$s.delete(u)}},e?s?ee(!0):Q=u.run():o?o(ee.bind(null,!0),!0):u.run(),j.pause=u.pause.bind(u),j.resume=u.resume.bind(u),j.stop=j,j}function mt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))mt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)mt(t[s],e,n);else if(Nc(t)||_n(t))t.forEach(s=>{mt(s,e,n)});else if(Pc(t)){for(const s in t)mt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&mt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(t,e,n,s){try{return s?t(...s):t()}catch(i){Pi(i,e,n)}}function ut(t,e,n,s){if(V(t)){const i=ys(t,e,n,s);return i&&Rc(i)&&i.catch(r=>{Pi(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}}function Pi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,c,a)===!1)return}l=l.parent}if(r){Bt(),ys(r,null,10,[t,c,a]),Ht();return}}gf(t,n,i,s,o)}function gf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const De=[];let lt=-1;const gn=[];let Tt=null,hn=0;const na=Promise.resolve();let Gs=null;function sa(t){const e=Gs||na;return t?e.then(this?t.bind(this):t):e}function mf(t){let e=lt+1,n=De.length;for(;e<n;){const s=e+n>>>1,i=De[s],r=is(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ho(t){if(!(t.flags&1)){const e=is(t),n=De[De.length-1];!n||!(t.flags&2)&&e>=is(n)?De.push(t):De.splice(mf(e),0,t),t.flags|=1,ia()}}function ia(){Gs||(Gs=na.then(oa))}function xf(t){H(t)?gn.push(...t):Tt&&t.id===-1?Tt.splice(hn+1,0,t):t.flags&1||(gn.push(t),t.flags|=1),ia()}function il(t,e,n=lt+1){for(;n<De.length;n++){const s=De[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;De.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ra(t){if(gn.length){const e=[...new Set(gn)].sort((n,s)=>is(n)-is(s));if(gn.length=0,Tt){Tt.push(...e);return}for(Tt=e,hn=0;hn<Tt.length;hn++){const n=Tt[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,hn=0}}const is=t=>t.id==null?t.flags&2?-1:1/0:t.id;function oa(t){try{for(lt=0;lt<De.length;lt++){const e=De[lt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;lt<De.length;lt++){const e=De[lt];e&&(e.flags&=-2)}lt=-1,De.length=0,ra(),Gs=null,(De.length||gn.length)&&oa()}}let Fe=null,la=null;function zs(t){const e=Fe;return Fe=t,la=t&&t.type.__scopeId||null,e}function yf(t,e=Fe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_l(-1);const r=zs(e);let o;try{o=t(...i)}finally{zs(r),s._d&&_l(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vf(t,e){if(Fe===null)return t;const n=Mi(Fe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ie]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&mt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Bt(),ut(c,n,8,[t.el,l,t,e]),Ht())}}const bf=Symbol("_vte"),Cf=t=>t.__isTeleport;function fo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function po(t,e){return V(t)?Ae({name:t.name},e,{setup:t}):t}function ca(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ks(t,e,n,s,i=!1){if(H(t)){t.forEach((I,D)=>Ks(I,e&&(H(e)?e[D]:e),n,s,i));return}if(zn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ks(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Mi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ie?l.refs={}:l.refs,p=l.setupState,g=X(p),x=p===ie?()=>!1:I=>te(g,I);if(a!=null&&a!==c&&(xe(a)?(u[a]=null,x(a)&&(p[a]=null)):me(a)&&(a.value=null)),V(c))ys(c,l,12,[o,u]);else{const I=xe(c),D=me(c);if(I||D){const $=()=>{if(t.f){const j=I?x(c)?p[c]:u[c]:c.value;i?H(j)&&Zr(j,r):H(j)?j.includes(r)||j.push(r):I?(u[c]=[r],x(c)&&(p[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else I?(u[c]=o,x(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(u[t.k]=o))};o?($.id=-1,je($,n)):$()}}}Ni().requestIdleCallback;Ni().cancelIdleCallback;const zn=t=>!!t.type.__asyncLoader,aa=t=>t.type.__isKeepAlive;function Ef(t,e){ua(t,"a",e)}function If(t,e){ua(t,"da",e)}function ua(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Oi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)aa(i.parent.vnode)&&wf(s,e,n,i),i=i.parent}}function wf(t,e,n,s){const i=Oi(e,t,s,!0);fa(()=>{Zr(s[e],i)},n)}function Oi(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Bt();const l=vs(n),c=ut(e,n,t,o);return l(),Ht(),c});return s?i.unshift(r):i.push(r),r}}const Et=t=>(e,n=we)=>{(!os||t==="sp")&&Oi(t,(...s)=>e(...s),n)},Sf=Et("bm"),ha=Et("m"),Tf=Et("bu"),Nf=Et("u"),Rf=Et("bum"),fa=Et("um"),Af=Et("sp"),Pf=Et("rtg"),Of=Et("rtc");function Df(t,e=we){Oi("ec",t,e)}const kf="components",da=Symbol.for("v-ndc");function Mf(t){return xe(t)?Ff(kf,t,!1)||t:t||da}function Ff(t,e,n=!0,s=!1){const i=Fe||we;if(i){const r=i.type;{const l=Id(r,!1);if(l&&(l===e||l===Ye(e)||l===Ti(Ye(e))))return r}const o=rl(i[t]||r[t],e)||rl(i.appContext[t],e);return!o&&s?r:o}}function rl(t,e){return t&&(t[e]||t[Ye(e)]||t[Ti(Ye(e))])}function ol(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||xe(t)){const l=o&&At(t);let c=!1;l&&(c=!Ke(t),t=Ri(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Ne(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Ir=t=>t?Fa(t)?Mi(t):Ir(t.parent):null,Kn=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ir(t.parent),$root:t=>Ir(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_a(t),$forceUpdate:t=>t.f||(t.f=()=>{ho(t.update)}),$nextTick:t=>t.n||(t.n=sa.bind(t.proxy)),$watch:t=>rd.bind(t)}),tr=(t,e)=>t!==ie&&!t.__isScriptSetup&&te(t,e),Lf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(tr(s,e))return o[e]=1,s[e];if(i!==ie&&te(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&te(a,e))return o[e]=3,r[e];if(n!==ie&&te(n,e))return o[e]=4,n[e];wr&&(o[e]=0)}}const u=Kn[e];let p,g;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==ie&&te(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,te(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return tr(i,e)?(i[e]=n,!0):s!==ie&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ie&&te(t,o)||tr(e,o)||(l=r[0])&&te(l,o)||te(s,o)||te(Kn,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ll(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wr=!0;function Wf(t){const e=_a(t),n=t.proxy,s=t.ctx;wr=!1,e.beforeCreate&&cl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:p,mounted:g,beforeUpdate:x,updated:I,activated:D,deactivated:$,beforeDestroy:j,beforeUnmount:Q,destroyed:ee,unmounted:F,render:J,renderTracked:d,renderTriggered:h,errorCaptured:f,serverPrefetch:v,expose:C,inheritAttrs:k,components:U,directives:ue,filters:tt}=e;if(a&&Bf(a,s,null),o)for(const G in o){const se=o[G];V(se)&&(s[G]=se.bind(n))}if(i){const G=i.call(n,n);pe(G)&&(t.data=Ai(G))}if(wr=!0,r)for(const G in r){const se=r[G],Ut=V(se)?se.bind(n,n):V(se.get)?se.get.bind(n,n):at,Ns=!V(se)&&V(se.set)?se.set.bind(n):at,Vt=Wa({get:Ut,set:Ns});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:nt=>Vt.value=nt})}if(l)for(const G in l)pa(l[G],s,n,G);if(c){const G=V(c)?c.call(n):c;Reflect.ownKeys(G).forEach(se=>{Gf(se,G[se])})}u&&cl(u,t,"c");function fe(G,se){H(se)?se.forEach(Ut=>G(Ut.bind(n))):se&&G(se.bind(n))}if(fe(Sf,p),fe(ha,g),fe(Tf,x),fe(Nf,I),fe(Ef,D),fe(If,$),fe(Df,f),fe(Of,d),fe(Pf,h),fe(Rf,Q),fe(fa,F),fe(Af,v),H(C))if(C.length){const G=t.exposed||(t.exposed={});C.forEach(se=>{Object.defineProperty(G,se,{get:()=>n[se],set:Ut=>n[se]=Ut})})}else t.exposed||(t.exposed={});J&&t.render===at&&(t.render=J),k!=null&&(t.inheritAttrs=k),U&&(t.components=U),ue&&(t.directives=ue),v&&ca(t)}function Bf(t,e,n=at){H(t)&&(t=Sr(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=qn(i.from||s,i.default,!0):r=qn(i.from||s):r=qn(i),me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function cl(t,e,n){ut(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pa(t,e,n,s){let i=s.includes(".")?Ra(n,s):()=>n[s];if(xe(t)){const r=e[t];V(r)&&mn(i,r)}else if(V(t))mn(i,t.bind(n));else if(pe(t))if(H(t))t.forEach(r=>pa(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&mn(i,r,t)}}function _a(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>qs(c,a,o,!0)),qs(c,e,o)),pe(e)&&r.set(e,c),c}function qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qs(t,r,n,!0),i&&i.forEach(o=>qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Hf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Hf={data:al,props:ul,emits:ul,methods:Vn,computed:Vn,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Vn,directives:Vn,watch:Vf,provide:al,inject:Uf};function al(t,e){return e?t?function(){return Ae(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Uf(t,e){return Vn(Sr(t),Sr(e))}function Sr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?Ae(Object.create(null),t,e):e}function ul(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ae(Object.create(null),ll(t),ll(e??{})):e}function Vf(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function ga(){return{app:null,config:{isNativeTag:Th,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jf=0;function $f(t,e){return function(s,i=null){V(s)||(s=Ae({},s)),i!=null&&!pe(i)&&(i=null);const r=ga(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:jf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Sd,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(a,...p)):V(u)&&(o.add(u),u(a,...p))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,p){return p?(r.components[u]=p,a):r.components[u]},directive(u,p){return p?(r.directives[u]=p,a):r.directives[u]},mount(u,p,g){if(!c){const x=a._ceVNode||qe(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,u,g),c=!0,a._container=u,u.__vue_app__=a,Mi(x.component)}},onUnmount(u){l.push(u)},unmount(){c&&(ut(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,p){return r.provides[u]=p,a},runWithContext(u){const p=Xt;Xt=a;try{return u()}finally{Xt=p}}};return a}}let Xt=null;function Gf(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function qn(t,e,n=!1){const s=we||Fe;if(s||Xt){const i=Xt?Xt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}function zf(){return!!(we||Fe||Xt)}const ma={},xa=()=>Object.create(ma),ya=t=>Object.getPrototypeOf(t)===ma;function Kf(t,e,n,s=!1){const i={},r=xa();t.propsDefaults=Object.create(null),va(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:rf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function qf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(Di(t.emitsOptions,g))continue;const x=e[g];if(c)if(te(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const I=Ye(g);i[I]=Tr(c,l,I,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{va(t,e,i,r)&&(a=!0);let u;for(const p in l)(!e||!te(e,p)&&((u=rn(p))===p||!te(e,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=Tr(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!te(e,p))&&(delete r[p],a=!0)}a&&gt(t.attrs,"set","")}function va(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(jn(c))continue;const a=e[c];let u;i&&te(i,u=Ye(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Di(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=X(n),a=l||ie;for(let u=0;u<r.length;u++){const p=r[u];n[p]=Tr(i,c,p,a[p],t,!te(a,p))}}return o}function Tr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=te(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=vs(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===rn(n))&&(s=!0))}return s}const Yf=new WeakMap;function ba(t,e,n=!1){const s=n?Yf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!V(t)){const u=p=>{c=!0;const[g,x]=ba(p,e,!0);Ae(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return pe(t)&&s.set(t,pn),pn;if(H(r))for(let u=0;u<r.length;u++){const p=Ye(r[u]);hl(p)&&(o[p]=ie)}else if(r)for(const u in r){const p=Ye(u);if(hl(p)){const g=r[u],x=o[p]=H(g)||V(g)?{type:g}:Ae({},g),I=x.type;let D=!1,$=!0;if(H(I))for(let j=0;j<I.length;++j){const Q=I[j],ee=V(Q)&&Q.name;if(ee==="Boolean"){D=!0;break}else ee==="String"&&($=!1)}else D=V(I)&&I.name==="Boolean";x[0]=D,x[1]=$,(D||te(x,"default"))&&l.push(p)}}const a=[o,l];return pe(t)&&s.set(t,a),a}function hl(t){return t[0]!=="$"&&!jn(t)}const Ca=t=>t[0]==="_"||t==="$stable",_o=t=>H(t)?t.map(ct):[ct(t)],Qf=(t,e,n)=>{if(e._n)return e;const s=yf((...i)=>_o(e(...i)),n);return s._c=!1,s},Ea=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ca(i))continue;const r=t[i];if(V(r))e[i]=Qf(i,r,s);else if(r!=null){const o=_o(r);e[i]=()=>o}}},Ia=(t,e)=>{const n=_o(e);t.slots.default=()=>n},wa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Jf=(t,e,n)=>{const s=t.slots=xa();if(t.vnode.shapeFlag&32){const i=e._;i?(wa(s,e,n),n&&Oc(s,"_",i,!0)):Ea(e,s)}else e&&Ia(t,e)},Xf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:wa(i,e,n):(r=!e.$stable,Ea(e,i)),o=e}else e&&(Ia(t,e),o={default:1});if(r)for(const l in i)!Ca(l)&&o[l]==null&&delete i[l]},je=fd;function Zf(t){return ed(t)}function ed(t,e){const n=Ni();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:p,nextSibling:g,setScopeId:x=at,insertStaticContent:I}=t,D=(_,m,y,w=null,b=null,E=null,A=void 0,R=null,N=!!m.dynamicChildren)=>{if(_===m)return;_&&!Fn(_,m)&&(w=Rs(_),nt(_,b,E,!0),_=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:L,shapeFlag:O}=m;switch(S){case ki:$(_,m,y,w);break;case en:j(_,m,y,w);break;case sr:_==null&&Q(m,y,w,A);break;case ze:U(_,m,y,w,b,E,A,R,N);break;default:O&1?J(_,m,y,w,b,E,A,R,N):O&6?ue(_,m,y,w,b,E,A,R,N):(O&64||O&128)&&S.process(_,m,y,w,b,E,A,R,N,Dn)}L!=null&&b&&Ks(L,_&&_.ref,E,m||_,!m)},$=(_,m,y,w)=>{if(_==null)s(m.el=l(m.children),y,w);else{const b=m.el=_.el;m.children!==_.children&&a(b,m.children)}},j=(_,m,y,w)=>{_==null?s(m.el=c(m.children||""),y,w):m.el=_.el},Q=(_,m,y,w)=>{[_.el,_.anchor]=I(_.children,m,y,w,_.el,_.anchor)},ee=({el:_,anchor:m},y,w)=>{let b;for(;_&&_!==m;)b=g(_),s(_,y,w),_=b;s(m,y,w)},F=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},J=(_,m,y,w,b,E,A,R,N)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),_==null?d(m,y,w,b,E,A,R,N):v(_,m,b,E,A,R,N)},d=(_,m,y,w,b,E,A,R)=>{let N,S;const{props:L,shapeFlag:O,transition:M,dirs:B}=_;if(N=_.el=o(_.type,E,L&&L.is,L),O&8?u(N,_.children):O&16&&f(_.children,N,null,w,b,nr(_,E),A,R),B&&jt(_,null,w,"created"),h(N,_,_.scopeId,A,w),L){for(const oe in L)oe!=="value"&&!jn(oe)&&r(N,oe,null,L[oe],E,w);"value"in L&&r(N,"value",null,L.value,E),(S=L.onVnodeBeforeMount)&&ot(S,w,_)}B&&jt(_,null,w,"beforeMount");const Y=td(b,M);Y&&M.beforeEnter(N),s(N,m,y),((S=L&&L.onVnodeMounted)||Y||B)&&je(()=>{S&&ot(S,w,_),Y&&M.enter(N),B&&jt(_,null,w,"mounted")},b)},h=(_,m,y,w,b)=>{if(y&&x(_,y),w)for(let E=0;E<w.length;E++)x(_,w[E]);if(b){let E=b.subTree;if(m===E||Pa(E.type)&&(E.ssContent===m||E.ssFallback===m)){const A=b.vnode;h(_,A,A.scopeId,A.slotScopeIds,b.parent)}}},f=(_,m,y,w,b,E,A,R,N=0)=>{for(let S=N;S<_.length;S++){const L=_[S]=R?Nt(_[S]):ct(_[S]);D(null,L,m,y,w,b,E,A,R)}},v=(_,m,y,w,b,E,A)=>{const R=m.el=_.el;let{patchFlag:N,dynamicChildren:S,dirs:L}=m;N|=_.patchFlag&16;const O=_.props||ie,M=m.props||ie;let B;if(y&&$t(y,!1),(B=M.onVnodeBeforeUpdate)&&ot(B,y,m,_),L&&jt(m,_,y,"beforeUpdate"),y&&$t(y,!0),(O.innerHTML&&M.innerHTML==null||O.textContent&&M.textContent==null)&&u(R,""),S?C(_.dynamicChildren,S,R,y,w,nr(m,b),E):A||se(_,m,R,null,y,w,nr(m,b),E,!1),N>0){if(N&16)k(R,O,M,y,b);else if(N&2&&O.class!==M.class&&r(R,"class",null,M.class,b),N&4&&r(R,"style",O.style,M.style,b),N&8){const Y=m.dynamicProps;for(let oe=0;oe<Y.length;oe++){const ne=Y[oe],He=O[ne],Me=M[ne];(Me!==He||ne==="value")&&r(R,ne,He,Me,b,y)}}N&1&&_.children!==m.children&&u(R,m.children)}else!A&&S==null&&k(R,O,M,y,b);((B=M.onVnodeUpdated)||L)&&je(()=>{B&&ot(B,y,m,_),L&&jt(m,_,y,"updated")},w)},C=(_,m,y,w,b,E,A)=>{for(let R=0;R<m.length;R++){const N=_[R],S=m[R],L=N.el&&(N.type===ze||!Fn(N,S)||N.shapeFlag&70)?p(N.el):y;D(N,S,L,null,w,b,E,A,!0)}},k=(_,m,y,w,b)=>{if(m!==y){if(m!==ie)for(const E in m)!jn(E)&&!(E in y)&&r(_,E,m[E],null,b,w);for(const E in y){if(jn(E))continue;const A=y[E],R=m[E];A!==R&&E!=="value"&&r(_,E,R,A,b,w)}"value"in y&&r(_,"value",m.value,y.value,b)}},U=(_,m,y,w,b,E,A,R,N)=>{const S=m.el=_?_.el:l(""),L=m.anchor=_?_.anchor:l("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:B}=m;B&&(R=R?R.concat(B):B),_==null?(s(S,y,w),s(L,y,w),f(m.children||[],y,L,b,E,A,R,N)):O>0&&O&64&&M&&_.dynamicChildren?(C(_.dynamicChildren,M,y,b,E,A,R),(m.key!=null||b&&m===b.subTree)&&Sa(_,m,!0)):se(_,m,y,L,b,E,A,R,N)},ue=(_,m,y,w,b,E,A,R,N)=>{m.slotScopeIds=R,_==null?m.shapeFlag&512?b.ctx.activate(m,y,w,A,N):tt(m,y,w,b,E,A,N):ln(_,m,N)},tt=(_,m,y,w,b,E,A)=>{const R=_.component=yd(_,w,b);if(aa(_)&&(R.ctx.renderer=Dn),vd(R,!1,A),R.asyncDep){if(b&&b.registerDep(R,fe,A),!_.el){const N=R.subTree=qe(en);j(null,N,m,y)}}else fe(R,_,m,y,b,E,A)},ln=(_,m,y)=>{const w=m.component=_.component;if(ud(_,m,y))if(w.asyncDep&&!w.asyncResolved){G(w,m,y);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},fe=(_,m,y,w,b,E,A)=>{const R=()=>{if(_.isMounted){let{next:O,bu:M,u:B,parent:Y,vnode:oe}=_;{const it=Ta(_);if(it){O&&(O.el=oe.el,G(_,O,A)),it.asyncDep.then(()=>{_.isUnmounted||R()});return}}let ne=O,He;$t(_,!1),O?(O.el=oe.el,G(_,O,A)):O=oe,M&&Ls(M),(He=O.props&&O.props.onVnodeBeforeUpdate)&&ot(He,Y,O,oe),$t(_,!0);const Me=dl(_),st=_.subTree;_.subTree=Me,D(st,Me,p(st.el),Rs(st),_,b,E),O.el=Me.el,ne===null&&hd(_,Me.el),B&&je(B,b),(He=O.props&&O.props.onVnodeUpdated)&&je(()=>ot(He,Y,O,oe),b)}else{let O;const{el:M,props:B}=m,{bm:Y,m:oe,parent:ne,root:He,type:Me}=_,st=zn(m);$t(_,!1),Y&&Ls(Y),!st&&(O=B&&B.onVnodeBeforeMount)&&ot(O,ne,m),$t(_,!0);{He.ce&&He.ce._injectChildStyle(Me);const it=_.subTree=dl(_);D(null,it,y,w,_,b,E),m.el=it.el}if(oe&&je(oe,b),!st&&(O=B&&B.onVnodeMounted)){const it=m;je(()=>ot(O,ne,it),b)}(m.shapeFlag&256||ne&&zn(ne.vnode)&&ne.vnode.shapeFlag&256)&&_.a&&je(_.a,b),_.isMounted=!0,m=y=w=null}};_.scope.on();const N=_.effect=new Bc(R);_.scope.off();const S=_.update=N.run.bind(N),L=_.job=N.runIfDirty.bind(N);L.i=_,L.id=_.uid,N.scheduler=()=>ho(L),$t(_,!0),S()},G=(_,m,y)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,qf(_,m.props,w,y),Xf(_,m.children,y),Bt(),il(_),Ht()},se=(_,m,y,w,b,E,A,R,N=!1)=>{const S=_&&_.children,L=_?_.shapeFlag:0,O=m.children,{patchFlag:M,shapeFlag:B}=m;if(M>0){if(M&128){Ns(S,O,y,w,b,E,A,R,N);return}else if(M&256){Ut(S,O,y,w,b,E,A,R,N);return}}B&8?(L&16&&On(S,b,E),O!==S&&u(y,O)):L&16?B&16?Ns(S,O,y,w,b,E,A,R,N):On(S,b,E,!0):(L&8&&u(y,""),B&16&&f(O,y,w,b,E,A,R,N))},Ut=(_,m,y,w,b,E,A,R,N)=>{_=_||pn,m=m||pn;const S=_.length,L=m.length,O=Math.min(S,L);let M;for(M=0;M<O;M++){const B=m[M]=N?Nt(m[M]):ct(m[M]);D(_[M],B,y,null,b,E,A,R,N)}S>L?On(_,b,E,!0,!1,O):f(m,y,w,b,E,A,R,N,O)},Ns=(_,m,y,w,b,E,A,R,N)=>{let S=0;const L=m.length;let O=_.length-1,M=L-1;for(;S<=O&&S<=M;){const B=_[S],Y=m[S]=N?Nt(m[S]):ct(m[S]);if(Fn(B,Y))D(B,Y,y,null,b,E,A,R,N);else break;S++}for(;S<=O&&S<=M;){const B=_[O],Y=m[M]=N?Nt(m[M]):ct(m[M]);if(Fn(B,Y))D(B,Y,y,null,b,E,A,R,N);else break;O--,M--}if(S>O){if(S<=M){const B=M+1,Y=B<L?m[B].el:w;for(;S<=M;)D(null,m[S]=N?Nt(m[S]):ct(m[S]),y,Y,b,E,A,R,N),S++}}else if(S>M)for(;S<=O;)nt(_[S],b,E,!0),S++;else{const B=S,Y=S,oe=new Map;for(S=Y;S<=M;S++){const Ue=m[S]=N?Nt(m[S]):ct(m[S]);Ue.key!=null&&oe.set(Ue.key,S)}let ne,He=0;const Me=M-Y+1;let st=!1,it=0;const kn=new Array(Me);for(S=0;S<Me;S++)kn[S]=0;for(S=B;S<=O;S++){const Ue=_[S];if(He>=Me){nt(Ue,b,E,!0);continue}let rt;if(Ue.key!=null)rt=oe.get(Ue.key);else for(ne=Y;ne<=M;ne++)if(kn[ne-Y]===0&&Fn(Ue,m[ne])){rt=ne;break}rt===void 0?nt(Ue,b,E,!0):(kn[rt-Y]=S+1,rt>=it?it=rt:st=!0,D(Ue,m[rt],y,null,b,E,A,R,N),He++)}const Zo=st?nd(kn):pn;for(ne=Zo.length-1,S=Me-1;S>=0;S--){const Ue=Y+S,rt=m[Ue],el=Ue+1<L?m[Ue+1].el:w;kn[S]===0?D(null,rt,y,el,b,E,A,R,N):st&&(ne<0||S!==Zo[ne]?Vt(rt,y,el,2):ne--)}}},Vt=(_,m,y,w,b=null)=>{const{el:E,type:A,transition:R,children:N,shapeFlag:S}=_;if(S&6){Vt(_.component.subTree,m,y,w);return}if(S&128){_.suspense.move(m,y,w);return}if(S&64){A.move(_,m,y,Dn);return}if(A===ze){s(E,m,y);for(let O=0;O<N.length;O++)Vt(N[O],m,y,w);s(_.anchor,m,y);return}if(A===sr){ee(_,m,y);return}if(w!==2&&S&1&&R)if(w===0)R.beforeEnter(E),s(E,m,y),je(()=>R.enter(E),b);else{const{leave:O,delayLeave:M,afterLeave:B}=R,Y=()=>s(E,m,y),oe=()=>{O(E,()=>{Y(),B&&B()})};M?M(E,Y,oe):oe()}else s(E,m,y)},nt=(_,m,y,w=!1,b=!1)=>{const{type:E,props:A,ref:R,children:N,dynamicChildren:S,shapeFlag:L,patchFlag:O,dirs:M,cacheIndex:B}=_;if(O===-2&&(b=!1),R!=null&&Ks(R,null,y,_,!0),B!=null&&(m.renderCache[B]=void 0),L&256){m.ctx.deactivate(_);return}const Y=L&1&&M,oe=!zn(_);let ne;if(oe&&(ne=A&&A.onVnodeBeforeUnmount)&&ot(ne,m,_),L&6)Sh(_.component,y,w);else{if(L&128){_.suspense.unmount(y,w);return}Y&&jt(_,null,m,"beforeUnmount"),L&64?_.type.remove(_,m,y,Dn,w):S&&!S.hasOnce&&(E!==ze||O>0&&O&64)?On(S,m,y,!1,!0):(E===ze&&O&384||!b&&L&16)&&On(N,m,y),w&&Jo(_)}(oe&&(ne=A&&A.onVnodeUnmounted)||Y)&&je(()=>{ne&&ot(ne,m,_),Y&&jt(_,null,m,"unmounted")},y)},Jo=_=>{const{type:m,el:y,anchor:w,transition:b}=_;if(m===ze){wh(y,w);return}if(m===sr){F(_);return}const E=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(_.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:R}=b,N=()=>A(y,E);R?R(_.el,E,N):N()}else E()},wh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Sh=(_,m,y)=>{const{bum:w,scope:b,job:E,subTree:A,um:R,m:N,a:S}=_;fl(N),fl(S),w&&Ls(w),b.stop(),E&&(E.flags|=8,nt(A,_,m,y)),R&&je(R,m),je(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},On=(_,m,y,w=!1,b=!1,E=0)=>{for(let A=E;A<_.length;A++)nt(_[A],m,y,w,b)},Rs=_=>{if(_.shapeFlag&6)return Rs(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[bf];return y?g(y):m};let Yi=!1;const Xo=(_,m,y)=>{_==null?m._vnode&&nt(m._vnode,null,null,!0):D(m._vnode||null,_,m,null,null,null,y),m._vnode=_,Yi||(Yi=!0,il(),ra(),Yi=!1)},Dn={p:D,um:nt,m:Vt,r:Jo,mt:tt,mc:f,pc:se,pbc:C,n:Rs,o:t};return{render:Xo,hydrate:void 0,createApp:$f(Xo)}}function nr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $t({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function td(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sa(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Nt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Sa(o,l)),l.type===ki&&(l.el=o.el)}}function nd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ta(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ta(e)}function fl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const sd=Symbol.for("v-scx"),id=()=>qn(sd);function mn(t,e,n){return Na(t,e,n)}function Na(t,e,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ae({},n),c=e&&s||!e&&r!=="post";let a;if(os){if(r==="sync"){const x=id();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=at,x.resume=at,x.pause=at,x}}const u=we;l.call=(x,I,D)=>ut(x,u,I,D);let p=!1;r==="post"?l.scheduler=x=>{je(x,u&&u.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(x,I)=>{I?x():ho(x)}),l.augmentJob=x=>{e&&(x.flags|=4),p&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const g=_f(t,e,l);return os&&(a?a.push(g):c&&g()),g}function rd(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?Ra(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=vs(this),l=Na(i,r.bind(s),n);return o(),l}function Ra(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const od=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ye(e)}Modifiers`]||t[`${rn(e)}Modifiers`];function ld(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&od(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>xe(u)?u.trim():u)),o.number&&(i=n.map(yr)));let l,c=s[l=Qi(e)]||s[l=Qi(Ye(e))];!c&&r&&(c=s[l=Qi(rn(e))]),c&&ut(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ut(a,t,6,i)}}function Aa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const c=a=>{const u=Aa(a,e,!0);u&&(l=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(pe(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Ae(o,r),pe(t)&&s.set(t,o),o)}function Di(t,e){return!t||!Ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,rn(e))||te(t,e))}function dl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:p,data:g,setupState:x,ctx:I,inheritAttrs:D}=t,$=zs(t);let j,Q;try{if(n.shapeFlag&4){const F=i||s,J=F;j=ct(a.call(J,F,u,p,x,g,I)),Q=l}else{const F=e;j=ct(F.length>1?F(p,{attrs:l,slots:o,emit:c}):F(p,null)),Q=e.props?l:cd(l)}}catch(F){Yn.length=0,Pi(F,t,1),j=qe(en)}let ee=j;if(Q&&D!==!1){const F=Object.keys(Q),{shapeFlag:J}=ee;F.length&&J&7&&(r&&F.some(Xr)&&(Q=ad(Q,r)),ee=bn(ee,Q,!1,!0))}return n.dirs&&(ee=bn(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&fo(ee,n.transition),j=ee,zs($),j}const cd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ii(n))&&((e||(e={}))[n]=t[n]);return e},ad=(t,e)=>{const n={};for(const s in t)(!Xr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ud(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?pl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(o[g]!==s[g]&&!Di(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?pl(s,o,a):!0:!!o;return!1}function pl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Di(n,r))return!0}return!1}function hd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Pa=t=>t.__isSuspense;function fd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):xf(t)}const ze=Symbol.for("v-fgt"),ki=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),Yn=[];let $e=null;function de(t=!1){Yn.push($e=t?null:[])}function dd(){Yn.pop(),$e=Yn[Yn.length-1]||null}let rs=1;function _l(t,e=!1){rs+=t,t<0&&$e&&e&&($e.hasOnce=!0)}function Oa(t){return t.dynamicChildren=rs>0?$e||pn:null,dd(),rs>0&&$e&&$e.push(t),t}function ge(t,e,n,s,i,r){return Oa(P(t,e,n,s,i,r,!0))}function Da(t,e,n,s,i){return Oa(qe(t,e,n,s,i,!0))}function ka(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const Ma=({key:t})=>t??null,Ws=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||me(t)||V(t)?{i:Fe,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,s=0,i=null,r=t===ze?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ma(e),ref:e&&Ws(e),scopeId:la,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return l?(go(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),rs>0&&!o&&$e&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$e.push(c),c}const qe=pd;function pd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===da)&&(t=en),ka(t)){const l=bn(t,e,!0);return n&&go(l,n),rs>0&&!r&&$e&&(l.shapeFlag&6?$e[$e.indexOf(t)]=l:$e.push(l)),l.patchFlag=-2,l}if(wd(t)&&(t=t.__vccOpts),e){e=_d(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=no(l)),pe(c)&&(ao(c)&&!H(c)&&(c=Ae({},c)),e.style=to(c))}const o=xe(t)?1:Pa(t)?128:Cf(t)?64:pe(t)?4:V(t)?2:0;return P(t,e,n,s,i,o,r,!0)}function _d(t){return t?ao(t)||ya(t)?Ae({},t):t:null}function bn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?gd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ma(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Ws(e)):[r,Ws(e)]:Ws(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&fo(u,c.clone(u)),u}function Ie(t=" ",e=0){return qe(ki,null,t,e)}function Ve(t="",e=!1){return e?(de(),Da(en,null,t)):qe(en,null,t)}function ct(t){return t==null||typeof t=="boolean"?qe(en):H(t)?qe(ze,null,t.slice()):ka(t)?Nt(t):qe(ki,null,String(t))}function Nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function go(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),go(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ya(e)?e._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),s&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function gd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=no([e.class,s.class]));else if(i==="style")e.style=to([e.style,s.style]);else if(Ii(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ot(t,e,n,s=null){ut(t,e,7,[n,s])}const md=ga();let xd=0;function yd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||md,r={uid:xd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(s,i),emitsOptions:Aa(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ld.bind(null,r),t.ce&&t.ce(r),r}let we=null,Ys,Nr;{const t=Ni(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Ys=e("__VUE_INSTANCE_SETTERS__",n=>we=n),Nr=e("__VUE_SSR_SETTERS__",n=>os=n)}const vs=t=>{const e=we;return Ys(t),t.scope.on(),()=>{t.scope.off(),Ys(e)}},gl=()=>{we&&we.scope.off(),Ys(null)};function Fa(t){return t.vnode.shapeFlag&4}let os=!1;function vd(t,e=!1,n=!1){e&&Nr(e);const{props:s,children:i}=t.vnode,r=Fa(t);Kf(t,s,r,e),Jf(t,i,n);const o=r?bd(t,e):void 0;return e&&Nr(!1),o}function bd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lf);const{setup:s}=n;if(s){Bt();const i=t.setupContext=s.length>1?Ed(t):null,r=vs(t),o=ys(s,t,0,[t.props,i]),l=Rc(o);if(Ht(),r(),(l||t.sp)&&!zn(t)&&ca(t),l){if(o.then(gl,gl),e)return o.then(c=>{ml(t,c)}).catch(c=>{Pi(c,t,0)});t.asyncDep=o}else ml(t,o)}else La(t)}function ml(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=ta(e)),La(t)}function La(t,e,n){const s=t.type;t.render||(t.render=s.render||at);{const i=vs(t);Bt();try{Wf(t)}finally{Ht(),i()}}}const Cd={get(t,e){return Te(t,"get",""),t[e]}};function Ed(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Cd),slots:t.slots,emit:t.emit,expose:e}}function Mi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ta(uo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function Id(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function wd(t){return V(t)&&"__vccOpts"in t}const Wa=(t,e)=>df(t,e,os),Sd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rr;const xl=typeof window<"u"&&window.trustedTypes;if(xl)try{Rr=xl.createPolicy("vue",{createHTML:t=>t})}catch{}const Ba=Rr?t=>Rr.createHTML(t):t=>t,Td="http://www.w3.org/2000/svg",Nd="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,yl=dt&&dt.createElement("template"),Rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?dt.createElementNS(Td,t):e==="mathml"?dt.createElementNS(Nd,t):n?dt.createElement(t,{is:n}):dt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>dt.createTextNode(t),createComment:t=>dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{yl.innerHTML=Ba(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=yl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ad=Symbol("_vtc");function Pd(t,e,n){const s=t[Ad];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vl=Symbol("_vod"),Od=Symbol("_vsh"),Dd=Symbol(""),kd=/(^|;)\s*display\s*:/;function Md(t,e,n){const s=t.style,i=xe(n);let r=!1;if(n&&!i){if(e)if(xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Bs(s,l,"")}else for(const o in e)n[o]==null&&Bs(s,o,"");for(const o in n)o==="display"&&(r=!0),Bs(s,o,n[o])}else if(i){if(e!==n){const o=s[Dd];o&&(n+=";"+o),s.cssText=n,r=kd.test(n)}}else e&&t.removeAttribute("style");vl in t&&(t[vl]=r?s.display:"",t[Od]&&(s.display="none"))}const bl=/\s*!important$/;function Bs(t,e,n){if(H(n))n.forEach(s=>Bs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Fd(t,e);bl.test(n)?t.setProperty(rn(s),n.replace(bl,""),"important"):t[s]=n}}const Cl=["Webkit","Moz","ms"],ir={};function Fd(t,e){const n=ir[e];if(n)return n;let s=Ye(e);if(s!=="filter"&&s in t)return ir[e]=s;s=Ti(s);for(let i=0;i<Cl.length;i++){const r=Cl[i]+s;if(r in t)return ir[e]=r}return e}const El="http://www.w3.org/1999/xlink";function Il(t,e,n,s,i,r=Lh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(El,e.slice(6,e.length)):t.setAttributeNS(El,e,n):n==null||r&&!Dc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Wt(n)?String(n):n)}function wl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ba(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function fn(t,e,n,s){t.addEventListener(e,n,s)}function Ld(t,e,n,s){t.removeEventListener(e,n,s)}const Sl=Symbol("_vei");function Wd(t,e,n,s,i=null){const r=t[Sl]||(t[Sl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Bd(e);if(s){const a=r[e]=Vd(s,i);fn(t,l,a,c)}else o&&(Ld(t,l,o,c),r[e]=void 0)}}const Tl=/(?:Once|Passive|Capture)$/;function Bd(t){let e;if(Tl.test(t)){e={};let s;for(;s=t.match(Tl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),e]}let rr=0;const Hd=Promise.resolve(),Ud=()=>rr||(Hd.then(()=>rr=0),rr=Date.now());function Vd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(jd(s,n.value),e,5,[s])};return n.value=t,n.attached=Ud(),n}function jd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Nl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$d=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Pd(t,s,o):e==="style"?Md(t,n,s):Ii(e)?Xr(e)||Wd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gd(t,e,s,o))?(wl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Il(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(s))?wl(t,Ye(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Il(t,e,s,o))};function Gd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nl(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Nl(e)&&xe(n)?!1:e in t}const Rl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Ls(e,n):e};function zd(t){t.target.composing=!0}function Al(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const or=Symbol("_assign"),Kd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[or]=Rl(i);const r=s||i.props&&i.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=yr(l)),t[or](l)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",zd),fn(t,"compositionend",Al),fn(t,"change",Al))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[or]=Rl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?yr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},qd=Ae({patchProp:$d},Rd);let Pl;function Yd(){return Pl||(Pl=Zf(qd))}const Qd=(...t)=>{const e=Yd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Xd(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Jd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Jd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Xd(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ha;const Fi=t=>Ha=t,Ua=Symbol();function Ar(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qn||(Qn={}));function Zd(){const t=Lc(!0),e=t.run(()=>_t({}));let n=[],s=[];const i=uo({install(r){Fi(i),i._a=r,r.provide(Ua,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Va=()=>{};function Ol(t,e,n,s=Va){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Wc()&&Wh(i),i}function an(t,...e){t.slice().forEach(n=>{n(...e)})}const ep=t=>t(),Dl=Symbol(),lr=Symbol();function Pr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ar(i)&&Ar(s)&&t.hasOwnProperty(n)&&!me(s)&&!At(s)?t[n]=Pr(i,s):t[n]=s}return t}const tp=Symbol();function np(t){return!Ar(t)||!t.hasOwnProperty(tp)}const{assign:St}=Object;function sp(t){return!!(me(t)&&t.effect)}function ip(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=af(n.state.value[t]);return St(u,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=uo(Wa(()=>{Fi(n);const x=n._s.get(t);return o[g].call(x,x)})),p),{}))}return c=ja(t,a,e,n,s,!0),c}function ja(t,e,n={},s,i,r){let o;const l=St({actions:{}},n),c={deep:!0};let a,u,p=[],g=[],x;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),_t({});let D;function $(f){let v;a=u=!1,typeof f=="function"?(f(s.state.value[t]),v={type:Qn.patchFunction,storeId:t,events:x}):(Pr(s.state.value[t],f),v={type:Qn.patchObject,payload:f,storeId:t,events:x});const C=D=Symbol();sa().then(()=>{D===C&&(a=!0)}),u=!0,an(p,v,s.state.value[t])}const j=r?function(){const{state:v}=n,C=v?v():{};this.$patch(k=>{St(k,C)})}:Va;function Q(){o.stop(),p=[],g=[],s._s.delete(t)}const ee=(f,v="")=>{if(Dl in f)return f[lr]=v,f;const C=function(){Fi(s);const k=Array.from(arguments),U=[],ue=[];function tt(G){U.push(G)}function ln(G){ue.push(G)}an(g,{args:k,name:C[lr],store:J,after:tt,onError:ln});let fe;try{fe=f.apply(this&&this.$id===t?this:J,k)}catch(G){throw an(ue,G),G}return fe instanceof Promise?fe.then(G=>(an(U,G),G)).catch(G=>(an(ue,G),Promise.reject(G))):(an(U,fe),fe)};return C[Dl]=!0,C[lr]=v,C},F={_p:s,$id:t,$onAction:Ol.bind(null,g),$patch:$,$reset:j,$subscribe(f,v={}){const C=Ol(p,f,v.detached,()=>k()),k=o.run(()=>mn(()=>s.state.value[t],U=>{(v.flush==="sync"?u:a)&&f({storeId:t,type:Qn.direct,events:x},U)},St({},c,v)));return C},$dispose:Q},J=Ai(F);s._s.set(t,J);const h=(s._a&&s._a.runWithContext||ep)(()=>s._e.run(()=>(o=Lc()).run(()=>e({action:ee}))));for(const f in h){const v=h[f];if(me(v)&&!sp(v)||At(v))r||(I&&np(v)&&(me(v)?v.value=I[f]:Pr(v,I[f])),s.state.value[t][f]=v);else if(typeof v=="function"){const C=ee(v,f);h[f]=C,l.actions[f]=v}}return St(J,h),St(X(J),h),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:f=>{$(v=>{St(v,f)})}}),s._p.forEach(f=>{St(J,o.run(()=>f({store:J,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(J.$state,I),a=!0,u=!0,J}/*! #__NO_SIDE_EFFECTS__ */function rp(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=zf();return o=o||(c?qn(Ua,null):null),o&&Fi(o),o=Ha,o._s.has(t)||(i?ja(t,e,s,o):ip(t,s,o)),o._s.get(t)}return r.$id=t,r}const $a=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},op=()=>{};var kl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Tn(e)},Tn=function(t){return new Error("Firebase Database ("+Ga.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[u],n[p],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(za(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new cp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),p!==64){const I=a<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ka=function(t){const e=za(t);return mo.encodeByteArray(e,!0)},Qs=function(t){return Ka(t).replace(/\./g,"")},Or=function(t){try{return mo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){return qa(void 0,t)}function qa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!up(n)||(t[n]=qa(t[n],e[n]));return t}function up(t){return t!=="__proto__"}/**
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
 */function hp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fp=()=>hp().__FIREBASE_DEFAULTS__,dp=()=>{if(typeof process>"u"||typeof kl>"u")return;const t=kl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Or(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return op()||fp()||dp()||pp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_p=t=>{var e,n;return(n=(e=Ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gp=t=>{const e=_p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qa=()=>{var t;return(t=Ya())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function mp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qs(JSON.stringify(n)),Qs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xp())}function yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vp(){return Ga.NODE_ADMIN===!0}function bp(){try{return typeof indexedDB=="object"}catch{return!1}}function Cp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="FirebaseError";class bs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ep,Object.setPrototypeOf(this,bs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ip(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bs(i,l,s)}}function Ip(t,e){return t.replace(wp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ls(Or(r[0])||""),n=ls(Or(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Sp=function(t){const e=Za(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tp=function(t){const e=Za(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Xs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fl(r)&&Fl(o)){if(!Xs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):p<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function xo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Nn(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Pp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Li;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Op(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Op(t){return t===Kt?void 0:t}function Dp(t){return t.instantiationMode==="EAGER"}/**
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
 */class kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Mp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Fp=ce.INFO,Lp={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Wp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Lp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=Fp,this._logHandler=Wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Bp=(t,e)=>e.some(n=>t instanceof n);let Ll,Wl;function Hp(){return Ll||(Ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,Dr=new WeakMap,nu=new WeakMap,cr=new WeakMap,yo=new WeakMap;function Vp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tu.set(n,t)}).catch(()=>{}),yo.set(e,t),e}function jp(t){if(Dr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Dr.set(t,e)}let kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $p(t){kr=t(kr)}function Gp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ar(this),e,...n);return nu.set(s,e.sort?e.sort():[e]),Pt(s)}:Up().includes(t)?function(...e){return t.apply(ar(this),e),Pt(tu.get(this))}:function(...e){return Pt(t.apply(ar(this),e))}}function zp(t){return typeof t=="function"?Gp(t):(t instanceof IDBTransaction&&jp(t),Bp(t,Hp())?new Proxy(t,kr):t)}function Pt(t){if(t instanceof IDBRequest)return Vp(t);if(cr.has(t))return cr.get(t);const e=zp(t);return e!==t&&(cr.set(t,e),yo.set(e,t)),e}const ar=t=>yo.get(t);function Kp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const qp=["get","getKey","getAll","getAllKeys","count"],Yp=["put","add","delete","clear"],ur=new Map;function Bl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ur.get(e))return ur.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Yp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return ur.set(e,r),r}$p(t=>({...t,get:(e,n,s)=>Bl(e,n)||t.get(e,n,s),has:(e,n)=>!!Bl(e,n)||t.has(e,n)}));/**
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
 */class Qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mr="@firebase/app",Hl="0.11.2";/**
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
 */const bt=new eu("@firebase/app"),Xp="@firebase/app-compat",Zp="@firebase/analytics-compat",e_="@firebase/analytics",t_="@firebase/app-check-compat",n_="@firebase/app-check",s_="@firebase/auth",i_="@firebase/auth-compat",r_="@firebase/database",o_="@firebase/data-connect",l_="@firebase/database-compat",c_="@firebase/functions",a_="@firebase/functions-compat",u_="@firebase/installations",h_="@firebase/installations-compat",f_="@firebase/messaging",d_="@firebase/messaging-compat",p_="@firebase/performance",__="@firebase/performance-compat",g_="@firebase/remote-config",m_="@firebase/remote-config-compat",x_="@firebase/storage",y_="@firebase/storage-compat",v_="@firebase/firestore",b_="@firebase/vertexai",C_="@firebase/firestore-compat",E_="firebase",I_="11.4.0";/**
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
 */const Fr="[DEFAULT]",w_={[Mr]:"fire-core",[Xp]:"fire-core-compat",[e_]:"fire-analytics",[Zp]:"fire-analytics-compat",[n_]:"fire-app-check",[t_]:"fire-app-check-compat",[s_]:"fire-auth",[i_]:"fire-auth-compat",[r_]:"fire-rtdb",[o_]:"fire-data-connect",[l_]:"fire-rtdb-compat",[c_]:"fire-fn",[a_]:"fire-fn-compat",[u_]:"fire-iid",[h_]:"fire-iid-compat",[f_]:"fire-fcm",[d_]:"fire-fcm-compat",[p_]:"fire-perf",[__]:"fire-perf-compat",[g_]:"fire-rc",[m_]:"fire-rc-compat",[x_]:"fire-gcs",[y_]:"fire-gcs-compat",[v_]:"fire-fst",[C_]:"fire-fst-compat",[b_]:"fire-vertex","fire-js":"fire-js",[E_]:"fire-js-all"};/**
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
 */const Zs=new Map,S_=new Map,Lr=new Map;function Ul(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(Lr.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;Lr.set(e,t);for(const n of Zs.values())Ul(n,t);for(const n of S_.values())Ul(n,t);return!0}function T_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function N_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new Xa("app","Firebase",R_);/**
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
 */class A_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const P_=I_;function su(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ot.create("bad-app-name",{appName:String(i)});if(n||(n=Qa()),!n)throw Ot.create("no-options");const r=Zs.get(i);if(r){if(Xs(n,r.options)&&Xs(s,r.config))return r;throw Ot.create("duplicate-app",{appName:i})}const o=new kp(i);for(const c of Lr.values())o.addComponent(c);const l=new A_(n,s,o);return Zs.set(i,l),l}function O_(t=Fr){const e=Zs.get(t);if(!e&&t===Fr&&Qa())return su();if(!e)throw Ot.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let i=(s=w_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(l.join(" "));return}ei(new cs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const D_="firebase-heartbeat-database",k_=1,as="firebase-heartbeat-store";let hr=null;function iu(){return hr||(hr=Kp(D_,k_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),hr}async function M_(t){try{const n=(await iu()).transaction(as),s=await n.objectStore(as).get(ru(t));return await n.done,s}catch(e){if(e instanceof bs)bt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(n.message)}}}async function Vl(t,e){try{const s=(await iu()).transaction(as,"readwrite");await s.objectStore(as).put(e,ru(t)),await s.done}catch(n){if(n instanceof bs)bt.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(s.message)}}}function ru(t){return`${t.name}!${t.options.appId}`}/**
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
 */const F_=1024,L_=30;class W_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>L_){const o=U_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){bt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jl(),{heartbeatsToSend:s,unsentEntries:i}=B_(this._heartbeatsCache.heartbeats),r=Qs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return bt.warn(n),""}}}function jl(){return new Date().toISOString().substring(0,10)}function B_(t,e=F_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$l(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$l(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class H_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bp()?Cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $l(t){return Qs(JSON.stringify({version:2,heartbeats:t})).length}function U_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function V_(t){ei(new cs("platform-logger",e=>new Qp(e),"PRIVATE")),ei(new cs("heartbeat",e=>new W_(e),"PRIVATE")),xn(Mr,Hl,t),xn(Mr,Hl,"esm2017"),xn("fire-js","")}V_("");var j_="firebase",$_="11.4.0";/**
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
 */xn(j_,$_,"app");var Gl={};const zl="@firebase/database",Kl="1.0.13";/**
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
 */let ou="";function G_(t){ou=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return It(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new z_(e)}}catch{}return new K_},Yt=lu("localStorage"),q_=lu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new eu("@firebase/database"),Y_=function(){let t=1;return function(){return t++}}(),cu=function(t){const e=Ap(t),n=new Rp;n.update(e);const s=n.digest();return mo.encodeByteArray(s)},Cs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Cs.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let Jn=null,ql=!0;const Q_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),yn.logLevel=ce.VERBOSE,Jn=yn.log.bind(yn)},Re=function(...t){if(ql===!0&&(ql=!1,Jn===null&&q_.get("logging_enabled")===!0&&Q_()),Jn){const e=Cs.apply(null,t);Jn(e)}},Es=function(t){return function(...e){Re(t,...e)}},Wr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cs(...t);yn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${Cs(...t)}`;throw yn.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Cs(...t);yn.warn(e)},J_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},au=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},X_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},En="[MIN_NAME]",tn="[MAX_NAME]",Rn=function(t,e){if(t===e)return 0;if(t===En||e===tn)return-1;if(e===En||t===tn)return 1;{const n=Yl(t),s=Yl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Z_=function(t,e){return t===e?0:t<e?-1:1},Ln=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},vo=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ye(e[s]),n+=":",n+=vo(t[e[s]]);return n+="}",n},uu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hu=function(t){T(!au(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},eg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ng(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const sg=new RegExp("^-?(0*)\\d{1,10}$"),ig=-2147483648,rg=2147483647,Yl=function(t){if(sg.test(t)){const e=Number(t);if(e>=ig&&e<=rg)return e}return null},An=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},og=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,N_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class Hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="5",fu="v",du="s",pu="r",_u="f",gu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mu="ls",xu="p",Br="ac",yu="websocket",vu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ag(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cu(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===yu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ag(t)&&(n.ns=t.namespace);const i=[];return Be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.counters_={}}incrementCounter(e,n=1){It(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ap(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={},dr={};function Co(t){const e=t.toString();return fr[e]||(fr[e]=new ug),fr[e]}function hg(t,e){const n=t.toString();return dr[n]||(dr[n]=e()),dr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&An(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="start",dg="close",pg="pLPCommand",_g="pRTLPCB",Eu="id",Iu="pw",wu="ser",gg="cb",mg="seg",xg="ts",yg="d",vg="dframe",Su=1870,Tu=30,bg=Su-Tu,Cg=25e3,Eg=3e4;class dn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=Co(n),this.urlFn=c=>(this.appCheckToken&&(c[Br]=this.appCheckToken),Cu(n,vu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Eg)),X_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Eo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ql)this.id=l,this.password=c;else if(o===dg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ql]="t",s[wu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[gg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[fu]=bo,this.transportSessionId&&(s[du]=this.transportSessionId),this.lastSessionId&&(s[mu]=this.lastSessionId),this.applicationId&&(s[xu]=this.applicationId),this.appCheckToken&&(s[Br]=this.appCheckToken),typeof location<"u"&&location.hostname&&gu.test(location.hostname)&&(s[pu]=_u);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dn.forceAllow_=!0}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){return dn.forceAllow_?!0:!dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eg()&&!tg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ka(n),i=uu(s,bg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[vg]="t",s[Eu]=e,s[Iu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Eo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Y_(),window[pg+this.uniqueCallbackIdentifier]=e,window[_g+this.uniqueCallbackIdentifier]=n,this.myIFrame=Eo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Re("frame writing exception"),l.stack&&Re(l.stack),Re(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Eu]=this.myID,e[Iu]=this.myPW,e[wu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tu+s.length<=Su;){const o=this.pendingSegs.shift();s=s+"&"+mg+i+"="+o.seg+"&"+xg+i+"="+o.ts+"&"+yg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Cg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=16384,wg=45e3;let ti=null;typeof MozWebSocket<"u"?ti=MozWebSocket:typeof WebSocket<"u"&&(ti=WebSocket);class Qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=Co(n),this.connURL=Qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[fu]=bo,typeof location<"u"&&location.hostname&&gu.test(location.hostname)&&(o[pu]=_u),n&&(o[du]=n),s&&(o[mu]=s),i&&(o[Br]=i),r&&(o[xu]=r),Cu(e,yu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{let s;vp(),this.mySock=new ti(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ti!==null&&!Qe.forceDisallow_}static previouslyFailed(){return Yt.isInMemoryStorage||Yt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=uu(n,Ig);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static get ALL_TRANSPORTS(){return[dn,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Qe&&Qe.isAvailable();let s=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qe];else{const i=this.transports_=[];for(const r of us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=6e4,Tg=5e3,Ng=10*1024,Rg=100*1024,pr="t",Jl="d",Ag="s",Xl="r",Pg="e",Zl="o",ec="a",tc="n",nc="p",Og="h";class Dg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Rg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ng?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pr in e){const n=e[pr];n===ec?this.upgradeIfSecondaryHealthy_():n===Xl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ln("t",e),s=Ln("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ec,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ln("t",e),s=Ln("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ln(pr,e);if(Jl in e){const s=e[Jl];if(n===Og){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ag?this.onConnectionShutdown_(s):n===Xl?this.onReset_(s):n===Pg?Wr("Server Error: "+s):n===Zl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bo!==s&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Sg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ru{static getInstance(){return new ni}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=32,ic=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new re("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mt(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Au(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Pu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ou(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return ke(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Io(t,e){if(Mt(t)!==Mt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Mt(t)>Mt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Mg{constructor(e,n){this.errorPrefix_=n,this.parts_=Pu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wi(this.parts_[s]);Du(this)}}function Fg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wi(e),Du(t)}function Lg(t){const e=t.parts_.pop();t.byteLength_-=Wi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Du(t){if(t.byteLength_>ic)throw new Error(t.errorPrefix_+"has a key path longer than "+ic+" bytes ("+t.byteLength_+").");if(t.parts_.length>sc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sc+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Ru{static getInstance(){return new wo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e3,Wg=60*5*1e3,rc=30*1e3,Bg=1.3,Hg=3e4,Ug="server_kill",oc=3;class vt extends Nu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=vt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=Wg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ni.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ye(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Li,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&It(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wr("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hg&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Bg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Dg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{We(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ug)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&We(p),c())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ml(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>vo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oc&&(this.reconnectDelay_=rc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ou.replace(/\./g,"-")]=1,Ja()?e["framework.cordova"]=1:yp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ni.getInstance().currentlyOnline();return Ml(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(En,e),i=new K(En,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class ku extends Bi{static get __EMPTY_NODE(){return Ds}static set __EMPTY_NODE(e){Ds=e}compare(e,n){return Rn(e.name,n.name)}isDefinedOn(e){throw Tn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(tn,Ds)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Ds)}toString(){return".key"}}const vn=new ku;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class Vg{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ks(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new Vg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e){return Rn(t.name,e.name)}function So(t,e){return Rn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;function $g(t){Hr=t}const Mu=function(t){return typeof t=="number"?"number:"+hu(t):"string:"+t},Fu=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&It(e,".sv"),"Priority must be a string or number.")}else T(t===Hr||t.isEmpty(),"priority of unexpected type.");T(t===Hr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;class be{static set __childrenNodeConstructor(e){lc=e}static get __childrenNodeConstructor(){return lc}constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hu(this.value_):e+=this.value_,this.lazyHash_=cu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu,Wu;function Gg(t){Lu=t}function zg(t){Wu=t}class Kg extends Bi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(tn,new be("[PRIORITY-POST]",Wu))}makePost(e,n){const s=Lu(e);return new K(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new Kg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=Math.log(2);class Yg{constructor(e){const n=r=>parseInt(Math.log(r)/qg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const si=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let p,g;if(u===0)return null;if(u===1)return p=t[c],g=n?n(p):p,new Ce(g,p.node,Ce.BLACK,null,null);{const x=parseInt(u/2,10)+c,I=i(c,x),D=i(x+1,a);return p=t[x],g=n?n(p):p,new Ce(g,p.node,Ce.BLACK,I,D)}},r=function(c){let a=null,u=null,p=t.length;const g=function(I,D){const $=p-I,j=p;p-=I;const Q=i($+1,j),ee=t[$],F=n?n(ee):ee;x(new Ce(F,ee.node,D,null,Q))},x=function(I){a?(a.left=I,a=I):(u=I,a=I)};for(let I=0;I<c.count;++I){const D=c.nextBitIsOne(),$=Math.pow(2,c.count-(I+1));D?g($,Ce.BLACK):(g($,Ce.BLACK),g($,Ce.RED))}return u},o=new Yg(t.length),l=r(o);return new Le(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r;const un={};class yt{static get Default(){return T(un&&_e,"ChildrenNode.ts has not been loaded"),_r=_r||new yt({".priority":un},{".priority":_e}),_r}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return It(this.indexSet_,e.toString())}addIndex(e,n){T(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=si(s,e.getCompare()):l=un;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new yt(u,a)}addToIndexes(e,n){const s=Js(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(K.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),si(l,o.getCompare())}else return un;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new K(e.name,l))),c.insert(e,e.node)}});return new yt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Js(this.indexes_,i=>{if(i===un)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new yt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;class W{static get EMPTY_NODE(){return Bn||(Bn=new W(new Le(So),null,yt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fu(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bn}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bn:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bn:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{T(z(e)!==".priority"||Mt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mu(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Is?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qg extends W{constructor(){super(new Le(So),W.EMPTY_NODE,yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Is=new Qg;Object.defineProperties(K,{MIN:{value:new K(En,W.EMPTY_NODE)},MAX:{value:new K(tn,Is)}});ku.__EMPTY_NODE=W.EMPTY_NODE;be.__childrenNodeConstructor=W;$g(Is);zg(Is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=!0;function Ee(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Ee(e))}if(!(t instanceof Array)&&Jg){const n=[];let s=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ee(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new K(o,c)))}}),n.length===0)return W.EMPTY_NODE;const r=si(n,jg,o=>o.name,So);if(s){const o=si(n,_e.getCompare());return new W(r,Ee(e),new yt({".priority":o},{".priority":_e}))}else return new W(r,Ee(e),yt.Default)}else{let n=W.EMPTY_NODE;return Be(t,(s,i)=>{if(It(t,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ee(e))}}Gg(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg extends Bi{constructor(e){super(),this.indexPath_=e,T(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}makePost(e,n){const s=Ee(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Is);return new K(tn,e)}toString(){return Pu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Bi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Rn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Ee(e);return new K(n,s)}toString(){return".value"}}const em=new Zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(In(n,s)):o.trackChildChange(fs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(hs(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fs(i,r,o))}else s.trackChildChange(In(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.indexedFilter_=new To(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ds.getStartPost_(e),this.endPost_=ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,x)=>p(x,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new K(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(u&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(fs(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(hs(n,p));const D=l.updateImmediateChild(n,W.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(In(g.name,g.node)),D.updateImmediateChild(g.name,g.node)):D}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(hs(a.name,a.node)),r.trackChildChange(In(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new No;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sm(t){return t.loadsAllData()?new To(t.getIndex()):t.hasLimit()?new nm(t):new ds(t)}function cc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===em?n="$value":t.index_===vn?n="$key":(T(t.index_ instanceof Xg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ac(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Nu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ii.getListenId_(e,s),l={};this.listens_[o]=l;const c=cc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let p=u;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),Cn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ii.getListenId_(e,n);delete this.listens_[s]}get(e){const n=cc(e._queryParams),s=e._path.toString(),i=new Li;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Np(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ls(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return{value:null,children:new Map}}function Hu(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,ri());const i=t.children.get(s);e=ae(e),Hu(i,e,n)}}function Ur(t,e,n){t.value!==null?n(e,t.value):rm(t,(s,i)=>{const r=new re(e.toString()+"/"+s);Ur(i,r,n)})}function rm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=10*1e3,lm=30*1e3,cm=5*60*1e3;class am{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new om(e);const s=uc+(lm-uc)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Be(e,(i,r)=>{r>0&&It(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*cm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Uu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ro(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ao(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=Uu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new oi(Z(),n,this.revert)}}else return T(z(this.path)===e,"operationForChild called for unrelated child."),new oi(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ps(this.source,Z()):new ps(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return q(this.path)?new nn(this.source,Z(),this.snap.getImmediateChild(e)):new nn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new nn(this.source,Z(),n.value):new _s(this.source,Z(),n)}else return T(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(tm(o.childName,o.snapshotNode))}),Hn(t,i,"child_removed",e,s,n),Hn(t,i,"child_added",e,s,n),Hn(t,i,"child_moved",r,s,n),Hn(t,i,"child_changed",e,s,n),Hn(t,i,"value",e,s,n),i}function Hn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>dm(t,l,c)),o.forEach(l=>{const c=fm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function fm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dm(t,e,n){if(e.childName==null||n.childName==null)throw Tn("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e){return{eventCache:t,serverCache:e}}function Zn(t,e,n,s){return Hi(new Ft(e,n,s),t.serverCache)}function Vu(t,e,n,s){return Hi(t.eventCache,new Ft(e,n,s))}function li(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;const pm=()=>(gr||(gr=new Le(Z_)),gr);class he{static fromObject(e){let n=new he(null);return Be(e,(s,i)=>{n=n.set(new re(s),i)}),n}constructor(e,n=pm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:ve(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new he(null)}}set(e,n){if(q(e))return new he(n,this.children);{const s=z(e),r=(this.children.get(s)||new he(null)).set(ae(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new he(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),ve(n,i),s):new he(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new he(null))}}function es(t,e,n){if(q(e))return new et(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function hc(t,e,n){let s=t;return Be(n,(i,r)=>{s=es(s,ve(e,i),r)}),s}function fc(t,e){if(q(e))return et.empty();{const n=t.writeTree_.setTree(e,new he(null));return new et(n)}}function Vr(t,e){return on(t,e)!=null}function on(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function dc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function Dt(t,e){if(q(e))return t;{const n=on(t,e);return n!=null?new et(new he(n)):new et(t.writeTree_.subtree(e))}}function jr(t){return t.writeTree_.isEmpty()}function wn(t,e){return ju(Z(),t.writeTree_,e)}function ju(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ju(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e){return Ku(e,t)}function _m(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=es(t.visibleWrites,e,n)),t.lastWriteId=s}function gm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function mm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xm(l,s.path)?i=!1:Je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return ym(t),!0;if(s.snap)t.visibleWrites=fc(t.visibleWrites,s.path);else{const l=s.children;Be(l,c=>{t.visibleWrites=fc(t.visibleWrites,ve(s.path,c))})}return!0}else return!1}function xm(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(ve(t.path,n),e))return!0;return!1}function ym(t){t.visibleWrites=$u(t.allWrites,vm,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function vm(t){return t.visible}function $u(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Je(n,o)?(l=ke(n,o),s=es(s,l,r.snap)):Je(o,n)&&(l=ke(o,n),s=es(s,Z(),r.snap.getChild(l)));else if(r.children){if(Je(n,o))l=ke(n,o),s=hc(s,l,r.children);else if(Je(o,n))if(l=ke(o,n),q(l))s=hc(s,Z(),r.children);else{const c=Cn(r.children,z(l));if(c){const a=c.getChild(ae(l));s=es(s,Z(),a)}}}else throw Tn("WriteRecord should have .snap or .children")}}return s}function Gu(t,e,n,s,i){if(!s&&!i){const r=on(t.visibleWrites,e);if(r!=null)return r;{const o=Dt(t.visibleWrites,e);if(jr(o))return n;if(n==null&&!Vr(o,Z()))return null;{const l=n||W.EMPTY_NODE;return wn(o,l)}}}else{const r=Dt(t.visibleWrites,e);if(!i&&jr(r))return n;if(!i&&n==null&&!Vr(r,Z()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Je(a.path,e)||Je(e,a.path))},l=$u(t.allWrites,o,e),c=n||W.EMPTY_NODE;return wn(l,c)}}}function bm(t,e,n){let s=W.EMPTY_NODE;const i=on(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Dt(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const c=wn(Dt(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),dc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Dt(t.visibleWrites,e);return dc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Cm(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(Vr(t.visibleWrites,r))return null;{const o=Dt(t.visibleWrites,r);return jr(o)?i.getChild(n):wn(o,i.getChild(n))}}function Em(t,e,n,s){const i=ve(e,n),r=on(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Dt(t.visibleWrites,i);return wn(o,s.getNode().getImmediateChild(n))}else return null}function Im(t,e){return on(t.visibleWrites,e)}function wm(t,e,n,s,i,r,o){let l;const c=Dt(t.visibleWrites,e),a=on(c,Z());if(a!=null)l=a;else if(n!=null)l=wn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&u.length<i;)p(x,s)!==0&&u.push(x),x=g.getNext();return u}else return[]}function Sm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function ci(t,e,n,s){return Gu(t.writeTree,t.treePath,e,n,s)}function Po(t,e){return bm(t.writeTree,t.treePath,e)}function pc(t,e,n,s){return Cm(t.writeTree,t.treePath,e,n,s)}function ai(t,e){return Im(t.writeTree,ve(t.treePath,e))}function Tm(t,e,n,s,i,r){return wm(t.writeTree,t.treePath,e,n,s,i,r)}function Oo(t,e,n){return Em(t.writeTree,t.treePath,e,n)}function zu(t,e){return Ku(ve(t.treePath,e),t.writeTree)}function Ku(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,In(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fs(s,e.snapshotNode,i.oldSnap));else throw Tn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const qu=new Rm;class Do{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Oo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=Tm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){return{filter:t}}function Pm(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Om(t,e,n,s,i){const r=new Nm;let o,l;if(n.type===Xe.OVERWRITE){const a=n;a.source.fromUser?o=$r(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=ui(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const a=n;a.source.fromUser?o=km(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Gr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const a=n;a.revert?o=Lm(t,e,a.path,s,i,r):o=Mm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Fm(t,e,n.path,s,r);else throw Tn("Unknown operation type: "+n.type);const c=r.getChanges();return Dm(e,o,c),{viewCache:o,changes:c}}function Dm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=li(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Bu(li(e)))}}function Yu(t,e,n,s,i,r){const o=e.eventCache;if(ai(s,n)!=null)return e;{let l,c;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=sn(e),u=a instanceof W?a:W.EMPTY_NODE,p=Po(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=ci(s,sn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=z(n);if(a===".priority"){T(Mt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const p=pc(s,n,u,c);p!=null?l=t.filter.updatePriority(u,p):l=o.getNode()}else{const u=ae(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=pc(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(u,g):p=o.getNode().getImmediateChild(a)}else p=Oo(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,u,i,r):l=o.getNode()}}return Zn(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function ui(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),x,null)}else{const x=z(n);if(!c.isCompleteForPath(n)&&Mt(n)>1)return e;const I=ae(n),$=c.getNode().getImmediateChild(x).updateChild(I,s);x===".priority"?a=u.updatePriority(c.getNode(),$):a=u.updateChild(c.getNode(),x,$,I,qu,null)}const p=Vu(e,a,c.isFullyInitialized()||q(n),u.filtersNodes()),g=new Do(i,p,r);return Yu(t,p,n,i,g,l)}function $r(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Do(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Zn(e,a,!0,t.filter.filtersNodes());else{const p=z(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Zn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ae(n),x=l.getNode().getImmediateChild(p);let I;if(q(g))I=s;else{const D=u.getCompleteChild(p);D!=null?Au(g)===".priority"&&D.getChild(Ou(g)).isEmpty()?I=D:I=D.updateChild(g,s):I=W.EMPTY_NODE}if(x.equals(I))c=e;else{const D=t.filter.updateChild(l.getNode(),p,I,g,u,o);c=Zn(e,D,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function _c(t,e){return t.eventCache.isCompleteForChild(e)}function km(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=ve(n,c);_c(e,z(u))&&(l=$r(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=ve(n,c);_c(e,z(u))||(l=$r(t,l,u,a,i,r,o))}),l}function gc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Gr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new he(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(u.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),I=gc(t,x,g);c=ui(t,c,new re(p),I,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!u.hasChild(p)&&!x){const I=e.serverCache.getNode().getImmediateChild(p),D=gc(t,I,g);c=ui(t,c,new re(p),D,i,r,o,l)}}),c}function Mm(t,e,n,s,i,r,o){if(ai(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ui(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new he(null);return c.getNode().forEachChild(vn,(u,p)=>{a=a.set(new re(u),p)}),Gr(t,e,n,a,i,r,l,o)}else return e}else{let a=new he(null);return s.foreach((u,p)=>{const g=ve(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Gr(t,e,n,a,i,r,l,o)}}function Fm(t,e,n,s,i){const r=e.serverCache,o=Vu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Yu(t,o,n,s,qu,i)}function Lm(t,e,n,s,i,r){let o;if(ai(s,n)!=null)return e;{const l=new Do(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ci(s,sn(e));else{const p=e.serverCache.getNode();T(p instanceof W,"serverChildren would be complete if leaf node"),u=Po(s,p)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=z(n);let p=Oo(s,u,e.serverCache);p==null&&e.serverCache.isCompleteForChild(u)&&(p=c.getImmediateChild(u)),p!=null?a=t.filter.updateChild(c,u,p,ae(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,W.EMPTY_NODE,ae(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ci(s,sn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ai(s,Z())!=null,Zn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new To(s.getIndex()),r=sm(s);this.processor_=Am(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(W.EMPTY_NODE,l.getNode(),null),u=new Ft(c,o.isFullyInitialized(),i.filtersNodes()),p=new Ft(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Hi(p,u),this.eventGenerator_=new um(this.query_)}get query(){return this.query_}}function Bm(t){return t.viewCache_.serverCache.getNode()}function Hm(t){return li(t.viewCache_)}function Um(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function mc(t){return t.eventRegistrations_.length===0}function Vm(t,e){t.eventRegistrations_.push(e)}function xc(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function yc(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(T(sn(t.viewCache_),"We should always have a full cache before handling merges"),T(li(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Om(t.processor_,i,e,n,s);return Pm(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Qu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function jm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(In(r,o))}),n.isFullyInitialized()&&s.push(Bu(n.getNode())),Qu(t,s,n.getNode(),e)}function Qu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return hm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class Ju{constructor(){this.views=new Map}}function $m(t){T(!hi,"__referenceConstructor has already been defined"),hi=t}function Gm(){return T(hi,"Reference.ts has not been loaded"),hi}function zm(t){return t.views.size===0}function ko(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),yc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(yc(o,e,n,s));return r}}function Xu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ci(n,i?s:null),c=!1;l?c=!0:s instanceof W?(l=Po(n,s),c=!1):(l=W.EMPTY_NODE,c=!1);const a=Hi(new Ft(l,c,!1),new Ft(s,i,!1));return new Wm(e,a)}return o}function Km(t,e,n,s,i,r){const o=Xu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Vm(o,n),jm(o,n)}function qm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Lt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(xc(a,n,s)),mc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(xc(c,n,s)),mc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Lt(t)&&r.push(new(Gm())(e._repo,e._path)),{removed:r,events:o}}function Zu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function kt(t,e){let n=null;for(const s of t.views.values())n=n||Um(s,e);return n}function eh(t,e){if(e._queryParams.loadsAllData())return Vi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function th(t,e){return eh(t,e)!=null}function Lt(t){return Vi(t)!=null}function Vi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;function Ym(t){T(!fi,"__referenceConstructor has already been defined"),fi=t}function Qm(){return T(fi,"Reference.ts has not been loaded"),fi}let Jm=1;class vc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=Sm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nh(t,e,n,s,i){return _m(t.pendingWriteTree_,e,n,s,i),i?Ss(t,new nn(Uu(),e,n)):[]}function Qt(t,e,n=!1){const s=gm(t.pendingWriteTree_,e);if(mm(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(Z(),!0):Be(s.children,o=>{r=r.set(new re(o),!0)}),Ss(t,new oi(s.path,r,n))}else return[]}function ws(t,e,n){return Ss(t,new nn(Ro(),e,n))}function Xm(t,e,n){const s=he.fromObject(n);return Ss(t,new _s(Ro(),e,s))}function Zm(t,e){return Ss(t,new ps(Ro(),e))}function e0(t,e,n){const s=Fo(t,n);if(s){const i=Lo(s),r=i.path,o=i.queryId,l=ke(r,e),c=new ps(Ao(o),l);return Wo(t,r,c)}else return[]}function di(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||th(o,e))){const c=qm(o,e,n,s);zm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,x)=>Lt(x));if(u&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=s0(g);for(let I=0;I<x.length;++I){const D=x[I],$=D.query,j=oh(t,D);t.listenProvider_.startListening(ts($),gs(t,$),j.hashFn,j.onComplete)}}}!p&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(ts(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(ji(g));t.listenProvider_.stopListening(ts(g),x)}))}i0(t,a)}return l}function sh(t,e,n,s){const i=Fo(t,s);if(i!=null){const r=Lo(i),o=r.path,l=r.queryId,c=ke(o,e),a=new nn(Ao(l),c,n);return Wo(t,o,a)}else return[]}function t0(t,e,n,s){const i=Fo(t,s);if(i){const r=Lo(i),o=r.path,l=r.queryId,c=ke(o,e),a=he.fromObject(n),u=new _s(Ao(l),c,a);return Wo(t,o,u)}else return[]}function zr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const I=ke(g,i);r=r||kt(x,I),o=o||Lt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Lt(l),r=r||kt(l,Z())):(l=new Ju,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,I)=>{const D=kt(I,Z());D&&(r=r.updateImmediateChild(x,D))}));const a=th(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=ji(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=r0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const u=Ui(t.pendingWriteTree_,i);let p=Km(l,e,n,u,r,c);if(!a&&!o&&!s){const g=eh(l,e);p=p.concat(o0(t,e,g))}return p}function Mo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=ke(o,e),a=kt(l,c);if(a)return a});return Gu(i,e,r,n,!0)}function n0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const p=ke(a,n);s=s||kt(u,p)});let i=t.syncPointTree_.get(n);i?s=s||kt(i,Z()):(i=new Ju,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ft(s,!0,!1):null,l=Ui(t.pendingWriteTree_,e._path),c=Xu(i,e,l,r?o.getNode():W.EMPTY_NODE,r);return Hm(c)}function Ss(t,e){return ih(e,t.syncPointTree_,null,Ui(t.pendingWriteTree_,Z()))}function ih(t,e,n,s){if(q(t.path))return rh(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=kt(i,Z()));let r=[];const o=z(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=zu(s,o);r=r.concat(ih(l,c,a,u))}return i&&(r=r.concat(ko(i,t,s,n))),r}}function rh(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=kt(i,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=zu(s,o),u=t.operationForChild(o);u&&(r=r.concat(rh(u,l,c,a)))}),i&&(r=r.concat(ko(i,t,s,n))),r}function oh(t,e){const n=e.query,s=gs(t,n);return{hashFn:()=>(Bm(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?e0(t,n._path,s):Zm(t,n._path);{const r=ng(i,n);return di(t,n,null,r)}}}}function gs(t,e){const n=ji(e);return t.queryToTagMap.get(n)}function ji(t){return t._path.toString()+"$"+t._queryIdentifier}function Fo(t,e){return t.tagToQueryMap.get(e)}function Lo(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Wo(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Ui(t.pendingWriteTree_,e);return ko(s,n,i,null)}function s0(t){return t.fold((e,n,s)=>{if(n&&Lt(n))return[Vi(n)];{let i=[];return n&&(i=Zu(n)),Be(s,(r,o)=>{i=i.concat(o)}),i}})}function ts(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Qm())(t._repo,t._path):t}function i0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ji(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function r0(){return Jm++}function o0(t,e,n){const s=e._path,i=gs(t,e),r=oh(t,n),o=t.listenProvider_.startListening(ts(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!Lt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,p)=>{if(!q(a)&&u&&Lt(u))return[Vi(u).query];{let g=[];return u&&(g=g.concat(Zu(u).map(x=>x.query))),Be(p,(x,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(ts(u),gs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bo(n)}node(){return this.node_}}class Ho{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Ho(this.syncTree_,n)}node(){return Mo(this.syncTree_,this.path_)}}const l0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bc=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return c0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return a0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},c0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},a0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},u0=function(t,e,n,s){return Uo(e,new Ho(n,t),s)},lh=function(t,e,n){return Uo(t,new Bo(e),n)};function Uo(t,e,n){const s=t.getPriority().val(),i=bc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=bc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new be(l,Ee(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(_e,(l,c)=>{const a=Uo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function jo(t,e){let n=e instanceof re?e:new re(e),s=t,i=z(n);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new Vo(i,s,r),n=ae(n),i=z(n)}return s}function Pn(t){return t.node.value}function ch(t,e){t.node.value=e,Kr(t)}function ah(t){return t.node.childCount>0}function h0(t){return Pn(t)===void 0&&!ah(t)}function $i(t,e){Be(t.node.children,(n,s)=>{e(new Vo(n,t,s))})}function uh(t,e,n,s){n&&e(t),$i(t,i=>{uh(i,e,!0)})}function f0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ts(t){return new re(t.parent===null?t.name:Ts(t.parent)+"/"+t.name)}function Kr(t){t.parent!==null&&d0(t.parent,t.name,t)}function d0(t,e,n){const s=h0(n),i=It(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Kr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Kr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=/[\[\].#$\/\u0000-\u001F\u007F]/,_0=/[\[\].#$\u0000-\u001F\u007F]/,mr=10*1024*1024,hh=function(t){return typeof t=="string"&&t.length!==0&&!p0.test(t)},fh=function(t){return typeof t=="string"&&t.length!==0&&!_0.test(t)},g0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fh(t)},m0=function(t,e,n,s){$o(xo(t,"value"),e,n)},$o=function(t,e,n){const s=n instanceof re?new Mg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+qt(s)+" with contents = "+e.toString());if(au(e))throw new Error(t+"contains "+e.toString()+" "+qt(s));if(typeof e=="string"&&e.length>mr/3&&Wi(e)>mr)throw new Error(t+"contains a string greater than "+mr+" utf8 bytes "+qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!hh(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fg(s,o),$o(t,l,s),Lg(s)}),i&&r)throw new Error(t+' contains ".value" child '+qt(s)+" in addition to actual children.")}},dh=function(t,e,n,s){if(!fh(n))throw new Error(xo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dh(t,e,n)},ph=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},y0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!g0(n))throw new Error(xo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Go(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Io(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function _h(t,e,n){Go(t,n),gh(t,s=>Io(s,e))}function ht(t,e,n){Go(t,n),gh(t,s=>Je(s,e)||Je(e,s))}function gh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(b0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function b0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Jn&&Re("event: "+n.toString()),An(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="repo_interrupt",E0=25;class I0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ri(),this.transactionQueueTree_=new Vo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function w0(t,e,n){if(t.stats_=Co(t.repoInfo_),t.forceRestClient_||og())t.server_=new ii(t.repoInfo_,(s,i,r,o)=>{Cc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ec(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vt(t.repoInfo_,e,(s,i,r,o)=>{Cc(t,s,i,r,o)},s=>{Ec(t,s)},s=>{T0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=hg(t.repoInfo_,()=>new am(t.stats_,t.server_)),t.infoData_=new im,t.infoSyncTree_=new vc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=ws(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ko(t,"connected",!1),t.serverSyncTree_=new vc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ht(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function S0(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zo(t){return l0({timestamp:S0(t)})}function Cc(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Js(n,a=>Ee(a));o=t0(t.serverSyncTree_,r,c,i)}else{const c=Ee(n);o=sh(t.serverSyncTree_,r,c,i)}else if(s){const c=Js(n,a=>Ee(a));o=Xm(t.serverSyncTree_,r,c)}else{const c=Ee(n);o=ws(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=zi(t,r)),ht(t.eventQueue_,l,o)}function Ec(t,e){Ko(t,"connected",e),e===!1&&A0(t)}function T0(t,e){Be(e,(n,s)=>{Ko(t,n,s)})}function Ko(t,e,n){const s=new re("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(s,i);const r=ws(t.infoSyncTree_,s,i);ht(t.eventQueue_,s,r)}function mh(t){return t.nextWriteId_++}function N0(t,e,n){const s=n0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ee(i).withIndex(e._queryParams.getIndex());zr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ws(t.serverSyncTree_,e._path,r);else{const l=gs(t.serverSyncTree_,e);o=sh(t.serverSyncTree_,e._path,r,l)}return ht(t.eventQueue_,e._path,o),di(t.serverSyncTree_,e,n,null,!0),r},i=>(Gi(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function R0(t,e,n,s,i){Gi(t,"set",{path:e.toString(),value:n,priority:s});const r=zo(t),o=Ee(n,s),l=Mo(t.serverSyncTree_,e),c=lh(o,l,r),a=mh(t),u=nh(t.serverSyncTree_,e,c,a,!0);Go(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const I=g==="ok";I||We("set at "+e+" failed: "+g);const D=Qt(t.serverSyncTree_,a,!I);ht(t.eventQueue_,e,D),D0(t,i,g,x)});const p=Ch(t,e);zi(t,p),ht(t.eventQueue_,p,[])}function A0(t){Gi(t,"onDisconnectEvents");const e=zo(t),n=ri();Ur(t.onDisconnect_,Z(),(i,r)=>{const o=u0(i,r,t.serverSyncTree_,e);Hu(n,i,o)});let s=[];Ur(n,Z(),(i,r)=>{s=s.concat(ws(t.serverSyncTree_,i,r));const o=Ch(t,i);zi(t,o)}),t.onDisconnect_=ri(),ht(t.eventQueue_,Z(),s)}function P0(t,e,n){let s;z(e._path)===".info"?s=zr(t.infoSyncTree_,e,n):s=zr(t.serverSyncTree_,e,n),_h(t.eventQueue_,e._path,s)}function Ic(t,e,n){let s;z(e._path)===".info"?s=di(t.infoSyncTree_,e,n):s=di(t.serverSyncTree_,e,n),_h(t.eventQueue_,e._path,s)}function O0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(C0)}function Gi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function D0(t,e,n,s){e&&An(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function xh(t,e,n){return Mo(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function qo(t,e=t.transactionQueueTree_){if(e||Ki(t,e),Pn(e)){const n=vh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&k0(t,Ts(e),n)}else ah(e)&&$i(e,n=>{qo(t,n)})}function k0(t,e,n){const s=n.map(a=>a.currentWriteId),i=xh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const p=ke(e,u.path);r=r.updateChild(p,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Gi(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(Qt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Ki(t,jo(t.transactionQueueTree_,e)),qo(t,t.transactionQueueTree_),ht(t.eventQueue_,e,u);for(let g=0;g<p.length;g++)An(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{We("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}zi(t,e)}},o)}function zi(t,e){const n=yh(t,e),s=Ts(n),i=vh(t,n);return M0(t,i,s),s}function M0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=ke(n,c.path);let u=!1,p;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,p=c.abortReason,i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=E0)u=!0,p="maxretry",i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=xh(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){$o("transaction failed: Data returned ",x,c.path);let I=Ee(x);typeof x=="object"&&x!=null&&It(x,".priority")||(I=I.updatePriority(g.getPriority()));const $=c.currentWriteId,j=zo(t),Q=lh(I,g,j);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=Q,c.currentWriteId=mh(t),o.splice(o.indexOf($),1),i=i.concat(nh(t.serverSyncTree_,c.path,Q,c.currentWriteId,c.applyLocally)),i=i.concat(Qt(t.serverSyncTree_,$,!0))}else u=!0,p="nodata",i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Ki(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)An(s[l]);qo(t,t.transactionQueueTree_)}function yh(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Pn(s)===void 0;)s=jo(s,n),e=ae(e),n=z(e);return s}function vh(t,e){const n=[];return bh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bh(t,e,n){const s=Pn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);$i(e,i=>{bh(t,i,n)})}function Ki(t,e){const n=Pn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ch(e,n.length>0?n:void 0)}$i(e,s=>{Ki(t,s)})}function Ch(t,e){const n=Ts(yh(t,e)),s=jo(t.transactionQueueTree_,e);return f0(s,i=>{xr(t,i)}),xr(t,s),uh(s,i=>{xr(t,i)}),n}function xr(t,e){const n=Pn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ch(e,void 0):n.length=r+1,ht(t.eventQueue_,Ts(e),i);for(let o=0;o<s.length;o++)An(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function L0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const wc=function(t,e){const n=W0(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||J_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},W0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(u,p)),u<p&&(i=F0(t.substring(u,p)));const g=L0(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class H0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Yo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Au(this._path)}get ref(){return new wt(this._repo,this._path)}get _queryIdentifier(){const e=ac(this._queryParams),n=vo(e);return n==="{}"?"default":n}get _queryObject(){return ac(this._queryParams)}isEqual(e){if(e=Nn(e),!(e instanceof Yo))return!1;const n=this._repo===e._repo,s=Io(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kg(this._path)}}class wt extends Yo{constructor(e,n){super(e,n,new No,!1)}get parent(){const e=Ou(this._path);return e===null?null:new wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=qr(this.ref,e);return new ms(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,qr(this.ref,s),_e)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ms(t,e){return t=Nn(t),t._checkNotDeleted("ref"),e!==void 0?qr(t._root,e):t._root}function qr(t,e){return t=Nn(t),z(t._path)===null?x0("child","path",e):dh("child","path",e),new wt(t._repo,ve(t._path,e))}function U0(t){return ph("remove",t._path),Ih(t,null)}function Ih(t,e){t=Nn(t),ph("set",t._path),m0("set",e,t._path);const n=new Li;return R0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function V0(t){t=Nn(t);const e=new Eh(()=>{}),n=new qi(e);return N0(t._repo,t,n).then(s=>new ms(s,new wt(t._repo,t._path),t._queryParams.getIndex()))}class qi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new B0("value",this,new ms(e.snapshotNode,new wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new H0(this,e,n):null}matches(e){return e instanceof qi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function j0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,p)=>{Ic(t._repo,t,l),c(u,p)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Eh(n,r||void 0),l=new qi(o);return P0(t._repo,t,l),()=>Ic(t._repo,t,l)}function $0(t,e,n,s){return j0(t,"value",e,n,s)}$m(wt);Ym(wt);/**
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
 */const G0="FIREBASE_DATABASE_EMULATOR_HOST",Yr={};let z0=!1;function K0(t,e,n,s){t.repoInfo_=new bu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function q0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wc(r,i),l=o.repoInfo,c;typeof process<"u"&&Gl&&(c=Gl[G0]),c?(r=`http://${c}?ns=${l.namespace}`,o=wc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new cg(t.name,t.options,e);y0("Invalid Firebase Database URL",o),q(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Q0(l,t,a,new lg(t,n));return new J0(u,t)}function Y0(t,e){const n=Yr[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),O0(t),delete n[t.key]}function Q0(t,e,n,s){let i=Yr[e.name];i||(i={},Yr[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new I0(t,z0,n,s),i[t.toURLString()]=r,r}class J0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(w0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Y0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function X0(t=O_(),e){const n=T_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=gp("database");s&&Z0(n,...s)}return n}function Z0(t,e,n,s={}){t=Nn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Xs(s,r.repoInfo_.emulatorOptions))return;Ct("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Hs(Hs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:mp(s.mockUserToken,t.app.options.projectId);o=new Hs(l)}K0(r,i,s,o)}/**
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
 */function ex(t){G_(P_),ei(new cs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return q0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xn(zl,Kl,t),xn(zl,Kl,"esm2017")}vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ex();const Gt=_i;(function(t,e){const n=_i,s=t();for(;;)try{if(parseInt(n(164))/1*(parseInt(n(156))/2)+parseInt(n(155))/3+parseInt(n(172))/4+-parseInt(n(165))/5*(-parseInt(n(168))/6)+-parseInt(n(163))/7*(-parseInt(n(169))/8)+-parseInt(n(162))/9*(-parseInt(n(159))/10)+parseInt(n(167))/11*(-parseInt(n(157))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(pi,714653);function pi(){const t=["1530zsaGQx","iamwait","iamwait.firebaseapp.com","44892Zqwgst","1897nWvExY","295931fqLpDL","15skuksG","720775593565","22605bBjsvS","609186KnJNvU","9224KWXZey","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","G-3RRDNZ9ME5","1673236QFJjyy","iamwait.firebasestorage.app","2080965MRAfsW","8WNHgna","17292wiNoUt","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app"];return pi=function(){return t},pi()}function _i(t,e){const n=pi();return _i=function(s,i){return s=s-155,n[s]},_i(t,e)}const tx={apiKey:Gt(170),authDomain:Gt(161),databaseURL:Gt(158),projectId:Gt(160),storageBucket:Gt(173),messagingSenderId:Gt(166),appId:"1:720775593565:web:1a263bf6a87ecfea3817b4",measurementId:Gt(171)},nx=su(tx),Fs=X0(nx),pt=xs;(function(t,e){const n=xs,s=t();for(;;)try{if(-parseInt(n(332))/1+parseInt(n(344))/2+parseInt(n(343))/3+parseInt(n(353))/4*(-parseInt(n(342))/5)+parseInt(n(335))/6*(-parseInt(n(337))/7)+parseInt(n(352))/8+-parseInt(n(355))/9*(-parseInt(n(349))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,757195);function gi(){const t=["fbStore2","stringify","spFNM","ZLuhc","val","AhxJL"," -  данные записаны","catch","BHQeg","736997vKMQmJ","cZZmM","Крестики нолики","12sqzuMQ","Морской бой","157913RDUAkQ","BzIet","Камень ножницы бумага","AJIZr",">>> Данные по ","49975tTmzPY","1502775NZelwJ","2470512EubQwW","lookField","########### ########## Данные ","VBuRl","error","2133290fKFXAs","then","Данные ","1648448MyrLPE","332NTGtTS","log","18kcHxMB"," : данные не найдены","color: darkgreen","Ошибка записи данных: ","cmqLL"];return gi=function(){return t},gi()}function xs(t,e){const n=gi();return xs=function(s,i){return s=s-322,n[s]},xs(t,e)}const Qo=rp(pt(323),{state:()=>({gameId:"",gameNames:{g1:pt(339),g2:pt(334),g3:pt(336)},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:0}),actions:{async getField(t){const e={NgGat:function(s,i){return s(i)},cZZmM:function(s,i){return s+i},cguab:function(s,i,r){return s(i,r)},xfXcc:function(s,i){return s(i)}},n=e.cguab(Ms,Fs,t);return e.xfXcc(V0,n).then(s=>{const i=xs;if(s.exists()){const r=s[i(327)]();return e.NgGat(Un,e[i(333)](i(341)+t+" = ",JSON[i(324)](r))),r}else Un(t+i(356))})},async setField(t,e){const n=pt,s={spFNM:function(r,o){return r(o)},cmqLL:function(r,o){return r+o},AJIZr:n(329),ZLuhc:n(358)},i=Ms(Fs,t);return Ih(i,e)[n(350)](()=>{const r=n;s[r(325)](Un,s[r(322)](t,s[r(340)]))})[n(330)](r=>{const o=n;console[o(348)](s[o(326)],r)})},async onValue(t){const e=pt,n={BzIet:function(i,r){return i(r)},VBuRl:function(i,r,o){return i(r,o)},AhxJL:function(i,r,o){return i(r,o)}},s=n[e(347)](Ms,Fs,t);n[e(328)]($0,s,i=>{const r=e;n[r(338)](Un,r(346)+t+" на прослушке"),this[r(345)]=i[r(327)]()})},async removeField(t){const e=pt,n={BHQeg:function(i,r){return i(r)},epxAF:function(i,r,o){return i(r,o)}};console[e(354)](t);const s=n.epxAF(Ms,Fs,t);n[e(331)](U0,s).then(()=>{const i=e;n[i(331)](Un,i(351)+t+" удалены!")})}}}),Un=t=>console[pt(354)]("%c "+t,pt(357));function mi(t,e){const n=xi();return mi=function(s,i){return s=s-128,n[s]},mi(t,e)}const Sc=mi;function xi(){const t=["wEbwF","605621kCWLTA","gameChanged"," Камень ножницы бумага ","QiXDl","JIKpl","div","dfIwC","3047448ebOnbx","Выберите игру","CgabX","118958MkLKfR","vLgsx","JAlTM","piqXj"," Начальная страница ","wguLw","ThGxW","log","PDKlJ","16NbPhyP","lGvto","647847UAslTf","1697135Cgxfmn"," Крестики нолики ","ListGames","gameId","JKEDL","wNSQa","bTUYc","4lyNngP","1627179UEQpZI","WUuNf","4851021thxqlE","jLPXd","button"];return xi=function(){return t},xi()}(function(t,e){const n=mi,s=t();for(;;)try{if(parseInt(n(159))/1+-parseInt(n(133))/2+parseInt(n(153))/3+-parseInt(n(152))/4*(-parseInt(n(145))/5)+-parseInt(n(130))/6+-parseInt(n(155))/7+-parseInt(n(142))/8*(-parseInt(n(144))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,371017);const sx=po({__name:Sc(147),emits:["gameChanged"],setup(t,{emit:e}){const n=Sc,s={Jnyyv:function(l,c){return l+c},DXDAU:function(l,c){return l(c)},wNSQa:n(160),CgabX:function(l){return l()},dfIwC:function(l,c,a,u){return l(c,a,u)},WUuNf:n(128),OyOPO:function(l,c){return l(c)},jLPXd:n(137),JAlTM:function(l,c,a,u,p){return l(c,a,u,p)},piqXj:n(131),JKEDL:function(l,c,a,u,p){return l(c,a,u,p)},lGvto:n(157),JIKpl:function(l,c,a,u,p){return l(c,a,u,p)},PDKlJ:function(l,c,a,u,p){return l(c,a,u,p)},bTUYc:function(l,c,a,u){return l(c,a,u)},vLgsx:n(146),wEbwF:function(l){return l()},QiXDl:function(l){return l()},wguLw:function(l,c,a,u,p){return l(c,a,u,p)},dCQhC:function(l,c){return l(c)},FaHiy:" Это бот для игр с соперником. ",ThGxW:function(l){return l()}},i=s[n(139)](Qo),r=e;function o(l){const c=n;console[c(140)](l),i[c(148)]=s.Jnyyv("g",l),s.DXDAU(r,s[c(150)])}return(l,c)=>{const a=n;return s[a(132)](de),s[a(129)](ge,s[a(154)],null,[c[3]||(c[3]=s.OyOPO(Ie,s[a(156)])),c[4]||(c[4]=s[a(135)](P,"h3",null,s[a(136)],-1)),c[5]||(c[5]=s[a(149)](P,"br",null,null,-1)),s[a(129)](P,s[a(143)],{onClick:c[0]||(c[0]=u=>o(1))},a(161)),c[6]||(c[6]=s[a(163)](P,"br",null,null,-1)),c[7]||(c[7]=s.CgabX(Ie)),c[8]||(c[8]=s[a(141)](P,"br",null,null,-1)),s[a(151)](P,"button",{onClick:c[1]||(c[1]=u=>o(2))},s[a(134)]),c[9]||(c[9]=s[a(135)](P,"br",null,null,-1)),c[10]||(c[10]=s[a(158)](Ie)),c[11]||(c[11]=s[a(163)](P,"br",null,null,-1)),s[a(151)](P,s[a(143)],{onClick:c[2]||(c[2]=u=>o(3))}," Морской бой "),c[12]||(c[12]=s[a(141)](P,"br",null,null,-1)),c[13]||(c[13]=s[a(135)](P,"br",null,null,-1)),c[14]||(c[14]=s[a(162)](Ie)),c[15]||(c[15]=s[a(138)](P,"br",null,null,-1)),c[16]||(c[16]=s.dCQhC(Ie,s.FaHiy))])}}}),Qr=yi;(function(t,e){const n=yi,s=t();for(;;)try{if(-parseInt(n(186))/1*(parseInt(n(183))/2)+parseInt(n(206))/3+parseInt(n(194))/4*(parseInt(n(198))/5)+parseInt(n(184))/6+-parseInt(n(205))/7*(parseInt(n(188))/8)+-parseInt(n(176))/9*(parseInt(n(203))/10)+-parseInt(n(191))/11*(-parseInt(n(182))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,220083);const ix={class:"menuBt"},rx={key:0,class:Qr(179)};function yi(t,e){const n=vi();return yi=function(s,i){return s=s-176,n[s]},yi(t,e)}function vi(){const t=["JuBQz","PKzsq","285392xXRUYp","KTqiW","button","HiTeP","5MWteZw","ltUwW","menuBt_bt","GWPFC","XteIv","40aIPcUK","qLOyT","7kPzBbV","109401YjpCok","445293sXOcji","pjEyZ","Удалить игру","panel","div","toExit","276CDFESu","159994wSuVaJ","2479632TAfZah","cyHOh","5TzUMrb","MdAYT","2966592LpDLde","value","ZOfgd","319341PdUTpd"];return vi=function(){return t},vi()}const ox=po({__name:"MenuButton",emits:[Qr(181)],setup(t,{emit:e}){const n=Qr,s={XteIv:function(l,c){return l(c)},PKzsq:function(l){return l()},GWPFC:function(l,c,a,u){return l(c,a,u)},MdAYT:function(l,c,a,u){return l(c,a,u)},ltUwW:n(180),YuuNB:function(l,c,a,u){return l(c,a,u)},JuBQz:n(196),IWWTE:n(200),ZOfgd:function(l){return l()},qLOyT:function(l,c,a,u){return l(c,a,u)},KTqiW:function(l,c,a,u){return l(c,a,u)},HiTeP:function(l){return l()},pjEyZ:function(l,c,a,u,p){return l(c,a,u,p)},cyHOh:function(l,c,a,u,p){return l(c,a,u,p)},YKLcw:"Инфо",JGZrI:function(l,c,a){return l(c,a)}},i=e,r=s[n(190)](_t);function o(l){const c=n;switch(l){case(l=1):s[c(202)](i,c(181));break}r[c(189)]=!1}return(l,c)=>{const a=n;return s[a(193)](de),s[a(201)](ge,a(180),ix,[s[a(187)](P,s[a(199)],null,[s.YuuNB(P,s[a(192)],{class:s.IWWTE,onClick:c[0]||(c[0]=u=>r[a(189)]=!r[a(189)])},"❁")]),r[a(189)]?(s.ZOfgd(de),s[a(204)](ge,a(180),rx,[s[a(195)](P,"a",{onClick:c[1]||(c[1]=u=>o(1))},a(178)),c[2]||(c[2]=s[a(197)](Ie)),c[3]||(c[3]=s[a(177)](P,"br",null,null,-1)),c[4]||(c[4]=s[a(185)](P,"a",null,s.YKLcw,-1))])):s.JGZrI(Ve,"",!0)])}}}),lx=$a(ox,[["__scopeId","data-v-ff2e1591"]]),Sn=xt;(function(t,e){const n=xt,s=t();for(;;)try{if(parseInt(n(311))/1+parseInt(n(229))/2*(-parseInt(n(306))/3)+parseInt(n(227))/4+-parseInt(n(223))/5*(parseInt(n(335))/6)+parseInt(n(304))/7*(-parseInt(n(340))/8)+-parseInt(n(276))/9*(-parseInt(n(249))/10)+-parseInt(n(232))/11*(-parseInt(n(354))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(bi,272666);function xt(t,e){const n=bi();return xt=function(s,i){return s=s-191,n[s]},xt(t,e)}const cx={key:0},ax={key:1},ux={key:2},hx={key:3},fx={key:0},dx=["onClick"],px={key:4},_x={key:0},gx=[Sn(286)],mx={key:1,class:"red-notice"},xx={key:5},yx={key:6},vx={key:7},bx={style:{color:Sn(328),"font-size":Sn(272)}},Cx={key:8},Ex={style:{"font-size":Sn(266),background:Sn(316)}};function bi(){const t=["gameId"," с игроком ","hpzIg","Ewywi","stage","mvWaa","HcmBl","uJTiR","3|1|7|4|0|5|6|2","nfOMv","FxSOZ","KXGlI","AbwcZ","div","WwlaT","30px","pxRwV","SDHtf","Нет ответа, отменяю выбор","KxWwW","localhost","20px","accept","NJXPA","piNtX","738aGPwVM","setField","value","nigCe","ВСЕ НАСТРОЙКИ ИГРЫ","::::::: Связывание :::::::","TsMHT","YnpQG","rRKHP","jkjxn","onClick","CRSZU","qRCEG","gameLink","UzvIA","wAlmt","/play/","red-notice","IGAhA","Gobwg","includes","axrbH","Ppbru","then","BEEEn","Нахожусь в списке, жду кто выберет","iXMiG","iEnEy","2139298DYPWoJ","dqcGT","15LwUpzS","myId","KoMYu","myName","UVeWM","389433HEWpvG","keys","bWwia","id2","qDmxV","#ddd","OUfJu","xykls","pgfJp","EWzcx","XZWzq","host","BUsKk","Список желающих играть:","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","JnKqX","QYWAc","red","AJhwS","DvuFq","zptem","DZQCX","GGakg","lookField","4722VXXmin","NemsR","qRSov","ztKXn","spPlM","8OMFuGW","/game/","JHLNk","game","zRSXn"," Привет ","removeField","ylFDa","tvGqV",">>>> ANALIZ ","/look/","ujBAo","bYmJv","center","5256BVKsPW","Играем","jiKoP","lxqDj","owhHg","rGaxh","жду пока не откликнится ","game = ","length","name","XNrRv"," : ","rdFtd","res","lNhoO","VTltH"," Выбрал игрока ","RlPDG","WMiSV","Хорошо бы сообщить сопернику, что вы ушли из игры","ORuYe","EXaBN","uVwry","small","wtPEj","HTokU","bDBZw","log","ricUS","yzTZm","hRBBP","DzunP","FNwdd","* можете поменять ваш Никнейм","aaChl","bsJmL","jdELr","tZCBh","vLtlQ","kQKur","295QXcVwM","4px","RVSbH","name2","605292kjEKQy","HtsDQ","64038Pawfiv","EiLLq","MckTl","3487qwPyIj","now","TUWyH","iMjnZ","Jazxo","tgKOB","IdbXz","button","UqFQy","reload","getItem","cyOTP","RUPhb","red-bt","IxnBe","TijKP","gameNames","12830NXWlbU","bDwLp"];return bi=function(){return t},bi()}const Ix=po({__name:"BinderComp",props:{game:{}},setup(t){const e=Sn,n={OxFQq:"myNickName",WMiSV:function(d,h){return d+h},iEnEy:e(341),bsJmL:e(292),JHLNk:function(d,h){return d===h},nigCe:function(d,h){return d(h)},BEEEn:function(d){return d()},hRBBP:function(d,h){return d>h},owhHg:e(349),EiLLq:function(d){return d()},Opljn:"/look",qRSov:e(196),AQJja:function(d,h){return d==h},KxWwW:function(d,h){return d+h},RlPDG:e(350),WXMzb:function(d){return d()},DugvC:function(d,h){return d+h},hpzIg:e(202),FNwdd:function(d,h){return d>h},NJXPA:function(d,h){return d+h},AbwcZ:function(d,h){return d+h},UVeWM:function(d,h){return d+h},rRKHP:function(d,h){return d+h},rdFtd:function(d,h,f){return d(h,f)},wAlmt:function(d,h){return d+h},iXMiG:function(d,h){return d+h},uJTiR:e(289),YnpQG:function(d,h){return d+h},ylFDa:function(d,h){return d+h},DzunP:function(d,h,f,v,C,k){return d(h,f,v,C,k)},FxSOZ:e(239),QYWAc:"green-bt",vLtlQ:function(d,h){return d(h)},HTokU:function(d,h){return d(h)},axrbH:function(d,h,f,v,C){return d(h,f,v,C)},ujBAo:function(d,h,f,v){return d(h,f,v)},tZCBh:e(264),MckTl:function(d,h,f,v,C){return d(h,f,v,C)},eYYjo:e(281),MjSiI:function(d,h,f,v,C){return d(h,f,v,C)},wtPEj:function(d,h,f){return d(h,f)},GGakg:function(d,h){return d+h},dqcGT:function(d,h){return d(h)},qRCEG:function(d,h,f,v,C){return d(h,f,v,C)},IGAhA:function(d,h){return d(h)},bDwLp:function(d,h,f,v,C){return d(h,f,v,C)},nfOMv:function(d,h,f){return d(h,f)},lxqDj:function(d){return d()},Ppbru:e(345),DZQCX:function(d,h,f){return d(h,f)},IdbXz:"larger",uVwry:e(224),piNtX:"Сменить nickName",qDmxV:e(216),mvWaa:function(d){return d()},xykls:e(324),cyOTP:function(d,h,f,v,C){return d(h,f,v,C)},bYmJv:function(d,h,f,v,C){return d(h,f,v,C)},CRSZU:function(d,h,f,v,C){return d(h,f,v,C)},lAfmJ:function(d,h,f){return d(h,f)},tgKOB:function(d,h,f,v){return d(h,f,v)},ORuYe:e(245),GpVEP:" Зарегистрироваться в поиске ",lNhoO:function(d){return d()},WwlaT:e(206),yzTZm:e(325),Ewywi:function(d,h,f,v,C){return d(h,f,v,C)},DvuFq:function(d,h,f,v,C){return d(h,f,v,C)},spPlM:function(d,h,f,v){return d(h,f,v)},zptem:function(d,h,f,v,C){return d(h,f,v,C)},HcmBl:e(301),JnKqX:function(d){return d()},NemsR:function(d,h){return d(h)},tvGqV:function(d,h,f,v,C){return d(h,f,v,C)},pgfJp:function(d,h,f){return d(h,f)},pxRwV:function(d){return d()},HtsDQ:"* нельзя выбирать себя",TsMHT:function(d,h,f){return d(h,f)},ztKXn:function(d,h){return d===h},sSWHe:function(d){return d()},UqFQy:function(d,h,f,v){return d(h,f,v)},yhgBf:e(199),ricUS:function(d,h,f,v,C){return d(h,f,v,C)},zhYmD:function(d,h,f,v,C){return d(h,f,v,C)},bDBZw:function(d,h){return d(h)},EWzcx:e(269),KzBSs:function(d,h,f){return d(h,f)},fhzEU:function(d,h){return d===h},EXaBN:" Вас выбрал игрок: ",jdELr:function(d,h){return d(h)},jiKoP:function(d,h,f,v,C){return d(h,f,v,C)},BUsKk:"Согласиться",KXGlI:function(d,h,f){return d(h,f)},TijKP:function(d){return d()},AbCOC:e(252),SDHtf:function(d,h,f,v,C){return d(h,f,v,C)},jkjxn:function(d,h,f,v,C){return d(h,f,v,C)},STkHy:" Контекс игры:",RVSbH:function(d,h){return d+h},VTltH:function(d,h,f,v){return d(h,f,v)},PHgFS:function(d,h){return d(h)},Jazxo:function(d,h,f){return d(h,f)},AJhwS:function(d){return d()},XZWzq:function(d,h){return d(h)},IxnBe:function(d,h,f,v,C){return d(h,f,v,C)},aPGAd:function(d){return d()},ziSsx:function(d,h){return d(h)},bWwia:function(d,h){return d(h)},XCfqC:function(d){return d()},iMjnZ:function(d){return d()},YMFBb:function(d,h){return d(h)}},s=location[e(322)][e(296)](e(271)),i=n.aPGAd(Qo),r=n.ziSsx(_t,localStorage[e(242)](n.OxFQq)),o=n[e(313)](_t,[]),l=n.XCfqC(_t),c=n[e(235)](_t),a=n.YMFBb(_t,""),u=_t(""),p=function(){r.value&&localStorage.setItem(n.OxFQq,r.value)};function g(){const d=e,h={zRSXn:function(f,v){return n.WMiSV(f,v)},rGaxh:n.iEnEy};console[d(210)](d(361),t[d(343)]),i.getField(n.WMiSV(t[d(343)],n.bsJmL)+i.myId)[d(299)](f=>{const v=d;f&&(l[v(278)]={id:f.id,name:f[v(192)]},i[v(255)]=5,i.getField(h[v(344)](t.game,h[v(359)])+f.game)[v(299)](C=>{const k=v;a[k(278)]=C}))})}const x=function(d){const h=e,f={kQKur:function(C,k){return n[xt(342)](C,k)},TUWyH:function(C,k){return C(k)},OUfJu:function(C,k){return C===k},aaChl:function(C,k){return n[xt(279)](C,k)},GRWcY:function(C,k){return C>k},RUPhb:function(C){return n[xt(300)](C)},Gobwg:function(C,k){return n[xt(213)](C,k)}};if(console[h(210)](n[h(358)],d),o.value=[],i[h(255)]===0)return!1;i[h(255)]=1;let v=!1;d&&Object[h(312)](d).forEach(C=>{const k=h,U=k(259).split("|");let ue=0;for(;;){switch(U[ue++]){case"0":d[C][k(314)]==i[k(307)]&&(v=!0,i.stage=3);continue;case"1":f[k(222)](C,f[k(234)](String,i.myId))&&(l[k(278)]={id:d[C][k(314)],name:d[C][k(226)]});continue;case"2":C&&d[C]&&o[k(278)].push({id:C,name:d[C][k(192)]});continue;case"3":d[C][k(314)]&&f[k(222)](d[C][k(314)],i.myId)&&(l[k(278)]={id:C,name:d[C][k(192)]});continue;case"4":f[k(317)](C,f[k(217)](String,i.myId))&&C&&(v=!0,i[k(255)]!==3&&(i[k(255)]=2),d[C].id2&&(i[k(255)]=4));continue;case"5":f.GRWcY(i[k(255)],2)&&!v&&location.reload();continue;case"6":d[C][k(273)]&&f[k(244)](J);continue;case"7":if(f[k(295)](i[k(255)],3))return!1;continue}break}})};n.pgfJp(mn,()=>i.myId,d=>d&&setTimeout(g,500));function I(){const d=e;n.EiLLq(D),i[d(255)]=1}function D(){const d=e;i.onValue(i.gameId+n.Opljn)[d(299)](h=>x(h)),mn(()=>i[d(334)],h=>x(h))}function $(){const d=e;i[d(277)](n[d(201)](n[d(201)](i[d(251)],"/look/"),i.myId),{name:r[d(278)]||i[d(309)]})}function j(d){const h=e;if(n.AQJja(d.id,i[h(307)]))return c[h(278)]=!0,setTimeout(()=>c.value=!1,2e3),!1;i[h(277)](n[h(201)](n.KxWwW(i[h(251)],n[h(200)]),d.id),{name:d[h(192)],id2:i[h(307)],name2:r[h(278)]||i.myName})[h(299)](f=>{const v=h;console.log(n[v(337)],f),l.value={id:d.id,name:d[v(192)]},i[v(255)]=3})}function Q(d){const h=e;d&&l[h(278)]&&(n.WXMzb(alert),i[h(277)](n[h(270)](n.DugvC(i[h(251)],n[h(200)]),l[h(278)].id),{name:l.value[h(192)],id2:i[h(307)],name2:i[h(309)],accept:!0})),!d&&i[h(277)](n[h(270)](i[h(251)]+h(350),i.myId),{name:r[h(278)]||i.myName})[h(299)](()=>i[h(255)]=2)}function ee(){const d=e;i.setField(n.WMiSV(i[d(251)]+d(350),l[d(278)].id),{name:l[d(278)][d(192)]})[d(299)](()=>i[d(255)]=2)}function F(){var f;const d=e;u[d(278)]=n[d(253)];let h=n[d(279)](String,l[d(278)].id);n[d(215)](l[d(278)].id,i[d(307)])?h+="::"+i[d(307)]:h=n[d(270)](i[d(307)]+"::",h),i[d(346)](n[d(274)](i[d(251)]+n[d(218)],i[d(307)])),i[d(346)](n[d(263)](n[d(310)](i[d(251)],n[d(218)]),(f=l[d(278)])==null?void 0:f.id)),i.removeField(n[d(284)](i.gameId+n[d(303)],h)),n[d(195)](setTimeout,()=>location[d(241)](),3e3)}function J(){var v,C,k;const d=e;let h=Date[d(233)](),f=n[d(279)](String,l[d(278)].id);n[d(215)](l.value.id,i[d(307)])?f+="::"+i[d(307)]:f=i[d(307)]+"::"+f,console[d(210)](n[d(258)],f),i.setField(n[d(310)](n[d(283)](i[d(251)],n[d(218)]),i[d(307)]),{id:(v=l.value)==null?void 0:v.id,name:(C=l[d(278)])==null?void 0:C[d(192)],game:f,date:h}),i[d(277)](n.wAlmt(n.ylFDa(i[d(251)],d(292)),(k=l[d(278)])==null?void 0:k.id),{id:i[d(307)],name:i[d(309)],game:f,date:h}),i.setField(n[d(347)](i[d(251)],n[d(303)])+f,{game:d(280)}),n[d(195)](setTimeout,()=>{var ue;const U=d;i[U(346)](n[U(291)](i.gameId+"/look/",(ue=l[U(278)])==null?void 0:ue.id)),i[U(346)](n[U(302)](i.gameId,n[U(200)])+i[U(307)]),location[U(241)]()},2e3)}return(d,h)=>{var C,k;const f=e,v={KoMYu:function(U,ue,tt,ln,fe,G){return n[xt(214)](U,ue,tt,ln,fe,G)},XNrRv:n[f(261)],UzvIA:n[f(327)],FtQSA:function(U,ue){return n[f(208)](U,ue)}};return de(),n[f(297)](ge,ze,null,[Se(s)?(n[f(230)](de),n[f(351)](ge,n.tZCBh,cx,[h[7]||(h[7]=n[f(231)](P,"hr",null,null,-1)),h[8]||(h[8]=P("i",null,n.eYYjo,-1)),h[9]||(h[9]=n.MjSiI(P,"br",null,null,-1)),n[f(207)](Ie,n[f(333)](" "+Ge(n[f(305)](Se,i)[f(307)])+f(194),Ge(r.value))+" ",1),h[10]||(h[10]=n[f(288)](P,"br",null,null,-1)),Ie(n[f(291)](" stage:",n[f(294)](Ge,n.vLtlQ(Se,i)[f(255)]))+" ",1),h[11]||(h[11]=n[f(250)](P,"hr",null,null,-1))])):n[f(260)](Ve,"",!0),n[f(279)](Se,i)[f(255)]===5?(n[f(357)](de),n[f(351)](ge,n.tZCBh,ax,[n[f(207)](qe,lx,{onToExit:h[0]||(h[0]=U=>F())})])):n[f(195)](Ve,"",!0),n[f(208)](Se,i)[f(255)]===0?(n[f(230)](de),n.ujBAo(ge,f(264),ux,[qe(sx,{onGameChanged:I})])):n.wtPEj(Ve,"",!0),n.JHLNk(n[f(305)](Se,i)[f(255)],1)?(de(),ge(n.tZCBh,hx,[h[15]||(h[15]=P("p",null,n[f(298)],-1)),n[f(351)](P,"p",null,[n[f(332)](vf,n.MckTl(P,"input",{"onUpdate:modelValue":h[1]||(h[1]=U=>r[f(278)]=U),maxlength:"16",style:{"font-size":n[f(238)],padding:n[f(205)],"text-align":f(353)},onInput:h[2]||(h[2]=U=>p()),placeholder:n[f(275)]},null,544),[[Kd,r[f(278)]]])]),h[16]||(h[16]=n[f(231)](P,n[f(220)],{class:f(293)},n[f(315)],-1)),o[f(278)]&&n[f(213)](o[f(278)][f(191)],1)?(n[f(256)](de),ge(n[f(220)],fx,[h[12]||(h[12]=n[f(250)](P,"h3",null,n[f(318)],-1)),(n[f(221)](de,!0),n[f(243)](ge,ze,null,n[f(332)](ol,o[f(278)],U=>{const ue=f;return n.EiLLq(de),n.DzunP(ge,n[ue(261)],{class:n[ue(327)],key:U.id,onClick:tt=>j(U)},n.vLtlQ(Ge,U.name),9,dx)}),128)),h[13]||(h[13]=n[f(352)](P,"br",null,null,-1)),h[14]||(h[14]=n[f(287)](P,"br",null,null,-1))])):n.lAfmJ(Ve,"",!0),n.tgKOB(P,n.FxSOZ,{class:n[f(203)],onClick:h[3]||(h[3]=U=>$())},n.GpVEP),h[17]||(h[17]=P("br",null,null,-1)),h[18]||(h[18]=n[f(197)](Ie)),h[19]||(h[19]=n.qRCEG(P,"br",null,null,-1)),h[20]||(h[20]=n[f(288)](P,n[f(265)],null,n[f(212)],-1)),h[21]||(h[21]=n[f(254)](P,"br",null,null,-1)),h[22]||(h[22]=n[f(330)](P,"br",null,null,-1))])):n[f(260)](Ve,"",!0),n[f(342)](Se(i)[f(255)],2)?(de(),n[f(339)](ge,n[f(220)],px,[h[26]||(h[26]=n.zptem(P,"p",null,n[f(257)],-1)),o.value[f(191)]?(n[f(326)](de),n[f(237)](ge,f(264),_x,[h[23]||(h[23]=P("h3",null,n[f(318)],-1)),(n[f(336)](de,!0),n.MckTl(ge,ze,null,ol(o[f(278)],U=>{const ue=f;return de(),v[ue(308)](ge,v[ue(193)],{class:v[ue(290)],key:U.id,onClick:tt=>j(U)},v.FtQSA(Ge,U[ue(192)]),9,gx)}),128)),h[24]||(h[24]=n[f(243)](P,"br",null,null,-1)),h[25]||(h[25]=n[f(348)](P,"br",null,null,-1))])):n[f(319)](Ve,"",!0),c[f(278)]?(n[f(267)](de),ge(f(264),mx,n[f(228)])):Ve("",!0)])):n[f(282)](Ve,"",!0),n[f(338)](n.NemsR(Se,i)[f(255)],3)?(n.sSWHe(de),n.tgKOB(ge,n[f(220)],xx,[n[f(240)](P,"p",null,[h[27]||(h[27]=Ie(n.yhgBf)),h[28]||(h[28]=n[f(211)](P,"br",null,null,-1)),n[f(211)](P,"b",null,n.HTokU(Ge,(C=l[f(278)])==null?void 0:C[f(192)]),1),h[29]||(h[29]=Ie()),h[30]||(h[30]=n.zhYmD(P,"br",null,null,-1)),h[31]||(h[31]=n[f(209)](Ie,f(360)))]),P(n[f(261)],{onClick:h[4]||(h[4]=U=>ee())},n[f(320)])])):n.KzBSs(Ve,"",!0),n.fhzEU(n[f(336)](Se,i).stage,4)&&((k=l.value)!=null&&k.id)?(de(),n[f(351)](ge,n[f(220)],yx,[h[32]||(h[32]=Ie(n[f(204)])),h[33]||(h[33]=P("br",null,null,-1)),h[34]||(h[34]=n[f(287)](P,"br",null,null,-1)),P("b",null,n[f(219)](Ge,l[f(278)][f(192)]),1),h[35]||(h[35]=n[f(356)](P,"br",null,null,-1)),h[36]||(h[36]=n.bDwLp(P,"br",null,null,-1)),P(n.FxSOZ,{class:n.QYWAc,onClick:h[5]||(h[5]=U=>Q(!1))},"Отказаться"),n[f(237)](P,n[f(261)],{class:n[f(327)],onClick:h[6]||(h[6]=U=>Q(!0))},n[f(323)])])):n[f(262)](Ve,"",!0),n[f(219)](Se,i)[f(255)]===5&&l[f(278)]?(n[f(247)](de),n[f(240)](ge,n[f(220)],vx,[h[37]||(h[37]=n[f(356)](P,"h3",null,f(355),-1)),h[38]||(h[38]=Ie(n.AbCOC)),h[39]||(h[39]=P("br",null,null,-1)),n[f(268)](P,"b",null,n[f(305)](Ge,l[f(278)].name),1),h[40]||(h[40]=n[f(285)](P,"br",null,null,-1)),h[41]||(h[41]=n[f(287)](P,"br",null,null,-1)),h[42]||(h[42]=n[f(209)](Ie,n.STkHy)),h[43]||(h[43]=n[f(254)](P,"br",null,null,-1)),n.KzBSs(Ie,n[f(225)](" "+n[f(219)](Ge,a[f(278)])," "),1),h[44]||(h[44]=n.MjSiI(P,"br",null,null,-1)),h[45]||(h[45]=P("br",null,null,-1)),n[f(198)](P,n[f(220)],bx,[n.zhYmD(P,"b",null,n.PHgFS(Ge,u[f(278)]),1)])])):n[f(236)](Ve,"",!0),n.NemsR(Se,i)[f(255)]&&[1,2,3,4][f(296)](n[f(221)](Se,i).stage)?(n[f(329)](de),ge(f(264),Cx,[h[46]||(h[46]=n[f(348)](P,"hr",null,null,-1)),h[47]||(h[47]=n[f(331)](P,"br",null,null,-1)),P(n.tZCBh,Ex,n.XZWzq(Ge,n[f(321)](Se,i)[f(248)][n[f(294)](Se,i)[f(251)]]),1),h[48]||(h[48]=P("br",null,null,-1)),h[49]||(h[49]=P("br",null,null,-1))])):Ve("",!0),h[50]||(h[50]=n[f(246)](P,"br",null,null,-1)),h[51]||(h[51]=P("br",null,null,-1))],64)}}}),wx={class:"game"},Sx={__name:"RockPaperSScissors",setup(t){return(e,n)=>(de(),ge("div",wx,[n[0]||(n[0]=P("h1",null,"♕",-1)),n[1]||(n[1]=P("h2",null,null,-1)),P("div",null,[qe(Ix,{game:"g1"})])]))}},Tx=$a(Sx,[["__scopeId","data-v-7afa5ccc"]]),Nx={__name:"App",setup(t){const e=Qo();let n=of(Tx);return ha(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(s,i)=>(de(),Da(Mf(Se(n))))}},Rx=Ei;(function(t,e){const n=Ei,s=t();for(;;)try{if(-parseInt(n(293))/1+parseInt(n(301))/2*(-parseInt(n(303))/3)+-parseInt(n(294))/4*(-parseInt(n(295))/5)+parseInt(n(300))/6*(parseInt(n(298))/7)+-parseInt(n(296))/8+-parseInt(n(292))/9*(-parseInt(n(302))/10)+-parseInt(n(297))/11*(-parseInt(n(304))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ci,217876);function Ci(){const t=["26094jtEjyQ","310iRvZTJ","182950ClTZZg","8391ljyKuy","130272dOzupy","198nDQRzy","289061ITLwZu","548SvNKLt","11965zAdTsR","3152056ZkeiNF","242TJjfMA","588yqEYuG","mount"];return Ci=function(){return t},Ci()}function Ei(t,e){const n=Ci();return Ei=function(s,i){return s=s-292,n[s]},Ei(t,e)}const Ax=Zd(),Tc=Qd(Nx);Tc.use(Ax),Tc[Rx(299)]("#app");
