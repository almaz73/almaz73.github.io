function Us(t,e){const n=js();return Us=function(s,i){return s=s-171,n[s]},Us(t,e)}(function(t,e){const n=Us,s=t();for(;;)try{if(parseInt(n(181))/1*(parseInt(n(202))/2)+parseInt(n(180))/3+parseInt(n(178))/4+-parseInt(n(198))/5*(-parseInt(n(191))/6)+-parseInt(n(200))/7*(parseInt(n(197))/8)+parseInt(n(182))/9+-parseInt(n(195))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(js,284700),function(){const e=Us,n={zplJF:function(o,l){return o!==l},JFGlU:"LINK",cmcLA:e(193),oIfrr:function(o,l){return o(l)},WPKvN:function(o,l){return o===l},AAqpa:e(207),gOdtc:e(185),RnBdA:function(o,l){return o===l},WJMmd:e(206),YzpVV:"same-origin",XMWYn:function(o,l,c){return o(l,c)},ZEbEO:function(o,l){return o(l)}},s=document.createElement(e(173))[e(203)];if(s&&s[e(201)]&&s.supports(e(193)))return;for(const o of document[e(205)](e(188)))n[e(189)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n.zplJF(c[l(172)],l(186)))for(const a of c[l(192)])a.tagName===n[l(190)]&&a.rel===n.cmcLA&&n[l(196)](r,a)})[e(199)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(183)]&&(c.integrity=o[l(183)]),o[l(184)]&&(c[l(184)]=o.referrerPolicy),n[l(174)](o[l(176)],n[l(179)])?c[l(175)]=n.gOdtc:n[l(194)](o[l(176)],n[l(204)])?c[l(175)]="omit":c.credentials=n[l(177)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=i(o);n[l(187)](fetch,o[l(171)],c)}}();function js(){const t=["addedNodes","modulepreload","RnBdA","7804980qEnuGV","oIfrr","551696eCozyU","1596995UYbLQE","observe","42BGSfif","supports","2JPyILD","relList","WJMmd","querySelectorAll","anonymous","use-credentials","href","type","link","WPKvN","credentials","crossOrigin","YzpVV","2001620TUnZiy","AAqpa","697629rRUfCh","405527mfTFvQ","189864IWCwVE","integrity","referrerPolicy","include","childList","XMWYn",'link[rel="modulepreload"]',"ZEbEO","JFGlU","6ldoRmE"];return js=function(){return t},js()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},fn=[],ct=()=>{},Rh=()=>!1,wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),eo=t=>t.startsWith("onUpdate:"),Re=Object.assign,to=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nh=Object.prototype.hasOwnProperty,te=(t,e)=>Nh.call(t,e),W=Array.isArray,dn=t=>Si(t)==="[object Map]",Nc=t=>Si(t)==="[object Set]",V=t=>typeof t=="function",ge=t=>typeof t=="string",Mt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Ac=t=>(he(t)||V(t))&&V(t.then)&&V(t.catch),Pc=Object.prototype.toString,Si=t=>Pc.call(t),Ah=t=>Si(t).slice(8,-1),Dc=t=>Si(t)==="[object Object]",no=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ti=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ph=/-(\w)/g,Ye=Ti(t=>t.replace(Ph,(e,n)=>n?n.toUpperCase():"")),Dh=/\B([A-Z])/g,nn=Ti(t=>t.replace(Dh,"-$1").toLowerCase()),Ri=Ti(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ji=Ti(t=>t?`on${Ri(t)}`:""),St=(t,e)=>!Object.is(t,e),Bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Cr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let sl;const Ni=()=>sl||(sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function so(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Fh(s):so(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||he(t))return t}const Oh=/;(?![^(]*\))/g,kh=/:([^]+)/,Mh=/\/\*[^]*?\*\//g;function Fh(t){const e={};return t.replace(Mh,"").split(Oh).forEach(n=>{if(n){const s=n.split(kh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function io(t){let e="";if(ge(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=io(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bh=Zr(Lh);function kc(t){return!!t||t===""}const Mc=t=>!!(t&&t.__v_isRef===!0),qe=t=>ge(t)?t:t==null?"":W(t)||he(t)&&(t.toString===Pc||!V(t.toString))?Mc(t)?qe(t.value):JSON.stringify(t,Fc,2):String(t),Fc=(t,e)=>Mc(e)?Fc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Xi(s,r)+" =>"]=i,n),{})}:Nc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xi(n))}:Mt(e)?Xi(e):he(e)&&!W(e)&&!Dc(e)?String(e):e,Xi=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Lc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Bc(t){return new Lc(t)}function Hc(){return Pe}function Hh(t,e=!1){Pe&&Pe.cleanups.push(t)}let le;const Zi=new WeakSet;class Wc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zi.has(this)&&(Zi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,il(this),jc(this);const e=le,n=Ze;le=this,Ze=!0;try{return this.fn()}finally{$c(this),le=e,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)lo(e);this.deps=this.depsTail=void 0,il(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Er(this)&&this.run()}get dirty(){return Er(this)}}let Vc=0,jn,$n;function Uc(t,e=!1){if(t.flags|=8,e){t.next=$n,$n=t;return}t.next=jn,jn=t}function ro(){Vc++}function oo(){if(--Vc>0)return;if($n){let e=$n;for($n=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;jn;){let e=jn;for(jn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function jc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $c(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),lo(s),Wh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Er(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ns))return;t.globalVersion=ns;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Er(t)){t.flags&=-3;return}const n=le,s=Ze;le=t,Ze=!0;try{jc(t);const i=t.fn(t._value);(e.version===0||St(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{le=n,Ze=s,$c(t),t.flags&=-3}}function lo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)lo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ze=!0;const Kc=[];function Ft(){Kc.push(Ze),Ze=!1}function Lt(){const t=Kc.pop();Ze=t===void 0?!0:t}function il(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=le;le=void 0;try{e()}finally{le=n}}}let ns=0;class Vh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class co{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!le||!Ze||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new Vh(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,zc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(e){this.version++,ns++,this.notify(e)}notify(e){ro();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{oo()}}}function zc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)zc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $s=new WeakMap,Yt=Symbol(""),Ir=Symbol(""),ss=Symbol("");function we(t,e,n){if(Ze&&le){let s=$s.get(t);s||$s.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new co),i.map=s,i.key=n),i.track()}}function pt(t,e,n,s,i,r){const o=$s.get(t);if(!o){ns++;return}const l=c=>{c&&c.trigger()};if(ro(),e==="clear")o.forEach(l);else{const c=W(t),a=c&&no(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,g)=>{(g==="length"||g===ss||!Mt(g)&&g>=u)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ss)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Yt)),dn(t)&&l(o.get(Ir)));break;case"delete":c||(l(o.get(Yt)),dn(t)&&l(o.get(Ir)));break;case"set":dn(t)&&l(o.get(Yt));break}}oo()}function Uh(t,e){const n=$s.get(t);return n&&n.get(e)}function rn(t){const e=J(t);return e===t?e:(we(e,"iterate",ss),Ke(t)?e:e.map(Se))}function Ai(t){return we(t=J(t),"iterate",ss),t}const jh={__proto__:null,[Symbol.iterator](){return er(this,Symbol.iterator,Se)},concat(...t){return rn(this).concat(...t.map(e=>W(e)?rn(e):e))},entries(){return er(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return ht(this,"every",t,e,void 0,arguments)},filter(t,e){return ht(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return ht(this,"find",t,e,Se,arguments)},findIndex(t,e){return ht(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ht(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return ht(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ht(this,"forEach",t,e,void 0,arguments)},includes(...t){return tr(this,"includes",t)},indexOf(...t){return tr(this,"indexOf",t)},join(t){return rn(this).join(t)},lastIndexOf(...t){return tr(this,"lastIndexOf",t)},map(t,e){return ht(this,"map",t,e,void 0,arguments)},pop(){return kn(this,"pop")},push(...t){return kn(this,"push",t)},reduce(t,...e){return rl(this,"reduce",t,e)},reduceRight(t,...e){return rl(this,"reduceRight",t,e)},shift(){return kn(this,"shift")},some(t,e){return ht(this,"some",t,e,void 0,arguments)},splice(...t){return kn(this,"splice",t)},toReversed(){return rn(this).toReversed()},toSorted(t){return rn(this).toSorted(t)},toSpliced(...t){return rn(this).toSpliced(...t)},unshift(...t){return kn(this,"unshift",t)},values(){return er(this,"values",Se)}};function er(t,e,n){const s=Ai(t),i=s[e]();return s!==t&&!Ke(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const $h=Array.prototype;function ht(t,e,n,s,i,r){const o=Ai(t),l=o!==t&&!Ke(t),c=o[e];if(c!==$h[e]){const f=c.apply(t,r);return l?Se(f):f}let a=n;o!==t&&(l?a=function(f,g){return n.call(this,Se(f),g,t)}:n.length>2&&(a=function(f,g){return n.call(this,f,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function rl(t,e,n,s){const i=Ai(t);let r=n;return i!==t&&(Ke(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Se(l),c,t)}),i[e](r,...s)}function tr(t,e,n){const s=J(t);we(s,"iterate",ss);const i=s[e](...n);return(i===-1||i===!1)&&ho(n[0])?(n[0]=J(n[0]),s[e](...n)):i}function kn(t,e,n=[]){Ft(),ro();const s=J(t)[e].apply(t,n);return oo(),Lt(),s}const Gh=Zr("__proto__,__v_isRef,__isVue"),Yc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function Kh(t){Mt(t)||(t=String(t));const e=J(this);return we(e,"has",t),e.hasOwnProperty(t)}class qc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?nf:Zc:r?Xc:Jc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let c;if(o&&(c=jh[n]))return c;if(n==="hasOwnProperty")return Kh}const l=Reflect.get(e,n,_e(e)?e:s);return(Mt(n)?Yc.has(n):Gh(n))||(i||we(e,"get",n),r)?l:_e(l)?o&&no(n)?l:l.value:he(l)?i?ea(l):Pi(l):l}}class Qc extends qc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Qt(r);if(!Ke(s)&&!Qt(s)&&(r=J(r),s=J(s)),!W(e)&&_e(r)&&!_e(s))return c?!1:(r.value=s,!0)}const o=W(e)&&no(n)?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,_e(e)?e:i);return e===J(i)&&(o?St(s,r)&&pt(e,"set",n,s):pt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&pt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Mt(n)||!Yc.has(n))&&we(e,"has",n),s}ownKeys(e){return we(e,"iterate",W(e)?"length":Yt),Reflect.ownKeys(e)}}class zh extends qc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yh=new Qc,qh=new zh,Qh=new Qc(!0);const wr=t=>t,Ps=t=>Reflect.getPrototypeOf(t);function Jh(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?wr:e?Sr:Se;return!e&&we(r,"iterate",c?Ir:Yt),{next(){const{value:f,done:g}=a.next();return g?{value:f,done:g}:{value:l?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function Ds(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xh(t,e){const n={get(i){const r=this.__v_raw,o=J(r),l=J(i);t||(St(i,l)&&we(o,"get",i),we(o,"get",l));const{has:c}=Ps(o),a=e?wr:t?Sr:Se;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&we(J(i),"iterate",Yt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=J(r),l=J(i);return t||(St(i,l)&&we(o,"has",i),we(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=J(l),a=e?wr:t?Sr:Se;return!t&&we(c,"iterate",Yt),l.forEach((u,f)=>i.call(r,a(u),a(f),o))}};return Re(n,t?{add:Ds("add"),set:Ds("set"),delete:Ds("delete"),clear:Ds("clear")}:{add(i){!e&&!Ke(i)&&!Qt(i)&&(i=J(i));const r=J(this);return Ps(r).has.call(r,i)||(r.add(i),pt(r,"add",i,i)),this},set(i,r){!e&&!Ke(r)&&!Qt(r)&&(r=J(r));const o=J(this),{has:l,get:c}=Ps(o);let a=l.call(o,i);a||(i=J(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?St(r,u)&&pt(o,"set",i,r):pt(o,"add",i,r),this},delete(i){const r=J(this),{has:o,get:l}=Ps(r);let c=o.call(r,i);c||(i=J(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&pt(r,"delete",i,void 0),a},clear(){const i=J(this),r=i.size!==0,o=i.clear();return r&&pt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Jh(i,t,e)}),n}function ao(t,e){const n=Xh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const Zh={get:ao(!1,!1)},ef={get:ao(!1,!0)},tf={get:ao(!0,!1)};const Jc=new WeakMap,Xc=new WeakMap,Zc=new WeakMap,nf=new WeakMap;function sf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rf(t){return t.__v_skip||!Object.isExtensible(t)?0:sf(Ah(t))}function Pi(t){return Qt(t)?t:uo(t,!1,Yh,Zh,Jc)}function of(t){return uo(t,!1,Qh,ef,Xc)}function ea(t){return uo(t,!0,qh,tf,Zc)}function uo(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=rf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Tt(t){return Qt(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function Ke(t){return!!(t&&t.__v_isShallow)}function ho(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function fo(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Oc(t,"__v_skip",!0),t}const Se=t=>he(t)?Pi(t):t,Sr=t=>he(t)?ea(t):t;function _e(t){return t?t.__v_isRef===!0:!1}function dt(t){return ta(t,!1)}function lf(t){return ta(t,!0)}function ta(t,e){return _e(t)?t:new cf(t,e)}class cf{constructor(e,n){this.dep=new co,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ke(e)||Qt(e);e=s?e:J(e),St(e,n)&&(this._rawValue=e,this._value=s?e:Se(e),this.dep.trigger())}}function $e(t){return _e(t)?t.value:t}const af={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function na(t){return Tt(t)?t:new Proxy(t,af)}function uf(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=ff(t,n);return e}class hf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Uh(J(this._object),this._key)}}function ff(t,e,n){const s=t[e];return _e(s)?s:new hf(t,e,n)}class df{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new co(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Uc(this,!0),!0}get value(){const e=this.dep.track();return Gc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pf(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new df(s,i,n)}const Os={},Gs=new WeakMap;let Ut;function _f(t,e=!1,n=Ut){if(n){let s=Gs.get(n);s||Gs.set(n,s=[]),s.push(t)}}function gf(t,e,n=se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=F=>i?F:Ke(F)||i===!1||i===0?_t(F,1):_t(F);let u,f,g,x,I=!1,k=!1;if(_e(t)?(f=()=>t.value,I=Ke(t)):Tt(t)?(f=()=>a(t),I=!0):W(t)?(k=!0,I=t.some(F=>Tt(F)||Ke(F)),f=()=>t.map(F=>{if(_e(F))return F.value;if(Tt(F))return a(F);if(V(F))return c?c(F,2):F()})):V(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){Ft();try{g()}finally{Lt()}}const F=Ut;Ut=u;try{return c?c(t,3,[x]):t(x)}finally{Ut=F}}:f=ct,e&&i){const F=f,Q=i===!0?1/0:i;f=()=>_t(F(),Q)}const j=Hc(),U=()=>{u.stop(),j&&j.active&&to(j.effects,u)};if(r&&e){const F=e;e=(...Q)=>{F(...Q),U()}}let q=k?new Array(t.length).fill(Os):Os;const Z=F=>{if(!(!(u.flags&1)||!u.dirty&&!F))if(e){const Q=u.run();if(i||I||(k?Q.some((p,h)=>St(p,q[h])):St(Q,q))){g&&g();const p=Ut;Ut=u;try{const h=[Q,q===Os?void 0:k&&q[0]===Os?[]:q,x];c?c(e,3,h):e(...h),q=Q}finally{Ut=p}}}else u.run()};return l&&l(Z),u=new Wc(f),u.scheduler=o?()=>o(Z,!1):Z,x=F=>_f(F,!1,u),g=u.onStop=()=>{const F=Gs.get(u);if(F){if(c)c(F,4);else for(const Q of F)Q();Gs.delete(u)}},e?s?Z(!0):q=u.run():o?o(Z.bind(null,!0),!0):u.run(),U.pause=u.pause.bind(u),U.resume=u.resume.bind(u),U.stop=U,U}function _t(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_e(t))_t(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)_t(t[s],e,n);else if(Nc(t)||dn(t))t.forEach(s=>{_t(s,e,n)});else if(Dc(t)){for(const s in t)_t(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&_t(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(t,e,n,s){try{return s?t(...s):t()}catch(i){Di(i,e,n)}}function at(t,e,n,s){if(V(t)){const i=ys(t,e,n,s);return i&&Ac(i)&&i.catch(r=>{Di(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(at(t[r],e,n,s));return i}}function Di(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,a)===!1)return}l=l.parent}if(r){Ft(),ys(r,null,10,[t,c,a]),Lt();return}}mf(t,n,i,s,o)}function mf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const De=[];let ot=-1;const pn=[];let It=null,an=0;const sa=Promise.resolve();let Ks=null;function ia(t){const e=Ks||sa;return t?e.then(this?t.bind(this):t):e}function xf(t){let e=ot+1,n=De.length;for(;e<n;){const s=e+n>>>1,i=De[s],r=is(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function po(t){if(!(t.flags&1)){const e=is(t),n=De[De.length-1];!n||!(t.flags&2)&&e>=is(n)?De.push(t):De.splice(xf(e),0,t),t.flags|=1,ra()}}function ra(){Ks||(Ks=sa.then(la))}function yf(t){W(t)?pn.push(...t):It&&t.id===-1?It.splice(an+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),ra()}function ol(t,e,n=ot+1){for(;n<De.length;n++){const s=De[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;De.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function oa(t){if(pn.length){const e=[...new Set(pn)].sort((n,s)=>is(n)-is(s));if(pn.length=0,It){It.push(...e);return}for(It=e,an=0;an<It.length;an++){const n=It[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,an=0}}const is=t=>t.id==null?t.flags&2?-1:1/0:t.id;function la(t){try{for(ot=0;ot<De.length;ot++){const e=De[ot];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ot<De.length;ot++){const e=De[ot];e&&(e.flags&=-2)}ot=-1,De.length=0,oa(),Ks=null,(De.length||pn.length)&&la()}}let Me=null,ca=null;function zs(t){const e=Me;return Me=t,ca=t&&t.type.__scopeId||null,e}function vf(t,e=Me,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ml(-1);const r=zs(e);let o;try{o=t(...i)}finally{zs(r),s._d&&ml(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function bf(t,e){if(Me===null)return t;const n=Fi(Me),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=se]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&_t(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Ft(),at(c,n,8,[t.el,l,t,e]),Lt())}}const Cf=Symbol("_vte"),Ef=t=>t.__isTeleport;function _o(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_o(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function go(t,e){return V(t)?Re({name:t.name},e,{setup:t}):t}function aa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ys(t,e,n,s,i=!1){if(W(t)){t.forEach((I,k)=>Ys(I,e&&(W(e)?e[k]:e),n,s,i));return}if(Gn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ys(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Fi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===se?l.refs={}:l.refs,f=l.setupState,g=J(f),x=f===se?()=>!1:I=>te(g,I);if(a!=null&&a!==c&&(ge(a)?(u[a]=null,x(a)&&(f[a]=null)):_e(a)&&(a.value=null)),V(c))ys(c,l,12,[o,u]);else{const I=ge(c),k=_e(c);if(I||k){const j=()=>{if(t.f){const U=I?x(c)?f[c]:u[c]:c.value;i?W(U)&&to(U,r):W(U)?U.includes(r)||U.push(r):I?(u[c]=[r],x(c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else I?(u[c]=o,x(c)&&(f[c]=o)):k&&(c.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,Ve(j,n)):j()}}}Ni().requestIdleCallback;Ni().cancelIdleCallback;const Gn=t=>!!t.type.__asyncLoader,ua=t=>t.type.__isKeepAlive;function If(t,e){ha(t,"a",e)}function wf(t,e){ha(t,"da",e)}function ha(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Oi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ua(i.parent.vnode)&&Sf(s,e,n,i),i=i.parent}}function Sf(t,e,n,s){const i=Oi(e,t,s,!0);da(()=>{to(s[e],i)},n)}function Oi(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ft();const l=vs(n),c=at(e,n,t,o);return l(),Lt(),c});return s?i.unshift(r):i.push(r),r}}const vt=t=>(e,n=Ie)=>{(!os||t==="sp")&&Oi(t,(...s)=>e(...s),n)},Tf=vt("bm"),fa=vt("m"),Rf=vt("bu"),Nf=vt("u"),Af=vt("bum"),da=vt("um"),Pf=vt("sp"),Df=vt("rtg"),Of=vt("rtc");function kf(t,e=Ie){Oi("ec",t,e)}const Mf="components",pa=Symbol.for("v-ndc");function Ff(t){return ge(t)?Lf(Mf,t,!1)||t:t||pa}function Lf(t,e,n=!0,s=!1){const i=Me||Ie;if(i){const r=i.type;{const l=wd(r,!1);if(l&&(l===e||l===Ye(e)||l===Ri(Ye(e))))return r}const o=ll(i[t]||r[t],e)||ll(i.appContext[t],e);return!o&&s?r:o}}function ll(t,e){return t&&(t[e]||t[Ye(e)]||t[Ri(Ye(e))])}function cl(t,e,n,s){let i;const r=n&&n[s],o=W(t);if(o||ge(t)){const l=o&&Tt(t);let c=!1;l&&(c=!Ke(t),t=Ai(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Se(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Tr=t=>t?La(t)?Fi(t):Tr(t.parent):null,Kn=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tr(t.parent),$root:t=>Tr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ga(t),$forceUpdate:t=>t.f||(t.f=()=>{po(t.update)}),$nextTick:t=>t.n||(t.n=ia.bind(t.proxy)),$watch:t=>od.bind(t)}),nr=(t,e)=>t!==se&&!t.__isScriptSetup&&te(t,e),Bf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(nr(s,e))return o[e]=1,s[e];if(i!==se&&te(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&te(a,e))return o[e]=3,r[e];if(n!==se&&te(n,e))return o[e]=4,n[e];Rr&&(o[e]=0)}}const u=Kn[e];let f,g;if(u)return e==="$attrs"&&we(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==se&&te(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,te(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return nr(i,e)?(i[e]=n,!0):s!==se&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&te(t,o)||nr(e,o)||(l=r[0])&&te(l,o)||te(s,o)||te(Kn,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function al(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rr=!0;function Hf(t){const e=ga(t),n=t.proxy,s=t.ctx;Rr=!1,e.beforeCreate&&ul(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:f,mounted:g,beforeUpdate:x,updated:I,activated:k,deactivated:j,beforeDestroy:U,beforeUnmount:q,destroyed:Z,unmounted:F,render:Q,renderTracked:p,renderTriggered:h,errorCaptured:d,serverPrefetch:b,expose:C,inheritAttrs:A,components:ee,directives:Ne,filters:An}=e;if(a&&Wf(a,s,null),o)for(const z in o){const re=o[z];V(re)&&(s[z]=re.bind(n))}if(i){const z=i.call(n,n);he(z)&&(t.data=Pi(z))}if(Rr=!0,r)for(const z in r){const re=r[z],Bt=V(re)?re.bind(n,n):V(re.get)?re.get.bind(n,n):ct,Ns=!V(re)&&V(re.set)?re.set.bind(n):ct,Ht=Ha({get:Bt,set:Ns});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:tt=>Ht.value=tt})}if(l)for(const z in l)_a(l[z],s,n,z);if(c){const z=V(c)?c.call(n):c;Reflect.ownKeys(z).forEach(re=>{Kf(re,z[re])})}u&&ul(u,t,"c");function pe(z,re){W(re)?re.forEach(Bt=>z(Bt.bind(n))):re&&z(re.bind(n))}if(pe(Tf,f),pe(fa,g),pe(Rf,x),pe(Nf,I),pe(If,k),pe(wf,j),pe(kf,d),pe(Of,p),pe(Df,h),pe(Af,q),pe(da,F),pe(Pf,b),W(C))if(C.length){const z=t.exposed||(t.exposed={});C.forEach(re=>{Object.defineProperty(z,re,{get:()=>n[re],set:Bt=>n[re]=Bt})})}else t.exposed||(t.exposed={});Q&&t.render===ct&&(t.render=Q),A!=null&&(t.inheritAttrs=A),ee&&(t.components=ee),Ne&&(t.directives=Ne),b&&aa(t)}function Wf(t,e,n=ct){W(t)&&(t=Nr(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=zn(i.from||s,i.default,!0):r=zn(i.from||s):r=zn(i),_e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ul(t,e,n){at(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function _a(t,e,n,s){let i=s.includes(".")?Aa(n,s):()=>n[s];if(ge(t)){const r=e[t];V(r)&&_n(i,r)}else if(V(t))_n(i,t.bind(n));else if(he(t))if(W(t))t.forEach(r=>_a(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&_n(i,r,t)}}function ga(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>qs(c,a,o,!0)),qs(c,e,o)),he(e)&&r.set(e,c),c}function qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qs(t,r,n,!0),i&&i.forEach(o=>qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Vf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Vf={data:hl,props:fl,emits:fl,methods:Vn,computed:Vn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Vn,directives:Vn,watch:jf,provide:hl,inject:Uf};function hl(t,e){return e?t?function(){return Re(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Uf(t,e){return Vn(Nr(t),Nr(e))}function Nr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?Re(Object.create(null),t,e):e}function fl(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Re(Object.create(null),al(t),al(e??{})):e}function jf(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function ma(){return{app:null,config:{isNativeTag:Rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $f=0;function Gf(t,e){return function(s,i=null){V(s)||(s=Re({},s)),i!=null&&!he(i)&&(i=null);const r=ma(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:$f++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Td,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(a,...f)):V(u)&&(o.add(u),u(a,...f))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,f){return f?(r.components[u]=f,a):r.components[u]},directive(u,f){return f?(r.directives[u]=f,a):r.directives[u]},mount(u,f,g){if(!c){const x=a._ceVNode||ze(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,u,g),c=!0,a._container=u,u.__vue_app__=a,Fi(x.component)}},onUnmount(u){l.push(u)},unmount(){c&&(at(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,f){return r.provides[u]=f,a},runWithContext(u){const f=qt;qt=a;try{return u()}finally{qt=f}}};return a}}let qt=null;function Kf(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function zn(t,e,n=!1){const s=Ie||Me;if(s||qt){const i=qt?qt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}function zf(){return!!(Ie||Me||qt)}const xa={},ya=()=>Object.create(xa),va=t=>Object.getPrototypeOf(t)===xa;function Yf(t,e,n,s=!1){const i={},r=ya();t.propsDefaults=Object.create(null),ba(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:of(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function qf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(ki(t.emitsOptions,g))continue;const x=e[g];if(c)if(te(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const I=Ye(g);i[I]=Ar(c,l,I,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{ba(t,e,i,r)&&(a=!0);let u;for(const f in l)(!e||!te(e,f)&&((u=nn(f))===f||!te(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ar(c,l,f,void 0,t,!0)):delete i[f]);if(r!==l)for(const f in r)(!e||!te(e,f))&&(delete r[f],a=!0)}a&&pt(t.attrs,"set","")}function ba(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Un(c))continue;const a=e[c];let u;i&&te(i,u=Ye(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:ki(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=J(n),a=l||se;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Ar(i,c,f,a[f],t,!te(a,f))}}return o}function Ar(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=te(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=vs(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}const Qf=new WeakMap;function Ca(t,e,n=!1){const s=n?Qf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!V(t)){const u=f=>{c=!0;const[g,x]=Ca(f,e,!0);Re(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return he(t)&&s.set(t,fn),fn;if(W(r))for(let u=0;u<r.length;u++){const f=Ye(r[u]);dl(f)&&(o[f]=se)}else if(r)for(const u in r){const f=Ye(u);if(dl(f)){const g=r[u],x=o[f]=W(g)||V(g)?{type:g}:Re({},g),I=x.type;let k=!1,j=!0;if(W(I))for(let U=0;U<I.length;++U){const q=I[U],Z=V(q)&&q.name;if(Z==="Boolean"){k=!0;break}else Z==="String"&&(j=!1)}else k=V(I)&&I.name==="Boolean";x[0]=k,x[1]=j,(k||te(x,"default"))&&l.push(f)}}const a=[o,l];return he(t)&&s.set(t,a),a}function dl(t){return t[0]!=="$"&&!Un(t)}const Ea=t=>t[0]==="_"||t==="$stable",mo=t=>W(t)?t.map(lt):[lt(t)],Jf=(t,e,n)=>{if(e._n)return e;const s=vf((...i)=>mo(e(...i)),n);return s._c=!1,s},Ia=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ea(i))continue;const r=t[i];if(V(r))e[i]=Jf(i,r,s);else if(r!=null){const o=mo(r);e[i]=()=>o}}},wa=(t,e)=>{const n=mo(e);t.slots.default=()=>n},Sa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Xf=(t,e,n)=>{const s=t.slots=ya();if(t.vnode.shapeFlag&32){const i=e._;i?(Sa(s,e,n),n&&Oc(s,"_",i,!0)):Ia(e,s)}else e&&wa(t,e)},Zf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Sa(i,e,n):(r=!e.$stable,Ia(e,i)),o=e}else e&&(wa(t,e),o={default:1});if(r)for(const l in i)!Ea(l)&&o[l]==null&&delete i[l]},Ve=dd;function ed(t){return td(t)}function td(t,e){const n=Ni();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:f,nextSibling:g,setScopeId:x=ct,insertStaticContent:I}=t,k=(_,m,y,w=null,v=null,E=null,P=void 0,N=null,R=!!m.dynamicChildren)=>{if(_===m)return;_&&!Mn(_,m)&&(w=As(_),tt(_,v,E,!0),_=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:S,ref:L,shapeFlag:D}=m;switch(S){case Mi:j(_,m,y,w);break;case Jt:U(_,m,y,w);break;case ir:_==null&&q(m,y,w,P);break;case Ge:ee(_,m,y,w,v,E,P,N,R);break;default:D&1?Q(_,m,y,w,v,E,P,N,R):D&6?Ne(_,m,y,w,v,E,P,N,R):(D&64||D&128)&&S.process(_,m,y,w,v,E,P,N,R,Dn)}L!=null&&v&&Ys(L,_&&_.ref,E,m||_,!m)},j=(_,m,y,w)=>{if(_==null)s(m.el=l(m.children),y,w);else{const v=m.el=_.el;m.children!==_.children&&a(v,m.children)}},U=(_,m,y,w)=>{_==null?s(m.el=c(m.children||""),y,w):m.el=_.el},q=(_,m,y,w)=>{[_.el,_.anchor]=I(_.children,m,y,w,_.el,_.anchor)},Z=({el:_,anchor:m},y,w)=>{let v;for(;_&&_!==m;)v=g(_),s(_,y,w),_=v;s(m,y,w)},F=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},Q=(_,m,y,w,v,E,P,N,R)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),_==null?p(m,y,w,v,E,P,N,R):b(_,m,v,E,P,N,R)},p=(_,m,y,w,v,E,P,N)=>{let R,S;const{props:L,shapeFlag:D,transition:M,dirs:H}=_;if(R=_.el=o(_.type,E,L&&L.is,L),D&8?u(R,_.children):D&16&&d(_.children,R,null,w,v,sr(_,E),P,N),H&&Wt(_,null,w,"created"),h(R,_,_.scopeId,P,w),L){for(const oe in L)oe!=="value"&&!Un(oe)&&r(R,oe,null,L[oe],E,w);"value"in L&&r(R,"value",null,L.value,E),(S=L.onVnodeBeforeMount)&&rt(S,w,_)}H&&Wt(_,null,w,"beforeMount");const Y=nd(v,M);Y&&M.beforeEnter(R),s(R,m,y),((S=L&&L.onVnodeMounted)||Y||H)&&Ve(()=>{S&&rt(S,w,_),Y&&M.enter(R),H&&Wt(_,null,w,"mounted")},v)},h=(_,m,y,w,v)=>{if(y&&x(_,y),w)for(let E=0;E<w.length;E++)x(_,w[E]);if(v){let E=v.subTree;if(m===E||Da(E.type)&&(E.ssContent===m||E.ssFallback===m)){const P=v.vnode;h(_,P,P.scopeId,P.slotScopeIds,v.parent)}}},d=(_,m,y,w,v,E,P,N,R=0)=>{for(let S=R;S<_.length;S++){const L=_[S]=N?wt(_[S]):lt(_[S]);k(null,L,m,y,w,v,E,P,N)}},b=(_,m,y,w,v,E,P)=>{const N=m.el=_.el;let{patchFlag:R,dynamicChildren:S,dirs:L}=m;R|=_.patchFlag&16;const D=_.props||se,M=m.props||se;let H;if(y&&Vt(y,!1),(H=M.onVnodeBeforeUpdate)&&rt(H,y,m,_),L&&Wt(m,_,y,"beforeUpdate"),y&&Vt(y,!0),(D.innerHTML&&M.innerHTML==null||D.textContent&&M.textContent==null)&&u(N,""),S?C(_.dynamicChildren,S,N,y,w,sr(m,v),E):P||re(_,m,N,null,y,w,sr(m,v),E,!1),R>0){if(R&16)A(N,D,M,y,v);else if(R&2&&D.class!==M.class&&r(N,"class",null,M.class,v),R&4&&r(N,"style",D.style,M.style,v),R&8){const Y=m.dynamicProps;for(let oe=0;oe<Y.length;oe++){const ne=Y[oe],He=D[ne],ke=M[ne];(ke!==He||ne==="value")&&r(N,ne,He,ke,v,y)}}R&1&&_.children!==m.children&&u(N,m.children)}else!P&&S==null&&A(N,D,M,y,v);((H=M.onVnodeUpdated)||L)&&Ve(()=>{H&&rt(H,y,m,_),L&&Wt(m,_,y,"updated")},w)},C=(_,m,y,w,v,E,P)=>{for(let N=0;N<m.length;N++){const R=_[N],S=m[N],L=R.el&&(R.type===Ge||!Mn(R,S)||R.shapeFlag&70)?f(R.el):y;k(R,S,L,null,w,v,E,P,!0)}},A=(_,m,y,w,v)=>{if(m!==y){if(m!==se)for(const E in m)!Un(E)&&!(E in y)&&r(_,E,m[E],null,v,w);for(const E in y){if(Un(E))continue;const P=y[E],N=m[E];P!==N&&E!=="value"&&r(_,E,N,P,v,w)}"value"in y&&r(_,"value",m.value,y.value,v)}},ee=(_,m,y,w,v,E,P,N,R)=>{const S=m.el=_?_.el:l(""),L=m.anchor=_?_.anchor:l("");let{patchFlag:D,dynamicChildren:M,slotScopeIds:H}=m;H&&(N=N?N.concat(H):H),_==null?(s(S,y,w),s(L,y,w),d(m.children||[],y,L,v,E,P,N,R)):D>0&&D&64&&M&&_.dynamicChildren?(C(_.dynamicChildren,M,y,v,E,P,N),(m.key!=null||v&&m===v.subTree)&&Ta(_,m,!0)):re(_,m,y,L,v,E,P,N,R)},Ne=(_,m,y,w,v,E,P,N,R)=>{m.slotScopeIds=N,_==null?m.shapeFlag&512?v.ctx.activate(m,y,w,P,R):An(m,y,w,v,E,P,R):Rs(_,m,R)},An=(_,m,y,w,v,E,P)=>{const N=_.component=vd(_,w,v);if(ua(_)&&(N.ctx.renderer=Dn),bd(N,!1,P),N.asyncDep){if(v&&v.registerDep(N,pe,P),!_.el){const R=N.subTree=ze(Jt);U(null,R,m,y)}}else pe(N,_,m,y,v,E,P)},Rs=(_,m,y)=>{const w=m.component=_.component;if(hd(_,m,y))if(w.asyncDep&&!w.asyncResolved){z(w,m,y);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},pe=(_,m,y,w,v,E,P)=>{const N=()=>{if(_.isMounted){let{next:D,bu:M,u:H,parent:Y,vnode:oe}=_;{const st=Ra(_);if(st){D&&(D.el=oe.el,z(_,D,P)),st.asyncDep.then(()=>{_.isUnmounted||N()});return}}let ne=D,He;Vt(_,!1),D?(D.el=oe.el,z(_,D,P)):D=oe,M&&Bs(M),(He=D.props&&D.props.onVnodeBeforeUpdate)&&rt(He,Y,D,oe),Vt(_,!0);const ke=_l(_),nt=_.subTree;_.subTree=ke,k(nt,ke,f(nt.el),As(nt),_,v,E),D.el=ke.el,ne===null&&fd(_,ke.el),H&&Ve(H,v),(He=D.props&&D.props.onVnodeUpdated)&&Ve(()=>rt(He,Y,D,oe),v)}else{let D;const{el:M,props:H}=m,{bm:Y,m:oe,parent:ne,root:He,type:ke}=_,nt=Gn(m);Vt(_,!1),Y&&Bs(Y),!nt&&(D=H&&H.onVnodeBeforeMount)&&rt(D,ne,m),Vt(_,!0);{He.ce&&He.ce._injectChildStyle(ke);const st=_.subTree=_l(_);k(null,st,y,w,_,v,E),m.el=st.el}if(oe&&Ve(oe,v),!nt&&(D=H&&H.onVnodeMounted)){const st=m;Ve(()=>rt(D,ne,st),v)}(m.shapeFlag&256||ne&&Gn(ne.vnode)&&ne.vnode.shapeFlag&256)&&_.a&&Ve(_.a,v),_.isMounted=!0,m=y=w=null}};_.scope.on();const R=_.effect=new Wc(N);_.scope.off();const S=_.update=R.run.bind(R),L=_.job=R.runIfDirty.bind(R);L.i=_,L.id=_.uid,R.scheduler=()=>po(L),Vt(_,!0),S()},z=(_,m,y)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,qf(_,m.props,w,y),Zf(_,m.children,y),Ft(),ol(_),Lt()},re=(_,m,y,w,v,E,P,N,R=!1)=>{const S=_&&_.children,L=_?_.shapeFlag:0,D=m.children,{patchFlag:M,shapeFlag:H}=m;if(M>0){if(M&128){Ns(S,D,y,w,v,E,P,N,R);return}else if(M&256){Bt(S,D,y,w,v,E,P,N,R);return}}H&8?(L&16&&Pn(S,v,E),D!==S&&u(y,D)):L&16?H&16?Ns(S,D,y,w,v,E,P,N,R):Pn(S,v,E,!0):(L&8&&u(y,""),H&16&&d(D,y,w,v,E,P,N,R))},Bt=(_,m,y,w,v,E,P,N,R)=>{_=_||fn,m=m||fn;const S=_.length,L=m.length,D=Math.min(S,L);let M;for(M=0;M<D;M++){const H=m[M]=R?wt(m[M]):lt(m[M]);k(_[M],H,y,null,v,E,P,N,R)}S>L?Pn(_,v,E,!0,!1,D):d(m,y,w,v,E,P,N,R,D)},Ns=(_,m,y,w,v,E,P,N,R)=>{let S=0;const L=m.length;let D=_.length-1,M=L-1;for(;S<=D&&S<=M;){const H=_[S],Y=m[S]=R?wt(m[S]):lt(m[S]);if(Mn(H,Y))k(H,Y,y,null,v,E,P,N,R);else break;S++}for(;S<=D&&S<=M;){const H=_[D],Y=m[M]=R?wt(m[M]):lt(m[M]);if(Mn(H,Y))k(H,Y,y,null,v,E,P,N,R);else break;D--,M--}if(S>D){if(S<=M){const H=M+1,Y=H<L?m[H].el:w;for(;S<=M;)k(null,m[S]=R?wt(m[S]):lt(m[S]),y,Y,v,E,P,N,R),S++}}else if(S>M)for(;S<=D;)tt(_[S],v,E,!0),S++;else{const H=S,Y=S,oe=new Map;for(S=Y;S<=M;S++){const We=m[S]=R?wt(m[S]):lt(m[S]);We.key!=null&&oe.set(We.key,S)}let ne,He=0;const ke=M-Y+1;let nt=!1,st=0;const On=new Array(ke);for(S=0;S<ke;S++)On[S]=0;for(S=H;S<=D;S++){const We=_[S];if(He>=ke){tt(We,v,E,!0);continue}let it;if(We.key!=null)it=oe.get(We.key);else for(ne=Y;ne<=M;ne++)if(On[ne-Y]===0&&Mn(We,m[ne])){it=ne;break}it===void 0?tt(We,v,E,!0):(On[it-Y]=S+1,it>=st?st=it:nt=!0,k(We,m[it],y,null,v,E,P,N,R),He++)}const tl=nt?sd(On):fn;for(ne=tl.length-1,S=ke-1;S>=0;S--){const We=Y+S,it=m[We],nl=We+1<L?m[We+1].el:w;On[S]===0?k(null,it,y,nl,v,E,P,N,R):nt&&(ne<0||S!==tl[ne]?Ht(it,y,nl,2):ne--)}}},Ht=(_,m,y,w,v=null)=>{const{el:E,type:P,transition:N,children:R,shapeFlag:S}=_;if(S&6){Ht(_.component.subTree,m,y,w);return}if(S&128){_.suspense.move(m,y,w);return}if(S&64){P.move(_,m,y,Dn);return}if(P===Ge){s(E,m,y);for(let D=0;D<R.length;D++)Ht(R[D],m,y,w);s(_.anchor,m,y);return}if(P===ir){Z(_,m,y);return}if(w!==2&&S&1&&N)if(w===0)N.beforeEnter(E),s(E,m,y),Ve(()=>N.enter(E),v);else{const{leave:D,delayLeave:M,afterLeave:H}=N,Y=()=>s(E,m,y),oe=()=>{D(E,()=>{Y(),H&&H()})};M?M(E,Y,oe):oe()}else s(E,m,y)},tt=(_,m,y,w=!1,v=!1)=>{const{type:E,props:P,ref:N,children:R,dynamicChildren:S,shapeFlag:L,patchFlag:D,dirs:M,cacheIndex:H}=_;if(D===-2&&(v=!1),N!=null&&Ys(N,null,y,_,!0),H!=null&&(m.renderCache[H]=void 0),L&256){m.ctx.deactivate(_);return}const Y=L&1&&M,oe=!Gn(_);let ne;if(oe&&(ne=P&&P.onVnodeBeforeUnmount)&&rt(ne,m,_),L&6)Th(_.component,y,w);else{if(L&128){_.suspense.unmount(y,w);return}Y&&Wt(_,null,m,"beforeUnmount"),L&64?_.type.remove(_,m,y,Dn,w):S&&!S.hasOnce&&(E!==Ge||D>0&&D&64)?Pn(S,m,y,!1,!0):(E===Ge&&D&384||!v&&L&16)&&Pn(R,m,y),w&&Zo(_)}(oe&&(ne=P&&P.onVnodeUnmounted)||Y)&&Ve(()=>{ne&&rt(ne,m,_),Y&&Wt(_,null,m,"unmounted")},y)},Zo=_=>{const{type:m,el:y,anchor:w,transition:v}=_;if(m===Ge){Sh(y,w);return}if(m===ir){F(_);return}const E=()=>{i(y),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(_.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:N}=v,R=()=>P(y,E);N?N(_.el,E,R):R()}else E()},Sh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Th=(_,m,y)=>{const{bum:w,scope:v,job:E,subTree:P,um:N,m:R,a:S}=_;pl(R),pl(S),w&&Bs(w),v.stop(),E&&(E.flags|=8,tt(P,_,m,y)),N&&Ve(N,m),Ve(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Pn=(_,m,y,w=!1,v=!1,E=0)=>{for(let P=E;P<_.length;P++)tt(_[P],m,y,w,v)},As=_=>{if(_.shapeFlag&6)return As(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[Cf];return y?g(y):m};let Qi=!1;const el=(_,m,y)=>{_==null?m._vnode&&tt(m._vnode,null,null,!0):k(m._vnode||null,_,m,null,null,null,y),m._vnode=_,Qi||(Qi=!0,ol(),oa(),Qi=!1)},Dn={p:k,um:tt,m:Ht,r:Zo,mt:An,mc:d,pc:re,pbc:C,n:As,o:t};return{render:el,hydrate:void 0,createApp:Gf(el)}}function sr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function nd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ta(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=wt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ta(o,l)),l.type===Mi&&(l.el=o.el)}}function sd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ra(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ra(e)}function pl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const id=Symbol.for("v-scx"),rd=()=>zn(id);function _n(t,e,n){return Na(t,e,n)}function Na(t,e,n=se){const{immediate:s,deep:i,flush:r,once:o}=n,l=Re({},n),c=e&&s||!e&&r!=="post";let a;if(os){if(r==="sync"){const x=rd();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=ct,x.resume=ct,x.pause=ct,x}}const u=Ie;l.call=(x,I,k)=>at(x,u,I,k);let f=!1;r==="post"?l.scheduler=x=>{Ve(x,u&&u.suspense)}:r!=="sync"&&(f=!0,l.scheduler=(x,I)=>{I?x():po(x)}),l.augmentJob=x=>{e&&(x.flags|=4),f&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const g=gf(t,e,l);return os&&(a?a.push(g):c&&g()),g}function od(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?Aa(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=vs(this),l=Na(i,r.bind(s),n);return o(),l}function Aa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ld=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ye(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function cd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&ld(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ge(u)?u.trim():u)),o.number&&(i=n.map(Cr)));let l,c=s[l=Ji(e)]||s[l=Ji(Ye(e))];!c&&r&&(c=s[l=Ji(nn(e))]),c&&at(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,at(a,t,6,i)}}function Pa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const c=a=>{const u=Pa(a,e,!0);u&&(l=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(he(t)&&s.set(t,null),null):(W(r)?r.forEach(c=>o[c]=null):Re(o,r),he(t)&&s.set(t,o),o)}function ki(t,e){return!t||!wi(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,nn(e))||te(t,e))}function _l(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:f,data:g,setupState:x,ctx:I,inheritAttrs:k}=t,j=zs(t);let U,q;try{if(n.shapeFlag&4){const F=i||s,Q=F;U=lt(a.call(Q,F,u,f,x,g,I)),q=l}else{const F=e;U=lt(F.length>1?F(f,{attrs:l,slots:o,emit:c}):F(f,null)),q=e.props?l:ad(l)}}catch(F){Yn.length=0,Di(F,t,1),U=ze(Jt)}let Z=U;if(q&&k!==!1){const F=Object.keys(q),{shapeFlag:Q}=Z;F.length&&Q&7&&(r&&F.some(eo)&&(q=ud(q,r)),Z=yn(Z,q,!1,!0))}return n.dirs&&(Z=yn(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&_o(Z,n.transition),U=Z,zs(j),U}const ad=t=>{let e;for(const n in t)(n==="class"||n==="style"||wi(n))&&((e||(e={}))[n]=t[n]);return e},ud=(t,e)=>{const n={};for(const s in t)(!eo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?gl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(o[g]!==s[g]&&!ki(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?gl(s,o,a):!0:!!o;return!1}function gl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ki(n,r))return!0}return!1}function fd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Da=t=>t.__isSuspense;function dd(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):yf(t)}const Ge=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),ir=Symbol.for("v-stc"),Yn=[];let Ue=null;function fe(t=!1){Yn.push(Ue=t?null:[])}function pd(){Yn.pop(),Ue=Yn[Yn.length-1]||null}let rs=1;function ml(t,e=!1){rs+=t,t<0&&Ue&&e&&(Ue.hasOnce=!0)}function Oa(t){return t.dynamicChildren=rs>0?Ue||fn:null,pd(),rs>0&&Ue&&Ue.push(t),t}function me(t,e,n,s,i,r){return Oa(O(t,e,n,s,i,r,!0))}function ka(t,e,n,s,i){return Oa(ze(t,e,n,s,i,!0))}function Ma(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const Fa=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||_e(t)||V(t)?{i:Me,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fa(e),ref:e&&Hs(e),scopeId:ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Me};return l?(xo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),rs>0&&!o&&Ue&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ue.push(c),c}const ze=_d;function _d(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===pa)&&(t=Jt),Ma(t)){const l=yn(t,e,!0);return n&&xo(l,n),rs>0&&!r&&Ue&&(l.shapeFlag&6?Ue[Ue.indexOf(t)]=l:Ue.push(l)),l.patchFlag=-2,l}if(Sd(t)&&(t=t.__vccOpts),e){e=gd(e);let{class:l,style:c}=e;l&&!ge(l)&&(e.class=io(l)),he(c)&&(ho(c)&&!W(c)&&(c=Re({},c)),e.style=so(c))}const o=ge(t)?1:Da(t)?128:Ef(t)?64:he(t)?4:V(t)?2:0;return O(t,e,n,s,i,o,r,!0)}function gd(t){return t?ho(t)||va(t)?Re({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?md(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fa(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Hs(e)):[r,Hs(e)]:Hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&_o(u,c.clone(u)),u}function Ee(t=" ",e=0){return ze(Mi,null,t,e)}function je(t="",e=!1){return e?(fe(),ka(Jt,null,t)):ze(Jt,null,t)}function lt(t){return t==null||typeof t=="boolean"?ze(Jt):W(t)?ze(Ge,null,t.slice()):Ma(t)?wt(t):ze(Mi,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function xo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),xo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!va(e)?e._ctx=Me:i===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Me},n=32):(e=String(e),s&64?(n=16,e=[Ee(e)]):n=8);t.children=e,t.shapeFlag|=n}function md(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=io([e.class,s.class]));else if(i==="style")e.style=so([e.style,s.style]);else if(wi(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function rt(t,e,n,s=null){at(t,e,7,[n,s])}const xd=ma();let yd=0;function vd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||xd,r={uid:yd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ca(s,i),emitsOptions:Pa(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=cd.bind(null,r),t.ce&&t.ce(r),r}let Ie=null,Qs,Pr;{const t=Ni(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Qs=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Pr=e("__VUE_SSR_SETTERS__",n=>os=n)}const vs=t=>{const e=Ie;return Qs(t),t.scope.on(),()=>{t.scope.off(),Qs(e)}},xl=()=>{Ie&&Ie.scope.off(),Qs(null)};function La(t){return t.vnode.shapeFlag&4}let os=!1;function bd(t,e=!1,n=!1){e&&Pr(e);const{props:s,children:i}=t.vnode,r=La(t);Yf(t,s,r,e),Xf(t,i,n);const o=r?Cd(t,e):void 0;return e&&Pr(!1),o}function Cd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Bf);const{setup:s}=n;if(s){Ft();const i=t.setupContext=s.length>1?Id(t):null,r=vs(t),o=ys(s,t,0,[t.props,i]),l=Ac(o);if(Lt(),r(),(l||t.sp)&&!Gn(t)&&aa(t),l){if(o.then(xl,xl),e)return o.then(c=>{yl(t,c)}).catch(c=>{Di(c,t,0)});t.asyncDep=o}else yl(t,o)}else Ba(t)}function yl(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=na(e)),Ba(t)}function Ba(t,e,n){const s=t.type;t.render||(t.render=s.render||ct);{const i=vs(t);Ft();try{Hf(t)}finally{Lt(),i()}}}const Ed={get(t,e){return we(t,"get",""),t[e]}};function Id(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ed),slots:t.slots,emit:t.emit,expose:e}}function Fi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(na(fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function wd(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Sd(t){return V(t)&&"__vccOpts"in t}const Ha=(t,e)=>pf(t,e,os),Td="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dr;const vl=typeof window<"u"&&window.trustedTypes;if(vl)try{Dr=vl.createPolicy("vue",{createHTML:t=>t})}catch{}const Wa=Dr?t=>Dr.createHTML(t):t=>t,Rd="http://www.w3.org/2000/svg",Nd="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,bl=ft&&ft.createElement("template"),Ad={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ft.createElementNS(Rd,t):e==="mathml"?ft.createElementNS(Nd,t):n?ft.createElement(t,{is:n}):ft.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ft.createTextNode(t),createComment:t=>ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{bl.innerHTML=Wa(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=bl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pd=Symbol("_vtc");function Dd(t,e,n){const s=t[Pd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cl=Symbol("_vod"),Od=Symbol("_vsh"),kd=Symbol(""),Md=/(^|;)\s*display\s*:/;function Fd(t,e,n){const s=t.style,i=ge(n);let r=!1;if(n&&!i){if(e)if(ge(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ws(s,l,"")}else for(const o in e)n[o]==null&&Ws(s,o,"");for(const o in n)o==="display"&&(r=!0),Ws(s,o,n[o])}else if(i){if(e!==n){const o=s[kd];o&&(n+=";"+o),s.cssText=n,r=Md.test(n)}}else e&&t.removeAttribute("style");Cl in t&&(t[Cl]=r?s.display:"",t[Od]&&(s.display="none"))}const El=/\s*!important$/;function Ws(t,e,n){if(W(n))n.forEach(s=>Ws(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ld(t,e);El.test(n)?t.setProperty(nn(s),n.replace(El,""),"important"):t[s]=n}}const Il=["Webkit","Moz","ms"],rr={};function Ld(t,e){const n=rr[e];if(n)return n;let s=Ye(e);if(s!=="filter"&&s in t)return rr[e]=s;s=Ri(s);for(let i=0;i<Il.length;i++){const r=Il[i]+s;if(r in t)return rr[e]=r}return e}const wl="http://www.w3.org/1999/xlink";function Sl(t,e,n,s,i,r=Bh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wl,e.slice(6,e.length)):t.setAttributeNS(wl,e,n):n==null||r&&!kc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Mt(n)?String(n):n)}function Tl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Wa(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=kc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function Bd(t,e,n,s){t.removeEventListener(e,n,s)}const Rl=Symbol("_vei");function Hd(t,e,n,s,i=null){const r=t[Rl]||(t[Rl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Wd(e);if(s){const a=r[e]=jd(s,i);un(t,l,a,c)}else o&&(Bd(t,l,o,c),r[e]=void 0)}}const Nl=/(?:Once|Passive|Capture)$/;function Wd(t){let e;if(Nl.test(t)){e={};let s;for(;s=t.match(Nl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let or=0;const Vd=Promise.resolve(),Ud=()=>or||(Vd.then(()=>or=0),or=Date.now());function jd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;at($d(s,n.value),e,5,[s])};return n.value=t,n.attached=Ud(),n}function $d(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Dd(t,s,o):e==="style"?Fd(t,n,s):wi(e)?eo(e)||Hd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kd(t,e,s,o))?(Tl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ge(s))?Tl(t,Ye(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sl(t,e,s,o))};function Kd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Al(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Al(e)&&ge(n)?!1:e in t}const Pl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Bs(e,n):e};function zd(t){t.target.composing=!0}function Dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lr=Symbol("_assign"),Yd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[lr]=Pl(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Cr(l)),t[lr](l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",zd),un(t,"compositionend",Dl),un(t,"change",Dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[lr]=Pl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Cr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},qd=Re({patchProp:Gd},Ad);let Ol;function Qd(){return Ol||(Ol=ed(qd))}const Jd=(...t)=>{const e=Qd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Zd(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Xd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Xd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zd(t){return ge(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Va;const Li=t=>Va=t,Ua=Symbol();function Or(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qn||(qn={}));function ep(){const t=Bc(!0),e=t.run(()=>dt({}));let n=[],s=[];const i=fo({install(r){Li(i),i._a=r,r.provide(Ua,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ja=()=>{};function kl(t,e,n,s=ja){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Hc()&&Hh(i),i}function on(t,...e){t.slice().forEach(n=>{n(...e)})}const tp=t=>t(),Ml=Symbol(),cr=Symbol();function kr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Or(i)&&Or(s)&&t.hasOwnProperty(n)&&!_e(s)&&!Tt(s)?t[n]=kr(i,s):t[n]=s}return t}const np=Symbol();function sp(t){return!Or(t)||!t.hasOwnProperty(np)}const{assign:Et}=Object;function ip(t){return!!(_e(t)&&t.effect)}function rp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=uf(n.state.value[t]);return Et(u,r,Object.keys(o||{}).reduce((f,g)=>(f[g]=fo(Ha(()=>{Li(n);const x=n._s.get(t);return o[g].call(x,x)})),f),{}))}return c=$a(t,a,e,n,s,!0),c}function $a(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),c={deep:!0};let a,u,f=[],g=[],x;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),dt({});let k;function j(d){let b;a=u=!1,typeof d=="function"?(d(s.state.value[t]),b={type:qn.patchFunction,storeId:t,events:x}):(kr(s.state.value[t],d),b={type:qn.patchObject,payload:d,storeId:t,events:x});const C=k=Symbol();ia().then(()=>{k===C&&(a=!0)}),u=!0,on(f,b,s.state.value[t])}const U=r?function(){const{state:b}=n,C=b?b():{};this.$patch(A=>{Et(A,C)})}:ja;function q(){o.stop(),f=[],g=[],s._s.delete(t)}const Z=(d,b="")=>{if(Ml in d)return d[cr]=b,d;const C=function(){Li(s);const A=Array.from(arguments),ee=[],Ne=[];function An(z){ee.push(z)}function Rs(z){Ne.push(z)}on(g,{args:A,name:C[cr],store:Q,after:An,onError:Rs});let pe;try{pe=d.apply(this&&this.$id===t?this:Q,A)}catch(z){throw on(Ne,z),z}return pe instanceof Promise?pe.then(z=>(on(ee,z),z)).catch(z=>(on(Ne,z),Promise.reject(z))):(on(ee,pe),pe)};return C[Ml]=!0,C[cr]=b,C},F={_p:s,$id:t,$onAction:kl.bind(null,g),$patch:j,$reset:U,$subscribe(d,b={}){const C=kl(f,d,b.detached,()=>A()),A=o.run(()=>_n(()=>s.state.value[t],ee=>{(b.flush==="sync"?u:a)&&d({storeId:t,type:qn.direct,events:x},ee)},Et({},c,b)));return C},$dispose:q},Q=Pi(F);s._s.set(t,Q);const h=(s._a&&s._a.runWithContext||tp)(()=>s._e.run(()=>(o=Bc()).run(()=>e({action:Z}))));for(const d in h){const b=h[d];if(_e(b)&&!ip(b)||Tt(b))r||(I&&sp(b)&&(_e(b)?b.value=I[d]:kr(b,I[d])),s.state.value[t][d]=b);else if(typeof b=="function"){const C=Z(b,d);h[d]=C,l.actions[d]=b}}return Et(Q,h),Et(J(Q),h),Object.defineProperty(Q,"$state",{get:()=>s.state.value[t],set:d=>{j(b=>{Et(b,d)})}}),s._p.forEach(d=>{Et(Q,o.run(()=>d({store:Q,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(Q.$state,I),a=!0,u=!0,Q}/*! #__NO_SIDE_EFFECTS__ */function op(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=zf();return o=o||(c?zn(Ua,null):null),o&&Li(o),o=Va,o._s.has(t)||(i?$a(t,e,s,o):rp(t,s,o)),o._s.get(t)}return r.$id=t,r}const Ga=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},lp=()=>{};var Fl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw wn(e)},wn=function(t){return new Error("Firebase Database ("+Ka.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[u],n[f],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(za(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||f==null)throw new ap;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),f!==64){const I=a<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ap extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ya=function(t){const e=za(t);return yo.encodeByteArray(e,!0)},Js=function(t){return Ya(t).replace(/\./g,"")},Mr=function(t){try{return yo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){return qa(void 0,t)}function qa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hp(n)||(t[n]=qa(t[n],e[n]));return t}function hp(t){return t!=="__proto__"}/**
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
 */function fp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dp=()=>fp().__FIREBASE_DEFAULTS__,pp=()=>{if(typeof process>"u"||typeof Fl>"u")return;const t=Fl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_p=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mr(t[1]);return e&&JSON.parse(e)},Qa=()=>{try{return lp()||dp()||pp()||_p()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gp=t=>{var e,n;return(n=(e=Qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mp=t=>{const e=gp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ja=()=>{var t;return(t=Qa())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function xp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Js(JSON.stringify(n)),Js(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yp())}function vp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bp(){return Ka.NODE_ADMIN===!0}function Cp(){try{return typeof indexedDB=="object"}catch{return!1}}function Ep(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="FirebaseError";class bs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ip,Object.setPrototypeOf(this,bs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?wp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bs(i,l,s)}}function wp(t,e){return t.replace(Sp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Sp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ls(Mr(r[0])||""),n=ls(Mr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Tp=function(t){const e=eu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Rp=function(t){const e=eu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ll(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Zs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Bl(r)&&Bl(o)){if(!Zs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Bl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ap{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let f=0;f<80;f++){f<40?f<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):f<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[f]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function vo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Sn(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class Dp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kp(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Op(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Op(t){return t===jt?void 0:t}function kp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Fp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Lp=ce.INFO,Bp={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Hp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Bp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=Lp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Wp=(t,e)=>e.some(n=>t instanceof n);let Hl,Wl;function Vp(){return Hl||(Hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nu=new WeakMap,Fr=new WeakMap,su=new WeakMap,ar=new WeakMap,bo=new WeakMap;function jp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nu.set(n,t)}).catch(()=>{}),bo.set(e,t),e}function $p(t){if(Fr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Fr.set(t,e)}let Lr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||su.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gp(t){Lr=t(Lr)}function Kp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return su.set(s,e.sort?e.sort():[e]),Rt(s)}:Up().includes(t)?function(...e){return t.apply(ur(this),e),Rt(nu.get(this))}:function(...e){return Rt(t.apply(ur(this),e))}}function zp(t){return typeof t=="function"?Kp(t):(t instanceof IDBTransaction&&$p(t),Wp(t,Vp())?new Proxy(t,Lr):t)}function Rt(t){if(t instanceof IDBRequest)return jp(t);if(ar.has(t))return ar.get(t);const e=zp(t);return e!==t&&(ar.set(t,e),bo.set(e,t)),e}const ur=t=>bo.get(t);function Yp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const qp=["get","getKey","getAll","getAllKeys","count"],Qp=["put","add","delete","clear"],hr=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Qp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return hr.set(e,r),r}Gp(t=>({...t,get:(e,n,s)=>Vl(e,n)||t.get(e,n,s),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
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
 */class Jp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Br="@firebase/app",Ul="0.11.2";/**
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
 */const xt=new tu("@firebase/app"),Zp="@firebase/app-compat",e_="@firebase/analytics-compat",t_="@firebase/analytics",n_="@firebase/app-check-compat",s_="@firebase/app-check",i_="@firebase/auth",r_="@firebase/auth-compat",o_="@firebase/database",l_="@firebase/data-connect",c_="@firebase/database-compat",a_="@firebase/functions",u_="@firebase/functions-compat",h_="@firebase/installations",f_="@firebase/installations-compat",d_="@firebase/messaging",p_="@firebase/messaging-compat",__="@firebase/performance",g_="@firebase/performance-compat",m_="@firebase/remote-config",x_="@firebase/remote-config-compat",y_="@firebase/storage",v_="@firebase/storage-compat",b_="@firebase/firestore",C_="@firebase/vertexai",E_="@firebase/firestore-compat",I_="firebase",w_="11.4.0";/**
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
 */const Hr="[DEFAULT]",S_={[Br]:"fire-core",[Zp]:"fire-core-compat",[t_]:"fire-analytics",[e_]:"fire-analytics-compat",[s_]:"fire-app-check",[n_]:"fire-app-check-compat",[i_]:"fire-auth",[r_]:"fire-auth-compat",[o_]:"fire-rtdb",[l_]:"fire-data-connect",[c_]:"fire-rtdb-compat",[a_]:"fire-fn",[u_]:"fire-fn-compat",[h_]:"fire-iid",[f_]:"fire-iid-compat",[d_]:"fire-fcm",[p_]:"fire-fcm-compat",[__]:"fire-perf",[g_]:"fire-perf-compat",[m_]:"fire-rc",[x_]:"fire-rc-compat",[y_]:"fire-gcs",[v_]:"fire-gcs-compat",[b_]:"fire-fst",[E_]:"fire-fst-compat",[C_]:"fire-vertex","fire-js":"fire-js",[I_]:"fire-js-all"};/**
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
 */const ei=new Map,T_=new Map,Wr=new Map;function jl(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Wr.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;Wr.set(e,t);for(const n of ei.values())jl(n,t);for(const n of T_.values())jl(n,t);return!0}function R_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function N_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const A_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new Za("app","Firebase",A_);/**
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
 */class P_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const D_=w_;function iu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=Ja()),!n)throw Nt.create("no-options");const r=ei.get(i);if(r){if(Zs(n,r.options)&&Zs(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new Mp(i);for(const c of Wr.values())o.addComponent(c);const l=new P_(n,s,o);return ei.set(i,l),l}function O_(t=Hr){const e=ei.get(t);if(!e&&t===Hr&&Ja())return iu();if(!e)throw Nt.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=S_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(l.join(" "));return}ti(new cs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const k_="firebase-heartbeat-database",M_=1,as="firebase-heartbeat-store";let fr=null;function ru(){return fr||(fr=Yp(k_,M_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),fr}async function F_(t){try{const n=(await ru()).transaction(as),s=await n.objectStore(as).get(ou(t));return await n.done,s}catch(e){if(e instanceof bs)xt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function $l(t,e){try{const s=(await ru()).transaction(as,"readwrite");await s.objectStore(as).put(e,ou(t)),await s.done}catch(n){if(n instanceof bs)xt.warn(n.message);else{const s=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(s.message)}}}function ou(t){return`${t.name}!${t.options.appId}`}/**
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
 */const L_=1024,B_=30;class H_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>B_){const o=U_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gl(),{heartbeatsToSend:s,unsentEntries:i}=W_(this._heartbeatsCache.heartbeats),r=Js(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return xt.warn(n),""}}}function Gl(){return new Date().toISOString().substring(0,10)}function W_(t,e=L_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Kl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class V_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cp()?Ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await F_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kl(t){return Js(JSON.stringify({version:2,heartbeats:t})).length}function U_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function j_(t){ti(new cs("platform-logger",e=>new Jp(e),"PRIVATE")),ti(new cs("heartbeat",e=>new H_(e),"PRIVATE")),gn(Br,Ul,t),gn(Br,Ul,"esm2017"),gn("fire-js","")}j_("");var $_="firebase",G_="11.4.0";/**
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
 */gn($_,G_,"app");var zl={};const Yl="@firebase/database",ql="1.0.13";/**
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
 */let lu="";function K_(t){lu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new z_(e)}}catch{}return new Y_},Kt=cu("localStorage"),q_=cu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new tu("@firebase/database"),Q_=function(){let t=1;return function(){return t++}}(),au=function(t){const e=Pp(t),n=new Ap;n.update(e);const s=n.digest();return yo.encodeByteArray(s)},Cs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Cs.apply(null,s):typeof s=="object"?e+=xe(s):e+=s,e+=" "}return e};let Qn=null,Ql=!0;const J_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),mn.logLevel=ce.VERBOSE,Qn=mn.log.bind(mn)},Te=function(...t){if(Ql===!0&&(Ql=!1,Qn===null&&q_.get("logging_enabled")===!0&&J_()),Qn){const e=Cs.apply(null,t);Qn(e)}},Es=function(t){return function(...e){Te(t,...e)}},Vr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cs(...t);mn.error(e)},yt=function(...t){const e=`FIREBASE FATAL ERROR: ${Cs(...t)}`;throw mn.error(e),new Error(e)},Le=function(...t){const e="FIREBASE WARNING: "+Cs(...t);mn.warn(e)},X_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Z_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bn="[MIN_NAME]",Xt="[MAX_NAME]",Tn=function(t,e){if(t===e)return 0;if(t===bn||e===Xt)return-1;if(e===bn||t===Xt)return 1;{const n=Jl(t),s=Jl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},eg=function(t,e){return t===e?0:t<e?-1:1},Fn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Co=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=xe(e[s]),n+=":",n+=Co(t[e[s]]);return n+="}",n},hu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fu=function(t){T(!uu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},tg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ng=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ig=new RegExp("^-?(0*)\\d{1,10}$"),rg=-2147483648,og=2147483647,Jl=function(t){if(ig.test(t)){const e=Number(t);if(e>=rg&&e<=og)return e}return null},Rn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Le("Exception was thrown by user callback.",n),e},Math.floor(0))}},lg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,N_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class Vs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="5",du="v",pu="s",_u="r",gu="f",mu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xu="ls",yu="p",Ur="ac",vu="websocket",bu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ug(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Eu(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===vu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ug(t)&&(n.ns=t.namespace);const i=[];return Be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return up(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={},pr={};function Io(t){const e=t.toString();return dr[e]||(dr[e]=new hg),dr[e]}function fg(t,e){const n=t.toString();return pr[n]||(pr[n]=e()),pr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="start",pg="close",_g="pLPCommand",gg="pRTLPCB",Iu="id",wu="pw",Su="ser",mg="cb",xg="seg",yg="ts",vg="d",bg="dframe",Tu=1870,Ru=30,Cg=Tu-Ru,Eg=25e3,Ig=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=Io(n),this.urlFn=c=>(this.appCheckToken&&(c[Ur]=this.appCheckToken),Eu(n,bu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ig)),Z_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xl)this.id=l,this.password=c;else if(o===pg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Xl]="t",s[Su]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[du]=Eo,this.transportSessionId&&(s[pu]=this.transportSessionId),this.lastSessionId&&(s[xu]=this.lastSessionId),this.applicationId&&(s[yu]=this.applicationId),this.appCheckToken&&(s[Ur]=this.appCheckToken),typeof location<"u"&&location.hostname&&mu.test(location.hostname)&&(s[_u]=gu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tg()&&!ng()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ya(n),i=hu(s,Cg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bg]="t",s[Iu]=e,s[wu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Q_(),window[_g+this.uniqueCallbackIdentifier]=e,window[gg+this.uniqueCallbackIdentifier]=n,this.myIFrame=wo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Iu]=this.myID,e[wu]=this.myPW,e[Su]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ru+s.length<=Tu;){const o=this.pendingSegs.shift();s=s+"&"+xg+i+"="+o.seg+"&"+yg+i+"="+o.ts+"&"+vg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Eg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=16384,Sg=45e3;let ni=null;typeof MozWebSocket<"u"?ni=MozWebSocket:typeof WebSocket<"u"&&(ni=WebSocket);class Qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=Io(n),this.connURL=Qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[du]=Eo,typeof location<"u"&&location.hostname&&mu.test(location.hostname)&&(o[_u]=gu),n&&(o[pu]=n),s&&(o[xu]=s),i&&(o[Ur]=i),r&&(o[yu]=r),Eu(e,vu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;bp(),this.mySock=new ni(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ni!==null&&!Qe.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hu(n,wg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static get ALL_TRANSPORTS(){return[hn,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Qe&&Qe.isAvailable();let s=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qe];else{const i=this.transports_=[];for(const r of us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=6e4,Rg=5e3,Ng=10*1024,Ag=100*1024,_r="t",Zl="d",Pg="s",ec="r",Dg="e",tc="o",nc="a",sc="n",ic="p",Og="h";class kg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Jn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ag?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ng?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_r in e){const n=e[_r];n===nc?this.upgradeIfSecondaryHealthy_():n===ec?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ic,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fn(_r,e);if(Zl in e){const s=e[Zl];if(n===Og){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===sc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Pg?this.onConnectionShutdown_(s):n===ec?this.onReset_(s):n===Dg?Vr("Server Error: "+s):n===tc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Eo!==s&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Jn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Rg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ic,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Au{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Au{static getInstance(){return new si}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=32,oc=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ie("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function Pu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Mg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Du(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ou(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ie(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Oe(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function So(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Fg{constructor(e,n){this.errorPrefix_=n,this.parts_=Du(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hi(this.parts_[s]);ku(this)}}function Lg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hi(e),ku(t)}function Bg(t){const e=t.parts_.pop();t.byteLength_-=Hi(e),t.parts_.length>0&&(t.byteLength_-=1)}function ku(t){if(t.byteLength_>oc)throw new Error(t.errorPrefix_+"has a key path longer than "+oc+" bytes ("+t.byteLength_+").");if(t.parts_.length>rc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rc+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Au{static getInstance(){return new To}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=1e3,Hg=60*5*1e3,lc=30*1e3,Wg=1.3,Vg=3e4,Ug="server_kill",cc=3;class mt extends Nu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=mt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ln,this.maxReconnectDelay_=Hg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");To.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&si.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(xe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Bi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;mt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Rp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Tp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vr("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Vg&&(this.reconnectDelay_=Ln),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(f){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,l=new kg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{Le(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ug)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Le(f),c())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ll(this.interruptReasons_)&&(this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Co(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cc&&(this.reconnectDelay_=lc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lu.replace(/\./g,"-")]=1,Xa()?e["framework.cordova"]=1:vp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=si.getInstance().currentlyOnline();return Ll(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(bn,e),i=new G(bn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;class Mu extends Wi{static get __EMPTY_NODE(){return ks}static set __EMPTY_NODE(e){ks=e}compare(e,n){return Tn(e.name,n.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Xt,ks)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,ks)}toString(){return".key"}}const xn=new Mu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??be.RED,this.left=i??Fe.EMPTY_NODE,this.right=r??Fe.EMPTY_NODE}copy(e,n,s,i,r){return new be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class jg{copy(e,n,s,i,r){return this}insert(e,n,s){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ms(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new jg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e){return Tn(t.name,e.name)}function Ro(t,e){return Tn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr;function Gg(t){jr=t}const Fu=function(t){return typeof t=="number"?"number:"+fu(t):"string:"+t},Lu=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else T(t===jr||t.isEmpty(),"priority of unexpected type.");T(t===jr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;class ve{static set __childrenNodeConstructor(e){ac=e}static get __childrenNodeConstructor(){return ac}constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:$(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fu(this.value_):e+=this.value_,this.lazyHash_=au(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu,Hu;function Kg(t){Bu=t}function zg(t){Hu=t}class Yg extends Wi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Xt,new ve("[PRIORITY-POST]",Hu))}makePost(e,n){const s=Bu(e);return new G(n,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new Yg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=Math.log(2);class Qg{constructor(e){const n=r=>parseInt(Math.log(r)/qg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ii=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let f,g;if(u===0)return null;if(u===1)return f=t[c],g=n?n(f):f,new be(g,f.node,be.BLACK,null,null);{const x=parseInt(u/2,10)+c,I=i(c,x),k=i(x+1,a);return f=t[x],g=n?n(f):f,new be(g,f.node,be.BLACK,I,k)}},r=function(c){let a=null,u=null,f=t.length;const g=function(I,k){const j=f-I,U=f;f-=I;const q=i(j+1,U),Z=t[j],F=n?n(Z):Z;x(new be(F,Z.node,k,null,q))},x=function(I){a?(a.left=I,a=I):(u=I,a=I)};for(let I=0;I<c.count;++I){const k=c.nextBitIsOne(),j=Math.pow(2,c.count-(I+1));k?g(j,be.BLACK):(g(j,be.BLACK),g(j,be.RED))}return u},o=new Qg(t.length),l=r(o);return new Fe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;const ln={};class gt{static get Default(){return T(ln&&de,"ChildrenNode.ts has not been loaded"),gr=gr||new gt({".priority":ln},{".priority":de}),gr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ii(s,e.getCompare()):l=ln;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new gt(u,a)}addToIndexes(e,n){const s=Xs(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ln)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ii(l,o.getCompare())}else return ln;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Xs(this.indexes_,i=>{if(i===ln)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new gt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;class B{static get EMPTY_NODE(){return Bn||(Bn=new B(new Fe(Ro),null,gt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Lu(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{T($(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fu(this.getPriority().val())+":"),this.forEachChild(de,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":au(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Is?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(de),i=n.getIterator(de);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Jg extends B{constructor(){super(new Fe(Ro),B.EMPTY_NODE,gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Is=new Jg;Object.defineProperties(G,{MIN:{value:new G(bn,B.EMPTY_NODE)},MAX:{value:new G(Xt,Is)}});Mu.__EMPTY_NODE=B.EMPTY_NODE;ve.__childrenNodeConstructor=B;Gg(Is);zg(Is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=!0;function Ce(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ce(e))}if(!(t instanceof Array)&&Xg){const n=[];let s=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ce(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return B.EMPTY_NODE;const r=ii(n,$g,o=>o.name,Ro);if(s){const o=ii(n,de.getCompare());return new B(r,Ce(e),new gt({".priority":o},{".priority":de}))}else return new B(r,Ce(e),gt.Default)}else{let n=B.EMPTY_NODE;return Be(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}Kg(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Wi{constructor(e){super(),this.indexPath_=e,T(!K(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Is);return new G(Xt,e)}toString(){return Du(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em extends Wi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Tn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=Ce(e);return new G(n,s)}toString(){return".value"}}const tm=new em;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){return{type:"value",snapshotNode:t}}function Cn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Cn(n,s)):o.trackChildChange(fs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{n.hasChild(i)||s.trackChildChange(hs(i,r))}),n.isLeafNode()||n.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fs(i,r,o))}else s.trackChildChange(Cn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.indexedFilter_=new No(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ds.getStartPost_(e),this.endPost_=ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,x)=>f(x,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const f=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(u&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(fs(n,s,f)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(hs(n,f));const k=l.updateImmediateChild(n,B.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(Cn(g.name,g.node)),k.updateImmediateChild(g.name,g.node)):k}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(hs(a.name,a.node)),r.trackChildChange(Cn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Ao;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function im(t){return t.loadsAllData()?new No(t.getIndex()):t.hasLimit()?new sm(t):new ds(t)}function uc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===tm?n="$value":t.index_===xn?n="$key":(T(t.index_ instanceof Zg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=xe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+xe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=xe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Nu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ri.getListenId_(e,s),l={};this.listens_[o]=l;const c=uc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let f=u;if(a===404&&(f=null,a=null),a===null&&this.onDataUpdate_(r,f,!1,s),vn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ri.getListenId_(e,n);delete this.listens_[s]}get(e){const n=uc(e._queryParams),s=e._path.toString(),i=new Bi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Np(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ls(l.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return{value:null,children:new Map}}function Vu(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,oi());const i=t.children.get(s);e=ae(e),Vu(i,e,n)}}function $r(t,e,n){t.value!==null?n(e,t.value):om(t,(s,i)=>{const r=new ie(e.toString()+"/"+s);$r(i,r,n)})}function om(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=10*1e3,cm=30*1e3,am=5*60*1e3;class um{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new lm(e);const s=fc+(cm-fc)*Math.random();Jn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Be(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Jn(this.reportStats_.bind(this),Math.floor(Math.random()*2*am))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Uu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Po(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Do(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=Uu()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new li(X(),n,this.revert)}}else return T($(this.path)===e,"operationForChild called for unrelated child."),new li(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new ps(this.source,X()):new ps(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return K(this.path)?new Zt(this.source,X(),this.snap.getImmediateChild(e)):new Zt(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Zt(this.source,X(),n.value):new _s(this.source,X(),n)}else return T($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(nm(o.childName,o.snapshotNode))}),Hn(t,i,"child_removed",e,s,n),Hn(t,i,"child_added",e,s,n),Hn(t,i,"child_moved",r,s,n),Hn(t,i,"child_changed",e,s,n),Hn(t,i,"value",e,s,n),i}function Hn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>pm(t,l,c)),o.forEach(l=>{const c=dm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function dm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pm(t,e,n){if(e.childName==null||n.childName==null)throw wn("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e){return{eventCache:t,serverCache:e}}function Xn(t,e,n,s){return Vi(new Ot(e,n,s),t.serverCache)}function ju(t,e,n,s){return Vi(t.eventCache,new Ot(e,n,s))}function ci(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function en(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr;const _m=()=>(mr||(mr=new Fe(eg)),mr);class ue{static fromObject(e){let n=new ue(null);return Be(e,(s,i)=>{n=n.set(new ie(s),i)}),n}constructor(e,n=_m()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(K(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:ye(new ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new ue(null)}}set(e,n){if(K(e))return new ue(n,this.children);{const s=$(e),r=(this.children.get(s)||new ue(null)).set(ae(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(K(e))return n;{const s=$(e),r=(this.children.get(s)||new ue(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),ye(n,i),s):new ue(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ue(null))}}function Zn(t,e,n){if(K(e))return new et(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Oe(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function dc(t,e,n){let s=t;return Be(n,(i,r)=>{s=Zn(s,ye(e,i),r)}),s}function pc(t,e){if(K(e))return et.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new et(n)}}function Gr(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function _c(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function At(t,e){if(K(e))return t;{const n=sn(t,e);return n!=null?new et(new ue(n)):new et(t.writeTree_.subtree(e))}}function Kr(t){return t.writeTree_.isEmpty()}function En(t,e){return $u(X(),t.writeTree_,e)}function $u(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=$u(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e){return Yu(e,t)}function gm(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zn(t.visibleWrites,e,n)),t.lastWriteId=s}function mm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function xm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ym(l,s.path)?i=!1:Je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return vm(t),!0;if(s.snap)t.visibleWrites=pc(t.visibleWrites,s.path);else{const l=s.children;Be(l,c=>{t.visibleWrites=pc(t.visibleWrites,ye(s.path,c))})}return!0}else return!1}function ym(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(ye(t.path,n),e))return!0;return!1}function vm(t){t.visibleWrites=Gu(t.allWrites,bm,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bm(t){return t.visible}function Gu(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Je(n,o)?(l=Oe(n,o),s=Zn(s,l,r.snap)):Je(o,n)&&(l=Oe(o,n),s=Zn(s,X(),r.snap.getChild(l)));else if(r.children){if(Je(n,o))l=Oe(n,o),s=dc(s,l,r.children);else if(Je(o,n))if(l=Oe(o,n),K(l))s=dc(s,X(),r.children);else{const c=vn(r.children,$(l));if(c){const a=c.getChild(ae(l));s=Zn(s,X(),a)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function Ku(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=At(t.visibleWrites,e);if(Kr(o))return n;if(n==null&&!Gr(o,X()))return null;{const l=n||B.EMPTY_NODE;return En(o,l)}}}else{const r=At(t.visibleWrites,e);if(!i&&Kr(r))return n;if(!i&&n==null&&!Gr(r,X()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Je(a.path,e)||Je(e,a.path))},l=Gu(t.allWrites,o,e),c=n||B.EMPTY_NODE;return En(l,c)}}}function Cm(t,e,n){let s=B.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=At(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const c=En(At(r,new ie(o)),l);s=s.updateImmediateChild(o,c)}),_c(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(t.visibleWrites,e);return _c(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Em(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Gr(t.visibleWrites,r))return null;{const o=At(t.visibleWrites,r);return Kr(o)?i.getChild(n):En(o,i.getChild(n))}}function Im(t,e,n,s){const i=ye(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=At(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function wm(t,e){return sn(t.visibleWrites,e)}function Sm(t,e,n,s,i,r,o){let l;const c=At(t.visibleWrites,e),a=sn(c,X());if(a!=null)l=a;else if(n!=null)l=En(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&u.length<i;)f(x,s)!==0&&u.push(x),x=g.getNext();return u}else return[]}function Tm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function ai(t,e,n,s){return Ku(t.writeTree,t.treePath,e,n,s)}function Oo(t,e){return Cm(t.writeTree,t.treePath,e)}function gc(t,e,n,s){return Em(t.writeTree,t.treePath,e,n,s)}function ui(t,e){return wm(t.writeTree,ye(t.treePath,e))}function Rm(t,e,n,s,i,r){return Sm(t.writeTree,t.treePath,e,n,s,i,r)}function ko(t,e,n){return Im(t.writeTree,t.treePath,e,n)}function zu(t,e){return Yu(ye(t.treePath,e),t.writeTree)}function Yu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Cn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fs(s,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const qu=new Am;class Mo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ko(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=Rm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){return{filter:t}}function Dm(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Om(t,e,n,s,i){const r=new Nm;let o,l;if(n.type===Xe.OVERWRITE){const a=n;a.source.fromUser?o=zr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!K(a.path),o=hi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const a=n;a.source.fromUser?o=Mm(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Yr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const a=n;a.revert?o=Bm(t,e,a.path,s,i,r):o=Fm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Lm(t,e,n.path,s,r);else throw wn("Unknown operation type: "+n.type);const c=r.getChanges();return km(e,o,c),{viewCache:o,changes:c}}function km(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ci(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Wu(ci(e)))}}function Qu(t,e,n,s,i,r){const o=e.eventCache;if(ui(s,n)!=null)return e;{let l,c;if(K(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=en(e),u=a instanceof B?a:B.EMPTY_NODE,f=Oo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const a=ai(s,en(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){T(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const f=gc(s,n,u,c);f!=null?l=t.filter.updatePriority(u,f):l=o.getNode()}else{const u=ae(n);let f;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=gc(s,n,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(a).updateChild(u,g):f=o.getNode().getImmediateChild(a)}else f=ko(s,a,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),a,f,u,i,r):l=o.getNode()}}return Xn(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function hi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),x,null)}else{const x=$(n);if(!c.isCompleteForPath(n)&&Dt(n)>1)return e;const I=ae(n),j=c.getNode().getImmediateChild(x).updateChild(I,s);x===".priority"?a=u.updatePriority(c.getNode(),j):a=u.updateChild(c.getNode(),x,j,I,qu,null)}const f=ju(e,a,c.isFullyInitialized()||K(n),u.filtersNodes()),g=new Mo(i,f,r);return Qu(t,f,n,i,g,l)}function zr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Mo(i,e,r);if(K(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Xn(e,a,!0,t.filter.filtersNodes());else{const f=$(n);if(f===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Xn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ae(n),x=l.getNode().getImmediateChild(f);let I;if(K(g))I=s;else{const k=u.getCompleteChild(f);k!=null?Pu(g)===".priority"&&k.getChild(Ou(g)).isEmpty()?I=k:I=k.updateChild(g,s):I=B.EMPTY_NODE}if(x.equals(I))c=e;else{const k=t.filter.updateChild(l.getNode(),f,I,g,u,o);c=Xn(e,k,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function mc(t,e){return t.eventCache.isCompleteForChild(e)}function Mm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=ye(n,c);mc(e,$(u))&&(l=zr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=ye(n,c);mc(e,$(u))||(l=zr(t,l,u,a,i,r,o))}),l}function xc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Yr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;K(n)?a=s:a=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((f,g)=>{if(u.hasChild(f)){const x=e.serverCache.getNode().getImmediateChild(f),I=xc(t,x,g);c=hi(t,c,new ie(f),I,i,r,o,l)}}),a.children.inorderTraversal((f,g)=>{const x=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!u.hasChild(f)&&!x){const I=e.serverCache.getNode().getImmediateChild(f),k=xc(t,I,g);c=hi(t,c,new ie(f),k,i,r,o,l)}}),c}function Fm(t,e,n,s,i,r,o){if(ui(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return hi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new ue(null);return c.getNode().forEachChild(xn,(u,f)=>{a=a.set(new ie(u),f)}),Yr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ue(null);return s.foreach((u,f)=>{const g=ye(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Yr(t,e,n,a,i,r,l,o)}}function Lm(t,e,n,s,i){const r=e.serverCache,o=ju(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Qu(t,o,n,s,qu,i)}function Bm(t,e,n,s,i,r){let o;if(ui(s,n)!=null)return e;{const l=new Mo(s,e,i),c=e.eventCache.getNode();let a;if(K(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ai(s,en(e));else{const f=e.serverCache.getNode();T(f instanceof B,"serverChildren would be complete if leaf node"),u=Oo(s,f)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let f=ko(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=c.getImmediateChild(u)),f!=null?a=t.filter.updateChild(c,u,f,ae(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,B.EMPTY_NODE,ae(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ai(s,en(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ui(s,X())!=null,Xn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new No(s.getIndex()),r=im(s);this.processor_=Pm(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Ot(c,o.isFullyInitialized(),i.filtersNodes()),f=new Ot(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vi(f,u),this.eventGenerator_=new hm(this.query_)}get query(){return this.query_}}function Wm(t){return t.viewCache_.serverCache.getNode()}function Vm(t){return ci(t.viewCache_)}function Um(t,e){const n=en(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function yc(t){return t.eventRegistrations_.length===0}function jm(t,e){t.eventRegistrations_.push(e)}function vc(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function bc(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(T(en(t.viewCache_),"We should always have a full cache before handling merges"),T(ci(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Om(t.processor_,i,e,n,s);return Dm(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ju(t,r.changes,r.viewCache.eventCache.getNode(),null)}function $m(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{s.push(Cn(r,o))}),n.isFullyInitialized()&&s.push(Wu(n.getNode())),Ju(t,s,n.getNode(),e)}function Ju(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return fm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;class Xu{constructor(){this.views=new Map}}function Gm(t){T(!fi,"__referenceConstructor has already been defined"),fi=t}function Km(){return T(fi,"Reference.ts has not been loaded"),fi}function zm(t){return t.views.size===0}function Fo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),bc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(bc(o,e,n,s));return r}}function Zu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ai(n,i?s:null),c=!1;l?c=!0:s instanceof B?(l=Oo(n,s),c=!1):(l=B.EMPTY_NODE,c=!1);const a=Vi(new Ot(l,c,!1),new Ot(s,i,!1));return new Hm(e,a)}return o}function Ym(t,e,n,s,i,r){const o=Zu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jm(o,n),$m(o,n)}function qm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=kt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(vc(a,n,s)),yc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(vc(c,n,s)),yc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!kt(t)&&r.push(new(Km())(e._repo,e._path)),{removed:r,events:o}}function eh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pt(t,e){let n=null;for(const s of t.views.values())n=n||Um(s,e);return n}function th(t,e){if(e._queryParams.loadsAllData())return ji(t);{const s=e._queryIdentifier;return t.views.get(s)}}function nh(t,e){return th(t,e)!=null}function kt(t){return ji(t)!=null}function ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;function Qm(t){T(!di,"__referenceConstructor has already been defined"),di=t}function Jm(){return T(di,"Reference.ts has not been loaded"),di}let Xm=1;class Cc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Tm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sh(t,e,n,s,i){return gm(t.pendingWriteTree_,e,n,s,i),i?Ss(t,new Zt(Uu(),e,n)):[]}function zt(t,e,n=!1){const s=mm(t.pendingWriteTree_,e);if(xm(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(X(),!0):Be(s.children,o=>{r=r.set(new ie(o),!0)}),Ss(t,new li(s.path,r,n))}else return[]}function ws(t,e,n){return Ss(t,new Zt(Po(),e,n))}function Zm(t,e,n){const s=ue.fromObject(n);return Ss(t,new _s(Po(),e,s))}function e0(t,e){return Ss(t,new ps(Po(),e))}function t0(t,e,n){const s=Bo(t,n);if(s){const i=Ho(s),r=i.path,o=i.queryId,l=Oe(r,e),c=new ps(Do(o),l);return Wo(t,r,c)}else return[]}function pi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||nh(o,e))){const c=qm(o,e,n,s);zm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(g,x)=>kt(x));if(u&&!f){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=i0(g);for(let I=0;I<x.length;++I){const k=x[I],j=k.query,U=lh(t,k);t.listenProvider_.startListening(es(j),gs(t,j),U.hashFn,U.onComplete)}}}!f&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(es(e),null):a.forEach(g=>{const x=t.queryToTagMap.get($i(g));t.listenProvider_.stopListening(es(g),x)}))}r0(t,a)}return l}function ih(t,e,n,s){const i=Bo(t,s);if(i!=null){const r=Ho(i),o=r.path,l=r.queryId,c=Oe(o,e),a=new Zt(Do(l),c,n);return Wo(t,o,a)}else return[]}function n0(t,e,n,s){const i=Bo(t,s);if(i){const r=Ho(i),o=r.path,l=r.queryId,c=Oe(o,e),a=ue.fromObject(n),u=new _s(Do(l),c,a);return Wo(t,o,u)}else return[]}function qr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const I=Oe(g,i);r=r||Pt(x,I),o=o||kt(x)});let l=t.syncPointTree_.get(i);l?(o=o||kt(l),r=r||Pt(l,X())):(l=new Xu,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,I)=>{const k=Pt(I,X());k&&(r=r.updateImmediateChild(x,k))}));const a=nh(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=$i(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=o0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const u=Ui(t.pendingWriteTree_,i);let f=Ym(l,e,n,u,r,c);if(!a&&!o&&!s){const g=th(l,e);f=f.concat(l0(t,e,g))}return f}function Lo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Oe(o,e),a=Pt(l,c);if(a)return a});return Ku(i,e,r,n,!0)}function s0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const f=Oe(a,n);s=s||Pt(u,f)});let i=t.syncPointTree_.get(n);i?s=s||Pt(i,X()):(i=new Xu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ot(s,!0,!1):null,l=Ui(t.pendingWriteTree_,e._path),c=Zu(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return Vm(c)}function Ss(t,e){return rh(e,t.syncPointTree_,null,Ui(t.pendingWriteTree_,X()))}function rh(t,e,n,s){if(K(t.path))return oh(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=Pt(i,X()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=zu(s,o);r=r.concat(rh(l,c,a,u))}return i&&(r=r.concat(Fo(i,t,s,n))),r}}function oh(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=Pt(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=zu(s,o),u=t.operationForChild(o);u&&(r=r.concat(oh(u,l,c,a)))}),i&&(r=r.concat(Fo(i,t,s,n))),r}function lh(t,e){const n=e.query,s=gs(t,n);return{hashFn:()=>(Wm(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?t0(t,n._path,s):e0(t,n._path);{const r=sg(i,n);return pi(t,n,null,r)}}}}function gs(t,e){const n=$i(e);return t.queryToTagMap.get(n)}function $i(t){return t._path.toString()+"$"+t._queryIdentifier}function Bo(t,e){return t.tagToQueryMap.get(e)}function Ho(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Wo(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Ui(t.pendingWriteTree_,e);return Fo(s,n,i,null)}function i0(t){return t.fold((e,n,s)=>{if(n&&kt(n))return[ji(n)];{let i=[];return n&&(i=eh(n)),Be(s,(r,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Jm())(t._repo,t._path):t}function r0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$i(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function o0(){return Xm++}function l0(t,e,n){const s=e._path,i=gs(t,e),r=lh(t,n),o=t.listenProvider_.startListening(es(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!kt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,f)=>{if(!K(a)&&u&&kt(u))return[ji(u).query];{let g=[];return u&&(g=g.concat(eh(u).map(x=>x.query))),Be(f,(x,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(es(u),gs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vo(n)}node(){return this.node_}}class Uo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Uo(this.syncTree_,n)}node(){return Lo(this.syncTree_,this.path_)}}const c0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ec=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return a0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return u0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},a0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},u0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},h0=function(t,e,n,s){return jo(e,new Uo(n,t),s)},ch=function(t,e,n){return jo(t,new Vo(e),n)};function jo(t,e,n){const s=t.getPriority().val(),i=Ec(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ec(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(de,(l,c)=>{const a=jo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Go(t,e){let n=e instanceof ie?e:new ie(e),s=t,i=$(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new $o(i,s,r),n=ae(n),i=$(n)}return s}function Nn(t){return t.node.value}function ah(t,e){t.node.value=e,Qr(t)}function uh(t){return t.node.childCount>0}function f0(t){return Nn(t)===void 0&&!uh(t)}function Gi(t,e){Be(t.node.children,(n,s)=>{e(new $o(n,t,s))})}function hh(t,e,n,s){n&&e(t),Gi(t,i=>{hh(i,e,!0)})}function d0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ts(t){return new ie(t.parent===null?t.name:Ts(t.parent)+"/"+t.name)}function Qr(t){t.parent!==null&&p0(t.parent,t.name,t)}function p0(t,e,n){const s=f0(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Qr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=/[\[\].#$\/\u0000-\u001F\u007F]/,g0=/[\[\].#$\u0000-\u001F\u007F]/,xr=10*1024*1024,fh=function(t){return typeof t=="string"&&t.length!==0&&!_0.test(t)},dh=function(t){return typeof t=="string"&&t.length!==0&&!g0.test(t)},m0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dh(t)},x0=function(t,e,n,s){Ko(vo(t,"value"),e,n)},Ko=function(t,e,n){const s=n instanceof ie?new Fg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(uu(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>xr/3&&Hi(e)>xr)throw new Error(t+"contains a string greater than "+xr+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!fh(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Lg(s,o),Ko(t,l,s),Bg(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},ph=function(t,e,n,s){if(!dh(n))throw new Error(vo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},y0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ph(t,e,n)},_h=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},v0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!m0(n))throw new Error(vo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!So(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function gh(t,e,n){zo(t,n),mh(t,s=>So(s,e))}function ut(t,e,n){zo(t,n),mh(t,s=>Je(s,e)||Je(e,s))}function mh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(C0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function C0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Qn&&Te("event: "+n.toString()),Rn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="repo_interrupt",I0=25;class w0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oi(),this.transactionQueueTree_=new $o,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function S0(t,e,n){if(t.stats_=Io(t.repoInfo_),t.forceRestClient_||lg())t.server_=new ri(t.repoInfo_,(s,i,r,o)=>{Ic(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new mt(t.repoInfo_,e,(s,i,r,o)=>{Ic(t,s,i,r,o)},s=>{wc(t,s)},s=>{R0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=fg(t.repoInfo_,()=>new um(t.stats_,t.server_)),t.infoData_=new rm,t.infoSyncTree_=new Cc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=ws(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),qo(t,"connected",!1),t.serverSyncTree_=new Cc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ut(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function T0(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yo(t){return c0({timestamp:T0(t)})}function Ic(t,e,n,s,i){t.dataUpdateCount++;const r=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Xs(n,a=>Ce(a));o=n0(t.serverSyncTree_,r,c,i)}else{const c=Ce(n);o=ih(t.serverSyncTree_,r,c,i)}else if(s){const c=Xs(n,a=>Ce(a));o=Zm(t.serverSyncTree_,r,c)}else{const c=Ce(n);o=ws(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=zi(t,r)),ut(t.eventQueue_,l,o)}function wc(t,e){qo(t,"connected",e),e===!1&&P0(t)}function R0(t,e){Be(e,(n,s)=>{qo(t,n,s)})}function qo(t,e,n){const s=new ie("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=ws(t.infoSyncTree_,s,i);ut(t.eventQueue_,s,r)}function xh(t){return t.nextWriteId_++}function N0(t,e,n){const s=s0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());qr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ws(t.serverSyncTree_,e._path,r);else{const l=gs(t.serverSyncTree_,e);o=ih(t.serverSyncTree_,e._path,r,l)}return ut(t.eventQueue_,e._path,o),pi(t.serverSyncTree_,e,n,null,!0),r},i=>(Ki(t,"get for query "+xe(e)+" failed: "+i),Promise.reject(new Error(i))))}function A0(t,e,n,s,i){Ki(t,"set",{path:e.toString(),value:n,priority:s});const r=Yo(t),o=Ce(n,s),l=Lo(t.serverSyncTree_,e),c=ch(o,l,r),a=xh(t),u=sh(t.serverSyncTree_,e,c,a,!0);zo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const I=g==="ok";I||Le("set at "+e+" failed: "+g);const k=zt(t.serverSyncTree_,a,!I);ut(t.eventQueue_,e,k),k0(t,i,g,x)});const f=Eh(t,e);zi(t,f),ut(t.eventQueue_,f,[])}function P0(t){Ki(t,"onDisconnectEvents");const e=Yo(t),n=oi();$r(t.onDisconnect_,X(),(i,r)=>{const o=h0(i,r,t.serverSyncTree_,e);Vu(n,i,o)});let s=[];$r(n,X(),(i,r)=>{s=s.concat(ws(t.serverSyncTree_,i,r));const o=Eh(t,i);zi(t,o)}),t.onDisconnect_=oi(),ut(t.eventQueue_,X(),s)}function D0(t,e,n){let s;$(e._path)===".info"?s=qr(t.infoSyncTree_,e,n):s=qr(t.serverSyncTree_,e,n),gh(t.eventQueue_,e._path,s)}function Sc(t,e,n){let s;$(e._path)===".info"?s=pi(t.infoSyncTree_,e,n):s=pi(t.serverSyncTree_,e,n),gh(t.eventQueue_,e._path,s)}function O0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(E0)}function Ki(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function k0(t,e,n,s){e&&Rn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function yh(t,e,n){return Lo(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Qo(t,e=t.transactionQueueTree_){if(e||Yi(t,e),Nn(e)){const n=bh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&M0(t,Ts(e),n)}else uh(e)&&Gi(e,n=>{Qo(t,n)})}function M0(t,e,n){const s=n.map(a=>a.currentWriteId),i=yh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Oe(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ki(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(zt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Yi(t,Go(t.transactionQueueTree_,e)),Qo(t,t.transactionQueueTree_),ut(t.eventQueue_,e,u);for(let g=0;g<f.length;g++)Rn(f[g])}else{if(a==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Le("transaction at "+c.toString()+" failed: "+a);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=a}zi(t,e)}},o)}function zi(t,e){const n=vh(t,e),s=Ts(n),i=bh(t,n);return F0(t,i,s),s}function F0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Oe(n,c.path);let u=!1,f;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,f=c.abortReason,i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=I0)u=!0,f="maxretry",i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=yh(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Ko("transaction failed: Data returned ",x,c.path);let I=Ce(x);typeof x=="object"&&x!=null&&bt(x,".priority")||(I=I.updatePriority(g.getPriority()));const j=c.currentWriteId,U=Yo(t),q=ch(I,g,U);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=q,c.currentWriteId=xh(t),o.splice(o.indexOf(j),1),i=i.concat(sh(t.serverSyncTree_,c.path,q,c.currentWriteId,c.applyLocally)),i=i.concat(zt(t.serverSyncTree_,j,!0))}else u=!0,f="nodata",i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0))}ut(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}Yi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Rn(s[l]);Qo(t,t.transactionQueueTree_)}function vh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Nn(s)===void 0;)s=Go(s,n),e=ae(e),n=$(e);return s}function bh(t,e){const n=[];return Ch(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ch(t,e,n){const s=Nn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Gi(e,i=>{Ch(t,i,n)})}function Yi(t,e){const n=Nn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ah(e,n.length>0?n:void 0)}Gi(e,s=>{Yi(t,s)})}function Eh(t,e){const n=Ts(vh(t,e)),s=Go(t.transactionQueueTree_,e);return d0(s,i=>{yr(t,i)}),yr(t,s),hh(s,i=>{yr(t,i)}),n}function yr(t,e){const n=Nn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ah(e,void 0):n.length=r+1,ut(t.eventQueue_,Ts(e),i);for(let o=0;o<s.length;o++)Rn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function B0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Le(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tc=function(t,e){const n=H0(t),s=n.namespace;n.domain==="firebase.com"&&yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||X_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ie(n.pathString)}},H0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=L0(t.substring(u,f)));const g=B0(t.substring(Math.min(t.length,f)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class V0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Jo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Pu(this._path)}get ref(){return new Ct(this._repo,this._path)}get _queryIdentifier(){const e=hc(this._queryParams),n=Co(e);return n==="{}"?"default":n}get _queryObject(){return hc(this._queryParams)}isEqual(e){if(e=Sn(e),!(e instanceof Jo))return!1;const n=this._repo===e._repo,s=So(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mg(this._path)}}class Ct extends Jo{constructor(e,n){super(e,n,new Ao,!1)}get parent(){const e=Ou(this._path);return e===null?null:new Ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),s=Jr(this.ref,e);return new ms(this._node.getChild(n),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,Jr(this.ref,s),de)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fs(t,e){return t=Sn(t),t._checkNotDeleted("ref"),e!==void 0?Jr(t._root,e):t._root}function Jr(t,e){return t=Sn(t),$(t._path)===null?y0("child","path",e):ph("child","path",e),new Ct(t._repo,ye(t._path,e))}function U0(t){return _h("remove",t._path),wh(t,null)}function wh(t,e){t=Sn(t),_h("set",t._path),x0("set",e,t._path);const n=new Bi;return A0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function j0(t){t=Sn(t);const e=new Ih(()=>{}),n=new qi(e);return N0(t._repo,t,n).then(s=>new ms(s,new Ct(t._repo,t._path),t._queryParams.getIndex()))}class qi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new W0("value",this,new ms(e.snapshotNode,new Ct(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new V0(this,e,n):null}matches(e){return e instanceof qi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,f)=>{Sc(t._repo,t,l),c(u,f)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Ih(n,r||void 0),l=new qi(o);return D0(t._repo,t,l),()=>Sc(t._repo,t,l)}function G0(t,e,n,s){return $0(t,"value",e,n,s)}Gm(Ct);Qm(Ct);/**
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
 */const K0="FIREBASE_DATABASE_EMULATOR_HOST",Xr={};let z0=!1;function Y0(t,e,n,s){t.repoInfo_=new Cu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function q0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tc(r,i),l=o.repoInfo,c;typeof process<"u"&&zl&&(c=zl[K0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Tc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new ag(t.name,t.options,e);v0("Invalid Firebase Database URL",o),K(o.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=J0(l,t,a,new cg(t,n));return new X0(u,t)}function Q0(t,e){const n=Xr[e];(!n||n[t.key]!==t)&&yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),O0(t),delete n[t.key]}function J0(t,e,n,s){let i=Xr[e.name];i||(i={},Xr[e.name]=i);let r=i[t.toURLString()];return r&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new w0(t,z0,n,s),i[t.toURLString()]=r,r}class X0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(S0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ct(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Q0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function Z0(t=O_(),e){const n=R_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=mp("database");s&&ex(n,...s)}return n}function ex(t,e,n,s={}){t=Sn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Zs(s,r.repoInfo_.emulatorOptions))return;yt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Vs(Vs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:xp(s.mockUserToken,t.app.options.projectId);o=new Vs(l)}Y0(r,i,s,o)}/**
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
 */function tx(t){K_(D_),ti(new cs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return q0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(Yl,ql,t),gn(Yl,ql,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tx();const cn=_i;(function(t,e){const n=_i,s=t();for(;;)try{if(parseInt(n(105))/1*(-parseInt(n(113))/2)+-parseInt(n(106))/3+parseInt(n(116))/4+parseInt(n(114))/5+-parseInt(n(103))/6*(parseInt(n(117))/7)+parseInt(n(109))/8+parseInt(n(107))/9*(parseInt(n(115))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,423498);function _i(t,e){const n=gi();return _i=function(s,i){return s=s-102,n[s]},_i(t,e)}function gi(){const t=["5022736SuqMIW","G-3RRDNZ9ME5","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","1:720775593565:web:1a263bf6a87ecfea3817b4","4TiWGob","2660510ttqVWA","10hLlOKB","88580AGJKli","56KvTThW","iamwait.firebasestorage.app","135006mCBvMx","iamwait","390533KYMGTc","954255XCZfOX","4685112MuwZUI","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app"];return gi=function(){return t},gi()}const nx={apiKey:cn(111),authDomain:"iamwait.firebaseapp.com",databaseURL:cn(108),projectId:cn(104),storageBucket:cn(102),messagingSenderId:"720775593565",appId:cn(112),measurementId:cn(110)},sx=iu(nx),Ls=Z0(sx),Gt=xs;(function(t,e){const n=xs,s=t();for(;;)try{if(parseInt(n(235))/1*(parseInt(n(256))/2)+parseInt(n(266))/3*(parseInt(n(252))/4)+parseInt(n(258))/5+parseInt(n(267))/6*(-parseInt(n(251))/7)+parseInt(n(261))/8+-parseInt(n(246))/9+parseInt(n(250))/10*(-parseInt(n(240))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(mi,494849);function xs(t,e){const n=mi();return xs=function(s,i){return s=s-234,n[s]},xs(t,e)}function mi(){const t=["YMvPX","val","log","fbStore2","3yqfpky","48cpuRBt"," : данные не найдены","oYclf","RsDZg","167qPAAsh"," удалены!","EJQoq","Данные ","zqYyv","5159891GmdUJW"," = "," -  данные записаны","lookField","yftex","exists","8747487maXhdm","error","%c ",">>> Данные по ","30ERzrie","173243pGVKgi","3250292hdQCys","catch","IfaFd","then","10202DKLaoc","gmnjc","2256260IjyRwY","########### ########## Данные ","GtmaP","7650680tkpBfU"];return mi=function(){return t},mi()}const Xo=op(Gt(265),{state:()=>({gameId:"",myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:0}),actions:{async getField(t){const e=Gt,n={gmnjc:function(i,r){return i(r)},IfaFd:function(i,r){return i+r},RsDZg:e(268),dtpyS:function(i,r,o){return i(r,o)}},s=n.dtpyS(Fs,Ls,t);return j0(s)[e(255)](i=>{const r=e;if(i[r(245)]()){const o=i[r(263)]();return n[r(257)](Wn,n[r(254)](r(249)+t+r(241),JSON.stringify(o))),o}else n[r(257)](Wn,t+n[r(234)])})},async setField(t,e){const n=Gt,s={JzCSF:function(r,o){return r(o)},JvKlC:function(r,o){return r+o},YMvPX:"Ошибка записи данных: ",Otghm:function(r,o,l){return r(o,l)},wWHnV:function(r,o,l){return r(o,l)}},i=s.Otghm(Fs,Ls,t);return s.wWHnV(wh,i,e).then(()=>{const r=xs;s.JzCSF(Wn,s.JvKlC(t,r(242)))})[n(253)](r=>{const o=n;console[o(247)](s[o(262)],r)})},async onValue(t){const e=Gt,n={oYclf:function(i,r){return i(r)},GtmaP:function(i,r,o){return i(r,o)},yftex:function(i,r,o){return i(r,o)}},s=n[e(260)](Fs,Ls,t);n[e(244)](G0,s,i=>{const r=e;n[r(269)](Wn,r(259)+t+" на прослушке"),this[r(243)]=i[r(263)]()})},async removeField(t){const e=Gt,n={EJQoq:function(i,r){return i(r)},zqYyv:function(i,r,o){return i(r,o)}};console[e(264)](t);const s=n[e(239)](Fs,Ls,t);n[e(237)](U0,s)[e(255)](()=>{const i=e;n[i(237)](Wn,i(238)+t+i(236))})}}}),Wn=t=>console[Gt(264)](Gt(248)+t,"color: darkgreen"),vr=xi;(function(t,e){const n=xi,s=t();for(;;)try{if(parseInt(n(397))/1*(-parseInt(n(385))/2)+parseInt(n(369))/3*(-parseInt(n(366))/4)+-parseInt(n(377))/5+parseInt(n(371))/6*(parseInt(n(387))/7)+parseInt(n(395))/8+parseInt(n(382))/9+parseInt(n(400))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,228498);function xi(t,e){const n=yi();return xi=function(s,i){return s=s-365,n[s]},xi(t,e)}function yi(){const t=["zYttk","log","jkLDZ","867895PsSmQR","jiSCH","ListGames","button","gTyQM","844911fZckXn","YFFRE","iMdGU","66aouYMO","rLAyc","14jIJOWN","GrkHS","UANSK","MglPY","DyGgz","div","piJhl","vBbPa","167536WofiYy","gameId","4nxFZDx"," Камень ножницы бумага ","gameChanged","635420GycTiH","OyNgW","1504IjHWaC"," Крестики нолики "," Это бот для игр с соперником. ","18rGlRla","CetAx","678306ZzUUlT","NOipb","MlhrI"];return yi=function(){return t},yi()}const ix=go({__name:vr(379),emits:[vr(399)],setup(t,{emit:e}){const n=vr,s={NOipb:function(l,c){return l(c)},CetAx:n(399),MglPY:function(l){return l()},YFFRE:n(392),DyGgz:" Начальная страница ",piJhl:"Выберите игру",jiSCH:function(l,c,a,u,f){return l(c,a,u,f)},gTyQM:function(l,c,a,u){return l(c,a,u)},GrkHS:n(380),jkLDZ:n(398),zYttk:function(l,c,a,u,f){return l(c,a,u,f)},OyNgW:function(l){return l()},vBbPa:function(l,c,a,u,f){return l(c,a,u,f)},rLAyc:function(l,c,a,u){return l(c,a,u)},iMdGU:" Морской бой ",UANSK:n(368),MlhrI:function(l){return l()}},i=s[n(373)](Xo),r=e;function o(l){const c=n;console[c(375)](l),i[c(396)]="g"+l,s[c(372)](r,s[c(370)])}return(l,c)=>{const a=n;return s[a(390)](fe),me(s[a(383)],null,[c[3]||(c[3]=Ee(s[a(391)])),c[4]||(c[4]=O("h3",null,s[a(393)],-1)),c[5]||(c[5]=s.jiSCH(O,"br",null,null,-1)),s[a(381)](O,s.GrkHS,{onClick:c[0]||(c[0]=u=>o(1))},s[a(376)]),c[6]||(c[6]=s[a(374)](O,"br",null,null,-1)),c[7]||(c[7]=s[a(365)](Ee)),c[8]||(c[8]=s[a(378)](O,"br",null,null,-1)),s.gTyQM(O,s.GrkHS,{onClick:c[1]||(c[1]=u=>o(2))},a(367)),c[9]||(c[9]=s[a(394)](O,"br",null,null,-1)),c[10]||(c[10]=Ee()),c[11]||(c[11]=s[a(374)](O,"br",null,null,-1)),s[a(386)](O,s[a(388)],{onClick:c[2]||(c[2]=u=>o(3))},s[a(384)]),c[12]||(c[12]=s[a(378)](O,"br",null,null,-1)),c[13]||(c[13]=s[a(378)](O,"br",null,null,-1)),c[14]||(c[14]=s[a(365)](Ee)),c[15]||(c[15]=O("br",null,null,-1)),c[16]||(c[16]=s[a(372)](Ee,s[a(389)]))])}}});function vi(t,e){const n=bi();return vi=function(s,i){return s=s-353,n[s]},vi(t,e)}const ts=vi;(function(t,e){const n=vi,s=t();for(;;)try{if(-parseInt(n(354))/1+parseInt(n(360))/2*(parseInt(n(367))/3)+parseInt(n(353))/4+parseInt(n(373))/5+-parseInt(n(361))/6+parseInt(n(374))/7*(-parseInt(n(370))/8)+parseInt(n(366))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(bi,600758);const rx={class:ts(358)},ox={key:0,class:ts(364)};function bi(){const t=["1199381YrDXkK","jeYlc","QFaVJ","aLiFD","menuBt","ZaJXr","3994ThMqwz","1318476ucsHzZ","yDJXG","MenuButton","panel","WVlqd","10301652rPEydk","1143NgqDFy","Инфо","value","640360gOKhGG","kyLal","button","4203665KDBytm","98Qnjfbb","div","toExit","1577188MHxSUH"];return bi=function(){return t},bi()}const lx=go({__name:ts(363),emits:[ts(376)],setup(t,{emit:e}){const n=ts,s={hmkEl:n(376),jeYlc:function(l){return l()},rdDGK:function(l,c,a,u){return l(c,a,u)},kyLal:n(375),QFaVJ:n(372),aLiFD:"menuBt_bt",sqHsE:function(l,c,a,u){return l(c,a,u)},EFvdI:function(l,c,a,u){return l(c,a,u)},WVlqd:"Удалить игру",ZaJXr:function(l,c,a,u,f){return l(c,a,u,f)},yDJXG:n(368)},i=e,r=s[n(355)](dt);function o(l){const c=n;switch(l){case(l=1):i(s.hmkEl);break}r[c(369)]=!1}return(l,c)=>{const a=n;return s[a(355)](fe),s.rdDGK(me,s[a(371)],rx,[s.rdDGK(O,s[a(371)],null,[O(s[a(356)],{class:s[a(357)],onClick:c[0]||(c[0]=u=>r[a(369)]=!r.value)},"❁")]),r.value?(fe(),s.sqHsE(me,a(375),ox,[s.EFvdI(O,"a",{onClick:c[1]||(c[1]=u=>o(1))},s[a(365)]),c[2]||(c[2]=s[a(355)](Ee)),c[3]||(c[3]=O("br",null,null,-1)),c[4]||(c[4]=s[a(359)](O,"a",null,s[a(362)],-1))])):je("",!0)])}}}),cx=Ga(lx,[["__scopeId","data-v-ff2e1591"]]);function Ci(){const t=["sCkVe","red-bt","157518jPYPNg","input","larger","game = ","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","YssXd","cIxwa","gUeiN","GnLJg","BVhfu","fhpji","::::::: Связывание :::::::","length","fBtVR","host","kvvDX","4219285UHUyKx","CdZEs","Yxcnt","hmqea","jnwlJ","IYZwQ","nRplj","name2","iWYKg","vEScd","Хорошо бы сообщить сопернику, что вы ушли из игры","Список желающих играть:","div","gxZbX","1vMeGNi","AlukJ","FFfgC","keys","QgCAS","SMLDS","forEach","sbfIR","1474196wzdpII","stage","hwVpV","gbcxO","PBoML","xfRHk","OIFKr","KhhyT","jMkro","6iRtwvQ","CrRfI","dvwGH","vNzpd","ezZPx","eiMZQ","vmcCH","now","jpMaQ"," Контекс игры:","myNickName","Сменить nickName","WJwJa","bjYAI","name","owQID","4px","setItem","localhost","onClick","removeField","setField"," Зарегистрироваться в поиске ","lkEqW","MwZCK","BinderComp","hHEZi","1053766eVhbeA","getItem","iJyLT","* можете поменять ваш Никнейм","jQCzk","2719008krYUAj","vwmgV","amsHV","IFvjj","Evhac","17033240SFMVgA","axRhP","KQAca","20px","sYyqA","YuHuR","push","value","g1/play/","iErnq","red","BaLtY","hOOTB","red-notice","GYIBg","NDtYD","OjAnb","LZBIH","uzfKB","then","GpVqs","PZkSM"," с игроком ","sFkZH","* нельзя выбирать себя","sXCWV","gameLink","small","YVhHB","vEcdH","myId","/play/","jkGmP","BHQlH","wIRez","ВСЕ НАСТРОЙКИ ИГРЫ","XMVfO","center"," Выбрал игрока ","Нахожусь в списке, жду кто выберет","BgjvL"," Вас выбрал игрок: ","iscvv","cNKvo","onValue",">>>> ANALIZ ","VBUsh","IyWTR","id2","CWarI","qyRrc","3720024JhXoku","g1/game/","1|7|2|4|3|0|6|5","pssfX"," Привет! ","NVwdm","reload","AQzBg","getField"," : ","ogVsY","PYqBb","log","zKFxB","mVbDx","iBgBF","nnIXJ","SxhLs","8DAowHU","CIUTl","OqGoi","myName","AHnJO","BTAEn","PRyfx","cduFo","g1/look/","meGMX","yTqNr","KiVrs","mBbxx","res","eeUBI","button","VovPv"];return Ci=function(){return t},Ci()}const tn=In;(function(t,e){const n=In,s=t();for(;;)try{if(parseInt(n(338))/1*(-parseInt(n(308))/2)+-parseInt(n(355))/3*(parseInt(n(346))/4)+parseInt(n(324))/5+-parseInt(n(271))/6+-parseInt(n(210))/7*(parseInt(n(289))/8)+-parseInt(n(215))/9+parseInt(n(220))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ci,658670);const ax={key:0},ux={key:1},hx={key:2},fx={key:3},dx={key:0},px=[tn(202)],_x={key:4},gx={key:0},mx=[tn(202)],xx={key:1,class:tn(233)},yx={key:5},vx={key:6},bx={key:7},Cx={style:{color:tn(230),"font-size":tn(223)}};function In(t,e){const n=Ci();return In=function(s,i){return s=s-187,n[s]},In(t,e)}const Ex=go({__name:tn(208),props:{game:{}},setup(t){const e=tn,n={GpVqs:e(193),BVhfu:function(p,h){return p+h},CIUTl:function(p,h){return p+h},iBgBF:function(p,h){return p+h},YVhHB:function(p,h){return p===h},iWYKg:function(p,h){return p>h},ExcuS:function(p,h){return p==h},BTAEn:function(p,h){return p(h)},LcEkR:function(p,h){return p!==h},AlukJ:"g1/look",fBtVR:function(p,h,d){return p(h,d)},CdZEs:function(p,h){return p+h},IyWTR:e(297),dvwGH:function(p,h,d){return p(h,d)},sXCWV:function(p){return p()},meGMX:function(p,h){return p+h},sFkZH:e(334),gxZbX:function(p,h){return p+h},OjAnb:function(p,h){return p+h},fhpji:function(p,h){return p+h},dQuDS:function(p,h){return p+h},KhhyT:e(228),iJyLT:e(272),AQzBg:function(p,h,d){return p(h,d)},jFFlh:function(p,h){return p+h},LZBIH:function(p,h){return p(h)},MwZCK:function(p,h){return p+h},IFvjj:function(p,h){return p+h},nRplj:function(p,h){return p+h},vNzpd:e(255),qyRrc:function(p,h,d){return p(h,d)},doJyA:function(p,h,d,b,C,A){return p(h,d,b,C,A)},PYqBb:e(304),CrRfI:"green-bt",KQAca:function(p,h,d,b,C,A){return p(h,d,b,C,A)},cNKvo:e(336),BgjvL:function(p,h,d,b,C){return p(h,d,b,C)},NVwdm:function(p,h,d,b,C){return p(h,d,b,C)},eiMZQ:function(p,h){return p+h},SxhLs:function(p,h){return p(h)},JEzFw:e(280),amsHV:function(p,h,d){return p(h,d)},nnIXJ:function(p,h){return p+h},vEcdH:function(p,h){return p+h},nQxCO:" stage:",yTqNr:function(p,h){return p(h)},kkQQW:function(p,h){return p(h)},sYyqA:function(p,h){return p(h)},VBUsh:function(p,h,d){return p(h,d)},pxIhP:function(p,h,d){return p(h,d)},vmcCH:function(p){return p()},IYZwQ:function(p,h,d,b){return p(h,d,b)},dQmFT:function(p,h,d){return p(h,d)},AHnJO:function(p,h){return p===h},PZkSM:function(p){return p()},jpMaQ:function(p,h,d,b){return p(h,d,b)},WJwJa:e(275),Evhac:function(p,h,d,b){return p(h,d,b)},ezZPx:function(p,h,d,b,C){return p(h,d,b,C)},hOOTB:e(309),YssXd:e(310),VXjyP:e(194),jQCzk:e(233),wIRez:e(213),hmqea:function(p,h){return p>h},jMkro:function(p){return p()},cIxwa:function(p,h,d,b,C){return p(h,d,b,C)},gbcxO:function(p,h,d,b,C){return p(h,d,b,C)},iscvv:function(p){return p()},mVbDx:function(p,h,d,b,C){return p(h,d,b,C)},hHEZi:function(p,h,d,b,C){return p(h,d,b,C)},lkEqW:function(p,h,d){return p(h,d)},KiVrs:function(p,h){return p(h)},bjYAI:function(p){return p()},jnwlJ:e(259),hwVpV:function(p,h,d,b){return p(h,d,b)},owQID:function(p,h,d,b,C){return p(h,d,b,C)},SMLDS:e(244),zKFxB:function(p,h,d){return p(h,d)},uzfKB:function(p,h,d){return p(h,d)},cduFo:e(258),OqGoi:"жду пока не откликнится ",FFfgC:e(261),vwmgV:function(p,h){return p(h)},BaLtY:function(p,h,d,b){return p(h,d,b)},ogVsY:"Согласиться",pssfX:function(p,h,d){return p(h,d)},QgCAS:function(p,h){return p===h},mBbxx:function(p){return p()},sCkVe:"Играем",PBoML:function(p,h,d,b,C){return p(h,d,b,C)},xfRHk:function(p,h,d,b,C){return p(h,d,b,C)},GnLJg:e(192),xZZMB:function(p,h,d){return p(h,d)},kvvDX:function(p,h){return p+h},OIFKr:function(p,h,d,b,C){return p(h,d,b,C)},jkGmP:function(p,h,d,b,C){return p(h,d,b,C)},Yxcnt:function(p,h,d,b,C){return p(h,d,b,C)},XMVfO:function(p){return p()},ZPJvZ:function(p,h){return p(h)},NDtYD:function(p){return p()},BHQlH:function(p,h){return p(h)},eeUBI:function(p,h,d){return p(h,d)}},s=location[e(322)].includes(e(201)),i=n[e(256)](Xo),r=n.ZPJvZ(dt,localStorage[e(211)](n[e(240)])),o=n[e(237)](dt,[]),l=n[e(235)](dt),c=n[e(196)](dt),a=n[e(253)](dt,""),u=dt(""),f=function(){const p=e;r[p(227)]&&localStorage[p(200)](n.GpVqs,r[p(227)])};function g(){const p=e,h={CWarI:function(d,b){return n[In(317)](d,b)},GYIBg:function(d,b){return n[In(317)](d,b)}};console[p(283)](p(311),t.game),i[p(279)](n.CIUTl(n[p(286)](t.game,p(251)),i[p(250)]))[p(239)](d=>{const b=p;d&&(l[b(227)]={id:d.id,name:d[b(197)]},i[b(347)]=5,i[b(279)](h[b(269)](h[b(234)](t.game,"/game/"),d.game))[b(239)](C=>{const A=b;a[A(227)]=C}))})}const x=function(p){const h=e,d={gUeiN:h(273),PRyfx:function(C,A){return n[h(248)](C,A)},iErnq:function(C,A){return n.iWYKg(C,A)},sbfIR:function(C,A){return n.ExcuS(C,A)},VovPv:function(C,A){return n.BTAEn(C,A)},axRhP:function(C,A){return n.LcEkR(C,A)},YuHuR:function(C,A){return n.YVhHB(C,A)},XPGmv:function(C,A){return C(A)}};if(console[h(283)](h(265),p),o[h(227)]=[],i[h(347)]===0)return!1;i[h(347)]=1;let b=!1;p&&Object[h(341)](p)[h(344)](C=>{const A=h,ee=d[A(315)].split("|");let Ne=0;for(;;){switch(ee[Ne++]){case"0":i.stage>2&&!b&&location[A(277)]();continue;case"1":p[C][A(268)]&&d[A(295)](p[C][A(268)],i[A(250)])&&(l[A(227)]={id:C,name:p[C].name});continue;case"2":if(d[A(229)](i[A(347)],3))return!1;continue;case"3":d[A(345)](p[C][A(268)],i[A(250)])&&(b=!0,i.stage=3);continue;case"4":C===d[A(305)](String,i[A(250)])&&C&&(b=!0,d[A(221)](i.stage,3)&&(i[A(347)]=2),p[C][A(268)]&&(i[A(347)]=4));continue;case"5":C&&p[C]&&o[A(227)][A(226)]({id:C,name:p[C].name});continue;case"6":p[C].accept&&Q();continue;case"7":d[A(225)](C,d.XPGmv(String,i[A(250)]))&&(l[A(227)]={id:p[C].id2,name:p[C][A(331)]});continue}break}})};n[e(303)](_n,()=>i.myId,p=>p&&setTimeout(g,500));function I(){k(),i.stage=1}function k(){const p=e;i[p(264)](n[p(339)]).then(h=>x(h)),n[p(321)](_n,()=>i.lookField,h=>x(h))}function j(){const p=e;i[p(204)](n[p(325)](n[p(267)],i[p(250)]),{name:r[p(227)]||i[p(292)]})}function U(p){const h=e,d={vEScd:h(302)};if(n.ExcuS(p.id,i[h(250)]))return c[h(227)]=!0,n.dvwGH(setTimeout,()=>c.value=!1,2e3),!1;i[h(204)](n[h(286)](n[h(267)],p.id),{name:p.name,id2:i[h(250)],name2:r[h(227)]||i[h(292)]})[h(239)](b=>{const C=h;console[C(283)](d[C(333)],b),l[C(227)]={id:p.id,name:p.name},i.stage=3})}function q(p){const h=e;p&&l.value&&(n[h(245)](alert),i.setField(n.meGMX(n.IyWTR,l[h(227)].id),{name:l[h(227)][h(197)],id2:i[h(250)],name2:i[h(292)],accept:!0})),!p&&i[h(204)](n[h(298)](n[h(267)],i[h(250)]),{name:r.value||i[h(292)]})[h(239)](()=>i[h(347)]=2)}function Z(){const p=e;i[p(204)](n[p(290)](n[p(267)],l[p(227)].id),{name:l[p(227)].name})[p(239)](()=>i[p(347)]=2)}function F(){var d;const p=e;u.value=n[p(243)];let h=String(l[p(227)].id);n[p(332)](l[p(227)].id,i.myId)?h+=n[p(337)]("::",i[p(250)]):h=n.OjAnb(n[p(318)](i[p(250)],"::"),h),i.removeField(n.dQuDS(n[p(353)],i[p(250)])),i[p(203)](n.KhhyT+((d=l.value)==null?void 0:d.id)),i.removeField(n[p(236)](n[p(212)],h)),n[p(278)](setTimeout,()=>location.reload(),3e3)}function Q(){var b,C,A;const p=e;let h=Date[p(190)](),d=n[p(237)](String,l.value.id);l[p(227)].id>i.myId?d+=n[p(207)]("::",i[p(250)]):d=n.CdZEs(n[p(286)](i[p(250)],"::"),d),console[p(283)](p(246),d),i[p(204)](n[p(218)](p(228),i[p(250)]),{id:(b=l[p(227)])==null?void 0:b.id,name:(C=l[p(227)])==null?void 0:C.name,game:d,date:h}),i[p(204)](n[p(353)]+((A=l[p(227)])==null?void 0:A.id),{id:i.myId,name:i.myName,game:d,date:h}),i[p(204)](n[p(330)](n[p(212)],d),{game:n[p(358)]}),n[p(270)](setTimeout,()=>{var Ne;const ee=p;i[ee(203)](n.jFFlh(n.IyWTR,(Ne=l[ee(227)])==null?void 0:Ne.id)),i[ee(203)](n[ee(290)](n.IyWTR,i[ee(250)])),location[ee(277)]()},2e3)}return(p,h)=>{var b,C;const d=e;return n.sXCWV(fe),me(Ge,null,[$e(s)?(fe(),me(n[d(263)],ax,[h[7]||(h[7]=O("hr",null,null,-1)),h[8]||(h[8]=n[d(260)](O,"i",null,d(319),-1)),h[9]||(h[9]=n[d(276)](O,"br",null,null,-1)),n.fBtVR(Ee,n[d(337)](n[d(188)](" "+n[d(288)](qe,n[d(294)]($e,i)[d(250)]),n.JEzFw)+qe(r.value)," "),1),h[10]||(h[10]=n[d(276)](O,"br",null,null,-1)),n[d(217)](Ee,n[d(287)](n[d(249)](n.nQxCO,n.yTqNr(qe,n.kkQQW($e,i)[d(347)]))," "),1),h[11]||(h[11]=n[d(260)](O,"hr",null,null,-1))])):n[d(321)](je,"",!0),n[d(224)]($e,i).stage===5?(fe(),me(n[d(263)],ux,[n[d(266)](ze,cx,{onToExit:h[0]||(h[0]=A=>F())})])):n.pxIhP(je,"",!0),n[d(248)]($e(i)[d(347)],0)?(n[d(189)](fe),n[d(329)](me,d(336),hx,[n.dQmFT(ze,ix,{onGameChanged:I})])):n[d(278)](je,"",!0),n[d(293)]($e(i).stage,1)?(n[d(241)](fe),n[d(191)](me,n.cNKvo,fx,[h[15]||(h[15]=O("p",null,n[d(195)],-1)),n.Evhac(O,"p",null,[bf(n.ezZPx(O,n[d(232)],{"onUpdate:modelValue":h[1]||(h[1]=A=>r[d(227)]=A),maxlength:"16",style:{"font-size":n[d(313)],padding:d(199),"text-align":d(257)},onInput:h[2]||(h[2]=A=>f()),placeholder:n.VXjyP},null,544),[[Yd,r[d(227)]]])]),h[16]||(h[16]=n[d(260)](O,n[d(263)],{class:n[d(214)]},n[d(254)],-1)),o[d(227)]&&n[d(327)](o[d(227)].length,1)?(n[d(354)](fe),me(n.cNKvo,dx,[h[12]||(h[12]=n[d(314)](O,"h3",null,"Список желающих играть:",-1)),(n[d(299)](fe,!0),n.gbcxO(me,Ge,null,cl(o[d(227)],A=>{const ee=d;return n[ee(245)](fe),n.doJyA(me,n[ee(282)],{class:n[ee(356)],key:A.id,onClick:Ne=>U(A)},n.BTAEn(qe,A[ee(197)]),9,px)}),128)),h[13]||(h[13]=n.NVwdm(O,"br",null,null,-1)),h[14]||(h[14]=n.gbcxO(O,"br",null,null,-1))])):je("",!0),n[d(219)](O,n[d(282)],{class:d(307),onClick:h[3]||(h[3]=A=>j())},d(205)),h[17]||(h[17]=n[d(260)](O,"br",null,null,-1)),h[18]||(h[18]=n[d(262)](Ee)),h[19]||(h[19]=n[d(314)](O,"br",null,null,-1)),h[20]||(h[20]=n[d(285)](O,d(247),null,d(312),-1)),h[21]||(h[21]=O("br",null,null,-1)),h[22]||(h[22]=n[d(209)](O,"br",null,null,-1))])):n[d(206)](je,"",!0),n[d(293)](n[d(300)]($e,i)[d(347)],2)?(n[d(196)](fe),n.Evhac(me,n[d(263)],_x,[h[26]||(h[26]=O("p",null,n[d(328)],-1)),o[d(227)][d(320)]?(n[d(262)](fe),n[d(348)](me,"div",gx,[h[23]||(h[23]=n.ezZPx(O,"h3",null,d(335),-1)),(fe(!0),n[d(198)](me,Ge,null,n.pxIhP(cl,o[d(227)],A=>{const ee=d;return fe(),n[ee(222)](me,n[ee(282)],{class:n[ee(356)],key:A.id,onClick:Ne=>U(A)},qe(A[ee(197)]),9,mx)}),128)),h[24]||(h[24]=O("br",null,null,-1)),h[25]||(h[25]=O("br",null,null,-1))])):n[d(357)](je,"",!0),c[d(227)]?(n[d(262)](fe),n.Evhac(me,n[d(263)],xx,n[d(343)])):n[d(284)](je,"",!0)])):n[d(238)](je,"",!0),n.AHnJO(n[d(288)]($e,i)[d(347)],3)?(fe(),n[d(191)](me,n[d(263)],yx,[n[d(191)](O,"p",null,[h[27]||(h[27]=n[d(300)](Ee,n[d(296)])),h[28]||(h[28]=O("br",null,null,-1)),O("b",null,n[d(237)](qe,(b=l[d(227)])==null?void 0:b[d(197)]),1),h[29]||(h[29]=Ee()),h[30]||(h[30]=n[d(260)](O,"br",null,null,-1)),h[31]||(h[31]=n[d(299)](Ee,n[d(291)]))]),O(n[d(282)],{onClick:h[4]||(h[4]=A=>Z())},"Нет ответа, отменяю выбор")])):je("",!0),$e(i)[d(347)]===4&&((C=l.value)!=null&&C.id)?(fe(),me(n[d(263)],vx,[h[32]||(h[32]=Ee(n[d(340)])),h[33]||(h[33]=n[d(209)](O,"br",null,null,-1)),h[34]||(h[34]=O("br",null,null,-1)),n[d(349)](O,"b",null,n[d(216)](qe,l[d(227)][d(197)]),1),h[35]||(h[35]=O("br",null,null,-1)),h[36]||(h[36]=O("br",null,null,-1)),n[d(231)](O,n.PYqBb,{class:n.CrRfI,onClick:h[5]||(h[5]=A=>q(!1))},"Отказаться"),O(n.PYqBb,{class:n[d(356)],onClick:h[6]||(h[6]=A=>q(!0))},n[d(281)])])):n[d(274)](je,"",!0),n[d(342)](n[d(288)]($e,i)[d(347)],5)&&l.value?(n[d(301)](fe),me(n[d(263)],bx,[h[37]||(h[37]=n[d(187)](O,"h3",null,n[d(306)],-1)),h[38]||(h[38]=Ee(d(242))),h[39]||(h[39]=n[d(350)](O,"br",null,null,-1)),n[d(209)](O,"b",null,n[d(224)](qe,l.value[d(197)]),1),h[40]||(h[40]=O("br",null,null,-1)),h[41]||(h[41]=n[d(351)](O,"br",null,null,-1)),h[42]||(h[42]=n[d(300)](Ee,n[d(316)])),h[43]||(h[43]=n[d(351)](O,"br",null,null,-1)),n.xZZMB(Ee,n[d(290)](n[d(323)](" ",qe(a.value))," "),1),h[44]||(h[44]=n[d(352)](O,"br",null,null,-1)),h[45]||(h[45]=n[d(252)](O,"br",null,null,-1)),n.BaLtY(O,"div",Cx,[n[d(326)](O,"b",null,n.LZBIH(qe,u[d(227)]),1)])])):n.uzfKB(je,"",!0),h[46]||(h[46]=n[d(276)](O,"br",null,null,-1)),h[47]||(h[47]=O("br",null,null,-1))],64)}}}),Ix={class:"game"},wx={__name:"RockPaperSScissors",setup(t){return(e,n)=>(fe(),me("div",Ix,[n[0]||(n[0]=O("h1",null,"♕",-1)),n[1]||(n[1]=O("h2",null,null,-1)),O("div",null,[ze(Ex,{game:"g1"})])]))}},Sx=Ga(wx,[["__scopeId","data-v-7afa5ccc"]]),Tx={__name:"App",setup(t){const e=Xo();let n=lf(Sx);return fa(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(s,i)=>(fe(),ka(Ff($e(n))))}},br=Ei;(function(t,e){const n=Ei,s=t();for(;;)try{if(parseInt(n(487))/1+-parseInt(n(490))/2+parseInt(n(492))/3+-parseInt(n(489))/4+-parseInt(n(493))/5+parseInt(n(488))/6+-parseInt(n(494))/7===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,980062);function Ei(t,e){const n=Ii();return Ei=function(s,i){return s=s-485,n[s]},Ei(t,e)}function Ii(){const t=["137792onJefT","3698642DgAyxc","#app","2475084auVKlA","482170gdJLtV","6282794kjpwdb","use","mount","1321368wxPHPM","10268466qmFKrc"];return Ii=function(){return t},Ii()}const Rx=ep(),Rc=Jd(Tx);Rc[br(485)](Rx),Rc[br(486)](br(491));
