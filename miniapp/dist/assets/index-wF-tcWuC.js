function $s(){const t=["3479692GBhxhY","observe","href","15paAXYW","iZkHT","lWURs","integrity","childList","KpPDR","include","anonymous",'link[rel="modulepreload"]',"tagName","9105687AmLZoF","wwdrx","same-origin","995898hRqCbN","LINK","708626sWdchX","supports","811888WGLcAt","4860823zSogkC","link","VVhqP","3VEgbgV","yfvaD","1hTgqmu","BUYiN","32RVCSXA","credentials","createElement","relList","EsrsN","use-credentials","referrerPolicy","6081660PZsUeB","addedNodes","omit","crossOrigin","modulepreload","jHMDU"];return $s=function(){return t},$s()}function Gs(t,e){const n=$s();return Gs=function(s,i){return s=s-458,n[s]},Gs(t,e)}(function(t,e){const n=Gs,s=t();for(;;)try{if(parseInt(n(460))/1*(-parseInt(n(493))/2)+-parseInt(n(458))/3*(-parseInt(n(475))/4)+-parseInt(n(478))/5*(parseInt(n(491))/6)+parseInt(n(495))/7*(parseInt(n(462))/8)+-parseInt(n(488))/9+parseInt(n(469))/10+parseInt(n(496))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})($s,519913),function(){const e=Gs,n={BUYiN:function(o,l){return o!==l},wwdrx:function(o,l){return o===l},EsrsN:e(473),KpPDR:function(o,l){return o(l)},lWURs:e(467),iZkHT:e(484),VVhqP:function(o,l){return o===l},BqFui:e(471),yfvaD:e(490),jHMDU:e(497)},s=document[e(464)](n[e(474)])[e(465)];if(s&&s[e(494)]&&s.supports(n.EsrsN))return;for(const o of document.querySelectorAll(e(486)))n.KpPDR(r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(461)](c.type,l(482)))for(const a of c[l(470)])n[l(489)](a[l(487)],l(492))&&a.rel===n[l(466)]&&n.KpPDR(r,a)})[e(476)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(481)]&&(c.integrity=o.integrity),o[l(468)]&&(c[l(468)]=o.referrerPolicy),o[l(472)]===n[l(480)]?c[l(463)]=n[l(479)]:n[l(498)](o[l(472)],l(485))?c[l(463)]=n.BqFui:c[l(463)]=n[l(459)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(483)](i,o);fetch(o[l(477)],c)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ro(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},_n=[],ft=()=>{},Ph=()=>!1,Ni=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,lo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dh=Object.prototype.hasOwnProperty,te=(t,e)=>Dh.call(t,e),H=Array.isArray,gn=t=>Ai(t)==="[object Map]",kc=t=>Ai(t)==="[object Set]",V=t=>typeof t=="function",xe=t=>typeof t=="string",Ht=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Mc=t=>(_e(t)||V(t))&&V(t.then)&&V(t.catch),Fc=Object.prototype.toString,Ai=t=>Fc.call(t),Oh=t=>Ai(t).slice(8,-1),Lc=t=>Ai(t)==="[object Object]",co=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gn=ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kh=/-(\w)/g,Qe=Pi(t=>t.replace(kh,(e,n)=>n?n.toUpperCase():"")),Mh=/\B([A-Z])/g,ln=Pi(t=>t.replace(Mh,"-$1").toLowerCase()),Di=Pi(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=Pi(t=>t?`on${Di(t)}`:""),Dt=(t,e)=>!Object.is(t,e),Us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Tr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ll;const Oi=()=>ll||(ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ao(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Wh(s):ao(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(xe(t)||_e(t))return t}const Fh=/;(?![^(]*\))/g,Lh=/:([^]+)/,Bh=/\/\*[^]*?\*\//g;function Wh(t){const e={};return t.replace(Bh,"").split(Fh).forEach(n=>{if(n){const s=n.split(Lh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function mn(t){let e="";if(xe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=mn(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hh=ro(Uh);function Wc(t){return!!t||t===""}const Uc=t=>!!(t&&t.__v_isRef===!0),Ke=t=>xe(t)?t:t==null?"":H(t)||_e(t)&&(t.toString===Fc||!V(t.toString))?Uc(t)?Ke(t.value):JSON.stringify(t,Hc,2):String(t),Hc=(t,e)=>Uc(e)?Hc(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ir(s,r)+" =>"]=i,n),{})}:kc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ir(n))}:Ht(e)?ir(e):_e(e)&&!H(e)&&!Lc(e)?String(e):e,ir=(t,e="")=>{var n;return Ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class Vc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function jc(t){return new Vc(t)}function $c(){return ke}function Vh(t,e=!1){ke&&ke.cleanups.push(t)}let ce;const rr=new WeakSet;class Gc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rr.has(this)&&(rr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cl(this),qc(this);const e=ce,n=nt;ce=this,nt=!0;try{return this.fn()}finally{Yc(this),ce=e,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fo(e);this.deps=this.depsTail=void 0,cl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rr(this)&&this.run()}get dirty(){return Rr(this)}}let zc=0,zn,Kn;function Kc(t,e=!1){if(t.flags|=8,e){t.next=Kn,Kn=t;return}t.next=zn,zn=t}function uo(){zc++}function ho(){if(--zc>0)return;if(Kn){let e=Kn;for(Kn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zn;){let e=zn;for(zn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function qc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),fo(s),jh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Rr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===rs))return;t.globalVersion=rs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Rr(t)){t.flags&=-3;return}const n=ce,s=nt;ce=t,nt=!0;try{qc(t);const i=t.fn(t._value);(e.version===0||Dt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,nt=s,Yc(t),t.flags&=-3}}function fo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)fo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nt=!0;const Jc=[];function Vt(){Jc.push(nt),nt=!1}function jt(){const t=Jc.pop();nt=t===void 0?!0:t}function cl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let rs=0;class $h{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class po{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!nt||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new $h(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Zc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,rs++,this.notify(e)}notify(e){uo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ho()}}}function Zc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Zc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zs=new WeakMap,Zt=Symbol(""),Nr=Symbol(""),os=Symbol("");function Re(t,e,n){if(nt&&ce){let s=zs.get(t);s||zs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new po),i.map=s,i.key=n),i.track()}}function yt(t,e,n,s,i,r){const o=zs.get(t);if(!o){rs++;return}const l=c=>{c&&c.trigger()};if(uo(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&co(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,g)=>{(g==="length"||g===os||!Ht(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(os)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Zt)),gn(t)&&l(o.get(Nr)));break;case"delete":c||(l(o.get(Zt)),gn(t)&&l(o.get(Nr)));break;case"set":gn(t)&&l(o.get(Zt));break}}ho()}function Gh(t,e){const n=zs.get(t);return n&&n.get(e)}function an(t){const e=Z(t);return e===t?e:(Re(e,"iterate",os),qe(t)?e:e.map(Ne))}function ki(t){return Re(t=Z(t),"iterate",os),t}const zh={__proto__:null,[Symbol.iterator](){return or(this,Symbol.iterator,Ne)},concat(...t){return an(this).concat(...t.map(e=>H(e)?an(e):e))},entries(){return or(this,"entries",t=>(t[1]=Ne(t[1]),t))},every(t,e){return gt(this,"every",t,e,void 0,arguments)},filter(t,e){return gt(this,"filter",t,e,n=>n.map(Ne),arguments)},find(t,e){return gt(this,"find",t,e,Ne,arguments)},findIndex(t,e){return gt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gt(this,"findLast",t,e,Ne,arguments)},findLastIndex(t,e){return gt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gt(this,"forEach",t,e,void 0,arguments)},includes(...t){return lr(this,"includes",t)},indexOf(...t){return lr(this,"indexOf",t)},join(t){return an(this).join(t)},lastIndexOf(...t){return lr(this,"lastIndexOf",t)},map(t,e){return gt(this,"map",t,e,void 0,arguments)},pop(){return Fn(this,"pop")},push(...t){return Fn(this,"push",t)},reduce(t,...e){return al(this,"reduce",t,e)},reduceRight(t,...e){return al(this,"reduceRight",t,e)},shift(){return Fn(this,"shift")},some(t,e){return gt(this,"some",t,e,void 0,arguments)},splice(...t){return Fn(this,"splice",t)},toReversed(){return an(this).toReversed()},toSorted(t){return an(this).toSorted(t)},toSpliced(...t){return an(this).toSpliced(...t)},unshift(...t){return Fn(this,"unshift",t)},values(){return or(this,"values",Ne)}};function or(t,e,n){const s=ki(t),i=s[e]();return s!==t&&!qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Kh=Array.prototype;function gt(t,e,n,s,i,r){const o=ki(t),l=o!==t&&!qe(t),c=o[e];if(c!==Kh[e]){const p=c.apply(t,r);return l?Ne(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Ne(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,a,s);return l&&i?i(d):d}function al(t,e,n,s){const i=ki(t);let r=n;return i!==t&&(qe(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ne(l),c,t)}),i[e](r,...s)}function lr(t,e,n){const s=Z(t);Re(s,"iterate",os);const i=s[e](...n);return(i===-1||i===!1)&&mo(n[0])?(n[0]=Z(n[0]),s[e](...n)):i}function Fn(t,e,n=[]){Vt(),uo();const s=Z(t)[e].apply(t,n);return ho(),jt(),s}const qh=ro("__proto__,__v_isRef,__isVue"),Xc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ht));function Yh(t){Ht(t)||(t=String(t));const e=Z(this);return Re(e,"has",t),e.hasOwnProperty(t)}class ea{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?of:ia:r?sa:na).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=zh[n]))return c;if(n==="hasOwnProperty")return Yh}const l=Reflect.get(e,n,me(e)?e:s);return(Ht(n)?Xc.has(n):qh(n))||(i||Re(e,"get",n),r)?l:me(l)?o&&co(n)?l:l.value:_e(l)?i?ra(l):Mi(l):l}}class ta extends ea{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=tn(r);if(!qe(s)&&!tn(s)&&(r=Z(r),s=Z(s)),!H(e)&&me(r)&&!me(s))return c?!1:(r.value=s,!0)}const o=H(e)&&co(n)?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,me(e)?e:i);return e===Z(i)&&(o?Dt(s,r)&&yt(e,"set",n,s):yt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ht(n)||!Xc.has(n))&&Re(e,"has",n),s}ownKeys(e){return Re(e,"iterate",H(e)?"length":Zt),Reflect.ownKeys(e)}}class Qh extends ea{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jh=new ta,Zh=new Qh,Xh=new ta(!0);const Ar=t=>t,Os=t=>Reflect.getPrototypeOf(t);function ef(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=gn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),d=n?Ar:e?Pr:Ne;return!e&&Re(r,"iterate",c?Nr:Zt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function ks(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tf(t,e){const n={get(i){const r=this.__v_raw,o=Z(r),l=Z(i);t||(Dt(i,l)&&Re(o,"get",i),Re(o,"get",l));const{has:c}=Os(o),a=e?Ar:t?Pr:Ne;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Re(Z(i),"iterate",Zt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Z(r),l=Z(i);return t||(Dt(i,l)&&Re(o,"has",i),Re(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Z(l),a=e?Ar:t?Pr:Ne;return!t&&Re(c,"iterate",Zt),l.forEach((d,p)=>i.call(r,a(d),a(p),o))}};return Pe(n,t?{add:ks("add"),set:ks("set"),delete:ks("delete"),clear:ks("clear")}:{add(i){!e&&!qe(i)&&!tn(i)&&(i=Z(i));const r=Z(this);return Os(r).has.call(r,i)||(r.add(i),yt(r,"add",i,i)),this},set(i,r){!e&&!qe(r)&&!tn(r)&&(r=Z(r));const o=Z(this),{has:l,get:c}=Os(o);let a=l.call(o,i);a||(i=Z(i),a=l.call(o,i));const d=c.call(o,i);return o.set(i,r),a?Dt(r,d)&&yt(o,"set",i,r):yt(o,"add",i,r),this},delete(i){const r=Z(this),{has:o,get:l}=Os(r);let c=o.call(r,i);c||(i=Z(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&yt(r,"delete",i,void 0),a},clear(){const i=Z(this),r=i.size!==0,o=i.clear();return r&&yt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ef(i,t,e)}),n}function _o(t,e){const n=tf(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const nf={get:_o(!1,!1)},sf={get:_o(!1,!0)},rf={get:_o(!0,!1)};const na=new WeakMap,sa=new WeakMap,ia=new WeakMap,of=new WeakMap;function lf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(t){return t.__v_skip||!Object.isExtensible(t)?0:lf(Oh(t))}function Mi(t){return tn(t)?t:go(t,!1,Jh,nf,na)}function af(t){return go(t,!1,Xh,sf,sa)}function ra(t){return go(t,!0,Zh,rf,ia)}function go(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=cf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ot(t){return tn(t)?Ot(t.__v_raw):!!(t&&t.__v_isReactive)}function tn(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function mo(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function xo(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Bc(t,"__v_skip",!0),t}const Ne=t=>_e(t)?Mi(t):t,Pr=t=>_e(t)?ra(t):t;function me(t){return t?t.__v_isRef===!0:!1}function Ze(t){return oa(t,!1)}function uf(t){return oa(t,!0)}function oa(t,e){return me(t)?t:new hf(t,e)}class hf{constructor(e,n){this.dep=new po,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Z(e),this._value=n?e:Ne(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||qe(e)||tn(e);e=s?e:Z(e),Dt(e,n)&&(this._rawValue=e,this._value=s?e:Ne(e),this.dep.trigger())}}function Ee(t){return me(t)?t.value:t}const ff={get:(t,e,n)=>e==="__v_raw"?t:Ee(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function la(t){return Ot(t)?t:new Proxy(t,ff)}function df(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=_f(t,n);return e}class pf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gh(Z(this._object),this._key)}}function _f(t,e,n){const s=t[e];return me(s)?s:new pf(t,e,n)}class gf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new po(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Kc(this,!0),!0}get value(){const e=this.dep.track();return Qc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mf(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new gf(s,i,n)}const Ms={},Ks=new WeakMap;let Kt;function xf(t,e=!1,n=Kt){if(n){let s=Ks.get(n);s||Ks.set(n,s=[]),s.push(t)}}function yf(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=F=>i?F:qe(F)||i===!1||i===0?vt(F,1):vt(F);let d,p,g,x,w=!1,O=!1;if(me(t)?(p=()=>t.value,w=qe(t)):Ot(t)?(p=()=>a(t),w=!0):H(t)?(O=!0,w=t.some(F=>Ot(F)||qe(F)),p=()=>t.map(F=>{if(me(F))return F.value;if(Ot(F))return a(F);if(V(F))return c?c(F,2):F()})):V(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Vt();try{g()}finally{jt()}}const F=Kt;Kt=d;try{return c?c(t,3,[x]):t(x)}finally{Kt=F}}:p=ft,e&&i){const F=p,J=i===!0?1/0:i;p=()=>vt(F(),J)}const $=$c(),j=()=>{d.stop(),$&&$.active&&lo($.effects,d)};if(r&&e){const F=e;e=(...J)=>{F(...J),j()}}let Q=O?new Array(t.length).fill(Ms):Ms;const ee=F=>{if(!(!(d.flags&1)||!d.dirty&&!F))if(e){const J=d.run();if(i||w||(O?J.some((Je,ve)=>Dt(Je,Q[ve])):Dt(J,Q))){g&&g();const Je=Kt;Kt=d;try{const ve=[J,Q===Ms?void 0:O&&Q[0]===Ms?[]:Q,x];c?c(e,3,ve):e(...ve),Q=J}finally{Kt=Je}}}else d.run()};return l&&l(ee),d=new Gc(p),d.scheduler=o?()=>o(ee,!1):ee,x=F=>xf(F,!1,d),g=d.onStop=()=>{const F=Ks.get(d);if(F){if(c)c(F,4);else for(const J of F)J();Ks.delete(d)}},e?s?ee(!0):Q=d.run():o?o(ee.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function vt(t,e=1/0,n){if(e<=0||!_e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))vt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)vt(t[s],e,n);else if(kc(t)||gn(t))t.forEach(s=>{vt(s,e,n)});else if(Lc(t)){for(const s in t)vt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cs(t,e,n,s){try{return s?t(...s):t()}catch(i){Fi(i,e,n)}}function dt(t,e,n,s){if(V(t)){const i=Cs(t,e,n,s);return i&&Mc(i)&&i.catch(r=>{Fi(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(dt(t[r],e,n,s));return i}}function Fi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,a)===!1)return}l=l.parent}if(r){Vt(),Cs(r,null,10,[t,c,a]),jt();return}}vf(t,n,i,s,o)}function vf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Me=[];let at=-1;const xn=[];let At=null,fn=0;const ca=Promise.resolve();let qs=null;function aa(t){const e=qs||ca;return t?e.then(this?t.bind(this):t):e}function bf(t){let e=at+1,n=Me.length;for(;e<n;){const s=e+n>>>1,i=Me[s],r=ls(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function yo(t){if(!(t.flags&1)){const e=ls(t),n=Me[Me.length-1];!n||!(t.flags&2)&&e>=ls(n)?Me.push(t):Me.splice(bf(e),0,t),t.flags|=1,ua()}}function ua(){qs||(qs=ca.then(fa))}function Cf(t){H(t)?xn.push(...t):At&&t.id===-1?At.splice(fn+1,0,t):t.flags&1||(xn.push(t),t.flags|=1),ua()}function ul(t,e,n=at+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ha(t){if(xn.length){const e=[...new Set(xn)].sort((n,s)=>ls(n)-ls(s));if(xn.length=0,At){At.push(...e);return}for(At=e,fn=0;fn<At.length;fn++){const n=At[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}At=null,fn=0}}const ls=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fa(t){try{for(at=0;at<Me.length;at++){const e=Me[at];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;at<Me.length;at++){const e=Me[at];e&&(e.flags&=-2)}at=-1,Me.length=0,ha(),qs=null,(Me.length||xn.length)&&fa()}}let Be=null,da=null;function Ys(t){const e=Be;return Be=t,da=t&&t.type.__scopeId||null,e}function Ef(t,e=Be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&bl(-1);const r=Ys(e);let o;try{o=t(...i)}finally{Ys(r),s._d&&bl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function If(t,e){if(Be===null)return t;const n=Hi(Be),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=re]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&vt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Gt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Vt(),dt(c,n,8,[t.el,l,t,e]),jt())}}const wf=Symbol("_vte"),Sf=t=>t.__isTeleport;function vo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Li(t,e){return V(t)?Pe({name:t.name},e,{setup:t}):t}function pa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qs(t,e,n,s,i=!1){if(H(t)){t.forEach((w,O)=>Qs(w,e&&(H(e)?e[O]:e),n,s,i));return}if(qn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Qs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Hi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,d=l.refs===re?l.refs={}:l.refs,p=l.setupState,g=Z(p),x=p===re?()=>!1:w=>te(g,w);if(a!=null&&a!==c&&(xe(a)?(d[a]=null,x(a)&&(p[a]=null)):me(a)&&(a.value=null)),V(c))Cs(c,l,12,[o,d]);else{const w=xe(c),O=me(c);if(w||O){const $=()=>{if(t.f){const j=w?x(c)?p[c]:d[c]:c.value;i?H(j)&&lo(j,r):H(j)?j.includes(r)||j.push(r):w?(d[c]=[r],x(c)&&(p[c]=d[c])):(c.value=[r],t.k&&(d[t.k]=c.value))}else w?(d[c]=o,x(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?($.id=-1,$e($,n)):$()}}}Oi().requestIdleCallback;Oi().cancelIdleCallback;const qn=t=>!!t.type.__asyncLoader,_a=t=>t.type.__isKeepAlive;function Tf(t,e){ga(t,"a",e)}function Rf(t,e){ga(t,"da",e)}function ga(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Bi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)_a(i.parent.vnode)&&Nf(s,e,n,i),i=i.parent}}function Nf(t,e,n,s){const i=Bi(e,t,s,!0);ma(()=>{lo(s[e],i)},n)}function Bi(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vt();const l=Es(n),c=dt(e,n,t,o);return l(),jt(),c});return s?i.unshift(r):i.push(r),r}}const St=t=>(e,n=Te)=>{(!as||t==="sp")&&Bi(t,(...s)=>e(...s),n)},Af=St("bm"),bo=St("m"),Pf=St("bu"),Df=St("u"),Of=St("bum"),ma=St("um"),kf=St("sp"),Mf=St("rtg"),Ff=St("rtc");function Lf(t,e=Te){Bi("ec",t,e)}const Bf="components",xa=Symbol.for("v-ndc");function Wf(t){return xe(t)?Uf(Bf,t,!1)||t:t||xa}function Uf(t,e,n=!0,s=!1){const i=Be||Te;if(i){const r=i.type;{const l=Rd(r,!1);if(l&&(l===e||l===Qe(e)||l===Di(Qe(e))))return r}const o=hl(i[t]||r[t],e)||hl(i.appContext[t],e);return!o&&s?r:o}}function hl(t,e){return t&&(t[e]||t[Qe(e)]||t[Di(Qe(e))])}function fl(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||xe(t)){const l=o&&Ot(t);let c=!1;l&&(c=!qe(t),t=ki(t)),i=new Array(t.length);for(let a=0,d=t.length;a<d;a++)i[a]=e(c?Ne(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const d=l[c];i[c]=e(t[d],d,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Dr=t=>t?Ha(t)?Hi(t):Dr(t.parent):null,Yn=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dr(t.parent),$root:t=>Dr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>va(t),$forceUpdate:t=>t.f||(t.f=()=>{yo(t.update)}),$nextTick:t=>t.n||(t.n=aa.bind(t.proxy)),$watch:t=>ad.bind(t)}),cr=(t,e)=>t!==re&&!t.__isScriptSetup&&te(t,e),Hf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(cr(s,e))return o[e]=1,s[e];if(i!==re&&te(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&te(a,e))return o[e]=3,r[e];if(n!==re&&te(n,e))return o[e]=4,n[e];Or&&(o[e]=0)}}const d=Yn[e];let p,g;if(d)return e==="$attrs"&&Re(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==re&&te(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,te(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return cr(i,e)?(i[e]=n,!0):s!==re&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==re&&te(t,o)||cr(e,o)||(l=r[0])&&te(l,o)||te(s,o)||te(Yn,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Or=!0;function Vf(t){const e=va(t),n=t.proxy,s=t.ctx;Or=!1,e.beforeCreate&&pl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:d,beforeMount:p,mounted:g,beforeUpdate:x,updated:w,activated:O,deactivated:$,beforeDestroy:j,beforeUnmount:Q,destroyed:ee,unmounted:F,render:J,renderTracked:Je,renderTriggered:ve,errorCaptured:h,serverPrefetch:u,expose:f,inheritAttrs:C,components:b,directives:k,filters:W}=e;if(a&&jf(a,s,null),o)for(const G in o){const se=o[G];V(se)&&(s[G]=se.bind(n))}if(i){const G=i.call(n,n);_e(G)&&(t.data=Mi(G))}if(Or=!0,r)for(const G in r){const se=r[G],_t=V(se)?se.bind(n,n):V(se.get)?se.get.bind(n,n):ft,Dn=!V(se)&&V(se.set)?se.set.bind(n):ft,$t=ja({get:_t,set:Dn});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>$t.value,set:it=>$t.value=it})}if(l)for(const G in l)ya(l[G],s,n,G);if(c){const G=V(c)?c.call(n):c;Reflect.ownKeys(G).forEach(se=>{Yf(se,G[se])})}d&&pl(d,t,"c");function fe(G,se){H(se)?se.forEach(_t=>G(_t.bind(n))):se&&G(se.bind(n))}if(fe(Af,p),fe(bo,g),fe(Pf,x),fe(Df,w),fe(Tf,O),fe(Rf,$),fe(Lf,h),fe(Ff,Je),fe(Mf,ve),fe(Of,Q),fe(ma,F),fe(kf,u),H(f))if(f.length){const G=t.exposed||(t.exposed={});f.forEach(se=>{Object.defineProperty(G,se,{get:()=>n[se],set:_t=>n[se]=_t})})}else t.exposed||(t.exposed={});J&&t.render===ft&&(t.render=J),C!=null&&(t.inheritAttrs=C),b&&(t.components=b),k&&(t.directives=k),u&&pa(t)}function jf(t,e,n=ft){H(t)&&(t=kr(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=Qn(i.from||s,i.default,!0):r=Qn(i.from||s):r=Qn(i),me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function pl(t,e,n){dt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ya(t,e,n,s){let i=s.includes(".")?ka(n,s):()=>n[s];if(xe(t)){const r=e[t];V(r)&&en(i,r)}else if(V(t))en(i,t.bind(n));else if(_e(t))if(H(t))t.forEach(r=>ya(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&en(i,r,t)}}function va(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Js(c,a,o,!0)),Js(c,e,o)),_e(e)&&r.set(e,c),c}function Js(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Js(t,r,n,!0),i&&i.forEach(o=>Js(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=$f[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const $f={data:_l,props:gl,emits:gl,methods:$n,computed:$n,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:$n,directives:$n,watch:zf,provide:_l,inject:Gf};function _l(t,e){return e?t?function(){return Pe(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Gf(t,e){return $n(kr(t),kr(e))}function kr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?Pe(Object.create(null),t,e):e}function gl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),dl(t),dl(e??{})):e}function zf(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=De(t[s],e[s]);return n}function ba(){return{app:null,config:{isNativeTag:Ph,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function qf(t,e){return function(s,i=null){V(s)||(s=Pe({},s)),i!=null&&!_e(i)&&(i=null);const r=ba(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Kf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ad,get config(){return r.config},set config(d){},use(d,...p){return o.has(d)||(d&&V(d.install)?(o.add(d),d.install(a,...p)):V(d)&&(o.add(d),d(a,...p))),a},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),a},component(d,p){return p?(r.components[d]=p,a):r.components[d]},directive(d,p){return p?(r.directives[d]=p,a):r.directives[d]},mount(d,p,g){if(!c){const x=a._ceVNode||Ye(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,d,g),c=!0,a._container=d,d.__vue_app__=a,Hi(x.component)}},onUnmount(d){l.push(d)},unmount(){c&&(dt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(d,p){return r.provides[d]=p,a},runWithContext(d){const p=Xt;Xt=a;try{return d()}finally{Xt=p}}};return a}}let Xt=null;function Yf(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function Qn(t,e,n=!1){const s=Te||Be;if(s||Xt){const i=Xt?Xt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}function Qf(){return!!(Te||Be||Xt)}const Ca={},Ea=()=>Object.create(Ca),Ia=t=>Object.getPrototypeOf(t)===Ca;function Jf(t,e,n,s=!1){const i={},r=Ea();t.propsDefaults=Object.create(null),wa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:af(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Zf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Wi(t.emitsOptions,g))continue;const x=e[g];if(c)if(te(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const w=Qe(g);i[w]=Mr(c,l,w,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{wa(t,e,i,r)&&(a=!0);let d;for(const p in l)(!e||!te(e,p)&&((d=ln(p))===p||!te(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=Mr(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!te(e,p))&&(delete r[p],a=!0)}a&&yt(t.attrs,"set","")}function wa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Gn(c))continue;const a=e[c];let d;i&&te(i,d=Qe(c))?!r||!r.includes(d)?n[d]=a:(l||(l={}))[d]=a:Wi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Z(n),a=l||re;for(let d=0;d<r.length;d++){const p=r[d];n[p]=Mr(i,c,p,a[p],t,!te(a,p))}}return o}function Mr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=te(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const d=Es(i);s=a[n]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===ln(n))&&(s=!0))}return s}const Xf=new WeakMap;function Sa(t,e,n=!1){const s=n?Xf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!V(t)){const d=p=>{c=!0;const[g,x]=Sa(p,e,!0);Pe(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return _e(t)&&s.set(t,_n),_n;if(H(r))for(let d=0;d<r.length;d++){const p=Qe(r[d]);ml(p)&&(o[p]=re)}else if(r)for(const d in r){const p=Qe(d);if(ml(p)){const g=r[d],x=o[p]=H(g)||V(g)?{type:g}:Pe({},g),w=x.type;let O=!1,$=!0;if(H(w))for(let j=0;j<w.length;++j){const Q=w[j],ee=V(Q)&&Q.name;if(ee==="Boolean"){O=!0;break}else ee==="String"&&($=!1)}else O=V(w)&&w.name==="Boolean";x[0]=O,x[1]=$,(O||te(x,"default"))&&l.push(p)}}const a=[o,l];return _e(t)&&s.set(t,a),a}function ml(t){return t[0]!=="$"&&!Gn(t)}const Ta=t=>t[0]==="_"||t==="$stable",Co=t=>H(t)?t.map(ut):[ut(t)],ed=(t,e,n)=>{if(e._n)return e;const s=Ef((...i)=>Co(e(...i)),n);return s._c=!1,s},Ra=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ta(i))continue;const r=t[i];if(V(r))e[i]=ed(i,r,s);else if(r!=null){const o=Co(r);e[i]=()=>o}}},Na=(t,e)=>{const n=Co(e);t.slots.default=()=>n},Aa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},td=(t,e,n)=>{const s=t.slots=Ea();if(t.vnode.shapeFlag&32){const i=e._;i?(Aa(s,e,n),n&&Bc(s,"_",i,!0)):Ra(e,s)}else e&&Na(t,e)},nd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Aa(i,e,n):(r=!e.$stable,Ra(e,i)),o=e}else e&&(Na(t,e),o={default:1});if(r)for(const l in i)!Ta(l)&&o[l]==null&&delete i[l]},$e=gd;function sd(t){return id(t)}function id(t,e){const n=Oi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:d,parentNode:p,nextSibling:g,setScopeId:x=ft,insertStaticContent:w}=t,O=(_,m,y,S=null,E=null,I=null,P=void 0,A=null,N=!!m.dynamicChildren)=>{if(_===m)return;_&&!Ln(_,m)&&(S=Ds(_),it(_,E,I,!0),_=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:T,ref:L,shapeFlag:D}=m;switch(T){case Ui:$(_,m,y,S);break;case nn:j(_,m,y,S);break;case ur:_==null&&Q(m,y,S,P);break;case Ge:b(_,m,y,S,E,I,P,A,N);break;default:D&1?J(_,m,y,S,E,I,P,A,N):D&6?k(_,m,y,S,E,I,P,A,N):(D&64||D&128)&&T.process(_,m,y,S,E,I,P,A,N,kn)}L!=null&&E&&Qs(L,_&&_.ref,I,m||_,!m)},$=(_,m,y,S)=>{if(_==null)s(m.el=l(m.children),y,S);else{const E=m.el=_.el;m.children!==_.children&&a(E,m.children)}},j=(_,m,y,S)=>{_==null?s(m.el=c(m.children||""),y,S):m.el=_.el},Q=(_,m,y,S)=>{[_.el,_.anchor]=w(_.children,m,y,S,_.el,_.anchor)},ee=({el:_,anchor:m},y,S)=>{let E;for(;_&&_!==m;)E=g(_),s(_,y,S),_=E;s(m,y,S)},F=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},J=(_,m,y,S,E,I,P,A,N)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),_==null?Je(m,y,S,E,I,P,A,N):u(_,m,E,I,P,A,N)},Je=(_,m,y,S,E,I,P,A)=>{let N,T;const{props:L,shapeFlag:D,transition:M,dirs:U}=_;if(N=_.el=o(_.type,I,L&&L.is,L),D&8?d(N,_.children):D&16&&h(_.children,N,null,S,E,ar(_,I),P,A),U&&Gt(_,null,S,"created"),ve(N,_,_.scopeId,P,S),L){for(const le in L)le!=="value"&&!Gn(le)&&r(N,le,null,L[le],I,S);"value"in L&&r(N,"value",null,L.value,I),(T=L.onVnodeBeforeMount)&&ct(T,S,_)}U&&Gt(_,null,S,"beforeMount");const Y=rd(E,M);Y&&M.beforeEnter(N),s(N,m,y),((T=L&&L.onVnodeMounted)||Y||U)&&$e(()=>{T&&ct(T,S,_),Y&&M.enter(N),U&&Gt(_,null,S,"mounted")},E)},ve=(_,m,y,S,E)=>{if(y&&x(_,y),S)for(let I=0;I<S.length;I++)x(_,S[I]);if(E){let I=E.subTree;if(m===I||Fa(I.type)&&(I.ssContent===m||I.ssFallback===m)){const P=E.vnode;ve(_,P,P.scopeId,P.slotScopeIds,E.parent)}}},h=(_,m,y,S,E,I,P,A,N=0)=>{for(let T=N;T<_.length;T++){const L=_[T]=A?Pt(_[T]):ut(_[T]);O(null,L,m,y,S,E,I,P,A)}},u=(_,m,y,S,E,I,P)=>{const A=m.el=_.el;let{patchFlag:N,dynamicChildren:T,dirs:L}=m;N|=_.patchFlag&16;const D=_.props||re,M=m.props||re;let U;if(y&&zt(y,!1),(U=M.onVnodeBeforeUpdate)&&ct(U,y,m,_),L&&Gt(m,_,y,"beforeUpdate"),y&&zt(y,!0),(D.innerHTML&&M.innerHTML==null||D.textContent&&M.textContent==null)&&d(A,""),T?f(_.dynamicChildren,T,A,y,S,ar(m,E),I):P||se(_,m,A,null,y,S,ar(m,E),I,!1),N>0){if(N&16)C(A,D,M,y,E);else if(N&2&&D.class!==M.class&&r(A,"class",null,M.class,E),N&4&&r(A,"style",D.style,M.style,E),N&8){const Y=m.dynamicProps;for(let le=0;le<Y.length;le++){const ne=Y[le],Ve=D[ne],Le=M[ne];(Le!==Ve||ne==="value")&&r(A,ne,Ve,Le,E,y)}}N&1&&_.children!==m.children&&d(A,m.children)}else!P&&T==null&&C(A,D,M,y,E);((U=M.onVnodeUpdated)||L)&&$e(()=>{U&&ct(U,y,m,_),L&&Gt(m,_,y,"updated")},S)},f=(_,m,y,S,E,I,P)=>{for(let A=0;A<m.length;A++){const N=_[A],T=m[A],L=N.el&&(N.type===Ge||!Ln(N,T)||N.shapeFlag&70)?p(N.el):y;O(N,T,L,null,S,E,I,P,!0)}},C=(_,m,y,S,E)=>{if(m!==y){if(m!==re)for(const I in m)!Gn(I)&&!(I in y)&&r(_,I,m[I],null,E,S);for(const I in y){if(Gn(I))continue;const P=y[I],A=m[I];P!==A&&I!=="value"&&r(_,I,A,P,E,S)}"value"in y&&r(_,"value",m.value,y.value,E)}},b=(_,m,y,S,E,I,P,A,N)=>{const T=m.el=_?_.el:l(""),L=m.anchor=_?_.anchor:l("");let{patchFlag:D,dynamicChildren:M,slotScopeIds:U}=m;U&&(A=A?A.concat(U):U),_==null?(s(T,y,S),s(L,y,S),h(m.children||[],y,L,E,I,P,A,N)):D>0&&D&64&&M&&_.dynamicChildren?(f(_.dynamicChildren,M,y,E,I,P,A),(m.key!=null||E&&m===E.subTree)&&Pa(_,m,!0)):se(_,m,y,L,E,I,P,A,N)},k=(_,m,y,S,E,I,P,A,N)=>{m.slotScopeIds=A,_==null?m.shapeFlag&512?E.ctx.activate(m,y,S,P,N):W(m,y,S,E,I,P,N):he(_,m,N)},W=(_,m,y,S,E,I,P)=>{const A=_.component=Ed(_,S,E);if(_a(_)&&(A.ctx.renderer=kn),Id(A,!1,P),A.asyncDep){if(E&&E.registerDep(A,fe,P),!_.el){const N=A.subTree=Ye(nn);j(null,N,m,y)}}else fe(A,_,m,y,E,I,P)},he=(_,m,y)=>{const S=m.component=_.component;if(pd(_,m,y))if(S.asyncDep&&!S.asyncResolved){G(S,m,y);return}else S.next=m,S.update();else m.el=_.el,S.vnode=m},fe=(_,m,y,S,E,I,P)=>{const A=()=>{if(_.isMounted){let{next:D,bu:M,u:U,parent:Y,vnode:le}=_;{const ot=Da(_);if(ot){D&&(D.el=le.el,G(_,D,P)),ot.asyncDep.then(()=>{_.isUnmounted||A()});return}}let ne=D,Ve;zt(_,!1),D?(D.el=le.el,G(_,D,P)):D=le,M&&Us(M),(Ve=D.props&&D.props.onVnodeBeforeUpdate)&&ct(Ve,Y,D,le),zt(_,!0);const Le=yl(_),rt=_.subTree;_.subTree=Le,O(rt,Le,p(rt.el),Ds(rt),_,E,I),D.el=Le.el,ne===null&&_d(_,Le.el),U&&$e(U,E),(Ve=D.props&&D.props.onVnodeUpdated)&&$e(()=>ct(Ve,Y,D,le),E)}else{let D;const{el:M,props:U}=m,{bm:Y,m:le,parent:ne,root:Ve,type:Le}=_,rt=qn(m);zt(_,!1),Y&&Us(Y),!rt&&(D=U&&U.onVnodeBeforeMount)&&ct(D,ne,m),zt(_,!0);{Ve.ce&&Ve.ce._injectChildStyle(Le);const ot=_.subTree=yl(_);O(null,ot,y,S,_,E,I),m.el=ot.el}if(le&&$e(le,E),!rt&&(D=U&&U.onVnodeMounted)){const ot=m;$e(()=>ct(D,ne,ot),E)}(m.shapeFlag&256||ne&&qn(ne.vnode)&&ne.vnode.shapeFlag&256)&&_.a&&$e(_.a,E),_.isMounted=!0,m=y=S=null}};_.scope.on();const N=_.effect=new Gc(A);_.scope.off();const T=_.update=N.run.bind(N),L=_.job=N.runIfDirty.bind(N);L.i=_,L.id=_.uid,N.scheduler=()=>yo(L),zt(_,!0),T()},G=(_,m,y)=>{m.component=_;const S=_.vnode.props;_.vnode=m,_.next=null,Zf(_,m.props,S,y),nd(_,m.children,y),Vt(),ul(_),jt()},se=(_,m,y,S,E,I,P,A,N=!1)=>{const T=_&&_.children,L=_?_.shapeFlag:0,D=m.children,{patchFlag:M,shapeFlag:U}=m;if(M>0){if(M&128){Dn(T,D,y,S,E,I,P,A,N);return}else if(M&256){_t(T,D,y,S,E,I,P,A,N);return}}U&8?(L&16&&On(T,E,I),D!==T&&d(y,D)):L&16?U&16?Dn(T,D,y,S,E,I,P,A,N):On(T,E,I,!0):(L&8&&d(y,""),U&16&&h(D,y,S,E,I,P,A,N))},_t=(_,m,y,S,E,I,P,A,N)=>{_=_||_n,m=m||_n;const T=_.length,L=m.length,D=Math.min(T,L);let M;for(M=0;M<D;M++){const U=m[M]=N?Pt(m[M]):ut(m[M]);O(_[M],U,y,null,E,I,P,A,N)}T>L?On(_,E,I,!0,!1,D):h(m,y,S,E,I,P,A,N,D)},Dn=(_,m,y,S,E,I,P,A,N)=>{let T=0;const L=m.length;let D=_.length-1,M=L-1;for(;T<=D&&T<=M;){const U=_[T],Y=m[T]=N?Pt(m[T]):ut(m[T]);if(Ln(U,Y))O(U,Y,y,null,E,I,P,A,N);else break;T++}for(;T<=D&&T<=M;){const U=_[D],Y=m[M]=N?Pt(m[M]):ut(m[M]);if(Ln(U,Y))O(U,Y,y,null,E,I,P,A,N);else break;D--,M--}if(T>D){if(T<=M){const U=M+1,Y=U<L?m[U].el:S;for(;T<=M;)O(null,m[T]=N?Pt(m[T]):ut(m[T]),y,Y,E,I,P,A,N),T++}}else if(T>M)for(;T<=D;)it(_[T],E,I,!0),T++;else{const U=T,Y=T,le=new Map;for(T=Y;T<=M;T++){const je=m[T]=N?Pt(m[T]):ut(m[T]);je.key!=null&&le.set(je.key,T)}let ne,Ve=0;const Le=M-Y+1;let rt=!1,ot=0;const Mn=new Array(Le);for(T=0;T<Le;T++)Mn[T]=0;for(T=U;T<=D;T++){const je=_[T];if(Ve>=Le){it(je,E,I,!0);continue}let lt;if(je.key!=null)lt=le.get(je.key);else for(ne=Y;ne<=M;ne++)if(Mn[ne-Y]===0&&Ln(je,m[ne])){lt=ne;break}lt===void 0?it(je,E,I,!0):(Mn[lt-Y]=T+1,lt>=ot?ot=lt:rt=!0,O(je,m[lt],y,null,E,I,P,A,N),Ve++)}const rl=rt?od(Mn):_n;for(ne=rl.length-1,T=Le-1;T>=0;T--){const je=Y+T,lt=m[je],ol=je+1<L?m[je+1].el:S;Mn[T]===0?O(null,lt,y,ol,E,I,P,A,N):rt&&(ne<0||T!==rl[ne]?$t(lt,y,ol,2):ne--)}}},$t=(_,m,y,S,E=null)=>{const{el:I,type:P,transition:A,children:N,shapeFlag:T}=_;if(T&6){$t(_.component.subTree,m,y,S);return}if(T&128){_.suspense.move(m,y,S);return}if(T&64){P.move(_,m,y,kn);return}if(P===Ge){s(I,m,y);for(let D=0;D<N.length;D++)$t(N[D],m,y,S);s(_.anchor,m,y);return}if(P===ur){ee(_,m,y);return}if(S!==2&&T&1&&A)if(S===0)A.beforeEnter(I),s(I,m,y),$e(()=>A.enter(I),E);else{const{leave:D,delayLeave:M,afterLeave:U}=A,Y=()=>s(I,m,y),le=()=>{D(I,()=>{Y(),U&&U()})};M?M(I,Y,le):le()}else s(I,m,y)},it=(_,m,y,S=!1,E=!1)=>{const{type:I,props:P,ref:A,children:N,dynamicChildren:T,shapeFlag:L,patchFlag:D,dirs:M,cacheIndex:U}=_;if(D===-2&&(E=!1),A!=null&&Qs(A,null,y,_,!0),U!=null&&(m.renderCache[U]=void 0),L&256){m.ctx.deactivate(_);return}const Y=L&1&&M,le=!qn(_);let ne;if(le&&(ne=P&&P.onVnodeBeforeUnmount)&&ct(ne,m,_),L&6)Ah(_.component,y,S);else{if(L&128){_.suspense.unmount(y,S);return}Y&&Gt(_,null,m,"beforeUnmount"),L&64?_.type.remove(_,m,y,kn,S):T&&!T.hasOnce&&(I!==Ge||D>0&&D&64)?On(T,m,y,!1,!0):(I===Ge&&D&384||!E&&L&16)&&On(N,m,y),S&&sl(_)}(le&&(ne=P&&P.onVnodeUnmounted)||Y)&&$e(()=>{ne&&ct(ne,m,_),Y&&Gt(_,null,m,"unmounted")},y)},sl=_=>{const{type:m,el:y,anchor:S,transition:E}=_;if(m===Ge){Nh(y,S);return}if(m===ur){F(_);return}const I=()=>{i(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(_.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:A}=E,N=()=>P(y,I);A?A(_.el,I,N):N()}else I()},Nh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Ah=(_,m,y)=>{const{bum:S,scope:E,job:I,subTree:P,um:A,m:N,a:T}=_;xl(N),xl(T),S&&Us(S),E.stop(),I&&(I.flags|=8,it(P,_,m,y)),A&&$e(A,m),$e(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},On=(_,m,y,S=!1,E=!1,I=0)=>{for(let P=I;P<_.length;P++)it(_[P],m,y,S,E)},Ds=_=>{if(_.shapeFlag&6)return Ds(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[wf];return y?g(y):m};let nr=!1;const il=(_,m,y)=>{_==null?m._vnode&&it(m._vnode,null,null,!0):O(m._vnode||null,_,m,null,null,null,y),m._vnode=_,nr||(nr=!0,ul(),ha(),nr=!1)},kn={p:O,um:it,m:$t,r:sl,mt:W,mc:h,pc:se,pbc:f,n:Ds,o:t};return{render:il,hydrate:void 0,createApp:qf(il)}}function ar({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pa(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Pt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Pa(o,l)),l.type===Ui&&(l.el=o.el)}}function od(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Da(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Da(e)}function xl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ld=Symbol.for("v-scx"),cd=()=>Qn(ld);function en(t,e,n){return Oa(t,e,n)}function Oa(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,l=Pe({},n),c=e&&s||!e&&r!=="post";let a;if(as){if(r==="sync"){const x=cd();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=ft,x.resume=ft,x.pause=ft,x}}const d=Te;l.call=(x,w,O)=>dt(x,d,w,O);let p=!1;r==="post"?l.scheduler=x=>{$e(x,d&&d.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(x,w)=>{w?x():yo(x)}),l.augmentJob=x=>{e&&(x.flags|=4),p&&(x.flags|=2,d&&(x.id=d.uid,x.i=d))};const g=yf(t,e,l);return as&&(a?a.push(g):c&&g()),g}function ad(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?ka(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=Es(this),l=Oa(i,r.bind(s),n);return o(),l}function ka(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ud=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qe(e)}Modifiers`]||t[`${ln(e)}Modifiers`];function hd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&ud(s,e.slice(7));o&&(o.trim&&(i=n.map(d=>xe(d)?d.trim():d)),o.number&&(i=n.map(Tr)));let l,c=s[l=sr(e)]||s[l=sr(Qe(e))];!c&&r&&(c=s[l=sr(ln(e))]),c&&dt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,dt(a,t,6,i)}}function Ma(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const c=a=>{const d=Ma(a,e,!0);d&&(l=!0,Pe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(_e(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Pe(o,r),_e(t)&&s.set(t,o),o)}function Wi(t,e){return!t||!Ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,ln(e))||te(t,e))}function yl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:d,props:p,data:g,setupState:x,ctx:w,inheritAttrs:O}=t,$=Ys(t);let j,Q;try{if(n.shapeFlag&4){const F=i||s,J=F;j=ut(a.call(J,F,d,p,x,g,w)),Q=l}else{const F=e;j=ut(F.length>1?F(p,{attrs:l,slots:o,emit:c}):F(p,null)),Q=e.props?l:fd(l)}}catch(F){Jn.length=0,Fi(F,t,1),j=Ye(nn)}let ee=j;if(Q&&O!==!1){const F=Object.keys(Q),{shapeFlag:J}=ee;F.length&&J&7&&(r&&F.some(oo)&&(Q=dd(Q,r)),ee=Cn(ee,Q,!1,!0))}return n.dirs&&(ee=Cn(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&vo(ee,n.transition),j=ee,Ys($),j}const fd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ni(n))&&((e||(e={}))[n]=t[n]);return e},dd=(t,e)=>{const n={};for(const s in t)(!oo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function pd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?vl(s,o,a):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==s[g]&&!Wi(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?vl(s,o,a):!0:!!o;return!1}function vl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Wi(n,r))return!0}return!1}function _d({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fa=t=>t.__isSuspense;function gd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Cf(t)}const Ge=Symbol.for("v-fgt"),Ui=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),ur=Symbol.for("v-stc"),Jn=[];let ze=null;function ie(t=!1){Jn.push(ze=t?null:[])}function md(){Jn.pop(),ze=Jn[Jn.length-1]||null}let cs=1;function bl(t,e=!1){cs+=t,t<0&&ze&&e&&(ze.hasOnce=!0)}function La(t){return t.dynamicChildren=cs>0?ze||_n:null,md(),cs>0&&ze&&ze.push(t),t}function de(t,e,n,s,i,r){return La(v(t,e,n,s,i,r,!0))}function Ba(t,e,n,s,i){return La(Ye(t,e,n,s,i,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const Ua=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||me(t)||V(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ua(e),ref:e&&Hs(e),scopeId:da,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Be};return l?(Eo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),cs>0&&!o&&ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ze.push(c),c}const Ye=xd;function xd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===xa)&&(t=nn),Wa(t)){const l=Cn(t,e,!0);return n&&Eo(l,n),cs>0&&!r&&ze&&(l.shapeFlag&6?ze[ze.indexOf(t)]=l:ze.push(l)),l.patchFlag=-2,l}if(Nd(t)&&(t=t.__vccOpts),e){e=yd(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=mn(l)),_e(c)&&(mo(c)&&!H(c)&&(c=Pe({},c)),e.style=ao(c))}const o=xe(t)?1:Fa(t)?128:Sf(t)?64:_e(t)?4:V(t)?2:0;return v(t,e,n,s,i,o,r,!0)}function yd(t){return t?mo(t)||Ia(t)?Pe({},t):t:null}function Cn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?vd(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ua(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Hs(e)):[r,Hs(e)]:Hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&vo(d,c.clone(d)),d}function ye(t=" ",e=0){return Ye(Ui,null,t,e)}function Oe(t="",e=!1){return e?(ie(),Ba(nn,null,t)):Ye(nn,null,t)}function ut(t){return t==null||typeof t=="boolean"?Ye(nn):H(t)?Ye(Ge,null,t.slice()):Wa(t)?Pt(t):Ye(Ui,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function Eo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Eo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ia(e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function vd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=mn([e.class,s.class]));else if(i==="style")e.style=ao([e.style,s.style]);else if(Ni(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){dt(t,e,7,[n,s])}const bd=ba();let Cd=0;function Ed(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||bd,r={uid:Cd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(s,i),emitsOptions:Ma(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hd.bind(null,r),t.ce&&t.ce(r),r}let Te=null,Zs,Fr;{const t=Oi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Zs=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),Fr=e("__VUE_SSR_SETTERS__",n=>as=n)}const Es=t=>{const e=Te;return Zs(t),t.scope.on(),()=>{t.scope.off(),Zs(e)}},Cl=()=>{Te&&Te.scope.off(),Zs(null)};function Ha(t){return t.vnode.shapeFlag&4}let as=!1;function Id(t,e=!1,n=!1){e&&Fr(e);const{props:s,children:i}=t.vnode,r=Ha(t);Jf(t,s,r,e),td(t,i,n);const o=r?wd(t,e):void 0;return e&&Fr(!1),o}function wd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Hf);const{setup:s}=n;if(s){Vt();const i=t.setupContext=s.length>1?Td(t):null,r=Es(t),o=Cs(s,t,0,[t.props,i]),l=Mc(o);if(jt(),r(),(l||t.sp)&&!qn(t)&&pa(t),l){if(o.then(Cl,Cl),e)return o.then(c=>{El(t,c)}).catch(c=>{Fi(c,t,0)});t.asyncDep=o}else El(t,o)}else Va(t)}function El(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=la(e)),Va(t)}function Va(t,e,n){const s=t.type;t.render||(t.render=s.render||ft);{const i=Es(t);Vt();try{Vf(t)}finally{jt(),i()}}}const Sd={get(t,e){return Re(t,"get",""),t[e]}};function Td(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sd),slots:t.slots,emit:t.emit,expose:e}}function Hi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(la(xo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yn)return Yn[n](t)},has(e,n){return n in e||n in Yn}})):t.proxy}function Rd(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Nd(t){return V(t)&&"__vccOpts"in t}const ja=(t,e)=>mf(t,e,as),Ad="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lr;const Il=typeof window<"u"&&window.trustedTypes;if(Il)try{Lr=Il.createPolicy("vue",{createHTML:t=>t})}catch{}const $a=Lr?t=>Lr.createHTML(t):t=>t,Pd="http://www.w3.org/2000/svg",Dd="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,wl=mt&&mt.createElement("template"),Od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?mt.createElementNS(Pd,t):e==="mathml"?mt.createElementNS(Dd,t):n?mt.createElement(t,{is:n}):mt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>mt.createTextNode(t),createComment:t=>mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wl.innerHTML=$a(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=wl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kd=Symbol("_vtc");function Md(t,e,n){const s=t[kd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Sl=Symbol("_vod"),Fd=Symbol("_vsh"),Ld=Symbol(""),Bd=/(^|;)\s*display\s*:/;function Wd(t,e,n){const s=t.style,i=xe(n);let r=!1;if(n&&!i){if(e)if(xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Vs(s,l,"")}else for(const o in e)n[o]==null&&Vs(s,o,"");for(const o in n)o==="display"&&(r=!0),Vs(s,o,n[o])}else if(i){if(e!==n){const o=s[Ld];o&&(n+=";"+o),s.cssText=n,r=Bd.test(n)}}else e&&t.removeAttribute("style");Sl in t&&(t[Sl]=r?s.display:"",t[Fd]&&(s.display="none"))}const Tl=/\s*!important$/;function Vs(t,e,n){if(H(n))n.forEach(s=>Vs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ud(t,e);Tl.test(n)?t.setProperty(ln(s),n.replace(Tl,""),"important"):t[s]=n}}const Rl=["Webkit","Moz","ms"],hr={};function Ud(t,e){const n=hr[e];if(n)return n;let s=Qe(e);if(s!=="filter"&&s in t)return hr[e]=s;s=Di(s);for(let i=0;i<Rl.length;i++){const r=Rl[i]+s;if(r in t)return hr[e]=r}return e}const Nl="http://www.w3.org/1999/xlink";function Al(t,e,n,s,i,r=Hh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nl,e.slice(6,e.length)):t.setAttributeNS(Nl,e,n):n==null||r&&!Wc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ht(n)?String(n):n)}function Pl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$a(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function dn(t,e,n,s){t.addEventListener(e,n,s)}function Hd(t,e,n,s){t.removeEventListener(e,n,s)}const Dl=Symbol("_vei");function Vd(t,e,n,s,i=null){const r=t[Dl]||(t[Dl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=jd(e);if(s){const a=r[e]=zd(s,i);dn(t,l,a,c)}else o&&(Hd(t,l,o,c),r[e]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function jd(t){let e;if(Ol.test(t)){e={};let s;for(;s=t.match(Ol);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let fr=0;const $d=Promise.resolve(),Gd=()=>fr||($d.then(()=>fr=0),fr=Date.now());function zd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(Kd(s,n.value),e,5,[s])};return n.value=t,n.attached=Gd(),n}function Kd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Md(t,s,o):e==="style"?Wd(t,n,s):Ni(e)?oo(e)||Vd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yd(t,e,s,o))?(Pl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Al(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(s))?Pl(t,Qe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Al(t,e,s,o))};function Yd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&kl(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return kl(e)&&xe(n)?!1:e in t}const Ml=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Us(e,n):e};function Qd(t){t.target.composing=!0}function Fl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dr=Symbol("_assign"),Jd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[dr]=Ml(i);const r=s||i.props&&i.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Tr(l)),t[dr](l)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Qd),dn(t,"compositionend",Fl),dn(t,"change",Fl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[dr]=Ml(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Tr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Zd=Pe({patchProp:qd},Od);let Ll;function Xd(){return Ll||(Ll=sd(Zd))}const ep=(...t)=>{const e=Xd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=np(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,tp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function np(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ga;const Vi=t=>Ga=t,za=Symbol();function Br(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zn||(Zn={}));function sp(){const t=jc(!0),e=t.run(()=>Ze({}));let n=[],s=[];const i=xo({install(r){Vi(i),i._a=r,r.provide(za,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ka=()=>{};function Bl(t,e,n,s=Ka){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&$c()&&Vh(i),i}function un(t,...e){t.slice().forEach(n=>{n(...e)})}const ip=t=>t(),Wl=Symbol(),pr=Symbol();function Wr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Br(i)&&Br(s)&&t.hasOwnProperty(n)&&!me(s)&&!Ot(s)?t[n]=Wr(i,s):t[n]=s}return t}const rp=Symbol();function op(t){return!Br(t)||!t.hasOwnProperty(rp)}const{assign:Nt}=Object;function lp(t){return!!(me(t)&&t.effect)}function cp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const d=df(n.state.value[t]);return Nt(d,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=xo(ja(()=>{Vi(n);const x=n._s.get(t);return o[g].call(x,x)})),p),{}))}return c=qa(t,a,e,n,s,!0),c}function qa(t,e,n={},s,i,r){let o;const l=Nt({actions:{}},n),c={deep:!0};let a,d,p=[],g=[],x;const w=s.state.value[t];!r&&!w&&(s.state.value[t]={}),Ze({});let O;function $(h){let u;a=d=!1,typeof h=="function"?(h(s.state.value[t]),u={type:Zn.patchFunction,storeId:t,events:x}):(Wr(s.state.value[t],h),u={type:Zn.patchObject,payload:h,storeId:t,events:x});const f=O=Symbol();aa().then(()=>{O===f&&(a=!0)}),d=!0,un(p,u,s.state.value[t])}const j=r?function(){const{state:u}=n,f=u?u():{};this.$patch(C=>{Nt(C,f)})}:Ka;function Q(){o.stop(),p=[],g=[],s._s.delete(t)}const ee=(h,u="")=>{if(Wl in h)return h[pr]=u,h;const f=function(){Vi(s);const C=Array.from(arguments),b=[],k=[];function W(G){b.push(G)}function he(G){k.push(G)}un(g,{args:C,name:f[pr],store:J,after:W,onError:he});let fe;try{fe=h.apply(this&&this.$id===t?this:J,C)}catch(G){throw un(k,G),G}return fe instanceof Promise?fe.then(G=>(un(b,G),G)).catch(G=>(un(k,G),Promise.reject(G))):(un(b,fe),fe)};return f[Wl]=!0,f[pr]=u,f},F={_p:s,$id:t,$onAction:Bl.bind(null,g),$patch:$,$reset:j,$subscribe(h,u={}){const f=Bl(p,h,u.detached,()=>C()),C=o.run(()=>en(()=>s.state.value[t],b=>{(u.flush==="sync"?d:a)&&h({storeId:t,type:Zn.direct,events:x},b)},Nt({},c,u)));return f},$dispose:Q},J=Mi(F);s._s.set(t,J);const ve=(s._a&&s._a.runWithContext||ip)(()=>s._e.run(()=>(o=jc()).run(()=>e({action:ee}))));for(const h in ve){const u=ve[h];if(me(u)&&!lp(u)||Ot(u))r||(w&&op(u)&&(me(u)?u.value=w[h]:Wr(u,w[h])),s.state.value[t][h]=u);else if(typeof u=="function"){const f=ee(u,h);ve[h]=f,l.actions[h]=u}}return Nt(J,ve),Nt(Z(J),ve),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:h=>{$(u=>{Nt(u,h)})}}),s._p.forEach(h=>{Nt(J,o.run(()=>h({store:J,app:s._a,pinia:s,options:l})))}),w&&r&&n.hydrate&&n.hydrate(J.$state,w),a=!0,d=!0,J}/*! #__NO_SIDE_EFFECTS__ */function ap(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Qf();return o=o||(c?Qn(za,null):null),o&&Vi(o),o=Ga,o._s.has(t)||(i?qa(t,e,s,o):cp(t,s,o)),o._s.get(t)}return r.$id=t,r}const up=()=>{};var Ul={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw Tn(e)},Tn=function(t){return new Error("Firebase Database ("+Ya.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,d=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[d],n[p],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new fp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),p!==64){const w=a<<6&192|p;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ja=function(t){const e=Qa(t);return Io.encodeByteArray(e,!0)},Xs=function(t){return Ja(t).replace(/\./g,"")},Ur=function(t){try{return Io.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){return Za(void 0,t)}function Za(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pp(n)||(t[n]=Za(t[n],e[n]));return t}function pp(t){return t!=="__proto__"}/**
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
 */function _p(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gp=()=>_p().__FIREBASE_DEFAULTS__,mp=()=>{if(typeof process>"u"||typeof Ul>"u")return;const t=Ul.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ur(t[1]);return e&&JSON.parse(e)},Xa=()=>{try{return up()||gp()||mp()||xp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yp=t=>{var e,n;return(n=(e=Xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vp=t=>{const e=yp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},eu=()=>{var t;return(t=Xa())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function bp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xs(JSON.stringify(n)),Xs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cp())}function Ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ip(){return Ya.NODE_ADMIN===!0}function wp(){try{return typeof indexedDB=="object"}catch{return!1}}function Sp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="FirebaseError";class Is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tp,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nu.prototype.create)}}class nu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Rp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Is(i,l,s)}}function Rp(t,e){return t.replace(Np,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Np=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=us(Ur(r[0])||""),n=us(Ur(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ap=function(t){const e=su(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Pp=function(t){const e=su(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function En(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vl(r)&&Vl(o)){if(!ti(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,d;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),d=1518500249):(a=r^o^l,d=1859775393):p<60?(a=r&o|l&(r|o),d=2400959708):(a=r^o^l,d=3395469782);const g=(i<<5|i>>>27)+a+c+d+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$i=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rn(t){return t&&t._delegate?t._delegate:t}class hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Mp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ji;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lp(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fp(t){return t===qt?void 0:t}function Lp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Wp={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Up=ae.INFO,Hp={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Vp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Hp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class iu{constructor(e){this.name=e,this._logLevel=Up,this._logHandler=Vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const jp=(t,e)=>e.some(n=>t instanceof n);let jl,$l;function $p(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gp(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ru=new WeakMap,Hr=new WeakMap,ou=new WeakMap,_r=new WeakMap,So=new WeakMap;function zp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(kt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ru.set(n,t)}).catch(()=>{}),So.set(e,t),e}function Kp(t){if(Hr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Hr.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ou.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qp(t){Vr=t(Vr)}function Yp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gr(this),e,...n);return ou.set(s,e.sort?e.sort():[e]),kt(s)}:Gp().includes(t)?function(...e){return t.apply(gr(this),e),kt(ru.get(this))}:function(...e){return kt(t.apply(gr(this),e))}}function Qp(t){return typeof t=="function"?Yp(t):(t instanceof IDBTransaction&&Kp(t),jp(t,$p())?new Proxy(t,Vr):t)}function kt(t){if(t instanceof IDBRequest)return zp(t);if(_r.has(t))return _r.get(t);const e=Qp(t);return e!==t&&(_r.set(t,e),So.set(e,t)),e}const gr=t=>So.get(t);function Jp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=kt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Zp=["get","getKey","getAll","getAllKeys","count"],Xp=["put","add","delete","clear"],mr=new Map;function Gl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mr.get(e))return mr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Xp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Zp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return mr.set(e,r),r}qp(t=>({...t,get:(e,n,s)=>Gl(e,n)||t.get(e,n,s),has:(e,n)=>!!Gl(e,n)||t.has(e,n)}));/**
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
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function t_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",zl="0.11.2";/**
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
 */const Et=new iu("@firebase/app"),n_="@firebase/app-compat",s_="@firebase/analytics-compat",i_="@firebase/analytics",r_="@firebase/app-check-compat",o_="@firebase/app-check",l_="@firebase/auth",c_="@firebase/auth-compat",a_="@firebase/database",u_="@firebase/data-connect",h_="@firebase/database-compat",f_="@firebase/functions",d_="@firebase/functions-compat",p_="@firebase/installations",__="@firebase/installations-compat",g_="@firebase/messaging",m_="@firebase/messaging-compat",x_="@firebase/performance",y_="@firebase/performance-compat",v_="@firebase/remote-config",b_="@firebase/remote-config-compat",C_="@firebase/storage",E_="@firebase/storage-compat",I_="@firebase/firestore",w_="@firebase/vertexai",S_="@firebase/firestore-compat",T_="firebase",R_="11.4.0";/**
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
 */const $r="[DEFAULT]",N_={[jr]:"fire-core",[n_]:"fire-core-compat",[i_]:"fire-analytics",[s_]:"fire-analytics-compat",[o_]:"fire-app-check",[r_]:"fire-app-check-compat",[l_]:"fire-auth",[c_]:"fire-auth-compat",[a_]:"fire-rtdb",[u_]:"fire-data-connect",[h_]:"fire-rtdb-compat",[f_]:"fire-fn",[d_]:"fire-fn-compat",[p_]:"fire-iid",[__]:"fire-iid-compat",[g_]:"fire-fcm",[m_]:"fire-fcm-compat",[x_]:"fire-perf",[y_]:"fire-perf-compat",[v_]:"fire-rc",[b_]:"fire-rc-compat",[C_]:"fire-gcs",[E_]:"fire-gcs-compat",[I_]:"fire-fst",[S_]:"fire-fst-compat",[w_]:"fire-vertex","fire-js":"fire-js",[T_]:"fire-js-all"};/**
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
 */const ni=new Map,A_=new Map,Gr=new Map;function Kl(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(Gr.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Gr.set(e,t);for(const n of ni.values())Kl(n,t);for(const n of A_.values())Kl(n,t);return!0}function P_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function D_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const O_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new nu("app","Firebase",O_);/**
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
 */class k_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const M_=R_;function lu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$r,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=eu()),!n)throw Mt.create("no-options");const r=ni.get(i);if(r){if(ti(n,r.options)&&ti(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new Bp(i);for(const c of Gr.values())o.addComponent(c);const l=new k_(n,s,o);return ni.set(i,l),l}function F_(t=$r){const e=ni.get(t);if(!e&&t===$r&&eu())return lu();if(!e)throw Mt.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=N_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}si(new hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const L_="firebase-heartbeat-database",B_=1,fs="firebase-heartbeat-store";let xr=null;function cu(){return xr||(xr=Jp(L_,B_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),xr}async function W_(t){try{const n=(await cu()).transaction(fs),s=await n.objectStore(fs).get(au(t));return await n.done,s}catch(e){if(e instanceof Is)Et.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(n.message)}}}async function ql(t,e){try{const s=(await cu()).transaction(fs,"readwrite");await s.objectStore(fs).put(e,au(t)),await s.done}catch(n){if(n instanceof Is)Et.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(s.message)}}}function au(t){return`${t.name}!${t.options.appId}`}/**
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
 */const U_=1024,H_=30;class V_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>H_){const o=G_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Et.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yl(),{heartbeatsToSend:s,unsentEntries:i}=j_(this._heartbeatsCache.heartbeats),r=Xs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Et.warn(n),""}}}function Yl(){return new Date().toISOString().substring(0,10)}function j_(t,e=U_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ql(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ql(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wp()?Sp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await W_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ql(t){return Xs(JSON.stringify({version:2,heartbeats:t})).length}function G_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function z_(t){si(new hs("platform-logger",e=>new e_(e),"PRIVATE")),si(new hs("heartbeat",e=>new V_(e),"PRIVATE")),yn(jr,zl,t),yn(jr,zl,"esm2017"),yn("fire-js","")}z_("");var K_="firebase",q_="11.4.0";/**
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
 */yn(K_,q_,"app");var Jl={};const Zl="@firebase/database",Xl="1.0.13";/**
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
 */let uu="";function Y_(t){uu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:us(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Q_(e)}}catch{}return new J_},Qt=hu("localStorage"),Z_=hu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new iu("@firebase/database"),X_=function(){let t=1;return function(){return t++}}(),fu=function(t){const e=kp(t),n=new Op;n.update(e);const s=n.digest();return Io.encodeByteArray(s)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ws.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let Xn=null,ec=!0;const eg=function(t,e){R(!0,"Can't turn on custom loggers persistently."),vn.logLevel=ae.VERBOSE,Xn=vn.log.bind(vn)},Ae=function(...t){if(ec===!0&&(ec=!1,Xn===null&&Z_.get("logging_enabled")===!0&&eg()),Xn){const e=ws.apply(null,t);Xn(e)}},Ss=function(t){return function(...e){Ae(t,...e)}},zr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);vn.error(e)},It=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw vn.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+ws(...t);vn.warn(e)},tg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},du=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ng=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},In="[MIN_NAME]",sn="[MAX_NAME]",Nn=function(t,e){if(t===e)return 0;if(t===In||e===sn)return-1;if(e===In||t===sn)return 1;{const n=tc(t),s=tc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},sg=function(t,e){return t===e?0:t<e?-1:1},Bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},To=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=To(t[e[s]]);return n+="}",n},pu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _u=function(t){R(!du(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const d=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(d.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},ig=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function og(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const lg=new RegExp("^-?(0*)\\d{1,10}$"),cg=-2147483648,ag=2147483647,tc=function(t){if(lg.test(t)){const e=Number(t);if(e>=cg&&e<=ag)return e}return null},An=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},ug=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,D_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class js{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}js.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="5",gu="v",mu="s",xu="r",yu="f",vu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bu="ls",Cu="p",Kr="ac",Eu="websocket",Iu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Su(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let s;if(e===Eu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Iu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dg(t)&&(n.ns=t.namespace);const i=[];return He(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.counters_={}}incrementCounter(e,n=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={},vr={};function No(t){const e=t.toString();return yr[e]||(yr[e]=new pg),yr[e]}function _g(t,e){const n=t.toString();return vr[n]||(vr[n]=e()),vr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&An(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="start",mg="close",xg="pLPCommand",yg="pRTLPCB",Tu="id",Ru="pw",Nu="ser",vg="cb",bg="seg",Cg="ts",Eg="d",Ig="dframe",Au=1870,Pu=30,wg=Au-Pu,Sg=25e3,Tg=3e4;class pn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ss(e),this.stats_=No(n),this.urlFn=c=>(this.appCheckToken&&(c[Kr]=this.appCheckToken),Su(n,Iu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Tg)),ng(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ao((...r)=>{const[o,l,c,a,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===nc)this.id=l,this.password=c;else if(o===mg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[nc]="t",s[Nu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gu]=Ro,this.transportSessionId&&(s[mu]=this.transportSessionId),this.lastSessionId&&(s[bu]=this.lastSessionId),this.applicationId&&(s[Cu]=this.applicationId),this.appCheckToken&&(s[Kr]=this.appCheckToken),typeof location<"u"&&location.hostname&&vu.test(location.hostname)&&(s[xu]=yu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ig()&&!rg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ja(n),i=pu(s,wg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ig]="t",s[Tu]=e,s[Ru]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ao{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=X_(),window[xg+this.uniqueCallbackIdentifier]=e,window[yg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ao.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tu]=this.myID,e[Ru]=this.myPW,e[Nu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pu+s.length<=Au;){const o=this.pendingSegs.shift();s=s+"&"+bg+i+"="+o.seg+"&"+Cg+i+"="+o.ts+"&"+Eg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Sg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=16384,Ng=45e3;let ii=null;typeof MozWebSocket<"u"?ii=MozWebSocket:typeof WebSocket<"u"&&(ii=WebSocket);class Xe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ss(this.connId),this.stats_=No(n),this.connURL=Xe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gu]=Ro,typeof location<"u"&&location.hostname&&vu.test(location.hostname)&&(o[xu]=yu),n&&(o[mu]=n),s&&(o[bu]=s),i&&(o[Kr]=i),r&&(o[Cu]=r),Su(e,Eu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let s;Ip(),this.mySock=new ii(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ii!==null&&!Xe.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=us(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pu(n,Rg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ng))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xe.responsesRequiredToBeHealthy=2;Xe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static get ALL_TRANSPORTS(){return[pn,Xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Xe&&Xe.isAvailable();let s=n&&!Xe.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Xe];else{const i=this.transports_=[];for(const r of ds.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=6e4,Pg=5e3,Dg=10*1024,Og=100*1024,br="t",sc="d",kg="s",ic="r",Mg="e",rc="o",oc="a",lc="n",cc="p",Fg="h";class Lg{constructor(e,n,s,i,r,o,l,c,a,d){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ss("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Og?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(br in e){const n=e[br];n===oc?this.upgradeIfSecondaryHealthy_():n===ic?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===rc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:oc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bn(br,e);if(sc in e){const s=e[sc];if(n===Fg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===lc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kg?this.onConnectionShutdown_(s):n===ic?this.onReset_(s):n===Mg?zr("Server Error: "+s):n===rc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ro!==s&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ag))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ou{static getInstance(){return new ri}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=32,uc=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new oe("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bt(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function ku(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Bg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Fe(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Po(t,e){if(Bt(t)!==Bt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bt(t)>Bt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Wg{constructor(e,n){this.errorPrefix_=n,this.parts_=Mu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$i(this.parts_[s]);Lu(this)}}function Ug(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$i(e),Lu(t)}function Hg(t){const e=t.parts_.pop();t.byteLength_-=$i(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lu(t){if(t.byteLength_>uc)throw new Error(t.errorPrefix_+"has a key path longer than "+uc+" bytes ("+t.byteLength_+").");if(t.parts_.length>ac)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ac+") or object contains a cycle "+Yt(t))}function Yt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Ou{static getInstance(){return new Do}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e3,Vg=60*5*1e3,hc=30*1e3,jg=1.3,$g=3e4,Gg="server_kill",fc=3;class Ct extends Du{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Ct.nextPersistentConnectionId_++,this.log_=Ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=Vg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Do.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;Ct.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tt(e,"w")){const s=En(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ap(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zr("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$g&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Lg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{Ue(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gg)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ue(p),c())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hl(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>To(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fc&&(this.reconnectDelay_=hc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uu.replace(/\./g,"-")]=1,tu()?e["framework.cordova"]=1:Ep()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ri.getInstance().currentlyOnline();return Hl(this.interruptReasons_)&&e}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(In,e),i=new K(In,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class Bu extends Gi{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,n){return Nn(e.name,n.name)}isDefinedOn(e){throw Tn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(sn,Fs)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Fs)}toString(){return".key"}}const bn=new Bu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class zg{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ls(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ls(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e){return Nn(t.name,e.name)}function Oo(t,e){return Nn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr;function qg(t){qr=t}const Wu=function(t){return typeof t=="number"?"number:"+_u(t):"string:"+t},Uu=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else R(t===qr||t.isEmpty(),"priority of unexpected type.");R(t===qr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;class Ie{static set __childrenNodeConstructor(e){dc=e}static get __childrenNodeConstructor(){return dc}constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_u(this.value_):e+=this.value_,this.lazyHash_=fu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ie.VALUE_TYPE_ORDER.indexOf(n),r=Ie.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu,Vu;function Yg(t){Hu=t}function Qg(t){Vu=t}class Jg extends Gi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(sn,new Ie("[PRIORITY-POST]",Vu))}makePost(e,n){const s=Hu(e);return new K(n,new Ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new Jg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=Math.log(2);class Xg{constructor(e){const n=r=>parseInt(Math.log(r)/Zg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oi=function(t,e,n,s){t.sort(e);const i=function(c,a){const d=a-c;let p,g;if(d===0)return null;if(d===1)return p=t[c],g=n?n(p):p,new we(g,p.node,we.BLACK,null,null);{const x=parseInt(d/2,10)+c,w=i(c,x),O=i(x+1,a);return p=t[x],g=n?n(p):p,new we(g,p.node,we.BLACK,w,O)}},r=function(c){let a=null,d=null,p=t.length;const g=function(w,O){const $=p-w,j=p;p-=w;const Q=i($+1,j),ee=t[$],F=n?n(ee):ee;x(new we(F,ee.node,O,null,Q))},x=function(w){a?(a.left=w,a=w):(d=w,a=w)};for(let w=0;w<c.count;++w){const O=c.nextBitIsOne(),$=Math.pow(2,c.count-(w+1));O?g($,we.BLACK):(g($,we.BLACK),g($,we.RED))}return d},o=new Xg(t.length),l=r(o);return new We(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;const hn={};class bt{static get Default(){return R(hn&&ge,"ChildrenNode.ts has not been loaded"),Cr=Cr||new bt({".priority":hn},{".priority":ge}),Cr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=En(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=oi(s,e.getCompare()):l=hn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const d=Object.assign({},this.indexes_);return d[c]=l,new bt(d,a)}addToIndexes(e,n){const s=ei(this.indexes_,(i,r)=>{const o=En(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===hn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(K.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),oi(l,o.getCompare())}else return hn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new K(e.name,l))),c.insert(e,e.node)}});return new bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ei(this.indexes_,i=>{if(i===hn)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new bt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un;class B{static get EMPTY_NODE(){return Un||(Un=new B(new We(Oo),null,bt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Uu(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Un}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Un:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Un:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{R(z(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wu(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class em extends B{constructor(){super(new We(Oo),B.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ts=new em;Object.defineProperties(K,{MIN:{value:new K(In,B.EMPTY_NODE)},MAX:{value:new K(sn,Ts)}});Bu.__EMPTY_NODE=B.EMPTY_NODE;Ie.__childrenNodeConstructor=B;qg(Ts);Qg(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=!0;function Se(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,Se(e))}if(!(t instanceof Array)&&tm){const n=[];let s=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Se(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new K(o,c)))}}),n.length===0)return B.EMPTY_NODE;const r=oi(n,Kg,o=>o.name,Oo);if(s){const o=oi(n,ge.getCompare());return new B(r,Se(e),new bt({".priority":o},{".priority":ge}))}else return new B(r,Se(e),bt.Default)}else{let n=B.EMPTY_NODE;return He(t,(s,i)=>{if(Tt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}Yg(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends Gi{constructor(e){super(),this.indexPath_=e,R(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new K(sn,e)}toString(){return Mu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends Gi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Nn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Se(e);return new K(n,s)}toString(){return".value"}}const im=new sm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){return{type:"value",snapshotNode:t}}function wn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ps(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ps(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(wn(n,s)):o.trackChildChange(_s(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ge,(i,r)=>{n.hasChild(i)||s.trackChildChange(ps(i,r))}),n.isLeafNode()||n.forEachChild(ge,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(_s(i,r,o))}else s.trackChildChange(wn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.indexedFilter_=new ko(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gs.getStartPost_(e),this.endPost_=gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,x)=>p(x,g)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const c=new K(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(d&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(_s(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ps(n,p));const O=l.updateImmediateChild(n,B.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(wn(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return s.isEmpty()?e:d&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ps(a.name,a.node)),r.trackChildChange(wn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:In}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Mo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lm(t){return t.loadsAllData()?new ko(t.getIndex()):t.hasLimit()?new om(t):new gs(t)}function pc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===im?n="$value":t.index_===bn?n="$key":(R(t.index_ instanceof nm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _c(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Du{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ss("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=li.getListenId_(e,s),l={};this.listens_[o]=l;const c=pc(e._queryParams);this.restRequest_(r+".json",c,(a,d)=>{let p=d;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),En(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=li.getListenId_(e,n);delete this.listens_[s]}get(e){const n=pc(e._queryParams),s=e._path.toString(),i=new ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Dp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=us(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return{value:null,children:new Map}}function $u(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,ci());const i=t.children.get(s);e=ue(e),$u(i,e,n)}}function Yr(t,e,n){t.value!==null?n(e,t.value):am(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Yr(i,r,n)})}function am(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=10*1e3,hm=30*1e3,fm=5*60*1e3;class dm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new um(e);const s=gc+(hm-gc)*Math.random();es(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(i,r)=>{r>0&&Tt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*fm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function Gu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=Gu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new ai(X(),n,this.revert)}}else return R(z(this.path)===e,"operationForChild called for unrelated child."),new ai(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ms(this.source,X()):new ms(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return q(this.path)?new rn(this.source,X(),this.snap.getImmediateChild(e)):new rn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new rn(this.source,X(),n.value):new xs(this.source,X(),n)}else return R(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xs(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _m(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rm(o.childName,o.snapshotNode))}),Hn(t,i,"child_removed",e,s,n),Hn(t,i,"child_added",e,s,n),Hn(t,i,"child_moved",r,s,n),Hn(t,i,"child_changed",e,s,n),Hn(t,i,"value",e,s,n),i}function Hn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>mm(t,l,c)),o.forEach(l=>{const c=gm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function gm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mm(t,e,n){if(e.childName==null||n.childName==null)throw Tn("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e){return{eventCache:t,serverCache:e}}function ts(t,e,n,s){return zi(new Wt(e,n,s),t.serverCache)}function zu(t,e,n,s){return zi(t.eventCache,new Wt(e,n,s))}function ui(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;const xm=()=>(Er||(Er=new We(sg)),Er);class pe{static fromObject(e){let n=new pe(null);return He(e,(s,i)=>{n=n.set(new oe(s),i)}),n}constructor(e,n=xm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:Ce(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new pe(null)}}set(e,n){if(q(e))return new pe(n,this.children);{const s=z(e),r=(this.children.get(s)||new pe(null)).set(ue(e),n),o=this.children.insert(s,r);return new pe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new pe(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new pe(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),Ce(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),Ce(n,i),s):new pe(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new pe(null))}}function ns(t,e,n){if(q(e))return new st(new pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new st(t.writeTree_.set(i,r))}else{const i=new pe(n),r=t.writeTree_.setTree(e,i);return new st(r)}}}function mc(t,e,n){let s=t;return He(n,(i,r)=>{s=ns(s,Ce(e,i),r)}),s}function xc(t,e){if(q(e))return st.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new st(n)}}function Qr(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function yc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function Ft(t,e){if(q(e))return t;{const n=cn(t,e);return n!=null?new st(new pe(n)):new st(t.writeTree_.subtree(e))}}function Jr(t){return t.writeTree_.isEmpty()}function Sn(t,e){return Ku(X(),t.writeTree_,e)}function Ku(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ku(Ce(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t,e){return Ju(e,t)}function ym(t,e,n,s,i){R(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ns(t.visibleWrites,e,n)),t.lastWriteId=s}function vm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function bm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Cm(l,s.path)?i=!1:et(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Em(t),!0;if(s.snap)t.visibleWrites=xc(t.visibleWrites,s.path);else{const l=s.children;He(l,c=>{t.visibleWrites=xc(t.visibleWrites,Ce(s.path,c))})}return!0}else return!1}function Cm(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(Ce(t.path,n),e))return!0;return!1}function Em(t){t.visibleWrites=qu(t.allWrites,Im,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Im(t){return t.visible}function qu(t,e,n){let s=st.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=Fe(n,o),s=ns(s,l,r.snap)):et(o,n)&&(l=Fe(o,n),s=ns(s,X(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=Fe(n,o),s=mc(s,l,r.children);else if(et(o,n))if(l=Fe(o,n),q(l))s=mc(s,X(),r.children);else{const c=En(r.children,z(l));if(c){const a=c.getChild(ue(l));s=ns(s,X(),a)}}}else throw Tn("WriteRecord should have .snap or .children")}}return s}function Yu(t,e,n,s,i){if(!s&&!i){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(Jr(o))return n;if(n==null&&!Qr(o,X()))return null;{const l=n||B.EMPTY_NODE;return Sn(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&Jr(r))return n;if(!i&&n==null&&!Qr(r,X()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(et(a.path,e)||et(e,a.path))},l=qu(t.allWrites,o,e),c=n||B.EMPTY_NODE;return Sn(l,c)}}}function wm(t,e,n){let s=B.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(ge,(o,l)=>{const c=Sn(Ft(r,new oe(o)),l);s=s.updateImmediateChild(o,c)}),yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Sm(t,e,n,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return Jr(o)?i.getChild(n):Sn(o,i.getChild(n))}}function Tm(t,e,n,s){const i=Ce(e,n),r=cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return Sn(o,s.getNode().getImmediateChild(n))}else return null}function Rm(t,e){return cn(t.visibleWrites,e)}function Nm(t,e,n,s,i,r,o){let l;const c=Ft(t.visibleWrites,e),a=cn(c,X());if(a!=null)l=a;else if(n!=null)l=Sn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&d.length<i;)p(x,s)!==0&&d.push(x),x=g.getNext();return d}else return[]}function Am(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function hi(t,e,n,s){return Yu(t.writeTree,t.treePath,e,n,s)}function Bo(t,e){return wm(t.writeTree,t.treePath,e)}function vc(t,e,n,s){return Sm(t.writeTree,t.treePath,e,n,s)}function fi(t,e){return Rm(t.writeTree,Ce(t.treePath,e))}function Pm(t,e,n,s,i,r){return Nm(t.writeTree,t.treePath,e,n,s,i,r)}function Wo(t,e,n){return Tm(t.writeTree,t.treePath,e,n)}function Qu(t,e){return Ju(Ce(t.treePath,e),t.writeTree)}function Ju(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,_s(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ps(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,wn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,_s(s,e.snapshotNode,i.oldSnap));else throw Tn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Zu=new Om;class Uo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Pm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){return{filter:t}}function Mm(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fm(t,e,n,s,i){const r=new Dm;let o,l;if(n.type===tt.OVERWRITE){const a=n;a.source.fromUser?o=Zr(t,e,a.path,a.snap,s,i,r):(R(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=di(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===tt.MERGE){const a=n;a.source.fromUser?o=Bm(t,e,a.path,a.children,s,i,r):(R(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Xr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===tt.ACK_USER_WRITE){const a=n;a.revert?o=Hm(t,e,a.path,s,i,r):o=Wm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=Um(t,e,n.path,s,r);else throw Tn("Unknown operation type: "+n.type);const c=r.getChanges();return Lm(e,o,c),{viewCache:o,changes:c}}function Lm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ui(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ju(ui(e)))}}function Xu(t,e,n,s,i,r){const o=e.eventCache;if(fi(s,n)!=null)return e;{let l,c;if(q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=on(e),d=a instanceof B?a:B.EMPTY_NODE,p=Bo(s,d);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=hi(s,on(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=z(n);if(a===".priority"){R(Bt(n)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const p=vc(s,n,d,c);p!=null?l=t.filter.updatePriority(d,p):l=o.getNode()}else{const d=ue(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=vc(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(d,g):p=o.getNode().getImmediateChild(a)}else p=Wo(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,d,i,r):l=o.getNode()}}return ts(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function di(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const d=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=d.updateFullNode(c.getNode(),x,null)}else{const x=z(n);if(!c.isCompleteForPath(n)&&Bt(n)>1)return e;const w=ue(n),$=c.getNode().getImmediateChild(x).updateChild(w,s);x===".priority"?a=d.updatePriority(c.getNode(),$):a=d.updateChild(c.getNode(),x,$,w,Zu,null)}const p=zu(e,a,c.isFullyInitialized()||q(n),d.filtersNodes()),g=new Uo(i,p,r);return Xu(t,p,n,i,g,l)}function Zr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const d=new Uo(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ts(e,a,!0,t.filter.filtersNodes());else{const p=z(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ts(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ue(n),x=l.getNode().getImmediateChild(p);let w;if(q(g))w=s;else{const O=d.getCompleteChild(p);O!=null?ku(g)===".priority"&&O.getChild(Fu(g)).isEmpty()?w=O:w=O.updateChild(g,s):w=B.EMPTY_NODE}if(x.equals(w))c=e;else{const O=t.filter.updateChild(l.getNode(),p,w,g,d,o);c=ts(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function bc(t,e){return t.eventCache.isCompleteForChild(e)}function Bm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const d=Ce(n,c);bc(e,z(d))&&(l=Zr(t,l,d,a,i,r,o))}),s.foreach((c,a)=>{const d=Ce(n,c);bc(e,z(d))||(l=Zr(t,l,d,a,i,r,o))}),l}function Cc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new pe(null).setTree(n,s);const d=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(d.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),w=Cc(t,x,g);c=di(t,c,new oe(p),w,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!d.hasChild(p)&&!x){const w=e.serverCache.getNode().getImmediateChild(p),O=Cc(t,w,g);c=di(t,c,new oe(p),O,i,r,o,l)}}),c}function Wm(t,e,n,s,i,r,o){if(fi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return di(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new pe(null);return c.getNode().forEachChild(bn,(d,p)=>{a=a.set(new oe(d),p)}),Xr(t,e,n,a,i,r,l,o)}else return e}else{let a=new pe(null);return s.foreach((d,p)=>{const g=Ce(n,d);c.isCompleteForPath(g)&&(a=a.set(d,c.getNode().getChild(g)))}),Xr(t,e,n,a,i,r,l,o)}}function Um(t,e,n,s,i){const r=e.serverCache,o=zu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Xu(t,o,n,s,Zu,i)}function Hm(t,e,n,s,i,r){let o;if(fi(s,n)!=null)return e;{const l=new Uo(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||z(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hi(s,on(e));else{const p=e.serverCache.getNode();R(p instanceof B,"serverChildren would be complete if leaf node"),d=Bo(s,p)}d=d,a=t.filter.updateFullNode(c,d,r)}else{const d=z(n);let p=Wo(s,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=c.getImmediateChild(d)),p!=null?a=t.filter.updateChild(c,d,p,ue(n),l,r):e.eventCache.getNode().hasChild(d)?a=t.filter.updateChild(c,d,B.EMPTY_NODE,ue(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hi(s,on(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||fi(s,X())!=null,ts(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ko(s.getIndex()),r=lm(s);this.processor_=km(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),d=new Wt(c,o.isFullyInitialized(),i.filtersNodes()),p=new Wt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=zi(p,d),this.eventGenerator_=new pm(this.query_)}get query(){return this.query_}}function jm(t){return t.viewCache_.serverCache.getNode()}function $m(t){return ui(t.viewCache_)}function Gm(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Ec(t){return t.eventRegistrations_.length===0}function zm(t,e){t.eventRegistrations_.push(e)}function Ic(t,e,n){const s=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function wc(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(R(on(t.viewCache_),"We should always have a full cache before handling merges"),R(ui(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Fm(t.processor_,i,e,n,s);return Mm(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,eh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Km(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(r,o)=>{s.push(wn(r,o))}),n.isFullyInitialized()&&s.push(ju(n.getNode())),eh(t,s,n.getNode(),e)}function eh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return _m(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class th{constructor(){this.views=new Map}}function qm(t){R(!pi,"__referenceConstructor has already been defined"),pi=t}function Ym(){return R(pi,"Reference.ts has not been loaded"),pi}function Qm(t){return t.views.size===0}function Ho(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),wc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(wc(o,e,n,s));return r}}function nh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=hi(n,i?s:null),c=!1;l?c=!0:s instanceof B?(l=Bo(n,s),c=!1):(l=B.EMPTY_NODE,c=!1);const a=zi(new Wt(l,c,!1),new Wt(s,i,!1));return new Vm(e,a)}return o}function Jm(t,e,n,s,i,r){const o=nh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zm(o,n),Km(o,n)}function Zm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ut(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Ic(a,n,s)),Ec(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Ic(c,n,s)),Ec(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Ut(t)&&r.push(new(Ym())(e._repo,e._path)),{removed:r,events:o}}function sh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lt(t,e){let n=null;for(const s of t.views.values())n=n||Gm(s,e);return n}function ih(t,e){if(e._queryParams.loadsAllData())return qi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function rh(t,e){return ih(t,e)!=null}function Ut(t){return qi(t)!=null}function qi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;function Xm(t){R(!_i,"__referenceConstructor has already been defined"),_i=t}function e0(){return R(_i,"Reference.ts has not been loaded"),_i}let t0=1;class Sc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=Am(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(t,e,n,s,i){return ym(t.pendingWriteTree_,e,n,s,i),i?Ns(t,new rn(Gu(),e,n)):[]}function Jt(t,e,n=!1){const s=vm(t.pendingWriteTree_,e);if(bm(t.pendingWriteTree_,e)){let r=new pe(null);return s.snap!=null?r=r.set(X(),!0):He(s.children,o=>{r=r.set(new oe(o),!0)}),Ns(t,new ai(s.path,r,n))}else return[]}function Rs(t,e,n){return Ns(t,new rn(Fo(),e,n))}function n0(t,e,n){const s=pe.fromObject(n);return Ns(t,new xs(Fo(),e,s))}function s0(t,e){return Ns(t,new ms(Fo(),e))}function i0(t,e,n){const s=jo(t,n);if(s){const i=$o(s),r=i.path,o=i.queryId,l=Fe(r,e),c=new ms(Lo(o),l);return Go(t,r,c)}else return[]}function gi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||rh(o,e))){const c=Zm(o,e,n,s);Qm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const d=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,x)=>Ut(x));if(d&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=l0(g);for(let w=0;w<x.length;++w){const O=x[w],$=O.query,j=uh(t,O);t.listenProvider_.startListening(ss($),ys(t,$),j.hashFn,j.onComplete)}}}!p&&a.length>0&&!s&&(d?t.listenProvider_.stopListening(ss(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Yi(g));t.listenProvider_.stopListening(ss(g),x)}))}c0(t,a)}return l}function lh(t,e,n,s){const i=jo(t,s);if(i!=null){const r=$o(i),o=r.path,l=r.queryId,c=Fe(o,e),a=new rn(Lo(l),c,n);return Go(t,o,a)}else return[]}function r0(t,e,n,s){const i=jo(t,s);if(i){const r=$o(i),o=r.path,l=r.queryId,c=Fe(o,e),a=pe.fromObject(n),d=new xs(Lo(l),c,a);return Go(t,o,d)}else return[]}function eo(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const w=Fe(g,i);r=r||Lt(x,w),o=o||Ut(x)});let l=t.syncPointTree_.get(i);l?(o=o||Ut(l),r=r||Lt(l,X())):(l=new th,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,w)=>{const O=Lt(w,X());O&&(r=r.updateImmediateChild(x,O))}));const a=rh(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Yi(e);R(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=a0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const d=Ki(t.pendingWriteTree_,i);let p=Jm(l,e,n,d,r,c);if(!a&&!o&&!s){const g=ih(l,e);p=p.concat(u0(t,e,g))}return p}function Vo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Fe(o,e),a=Lt(l,c);if(a)return a});return Yu(i,e,r,n,!0)}function o0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,d)=>{const p=Fe(a,n);s=s||Lt(d,p)});let i=t.syncPointTree_.get(n);i?s=s||Lt(i,X()):(i=new th,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=Ki(t.pendingWriteTree_,e._path),c=nh(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return $m(c)}function Ns(t,e){return ch(e,t.syncPointTree_,null,Ki(t.pendingWriteTree_,X()))}function ch(t,e,n,s){if(q(t.path))return ah(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=Lt(i,X()));let r=[];const o=z(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,d=Qu(s,o);r=r.concat(ch(l,c,a,d))}return i&&(r=r.concat(Ho(i,t,s,n))),r}}function ah(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=Lt(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Qu(s,o),d=t.operationForChild(o);d&&(r=r.concat(ah(d,l,c,a)))}),i&&(r=r.concat(Ho(i,t,s,n))),r}function uh(t,e){const n=e.query,s=ys(t,n);return{hashFn:()=>(jm(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?i0(t,n._path,s):s0(t,n._path);{const r=og(i,n);return gi(t,n,null,r)}}}}function ys(t,e){const n=Yi(e);return t.queryToTagMap.get(n)}function Yi(t){return t._path.toString()+"$"+t._queryIdentifier}function jo(t,e){return t.tagToQueryMap.get(e)}function $o(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Go(t,e,n){const s=t.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=Ki(t.pendingWriteTree_,e);return Ho(s,n,i,null)}function l0(t){return t.fold((e,n,s)=>{if(n&&Ut(n))return[qi(n)];{let i=[];return n&&(i=sh(n)),He(s,(r,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(e0())(t._repo,t._path):t}function c0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Yi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function a0(){return t0++}function u0(t,e,n){const s=e._path,i=ys(t,e),r=uh(t,n),o=t.listenProvider_.startListening(ss(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)R(!Ut(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,d,p)=>{if(!q(a)&&d&&Ut(d))return[qi(d).query];{let g=[];return d&&(g=g.concat(sh(d).map(x=>x.query))),He(p,(x,w)=>{g=g.concat(w)}),g}});for(let a=0;a<c.length;++a){const d=c[a];t.listenProvider_.stopListening(ss(d),ys(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zo(n)}node(){return this.node_}}class Ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new Ko(this.syncTree_,n)}node(){return Vo(this.syncTree_,this.path_)}}const h0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Tc=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return f0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return d0(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},f0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},d0=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},p0=function(t,e,n,s){return qo(e,new Ko(n,t),s)},hh=function(t,e,n){return qo(t,new zo(e),n)};function qo(t,e,n){const s=t.getPriority().val(),i=Tc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Tc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ie(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ie(i))),o.forEachChild(ge,(l,c)=>{const a=qo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qo(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=z(n);for(;i!==null;){const r=En(s.node.children,i)||{children:{},childCount:0};s=new Yo(i,s,r),n=ue(n),i=z(n)}return s}function Pn(t){return t.node.value}function fh(t,e){t.node.value=e,to(t)}function dh(t){return t.node.childCount>0}function _0(t){return Pn(t)===void 0&&!dh(t)}function Qi(t,e){He(t.node.children,(n,s)=>{e(new Yo(n,t,s))})}function ph(t,e,n,s){n&&e(t),Qi(t,i=>{ph(i,e,!0)})}function g0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function As(t){return new oe(t.parent===null?t.name:As(t.parent)+"/"+t.name)}function to(t){t.parent!==null&&m0(t.parent,t.name,t)}function m0(t,e,n){const s=_0(n),i=Tt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,to(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,to(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=/[\[\].#$\/\u0000-\u001F\u007F]/,y0=/[\[\].#$\u0000-\u001F\u007F]/,Ir=10*1024*1024,_h=function(t){return typeof t=="string"&&t.length!==0&&!x0.test(t)},gh=function(t){return typeof t=="string"&&t.length!==0&&!y0.test(t)},v0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gh(t)},b0=function(t,e,n,s){Jo(wo(t,"value"),e,n)},Jo=function(t,e,n){const s=n instanceof oe?new Wg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Yt(s)+" with contents = "+e.toString());if(du(e))throw new Error(t+"contains "+e.toString()+" "+Yt(s));if(typeof e=="string"&&e.length>Ir/3&&$i(e)>Ir)throw new Error(t+"contains a string greater than "+Ir+" utf8 bytes "+Yt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(He(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!_h(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ug(s,o),Jo(t,l,s),Hg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Yt(s)+" in addition to actual children.")}},mh=function(t,e,n,s){if(!gh(n))throw new Error(wo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},C0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mh(t,e,n)},xh=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},E0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_h(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!v0(n))throw new Error(wo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Po(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function yh(t,e,n){Zo(t,n),vh(t,s=>Po(s,e))}function pt(t,e,n){Zo(t,n),vh(t,s=>et(s,e)||et(e,s))}function vh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(w0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xn&&Ae("event: "+n.toString()),An(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="repo_interrupt",T0=25;class R0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new I0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ci(),this.transactionQueueTree_=new Yo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N0(t,e,n){if(t.stats_=No(t.repoInfo_),t.forceRestClient_||ug())t.server_=new li(t.repoInfo_,(s,i,r,o)=>{Rc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Nc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ct(t.repoInfo_,e,(s,i,r,o)=>{Rc(t,s,i,r,o)},s=>{Nc(t,s)},s=>{P0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=_g(t.repoInfo_,()=>new dm(t.stats_,t.server_)),t.infoData_=new cm,t.infoSyncTree_=new Sc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Rs(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),el(t,"connected",!1),t.serverSyncTree_=new Sc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);pt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function A0(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xo(t){return h0({timestamp:A0(t)})}function Rc(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ei(n,a=>Se(a));o=r0(t.serverSyncTree_,r,c,i)}else{const c=Se(n);o=lh(t.serverSyncTree_,r,c,i)}else if(s){const c=ei(n,a=>Se(a));o=n0(t.serverSyncTree_,r,c)}else{const c=Se(n);o=Rs(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Zi(t,r)),pt(t.eventQueue_,l,o)}function Nc(t,e){el(t,"connected",e),e===!1&&k0(t)}function P0(t,e){He(e,(n,s)=>{el(t,n,s)})}function el(t,e,n){const s=new oe("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=Rs(t.infoSyncTree_,s,i);pt(t.eventQueue_,s,r)}function bh(t){return t.nextWriteId_++}function D0(t,e,n){const s=o0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());eo(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Rs(t.serverSyncTree_,e._path,r);else{const l=ys(t.serverSyncTree_,e);o=lh(t.serverSyncTree_,e._path,r,l)}return pt(t.eventQueue_,e._path,o),gi(t.serverSyncTree_,e,n,null,!0),r},i=>(Ji(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function O0(t,e,n,s,i){Ji(t,"set",{path:e.toString(),value:n,priority:s});const r=Xo(t),o=Se(n,s),l=Vo(t.serverSyncTree_,e),c=hh(o,l,r),a=bh(t),d=oh(t.serverSyncTree_,e,c,a,!0);Zo(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const w=g==="ok";w||Ue("set at "+e+" failed: "+g);const O=Jt(t.serverSyncTree_,a,!w);pt(t.eventQueue_,e,O),L0(t,i,g,x)});const p=Sh(t,e);Zi(t,p),pt(t.eventQueue_,p,[])}function k0(t){Ji(t,"onDisconnectEvents");const e=Xo(t),n=ci();Yr(t.onDisconnect_,X(),(i,r)=>{const o=p0(i,r,t.serverSyncTree_,e);$u(n,i,o)});let s=[];Yr(n,X(),(i,r)=>{s=s.concat(Rs(t.serverSyncTree_,i,r));const o=Sh(t,i);Zi(t,o)}),t.onDisconnect_=ci(),pt(t.eventQueue_,X(),s)}function M0(t,e,n){let s;z(e._path)===".info"?s=eo(t.infoSyncTree_,e,n):s=eo(t.serverSyncTree_,e,n),yh(t.eventQueue_,e._path,s)}function Ac(t,e,n){let s;z(e._path)===".info"?s=gi(t.infoSyncTree_,e,n):s=gi(t.serverSyncTree_,e,n),yh(t.eventQueue_,e._path,s)}function F0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(S0)}function Ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function L0(t,e,n,s){e&&An(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ch(t,e,n){return Vo(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function tl(t,e=t.transactionQueueTree_){if(e||Xi(t,e),Pn(e)){const n=Ih(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&B0(t,As(e),n)}else dh(e)&&Qi(e,n=>{tl(t,n)})}function B0(t,e,n){const s=n.map(a=>a.currentWriteId),i=Ch(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const d=n[a];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=Fe(e,d.path);r=r.updateChild(p,d.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ji(t,"transaction put response",{path:c.toString(),status:a});let d=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,d=d.concat(Jt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Xi(t,Qo(t.transactionQueueTree_,e)),tl(t,t.transactionQueueTree_),pt(t.eventQueue_,e,d);for(let g=0;g<p.length;g++)An(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ue("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}Zi(t,e)}},o)}function Zi(t,e){const n=Eh(t,e),s=As(n),i=Ih(t,n);return W0(t,i,s),s}function W0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Fe(n,c.path);let d=!1,p;if(R(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,p=c.abortReason,i=i.concat(Jt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=T0)d=!0,p="maxretry",i=i.concat(Jt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=Ch(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Jo("transaction failed: Data returned ",x,c.path);let w=Se(x);typeof x=="object"&&x!=null&&Tt(x,".priority")||(w=w.updatePriority(g.getPriority()));const $=c.currentWriteId,j=Xo(t),Q=hh(w,g,j);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=Q,c.currentWriteId=bh(t),o.splice(o.indexOf($),1),i=i.concat(oh(t.serverSyncTree_,c.path,Q,c.currentWriteId,c.applyLocally)),i=i.concat(Jt(t.serverSyncTree_,$,!0))}else d=!0,p="nodata",i=i.concat(Jt(t.serverSyncTree_,c.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Xi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)An(s[l]);tl(t,t.transactionQueueTree_)}function Eh(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Pn(s)===void 0;)s=Qo(s,n),e=ue(e),n=z(e);return s}function Ih(t,e){const n=[];return wh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function wh(t,e,n){const s=Pn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qi(e,i=>{wh(t,i,n)})}function Xi(t,e){const n=Pn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,fh(e,n.length>0?n:void 0)}Qi(e,s=>{Xi(t,s)})}function Sh(t,e){const n=As(Eh(t,e)),s=Qo(t.transactionQueueTree_,e);return g0(s,i=>{wr(t,i)}),wr(t,s),ph(s,i=>{wr(t,i)}),n}function wr(t,e){const n=Pn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fh(e,void 0):n.length=r+1,pt(t.eventQueue_,As(e),i);for(let o=0;o<s.length;o++)An(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function H0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pc=function(t,e){const n=V0(t),s=n.namespace;n.domain==="firebase.com"&&It(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},V0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=U0(t.substring(d,p)));const g=H0(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class $0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class nl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:ku(this._path)}get ref(){return new Rt(this._repo,this._path)}get _queryIdentifier(){const e=_c(this._queryParams),n=To(e);return n==="{}"?"default":n}get _queryObject(){return _c(this._queryParams)}isEqual(e){if(e=Rn(e),!(e instanceof nl))return!1;const n=this._repo===e._repo,s=Po(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Bg(this._path)}}class Rt extends nl{constructor(e,n){super(e,n,new Mo,!1)}get parent(){const e=Fu(this._path);return e===null?null:new Rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=no(this.ref,e);return new vs(this._node.getChild(n),s,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new vs(i,no(this.ref,s),ge)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bs(t,e){return t=Rn(t),t._checkNotDeleted("ref"),e!==void 0?no(t._root,e):t._root}function no(t,e){return t=Rn(t),z(t._path)===null?C0("child","path",e):mh("child","path",e),new Rt(t._repo,Ce(t._path,e))}function G0(t){return xh("remove",t._path),Rh(t,null)}function Rh(t,e){t=Rn(t),xh("set",t._path),b0("set",e,t._path);const n=new ji;return O0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function z0(t){t=Rn(t);const e=new Th(()=>{}),n=new er(e);return D0(t._repo,t,n).then(s=>new vs(s,new Rt(t._repo,t._path),t._queryParams.getIndex()))}class er{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new j0("value",this,new vs(e.snapshotNode,new Rt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $0(this,e,n):null}matches(e){return e instanceof er?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function K0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(d,p)=>{Ac(t._repo,t,l),c(d,p)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Th(n,r||void 0),l=new er(o);return M0(t._repo,t,l),()=>Ac(t._repo,t,l)}function q0(t,e,n,s){return K0(t,"value",e,n,s)}qm(Rt);Xm(Rt);/**
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
 */const Y0="FIREBASE_DATABASE_EMULATOR_HOST",so={};let Q0=!1;function J0(t,e,n,s){t.repoInfo_=new wu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Z0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pc(r,i),l=o.repoInfo,c;typeof process<"u"&&Jl&&(c=Jl[Y0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Pc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new fg(t.name,t.options,e);E0("Invalid Firebase Database URL",o),q(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ex(l,t,a,new hg(t,n));return new tx(d,t)}function X0(t,e){const n=so[e];(!n||n[t.key]!==t)&&It(`Database ${e}(${t.repoInfo_}) has already been deleted.`),F0(t),delete n[t.key]}function ex(t,e,n,s){let i=so[e.name];i||(i={},so[e.name]=i);let r=i[t.toURLString()];return r&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new R0(t,Q0,n,s),i[t.toURLString()]=r,r}class tx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(X0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}}function nx(t=F_(),e){const n=P_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=vp("database");s&&sx(n,...s)}return n}function sx(t,e,n,s={}){t=Rn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ti(s,r.repoInfo_.emulatorOptions))return;It("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&It('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new js(js.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:bp(s.mockUserToken,t.app.options.projectId);o=new js(l)}J0(r,i,s,o)}/**
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
 */function ix(t){Y_(M_),si(new hs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Z0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(Zl,Xl,t),yn(Zl,Xl,"esm2017")}Ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ix();const Vn=xi;(function(t,e){const n=xi,s=t();for(;;)try{if(parseInt(n(213))/1+-parseInt(n(208))/2+parseInt(n(209))/3*(parseInt(n(217))/4)+parseInt(n(210))/5*(-parseInt(n(207))/6)+parseInt(n(216))/7*(parseInt(n(215))/8)+parseInt(n(218))/9+-parseInt(n(211))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(mi,335678);function mi(){const t=["210657HTVyUB","1:720775593565:web:1a263bf6a87ecfea3817b4","2806168FIEBYH","7UZtKtN","8csgAZG","4612860dqdSlB","iamwait.firebasestorage.app","720775593565","iamwait","12JlctKJ","1151408UoWuFE","753450uuVdcv","828265CSujYW","3335800DnINGS","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app"];return mi=function(){return t},mi()}const rx={apiKey:"AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw",authDomain:"iamwait.firebaseapp.com",databaseURL:Vn(212),projectId:Vn(206),storageBucket:Vn(219),messagingSenderId:Vn(205),appId:Vn(214),measurementId:"G-3RRDNZ9ME5"},ox=lu(rx),Ws=nx(ox);function xi(t,e){const n=mi();return xi=function(s,i){return s=s-205,n[s]},xi(t,e)}function bs(t,e){const n=yi();return bs=function(s,i){return s=s-327,n[s]},bs(t,e)}const xt=bs;(function(t,e){const n=bs,s=t();for(;;)try{if(-parseInt(n(341))/1*(-parseInt(n(330))/2)+-parseInt(n(355))/3+-parseInt(n(364))/4*(-parseInt(n(335))/5)+parseInt(n(354))/6*(-parseInt(n(351))/7)+parseInt(n(338))/8+-parseInt(n(336))/9*(parseInt(n(350))/10)+-parseInt(n(363))/11*(parseInt(n(339))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,442135);function yi(){const t=["12pZEuTJ","catch","120EmbZvN","val","pUUSR","ZcPfu","iZqHQ","log","Данные ","%c ","stringify","40nQGSJA","399vOhSJb","Камень ножницы бумага"," : данные не найдены","3066zwIryb","201930EeabyB","then","aulnM","exists"," -  данные записаны"," удалены!","fbStore2","Ошибка записи данных: ","5429248JDJKCX","268UEhuPo"," = "," на прослушке","error","13698JKbYBZ","GkvQs","lookField",">>> Данные по ","Крестики нолики","14135zDInFs","1747512hoSlKx","color: darkgreen","6380184TzBGHT"];return yi=function(){return t},yi()}const tr=ap(xt(361),{state:()=>({gameId:"",gameNames:{g1:xt(352),g2:xt(334),g3:"Морской бой"},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:-1,playNumber:0,gameLink:""}),actions:{async getField(t){const e=xt,n={iZqHQ:function(i,r){return i(r)},WXrFu:function(i,r,o){return i(r,o)}},s=n.WXrFu(Bs,Ws,t);return n.iZqHQ(z0,s)[e(356)](i=>{const r=e;if(i[r(358)]()){const o=i[r(342)]();return jn(r(333)+t+r(327)+JSON[r(349)](o)),o}else n[r(345)](jn,t+r(353))})},async setField(t,e){const n=xt,s={pUUSR:function(r,o){return r(o)},fjlNT:function(r,o){return r+o},ZcPfu:n(362),pEbSr:function(r,o,l){return r(o,l)},GkvQs:function(r,o,l){return r(o,l)}},i=s.pEbSr(Bs,Ws,t);return s[n(331)](Rh,i,e)[n(356)](()=>{const r=n;s[r(343)](jn,s.fjlNT(t,r(359)))})[n(340)](r=>{const o=n;console[o(329)](s[o(344)],r)})},async onValue(t){const e={wlBFQ:function(s,i){return s(i)},ZAMBp:function(s,i,r){return s(i,r)},qJRaT:function(s,i,r){return s(i,r)}},n=e.ZAMBp(Bs,Ws,t);e.qJRaT(q0,n,s=>{const i=bs;e.wlBFQ(jn,"########### ########## Данные "+t+i(328)),this[i(332)]=s[i(342)]()})},async removeField(t){const e=xt,n={aulnM:function(i,r){return i(r)}};console.log(t);const s=Bs(Ws,t);n[e(357)](G0,s).then(()=>{const i=e;n.aulnM(jn,i(347)+t+i(360))})}}}),jn=t=>console[xt(346)](xt(348)+t,xt(337)),Sr=bi;(function(t,e){const n=bi,s=t();for(;;)try{if(-parseInt(n(262))/1+-parseInt(n(261))/2+parseInt(n(272))/3*(-parseInt(n(285))/4)+parseInt(n(266))/5*(parseInt(n(284))/6)+-parseInt(n(276))/7+-parseInt(n(275))/8+parseInt(n(271))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,538189);function vi(){const t=["8020696mvogtk","442806zrWDxM","VzUHI"," Крестики нолики ","div","kkZsx","IuPzz","jWhZk"," и договориться о выборе игры ","6293340vgxIRo","20ihXCki","button","hCNSU","mnPzs","MJMFv","gITgw","TnsiE","giqwd","gameId","QaROu","gameChanged","jxxJk","iRwvb","1073140RExZzi","927047ayVRVr","KXTiU","fuAPy","uehnS","5FKAvRp","ListGames","kzSSP","EVSUi","toYeu","19028574QPDVGJ","57315MYQBvr","Выберите игру","iAmWaitingForYou"];return vi=function(){return t},vi()}function bi(t,e){const n=vi();return bi=function(s,i){return s=s-258,n[s]},bi(t,e)}const lx=Li({__name:Sr(267),emits:[Sr(258)],setup(t,{emit:e}){const n=Sr,s={mnPzs:function(l,c){return l+c},uehnS:function(l,c){return l(c)},gITgw:"gameChanged",QaROu:function(l){return l()},jWhZk:function(l,c){return l(c)},iRwvb:" Начальная страница ",EVSUi:function(l,c,a,d,p){return l(c,a,d,p)},toYeu:function(l,c,a,d){return l(c,a,d)},kkZsx:function(l,c,a,d,p){return l(c,a,d,p)},fuAPy:function(l){return l()},hCNSU:function(l,c,a,d,p){return l(c,a,d,p)},TnsiE:function(l,c,a,d){return l(c,a,d)},IuPzz:"button",kzSSP:function(l,c,a,d,p){return l(c,a,d,p)},MJMFv:function(l,c,a,d,p){return l(c,a,d,p)},sMjyT:" Морской бой ",KXTiU:function(l){return l()},VzUHI:" Необходимо будет попросить другого участника найти этот miniapp по имени: ",giqwd:function(l){return l()},yYutm:function(l,c,a,d,p){return l(c,a,d,p)},jxxJk:n(283)},i=tr(),r=e;function o(l){const c=n;console.log(l),i[c(293)]=s[c(288)]("g",l),s[c(265)](r,s[c(290)])}return(l,c)=>{const a=n;return s[a(294)](ie),de(a(279),null,[c[3]||(c[3]=s[a(282)](ye,s[a(260)])),c[4]||(c[4]=s[a(269)](v,"h3",null,a(273),-1)),c[5]||(c[5]=v("br",null,null,-1)),s[a(270)](v,a(286),{onClick:c[0]||(c[0]=d=>o(1))}," Камень ножницы бумага "),c[6]||(c[6]=s[a(280)](v,"br",null,null,-1)),c[7]||(c[7]=s[a(264)](ye)),c[8]||(c[8]=s[a(287)](v,"br",null,null,-1)),s[a(291)](v,s[a(281)],{onClick:c[1]||(c[1]=d=>o(2))},a(278)),c[9]||(c[9]=s[a(268)](v,"br",null,null,-1)),c[10]||(c[10]=ye()),c[11]||(c[11]=s[a(289)](v,"br",null,null,-1)),v(a(286),{onClick:c[2]||(c[2]=d=>o(3))},s.sMjyT),c[12]||(c[12]=s[a(268)](v,"br",null,null,-1)),c[13]||(c[13]=s.MJMFv(v,"br",null,null,-1)),c[14]||(c[14]=s[a(263)](ye)),c[15]||(c[15]=v("br",null,null,-1)),c[16]||(c[16]=s[a(282)](ye,s[a(277)])),c[17]||(c[17]=s[a(269)](v,"br",null,null,-1)),c[18]||(c[18]=s[a(292)](ye)),c[19]||(c[19]=s[a(269)](v,"br",null,null,-1)),c[20]||(c[20]=v("b",null,a(274),-1)),c[21]||(c[21]=v("br",null,null,-1)),c[22]||(c[22]=s[a(263)](ye)),c[23]||(c[23]=s.yYutm(v,"br",null,null,-1)),c[24]||(c[24]=s[a(265)](ye,s[a(259)]))])}}}),is=Ei;(function(t,e){const n=Ei,s=t();for(;;)try{if(-parseInt(n(208))/1+-parseInt(n(209))/2*(parseInt(n(201))/3)+-parseInt(n(204))/4*(parseInt(n(210))/5)+-parseInt(n(214))/6+parseInt(n(203))/7+parseInt(n(200))/8+-parseInt(n(202))/9*(-parseInt(n(186))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ci,604134);const cx={class:is(206)},ax={key:0,class:is(195)};function Ci(){const t=["div","1628300XIYNGX","JoiVw","QamrJ","alXkw","toExit","GTPRF","JeWkA","VywQQ","MenuButton","panel","AEyvg","URaHU","HmniD","WERHV","1448880IapVhz","3cosRAS","54wtgrRf","3974040jyxZSe","4hGTCMu","ZOnze","menuBt","Mvqeh","101333ZJhLsT","269326SajiBk","2448315JCHOLg","CZzdF","value","Инфо","2376102IeZGOQ","Удалить игру"];return Ci=function(){return t},Ci()}function Ei(t,e){const n=Ci();return Ei=function(s,i){return s=s-186,n[s]},Ei(t,e)}const ux=Li({__name:is(194),emits:[is(190)],setup(t,{emit:e}){const n=is,s={JoiVw:function(l,c){return l(c)},Mvqeh:function(l){return l()},alXkw:function(l,c,a,d){return l(c,a,d)},JeWkA:n(216),GTPRF:function(l,c,a,d){return l(c,a,d)},fvyIn:function(l,c,a,d){return l(c,a,d)},HmniD:"button",QamrJ:"menuBt_bt",ZOnze:function(l,c,a,d){return l(c,a,d)},vLWVf:n(215),CZzdF:function(l){return l()},VywQQ:function(l,c,a,d,p){return l(c,a,d,p)},WERHV:function(l,c,a,d,p){return l(c,a,d,p)},URaHU:n(213),pmkEq:function(l,c,a){return l(c,a)},AEyvg:function(l){return l()}},i=e,r=s[n(196)](Ze);function o(l){const c=n;switch(l){case(l=1):s[c(187)](i,c(190));break}r[c(212)]=!1}return(l,c)=>{const a=n;return s.Mvqeh(ie),s[a(189)](de,s[a(192)],cx,[s.GTPRF(v,s[a(192)],null,[s.fvyIn(v,s[a(198)],{class:s[a(188)],onClick:c[0]||(c[0]=d=>r[a(212)]=!r[a(212)])},"❁")]),r[a(212)]?(s[a(207)](ie),s[a(191)](de,s[a(192)],ax,[s[a(205)](v,"a",{onClick:c[1]||(c[1]=d=>o(1))},s.vLWVf),c[2]||(c[2]=s[a(211)](ye)),c[3]||(c[3]=s[a(193)](v,"br",null,null,-1)),c[4]||(c[4]=s[a(199)](v,"a",null,s[a(197)],-1))])):s.pmkEq(Oe,"",!0)])}}}),Ps=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},hx=Ps(ux,[["__scopeId","data-v-ff2e1591"]]),wt=ht;(function(t,e){const n=ht,s=t();for(;;)try{if(-parseInt(n(155))/1*(-parseInt(n(112))/2)+-parseInt(n(136))/3+-parseInt(n(235))/4*(-parseInt(n(156))/5)+parseInt(n(127))/6*(parseInt(n(253))/7)+parseInt(n(124))/8*(parseInt(n(115))/9)+-parseInt(n(195))/10*(-parseInt(n(146))/11)+parseInt(n(247))/12*(-parseInt(n(252))/13)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,806087);function Ii(){const t=["HIRLG","SRmNd","CIFId","vNaPf","lfKgY","Отказаться","MnIuw","/games/","Cpezl","DLhCG","JBOsg","cYryh","Нет ответа, отменяю выбор","GeShL","reload","nick","Wxsfa","guoij","PlVvv","input","iKUDf","sPARc","Mpesl","uTqnO","LiKrc","2ipiTcU","NgbYd","#ddd","2770245ubwuqw","myId","myName","jIdue","SyxuR","PHDoX","getField","Играем","OgMIX","8ITQOYL","tEmnr","ADSnO","1668630LVxiyd","20px","ВСЕ НАСТРОЙКИ ИГРЫ","value","* можете поменять ваш Никнейм","zHPrw","izVVs","larger","gYJiO","4548321ryZPRN","Baqnq","forEach","BinderComp","kQURn","LBcMx","name2","getItem","BMUhb","FPSLU","293546ARBlqd","DTWlo","gameLink","cRlVF","/look/","30px","knZVI","4px"," Зарегистрироваться в поиске ","1538708cCFBXb","2826705QJeADn","ZntkO","::::::: Связывание :::::::","button","chFfP","includes","ZnQVL","wPphD","CrBXg","red-bt","TmtuL","JvwUO","removeField","QdIAA","now","QHroV"," Вас выбрал игрок: ","* nickname не может быть меньше 2 букв","uExlx","setItem","uyPtf","hAnXh","DDZsk","WfYaO","ShdYi","RhjNX","jESIc","eupKL","xvXeg","Играть","vgMbo","TfMeF","Etmcc","udWmA","id2","WtaHo","eUmOr","center","gameNames","20tbhCAD","zOZmJ","setField","rmjhP","Список желающих играть:","context","/look","myNickName","eqWEI","res","nIpvk","onClick","wnCbj","wZOUg","vNvgf","SZxjP","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать",">>>> ANALIZ "," Привет ","green-bt","tklxF","yNKBx","gameId"," ИГРАЙТЕ ВДВОЕМ ","lvDID","ZWBqD","LOlAp","xcrFG","yJWPZ","Сменить nickName","itGul","GZzCY","KARZC","DezeF","oOgFi","red-notice","Crham","gAajF","name","RGpsD","4PecVjK","push","pWkpX","UANSm","small","HrcCk","LFDLG","onValue","Jpanq","VkPHf","mlvvc","FYsVJ","24hwOjjN","log","Согласиться","Вперед","/list/","4545073VzBAWm","14RrHEnw","DWxuW","stage","lXJWa","NfOvh","HygIr","AlhFp","PfqZu","Adsoa","GqbFu","GAIeb","wcvpc","EtNIZ","FMljm","audIv","Нет желающих, отменяю ожидание","uPizb","wduHX","BZmSJ","div","ZZTNa"," с игроком ","LJUzj","xtvzx","lookField","aUXCs","then","DIVMd","accept","slice","pCrui","cmHpC","NdtjP","ZLKpS","ObUIV","OMDdf","length","inLyX","PuJwR","playNumber","hpkpY"];return Ii=function(){return t},Ii()}const fx={key:0},dx={key:1},px={key:2},_x={key:3},gx={key:4},mx={class:wt(230)},xx={key:0},yx=["onClick"],vx={key:5},bx={key:0},Cx=[wt(206)],Ex={key:1,class:wt(230)},Ix={key:6},wx={key:7},Sx={key:8},Tx={style:{"font-size":wt(151)}},Rx={style:{color:"red","font-size":wt(128)}},Nx={key:9},Ax={style:{"font-size":wt(151),background:wt(114)}},Px={key:10};function ht(t,e){const n=Ii();return ht=function(s,i){return s=s-100,n[s]},ht(t,e)}const Dx=!1,Ox=Li({__name:wt(139),setup(t){const e=wt,n={PfqZu:e(202),BZmSJ:function(h,u){return h+u},hAnXh:"/list/",CrBXg:function(h,u){return h===u},zHPrw:function(h,u){return h(u)},uPizb:function(h){return h()},iKUDf:e(212),ADSnO:function(h,u,f){return h(u,f)},KARZC:function(h,u){return h<u},udWmA:e(173),Etmcc:e(150),kXanh:function(h,u){return h==u},eSnjD:function(h,u){return h+u},PzQbr:function(h,u){return h+u},TfMeF:function(h,u){return h+u},GqbFu:function(h,u){return h+u},BMUhb:function(h,u){return h+u},WfYaO:function(h,u){return h+u},cmHpC:function(h,u){return h+u},chFfP:function(h,u){return h>u},NfOvh:function(h,u){return h+u},JZJuP:e(301),wnCbj:function(h,u,f){return h(u,f)},rnODs:function(h,u){return h>u},NdtjP:function(h,u){return h+u},DWxuW:function(h,u){return h+u},kQURn:e(129),mlvvc:function(h,u,f){return h(u,f)},TmtuL:function(h){return h()},nIpvk:function(h,u,f,C,b,k){return h(u,f,C,b,k)},jESIc:e(159),DezeF:e(214),cYryh:function(h){return h()},eupKL:function(h,u,f,C,b,k){return h(u,f,C,b,k)},CgTMS:function(h,u,f,C){return h(u,f,C)},ZLKpS:function(h,u,f,C,b){return h(u,f,C,b)},LFDLG:function(h,u,f){return h(u,f)},Wxsfa:function(h,u){return h+u},PuJwR:function(h,u){return h+u},HIRLG:function(h,u){return h(u)},LiKrc:function(h,u){return h(u)},Imbrm:" : ",audIv:function(h,u,f,C,b){return h(u,f,C,b)},Adsoa:function(h,u){return h+u},wsCjH:function(h,u){return h+u},yJWPZ:" stage:",tEmnr:function(h,u){return h(u)},RhjNX:function(h,u){return h(u)},NgbYd:function(h,u){return h===u},gYJiO:function(h,u){return h(u)},ZZTNa:function(h){return h()},SyxuR:function(h,u,f,C){return h(u,f,C)},Cpezl:function(h,u,f){return h(u,f)},Crham:"div",lvDID:function(h,u,f,C,b){return h(u,f,C,b)},izVVs:function(h,u,f,C,b){return h(u,f,C,b)},APOzf:e(218),sPARc:function(h,u,f,C,b){return h(u,f,C,b)},SRmNd:function(h,u,f,C,b){return h(u,f,C,b)},lXJWa:e(250),rcjRC:function(h,u,f,C,b){return h(u,f,C,b)},WtaHo:function(h,u,f,C,b){return h(u,f,C,b)},sQBiP:function(h,u,f){return h(u,f)},osJYL:function(h,u){return h===u},pCrui:function(h,u){return h(u)},mVcwm:function(h){return h()},wPphD:function(h,u,f,C){return h(u,f,C)},lfKgY:function(h,u){return h(u)},PlVvv:function(h,u,f,C,b){return h(u,f,C,b)},HrcCk:function(h,u,f,C){return h(u,f,C)},wcvpc:function(h,u,f){return h(u,f)},tFQOM:e(106),GAIeb:e(153),hewpR:e(224),DDZsk:function(h,u,f,C,b){return h(u,f,C,b)},wduHX:function(h,u){return h>u},hpkpY:function(h){return h()},ZWBqD:function(h,u,f,C){return h(u,f,C)},knZVI:e(199),pWkpX:function(h,u){return h(u)},FYsVJ:function(h,u,f,C,b){return h(u,f,C,b)},RGpsD:function(h,u,f,C,b){return h(u,f,C,b)},uyPtf:function(h,u,f,C){return h(u,f,C)},JvwUO:e(165),fTGyf:e(154),EtNIZ:function(h,u,f,C,b){return h(u,f,C,b)},QyEFs:function(h,u,f,C,b){return h(u,f,C,b)},GNpaT:e(239),nhrYb:e(211),GeShL:function(h,u,f,C,b){return h(u,f,C,b)},rmjhP:function(h,u,f,C,b){return h(u,f,C,b)},PHDoX:function(h,u){return h===u},zOZmJ:function(h,u){return h(u)},vNvgf:function(h){return h()},eCMPo:function(h,u,f,C){return h(u,f,C)},FMljm:function(h,u,f,C,b){return h(u,f,C,b)},FPSLU:function(h){return h()},xcrFG:"* нельзя выбирать себя",oOgFi:function(h,u,f,C,b){return h(u,f,C,b)},cRlVF:function(h,u){return h===u},AiRKk:function(h,u,f,C,b){return h(u,f,C,b)},itGul:function(h,u){return h(u)},CIFId:"жду пока не откликнится ",wZOUg:e(306),uExlx:function(h,u){return h===u},QHroV:function(h){return h()},IAzFz:function(h,u,f,C){return h(u,f,C)},LOlAp:e(172),OMDdf:function(h,u,f,C,b){return h(u,f,C,b)},xvXeg:function(h,u,f,C,b){return h(u,f,C,b)},ObUIV:function(h,u,f,C){return h(u,f,C)},gAajF:e(299),HygIr:e(249),ShdYi:function(h,u){return h===u},tklxF:function(h,u){return h(u)},OgMIX:function(h){return h()},UANSm:function(h,u,f,C){return h(u,f,C)},uTqnO:e(122),Wtpqp:e(274),guoij:function(h,u,f,C,b){return h(u,f,C,b)},QdIAA:function(h,u,f,C){return h(u,f,C)},IbcTF:function(h,u,f,C,b){return h(u,f,C,b)},VkPHf:function(h,u,f,C){return h(u,f,C)},DTWlo:function(h,u){return h(u)},Baqnq:function(h,u){return h(u)},DLhCG:function(h,u){return h(u)},eUmOr:function(h,u){return h(u)},JBOsg:function(h,u){return h(u)},ZntkO:function(h,u,f){return h(u,f)},xtvzx:function(h,u){return h(u)},Mpesl:function(h,u,f,C){return h(u,f,C)},vNaPf:function(h,u,f,C,b){return h(u,f,C,b)},inLyX:function(h,u){return h(u)},aUXCs:e(102),Jpanq:function(h){return h()},ZnQVL:function(h,u){return h(u)},jIdue:function(h,u,f){return h(u,f)}},s=n[e(209)](tr),i=n[e(290)](Ze,localStorage[e(143)](n[e(260)])||n[e(278)]),r=Ze([]),o=n[e(145)](Ze),l=n[e(243)](Ze),c=Ze(""),a=Ze(""),d=n[e(162)](Ze,e(131)),p=function(){const h=e;i[h(130)]&&localStorage[h(175)](n[h(260)],i[h(130)])};function g(){const h=e;i[h(130)]||(i[h(130)]=s.myName),s[h(121)](n.BZmSJ(n.hAnXh,s[h(116)]))[h(279)](u=>{const f=h,C={MnIuw:f(200)};u&&(o[f(130)]={id:u.id,name:u[f(233)]},s[f(255)]=5,s[f(148)]=u[f(148)],s[f(121)](f(301)+u.gameLink)[f(279)](b=>{const k=f;console[k(248)](C[k(300)],b),s.gameId=b[k(217)],c[k(130)]=b,ve()}))})}const x=function(h){const u=e,f={GZzCY:function(b,k){return b>k},AlhFp:function(b,k){return n[ht(164)](b,k)},DIVMd:function(b,k){return n[ht(164)](b,k)},fQBnE:function(b,k){return n[ht(132)](b,k)},LJUzj:function(b){return n.uPizb(b)},eKxat:function(b,k){return b===k},SZxjP:function(b,k){return n[ht(132)](b,k)}};if(console.log(n[u(107)],h),r[u(130)]=[],n[u(164)](s.stage,0))return!1;s[u(255)]=1;let C=!1;h&&Object.keys(h)[u(138)](b=>{const k=u,W="1|6|3|2|4|0|5|7".split("|");let he=0;for(;;){switch(W[he++]){case"0":f[k(226)](s[k(255)],2)&&!C&&location[k(101)]();continue;case"1":h[b].id2&&f[k(259)](h[b].id2,s[k(116)])&&(o[k(130)]={id:b,name:h[b][k(233)]});continue;case"2":f[k(280)](b,f.fQBnE(String,s[k(116)]))&&b&&(C=!0,s[k(255)]!==3&&(s[k(255)]=2),h[b].id2&&(s[k(255)]=4));continue;case"3":if(f.GZzCY(s[k(255)],3))return!1;continue;case"4":h[b].id2==s[k(116)]&&(C=!0,s.stage=3);continue;case"5":h[b][k(281)]&&f[k(275)](Je);continue;case"6":f.eKxat(b,f[k(210)](String,s[k(116)]))&&(o[k(130)]={id:h[b][k(190)],name:h[b][k(142)]});continue;case"7":b&&h[b]&&r[k(130)][k(236)]({id:b,name:h[b][k(233)]});continue}break}})};n[e(118)](en,()=>s[e(116)],h=>h&&setTimeout(g,500));function w(){const h=e;n[h(269)](O),s[h(255)]=1}function O(){const h=e;s[h(242)](n[h(271)](s[h(217)],h(201))).then(u=>x(u)),n[h(126)](en,()=>s[h(277)],u=>x(u))}function $(){const h=e;if(n[h(227)](i[h(130)].length,2))return d[h(130)]=n[h(189)],!1;s[h(197)](n.BZmSJ(s[h(217)],n[h(188)])+s[h(116)],{name:i[h(130)]})}function j(h){const u=e,f={yNKBx:u(204)};if(n.kXanh(h.id,s[u(116)]))return l[u(130)]=!0,n[u(126)](setTimeout,()=>l[u(130)]=!1,2e3),!1;s.setField(n.eSnjD(n.PzQbr(s[u(217)],n.Etmcc),h.id),{name:h[u(233)],id2:s[u(116)],name2:i[u(130)]||s[u(117)]}).then(C=>{const b=u;console.log(f[b(216)],C),o[b(130)]={id:h.id,name:h[b(233)]},s[b(255)]=3})}function Q(h){const u=e;h&&o[u(130)]&&s[u(197)](n[u(187)](n[u(187)](s.gameId,n[u(188)]),o[u(130)].id),{name:o[u(130)][u(233)],id2:s[u(116)],name2:i[u(130)]||s[u(117)],accept:!0}),!h&&s.setField(n[u(262)](s[u(217)],n[u(188)])+s[u(116)],{name:i[u(130)]||s[u(117)]})[u(279)](()=>s[u(255)]=2)}function ee(){const h=e;s[h(197)](n[h(144)](s[h(217)],n[h(188)])+o[h(130)].id,{name:o[h(130)][h(233)]}).then(()=>s.stage=2)}function F(){const h=e;s[h(168)](n[h(179)](n[h(284)](s[h(217)],n[h(188)]),s.myId)).then(()=>s[h(255)]=0)}function J(){var f;const h=e;debugger;a.value="Хорошо бы сообщить сопернику, что вы ушли из игры";let u=String(o[h(130)].id);n[h(160)](o[h(130)].id,s[h(116)])?u+="::"+s.myId:u=n[h(271)](n[h(144)](s[h(116)],"::"),u),s.removeField(h(251)+s[h(116)]),s.removeField(n[h(262)](n.hAnXh,(f=o[h(130)])==null?void 0:f.id)),s[h(168)](n[h(257)](n.JZJuP,u)),n.wnCbj(setTimeout,()=>location[h(101)](),3e3)}function Je(){var C,b,k;const h=e;let u=Date[h(170)](),f=n[h(132)](String,o[h(130)].id);n.rnODs(o[h(130)].id,s.myId)?f+=n[h(179)]("::",s[h(116)]):f=n[h(285)](n[h(254)](s[h(116)],"::"),f),console[h(248)](h(148),f),s.setField(n.TfMeF(n[h(177)],s[h(116)]),{id:(C=o[h(130)])==null?void 0:C.id,name:(b=o.value)==null?void 0:b[h(233)],gameLink:f,date:u}),s[h(197)](n[h(177)]+((k=o[h(130)])==null?void 0:k.id),{id:s.myId,name:i.value||s[h(117)],gameLink:f,date:u}),s[h(197)](n[h(257)](n.JZJuP,f),{game:n[h(140)],gameId:s[h(217)]}),n[h(245)](setTimeout,()=>{var he;const W=h;s.removeField(s.gameId+W(150)+((he=o[W(130)])==null?void 0:he.id)),s[W(168)](n[W(271)](n[W(271)](s.gameId,n[W(188)]),s[W(116)])),location[W(101)]()},2e3)}function ve(){const h=e;s[h(292)]=+s[h(217)][h(282)](1)}return(h,u)=>{var b,k;const f=e,C={LBcMx:function(W){return n[ht(305)](W)},UCONl:function(W,he,fe,G,se,_t){return n[ht(183)](W,he,fe,G,se,_t)},EbrRj:n[f(182)],eqWEI:n[f(228)],vgMbo:function(W,he){return W(he)}};return ie(),de(Ge,null,[Dx?(n[f(305)](ie),n.CgTMS(de,f(272),fx,[u[10]||(u[10]=n[f(286)](v,"hr",null,null,-1)),u[11]||(u[11]=n[f(286)](v,"i",null,f(158),-1)),u[12]||(u[12]=v("br",null,null,-1)),n[f(241)](ye,n[f(144)](n[f(103)](n[f(291)](" ",n[f(294)](Ke,n[f(111)](Ee,s)[f(116)]))+n.Imbrm,n[f(111)](Ke,i[f(130)]))," "),1),u[13]||(u[13]=n[f(267)](v,"br",null,null,-1)),n[f(245)](ye,n[f(261)](n.wsCjH(n[f(223)],n[f(125)](Ke,n[f(181)](Ee,s)[f(255)]))," "),1),u[14]||(u[14]=v("hr",null,null,-1))])):n[f(207)](Oe,"",!0),n[f(113)](n[f(135)](Ee,s)[f(255)],5)?(n[f(273)](ie),n[f(119)](de,f(272),dx,[Ye(hx,{onToExit:u[0]||(u[0]=W=>J())})])):n[f(302)](Oe,"",!0),Ee(s)[f(255)]===-1?(n.cYryh(ie),n.SyxuR(de,n[f(231)],px,[u[15]||(u[15]=n[f(219)](v,"br",null,null,-1)),u[16]||(u[16]=n[f(133)](v,"br",null,null,-1)),u[17]||(u[17]=v("br",null,null,-1)),u[18]||(u[18]=n[f(219)](v,"br",null,null,-1)),u[19]||(u[19]=n[f(132)](ye,n.APOzf)),u[20]||(u[20]=n[f(108)](v,"br",null,null,-1)),u[21]||(u[21]=v("br",null,null,-1)),u[22]||(u[22]=n[f(295)](v,"br",null,null,-1)),u[23]||(u[23]=v("br",null,null,-1)),v(n.jESIc,{onClick:u[1]||(u[1]=W=>Ee(s)[f(255)]=0)},n[f(256)]),u[24]||(u[24]=n.rcjRC(v,"br",null,null,-1)),u[25]||(u[25]=n[f(191)](v,"br",null,null,-1))])):n.sQBiP(Oe,"",!0),n.osJYL(n[f(283)](Ee,s)[f(255)],0)?(n.mVcwm(ie),n.wPphD(de,n[f(231)],_x,[Ye(lx,{onGameChanged:w})])):n[f(245)](Oe,"",!0),n[f(113)](n[f(298)](Ee,s).stage,1)?(ie(),n[f(163)](de,n[f(231)],gx,[u[29]||(u[29]=n[f(105)](v,"p",null,f(213),-1)),n[f(240)](v,"p",null,[n[f(264)](If,n[f(108)](v,n.tFQOM,{"onUpdate:modelValue":u[2]||(u[2]=W=>i[f(130)]=W),maxlength:"16",minlength:"3",style:{"font-size":f(134),padding:n[f(263)],"text-align":f(193)},onInput:u[3]||(u[3]=W=>p()),placeholder:n.hewpR},null,544),[[Jd,i[f(130)]]])]),n[f(178)](v,n[f(231)],mx,n[f(132)](Ke,d[f(130)]),1),r[f(130)]&&n[f(270)](r.value[f(289)],1)?(n[f(293)](ie),n[f(220)](de,f(272),xx,[u[26]||(u[26]=v("h3",null,n[f(152)],-1)),(n[f(237)](ie,!0),n[f(246)](de,Ge,null,n.mlvvc(fl,r[f(130)],W=>{const he=f;return C[he(141)](ie),C.UCONl(de,C.EbrRj,{class:C[he(203)],key:W.id,onClick:fe=>j(W)},C[he(186)](Ke,W[he(233)]),9,yx)}),128)),u[27]||(u[27]=n[f(286)](v,"br",null,null,-1)),u[28]||(u[28]=n.RGpsD(v,"br",null,null,-1))])):n[f(126)](Oe,"",!0),n[f(176)](v,n[f(182)],{class:n[f(167)],onClick:u[4]||(u[4]=W=>$())},n.fTGyf),u[30]||(u[30]=n[f(133)](v,"br",null,null,-1)),u[31]||(u[31]=n[f(305)](ye)),u[32]||(u[32]=n[f(265)](v,"br",null,null,-1)),u[33]||(u[33]=n.QyEFs(v,n.GNpaT,null,n.nhrYb,-1)),u[34]||(u[34]=n[f(100)](v,"br",null,null,-1)),u[35]||(u[35]=n.rmjhP(v,"br",null,null,-1))])):n[f(264)](Oe,"",!0),n[f(120)](n[f(196)](Ee,s).stage,2)?(n[f(209)](ie),n.eCMPo(de,"div",vx,[u[39]||(u[39]=v("p",null,"Нахожусь в списке, жду соперника",-1)),r.value[f(289)]?(ie(),de(n[f(231)],bx,[u[36]||(u[36]=v("h3",null,n[f(152)],-1)),(n[f(294)](ie,!0),n[f(198)](de,Ge,null,n[f(241)](fl,r[f(130)],W=>{const he=f;return n[he(166)](ie),n[he(205)](de,n[he(182)],{class:n.DezeF,key:W.id,onClick:fe=>j(W)},n[he(132)](Ke,W[he(233)]),9,Cx)}),128)),u[37]||(u[37]=v("br",null,null,-1)),u[38]||(u[38]=n[f(266)](v,"br",null,null,-1))])):Oe("",!0),l.value?(n[f(145)](ie),n.eCMPo(de,n.Crham,Ex,n[f(222)])):n[f(245)](Oe,"",!0),u[40]||(u[40]=v("br",null,null,-1)),u[41]||(u[41]=n[f(267)](v,"br",null,null,-1)),v(n[f(182)],{onClick:u[5]||(u[5]=W=>F())},f(268)),u[42]||(u[42]=n[f(178)](v,"br",null,null,-1)),u[43]||(u[43]=n[f(229)](v,"br",null,null,-1))])):n.wnCbj(Oe,"",!0),n[f(149)](n.pWkpX(Ee,s)[f(255)],3)?(ie(),de(n[f(231)],Ix,[n[f(119)](v,"p",null,[u[44]||(u[44]=n[f(237)](ye," Выбрал игрока ")),u[45]||(u[45]=v("br",null,null,-1)),n[f(100)](v,"b",null,Ke((b=o[f(130)])==null?void 0:b[f(233)]),1),u[46]||(u[46]=n[f(293)](ye)),u[47]||(u[47]=n.AiRKk(v,"br",null,null,-1)),u[48]||(u[48]=n[f(225)](ye,n[f(296)]))]),v(n.jESIc,{onClick:u[6]||(u[6]=W=>ee())},n[f(208)])])):n[f(126)](Oe,"",!0),n[f(174)](n[f(283)](Ee,s)[f(255)],4)&&((k=o.value)!=null&&k.id)?(n[f(171)](ie),n.IAzFz(de,n.Crham,wx,[u[49]||(u[49]=ye(n[f(221)])),u[50]||(u[50]=n[f(108)](v,"br",null,null,-1)),u[51]||(u[51]=v("br",null,null,-1)),n[f(288)](v,"b",null,Ke(o[f(130)][f(233)]),1),u[52]||(u[52]=v("br",null,null,-1)),u[53]||(u[53]=n[f(184)](v,"br",null,null,-1)),n[f(287)](v,n[f(182)],{class:n[f(228)],onClick:u[7]||(u[7]=W=>Q(!1))},n[f(232)]),v(n[f(182)],{class:"green-bt",onClick:u[8]||(u[8]=W=>Q(!0))},n[f(258)])])):n[f(126)](Oe,"",!0),n[f(180)](n[f(215)](Ee,s)[f(255)],5)&&o[f(130)]?(n[f(123)](ie),n[f(238)](de,n[f(231)],Sx,[u[54]||(u[54]=n[f(219)](v,"h3",null,n[f(110)],-1)),u[55]||(u[55]=n.tklxF(ye,n.Wtpqp)),u[56]||(u[56]=n[f(104)](v,"br",null,null,-1)),u[57]||(u[57]=n[f(246)](v,"br",null,null,-1)),n[f(169)](v,n[f(231)],Tx,[n.FYsVJ(v,"b",null,n[f(125)](Ke,o.value[f(233)]),1)]),u[58]||(u[58]=v("br",null,null,-1)),u[59]||(u[59]=n.IbcTF(v,"br",null,null,-1)),n[f(244)](v,n.Crham,Rx,[n.ZLKpS(v,"b",null,n[f(147)](Ke,a.value),1)])])):Oe("",!0),n[f(283)](Ee,s)[f(255)]&&[1,2,3,4,5][f(161)](n[f(137)](Ee,s)[f(255)])?(n[f(305)](ie),n[f(169)](de,n[f(231)],Nx,[u[60]||(u[60]=n[f(267)](v,"hr",null,null,-1)),u[61]||(u[61]=n[f(108)](v,"br",null,null,-1)),n[f(246)](v,n[f(231)],Ax,n[f(303)](Ke,n[f(192)](Ee,s)[f(194)][n[f(304)](Ee,s)[f(217)]]),1),u[62]||(u[62]=n[f(234)](v,"br",null,null,-1)),u[63]||(u[63]=n[f(286)](v,"br",null,null,-1))])):n[f(157)](Oe,"",!0),n[f(276)](Ee,s).stage===5?(ie(),n[f(220)](de,f(272),Px,[n[f(109)](v,n[f(182)],{onClick:u[9]||(u[9]=W=>ve())},f(185))])):n.wcvpc(Oe,"",!0),u[64]||(u[64]=n[f(297)](v,"br",null,null,-1)),u[65]||(u[65]=n[f(105)](v,"br",null,null,-1))],64)}}}),kx={class:"game"},Mx={__name:"StartPage",setup(t){return(e,n)=>(ie(),de("div",kx,[n[0]||(n[0]=v("h1",null,"♕",-1)),v("div",null,[Ye(Ox,{game:"g1"})])]))}},Fx=Ps(Mx,[["__scopeId","data-v-9eccdede"]]),io=wi;function wi(t,e){const n=Si();return wi=function(s,i){return s=s-233,n[s]},wi(t,e)}(function(t,e){const n=wi,s=t();for(;;)try{if(-parseInt(n(248))/1+-parseInt(n(249))/2+parseInt(n(240))/3+parseInt(n(253))/4+-parseInt(n(265))/5*(parseInt(n(233))/6)+parseInt(n(273))/7*(parseInt(n(237))/8)+parseInt(n(261))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Si,482189);function Si(){const t=["lJqFl","rama","NWpeb","100KrpezG","MTdGi","ayEHD","IuBRp","/games/","enwZJ","IPtKx","div","91CeZdne","then","44058PTXzst"," Выбери: ","JDMlP","uoNlM","10424kpcOgJ","ZApZA","gameId","1051746IAWYYA","Бумага","BfCLo","onValue","value","yZmKj","log","StounScissorsPaper","698804amlTpa","1767814VfewhH","Свериться","NDaWy","GXfHt","679660QsvbFD","button","tAHbA","actpk","yTkLf","pXyng","LcasM","/game","15068916wfFgxX"];return Si=function(){return t},Si()}const Lx={class:io(263)},Bx=Li({__name:io(247),setup(t){const e=io,n={xHlBr:"res = ",GXfHt:function(r,o){return r+o},lJqFl:function(r,o){return r+o},DwFnU:e(269),ZApZA:e(260),yZmKj:function(r){return r()},enwZJ:function(r,o,l,c,a){return r(o,l,c,a)},uoNlM:"Камень ножницы бумага",pXyng:function(r,o,l,c,a){return r(o,l,c,a)},eLCYq:function(r,o,l,c,a){return r(o,l,c,a)},rXnUZ:function(r,o){return r(o)},IPtKx:e(234),LcasM:function(r,o){return r===o},BfCLo:"button",yTkLf:function(r,o){return r(o)},tAHbA:function(r,o){return r===o},IuBRp:"Ножницы",actpk:function(r,o){return r(o)},JDMlP:e(241),ayEHD:function(r,o,l,c,a){return r(o,l,c,a)},MTdGi:function(r,o,l,c,a){return r(o,l,c,a)},dbRFH:"green-bt",NDaWy:e(250)},s=tr(),i=n.yTkLf(Ze,0);return bo(()=>{const r=e,o={NWpeb:n.xHlBr};console[r(246)](8888888888888),s[r(243)](n[r(252)](n[r(252)](n[r(262)](s[r(239)],n.DwFnU),s.gameLink),n[r(238)]))[r(274)](l=>{const c=r;console[c(246)](o[c(264)],l)})}),(r,o)=>{const l=e;return n[l(245)](ie),de(l(272),Lx,[o[3]||(o[3]=n.enwZJ(v,"br",null,null,-1)),o[4]||(o[4]=v("h2",null,n[l(236)],-1)),o[5]||(o[5]=n[l(258)](v,"br",null,null,-1)),o[6]||(o[6]=n.eLCYq(v,"br",null,null,-1)),o[7]||(o[7]=n.rXnUZ(ye,n[l(271)])),o[8]||(o[8]=n.enwZJ(v,"br",null,null,-1)),o[9]||(o[9]=v("br",null,null,-1)),o[10]||(o[10]=v("br",null,null,-1)),n[l(270)](v,l(254),{class:n.rXnUZ(mn,{active:n[l(259)](i[l(244)],1)}),onClick:o[0]||(o[0]=c=>i[l(244)]=1)},"Камень",2),o[11]||(o[11]=v("br",null,null,-1)),o[12]||(o[12]=n[l(258)](v,"br",null,null,-1)),n[l(258)](v,n.BfCLo,{class:n[l(257)](mn,{active:n[l(255)](i[l(244)],2)}),onClick:o[1]||(o[1]=c=>i[l(244)]=2)},n[l(268)],2),o[13]||(o[13]=n.eLCYq(v,"br",null,null,-1)),o[14]||(o[14]=n[l(258)](v,"br",null,null,-1)),v(n[l(242)],{class:n[l(256)](mn,{active:n[l(259)](i.value,3)}),onClick:o[2]||(o[2]=c=>i[l(244)]=3)},n[l(235)],2),o[15]||(o[15]=n[l(267)](v,"br",null,null,-1)),o[16]||(o[16]=n[l(266)](v,"br",null,null,-1)),o[17]||(o[17]=n[l(258)](v,"br",null,null,-1)),o[18]||(o[18]=v("br",null,null,-1)),o[19]||(o[19]=v("br",null,null,-1)),o[20]||(o[20]=v("br",null,null,-1)),o[21]||(o[21]=v(n[l(242)],{class:n.dbRFH},n[l(251)],-1))])}}}),Wx=Ps(Bx,[["__scopeId","data-v-6cc223fb"]]),Ux={};function Hx(t,e){return ie(),de(Ge,null,[e[0]||(e[0]=v("h3",null,"Крестики нолики!!!",-1)),e[1]||(e[1]=v("br",null,null,-1)),e[2]||(e[2]=v("br",null,null,-1))],64)}const Vx=Ps(Ux,[["render",Hx]]),jx={};function $x(t,e){return" SeaWar "}const Gx=Ps(jx,[["render",$x]]),zx={__name:"App",setup(t){const e=tr();let n=uf(Fx);en(()=>e.playNumber,i=>{console.log("- - - - - - - res",i),s(i)});function s(i){switch(console.log(i),i){case 1:n.value=Wx;break;case 2:n.value=Vx;break;case 3:n.value=Gx;break}}return bo(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.myId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||0,e.myName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(i,r)=>(ie(),Ba(Wf(Ee(n))))}};function Ti(t,e){const n=Ri();return Ti=function(s,i){return s=s-336,n[s]},Ti(t,e)}const Dc=Ti;(function(t,e){const n=Ti,s=t();for(;;)try{if(-parseInt(n(336))/1*(parseInt(n(341))/2)+-parseInt(n(339))/3+parseInt(n(342))/4*(-parseInt(n(345))/5)+-parseInt(n(347))/6*(parseInt(n(337))/7)+parseInt(n(344))/8+-parseInt(n(348))/9*(-parseInt(n(338))/10)+parseInt(n(346))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ri,889519);const Kx=sp(),Oc=ep(zx);function Ri(){const t=["24UFuNqZ","mount","6759136aaqTXA","751415oJJCYh","20526528bVJirF","1728uLXRat","48213kXNBRv","185582gkDcho","35679vMplDS","1970aAbSMY","964602JWiPnk","#app","2AVnLCR"];return Ri=function(){return t},Ri()}Oc.use(Kx),Oc[Dc(343)](Dc(340));
