function js(t,e){const n=$s();return js=function(s,i){return s=s-258,n[s]},js(t,e)}(function(t,e){const n=js,s=t();for(;;)try{if(-parseInt(n(275))/1+-parseInt(n(276))/2*(parseInt(n(277))/3)+parseInt(n(292))/4+-parseInt(n(259))/5*(parseInt(n(285))/6)+parseInt(n(261))/7+-parseInt(n(262))/8+parseInt(n(290))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})($s,542356),function(){const e=js,n={LQaBG:function(o,l){return o!==l},XzNBq:e(260),GzdxE:function(o,l){return o===l},MKehQ:function(o,l){return o===l},oBbqg:e(274),lJdCQ:function(o,l){return o(l)},QsDQu:function(o,l){return o===l},bHdKF:e(278),xmfoo:"include",ZSDpd:e(270),nwNMS:e(288),vvKoe:e(263),sRdWJ:function(o,l,c){return o(l,c)},dbFEQ:e(266)},s=document[e(267)](n[e(295)])[e(287)];if(s&&s[e(268)]&&s[e(268)](n[e(273)]))return;for(const o of document[e(289)](e(281)))r(o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n.LQaBG(c[l(272)],n.XzNBq))for(const a of c[l(282)])n.GzdxE(a[l(265)],l(293))&&n[l(269)](a.rel,n[l(273)])&&n[l(296)](r,a)})[e(271)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o.integrity&&(c[l(284)]=o[l(284)]),o[l(280)]&&(c[l(280)]=o.referrerPolicy),n[l(294)](o[l(291)],n[l(279)])?c[l(286)]=n[l(264)]:o.crossOrigin===n.ZSDpd?c.credentials=n[l(283)]:c[l(286)]=n.vvKoe,c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(296)](i,o);n.sRdWJ(fetch,o[l(258)],c)}}();function $s(){const t=["MKehQ","anonymous","observe","type","oBbqg","modulepreload","103488CcsxIG","55478zdIasF","54NFuwdS","use-credentials","bHdKF","referrerPolicy",'link[rel="modulepreload"]',"addedNodes","nwNMS","integrity","6yuCxTS","credentials","relList","omit","querySelectorAll","15334524isPsoq","crossOrigin","1196708LgIoYw","LINK","QsDQu","dbFEQ","lJdCQ","href","1054835GMEsAr","childList","2071713krVbsZ","7542872nsPmBx","same-origin","xmfoo","tagName","link","createElement","supports"];return $s=function(){return t},$s()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ro(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},_n=[],ht=()=>{},Ph=()=>!1,Ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,lo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oh=Object.prototype.hasOwnProperty,ee=(t,e)=>Oh.call(t,e),W=Array.isArray,gn=t=>Ai(t)==="[object Map]",Dc=t=>Ai(t)==="[object Set]",H=t=>typeof t=="function",xe=t=>typeof t=="string",Ht=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Mc=t=>(pe(t)||H(t))&&H(t.then)&&H(t.catch),Fc=Object.prototype.toString,Ai=t=>Fc.call(t),kh=t=>Ai(t).slice(8,-1),Lc=t=>Ai(t)==="[object Object]",co=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$n=ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Dh=/-(\w)/g,Je=Pi(t=>t.replace(Dh,(e,n)=>n?n.toUpperCase():"")),Mh=/\B([A-Z])/g,on=Pi(t=>t.replace(Mh,"-$1").toLowerCase()),Oi=Pi(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=Pi(t=>t?`on${Oi(t)}`:""),At=(t,e)=>!Object.is(t,e),Ws=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Tr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ll;const ki=()=>ll||(ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ao(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Wh(s):ao(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(xe(t)||pe(t))return t}const Fh=/;(?![^(]*\))/g,Lh=/:([^]+)/,Bh=/\/\*[^]*?\*\//g;function Wh(t){const e={};return t.replace(Bh,"").split(Fh).forEach(n=>{if(n){const s=n.split(Lh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function mn(t){let e="";if(xe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=mn(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uh=ro(Hh);function Wc(t){return!!t||t===""}const Hc=t=>!!(t&&t.__v_isRef===!0),$e=t=>xe(t)?t:t==null?"":W(t)||pe(t)&&(t.toString===Fc||!H(t.toString))?Hc(t)?$e(t.value):JSON.stringify(t,Uc,2):String(t),Uc=(t,e)=>Hc(e)?Uc(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ir(s,r)+" =>"]=i,n),{})}:Dc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ir(n))}:Ht(e)?ir(e):pe(e)&&!W(e)&&!Lc(e)?String(e):e,ir=(t,e="")=>{var n;return Ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class Vc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function jc(t){return new Vc(t)}function $c(){return De}function Vh(t,e=!1){De&&De.cleanups.push(t)}let le;const rr=new WeakSet;class zc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rr.has(this)&&(rr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cl(this),Kc(this);const e=le,n=nt;le=this,nt=!0;try{return this.fn()}finally{Qc(this),le=e,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fo(e);this.deps=this.depsTail=void 0,cl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nr(this)&&this.run()}get dirty(){return Nr(this)}}let Gc=0,zn,Gn;function qc(t,e=!1){if(t.flags|=8,e){t.next=Gn,Gn=t;return}t.next=zn,zn=t}function uo(){Gc++}function ho(){if(--Gc>0)return;if(Gn){let e=Gn;for(Gn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zn;){let e=zn;for(zn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Kc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),fo(s),jh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Nr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===is))return;t.globalVersion=is;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Nr(t)){t.flags&=-3;return}const n=le,s=nt;le=t,nt=!0;try{Kc(t);const i=t.fn(t._value);(e.version===0||At(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{le=n,nt=s,Qc(t),t.flags&=-3}}function fo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)fo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nt=!0;const Jc=[];function Ut(){Jc.push(nt),nt=!1}function Vt(){const t=Jc.pop();nt=t===void 0?!0:t}function cl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=le;le=void 0;try{e()}finally{le=n}}}let is=0;class $h{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class po{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!le||!nt||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new $h(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,Xc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(e){this.version++,is++,this.notify(e)}notify(e){uo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ho()}}}function Xc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Xc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zs=new WeakMap,Xt=Symbol(""),Rr=Symbol(""),rs=Symbol("");function Ne(t,e,n){if(nt&&le){let s=zs.get(t);s||zs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new po),i.map=s,i.key=n),i.track()}}function mt(t,e,n,s,i,r){const o=zs.get(t);if(!o){is++;return}const l=c=>{c&&c.trigger()};if(uo(),e==="clear")o.forEach(l);else{const c=W(t),a=c&&co(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,g)=>{(g==="length"||g===rs||!Ht(g)&&g>=u)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(rs)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Xt)),gn(t)&&l(o.get(Rr)));break;case"delete":c||(l(o.get(Xt)),gn(t)&&l(o.get(Rr)));break;case"set":gn(t)&&l(o.get(Xt));break}}ho()}function zh(t,e){const n=zs.get(t);return n&&n.get(e)}function cn(t){const e=J(t);return e===t?e:(Ne(e,"iterate",rs),Qe(t)?e:e.map(Re))}function Di(t){return Ne(t=J(t),"iterate",rs),t}const Gh={__proto__:null,[Symbol.iterator](){return or(this,Symbol.iterator,Re)},concat(...t){return cn(this).concat(...t.map(e=>W(e)?cn(e):e))},entries(){return or(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return _t(this,"every",t,e,void 0,arguments)},filter(t,e){return _t(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return _t(this,"find",t,e,Re,arguments)},findIndex(t,e){return _t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _t(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return _t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _t(this,"forEach",t,e,void 0,arguments)},includes(...t){return lr(this,"includes",t)},indexOf(...t){return lr(this,"indexOf",t)},join(t){return cn(this).join(t)},lastIndexOf(...t){return lr(this,"lastIndexOf",t)},map(t,e){return _t(this,"map",t,e,void 0,arguments)},pop(){return Fn(this,"pop")},push(...t){return Fn(this,"push",t)},reduce(t,...e){return al(this,"reduce",t,e)},reduceRight(t,...e){return al(this,"reduceRight",t,e)},shift(){return Fn(this,"shift")},some(t,e){return _t(this,"some",t,e,void 0,arguments)},splice(...t){return Fn(this,"splice",t)},toReversed(){return cn(this).toReversed()},toSorted(t){return cn(this).toSorted(t)},toSpliced(...t){return cn(this).toSpliced(...t)},unshift(...t){return Fn(this,"unshift",t)},values(){return or(this,"values",Re)}};function or(t,e,n){const s=Di(t),i=s[e]();return s!==t&&!Qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const qh=Array.prototype;function _t(t,e,n,s,i,r){const o=Di(t),l=o!==t&&!Qe(t),c=o[e];if(c!==qh[e]){const d=c.apply(t,r);return l?Re(d):d}let a=n;o!==t&&(l?a=function(d,g){return n.call(this,Re(d),g,t)}:n.length>2&&(a=function(d,g){return n.call(this,d,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function al(t,e,n,s){const i=Di(t);let r=n;return i!==t&&(Qe(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Re(l),c,t)}),i[e](r,...s)}function lr(t,e,n){const s=J(t);Ne(s,"iterate",rs);const i=s[e](...n);return(i===-1||i===!1)&&mo(n[0])?(n[0]=J(n[0]),s[e](...n)):i}function Fn(t,e,n=[]){Ut(),uo();const s=J(t)[e].apply(t,n);return ho(),Vt(),s}const Kh=ro("__proto__,__v_isRef,__isVue"),Zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ht));function Qh(t){Ht(t)||(t=String(t));const e=J(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class ea{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?of:ia:r?sa:na).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let c;if(o&&(c=Gh[n]))return c;if(n==="hasOwnProperty")return Qh}const l=Reflect.get(e,n,me(e)?e:s);return(Ht(n)?Zc.has(n):Kh(n))||(i||Ne(e,"get",n),r)?l:me(l)?o&&co(n)?l:l.value:pe(l)?i?ra(l):Mi(l):l}}class ta extends ea{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=en(r);if(!Qe(s)&&!en(s)&&(r=J(r),s=J(s)),!W(e)&&me(r)&&!me(s))return c?!1:(r.value=s,!0)}const o=W(e)&&co(n)?Number(n)<e.length:ee(e,n),l=Reflect.set(e,n,s,me(e)?e:i);return e===J(i)&&(o?At(s,r)&&mt(e,"set",n,s):mt(e,"add",n,s)),l}deleteProperty(e,n){const s=ee(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&mt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ht(n)||!Zc.has(n))&&Ne(e,"has",n),s}ownKeys(e){return Ne(e,"iterate",W(e)?"length":Xt),Reflect.ownKeys(e)}}class Yh extends ea{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jh=new ta,Xh=new Yh,Zh=new ta(!0);const Ar=t=>t,Os=t=>Reflect.getPrototypeOf(t);function ef(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=gn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Ar:e?Pr:Re;return!e&&Ne(r,"iterate",c?Rr:Xt),{next(){const{value:d,done:g}=a.next();return g?{value:d,done:g}:{value:l?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function ks(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tf(t,e){const n={get(i){const r=this.__v_raw,o=J(r),l=J(i);t||(At(i,l)&&Ne(o,"get",i),Ne(o,"get",l));const{has:c}=Os(o),a=e?Ar:t?Pr:Re;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ne(J(i),"iterate",Xt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=J(r),l=J(i);return t||(At(i,l)&&Ne(o,"has",i),Ne(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=J(l),a=e?Ar:t?Pr:Re;return!t&&Ne(c,"iterate",Xt),l.forEach((u,d)=>i.call(r,a(u),a(d),o))}};return Pe(n,t?{add:ks("add"),set:ks("set"),delete:ks("delete"),clear:ks("clear")}:{add(i){!e&&!Qe(i)&&!en(i)&&(i=J(i));const r=J(this);return Os(r).has.call(r,i)||(r.add(i),mt(r,"add",i,i)),this},set(i,r){!e&&!Qe(r)&&!en(r)&&(r=J(r));const o=J(this),{has:l,get:c}=Os(o);let a=l.call(o,i);a||(i=J(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?At(r,u)&&mt(o,"set",i,r):mt(o,"add",i,r),this},delete(i){const r=J(this),{has:o,get:l}=Os(r);let c=o.call(r,i);c||(i=J(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&mt(r,"delete",i,void 0),a},clear(){const i=J(this),r=i.size!==0,o=i.clear();return r&&mt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ef(i,t,e)}),n}function _o(t,e){const n=tf(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const nf={get:_o(!1,!1)},sf={get:_o(!1,!0)},rf={get:_o(!0,!1)};const na=new WeakMap,sa=new WeakMap,ia=new WeakMap,of=new WeakMap;function lf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(t){return t.__v_skip||!Object.isExtensible(t)?0:lf(kh(t))}function Mi(t){return en(t)?t:go(t,!1,Jh,nf,na)}function af(t){return go(t,!1,Zh,sf,sa)}function ra(t){return go(t,!0,Xh,rf,ia)}function go(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=cf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Pt(t){return en(t)?Pt(t.__v_raw):!!(t&&t.__v_isReactive)}function en(t){return!!(t&&t.__v_isReadonly)}function Qe(t){return!!(t&&t.__v_isShallow)}function mo(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function xo(t){return!ee(t,"__v_skip")&&Object.isExtensible(t)&&Bc(t,"__v_skip",!0),t}const Re=t=>pe(t)?Mi(t):t,Pr=t=>pe(t)?ra(t):t;function me(t){return t?t.__v_isRef===!0:!1}function Ke(t){return oa(t,!1)}function uf(t){return oa(t,!0)}function oa(t,e){return me(t)?t:new hf(t,e)}class hf{constructor(e,n){this.dep=new po,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Qe(e)||en(e);e=s?e:J(e),At(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function be(t){return me(t)?t.value:t}const ff={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function la(t){return Pt(t)?t:new Proxy(t,ff)}function df(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=_f(t,n);return e}class pf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zh(J(this._object),this._key)}}function _f(t,e,n){const s=t[e];return me(s)?s:new pf(t,e,n)}class gf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new po(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return qc(this,!0),!0}get value(){const e=this.dep.track();return Yc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mf(t,e,n=!1){let s,i;return H(t)?s=t:(s=t.get,i=t.set),new gf(s,i,n)}const Ds={},Gs=new WeakMap;let qt;function xf(t,e=!1,n=qt){if(n){let s=Gs.get(n);s||Gs.set(n,s=[]),s.push(t)}}function yf(t,e,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=M=>i?M:Qe(M)||i===!1||i===0?xt(M,1):xt(M);let u,d,g,x,w=!1,k=!1;if(me(t)?(d=()=>t.value,w=Qe(t)):Pt(t)?(d=()=>a(t),w=!0):W(t)?(k=!0,w=t.some(M=>Pt(M)||Qe(M)),d=()=>t.map(M=>{if(me(M))return M.value;if(Pt(M))return a(M);if(H(M))return c?c(M,2):M()})):H(t)?e?d=c?()=>c(t,2):t:d=()=>{if(g){Ut();try{g()}finally{Vt()}}const M=qt;qt=u;try{return c?c(t,3,[x]):t(x)}finally{qt=M}}:d=ht,e&&i){const M=d,Y=i===!0?1/0:i;d=()=>xt(M(),Y)}const j=$c(),V=()=>{u.stop(),j&&j.active&&lo(j.effects,u)};if(r&&e){const M=e;e=(...Y)=>{M(...Y),V()}}let Q=k?new Array(t.length).fill(Ds):Ds;const Z=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const Y=u.run();if(i||w||(k?Y.some((Xe,ye)=>At(Xe,Q[ye])):At(Y,Q))){g&&g();const Xe=qt;qt=u;try{const ye=[Y,Q===Ds?void 0:k&&Q[0]===Ds?[]:Q,x];c?c(e,3,ye):e(...ye),Q=Y}finally{qt=Xe}}}else u.run()};return l&&l(Z),u=new zc(d),u.scheduler=o?()=>o(Z,!1):Z,x=M=>xf(M,!1,u),g=u.onStop=()=>{const M=Gs.get(u);if(M){if(c)c(M,4);else for(const Y of M)Y();Gs.delete(u)}},e?s?Z(!0):Q=u.run():o?o(Z.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function xt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))xt(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)xt(t[s],e,n);else if(Dc(t)||gn(t))t.forEach(s=>{xt(s,e,n)});else if(Lc(t)){for(const s in t)xt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&xt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cs(t,e,n,s){try{return s?t(...s):t()}catch(i){Fi(i,e,n)}}function ft(t,e,n,s){if(H(t)){const i=Cs(t,e,n,s);return i&&Mc(i)&&i.catch(r=>{Fi(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}}function Fi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,a)===!1)return}l=l.parent}if(r){Ut(),Cs(r,null,10,[t,c,a]),Vt();return}}vf(t,n,i,s,o)}function vf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Me=[];let at=-1;const xn=[];let Nt=null,fn=0;const ca=Promise.resolve();let qs=null;function aa(t){const e=qs||ca;return t?e.then(this?t.bind(this):t):e}function Cf(t){let e=at+1,n=Me.length;for(;e<n;){const s=e+n>>>1,i=Me[s],r=os(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function yo(t){if(!(t.flags&1)){const e=os(t),n=Me[Me.length-1];!n||!(t.flags&2)&&e>=os(n)?Me.push(t):Me.splice(Cf(e),0,t),t.flags|=1,ua()}}function ua(){qs||(qs=ca.then(fa))}function bf(t){W(t)?xn.push(...t):Nt&&t.id===-1?Nt.splice(fn+1,0,t):t.flags&1||(xn.push(t),t.flags|=1),ua()}function ul(t,e,n=at+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ha(t){if(xn.length){const e=[...new Set(xn)].sort((n,s)=>os(n)-os(s));if(xn.length=0,Nt){Nt.push(...e);return}for(Nt=e,fn=0;fn<Nt.length;fn++){const n=Nt[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,fn=0}}const os=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fa(t){try{for(at=0;at<Me.length;at++){const e=Me[at];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;at<Me.length;at++){const e=Me[at];e&&(e.flags&=-2)}at=-1,Me.length=0,ha(),qs=null,(Me.length||xn.length)&&fa()}}let Be=null,da=null;function Ks(t){const e=Be;return Be=t,da=t&&t.type.__scopeId||null,e}function Ef(t,e=Be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Cl(-1);const r=Ks(e);let o;try{o=t(...i)}finally{Ks(r),s._d&&Cl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function If(t,e){if(Be===null)return t;const n=Ui(Be),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ie]=e[i];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&xt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function $t(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Ut(),ft(c,n,8,[t.el,l,t,e]),Vt())}}const wf=Symbol("_vte"),Sf=t=>t.__isTeleport;function vo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Li(t,e){return H(t)?Pe({name:t.name},e,{setup:t}):t}function pa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qs(t,e,n,s,i=!1){if(W(t)){t.forEach((w,k)=>Qs(w,e&&(W(e)?e[k]:e),n,s,i));return}if(qn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Qs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ui(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ie?l.refs={}:l.refs,d=l.setupState,g=J(d),x=d===ie?()=>!1:w=>ee(g,w);if(a!=null&&a!==c&&(xe(a)?(u[a]=null,x(a)&&(d[a]=null)):me(a)&&(a.value=null)),H(c))Cs(c,l,12,[o,u]);else{const w=xe(c),k=me(c);if(w||k){const j=()=>{if(t.f){const V=w?x(c)?d[c]:u[c]:c.value;i?W(V)&&lo(V,r):W(V)?V.includes(r)||V.push(r):w?(u[c]=[r],x(c)&&(d[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else w?(u[c]=o,x(c)&&(d[c]=o)):k&&(c.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,ze(j,n)):j()}}}ki().requestIdleCallback;ki().cancelIdleCallback;const qn=t=>!!t.type.__asyncLoader,_a=t=>t.type.__isKeepAlive;function Tf(t,e){ga(t,"a",e)}function Nf(t,e){ga(t,"da",e)}function ga(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Bi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)_a(i.parent.vnode)&&Rf(s,e,n,i),i=i.parent}}function Rf(t,e,n,s){const i=Bi(e,t,s,!0);ma(()=>{lo(s[e],i)},n)}function Bi(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ut();const l=bs(n),c=ft(e,n,t,o);return l(),Vt(),c});return s?i.unshift(r):i.push(r),r}}const It=t=>(e,n=Se)=>{(!cs||t==="sp")&&Bi(t,(...s)=>e(...s),n)},Af=It("bm"),Co=It("m"),Pf=It("bu"),Of=It("u"),kf=It("bum"),ma=It("um"),Df=It("sp"),Mf=It("rtg"),Ff=It("rtc");function Lf(t,e=Se){Bi("ec",t,e)}const Bf="components",xa=Symbol.for("v-ndc");function Wf(t){return xe(t)?Hf(Bf,t,!1)||t:t||xa}function Hf(t,e,n=!0,s=!1){const i=Be||Se;if(i){const r=i.type;{const l=Nd(r,!1);if(l&&(l===e||l===Je(e)||l===Oi(Je(e))))return r}const o=hl(i[t]||r[t],e)||hl(i.appContext[t],e);return!o&&s?r:o}}function hl(t,e){return t&&(t[e]||t[Je(e)]||t[Oi(Je(e))])}function fl(t,e,n,s){let i;const r=n&&n[s],o=W(t);if(o||xe(t)){const l=o&&Pt(t);let c=!1;l&&(c=!Qe(t),t=Di(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Re(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Or=t=>t?Ua(t)?Ui(t):Or(t.parent):null,Kn=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>va(t),$forceUpdate:t=>t.f||(t.f=()=>{yo(t.update)}),$nextTick:t=>t.n||(t.n=aa.bind(t.proxy)),$watch:t=>ad.bind(t)}),cr=(t,e)=>t!==ie&&!t.__isScriptSetup&&ee(t,e),Uf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(cr(s,e))return o[e]=1,s[e];if(i!==ie&&ee(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&ee(a,e))return o[e]=3,r[e];if(n!==ie&&ee(n,e))return o[e]=4,n[e];kr&&(o[e]=0)}}const u=Kn[e];let d,g;if(u)return e==="$attrs"&&Ne(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==ie&&ee(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ee(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return cr(i,e)?(i[e]=n,!0):s!==ie&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ie&&ee(t,o)||cr(e,o)||(l=r[0])&&ee(l,o)||ee(s,o)||ee(Kn,o)||ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dl(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kr=!0;function Vf(t){const e=va(t),n=t.proxy,s=t.ctx;kr=!1,e.beforeCreate&&pl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:d,mounted:g,beforeUpdate:x,updated:w,activated:k,deactivated:j,beforeDestroy:V,beforeUnmount:Q,destroyed:Z,unmounted:M,render:Y,renderTracked:Xe,renderTriggered:ye,errorCaptured:f,serverPrefetch:h,expose:p,inheritAttrs:C,components:b,directives:Te,filters:U}=e;if(a&&jf(a,s,null),o)for(const $ in o){const ne=o[$];H(ne)&&(s[$]=ne.bind(n))}if(i){const $=i.call(n,n);pe($)&&(t.data=Mi($))}if(kr=!0,r)for(const $ in r){const ne=r[$],pt=H(ne)?ne.bind(n,n):H(ne.get)?ne.get.bind(n,n):ht,On=!H(ne)&&H(ne.set)?ne.set.bind(n):ht,jt=ja({get:pt,set:On});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>jt.value,set:it=>jt.value=it})}if(l)for(const $ in l)ya(l[$],s,n,$);if(c){const $=H(c)?c.call(n):c;Reflect.ownKeys($).forEach(ne=>{Qf(ne,$[ne])})}u&&pl(u,t,"c");function ue($,ne){W(ne)?ne.forEach(pt=>$(pt.bind(n))):ne&&$(ne.bind(n))}if(ue(Af,d),ue(Co,g),ue(Pf,x),ue(Of,w),ue(Tf,k),ue(Nf,j),ue(Lf,f),ue(Ff,Xe),ue(Mf,ye),ue(kf,Q),ue(ma,M),ue(Df,h),W(p))if(p.length){const $=t.exposed||(t.exposed={});p.forEach(ne=>{Object.defineProperty($,ne,{get:()=>n[ne],set:pt=>n[ne]=pt})})}else t.exposed||(t.exposed={});Y&&t.render===ht&&(t.render=Y),C!=null&&(t.inheritAttrs=C),b&&(t.components=b),Te&&(t.directives=Te),h&&pa(t)}function jf(t,e,n=ht){W(t)&&(t=Dr(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=Qn(i.from||s,i.default,!0):r=Qn(i.from||s):r=Qn(i),me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function pl(t,e,n){ft(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ya(t,e,n,s){let i=s.includes(".")?Da(n,s):()=>n[s];if(xe(t)){const r=e[t];H(r)&&Ot(i,r)}else if(H(t))Ot(i,t.bind(n));else if(pe(t))if(W(t))t.forEach(r=>ya(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&Ot(i,r,t)}}function va(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Ys(c,a,o,!0)),Ys(c,e,o)),pe(e)&&r.set(e,c),c}function Ys(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ys(t,r,n,!0),i&&i.forEach(o=>Ys(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=$f[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const $f={data:_l,props:gl,emits:gl,methods:jn,computed:jn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:jn,directives:jn,watch:Gf,provide:_l,inject:zf};function _l(t,e){return e?t?function(){return Pe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function zf(t,e){return jn(Dr(t),Dr(e))}function Dr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function jn(t,e){return t?Pe(Object.create(null),t,e):e}function gl(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Pe(Object.create(null),dl(t),dl(e??{})):e}function Gf(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function Ca(){return{app:null,config:{isNativeTag:Ph,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function Kf(t,e){return function(s,i=null){H(s)||(s=Pe({},s)),i!=null&&!pe(i)&&(i=null);const r=Ca(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:qf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ad,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(a,...d)):H(u)&&(o.add(u),u(a,...d))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,d){return d?(r.components[u]=d,a):r.components[u]},directive(u,d){return d?(r.directives[u]=d,a):r.directives[u]},mount(u,d,g){if(!c){const x=a._ceVNode||Ye(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,u,g),c=!0,a._container=u,u.__vue_app__=a,Ui(x.component)}},onUnmount(u){l.push(u)},unmount(){c&&(ft(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,d){return r.provides[u]=d,a},runWithContext(u){const d=Zt;Zt=a;try{return u()}finally{Zt=d}}};return a}}let Zt=null;function Qf(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function Qn(t,e,n=!1){const s=Se||Be;if(s||Zt){const i=Zt?Zt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function Yf(){return!!(Se||Be||Zt)}const ba={},Ea=()=>Object.create(ba),Ia=t=>Object.getPrototypeOf(t)===ba;function Jf(t,e,n,s=!1){const i={},r=Ea();t.propsDefaults=Object.create(null),wa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:af(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Xf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(Wi(t.emitsOptions,g))continue;const x=e[g];if(c)if(ee(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const w=Je(g);i[w]=Mr(c,l,w,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{wa(t,e,i,r)&&(a=!0);let u;for(const d in l)(!e||!ee(e,d)&&((u=on(d))===d||!ee(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Mr(c,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!ee(e,d))&&(delete r[d],a=!0)}a&&mt(t.attrs,"set","")}function wa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if($n(c))continue;const a=e[c];let u;i&&ee(i,u=Je(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Wi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=J(n),a=l||ie;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Mr(i,c,d,a[d],t,!ee(a,d))}}return o}function Mr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ee(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=bs(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===on(n))&&(s=!0))}return s}const Zf=new WeakMap;function Sa(t,e,n=!1){const s=n?Zf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!H(t)){const u=d=>{c=!0;const[g,x]=Sa(d,e,!0);Pe(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return pe(t)&&s.set(t,_n),_n;if(W(r))for(let u=0;u<r.length;u++){const d=Je(r[u]);ml(d)&&(o[d]=ie)}else if(r)for(const u in r){const d=Je(u);if(ml(d)){const g=r[u],x=o[d]=W(g)||H(g)?{type:g}:Pe({},g),w=x.type;let k=!1,j=!0;if(W(w))for(let V=0;V<w.length;++V){const Q=w[V],Z=H(Q)&&Q.name;if(Z==="Boolean"){k=!0;break}else Z==="String"&&(j=!1)}else k=H(w)&&w.name==="Boolean";x[0]=k,x[1]=j,(k||ee(x,"default"))&&l.push(d)}}const a=[o,l];return pe(t)&&s.set(t,a),a}function ml(t){return t[0]!=="$"&&!$n(t)}const Ta=t=>t[0]==="_"||t==="$stable",bo=t=>W(t)?t.map(ut):[ut(t)],ed=(t,e,n)=>{if(e._n)return e;const s=Ef((...i)=>bo(e(...i)),n);return s._c=!1,s},Na=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ta(i))continue;const r=t[i];if(H(r))e[i]=ed(i,r,s);else if(r!=null){const o=bo(r);e[i]=()=>o}}},Ra=(t,e)=>{const n=bo(e);t.slots.default=()=>n},Aa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},td=(t,e,n)=>{const s=t.slots=Ea();if(t.vnode.shapeFlag&32){const i=e._;i?(Aa(s,e,n),n&&Bc(s,"_",i,!0)):Na(e,s)}else e&&Ra(t,e)},nd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Aa(i,e,n):(r=!e.$stable,Na(e,i)),o=e}else e&&(Ra(t,e),o={default:1});if(r)for(const l in i)!Ta(l)&&o[l]==null&&delete i[l]},ze=gd;function sd(t){return id(t)}function id(t,e){const n=ki();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:d,nextSibling:g,setScopeId:x=ht,insertStaticContent:w}=t,k=(_,m,y,S=null,E=null,I=null,P=void 0,A=null,R=!!m.dynamicChildren)=>{if(_===m)return;_&&!Ln(_,m)&&(S=Ps(_),it(_,E,I,!0),_=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:T,ref:F,shapeFlag:O}=m;switch(T){case Hi:j(_,m,y,S);break;case tn:V(_,m,y,S);break;case ur:_==null&&Q(m,y,S,P);break;case Ge:b(_,m,y,S,E,I,P,A,R);break;default:O&1?Y(_,m,y,S,E,I,P,A,R):O&6?Te(_,m,y,S,E,I,P,A,R):(O&64||O&128)&&T.process(_,m,y,S,E,I,P,A,R,Dn)}F!=null&&E&&Qs(F,_&&_.ref,I,m||_,!m)},j=(_,m,y,S)=>{if(_==null)s(m.el=l(m.children),y,S);else{const E=m.el=_.el;m.children!==_.children&&a(E,m.children)}},V=(_,m,y,S)=>{_==null?s(m.el=c(m.children||""),y,S):m.el=_.el},Q=(_,m,y,S)=>{[_.el,_.anchor]=w(_.children,m,y,S,_.el,_.anchor)},Z=({el:_,anchor:m},y,S)=>{let E;for(;_&&_!==m;)E=g(_),s(_,y,S),_=E;s(m,y,S)},M=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},Y=(_,m,y,S,E,I,P,A,R)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),_==null?Xe(m,y,S,E,I,P,A,R):h(_,m,E,I,P,A,R)},Xe=(_,m,y,S,E,I,P,A)=>{let R,T;const{props:F,shapeFlag:O,transition:D,dirs:B}=_;if(R=_.el=o(_.type,I,F&&F.is,F),O&8?u(R,_.children):O&16&&f(_.children,R,null,S,E,ar(_,I),P,A),B&&$t(_,null,S,"created"),ye(R,_,_.scopeId,P,S),F){for(const oe in F)oe!=="value"&&!$n(oe)&&r(R,oe,null,F[oe],I,S);"value"in F&&r(R,"value",null,F.value,I),(T=F.onVnodeBeforeMount)&&ct(T,S,_)}B&&$t(_,null,S,"beforeMount");const K=rd(E,D);K&&D.beforeEnter(R),s(R,m,y),((T=F&&F.onVnodeMounted)||K||B)&&ze(()=>{T&&ct(T,S,_),K&&D.enter(R),B&&$t(_,null,S,"mounted")},E)},ye=(_,m,y,S,E)=>{if(y&&x(_,y),S)for(let I=0;I<S.length;I++)x(_,S[I]);if(E){let I=E.subTree;if(m===I||Fa(I.type)&&(I.ssContent===m||I.ssFallback===m)){const P=E.vnode;ye(_,P,P.scopeId,P.slotScopeIds,E.parent)}}},f=(_,m,y,S,E,I,P,A,R=0)=>{for(let T=R;T<_.length;T++){const F=_[T]=A?Rt(_[T]):ut(_[T]);k(null,F,m,y,S,E,I,P,A)}},h=(_,m,y,S,E,I,P)=>{const A=m.el=_.el;let{patchFlag:R,dynamicChildren:T,dirs:F}=m;R|=_.patchFlag&16;const O=_.props||ie,D=m.props||ie;let B;if(y&&zt(y,!1),(B=D.onVnodeBeforeUpdate)&&ct(B,y,m,_),F&&$t(m,_,y,"beforeUpdate"),y&&zt(y,!0),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&u(A,""),T?p(_.dynamicChildren,T,A,y,S,ar(m,E),I):P||ne(_,m,A,null,y,S,ar(m,E),I,!1),R>0){if(R&16)C(A,O,D,y,E);else if(R&2&&O.class!==D.class&&r(A,"class",null,D.class,E),R&4&&r(A,"style",O.style,D.style,E),R&8){const K=m.dynamicProps;for(let oe=0;oe<K.length;oe++){const te=K[oe],Ve=O[te],Le=D[te];(Le!==Ve||te==="value")&&r(A,te,Ve,Le,E,y)}}R&1&&_.children!==m.children&&u(A,m.children)}else!P&&T==null&&C(A,O,D,y,E);((B=D.onVnodeUpdated)||F)&&ze(()=>{B&&ct(B,y,m,_),F&&$t(m,_,y,"updated")},S)},p=(_,m,y,S,E,I,P)=>{for(let A=0;A<m.length;A++){const R=_[A],T=m[A],F=R.el&&(R.type===Ge||!Ln(R,T)||R.shapeFlag&70)?d(R.el):y;k(R,T,F,null,S,E,I,P,!0)}},C=(_,m,y,S,E)=>{if(m!==y){if(m!==ie)for(const I in m)!$n(I)&&!(I in y)&&r(_,I,m[I],null,E,S);for(const I in y){if($n(I))continue;const P=y[I],A=m[I];P!==A&&I!=="value"&&r(_,I,A,P,E,S)}"value"in y&&r(_,"value",m.value,y.value,E)}},b=(_,m,y,S,E,I,P,A,R)=>{const T=m.el=_?_.el:l(""),F=m.anchor=_?_.anchor:l("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:B}=m;B&&(A=A?A.concat(B):B),_==null?(s(T,y,S),s(F,y,S),f(m.children||[],y,F,E,I,P,A,R)):O>0&&O&64&&D&&_.dynamicChildren?(p(_.dynamicChildren,D,y,E,I,P,A),(m.key!=null||E&&m===E.subTree)&&Pa(_,m,!0)):ne(_,m,y,F,E,I,P,A,R)},Te=(_,m,y,S,E,I,P,A,R)=>{m.slotScopeIds=A,_==null?m.shapeFlag&512?E.ctx.activate(m,y,S,P,R):U(m,y,S,E,I,P,R):de(_,m,R)},U=(_,m,y,S,E,I,P)=>{const A=_.component=Ed(_,S,E);if(_a(_)&&(A.ctx.renderer=Dn),Id(A,!1,P),A.asyncDep){if(E&&E.registerDep(A,ue,P),!_.el){const R=A.subTree=Ye(tn);V(null,R,m,y)}}else ue(A,_,m,y,E,I,P)},de=(_,m,y)=>{const S=m.component=_.component;if(pd(_,m,y))if(S.asyncDep&&!S.asyncResolved){$(S,m,y);return}else S.next=m,S.update();else m.el=_.el,S.vnode=m},ue=(_,m,y,S,E,I,P)=>{const A=()=>{if(_.isMounted){let{next:O,bu:D,u:B,parent:K,vnode:oe}=_;{const ot=Oa(_);if(ot){O&&(O.el=oe.el,$(_,O,P)),ot.asyncDep.then(()=>{_.isUnmounted||A()});return}}let te=O,Ve;zt(_,!1),O?(O.el=oe.el,$(_,O,P)):O=oe,D&&Ws(D),(Ve=O.props&&O.props.onVnodeBeforeUpdate)&&ct(Ve,K,O,oe),zt(_,!0);const Le=yl(_),rt=_.subTree;_.subTree=Le,k(rt,Le,d(rt.el),Ps(rt),_,E,I),O.el=Le.el,te===null&&_d(_,Le.el),B&&ze(B,E),(Ve=O.props&&O.props.onVnodeUpdated)&&ze(()=>ct(Ve,K,O,oe),E)}else{let O;const{el:D,props:B}=m,{bm:K,m:oe,parent:te,root:Ve,type:Le}=_,rt=qn(m);zt(_,!1),K&&Ws(K),!rt&&(O=B&&B.onVnodeBeforeMount)&&ct(O,te,m),zt(_,!0);{Ve.ce&&Ve.ce._injectChildStyle(Le);const ot=_.subTree=yl(_);k(null,ot,y,S,_,E,I),m.el=ot.el}if(oe&&ze(oe,E),!rt&&(O=B&&B.onVnodeMounted)){const ot=m;ze(()=>ct(O,te,ot),E)}(m.shapeFlag&256||te&&qn(te.vnode)&&te.vnode.shapeFlag&256)&&_.a&&ze(_.a,E),_.isMounted=!0,m=y=S=null}};_.scope.on();const R=_.effect=new zc(A);_.scope.off();const T=_.update=R.run.bind(R),F=_.job=R.runIfDirty.bind(R);F.i=_,F.id=_.uid,R.scheduler=()=>yo(F),zt(_,!0),T()},$=(_,m,y)=>{m.component=_;const S=_.vnode.props;_.vnode=m,_.next=null,Xf(_,m.props,S,y),nd(_,m.children,y),Ut(),ul(_),Vt()},ne=(_,m,y,S,E,I,P,A,R=!1)=>{const T=_&&_.children,F=_?_.shapeFlag:0,O=m.children,{patchFlag:D,shapeFlag:B}=m;if(D>0){if(D&128){On(T,O,y,S,E,I,P,A,R);return}else if(D&256){pt(T,O,y,S,E,I,P,A,R);return}}B&8?(F&16&&kn(T,E,I),O!==T&&u(y,O)):F&16?B&16?On(T,O,y,S,E,I,P,A,R):kn(T,E,I,!0):(F&8&&u(y,""),B&16&&f(O,y,S,E,I,P,A,R))},pt=(_,m,y,S,E,I,P,A,R)=>{_=_||_n,m=m||_n;const T=_.length,F=m.length,O=Math.min(T,F);let D;for(D=0;D<O;D++){const B=m[D]=R?Rt(m[D]):ut(m[D]);k(_[D],B,y,null,E,I,P,A,R)}T>F?kn(_,E,I,!0,!1,O):f(m,y,S,E,I,P,A,R,O)},On=(_,m,y,S,E,I,P,A,R)=>{let T=0;const F=m.length;let O=_.length-1,D=F-1;for(;T<=O&&T<=D;){const B=_[T],K=m[T]=R?Rt(m[T]):ut(m[T]);if(Ln(B,K))k(B,K,y,null,E,I,P,A,R);else break;T++}for(;T<=O&&T<=D;){const B=_[O],K=m[D]=R?Rt(m[D]):ut(m[D]);if(Ln(B,K))k(B,K,y,null,E,I,P,A,R);else break;O--,D--}if(T>O){if(T<=D){const B=D+1,K=B<F?m[B].el:S;for(;T<=D;)k(null,m[T]=R?Rt(m[T]):ut(m[T]),y,K,E,I,P,A,R),T++}}else if(T>D)for(;T<=O;)it(_[T],E,I,!0),T++;else{const B=T,K=T,oe=new Map;for(T=K;T<=D;T++){const je=m[T]=R?Rt(m[T]):ut(m[T]);je.key!=null&&oe.set(je.key,T)}let te,Ve=0;const Le=D-K+1;let rt=!1,ot=0;const Mn=new Array(Le);for(T=0;T<Le;T++)Mn[T]=0;for(T=B;T<=O;T++){const je=_[T];if(Ve>=Le){it(je,E,I,!0);continue}let lt;if(je.key!=null)lt=oe.get(je.key);else for(te=K;te<=D;te++)if(Mn[te-K]===0&&Ln(je,m[te])){lt=te;break}lt===void 0?it(je,E,I,!0):(Mn[lt-K]=T+1,lt>=ot?ot=lt:rt=!0,k(je,m[lt],y,null,E,I,P,A,R),Ve++)}const rl=rt?od(Mn):_n;for(te=rl.length-1,T=Le-1;T>=0;T--){const je=K+T,lt=m[je],ol=je+1<F?m[je+1].el:S;Mn[T]===0?k(null,lt,y,ol,E,I,P,A,R):rt&&(te<0||T!==rl[te]?jt(lt,y,ol,2):te--)}}},jt=(_,m,y,S,E=null)=>{const{el:I,type:P,transition:A,children:R,shapeFlag:T}=_;if(T&6){jt(_.component.subTree,m,y,S);return}if(T&128){_.suspense.move(m,y,S);return}if(T&64){P.move(_,m,y,Dn);return}if(P===Ge){s(I,m,y);for(let O=0;O<R.length;O++)jt(R[O],m,y,S);s(_.anchor,m,y);return}if(P===ur){Z(_,m,y);return}if(S!==2&&T&1&&A)if(S===0)A.beforeEnter(I),s(I,m,y),ze(()=>A.enter(I),E);else{const{leave:O,delayLeave:D,afterLeave:B}=A,K=()=>s(I,m,y),oe=()=>{O(I,()=>{K(),B&&B()})};D?D(I,K,oe):oe()}else s(I,m,y)},it=(_,m,y,S=!1,E=!1)=>{const{type:I,props:P,ref:A,children:R,dynamicChildren:T,shapeFlag:F,patchFlag:O,dirs:D,cacheIndex:B}=_;if(O===-2&&(E=!1),A!=null&&Qs(A,null,y,_,!0),B!=null&&(m.renderCache[B]=void 0),F&256){m.ctx.deactivate(_);return}const K=F&1&&D,oe=!qn(_);let te;if(oe&&(te=P&&P.onVnodeBeforeUnmount)&&ct(te,m,_),F&6)Ah(_.component,y,S);else{if(F&128){_.suspense.unmount(y,S);return}K&&$t(_,null,m,"beforeUnmount"),F&64?_.type.remove(_,m,y,Dn,S):T&&!T.hasOnce&&(I!==Ge||O>0&&O&64)?kn(T,m,y,!1,!0):(I===Ge&&O&384||!E&&F&16)&&kn(R,m,y),S&&sl(_)}(oe&&(te=P&&P.onVnodeUnmounted)||K)&&ze(()=>{te&&ct(te,m,_),K&&$t(_,null,m,"unmounted")},y)},sl=_=>{const{type:m,el:y,anchor:S,transition:E}=_;if(m===Ge){Rh(y,S);return}if(m===ur){M(_);return}const I=()=>{i(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(_.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:A}=E,R=()=>P(y,I);A?A(_.el,I,R):R()}else I()},Rh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Ah=(_,m,y)=>{const{bum:S,scope:E,job:I,subTree:P,um:A,m:R,a:T}=_;xl(R),xl(T),S&&Ws(S),E.stop(),I&&(I.flags|=8,it(P,_,m,y)),A&&ze(A,m),ze(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},kn=(_,m,y,S=!1,E=!1,I=0)=>{for(let P=I;P<_.length;P++)it(_[P],m,y,S,E)},Ps=_=>{if(_.shapeFlag&6)return Ps(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[wf];return y?g(y):m};let nr=!1;const il=(_,m,y)=>{_==null?m._vnode&&it(m._vnode,null,null,!0):k(m._vnode||null,_,m,null,null,null,y),m._vnode=_,nr||(nr=!0,ul(),ha(),nr=!1)},Dn={p:k,um:it,m:jt,r:sl,mt:U,mc:f,pc:ne,pbc:p,n:Ps,o:t};return{render:il,hydrate:void 0,createApp:Kf(il)}}function ar({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pa(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Rt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Pa(o,l)),l.type===Hi&&(l.el=o.el)}}function od(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Oa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Oa(e)}function xl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ld=Symbol.for("v-scx"),cd=()=>Qn(ld);function Ot(t,e,n){return ka(t,e,n)}function ka(t,e,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,l=Pe({},n),c=e&&s||!e&&r!=="post";let a;if(cs){if(r==="sync"){const x=cd();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=ht,x.resume=ht,x.pause=ht,x}}const u=Se;l.call=(x,w,k)=>ft(x,u,w,k);let d=!1;r==="post"?l.scheduler=x=>{ze(x,u&&u.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(x,w)=>{w?x():yo(x)}),l.augmentJob=x=>{e&&(x.flags|=4),d&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const g=yf(t,e,l);return cs&&(a?a.push(g):c&&g()),g}function ad(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?Da(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=bs(this),l=ka(i,r.bind(s),n);return o(),l}function Da(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ud=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Je(e)}Modifiers`]||t[`${on(e)}Modifiers`];function hd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&ud(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>xe(u)?u.trim():u)),o.number&&(i=n.map(Tr)));let l,c=s[l=sr(e)]||s[l=sr(Je(e))];!c&&r&&(c=s[l=sr(on(e))]),c&&ft(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ft(a,t,6,i)}}function Ma(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!H(t)){const c=a=>{const u=Ma(a,e,!0);u&&(l=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(pe(t)&&s.set(t,null),null):(W(r)?r.forEach(c=>o[c]=null):Pe(o,r),pe(t)&&s.set(t,o),o)}function Wi(t,e){return!t||!Ri(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,on(e))||ee(t,e))}function yl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:d,data:g,setupState:x,ctx:w,inheritAttrs:k}=t,j=Ks(t);let V,Q;try{if(n.shapeFlag&4){const M=i||s,Y=M;V=ut(a.call(Y,M,u,d,x,g,w)),Q=l}else{const M=e;V=ut(M.length>1?M(d,{attrs:l,slots:o,emit:c}):M(d,null)),Q=e.props?l:fd(l)}}catch(M){Yn.length=0,Fi(M,t,1),V=Ye(tn)}let Z=V;if(Q&&k!==!1){const M=Object.keys(Q),{shapeFlag:Y}=Z;M.length&&Y&7&&(r&&M.some(oo)&&(Q=dd(Q,r)),Z=bn(Z,Q,!1,!0))}return n.dirs&&(Z=bn(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&vo(Z,n.transition),V=Z,Ks(j),V}const fd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ri(n))&&((e||(e={}))[n]=t[n]);return e},dd=(t,e)=>{const n={};for(const s in t)(!oo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function pd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?vl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==s[g]&&!Wi(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?vl(s,o,a):!0:!!o;return!1}function vl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Wi(n,r))return!0}return!1}function _d({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fa=t=>t.__isSuspense;function gd(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):bf(t)}const Ge=Symbol.for("v-fgt"),Hi=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),ur=Symbol.for("v-stc"),Yn=[];let qe=null;function se(t=!1){Yn.push(qe=t?null:[])}function md(){Yn.pop(),qe=Yn[Yn.length-1]||null}let ls=1;function Cl(t,e=!1){ls+=t,t<0&&qe&&e&&(qe.hasOnce=!0)}function La(t){return t.dynamicChildren=ls>0?qe||_n:null,md(),ls>0&&qe&&qe.push(t),t}function he(t,e,n,s,i,r){return La(v(t,e,n,s,i,r,!0))}function Ba(t,e,n,s,i){return La(Ye(t,e,n,s,i,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const Ha=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||me(t)||H(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ha(e),ref:e&&Hs(e),scopeId:da,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Be};return l?(Eo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),ls>0&&!o&&qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&qe.push(c),c}const Ye=xd;function xd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===xa)&&(t=tn),Wa(t)){const l=bn(t,e,!0);return n&&Eo(l,n),ls>0&&!r&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag=-2,l}if(Rd(t)&&(t=t.__vccOpts),e){e=yd(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=mn(l)),pe(c)&&(mo(c)&&!W(c)&&(c=Pe({},c)),e.style=ao(c))}const o=xe(t)?1:Fa(t)?128:Sf(t)?64:pe(t)?4:H(t)?2:0;return v(t,e,n,s,i,o,r,!0)}function yd(t){return t?mo(t)||Ia(t)?Pe({},t):t:null}function bn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?vd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ha(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Hs(e)):[r,Hs(e)]:Hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&vo(u,c.clone(u)),u}function _e(t=" ",e=0){return Ye(Hi,null,t,e)}function ke(t="",e=!1){return e?(se(),Ba(tn,null,t)):Ye(tn,null,t)}function ut(t){return t==null||typeof t=="boolean"?Ye(tn):W(t)?Ye(Ge,null,t.slice()):Wa(t)?Rt(t):Ye(Hi,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function Eo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Eo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ia(e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[_e(e)]):n=8);t.children=e,t.shapeFlag|=n}function vd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=mn([e.class,s.class]));else if(i==="style")e.style=ao([e.style,s.style]);else if(Ri(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){ft(t,e,7,[n,s])}const Cd=Ca();let bd=0;function Ed(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Cd,r={uid:bd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(s,i),emitsOptions:Ma(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hd.bind(null,r),t.ce&&t.ce(r),r}let Se=null,Js,Fr;{const t=ki(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Js=e("__VUE_INSTANCE_SETTERS__",n=>Se=n),Fr=e("__VUE_SSR_SETTERS__",n=>cs=n)}const bs=t=>{const e=Se;return Js(t),t.scope.on(),()=>{t.scope.off(),Js(e)}},bl=()=>{Se&&Se.scope.off(),Js(null)};function Ua(t){return t.vnode.shapeFlag&4}let cs=!1;function Id(t,e=!1,n=!1){e&&Fr(e);const{props:s,children:i}=t.vnode,r=Ua(t);Jf(t,s,r,e),td(t,i,n);const o=r?wd(t,e):void 0;return e&&Fr(!1),o}function wd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Uf);const{setup:s}=n;if(s){Ut();const i=t.setupContext=s.length>1?Td(t):null,r=bs(t),o=Cs(s,t,0,[t.props,i]),l=Mc(o);if(Vt(),r(),(l||t.sp)&&!qn(t)&&pa(t),l){if(o.then(bl,bl),e)return o.then(c=>{El(t,c)}).catch(c=>{Fi(c,t,0)});t.asyncDep=o}else El(t,o)}else Va(t)}function El(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=la(e)),Va(t)}function Va(t,e,n){const s=t.type;t.render||(t.render=s.render||ht);{const i=bs(t);Ut();try{Vf(t)}finally{Vt(),i()}}}const Sd={get(t,e){return Ne(t,"get",""),t[e]}};function Td(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sd),slots:t.slots,emit:t.emit,expose:e}}function Ui(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(la(xo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function Nd(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Rd(t){return H(t)&&"__vccOpts"in t}const ja=(t,e)=>mf(t,e,cs),Ad="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lr;const Il=typeof window<"u"&&window.trustedTypes;if(Il)try{Lr=Il.createPolicy("vue",{createHTML:t=>t})}catch{}const $a=Lr?t=>Lr.createHTML(t):t=>t,Pd="http://www.w3.org/2000/svg",Od="http://www.w3.org/1998/Math/MathML",gt=typeof document<"u"?document:null,wl=gt&&gt.createElement("template"),kd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?gt.createElementNS(Pd,t):e==="mathml"?gt.createElementNS(Od,t):n?gt.createElement(t,{is:n}):gt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>gt.createTextNode(t),createComment:t=>gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wl.innerHTML=$a(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=wl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dd=Symbol("_vtc");function Md(t,e,n){const s=t[Dd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Sl=Symbol("_vod"),Fd=Symbol("_vsh"),Ld=Symbol(""),Bd=/(^|;)\s*display\s*:/;function Wd(t,e,n){const s=t.style,i=xe(n);let r=!1;if(n&&!i){if(e)if(xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Us(s,l,"")}else for(const o in e)n[o]==null&&Us(s,o,"");for(const o in n)o==="display"&&(r=!0),Us(s,o,n[o])}else if(i){if(e!==n){const o=s[Ld];o&&(n+=";"+o),s.cssText=n,r=Bd.test(n)}}else e&&t.removeAttribute("style");Sl in t&&(t[Sl]=r?s.display:"",t[Fd]&&(s.display="none"))}const Tl=/\s*!important$/;function Us(t,e,n){if(W(n))n.forEach(s=>Us(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Hd(t,e);Tl.test(n)?t.setProperty(on(s),n.replace(Tl,""),"important"):t[s]=n}}const Nl=["Webkit","Moz","ms"],hr={};function Hd(t,e){const n=hr[e];if(n)return n;let s=Je(e);if(s!=="filter"&&s in t)return hr[e]=s;s=Oi(s);for(let i=0;i<Nl.length;i++){const r=Nl[i]+s;if(r in t)return hr[e]=r}return e}const Rl="http://www.w3.org/1999/xlink";function Al(t,e,n,s,i,r=Uh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rl,e.slice(6,e.length)):t.setAttributeNS(Rl,e,n):n==null||r&&!Wc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ht(n)?String(n):n)}function Pl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$a(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function dn(t,e,n,s){t.addEventListener(e,n,s)}function Ud(t,e,n,s){t.removeEventListener(e,n,s)}const Ol=Symbol("_vei");function Vd(t,e,n,s,i=null){const r=t[Ol]||(t[Ol]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=jd(e);if(s){const a=r[e]=Gd(s,i);dn(t,l,a,c)}else o&&(Ud(t,l,o,c),r[e]=void 0)}}const kl=/(?:Once|Passive|Capture)$/;function jd(t){let e;if(kl.test(t)){e={};let s;for(;s=t.match(kl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let fr=0;const $d=Promise.resolve(),zd=()=>fr||($d.then(()=>fr=0),fr=Date.now());function Gd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(qd(s,n.value),e,5,[s])};return n.value=t,n.attached=zd(),n}function qd(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Dl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Kd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Md(t,s,o):e==="style"?Wd(t,n,s):Ri(e)?oo(e)||Vd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qd(t,e,s,o))?(Pl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Al(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(s))?Pl(t,Je(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Al(t,e,s,o))};function Qd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dl(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Dl(e)&&xe(n)?!1:e in t}const Ml=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ws(e,n):e};function Yd(t){t.target.composing=!0}function Fl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dr=Symbol("_assign"),Jd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[dr]=Ml(i);const r=s||i.props&&i.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Tr(l)),t[dr](l)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Yd),dn(t,"compositionend",Fl),dn(t,"change",Fl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[dr]=Ml(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Tr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Xd=Pe({patchProp:Kd},kd);let Ll;function Zd(){return Ll||(Ll=sd(Xd))}const ep=(...t)=>{const e=Zd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=np(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,tp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function np(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let za;const Vi=t=>za=t,Ga=Symbol();function Br(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Jn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Jn||(Jn={}));function sp(){const t=jc(!0),e=t.run(()=>Ke({}));let n=[],s=[];const i=xo({install(r){Vi(i),i._a=r,r.provide(Ga,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const qa=()=>{};function Bl(t,e,n,s=qa){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&$c()&&Vh(i),i}function an(t,...e){t.slice().forEach(n=>{n(...e)})}const ip=t=>t(),Wl=Symbol(),pr=Symbol();function Wr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Br(i)&&Br(s)&&t.hasOwnProperty(n)&&!me(s)&&!Pt(s)?t[n]=Wr(i,s):t[n]=s}return t}const rp=Symbol();function op(t){return!Br(t)||!t.hasOwnProperty(rp)}const{assign:Tt}=Object;function lp(t){return!!(me(t)&&t.effect)}function cp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=df(n.state.value[t]);return Tt(u,r,Object.keys(o||{}).reduce((d,g)=>(d[g]=xo(ja(()=>{Vi(n);const x=n._s.get(t);return o[g].call(x,x)})),d),{}))}return c=Ka(t,a,e,n,s,!0),c}function Ka(t,e,n={},s,i,r){let o;const l=Tt({actions:{}},n),c={deep:!0};let a,u,d=[],g=[],x;const w=s.state.value[t];!r&&!w&&(s.state.value[t]={}),Ke({});let k;function j(f){let h;a=u=!1,typeof f=="function"?(f(s.state.value[t]),h={type:Jn.patchFunction,storeId:t,events:x}):(Wr(s.state.value[t],f),h={type:Jn.patchObject,payload:f,storeId:t,events:x});const p=k=Symbol();aa().then(()=>{k===p&&(a=!0)}),u=!0,an(d,h,s.state.value[t])}const V=r?function(){const{state:h}=n,p=h?h():{};this.$patch(C=>{Tt(C,p)})}:qa;function Q(){o.stop(),d=[],g=[],s._s.delete(t)}const Z=(f,h="")=>{if(Wl in f)return f[pr]=h,f;const p=function(){Vi(s);const C=Array.from(arguments),b=[],Te=[];function U($){b.push($)}function de($){Te.push($)}an(g,{args:C,name:p[pr],store:Y,after:U,onError:de});let ue;try{ue=f.apply(this&&this.$id===t?this:Y,C)}catch($){throw an(Te,$),$}return ue instanceof Promise?ue.then($=>(an(b,$),$)).catch($=>(an(Te,$),Promise.reject($))):(an(b,ue),ue)};return p[Wl]=!0,p[pr]=h,p},M={_p:s,$id:t,$onAction:Bl.bind(null,g),$patch:j,$reset:V,$subscribe(f,h={}){const p=Bl(d,f,h.detached,()=>C()),C=o.run(()=>Ot(()=>s.state.value[t],b=>{(h.flush==="sync"?u:a)&&f({storeId:t,type:Jn.direct,events:x},b)},Tt({},c,h)));return p},$dispose:Q},Y=Mi(M);s._s.set(t,Y);const ye=(s._a&&s._a.runWithContext||ip)(()=>s._e.run(()=>(o=jc()).run(()=>e({action:Z}))));for(const f in ye){const h=ye[f];if(me(h)&&!lp(h)||Pt(h))r||(w&&op(h)&&(me(h)?h.value=w[f]:Wr(h,w[f])),s.state.value[t][f]=h);else if(typeof h=="function"){const p=Z(h,f);ye[f]=p,l.actions[f]=h}}return Tt(Y,ye),Tt(J(Y),ye),Object.defineProperty(Y,"$state",{get:()=>s.state.value[t],set:f=>{j(h=>{Tt(h,f)})}}),s._p.forEach(f=>{Tt(Y,o.run(()=>f({store:Y,app:s._a,pinia:s,options:l})))}),w&&r&&n.hydrate&&n.hydrate(Y.$state,w),a=!0,u=!0,Y}/*! #__NO_SIDE_EFFECTS__ */function ap(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Yf();return o=o||(c?Qn(Ga,null):null),o&&Vi(o),o=za,o._s.has(t)||(i?Ka(t,e,s,o):cp(t,s,o)),o._s.get(t)}return r.$id=t,r}const up=()=>{};var Hl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Tn(e)},Tn=function(t){return new Error("Firebase Database ("+Qa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[u],n[d],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ya(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||d==null)throw new fp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),d!==64){const w=a<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ja=function(t){const e=Ya(t);return Io.encodeByteArray(e,!0)},Xs=function(t){return Ja(t).replace(/\./g,"")},Hr=function(t){try{return Io.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){return Xa(void 0,t)}function Xa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pp(n)||(t[n]=Xa(t[n],e[n]));return t}function pp(t){return t!=="__proto__"}/**
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
 */const gp=()=>_p().__FIREBASE_DEFAULTS__,mp=()=>{if(typeof process>"u"||typeof Hl>"u")return;const t=Hl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hr(t[1]);return e&&JSON.parse(e)},Za=()=>{try{return up()||gp()||mp()||xp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yp=t=>{var e,n;return(n=(e=Za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vp=t=>{const e=yp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},eu=()=>{var t;return(t=Za())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Cp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xs(JSON.stringify(n)),Xs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bp())}function Ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ip(){return Qa.NODE_ADMIN===!0}function wp(){try{return typeof indexedDB=="object"}catch{return!1}}function Sp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="FirebaseError";class Es extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tp,Object.setPrototypeOf(this,Es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nu.prototype.create)}}class nu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Np(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Es(i,l,s)}}function Np(t,e){return t.replace(Rp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Rp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=as(Hr(r[0])||""),n=as(Hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ap=function(t){const e=su(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Pp=function(t){const e=su(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function En(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ei(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vl(r)&&Vl(o)){if(!ei(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const g=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let d=0;d<80;d++){d<40?d<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):d<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[d]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,N(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$i=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Nn(t){return t&&t._delegate?t._delegate:t}class us{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Mp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ji;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fp(t){return t===Kt?void 0:t}function Lp(t){return t.instantiationMode==="EAGER"}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Wp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Hp=ce.INFO,Up={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Vp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Up[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class iu{constructor(e){this.name=e,this._logLevel=Hp,this._logHandler=Vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const jp=(t,e)=>e.some(n=>t instanceof n);let jl,$l;function $p(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zp(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ru=new WeakMap,Ur=new WeakMap,ou=new WeakMap,_r=new WeakMap,So=new WeakMap;function Gp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(kt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ru.set(n,t)}).catch(()=>{}),So.set(e,t),e}function qp(t){if(Ur.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ur.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ou.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kp(t){Vr=t(Vr)}function Qp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gr(this),e,...n);return ou.set(s,e.sort?e.sort():[e]),kt(s)}:zp().includes(t)?function(...e){return t.apply(gr(this),e),kt(ru.get(this))}:function(...e){return kt(t.apply(gr(this),e))}}function Yp(t){return typeof t=="function"?Qp(t):(t instanceof IDBTransaction&&qp(t),jp(t,$p())?new Proxy(t,Vr):t)}function kt(t){if(t instanceof IDBRequest)return Gp(t);if(_r.has(t))return _r.get(t);const e=Yp(t);return e!==t&&(_r.set(t,e),So.set(e,t)),e}const gr=t=>So.get(t);function Jp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=kt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Xp=["get","getKey","getAll","getAllKeys","count"],Zp=["put","add","delete","clear"],mr=new Map;function zl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mr.get(e))return mr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Zp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Xp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return mr.set(e,r),r}Kp(t=>({...t,get:(e,n,s)=>zl(e,n)||t.get(e,n,s),has:(e,n)=>!!zl(e,n)||t.has(e,n)}));/**
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
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function t_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",Gl="0.11.2";/**
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
 */const Ct=new iu("@firebase/app"),n_="@firebase/app-compat",s_="@firebase/analytics-compat",i_="@firebase/analytics",r_="@firebase/app-check-compat",o_="@firebase/app-check",l_="@firebase/auth",c_="@firebase/auth-compat",a_="@firebase/database",u_="@firebase/data-connect",h_="@firebase/database-compat",f_="@firebase/functions",d_="@firebase/functions-compat",p_="@firebase/installations",__="@firebase/installations-compat",g_="@firebase/messaging",m_="@firebase/messaging-compat",x_="@firebase/performance",y_="@firebase/performance-compat",v_="@firebase/remote-config",C_="@firebase/remote-config-compat",b_="@firebase/storage",E_="@firebase/storage-compat",I_="@firebase/firestore",w_="@firebase/vertexai",S_="@firebase/firestore-compat",T_="firebase",N_="11.4.0";/**
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
 */const $r="[DEFAULT]",R_={[jr]:"fire-core",[n_]:"fire-core-compat",[i_]:"fire-analytics",[s_]:"fire-analytics-compat",[o_]:"fire-app-check",[r_]:"fire-app-check-compat",[l_]:"fire-auth",[c_]:"fire-auth-compat",[a_]:"fire-rtdb",[u_]:"fire-data-connect",[h_]:"fire-rtdb-compat",[f_]:"fire-fn",[d_]:"fire-fn-compat",[p_]:"fire-iid",[__]:"fire-iid-compat",[g_]:"fire-fcm",[m_]:"fire-fcm-compat",[x_]:"fire-perf",[y_]:"fire-perf-compat",[v_]:"fire-rc",[C_]:"fire-rc-compat",[b_]:"fire-gcs",[E_]:"fire-gcs-compat",[I_]:"fire-fst",[S_]:"fire-fst-compat",[w_]:"fire-vertex","fire-js":"fire-js",[T_]:"fire-js-all"};/**
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
 */const ti=new Map,A_=new Map,zr=new Map;function ql(t,e){try{t.container.addComponent(e)}catch(n){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(zr.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of ti.values())ql(n,t);for(const n of A_.values())ql(n,t);return!0}function P_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function O_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const k_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new nu("app","Firebase",k_);/**
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
 */class D_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const M_=N_;function lu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$r,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=eu()),!n)throw Dt.create("no-options");const r=ti.get(i);if(r){if(ei(n,r.options)&&ei(s,r.config))return r;throw Dt.create("duplicate-app",{appName:i})}const o=new Bp(i);for(const c of zr.values())o.addComponent(c);const l=new D_(n,s,o);return ti.set(i,l),l}function F_(t=$r){const e=ti.get(t);if(!e&&t===$r&&eu())return lu();if(!e)throw Dt.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=R_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(l.join(" "));return}ni(new us(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const L_="firebase-heartbeat-database",B_=1,hs="firebase-heartbeat-store";let xr=null;function cu(){return xr||(xr=Jp(L_,B_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),xr}async function W_(t){try{const n=(await cu()).transaction(hs),s=await n.objectStore(hs).get(au(t));return await n.done,s}catch(e){if(e instanceof Es)Ct.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(n.message)}}}async function Kl(t,e){try{const s=(await cu()).transaction(hs,"readwrite");await s.objectStore(hs).put(e,au(t)),await s.done}catch(n){if(n instanceof Es)Ct.warn(n.message);else{const s=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ct.warn(s.message)}}}function au(t){return`${t.name}!${t.options.appId}`}/**
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
 */const H_=1024,U_=30;class V_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ql();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>U_){const o=z_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ct.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ql(),{heartbeatsToSend:s,unsentEntries:i}=j_(this._heartbeatsCache.heartbeats),r=Xs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ct.warn(n),""}}}function Ql(){return new Date().toISOString().substring(0,10)}function j_(t,e=H_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wp()?Sp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await W_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yl(t){return Xs(JSON.stringify({version:2,heartbeats:t})).length}function z_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function G_(t){ni(new us("platform-logger",e=>new e_(e),"PRIVATE")),ni(new us("heartbeat",e=>new V_(e),"PRIVATE")),yn(jr,Gl,t),yn(jr,Gl,"esm2017"),yn("fire-js","")}G_("");var q_="firebase",K_="11.4.0";/**
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
 */yn(q_,K_,"app");var Jl={};const Xl="@firebase/database",Zl="1.0.13";/**
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
 */let uu="";function Q_(t){uu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y_(e)}}catch{}return new J_},Yt=hu("localStorage"),X_=hu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new iu("@firebase/database"),Z_=function(){let t=1;return function(){return t++}}(),fu=function(t){const e=Dp(t),n=new kp;n.update(e);const s=n.digest();return Io.encodeByteArray(s)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Is.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let Xn=null,ec=!0;const eg=function(t,e){N(!0,"Can't turn on custom loggers persistently."),vn.logLevel=ce.VERBOSE,Xn=vn.log.bind(vn)},Ae=function(...t){if(ec===!0&&(ec=!1,Xn===null&&X_.get("logging_enabled")===!0&&eg()),Xn){const e=Is.apply(null,t);Xn(e)}},ws=function(t){return function(...e){Ae(t,...e)}},Gr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);vn.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw vn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Is(...t);vn.warn(e)},tg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},du=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ng=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},In="[MIN_NAME]",nn="[MAX_NAME]",Rn=function(t,e){if(t===e)return 0;if(t===In||e===nn)return-1;if(e===In||t===nn)return 1;{const n=tc(t),s=tc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},sg=function(t,e){return t===e?0:t<e?-1:1},Bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},To=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=To(t[e[s]]);return n+="}",n},pu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _u=function(t){N(!du(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let d="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),d=d+g}return d.toLowerCase()},ig=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function og(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const lg=new RegExp("^-?(0*)\\d{1,10}$"),cg=-2147483648,ag=2147483647,tc=function(t){if(lg.test(t)){const e=Number(t);if(e>=cg&&e<=ag)return e}return null},An=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},ug=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,O_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class Vs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="5",gu="v",mu="s",xu="r",yu="f",vu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cu="ls",bu="p",qr="ac",Eu="websocket",Iu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Su(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let s;if(e===Eu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Iu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dg(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={},vr={};function Ro(t){const e=t.toString();return yr[e]||(yr[e]=new pg),yr[e]}function _g(t,e){const n=t.toString();return vr[n]||(vr[n]=e()),vr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const nc="start",mg="close",xg="pLPCommand",yg="pRTLPCB",Tu="id",Nu="pw",Ru="ser",vg="cb",Cg="seg",bg="ts",Eg="d",Ig="dframe",Au=1870,Pu=30,wg=Au-Pu,Sg=25e3,Tg=3e4;class pn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ws(e),this.stats_=Ro(n),this.urlFn=c=>(this.appCheckToken&&(c[qr]=this.appCheckToken),Su(n,Iu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Tg)),ng(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ao((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===nc)this.id=l,this.password=c;else if(o===mg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[nc]="t",s[Ru]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gu]=No,this.transportSessionId&&(s[mu]=this.transportSessionId),this.lastSessionId&&(s[Cu]=this.lastSessionId),this.applicationId&&(s[bu]=this.applicationId),this.appCheckToken&&(s[qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&vu.test(location.hostname)&&(s[xu]=yu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ig()&&!rg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ja(n),i=pu(s,wg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ig]="t",s[Tu]=e,s[Nu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ao{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Z_(),window[xg+this.uniqueCallbackIdentifier]=e,window[yg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ao.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tu]=this.myID,e[Nu]=this.myPW,e[Ru]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pu+s.length<=Au;){const o=this.pendingSegs.shift();s=s+"&"+Cg+i+"="+o.seg+"&"+bg+i+"="+o.ts+"&"+Eg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Sg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=16384,Rg=45e3;let si=null;typeof MozWebSocket<"u"?si=MozWebSocket:typeof WebSocket<"u"&&(si=WebSocket);class Ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ws(this.connId),this.stats_=Ro(n),this.connURL=Ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gu]=No,typeof location<"u"&&location.hostname&&vu.test(location.hostname)&&(o[xu]=yu),n&&(o[mu]=n),s&&(o[Cu]=s),i&&(o[qr]=i),r&&(o[bu]=r),Su(e,Eu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{let s;Ip(),this.mySock=new si(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&si!==null&&!Ze.forceDisallow_}static previouslyFailed(){return Yt.isInMemoryStorage||Yt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=as(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pu(n,Ng);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{static get ALL_TRANSPORTS(){return[pn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ze&&Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of fs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=6e4,Pg=5e3,Og=10*1024,kg=100*1024,Cr="t",sc="d",Dg="s",ic="r",Mg="e",rc="o",oc="a",lc="n",cc="p",Fg="h";class Lg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ws("c:"+this.id+":"),this.transportManager_=new fs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Og?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cr in e){const n=e[Cr];n===oc?this.upgradeIfSecondaryHealthy_():n===ic?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===rc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:oc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bn("t",e),s=Bn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bn(Cr,e);if(sc in e){const s=e[sc];if(n===Fg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===lc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Dg?this.onConnectionShutdown_(s):n===ic?this.onReset_(s):n===Mg?Gr("Server Error: "+s):n===rc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),No!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ag))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ku{static getInstance(){return new ii}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=32,uc=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lt(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Du(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Bg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Fe(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Po(t,e){if(Lt(t)!==Lt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Lt(t)>Lt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Wg{constructor(e,n){this.errorPrefix_=n,this.parts_=Mu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$i(this.parts_[s]);Lu(this)}}function Hg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$i(e),Lu(t)}function Ug(t){const e=t.parts_.pop();t.byteLength_-=$i(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lu(t){if(t.byteLength_>uc)throw new Error(t.errorPrefix_+"has a key path longer than "+uc+" bytes ("+t.byteLength_+").");if(t.parts_.length>ac)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ac+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends ku{static getInstance(){return new Oo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e3,Vg=60*5*1e3,hc=30*1e3,jg=1.3,$g=3e4,zg="server_kill",fc=3;class vt extends Ou{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=vt.nextPersistentConnectionId_++,this.log_=ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=Vg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ii.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const s=En(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ap(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gr("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$g&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(d){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=g&&g.token,l=new Lg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{He(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(zg)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&He(d),c())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ul(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>To(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fc&&(this.reconnectDelay_=hc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uu.replace(/\./g,"-")]=1,tu()?e["framework.cordova"]=1:Ep()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ii.getInstance().currentlyOnline();return Ul(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(In,e),i=new G(In,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class Bu extends zi{static get __EMPTY_NODE(){return Ms}static set __EMPTY_NODE(e){Ms=e}compare(e,n){return Rn(e.name,n.name)}isDefinedOn(e){throw Tn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(nn,Ms)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ms)}toString(){return".key"}}const Cn=new Bu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class Gg{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fs(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new Gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){return Rn(t.name,e.name)}function ko(t,e){return Rn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;function Kg(t){Kr=t}const Wu=function(t){return typeof t=="number"?"number:"+_u(t):"string:"+t},Hu=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else N(t===Kr||t.isEmpty(),"priority of unexpected type.");N(t===Kr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;class Ee{static set __childrenNodeConstructor(e){dc=e}static get __childrenNodeConstructor(){return dc}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(N(s!==".priority"||Lt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_u(this.value_):e+=this.value_,this.lazyHash_=fu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return N(i>=0,"Unknown leaf type: "+n),N(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu,Vu;function Qg(t){Uu=t}function Yg(t){Vu=t}class Jg extends zi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(nn,new Ee("[PRIORITY-POST]",Vu))}makePost(e,n){const s=Uu(e);return new G(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new Jg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=Math.log(2);class Zg{constructor(e){const n=r=>parseInt(Math.log(r)/Xg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ri=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let d,g;if(u===0)return null;if(u===1)return d=t[c],g=n?n(d):d,new Ie(g,d.node,Ie.BLACK,null,null);{const x=parseInt(u/2,10)+c,w=i(c,x),k=i(x+1,a);return d=t[x],g=n?n(d):d,new Ie(g,d.node,Ie.BLACK,w,k)}},r=function(c){let a=null,u=null,d=t.length;const g=function(w,k){const j=d-w,V=d;d-=w;const Q=i(j+1,V),Z=t[j],M=n?n(Z):Z;x(new Ie(M,Z.node,k,null,Q))},x=function(w){a?(a.left=w,a=w):(u=w,a=w)};for(let w=0;w<c.count;++w){const k=c.nextBitIsOne(),j=Math.pow(2,c.count-(w+1));k?g(j,Ie.BLACK):(g(j,Ie.BLACK),g(j,Ie.RED))}return u},o=new Zg(t.length),l=r(o);return new We(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;const un={};class yt{static get Default(){return N(un&&ge,"ChildrenNode.ts has not been loaded"),br=br||new yt({".priority":un},{".priority":ge}),br}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=En(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ri(s,e.getCompare()):l=un;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new yt(u,a)}addToIndexes(e,n){const s=Zs(this.indexes_,(i,r)=>{const o=En(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ri(l,o.getCompare())}else return un;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new yt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Zs(this.indexes_,i=>{if(i===un)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new yt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class L{static get EMPTY_NODE(){return Hn||(Hn=new L(new We(ko),null,yt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hu(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{N(z(e)!==".priority"||Lt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wu(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ss?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class e0 extends L{constructor(){super(new We(ko),L.EMPTY_NODE,yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ss=new e0;Object.defineProperties(G,{MIN:{value:new G(In,L.EMPTY_NODE)},MAX:{value:new G(nn,Ss)}});Bu.__EMPTY_NODE=L.EMPTY_NODE;Ee.__childrenNodeConstructor=L;Kg(Ss);Yg(Ss);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=!0;function we(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,we(e))}if(!(t instanceof Array)&&t0){const n=[];let s=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=we(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=ri(n,qg,o=>o.name,ko);if(s){const o=ri(n,ge.getCompare());return new L(r,we(e),new yt({".priority":o},{".priority":ge}))}else return new L(r,we(e),yt.Default)}else{let n=L.EMPTY_NODE;return Ue(t,(s,i)=>{if(wt(t,s)&&s.substring(0,1)!=="."){const r=we(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(we(e))}}Qg(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends zi{constructor(e){super(),this.indexPath_=e,N(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}makePost(e,n){const s=we(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ss);return new G(nn,e)}toString(){return Mu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0 extends zi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Rn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=we(e);return new G(n,s)}toString(){return".value"}}const i0=new s0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){return{type:"value",snapshotNode:t}}function wn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function r0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ds(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(wn(n,s)):o.trackChildChange(ps(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ge,(i,r)=>{n.hasChild(i)||s.trackChildChange(ds(i,r))}),n.isLeafNode()||n.forEachChild(ge,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ps(i,r,o))}else s.trackChildChange(wn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.indexedFilter_=new Do(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_s.getStartPost_(e),this.endPost_=_s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new _s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(g,x)=>d(x,g)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const d=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(u&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(ps(n,s,d)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ds(n,d));const k=l.updateImmediateChild(n,L.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(wn(g.name,g.node)),k.updateImmediateChild(g.name,g.node)):k}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ds(a.name,a.node)),r.trackChildChange(wn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:In}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Mo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function l0(t){return t.loadsAllData()?new Do(t.getIndex()):t.hasLimit()?new o0(t):new _s(t)}function pc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===i0?n="$value":t.index_===Cn?n="$key":(N(t.index_ instanceof n0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _c(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Ou{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ws("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=oi.getListenId_(e,s),l={};this.listens_[o]=l;const c=pc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let d=u;if(a===404&&(d=null,a=null),a===null&&this.onDataUpdate_(r,d,!1,s),En(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=oi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=pc(e._queryParams),s=e._path.toString(),i=new ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Op(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=as(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){return{value:null,children:new Map}}function $u(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,li());const i=t.children.get(s);e=ae(e),$u(i,e,n)}}function Qr(t,e,n){t.value!==null?n(e,t.value):a0(t,(s,i)=>{const r=new re(e.toString()+"/"+s);Qr(i,r,n)})}function a0(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=10*1e3,h0=30*1e3,f0=5*60*1e3;class d0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new u0(e);const s=gc+(h0-gc)*Math.random();Zn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ue(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*f0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function zu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=zu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ci(X(),n,this.revert)}}else return N(z(this.path)===e,"operationForChild called for unrelated child."),new ci(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new gs(this.source,X()):new gs(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return q(this.path)?new sn(this.source,X(),this.snap.getImmediateChild(e)):new sn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new sn(this.source,X(),n.value):new ms(this.source,X(),n)}else return N(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ms(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _0(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(r0(o.childName,o.snapshotNode))}),Un(t,i,"child_removed",e,s,n),Un(t,i,"child_added",e,s,n),Un(t,i,"child_moved",r,s,n),Un(t,i,"child_changed",e,s,n),Un(t,i,"value",e,s,n),i}function Un(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>m0(t,l,c)),o.forEach(l=>{const c=g0(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function g0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function m0(t,e,n){if(e.childName==null||n.childName==null)throw Tn("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e){return{eventCache:t,serverCache:e}}function es(t,e,n,s){return Gi(new Bt(e,n,s),t.serverCache)}function Gu(t,e,n,s){return Gi(t.eventCache,new Bt(e,n,s))}function ai(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;const x0=()=>(Er||(Er=new We(sg)),Er);class fe{static fromObject(e){let n=new fe(null);return Ue(e,(s,i)=>{n=n.set(new re(s),i)}),n}constructor(e,n=x0()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:Ce(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new fe(null)}}set(e,n){if(q(e))return new fe(n,this.children);{const s=z(e),r=(this.children.get(s)||new fe(null)).set(ae(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new fe(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),Ce(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),Ce(n,i),s):new fe(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new fe(null))}}function ts(t,e,n){if(q(e))return new st(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new st(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new st(r)}}}function mc(t,e,n){let s=t;return Ue(n,(i,r)=>{s=ts(s,Ce(e,i),r)}),s}function xc(t,e){if(q(e))return st.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new st(n)}}function Yr(t,e){return ln(t,e)!=null}function ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function yc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Mt(t,e){if(q(e))return t;{const n=ln(t,e);return n!=null?new st(new fe(n)):new st(t.writeTree_.subtree(e))}}function Jr(t){return t.writeTree_.isEmpty()}function Sn(t,e){return qu(X(),t.writeTree_,e)}function qu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qu(Ce(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){return Ju(e,t)}function y0(t,e,n,s,i){N(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ts(t.visibleWrites,e,n)),t.lastWriteId=s}function v0(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function C0(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&b0(l,s.path)?i=!1:et(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return E0(t),!0;if(s.snap)t.visibleWrites=xc(t.visibleWrites,s.path);else{const l=s.children;Ue(l,c=>{t.visibleWrites=xc(t.visibleWrites,Ce(s.path,c))})}return!0}else return!1}function b0(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(Ce(t.path,n),e))return!0;return!1}function E0(t){t.visibleWrites=Ku(t.allWrites,I0,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function I0(t){return t.visible}function Ku(t,e,n){let s=st.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=Fe(n,o),s=ts(s,l,r.snap)):et(o,n)&&(l=Fe(o,n),s=ts(s,X(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=Fe(n,o),s=mc(s,l,r.children);else if(et(o,n))if(l=Fe(o,n),q(l))s=mc(s,X(),r.children);else{const c=En(r.children,z(l));if(c){const a=c.getChild(ae(l));s=ts(s,X(),a)}}}else throw Tn("WriteRecord should have .snap or .children")}}return s}function Qu(t,e,n,s,i){if(!s&&!i){const r=ln(t.visibleWrites,e);if(r!=null)return r;{const o=Mt(t.visibleWrites,e);if(Jr(o))return n;if(n==null&&!Yr(o,X()))return null;{const l=n||L.EMPTY_NODE;return Sn(o,l)}}}else{const r=Mt(t.visibleWrites,e);if(!i&&Jr(r))return n;if(!i&&n==null&&!Yr(r,X()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(et(a.path,e)||et(e,a.path))},l=Ku(t.allWrites,o,e),c=n||L.EMPTY_NODE;return Sn(l,c)}}}function w0(t,e,n){let s=L.EMPTY_NODE;const i=ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Mt(t.visibleWrites,e);return n.forEachChild(ge,(o,l)=>{const c=Sn(Mt(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Mt(t.visibleWrites,e);return yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function S0(t,e,n,s,i){N(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(Yr(t.visibleWrites,r))return null;{const o=Mt(t.visibleWrites,r);return Jr(o)?i.getChild(n):Sn(o,i.getChild(n))}}function T0(t,e,n,s){const i=Ce(e,n),r=ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Mt(t.visibleWrites,i);return Sn(o,s.getNode().getImmediateChild(n))}else return null}function N0(t,e){return ln(t.visibleWrites,e)}function R0(t,e,n,s,i,r,o){let l;const c=Mt(t.visibleWrites,e),a=ln(c,X());if(a!=null)l=a;else if(n!=null)l=Sn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&u.length<i;)d(x,s)!==0&&u.push(x),x=g.getNext();return u}else return[]}function A0(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function ui(t,e,n,s){return Qu(t.writeTree,t.treePath,e,n,s)}function Bo(t,e){return w0(t.writeTree,t.treePath,e)}function vc(t,e,n,s){return S0(t.writeTree,t.treePath,e,n,s)}function hi(t,e){return N0(t.writeTree,Ce(t.treePath,e))}function P0(t,e,n,s,i,r){return R0(t.writeTree,t.treePath,e,n,s,i,r)}function Wo(t,e,n){return T0(t.writeTree,t.treePath,e,n)}function Yu(t,e){return Ju(Ce(t.treePath,e),t.writeTree)}function Ju(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ps(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ds(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,wn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ps(s,e.snapshotNode,i.oldSnap));else throw Tn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xu=new k0;class Ho{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),r=P0(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){return{filter:t}}function M0(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function F0(t,e,n,s,i){const r=new O0;let o,l;if(n.type===tt.OVERWRITE){const a=n;a.source.fromUser?o=Xr(t,e,a.path,a.snap,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=fi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===tt.MERGE){const a=n;a.source.fromUser?o=B0(t,e,a.path,a.children,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===tt.ACK_USER_WRITE){const a=n;a.revert?o=U0(t,e,a.path,s,i,r):o=W0(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=H0(t,e,n.path,s,r);else throw Tn("Unknown operation type: "+n.type);const c=r.getChanges();return L0(e,o,c),{viewCache:o,changes:c}}function L0(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ai(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ju(ai(e)))}}function Zu(t,e,n,s,i,r){const o=e.eventCache;if(hi(s,n)!=null)return e;{let l,c;if(q(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=rn(e),u=a instanceof L?a:L.EMPTY_NODE,d=Bo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const a=ui(s,rn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=z(n);if(a===".priority"){N(Lt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=vc(s,n,u,c);d!=null?l=t.filter.updatePriority(u,d):l=o.getNode()}else{const u=ae(n);let d;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=vc(s,n,o.getNode(),c);g!=null?d=o.getNode().getImmediateChild(a).updateChild(u,g):d=o.getNode().getImmediateChild(a)}else d=Wo(s,a,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),a,d,u,i,r):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function fi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),x,null)}else{const x=z(n);if(!c.isCompleteForPath(n)&&Lt(n)>1)return e;const w=ae(n),j=c.getNode().getImmediateChild(x).updateChild(w,s);x===".priority"?a=u.updatePriority(c.getNode(),j):a=u.updateChild(c.getNode(),x,j,w,Xu,null)}const d=Gu(e,a,c.isFullyInitialized()||q(n),u.filtersNodes()),g=new Ho(i,d,r);return Zu(t,d,n,i,g,l)}function Xr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Ho(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=es(e,a,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=es(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ae(n),x=l.getNode().getImmediateChild(d);let w;if(q(g))w=s;else{const k=u.getCompleteChild(d);k!=null?Du(g)===".priority"&&k.getChild(Fu(g)).isEmpty()?w=k:w=k.updateChild(g,s):w=L.EMPTY_NODE}if(x.equals(w))c=e;else{const k=t.filter.updateChild(l.getNode(),d,w,g,u,o);c=es(e,k,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Cc(t,e){return t.eventCache.isCompleteForChild(e)}function B0(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=Ce(n,c);Cc(e,z(u))&&(l=Xr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=Ce(n,c);Cc(e,z(u))||(l=Xr(t,l,u,a,i,r,o))}),l}function bc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((d,g)=>{if(u.hasChild(d)){const x=e.serverCache.getNode().getImmediateChild(d),w=bc(t,x,g);c=fi(t,c,new re(d),w,i,r,o,l)}}),a.children.inorderTraversal((d,g)=>{const x=!e.serverCache.isCompleteForChild(d)&&g.value===null;if(!u.hasChild(d)&&!x){const w=e.serverCache.getNode().getImmediateChild(d),k=bc(t,w,g);c=fi(t,c,new re(d),k,i,r,o,l)}}),c}function W0(t,e,n,s,i,r,o){if(hi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return fi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new fe(null);return c.getNode().forEachChild(Cn,(u,d)=>{a=a.set(new re(u),d)}),Zr(t,e,n,a,i,r,l,o)}else return e}else{let a=new fe(null);return s.foreach((u,d)=>{const g=Ce(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Zr(t,e,n,a,i,r,l,o)}}function H0(t,e,n,s,i){const r=e.serverCache,o=Gu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Zu(t,o,n,s,Xu,i)}function U0(t,e,n,s,i,r){let o;if(hi(s,n)!=null)return e;{const l=new Ho(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ui(s,rn(e));else{const d=e.serverCache.getNode();N(d instanceof L,"serverChildren would be complete if leaf node"),u=Bo(s,d)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=z(n);let d=Wo(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?a=t.filter.updateChild(c,u,d,ae(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,L.EMPTY_NODE,ae(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ui(s,rn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||hi(s,X())!=null,es(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Do(s.getIndex()),r=l0(s);this.processor_=D0(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new Bt(c,o.isFullyInitialized(),i.filtersNodes()),d=new Bt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gi(d,u),this.eventGenerator_=new p0(this.query_)}get query(){return this.query_}}function j0(t){return t.viewCache_.serverCache.getNode()}function $0(t){return ai(t.viewCache_)}function z0(t,e){const n=rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Ec(t){return t.eventRegistrations_.length===0}function G0(t,e){t.eventRegistrations_.push(e)}function Ic(t,e,n){const s=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function wc(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(N(rn(t.viewCache_),"We should always have a full cache before handling merges"),N(ai(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=F0(t.processor_,i,e,n,s);return M0(t.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,eh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function q0(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(r,o)=>{s.push(wn(r,o))}),n.isFullyInitialized()&&s.push(ju(n.getNode())),eh(t,s,n.getNode(),e)}function eh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return _0(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class th{constructor(){this.views=new Map}}function K0(t){N(!di,"__referenceConstructor has already been defined"),di=t}function Q0(){return N(di,"Reference.ts has not been loaded"),di}function Y0(t){return t.views.size===0}function Uo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return N(r!=null,"SyncTree gave us an op for an invalid query."),wc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(wc(o,e,n,s));return r}}function nh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ui(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=Bo(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=Gi(new Bt(l,c,!1),new Bt(s,i,!1));return new V0(e,a)}return o}function J0(t,e,n,s,i,r){const o=nh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),G0(o,n),q0(o,n)}function X0(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Wt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Ic(a,n,s)),Ec(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Ic(c,n,s)),Ec(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Wt(t)&&r.push(new(Q0())(e._repo,e._path)),{removed:r,events:o}}function sh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ft(t,e){let n=null;for(const s of t.views.values())n=n||z0(s,e);return n}function ih(t,e){if(e._queryParams.loadsAllData())return Ki(t);{const s=e._queryIdentifier;return t.views.get(s)}}function rh(t,e){return ih(t,e)!=null}function Wt(t){return Ki(t)!=null}function Ki(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;function Z0(t){N(!pi,"__referenceConstructor has already been defined"),pi=t}function em(){return N(pi,"Reference.ts has not been loaded"),pi}let tm=1;class Sc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=A0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(t,e,n,s,i){return y0(t.pendingWriteTree_,e,n,s,i),i?Ns(t,new sn(zu(),e,n)):[]}function Jt(t,e,n=!1){const s=v0(t.pendingWriteTree_,e);if(C0(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(X(),!0):Ue(s.children,o=>{r=r.set(new re(o),!0)}),Ns(t,new ci(s.path,r,n))}else return[]}function Ts(t,e,n){return Ns(t,new sn(Fo(),e,n))}function nm(t,e,n){const s=fe.fromObject(n);return Ns(t,new ms(Fo(),e,s))}function sm(t,e){return Ns(t,new gs(Fo(),e))}function im(t,e,n){const s=jo(t,n);if(s){const i=$o(s),r=i.path,o=i.queryId,l=Fe(r,e),c=new gs(Lo(o),l);return zo(t,r,c)}else return[]}function _i(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||rh(o,e))){const c=X0(o,e,n,s);Y0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(g,x)=>Wt(x));if(u&&!d){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=lm(g);for(let w=0;w<x.length;++w){const k=x[w],j=k.query,V=uh(t,k);t.listenProvider_.startListening(ns(j),xs(t,j),V.hashFn,V.onComplete)}}}!d&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(ns(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Qi(g));t.listenProvider_.stopListening(ns(g),x)}))}cm(t,a)}return l}function lh(t,e,n,s){const i=jo(t,s);if(i!=null){const r=$o(i),o=r.path,l=r.queryId,c=Fe(o,e),a=new sn(Lo(l),c,n);return zo(t,o,a)}else return[]}function rm(t,e,n,s){const i=jo(t,s);if(i){const r=$o(i),o=r.path,l=r.queryId,c=Fe(o,e),a=fe.fromObject(n),u=new ms(Lo(l),c,a);return zo(t,o,u)}else return[]}function eo(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const w=Fe(g,i);r=r||Ft(x,w),o=o||Wt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Wt(l),r=r||Ft(l,X())):(l=new th,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,w)=>{const k=Ft(w,X());k&&(r=r.updateImmediateChild(x,k))}));const a=rh(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Qi(e);N(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=am();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const u=qi(t.pendingWriteTree_,i);let d=J0(l,e,n,u,r,c);if(!a&&!o&&!s){const g=ih(l,e);d=d.concat(um(t,e,g))}return d}function Vo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Fe(o,e),a=Ft(l,c);if(a)return a});return Qu(i,e,r,n,!0)}function om(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const d=Fe(a,n);s=s||Ft(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Ft(i,X()):(i=new th,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Bt(s,!0,!1):null,l=qi(t.pendingWriteTree_,e._path),c=nh(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return $0(c)}function Ns(t,e){return ch(e,t.syncPointTree_,null,qi(t.pendingWriteTree_,X()))}function ch(t,e,n,s){if(q(t.path))return ah(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=Ft(i,X()));let r=[];const o=z(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Yu(s,o);r=r.concat(ch(l,c,a,u))}return i&&(r=r.concat(Uo(i,t,s,n))),r}}function ah(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=Ft(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Yu(s,o),u=t.operationForChild(o);u&&(r=r.concat(ah(u,l,c,a)))}),i&&(r=r.concat(Uo(i,t,s,n))),r}function uh(t,e){const n=e.query,s=xs(t,n);return{hashFn:()=>(j0(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?im(t,n._path,s):sm(t,n._path);{const r=og(i,n);return _i(t,n,null,r)}}}}function xs(t,e){const n=Qi(e);return t.queryToTagMap.get(n)}function Qi(t){return t._path.toString()+"$"+t._queryIdentifier}function jo(t,e){return t.tagToQueryMap.get(e)}function $o(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function zo(t,e,n){const s=t.syncPointTree_.get(e);N(s,"Missing sync point for query tag that we're tracking");const i=qi(t.pendingWriteTree_,e);return Uo(s,n,i,null)}function lm(t){return t.fold((e,n,s)=>{if(n&&Wt(n))return[Ki(n)];{let i=[];return n&&(i=sh(n)),Ue(s,(r,o)=>{i=i.concat(o)}),i}})}function ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(em())(t._repo,t._path):t}function cm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Qi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function am(){return tm++}function um(t,e,n){const s=e._path,i=xs(t,e),r=uh(t,n),o=t.listenProvider_.startListening(ns(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)N(!Wt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,d)=>{if(!q(a)&&u&&Wt(u))return[Ki(u).query];{let g=[];return u&&(g=g.concat(sh(u).map(x=>x.query))),Ue(d,(x,w)=>{g=g.concat(w)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(ns(u),xs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Go(n)}node(){return this.node_}}class qo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new qo(this.syncTree_,n)}node(){return Vo(this.syncTree_,this.path_)}}const hm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Tc=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dm(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},dm=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&N(!1,"Unexpected increment value: "+s);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},pm=function(t,e,n,s){return Ko(e,new qo(n,t),s)},hh=function(t,e,n){return Ko(t,new Go(e),n)};function Ko(t,e,n){const s=t.getPriority().val(),i=Tc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Tc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,we(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(ge,(l,c)=>{const a=Ko(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yo(t,e){let n=e instanceof re?e:new re(e),s=t,i=z(n);for(;i!==null;){const r=En(s.node.children,i)||{children:{},childCount:0};s=new Qo(i,s,r),n=ae(n),i=z(n)}return s}function Pn(t){return t.node.value}function fh(t,e){t.node.value=e,to(t)}function dh(t){return t.node.childCount>0}function _m(t){return Pn(t)===void 0&&!dh(t)}function Yi(t,e){Ue(t.node.children,(n,s)=>{e(new Qo(n,t,s))})}function ph(t,e,n,s){n&&e(t),Yi(t,i=>{ph(i,e,!0)})}function gm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Rs(t){return new re(t.parent===null?t.name:Rs(t.parent)+"/"+t.name)}function to(t){t.parent!==null&&mm(t.parent,t.name,t)}function mm(t,e,n){const s=_m(n),i=wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,to(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,to(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=/[\[\].#$\/\u0000-\u001F\u007F]/,ym=/[\[\].#$\u0000-\u001F\u007F]/,Ir=10*1024*1024,_h=function(t){return typeof t=="string"&&t.length!==0&&!xm.test(t)},gh=function(t){return typeof t=="string"&&t.length!==0&&!ym.test(t)},vm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gh(t)},Cm=function(t,e,n,s){Jo(wo(t,"value"),e,n)},Jo=function(t,e,n){const s=n instanceof re?new Wg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(s)+" with contents = "+e.toString());if(du(e))throw new Error(t+"contains "+e.toString()+" "+Qt(s));if(typeof e=="string"&&e.length>Ir/3&&$i(e)>Ir)throw new Error(t+"contains a string greater than "+Ir+" utf8 bytes "+Qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!_h(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hg(s,o),Jo(t,l,s),Ug(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qt(s)+" in addition to actual children.")}},mh=function(t,e,n,s){if(!gh(n))throw new Error(wo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mh(t,e,n)},xh=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Em=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_h(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vm(n))throw new Error(wo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Po(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function yh(t,e,n){Xo(t,n),vh(t,s=>Po(s,e))}function dt(t,e,n){Xo(t,n),vh(t,s=>et(s,e)||et(e,s))}function vh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(wm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function wm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xn&&Ae("event: "+n.toString()),An(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="repo_interrupt",Tm=25;class Nm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Im,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=li(),this.transactionQueueTree_=new Qo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Rm(t,e,n){if(t.stats_=Ro(t.repoInfo_),t.forceRestClient_||ug())t.server_=new oi(t.repoInfo_,(s,i,r,o)=>{Nc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Rc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vt(t.repoInfo_,e,(s,i,r,o)=>{Nc(t,s,i,r,o)},s=>{Rc(t,s)},s=>{Pm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=_g(t.repoInfo_,()=>new d0(t.stats_,t.server_)),t.infoData_=new c0,t.infoSyncTree_=new Sc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ts(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),el(t,"connected",!1),t.serverSyncTree_=new Sc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);dt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Am(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zo(t){return hm({timestamp:Am(t)})}function Nc(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Zs(n,a=>we(a));o=rm(t.serverSyncTree_,r,c,i)}else{const c=we(n);o=lh(t.serverSyncTree_,r,c,i)}else if(s){const c=Zs(n,a=>we(a));o=nm(t.serverSyncTree_,r,c)}else{const c=we(n);o=Ts(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Xi(t,r)),dt(t.eventQueue_,l,o)}function Rc(t,e){el(t,"connected",e),e===!1&&Dm(t)}function Pm(t,e){Ue(e,(n,s)=>{el(t,n,s)})}function el(t,e,n){const s=new re("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(s,i);const r=Ts(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function Ch(t){return t.nextWriteId_++}function Om(t,e,n){const s=om(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=we(i).withIndex(e._queryParams.getIndex());eo(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ts(t.serverSyncTree_,e._path,r);else{const l=xs(t.serverSyncTree_,e);o=lh(t.serverSyncTree_,e._path,r,l)}return dt(t.eventQueue_,e._path,o),_i(t.serverSyncTree_,e,n,null,!0),r},i=>(Ji(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function km(t,e,n,s,i){Ji(t,"set",{path:e.toString(),value:n,priority:s});const r=Zo(t),o=we(n,s),l=Vo(t.serverSyncTree_,e),c=hh(o,l,r),a=Ch(t),u=oh(t.serverSyncTree_,e,c,a,!0);Xo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const w=g==="ok";w||He("set at "+e+" failed: "+g);const k=Jt(t.serverSyncTree_,a,!w);dt(t.eventQueue_,e,k),Lm(t,i,g,x)});const d=Sh(t,e);Xi(t,d),dt(t.eventQueue_,d,[])}function Dm(t){Ji(t,"onDisconnectEvents");const e=Zo(t),n=li();Qr(t.onDisconnect_,X(),(i,r)=>{const o=pm(i,r,t.serverSyncTree_,e);$u(n,i,o)});let s=[];Qr(n,X(),(i,r)=>{s=s.concat(Ts(t.serverSyncTree_,i,r));const o=Sh(t,i);Xi(t,o)}),t.onDisconnect_=li(),dt(t.eventQueue_,X(),s)}function Mm(t,e,n){let s;z(e._path)===".info"?s=eo(t.infoSyncTree_,e,n):s=eo(t.serverSyncTree_,e,n),yh(t.eventQueue_,e._path,s)}function Ac(t,e,n){let s;z(e._path)===".info"?s=_i(t.infoSyncTree_,e,n):s=_i(t.serverSyncTree_,e,n),yh(t.eventQueue_,e._path,s)}function Fm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Sm)}function Ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function Lm(t,e,n,s){e&&An(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function bh(t,e,n){return Vo(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function tl(t,e=t.transactionQueueTree_){if(e||Zi(t,e),Pn(e)){const n=Ih(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Bm(t,Rs(e),n)}else dh(e)&&Yi(e,n=>{tl(t,n)})}function Bm(t,e,n){const s=n.map(a=>a.currentWriteId),i=bh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Fe(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ji(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const d=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(Jt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&d.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Zi(t,Yo(t.transactionQueueTree_,e)),tl(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let g=0;g<d.length;g++)An(d[g])}else{if(a==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{He("transaction at "+c.toString()+" failed: "+a);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=a}Xi(t,e)}},o)}function Xi(t,e){const n=Eh(t,e),s=Rs(n),i=Ih(t,n);return Wm(t,i,s),s}function Wm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Fe(n,c.path);let u=!1,d;if(N(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,i=i.concat(Jt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Tm)u=!0,d="maxretry",i=i.concat(Jt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=bh(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Jo("transaction failed: Data returned ",x,c.path);let w=we(x);typeof x=="object"&&x!=null&&wt(x,".priority")||(w=w.updatePriority(g.getPriority()));const j=c.currentWriteId,V=Zo(t),Q=hh(w,g,V);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=Q,c.currentWriteId=Ch(t),o.splice(o.indexOf(j),1),i=i.concat(oh(t.serverSyncTree_,c.path,Q,c.currentWriteId,c.applyLocally)),i=i.concat(Jt(t.serverSyncTree_,j,!0))}else u=!0,d="nodata",i=i.concat(Jt(t.serverSyncTree_,c.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}Zi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)An(s[l]);tl(t,t.transactionQueueTree_)}function Eh(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Pn(s)===void 0;)s=Yo(s,n),e=ae(e),n=z(e);return s}function Ih(t,e){const n=[];return wh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function wh(t,e,n){const s=Pn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Yi(e,i=>{wh(t,i,n)})}function Zi(t,e){const n=Pn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,fh(e,n.length>0?n:void 0)}Yi(e,s=>{Zi(t,s)})}function Sh(t,e){const n=Rs(Eh(t,e)),s=Yo(t.transactionQueueTree_,e);return gm(s,i=>{wr(t,i)}),wr(t,s),ph(s,i=>{wr(t,i)}),n}function wr(t,e){const n=Pn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fh(e,void 0):n.length=r+1,dt(t.eventQueue_,Rs(e),i);for(let o=0;o<s.length;o++)An(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Um(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pc=function(t,e){const n=Vm(t),s=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},Vm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Hm(t.substring(u,d)));const g=Um(t.substring(Math.min(t.length,d)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class $m{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class nl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Du(this._path)}get ref(){return new St(this._repo,this._path)}get _queryIdentifier(){const e=_c(this._queryParams),n=To(e);return n==="{}"?"default":n}get _queryObject(){return _c(this._queryParams)}isEqual(e){if(e=Nn(e),!(e instanceof nl))return!1;const n=this._repo===e._repo,s=Po(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Bg(this._path)}}class St extends nl{constructor(e,n){super(e,n,new Mo,!1)}get parent(){const e=Fu(this._path);return e===null?null:new St(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ys{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=no(this.ref,e);return new ys(this._node.getChild(n),s,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ys(i,no(this.ref,s),ge)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ls(t,e){return t=Nn(t),t._checkNotDeleted("ref"),e!==void 0?no(t._root,e):t._root}function no(t,e){return t=Nn(t),z(t._path)===null?bm("child","path",e):mh("child","path",e),new St(t._repo,Ce(t._path,e))}function zm(t){return xh("remove",t._path),Nh(t,null)}function Nh(t,e){t=Nn(t),xh("set",t._path),Cm("set",e,t._path);const n=new ji;return km(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Gm(t){t=Nn(t);const e=new Th(()=>{}),n=new er(e);return Om(t._repo,t,n).then(s=>new ys(s,new St(t._repo,t._path),t._queryParams.getIndex()))}class er{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new jm("value",this,new ys(e.snapshotNode,new St(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $m(this,e,n):null}matches(e){return e instanceof er?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,d)=>{Ac(t._repo,t,l),c(u,d)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Th(n,r||void 0),l=new er(o);return Mm(t._repo,t,l),()=>Ac(t._repo,t,l)}function Km(t,e,n,s){return qm(t,"value",e,n,s)}K0(St);Z0(St);/**
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
 */const Qm="FIREBASE_DATABASE_EMULATOR_HOST",so={};let Ym=!1;function Jm(t,e,n,s){t.repoInfo_=new wu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Xm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pc(r,i),l=o.repoInfo,c;typeof process<"u"&&Jl&&(c=Jl[Qm]),c?(r=`http://${c}?ns=${l.namespace}`,o=Pc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new fg(t.name,t.options,e);Em("Invalid Firebase Database URL",o),q(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=ex(l,t,a,new hg(t,n));return new tx(u,t)}function Zm(t,e){const n=so[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Fm(t),delete n[t.key]}function ex(t,e,n,s){let i=so[e.name];i||(i={},so[e.name]=i);let r=i[t.toURLString()];return r&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Nm(t,Ym,n,s),i[t.toURLString()]=r,r}class tx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Rm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new St(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function nx(t=F_(),e){const n=P_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=vp("database");s&&sx(n,...s)}return n}function sx(t,e,n,s={}){t=Nn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ei(s,r.repoInfo_.emulatorOptions))return;bt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Vs(Vs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Cp(s.mockUserToken,t.app.options.projectId);o=new Vs(l)}Jm(r,i,s,o)}/**
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
 */function ix(t){Q_(M_),ni(new us("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Xm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(Xl,Zl,t),yn(Xl,Zl,"esm2017")}vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ix();const Gt=mi;function gi(){const t=["12dQxKov","iamwait","4836430SQAtSR","994816uzsBEZ","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","1:720775593565:web:1a263bf6a87ecfea3817b4","206295bwORTm","3570749ZJnmCK","13644MBPoIT","720775593565","iamwait.firebaseapp.com","G-3RRDNZ9ME5","693350CPPfCU","158rVWtBf","27SONWFZ","iamwait.firebasestorage.app","284634OPnqyL"];return gi=function(){return t},gi()}(function(t,e){const n=mi,s=t();for(;;)try{if(parseInt(n(485))/1+-parseInt(n(475))/2*(parseInt(n(470))/3)+parseInt(n(479))/4*(-parseInt(n(474))/5)+parseInt(n(478))/6+-parseInt(n(469))/7+-parseInt(n(482))/8+-parseInt(n(476))/9*(-parseInt(n(481))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,294902);function mi(t,e){const n=gi();return mi=function(s,i){return s=s-469,n[s]},mi(t,e)}const rx={apiKey:Gt(483),authDomain:Gt(472),databaseURL:"https://iamwait-default-rtdb.europe-west1.firebasedatabase.app",projectId:Gt(480),storageBucket:Gt(477),messagingSenderId:Gt(471),appId:Gt(484),measurementId:Gt(473)},ox=lu(rx),Bs=nx(ox),hn=xi;(function(t,e){const n=xi,s=t();for(;;)try{if(parseInt(n(285))/1*(-parseInt(n(307))/2)+parseInt(n(313))/3*(parseInt(n(298))/4)+parseInt(n(305))/5*(-parseInt(n(297))/6)+-parseInt(n(287))/7+parseInt(n(292))/8*(parseInt(n(303))/9)+parseInt(n(288))/10*(-parseInt(n(290))/11)+-parseInt(n(286))/12*(-parseInt(n(304))/13)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,102192);function xi(t,e){const n=yi();return xi=function(s,i){return s=s-279,n[s]},xi(t,e)}function yi(){const t=["wIWth","42XPPxDr","542924jQLhpk","val","Камень ножницы бумага","exists","stringify","45aVhgNt","299jlWLOY","14030lcTuEq","cedkc","4wfauYh","USJQc","catch","########### ########## Данные "," : данные не найдены","czZCC","3xdOyUa","log"," = "," на прослушке","then","kHbiA","Ошибка записи данных: ","lookField","HwOya","pgItr","Данные ","19604NqlOHh","492Mzrowj","732865cuzdSm","20410lllMQy"," удалены!","242huMJwA","fbStore2","278344ZLbvfy","WeMap"," -  данные записаны","whFoo"];return yi=function(){return t},yi()}const tr=ap(hn(291),{state:()=>({gameId:"",gameNames:{g1:hn(300),g2:"Крестики нолики",g3:"Морской бой"},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:-1,playNumber:0,gameLink:""}),actions:{async getField(t){const e=hn,n={WeMap:function(i,r){return i(r)},HwOya:function(i,r){return i+r},pgItr:e(311),wIWth:function(i,r,o){return i(r,o)}},s=n[e(296)](Ls,Bs,t);return n[e(293)](Gm,s)[e(317)](i=>{const r=e;if(i[r(301)]()){const o=i[r(299)]();return n[r(293)](Vn,n[r(282)](">>> Данные по "+t+r(315),JSON[r(302)](o))),o}else n[r(293)](Vn,t+n[r(283)])})},async setField(t,e){const n=hn,s={USJQc:function(r,o){return r(o)},kHbiA:function(r,o,l){return r(o,l)}},i=s[n(279)](Ls,Bs,t);return s[n(279)](Nh,i,e)[n(317)](()=>{const r=n;s[r(308)](Vn,t+r(294))})[n(309)](r=>{console.error(n(280),r)})},async onValue(t){const e=hn,n={whFoo:function(i,r,o){return i(r,o)}},s=n.whFoo(Ls,Bs,t);n[e(295)](Km,s,i=>{const r=e;Vn(r(310)+t+r(316)),this[r(281)]=i[r(299)]()})},async removeField(t){const e=hn,n={cedkc:function(i,r){return i(r)},qfOap:function(i,r,o){return i(r,o)},czZCC:function(i,r){return i(r)}};console[e(314)](t);const s=n.qfOap(Ls,Bs,t);n[e(312)](zm,s)[e(317)](()=>{const i=e;n[i(306)](Vn,i(284)+t+i(289))})}}}),Vn=t=>console.log("%c "+t,"color: darkgreen"),Sr=Ci;function vi(){const t=[" и договориться о выборе игры ","165258KtyVfa","PvCFj"," Морской бой ","AhOjK"," Крестики нолики ","84hXTpKk","button"," Начальная страница ","35dyKdYM","log","gameChanged","bnqnP","fZfmX","div","MZPLU","AEEmL","328wlVRLs","XFlXK","iAmWaitingForYou","JMfSY","4Lwdxhp","1421172qtcJFT","tgwhq","Ajqwn","77AtyzaQ","ListGames","171850cupadm","133385vwwRYw","JGIvb","Выберите игру","rxjhe","82629trlAnn","nAfpR","CLsVS","69031AKedBI","CfZhQ","681882jEyygc"," Камень ножницы бумага "];return vi=function(){return t},vi()}(function(t,e){const n=Ci,s=t();for(;;)try{if(parseInt(n(249))/1*(-parseInt(n(235))/2)+parseInt(n(246))/3*(parseInt(n(259))/4)+parseInt(n(262))/5*(parseInt(n(251))/6)+parseInt(n(242))/7*(-parseInt(n(231))/8)+-parseInt(n(254))/9+-parseInt(n(241))/10*(-parseInt(n(239))/11)+-parseInt(n(236))/12===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,438117);function Ci(t,e){const n=vi();return Ci=function(s,i){return s=s-229,n[s]},Ci(t,e)}const lx=Li({__name:Sr(240),emits:[Sr(264)],setup(t,{emit:e}){const n=Sr,s={bnqnP:function(l,c){return l(c)},Ajqwn:n(264),XFlXK:function(l,c,a,u){return l(c,a,u)},JMfSY:n(267),nAfpR:n(261),PvCFj:function(l,c,a,u,d){return l(c,a,u,d)},rxjhe:function(l,c,a,u){return l(c,a,u)},JGIvb:n(252),AEEmL:function(l,c,a,u,d){return l(c,a,u,d)},AhOjK:function(l){return l()},MZPLU:n(260),lfoFZ:function(l,c,a,u){return l(c,a,u)},fZfmX:function(l){return l()},MDIqB:" Необходимо будет попросить другого участника найти этот miniapp по имени: ",tgwhq:function(l,c,a,u,d){return l(c,a,u,d)},CfZhQ:n(253),CLsVS:function(l){return l()}},i=s[n(248)](tr),r=e;function o(l){const c=n;console[c(263)](l),i.gameId="g"+l,s[c(265)](r,s[c(238)])}return(l,c)=>{const a=n;return se(),s[a(232)](he,s[a(234)],null,[c[3]||(c[3]=_e(s[a(247)])),c[4]||(c[4]=s[a(255)](v,"h3",null,a(244),-1)),c[5]||(c[5]=v("br",null,null,-1)),s[a(245)](v,a(260),{onClick:c[0]||(c[0]=u=>o(1))},s[a(243)]),c[6]||(c[6]=s[a(230)](v,"br",null,null,-1)),c[7]||(c[7]=s[a(257)](_e)),c[8]||(c[8]=s.PvCFj(v,"br",null,null,-1)),s[a(245)](v,s[a(229)],{onClick:c[1]||(c[1]=u=>o(2))},a(258)),c[9]||(c[9]=s[a(230)](v,"br",null,null,-1)),c[10]||(c[10]=s[a(257)](_e)),c[11]||(c[11]=s[a(255)](v,"br",null,null,-1)),s.lfoFZ(v,s.MZPLU,{onClick:c[2]||(c[2]=u=>o(3))},a(256)),c[12]||(c[12]=v("br",null,null,-1)),c[13]||(c[13]=v("br",null,null,-1)),c[14]||(c[14]=s[a(266)](_e)),c[15]||(c[15]=v("br",null,null,-1)),c[16]||(c[16]=_e(s.MDIqB)),c[17]||(c[17]=v("br",null,null,-1)),c[18]||(c[18]=s[a(266)](_e)),c[19]||(c[19]=s[a(237)](v,"br",null,null,-1)),c[20]||(c[20]=s[a(230)](v,"b",null,a(233),-1)),c[21]||(c[21]=s[a(237)](v,"br",null,null,-1)),c[22]||(c[22]=s[a(257)](_e)),c[23]||(c[23]=s[a(255)](v,"br",null,null,-1)),c[24]||(c[24]=_e(s[a(250)]))])}}}),ss=bi;(function(t,e){const n=bi,s=t();for(;;)try{if(-parseInt(n(146))/1+-parseInt(n(150))/2+parseInt(n(154))/3+parseInt(n(142))/4+parseInt(n(161))/5*(-parseInt(n(145))/6)+parseInt(n(141))/7+parseInt(n(134))/8===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ei,796477);const cx={class:ss(157)},ax={key:0,class:ss(160)};function bi(t,e){const n=Ei();return bi=function(s,i){return s=s-134,n[s]},bi(t,e)}const ux=Li({__name:ss(151),emits:[ss(155)],setup(t,{emit:e}){const n=ss,s={DMHAK:function(l,c){return l(c)},lQNdG:"toExit",hJqyW:function(l,c,a,u){return l(c,a,u)},fTDXs:"button",KUxPt:n(149),WuSqm:function(l){return l()},QAqgX:"div",OtiOp:function(l,c,a,u){return l(c,a,u)},eajEK:n(137),wlbyT:function(l){return l()},ICoBh:function(l,c,a,u,d){return l(c,a,u,d)},deEdb:n(147),uMexH:function(l,c,a){return l(c,a)}},i=e,r=s[n(153)](Ke);function o(l){const c=n;switch(l){case(l=1):s[c(152)](i,s[c(158)]);break}r.value=!1}return(l,c)=>{const a=n;return se(),s[a(139)](he,a(162),cx,[s[a(139)](v,a(162),null,[s[a(139)](v,s[a(136)],{class:s[a(143)],onClick:c[0]||(c[0]=u=>r[a(144)]=!r[a(144)])},"❁")]),r[a(144)]?(s.WuSqm(se),s[a(139)](he,s[a(138)],ax,[s[a(159)](v,"a",{onClick:c[1]||(c[1]=u=>o(1))},s[a(148)]),c[2]||(c[2]=s.wlbyT(_e)),c[3]||(c[3]=s[a(156)](v,"br",null,null,-1)),c[4]||(c[4]=s[a(156)](v,"a",null,s[a(135)],-1))])):s[a(140)](ke,"",!0)])}}});function Ei(){const t=["hJqyW","uMexH","4355470nRsCfR","3078004bcNOdR","KUxPt","value","104514nuUMKS","1544110rlONTQ","Инфо","eajEK","menuBt_bt","15434KijuIJ","MenuButton","DMHAK","wlbyT","2576409AgrBCJ","toExit","ICoBh","menuBt","lQNdG","OtiOp","panel","325OpTShK","div","9840200KNPHEV","deEdb","fTDXs","Удалить игру","QAqgX"];return Ei=function(){return t},Ei()}const As=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},hx=As(ux,[["__scopeId","data-v-ff2e1591"]]),Et=vs;(function(t,e){const n=vs,s=t();for(;;)try{if(parseInt(n(283))/1+-parseInt(n(324))/2*(parseInt(n(293))/3)+-parseInt(n(320))/4+parseInt(n(335))/5*(parseInt(n(289))/6)+parseInt(n(235))/7+parseInt(n(274))/8*(parseInt(n(243))/9)+-parseInt(n(224))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,468318);function vs(t,e){const n=Ii();return vs=function(s,i){return s=s-203,n[s]},vs(t,e)}const fx={key:0},dx={key:1},px={key:2},_x={key:3},gx={key:4},mx={class:Et(275)},xx={key:0},yx=[Et(329)],vx={key:5},Cx={key:0},bx=[Et(329)],Ex={key:1,class:"red-notice"},Ix={key:6},wx={key:7},Sx={key:8},Tx={style:{"font-size":Et(227)}},Nx={style:{color:Et(226),"font-size":Et(288)}},Rx={key:9},Ax={style:{"font-size":Et(227),background:"#ddd"}},Px={key:10};function Ii(){const t=["name","log","yBGWY","gameLink","Играть","PNQZM","pVuqf","FWFwU","/look/","bGhxQ","cFzeO","Согласиться","uOqUq","bXVzA","ZJAwB","center","OlWJa"," Вас выбрал игрок: ","accept","UdJvg","removeField","LVvHz","TJNrZ","uZnRx","9523370aOJSzW","ВСЕ НАСТРОЙКИ ИГРЫ","red","30px","button","now","oJpvF","Ekdva","rzfPX","ppCTd","mYhKP","1460193gULlLE","AJyXx","vYxzl","hKOgm","slice","fIQwI","getField","cUOLT","747cyRKsI","VvLUQ","div","vQJXX","YQmnb"," stage:","setField","Нет ответа, отменяю выбор","rgXEm","LWNVB","BRObv","jCeVZ","BinderComp","then","PgmPC","zQsSk","wLYPz","BDCfV","xRwMM","/look","::::::: Связывание :::::::","myName","JrAqT","zwukQ","qRglu","RTEeQ","rbAqA","cUIja"," ИГРАЙТЕ ВДВОЕМ ","stage","SpcsF","70152Nnlwhm","red-notice","KGBmh","BbVRA","rAzfa","SsYcF","value","vZVtk","qGJDC","375350jSducP","GWOQh"," Зарегистрироваться в поиске ","ZZdBC"," с игроком ","20px","30VcKgJC","Rfqkg","iKido","xLFmI","483762RINyZK","LNAWL","ZJuuE","Вперед","Gwcoz","/list/","NvOIB","ktGQU"," : ","tVwGq","lieFQ","jNXAg","gameId","ryGsi","uvhVH","kWqVD","4px","pWNpp","* nickname не может быть меньше 2 букв",">>>> ANALIZ ","Список желающих играть:","length","res","vQATv","jABSa","playNumber","BImTH","1568208jYwSar","nHByJ","gYweM","sOPuP","2nXbTtW","XgysE","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","myId","Нахожусь в списке, жду соперника","onClick","forEach","WcLXf","Нет желающих, отменяю ожидание","жду пока не откликнится ","QyUNr","662185JKSmJz","POzYn","lookField","kfaMJ","VaLBl","DMmHX","SIldO","OmPTK","xgIWC","Играем","MyWfk","RpSoj","/games/","Sxasv"," Выбрал игрока ","nsycb","yvGJh","OhtWF","id2","larger","reload","context","zvZuo","lKXnh","fFNwx","onValue","vglks","ixJiU","nick","oGSNt","green-bt","yPHOS","push","zfNHT","Отказаться","myNickName"];return Ii=function(){return t},Ii()}const Ox=!1,kx=Li({__name:Et(255),setup(t){const e=Et,n={gYweM:function(f,h){return f+h},ktGQU:e(347),SpcsF:function(f,h){return f===h},AJyXx:function(f,h){return f(h)},vglks:function(f,h){return f>h},pWNpp:function(f,h){return f==h},BEcUK:function(f,h){return f>h},NvOIB:function(f){return f()},JrAqT:function(f,h,p){return f(h,p)},CRWBZ:e(311),BImTH:function(f,h){return f+h},TJNrZ:function(f,h){return f+h},zwukQ:e(208),xRwMM:function(f,h){return f+h},ppCTd:function(f,h){return f+h},zwnVa:"Хорошо бы сообщить сопернику, что вы ушли из игры",RfzLo:function(f,h){return f+h},RTEeQ:e(298),mYhKP:function(f,h){return f+h},bGhxQ:function(f,h){return f+h},oJpvF:function(f,h){return f(h)},yPHOS:e(203),OhtWF:e(225),pVuqf:e(228),xLFmI:e(365),GWOQh:function(f,h){return f(h)},hKOgm:function(f){return f()},ZJAwB:function(f,h,p,C,b,Te){return f(h,p,C,b,Te)},jABSa:function(f){return f()},VHWpp:function(f,h,p,C){return f(h,p,C)},bXVzA:e(245),rAzfa:function(f,h,p,C,b){return f(h,p,C,b)},rRxCc:e(263),SIldO:function(f,h,p,C,b){return f(h,p,C,b)},MyWfk:function(f,h){return f+h},XgysE:function(f,h){return f(h)},sOPuP:function(f,h,p,C,b){return f(h,p,C,b)},cJpxZ:function(f,h){return f+h},zSqMK:function(f,h){return f+h},YQmnb:e(248),jNXAg:function(f,h){return f===h},uOqUq:function(f,h){return f(h)},VvLUQ:function(f,h){return f===h},wLYPz:function(f){return f()},zvZuo:function(f,h,p,C){return f(h,p,C)},uvhVH:function(f,h,p,C,b){return f(h,p,C,b)},kfaMJ:function(f,h,p,C,b){return f(h,p,C,b)},LWNVB:e(271),lKXnh:function(f,h,p,C,b){return f(h,p,C,b)},zQsSk:e(296),rgXEm:function(f,h,p,C,b){return f(h,p,C,b)},oGSNt:function(f,h){return f(h)},OmPTK:function(f,h,p,C){return f(h,p,C)},PNQZM:function(f){return f()},cFzeO:" Привет ",fFNwx:function(f,h,p){return f(h,p)},ryGsi:function(f,h,p,C,b){return f(h,p,C,b)},rVBiC:"input",BRObv:e(354),UdJvg:e(309),niSPI:e(215),vZVtk:"Сменить nickName",LNAWL:function(f,h,p,C,b){return f(h,p,C,b)},BDCfV:function(f,h,p,C){return f(h,p,C)},FWFwU:function(f,h,p){return f(h,p)},cUIja:e(285),iKido:function(f,h,p,C,b){return f(h,p,C,b)},BbVRA:function(f,h,p,C,b){return f(h,p,C,b)},zfNHT:function(f,h,p,C,b){return f(h,p,C,b)},cTxEk:e(326),ZJLPY:function(f){return f()},nHByJ:function(f,h,p,C,b){return f(h,p,C,b)},ixJiU:function(f){return f()},kWqVD:function(f,h,p,C){return f(h,p,C)},xgIWC:function(f,h,p,C,b){return f(h,p,C,b)},SsYcF:e(313),yBGWY:function(f,h,p,C,b){return f(h,p,C,b)},ZJuuE:function(f,h,p){return f(h,p)},VaLBl:"* нельзя выбирать себя",OSFTG:e(332),yvGJh:function(f,h,p,C,b){return f(h,p,C,b)},jCeVZ:function(f,h){return f(h)},AmOXE:function(f,h,p,C,b){return f(h,p,C,b)},vQJXX:function(f){return f()},rbAqA:e(333),rzfPX:e(250),nsycb:function(f,h,p){return f(h,p)},SZpvn:e(217),WcLXf:function(f,h,p,C,b){return f(h,p,C,b)},Sxasv:e(369),RCLeR:function(f,h,p,C){return f(h,p,C)},PgmPC:function(f,h,p){return f(h,p)},qRglu:function(f,h){return f(h)},JcHyC:function(f,h,p,C,b){return f(h,p,C,b)},Ekdva:function(f,h,p,C,b){return f(h,p,C,b)},cUOLT:function(f,h,p,C,b){return f(h,p,C,b)},VnDgW:function(f,h,p,C){return f(h,p,C)},KGBmh:function(f,h,p,C){return f(h,p,C)},DMmHX:function(f,h,p,C,b){return f(h,p,C,b)},QyUNr:function(f,h){return f(h)},LVvHz:function(f,h,p,C,b){return f(h,p,C,b)},ZZdBC:function(f,h,p){return f(h,p)},Gwcoz:function(f,h){return f===h},hKZWW:function(f,h){return f(h)},lieFQ:function(f,h,p,C){return f(h,p,C)},vYxzl:e(204),XoBek:function(f){return f()},uZnRx:function(f,h){return f(h)},qGJDC:e(363),RpSoj:function(f,h){return f(h)},GRtqa:function(f,h){return f(h)},POzYn:"* можете поменять ваш Никнейм"},s=n.XoBek(tr),i=n[e(223)](Ke,localStorage.getItem(e(370))||n[e(282)]),r=n[e(346)](Ke,[]),o=n.PNQZM(Ke),l=Ke(),c=n[e(254)](Ke,""),a=n.GRtqa(Ke,""),u=n[e(223)](Ke,n[e(336)]),d=function(){const f=e;i[f(280)]&&localStorage.setItem(f(370),i[f(280)])};function g(){const f=e;i[f(280)]||(i[f(280)]=s[f(264)]),s.getField("/list/"+s[f(327)])[f(256)](h=>{const p=f;h&&(o[p(280)]={id:h.id,name:h[p(371)]},s[p(241)](n.gYweM(n[p(300)],h[p(203)]))[p(256)](C=>{const b=p;console.log(b(356),C),s[b(305)]=C[b(305)],c[b(280)]=C,s.stage=5,s.gameLink=h[b(203)],ye()}))})}const x=function(f){const h=e;if(console[h(372)](h(312),f),r.value=[],s[h(272)]===0)return!1;s[h(272)]=1;let p=!1;f&&Object.keys(f)[h(330)](C=>{const b=h;if(f[C].id2&&n[b(273)](f[C].id2,s[b(327)])&&(o[b(280)]={id:C,name:f[C][b(371)]}),C===n[b(236)](String,s[b(327)])&&(o[b(280)]={id:f[C][b(353)],name:f[C].name2}),n.vglks(s[b(272)],3))return!1;n[b(273)](C,n.AJyXx(String,s[b(327)]))&&C&&(p=!0,s[b(272)]!==3&&(s[b(272)]=2),f[C][b(353)]&&(s[b(272)]=4)),n[b(310)](f[C][b(353)],s[b(327)])&&(p=!0,s[b(272)]=3),n.BEcUK(s[b(272)],2)&&!p&&location.reload(),f[C][b(218)]&&n[b(299)](Xe),C&&f[C]&&r[b(280)][b(367)]({id:C,name:f[C][b(371)]})})};Ot(()=>s[e(327)],f=>f&&setTimeout(g,500));function w(){const f=e;n[f(299)](k),s[f(272)]=1}function k(){const f=e;s[f(360)](s[f(305)]+f(262))[f(256)](h=>x(h)),n[f(265)](Ot,()=>s[f(337)],h=>x(h))}function j(){const f=e;if(i[f(280)][f(314)]<2)return u[f(280)]=n.CRWBZ,!1;s[f(249)](n[f(319)](n[f(222)](s[f(305)],n[f(266)]),s[f(327)]),{name:i[f(280)]})}function V(f){const h=e,p={fIQwI:h(315)};if(n[h(310)](f.id,s[h(327)]))return l[h(280)]=!0,n.JrAqT(setTimeout,()=>l[h(280)]=!1,2e3),!1;s.setField(n[h(322)](n[h(322)](s[h(305)],h(208)),f.id),{name:f.name,id2:s[h(327)],name2:i[h(280)]||s.myName})[h(256)](C=>{const b=h;console[b(372)](p[b(240)],C),o[b(280)]={id:f.id,name:f[b(371)]},s.stage=3})}function Q(f){const h=e;f&&o[h(280)]&&s[h(249)](n[h(222)](s[h(305)],n[h(266)])+o.value.id,{name:o[h(280)].name,id2:s.myId,name2:i[h(280)]||s[h(264)],accept:!0}),!f&&s[h(249)](n[h(261)](n[h(322)](s[h(305)],n[h(266)]),s[h(327)]),{name:i.value||s.myName})[h(256)](()=>s[h(272)]=2)}function Z(){const f=e;s[f(249)](n.ppCTd(n[f(233)](s[f(305)],n[f(266)]),o[f(280)].id),{name:o[f(280)][f(371)]})[f(256)](()=>s.stage=2)}function M(){const f=e;s[f(220)](n.ppCTd(n[f(222)](s[f(305)],n[f(266)]),s[f(327)]))[f(256)](()=>s[f(272)]=0)}function Y(){var p;const f=e;debugger;a.value=n.zwnVa;let h=n.AJyXx(String,o[f(280)].id);n[f(361)](o.value.id,s.myId)?h+="::"+s.myId:h=n.RfzLo(s[f(327)]+"::",h),s[f(220)](n[f(268)]+s[f(327)]),s.removeField(n[f(234)](n[f(268)],(p=o.value)==null?void 0:p.id)),s[f(220)](n.gYweM(n[f(300)],h)),n[f(265)](setTimeout,()=>location.reload(),3e3)}function Xe(){var C,b,Te;const f=e;let h=Date[f(229)](),p=n[f(230)](String,o[f(280)].id);o.value.id>s.myId?p+="::"+s[f(327)]:p=n[f(233)](n[f(209)](s[f(327)],"::"),p),console.log(n[f(366)],p),s[f(249)]("/list/"+s[f(327)],{id:(C=o[f(280)])==null?void 0:C.id,name:(b=o[f(280)])==null?void 0:b.name,gameLink:p,date:h}),s[f(249)](n.mYhKP(n[f(268)],(Te=o[f(280)])==null?void 0:Te.id),{id:s[f(327)],name:i.value||s[f(264)],gameLink:p,date:h}),s[f(249)]("/games/"+p,{game:n[f(352)],gameId:s[f(305)]}),setTimeout(()=>{var de;const U=f;s[U(220)](n[U(319)](s[U(305)],n.zwukQ)+((de=o[U(280)])==null?void 0:de.id)),s[U(220)](n[U(209)](s[U(305)],n.zwukQ)+s[U(327)]),location[U(355)]()},2e3)}function ye(){const f=e;s[f(318)]=+s[f(305)][f(239)](1)}return(f,h)=>{var b,Te;const p=e,C={vQATv:function(U){return n.hKOgm(U)},OlWJa:function(U,de,ue,$,ne,pt){return n[vs(214)](U,de,ue,$,ne,pt)},tVwGq:n[p(292)],Rfqkg:function(U,de){return n.AJyXx(U,de)}};return n.jABSa(se),he(Ge,null,[Ox?(n[p(238)](se),n.VHWpp(he,n.bXVzA,fx,[h[10]||(h[10]=n.rAzfa(v,"hr",null,null,-1)),h[11]||(h[11]=v("i",null,n.rRxCc,-1)),h[12]||(h[12]=n[p(341)](v,"br",null,null,-1)),_e(n[p(345)](n[p(233)](n[p(345)](" "+n[p(325)]($e,n[p(230)](be,s)[p(327)]),p(301)),$e(i[p(280)]))," "),1),h[13]||(h[13]=n.sOPuP(v,"br",null,null,-1)),_e(n.cJpxZ(n.zSqMK(n[p(247)],$e(be(s)[p(272)]))," "),1),h[14]||(h[14]=n[p(278)](v,"hr",null,null,-1))])):n.JrAqT(ke,"",!0),n[p(304)](n[p(212)](be,s)[p(272)],5)?(n[p(317)](se),n.VHWpp(he,n[p(213)],dx,[n[p(265)](Ye,hx,{onToExit:h[0]||(h[0]=U=>Y())})])):n.JrAqT(ke,"",!0),n[p(244)](n.uOqUq(be,s)[p(272)],-1)?(n[p(259)](se),n[p(357)](he,"div",px,[h[15]||(h[15]=n[p(341)](v,"br",null,null,-1)),h[16]||(h[16]=n[p(307)](v,"br",null,null,-1)),h[17]||(h[17]=n[p(307)](v,"br",null,null,-1)),h[18]||(h[18]=n[p(338)](v,"br",null,null,-1)),h[19]||(h[19]=_e(n[p(252)])),h[20]||(h[20]=v("br",null,null,-1)),h[21]||(h[21]=n.lKXnh(v,"br",null,null,-1)),h[22]||(h[22]=v("br",null,null,-1)),h[23]||(h[23]=n[p(338)](v,"br",null,null,-1)),v(n[p(206)],{onClick:h[1]||(h[1]=U=>be(s)[p(272)]=0)},n[p(258)]),h[24]||(h[24]=n[p(251)](v,"br",null,null,-1)),h[25]||(h[25]=n[p(278)](v,"br",null,null,-1))])):ke("",!0),n.VvLUQ(n[p(364)](be,s).stage,0)?(n.jABSa(se),n[p(342)](he,"div",_x,[Ye(lx,{onGameChanged:w})])):ke("",!0),n[p(304)](n[p(364)](be,s).stage,1)?(n[p(205)](se),n[p(342)](he,p(245),gx,[h[29]||(h[29]=v("p",null,n[p(210)],-1)),v("p",null,[n[p(359)](If,n[p(306)](v,n.rVBiC,{"onUpdate:modelValue":h[2]||(h[2]=U=>i[p(280)]=U),maxlength:"16",minlength:"3",style:{"font-size":n[p(253)],padding:n[p(219)],"text-align":n.niSPI},onInput:h[3]||(h[3]=U=>d()),placeholder:n[p(281)]},null,544),[[Jd,i[p(280)]]])]),n[p(294)](v,p(245),mx,$e(u.value),1),r[p(280)]&&r[p(280)][p(314)]>1?(n.wLYPz(se),n[p(260)](he,p(245),xx,[h[26]||(h[26]=v("h3",null,p(313),-1)),(se(!0),n[p(341)](he,Ge,null,n[p(207)](fl,r[p(280)],U=>{const de=p;return C[de(316)](se),C[de(216)](he,"button",{class:C[de(302)],key:U.id,onClick:ue=>V(U)},C[de(290)]($e,U[de(371)]),9,yx)}),128)),h[27]||(h[27]=n[p(323)](v,"br",null,null,-1)),h[28]||(h[28]=n.lKXnh(v,"br",null,null,-1))])):ke("",!0),n.BDCfV(v,n[p(206)],{class:"red-bt",onClick:h[4]||(h[4]=U=>j())},n[p(270)]),h[30]||(h[30]=n[p(291)](v,"br",null,null,-1)),h[31]||(h[31]=_e()),h[32]||(h[32]=n[p(277)](v,"br",null,null,-1)),h[33]||(h[33]=n[p(368)](v,"small",null,n.cTxEk,-1)),h[34]||(h[34]=n[p(307)](v,"br",null,null,-1)),h[35]||(h[35]=v("br",null,null,-1))])):ke("",!0),n.VvLUQ(n.AJyXx(be,s)[p(272)],2)?(n.ZJLPY(se),n[p(342)](he,n[p(213)],vx,[h[39]||(h[39]=n.nHByJ(v,"p",null,p(328),-1)),r[p(280)][p(314)]?(n[p(362)](se),n[p(308)](he,n[p(213)],Cx,[h[36]||(h[36]=n.xgIWC(v,"h3",null,n[p(279)],-1)),(se(!0),n[p(373)](he,Ge,null,n[p(295)](fl,r[p(280)],U=>{const de=p;return n[de(299)](se),he(n[de(206)],{class:n[de(292)],key:U.id,onClick:ue=>V(U)},n[de(284)]($e,U[de(371)]),9,bx)}),128)),h[37]||(h[37]=v("br",null,null,-1)),h[38]||(h[38]=n[p(251)](v,"br",null,null,-1))])):n[p(207)](ke,"",!0),l[p(280)]?(se(),he(p(245),Ex,n[p(339)])):ke("",!0),h[40]||(h[40]=n.nHByJ(v,"br",null,null,-1)),h[41]||(h[41]=n.yBGWY(v,"br",null,null,-1)),n[p(357)](v,n[p(206)],{onClick:h[5]||(h[5]=U=>M())},n.OSFTG),h[42]||(h[42]=n[p(351)](v,"br",null,null,-1)),h[43]||(h[43]=v("br",null,null,-1))])):n[p(265)](ke,"",!0),n[p(254)](be,s)[p(272)]===3?(n.jABSa(se),n.BDCfV(he,n.bXVzA,Ix,[n.zvZuo(v,"p",null,[h[44]||(h[44]=_e(p(349))),h[45]||(h[45]=n[p(306)](v,"br",null,null,-1)),n.AmOXE(v,"b",null,$e((b=o[p(280)])==null?void 0:b[p(371)]),1),h[46]||(h[46]=n[p(246)](_e)),h[47]||(h[47]=n.LNAWL(v,"br",null,null,-1)),h[48]||(h[48]=_e(n[p(269)]))]),n[p(308)](v,n[p(206)],{onClick:h[6]||(h[6]=U=>Z())},n[p(232)])])):n[p(350)](ke,"",!0),n.SpcsF(n[p(364)](be,s)[p(272)],4)&&((Te=o[p(280)])!=null&&Te.id)?(n[p(238)](se),n[p(308)](he,n[p(213)],wx,[h[49]||(h[49]=n[p(254)](_e,n.SZpvn)),h[50]||(h[50]=n[p(294)](v,"br",null,null,-1)),h[51]||(h[51]=n.kfaMJ(v,"br",null,null,-1)),n[p(331)](v,"b",null,n.uOqUq($e,o[p(280)][p(371)]),1),h[52]||(h[52]=v("br",null,null,-1)),h[53]||(h[53]=n[p(338)](v,"br",null,null,-1)),n[p(308)](v,n.pVuqf,{class:n[p(292)],onClick:h[7]||(h[7]=U=>Q(!1))},n[p(348)]),n.RCLeR(v,n[p(206)],{class:n.xLFmI,onClick:h[8]||(h[8]=U=>Q(!0))},p(211))])):n[p(257)](ke,"",!0),n.SpcsF(n[p(267)](be,s)[p(272)],5)&&o[p(280)]?(n.vQJXX(se),n[p(308)](he,n.bXVzA,Sx,[h[54]||(h[54]=n.JcHyC(v,"h3",null,p(344),-1)),h[55]||(h[55]=n[p(230)](_e,p(287))),h[56]||(h[56]=n[p(231)](v,"br",null,null,-1)),h[57]||(h[57]=n[p(242)](v,"br",null,null,-1)),n.VnDgW(v,n[p(213)],Tx,[v("b",null,n[p(212)]($e,o[p(280)][p(371)]),1)]),h[58]||(h[58]=n.AmOXE(v,"br",null,null,-1)),h[59]||(h[59]=v("br",null,null,-1)),v(p(245),Nx,[n[p(321)](v,"b",null,n[p(254)]($e,a[p(280)]),1)])])):n[p(350)](ke,"",!0),n.oGSNt(be,s)[p(272)]&&[1,2,3,4,5].includes(be(s).stage)?(se(),n[p(276)](he,n[p(213)],Rx,[h[60]||(h[60]=n[p(343)](v,"hr",null,null,-1)),h[61]||(h[61]=v("br",null,null,-1)),n[p(340)](v,p(245),Ax,$e(n[p(334)](be,s).gameNames[n[p(212)](be,s)[p(305)]]),1),h[62]||(h[62]=n[p(221)](v,"br",null,null,-1)),h[63]||(h[63]=n[p(251)](v,"br",null,null,-1))])):n[p(286)](ke,"",!0),n[p(297)](n.hKZWW(be,s)[p(272)],5)?(n.PNQZM(se),n[p(303)](he,n[p(213)],Px,[v(p(228),{onClick:h[9]||(h[9]=U=>ye())},n[p(237)])])):ke("",!0),h[64]||(h[64]=n[p(242)](v,"br",null,null,-1)),h[65]||(h[65]=n[p(358)](v,"br",null,null,-1))],64)}}}),Dx={class:"game"},Mx={__name:"StartPage",setup(t){return(e,n)=>(se(),he("div",Dx,[n[0]||(n[0]=v("h1",null,"♕",-1)),v("div",null,[Ye(kx)])]))}},Fx=As(Mx,[["__scopeId","data-v-8b01c1fe"]]),io=wi;(function(t,e){const n=wi,s=t();for(;;)try{if(parseInt(n(503))/1*(-parseInt(n(471))/2)+-parseInt(n(485))/3+-parseInt(n(484))/4+parseInt(n(516))/5*(-parseInt(n(473))/6)+-parseInt(n(470))/7*(-parseInt(n(488))/8)+parseInt(n(476))/9+parseInt(n(480))/10*(parseInt(n(469))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Si,162380);function wi(t,e){const n=Si();return wi=function(s,i){return s=s-461,n[s]},wi(t,e)}const Lx={class:"rama"},Bx={style:{"font-size":io(478)}};function Si(){const t=["zLeqb","Locbi","VSDnG","3293521PhyHVl","1043gMBgiV","11626NKEWQA","div","6sOyhmc","OJgwW","XdAen","318042WDslqA","JzYoX","20px","value","10kEiLdX","gameLink","MypOE","ckigd","495200PddItA","47346iWjTqt","StounScissorsPaper","onValue","16640tsSOPs","hvWdn","log","OdtIz","Бумага","lookField","/game/","flLwH","tBzmk",">> ","then","IzPvd","myId","9999999999999","FqOda","12kYTERD","Свериться","Камень ножницы бумага","vSRKl","Iegvc","Zajgj","rjrJQ","rTcLG","BzMmA","RbEOx","bLCxz","YBEni","button","1364755uboyRj","ragMi","nmNhx","Ножницы","GAglV"," Выбери: "];return Si=function(){return t},Si()}const Wx=Li({__name:io(486),setup(t){const e=io,n={flLwH:function(c,a){return c+a},IzPvd:"/games/",MypOE:e(494),WSoWY:e(501),vSRKl:"/game",VSDnG:function(c){return c()},hvWdn:function(c,a,u,d){return c(a,u,d)},Zajgj:e(472),YBEni:function(c,a,u,d,g){return c(a,u,d,g)},rsGqY:function(c,a,u,d,g){return c(a,u,d,g)},nmNhx:e(505),rTcLG:function(c,a,u,d,g){return c(a,u,d,g)},XdAen:e(465),mQdee:function(c,a,u,d,g){return c(a,u,d,g)},yvzQY:function(c,a){return c(a)},OdtIz:function(c,a){return c===a},ckigd:"Камень",RbEOx:function(c,a,u,d,g){return c(a,u,d,g)},rjrJQ:function(c,a,u,d,g){return c(a,u,d,g)},FqOda:"button",bmUVJ:function(c,a){return c===a},ragMi:e(463),JzYoX:function(c,a,u,d,g){return c(a,u,d,g)},Iegvc:function(c,a){return c(a)},Locbi:e(492),tBzmk:"green-bt",bLCxz:" << ",BzMmA:function(c,a){return c(a)},OJgwW:function(c,a){return c(a)},zLeqb:function(c){return c()},GAglV:function(c,a,u){return c(a,u)}},s=n[e(468)](tr),i=n[e(474)](Ke,0),r=n[e(466)](Ke);n[e(464)](Ot,()=>s[e(493)],c=>o(c));function o(c){console[e(490)]("res=",c),r.value=c}function l(){const c=e;s.setField(n[c(495)](n[c(495)](n[c(499)],s[c(481)]),n[c(482)])+s[c(500)],{q:i[c(479)]})[c(498)](a=>{console[c(490)]("!!! res",a)})}return Co(()=>{const c=e;console[c(490)](n.WSoWY),s[c(487)](n[c(499)]+s[c(481)]+n[c(506)])}),(c,a)=>{const u=e;return n.VSDnG(se),n[u(489)](he,n[u(508)],Lx,[a[4]||(a[4]=n.YBEni(v,"br",null,null,-1)),a[5]||(a[5]=n.rsGqY(v,"h2",null,n[u(462)],-1)),a[6]||(a[6]=n.rTcLG(v,"br",null,null,-1)),a[7]||(a[7]=v("br",null,null,-1)),a[8]||(a[8]=_e(n[u(475)])),a[9]||(a[9]=n.mQdee(v,"br",null,null,-1)),a[10]||(a[10]=n.mQdee(v,"br",null,null,-1)),a[11]||(a[11]=v("br",null,null,-1)),n[u(514)](v,u(515),{class:n.yvzQY(mn,{active:n[u(491)](i.value,1)}),onClick:a[0]||(a[0]=d=>i[u(479)]=1)},n[u(483)],2),a[12]||(a[12]=v("br",null,null,-1)),a[13]||(a[13]=n.RbEOx(v,"br",null,null,-1)),n[u(509)](v,n[u(502)],{class:mn({active:n.bmUVJ(i.value,2)}),onClick:a[1]||(a[1]=d=>i.value=2)},n[u(461)],2),a[14]||(a[14]=n[u(477)](v,"br",null,null,-1)),a[15]||(a[15]=v("br",null,null,-1)),n[u(514)](v,u(515),{class:n.Iegvc(mn,{active:i[u(479)]===3}),onClick:a[2]||(a[2]=d=>i[u(479)]=3)},n[u(467)],2),a[16]||(a[16]=n.rsGqY(v,"br",null,null,-1)),a[17]||(a[17]=v("br",null,null,-1)),a[18]||(a[18]=n[u(510)](v,"br",null,null,-1)),a[19]||(a[19]=n[u(512)](v,"br",null,null,-1)),a[20]||(a[20]=n[u(477)](v,"br",null,null,-1)),a[21]||(a[21]=n[u(510)](v,"br",null,null,-1)),n[u(489)](v,n.FqOda,{class:n[u(496)],onClick:a[3]||(a[3]=d=>l())},u(504)),a[22]||(a[22]=n[u(512)](v,"br",null,null,-1)),a[23]||(a[23]=n[u(507)](_e,n[u(513)])),n[u(510)](v,"b",Bx,n[u(507)]($e,r[u(479)]),1),a[24]||(a[24]=n[u(511)](_e,u(497)))])}}}),Hx=As(Wx,[["__scopeId","data-v-76e068d9"]]),Ux={};function Vx(t,e){return se(),he(Ge,null,[e[0]||(e[0]=v("h3",null,"Крестики нолики!!!",-1)),e[1]||(e[1]=v("br",null,null,-1)),e[2]||(e[2]=v("br",null,null,-1))],64)}const jx=As(Ux,[["render",Vx]]),$x={};function zx(t,e){return" SeaWar "}const Gx=As($x,[["render",zx]]),qx={__name:"App",setup(t){const e=tr();let n=uf(Fx);Ot(()=>e.playNumber,i=>{console.log("- - - - - - - res",i),s(i)});function s(i){switch(console.log(i),i){case 1:n.value=Hx;break;case 2:n.value=jx;break;case 3:n.value=Gx;break}}return Co(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.myId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||0,e.myName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(i,r)=>(se(),Ba(Wf(be(n))))}},Oc=Ni;(function(t,e){const n=Ni,s=t();for(;;)try{if(parseInt(n(430))/1+parseInt(n(433))/2+-parseInt(n(427))/3+-parseInt(n(432))/4+parseInt(n(436))/5+-parseInt(n(428))/6*(parseInt(n(426))/7)+-parseInt(n(434))/8*(parseInt(n(431))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ti,749092);function Ti(){const t=["2336764nFwQhp","2543988EkbLvl","4776dOWkQl","#app","4307860PdhVUG","208376ScgWJO","1034154TnFMVR","18vChyKi","use","403272gvCHTW","11601bljWZC"];return Ti=function(){return t},Ti()}function Ni(t,e){const n=Ti();return Ni=function(s,i){return s=s-426,n[s]},Ni(t,e)}const Kx=sp(),kc=ep(qx);kc[Oc(429)](Kx),kc.mount(Oc(435));
