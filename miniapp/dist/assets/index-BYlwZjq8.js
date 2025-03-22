function Bs(t,e){const n=Us();return Bs=function(s,i){return s=s-326,n[s]},Bs(t,e)}function Us(){const t=["same-origin","3chdHpT","referrerPolicy","credentials","integrity","type","44740EIzjMP","href","387108OvujKJ",'link[rel="modulepreload"]',"relList","crossOrigin","WVKxr","jEQYl","include","observe","pDpoI","207sLerPi","LINK","226570iVqIsu","28rPnZxm","rel","supports","createElement","aVuJB","1907056gbksVr","link","3090901RYTAvB","childList","addedNodes","omit","1995399giKWMV","use-credentials","3788mdWuhA","30BKCOaR","modulepreload","anonymous"];return Us=function(){return t},Us()}(function(t,e){const n=Bs,s=t();for(;;)try{if(-parseInt(n(328))/1*(-parseInt(n(335))/2)+parseInt(n(358))/3+-parseInt(n(360))/4+-parseInt(n(333))/5*(parseInt(n(361))/6)+parseInt(n(347))/7*(-parseInt(n(352))/8)+parseInt(n(344))/9*(parseInt(n(346))/10)+-parseInt(n(354))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Us,486700),function(){const e=Bs,n={pDpoI:function(o,l){return o!==l},WVKxr:e(355),jEQYl:function(o,l){return o===l},TtCLc:"modulepreload",uvVOu:e(359),WhzwU:e(341),aVuJB:e(326),OKWbg:function(o,l,c){return o(l,c)},eOleg:e(353)},s=document[e(350)](n.eOleg)[e(337)];if(s&&s[e(349)]&&s[e(349)](e(362)))return;for(const o of document.querySelectorAll(e(336)))r(o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(343)](c[l(332)],n[l(339)]))for(const a of c[l(356)])n[l(340)](a.tagName,l(345))&&n[l(340)](a[l(348)],n.TtCLc)&&r(a)})[e(342)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(331)]&&(c.integrity=o.integrity),o.referrerPolicy&&(c[l(329)]=o.referrerPolicy),o[l(338)]===n.uvVOu?c.credentials=n.WhzwU:n[l(340)](o[l(338)],n[l(351)])?c[l(330)]=l(357):c[l(330)]=l(327),c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=i(o);n.OKWbg(fetch,o[l(334)],c)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},dn=[],ct=()=>{},Eh=()=>!1,Ci=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ih=Object.prototype.hasOwnProperty,Z=(t,e)=>Ih.call(t,e),H=Array.isArray,pn=t=>Ei(t)==="[object Map]",Ic=t=>Ei(t)==="[object Set]",B=t=>typeof t=="function",_e=t=>typeof t=="string",Mt=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",wc=t=>(fe(t)||B(t))&&B(t.then)&&B(t.catch),Sc=Object.prototype.toString,Ei=t=>Sc.call(t),wh=t=>Ei(t).slice(8,-1),Tc=t=>Ei(t)==="[object Object]",Xr=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jn=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ii=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sh=/-(\w)/g,Ke=Ii(t=>t.replace(Sh,(e,n)=>n?n.toUpperCase():"")),Th=/\B([A-Z])/g,sn=Ii(t=>t.replace(Th,"-$1").toLowerCase()),wi=Ii(t=>t.charAt(0).toUpperCase()+t.slice(1)),zi=Ii(t=>t?`on${wi(t)}`:""),St=(t,e)=>!Object.is(t,e),Fs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Rc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xo;const Si=()=>Xo||(Xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=_e(s)?Ph(s):Zr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(_e(t)||fe(t))return t}const Rh=/;(?![^(]*\))/g,Nh=/:([^]+)/,Ah=/\/\*[^]*?\*\//g;function Ph(t){const e={};return t.replace(Ah,"").split(Rh).forEach(n=>{if(n){const s=n.split(Nh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function eo(t){let e="";if(_e(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=eo(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dh=Yr(Oh);function Nc(t){return!!t||t===""}const Ac=t=>!!(t&&t.__v_isRef===!0),it=t=>_e(t)?t:t==null?"":H(t)||fe(t)&&(t.toString===Sc||!B(t.toString))?Ac(t)?it(t.value):JSON.stringify(t,Pc,2):String(t),Pc=(t,e)=>Ac(e)?Pc(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Yi(s,r)+" =>"]=i,n),{})}:Ic(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Yi(n))}:Mt(e)?Yi(e):fe(e)&&!H(e)&&!Tc(e)?String(e):e,Yi=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Oc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Dc(t){return new Oc(t)}function kc(){return Ne}function kh(t,e=!1){Ne&&Ne.cleanups.push(t)}let le;const Qi=new WeakSet;class Mc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qi.has(this)&&(Qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zo(this),Wc(this);const e=le,n=Qe;le=this,Qe=!0;try{return this.fn()}finally{Hc(this),le=e,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)so(e);this.deps=this.depsTail=void 0,Zo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yr(this)&&this.run()}get dirty(){return yr(this)}}let Fc=0,$n,Kn;function Lc(t,e=!1){if(t.flags|=8,e){t.next=Kn,Kn=t;return}t.next=$n,$n=t}function to(){Fc++}function no(){if(--Fc>0)return;if(Kn){let e=Kn;for(Kn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$n;){let e=$n;for($n=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Wc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),so(s),Mh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function yr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ns))return;t.globalVersion=ns;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!yr(t)){t.flags&=-3;return}const n=le,s=Qe;le=t,Qe=!0;try{Wc(t);const i=t.fn(t._value);(e.version===0||St(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{le=n,Qe=s,Hc(t),t.flags&=-3}}function so(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)so(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Mh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qe=!0;const Uc=[];function Ft(){Uc.push(Qe),Qe=!1}function Lt(){const t=Uc.pop();Qe=t===void 0?!0:t}function Zo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=le;le=void 0;try{e()}finally{le=n}}}let ns=0;class Fh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class io{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!le||!Qe||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new Fh(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,Vc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(e){this.version++,ns++,this.notify(e)}notify(e){to();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{no()}}}function Vc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Vc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vs=new WeakMap,Qt=Symbol(""),vr=Symbol(""),ss=Symbol("");function Ie(t,e,n){if(Qe&&le){let s=Vs.get(t);s||Vs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new io),i.map=s,i.key=n),i.track()}}function dt(t,e,n,s,i,r){const o=Vs.get(t);if(!o){ns++;return}const l=c=>{c&&c.trigger()};if(to(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&Xr(n);if(c&&n==="length"){const h=Number(s);o.forEach((p,g)=>{(g==="length"||g===ss||!Mt(g)&&g>=h)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ss)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Qt)),pn(t)&&l(o.get(vr)));break;case"delete":c||(l(o.get(Qt)),pn(t)&&l(o.get(vr)));break;case"set":pn(t)&&l(o.get(Qt));break}}no()}function Lh(t,e){const n=Vs.get(t);return n&&n.get(e)}function ln(t){const e=Y(t);return e===t?e:(Ie(e,"iterate",ss),$e(t)?e:e.map(we))}function Ti(t){return Ie(t=Y(t),"iterate",ss),t}const Wh={__proto__:null,[Symbol.iterator](){return Ji(this,Symbol.iterator,we)},concat(...t){return ln(this).concat(...t.map(e=>H(e)?ln(e):e))},entries(){return Ji(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return ht(this,"every",t,e,void 0,arguments)},filter(t,e){return ht(this,"filter",t,e,n=>n.map(we),arguments)},find(t,e){return ht(this,"find",t,e,we,arguments)},findIndex(t,e){return ht(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ht(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return ht(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ht(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xi(this,"includes",t)},indexOf(...t){return Xi(this,"indexOf",t)},join(t){return ln(this).join(t)},lastIndexOf(...t){return Xi(this,"lastIndexOf",t)},map(t,e){return ht(this,"map",t,e,void 0,arguments)},pop(){return Mn(this,"pop")},push(...t){return Mn(this,"push",t)},reduce(t,...e){return el(this,"reduce",t,e)},reduceRight(t,...e){return el(this,"reduceRight",t,e)},shift(){return Mn(this,"shift")},some(t,e){return ht(this,"some",t,e,void 0,arguments)},splice(...t){return Mn(this,"splice",t)},toReversed(){return ln(this).toReversed()},toSorted(t){return ln(this).toSorted(t)},toSpliced(...t){return ln(this).toSpliced(...t)},unshift(...t){return Mn(this,"unshift",t)},values(){return Ji(this,"values",we)}};function Ji(t,e,n){const s=Ti(t),i=s[e]();return s!==t&&!$e(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Hh=Array.prototype;function ht(t,e,n,s,i,r){const o=Ti(t),l=o!==t&&!$e(t),c=o[e];if(c!==Hh[e]){const p=c.apply(t,r);return l?we(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,we(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const h=c.call(o,a,s);return l&&i?i(h):h}function el(t,e,n,s){const i=Ti(t);let r=n;return i!==t&&($e(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,we(l),c,t)}),i[e](r,...s)}function Xi(t,e,n){const s=Y(t);Ie(s,"iterate",ss);const i=s[e](...n);return(i===-1||i===!1)&&lo(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function Mn(t,e,n=[]){Ft(),to();const s=Y(t)[e].apply(t,n);return no(),Lt(),s}const Bh=Yr("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function Uh(t){Mt(t)||(t=String(t));const e=Y(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class $c{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Jh:zc:r?qc:Gc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=Wh[n]))return c;if(n==="hasOwnProperty")return Uh}const l=Reflect.get(e,n,pe(e)?e:s);return(Mt(n)?jc.has(n):Bh(n))||(i||Ie(e,"get",n),r)?l:pe(l)?o&&Xr(n)?l:l.value:fe(l)?i?Yc(l):Ri(l):l}}class Kc extends $c{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Xt(r);if(!$e(s)&&!Xt(s)&&(r=Y(r),s=Y(s)),!H(e)&&pe(r)&&!pe(s))return c?!1:(r.value=s,!0)}const o=H(e)&&Xr(n)?Number(n)<e.length:Z(e,n),l=Reflect.set(e,n,s,pe(e)?e:i);return e===Y(i)&&(o?St(s,r)&&dt(e,"set",n,s):dt(e,"add",n,s)),l}deleteProperty(e,n){const s=Z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&dt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Mt(n)||!jc.has(n))&&Ie(e,"has",n),s}ownKeys(e){return Ie(e,"iterate",H(e)?"length":Qt),Reflect.ownKeys(e)}}class Vh extends $c{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jh=new Kc,$h=new Vh,Kh=new Kc(!0);const br=t=>t,Ns=t=>Reflect.getPrototypeOf(t);function Gh(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=pn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),h=n?br:e?Cr:we;return!e&&Ie(r,"iterate",c?vr:Qt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[h(p[0]),h(p[1])]:h(p),done:g}},[Symbol.iterator](){return this}}}}function As(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qh(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(St(i,l)&&Ie(o,"get",i),Ie(o,"get",l));const{has:c}=Ns(o),a=e?br:t?Cr:we;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ie(Y(i),"iterate",Qt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(St(i,l)&&Ie(o,"has",i),Ie(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Y(l),a=e?br:t?Cr:we;return!t&&Ie(c,"iterate",Qt),l.forEach((h,p)=>i.call(r,a(h),a(p),o))}};return Te(n,t?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(i){!e&&!$e(i)&&!Xt(i)&&(i=Y(i));const r=Y(this);return Ns(r).has.call(r,i)||(r.add(i),dt(r,"add",i,i)),this},set(i,r){!e&&!$e(r)&&!Xt(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=Ns(o);let a=l.call(o,i);a||(i=Y(i),a=l.call(o,i));const h=c.call(o,i);return o.set(i,r),a?St(r,h)&&dt(o,"set",i,r):dt(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Ns(r);let c=o.call(r,i);c||(i=Y(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&dt(r,"delete",i,void 0),a},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&dt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Gh(i,t,e)}),n}function ro(t,e){const n=qh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const zh={get:ro(!1,!1)},Yh={get:ro(!1,!0)},Qh={get:ro(!0,!1)};const Gc=new WeakMap,qc=new WeakMap,zc=new WeakMap,Jh=new WeakMap;function Xh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zh(t){return t.__v_skip||!Object.isExtensible(t)?0:Xh(wh(t))}function Ri(t){return Xt(t)?t:oo(t,!1,jh,zh,Gc)}function ef(t){return oo(t,!1,Kh,Yh,qc)}function Yc(t){return oo(t,!0,$h,Qh,zc)}function oo(t,e,n,s,i){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Zh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Tt(t){return Xt(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function $e(t){return!!(t&&t.__v_isShallow)}function lo(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function co(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Rc(t,"__v_skip",!0),t}const we=t=>fe(t)?Ri(t):t,Cr=t=>fe(t)?Yc(t):t;function pe(t){return t?t.__v_isRef===!0:!1}function qt(t){return Qc(t,!1)}function tf(t){return Qc(t,!0)}function Qc(t,e){return pe(t)?t:new nf(t,e)}class nf{constructor(e,n){this.dep=new io,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:we(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||$e(e)||Xt(e);e=s?e:Y(e),St(e,n)&&(this._rawValue=e,this._value=s?e:we(e),this.dep.trigger())}}function He(t){return pe(t)?t.value:t}const sf={get:(t,e,n)=>e==="__v_raw"?t:He(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Jc(t){return Tt(t)?t:new Proxy(t,sf)}function rf(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=lf(t,n);return e}class of{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Lh(Y(this._object),this._key)}}function lf(t,e,n){const s=t[e];return pe(s)?s:new of(t,e,n)}class cf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new io(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Lc(this,!0),!0}get value(){const e=this.dep.track();return Bc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function af(t,e,n=!1){let s,i;return B(t)?s=t:(s=t.get,i=t.set),new cf(s,i,n)}const Ps={},js=new WeakMap;let $t;function uf(t,e=!1,n=$t){if(n){let s=js.get(n);s||js.set(n,s=[]),s.push(t)}}function hf(t,e,n=se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=M=>i?M:$e(M)||i===!1||i===0?pt(M,1):pt(M);let h,p,g,y,I=!1,O=!1;if(pe(t)?(p=()=>t.value,I=$e(t)):Tt(t)?(p=()=>a(t),I=!0):H(t)?(O=!0,I=t.some(M=>Tt(M)||$e(M)),p=()=>t.map(M=>{if(pe(M))return M.value;if(Tt(M))return a(M);if(B(M))return c?c(M,2):M()})):B(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Ft();try{g()}finally{Lt()}}const M=$t;$t=h;try{return c?c(t,3,[y]):t(y)}finally{$t=M}}:p=ct,e&&i){const M=p,f=i===!0?1/0:i;p=()=>pt(M(),f)}const V=kc(),j=()=>{h.stop(),V&&V.active&&Jr(V.effects,h)};if(r&&e){const M=e;e=(...f)=>{M(...f),j()}}let J=O?new Array(t.length).fill(Ps):Ps;const X=M=>{if(!(!(h.flags&1)||!h.dirty&&!M))if(e){const f=h.run();if(i||I||(O?f.some((u,d)=>St(u,J[d])):St(f,J))){g&&g();const u=$t;$t=h;try{const d=[f,J===Ps?void 0:O&&J[0]===Ps?[]:J,y];c?c(e,3,d):e(...d),J=f}finally{$t=u}}}else h.run()};return l&&l(X),h=new Mc(p),h.scheduler=o?()=>o(X,!1):X,y=M=>uf(M,!1,h),g=h.onStop=()=>{const M=js.get(h);if(M){if(c)c(M,4);else for(const f of M)f();js.delete(h)}},e?s?X(!0):J=h.run():o?o(X.bind(null,!0),!0):h.run(),j.pause=h.pause.bind(h),j.resume=h.resume.bind(h),j.stop=j,j}function pt(t,e=1/0,n){if(e<=0||!fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pe(t))pt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)pt(t[s],e,n);else if(Ic(t)||pn(t))t.forEach(s=>{pt(s,e,n)});else if(Tc(t)){for(const s in t)pt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&pt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xs(t,e,n,s){try{return s?t(...s):t()}catch(i){Ni(i,e,n)}}function at(t,e,n,s){if(B(t)){const i=xs(t,e,n,s);return i&&wc(i)&&i.catch(r=>{Ni(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(at(t[r],e,n,s));return i}}function Ni(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](t,c,a)===!1)return}l=l.parent}if(r){Ft(),xs(r,null,10,[t,c,a]),Lt();return}}ff(t,n,i,s,o)}function ff(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ae=[];let ot=-1;const _n=[];let Et=null,un=0;const Xc=Promise.resolve();let $s=null;function Zc(t){const e=$s||Xc;return t?e.then(this?t.bind(this):t):e}function df(t){let e=ot+1,n=Ae.length;for(;e<n;){const s=e+n>>>1,i=Ae[s],r=is(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ao(t){if(!(t.flags&1)){const e=is(t),n=Ae[Ae.length-1];!n||!(t.flags&2)&&e>=is(n)?Ae.push(t):Ae.splice(df(e),0,t),t.flags|=1,ea()}}function ea(){$s||($s=Xc.then(na))}function pf(t){H(t)?_n.push(...t):Et&&t.id===-1?Et.splice(un+1,0,t):t.flags&1||(_n.push(t),t.flags|=1),ea()}function tl(t,e,n=ot+1){for(;n<Ae.length;n++){const s=Ae[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ae.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ta(t){if(_n.length){const e=[...new Set(_n)].sort((n,s)=>is(n)-is(s));if(_n.length=0,Et){Et.push(...e);return}for(Et=e,un=0;un<Et.length;un++){const n=Et[un];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,un=0}}const is=t=>t.id==null?t.flags&2?-1:1/0:t.id;function na(t){try{for(ot=0;ot<Ae.length;ot++){const e=Ae[ot];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ot<Ae.length;ot++){const e=Ae[ot];e&&(e.flags&=-2)}ot=-1,Ae.length=0,ta(),$s=null,(Ae.length||_n.length)&&na()}}let De=null,sa=null;function Ks(t){const e=De;return De=t,sa=t&&t.type.__scopeId||null,e}function _f(t,e=De,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fl(-1);const r=Ks(e);let o;try{o=t(...i)}finally{Ks(r),s._d&&fl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function gf(t,e){if(De===null)return t;const n=Di(De),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=se]=e[i];r&&(B(r)&&(r={mounted:r,updated:r}),r.deep&&pt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ut(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Ft(),at(c,n,8,[t.el,l,t,e]),Lt())}}const mf=Symbol("_vte"),xf=t=>t.__isTeleport;function uo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,uo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ia(t,e){return B(t)?Te({name:t.name},e,{setup:t}):t}function ra(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gs(t,e,n,s,i=!1){if(H(t)){t.forEach((I,O)=>Gs(I,e&&(H(e)?e[O]:e),n,s,i));return}if(Gn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Di(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,h=l.refs===se?l.refs={}:l.refs,p=l.setupState,g=Y(p),y=p===se?()=>!1:I=>Z(g,I);if(a!=null&&a!==c&&(_e(a)?(h[a]=null,y(a)&&(p[a]=null)):pe(a)&&(a.value=null)),B(c))xs(c,l,12,[o,h]);else{const I=_e(c),O=pe(c);if(I||O){const V=()=>{if(t.f){const j=I?y(c)?p[c]:h[c]:c.value;i?H(j)&&Jr(j,r):H(j)?j.includes(r)||j.push(r):I?(h[c]=[r],y(c)&&(p[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else I?(h[c]=o,y(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(h[t.k]=o))};o?(V.id=-1,Be(V,n)):V()}}}Si().requestIdleCallback;Si().cancelIdleCallback;const Gn=t=>!!t.type.__asyncLoader,oa=t=>t.type.__isKeepAlive;function yf(t,e){la(t,"a",e)}function vf(t,e){la(t,"da",e)}function la(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ai(e,s,n),n){let i=n.parent;for(;i&&i.parent;)oa(i.parent.vnode)&&bf(s,e,n,i),i=i.parent}}function bf(t,e,n,s){const i=Ai(e,t,s,!0);aa(()=>{Jr(s[e],i)},n)}function Ai(t,e,n=Ee,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ft();const l=ys(n),c=at(e,n,t,o);return l(),Lt(),c});return s?i.unshift(r):i.push(r),r}}const yt=t=>(e,n=Ee)=>{(!os||t==="sp")&&Ai(t,(...s)=>e(...s),n)},Cf=yt("bm"),ca=yt("m"),Ef=yt("bu"),If=yt("u"),wf=yt("bum"),aa=yt("um"),Sf=yt("sp"),Tf=yt("rtg"),Rf=yt("rtc");function Nf(t,e=Ee){Ai("ec",t,e)}const Af="components",ua=Symbol.for("v-ndc");function Pf(t){return _e(t)?Of(Af,t,!1)||t:t||ua}function Of(t,e,n=!0,s=!1){const i=De||Ee;if(i){const r=i.type;{const l=vd(r,!1);if(l&&(l===e||l===Ke(e)||l===wi(Ke(e))))return r}const o=nl(i[t]||r[t],e)||nl(i.appContext[t],e);return!o&&s?r:o}}function nl(t,e){return t&&(t[e]||t[Ke(e)]||t[wi(Ke(e))])}function sl(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||_e(t)){const l=o&&Tt(t);let c=!1;l&&(c=!$e(t),t=Ti(t)),i=new Array(t.length);for(let a=0,h=t.length;a<h;a++)i[a]=e(c?we(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(fe(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const h=l[c];i[c]=e(t[h],h,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Er=t=>t?Da(t)?Di(t):Er(t.parent):null,qn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Er(t.parent),$root:t=>Er(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fa(t),$forceUpdate:t=>t.f||(t.f=()=>{ao(t.update)}),$nextTick:t=>t.n||(t.n=Zc.bind(t.proxy)),$watch:t=>td.bind(t)}),Zi=(t,e)=>t!==se&&!t.__isScriptSetup&&Z(t,e),Df={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Zi(s,e))return o[e]=1,s[e];if(i!==se&&Z(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&Z(a,e))return o[e]=3,r[e];if(n!==se&&Z(n,e))return o[e]=4,n[e];Ir&&(o[e]=0)}}const h=qn[e];let p,g;if(h)return e==="$attrs"&&Ie(t.attrs,"get",""),h(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==se&&Z(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Z(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Zi(i,e)?(i[e]=n,!0):s!==se&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&Z(t,o)||Zi(e,o)||(l=r[0])&&Z(l,o)||Z(s,o)||Z(qn,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function il(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ir=!0;function kf(t){const e=fa(t),n=t.proxy,s=t.ctx;Ir=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:h,beforeMount:p,mounted:g,beforeUpdate:y,updated:I,activated:O,deactivated:V,beforeDestroy:j,beforeUnmount:J,destroyed:X,unmounted:M,render:f,renderTracked:u,renderTriggered:d,errorCaptured:x,serverPrefetch:b,expose:te,inheritAttrs:U,components:ne,directives:Ve,filters:Wt}=e;if(a&&Mf(a,s,null),o)for(const G in o){const re=o[G];B(re)&&(s[G]=re.bind(n))}if(i){const G=i.call(n,n);fe(G)&&(t.data=Ri(G))}if(Ir=!0,r)for(const G in r){const re=r[G],Ht=B(re)?re.bind(n,n):B(re.get)?re.get.bind(n,n):ct,Ts=!B(re)&&B(re.set)?re.set.bind(n):ct,Bt=Ma({get:Ht,set:Ts});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Ze=>Bt.value=Ze})}if(l)for(const G in l)ha(l[G],s,n,G);if(c){const G=B(c)?c.call(n):c;Reflect.ownKeys(G).forEach(re=>{Uf(re,G[re])})}h&&rl(h,t,"c");function he(G,re){H(re)?re.forEach(Ht=>G(Ht.bind(n))):re&&G(re.bind(n))}if(he(Cf,p),he(ca,g),he(Ef,y),he(If,I),he(yf,O),he(vf,V),he(Nf,x),he(Rf,u),he(Tf,d),he(wf,J),he(aa,M),he(Sf,b),H(te))if(te.length){const G=t.exposed||(t.exposed={});te.forEach(re=>{Object.defineProperty(G,re,{get:()=>n[re],set:Ht=>n[re]=Ht})})}else t.exposed||(t.exposed={});f&&t.render===ct&&(t.render=f),U!=null&&(t.inheritAttrs=U),ne&&(t.components=ne),Ve&&(t.directives=Ve),b&&ra(t)}function Mf(t,e,n=ct){H(t)&&(t=wr(t));for(const s in t){const i=t[s];let r;fe(i)?"default"in i?r=zn(i.from||s,i.default,!0):r=zn(i.from||s):r=zn(i),pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function rl(t,e,n){at(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ha(t,e,n,s){let i=s.includes(".")?Sa(n,s):()=>n[s];if(_e(t)){const r=e[t];B(r)&&gn(i,r)}else if(B(t))gn(i,t.bind(n));else if(fe(t))if(H(t))t.forEach(r=>ha(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&gn(i,r,t)}}function fa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>qs(c,a,o,!0)),qs(c,e,o)),fe(e)&&r.set(e,c),c}function qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qs(t,r,n,!0),i&&i.forEach(o=>qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ff[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ff={data:ol,props:ll,emits:ll,methods:Vn,computed:Vn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Vn,directives:Vn,watch:Wf,provide:ol,inject:Lf};function ol(t,e){return e?t?function(){return Te(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Lf(t,e){return Vn(wr(t),wr(e))}function wr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?Te(Object.create(null),t,e):e}function ll(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Te(Object.create(null),il(t),il(e??{})):e}function Wf(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function da(){return{app:null,config:{isNativeTag:Eh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hf=0;function Bf(t,e){return function(s,i=null){B(s)||(s=Te({},s)),i!=null&&!fe(i)&&(i=null);const r=da(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Hf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Cd,get config(){return r.config},set config(h){},use(h,...p){return o.has(h)||(h&&B(h.install)?(o.add(h),h.install(a,...p)):B(h)&&(o.add(h),h(a,...p))),a},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),a},component(h,p){return p?(r.components[h]=p,a):r.components[h]},directive(h,p){return p?(r.directives[h]=p,a):r.directives[h]},mount(h,p,g){if(!c){const y=a._ceVNode||Je(s,i);return y.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(y,h,g),c=!0,a._container=h,h.__vue_app__=a,Di(y.component)}},onUnmount(h){l.push(h)},unmount(){c&&(at(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(h,p){return r.provides[h]=p,a},runWithContext(h){const p=Jt;Jt=a;try{return h()}finally{Jt=p}}};return a}}let Jt=null;function Uf(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function zn(t,e,n=!1){const s=Ee||De;if(s||Jt){const i=Jt?Jt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s&&s.proxy):e}}function Vf(){return!!(Ee||De||Jt)}const pa={},_a=()=>Object.create(pa),ga=t=>Object.getPrototypeOf(t)===pa;function jf(t,e,n,s=!1){const i={},r=_a();t.propsDefaults=Object.create(null),ma(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ef(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function $f(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let g=h[p];if(Pi(t.emitsOptions,g))continue;const y=e[g];if(c)if(Z(r,g))y!==r[g]&&(r[g]=y,a=!0);else{const I=Ke(g);i[I]=Sr(c,l,I,y,t,!1)}else y!==r[g]&&(r[g]=y,a=!0)}}}else{ma(t,e,i,r)&&(a=!0);let h;for(const p in l)(!e||!Z(e,p)&&((h=sn(p))===p||!Z(e,h)))&&(c?n&&(n[p]!==void 0||n[h]!==void 0)&&(i[p]=Sr(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!Z(e,p))&&(delete r[p],a=!0)}a&&dt(t.attrs,"set","")}function ma(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(jn(c))continue;const a=e[c];let h;i&&Z(i,h=Ke(c))?!r||!r.includes(h)?n[h]=a:(l||(l={}))[h]=a:Pi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||se;for(let h=0;h<r.length;h++){const p=r[h];n[p]=Sr(i,c,p,a[p],t,!Z(a,p))}}return o}function Sr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Z(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&B(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const h=ys(i);s=a[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===sn(n))&&(s=!0))}return s}const Kf=new WeakMap;function xa(t,e,n=!1){const s=n?Kf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!B(t)){const h=p=>{c=!0;const[g,y]=xa(p,e,!0);Te(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return fe(t)&&s.set(t,dn),dn;if(H(r))for(let h=0;h<r.length;h++){const p=Ke(r[h]);cl(p)&&(o[p]=se)}else if(r)for(const h in r){const p=Ke(h);if(cl(p)){const g=r[h],y=o[p]=H(g)||B(g)?{type:g}:Te({},g),I=y.type;let O=!1,V=!0;if(H(I))for(let j=0;j<I.length;++j){const J=I[j],X=B(J)&&J.name;if(X==="Boolean"){O=!0;break}else X==="String"&&(V=!1)}else O=B(I)&&I.name==="Boolean";y[0]=O,y[1]=V,(O||Z(y,"default"))&&l.push(p)}}const a=[o,l];return fe(t)&&s.set(t,a),a}function cl(t){return t[0]!=="$"&&!jn(t)}const ya=t=>t[0]==="_"||t==="$stable",ho=t=>H(t)?t.map(lt):[lt(t)],Gf=(t,e,n)=>{if(e._n)return e;const s=_f((...i)=>ho(e(...i)),n);return s._c=!1,s},va=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ya(i))continue;const r=t[i];if(B(r))e[i]=Gf(i,r,s);else if(r!=null){const o=ho(r);e[i]=()=>o}}},ba=(t,e)=>{const n=ho(e);t.slots.default=()=>n},Ca=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},qf=(t,e,n)=>{const s=t.slots=_a();if(t.vnode.shapeFlag&32){const i=e._;i?(Ca(s,e,n),n&&Rc(s,"_",i,!0)):va(e,s)}else e&&ba(t,e)},zf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ca(i,e,n):(r=!e.$stable,va(e,i)),o=e}else e&&(ba(t,e),o={default:1});if(r)for(const l in i)!ya(l)&&o[l]==null&&delete i[l]},Be=cd;function Yf(t){return Qf(t)}function Qf(t,e){const n=Si();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:h,parentNode:p,nextSibling:g,setScopeId:y=ct,insertStaticContent:I}=t,O=(_,m,v,w=null,C=null,E=null,A=void 0,N=null,R=!!m.dynamicChildren)=>{if(_===m)return;_&&!Fn(_,m)&&(w=Rs(_),Ze(_,C,E,!0),_=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:S,ref:F,shapeFlag:P}=m;switch(S){case Oi:V(_,m,v,w);break;case Zt:j(_,m,v,w);break;case tr:_==null&&J(m,v,w,A);break;case je:ne(_,m,v,w,C,E,A,N,R);break;default:P&1?f(_,m,v,w,C,E,A,N,R):P&6?Ve(_,m,v,w,C,E,A,N,R):(P&64||P&128)&&S.process(_,m,v,w,C,E,A,N,R,Dn)}F!=null&&C&&Gs(F,_&&_.ref,E,m||_,!m)},V=(_,m,v,w)=>{if(_==null)s(m.el=l(m.children),v,w);else{const C=m.el=_.el;m.children!==_.children&&a(C,m.children)}},j=(_,m,v,w)=>{_==null?s(m.el=c(m.children||""),v,w):m.el=_.el},J=(_,m,v,w)=>{[_.el,_.anchor]=I(_.children,m,v,w,_.el,_.anchor)},X=({el:_,anchor:m},v,w)=>{let C;for(;_&&_!==m;)C=g(_),s(_,v,w),_=C;s(m,v,w)},M=({el:_,anchor:m})=>{let v;for(;_&&_!==m;)v=g(_),i(_),_=v;i(m)},f=(_,m,v,w,C,E,A,N,R)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),_==null?u(m,v,w,C,E,A,N,R):b(_,m,C,E,A,N,R)},u=(_,m,v,w,C,E,A,N)=>{let R,S;const{props:F,shapeFlag:P,transition:k,dirs:W}=_;if(R=_.el=o(_.type,E,F&&F.is,F),P&8?h(R,_.children):P&16&&x(_.children,R,null,w,C,er(_,E),A,N),W&&Ut(_,null,w,"created"),d(R,_,_.scopeId,A,w),F){for(const oe in F)oe!=="value"&&!jn(oe)&&r(R,oe,null,F[oe],E,w);"value"in F&&r(R,"value",null,F.value,E),(S=F.onVnodeBeforeMount)&&st(S,w,_)}W&&Ut(_,null,w,"beforeMount");const z=Jf(C,k);z&&k.beforeEnter(R),s(R,m,v),((S=F&&F.onVnodeMounted)||z||W)&&Be(()=>{S&&st(S,w,_),z&&k.enter(R),W&&Ut(_,null,w,"mounted")},C)},d=(_,m,v,w,C)=>{if(v&&y(_,v),w)for(let E=0;E<w.length;E++)y(_,w[E]);if(C){let E=C.subTree;if(m===E||Ra(E.type)&&(E.ssContent===m||E.ssFallback===m)){const A=C.vnode;d(_,A,A.scopeId,A.slotScopeIds,C.parent)}}},x=(_,m,v,w,C,E,A,N,R=0)=>{for(let S=R;S<_.length;S++){const F=_[S]=N?It(_[S]):lt(_[S]);O(null,F,m,v,w,C,E,A,N)}},b=(_,m,v,w,C,E,A)=>{const N=m.el=_.el;let{patchFlag:R,dynamicChildren:S,dirs:F}=m;R|=_.patchFlag&16;const P=_.props||se,k=m.props||se;let W;if(v&&Vt(v,!1),(W=k.onVnodeBeforeUpdate)&&st(W,v,m,_),F&&Ut(m,_,v,"beforeUpdate"),v&&Vt(v,!0),(P.innerHTML&&k.innerHTML==null||P.textContent&&k.textContent==null)&&h(N,""),S?te(_.dynamicChildren,S,N,v,w,er(m,C),E):A||re(_,m,N,null,v,w,er(m,C),E,!1),R>0){if(R&16)U(N,P,k,v,C);else if(R&2&&P.class!==k.class&&r(N,"class",null,k.class,C),R&4&&r(N,"style",P.style,k.style,C),R&8){const z=m.dynamicProps;for(let oe=0;oe<z.length;oe++){const ee=z[oe],Le=P[ee],Oe=k[ee];(Oe!==Le||ee==="value")&&r(N,ee,Le,Oe,C,v)}}R&1&&_.children!==m.children&&h(N,m.children)}else!A&&S==null&&U(N,P,k,v,C);((W=k.onVnodeUpdated)||F)&&Be(()=>{W&&st(W,v,m,_),F&&Ut(m,_,v,"updated")},w)},te=(_,m,v,w,C,E,A)=>{for(let N=0;N<m.length;N++){const R=_[N],S=m[N],F=R.el&&(R.type===je||!Fn(R,S)||R.shapeFlag&70)?p(R.el):v;O(R,S,F,null,w,C,E,A,!0)}},U=(_,m,v,w,C)=>{if(m!==v){if(m!==se)for(const E in m)!jn(E)&&!(E in v)&&r(_,E,m[E],null,C,w);for(const E in v){if(jn(E))continue;const A=v[E],N=m[E];A!==N&&E!=="value"&&r(_,E,N,A,C,w)}"value"in v&&r(_,"value",m.value,v.value,C)}},ne=(_,m,v,w,C,E,A,N,R)=>{const S=m.el=_?_.el:l(""),F=m.anchor=_?_.anchor:l("");let{patchFlag:P,dynamicChildren:k,slotScopeIds:W}=m;W&&(N=N?N.concat(W):W),_==null?(s(S,v,w),s(F,v,w),x(m.children||[],v,F,C,E,A,N,R)):P>0&&P&64&&k&&_.dynamicChildren?(te(_.dynamicChildren,k,v,C,E,A,N),(m.key!=null||C&&m===C.subTree)&&Ea(_,m,!0)):re(_,m,v,F,C,E,A,N,R)},Ve=(_,m,v,w,C,E,A,N,R)=>{m.slotScopeIds=N,_==null?m.shapeFlag&512?C.ctx.activate(m,v,w,A,R):Wt(m,v,w,C,E,A,R):on(_,m,R)},Wt=(_,m,v,w,C,E,A)=>{const N=_.component=_d(_,w,C);if(oa(_)&&(N.ctx.renderer=Dn),gd(N,!1,A),N.asyncDep){if(C&&C.registerDep(N,he,A),!_.el){const R=N.subTree=Je(Zt);j(null,R,m,v)}}else he(N,_,m,v,C,E,A)},on=(_,m,v)=>{const w=m.component=_.component;if(od(_,m,v))if(w.asyncDep&&!w.asyncResolved){G(w,m,v);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},he=(_,m,v,w,C,E,A)=>{const N=()=>{if(_.isMounted){let{next:P,bu:k,u:W,parent:z,vnode:oe}=_;{const tt=Ia(_);if(tt){P&&(P.el=oe.el,G(_,P,A)),tt.asyncDep.then(()=>{_.isUnmounted||N()});return}}let ee=P,Le;Vt(_,!1),P?(P.el=oe.el,G(_,P,A)):P=oe,k&&Fs(k),(Le=P.props&&P.props.onVnodeBeforeUpdate)&&st(Le,z,P,oe),Vt(_,!0);const Oe=ul(_),et=_.subTree;_.subTree=Oe,O(et,Oe,p(et.el),Rs(et),_,C,E),P.el=Oe.el,ee===null&&ld(_,Oe.el),W&&Be(W,C),(Le=P.props&&P.props.onVnodeUpdated)&&Be(()=>st(Le,z,P,oe),C)}else{let P;const{el:k,props:W}=m,{bm:z,m:oe,parent:ee,root:Le,type:Oe}=_,et=Gn(m);Vt(_,!1),z&&Fs(z),!et&&(P=W&&W.onVnodeBeforeMount)&&st(P,ee,m),Vt(_,!0);{Le.ce&&Le.ce._injectChildStyle(Oe);const tt=_.subTree=ul(_);O(null,tt,v,w,_,C,E),m.el=tt.el}if(oe&&Be(oe,C),!et&&(P=W&&W.onVnodeMounted)){const tt=m;Be(()=>st(P,ee,tt),C)}(m.shapeFlag&256||ee&&Gn(ee.vnode)&&ee.vnode.shapeFlag&256)&&_.a&&Be(_.a,C),_.isMounted=!0,m=v=w=null}};_.scope.on();const R=_.effect=new Mc(N);_.scope.off();const S=_.update=R.run.bind(R),F=_.job=R.runIfDirty.bind(R);F.i=_,F.id=_.uid,R.scheduler=()=>ao(F),Vt(_,!0),S()},G=(_,m,v)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,$f(_,m.props,w,v),zf(_,m.children,v),Ft(),tl(_),Lt()},re=(_,m,v,w,C,E,A,N,R=!1)=>{const S=_&&_.children,F=_?_.shapeFlag:0,P=m.children,{patchFlag:k,shapeFlag:W}=m;if(k>0){if(k&128){Ts(S,P,v,w,C,E,A,N,R);return}else if(k&256){Ht(S,P,v,w,C,E,A,N,R);return}}W&8?(F&16&&On(S,C,E),P!==S&&h(v,P)):F&16?W&16?Ts(S,P,v,w,C,E,A,N,R):On(S,C,E,!0):(F&8&&h(v,""),W&16&&x(P,v,w,C,E,A,N,R))},Ht=(_,m,v,w,C,E,A,N,R)=>{_=_||dn,m=m||dn;const S=_.length,F=m.length,P=Math.min(S,F);let k;for(k=0;k<P;k++){const W=m[k]=R?It(m[k]):lt(m[k]);O(_[k],W,v,null,C,E,A,N,R)}S>F?On(_,C,E,!0,!1,P):x(m,v,w,C,E,A,N,R,P)},Ts=(_,m,v,w,C,E,A,N,R)=>{let S=0;const F=m.length;let P=_.length-1,k=F-1;for(;S<=P&&S<=k;){const W=_[S],z=m[S]=R?It(m[S]):lt(m[S]);if(Fn(W,z))O(W,z,v,null,C,E,A,N,R);else break;S++}for(;S<=P&&S<=k;){const W=_[P],z=m[k]=R?It(m[k]):lt(m[k]);if(Fn(W,z))O(W,z,v,null,C,E,A,N,R);else break;P--,k--}if(S>P){if(S<=k){const W=k+1,z=W<F?m[W].el:w;for(;S<=k;)O(null,m[S]=R?It(m[S]):lt(m[S]),v,z,C,E,A,N,R),S++}}else if(S>k)for(;S<=P;)Ze(_[S],C,E,!0),S++;else{const W=S,z=S,oe=new Map;for(S=z;S<=k;S++){const We=m[S]=R?It(m[S]):lt(m[S]);We.key!=null&&oe.set(We.key,S)}let ee,Le=0;const Oe=k-z+1;let et=!1,tt=0;const kn=new Array(Oe);for(S=0;S<Oe;S++)kn[S]=0;for(S=W;S<=P;S++){const We=_[S];if(Le>=Oe){Ze(We,C,E,!0);continue}let nt;if(We.key!=null)nt=oe.get(We.key);else for(ee=z;ee<=k;ee++)if(kn[ee-z]===0&&Fn(We,m[ee])){nt=ee;break}nt===void 0?Ze(We,C,E,!0):(kn[nt-z]=S+1,nt>=tt?tt=nt:et=!0,O(We,m[nt],v,null,C,E,A,N,R),Le++)}const Qo=et?Xf(kn):dn;for(ee=Qo.length-1,S=Oe-1;S>=0;S--){const We=z+S,nt=m[We],Jo=We+1<F?m[We+1].el:w;kn[S]===0?O(null,nt,v,Jo,C,E,A,N,R):et&&(ee<0||S!==Qo[ee]?Bt(nt,v,Jo,2):ee--)}}},Bt=(_,m,v,w,C=null)=>{const{el:E,type:A,transition:N,children:R,shapeFlag:S}=_;if(S&6){Bt(_.component.subTree,m,v,w);return}if(S&128){_.suspense.move(m,v,w);return}if(S&64){A.move(_,m,v,Dn);return}if(A===je){s(E,m,v);for(let P=0;P<R.length;P++)Bt(R[P],m,v,w);s(_.anchor,m,v);return}if(A===tr){X(_,m,v);return}if(w!==2&&S&1&&N)if(w===0)N.beforeEnter(E),s(E,m,v),Be(()=>N.enter(E),C);else{const{leave:P,delayLeave:k,afterLeave:W}=N,z=()=>s(E,m,v),oe=()=>{P(E,()=>{z(),W&&W()})};k?k(E,z,oe):oe()}else s(E,m,v)},Ze=(_,m,v,w=!1,C=!1)=>{const{type:E,props:A,ref:N,children:R,dynamicChildren:S,shapeFlag:F,patchFlag:P,dirs:k,cacheIndex:W}=_;if(P===-2&&(C=!1),N!=null&&Gs(N,null,v,_,!0),W!=null&&(m.renderCache[W]=void 0),F&256){m.ctx.deactivate(_);return}const z=F&1&&k,oe=!Gn(_);let ee;if(oe&&(ee=A&&A.onVnodeBeforeUnmount)&&st(ee,m,_),F&6)Ch(_.component,v,w);else{if(F&128){_.suspense.unmount(v,w);return}z&&Ut(_,null,m,"beforeUnmount"),F&64?_.type.remove(_,m,v,Dn,w):S&&!S.hasOnce&&(E!==je||P>0&&P&64)?On(S,m,v,!1,!0):(E===je&&P&384||!C&&F&16)&&On(R,m,v),w&&zo(_)}(oe&&(ee=A&&A.onVnodeUnmounted)||z)&&Be(()=>{ee&&st(ee,m,_),z&&Ut(_,null,m,"unmounted")},v)},zo=_=>{const{type:m,el:v,anchor:w,transition:C}=_;if(m===je){bh(v,w);return}if(m===tr){M(_);return}const E=()=>{i(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(_.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:N}=C,R=()=>A(v,E);N?N(_.el,E,R):R()}else E()},bh=(_,m)=>{let v;for(;_!==m;)v=g(_),i(_),_=v;i(m)},Ch=(_,m,v)=>{const{bum:w,scope:C,job:E,subTree:A,um:N,m:R,a:S}=_;al(R),al(S),w&&Fs(w),C.stop(),E&&(E.flags|=8,Ze(A,_,m,v)),N&&Be(N,m),Be(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},On=(_,m,v,w=!1,C=!1,E=0)=>{for(let A=E;A<_.length;A++)Ze(_[A],m,v,w,C)},Rs=_=>{if(_.shapeFlag&6)return Rs(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),v=m&&m[mf];return v?g(v):m};let qi=!1;const Yo=(_,m,v)=>{_==null?m._vnode&&Ze(m._vnode,null,null,!0):O(m._vnode||null,_,m,null,null,null,v),m._vnode=_,qi||(qi=!0,tl(),ta(),qi=!1)},Dn={p:O,um:Ze,m:Bt,r:zo,mt:Wt,mc:x,pc:re,pbc:te,n:Rs,o:t};return{render:Yo,hydrate:void 0,createApp:Bf(Yo)}}function er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ea(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=It(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ea(o,l)),l.type===Oi&&(l.el=o.el)}}function Xf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ia(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ia(e)}function al(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zf=Symbol.for("v-scx"),ed=()=>zn(Zf);function gn(t,e,n){return wa(t,e,n)}function wa(t,e,n=se){const{immediate:s,deep:i,flush:r,once:o}=n,l=Te({},n),c=e&&s||!e&&r!=="post";let a;if(os){if(r==="sync"){const y=ed();a=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=ct,y.resume=ct,y.pause=ct,y}}const h=Ee;l.call=(y,I,O)=>at(y,h,I,O);let p=!1;r==="post"?l.scheduler=y=>{Be(y,h&&h.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(y,I)=>{I?y():ao(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,h&&(y.id=h.uid,y.i=h))};const g=hf(t,e,l);return os&&(a?a.push(g):c&&g()),g}function td(t,e,n){const s=this.proxy,i=_e(t)?t.includes(".")?Sa(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=ys(this),l=wa(i,r.bind(s),n);return o(),l}function Sa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const nd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ke(e)}Modifiers`]||t[`${sn(e)}Modifiers`];function sd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&nd(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>_e(h)?h.trim():h)),o.number&&(i=n.map(xr)));let l,c=s[l=zi(e)]||s[l=zi(Ke(e))];!c&&r&&(c=s[l=zi(sn(e))]),c&&at(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,at(a,t,6,i)}}function Ta(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!B(t)){const c=a=>{const h=Ta(a,e,!0);h&&(l=!0,Te(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(fe(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Te(o,r),fe(t)&&s.set(t,o),o)}function Pi(t,e){return!t||!Ci(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,sn(e))||Z(t,e))}function ul(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:h,props:p,data:g,setupState:y,ctx:I,inheritAttrs:O}=t,V=Ks(t);let j,J;try{if(n.shapeFlag&4){const M=i||s,f=M;j=lt(a.call(f,M,h,p,y,g,I)),J=l}else{const M=e;j=lt(M.length>1?M(p,{attrs:l,slots:o,emit:c}):M(p,null)),J=e.props?l:id(l)}}catch(M){Yn.length=0,Ni(M,t,1),j=Je(Zt)}let X=j;if(J&&O!==!1){const M=Object.keys(J),{shapeFlag:f}=X;M.length&&f&7&&(r&&M.some(Qr)&&(J=rd(J,r)),X=vn(X,J,!1,!0))}return n.dirs&&(X=vn(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&uo(X,n.transition),j=X,Ks(V),j}const id=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ci(n))&&((e||(e={}))[n]=t[n]);return e},rd=(t,e)=>{const n={};for(const s in t)(!Qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function od(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?hl(s,o,a):!!o;if(c&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const g=h[p];if(o[g]!==s[g]&&!Pi(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?hl(s,o,a):!0:!!o;return!1}function hl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Pi(n,r))return!0}return!1}function ld({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ra=t=>t.__isSuspense;function cd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):pf(t)}const je=Symbol.for("v-fgt"),Oi=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),Yn=[];let Ue=null;function ge(t=!1){Yn.push(Ue=t?null:[])}function ad(){Yn.pop(),Ue=Yn[Yn.length-1]||null}let rs=1;function fl(t,e=!1){rs+=t,t<0&&Ue&&e&&(Ue.hasOnce=!0)}function Na(t){return t.dynamicChildren=rs>0?Ue||dn:null,ad(),rs>0&&Ue&&Ue.push(t),t}function ye(t,e,n,s,i,r){return Na(D(t,e,n,s,i,r,!0))}function Aa(t,e,n,s,i){return Na(Je(t,e,n,s,i,!0))}function Pa(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const Oa=({key:t})=>t??null,Ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||pe(t)||B(t)?{i:De,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,s=0,i=null,r=t===je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oa(e),ref:e&&Ls(e),scopeId:sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return l?(fo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),rs>0&&!o&&Ue&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ue.push(c),c}const Je=ud;function ud(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ua)&&(t=Zt),Pa(t)){const l=vn(t,e,!0);return n&&fo(l,n),rs>0&&!r&&Ue&&(l.shapeFlag&6?Ue[Ue.indexOf(t)]=l:Ue.push(l)),l.patchFlag=-2,l}if(bd(t)&&(t=t.__vccOpts),e){e=hd(e);let{class:l,style:c}=e;l&&!_e(l)&&(e.class=eo(l)),fe(c)&&(lo(c)&&!H(c)&&(c=Te({},c)),e.style=Zr(c))}const o=_e(t)?1:Ra(t)?128:xf(t)?64:fe(t)?4:B(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function hd(t){return t?lo(t)||ga(t)?Te({},t):t:null}function vn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?fd(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Oa(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Ls(e)):[r,Ls(e)]:Ls(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&uo(h,c.clone(h)),h}function rt(t=" ",e=0){return Je(Oi,null,t,e)}function Ge(t="",e=!1){return e?(ge(),Aa(Zt,null,t)):Je(Zt,null,t)}function lt(t){return t==null||typeof t=="boolean"?Je(Zt):H(t)?Je(je,null,t.slice()):Pa(t)?It(t):Je(Oi,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function fo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ga(e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function fd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=eo([e.class,s.class]));else if(i==="style")e.style=Zr([e.style,s.style]);else if(Ci(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){at(t,e,7,[n,s])}const dd=da();let pd=0;function _d(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||dd,r={uid:pd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xa(s,i),emitsOptions:Ta(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sd.bind(null,r),t.ce&&t.ce(r),r}let Ee=null,zs,Tr;{const t=Si(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};zs=e("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Tr=e("__VUE_SSR_SETTERS__",n=>os=n)}const ys=t=>{const e=Ee;return zs(t),t.scope.on(),()=>{t.scope.off(),zs(e)}},dl=()=>{Ee&&Ee.scope.off(),zs(null)};function Da(t){return t.vnode.shapeFlag&4}let os=!1;function gd(t,e=!1,n=!1){e&&Tr(e);const{props:s,children:i}=t.vnode,r=Da(t);jf(t,s,r,e),qf(t,i,n);const o=r?md(t,e):void 0;return e&&Tr(!1),o}function md(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Df);const{setup:s}=n;if(s){Ft();const i=t.setupContext=s.length>1?yd(t):null,r=ys(t),o=xs(s,t,0,[t.props,i]),l=wc(o);if(Lt(),r(),(l||t.sp)&&!Gn(t)&&ra(t),l){if(o.then(dl,dl),e)return o.then(c=>{pl(t,c)}).catch(c=>{Ni(c,t,0)});t.asyncDep=o}else pl(t,o)}else ka(t)}function pl(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Jc(e)),ka(t)}function ka(t,e,n){const s=t.type;t.render||(t.render=s.render||ct);{const i=ys(t);Ft();try{kf(t)}finally{Lt(),i()}}}const xd={get(t,e){return Ie(t,"get",""),t[e]}};function yd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xd),slots:t.slots,emit:t.emit,expose:e}}function Di(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jc(co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qn)return qn[n](t)},has(e,n){return n in e||n in qn}})):t.proxy}function vd(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function bd(t){return B(t)&&"__vccOpts"in t}const Ma=(t,e)=>af(t,e,os),Cd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rr;const _l=typeof window<"u"&&window.trustedTypes;if(_l)try{Rr=_l.createPolicy("vue",{createHTML:t=>t})}catch{}const Fa=Rr?t=>Rr.createHTML(t):t=>t,Ed="http://www.w3.org/2000/svg",Id="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,gl=ft&&ft.createElement("template"),wd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ft.createElementNS(Ed,t):e==="mathml"?ft.createElementNS(Id,t):n?ft.createElement(t,{is:n}):ft.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ft.createTextNode(t),createComment:t=>ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gl.innerHTML=Fa(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=gl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Sd=Symbol("_vtc");function Td(t,e,n){const s=t[Sd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ml=Symbol("_vod"),Rd=Symbol("_vsh"),Nd=Symbol(""),Ad=/(^|;)\s*display\s*:/;function Pd(t,e,n){const s=t.style,i=_e(n);let r=!1;if(n&&!i){if(e)if(_e(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ws(s,l,"")}else for(const o in e)n[o]==null&&Ws(s,o,"");for(const o in n)o==="display"&&(r=!0),Ws(s,o,n[o])}else if(i){if(e!==n){const o=s[Nd];o&&(n+=";"+o),s.cssText=n,r=Ad.test(n)}}else e&&t.removeAttribute("style");ml in t&&(t[ml]=r?s.display:"",t[Rd]&&(s.display="none"))}const xl=/\s*!important$/;function Ws(t,e,n){if(H(n))n.forEach(s=>Ws(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Od(t,e);xl.test(n)?t.setProperty(sn(s),n.replace(xl,""),"important"):t[s]=n}}const yl=["Webkit","Moz","ms"],nr={};function Od(t,e){const n=nr[e];if(n)return n;let s=Ke(e);if(s!=="filter"&&s in t)return nr[e]=s;s=wi(s);for(let i=0;i<yl.length;i++){const r=yl[i]+s;if(r in t)return nr[e]=r}return e}const vl="http://www.w3.org/1999/xlink";function bl(t,e,n,s,i,r=Dh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vl,e.slice(6,e.length)):t.setAttributeNS(vl,e,n):n==null||r&&!Nc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Mt(n)?String(n):n)}function Cl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fa(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Nc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function hn(t,e,n,s){t.addEventListener(e,n,s)}function Dd(t,e,n,s){t.removeEventListener(e,n,s)}const El=Symbol("_vei");function kd(t,e,n,s,i=null){const r=t[El]||(t[El]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Md(e);if(s){const a=r[e]=Wd(s,i);hn(t,l,a,c)}else o&&(Dd(t,l,o,c),r[e]=void 0)}}const Il=/(?:Once|Passive|Capture)$/;function Md(t){let e;if(Il.test(t)){e={};let s;for(;s=t.match(Il);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let sr=0;const Fd=Promise.resolve(),Ld=()=>sr||(Fd.then(()=>sr=0),sr=Date.now());function Wd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;at(Hd(s,n.value),e,5,[s])};return n.value=t,n.attached=Ld(),n}function Hd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Td(t,s,o):e==="style"?Pd(t,n,s):Ci(e)?Qr(e)||kd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ud(t,e,s,o))?(Cl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_e(s))?Cl(t,Ke(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bl(t,e,s,o))};function Ud(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wl(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wl(e)&&_e(n)?!1:e in t}const Sl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Fs(e,n):e};function Vd(t){t.target.composing=!0}function Tl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ir=Symbol("_assign"),jd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ir]=Sl(i);const r=s||i.props&&i.props.type==="number";hn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=xr(l)),t[ir](l)}),n&&hn(t,"change",()=>{t.value=t.value.trim()}),e||(hn(t,"compositionstart",Vd),hn(t,"compositionend",Tl),hn(t,"change",Tl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[ir]=Sl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?xr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},$d=Te({patchProp:Bd},wd);let Rl;function Kd(){return Rl||(Rl=Yf($d))}const Gd=(...t)=>{const e=Kd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=zd(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,qd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function qd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zd(t){return _e(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let La;const ki=t=>La=t,Wa=Symbol();function Nr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qn||(Qn={}));function Yd(){const t=Dc(!0),e=t.run(()=>qt({}));let n=[],s=[];const i=co({install(r){ki(i),i._a=r,r.provide(Wa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ha=()=>{};function Nl(t,e,n,s=Ha){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&kc()&&kh(i),i}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}const Qd=t=>t(),Al=Symbol(),rr=Symbol();function Ar(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Nr(i)&&Nr(s)&&t.hasOwnProperty(n)&&!pe(s)&&!Tt(s)?t[n]=Ar(i,s):t[n]=s}return t}const Jd=Symbol();function Xd(t){return!Nr(t)||!t.hasOwnProperty(Jd)}const{assign:Ct}=Object;function Zd(t){return!!(pe(t)&&t.effect)}function ep(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const h=rf(n.state.value[t]);return Ct(h,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=co(Ma(()=>{ki(n);const y=n._s.get(t);return o[g].call(y,y)})),p),{}))}return c=Ba(t,a,e,n,s,!0),c}function Ba(t,e,n={},s,i,r){let o;const l=Ct({actions:{}},n),c={deep:!0};let a,h,p=[],g=[],y;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),qt({});let O;function V(x){let b;a=h=!1,typeof x=="function"?(x(s.state.value[t]),b={type:Qn.patchFunction,storeId:t,events:y}):(Ar(s.state.value[t],x),b={type:Qn.patchObject,payload:x,storeId:t,events:y});const te=O=Symbol();Zc().then(()=>{O===te&&(a=!0)}),h=!0,cn(p,b,s.state.value[t])}const j=r?function(){const{state:b}=n,te=b?b():{};this.$patch(U=>{Ct(U,te)})}:Ha;function J(){o.stop(),p=[],g=[],s._s.delete(t)}const X=(x,b="")=>{if(Al in x)return x[rr]=b,x;const te=function(){ki(s);const U=Array.from(arguments),ne=[],Ve=[];function Wt(G){ne.push(G)}function on(G){Ve.push(G)}cn(g,{args:U,name:te[rr],store:f,after:Wt,onError:on});let he;try{he=x.apply(this&&this.$id===t?this:f,U)}catch(G){throw cn(Ve,G),G}return he instanceof Promise?he.then(G=>(cn(ne,G),G)).catch(G=>(cn(Ve,G),Promise.reject(G))):(cn(ne,he),he)};return te[Al]=!0,te[rr]=b,te},M={_p:s,$id:t,$onAction:Nl.bind(null,g),$patch:V,$reset:j,$subscribe(x,b={}){const te=Nl(p,x,b.detached,()=>U()),U=o.run(()=>gn(()=>s.state.value[t],ne=>{(b.flush==="sync"?h:a)&&x({storeId:t,type:Qn.direct,events:y},ne)},Ct({},c,b)));return te},$dispose:J},f=Ri(M);s._s.set(t,f);const d=(s._a&&s._a.runWithContext||Qd)(()=>s._e.run(()=>(o=Dc()).run(()=>e({action:X}))));for(const x in d){const b=d[x];if(pe(b)&&!Zd(b)||Tt(b))r||(I&&Xd(b)&&(pe(b)?b.value=I[x]:Ar(b,I[x])),s.state.value[t][x]=b);else if(typeof b=="function"){const te=X(b,x);d[x]=te,l.actions[x]=b}}return Ct(f,d),Ct(Y(f),d),Object.defineProperty(f,"$state",{get:()=>s.state.value[t],set:x=>{V(b=>{Ct(b,x)})}}),s._p.forEach(x=>{Ct(f,o.run(()=>x({store:f,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(f.$state,I),a=!0,h=!0,f}/*! #__NO_SIDE_EFFECTS__ */function tp(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Vf();return o=o||(c?zn(Wa,null):null),o&&ki(o),o=La,o._s.has(t)||(i?Ba(t,e,s,o):ep(t,s,o)),o._s.get(t)}return r.$id=t,r}const np=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},sp=()=>{};var Pl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const T=function(t,e){if(!t)throw Tn(e)},Tn=function(t){return new Error("Firebase Database ("+Ua.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ip=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,h=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,y=a&63;c||(y=64,o||(g=64)),s.push(n[h],n[p],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ip(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new rp;const g=r<<2|l>>4;if(s.push(g),a!==64){const y=l<<4&240|a>>2;if(s.push(y),p!==64){const I=a<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ja=function(t){const e=Va(t);return po.encodeByteArray(e,!0)},Ys=function(t){return ja(t).replace(/\./g,"")},Pr=function(t){try{return po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){return $a(void 0,t)}function $a(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lp(n)||(t[n]=$a(t[n],e[n]));return t}function lp(t){return t!=="__proto__"}/**
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
 */function cp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ap=()=>cp().__FIREBASE_DEFAULTS__,up=()=>{if(typeof process>"u"||typeof Pl>"u")return;const t=Pl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pr(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return sp()||ap()||up()||hp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fp=t=>{var e,n;return(n=(e=Ka())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dp=t=>{const e=fp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ga=()=>{var t;return(t=Ka())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ys(JSON.stringify(n)),Ys(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_p())}function gp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mp(){return Ua.NODE_ADMIN===!0}function xp(){try{return typeof indexedDB=="object"}catch{return!1}}function yp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="FirebaseError";class vs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vp,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?bp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function bp(t,e){return t.replace(Cp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Cp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ls(Pr(r[0])||""),n=ls(Pr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ep=function(t){const e=Ya(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ip=function(t){const e=Ya(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Dl(r)&&Dl(o)){if(!Js(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Dl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,h;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),h=1518500249):(a=r^o^l,h=1859775393):p<60?(a=r&o|l&(r|o),h=2400959708):(a=r^o^l,h=3395469782);const g=(i<<5|i>>>27)+a+c+h+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function _o(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rn(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Rp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ap(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Np(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Np(t){return t===Kt?void 0:t}function Ap(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Op={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Dp=ce.INFO,kp={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Mp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=Dp,this._logHandler=Mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Fp=(t,e)=>e.some(n=>t instanceof n);let kl,Ml;function Lp(){return kl||(kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wp(){return Ml||(Ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,Or=new WeakMap,Xa=new WeakMap,or=new WeakMap,go=new WeakMap;function Hp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ja.set(n,t)}).catch(()=>{}),go.set(e,t),e}function Bp(t){if(Or.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Or.set(t,e)}let Dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Up(t){Dr=t(Dr)}function Vp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lr(this),e,...n);return Xa.set(s,e.sort?e.sort():[e]),Rt(s)}:Wp().includes(t)?function(...e){return t.apply(lr(this),e),Rt(Ja.get(this))}:function(...e){return Rt(t.apply(lr(this),e))}}function jp(t){return typeof t=="function"?Vp(t):(t instanceof IDBTransaction&&Bp(t),Fp(t,Lp())?new Proxy(t,Dr):t)}function Rt(t){if(t instanceof IDBRequest)return Hp(t);if(or.has(t))return or.get(t);const e=jp(t);return e!==t&&(or.set(t,e),go.set(e,t)),e}const lr=t=>go.get(t);function $p(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Kp=["get","getKey","getAll","getAllKeys","count"],Gp=["put","add","delete","clear"],cr=new Map;function Fl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Gp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return cr.set(e,r),r}Up(t=>({...t,get:(e,n,s)=>Fl(e,n)||t.get(e,n,s),has:(e,n)=>!!Fl(e,n)||t.has(e,n)}));/**
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
 */class qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",Ll="0.11.2";/**
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
 */const mt=new Qa("@firebase/app"),Yp="@firebase/app-compat",Qp="@firebase/analytics-compat",Jp="@firebase/analytics",Xp="@firebase/app-check-compat",Zp="@firebase/app-check",e_="@firebase/auth",t_="@firebase/auth-compat",n_="@firebase/database",s_="@firebase/data-connect",i_="@firebase/database-compat",r_="@firebase/functions",o_="@firebase/functions-compat",l_="@firebase/installations",c_="@firebase/installations-compat",a_="@firebase/messaging",u_="@firebase/messaging-compat",h_="@firebase/performance",f_="@firebase/performance-compat",d_="@firebase/remote-config",p_="@firebase/remote-config-compat",__="@firebase/storage",g_="@firebase/storage-compat",m_="@firebase/firestore",x_="@firebase/vertexai",y_="@firebase/firestore-compat",v_="firebase",b_="11.4.0";/**
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
 */const Mr="[DEFAULT]",C_={[kr]:"fire-core",[Yp]:"fire-core-compat",[Jp]:"fire-analytics",[Qp]:"fire-analytics-compat",[Zp]:"fire-app-check",[Xp]:"fire-app-check-compat",[e_]:"fire-auth",[t_]:"fire-auth-compat",[n_]:"fire-rtdb",[s_]:"fire-data-connect",[i_]:"fire-rtdb-compat",[r_]:"fire-fn",[o_]:"fire-fn-compat",[l_]:"fire-iid",[c_]:"fire-iid-compat",[a_]:"fire-fcm",[u_]:"fire-fcm-compat",[h_]:"fire-perf",[f_]:"fire-perf-compat",[d_]:"fire-rc",[p_]:"fire-rc-compat",[__]:"fire-gcs",[g_]:"fire-gcs-compat",[m_]:"fire-fst",[y_]:"fire-fst-compat",[x_]:"fire-vertex","fire-js":"fire-js",[v_]:"fire-js-all"};/**
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
 */const Xs=new Map,E_=new Map,Fr=new Map;function Wl(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(Fr.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Fr.set(e,t);for(const n of Xs.values())Wl(n,t);for(const n of E_.values())Wl(n,t);return!0}function I_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function w_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const S_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new za("app","Firebase",S_);/**
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
 */class T_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const R_=b_;function Za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=Ga()),!n)throw Nt.create("no-options");const r=Xs.get(i);if(r){if(Js(n,r.options)&&Js(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new Pp(i);for(const c of Fr.values())o.addComponent(c);const l=new T_(n,s,o);return Xs.set(i,l),l}function N_(t=Mr){const e=Xs.get(t);if(!e&&t===Mr&&Ga())return Za();if(!e)throw Nt.create("no-app",{appName:t});return e}function mn(t,e,n){var s;let i=(s=C_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(l.join(" "));return}Zs(new cs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const A_="firebase-heartbeat-database",P_=1,as="firebase-heartbeat-store";let ar=null;function eu(){return ar||(ar=$p(A_,P_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),ar}async function O_(t){try{const n=(await eu()).transaction(as),s=await n.objectStore(as).get(tu(t));return await n.done,s}catch(e){if(e instanceof vs)mt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(n.message)}}}async function Hl(t,e){try{const s=(await eu()).transaction(as,"readwrite");await s.objectStore(as).put(e,tu(t)),await s.done}catch(n){if(n instanceof vs)mt.warn(n.message);else{const s=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mt.warn(s.message)}}}function tu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const D_=1024,k_=30;class M_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>k_){const o=W_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bl(),{heartbeatsToSend:s,unsentEntries:i}=F_(this._heartbeatsCache.heartbeats),r=Ys(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return mt.warn(n),""}}}function Bl(){return new Date().toISOString().substring(0,10)}function F_(t,e=D_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ul(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ul(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class L_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xp()?yp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ul(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}function W_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function H_(t){Zs(new cs("platform-logger",e=>new qp(e),"PRIVATE")),Zs(new cs("heartbeat",e=>new M_(e),"PRIVATE")),mn(kr,Ll,t),mn(kr,Ll,"esm2017"),mn("fire-js","")}H_("");var B_="firebase",U_="11.4.0";/**
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
 */mn(B_,U_,"app");var Vl={};const jl="@firebase/database",$l="1.0.13";/**
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
 */let nu="";function V_(t){nu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new j_(e)}}catch{}return new $_},zt=su("localStorage"),K_=su("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Qa("@firebase/database"),G_=function(){let t=1;return function(){return t++}}(),iu=function(t){const e=Tp(t),n=new Sp;n.update(e);const s=n.digest();return po.encodeByteArray(s)},bs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=bs.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let Jn=null,Kl=!0;const q_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),xn.logLevel=ce.VERBOSE,Jn=xn.log.bind(xn)},Se=function(...t){if(Kl===!0&&(Kl=!1,Jn===null&&K_.get("logging_enabled")===!0&&q_()),Jn){const e=bs.apply(null,t);Jn(e)}},Cs=function(t){return function(...e){Se(t,...e)}},Lr=function(...t){const e="FIREBASE INTERNAL ERROR: "+bs(...t);xn.error(e)},xt=function(...t){const e=`FIREBASE FATAL ERROR: ${bs(...t)}`;throw xn.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+bs(...t);xn.warn(e)},z_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ru=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Y_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",en="[MAX_NAME]",Nn=function(t,e){if(t===e)return 0;if(t===Cn||e===en)return-1;if(e===Cn||t===en)return 1;{const n=Gl(t),s=Gl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Q_=function(t,e){return t===e?0:t<e?-1:1},Ln=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},mo=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=mo(t[e[s]]);return n+="}",n},ou=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lu=function(t){T(!ru(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const h=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},J_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},X_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Z_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const eg=new RegExp("^-?(0*)\\d{1,10}$"),tg=-2147483648,ng=2147483647,Gl=function(t){if(eg.test(t)){const e=Number(t);if(e>=tg&&e<=ng)return e}return null},An=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},sg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ig{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,w_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="5",cu="v",au="s",uu="r",hu="f",fu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,du="ls",pu="p",Wr="ac",_u="websocket",gu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function og(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xu(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===_u)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);og(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return op(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={},hr={};function yo(t){const e=t.toString();return ur[e]||(ur[e]=new lg),ur[e]}function cg(t,e){const n=t.toString();return hr[n]||(hr[n]=e()),hr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&An(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="start",ug="close",hg="pLPCommand",fg="pRTLPCB",yu="id",vu="pw",bu="ser",dg="cb",pg="seg",_g="ts",gg="d",mg="dframe",Cu=1870,Eu=30,xg=Cu-Eu,yg=25e3,vg=3e4;class fn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=yo(n),this.urlFn=c=>(this.appCheckToken&&(c[Wr]=this.appCheckToken),xu(n,gu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ag(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vg)),Y_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vo((...r)=>{const[o,l,c,a,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ql)this.id=l,this.password=c;else if(o===ug)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ql]="t",s[bu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[dg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[cu]=xo,this.transportSessionId&&(s[au]=this.transportSessionId),this.lastSessionId&&(s[du]=this.lastSessionId),this.applicationId&&(s[pu]=this.applicationId),this.appCheckToken&&(s[Wr]=this.appCheckToken),typeof location<"u"&&location.hostname&&fu.test(location.hostname)&&(s[uu]=hu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!J_()&&!X_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ja(n),i=ou(s,xg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[mg]="t",s[yu]=e,s[vu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=G_(),window[hg+this.uniqueCallbackIdentifier]=e,window[fg+this.uniqueCallbackIdentifier]=n,this.myIFrame=vo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yu]=this.myID,e[vu]=this.myPW,e[bu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Eu+s.length<=Cu;){const o=this.pendingSegs.shift();s=s+"&"+pg+i+"="+o.seg+"&"+_g+i+"="+o.ts+"&"+gg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(yg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=16384,Cg=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=yo(n),this.connURL=qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[cu]=xo,typeof location<"u"&&location.hostname&&fu.test(location.hostname)&&(o[uu]=hu),n&&(o[au]=n),s&&(o[du]=s),i&&(o[Wr]=i),r&&(o[pu]=r),xu(e,_u,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;mp(),this.mySock=new ei(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ei!==null&&!qe.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ou(n,bg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Cg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2;qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static get ALL_TRANSPORTS(){return[fn,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=qe&&qe.isAvailable();let s=n&&!qe.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qe];else{const i=this.transports_=[];for(const r of us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=6e4,Ig=5e3,wg=10*1024,Sg=100*1024,fr="t",zl="d",Tg="s",Yl="r",Rg="e",Ql="o",Jl="a",Xl="n",Zl="p",Ng="h";class Ag{constructor(e,n,s,i,r,o,l,c,a,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Sg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fr in e){const n=e[fr];n===Jl?this.upgradeIfSecondaryHealthy_():n===Yl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ql&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ln("t",e),s=Ln("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ln("t",e),s=Ln("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ln(fr,e);if(zl in e){const s=e[zl];if(n===Ng){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Tg?this.onConnectionShutdown_(s):n===Yl?this.onReset_(s):n===Rg?Lr("Server Error: "+s):n===Ql?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xo!==s&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Eg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ig))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends wu{static getInstance(){return new ti}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=32,tc=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ie("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ot(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function Su(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Pg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Tu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ru(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ie(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Pe(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bo(t,e){if(Ot(t)!==Ot(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ot(t)>Ot(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Og{constructor(e,n){this.errorPrefix_=n,this.parts_=Tu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fi(this.parts_[s]);Nu(this)}}function Dg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fi(e),Nu(t)}function kg(t){const e=t.parts_.pop();t.byteLength_-=Fi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Nu(t){if(t.byteLength_>tc)throw new Error(t.errorPrefix_+"has a key path longer than "+tc+" bytes ("+t.byteLength_+").");if(t.parts_.length>ec)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ec+") or object contains a cycle "+Gt(t))}function Gt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends wu{static getInstance(){return new Co}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e3,Mg=60*5*1e3,nc=30*1e3,Fg=1.3,Lg=3e4,Wg="server_kill",sc=3;class gt extends Iu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=gt.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=Mg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Co.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Mi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;gt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const s=bn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ip(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ep(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lr("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Lg&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Fg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Ag(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,y=>{Me(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wg)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Me(p),c())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ol(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>mo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sc&&(this.reconnectDelay_=nc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nu.replace(/\./g,"-")]=1,qa()?e["framework.cordova"]=1:gp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Ol(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(Cn,e),i=new K(Cn,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class Au extends Li{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return Nn(e.name,n.name)}isDefinedOn(e){throw Tn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(en,Os)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Os)}toString(){return".key"}}const yn=new Au;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??be.RED,this.left=i??ke.EMPTY_NODE,this.right=r??ke.EMPTY_NODE}copy(e,n,s,i,r){return new be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class Hg{copy(e,n,s,i,r){return this}insert(e,n,s){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ke{constructor(e,n=ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}ke.EMPTY_NODE=new Hg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t,e){return Nn(t.name,e.name)}function Eo(t,e){return Nn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;function Ug(t){Hr=t}const Pu=function(t){return typeof t=="number"?"number:"+lu(t):"string:"+t},Ou=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else T(t===Hr||t.isEmpty(),"priority of unexpected type.");T(t===Hr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;class ve{static set __childrenNodeConstructor(e){ic=e}static get __childrenNodeConstructor(){return ic}constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ou(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:$(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Ot(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lu(this.value_):e+=this.value_,this.lazyHash_=iu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du,ku;function Vg(t){Du=t}function jg(t){ku=t}class $g extends Li{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(en,new ve("[PRIORITY-POST]",ku))}makePost(e,n){const s=Du(e);return new K(n,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new $g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=Math.log(2);class Gg{constructor(e){const n=r=>parseInt(Math.log(r)/Kg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(t,e,n,s){t.sort(e);const i=function(c,a){const h=a-c;let p,g;if(h===0)return null;if(h===1)return p=t[c],g=n?n(p):p,new be(g,p.node,be.BLACK,null,null);{const y=parseInt(h/2,10)+c,I=i(c,y),O=i(y+1,a);return p=t[y],g=n?n(p):p,new be(g,p.node,be.BLACK,I,O)}},r=function(c){let a=null,h=null,p=t.length;const g=function(I,O){const V=p-I,j=p;p-=I;const J=i(V+1,j),X=t[V],M=n?n(X):X;y(new be(M,X.node,O,null,J))},y=function(I){a?(a.left=I,a=I):(h=I,a=I)};for(let I=0;I<c.count;++I){const O=c.nextBitIsOne(),V=Math.pow(2,c.count-(I+1));O?g(V,be.BLACK):(g(V,be.BLACK),g(V,be.RED))}return h},o=new Gg(t.length),l=r(o);return new ke(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const an={};class _t{static get Default(){return T(an&&de,"ChildrenNode.ts has not been loaded"),dr=dr||new _t({".priority":an},{".priority":de}),dr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ke?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ni(s,e.getCompare()):l=an;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new _t(h,a)}addToIndexes(e,n){const s=Qs(this.indexes_,(i,r)=>{const o=bn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(K.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ni(l,o.getCompare())}else return an;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new K(e.name,l))),c.insert(e,e.node)}});return new _t(s,this.indexSet_)}removeFromIndexes(e,n){const s=Qs(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new _t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class L{static get EMPTY_NODE(){return Hn||(Hn=new L(new ke(Eo),null,_t.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ou(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{T($(e)!==".priority"||Ot(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pu(this.getPriority().val())+":"),this.forEachChild(de,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(de),i=n.getIterator(de);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qg extends L{constructor(){super(new ke(Eo),L.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Es=new qg;Object.defineProperties(K,{MIN:{value:new K(Cn,L.EMPTY_NODE)},MAX:{value:new K(en,Es)}});Au.__EMPTY_NODE=L.EMPTY_NODE;ve.__childrenNodeConstructor=L;Ug(Es);jg(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=!0;function Ce(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ce(e))}if(!(t instanceof Array)&&zg){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ce(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new K(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=ni(n,Bg,o=>o.name,Eo);if(s){const o=ni(n,de.getCompare());return new L(r,Ce(e),new _t({".priority":o},{".priority":de}))}else return new L(r,Ce(e),_t.Default)}else{let n=L.EMPTY_NODE;return Fe(t,(s,i)=>{if(vt(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}Vg(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg extends Li{constructor(e){super(),this.indexPath_=e,T(!q(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Es);return new K(en,e)}toString(){return Tu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Li{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Nn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Ce(e);return new K(n,s)}toString(){return".value"}}const Jg=new Qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){return{type:"value",snapshotNode:t}}function En(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Xg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(En(n,s)):o.trackChildChange(fs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{n.hasChild(i)||s.trackChildChange(hs(i,r))}),n.isLeafNode()||n.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fs(i,r,o))}else s.trackChildChange(En(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.indexedFilter_=new Io(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ds.getStartPost_(e),this.endPost_=ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,y)=>p(y,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new K(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const y=g==null?1:o(g,c);if(h&&!s.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(fs(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(hs(n,p));const O=l.updateImmediateChild(n,L.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(En(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return s.isEmpty()?e:h&&o(a,c)>=0?(r!=null&&(r.trackChildChange(hs(a.name,a.node)),r.trackChildChange(En(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new wo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function em(t){return t.loadsAllData()?new Io(t.getIndex()):t.hasLimit()?new Zg(t):new ds(t)}function rc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===Jg?n="$value":t.index_===yn?n="$key":(T(t.index_ instanceof Yg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function oc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Iu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Cs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=si.getListenId_(e,s),l={};this.listens_[o]=l;const c=rc(e._queryParams);this.restRequest_(r+".json",c,(a,h)=>{let p=h;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),bn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=si.getListenId_(e,n);delete this.listens_[s]}get(e){const n=rc(e._queryParams),s=e._path.toString(),i=new Mi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ls(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return{value:null,children:new Map}}function Fu(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,ii());const i=t.children.get(s);e=ae(e),Fu(i,e,n)}}function Br(t,e,n){t.value!==null?n(e,t.value):nm(t,(s,i)=>{const r=new ie(e.toString()+"/"+s);Br(i,r,n)})}function nm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=10*1e3,im=30*1e3,rm=5*60*1e3;class om{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sm(e);const s=lc+(im-lc)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*rm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function Lu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function So(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function To(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=Lu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new ri(Q(),n,this.revert)}}else return T($(this.path)===e,"operationForChild called for unrelated child."),new ri(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ps(this.source,Q()):new ps(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return q(this.path)?new tn(this.source,Q(),this.snap.getImmediateChild(e)):new tn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new tn(this.source,Q(),n.value):new _s(this.source,Q(),n)}else return T($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xg(o.childName,o.snapshotNode))}),Bn(t,i,"child_removed",e,s,n),Bn(t,i,"child_added",e,s,n),Bn(t,i,"child_moved",r,s,n),Bn(t,i,"child_changed",e,s,n),Bn(t,i,"value",e,s,n),i}function Bn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>um(t,l,c)),o.forEach(l=>{const c=am(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function am(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function um(t,e,n){if(e.childName==null||n.childName==null)throw Tn("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e){return{eventCache:t,serverCache:e}}function Zn(t,e,n,s){return Wi(new Dt(e,n,s),t.serverCache)}function Wu(t,e,n,s){return Wi(t.eventCache,new Dt(e,n,s))}function oi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;const hm=()=>(pr||(pr=new ke(Q_)),pr);class ue{static fromObject(e){let n=new ue(null);return Fe(e,(s,i)=>{n=n.set(new ie(s),i)}),n}constructor(e,n=hm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(q(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:xe(new ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new ue(null)}}set(e,n){if(q(e))return new ue(n,this.children);{const s=$(e),r=(this.children.get(s)||new ue(null)).set(ae(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(q(e))return n;{const s=$(e),r=(this.children.get(s)||new ue(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(xe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),xe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),xe(n,i),s):new ue(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ue(null))}}function es(t,e,n){if(q(e))return new Xe(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pe(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function cc(t,e,n){let s=t;return Fe(n,(i,r)=>{s=es(s,xe(e,i),r)}),s}function ac(t,e){if(q(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new Xe(n)}}function Ur(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function uc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function At(t,e){if(q(e))return t;{const n=rn(t,e);return n!=null?new Xe(new ue(n)):new Xe(t.writeTree_.subtree(e))}}function Vr(t){return t.writeTree_.isEmpty()}function In(t,e){return Hu(Q(),t.writeTree_,e)}function Hu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Hu(xe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(xe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e){return ju(e,t)}function fm(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=es(t.visibleWrites,e,n)),t.lastWriteId=s}function dm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function pm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&_m(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return gm(t),!0;if(s.snap)t.visibleWrites=ac(t.visibleWrites,s.path);else{const l=s.children;Fe(l,c=>{t.visibleWrites=ac(t.visibleWrites,xe(s.path,c))})}return!0}else return!1}function _m(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(xe(t.path,n),e))return!0;return!1}function gm(t){t.visibleWrites=Bu(t.allWrites,mm,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mm(t){return t.visible}function Bu(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Pe(n,o),s=es(s,l,r.snap)):ze(o,n)&&(l=Pe(o,n),s=es(s,Q(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Pe(n,o),s=cc(s,l,r.children);else if(ze(o,n))if(l=Pe(o,n),q(l))s=cc(s,Q(),r.children);else{const c=bn(r.children,$(l));if(c){const a=c.getChild(ae(l));s=es(s,Q(),a)}}}else throw Tn("WriteRecord should have .snap or .children")}}return s}function Uu(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=At(t.visibleWrites,e);if(Vr(o))return n;if(n==null&&!Ur(o,Q()))return null;{const l=n||L.EMPTY_NODE;return In(o,l)}}}else{const r=At(t.visibleWrites,e);if(!i&&Vr(r))return n;if(!i&&n==null&&!Ur(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(ze(a.path,e)||ze(e,a.path))},l=Bu(t.allWrites,o,e),c=n||L.EMPTY_NODE;return In(l,c)}}}function xm(t,e,n){let s=L.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=At(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const c=In(At(r,new ie(o)),l);s=s.updateImmediateChild(o,c)}),uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(t.visibleWrites,e);return uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ym(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=xe(e,n);if(Ur(t.visibleWrites,r))return null;{const o=At(t.visibleWrites,r);return Vr(o)?i.getChild(n):In(o,i.getChild(n))}}function vm(t,e,n,s){const i=xe(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=At(t.visibleWrites,i);return In(o,s.getNode().getImmediateChild(n))}else return null}function bm(t,e){return rn(t.visibleWrites,e)}function Cm(t,e,n,s,i,r,o){let l;const c=At(t.visibleWrites,e),a=rn(c,Q());if(a!=null)l=a;else if(n!=null)l=In(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let y=g.getNext();for(;y&&h.length<i;)p(y,s)!==0&&h.push(y),y=g.getNext();return h}else return[]}function Em(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function li(t,e,n,s){return Uu(t.writeTree,t.treePath,e,n,s)}function Ro(t,e){return xm(t.writeTree,t.treePath,e)}function hc(t,e,n,s){return ym(t.writeTree,t.treePath,e,n,s)}function ci(t,e){return bm(t.writeTree,xe(t.treePath,e))}function Im(t,e,n,s,i,r){return Cm(t.writeTree,t.treePath,e,n,s,i,r)}function No(t,e,n){return vm(t.writeTree,t.treePath,e,n)}function Vu(t,e){return ju(xe(t.treePath,e),t.writeTree)}function ju(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,En(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fs(s,e.snapshotNode,i.oldSnap));else throw Tn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const $u=new Sm;class Ao{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return No(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=Im(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t){return{filter:t}}function Rm(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Nm(t,e,n,s,i){const r=new wm;let o,l;if(n.type===Ye.OVERWRITE){const a=n;a.source.fromUser?o=jr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=ai(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const a=n;a.source.fromUser?o=Pm(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=$r(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const a=n;a.revert?o=km(t,e,a.path,s,i,r):o=Om(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=Dm(t,e,n.path,s,r);else throw Tn("Unknown operation type: "+n.type);const c=r.getChanges();return Am(e,o,c),{viewCache:o,changes:c}}function Am(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=oi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Mu(oi(e)))}}function Ku(t,e,n,s,i,r){const o=e.eventCache;if(ci(s,n)!=null)return e;{let l,c;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=nn(e),h=a instanceof L?a:L.EMPTY_NODE,p=Ro(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=li(s,nn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){T(Ot(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const p=hc(s,n,h,c);p!=null?l=t.filter.updatePriority(h,p):l=o.getNode()}else{const h=ae(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=hc(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(h,g):p=o.getNode().getImmediateChild(a)}else p=No(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,h,i,r):l=o.getNode()}}return Zn(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function ai(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const h=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const y=c.getNode().updateChild(n,s);a=h.updateFullNode(c.getNode(),y,null)}else{const y=$(n);if(!c.isCompleteForPath(n)&&Ot(n)>1)return e;const I=ae(n),V=c.getNode().getImmediateChild(y).updateChild(I,s);y===".priority"?a=h.updatePriority(c.getNode(),V):a=h.updateChild(c.getNode(),y,V,I,$u,null)}const p=Wu(e,a,c.isFullyInitialized()||q(n),h.filtersNodes()),g=new Ao(i,p,r);return Ku(t,p,n,i,g,l)}function jr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const h=new Ao(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Zn(e,a,!0,t.filter.filtersNodes());else{const p=$(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Zn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ae(n),y=l.getNode().getImmediateChild(p);let I;if(q(g))I=s;else{const O=h.getCompleteChild(p);O!=null?Su(g)===".priority"&&O.getChild(Ru(g)).isEmpty()?I=O:I=O.updateChild(g,s):I=L.EMPTY_NODE}if(y.equals(I))c=e;else{const O=t.filter.updateChild(l.getNode(),p,I,g,h,o);c=Zn(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function fc(t,e){return t.eventCache.isCompleteForChild(e)}function Pm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const h=xe(n,c);fc(e,$(h))&&(l=jr(t,l,h,a,i,r,o))}),s.foreach((c,a)=>{const h=xe(n,c);fc(e,$(h))||(l=jr(t,l,h,a,i,r,o))}),l}function dc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $r(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new ue(null).setTree(n,s);const h=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(h.hasChild(p)){const y=e.serverCache.getNode().getImmediateChild(p),I=dc(t,y,g);c=ai(t,c,new ie(p),I,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const y=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!h.hasChild(p)&&!y){const I=e.serverCache.getNode().getImmediateChild(p),O=dc(t,I,g);c=ai(t,c,new ie(p),O,i,r,o,l)}}),c}function Om(t,e,n,s,i,r,o){if(ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new ue(null);return c.getNode().forEachChild(yn,(h,p)=>{a=a.set(new ie(h),p)}),$r(t,e,n,a,i,r,l,o)}else return e}else{let a=new ue(null);return s.foreach((h,p)=>{const g=xe(n,h);c.isCompleteForPath(g)&&(a=a.set(h,c.getNode().getChild(g)))}),$r(t,e,n,a,i,r,l,o)}}function Dm(t,e,n,s,i){const r=e.serverCache,o=Wu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Ku(t,o,n,s,$u,i)}function km(t,e,n,s,i,r){let o;if(ci(s,n)!=null)return e;{const l=new Ao(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||$(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=li(s,nn(e));else{const p=e.serverCache.getNode();T(p instanceof L,"serverChildren would be complete if leaf node"),h=Ro(s,p)}h=h,a=t.filter.updateFullNode(c,h,r)}else{const h=$(n);let p=No(s,h,e.serverCache);p==null&&e.serverCache.isCompleteForChild(h)&&(p=c.getImmediateChild(h)),p!=null?a=t.filter.updateChild(c,h,p,ae(n),l,r):e.eventCache.getNode().hasChild(h)?a=t.filter.updateChild(c,h,L.EMPTY_NODE,ae(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=li(s,nn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ci(s,Q())!=null,Zn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Io(s.getIndex()),r=em(s);this.processor_=Tm(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),h=new Dt(c,o.isFullyInitialized(),i.filtersNodes()),p=new Dt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wi(p,h),this.eventGenerator_=new lm(this.query_)}get query(){return this.query_}}function Fm(t){return t.viewCache_.serverCache.getNode()}function Lm(t){return oi(t.viewCache_)}function Wm(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function pc(t){return t.eventRegistrations_.length===0}function Hm(t,e){t.eventRegistrations_.push(e)}function _c(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function gc(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(T(nn(t.viewCache_),"We should always have a full cache before handling merges"),T(oi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Nm(t.processor_,i,e,n,s);return Rm(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Gu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Bm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{s.push(En(r,o))}),n.isFullyInitialized()&&s.push(Mu(n.getNode())),Gu(t,s,n.getNode(),e)}function Gu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return cm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class qu{constructor(){this.views=new Map}}function Um(t){T(!ui,"__referenceConstructor has already been defined"),ui=t}function Vm(){return T(ui,"Reference.ts has not been loaded"),ui}function jm(t){return t.views.size===0}function Po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),gc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(gc(o,e,n,s));return r}}function zu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=li(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=Ro(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=Wi(new Dt(l,c,!1),new Dt(s,i,!1));return new Mm(e,a)}return o}function $m(t,e,n,s,i,r){const o=zu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Hm(o,n),Bm(o,n)}function Km(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=kt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(_c(a,n,s)),pc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(_c(c,n,s)),pc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!kt(t)&&r.push(new(Vm())(e._repo,e._path)),{removed:r,events:o}}function Yu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pt(t,e){let n=null;for(const s of t.views.values())n=n||Wm(s,e);return n}function Qu(t,e){if(e._queryParams.loadsAllData())return Bi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ju(t,e){return Qu(t,e)!=null}function kt(t){return Bi(t)!=null}function Bi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function Gm(t){T(!hi,"__referenceConstructor has already been defined"),hi=t}function qm(){return T(hi,"Reference.ts has not been loaded"),hi}let zm=1;class mc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Em(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xu(t,e,n,s,i){return fm(t.pendingWriteTree_,e,n,s,i),i?ws(t,new tn(Lu(),e,n)):[]}function Yt(t,e,n=!1){const s=dm(t.pendingWriteTree_,e);if(pm(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(Q(),!0):Fe(s.children,o=>{r=r.set(new ie(o),!0)}),ws(t,new ri(s.path,r,n))}else return[]}function Is(t,e,n){return ws(t,new tn(So(),e,n))}function Ym(t,e,n){const s=ue.fromObject(n);return ws(t,new _s(So(),e,s))}function Qm(t,e){return ws(t,new ps(So(),e))}function Jm(t,e,n){const s=Do(t,n);if(s){const i=ko(s),r=i.path,o=i.queryId,l=Pe(r,e),c=new ps(To(o),l);return Mo(t,r,c)}else return[]}function fi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ju(o,e))){const c=Km(o,e,n,s);jm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const h=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,y)=>kt(y));if(h&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const y=e0(g);for(let I=0;I<y.length;++I){const O=y[I],V=O.query,j=nh(t,O);t.listenProvider_.startListening(ts(V),gs(t,V),j.hashFn,j.onComplete)}}}!p&&a.length>0&&!s&&(h?t.listenProvider_.stopListening(ts(e),null):a.forEach(g=>{const y=t.queryToTagMap.get(Ui(g));t.listenProvider_.stopListening(ts(g),y)}))}t0(t,a)}return l}function Zu(t,e,n,s){const i=Do(t,s);if(i!=null){const r=ko(i),o=r.path,l=r.queryId,c=Pe(o,e),a=new tn(To(l),c,n);return Mo(t,o,a)}else return[]}function Xm(t,e,n,s){const i=Do(t,s);if(i){const r=ko(i),o=r.path,l=r.queryId,c=Pe(o,e),a=ue.fromObject(n),h=new _s(To(l),c,a);return Mo(t,o,h)}else return[]}function Kr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,y)=>{const I=Pe(g,i);r=r||Pt(y,I),o=o||kt(y)});let l=t.syncPointTree_.get(i);l?(o=o||kt(l),r=r||Pt(l,Q())):(l=new qu,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,I)=>{const O=Pt(I,Q());O&&(r=r.updateImmediateChild(y,O))}));const a=Ju(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Ui(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const y=n0();t.queryToTagMap.set(g,y),t.tagToQueryMap.set(y,g)}const h=Hi(t.pendingWriteTree_,i);let p=$m(l,e,n,h,r,c);if(!a&&!o&&!s){const g=Qu(l,e);p=p.concat(s0(t,e,g))}return p}function Oo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Pe(o,e),a=Pt(l,c);if(a)return a});return Uu(i,e,r,n,!0)}function Zm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,h)=>{const p=Pe(a,n);s=s||Pt(h,p)});let i=t.syncPointTree_.get(n);i?s=s||Pt(i,Q()):(i=new qu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Dt(s,!0,!1):null,l=Hi(t.pendingWriteTree_,e._path),c=zu(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return Lm(c)}function ws(t,e){return eh(e,t.syncPointTree_,null,Hi(t.pendingWriteTree_,Q()))}function eh(t,e,n,s){if(q(t.path))return th(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Pt(i,Q()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,h=Vu(s,o);r=r.concat(eh(l,c,a,h))}return i&&(r=r.concat(Po(i,t,s,n))),r}}function th(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Pt(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Vu(s,o),h=t.operationForChild(o);h&&(r=r.concat(th(h,l,c,a)))}),i&&(r=r.concat(Po(i,t,s,n))),r}function nh(t,e){const n=e.query,s=gs(t,n);return{hashFn:()=>(Fm(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Jm(t,n._path,s):Qm(t,n._path);{const r=Z_(i,n);return fi(t,n,null,r)}}}}function gs(t,e){const n=Ui(e);return t.queryToTagMap.get(n)}function Ui(t){return t._path.toString()+"$"+t._queryIdentifier}function Do(t,e){return t.tagToQueryMap.get(e)}function ko(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Mo(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Hi(t.pendingWriteTree_,e);return Po(s,n,i,null)}function e0(t){return t.fold((e,n,s)=>{if(n&&kt(n))return[Bi(n)];{let i=[];return n&&(i=Yu(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function ts(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(qm())(t._repo,t._path):t}function t0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ui(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function n0(){return zm++}function s0(t,e,n){const s=e._path,i=gs(t,e),r=nh(t,n),o=t.listenProvider_.startListening(ts(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!kt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,h,p)=>{if(!q(a)&&h&&kt(h))return[Bi(h).query];{let g=[];return h&&(g=g.concat(Yu(h).map(y=>y.query))),Fe(p,(y,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const h=c[a];t.listenProvider_.stopListening(ts(h),gs(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fo(n)}node(){return this.node_}}class Lo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Lo(this.syncTree_,n)}node(){return Oo(this.syncTree_,this.path_)}}const i0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xc=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return r0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return o0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},r0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},o0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},l0=function(t,e,n,s){return Wo(e,new Lo(n,t),s)},sh=function(t,e,n){return Wo(t,new Fo(e),n)};function Wo(t,e,n){const s=t.getPriority().val(),i=xc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=xc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(de,(l,c)=>{const a=Wo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Bo(t,e){let n=e instanceof ie?e:new ie(e),s=t,i=$(n);for(;i!==null;){const r=bn(s.node.children,i)||{children:{},childCount:0};s=new Ho(i,s,r),n=ae(n),i=$(n)}return s}function Pn(t){return t.node.value}function ih(t,e){t.node.value=e,Gr(t)}function rh(t){return t.node.childCount>0}function c0(t){return Pn(t)===void 0&&!rh(t)}function Vi(t,e){Fe(t.node.children,(n,s)=>{e(new Ho(n,t,s))})}function oh(t,e,n,s){n&&e(t),Vi(t,i=>{oh(i,e,!0)})}function a0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(t){return new ie(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function Gr(t){t.parent!==null&&u0(t.parent,t.name,t)}function u0(t,e,n){const s=c0(n),i=vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Gr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=/[\[\].#$\/\u0000-\u001F\u007F]/,f0=/[\[\].#$\u0000-\u001F\u007F]/,_r=10*1024*1024,lh=function(t){return typeof t=="string"&&t.length!==0&&!h0.test(t)},ch=function(t){return typeof t=="string"&&t.length!==0&&!f0.test(t)},d0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ch(t)},p0=function(t,e,n,s){Uo(_o(t,"value"),e,n)},Uo=function(t,e,n){const s=n instanceof ie?new Og(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Gt(s)+" with contents = "+e.toString());if(ru(e))throw new Error(t+"contains "+e.toString()+" "+Gt(s));if(typeof e=="string"&&e.length>_r/3&&Fi(e)>_r)throw new Error(t+"contains a string greater than "+_r+" utf8 bytes "+Gt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Dg(s,o),Uo(t,l,s),kg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Gt(s)+" in addition to actual children.")}},ah=function(t,e,n,s){if(!ch(n))throw new Error(_o(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ah(t,e,n)},uh=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},g0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!d0(n))throw new Error(_o(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!bo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function hh(t,e,n){Vo(t,n),fh(t,s=>bo(s,e))}function ut(t,e,n){Vo(t,n),fh(t,s=>ze(s,e)||ze(e,s))}function fh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(x0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function x0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Jn&&Se("event: "+n.toString()),An(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="repo_interrupt",v0=25;class b0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new m0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new Ho,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function C0(t,e,n){if(t.stats_=yo(t.repoInfo_),t.forceRestClient_||sg())t.server_=new si(t.repoInfo_,(s,i,r,o)=>{yc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new gt(t.repoInfo_,e,(s,i,r,o)=>{yc(t,s,i,r,o)},s=>{vc(t,s)},s=>{I0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=cg(t.repoInfo_,()=>new om(t.stats_,t.server_)),t.infoData_=new tm,t.infoSyncTree_=new mc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Is(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$o(t,"connected",!1),t.serverSyncTree_=new mc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ut(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function E0(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jo(t){return i0({timestamp:E0(t)})}function yc(t,e,n,s,i){t.dataUpdateCount++;const r=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Qs(n,a=>Ce(a));o=Xm(t.serverSyncTree_,r,c,i)}else{const c=Ce(n);o=Zu(t.serverSyncTree_,r,c,i)}else if(s){const c=Qs(n,a=>Ce(a));o=Ym(t.serverSyncTree_,r,c)}else{const c=Ce(n);o=Is(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=$i(t,r)),ut(t.eventQueue_,l,o)}function vc(t,e){$o(t,"connected",e),e===!1&&T0(t)}function I0(t,e){Fe(e,(n,s)=>{$o(t,n,s)})}function $o(t,e,n){const s=new ie("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Is(t.infoSyncTree_,s,i);ut(t.eventQueue_,s,r)}function dh(t){return t.nextWriteId_++}function w0(t,e,n){const s=Zm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());Kr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Is(t.serverSyncTree_,e._path,r);else{const l=gs(t.serverSyncTree_,e);o=Zu(t.serverSyncTree_,e._path,r,l)}return ut(t.eventQueue_,e._path,o),fi(t.serverSyncTree_,e,n,null,!0),r},i=>(ji(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function S0(t,e,n,s,i){ji(t,"set",{path:e.toString(),value:n,priority:s});const r=jo(t),o=Ce(n,s),l=Oo(t.serverSyncTree_,e),c=sh(o,l,r),a=dh(t),h=Xu(t.serverSyncTree_,e,c,a,!0);Vo(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(g,y)=>{const I=g==="ok";I||Me("set at "+e+" failed: "+g);const O=Yt(t.serverSyncTree_,a,!I);ut(t.eventQueue_,e,O),A0(t,i,g,y)});const p=xh(t,e);$i(t,p),ut(t.eventQueue_,p,[])}function T0(t){ji(t,"onDisconnectEvents");const e=jo(t),n=ii();Br(t.onDisconnect_,Q(),(i,r)=>{const o=l0(i,r,t.serverSyncTree_,e);Fu(n,i,o)});let s=[];Br(n,Q(),(i,r)=>{s=s.concat(Is(t.serverSyncTree_,i,r));const o=xh(t,i);$i(t,o)}),t.onDisconnect_=ii(),ut(t.eventQueue_,Q(),s)}function R0(t,e,n){let s;$(e._path)===".info"?s=Kr(t.infoSyncTree_,e,n):s=Kr(t.serverSyncTree_,e,n),hh(t.eventQueue_,e._path,s)}function bc(t,e,n){let s;$(e._path)===".info"?s=fi(t.infoSyncTree_,e,n):s=fi(t.serverSyncTree_,e,n),hh(t.eventQueue_,e._path,s)}function N0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(y0)}function ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function A0(t,e,n,s){e&&An(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ph(t,e,n){return Oo(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Ko(t,e=t.transactionQueueTree_){if(e||Ki(t,e),Pn(e)){const n=gh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&P0(t,Ss(e),n)}else rh(e)&&Vi(e,n=>{Ko(t,n)})}function P0(t,e,n){const s=n.map(a=>a.currentWriteId),i=ph(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const h=n[a];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const p=Pe(e,h.path);r=r.updateChild(p,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ji(t,"transaction put response",{path:c.toString(),status:a});let h=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(Yt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Ki(t,Bo(t.transactionQueueTree_,e)),Ko(t,t.transactionQueueTree_),ut(t.eventQueue_,e,h);for(let g=0;g<p.length;g++)An(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Me("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}$i(t,e)}},o)}function $i(t,e){const n=_h(t,e),s=Ss(n),i=gh(t,n);return O0(t,i,s),s}function O0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Pe(n,c.path);let h=!1,p;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,p=c.abortReason,i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=v0)h=!0,p="maxretry",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=ph(t,c.path,o);c.currentInputSnapshot=g;const y=e[l].update(g.val());if(y!==void 0){Uo("transaction failed: Data returned ",y,c.path);let I=Ce(y);typeof y=="object"&&y!=null&&vt(y,".priority")||(I=I.updatePriority(g.getPriority()));const V=c.currentWriteId,j=jo(t),J=sh(I,g,j);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=J,c.currentWriteId=dh(t),o.splice(o.indexOf(V),1),i=i.concat(Xu(t.serverSyncTree_,c.path,J,c.currentWriteId,c.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,V,!0))}else h=!0,p="nodata",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0))}ut(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Ki(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)An(s[l]);Ko(t,t.transactionQueueTree_)}function _h(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Pn(s)===void 0;)s=Bo(s,n),e=ae(e),n=$(e);return s}function gh(t,e){const n=[];return mh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function mh(t,e,n){const s=Pn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Vi(e,i=>{mh(t,i,n)})}function Ki(t,e){const n=Pn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ih(e,n.length>0?n:void 0)}Vi(e,s=>{Ki(t,s)})}function xh(t,e){const n=Ss(_h(t,e)),s=Bo(t.transactionQueueTree_,e);return a0(s,i=>{gr(t,i)}),gr(t,s),oh(s,i=>{gr(t,i)}),n}function gr(t,e){const n=Pn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ih(e,void 0):n.length=r+1,ut(t.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)An(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function k0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cc=function(t,e){const n=M0(t),s=n.namespace;n.domain==="firebase.com"&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||z_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ie(n.pathString)}},M0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let h=t.indexOf("/");h===-1&&(h=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(h,p)),h<p&&(i=D0(t.substring(h,p)));const g=k0(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const y=e.slice(0,a);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class L0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Go{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Su(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=oc(this._queryParams),n=mo(e);return n==="{}"?"default":n}get _queryObject(){return oc(this._queryParams)}isEqual(e){if(e=Rn(e),!(e instanceof Go))return!1;const n=this._repo===e._repo,s=bo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pg(this._path)}}class bt extends Go{constructor(e,n){super(e,n,new wo,!1)}get parent(){const e=Ru(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),s=qr(this.ref,e);return new ms(this._node.getChild(n),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,qr(this.ref,s),de)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ks(t,e){return t=Rn(t),t._checkNotDeleted("ref"),e!==void 0?qr(t._root,e):t._root}function qr(t,e){return t=Rn(t),$(t._path)===null?_0("child","path",e):ah("child","path",e),new bt(t._repo,xe(t._path,e))}function W0(t){return uh("remove",t._path),vh(t,null)}function vh(t,e){t=Rn(t),uh("set",t._path),p0("set",e,t._path);const n=new Mi;return S0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function H0(t){t=Rn(t);const e=new yh(()=>{}),n=new Gi(e);return w0(t._repo,t,n).then(s=>new ms(s,new bt(t._repo,t._path),t._queryParams.getIndex()))}class Gi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new F0("value",this,new ms(e.snapshotNode,new bt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new L0(this,e,n):null}matches(e){return e instanceof Gi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function B0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(h,p)=>{bc(t._repo,t,l),c(h,p)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new yh(n,r||void 0),l=new Gi(o);return R0(t._repo,t,l),()=>bc(t._repo,t,l)}function U0(t,e,n,s){return B0(t,"value",e,n,s)}Um(bt);Gm(bt);/**
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
 */const V0="FIREBASE_DATABASE_EMULATOR_HOST",zr={};let j0=!1;function $0(t,e,n,s){t.repoInfo_=new mu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function K0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cc(r,i),l=o.repoInfo,c;typeof process<"u"&&Vl&&(c=Vl[V0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Cc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new rg(t.name,t.options,e);g0("Invalid Firebase Database URL",o),q(o.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=q0(l,t,a,new ig(t,n));return new z0(h,t)}function G0(t,e){const n=zr[e];(!n||n[t.key]!==t)&&xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),N0(t),delete n[t.key]}function q0(t,e,n,s){let i=zr[e.name];i||(i={},zr[e.name]=i);let r=i[t.toURLString()];return r&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new b0(t,j0,n,s),i[t.toURLString()]=r,r}class z0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(C0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(G0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xt("Cannot call "+e+" on a deleted database.")}}function Y0(t=N_(),e){const n=I_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=dp("database");s&&Q0(n,...s)}return n}function Q0(t,e,n,s={}){t=Rn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Js(s,r.repoInfo_.emulatorOptions))return;xt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Hs(Hs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:pp(s.mockUserToken,t.app.options.projectId);o=new Hs(l)}$0(r,i,s,o)}/**
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
 */function J0(t){V_(R_),Zs(new cs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return K0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),mn(jl,$l,t),mn(jl,$l,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};J0();function di(t,e){const n=pi();return di=function(s,i){return s=s-245,n[s]},di(t,e)}const jt=di;(function(t,e){const n=di,s=t();for(;;)try{if(-parseInt(n(249))/1+parseInt(n(258))/2*(-parseInt(n(247))/3)+-parseInt(n(255))/4+parseInt(n(245))/5+parseInt(n(254))/6*(parseInt(n(246))/7)+parseInt(n(256))/8*(parseInt(n(259))/9)+parseInt(n(260))/10*(parseInt(n(250))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(pi,414988);function pi(){const t=["26SmISDF","9faseFL","10MxAtno","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","iamwait","2127010cuUwjv","47474XmbZNS","162081ragcJL","iamwait.firebasestorage.app","807262QulCNc","4735291VoOvWq","G-3RRDNZ9ME5","iamwait.firebaseapp.com","1:720775593565:web:1a263bf6a87ecfea3817b4","522TYLcMs","893496uAQAlV","5616464IrYBgQ","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app"];return pi=function(){return t},pi()}const X0={apiKey:jt(261),authDomain:jt(252),databaseURL:jt(257),projectId:jt(262),storageBucket:jt(248),messagingSenderId:"720775593565",appId:jt(253),measurementId:jt(251)},Z0=Za(X0),Ms=Y0(Z0),wt=_i;(function(t,e){const n=_i,s=t();for(;;)try{if(parseInt(n(476))/1+parseInt(n(496))/2+parseInt(n(503))/3+-parseInt(n(489))/4+parseInt(n(482))/5*(parseInt(n(473))/6)+parseInt(n(474))/7+-parseInt(n(504))/8*(parseInt(n(487))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,231596);function _i(t,e){const n=gi();return _i=function(s,i){return s=s-473,n[s]},_i(t,e)}function gi(){const t=["6OVEngk","1301286yCneMd"," на прослушке","209278HpzNAF","MncCi"," -  данные записаны","TwnvC","DOWKS","then","2097115UIhHIa","########### ########## Данные ","color: darkgreen","hbOAf","%c ","27DZSeJH","lookField","361724dLTfaJ","log","tSvYU","fbStore2"," удалены!","catch","val","828300rcgAPA",">>> Данные по ","error","KgfnK"," = "," : данные не найдены","Ошибка записи данных: ","828894BSLUab","3154720cMnApt"];return gi=function(){return t},gi()}const qo=tp(wt(492),{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:0}),actions:{async getField(t){const e=wt,n={tSvYU:function(i,r){return i+r},ZejKS:function(i,r,o){return i(r,o)},XPepk:function(i,r){return i(r)}},s=n.ZejKS(ks,Ms,t);return n.XPepk(H0,s)[e(481)](i=>{const r=e;if(i.exists()){const o=i[r(495)]();return Un(n[r(491)](r(497)+t+r(500),JSON.stringify(o))),o}else Un(t+r(501))})},async setField(t,e){const n=wt,s={RfIWu:function(r,o){return r(o)},DOWKS:function(r,o){return r+o},rwEnm:n(478),TwnvC:n(502),hbOAf:function(r,o,l){return r(o,l)}},i=s[n(485)](ks,Ms,t);return vh(i,e)[n(481)](()=>{const r=n;s.RfIWu(Un,s[r(480)](t,s.rwEnm))})[n(494)](r=>{const o=n;console[o(498)](s[o(479)],r)})},async onValue(t){const e=wt,n={RhaCP:function(i,r){return i(r)},YtaXC:function(i,r,o){return i(r,o)},MncCi:function(i,r,o){return i(r,o)}},s=n.YtaXC(ks,Ms,t);n[e(477)](U0,s,i=>{const r=e;n.RhaCP(Un,r(483)+t+r(475)),this[r(488)]=i[r(495)]()})},async removeField(t){const e=wt,n={RqpCa:function(i,r){return i(r)},KgfnK:function(i,r,o){return i(r,o)}};console[e(490)](t);const s=n[e(499)](ks,Ms,t);n.RqpCa(W0,s)[e(481)](()=>{const i=e;n.RqpCa(Un,"Данные "+t+i(493))})}}}),Un=t=>console[wt(490)](wt(486)+t,wt(484));function mi(t,e){const n=xi();return mi=function(s,i){return s=s-480,n[s]},mi(t,e)}(function(t,e){const n=mi,s=t();for(;;)try{if(parseInt(n(488))/1+parseInt(n(482))/2+-parseInt(n(489))/3*(parseInt(n(480))/4)+parseInt(n(485))/5+-parseInt(n(486))/6+parseInt(n(494))/7+parseInt(n(490))/8*(-parseInt(n(481))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,692246);function xi(){const t=["button","log","9267083Snggvg","bjVRd","28kemVxG","387pLRieD","2564332bKaNQG","pUrxT","div","3549020pgAyKK","2477544yMOnQu"," Крестики нолики ","1160572frVlcW","147354mfMwdY","563240wlGmND","DVTwh"];return xi=function(){return t},xi()}const ex=ia({__name:"ListGames",emits:["gameChanged"],setup(t,{emit:e}){const n=mi,s={ceuZP:"gameChanged",aRIdM:function(l){return l()},TIbvn:function(l,c,a,h){return l(c,a,h)},bjVRd:n(484),pUrxT:n(492),DVTwh:" Камень ножницы бумага ",WQgPp:n(487),phTym:function(l,c,a,h,p){return l(c,a,h,p)}},i=qo(),r=e;function o(l){console[n(493)](l),i.gameId="g"+l,r(s.ceuZP)}return(l,c)=>{const a=n;return s.aRIdM(ge),s.TIbvn(ye,s[a(495)],null,[c[3]||(c[3]=D("h3",null,"Выберите игру",-1)),D(s[a(483)],{onClick:c[0]||(c[0]=h=>o(1))},s[a(491)]),c[4]||(c[4]=D("br",null,null,-1)),D(s[a(483)],{onClick:c[1]||(c[1]=h=>o(2))},s.WQgPp),c[5]||(c[5]=s.phTym(D,"br",null,null,-1)),D(s.pUrxT,{onClick:c[2]||(c[2]=h=>o(3))}," Морской бой "),c[6]||(c[6]=s.phTym(D,"br",null,null,-1))])}}}),wn=Sn;(function(t,e){const n=Sn,s=t();for(;;)try{if(parseInt(n(200))/1*(parseInt(n(240))/2)+parseInt(n(257))/3+-parseInt(n(275))/4*(-parseInt(n(211))/5)+-parseInt(n(169))/6+-parseInt(n(236))/7*(parseInt(n(177))/8)+-parseInt(n(144))/9*(-parseInt(n(249))/10)+-parseInt(n(157))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,521338);const tx={key:0},nx={key:1,class:wn(131)},sx={key:2},ix={key:3},rx={key:0},ox=[wn(289)],lx={key:4},cx={key:0},ax=[wn(289)],ux={key:1,class:wn(149)},hx={key:5},fx={key:6},dx={key:7};function Sn(t,e){const n=yi();return Sn=function(s,i){return s=s-120,n[s]},Sn(t,e)}function yi(){const t=["egGDg","sQxDd","mXWMe","cGcsv","WoszS","sATxw","pKAAZ","qZsmq","g1/look/","Отказаться","removeField","qgcRE","9HoEqkQ","vGOQx","then","KdEJC","жду пока не откликнится ","red-notice","zHXGO","whdbF","uZUcP","sYqOV","feDzg","ВСЕ НАСТРОЙКИ ИГРЫ","fFUtE","4497548oTrnxb","id2","name","sNfnj","maBEc","getItem","ZnZwE","WBaBc","vvbZU","HtfRF","game = ","zDhOw","3454572ETlIpu","RhIFY","Ipkbc","GhXLy","BinderComp"," Привет! ","bKspF","TKhvz","904pKjisC","uakpp","JddKx","::::::: Связывание :::::::","nickName","onValue","wmdTs","UlKFT","ERqca","zuORF","MRbRk","xpPuV","oHZWb","jrxtq","CMtFo","vijor","game","lIqQD","KAdgK","mBqNi"," Вас выбрал игрок: ","nvgkk","NflOW","579171vwHfRL","g1/look","jkQnF","stage","pMtKz","setField","XSIkH","BwTME","sIZBh","Список желающих играть:","green-bt","4540PIyAjd","4px","lTgcP","aHFel","UhWkP","Согласиться","GJjIJ","HYUjQ","meNld","VkHQY","PgKMq","KGsIb","xLPAM","VzqHZ"," с игроком ","larger","lookField"," Выбрал игрока ","getField","ZZoSx","QgaZT","length","SlZba","Rvyls","myName","50827WZsqJx","mnddG","jnYwT","fUmnT","2OXkouO","value","qmKTy","localhost","MoYNb","UGtis","EtTvR","* можете поменять ваш Никнейм","bWGOk","5207470ftubfl","VhVow","GKpdM","setItem","zpGdN","fgKJv","IkGiD","nLJsS","2195049gzXQxk","XsHyV","includes","RgCZc","keys","reload","mIzSq","scJdY","Нахожусь в списке, жду кто выберет","g1/game/","HHWfy","EriOC","pwBck","div","myId","Играем","Cbcke","g1/play/","2180mjZrEC","ADTaN","IRYDI","/game/","oLUbf","KChlG","tTcoE","VyVMa","UFPlU","opponent","eDqjz","sXaQm","accept","GzoEt","onClick","log","forEach","gAgCx","WIWyO","mVJix","red-bt","qCIrY","cjolI","PqwUM","oWqKY","* нельзя выбирать себя","TBvDS","menuBt"];return yi=function(){return t},yi()}const px=ia({__name:wn(173),props:{game:{}},setup(t){const e=wn,n={uZUcP:"myNickName",GJjIJ:function(f,u){return f+u},sATxw:e(278),bWGOk:e(167),qmKTy:function(f,u){return f===u},nLJsS:function(f,u){return f===u},JkhKv:function(f,u){return f>u},qZsmq:function(f,u){return f(u)},EriOC:function(f,u){return f!==u},sIZBh:function(f,u){return f==u},zpGdN:function(f){return f()},jnYwT:">>>> ANALIZ ",KGsIb:e(201),MRbRk:function(f,u,d){return f(u,d)},WoszS:e(140),UlKFT:"res",VhVow:function(f,u){return f==u},WIWyO:function(f,u){return f+u},mnddG:function(f,u){return f>u},NflOW:function(f,u){return f+u},bKspF:function(f,u){return f+u},KChlG:e(274),wmdTs:function(f,u){return f+u},fFUtE:function(f,u){return f+u},cjolI:"gameLink",jkQnF:function(f,u){return f+u},Ipkbc:"g1/game/",qaHco:e(155),sXaQm:function(f,u,d,x,b,te){return f(u,d,x,b,te)},SlZba:"button",GKpdM:e(210),zDhOw:function(f,u){return f(u)},MoYNb:function(f,u){return f(u)},meNld:function(f,u,d,x){return f(u,d,x)},fgKJv:"div",mIzSq:function(f,u,d,x,b){return f(u,d,x,b)},egGDg:function(f,u,d,x,b){return f(u,d,x,b)},PgKMq:e(180),tTcoE:function(f,u,d){return f(u,d)},VYjKR:function(f,u){return f+u},maBEc:function(f,u){return f+u},sELHZ:" : ",ZZoSx:function(f,u){return f(u)},eDqjz:function(f,u){return f(u)},ZnZwE:" stage:",TKhvz:function(f,u){return f(u)},fUmnT:function(f,u){return f(u)},VyVMa:function(f,u,d,x,b){return f(u,d,x,b)},qgcRE:function(f,u,d){return f(u,d)},uakpp:function(f,u,d){return f(u,d)},pMtKz:function(f,u){return f(u)},HYUjQ:function(f){return f()},VkHQY:function(f,u,d,x){return f(u,d,x)},ERqca:function(f,u){return f===u},vGOQx:function(f,u,d,x){return f(u,d,x)},MjztM:function(f,u,d){return f(u,d)},lTgcP:e(226),PqwUM:e(212),Rvyls:"center",XsHyV:"Сменить nickName",JddKx:e(149),uwhVQ:e(247),mXWMe:function(f,u,d,x,b){return f(u,d,x,b)},EFugf:e(209),KdEJC:function(f,u,d,x,b){return f(u,d,x,b)},QgaZT:function(f,u,d,x,b){return f(u,d,x,b)},xpPuV:function(f,u,d){return f(u,d)},scJdY:function(f,u,d,x){return f(u,d,x)},nvgkk:e(124),riMsw:" Зарегистрироваться в поиске ",sNfnj:function(f,u,d){return f(u,d)},gAgCx:function(f,u,d,x){return f(u,d,x)},HtfRF:function(f,u,d,x,b){return f(u,d,x,b)},UhWkP:function(f){return f()},BwTME:function(f,u,d,x){return f(u,d,x)},EtTvR:function(f,u,d,x,b){return f(u,d,x,b)},HHWfy:function(f,u,d,x,b){return f(u,d,x,b)},zuORF:function(f){return f()},GhXLy:function(f,u,d,x){return f(u,d,x)},vijor:e(129),VzqHZ:function(f,u,d){return f(u,d)},RgCZc:function(f,u){return f===u},jrxtq:function(f){return f()},vvbZU:function(f,u,d,x){return f(u,d,x)},mBqNi:e(228),oWqKY:function(f,u,d,x,b){return f(u,d,x,b)},UFPlU:function(f,u,d,x,b){return f(u,d,x,b)},pOqXT:function(f,u,d,x,b){return f(u,d,x,b)},UGtis:function(f,u,d,x){return f(u,d,x)},oLUbf:"Нет ответа, отменяю выбор",aHFel:function(f,u){return f(u)},IRYDI:e(197),lIqQD:function(f,u,d,x,b){return f(u,d,x,b)},mVJix:function(f,u,d,x,b){return f(u,d,x,b)},KAdgK:function(f,u,d,x,b){return f(u,d,x,b)},qCIrY:function(f,u,d,x,b){return f(u,d,x,b)},sYqOV:function(f,u,d,x){return f(u,d,x)},WBaBc:e(141),Cbcke:function(f,u,d,x){return f(u,d,x)},pKAAZ:e(216),IkGiD:function(f){return f()},LHEwj:function(f,u,d,x){return f(u,d,x)},whdbF:e(272),sQxDd:e(225),GzoEt:function(f,u,d,x,b){return f(u,d,x,b)},moyde:function(f,u){return f(u)},cGcsv:function(f,u,d,x,b){return f(u,d,x,b)},ADTaN:function(f,u,d,x,b){return f(u,d,x,b)},feDzg:function(f,u){return f(u)},oHZWb:function(f,u,d,x,b){return f(u,d,x,b)},zHXGO:e(243),RhIFY:function(f,u){return f(u)},XKcBa:function(f,u,d){return f(u,d)}},s=location.host[e(259)](n[e(150)]),i=n[e(186)](qo),r=n.MoYNb(qt,localStorage[e(162)](n[e(152)])),o=qt([]),l=qt(),c=qt(),a=n[e(170)](qt,""),h=function(){const f=e;i.nickName=r.value,r.value&&localStorage[f(252)](n[f(152)],r.value)};function p(){const f=e,u={pwBck:function(d,x){return n[Sn(217)](d,x)},CMtFo:n[f(137)]};console.log(n[f(248)],t[f(193)]),i[f(229)](t[f(193)]+"/play/"+i[f(271)])[f(146)](d=>{const x=f;d&&(l[x(241)]={id:d.id,name:d.name},i[x(203)]=5,i.getField(u[x(269)](u[x(269)](t[x(193)],u[x(191)]),d[x(193)]))[x(146)](b=>{a.value=b}))})}const g=function(f){const u=e;if(console.log(n[u(238)],f),o.value=[],n[u(242)](i[u(203)],0))return!1;i.stage=1;let d=!1;f&&Object[u(261)](f)[u(120)](x=>{const b=u;if(f[x][b(158)]&&n[b(242)](f[x][b(158)],i[b(271)])&&(l[b(241)]={id:x,name:f[x][b(159)]}),n[b(256)](x,String(i[b(271)]))&&(l[b(241)]={id:f[x][b(158)],name:f[x].name2}),n.JkhKv(i.stage,3))return!1;x===n[b(139)](String,i[b(271)])&&x&&(d=!0,n[b(268)](i[b(203)],3)&&(i.stage=2),f[x][b(158)]&&(i[b(203)]=4)),n[b(208)](f[x].id2,i[b(271)])&&(d=!0,i.stage=3),n.JkhKv(i[b(203)],2)&&!d&&location[b(262)](),f[x][b(287)]&&n[b(253)](M),x&&f[x]&&o.value.push({id:x,name:f[x][b(159)]})})};n.XKcBa(gn,()=>i.myId,f=>f&&setTimeout(p,500));function y(){I(),i.stage=1}function I(){const f=e;i[f(182)](n[f(222)])[f(146)](u=>g(u)),n.MRbRk(gn,()=>i[f(227)],u=>g(u))}function O(){const f=e;i[f(205)](n[f(136)]+i.myId,{name:i[f(181)]||i[f(235)]})}function V(f){const u=e,d={JEvrw:n[u(184)]};if(n[u(250)](f.id,i[u(271)]))return c[u(241)]=!0,setTimeout(()=>c[u(241)]=!1,1500),!1;i[u(205)](u(140)+f.id,{name:f[u(159)],id2:i[u(271)],name2:i[u(181)]||i[u(235)]})[u(146)](x=>{const b=u;console.log(d.JEvrw,x),l[b(241)]={id:f.id,name:f[b(159)]},i[b(203)]=3})}function j(f){const u=e;f&&l[u(241)]&&(n.zpGdN(alert),i.setField(n[u(217)](u(140),l[u(241)].id),{name:l[u(241)][u(159)],id2:i[u(271)],name2:i[u(235)],accept:!0})),!f&&i[u(205)](n[u(122)](u(140),i[u(271)]),{name:i[u(181)]||i[u(235)]})[u(146)](()=>i[u(203)]=2)}function J(){const f=e;i[f(205)](n[f(122)](n[f(136)],l[f(241)].id),{name:l[f(241)][f(159)]})[f(146)](()=>i[f(203)]=2)}function X(){var d;const f=e;console[f(290)](f(284),JSON.stringify(l[f(241)]));let u=n[f(139)](String,l[f(241)].id);n[f(237)](l.value.id,i[f(271)])?u+=n.NflOW("::",i[f(271)]):u=n[f(199)](i[f(271)],"::")+u,i[f(142)](n[f(175)](n.KChlG,i[f(271)])),i[f(142)](n[f(183)](f(274),(d=l.value)==null?void 0:d.id)),i.removeField(f(266)+u)}function M(){var x,b,te;const f=e;let u=Date.now(),d=n[f(139)](String,l[f(241)].id);n.mnddG(l[f(241)].id,i[f(271)])?d+=n.WIWyO("::",i.myId):d=n[f(175)](n.fFUtE(i.myId,"::"),d),console[f(290)](n[f(126)],d),console[f(290)]("> >> > >> gotoStartgane"),i[f(205)](n[f(156)](n[f(280)],i[f(271)]),{id:(x=l[f(241)])==null?void 0:x.id,name:(b=l[f(241)])==null?void 0:b.name,game:d,date:u}),i[f(205)](n[f(202)](n.KChlG,(te=l.value)==null?void 0:te.id),{id:i[f(271)],name:i[f(235)],game:d,date:u}),i[f(205)](n[f(199)](n[f(171)],d),{game:n.qaHco}),setTimeout(()=>{var ne;const U=f;i[U(142)](n.WoszS+((ne=l[U(241)])==null?void 0:ne.id)),i[U(142)](n.wmdTs(n[U(136)],i[U(271)])),location[U(262)]()},2e3)}return(f,u)=>{var b,te;const d=e,x={TBvDS:function(U){return U()},xLPAM:function(U,ne,Ve,Wt,on,he){return n[Sn(286)](U,ne,Ve,Wt,on,he)},XSIkH:n[d(233)],tRbIv:function(U,ne){return n.MoYNb(U,ne)}};return n[d(253)](ge),ye(je,null,[n[d(244)](He,s)?(ge(),n.meNld(ye,n[d(254)],tx,[u[7]||(u[7]=n.mIzSq(D,"hr",null,null,-1)),u[8]||(u[8]=n[d(132)](D,"i",null,n[d(221)],-1)),u[9]||(u[9]=D("br",null,null,-1)),n[d(281)](rt,n.VYjKR(n[d(161)](n[d(122)](n.wmdTs(" ",n[d(244)](it,n[d(244)](He,i).myId)),n.sELHZ),n[d(230)](it,n[d(285)](He,i)[d(235)]))," "),1),u[10]||(u[10]=n.egGDg(D,"br",null,null,-1)),n[d(187)](rt,n.maBEc(n[d(163)]+n.TKhvz(it,n[d(239)](He,i)[d(203)])," "),1),u[11]||(u[11]=n[d(282)](D,"hr",null,null,-1))])):n[d(143)](Ge,"",!0),n.nLJsS(n[d(230)](He,i)[d(203)],5)?(ge(),ye(n[d(254)],nx,[n[d(219)](D,n[d(233)],{onClick:u[0]||(u[0]=U=>X())},"❁")])):n.uakpp(Ge,"",!0),n[d(204)](He,i)[d(203)]===0?(n[d(218)](ge),n[d(220)](ye,"div",sx,[n.tTcoE(Je,ex,{onGameChanged:y})])):Ge("",!0),n[d(185)](n[d(204)](He,i)[d(203)],1)?(n[d(218)](ge),n.VkHQY(ye,n[d(254)],ix,[u[15]||(u[15]=n[d(282)](D,"p",null,d(174),-1)),n[d(145)](D,"p",null,[n.MjztM(gf,n.VyVMa(D,"input",{"onUpdate:modelValue":u[1]||(u[1]=U=>r[d(241)]=U),maxlength:"16",style:{"font-size":n[d(213)],padding:n[d(127)],"text-align":n[d(234)]},onInput:u[2]||(u[2]=U=>h()),placeholder:n[d(258)]},null,544),[[jd,r[d(241)]]])]),u[16]||(u[16]=n[d(263)](D,n[d(254)],{class:n[d(179)]},n.uwhVQ,-1)),o[d(241)]&&o[d(241)][d(232)]>1?(ge(),ye(d(270),rx,[u[12]||(u[12]=n[d(134)](D,"h3",null,n.EFugf,-1)),(n[d(176)](ge,!0),n[d(147)](ye,je,null,sl(o[d(241)],U=>{const ne=d;return n.zpGdN(ge),n[ne(286)](ye,n[ne(233)],{class:n[ne(251)],key:U.id,onClick:Ve=>V(U)},n[ne(168)](it,U[ne(159)]),9,ox)}),128)),u[13]||(u[13]=D("br",null,null,-1)),u[14]||(u[14]=n[d(231)](D,"br",null,null,-1))])):n[d(188)](Ge,"",!0),n[d(264)](D,n[d(233)],{class:n[d(198)],onClick:u[3]||(u[3]=U=>O())},n.riMsw),u[17]||(u[17]=n.VyVMa(D,"br",null,null,-1)),u[18]||(u[18]=n[d(231)](D,"br",null,null,-1))])):n[d(160)](Ge,"",!0),n[d(242)](n.qZsmq(He,i)[d(203)],2)?(n[d(218)](ge),n[d(121)](ye,n[d(254)],lx,[u[22]||(u[22]=n[d(166)](D,"p",null,d(265),-1)),o[d(241)][d(232)]?(n[d(215)](ge),n[d(207)](ye,n[d(254)],cx,[u[19]||(u[19]=n[d(246)](D,"h3",null,n.EFugf,-1)),(n[d(230)](ge,!0),n[d(267)](ye,je,null,n[d(188)](sl,o.value,U=>{const ne=d;return x[ne(130)](ge),x[ne(223)](ye,x[ne(206)],{class:ne(210),key:U.id,onClick:Ve=>V(U)},x.tRbIv(it,U.name),9,ax)}),128)),u[20]||(u[20]=n.HtfRF(D,"br",null,null,-1)),u[21]||(u[21]=n.VyVMa(D,"br",null,null,-1))])):Ge("",!0),c[d(241)]?(n[d(186)](ge),n[d(172)](ye,n[d(254)],ux,n[d(192)])):Ge("",!0)])):n[d(224)](Ge,"",!0),n[d(260)](He(i).stage,3)?(n[d(190)](ge),n.vvbZU(ye,n[d(254)],hx,[n[d(165)](D,"p",null,[u[23]||(u[23]=n[d(139)](rt,n[d(196)])),u[24]||(u[24]=n[d(128)](D,"br",null,null,-1)),n[d(283)](D,"b",null,it((b=l[d(241)])==null?void 0:b[d(159)]),1),u[25]||(u[25]=rt()),u[26]||(u[26]=n.pOqXT(D,"br",null,null,-1)),u[27]||(u[27]=rt(d(148)))]),n[d(245)](D,n[d(233)],{onClick:u[4]||(u[4]=U=>J())},n[d(279)])])):n[d(281)](Ge,"",!0),n[d(185)](n[d(239)](He,i)[d(203)],4)&&((te=l[d(241)])!=null&&te.id)?(n.HYUjQ(ge),ye("div",fx,[u[28]||(u[28]=n[d(214)](rt,n[d(277)])),u[29]||(u[29]=n[d(194)](D,"br",null,null,-1)),u[30]||(u[30]=n[d(123)](D,"br",null,null,-1)),n.VyVMa(D,"b",null,it(l[d(241)][d(159)]),1),u[31]||(u[31]=n.KAdgK(D,"br",null,null,-1)),u[32]||(u[32]=n[d(125)](D,"br",null,null,-1)),n[d(153)](D,n[d(233)],{class:d(210),onClick:u[5]||(u[5]=U=>j(!1))},n[d(164)]),n[d(273)](D,n.SlZba,{class:d(210),onClick:u[6]||(u[6]=U=>j(!0))},n[d(138)])])):Ge("",!0),He(i).stage===5&&l[d(241)]?(n[d(255)](ge),n.LHEwj(ye,n[d(254)],dx,[u[33]||(u[33]=D("h3",null,n[d(151)],-1)),u[34]||(u[34]=n[d(244)](rt,n[d(133)])),u[35]||(u[35]=n[d(288)](D,"br",null,null,-1)),D("b",null,n.moyde(it,l[d(241)][d(159)]),1),u[36]||(u[36]=n[d(195)](D,"br",null,null,-1)),u[37]||(u[37]=n[d(135)](D,"br",null,null,-1)),u[38]||(u[38]=n[d(139)](rt," Контекс игры:")),u[39]||(u[39]=n[d(276)](D,"br",null,null,-1)),n[d(224)](rt,n.fFUtE(" ",n[d(154)](it,a[d(241)]))+" ",1),u[40]||(u[40]=n[d(195)](D,"br",null,null,-1)),u[41]||(u[41]=n[d(166)](D,"br",null,null,-1))])):n[d(178)](Ge,"",!0),u[42]||(u[42]=n[d(189)](D,"br",null,null,-1)),u[43]||(u[43]=D("br",null,null,-1))],64)}}}),_x={class:"game"},gx={__name:"RockPaperSScissors",setup(t){return(e,n)=>(ge(),ye("div",_x,[n[0]||(n[0]=D("h1",null,"♕",-1)),n[1]||(n[1]=D("h2",null,null,-1)),D("div",null,[Je(px,{game:"g1"})])]))}},mx=np(gx,[["__scopeId","data-v-7afa5ccc"]]),xx={__name:"App",setup(t){const e=qo();let n=tf(mx);return ca(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(s,i)=>(ge(),Aa(Pf(He(n))))}},mr=vi;(function(t,e){const n=vi,s=t();for(;;)try{if(-parseInt(n(454))/1+-parseInt(n(459))/2*(parseInt(n(458))/3)+parseInt(n(453))/4+-parseInt(n(461))/5*(parseInt(n(457))/6)+-parseInt(n(462))/7+parseInt(n(456))/8+parseInt(n(452))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(bi,358924);function vi(t,e){const n=bi();return vi=function(s,i){return s=s-452,n[s]},vi(t,e)}function bi(){const t=["484018RTSkJF","use","956400iwmUJU","6VsmFyh","852VfVZSI","4062qBhMWm","mount","1161185TlgcSM","2154082vyehJD","#app","14684796gYelPM","834060VnscID"];return bi=function(){return t},bi()}const yx=Yd(),Ec=Gd(xx);Ec[mr(455)](yx),Ec[mr(460)](mr(463));
