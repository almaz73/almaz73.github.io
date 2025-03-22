function Hs(t,e){const n=Us();return Hs=function(s,i){return s=s-475,n[s]},Hs(t,e)}(function(t,e){const n=Hs,s=t();for(;;)try{if(parseInt(n(502))/1*(parseInt(n(511))/2)+parseInt(n(483))/3*(parseInt(n(491))/4)+parseInt(n(497))/5+parseInt(n(490))/6*(-parseInt(n(513))/7)+parseInt(n(512))/8*(parseInt(n(503))/9)+-parseInt(n(504))/10*(parseInt(n(481))/11)+parseInt(n(509))/12*(parseInt(n(510))/13)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Us,372309),function(){const e=Hs,n={SoNdz:function(o,l){return o!==l},BPgPV:e(485),QUCEW:e(514),CqSHF:function(o,l){return o===l},tOKPA:"modulepreload",YEPSE:function(o,l){return o(l)},WzuUq:e(498),kruit:e(476),fPxGs:e(506),uzFqi:function(o,l){return o(l)},bKkDZ:e(507),JkQot:e(496),pAkaL:function(o,l){return o(l)}},s=document[e(475)](n[e(516)])[e(495)];if(s&&s.supports&&s.supports(n.tOKPA))return;for(const o of document[e(508)](n[e(500)]))n[e(505)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(489)](c.type,n.BPgPV))for(const a of c[l(488)])a[l(494)]===n[l(487)]&&n[l(480)](a[l(479)],n[l(517)])&&n[l(492)](r,a)})[e(499)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o.integrity&&(c[l(515)]=o[l(515)]),o[l(493)]&&(c[l(493)]=o[l(493)]),o[l(478)]===n[l(501)]?c[l(486)]="include":o.crossOrigin===n[l(484)]?c.credentials=n[l(477)]:c.credentials="same-origin",c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n.uzFqi(i,o);fetch(o[l(482)],c)}}();function Us(){const t=["LINK","integrity","bKkDZ","tOKPA","createElement","anonymous","fPxGs","crossOrigin","rel","CqSHF","682088tjmrbC","href","397599xEClrA","kruit","childList","credentials","QUCEW","addedNodes","SoNdz","955590lUOCXy","8ycMedM","YEPSE","referrerPolicy","tagName","relList",'link[rel="modulepreload"]',"419295qMjvhi","use-credentials","observe","JkQot","WzuUq","225661LibvBD","9srgsmS","40RKahiG","pAkaL","omit","link","querySelectorAll","520392VaUlAr","39QEZtZx","2qLYrTl","1873496XTgVoI","14wGUFEG"];return Us=function(){return t},Us()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},dn=[],ut=()=>{},bh=()=>!1,bi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xr=t=>t.startsWith("onUpdate:"),Re=Object.assign,Qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Eh=Object.prototype.hasOwnProperty,ne=(t,e)=>Eh.call(t,e),H=Array.isArray,pn=t=>Ei(t)==="[object Map]",Ec=t=>Ei(t)==="[object Set]",U=t=>typeof t=="function",ge=t=>typeof t=="string",Wt=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",Ic=t=>(de(t)||U(t))&&U(t.then)&&U(t.catch),wc=Object.prototype.toString,Ei=t=>wc.call(t),Ih=t=>Ei(t).slice(8,-1),Sc=t=>Ei(t)==="[object Object]",Zr=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ii=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wh=/-(\w)/g,qe=Ii(t=>t.replace(wh,(e,n)=>n?n.toUpperCase():"")),Sh=/\B([A-Z])/g,sn=Ii(t=>t.replace(Sh,"-$1").toLowerCase()),wi=Ii(t=>t.charAt(0).toUpperCase()+t.slice(1)),zi=Ii(t=>t?`on${wi(t)}`:""),Rt=(t,e)=>!Object.is(t,e),Fs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zo;const Si=()=>Zo||(Zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Ah(s):Jr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||de(t))return t}const Th=/;(?![^(]*\))/g,Nh=/:([^]+)/,Rh=/\/\*[^]*?\*\//g;function Ah(t){const e={};return t.replace(Rh,"").split(Th).forEach(n=>{if(n){const s=n.split(Nh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function eo(t){let e="";if(ge(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=eo(t[n]);s&&(e+=s+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ph="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oh=Yr(Ph);function Nc(t){return!!t||t===""}const Rc=t=>!!(t&&t.__v_isRef===!0),ot=t=>ge(t)?t:t==null?"":H(t)||de(t)&&(t.toString===wc||!U(t.toString))?Rc(t)?ot(t.value):JSON.stringify(t,Ac,2):String(t),Ac=(t,e)=>Rc(e)?Ac(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Yi(s,r)+" =>"]=i,n),{})}:Ec(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Yi(n))}:Wt(e)?Yi(e):de(e)&&!H(e)&&!Sc(e)?String(e):e,Yi=(t,e="")=>{var n;return Wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Pc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Oc(t){return new Pc(t)}function Dc(){return Pe}function Dh(t,e=!1){Pe&&Pe.cleanups.push(t)}let ce;const Xi=new WeakSet;class kc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xi.has(this)&&(Xi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jo(this),Lc(this);const e=ce,n=Ze;ce=this,Ze=!0;try{return this.fn()}finally{Wc(this),ce=e,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)so(e);this.deps=this.depsTail=void 0,Jo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yr(this)&&this.run()}get dirty(){return yr(this)}}let Mc=0,jn,$n;function Fc(t,e=!1){if(t.flags|=8,e){t.next=$n,$n=t;return}t.next=jn,jn=t}function to(){Mc++}function no(){if(--Mc>0)return;if($n){let e=$n;for($n=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;jn;){let e=jn;for(jn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Lc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),so(s),kh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function yr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ts))return;t.globalVersion=ts;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!yr(t)){t.flags&=-3;return}const n=ce,s=Ze;ce=t,Ze=!0;try{Lc(t);const i=t.fn(t._value);(e.version===0||Rt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,Ze=s,Wc(t),t.flags&=-3}}function so(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)so(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function kh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ze=!0;const Hc=[];function Bt(){Hc.push(Ze),Ze=!1}function Ht(){const t=Hc.pop();Ze=t===void 0?!0:t}function Jo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let ts=0;class Mh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class io{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!Ze||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new Mh(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Uc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,ts++,this.notify(e)}notify(e){to();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{no()}}}function Uc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Uc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vs=new WeakMap,Xt=Symbol(""),vr=Symbol(""),ns=Symbol("");function Se(t,e,n){if(Ze&&ce){let s=Vs.get(t);s||Vs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new io),i.map=s,i.key=n),i.track()}}function _t(t,e,n,s,i,r){const o=Vs.get(t);if(!o){ts++;return}const l=c=>{c&&c.trigger()};if(to(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&Zr(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,g)=>{(g==="length"||g===ns||!Wt(g)&&g>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ns)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Xt)),pn(t)&&l(o.get(vr)));break;case"delete":c||(l(o.get(Xt)),pn(t)&&l(o.get(vr)));break;case"set":pn(t)&&l(o.get(Xt));break}}no()}function Fh(t,e){const n=Vs.get(t);return n&&n.get(e)}function ln(t){const e=Z(t);return e===t?e:(Se(e,"iterate",ns),Ke(t)?e:e.map(Te))}function Ti(t){return Se(t=Z(t),"iterate",ns),t}const Lh={__proto__:null,[Symbol.iterator](){return Qi(this,Symbol.iterator,Te)},concat(...t){return ln(this).concat(...t.map(e=>H(e)?ln(e):e))},entries(){return Qi(this,"entries",t=>(t[1]=Te(t[1]),t))},every(t,e){return dt(this,"every",t,e,void 0,arguments)},filter(t,e){return dt(this,"filter",t,e,n=>n.map(Te),arguments)},find(t,e){return dt(this,"find",t,e,Te,arguments)},findIndex(t,e){return dt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dt(this,"findLast",t,e,Te,arguments)},findLastIndex(t,e){return dt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zi(this,"includes",t)},indexOf(...t){return Zi(this,"indexOf",t)},join(t){return ln(this).join(t)},lastIndexOf(...t){return Zi(this,"lastIndexOf",t)},map(t,e){return dt(this,"map",t,e,void 0,arguments)},pop(){return Dn(this,"pop")},push(...t){return Dn(this,"push",t)},reduce(t,...e){return el(this,"reduce",t,e)},reduceRight(t,...e){return el(this,"reduceRight",t,e)},shift(){return Dn(this,"shift")},some(t,e){return dt(this,"some",t,e,void 0,arguments)},splice(...t){return Dn(this,"splice",t)},toReversed(){return ln(this).toReversed()},toSorted(t){return ln(this).toSorted(t)},toSpliced(...t){return ln(this).toSpliced(...t)},unshift(...t){return Dn(this,"unshift",t)},values(){return Qi(this,"values",Te)}};function Qi(t,e,n){const s=Ti(t),i=s[e]();return s!==t&&!Ke(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Wh=Array.prototype;function dt(t,e,n,s,i,r){const o=Ti(t),l=o!==t&&!Ke(t),c=o[e];if(c!==Wh[e]){const d=c.apply(t,r);return l?Te(d):d}let a=n;o!==t&&(l?a=function(d,g){return n.call(this,Te(d),g,t)}:n.length>2&&(a=function(d,g){return n.call(this,d,g,t)}));const h=c.call(o,a,s);return l&&i?i(h):h}function el(t,e,n,s){const i=Ti(t);let r=n;return i!==t&&(Ke(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Te(l),c,t)}),i[e](r,...s)}function Zi(t,e,n){const s=Z(t);Se(s,"iterate",ns);const i=s[e](...n);return(i===-1||i===!1)&&lo(n[0])?(n[0]=Z(n[0]),s[e](...n)):i}function Dn(t,e,n=[]){Bt(),to();const s=Z(t)[e].apply(t,n);return no(),Ht(),s}const Bh=Yr("__proto__,__v_isRef,__isVue"),Vc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt));function Hh(t){Wt(t)||(t=String(t));const e=Z(this);return Se(e,"has",t),e.hasOwnProperty(t)}class jc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Xh:qc:r?Kc:Gc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=Lh[n]))return c;if(n==="hasOwnProperty")return Hh}const l=Reflect.get(e,n,_e(e)?e:s);return(Wt(n)?Vc.has(n):Bh(n))||(i||Se(e,"get",n),r)?l:_e(l)?o&&Zr(n)?l:l.value:de(l)?i?zc(l):Ni(l):l}}class $c extends jc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Zt(r);if(!Ke(s)&&!Zt(s)&&(r=Z(r),s=Z(s)),!H(e)&&_e(r)&&!_e(s))return c?!1:(r.value=s,!0)}const o=H(e)&&Zr(n)?Number(n)<e.length:ne(e,n),l=Reflect.set(e,n,s,_e(e)?e:i);return e===Z(i)&&(o?Rt(s,r)&&_t(e,"set",n,s):_t(e,"add",n,s)),l}deleteProperty(e,n){const s=ne(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&_t(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Wt(n)||!Vc.has(n))&&Se(e,"has",n),s}ownKeys(e){return Se(e,"iterate",H(e)?"length":Xt),Reflect.ownKeys(e)}}class Uh extends jc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Vh=new $c,jh=new Uh,$h=new $c(!0);const Cr=t=>t,Rs=t=>Reflect.getPrototypeOf(t);function Gh(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=pn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),h=n?Cr:e?br:Te;return!e&&Se(r,"iterate",c?vr:Xt),{next(){const{value:d,done:g}=a.next();return g?{value:d,done:g}:{value:l?[h(d[0]),h(d[1])]:h(d),done:g}},[Symbol.iterator](){return this}}}}function As(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Kh(t,e){const n={get(i){const r=this.__v_raw,o=Z(r),l=Z(i);t||(Rt(i,l)&&Se(o,"get",i),Se(o,"get",l));const{has:c}=Rs(o),a=e?Cr:t?br:Te;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Se(Z(i),"iterate",Xt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Z(r),l=Z(i);return t||(Rt(i,l)&&Se(o,"has",i),Se(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Z(l),a=e?Cr:t?br:Te;return!t&&Se(c,"iterate",Xt),l.forEach((h,d)=>i.call(r,a(h),a(d),o))}};return Re(n,t?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(i){!e&&!Ke(i)&&!Zt(i)&&(i=Z(i));const r=Z(this);return Rs(r).has.call(r,i)||(r.add(i),_t(r,"add",i,i)),this},set(i,r){!e&&!Ke(r)&&!Zt(r)&&(r=Z(r));const o=Z(this),{has:l,get:c}=Rs(o);let a=l.call(o,i);a||(i=Z(i),a=l.call(o,i));const h=c.call(o,i);return o.set(i,r),a?Rt(r,h)&&_t(o,"set",i,r):_t(o,"add",i,r),this},delete(i){const r=Z(this),{has:o,get:l}=Rs(r);let c=o.call(r,i);c||(i=Z(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&_t(r,"delete",i,void 0),a},clear(){const i=Z(this),r=i.size!==0,o=i.clear();return r&&_t(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Gh(i,t,e)}),n}function ro(t,e){const n=Kh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ne(n,i)&&i in s?n:s,i,r)}const qh={get:ro(!1,!1)},zh={get:ro(!1,!0)},Yh={get:ro(!0,!1)};const Gc=new WeakMap,Kc=new WeakMap,qc=new WeakMap,Xh=new WeakMap;function Qh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zh(t){return t.__v_skip||!Object.isExtensible(t)?0:Qh(Ih(t))}function Ni(t){return Zt(t)?t:oo(t,!1,Vh,qh,Gc)}function Jh(t){return oo(t,!1,$h,zh,Kc)}function zc(t){return oo(t,!0,jh,Yh,qc)}function oo(t,e,n,s,i){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Zh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function At(t){return Zt(t)?At(t.__v_raw):!!(t&&t.__v_isReactive)}function Zt(t){return!!(t&&t.__v_isReadonly)}function Ke(t){return!!(t&&t.__v_isShallow)}function lo(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function co(t){return!ne(t,"__v_skip")&&Object.isExtensible(t)&&Tc(t,"__v_skip",!0),t}const Te=t=>de(t)?Ni(t):t,br=t=>de(t)?zc(t):t;function _e(t){return t?t.__v_isRef===!0:!1}function wt(t){return Yc(t,!1)}function ef(t){return Yc(t,!0)}function Yc(t,e){return _e(t)?t:new tf(t,e)}class tf{constructor(e,n){this.dep=new io,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Z(e),this._value=n?e:Te(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ke(e)||Zt(e);e=s?e:Z(e),Rt(e,n)&&(this._rawValue=e,this._value=s?e:Te(e),this.dep.trigger())}}function Ue(t){return _e(t)?t.value:t}const nf={get:(t,e,n)=>e==="__v_raw"?t:Ue(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Xc(t){return At(t)?t:new Proxy(t,nf)}function sf(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=of(t,n);return e}class rf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Fh(Z(this._object),this._key)}}function of(t,e,n){const s=t[e];return _e(s)?s:new rf(t,e,n)}class lf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new io(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ts-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Fc(this,!0),!0}get value(){const e=this.dep.track();return Bc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cf(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new lf(s,i,n)}const Ps={},js=new WeakMap;let Gt;function af(t,e=!1,n=Gt){if(n){let s=js.get(n);s||js.set(n,s=[]),s.push(t)}}function uf(t,e,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=F=>i?F:Ke(F)||i===!1||i===0?gt(F,1):gt(F);let h,d,g,x,I=!1,O=!1;if(_e(t)?(d=()=>t.value,I=Ke(t)):At(t)?(d=()=>a(t),I=!0):H(t)?(O=!0,I=t.some(F=>At(F)||Ke(F)),d=()=>t.map(F=>{if(_e(F))return F.value;if(At(F))return a(F);if(U(F))return c?c(F,2):F()})):U(t)?e?d=c?()=>c(t,2):t:d=()=>{if(g){Bt();try{g()}finally{Ht()}}const F=Gt;Gt=h;try{return c?c(t,3,[x]):t(x)}finally{Gt=F}}:d=ut,e&&i){const F=d,Q=i===!0?1/0:i;d=()=>gt(F(),Q)}const $=Dc(),V=()=>{h.stop(),$&&$.active&&Qr($.effects,h)};if(r&&e){const F=e;e=(...Q)=>{F(...Q),V()}}let X=O?new Array(t.length).fill(Ps):Ps;const ee=F=>{if(!(!(h.flags&1)||!h.dirty&&!F))if(e){const Q=h.run();if(i||I||(O?Q.some((p,u)=>Rt(p,X[u])):Rt(Q,X))){g&&g();const p=Gt;Gt=h;try{const u=[Q,X===Ps?void 0:O&&X[0]===Ps?[]:X,x];c?c(e,3,u):e(...u),X=Q}finally{Gt=p}}}else h.run()};return l&&l(ee),h=new kc(d),h.scheduler=o?()=>o(ee,!1):ee,x=F=>af(F,!1,h),g=h.onStop=()=>{const F=js.get(h);if(F){if(c)c(F,4);else for(const Q of F)Q();js.delete(h)}},e?s?ee(!0):X=h.run():o?o(ee.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function gt(t,e=1/0,n){if(e<=0||!de(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_e(t))gt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)gt(t[s],e,n);else if(Ec(t)||pn(t))t.forEach(s=>{gt(s,e,n)});else if(Sc(t)){for(const s in t)gt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&gt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xs(t,e,n,s){try{return s?t(...s):t()}catch(i){Ri(i,e,n)}}function ht(t,e,n,s){if(U(t)){const i=xs(t,e,n,s);return i&&Ic(i)&&i.catch(r=>{Ri(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}}function Ri(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,a)===!1)return}l=l.parent}if(r){Bt(),xs(r,null,10,[t,c,a]),Ht();return}}hf(t,n,i,s,o)}function hf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Oe=[];let lt=-1;const _n=[];let St=null,un=0;const Qc=Promise.resolve();let $s=null;function Zc(t){const e=$s||Qc;return t?e.then(this?t.bind(this):t):e}function ff(t){let e=lt+1,n=Oe.length;for(;e<n;){const s=e+n>>>1,i=Oe[s],r=ss(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ao(t){if(!(t.flags&1)){const e=ss(t),n=Oe[Oe.length-1];!n||!(t.flags&2)&&e>=ss(n)?Oe.push(t):Oe.splice(ff(e),0,t),t.flags|=1,Jc()}}function Jc(){$s||($s=Qc.then(ta))}function df(t){H(t)?_n.push(...t):St&&t.id===-1?St.splice(un+1,0,t):t.flags&1||(_n.push(t),t.flags|=1),Jc()}function tl(t,e,n=lt+1){for(;n<Oe.length;n++){const s=Oe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ea(t){if(_n.length){const e=[...new Set(_n)].sort((n,s)=>ss(n)-ss(s));if(_n.length=0,St){St.push(...e);return}for(St=e,un=0;un<St.length;un++){const n=St[un];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}St=null,un=0}}const ss=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ta(t){try{for(lt=0;lt<Oe.length;lt++){const e=Oe[lt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;lt<Oe.length;lt++){const e=Oe[lt];e&&(e.flags&=-2)}lt=-1,Oe.length=0,ea(),$s=null,(Oe.length||_n.length)&&ta()}}let Me=null,na=null;function Gs(t){const e=Me;return Me=t,na=t&&t.type.__scopeId||null,e}function pf(t,e=Me,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fl(-1);const r=Gs(e);let o;try{o=t(...i)}finally{Gs(r),s._d&&fl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _f(t,e){if(Me===null)return t;const n=Di(Me),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ie]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&gt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Bt(),ht(c,n,8,[t.el,l,t,e]),Ht())}}const gf=Symbol("_vte"),mf=t=>t.__isTeleport;function uo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,uo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function sa(t,e){return U(t)?Re({name:t.name},e,{setup:t}):t}function ia(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ks(t,e,n,s,i=!1){if(H(t)){t.forEach((I,O)=>Ks(I,e&&(H(e)?e[O]:e),n,s,i));return}if(Gn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ks(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Di(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,h=l.refs===ie?l.refs={}:l.refs,d=l.setupState,g=Z(d),x=d===ie?()=>!1:I=>ne(g,I);if(a!=null&&a!==c&&(ge(a)?(h[a]=null,x(a)&&(d[a]=null)):_e(a)&&(a.value=null)),U(c))xs(c,l,12,[o,h]);else{const I=ge(c),O=_e(c);if(I||O){const $=()=>{if(t.f){const V=I?x(c)?d[c]:h[c]:c.value;i?H(V)&&Qr(V,r):H(V)?V.includes(r)||V.push(r):I?(h[c]=[r],x(c)&&(d[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else I?(h[c]=o,x(c)&&(d[c]=o)):O&&(c.value=o,t.k&&(h[t.k]=o))};o?($.id=-1,Ve($,n)):$()}}}Si().requestIdleCallback;Si().cancelIdleCallback;const Gn=t=>!!t.type.__asyncLoader,ra=t=>t.type.__isKeepAlive;function xf(t,e){oa(t,"a",e)}function yf(t,e){oa(t,"da",e)}function oa(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ai(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ra(i.parent.vnode)&&vf(s,e,n,i),i=i.parent}}function vf(t,e,n,s){const i=Ai(e,t,s,!0);ca(()=>{Qr(s[e],i)},n)}function Ai(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Bt();const l=ys(n),c=ht(e,n,t,o);return l(),Ht(),c});return s?i.unshift(r):i.push(r),r}}const Ct=t=>(e,n=Ie)=>{(!rs||t==="sp")&&Ai(t,(...s)=>e(...s),n)},Cf=Ct("bm"),la=Ct("m"),bf=Ct("bu"),Ef=Ct("u"),If=Ct("bum"),ca=Ct("um"),wf=Ct("sp"),Sf=Ct("rtg"),Tf=Ct("rtc");function Nf(t,e=Ie){Ai("ec",t,e)}const Rf="components",aa=Symbol.for("v-ndc");function Af(t){return ge(t)?Pf(Rf,t,!1)||t:t||aa}function Pf(t,e,n=!0,s=!1){const i=Me||Ie;if(i){const r=i.type;{const l=yd(r,!1);if(l&&(l===e||l===qe(e)||l===wi(qe(e))))return r}const o=nl(i[t]||r[t],e)||nl(i.appContext[t],e);return!o&&s?r:o}}function nl(t,e){return t&&(t[e]||t[qe(e)]||t[wi(qe(e))])}function sl(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||ge(t)){const l=o&&At(t);let c=!1;l&&(c=!Ke(t),t=Ti(t)),i=new Array(t.length);for(let a=0,h=t.length;a<h;a++)i[a]=e(c?Te(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(de(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const h=l[c];i[c]=e(t[h],h,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Er=t=>t?Oa(t)?Di(t):Er(t.parent):null,Kn=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Er(t.parent),$root:t=>Er(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>{ao(t.update)}),$nextTick:t=>t.n||(t.n=Zc.bind(t.proxy)),$watch:t=>ed.bind(t)}),Ji=(t,e)=>t!==ie&&!t.__isScriptSetup&&ne(t,e),Of={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ji(s,e))return o[e]=1,s[e];if(i!==ie&&ne(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&ne(a,e))return o[e]=3,r[e];if(n!==ie&&ne(n,e))return o[e]=4,n[e];Ir&&(o[e]=0)}}const h=Kn[e];let d,g;if(h)return e==="$attrs"&&Se(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==ie&&ne(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ne(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ji(i,e)?(i[e]=n,!0):s!==ie&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ie&&ne(t,o)||Ji(e,o)||(l=r[0])&&ne(l,o)||ne(s,o)||ne(Kn,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function il(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ir=!0;function Df(t){const e=ha(t),n=t.proxy,s=t.ctx;Ir=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:h,beforeMount:d,mounted:g,beforeUpdate:x,updated:I,activated:O,deactivated:$,beforeDestroy:V,beforeUnmount:X,destroyed:ee,unmounted:F,render:Q,renderTracked:p,renderTriggered:u,errorCaptured:f,serverPrefetch:v,expose:C,inheritAttrs:k,components:j,directives:te,filters:$e}=e;if(a&&kf(a,s,null),o)for(const G in o){const oe=o[G];U(oe)&&(s[G]=oe.bind(n))}if(i){const G=i.call(n,n);de(G)&&(t.data=Ni(G))}if(Ir=!0,r)for(const G in r){const oe=r[G],Ut=U(oe)?oe.bind(n,n):U(oe.get)?oe.get.bind(n,n):ut,Ts=!U(oe)&&U(oe.set)?oe.set.bind(n):ut,Vt=ka({get:Ut,set:Ts});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:tt=>Vt.value=tt})}if(l)for(const G in l)ua(l[G],s,n,G);if(c){const G=U(c)?c.call(n):c;Reflect.ownKeys(G).forEach(oe=>{Hf(oe,G[oe])})}h&&rl(h,t,"c");function fe(G,oe){H(oe)?oe.forEach(Ut=>G(Ut.bind(n))):oe&&G(oe.bind(n))}if(fe(Cf,d),fe(la,g),fe(bf,x),fe(Ef,I),fe(xf,O),fe(yf,$),fe(Nf,f),fe(Tf,p),fe(Sf,u),fe(If,X),fe(ca,F),fe(wf,v),H(C))if(C.length){const G=t.exposed||(t.exposed={});C.forEach(oe=>{Object.defineProperty(G,oe,{get:()=>n[oe],set:Ut=>n[oe]=Ut})})}else t.exposed||(t.exposed={});Q&&t.render===ut&&(t.render=Q),k!=null&&(t.inheritAttrs=k),j&&(t.components=j),te&&(t.directives=te),v&&ia(t)}function kf(t,e,n=ut){H(t)&&(t=wr(t));for(const s in t){const i=t[s];let r;de(i)?"default"in i?r=qn(i.from||s,i.default,!0):r=qn(i.from||s):r=qn(i),_e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function rl(t,e,n){ht(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ua(t,e,n,s){let i=s.includes(".")?wa(n,s):()=>n[s];if(ge(t)){const r=e[t];U(r)&&gn(i,r)}else if(U(t))gn(i,t.bind(n));else if(de(t))if(H(t))t.forEach(r=>ua(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&gn(i,r,t)}}function ha(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>qs(c,a,o,!0)),qs(c,e,o)),de(e)&&r.set(e,c),c}function qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qs(t,r,n,!0),i&&i.forEach(o=>qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Mf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Mf={data:ol,props:ll,emits:ll,methods:Un,computed:Un,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Un,directives:Un,watch:Lf,provide:ol,inject:Ff};function ol(t,e){return e?t?function(){return Re(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Ff(t,e){return Un(wr(t),wr(e))}function wr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?Re(Object.create(null),t,e):e}function ll(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Re(Object.create(null),il(t),il(e??{})):e}function Lf(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function fa(){return{app:null,config:{isNativeTag:bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Bf(t,e){return function(s,i=null){U(s)||(s=Re({},s)),i!=null&&!de(i)&&(i=null);const r=fa(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Wf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Cd,get config(){return r.config},set config(h){},use(h,...d){return o.has(h)||(h&&U(h.install)?(o.add(h),h.install(a,...d)):U(h)&&(o.add(h),h(a,...d))),a},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),a},component(h,d){return d?(r.components[h]=d,a):r.components[h]},directive(h,d){return d?(r.directives[h]=d,a):r.directives[h]},mount(h,d,g){if(!c){const x=a._ceVNode||Je(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,h,g),c=!0,a._container=h,h.__vue_app__=a,Di(x.component)}},onUnmount(h){l.push(h)},unmount(){c&&(ht(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(h,d){return r.provides[h]=d,a},runWithContext(h){const d=Qt;Qt=a;try{return h()}finally{Qt=d}}};return a}}let Qt=null;function Hf(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function qn(t,e,n=!1){const s=Ie||Me;if(s||Qt){const i=Qt?Qt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function Uf(){return!!(Ie||Me||Qt)}const da={},pa=()=>Object.create(da),_a=t=>Object.getPrototypeOf(t)===da;function Vf(t,e,n,s=!1){const i={},r=pa();t.propsDefaults=Object.create(null),ga(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function jf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(Pi(t.emitsOptions,g))continue;const x=e[g];if(c)if(ne(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const I=qe(g);i[I]=Sr(c,l,I,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{ga(t,e,i,r)&&(a=!0);let h;for(const d in l)(!e||!ne(e,d)&&((h=sn(d))===d||!ne(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(i[d]=Sr(c,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!ne(e,d))&&(delete r[d],a=!0)}a&&_t(t.attrs,"set","")}function ga(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Vn(c))continue;const a=e[c];let h;i&&ne(i,h=qe(c))?!r||!r.includes(h)?n[h]=a:(l||(l={}))[h]=a:Pi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Z(n),a=l||ie;for(let h=0;h<r.length;h++){const d=r[h];n[d]=Sr(i,c,d,a[d],t,!ne(a,d))}}return o}function Sr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ne(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const h=ys(i);s=a[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===sn(n))&&(s=!0))}return s}const $f=new WeakMap;function ma(t,e,n=!1){const s=n?$f:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!U(t)){const h=d=>{c=!0;const[g,x]=ma(d,e,!0);Re(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return de(t)&&s.set(t,dn),dn;if(H(r))for(let h=0;h<r.length;h++){const d=qe(r[h]);cl(d)&&(o[d]=ie)}else if(r)for(const h in r){const d=qe(h);if(cl(d)){const g=r[h],x=o[d]=H(g)||U(g)?{type:g}:Re({},g),I=x.type;let O=!1,$=!0;if(H(I))for(let V=0;V<I.length;++V){const X=I[V],ee=U(X)&&X.name;if(ee==="Boolean"){O=!0;break}else ee==="String"&&($=!1)}else O=U(I)&&I.name==="Boolean";x[0]=O,x[1]=$,(O||ne(x,"default"))&&l.push(d)}}const a=[o,l];return de(t)&&s.set(t,a),a}function cl(t){return t[0]!=="$"&&!Vn(t)}const xa=t=>t[0]==="_"||t==="$stable",ho=t=>H(t)?t.map(ct):[ct(t)],Gf=(t,e,n)=>{if(e._n)return e;const s=pf((...i)=>ho(e(...i)),n);return s._c=!1,s},ya=(t,e,n)=>{const s=t._ctx;for(const i in t){if(xa(i))continue;const r=t[i];if(U(r))e[i]=Gf(i,r,s);else if(r!=null){const o=ho(r);e[i]=()=>o}}},va=(t,e)=>{const n=ho(e);t.slots.default=()=>n},Ca=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Kf=(t,e,n)=>{const s=t.slots=pa();if(t.vnode.shapeFlag&32){const i=e._;i?(Ca(s,e,n),n&&Tc(s,"_",i,!0)):ya(e,s)}else e&&va(t,e)},qf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ca(i,e,n):(r=!e.$stable,ya(e,i)),o=e}else e&&(va(t,e),o={default:1});if(r)for(const l in i)!xa(l)&&o[l]==null&&delete i[l]},Ve=ld;function zf(t){return Yf(t)}function Yf(t,e){const n=Si();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:h,parentNode:d,nextSibling:g,setScopeId:x=ut,insertStaticContent:I}=t,O=(_,m,y,w=null,b=null,E=null,A=void 0,R=null,N=!!m.dynamicChildren)=>{if(_===m)return;_&&!kn(_,m)&&(w=Ns(_),tt(_,b,E,!0),_=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:L,shapeFlag:P}=m;switch(S){case Oi:$(_,m,y,w);break;case Jt:V(_,m,y,w);break;case tr:_==null&&X(m,y,w,A);break;case Ge:j(_,m,y,w,b,E,A,R,N);break;default:P&1?Q(_,m,y,w,b,E,A,R,N):P&6?te(_,m,y,w,b,E,A,R,N):(P&64||P&128)&&S.process(_,m,y,w,b,E,A,R,N,Pn)}L!=null&&b&&Ks(L,_&&_.ref,E,m||_,!m)},$=(_,m,y,w)=>{if(_==null)s(m.el=l(m.children),y,w);else{const b=m.el=_.el;m.children!==_.children&&a(b,m.children)}},V=(_,m,y,w)=>{_==null?s(m.el=c(m.children||""),y,w):m.el=_.el},X=(_,m,y,w)=>{[_.el,_.anchor]=I(_.children,m,y,w,_.el,_.anchor)},ee=({el:_,anchor:m},y,w)=>{let b;for(;_&&_!==m;)b=g(_),s(_,y,w),_=b;s(m,y,w)},F=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},Q=(_,m,y,w,b,E,A,R,N)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),_==null?p(m,y,w,b,E,A,R,N):v(_,m,b,E,A,R,N)},p=(_,m,y,w,b,E,A,R)=>{let N,S;const{props:L,shapeFlag:P,transition:M,dirs:B}=_;if(N=_.el=o(_.type,E,L&&L.is,L),P&8?h(N,_.children):P&16&&f(_.children,N,null,w,b,er(_,E),A,R),B&&jt(_,null,w,"created"),u(N,_,_.scopeId,A,w),L){for(const le in L)le!=="value"&&!Vn(le)&&r(N,le,null,L[le],E,w);"value"in L&&r(N,"value",null,L.value,E),(S=L.onVnodeBeforeMount)&&rt(S,w,_)}B&&jt(_,null,w,"beforeMount");const Y=Xf(b,M);Y&&M.beforeEnter(N),s(N,m,y),((S=L&&L.onVnodeMounted)||Y||B)&&Ve(()=>{S&&rt(S,w,_),Y&&M.enter(N),B&&jt(_,null,w,"mounted")},b)},u=(_,m,y,w,b)=>{if(y&&x(_,y),w)for(let E=0;E<w.length;E++)x(_,w[E]);if(b){let E=b.subTree;if(m===E||Ta(E.type)&&(E.ssContent===m||E.ssFallback===m)){const A=b.vnode;u(_,A,A.scopeId,A.slotScopeIds,b.parent)}}},f=(_,m,y,w,b,E,A,R,N=0)=>{for(let S=N;S<_.length;S++){const L=_[S]=R?Tt(_[S]):ct(_[S]);O(null,L,m,y,w,b,E,A,R)}},v=(_,m,y,w,b,E,A)=>{const R=m.el=_.el;let{patchFlag:N,dynamicChildren:S,dirs:L}=m;N|=_.patchFlag&16;const P=_.props||ie,M=m.props||ie;let B;if(y&&$t(y,!1),(B=M.onVnodeBeforeUpdate)&&rt(B,y,m,_),L&&jt(m,_,y,"beforeUpdate"),y&&$t(y,!0),(P.innerHTML&&M.innerHTML==null||P.textContent&&M.textContent==null)&&h(R,""),S?C(_.dynamicChildren,S,R,y,w,er(m,b),E):A||oe(_,m,R,null,y,w,er(m,b),E,!1),N>0){if(N&16)k(R,P,M,y,b);else if(N&2&&P.class!==M.class&&r(R,"class",null,M.class,b),N&4&&r(R,"style",P.style,M.style,b),N&8){const Y=m.dynamicProps;for(let le=0;le<Y.length;le++){const se=Y[le],Be=P[se],ke=M[se];(ke!==Be||se==="value")&&r(R,se,Be,ke,b,y)}}N&1&&_.children!==m.children&&h(R,m.children)}else!A&&S==null&&k(R,P,M,y,b);((B=M.onVnodeUpdated)||L)&&Ve(()=>{B&&rt(B,y,m,_),L&&jt(m,_,y,"updated")},w)},C=(_,m,y,w,b,E,A)=>{for(let R=0;R<m.length;R++){const N=_[R],S=m[R],L=N.el&&(N.type===Ge||!kn(N,S)||N.shapeFlag&70)?d(N.el):y;O(N,S,L,null,w,b,E,A,!0)}},k=(_,m,y,w,b)=>{if(m!==y){if(m!==ie)for(const E in m)!Vn(E)&&!(E in y)&&r(_,E,m[E],null,b,w);for(const E in y){if(Vn(E))continue;const A=y[E],R=m[E];A!==R&&E!=="value"&&r(_,E,R,A,b,w)}"value"in y&&r(_,"value",m.value,y.value,b)}},j=(_,m,y,w,b,E,A,R,N)=>{const S=m.el=_?_.el:l(""),L=m.anchor=_?_.anchor:l("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:B}=m;B&&(R=R?R.concat(B):B),_==null?(s(S,y,w),s(L,y,w),f(m.children||[],y,L,b,E,A,R,N)):P>0&&P&64&&M&&_.dynamicChildren?(C(_.dynamicChildren,M,y,b,E,A,R),(m.key!=null||b&&m===b.subTree)&&ba(_,m,!0)):oe(_,m,y,L,b,E,A,R,N)},te=(_,m,y,w,b,E,A,R,N)=>{m.slotScopeIds=R,_==null?m.shapeFlag&512?b.ctx.activate(m,y,w,A,N):$e(m,y,w,b,E,A,N):on(_,m,N)},$e=(_,m,y,w,b,E,A)=>{const R=_.component=pd(_,w,b);if(ra(_)&&(R.ctx.renderer=Pn),_d(R,!1,A),R.asyncDep){if(b&&b.registerDep(R,fe,A),!_.el){const N=R.subTree=Je(Jt);V(null,N,m,y)}}else fe(R,_,m,y,b,E,A)},on=(_,m,y)=>{const w=m.component=_.component;if(rd(_,m,y))if(w.asyncDep&&!w.asyncResolved){G(w,m,y);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},fe=(_,m,y,w,b,E,A)=>{const R=()=>{if(_.isMounted){let{next:P,bu:M,u:B,parent:Y,vnode:le}=_;{const st=Ea(_);if(st){P&&(P.el=le.el,G(_,P,A)),st.asyncDep.then(()=>{_.isUnmounted||R()});return}}let se=P,Be;$t(_,!1),P?(P.el=le.el,G(_,P,A)):P=le,M&&Fs(M),(Be=P.props&&P.props.onVnodeBeforeUpdate)&&rt(Be,Y,P,le),$t(_,!0);const ke=ul(_),nt=_.subTree;_.subTree=ke,O(nt,ke,d(nt.el),Ns(nt),_,b,E),P.el=ke.el,se===null&&od(_,ke.el),B&&Ve(B,b),(Be=P.props&&P.props.onVnodeUpdated)&&Ve(()=>rt(Be,Y,P,le),b)}else{let P;const{el:M,props:B}=m,{bm:Y,m:le,parent:se,root:Be,type:ke}=_,nt=Gn(m);$t(_,!1),Y&&Fs(Y),!nt&&(P=B&&B.onVnodeBeforeMount)&&rt(P,se,m),$t(_,!0);{Be.ce&&Be.ce._injectChildStyle(ke);const st=_.subTree=ul(_);O(null,st,y,w,_,b,E),m.el=st.el}if(le&&Ve(le,b),!nt&&(P=B&&B.onVnodeMounted)){const st=m;Ve(()=>rt(P,se,st),b)}(m.shapeFlag&256||se&&Gn(se.vnode)&&se.vnode.shapeFlag&256)&&_.a&&Ve(_.a,b),_.isMounted=!0,m=y=w=null}};_.scope.on();const N=_.effect=new kc(R);_.scope.off();const S=_.update=N.run.bind(N),L=_.job=N.runIfDirty.bind(N);L.i=_,L.id=_.uid,N.scheduler=()=>ao(L),$t(_,!0),S()},G=(_,m,y)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,jf(_,m.props,w,y),qf(_,m.children,y),Bt(),tl(_),Ht()},oe=(_,m,y,w,b,E,A,R,N=!1)=>{const S=_&&_.children,L=_?_.shapeFlag:0,P=m.children,{patchFlag:M,shapeFlag:B}=m;if(M>0){if(M&128){Ts(S,P,y,w,b,E,A,R,N);return}else if(M&256){Ut(S,P,y,w,b,E,A,R,N);return}}B&8?(L&16&&An(S,b,E),P!==S&&h(y,P)):L&16?B&16?Ts(S,P,y,w,b,E,A,R,N):An(S,b,E,!0):(L&8&&h(y,""),B&16&&f(P,y,w,b,E,A,R,N))},Ut=(_,m,y,w,b,E,A,R,N)=>{_=_||dn,m=m||dn;const S=_.length,L=m.length,P=Math.min(S,L);let M;for(M=0;M<P;M++){const B=m[M]=N?Tt(m[M]):ct(m[M]);O(_[M],B,y,null,b,E,A,R,N)}S>L?An(_,b,E,!0,!1,P):f(m,y,w,b,E,A,R,N,P)},Ts=(_,m,y,w,b,E,A,R,N)=>{let S=0;const L=m.length;let P=_.length-1,M=L-1;for(;S<=P&&S<=M;){const B=_[S],Y=m[S]=N?Tt(m[S]):ct(m[S]);if(kn(B,Y))O(B,Y,y,null,b,E,A,R,N);else break;S++}for(;S<=P&&S<=M;){const B=_[P],Y=m[M]=N?Tt(m[M]):ct(m[M]);if(kn(B,Y))O(B,Y,y,null,b,E,A,R,N);else break;P--,M--}if(S>P){if(S<=M){const B=M+1,Y=B<L?m[B].el:w;for(;S<=M;)O(null,m[S]=N?Tt(m[S]):ct(m[S]),y,Y,b,E,A,R,N),S++}}else if(S>M)for(;S<=P;)tt(_[S],b,E,!0),S++;else{const B=S,Y=S,le=new Map;for(S=Y;S<=M;S++){const He=m[S]=N?Tt(m[S]):ct(m[S]);He.key!=null&&le.set(He.key,S)}let se,Be=0;const ke=M-Y+1;let nt=!1,st=0;const On=new Array(ke);for(S=0;S<ke;S++)On[S]=0;for(S=B;S<=P;S++){const He=_[S];if(Be>=ke){tt(He,b,E,!0);continue}let it;if(He.key!=null)it=le.get(He.key);else for(se=Y;se<=M;se++)if(On[se-Y]===0&&kn(He,m[se])){it=se;break}it===void 0?tt(He,b,E,!0):(On[it-Y]=S+1,it>=st?st=it:nt=!0,O(He,m[it],y,null,b,E,A,R,N),Be++)}const Xo=nt?Qf(On):dn;for(se=Xo.length-1,S=ke-1;S>=0;S--){const He=Y+S,it=m[He],Qo=He+1<L?m[He+1].el:w;On[S]===0?O(null,it,y,Qo,b,E,A,R,N):nt&&(se<0||S!==Xo[se]?Vt(it,y,Qo,2):se--)}}},Vt=(_,m,y,w,b=null)=>{const{el:E,type:A,transition:R,children:N,shapeFlag:S}=_;if(S&6){Vt(_.component.subTree,m,y,w);return}if(S&128){_.suspense.move(m,y,w);return}if(S&64){A.move(_,m,y,Pn);return}if(A===Ge){s(E,m,y);for(let P=0;P<N.length;P++)Vt(N[P],m,y,w);s(_.anchor,m,y);return}if(A===tr){ee(_,m,y);return}if(w!==2&&S&1&&R)if(w===0)R.beforeEnter(E),s(E,m,y),Ve(()=>R.enter(E),b);else{const{leave:P,delayLeave:M,afterLeave:B}=R,Y=()=>s(E,m,y),le=()=>{P(E,()=>{Y(),B&&B()})};M?M(E,Y,le):le()}else s(E,m,y)},tt=(_,m,y,w=!1,b=!1)=>{const{type:E,props:A,ref:R,children:N,dynamicChildren:S,shapeFlag:L,patchFlag:P,dirs:M,cacheIndex:B}=_;if(P===-2&&(b=!1),R!=null&&Ks(R,null,y,_,!0),B!=null&&(m.renderCache[B]=void 0),L&256){m.ctx.deactivate(_);return}const Y=L&1&&M,le=!Gn(_);let se;if(le&&(se=A&&A.onVnodeBeforeUnmount)&&rt(se,m,_),L&6)Ch(_.component,y,w);else{if(L&128){_.suspense.unmount(y,w);return}Y&&jt(_,null,m,"beforeUnmount"),L&64?_.type.remove(_,m,y,Pn,w):S&&!S.hasOnce&&(E!==Ge||P>0&&P&64)?An(S,m,y,!1,!0):(E===Ge&&P&384||!b&&L&16)&&An(N,m,y),w&&zo(_)}(le&&(se=A&&A.onVnodeUnmounted)||Y)&&Ve(()=>{se&&rt(se,m,_),Y&&jt(_,null,m,"unmounted")},y)},zo=_=>{const{type:m,el:y,anchor:w,transition:b}=_;if(m===Ge){vh(y,w);return}if(m===tr){F(_);return}const E=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(_.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:R}=b,N=()=>A(y,E);R?R(_.el,E,N):N()}else E()},vh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Ch=(_,m,y)=>{const{bum:w,scope:b,job:E,subTree:A,um:R,m:N,a:S}=_;al(N),al(S),w&&Fs(w),b.stop(),E&&(E.flags|=8,tt(A,_,m,y)),R&&Ve(R,m),Ve(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},An=(_,m,y,w=!1,b=!1,E=0)=>{for(let A=E;A<_.length;A++)tt(_[A],m,y,w,b)},Ns=_=>{if(_.shapeFlag&6)return Ns(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[gf];return y?g(y):m};let qi=!1;const Yo=(_,m,y)=>{_==null?m._vnode&&tt(m._vnode,null,null,!0):O(m._vnode||null,_,m,null,null,null,y),m._vnode=_,qi||(qi=!0,tl(),ea(),qi=!1)},Pn={p:O,um:tt,m:Vt,r:zo,mt:$e,mc:f,pc:oe,pbc:C,n:Ns,o:t};return{render:Yo,hydrate:void 0,createApp:Bf(Yo)}}function er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $t({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ba(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Tt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ba(o,l)),l.type===Oi&&(l.el=o.el)}}function Qf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ea(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ea(e)}function al(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zf=Symbol.for("v-scx"),Jf=()=>qn(Zf);function gn(t,e,n){return Ia(t,e,n)}function Ia(t,e,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,l=Re({},n),c=e&&s||!e&&r!=="post";let a;if(rs){if(r==="sync"){const x=Jf();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=ut,x.resume=ut,x.pause=ut,x}}const h=Ie;l.call=(x,I,O)=>ht(x,h,I,O);let d=!1;r==="post"?l.scheduler=x=>{Ve(x,h&&h.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(x,I)=>{I?x():ao(x)}),l.augmentJob=x=>{e&&(x.flags|=4),d&&(x.flags|=2,h&&(x.id=h.uid,x.i=h))};const g=uf(t,e,l);return rs&&(a?a.push(g):c&&g()),g}function ed(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?wa(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=ys(this),l=Ia(i,r.bind(s),n);return o(),l}function wa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const td=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qe(e)}Modifiers`]||t[`${sn(e)}Modifiers`];function nd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&td(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>ge(h)?h.trim():h)),o.number&&(i=n.map(xr)));let l,c=s[l=zi(e)]||s[l=zi(qe(e))];!c&&r&&(c=s[l=zi(sn(e))]),c&&ht(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ht(a,t,6,i)}}function Sa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const c=a=>{const h=Sa(a,e,!0);h&&(l=!0,Re(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(de(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Re(o,r),de(t)&&s.set(t,o),o)}function Pi(t,e){return!t||!bi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,sn(e))||ne(t,e))}function ul(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:h,props:d,data:g,setupState:x,ctx:I,inheritAttrs:O}=t,$=Gs(t);let V,X;try{if(n.shapeFlag&4){const F=i||s,Q=F;V=ct(a.call(Q,F,h,d,x,g,I)),X=l}else{const F=e;V=ct(F.length>1?F(d,{attrs:l,slots:o,emit:c}):F(d,null)),X=e.props?l:sd(l)}}catch(F){zn.length=0,Ri(F,t,1),V=Je(Jt)}let ee=V;if(X&&O!==!1){const F=Object.keys(X),{shapeFlag:Q}=ee;F.length&&Q&7&&(r&&F.some(Xr)&&(X=id(X,r)),ee=vn(ee,X,!1,!0))}return n.dirs&&(ee=vn(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&uo(ee,n.transition),V=ee,Gs($),V}const sd=t=>{let e;for(const n in t)(n==="class"||n==="style"||bi(n))&&((e||(e={}))[n]=t[n]);return e},id=(t,e)=>{const n={};for(const s in t)(!Xr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?hl(s,o,a):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(o[g]!==s[g]&&!Pi(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?hl(s,o,a):!0:!!o;return!1}function hl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Pi(n,r))return!0}return!1}function od({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ta=t=>t.__isSuspense;function ld(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):df(t)}const Ge=Symbol.for("v-fgt"),Oi=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),zn=[];let je=null;function me(t=!1){zn.push(je=t?null:[])}function cd(){zn.pop(),je=zn[zn.length-1]||null}let is=1;function fl(t,e=!1){is+=t,t<0&&je&&e&&(je.hasOnce=!0)}function Na(t){return t.dynamicChildren=is>0?je||dn:null,cd(),is>0&&je&&je.push(t),t}function ve(t,e,n,s,i,r){return Na(D(t,e,n,s,i,r,!0))}function Ra(t,e,n,s,i){return Na(Je(t,e,n,s,i,!0))}function Aa(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const Pa=({key:t})=>t??null,Ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||_e(t)||U(t)?{i:Me,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pa(e),ref:e&&Ls(e),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Me};return l?(fo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),is>0&&!o&&je&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&je.push(c),c}const Je=ad;function ad(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===aa)&&(t=Jt),Aa(t)){const l=vn(t,e,!0);return n&&fo(l,n),is>0&&!r&&je&&(l.shapeFlag&6?je[je.indexOf(t)]=l:je.push(l)),l.patchFlag=-2,l}if(vd(t)&&(t=t.__vccOpts),e){e=ud(e);let{class:l,style:c}=e;l&&!ge(l)&&(e.class=eo(l)),de(c)&&(lo(c)&&!H(c)&&(c=Re({},c)),e.style=Jr(c))}const o=ge(t)?1:Ta(t)?128:mf(t)?64:de(t)?4:U(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function ud(t){return t?lo(t)||_a(t)?Re({},t):t:null}function vn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?hd(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pa(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Ls(e)):[r,Ls(e)]:Ls(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&uo(h,c.clone(h)),h}function we(t=" ",e=0){return Je(Oi,null,t,e)}function ze(t="",e=!1){return e?(me(),Ra(Jt,null,t)):Je(Jt,null,t)}function ct(t){return t==null||typeof t=="boolean"?Je(Jt):H(t)?Je(Ge,null,t.slice()):Aa(t)?Tt(t):Je(Oi,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function fo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!_a(e)?e._ctx=Me:i===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Me},n=32):(e=String(e),s&64?(n=16,e=[we(e)]):n=8);t.children=e,t.shapeFlag|=n}function hd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=eo([e.class,s.class]));else if(i==="style")e.style=Jr([e.style,s.style]);else if(bi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function rt(t,e,n,s=null){ht(t,e,7,[n,s])}const fd=fa();let dd=0;function pd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||fd,r={uid:dd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ma(s,i),emitsOptions:Sa(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nd.bind(null,r),t.ce&&t.ce(r),r}let Ie=null,zs,Tr;{const t=Si(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};zs=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Tr=e("__VUE_SSR_SETTERS__",n=>rs=n)}const ys=t=>{const e=Ie;return zs(t),t.scope.on(),()=>{t.scope.off(),zs(e)}},dl=()=>{Ie&&Ie.scope.off(),zs(null)};function Oa(t){return t.vnode.shapeFlag&4}let rs=!1;function _d(t,e=!1,n=!1){e&&Tr(e);const{props:s,children:i}=t.vnode,r=Oa(t);Vf(t,s,r,e),Kf(t,i,n);const o=r?gd(t,e):void 0;return e&&Tr(!1),o}function gd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Of);const{setup:s}=n;if(s){Bt();const i=t.setupContext=s.length>1?xd(t):null,r=ys(t),o=xs(s,t,0,[t.props,i]),l=Ic(o);if(Ht(),r(),(l||t.sp)&&!Gn(t)&&ia(t),l){if(o.then(dl,dl),e)return o.then(c=>{pl(t,c)}).catch(c=>{Ri(c,t,0)});t.asyncDep=o}else pl(t,o)}else Da(t)}function pl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Xc(e)),Da(t)}function Da(t,e,n){const s=t.type;t.render||(t.render=s.render||ut);{const i=ys(t);Bt();try{Df(t)}finally{Ht(),i()}}}const md={get(t,e){return Se(t,"get",""),t[e]}};function xd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,md),slots:t.slots,emit:t.emit,expose:e}}function Di(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Xc(co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function yd(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function vd(t){return U(t)&&"__vccOpts"in t}const ka=(t,e)=>cf(t,e,rs),Cd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nr;const _l=typeof window<"u"&&window.trustedTypes;if(_l)try{Nr=_l.createPolicy("vue",{createHTML:t=>t})}catch{}const Ma=Nr?t=>Nr.createHTML(t):t=>t,bd="http://www.w3.org/2000/svg",Ed="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,gl=pt&&pt.createElement("template"),Id={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?pt.createElementNS(bd,t):e==="mathml"?pt.createElementNS(Ed,t):n?pt.createElement(t,{is:n}):pt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gl.innerHTML=Ma(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=gl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wd=Symbol("_vtc");function Sd(t,e,n){const s=t[wd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ml=Symbol("_vod"),Td=Symbol("_vsh"),Nd=Symbol(""),Rd=/(^|;)\s*display\s*:/;function Ad(t,e,n){const s=t.style,i=ge(n);let r=!1;if(n&&!i){if(e)if(ge(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ws(s,l,"")}else for(const o in e)n[o]==null&&Ws(s,o,"");for(const o in n)o==="display"&&(r=!0),Ws(s,o,n[o])}else if(i){if(e!==n){const o=s[Nd];o&&(n+=";"+o),s.cssText=n,r=Rd.test(n)}}else e&&t.removeAttribute("style");ml in t&&(t[ml]=r?s.display:"",t[Td]&&(s.display="none"))}const xl=/\s*!important$/;function Ws(t,e,n){if(H(n))n.forEach(s=>Ws(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Pd(t,e);xl.test(n)?t.setProperty(sn(s),n.replace(xl,""),"important"):t[s]=n}}const yl=["Webkit","Moz","ms"],nr={};function Pd(t,e){const n=nr[e];if(n)return n;let s=qe(e);if(s!=="filter"&&s in t)return nr[e]=s;s=wi(s);for(let i=0;i<yl.length;i++){const r=yl[i]+s;if(r in t)return nr[e]=r}return e}const vl="http://www.w3.org/1999/xlink";function Cl(t,e,n,s,i,r=Oh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vl,e.slice(6,e.length)):t.setAttributeNS(vl,e,n):n==null||r&&!Nc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Wt(n)?String(n):n)}function bl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ma(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Nc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function hn(t,e,n,s){t.addEventListener(e,n,s)}function Od(t,e,n,s){t.removeEventListener(e,n,s)}const El=Symbol("_vei");function Dd(t,e,n,s,i=null){const r=t[El]||(t[El]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=kd(e);if(s){const a=r[e]=Ld(s,i);hn(t,l,a,c)}else o&&(Od(t,l,o,c),r[e]=void 0)}}const Il=/(?:Once|Passive|Capture)$/;function kd(t){let e;if(Il.test(t)){e={};let s;for(;s=t.match(Il);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let sr=0;const Md=Promise.resolve(),Fd=()=>sr||(Md.then(()=>sr=0),sr=Date.now());function Ld(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(Wd(s,n.value),e,5,[s])};return n.value=t,n.attached=Fd(),n}function Wd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Sd(t,s,o):e==="style"?Ad(t,n,s):bi(e)?Xr(e)||Dd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hd(t,e,s,o))?(bl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ge(s))?bl(t,qe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cl(t,e,s,o))};function Hd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wl(e)&&ge(n)?!1:e in t}const Sl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Fs(e,n):e};function Ud(t){t.target.composing=!0}function Tl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ir=Symbol("_assign"),Vd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ir]=Sl(i);const r=s||i.props&&i.props.type==="number";hn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=xr(l)),t[ir](l)}),n&&hn(t,"change",()=>{t.value=t.value.trim()}),e||(hn(t,"compositionstart",Ud),hn(t,"compositionend",Tl),hn(t,"change",Tl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[ir]=Sl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?xr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},jd=Re({patchProp:Bd},Id);let Nl;function $d(){return Nl||(Nl=zf(jd))}const Gd=(...t)=>{const e=$d().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qd(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Kd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Kd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qd(t){return ge(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Fa;const ki=t=>Fa=t,La=Symbol();function Rr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yn||(Yn={}));function zd(){const t=Oc(!0),e=t.run(()=>wt({}));let n=[],s=[];const i=co({install(r){ki(i),i._a=r,r.provide(La,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Wa=()=>{};function Rl(t,e,n,s=Wa){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Dc()&&Dh(i),i}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}const Yd=t=>t(),Al=Symbol(),rr=Symbol();function Ar(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Rr(i)&&Rr(s)&&t.hasOwnProperty(n)&&!_e(s)&&!At(s)?t[n]=Ar(i,s):t[n]=s}return t}const Xd=Symbol();function Qd(t){return!Rr(t)||!t.hasOwnProperty(Xd)}const{assign:It}=Object;function Zd(t){return!!(_e(t)&&t.effect)}function Jd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const h=sf(n.state.value[t]);return It(h,r,Object.keys(o||{}).reduce((d,g)=>(d[g]=co(ka(()=>{ki(n);const x=n._s.get(t);return o[g].call(x,x)})),d),{}))}return c=Ba(t,a,e,n,s,!0),c}function Ba(t,e,n={},s,i,r){let o;const l=It({actions:{}},n),c={deep:!0};let a,h,d=[],g=[],x;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),wt({});let O;function $(f){let v;a=h=!1,typeof f=="function"?(f(s.state.value[t]),v={type:Yn.patchFunction,storeId:t,events:x}):(Ar(s.state.value[t],f),v={type:Yn.patchObject,payload:f,storeId:t,events:x});const C=O=Symbol();Zc().then(()=>{O===C&&(a=!0)}),h=!0,cn(d,v,s.state.value[t])}const V=r?function(){const{state:v}=n,C=v?v():{};this.$patch(k=>{It(k,C)})}:Wa;function X(){o.stop(),d=[],g=[],s._s.delete(t)}const ee=(f,v="")=>{if(Al in f)return f[rr]=v,f;const C=function(){ki(s);const k=Array.from(arguments),j=[],te=[];function $e(G){j.push(G)}function on(G){te.push(G)}cn(g,{args:k,name:C[rr],store:Q,after:$e,onError:on});let fe;try{fe=f.apply(this&&this.$id===t?this:Q,k)}catch(G){throw cn(te,G),G}return fe instanceof Promise?fe.then(G=>(cn(j,G),G)).catch(G=>(cn(te,G),Promise.reject(G))):(cn(j,fe),fe)};return C[Al]=!0,C[rr]=v,C},F={_p:s,$id:t,$onAction:Rl.bind(null,g),$patch:$,$reset:V,$subscribe(f,v={}){const C=Rl(d,f,v.detached,()=>k()),k=o.run(()=>gn(()=>s.state.value[t],j=>{(v.flush==="sync"?h:a)&&f({storeId:t,type:Yn.direct,events:x},j)},It({},c,v)));return C},$dispose:X},Q=Ni(F);s._s.set(t,Q);const u=(s._a&&s._a.runWithContext||Yd)(()=>s._e.run(()=>(o=Oc()).run(()=>e({action:ee}))));for(const f in u){const v=u[f];if(_e(v)&&!Zd(v)||At(v))r||(I&&Qd(v)&&(_e(v)?v.value=I[f]:Ar(v,I[f])),s.state.value[t][f]=v);else if(typeof v=="function"){const C=ee(v,f);u[f]=C,l.actions[f]=v}}return It(Q,u),It(Z(Q),u),Object.defineProperty(Q,"$state",{get:()=>s.state.value[t],set:f=>{$(v=>{It(v,f)})}}),s._p.forEach(f=>{It(Q,o.run(()=>f({store:Q,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(Q.$state,I),a=!0,h=!0,Q}/*! #__NO_SIDE_EFFECTS__ */function ep(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Uf();return o=o||(c?qn(La,null):null),o&&ki(o),o=Fa,o._s.has(t)||(i?Ba(t,e,s,o):Jd(t,s,o)),o._s.get(t)}return r.$id=t,r}const tp=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},np=()=>{};var Pl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw wn(e)},wn=function(t){return new Error("Firebase Database ("+Ha.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,h=r>>2,d=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[h],n[d],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ua(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||d==null)throw new ip;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),d!==64){const I=a<<6&192|d;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ip extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Va=function(t){const e=Ua(t);return po.encodeByteArray(e,!0)},Ys=function(t){return Va(t).replace(/\./g,"")},Pr=function(t){try{return po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){return ja(void 0,t)}function ja(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!op(n)||(t[n]=ja(t[n],e[n]));return t}function op(t){return t!=="__proto__"}/**
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
 */function lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cp=()=>lp().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof Pl>"u")return;const t=Pl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},up=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pr(t[1]);return e&&JSON.parse(e)},$a=()=>{try{return np()||cp()||ap()||up()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hp=t=>{var e,n;return(n=(e=$a())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fp=t=>{const e=hp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ga=()=>{var t;return(t=$a())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ys(JSON.stringify(n)),Ys(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ka(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pp())}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gp(){return Ha.NODE_ADMIN===!0}function mp(){try{return typeof indexedDB=="object"}catch{return!1}}function xp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="FirebaseError";class vs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yp,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function vp(t,e){return t.replace(Cp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Cp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=os(Pr(r[0])||""),n=os(Pr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},bp=function(t){const e=za(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ep=function(t){const e=za(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Qs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Dl(r)&&Dl(o)){if(!Qs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Dl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const g=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,h;for(let d=0;d<80;d++){d<40?d<20?(a=l^r&(o^l),h=1518500249):(a=r^o^l,h=1859775393):d<60?(a=r&o|l&(r|o),h=2400959708):(a=r^o^l,h=3395469782);const g=(i<<5|i>>>27)+a+c+h+s[d]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function _o(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Sn(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Tp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Np(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Np(t){return t===Kt?void 0:t}function Rp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ap{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Pp={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Op=ae.INFO,Dp={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},kp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Dp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Mp=(t,e)=>e.some(n=>t instanceof n);let kl,Ml;function Fp(){return kl||(kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lp(){return Ml||(Ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,Or=new WeakMap,Qa=new WeakMap,or=new WeakMap,go=new WeakMap;function Wp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xa.set(n,t)}).catch(()=>{}),go.set(e,t),e}function Bp(t){if(Or.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Or.set(t,e)}let Dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hp(t){Dr=t(Dr)}function Up(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lr(this),e,...n);return Qa.set(s,e.sort?e.sort():[e]),Pt(s)}:Lp().includes(t)?function(...e){return t.apply(lr(this),e),Pt(Xa.get(this))}:function(...e){return Pt(t.apply(lr(this),e))}}function Vp(t){return typeof t=="function"?Up(t):(t instanceof IDBTransaction&&Bp(t),Mp(t,Fp())?new Proxy(t,Dr):t)}function Pt(t){if(t instanceof IDBRequest)return Wp(t);if(or.has(t))return or.get(t);const e=Vp(t);return e!==t&&(or.set(t,e),go.set(e,t)),e}const lr=t=>go.get(t);function jp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const $p=["get","getKey","getAll","getAllKeys","count"],Gp=["put","add","delete","clear"],cr=new Map;function Fl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Gp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||$p.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return cr.set(e,r),r}Hp(t=>({...t,get:(e,n,s)=>Fl(e,n)||t.get(e,n,s),has:(e,n)=>!!Fl(e,n)||t.has(e,n)}));/**
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
 */class Kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",Ll="0.11.2";/**
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
 */const yt=new Ya("@firebase/app"),zp="@firebase/app-compat",Yp="@firebase/analytics-compat",Xp="@firebase/analytics",Qp="@firebase/app-check-compat",Zp="@firebase/app-check",Jp="@firebase/auth",e_="@firebase/auth-compat",t_="@firebase/database",n_="@firebase/data-connect",s_="@firebase/database-compat",i_="@firebase/functions",r_="@firebase/functions-compat",o_="@firebase/installations",l_="@firebase/installations-compat",c_="@firebase/messaging",a_="@firebase/messaging-compat",u_="@firebase/performance",h_="@firebase/performance-compat",f_="@firebase/remote-config",d_="@firebase/remote-config-compat",p_="@firebase/storage",__="@firebase/storage-compat",g_="@firebase/firestore",m_="@firebase/vertexai",x_="@firebase/firestore-compat",y_="firebase",v_="11.4.0";/**
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
 */const Mr="[DEFAULT]",C_={[kr]:"fire-core",[zp]:"fire-core-compat",[Xp]:"fire-analytics",[Yp]:"fire-analytics-compat",[Zp]:"fire-app-check",[Qp]:"fire-app-check-compat",[Jp]:"fire-auth",[e_]:"fire-auth-compat",[t_]:"fire-rtdb",[n_]:"fire-data-connect",[s_]:"fire-rtdb-compat",[i_]:"fire-fn",[r_]:"fire-fn-compat",[o_]:"fire-iid",[l_]:"fire-iid-compat",[c_]:"fire-fcm",[a_]:"fire-fcm-compat",[u_]:"fire-perf",[h_]:"fire-perf-compat",[f_]:"fire-rc",[d_]:"fire-rc-compat",[p_]:"fire-gcs",[__]:"fire-gcs-compat",[g_]:"fire-fst",[x_]:"fire-fst-compat",[m_]:"fire-vertex","fire-js":"fire-js",[y_]:"fire-js-all"};/**
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
 */const Zs=new Map,b_=new Map,Fr=new Map;function Wl(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(Fr.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Fr.set(e,t);for(const n of Zs.values())Wl(n,t);for(const n of b_.values())Wl(n,t);return!0}function E_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function I_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const w_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new qa("app","Firebase",w_);/**
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
 */class S_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const T_=v_;function Za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ot.create("bad-app-name",{appName:String(i)});if(n||(n=Ga()),!n)throw Ot.create("no-options");const r=Zs.get(i);if(r){if(Qs(n,r.options)&&Qs(s,r.config))return r;throw Ot.create("duplicate-app",{appName:i})}const o=new Ap(i);for(const c of Fr.values())o.addComponent(c);const l=new S_(n,s,o);return Zs.set(i,l),l}function N_(t=Mr){const e=Zs.get(t);if(!e&&t===Mr&&Ga())return Za();if(!e)throw Ot.create("no-app",{appName:t});return e}function mn(t,e,n){var s;let i=(s=C_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(l.join(" "));return}Js(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const R_="firebase-heartbeat-database",A_=1,cs="firebase-heartbeat-store";let ar=null;function Ja(){return ar||(ar=jp(R_,A_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),ar}async function P_(t){try{const n=(await Ja()).transaction(cs),s=await n.objectStore(cs).get(eu(t));return await n.done,s}catch(e){if(e instanceof vs)yt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function Bl(t,e){try{const s=(await Ja()).transaction(cs,"readwrite");await s.objectStore(cs).put(e,eu(t)),await s.done}catch(n){if(n instanceof vs)yt.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(s.message)}}}function eu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const O_=1024,D_=30;class k_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>D_){const o=L_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hl(),{heartbeatsToSend:s,unsentEntries:i}=M_(this._heartbeatsCache.heartbeats),r=Ys(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return yt.warn(n),""}}}function Hl(){return new Date().toISOString().substring(0,10)}function M_(t,e=O_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ul(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ul(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?xp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await P_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ul(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}function L_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function W_(t){Js(new ls("platform-logger",e=>new Kp(e),"PRIVATE")),Js(new ls("heartbeat",e=>new k_(e),"PRIVATE")),mn(kr,Ll,t),mn(kr,Ll,"esm2017"),mn("fire-js","")}W_("");var B_="firebase",H_="11.4.0";/**
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
 */mn(B_,H_,"app");var Vl={};const jl="@firebase/database",$l="1.0.13";/**
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
 */let tu="";function U_(t){tu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new V_(e)}}catch{}return new j_},zt=nu("localStorage"),$_=nu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Ya("@firebase/database"),G_=function(){let t=1;return function(){return t++}}(),su=function(t){const e=Sp(t),n=new wp;n.update(e);const s=n.digest();return po.encodeByteArray(s)},Cs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Cs.apply(null,s):typeof s=="object"?e+=xe(s):e+=s,e+=" "}return e};let Xn=null,Gl=!0;const K_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),xn.logLevel=ae.VERBOSE,Xn=xn.log.bind(xn)},Ne=function(...t){if(Gl===!0&&(Gl=!1,Xn===null&&$_.get("logging_enabled")===!0&&K_()),Xn){const e=Cs.apply(null,t);Xn(e)}},bs=function(t){return function(...e){Ne(t,...e)}},Lr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cs(...t);xn.error(e)},vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Cs(...t)}`;throw xn.error(e),new Error(e)},Le=function(...t){const e="FIREBASE WARNING: "+Cs(...t);xn.warn(e)},q_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},z_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bn="[MIN_NAME]",en="[MAX_NAME]",Tn=function(t,e){if(t===e)return 0;if(t===bn||e===en)return-1;if(e===bn||t===en)return 1;{const n=Kl(t),s=Kl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Y_=function(t,e){return t===e?0:t<e?-1:1},Mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},mo=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=xe(e[s]),n+=":",n+=mo(t[e[s]]);return n+="}",n},ru=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ou=function(t){T(!iu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const h=a.join("");let d="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),d=d+g}return d.toLowerCase()},X_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Q_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Z_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const J_=new RegExp("^-?(0*)\\d{1,10}$"),eg=-2147483648,tg=2147483647,Kl=function(t){if(J_.test(t)){const e=Number(t);if(e>=eg&&e<=tg)return e}return null},Nn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Le("Exception was thrown by user callback.",n),e},Math.floor(0))}},ng=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,I_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class Bs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="5",lu="v",cu="s",au="r",uu="f",hu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fu="ls",du="p",Wr="ac",pu="websocket",_u="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mu(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===pu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===_u)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rg(t)&&(n.ns=t.namespace);const i=[];return We(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={},hr={};function yo(t){const e=t.toString();return ur[e]||(ur[e]=new og),ur[e]}function lg(t,e){const n=t.toString();return hr[n]||(hr[n]=e()),hr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Nn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="start",ag="close",ug="pLPCommand",hg="pRTLPCB",xu="id",yu="pw",vu="ser",fg="cb",dg="seg",pg="ts",_g="d",gg="dframe",Cu=1870,bu=30,mg=Cu-bu,xg=25e3,yg=3e4;class fn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=yo(n),this.urlFn=c=>(this.appCheckToken&&(c[Wr]=this.appCheckToken),mu(n,_u,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yg)),z_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vo((...r)=>{const[o,l,c,a,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ql)this.id=l,this.password=c;else if(o===ag)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ql]="t",s[vu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[fg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[lu]=xo,this.transportSessionId&&(s[cu]=this.transportSessionId),this.lastSessionId&&(s[fu]=this.lastSessionId),this.applicationId&&(s[du]=this.applicationId),this.appCheckToken&&(s[Wr]=this.appCheckToken),typeof location<"u"&&location.hostname&&hu.test(location.hostname)&&(s[au]=uu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!X_()&&!Q_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Va(n),i=ru(s,mg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[gg]="t",s[xu]=e,s[yu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=G_(),window[ug+this.uniqueCallbackIdentifier]=e,window[hg+this.uniqueCallbackIdentifier]=n,this.myIFrame=vo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xu]=this.myID,e[yu]=this.myPW,e[vu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bu+s.length<=Cu;){const o=this.pendingSegs.shift();s=s+"&"+dg+i+"="+o.seg+"&"+pg+i+"="+o.ts+"&"+_g+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(xg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=16384,Cg=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class Ye{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=yo(n),this.connURL=Ye.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[lu]=xo,typeof location<"u"&&location.hostname&&hu.test(location.hostname)&&(o[au]=uu),n&&(o[cu]=n),s&&(o[fu]=s),i&&(o[Wr]=i),r&&(o[du]=r),mu(e,pu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;gp(),this.mySock=new ei(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ei!==null&&!Ye.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ru(n,vg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Cg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{static get ALL_TRANSPORTS(){return[fn,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of as.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);as.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}as.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=6e4,Eg=5e3,Ig=10*1024,wg=100*1024,fr="t",zl="d",Sg="s",Yl="r",Tg="e",Xl="o",Ql="a",Zl="n",Jl="p",Ng="h";class Rg{constructor(e,n,s,i,r,o,l,c,a,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new as(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ig?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fr in e){const n=e[fr];n===Ql?this.upgradeIfSecondaryHealthy_():n===Yl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ql,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mn(fr,e);if(zl in e){const s=e[zl];if(n===Ng){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Zl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Sg?this.onConnectionShutdown_(s):n===Yl?this.onReset_(s):n===Tg?Lr("Server Error: "+s):n===Xl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xo!==s&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Eg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Iu{static getInstance(){return new ti}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ka()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=32,tc=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new re("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mt(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function wu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ag(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Su(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Tu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return De(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Co(t,e){if(Mt(t)!==Mt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Mt(t)>Mt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Pg{constructor(e,n){this.errorPrefix_=n,this.parts_=Su(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fi(this.parts_[s]);Nu(this)}}function Og(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fi(e),Nu(t)}function Dg(t){const e=t.parts_.pop();t.byteLength_-=Fi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Nu(t){if(t.byteLength_>tc)throw new Error(t.errorPrefix_+"has a key path longer than "+tc+" bytes ("+t.byteLength_+").");if(t.parts_.length>ec)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ec+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Iu{static getInstance(){return new bo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e3,kg=60*5*1e3,nc=30*1e3,Mg=1.3,Fg=3e4,Lg="server_kill",sc=3;class xt extends Eu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=xt.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fn,this.maxReconnectDelay_=kg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(xe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Mi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;xt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ep(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lr("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Fg&&(this.reconnectDelay_=Fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(d){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:a};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=g&&g.token,l=new Rg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{Le(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lg)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Le(d),c())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ol(this.interruptReasons_)&&(this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>mo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sc&&(this.reconnectDelay_=nc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tu.replace(/\./g,"-")]=1,Ka()?e["framework.cordova"]=1:_p()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Ol(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(bn,e),i=new q(bn,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class Ru extends Li{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return Tn(e.name,n.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(en,Os)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Os)}toString(){return".key"}}const yn=new Ru;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??be.RED,this.left=i??Fe.EMPTY_NODE,this.right=r??Fe.EMPTY_NODE}copy(e,n,s,i,r){return new be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class Wg{copy(e,n,s,i,r){return this}insert(e,n,s){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new Wg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t,e){return Tn(t.name,e.name)}function Eo(t,e){return Tn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br;function Hg(t){Br=t}const Au=function(t){return typeof t=="number"?"number:"+ou(t):"string:"+t},Pu=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else T(t===Br||t.isEmpty(),"priority of unexpected type.");T(t===Br||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;class Ce{static set __childrenNodeConstructor(e){ic=e}static get __childrenNodeConstructor(){return ic}constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:K(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Au(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ou(this.value_):e+=this.value_,this.lazyHash_=su(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou,Du;function Ug(t){Ou=t}function Vg(t){Du=t}class jg extends Li{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(en,new Ce("[PRIORITY-POST]",Du))}makePost(e,n){const s=Ou(e);return new q(n,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new jg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=Math.log(2);class Gg{constructor(e){const n=r=>parseInt(Math.log(r)/$g,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(t,e,n,s){t.sort(e);const i=function(c,a){const h=a-c;let d,g;if(h===0)return null;if(h===1)return d=t[c],g=n?n(d):d,new be(g,d.node,be.BLACK,null,null);{const x=parseInt(h/2,10)+c,I=i(c,x),O=i(x+1,a);return d=t[x],g=n?n(d):d,new be(g,d.node,be.BLACK,I,O)}},r=function(c){let a=null,h=null,d=t.length;const g=function(I,O){const $=d-I,V=d;d-=I;const X=i($+1,V),ee=t[$],F=n?n(ee):ee;x(new be(F,ee.node,O,null,X))},x=function(I){a?(a.left=I,a=I):(h=I,a=I)};for(let I=0;I<c.count;++I){const O=c.nextBitIsOne(),$=Math.pow(2,c.count-(I+1));O?g($,be.BLACK):(g($,be.BLACK),g($,be.RED))}return h},o=new Gg(t.length),l=r(o);return new Fe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const an={};class mt{static get Default(){return T(an&&pe,"ChildrenNode.ts has not been loaded"),dr=dr||new mt({".priority":an},{".priority":pe}),dr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ni(s,e.getCompare()):l=an;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new mt(h,a)}addToIndexes(e,n){const s=Xs(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(q.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ni(l,o.getCompare())}else return an;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new q(e.name,l))),c.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Xs(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;class W{static get EMPTY_NODE(){return Ln||(Ln=new W(new Fe(Eo),null,mt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Pu(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ln:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ln:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{T(K(e)!==".priority"||Mt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,l)=>{n[o]=l.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Au(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":su(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Kg extends W{constructor(){super(new Fe(Eo),W.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Es=new Kg;Object.defineProperties(q,{MIN:{value:new q(bn,W.EMPTY_NODE)},MAX:{value:new q(en,Es)}});Ru.__EMPTY_NODE=W.EMPTY_NODE;Ce.__childrenNodeConstructor=W;Hg(Es);Vg(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=!0;function Ee(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Ee(e))}if(!(t instanceof Array)&&qg){const n=[];let s=!1;if(We(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ee(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new q(o,c)))}}),n.length===0)return W.EMPTY_NODE;const r=ni(n,Bg,o=>o.name,Eo);if(s){const o=ni(n,pe.getCompare());return new W(r,Ee(e),new mt({".priority":o},{".priority":pe}))}else return new W(r,Ee(e),mt.Default)}else{let n=W.EMPTY_NODE;return We(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ee(e))}}Ug(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Li{constructor(e){super(),this.indexPath_=e,T(!z(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}makePost(e,n){const s=Ee(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Es);return new q(en,e)}toString(){return Su(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg extends Li{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Tn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=Ee(e);return new q(n,s)}toString(){return".value"}}const Xg=new Yg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){return{type:"value",snapshotNode:t}}function En(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function us(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Qg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(us(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(En(n,s)):o.trackChildChange(hs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(us(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(hs(i,r,o))}else s.trackChildChange(En(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.indexedFilter_=new Io(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fs.getStartPost_(e),this.endPost_=fs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,l)=>{r.matches(new q(o,l))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(g,x)=>d(x,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new q(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const d=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(h&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(hs(n,s,d)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(us(n,d));const O=l.updateImmediateChild(n,W.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(En(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return s.isEmpty()?e:h&&o(a,c)>=0?(r!=null&&(r.trackChildChange(us(a.name,a.node)),r.trackChildChange(En(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new wo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jg(t){return t.loadsAllData()?new Io(t.getIndex()):t.hasLimit()?new Zg(t):new fs(t)}function rc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===Xg?n="$value":t.index_===yn?n="$key":(T(t.index_ instanceof zg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=xe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+xe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=xe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function oc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Eu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=si.getListenId_(e,s),l={};this.listens_[o]=l;const c=rc(e._queryParams);this.restRequest_(r+".json",c,(a,h)=>{let d=h;if(a===404&&(d=null,a=null),a===null&&this.onDataUpdate_(r,d,!1,s),Cn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=si.getListenId_(e,n);delete this.listens_[s]}get(e){const n=rc(e._queryParams),s=e._path.toString(),i=new Mi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ip(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=os(l.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return{value:null,children:new Map}}function Mu(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,ii());const i=t.children.get(s);e=ue(e),Mu(i,e,n)}}function Hr(t,e,n){t.value!==null?n(e,t.value):tm(t,(s,i)=>{const r=new re(e.toString()+"/"+s);Hr(i,r,n)})}function tm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=10*1e3,sm=30*1e3,im=5*60*1e3;class rm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nm(e);const s=lc+(sm-lc)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;We(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*im))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qe||(Qe={}));function Fu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function So(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function To(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Qe.ACK_USER_WRITE,this.source=Fu()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ri(J(),n,this.revert)}}else return T(K(this.path)===e,"operationForChild called for unrelated child."),new ri(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.source=e,this.path=n,this.type=Qe.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new ds(this.source,J()):new ds(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Qe.OVERWRITE}operationForChild(e){return z(this.path)?new tn(this.source,J(),this.snap.getImmediateChild(e)):new tn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Qe.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new tn(this.source,J(),n.value):new ps(this.source,J(),n)}else return T(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qg(o.childName,o.snapshotNode))}),Wn(t,i,"child_removed",e,s,n),Wn(t,i,"child_added",e,s,n),Wn(t,i,"child_moved",r,s,n),Wn(t,i,"child_changed",e,s,n),Wn(t,i,"value",e,s,n),i}function Wn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>am(t,l,c)),o.forEach(l=>{const c=cm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function cm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function am(t,e,n){if(e.childName==null||n.childName==null)throw wn("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e){return{eventCache:t,serverCache:e}}function Zn(t,e,n,s){return Wi(new Ft(e,n,s),t.serverCache)}function Lu(t,e,n,s){return Wi(t.eventCache,new Ft(e,n,s))}function oi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;const um=()=>(pr||(pr=new Fe(Y_)),pr);class he{static fromObject(e){let n=new he(null);return We(e,(s,i)=>{n=n.set(new re(s),i)}),n}constructor(e,n=um()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:ye(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new he(null)}}set(e,n){if(z(e))return new he(n,this.children);{const s=K(e),r=(this.children.get(s)||new he(null)).set(ue(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(z(e))return n;{const s=K(e),r=(this.children.get(s)||new he(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),ye(n,i),s):new he(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new he(null))}}function Jn(t,e,n){if(z(e))return new et(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function cc(t,e,n){let s=t;return We(n,(i,r)=>{s=Jn(s,ye(e,i),r)}),s}function ac(t,e){if(z(e))return et.empty();{const n=t.writeTree_.setTree(e,new he(null));return new et(n)}}function Ur(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function uc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Dt(t,e){if(z(e))return t;{const n=rn(t,e);return n!=null?new et(new he(n)):new et(t.writeTree_.subtree(e))}}function Vr(t){return t.writeTree_.isEmpty()}function In(t,e){return Wu(J(),t.writeTree_,e)}function Wu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Wu(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t,e){return Vu(e,t)}function hm(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Jn(t.visibleWrites,e,n)),t.lastWriteId=s}function fm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function dm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&pm(l,s.path)?i=!1:Xe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return _m(t),!0;if(s.snap)t.visibleWrites=ac(t.visibleWrites,s.path);else{const l=s.children;We(l,c=>{t.visibleWrites=ac(t.visibleWrites,ye(s.path,c))})}return!0}else return!1}function pm(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(ye(t.path,n),e))return!0;return!1}function _m(t){t.visibleWrites=Bu(t.allWrites,gm,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gm(t){return t.visible}function Bu(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Xe(n,o)?(l=De(n,o),s=Jn(s,l,r.snap)):Xe(o,n)&&(l=De(o,n),s=Jn(s,J(),r.snap.getChild(l)));else if(r.children){if(Xe(n,o))l=De(n,o),s=cc(s,l,r.children);else if(Xe(o,n))if(l=De(o,n),z(l))s=cc(s,J(),r.children);else{const c=Cn(r.children,K(l));if(c){const a=c.getChild(ue(l));s=Jn(s,J(),a)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function Hu(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=Dt(t.visibleWrites,e);if(Vr(o))return n;if(n==null&&!Ur(o,J()))return null;{const l=n||W.EMPTY_NODE;return In(o,l)}}}else{const r=Dt(t.visibleWrites,e);if(!i&&Vr(r))return n;if(!i&&n==null&&!Ur(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Xe(a.path,e)||Xe(e,a.path))},l=Bu(t.allWrites,o,e),c=n||W.EMPTY_NODE;return In(l,c)}}}function mm(t,e,n){let s=W.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Dt(t.visibleWrites,e);return n.forEachChild(pe,(o,l)=>{const c=In(Dt(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Dt(t.visibleWrites,e);return uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function xm(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Ur(t.visibleWrites,r))return null;{const o=Dt(t.visibleWrites,r);return Vr(o)?i.getChild(n):In(o,i.getChild(n))}}function ym(t,e,n,s){const i=ye(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Dt(t.visibleWrites,i);return In(o,s.getNode().getImmediateChild(n))}else return null}function vm(t,e){return rn(t.visibleWrites,e)}function Cm(t,e,n,s,i,r,o){let l;const c=Dt(t.visibleWrites,e),a=rn(c,J());if(a!=null)l=a;else if(n!=null)l=In(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&h.length<i;)d(x,s)!==0&&h.push(x),x=g.getNext();return h}else return[]}function bm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function li(t,e,n,s){return Hu(t.writeTree,t.treePath,e,n,s)}function No(t,e){return mm(t.writeTree,t.treePath,e)}function hc(t,e,n,s){return xm(t.writeTree,t.treePath,e,n,s)}function ci(t,e){return vm(t.writeTree,ye(t.treePath,e))}function Em(t,e,n,s,i,r){return Cm(t.writeTree,t.treePath,e,n,s,i,r)}function Ro(t,e,n){return ym(t.writeTree,t.treePath,e,n)}function Uu(t,e){return Vu(ye(t.treePath,e),t.writeTree)}function Vu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,hs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,us(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,En(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,hs(s,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ju=new wm;class Ao{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ro(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=Em(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){return{filter:t}}function Tm(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Nm(t,e,n,s,i){const r=new Im;let o,l;if(n.type===Qe.OVERWRITE){const a=n;a.source.fromUser?o=jr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!z(a.path),o=ai(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Qe.MERGE){const a=n;a.source.fromUser?o=Am(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=$r(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Qe.ACK_USER_WRITE){const a=n;a.revert?o=Dm(t,e,a.path,s,i,r):o=Pm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Qe.LISTEN_COMPLETE)o=Om(t,e,n.path,s,r);else throw wn("Unknown operation type: "+n.type);const c=r.getChanges();return Rm(e,o,c),{viewCache:o,changes:c}}function Rm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=oi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ku(oi(e)))}}function $u(t,e,n,s,i,r){const o=e.eventCache;if(ci(s,n)!=null)return e;{let l,c;if(z(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=nn(e),h=a instanceof W?a:W.EMPTY_NODE,d=No(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const a=li(s,nn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=K(n);if(a===".priority"){T(Mt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=hc(s,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=ue(n);let d;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=hc(s,n,o.getNode(),c);g!=null?d=o.getNode().getImmediateChild(a).updateChild(h,g):d=o.getNode().getImmediateChild(a)}else d=Ro(s,a,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),a,d,h,i,r):l=o.getNode()}}return Zn(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function ai(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const h=o?t.filter:t.filter.getIndexedFilter();if(z(n))a=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=h.updateFullNode(c.getNode(),x,null)}else{const x=K(n);if(!c.isCompleteForPath(n)&&Mt(n)>1)return e;const I=ue(n),$=c.getNode().getImmediateChild(x).updateChild(I,s);x===".priority"?a=h.updatePriority(c.getNode(),$):a=h.updateChild(c.getNode(),x,$,I,ju,null)}const d=Lu(e,a,c.isFullyInitialized()||z(n),h.filtersNodes()),g=new Ao(i,d,r);return $u(t,d,n,i,g,l)}function jr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const h=new Ao(i,e,r);if(z(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Zn(e,a,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Zn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ue(n),x=l.getNode().getImmediateChild(d);let I;if(z(g))I=s;else{const O=h.getCompleteChild(d);O!=null?wu(g)===".priority"&&O.getChild(Tu(g)).isEmpty()?I=O:I=O.updateChild(g,s):I=W.EMPTY_NODE}if(x.equals(I))c=e;else{const O=t.filter.updateChild(l.getNode(),d,I,g,h,o);c=Zn(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function fc(t,e){return t.eventCache.isCompleteForChild(e)}function Am(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const h=ye(n,c);fc(e,K(h))&&(l=jr(t,l,h,a,i,r,o))}),s.foreach((c,a)=>{const h=ye(n,c);fc(e,K(h))||(l=jr(t,l,h,a,i,r,o))}),l}function dc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $r(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;z(n)?a=s:a=new he(null).setTree(n,s);const h=e.serverCache.getNode();return a.children.inorderTraversal((d,g)=>{if(h.hasChild(d)){const x=e.serverCache.getNode().getImmediateChild(d),I=dc(t,x,g);c=ai(t,c,new re(d),I,i,r,o,l)}}),a.children.inorderTraversal((d,g)=>{const x=!e.serverCache.isCompleteForChild(d)&&g.value===null;if(!h.hasChild(d)&&!x){const I=e.serverCache.getNode().getImmediateChild(d),O=dc(t,I,g);c=ai(t,c,new re(d),O,i,r,o,l)}}),c}function Pm(t,e,n,s,i,r,o){if(ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(t,e,n,c.getNode().getChild(n),i,r,l,o);if(z(n)){let a=new he(null);return c.getNode().forEachChild(yn,(h,d)=>{a=a.set(new re(h),d)}),$r(t,e,n,a,i,r,l,o)}else return e}else{let a=new he(null);return s.foreach((h,d)=>{const g=ye(n,h);c.isCompleteForPath(g)&&(a=a.set(h,c.getNode().getChild(g)))}),$r(t,e,n,a,i,r,l,o)}}function Om(t,e,n,s,i){const r=e.serverCache,o=Lu(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return $u(t,o,n,s,ju,i)}function Dm(t,e,n,s,i,r){let o;if(ci(s,n)!=null)return e;{const l=new Ao(s,e,i),c=e.eventCache.getNode();let a;if(z(n)||K(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=li(s,nn(e));else{const d=e.serverCache.getNode();T(d instanceof W,"serverChildren would be complete if leaf node"),h=No(s,d)}h=h,a=t.filter.updateFullNode(c,h,r)}else{const h=K(n);let d=Ro(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?a=t.filter.updateChild(c,h,d,ue(n),l,r):e.eventCache.getNode().hasChild(h)?a=t.filter.updateChild(c,h,W.EMPTY_NODE,ue(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=li(s,nn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ci(s,J())!=null,Zn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Io(s.getIndex()),r=Jg(s);this.processor_=Sm(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(W.EMPTY_NODE,l.getNode(),null),h=new Ft(c,o.isFullyInitialized(),i.filtersNodes()),d=new Ft(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wi(d,h),this.eventGenerator_=new om(this.query_)}get query(){return this.query_}}function Mm(t){return t.viewCache_.serverCache.getNode()}function Fm(t){return oi(t.viewCache_)}function Lm(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function pc(t){return t.eventRegistrations_.length===0}function Wm(t,e){t.eventRegistrations_.push(e)}function _c(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function gc(t,e,n,s){e.type===Qe.MERGE&&e.source.queryId!==null&&(T(nn(t.viewCache_),"We should always have a full cache before handling merges"),T(oi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Nm(t.processor_,i,e,n,s);return Tm(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Gu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Bm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(En(r,o))}),n.isFullyInitialized()&&s.push(ku(n.getNode())),Gu(t,s,n.getNode(),e)}function Gu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return lm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class Ku{constructor(){this.views=new Map}}function Hm(t){T(!ui,"__referenceConstructor has already been defined"),ui=t}function Um(){return T(ui,"Reference.ts has not been loaded"),ui}function Vm(t){return t.views.size===0}function Po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),gc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(gc(o,e,n,s));return r}}function qu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=li(n,i?s:null),c=!1;l?c=!0:s instanceof W?(l=No(n,s),c=!1):(l=W.EMPTY_NODE,c=!1);const a=Wi(new Ft(l,c,!1),new Ft(s,i,!1));return new km(e,a)}return o}function jm(t,e,n,s,i,r){const o=qu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Wm(o,n),Bm(o,n)}function $m(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Lt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(_c(a,n,s)),pc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(_c(c,n,s)),pc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Lt(t)&&r.push(new(Um())(e._repo,e._path)),{removed:r,events:o}}function zu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function kt(t,e){let n=null;for(const s of t.views.values())n=n||Lm(s,e);return n}function Yu(t,e){if(e._queryParams.loadsAllData())return Hi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Xu(t,e){return Yu(t,e)!=null}function Lt(t){return Hi(t)!=null}function Hi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function Gm(t){T(!hi,"__referenceConstructor has already been defined"),hi=t}function Km(){return T(hi,"Reference.ts has not been loaded"),hi}let qm=1;class mc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=bm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qu(t,e,n,s,i){return hm(t.pendingWriteTree_,e,n,s,i),i?ws(t,new tn(Fu(),e,n)):[]}function Yt(t,e,n=!1){const s=fm(t.pendingWriteTree_,e);if(dm(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(J(),!0):We(s.children,o=>{r=r.set(new re(o),!0)}),ws(t,new ri(s.path,r,n))}else return[]}function Is(t,e,n){return ws(t,new tn(So(),e,n))}function zm(t,e,n){const s=he.fromObject(n);return ws(t,new ps(So(),e,s))}function Ym(t,e){return ws(t,new ds(So(),e))}function Xm(t,e,n){const s=Do(t,n);if(s){const i=ko(s),r=i.path,o=i.queryId,l=De(r,e),c=new ds(To(o),l);return Mo(t,r,c)}else return[]}function fi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Xu(o,e))){const c=$m(o,e,n,s);Vm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const h=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(g,x)=>Lt(x));if(h&&!d){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=Jm(g);for(let I=0;I<x.length;++I){const O=x[I],$=O.query,V=th(t,O);t.listenProvider_.startListening(es($),_s(t,$),V.hashFn,V.onComplete)}}}!d&&a.length>0&&!s&&(h?t.listenProvider_.stopListening(es(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Ui(g));t.listenProvider_.stopListening(es(g),x)}))}e0(t,a)}return l}function Zu(t,e,n,s){const i=Do(t,s);if(i!=null){const r=ko(i),o=r.path,l=r.queryId,c=De(o,e),a=new tn(To(l),c,n);return Mo(t,o,a)}else return[]}function Qm(t,e,n,s){const i=Do(t,s);if(i){const r=ko(i),o=r.path,l=r.queryId,c=De(o,e),a=he.fromObject(n),h=new ps(To(l),c,a);return Mo(t,o,h)}else return[]}function Gr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const I=De(g,i);r=r||kt(x,I),o=o||Lt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Lt(l),r=r||kt(l,J())):(l=new Ku,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,I)=>{const O=kt(I,J());O&&(r=r.updateImmediateChild(x,O))}));const a=Xu(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Ui(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=t0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const h=Bi(t.pendingWriteTree_,i);let d=jm(l,e,n,h,r,c);if(!a&&!o&&!s){const g=Yu(l,e);d=d.concat(n0(t,e,g))}return d}function Oo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=De(o,e),a=kt(l,c);if(a)return a});return Hu(i,e,r,n,!0)}function Zm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,h)=>{const d=De(a,n);s=s||kt(h,d)});let i=t.syncPointTree_.get(n);i?s=s||kt(i,J()):(i=new Ku,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ft(s,!0,!1):null,l=Bi(t.pendingWriteTree_,e._path),c=qu(i,e,l,r?o.getNode():W.EMPTY_NODE,r);return Fm(c)}function ws(t,e){return Ju(e,t.syncPointTree_,null,Bi(t.pendingWriteTree_,J()))}function Ju(t,e,n,s){if(z(t.path))return eh(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=kt(i,J()));let r=[];const o=K(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,h=Uu(s,o);r=r.concat(Ju(l,c,a,h))}return i&&(r=r.concat(Po(i,t,s,n))),r}}function eh(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=kt(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Uu(s,o),h=t.operationForChild(o);h&&(r=r.concat(eh(h,l,c,a)))}),i&&(r=r.concat(Po(i,t,s,n))),r}function th(t,e){const n=e.query,s=_s(t,n);return{hashFn:()=>(Mm(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Xm(t,n._path,s):Ym(t,n._path);{const r=Z_(i,n);return fi(t,n,null,r)}}}}function _s(t,e){const n=Ui(e);return t.queryToTagMap.get(n)}function Ui(t){return t._path.toString()+"$"+t._queryIdentifier}function Do(t,e){return t.tagToQueryMap.get(e)}function ko(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Mo(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Bi(t.pendingWriteTree_,e);return Po(s,n,i,null)}function Jm(t){return t.fold((e,n,s)=>{if(n&&Lt(n))return[Hi(n)];{let i=[];return n&&(i=zu(n)),We(s,(r,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Km())(t._repo,t._path):t}function e0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ui(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function t0(){return qm++}function n0(t,e,n){const s=e._path,i=_s(t,e),r=th(t,n),o=t.listenProvider_.startListening(es(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!Lt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,h,d)=>{if(!z(a)&&h&&Lt(h))return[Hi(h).query];{let g=[];return h&&(g=g.concat(zu(h).map(x=>x.query))),We(d,(x,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const h=c[a];t.listenProvider_.stopListening(es(h),_s(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fo(n)}node(){return this.node_}}class Lo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Lo(this.syncTree_,n)}node(){return Oo(this.syncTree_,this.path_)}}const s0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xc=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return i0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return r0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},i0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},r0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},o0=function(t,e,n,s){return Wo(e,new Lo(n,t),s)},nh=function(t,e,n){return Wo(t,new Fo(e),n)};function Wo(t,e,n){const s=t.getPriority().val(),i=xc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=xc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,Ee(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(pe,(l,c)=>{const a=Wo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ho(t,e){let n=e instanceof re?e:new re(e),s=t,i=K(n);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new Bo(i,s,r),n=ue(n),i=K(n)}return s}function Rn(t){return t.node.value}function sh(t,e){t.node.value=e,Kr(t)}function ih(t){return t.node.childCount>0}function l0(t){return Rn(t)===void 0&&!ih(t)}function Vi(t,e){We(t.node.children,(n,s)=>{e(new Bo(n,t,s))})}function rh(t,e,n,s){n&&e(t),Vi(t,i=>{rh(i,e,!0)})}function c0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(t){return new re(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function Kr(t){t.parent!==null&&a0(t.parent,t.name,t)}function a0(t,e,n){const s=l0(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Kr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Kr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=/[\[\].#$\/\u0000-\u001F\u007F]/,h0=/[\[\].#$\u0000-\u001F\u007F]/,_r=10*1024*1024,oh=function(t){return typeof t=="string"&&t.length!==0&&!u0.test(t)},lh=function(t){return typeof t=="string"&&t.length!==0&&!h0.test(t)},f0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lh(t)},d0=function(t,e,n,s){Uo(_o(t,"value"),e,n)},Uo=function(t,e,n){const s=n instanceof re?new Pg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+qt(s)+" with contents = "+e.toString());if(iu(e))throw new Error(t+"contains "+e.toString()+" "+qt(s));if(typeof e=="string"&&e.length>_r/3&&Fi(e)>_r)throw new Error(t+"contains a string greater than "+_r+" utf8 bytes "+qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(We(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!oh(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Og(s,o),Uo(t,l,s),Dg(s)}),i&&r)throw new Error(t+' contains ".value" child '+qt(s)+" in addition to actual children.")}},ch=function(t,e,n,s){if(!lh(n))throw new Error(_o(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},p0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ch(t,e,n)},ah=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!f0(n))throw new Error(_o(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Co(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function uh(t,e,n){Vo(t,n),hh(t,s=>Co(s,e))}function ft(t,e,n){Vo(t,n),hh(t,s=>Xe(s,e)||Xe(e,s))}function hh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(m0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function m0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xn&&Ne("event: "+n.toString()),Nn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="repo_interrupt",y0=25;class v0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new g0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new Bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function C0(t,e,n){if(t.stats_=yo(t.repoInfo_),t.forceRestClient_||ng())t.server_=new si(t.repoInfo_,(s,i,r,o)=>{yc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new xt(t.repoInfo_,e,(s,i,r,o)=>{yc(t,s,i,r,o)},s=>{vc(t,s)},s=>{E0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=lg(t.repoInfo_,()=>new rm(t.stats_,t.server_)),t.infoData_=new em,t.infoSyncTree_=new mc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Is(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$o(t,"connected",!1),t.serverSyncTree_=new mc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ft(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function b0(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jo(t){return s0({timestamp:b0(t)})}function yc(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Xs(n,a=>Ee(a));o=Qm(t.serverSyncTree_,r,c,i)}else{const c=Ee(n);o=Zu(t.serverSyncTree_,r,c,i)}else if(s){const c=Xs(n,a=>Ee(a));o=zm(t.serverSyncTree_,r,c)}else{const c=Ee(n);o=Is(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=$i(t,r)),ft(t.eventQueue_,l,o)}function vc(t,e){$o(t,"connected",e),e===!1&&S0(t)}function E0(t,e){We(e,(n,s)=>{$o(t,n,s)})}function $o(t,e,n){const s=new re("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(s,i);const r=Is(t.infoSyncTree_,s,i);ft(t.eventQueue_,s,r)}function fh(t){return t.nextWriteId_++}function I0(t,e,n){const s=Zm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ee(i).withIndex(e._queryParams.getIndex());Gr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Is(t.serverSyncTree_,e._path,r);else{const l=_s(t.serverSyncTree_,e);o=Zu(t.serverSyncTree_,e._path,r,l)}return ft(t.eventQueue_,e._path,o),fi(t.serverSyncTree_,e,n,null,!0),r},i=>(ji(t,"get for query "+xe(e)+" failed: "+i),Promise.reject(new Error(i))))}function w0(t,e,n,s,i){ji(t,"set",{path:e.toString(),value:n,priority:s});const r=jo(t),o=Ee(n,s),l=Oo(t.serverSyncTree_,e),c=nh(o,l,r),a=fh(t),h=Qu(t.serverSyncTree_,e,c,a,!0);Vo(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const I=g==="ok";I||Le("set at "+e+" failed: "+g);const O=Yt(t.serverSyncTree_,a,!I);ft(t.eventQueue_,e,O),A0(t,i,g,x)});const d=mh(t,e);$i(t,d),ft(t.eventQueue_,d,[])}function S0(t){ji(t,"onDisconnectEvents");const e=jo(t),n=ii();Hr(t.onDisconnect_,J(),(i,r)=>{const o=o0(i,r,t.serverSyncTree_,e);Mu(n,i,o)});let s=[];Hr(n,J(),(i,r)=>{s=s.concat(Is(t.serverSyncTree_,i,r));const o=mh(t,i);$i(t,o)}),t.onDisconnect_=ii(),ft(t.eventQueue_,J(),s)}function T0(t,e,n){let s;K(e._path)===".info"?s=Gr(t.infoSyncTree_,e,n):s=Gr(t.serverSyncTree_,e,n),uh(t.eventQueue_,e._path,s)}function N0(t,e,n){let s;K(e._path)===".info"?s=fi(t.infoSyncTree_,e,n):s=fi(t.serverSyncTree_,e,n),uh(t.eventQueue_,e._path,s)}function R0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(x0)}function ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function A0(t,e,n,s){e&&Nn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function dh(t,e,n){return Oo(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Go(t,e=t.transactionQueueTree_){if(e||Gi(t,e),Rn(e)){const n=_h(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&P0(t,Ss(e),n)}else ih(e)&&Vi(e,n=>{Go(t,n)})}function P0(t,e,n){const s=n.map(a=>a.currentWriteId),i=dh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const h=n[a];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=De(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ji(t,"transaction put response",{path:c.toString(),status:a});let h=[];if(a==="ok"){const d=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(Yt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&d.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Gi(t,Ho(t.transactionQueueTree_,e)),Go(t,t.transactionQueueTree_),ft(t.eventQueue_,e,h);for(let g=0;g<d.length;g++)Nn(d[g])}else{if(a==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Le("transaction at "+c.toString()+" failed: "+a);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=a}$i(t,e)}},o)}function $i(t,e){const n=ph(t,e),s=Ss(n),i=_h(t,n);return O0(t,i,s),s}function O0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=De(n,c.path);let h=!1,d;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=y0)h=!0,d="maxretry",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=dh(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Uo("transaction failed: Data returned ",x,c.path);let I=Ee(x);typeof x=="object"&&x!=null&&bt(x,".priority")||(I=I.updatePriority(g.getPriority()));const $=c.currentWriteId,V=jo(t),X=nh(I,g,V);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=X,c.currentWriteId=fh(t),o.splice(o.indexOf($),1),i=i.concat(Qu(t.serverSyncTree_,c.path,X,c.currentWriteId,c.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,$,!0))}else h=!0,d="nodata",i=i.concat(Yt(t.serverSyncTree_,c.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}Gi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Nn(s[l]);Go(t,t.transactionQueueTree_)}function ph(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&Rn(s)===void 0;)s=Ho(s,n),e=ue(e),n=K(e);return s}function _h(t,e){const n=[];return gh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function gh(t,e,n){const s=Rn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Vi(e,i=>{gh(t,i,n)})}function Gi(t,e){const n=Rn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,sh(e,n.length>0?n:void 0)}Vi(e,s=>{Gi(t,s)})}function mh(t,e){const n=Ss(ph(t,e)),s=Ho(t.transactionQueueTree_,e);return c0(s,i=>{gr(t,i)}),gr(t,s),rh(s,i=>{gr(t,i)}),n}function gr(t,e){const n=Rn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?sh(e,void 0):n.length=r+1,ft(t.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)Nn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function k0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Le(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cc=function(t,e){const n=M0(t),s=n.namespace;n.domain==="firebase.com"&&vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||q_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},M0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=D0(t.substring(h,d)));const g=k0(t.substring(Math.min(t.length,d)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class L0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ko{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:wu(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=oc(this._queryParams),n=mo(e);return n==="{}"?"default":n}get _queryObject(){return oc(this._queryParams)}isEqual(e){if(e=Sn(e),!(e instanceof Ko))return!1;const n=this._repo===e._repo,s=Co(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ag(this._path)}}class Et extends Ko{constructor(e,n){super(e,n,new wo,!1)}get parent(){const e=Tu(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=qr(this.ref,e);return new gs(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gs(i,qr(this.ref,s),pe)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ks(t,e){return t=Sn(t),t._checkNotDeleted("ref"),e!==void 0?qr(t._root,e):t._root}function qr(t,e){return t=Sn(t),K(t._path)===null?p0("child","path",e):ch("child","path",e),new Et(t._repo,ye(t._path,e))}function W0(t){return ah("remove",t._path),yh(t,null)}function yh(t,e){t=Sn(t),ah("set",t._path),d0("set",e,t._path);const n=new Mi;return w0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function B0(t){t=Sn(t);const e=new xh(()=>{}),n=new Ki(e);return I0(t._repo,t,n).then(s=>new gs(s,new Et(t._repo,t._path),t._queryParams.getIndex()))}class Ki{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new F0("value",this,new gs(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new L0(this,e,n):null}matches(e){return e instanceof Ki?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function H0(t,e,n,s,i){const r=new xh(n,void 0),o=new Ki(r);return T0(t._repo,t,o),()=>N0(t._repo,t,o)}function U0(t,e,n,s){return H0(t,"value",e)}Hm(Et);Gm(Et);/**
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
 */const V0="FIREBASE_DATABASE_EMULATOR_HOST",zr={};let j0=!1;function $0(t,e,n,s){t.repoInfo_=new gu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function G0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cc(r,i),l=o.repoInfo,c;typeof process<"u"&&Vl&&(c=Vl[V0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Cc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new ig(t.name,t.options,e);_0("Invalid Firebase Database URL",o),z(o.path)||vt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=q0(l,t,a,new sg(t,n));return new z0(h,t)}function K0(t,e){const n=zr[e];(!n||n[t.key]!==t)&&vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),R0(t),delete n[t.key]}function q0(t,e,n,s){let i=zr[e.name];i||(i={},zr[e.name]=i);let r=i[t.toURLString()];return r&&vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new v0(t,j0,n,s),i[t.toURLString()]=r,r}class z0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(C0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(K0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vt("Cannot call "+e+" on a deleted database.")}}function Y0(t=N_(),e){const n=E_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=fp("database");s&&X0(n,...s)}return n}function X0(t,e,n,s={}){t=Sn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Qs(s,r.repoInfo_.emulatorOptions))return;vt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Bs(Bs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:dp(s.mockUserToken,t.app.options.projectId);o=new Bs(l)}$0(r,i,s,o)}/**
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
 */function Q0(t){U_(T_),Js(new ls("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return G0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),mn(jl,$l,t),mn(jl,$l,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Q0();const Bn=pi;function di(){const t=["5305520mMbvNw","720775593565","5DIvpMK","15IfNlwu","3700228LqoHcu","iamwait.firebasestorage.app","G-3RRDNZ9ME5","1:720775593565:web:1a263bf6a87ecfea3817b4","1695324xwBTSG","21412fjZQqc","2158737HHgqZv","78830otERxL","iamwait","8TzKaBX","8001999yBzTkO"];return di=function(){return t},di()}function pi(t,e){const n=di();return pi=function(s,i){return s=s-366,n[s]},pi(t,e)}(function(t,e){const n=pi,s=t();for(;;)try{if(parseInt(n(373))/1+-parseInt(n(375))/2*(parseInt(n(367))/3)+parseInt(n(368))/4*(parseInt(n(366))/5)+-parseInt(n(372))/6+-parseInt(n(374))/7*(parseInt(n(377))/8)+parseInt(n(378))/9+-parseInt(n(379))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(di,517008);const Z0={apiKey:"AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw",authDomain:"iamwait.firebaseapp.com",databaseURL:"https://iamwait-default-rtdb.europe-west1.firebasedatabase.app",projectId:Bn(376),storageBucket:Bn(369),messagingSenderId:Bn(380),appId:Bn(371),measurementId:Bn(370)},J0=Za(Z0),Ms=Y0(J0),Nt=_i;(function(t,e){const n=_i,s=t();for(;;)try{if(parseInt(n(235))/1*(-parseInt(n(232))/2)+parseInt(n(245))/3+parseInt(n(236))/4*(-parseInt(n(219))/5)+-parseInt(n(246))/6*(parseInt(n(222))/7)+parseInt(n(211))/8*(-parseInt(n(247))/9)+-parseInt(n(248))/10+-parseInt(n(242))/11*(-parseInt(n(221))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,575626);function _i(t,e){const n=gi();return _i=function(s,i){return s=s-211,n[s]},_i(t,e)}function gi(){const t=["uVPuy","suJRY","KoRZf"," : данные не найдены"," = ","then","fbStore2","MAgYk","pdGOa","27770NoMkfY","log","%c ","50ClRbeh","837640XQdIxh","error","val","uFSdi","yIfJO"," -  данные записаны","2629OijiDe","color: darkgreen","catch","1153104BfnfmN","12atRbjm","519066cssUOM","5138530WKTlED","40mgqQFn","Rqupy"," на прослушке"," удалены!","mUgyf","twuyX","tvqPW","bOuEz","25HTXFgP","lookField","139116LLprkf","125811kRebjO"];return gi=function(){return t},gi()}const qo=ep(Nt(229),{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:0}),actions:{async getField(t){const e=Nt,n={MAgYk:function(i,r){return i(r)},mUgyf:function(i,r){return i+r},KoRZf:e(226),yIfJO:function(i,r,o){return i(r,o)},cnXXr:function(i,r){return i(r)}},s=n[e(240)](ks,Ms,t);return n.cnXXr(B0,s)[e(228)](i=>{const r=e;if(i.exists()){const o=i[r(238)]();return Hn(">>> Данные по "+t+r(227)+JSON.stringify(o)),o}else n[r(230)](Hn,n[r(215)](t,n[r(225)]))})},async setField(t,e){const n=Nt,s={twuyX:function(r,o){return r+o},Rqupy:n(241),uFSdi:"Ошибка записи данных: ",pdGOa:function(r,o,l){return r(o,l)},bOuEz:function(r,o,l){return r(o,l)}},i=s[n(231)](ks,Ms,t);return s[n(218)](yh,i,e)[n(228)](()=>{const r=n;Hn(s[r(216)](t,s[r(212)]))})[n(244)](r=>{const o=n;console[o(237)](s[o(239)],r)})},async onValue(t){const e=Nt,n={suJRY:function(i,r){return i(r)},tvqPW:function(i,r,o){return i(r,o)}},s=n[e(217)](ks,Ms,t);U0(s,i=>{const r=e;n[r(224)](Hn,"########### ########## Данные "+t+r(213)),this[r(220)]=i[r(238)]()})},async removeField(t){const e=Nt,n={uVPuy:function(i,r){return i(r)}};console.log(t);const s=ks(Ms,t);W0(s)[e(228)](()=>{const i=e;n[i(223)](Hn,"Данные "+t+i(214))})}}}),Hn=t=>console[Nt(233)](Nt(234)+t,Nt(243)),mr=xi;(function(t,e){const n=xi,s=t();for(;;)try{if(parseInt(n(454))/1+-parseInt(n(467))/2+parseInt(n(440))/3*(-parseInt(n(460))/4)+parseInt(n(457))/5+-parseInt(n(444))/6*(-parseInt(n(455))/7)+parseInt(n(470))/8+-parseInt(n(449))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(mi,715532);function mi(){const t=["900618DsAFbY","tJthh","log","uVnuU","66ahtJTg"," Морской бой ","reKCV","WXRqg","button","9181809LLGcrv","jmksf"," Начальная страница ","yIRaK","zSktu","806638kVKlOU","526561aSwXwf","mIfRC","2718905fAZmFA","Выберите игру","WAteA","8kZyRKM","DhPFT","ZnhXh","vXxWK","div","SmsYb","ryFKT","539138XiqQPw","ListGames","gameChanged","3422736AXeJJR","SYMKO"];return mi=function(){return t},mi()}function xi(t,e){const n=mi();return xi=function(s,i){return s=s-439,n[s]},xi(t,e)}const ex=sa({__name:mr(468),emits:[mr(469)],setup(t,{emit:e}){const n=mr,s={WXRqg:function(l,c){return l+c},SYMKO:n(469),reKCV:function(l,c,a,h){return l(c,a,h)},DhPFT:n(464),WAteA:function(l,c){return l(c)},jmksf:n(451),lDKKJ:function(l,c,a,h,d){return l(c,a,h,d)},uVnuU:function(l,c,a,h,d){return l(c,a,h,d)},vXxWK:function(l){return l()},zSktu:function(l,c,a,h,d){return l(c,a,h,d)},SmsYb:n(448),tJthh:" Крестики нолики ",mIfRC:function(l,c,a,h){return l(c,a,h)},yIRaK:n(445),ZnhXh:function(l,c){return l(c)},ryFKT:" Это бот для игр с соперником. ",jHfPV:function(l){return l()}},i=s.jHfPV(qo),r=e;function o(l){const c=n;console[c(442)](l),i.gameId=s[c(447)]("g",l),r(s[c(439)])}return(l,c)=>{const a=n;return me(),s[a(446)](ve,s[a(461)],null,[c[3]||(c[3]=s[a(459)](we,s[a(450)])),c[4]||(c[4]=s.lDKKJ(D,"h3",null,a(458),-1)),c[5]||(c[5]=s[a(443)](D,"br",null,null,-1)),D(a(448),{onClick:c[0]||(c[0]=h=>o(1))}," Камень ножницы бумага "),c[6]||(c[6]=D("br",null,null,-1)),c[7]||(c[7]=s[a(463)](we)),c[8]||(c[8]=s[a(453)](D,"br",null,null,-1)),s.reKCV(D,s[a(465)],{onClick:c[1]||(c[1]=h=>o(2))},s[a(441)]),c[9]||(c[9]=D("br",null,null,-1)),c[10]||(c[10]=s[a(463)](we)),c[11]||(c[11]=s[a(443)](D,"br",null,null,-1)),s[a(456)](D,a(448),{onClick:c[2]||(c[2]=h=>o(3))},s[a(452)]),c[12]||(c[12]=D("br",null,null,-1)),c[13]||(c[13]=D("br",null,null,-1)),c[14]||(c[14]=s[a(463)](we)),c[15]||(c[15]=s.uVnuU(D,"br",null,null,-1)),c[16]||(c[16]=s[a(462)](we,s[a(466)]))])}}}),ms=at;(function(t,e){const n=at,s=t();for(;;)try{if(-parseInt(n(563))/1+parseInt(n(530))/2*(-parseInt(n(543))/3)+parseInt(n(536))/4+parseInt(n(544))/5+parseInt(n(520))/6+parseInt(n(649))/7+-parseInt(n(565))/8*(parseInt(n(547))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,598819);const tx={key:0},nx={key:1,class:ms(568)},sx={key:2},ix={key:3},rx={key:0},ox=["onClick"],lx={key:4},cx={key:0},ax=[ms(534)],ux={key:1,class:ms(620)},hx={key:5},fx={key:6},dx={key:7};function at(t,e){const n=yi();return at=function(s,i){return s=s-490,n[s]},at(t,e)}function yi(){const t=["KUfWs","KtiFb","div","nickName","iTFrJ","XgdzR","g1/look","qRNBn",">>>> ANALIZ ","UPCSQ","host","includes","gyHNS","iKpMo","iEuHl","/play/","jioGo","NuUBq","rkQyc","DfHut","VCBcR","EgJnY","gVnGl","IpokL","myText","KeYwT","gLCXB","XuMXg","pHWtl","3493278DKakEH","Ltzdz","stage","iqrGg","now","IasZZ","iEgmj","MSQqI","VcMCZ","dwfMG","2029530HEpjwE","oWhYi","localhost","Список желающих играть:","onClick","HToIC","4188688JMfsWp","then","LVnWv","RovVi","iPlcx","RVano","vfSMz","3XsegSX","4689725BljoOu","mNDCG","LbDNh","447003CWXXZu","keys","uXItE","lqNek","ZLkej","lookField","Отказаться","lqGaW","removeField","jkmhJ","EEiEI","DdOQn","accept","g1/game/","AeTpl","cvLZG","934848uTtKWq","button","104lHTUqs","yYybd","qfDAZ","menuBt","kzcjP","green-bt","setItem","NZCgG","joXXh","TZyfW","reload","ZreYG","id2","ВСЕ НАСТРОЙКИ ИГРЫ","duGyW","ZgFTK","::::::: Связывание :::::::","WXnEQ","dpSXe","NMpnx","vWGxf","myId","SBsqE","waAwr","ROiPB","Lokiw","TsJmG","log","jFMGk","hdcgl","XTMtA","value","pavxr","res","pFqsv","NZpmp","WzTHV","oxFzx","fNngX","XwMoA","name","HxWUb","BinderComp","g1/look/","center","myNickName","Играем","JFddC","wQwXQ"," Выбрал игрока ","LMXtx","cHNpc","seRHl","g1/play/","GkkmY","red-notice","push","PpZTx","GrVfe","SRdpu","myName","zieHk","ydRkI","0|2|1|7|6|5|3|4","jqPWC","wWmxC","xbeuy","aiOGM","yuamE","axXwV","IZZwi","vsokR","BXGbT","CCLNf","game = ","* можете поменять ваш Никнейм","name2","geZBB"," с игроком ","gameLink","LDLlU","Cgxpo","vKgsi","tAFNY","4387411pLQbni","mmFzZ","WMYJh","game","FuVCd","getField","NXLva","blaIL","EYKzq","aWVqK","4px","LTXPX","жду пока не откликнится ","FFOwH","getItem","HaVEN","AvfGq","Nuuky","QDxBM","/game/","darkred","XudqT","eIZgS"," Зарегистрироваться в поиске ","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","MfmIX","udIUj","setField","KPfxl"];return yi=function(){return t},yi()}const px=sa({__name:ms(607),props:{game:{}},setup(t){const e=ms,n={LTXPX:function(p,u){return p+u},EEiEI:e(668),HToIC:e(639),wWmxC:function(p,u){return p+u},jFMGk:e(506),TsJmG:function(p,u){return p>u},CCLNf:function(p,u){return p(u)},xbeuy:function(p){return p()},NuUBq:function(p,u){return p>u},KtiFb:function(p,u){return p==u},seRHl:function(p,u){return p===u},FFOwH:function(p,u){return p(u)},IasZZ:e(499),DdOQn:function(p,u){return p===u},yYybd:function(p){return p()},duGyW:e(497),UPCSQ:e(608),IQsfc:e(598),gVnGl:function(p,u,f){return p(u,f)},RovVi:function(p){return p()},Nuuky:function(p,u){return p+u},PpZTx:function(p,u){return p+u},LVnWv:"g1/play/",hdcgl:function(p,u){return p+u},yuamE:e(560),UiBGh:"Хорошо бы сообщить сопернику, что вы ушли из игры",mmFzZ:function(p,u,f){return p(u,f)},XEdrg:function(p,u){return p+u},iqrGg:function(p,u){return p+u},ZyEvx:e(578),tUmwh:function(p,u,f,v,C,k){return p(u,f,v,C,k)},XudqT:e(564),WzTHV:function(p){return p()},wQwXQ:"green-bt",MSQqI:function(p){return p()},pHWtl:function(p,u,f,v){return p(u,f,v)},uXItE:e(493),geZBB:function(p,u,f,v,C){return p(u,f,v,C)},NZpmp:e(581),iKpMo:function(p,u,f,v,C){return p(u,f,v,C)},dwfMG:function(p,u){return p+u},NMpnx:function(p,u){return p(u)},PXyaY:" : ",ZgFTK:function(p,u){return p(u)},aiOGM:function(p,u){return p(u)},AeTpl:function(p,u,f,v,C){return p(u,f,v,C)},GrVfe:function(p,u){return p+u},KPfxl:" stage:",ROiPB:function(p,u){return p(u)},LbDNh:function(p,u){return p(u)},IZZwi:function(p,u,f,v,C){return p(u,f,v,C)},XTMtA:function(p,u){return p===u},qfDAZ:function(p,u){return p(u)},HxWUb:function(p){return p()},igryq:function(p,u,f,v){return p(u,f,v)},lqNek:function(p,u){return p===u},LMXtx:function(p,u){return p(u)},fNngX:function(p,u,f,v){return p(u,f,v)},udIUj:function(p,u){return p===u},jioGo:function(p){return p()},iPlcx:" Привет! ",SBsqE:"input",Lokiw:"larger",jkmhJ:e(659),aWVqK:"Сменить nickName",KUfWs:e(640),blaIL:function(p,u){return p>u},VCBcR:e(533),KeYwT:function(p,u,f,v,C){return p(u,f,v,C)},gLCXB:function(p,u,f,v){return p(u,f,v)},gyHNS:"red-bt",axXwV:e(672),vsokR:function(p){return p()},ZreYG:function(p,u,f,v,C){return p(u,f,v,C)},AvfGq:function(p,u,f,v,C){return p(u,f,v,C)},EgJnY:"small",BXGbT:e(673),WXnEQ:function(p,u){return p===u},IpokL:function(p,u){return p(u)},QDxBM:function(p,u,f,v){return p(u,f,v)},EfCoF:"Нахожусь в списке, жду кто выберет",rkQyc:function(p,u,f,v,C){return p(u,f,v,C)},iEuHl:function(p,u,f){return p(u,f)},LDLlU:"* нельзя выбирать себя",FuVCd:function(p){return p()},TwDPh:function(p,u){return p(u)},lqGaW:function(p,u,f,v,C){return p(u,f,v,C)},jqPWC:e(661),iTFrJ:function(p,u,f,v){return p(u,f,v)},XuMXg:"Нет ответа, отменяю выбор",NZCgG:function(p,u,f){return p(u,f)},cHNpc:function(p,u){return p(u)},GkkmY:function(p,u,f,v){return p(u,f,v)},WMYJh:function(p,u){return p(u)},cvLZG:" Вас выбрал игрок: ",XwMoA:function(p,u,f,v,C){return p(u,f,v,C)},EYKzq:function(p,u,f,v,C){return p(u,f,v,C)},tAFNY:function(p,u){return p(u)},vfSMz:function(p,u,f,v){return p(u,f,v)},iEgmj:e(553),ydRkI:"Согласиться",oWhYi:function(p,u,f,v,C){return p(u,f,v,C)},DfHut:e(611),eIZgS:function(p,u){return p(u)},waAwr:e(643),ZLkej:function(p,u,f,v,C){return p(u,f,v,C)},RVano:function(p,u,f,v,C){return p(u,f,v,C)},MfmIX:function(p,u){return p(u)},pavxr:" Контекс игры:",mNDCG:function(p,u,f,v,C){return p(u,f,v,C)},kzcjP:function(p,u,f,v,C){return p(u,f,v,C)},kgoqZ:function(p,u,f,v,C){return p(u,f,v,C)},VcMCZ:"20px",Cgxpo:e(515),joXXh:function(p,u,f){return p(u,f)},dlegO:e(610),NXLva:function(p){return p()},qRNBn:function(p,u,f){return p(u,f)}},s=location[e(501)][e(502)](e(532)),i=qo(),r=n[e(648)](wt,localStorage[e(663)](n.dlegO)),o=n[e(567)](wt,[]),l=n.RovVi(wt),c=n[e(655)](wt),a=n[e(584)](wt,""),h=n[e(546)](wt,""),d=function(){const p=e;i[p(494)]=r.value,r[p(596)]&&localStorage[p(571)](p(610),r.value)};function g(){const p=e;console[p(592)](n[p(535)],t.game),i[p(654)](n[p(630)](t[p(652)]+n[p(593)],i[p(586)])).then(u=>{const f=p;u&&(l[f(596)]={id:u.id,name:u[f(605)]},i.stage=5,i[f(654)](n[f(660)](n[f(660)](t[f(652)],n[f(557)]),u[f(652)]))[f(537)](v=>{a.value=v}))})}const x=function(p){const u=e,f={vqcxW:function(C,k){return n[at(591)](C,k)},dpSXe:function(C,k){return n.CCLNf(C,k)},HaVEN:function(C){return n[at(631)](C)},vWGxf:function(C,k){return n[at(508)](C,k)},XrWWW:function(C,k){return n.KtiFb(C,k)},JFddC:function(C,k){return n[at(617)](C,k)},XgdzR:function(C,k){return n[at(662)](C,k)},vKgsi:function(C,k){return C!==k}};if(console[u(592)](n[u(525)],p),o.value=[],n[u(558)](i[u(522)],0))return!1;i[u(522)]=1;let v=!1;p&&Object[u(548)](p).forEach(C=>{const k=u,j=k(628).split("|");let te=0;for(;;){switch(j[te++]){case"0":p[C][k(577)]&&p[C][k(577)]===i.myId&&(l[k(596)]={id:C,name:p[C][k(605)]});continue;case"1":if(f.vqcxW(i[k(522)],3))return!1;continue;case"2":C===f[k(583)](String,i[k(586)])&&(l[k(596)]={id:p[C][k(577)],name:p[C][k(641)]});continue;case"3":p[C][k(559)]&&f[k(664)](Q);continue;case"4":C&&p[C]&&o.value[k(621)]({id:C,name:p[C][k(605)]});continue;case"5":f[k(585)](i[k(522)],2)&&!v&&location[k(575)]();continue;case"6":f.XrWWW(p[C][k(577)],i[k(586)])&&(v=!0,i[k(522)]=3);continue;case"7":f[k(612)](C,f[k(496)](String,i.myId))&&C&&(v=!0,f[k(647)](i[k(522)],3)&&(i[k(522)]=2),p[C][k(577)]&&(i.stage=4));continue}break}})};n[e(498)](gn,()=>i[e(586)],p=>p&&setTimeout(g,500));function I(){const p=e;n[p(566)](O),i[p(522)]=1}function O(){const p=e;i.onValue(n[p(579)])[p(537)](u=>x(u)),gn(()=>i[p(552)],u=>x(u))}function $(){const p=e;i.setField(n.wWmxC(n.UPCSQ,i[p(586)]),{name:i[p(494)]||i.myName})}function V(p){const u=e,f={TZyfW:n.IQsfc};if(n[u(492)](p.id,i.myId))return c.value=!0,n[u(513)](setTimeout,()=>c[u(596)]=!1,2e3),!1;i.setField(n[u(500)]+p.id,{name:p[u(605)],id2:i[u(586)],name2:i[u(494)]||i[u(625)]})[u(537)](v=>{const C=u;console[C(592)](f[C(574)],v),l[C(596)]={id:p.id,name:p[C(605)]},i[C(522)]=3})}function X(p){const u=e;p&&l[u(596)]&&(n[u(539)](alert),i[u(676)](u(608)+l[u(596)].id,{name:l[u(596)].name,id2:i[u(586)],name2:i[u(625)],accept:!0})),!p&&i.setField(n[u(666)](n[u(500)],i.myId),{name:i[u(494)]||i[u(625)]})[u(537)](()=>i[u(522)]=2)}function ee(){const p=e;i[p(676)](n[p(500)]+l[p(596)].id,{name:l[p(596)][p(605)]})[p(537)](()=>i.stage=2)}function F(){var f;const p=e;let u=String(l[p(596)].id);n.TsJmG(l.value.id,i[p(586)])?u+=n[p(666)]("::",i.myId):u=n.Nuuky(n[p(630)](i[p(586)],"::"),u),i[p(555)](n[p(622)](n[p(538)],i[p(586)])),i[p(555)](n.Nuuky(p(618),(f=l.value)==null?void 0:f.id)),i[p(555)](n[p(594)](n[p(633)],u)),h.value=n.UiBGh,n[p(650)](setTimeout,location[p(575)],3e3)}function Q(){var C,k,j;const p=e,u={oxFzx:n[p(500)]};let f=Date[p(524)](),v=String(l[p(596)].id);n[p(508)](l[p(596)].id,i[p(586)])?v+=n.XEdrg("::",i[p(586)]):v=n[p(666)](n[p(523)](i.myId,"::"),v),console[p(592)](p(644),v),i[p(676)](n[p(538)]+i[p(586)],{id:(C=l[p(596)])==null?void 0:C.id,name:(k=l.value)==null?void 0:k.name,game:v,date:f}),i[p(676)](n[p(666)](n[p(538)],(j=l[p(596)])==null?void 0:j.id),{id:i[p(586)],name:i.myName,game:v,date:f}),i[p(676)](n[p(622)](n[p(633)],v),{game:n.ZyEvx}),n[p(650)](setTimeout,()=>{var $e;const te=p;i[te(555)](te(608)+(($e=l[te(596)])==null?void 0:$e.id)),i[te(555)](u[te(602)]+i[te(586)]),location[te(575)]()},2e3)}return(p,u)=>{var C,k;const f=e,v={Ltzdz:function(j){return n[at(601)](j)},zieHk:function(j,te,$e,on,fe,G){return j(te,$e,on,fe,G)},pFqsv:n[f(670)],SRdpu:n.wQwXQ};return n[f(527)](me),ve(Ge,null,[n[f(638)](Ue,s)?(n[f(527)](me),n[f(519)](ve,n.uXItE,tx,[u[7]||(u[7]=D("hr",null,null,-1)),u[8]||(u[8]=n[f(642)](D,"i",null,n[f(600)],-1)),u[9]||(u[9]=n.iKpMo(D,"br",null,null,-1)),n[f(513)](we,n.PpZTx(n[f(594)](n.dwfMG(" ",ot(n.NMpnx(Ue,i)[f(586)]))+n.PXyaY,n[f(580)](ot,n[f(632)](Ue,i)[f(625)]))," "),1),u[10]||(u[10]=n[f(561)](D,"br",null,null,-1)),we(n[f(623)](n[f(490)],n.ROiPB(ot,n.LbDNh(Ue,i)[f(522)]))+" ",1),u[11]||(u[11]=n[f(635)](D,"hr",null,null,-1))])):ze("",!0),n[f(595)](n[f(567)](Ue,i)[f(522)],5)?(n[f(606)](me),n[f(519)](ve,n[f(549)],nx,[n.igryq(D,n[f(670)],{onClick:u[0]||(u[0]=j=>F())},"❁")])):n.mmFzZ(ze,"",!0),n[f(550)](n[f(615)](Ue,i)[f(522)],0)?(me(),n[f(603)](ve,n[f(549)],sx,[n.gVnGl(Je,ex,{onGameChanged:I})])):n[f(650)](ze,"",!0),n[f(675)](n.ZgFTK(Ue,i)[f(522)],1)?(n[f(507)](me),ve(n[f(549)],ix,[u[15]||(u[15]=n.AeTpl(D,"p",null,n[f(540)],-1)),D("p",null,[_f(D(n[f(587)],{"onUpdate:modelValue":u[1]||(u[1]=j=>r[f(596)]=j),maxlength:"16",style:{"font-size":n[f(590)],padding:n[f(556)],"text-align":f(609)},onInput:u[2]||(u[2]=j=>d()),placeholder:n[f(658)]},null,544),[[Vd,r.value]])]),u[16]||(u[16]=D(n[f(549)],{class:f(620)},n[f(491)],-1)),o[f(596)]&&n[f(656)](o[f(596)].length,1)?(me(),ve(n.uXItE,rx,[u[12]||(u[12]=n[f(642)](D,"h3",null,n[f(511)],-1)),(n[f(546)](me,!0),n[f(504)](ve,Ge,null,sl(o[f(596)],j=>{const te=f;return v[te(521)](me),v[te(626)](ve,v[te(599)],{class:v[te(624)],key:j.id,onClick:$e=>V(j)},ot(j[te(605)]),9,ox)}),128)),u[13]||(u[13]=n.KeYwT(D,"br",null,null,-1)),u[14]||(u[14]=D("br",null,null,-1))])):n.mmFzZ(ze,"",!0),n[f(517)](D,n.XudqT,{class:n[f(503)],onClick:u[3]||(u[3]=j=>$())},n[f(634)]),u[17]||(u[17]=n[f(561)](D,"br",null,null,-1)),u[18]||(u[18]=n[f(636)](we)),u[19]||(u[19]=n[f(576)](D,"br",null,null,-1)),u[20]||(u[20]=n[f(665)](D,n[f(512)],null,n[f(637)],-1)),u[21]||(u[21]=n[f(642)](D,"br",null,null,-1)),u[22]||(u[22]=n[f(516)](D,"br",null,null,-1))])):n.mmFzZ(ze,"",!0),n[f(582)](n[f(514)](Ue,i)[f(522)],2)?(me(),n[f(667)](ve,f(493),lx,[u[26]||(u[26]=D("p",null,n.EfCoF,-1)),o[f(596)].length?(n[f(636)](me),n.gLCXB(ve,n[f(549)],cx,[u[23]||(u[23]=n[f(509)](D,"h3",null,n[f(511)],-1)),(n[f(615)](me,!0),ve(Ge,null,n[f(505)](sl,o[f(596)],j=>{const te=f;return n[te(566)](me),n.tUmwh(ve,n[te(670)],{class:te(570),key:j.id,onClick:$e=>V(j)},ot(j.name),9,ax)}),128)),u[24]||(u[24]=n[f(642)](D,"br",null,null,-1)),u[25]||(u[25]=n[f(516)](D,"br",null,null,-1))])):n[f(650)](ze,"",!0),c.value?(me(),ve(n.uXItE,ux,n[f(645)])):n[f(505)](ze,"",!0)])):n[f(513)](ze,"",!0),n[f(546)](Ue,i).stage===3?(n[f(653)](me),n[f(603)](ve,n[f(549)],hx,[n[f(603)](D,"p",null,[u[27]||(u[27]=we(f(614))),u[28]||(u[28]=n.ZreYG(D,"br",null,null,-1)),n[f(504)](D,"b",null,n.TwDPh(ot,(C=l[f(596)])==null?void 0:C[f(605)]),1),u[29]||(u[29]=we()),u[30]||(u[30]=n[f(554)](D,"br",null,null,-1)),u[31]||(u[31]=n[f(580)](we,n[f(629)]))]),n[f(495)](D,n[f(670)],{onClick:u[4]||(u[4]=j=>ee())},n[f(518)])])):n[f(572)](ze,"",!0),n.DdOQn(n[f(616)](Ue,i)[f(522)],4)&&((k=l[f(596)])!=null&&k.id)?(n[f(527)](me),n[f(619)](ve,n[f(549)],fx,[u[32]||(u[32]=n[f(651)](we,n[f(562)])),u[33]||(u[33]=n[f(604)](D,"br",null,null,-1)),u[34]||(u[34]=n[f(657)](D,"br",null,null,-1)),n[f(576)](D,"b",null,n[f(648)](ot,l[f(596)][f(605)]),1),u[35]||(u[35]=n[f(504)](D,"br",null,null,-1)),u[36]||(u[36]=n[f(657)](D,"br",null,null,-1)),n[f(542)](D,n[f(670)],{class:f(570),onClick:u[5]||(u[5]=j=>X(!1))},n[f(526)]),n[f(495)](D,n.XudqT,{class:n[f(613)],onClick:u[6]||(u[6]=j=>X(!0))},n[f(627)])])):n[f(650)](ze,"",!0),n[f(582)](n[f(514)](Ue,i)[f(522)],5)&&l.value?(n[f(601)](me),n[f(542)](ve,f(493),dx,[u[37]||(u[37]=n[f(531)](D,"h3",null,n[f(510)],-1)),u[38]||(u[38]=n[f(671)](we,n[f(588)])),u[39]||(u[39]=n.ZLkej(D,"br",null,null,-1)),D("b",null,n[f(589)](ot,l.value[f(605)]),1),u[40]||(u[40]=n[f(554)](D,"br",null,null,-1)),u[41]||(u[41]=n[f(541)](D,"br",null,null,-1)),u[42]||(u[42]=n[f(674)](we,n[f(597)])),u[43]||(u[43]=n[f(545)](D,"br",null,null,-1)),we(n[f(529)](" ",n[f(651)](ot,a[f(596)]))+" ",1),u[44]||(u[44]=n[f(569)](D,"br",null,null,-1)),u[45]||(u[45]=n[f(561)](D,"br",null,null,-1)),u[46]||(u[46]=n.kgoqZ(D,n.uXItE,{style:{color:f(669),"font-size":n[f(528)]}},[D("b",null,n[f(646)])],-1))])):n[f(573)](ze,"",!0),u[47]||(u[47]=n[f(551)](D,"br",null,null,-1)),u[48]||(u[48]=D("br",null,null,-1))],64)}}}),_x={class:"game"},gx={__name:"RockPaperSScissors",setup(t){return(e,n)=>(me(),ve("div",_x,[n[0]||(n[0]=D("h1",null,"♕",-1)),n[1]||(n[1]=D("h2",null,null,-1)),D("div",null,[Je(px,{game:"g1"})])]))}},mx=tp(gx,[["__scopeId","data-v-7afa5ccc"]]),xx={__name:"App",setup(t){const e=qo();let n=ef(mx);return la(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(s,i)=>(me(),Ra(Af(Ue(n))))}},yx=Ci;(function(t,e){const n=Ci,s=t();for(;;)try{if(-parseInt(n(499))/1*(parseInt(n(502))/2)+-parseInt(n(491))/3*(parseInt(n(495))/4)+-parseInt(n(497))/5+-parseInt(n(493))/6+-parseInt(n(492))/7*(parseInt(n(500))/8)+-parseInt(n(498))/9*(parseInt(n(501))/10)+-parseInt(n(503))/11*(-parseInt(n(496))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,475106);function vi(){const t=["use","36PjCXzz","12EYKIZQ","988810IiUUYb","369rxBRxA","630332yDvWXf","970248hmfGDA","198350xbnSnV","2yReMLp","37695977aDueDY","9501vAFmMi","21uADwKE","5508756VmxLAL"];return vi=function(){return t},vi()}function Ci(t,e){const n=vi();return Ci=function(s,i){return s=s-491,n[s]},Ci(t,e)}const vx=zd(),bc=Gd(xx);bc[yx(494)](vx),bc.mount("#app");
