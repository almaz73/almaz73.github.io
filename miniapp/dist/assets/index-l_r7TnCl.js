function zs(t,e){const n=qs();return zs=function(s,i){return s=s-222,n[s]},zs(t,e)}function qs(){const t=["include","supports","integrity","115143ZCSSyB","iHgXG","200SFLtGa","7009338AJHVsj","lGmHX","same-origin","use-credentials","6414471yybxwC","LINK",'link[rel="modulepreload"]',"rel","29970JxMmhb","type","referrerPolicy","observe","modulepreload","XtUps","iusip","addedNodes","childList","crossOrigin","4332156zfpsdG","TwFWO","credentials","querySelectorAll","JrTwt","IxMvp","link","DBDVE","tagName","23OhSBFV","oWKLW","98522nNTKgA","relList","629550JkDYQe","nHexX"];return qs=function(){return t},qs()}(function(t,e){const n=zs,s=t();for(;;)try{if(-parseInt(n(224))/1*(-parseInt(n(226))/2)+parseInt(n(244))/3+parseInt(n(254))/4+-parseInt(n(228))/5+-parseInt(n(236))/6+parseInt(n(233))/7*(parseInt(n(235))/8)+-parseInt(n(240))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(qs,630405),function(){const e=zs,n={iusip:function(o,l){return o!==l},RvISw:e(252),iHgXG:function(o,l){return o===l},bxDeZ:e(241),XtUps:function(o,l){return o===l},IxMvp:function(o,l){return o(l)},lGmHX:function(o,l){return o===l},FuLRS:e(230),nHexX:"anonymous",tNVXO:"omit",TwFWO:e(238),oWKLW:function(o,l,c){return o(l,c)},JrTwt:e(260),DBDVE:function(o,l){return o(l)}},s=document.createElement(n[e(258)])[e(227)];if(s&&s.supports&&s[e(231)](e(248)))return;for(const o of document[e(257)](e(242)))n[e(222)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(250)](c[l(245)],n.RvISw))for(const a of c[l(251)])n[l(234)](a[l(223)],n.bxDeZ)&&n[l(249)](a[l(243)],l(248))&&n[l(259)](r,a)})[e(247)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(232)]&&(c[l(232)]=o[l(232)]),o.referrerPolicy&&(c[l(246)]=o[l(246)]),n[l(237)](o[l(253)],l(239))?c[l(256)]=n.FuLRS:n.XtUps(o.crossOrigin,n[l(229)])?c[l(256)]=n.tNVXO:c[l(256)]=n[l(255)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(259)](i,o);n[l(225)](fetch,o.href,c)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},pn=[],ft=()=>{},Lh=()=>!1,Fi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),po=t=>t.startsWith("onUpdate:"),Pe=Object.assign,_o=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fh=Object.prototype.hasOwnProperty,ee=(t,e)=>Fh.call(t,e),H=Array.isArray,_n=t=>Bi(t)==="[object Map]",Wc=t=>Bi(t)==="[object Set]",U=t=>typeof t=="function",ye=t=>typeof t=="string",Ut=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Hc=t=>(ge(t)||U(t))&&U(t.then)&&U(t.catch),Uc=Object.prototype.toString,Bi=t=>Uc.call(t),Bh=t=>Bi(t).slice(8,-1),Vc=t=>Bi(t)==="[object Object]",go=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qn=fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wh=/-(\w)/g,Qe=Wi(t=>t.replace(Wh,(e,n)=>n?n.toUpperCase():"")),Hh=/\B([A-Z])/g,on=Wi(t=>t.replace(Hh,"-$1").toLowerCase()),Hi=Wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=Wi(t=>t?`on${Hi(t)}`:""),Dt=(t,e)=>!Object.is(t,e),Us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Or=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dl;const Ui=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ye(s)?Gh(s):mo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ye(t)||ge(t))return t}const Uh=/;(?![^(]*\))/g,Vh=/:([^]+)/,jh=/\/\*[^]*?\*\//g;function Gh(t){const e={};return t.replace(jh,"").split(Uh).forEach(n=>{if(n){const s=n.split(Vh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function gn(t){let e="";if(ye(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=gn(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zh=fo($h);function Gc(t){return!!t||t===""}const $c=t=>!!(t&&t.__v_isRef===!0),ke=t=>ye(t)?t:t==null?"":H(t)||ge(t)&&(t.toString===Uc||!U(t.toString))?$c(t)?ke(t.value):JSON.stringify(t,zc,2):String(t),zc=(t,e)=>$c(e)?zc(t,e.value):_n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ur(s,r)+" =>"]=i,n),{})}:Wc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ur(n))}:Ut(e)?ur(e):ge(e)&&!H(e)&&!Vc(e)?String(e):e,ur=(t,e="")=>{var n;return Ut(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class qc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Kc(t){return new qc(t)}function Yc(){return Me}function qh(t,e=!1){Me&&Me.cleanups.push(t)}let he;const hr=new WeakSet;class Xc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&Me.active&&Me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hr.has(this)&&(hr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pl(this),Zc(this);const e=he,n=nt;he=this,nt=!0;try{return this.fn()}finally{ea(this),he=e,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bo(e);this.deps=this.depsTail=void 0,pl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kr(this)&&this.run()}get dirty(){return kr(this)}}let Qc=0,Kn,Yn;function Jc(t,e=!1){if(t.flags|=8,e){t.next=Yn,Yn=t;return}t.next=Kn,Kn=t}function xo(){Qc++}function yo(){if(--Qc>0)return;if(Yn){let e=Yn;for(Yn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Kn;){let e=Kn;for(Kn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Zc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ea(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),bo(s),Kh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function kr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ta(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ta(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===os))return;t.globalVersion=os;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!kr(t)){t.flags&=-3;return}const n=he,s=nt;he=t,nt=!0;try{Zc(t);const i=t.fn(t._value);(e.version===0||Dt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{he=n,nt=s,ea(t),t.flags&=-3}}function bo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)bo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Kh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nt=!0;const na=[];function Vt(){na.push(nt),nt=!1}function jt(){const t=na.pop();nt=t===void 0?!0:t}function pl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=he;he=void 0;try{e()}finally{he=n}}}let os=0;class Yh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!he||!nt||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new Yh(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,sa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=s)}return n}trigger(e){this.version++,os++,this.notify(e)}notify(e){xo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yo()}}}function sa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)sa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ks=new WeakMap,Jt=Symbol(""),Mr=Symbol(""),ls=Symbol("");function Ne(t,e,n){if(nt&&he){let s=Ks.get(t);s||Ks.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new vo),i.map=s,i.key=n),i.track()}}function yt(t,e,n,s,i,r){const o=Ks.get(t);if(!o){os++;return}const l=c=>{c&&c.trigger()};if(xo(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&go(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,g)=>{(g==="length"||g===ls||!Ut(g)&&g>=u)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ls)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Jt)),_n(t)&&l(o.get(Mr)));break;case"delete":c||(l(o.get(Jt)),_n(t)&&l(o.get(Mr)));break;case"set":_n(t)&&l(o.get(Jt));break}}yo()}function Xh(t,e){const n=Ks.get(t);return n&&n.get(e)}function cn(t){const e=Q(t);return e===t?e:(Ne(e,"iterate",ls),Ye(t)?e:e.map(Re))}function Vi(t){return Ne(t=Q(t),"iterate",ls),t}const Qh={__proto__:null,[Symbol.iterator](){return fr(this,Symbol.iterator,Re)},concat(...t){return cn(this).concat(...t.map(e=>H(e)?cn(e):e))},entries(){return fr(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return mt(this,"every",t,e,void 0,arguments)},filter(t,e){return mt(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return mt(this,"find",t,e,Re,arguments)},findIndex(t,e){return mt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mt(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return mt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mt(this,"forEach",t,e,void 0,arguments)},includes(...t){return dr(this,"includes",t)},indexOf(...t){return dr(this,"indexOf",t)},join(t){return cn(this).join(t)},lastIndexOf(...t){return dr(this,"lastIndexOf",t)},map(t,e){return mt(this,"map",t,e,void 0,arguments)},pop(){return Bn(this,"pop")},push(...t){return Bn(this,"push",t)},reduce(t,...e){return _l(this,"reduce",t,e)},reduceRight(t,...e){return _l(this,"reduceRight",t,e)},shift(){return Bn(this,"shift")},some(t,e){return mt(this,"some",t,e,void 0,arguments)},splice(...t){return Bn(this,"splice",t)},toReversed(){return cn(this).toReversed()},toSorted(t){return cn(this).toSorted(t)},toSpliced(...t){return cn(this).toSpliced(...t)},unshift(...t){return Bn(this,"unshift",t)},values(){return fr(this,"values",Re)}};function fr(t,e,n){const s=Vi(t),i=s[e]();return s!==t&&!Ye(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Jh=Array.prototype;function mt(t,e,n,s,i,r){const o=Vi(t),l=o!==t&&!Ye(t),c=o[e];if(c!==Jh[e]){const d=c.apply(t,r);return l?Re(d):d}let a=n;o!==t&&(l?a=function(d,g){return n.call(this,Re(d),g,t)}:n.length>2&&(a=function(d,g){return n.call(this,d,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function _l(t,e,n,s){const i=Vi(t);let r=n;return i!==t&&(Ye(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Re(l),c,t)}),i[e](r,...s)}function dr(t,e,n){const s=Q(t);Ne(s,"iterate",ls);const i=s[e](...n);return(i===-1||i===!1)&&Io(n[0])?(n[0]=Q(n[0]),s[e](...n)):i}function Bn(t,e,n=[]){Vt(),xo();const s=Q(t)[e].apply(t,n);return yo(),jt(),s}const Zh=fo("__proto__,__v_isRef,__isVue"),ia=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ut));function ef(t){Ut(t)||(t=String(t));const e=Q(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class ra{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?hf:aa:r?ca:la).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=Qh[n]))return c;if(n==="hasOwnProperty")return ef}const l=Reflect.get(e,n,xe(e)?e:s);return(Ut(n)?ia.has(n):Zh(n))||(i||Ne(e,"get",n),r)?l:xe(l)?o&&go(n)?l:l.value:ge(l)?i?ua(l):ji(l):l}}class oa extends ra{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=en(r);if(!Ye(s)&&!en(s)&&(r=Q(r),s=Q(s)),!H(e)&&xe(r)&&!xe(s))return c?!1:(r.value=s,!0)}const o=H(e)&&go(n)?Number(n)<e.length:ee(e,n),l=Reflect.set(e,n,s,xe(e)?e:i);return e===Q(i)&&(o?Dt(s,r)&&yt(e,"set",n,s):yt(e,"add",n,s)),l}deleteProperty(e,n){const s=ee(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ut(n)||!ia.has(n))&&Ne(e,"has",n),s}ownKeys(e){return Ne(e,"iterate",H(e)?"length":Jt),Reflect.ownKeys(e)}}class tf extends ra{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const nf=new oa,sf=new tf,rf=new oa(!0);const Lr=t=>t,ks=t=>Reflect.getPrototypeOf(t);function of(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=_n(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Lr:e?Fr:Re;return!e&&Ne(r,"iterate",c?Mr:Jt),{next(){const{value:d,done:g}=a.next();return g?{value:d,done:g}:{value:l?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function Ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lf(t,e){const n={get(i){const r=this.__v_raw,o=Q(r),l=Q(i);t||(Dt(i,l)&&Ne(o,"get",i),Ne(o,"get",l));const{has:c}=ks(o),a=e?Lr:t?Fr:Re;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ne(Q(i),"iterate",Jt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Q(r),l=Q(i);return t||(Dt(i,l)&&Ne(o,"has",i),Ne(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Q(l),a=e?Lr:t?Fr:Re;return!t&&Ne(c,"iterate",Jt),l.forEach((u,d)=>i.call(r,a(u),a(d),o))}};return Pe(n,t?{add:Ms("add"),set:Ms("set"),delete:Ms("delete"),clear:Ms("clear")}:{add(i){!e&&!Ye(i)&&!en(i)&&(i=Q(i));const r=Q(this);return ks(r).has.call(r,i)||(r.add(i),yt(r,"add",i,i)),this},set(i,r){!e&&!Ye(r)&&!en(r)&&(r=Q(r));const o=Q(this),{has:l,get:c}=ks(o);let a=l.call(o,i);a||(i=Q(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?Dt(r,u)&&yt(o,"set",i,r):yt(o,"add",i,r),this},delete(i){const r=Q(this),{has:o,get:l}=ks(r);let c=o.call(r,i);c||(i=Q(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&yt(r,"delete",i,void 0),a},clear(){const i=Q(this),r=i.size!==0,o=i.clear();return r&&yt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=of(i,t,e)}),n}function Co(t,e){const n=lf(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const cf={get:Co(!1,!1)},af={get:Co(!1,!0)},uf={get:Co(!0,!1)};const la=new WeakMap,ca=new WeakMap,aa=new WeakMap,hf=new WeakMap;function ff(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(t){return t.__v_skip||!Object.isExtensible(t)?0:ff(Bh(t))}function ji(t){return en(t)?t:Eo(t,!1,nf,cf,la)}function pf(t){return Eo(t,!1,rf,af,ca)}function ua(t){return Eo(t,!0,sf,uf,aa)}function Eo(t,e,n,s,i){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=df(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ot(t){return en(t)?Ot(t.__v_raw):!!(t&&t.__v_isReactive)}function en(t){return!!(t&&t.__v_isReadonly)}function Ye(t){return!!(t&&t.__v_isShallow)}function Io(t){return t?!!t.__v_raw:!1}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function wo(t){return!ee(t,"__v_skip")&&Object.isExtensible(t)&&jc(t,"__v_skip",!0),t}const Re=t=>ge(t)?ji(t):t,Fr=t=>ge(t)?ua(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function We(t){return ha(t,!1)}function _f(t){return ha(t,!0)}function ha(t,e){return xe(t)?t:new gf(t,e)}class gf{constructor(e,n){this.dep=new vo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Q(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ye(e)||en(e);e=s?e:Q(e),Dt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function Se(t){return xe(t)?t.value:t}const mf={get:(t,e,n)=>e==="__v_raw"?t:Se(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function fa(t){return Ot(t)?t:new Proxy(t,mf)}function xf(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=bf(t,n);return e}class yf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Xh(Q(this._object),this._key)}}function bf(t,e,n){const s=t[e];return xe(s)?s:new yf(t,e,n)}class vf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new vo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Jc(this,!0),!0}get value(){const e=this.dep.track();return ta(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cf(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new vf(s,i,n)}const Ls={},Ys=new WeakMap;let qt;function Ef(t,e=!1,n=qt){if(n){let s=Ys.get(n);s||Ys.set(n,s=[]),s.push(t)}}function If(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=M=>i?M:Ye(M)||i===!1||i===0?bt(M,1):bt(M);let u,d,g,x,I=!1,O=!1;if(xe(t)?(d=()=>t.value,I=Ye(t)):Ot(t)?(d=()=>a(t),I=!0):H(t)?(O=!0,I=t.some(M=>Ot(M)||Ye(M)),d=()=>t.map(M=>{if(xe(M))return M.value;if(Ot(M))return a(M);if(U(M))return c?c(M,2):M()})):U(t)?e?d=c?()=>c(t,2):t:d=()=>{if(g){Vt();try{g()}finally{jt()}}const M=qt;qt=u;try{return c?c(t,3,[x]):t(x)}finally{qt=M}}:d=ft,e&&i){const M=d,X=i===!0?1/0:i;d=()=>bt(M(),X)}const j=Yc(),V=()=>{u.stop(),j&&j.active&&_o(j.effects,u)};if(r&&e){const M=e;e=(...X)=>{M(...X),V()}}let Y=O?new Array(t.length).fill(Ls):Ls;const Z=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const X=u.run();if(i||I||(O?X.some((Je,be)=>Dt(Je,Y[be])):Dt(X,Y))){g&&g();const Je=qt;qt=u;try{const be=[X,Y===Ls?void 0:O&&Y[0]===Ls?[]:Y,x];c?c(e,3,be):e(...be),Y=X}finally{qt=Je}}}else u.run()};return l&&l(Z),u=new Xc(d),u.scheduler=o?()=>o(Z,!1):Z,x=M=>Ef(M,!1,u),g=u.onStop=()=>{const M=Ys.get(u);if(M){if(c)c(M,4);else for(const X of M)X();Ys.delete(u)}},e?s?Z(!0):Y=u.run():o?o(Z.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function bt(t,e=1/0,n){if(e<=0||!ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xe(t))bt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)bt(t[s],e,n);else if(Wc(t)||_n(t))t.forEach(s=>{bt(s,e,n)});else if(Vc(t)){for(const s in t)bt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&bt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cs(t,e,n,s){try{return s?t(...s):t()}catch(i){Gi(i,e,n)}}function pt(t,e,n,s){if(U(t)){const i=Cs(t,e,n,s);return i&&Hc(i)&&i.catch(r=>{Gi(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(pt(t[r],e,n,s));return i}}function Gi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,a)===!1)return}l=l.parent}if(r){Vt(),Cs(r,null,10,[t,c,a]),jt();return}}wf(t,n,i,s,o)}function wf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Le=[];let at=-1;const mn=[];let At=null,hn=0;const da=Promise.resolve();let Xs=null;function pa(t){const e=Xs||da;return t?e.then(this?t.bind(this):t):e}function Sf(t){let e=at+1,n=Le.length;for(;e<n;){const s=e+n>>>1,i=Le[s],r=cs(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function So(t){if(!(t.flags&1)){const e=cs(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=cs(n)?Le.push(t):Le.splice(Sf(e),0,t),t.flags|=1,_a()}}function _a(){Xs||(Xs=da.then(ma))}function Tf(t){H(t)?mn.push(...t):At&&t.id===-1?At.splice(hn+1,0,t):t.flags&1||(mn.push(t),t.flags|=1),_a()}function gl(t,e,n=at+1){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ga(t){if(mn.length){const e=[...new Set(mn)].sort((n,s)=>cs(n)-cs(s));if(mn.length=0,At){At.push(...e);return}for(At=e,hn=0;hn<At.length;hn++){const n=At[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}At=null,hn=0}}const cs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ma(t){try{for(at=0;at<Le.length;at++){const e=Le[at];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;at<Le.length;at++){const e=Le[at];e&&(e.flags&=-2)}at=-1,Le.length=0,ga(),Xs=null,(Le.length||mn.length)&&ma()}}let He=null,xa=null;function Qs(t){const e=He;return He=t,xa=t&&t.type.__scopeId||null,e}function Nf(t,e=He,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Tl(-1);const r=Qs(e);let o;try{o=t(...i)}finally{Qs(r),s._d&&Tl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Rf(t,e){if(He===null)return t;const n=Ki(He),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=re]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&bt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function $t(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Vt(),pt(c,n,8,[t.el,l,t,e]),jt())}}const Af=Symbol("_vte"),Pf=t=>t.__isTeleport;function To(t,e){t.shapeFlag&6&&t.component?(t.transition=e,To(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Tn(t,e){return U(t)?Pe({name:t.name},e,{setup:t}):t}function ya(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Js(t,e,n,s,i=!1){if(H(t)){t.forEach((I,O)=>Js(I,e&&(H(e)?e[O]:e),n,s,i));return}if(Xn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Js(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ki(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===re?l.refs={}:l.refs,d=l.setupState,g=Q(d),x=d===re?()=>!1:I=>ee(g,I);if(a!=null&&a!==c&&(ye(a)?(u[a]=null,x(a)&&(d[a]=null)):xe(a)&&(a.value=null)),U(c))Cs(c,l,12,[o,u]);else{const I=ye(c),O=xe(c);if(I||O){const j=()=>{if(t.f){const V=I?x(c)?d[c]:u[c]:c.value;i?H(V)&&_o(V,r):H(V)?V.includes(r)||V.push(r):I?(u[c]=[r],x(c)&&(d[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else I?(u[c]=o,x(c)&&(d[c]=o)):O&&(c.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,ze(j,n)):j()}}}Ui().requestIdleCallback;Ui().cancelIdleCallback;const Xn=t=>!!t.type.__asyncLoader,ba=t=>t.type.__isKeepAlive;function Df(t,e){va(t,"a",e)}function Of(t,e){va(t,"da",e)}function va(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($i(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ba(i.parent.vnode)&&kf(s,e,n,i),i=i.parent}}function kf(t,e,n,s){const i=$i(e,t,s,!0);Ca(()=>{_o(s[e],i)},n)}function $i(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vt();const l=Is(n),c=pt(e,n,t,o);return l(),jt(),c});return s?i.unshift(r):i.push(r),r}}const St=t=>(e,n=Te)=>{(!us||t==="sp")&&$i(t,(...s)=>e(...s),n)},Mf=St("bm"),Es=St("m"),Lf=St("bu"),Ff=St("u"),Bf=St("bum"),Ca=St("um"),Wf=St("sp"),Hf=St("rtg"),Uf=St("rtc");function Vf(t,e=Te){$i("ec",t,e)}const jf="components",Ea=Symbol.for("v-ndc");function Gf(t){return ye(t)?$f(jf,t,!1)||t:t||Ea}function $f(t,e,n=!0,s=!1){const i=He||Te;if(i){const r=i.type;{const l=Od(r,!1);if(l&&(l===e||l===Qe(e)||l===Hi(Qe(e))))return r}const o=ml(i[t]||r[t],e)||ml(i.appContext[t],e);return!o&&s?r:o}}function ml(t,e){return t&&(t[e]||t[Qe(e)]||t[Hi(Qe(e))])}function xl(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||ye(t)){const l=o&&Ot(t);let c=!1;l&&(c=!Ye(t),t=Vi(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Re(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(ge(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Br=t=>t?za(t)?Ki(t):Br(t.parent):null,Qn=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Br(t.parent),$root:t=>Br(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wa(t),$forceUpdate:t=>t.f||(t.f=()=>{So(t.update)}),$nextTick:t=>t.n||(t.n=pa.bind(t.proxy)),$watch:t=>pd.bind(t)}),pr=(t,e)=>t!==re&&!t.__isScriptSetup&&ee(t,e),zf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(pr(s,e))return o[e]=1,s[e];if(i!==re&&ee(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&ee(a,e))return o[e]=3,r[e];if(n!==re&&ee(n,e))return o[e]=4,n[e];Wr&&(o[e]=0)}}const u=Qn[e];let d,g;if(u)return e==="$attrs"&&Ne(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==re&&ee(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ee(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return pr(i,e)?(i[e]=n,!0):s!==re&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==re&&ee(t,o)||pr(e,o)||(l=r[0])&&ee(l,o)||ee(s,o)||ee(Qn,o)||ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wr=!0;function qf(t){const e=wa(t),n=t.proxy,s=t.ctx;Wr=!1,e.beforeCreate&&bl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:d,mounted:g,beforeUpdate:x,updated:I,activated:O,deactivated:j,beforeDestroy:V,beforeUnmount:Y,destroyed:Z,unmounted:M,render:X,renderTracked:Je,renderTriggered:be,errorCaptured:f,serverPrefetch:h,expose:p,inheritAttrs:v,components:T,directives:le,filters:B}=e;if(a&&Kf(a,s,null),o)for(const G in o){const ne=o[G];U(ne)&&(s[G]=ne.bind(n))}if(i){const G=i.call(n,n);ge(G)&&(t.data=ji(G))}if(Wr=!0,r)for(const G in r){const ne=r[G],gt=U(ne)?ne.bind(n,n):U(ne.get)?ne.get.bind(n,n):ft,kn=!U(ne)&&U(ne.set)?ne.set.bind(n):ft,Gt=Ka({get:gt,set:kn});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:it=>Gt.value=it})}if(l)for(const G in l)Ia(l[G],s,n,G);if(c){const G=U(c)?c.call(n):c;Reflect.ownKeys(G).forEach(ne=>{ed(ne,G[ne])})}u&&bl(u,t,"c");function pe(G,ne){H(ne)?ne.forEach(gt=>G(gt.bind(n))):ne&&G(ne.bind(n))}if(pe(Mf,d),pe(Es,g),pe(Lf,x),pe(Ff,I),pe(Df,O),pe(Of,j),pe(Vf,f),pe(Uf,Je),pe(Hf,be),pe(Bf,Y),pe(Ca,M),pe(Wf,h),H(p))if(p.length){const G=t.exposed||(t.exposed={});p.forEach(ne=>{Object.defineProperty(G,ne,{get:()=>n[ne],set:gt=>n[ne]=gt})})}else t.exposed||(t.exposed={});X&&t.render===ft&&(t.render=X),v!=null&&(t.inheritAttrs=v),T&&(t.components=T),le&&(t.directives=le),h&&ya(t)}function Kf(t,e,n=ft){H(t)&&(t=Hr(t));for(const s in t){const i=t[s];let r;ge(i)?"default"in i?r=Jn(i.from||s,i.default,!0):r=Jn(i.from||s):r=Jn(i),xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function bl(t,e,n){pt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ia(t,e,n,s){let i=s.includes(".")?Wa(n,s):()=>n[s];if(ye(t)){const r=e[t];U(r)&&dt(i,r)}else if(U(t))dt(i,t.bind(n));else if(ge(t))if(H(t))t.forEach(r=>Ia(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&dt(i,r,t)}}function wa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Zs(c,a,o,!0)),Zs(c,e,o)),ge(e)&&r.set(e,c),c}function Zs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Zs(t,r,n,!0),i&&i.forEach(o=>Zs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Yf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Yf={data:vl,props:Cl,emits:Cl,methods:zn,computed:zn,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:zn,directives:zn,watch:Qf,provide:vl,inject:Xf};function vl(t,e){return e?t?function(){return Pe(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Xf(t,e){return zn(Hr(t),Hr(e))}function Hr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?Pe(Object.create(null),t,e):e}function Cl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),yl(t),yl(e??{})):e}function Qf(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=De(t[s],e[s]);return n}function Sa(){return{app:null,config:{isNativeTag:Lh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jf=0;function Zf(t,e){return function(s,i=null){U(s)||(s=Pe({},s)),i!=null&&!ge(i)&&(i=null);const r=Sa(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Jf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Md,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(a,...d)):U(u)&&(o.add(u),u(a,...d))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,d){return d?(r.components[u]=d,a):r.components[u]},directive(u,d){return d?(r.directives[u]=d,a):r.directives[u]},mount(u,d,g){if(!c){const x=a._ceVNode||Xe(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,u,g),c=!0,a._container=u,u.__vue_app__=a,Ki(x.component)}},onUnmount(u){l.push(u)},unmount(){c&&(pt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,d){return r.provides[u]=d,a},runWithContext(u){const d=Zt;Zt=a;try{return u()}finally{Zt=d}}};return a}}let Zt=null;function ed(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function Jn(t,e,n=!1){const s=Te||He;if(s||Zt){const i=Zt?Zt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function td(){return!!(Te||He||Zt)}const Ta={},Na=()=>Object.create(Ta),Ra=t=>Object.getPrototypeOf(t)===Ta;function nd(t,e,n,s=!1){const i={},r=Na();t.propsDefaults=Object.create(null),Aa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:pf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function sd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Q(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(zi(t.emitsOptions,g))continue;const x=e[g];if(c)if(ee(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const I=Qe(g);i[I]=Ur(c,l,I,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{Aa(t,e,i,r)&&(a=!0);let u;for(const d in l)(!e||!ee(e,d)&&((u=on(d))===d||!ee(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ur(c,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!ee(e,d))&&(delete r[d],a=!0)}a&&yt(t.attrs,"set","")}function Aa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(qn(c))continue;const a=e[c];let u;i&&ee(i,u=Qe(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:zi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Q(n),a=l||re;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ur(i,c,d,a[d],t,!ee(a,d))}}return o}function Ur(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ee(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=Is(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===on(n))&&(s=!0))}return s}const id=new WeakMap;function Pa(t,e,n=!1){const s=n?id:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!U(t)){const u=d=>{c=!0;const[g,x]=Pa(d,e,!0);Pe(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ge(t)&&s.set(t,pn),pn;if(H(r))for(let u=0;u<r.length;u++){const d=Qe(r[u]);El(d)&&(o[d]=re)}else if(r)for(const u in r){const d=Qe(u);if(El(d)){const g=r[u],x=o[d]=H(g)||U(g)?{type:g}:Pe({},g),I=x.type;let O=!1,j=!0;if(H(I))for(let V=0;V<I.length;++V){const Y=I[V],Z=U(Y)&&Y.name;if(Z==="Boolean"){O=!0;break}else Z==="String"&&(j=!1)}else O=U(I)&&I.name==="Boolean";x[0]=O,x[1]=j,(O||ee(x,"default"))&&l.push(d)}}const a=[o,l];return ge(t)&&s.set(t,a),a}function El(t){return t[0]!=="$"&&!qn(t)}const Da=t=>t[0]==="_"||t==="$stable",No=t=>H(t)?t.map(ht):[ht(t)],rd=(t,e,n)=>{if(e._n)return e;const s=Nf((...i)=>No(e(...i)),n);return s._c=!1,s},Oa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Da(i))continue;const r=t[i];if(U(r))e[i]=rd(i,r,s);else if(r!=null){const o=No(r);e[i]=()=>o}}},ka=(t,e)=>{const n=No(e);t.slots.default=()=>n},Ma=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},od=(t,e,n)=>{const s=t.slots=Na();if(t.vnode.shapeFlag&32){const i=e._;i?(Ma(s,e,n),n&&jc(s,"_",i,!0)):Oa(e,s)}else e&&ka(t,e)},ld=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ma(i,e,n):(r=!e.$stable,Oa(e,i)),o=e}else e&&(ka(t,e),o={default:1});if(r)for(const l in i)!Da(l)&&o[l]==null&&delete i[l]},ze=vd;function cd(t){return ad(t)}function ad(t,e){const n=Ui();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:d,nextSibling:g,setScopeId:x=ft,insertStaticContent:I}=t,O=(_,m,b,w=null,C=null,E=null,P=void 0,A=null,R=!!m.dynamicChildren)=>{if(_===m)return;_&&!Wn(_,m)&&(w=Os(_),it(_,C,E,!0),_=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:S,ref:L,shapeFlag:D}=m;switch(S){case qi:j(_,m,b,w);break;case tn:V(_,m,b,w);break;case gr:_==null&&Y(m,b,w,P);break;case Ke:T(_,m,b,w,C,E,P,A,R);break;default:D&1?X(_,m,b,w,C,E,P,A,R):D&6?le(_,m,b,w,C,E,P,A,R):(D&64||D&128)&&S.process(_,m,b,w,C,E,P,A,R,Ln)}L!=null&&C&&Js(L,_&&_.ref,E,m||_,!m)},j=(_,m,b,w)=>{if(_==null)s(m.el=l(m.children),b,w);else{const C=m.el=_.el;m.children!==_.children&&a(C,m.children)}},V=(_,m,b,w)=>{_==null?s(m.el=c(m.children||""),b,w):m.el=_.el},Y=(_,m,b,w)=>{[_.el,_.anchor]=I(_.children,m,b,w,_.el,_.anchor)},Z=({el:_,anchor:m},b,w)=>{let C;for(;_&&_!==m;)C=g(_),s(_,b,w),_=C;s(m,b,w)},M=({el:_,anchor:m})=>{let b;for(;_&&_!==m;)b=g(_),i(_),_=b;i(m)},X=(_,m,b,w,C,E,P,A,R)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),_==null?Je(m,b,w,C,E,P,A,R):h(_,m,C,E,P,A,R)},Je=(_,m,b,w,C,E,P,A)=>{let R,S;const{props:L,shapeFlag:D,transition:k,dirs:W}=_;if(R=_.el=o(_.type,E,L&&L.is,L),D&8?u(R,_.children):D&16&&f(_.children,R,null,w,C,_r(_,E),P,A),W&&$t(_,null,w,"created"),be(R,_,_.scopeId,P,w),L){for(const ae in L)ae!=="value"&&!qn(ae)&&r(R,ae,null,L[ae],E,w);"value"in L&&r(R,"value",null,L.value,E),(S=L.onVnodeBeforeMount)&&ct(S,w,_)}W&&$t(_,null,w,"beforeMount");const K=ud(C,k);K&&k.beforeEnter(R),s(R,m,b),((S=L&&L.onVnodeMounted)||K||W)&&ze(()=>{S&&ct(S,w,_),K&&k.enter(R),W&&$t(_,null,w,"mounted")},C)},be=(_,m,b,w,C)=>{if(b&&x(_,b),w)for(let E=0;E<w.length;E++)x(_,w[E]);if(C){let E=C.subTree;if(m===E||Ua(E.type)&&(E.ssContent===m||E.ssFallback===m)){const P=C.vnode;be(_,P,P.scopeId,P.slotScopeIds,C.parent)}}},f=(_,m,b,w,C,E,P,A,R=0)=>{for(let S=R;S<_.length;S++){const L=_[S]=A?Pt(_[S]):ht(_[S]);O(null,L,m,b,w,C,E,P,A)}},h=(_,m,b,w,C,E,P)=>{const A=m.el=_.el;let{patchFlag:R,dynamicChildren:S,dirs:L}=m;R|=_.patchFlag&16;const D=_.props||re,k=m.props||re;let W;if(b&&zt(b,!1),(W=k.onVnodeBeforeUpdate)&&ct(W,b,m,_),L&&$t(m,_,b,"beforeUpdate"),b&&zt(b,!0),(D.innerHTML&&k.innerHTML==null||D.textContent&&k.textContent==null)&&u(A,""),S?p(_.dynamicChildren,S,A,b,w,_r(m,C),E):P||ne(_,m,A,null,b,w,_r(m,C),E,!1),R>0){if(R&16)v(A,D,k,b,C);else if(R&2&&D.class!==k.class&&r(A,"class",null,k.class,C),R&4&&r(A,"style",D.style,k.style,C),R&8){const K=m.dynamicProps;for(let ae=0;ae<K.length;ae++){const te=K[ae],Ge=D[te],Be=k[te];(Be!==Ge||te==="value")&&r(A,te,Ge,Be,C,b)}}R&1&&_.children!==m.children&&u(A,m.children)}else!P&&S==null&&v(A,D,k,b,C);((W=k.onVnodeUpdated)||L)&&ze(()=>{W&&ct(W,b,m,_),L&&$t(m,_,b,"updated")},w)},p=(_,m,b,w,C,E,P)=>{for(let A=0;A<m.length;A++){const R=_[A],S=m[A],L=R.el&&(R.type===Ke||!Wn(R,S)||R.shapeFlag&70)?d(R.el):b;O(R,S,L,null,w,C,E,P,!0)}},v=(_,m,b,w,C)=>{if(m!==b){if(m!==re)for(const E in m)!qn(E)&&!(E in b)&&r(_,E,m[E],null,C,w);for(const E in b){if(qn(E))continue;const P=b[E],A=m[E];P!==A&&E!=="value"&&r(_,E,A,P,C,w)}"value"in b&&r(_,"value",m.value,b.value,C)}},T=(_,m,b,w,C,E,P,A,R)=>{const S=m.el=_?_.el:l(""),L=m.anchor=_?_.anchor:l("");let{patchFlag:D,dynamicChildren:k,slotScopeIds:W}=m;W&&(A=A?A.concat(W):W),_==null?(s(S,b,w),s(L,b,w),f(m.children||[],b,L,C,E,P,A,R)):D>0&&D&64&&k&&_.dynamicChildren?(p(_.dynamicChildren,k,b,C,E,P,A),(m.key!=null||C&&m===C.subTree)&&La(_,m,!0)):ne(_,m,b,L,C,E,P,A,R)},le=(_,m,b,w,C,E,P,A,R)=>{m.slotScopeIds=A,_==null?m.shapeFlag&512?C.ctx.activate(m,b,w,P,R):B(m,b,w,C,E,P,R):ce(_,m,R)},B=(_,m,b,w,C,E,P)=>{const A=_.component=Nd(_,w,C);if(ba(_)&&(A.ctx.renderer=Ln),Rd(A,!1,P),A.asyncDep){if(C&&C.registerDep(A,pe,P),!_.el){const R=A.subTree=Xe(tn);V(null,R,m,b)}}else pe(A,_,m,b,C,E,P)},ce=(_,m,b)=>{const w=m.component=_.component;if(yd(_,m,b))if(w.asyncDep&&!w.asyncResolved){G(w,m,b);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},pe=(_,m,b,w,C,E,P)=>{const A=()=>{if(_.isMounted){let{next:D,bu:k,u:W,parent:K,vnode:ae}=_;{const ot=Fa(_);if(ot){D&&(D.el=ae.el,G(_,D,P)),ot.asyncDep.then(()=>{_.isUnmounted||A()});return}}let te=D,Ge;zt(_,!1),D?(D.el=ae.el,G(_,D,P)):D=ae,k&&Us(k),(Ge=D.props&&D.props.onVnodeBeforeUpdate)&&ct(Ge,K,D,ae),zt(_,!0);const Be=wl(_),rt=_.subTree;_.subTree=Be,O(rt,Be,d(rt.el),Os(rt),_,C,E),D.el=Be.el,te===null&&bd(_,Be.el),W&&ze(W,C),(Ge=D.props&&D.props.onVnodeUpdated)&&ze(()=>ct(Ge,K,D,ae),C)}else{let D;const{el:k,props:W}=m,{bm:K,m:ae,parent:te,root:Ge,type:Be}=_,rt=Xn(m);zt(_,!1),K&&Us(K),!rt&&(D=W&&W.onVnodeBeforeMount)&&ct(D,te,m),zt(_,!0);{Ge.ce&&Ge.ce._injectChildStyle(Be);const ot=_.subTree=wl(_);O(null,ot,b,w,_,C,E),m.el=ot.el}if(ae&&ze(ae,C),!rt&&(D=W&&W.onVnodeMounted)){const ot=m;ze(()=>ct(D,te,ot),C)}(m.shapeFlag&256||te&&Xn(te.vnode)&&te.vnode.shapeFlag&256)&&_.a&&ze(_.a,C),_.isMounted=!0,m=b=w=null}};_.scope.on();const R=_.effect=new Xc(A);_.scope.off();const S=_.update=R.run.bind(R),L=_.job=R.runIfDirty.bind(R);L.i=_,L.id=_.uid,R.scheduler=()=>So(L),zt(_,!0),S()},G=(_,m,b)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,sd(_,m.props,w,b),ld(_,m.children,b),Vt(),gl(_),jt()},ne=(_,m,b,w,C,E,P,A,R=!1)=>{const S=_&&_.children,L=_?_.shapeFlag:0,D=m.children,{patchFlag:k,shapeFlag:W}=m;if(k>0){if(k&128){kn(S,D,b,w,C,E,P,A,R);return}else if(k&256){gt(S,D,b,w,C,E,P,A,R);return}}W&8?(L&16&&Mn(S,C,E),D!==S&&u(b,D)):L&16?W&16?kn(S,D,b,w,C,E,P,A,R):Mn(S,C,E,!0):(L&8&&u(b,""),W&16&&f(D,b,w,C,E,P,A,R))},gt=(_,m,b,w,C,E,P,A,R)=>{_=_||pn,m=m||pn;const S=_.length,L=m.length,D=Math.min(S,L);let k;for(k=0;k<D;k++){const W=m[k]=R?Pt(m[k]):ht(m[k]);O(_[k],W,b,null,C,E,P,A,R)}S>L?Mn(_,C,E,!0,!1,D):f(m,b,w,C,E,P,A,R,D)},kn=(_,m,b,w,C,E,P,A,R)=>{let S=0;const L=m.length;let D=_.length-1,k=L-1;for(;S<=D&&S<=k;){const W=_[S],K=m[S]=R?Pt(m[S]):ht(m[S]);if(Wn(W,K))O(W,K,b,null,C,E,P,A,R);else break;S++}for(;S<=D&&S<=k;){const W=_[D],K=m[k]=R?Pt(m[k]):ht(m[k]);if(Wn(W,K))O(W,K,b,null,C,E,P,A,R);else break;D--,k--}if(S>D){if(S<=k){const W=k+1,K=W<L?m[W].el:w;for(;S<=k;)O(null,m[S]=R?Pt(m[S]):ht(m[S]),b,K,C,E,P,A,R),S++}}else if(S>k)for(;S<=D;)it(_[S],C,E,!0),S++;else{const W=S,K=S,ae=new Map;for(S=K;S<=k;S++){const $e=m[S]=R?Pt(m[S]):ht(m[S]);$e.key!=null&&ae.set($e.key,S)}let te,Ge=0;const Be=k-K+1;let rt=!1,ot=0;const Fn=new Array(Be);for(S=0;S<Be;S++)Fn[S]=0;for(S=W;S<=D;S++){const $e=_[S];if(Ge>=Be){it($e,C,E,!0);continue}let lt;if($e.key!=null)lt=ae.get($e.key);else for(te=K;te<=k;te++)if(Fn[te-K]===0&&Wn($e,m[te])){lt=te;break}lt===void 0?it($e,C,E,!0):(Fn[lt-K]=S+1,lt>=ot?ot=lt:rt=!0,O($e,m[lt],b,null,C,E,P,A,R),Ge++)}const hl=rt?hd(Fn):pn;for(te=hl.length-1,S=Be-1;S>=0;S--){const $e=K+S,lt=m[$e],fl=$e+1<L?m[$e+1].el:w;Fn[S]===0?O(null,lt,b,fl,C,E,P,A,R):rt&&(te<0||S!==hl[te]?Gt(lt,b,fl,2):te--)}}},Gt=(_,m,b,w,C=null)=>{const{el:E,type:P,transition:A,children:R,shapeFlag:S}=_;if(S&6){Gt(_.component.subTree,m,b,w);return}if(S&128){_.suspense.move(m,b,w);return}if(S&64){P.move(_,m,b,Ln);return}if(P===Ke){s(E,m,b);for(let D=0;D<R.length;D++)Gt(R[D],m,b,w);s(_.anchor,m,b);return}if(P===gr){Z(_,m,b);return}if(w!==2&&S&1&&A)if(w===0)A.beforeEnter(E),s(E,m,b),ze(()=>A.enter(E),C);else{const{leave:D,delayLeave:k,afterLeave:W}=A,K=()=>s(E,m,b),ae=()=>{D(E,()=>{K(),W&&W()})};k?k(E,K,ae):ae()}else s(E,m,b)},it=(_,m,b,w=!1,C=!1)=>{const{type:E,props:P,ref:A,children:R,dynamicChildren:S,shapeFlag:L,patchFlag:D,dirs:k,cacheIndex:W}=_;if(D===-2&&(C=!1),A!=null&&Js(A,null,b,_,!0),W!=null&&(m.renderCache[W]=void 0),L&256){m.ctx.deactivate(_);return}const K=L&1&&k,ae=!Xn(_);let te;if(ae&&(te=P&&P.onVnodeBeforeUnmount)&&ct(te,m,_),L&6)Mh(_.component,b,w);else{if(L&128){_.suspense.unmount(b,w);return}K&&$t(_,null,m,"beforeUnmount"),L&64?_.type.remove(_,m,b,Ln,w):S&&!S.hasOnce&&(E!==Ke||D>0&&D&64)?Mn(S,m,b,!1,!0):(E===Ke&&D&384||!C&&L&16)&&Mn(R,m,b),w&&al(_)}(ae&&(te=P&&P.onVnodeUnmounted)||K)&&ze(()=>{te&&ct(te,m,_),K&&$t(_,null,m,"unmounted")},b)},al=_=>{const{type:m,el:b,anchor:w,transition:C}=_;if(m===Ke){kh(b,w);return}if(m===gr){M(_);return}const E=()=>{i(b),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(_.shapeFlag&1&&C&&!C.persisted){const{leave:P,delayLeave:A}=C,R=()=>P(b,E);A?A(_.el,E,R):R()}else E()},kh=(_,m)=>{let b;for(;_!==m;)b=g(_),i(_),_=b;i(m)},Mh=(_,m,b)=>{const{bum:w,scope:C,job:E,subTree:P,um:A,m:R,a:S}=_;Il(R),Il(S),w&&Us(w),C.stop(),E&&(E.flags|=8,it(P,_,m,b)),A&&ze(A,m),ze(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Mn=(_,m,b,w=!1,C=!1,E=0)=>{for(let P=E;P<_.length;P++)it(_[P],m,b,w,C)},Os=_=>{if(_.shapeFlag&6)return Os(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),b=m&&m[Af];return b?g(b):m};let cr=!1;const ul=(_,m,b)=>{_==null?m._vnode&&it(m._vnode,null,null,!0):O(m._vnode||null,_,m,null,null,null,b),m._vnode=_,cr||(cr=!0,gl(),ga(),cr=!1)},Ln={p:O,um:it,m:Gt,r:al,mt:B,mc:f,pc:ne,pbc:p,n:Os,o:t};return{render:ul,hydrate:void 0,createApp:Zf(ul)}}function _r({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ud(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function La(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Pt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&La(o,l)),l.type===qi&&(l.el=o.el)}}function hd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Fa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fa(e)}function Il(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fd=Symbol.for("v-scx"),dd=()=>Jn(fd);function dt(t,e,n){return Ba(t,e,n)}function Ba(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,l=Pe({},n),c=e&&s||!e&&r!=="post";let a;if(us){if(r==="sync"){const x=dd();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=ft,x.resume=ft,x.pause=ft,x}}const u=Te;l.call=(x,I,O)=>pt(x,u,I,O);let d=!1;r==="post"?l.scheduler=x=>{ze(x,u&&u.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(x,I)=>{I?x():So(x)}),l.augmentJob=x=>{e&&(x.flags|=4),d&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const g=If(t,e,l);return us&&(a?a.push(g):c&&g()),g}function pd(t,e,n){const s=this.proxy,i=ye(t)?t.includes(".")?Wa(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=Is(this),l=Ba(i,r.bind(s),n);return o(),l}function Wa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const _d=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qe(e)}Modifiers`]||t[`${on(e)}Modifiers`];function gd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&_d(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ye(u)?u.trim():u)),o.number&&(i=n.map(Or)));let l,c=s[l=ar(e)]||s[l=ar(Qe(e))];!c&&r&&(c=s[l=ar(on(e))]),c&&pt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pt(a,t,6,i)}}function Ha(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const c=a=>{const u=Ha(a,e,!0);u&&(l=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ge(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Pe(o,r),ge(t)&&s.set(t,o),o)}function zi(t,e){return!t||!Fi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,on(e))||ee(t,e))}function wl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:d,data:g,setupState:x,ctx:I,inheritAttrs:O}=t,j=Qs(t);let V,Y;try{if(n.shapeFlag&4){const M=i||s,X=M;V=ht(a.call(X,M,u,d,x,g,I)),Y=l}else{const M=e;V=ht(M.length>1?M(d,{attrs:l,slots:o,emit:c}):M(d,null)),Y=e.props?l:md(l)}}catch(M){Zn.length=0,Gi(M,t,1),V=Xe(tn)}let Z=V;if(Y&&O!==!1){const M=Object.keys(Y),{shapeFlag:X}=Z;M.length&&X&7&&(r&&M.some(po)&&(Y=xd(Y,r)),Z=vn(Z,Y,!1,!0))}return n.dirs&&(Z=vn(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&To(Z,n.transition),V=Z,Qs(j),V}const md=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fi(n))&&((e||(e={}))[n]=t[n]);return e},xd=(t,e)=>{const n={};for(const s in t)(!po(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function yd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Sl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==s[g]&&!zi(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Sl(s,o,a):!0:!!o;return!1}function Sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!zi(n,r))return!0}return!1}function bd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ua=t=>t.__isSuspense;function vd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Tf(t)}const Ke=Symbol.for("v-fgt"),qi=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),Zn=[];let qe=null;function se(t=!1){Zn.push(qe=t?null:[])}function Cd(){Zn.pop(),qe=Zn[Zn.length-1]||null}let as=1;function Tl(t,e=!1){as+=t,t<0&&qe&&e&&(qe.hasOnce=!0)}function Va(t){return t.dynamicChildren=as>0?qe||pn:null,Cd(),as>0&&qe&&qe.push(t),t}function ue(t,e,n,s,i,r){return Va(y(t,e,n,s,i,r,!0))}function ja(t,e,n,s,i){return Va(Xe(t,e,n,s,i,!0))}function Ga(t){return t?t.__v_isVNode===!0:!1}function Wn(t,e){return t.type===e.type&&t.key===e.key}const $a=({key:t})=>t??null,Vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||xe(t)||U(t)?{i:He,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,i=null,r=t===Ke?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$a(e),ref:e&&Vs(e),scopeId:xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return l?(Ro(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),as>0&&!o&&qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&qe.push(c),c}const Xe=Ed;function Ed(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ea)&&(t=tn),Ga(t)){const l=vn(t,e,!0);return n&&Ro(l,n),as>0&&!r&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag=-2,l}if(kd(t)&&(t=t.__vccOpts),e){e=Id(e);let{class:l,style:c}=e;l&&!ye(l)&&(e.class=gn(l)),ge(c)&&(Io(c)&&!H(c)&&(c=Pe({},c)),e.style=mo(c))}const o=ye(t)?1:Ua(t)?128:Pf(t)?64:ge(t)?4:U(t)?2:0;return y(t,e,n,s,i,o,r,!0)}function Id(t){return t?Io(t)||Ra(t)?Pe({},t):t:null}function vn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?wd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$a(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Vs(e)):[r,Vs(e)]:Vs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&To(u,c.clone(u)),u}function ie(t=" ",e=0){return Xe(qi,null,t,e)}function Oe(t="",e=!1){return e?(se(),ja(tn,null,t)):Xe(tn,null,t)}function ht(t){return t==null||typeof t=="boolean"?Xe(tn):H(t)?Xe(Ke,null,t.slice()):Ga(t)?Pt(t):Xe(qi,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function Ro(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ro(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ra(e)?e._ctx=He:i===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function wd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=gn([e.class,s.class]));else if(i==="style")e.style=mo([e.style,s.style]);else if(Fi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){pt(t,e,7,[n,s])}const Sd=Sa();let Td=0;function Nd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Sd,r={uid:Td++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pa(s,i),emitsOptions:Ha(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gd.bind(null,r),t.ce&&t.ce(r),r}let Te=null,ei,Vr;{const t=Ui(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ei=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),Vr=e("__VUE_SSR_SETTERS__",n=>us=n)}const Is=t=>{const e=Te;return ei(t),t.scope.on(),()=>{t.scope.off(),ei(e)}},Nl=()=>{Te&&Te.scope.off(),ei(null)};function za(t){return t.vnode.shapeFlag&4}let us=!1;function Rd(t,e=!1,n=!1){e&&Vr(e);const{props:s,children:i}=t.vnode,r=za(t);nd(t,s,r,e),od(t,i,n);const o=r?Ad(t,e):void 0;return e&&Vr(!1),o}function Ad(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,zf);const{setup:s}=n;if(s){Vt();const i=t.setupContext=s.length>1?Dd(t):null,r=Is(t),o=Cs(s,t,0,[t.props,i]),l=Hc(o);if(jt(),r(),(l||t.sp)&&!Xn(t)&&ya(t),l){if(o.then(Nl,Nl),e)return o.then(c=>{Rl(t,c)}).catch(c=>{Gi(c,t,0)});t.asyncDep=o}else Rl(t,o)}else qa(t)}function Rl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=fa(e)),qa(t)}function qa(t,e,n){const s=t.type;t.render||(t.render=s.render||ft);{const i=Is(t);Vt();try{qf(t)}finally{jt(),i()}}}const Pd={get(t,e){return Ne(t,"get",""),t[e]}};function Dd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Pd),slots:t.slots,emit:t.emit,expose:e}}function Ki(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fa(wo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qn)return Qn[n](t)},has(e,n){return n in e||n in Qn}})):t.proxy}function Od(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function kd(t){return U(t)&&"__vccOpts"in t}const Ka=(t,e)=>Cf(t,e,us),Md="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jr;const Al=typeof window<"u"&&window.trustedTypes;if(Al)try{jr=Al.createPolicy("vue",{createHTML:t=>t})}catch{}const Ya=jr?t=>jr.createHTML(t):t=>t,Ld="http://www.w3.org/2000/svg",Fd="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,Pl=xt&&xt.createElement("template"),Bd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?xt.createElementNS(Ld,t):e==="mathml"?xt.createElementNS(Fd,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Pl.innerHTML=Ya(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Pl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wd=Symbol("_vtc");function Hd(t,e,n){const s=t[Wd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dl=Symbol("_vod"),Ud=Symbol("_vsh"),Vd=Symbol(""),jd=/(^|;)\s*display\s*:/;function Gd(t,e,n){const s=t.style,i=ye(n);let r=!1;if(n&&!i){if(e)if(ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&js(s,l,"")}else for(const o in e)n[o]==null&&js(s,o,"");for(const o in n)o==="display"&&(r=!0),js(s,o,n[o])}else if(i){if(e!==n){const o=s[Vd];o&&(n+=";"+o),s.cssText=n,r=jd.test(n)}}else e&&t.removeAttribute("style");Dl in t&&(t[Dl]=r?s.display:"",t[Ud]&&(s.display="none"))}const Ol=/\s*!important$/;function js(t,e,n){if(H(n))n.forEach(s=>js(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$d(t,e);Ol.test(n)?t.setProperty(on(s),n.replace(Ol,""),"important"):t[s]=n}}const kl=["Webkit","Moz","ms"],mr={};function $d(t,e){const n=mr[e];if(n)return n;let s=Qe(e);if(s!=="filter"&&s in t)return mr[e]=s;s=Hi(s);for(let i=0;i<kl.length;i++){const r=kl[i]+s;if(r in t)return mr[e]=r}return e}const Ml="http://www.w3.org/1999/xlink";function Ll(t,e,n,s,i,r=zh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ml,e.slice(6,e.length)):t.setAttributeNS(Ml,e,n):n==null||r&&!Gc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ut(n)?String(n):n)}function Fl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ya(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function fn(t,e,n,s){t.addEventListener(e,n,s)}function zd(t,e,n,s){t.removeEventListener(e,n,s)}const Bl=Symbol("_vei");function qd(t,e,n,s,i=null){const r=t[Bl]||(t[Bl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Kd(e);if(s){const a=r[e]=Qd(s,i);fn(t,l,a,c)}else o&&(zd(t,l,o,c),r[e]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function Kd(t){let e;if(Wl.test(t)){e={};let s;for(;s=t.match(Wl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let xr=0;const Yd=Promise.resolve(),Xd=()=>xr||(Yd.then(()=>xr=0),xr=Date.now());function Qd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(Jd(s,n.value),e,5,[s])};return n.value=t,n.attached=Xd(),n}function Jd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Hd(t,s,o):e==="style"?Gd(t,n,s):Fi(e)?po(e)||qd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ep(t,e,s,o))?(Fl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ll(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(s))?Fl(t,Qe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ll(t,e,s,o))};function ep(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Hl(e)&&ye(n)?!1:e in t}const Ul=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Us(e,n):e};function tp(t){t.target.composing=!0}function Vl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yr=Symbol("_assign"),np={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[yr]=Ul(i);const r=s||i.props&&i.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Or(l)),t[yr](l)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",tp),fn(t,"compositionend",Vl),fn(t,"change",Vl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[yr]=Ul(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Or(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},sp=Pe({patchProp:Zd},Bd);let jl;function ip(){return jl||(jl=cd(sp))}const rp=(...t)=>{const e=ip().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=lp(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,op(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function op(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lp(t){return ye(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Xa;const Yi=t=>Xa=t,Qa=Symbol();function Gr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var es;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(es||(es={}));function cp(){const t=Kc(!0),e=t.run(()=>We({}));let n=[],s=[];const i=wo({install(r){Yi(i),i._a=r,r.provide(Qa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ja=()=>{};function Gl(t,e,n,s=Ja){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Yc()&&qh(i),i}function an(t,...e){t.slice().forEach(n=>{n(...e)})}const ap=t=>t(),$l=Symbol(),br=Symbol();function $r(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Gr(i)&&Gr(s)&&t.hasOwnProperty(n)&&!xe(s)&&!Ot(s)?t[n]=$r(i,s):t[n]=s}return t}const up=Symbol();function hp(t){return!Gr(t)||!t.hasOwnProperty(up)}const{assign:Rt}=Object;function fp(t){return!!(xe(t)&&t.effect)}function dp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=xf(n.state.value[t]);return Rt(u,r,Object.keys(o||{}).reduce((d,g)=>(d[g]=wo(Ka(()=>{Yi(n);const x=n._s.get(t);return o[g].call(x,x)})),d),{}))}return c=Za(t,a,e,n,s,!0),c}function Za(t,e,n={},s,i,r){let o;const l=Rt({actions:{}},n),c={deep:!0};let a,u,d=[],g=[],x;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),We({});let O;function j(f){let h;a=u=!1,typeof f=="function"?(f(s.state.value[t]),h={type:es.patchFunction,storeId:t,events:x}):($r(s.state.value[t],f),h={type:es.patchObject,payload:f,storeId:t,events:x});const p=O=Symbol();pa().then(()=>{O===p&&(a=!0)}),u=!0,an(d,h,s.state.value[t])}const V=r?function(){const{state:h}=n,p=h?h():{};this.$patch(v=>{Rt(v,p)})}:Ja;function Y(){o.stop(),d=[],g=[],s._s.delete(t)}const Z=(f,h="")=>{if($l in f)return f[br]=h,f;const p=function(){Yi(s);const v=Array.from(arguments),T=[],le=[];function B(G){T.push(G)}function ce(G){le.push(G)}an(g,{args:v,name:p[br],store:X,after:B,onError:ce});let pe;try{pe=f.apply(this&&this.$id===t?this:X,v)}catch(G){throw an(le,G),G}return pe instanceof Promise?pe.then(G=>(an(T,G),G)).catch(G=>(an(le,G),Promise.reject(G))):(an(T,pe),pe)};return p[$l]=!0,p[br]=h,p},M={_p:s,$id:t,$onAction:Gl.bind(null,g),$patch:j,$reset:V,$subscribe(f,h={}){const p=Gl(d,f,h.detached,()=>v()),v=o.run(()=>dt(()=>s.state.value[t],T=>{(h.flush==="sync"?u:a)&&f({storeId:t,type:es.direct,events:x},T)},Rt({},c,h)));return p},$dispose:Y},X=ji(M);s._s.set(t,X);const be=(s._a&&s._a.runWithContext||ap)(()=>s._e.run(()=>(o=Kc()).run(()=>e({action:Z}))));for(const f in be){const h=be[f];if(xe(h)&&!fp(h)||Ot(h))r||(I&&hp(h)&&(xe(h)?h.value=I[f]:$r(h,I[f])),s.state.value[t][f]=h);else if(typeof h=="function"){const p=Z(h,f);be[f]=p,l.actions[f]=h}}return Rt(X,be),Rt(Q(X),be),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:f=>{j(h=>{Rt(h,f)})}}),s._p.forEach(f=>{Rt(X,o.run(()=>f({store:X,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(X.$state,I),a=!0,u=!0,X}/*! #__NO_SIDE_EFFECTS__ */function pp(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=td();return o=o||(c?Jn(Qa,null):null),o&&Yi(o),o=Xa,o._s.has(t)||(i?Za(t,e,s,o):dp(t,s,o)),o._s.get(t)}return r.$id=t,r}const _p=""+new URL("waiter-GGyCVIlv.gif",import.meta.url).href,gp=()=>{};var zl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const N=function(t,e){if(!t)throw Nn(e)},Nn=function(t){return new Error("Firebase Database ("+eu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[u],n[d],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||d==null)throw new xp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),d!==64){const I=a<<6&192|d;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nu=function(t){const e=tu(t);return Ao.encodeByteArray(e,!0)},ti=function(t){return nu(t).replace(/\./g,"")},zr=function(t){try{return Ao.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){return su(void 0,t)}function su(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bp(n)||(t[n]=su(t[n],e[n]));return t}function bp(t){return t!=="__proto__"}/**
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
 */const Cp=()=>vp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof zl>"u")return;const t=zl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ip=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zr(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return gp()||Cp()||Ep()||Ip()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wp=t=>{var e,n;return(n=(e=iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sp=t=>{const e=wp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ru=()=>{var t;return(t=iu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Tp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ti(JSON.stringify(n)),ti(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ou(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Np())}function Rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ap(){return eu.NODE_ADMIN===!0}function Pp(){try{return typeof indexedDB=="object"}catch{return!1}}function Dp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="FirebaseError";class ws extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Op,Object.setPrototypeOf(this,ws.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lu.prototype.create)}}class lu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?kp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ws(i,l,s)}}function kp(t,e){return t.replace(Mp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Mp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=hs(zr(r[0])||""),n=hs(zr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Lp=function(t){const e=cu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Fp=function(t){const e=cu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ql(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function si(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kl(r)&&Kl(o)){if(!si(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const g=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let d=0;d<80;d++){d<40?d<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):d<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[d]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Po(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,N(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rn(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Up{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vp(t){return t===Kt?void 0:t}function jp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Up(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const $p={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},zp=fe.INFO,qp={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Kp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=qp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=zp,this._logHandler=Kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Yp=(t,e)=>e.some(n=>t instanceof n);let Yl,Xl;function Xp(){return Yl||(Yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qp(){return Xl||(Xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uu=new WeakMap,qr=new WeakMap,hu=new WeakMap,vr=new WeakMap,Do=new WeakMap;function Jp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(kt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uu.set(n,t)}).catch(()=>{}),Do.set(e,t),e}function Zp(t){if(qr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});qr.set(t,e)}let Kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function e_(t){Kr=t(Kr)}function t_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Cr(this),e,...n);return hu.set(s,e.sort?e.sort():[e]),kt(s)}:Qp().includes(t)?function(...e){return t.apply(Cr(this),e),kt(uu.get(this))}:function(...e){return kt(t.apply(Cr(this),e))}}function n_(t){return typeof t=="function"?t_(t):(t instanceof IDBTransaction&&Zp(t),Yp(t,Xp())?new Proxy(t,Kr):t)}function kt(t){if(t instanceof IDBRequest)return Jp(t);if(vr.has(t))return vr.get(t);const e=n_(t);return e!==t&&(vr.set(t,e),Do.set(e,t)),e}const Cr=t=>Do.get(t);function s_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=kt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const i_=["get","getKey","getAll","getAllKeys","count"],r_=["put","add","delete","clear"],Er=new Map;function Ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Er.get(e))return Er.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=r_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||i_.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Er.set(e,r),r}e_(t=>({...t,get:(e,n,s)=>Ql(e,n)||t.get(e,n,s),has:(e,n)=>!!Ql(e,n)||t.has(e,n)}));/**
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
 */class o_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function l_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yr="@firebase/app",Jl="0.11.2";/**
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
 */const Et=new au("@firebase/app"),c_="@firebase/app-compat",a_="@firebase/analytics-compat",u_="@firebase/analytics",h_="@firebase/app-check-compat",f_="@firebase/app-check",d_="@firebase/auth",p_="@firebase/auth-compat",__="@firebase/database",g_="@firebase/data-connect",m_="@firebase/database-compat",x_="@firebase/functions",y_="@firebase/functions-compat",b_="@firebase/installations",v_="@firebase/installations-compat",C_="@firebase/messaging",E_="@firebase/messaging-compat",I_="@firebase/performance",w_="@firebase/performance-compat",S_="@firebase/remote-config",T_="@firebase/remote-config-compat",N_="@firebase/storage",R_="@firebase/storage-compat",A_="@firebase/firestore",P_="@firebase/vertexai",D_="@firebase/firestore-compat",O_="firebase",k_="11.4.0";/**
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
 */const Xr="[DEFAULT]",M_={[Yr]:"fire-core",[c_]:"fire-core-compat",[u_]:"fire-analytics",[a_]:"fire-analytics-compat",[f_]:"fire-app-check",[h_]:"fire-app-check-compat",[d_]:"fire-auth",[p_]:"fire-auth-compat",[__]:"fire-rtdb",[g_]:"fire-data-connect",[m_]:"fire-rtdb-compat",[x_]:"fire-fn",[y_]:"fire-fn-compat",[b_]:"fire-iid",[v_]:"fire-iid-compat",[C_]:"fire-fcm",[E_]:"fire-fcm-compat",[I_]:"fire-perf",[w_]:"fire-perf-compat",[S_]:"fire-rc",[T_]:"fire-rc-compat",[N_]:"fire-gcs",[R_]:"fire-gcs-compat",[A_]:"fire-fst",[D_]:"fire-fst-compat",[P_]:"fire-vertex","fire-js":"fire-js",[O_]:"fire-js-all"};/**
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
 */const ii=new Map,L_=new Map,Qr=new Map;function Zl(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(Qr.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,t);for(const n of ii.values())Zl(n,t);for(const n of L_.values())Zl(n,t);return!0}function F_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function B_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const W_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new lu("app","Firebase",W_);/**
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
 */class H_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const U_=k_;function fu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=ru()),!n)throw Mt.create("no-options");const r=ii.get(i);if(r){if(si(n,r.options)&&si(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new Gp(i);for(const c of Qr.values())o.addComponent(c);const l=new H_(n,s,o);return ii.set(i,l),l}function V_(t=Xr){const e=ii.get(t);if(!e&&t===Xr&&ru())return fu();if(!e)throw Mt.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let i=(s=M_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}ri(new fs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const j_="firebase-heartbeat-database",G_=1,ds="firebase-heartbeat-store";let Ir=null;function du(){return Ir||(Ir=s_(j_,G_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ds)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Ir}async function $_(t){try{const n=(await du()).transaction(ds),s=await n.objectStore(ds).get(pu(t));return await n.done,s}catch(e){if(e instanceof ws)Et.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(n.message)}}}async function ec(t,e){try{const s=(await du()).transaction(ds,"readwrite");await s.objectStore(ds).put(e,pu(t)),await s.done}catch(n){if(n instanceof ws)Et.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(s.message)}}}function pu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const z_=1024,q_=30;class K_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>q_){const o=Q_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Et.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tc(),{heartbeatsToSend:s,unsentEntries:i}=Y_(this._heartbeatsCache.heartbeats),r=ti(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Et.warn(n),""}}}function tc(){return new Date().toISOString().substring(0,10)}function Y_(t,e=z_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),nc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class X_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pp()?Dp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nc(t){return ti(JSON.stringify({version:2,heartbeats:t})).length}function Q_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function J_(t){ri(new fs("platform-logger",e=>new o_(e),"PRIVATE")),ri(new fs("heartbeat",e=>new K_(e),"PRIVATE")),xn(Yr,Jl,t),xn(Yr,Jl,"esm2017"),xn("fire-js","")}J_("");var Z_="firebase",e0="11.4.0";/**
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
 */xn(Z_,e0,"app");var sc={};const ic="@firebase/database",rc="1.0.13";/**
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
 */let _u="";function t0(t){_u=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new n0(e)}}catch{}return new s0},Xt=gu("localStorage"),i0=gu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new au("@firebase/database"),r0=function(){let t=1;return function(){return t++}}(),mu=function(t){const e=Hp(t),n=new Wp;n.update(e);const s=n.digest();return Ao.encodeByteArray(s)},Ss=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ss.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let ts=null,oc=!0;const o0=function(t,e){N(!0,"Can't turn on custom loggers persistently."),yn.logLevel=fe.VERBOSE,ts=yn.log.bind(yn)},Ae=function(...t){if(oc===!0&&(oc=!1,ts===null&&i0.get("logging_enabled")===!0&&o0()),ts){const e=Ss.apply(null,t);ts(e)}},Ts=function(t){return function(...e){Ae(t,...e)}},Jr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ss(...t);yn.error(e)},It=function(...t){const e=`FIREBASE FATAL ERROR: ${Ss(...t)}`;throw yn.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+Ss(...t);yn.warn(e)},l0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},c0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},En="[MIN_NAME]",nn="[MAX_NAME]",An=function(t,e){if(t===e)return 0;if(t===En||e===nn)return-1;if(e===En||t===nn)return 1;{const n=lc(t),s=lc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},a0=function(t,e){return t===e?0:t<e?-1:1},Hn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Oo=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=Oo(t[e[s]]);return n+="}",n},yu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bu=function(t){N(!xu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let d="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),d=d+g}return d.toLowerCase()},u0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},h0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function f0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const d0=new RegExp("^-?(0*)\\d{1,10}$"),p0=-2147483648,_0=2147483647,lc=function(t){if(d0.test(t)){const e=Number(t);if(e>=p0&&e<=_0)return e}return null},Pn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},g0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class m0{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,B_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class Gs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="5",vu="v",Cu="s",Eu="r",Iu="f",wu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Su="ls",Tu="p",Zr="ac",Nu="websocket",Ru="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function y0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pu(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let s;if(e===Nu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ru)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);y0(t)&&(n.ns=t.namespace);const i=[];return je(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.counters_={}}incrementCounter(e,n=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr={},Sr={};function Mo(t){const e=t.toString();return wr[e]||(wr[e]=new b0),wr[e]}function v0(t,e){const n=t.toString();return Sr[n]||(Sr[n]=e()),Sr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Pn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="start",E0="close",I0="pLPCommand",w0="pRTLPCB",Du="id",Ou="pw",ku="ser",S0="cb",T0="seg",N0="ts",R0="d",A0="dframe",Mu=1870,Lu=30,P0=Mu-Lu,D0=25e3,O0=3e4;class dn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=Mo(n),this.urlFn=c=>(this.appCheckToken&&(c[Zr]=this.appCheckToken),Pu(n,Ru,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new C0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(O0)),c0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cc)this.id=l,this.password=c;else if(o===E0)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[cc]="t",s[ku]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[S0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vu]=ko,this.transportSessionId&&(s[Cu]=this.transportSessionId),this.lastSessionId&&(s[Su]=this.lastSessionId),this.applicationId&&(s[Tu]=this.applicationId),this.appCheckToken&&(s[Zr]=this.appCheckToken),typeof location<"u"&&location.hostname&&wu.test(location.hostname)&&(s[Eu]=Iu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dn.forceAllow_=!0}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){return dn.forceAllow_?!0:!dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!u0()&&!h0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nu(n),i=yu(s,P0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[A0]="t",s[Du]=e,s[Ou]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=r0(),window[I0+this.uniqueCallbackIdentifier]=e,window[w0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Du]=this.myID,e[Ou]=this.myPW,e[ku]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lu+s.length<=Mu;){const o=this.pendingSegs.shift();s=s+"&"+T0+i+"="+o.seg+"&"+N0+i+"="+o.ts+"&"+R0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(D0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=16384,M0=45e3;let oi=null;typeof MozWebSocket<"u"?oi=MozWebSocket:typeof WebSocket<"u"&&(oi=WebSocket);class Ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=Mo(n),this.connURL=Ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vu]=ko,typeof location<"u"&&location.hostname&&wu.test(location.hostname)&&(o[Eu]=Iu),n&&(o[Cu]=n),s&&(o[Su]=s),i&&(o[Zr]=i),r&&(o[Tu]=r),Pu(e,Nu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xt.set("previous_websocket_failure",!0);try{let s;Ap(),this.mySock=new oi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&oi!==null&&!Ze.forceDisallow_}static previouslyFailed(){return Xt.isInMemoryStorage||Xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=hs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yu(n,k0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(M0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{static get ALL_TRANSPORTS(){return[dn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ze&&Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of ps.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=6e4,F0=5e3,B0=10*1024,W0=100*1024,Tr="t",ac="d",H0="s",uc="r",U0="e",hc="o",fc="a",dc="n",pc="p",V0="h";class j0{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>W0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>B0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tr in e){const n=e[Tr];n===fc?this.upgradeIfSecondaryHealthy_():n===uc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hn("t",e),s=Hn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hn("t",e),s=Hn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hn(Tr,e);if(ac in e){const s=e[ac];if(n===V0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===H0?this.onConnectionShutdown_(s):n===uc?this.onReset_(s):n===U0?Jr("Server Error: "+s):n===hc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ko!==s&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(L0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(F0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bu{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Bu{static getInstance(){return new li}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ou()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=32,gc=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new oe("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bt(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Wu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function G0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Fe(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fo(t,e){if(Bt(t)!==Bt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bt(t)>Bt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $0{constructor(e,n){this.errorPrefix_=n,this.parts_=Hu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Qi(this.parts_[s]);Vu(this)}}function z0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qi(e),Vu(t)}function q0(t){const e=t.parts_.pop();t.byteLength_-=Qi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vu(t){if(t.byteLength_>gc)throw new Error(t.errorPrefix_+"has a key path longer than "+gc+" bytes ("+t.byteLength_+").");if(t.parts_.length>_c)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_c+") or object contains a cycle "+Yt(t))}function Yt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Bu{static getInstance(){return new Bo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e3,K0=60*5*1e3,mc=30*1e3,Y0=1.3,X0=3e4,Q0="server_kill",xc=3;class Ct extends Fu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Ct.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=K0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Xi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;Ct.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tt(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Lp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jr("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>X0&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Y0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(d){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=g&&g.token,l=new j0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{Ve(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Q0)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ve(d),c())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ql(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Oo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xc&&(this.reconnectDelay_=mc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_u.replace(/\./g,"-")]=1,ou()?e["framework.cordova"]=1:Rp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=li.getInstance().currentlyOnline();return ql(this.interruptReasons_)&&e}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ji{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(En,e),i=new z(En,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class ju extends Ji{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,n){return An(e.name,n.name)}isDefinedOn(e){throw Nn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(nn,Fs)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Fs)}toString(){return".key"}}const bn=new ju;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class J0{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bs(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new J0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t,e){return An(t.name,e.name)}function Wo(t,e){return An(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;function eg(t){eo=t}const Gu=function(t){return typeof t=="number"?"number:"+bu(t):"string:"+t},$u=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else N(t===eo||t.isEmpty(),"priority of unexpected type.");N(t===eo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;class Ee{static set __childrenNodeConstructor(e){yc=e}static get __childrenNodeConstructor(){return yc}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$u(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:$(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(N(s!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bu(this.value_):e+=this.value_,this.lazyHash_=mu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return N(i>=0,"Unknown leaf type: "+n),N(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu,qu;function tg(t){zu=t}function ng(t){qu=t}class sg extends Ji{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?An(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(nn,new Ee("[PRIORITY-POST]",qu))}makePost(e,n){const s=zu(e);return new z(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=Math.log(2);class rg{constructor(e){const n=r=>parseInt(Math.log(r)/ig,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ci=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let d,g;if(u===0)return null;if(u===1)return d=t[c],g=n?n(d):d,new Ie(g,d.node,Ie.BLACK,null,null);{const x=parseInt(u/2,10)+c,I=i(c,x),O=i(x+1,a);return d=t[x],g=n?n(d):d,new Ie(g,d.node,Ie.BLACK,I,O)}},r=function(c){let a=null,u=null,d=t.length;const g=function(I,O){const j=d-I,V=d;d-=I;const Y=i(j+1,V),Z=t[j],M=n?n(Z):Z;x(new Ie(M,Z.node,O,null,Y))},x=function(I){a?(a.left=I,a=I):(u=I,a=I)};for(let I=0;I<c.count;++I){const O=c.nextBitIsOne(),j=Math.pow(2,c.count-(I+1));O?g(j,Ie.BLACK):(g(j,Ie.BLACK),g(j,Ie.RED))}return u},o=new rg(t.length),l=r(o);return new Ue(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr;const un={};class vt{static get Default(){return N(un&&me,"ChildrenNode.ts has not been loaded"),Nr=Nr||new vt({".priority":un},{".priority":me}),Nr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ci(s,e.getCompare()):l=un;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new vt(u,a)}addToIndexes(e,n){const s=ni(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(z.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ci(l,o.getCompare())}else return un;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new z(e.name,l))),c.insert(e,e.node)}});return new vt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ni(this.indexes_,i=>{if(i===un)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new vt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class F{static get EMPTY_NODE(){return Vn||(Vn=new F(new Ue(Wo),null,vt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$u(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vn}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vn:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{N($(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(de(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gu(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ns?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),i=n.getIterator(me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class og extends F{constructor(){super(new Ue(Wo),F.EMPTY_NODE,vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Ns=new og;Object.defineProperties(z,{MIN:{value:new z(En,F.EMPTY_NODE)},MAX:{value:new z(nn,Ns)}});ju.__EMPTY_NODE=F.EMPTY_NODE;Ee.__childrenNodeConstructor=F;eg(Ns);ng(Ns);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=!0;function we(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,we(e))}if(!(t instanceof Array)&&lg){const n=[];let s=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=we(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new z(o,c)))}}),n.length===0)return F.EMPTY_NODE;const r=ci(n,Z0,o=>o.name,Wo);if(s){const o=ci(n,me.getCompare());return new F(r,we(e),new vt({".priority":o},{".priority":me}))}else return new F(r,we(e),vt.Default)}else{let n=F.EMPTY_NODE;return je(t,(s,i)=>{if(Tt(t,s)&&s.substring(0,1)!=="."){const r=we(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(we(e))}}tg(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends Ji{constructor(e){super(),this.indexPath_=e,N(!q(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?An(e.name,n.name):r}makePost(e,n){const s=we(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Ns);return new z(nn,e)}toString(){return Hu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends Ji{compare(e,n){const s=e.node.compareTo(n.node);return s===0?An(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=we(e);return new z(n,s)}toString(){return".value"}}const ug=new ag;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(_s(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(In(n,s)):o.trackChildChange(gs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(i,r)=>{n.hasChild(i)||s.trackChildChange(_s(i,r))}),n.isLeafNode()||n.forEachChild(me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(gs(i,r,o))}else s.trackChildChange(In(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.indexedFilter_=new Ho(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new z(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,l)=>{r.matches(new z(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new z(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(g,x)=>d(x,g)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const c=new z(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const d=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(u&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(gs(n,s,d)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(_s(n,d));const O=l.updateImmediateChild(n,F.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(In(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(_s(a.name,a.node)),r.trackChildChange(In(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Uo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dg(t){return t.loadsAllData()?new Ho(t.getIndex()):t.hasLimit()?new fg(t):new ms(t)}function bc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===ug?n="$value":t.index_===bn?n="$key":(N(t.index_ instanceof cg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Fu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ai.getListenId_(e,s),l={};this.listens_[o]=l;const c=bc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let d=u;if(a===404&&(d=null,a=null),a===null&&this.onDataUpdate_(r,d,!1,s),Cn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ai.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bc(e._queryParams),s=e._path.toString(),i=new Xi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=hs(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return{value:null,children:new Map}}function Yu(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,ui());const i=t.children.get(s);e=de(e),Yu(i,e,n)}}function to(t,e,n){t.value!==null?n(e,t.value):_g(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);to(i,r,n)})}function _g(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=10*1e3,mg=30*1e3,xg=5*60*1e3;class yg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gg(e);const s=Cc+(mg-Cc)*Math.random();ns(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;je(e,(i,r)=>{r>0&&Tt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*xg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function Xu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=Xu()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new hi(J(),n,this.revert)}}else return N($(this.path)===e,"operationForChild called for unrelated child."),new hi(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new xs(this.source,J()):new xs(this.source,de(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return q(this.path)?new sn(this.source,J(),this.snap.getImmediateChild(e)):new sn(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new sn(this.source,J(),n.value):new ys(this.source,J(),n)}else return N($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ys(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hg(o.childName,o.snapshotNode))}),jn(t,i,"child_removed",e,s,n),jn(t,i,"child_added",e,s,n),jn(t,i,"child_moved",r,s,n),jn(t,i,"child_changed",e,s,n),jn(t,i,"value",e,s,n),i}function jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Eg(t,l,c)),o.forEach(l=>{const c=Cg(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Cg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Eg(t,e,n){if(e.childName==null||n.childName==null)throw Nn("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e){return{eventCache:t,serverCache:e}}function ss(t,e,n,s){return Zi(new Wt(e,n,s),t.serverCache)}function Qu(t,e,n,s){return Zi(t.eventCache,new Wt(e,n,s))}function fi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr;const Ig=()=>(Rr||(Rr=new Ue(a0)),Rr);class _e{static fromObject(e){let n=new _e(null);return je(e,(s,i)=>{n=n.set(new oe(s),i)}),n}constructor(e,n=Ig()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(q(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(de(e),n);return r!=null?{path:Ce(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(de(e)):new _e(null)}}set(e,n){if(q(e))return new _e(n,this.children);{const s=$(e),r=(this.children.get(s)||new _e(null)).set(de(e),n),o=this.children.insert(s,r);return new _e(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(de(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new _e(null):new _e(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(de(e)):null}}setTree(e,n){if(q(e))return n;{const s=$(e),r=(this.children.get(s)||new _e(null)).setTree(de(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new _e(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(de(e),Ce(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(de(e),Ce(n,i),s):new _e(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new _e(null))}}function is(t,e,n){if(q(e))return new st(new _e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new st(t.writeTree_.set(i,r))}else{const i=new _e(n),r=t.writeTree_.setTree(e,i);return new st(r)}}}function Ec(t,e,n){let s=t;return je(n,(i,r)=>{s=is(s,Ce(e,i),r)}),s}function Ic(t,e){if(q(e))return st.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new st(n)}}function no(t,e){return ln(t,e)!=null}function ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function wc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function Lt(t,e){if(q(e))return t;{const n=ln(t,e);return n!=null?new st(new _e(n)):new st(t.writeTree_.subtree(e))}}function so(t){return t.writeTree_.isEmpty()}function wn(t,e){return Ju(J(),t.writeTree_,e)}function Ju(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ju(Ce(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){return nh(e,t)}function wg(t,e,n,s,i){N(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=s}function Sg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Tg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ng(l,s.path)?i=!1:et(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Rg(t),!0;if(s.snap)t.visibleWrites=Ic(t.visibleWrites,s.path);else{const l=s.children;je(l,c=>{t.visibleWrites=Ic(t.visibleWrites,Ce(s.path,c))})}return!0}else return!1}function Ng(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(Ce(t.path,n),e))return!0;return!1}function Rg(t){t.visibleWrites=Zu(t.allWrites,Ag,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ag(t){return t.visible}function Zu(t,e,n){let s=st.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=Fe(n,o),s=is(s,l,r.snap)):et(o,n)&&(l=Fe(o,n),s=is(s,J(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=Fe(n,o),s=Ec(s,l,r.children);else if(et(o,n))if(l=Fe(o,n),q(l))s=Ec(s,J(),r.children);else{const c=Cn(r.children,$(l));if(c){const a=c.getChild(de(l));s=is(s,J(),a)}}}else throw Nn("WriteRecord should have .snap or .children")}}return s}function eh(t,e,n,s,i){if(!s&&!i){const r=ln(t.visibleWrites,e);if(r!=null)return r;{const o=Lt(t.visibleWrites,e);if(so(o))return n;if(n==null&&!no(o,J()))return null;{const l=n||F.EMPTY_NODE;return wn(o,l)}}}else{const r=Lt(t.visibleWrites,e);if(!i&&so(r))return n;if(!i&&n==null&&!no(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(et(a.path,e)||et(e,a.path))},l=Zu(t.allWrites,o,e),c=n||F.EMPTY_NODE;return wn(l,c)}}}function Pg(t,e,n){let s=F.EMPTY_NODE;const i=ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Lt(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const c=wn(Lt(r,new oe(o)),l);s=s.updateImmediateChild(o,c)}),wc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Lt(t.visibleWrites,e);return wc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Dg(t,e,n,s,i){N(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(no(t.visibleWrites,r))return null;{const o=Lt(t.visibleWrites,r);return so(o)?i.getChild(n):wn(o,i.getChild(n))}}function Og(t,e,n,s){const i=Ce(e,n),r=ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Lt(t.visibleWrites,i);return wn(o,s.getNode().getImmediateChild(n))}else return null}function kg(t,e){return ln(t.visibleWrites,e)}function Mg(t,e,n,s,i,r,o){let l;const c=Lt(t.visibleWrites,e),a=ln(c,J());if(a!=null)l=a;else if(n!=null)l=wn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&u.length<i;)d(x,s)!==0&&u.push(x),x=g.getNext();return u}else return[]}function Lg(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function di(t,e,n,s){return eh(t.writeTree,t.treePath,e,n,s)}function Go(t,e){return Pg(t.writeTree,t.treePath,e)}function Sc(t,e,n,s){return Dg(t.writeTree,t.treePath,e,n,s)}function pi(t,e){return kg(t.writeTree,Ce(t.treePath,e))}function Fg(t,e,n,s,i,r){return Mg(t.writeTree,t.treePath,e,n,s,i,r)}function $o(t,e,n){return Og(t.writeTree,t.treePath,e,n)}function th(t,e){return nh(Ce(t.treePath,e),t.writeTree)}function nh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,gs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_s(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,In(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,gs(s,e.snapshotNode,i.oldSnap));else throw Nn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sh=new Wg;class zo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $o(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),r=Fg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){return{filter:t}}function Ug(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Vg(t,e,n,s,i){const r=new Bg;let o,l;if(n.type===tt.OVERWRITE){const a=n;a.source.fromUser?o=io(t,e,a.path,a.snap,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=_i(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===tt.MERGE){const a=n;a.source.fromUser?o=Gg(t,e,a.path,a.children,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=ro(t,e,a.path,a.children,s,i,l,r))}else if(n.type===tt.ACK_USER_WRITE){const a=n;a.revert?o=qg(t,e,a.path,s,i,r):o=$g(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=zg(t,e,n.path,s,r);else throw Nn("Unknown operation type: "+n.type);const c=r.getChanges();return jg(e,o,c),{viewCache:o,changes:c}}function jg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ku(fi(e)))}}function ih(t,e,n,s,i,r){const o=e.eventCache;if(pi(s,n)!=null)return e;{let l,c;if(q(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=rn(e),u=a instanceof F?a:F.EMPTY_NODE,d=Go(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const a=di(s,rn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){N(Bt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=Sc(s,n,u,c);d!=null?l=t.filter.updatePriority(u,d):l=o.getNode()}else{const u=de(n);let d;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=Sc(s,n,o.getNode(),c);g!=null?d=o.getNode().getImmediateChild(a).updateChild(u,g):d=o.getNode().getImmediateChild(a)}else d=$o(s,a,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),a,d,u,i,r):l=o.getNode()}}return ss(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function _i(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),x,null)}else{const x=$(n);if(!c.isCompleteForPath(n)&&Bt(n)>1)return e;const I=de(n),j=c.getNode().getImmediateChild(x).updateChild(I,s);x===".priority"?a=u.updatePriority(c.getNode(),j):a=u.updateChild(c.getNode(),x,j,I,sh,null)}const d=Qu(e,a,c.isFullyInitialized()||q(n),u.filtersNodes()),g=new zo(i,d,r);return ih(t,d,n,i,g,l)}function io(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new zo(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ss(e,a,!0,t.filter.filtersNodes());else{const d=$(n);if(d===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ss(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=de(n),x=l.getNode().getImmediateChild(d);let I;if(q(g))I=s;else{const O=u.getCompleteChild(d);O!=null?Wu(g)===".priority"&&O.getChild(Uu(g)).isEmpty()?I=O:I=O.updateChild(g,s):I=F.EMPTY_NODE}if(x.equals(I))c=e;else{const O=t.filter.updateChild(l.getNode(),d,I,g,u,o);c=ss(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Tc(t,e){return t.eventCache.isCompleteForChild(e)}function Gg(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=Ce(n,c);Tc(e,$(u))&&(l=io(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=Ce(n,c);Tc(e,$(u))||(l=io(t,l,u,a,i,r,o))}),l}function Nc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ro(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new _e(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((d,g)=>{if(u.hasChild(d)){const x=e.serverCache.getNode().getImmediateChild(d),I=Nc(t,x,g);c=_i(t,c,new oe(d),I,i,r,o,l)}}),a.children.inorderTraversal((d,g)=>{const x=!e.serverCache.isCompleteForChild(d)&&g.value===null;if(!u.hasChild(d)&&!x){const I=e.serverCache.getNode().getImmediateChild(d),O=Nc(t,I,g);c=_i(t,c,new oe(d),O,i,r,o,l)}}),c}function $g(t,e,n,s,i,r,o){if(pi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return _i(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new _e(null);return c.getNode().forEachChild(bn,(u,d)=>{a=a.set(new oe(u),d)}),ro(t,e,n,a,i,r,l,o)}else return e}else{let a=new _e(null);return s.foreach((u,d)=>{const g=Ce(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),ro(t,e,n,a,i,r,l,o)}}function zg(t,e,n,s,i){const r=e.serverCache,o=Qu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return ih(t,o,n,s,sh,i)}function qg(t,e,n,s,i,r){let o;if(pi(s,n)!=null)return e;{const l=new zo(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=di(s,rn(e));else{const d=e.serverCache.getNode();N(d instanceof F,"serverChildren would be complete if leaf node"),u=Go(s,d)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let d=$o(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?a=t.filter.updateChild(c,u,d,de(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,F.EMPTY_NODE,de(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=di(s,rn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||pi(s,J())!=null,ss(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ho(s.getIndex()),r=dg(s);this.processor_=Hg(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Wt(c,o.isFullyInitialized(),i.filtersNodes()),d=new Wt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zi(d,u),this.eventGenerator_=new bg(this.query_)}get query(){return this.query_}}function Yg(t){return t.viewCache_.serverCache.getNode()}function Xg(t){return fi(t.viewCache_)}function Qg(t,e){const n=rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Rc(t){return t.eventRegistrations_.length===0}function Jg(t,e){t.eventRegistrations_.push(e)}function Ac(t,e,n){const s=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Pc(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(N(rn(t.viewCache_),"We should always have a full cache before handling merges"),N(fi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Vg(t.processor_,i,e,n,s);return Ug(t.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Zg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(r,o)=>{s.push(In(r,o))}),n.isFullyInitialized()&&s.push(Ku(n.getNode())),rh(t,s,n.getNode(),e)}function rh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return vg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;class oh{constructor(){this.views=new Map}}function em(t){N(!gi,"__referenceConstructor has already been defined"),gi=t}function tm(){return N(gi,"Reference.ts has not been loaded"),gi}function nm(t){return t.views.size===0}function qo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return N(r!=null,"SyncTree gave us an op for an invalid query."),Pc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Pc(o,e,n,s));return r}}function lh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=di(n,i?s:null),c=!1;l?c=!0:s instanceof F?(l=Go(n,s),c=!1):(l=F.EMPTY_NODE,c=!1);const a=Zi(new Wt(l,c,!1),new Wt(s,i,!1));return new Kg(e,a)}return o}function sm(t,e,n,s,i,r){const o=lh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Jg(o,n),Zg(o,n)}function im(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ht(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Ac(a,n,s)),Rc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Ac(c,n,s)),Rc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Ht(t)&&r.push(new(tm())(e._repo,e._path)),{removed:r,events:o}}function ch(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ft(t,e){let n=null;for(const s of t.views.values())n=n||Qg(s,e);return n}function ah(t,e){if(e._queryParams.loadsAllData())return tr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function uh(t,e){return ah(t,e)!=null}function Ht(t){return tr(t)!=null}function tr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;function rm(t){N(!mi,"__referenceConstructor has already been defined"),mi=t}function om(){return N(mi,"Reference.ts has not been loaded"),mi}let lm=1;class Dc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=Lg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hh(t,e,n,s,i){return wg(t.pendingWriteTree_,e,n,s,i),i?As(t,new sn(Xu(),e,n)):[]}function Qt(t,e,n=!1){const s=Sg(t.pendingWriteTree_,e);if(Tg(t.pendingWriteTree_,e)){let r=new _e(null);return s.snap!=null?r=r.set(J(),!0):je(s.children,o=>{r=r.set(new oe(o),!0)}),As(t,new hi(s.path,r,n))}else return[]}function Rs(t,e,n){return As(t,new sn(Vo(),e,n))}function cm(t,e,n){const s=_e.fromObject(n);return As(t,new ys(Vo(),e,s))}function am(t,e){return As(t,new xs(Vo(),e))}function um(t,e,n){const s=Yo(t,n);if(s){const i=Xo(s),r=i.path,o=i.queryId,l=Fe(r,e),c=new xs(jo(o),l);return Qo(t,r,c)}else return[]}function xi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||uh(o,e))){const c=im(o,e,n,s);nm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(g,x)=>Ht(x));if(u&&!d){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=dm(g);for(let I=0;I<x.length;++I){const O=x[I],j=O.query,V=_h(t,O);t.listenProvider_.startListening(rs(j),bs(t,j),V.hashFn,V.onComplete)}}}!d&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(rs(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(nr(g));t.listenProvider_.stopListening(rs(g),x)}))}pm(t,a)}return l}function fh(t,e,n,s){const i=Yo(t,s);if(i!=null){const r=Xo(i),o=r.path,l=r.queryId,c=Fe(o,e),a=new sn(jo(l),c,n);return Qo(t,o,a)}else return[]}function hm(t,e,n,s){const i=Yo(t,s);if(i){const r=Xo(i),o=r.path,l=r.queryId,c=Fe(o,e),a=_e.fromObject(n),u=new ys(jo(l),c,a);return Qo(t,o,u)}else return[]}function oo(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const I=Fe(g,i);r=r||Ft(x,I),o=o||Ht(x)});let l=t.syncPointTree_.get(i);l?(o=o||Ht(l),r=r||Ft(l,J())):(l=new oh,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,I)=>{const O=Ft(I,J());O&&(r=r.updateImmediateChild(x,O))}));const a=uh(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=nr(e);N(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=_m();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const u=er(t.pendingWriteTree_,i);let d=sm(l,e,n,u,r,c);if(!a&&!o&&!s){const g=ah(l,e);d=d.concat(gm(t,e,g))}return d}function Ko(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Fe(o,e),a=Ft(l,c);if(a)return a});return eh(i,e,r,n,!0)}function fm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const d=Fe(a,n);s=s||Ft(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Ft(i,J()):(i=new oh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=er(t.pendingWriteTree_,e._path),c=lh(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return Xg(c)}function As(t,e){return dh(e,t.syncPointTree_,null,er(t.pendingWriteTree_,J()))}function dh(t,e,n,s){if(q(t.path))return ph(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Ft(i,J()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=th(s,o);r=r.concat(dh(l,c,a,u))}return i&&(r=r.concat(qo(i,t,s,n))),r}}function ph(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Ft(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=th(s,o),u=t.operationForChild(o);u&&(r=r.concat(ph(u,l,c,a)))}),i&&(r=r.concat(qo(i,t,s,n))),r}function _h(t,e){const n=e.query,s=bs(t,n);return{hashFn:()=>(Yg(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?um(t,n._path,s):am(t,n._path);{const r=f0(i,n);return xi(t,n,null,r)}}}}function bs(t,e){const n=nr(e);return t.queryToTagMap.get(n)}function nr(t){return t._path.toString()+"$"+t._queryIdentifier}function Yo(t,e){return t.tagToQueryMap.get(e)}function Xo(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Qo(t,e,n){const s=t.syncPointTree_.get(e);N(s,"Missing sync point for query tag that we're tracking");const i=er(t.pendingWriteTree_,e);return qo(s,n,i,null)}function dm(t){return t.fold((e,n,s)=>{if(n&&Ht(n))return[tr(n)];{let i=[];return n&&(i=ch(n)),je(s,(r,o)=>{i=i.concat(o)}),i}})}function rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(om())(t._repo,t._path):t}function pm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=nr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function _m(){return lm++}function gm(t,e,n){const s=e._path,i=bs(t,e),r=_h(t,n),o=t.listenProvider_.startListening(rs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)N(!Ht(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,d)=>{if(!q(a)&&u&&Ht(u))return[tr(u).query];{let g=[];return u&&(g=g.concat(ch(u).map(x=>x.query))),je(d,(x,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(rs(u),bs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jo(n)}node(){return this.node_}}class Zo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new Zo(this.syncTree_,n)}node(){return Ko(this.syncTree_,this.path_)}}const mm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Oc=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ym(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},ym=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&N(!1,"Unexpected increment value: "+s);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bm=function(t,e,n,s){return el(e,new Zo(n,t),s)},gh=function(t,e,n){return el(t,new Jo(e),n)};function el(t,e,n){const s=t.getPriority().val(),i=Oc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Oc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,we(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(me,(l,c)=>{const a=el(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nl(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=$(n);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new tl(i,s,r),n=de(n),i=$(n)}return s}function Dn(t){return t.node.value}function mh(t,e){t.node.value=e,lo(t)}function xh(t){return t.node.childCount>0}function vm(t){return Dn(t)===void 0&&!xh(t)}function sr(t,e){je(t.node.children,(n,s)=>{e(new tl(n,t,s))})}function yh(t,e,n,s){n&&e(t),sr(t,i=>{yh(i,e,!0)})}function Cm(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ps(t){return new oe(t.parent===null?t.name:Ps(t.parent)+"/"+t.name)}function lo(t){t.parent!==null&&Em(t.parent,t.name,t)}function Em(t,e,n){const s=vm(n),i=Tt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,lo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=/[\[\].#$\/\u0000-\u001F\u007F]/,wm=/[\[\].#$\u0000-\u001F\u007F]/,Ar=10*1024*1024,bh=function(t){return typeof t=="string"&&t.length!==0&&!Im.test(t)},vh=function(t){return typeof t=="string"&&t.length!==0&&!wm.test(t)},Sm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vh(t)},Tm=function(t,e,n,s){sl(Po(t,"value"),e,n)},sl=function(t,e,n){const s=n instanceof oe?new $0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Yt(s)+" with contents = "+e.toString());if(xu(e))throw new Error(t+"contains "+e.toString()+" "+Yt(s));if(typeof e=="string"&&e.length>Ar/3&&Qi(e)>Ar)throw new Error(t+"contains a string greater than "+Ar+" utf8 bytes "+Yt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!bh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);z0(s,o),sl(t,l,s),q0(s)}),i&&r)throw new Error(t+' contains ".value" child '+Yt(s)+" in addition to actual children.")}},Ch=function(t,e,n,s){if(!vh(n))throw new Error(Po(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ch(t,e,n)},Eh=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Rm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sm(n))throw new Error(Po(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function il(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ih(t,e,n){il(t,n),wh(t,s=>Fo(s,e))}function _t(t,e,n){il(t,n),wh(t,s=>et(s,e)||et(e,s))}function wh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Pm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ts&&Ae("event: "+n.toString()),Pn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="repo_interrupt",Om=25;class km{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Am,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ui(),this.transactionQueueTree_=new tl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Mm(t,e,n){if(t.stats_=Mo(t.repoInfo_),t.forceRestClient_||g0())t.server_=new ai(t.repoInfo_,(s,i,r,o)=>{kc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ct(t.repoInfo_,e,(s,i,r,o)=>{kc(t,s,i,r,o)},s=>{Mc(t,s)},s=>{Fm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=v0(t.repoInfo_,()=>new yg(t.stats_,t.server_)),t.infoData_=new pg,t.infoSyncTree_=new Dc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Rs(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ol(t,"connected",!1),t.serverSyncTree_=new Dc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);_t(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Lm(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rl(t){return mm({timestamp:Lm(t)})}function kc(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ni(n,a=>we(a));o=hm(t.serverSyncTree_,r,c,i)}else{const c=we(n);o=fh(t.serverSyncTree_,r,c,i)}else if(s){const c=ni(n,a=>we(a));o=cm(t.serverSyncTree_,r,c)}else{const c=we(n);o=Rs(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=rr(t,r)),_t(t.eventQueue_,l,o)}function Mc(t,e){ol(t,"connected",e),e===!1&&Hm(t)}function Fm(t,e){je(e,(n,s)=>{ol(t,n,s)})}function ol(t,e,n){const s=new oe("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(s,i);const r=Rs(t.infoSyncTree_,s,i);_t(t.eventQueue_,s,r)}function Sh(t){return t.nextWriteId_++}function Bm(t,e,n){const s=fm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=we(i).withIndex(e._queryParams.getIndex());oo(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Rs(t.serverSyncTree_,e._path,r);else{const l=bs(t.serverSyncTree_,e);o=fh(t.serverSyncTree_,e._path,r,l)}return _t(t.eventQueue_,e._path,o),xi(t.serverSyncTree_,e,n,null,!0),r},i=>(ir(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function Wm(t,e,n,s,i){ir(t,"set",{path:e.toString(),value:n,priority:s});const r=rl(t),o=we(n,s),l=Ko(t.serverSyncTree_,e),c=gh(o,l,r),a=Sh(t),u=hh(t.serverSyncTree_,e,c,a,!0);il(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const I=g==="ok";I||Ve("set at "+e+" failed: "+g);const O=Qt(t.serverSyncTree_,a,!I);_t(t.eventQueue_,e,O),Gm(t,i,g,x)});const d=Ph(t,e);rr(t,d),_t(t.eventQueue_,d,[])}function Hm(t){ir(t,"onDisconnectEvents");const e=rl(t),n=ui();to(t.onDisconnect_,J(),(i,r)=>{const o=bm(i,r,t.serverSyncTree_,e);Yu(n,i,o)});let s=[];to(n,J(),(i,r)=>{s=s.concat(Rs(t.serverSyncTree_,i,r));const o=Ph(t,i);rr(t,o)}),t.onDisconnect_=ui(),_t(t.eventQueue_,J(),s)}function Um(t,e,n){let s;$(e._path)===".info"?s=oo(t.infoSyncTree_,e,n):s=oo(t.serverSyncTree_,e,n),Ih(t.eventQueue_,e._path,s)}function Vm(t,e,n){let s;$(e._path)===".info"?s=xi(t.infoSyncTree_,e,n):s=xi(t.serverSyncTree_,e,n),Ih(t.eventQueue_,e._path,s)}function jm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Dm)}function ir(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function Gm(t,e,n,s){e&&Pn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Th(t,e,n){return Ko(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function ll(t,e=t.transactionQueueTree_){if(e||or(t,e),Dn(e)){const n=Rh(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$m(t,Ps(e),n)}else xh(e)&&sr(e,n=>{ll(t,n)})}function $m(t,e,n){const s=n.map(a=>a.currentWriteId),i=Th(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Fe(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ir(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const d=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(Qt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&d.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();or(t,nl(t.transactionQueueTree_,e)),ll(t,t.transactionQueueTree_),_t(t.eventQueue_,e,u);for(let g=0;g<d.length;g++)Pn(d[g])}else{if(a==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ve("transaction at "+c.toString()+" failed: "+a);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=a}rr(t,e)}},o)}function rr(t,e){const n=Nh(t,e),s=Ps(n),i=Rh(t,n);return zm(t,i,s),s}function zm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Fe(n,c.path);let u=!1,d;if(N(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Om)u=!0,d="maxretry",i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=Th(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){sl("transaction failed: Data returned ",x,c.path);let I=we(x);typeof x=="object"&&x!=null&&Tt(x,".priority")||(I=I.updatePriority(g.getPriority()));const j=c.currentWriteId,V=rl(t),Y=gh(I,g,V);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=Y,c.currentWriteId=Sh(t),o.splice(o.indexOf(j),1),i=i.concat(hh(t.serverSyncTree_,c.path,Y,c.currentWriteId,c.applyLocally)),i=i.concat(Qt(t.serverSyncTree_,j,!0))}else u=!0,d="nodata",i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0))}_t(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}or(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Pn(s[l]);ll(t,t.transactionQueueTree_)}function Nh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Dn(s)===void 0;)s=nl(s,n),e=de(e),n=$(e);return s}function Rh(t,e){const n=[];return Ah(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ah(t,e,n){const s=Dn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);sr(e,i=>{Ah(t,i,n)})}function or(t,e){const n=Dn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,mh(e,n.length>0?n:void 0)}sr(e,s=>{or(t,s)})}function Ph(t,e){const n=Ps(Nh(t,e)),s=nl(t.transactionQueueTree_,e);return Cm(s,i=>{Pr(t,i)}),Pr(t,s),yh(s,i=>{Pr(t,i)}),n}function Pr(t,e){const n=Dn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?mh(e,void 0):n.length=r+1,_t(t.eventQueue_,Ps(e),i);for(let o=0;o<s.length;o++)Pn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Km(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lc=function(t,e){const n=Ym(t),s=n.namespace;n.domain==="firebase.com"&&It(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||l0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Au(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},Ym=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=qm(t.substring(u,d)));const g=Km(t.substring(Math.min(t.length,d)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class Qm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Wu(this._path)}get ref(){return new Nt(this._repo,this._path)}get _queryIdentifier(){const e=vc(this._queryParams),n=Oo(e);return n==="{}"?"default":n}get _queryObject(){return vc(this._queryParams)}isEqual(e){if(e=Rn(e),!(e instanceof cl))return!1;const n=this._repo===e._repo,s=Fo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+G0(this._path)}}class Nt extends cl{constructor(e,n){super(e,n,new Uo,!1)}get parent(){const e=Uu(this._path);return e===null?null:new Nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=co(this.ref,e);return new vs(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new vs(i,co(this.ref,s),me)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ws(t,e){return t=Rn(t),t._checkNotDeleted("ref"),e!==void 0?co(t._root,e):t._root}function co(t,e){return t=Rn(t),$(t._path)===null?Nm("child","path",e):Ch("child","path",e),new Nt(t._repo,Ce(t._path,e))}function Jm(t){return Eh("remove",t._path),Oh(t,null)}function Oh(t,e){t=Rn(t),Eh("set",t._path),Tm("set",e,t._path);const n=new Xi;return Wm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Zm(t){t=Rn(t);const e=new Dh(()=>{}),n=new lr(e);return Bm(t._repo,t,n).then(s=>new vs(s,new Nt(t._repo,t._path),t._queryParams.getIndex()))}class lr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Xm("value",this,new vs(e.snapshotNode,new Nt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qm(this,e,n):null}matches(e){return e instanceof lr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ex(t,e,n,s,i){const r=new Dh(n,void 0),o=new lr(r);return Um(t._repo,t,o),()=>Vm(t._repo,t,o)}function tx(t,e,n,s){return ex(t,"value",e)}em(Nt);rm(Nt);/**
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
 */const nx="FIREBASE_DATABASE_EMULATOR_HOST",ao={};let sx=!1;function ix(t,e,n,s){t.repoInfo_=new Au(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function rx(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lc(r,i),l=o.repoInfo,c;typeof process<"u"&&sc&&(c=sc[nx]),c?(r=`http://${c}?ns=${l.namespace}`,o=Lc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new x0(t.name,t.options,e);Rm("Invalid Firebase Database URL",o),q(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const u=lx(l,t,a,new m0(t,n));return new cx(u,t)}function ox(t,e){const n=ao[e];(!n||n[t.key]!==t)&&It(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jm(t),delete n[t.key]}function lx(t,e,n,s){let i=ao[e.name];i||(i={},ao[e.name]=i);let r=i[t.toURLString()];return r&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new km(t,sx,n,s),i[t.toURLString()]=r,r}class cx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Mm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ox(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}}function ax(t=V_(),e){const n=F_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Sp("database");s&&ux(n,...s)}return n}function ux(t,e,n,s={}){t=Rn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&si(s,r.repoInfo_.emulatorOptions))return;It("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&It('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Gs(Gs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Tp(s.mockUserToken,t.app.options.projectId);o=new Gs(l)}ix(r,i,s,o)}/**
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
 */function hx(t){t0(U_),ri(new fs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rx(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xn(ic,rc,t),xn(ic,rc,"esm2017")}Ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hx();function yi(t,e){const n=bi();return yi=function(s,i){return s=s-361,n[s]},yi(t,e)}function bi(){const t=["1:720775593565:web:1a263bf6a87ecfea3817b4","4501580ezotQe","iamwait","1521372xQxQJB","13960KSwLTq","2owaBOO","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","1103025GjNZXZ","iamwait.firebaseapp.com","402313ZnBAhR","9zJJwWP","567690OyevHX","1029500yPuAUl","14lCYGRN"];return bi=function(){return t},bi()}const Gn=yi;(function(t,e){const n=yi,s=t();for(;;)try{if(-parseInt(n(373))/1*(-parseInt(n(368))/2)+-parseInt(n(371))/3+parseInt(n(361))/4+parseInt(n(375))/5+parseInt(n(366))/6+parseInt(n(362))/7*(-parseInt(n(367))/8)+parseInt(n(374))/9*(-parseInt(n(364))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(bi,205465);const fx={apiKey:Gn(369),authDomain:Gn(372),databaseURL:Gn(370),projectId:Gn(365),storageBucket:"iamwait.firebasestorage.app",messagingSenderId:"720775593565",appId:Gn(363),measurementId:"G-3RRDNZ9ME5"},dx=fu(fx),Hs=ax(dx);function vi(){const t=["9dBegTj","21lRRMFw","########### ########## Данные ","exists","ICuUK","stringify","log","empty","yRqDt","jryDv","Крестики нолики","IJNHm","%c "," на прослушке","jtGSQ","mazoP","fbStore2","605574hIIubh","Данные ","val","20OjDXtv","oQhaR","color: darkgreen","21389980kzwrxX","653724KDEmLP","then","7975170UYUMfR","IDLQz","Морской бой","1422870EDumfG"," -  данные записаны","27260ewBoAB","oIczX","BDEeU","kEOzr","GRvjb","error","lookField","Ошибка записи данных: ","5899304waLuPu"];return vi=function(){return t},vi()}const ut=Ci;(function(t,e){const n=Ci,s=t();for(;;)try{if(-parseInt(n(373))/1*(parseInt(n(362))/2)+parseInt(n(383))/3*(-parseInt(n(366))/4)+-parseInt(n(371))/5+-parseInt(n(359))/6+parseInt(n(368))/7+-parseInt(n(381))/8+parseInt(n(382))/9*(parseInt(n(365))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,738775);function Ci(t,e){const n=vi();return Ci=function(s,i){return s=s-351,n[s]},Ci(t,e)}const On=pp(ut(358),{state:()=>({gameId:"",gameNames:{g1:"Камень ножницы бумага",g2:ut(352),g3:ut(370)},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:-1,playNumber:0,gameLink:""}),actions:{async getField(t){const e=ut,n={oIczX:function(i,r){return i(r)},kEOzr:function(i,r){return i+r},yRqDt:function(i,r){return i(r)},BDEeU:function(i,r){return i+r},jryDv:" : данные не найдены",EAoFf:e(389)},s=Ws(Hs,t);return Zm(s).then(i=>{const r=e;if(i[r(385)]()){const o=i[r(361)]();return n[r(374)]($n,n[r(376)](">>> Данные по "+t+" = ",JSON[r(387)](o))),o}else return n[r(390)]($n,n[r(375)](t,n[r(351)])),n.EAoFf})},async setField(t,e){const n=ut,s={oQhaR:function(r,o){return r+o},mazoP:n(380),IDLQz:function(r,o,l){return r(o,l)}},i=s.IDLQz(Ws,Hs,t);return s[n(369)](Oh,i,e)[n(367)](()=>{const r=n;$n(s[r(363)](t,r(372)))}).catch(r=>{const o=n;console[o(378)](s[o(357)],r)})},async onValue(t){const e=ut,n={ICuUK:function(i,r){return i(r)},GRvjb:function(i,r,o){return i(r,o)}},s=n[e(377)](Ws,Hs,t);tx(s,i=>{const r=e;n[r(386)]($n,r(384)+t+r(355)),this[r(379)]=i.val()})},async removeField(t){const e=ut,n={jtGSQ:function(i,r){return i(r)},IJNHm:function(i,r,o){return i(r,o)},ltmMC:function(i,r){return i(r)}};console[e(388)](t);const s=n[e(353)](Ws,Hs,t);n.ltmMC(Jm,s)[e(367)](()=>{const i=e;n[i(356)]($n,i(360)+t+" удалены!")})}}}),$n=t=>console[ut(388)](ut(354)+t,ut(364)),Dr=Ii;function Ei(){const t=["bEUPR","127379BDefWO","log","dWgjf","xQzEP","2992891tpKOkt","iAmWaitingForYou","NBkWc","16ljbtxc"," Морской бой ","gameChanged"," Необходимо будет попросить другого участника найти этот miniapp по имени: "," Камень ножницы бумага ","button","4mgkAET","UUcUa"," и договориться о выборе игры ","wpEks","AaHJY","2693hMyiwh","arcdS","3180444aoDQbS","ListGames","KGYQm","AFtZC","PLOeV","HOaYL","93030BHsIzS","50CTuWbM","eFzEo","div","BDBjH","1049967fwimfK","FTCvf","231936OjJQVq","gameId","SWPjV","bvqYt","HaeNP","136DNnmfr","iLxyy"];return Ei=function(){return t},Ei()}function Ii(t,e){const n=Ei();return Ii=function(s,i){return s=s-159,n[s]},Ii(t,e)}(function(t,e){const n=Ii,s=t();for(;;)try{if(parseInt(n(170))/1*(-parseInt(n(165))/2)+parseInt(n(185))/3*(parseInt(n(159))/4)+parseInt(n(178))/5+-parseInt(n(172))/6+-parseInt(n(193))/7*(parseInt(n(190))/8)+parseInt(n(183))/9*(parseInt(n(179))/10)+parseInt(n(197))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ei,338441);const px=Tn({__name:Dr(173),emits:[Dr(161)],setup(t,{emit:e}){const n=Dr,s={arcdS:function(l,c){return l+c},KGYQm:function(l,c){return l(c)},iLxyy:n(161),HaeNP:function(l){return l()},AFtZC:function(l,c,a,u){return l(c,a,u)},AaHJY:n(181),SWPjV:" Начальная страница ",FTCvf:function(l,c,a,u,d){return l(c,a,u,d)},xQzEP:"Выберите игру",UUcUa:function(l,c,a,u,d){return l(c,a,u,d)},NBkWc:n(164),eFzEo:n(163),HOaYL:function(l,c,a,u,d){return l(c,a,u,d)},bEUPR:n(160),bvqYt:function(l,c){return l(c)},dWgjf:n(162),wpEks:function(l,c,a,u,d){return l(c,a,u,d)},BDBjH:n(198),fAkJr:function(l){return l()},PLOeV:function(l,c){return l(c)},dbqnS:n(167)},i=On(),r=e;function o(l){const c=n;console[c(194)](l),i[c(186)]=s[c(171)]("g",l),s[c(174)](r,s[c(191)])}return(l,c)=>{const a=n;return s[a(189)](se),s[a(175)](ue,s[a(169)],null,[c[3]||(c[3]=s[a(174)](ie,s[a(187)])),c[4]||(c[4]=s[a(184)](y,"h3",null,s[a(196)],-1)),c[5]||(c[5]=s.UUcUa(y,"br",null,null,-1)),s[a(175)](y,s[a(199)],{onClick:c[0]||(c[0]=u=>o(1))},s[a(180)]),c[6]||(c[6]=y("br",null,null,-1)),c[7]||(c[7]=s[a(189)](ie)),c[8]||(c[8]=s[a(166)](y,"br",null,null,-1)),y(s[a(199)],{onClick:c[1]||(c[1]=u=>o(2))}," Крестики нолики "),c[9]||(c[9]=s[a(177)](y,"br",null,null,-1)),c[10]||(c[10]=ie()),c[11]||(c[11]=y("br",null,null,-1)),s[a(175)](y,s.NBkWc,{onClick:c[2]||(c[2]=u=>o(3))},s[a(192)]),c[12]||(c[12]=s.UUcUa(y,"br",null,null,-1)),c[13]||(c[13]=y("br",null,null,-1)),c[14]||(c[14]=s[a(189)](ie)),c[15]||(c[15]=s.FTCvf(y,"br",null,null,-1)),c[16]||(c[16]=s[a(188)](ie,s[a(195)])),c[17]||(c[17]=s[a(177)](y,"br",null,null,-1)),c[18]||(c[18]=s[a(189)](ie)),c[19]||(c[19]=s[a(168)](y,"br",null,null,-1)),c[20]||(c[20]=y("b",null,s[a(182)],-1)),c[21]||(c[21]=s[a(168)](y,"br",null,null,-1)),c[22]||(c[22]=s.fAkJr(ie)),c[23]||(c[23]=y("br",null,null,-1)),c[24]||(c[24]=s[a(176)](ie,s.dbqnS))])}}}),$s=wi;function wi(t,e){const n=Si();return wi=function(s,i){return s=s-360,n[s]},wi(t,e)}(function(t,e){const n=wi,s=t();for(;;)try{if(-parseInt(n(360))/1+parseInt(n(369))/2*(parseInt(n(368))/3)+-parseInt(n(383))/4+-parseInt(n(384))/5*(-parseInt(n(382))/6)+-parseInt(n(381))/7*(-parseInt(n(362))/8)+parseInt(n(367))/9*(parseInt(n(373))/10)+-parseInt(n(371))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Si,991413);const _x={class:"menuBt"},gx={key:0,class:$s(378)};function Si(){const t=["panel","ChYUo","bNdqN","10892QTNJrp","246nSqjFn","6626344kLbUpk","188725joHrFE","578822CkLQlA","FunYZ","6088LpXgMf","toExit","ZdPjV","WxpAX","Инфо","11673FcCHEz","4498929lZCBGJ","2oOgXwm","div","21478490YjRGXO","MenuButton","7310MkiItS","TBIAn","value","RRGUe","hllIn"];return Si=function(){return t},Si()}const mx=Tn({__name:$s(372),emits:[$s(363)],setup(t,{emit:e}){const n=$s,s={bNdqN:function(l,c){return l(c)},TBIAn:n(363),Dkhxc:function(l){return l()},hllIn:function(l,c,a,u){return l(c,a,u)},RRGUe:n(370),PjVnu:"button",ChYUo:function(l){return l()},FunYZ:"Удалить игру",ZdPjV:function(l){return l()},WxpAX:function(l,c,a,u,d){return l(c,a,u,d)},VpjNu:function(l,c,a,u,d){return l(c,a,u,d)},SSaBg:function(l,c,a){return l(c,a)}},i=e,r=s.ZdPjV(We);function o(l){const c=n;switch(l){case(l=1):s[c(380)](i,s[c(374)]);break}r.value=!1}return(l,c)=>{const a=n;return s.Dkhxc(se),s[a(377)](ue,a(370),_x,[s[a(377)](y,s.RRGUe,null,[y(s.PjVnu,{class:"menuBt_bt",onClick:c[0]||(c[0]=u=>r[a(375)]=!r[a(375)])},"❁")]),r[a(375)]?(s[a(379)](se),s.hllIn(ue,s[a(376)],gx,[s[a(377)](y,"a",{onClick:c[1]||(c[1]=u=>o(1))},s[a(361)]),c[2]||(c[2]=s[a(364)](ie)),c[3]||(c[3]=s[a(365)](y,"br",null,null,-1)),c[4]||(c[4]=s.VpjNu(y,"a",null,a(366),-1))])):s.SSaBg(Oe,"",!0)])}}}),Ds=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},xx=Ds(mx,[["__scopeId","data-v-ff2e1591"]]),wt=Sn;function Ti(){const t=["Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","PSRMA","HfLja","empty","setField","EBHxf","Нет желающих, отменяю ожидание","onClick","prsOw","log","lookField","tpxGv","red-bt","uZjJq","yvEoa","XhLBM","rrjTq","Сменить nickName","sAUXH","myId","/games/","...загрузка","then","#ddd","zcHlU","nick","rdGJd","njCNA","value","length","WDicl","duhUG","* нельзя выбирать себя","XOqGA","EqWrM","red-notice","iVGMR","YLEnh","Хорошо бы сообщить сопернику, что вы ушли из игры","MPwbO","410690FdClZr","pwkhU","4|1|0|7|8|2|5|6|3","GktsW","SaLIx","/look/","5|1|2|0|3|4","VbqcA","iSDEV","DgkbE","ZnvrJ","2212585AkbgaX"," Зарегистрироваться в поиске ","/list/","AWMgD","removeField","2327900FGjwAg","uRaCm","reload","stItj","green-bt","dxwsg","GPafR","dUNQd","DjQDW","oKrxK","zhyqX","pNTAb","YldVF","cdipt","30px","forEach","521634rtxhhj"," stage:","vnFLO","/look","2SrklSX","nhgul","red","CJabn","name2","490697XuPTVo","eXTGj","bzbbx","oUzYf","kVBJE"," Привет ","iNpcm","XXlsZ","KuHhb","zmiFJ","gameId",">>>> ANALIZ ","IzRuA","vHSmK","4spmMix","HFnwX","fIGnW","ldCGq","gameLink","IqcRO","XLzft","accept","* можете поменять ваш Никнейм","Pksuh","gxApN","udCtz","UJROX","tIIba","oWSOG","getItem","WNGVB","slice","* nickname не может быть меньше 2 букв","3485772BNoSzi","wsgar","BSPPg","SiVAs","myName","SJeeC","iblpn","OLafS","ylGTY","BZxPN","4px","bZtGa"," $$$$$$ res","40LoVFWk","stage","EijYn","small","button","onValue","KXrWt","LqamE","Отказаться","AwOPU","xzEpK","id2","xYIQW","myNickName","3769170QfqsSg","BLYaF","жду пока не откликнится ","setItem","name"," Выбрал игрока ","tzBgp","push","keys"," Вас выбрал игрок: ","Играть","pWJuV","YlCdq","tLDff","wKnzr","NKGir","RELOAD","sJnXk","20px","BnFHs","KYWUp","btQnB","ufqBP","EvypN","KJRTK","input","PhHgw"," : ","SEXbC","NvmXx","split","CdCmF","div","UrfmQ","rkQdi","YlOTH"];return Ti=function(){return t},Ti()}(function(t,e){const n=Sn,s=t();for(;;)try{if(-parseInt(n(288))/1+parseInt(n(283))/2*(parseInt(n(279))/3)+-parseInt(n(302))/4*(parseInt(n(258))/5)+parseInt(n(171))/6+-parseInt(n(247))/7*(-parseInt(n(157))/8)+parseInt(n(144))/9+-parseInt(n(263))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ti,316727);function Sn(t,e){const n=Ti();return Sn=function(s,i){return s=s-130,n[s]},Sn(t,e)}const yx={key:0},bx={key:1},vx={key:2},Cx={key:3},Ex={key:4},Ix={class:wt(242)},wx={key:0},Sx=[wt(214)],Tx={key:5},Nx={key:0},Rx=[wt(214)],Ax={key:1,class:wt(242)},Px={key:6},Dx={key:7},Ox={key:8},kx={style:{"font-size":wt(277)}},Mx={style:{color:wt(285),"font-size":wt(189)}},Lx={key:9},Fx={style:{"font-size":"30px",background:wt(230)}},Bx={key:10},Wx=!1,Hx=Tn({__name:"__BinderComp",setup(t){const e=wt,n={EeDIh:e(170),SiVAs:function(f,h){return f===h},sAUXH:function(f,h){return f+h},UrfmQ:e(227),PYliM:e(249),uRaCm:e(156),EBHxf:function(f,h){return f===h},bzbbx:function(f,h){return f(h)},UJROX:function(f,h){return f!==h},WDicl:function(f){return f()},PhHgw:function(f,h){return f==h},YldVF:function(f,h){return f>h},RpVOX:e(299),rkQdi:function(f,h){return f===h},OLafS:function(f){return f()},eXTGj:e(282),XOqGA:function(f,h,p){return f(h,p)},dxwsg:e(143),EqWrM:function(f,h){return f+h},ufqBP:function(f,h){return f+h},wsgar:e(252),vnFLO:function(f,h){return f==h},NvmXx:function(f,h,p){return f(h,p)},HFnwX:function(f,h){return f+h},eCXcb:function(f,h){return f+h},CdCmF:function(f,h){return f+h},LbJZW:function(f,h){return f+h},YlCdq:function(f,h){return f+h},iqHby:e(245),AWMgD:function(f,h){return f+h},klsOm:function(f,h){return f+h},HfLja:e(260),cdipt:function(f,h){return f+h},pWJuV:function(f,h,p){return f(h,p)},XhLBM:function(f,h){return f+h},AwOPU:function(f,h){return f+h},kVBJE:function(f,h){return f+h},CJabn:function(f,h){return f+h},SaLIx:"ВСЕ НАСТРОЙКИ ИГРЫ",gxApN:function(f){return f()},LqamE:function(f,h,p,v,T,le){return f(h,p,v,T,le)},DjQDW:e(267),xzEpK:function(f){return f()},stItj:function(f,h,p,v,T){return f(h,p,v,T)},rdGJd:e(203),njCNA:"::::::: Связывание :::::::",tOpED:function(f,h,p){return f(h,p)},oKrxK:function(f,h){return f+h},EIMUr:function(f,h){return f+h},XXlsZ:function(f,h){return f(h)},zmiFJ:function(f,h){return f(h)},BLYaF:function(f,h){return f(h)},zwfTg:function(f,h){return f(h)},oWSOG:function(f,h,p){return f(h,p)},duhUG:function(f,h,p,v){return f(h,p,v)},rrjTq:function(f,h,p){return f(h,p)},hLsTu:function(f,h){return f===h},QVfZN:" ИГРАЙТЕ ВДВОЕМ ",EijYn:"img",Pksuh:function(f,h,p,v,T){return f(h,p,v,T)},iNpcm:function(f,h,p,v,T){return f(h,p,v,T)},nhgul:function(f,h,p,v,T){return f(h,p,v,T)},KJRTK:function(f,h,p,v){return f(h,p,v)},dfZOC:function(f,h){return f===h},MPwbO:function(f,h){return f(h)},KuHhb:function(f,h,p,v,T){return f(h,p,v,T)},BTbWA:e(293),sJnXk:function(f,h,p){return f(h,p)},iSDEV:e(196),BaVNk:function(f){return f()},fIGnW:"Список желающих играть:",zcHlU:function(f,h){return f(h)},bZtGa:function(f,h,p,v,T){return f(h,p,v,T)},wDnkN:e(161),BZxPN:e(219),uZjJq:e(259),IzRuA:function(f,h,p,v,T){return f(h,p,v,T)},xYIQW:function(f,h,p){return f(h,p)},tzBgp:function(f,h){return f(h)},nmmjV:"Нахожусь в списке, жду соперника",udCtz:function(f,h,p,v,T){return f(h,p,v,T)},pNTAb:e(239),tpxGv:function(f,h,p,v,T){return f(h,p,v,T)},zhyqX:function(f,h,p,v,T){return f(h,p,v,T)},tIIba:function(f,h){return f===h},GktsW:function(f,h,p,v){return f(h,p,v)},XLzft:function(f,h){return f(h)},dUNQd:e(176),IqcRO:function(f,h,p,v,T){return f(h,p,v,T)},iblpn:function(f,h,p,v,T){return f(h,p,v,T)},KYWUp:"Нет ответа, отменяю выбор",prsOw:function(f,h,p){return f(h,p)},tLDff:function(f,h){return f(h)},KXrWt:function(f){return f()},VbqcA:function(f,h,p,v){return f(h,p,v)},vHSmK:function(f,h){return f(h)},BnFHs:e(180),DgkbE:function(f,h,p,v,T){return f(h,p,v,T)},bbGBE:function(f,h,p,v,T){return f(h,p,v,T)},wKnzr:e(165),ylGTY:function(f,h,p,v){return f(h,p,v)},YlOTH:function(f,h){return f(h)},YLEnh:function(f){return f()},psbXc:function(f,h,p,v,T){return f(h,p,v,T)},yvEoa:"Играем",WNGVB:function(f,h){return f(h)},GPafR:" с игроком ",HlYbe:function(f,h,p,v,T){return f(h,p,v,T)},ldCGq:function(f,h,p,v,T){return f(h,p,v,T)},DqutS:function(f,h,p,v){return f(h,p,v)},UDcQg:function(f,h,p){return f(h,p)},SEXbC:function(f,h){return f(h)},SJeeC:function(f,h,p,v,T){return f(h,p,v,T)},PSRMA:function(f,h,p,v,T){return f(h,p,v,T)},ZnvrJ:function(f,h){return f(h)},oUzYf:function(f){return f()},VqNVe:function(f,h){return f(h)},pwkhU:function(f,h){return f(h)},KQWLW:e(133)},s=n[e(151)](On),i=n[e(257)](We,localStorage[e(140)](e(170))||e(232)),r=We([]),o=n[e(291)](We),l=n.YLEnh(We),c=n.VqNVe(We,""),a=n[e(248)](We,""),u=n[e(199)](We,n.KQWLW),d=function(){const f=e;i[f(235)]&&localStorage[f(174)](n.EeDIh,i.value)};function g(){const f=e,h={btQnB:f(253)};i.value||(i[f(235)]=s[f(148)]),console[f(216)](2323),s.getField(n[f(225)](f(260),s[f(226)]))[f(229)](p=>{const v=f;if(p){if(n.SiVAs(p,v(210)))return s[v(158)]=0,!1;o[v(235)]={id:p.id,name:p[v(175)]},s.getField(n.sAUXH(n[v(204)],p.gameLink))[v(229)](T=>{const le=v,B=h[le(192)][le(201)]("|");let ce=0;for(;;){switch(B[ce++]){case"0":s[le(158)]=5;continue;case"1":s.gameId=T[le(298)];continue;case"2":c[le(235)]=T;continue;case"3":s.gameLink=p[le(306)];continue;case"4":be();continue;case"5":console[le(216)]("context",T);continue}break}})}})}const x=function(f){const h=e;if(console[h(216)](n.RpVOX,f),r[h(235)]=[],n.rkQdi(s[h(158)],0))return!1;f&&(s[h(158)]=1);let p=!1;f&&Object[h(179)](f)[h(278)](v=>{const T=h,le=n.PYliM[T(201)]("|");let B=0;for(;;){switch(le[B++]){case"0":f[v][T(168)]&&f[v][T(168)]===s[T(226)]&&(o[T(235)]={id:v,name:f[v].name});continue;case"1":console.log(n[T(264)],f);continue;case"2":n[T(212)](v,n[T(290)](String,s[T(226)]))&&v&&(p=!0,n[T(137)](s[T(158)],3)&&(s.stage=2),f[v][T(168)]&&(s[T(158)]=4));continue;case"3":v&&f[v]&&r[T(235)][T(178)]({id:v,name:f[v].name});continue;case"4":if(f[v][T(132)])return s.stage=-1,n.WDicl(Je),!1;continue;case"5":n[T(197)](f[v][T(168)],s[T(226)])&&(p=!0,s.stage=3);continue;case"6":n.YldVF(s[T(158)],2)&&!p&&console.log(T(187));continue;case"7":v===String(s[T(226)])&&(o[T(235)]={id:f[v][T(168)],name:f[v][T(287)]});continue;case"8":if(n.YldVF(s[T(158)],3))return!1;continue}break}})};n.XOqGA(dt,()=>s[e(226)],f=>f&&setTimeout(g,500));function I(){const f=e;n[f(151)](O),s[f(158)]=1}function O(){const f=e;s[f(162)](n.sAUXH(s.gameId,n[f(289)]))[f(229)](h=>x(h)),n[f(240)](dt,()=>s[f(217)],h=>x(h))}function j(){const f=e;if(i[f(235)].length<2)return u[f(235)]=n[f(268)],!1;s.setField(n[f(241)](n[f(193)](s.gameId,n[f(145)]),s[f(226)]),{name:i[f(235)]})}function V(f){const h=e;if(n[h(281)](f.id,s[h(226)]))return l.value=!0,n[h(200)](setTimeout,()=>l[h(235)]=!1,2e3),!1;s[h(211)](s[h(298)]+n[h(145)]+f.id,{name:f.name,id2:s[h(226)],name2:i.value||s[h(148)]})[h(229)](p=>{const v=h;console.log("res",p),o.value={id:f.id,name:f.name},s[v(158)]=3})}function Y(f){const h=e;f&&o.value&&s.setField(n[h(303)](n[h(193)](s.gameId,"/look/"),o[h(235)].id),{name:o.value[h(175)],id2:s[h(226)],name2:i.value||s.myName,accept:!0})[h(229)](()=>s[h(158)]=-1),!f&&s[h(211)](n.eCXcb(n[h(202)](s[h(298)],h(252)),s[h(226)]),{name:i[h(235)]||s[h(148)]})[h(229)](()=>s.stage=2)}function Z(){const f=e;s[f(211)](n[f(241)](s.gameId+f(252),o[f(235)].id),{name:o[f(235)].name})[f(229)](()=>s[f(158)]=2)}function M(){const f=e;s.removeField(n.LbJZW(n[f(183)](s.gameId,f(252)),s[f(226)]))[f(229)](()=>s[f(158)]=0)}function X(){var p;const f=e;debugger;a[f(235)]=n.iqHby;let h=String(o[f(235)].id);o[f(235)].id>s[f(226)]?h+="::"+s[f(226)]:h=n[f(261)](s[f(226)],"::")+h,s[f(262)](n.klsOm(n.HfLja,s[f(226)])),s.removeField(n[f(276)](n[f(209)],(p=o[f(235)])==null?void 0:p.id)),s[f(262)](n[f(241)](f(227),h)),n[f(182)](setTimeout,()=>location[f(265)](),3e3)}function Je(){var v,T,le;const f=e;let h=Date.now(),p=n.bzbbx(String,o[f(235)].id);n[f(275)](o[f(235)].id,s[f(226)])?p+=n[f(202)]("::",s.myId):p=n.eCXcb(n[f(241)](s[f(226)],"::"),p),console[f(216)](f(306),p),s.setField(n[f(286)](n[f(209)],s[f(226)]),{id:(v=o.value)==null?void 0:v.id,name:(T=o[f(235)])==null?void 0:T[f(175)],gameLink:p,date:h}),s[f(211)](n.HfLja+((le=o.value)==null?void 0:le.id),{id:s[f(226)],name:i[f(235)]||s[f(148)],gameLink:p,date:h}),s[f(211)](n.ufqBP(n[f(204)],p),{game:n[f(251)],gameId:s[f(298)]}),n.NvmXx(setTimeout,()=>{var ce;const B=f;s[B(262)](n[B(222)](n[B(166)](s.gameId,n.wsgar),(ce=o.value)==null?void 0:ce.id)),s[B(262)](n[B(292)](s[B(298)],n[B(145)])+s.myId),location[B(265)]()},2e3)}function be(){const f=e;s.playNumber=+s[f(298)][f(142)](1)}return(f,h)=>{var T,le;const p=e,v={NKGir:function(B){return n[Sn(135)](B)},BSPPg:function(B,ce,pe,G,ne,gt){return n[Sn(164)](B,ce,pe,G,ne,gt)},EvypN:"button",Xemrz:n[p(271)],iVGMR:function(B,ce){return B(ce)},SxFDf:function(B){return n[p(167)](B)},XiUcZ:function(B,ce){return n.bzbbx(B,ce)}};return n.OLafS(se),n.stItj(ue,Ke,null,[Wx?(n.xzEpK(se),ue(n.rdGJd,yx,[h[9]||(h[9]=n[p(266)](y,"hr",null,null,-1)),h[10]||(h[10]=n[p(266)](y,"i",null,n[p(234)],-1)),h[11]||(h[11]=y("br",null,null,-1)),n.tOpED(ie,n[p(193)](n.eCXcb(n[p(272)](n.EIMUr(" ",n.XXlsZ(ke,n[p(297)](Se,s).myId)),p(198)),n[p(172)](ke,i.value))," "),1),h[12]||(h[12]=n[p(266)](y,"br",null,null,-1)),ie(n[p(286)](p(280)+ke(n.zwfTg(Se,s)[p(158)])," "),1),h[13]||(h[13]=y("hr",null,null,-1))])):n.oWSOG(Oe,"",!0),n[p(147)](n[p(295)](Se,s)[p(158)],5)?(se(),n[p(238)](ue,n[p(233)],bx,[n[p(223)](Xe,xx,{onToExit:h[0]||(h[0]=B=>X())})])):Oe("",!0),n.hLsTu(Se(s)[p(158)],-1)?(n.gxApN(se),n[p(238)](ue,n[p(233)],vx,h[14]||(h[14]=[n[p(266)](y,"br",null,null,-1),y("br",null,null,-1),y("br",null,null,-1),y("br",null,null,-1),ie(n.QVfZN),y(n[p(159)],{alt:p(228),src:_p},null,-1),n[p(266)](y,"br",null,null,-1),y("br",null,null,-1),n[p(134)](y,"br",null,null,-1),y("br",null,null,-1),n[p(294)](y,"br",null,null,-1),n[p(284)](y,"br",null,null,-1)]))):Oe("",!0),Se(s).stage===0?(se(),n[p(195)](ue,p(203),Cx,[Xe(px,{onGameChanged:I})])):n[p(240)](Oe,"",!0),n.dfZOC(n[p(246)](Se,s)[p(158)],1)?(se(),ue(n.rdGJd,Ex,[h[18]||(h[18]=n[p(296)](y,"p",null,n.BTbWA,-1)),n[p(195)](y,"p",null,[n[p(188)](Rf,n[p(134)](y,n[p(255)],{"onUpdate:modelValue":h[1]||(h[1]=B=>i[p(235)]=B),maxlength:"16",minlength:"3",style:{"font-size":"larger",padding:p(154),"text-align":"center"},onInput:h[2]||(h[2]=B=>d()),placeholder:p(224)},null,544),[[np,i[p(235)]]])]),y(n[p(233)],Ix,n[p(246)](ke,u[p(235)]),1),r[p(235)]&&n[p(275)](r[p(235)].length,1)?(n.BaVNk(se),n[p(238)](ue,p(203),wx,[h[15]||(h[15]=n.iNpcm(y,"h3",null,n[p(304)],-1)),(n[p(231)](se,!0),n[p(296)](ue,Ke,null,n[p(139)](xl,r[p(235)],B=>{const ce=p;return v[ce(186)](se),v[ce(146)](ue,v[ce(194)],{class:v.Xemrz,key:B.id,onClick:pe=>V(B)},v[ce(243)](ke,B[ce(175)]),9,Sx)}),128)),h[16]||(h[16]=n[p(155)](y,"br",null,null,-1)),h[17]||(h[17]=n.iNpcm(y,"br",null,null,-1))])):n[p(188)](Oe,"",!0),n[p(238)](y,n.wDnkN,{class:n[p(153)],onClick:h[3]||(h[3]=B=>j())},n[p(220)]),h[19]||(h[19]=n[p(296)](y,"br",null,null,-1)),h[20]||(h[20]=n[p(167)](ie)),h[21]||(h[21]=n[p(300)](y,"br",null,null,-1)),h[22]||(h[22]=y(p(160),null,p(207),-1)),h[23]||(h[23]=n[p(266)](y,"br",null,null,-1)),h[24]||(h[24]=n[p(134)](y,"br",null,null,-1))])):n[p(169)](Oe,"",!0),n[p(205)](n[p(177)](Se,s)[p(158)],2)?(n.OLafS(se),ue(n.rdGJd,Tx,[h[28]||(h[28]=y("p",null,n.nmmjV,-1)),r[p(235)][p(236)]?(n[p(167)](se),n[p(238)](ue,p(203),Nx,[h[25]||(h[25]=y("h3",null,n.fIGnW,-1)),(n.MPwbO(se,!0),n[p(136)](ue,Ke,null,n[p(169)](xl,r[p(235)],B=>{const ce=p;return v.SxFDf(se),v[ce(146)](ue,v.EvypN,{class:v.Xemrz,key:B.id,onClick:pe=>V(B)},v.XiUcZ(ke,B[ce(175)]),9,Rx)}),128)),h[26]||(h[26]=y("br",null,null,-1)),h[27]||(h[27]=y("br",null,null,-1))])):n[p(188)](Oe,"",!0),l[p(235)]?(n[p(167)](se),n[p(195)](ue,n[p(233)],Ax,n[p(274)])):n[p(139)](Oe,"",!0),h[29]||(h[29]=n[p(218)](y,"br",null,null,-1)),h[30]||(h[30]=n[p(134)](y,"br",null,null,-1)),y(p(161),{onClick:h[4]||(h[4]=B=>M())},p(213)),h[31]||(h[31]=n[p(155)](y,"br",null,null,-1)),h[32]||(h[32]=n[p(273)](y,"br",null,null,-1))])):Oe("",!0),n[p(138)](Se(s)[p(158)],3)?(n[p(167)](se),n[p(195)](ue,n[p(233)],Px,[n[p(250)](y,"p",null,[h[33]||(h[33]=n[p(131)](ie,n[p(270)])),h[34]||(h[34]=n[p(130)](y,"br",null,null,-1)),n[p(150)](y,"b",null,n[p(231)](ke,(T=o[p(235)])==null?void 0:T.name),1),h[35]||(h[35]=n[p(151)](ie)),h[36]||(h[36]=n[p(136)](y,"br",null,null,-1)),h[37]||(h[37]=ie(p(173)))]),n[p(238)](y,n.wDnkN,{onClick:h[5]||(h[5]=B=>Z())},n[p(191)])])):n[p(215)](Oe,"",!0),n.dfZOC(n[p(184)](Se,s)[p(158)],4)&&((le=o[p(235)])!=null&&le.id)?(n[p(163)](se),n.VbqcA(ue,n[p(233)],Dx,[h[38]||(h[38]=n[p(301)](ie,n[p(190)])),h[39]||(h[39]=n.KuHhb(y,"br",null,null,-1)),h[40]||(h[40]=y("br",null,null,-1)),n[p(294)](y,"b",null,n[p(301)](ke,o[p(235)][p(175)]),1),h[41]||(h[41]=n[p(256)](y,"br",null,null,-1)),h[42]||(h[42]=n.bbGBE(y,"br",null,null,-1)),n[p(238)](y,p(161),{class:n[p(153)],onClick:h[6]||(h[6]=B=>Y(!1))},n[p(185)]),n[p(152)](y,n.wDnkN,{class:p(219),onClick:h[7]||(h[7]=B=>Y(!0))},"Согласиться")])):n[p(182)](Oe,"",!0),n[p(206)](Se,s)[p(158)]===5&&o[p(235)]?(n[p(244)](se),n.ylGTY(ue,n[p(233)],Ox,[h[43]||(h[43]=n.psbXc(y,"h3",null,n[p(221)],-1)),h[44]||(h[44]=n[p(141)](ie,n[p(269)])),h[45]||(h[45]=n.KuHhb(y,"br",null,null,-1)),h[46]||(h[46]=n[p(266)](y,"br",null,null,-1)),n[p(254)](y,n[p(233)],kx,[n.HlYbe(y,"b",null,ke(o.value[p(175)]),1)]),h[47]||(h[47]=n.iblpn(y,"br",null,null,-1)),h[48]||(h[48]=y("br",null,null,-1)),y(n[p(233)],Mx,[n[p(305)](y,"b",null,ke(a[p(235)]),1)])])):n[p(139)](Oe,"",!0),n[p(141)](Se,s).stage&&[1,2,3,4,5].includes(n.zmiFJ(Se,s)[p(158)])?(n[p(237)](se),n.DqutS(ue,n.rdGJd,Lx,[h[49]||(h[49]=n.bZtGa(y,"hr",null,null,-1)),h[50]||(h[50]=n[p(136)](y,"br",null,null,-1)),n[p(130)](y,n[p(233)],Fx,ke(n[p(231)](Se,s).gameNames[Se(s)[p(298)]]),1),h[51]||(h[51]=n.KuHhb(y,"br",null,null,-1)),h[52]||(h[52]=n[p(256)](y,"br",null,null,-1))])):n.UDcQg(Oe,"",!0),n.EBHxf(n[p(199)](Se,s)[p(158)],5)?(n.WDicl(se),n.DqutS(ue,"div",Bx,[y(p(161),{onClick:h[8]||(h[8]=B=>be())},p(181))])):Oe("",!0),h[53]||(h[53]=n[p(149)](y,"br",null,null,-1)),h[54]||(h[54]=n[p(208)](y,"br",null,null,-1))],64)}}}),Ux={class:"game"},Vx={__name:"StartPage",setup(t){return(e,n)=>(se(),ue("div",Ux,[n[0]||(n[0]=y("h1",null,"♕",-1)),y("div",null,[Xe(Hx)])]))}},jx=Ds(Vx,[["__scopeId","data-v-161e630d"]]),uo=Ni;(function(t,e){const n=Ni,s=t();for(;;)try{if(parseInt(n(199))/1+parseInt(n(198))/2*(parseInt(n(163))/3)+parseInt(n(150))/4*(parseInt(n(195))/5)+-parseInt(n(189))/6+-parseInt(n(191))/7*(-parseInt(n(179))/8)+-parseInt(n(154))/9*(-parseInt(n(203))/10)+-parseInt(n(153))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ri,961287);const Gx={class:uo(182)},$x={style:{"font-size":"20px"}};function Ni(t,e){const n=Ri();return Ni=function(s,i){return s=s-138,n[s]},Ni(t,e)}const zx=Tn({__name:uo(172),setup(t){const e=uo,n={VdpHb:e(184),IWFOy:e(194),nPXJX:function(c,a){return c+a},FirOI:function(c,a){return c+a},swuMj:e(202),LDxru:e(196),stPkK:e(162),PCdqV:function(c,a){return c+a},fgejz:"/game",bSDBj:function(c){return c()},DgRPy:function(c,a,u,d){return c(a,u,d)},CHZVM:e(169),MoXfx:function(c,a,u,d,g){return c(a,u,d,g)},BQYgg:e(171),sMDPQ:e(147),XgvlG:function(c,a,u,d,g){return c(a,u,d,g)},VDBBB:function(c,a,u,d,g){return c(a,u,d,g)},uXzEJ:e(190),TCAmm:e(148),zhyqB:function(c,a,u,d,g){return c(a,u,d,g)},HYZkq:function(c,a,u,d,g){return c(a,u,d,g)},yluWX:function(c,a){return c(a)},XGXeW:function(c,a){return c===a},fYjsU:e(158),ADzwo:function(c,a){return c(a)},mxZQC:e(187),pzvIO:function(c,a,u,d,g){return c(a,u,d,g)},RYkLb:function(c,a,u,d,g){return c(a,u,d,g)},pKEXq:function(c,a,u,d,g){return c(a,u,d,g)},ZAwyf:e(176),aWqQe:e(197),xqMZV:function(c,a,u,d,g){return c(a,u,d,g)},ZLOQH:function(c,a){return c(a)},UTyXq:e(160),GsgXm:function(c,a,u,d,g){return c(a,u,d,g)},nHAND:function(c,a){return c(a)},sWLaO:function(c,a,u){return c(a,u)},sRYzm:function(c,a){return c(a)}},s=n.bSDBj(On),i=We(0),r=n[e(151)](We);n[e(186)](dt,()=>s.lookField,c=>o(c));function o(c){const a=e;console[a(140)](n[a(159)],c),r[a(174)]=c}function l(){const c=e,a={PqVWu:n[c(164)]};s[c(192)](n[c(166)](n[c(149)](n[c(177)],s[c(167)]),n.LDxru)+s[c(170)],{q:i[c(174)]})[c(139)](u=>{const d=c;console[d(140)](a[d(161)],u)})}return n[e(185)](Es,()=>{const c=e;console[c(140)](n[c(201)]),s[c(200)](n[c(141)](n[c(177)]+s[c(167)],n.fgejz))}),(c,a)=>{const u=e;return n[u(151)](se),n[u(168)](ue,n.CHZVM,Gx,[a[4]||(a[4]=n.MoXfx(y,"br",null,null,-1)),a[5]||(a[5]=n[u(146)](y,"h2",null,n[u(178)],-1)),a[6]||(a[6]=y("br",null,null,-1)),a[7]||(a[7]=n[u(146)](y,"br",null,null,-1)),a[8]||(a[8]=ie(n.sMDPQ)),a[9]||(a[9]=n.MoXfx(y,"br",null,null,-1)),a[10]||(a[10]=n[u(183)](y,"br",null,null,-1)),a[11]||(a[11]=y("br",null,null,-1)),n[u(156)](y,n[u(142)],{class:gn({active:i.value===1}),onClick:a[0]||(a[0]=d=>i[u(174)]=1)},n[u(188)],2),a[12]||(a[12]=n.MoXfx(y,"br",null,null,-1)),a[13]||(a[13]=n.zhyqB(y,"br",null,null,-1)),n[u(173)](y,n.uXzEJ,{class:n[u(155)](gn,{active:n.XGXeW(i[u(174)],2)}),onClick:a[1]||(a[1]=d=>i[u(174)]=2)},n[u(157)],2),a[14]||(a[14]=y("br",null,null,-1)),a[15]||(a[15]=y("br",null,null,-1)),n[u(146)](y,n[u(142)],{class:n[u(181)](gn,{active:n[u(145)](i[u(174)],3)}),onClick:a[2]||(a[2]=d=>i[u(174)]=3)},n[u(144)],2),a[16]||(a[16]=n[u(180)](y,"br",null,null,-1)),a[17]||(a[17]=n.pzvIO(y,"br",null,null,-1)),a[18]||(a[18]=n.XgvlG(y,"br",null,null,-1)),a[19]||(a[19]=n[u(193)](y,"br",null,null,-1)),a[20]||(a[20]=n.MoXfx(y,"br",null,null,-1)),a[21]||(a[21]=n[u(138)](y,"br",null,null,-1)),n[u(168)](y,"button",{class:n.ZAwyf,onClick:a[3]||(a[3]=d=>l())},n.aWqQe),a[22]||(a[22]=n[u(175)](y,"br",null,null,-1)),a[23]||(a[23]=n.ZLOQH(ie,n[u(152)])),n[u(165)](y,"b",$x,n.nHAND(ke,r.value),1),a[24]||(a[24]=n[u(181)](ie,u(143)))])}}});function Ri(){const t=["PCdqV","uXzEJ",">> ","mxZQC","XGXeW","MoXfx"," Выбери: ","Камень","FirOI","8xkBGtf","bSDBj","UTyXq","30190215gWGcen","244611VeEILr","yluWX","VDBBB","fYjsU","Ножницы","VdpHb"," << ","PqVWu","9999999999999","78lxuTDK","IWFOy","GsgXm","nPXJX","gameLink","DgRPy","div","myId","Камень ножницы бумага","1_StounScissorsPaper","HYZkq","value","xqMZV","green-bt","swuMj","BQYgg","37256GTUoKh","pzvIO","ADzwo","rama","XgvlG","res=","sRYzm","sWLaO","Бумага","TCAmm","367518ItEnwC","button","2037pDoFAO","setField","RYkLb","!!! res","3856485GSGEZk","/game/","Свериться","28990qYcplM","465275EjoHYT","onValue","stPkK","/games/","10jRKQqV","pKEXq","then","log"];return Ri=function(){return t},Ri()}const qx=Ds(zx,[["__scopeId","data-v-71335afa"]]),Ai=Di;(function(t,e){const n=Di,s=t();for(;;)try{if(parseInt(n(123))/1*(-parseInt(n(110))/2)+parseInt(n(132))/3+-parseInt(n(118))/4*(-parseInt(n(131))/5)+-parseInt(n(129))/6+-parseInt(n(122))/7*(-parseInt(n(117))/8)+-parseInt(n(115))/9+parseInt(n(125))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Pi,456857);function Pi(){const t=["/games/","log","lookField","70GQGPXA","1qUnIAR","usaVR","13123690OKGmXZ","kPjph","onValue","TdWhm","3084582JRVRal","value","30MGbCuq","1604985oPHeVx","rama","/game","wnqjL","GTltN","20px","крестики нолики ANALIZ=","2_KrestikiNoliki","dGQEu","Крестики нолики","1469524qPZThT","qUppT","gameLink","KgFih"," Under construction ","7170354LIrMtl",">> ","301240HbRChw","185672YJdetj"];return Pi=function(){return t},Pi()}const Kx={class:Ai(101)},Yx={style:{"font-size":Ai(105)}};function Di(t,e){const n=Pi();return Di=function(s,i){return s=s-101,n[s]},Di(t,e)}const Xx=Tn({__name:Ai(107),setup(t){const e=Ai,n={dGQEu:e(106),juwNU:"div",kPjph:function(o,l,c,a,u){return o(l,c,a,u)},qUppT:e(109),TdWhm:function(o,l,c,a,u){return o(l,c,a,u)},wnqjL:function(o,l){return o(l)},GTltN:e(114),KgFih:e(116),yineX:function(o){return o()},usaVR:function(o,l,c){return o(l,c)}},s=On(),i=n.yineX(We);n[e(124)](dt,()=>s[e(121)],o=>r(o));function r(o){const l=e;console[l(120)](n[l(108)],o),i[l(130)]=o}return n[e(103)](Es,()=>s[e(127)](e(119)+s[e(112)]+e(102))),(o,l)=>{const c=e;return se(),ue(n.juwNU,Kx,[l[0]||(l[0]=n[c(126)](y,"br",null,null,-1)),l[1]||(l[1]=y("h2",null,n[c(111)],-1)),l[2]||(l[2]=n[c(126)](y,"br",null,null,-1)),l[3]||(l[3]=n[c(128)](y,"br",null,null,-1)),l[4]||(l[4]=n[c(103)](ie,n[c(104)])),l[5]||(l[5]=y("br",null,null,-1)),l[6]||(l[6]=n[c(103)](ie," << ")),n[c(126)](y,"b",Yx,ke(i[c(130)]),1),l[7]||(l[7]=ie(n[c(113)]))])}}}),Qx=Ds(Xx,[["__scopeId","data-v-88731bf9"]]),ho=Oi;(function(t,e){const n=Oi,s=t();for(;;)try{if(parseInt(n(142))/1*(parseInt(n(129))/2)+-parseInt(n(146))/3*(parseInt(n(153))/4)+parseInt(n(135))/5+parseInt(n(137))/6*(parseInt(n(159))/7)+-parseInt(n(144))/8*(-parseInt(n(136))/9)+parseInt(n(145))/10*(parseInt(n(138))/11)+-parseInt(n(154))/12===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(ki,687580);function Oi(t,e){const n=ki();return Oi=function(s,i){return s=s-128,n[s]},Oi(t,e)}function ki(){const t=["6MkWqGt","3900985DRJzvx","WyXDC","vgrMs","AzdJi","1CzvmBh","YOizm","5679272lCyKbm","10RTSWiK","1338urHXjl","gameLink","NyMWD","/games/","pQemr","osJRy","3_SeaWar","5416fZmxqd","19695036XZgoUf","onValue","DpoOz"," >> ","tFJCA","4543700JnrbLk","value","20px","Морской бой","aqQol","1032040PwPfEj","div"," << ","alcxP"," Under construction ","Морской бой ANALIZ=","3515265NdORdn","9bEzlHv"];return ki=function(){return t},ki()}const Jx={class:"rama"},Zx={style:{"font-size":ho(161)}},ey=Tn({__name:ho(152),setup(t){const e=ho,n={aqQol:e(134),WyXDC:function(o,l,c,a){return o(l,c,a)},NyMWD:function(o,l,c,a,u){return o(l,c,a,u)},WBJPp:e(162),tFJCA:function(o,l,c,a,u){return o(l,c,a,u)},alcxP:function(o,l){return o(l)},AzdJi:e(133),pQemr:e(131),LnbAq:function(o,l,c,a,u){return o(l,c,a,u)},osJRy:function(o,l){return o(l)},vgrMs:e(157),YOizm:function(o){return o()},DpoOz:function(o){return o()},euRHR:function(o,l,c){return o(l,c)}},s=n[e(143)](On),i=n[e(156)](We);n.euRHR(dt,()=>s.lookField,o=>r(o));function r(o){const l=e;console.log(n[l(128)],o),i[l(160)]=o}return n.alcxP(Es,()=>s[e(155)](e(149)+s[e(147)]+"/game")),(o,l)=>{const c=e;return se(),n[c(139)](ue,c(130),Jx,[l[0]||(l[0]=n[c(148)](y,"br",null,null,-1)),l[1]||(l[1]=n[c(148)](y,"h2",null,n.WBJPp,-1)),l[2]||(l[2]=y("br",null,null,-1)),l[3]||(l[3]=n[c(158)](y,"br",null,null,-1)),l[4]||(l[4]=n[c(132)](ie,n[c(141)])),l[5]||(l[5]=n.NyMWD(y,"br",null,null,-1)),l[6]||(l[6]=n[c(132)](ie,n[c(150)])),n.LnbAq(y,"b",Zx,n[c(151)](ke,i[c(160)]),1),l[7]||(l[7]=n[c(151)](ie,n[c(140)]))])}}}),ty=Ds(ey,[["__scopeId","data-v-5ed39d34"]]),ny={__name:"App",setup(t){const e=On();let n=_f(jx);dt(()=>e.playNumber,i=>s(i));function s(i){switch(console.log(i),i){case 1:n.value=qx;break;case 2:n.value=Qx;break;case 3:n.value=ty;break}}return Es(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.myId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||0,e.myName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=953446309)},500))}),(i,r)=>(se(),ja(Gf(Se(n))))}},Fc=Li;(function(t,e){const n=Li,s=t();for(;;)try{if(-parseInt(n(284))/1*(-parseInt(n(296))/2)+-parseInt(n(294))/3*(parseInt(n(289))/4)+parseInt(n(286))/5+parseInt(n(295))/6+-parseInt(n(291))/7*(-parseInt(n(285))/8)+-parseInt(n(297))/9*(parseInt(n(288))/10)+-parseInt(n(292))/11*(parseInt(n(293))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Mi,332677);function Mi(){const t=["mount","14830gRuxBp","8GmbUGt","use","21yGHTeq","935QrJcsT","14448AeRhCb","418179QXvUnc","59544heaEtU","186VHzuqO","3267qEObob","4991XPpdeF","760792EutLUe","2463740zdBcgT"];return Mi=function(){return t},Mi()}function Li(t,e){const n=Mi();return Li=function(s,i){return s=s-284,n[s]},Li(t,e)}const sy=cp(),Bc=rp(ny);Bc[Fc(290)](sy),Bc[Fc(287)]("#app");
