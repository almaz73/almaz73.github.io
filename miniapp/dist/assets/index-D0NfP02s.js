function Gs(){const t=["lXfBN","referrerPolicy","1690938TAGOPW","2264740TywxrG","29820DWxmnJ","LINK","974cZfMjj","include","rel","anonymous","link","kNnii","IQauJ","5bxNCGV","939575FGMFYf","modulepreload","crossOrigin",'link[rel="modulepreload"]',"ECFSa","5853EDKgBW","9LUHtpV","bzgSl","40082xuKjNY","createElement","childList","querySelectorAll","RlFvx","href","312mNhEME","583AXoZGy","SyTSQ","addedNodes","credentials","supports","2772164COQxEA","omit","jdcaH","integrity","same-origin","FHTLy","vKtYI","observe"];return Gs=function(){return t},Gs()}function $s(t,e){const n=Gs();return $s=function(s,i){return s=s-193,n[s]},$s(t,e)}(function(t,e){const n=$s,s=t();for(;;)try{if(-parseInt(n(208))/1+-parseInt(n(200))/2*(-parseInt(n(213))/3)+parseInt(n(228))/4*(parseInt(n(207))/5)+-parseInt(n(196))/6+-parseInt(n(216))/7*(-parseInt(n(222))/8)+parseInt(n(214))/9*(-parseInt(n(197))/10)+-parseInt(n(223))/11*(-parseInt(n(198))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Gs,550325),function(){const e=$s,n={kNnii:function(o,l){return o!==l},FHTLy:e(218),VPBWf:function(o,l){return o===l},bzgSl:e(199),RlFvx:e(209),ECFSa:"use-credentials",lXfBN:e(201),jdcaH:function(o,l){return o===l},KnfPg:e(203),SyTSQ:e(229),vKtYI:e(232),IQauJ:function(o,l,c){return o(l,c)},oYCeI:e(204)},s=document[e(217)](n.oYCeI).relList;if(s&&s[e(227)]&&s[e(227)](n[e(220)]))return;for(const o of document[e(219)](e(211)))r(o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(205)](c.type,n[l(233)]))for(const a of c[l(225)])n.VPBWf(a.tagName,n[l(215)])&&n.VPBWf(a[l(202)],n[l(220)])&&r(a)})[e(193)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o.integrity&&(c.integrity=o[l(231)]),o[l(195)]&&(c[l(195)]=o.referrerPolicy),n.VPBWf(o[l(210)],n[l(212)])?c[l(226)]=n[l(194)]:n[l(230)](o.crossOrigin,n.KnfPg)?c[l(226)]=n[l(224)]:c[l(226)]=n[l(234)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=i(o);n[l(206)](fetch,o[l(221)],c)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},_n=[],ht=()=>{},Lf=()=>!1,Li=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fo=t=>t.startsWith("onUpdate:"),Ae=Object.assign,ho=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bf=Object.prototype.hasOwnProperty,te=(t,e)=>Bf.call(t,e),U=Array.isArray,gn=t=>Bi(t)==="[object Map]",Bc=t=>Bi(t)==="[object Set]",H=t=>typeof t=="function",me=t=>typeof t=="string",Ht=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Wc=t=>(pe(t)||H(t))&&H(t.then)&&H(t.catch),Uc=Object.prototype.toString,Bi=t=>Uc.call(t),Wf=t=>Bi(t).slice(8,-1),Hc=t=>Bi(t)==="[object Object]",po=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$n=uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uf=/-(\w)/g,Je=Wi(t=>t.replace(Uf,(e,n)=>n?n.toUpperCase():"")),Hf=/\B([A-Z])/g,ln=Wi(t=>t.replace(Hf,"-$1").toLowerCase()),Ui=Wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=Wi(t=>t?`on${Ui(t)}`:""),Pt=(t,e)=>!Object.is(t,e),Us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Pr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fl;const Hi=()=>fl||(fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _o(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=me(s)?$f(s):_o(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(me(t)||pe(t))return t}const Vf=/;(?![^(]*\))/g,jf=/:([^]+)/,Gf=/\/\*[^]*?\*\//g;function $f(t){const e={};return t.replace(Gf,"").split(Vf).forEach(n=>{if(n){const s=n.split(jf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xn(t){let e="";if(me(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=xn(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zf=uo(Kf);function jc(t){return!!t||t===""}const Gc=t=>!!(t&&t.__v_isRef===!0),De=t=>me(t)?t:t==null?"":U(t)||pe(t)&&(t.toString===Uc||!H(t.toString))?Gc(t)?De(t.value):JSON.stringify(t,$c,2):String(t),$c=(t,e)=>Gc(e)?$c(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ur(s,r)+" =>"]=i,n),{})}:Bc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ur(n))}:Ht(e)?ur(e):pe(e)&&!U(e)&&!Hc(e)?String(e):e,ur=(t,e="")=>{var n;return Ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Kc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function zc(t){return new Kc(t)}function Yc(){return Oe}function Yf(t,e=!1){Oe&&Oe.cleanups.push(t)}let ue;const fr=new WeakSet;class qc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fr.has(this)&&(fr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hl(this),Xc(this);const e=ue,n=nt;ue=this,nt=!0;try{return this.fn()}finally{Zc(this),ue=e,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mo(e);this.deps=this.depsTail=void 0,hl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Dr(this)&&this.run()}get dirty(){return Dr(this)}}let Qc=0,Kn,zn;function Jc(t,e=!1){if(t.flags|=8,e){t.next=zn,zn=t;return}t.next=Kn,Kn=t}function go(){Qc++}function xo(){if(--Qc>0)return;if(zn){let e=zn;for(zn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Kn;){let e=Kn;for(Kn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Xc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),mo(s),qf(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Dr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ea(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ea(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===is))return;t.globalVersion=is;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Dr(t)){t.flags&=-3;return}const n=ue,s=nt;ue=t,nt=!0;try{Xc(t);const i=t.fn(t._value);(e.version===0||Pt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ue=n,nt=s,Zc(t),t.flags&=-3}}function mo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)mo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nt=!0;const ta=[];function Vt(){ta.push(nt),nt=!1}function jt(){const t=ta.pop();nt=t===void 0?!0:t}function hl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ue;ue=void 0;try{e()}finally{ue=n}}}let is=0;class Qf{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ue||!nt||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new Qf(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,na(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=s)}return n}trigger(e){this.version++,is++,this.notify(e)}notify(e){go();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xo()}}}function na(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)na(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ks=new WeakMap,Zt=Symbol(""),Or=Symbol(""),rs=Symbol("");function Te(t,e,n){if(nt&&ue){let s=Ks.get(t);s||Ks.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new yo),i.map=s,i.key=n),i.track()}}function mt(t,e,n,s,i,r){const o=Ks.get(t);if(!o){is++;return}const l=c=>{c&&c.trigger()};if(go(),e==="clear")o.forEach(l);else{const c=U(t),a=c&&po(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,g)=>{(g==="length"||g===rs||!Ht(g)&&g>=u)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(rs)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Zt)),gn(t)&&l(o.get(Or)));break;case"delete":c||(l(o.get(Zt)),gn(t)&&l(o.get(Or)));break;case"set":gn(t)&&l(o.get(Zt));break}}xo()}function Jf(t,e){const n=Ks.get(t);return n&&n.get(e)}function an(t){const e=X(t);return e===t?e:(Te(e,"iterate",rs),qe(t)?e:e.map(Re))}function Vi(t){return Te(t=X(t),"iterate",rs),t}const Xf={__proto__:null,[Symbol.iterator](){return hr(this,Symbol.iterator,Re)},concat(...t){return an(this).concat(...t.map(e=>U(e)?an(e):e))},entries(){return hr(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return gt(this,"every",t,e,void 0,arguments)},filter(t,e){return gt(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return gt(this,"find",t,e,Re,arguments)},findIndex(t,e){return gt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gt(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return gt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gt(this,"forEach",t,e,void 0,arguments)},includes(...t){return dr(this,"includes",t)},indexOf(...t){return dr(this,"indexOf",t)},join(t){return an(this).join(t)},lastIndexOf(...t){return dr(this,"lastIndexOf",t)},map(t,e){return gt(this,"map",t,e,void 0,arguments)},pop(){return Ln(this,"pop")},push(...t){return Ln(this,"push",t)},reduce(t,...e){return dl(this,"reduce",t,e)},reduceRight(t,...e){return dl(this,"reduceRight",t,e)},shift(){return Ln(this,"shift")},some(t,e){return gt(this,"some",t,e,void 0,arguments)},splice(...t){return Ln(this,"splice",t)},toReversed(){return an(this).toReversed()},toSorted(t){return an(this).toSorted(t)},toSpliced(...t){return an(this).toSpliced(...t)},unshift(...t){return Ln(this,"unshift",t)},values(){return hr(this,"values",Re)}};function hr(t,e,n){const s=Vi(t),i=s[e]();return s!==t&&!qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Zf=Array.prototype;function gt(t,e,n,s,i,r){const o=Vi(t),l=o!==t&&!qe(t),c=o[e];if(c!==Zf[e]){const p=c.apply(t,r);return l?Re(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Re(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function dl(t,e,n,s){const i=Vi(t);let r=n;return i!==t&&(qe(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Re(l),c,t)}),i[e](r,...s)}function dr(t,e,n){const s=X(t);Te(s,"iterate",rs);const i=s[e](...n);return(i===-1||i===!1)&&Co(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function Ln(t,e,n=[]){Vt(),go();const s=X(t)[e].apply(t,n);return xo(),jt(),s}const eh=uo("__proto__,__v_isRef,__isVue"),sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ht));function th(t){Ht(t)||(t=String(t));const e=X(this);return Te(e,"has",t),e.hasOwnProperty(t)}class ia{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?fh:ca:r?la:oa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let c;if(o&&(c=Xf[n]))return c;if(n==="hasOwnProperty")return th}const l=Reflect.get(e,n,xe(e)?e:s);return(Ht(n)?sa.has(n):eh(n))||(i||Te(e,"get",n),r)?l:xe(l)?o&&po(n)?l:l.value:pe(l)?i?aa(l):ji(l):l}}class ra extends ia{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=tn(r);if(!qe(s)&&!tn(s)&&(r=X(r),s=X(s)),!U(e)&&xe(r)&&!xe(s))return c?!1:(r.value=s,!0)}const o=U(e)&&po(n)?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,xe(e)?e:i);return e===X(i)&&(o?Pt(s,r)&&mt(e,"set",n,s):mt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&mt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ht(n)||!sa.has(n))&&Te(e,"has",n),s}ownKeys(e){return Te(e,"iterate",U(e)?"length":Zt),Reflect.ownKeys(e)}}class nh extends ia{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const sh=new ra,ih=new nh,rh=new ra(!0);const Mr=t=>t,Ds=t=>Reflect.getPrototypeOf(t);function oh(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=gn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Mr:e?Fr:Re;return!e&&Te(r,"iterate",c?Or:Zt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function Os(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lh(t,e){const n={get(i){const r=this.__v_raw,o=X(r),l=X(i);t||(Pt(i,l)&&Te(o,"get",i),Te(o,"get",l));const{has:c}=Ds(o),a=e?Mr:t?Fr:Re;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Te(X(i),"iterate",Zt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),l=X(i);return t||(Pt(i,l)&&Te(o,"has",i),Te(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=X(l),a=e?Mr:t?Fr:Re;return!t&&Te(c,"iterate",Zt),l.forEach((u,p)=>i.call(r,a(u),a(p),o))}};return Ae(n,t?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(i){!e&&!qe(i)&&!tn(i)&&(i=X(i));const r=X(this);return Ds(r).has.call(r,i)||(r.add(i),mt(r,"add",i,i)),this},set(i,r){!e&&!qe(r)&&!tn(r)&&(r=X(r));const o=X(this),{has:l,get:c}=Ds(o);let a=l.call(o,i);a||(i=X(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?Pt(r,u)&&mt(o,"set",i,r):mt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:l}=Ds(r);let c=o.call(r,i);c||(i=X(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&mt(r,"delete",i,void 0),a},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&mt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=oh(i,t,e)}),n}function bo(t,e){const n=lh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const ch={get:bo(!1,!1)},ah={get:bo(!1,!0)},uh={get:bo(!0,!1)};const oa=new WeakMap,la=new WeakMap,ca=new WeakMap,fh=new WeakMap;function hh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dh(t){return t.__v_skip||!Object.isExtensible(t)?0:hh(Wf(t))}function ji(t){return tn(t)?t:vo(t,!1,sh,ch,oa)}function ph(t){return vo(t,!1,rh,ah,la)}function aa(t){return vo(t,!0,ih,uh,ca)}function vo(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=dh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Dt(t){return tn(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function tn(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function Co(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Eo(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Vc(t,"__v_skip",!0),t}const Re=t=>pe(t)?ji(t):t,Fr=t=>pe(t)?aa(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function Be(t){return ua(t,!1)}function _h(t){return ua(t,!0)}function ua(t,e){return xe(t)?t:new gh(t,e)}class gh{constructor(e,n){this.dep=new yo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||qe(e)||tn(e);e=s?e:X(e),Pt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function we(t){return xe(t)?t.value:t}const xh={get:(t,e,n)=>e==="__v_raw"?t:we(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function fa(t){return Dt(t)?t:new Proxy(t,xh)}function mh(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=bh(t,n);return e}class yh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Jf(X(this._object),this._key)}}function bh(t,e,n){const s=t[e];return xe(s)?s:new yh(t,e,n)}class vh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return Jc(this,!0),!0}get value(){const e=this.dep.track();return ea(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ch(t,e,n=!1){let s,i;return H(t)?s=t:(s=t.get,i=t.set),new vh(s,i,n)}const Ms={},zs=new WeakMap;let Yt;function Eh(t,e=!1,n=Yt){if(n){let s=zs.get(n);s||zs.set(n,s=[]),s.push(t)}}function Ih(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=F=>i?F:qe(F)||i===!1||i===0?yt(F,1):yt(F);let u,p,g,m,I=!1,O=!1;if(xe(t)?(p=()=>t.value,I=qe(t)):Dt(t)?(p=()=>a(t),I=!0):U(t)?(O=!0,I=t.some(F=>Dt(F)||qe(F)),p=()=>t.map(F=>{if(xe(F))return F.value;if(Dt(F))return a(F);if(H(F))return c?c(F,2):F()})):H(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Vt();try{g()}finally{jt()}}const F=Yt;Yt=u;try{return c?c(t,3,[m]):t(m)}finally{Yt=F}}:p=ht,e&&i){const F=p,Q=i===!0?1/0:i;p=()=>yt(F(),Q)}const j=Yc(),V=()=>{u.stop(),j&&j.active&&ho(j.effects,u)};if(r&&e){const F=e;e=(...Q)=>{F(...Q),V()}}let q=O?new Array(t.length).fill(Ms):Ms;const ee=F=>{if(!(!(u.flags&1)||!u.dirty&&!F))if(e){const Q=u.run();if(i||I||(O?Q.some((Xe,ye)=>Pt(Xe,q[ye])):Pt(Q,q))){g&&g();const Xe=Yt;Yt=u;try{const ye=[Q,q===Ms?void 0:O&&q[0]===Ms?[]:q,m];c?c(e,3,ye):e(...ye),q=Q}finally{Yt=Xe}}}else u.run()};return l&&l(ee),u=new qc(p),u.scheduler=o?()=>o(ee,!1):ee,m=F=>Eh(F,!1,u),g=u.onStop=()=>{const F=zs.get(u);if(F){if(c)c(F,4);else for(const Q of F)Q();zs.delete(u)}},e?s?ee(!0):q=u.run():o?o(ee.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function yt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xe(t))yt(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)yt(t[s],e,n);else if(Bc(t)||gn(t))t.forEach(s=>{yt(s,e,n)});else if(Hc(t)){for(const s in t)yt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&yt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bs(t,e,n,s){try{return s?t(...s):t()}catch(i){Gi(i,e,n)}}function pt(t,e,n,s){if(H(t)){const i=bs(t,e,n,s);return i&&Wc(i)&&i.catch(r=>{Gi(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(pt(t[r],e,n,s));return i}}function Gi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,c,a)===!1)return}l=l.parent}if(r){Vt(),bs(r,null,10,[t,c,a]),jt();return}}wh(t,n,i,s,o)}function wh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Me=[];let at=-1;const mn=[];let At=null,hn=0;const ha=Promise.resolve();let Ys=null;function da(t){const e=Ys||ha;return t?e.then(this?t.bind(this):t):e}function Sh(t){let e=at+1,n=Me.length;for(;e<n;){const s=e+n>>>1,i=Me[s],r=os(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Io(t){if(!(t.flags&1)){const e=os(t),n=Me[Me.length-1];!n||!(t.flags&2)&&e>=os(n)?Me.push(t):Me.splice(Sh(e),0,t),t.flags|=1,pa()}}function pa(){Ys||(Ys=ha.then(ga))}function Th(t){U(t)?mn.push(...t):At&&t.id===-1?At.splice(hn+1,0,t):t.flags&1||(mn.push(t),t.flags|=1),pa()}function pl(t,e,n=at+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function _a(t){if(mn.length){const e=[...new Set(mn)].sort((n,s)=>os(n)-os(s));if(mn.length=0,At){At.push(...e);return}for(At=e,hn=0;hn<At.length;hn++){const n=At[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}At=null,hn=0}}const os=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ga(t){try{for(at=0;at<Me.length;at++){const e=Me[at];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;at<Me.length;at++){const e=Me[at];e&&(e.flags&=-2)}at=-1,Me.length=0,_a(),Ys=null,(Me.length||mn.length)&&ga()}}let We=null,xa=null;function qs(t){const e=We;return We=t,xa=t&&t.type.__scopeId||null,e}function Rh(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&wl(-1);const r=qs(e);let o;try{o=t(...i)}finally{qs(r),s._d&&wl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Nh(t,e){if(We===null)return t;const n=Yi(We),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=re]=e[i];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&yt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Vt(),pt(c,n,8,[t.el,l,t,e]),jt())}}const Ah=Symbol("_vte"),kh=t=>t.__isTeleport;function wo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Tn(t,e){return H(t)?Ae({name:t.name},e,{setup:t}):t}function ma(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qs(t,e,n,s,i=!1){if(U(t)){t.forEach((I,O)=>Qs(I,e&&(U(e)?e[O]:e),n,s,i));return}if(Yn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Qs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Yi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===re?l.refs={}:l.refs,p=l.setupState,g=X(p),m=p===re?()=>!1:I=>te(g,I);if(a!=null&&a!==c&&(me(a)?(u[a]=null,m(a)&&(p[a]=null)):xe(a)&&(a.value=null)),H(c))bs(c,l,12,[o,u]);else{const I=me(c),O=xe(c);if(I||O){const j=()=>{if(t.f){const V=I?m(c)?p[c]:u[c]:c.value;i?U(V)&&ho(V,r):U(V)?V.includes(r)||V.push(r):I?(u[c]=[r],m(c)&&(p[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else I?(u[c]=o,m(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,Ke(j,n)):j()}}}Hi().requestIdleCallback;Hi().cancelIdleCallback;const Yn=t=>!!t.type.__asyncLoader,ya=t=>t.type.__isKeepAlive;function Ph(t,e){ba(t,"a",e)}function Dh(t,e){ba(t,"da",e)}function ba(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($i(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ya(i.parent.vnode)&&Oh(s,e,n,i),i=i.parent}}function Oh(t,e,n,s){const i=$i(e,t,s,!0);va(()=>{ho(s[e],i)},n)}function $i(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vt();const l=Cs(n),c=pt(e,n,t,o);return l(),jt(),c});return s?i.unshift(r):i.push(r),r}}const wt=t=>(e,n=Se)=>{(!cs||t==="sp")&&$i(t,(...s)=>e(...s),n)},Mh=wt("bm"),vs=wt("m"),Fh=wt("bu"),Lh=wt("u"),Bh=wt("bum"),va=wt("um"),Wh=wt("sp"),Uh=wt("rtg"),Hh=wt("rtc");function Vh(t,e=Se){$i("ec",t,e)}const jh="components",Ca=Symbol.for("v-ndc");function Gh(t){return me(t)?$h(jh,t,!1)||t:t||Ca}function $h(t,e,n=!0,s=!1){const i=We||Se;if(i){const r=i.type;{const l=Dd(r,!1);if(l&&(l===e||l===Je(e)||l===Ui(Je(e))))return r}const o=_l(i[t]||r[t],e)||_l(i.appContext[t],e);return!o&&s?r:o}}function _l(t,e){return t&&(t[e]||t[Je(e)]||t[Ui(Je(e))])}function gl(t,e,n,s){let i;const r=n&&n[s],o=U(t);if(o||me(t)){const l=o&&Dt(t);let c=!1;l&&(c=!qe(t),t=Vi(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Re(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Lr=t=>t?$a(t)?Yi(t):Lr(t.parent):null,qn=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lr(t.parent),$root:t=>Lr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ia(t),$forceUpdate:t=>t.f||(t.f=()=>{Io(t.update)}),$nextTick:t=>t.n||(t.n=da.bind(t.proxy)),$watch:t=>pd.bind(t)}),pr=(t,e)=>t!==re&&!t.__isScriptSetup&&te(t,e),Kh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(pr(s,e))return o[e]=1,s[e];if(i!==re&&te(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&te(a,e))return o[e]=3,r[e];if(n!==re&&te(n,e))return o[e]=4,n[e];Br&&(o[e]=0)}}const u=qn[e];let p,g;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==re&&te(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,te(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return pr(i,e)?(i[e]=n,!0):s!==re&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==re&&te(t,o)||pr(e,o)||(l=r[0])&&te(l,o)||te(s,o)||te(qn,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xl(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Br=!0;function zh(t){const e=Ia(t),n=t.proxy,s=t.ctx;Br=!1,e.beforeCreate&&ml(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:p,mounted:g,beforeUpdate:m,updated:I,activated:O,deactivated:j,beforeDestroy:V,beforeUnmount:q,destroyed:ee,unmounted:F,render:Q,renderTracked:Xe,renderTriggered:ye,errorCaptured:h,serverPrefetch:f,expose:d,inheritAttrs:w,components:C,directives:k,filters:J}=e;if(a&&Yh(a,s,null),o)for(const z in o){const le=o[z];H(le)&&(s[z]=le.bind(n))}if(i){const z=i.call(n,n);pe(z)&&(t.data=ji(z))}if(Br=!0,r)for(const z in r){const le=r[z],Gt=H(le)?le.bind(n,n):H(le.get)?le.get.bind(n,n):ht,ks=!H(le)&&H(le.set)?le.set.bind(n):ht,$t=za({get:Gt,set:ks});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>$t.value,set:it=>$t.value=it})}if(l)for(const z in l)Ea(l[z],s,n,z);if(c){const z=H(c)?c.call(n):c;Reflect.ownKeys(z).forEach(le=>{ed(le,z[le])})}u&&ml(u,t,"c");function ge(z,le){U(le)?le.forEach(Gt=>z(Gt.bind(n))):le&&z(le.bind(n))}if(ge(Mh,p),ge(vs,g),ge(Fh,m),ge(Lh,I),ge(Ph,O),ge(Dh,j),ge(Vh,h),ge(Hh,Xe),ge(Uh,ye),ge(Bh,q),ge(va,F),ge(Wh,f),U(d))if(d.length){const z=t.exposed||(t.exposed={});d.forEach(le=>{Object.defineProperty(z,le,{get:()=>n[le],set:Gt=>n[le]=Gt})})}else t.exposed||(t.exposed={});Q&&t.render===ht&&(t.render=Q),w!=null&&(t.inheritAttrs=w),C&&(t.components=C),k&&(t.directives=k),f&&ma(t)}function Yh(t,e,n=ht){U(t)&&(t=Wr(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=Qn(i.from||s,i.default,!0):r=Qn(i.from||s):r=Qn(i),xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ml(t,e,n){pt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ea(t,e,n,s){let i=s.includes(".")?Ba(n,s):()=>n[s];if(me(t)){const r=e[t];H(r)&&dt(i,r)}else if(H(t))dt(i,t.bind(n));else if(pe(t))if(U(t))t.forEach(r=>Ea(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&dt(i,r,t)}}function Ia(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Js(c,a,o,!0)),Js(c,e,o)),pe(e)&&r.set(e,c),c}function Js(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Js(t,r,n,!0),i&&i.forEach(o=>Js(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=qh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const qh={data:yl,props:bl,emits:bl,methods:Gn,computed:Gn,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Gn,directives:Gn,watch:Jh,provide:yl,inject:Qh};function yl(t,e){return e?t?function(){return Ae(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Qh(t,e){return Gn(Wr(t),Wr(e))}function Wr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Gn(t,e){return t?Ae(Object.create(null),t,e):e}function bl(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Ae(Object.create(null),xl(t),xl(e??{})):e}function Jh(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=ke(t[s],e[s]);return n}function wa(){return{app:null,config:{isNativeTag:Lf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xh=0;function Zh(t,e){return function(s,i=null){H(s)||(s=Ae({},s)),i!=null&&!pe(i)&&(i=null);const r=wa(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Xh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Md,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(a,...p)):H(u)&&(o.add(u),u(a,...p))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,p){return p?(r.components[u]=p,a):r.components[u]},directive(u,p){return p?(r.directives[u]=p,a):r.directives[u]},mount(u,p,g){if(!c){const m=a._ceVNode||Qe(s,i);return m.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(m,u,g),c=!0,a._container=u,u.__vue_app__=a,Yi(m.component)}},onUnmount(u){l.push(u)},unmount(){c&&(pt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,p){return r.provides[u]=p,a},runWithContext(u){const p=en;en=a;try{return u()}finally{en=p}}};return a}}let en=null;function ed(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function Qn(t,e,n=!1){const s=Se||We;if(s||en){const i=en?en._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function td(){return!!(Se||We||en)}const Sa={},Ta=()=>Object.create(Sa),Ra=t=>Object.getPrototypeOf(t)===Sa;function nd(t,e,n,s=!1){const i={},r=Ta();t.propsDefaults=Object.create(null),Na(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ph(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function sd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(Ki(t.emitsOptions,g))continue;const m=e[g];if(c)if(te(r,g))m!==r[g]&&(r[g]=m,a=!0);else{const I=Je(g);i[I]=Ur(c,l,I,m,t,!1)}else m!==r[g]&&(r[g]=m,a=!0)}}}else{Na(t,e,i,r)&&(a=!0);let u;for(const p in l)(!e||!te(e,p)&&((u=ln(p))===p||!te(e,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=Ur(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!te(e,p))&&(delete r[p],a=!0)}a&&mt(t.attrs,"set","")}function Na(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if($n(c))continue;const a=e[c];let u;i&&te(i,u=Je(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ki(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=X(n),a=l||re;for(let u=0;u<r.length;u++){const p=r[u];n[p]=Ur(i,c,p,a[p],t,!te(a,p))}}return o}function Ur(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=te(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=Cs(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===ln(n))&&(s=!0))}return s}const id=new WeakMap;function Aa(t,e,n=!1){const s=n?id:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!H(t)){const u=p=>{c=!0;const[g,m]=Aa(p,e,!0);Ae(o,g),m&&l.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return pe(t)&&s.set(t,_n),_n;if(U(r))for(let u=0;u<r.length;u++){const p=Je(r[u]);vl(p)&&(o[p]=re)}else if(r)for(const u in r){const p=Je(u);if(vl(p)){const g=r[u],m=o[p]=U(g)||H(g)?{type:g}:Ae({},g),I=m.type;let O=!1,j=!0;if(U(I))for(let V=0;V<I.length;++V){const q=I[V],ee=H(q)&&q.name;if(ee==="Boolean"){O=!0;break}else ee==="String"&&(j=!1)}else O=H(I)&&I.name==="Boolean";m[0]=O,m[1]=j,(O||te(m,"default"))&&l.push(p)}}const a=[o,l];return pe(t)&&s.set(t,a),a}function vl(t){return t[0]!=="$"&&!$n(t)}const ka=t=>t[0]==="_"||t==="$stable",So=t=>U(t)?t.map(ft):[ft(t)],rd=(t,e,n)=>{if(e._n)return e;const s=Rh((...i)=>So(e(...i)),n);return s._c=!1,s},Pa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ka(i))continue;const r=t[i];if(H(r))e[i]=rd(i,r,s);else if(r!=null){const o=So(r);e[i]=()=>o}}},Da=(t,e)=>{const n=So(e);t.slots.default=()=>n},Oa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},od=(t,e,n)=>{const s=t.slots=Ta();if(t.vnode.shapeFlag&32){const i=e._;i?(Oa(s,e,n),n&&Vc(s,"_",i,!0)):Pa(e,s)}else e&&Da(t,e)},ld=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Oa(i,e,n):(r=!e.$stable,Pa(e,i)),o=e}else e&&(Da(t,e),o={default:1});if(r)for(const l in i)!ka(l)&&o[l]==null&&delete i[l]},Ke=vd;function cd(t){return ad(t)}function ad(t,e){const n=Hi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:p,nextSibling:g,setScopeId:m=ht,insertStaticContent:I}=t,O=(_,x,b,S=null,v=null,E=null,P=void 0,A=null,N=!!x.dynamicChildren)=>{if(_===x)return;_&&!Bn(_,x)&&(S=Ps(_),it(_,v,E,!0),_=null),x.patchFlag===-2&&(N=!1,x.dynamicChildren=null);const{type:T,ref:L,shapeFlag:D}=x;switch(T){case zi:j(_,x,b,S);break;case nn:V(_,x,b,S);break;case gr:_==null&&q(x,b,S,P);break;case Ye:C(_,x,b,S,v,E,P,A,N);break;default:D&1?Q(_,x,b,S,v,E,P,A,N):D&6?k(_,x,b,S,v,E,P,A,N):(D&64||D&128)&&T.process(_,x,b,S,v,E,P,A,N,Mn)}L!=null&&v&&Qs(L,_&&_.ref,E,x||_,!x)},j=(_,x,b,S)=>{if(_==null)s(x.el=l(x.children),b,S);else{const v=x.el=_.el;x.children!==_.children&&a(v,x.children)}},V=(_,x,b,S)=>{_==null?s(x.el=c(x.children||""),b,S):x.el=_.el},q=(_,x,b,S)=>{[_.el,_.anchor]=I(_.children,x,b,S,_.el,_.anchor)},ee=({el:_,anchor:x},b,S)=>{let v;for(;_&&_!==x;)v=g(_),s(_,b,S),_=v;s(x,b,S)},F=({el:_,anchor:x})=>{let b;for(;_&&_!==x;)b=g(_),i(_),_=b;i(x)},Q=(_,x,b,S,v,E,P,A,N)=>{x.type==="svg"?P="svg":x.type==="math"&&(P="mathml"),_==null?Xe(x,b,S,v,E,P,A,N):f(_,x,v,E,P,A,N)},Xe=(_,x,b,S,v,E,P,A)=>{let N,T;const{props:L,shapeFlag:D,transition:M,dirs:W}=_;if(N=_.el=o(_.type,E,L&&L.is,L),D&8?u(N,_.children):D&16&&h(_.children,N,null,S,v,_r(_,E),P,A),W&&Kt(_,null,S,"created"),ye(N,_,_.scopeId,P,S),L){for(const ce in L)ce!=="value"&&!$n(ce)&&r(N,ce,null,L[ce],E,S);"value"in L&&r(N,"value",null,L.value,E),(T=L.onVnodeBeforeMount)&&ct(T,S,_)}W&&Kt(_,null,S,"beforeMount");const Y=ud(v,M);Y&&M.beforeEnter(N),s(N,x,b),((T=L&&L.onVnodeMounted)||Y||W)&&Ke(()=>{T&&ct(T,S,_),Y&&M.enter(N),W&&Kt(_,null,S,"mounted")},v)},ye=(_,x,b,S,v)=>{if(b&&m(_,b),S)for(let E=0;E<S.length;E++)m(_,S[E]);if(v){let E=v.subTree;if(x===E||Ua(E.type)&&(E.ssContent===x||E.ssFallback===x)){const P=v.vnode;ye(_,P,P.scopeId,P.slotScopeIds,v.parent)}}},h=(_,x,b,S,v,E,P,A,N=0)=>{for(let T=N;T<_.length;T++){const L=_[T]=A?kt(_[T]):ft(_[T]);O(null,L,x,b,S,v,E,P,A)}},f=(_,x,b,S,v,E,P)=>{const A=x.el=_.el;let{patchFlag:N,dynamicChildren:T,dirs:L}=x;N|=_.patchFlag&16;const D=_.props||re,M=x.props||re;let W;if(b&&zt(b,!1),(W=M.onVnodeBeforeUpdate)&&ct(W,b,x,_),L&&Kt(x,_,b,"beforeUpdate"),b&&zt(b,!0),(D.innerHTML&&M.innerHTML==null||D.textContent&&M.textContent==null)&&u(A,""),T?d(_.dynamicChildren,T,A,b,S,_r(x,v),E):P||le(_,x,A,null,b,S,_r(x,v),E,!1),N>0){if(N&16)w(A,D,M,b,v);else if(N&2&&D.class!==M.class&&r(A,"class",null,M.class,v),N&4&&r(A,"style",D.style,M.style,v),N&8){const Y=x.dynamicProps;for(let ce=0;ce<Y.length;ce++){const ne=Y[ce],Ge=D[ne],Le=M[ne];(Le!==Ge||ne==="value")&&r(A,ne,Ge,Le,v,b)}}N&1&&_.children!==x.children&&u(A,x.children)}else!P&&T==null&&w(A,D,M,b,v);((W=M.onVnodeUpdated)||L)&&Ke(()=>{W&&ct(W,b,x,_),L&&Kt(x,_,b,"updated")},S)},d=(_,x,b,S,v,E,P)=>{for(let A=0;A<x.length;A++){const N=_[A],T=x[A],L=N.el&&(N.type===Ye||!Bn(N,T)||N.shapeFlag&70)?p(N.el):b;O(N,T,L,null,S,v,E,P,!0)}},w=(_,x,b,S,v)=>{if(x!==b){if(x!==re)for(const E in x)!$n(E)&&!(E in b)&&r(_,E,x[E],null,v,S);for(const E in b){if($n(E))continue;const P=b[E],A=x[E];P!==A&&E!=="value"&&r(_,E,A,P,v,S)}"value"in b&&r(_,"value",x.value,b.value,v)}},C=(_,x,b,S,v,E,P,A,N)=>{const T=x.el=_?_.el:l(""),L=x.anchor=_?_.anchor:l("");let{patchFlag:D,dynamicChildren:M,slotScopeIds:W}=x;W&&(A=A?A.concat(W):W),_==null?(s(T,b,S),s(L,b,S),h(x.children||[],b,L,v,E,P,A,N)):D>0&&D&64&&M&&_.dynamicChildren?(d(_.dynamicChildren,M,b,v,E,P,A),(x.key!=null||v&&x===v.subTree)&&Ma(_,x,!0)):le(_,x,b,L,v,E,P,A,N)},k=(_,x,b,S,v,E,P,A,N)=>{x.slotScopeIds=A,_==null?x.shapeFlag&512?v.ctx.activate(x,b,S,P,N):J(x,b,S,v,E,P,N):je(_,x,N)},J=(_,x,b,S,v,E,P)=>{const A=_.component=Rd(_,S,v);if(ya(_)&&(A.ctx.renderer=Mn),Nd(A,!1,P),A.asyncDep){if(v&&v.registerDep(A,ge,P),!_.el){const N=A.subTree=Qe(nn);V(null,N,x,b)}}else ge(A,_,x,b,v,E,P)},je=(_,x,b)=>{const S=x.component=_.component;if(yd(_,x,b))if(S.asyncDep&&!S.asyncResolved){z(S,x,b);return}else S.next=x,S.update();else x.el=_.el,S.vnode=x},ge=(_,x,b,S,v,E,P)=>{const A=()=>{if(_.isMounted){let{next:D,bu:M,u:W,parent:Y,vnode:ce}=_;{const ot=Fa(_);if(ot){D&&(D.el=ce.el,z(_,D,P)),ot.asyncDep.then(()=>{_.isUnmounted||A()});return}}let ne=D,Ge;zt(_,!1),D?(D.el=ce.el,z(_,D,P)):D=ce,M&&Us(M),(Ge=D.props&&D.props.onVnodeBeforeUpdate)&&ct(Ge,Y,D,ce),zt(_,!0);const Le=El(_),rt=_.subTree;_.subTree=Le,O(rt,Le,p(rt.el),Ps(rt),_,v,E),D.el=Le.el,ne===null&&bd(_,Le.el),W&&Ke(W,v),(Ge=D.props&&D.props.onVnodeUpdated)&&Ke(()=>ct(Ge,Y,D,ce),v)}else{let D;const{el:M,props:W}=x,{bm:Y,m:ce,parent:ne,root:Ge,type:Le}=_,rt=Yn(x);zt(_,!1),Y&&Us(Y),!rt&&(D=W&&W.onVnodeBeforeMount)&&ct(D,ne,x),zt(_,!0);{Ge.ce&&Ge.ce._injectChildStyle(Le);const ot=_.subTree=El(_);O(null,ot,b,S,_,v,E),x.el=ot.el}if(ce&&Ke(ce,v),!rt&&(D=W&&W.onVnodeMounted)){const ot=x;Ke(()=>ct(D,ne,ot),v)}(x.shapeFlag&256||ne&&Yn(ne.vnode)&&ne.vnode.shapeFlag&256)&&_.a&&Ke(_.a,v),_.isMounted=!0,x=b=S=null}};_.scope.on();const N=_.effect=new qc(A);_.scope.off();const T=_.update=N.run.bind(N),L=_.job=N.runIfDirty.bind(N);L.i=_,L.id=_.uid,N.scheduler=()=>Io(L),zt(_,!0),T()},z=(_,x,b)=>{x.component=_;const S=_.vnode.props;_.vnode=x,_.next=null,sd(_,x.props,S,b),ld(_,x.children,b),Vt(),pl(_),jt()},le=(_,x,b,S,v,E,P,A,N=!1)=>{const T=_&&_.children,L=_?_.shapeFlag:0,D=x.children,{patchFlag:M,shapeFlag:W}=x;if(M>0){if(M&128){ks(T,D,b,S,v,E,P,A,N);return}else if(M&256){Gt(T,D,b,S,v,E,P,A,N);return}}W&8?(L&16&&On(T,v,E),D!==T&&u(b,D)):L&16?W&16?ks(T,D,b,S,v,E,P,A,N):On(T,v,E,!0):(L&8&&u(b,""),W&16&&h(D,b,S,v,E,P,A,N))},Gt=(_,x,b,S,v,E,P,A,N)=>{_=_||_n,x=x||_n;const T=_.length,L=x.length,D=Math.min(T,L);let M;for(M=0;M<D;M++){const W=x[M]=N?kt(x[M]):ft(x[M]);O(_[M],W,b,null,v,E,P,A,N)}T>L?On(_,v,E,!0,!1,D):h(x,b,S,v,E,P,A,N,D)},ks=(_,x,b,S,v,E,P,A,N)=>{let T=0;const L=x.length;let D=_.length-1,M=L-1;for(;T<=D&&T<=M;){const W=_[T],Y=x[T]=N?kt(x[T]):ft(x[T]);if(Bn(W,Y))O(W,Y,b,null,v,E,P,A,N);else break;T++}for(;T<=D&&T<=M;){const W=_[D],Y=x[M]=N?kt(x[M]):ft(x[M]);if(Bn(W,Y))O(W,Y,b,null,v,E,P,A,N);else break;D--,M--}if(T>D){if(T<=M){const W=M+1,Y=W<L?x[W].el:S;for(;T<=M;)O(null,x[T]=N?kt(x[T]):ft(x[T]),b,Y,v,E,P,A,N),T++}}else if(T>M)for(;T<=D;)it(_[T],v,E,!0),T++;else{const W=T,Y=T,ce=new Map;for(T=Y;T<=M;T++){const $e=x[T]=N?kt(x[T]):ft(x[T]);$e.key!=null&&ce.set($e.key,T)}let ne,Ge=0;const Le=M-Y+1;let rt=!1,ot=0;const Fn=new Array(Le);for(T=0;T<Le;T++)Fn[T]=0;for(T=W;T<=D;T++){const $e=_[T];if(Ge>=Le){it($e,v,E,!0);continue}let lt;if($e.key!=null)lt=ce.get($e.key);else for(ne=Y;ne<=M;ne++)if(Fn[ne-Y]===0&&Bn($e,x[ne])){lt=ne;break}lt===void 0?it($e,v,E,!0):(Fn[lt-Y]=T+1,lt>=ot?ot=lt:rt=!0,O($e,x[lt],b,null,v,E,P,A,N),Ge++)}const al=rt?fd(Fn):_n;for(ne=al.length-1,T=Le-1;T>=0;T--){const $e=Y+T,lt=x[$e],ul=$e+1<L?x[$e+1].el:S;Fn[T]===0?O(null,lt,b,ul,v,E,P,A,N):rt&&(ne<0||T!==al[ne]?$t(lt,b,ul,2):ne--)}}},$t=(_,x,b,S,v=null)=>{const{el:E,type:P,transition:A,children:N,shapeFlag:T}=_;if(T&6){$t(_.component.subTree,x,b,S);return}if(T&128){_.suspense.move(x,b,S);return}if(T&64){P.move(_,x,b,Mn);return}if(P===Ye){s(E,x,b);for(let D=0;D<N.length;D++)$t(N[D],x,b,S);s(_.anchor,x,b);return}if(P===gr){ee(_,x,b);return}if(S!==2&&T&1&&A)if(S===0)A.beforeEnter(E),s(E,x,b),Ke(()=>A.enter(E),v);else{const{leave:D,delayLeave:M,afterLeave:W}=A,Y=()=>s(E,x,b),ce=()=>{D(E,()=>{Y(),W&&W()})};M?M(E,Y,ce):ce()}else s(E,x,b)},it=(_,x,b,S=!1,v=!1)=>{const{type:E,props:P,ref:A,children:N,dynamicChildren:T,shapeFlag:L,patchFlag:D,dirs:M,cacheIndex:W}=_;if(D===-2&&(v=!1),A!=null&&Qs(A,null,b,_,!0),W!=null&&(x.renderCache[W]=void 0),L&256){x.ctx.deactivate(_);return}const Y=L&1&&M,ce=!Yn(_);let ne;if(ce&&(ne=P&&P.onVnodeBeforeUnmount)&&ct(ne,x,_),L&6)Ff(_.component,b,S);else{if(L&128){_.suspense.unmount(b,S);return}Y&&Kt(_,null,x,"beforeUnmount"),L&64?_.type.remove(_,x,b,Mn,S):T&&!T.hasOnce&&(E!==Ye||D>0&&D&64)?On(T,x,b,!1,!0):(E===Ye&&D&384||!v&&L&16)&&On(N,x,b),S&&ll(_)}(ce&&(ne=P&&P.onVnodeUnmounted)||Y)&&Ke(()=>{ne&&ct(ne,x,_),Y&&Kt(_,null,x,"unmounted")},b)},ll=_=>{const{type:x,el:b,anchor:S,transition:v}=_;if(x===Ye){Mf(b,S);return}if(x===gr){F(_);return}const E=()=>{i(b),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(_.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:A}=v,N=()=>P(b,E);A?A(_.el,E,N):N()}else E()},Mf=(_,x)=>{let b;for(;_!==x;)b=g(_),i(_),_=b;i(x)},Ff=(_,x,b)=>{const{bum:S,scope:v,job:E,subTree:P,um:A,m:N,a:T}=_;Cl(N),Cl(T),S&&Us(S),v.stop(),E&&(E.flags|=8,it(P,_,x,b)),A&&Ke(A,x),Ke(()=>{_.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},On=(_,x,b,S=!1,v=!1,E=0)=>{for(let P=E;P<_.length;P++)it(_[P],x,b,S,v)},Ps=_=>{if(_.shapeFlag&6)return Ps(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const x=g(_.anchor||_.el),b=x&&x[Ah];return b?g(b):x};let cr=!1;const cl=(_,x,b)=>{_==null?x._vnode&&it(x._vnode,null,null,!0):O(x._vnode||null,_,x,null,null,null,b),x._vnode=_,cr||(cr=!0,pl(),_a(),cr=!1)},Mn={p:O,um:it,m:$t,r:ll,mt:J,mc:h,pc:le,pbc:d,n:Ps,o:t};return{render:cl,hydrate:void 0,createApp:Zh(cl)}}function _r({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ud(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ma(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=kt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ma(o,l)),l.type===zi&&(l.el=o.el)}}function fd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Fa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fa(e)}function Cl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hd=Symbol.for("v-scx"),dd=()=>Qn(hd);function dt(t,e,n){return La(t,e,n)}function La(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ae({},n),c=e&&s||!e&&r!=="post";let a;if(cs){if(r==="sync"){const m=dd();a=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=ht,m.resume=ht,m.pause=ht,m}}const u=Se;l.call=(m,I,O)=>pt(m,u,I,O);let p=!1;r==="post"?l.scheduler=m=>{Ke(m,u&&u.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(m,I)=>{I?m():Io(m)}),l.augmentJob=m=>{e&&(m.flags|=4),p&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=Ih(t,e,l);return cs&&(a?a.push(g):c&&g()),g}function pd(t,e,n){const s=this.proxy,i=me(t)?t.includes(".")?Ba(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=Cs(this),l=La(i,r.bind(s),n);return o(),l}function Ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const _d=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Je(e)}Modifiers`]||t[`${ln(e)}Modifiers`];function gd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&_d(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>me(u)?u.trim():u)),o.number&&(i=n.map(Pr)));let l,c=s[l=ar(e)]||s[l=ar(Je(e))];!c&&r&&(c=s[l=ar(ln(e))]),c&&pt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pt(a,t,6,i)}}function Wa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!H(t)){const c=a=>{const u=Wa(a,e,!0);u&&(l=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(pe(t)&&s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):Ae(o,r),pe(t)&&s.set(t,o),o)}function Ki(t,e){return!t||!Li(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,ln(e))||te(t,e))}function El(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:p,data:g,setupState:m,ctx:I,inheritAttrs:O}=t,j=qs(t);let V,q;try{if(n.shapeFlag&4){const F=i||s,Q=F;V=ft(a.call(Q,F,u,p,m,g,I)),q=l}else{const F=e;V=ft(F.length>1?F(p,{attrs:l,slots:o,emit:c}):F(p,null)),q=e.props?l:xd(l)}}catch(F){Jn.length=0,Gi(F,t,1),V=Qe(nn)}let ee=V;if(q&&O!==!1){const F=Object.keys(q),{shapeFlag:Q}=ee;F.length&&Q&7&&(r&&F.some(fo)&&(q=md(q,r)),ee=Cn(ee,q,!1,!0))}return n.dirs&&(ee=Cn(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&wo(ee,n.transition),V=ee,qs(j),V}const xd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Li(n))&&((e||(e={}))[n]=t[n]);return e},md=(t,e)=>{const n={};for(const s in t)(!fo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function yd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Il(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(o[g]!==s[g]&&!Ki(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Il(s,o,a):!0:!!o;return!1}function Il(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ki(n,r))return!0}return!1}function bd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ua=t=>t.__isSuspense;function vd(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Th(t)}const Ye=Symbol.for("v-fgt"),zi=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),Jn=[];let ze=null;function se(t=!1){Jn.push(ze=t?null:[])}function Cd(){Jn.pop(),ze=Jn[Jn.length-1]||null}let ls=1;function wl(t,e=!1){ls+=t,t<0&&ze&&e&&(ze.hasOnce=!0)}function Ha(t){return t.dynamicChildren=ls>0?ze||_n:null,Cd(),ls>0&&ze&&ze.push(t),t}function ae(t,e,n,s,i,r){return Ha(y(t,e,n,s,i,r,!0))}function Va(t,e,n,s,i){return Ha(Qe(t,e,n,s,i,!0))}function ja(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const Ga=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||xe(t)||H(t)?{i:We,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,i=null,r=t===Ye?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ga(e),ref:e&&Hs(e),scopeId:xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return l?(To(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),ls>0&&!o&&ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ze.push(c),c}const Qe=Ed;function Ed(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ca)&&(t=nn),ja(t)){const l=Cn(t,e,!0);return n&&To(l,n),ls>0&&!r&&ze&&(l.shapeFlag&6?ze[ze.indexOf(t)]=l:ze.push(l)),l.patchFlag=-2,l}if(Od(t)&&(t=t.__vccOpts),e){e=Id(e);let{class:l,style:c}=e;l&&!me(l)&&(e.class=xn(l)),pe(c)&&(Co(c)&&!U(c)&&(c=Ae({},c)),e.style=_o(c))}const o=me(t)?1:Ua(t)?128:kh(t)?64:pe(t)?4:H(t)?2:0;return y(t,e,n,s,i,o,r,!0)}function Id(t){return t?Co(t)||Ra(t)?Ae({},t):t:null}function Cn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?wd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ga(a),ref:e&&e.ref?n&&r?U(r)?r.concat(Hs(e)):[r,Hs(e)]:Hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&wo(u,c.clone(u)),u}function ie(t=" ",e=0){return Qe(zi,null,t,e)}function Pe(t="",e=!1){return e?(se(),Va(nn,null,t)):Qe(nn,null,t)}function ft(t){return t==null||typeof t=="boolean"?Qe(nn):U(t)?Qe(Ye,null,t.slice()):ja(t)?kt(t):Qe(zi,null,String(t))}function kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function To(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),To(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ra(e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function wd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=xn([e.class,s.class]));else if(i==="style")e.style=_o([e.style,s.style]);else if(Li(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){pt(t,e,7,[n,s])}const Sd=wa();let Td=0;function Rd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Sd,r={uid:Td++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Aa(s,i),emitsOptions:Wa(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gd.bind(null,r),t.ce&&t.ce(r),r}let Se=null,Xs,Hr;{const t=Hi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Xs=e("__VUE_INSTANCE_SETTERS__",n=>Se=n),Hr=e("__VUE_SSR_SETTERS__",n=>cs=n)}const Cs=t=>{const e=Se;return Xs(t),t.scope.on(),()=>{t.scope.off(),Xs(e)}},Sl=()=>{Se&&Se.scope.off(),Xs(null)};function $a(t){return t.vnode.shapeFlag&4}let cs=!1;function Nd(t,e=!1,n=!1){e&&Hr(e);const{props:s,children:i}=t.vnode,r=$a(t);nd(t,s,r,e),od(t,i,n);const o=r?Ad(t,e):void 0;return e&&Hr(!1),o}function Ad(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kh);const{setup:s}=n;if(s){Vt();const i=t.setupContext=s.length>1?Pd(t):null,r=Cs(t),o=bs(s,t,0,[t.props,i]),l=Wc(o);if(jt(),r(),(l||t.sp)&&!Yn(t)&&ma(t),l){if(o.then(Sl,Sl),e)return o.then(c=>{Tl(t,c)}).catch(c=>{Gi(c,t,0)});t.asyncDep=o}else Tl(t,o)}else Ka(t)}function Tl(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=fa(e)),Ka(t)}function Ka(t,e,n){const s=t.type;t.render||(t.render=s.render||ht);{const i=Cs(t);Vt();try{zh(t)}finally{jt(),i()}}}const kd={get(t,e){return Te(t,"get",""),t[e]}};function Pd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kd),slots:t.slots,emit:t.emit,expose:e}}function Yi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fa(Eo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qn)return qn[n](t)},has(e,n){return n in e||n in qn}})):t.proxy}function Dd(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Od(t){return H(t)&&"__vccOpts"in t}const za=(t,e)=>Ch(t,e,cs),Md="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vr;const Rl=typeof window<"u"&&window.trustedTypes;if(Rl)try{Vr=Rl.createPolicy("vue",{createHTML:t=>t})}catch{}const Ya=Vr?t=>Vr.createHTML(t):t=>t,Fd="http://www.w3.org/2000/svg",Ld="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,Nl=xt&&xt.createElement("template"),Bd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?xt.createElementNS(Fd,t):e==="mathml"?xt.createElementNS(Ld,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Nl.innerHTML=Ya(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Nl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wd=Symbol("_vtc");function Ud(t,e,n){const s=t[Wd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Al=Symbol("_vod"),Hd=Symbol("_vsh"),Vd=Symbol(""),jd=/(^|;)\s*display\s*:/;function Gd(t,e,n){const s=t.style,i=me(n);let r=!1;if(n&&!i){if(e)if(me(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Vs(s,l,"")}else for(const o in e)n[o]==null&&Vs(s,o,"");for(const o in n)o==="display"&&(r=!0),Vs(s,o,n[o])}else if(i){if(e!==n){const o=s[Vd];o&&(n+=";"+o),s.cssText=n,r=jd.test(n)}}else e&&t.removeAttribute("style");Al in t&&(t[Al]=r?s.display:"",t[Hd]&&(s.display="none"))}const kl=/\s*!important$/;function Vs(t,e,n){if(U(n))n.forEach(s=>Vs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$d(t,e);kl.test(n)?t.setProperty(ln(s),n.replace(kl,""),"important"):t[s]=n}}const Pl=["Webkit","Moz","ms"],xr={};function $d(t,e){const n=xr[e];if(n)return n;let s=Je(e);if(s!=="filter"&&s in t)return xr[e]=s;s=Ui(s);for(let i=0;i<Pl.length;i++){const r=Pl[i]+s;if(r in t)return xr[e]=r}return e}const Dl="http://www.w3.org/1999/xlink";function Ol(t,e,n,s,i,r=zf(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dl,e.slice(6,e.length)):t.setAttributeNS(Dl,e,n):n==null||r&&!jc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ht(n)?String(n):n)}function Ml(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ya(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function dn(t,e,n,s){t.addEventListener(e,n,s)}function Kd(t,e,n,s){t.removeEventListener(e,n,s)}const Fl=Symbol("_vei");function zd(t,e,n,s,i=null){const r=t[Fl]||(t[Fl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Yd(e);if(s){const a=r[e]=Jd(s,i);dn(t,l,a,c)}else o&&(Kd(t,l,o,c),r[e]=void 0)}}const Ll=/(?:Once|Passive|Capture)$/;function Yd(t){let e;if(Ll.test(t)){e={};let s;for(;s=t.match(Ll);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let mr=0;const qd=Promise.resolve(),Qd=()=>mr||(qd.then(()=>mr=0),mr=Date.now());function Jd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(Xd(s,n.value),e,5,[s])};return n.value=t,n.attached=Qd(),n}function Xd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Ud(t,s,o):e==="style"?Gd(t,n,s):Li(e)?fo(e)||zd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ep(t,e,s,o))?(Ml(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ol(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!me(s))?Ml(t,Je(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ol(t,e,s,o))};function ep(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bl(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Bl(e)&&me(n)?!1:e in t}const Wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Us(e,n):e};function tp(t){t.target.composing=!0}function Ul(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yr=Symbol("_assign"),np={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[yr]=Wl(i);const r=s||i.props&&i.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Pr(l)),t[yr](l)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",tp),dn(t,"compositionend",Ul),dn(t,"change",Ul))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[yr]=Wl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Pr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},sp=Ae({patchProp:Zd},Bd);let Hl;function ip(){return Hl||(Hl=cd(sp))}const rp=(...t)=>{const e=ip().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=lp(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,op(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function op(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lp(t){return me(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let qa;const qi=t=>qa=t,Qa=Symbol();function jr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Xn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xn||(Xn={}));function cp(){const t=zc(!0),e=t.run(()=>Be({}));let n=[],s=[];const i=Eo({install(r){qi(i),i._a=r,r.provide(Qa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ja=()=>{};function Vl(t,e,n,s=Ja){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Yc()&&Yf(i),i}function un(t,...e){t.slice().forEach(n=>{n(...e)})}const ap=t=>t(),jl=Symbol(),br=Symbol();function Gr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];jr(i)&&jr(s)&&t.hasOwnProperty(n)&&!xe(s)&&!Dt(s)?t[n]=Gr(i,s):t[n]=s}return t}const up=Symbol();function fp(t){return!jr(t)||!t.hasOwnProperty(up)}const{assign:Nt}=Object;function hp(t){return!!(xe(t)&&t.effect)}function dp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=mh(n.state.value[t]);return Nt(u,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=Eo(za(()=>{qi(n);const m=n._s.get(t);return o[g].call(m,m)})),p),{}))}return c=Xa(t,a,e,n,s,!0),c}function Xa(t,e,n={},s,i,r){let o;const l=Nt({actions:{}},n),c={deep:!0};let a,u,p=[],g=[],m;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),Be({});let O;function j(h){let f;a=u=!1,typeof h=="function"?(h(s.state.value[t]),f={type:Xn.patchFunction,storeId:t,events:m}):(Gr(s.state.value[t],h),f={type:Xn.patchObject,payload:h,storeId:t,events:m});const d=O=Symbol();da().then(()=>{O===d&&(a=!0)}),u=!0,un(p,f,s.state.value[t])}const V=r?function(){const{state:f}=n,d=f?f():{};this.$patch(w=>{Nt(w,d)})}:Ja;function q(){o.stop(),p=[],g=[],s._s.delete(t)}const ee=(h,f="")=>{if(jl in h)return h[br]=f,h;const d=function(){qi(s);const w=Array.from(arguments),C=[],k=[];function J(z){C.push(z)}function je(z){k.push(z)}un(g,{args:w,name:d[br],store:Q,after:J,onError:je});let ge;try{ge=h.apply(this&&this.$id===t?this:Q,w)}catch(z){throw un(k,z),z}return ge instanceof Promise?ge.then(z=>(un(C,z),z)).catch(z=>(un(k,z),Promise.reject(z))):(un(C,ge),ge)};return d[jl]=!0,d[br]=f,d},F={_p:s,$id:t,$onAction:Vl.bind(null,g),$patch:j,$reset:V,$subscribe(h,f={}){const d=Vl(p,h,f.detached,()=>w()),w=o.run(()=>dt(()=>s.state.value[t],C=>{(f.flush==="sync"?u:a)&&h({storeId:t,type:Xn.direct,events:m},C)},Nt({},c,f)));return d},$dispose:q},Q=ji(F);s._s.set(t,Q);const ye=(s._a&&s._a.runWithContext||ap)(()=>s._e.run(()=>(o=zc()).run(()=>e({action:ee}))));for(const h in ye){const f=ye[h];if(xe(f)&&!hp(f)||Dt(f))r||(I&&fp(f)&&(xe(f)?f.value=I[h]:Gr(f,I[h])),s.state.value[t][h]=f);else if(typeof f=="function"){const d=ee(f,h);ye[h]=d,l.actions[h]=f}}return Nt(Q,ye),Nt(X(Q),ye),Object.defineProperty(Q,"$state",{get:()=>s.state.value[t],set:h=>{j(f=>{Nt(f,h)})}}),s._p.forEach(h=>{Nt(Q,o.run(()=>h({store:Q,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(Q.$state,I),a=!0,u=!0,Q}/*! #__NO_SIDE_EFFECTS__ */function pp(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=td();return o=o||(c?Qn(Qa,null):null),o&&qi(o),o=qa,o._s.has(t)||(i?Xa(t,e,s,o):dp(t,s,o)),o._s.get(t)}return r.$id=t,r}const _p=""+new URL("waiter-GGyCVIlv.gif",import.meta.url).href,gp=()=>{};var Gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw Rn(e)},Rn=function(t){return new Error("Firebase Database ("+Za.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,m=a&63;c||(m=64,o||(g=64)),s.push(n[u],n[p],n[g],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new mp;const g=r<<2|l>>4;if(s.push(g),a!==64){const m=l<<4&240|a>>2;if(s.push(m),p!==64){const I=a<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(t){const e=eu(t);return Ro.encodeByteArray(e,!0)},Zs=function(t){return tu(t).replace(/\./g,"")},$r=function(t){try{return Ro.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){return nu(void 0,t)}function nu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bp(n)||(t[n]=nu(t[n],e[n]));return t}function bp(t){return t!=="__proto__"}/**
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
 */function vp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>vp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof Gl>"u")return;const t=Gl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ip=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$r(t[1]);return e&&JSON.parse(e)},su=()=>{try{return gp()||Cp()||Ep()||Ip()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wp=t=>{var e,n;return(n=(e=su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sp=t=>{const e=wp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},iu=()=>{var t;return(t=su())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Tp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zs(JSON.stringify(n)),Zs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ru(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rp())}function Np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ap(){return Za.NODE_ADMIN===!0}function kp(){try{return typeof indexedDB=="object"}catch{return!1}}function Pp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="FirebaseError";class Es extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Dp,Object.setPrototypeOf(this,Es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ou.prototype.create)}}class ou{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Op(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Es(i,l,s)}}function Op(t,e){return t.replace(Mp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Mp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=as($r(r[0])||""),n=as($r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Fp=function(t){const e=lu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Lp=function(t){const e=lu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function En(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $l(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kl(r)&&Kl(o)){if(!ti(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):p<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function No(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ji=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class Hp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jp(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vp(t){return t===qt?void 0:t}function jp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const $p={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Kp=fe.INFO,zp={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Yp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=zp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=Kp,this._logHandler=Yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const qp=(t,e)=>e.some(n=>t instanceof n);let zl,Yl;function Qp(){return zl||(zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jp(){return Yl||(Yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,Kr=new WeakMap,uu=new WeakMap,vr=new WeakMap,Ao=new WeakMap;function Xp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ot(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&au.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function Zp(t){if(Kr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function e_(t){zr=t(zr)}function t_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Cr(this),e,...n);return uu.set(s,e.sort?e.sort():[e]),Ot(s)}:Jp().includes(t)?function(...e){return t.apply(Cr(this),e),Ot(au.get(this))}:function(...e){return Ot(t.apply(Cr(this),e))}}function n_(t){return typeof t=="function"?t_(t):(t instanceof IDBTransaction&&Zp(t),qp(t,Qp())?new Proxy(t,zr):t)}function Ot(t){if(t instanceof IDBRequest)return Xp(t);if(vr.has(t))return vr.get(t);const e=n_(t);return e!==t&&(vr.set(t,e),Ao.set(e,t)),e}const Cr=t=>Ao.get(t);function s_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ot(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const i_=["get","getKey","getAll","getAllKeys","count"],r_=["put","add","delete","clear"],Er=new Map;function ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Er.get(e))return Er.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=r_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||i_.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Er.set(e,r),r}e_(t=>({...t,get:(e,n,s)=>ql(e,n)||t.get(e,n,s),has:(e,n)=>!!ql(e,n)||t.has(e,n)}));/**
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
 */class o_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function l_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yr="@firebase/app",Ql="0.11.2";/**
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
 */const Ct=new cu("@firebase/app"),c_="@firebase/app-compat",a_="@firebase/analytics-compat",u_="@firebase/analytics",f_="@firebase/app-check-compat",h_="@firebase/app-check",d_="@firebase/auth",p_="@firebase/auth-compat",__="@firebase/database",g_="@firebase/data-connect",x_="@firebase/database-compat",m_="@firebase/functions",y_="@firebase/functions-compat",b_="@firebase/installations",v_="@firebase/installations-compat",C_="@firebase/messaging",E_="@firebase/messaging-compat",I_="@firebase/performance",w_="@firebase/performance-compat",S_="@firebase/remote-config",T_="@firebase/remote-config-compat",R_="@firebase/storage",N_="@firebase/storage-compat",A_="@firebase/firestore",k_="@firebase/vertexai",P_="@firebase/firestore-compat",D_="firebase",O_="11.4.0";/**
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
 */const qr="[DEFAULT]",M_={[Yr]:"fire-core",[c_]:"fire-core-compat",[u_]:"fire-analytics",[a_]:"fire-analytics-compat",[h_]:"fire-app-check",[f_]:"fire-app-check-compat",[d_]:"fire-auth",[p_]:"fire-auth-compat",[__]:"fire-rtdb",[g_]:"fire-data-connect",[x_]:"fire-rtdb-compat",[m_]:"fire-fn",[y_]:"fire-fn-compat",[b_]:"fire-iid",[v_]:"fire-iid-compat",[C_]:"fire-fcm",[E_]:"fire-fcm-compat",[I_]:"fire-perf",[w_]:"fire-perf-compat",[S_]:"fire-rc",[T_]:"fire-rc-compat",[R_]:"fire-gcs",[N_]:"fire-gcs-compat",[A_]:"fire-fst",[P_]:"fire-fst-compat",[k_]:"fire-vertex","fire-js":"fire-js",[D_]:"fire-js-all"};/**
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
 */const ni=new Map,F_=new Map,Qr=new Map;function Jl(t,e){try{t.container.addComponent(e)}catch(n){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(Qr.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,t);for(const n of ni.values())Jl(n,t);for(const n of F_.values())Jl(n,t);return!0}function L_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function B_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const W_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new ou("app","Firebase",W_);/**
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
 */class U_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const H_=O_;function fu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=iu()),!n)throw Mt.create("no-options");const r=ni.get(i);if(r){if(ti(n,r.options)&&ti(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new Gp(i);for(const c of Qr.values())o.addComponent(c);const l=new U_(n,s,o);return ni.set(i,l),l}function V_(t=qr){const e=ni.get(t);if(!e&&t===qr&&iu())return fu();if(!e)throw Mt.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=M_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(l.join(" "));return}si(new us(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const j_="firebase-heartbeat-database",G_=1,fs="firebase-heartbeat-store";let Ir=null;function hu(){return Ir||(Ir=s_(j_,G_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Ir}async function $_(t){try{const n=(await hu()).transaction(fs),s=await n.objectStore(fs).get(du(t));return await n.done,s}catch(e){if(e instanceof Es)Ct.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(n.message)}}}async function Xl(t,e){try{const s=(await hu()).transaction(fs,"readwrite");await s.objectStore(fs).put(e,du(t)),await s.done}catch(n){if(n instanceof Es)Ct.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ct.warn(s.message)}}}function du(t){return`${t.name}!${t.options.appId}`}/**
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
 */const K_=1024,z_=30;class Y_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>z_){const o=J_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ct.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zl(),{heartbeatsToSend:s,unsentEntries:i}=q_(this._heartbeatsCache.heartbeats),r=Zs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ct.warn(n),""}}}function Zl(){return new Date().toISOString().substring(0,10)}function q_(t,e=K_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ec(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ec(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Q_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kp()?Pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ec(t){return Zs(JSON.stringify({version:2,heartbeats:t})).length}function J_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function X_(t){si(new us("platform-logger",e=>new o_(e),"PRIVATE")),si(new us("heartbeat",e=>new Y_(e),"PRIVATE")),yn(Yr,Ql,t),yn(Yr,Ql,"esm2017"),yn("fire-js","")}X_("");var Z_="firebase",eg="11.4.0";/**
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
 */yn(Z_,eg,"app");var tc={};const nc="@firebase/database",sc="1.0.13";/**
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
 */let pu="";function tg(t){pu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ng(e)}}catch{}return new sg},Jt=_u("localStorage"),ig=_u("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new cu("@firebase/database"),rg=function(){let t=1;return function(){return t++}}(),gu=function(t){const e=Up(t),n=new Wp;n.update(e);const s=n.digest();return Ro.encodeByteArray(s)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Is.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let Zn=null,ic=!0;const og=function(t,e){R(!0,"Can't turn on custom loggers persistently."),bn.logLevel=fe.VERBOSE,Zn=bn.log.bind(bn)},Ne=function(...t){if(ic===!0&&(ic=!1,Zn===null&&ig.get("logging_enabled")===!0&&og()),Zn){const e=Is.apply(null,t);Zn(e)}},ws=function(t){return function(...e){Ne(t,...e)}},Jr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);bn.error(e)},Et=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw bn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Is(...t);bn.warn(e)},lg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},In="[MIN_NAME]",sn="[MAX_NAME]",An=function(t,e){if(t===e)return 0;if(t===In||e===sn)return-1;if(e===In||t===sn)return 1;{const n=rc(t),s=rc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ag=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},ko=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=ko(t[e[s]]);return n+="}",n},mu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yu=function(t){R(!xu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},ug=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const dg=new RegExp("^-?(0*)\\d{1,10}$"),pg=-2147483648,_g=2147483647,rc=function(t){if(dg.test(t)){const e=Number(t);if(e>=pg&&e<=_g)return e}return null},kn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},gg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,B_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class js{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}js.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="5",bu="v",vu="s",Cu="r",Eu="f",Iu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wu="ls",Su="p",Xr="ac",Tu="websocket",Ru="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Au(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let s;if(e===Tu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ru)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yg(t)&&(n.ns=t.namespace);const i=[];return Ve(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr={},Sr={};function Do(t){const e=t.toString();return wr[e]||(wr[e]=new bg),wr[e]}function vg(t,e){const n=t.toString();return Sr[n]||(Sr[n]=e()),Sr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&kn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="start",Eg="close",Ig="pLPCommand",wg="pRTLPCB",ku="id",Pu="pw",Du="ser",Sg="cb",Tg="seg",Rg="ts",Ng="d",Ag="dframe",Ou=1870,Mu=30,kg=Ou-Mu,Pg=25e3,Dg=3e4;class pn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ws(e),this.stats_=Do(n),this.urlFn=c=>(this.appCheckToken&&(c[Xr]=this.appCheckToken),Au(n,Ru,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Cg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dg)),cg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===oc)this.id=l,this.password=c;else if(o===Eg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[oc]="t",s[Du]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Sg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bu]=Po,this.transportSessionId&&(s[vu]=this.transportSessionId),this.lastSessionId&&(s[wu]=this.lastSessionId),this.applicationId&&(s[Su]=this.applicationId),this.appCheckToken&&(s[Xr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Iu.test(location.hostname)&&(s[Cu]=Eu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ug()&&!fg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tu(n),i=mu(s,kg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ag]="t",s[ku]=e,s[Pu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Oo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rg(),window[Ig+this.uniqueCallbackIdentifier]=e,window[wg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Oo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ku]=this.myID,e[Pu]=this.myPW,e[Du]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mu+s.length<=Ou;){const o=this.pendingSegs.shift();s=s+"&"+Tg+i+"="+o.seg+"&"+Rg+i+"="+o.ts+"&"+Ng+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Pg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=16384,Mg=45e3;let ii=null;typeof MozWebSocket<"u"?ii=MozWebSocket:typeof WebSocket<"u"&&(ii=WebSocket);class Ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ws(this.connId),this.stats_=Do(n),this.connURL=Ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[bu]=Po,typeof location<"u"&&location.hostname&&Iu.test(location.hostname)&&(o[Cu]=Eu),n&&(o[vu]=n),s&&(o[wu]=s),i&&(o[Xr]=i),r&&(o[Su]=r),Au(e,Tu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jt.set("previous_websocket_failure",!0);try{let s;Ap(),this.mySock=new ii(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ii!==null&&!Ze.forceDisallow_}static previouslyFailed(){return Jt.isInMemoryStorage||Jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=as(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mu(n,Og);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{static get ALL_TRANSPORTS(){return[pn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ze&&Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of hs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);hs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=6e4,Lg=5e3,Bg=10*1024,Wg=100*1024,Tr="t",lc="d",Ug="s",cc="r",Hg="e",ac="o",uc="a",fc="n",hc="p",Vg="h";class jg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ws("c:"+this.id+":"),this.transportManager_=new hs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tr in e){const n=e[Tr];n===uc?this.upgradeIfSecondaryHealthy_():n===cc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ac&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(Tr,e);if(lc in e){const s=e[lc];if(n===Vg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===fc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ug?this.onConnectionShutdown_(s):n===cc?this.onReset_(s):n===Hg?Jr("Server Error: "+s):n===ac?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Po!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Fg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lu{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Lu{static getInstance(){return new ri}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ru()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=32,pc=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new oe("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bt(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Gg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Fe(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mo(t,e){if(Bt(t)!==Bt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bt(t)>Bt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $g{constructor(e,n){this.errorPrefix_=n,this.parts_=Wu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ji(this.parts_[s]);Hu(this)}}function Kg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ji(e),Hu(t)}function zg(t){const e=t.parts_.pop();t.byteLength_-=Ji(e),t.parts_.length>0&&(t.byteLength_-=1)}function Hu(t){if(t.byteLength_>pc)throw new Error(t.errorPrefix_+"has a key path longer than "+pc+" bytes ("+t.byteLength_+").");if(t.parts_.length>dc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dc+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Lu{static getInstance(){return new Fo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e3,Yg=60*5*1e3,_c=30*1e3,qg=1.3,Qg=3e4,Jg="server_kill",gc=3;class vt extends Fu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=vt.nextPersistentConnectionId_++,this.log_=ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=Yg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Qi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const s=En(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_c)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jr("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qg&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new jg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{He(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jg)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&He(p),c())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$l(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ko(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gc&&(this.reconnectDelay_=_c,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pu.replace(/\./g,"-")]=1,ru()?e["framework.cordova"]=1:Np()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ri.getInstance().currentlyOnline();return $l(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new $(In,e),i=new $(In,n);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class Vu extends Xi{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,n){return An(e.name,n.name)}isDefinedOn(e){throw Rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(sn,Fs)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Fs)}toString(){return".key"}}const vn=new Vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Xg{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ls(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ls(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Xg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e){return An(t.name,e.name)}function Lo(t,e){return An(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;function ex(t){Zr=t}const ju=function(t){return typeof t=="number"?"number:"+yu(t):"string:"+t},Gu=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else R(t===Zr||t.isEmpty(),"priority of unexpected type.");R(t===Zr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;class Ce{static set __childrenNodeConstructor(e){xc=e}static get __childrenNodeConstructor(){return xc}constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:G(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ju(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yu(this.value_):e+=this.value_,this.lazyHash_=gu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),r=Ce.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u,Ku;function tx(t){$u=t}function nx(t){Ku=t}class sx extends Xi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?An(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(sn,new Ce("[PRIORITY-POST]",Ku))}makePost(e,n){const s=$u(e);return new $(n,new Ce("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new sx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=Math.log(2);class rx{constructor(e){const n=r=>parseInt(Math.log(r)/ix,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oi=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let p,g;if(u===0)return null;if(u===1)return p=t[c],g=n?n(p):p,new Ee(g,p.node,Ee.BLACK,null,null);{const m=parseInt(u/2,10)+c,I=i(c,m),O=i(m+1,a);return p=t[m],g=n?n(p):p,new Ee(g,p.node,Ee.BLACK,I,O)}},r=function(c){let a=null,u=null,p=t.length;const g=function(I,O){const j=p-I,V=p;p-=I;const q=i(j+1,V),ee=t[j],F=n?n(ee):ee;m(new Ee(F,ee.node,O,null,q))},m=function(I){a?(a.left=I,a=I):(u=I,a=I)};for(let I=0;I<c.count;++I){const O=c.nextBitIsOne(),j=Math.pow(2,c.count-(I+1));O?g(j,Ee.BLACK):(g(j,Ee.BLACK),g(j,Ee.RED))}return u},o=new rx(t.length),l=r(o);return new Ue(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr;const fn={};class bt{static get Default(){return R(fn&&_e,"ChildrenNode.ts has not been loaded"),Rr=Rr||new bt({".priority":fn},{".priority":_e}),Rr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=En(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){R(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=oi(s,e.getCompare()):l=fn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new bt(u,a)}addToIndexes(e,n){const s=ei(this.indexes_,(i,r)=>{const o=En(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===fn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator($.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),oi(l,o.getCompare())}else return fn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new $(e.name,l))),c.insert(e,e.node)}});return new bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ei(this.indexes_,i=>{if(i===fn)return i;{const r=n.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new bt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class B{static get EMPTY_NODE(){return Hn||(Hn=new B(new Ue(Lo),null,bt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Gu(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new $(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{R(G(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(he(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ju(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ss?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ox extends B{constructor(){super(new Ue(Lo),B.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ss=new ox;Object.defineProperties($,{MIN:{value:new $(In,B.EMPTY_NODE)},MAX:{value:new $(sn,Ss)}});Vu.__EMPTY_NODE=B.EMPTY_NODE;Ce.__childrenNodeConstructor=B;ex(Ss);nx(Ss);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=!0;function Ie(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Ie(e))}if(!(t instanceof Array)&&lx){const n=[];let s=!1;if(Ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ie(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new $(o,c)))}}),n.length===0)return B.EMPTY_NODE;const r=oi(n,Zg,o=>o.name,Lo);if(s){const o=oi(n,_e.getCompare());return new B(r,Ie(e),new bt({".priority":o},{".priority":_e}))}else return new B(r,Ie(e),bt.Default)}else{let n=B.EMPTY_NODE;return Ve(t,(s,i)=>{if(St(t,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ie(e))}}tx(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx extends Xi{constructor(e){super(),this.indexPath_=e,R(!K(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?An(e.name,n.name):r}makePost(e,n){const s=Ie(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ss);return new $(sn,e)}toString(){return Wu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax extends Xi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?An(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const s=Ie(e);return new $(n,s)}toString(){return".value"}}const ux=new ax;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t){return{type:"value",snapshotNode:t}}function wn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ds(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(wn(n,s)):o.trackChildChange(ps(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(ds(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ps(i,r,o))}else s.trackChildChange(wn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.indexedFilter_=new Bo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_s.getStartPost_(e),this.endPost_=_s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new $(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new $(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new _s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new $(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,m)=>p(m,g)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const c=new $(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const m=g==null?1:o(g,c);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(ps(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ds(n,p));const O=l.updateImmediateChild(n,B.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(wn(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ds(a.name,a.node)),r.trackChildChange(wn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:In}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Wo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dx(t){return t.loadsAllData()?new Bo(t.getIndex()):t.hasLimit()?new hx(t):new _s(t)}function mc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===ux?n="$value":t.index_===vn?n="$key":(R(t.index_ instanceof cx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Fu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ws("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=li.getListenId_(e,s),l={};this.listens_[o]=l;const c=mc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let p=u;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),En(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=li.getListenId_(e,n);delete this.listens_[s]}get(e){const n=mc(e._queryParams),s=e._path.toString(),i=new Qi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=as(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return{value:null,children:new Map}}function Yu(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,ci());const i=t.children.get(s);e=he(e),Yu(i,e,n)}}function eo(t,e,n){t.value!==null?n(e,t.value):_x(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);eo(i,r,n)})}function _x(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=10*1e3,xx=30*1e3,mx=5*60*1e3;class yx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gx(e);const s=bc+(xx-bc)*Math.random();es(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ve(e,(i,r)=>{r>0&&St(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*mx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function qu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ho(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=qu()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new ai(Z(),n,this.revert)}}else return R(G(this.path)===e,"operationForChild called for unrelated child."),new ai(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new gs(this.source,Z()):new gs(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return K(this.path)?new rn(this.source,Z(),this.snap.getImmediateChild(e)):new rn(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new rn(this.source,Z(),n.value):new xs(this.source,Z(),n)}else return R(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xs(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vx(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fx(o.childName,o.snapshotNode))}),Vn(t,i,"child_removed",e,s,n),Vn(t,i,"child_added",e,s,n),Vn(t,i,"child_moved",r,s,n),Vn(t,i,"child_changed",e,s,n),Vn(t,i,"value",e,s,n),i}function Vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Ex(t,l,c)),o.forEach(l=>{const c=Cx(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Cx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ex(t,e,n){if(e.childName==null||n.childName==null)throw Rn("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e){return{eventCache:t,serverCache:e}}function ts(t,e,n,s){return Zi(new Wt(e,n,s),t.serverCache)}function Qu(t,e,n,s){return Zi(t.eventCache,new Wt(e,n,s))}function ui(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr;const Ix=()=>(Nr||(Nr=new Ue(ag)),Nr);class de{static fromObject(e){let n=new de(null);return Ve(e,(s,i)=>{n=n.set(new oe(s),i)}),n}constructor(e,n=Ix()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(K(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(he(e),n);return r!=null?{path:ve(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(he(e)):new de(null)}}set(e,n){if(K(e))return new de(n,this.children);{const s=G(e),r=(this.children.get(s)||new de(null)).set(he(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(he(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(he(e)):null}}setTree(e,n){if(K(e))return n;{const s=G(e),r=(this.children.get(s)||new de(null)).setTree(he(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(he(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(he(e),ve(n,i),s):new de(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new de(null))}}function ns(t,e,n){if(K(e))return new st(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new st(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new st(r)}}}function vc(t,e,n){let s=t;return Ve(n,(i,r)=>{s=ns(s,ve(e,i),r)}),s}function Cc(t,e){if(K(e))return st.empty();{const n=t.writeTree_.setTree(e,new de(null));return new st(n)}}function to(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function Ec(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new $(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function Ft(t,e){if(K(e))return t;{const n=cn(t,e);return n!=null?new st(new de(n)):new st(t.writeTree_.subtree(e))}}function no(t){return t.writeTree_.isEmpty()}function Sn(t,e){return Ju(Z(),t.writeTree_,e)}function Ju(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ju(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){return tf(e,t)}function wx(t,e,n,s,i){R(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ns(t.visibleWrites,e,n)),t.lastWriteId=s}function Sx(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Tx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Rx(l,s.path)?i=!1:et(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Nx(t),!0;if(s.snap)t.visibleWrites=Cc(t.visibleWrites,s.path);else{const l=s.children;Ve(l,c=>{t.visibleWrites=Cc(t.visibleWrites,ve(s.path,c))})}return!0}else return!1}function Rx(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(ve(t.path,n),e))return!0;return!1}function Nx(t){t.visibleWrites=Xu(t.allWrites,Ax,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ax(t){return t.visible}function Xu(t,e,n){let s=st.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=Fe(n,o),s=ns(s,l,r.snap)):et(o,n)&&(l=Fe(o,n),s=ns(s,Z(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=Fe(n,o),s=vc(s,l,r.children);else if(et(o,n))if(l=Fe(o,n),K(l))s=vc(s,Z(),r.children);else{const c=En(r.children,G(l));if(c){const a=c.getChild(he(l));s=ns(s,Z(),a)}}}else throw Rn("WriteRecord should have .snap or .children")}}return s}function Zu(t,e,n,s,i){if(!s&&!i){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(no(o))return n;if(n==null&&!to(o,Z()))return null;{const l=n||B.EMPTY_NODE;return Sn(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&no(r))return n;if(!i&&n==null&&!to(r,Z()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(et(a.path,e)||et(e,a.path))},l=Xu(t.allWrites,o,e),c=n||B.EMPTY_NODE;return Sn(l,c)}}}function kx(t,e,n){let s=B.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const c=Sn(Ft(r,new oe(o)),l);s=s.updateImmediateChild(o,c)}),Ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return Ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Px(t,e,n,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(to(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return no(o)?i.getChild(n):Sn(o,i.getChild(n))}}function Dx(t,e,n,s){const i=ve(e,n),r=cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return Sn(o,s.getNode().getImmediateChild(n))}else return null}function Ox(t,e){return cn(t.visibleWrites,e)}function Mx(t,e,n,s,i,r,o){let l;const c=Ft(t.visibleWrites,e),a=cn(c,Z());if(a!=null)l=a;else if(n!=null)l=Sn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=g.getNext();for(;m&&u.length<i;)p(m,s)!==0&&u.push(m),m=g.getNext();return u}else return[]}function Fx(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function fi(t,e,n,s){return Zu(t.writeTree,t.treePath,e,n,s)}function Vo(t,e){return kx(t.writeTree,t.treePath,e)}function Ic(t,e,n,s){return Px(t.writeTree,t.treePath,e,n,s)}function hi(t,e){return Ox(t.writeTree,ve(t.treePath,e))}function Lx(t,e,n,s,i,r){return Mx(t.writeTree,t.treePath,e,n,s,i,r)}function jo(t,e,n){return Dx(t.writeTree,t.treePath,e,n)}function ef(t,e){return tf(ve(t.treePath,e),t.writeTree)}function tf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ps(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ds(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,wn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ps(s,e.snapshotNode,i.oldSnap));else throw Rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const nf=new Wx;class Go{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Lx(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){return{filter:t}}function Hx(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Vx(t,e,n,s,i){const r=new Bx;let o,l;if(n.type===tt.OVERWRITE){const a=n;a.source.fromUser?o=so(t,e,a.path,a.snap,s,i,r):(R(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!K(a.path),o=di(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===tt.MERGE){const a=n;a.source.fromUser?o=Gx(t,e,a.path,a.children,s,i,r):(R(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=io(t,e,a.path,a.children,s,i,l,r))}else if(n.type===tt.ACK_USER_WRITE){const a=n;a.revert?o=zx(t,e,a.path,s,i,r):o=$x(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=Kx(t,e,n.path,s,r);else throw Rn("Unknown operation type: "+n.type);const c=r.getChanges();return jx(e,o,c),{viewCache:o,changes:c}}function jx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ui(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(zu(ui(e)))}}function sf(t,e,n,s,i,r){const o=e.eventCache;if(hi(s,n)!=null)return e;{let l,c;if(K(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=on(e),u=a instanceof B?a:B.EMPTY_NODE,p=Vo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=fi(s,on(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=G(n);if(a===".priority"){R(Bt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const p=Ic(s,n,u,c);p!=null?l=t.filter.updatePriority(u,p):l=o.getNode()}else{const u=he(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=Ic(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(u,g):p=o.getNode().getImmediateChild(a)}else p=jo(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,u,i,r):l=o.getNode()}}return ts(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function di(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),m,null)}else{const m=G(n);if(!c.isCompleteForPath(n)&&Bt(n)>1)return e;const I=he(n),j=c.getNode().getImmediateChild(m).updateChild(I,s);m===".priority"?a=u.updatePriority(c.getNode(),j):a=u.updateChild(c.getNode(),m,j,I,nf,null)}const p=Qu(e,a,c.isFullyInitialized()||K(n),u.filtersNodes()),g=new Go(i,p,r);return sf(t,p,n,i,g,l)}function so(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Go(i,e,r);if(K(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ts(e,a,!0,t.filter.filtersNodes());else{const p=G(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ts(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=he(n),m=l.getNode().getImmediateChild(p);let I;if(K(g))I=s;else{const O=u.getCompleteChild(p);O!=null?Bu(g)===".priority"&&O.getChild(Uu(g)).isEmpty()?I=O:I=O.updateChild(g,s):I=B.EMPTY_NODE}if(m.equals(I))c=e;else{const O=t.filter.updateChild(l.getNode(),p,I,g,u,o);c=ts(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function wc(t,e){return t.eventCache.isCompleteForChild(e)}function Gx(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=ve(n,c);wc(e,G(u))&&(l=so(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=ve(n,c);wc(e,G(u))||(l=so(t,l,u,a,i,r,o))}),l}function Sc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function io(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;K(n)?a=s:a=new de(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(u.hasChild(p)){const m=e.serverCache.getNode().getImmediateChild(p),I=Sc(t,m,g);c=di(t,c,new oe(p),I,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const m=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!u.hasChild(p)&&!m){const I=e.serverCache.getNode().getImmediateChild(p),O=Sc(t,I,g);c=di(t,c,new oe(p),O,i,r,o,l)}}),c}function $x(t,e,n,s,i,r,o){if(hi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return di(t,e,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new de(null);return c.getNode().forEachChild(vn,(u,p)=>{a=a.set(new oe(u),p)}),io(t,e,n,a,i,r,l,o)}else return e}else{let a=new de(null);return s.foreach((u,p)=>{const g=ve(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),io(t,e,n,a,i,r,l,o)}}function Kx(t,e,n,s,i){const r=e.serverCache,o=Qu(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return sf(t,o,n,s,nf,i)}function zx(t,e,n,s,i,r){let o;if(hi(s,n)!=null)return e;{const l=new Go(s,e,i),c=e.eventCache.getNode();let a;if(K(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=fi(s,on(e));else{const p=e.serverCache.getNode();R(p instanceof B,"serverChildren would be complete if leaf node"),u=Vo(s,p)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=G(n);let p=jo(s,u,e.serverCache);p==null&&e.serverCache.isCompleteForChild(u)&&(p=c.getImmediateChild(u)),p!=null?a=t.filter.updateChild(c,u,p,he(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,B.EMPTY_NODE,he(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fi(s,on(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||hi(s,Z())!=null,ts(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Bo(s.getIndex()),r=dx(s);this.processor_=Ux(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Wt(c,o.isFullyInitialized(),i.filtersNodes()),p=new Wt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zi(p,u),this.eventGenerator_=new bx(this.query_)}get query(){return this.query_}}function qx(t){return t.viewCache_.serverCache.getNode()}function Qx(t){return ui(t.viewCache_)}function Jx(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Tc(t){return t.eventRegistrations_.length===0}function Xx(t,e){t.eventRegistrations_.push(e)}function Rc(t,e,n){const s=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Nc(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(R(on(t.viewCache_),"We should always have a full cache before handling merges"),R(ui(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Vx(t.processor_,i,e,n,s);return Hx(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Zx(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(wn(r,o))}),n.isFullyInitialized()&&s.push(zu(n.getNode())),rf(t,s,n.getNode(),e)}function rf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return vx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class of{constructor(){this.views=new Map}}function em(t){R(!pi,"__referenceConstructor has already been defined"),pi=t}function tm(){return R(pi,"Reference.ts has not been loaded"),pi}function nm(t){return t.views.size===0}function $o(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),Nc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Nc(o,e,n,s));return r}}function lf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=fi(n,i?s:null),c=!1;l?c=!0:s instanceof B?(l=Vo(n,s),c=!1):(l=B.EMPTY_NODE,c=!1);const a=Zi(new Wt(l,c,!1),new Wt(s,i,!1));return new Yx(e,a)}return o}function sm(t,e,n,s,i,r){const o=lf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Xx(o,n),Zx(o,n)}function im(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ut(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Rc(a,n,s)),Tc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Rc(c,n,s)),Tc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Ut(t)&&r.push(new(tm())(e._repo,e._path)),{removed:r,events:o}}function cf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lt(t,e){let n=null;for(const s of t.views.values())n=n||Jx(s,e);return n}function af(t,e){if(e._queryParams.loadsAllData())return tr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function uf(t,e){return af(t,e)!=null}function Ut(t){return tr(t)!=null}function tr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;function rm(t){R(!_i,"__referenceConstructor has already been defined"),_i=t}function om(){return R(_i,"Reference.ts has not been loaded"),_i}let lm=1;class Ac{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Fx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ff(t,e,n,s,i){return wx(t.pendingWriteTree_,e,n,s,i),i?Rs(t,new rn(qu(),e,n)):[]}function Xt(t,e,n=!1){const s=Sx(t.pendingWriteTree_,e);if(Tx(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Z(),!0):Ve(s.children,o=>{r=r.set(new oe(o),!0)}),Rs(t,new ai(s.path,r,n))}else return[]}function Ts(t,e,n){return Rs(t,new rn(Uo(),e,n))}function cm(t,e,n){const s=de.fromObject(n);return Rs(t,new xs(Uo(),e,s))}function am(t,e){return Rs(t,new gs(Uo(),e))}function um(t,e,n){const s=zo(t,n);if(s){const i=Yo(s),r=i.path,o=i.queryId,l=Fe(r,e),c=new gs(Ho(o),l);return qo(t,r,c)}else return[]}function gi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||uf(o,e))){const c=im(o,e,n,s);nm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,m)=>Ut(m));if(u&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const m=dm(g);for(let I=0;I<m.length;++I){const O=m[I],j=O.query,V=_f(t,O);t.listenProvider_.startListening(ss(j),ms(t,j),V.hashFn,V.onComplete)}}}!p&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(ss(e),null):a.forEach(g=>{const m=t.queryToTagMap.get(nr(g));t.listenProvider_.stopListening(ss(g),m)}))}pm(t,a)}return l}function hf(t,e,n,s){const i=zo(t,s);if(i!=null){const r=Yo(i),o=r.path,l=r.queryId,c=Fe(o,e),a=new rn(Ho(l),c,n);return qo(t,o,a)}else return[]}function fm(t,e,n,s){const i=zo(t,s);if(i){const r=Yo(i),o=r.path,l=r.queryId,c=Fe(o,e),a=de.fromObject(n),u=new xs(Ho(l),c,a);return qo(t,o,u)}else return[]}function ro(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,m)=>{const I=Fe(g,i);r=r||Lt(m,I),o=o||Ut(m)});let l=t.syncPointTree_.get(i);l?(o=o||Ut(l),r=r||Lt(l,Z())):(l=new of,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,I)=>{const O=Lt(I,Z());O&&(r=r.updateImmediateChild(m,O))}));const a=uf(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=nr(e);R(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const m=_m();t.queryToTagMap.set(g,m),t.tagToQueryMap.set(m,g)}const u=er(t.pendingWriteTree_,i);let p=sm(l,e,n,u,r,c);if(!a&&!o&&!s){const g=af(l,e);p=p.concat(gm(t,e,g))}return p}function Ko(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Fe(o,e),a=Lt(l,c);if(a)return a});return Zu(i,e,r,n,!0)}function hm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const p=Fe(a,n);s=s||Lt(u,p)});let i=t.syncPointTree_.get(n);i?s=s||Lt(i,Z()):(i=new of,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=er(t.pendingWriteTree_,e._path),c=lf(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return Qx(c)}function Rs(t,e){return df(e,t.syncPointTree_,null,er(t.pendingWriteTree_,Z()))}function df(t,e,n,s){if(K(t.path))return pf(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=Lt(i,Z()));let r=[];const o=G(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=ef(s,o);r=r.concat(df(l,c,a,u))}return i&&(r=r.concat($o(i,t,s,n))),r}}function pf(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=Lt(i,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=ef(s,o),u=t.operationForChild(o);u&&(r=r.concat(pf(u,l,c,a)))}),i&&(r=r.concat($o(i,t,s,n))),r}function _f(t,e){const n=e.query,s=ms(t,n);return{hashFn:()=>(qx(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?um(t,n._path,s):am(t,n._path);{const r=hg(i,n);return gi(t,n,null,r)}}}}function ms(t,e){const n=nr(e);return t.queryToTagMap.get(n)}function nr(t){return t._path.toString()+"$"+t._queryIdentifier}function zo(t,e){return t.tagToQueryMap.get(e)}function Yo(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function qo(t,e,n){const s=t.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=er(t.pendingWriteTree_,e);return $o(s,n,i,null)}function dm(t){return t.fold((e,n,s)=>{if(n&&Ut(n))return[tr(n)];{let i=[];return n&&(i=cf(n)),Ve(s,(r,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(om())(t._repo,t._path):t}function pm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=nr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function _m(){return lm++}function gm(t,e,n){const s=e._path,i=ms(t,e),r=_f(t,n),o=t.listenProvider_.startListening(ss(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)R(!Ut(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,p)=>{if(!K(a)&&u&&Ut(u))return[tr(u).query];{let g=[];return u&&(g=g.concat(cf(u).map(m=>m.query))),Ve(p,(m,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(ss(u),ms(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qo(n)}node(){return this.node_}}class Jo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Jo(this.syncTree_,n)}node(){return Ko(this.syncTree_,this.path_)}}const xm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kc=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ym(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},ym=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bm=function(t,e,n,s){return Xo(e,new Jo(n,t),s)},gf=function(t,e,n){return Xo(t,new Qo(e),n)};function Xo(t,e,n){const s=t.getPriority().val(),i=kc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=kc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,Ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ce(i))),o.forEachChild(_e,(l,c)=>{const a=Xo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function el(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=G(n);for(;i!==null;){const r=En(s.node.children,i)||{children:{},childCount:0};s=new Zo(i,s,r),n=he(n),i=G(n)}return s}function Pn(t){return t.node.value}function xf(t,e){t.node.value=e,oo(t)}function mf(t){return t.node.childCount>0}function vm(t){return Pn(t)===void 0&&!mf(t)}function sr(t,e){Ve(t.node.children,(n,s)=>{e(new Zo(n,t,s))})}function yf(t,e,n,s){n&&e(t),sr(t,i=>{yf(i,e,!0)})}function Cm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ns(t){return new oe(t.parent===null?t.name:Ns(t.parent)+"/"+t.name)}function oo(t){t.parent!==null&&Em(t.parent,t.name,t)}function Em(t,e,n){const s=vm(n),i=St(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,oo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,oo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=/[\[\].#$\/\u0000-\u001F\u007F]/,wm=/[\[\].#$\u0000-\u001F\u007F]/,Ar=10*1024*1024,bf=function(t){return typeof t=="string"&&t.length!==0&&!Im.test(t)},vf=function(t){return typeof t=="string"&&t.length!==0&&!wm.test(t)},Sm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vf(t)},Tm=function(t,e,n,s){tl(No(t,"value"),e,n)},tl=function(t,e,n){const s=n instanceof oe?new $g(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(s)+" with contents = "+e.toString());if(xu(e))throw new Error(t+"contains "+e.toString()+" "+Qt(s));if(typeof e=="string"&&e.length>Ar/3&&Ji(e)>Ar)throw new Error(t+"contains a string greater than "+Ar+" utf8 bytes "+Qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ve(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!bf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Kg(s,o),tl(t,l,s),zg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qt(s)+" in addition to actual children.")}},Cf=function(t,e,n,s){if(!vf(n))throw new Error(No(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Rm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cf(t,e,n)},Ef=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Nm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sm(n))throw new Error(No(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Mo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function If(t,e,n){nl(t,n),wf(t,s=>Mo(s,e))}function _t(t,e,n){nl(t,n),wf(t,s=>et(s,e)||et(e,s))}function wf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(km(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function km(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zn&&Ne("event: "+n.toString()),kn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="repo_interrupt",Dm=25;class Om{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Am,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ci(),this.transactionQueueTree_=new Zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Mm(t,e,n){if(t.stats_=Do(t.repoInfo_),t.forceRestClient_||gg())t.server_=new li(t.repoInfo_,(s,i,r,o)=>{Pc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vt(t.repoInfo_,e,(s,i,r,o)=>{Pc(t,s,i,r,o)},s=>{Dc(t,s)},s=>{Lm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vg(t.repoInfo_,()=>new yx(t.stats_,t.server_)),t.infoData_=new px,t.infoSyncTree_=new Ac({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ts(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),il(t,"connected",!1),t.serverSyncTree_=new Ac({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);_t(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Fm(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sl(t){return xm({timestamp:Fm(t)})}function Pc(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ei(n,a=>Ie(a));o=fm(t.serverSyncTree_,r,c,i)}else{const c=Ie(n);o=hf(t.serverSyncTree_,r,c,i)}else if(s){const c=ei(n,a=>Ie(a));o=cm(t.serverSyncTree_,r,c)}else{const c=Ie(n);o=Ts(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=rr(t,r)),_t(t.eventQueue_,l,o)}function Dc(t,e){il(t,"connected",e),e===!1&&Um(t)}function Lm(t,e){Ve(e,(n,s)=>{il(t,n,s)})}function il(t,e,n){const s=new oe("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(s,i);const r=Ts(t.infoSyncTree_,s,i);_t(t.eventQueue_,s,r)}function Sf(t){return t.nextWriteId_++}function Bm(t,e,n){const s=hm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ie(i).withIndex(e._queryParams.getIndex());ro(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ts(t.serverSyncTree_,e._path,r);else{const l=ms(t.serverSyncTree_,e);o=hf(t.serverSyncTree_,e._path,r,l)}return _t(t.eventQueue_,e._path,o),gi(t.serverSyncTree_,e,n,null,!0),r},i=>(ir(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function Wm(t,e,n,s,i){ir(t,"set",{path:e.toString(),value:n,priority:s});const r=sl(t),o=Ie(n,s),l=Ko(t.serverSyncTree_,e),c=gf(o,l,r),a=Sf(t),u=ff(t.serverSyncTree_,e,c,a,!0);nl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,m)=>{const I=g==="ok";I||He("set at "+e+" failed: "+g);const O=Xt(t.serverSyncTree_,a,!I);_t(t.eventQueue_,e,O),jm(t,i,g,m)});const p=kf(t,e);rr(t,p),_t(t.eventQueue_,p,[])}function Um(t){ir(t,"onDisconnectEvents");const e=sl(t),n=ci();eo(t.onDisconnect_,Z(),(i,r)=>{const o=bm(i,r,t.serverSyncTree_,e);Yu(n,i,o)});let s=[];eo(n,Z(),(i,r)=>{s=s.concat(Ts(t.serverSyncTree_,i,r));const o=kf(t,i);rr(t,o)}),t.onDisconnect_=ci(),_t(t.eventQueue_,Z(),s)}function Hm(t,e,n){let s;G(e._path)===".info"?s=ro(t.infoSyncTree_,e,n):s=ro(t.serverSyncTree_,e,n),If(t.eventQueue_,e._path,s)}function Oc(t,e,n){let s;G(e._path)===".info"?s=gi(t.infoSyncTree_,e,n):s=gi(t.serverSyncTree_,e,n),If(t.eventQueue_,e._path,s)}function Vm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Pm)}function ir(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function jm(t,e,n,s){e&&kn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Tf(t,e,n){return Ko(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function rl(t,e=t.transactionQueueTree_){if(e||or(t,e),Pn(e)){const n=Nf(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Gm(t,Ns(e),n)}else mf(e)&&sr(e,n=>{rl(t,n)})}function Gm(t,e,n){const s=n.map(a=>a.currentWriteId),i=Tf(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const p=Fe(e,u.path);r=r.updateChild(p,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ir(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(Xt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();or(t,el(t.transactionQueueTree_,e)),rl(t,t.transactionQueueTree_),_t(t.eventQueue_,e,u);for(let g=0;g<p.length;g++)kn(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{He("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}rr(t,e)}},o)}function rr(t,e){const n=Rf(t,e),s=Ns(n),i=Nf(t,n);return $m(t,i,s),s}function $m(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Fe(n,c.path);let u=!1,p;if(R(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,p=c.abortReason,i=i.concat(Xt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Dm)u=!0,p="maxretry",i=i.concat(Xt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=Tf(t,c.path,o);c.currentInputSnapshot=g;const m=e[l].update(g.val());if(m!==void 0){tl("transaction failed: Data returned ",m,c.path);let I=Ie(m);typeof m=="object"&&m!=null&&St(m,".priority")||(I=I.updatePriority(g.getPriority()));const j=c.currentWriteId,V=sl(t),q=gf(I,g,V);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=q,c.currentWriteId=Sf(t),o.splice(o.indexOf(j),1),i=i.concat(ff(t.serverSyncTree_,c.path,q,c.currentWriteId,c.applyLocally)),i=i.concat(Xt(t.serverSyncTree_,j,!0))}else u=!0,p="nodata",i=i.concat(Xt(t.serverSyncTree_,c.currentWriteId,!0))}_t(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}or(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)kn(s[l]);rl(t,t.transactionQueueTree_)}function Rf(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&Pn(s)===void 0;)s=el(s,n),e=he(e),n=G(e);return s}function Nf(t,e){const n=[];return Af(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Af(t,e,n){const s=Pn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);sr(e,i=>{Af(t,i,n)})}function or(t,e){const n=Pn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xf(e,n.length>0?n:void 0)}sr(e,s=>{or(t,s)})}function kf(t,e){const n=Ns(Rf(t,e)),s=el(t.transactionQueueTree_,e);return Cm(s,i=>{kr(t,i)}),kr(t,s),yf(s,i=>{kr(t,i)}),n}function kr(t,e){const n=Pn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xf(e,void 0):n.length=r+1,_t(t.eventQueue_,Ns(e),i);for(let o=0;o<s.length;o++)kn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mc=function(t,e){const n=Ym(t),s=n.namespace;n.domain==="firebase.com"&&Et(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Nu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},Ym=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(u,p)),u<p&&(i=Km(t.substring(u,p)));const g=zm(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const m=e.slice(0,a);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class Qm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ol{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Bu(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=yc(this._queryParams),n=ko(e);return n==="{}"?"default":n}get _queryObject(){return yc(this._queryParams)}isEqual(e){if(e=Nn(e),!(e instanceof ol))return!1;const n=this._repo===e._repo,s=Mo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gg(this._path)}}class Tt extends ol{constructor(e,n){super(e,n,new Wo,!1)}get parent(){const e=Uu(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ys{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=lo(this.ref,e);return new ys(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ys(i,lo(this.ref,s),_e)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bs(t,e){return t=Nn(t),t._checkNotDeleted("ref"),e!==void 0?lo(t._root,e):t._root}function lo(t,e){return t=Nn(t),G(t._path)===null?Rm("child","path",e):Cf("child","path",e),new Tt(t._repo,ve(t._path,e))}function Jm(t){return Ef("remove",t._path),Df(t,null)}function Df(t,e){t=Nn(t),Ef("set",t._path),Tm("set",e,t._path);const n=new Qi;return Wm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Xm(t){t=Nn(t);const e=new Pf(()=>{}),n=new lr(e);return Bm(t._repo,t,n).then(s=>new ys(s,new Tt(t._repo,t._path),t._queryParams.getIndex()))}class lr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new qm("value",this,new ys(e.snapshotNode,new Tt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qm(this,e,n):null}matches(e){return e instanceof lr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,p)=>{Oc(t._repo,t,l),c(u,p)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Pf(n,r||void 0),l=new lr(o);return Hm(t._repo,t,l),()=>Oc(t._repo,t,l)}function e0(t,e,n,s){return Zm(t,"value",e,n,s)}em(Tt);rm(Tt);/**
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
 */const t0="FIREBASE_DATABASE_EMULATOR_HOST",co={};let n0=!1;function s0(t,e,n,s){t.repoInfo_=new Nu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function i0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mc(r,i),l=o.repoInfo,c;typeof process<"u"&&tc&&(c=tc[t0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Mc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new mg(t.name,t.options,e);Nm("Invalid Firebase Database URL",o),K(o.path)||Et("Database URL must point to the root of a Firebase Database (not including a child path).");const u=o0(l,t,a,new xg(t,n));return new l0(u,t)}function r0(t,e){const n=co[e];(!n||n[t.key]!==t)&&Et(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Vm(t),delete n[t.key]}function o0(t,e,n,s){let i=co[e.name];i||(i={},co[e.name]=i);let r=i[t.toURLString()];return r&&Et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Om(t,n0,n,s),i[t.toURLString()]=r,r}class l0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Mm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(r0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Et("Cannot call "+e+" on a deleted database.")}}function c0(t=V_(),e){const n=L_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Sp("database");s&&a0(n,...s)}return n}function a0(t,e,n,s={}){t=Nn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ti(s,r.repoInfo_.emulatorOptions))return;Et("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Et('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new js(js.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Tp(s.mockUserToken,t.app.options.projectId);o=new js(l)}s0(r,i,s,o)}/**
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
 */function u0(t){tg(H_),si(new us("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return i0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(nc,sc,t),yn(nc,sc,"esm2017")}vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};u0();const Rt=xi;(function(t,e){const n=xi,s=t();for(;;)try{if(parseInt(n(157))/1*(parseInt(n(152))/2)+parseInt(n(146))/3*(-parseInt(n(158))/4)+-parseInt(n(153))/5*(parseInt(n(145))/6)+-parseInt(n(161))/7*(-parseInt(n(148))/8)+parseInt(n(150))/9*(parseInt(n(162))/10)+parseInt(n(160))/11*(-parseInt(n(159))/12)+-parseInt(n(142))/13===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(mi,992928);function xi(t,e){const n=mi();return xi=function(s,i){return s=s-142,n[s]},xi(t,e)}function mi(){const t=["iamwait","720775593565","183450zXubfa","3jKzWdz","iamwait.firebasestorage.app","88TqQvjM","1:720775593565:web:1a263bf6a87ecfea3817b4","405qmYorg","G-3RRDNZ9ME5","2pslPFG","65DioVYq","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","iamwait.firebaseapp.com","1816655PzCvKH","4133416fyJjJl","341268wCQjzJ","187OsEtQF","131089NDSWee","375810UewvRb","10485501oMKqnW"];return mi=function(){return t},mi()}const f0={apiKey:Rt(154),authDomain:Rt(156),databaseURL:Rt(155),projectId:Rt(143),storageBucket:Rt(147),messagingSenderId:Rt(144),appId:Rt(149),measurementId:Rt(151)},h0=fu(f0),Ws=c0(h0),ut=yi;function yi(t,e){const n=bi();return yi=function(s,i){return s=s-230,n[s]},yi(t,e)}(function(t,e){const n=yi,s=t();for(;;)try{if(-parseInt(n(230))/1*(parseInt(n(263))/2)+-parseInt(n(265))/3+parseInt(n(254))/4+-parseInt(n(241))/5*(-parseInt(n(235))/6)+parseInt(n(253))/7*(-parseInt(n(243))/8)+parseInt(n(250))/9*(parseInt(n(251))/10)+parseInt(n(268))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(bi,134435);const Dn=pp("fbStore2",{state:()=>({gameId:"",gameNames:{g1:ut(266),g2:ut(240),g3:ut(258)},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:-1,playNumber:0,gameLink:""}),actions:{async getField(t){const e=ut,n={QPZCi:function(i,r){return i(r)},ytofm:function(i,r){return i+r},cFEJP:e(237),cuFmp:function(i,r){return i(r)}},s=Bs(Ws,t);return n[e(234)](Xm,s)[e(267)](i=>{const r=e;if(i[r(232)]()){const o=i[r(257)]();return n[r(269)](jn,n[r(244)](r(259)+t+" = ",JSON.stringify(o))),o}else return jn(n.ytofm(t,n[r(264)])),r(239)})},async setField(t,e){const n=ut,s={BonUA:function(r,o){return r(o)},zsfAC:function(r,o){return r+o},MlxZJ:n(247),KGEMB:"Ошибка записи данных: ",RkKDK:function(r,o,l){return r(o,l)}},i=s[n(256)](Bs,Ws,t);return s.RkKDK(Df,i,e).then(()=>{const r=n;s.BonUA(jn,s[r(249)](t,s[r(238)]))})[n(231)](r=>{const o=n;console[o(242)](s[o(260)],r)})},async onValue(t){const e=ut,n={Wqtom:function(i,r){return i(r)},JhWNC:function(i,r,o){return i(r,o)}},s=n.JhWNC(Bs,Ws,t);n[e(261)](e0,s,i=>{const r=e;n[r(248)](jn,r(236)+t+" на прослушке"),this[r(246)]=i[r(257)]()})},async removeField(t){const e=ut,n={NjGlh:function(i,r){return i(r)}};console.log(t);const s=Bs(Ws,t);n.NjGlh(Jm,s)[e(267)](()=>{const i=e;n[i(252)](jn,"Данные "+t+i(262))})}}});function bi(){const t=[" -  данные записаны","Wqtom","zsfAC","9fZcQuv","1651810xxNOAL","NjGlh","7UltXRa","155420BNhmKX","log","RkKDK","val","Морской бой",">>> Данные по ","KGEMB","JhWNC"," удалены!","377822xrRBlj","cFEJP","778623LiFxBd","Камень ножницы бумага","then","6238870BeLGfu","QPZCi","1QoUzsG","catch","exists","%c ","cuFmp","6IUTkNg","########### ########## Данные "," : данные не найдены","MlxZJ","empty","Крестики нолики","310ycUcdh","error","1507048bQLOBz","ytofm","color: darkgreen","lookField"];return bi=function(){return t},bi()}const jn=t=>console[ut(255)](ut(233)+t,ut(245));function vi(t,e){const n=Ci();return vi=function(s,i){return s=s-196,n[s]},vi(t,e)}const Fc=vi;function Ci(){const t=["25298UgIIlo","iAmWaitingForYou","1157256EFmlVb"," и договориться о выборе игры "," Камень ножницы бумага ","TpGTO","TNLLJ","zqkmT","div","VVTES","button","gameId","98330kyZnlM","QTgSm","qcktB","lnaYx","DxCjF","8447328NMBlTt","xvXfX","gameChanged","ZEgSq","WvUpE","log","12436886kiEmEZ","4049270KglSgR"," Крестики нолики ","spxWr","aKmNp","oyplg","XrTyk","dQpMO","xZmYv","Выберите игру","4707wrZmsN"," Морской бой ","1129860AupcDM","eoEjt","Zodst"," Необходимо будет попросить другого участника найти этот miniapp по имени: ","122psZYJg","ListGames","eHyUJ","9TTVuVl","XfymS"," Начальная страница "];return Ci=function(){return t},Ci()}(function(t,e){const n=vi,s=t();for(;;)try{if(parseInt(n(209))/1*(-parseInt(n(203))/2)+-parseInt(n(206))/3*(-parseInt(n(199))/4)+-parseInt(n(233))/5+parseInt(n(211))/6+-parseInt(n(232))/7+-parseInt(n(226))/8+parseInt(n(197))/9*(parseInt(n(221))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ci,997284);const d0=Tn({__name:Fc(204),emits:["gameChanged"],setup(t,{emit:e}){const n=Fc,s={xZmYv:function(l,c){return l+c},Muuap:function(l,c){return l(c)},aKmNp:n(228),XfymS:function(l){return l()},qcktB:function(l,c,a,u){return l(c,a,u)},VVTES:n(217),Zodst:function(l,c){return l(c)},zqkmT:n(208),lnaYx:function(l,c,a,u,p){return l(c,a,u,p)},nHzhd:n(196),DxCjF:function(l,c,a,u,p){return l(c,a,u,p)},xvXfX:n(219),XrTyk:n(213),WvUpE:function(l,c,a,u,p){return l(c,a,u,p)},GYmOg:function(l){return l()},eoEjt:n(234),dQpMO:function(l,c,a,u,p){return l(c,a,u,p)},TpGTO:function(l){return l()},TNLLJ:function(l,c,a,u,p){return l(c,a,u,p)},eHyUJ:function(l,c,a,u,p){return l(c,a,u,p)},oyplg:function(l,c){return l(c)},QTgSm:n(202),ydYIW:function(l,c,a,u,p){return l(c,a,u,p)},ZEgSq:n(210),spxWr:n(212)},i=Dn(),r=e;function o(l){const c=n;console[c(231)](l),i[c(220)]=s[c(240)]("g",l),s.Muuap(r,s[c(236)])}return(l,c)=>{const a=n;return s[a(207)](se),s[a(223)](ae,s[a(218)],null,[c[3]||(c[3]=s[a(201)](ie,s[a(216)])),c[4]||(c[4]=s[a(224)](y,"h3",null,s.nHzhd,-1)),c[5]||(c[5]=s[a(225)](y,"br",null,null,-1)),s[a(223)](y,s[a(227)],{onClick:c[0]||(c[0]=u=>o(1))},s[a(238)]),c[6]||(c[6]=s[a(230)](y,"br",null,null,-1)),c[7]||(c[7]=s.GYmOg(ie)),c[8]||(c[8]=s.lnaYx(y,"br",null,null,-1)),y(s.xvXfX,{onClick:c[1]||(c[1]=u=>o(2))},s[a(200)]),c[9]||(c[9]=s[a(239)](y,"br",null,null,-1)),c[10]||(c[10]=s[a(214)](ie)),c[11]||(c[11]=s[a(215)](y,"br",null,null,-1)),y(s[a(227)],{onClick:c[2]||(c[2]=u=>o(3))},a(198)),c[12]||(c[12]=s[a(215)](y,"br",null,null,-1)),c[13]||(c[13]=s[a(225)](y,"br",null,null,-1)),c[14]||(c[14]=ie()),c[15]||(c[15]=s[a(205)](y,"br",null,null,-1)),c[16]||(c[16]=s[a(237)](ie,s[a(222)])),c[17]||(c[17]=s.ydYIW(y,"br",null,null,-1)),c[18]||(c[18]=s.TpGTO(ie)),c[19]||(c[19]=y("br",null,null,-1)),c[20]||(c[20]=s[a(224)](y,"b",null,s[a(229)],-1)),c[21]||(c[21]=s.ydYIW(y,"br",null,null,-1)),c[22]||(c[22]=s.GYmOg(ie)),c[23]||(c[23]=y("br",null,null,-1)),c[24]||(c[24]=s[a(237)](ie,s[a(235)]))])}}}),Ei=wi;function Ii(){const t=["button","NWatD","panel","pFsRY","toExit","MenuButton","1229466YzVkPD","Инфо","value","5838840viWhIg","AQqwm","UiUYU","OKqaC","eXCNW","179760GVmdgn","menuBt","YciHm","usefY","div","flkSc","GVBoe","328947CAoamT","606410blJBQK","171956eyFTkS","475404nAgmoB","56WgVVrd","20kqBhtn","sjhhN","RjkjI","ASwea"];return Ii=function(){return t},Ii()}(function(t,e){const n=wi,s=t();for(;;)try{if(-parseInt(n(132))/1+parseInt(n(133))/2+-parseInt(n(130))/3*(parseInt(n(135))/4)+parseInt(n(131))/5+parseInt(n(145))/6+parseInt(n(134))/7*(-parseInt(n(153))/8)+parseInt(n(148))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,312694);const p0={class:Ei(154)},_0={key:0,class:Ei(141)};function wi(t,e){const n=Ii();return wi=function(s,i){return s=s-125,n[s]},wi(t,e)}const g0=Tn({__name:Ei(144),emits:["toExit"],setup(t,{emit:e}){const n=Ei,s={YeRjb:function(l,c){return l(c)},sjhhN:n(143),AQqwm:function(l){return l()},NWatD:n(127),usefY:function(l,c,a,u){return l(c,a,u)},OKqaC:function(l,c,a,u){return l(c,a,u)},ASwea:n(139),flkSc:"menuBt_bt",RjkjI:function(l){return l()},GVBoe:"Удалить игру",UiUYU:function(l){return l()},eXCNW:function(l,c,a,u,p){return l(c,a,u,p)},YciHm:n(146),durBq:function(l,c,a){return l(c,a)},pFsRY:function(l){return l()}},i=e,r=s[n(142)](Be);function o(l){const c=n;switch(l){case(l=1):s.YeRjb(i,s[c(136)]);break}r[c(147)]=!1}return(l,c)=>{const a=n;return s[a(149)](se),ae(s[a(140)],p0,[s[a(126)](y,a(127),null,[s[a(151)](y,s[a(138)],{class:s[a(128)],onClick:c[0]||(c[0]=u=>r[a(147)]=!r[a(147)])},"❁")]),r[a(147)]?(s[a(137)](se),s[a(126)](ae,s[a(140)],_0,[y("a",{onClick:c[1]||(c[1]=u=>o(1))},s[a(129)]),c[2]||(c[2]=s[a(150)](ie)),c[3]||(c[3]=s[a(152)](y,"br",null,null,-1)),c[4]||(c[4]=s.eXCNW(y,"a",null,s[a(125)],-1))])):s.durBq(Pe,"",!0)])}}}),As=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},x0=As(g0,[["__scopeId","data-v-ff2e1591"]]);function Si(t,e){const n=Ti();return Si=function(s,i){return s=s-309,n[s]},Si(t,e)}const It=Si;function Ti(){const t=["push","UsNPx","QPSnD","VTKRz","154yEOmWs","LzAgG","wYBgh","saLVH","button","PLIjS","fbwXY","Список желающих играть:","then","uypit","pSKrw","qNsWq","xlFmY","4px","zeKWa","GVyEG","* нельзя выбирать себя","getItem","IxpFI","name","Играем","::::::: Связывание :::::::","kDdkm","OdCqj","qULmD","setField","eIJuf","bhoNi","pyPjZ","jQIHR","Ypkxs","value","RreWa","bmqqS","xhXfB","StLxK","fdTDf","* можете поменять ваш Никнейм","ZpROF","XpnVw","2|6|3|0|4|7|5|1","ojsEQ"," stage:","xpFeu","QKETj","Сменить nickName","red-bt","OBBRz","30px","now","slice","Нет желающих, отменяю ожидание","empty","/look/","CbNYD","2LgrGpv","Нет ответа, отменяю выбор","mhAMM","onValue","fTMWb","nGQqt","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","myName","7993952xLRBCB","mjjco","20px","uXzbo","ROEAm","xOipY","eQwgk","gameLink","WFtBU","kEPlE","playNumber"," с игроком ","ZvLwy","urhwN","reload"," Вас выбрал игрок: ","ВСЕ НАСТРОЙКИ ИГРЫ","mOSDi","btkGU","TpvYr","KXiWF","uFTaJ","Нахожусь в списке, жду соперника","gameId","red-notice","EHhZs","div","JrdBi","FHQXh","AZoBx","QzpiG","Хорошо бы сообщить сопернику, что вы ушли из игры","bzjIr","onClick","tjThO","igZbt","KsJcV","hZmIy","...загрузка","ojLns","zSdtq","getField","split","38932883ZeWIDT","fwQDm","wGseX","cZbec","OADmG","xtGdd","Qvddt","/list/","Согласиться","larger","id2","length","RopXB"," ИГРАЙТЕ ВДВОЕМ ","dpjKw","myNickName","жду пока не откликнится ","name2","13476FqRMZF","311526ShUrjp","myId","adYvf","xCxHS","LYytZ","zXcPZ","12353sJkXoQ","603bjMpIy","uKarL","oRoYy","855TwhWgh","AGita","img","xHbko","aspTk","RRXVc","DvwYu","OuWlF","JRbuk","YYpPj","uPBvf","/games/","mFcsY","setItem","tXZIi","wgyUB","LouUu","#ddd","CIZUE","OWBHm","AZRFa","bKoKw","forEach","xPmUg","FKSAl"," Выбрал игрока ","context","DolJM","zXbbt","removeField","red","WqBJm","wrtfo","RzwYL","hMZpa","CijzM","keys","mEdRb","stage","ESkmk","vWfga","Играть","247190eVhbeq","qeuGa","log","res","aDIvO","7879450jGBLBk","WmnOD","GIsFo","/look","oIrmA","RoMAy","lZkYI","includes","__BinderComp","lookField","PzyMS","JExDm","rxFiJ","acyZt"];return Ti=function(){return t},Ti()}(function(t,e){const n=Si,s=t();for(;;)try{if(parseInt(n(410))/1*(parseInt(n(334))/2)+parseInt(n(414))/3*(-parseInt(n(403))/4)+parseInt(n(461))/5+-parseInt(n(404))/6*(-parseInt(n(479))/7)+parseInt(n(342))/8+-parseInt(n(411))/9*(-parseInt(n(456))/10)+-parseInt(n(385))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ti,886404);const m0={key:0},y0={key:1},b0={key:2},v0={key:3},C0={key:4},E0={class:"red-notice"},I0={key:0},w0=[It(375)],S0={key:5},T0={key:0},R0=["onClick"],N0={key:1,class:It(366)},A0={key:6},k0={key:7},P0={key:8},D0={style:{"font-size":It(327)}},O0={style:{color:It(444),"font-size":It(344)}},M0={key:9},F0={style:{"font-size":It(327),background:It(431)}},L0={key:10},B0=!1,W0=Tn({__name:It(469),setup(t){const e=It,n={acyZt:function(h,f){return h===f},zVyRY:e(331),aDIvO:function(h,f){return h+f},tjThO:"5|1|4|0|3|2",jQIHR:e(440),oIrmA:function(h,f){return h+f},GVyEG:e(392),zSdtq:e(319),GIsFo:function(h,f){return h(f)},qNsWq:function(h,f){return h!==f},BCBIU:function(h,f){return h===f},fwQDm:function(h){return h()},xPmUg:">>>> ANALIZ ",OdCqj:function(h){return h()},Fdbrq:"* nickname не может быть меньше 2 букв",IqgWT:function(h,f){return h+f},mjjco:e(332),zXbbt:e(459),urhwN:function(h,f){return h==f},RreWa:function(h,f,d){return h(f,d)},uPBvf:function(h,f){return h+f},wgyUB:function(h,f){return h+f},OADmG:function(h,f){return h+f},CbNYD:function(h,f){return h+f},xOipY:function(h,f){return h+f},UsNPx:function(h,f){return h+f},OBBRz:function(h,f){return h+f},kDdkm:function(h,f){return h+f},JrdBi:"/games/",qULmD:function(h,f){return h(f)},Ypkxs:function(h,f){return h>f},GGjok:function(h,f){return h+f},AGita:function(h,f){return h+f},saLVH:function(h,f){return h+f},wYBgh:e(349),EQYwo:e(358),VTKRz:function(h,f,d){return h(f,d)},lZkYI:function(h,f,d,w,C,k){return h(f,d,w,C,k)},btkGU:e(483),oRoYy:"green-bt",zXcPZ:function(h){return h()},ROEAm:function(h){return h()},aspTk:function(h,f,d,w,C){return h(f,d,w,C)},RopXB:function(h,f,d,w){return h(f,d,w)},LouUu:"div",bKoKw:function(h,f,d,w,C){return h(f,d,w,C)},IxpFI:e(500),wrtfo:function(h,f,d,w,C){return h(f,d,w,C)},qeuGa:function(h,f,d){return h(f,d)},KXiWF:function(h,f){return h+f},hMZpa:function(h,f){return h(f)},AZoBx:function(h,f){return h(f)},DvwYu:" : ",xpFeu:function(h,f){return h+f},fbwXY:function(h,f){return h+f},YYpPj:e(321),nGQqt:function(h,f,d,w,C){return h(f,d,w,C)},xCxHS:function(h,f){return h===f},adYvf:function(h,f){return h(f)},WmnOD:function(h,f){return h===f},DolJM:function(h){return h()},KsJcV:e(398),EHhZs:e(416),xHbko:function(h,f,d,w,C){return h(f,d,w,C)},ojLns:function(h,f,d,w,C){return h(f,d,w,C)},OuWlF:function(h,f,d,w,C){return h(f,d,w,C)},vWfga:function(h,f,d,w,C){return h(f,d,w,C)},ZvLwy:function(h){return h()},mhAMM:function(h,f,d){return h(f,d)},mOSDi:function(h,f){return h===f},uFTaJ:" Привет ",dwlxn:function(h,f,d){return h(f,d)},LYytZ:"input",QKETj:e(394),StLxK:function(h,f){return h>f},eQwgk:function(h){return h()},QzpiG:function(h,f,d,w){return h(f,d,w)},uKarL:function(h,f,d,w,C){return h(f,d,w,C)},Qvddt:e(486),PzyMS:function(h,f,d){return h(f,d)},FKSAl:function(h,f,d){return h(f,d)},dpjKw:function(h,f,d,w){return h(f,d,w)},RzwYL:e(325),xhXfB:" Зарегистрироваться в поиске ",AZRFa:function(h,f,d,w,C){return h(f,d,w,C)},mEdRb:e(340),cZbec:function(h,f,d,w,C){return h(f,d,w,C)},FHQXh:function(h,f,d){return h(f,d)},WFtBU:e(364),zeKWa:function(h,f,d,w,C){return h(f,d,w,C)},bhoNi:function(h,f,d,w,C){return h(f,d,w,C)},xtGdd:e(495),JRbuk:function(h,f,d,w){return h(f,d,w)},PLIjS:function(h,f){return h===f},fdTDf:function(h,f){return h(f)},kjiAZ:function(h){return h()},RoMAy:function(h,f,d,w){return h(f,d,w)},fTMWb:e(439),OWBHm:function(h,f,d,w,C){return h(f,d,w,C)},uypit:function(h,f,d,w,C){return h(f,d,w,C)},JExDm:function(h,f){return h(f)},xKTPk:e(401),igZbt:e(357),WqBJm:function(h,f){return h(f)},pSKrw:"Отказаться",TpvYr:e(393),bmqqS:function(h,f){return h===f},QPSnD:function(h,f){return h(f)},XUpso:function(h,f,d,w,C){return h(f,d,w,C)},zwUCW:e(499),CIZUE:function(h,f,d,w,C){return h(f,d,w,C)},Dgwya:function(h,f,d,w,C){return h(f,d,w,C)},maEFr:function(h,f,d,w){return h(f,d,w)},ESkmk:function(h,f){return h(f)},RVeBT:function(h,f){return h(f)},xlFmY:function(h,f){return h(f)},XpnVw:function(h,f){return h(f)},eJrrc:function(h,f){return h(f)},VfWbp:function(h,f,d,w,C){return h(f,d,w,C)},pyPjZ:function(h,f){return h(f)},JUCkm:function(h,f,d,w){return h(f,d,w)},kEPlE:function(h,f,d,w){return h(f,d,w)},RRXVc:function(h,f,d){return h(f,d)},ZpROF:function(h,f,d,w,C){return h(f,d,w,C)},LzAgG:"myNickName",TIzBT:function(h,f){return h(f)},CijzM:e(316),ojsEQ:function(h,f,d){return h(f,d)}},s=Dn(),i=n[e(406)](Be,localStorage[e(496)](n[e(480)])||"nick"),r=n[e(445)](Be,[]),o=Be(),l=n[e(346)](Be),c=Be(""),a=n.TIzBT(Be,""),u=Be(n[e(449)]),p=function(){const h=e;i.value&&localStorage[h(427)](h(400),i[h(310)])};function g(){const h=e,f={mFcsY:n[h(376)],bzjIr:n[h(508)]};i.value||(i.value=s[h(341)]),console[h(458)](2323),s[h(383)](n[h(465)](n.GVyEG,s[h(405)]))[h(487)](d=>{const w=h;if(d){if(n[w(474)](d,n.zVyRY))return s[w(452)]=0,!1;o.value={id:d.id,name:d[w(498)]},s[w(383)](n[w(460)](w(425),d[w(349)]))[w(487)](C=>{const k=w,J=f[k(426)][k(384)]("|");let je=0;for(;;){switch(J[je++]){case"0":s[k(452)]=5;continue;case"1":s.gameId=C.gameId;continue;case"2":ye();continue;case"3":s[k(349)]=d[k(349)];continue;case"4":c[k(310)]=C;continue;case"5":console.log(f[k(374)],C);continue}break}})}})}const m=function(h){const f=e,d={aLmfg:n[f(382)],TcjZF:function(C,k){return n[f(474)](C,k)},wGseX:function(C,k){return n[f(463)](C,k)},hZmIy:function(C,k){return n[f(490)](C,k)},uXzbo:function(C,k){return n.BCBIU(C,k)},tXZIi:function(C){return n[f(386)](C)},eIJuf:function(C,k){return C>k}};if(console[f(458)](n[f(437)],h),r.value=[],s[f(452)]===0)return!1;s[f(452)]=1;let w=!1;h&&Object[f(450)](h)[f(436)](C=>{const k=f,J=d.aLmfg.split("|");let je=0;for(;;){switch(J[je++]){case"0":d.TcjZF(C,d[k(387)](String,s[k(405)]))&&C&&(w=!0,d[k(379)](s[k(452)],3)&&(s.stage=2),h[C].id2&&(s[k(452)]=4));continue;case"1":C&&h[C]&&r[k(310)][k(475)]({id:C,name:h[C][k(498)]});continue;case"2":h[C][k(395)]&&d[k(345)](h[C].id2,s.myId)&&(o[k(310)]={id:C,name:h[C][k(498)]});continue;case"3":if(s[k(452)]>3)return!1;continue;case"4":h[C].id2==s[k(405)]&&(w=!0,s.stage=3);continue;case"5":h[C].accept&&d[k(428)](Xe);continue;case"6":C===d[k(387)](String,s[k(405)])&&(o[k(310)]={id:h[C][k(395)],name:h[C][k(402)]});continue;case"7":d[k(505)](s.stage,2)&&!w&&location[k(356)]();continue}break}})};n[e(320)](dt,()=>s[e(405)],h=>h&&setTimeout(g,500));function I(){n[e(502)](O),s.stage=1}function O(){const h=e;s[h(337)](n[h(465)](s[h(365)],h(464)))[h(487)](f=>m(f)),dt(()=>s[h(470)],f=>m(f))}function j(){const h=e;if(i[h(310)].length<2)return u[h(310)]=n.Fdbrq,!1;s.setField(n.IqgWT(n.IqgWT(s[h(365)],n[h(343)]),s[h(405)]),{name:i[h(310)]})}function V(h){const f=e,d={rxFiJ:n[f(442)]};if(n[f(355)](h.id,s[f(405)]))return l.value=!0,n[f(311)](setTimeout,()=>l[f(310)]=!1,2e3),!1;s[f(504)](n[f(424)](s[f(365)],n.mjjco)+h.id,{name:h.name,id2:s.myId,name2:i[f(310)]||s[f(341)]}).then(w=>{const C=f;console[C(458)](d[C(473)],w),o[C(310)]={id:h.id,name:h.name},s[C(452)]=3})}function q(h){const f=e;h&&o[f(310)]&&s[f(504)](n[f(429)](n[f(389)](s[f(365)],n.mjjco),o[f(310)].id),{name:o[f(310)].name,id2:s[f(405)],name2:i[f(310)]||s[f(341)],accept:!0})[f(487)](()=>s[f(452)]=-1),!h&&s.setField(n[f(333)](s[f(365)]+f(332),s[f(405)]),{name:i[f(310)]||s[f(341)]})[f(487)](()=>s.stage=2)}function ee(){const h=e;s[h(504)](n[h(460)](n[h(347)](s[h(365)],n[h(343)]),o[h(310)].id),{name:o[h(310)][h(498)]})[h(487)](()=>s.stage=2)}function F(){const h=e;s[h(443)](n[h(476)](s[h(365)],h(332))+s[h(405)])[h(487)](()=>s[h(452)]=0)}function Q(){var d;const h=e;debugger;a.value=h(373);let f=n[h(463)](String,o[h(310)].id);o.value.id>s[h(405)]?f+="::"+s[h(405)]:f=n[h(429)](s[h(405)]+"::",f),s[h(443)](n.OBBRz(n[h(494)],s.myId)),s[h(443)](n[h(501)](h(392),(d=o[h(310)])==null?void 0:d.id)),s[h(443)](n[h(429)](n.JrdBi,f)),n[h(311)](setTimeout,()=>location.reload(),3e3)}function Xe(){var w,C,k;const h=e;let f=Date[h(328)](),d=n[h(503)](String,o[h(310)].id);n[h(309)](o.value.id,s.myId)?d+=n.GGjok("::",s.myId):d=n[h(415)](n[h(482)](s.myId,"::"),d),console.log(n[h(481)],d),s.setField(n[h(494)]+s[h(405)],{id:(w=o[h(310)])==null?void 0:w.id,name:(C=o.value)==null?void 0:C[h(498)],gameLink:d,date:f}),s[h(504)](n[h(494)]+((k=o[h(310)])==null?void 0:k.id),{id:s[h(405)],name:i[h(310)]||s[h(341)],gameLink:d,date:f}),s[h(504)](n[h(369)]+d,{game:n.EQYwo,gameId:s[h(365)]}),n[h(478)](setTimeout,()=>{var je;const J=h;s[J(443)](n[J(326)](s[J(365)],n[J(343)])+((je=o.value)==null?void 0:je.id)),s.removeField(n[J(424)](n[J(333)](s[J(365)],J(332)),s[J(405)])),location[J(356)]()},2e3)}function ye(){const h=e;s[h(352)]=+s[h(365)][h(329)](1)}return(h,f)=>{var w,C;const d=e;return n[d(346)](se),n.aspTk(ae,Ye,null,[B0?(n[d(346)](se),n.RopXB(ae,n.LouUu,m0,[f[9]||(f[9]=y("hr",null,null,-1)),f[10]||(f[10]=n[d(435)](y,"i",null,n[d(497)],-1)),f[11]||(f[11]=n[d(446)](y,"br",null,null,-1)),n.qeuGa(ie,n[d(389)](n.CbNYD(n[d(362)](n[d(362)](" ",n[d(448)](De,n[d(371)](we,s)[d(405)])),n[d(420)]),De(i[d(310)]))," "),1),f[12]||(f[12]=y("br",null,null,-1)),n[d(311)](ie,n[d(322)](n[d(485)](n[d(423)],n.AZoBx(De,we(s)[d(452)]))," "),1),f[13]||(f[13]=n.nGQqt(y,"hr",null,null,-1))])):n[d(478)](Pe,"",!0),n.xCxHS(n[d(406)](we,s)[d(452)],5)?(n[d(386)](se),n[d(397)](ae,d(368),y0,[n[d(457)](Qe,x0,{onToExit:f[0]||(f[0]=k=>Q())})])):n.RreWa(Pe,"",!0),n[d(462)](n[d(503)](we,s)[d(452)],-1)?(n[d(441)](se),ae("div",b0,f[14]||(f[14]=[y("br",null,null,-1),n[d(339)](y,"br",null,null,-1),n[d(339)](y,"br",null,null,-1),y("br",null,null,-1),n[d(503)](ie,n[d(378)]),n[d(435)](y,n[d(367)],{alt:d(380),src:_p},null,-1),n.wrtfo(y,"br",null,null,-1),n.xHbko(y,"br",null,null,-1),n[d(381)](y,"br",null,null,-1),n[d(421)](y,"br",null,null,-1),n[d(454)](y,"br",null,null,-1),n.bKoKw(y,"br",null,null,-1)]))):Pe("",!0),n[d(407)](we(s)[d(452)],0)?(n[d(354)](se),ae(d(368),v0,[n[d(336)](Qe,d0,{onGameChanged:I})])):n[d(457)](Pe,"",!0),n[d(359)](we(s)[d(452)],1)?(n[d(502)](se),n[d(397)](ae,n[d(430)],C0,[f[18]||(f[18]=n[d(454)](y,"p",null,n[d(363)],-1)),y("p",null,[n.dwlxn(Nh,n[d(381)](y,n[d(408)],{"onUpdate:modelValue":f[1]||(f[1]=k=>i[d(310)]=k),maxlength:"16",minlength:"3",style:{"font-size":n[d(323)],padding:d(492),"text-align":"center"},onInput:f[2]||(f[2]=k=>p()),placeholder:d(324)},null,544),[[np,i[d(310)]]])]),n[d(339)](y,"div",E0,n.hMZpa(De,u[d(310)]),1),r[d(310)]&&n[d(314)](r[d(310)][d(396)],1)?(n.eQwgk(se),n[d(372)](ae,n[d(430)],I0,[f[15]||(f[15]=n[d(412)](y,"h3",null,n[d(391)],-1)),(n[d(448)](se,!0),n[d(412)](ae,Ye,null,n[d(471)](gl,r[d(310)],k=>{const J=d;return n.fwQDm(se),n[J(467)](ae,n[J(360)],{class:n[J(413)],key:k.id,onClick:je=>V(k)},n.qULmD(De,k[J(498)]),9,w0)}),128)),f[16]||(f[16]=n[d(454)](y,"br",null,null,-1)),f[17]||(f[17]=n[d(454)](y,"br",null,null,-1))])):n[d(438)](Pe,"",!0),n.dpjKw(y,n[d(360)],{class:n[d(447)],onClick:f[3]||(f[3]=k=>j())},n[d(313)]),f[19]||(f[19]=n.AZRFa(y,"br",null,null,-1)),f[20]||(f[20]=ie()),f[21]||(f[21]=n[d(417)](y,"br",null,null,-1)),f[22]||(f[22]=n.vWfga(y,"small",null,n[d(451)],-1)),f[23]||(f[23]=n[d(388)](y,"br",null,null,-1)),f[24]||(f[24]=n[d(388)](y,"br",null,null,-1))])):n[d(370)](Pe,"",!0),n[d(371)](we,s)[d(452)]===2?(se(),n[d(399)](ae,d(368),S0,[f[28]||(f[28]=n[d(421)](y,"p",null,n[d(350)],-1)),r[d(310)].length?(n[d(348)](se),n[d(372)](ae,n.LouUu,T0,[f[25]||(f[25]=n[d(339)](y,"h3",null,n[d(391)],-1)),(n[d(448)](se,!0),n.zeKWa(ae,Ye,null,n[d(438)](gl,r[d(310)],k=>{const J=d;return n[J(409)](se),n[J(467)](ae,n.btkGU,{class:n[J(413)],key:k.id,onClick:je=>V(k)},De(k.name),9,R0)}),128)),f[26]||(f[26]=y("br",null,null,-1)),f[27]||(f[27]=n[d(506)](y,"br",null,null,-1))])):n[d(478)](Pe,"",!0),l[d(310)]?(n[d(441)](se),n[d(372)](ae,"div",N0,n[d(390)])):Pe("",!0),f[29]||(f[29]=n[d(381)](y,"br",null,null,-1)),f[30]||(f[30]=n[d(434)](y,"br",null,null,-1)),n.JRbuk(y,n.btkGU,{onClick:f[4]||(f[4]=k=>F())},d(330)),f[31]||(f[31]=y("br",null,null,-1)),f[32]||(f[32]=y("br",null,null,-1))])):n[d(311)](Pe,"",!0),n[d(484)](n[d(315)](we,s)[d(452)],3)?(n.kjiAZ(se),ae(n[d(430)],A0,[n[d(466)](y,"p",null,[f[33]||(f[33]=n[d(448)](ie,n[d(338)])),f[34]||(f[34]=n[d(433)](y,"br",null,null,-1)),n[d(488)](y,"b",null,n[d(371)](De,(w=o[d(310)])==null?void 0:w.name),1),f[35]||(f[35]=ie()),f[36]||(f[36]=n[d(493)](y,"br",null,null,-1)),f[37]||(f[37]=n.JExDm(ie,n.xKTPk))]),n[d(372)](y,n[d(360)],{onClick:f[5]||(f[5]=k=>ee())},d(335))])):Pe("",!0),n.xCxHS(n[d(406)](we,s)[d(452)],4)&&((C=o[d(310)])!=null&&C.id)?(se(),ae(n[d(430)],k0,[f[38]||(f[38]=n.JExDm(ie,n[d(377)])),f[39]||(f[39]=n.nGQqt(y,"br",null,null,-1)),f[40]||(f[40]=n[d(488)](y,"br",null,null,-1)),n[d(388)](y,"b",null,n.WqBJm(De,o[d(310)][d(498)]),1),f[41]||(f[41]=n[d(418)](y,"br",null,null,-1)),f[42]||(f[42]=n.zeKWa(y,"br",null,null,-1)),y(n[d(360)],{class:n[d(447)],onClick:f[6]||(f[6]=k=>q(!1))},n[d(489)]),n[d(466)](y,n[d(360)],{class:n[d(447)],onClick:f[7]||(f[7]=k=>q(!0))},n[d(361)])])):n[d(457)](Pe,"",!0),n[d(312)](n[d(477)](we,s)[d(452)],5)&&o.value?(n[d(502)](se),n[d(372)](ae,n[d(430)],P0,[f[43]||(f[43]=n.XUpso(y,"h3",null,n.zwUCW,-1)),f[44]||(f[44]=n.QPSnD(ie,d(353))),f[45]||(f[45]=n.CIZUE(y,"br",null,null,-1)),f[46]||(f[46]=n.OuWlF(y,"br",null,null,-1)),n[d(422)](y,n[d(430)],D0,[y("b",null,n[d(472)](De,o[d(310)][d(498)]),1)]),f[47]||(f[47]=y("br",null,null,-1)),f[48]||(f[48]=n.Dgwya(y,"br",null,null,-1)),n.maEFr(y,d(368),O0,[n.xHbko(y,"b",null,n[d(453)](De,a[d(310)]),1)])])):Pe("",!0),n[d(477)](we,s)[d(452)]&&[1,2,3,4,5][d(468)](n.RVeBT(we,s)[d(452)])?(n.OdCqj(se),ae(n[d(430)],M0,[f[49]||(f[49]=n[d(432)](y,"hr",null,null,-1)),f[50]||(f[50]=n[d(421)](y,"br",null,null,-1)),y(n[d(430)],F0,n[d(491)](De,n[d(318)](we,s).gameNames[n.eJrrc(we,s).gameId]),1),f[51]||(f[51]=n[d(417)](y,"br",null,null,-1)),f[52]||(f[52]=n.VfWbp(y,"br",null,null,-1))])):Pe("",!0),n[d(474)](n[d(507)](we,s)[d(452)],5)?(n.ROEAm(se),n.JUCkm(ae,n[d(430)],L0,[n[d(351)](y,"button",{onClick:f[8]||(f[8]=k=>ye())},d(455))])):n[d(419)](Pe,"",!0),f[53]||(f[53]=n[d(317)](y,"br",null,null,-1)),f[54]||(f[54]=y("br",null,null,-1))],64)}}}),U0={class:"game"},H0={__name:"StartPage",setup(t){return(e,n)=>(se(),ae("div",U0,[n[0]||(n[0]=y("h1",null,"♕",-1)),y("div",null,[Qe(W0)])]))}},V0=As(H0,[["__scopeId","data-v-161e630d"]]),Of=Ri;(function(t,e){const n=Ri,s=t();for(;;)try{if(parseInt(n(367))/1+-parseInt(n(349))/2*(parseInt(n(410))/3)+-parseInt(n(411))/4*(-parseInt(n(384))/5)+-parseInt(n(399))/6*(parseInt(n(401))/7)+parseInt(n(363))/8*(-parseInt(n(374))/9)+-parseInt(n(351))/10+parseInt(n(406))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ni,762928);function Ri(t,e){const n=Ni();return Ri=function(s,i){return s=s-348,n[s]},Ri(t,e)}const j0={class:Of(358)},G0={style:{"font-size":"20px"}};function Ni(){const t=["Камень","7pKDRKP","setField","Vuipx","UWtmo","dEjFt","18513990IKzUUK","log","/game","gameLink","153XApqWi","16YhcwWH","onValue","12556ETzfcT","UxodE","2345580YSKnVS","DWRCM","eAGSb","Qkjpe","myId","/game/","QZeDm","rama","button","FyaMF","Бумага","QQpbJ","88TVOeeG","zVjck","ZcbSN","pppwS","363212gwPfph","ZcTwZ"," Выбери: ","FnKgr","ficYq","!!! res","XElwU","738315ziyxlL","BSJRU","VMdap","div","qlGHW","mHCUb","wVGhN","BMBuR",">> ","value","1622615MBDZCa","res=","lookField","Камень ножницы бумага","kRRqX","9999999999999","olmkH","uExGu","RzJJN","YELJA","OdFLd","JVsKv","NmOJJ","EFMWi","Свериться","6746070rVoKXP"];return Ni=function(){return t},Ni()}const $0=Tn({__name:"1_StounScissorsPaper",setup(t){const e=Of,n={qlGHW:e(385),Qkjpe:e(372),ZcTwZ:function(c,a){return c+a},olmkH:function(c,a){return c+a},EFMWi:function(c,a){return c+a},NmOJJ:"/games/",FbvCH:e(356),pppwS:e(389),UWtmo:function(c,a){return c+a},YELJA:e(408),BSJRU:function(c){return c()},PyxFm:function(c,a,u,p){return c(a,u,p)},VMdap:e(377),BMBuR:function(c,a,u,p,g){return c(a,u,p,g)},NTkue:function(c,a,u,p,g){return c(a,u,p,g)},RzJJN:e(387),uExGu:function(c,a,u,p,g){return c(a,u,p,g)},dEjFt:function(c,a,u,p,g){return c(a,u,p,g)},ZcbSN:function(c,a){return c(a)},mHCUb:e(369),WTlpu:function(c,a,u,p,g){return c(a,u,p,g)},FyaMF:e(359),OdFLd:function(c,a){return c(a)},FnKgr:function(c,a){return c===a},QZeDm:e(400),Vuipx:"Ножницы",kRRqX:function(c,a,u,p,g){return c(a,u,p,g)},wVGhN:function(c,a,u,p,g){return c(a,u,p,g)},eAGSb:function(c,a){return c===a},ficYq:function(c,a,u,p,g){return c(a,u,p,g)},QQpbJ:function(c,a,u,p){return c(a,u,p)},XElwU:"green-bt",KSBeJ:e(398),DWRCM:" << ",UxodE:function(c,a,u,p,g){return c(a,u,p,g)},zVjck:function(c,a){return c(a)},Zabww:e(382),JVsKv:function(c){return c()},LzXpt:function(c,a,u){return c(a,u)}},s=n.BSJRU(Dn),i=Be(0),r=n[e(395)](Be);n.LzXpt(dt,()=>s[e(386)],c=>o(c));function o(c){const a=e;console.log(n[a(378)],c),r[a(383)]=c}function l(){const c=e,a={sCFkR:n[c(354)]};s[c(402)](n[c(368)](n[c(390)](n[c(397)](n[c(396)],s[c(409)]),n.FbvCH),s[c(355)]),{q:i[c(383)]}).then(u=>{console[c(407)](a.sCFkR,u)})}return n.OdFLd(vs,()=>{const c=e;console[c(407)](n[c(366)]),s[c(348)](n[c(397)](n[c(404)](n[c(396)],s[c(409)]),n[c(393)]))}),(c,a)=>{const u=e;return n[u(375)](se),n.PyxFm(ae,n[u(376)],j0,[a[4]||(a[4]=n[u(381)](y,"br",null,null,-1)),a[5]||(a[5]=n.NTkue(y,"h2",null,n[u(392)],-1)),a[6]||(a[6]=n[u(391)](y,"br",null,null,-1)),a[7]||(a[7]=n[u(405)](y,"br",null,null,-1)),a[8]||(a[8]=n[u(365)](ie,n[u(379)])),a[9]||(a[9]=n[u(405)](y,"br",null,null,-1)),a[10]||(a[10]=n.WTlpu(y,"br",null,null,-1)),a[11]||(a[11]=n.uExGu(y,"br",null,null,-1)),n[u(405)](y,n[u(360)],{class:n[u(394)](xn,{active:n[u(370)](i[u(383)],1)}),onClick:a[0]||(a[0]=p=>i[u(383)]=1)},n[u(357)],2),a[12]||(a[12]=n[u(381)](y,"br",null,null,-1)),a[13]||(a[13]=n[u(405)](y,"br",null,null,-1)),y(u(359),{class:xn({active:n[u(370)](i[u(383)],2)}),onClick:a[1]||(a[1]=p=>i[u(383)]=2)},n[u(403)],2),a[14]||(a[14]=n[u(388)](y,"br",null,null,-1)),a[15]||(a[15]=y("br",null,null,-1)),n[u(380)](y,u(359),{class:xn({active:n[u(353)](i.value,3)}),onClick:a[2]||(a[2]=p=>i.value=3)},u(361),2),a[16]||(a[16]=y("br",null,null,-1)),a[17]||(a[17]=n[u(380)](y,"br",null,null,-1)),a[18]||(a[18]=n[u(371)](y,"br",null,null,-1)),a[19]||(a[19]=y("br",null,null,-1)),a[20]||(a[20]=y("br",null,null,-1)),a[21]||(a[21]=y("br",null,null,-1)),n[u(362)](y,n.FyaMF,{class:n[u(373)],onClick:a[3]||(a[3]=p=>l())},n.KSBeJ),a[22]||(a[22]=n.dEjFt(y,"br",null,null,-1)),a[23]||(a[23]=ie(n[u(352)])),n[u(350)](y,"b",G0,n[u(394)](De,r[u(383)]),1),a[24]||(a[24]=n[u(364)](ie,n.Zabww))])}}}),K0=As($0,[["__scopeId","data-v-71335afa"]]);function Ai(){const t=["lookField","HKvFt","Крестики нолики","385Tmweel","vLPey","div","rama","onValue","8mIpdTd","1122120ILcXDN","YQXup","cwXMf",">> ","value","cOjit","puNpw","502gfTYCT","11195496AZkNhq","2349584WwJhlL","riexB","gameLink","3HcfBVN","log","YbgWt","3617811hKBpyu","2_KrestikiNoliki","927318bCHlNh","/game","uEkFC","fxeAF","2084TKIWZf","DljBA","2751640NPvDaP"];return Ai=function(){return t},Ai()}function ki(t,e){const n=Ai();return ki=function(s,i){return s=s-351,n[s]},ki(t,e)}const ao=ki;(function(t,e){const n=ki,s=t();for(;;)try{if(-parseInt(n(378))/1*(parseInt(n(364))/2)+parseInt(n(369))/3*(-parseInt(n(366))/4)+-parseInt(n(380))/5+-parseInt(n(365))/6+parseInt(n(374))/7+parseInt(n(356))/8*(parseInt(n(372))/9)+parseInt(n(357))/10*(parseInt(n(351))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ai,935149);const z0={class:ao(354)},Y0={style:{"font-size":"20px"}},q0=Tn({__name:ao(373),setup(t){const e=ao,n={vLPey:function(o){return o()},cOjit:function(o,l,c,a){return o(l,c,a)},YbgWt:e(353),fxeAF:function(o,l,c,a,u){return o(l,c,a,u)},YQXup:function(o,l){return o(l)},cwXMf:" Under construction ",OAtVX:" << ",EuKQP:function(o,l,c,a,u){return o(l,c,a,u)},riexB:function(o,l){return o(l)},uEkFC:function(o){return o()},HKvFt:function(o){return o()},puNpw:function(o,l,c){return o(l,c)},DljBA:function(o,l){return o(l)}},s=n[e(376)](Dn),i=n[e(382)](Be);n[e(363)](dt,()=>s[e(381)],o=>r(o));function r(o){const l=e;console[l(370)]("крестики нолики ANALIZ=",o),i[l(361)]=o}return n[e(379)](vs,()=>s[e(355)]("/games/"+s[e(368)]+e(375))),(o,l)=>{const c=e;return n[c(352)](se),n[c(362)](ae,n[c(371)],z0,[l[0]||(l[0]=y("br",null,null,-1)),l[1]||(l[1]=n[c(377)](y,"h2",null,c(383),-1)),l[2]||(l[2]=y("br",null,null,-1)),l[3]||(l[3]=n[c(377)](y,"br",null,null,-1)),l[4]||(l[4]=n[c(358)](ie,n[c(359)])),l[5]||(l[5]=y("br",null,null,-1)),l[6]||(l[6]=ie(n.OAtVX)),n.EuKQP(y,"b",Y0,n.YQXup(De,i[c(361)]),1),l[7]||(l[7]=n[c(367)](ie,c(360)))])}}}),Q0=As(q0,[["__scopeId","data-v-88731bf9"]]),Pi=Di;(function(t,e){const n=Di,s=t();for(;;)try{if(-parseInt(n(221))/1+-parseInt(n(215))/2*(parseInt(n(225))/3)+parseInt(n(208))/4+-parseInt(n(218))/5*(-parseInt(n(219))/6)+-parseInt(n(210))/7+parseInt(n(227))/8+parseInt(n(200))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Oi,322884);function Di(t,e){const n=Oi();return Di=function(s,i){return s=s-197,n[s]},Di(t,e)}const J0={class:Pi(213)},X0={style:{"font-size":Pi(199)}};function Oi(){const t=["value","bkoOZ","ioooI","gameLink","NJPGi","20px","10140273oppbLx","3_SeaWar"," << ","onValue","qcPeL","qbIXn"," Under construction ","MGXNy","569404AUNWiy","log","3554180XjlROk","IkloB","UmMSz","rama","EImRX","2pWYmfx","FGMpU","div","33175JwSOXL","30ZxZTwu","EjoLo","405784oWxBXc","Морской бой","sARZY","BRUrW","445209ctzFRT","EuSkF","660704ysTToX"];return Oi=function(){return t},Oi()}const Z0=Tn({__name:Pi(201),setup(t){const e=Pi,n={sARZY:"Морской бой ANALIZ=",MGXNy:function(o){return o()},FGMpU:function(o,l,c,a){return o(l,c,a)},qbIXn:e(217),qcPeL:function(o,l,c,a,u){return o(l,c,a,u)},NJPGi:function(o,l,c,a,u){return o(l,c,a,u)},EjoLo:e(222),bkoOZ:function(o,l,c,a,u){return o(l,c,a,u)},BRUrW:function(o,l){return o(l)},EImRX:e(206),UmMSz:function(o,l,c,a,u){return o(l,c,a,u)},IkloB:e(202),dqDAk:" >> ",EuSkF:function(o){return o()},ioooI:function(o,l,c){return o(l,c)}},s=n[e(226)](Dn),i=n[e(207)](Be);n[e(230)](dt,()=>s.lookField,o=>r(o));function r(o){const l=e;console[l(209)](n[l(223)],o),i[l(228)]=o}return n[e(224)](vs,()=>s[e(203)]("/games/"+s[e(197)]+"/game")),(o,l)=>{const c=e;return n.MGXNy(se),n[c(216)](ae,n[c(205)],J0,[l[0]||(l[0]=n[c(204)](y,"br",null,null,-1)),l[1]||(l[1]=n.NJPGi(y,"h2",null,n[c(220)],-1)),l[2]||(l[2]=n[c(198)](y,"br",null,null,-1)),l[3]||(l[3]=n[c(229)](y,"br",null,null,-1)),l[4]||(l[4]=n.BRUrW(ie,n[c(214)])),l[5]||(l[5]=n[c(212)](y,"br",null,null,-1)),l[6]||(l[6]=ie(n[c(211)])),n[c(204)](y,"b",X0,n[c(224)](De,i.value),1),l[7]||(l[7]=n[c(224)](ie,n.dqDAk))])}}}),ey=As(Z0,[["__scopeId","data-v-5ed39d34"]]),ty={__name:"App",setup(t){const e=Dn();let n=_h(V0);dt(()=>e.playNumber,i=>s(i));function s(i){switch(console.log(i),i){case 1:n.value=K0;break;case 2:n.value=Q0;break;case 3:n.value=ey;break}}return vs(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.myId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||0,e.myName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=953446309)},500))}),(i,r)=>(se(),Va(Gh(we(n))))}},ny=Fi;(function(t,e){const n=Fi,s=t();for(;;)try{if(parseInt(n(152))/1*(parseInt(n(153))/2)+parseInt(n(150))/3+parseInt(n(147))/4*(-parseInt(n(145))/5)+parseInt(n(149))/6+parseInt(n(154))/7*(-parseInt(n(146))/8)+-parseInt(n(155))/9+parseInt(n(148))/10*(parseInt(n(151))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Mi,962896);function Mi(){const t=["827905SohCZk","11537048RPRSOh","4sklEeU","20DHywqR","5096034lnsIwH","1048158hvhfUC","5366581iAayWi","30271RhovbW","86IiczCA","7hJFeOp","8149608bPgKAl","use"];return Mi=function(){return t},Mi()}function Fi(t,e){const n=Mi();return Fi=function(s,i){return s=s-145,n[s]},Fi(t,e)}const sy=cp(),Lc=rp(ty);Lc[ny(156)](sy),Lc.mount("#app");
