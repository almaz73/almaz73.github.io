function Us(){const t=["use-credentials","supports","observe","createElement","8yPgtkA","10TqJgfE","rel","addedNodes","credentials","40184QCaJiL","24OVTCIa","integrity","include","QVfLC","357450PxqYbf","6GgQbet","438840PjanOQ","2832714eehxTW","AOrsT","childList","tagName","referrerPolicy","620292LkjlRj","3392378cqxdUG","xslRD","231969fdeHYK","same-origin","href","omit","LINK","type","jpRnp","YOILX","245hFktvV","ZinWm","modulepreload","bcZiu",'link[rel="modulepreload"]',"CQGXw","crossOrigin"];return Us=function(){return t},Us()}function Ws(t,e){const n=Us();return Ws=function(s,i){return s=s-201,n[s]},Ws(t,e)}(function(t,e){const n=Ws,s=t();for(;;)try{if(parseInt(n(231))/1+-parseInt(n(232))/2*(-parseInt(n(202))/3)+parseInt(n(221))/4*(-parseInt(n(233))/5)+-parseInt(n(239))/6+parseInt(n(210))/7*(parseInt(n(226))/8)+-parseInt(n(234))/9*(-parseInt(n(222))/10)+parseInt(n(240))/11*(-parseInt(n(227))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Us,184256),function(){const e=Ws,n={QVfLC:function(o,l){return o!==l},CQGXw:function(o,l){return o===l},xDOAU:function(o,l){return o(l)},xslRD:e(217),bcZiu:e(229),YOILX:"anonymous",rVKoo:e(205),zlmzy:e(203),jpRnp:function(o,l){return o(l)},AOrsT:function(o,l,c){return o(l,c)},AeNeT:"link",ZinWm:"modulepreload"},s=document[e(220)](n.AeNeT).relList;if(s&&s[e(218)]&&s[e(218)](n[e(211)]))return;for(const o of document.querySelectorAll(e(214)))r(o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(230)](c[l(207)],l(236)))for(const a of c[l(224)])a[l(237)]===l(206)&&n[l(215)](a[l(223)],l(212))&&n.xDOAU(r,a)})[e(219)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(228)]&&(c[l(228)]=o[l(228)]),o[l(238)]&&(c.referrerPolicy=o.referrerPolicy),n[l(215)](o[l(216)],n[l(201)])?c[l(225)]=n[l(213)]:o.crossOrigin===n[l(209)]?c.credentials=n.rVKoo:c[l(225)]=n.zlmzy,c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(208)](i,o);n[l(235)](fetch,o[l(204)],c)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ee={},hn=[],it=()=>{},xh=()=>!1,yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yh=Object.prototype.hasOwnProperty,X=(t,e)=>yh.call(t,e),H=Array.isArray,fn=t=>vi(t)==="[object Map]",yc=t=>vi(t)==="[object Set]",V=t=>typeof t=="function",de=t=>typeof t=="string",Ft=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",vc=t=>(ce(t)||V(t))&&V(t.then)&&V(t.catch),bc=Object.prototype.toString,vi=t=>bc.call(t),vh=t=>vi(t).slice(8,-1),Cc=t=>vi(t)==="[object Object]",qr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bh=/-(\w)/g,$e=bi(t=>t.replace(bh,(e,n)=>n?n.toUpperCase():"")),Ch=/\B([A-Z])/g,nn=bi(t=>t.replace(Ch,"-$1").toLowerCase()),Ci=bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gi=bi(t=>t?`on${Ci(t)}`:""),Tt=(t,e)=>!Object.is(t,e),Fs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ec=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},pr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zo;const Ei=()=>zo||(zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?Sh(s):Yr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(de(t)||ce(t))return t}const Eh=/;(?![^(]*\))/g,Ih=/:([^]+)/,wh=/\/\*[^]*?\*\//g;function Sh(t){const e={};return t.replace(wh,"").split(Eh).forEach(n=>{if(n){const s=n.split(Ih);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qr(t){let e="";if(de(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Qr(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Th="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nh=Gr(Th);function Ic(t){return!!t||t===""}const wc=t=>!!(t&&t.__v_isRef===!0),Ge=t=>de(t)?t:t==null?"":H(t)||ce(t)&&(t.toString===bc||!V(t.toString))?wc(t)?Ge(t.value):JSON.stringify(t,Sc,2):String(t),Sc=(t,e)=>wc(e)?Sc(t,e.value):fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ki(s,r)+" =>"]=i,n),{})}:yc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ki(n))}:Ft(e)?Ki(e):ce(e)&&!H(e)&&!Cc(e)?String(e):e,Ki=(t,e="")=>{var n;return Ft(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Tc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Nc(t){return new Tc(t)}function Rc(){return Se}function Rh(t,e=!1){Se&&Se.cleanups.push(t)}let ie;const zi=new WeakSet;class Ac{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zi.has(this)&&(zi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qo(this),Dc(this);const e=ie,n=Ye;ie=this,Ye=!0;try{return this.fn()}finally{kc(this),ie=e,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zr(e);this.deps=this.depsTail=void 0,qo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_r(this)&&this.run()}get dirty(){return _r(this)}}let Oc=0,Vn,jn;function Pc(t,e=!1){if(t.flags|=8,e){t.next=jn,jn=t;return}t.next=Vn,Vn=t}function Jr(){Oc++}function Xr(){if(--Oc>0)return;if(jn){let e=jn;for(jn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vn;){let e=Vn;for(Vn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Dc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Zr(s),Ah(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function _r(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Mc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Mc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===es))return;t.globalVersion=es;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_r(t)){t.flags&=-3;return}const n=ie,s=Ye;ie=t,Ye=!0;try{Dc(t);const i=t.fn(t._value);(e.version===0||Tt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ie=n,Ye=s,kc(t),t.flags&=-3}}function Zr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Zr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ah(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ye=!0;const Fc=[];function Lt(){Fc.push(Ye),Ye=!1}function Bt(){const t=Fc.pop();Ye=t===void 0?!0:t}function qo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let es=0;class Oh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!Ye||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new Oh(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,Lc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=s)}return n}trigger(e){this.version++,es++,this.notify(e)}notify(e){Jr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xr()}}}function Lc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Lc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vs=new WeakMap,Yt=Symbol(""),gr=Symbol(""),ts=Symbol("");function be(t,e,n){if(Ye&&ie){let s=Vs.get(t);s||Vs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new eo),i.map=s,i.key=n),i.track()}}function ft(t,e,n,s,i,r){const o=Vs.get(t);if(!o){es++;return}const l=c=>{c&&c.trigger()};if(Jr(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&qr(n);if(c&&n==="length"){const h=Number(s);o.forEach((p,g)=>{(g==="length"||g===ts||!Ft(g)&&g>=h)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ts)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Yt)),fn(t)&&l(o.get(gr)));break;case"delete":c||(l(o.get(Yt)),fn(t)&&l(o.get(gr)));break;case"set":fn(t)&&l(o.get(Yt));break}}Xr()}function Ph(t,e){const n=Vs.get(t);return n&&n.get(e)}function rn(t){const e=Q(t);return e===t?e:(be(e,"iterate",ts),je(t)?e:e.map(Ce))}function Ii(t){return be(t=Q(t),"iterate",ts),t}const Dh={__proto__:null,[Symbol.iterator](){return qi(this,Symbol.iterator,Ce)},concat(...t){return rn(this).concat(...t.map(e=>H(e)?rn(e):e))},entries(){return qi(this,"entries",t=>(t[1]=Ce(t[1]),t))},every(t,e){return at(this,"every",t,e,void 0,arguments)},filter(t,e){return at(this,"filter",t,e,n=>n.map(Ce),arguments)},find(t,e){return at(this,"find",t,e,Ce,arguments)},findIndex(t,e){return at(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return at(this,"findLast",t,e,Ce,arguments)},findLastIndex(t,e){return at(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return at(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yi(this,"includes",t)},indexOf(...t){return Yi(this,"indexOf",t)},join(t){return rn(this).join(t)},lastIndexOf(...t){return Yi(this,"lastIndexOf",t)},map(t,e){return at(this,"map",t,e,void 0,arguments)},pop(){return Pn(this,"pop")},push(...t){return Pn(this,"push",t)},reduce(t,...e){return Yo(this,"reduce",t,e)},reduceRight(t,...e){return Yo(this,"reduceRight",t,e)},shift(){return Pn(this,"shift")},some(t,e){return at(this,"some",t,e,void 0,arguments)},splice(...t){return Pn(this,"splice",t)},toReversed(){return rn(this).toReversed()},toSorted(t){return rn(this).toSorted(t)},toSpliced(...t){return rn(this).toSpliced(...t)},unshift(...t){return Pn(this,"unshift",t)},values(){return qi(this,"values",Ce)}};function qi(t,e,n){const s=Ii(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const kh=Array.prototype;function at(t,e,n,s,i,r){const o=Ii(t),l=o!==t&&!je(t),c=o[e];if(c!==kh[e]){const p=c.apply(t,r);return l?Ce(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Ce(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const h=c.call(o,a,s);return l&&i?i(h):h}function Yo(t,e,n,s){const i=Ii(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ce(l),c,t)}),i[e](r,...s)}function Yi(t,e,n){const s=Q(t);be(s,"iterate",ts);const i=s[e](...n);return(i===-1||i===!1)&&so(n[0])?(n[0]=Q(n[0]),s[e](...n)):i}function Pn(t,e,n=[]){Lt(),Jr();const s=Q(t)[e].apply(t,n);return Xr(),Bt(),s}const Mh=Gr("__proto__,__v_isRef,__isVue"),Bc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ft));function Fh(t){Ft(t)||(t=String(t));const e=Q(this);return be(e,"has",t),e.hasOwnProperty(t)}class Hc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Kh:jc:r?Vc:Wc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=Dh[n]))return c;if(n==="hasOwnProperty")return Fh}const l=Reflect.get(e,n,fe(e)?e:s);return(Ft(n)?Bc.has(n):Mh(n))||(i||be(e,"get",n),r)?l:fe(l)?o&&qr(n)?l:l.value:ce(l)?i?$c(l):wi(l):l}}class Uc extends Hc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Jt(r);if(!je(s)&&!Jt(s)&&(r=Q(r),s=Q(s)),!H(e)&&fe(r)&&!fe(s))return c?!1:(r.value=s,!0)}const o=H(e)&&qr(n)?Number(n)<e.length:X(e,n),l=Reflect.set(e,n,s,fe(e)?e:i);return e===Q(i)&&(o?Tt(s,r)&&ft(e,"set",n,s):ft(e,"add",n,s)),l}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ft(n)||!Bc.has(n))&&be(e,"has",n),s}ownKeys(e){return be(e,"iterate",H(e)?"length":Yt),Reflect.ownKeys(e)}}class Lh extends Hc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bh=new Uc,Hh=new Lh,Uh=new Uc(!0);const mr=t=>t,Rs=t=>Reflect.getPrototypeOf(t);function Wh(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=fn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),h=n?mr:e?xr:Ce;return!e&&be(r,"iterate",c?gr:Yt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[h(p[0]),h(p[1])]:h(p),done:g}},[Symbol.iterator](){return this}}}}function As(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vh(t,e){const n={get(i){const r=this.__v_raw,o=Q(r),l=Q(i);t||(Tt(i,l)&&be(o,"get",i),be(o,"get",l));const{has:c}=Rs(o),a=e?mr:t?xr:Ce;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&be(Q(i),"iterate",Yt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Q(r),l=Q(i);return t||(Tt(i,l)&&be(o,"has",i),be(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Q(l),a=e?mr:t?xr:Ce;return!t&&be(c,"iterate",Yt),l.forEach((h,p)=>i.call(r,a(h),a(p),o))}};return Ie(n,t?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(i){!e&&!je(i)&&!Jt(i)&&(i=Q(i));const r=Q(this);return Rs(r).has.call(r,i)||(r.add(i),ft(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!Jt(r)&&(r=Q(r));const o=Q(this),{has:l,get:c}=Rs(o);let a=l.call(o,i);a||(i=Q(i),a=l.call(o,i));const h=c.call(o,i);return o.set(i,r),a?Tt(r,h)&&ft(o,"set",i,r):ft(o,"add",i,r),this},delete(i){const r=Q(this),{has:o,get:l}=Rs(r);let c=o.call(r,i);c||(i=Q(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&ft(r,"delete",i,void 0),a},clear(){const i=Q(this),r=i.size!==0,o=i.clear();return r&&ft(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Wh(i,t,e)}),n}function to(t,e){const n=Vh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const jh={get:to(!1,!1)},$h={get:to(!1,!0)},Gh={get:to(!0,!1)};const Wc=new WeakMap,Vc=new WeakMap,jc=new WeakMap,Kh=new WeakMap;function zh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qh(t){return t.__v_skip||!Object.isExtensible(t)?0:zh(vh(t))}function wi(t){return Jt(t)?t:no(t,!1,Bh,jh,Wc)}function Yh(t){return no(t,!1,Uh,$h,Vc)}function $c(t){return no(t,!0,Hh,Gh,jc)}function no(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=qh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Nt(t){return Jt(t)?Nt(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function so(t){return t?!!t.__v_raw:!1}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function io(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Ec(t,"__v_skip",!0),t}const Ce=t=>ce(t)?wi(t):t,xr=t=>ce(t)?$c(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function Kt(t){return Gc(t,!1)}function Qh(t){return Gc(t,!0)}function Gc(t,e){return fe(t)?t:new Jh(t,e)}class Jh{constructor(e,n){this.dep=new eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Q(e),this._value=n?e:Ce(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||je(e)||Jt(e);e=s?e:Q(e),Tt(e,n)&&(this._rawValue=e,this._value=s?e:Ce(e),this.dep.trigger())}}function We(t){return fe(t)?t.value:t}const Xh={get:(t,e,n)=>e==="__v_raw"?t:We(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Kc(t){return Nt(t)?t:new Proxy(t,Xh)}function Zh(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=tf(t,n);return e}class ef{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ph(Q(this._object),this._key)}}function tf(t,e,n){const s=t[e];return fe(s)?s:new ef(t,e,n)}class nf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return Pc(this,!0),!0}get value(){const e=this.dep.track();return Mc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sf(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new nf(s,i,n)}const Os={},js=new WeakMap;let jt;function rf(t,e=!1,n=jt){if(n){let s=js.get(n);s||js.set(n,s=[]),s.push(t)}}function of(t,e,n=ee){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=v=>i?v:je(v)||i===!1||i===0?dt(v,1):dt(v);let h,p,g,x,E=!1,P=!1;if(fe(t)?(p=()=>t.value,E=je(t)):Nt(t)?(p=()=>a(t),E=!0):H(t)?(P=!0,E=t.some(v=>Nt(v)||je(v)),p=()=>t.map(v=>{if(fe(v))return v.value;if(Nt(v))return a(v);if(V(v))return c?c(v,2):v()})):V(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Lt();try{g()}finally{Bt()}}const v=jt;jt=h;try{return c?c(t,3,[x]):t(x)}finally{jt=v}}:p=it,e&&i){const v=p,b=i===!0?1/0:i;p=()=>dt(v(),b)}const $=Rc(),d=()=>{h.stop(),$&&$.active&&zr($.effects,h)};if(r&&e){const v=e;e=(...b)=>{v(...b),d()}}let u=P?new Array(t.length).fill(Os):Os;const f=v=>{if(!(!(h.flags&1)||!h.dirty&&!v))if(e){const b=h.run();if(i||E||(P?b.some((k,U)=>Tt(k,u[U])):Tt(b,u))){g&&g();const k=jt;jt=h;try{const U=[b,u===Os?void 0:P&&u[0]===Os?[]:u,x];c?c(e,3,U):e(...U),u=b}finally{jt=k}}}else h.run()};return l&&l(f),h=new Ac(p),h.scheduler=o?()=>o(f,!1):f,x=v=>rf(v,!1,h),g=h.onStop=()=>{const v=js.get(h);if(v){if(c)c(v,4);else for(const b of v)b();js.delete(h)}},e?s?f(!0):u=h.run():o?o(f.bind(null,!0),!0):h.run(),d.pause=h.pause.bind(h),d.resume=h.resume.bind(h),d.stop=d,d}function dt(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))dt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)dt(t[s],e,n);else if(yc(t)||fn(t))t.forEach(s=>{dt(s,e,n)});else if(Cc(t)){for(const s in t)dt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&dt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(t,e,n,s){try{return s?t(...s):t()}catch(i){Si(i,e,n)}}function ot(t,e,n,s){if(V(t)){const i=ms(t,e,n,s);return i&&vc(i)&&i.catch(r=>{Si(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ot(t[r],e,n,s));return i}}function Si(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ee;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](t,c,a)===!1)return}l=l.parent}if(r){Lt(),ms(r,null,10,[t,c,a]),Bt();return}}lf(t,n,i,s,o)}function lf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Te=[];let nt=-1;const dn=[];let It=null,cn=0;const zc=Promise.resolve();let $s=null;function qc(t){const e=$s||zc;return t?e.then(this?t.bind(this):t):e}function cf(t){let e=nt+1,n=Te.length;for(;e<n;){const s=e+n>>>1,i=Te[s],r=ns(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ro(t){if(!(t.flags&1)){const e=ns(t),n=Te[Te.length-1];!n||!(t.flags&2)&&e>=ns(n)?Te.push(t):Te.splice(cf(e),0,t),t.flags|=1,Yc()}}function Yc(){$s||($s=zc.then(Jc))}function af(t){H(t)?dn.push(...t):It&&t.id===-1?It.splice(cn+1,0,t):t.flags&1||(dn.push(t),t.flags|=1),Yc()}function Qo(t,e,n=nt+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Qc(t){if(dn.length){const e=[...new Set(dn)].sort((n,s)=>ns(n)-ns(s));if(dn.length=0,It){It.push(...e);return}for(It=e,cn=0;cn<It.length;cn++){const n=It[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,cn=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Jc(t){try{for(nt=0;nt<Te.length;nt++){const e=Te[nt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nt<Te.length;nt++){const e=Te[nt];e&&(e.flags&=-2)}nt=-1,Te.length=0,Qc(),$s=null,(Te.length||dn.length)&&Jc()}}let Pe=null,Xc=null;function Gs(t){const e=Pe;return Pe=t,Xc=t&&t.type.__scopeId||null,e}function uf(t,e=Pe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ll(-1);const r=Gs(e);let o;try{o=t(...i)}finally{Gs(r),s._d&&ll(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function hf(t,e){if(Pe===null)return t;const n=Ai(Pe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ee]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&dt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Lt(),ot(c,n,8,[t.el,l,t,e]),Bt())}}const ff=Symbol("_vte"),df=t=>t.__isTeleport;function oo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pf(t,e){return V(t)?Ie({name:t.name},e,{setup:t}):t}function Zc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ks(t,e,n,s,i=!1){if(H(t)){t.forEach((E,P)=>Ks(E,e&&(H(e)?e[P]:e),n,s,i));return}if($n(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ks(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ai(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,h=l.refs===ee?l.refs={}:l.refs,p=l.setupState,g=Q(p),x=p===ee?()=>!1:E=>X(g,E);if(a!=null&&a!==c&&(de(a)?(h[a]=null,x(a)&&(p[a]=null)):fe(a)&&(a.value=null)),V(c))ms(c,l,12,[o,h]);else{const E=de(c),P=fe(c);if(E||P){const $=()=>{if(t.f){const d=E?x(c)?p[c]:h[c]:c.value;i?H(d)&&zr(d,r):H(d)?d.includes(r)||d.push(r):E?(h[c]=[r],x(c)&&(p[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else E?(h[c]=o,x(c)&&(p[c]=o)):P&&(c.value=o,t.k&&(h[t.k]=o))};o?($.id=-1,Be($,n)):$()}}}Ei().requestIdleCallback;Ei().cancelIdleCallback;const $n=t=>!!t.type.__asyncLoader,ea=t=>t.type.__isKeepAlive;function _f(t,e){ta(t,"a",e)}function gf(t,e){ta(t,"da",e)}function ta(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ti(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ea(i.parent.vnode)&&mf(s,e,n,i),i=i.parent}}function mf(t,e,n,s){const i=Ti(e,t,s,!0);sa(()=>{zr(s[e],i)},n)}function Ti(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Lt();const l=xs(n),c=ot(e,n,t,o);return l(),Bt(),c});return s?i.unshift(r):i.push(r),r}}const yt=t=>(e,n=ye)=>{(!is||t==="sp")&&Ti(t,(...s)=>e(...s),n)},xf=yt("bm"),na=yt("m"),yf=yt("bu"),vf=yt("u"),bf=yt("bum"),sa=yt("um"),Cf=yt("sp"),Ef=yt("rtg"),If=yt("rtc");function wf(t,e=ye){Ti("ec",t,e)}const Sf="components",ia=Symbol.for("v-ndc");function Tf(t){return de(t)?Nf(Sf,t,!1)||t:t||ia}function Nf(t,e,n=!0,s=!1){const i=Pe||ye;if(i){const r=i.type;{const l=gd(r,!1);if(l&&(l===e||l===$e(e)||l===Ci($e(e))))return r}const o=Jo(i[t]||r[t],e)||Jo(i.appContext[t],e);return!o&&s?r:o}}function Jo(t,e){return t&&(t[e]||t[$e(e)]||t[Ci($e(e))])}function Xo(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||de(t)){const l=o&&Nt(t);let c=!1;l&&(c=!je(t),t=Ii(t)),i=new Array(t.length);for(let a=0,h=t.length;a<h;a++)i[a]=e(c?Ce(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const h=l[c];i[c]=e(t[h],h,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const yr=t=>t?Ta(t)?Ai(t):yr(t.parent):null,Gn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yr(t.parent),$root:t=>yr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>oa(t),$forceUpdate:t=>t.f||(t.f=()=>{ro(t.update)}),$nextTick:t=>t.n||(t.n=qc.bind(t.proxy)),$watch:t=>Jf.bind(t)}),Qi=(t,e)=>t!==ee&&!t.__isScriptSetup&&X(t,e),Rf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Qi(s,e))return o[e]=1,s[e];if(i!==ee&&X(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&X(a,e))return o[e]=3,r[e];if(n!==ee&&X(n,e))return o[e]=4,n[e];vr&&(o[e]=0)}}const h=Gn[e];let p,g;if(h)return e==="$attrs"&&be(t.attrs,"get",""),h(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==ee&&X(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,X(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Qi(i,e)?(i[e]=n,!0):s!==ee&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ee&&X(t,o)||Qi(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X(Gn,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zo(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vr=!0;function Af(t){const e=oa(t),n=t.proxy,s=t.ctx;vr=!1,e.beforeCreate&&el(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:h,beforeMount:p,mounted:g,beforeUpdate:x,updated:E,activated:P,deactivated:$,beforeDestroy:d,beforeUnmount:u,destroyed:f,unmounted:v,render:b,renderTracked:k,renderTriggered:U,errorCaptured:D,serverPrefetch:j,expose:ae,inheritAttrs:Re,components:Ue,directives:ct,filters:Nn}=e;if(a&&Of(a,s,null),o)for(const q in o){const ne=o[q];V(ne)&&(s[q]=ne.bind(n))}if(i){const q=i.call(n,n);ce(q)&&(t.data=wi(q))}if(vr=!0,r)for(const q in r){const ne=r[q],Ht=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):it,Ts=!V(ne)&&V(ne.set)?ne.set.bind(n):it,Ut=Ra({get:Ht,set:Ts});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Je=>Ut.value=Je})}if(l)for(const q in l)ra(l[q],s,n,q);if(c){const q=V(c)?c.call(n):c;Reflect.ownKeys(q).forEach(ne=>{Lf(ne,q[ne])})}h&&el(h,t,"c");function he(q,ne){H(ne)?ne.forEach(Ht=>q(Ht.bind(n))):ne&&q(ne.bind(n))}if(he(xf,p),he(na,g),he(yf,x),he(vf,E),he(_f,P),he(gf,$),he(wf,D),he(If,k),he(Ef,U),he(bf,u),he(sa,v),he(Cf,j),H(ae))if(ae.length){const q=t.exposed||(t.exposed={});ae.forEach(ne=>{Object.defineProperty(q,ne,{get:()=>n[ne],set:Ht=>n[ne]=Ht})})}else t.exposed||(t.exposed={});b&&t.render===it&&(t.render=b),Re!=null&&(t.inheritAttrs=Re),Ue&&(t.components=Ue),ct&&(t.directives=ct),j&&Zc(t)}function Of(t,e,n=it){H(t)&&(t=br(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=Kn(i.from||s,i.default,!0):r=Kn(i.from||s):r=Kn(i),fe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function el(t,e,n){ot(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ra(t,e,n,s){let i=s.includes(".")?va(n,s):()=>n[s];if(de(t)){const r=e[t];V(r)&&pn(i,r)}else if(V(t))pn(i,t.bind(n));else if(ce(t))if(H(t))t.forEach(r=>ra(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&pn(i,r,t)}}function oa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>zs(c,a,o,!0)),zs(c,e,o)),ce(e)&&r.set(e,c),c}function zs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&zs(t,r,n,!0),i&&i.forEach(o=>zs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Pf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Pf={data:tl,props:nl,emits:nl,methods:Un,computed:Un,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Un,directives:Un,watch:kf,provide:tl,inject:Df};function tl(t,e){return e?t?function(){return Ie(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Df(t,e){return Un(br(t),br(e))}function br(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?Ie(Object.create(null),t,e):e}function nl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ie(Object.create(null),Zo(t),Zo(e??{})):e}function kf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function la(){return{app:null,config:{isNativeTag:xh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mf=0;function Ff(t,e){return function(s,i=null){V(s)||(s=Ie({},s)),i!=null&&!ce(i)&&(i=null);const r=la(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Mf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:xd,get config(){return r.config},set config(h){},use(h,...p){return o.has(h)||(h&&V(h.install)?(o.add(h),h.install(a,...p)):V(h)&&(o.add(h),h(a,...p))),a},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),a},component(h,p){return p?(r.components[h]=p,a):r.components[h]},directive(h,p){return p?(r.directives[h]=p,a):r.directives[h]},mount(h,p,g){if(!c){const x=a._ceVNode||rt(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,h,g),c=!0,a._container=h,h.__vue_app__=a,Ai(x.component)}},onUnmount(h){l.push(h)},unmount(){c&&(ot(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(h,p){return r.provides[h]=p,a},runWithContext(h){const p=Qt;Qt=a;try{return h()}finally{Qt=p}}};return a}}let Qt=null;function Lf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Kn(t,e,n=!1){const s=ye||Pe;if(s||Qt){const i=Qt?Qt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}function Bf(){return!!(ye||Pe||Qt)}const ca={},aa=()=>Object.create(ca),ua=t=>Object.getPrototypeOf(t)===ca;function Hf(t,e,n,s=!1){const i={},r=aa();t.propsDefaults=Object.create(null),ha(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Yh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Uf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Q(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let g=h[p];if(Ni(t.emitsOptions,g))continue;const x=e[g];if(c)if(X(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const E=$e(g);i[E]=Cr(c,l,E,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{ha(t,e,i,r)&&(a=!0);let h;for(const p in l)(!e||!X(e,p)&&((h=nn(p))===p||!X(e,h)))&&(c?n&&(n[p]!==void 0||n[h]!==void 0)&&(i[p]=Cr(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!X(e,p))&&(delete r[p],a=!0)}a&&ft(t.attrs,"set","")}function ha(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Wn(c))continue;const a=e[c];let h;i&&X(i,h=$e(c))?!r||!r.includes(h)?n[h]=a:(l||(l={}))[h]=a:Ni(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Q(n),a=l||ee;for(let h=0;h<r.length;h++){const p=r[h];n[p]=Cr(i,c,p,a[p],t,!X(a,p))}}return o}function Cr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const h=xs(i);s=a[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}const Wf=new WeakMap;function fa(t,e,n=!1){const s=n?Wf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!V(t)){const h=p=>{c=!0;const[g,x]=fa(p,e,!0);Ie(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return ce(t)&&s.set(t,hn),hn;if(H(r))for(let h=0;h<r.length;h++){const p=$e(r[h]);sl(p)&&(o[p]=ee)}else if(r)for(const h in r){const p=$e(h);if(sl(p)){const g=r[h],x=o[p]=H(g)||V(g)?{type:g}:Ie({},g),E=x.type;let P=!1,$=!0;if(H(E))for(let d=0;d<E.length;++d){const u=E[d],f=V(u)&&u.name;if(f==="Boolean"){P=!0;break}else f==="String"&&($=!1)}else P=V(E)&&E.name==="Boolean";x[0]=P,x[1]=$,(P||X(x,"default"))&&l.push(p)}}const a=[o,l];return ce(t)&&s.set(t,a),a}function sl(t){return t[0]!=="$"&&!Wn(t)}const da=t=>t[0]==="_"||t==="$stable",lo=t=>H(t)?t.map(st):[st(t)],Vf=(t,e,n)=>{if(e._n)return e;const s=uf((...i)=>lo(e(...i)),n);return s._c=!1,s},pa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(da(i))continue;const r=t[i];if(V(r))e[i]=Vf(i,r,s);else if(r!=null){const o=lo(r);e[i]=()=>o}}},_a=(t,e)=>{const n=lo(e);t.slots.default=()=>n},ga=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},jf=(t,e,n)=>{const s=t.slots=aa();if(t.vnode.shapeFlag&32){const i=e._;i?(ga(s,e,n),n&&Ec(s,"_",i,!0)):pa(e,s)}else e&&_a(t,e)},$f=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ee;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ga(i,e,n):(r=!e.$stable,pa(e,i)),o=e}else e&&(_a(t,e),o={default:1});if(r)for(const l in i)!da(l)&&o[l]==null&&delete i[l]},Be=id;function Gf(t){return Kf(t)}function Kf(t,e){const n=Ei();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:h,parentNode:p,nextSibling:g,setScopeId:x=it,insertStaticContent:E}=t,P=(_,m,y,w=null,C=null,I=null,A=void 0,R=null,N=!!m.dynamicChildren)=>{if(_===m)return;_&&!Dn(_,m)&&(w=Ns(_),Je(_,C,I,!0),_=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:F,shapeFlag:O}=m;switch(S){case Ri:$(_,m,y,w);break;case Xt:d(_,m,y,w);break;case Xi:_==null&&u(m,y,w,A);break;case Ve:Ue(_,m,y,w,C,I,A,R,N);break;default:O&1?b(_,m,y,w,C,I,A,R,N):O&6?ct(_,m,y,w,C,I,A,R,N):(O&64||O&128)&&S.process(_,m,y,w,C,I,A,R,N,An)}F!=null&&C&&Ks(F,_&&_.ref,I,m||_,!m)},$=(_,m,y,w)=>{if(_==null)s(m.el=l(m.children),y,w);else{const C=m.el=_.el;m.children!==_.children&&a(C,m.children)}},d=(_,m,y,w)=>{_==null?s(m.el=c(m.children||""),y,w):m.el=_.el},u=(_,m,y,w)=>{[_.el,_.anchor]=E(_.children,m,y,w,_.el,_.anchor)},f=({el:_,anchor:m},y,w)=>{let C;for(;_&&_!==m;)C=g(_),s(_,y,w),_=C;s(m,y,w)},v=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},b=(_,m,y,w,C,I,A,R,N)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),_==null?k(m,y,w,C,I,A,R,N):j(_,m,C,I,A,R,N)},k=(_,m,y,w,C,I,A,R)=>{let N,S;const{props:F,shapeFlag:O,transition:M,dirs:B}=_;if(N=_.el=o(_.type,I,F&&F.is,F),O&8?h(N,_.children):O&16&&D(_.children,N,null,w,C,Ji(_,I),A,R),B&&Wt(_,null,w,"created"),U(N,_,_.scopeId,A,w),F){for(const se in F)se!=="value"&&!Wn(se)&&r(N,se,null,F[se],I,w);"value"in F&&r(N,"value",null,F.value,I),(S=F.onVnodeBeforeMount)&&tt(S,w,_)}B&&Wt(_,null,w,"beforeMount");const Y=zf(C,M);Y&&M.beforeEnter(N),s(N,m,y),((S=F&&F.onVnodeMounted)||Y||B)&&Be(()=>{S&&tt(S,w,_),Y&&M.enter(N),B&&Wt(_,null,w,"mounted")},C)},U=(_,m,y,w,C)=>{if(y&&x(_,y),w)for(let I=0;I<w.length;I++)x(_,w[I]);if(C){let I=C.subTree;if(m===I||Ca(I.type)&&(I.ssContent===m||I.ssFallback===m)){const A=C.vnode;U(_,A,A.scopeId,A.slotScopeIds,C.parent)}}},D=(_,m,y,w,C,I,A,R,N=0)=>{for(let S=N;S<_.length;S++){const F=_[S]=R?wt(_[S]):st(_[S]);P(null,F,m,y,w,C,I,A,R)}},j=(_,m,y,w,C,I,A)=>{const R=m.el=_.el;let{patchFlag:N,dynamicChildren:S,dirs:F}=m;N|=_.patchFlag&16;const O=_.props||ee,M=m.props||ee;let B;if(y&&Vt(y,!1),(B=M.onVnodeBeforeUpdate)&&tt(B,y,m,_),F&&Wt(m,_,y,"beforeUpdate"),y&&Vt(y,!0),(O.innerHTML&&M.innerHTML==null||O.textContent&&M.textContent==null)&&h(R,""),S?ae(_.dynamicChildren,S,R,y,w,Ji(m,C),I):A||ne(_,m,R,null,y,w,Ji(m,C),I,!1),N>0){if(N&16)Re(R,O,M,y,C);else if(N&2&&O.class!==M.class&&r(R,"class",null,M.class,C),N&4&&r(R,"style",O.style,M.style,C),N&8){const Y=m.dynamicProps;for(let se=0;se<Y.length;se++){const Z=Y[se],Fe=O[Z],Ae=M[Z];(Ae!==Fe||Z==="value")&&r(R,Z,Fe,Ae,C,y)}}N&1&&_.children!==m.children&&h(R,m.children)}else!A&&S==null&&Re(R,O,M,y,C);((B=M.onVnodeUpdated)||F)&&Be(()=>{B&&tt(B,y,m,_),F&&Wt(m,_,y,"updated")},w)},ae=(_,m,y,w,C,I,A)=>{for(let R=0;R<m.length;R++){const N=_[R],S=m[R],F=N.el&&(N.type===Ve||!Dn(N,S)||N.shapeFlag&70)?p(N.el):y;P(N,S,F,null,w,C,I,A,!0)}},Re=(_,m,y,w,C)=>{if(m!==y){if(m!==ee)for(const I in m)!Wn(I)&&!(I in y)&&r(_,I,m[I],null,C,w);for(const I in y){if(Wn(I))continue;const A=y[I],R=m[I];A!==R&&I!=="value"&&r(_,I,R,A,C,w)}"value"in y&&r(_,"value",m.value,y.value,C)}},Ue=(_,m,y,w,C,I,A,R,N)=>{const S=m.el=_?_.el:l(""),F=m.anchor=_?_.anchor:l("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:B}=m;B&&(R=R?R.concat(B):B),_==null?(s(S,y,w),s(F,y,w),D(m.children||[],y,F,C,I,A,R,N)):O>0&&O&64&&M&&_.dynamicChildren?(ae(_.dynamicChildren,M,y,C,I,A,R),(m.key!=null||C&&m===C.subTree)&&ma(_,m,!0)):ne(_,m,y,F,C,I,A,R,N)},ct=(_,m,y,w,C,I,A,R,N)=>{m.slotScopeIds=R,_==null?m.shapeFlag&512?C.ctx.activate(m,y,w,A,N):Nn(m,y,w,C,I,A,N):Ss(_,m,N)},Nn=(_,m,y,w,C,I,A)=>{const R=_.component=hd(_,w,C);if(ea(_)&&(R.ctx.renderer=An),fd(R,!1,A),R.asyncDep){if(C&&C.registerDep(R,he,A),!_.el){const N=R.subTree=rt(Xt);d(null,N,m,y)}}else he(R,_,m,y,C,I,A)},Ss=(_,m,y)=>{const w=m.component=_.component;if(nd(_,m,y))if(w.asyncDep&&!w.asyncResolved){q(w,m,y);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},he=(_,m,y,w,C,I,A)=>{const R=()=>{if(_.isMounted){let{next:O,bu:M,u:B,parent:Y,vnode:se}=_;{const Ze=xa(_);if(Ze){O&&(O.el=se.el,q(_,O,A)),Ze.asyncDep.then(()=>{_.isUnmounted||R()});return}}let Z=O,Fe;Vt(_,!1),O?(O.el=se.el,q(_,O,A)):O=se,M&&Fs(M),(Fe=O.props&&O.props.onVnodeBeforeUpdate)&&tt(Fe,Y,O,se),Vt(_,!0);const Ae=rl(_),Xe=_.subTree;_.subTree=Ae,P(Xe,Ae,p(Xe.el),Ns(Xe),_,C,I),O.el=Ae.el,Z===null&&sd(_,Ae.el),B&&Be(B,C),(Fe=O.props&&O.props.onVnodeUpdated)&&Be(()=>tt(Fe,Y,O,se),C)}else{let O;const{el:M,props:B}=m,{bm:Y,m:se,parent:Z,root:Fe,type:Ae}=_,Xe=$n(m);Vt(_,!1),Y&&Fs(Y),!Xe&&(O=B&&B.onVnodeBeforeMount)&&tt(O,Z,m),Vt(_,!0);{Fe.ce&&Fe.ce._injectChildStyle(Ae);const Ze=_.subTree=rl(_);P(null,Ze,y,w,_,C,I),m.el=Ze.el}if(se&&Be(se,C),!Xe&&(O=B&&B.onVnodeMounted)){const Ze=m;Be(()=>tt(O,Z,Ze),C)}(m.shapeFlag&256||Z&&$n(Z.vnode)&&Z.vnode.shapeFlag&256)&&_.a&&Be(_.a,C),_.isMounted=!0,m=y=w=null}};_.scope.on();const N=_.effect=new Ac(R);_.scope.off();const S=_.update=N.run.bind(N),F=_.job=N.runIfDirty.bind(N);F.i=_,F.id=_.uid,N.scheduler=()=>ro(F),Vt(_,!0),S()},q=(_,m,y)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,Uf(_,m.props,w,y),$f(_,m.children,y),Lt(),Qo(_),Bt()},ne=(_,m,y,w,C,I,A,R,N=!1)=>{const S=_&&_.children,F=_?_.shapeFlag:0,O=m.children,{patchFlag:M,shapeFlag:B}=m;if(M>0){if(M&128){Ts(S,O,y,w,C,I,A,R,N);return}else if(M&256){Ht(S,O,y,w,C,I,A,R,N);return}}B&8?(F&16&&Rn(S,C,I),O!==S&&h(y,O)):F&16?B&16?Ts(S,O,y,w,C,I,A,R,N):Rn(S,C,I,!0):(F&8&&h(y,""),B&16&&D(O,y,w,C,I,A,R,N))},Ht=(_,m,y,w,C,I,A,R,N)=>{_=_||hn,m=m||hn;const S=_.length,F=m.length,O=Math.min(S,F);let M;for(M=0;M<O;M++){const B=m[M]=N?wt(m[M]):st(m[M]);P(_[M],B,y,null,C,I,A,R,N)}S>F?Rn(_,C,I,!0,!1,O):D(m,y,w,C,I,A,R,N,O)},Ts=(_,m,y,w,C,I,A,R,N)=>{let S=0;const F=m.length;let O=_.length-1,M=F-1;for(;S<=O&&S<=M;){const B=_[S],Y=m[S]=N?wt(m[S]):st(m[S]);if(Dn(B,Y))P(B,Y,y,null,C,I,A,R,N);else break;S++}for(;S<=O&&S<=M;){const B=_[O],Y=m[M]=N?wt(m[M]):st(m[M]);if(Dn(B,Y))P(B,Y,y,null,C,I,A,R,N);else break;O--,M--}if(S>O){if(S<=M){const B=M+1,Y=B<F?m[B].el:w;for(;S<=M;)P(null,m[S]=N?wt(m[S]):st(m[S]),y,Y,C,I,A,R,N),S++}}else if(S>M)for(;S<=O;)Je(_[S],C,I,!0),S++;else{const B=S,Y=S,se=new Map;for(S=Y;S<=M;S++){const Le=m[S]=N?wt(m[S]):st(m[S]);Le.key!=null&&se.set(Le.key,S)}let Z,Fe=0;const Ae=M-Y+1;let Xe=!1,Ze=0;const On=new Array(Ae);for(S=0;S<Ae;S++)On[S]=0;for(S=B;S<=O;S++){const Le=_[S];if(Fe>=Ae){Je(Le,C,I,!0);continue}let et;if(Le.key!=null)et=se.get(Le.key);else for(Z=Y;Z<=M;Z++)if(On[Z-Y]===0&&Dn(Le,m[Z])){et=Z;break}et===void 0?Je(Le,C,I,!0):(On[et-Y]=S+1,et>=Ze?Ze=et:Xe=!0,P(Le,m[et],y,null,C,I,A,R,N),Fe++)}const Go=Xe?qf(On):hn;for(Z=Go.length-1,S=Ae-1;S>=0;S--){const Le=Y+S,et=m[Le],Ko=Le+1<F?m[Le+1].el:w;On[S]===0?P(null,et,y,Ko,C,I,A,R,N):Xe&&(Z<0||S!==Go[Z]?Ut(et,y,Ko,2):Z--)}}},Ut=(_,m,y,w,C=null)=>{const{el:I,type:A,transition:R,children:N,shapeFlag:S}=_;if(S&6){Ut(_.component.subTree,m,y,w);return}if(S&128){_.suspense.move(m,y,w);return}if(S&64){A.move(_,m,y,An);return}if(A===Ve){s(I,m,y);for(let O=0;O<N.length;O++)Ut(N[O],m,y,w);s(_.anchor,m,y);return}if(A===Xi){f(_,m,y);return}if(w!==2&&S&1&&R)if(w===0)R.beforeEnter(I),s(I,m,y),Be(()=>R.enter(I),C);else{const{leave:O,delayLeave:M,afterLeave:B}=R,Y=()=>s(I,m,y),se=()=>{O(I,()=>{Y(),B&&B()})};M?M(I,Y,se):se()}else s(I,m,y)},Je=(_,m,y,w=!1,C=!1)=>{const{type:I,props:A,ref:R,children:N,dynamicChildren:S,shapeFlag:F,patchFlag:O,dirs:M,cacheIndex:B}=_;if(O===-2&&(C=!1),R!=null&&Ks(R,null,y,_,!0),B!=null&&(m.renderCache[B]=void 0),F&256){m.ctx.deactivate(_);return}const Y=F&1&&M,se=!$n(_);let Z;if(se&&(Z=A&&A.onVnodeBeforeUnmount)&&tt(Z,m,_),F&6)mh(_.component,y,w);else{if(F&128){_.suspense.unmount(y,w);return}Y&&Wt(_,null,m,"beforeUnmount"),F&64?_.type.remove(_,m,y,An,w):S&&!S.hasOnce&&(I!==Ve||O>0&&O&64)?Rn(S,m,y,!1,!0):(I===Ve&&O&384||!C&&F&16)&&Rn(N,m,y),w&&jo(_)}(se&&(Z=A&&A.onVnodeUnmounted)||Y)&&Be(()=>{Z&&tt(Z,m,_),Y&&Wt(_,null,m,"unmounted")},y)},jo=_=>{const{type:m,el:y,anchor:w,transition:C}=_;if(m===Ve){gh(y,w);return}if(m===Xi){v(_);return}const I=()=>{i(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(_.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:R}=C,N=()=>A(y,I);R?R(_.el,I,N):N()}else I()},gh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},mh=(_,m,y)=>{const{bum:w,scope:C,job:I,subTree:A,um:R,m:N,a:S}=_;il(N),il(S),w&&Fs(w),C.stop(),I&&(I.flags|=8,Je(A,_,m,y)),R&&Be(R,m),Be(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Rn=(_,m,y,w=!1,C=!1,I=0)=>{for(let A=I;A<_.length;A++)Je(_[A],m,y,w,C)},Ns=_=>{if(_.shapeFlag&6)return Ns(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[ff];return y?g(y):m};let $i=!1;const $o=(_,m,y)=>{_==null?m._vnode&&Je(m._vnode,null,null,!0):P(m._vnode||null,_,m,null,null,null,y),m._vnode=_,$i||($i=!0,Qo(),Qc(),$i=!1)},An={p:P,um:Je,m:Ut,r:jo,mt:Nn,mc:D,pc:ne,pbc:ae,n:Ns,o:t};return{render:$o,hydrate:void 0,createApp:Ff($o)}}function Ji({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function zf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ma(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=wt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ma(o,l)),l.type===Ri&&(l.el=o.el)}}function qf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function xa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xa(e)}function il(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Yf=Symbol.for("v-scx"),Qf=()=>Kn(Yf);function pn(t,e,n){return ya(t,e,n)}function ya(t,e,n=ee){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ie({},n),c=e&&s||!e&&r!=="post";let a;if(is){if(r==="sync"){const x=Qf();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=it,x.resume=it,x.pause=it,x}}const h=ye;l.call=(x,E,P)=>ot(x,h,E,P);let p=!1;r==="post"?l.scheduler=x=>{Be(x,h&&h.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(x,E)=>{E?x():ro(x)}),l.augmentJob=x=>{e&&(x.flags|=4),p&&(x.flags|=2,h&&(x.id=h.uid,x.i=h))};const g=of(t,e,l);return is&&(a?a.push(g):c&&g()),g}function Jf(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?va(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=xs(this),l=ya(i,r.bind(s),n);return o(),l}function va(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Xf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$e(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function Zf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ee;let i=n;const r=e.startsWith("update:"),o=r&&Xf(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>de(h)?h.trim():h)),o.number&&(i=n.map(pr)));let l,c=s[l=Gi(e)]||s[l=Gi($e(e))];!c&&r&&(c=s[l=Gi(nn(e))]),c&&ot(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ot(a,t,6,i)}}function ba(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const c=a=>{const h=ba(a,e,!0);h&&(l=!0,Ie(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ce(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Ie(o,r),ce(t)&&s.set(t,o),o)}function Ni(t,e){return!t||!yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,nn(e))||X(t,e))}function rl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:h,props:p,data:g,setupState:x,ctx:E,inheritAttrs:P}=t,$=Gs(t);let d,u;try{if(n.shapeFlag&4){const v=i||s,b=v;d=st(a.call(b,v,h,p,x,g,E)),u=l}else{const v=e;d=st(v.length>1?v(p,{attrs:l,slots:o,emit:c}):v(p,null)),u=e.props?l:ed(l)}}catch(v){zn.length=0,Si(v,t,1),d=rt(Xt)}let f=d;if(u&&P!==!1){const v=Object.keys(u),{shapeFlag:b}=f;v.length&&b&7&&(r&&v.some(Kr)&&(u=td(u,r)),f=xn(f,u,!1,!0))}return n.dirs&&(f=xn(f,null,!1,!0),f.dirs=f.dirs?f.dirs.concat(n.dirs):n.dirs),n.transition&&oo(f,n.transition),d=f,Gs($),d}const ed=t=>{let e;for(const n in t)(n==="class"||n==="style"||yi(n))&&((e||(e={}))[n]=t[n]);return e},td=(t,e)=>{const n={};for(const s in t)(!Kr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function nd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ol(s,o,a):!!o;if(c&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const g=h[p];if(o[g]!==s[g]&&!Ni(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ol(s,o,a):!0:!!o;return!1}function ol(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ni(n,r))return!0}return!1}function sd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ca=t=>t.__isSuspense;function id(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):af(t)}const Ve=Symbol.for("v-fgt"),Ri=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),zn=[];let He=null;function ve(t=!1){zn.push(He=t?null:[])}function rd(){zn.pop(),He=zn[zn.length-1]||null}let ss=1;function ll(t,e=!1){ss+=t,t<0&&He&&e&&(He.hasOnce=!0)}function Ea(t){return t.dynamicChildren=ss>0?He||hn:null,rd(),ss>0&&He&&He.push(t),t}function Oe(t,e,n,s,i,r){return Ea(W(t,e,n,s,i,r,!0))}function Ia(t,e,n,s,i){return Ea(rt(t,e,n,s,i,!0))}function wa(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const Sa=({key:t})=>t??null,Ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||fe(t)||V(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,s=0,i=null,r=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sa(e),ref:e&&Ls(e),scopeId:Xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return l?(co(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),ss>0&&!o&&He&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&He.push(c),c}const rt=od;function od(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ia)&&(t=Xt),wa(t)){const l=xn(t,e,!0);return n&&co(l,n),ss>0&&!r&&He&&(l.shapeFlag&6?He[He.indexOf(t)]=l:He.push(l)),l.patchFlag=-2,l}if(md(t)&&(t=t.__vccOpts),e){e=ld(e);let{class:l,style:c}=e;l&&!de(l)&&(e.class=Qr(l)),ce(c)&&(so(c)&&!H(c)&&(c=Ie({},c)),e.style=Yr(c))}const o=de(t)?1:Ca(t)?128:df(t)?64:ce(t)?4:V(t)?2:0;return W(t,e,n,s,i,o,r,!0)}function ld(t){return t?so(t)||ua(t)?Ie({},t):t:null}function xn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?cd(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sa(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Ls(e)):[r,Ls(e)]:Ls(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&oo(h,c.clone(h)),h}function ut(t=" ",e=0){return rt(Ri,null,t,e)}function Ct(t="",e=!1){return e?(ve(),Ia(Xt,null,t)):rt(Xt,null,t)}function st(t){return t==null||typeof t=="boolean"?rt(Xt):H(t)?rt(Ve,null,t.slice()):wa(t)?wt(t):rt(Ri,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xn(t)}function co(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),co(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ua(e)?e._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),s&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function cd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Qr([e.class,s.class]));else if(i==="style")e.style=Yr([e.style,s.style]);else if(yi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function tt(t,e,n,s=null){ot(t,e,7,[n,s])}const ad=la();let ud=0;function hd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ad,r={uid:ud++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fa(s,i),emitsOptions:ba(s,i),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:s.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Zf.bind(null,r),t.ce&&t.ce(r),r}let ye=null,qs,Er;{const t=Ei(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Er=e("__VUE_SSR_SETTERS__",n=>is=n)}const xs=t=>{const e=ye;return qs(t),t.scope.on(),()=>{t.scope.off(),qs(e)}},cl=()=>{ye&&ye.scope.off(),qs(null)};function Ta(t){return t.vnode.shapeFlag&4}let is=!1;function fd(t,e=!1,n=!1){e&&Er(e);const{props:s,children:i}=t.vnode,r=Ta(t);Hf(t,s,r,e),jf(t,i,n);const o=r?dd(t,e):void 0;return e&&Er(!1),o}function dd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rf);const{setup:s}=n;if(s){Lt();const i=t.setupContext=s.length>1?_d(t):null,r=xs(t),o=ms(s,t,0,[t.props,i]),l=vc(o);if(Bt(),r(),(l||t.sp)&&!$n(t)&&Zc(t),l){if(o.then(cl,cl),e)return o.then(c=>{al(t,c)}).catch(c=>{Si(c,t,0)});t.asyncDep=o}else al(t,o)}else Na(t)}function al(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Kc(e)),Na(t)}function Na(t,e,n){const s=t.type;t.render||(t.render=s.render||it);{const i=xs(t);Lt();try{Af(t)}finally{Bt(),i()}}}const pd={get(t,e){return be(t,"get",""),t[e]}};function _d(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,pd),slots:t.slots,emit:t.emit,expose:e}}function Ai(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Kc(io(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function gd(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function md(t){return V(t)&&"__vccOpts"in t}const Ra=(t,e)=>sf(t,e,is),xd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ir;const ul=typeof window<"u"&&window.trustedTypes;if(ul)try{Ir=ul.createPolicy("vue",{createHTML:t=>t})}catch{}const Aa=Ir?t=>Ir.createHTML(t):t=>t,yd="http://www.w3.org/2000/svg",vd="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,hl=ht&&ht.createElement("template"),bd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ht.createElementNS(yd,t):e==="mathml"?ht.createElementNS(vd,t):n?ht.createElement(t,{is:n}):ht.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ht.createTextNode(t),createComment:t=>ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{hl.innerHTML=Aa(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=hl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cd=Symbol("_vtc");function Ed(t,e,n){const s=t[Cd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fl=Symbol("_vod"),Id=Symbol("_vsh"),wd=Symbol(""),Sd=/(^|;)\s*display\s*:/;function Td(t,e,n){const s=t.style,i=de(n);let r=!1;if(n&&!i){if(e)if(de(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Bs(s,l,"")}else for(const o in e)n[o]==null&&Bs(s,o,"");for(const o in n)o==="display"&&(r=!0),Bs(s,o,n[o])}else if(i){if(e!==n){const o=s[wd];o&&(n+=";"+o),s.cssText=n,r=Sd.test(n)}}else e&&t.removeAttribute("style");fl in t&&(t[fl]=r?s.display:"",t[Id]&&(s.display="none"))}const dl=/\s*!important$/;function Bs(t,e,n){if(H(n))n.forEach(s=>Bs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Nd(t,e);dl.test(n)?t.setProperty(nn(s),n.replace(dl,""),"important"):t[s]=n}}const pl=["Webkit","Moz","ms"],Zi={};function Nd(t,e){const n=Zi[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return Zi[e]=s;s=Ci(s);for(let i=0;i<pl.length;i++){const r=pl[i]+s;if(r in t)return Zi[e]=r}return e}const _l="http://www.w3.org/1999/xlink";function gl(t,e,n,s,i,r=Nh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_l,e.slice(6,e.length)):t.setAttributeNS(_l,e,n):n==null||r&&!Ic(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ft(n)?String(n):n)}function ml(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Aa(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ic(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function an(t,e,n,s){t.addEventListener(e,n,s)}function Rd(t,e,n,s){t.removeEventListener(e,n,s)}const xl=Symbol("_vei");function Ad(t,e,n,s,i=null){const r=t[xl]||(t[xl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Od(e);if(s){const a=r[e]=kd(s,i);an(t,l,a,c)}else o&&(Rd(t,l,o,c),r[e]=void 0)}}const yl=/(?:Once|Passive|Capture)$/;function Od(t){let e;if(yl.test(t)){e={};let s;for(;s=t.match(yl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let er=0;const Pd=Promise.resolve(),Dd=()=>er||(Pd.then(()=>er=0),er=Date.now());function kd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ot(Md(s,n.value),e,5,[s])};return n.value=t,n.attached=Dd(),n}function Md(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Fd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Ed(t,s,o):e==="style"?Td(t,n,s):yi(e)?Kr(e)||Ad(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ld(t,e,s,o))?(ml(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(s))?ml(t,$e(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),gl(t,e,s,o))};function Ld(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&vl(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return vl(e)&&de(n)?!1:e in t}const bl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Fs(e,n):e};function Bd(t){t.target.composing=!0}function Cl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),Hd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[tr]=bl(i);const r=s||i.props&&i.props.type==="number";an(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=pr(l)),t[tr](l)}),n&&an(t,"change",()=>{t.value=t.value.trim()}),e||(an(t,"compositionstart",Bd),an(t,"compositionend",Cl),an(t,"change",Cl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[tr]=bl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?pr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Ud=Ie({patchProp:Fd},bd);let El;function Wd(){return El||(El=Gf(Ud))}const Vd=(...t)=>{const e=Wd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=$d(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,jd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $d(t){return de(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Oa;const Oi=t=>Oa=t,Pa=Symbol();function wr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qn||(qn={}));function Gd(){const t=Nc(!0),e=t.run(()=>Kt({}));let n=[],s=[];const i=io({install(r){Oi(i),i._a=r,r.provide(Pa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Da=()=>{};function Il(t,e,n,s=Da){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Rc()&&Rh(i),i}function on(t,...e){t.slice().forEach(n=>{n(...e)})}const Kd=t=>t(),wl=Symbol(),nr=Symbol();function Sr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];wr(i)&&wr(s)&&t.hasOwnProperty(n)&&!fe(s)&&!Nt(s)?t[n]=Sr(i,s):t[n]=s}return t}const zd=Symbol();function qd(t){return!wr(t)||!t.hasOwnProperty(zd)}const{assign:Et}=Object;function Yd(t){return!!(fe(t)&&t.effect)}function Qd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const h=Zh(n.state.value[t]);return Et(h,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=io(Ra(()=>{Oi(n);const x=n._s.get(t);return o[g].call(x,x)})),p),{}))}return c=ka(t,a,e,n,s,!0),c}function ka(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),c={deep:!0};let a,h,p=[],g=[],x;const E=s.state.value[t];!r&&!E&&(s.state.value[t]={}),Kt({});let P;function $(D){let j;a=h=!1,typeof D=="function"?(D(s.state.value[t]),j={type:qn.patchFunction,storeId:t,events:x}):(Sr(s.state.value[t],D),j={type:qn.patchObject,payload:D,storeId:t,events:x});const ae=P=Symbol();qc().then(()=>{P===ae&&(a=!0)}),h=!0,on(p,j,s.state.value[t])}const d=r?function(){const{state:j}=n,ae=j?j():{};this.$patch(Re=>{Et(Re,ae)})}:Da;function u(){o.stop(),p=[],g=[],s._s.delete(t)}const f=(D,j="")=>{if(wl in D)return D[nr]=j,D;const ae=function(){Oi(s);const Re=Array.from(arguments),Ue=[],ct=[];function Nn(q){Ue.push(q)}function Ss(q){ct.push(q)}on(g,{args:Re,name:ae[nr],store:b,after:Nn,onError:Ss});let he;try{he=D.apply(this&&this.$id===t?this:b,Re)}catch(q){throw on(ct,q),q}return he instanceof Promise?he.then(q=>(on(Ue,q),q)).catch(q=>(on(ct,q),Promise.reject(q))):(on(Ue,he),he)};return ae[wl]=!0,ae[nr]=j,ae},v={_p:s,$id:t,$onAction:Il.bind(null,g),$patch:$,$reset:d,$subscribe(D,j={}){const ae=Il(p,D,j.detached,()=>Re()),Re=o.run(()=>pn(()=>s.state.value[t],Ue=>{(j.flush==="sync"?h:a)&&D({storeId:t,type:qn.direct,events:x},Ue)},Et({},c,j)));return ae},$dispose:u},b=wi(v);s._s.set(t,b);const U=(s._a&&s._a.runWithContext||Kd)(()=>s._e.run(()=>(o=Nc()).run(()=>e({action:f}))));for(const D in U){const j=U[D];if(fe(j)&&!Yd(j)||Nt(j))r||(E&&qd(j)&&(fe(j)?j.value=E[D]:Sr(j,E[D])),s.state.value[t][D]=j);else if(typeof j=="function"){const ae=f(j,D);U[D]=ae,l.actions[D]=j}}return Et(b,U),Et(Q(b),U),Object.defineProperty(b,"$state",{get:()=>s.state.value[t],set:D=>{$(j=>{Et(j,D)})}}),s._p.forEach(D=>{Et(b,o.run(()=>D({store:b,app:s._a,pinia:s,options:l})))}),E&&r&&n.hydrate&&n.hydrate(b.$state,E),a=!0,h=!0,b}/*! #__NO_SIDE_EFFECTS__ */function Jd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Bf();return o=o||(c?Kn(Pa,null):null),o&&Oi(o),o=Oa,o._s.has(t)||(i?ka(t,e,s,o):Qd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Xd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Zd=()=>{};var Sl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw En(e)},En=function(t){return new Error("Firebase Database ("+Ma.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ep=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,h=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[h],n[p],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ep(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new tp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),p!==64){const E=a<<6&192|p;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const La=function(t){const e=Fa(t);return ao.encodeByteArray(e,!0)},Ys=function(t){return La(t).replace(/\./g,"")},Tr=function(t){try{return ao.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){return Ba(void 0,t)}function Ba(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sp(n)||(t[n]=Ba(t[n],e[n]));return t}function sp(t){return t!=="__proto__"}/**
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
 */function ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rp=()=>ip().__FIREBASE_DEFAULTS__,op=()=>{if(typeof process>"u"||typeof Sl>"u")return;const t=Sl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},Ha=()=>{try{return Zd()||rp()||op()||lp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cp=t=>{var e,n;return(n=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ap=t=>{const e=cp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ua=()=>{var t;return(t=Ha())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function up(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ys(JSON.stringify(n)),Ys(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hp())}function fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dp(){return Ma.NODE_ADMIN===!0}function pp(){try{return typeof indexedDB=="object"}catch{return!1}}function _p(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="FirebaseError";class ys extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gp,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?mp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ys(i,l,s)}}function mp(t,e){return t.replace(xp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const xp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rs(Tr(r[0])||""),n=rs(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},yp=function(t){const e=ja(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vp=function(t){const e=ja(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Tl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Nl(r)&&Nl(o)){if(!Js(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Nl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,h;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),h=1518500249):(a=r^o^l,h=1859775393):p<60?(a=r&o|l&(r|o),h=2400959708):(a=r^o^l,h=3395469782);const g=(i<<5|i>>>27)+a+c+h+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function uo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Di=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function In(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ip{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sp(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wp(t){return t===$t?void 0:t}function Sp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ip(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Np={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Rp=re.INFO,Ap={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Op=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ap[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Rp,this._logHandler=Op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Pp=(t,e)=>e.some(n=>t instanceof n);let Rl,Al;function Dp(){return Rl||(Rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kp(){return Al||(Al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ga=new WeakMap,Nr=new WeakMap,Ka=new WeakMap,sr=new WeakMap,ho=new WeakMap;function Mp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ga.set(n,t)}).catch(()=>{}),ho.set(e,t),e}function Fp(t){if(Nr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Nr.set(t,e)}let Rr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lp(t){Rr=t(Rr)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ir(this),e,...n);return Ka.set(s,e.sort?e.sort():[e]),Rt(s)}:kp().includes(t)?function(...e){return t.apply(ir(this),e),Rt(Ga.get(this))}:function(...e){return Rt(t.apply(ir(this),e))}}function Hp(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&Fp(t),Pp(t,Dp())?new Proxy(t,Rr):t)}function Rt(t){if(t instanceof IDBRequest)return Mp(t);if(sr.has(t))return sr.get(t);const e=Hp(t);return e!==t&&(sr.set(t,e),ho.set(e,t)),e}const ir=t=>ho.get(t);function Up(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Wp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],rr=new Map;function Ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rr.get(e))return rr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Vp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Wp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return rr.set(e,r),r}Lp(t=>({...t,get:(e,n,s)=>Ol(e,n)||t.get(e,n,s),has:(e,n)=>!!Ol(e,n)||t.has(e,n)}));/**
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
 */class jp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($p(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function $p(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",Pl="0.11.2";/**
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
 */const mt=new $a("@firebase/app"),Gp="@firebase/app-compat",Kp="@firebase/analytics-compat",zp="@firebase/analytics",qp="@firebase/app-check-compat",Yp="@firebase/app-check",Qp="@firebase/auth",Jp="@firebase/auth-compat",Xp="@firebase/database",Zp="@firebase/data-connect",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",s_="@firebase/installations",i_="@firebase/installations-compat",r_="@firebase/messaging",o_="@firebase/messaging-compat",l_="@firebase/performance",c_="@firebase/performance-compat",a_="@firebase/remote-config",u_="@firebase/remote-config-compat",h_="@firebase/storage",f_="@firebase/storage-compat",d_="@firebase/firestore",p_="@firebase/vertexai",__="@firebase/firestore-compat",g_="firebase",m_="11.4.0";/**
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
 */const Or="[DEFAULT]",x_={[Ar]:"fire-core",[Gp]:"fire-core-compat",[zp]:"fire-analytics",[Kp]:"fire-analytics-compat",[Yp]:"fire-app-check",[qp]:"fire-app-check-compat",[Qp]:"fire-auth",[Jp]:"fire-auth-compat",[Xp]:"fire-rtdb",[Zp]:"fire-data-connect",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[s_]:"fire-iid",[i_]:"fire-iid-compat",[r_]:"fire-fcm",[o_]:"fire-fcm-compat",[l_]:"fire-perf",[c_]:"fire-perf-compat",[a_]:"fire-rc",[u_]:"fire-rc-compat",[h_]:"fire-gcs",[f_]:"fire-gcs-compat",[d_]:"fire-fst",[__]:"fire-fst-compat",[p_]:"fire-vertex","fire-js":"fire-js",[g_]:"fire-js-all"};/**
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
 */const Xs=new Map,y_=new Map,Pr=new Map;function Dl(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(Pr.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Pr.set(e,t);for(const n of Xs.values())Dl(n,t);for(const n of y_.values())Dl(n,t);return!0}function v_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function b_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const C_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new Va("app","Firebase",C_);/**
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
 */class E_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const I_=m_;function za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Or,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=Ua()),!n)throw At.create("no-options");const r=Xs.get(i);if(r){if(Js(n,r.options)&&Js(s,r.config))return r;throw At.create("duplicate-app",{appName:i})}const o=new Tp(i);for(const c of Pr.values())o.addComponent(c);const l=new E_(n,s,o);return Xs.set(i,l),l}function w_(t=Or){const e=Xs.get(t);if(!e&&t===Or&&Ua())return za();if(!e)throw At.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=x_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(l.join(" "));return}Zs(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const S_="firebase-heartbeat-database",T_=1,ls="firebase-heartbeat-store";let or=null;function qa(){return or||(or=Up(S_,T_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),or}async function N_(t){try{const n=(await qa()).transaction(ls),s=await n.objectStore(ls).get(Ya(t));return await n.done,s}catch(e){if(e instanceof ys)mt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(n.message)}}}async function kl(t,e){try{const s=(await qa()).transaction(ls,"readwrite");await s.objectStore(ls).put(e,Ya(t)),await s.done}catch(n){if(n instanceof ys)mt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mt.warn(s.message)}}}function Ya(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R_=1024,A_=30;class O_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ml();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>A_){const o=k_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ml(),{heartbeatsToSend:s,unsentEntries:i}=P_(this._heartbeatsCache.heartbeats),r=Ys(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return mt.warn(n),""}}}function Ml(){return new Date().toISOString().substring(0,10)}function P_(t,e=R_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class D_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pp()?_p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await N_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fl(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}function k_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function M_(t){Zs(new os("platform-logger",e=>new jp(e),"PRIVATE")),Zs(new os("heartbeat",e=>new O_(e),"PRIVATE")),_n(Ar,Pl,t),_n(Ar,Pl,"esm2017"),_n("fire-js","")}M_("");var F_="firebase",L_="11.4.0";/**
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
 */_n(F_,L_,"app");var Ll={};const Bl="@firebase/database",Hl="1.0.13";/**
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
 */let Qa="";function B_(t){Qa=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new H_(e)}}catch{}return new U_},zt=Ja("localStorage"),W_=Ja("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new $a("@firebase/database"),V_=function(){let t=1;return function(){return t++}}(),Xa=function(t){const e=Ep(t),n=new Cp;n.update(e);const s=n.digest();return ao.encodeByteArray(s)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vs.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let Yn=null,Ul=!0;const j_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),gn.logLevel=re.VERBOSE,Yn=gn.log.bind(gn)},Ee=function(...t){if(Ul===!0&&(Ul=!1,Yn===null&&W_.get("logging_enabled")===!0&&j_()),Yn){const e=vs.apply(null,t);Yn(e)}},bs=function(t){return function(...e){Ee(t,...e)}},Dr=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);gn.error(e)},xt=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw gn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+vs(...t);gn.warn(e)},$_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Za=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vn="[MIN_NAME]",Zt="[MAX_NAME]",wn=function(t,e){if(t===e)return 0;if(t===vn||e===Zt)return-1;if(e===vn||t===Zt)return 1;{const n=Wl(t),s=Wl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},K_=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},fo=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=fo(t[e[s]]);return n+="}",n},eu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tu=function(t){T(!Za(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const h=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},z_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},q_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Y_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Q_=new RegExp("^-?(0*)\\d{1,10}$"),J_=-2147483648,X_=2147483647,Wl=function(t){if(Q_.test(t)){const e=Number(t);if(e>=J_&&e<=X_)return e}return null},Sn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Z_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class eg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,b_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="5",nu="v",su="s",iu="r",ru="f",ou=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lu="ls",cu="p",kr="ac",au="websocket",uu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ng(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fu(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===au)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ng(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return np(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={},cr={};function _o(t){const e=t.toString();return lr[e]||(lr[e]=new sg),lr[e]}function ig(t,e){const n=t.toString();return cr[n]||(cr[n]=e()),cr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Sn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="start",og="close",lg="pLPCommand",cg="pRTLPCB",du="id",pu="pw",_u="ser",ag="cb",ug="seg",hg="ts",fg="d",dg="dframe",gu=1870,mu=30,pg=gu-mu,_g=25e3,gg=3e4;class un{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=_o(n),this.urlFn=c=>(this.appCheckToken&&(c[kr]=this.appCheckToken),fu(n,uu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gg)),G_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new go((...r)=>{const[o,l,c,a,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vl)this.id=l,this.password=c;else if(o===og)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vl]="t",s[_u]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ag]=this.scriptTagHolder.uniqueCallbackIdentifier),s[nu]=po,this.transportSessionId&&(s[su]=this.transportSessionId),this.lastSessionId&&(s[lu]=this.lastSessionId),this.applicationId&&(s[cu]=this.applicationId),this.appCheckToken&&(s[kr]=this.appCheckToken),typeof location<"u"&&location.hostname&&ou.test(location.hostname)&&(s[iu]=ru);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){un.forceAllow_=!0}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){return un.forceAllow_?!0:!un.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!z_()&&!q_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=La(n),i=eu(s,pg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[dg]="t",s[du]=e,s[pu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class go{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=V_(),window[lg+this.uniqueCallbackIdentifier]=e,window[cg+this.uniqueCallbackIdentifier]=n,this.myIFrame=go.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[du]=this.myID,e[pu]=this.myPW,e[_u]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mu+s.length<=gu;){const o=this.pendingSegs.shift();s=s+"&"+ug+i+"="+o.seg+"&"+hg+i+"="+o.ts+"&"+fg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(_g)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=16384,xg=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=_o(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[nu]=po,typeof location<"u"&&location.hostname&&ou.test(location.hostname)&&(o[iu]=ru),n&&(o[su]=n),s&&(o[lu]=s),i&&(o[kr]=i),r&&(o[cu]=r),fu(e,au,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;dp(),this.mySock=new ei(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ei!==null&&!Ke.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eu(n,mg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static get ALL_TRANSPORTS(){return[un,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of cs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=6e4,vg=5e3,bg=10*1024,Cg=100*1024,ar="t",jl="d",Eg="s",$l="r",Ig="e",Gl="o",Kl="a",zl="n",ql="p",wg="h";class Sg{constructor(e,n,s,i,r,o,l,c,a,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Cg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ar in e){const n=e[ar];n===Kl?this.upgradeIfSecondaryHealthy_():n===$l?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(ar,e);if(jl in e){const s=e[jl];if(n===wg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===zl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Eg?this.onConnectionShutdown_(s):n===$l?this.onReset_(s):n===Ig?Dr("Server Error: "+s):n===Gl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),po!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends yu{static getInstance(){return new ti}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=32,Ql=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new te("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function vu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Tg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new te(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Ne(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function mo(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ng{constructor(e,n){this.errorPrefix_=n,this.parts_=bu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Di(this.parts_[s]);Eu(this)}}function Rg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Di(e),Eu(t)}function Ag(t){const e=t.parts_.pop();t.byteLength_-=Di(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eu(t){if(t.byteLength_>Ql)throw new Error(t.errorPrefix_+"has a key path longer than "+Ql+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yl+") or object contains a cycle "+Gt(t))}function Gt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends yu{static getInstance(){return new xo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=1e3,Og=60*5*1e3,Jl=30*1e3,Pg=1.3,Dg=3e4,kg="server_kill",Xl=3;class gt extends xu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=gt.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mn,this.maxReconnectDelay_=Og,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Pi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;gt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=yn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dr("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Dg&&(this.reconnectDelay_=Mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Sg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{ke(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(kg)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ke(p),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tl(this.interruptReasons_)&&(this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>fo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xl&&(this.reconnectDelay_=Jl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qa.replace(/\./g,"-")]=1,Wa()?e["framework.cordova"]=1:fp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Tl(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(vn,e),i=new K(vn,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;class Iu extends ki{static get __EMPTY_NODE(){return Ps}static set __EMPTY_NODE(e){Ps=e}compare(e,n){return wn(e.name,n.name)}isDefinedOn(e){throw En("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Zt,Ps)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Ps)}toString(){return".key"}}const mn=new Iu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??me.RED,this.left=i??De.EMPTY_NODE,this.right=r??De.EMPTY_NODE}copy(e,n,s,i,r){return new me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Mg{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new Mg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){return wn(t.name,e.name)}function yo(t,e){return wn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;function Lg(t){Mr=t}const wu=function(t){return typeof t=="number"?"number:"+tu(t):"string:"+t},Su=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else T(t===Mr||t.isEmpty(),"priority of unexpected type.");T(t===Mr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;class ge{static set __childrenNodeConstructor(e){Zl=e}static get __childrenNodeConstructor(){return Zl}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Su(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:G(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tu(this.value_):e+=this.value_,this.lazyHash_=Xa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu,Nu;function Bg(t){Tu=t}function Hg(t){Nu=t}class Ug extends ki{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Zt,new ge("[PRIORITY-POST]",Nu))}makePost(e,n){const s=Tu(e);return new K(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new Ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=Math.log(2);class Vg{constructor(e){const n=r=>parseInt(Math.log(r)/Wg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(t,e,n,s){t.sort(e);const i=function(c,a){const h=a-c;let p,g;if(h===0)return null;if(h===1)return p=t[c],g=n?n(p):p,new me(g,p.node,me.BLACK,null,null);{const x=parseInt(h/2,10)+c,E=i(c,x),P=i(x+1,a);return p=t[x],g=n?n(p):p,new me(g,p.node,me.BLACK,E,P)}},r=function(c){let a=null,h=null,p=t.length;const g=function(E,P){const $=p-E,d=p;p-=E;const u=i($+1,d),f=t[$],v=n?n(f):f;x(new me(v,f.node,P,null,u))},x=function(E){a?(a.left=E,a=E):(h=E,a=E)};for(let E=0;E<c.count;++E){const P=c.nextBitIsOne(),$=Math.pow(2,c.count-(E+1));P?g($,me.BLACK):(g($,me.BLACK),g($,me.RED))}return h},o=new Vg(t.length),l=r(o);return new De(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const ln={};class _t{static get Default(){return T(ln&&ue,"ChildrenNode.ts has not been loaded"),ur=ur||new _t({".priority":ln},{".priority":ue}),ur}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=yn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ni(s,e.getCompare()):l=ln;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new _t(h,a)}addToIndexes(e,n){const s=Qs(this.indexes_,(i,r)=>{const o=yn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ln)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(K.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ni(l,o.getCompare())}else return ln;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new K(e.name,l))),c.insert(e,e.node)}});return new _t(s,this.indexSet_)}removeFromIndexes(e,n){const s=Qs(this.indexes_,i=>{if(i===ln)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new _t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;class L{static get EMPTY_NODE(){return Fn||(Fn=new L(new De(yo),null,_t.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Su(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fn:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{T(G(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wu(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xa(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jg extends L{constructor(){super(new De(yo),L.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Cs=new jg;Object.defineProperties(K,{MIN:{value:new K(vn,L.EMPTY_NODE)},MAX:{value:new K(Zt,Cs)}});Iu.__EMPTY_NODE=L.EMPTY_NODE;ge.__childrenNodeConstructor=L;Lg(Cs);Hg(Cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=!0;function xe(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,xe(e))}if(!(t instanceof Array)&&$g){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new K(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=ni(n,Fg,o=>o.name,yo);if(s){const o=ni(n,ue.getCompare());return new L(r,xe(e),new _t({".priority":o},{".priority":ue}))}else return new L(r,xe(e),_t.Default)}else{let n=L.EMPTY_NODE;return Me(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Bg(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends ki{constructor(e){super(),this.indexPath_=e,T(!z(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}makePost(e,n){const s=xe(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new K(Zt,e)}toString(){return bu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg extends ki{compare(e,n){const s=e.node.compareTo(n.node);return s===0?wn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=xe(e);return new K(n,s)}toString(){return".value"}}const zg=new Kg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function as(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function us(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(as(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(bn(n,s)):o.trackChildChange(us(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(as(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(us(i,r,o))}else s.trackChildChange(bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new vo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,x)=>p(x,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new K(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(h&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(us(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(as(n,p));const P=l.updateImmediateChild(n,L.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(bn(g.name,g.node)),P.updateImmediateChild(g.name,g.node)):P}}else return s.isEmpty()?e:h&&o(a,c)>=0?(r!=null&&(r.trackChildChange(as(a.name,a.node)),r.trackChildChange(bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qg(t){return t.loadsAllData()?new vo(t.getIndex()):t.hasLimit()?new Yg(t):new hs(t)}function ec(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===zg?n="$value":t.index_===mn?n="$key":(T(t.index_ instanceof Gg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends xu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=si.getListenId_(e,s),l={};this.listens_[o]=l;const c=ec(e._queryParams);this.restRequest_(r+".json",c,(a,h)=>{let p=h;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),yn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=si.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ec(e._queryParams),s=e._path.toString(),i=new Pi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=rs(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return{value:null,children:new Map}}function Au(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,ii());const i=t.children.get(s);e=oe(e),Au(i,e,n)}}function Fr(t,e,n){t.value!==null?n(e,t.value):Xg(t,(s,i)=>{const r=new te(e.toString()+"/"+s);Fr(i,r,n)})}function Xg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=10*1e3,em=30*1e3,tm=5*60*1e3;class nm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zg(e);const s=nc+(em-nc)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*tm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function Ou(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Co(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qe.ACK_USER_WRITE,this.source=Ou()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new ri(J(),n,this.revert)}}else return T(G(this.path)===e,"operationForChild called for unrelated child."),new ri(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=qe.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new fs(this.source,J()):new fs(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qe.OVERWRITE}operationForChild(e){return z(this.path)?new en(this.source,J(),this.snap.getImmediateChild(e)):new en(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qe.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new en(this.source,J(),n.value):new ds(this.source,J(),n)}else return T(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function im(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qg(o.childName,o.snapshotNode))}),Ln(t,i,"child_removed",e,s,n),Ln(t,i,"child_added",e,s,n),Ln(t,i,"child_moved",r,s,n),Ln(t,i,"child_changed",e,s,n),Ln(t,i,"value",e,s,n),i}function Ln(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>om(t,l,c)),o.forEach(l=>{const c=rm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function rm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function om(t,e,n){if(e.childName==null||n.childName==null)throw En("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e){return{eventCache:t,serverCache:e}}function Jn(t,e,n,s){return Mi(new kt(e,n,s),t.serverCache)}function Pu(t,e,n,s){return Mi(t.eventCache,new kt(e,n,s))}function oi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;const lm=()=>(hr||(hr=new De(K_)),hr);class le{static fromObject(e){let n=new le(null);return Me(e,(s,i)=>{n=n.set(new te(s),i)}),n}constructor(e,n=lm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(oe(e),n);return r!=null?{path:_e(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(oe(e)):new le(null)}}set(e,n){if(z(e))return new le(n,this.children);{const s=G(e),r=(this.children.get(s)||new le(null)).set(oe(e),n),o=this.children.insert(s,r);return new le(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(oe(e)):null}}setTree(e,n){if(z(e))return n;{const s=G(e),r=(this.children.get(s)||new le(null)).setTree(oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new le(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(oe(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(oe(e),_e(n,i),s):new le(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new le(null))}}function Xn(t,e,n){if(z(e))return new Qe(new le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new le(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function sc(t,e,n){let s=t;return Me(n,(i,r)=>{s=Xn(s,_e(e,i),r)}),s}function ic(t,e){if(z(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new le(null));return new Qe(n)}}function Lr(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function rc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function Ot(t,e){if(z(e))return t;{const n=sn(t,e);return n!=null?new Qe(new le(n)):new Qe(t.writeTree_.subtree(e))}}function Br(t){return t.writeTree_.isEmpty()}function Cn(t,e){return Du(J(),t.writeTree_,e)}function Du(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Du(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){return Lu(e,t)}function cm(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function am(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function um(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&hm(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return fm(t),!0;if(s.snap)t.visibleWrites=ic(t.visibleWrites,s.path);else{const l=s.children;Me(l,c=>{t.visibleWrites=ic(t.visibleWrites,_e(s.path,c))})}return!0}else return!1}function hm(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(_e(t.path,n),e))return!0;return!1}function fm(t){t.visibleWrites=ku(t.allWrites,dm,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dm(t){return t.visible}function ku(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Ne(n,o),s=Xn(s,l,r.snap)):ze(o,n)&&(l=Ne(o,n),s=Xn(s,J(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Ne(n,o),s=sc(s,l,r.children);else if(ze(o,n))if(l=Ne(o,n),z(l))s=sc(s,J(),r.children);else{const c=yn(r.children,G(l));if(c){const a=c.getChild(oe(l));s=Xn(s,J(),a)}}}else throw En("WriteRecord should have .snap or .children")}}return s}function Mu(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(Br(o))return n;if(n==null&&!Lr(o,J()))return null;{const l=n||L.EMPTY_NODE;return Cn(o,l)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&Br(r))return n;if(!i&&n==null&&!Lr(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(ze(a.path,e)||ze(e,a.path))},l=ku(t.allWrites,o,e),c=n||L.EMPTY_NODE;return Cn(l,c)}}}function pm(t,e,n){let s=L.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const c=Cn(Ot(r,new te(o)),l);s=s.updateImmediateChild(o,c)}),rc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return rc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function _m(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Lr(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return Br(o)?i.getChild(n):Cn(o,i.getChild(n))}}function gm(t,e,n,s){const i=_e(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return Cn(o,s.getNode().getImmediateChild(n))}else return null}function mm(t,e){return sn(t.visibleWrites,e)}function xm(t,e,n,s,i,r,o){let l;const c=Ot(t.visibleWrites,e),a=sn(c,J());if(a!=null)l=a;else if(n!=null)l=Cn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&h.length<i;)p(x,s)!==0&&h.push(x),x=g.getNext();return h}else return[]}function ym(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function li(t,e,n,s){return Mu(t.writeTree,t.treePath,e,n,s)}function Io(t,e){return pm(t.writeTree,t.treePath,e)}function oc(t,e,n,s){return _m(t.writeTree,t.treePath,e,n,s)}function ci(t,e){return mm(t.writeTree,_e(t.treePath,e))}function vm(t,e,n,s,i,r){return xm(t.writeTree,t.treePath,e,n,s,i,r)}function wo(t,e,n){return gm(t.writeTree,t.treePath,e,n)}function Fu(t,e){return Lu(_e(t.treePath,e),t.writeTree)}function Lu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,us(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,us(s,e.snapshotNode,i.oldSnap));else throw En("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Bu=new Cm;class So{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=vm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){return{filter:t}}function Im(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wm(t,e,n,s,i){const r=new bm;let o,l;if(n.type===qe.OVERWRITE){const a=n;a.source.fromUser?o=Hr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!z(a.path),o=ai(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===qe.MERGE){const a=n;a.source.fromUser?o=Tm(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Ur(t,e,a.path,a.children,s,i,l,r))}else if(n.type===qe.ACK_USER_WRITE){const a=n;a.revert?o=Am(t,e,a.path,s,i,r):o=Nm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===qe.LISTEN_COMPLETE)o=Rm(t,e,n.path,s,r);else throw En("Unknown operation type: "+n.type);const c=r.getChanges();return Sm(e,o,c),{viewCache:o,changes:c}}function Sm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=oi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ru(oi(e)))}}function Hu(t,e,n,s,i,r){const o=e.eventCache;if(ci(s,n)!=null)return e;{let l,c;if(z(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=tn(e),h=a instanceof L?a:L.EMPTY_NODE,p=Io(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=li(s,tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=G(n);if(a===".priority"){T(Dt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const p=oc(s,n,h,c);p!=null?l=t.filter.updatePriority(h,p):l=o.getNode()}else{const h=oe(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=oc(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(h,g):p=o.getNode().getImmediateChild(a)}else p=wo(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,h,i,r):l=o.getNode()}}return Jn(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function ai(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const h=o?t.filter:t.filter.getIndexedFilter();if(z(n))a=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=h.updateFullNode(c.getNode(),x,null)}else{const x=G(n);if(!c.isCompleteForPath(n)&&Dt(n)>1)return e;const E=oe(n),$=c.getNode().getImmediateChild(x).updateChild(E,s);x===".priority"?a=h.updatePriority(c.getNode(),$):a=h.updateChild(c.getNode(),x,$,E,Bu,null)}const p=Pu(e,a,c.isFullyInitialized()||z(n),h.filtersNodes()),g=new So(i,p,r);return Hu(t,p,n,i,g,l)}function Hr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const h=new So(i,e,r);if(z(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Jn(e,a,!0,t.filter.filtersNodes());else{const p=G(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Jn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=oe(n),x=l.getNode().getImmediateChild(p);let E;if(z(g))E=s;else{const P=h.getCompleteChild(p);P!=null?vu(g)===".priority"&&P.getChild(Cu(g)).isEmpty()?E=P:E=P.updateChild(g,s):E=L.EMPTY_NODE}if(x.equals(E))c=e;else{const P=t.filter.updateChild(l.getNode(),p,E,g,h,o);c=Jn(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function lc(t,e){return t.eventCache.isCompleteForChild(e)}function Tm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const h=_e(n,c);lc(e,G(h))&&(l=Hr(t,l,h,a,i,r,o))}),s.foreach((c,a)=>{const h=_e(n,c);lc(e,G(h))||(l=Hr(t,l,h,a,i,r,o))}),l}function cc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ur(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;z(n)?a=s:a=new le(null).setTree(n,s);const h=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(h.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),E=cc(t,x,g);c=ai(t,c,new te(p),E,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!h.hasChild(p)&&!x){const E=e.serverCache.getNode().getImmediateChild(p),P=cc(t,E,g);c=ai(t,c,new te(p),P,i,r,o,l)}}),c}function Nm(t,e,n,s,i,r,o){if(ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(t,e,n,c.getNode().getChild(n),i,r,l,o);if(z(n)){let a=new le(null);return c.getNode().forEachChild(mn,(h,p)=>{a=a.set(new te(h),p)}),Ur(t,e,n,a,i,r,l,o)}else return e}else{let a=new le(null);return s.foreach((h,p)=>{const g=_e(n,h);c.isCompleteForPath(g)&&(a=a.set(h,c.getNode().getChild(g)))}),Ur(t,e,n,a,i,r,l,o)}}function Rm(t,e,n,s,i){const r=e.serverCache,o=Pu(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return Hu(t,o,n,s,Bu,i)}function Am(t,e,n,s,i,r){let o;if(ci(s,n)!=null)return e;{const l=new So(s,e,i),c=e.eventCache.getNode();let a;if(z(n)||G(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=li(s,tn(e));else{const p=e.serverCache.getNode();T(p instanceof L,"serverChildren would be complete if leaf node"),h=Io(s,p)}h=h,a=t.filter.updateFullNode(c,h,r)}else{const h=G(n);let p=wo(s,h,e.serverCache);p==null&&e.serverCache.isCompleteForChild(h)&&(p=c.getImmediateChild(h)),p!=null?a=t.filter.updateChild(c,h,p,oe(n),l,r):e.eventCache.getNode().hasChild(h)?a=t.filter.updateChild(c,h,L.EMPTY_NODE,oe(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=li(s,tn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ci(s,J())!=null,Jn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new vo(s.getIndex()),r=Qg(s);this.processor_=Em(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),h=new kt(c,o.isFullyInitialized(),i.filtersNodes()),p=new kt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Mi(p,h),this.eventGenerator_=new sm(this.query_)}get query(){return this.query_}}function Pm(t){return t.viewCache_.serverCache.getNode()}function Dm(t){return oi(t.viewCache_)}function km(t,e){const n=tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function ac(t){return t.eventRegistrations_.length===0}function Mm(t,e){t.eventRegistrations_.push(e)}function uc(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function hc(t,e,n,s){e.type===qe.MERGE&&e.source.queryId!==null&&(T(tn(t.viewCache_),"We should always have a full cache before handling merges"),T(oi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=wm(t.processor_,i,e,n,s);return Im(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Fm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(Ru(n.getNode())),Uu(t,s,n.getNode(),e)}function Uu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return im(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class Wu{constructor(){this.views=new Map}}function Lm(t){T(!ui,"__referenceConstructor has already been defined"),ui=t}function Bm(){return T(ui,"Reference.ts has not been loaded"),ui}function Hm(t){return t.views.size===0}function To(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),hc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(hc(o,e,n,s));return r}}function Vu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=li(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=Io(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=Mi(new kt(l,c,!1),new kt(s,i,!1));return new Om(e,a)}return o}function Um(t,e,n,s,i,r){const o=Vu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mm(o,n),Fm(o,n)}function Wm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Mt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(uc(a,n,s)),ac(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(uc(c,n,s)),ac(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Mt(t)&&r.push(new(Bm())(e._repo,e._path)),{removed:r,events:o}}function ju(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pt(t,e){let n=null;for(const s of t.views.values())n=n||km(s,e);return n}function $u(t,e){if(e._queryParams.loadsAllData())return Li(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Gu(t,e){return $u(t,e)!=null}function Mt(t){return Li(t)!=null}function Li(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function Vm(t){T(!hi,"__referenceConstructor has already been defined"),hi=t}function jm(){return T(hi,"Reference.ts has not been loaded"),hi}let $m=1;class fc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=ym(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ku(t,e,n,s,i){return cm(t.pendingWriteTree_,e,n,s,i),i?Is(t,new en(Ou(),e,n)):[]}function qt(t,e,n=!1){const s=am(t.pendingWriteTree_,e);if(um(t.pendingWriteTree_,e)){let r=new le(null);return s.snap!=null?r=r.set(J(),!0):Me(s.children,o=>{r=r.set(new te(o),!0)}),Is(t,new ri(s.path,r,n))}else return[]}function Es(t,e,n){return Is(t,new en(Co(),e,n))}function Gm(t,e,n){const s=le.fromObject(n);return Is(t,new ds(Co(),e,s))}function Km(t,e){return Is(t,new fs(Co(),e))}function zm(t,e,n){const s=Ro(t,n);if(s){const i=Ao(s),r=i.path,o=i.queryId,l=Ne(r,e),c=new fs(Eo(o),l);return Oo(t,r,c)}else return[]}function fi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Gu(o,e))){const c=Wm(o,e,n,s);Hm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const h=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,x)=>Mt(x));if(h&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=Qm(g);for(let E=0;E<x.length;++E){const P=x[E],$=P.query,d=Qu(t,P);t.listenProvider_.startListening(Zn($),ps(t,$),d.hashFn,d.onComplete)}}}!p&&a.length>0&&!s&&(h?t.listenProvider_.stopListening(Zn(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Bi(g));t.listenProvider_.stopListening(Zn(g),x)}))}Jm(t,a)}return l}function zu(t,e,n,s){const i=Ro(t,s);if(i!=null){const r=Ao(i),o=r.path,l=r.queryId,c=Ne(o,e),a=new en(Eo(l),c,n);return Oo(t,o,a)}else return[]}function qm(t,e,n,s){const i=Ro(t,s);if(i){const r=Ao(i),o=r.path,l=r.queryId,c=Ne(o,e),a=le.fromObject(n),h=new ds(Eo(l),c,a);return Oo(t,o,h)}else return[]}function Wr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const E=Ne(g,i);r=r||Pt(x,E),o=o||Mt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Mt(l),r=r||Pt(l,J())):(l=new Wu,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,E)=>{const P=Pt(E,J());P&&(r=r.updateImmediateChild(x,P))}));const a=Gu(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Bi(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=Xm();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const h=Fi(t.pendingWriteTree_,i);let p=Um(l,e,n,h,r,c);if(!a&&!o&&!s){const g=$u(l,e);p=p.concat(Zm(t,e,g))}return p}function No(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ne(o,e),a=Pt(l,c);if(a)return a});return Mu(i,e,r,n,!0)}function Ym(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,h)=>{const p=Ne(a,n);s=s||Pt(h,p)});let i=t.syncPointTree_.get(n);i?s=s||Pt(i,J()):(i=new Wu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new kt(s,!0,!1):null,l=Fi(t.pendingWriteTree_,e._path),c=Vu(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return Dm(c)}function Is(t,e){return qu(e,t.syncPointTree_,null,Fi(t.pendingWriteTree_,J()))}function qu(t,e,n,s){if(z(t.path))return Yu(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Pt(i,J()));let r=[];const o=G(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,h=Fu(s,o);r=r.concat(qu(l,c,a,h))}return i&&(r=r.concat(To(i,t,s,n))),r}}function Yu(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Pt(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Fu(s,o),h=t.operationForChild(o);h&&(r=r.concat(Yu(h,l,c,a)))}),i&&(r=r.concat(To(i,t,s,n))),r}function Qu(t,e){const n=e.query,s=ps(t,n);return{hashFn:()=>(Pm(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?zm(t,n._path,s):Km(t,n._path);{const r=Y_(i,n);return fi(t,n,null,r)}}}}function ps(t,e){const n=Bi(e);return t.queryToTagMap.get(n)}function Bi(t){return t._path.toString()+"$"+t._queryIdentifier}function Ro(t,e){return t.tagToQueryMap.get(e)}function Ao(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function Oo(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Fi(t.pendingWriteTree_,e);return To(s,n,i,null)}function Qm(t){return t.fold((e,n,s)=>{if(n&&Mt(n))return[Li(n)];{let i=[];return n&&(i=ju(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(jm())(t._repo,t._path):t}function Jm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Bi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Xm(){return $m++}function Zm(t,e,n){const s=e._path,i=ps(t,e),r=Qu(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,h,p)=>{if(!z(a)&&h&&Mt(h))return[Li(h).query];{let g=[];return h&&(g=g.concat(ju(h).map(x=>x.query))),Me(p,(x,E)=>{g=g.concat(E)}),g}});for(let a=0;a<c.length;++a){const h=c[a];t.listenProvider_.stopListening(Zn(h),ps(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Po(n)}node(){return this.node_}}class Do{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Do(this.syncTree_,n)}node(){return No(this.syncTree_,this.path_)}}const ex=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dc=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nx(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},nx=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},sx=function(t,e,n,s){return ko(e,new Do(n,t),s)},Ju=function(t,e,n){return ko(t,new Po(e),n)};function ko(t,e,n){const s=t.getPriority().val(),i=dc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=dc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(ue,(l,c)=>{const a=ko(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Fo(t,e){let n=e instanceof te?e:new te(e),s=t,i=G(n);for(;i!==null;){const r=yn(s.node.children,i)||{children:{},childCount:0};s=new Mo(i,s,r),n=oe(n),i=G(n)}return s}function Tn(t){return t.node.value}function Xu(t,e){t.node.value=e,Vr(t)}function Zu(t){return t.node.childCount>0}function ix(t){return Tn(t)===void 0&&!Zu(t)}function Hi(t,e){Me(t.node.children,(n,s)=>{e(new Mo(n,t,s))})}function eh(t,e,n,s){n&&e(t),Hi(t,i=>{eh(i,e,!0)})}function rx(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ws(t){return new te(t.parent===null?t.name:ws(t.parent)+"/"+t.name)}function Vr(t){t.parent!==null&&ox(t.parent,t.name,t)}function ox(t,e,n){const s=ix(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Vr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/[\[\].#$\/\u0000-\u001F\u007F]/,cx=/[\[\].#$\u0000-\u001F\u007F]/,fr=10*1024*1024,th=function(t){return typeof t=="string"&&t.length!==0&&!lx.test(t)},nh=function(t){return typeof t=="string"&&t.length!==0&&!cx.test(t)},ax=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nh(t)},ux=function(t,e,n,s){Lo(uo(t,"value"),e,n)},Lo=function(t,e,n){const s=n instanceof te?new Ng(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Gt(s)+" with contents = "+e.toString());if(Za(e))throw new Error(t+"contains "+e.toString()+" "+Gt(s));if(typeof e=="string"&&e.length>fr/3&&Di(e)>fr)throw new Error(t+"contains a string greater than "+fr+" utf8 bytes "+Gt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!th(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Rg(s,o),Lo(t,l,s),Ag(s)}),i&&r)throw new Error(t+' contains ".value" child '+Gt(s)+" in addition to actual children.")}},sh=function(t,e,n,s){if(!nh(n))throw new Error(uo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hx=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sh(t,e,n)},ih=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!th(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ax(n))throw new Error(uo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!mo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function rh(t,e,n){Bo(t,n),oh(t,s=>mo(s,e))}function lt(t,e,n){Bo(t,n),oh(t,s=>ze(s,e)||ze(e,s))}function oh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(px(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function px(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&Ee("event: "+n.toString()),Sn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="repo_interrupt",gx=25;class mx{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new Mo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xx(t,e,n){if(t.stats_=_o(t.repoInfo_),t.forceRestClient_||Z_())t.server_=new si(t.repoInfo_,(s,i,r,o)=>{pc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_c(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new gt(t.repoInfo_,e,(s,i,r,o)=>{pc(t,s,i,r,o)},s=>{_c(t,s)},s=>{vx(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ig(t.repoInfo_,()=>new nm(t.stats_,t.server_)),t.infoData_=new Jg,t.infoSyncTree_=new fc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Es(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Uo(t,"connected",!1),t.serverSyncTree_=new fc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);lt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function yx(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ho(t){return ex({timestamp:yx(t)})}function pc(t,e,n,s,i){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Qs(n,a=>xe(a));o=qm(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=zu(t.serverSyncTree_,r,c,i)}else if(s){const c=Qs(n,a=>xe(a));o=Gm(t.serverSyncTree_,r,c)}else{const c=xe(n);o=Es(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Wi(t,r)),lt(t.eventQueue_,l,o)}function _c(t,e){Uo(t,"connected",e),e===!1&&Ex(t)}function vx(t,e){Me(e,(n,s)=>{Uo(t,n,s)})}function Uo(t,e,n){const s=new te("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Es(t.infoSyncTree_,s,i);lt(t.eventQueue_,s,r)}function lh(t){return t.nextWriteId_++}function bx(t,e,n){const s=Ym(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Wr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Es(t.serverSyncTree_,e._path,r);else{const l=ps(t.serverSyncTree_,e);o=zu(t.serverSyncTree_,e._path,r,l)}return lt(t.eventQueue_,e._path,o),fi(t.serverSyncTree_,e,n,null,!0),r},i=>(Ui(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Cx(t,e,n,s,i){Ui(t,"set",{path:e.toString(),value:n,priority:s});const r=Ho(t),o=xe(n,s),l=No(t.serverSyncTree_,e),c=Ju(o,l,r),a=lh(t),h=Ku(t.serverSyncTree_,e,c,a,!0);Bo(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const E=g==="ok";E||ke("set at "+e+" failed: "+g);const P=qt(t.serverSyncTree_,a,!E);lt(t.eventQueue_,e,P),Tx(t,i,g,x)});const p=fh(t,e);Wi(t,p),lt(t.eventQueue_,p,[])}function Ex(t){Ui(t,"onDisconnectEvents");const e=Ho(t),n=ii();Fr(t.onDisconnect_,J(),(i,r)=>{const o=sx(i,r,t.serverSyncTree_,e);Au(n,i,o)});let s=[];Fr(n,J(),(i,r)=>{s=s.concat(Es(t.serverSyncTree_,i,r));const o=fh(t,i);Wi(t,o)}),t.onDisconnect_=ii(),lt(t.eventQueue_,J(),s)}function Ix(t,e,n){let s;G(e._path)===".info"?s=Wr(t.infoSyncTree_,e,n):s=Wr(t.serverSyncTree_,e,n),rh(t.eventQueue_,e._path,s)}function wx(t,e,n){let s;G(e._path)===".info"?s=fi(t.infoSyncTree_,e,n):s=fi(t.serverSyncTree_,e,n),rh(t.eventQueue_,e._path,s)}function Sx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_x)}function Ui(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function Tx(t,e,n,s){e&&Sn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ch(t,e,n){return No(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Wo(t,e=t.transactionQueueTree_){if(e||Vi(t,e),Tn(e)){const n=uh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Nx(t,ws(e),n)}else Zu(e)&&Hi(e,n=>{Wo(t,n)})}function Nx(t,e,n){const s=n.map(a=>a.currentWriteId),i=ch(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const h=n[a];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const p=Ne(e,h.path);r=r.updateChild(p,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ui(t,"transaction put response",{path:c.toString(),status:a});let h=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(qt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Vi(t,Fo(t.transactionQueueTree_,e)),Wo(t,t.transactionQueueTree_),lt(t.eventQueue_,e,h);for(let g=0;g<p.length;g++)Sn(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{ke("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}Wi(t,e)}},o)}function Wi(t,e){const n=ah(t,e),s=ws(n),i=uh(t,n);return Rx(t,i,s),s}function Rx(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Ne(n,c.path);let h=!1,p;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,p=c.abortReason,i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=gx)h=!0,p="maxretry",i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=ch(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Lo("transaction failed: Data returned ",x,c.path);let E=xe(x);typeof x=="object"&&x!=null&&vt(x,".priority")||(E=E.updatePriority(g.getPriority()));const $=c.currentWriteId,d=Ho(t),u=Ju(E,g,d);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=u,c.currentWriteId=lh(t),o.splice(o.indexOf($),1),i=i.concat(Ku(t.serverSyncTree_,c.path,u,c.currentWriteId,c.applyLocally)),i=i.concat(qt(t.serverSyncTree_,$,!0))}else h=!0,p="nodata",i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Vi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Sn(s[l]);Wo(t,t.transactionQueueTree_)}function ah(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&Tn(s)===void 0;)s=Fo(s,n),e=oe(e),n=G(e);return s}function uh(t,e){const n=[];return hh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function hh(t,e,n){const s=Tn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Hi(e,i=>{hh(t,i,n)})}function Vi(t,e){const n=Tn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Xu(e,n.length>0?n:void 0)}Hi(e,s=>{Vi(t,s)})}function fh(t,e){const n=ws(ah(t,e)),s=Fo(t.transactionQueueTree_,e);return rx(s,i=>{dr(t,i)}),dr(t,s),eh(s,i=>{dr(t,i)}),n}function dr(t,e){const n=Tn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xu(e,void 0):n.length=r+1,lt(t.eventQueue_,ws(e),i);for(let o=0;o<s.length;o++)Sn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ox(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const gc=function(t,e){const n=Px(t),s=n.namespace;n.domain==="firebase.com"&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new te(n.pathString)}},Px=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let h=t.indexOf("/");h===-1&&(h=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(h,p)),h<p&&(i=Ax(t.substring(h,p)));const g=Ox(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class kx{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:vu(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=tc(this._queryParams),n=fo(e);return n==="{}"?"default":n}get _queryObject(){return tc(this._queryParams)}isEqual(e){if(e=In(e),!(e instanceof Vo))return!1;const n=this._repo===e._repo,s=mo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Tg(this._path)}}class bt extends Vo{constructor(e,n){super(e,n,new bo,!1)}get parent(){const e=Cu(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),s=jr(this.ref,e);return new _s(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,jr(this.ref,s),ue)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ks(t,e){return t=In(t),t._checkNotDeleted("ref"),e!==void 0?jr(t._root,e):t._root}function jr(t,e){return t=In(t),G(t._path)===null?hx("child","path",e):sh("child","path",e),new bt(t._repo,_e(t._path,e))}function Mx(t){return ih("remove",t._path),ph(t,null)}function ph(t,e){t=In(t),ih("set",t._path),ux("set",e,t._path);const n=new Pi;return Cx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Fx(t){t=In(t);const e=new dh(()=>{}),n=new ji(e);return bx(t._repo,t,n).then(s=>new _s(s,new bt(t._repo,t._path),t._queryParams.getIndex()))}class ji{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Dx("value",this,new _s(e.snapshotNode,new bt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kx(this,e,n):null}matches(e){return e instanceof ji?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Lx(t,e,n,s,i){const r=new dh(n,void 0),o=new ji(r);return Ix(t._repo,t,o),()=>wx(t._repo,t,o)}function Bx(t,e,n,s){return Lx(t,"value",e)}Lm(bt);Vm(bt);/**
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
 */const Hx="FIREBASE_DATABASE_EMULATOR_HOST",$r={};let Ux=!1;function Wx(t,e,n,s){t.repoInfo_=new hu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Vx(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gc(r,i),l=o.repoInfo,c;typeof process<"u"&&Ll&&(c=Ll[Hx]),c?(r=`http://${c}?ns=${l.namespace}`,o=gc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new tg(t.name,t.options,e);fx("Invalid Firebase Database URL",o),z(o.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=$x(l,t,a,new eg(t,n));return new Gx(h,t)}function jx(t,e){const n=$r[e];(!n||n[t.key]!==t)&&xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Sx(t),delete n[t.key]}function $x(t,e,n,s){let i=$r[e.name];i||(i={},$r[e.name]=i);let r=i[t.toURLString()];return r&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new mx(t,Ux,n,s),i[t.toURLString()]=r,r}class Gx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xt("Cannot call "+e+" on a deleted database.")}}function Kx(t=w_(),e){const n=v_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ap("database");s&&zx(n,...s)}return n}function zx(t,e,n,s={}){t=In(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Js(s,r.repoInfo_.emulatorOptions))return;xt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Hs(Hs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:up(s.mockUserToken,t.app.options.projectId);o=new Hs(l)}Wx(r,i,s,o)}/**
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
 */function qx(t){B_(I_),Zs(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vx(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_n(Bl,Hl,t),_n(Bl,Hl,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qx();const Bn=pi;(function(t,e){const n=pi,s=t();for(;;)try{if(parseInt(n(490))/1*(parseInt(n(484))/2)+-parseInt(n(481))/3*(parseInt(n(478))/4)+parseInt(n(485))/5*(-parseInt(n(488))/6)+-parseInt(n(486))/7*(parseInt(n(480))/8)+parseInt(n(476))/9*(parseInt(n(489))/10)+-parseInt(n(483))/11*(-parseInt(n(482))/12)+-parseInt(n(487))/13===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(di,447160);function di(){const t=["237ZERioH","72NAHItb","1297945igcqdr","6NRXRXW","7915zCbhRa","75425DmSgwn","9090848MvhRTM","900DUVraZ","1226370sKlNHS","275882BdBjLH","iamwait","iamwait.firebasestorage.app","720775593565","54DzMDVg","G-3RRDNZ9ME5","14932OfeiLM","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","440kZYYKw"];return di=function(){return t},di()}const Yx={apiKey:Bn(479),authDomain:"iamwait.firebaseapp.com",databaseURL:"https://iamwait-default-rtdb.europe-west1.firebasedatabase.app",projectId:Bn(491),storageBucket:Bn(492),messagingSenderId:Bn(493),appId:"1:720775593565:web:1a263bf6a87ecfea3817b4",measurementId:Bn(477)},Qx=za(Yx),Ms=Kx(Qx);function pi(t,e){const n=di();return pi=function(s,i){return s=s-476,n[s]},pi(t,e)}const mc=St;(function(t,e){const n=St,s=t();for(;;)try{if(-parseInt(n(161))/1*(-parseInt(n(170))/2)+-parseInt(n(167))/3+parseInt(n(164))/4*(-parseInt(n(183))/5)+-parseInt(n(151))/6*(parseInt(n(182))/7)+-parseInt(n(157))/8+parseInt(n(158))/9+parseInt(n(154))/10*(parseInt(n(159))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(_i,700757);function St(t,e){const n=_i();return St=function(s,i){return s=s-150,n[s]},St(t,e)}function _i(){const t=["3844uzILOX","buQlo"," : данные не найдены","error","bjluB","color: darkgreen","zHNPt","then","oFyQO","stringify","yztwZ","fuamA","70343rGWdYO","412445RKZjds","SYTmu","catch","Ошибка записи данных: ","yycCk","192amHpJw","OKJKB","lookField","30GcBjHp"," -  данные записаны"," на прослушке","3097184rMJeDT","11446902huYdHl","4674153YXQvfC","exists","262ztyxOA"," = ","log","52GqAQFT","ZAcoE",">>> Данные по ","1705143kTvMyC","########### ########## Данные ","val"];return _i=function(){return t},_i()}const _h=Jd("fbStore2",{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:4}),actions:{async getField(t){const e=St,n={OKJKB:function(i,r){return i+r},ZAcoE:function(i,r){return i(r)}},s=ks(Ms,t);return n.ZAcoE(Fx,s)[e(177)](i=>{const r=e;if(i[r(160)]()){const o=i[r(169)]();return Hn(n[r(152)](r(166)+t+r(162),JSON[r(179)](o))),o}else n[r(165)](Hn,t+r(172))})},async setField(t,e){const n=St,s={bjluB:function(r,o){return r(o)},buQlo:function(r,o){return r+o},yycCk:n(155),zHNPt:n(186),yztwZ:function(r,o,l){return r(o,l)}},i=s[n(180)](ks,Ms,t);return s[n(180)](ph,i,e).then(()=>{const r=n;s[r(174)](Hn,s[r(171)](t,s[r(150)]))})[n(185)](r=>{const o=n;console[o(173)](s[o(176)],r)})},async onValue(t){const e=St,n={fuamA:function(i,r){return i(r)},SYTmu:function(i,r,o){return i(r,o)}},s=n[e(184)](ks,Ms,t);Bx(s,i=>{const r=e;n[r(181)](Hn,r(168)+t+r(156)),this[r(153)]=i[r(169)]()})},async removeField(t){const e=St,n={oFyQO:function(i,r,o){return i(r,o)},zDIHB:function(i,r){return i(r)}};console[e(163)](t);const s=n[e(178)](ks,Ms,t);n.zDIHB(Mx,s).then(()=>{Hn("Данные "+t+" удалены!")})}}}),Hn=t=>console[mc(163)]("%c "+t,mc(175)),gs=pt;(function(t,e){const n=pt,s=t();for(;;)try{if(-parseInt(n(418))/1*(-parseInt(n(457))/2)+-parseInt(n(481))/3*(parseInt(n(364))/4)+-parseInt(n(406))/5*(-parseInt(n(486))/6)+-parseInt(n(482))/7+parseInt(n(390))/8*(parseInt(n(439))/9)+parseInt(n(365))/10+-parseInt(n(413))/11*(parseInt(n(335))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,514209);function gi(){const t=["UBnnU","OiYYb","mCEeW","XUBDE","wQggb","ljJLs","iHamO",", поеп не откликнится ","input"," ! ","DiEJI","MBcIG","value","SVhIZ","ZBnzr","* нельзя выбирать себя","uiKRx","swxHm","eyORY","1934724hRvjCE","::::","Добавился в список, жду","ZwmQt","iULOG"," Зарегистрироваться в поиске ","log","4px","cpUKR","setField","now","Сменить nickName","/play/","wUJNJ","ВСЕ НАСТРОЙКИ ИГРЫ","DBXla","qShGr","dGLpA","then","ANALIZ ","KetrG","reload","Согласиться","> >> > >> gotoStartgane","SpeVe","vZYut","ceDfs","AHRIN","dEbtO","1329748cbSGfV","9672770OWzyzD","game = "," Привет, ","lQTql","button","qjanu","IMhBP","bJMpI","lookField","nYoVP","QUMPX","VzHyu","5|1|4|2|0|3","CismU","setItem","HjRVA","SHpdu","g1/look/","BinderComp","kxoMl","pfvjn","voslx","Отказаться","hlurZ","RatyJ","2625320YiaCBH","game","nMGcR","111","zOvQy","name2","onClick","OAJFS","YQAhK","ntnma","nDBHL","stage","green-bt","g1/play/","bHupt","QTHSo","5GSnhtn","getItem","nickName","onValue","wZxMV","Lveoq","split","55gNTNnN","name","KpYAA","PpVAo","nTjhm","1618rDSLnL","CDuhA","SoxtZ","vZWbX","red-notice","BDQpN","* тут можно поменять ваш Никнейм"," Жду игрока ","................ОБНОВИЛСЯ А Я ПРОПАЛ","xdavX","djHeF","KrCVW"," : ","tbEFb","removeField","UFWxM","qqfhw","zWYuC","oxbiC","fEgCp","keys","9BQCFId","myId","accept","XkcSX","larger","myNickName","QmTCC","gkEFF"," Вас выбрал игрок: ","AkGfL","CPEeK","TiodQ","xKmII","id2","JrCsi","forEach","DlJbQ","KaUfQ","214YsRLDj","SXzFP","oBNRV","Liviu","FJrPN","oXlUa","eOzkb","cQlDZ","sUGXB","getField"," stage:","g1/look","QEJVp","div","XOpAv","tByvK","qONZb","loprM","gRRBj","QXevc","Ncooe","srNtV","length","xKvae","3pskbTy","52528tzBcrN","Cbtqi","rcpcF","OPnWb","1150302BawTBq","Список желающих играть:","CxaSU"," с игроком ","eNIdJ","/game/"," Контекс игры:","myName"];return gi=function(){return t},gi()}function pt(t,e){const n=gi();return pt=function(s,i){return s=s-328,n[s]},pt(t,e)}const Jx={key:0},Xx={key:0},Zx=[gs(396)],e0={key:1},t0={key:0},n0=[gs(396)],s0={key:1,class:gs(422)},i0={key:2},r0={key:3},o0={key:4},l0=pf({__name:gs(383),props:{game:{}},setup(t){const e=gs,n={wUJNJ:function(d){return d()},VzHyu:function(d,u){return d+u},loprM:e(336),CDuhA:function(d,u){return d+u},kxoMl:function(d,u){return d+u},djHeF:e(491),bJMpI:e(366),eNIdJ:function(d,u){return d+u},FJrPN:e(347),tbEFb:function(d,u){return d===u},zWYuC:function(d,u){return d(u)},vZYut:function(d,u){return d>u},ssLdc:function(d,u){return d==u},wQggb:e(354),EKrNe:e(393),wZxMV:e(468),xKmII:function(d,u,f){return d(u,f)},KaUfQ:function(d,u){return d+u},CismU:"res",AHRIN:function(d,u){return d==u},SpeVe:function(d,u,f){return d(u,f)},qjanu:e(382),eOzkb:function(d,u){return d(u)},Cbtqi:function(d,u){return d+u},QmTCC:function(d,u){return d+u},zOvQy:"gameLink",ceDfs:e(358),fEgCp:function(d,u){return d+u},Lveoq:e(403),xKvae:function(d,u){return d+u},YfkXB:"g1/game/",oBNRV:function(d,u,f){return d(u,f)},pfvjn:function(d,u,f,v,b,k){return d(u,f,v,b,k)},QXevc:e(369),cpUKR:e(402),JrCsi:function(d,u){return d(u)},DiEJI:function(d){return d()},nMGcR:function(d,u,f,v,b,k){return d(u,f,v,b,k)},KetrG:function(d,u){return d(u)},MBcIG:function(d,u,f,v,b){return d(u,f,v,b)},HHJbC:function(d,u,f,v,b){return d(u,f,v,b)},nLQwT:"::::::: Связывание :::::::",iHamO:function(d,u,f,v,b){return d(u,f,v,b)},Ncooe:function(d,u,f){return d(u,f)},QEJVp:function(d,u){return d+u},ZBnzr:function(d,u){return d(u)},ZdiMM:function(d,u,f){return d(u,f)},AkGfL:function(d,u){return d+u},XUBDE:e(467),OAJFS:function(d,u){return d(u)},KrCVW:function(d,u,f,v,b){return d(u,f,v,b)},rcpcF:"div",qShGr:function(d,u,f,v,b){return d(u,f,v,b)},dEbtO:function(d,u){return d+u},CPEeK:function(d,u){return d+u},eyORY:e(367),gkEFF:e(503),qONZb:function(d,u,f,v){return d(u,f,v)},dGLpA:function(d,u,f){return d(u,f)},uiKRx:e(443),UFWxM:e(342),ZwmQt:"center",sUGXB:function(d,u,f,v,b){return d(u,f,v,b)},oxbiC:e(422),mqAQz:e(424),lQTql:function(d,u){return d>u},XkcSX:function(d){return d()},KpYAA:function(d,u,f,v,b){return d(u,f,v,b)},nYoVP:function(d,u,f,v,b){return d(u,f,v,b)},vZWbX:function(d,u,f){return d(u,f)},RatyJ:function(d,u,f,v,b){return d(u,f,v,b)},Exofd:function(d,u,f,v,b){return d(u,f,v,b)},YQAhK:function(d,u,f){return d(u,f)},cQlDZ:function(d,u,f,v){return d(u,f,v)},QUMPX:"red-bt",Liviu:e(340),oxDei:function(d,u,f,v,b){return d(u,f,v,b)},mCEeW:function(d,u,f){return d(u,f)},OPnWb:function(d,u,f,v){return d(u,f,v)},DBXla:e(337),qqfhw:function(d,u,f,v,b){return d(u,f,v,b)},aKdXo:"Список желающих играть:",xdavX:function(d,u,f){return d(u,f)},tqgrN:e(331),KCFoN:function(d,u,f){return d(u,f)},CxaSU:function(d,u){return d===u},nDBHL:function(d,u){return d(u)},UBnnU:function(d){return d()},SHpdu:function(d,u,f,v){return d(u,f,v)},SoxtZ:e(425),XOpAv:e(501),iULOG:function(d){return d()},GWbxS:function(d,u,f,v){return d(u,f,v)},ntnma:function(d,u){return d(u)},oXlUa:e(447),RVWvU:function(d,u,f,v,b){return d(u,f,v,b)},NcOVl:function(d,u,f,v,b){return d(u,f,v,b)},JIEKG:function(d,u,f,v){return d(u,f,v)},BDQpN:function(d,u,f,v){return d(u,f,v)},hlurZ:function(d,u,f){return d(u,f)},srNtV:function(d,u){return d===u},swxHm:function(d,u,f,v,b){return d(u,f,v,b)},DlJbQ:"Играем",BcoDF:e(489),ruDcR:function(d,u,f,v,b){return d(u,f,v,b)},OiYYb:function(d,u,f,v,b){return d(u,f,v,b)},SVhIZ:e(492),gRRBj:function(d,u){return d(u)},IMhBP:function(d,u,f,v,b){return d(u,f,v,b)},Ihkic:e(444),FOnba:function(d,u,f){return d(u,f)}},s=n[e(442)](_h),i=n.OAJFS(Kt,localStorage[e(407)](n.Ihkic)),r=n.ZBnzr(Kt,[]),o=Kt(),l=Kt(),c=n[e(400)](Kt,""),a=function(){const d=e;s[d(408)]=i[d(328)],i.value&&localStorage[d(379)](d(444),i.value)};function h(){const d=e;console[d(341)](n[d(372)],t[d(391)]),s[d(466)](n[d(384)](n[d(490)](t[d(391)],n[d(461)]),s[d(440)]))[d(353)](u=>{const f=d;u?(o[f(328)]={id:u.id,name:n.VzHyu(u.name,n[f(474)])+u.id},s[f(401)]=5,s[f(466)](n[f(419)](n[f(384)](t[f(391)],n[f(428)]),u[f(391)]))[f(353)](v=>{const b=f;c[b(328)]=v})):(n.wUJNJ(g),s.stage=1)})}const p=function(d){const u=e,f={Hltpa:function(b){return b()},nTjhm:function(b,k){return n[pt(431)](b,k)},SXzFP:function(b,k){return n[pt(435)](b,k)},PpVAo:function(b,k){return n[pt(360)](b,k)},tByvK:function(b){return n.wUJNJ(b)},voslx:function(b,k){return n.ssLdc(b,k)},dtDef:function(b,k){return b>k}};console[u(341)](n[u(498)],d),r[u(328)]=[],s[u(401)]=1;let v=!1;d&&Object[u(438)](d)[u(454)](b=>{const k=u,U=k(377)[k(412)]("|");let D=0;for(;;){switch(U[D++]){case"0":d[b][k(441)]&&f.Hltpa($);continue;case"1":f[k(417)](b,f[k(458)](String,s[k(440)]))&&b&&(v=!0,s[k(401)]=2,d[b][k(452)]&&(o[k(328)]={id:d[b].id2,name:d[b][k(395)]},s[k(401)]=4));continue;case"2":f[k(416)](s.stage,2)&&!v&&(console[k(341)](k(426)),f[k(472)](alert),location[k(356)]());continue;case"3":b&&d[b]&&r[k(328)].push({id:b,name:d[b][k(414)]});continue;case"4":f[k(386)](d[b][k(452)],s[k(440)])&&(v=!0,s[k(401)]=3);continue;case"5":if(f.dtDef(s[k(401)],3))return!1;continue}break}})};n.FOnba(pn,()=>s[e(440)],d=>d&&setTimeout(h,500));function g(){const d=e;s[d(409)](n[d(410)])[d(353)](u=>{const f=d;console[f(341)](n.EKrNe,u),n[f(435)](p,u)}),n[d(451)](pn,()=>s[d(373)],u=>p(u))}function x(){const d=e;s[d(344)](n[d(456)](d(382),s[d(440)]),{name:s.nickName||s[d(493)]})}function E(d){const u=e,f={QTHSo:n[u(378)]};if(n[u(362)](d.id,s[u(440)]))return l[u(328)]=!0,n[u(359)](setTimeout,()=>l[u(328)]=!1,1500),!1;s[u(344)](n[u(376)](n[u(370)],d.id),{name:d[u(414)],id2:s[u(440)],name2:s[u(493)]}).then(v=>{const b=u;console[b(341)](f[b(405)],v),o[b(328)]={id:d.id,name:d.name},s[b(401)]=3})}function P(d){const u=e;d&&o[u(328)]&&s.setField(u(382)+o[u(328)].id,{name:o[u(328)][u(414)],id2:s[u(440)],name2:s[u(493)],accept:!0})[u(353)](f=>{console.log(n.CismU,f)})}function $(){var b,k,U;const d=e,u={HjRVA:d(382),TiodQ:function(D,j){return n.CDuhA(D,j)}};let f=Date[d(345)](),v=n.eOzkb(String,o[d(328)].id);n[d(360)](o[d(328)].id,s[d(440)])?v+=n[d(483)]("::",s[d(440)]):v=n[d(445)](s[d(440)]+"::",v),console[d(341)](n[d(394)],v),console[d(341)](n[d(361)]),s.setField(n.fEgCp(n[d(411)],s[d(440)]),{id:(b=o[d(328)])==null?void 0:b.id,name:(k=o[d(328)])==null?void 0:k.name,game:v,date:f}),s.setField(n[d(480)](d(403),(U=o[d(328)])==null?void 0:U.id),{id:s[d(440)],name:s[d(493)],game:v,date:f}),s.setField(n[d(419)](n.YfkXB,v),{game:d(349)}),n[d(459)](setTimeout,()=>{var j;const D=d;s.removeField(u[D(380)]+((j=o[D(328)])==null?void 0:j.id)),s[D(432)](u[D(450)](D(382),s[D(440)])),location[D(356)]()},2e3)}return(d,u)=>{var b,k;const f=e,v={ZohDP:function(U){return n[pt(504)](U)},ljJLs:function(U,D,j,ae,Re,Ue){return n[pt(392)](U,D,j,ae,Re,Ue)},bHupt:n[f(343)],awFKH:function(U,D){return n[f(355)](U,D)}};return ve(),n[f(505)](Oe,Ve,null,[u[32]||(u[32]=n.HHJbC(W,"hr",null,null,-1)),u[33]||(u[33]=n[f(505)](W,"i",null,n.nLQwT,-1)),u[34]||(u[34]=n.iHamO(W,"br",null,null,-1)),n.Ncooe(ut,n[f(437)](n.QmTCC(n.VzHyu(n[f(469)](" ",n[f(463)](Ge,We(s).myId)),f(430)),n[f(330)](Ge,We(s)[f(493)]))," "),1),u[35]||(u[35]=W("br",null,null,-1)),n.ZdiMM(ut,n[f(448)](n[f(437)](n[f(497)],n[f(397)](Ge,We(s)[f(401)]))," "),1),u[36]||(u[36]=n.KrCVW(W,"hr",null,null,-1)),n.tbEFb(n[f(435)](We,s)[f(401)],1)?(ve(),Oe(n[f(484)],Jx,[n[f(351)](W,"p",null,n[f(363)](n[f(449)](n[f(334)],n[f(435)](Ge,We(s)[f(408)]||We(s)[f(493)])),n[f(446)]),1),n[f(473)](W,"p",null,[n[f(352)](hf,n[f(351)](W,f(502),{"onUpdate:modelValue":u[0]||(u[0]=U=>i[f(328)]=U),maxlength:"16",style:{"font-size":n[f(332)],padding:n[f(433)],"text-align":n[f(338)]},onInput:u[1]||(u[1]=U=>a()),placeholder:f(346)},null,544),[[Hd,i.value]])]),u[8]||(u[8]=n[f(465)](W,f(470),{class:n[f(436)]},n.mqAQz,-1)),r[f(328)]&&n[f(368)](r[f(328)][f(479)],1)?(n[f(442)](ve),Oe(n[f(484)],Xx,[u[5]||(u[5]=n[f(415)](W,"h3",null,f(487),-1)),(n[f(463)](ve,!0),n[f(374)](Oe,Ve,null,n[f(421)](Xo,r.value,U=>{const D=f;return n[D(348)](ve),n[D(385)](Oe,n[D(476)],{class:n[D(343)],key:U.id,onClick:j=>E(U)},n[D(453)](Ge,U[D(414)]),9,Zx)}),128)),u[6]||(u[6]=n[f(389)](W,"br",null,null,-1)),u[7]||(u[7]=n.Exofd(W,"br",null,null,-1))])):n[f(398)](Ct,"",!0),n.cQlDZ(W,n[f(476)],{class:n[f(375)],onClick:u[2]||(u[2]=U=>x())},n[f(460)]),u[9]||(u[9]=n[f(374)](W,"br",null,null,-1)),u[10]||(u[10]=n.oxDei(W,"br",null,null,-1))])):n[f(496)](Ct,"",!0),n.tbEFb(n[f(463)](We,s).stage,2)?(n[f(442)](ve),n[f(485)](Oe,n[f(484)],e0,[u[14]||(u[14]=n[f(429)](W,"p",null,n[f(350)],-1)),r[f(328)][f(479)]?(n[f(442)](ve),n[f(464)](Oe,f(470),t0,[u[11]||(u[11]=n[f(434)](W,"h3",null,n.aKdXo,-1)),(ve(!0),Oe(Ve,null,n[f(477)](Xo,r[f(328)],U=>{const D=f;return v.ZohDP(ve),v[D(499)](Oe,"button",{class:v[D(404)],key:U.id,onClick:j=>E(U)},v.awFKH(Ge,U[D(414)]),9,n0)}),128)),u[12]||(u[12]=W("br",null,null,-1)),u[13]||(u[13]=n[f(415)](W,"br",null,null,-1))])):n[f(427)](Ct,"",!0),l[f(328)]?(ve(),n.cQlDZ(Oe,n[f(484)],s0,n.tqgrN)):n.KCFoN(Ct,"",!0)])):n.Ncooe(Ct,"",!0),n[f(488)](n[f(400)](We,s)[f(401)],3)?(n[f(494)](ve),n[f(473)](Oe,n[f(484)],i0,[n[f(381)](W,"p",null,[u[15]||(u[15]=n[f(435)](ut,n[f(420)])),W("b",null,n[f(400)](Ge,(b=o.value)==null?void 0:b.name),1),u[16]||(u[16]=n[f(330)](ut,n[f(471)]))]),u[17]||(u[17]=W("h3",null,f(487),-1))])):n[f(427)](Ct,"",!0),n.CxaSU(n[f(463)](We,s)[f(401)],4)&&((k=o[f(328)])!=null&&k.id)?(n[f(339)](ve),n.GWbxS(Oe,n[f(484)],r0,[u[18]||(u[18]=n[f(399)](ut,n[f(462)])),u[19]||(u[19]=W("br",null,null,-1)),u[20]||(u[20]=n.RVWvU(W,"br",null,null,-1)),n[f(374)](W,"b",null,n[f(435)](Ge,o.value[f(414)]),1),u[21]||(u[21]=n[f(434)](W,"br",null,null,-1)),u[22]||(u[22]=n.NcOVl(W,"br",null,null,-1)),n.JIEKG(W,n[f(476)],{class:n.cpUKR,onClick:u[3]||(u[3]=U=>P(!1))},f(387)),n[f(423)](W,n[f(476)],{class:n[f(343)],onClick:u[4]||(u[4]=U=>P(!0))},f(357))])):n[f(388)](Ct,"",!0),n[f(478)](n[f(453)](We,s)[f(401)],5)&&o[f(328)]?(n.iULOG(ve),Oe(n[f(484)],o0,[u[23]||(u[23]=n[f(333)](W,"h3",null,n[f(455)],-1)),u[24]||(u[24]=ut(n.BcoDF)),u[25]||(u[25]=n.ruDcR(W,"br",null,null,-1)),n[f(500)](W,"b",null,n[f(330)](Ge,o[f(328)].name),1),u[26]||(u[26]=n[f(374)](W,"br",null,null,-1)),u[27]||(u[27]=n.OiYYb(W,"br",null,null,-1)),u[28]||(u[28]=n[f(435)](ut,n[f(329)])),u[29]||(u[29]=W("br",null,null,-1)),n[f(398)](ut,n[f(363)](" "+n[f(475)](Ge,c[f(328)])," "),1),u[30]||(u[30]=n[f(371)](W,"br",null,null,-1)),u[31]||(u[31]=n.qShGr(W,"br",null,null,-1))])):Ct("",!0),u[37]||(u[37]=n[f(495)](W,"br",null,null,-1)),u[38]||(u[38]=W("br",null,null,-1))],64)}}}),c0={class:"game"},a0={__name:"RockPaperSScissors",setup(t){return(e,n)=>(ve(),Oe("div",c0,[n[0]||(n[0]=W("h1",null,"♕",-1)),n[1]||(n[1]=W("h2",null,null,-1)),W("div",null,[rt(l0,{game:"g1"})])]))}},u0=Xd(a0,[["__scopeId","data-v-7afa5ccc"]]),h0={__name:"App",setup(t){const e=_h();let n=Qh(u0);return na(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100))},500))}),(s,i)=>(ve(),Ia(Tf(We(n))))}};function mi(t,e){const n=xi();return mi=function(s,i){return s=s-309,n[s]},mi(t,e)}const f0=mi;(function(t,e){const n=mi,s=t();for(;;)try{if(-parseInt(n(313))/1+-parseInt(n(312))/2+parseInt(n(318))/3*(parseInt(n(310))/4)+-parseInt(n(316))/5+-parseInt(n(315))/6+-parseInt(n(317))/7+-parseInt(n(309))/8*(-parseInt(n(311))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,665739);const d0=Gd(),xc=Vd(h0);function xi(){const t=["549420opcUrE","622307QUVFwx","mount","66018llETXs","879365OzIzgA","5586560WlrTvN","1978749YSoNhh","8feqjgf","8rbTXKw","11056914gpeXSi"];return xi=function(){return t},xi()}xc.use(d0),xc[f0(314)]("#app");
