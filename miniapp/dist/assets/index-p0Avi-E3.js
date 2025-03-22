function Ws(t,e){const n=Us();return Ws=function(s,i){return s=s-251,n[s]},Ws(t,e)}(function(t,e){const n=Ws,s=t();for(;;)try{if(parseInt(n(260))/1+-parseInt(n(287))/2*(parseInt(n(275))/3)+-parseInt(n(261))/4+-parseInt(n(265))/5+-parseInt(n(280))/6+parseInt(n(272))/7+parseInt(n(283))/8*(parseInt(n(267))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Us,848256),function(){const e=Ws,n={KBxhn:e(271),LMUCY:function(o,l){return o===l},GnNcQ:"use-credentials",vsnuR:"include",Exrem:e(269),oaABU:e(258),uhADj:function(o,l){return o(l)},PjSKv:function(o,l,c){return o(l,c)},xVuES:e(285),tcZmI:e(257)},s=document[e(284)](n.xVuES)[e(278)];if(s&&s[e(256)]&&s.supports(n[e(251)]))return;for(const o of document.querySelectorAll(e(281)))n.uhADj(r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(c[l(282)]===n[l(274)])for(const a of c[l(266)])a[l(255)]===l(286)&&n[l(262)](a[l(259)],l(257))&&r(a)})[e(273)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(270)]&&(c.integrity=o[l(270)]),o[l(264)]&&(c[l(264)]=o[l(264)]),o[l(277)]===n[l(254)]?c[l(276)]=n[l(279)]:o[l(277)]===n.Exrem?c[l(276)]=l(253):c[l(276)]=n[l(252)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(263)](i,o);n[l(268)](fetch,o.href,c)}}();function Us(){const t=["PjSKv","anonymous","integrity","childList","1028279UfNCUx","observe","KBxhn","1635ceTmgR","credentials","crossOrigin","relList","vsnuR","9702252uzeZym",'link[rel="modulepreload"]',"type","14384XHxhQq","createElement","link","LINK","5918nOcaoh","tcZmI","oaABU","omit","GnNcQ","tagName","supports","modulepreload","same-origin","rel","1445031lOlZKf","3769212eMDLue","LMUCY","uhADj","referrerPolicy","3067880ZBFaQj","addedNodes","20232NDyBwR"];return Us=function(){return t},Us()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},pn=[],ut=()=>{},Th=()=>!1,wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zr=t=>t.startsWith("onUpdate:"),Re=Object.assign,eo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nh=Object.prototype.hasOwnProperty,te=(t,e)=>Nh.call(t,e),U=Array.isArray,_n=t=>Si(t)==="[object Map]",Nc=t=>Si(t)==="[object Set]",V=t=>typeof t=="function",xe=t=>typeof t=="string",Bt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Rc=t=>(pe(t)||V(t))&&V(t.then)&&V(t.catch),Ac=Object.prototype.toString,Si=t=>Ac.call(t),Rh=t=>Si(t).slice(8,-1),Pc=t=>Si(t)==="[object Object]",to=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ti=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ah=/-(\w)/g,Ye=Ti(t=>t.replace(Ah,(e,n)=>n?n.toUpperCase():"")),Ph=/\B([A-Z])/g,sn=Ti(t=>t.replace(Ph,"-$1").toLowerCase()),Ni=Ti(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ji=Ti(t=>t?`on${Ni(t)}`:""),Nt=(t,e)=>!Object.is(t,e),Fs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},br=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nl;const Ri=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function no(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Mh(s):no(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(xe(t)||pe(t))return t}const Oh=/;(?![^(]*\))/g,Dh=/:([^]+)/,kh=/\/\*[^]*?\*\//g;function Mh(t){const e={};return t.replace(kh,"").split(Oh).forEach(n=>{if(n){const s=n.split(Dh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function so(t){let e="";if(xe(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=so(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lh=Xr(Fh);function Dc(t){return!!t||t===""}const kc=t=>!!(t&&t.__v_isRef===!0),Ke=t=>xe(t)?t:t==null?"":U(t)||pe(t)&&(t.toString===Ac||!V(t.toString))?kc(t)?Ke(t.value):JSON.stringify(t,Mc,2):String(t),Mc=(t,e)=>kc(e)?Mc(t,e.value):_n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Xi(s,r)+" =>"]=i,n),{})}:Nc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xi(n))}:Bt(e)?Xi(e):pe(e)&&!U(e)&&!Pc(e)?String(e):e,Xi=(t,e="")=>{var n;return Bt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Fc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Lc(t){return new Fc(t)}function Bc(){return Oe}function Bh(t,e=!1){Oe&&Oe.cleanups.push(t)}let ce;const Zi=new WeakSet;class Hc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zi.has(this)&&(Zi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sl(this),Vc(this);const e=ce,n=Ze;ce=this,Ze=!0;try{return this.fn()}finally{jc(this),ce=e,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)oo(e);this.deps=this.depsTail=void 0,sl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cr(this)&&this.run()}get dirty(){return Cr(this)}}let Wc=0,jn,$n;function Uc(t,e=!1){if(t.flags|=8,e){t.next=$n,$n=t;return}t.next=jn,jn=t}function io(){Wc++}function ro(){if(--Wc>0)return;if($n){let e=$n;for($n=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;jn;){let e=jn;for(jn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Vc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),oo(s),Hh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Cr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($c(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $c(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ts))return;t.globalVersion=ts;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Cr(t)){t.flags&=-3;return}const n=ce,s=Ze;ce=t,Ze=!0;try{Vc(t);const i=t.fn(t._value);(e.version===0||Nt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,Ze=s,jc(t),t.flags&=-3}}function oo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)oo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ze=!0;const Kc=[];function Ht(){Kc.push(Ze),Ze=!1}function Wt(){const t=Kc.pop();Ze=t===void 0?!0:t}function sl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let ts=0;class Wh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!Ze||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new Wh(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Gc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,ts++,this.notify(e)}notify(e){io();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ro()}}}function Gc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Gc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vs=new WeakMap,Qt=Symbol(""),Er=Symbol(""),ns=Symbol("");function Se(t,e,n){if(Ze&&ce){let s=Vs.get(t);s||Vs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new lo),i.map=s,i.key=n),i.track()}}function gt(t,e,n,s,i,r){const o=Vs.get(t);if(!o){ts++;return}const l=c=>{c&&c.trigger()};if(io(),e==="clear")o.forEach(l);else{const c=U(t),a=c&&to(n);if(c&&n==="length"){const h=Number(s);o.forEach((p,g)=>{(g==="length"||g===ns||!Bt(g)&&g>=h)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ns)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Qt)),_n(t)&&l(o.get(Er)));break;case"delete":c||(l(o.get(Qt)),_n(t)&&l(o.get(Er)));break;case"set":_n(t)&&l(o.get(Qt));break}}ro()}function Uh(t,e){const n=Vs.get(t);return n&&n.get(e)}function ln(t){const e=J(t);return e===t?e:(Se(e,"iterate",ns),ze(t)?e:e.map(Te))}function Ai(t){return Se(t=J(t),"iterate",ns),t}const Vh={__proto__:null,[Symbol.iterator](){return er(this,Symbol.iterator,Te)},concat(...t){return ln(this).concat(...t.map(e=>U(e)?ln(e):e))},entries(){return er(this,"entries",t=>(t[1]=Te(t[1]),t))},every(t,e){return dt(this,"every",t,e,void 0,arguments)},filter(t,e){return dt(this,"filter",t,e,n=>n.map(Te),arguments)},find(t,e){return dt(this,"find",t,e,Te,arguments)},findIndex(t,e){return dt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dt(this,"findLast",t,e,Te,arguments)},findLastIndex(t,e){return dt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dt(this,"forEach",t,e,void 0,arguments)},includes(...t){return tr(this,"includes",t)},indexOf(...t){return tr(this,"indexOf",t)},join(t){return ln(this).join(t)},lastIndexOf(...t){return tr(this,"lastIndexOf",t)},map(t,e){return dt(this,"map",t,e,void 0,arguments)},pop(){return kn(this,"pop")},push(...t){return kn(this,"push",t)},reduce(t,...e){return il(this,"reduce",t,e)},reduceRight(t,...e){return il(this,"reduceRight",t,e)},shift(){return kn(this,"shift")},some(t,e){return dt(this,"some",t,e,void 0,arguments)},splice(...t){return kn(this,"splice",t)},toReversed(){return ln(this).toReversed()},toSorted(t){return ln(this).toSorted(t)},toSpliced(...t){return ln(this).toSpliced(...t)},unshift(...t){return kn(this,"unshift",t)},values(){return er(this,"values",Te)}};function er(t,e,n){const s=Ai(t),i=s[e]();return s!==t&&!ze(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const jh=Array.prototype;function dt(t,e,n,s,i,r){const o=Ai(t),l=o!==t&&!ze(t),c=o[e];if(c!==jh[e]){const p=c.apply(t,r);return l?Te(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Te(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const h=c.call(o,a,s);return l&&i?i(h):h}function il(t,e,n,s){const i=Ai(t);let r=n;return i!==t&&(ze(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Te(l),c,t)}),i[e](r,...s)}function tr(t,e,n){const s=J(t);Se(s,"iterate",ns);const i=s[e](...n);return(i===-1||i===!1)&&uo(n[0])?(n[0]=J(n[0]),s[e](...n)):i}function kn(t,e,n=[]){Ht(),io();const s=J(t)[e].apply(t,n);return ro(),Wt(),s}const $h=Xr("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bt));function Kh(t){Bt(t)||(t=String(t));const e=J(this);return Se(e,"has",t),e.hasOwnProperty(t)}class qc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?tf:Xc:r?Jc:Qc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let c;if(o&&(c=Vh[n]))return c;if(n==="hasOwnProperty")return Kh}const l=Reflect.get(e,n,me(e)?e:s);return(Bt(n)?zc.has(n):$h(n))||(i||Se(e,"get",n),r)?l:me(l)?o&&to(n)?l:l.value:pe(l)?i?Zc(l):Pi(l):l}}class Yc extends qc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Xt(r);if(!ze(s)&&!Xt(s)&&(r=J(r),s=J(s)),!U(e)&&me(r)&&!me(s))return c?!1:(r.value=s,!0)}const o=U(e)&&to(n)?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,me(e)?e:i);return e===J(i)&&(o?Nt(s,r)&&gt(e,"set",n,s):gt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&gt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Bt(n)||!zc.has(n))&&Se(e,"has",n),s}ownKeys(e){return Se(e,"iterate",U(e)?"length":Qt),Reflect.ownKeys(e)}}class Gh extends qc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zh=new Yc,qh=new Gh,Yh=new Yc(!0);const Ir=t=>t,Rs=t=>Reflect.getPrototypeOf(t);function Qh(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=_n(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),h=n?Ir:e?wr:Te;return!e&&Se(r,"iterate",c?Er:Qt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[h(p[0]),h(p[1])]:h(p),done:g}},[Symbol.iterator](){return this}}}}function As(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jh(t,e){const n={get(i){const r=this.__v_raw,o=J(r),l=J(i);t||(Nt(i,l)&&Se(o,"get",i),Se(o,"get",l));const{has:c}=Rs(o),a=e?Ir:t?wr:Te;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Se(J(i),"iterate",Qt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=J(r),l=J(i);return t||(Nt(i,l)&&Se(o,"has",i),Se(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=J(l),a=e?Ir:t?wr:Te;return!t&&Se(c,"iterate",Qt),l.forEach((h,p)=>i.call(r,a(h),a(p),o))}};return Re(n,t?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(i){!e&&!ze(i)&&!Xt(i)&&(i=J(i));const r=J(this);return Rs(r).has.call(r,i)||(r.add(i),gt(r,"add",i,i)),this},set(i,r){!e&&!ze(r)&&!Xt(r)&&(r=J(r));const o=J(this),{has:l,get:c}=Rs(o);let a=l.call(o,i);a||(i=J(i),a=l.call(o,i));const h=c.call(o,i);return o.set(i,r),a?Nt(r,h)&&gt(o,"set",i,r):gt(o,"add",i,r),this},delete(i){const r=J(this),{has:o,get:l}=Rs(r);let c=o.call(r,i);c||(i=J(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&gt(r,"delete",i,void 0),a},clear(){const i=J(this),r=i.size!==0,o=i.clear();return r&&gt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Qh(i,t,e)}),n}function co(t,e){const n=Jh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const Xh={get:co(!1,!1)},Zh={get:co(!1,!0)},ef={get:co(!0,!1)};const Qc=new WeakMap,Jc=new WeakMap,Xc=new WeakMap,tf=new WeakMap;function nf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sf(t){return t.__v_skip||!Object.isExtensible(t)?0:nf(Rh(t))}function Pi(t){return Xt(t)?t:ao(t,!1,zh,Xh,Qc)}function rf(t){return ao(t,!1,Yh,Zh,Jc)}function Zc(t){return ao(t,!0,qh,ef,Xc)}function ao(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=sf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Rt(t){return Xt(t)?Rt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function ze(t){return!!(t&&t.__v_isShallow)}function uo(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function ho(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Oc(t,"__v_skip",!0),t}const Te=t=>pe(t)?Pi(t):t,wr=t=>pe(t)?Zc(t):t;function me(t){return t?t.__v_isRef===!0:!1}function _t(t){return ea(t,!1)}function of(t){return ea(t,!0)}function ea(t,e){return me(t)?t:new lf(t,e)}class lf{constructor(e,n){this.dep=new lo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:Te(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ze(e)||Xt(e);e=s?e:J(e),Nt(e,n)&&(this._rawValue=e,this._value=s?e:Te(e),this.dep.trigger())}}function Pe(t){return me(t)?t.value:t}const cf={get:(t,e,n)=>e==="__v_raw"?t:Pe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ta(t){return Rt(t)?t:new Proxy(t,cf)}function af(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=hf(t,n);return e}class uf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Uh(J(this._object),this._key)}}function hf(t,e,n){const s=t[e];return me(s)?s:new uf(t,e,n)}class ff{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new lo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ts-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Uc(this,!0),!0}get value(){const e=this.dep.track();return $c(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function df(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new ff(s,i,n)}const Ps={},js=new WeakMap;let Kt;function pf(t,e=!1,n=Kt){if(n){let s=js.get(n);s||js.set(n,s=[]),s.push(t)}}function _f(t,e,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=L=>i?L:ze(L)||i===!1||i===0?mt(L,1):mt(L);let h,p,g,x,I=!1,D=!1;if(me(t)?(p=()=>t.value,I=ze(t)):Rt(t)?(p=()=>a(t),I=!0):U(t)?(D=!0,I=t.some(L=>Rt(L)||ze(L)),p=()=>t.map(L=>{if(me(L))return L.value;if(Rt(L))return a(L);if(V(L))return c?c(L,2):L()})):V(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Ht();try{g()}finally{Wt()}}const L=Kt;Kt=h;try{return c?c(t,3,[x]):t(x)}finally{Kt=L}}:p=ut,e&&i){const L=p,Q=i===!0?1/0:i;p=()=>mt(L(),Q)}const j=Bc(),$=()=>{h.stop(),j&&j.active&&eo(j.effects,h)};if(r&&e){const L=e;e=(...Q)=>{L(...Q),$()}}let Z=D?new Array(t.length).fill(Ps):Ps;const ee=L=>{if(!(!(h.flags&1)||!h.dirty&&!L))if(e){const Q=h.run();if(i||I||(D?Q.some((f,u)=>Nt(f,Z[u])):Nt(Q,Z))){g&&g();const f=Kt;Kt=h;try{const u=[Q,Z===Ps?void 0:D&&Z[0]===Ps?[]:Z,x];c?c(e,3,u):e(...u),Z=Q}finally{Kt=f}}}else h.run()};return l&&l(ee),h=new Hc(p),h.scheduler=o?()=>o(ee,!1):ee,x=L=>pf(L,!1,h),g=h.onStop=()=>{const L=js.get(h);if(L){if(c)c(L,4);else for(const Q of L)Q();js.delete(h)}},e?s?ee(!0):Z=h.run():o?o(ee.bind(null,!0),!0):h.run(),$.pause=h.pause.bind(h),$.resume=h.resume.bind(h),$.stop=$,$}function mt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))mt(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)mt(t[s],e,n);else if(Nc(t)||_n(t))t.forEach(s=>{mt(s,e,n)});else if(Pc(t)){for(const s in t)mt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&mt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xs(t,e,n,s){try{return s?t(...s):t()}catch(i){Oi(i,e,n)}}function ht(t,e,n,s){if(V(t)){const i=xs(t,e,n,s);return i&&Rc(i)&&i.catch(r=>{Oi(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}}function Oi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](t,c,a)===!1)return}l=l.parent}if(r){Ht(),xs(r,null,10,[t,c,a]),Wt();return}}gf(t,n,i,s,o)}function gf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const De=[];let lt=-1;const gn=[];let St=null,hn=0;const na=Promise.resolve();let $s=null;function sa(t){const e=$s||na;return t?e.then(this?t.bind(this):t):e}function mf(t){let e=lt+1,n=De.length;for(;e<n;){const s=e+n>>>1,i=De[s],r=ss(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function fo(t){if(!(t.flags&1)){const e=ss(t),n=De[De.length-1];!n||!(t.flags&2)&&e>=ss(n)?De.push(t):De.splice(mf(e),0,t),t.flags|=1,ia()}}function ia(){$s||($s=na.then(oa))}function xf(t){U(t)?gn.push(...t):St&&t.id===-1?St.splice(hn+1,0,t):t.flags&1||(gn.push(t),t.flags|=1),ia()}function rl(t,e,n=lt+1){for(;n<De.length;n++){const s=De[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;De.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ra(t){if(gn.length){const e=[...new Set(gn)].sort((n,s)=>ss(n)-ss(s));if(gn.length=0,St){St.push(...e);return}for(St=e,hn=0;hn<St.length;hn++){const n=St[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}St=null,hn=0}}const ss=t=>t.id==null?t.flags&2?-1:1/0:t.id;function oa(t){try{for(lt=0;lt<De.length;lt++){const e=De[lt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;lt<De.length;lt++){const e=De[lt];e&&(e.flags&=-2)}lt=-1,De.length=0,ra(),$s=null,(De.length||gn.length)&&oa()}}let Fe=null,la=null;function Ks(t){const e=Fe;return Fe=t,la=t&&t.type.__scopeId||null,e}function yf(t,e=Fe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&gl(-1);const r=Ks(e);let o;try{o=t(...i)}finally{Ks(r),s._d&&gl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vf(t,e){if(Fe===null)return t;const n=Fi(Fe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ie]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&mt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Ht(),ht(c,n,8,[t.el,l,t,e]),Wt())}}const bf=Symbol("_vte"),Cf=t=>t.__isTeleport;function po(t,e){t.shapeFlag&6&&t.component?(t.transition=e,po(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _o(t,e){return V(t)?Re({name:t.name},e,{setup:t}):t}function ca(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gs(t,e,n,s,i=!1){if(U(t)){t.forEach((I,D)=>Gs(I,e&&(U(e)?e[D]:e),n,s,i));return}if(Kn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Fi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,h=l.refs===ie?l.refs={}:l.refs,p=l.setupState,g=J(p),x=p===ie?()=>!1:I=>te(g,I);if(a!=null&&a!==c&&(xe(a)?(h[a]=null,x(a)&&(p[a]=null)):me(a)&&(a.value=null)),V(c))xs(c,l,12,[o,h]);else{const I=xe(c),D=me(c);if(I||D){const j=()=>{if(t.f){const $=I?x(c)?p[c]:h[c]:c.value;i?U($)&&eo($,r):U($)?$.includes(r)||$.push(r):I?(h[c]=[r],x(c)&&(p[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else I?(h[c]=o,x(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(h[t.k]=o))};o?(j.id=-1,je(j,n)):j()}}}Ri().requestIdleCallback;Ri().cancelIdleCallback;const Kn=t=>!!t.type.__asyncLoader,aa=t=>t.type.__isKeepAlive;function Ef(t,e){ua(t,"a",e)}function If(t,e){ua(t,"da",e)}function ua(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Di(e,s,n),n){let i=n.parent;for(;i&&i.parent;)aa(i.parent.vnode)&&wf(s,e,n,i),i=i.parent}}function wf(t,e,n,s){const i=Di(e,t,s,!0);fa(()=>{eo(s[e],i)},n)}function Di(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ht();const l=ys(n),c=ht(e,n,t,o);return l(),Wt(),c});return s?i.unshift(r):i.push(r),r}}const Ct=t=>(e,n=we)=>{(!rs||t==="sp")&&Di(t,(...s)=>e(...s),n)},Sf=Ct("bm"),ha=Ct("m"),Tf=Ct("bu"),Nf=Ct("u"),Rf=Ct("bum"),fa=Ct("um"),Af=Ct("sp"),Pf=Ct("rtg"),Of=Ct("rtc");function Df(t,e=we){Di("ec",t,e)}const kf="components",da=Symbol.for("v-ndc");function Mf(t){return xe(t)?Ff(kf,t,!1)||t:t||da}function Ff(t,e,n=!0,s=!1){const i=Fe||we;if(i){const r=i.type;{const l=Id(r,!1);if(l&&(l===e||l===Ye(e)||l===Ni(Ye(e))))return r}const o=ol(i[t]||r[t],e)||ol(i.appContext[t],e);return!o&&s?r:o}}function ol(t,e){return t&&(t[e]||t[Ye(e)]||t[Ni(Ye(e))])}function ll(t,e,n,s){let i;const r=n&&n[s],o=U(t);if(o||xe(t)){const l=o&&Rt(t);let c=!1;l&&(c=!ze(t),t=Ai(t)),i=new Array(t.length);for(let a=0,h=t.length;a<h;a++)i[a]=e(c?Te(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const h=l[c];i[c]=e(t[h],h,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Sr=t=>t?Fa(t)?Fi(t):Sr(t.parent):null,Gn=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sr(t.parent),$root:t=>Sr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_a(t),$forceUpdate:t=>t.f||(t.f=()=>{fo(t.update)}),$nextTick:t=>t.n||(t.n=sa.bind(t.proxy)),$watch:t=>rd.bind(t)}),nr=(t,e)=>t!==ie&&!t.__isScriptSetup&&te(t,e),Lf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(nr(s,e))return o[e]=1,s[e];if(i!==ie&&te(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&te(a,e))return o[e]=3,r[e];if(n!==ie&&te(n,e))return o[e]=4,n[e];Tr&&(o[e]=0)}}const h=Gn[e];let p,g;if(h)return e==="$attrs"&&Se(t.attrs,"get",""),h(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==ie&&te(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,te(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return nr(i,e)?(i[e]=n,!0):s!==ie&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ie&&te(t,o)||nr(e,o)||(l=r[0])&&te(l,o)||te(s,o)||te(Gn,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cl(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tr=!0;function Bf(t){const e=_a(t),n=t.proxy,s=t.ctx;Tr=!1,e.beforeCreate&&al(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:h,beforeMount:p,mounted:g,beforeUpdate:x,updated:I,activated:D,deactivated:j,beforeDestroy:$,beforeUnmount:Z,destroyed:ee,unmounted:L,render:Q,renderTracked:f,renderTriggered:u,errorCaptured:d,serverPrefetch:v,expose:b,inheritAttrs:k,components:M,directives:se,filters:tt}=e;if(a&&Hf(a,s,null),o)for(const K in o){const oe=o[K];V(oe)&&(s[K]=oe.bind(n))}if(i){const K=i.call(n,n);pe(K)&&(t.data=Pi(K))}if(Tr=!0,r)for(const K in r){const oe=r[K],Ut=V(oe)?oe.bind(n,n):V(oe.get)?oe.get.bind(n,n):ut,Ts=!V(oe)&&V(oe.set)?oe.set.bind(n):ut,Vt=Ba({get:Ut,set:Ts});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:nt=>Vt.value=nt})}if(l)for(const K in l)pa(l[K],s,n,K);if(c){const K=V(c)?c.call(n):c;Reflect.ownKeys(K).forEach(oe=>{Kf(oe,K[oe])})}h&&al(h,t,"c");function fe(K,oe){U(oe)?oe.forEach(Ut=>K(Ut.bind(n))):oe&&K(oe.bind(n))}if(fe(Sf,p),fe(ha,g),fe(Tf,x),fe(Nf,I),fe(Ef,D),fe(If,j),fe(Df,d),fe(Of,f),fe(Pf,u),fe(Rf,Z),fe(fa,L),fe(Af,v),U(b))if(b.length){const K=t.exposed||(t.exposed={});b.forEach(oe=>{Object.defineProperty(K,oe,{get:()=>n[oe],set:Ut=>n[oe]=Ut})})}else t.exposed||(t.exposed={});Q&&t.render===ut&&(t.render=Q),k!=null&&(t.inheritAttrs=k),M&&(t.components=M),se&&(t.directives=se),v&&ca(t)}function Hf(t,e,n=ut){U(t)&&(t=Nr(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=zn(i.from||s,i.default,!0):r=zn(i.from||s):r=zn(i),me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function al(t,e,n){ht(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pa(t,e,n,s){let i=s.includes(".")?Ra(n,s):()=>n[s];if(xe(t)){const r=e[t];V(r)&&mn(i,r)}else if(V(t))mn(i,t.bind(n));else if(pe(t))if(U(t))t.forEach(r=>pa(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&mn(i,r,t)}}function _a(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>zs(c,a,o,!0)),zs(c,e,o)),pe(e)&&r.set(e,c),c}function zs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&zs(t,r,n,!0),i&&i.forEach(o=>zs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Wf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Wf={data:ul,props:hl,emits:hl,methods:Un,computed:Un,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Un,directives:Un,watch:Vf,provide:ul,inject:Uf};function ul(t,e){return e?t?function(){return Re(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Uf(t,e){return Un(Nr(t),Nr(e))}function Nr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?Re(Object.create(null),t,e):e}function hl(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Re(Object.create(null),cl(t),cl(e??{})):e}function Vf(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function ga(){return{app:null,config:{isNativeTag:Th,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jf=0;function $f(t,e){return function(s,i=null){V(s)||(s=Re({},s)),i!=null&&!pe(i)&&(i=null);const r=ga(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:jf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Sd,get config(){return r.config},set config(h){},use(h,...p){return o.has(h)||(h&&V(h.install)?(o.add(h),h.install(a,...p)):V(h)&&(o.add(h),h(a,...p))),a},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),a},component(h,p){return p?(r.components[h]=p,a):r.components[h]},directive(h,p){return p?(r.directives[h]=p,a):r.directives[h]},mount(h,p,g){if(!c){const x=a._ceVNode||qe(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,h,g),c=!0,a._container=h,h.__vue_app__=a,Fi(x.component)}},onUnmount(h){l.push(h)},unmount(){c&&(ht(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(h,p){return r.provides[h]=p,a},runWithContext(h){const p=Jt;Jt=a;try{return h()}finally{Jt=p}}};return a}}let Jt=null;function Kf(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function zn(t,e,n=!1){const s=we||Fe;if(s||Jt){const i=Jt?Jt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}function Gf(){return!!(we||Fe||Jt)}const ma={},xa=()=>Object.create(ma),ya=t=>Object.getPrototypeOf(t)===ma;function zf(t,e,n,s=!1){const i={},r=xa();t.propsDefaults=Object.create(null),va(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:rf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function qf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let g=h[p];if(ki(t.emitsOptions,g))continue;const x=e[g];if(c)if(te(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const I=Ye(g);i[I]=Rr(c,l,I,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{va(t,e,i,r)&&(a=!0);let h;for(const p in l)(!e||!te(e,p)&&((h=sn(p))===p||!te(e,h)))&&(c?n&&(n[p]!==void 0||n[h]!==void 0)&&(i[p]=Rr(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!te(e,p))&&(delete r[p],a=!0)}a&&gt(t.attrs,"set","")}function va(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Vn(c))continue;const a=e[c];let h;i&&te(i,h=Ye(c))?!r||!r.includes(h)?n[h]=a:(l||(l={}))[h]=a:ki(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=J(n),a=l||ie;for(let h=0;h<r.length;h++){const p=r[h];n[p]=Rr(i,c,p,a[p],t,!te(a,p))}}return o}function Rr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=te(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const h=ys(i);s=a[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===sn(n))&&(s=!0))}return s}const Yf=new WeakMap;function ba(t,e,n=!1){const s=n?Yf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!V(t)){const h=p=>{c=!0;const[g,x]=ba(p,e,!0);Re(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return pe(t)&&s.set(t,pn),pn;if(U(r))for(let h=0;h<r.length;h++){const p=Ye(r[h]);fl(p)&&(o[p]=ie)}else if(r)for(const h in r){const p=Ye(h);if(fl(p)){const g=r[h],x=o[p]=U(g)||V(g)?{type:g}:Re({},g),I=x.type;let D=!1,j=!0;if(U(I))for(let $=0;$<I.length;++$){const Z=I[$],ee=V(Z)&&Z.name;if(ee==="Boolean"){D=!0;break}else ee==="String"&&(j=!1)}else D=V(I)&&I.name==="Boolean";x[0]=D,x[1]=j,(D||te(x,"default"))&&l.push(p)}}const a=[o,l];return pe(t)&&s.set(t,a),a}function fl(t){return t[0]!=="$"&&!Vn(t)}const Ca=t=>t[0]==="_"||t==="$stable",go=t=>U(t)?t.map(at):[at(t)],Qf=(t,e,n)=>{if(e._n)return e;const s=yf((...i)=>go(e(...i)),n);return s._c=!1,s},Ea=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ca(i))continue;const r=t[i];if(V(r))e[i]=Qf(i,r,s);else if(r!=null){const o=go(r);e[i]=()=>o}}},Ia=(t,e)=>{const n=go(e);t.slots.default=()=>n},wa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Jf=(t,e,n)=>{const s=t.slots=xa();if(t.vnode.shapeFlag&32){const i=e._;i?(wa(s,e,n),n&&Oc(s,"_",i,!0)):Ea(e,s)}else e&&Ia(t,e)},Xf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:wa(i,e,n):(r=!e.$stable,Ea(e,i)),o=e}else e&&(Ia(t,e),o={default:1});if(r)for(const l in i)!Ca(l)&&o[l]==null&&delete i[l]},je=fd;function Zf(t){return ed(t)}function ed(t,e){const n=Ri();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:h,parentNode:p,nextSibling:g,setScopeId:x=ut,insertStaticContent:I}=t,D=(_,m,y,w=null,C=null,E=null,P=void 0,R=null,N=!!m.dynamicChildren)=>{if(_===m)return;_&&!Mn(_,m)&&(w=Ns(_),nt(_,C,E,!0),_=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:B,shapeFlag:O}=m;switch(S){case Mi:j(_,m,y,w);break;case Zt:$(_,m,y,w);break;case ir:_==null&&Z(m,y,w,P);break;case Ge:M(_,m,y,w,C,E,P,R,N);break;default:O&1?Q(_,m,y,w,C,E,P,R,N):O&6?se(_,m,y,w,C,E,P,R,N):(O&64||O&128)&&S.process(_,m,y,w,C,E,P,R,N,On)}B!=null&&C&&Gs(B,_&&_.ref,E,m||_,!m)},j=(_,m,y,w)=>{if(_==null)s(m.el=l(m.children),y,w);else{const C=m.el=_.el;m.children!==_.children&&a(C,m.children)}},$=(_,m,y,w)=>{_==null?s(m.el=c(m.children||""),y,w):m.el=_.el},Z=(_,m,y,w)=>{[_.el,_.anchor]=I(_.children,m,y,w,_.el,_.anchor)},ee=({el:_,anchor:m},y,w)=>{let C;for(;_&&_!==m;)C=g(_),s(_,y,w),_=C;s(m,y,w)},L=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},Q=(_,m,y,w,C,E,P,R,N)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),_==null?f(m,y,w,C,E,P,R,N):v(_,m,C,E,P,R,N)},f=(_,m,y,w,C,E,P,R)=>{let N,S;const{props:B,shapeFlag:O,transition:F,dirs:W}=_;if(N=_.el=o(_.type,E,B&&B.is,B),O&8?h(N,_.children):O&16&&d(_.children,N,null,w,C,sr(_,E),P,R),W&&jt(_,null,w,"created"),u(N,_,_.scopeId,P,w),B){for(const le in B)le!=="value"&&!Vn(le)&&r(N,le,null,B[le],E,w);"value"in B&&r(N,"value",null,B.value,E),(S=B.onVnodeBeforeMount)&&ot(S,w,_)}W&&jt(_,null,w,"beforeMount");const Y=td(C,F);Y&&F.beforeEnter(N),s(N,m,y),((S=B&&B.onVnodeMounted)||Y||W)&&je(()=>{S&&ot(S,w,_),Y&&F.enter(N),W&&jt(_,null,w,"mounted")},C)},u=(_,m,y,w,C)=>{if(y&&x(_,y),w)for(let E=0;E<w.length;E++)x(_,w[E]);if(C){let E=C.subTree;if(m===E||Pa(E.type)&&(E.ssContent===m||E.ssFallback===m)){const P=C.vnode;u(_,P,P.scopeId,P.slotScopeIds,C.parent)}}},d=(_,m,y,w,C,E,P,R,N=0)=>{for(let S=N;S<_.length;S++){const B=_[S]=R?Tt(_[S]):at(_[S]);D(null,B,m,y,w,C,E,P,R)}},v=(_,m,y,w,C,E,P)=>{const R=m.el=_.el;let{patchFlag:N,dynamicChildren:S,dirs:B}=m;N|=_.patchFlag&16;const O=_.props||ie,F=m.props||ie;let W;if(y&&$t(y,!1),(W=F.onVnodeBeforeUpdate)&&ot(W,y,m,_),B&&jt(m,_,y,"beforeUpdate"),y&&$t(y,!0),(O.innerHTML&&F.innerHTML==null||O.textContent&&F.textContent==null)&&h(R,""),S?b(_.dynamicChildren,S,R,y,w,sr(m,C),E):P||oe(_,m,R,null,y,w,sr(m,C),E,!1),N>0){if(N&16)k(R,O,F,y,C);else if(N&2&&O.class!==F.class&&r(R,"class",null,F.class,C),N&4&&r(R,"style",O.style,F.style,C),N&8){const Y=m.dynamicProps;for(let le=0;le<Y.length;le++){const ne=Y[le],We=O[ne],Me=F[ne];(Me!==We||ne==="value")&&r(R,ne,We,Me,C,y)}}N&1&&_.children!==m.children&&h(R,m.children)}else!P&&S==null&&k(R,O,F,y,C);((W=F.onVnodeUpdated)||B)&&je(()=>{W&&ot(W,y,m,_),B&&jt(m,_,y,"updated")},w)},b=(_,m,y,w,C,E,P)=>{for(let R=0;R<m.length;R++){const N=_[R],S=m[R],B=N.el&&(N.type===Ge||!Mn(N,S)||N.shapeFlag&70)?p(N.el):y;D(N,S,B,null,w,C,E,P,!0)}},k=(_,m,y,w,C)=>{if(m!==y){if(m!==ie)for(const E in m)!Vn(E)&&!(E in y)&&r(_,E,m[E],null,C,w);for(const E in y){if(Vn(E))continue;const P=y[E],R=m[E];P!==R&&E!=="value"&&r(_,E,R,P,C,w)}"value"in y&&r(_,"value",m.value,y.value,C)}},M=(_,m,y,w,C,E,P,R,N)=>{const S=m.el=_?_.el:l(""),B=m.anchor=_?_.anchor:l("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:W}=m;W&&(R=R?R.concat(W):W),_==null?(s(S,y,w),s(B,y,w),d(m.children||[],y,B,C,E,P,R,N)):O>0&&O&64&&F&&_.dynamicChildren?(b(_.dynamicChildren,F,y,C,E,P,R),(m.key!=null||C&&m===C.subTree)&&Sa(_,m,!0)):oe(_,m,y,B,C,E,P,R,N)},se=(_,m,y,w,C,E,P,R,N)=>{m.slotScopeIds=R,_==null?m.shapeFlag&512?C.ctx.activate(m,y,w,P,N):tt(m,y,w,C,E,P,N):on(_,m,N)},tt=(_,m,y,w,C,E,P)=>{const R=_.component=yd(_,w,C);if(aa(_)&&(R.ctx.renderer=On),vd(R,!1,P),R.asyncDep){if(C&&C.registerDep(R,fe,P),!_.el){const N=R.subTree=qe(Zt);$(null,N,m,y)}}else fe(R,_,m,y,C,E,P)},on=(_,m,y)=>{const w=m.component=_.component;if(ud(_,m,y))if(w.asyncDep&&!w.asyncResolved){K(w,m,y);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},fe=(_,m,y,w,C,E,P)=>{const R=()=>{if(_.isMounted){let{next:O,bu:F,u:W,parent:Y,vnode:le}=_;{const it=Ta(_);if(it){O&&(O.el=le.el,K(_,O,P)),it.asyncDep.then(()=>{_.isUnmounted||R()});return}}let ne=O,We;$t(_,!1),O?(O.el=le.el,K(_,O,P)):O=le,F&&Fs(F),(We=O.props&&O.props.onVnodeBeforeUpdate)&&ot(We,Y,O,le),$t(_,!0);const Me=pl(_),st=_.subTree;_.subTree=Me,D(st,Me,p(st.el),Ns(st),_,C,E),O.el=Me.el,ne===null&&hd(_,Me.el),W&&je(W,C),(We=O.props&&O.props.onVnodeUpdated)&&je(()=>ot(We,Y,O,le),C)}else{let O;const{el:F,props:W}=m,{bm:Y,m:le,parent:ne,root:We,type:Me}=_,st=Kn(m);$t(_,!1),Y&&Fs(Y),!st&&(O=W&&W.onVnodeBeforeMount)&&ot(O,ne,m),$t(_,!0);{We.ce&&We.ce._injectChildStyle(Me);const it=_.subTree=pl(_);D(null,it,y,w,_,C,E),m.el=it.el}if(le&&je(le,C),!st&&(O=W&&W.onVnodeMounted)){const it=m;je(()=>ot(O,ne,it),C)}(m.shapeFlag&256||ne&&Kn(ne.vnode)&&ne.vnode.shapeFlag&256)&&_.a&&je(_.a,C),_.isMounted=!0,m=y=w=null}};_.scope.on();const N=_.effect=new Hc(R);_.scope.off();const S=_.update=N.run.bind(N),B=_.job=N.runIfDirty.bind(N);B.i=_,B.id=_.uid,N.scheduler=()=>fo(B),$t(_,!0),S()},K=(_,m,y)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,qf(_,m.props,w,y),Xf(_,m.children,y),Ht(),rl(_),Wt()},oe=(_,m,y,w,C,E,P,R,N=!1)=>{const S=_&&_.children,B=_?_.shapeFlag:0,O=m.children,{patchFlag:F,shapeFlag:W}=m;if(F>0){if(F&128){Ts(S,O,y,w,C,E,P,R,N);return}else if(F&256){Ut(S,O,y,w,C,E,P,R,N);return}}W&8?(B&16&&Pn(S,C,E),O!==S&&h(y,O)):B&16?W&16?Ts(S,O,y,w,C,E,P,R,N):Pn(S,C,E,!0):(B&8&&h(y,""),W&16&&d(O,y,w,C,E,P,R,N))},Ut=(_,m,y,w,C,E,P,R,N)=>{_=_||pn,m=m||pn;const S=_.length,B=m.length,O=Math.min(S,B);let F;for(F=0;F<O;F++){const W=m[F]=N?Tt(m[F]):at(m[F]);D(_[F],W,y,null,C,E,P,R,N)}S>B?Pn(_,C,E,!0,!1,O):d(m,y,w,C,E,P,R,N,O)},Ts=(_,m,y,w,C,E,P,R,N)=>{let S=0;const B=m.length;let O=_.length-1,F=B-1;for(;S<=O&&S<=F;){const W=_[S],Y=m[S]=N?Tt(m[S]):at(m[S]);if(Mn(W,Y))D(W,Y,y,null,C,E,P,R,N);else break;S++}for(;S<=O&&S<=F;){const W=_[O],Y=m[F]=N?Tt(m[F]):at(m[F]);if(Mn(W,Y))D(W,Y,y,null,C,E,P,R,N);else break;O--,F--}if(S>O){if(S<=F){const W=F+1,Y=W<B?m[W].el:w;for(;S<=F;)D(null,m[S]=N?Tt(m[S]):at(m[S]),y,Y,C,E,P,R,N),S++}}else if(S>F)for(;S<=O;)nt(_[S],C,E,!0),S++;else{const W=S,Y=S,le=new Map;for(S=Y;S<=F;S++){const Ue=m[S]=N?Tt(m[S]):at(m[S]);Ue.key!=null&&le.set(Ue.key,S)}let ne,We=0;const Me=F-Y+1;let st=!1,it=0;const Dn=new Array(Me);for(S=0;S<Me;S++)Dn[S]=0;for(S=W;S<=O;S++){const Ue=_[S];if(We>=Me){nt(Ue,C,E,!0);continue}let rt;if(Ue.key!=null)rt=le.get(Ue.key);else for(ne=Y;ne<=F;ne++)if(Dn[ne-Y]===0&&Mn(Ue,m[ne])){rt=ne;break}rt===void 0?nt(Ue,C,E,!0):(Dn[rt-Y]=S+1,rt>=it?it=rt:st=!0,D(Ue,m[rt],y,null,C,E,P,R,N),We++)}const el=st?nd(Dn):pn;for(ne=el.length-1,S=Me-1;S>=0;S--){const Ue=Y+S,rt=m[Ue],tl=Ue+1<B?m[Ue+1].el:w;Dn[S]===0?D(null,rt,y,tl,C,E,P,R,N):st&&(ne<0||S!==el[ne]?Vt(rt,y,tl,2):ne--)}}},Vt=(_,m,y,w,C=null)=>{const{el:E,type:P,transition:R,children:N,shapeFlag:S}=_;if(S&6){Vt(_.component.subTree,m,y,w);return}if(S&128){_.suspense.move(m,y,w);return}if(S&64){P.move(_,m,y,On);return}if(P===Ge){s(E,m,y);for(let O=0;O<N.length;O++)Vt(N[O],m,y,w);s(_.anchor,m,y);return}if(P===ir){ee(_,m,y);return}if(w!==2&&S&1&&R)if(w===0)R.beforeEnter(E),s(E,m,y),je(()=>R.enter(E),C);else{const{leave:O,delayLeave:F,afterLeave:W}=R,Y=()=>s(E,m,y),le=()=>{O(E,()=>{Y(),W&&W()})};F?F(E,Y,le):le()}else s(E,m,y)},nt=(_,m,y,w=!1,C=!1)=>{const{type:E,props:P,ref:R,children:N,dynamicChildren:S,shapeFlag:B,patchFlag:O,dirs:F,cacheIndex:W}=_;if(O===-2&&(C=!1),R!=null&&Gs(R,null,y,_,!0),W!=null&&(m.renderCache[W]=void 0),B&256){m.ctx.deactivate(_);return}const Y=B&1&&F,le=!Kn(_);let ne;if(le&&(ne=P&&P.onVnodeBeforeUnmount)&&ot(ne,m,_),B&6)Sh(_.component,y,w);else{if(B&128){_.suspense.unmount(y,w);return}Y&&jt(_,null,m,"beforeUnmount"),B&64?_.type.remove(_,m,y,On,w):S&&!S.hasOnce&&(E!==Ge||O>0&&O&64)?Pn(S,m,y,!1,!0):(E===Ge&&O&384||!C&&B&16)&&Pn(N,m,y),w&&Xo(_)}(le&&(ne=P&&P.onVnodeUnmounted)||Y)&&je(()=>{ne&&ot(ne,m,_),Y&&jt(_,null,m,"unmounted")},y)},Xo=_=>{const{type:m,el:y,anchor:w,transition:C}=_;if(m===Ge){wh(y,w);return}if(m===ir){L(_);return}const E=()=>{i(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(_.shapeFlag&1&&C&&!C.persisted){const{leave:P,delayLeave:R}=C,N=()=>P(y,E);R?R(_.el,E,N):N()}else E()},wh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Sh=(_,m,y)=>{const{bum:w,scope:C,job:E,subTree:P,um:R,m:N,a:S}=_;dl(N),dl(S),w&&Fs(w),C.stop(),E&&(E.flags|=8,nt(P,_,m,y)),R&&je(R,m),je(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Pn=(_,m,y,w=!1,C=!1,E=0)=>{for(let P=E;P<_.length;P++)nt(_[P],m,y,w,C)},Ns=_=>{if(_.shapeFlag&6)return Ns(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[bf];return y?g(y):m};let Qi=!1;const Zo=(_,m,y)=>{_==null?m._vnode&&nt(m._vnode,null,null,!0):D(m._vnode||null,_,m,null,null,null,y),m._vnode=_,Qi||(Qi=!0,rl(),ra(),Qi=!1)},On={p:D,um:nt,m:Vt,r:Xo,mt:tt,mc:d,pc:oe,pbc:b,n:Ns,o:t};return{render:Zo,hydrate:void 0,createApp:$f(Zo)}}function sr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $t({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function td(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sa(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Tt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Sa(o,l)),l.type===Mi&&(l.el=o.el)}}function nd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ta(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ta(e)}function dl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const sd=Symbol.for("v-scx"),id=()=>zn(sd);function mn(t,e,n){return Na(t,e,n)}function Na(t,e,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,l=Re({},n),c=e&&s||!e&&r!=="post";let a;if(rs){if(r==="sync"){const x=id();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=ut,x.resume=ut,x.pause=ut,x}}const h=we;l.call=(x,I,D)=>ht(x,h,I,D);let p=!1;r==="post"?l.scheduler=x=>{je(x,h&&h.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(x,I)=>{I?x():fo(x)}),l.augmentJob=x=>{e&&(x.flags|=4),p&&(x.flags|=2,h&&(x.id=h.uid,x.i=h))};const g=_f(t,e,l);return rs&&(a?a.push(g):c&&g()),g}function rd(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?Ra(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=ys(this),l=Na(i,r.bind(s),n);return o(),l}function Ra(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const od=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ye(e)}Modifiers`]||t[`${sn(e)}Modifiers`];function ld(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&od(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>xe(h)?h.trim():h)),o.number&&(i=n.map(br)));let l,c=s[l=Ji(e)]||s[l=Ji(Ye(e))];!c&&r&&(c=s[l=Ji(sn(e))]),c&&ht(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ht(a,t,6,i)}}function Aa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const c=a=>{const h=Aa(a,e,!0);h&&(l=!0,Re(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(pe(t)&&s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):Re(o,r),pe(t)&&s.set(t,o),o)}function ki(t,e){return!t||!wi(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,sn(e))||te(t,e))}function pl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:h,props:p,data:g,setupState:x,ctx:I,inheritAttrs:D}=t,j=Ks(t);let $,Z;try{if(n.shapeFlag&4){const L=i||s,Q=L;$=at(a.call(Q,L,h,p,x,g,I)),Z=l}else{const L=e;$=at(L.length>1?L(p,{attrs:l,slots:o,emit:c}):L(p,null)),Z=e.props?l:cd(l)}}catch(L){qn.length=0,Oi(L,t,1),$=qe(Zt)}let ee=$;if(Z&&D!==!1){const L=Object.keys(Z),{shapeFlag:Q}=ee;L.length&&Q&7&&(r&&L.some(Zr)&&(Z=ad(Z,r)),ee=bn(ee,Z,!1,!0))}return n.dirs&&(ee=bn(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&po(ee,n.transition),$=ee,Ks(j),$}const cd=t=>{let e;for(const n in t)(n==="class"||n==="style"||wi(n))&&((e||(e={}))[n]=t[n]);return e},ad=(t,e)=>{const n={};for(const s in t)(!Zr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ud(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?_l(s,o,a):!!o;if(c&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const g=h[p];if(o[g]!==s[g]&&!ki(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?_l(s,o,a):!0:!!o;return!1}function _l(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ki(n,r))return!0}return!1}function hd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Pa=t=>t.__isSuspense;function fd(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):xf(t)}const Ge=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),ir=Symbol.for("v-stc"),qn=[];let $e=null;function de(t=!1){qn.push($e=t?null:[])}function dd(){qn.pop(),$e=qn[qn.length-1]||null}let is=1;function gl(t,e=!1){is+=t,t<0&&$e&&e&&($e.hasOnce=!0)}function Oa(t){return t.dynamicChildren=is>0?$e||pn:null,dd(),is>0&&$e&&$e.push(t),t}function ge(t,e,n,s,i,r){return Oa(A(t,e,n,s,i,r,!0))}function Da(t,e,n,s,i){return Oa(qe(t,e,n,s,i,!0))}function ka(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const Ma=({key:t})=>t??null,Ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||me(t)||V(t)?{i:Fe,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ma(e),ref:e&&Ls(e),scopeId:la,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return l?(mo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),is>0&&!o&&$e&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$e.push(c),c}const qe=pd;function pd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===da)&&(t=Zt),ka(t)){const l=bn(t,e,!0);return n&&mo(l,n),is>0&&!r&&$e&&(l.shapeFlag&6?$e[$e.indexOf(t)]=l:$e.push(l)),l.patchFlag=-2,l}if(wd(t)&&(t=t.__vccOpts),e){e=_d(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=so(l)),pe(c)&&(uo(c)&&!U(c)&&(c=Re({},c)),e.style=no(c))}const o=xe(t)?1:Pa(t)?128:Cf(t)?64:pe(t)?4:V(t)?2:0;return A(t,e,n,s,i,o,r,!0)}function _d(t){return t?uo(t)||ya(t)?Re({},t):t:null}function bn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?gd(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ma(a),ref:e&&e.ref?n&&r?U(r)?r.concat(Ls(e)):[r,Ls(e)]:Ls(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&po(h,c.clone(h)),h}function Ie(t=" ",e=0){return qe(Mi,null,t,e)}function Ve(t="",e=!1){return e?(de(),Da(Zt,null,t)):qe(Zt,null,t)}function at(t){return t==null||typeof t=="boolean"?qe(Zt):U(t)?qe(Ge,null,t.slice()):ka(t)?Tt(t):qe(Mi,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function mo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),mo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ya(e)?e._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),s&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function gd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=so([e.class,s.class]));else if(i==="style")e.style=no([e.style,s.style]);else if(wi(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ot(t,e,n,s=null){ht(t,e,7,[n,s])}const md=ga();let xd=0;function yd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||md,r={uid:xd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(s,i),emitsOptions:Aa(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ld.bind(null,r),t.ce&&t.ce(r),r}let we=null,qs,Ar;{const t=Ri(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qs=e("__VUE_INSTANCE_SETTERS__",n=>we=n),Ar=e("__VUE_SSR_SETTERS__",n=>rs=n)}const ys=t=>{const e=we;return qs(t),t.scope.on(),()=>{t.scope.off(),qs(e)}},ml=()=>{we&&we.scope.off(),qs(null)};function Fa(t){return t.vnode.shapeFlag&4}let rs=!1;function vd(t,e=!1,n=!1){e&&Ar(e);const{props:s,children:i}=t.vnode,r=Fa(t);zf(t,s,r,e),Jf(t,i,n);const o=r?bd(t,e):void 0;return e&&Ar(!1),o}function bd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lf);const{setup:s}=n;if(s){Ht();const i=t.setupContext=s.length>1?Ed(t):null,r=ys(t),o=xs(s,t,0,[t.props,i]),l=Rc(o);if(Wt(),r(),(l||t.sp)&&!Kn(t)&&ca(t),l){if(o.then(ml,ml),e)return o.then(c=>{xl(t,c)}).catch(c=>{Oi(c,t,0)});t.asyncDep=o}else xl(t,o)}else La(t)}function xl(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=ta(e)),La(t)}function La(t,e,n){const s=t.type;t.render||(t.render=s.render||ut);{const i=ys(t);Ht();try{Bf(t)}finally{Wt(),i()}}}const Cd={get(t,e){return Se(t,"get",""),t[e]}};function Ed(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Cd),slots:t.slots,emit:t.emit,expose:e}}function Fi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ta(ho(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function Id(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function wd(t){return V(t)&&"__vccOpts"in t}const Ba=(t,e)=>df(t,e,rs),Sd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pr;const yl=typeof window<"u"&&window.trustedTypes;if(yl)try{Pr=yl.createPolicy("vue",{createHTML:t=>t})}catch{}const Ha=Pr?t=>Pr.createHTML(t):t=>t,Td="http://www.w3.org/2000/svg",Nd="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,vl=pt&&pt.createElement("template"),Rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?pt.createElementNS(Td,t):e==="mathml"?pt.createElementNS(Nd,t):n?pt.createElement(t,{is:n}):pt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{vl.innerHTML=Ha(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=vl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ad=Symbol("_vtc");function Pd(t,e,n){const s=t[Ad];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bl=Symbol("_vod"),Od=Symbol("_vsh"),Dd=Symbol(""),kd=/(^|;)\s*display\s*:/;function Md(t,e,n){const s=t.style,i=xe(n);let r=!1;if(n&&!i){if(e)if(xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Bs(s,l,"")}else for(const o in e)n[o]==null&&Bs(s,o,"");for(const o in n)o==="display"&&(r=!0),Bs(s,o,n[o])}else if(i){if(e!==n){const o=s[Dd];o&&(n+=";"+o),s.cssText=n,r=kd.test(n)}}else e&&t.removeAttribute("style");bl in t&&(t[bl]=r?s.display:"",t[Od]&&(s.display="none"))}const Cl=/\s*!important$/;function Bs(t,e,n){if(U(n))n.forEach(s=>Bs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Fd(t,e);Cl.test(n)?t.setProperty(sn(s),n.replace(Cl,""),"important"):t[s]=n}}const El=["Webkit","Moz","ms"],rr={};function Fd(t,e){const n=rr[e];if(n)return n;let s=Ye(e);if(s!=="filter"&&s in t)return rr[e]=s;s=Ni(s);for(let i=0;i<El.length;i++){const r=El[i]+s;if(r in t)return rr[e]=r}return e}const Il="http://www.w3.org/1999/xlink";function wl(t,e,n,s,i,r=Lh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Il,e.slice(6,e.length)):t.setAttributeNS(Il,e,n):n==null||r&&!Dc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Bt(n)?String(n):n)}function Sl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ha(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function fn(t,e,n,s){t.addEventListener(e,n,s)}function Ld(t,e,n,s){t.removeEventListener(e,n,s)}const Tl=Symbol("_vei");function Bd(t,e,n,s,i=null){const r=t[Tl]||(t[Tl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Hd(e);if(s){const a=r[e]=Vd(s,i);fn(t,l,a,c)}else o&&(Ld(t,l,o,c),r[e]=void 0)}}const Nl=/(?:Once|Passive|Capture)$/;function Hd(t){let e;if(Nl.test(t)){e={};let s;for(;s=t.match(Nl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let or=0;const Wd=Promise.resolve(),Ud=()=>or||(Wd.then(()=>or=0),or=Date.now());function Vd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(jd(s,n.value),e,5,[s])};return n.value=t,n.attached=Ud(),n}function jd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Rl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$d=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Pd(t,s,o):e==="style"?Md(t,n,s):wi(e)?Zr(e)||Bd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kd(t,e,s,o))?(Sl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(s))?Sl(t,Ye(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),wl(t,e,s,o))};function Kd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rl(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Rl(e)&&xe(n)?!1:e in t}const Al=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Fs(e,n):e};function Gd(t){t.target.composing=!0}function Pl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lr=Symbol("_assign"),zd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[lr]=Al(i);const r=s||i.props&&i.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=br(l)),t[lr](l)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",Gd),fn(t,"compositionend",Pl),fn(t,"change",Pl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[lr]=Al(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?br(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},qd=Re({patchProp:$d},Rd);let Ol;function Yd(){return Ol||(Ol=Zf(qd))}const Qd=(...t)=>{const e=Yd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Xd(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Jd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Jd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Xd(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Wa;const Li=t=>Wa=t,Ua=Symbol();function Or(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yn||(Yn={}));function Zd(){const t=Lc(!0),e=t.run(()=>_t({}));let n=[],s=[];const i=ho({install(r){Li(i),i._a=r,r.provide(Ua,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Va=()=>{};function Dl(t,e,n,s=Va){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Bc()&&Bh(i),i}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}const ep=t=>t(),kl=Symbol(),cr=Symbol();function Dr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Or(i)&&Or(s)&&t.hasOwnProperty(n)&&!me(s)&&!Rt(s)?t[n]=Dr(i,s):t[n]=s}return t}const tp=Symbol();function np(t){return!Or(t)||!t.hasOwnProperty(tp)}const{assign:wt}=Object;function sp(t){return!!(me(t)&&t.effect)}function ip(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const h=af(n.state.value[t]);return wt(h,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=ho(Ba(()=>{Li(n);const x=n._s.get(t);return o[g].call(x,x)})),p),{}))}return c=ja(t,a,e,n,s,!0),c}function ja(t,e,n={},s,i,r){let o;const l=wt({actions:{}},n),c={deep:!0};let a,h,p=[],g=[],x;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),_t({});let D;function j(d){let v;a=h=!1,typeof d=="function"?(d(s.state.value[t]),v={type:Yn.patchFunction,storeId:t,events:x}):(Dr(s.state.value[t],d),v={type:Yn.patchObject,payload:d,storeId:t,events:x});const b=D=Symbol();sa().then(()=>{D===b&&(a=!0)}),h=!0,cn(p,v,s.state.value[t])}const $=r?function(){const{state:v}=n,b=v?v():{};this.$patch(k=>{wt(k,b)})}:Va;function Z(){o.stop(),p=[],g=[],s._s.delete(t)}const ee=(d,v="")=>{if(kl in d)return d[cr]=v,d;const b=function(){Li(s);const k=Array.from(arguments),M=[],se=[];function tt(K){M.push(K)}function on(K){se.push(K)}cn(g,{args:k,name:b[cr],store:Q,after:tt,onError:on});let fe;try{fe=d.apply(this&&this.$id===t?this:Q,k)}catch(K){throw cn(se,K),K}return fe instanceof Promise?fe.then(K=>(cn(M,K),K)).catch(K=>(cn(se,K),Promise.reject(K))):(cn(M,fe),fe)};return b[kl]=!0,b[cr]=v,b},L={_p:s,$id:t,$onAction:Dl.bind(null,g),$patch:j,$reset:$,$subscribe(d,v={}){const b=Dl(p,d,v.detached,()=>k()),k=o.run(()=>mn(()=>s.state.value[t],M=>{(v.flush==="sync"?h:a)&&d({storeId:t,type:Yn.direct,events:x},M)},wt({},c,v)));return b},$dispose:Z},Q=Pi(L);s._s.set(t,Q);const u=(s._a&&s._a.runWithContext||ep)(()=>s._e.run(()=>(o=Lc()).run(()=>e({action:ee}))));for(const d in u){const v=u[d];if(me(v)&&!sp(v)||Rt(v))r||(I&&np(v)&&(me(v)?v.value=I[d]:Dr(v,I[d])),s.state.value[t][d]=v);else if(typeof v=="function"){const b=ee(v,d);u[d]=b,l.actions[d]=v}}return wt(Q,u),wt(J(Q),u),Object.defineProperty(Q,"$state",{get:()=>s.state.value[t],set:d=>{j(v=>{wt(v,d)})}}),s._p.forEach(d=>{wt(Q,o.run(()=>d({store:Q,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(Q.$state,I),a=!0,h=!0,Q}/*! #__NO_SIDE_EFFECTS__ */function rp(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Gf();return o=o||(c?zn(Ua,null):null),o&&Li(o),o=Wa,o._s.has(t)||(i?ja(t,e,s,o):ip(t,s,o)),o._s.get(t)}return r.$id=t,r}const $a=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},op=()=>{};var Ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const T=function(t,e){if(!t)throw Sn(e)},Sn=function(t){return new Error("Firebase Database ("+Ka.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,h=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[h],n[p],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ga(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new cp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),p!==64){const I=a<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const za=function(t){const e=Ga(t);return xo.encodeByteArray(e,!0)},Ys=function(t){return za(t).replace(/\./g,"")},kr=function(t){try{return xo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fp=()=>hp().__FIREBASE_DEFAULTS__,dp=()=>{if(typeof process>"u"||typeof Ml>"u")return;const t=Ml.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kr(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return op()||fp()||dp()||pp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_p=t=>{var e,n;return(n=(e=Ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gp=t=>{const e=_p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qa=()=>{var t;return(t=Ya())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function mp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ys(JSON.stringify(n)),Ys(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xp())}function yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vp(){return Ka.NODE_ADMIN===!0}function bp(){try{return typeof indexedDB=="object"}catch{return!1}}function Cp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="FirebaseError";class vs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ep,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ip(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function Ip(t,e){return t.replace(wp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=os(kr(r[0])||""),n=os(kr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Sp=function(t){const e=Za(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tp=function(t){const e=Za(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ll(r)&&Ll(o)){if(!Js(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ll(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,h;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),h=1518500249):(a=r^o^l,h=1859775393):p<60?(a=r&o|l&(r|o),h=2400959708):(a=r^o^l,h=3395469782);const g=(i<<5|i>>>27)+a+c+h+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function yo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Tn(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Pp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Op(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Op(t){return t===Gt?void 0:t}function Dp(t){return t.instantiationMode==="EAGER"}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Mp={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Fp=ae.INFO,Lp={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Bp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Lp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=Fp,this._logHandler=Bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Hp=(t,e)=>e.some(n=>t instanceof n);let Bl,Hl;function Wp(){return Bl||(Bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return Hl||(Hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,Mr=new WeakMap,nu=new WeakMap,ar=new WeakMap,vo=new WeakMap;function Vp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(At(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tu.set(n,t)}).catch(()=>{}),vo.set(e,t),e}function jp(t){if(Mr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Mr.set(t,e)}let Fr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $p(t){Fr=t(Fr)}function Kp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return nu.set(s,e.sort?e.sort():[e]),At(s)}:Up().includes(t)?function(...e){return t.apply(ur(this),e),At(tu.get(this))}:function(...e){return At(t.apply(ur(this),e))}}function Gp(t){return typeof t=="function"?Kp(t):(t instanceof IDBTransaction&&jp(t),Hp(t,Wp())?new Proxy(t,Fr):t)}function At(t){if(t instanceof IDBRequest)return Vp(t);if(ar.has(t))return ar.get(t);const e=Gp(t);return e!==t&&(ar.set(t,e),vo.set(e,t)),e}const ur=t=>vo.get(t);function zp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=At(o);return s&&o.addEventListener("upgradeneeded",c=>{s(At(o.result),c.oldVersion,c.newVersion,At(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const qp=["get","getKey","getAll","getAllKeys","count"],Yp=["put","add","delete","clear"],hr=new Map;function Wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Yp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return hr.set(e,r),r}$p(t=>({...t,get:(e,n,s)=>Wl(e,n)||t.get(e,n,s),has:(e,n)=>!!Wl(e,n)||t.has(e,n)}));/**
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
 */class Qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lr="@firebase/app",Ul="0.11.2";/**
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
 */const vt=new eu("@firebase/app"),Xp="@firebase/app-compat",Zp="@firebase/analytics-compat",e_="@firebase/analytics",t_="@firebase/app-check-compat",n_="@firebase/app-check",s_="@firebase/auth",i_="@firebase/auth-compat",r_="@firebase/database",o_="@firebase/data-connect",l_="@firebase/database-compat",c_="@firebase/functions",a_="@firebase/functions-compat",u_="@firebase/installations",h_="@firebase/installations-compat",f_="@firebase/messaging",d_="@firebase/messaging-compat",p_="@firebase/performance",__="@firebase/performance-compat",g_="@firebase/remote-config",m_="@firebase/remote-config-compat",x_="@firebase/storage",y_="@firebase/storage-compat",v_="@firebase/firestore",b_="@firebase/vertexai",C_="@firebase/firestore-compat",E_="firebase",I_="11.4.0";/**
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
 */const Br="[DEFAULT]",w_={[Lr]:"fire-core",[Xp]:"fire-core-compat",[e_]:"fire-analytics",[Zp]:"fire-analytics-compat",[n_]:"fire-app-check",[t_]:"fire-app-check-compat",[s_]:"fire-auth",[i_]:"fire-auth-compat",[r_]:"fire-rtdb",[o_]:"fire-data-connect",[l_]:"fire-rtdb-compat",[c_]:"fire-fn",[a_]:"fire-fn-compat",[u_]:"fire-iid",[h_]:"fire-iid-compat",[f_]:"fire-fcm",[d_]:"fire-fcm-compat",[p_]:"fire-perf",[__]:"fire-perf-compat",[g_]:"fire-rc",[m_]:"fire-rc-compat",[x_]:"fire-gcs",[y_]:"fire-gcs-compat",[v_]:"fire-fst",[C_]:"fire-fst-compat",[b_]:"fire-vertex","fire-js":"fire-js",[E_]:"fire-js-all"};/**
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
 */const Xs=new Map,S_=new Map,Hr=new Map;function Vl(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(Hr.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Hr.set(e,t);for(const n of Xs.values())Vl(n,t);for(const n of S_.values())Vl(n,t);return!0}function T_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function N_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Xa("app","Firebase",R_);/**
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
 */class A_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const P_=I_;function su(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Br,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pt.create("bad-app-name",{appName:String(i)});if(n||(n=Qa()),!n)throw Pt.create("no-options");const r=Xs.get(i);if(r){if(Js(n,r.options)&&Js(s,r.config))return r;throw Pt.create("duplicate-app",{appName:i})}const o=new kp(i);for(const c of Hr.values())o.addComponent(c);const l=new A_(n,s,o);return Xs.set(i,l),l}function O_(t=Br){const e=Xs.get(t);if(!e&&t===Br&&Qa())return su();if(!e)throw Pt.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let i=(s=w_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(l.join(" "));return}Zs(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const D_="firebase-heartbeat-database",k_=1,cs="firebase-heartbeat-store";let fr=null;function iu(){return fr||(fr=zp(D_,k_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),fr}async function M_(t){try{const n=(await iu()).transaction(cs),s=await n.objectStore(cs).get(ru(t));return await n.done,s}catch(e){if(e instanceof vs)vt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function jl(t,e){try{const s=(await iu()).transaction(cs,"readwrite");await s.objectStore(cs).put(e,ru(t)),await s.done}catch(n){if(n instanceof vs)vt.warn(n.message);else{const s=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(s.message)}}}function ru(t){return`${t.name}!${t.options.appId}`}/**
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
 */const F_=1024,L_=30;class B_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$l();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>L_){const o=U_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$l(),{heartbeatsToSend:s,unsentEntries:i}=H_(this._heartbeatsCache.heartbeats),r=Ys(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return vt.warn(n),""}}}function $l(){return new Date().toISOString().substring(0,10)}function H_(t,e=F_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Kl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class W_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bp()?Cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kl(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}function U_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function V_(t){Zs(new ls("platform-logger",e=>new Qp(e),"PRIVATE")),Zs(new ls("heartbeat",e=>new B_(e),"PRIVATE")),xn(Lr,Ul,t),xn(Lr,Ul,"esm2017"),xn("fire-js","")}V_("");var j_="firebase",$_="11.4.0";/**
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
 */xn(j_,$_,"app");var Gl={};const zl="@firebase/database",ql="1.0.13";/**
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
 */let ou="";function K_(t){ou=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new G_(e)}}catch{}return new z_},qt=lu("localStorage"),q_=lu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new eu("@firebase/database"),Y_=function(){let t=1;return function(){return t++}}(),cu=function(t){const e=Ap(t),n=new Rp;n.update(e);const s=n.digest();return xo.encodeByteArray(s)},bs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=bs.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let Qn=null,Yl=!0;const Q_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),yn.logLevel=ae.VERBOSE,Qn=yn.log.bind(yn)},Ne=function(...t){if(Yl===!0&&(Yl=!1,Qn===null&&q_.get("logging_enabled")===!0&&Q_()),Qn){const e=bs.apply(null,t);Qn(e)}},Cs=function(t){return function(...e){Ne(t,...e)}},Wr=function(...t){const e="FIREBASE INTERNAL ERROR: "+bs(...t);yn.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${bs(...t)}`;throw yn.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+bs(...t);yn.warn(e)},J_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},au=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},X_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},En="[MIN_NAME]",en="[MAX_NAME]",Nn=function(t,e){if(t===e)return 0;if(t===En||e===en)return-1;if(e===En||t===en)return 1;{const n=Ql(t),s=Ql(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Z_=function(t,e){return t===e?0:t<e?-1:1},Fn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},bo=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ye(e[s]),n+=":",n+=bo(t[e[s]]);return n+="}",n},uu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hu=function(t){T(!au(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const h=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},eg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ng(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const sg=new RegExp("^-?(0*)\\d{1,10}$"),ig=-2147483648,rg=2147483647,Ql=function(t){if(sg.test(t)){const e=Number(t);if(e>=ig&&e<=rg)return e}return null},Rn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},og=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,N_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="5",fu="v",du="s",pu="r",_u="f",gu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mu="ls",xu="p",Ur="ac",yu="websocket",vu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ag(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cu(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===yu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ag(t)&&(n.ns=t.namespace);const i=[];return He(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ap(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={},pr={};function Eo(t){const e=t.toString();return dr[e]||(dr[e]=new ug),dr[e]}function hg(t,e){const n=t.toString();return pr[n]||(pr[n]=e()),pr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="start",dg="close",pg="pLPCommand",_g="pRTLPCB",Eu="id",Iu="pw",wu="ser",gg="cb",mg="seg",xg="ts",yg="d",vg="dframe",Su=1870,Tu=30,bg=Su-Tu,Cg=25e3,Eg=3e4;class dn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=Eo(n),this.urlFn=c=>(this.appCheckToken&&(c[Ur]=this.appCheckToken),Cu(n,vu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Eg)),X_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Io((...r)=>{const[o,l,c,a,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jl)this.id=l,this.password=c;else if(o===dg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jl]="t",s[wu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[gg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[fu]=Co,this.transportSessionId&&(s[du]=this.transportSessionId),this.lastSessionId&&(s[mu]=this.lastSessionId),this.applicationId&&(s[xu]=this.applicationId),this.appCheckToken&&(s[Ur]=this.appCheckToken),typeof location<"u"&&location.hostname&&gu.test(location.hostname)&&(s[pu]=_u);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dn.forceAllow_=!0}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){return dn.forceAllow_?!0:!dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eg()&&!tg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=za(n),i=uu(s,bg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[vg]="t",s[Eu]=e,s[Iu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Io{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Y_(),window[pg+this.uniqueCallbackIdentifier]=e,window[_g+this.uniqueCallbackIdentifier]=n,this.myIFrame=Io.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Eu]=this.myID,e[Iu]=this.myPW,e[wu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tu+s.length<=Su;){const o=this.pendingSegs.shift();s=s+"&"+mg+i+"="+o.seg+"&"+xg+i+"="+o.ts+"&"+yg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Cg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=16384,wg=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class Qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=Eo(n),this.connURL=Qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[fu]=Co,typeof location<"u"&&location.hostname&&gu.test(location.hostname)&&(o[pu]=_u),n&&(o[du]=n),s&&(o[mu]=s),i&&(o[Ur]=i),r&&(o[xu]=r),Cu(e,yu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let s;vp(),this.mySock=new ei(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ei!==null&&!Qe.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=uu(n,Ig);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{static get ALL_TRANSPORTS(){return[dn,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Qe&&Qe.isAvailable();let s=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qe];else{const i=this.transports_=[];for(const r of as.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);as.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}as.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=6e4,Tg=5e3,Ng=10*1024,Rg=100*1024,_r="t",Xl="d",Ag="s",Zl="r",Pg="e",ec="o",tc="a",nc="n",sc="p",Og="h";class Dg{constructor(e,n,s,i,r,o,l,c,a,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new as(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Jn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Rg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ng?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_r in e){const n=e[_r];n===tc?this.upgradeIfSecondaryHealthy_():n===Zl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ec&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fn(_r,e);if(Xl in e){const s=e[Xl];if(n===Og){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ag?this.onConnectionShutdown_(s):n===Zl?this.onReset_(s):n===Pg?Wr("Server Error: "+s):n===ec?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Co!==s&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Jn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Sg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ti extends Ru{static getInstance(){return new ti}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=32,rc=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Au(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Pu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ou(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return ke(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function wo(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Mg{constructor(e,n){this.errorPrefix_=n,this.parts_=Pu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hi(this.parts_[s]);Du(this)}}function Fg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hi(e),Du(t)}function Lg(t){const e=t.parts_.pop();t.byteLength_-=Hi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Du(t){if(t.byteLength_>rc)throw new Error(t.errorPrefix_+"has a key path longer than "+rc+" bytes ("+t.byteLength_+").");if(t.parts_.length>ic)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ic+") or object contains a cycle "+zt(t))}function zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Ru{static getInstance(){return new So}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=1e3,Bg=60*5*1e3,oc=30*1e3,Hg=1.3,Wg=3e4,Ug="server_kill",lc=3;class yt extends Nu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=yt.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ln,this.maxReconnectDelay_=Bg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");So.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ye(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Bi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;yt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wr("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Wg&&(this.reconnectDelay_=Ln),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Hg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Dg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{Be(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ug)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Be(p),c())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fl(this.interruptReasons_)&&(this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>bo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lc&&(this.reconnectDelay_=oc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ou.replace(/\./g,"-")]=1,Ja()?e["framework.cordova"]=1:yp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Fl(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(En,e),i=new z(En,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class ku extends Wi{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return Nn(e.name,n.name)}isDefinedOn(e){throw Sn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(en,Os)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Os)}toString(){return".key"}}const vn=new ku;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class Vg{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new Vg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e){return Nn(t.name,e.name)}function To(t,e){return Nn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;function $g(t){Vr=t}const Mu=function(t){return typeof t=="number"?"number:"+hu(t):"string:"+t},Fu=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else T(t===Vr||t.isEmpty(),"priority of unexpected type.");T(t===Vr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;class be{static set __childrenNodeConstructor(e){cc=e}static get __childrenNodeConstructor(){return cc}constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:G(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hu(this.value_):e+=this.value_,this.lazyHash_=cu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu,Bu;function Kg(t){Lu=t}function Gg(t){Bu=t}class zg extends Wi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(en,new be("[PRIORITY-POST]",Bu))}makePost(e,n){const s=Lu(e);return new z(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=Math.log(2);class Yg{constructor(e){const n=r=>parseInt(Math.log(r)/qg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(t,e,n,s){t.sort(e);const i=function(c,a){const h=a-c;let p,g;if(h===0)return null;if(h===1)return p=t[c],g=n?n(p):p,new Ce(g,p.node,Ce.BLACK,null,null);{const x=parseInt(h/2,10)+c,I=i(c,x),D=i(x+1,a);return p=t[x],g=n?n(p):p,new Ce(g,p.node,Ce.BLACK,I,D)}},r=function(c){let a=null,h=null,p=t.length;const g=function(I,D){const j=p-I,$=p;p-=I;const Z=i(j+1,$),ee=t[j],L=n?n(ee):ee;x(new Ce(L,ee.node,D,null,Z))},x=function(I){a?(a.left=I,a=I):(h=I,a=I)};for(let I=0;I<c.count;++I){const D=c.nextBitIsOne(),j=Math.pow(2,c.count-(I+1));D?g(j,Ce.BLACK):(g(j,Ce.BLACK),g(j,Ce.RED))}return h},o=new Yg(t.length),l=r(o);return new Le(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;const an={};class xt{static get Default(){return T(an&&_e,"ChildrenNode.ts has not been loaded"),gr=gr||new xt({".priority":an},{".priority":_e}),gr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){T(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ni(s,e.getCompare()):l=an;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new xt(h,a)}addToIndexes(e,n){const s=Qs(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(z.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ni(l,o.getCompare())}else return an;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new z(e.name,l))),c.insert(e,e.node)}});return new xt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Qs(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new xt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;class H{static get EMPTY_NODE(){return Bn||(Bn=new H(new Le(To),null,xt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fu(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bn}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bn:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bn:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{T(G(e)!==".priority"||kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mu(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qg extends H{constructor(){super(new Le(To),H.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Es=new Qg;Object.defineProperties(z,{MIN:{value:new z(En,H.EMPTY_NODE)},MAX:{value:new z(en,Es)}});ku.__EMPTY_NODE=H.EMPTY_NODE;be.__childrenNodeConstructor=H;$g(Es);Gg(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=!0;function Ee(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Ee(e))}if(!(t instanceof Array)&&Jg){const n=[];let s=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ee(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new z(o,c)))}}),n.length===0)return H.EMPTY_NODE;const r=ni(n,jg,o=>o.name,To);if(s){const o=ni(n,_e.getCompare());return new H(r,Ee(e),new xt({".priority":o},{".priority":_e}))}else return new H(r,Ee(e),xt.Default)}else{let n=H.EMPTY_NODE;return He(t,(s,i)=>{if(Et(t,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ee(e))}}Kg(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg extends Wi{constructor(e){super(),this.indexPath_=e,T(!q(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}makePost(e,n){const s=Ee(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Es);return new z(en,e)}toString(){return Pu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Wi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Nn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=Ee(e);return new z(n,s)}toString(){return".value"}}const em=new Zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function us(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(us(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(In(n,s)):o.trackChildChange(hs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(us(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(hs(i,r,o))}else s.trackChildChange(In(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.indexedFilter_=new No(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fs.getStartPost_(e),this.endPost_=fs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new z(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new z(o,l))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new z(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,x)=>p(x,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new z(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(h&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(hs(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(us(n,p));const D=l.updateImmediateChild(n,H.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(In(g.name,g.node)),D.updateImmediateChild(g.name,g.node)):D}}else return s.isEmpty()?e:h&&o(a,c)>=0?(r!=null&&(r.trackChildChange(us(a.name,a.node)),r.trackChildChange(In(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Ro;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sm(t){return t.loadsAllData()?new No(t.getIndex()):t.hasLimit()?new nm(t):new fs(t)}function ac(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===em?n="$value":t.index_===vn?n="$key":(T(t.index_ instanceof Xg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Nu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Cs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=si.getListenId_(e,s),l={};this.listens_[o]=l;const c=ac(e._queryParams);this.restRequest_(r+".json",c,(a,h)=>{let p=h;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),Cn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=si.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ac(e._queryParams),s=e._path.toString(),i=new Bi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Np(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=os(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return{value:null,children:new Map}}function Wu(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,ii());const i=t.children.get(s);e=ue(e),Wu(i,e,n)}}function jr(t,e,n){t.value!==null?n(e,t.value):rm(t,(s,i)=>{const r=new re(e.toString()+"/"+s);jr(i,r,n)})}function rm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=10*1e3,lm=30*1e3,cm=5*60*1e3;class am{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new om(e);const s=hc+(lm-hc)*Math.random();Jn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(i,r)=>{r>0&&Et(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Jn(this.reportStats_.bind(this),Math.floor(Math.random()*2*cm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Uu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ao(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Po(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=Uu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ri(X(),n,this.revert)}}else return T(G(this.path)===e,"operationForChild called for unrelated child."),new ri(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ds(this.source,X()):new ds(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return q(this.path)?new tn(this.source,X(),this.snap.getImmediateChild(e)):new tn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new tn(this.source,X(),n.value):new ps(this.source,X(),n)}else return T(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(tm(o.childName,o.snapshotNode))}),Hn(t,i,"child_removed",e,s,n),Hn(t,i,"child_added",e,s,n),Hn(t,i,"child_moved",r,s,n),Hn(t,i,"child_changed",e,s,n),Hn(t,i,"value",e,s,n),i}function Hn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>dm(t,l,c)),o.forEach(l=>{const c=fm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function fm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dm(t,e,n){if(e.childName==null||n.childName==null)throw Sn("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e){return{eventCache:t,serverCache:e}}function Xn(t,e,n,s){return Ui(new Mt(e,n,s),t.serverCache)}function Vu(t,e,n,s){return Ui(t.eventCache,new Mt(e,n,s))}function oi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr;const pm=()=>(mr||(mr=new Le(Z_)),mr);class he{static fromObject(e){let n=new he(null);return He(e,(s,i)=>{n=n.set(new re(s),i)}),n}constructor(e,n=pm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(q(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:ve(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new he(null)}}set(e,n){if(q(e))return new he(n,this.children);{const s=G(e),r=(this.children.get(s)||new he(null)).set(ue(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const s=G(e),r=(this.children.get(s)||new he(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),ve(n,i),s):new he(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new he(null))}}function Zn(t,e,n){if(q(e))return new et(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function fc(t,e,n){let s=t;return He(n,(i,r)=>{s=Zn(s,ve(e,i),r)}),s}function dc(t,e){if(q(e))return et.empty();{const n=t.writeTree_.setTree(e,new he(null));return new et(n)}}function $r(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function pc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function Ot(t,e){if(q(e))return t;{const n=rn(t,e);return n!=null?new et(new he(n)):new et(t.writeTree_.subtree(e))}}function Kr(t){return t.writeTree_.isEmpty()}function wn(t,e){return ju(X(),t.writeTree_,e)}function ju(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ju(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e){return zu(e,t)}function _m(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zn(t.visibleWrites,e,n)),t.lastWriteId=s}function gm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function mm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xm(l,s.path)?i=!1:Je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return ym(t),!0;if(s.snap)t.visibleWrites=dc(t.visibleWrites,s.path);else{const l=s.children;He(l,c=>{t.visibleWrites=dc(t.visibleWrites,ve(s.path,c))})}return!0}else return!1}function xm(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(ve(t.path,n),e))return!0;return!1}function ym(t){t.visibleWrites=$u(t.allWrites,vm,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function vm(t){return t.visible}function $u(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Je(n,o)?(l=ke(n,o),s=Zn(s,l,r.snap)):Je(o,n)&&(l=ke(o,n),s=Zn(s,X(),r.snap.getChild(l)));else if(r.children){if(Je(n,o))l=ke(n,o),s=fc(s,l,r.children);else if(Je(o,n))if(l=ke(o,n),q(l))s=fc(s,X(),r.children);else{const c=Cn(r.children,G(l));if(c){const a=c.getChild(ue(l));s=Zn(s,X(),a)}}}else throw Sn("WriteRecord should have .snap or .children")}}return s}function Ku(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(Kr(o))return n;if(n==null&&!$r(o,X()))return null;{const l=n||H.EMPTY_NODE;return wn(o,l)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&Kr(r))return n;if(!i&&n==null&&!$r(r,X()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Je(a.path,e)||Je(e,a.path))},l=$u(t.allWrites,o,e),c=n||H.EMPTY_NODE;return wn(l,c)}}}function bm(t,e,n){let s=H.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const c=wn(Ot(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),pc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return pc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Cm(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if($r(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return Kr(o)?i.getChild(n):wn(o,i.getChild(n))}}function Em(t,e,n,s){const i=ve(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return wn(o,s.getNode().getImmediateChild(n))}else return null}function Im(t,e){return rn(t.visibleWrites,e)}function wm(t,e,n,s,i,r,o){let l;const c=Ot(t.visibleWrites,e),a=rn(c,X());if(a!=null)l=a;else if(n!=null)l=wn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&h.length<i;)p(x,s)!==0&&h.push(x),x=g.getNext();return h}else return[]}function Sm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function li(t,e,n,s){return Ku(t.writeTree,t.treePath,e,n,s)}function Oo(t,e){return bm(t.writeTree,t.treePath,e)}function _c(t,e,n,s){return Cm(t.writeTree,t.treePath,e,n,s)}function ci(t,e){return Im(t.writeTree,ve(t.treePath,e))}function Tm(t,e,n,s,i,r){return wm(t.writeTree,t.treePath,e,n,s,i,r)}function Do(t,e,n){return Em(t.writeTree,t.treePath,e,n)}function Gu(t,e){return zu(ve(t.treePath,e),t.writeTree)}function zu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,hs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,us(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,In(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,hs(s,e.snapshotNode,i.oldSnap));else throw Sn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const qu=new Rm;class ko{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Do(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=Tm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){return{filter:t}}function Pm(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Om(t,e,n,s,i){const r=new Nm;let o,l;if(n.type===Xe.OVERWRITE){const a=n;a.source.fromUser?o=Gr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=ai(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const a=n;a.source.fromUser?o=km(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=zr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const a=n;a.revert?o=Lm(t,e,a.path,s,i,r):o=Mm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Fm(t,e,n.path,s,r);else throw Sn("Unknown operation type: "+n.type);const c=r.getChanges();return Dm(e,o,c),{viewCache:o,changes:c}}function Dm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=oi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Hu(oi(e)))}}function Yu(t,e,n,s,i,r){const o=e.eventCache;if(ci(s,n)!=null)return e;{let l,c;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=nn(e),h=a instanceof H?a:H.EMPTY_NODE,p=Oo(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=li(s,nn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=G(n);if(a===".priority"){T(kt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const p=_c(s,n,h,c);p!=null?l=t.filter.updatePriority(h,p):l=o.getNode()}else{const h=ue(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=_c(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(h,g):p=o.getNode().getImmediateChild(a)}else p=Do(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,h,i,r):l=o.getNode()}}return Xn(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function ai(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const h=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=h.updateFullNode(c.getNode(),x,null)}else{const x=G(n);if(!c.isCompleteForPath(n)&&kt(n)>1)return e;const I=ue(n),j=c.getNode().getImmediateChild(x).updateChild(I,s);x===".priority"?a=h.updatePriority(c.getNode(),j):a=h.updateChild(c.getNode(),x,j,I,qu,null)}const p=Vu(e,a,c.isFullyInitialized()||q(n),h.filtersNodes()),g=new ko(i,p,r);return Yu(t,p,n,i,g,l)}function Gr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const h=new ko(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Xn(e,a,!0,t.filter.filtersNodes());else{const p=G(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Xn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ue(n),x=l.getNode().getImmediateChild(p);let I;if(q(g))I=s;else{const D=h.getCompleteChild(p);D!=null?Au(g)===".priority"&&D.getChild(Ou(g)).isEmpty()?I=D:I=D.updateChild(g,s):I=H.EMPTY_NODE}if(x.equals(I))c=e;else{const D=t.filter.updateChild(l.getNode(),p,I,g,h,o);c=Xn(e,D,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function gc(t,e){return t.eventCache.isCompleteForChild(e)}function km(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const h=ve(n,c);gc(e,G(h))&&(l=Gr(t,l,h,a,i,r,o))}),s.foreach((c,a)=>{const h=ve(n,c);gc(e,G(h))||(l=Gr(t,l,h,a,i,r,o))}),l}function mc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new he(null).setTree(n,s);const h=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(h.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),I=mc(t,x,g);c=ai(t,c,new re(p),I,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!h.hasChild(p)&&!x){const I=e.serverCache.getNode().getImmediateChild(p),D=mc(t,I,g);c=ai(t,c,new re(p),D,i,r,o,l)}}),c}function Mm(t,e,n,s,i,r,o){if(ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new he(null);return c.getNode().forEachChild(vn,(h,p)=>{a=a.set(new re(h),p)}),zr(t,e,n,a,i,r,l,o)}else return e}else{let a=new he(null);return s.foreach((h,p)=>{const g=ve(n,h);c.isCompleteForPath(g)&&(a=a.set(h,c.getNode().getChild(g)))}),zr(t,e,n,a,i,r,l,o)}}function Fm(t,e,n,s,i){const r=e.serverCache,o=Vu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Yu(t,o,n,s,qu,i)}function Lm(t,e,n,s,i,r){let o;if(ci(s,n)!=null)return e;{const l=new ko(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||G(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=li(s,nn(e));else{const p=e.serverCache.getNode();T(p instanceof H,"serverChildren would be complete if leaf node"),h=Oo(s,p)}h=h,a=t.filter.updateFullNode(c,h,r)}else{const h=G(n);let p=Do(s,h,e.serverCache);p==null&&e.serverCache.isCompleteForChild(h)&&(p=c.getImmediateChild(h)),p!=null?a=t.filter.updateChild(c,h,p,ue(n),l,r):e.eventCache.getNode().hasChild(h)?a=t.filter.updateChild(c,h,H.EMPTY_NODE,ue(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=li(s,nn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ci(s,X())!=null,Xn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new No(s.getIndex()),r=sm(s);this.processor_=Am(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(H.EMPTY_NODE,l.getNode(),null),h=new Mt(c,o.isFullyInitialized(),i.filtersNodes()),p=new Mt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ui(p,h),this.eventGenerator_=new um(this.query_)}get query(){return this.query_}}function Hm(t){return t.viewCache_.serverCache.getNode()}function Wm(t){return oi(t.viewCache_)}function Um(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function xc(t){return t.eventRegistrations_.length===0}function Vm(t,e){t.eventRegistrations_.push(e)}function yc(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function vc(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(T(nn(t.viewCache_),"We should always have a full cache before handling merges"),T(oi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Om(t.processor_,i,e,n,s);return Pm(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Qu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function jm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(In(r,o))}),n.isFullyInitialized()&&s.push(Hu(n.getNode())),Qu(t,s,n.getNode(),e)}function Qu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return hm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class Ju{constructor(){this.views=new Map}}function $m(t){T(!ui,"__referenceConstructor has already been defined"),ui=t}function Km(){return T(ui,"Reference.ts has not been loaded"),ui}function Gm(t){return t.views.size===0}function Mo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),vc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(vc(o,e,n,s));return r}}function Xu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=li(n,i?s:null),c=!1;l?c=!0:s instanceof H?(l=Oo(n,s),c=!1):(l=H.EMPTY_NODE,c=!1);const a=Ui(new Mt(l,c,!1),new Mt(s,i,!1));return new Bm(e,a)}return o}function zm(t,e,n,s,i,r){const o=Xu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Vm(o,n),jm(o,n)}function qm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ft(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(yc(a,n,s)),xc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(yc(c,n,s)),xc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Ft(t)&&r.push(new(Km())(e._repo,e._path)),{removed:r,events:o}}function Zu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dt(t,e){let n=null;for(const s of t.views.values())n=n||Um(s,e);return n}function eh(t,e){if(e._queryParams.loadsAllData())return ji(t);{const s=e._queryIdentifier;return t.views.get(s)}}function th(t,e){return eh(t,e)!=null}function Ft(t){return ji(t)!=null}function ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function Ym(t){T(!hi,"__referenceConstructor has already been defined"),hi=t}function Qm(){return T(hi,"Reference.ts has not been loaded"),hi}let Jm=1;class bc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=Sm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nh(t,e,n,s,i){return _m(t.pendingWriteTree_,e,n,s,i),i?ws(t,new tn(Uu(),e,n)):[]}function Yt(t,e,n=!1){const s=gm(t.pendingWriteTree_,e);if(mm(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(X(),!0):He(s.children,o=>{r=r.set(new re(o),!0)}),ws(t,new ri(s.path,r,n))}else return[]}function Is(t,e,n){return ws(t,new tn(Ao(),e,n))}function Xm(t,e,n){const s=he.fromObject(n);return ws(t,new ps(Ao(),e,s))}function Zm(t,e){return ws(t,new ds(Ao(),e))}function e0(t,e,n){const s=Lo(t,n);if(s){const i=Bo(s),r=i.path,o=i.queryId,l=ke(r,e),c=new ds(Po(o),l);return Ho(t,r,c)}else return[]}function fi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||th(o,e))){const c=qm(o,e,n,s);Gm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const h=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,x)=>Ft(x));if(h&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=s0(g);for(let I=0;I<x.length;++I){const D=x[I],j=D.query,$=oh(t,D);t.listenProvider_.startListening(es(j),_s(t,j),$.hashFn,$.onComplete)}}}!p&&a.length>0&&!s&&(h?t.listenProvider_.stopListening(es(e),null):a.forEach(g=>{const x=t.queryToTagMap.get($i(g));t.listenProvider_.stopListening(es(g),x)}))}i0(t,a)}return l}function sh(t,e,n,s){const i=Lo(t,s);if(i!=null){const r=Bo(i),o=r.path,l=r.queryId,c=ke(o,e),a=new tn(Po(l),c,n);return Ho(t,o,a)}else return[]}function t0(t,e,n,s){const i=Lo(t,s);if(i){const r=Bo(i),o=r.path,l=r.queryId,c=ke(o,e),a=he.fromObject(n),h=new ps(Po(l),c,a);return Ho(t,o,h)}else return[]}function qr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const I=ke(g,i);r=r||Dt(x,I),o=o||Ft(x)});let l=t.syncPointTree_.get(i);l?(o=o||Ft(l),r=r||Dt(l,X())):(l=new Ju,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,I)=>{const D=Dt(I,X());D&&(r=r.updateImmediateChild(x,D))}));const a=th(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=$i(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=r0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const h=Vi(t.pendingWriteTree_,i);let p=zm(l,e,n,h,r,c);if(!a&&!o&&!s){const g=eh(l,e);p=p.concat(o0(t,e,g))}return p}function Fo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=ke(o,e),a=Dt(l,c);if(a)return a});return Ku(i,e,r,n,!0)}function n0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,h)=>{const p=ke(a,n);s=s||Dt(h,p)});let i=t.syncPointTree_.get(n);i?s=s||Dt(i,X()):(i=new Ju,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Mt(s,!0,!1):null,l=Vi(t.pendingWriteTree_,e._path),c=Xu(i,e,l,r?o.getNode():H.EMPTY_NODE,r);return Wm(c)}function ws(t,e){return ih(e,t.syncPointTree_,null,Vi(t.pendingWriteTree_,X()))}function ih(t,e,n,s){if(q(t.path))return rh(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=Dt(i,X()));let r=[];const o=G(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,h=Gu(s,o);r=r.concat(ih(l,c,a,h))}return i&&(r=r.concat(Mo(i,t,s,n))),r}}function rh(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=Dt(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Gu(s,o),h=t.operationForChild(o);h&&(r=r.concat(rh(h,l,c,a)))}),i&&(r=r.concat(Mo(i,t,s,n))),r}function oh(t,e){const n=e.query,s=_s(t,n);return{hashFn:()=>(Hm(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?e0(t,n._path,s):Zm(t,n._path);{const r=ng(i,n);return fi(t,n,null,r)}}}}function _s(t,e){const n=$i(e);return t.queryToTagMap.get(n)}function $i(t){return t._path.toString()+"$"+t._queryIdentifier}function Lo(t,e){return t.tagToQueryMap.get(e)}function Bo(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Ho(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Vi(t.pendingWriteTree_,e);return Mo(s,n,i,null)}function s0(t){return t.fold((e,n,s)=>{if(n&&Ft(n))return[ji(n)];{let i=[];return n&&(i=Zu(n)),He(s,(r,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Qm())(t._repo,t._path):t}function i0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$i(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function r0(){return Jm++}function o0(t,e,n){const s=e._path,i=_s(t,e),r=oh(t,n),o=t.listenProvider_.startListening(es(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!Ft(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,h,p)=>{if(!q(a)&&h&&Ft(h))return[ji(h).query];{let g=[];return h&&(g=g.concat(Zu(h).map(x=>x.query))),He(p,(x,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const h=c[a];t.listenProvider_.stopListening(es(h),_s(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wo(n)}node(){return this.node_}}class Uo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Uo(this.syncTree_,n)}node(){return Fo(this.syncTree_,this.path_)}}const l0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cc=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return c0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return a0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},c0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},a0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},u0=function(t,e,n,s){return Vo(e,new Uo(n,t),s)},lh=function(t,e,n){return Vo(t,new Wo(e),n)};function Vo(t,e,n){const s=t.getPriority().val(),i=Cc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Cc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new be(l,Ee(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(_e,(l,c)=>{const a=Vo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function $o(t,e){let n=e instanceof re?e:new re(e),s=t,i=G(n);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new jo(i,s,r),n=ue(n),i=G(n)}return s}function An(t){return t.node.value}function ch(t,e){t.node.value=e,Yr(t)}function ah(t){return t.node.childCount>0}function h0(t){return An(t)===void 0&&!ah(t)}function Ki(t,e){He(t.node.children,(n,s)=>{e(new jo(n,t,s))})}function uh(t,e,n,s){n&&e(t),Ki(t,i=>{uh(i,e,!0)})}function f0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(t){return new re(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function Yr(t){t.parent!==null&&d0(t.parent,t.name,t)}function d0(t,e,n){const s=h0(n),i=Et(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Yr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Yr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=/[\[\].#$\/\u0000-\u001F\u007F]/,_0=/[\[\].#$\u0000-\u001F\u007F]/,xr=10*1024*1024,hh=function(t){return typeof t=="string"&&t.length!==0&&!p0.test(t)},fh=function(t){return typeof t=="string"&&t.length!==0&&!_0.test(t)},g0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fh(t)},m0=function(t,e,n,s){Ko(yo(t,"value"),e,n)},Ko=function(t,e,n){const s=n instanceof re?new Mg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+zt(s)+" with contents = "+e.toString());if(au(e))throw new Error(t+"contains "+e.toString()+" "+zt(s));if(typeof e=="string"&&e.length>xr/3&&Hi(e)>xr)throw new Error(t+"contains a string greater than "+xr+" utf8 bytes "+zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(He(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!hh(o)))throw new Error(t+" contains an invalid key ("+o+") "+zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fg(s,o),Ko(t,l,s),Lg(s)}),i&&r)throw new Error(t+' contains ".value" child '+zt(s)+" in addition to actual children.")}},dh=function(t,e,n,s){if(!fh(n))throw new Error(yo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dh(t,e,n)},ph=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},y0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!g0(n))throw new Error(yo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Go(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!wo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function _h(t,e,n){Go(t,n),gh(t,s=>wo(s,e))}function ft(t,e,n){Go(t,n),gh(t,s=>Je(s,e)||Je(e,s))}function gh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(b0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function b0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Qn&&Ne("event: "+n.toString()),Rn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="repo_interrupt",E0=25;class I0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new jo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function w0(t,e,n){if(t.stats_=Eo(t.repoInfo_),t.forceRestClient_||og())t.server_=new si(t.repoInfo_,(s,i,r,o)=>{Ec(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ic(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new yt(t.repoInfo_,e,(s,i,r,o)=>{Ec(t,s,i,r,o)},s=>{Ic(t,s)},s=>{T0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=hg(t.repoInfo_,()=>new am(t.stats_,t.server_)),t.infoData_=new im,t.infoSyncTree_=new bc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Is(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),qo(t,"connected",!1),t.serverSyncTree_=new bc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ft(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function S0(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zo(t){return l0({timestamp:S0(t)})}function Ec(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Qs(n,a=>Ee(a));o=t0(t.serverSyncTree_,r,c,i)}else{const c=Ee(n);o=sh(t.serverSyncTree_,r,c,i)}else if(s){const c=Qs(n,a=>Ee(a));o=Xm(t.serverSyncTree_,r,c)}else{const c=Ee(n);o=Is(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=zi(t,r)),ft(t.eventQueue_,l,o)}function Ic(t,e){qo(t,"connected",e),e===!1&&A0(t)}function T0(t,e){He(e,(n,s)=>{qo(t,n,s)})}function qo(t,e,n){const s=new re("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(s,i);const r=Is(t.infoSyncTree_,s,i);ft(t.eventQueue_,s,r)}function mh(t){return t.nextWriteId_++}function N0(t,e,n){const s=n0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ee(i).withIndex(e._queryParams.getIndex());qr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Is(t.serverSyncTree_,e._path,r);else{const l=_s(t.serverSyncTree_,e);o=sh(t.serverSyncTree_,e._path,r,l)}return ft(t.eventQueue_,e._path,o),fi(t.serverSyncTree_,e,n,null,!0),r},i=>(Gi(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function R0(t,e,n,s,i){Gi(t,"set",{path:e.toString(),value:n,priority:s});const r=zo(t),o=Ee(n,s),l=Fo(t.serverSyncTree_,e),c=lh(o,l,r),a=mh(t),h=nh(t.serverSyncTree_,e,c,a,!0);Go(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const I=g==="ok";I||Be("set at "+e+" failed: "+g);const D=Yt(t.serverSyncTree_,a,!I);ft(t.eventQueue_,e,D),D0(t,i,g,x)});const p=Ch(t,e);zi(t,p),ft(t.eventQueue_,p,[])}function A0(t){Gi(t,"onDisconnectEvents");const e=zo(t),n=ii();jr(t.onDisconnect_,X(),(i,r)=>{const o=u0(i,r,t.serverSyncTree_,e);Wu(n,i,o)});let s=[];jr(n,X(),(i,r)=>{s=s.concat(Is(t.serverSyncTree_,i,r));const o=Ch(t,i);zi(t,o)}),t.onDisconnect_=ii(),ft(t.eventQueue_,X(),s)}function P0(t,e,n){let s;G(e._path)===".info"?s=qr(t.infoSyncTree_,e,n):s=qr(t.serverSyncTree_,e,n),_h(t.eventQueue_,e._path,s)}function wc(t,e,n){let s;G(e._path)===".info"?s=fi(t.infoSyncTree_,e,n):s=fi(t.serverSyncTree_,e,n),_h(t.eventQueue_,e._path,s)}function O0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(C0)}function Gi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function D0(t,e,n,s){e&&Rn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function xh(t,e,n){return Fo(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function Yo(t,e=t.transactionQueueTree_){if(e||qi(t,e),An(e)){const n=vh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&k0(t,Ss(e),n)}else ah(e)&&Ki(e,n=>{Yo(t,n)})}function k0(t,e,n){const s=n.map(a=>a.currentWriteId),i=xh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const h=n[a];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const p=ke(e,h.path);r=r.updateChild(p,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Gi(t,"transaction put response",{path:c.toString(),status:a});let h=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(Yt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();qi(t,$o(t.transactionQueueTree_,e)),Yo(t,t.transactionQueueTree_),ft(t.eventQueue_,e,h);for(let g=0;g<p.length;g++)Rn(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Be("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}zi(t,e)}},o)}function zi(t,e){const n=yh(t,e),s=Ss(n),i=vh(t,n);return M0(t,i,s),s}function M0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=ke(n,c.path);let h=!1,p;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,p=c.abortReason,i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=E0)h=!0,p="maxretry",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=xh(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Ko("transaction failed: Data returned ",x,c.path);let I=Ee(x);typeof x=="object"&&x!=null&&Et(x,".priority")||(I=I.updatePriority(g.getPriority()));const j=c.currentWriteId,$=zo(t),Z=lh(I,g,$);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=Z,c.currentWriteId=mh(t),o.splice(o.indexOf(j),1),i=i.concat(nh(t.serverSyncTree_,c.path,Z,c.currentWriteId,c.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,j,!0))}else h=!0,p="nodata",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}qi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Rn(s[l]);Yo(t,t.transactionQueueTree_)}function yh(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&An(s)===void 0;)s=$o(s,n),e=ue(e),n=G(e);return s}function vh(t,e){const n=[];return bh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bh(t,e,n){const s=An(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ki(e,i=>{bh(t,i,n)})}function qi(t,e){const n=An(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ch(e,n.length>0?n:void 0)}Ki(e,s=>{qi(t,s)})}function Ch(t,e){const n=Ss(yh(t,e)),s=$o(t.transactionQueueTree_,e);return f0(s,i=>{yr(t,i)}),yr(t,s),uh(s,i=>{yr(t,i)}),n}function yr(t,e){const n=An(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ch(e,void 0):n.length=r+1,ft(t.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)Rn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function L0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sc=function(t,e){const n=B0(t),s=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||J_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},B0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let h=t.indexOf("/");h===-1&&(h=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(h,p)),h<p&&(i=F0(t.substring(h,p)));const g=L0(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class W0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Au(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=uc(this._queryParams),n=bo(e);return n==="{}"?"default":n}get _queryObject(){return uc(this._queryParams)}isEqual(e){if(e=Tn(e),!(e instanceof Qo))return!1;const n=this._repo===e._repo,s=wo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kg(this._path)}}class It extends Qo{constructor(e,n){super(e,n,new Ro,!1)}get parent(){const e=Ou(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=Qr(this.ref,e);return new gs(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gs(i,Qr(this.ref,s),_e)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ks(t,e){return t=Tn(t),t._checkNotDeleted("ref"),e!==void 0?Qr(t._root,e):t._root}function Qr(t,e){return t=Tn(t),G(t._path)===null?x0("child","path",e):dh("child","path",e),new It(t._repo,ve(t._path,e))}function U0(t){return ph("remove",t._path),Ih(t,null)}function Ih(t,e){t=Tn(t),ph("set",t._path),m0("set",e,t._path);const n=new Bi;return R0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function V0(t){t=Tn(t);const e=new Eh(()=>{}),n=new Yi(e);return N0(t._repo,t,n).then(s=>new gs(s,new It(t._repo,t._path),t._queryParams.getIndex()))}class Yi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new H0("value",this,new gs(e.snapshotNode,new It(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new W0(this,e,n):null}matches(e){return e instanceof Yi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function j0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(h,p)=>{wc(t._repo,t,l),c(h,p)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Eh(n,r||void 0),l=new Yi(o);return P0(t._repo,t,l),()=>wc(t._repo,t,l)}function $0(t,e,n,s){return j0(t,"value",e,n,s)}$m(It);Ym(It);/**
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
 */const K0="FIREBASE_DATABASE_EMULATOR_HOST",Jr={};let G0=!1;function z0(t,e,n,s){t.repoInfo_=new bu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function q0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sc(r,i),l=o.repoInfo,c;typeof process<"u"&&Gl&&(c=Gl[K0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Sc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new cg(t.name,t.options,e);y0("Invalid Firebase Database URL",o),q(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Q0(l,t,a,new lg(t,n));return new J0(h,t)}function Y0(t,e){const n=Jr[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),O0(t),delete n[t.key]}function Q0(t,e,n,s){let i=Jr[e.name];i||(i={},Jr[e.name]=i);let r=i[t.toURLString()];return r&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new I0(t,G0,n,s),i[t.toURLString()]=r,r}class J0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(w0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Y0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function X0(t=O_(),e){const n=T_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=gp("database");s&&Z0(n,...s)}return n}function Z0(t,e,n,s={}){t=Tn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Js(s,r.repoInfo_.emulatorOptions))return;bt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Hs(Hs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:mp(s.mockUserToken,t.app.options.projectId);o=new Hs(l)}z0(r,i,s,o)}/**
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
 */function ex(t){K_(P_),Zs(new ls("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return q0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xn(zl,ql,t),xn(zl,ql,"esm2017")}yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ex();const un=pi;(function(t,e){const n=pi,s=t();for(;;)try{if(-parseInt(n(146))/1*(parseInt(n(153))/2)+-parseInt(n(150))/3*(parseInt(n(138))/4)+-parseInt(n(143))/5+parseInt(n(144))/6*(parseInt(n(151))/7)+-parseInt(n(147))/8+parseInt(n(152))/9*(-parseInt(n(145))/10)+parseInt(n(148))/11*(parseInt(n(140))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(di,649777);function di(){const t=["720775593565","iamwait.firebasestorage.app","970604IbkJtQ","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","8584524UlRdHm","iamwait.firebaseapp.com","G-3RRDNZ9ME5","551645kEIsVZ","12rfyVgz","30OZSDqc","622628wmgwsH","8956168LtseSn","55uXNlRG","1:720775593565:web:1a263bf6a87ecfea3817b4","9bdmYFj","2636599kitmOi","1432089GPkFJH","4tFTNMn"];return di=function(){return t},di()}const tx={apiKey:"AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw",authDomain:un(141),databaseURL:un(139),projectId:"iamwait",storageBucket:un(155),messagingSenderId:un(154),appId:un(149),measurementId:un(142)},nx=su(tx),Ms=X0(nx);function pi(t,e){const n=di();return pi=function(s,i){return s=s-138,n[s]},pi(t,e)}const ct=gi;function _i(){const t=[">>> Данные по ","1626150iHSGNv","2619628EauoWr","error","then","%c ","smPqR","GCVPK","catch","lookField","5XpiHOv"," = ","288168uLGEdr","2531477dEhOoL","1joLrbH","16XzYDGh","83530yVdAQO","Морской бой","905264XUYKwo","HloJF","color: darkgreen"," -  данные записаны","Крестики нолики","exists","1410661tzIfBc","36jMlTFR","LKJWA","log","FuhVF"," на прослушке","369CifcaF","3PYImhG","Ошибка записи данных: ","TWlBG","val","KZNCy","Камень ножницы бумага","QnSCM","########### ########## Данные "];return _i=function(){return t},_i()}(function(t,e){const n=gi,s=t();for(;;)try{if(-parseInt(n(201))/1*(parseInt(n(199))/2)+-parseInt(n(179))/3*(-parseInt(n(205))/4)+parseInt(n(197))/5*(-parseInt(n(188))/6)+parseInt(n(211))/7*(parseInt(n(202))/8)+-parseInt(n(178))/9*(parseInt(n(203))/10)+-parseInt(n(189))/11+parseInt(n(212))/12*(parseInt(n(200))/13)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(_i,217819);function gi(t,e){const n=_i();return gi=function(s,i){return s=s-178,n[s]},gi(t,e)}const Jo=rp("fbStore2",{state:()=>({gameId:"",gameNames:{g1:ct(184),g2:ct(209),g3:ct(204)},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:0}),actions:{async getField(t){const e=ct,n={QnSCM:function(i,r){return i(r)},KZNCy:function(i,r,o){return i(r,o)},FuhVF:function(i,r){return i(r)}},s=n[e(183)](ks,Ms,t);return n[e(215)](V0,s).then(i=>{const r=e;if(i[r(210)]()){const o=i[r(182)]();return n[r(185)](Wn,r(187)+t+r(198)+JSON.stringify(o)),o}else Wn(t+" : данные не найдены")})},async setField(t,e){const n=ct,s={kMqBO:function(r,o){return r+o},smPqR:n(208),TWlBG:function(r,o,l){return r(o,l)},GCVPK:function(r,o,l){return r(o,l)}},i=s[n(181)](ks,Ms,t);return s[n(194)](Ih,i,e)[n(191)](()=>{const r=n;Wn(s.kMqBO(t,s[r(193)]))})[n(195)](r=>{const o=n;console[o(190)](o(180),r)})},async onValue(t){const e=ct,n={mNyOh:function(i,r){return i(r)},LKJWA:function(i,r,o){return i(r,o)},HloJF:function(i,r,o){return i(r,o)}},s=n[e(213)](ks,Ms,t);n[e(206)]($0,s,i=>{const r=e;n.mNyOh(Wn,r(186)+t+r(216)),this[r(196)]=i[r(182)]()})},async removeField(t){const e=ct,n={BCvsj:function(i,r,o){return i(r,o)},cEPbE:function(i,r){return i(r)}};console[e(214)](t);const s=n.BCvsj(ks,Ms,t);n.cEPbE(U0,s)[e(191)](()=>{Wn("Данные "+t+" удалены!")})}}}),Wn=t=>console[ct(214)](ct(192)+t,ct(207)),vr=xi;function mi(){const t=["button","SOgBu","699780eAwlDd","sBvmT","gameChanged"," Морской бой ","506464RGMTaH","KLNMF","SVjkR","23775ULmJmJ","DIWih","xPNCx","405DdYHVO"," Это бот для игр с соперником. ","9224787vHFnqy","32sFKDlN","1428775rhnSDh","doPOT","iTtBq"," Начальная страница "," Крестики нолики ","1706URktPu","FsROD","CoYYQ","OpOue","137KNQWHs","div","31896vipMoT","Выберите игру","cAIHb","6deXMMj","ListGames"];return mi=function(){return t},mi()}function xi(t,e){const n=mi();return xi=function(s,i){return s=s-390,n[s]},xi(t,e)}(function(t,e){const n=xi,s=t();for(;;)try{if(parseInt(n(418))/1*(-parseInt(n(414))/2)+-parseInt(n(402))/3*(-parseInt(n(408))/4)+parseInt(n(409))/5*(-parseInt(n(391))/6)+-parseInt(n(399))/7+-parseInt(n(420))/8*(parseInt(n(405))/9)+-parseInt(n(395))/10+parseInt(n(407))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(mi,177656);const sx=_o({__name:vr(392),emits:[vr(397)],setup(t,{emit:e}){const n=vr,s={SVjkR:function(l){return l()},KLNMF:function(l,c,a,h){return l(c,a,h)},xPNCx:function(l,c){return l(c)},cAIHb:n(412),iTtBq:function(l,c,a,h,p){return l(c,a,h,p)},SOgBu:n(393),OpOue:" Камень ножницы бумага ",DIWih:function(l,c,a,h,p){return l(c,a,h,p)},vUjwx:function(l,c,a,h,p){return l(c,a,h,p)},CoYYQ:n(413),FsROD:n(398),sBvmT:function(l,c,a,h,p){return l(c,a,h,p)},doPOT:n(406)},i=Jo(),r=e;function o(l){const c=n;console.log(l),i.gameId="g"+l,r(c(397))}return(l,c)=>{const a=n;return s[a(401)](de),s[a(400)](ge,a(419),null,[c[3]||(c[3]=s[a(404)](Ie,s[a(390)])),c[4]||(c[4]=s[a(411)](A,"h3",null,a(421),-1)),c[5]||(c[5]=s[a(411)](A,"br",null,null,-1)),A(s.SOgBu,{onClick:c[0]||(c[0]=h=>o(1))},s[a(417)]),c[6]||(c[6]=s.DIWih(A,"br",null,null,-1)),c[7]||(c[7]=s[a(401)](Ie)),c[8]||(c[8]=s.vUjwx(A,"br",null,null,-1)),A(a(393),{onClick:c[1]||(c[1]=h=>o(2))},s[a(416)]),c[9]||(c[9]=s[a(411)](A,"br",null,null,-1)),c[10]||(c[10]=s[a(401)](Ie)),c[11]||(c[11]=s[a(411)](A,"br",null,null,-1)),s[a(400)](A,s[a(394)],{onClick:c[2]||(c[2]=h=>o(3))},s[a(415)]),c[12]||(c[12]=s[a(396)](A,"br",null,null,-1)),c[13]||(c[13]=s[a(403)](A,"br",null,null,-1)),c[14]||(c[14]=s[a(401)](Ie)),c[15]||(c[15]=A("br",null,null,-1)),c[16]||(c[16]=s[a(404)](Ie,s[a(410)]))])}}}),yi=bi;function vi(){const t=["2135656atiigo","1743120rnvGNm","1809290CgdnkB","menuBt","button","5KbTwWv","1212516bbFMsm","NKANa","rUjes","pNcUr","tJsLO","651470IFNPqo","toExit","rKrLC","NMnLO","9oXUcot","mgHTh","iCdHr","SWJWV","MenuButton","Удалить игру","iIDmK","Инфо","JOFMI","714123zGYzpa","2zxylSx","menuBt_bt","panel","AagcN","730833HpQOuv","div","aMfcO","value","zaSuJ"];return vi=function(){return t},vi()}function bi(t,e){const n=vi();return bi=function(s,i){return s=s-499,n[s]},bi(t,e)}(function(t,e){const n=bi,s=t();for(;;)try{if(parseInt(n(525))/1*(parseInt(n(526))/2)+parseInt(n(530))/3+-parseInt(n(502))/4+-parseInt(n(506))/5*(parseInt(n(507))/6)+-parseInt(n(503))/7+parseInt(n(501))/8+-parseInt(n(516))/9*(-parseInt(n(512))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,393502);const ix={class:yi(504)},rx={key:0,class:yi(528)},ox=_o({__name:yi(520),emits:["toExit"],setup(t,{emit:e}){const n=yi,s={AagcN:function(l,c){return l(c)},JOFMI:n(513),rUjes:function(l,c,a,h){return l(c,a,h)},rKrLC:function(l,c,a,h){return l(c,a,h)},iCdHr:n(531),tJsLO:n(505),zaSuJ:n(527),pNcUr:function(l,c,a,h){return l(c,a,h)},NMnLO:function(l,c,a,h){return l(c,a,h)},mgHTh:n(521),NKANa:function(l){return l()},SWJWV:function(l,c,a,h,p){return l(c,a,h,p)},iIDmK:n(523),aMfcO:function(l,c,a){return l(c,a)}},i=e,r=_t();function o(l){const c=n;switch(l){case(l=1):s[c(529)](i,s[c(524)]);break}r[c(499)]=!1}return(l,c)=>{const a=n;return de(),s[a(509)](ge,"div",ix,[s[a(514)](A,s[a(518)],null,[s[a(509)](A,s[a(511)],{class:s[a(500)],onClick:c[0]||(c[0]=h=>r[a(499)]=!r.value)},"❁")]),r[a(499)]?(de(),s[a(510)](ge,a(531),rx,[s[a(515)](A,"a",{onClick:c[1]||(c[1]=h=>o(1))},s[a(517)]),c[2]||(c[2]=s[a(508)](Ie)),c[3]||(c[3]=s[a(519)](A,"br",null,null,-1)),c[4]||(c[4]=s[a(519)](A,"a",null,s[a(522)],-1))])):s[a(532)](Ve,"",!0)])}}}),lx=$a(ox,[["__scopeId","data-v-ff2e1591"]]),Lt=ms;(function(t,e){const n=ms,s=t();for(;;)try{if(parseInt(n(484))/1+-parseInt(n(307))/2+-parseInt(n(410))/3+parseInt(n(473))/4*(parseInt(n(324))/5)+-parseInt(n(462))/6+-parseInt(n(470))/7*(parseInt(n(397))/8)+parseInt(n(436))/9*(parseInt(n(366))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ci,184455);function Ci(){const t=["nakNI","cGtEZ","eiGIu","BgJoB","bsAaH","KvVLn","xYnYx","FLyFW","/games/","4px","awFDK","1188248rDxDrj","vqDAS","MAIfI","CKOmg"," : ","WsCMN","log","center","input","OGQbS","gqSkT","LnLaE","LXeBy","1063143WkEaoR","UoEZa","wqlia"," Привет ","IjjkX","qqUEz","BtCYI","hgpMk"," с игроком ","lkoHm","EqRqP","OQuZP","Eupks","removeField","upinV","* можете поменять ваш Никнейм","HcERH","Нахожусь в списке, жду соперника","gameNames","PSFKU","fAflX","split","KKyDT","red","green-bt","/look/","4032ACVozv","hxnws","OQAkd","ngBLW","olDev","zcxuu","setField","DUhkT","LzsZm"," Вас выбрал игрок: ","red-notice","opIPv","myName","OwSNp","20px","Нет желающих, отменяю ожидание","zrJCv","qQoob","jhSFT","rIhrt","gMQLL","zMbTN","esemG","gXjaB","reload","BiMZd","794580phvKtj","TPsln","MOlvd","ixJqS","PoPqj","GrseL","FkpYi","id2","14PsfMnN","hjuqQ","hlORy","66688tXBzWO"," Зарегистрироваться в поиске ","game","KHybI"," Контекс игры:","pUkWH","qbQnk","DkghT","NAzoF","Список желающих играть:","hxiQM","169842VewDFv","OwyeT","ikZvE","jqskP","Хорошо бы сообщить сопернику, что вы ушли из игры","pkpPx","myId","UdaPW","ohzeb","nJyNn","FArjg","NzuKo","YxfEr","getField","Tuzdr","KDknr","gameId","460436uMUTxF","gGlkF","fukBE","zwJhd","name2","SJuou","OLsPh","includes","uSWOm","vEaXm","forEach","aXBVT","Сменить nickName","UrwRR","stage","oTBoy","OmMzd","5Kskyej","TFACP","/look","lPuNx","now","sWmto","ifJlJ","#ddd","Отказаться"," Выбрал игрока ","accept","Qzdlx","UDcsF","red-bt","then","жду пока не откликнится ","NBgrj","fRsdi","mXAIZ","NfVcm","STLIg","value","name","cEhuo","iFpuO","pJTaY","uqfKD","onClick","qpRdm","HOFlf","sIsIT","/list/","gLMue","cSbuN","dDqkc","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","hbHQr","HluFh","wDdAY","HheSH","CrMKM","uidFF","22590YLHhWY","vIFlE","ubhKh","res","context","zWYTJ","fFnXt","30px","setItem","length","BinderComp","small","AGfRV","UpEvl","MyQuJ","TwDhT","div","Wdmhn","button","HVHIy"];return Ci=function(){return t},Ci()}const cx={key:0},ax={key:1},ux={key:2},hx={key:3},fx={key:0},dx=[Lt(351)],px={key:4},_x={key:0},gx=["onClick"],mx={key:1,class:Lt(446)},xx={key:5},yx={key:6},vx={key:7},bx={style:{color:Lt(433),"font-size":Lt(450)}},Cx={key:8},Ex={style:{"font-size":Lt(373),background:Lt(331)}},Ix=!1;function ms(t,e){const n=Ci();return ms=function(s,i){return s=s-295,n[s]},ms(t,e)}const wx=_o({__name:Lt(376),props:{game:{}},setup(t){const e=Lt,n={gXjaB:"myNickName",vqDAS:e(394),fFnXt:function(f,u){return f+u},cSbuN:"5|2|4|7|1|0|6|3",zcxuu:function(f,u){return f>u},fukBE:function(f,u){return f==u},LXeBy:function(f,u){return f(u)},DUhkT:function(f,u){return f===u},fAflX:function(f){return f()},CrMKM:function(f,u){return f===u},opIPv:">>>> ANALIZ ",TwDhT:function(f){return f()},vIFlE:function(f,u,d){return f(u,d)},hlORy:function(f,u){return f+u},HluFh:e(435),pkpPx:e(369),IjjkX:function(f,u){return f+u},jqskP:function(f,u){return f+u},ohzeb:function(f,u){return f+u},ifJlJ:function(f,u){return f+u},nhreF:function(f,u){return f+u},SJuou:function(f,u){return f+u},hxnws:function(f,u){return f(u)},awFDK:function(f,u){return f+u},xYnYx:e(355),olDev:function(f,u){return f+u},bsAaH:function(f,u){return f+u},FArjg:function(f,u){return f+u},OwyeT:function(f,u){return f+u},lkoHm:function(f,u){return f(u)},NzuKo:function(f,u){return f+u},UvARD:function(f,u){return f+u},Wdmhn:"gameLink",MOlvd:"ВСЕ НАСТРОЙКИ ИГРЫ",AGfRV:function(f){return f()},snjZl:function(f,u,d,v,b,k){return f(u,d,v,b,k)},oTBoy:"button",YxfEr:e(434),KDknr:function(f){return f()},qpRdm:function(f){return f()},EqRqP:function(f,u,d,v,b){return f(u,d,v,b)},HVHIy:function(f,u,d,v){return f(u,d,v)},NAzoF:e(382),hxiQM:"::::::: Связывание :::::::",UoEZa:function(f,u){return f+u},gLMue:function(f,u){return f+u},OwSNp:function(f,u){return f(u)},zMbTN:function(f,u,d,v,b){return f(u,d,v,b)},zrJCv:function(f,u,d){return f(u,d)},qqUEz:function(f,u){return f(u)},zwJhd:function(f,u,d){return f(u,d)},YQLMa:function(f,u){return f===u},NfVcm:function(f,u){return f(u)},NBgrj:function(f){return f()},HheSH:function(f,u,d,v){return f(u,d,v)},uidFF:function(f,u){return f===u},MHIKj:function(f,u){return f(u)},nJyNn:function(f,u,d,v){return f(u,d,v)},gqSkT:function(f,u,d){return f(u,d)},EeGvD:e(413),cGtEZ:function(f,u,d,v){return f(u,d,v)},aXBVT:function(f,u,d,v,b){return f(u,d,v,b)},sWmto:"larger",YZqJs:e(404),gMQLL:e(319),MAIfI:e(446),gGlkF:e(425),CKOmg:function(f,u,d,v,b){return f(u,d,v,b)},lPuNx:function(f,u,d,v,b){return f(u,d,v,b)},KvVLn:function(f,u,d){return f(u,d)},OmMzd:function(f,u,d,v,b){return f(u,d,v,b)},hbHQr:function(f,u,d,v,b){return f(u,d,v,b)},BgJoB:function(f,u,d){return f(u,d)},uqfKD:e(337),dDqkc:e(474),hjuqQ:function(f,u,d,v,b){return f(u,d,v,b)},TPsln:e(377),eoPSB:e(359),PoPqj:function(f,u,d,v,b){return f(u,d,v,b)},dAHyt:function(f,u,d){return f(u,d)},Tuzdr:function(f){return f()},FkpYi:function(f,u,d,v){return f(u,d,v)},DkghT:e(427),KKyDT:e(482),GrseL:function(f,u,d,v,b){return f(u,d,v,b)},cNsGm:function(f){return f()},UdaPW:function(f,u,d,v,b){return f(u,d,v,b)},ixJqS:e(451),HcERH:function(f,u,d,v,b){return f(u,d,v,b)},vEaXm:function(f,u){return f(u)},qbQnk:function(f){return f()},wqlia:function(f,u){return f(u)},UpEvl:e(333),ubhKh:function(f,u,d,v,b){return f(u,d,v,b)},pUkWH:function(f,u,d,v,b){return f(u,d,v,b)},MyQuJ:function(f,u){return f(u)},OLsPh:function(f){return f()},YunMQ:function(f,u){return f(u)},flyGr:e(339),LzsZm:"Нет ответа, отменяю выбор",KHybI:function(f,u){return f===u},HOFlf:function(f,u){return f(u)},eiGIu:function(f,u){return f(u)},REJPO:e(445),hgpMk:function(f,u,d,v,b){return f(u,d,v,b)},Qzdlx:function(f,u){return f(u)},OQAkd:function(f,u,d,v,b){return f(u,d,v,b)},zWYTJ:e(332),cEhuo:function(f,u,d,v){return f(u,d,v)},upinV:function(f,u){return f===u},KpjxD:function(f,u,d,v,b){return f(u,d,v,b)},Eupks:"Играем",sIsIT:function(f,u){return f(u)},vnusa:e(418),UDcsF:function(f,u){return f(u)},BiMZd:function(f,u){return f+u},wDdAY:function(f,u){return f+u},ANpTz:function(f,u,d,v,b){return f(u,d,v,b)},UrwRR:function(f,u){return f(u)},nakNI:function(f){return f()},ikZvE:function(f,u,d,v,b){return f(u,d,v,b)},WsCMN:function(f,u,d,v,b){return f(u,d,v,b)},IogIk:function(f,u){return f(u)},BtCYI:function(f,u,d){return f(u,d)},pJTaY:function(f,u,d,v,b){return f(u,d,v,b)},mXAIZ:function(f){return f()},TFACP:function(f,u){return f(u)},LnLaE:function(f){return f()}},s=n[e(342)](Jo),i=_t(localStorage.getItem(n[e(459)])),r=n[e(325)](_t,[]),o=n[e(408)](_t),l=n.qbQnk(_t),c=_t(""),a=n.wqlia(_t,""),h=function(){const f=e;i[f(345)]&&localStorage[f(374)](n[f(459)],i.value)};function p(){const f=e,u={iFpuO:function(d,v){return d+v},OQuZP:n.vqDAS};i[f(345)]||(i.value=s[f(448)]),s[f(303)](n.fFnXt("/list/",s.myId))[f(338)](d=>{const v=f,b={PSFKU:v(370)};d&&(o[v(345)]={id:d.id,name:d[v(346)]},s[v(321)]=5,s[v(303)](u[v(348)](u[v(421)],d[v(475)]))[v(338)](k=>{const M=v;console[M(403)](b[M(429)],k),c[M(345)]=k}))})}const g=function(f){const u=e,d={esemG:n[u(357)],FLyFW:function(b,k){return n.zcxuu(b,k)},GINne:function(b,k){return n[u(309)](b,k)},ngBLW:function(b,k){return b===k},STLIg:function(b,k){return n[u(409)](b,k)},NlEZE:function(b,k){return n[u(443)](b,k)},OGQbS:function(b){return n[u(430)](b)},LMkNI:function(b,k){return n[u(364)](b,k)}};if(console.log(n[u(447)],f),r[u(345)]=[],n.CrMKM(s[u(321)],0))return!1;s[u(321)]=1;let v=!1;f&&Object.keys(f)[u(317)](b=>{const k=u,M=d[k(458)][k(431)]("|");let se=0;for(;;){switch(M[se++]){case"0":d[k(393)](s[k(321)],2)&&!v&&location[k(460)]();continue;case"1":d.GINne(f[b][k(469)],s[k(296)])&&(v=!0,s.stage=3);continue;case"2":d[k(439)](b,d[k(344)](String,s.myId))&&(o[k(345)]={id:f[b][k(469)],name:f[b][k(311)]});continue;case"3":b&&f[b]&&r.value.push({id:b,name:f[b][k(346)]});continue;case"4":if(d[k(393)](s[k(321)],3))return!1;continue;case"5":f[b][k(469)]&&d.NlEZE(f[b][k(469)],s.myId)&&(o[k(345)]={id:b,name:f[b].name});continue;case"6":f[b][k(334)]&&d[k(406)](Q);continue;case"7":d.LMkNI(b,String(s[k(296)]))&&b&&(v=!0,s[k(321)]!==3&&(s[k(321)]=2),f[b][k(469)]&&(s[k(321)]=4));continue}break}})};n[e(310)](mn,()=>s.myId,f=>f&&setTimeout(p,500));function x(){const f=e;n[f(381)](I),s[f(321)]=1}function I(){const f=e;s.onValue(s[f(306)]+f(326))[f(338)](u=>g(u)),n[f(367)](mn,()=>s.lookField,u=>g(u))}function D(){const f=e;s[f(442)](n[f(472)](n[f(372)](s.gameId,n[f(361)]),s.myId),{name:i.value})}function j(f){const u=e;if(n[u(309)](f.id,s[u(296)]))return l[u(345)]=!0,n[u(367)](setTimeout,()=>l[u(345)]=!1,2e3),!1;s[u(442)](n[u(414)](s[u(306)],n[u(361)])+f.id,{name:f[u(346)],id2:s[u(296)],name2:i.value||s.myName}).then(d=>{const v=u;console[v(403)](n[v(295)],d),o.value={id:f.id,name:f[v(346)]},s.stage=3})}function $(f){const u=e;f&&o[u(345)]&&s[u(442)](n[u(472)](n.jqskP(s[u(306)],"/look/"),o[u(345)].id),{name:o[u(345)][u(346)],id2:s.myId,name2:s.myName,accept:!0}),!f&&s[u(442)](n[u(298)](s[u(306)]+n.HluFh,s[u(296)]),{name:i[u(345)]||s[u(448)]})[u(338)](()=>s[u(321)]=2)}function Z(){const f=e;s[f(442)](n[f(330)](n.nhreF(s[f(306)],n.HluFh),o[f(345)].id),{name:o[f(345)][f(346)]})[f(338)](()=>s.stage=2)}function ee(){const f=e;s[f(423)](n[f(312)](n.ohzeb(s[f(306)],f(435)),s[f(296)]))[f(338)](()=>s[f(321)]=0)}function L(){var d;const f=e;debugger;a[f(345)]=f(488);let u=n[f(437)](String,o.value.id);o[f(345)].id>s.myId?u+=n[f(396)]("::",s[f(296)]):u=n[f(414)](s.myId+"::",u),s[f(423)](n.xYnYx+s.myId),s[f(423)](n[f(312)](n[f(392)],(d=o[f(345)])==null?void 0:d.id)),s.removeField(n[f(440)]("/games/",u)),n.vIFlE(setTimeout,()=>location[f(460)](),3e3)}function Q(){var v,b,k;const f=e;let u=Date[f(328)](),d=n.lkoHm(String,o[f(345)].id);n[f(441)](o[f(345)].id,s[f(296)])?d+=n[f(301)]("::",s[f(296)]):d=n.UvARD(n[f(485)](s[f(296)],"::"),d),console[f(403)](n[f(383)],d),s[f(442)](n[f(440)](n[f(392)],s[f(296)]),{id:(v=o[f(345)])==null?void 0:v.id,name:(b=o[f(345)])==null?void 0:b.name,game:d,date:u}),s[f(442)](n[f(487)](f(355),(k=o[f(345)])==null?void 0:k.id),{id:s[f(296)],name:s[f(448)],game:d,date:u}),s[f(442)](n.ohzeb(n[f(398)],d),{game:n[f(464)],gameId:s[f(306)]}),n[f(367)](setTimeout,()=>{var se;const M=f;s.removeField(n.bsAaH(s[M(306)],n[M(361)])+((se=o[M(345)])==null?void 0:se.id)),s[M(423)](n[M(300)](n[M(485)](s.gameId,n.HluFh),s.myId)),location[M(460)]()},2e3)}return(f,u)=>{var b,k;const d=e,v={fRsdi:function(M){return n[ms(378)](M)},jhSFT:function(M,se,tt,on,fe,K){return n.snjZl(M,se,tt,on,fe,K)},uSWOm:n[d(322)],rIhrt:n[d(302)],qQoob:function(M,se){return n[d(409)](M,se)},ajgnU:function(M){return n[d(305)](M)}};return n[d(352)](de),n.EqRqP(ge,Ge,null,[Ix?(n[d(352)](de),n[d(385)](ge,n.NAzoF,cx,[u[8]||(u[8]=A("hr",null,null,-1)),u[9]||(u[9]=n[d(420)](A,"i",null,n[d(483)],-1)),u[10]||(u[10]=n.EqRqP(A,"br",null,null,-1)),Ie(n[d(411)](n[d(298)](n[d(356)](" ",n[d(419)](Ke,n[d(409)](Pe,s)[d(296)])),d(401)),n[d(449)](Ke,i[d(345)]))+" ",1),u[11]||(u[11]=n[d(457)](A,"br",null,null,-1)),n[d(452)](Ie,n[d(390)](" stage:",n[d(419)](Ke,n[d(415)](Pe,s)[d(321)]))+" ",1),u[12]||(u[12]=n[d(420)](A,"hr",null,null,-1))])):n[d(310)](Ve,"",!0),n.YQLMa(n[d(343)](Pe,s)[d(321)],5)?(n[d(340)](de),n[d(363)](ge,n.NAzoF,ax,[n[d(310)](qe,lx,{onToExit:u[0]||(u[0]=M=>L())})])):Ve("",!0),n[d(365)](n.MHIKj(Pe,s)[d(321)],0)?(de(),n.nJyNn(ge,n[d(481)],ux,[n[d(407)](qe,sx,{onGameChanged:x})])):Ve("",!0),n.uidFF(Pe(s).stage,1)?(de(),ge(n[d(481)],hx,[u[16]||(u[16]=A("p",null,n.EeGvD,-1)),n[d(387)](A,"p",null,[n[d(452)](vf,n.aXBVT(A,d(405),{"onUpdate:modelValue":u[1]||(u[1]=M=>i[d(345)]=M),maxlength:"16",style:{"font-size":n[d(329)],padding:d(395),"text-align":n.YZqJs},onInput:u[2]||(u[2]=M=>h()),placeholder:n[d(456)]},null,544),[[zd,i.value]])]),u[17]||(u[17]=A(n[d(481)],{class:n[d(399)]},n[d(308)],-1)),r[d(345)]&&r[d(345)][d(375)]>1?(de(),n[d(385)](ge,n.NAzoF,fx,[u[13]||(u[13]=n[d(400)](A,"h3",null,d(482),-1)),(de(!0),n[d(327)](ge,Ge,null,n[d(391)](ll,r.value,M=>{const se=d;return v[se(341)](de),v[se(454)](ge,v.uSWOm,{class:v[se(455)],key:M.id,onClick:tt=>j(M)},v.qQoob(Ke,M.name),9,dx)}),128)),u[14]||(u[14]=n[d(323)](A,"br",null,null,-1)),u[15]||(u[15]=n[d(360)](A,"br",null,null,-1))])):n.BgJoB(Ve,"",!0),n[d(385)](A,n[d(322)],{class:n[d(350)],onClick:u[3]||(u[3]=M=>D())},n[d(358)]),u[18]||(u[18]=n[d(360)](A,"br",null,null,-1)),u[19]||(u[19]=n.KDknr(Ie)),u[20]||(u[20]=n[d(471)](A,"br",null,null,-1)),u[21]||(u[21]=n.zMbTN(A,n[d(463)],null,n.eoPSB,-1)),u[22]||(u[22]=n.aXBVT(A,"br",null,null,-1)),u[23]||(u[23]=n[d(466)](A,"br",null,null,-1))])):n.dAHyt(Ve,"",!0),n[d(365)](Pe(s).stage,2)?(n[d(304)](de),n[d(468)](ge,n[d(481)],px,[u[27]||(u[27]=n.lPuNx(A,"p",null,n[d(480)],-1)),r[d(345)][d(375)]?(de(),ge(n[d(481)],_x,[u[24]||(u[24]=n[d(400)](A,"h3",null,n[d(432)],-1)),(de(!0),n[d(467)](ge,Ge,null,n[d(407)](ll,r[d(345)],M=>{const se=d;return v.ajgnU(de),v[se(454)](ge,v[se(315)],{class:v[se(455)],key:M.id,onClick:tt=>j(M)},v[se(453)](Ke,M.name),9,gx)}),128)),u[25]||(u[25]=A("br",null,null,-1)),u[26]||(u[26]=n[d(323)](A,"br",null,null,-1))])):n.BgJoB(Ve,"",!0),l[d(345)]?(n.cNsGm(de),n[d(299)](ge,n.NAzoF,mx,"* нельзя выбирать себя")):Ve("",!0),u[28]||(u[28]=n[d(297)](A,"br",null,null,-1)),u[29]||(u[29]=A("br",null,null,-1)),n[d(385)](A,n[d(322)],{onClick:u[4]||(u[4]=M=>ee())},n[d(465)]),u[30]||(u[30]=A("br",null,null,-1)),u[31]||(u[31]=n[d(426)](A,"br",null,null,-1))])):Ve("",!0),n.DUhkT(n[d(316)](Pe,s).stage,3)?(n[d(479)](de),n[d(299)](ge,n[d(481)],xx,[n.FkpYi(A,"p",null,[u[32]||(u[32]=n[d(412)](Ie,n[d(379)])),u[33]||(u[33]=n.ubhKh(A,"br",null,null,-1)),n[d(478)](A,"b",null,n[d(380)](Ke,(b=o[d(345)])==null?void 0:b[d(346)]),1),u[34]||(u[34]=n[d(313)](Ie)),u[35]||(u[35]=A("br",null,null,-1)),u[36]||(u[36]=n.YunMQ(Ie,n.flyGr))]),n[d(385)](A,d(384),{onClick:u[5]||(u[5]=M=>Z())},n[d(444)])])):Ve("",!0),n[d(476)](n[d(353)](Pe,s)[d(321)],4)&&((k=o.value)!=null&&k.id)?(de(),ge(n[d(481)],yx,[u[37]||(u[37]=n[d(388)](Ie,n.REJPO)),u[38]||(u[38]=n[d(417)](A,"br",null,null,-1)),u[39]||(u[39]=n.PoPqj(A,"br",null,null,-1)),n[d(318)](A,"b",null,n.Qzdlx(Ke,o.value[d(346)]),1),u[40]||(u[40]=n[d(327)](A,"br",null,null,-1)),u[41]||(u[41]=n[d(438)](A,"br",null,null,-1)),A(n[d(322)],{class:d(434),onClick:u[6]||(u[6]=M=>$(!1))},n[d(371)]),n.cEhuo(A,n[d(322)],{class:n[d(302)],onClick:u[7]||(u[7]=M=>$(!0))},"Согласиться")])):n[d(389)](Ve,"",!0),n[d(424)](Pe(s)[d(321)],5)&&o[d(345)]?(n.OLsPh(de),n.HVHIy(ge,n[d(481)],vx,[u[42]||(u[42]=n.KpjxD(A,"h3",null,n[d(422)],-1)),u[43]||(u[43]=n[d(354)](Ie,n.vnusa)),u[44]||(u[44]=A("br",null,null,-1)),A("b",null,n[d(336)](Ke,o[d(345)].name),1),u[45]||(u[45]=A("br",null,null,-1)),u[46]||(u[46]=A("br",null,null,-1)),u[47]||(u[47]=n[d(437)](Ie,d(477))),u[48]||(u[48]=n[d(420)](A,"br",null,null,-1)),n[d(452)](Ie,n[d(461)](n[d(362)](" ",n.eiGIu(Ke,c[d(345)]))," "),1),u[49]||(u[49]=A("br",null,null,-1)),u[50]||(u[50]=n.ANpTz(A,"br",null,null,-1)),n[d(347)](A,n[d(481)],bx,[n[d(400)](A,"b",null,Ke(a.value),1)])])):n[d(452)](Ve,"",!0),n[d(320)](Pe,s)[d(321)]&&[1,2,3,4][d(314)](n.NfVcm(Pe,s)[d(321)])?(n[d(386)](de),n.HheSH(ge,n[d(481)],Cx,[u[51]||(u[51]=n.CKOmg(A,"hr",null,null,-1)),u[52]||(u[52]=n[d(486)](A,"br",null,null,-1)),n[d(402)](A,d(382),Ex,n[d(335)](Ke,n.IogIk(Pe,s)[d(428)][Pe(s)[d(306)]]),1),u[53]||(u[53]=n[d(368)](A,"br",null,null,-1)),u[54]||(u[54]=n[d(471)](A,"br",null,null,-1))])):n[d(416)](Ve,"",!0),u[55]||(u[55]=n.OQAkd(A,"br",null,null,-1)),u[56]||(u[56]=n[d(349)](A,"br",null,null,-1))],64)}}}),Sx={class:"game"},Tx={__name:"RockPaperSScissors",setup(t){return(e,n)=>(de(),ge("div",Sx,[n[0]||(n[0]=A("h1",null,"♕",-1)),n[1]||(n[1]=A("h2",null,null,-1)),A("div",null,[qe(wx,{game:"g1"})])]))}},Nx=$a(Tx,[["__scopeId","data-v-7afa5ccc"]]),Rx={__name:"App",setup(t){const e=Jo();let n=of(Nx);return ha(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(s,i)=>(de(),Da(Mf(Pe(n))))}},Ax=Ei;(function(t,e){const n=Ei,s=t();for(;;)try{if(-parseInt(n(345))/1*(-parseInt(n(350))/2)+parseInt(n(347))/3+-parseInt(n(354))/4+-parseInt(n(349))/5+parseInt(n(353))/6*(-parseInt(n(352))/7)+parseInt(n(348))/8+-parseInt(n(351))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,537130);function Ei(t,e){const n=Ii();return Ei=function(s,i){return s=s-345,n[s]},Ei(t,e)}function Ii(){const t=["700wVWbCa","892593JwdPJd","192507cTImHQ","78UPDpwE","1715332fRtzbG","795cYfqeG","use","2890020Teoxtc","4958504NMJxBw","2193750YQQxxW"];return Ii=function(){return t},Ii()}const Px=Zd(),Tc=Qd(Rx);Tc[Ax(346)](Px),Tc.mount("#app");
