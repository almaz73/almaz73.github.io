function Hs(t,e){const n=Ws();return Hs=function(s,i){return s=s-151,n[s]},Hs(t,e)}function Ws(){const t=["rbdCp","LINK","3SKrKBE","DSdBe","omit","AWUvl","crossOrigin","querySelectorAll","2322404TIEaae","addedNodes","modulepreload","integrity","supports","627600FAFTvn","2951046ywRgTe","sLcST","xaWYz","3109312iumwlO","rel","relList","use-credentials",'link[rel="modulepreload"]',"ePzKv","iVIvT","include","childList","uLLYC","DdwND","31472730bZvgIL","same-origin","referrerPolicy","4761676tfsuPF","type","1074HslVhp","credentials","href","11290eiTiLR"];return Ws=function(){return t},Ws()}(function(t,e){const n=Hs,s=t();for(;;)try{if(parseInt(n(171))/1+parseInt(n(166))/2+parseInt(n(160))/3*(parseInt(n(152))/4)+parseInt(n(157))/5*(parseInt(n(154))/6)+parseInt(n(172))/7+parseInt(n(175))/8+-parseInt(n(186))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ws,696675),function(){const e=Hs,n={VZuvY:e(183),DdwND:function(o,l){return o===l},iVIvT:function(o,l){return o(l)},AWUvl:e(178),DSdBe:e(182),xaWYz:"anonymous",rbdCp:e(162),sLcST:e(187),QCaFD:function(o,l,c){return o(l,c)},uLLYC:e(168),ePzKv:e(179)},s=document.createElement("link")[e(177)];if(s&&s[e(170)]&&s[e(170)](n[e(184)]))return;for(const o of document[e(165)](n[e(180)]))n[e(181)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(c[l(153)]===n.VZuvY)for(const a of c[l(167)])n.DdwND(a.tagName,l(159))&&n.DdwND(a[l(176)],l(168))&&n[l(181)](r,a)}).observe(document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(169)]&&(c.integrity=o[l(169)]),o[l(151)]&&(c.referrerPolicy=o.referrerPolicy),n[l(185)](o.crossOrigin,n[l(163)])?c[l(155)]=n[l(161)]:n[l(185)](o[l(164)],n[l(174)])?c.credentials=n[l(158)]:c[l(155)]=n[l(173)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n.iVIvT(i,o);n.QCaFD(fetch,o[l(156)],c)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ee={},fn=[],rt=()=>{},yh=()=>!1,xi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vh=Object.prototype.hasOwnProperty,X=(t,e)=>vh.call(t,e),H=Array.isArray,dn=t=>yi(t)==="[object Map]",bc=t=>yi(t)==="[object Set]",U=t=>typeof t=="function",de=t=>typeof t=="string",Ft=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Cc=t=>(ae(t)||U(t))&&U(t.then)&&U(t.catch),Ec=Object.prototype.toString,yi=t=>Ec.call(t),bh=t=>yi(t).slice(8,-1),wc=t=>yi(t)==="[object Object]",zr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ch=/-(\w)/g,Ke=vi(t=>t.replace(Ch,(e,n)=>n?n.toUpperCase():"")),Eh=/\B([A-Z])/g,nn=vi(t=>t.replace(Eh,"-$1").toLowerCase()),bi=vi(t=>t.charAt(0).toUpperCase()+t.slice(1)),$i=vi(t=>t?`on${bi(t)}`:""),Tt=(t,e)=>!Object.is(t,e),Ms=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ic=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},pr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yo;const Ci=()=>Yo||(Yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?Th(s):Yr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(de(t)||ae(t))return t}const wh=/;(?![^(]*\))/g,Ih=/:([^]+)/,Sh=/\/\*[^]*?\*\//g;function Th(t){const e={};return t.replace(Sh,"").split(wh).forEach(n=>{if(n){const s=n.split(Ih);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qr(t){let e="";if(de(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Qr(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=Kr(Nh);function Sc(t){return!!t||t===""}const Tc=t=>!!(t&&t.__v_isRef===!0),Ge=t=>de(t)?t:t==null?"":H(t)||ae(t)&&(t.toString===Ec||!U(t.toString))?Tc(t)?Ge(t.value):JSON.stringify(t,Nc,2):String(t),Nc=(t,e)=>Tc(e)?Nc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ki(s,r)+" =>"]=i,n),{})}:bc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ki(n))}:Ft(e)?Ki(e):ae(e)&&!H(e)&&!wc(e)?String(e):e,Ki=(t,e="")=>{var n;return Ft(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class Rc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ac(t){return new Rc(t)}function Pc(){return Te}function Ah(t,e=!1){Te&&Te.cleanups.push(t)}let re;const Gi=new WeakSet;class Dc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gi.has(this)&&(Gi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qo(this),Mc(this);const e=re,n=Qe;re=this,Qe=!0;try{return this.fn()}finally{Fc(this),re=e,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zr(e);this.deps=this.depsTail=void 0,Qo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_r(this)&&this.run()}get dirty(){return _r(this)}}let Oc=0,Vn,jn;function kc(t,e=!1){if(t.flags|=8,e){t.next=jn,jn=t;return}t.next=Vn,Vn=t}function Xr(){Oc++}function Jr(){if(--Oc>0)return;if(jn){let e=jn;for(jn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vn;){let e=Vn;for(Vn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Mc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Zr(s),Ph(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function _r(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===es))return;t.globalVersion=es;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_r(t)){t.flags&=-3;return}const n=re,s=Qe;re=t,Qe=!0;try{Mc(t);const i=t.fn(t._value);(e.version===0||Tt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{re=n,Qe=s,Fc(t),t.flags&=-3}}function Zr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Zr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ph(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qe=!0;const Bc=[];function Lt(){Bc.push(Qe),Qe=!1}function Bt(){const t=Bc.pop();Qe=t===void 0?!0:t}function Qo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let es=0;class Dh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!Qe||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Dh(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,Hc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=s)}return n}trigger(e){this.version++,es++,this.notify(e)}notify(e){Xr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jr()}}}function Hc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Hc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Us=new WeakMap,Yt=Symbol(""),gr=Symbol(""),ts=Symbol("");function Ce(t,e,n){if(Qe&&re){let s=Us.get(t);s||Us.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new eo),i.map=s,i.key=n),i.track()}}function ft(t,e,n,s,i,r){const o=Us.get(t);if(!o){es++;return}const l=c=>{c&&c.trigger()};if(Xr(),e==="clear")o.forEach(l);else{const c=H(t),a=c&&zr(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,g)=>{(g==="length"||g===ts||!Ft(g)&&g>=u)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ts)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Yt)),dn(t)&&l(o.get(gr)));break;case"delete":c||(l(o.get(Yt)),dn(t)&&l(o.get(gr)));break;case"set":dn(t)&&l(o.get(Yt));break}}Jr()}function Oh(t,e){const n=Us.get(t);return n&&n.get(e)}function on(t){const e=Y(t);return e===t?e:(Ce(e,"iterate",ts),$e(t)?e:e.map(Ee))}function Ei(t){return Ce(t=Y(t),"iterate",ts),t}const kh={__proto__:null,[Symbol.iterator](){return qi(this,Symbol.iterator,Ee)},concat(...t){return on(this).concat(...t.map(e=>H(e)?on(e):e))},entries(){return qi(this,"entries",t=>(t[1]=Ee(t[1]),t))},every(t,e){return at(this,"every",t,e,void 0,arguments)},filter(t,e){return at(this,"filter",t,e,n=>n.map(Ee),arguments)},find(t,e){return at(this,"find",t,e,Ee,arguments)},findIndex(t,e){return at(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return at(this,"findLast",t,e,Ee,arguments)},findLastIndex(t,e){return at(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return at(this,"forEach",t,e,void 0,arguments)},includes(...t){return zi(this,"includes",t)},indexOf(...t){return zi(this,"indexOf",t)},join(t){return on(this).join(t)},lastIndexOf(...t){return zi(this,"lastIndexOf",t)},map(t,e){return at(this,"map",t,e,void 0,arguments)},pop(){return On(this,"pop")},push(...t){return On(this,"push",t)},reduce(t,...e){return Xo(this,"reduce",t,e)},reduceRight(t,...e){return Xo(this,"reduceRight",t,e)},shift(){return On(this,"shift")},some(t,e){return at(this,"some",t,e,void 0,arguments)},splice(...t){return On(this,"splice",t)},toReversed(){return on(this).toReversed()},toSorted(t){return on(this).toSorted(t)},toSpliced(...t){return on(this).toSpliced(...t)},unshift(...t){return On(this,"unshift",t)},values(){return qi(this,"values",Ee)}};function qi(t,e,n){const s=Ei(t),i=s[e]();return s!==t&&!$e(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Mh=Array.prototype;function at(t,e,n,s,i,r){const o=Ei(t),l=o!==t&&!$e(t),c=o[e];if(c!==Mh[e]){const d=c.apply(t,r);return l?Ee(d):d}let a=n;o!==t&&(l?a=function(d,g){return n.call(this,Ee(d),g,t)}:n.length>2&&(a=function(d,g){return n.call(this,d,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function Xo(t,e,n,s){const i=Ei(t);let r=n;return i!==t&&($e(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ee(l),c,t)}),i[e](r,...s)}function zi(t,e,n){const s=Y(t);Ce(s,"iterate",ts);const i=s[e](...n);return(i===-1||i===!1)&&so(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function On(t,e,n=[]){Lt(),Xr();const s=Y(t)[e].apply(t,n);return Jr(),Bt(),s}const Fh=Kr("__proto__,__v_isRef,__isVue"),Wc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ft));function Lh(t){Ft(t)||(t=String(t));const e=Y(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Uc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?qh:Kc:r?$c:jc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let c;if(o&&(c=kh[n]))return c;if(n==="hasOwnProperty")return Lh}const l=Reflect.get(e,n,fe(e)?e:s);return(Ft(n)?Wc.has(n):Fh(n))||(i||Ce(e,"get",n),r)?l:fe(l)?o&&zr(n)?l:l.value:ae(l)?i?Gc(l):wi(l):l}}class Vc extends Uc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Xt(r);if(!$e(s)&&!Xt(s)&&(r=Y(r),s=Y(s)),!H(e)&&fe(r)&&!fe(s))return c?!1:(r.value=s,!0)}const o=H(e)&&zr(n)?Number(n)<e.length:X(e,n),l=Reflect.set(e,n,s,fe(e)?e:i);return e===Y(i)&&(o?Tt(s,r)&&ft(e,"set",n,s):ft(e,"add",n,s)),l}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ft(n)||!Wc.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",H(e)?"length":Yt),Reflect.ownKeys(e)}}class Bh extends Uc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hh=new Vc,Wh=new Bh,Uh=new Vc(!0);const mr=t=>t,Ns=t=>Reflect.getPrototypeOf(t);function Vh(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?mr:e?xr:Ee;return!e&&Ce(r,"iterate",c?gr:Yt),{next(){const{value:d,done:g}=a.next();return g?{value:d,done:g}:{value:l?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function Rs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jh(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(Tt(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:c}=Ns(o),a=e?mr:t?xr:Ee;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(Y(i),"iterate",Yt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(Tt(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Y(l),a=e?mr:t?xr:Ee;return!t&&Ce(c,"iterate",Yt),l.forEach((u,d)=>i.call(r,a(u),a(d),o))}};return Ie(n,t?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(i){!e&&!$e(i)&&!Xt(i)&&(i=Y(i));const r=Y(this);return Ns(r).has.call(r,i)||(r.add(i),ft(r,"add",i,i)),this},set(i,r){!e&&!$e(r)&&!Xt(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=Ns(o);let a=l.call(o,i);a||(i=Y(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?Tt(r,u)&&ft(o,"set",i,r):ft(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Ns(r);let c=o.call(r,i);c||(i=Y(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&ft(r,"delete",i,void 0),a},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&ft(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Vh(i,t,e)}),n}function to(t,e){const n=jh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const $h={get:to(!1,!1)},Kh={get:to(!1,!0)},Gh={get:to(!0,!1)};const jc=new WeakMap,$c=new WeakMap,Kc=new WeakMap,qh=new WeakMap;function zh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yh(t){return t.__v_skip||!Object.isExtensible(t)?0:zh(bh(t))}function wi(t){return Xt(t)?t:no(t,!1,Hh,$h,jc)}function Qh(t){return no(t,!1,Uh,Kh,$c)}function Gc(t){return no(t,!0,Wh,Gh,Kc)}function no(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Yh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Nt(t){return Xt(t)?Nt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function $e(t){return!!(t&&t.__v_isShallow)}function so(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function io(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Ic(t,"__v_skip",!0),t}const Ee=t=>ae(t)?wi(t):t,xr=t=>ae(t)?Gc(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function Gt(t){return qc(t,!1)}function Xh(t){return qc(t,!0)}function qc(t,e){return fe(t)?t:new Jh(t,e)}class Jh{constructor(e,n){this.dep=new eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:Ee(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||$e(e)||Xt(e);e=s?e:Y(e),Tt(e,n)&&(this._rawValue=e,this._value=s?e:Ee(e),this.dep.trigger())}}function Ve(t){return fe(t)?t.value:t}const Zh={get:(t,e,n)=>e==="__v_raw"?t:Ve(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function zc(t){return Nt(t)?t:new Proxy(t,Zh)}function ef(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=nf(t,n);return e}class tf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Oh(Y(this._object),this._key)}}function nf(t,e,n){const s=t[e];return fe(s)?s:new tf(t,e,n)}class sf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return kc(this,!0),!0}get value(){const e=this.dep.track();return Lc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rf(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new sf(s,i,n)}const As={},Vs=new WeakMap;let jt;function of(t,e=!1,n=jt){if(n){let s=Vs.get(n);s||Vs.set(n,s=[]),s.push(t)}}function lf(t,e,n=ee){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=h=>i?h:$e(h)||i===!1||i===0?dt(h,1):dt(h);let u,d,g,x,E=!1,D=!1;if(fe(t)?(d=()=>t.value,E=$e(t)):Nt(t)?(d=()=>a(t),E=!0):H(t)?(D=!0,E=t.some(h=>Nt(h)||$e(h)),d=()=>t.map(h=>{if(fe(h))return h.value;if(Nt(h))return a(h);if(U(h))return c?c(h,2):h()})):U(t)?e?d=c?()=>c(t,2):t:d=()=>{if(g){Lt();try{g()}finally{Bt()}}const h=jt;jt=u;try{return c?c(t,3,[x]):t(x)}finally{jt=h}}:d=rt,e&&i){const h=d,v=i===!0?1/0:i;d=()=>dt(h(),v)}const V=Pc(),j=()=>{u.stop(),V&&V.active&&qr(V.effects,u)};if(r&&e){const h=e;e=(...v)=>{h(...v),j()}}let p=D?new Array(t.length).fill(As):As;const f=h=>{if(!(!(u.flags&1)||!u.dirty&&!h))if(e){const v=u.run();if(i||E||(D?v.some((R,ne)=>Tt(R,p[ne])):Tt(v,p))){g&&g();const R=jt;jt=u;try{const ne=[v,p===As?void 0:D&&p[0]===As?[]:p,x];c?c(e,3,ne):e(...ne),p=v}finally{jt=R}}}else u.run()};return l&&l(f),u=new Dc(d),u.scheduler=o?()=>o(f,!1):f,x=h=>of(h,!1,u),g=u.onStop=()=>{const h=Vs.get(u);if(h){if(c)c(h,4);else for(const v of h)v();Vs.delete(u)}},e?s?f(!0):p=u.run():o?o(f.bind(null,!0),!0):u.run(),j.pause=u.pause.bind(u),j.resume=u.resume.bind(u),j.stop=j,j}function dt(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))dt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)dt(t[s],e,n);else if(bc(t)||dn(t))t.forEach(s=>{dt(s,e,n)});else if(wc(t)){for(const s in t)dt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&dt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(t,e,n,s){try{return s?t(...s):t()}catch(i){Ii(i,e,n)}}function lt(t,e,n,s){if(U(t)){const i=gs(t,e,n,s);return i&&Cc(i)&&i.catch(r=>{Ii(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(lt(t[r],e,n,s));return i}}function Ii(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ee;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,a)===!1)return}l=l.parent}if(r){Lt(),gs(r,null,10,[t,c,a]),Bt();return}}cf(t,n,i,s,o)}function cf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ne=[];let st=-1;const pn=[];let wt=null,an=0;const Yc=Promise.resolve();let js=null;function Qc(t){const e=js||Yc;return t?e.then(this?t.bind(this):t):e}function af(t){let e=st+1,n=Ne.length;for(;e<n;){const s=e+n>>>1,i=Ne[s],r=ns(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ro(t){if(!(t.flags&1)){const e=ns(t),n=Ne[Ne.length-1];!n||!(t.flags&2)&&e>=ns(n)?Ne.push(t):Ne.splice(af(e),0,t),t.flags|=1,Xc()}}function Xc(){js||(js=Yc.then(Zc))}function uf(t){H(t)?pn.push(...t):wt&&t.id===-1?wt.splice(an+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),Xc()}function Jo(t,e,n=st+1){for(;n<Ne.length;n++){const s=Ne[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ne.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Jc(t){if(pn.length){const e=[...new Set(pn)].sort((n,s)=>ns(n)-ns(s));if(pn.length=0,wt){wt.push(...e);return}for(wt=e,an=0;an<wt.length;an++){const n=wt[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,an=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zc(t){try{for(st=0;st<Ne.length;st++){const e=Ne[st];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;st<Ne.length;st++){const e=Ne[st];e&&(e.flags&=-2)}st=-1,Ne.length=0,Jc(),js=null,(Ne.length||pn.length)&&Zc()}}let Oe=null,ea=null;function $s(t){const e=Oe;return Oe=t,ea=t&&t.type.__scopeId||null,e}function hf(t,e=Oe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&al(-1);const r=$s(e);let o;try{o=t(...i)}finally{$s(r),s._d&&al(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ff(t,e){if(Oe===null)return t;const n=Ri(Oe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ee]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&dt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ut(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Lt(),lt(c,n,8,[t.el,l,t,e]),Bt())}}const df=Symbol("_vte"),pf=t=>t.__isTeleport;function oo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _f(t,e){return U(t)?Ie({name:t.name},e,{setup:t}):t}function ta(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ks(t,e,n,s,i=!1){if(H(t)){t.forEach((E,D)=>Ks(E,e&&(H(e)?e[D]:e),n,s,i));return}if($n(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ks(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ri(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ee?l.refs={}:l.refs,d=l.setupState,g=Y(d),x=d===ee?()=>!1:E=>X(g,E);if(a!=null&&a!==c&&(de(a)?(u[a]=null,x(a)&&(d[a]=null)):fe(a)&&(a.value=null)),U(c))gs(c,l,12,[o,u]);else{const E=de(c),D=fe(c);if(E||D){const V=()=>{if(t.f){const j=E?x(c)?d[c]:u[c]:c.value;i?H(j)&&qr(j,r):H(j)?j.includes(r)||j.push(r):E?(u[c]=[r],x(c)&&(d[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else E?(u[c]=o,x(c)&&(d[c]=o)):D&&(c.value=o,t.k&&(u[t.k]=o))};o?(V.id=-1,He(V,n)):V()}}}Ci().requestIdleCallback;Ci().cancelIdleCallback;const $n=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function gf(t,e){sa(t,"a",e)}function mf(t,e){sa(t,"da",e)}function sa(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Si(e,s,n),n){let i=n.parent;for(;i&&i.parent;)na(i.parent.vnode)&&xf(s,e,n,i),i=i.parent}}function xf(t,e,n,s){const i=Si(e,t,s,!0);ia(()=>{qr(s[e],i)},n)}function Si(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Lt();const l=ms(n),c=lt(e,n,t,o);return l(),Bt(),c});return s?i.unshift(r):i.push(r),r}}const xt=t=>(e,n=ye)=>{(!is||t==="sp")&&Si(t,(...s)=>e(...s),n)},yf=xt("bm"),lo=xt("m"),vf=xt("bu"),bf=xt("u"),Cf=xt("bum"),ia=xt("um"),Ef=xt("sp"),wf=xt("rtg"),If=xt("rtc");function Sf(t,e=ye){Si("ec",t,e)}const Tf="components",ra=Symbol.for("v-ndc");function Nf(t){return de(t)?Rf(Tf,t,!1)||t:t||ra}function Rf(t,e,n=!0,s=!1){const i=Oe||ye;if(i){const r=i.type;{const l=md(r,!1);if(l&&(l===e||l===Ke(e)||l===bi(Ke(e))))return r}const o=Zo(i[t]||r[t],e)||Zo(i.appContext[t],e);return!o&&s?r:o}}function Zo(t,e){return t&&(t[e]||t[Ke(e)]||t[bi(Ke(e))])}function el(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||de(t)){const l=o&&Nt(t);let c=!1;l&&(c=!$e(t),t=Ei(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Ee(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const yr=t=>t?Na(t)?Ri(t):yr(t.parent):null,Kn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yr(t.parent),$root:t=>yr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>la(t),$forceUpdate:t=>t.f||(t.f=()=>{ro(t.update)}),$nextTick:t=>t.n||(t.n=Qc.bind(t.proxy)),$watch:t=>Jf.bind(t)}),Yi=(t,e)=>t!==ee&&!t.__isScriptSetup&&X(t,e),Af={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Yi(s,e))return o[e]=1,s[e];if(i!==ee&&X(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&X(a,e))return o[e]=3,r[e];if(n!==ee&&X(n,e))return o[e]=4,n[e];vr&&(o[e]=0)}}const u=Kn[e];let d,g;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==ee&&X(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,X(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Yi(i,e)?(i[e]=n,!0):s!==ee&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ee&&X(t,o)||Yi(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X(Kn,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vr=!0;function Pf(t){const e=la(t),n=t.proxy,s=t.ctx;vr=!1,e.beforeCreate&&nl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:d,mounted:g,beforeUpdate:x,updated:E,activated:D,deactivated:V,beforeDestroy:j,beforeUnmount:p,destroyed:f,unmounted:h,render:v,renderTracked:R,renderTriggered:ne,errorCaptured:O,serverPrefetch:M,expose:Z,inheritAttrs:ve,components:Ae,directives:Ue,filters:rn}=e;if(a&&Df(a,s,null),o)for(const q in o){const se=o[q];U(se)&&(s[q]=se.bind(n))}if(i){const q=i.call(n,n);ae(q)&&(t.data=wi(q))}if(vr=!0,r)for(const q in r){const se=r[q],Ht=U(se)?se.bind(n,n):U(se.get)?se.get.bind(n,n):rt,Ss=!U(se)&&U(se.set)?se.set.bind(n):rt,Wt=Aa({get:Ht,set:Ss});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Je=>Wt.value=Je})}if(l)for(const q in l)oa(l[q],s,n,q);if(c){const q=U(c)?c.call(n):c;Reflect.ownKeys(q).forEach(se=>{Bf(se,q[se])})}u&&nl(u,t,"c");function he(q,se){H(se)?se.forEach(Ht=>q(Ht.bind(n))):se&&q(se.bind(n))}if(he(yf,d),he(lo,g),he(vf,x),he(bf,E),he(gf,D),he(mf,V),he(Sf,O),he(If,R),he(wf,ne),he(Cf,p),he(ia,h),he(Ef,M),H(Z))if(Z.length){const q=t.exposed||(t.exposed={});Z.forEach(se=>{Object.defineProperty(q,se,{get:()=>n[se],set:Ht=>n[se]=Ht})})}else t.exposed||(t.exposed={});v&&t.render===rt&&(t.render=v),ve!=null&&(t.inheritAttrs=ve),Ae&&(t.components=Ae),Ue&&(t.directives=Ue),M&&ta(t)}function Df(t,e,n=rt){H(t)&&(t=br(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=Gn(i.from||s,i.default,!0):r=Gn(i.from||s):r=Gn(i),fe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function nl(t,e,n){lt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function oa(t,e,n,s){let i=s.includes(".")?ba(n,s):()=>n[s];if(de(t)){const r=e[t];U(r)&&_n(i,r)}else if(U(t))_n(i,t.bind(n));else if(ae(t))if(H(t))t.forEach(r=>oa(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&_n(i,r,t)}}function la(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Gs(c,a,o,!0)),Gs(c,e,o)),ae(e)&&r.set(e,c),c}function Gs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Gs(t,r,n,!0),i&&i.forEach(o=>Gs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Of[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Of={data:sl,props:il,emits:il,methods:Wn,computed:Wn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Wn,directives:Wn,watch:Mf,provide:sl,inject:kf};function sl(t,e){return e?t?function(){return Ie(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function kf(t,e){return Wn(br(t),br(e))}function br(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?Ie(Object.create(null),t,e):e}function il(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ie(Object.create(null),tl(t),tl(e??{})):e}function Mf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Se(t[s],e[s]);return n}function ca(){return{app:null,config:{isNativeTag:yh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ff=0;function Lf(t,e){return function(s,i=null){U(s)||(s=Ie({},s)),i!=null&&!ae(i)&&(i=null);const r=ca(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Ff++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:yd,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(a,...d)):U(u)&&(o.add(u),u(a,...d))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,d){return d?(r.components[u]=d,a):r.components[u]},directive(u,d){return d?(r.directives[u]=d,a):r.directives[u]},mount(u,d,g){if(!c){const x=a._ceVNode||ot(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,u,g),c=!0,a._container=u,u.__vue_app__=a,Ri(x.component)}},onUnmount(u){l.push(u)},unmount(){c&&(lt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,d){return r.provides[u]=d,a},runWithContext(u){const d=Qt;Qt=a;try{return u()}finally{Qt=d}}};return a}}let Qt=null;function Bf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Gn(t,e,n=!1){const s=ye||Oe;if(s||Qt){const i=Qt?Qt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function Hf(){return!!(ye||Oe||Qt)}const aa={},ua=()=>Object.create(aa),ha=t=>Object.getPrototypeOf(t)===aa;function Wf(t,e,n,s=!1){const i={},r=ua();t.propsDefaults=Object.create(null),fa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Qh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Uf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(Ti(t.emitsOptions,g))continue;const x=e[g];if(c)if(X(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const E=Ke(g);i[E]=Cr(c,l,E,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{fa(t,e,i,r)&&(a=!0);let u;for(const d in l)(!e||!X(e,d)&&((u=nn(d))===d||!X(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Cr(c,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!X(e,d))&&(delete r[d],a=!0)}a&&ft(t.attrs,"set","")}function fa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Un(c))continue;const a=e[c];let u;i&&X(i,u=Ke(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ti(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||ee;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Cr(i,c,d,a[d],t,!X(a,d))}}return o}function Cr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=ms(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}const Vf=new WeakMap;function da(t,e,n=!1){const s=n?Vf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!U(t)){const u=d=>{c=!0;const[g,x]=da(d,e,!0);Ie(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ae(t)&&s.set(t,fn),fn;if(H(r))for(let u=0;u<r.length;u++){const d=Ke(r[u]);rl(d)&&(o[d]=ee)}else if(r)for(const u in r){const d=Ke(u);if(rl(d)){const g=r[u],x=o[d]=H(g)||U(g)?{type:g}:Ie({},g),E=x.type;let D=!1,V=!0;if(H(E))for(let j=0;j<E.length;++j){const p=E[j],f=U(p)&&p.name;if(f==="Boolean"){D=!0;break}else f==="String"&&(V=!1)}else D=U(E)&&E.name==="Boolean";x[0]=D,x[1]=V,(D||X(x,"default"))&&l.push(d)}}const a=[o,l];return ae(t)&&s.set(t,a),a}function rl(t){return t[0]!=="$"&&!Un(t)}const pa=t=>t[0]==="_"||t==="$stable",co=t=>H(t)?t.map(it):[it(t)],jf=(t,e,n)=>{if(e._n)return e;const s=hf((...i)=>co(e(...i)),n);return s._c=!1,s},_a=(t,e,n)=>{const s=t._ctx;for(const i in t){if(pa(i))continue;const r=t[i];if(U(r))e[i]=jf(i,r,s);else if(r!=null){const o=co(r);e[i]=()=>o}}},ga=(t,e)=>{const n=co(e);t.slots.default=()=>n},ma=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},$f=(t,e,n)=>{const s=t.slots=ua();if(t.vnode.shapeFlag&32){const i=e._;i?(ma(s,e,n),n&&Ic(s,"_",i,!0)):_a(e,s)}else e&&ga(t,e)},Kf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ee;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ma(i,e,n):(r=!e.$stable,_a(e,i)),o=e}else e&&(ga(t,e),o={default:1});if(r)for(const l in i)!pa(l)&&o[l]==null&&delete i[l]},He=rd;function Gf(t){return qf(t)}function qf(t,e){const n=Ci();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:d,nextSibling:g,setScopeId:x=rt,insertStaticContent:E}=t,D=(_,m,y,w=null,b=null,C=null,A=void 0,N=null,T=!!m.dynamicChildren)=>{if(_===m)return;_&&!kn(_,m)&&(w=Ts(_),Je(_,b,C,!0),_=null),m.patchFlag===-2&&(T=!1,m.dynamicChildren=null);const{type:I,ref:F,shapeFlag:P}=m;switch(I){case Ni:V(_,m,y,w);break;case Jt:j(_,m,y,w);break;case Xi:_==null&&p(m,y,w,A);break;case je:Ae(_,m,y,w,b,C,A,N,T);break;default:P&1?v(_,m,y,w,b,C,A,N,T):P&6?Ue(_,m,y,w,b,C,A,N,T):(P&64||P&128)&&I.process(_,m,y,w,b,C,A,N,T,Pn)}F!=null&&b&&Ks(F,_&&_.ref,C,m||_,!m)},V=(_,m,y,w)=>{if(_==null)s(m.el=l(m.children),y,w);else{const b=m.el=_.el;m.children!==_.children&&a(b,m.children)}},j=(_,m,y,w)=>{_==null?s(m.el=c(m.children||""),y,w):m.el=_.el},p=(_,m,y,w)=>{[_.el,_.anchor]=E(_.children,m,y,w,_.el,_.anchor)},f=({el:_,anchor:m},y,w)=>{let b;for(;_&&_!==m;)b=g(_),s(_,y,w),_=b;s(m,y,w)},h=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},v=(_,m,y,w,b,C,A,N,T)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),_==null?R(m,y,w,b,C,A,N,T):M(_,m,b,C,A,N,T)},R=(_,m,y,w,b,C,A,N)=>{let T,I;const{props:F,shapeFlag:P,transition:k,dirs:B}=_;if(T=_.el=o(_.type,C,F&&F.is,F),P&8?u(T,_.children):P&16&&O(_.children,T,null,w,b,Qi(_,C),A,N),B&&Ut(_,null,w,"created"),ne(T,_,_.scopeId,A,w),F){for(const ie in F)ie!=="value"&&!Un(ie)&&r(T,ie,null,F[ie],C,w);"value"in F&&r(T,"value",null,F.value,C),(I=F.onVnodeBeforeMount)&&nt(I,w,_)}B&&Ut(_,null,w,"beforeMount");const z=zf(b,k);z&&k.beforeEnter(T),s(T,m,y),((I=F&&F.onVnodeMounted)||z||B)&&He(()=>{I&&nt(I,w,_),z&&k.enter(T),B&&Ut(_,null,w,"mounted")},b)},ne=(_,m,y,w,b)=>{if(y&&x(_,y),w)for(let C=0;C<w.length;C++)x(_,w[C]);if(b){let C=b.subTree;if(m===C||Ea(C.type)&&(C.ssContent===m||C.ssFallback===m)){const A=b.vnode;ne(_,A,A.scopeId,A.slotScopeIds,b.parent)}}},O=(_,m,y,w,b,C,A,N,T=0)=>{for(let I=T;I<_.length;I++){const F=_[I]=N?It(_[I]):it(_[I]);D(null,F,m,y,w,b,C,A,N)}},M=(_,m,y,w,b,C,A)=>{const N=m.el=_.el;let{patchFlag:T,dynamicChildren:I,dirs:F}=m;T|=_.patchFlag&16;const P=_.props||ee,k=m.props||ee;let B;if(y&&Vt(y,!1),(B=k.onVnodeBeforeUpdate)&&nt(B,y,m,_),F&&Ut(m,_,y,"beforeUpdate"),y&&Vt(y,!0),(P.innerHTML&&k.innerHTML==null||P.textContent&&k.textContent==null)&&u(N,""),I?Z(_.dynamicChildren,I,N,y,w,Qi(m,b),C):A||se(_,m,N,null,y,w,Qi(m,b),C,!1),T>0){if(T&16)ve(N,P,k,y,b);else if(T&2&&P.class!==k.class&&r(N,"class",null,k.class,b),T&4&&r(N,"style",P.style,k.style,b),T&8){const z=m.dynamicProps;for(let ie=0;ie<z.length;ie++){const J=z[ie],Le=P[J],Pe=k[J];(Pe!==Le||J==="value")&&r(N,J,Le,Pe,b,y)}}T&1&&_.children!==m.children&&u(N,m.children)}else!A&&I==null&&ve(N,P,k,y,b);((B=k.onVnodeUpdated)||F)&&He(()=>{B&&nt(B,y,m,_),F&&Ut(m,_,y,"updated")},w)},Z=(_,m,y,w,b,C,A)=>{for(let N=0;N<m.length;N++){const T=_[N],I=m[N],F=T.el&&(T.type===je||!kn(T,I)||T.shapeFlag&70)?d(T.el):y;D(T,I,F,null,w,b,C,A,!0)}},ve=(_,m,y,w,b)=>{if(m!==y){if(m!==ee)for(const C in m)!Un(C)&&!(C in y)&&r(_,C,m[C],null,b,w);for(const C in y){if(Un(C))continue;const A=y[C],N=m[C];A!==N&&C!=="value"&&r(_,C,N,A,b,w)}"value"in y&&r(_,"value",m.value,y.value,b)}},Ae=(_,m,y,w,b,C,A,N,T)=>{const I=m.el=_?_.el:l(""),F=m.anchor=_?_.anchor:l("");let{patchFlag:P,dynamicChildren:k,slotScopeIds:B}=m;B&&(N=N?N.concat(B):B),_==null?(s(I,y,w),s(F,y,w),O(m.children||[],y,F,b,C,A,N,T)):P>0&&P&64&&k&&_.dynamicChildren?(Z(_.dynamicChildren,k,y,b,C,A,N),(m.key!=null||b&&m===b.subTree)&&xa(_,m,!0)):se(_,m,y,F,b,C,A,N,T)},Ue=(_,m,y,w,b,C,A,N,T)=>{m.slotScopeIds=N,_==null?m.shapeFlag&512?b.ctx.activate(m,y,w,A,T):rn(m,y,w,b,C,A,T):Is(_,m,T)},rn=(_,m,y,w,b,C,A)=>{const N=_.component=fd(_,w,b);if(na(_)&&(N.ctx.renderer=Pn),dd(N,!1,A),N.asyncDep){if(b&&b.registerDep(N,he,A),!_.el){const T=N.subTree=ot(Jt);j(null,T,m,y)}}else he(N,_,m,y,b,C,A)},Is=(_,m,y)=>{const w=m.component=_.component;if(sd(_,m,y))if(w.asyncDep&&!w.asyncResolved){q(w,m,y);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},he=(_,m,y,w,b,C,A)=>{const N=()=>{if(_.isMounted){let{next:P,bu:k,u:B,parent:z,vnode:ie}=_;{const et=ya(_);if(et){P&&(P.el=ie.el,q(_,P,A)),et.asyncDep.then(()=>{_.isUnmounted||N()});return}}let J=P,Le;Vt(_,!1),P?(P.el=ie.el,q(_,P,A)):P=ie,k&&Ms(k),(Le=P.props&&P.props.onVnodeBeforeUpdate)&&nt(Le,z,P,ie),Vt(_,!0);const Pe=ll(_),Ze=_.subTree;_.subTree=Pe,D(Ze,Pe,d(Ze.el),Ts(Ze),_,b,C),P.el=Pe.el,J===null&&id(_,Pe.el),B&&He(B,b),(Le=P.props&&P.props.onVnodeUpdated)&&He(()=>nt(Le,z,P,ie),b)}else{let P;const{el:k,props:B}=m,{bm:z,m:ie,parent:J,root:Le,type:Pe}=_,Ze=$n(m);Vt(_,!1),z&&Ms(z),!Ze&&(P=B&&B.onVnodeBeforeMount)&&nt(P,J,m),Vt(_,!0);{Le.ce&&Le.ce._injectChildStyle(Pe);const et=_.subTree=ll(_);D(null,et,y,w,_,b,C),m.el=et.el}if(ie&&He(ie,b),!Ze&&(P=B&&B.onVnodeMounted)){const et=m;He(()=>nt(P,J,et),b)}(m.shapeFlag&256||J&&$n(J.vnode)&&J.vnode.shapeFlag&256)&&_.a&&He(_.a,b),_.isMounted=!0,m=y=w=null}};_.scope.on();const T=_.effect=new Dc(N);_.scope.off();const I=_.update=T.run.bind(T),F=_.job=T.runIfDirty.bind(T);F.i=_,F.id=_.uid,T.scheduler=()=>ro(F),Vt(_,!0),I()},q=(_,m,y)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,Uf(_,m.props,w,y),Kf(_,m.children,y),Lt(),Jo(_),Bt()},se=(_,m,y,w,b,C,A,N,T=!1)=>{const I=_&&_.children,F=_?_.shapeFlag:0,P=m.children,{patchFlag:k,shapeFlag:B}=m;if(k>0){if(k&128){Ss(I,P,y,w,b,C,A,N,T);return}else if(k&256){Ht(I,P,y,w,b,C,A,N,T);return}}B&8?(F&16&&An(I,b,C),P!==I&&u(y,P)):F&16?B&16?Ss(I,P,y,w,b,C,A,N,T):An(I,b,C,!0):(F&8&&u(y,""),B&16&&O(P,y,w,b,C,A,N,T))},Ht=(_,m,y,w,b,C,A,N,T)=>{_=_||fn,m=m||fn;const I=_.length,F=m.length,P=Math.min(I,F);let k;for(k=0;k<P;k++){const B=m[k]=T?It(m[k]):it(m[k]);D(_[k],B,y,null,b,C,A,N,T)}I>F?An(_,b,C,!0,!1,P):O(m,y,w,b,C,A,N,T,P)},Ss=(_,m,y,w,b,C,A,N,T)=>{let I=0;const F=m.length;let P=_.length-1,k=F-1;for(;I<=P&&I<=k;){const B=_[I],z=m[I]=T?It(m[I]):it(m[I]);if(kn(B,z))D(B,z,y,null,b,C,A,N,T);else break;I++}for(;I<=P&&I<=k;){const B=_[P],z=m[k]=T?It(m[k]):it(m[k]);if(kn(B,z))D(B,z,y,null,b,C,A,N,T);else break;P--,k--}if(I>P){if(I<=k){const B=k+1,z=B<F?m[B].el:w;for(;I<=k;)D(null,m[I]=T?It(m[I]):it(m[I]),y,z,b,C,A,N,T),I++}}else if(I>k)for(;I<=P;)Je(_[I],b,C,!0),I++;else{const B=I,z=I,ie=new Map;for(I=z;I<=k;I++){const Be=m[I]=T?It(m[I]):it(m[I]);Be.key!=null&&ie.set(Be.key,I)}let J,Le=0;const Pe=k-z+1;let Ze=!1,et=0;const Dn=new Array(Pe);for(I=0;I<Pe;I++)Dn[I]=0;for(I=B;I<=P;I++){const Be=_[I];if(Le>=Pe){Je(Be,b,C,!0);continue}let tt;if(Be.key!=null)tt=ie.get(Be.key);else for(J=z;J<=k;J++)if(Dn[J-z]===0&&kn(Be,m[J])){tt=J;break}tt===void 0?Je(Be,b,C,!0):(Dn[tt-z]=I+1,tt>=et?et=tt:Ze=!0,D(Be,m[tt],y,null,b,C,A,N,T),Le++)}const qo=Ze?Yf(Dn):fn;for(J=qo.length-1,I=Pe-1;I>=0;I--){const Be=z+I,tt=m[Be],zo=Be+1<F?m[Be+1].el:w;Dn[I]===0?D(null,tt,y,zo,b,C,A,N,T):Ze&&(J<0||I!==qo[J]?Wt(tt,y,zo,2):J--)}}},Wt=(_,m,y,w,b=null)=>{const{el:C,type:A,transition:N,children:T,shapeFlag:I}=_;if(I&6){Wt(_.component.subTree,m,y,w);return}if(I&128){_.suspense.move(m,y,w);return}if(I&64){A.move(_,m,y,Pn);return}if(A===je){s(C,m,y);for(let P=0;P<T.length;P++)Wt(T[P],m,y,w);s(_.anchor,m,y);return}if(A===Xi){f(_,m,y);return}if(w!==2&&I&1&&N)if(w===0)N.beforeEnter(C),s(C,m,y),He(()=>N.enter(C),b);else{const{leave:P,delayLeave:k,afterLeave:B}=N,z=()=>s(C,m,y),ie=()=>{P(C,()=>{z(),B&&B()})};k?k(C,z,ie):ie()}else s(C,m,y)},Je=(_,m,y,w=!1,b=!1)=>{const{type:C,props:A,ref:N,children:T,dynamicChildren:I,shapeFlag:F,patchFlag:P,dirs:k,cacheIndex:B}=_;if(P===-2&&(b=!1),N!=null&&Ks(N,null,y,_,!0),B!=null&&(m.renderCache[B]=void 0),F&256){m.ctx.deactivate(_);return}const z=F&1&&k,ie=!$n(_);let J;if(ie&&(J=A&&A.onVnodeBeforeUnmount)&&nt(J,m,_),F&6)xh(_.component,y,w);else{if(F&128){_.suspense.unmount(y,w);return}z&&Ut(_,null,m,"beforeUnmount"),F&64?_.type.remove(_,m,y,Pn,w):I&&!I.hasOnce&&(C!==je||P>0&&P&64)?An(I,m,y,!1,!0):(C===je&&P&384||!b&&F&16)&&An(T,m,y),w&&Ko(_)}(ie&&(J=A&&A.onVnodeUnmounted)||z)&&He(()=>{J&&nt(J,m,_),z&&Ut(_,null,m,"unmounted")},y)},Ko=_=>{const{type:m,el:y,anchor:w,transition:b}=_;if(m===je){mh(y,w);return}if(m===Xi){h(_);return}const C=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(_.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:N}=b,T=()=>A(y,C);N?N(_.el,C,T):T()}else C()},mh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},xh=(_,m,y)=>{const{bum:w,scope:b,job:C,subTree:A,um:N,m:T,a:I}=_;ol(T),ol(I),w&&Ms(w),b.stop(),C&&(C.flags|=8,Je(A,_,m,y)),N&&He(N,m),He(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},An=(_,m,y,w=!1,b=!1,C=0)=>{for(let A=C;A<_.length;A++)Je(_[A],m,y,w,b)},Ts=_=>{if(_.shapeFlag&6)return Ts(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[df];return y?g(y):m};let ji=!1;const Go=(_,m,y)=>{_==null?m._vnode&&Je(m._vnode,null,null,!0):D(m._vnode||null,_,m,null,null,null,y),m._vnode=_,ji||(ji=!0,Jo(),Jc(),ji=!1)},Pn={p:D,um:Je,m:Wt,r:Ko,mt:rn,mc:O,pc:se,pbc:Z,n:Ts,o:t};return{render:Go,hydrate:void 0,createApp:Lf(Go)}}function Qi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function zf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xa(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=It(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&xa(o,l)),l.type===Ni&&(l.el=o.el)}}function Yf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ya(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ya(e)}function ol(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qf=Symbol.for("v-scx"),Xf=()=>Gn(Qf);function _n(t,e,n){return va(t,e,n)}function va(t,e,n=ee){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ie({},n),c=e&&s||!e&&r!=="post";let a;if(is){if(r==="sync"){const x=Xf();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=rt,x.resume=rt,x.pause=rt,x}}const u=ye;l.call=(x,E,D)=>lt(x,u,E,D);let d=!1;r==="post"?l.scheduler=x=>{He(x,u&&u.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(x,E)=>{E?x():ro(x)}),l.augmentJob=x=>{e&&(x.flags|=4),d&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const g=lf(t,e,l);return is&&(a?a.push(g):c&&g()),g}function Jf(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=ms(this),l=va(i,r.bind(s),n);return o(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Zf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ke(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ee;let i=n;const r=e.startsWith("update:"),o=r&&Zf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>de(u)?u.trim():u)),o.number&&(i=n.map(pr)));let l,c=s[l=$i(e)]||s[l=$i(Ke(e))];!c&&r&&(c=s[l=$i(nn(e))]),c&&lt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,lt(a,t,6,i)}}function Ca(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const c=a=>{const u=Ca(a,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ae(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Ie(o,r),ae(t)&&s.set(t,o),o)}function Ti(t,e){return!t||!xi(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,nn(e))||X(t,e))}function ll(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:d,data:g,setupState:x,ctx:E,inheritAttrs:D}=t,V=$s(t);let j,p;try{if(n.shapeFlag&4){const h=i||s,v=h;j=it(a.call(v,h,u,d,x,g,E)),p=l}else{const h=e;j=it(h.length>1?h(d,{attrs:l,slots:o,emit:c}):h(d,null)),p=e.props?l:td(l)}}catch(h){qn.length=0,Ii(h,t,1),j=ot(Jt)}let f=j;if(p&&D!==!1){const h=Object.keys(p),{shapeFlag:v}=f;h.length&&v&7&&(r&&h.some(Gr)&&(p=nd(p,r)),f=yn(f,p,!1,!0))}return n.dirs&&(f=yn(f,null,!1,!0),f.dirs=f.dirs?f.dirs.concat(n.dirs):n.dirs),n.transition&&oo(f,n.transition),j=f,$s(V),j}const td=t=>{let e;for(const n in t)(n==="class"||n==="style"||xi(n))&&((e||(e={}))[n]=t[n]);return e},nd=(t,e)=>{const n={};for(const s in t)(!Gr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function sd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?cl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==s[g]&&!Ti(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?cl(s,o,a):!0:!!o;return!1}function cl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ti(n,r))return!0}return!1}function id({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ea=t=>t.__isSuspense;function rd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):uf(t)}const je=Symbol.for("v-fgt"),Ni=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),qn=[];let We=null;function be(t=!1){qn.push(We=t?null:[])}function od(){qn.pop(),We=qn[qn.length-1]||null}let ss=1;function al(t,e=!1){ss+=t,t<0&&We&&e&&(We.hasOnce=!0)}function wa(t){return t.dynamicChildren=ss>0?We||fn:null,od(),ss>0&&We&&We.push(t),t}function De(t,e,n,s,i,r){return wa(W(t,e,n,s,i,r,!0))}function Ia(t,e,n,s,i){return wa(ot(t,e,n,s,i,!0))}function Sa(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const Ta=({key:t})=>t??null,Fs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||fe(t)||U(t)?{i:Oe,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,s=0,i=null,r=t===je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ta(e),ref:e&&Fs(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return l?(ao(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),ss>0&&!o&&We&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&We.push(c),c}const ot=ld;function ld(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ra)&&(t=Jt),Sa(t)){const l=yn(t,e,!0);return n&&ao(l,n),ss>0&&!r&&We&&(l.shapeFlag&6?We[We.indexOf(t)]=l:We.push(l)),l.patchFlag=-2,l}if(xd(t)&&(t=t.__vccOpts),e){e=cd(e);let{class:l,style:c}=e;l&&!de(l)&&(e.class=Qr(l)),ae(c)&&(so(c)&&!H(c)&&(c=Ie({},c)),e.style=Yr(c))}const o=de(t)?1:Ea(t)?128:pf(t)?64:ae(t)?4:U(t)?2:0;return W(t,e,n,s,i,o,r,!0)}function cd(t){return t?so(t)||ha(t)?Ie({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?ad(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ta(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Fs(e)):[r,Fs(e)]:Fs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&oo(u,c.clone(u)),u}function ut(t=" ",e=0){return ot(Ni,null,t,e)}function bt(t="",e=!1){return e?(be(),Ia(Jt,null,t)):ot(Jt,null,t)}function it(t){return t==null||typeof t=="boolean"?ot(Jt):H(t)?ot(je,null,t.slice()):Sa(t)?It(t):ot(Ni,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function ao(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ao(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ha(e)?e._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),s&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function ad(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Qr([e.class,s.class]));else if(i==="style")e.style=Yr([e.style,s.style]);else if(xi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function nt(t,e,n,s=null){lt(t,e,7,[n,s])}const ud=ca();let hd=0;function fd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ud,r={uid:hd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:da(s,i),emitsOptions:Ca(s,i),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:s.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ed.bind(null,r),t.ce&&t.ce(r),r}let ye=null,qs,Er;{const t=Ci(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Er=e("__VUE_SSR_SETTERS__",n=>is=n)}const ms=t=>{const e=ye;return qs(t),t.scope.on(),()=>{t.scope.off(),qs(e)}},ul=()=>{ye&&ye.scope.off(),qs(null)};function Na(t){return t.vnode.shapeFlag&4}let is=!1;function dd(t,e=!1,n=!1){e&&Er(e);const{props:s,children:i}=t.vnode,r=Na(t);Wf(t,s,r,e),$f(t,i,n);const o=r?pd(t,e):void 0;return e&&Er(!1),o}function pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Af);const{setup:s}=n;if(s){Lt();const i=t.setupContext=s.length>1?gd(t):null,r=ms(t),o=gs(s,t,0,[t.props,i]),l=Cc(o);if(Bt(),r(),(l||t.sp)&&!$n(t)&&ta(t),l){if(o.then(ul,ul),e)return o.then(c=>{hl(t,c)}).catch(c=>{Ii(c,t,0)});t.asyncDep=o}else hl(t,o)}else Ra(t)}function hl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=zc(e)),Ra(t)}function Ra(t,e,n){const s=t.type;t.render||(t.render=s.render||rt);{const i=ms(t);Lt();try{Pf(t)}finally{Bt(),i()}}}const _d={get(t,e){return Ce(t,"get",""),t[e]}};function gd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_d),slots:t.slots,emit:t.emit,expose:e}}function Ri(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zc(io(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function md(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function xd(t){return U(t)&&"__vccOpts"in t}const Aa=(t,e)=>rf(t,e,is),yd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wr;const fl=typeof window<"u"&&window.trustedTypes;if(fl)try{wr=fl.createPolicy("vue",{createHTML:t=>t})}catch{}const Pa=wr?t=>wr.createHTML(t):t=>t,vd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,dl=ht&&ht.createElement("template"),Cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ht.createElementNS(vd,t):e==="mathml"?ht.createElementNS(bd,t):n?ht.createElement(t,{is:n}):ht.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ht.createTextNode(t),createComment:t=>ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{dl.innerHTML=Pa(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=dl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ed=Symbol("_vtc");function wd(t,e,n){const s=t[Ed];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pl=Symbol("_vod"),Id=Symbol("_vsh"),Sd=Symbol(""),Td=/(^|;)\s*display\s*:/;function Nd(t,e,n){const s=t.style,i=de(n);let r=!1;if(n&&!i){if(e)if(de(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ls(s,l,"")}else for(const o in e)n[o]==null&&Ls(s,o,"");for(const o in n)o==="display"&&(r=!0),Ls(s,o,n[o])}else if(i){if(e!==n){const o=s[Sd];o&&(n+=";"+o),s.cssText=n,r=Td.test(n)}}else e&&t.removeAttribute("style");pl in t&&(t[pl]=r?s.display:"",t[Id]&&(s.display="none"))}const _l=/\s*!important$/;function Ls(t,e,n){if(H(n))n.forEach(s=>Ls(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rd(t,e);_l.test(n)?t.setProperty(nn(s),n.replace(_l,""),"important"):t[s]=n}}const gl=["Webkit","Moz","ms"],Ji={};function Rd(t,e){const n=Ji[e];if(n)return n;let s=Ke(e);if(s!=="filter"&&s in t)return Ji[e]=s;s=bi(s);for(let i=0;i<gl.length;i++){const r=gl[i]+s;if(r in t)return Ji[e]=r}return e}const ml="http://www.w3.org/1999/xlink";function xl(t,e,n,s,i,r=Rh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ml,e.slice(6,e.length)):t.setAttributeNS(ml,e,n):n==null||r&&!Sc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ft(n)?String(n):n)}function yl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Pa(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function Ad(t,e,n,s){t.removeEventListener(e,n,s)}const vl=Symbol("_vei");function Pd(t,e,n,s,i=null){const r=t[vl]||(t[vl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Dd(e);if(s){const a=r[e]=Md(s,i);un(t,l,a,c)}else o&&(Ad(t,l,o,c),r[e]=void 0)}}const bl=/(?:Once|Passive|Capture)$/;function Dd(t){let e;if(bl.test(t)){e={};let s;for(;s=t.match(bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let Zi=0;const Od=Promise.resolve(),kd=()=>Zi||(Od.then(()=>Zi=0),Zi=Date.now());function Md(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(Fd(s,n.value),e,5,[s])};return n.value=t,n.attached=kd(),n}function Fd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ld=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?wd(t,s,o):e==="style"?Nd(t,n,s):xi(e)?Gr(e)||Pd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bd(t,e,s,o))?(yl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(s))?yl(t,Ke(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xl(t,e,s,o))};function Bd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Cl(e)&&de(n)?!1:e in t}const El=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Ms(e,n):e};function Hd(t){t.target.composing=!0}function wl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const er=Symbol("_assign"),Wd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[er]=El(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=pr(l)),t[er](l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",Hd),un(t,"compositionend",wl),un(t,"change",wl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[er]=El(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?pr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Ud=Ie({patchProp:Ld},Cd);let Il;function Vd(){return Il||(Il=Gf(Ud))}const jd=(...t)=>{const e=Vd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Kd(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,$d(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $d(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Kd(t){return de(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Da;const Ai=t=>Da=t,Oa=Symbol();function Ir(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zn||(zn={}));function Gd(){const t=Ac(!0),e=t.run(()=>Gt({}));let n=[],s=[];const i=io({install(r){Ai(i),i._a=r,r.provide(Oa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ka=()=>{};function Sl(t,e,n,s=ka){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Pc()&&Ah(i),i}function ln(t,...e){t.slice().forEach(n=>{n(...e)})}const qd=t=>t(),Tl=Symbol(),tr=Symbol();function Sr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ir(i)&&Ir(s)&&t.hasOwnProperty(n)&&!fe(s)&&!Nt(s)?t[n]=Sr(i,s):t[n]=s}return t}const zd=Symbol();function Yd(t){return!Ir(t)||!t.hasOwnProperty(zd)}const{assign:Et}=Object;function Qd(t){return!!(fe(t)&&t.effect)}function Xd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=ef(n.state.value[t]);return Et(u,r,Object.keys(o||{}).reduce((d,g)=>(d[g]=io(Aa(()=>{Ai(n);const x=n._s.get(t);return o[g].call(x,x)})),d),{}))}return c=Ma(t,a,e,n,s,!0),c}function Ma(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),c={deep:!0};let a,u,d=[],g=[],x;const E=s.state.value[t];!r&&!E&&(s.state.value[t]={}),Gt({});let D;function V(O){let M;a=u=!1,typeof O=="function"?(O(s.state.value[t]),M={type:zn.patchFunction,storeId:t,events:x}):(Sr(s.state.value[t],O),M={type:zn.patchObject,payload:O,storeId:t,events:x});const Z=D=Symbol();Qc().then(()=>{D===Z&&(a=!0)}),u=!0,ln(d,M,s.state.value[t])}const j=r?function(){const{state:M}=n,Z=M?M():{};this.$patch(ve=>{Et(ve,Z)})}:ka;function p(){o.stop(),d=[],g=[],s._s.delete(t)}const f=(O,M="")=>{if(Tl in O)return O[tr]=M,O;const Z=function(){Ai(s);const ve=Array.from(arguments),Ae=[],Ue=[];function rn(q){Ae.push(q)}function Is(q){Ue.push(q)}ln(g,{args:ve,name:Z[tr],store:v,after:rn,onError:Is});let he;try{he=O.apply(this&&this.$id===t?this:v,ve)}catch(q){throw ln(Ue,q),q}return he instanceof Promise?he.then(q=>(ln(Ae,q),q)).catch(q=>(ln(Ue,q),Promise.reject(q))):(ln(Ae,he),he)};return Z[Tl]=!0,Z[tr]=M,Z},h={_p:s,$id:t,$onAction:Sl.bind(null,g),$patch:V,$reset:j,$subscribe(O,M={}){const Z=Sl(d,O,M.detached,()=>ve()),ve=o.run(()=>_n(()=>s.state.value[t],Ae=>{(M.flush==="sync"?u:a)&&O({storeId:t,type:zn.direct,events:x},Ae)},Et({},c,M)));return Z},$dispose:p},v=wi(h);s._s.set(t,v);const ne=(s._a&&s._a.runWithContext||qd)(()=>s._e.run(()=>(o=Ac()).run(()=>e({action:f}))));for(const O in ne){const M=ne[O];if(fe(M)&&!Qd(M)||Nt(M))r||(E&&Yd(M)&&(fe(M)?M.value=E[O]:Sr(M,E[O])),s.state.value[t][O]=M);else if(typeof M=="function"){const Z=f(M,O);ne[O]=Z,l.actions[O]=M}}return Et(v,ne),Et(Y(v),ne),Object.defineProperty(v,"$state",{get:()=>s.state.value[t],set:O=>{V(M=>{Et(M,O)})}}),s._p.forEach(O=>{Et(v,o.run(()=>O({store:v,app:s._a,pinia:s,options:l})))}),E&&r&&n.hydrate&&n.hydrate(v.$state,E),a=!0,u=!0,v}/*! #__NO_SIDE_EFFECTS__ */function Jd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Hf();return o=o||(c?Gn(Oa,null):null),o&&Ai(o),o=Da,o._s.has(t)||(i?Ma(t,e,s,o):Xd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Zd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ep=()=>{};var Nl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw In(e)},In=function(t){return new Error("Firebase Database ("+Fa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[u],n[d],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(La(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||d==null)throw new np;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),d!==64){const E=a<<6&192|d;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ba=function(t){const e=La(t);return uo.encodeByteArray(e,!0)},zs=function(t){return Ba(t).replace(/\./g,"")},Tr=function(t){try{return uo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){return Ha(void 0,t)}function Ha(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ip(n)||(t[n]=Ha(t[n],e[n]));return t}function ip(t){return t!=="__proto__"}/**
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
 */function rp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const op=()=>rp().__FIREBASE_DEFAULTS__,lp=()=>{if(typeof process>"u"||typeof Nl>"u")return;const t=Nl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},Wa=()=>{try{return ep()||op()||lp()||cp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=Wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},up=t=>{const e=ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ua=()=>{var t;return(t=Wa())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function hp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zs(JSON.stringify(n)),zs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Va(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fp())}function dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pp(){return Fa.NODE_ADMIN===!0}function _p(){try{return typeof indexedDB=="object"}catch{return!1}}function gp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="FirebaseError";class xs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mp,Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xs(i,l,s)}}function xp(t,e){return t.replace(yp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $a=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rs(Tr(r[0])||""),n=rs(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vp=function(t){const e=$a(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(t){const e=$a(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ys(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Qs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Al(r)&&Al(o)){if(!Qs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Al(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const g=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let d=0;d<80;d++){d<40?d<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):d<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[d]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ho(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Di=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Sn(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ip{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tp(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sp(t){return t===$t?void 0:t}function Tp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ip(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Rp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Ap=oe.INFO,Pp={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Dp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Pp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=Ap,this._logHandler=Dp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Op=(t,e)=>e.some(n=>t instanceof n);let Pl,Dl;function kp(){return Pl||(Pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mp(){return Dl||(Dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ga=new WeakMap,Nr=new WeakMap,qa=new WeakMap,nr=new WeakMap,fo=new WeakMap;function Fp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ga.set(n,t)}).catch(()=>{}),fo.set(e,t),e}function Lp(t){if(Nr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Nr.set(t,e)}let Rr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bp(t){Rr=t(Rr)}function Hp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(sr(this),e,...n);return qa.set(s,e.sort?e.sort():[e]),Rt(s)}:Mp().includes(t)?function(...e){return t.apply(sr(this),e),Rt(Ga.get(this))}:function(...e){return Rt(t.apply(sr(this),e))}}function Wp(t){return typeof t=="function"?Hp(t):(t instanceof IDBTransaction&&Lp(t),Op(t,kp())?new Proxy(t,Rr):t)}function Rt(t){if(t instanceof IDBRequest)return Fp(t);if(nr.has(t))return nr.get(t);const e=Wp(t);return e!==t&&(nr.set(t,e),fo.set(e,t)),e}const sr=t=>fo.get(t);function Up(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Vp=["get","getKey","getAll","getAllKeys","count"],jp=["put","add","delete","clear"],ir=new Map;function Ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ir.get(e))return ir.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=jp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return ir.set(e,r),r}Bp(t=>({...t,get:(e,n,s)=>Ol(e,n)||t.get(e,n,s),has:(e,n)=>!!Ol(e,n)||t.has(e,n)}));/**
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
 */class $p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",kl="0.11.2";/**
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
 */const gt=new Ka("@firebase/app"),Gp="@firebase/app-compat",qp="@firebase/analytics-compat",zp="@firebase/analytics",Yp="@firebase/app-check-compat",Qp="@firebase/app-check",Xp="@firebase/auth",Jp="@firebase/auth-compat",Zp="@firebase/database",e_="@firebase/data-connect",t_="@firebase/database-compat",n_="@firebase/functions",s_="@firebase/functions-compat",i_="@firebase/installations",r_="@firebase/installations-compat",o_="@firebase/messaging",l_="@firebase/messaging-compat",c_="@firebase/performance",a_="@firebase/performance-compat",u_="@firebase/remote-config",h_="@firebase/remote-config-compat",f_="@firebase/storage",d_="@firebase/storage-compat",p_="@firebase/firestore",__="@firebase/vertexai",g_="@firebase/firestore-compat",m_="firebase",x_="11.4.0";/**
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
 */const Pr="[DEFAULT]",y_={[Ar]:"fire-core",[Gp]:"fire-core-compat",[zp]:"fire-analytics",[qp]:"fire-analytics-compat",[Qp]:"fire-app-check",[Yp]:"fire-app-check-compat",[Xp]:"fire-auth",[Jp]:"fire-auth-compat",[Zp]:"fire-rtdb",[e_]:"fire-data-connect",[t_]:"fire-rtdb-compat",[n_]:"fire-fn",[s_]:"fire-fn-compat",[i_]:"fire-iid",[r_]:"fire-iid-compat",[o_]:"fire-fcm",[l_]:"fire-fcm-compat",[c_]:"fire-perf",[a_]:"fire-perf-compat",[u_]:"fire-rc",[h_]:"fire-rc-compat",[f_]:"fire-gcs",[d_]:"fire-gcs-compat",[p_]:"fire-fst",[g_]:"fire-fst-compat",[__]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const Xs=new Map,v_=new Map,Dr=new Map;function Ml(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(Dr.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const n of Xs.values())Ml(n,t);for(const n of v_.values())Ml(n,t);return!0}function b_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function C_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const E_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new ja("app","Firebase",E_);/**
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
 */class w_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const I_=x_;function za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=Ua()),!n)throw At.create("no-options");const r=Xs.get(i);if(r){if(Qs(n,r.options)&&Qs(s,r.config))return r;throw At.create("duplicate-app",{appName:i})}const o=new Np(i);for(const c of Dr.values())o.addComponent(c);const l=new w_(n,s,o);return Xs.set(i,l),l}function S_(t=Pr){const e=Xs.get(t);if(!e&&t===Pr&&Ua())return za();if(!e)throw At.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=y_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}Js(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const T_="firebase-heartbeat-database",N_=1,ls="firebase-heartbeat-store";let rr=null;function Ya(){return rr||(rr=Up(T_,N_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),rr}async function R_(t){try{const n=(await Ya()).transaction(ls),s=await n.objectStore(ls).get(Qa(t));return await n.done,s}catch(e){if(e instanceof xs)gt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function Fl(t,e){try{const s=(await Ya()).transaction(ls,"readwrite");await s.objectStore(ls).put(e,Qa(t)),await s.done}catch(n){if(n instanceof xs)gt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(s.message)}}}function Qa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const A_=1024,P_=30;class D_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ll();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>P_){const o=M_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ll(),{heartbeatsToSend:s,unsentEntries:i}=O_(this._heartbeatsCache.heartbeats),r=zs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return gt.warn(n),""}}}function Ll(){return new Date().toISOString().substring(0,10)}function O_(t,e=A_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Bl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class k_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _p()?gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bl(t){return zs(JSON.stringify({version:2,heartbeats:t})).length}function M_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function F_(t){Js(new os("platform-logger",e=>new $p(e),"PRIVATE")),Js(new os("heartbeat",e=>new D_(e),"PRIVATE")),gn(Ar,kl,t),gn(Ar,kl,"esm2017"),gn("fire-js","")}F_("");var L_="firebase",B_="11.4.0";/**
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
 */gn(L_,B_,"app");var Hl={};const Wl="@firebase/database",Ul="1.0.13";/**
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
 */let Xa="";function H_(t){Xa=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new W_(e)}}catch{}return new U_},qt=Ja("localStorage"),V_=Ja("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Ka("@firebase/database"),j_=function(){let t=1;return function(){return t++}}(),Za=function(t){const e=wp(t),n=new Ep;n.update(e);const s=n.digest();return uo.encodeByteArray(s)},ys=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ys.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let Yn=null,Vl=!0;const $_=function(t,e){S(!0,"Can't turn on custom loggers persistently."),mn.logLevel=oe.VERBOSE,Yn=mn.log.bind(mn)},we=function(...t){if(Vl===!0&&(Vl=!1,Yn===null&&V_.get("logging_enabled")===!0&&$_()),Yn){const e=ys.apply(null,t);Yn(e)}},vs=function(t){return function(...e){we(t,...e)}},Or=function(...t){const e="FIREBASE INTERNAL ERROR: "+ys(...t);mn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${ys(...t)}`;throw mn.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+ys(...t);mn.warn(e)},K_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bn="[MIN_NAME]",Zt="[MAX_NAME]",Tn=function(t,e){if(t===e)return 0;if(t===bn||e===Zt)return-1;if(e===bn||t===Zt)return 1;{const n=jl(t),s=jl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},q_=function(t,e){return t===e?0:t<e?-1:1},Mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},po=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=po(t[e[s]]);return n+="}",n},tu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nu=function(t){S(!eu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let d="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),d=d+g}return d.toLowerCase()},z_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Q_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const X_=new RegExp("^-?(0*)\\d{1,10}$"),J_=-2147483648,Z_=2147483647,jl=function(t){if(X_.test(t)){const e=Number(t);if(e>=J_&&e<=Z_)return e}return null},Nn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},eg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class tg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,C_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Bs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="5",su="v",iu="s",ru="r",ou="f",lu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cu="ls",au="p",kr="ac",uu="websocket",hu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function du(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===uu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sg(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={},lr={};function go(t){const e=t.toString();return or[e]||(or[e]=new ig),or[e]}function rg(t,e){const n=t.toString();return lr[n]||(lr[n]=e()),lr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Nn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="start",lg="close",cg="pLPCommand",ag="pRTLPCB",pu="id",_u="pw",gu="ser",ug="cb",hg="seg",fg="ts",dg="d",pg="dframe",mu=1870,xu=30,_g=mu-xu,gg=25e3,mg=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vs(e),this.stats_=go(n),this.urlFn=c=>(this.appCheckToken&&(c[kr]=this.appCheckToken),du(n,hu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new og(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mg)),G_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$l)this.id=l,this.password=c;else if(o===lg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[$l]="t",s[gu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ug]=this.scriptTagHolder.uniqueCallbackIdentifier),s[su]=_o,this.transportSessionId&&(s[iu]=this.transportSessionId),this.lastSessionId&&(s[cu]=this.lastSessionId),this.applicationId&&(s[au]=this.applicationId),this.appCheckToken&&(s[kr]=this.appCheckToken),typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(s[ru]=ou);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!z_()&&!Y_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ba(n),i=tu(s,_g);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[pg]="t",s[pu]=e,s[_u]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j_(),window[cg+this.uniqueCallbackIdentifier]=e,window[ag+this.uniqueCallbackIdentifier]=n,this.myIFrame=mo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pu]=this.myID,e[_u]=this.myPW,e[gu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xu+s.length<=mu;){const o=this.pendingSegs.shift();s=s+"&"+hg+i+"="+o.seg+"&"+fg+i+"="+o.ts+"&"+dg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(gg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=16384,yg=45e3;let Zs=null;typeof MozWebSocket<"u"?Zs=MozWebSocket:typeof WebSocket<"u"&&(Zs=WebSocket);class qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vs(this.connId),this.stats_=go(n),this.connURL=qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[su]=_o,typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(o[ru]=ou),n&&(o[iu]=n),s&&(o[cu]=s),i&&(o[kr]=i),r&&(o[au]=r),du(e,uu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let s;pp(),this.mySock=new Zs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zs!==null&&!qe.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tu(n,xg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2;qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static get ALL_TRANSPORTS(){return[hn,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=qe&&qe.isAvailable();let s=n&&!qe.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qe];else{const i=this.transports_=[];for(const r of cs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=6e4,bg=5e3,Cg=10*1024,Eg=100*1024,cr="t",Kl="d",wg="s",Gl="r",Ig="e",ql="o",zl="a",Yl="n",Ql="p",Sg="h";class Tg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cr in e){const n=e[cr];n===zl?this.upgradeIfSecondaryHealthy_():n===Gl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ql&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mn("t",e),s=Mn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mn(cr,e);if(Kl in e){const s=e[Kl];if(n===Sg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wg?this.onConnectionShutdown_(s):n===Gl?this.onReset_(s):n===Ig?Or("Server Error: "+s):n===ql?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Or("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_o!==s&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends vu{static getInstance(){return new ei}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Va()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=32,Jl=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new te("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ot(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ng(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Eu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new te(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Re(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xo(t,e){if(Ot(t)!==Ot(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ot(t)>Ot(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Rg{constructor(e,n){this.errorPrefix_=n,this.parts_=Cu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Di(this.parts_[s]);wu(this)}}function Ag(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Di(e),wu(t)}function Pg(t){const e=t.parts_.pop();t.byteLength_-=Di(e),t.parts_.length>0&&(t.byteLength_-=1)}function wu(t){if(t.byteLength_>Jl)throw new Error(t.errorPrefix_+"has a key path longer than "+Jl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xl+") or object contains a cycle "+Kt(t))}function Kt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends vu{static getInstance(){return new yo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e3,Dg=60*5*1e3,Zl=30*1e3,Og=1.3,kg=3e4,Mg="server_kill",ec=3;class _t extends yu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=_t.nextPersistentConnectionId_++,this.log_=vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fn,this.maxReconnectDelay_=Dg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Pi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;_t.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Or("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kg&&(this.reconnectDelay_=Fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Og)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=g&&g.token,l=new Tg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{Me(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mg)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Me(d),c())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rl(this.interruptReasons_)&&(this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>po(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ec&&(this.reconnectDelay_=Zl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ec&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xa.replace(/\./g,"-")]=1,Va()?e["framework.cordova"]=1:dp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ei.getInstance().currentlyOnline();return Rl(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(bn,e),i=new K(bn,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;class Iu extends Oi{static get __EMPTY_NODE(){return Ps}static set __EMPTY_NODE(e){Ps=e}compare(e,n){return Tn(e.name,n.name)}isDefinedOn(e){throw In("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Zt,Ps)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Ps)}toString(){return".key"}}const xn=new Iu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??me.RED,this.left=i??ke.EMPTY_NODE,this.right=r??ke.EMPTY_NODE}copy(e,n,s,i,r){return new me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Fg{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ke{constructor(e,n=ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}ke.EMPTY_NODE=new Fg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){return Tn(t.name,e.name)}function vo(t,e){return Tn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;function Bg(t){Mr=t}const Su=function(t){return typeof t=="number"?"number:"+nu(t):"string:"+t},Tu=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else S(t===Mr||t.isEmpty(),"priority of unexpected type.");S(t===Mr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;class ge{static set __childrenNodeConstructor(e){tc=e}static get __childrenNodeConstructor(){return tc}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:$(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Ot(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Su(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nu(this.value_):e+=this.value_,this.lazyHash_=Za(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu,Ru;function Hg(t){Nu=t}function Wg(t){Ru=t}class Ug extends Oi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Zt,new ge("[PRIORITY-POST]",Ru))}makePost(e,n){const s=Nu(e);return new K(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new Ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=Math.log(2);class jg{constructor(e){const n=r=>parseInt(Math.log(r)/Vg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ti=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let d,g;if(u===0)return null;if(u===1)return d=t[c],g=n?n(d):d,new me(g,d.node,me.BLACK,null,null);{const x=parseInt(u/2,10)+c,E=i(c,x),D=i(x+1,a);return d=t[x],g=n?n(d):d,new me(g,d.node,me.BLACK,E,D)}},r=function(c){let a=null,u=null,d=t.length;const g=function(E,D){const V=d-E,j=d;d-=E;const p=i(V+1,j),f=t[V],h=n?n(f):f;x(new me(h,f.node,D,null,p))},x=function(E){a?(a.left=E,a=E):(u=E,a=E)};for(let E=0;E<c.count;++E){const D=c.nextBitIsOne(),V=Math.pow(2,c.count-(E+1));D?g(V,me.BLACK):(g(V,me.BLACK),g(V,me.RED))}return u},o=new jg(t.length),l=r(o);return new ke(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar;const cn={};class pt{static get Default(){return S(cn&&ue,"ChildrenNode.ts has not been loaded"),ar=ar||new pt({".priority":cn},{".priority":ue}),ar}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ke?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ti(s,e.getCompare()):l=cn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new pt(u,a)}addToIndexes(e,n){const s=Ys(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===cn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(K.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ti(l,o.getCompare())}else return cn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new K(e.name,l))),c.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ys(this.indexes_,i=>{if(i===cn)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;class L{static get EMPTY_NODE(){return Ln||(Ln=new L(new ke(vo),null,pt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Tu(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ln:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ln:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{S($(e)!==".priority"||Ot(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Su(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Za(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $g extends L{constructor(){super(new ke(vo),L.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const bs=new $g;Object.defineProperties(K,{MIN:{value:new K(bn,L.EMPTY_NODE)},MAX:{value:new K(Zt,bs)}});Iu.__EMPTY_NODE=L.EMPTY_NODE;ge.__childrenNodeConstructor=L;Bg(bs);Wg(bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=!0;function xe(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,xe(e))}if(!(t instanceof Array)&&Kg){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new K(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=ti(n,Lg,o=>o.name,vo);if(s){const o=ti(n,ue.getCompare());return new L(r,xe(e),new pt({".priority":o},{".priority":ue}))}else return new L(r,xe(e),pt.Default)}else{let n=L.EMPTY_NODE;return Fe(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Hg(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends Oi{constructor(e){super(),this.indexPath_=e,S(!G(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}makePost(e,n){const s=xe(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,bs);return new K(Zt,e)}toString(){return Cu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg extends Oi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Tn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=xe(e);return new K(n,s)}toString(){return".value"}}const zg=new qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){return{type:"value",snapshotNode:t}}function Cn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function as(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function us(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Yg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(as(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Cn(n,s)):o.trackChildChange(us(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(as(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(us(i,r,o))}else s.trackChildChange(Cn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new bo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(g,x)=>d(x,g)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const c=new K(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const d=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(u&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(us(n,s,d)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(as(n,d));const D=l.updateImmediateChild(n,L.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(Cn(g.name,g.node)),D.updateImmediateChild(g.name,g.node)):D}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(as(a.name,a.node)),r.trackChildChange(Cn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Co;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xg(t){return t.loadsAllData()?new bo(t.getIndex()):t.hasLimit()?new Qg(t):new hs(t)}function nc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===zg?n="$value":t.index_===xn?n="$key":(S(t.index_ instanceof Gg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends yu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=vs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ni.getListenId_(e,s),l={};this.listens_[o]=l;const c=nc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let d=u;if(a===404&&(d=null,a=null),a===null&&this.onDataUpdate_(r,d,!1,s),vn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ni.getListenId_(e,n);delete this.listens_[s]}get(e){const n=nc(e._queryParams),s=e._path.toString(),i=new Pi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=rs(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function si(){return{value:null,children:new Map}}function Pu(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,si());const i=t.children.get(s);e=le(e),Pu(i,e,n)}}function Fr(t,e,n){t.value!==null?n(e,t.value):Zg(t,(s,i)=>{const r=new te(e.toString()+"/"+s);Fr(i,r,n)})}function Zg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=10*1e3,tm=30*1e3,nm=5*60*1e3;class sm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new em(e);const s=ic+(tm-ic)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*nm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function Du(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=Du()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new ii(Q(),n,this.revert)}}else return S($(this.path)===e,"operationForChild called for unrelated child."),new ii(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new fs(this.source,Q()):new fs(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return G(this.path)?new en(this.source,Q(),this.snap.getImmediateChild(e)):new en(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new en(this.source,Q(),n.value):new ds(this.source,Q(),n)}else return S($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Yg(o.childName,o.snapshotNode))}),Bn(t,i,"child_removed",e,s,n),Bn(t,i,"child_added",e,s,n),Bn(t,i,"child_moved",r,s,n),Bn(t,i,"child_changed",e,s,n),Bn(t,i,"value",e,s,n),i}function Bn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>lm(t,l,c)),o.forEach(l=>{const c=om(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function om(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lm(t,e,n){if(e.childName==null||n.childName==null)throw In("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){return{eventCache:t,serverCache:e}}function Xn(t,e,n,s){return ki(new kt(e,n,s),t.serverCache)}function Ou(t,e,n,s){return ki(t.eventCache,new kt(e,n,s))}function ri(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const cm=()=>(ur||(ur=new ke(q_)),ur);class ce{static fromObject(e){let n=new ce(null);return Fe(e,(s,i)=>{n=n.set(new te(s),i)}),n}constructor(e,n=cm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(G(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:_e(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new ce(null)}}set(e,n){if(G(e))return new ce(n,this.children);{const s=$(e),r=(this.children.get(s)||new ce(null)).set(le(e),n),o=this.children.insert(s,r);return new ce(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(G(e))return n;{const s=$(e),r=(this.children.get(s)||new ce(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ce(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(le(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),_e(n,i),s):new ce(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ce(null))}}function Jn(t,e,n){if(G(e))return new Xe(new ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Re(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new ce(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function rc(t,e,n){let s=t;return Fe(n,(i,r)=>{s=Jn(s,_e(e,i),r)}),s}function oc(t,e){if(G(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new Xe(n)}}function Lr(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function lc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function Pt(t,e){if(G(e))return t;{const n=sn(t,e);return n!=null?new Xe(new ce(n)):new Xe(t.writeTree_.subtree(e))}}function Br(t){return t.writeTree_.isEmpty()}function En(t,e){return ku(Q(),t.writeTree_,e)}function ku(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ku(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e){return Bu(e,t)}function am(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Jn(t.visibleWrites,e,n)),t.lastWriteId=s}function um(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function hm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&fm(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return dm(t),!0;if(s.snap)t.visibleWrites=oc(t.visibleWrites,s.path);else{const l=s.children;Fe(l,c=>{t.visibleWrites=oc(t.visibleWrites,_e(s.path,c))})}return!0}else return!1}function fm(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(_e(t.path,n),e))return!0;return!1}function dm(t){t.visibleWrites=Mu(t.allWrites,pm,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pm(t){return t.visible}function Mu(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Re(n,o),s=Jn(s,l,r.snap)):ze(o,n)&&(l=Re(o,n),s=Jn(s,Q(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Re(n,o),s=rc(s,l,r.children);else if(ze(o,n))if(l=Re(o,n),G(l))s=rc(s,Q(),r.children);else{const c=vn(r.children,$(l));if(c){const a=c.getChild(le(l));s=Jn(s,Q(),a)}}}else throw In("WriteRecord should have .snap or .children")}}return s}function Fu(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=Pt(t.visibleWrites,e);if(Br(o))return n;if(n==null&&!Lr(o,Q()))return null;{const l=n||L.EMPTY_NODE;return En(o,l)}}}else{const r=Pt(t.visibleWrites,e);if(!i&&Br(r))return n;if(!i&&n==null&&!Lr(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(ze(a.path,e)||ze(e,a.path))},l=Mu(t.allWrites,o,e),c=n||L.EMPTY_NODE;return En(l,c)}}}function _m(t,e,n){let s=L.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Pt(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const c=En(Pt(r,new te(o)),l);s=s.updateImmediateChild(o,c)}),lc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pt(t.visibleWrites,e);return lc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gm(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Lr(t.visibleWrites,r))return null;{const o=Pt(t.visibleWrites,r);return Br(o)?i.getChild(n):En(o,i.getChild(n))}}function mm(t,e,n,s){const i=_e(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Pt(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function xm(t,e){return sn(t.visibleWrites,e)}function ym(t,e,n,s,i,r,o){let l;const c=Pt(t.visibleWrites,e),a=sn(c,Q());if(a!=null)l=a;else if(n!=null)l=En(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&u.length<i;)d(x,s)!==0&&u.push(x),x=g.getNext();return u}else return[]}function vm(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function oi(t,e,n,s){return Fu(t.writeTree,t.treePath,e,n,s)}function Io(t,e){return _m(t.writeTree,t.treePath,e)}function cc(t,e,n,s){return gm(t.writeTree,t.treePath,e,n,s)}function li(t,e){return xm(t.writeTree,_e(t.treePath,e))}function bm(t,e,n,s,i,r){return ym(t.writeTree,t.treePath,e,n,s,i,r)}function So(t,e,n){return mm(t.writeTree,t.treePath,e,n)}function Lu(t,e){return Bu(_e(t.treePath,e),t.writeTree)}function Bu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,us(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Cn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,us(s,e.snapshotNode,i.oldSnap));else throw In("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Hu=new Em;class To{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return So(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=bm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){return{filter:t}}function Im(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Sm(t,e,n,s,i){const r=new Cm;let o,l;if(n.type===Ye.OVERWRITE){const a=n;a.source.fromUser?o=Hr(t,e,a.path,a.snap,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!G(a.path),o=ci(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const a=n;a.source.fromUser?o=Nm(t,e,a.path,a.children,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Wr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const a=n;a.revert?o=Pm(t,e,a.path,s,i,r):o=Rm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=Am(t,e,n.path,s,r);else throw In("Unknown operation type: "+n.type);const c=r.getChanges();return Tm(e,o,c),{viewCache:o,changes:c}}function Tm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ri(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Au(ri(e)))}}function Wu(t,e,n,s,i,r){const o=e.eventCache;if(li(s,n)!=null)return e;{let l,c;if(G(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=tn(e),u=a instanceof L?a:L.EMPTY_NODE,d=Io(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const a=oi(s,tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){S(Ot(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=cc(s,n,u,c);d!=null?l=t.filter.updatePriority(u,d):l=o.getNode()}else{const u=le(n);let d;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=cc(s,n,o.getNode(),c);g!=null?d=o.getNode().getImmediateChild(a).updateChild(u,g):d=o.getNode().getImmediateChild(a)}else d=So(s,a,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),a,d,u,i,r):l=o.getNode()}}return Xn(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function ci(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),x,null)}else{const x=$(n);if(!c.isCompleteForPath(n)&&Ot(n)>1)return e;const E=le(n),V=c.getNode().getImmediateChild(x).updateChild(E,s);x===".priority"?a=u.updatePriority(c.getNode(),V):a=u.updateChild(c.getNode(),x,V,E,Hu,null)}const d=Ou(e,a,c.isFullyInitialized()||G(n),u.filtersNodes()),g=new To(i,d,r);return Wu(t,d,n,i,g,l)}function Hr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new To(i,e,r);if(G(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Xn(e,a,!0,t.filter.filtersNodes());else{const d=$(n);if(d===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Xn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=le(n),x=l.getNode().getImmediateChild(d);let E;if(G(g))E=s;else{const D=u.getCompleteChild(d);D!=null?bu(g)===".priority"&&D.getChild(Eu(g)).isEmpty()?E=D:E=D.updateChild(g,s):E=L.EMPTY_NODE}if(x.equals(E))c=e;else{const D=t.filter.updateChild(l.getNode(),d,E,g,u,o);c=Xn(e,D,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ac(t,e){return t.eventCache.isCompleteForChild(e)}function Nm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=_e(n,c);ac(e,$(u))&&(l=Hr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=_e(n,c);ac(e,$(u))||(l=Hr(t,l,u,a,i,r,o))}),l}function uc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Wr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;G(n)?a=s:a=new ce(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((d,g)=>{if(u.hasChild(d)){const x=e.serverCache.getNode().getImmediateChild(d),E=uc(t,x,g);c=ci(t,c,new te(d),E,i,r,o,l)}}),a.children.inorderTraversal((d,g)=>{const x=!e.serverCache.isCompleteForChild(d)&&g.value===null;if(!u.hasChild(d)&&!x){const E=e.serverCache.getNode().getImmediateChild(d),D=uc(t,E,g);c=ci(t,c,new te(d),D,i,r,o,l)}}),c}function Rm(t,e,n,s,i,r,o){if(li(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(G(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ci(t,e,n,c.getNode().getChild(n),i,r,l,o);if(G(n)){let a=new ce(null);return c.getNode().forEachChild(xn,(u,d)=>{a=a.set(new te(u),d)}),Wr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ce(null);return s.foreach((u,d)=>{const g=_e(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Wr(t,e,n,a,i,r,l,o)}}function Am(t,e,n,s,i){const r=e.serverCache,o=Ou(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return Wu(t,o,n,s,Hu,i)}function Pm(t,e,n,s,i,r){let o;if(li(s,n)!=null)return e;{const l=new To(s,e,i),c=e.eventCache.getNode();let a;if(G(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oi(s,tn(e));else{const d=e.serverCache.getNode();S(d instanceof L,"serverChildren would be complete if leaf node"),u=Io(s,d)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let d=So(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?a=t.filter.updateChild(c,u,d,le(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,L.EMPTY_NODE,le(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oi(s,tn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||li(s,Q())!=null,Xn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bo(s.getIndex()),r=Xg(s);this.processor_=wm(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new kt(c,o.isFullyInitialized(),i.filtersNodes()),d=new kt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ki(d,u),this.eventGenerator_=new im(this.query_)}get query(){return this.query_}}function Om(t){return t.viewCache_.serverCache.getNode()}function km(t){return ri(t.viewCache_)}function Mm(t,e){const n=tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function hc(t){return t.eventRegistrations_.length===0}function Fm(t,e){t.eventRegistrations_.push(e)}function fc(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function dc(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(S(tn(t.viewCache_),"We should always have a full cache before handling merges"),S(ri(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Sm(t.processor_,i,e,n,s);return Im(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(Cn(r,o))}),n.isFullyInitialized()&&s.push(Au(n.getNode())),Uu(t,s,n.getNode(),e)}function Uu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return rm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class Vu{constructor(){this.views=new Map}}function Bm(t){S(!ai,"__referenceConstructor has already been defined"),ai=t}function Hm(){return S(ai,"Reference.ts has not been loaded"),ai}function Wm(t){return t.views.size===0}function No(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),dc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(dc(o,e,n,s));return r}}function ju(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=oi(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=Io(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=ki(new kt(l,c,!1),new kt(s,i,!1));return new Dm(e,a)}return o}function Um(t,e,n,s,i,r){const o=ju(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Fm(o,n),Lm(o,n)}function Vm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Mt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(fc(a,n,s)),hc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(fc(c,n,s)),hc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Mt(t)&&r.push(new(Hm())(e._repo,e._path)),{removed:r,events:o}}function $u(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dt(t,e){let n=null;for(const s of t.views.values())n=n||Mm(s,e);return n}function Ku(t,e){if(e._queryParams.loadsAllData())return Fi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Gu(t,e){return Ku(t,e)!=null}function Mt(t){return Fi(t)!=null}function Fi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;function jm(t){S(!ui,"__referenceConstructor has already been defined"),ui=t}function $m(){return S(ui,"Reference.ts has not been loaded"),ui}let Km=1;class pc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=vm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qu(t,e,n,s,i){return am(t.pendingWriteTree_,e,n,s,i),i?Es(t,new en(Du(),e,n)):[]}function zt(t,e,n=!1){const s=um(t.pendingWriteTree_,e);if(hm(t.pendingWriteTree_,e)){let r=new ce(null);return s.snap!=null?r=r.set(Q(),!0):Fe(s.children,o=>{r=r.set(new te(o),!0)}),Es(t,new ii(s.path,r,n))}else return[]}function Cs(t,e,n){return Es(t,new en(Eo(),e,n))}function Gm(t,e,n){const s=ce.fromObject(n);return Es(t,new ds(Eo(),e,s))}function qm(t,e){return Es(t,new fs(Eo(),e))}function zm(t,e,n){const s=Ao(t,n);if(s){const i=Po(s),r=i.path,o=i.queryId,l=Re(r,e),c=new fs(wo(o),l);return Do(t,r,c)}else return[]}function hi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Gu(o,e))){const c=Vm(o,e,n,s);Wm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(g,x)=>Mt(x));if(u&&!d){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=Xm(g);for(let E=0;E<x.length;++E){const D=x[E],V=D.query,j=Xu(t,D);t.listenProvider_.startListening(Zn(V),ps(t,V),j.hashFn,j.onComplete)}}}!d&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(Zn(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Li(g));t.listenProvider_.stopListening(Zn(g),x)}))}Jm(t,a)}return l}function zu(t,e,n,s){const i=Ao(t,s);if(i!=null){const r=Po(i),o=r.path,l=r.queryId,c=Re(o,e),a=new en(wo(l),c,n);return Do(t,o,a)}else return[]}function Ym(t,e,n,s){const i=Ao(t,s);if(i){const r=Po(i),o=r.path,l=r.queryId,c=Re(o,e),a=ce.fromObject(n),u=new ds(wo(l),c,a);return Do(t,o,u)}else return[]}function Ur(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const E=Re(g,i);r=r||Dt(x,E),o=o||Mt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Mt(l),r=r||Dt(l,Q())):(l=new Vu,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,E)=>{const D=Dt(E,Q());D&&(r=r.updateImmediateChild(x,D))}));const a=Gu(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Li(e);S(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=Zm();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const u=Mi(t.pendingWriteTree_,i);let d=Um(l,e,n,u,r,c);if(!a&&!o&&!s){const g=Ku(l,e);d=d.concat(ex(t,e,g))}return d}function Ro(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Re(o,e),a=Dt(l,c);if(a)return a});return Fu(i,e,r,n,!0)}function Qm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const d=Re(a,n);s=s||Dt(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Dt(i,Q()):(i=new Vu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new kt(s,!0,!1):null,l=Mi(t.pendingWriteTree_,e._path),c=ju(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return km(c)}function Es(t,e){return Yu(e,t.syncPointTree_,null,Mi(t.pendingWriteTree_,Q()))}function Yu(t,e,n,s){if(G(t.path))return Qu(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Dt(i,Q()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Lu(s,o);r=r.concat(Yu(l,c,a,u))}return i&&(r=r.concat(No(i,t,s,n))),r}}function Qu(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Dt(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Lu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Qu(u,l,c,a)))}),i&&(r=r.concat(No(i,t,s,n))),r}function Xu(t,e){const n=e.query,s=ps(t,n);return{hashFn:()=>(Om(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?zm(t,n._path,s):qm(t,n._path);{const r=Q_(i,n);return hi(t,n,null,r)}}}}function ps(t,e){const n=Li(e);return t.queryToTagMap.get(n)}function Li(t){return t._path.toString()+"$"+t._queryIdentifier}function Ao(t,e){return t.tagToQueryMap.get(e)}function Po(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function Do(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Mi(t.pendingWriteTree_,e);return No(s,n,i,null)}function Xm(t){return t.fold((e,n,s)=>{if(n&&Mt(n))return[Fi(n)];{let i=[];return n&&(i=$u(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($m())(t._repo,t._path):t}function Jm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Li(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Zm(){return Km++}function ex(t,e,n){const s=e._path,i=ps(t,e),r=Xu(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,d)=>{if(!G(a)&&u&&Mt(u))return[Fi(u).query];{let g=[];return u&&(g=g.concat($u(u).map(x=>x.query))),Fe(d,(x,E)=>{g=g.concat(E)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(Zn(u),ps(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oo(n)}node(){return this.node_}}class ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new ko(this.syncTree_,n)}node(){return Ro(this.syncTree_,this.path_)}}const tx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_c=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sx(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},sx=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ix=function(t,e,n,s){return Mo(e,new ko(n,t),s)},Ju=function(t,e,n){return Mo(t,new Oo(e),n)};function Mo(t,e,n){const s=t.getPriority().val(),i=_c(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=_c(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(ue,(l,c)=>{const a=Mo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Lo(t,e){let n=e instanceof te?e:new te(e),s=t,i=$(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new Fo(i,s,r),n=le(n),i=$(n)}return s}function Rn(t){return t.node.value}function Zu(t,e){t.node.value=e,Vr(t)}function eh(t){return t.node.childCount>0}function rx(t){return Rn(t)===void 0&&!eh(t)}function Bi(t,e){Fe(t.node.children,(n,s)=>{e(new Fo(n,t,s))})}function th(t,e,n,s){n&&e(t),Bi(t,i=>{th(i,e,!0)})}function ox(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ws(t){return new te(t.parent===null?t.name:ws(t.parent)+"/"+t.name)}function Vr(t){t.parent!==null&&lx(t.parent,t.name,t)}function lx(t,e,n){const s=rx(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Vr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=/[\[\].#$\/\u0000-\u001F\u007F]/,ax=/[\[\].#$\u0000-\u001F\u007F]/,hr=10*1024*1024,nh=function(t){return typeof t=="string"&&t.length!==0&&!cx.test(t)},sh=function(t){return typeof t=="string"&&t.length!==0&&!ax.test(t)},ux=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sh(t)},hx=function(t,e,n,s){Bo(ho(t,"value"),e,n)},Bo=function(t,e,n){const s=n instanceof te?new Rg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kt(s)+" with contents = "+e.toString());if(eu(e))throw new Error(t+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>hr/3&&Di(e)>hr)throw new Error(t+"contains a string greater than "+hr+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ag(s,o),Bo(t,l,s),Pg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},ih=function(t,e,n,s){if(!sh(n))throw new Error(ho(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fx=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ih(t,e,n)},rh=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ux(n))throw new Error(ho(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ho(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!xo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function oh(t,e,n){Ho(t,n),lh(t,s=>xo(s,e))}function ct(t,e,n){Ho(t,n),lh(t,s=>ze(s,e)||ze(e,s))}function lh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(_x(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _x(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&we("event: "+n.toString()),Nn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="repo_interrupt",mx=25;class xx{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new px,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new Fo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yx(t,e,n){if(t.stats_=go(t.repoInfo_),t.forceRestClient_||eg())t.server_=new ni(t.repoInfo_,(s,i,r,o)=>{gc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{gc(t,s,i,r,o)},s=>{mc(t,s)},s=>{bx(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=rg(t.repoInfo_,()=>new sm(t.stats_,t.server_)),t.infoData_=new Jg,t.infoSyncTree_=new pc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Cs(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Uo(t,"connected",!1),t.serverSyncTree_=new pc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ct(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function vx(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wo(t){return tx({timestamp:vx(t)})}function gc(t,e,n,s,i){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ys(n,a=>xe(a));o=Ym(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=zu(t.serverSyncTree_,r,c,i)}else if(s){const c=Ys(n,a=>xe(a));o=Gm(t.serverSyncTree_,r,c)}else{const c=xe(n);o=Cs(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Wi(t,r)),ct(t.eventQueue_,l,o)}function mc(t,e){Uo(t,"connected",e),e===!1&&wx(t)}function bx(t,e){Fe(e,(n,s)=>{Uo(t,n,s)})}function Uo(t,e,n){const s=new te("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Cs(t.infoSyncTree_,s,i);ct(t.eventQueue_,s,r)}function ch(t){return t.nextWriteId_++}function Cx(t,e,n){const s=Qm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Ur(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Cs(t.serverSyncTree_,e._path,r);else{const l=ps(t.serverSyncTree_,e);o=zu(t.serverSyncTree_,e._path,r,l)}return ct(t.eventQueue_,e._path,o),hi(t.serverSyncTree_,e,n,null,!0),r},i=>(Hi(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ex(t,e,n,s,i){Hi(t,"set",{path:e.toString(),value:n,priority:s});const r=Wo(t),o=xe(n,s),l=Ro(t.serverSyncTree_,e),c=Ju(o,l,r),a=ch(t),u=qu(t.serverSyncTree_,e,c,a,!0);Ho(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const E=g==="ok";E||Me("set at "+e+" failed: "+g);const D=zt(t.serverSyncTree_,a,!E);ct(t.eventQueue_,e,D),Nx(t,i,g,x)});const d=dh(t,e);Wi(t,d),ct(t.eventQueue_,d,[])}function wx(t){Hi(t,"onDisconnectEvents");const e=Wo(t),n=si();Fr(t.onDisconnect_,Q(),(i,r)=>{const o=ix(i,r,t.serverSyncTree_,e);Pu(n,i,o)});let s=[];Fr(n,Q(),(i,r)=>{s=s.concat(Cs(t.serverSyncTree_,i,r));const o=dh(t,i);Wi(t,o)}),t.onDisconnect_=si(),ct(t.eventQueue_,Q(),s)}function Ix(t,e,n){let s;$(e._path)===".info"?s=Ur(t.infoSyncTree_,e,n):s=Ur(t.serverSyncTree_,e,n),oh(t.eventQueue_,e._path,s)}function Sx(t,e,n){let s;$(e._path)===".info"?s=hi(t.infoSyncTree_,e,n):s=hi(t.serverSyncTree_,e,n),oh(t.eventQueue_,e._path,s)}function Tx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gx)}function Hi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Nx(t,e,n,s){e&&Nn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ah(t,e,n){return Ro(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Vo(t,e=t.transactionQueueTree_){if(e||Ui(t,e),Rn(e)){const n=hh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Rx(t,ws(e),n)}else eh(e)&&Bi(e,n=>{Vo(t,n)})}function Rx(t,e,n){const s=n.map(a=>a.currentWriteId),i=ah(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Re(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Hi(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const d=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(zt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&d.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Ui(t,Lo(t.transactionQueueTree_,e)),Vo(t,t.transactionQueueTree_),ct(t.eventQueue_,e,u);for(let g=0;g<d.length;g++)Nn(d[g])}else{if(a==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Me("transaction at "+c.toString()+" failed: "+a);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=a}Wi(t,e)}},o)}function Wi(t,e){const n=uh(t,e),s=ws(n),i=hh(t,n);return Ax(t,i,s),s}function Ax(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Re(n,c.path);let u=!1,d;if(S(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=mx)u=!0,d="maxretry",i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=ah(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Bo("transaction failed: Data returned ",x,c.path);let E=xe(x);typeof x=="object"&&x!=null&&yt(x,".priority")||(E=E.updatePriority(g.getPriority()));const V=c.currentWriteId,j=Wo(t),p=Ju(E,g,j);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=p,c.currentWriteId=ch(t),o.splice(o.indexOf(V),1),i=i.concat(qu(t.serverSyncTree_,c.path,p,c.currentWriteId,c.applyLocally)),i=i.concat(zt(t.serverSyncTree_,V,!0))}else u=!0,d="nodata",i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ui(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Nn(s[l]);Vo(t,t.transactionQueueTree_)}function uh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Rn(s)===void 0;)s=Lo(s,n),e=le(e),n=$(e);return s}function hh(t,e){const n=[];return fh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function fh(t,e,n){const s=Rn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Bi(e,i=>{fh(t,i,n)})}function Ui(t,e){const n=Rn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Zu(e,n.length>0?n:void 0)}Bi(e,s=>{Ui(t,s)})}function dh(t,e){const n=ws(uh(t,e)),s=Lo(t.transactionQueueTree_,e);return ox(s,i=>{fr(t,i)}),fr(t,s),th(s,i=>{fr(t,i)}),n}function fr(t,e){const n=Rn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zu(e,void 0):n.length=r+1,ct(t.eventQueue_,ws(e),i);for(let o=0;o<s.length;o++)Nn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Dx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const xc=function(t,e){const n=Ox(t),s=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new te(n.pathString)}},Ox=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Px(t.substring(u,d)));const g=Dx(t.substring(Math.min(t.length,d)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class Mx{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:bu(this._path)}get ref(){return new vt(this._repo,this._path)}get _queryIdentifier(){const e=sc(this._queryParams),n=po(e);return n==="{}"?"default":n}get _queryObject(){return sc(this._queryParams)}isEqual(e){if(e=Sn(e),!(e instanceof jo))return!1;const n=this._repo===e._repo,s=xo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ng(this._path)}}class vt extends jo{constructor(e,n){super(e,n,new Co,!1)}get parent(){const e=Eu(this._path);return e===null?null:new vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),s=jr(this.ref,e);return new _s(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,jr(this.ref,s),ue)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Os(t,e){return t=Sn(t),t._checkNotDeleted("ref"),e!==void 0?jr(t._root,e):t._root}function jr(t,e){return t=Sn(t),$(t._path)===null?fx("child","path",e):ih("child","path",e),new vt(t._repo,_e(t._path,e))}function Fx(t){return rh("remove",t._path),_h(t,null)}function _h(t,e){t=Sn(t),rh("set",t._path),hx("set",e,t._path);const n=new Pi;return Ex(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Lx(t){t=Sn(t);const e=new ph(()=>{}),n=new Vi(e);return Cx(t._repo,t,n).then(s=>new _s(s,new vt(t._repo,t._path),t._queryParams.getIndex()))}class Vi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new kx("value",this,new _s(e.snapshotNode,new vt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mx(this,e,n):null}matches(e){return e instanceof Vi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Bx(t,e,n,s,i){const r=new ph(n,void 0),o=new Vi(r);return Ix(t._repo,t,o),()=>Sx(t._repo,t,o)}function Hx(t,e,n,s){return Bx(t,"value",e)}Bm(vt);jm(vt);/**
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
 */const Wx="FIREBASE_DATABASE_EMULATOR_HOST",$r={};let Ux=!1;function Vx(t,e,n,s){t.repoInfo_=new fu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function jx(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xc(r,i),l=o.repoInfo,c;typeof process<"u"&&Hl&&(c=Hl[Wx]),c?(r=`http://${c}?ns=${l.namespace}`,o=xc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new ng(t.name,t.options,e);dx("Invalid Firebase Database URL",o),G(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Kx(l,t,a,new tg(t,n));return new Gx(u,t)}function $x(t,e){const n=$r[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Tx(t),delete n[t.key]}function Kx(t,e,n,s){let i=$r[e.name];i||(i={},$r[e.name]=i);let r=i[t.toURLString()];return r&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xx(t,Ux,n,s),i[t.toURLString()]=r,r}class Gx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&($x(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function qx(t=S_(),e){const n=b_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=up("database");s&&zx(n,...s)}return n}function zx(t,e,n,s={}){t=Sn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Qs(s,r.repoInfo_.emulatorOptions))return;mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Bs(Bs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:hp(s.mockUserToken,t.app.options.projectId);o=new Bs(l)}Vx(r,i,s,o)}/**
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
 */function Yx(t){H_(I_),Js(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jx(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(Wl,Ul,t),gn(Wl,Ul,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Yx();const Ct=di;(function(t,e){const n=di,s=t();for(;;)try{if(-parseInt(n(277))/1*(-parseInt(n(291))/2)+-parseInt(n(284))/3+-parseInt(n(278))/4*(parseInt(n(285))/5)+parseInt(n(289))/6+-parseInt(n(283))/7+-parseInt(n(281))/8*(parseInt(n(290))/9)+parseInt(n(276))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(fi,168315);function fi(){const t=["720775593565","1731996qyzpbV","631407LlGdBF","247425asiCbo","iamwait.firebasestorage.app","1:720775593565:web:1a263bf6a87ecfea3817b4","G-3RRDNZ9ME5","1705806TrwNJx","531AlfoKp","154BxScjx","iamwait","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","3065200SaMxnS","1549XrOfpX","4NTzNFl","iamwait.firebaseapp.com","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","4664vnkvkd"];return fi=function(){return t},fi()}function di(t,e){const n=fi();return di=function(s,i){return s=s-276,n[s]},di(t,e)}const Qx={apiKey:Ct(293),authDomain:Ct(279),databaseURL:Ct(280),projectId:Ct(292),storageBucket:Ct(286),messagingSenderId:Ct(282),appId:Ct(287),measurementId:Ct(288)},Xx=za(Qx),ks=qx(Xx),dr=St;(function(t,e){const n=St,s=t();for(;;)try{if(-parseInt(n(390))/1+-parseInt(n(417))/2*(parseInt(n(399))/3)+parseInt(n(413))/4*(parseInt(n(400))/5)+parseInt(n(386))/6*(-parseInt(n(402))/7)+-parseInt(n(411))/8*(parseInt(n(405))/9)+-parseInt(n(394))/10+-parseInt(n(419))/11*(-parseInt(n(410))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(pi,858782);const gh=Jd("fbStore2",{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:4}),actions:{async getField(t){const e=St,n={gKmBI:function(i,r){return i(r)},YKpkN:function(i,r){return i+r},yiVXP:function(i,r){return i(r)},ywihw:e(418),SKBRF:function(i,r,o){return i(r,o)}},s=n[e(397)](Os,ks,t);return Lx(s)[e(396)](i=>{const r=e;if(i[r(392)]()){const o=i[r(409)]();return n[r(398)](Hn,n[r(420)](r(389)+t+" = ",JSON[r(403)](o))),o}else n[r(407)](Hn,n.YKpkN(t,n[r(416)]))})},async setField(t,e){const n=St,s={GpcEK:function(r,o){return r+o},HdUFB:n(415),aMWDx:n(391),geltQ:function(r,o,l){return r(o,l)},WSbva:function(r,o,l){return r(o,l)}},i=s[n(393)](Os,ks,t);return s.WSbva(_h,i,e)[n(396)](()=>{Hn(s.GpcEK(t,s.HdUFB))})[n(395)](r=>{console.error(s[n(414)],r)})},async onValue(t){const e=St,n={QtiNG:function(i,r){return i(r)},yQozv:function(i,r,o){return i(r,o)}},s=n[e(385)](Os,ks,t);Hx(s,i=>{const r=e;n[r(408)](Hn,r(406)+t+" на прослушке"),this.lookField=i[r(409)]()})},async removeField(t){const e=St,n={tRVhG:function(i,r,o){return i(r,o)}};console.log(t);const s=n[e(401)](Os,ks,t);Fx(s).then(()=>{const i=e;Hn(i(421)+t+i(404))})}}}),Hn=t=>console[dr(388)](dr(412)+t,dr(387));function St(t,e){const n=pi();return St=function(s,i){return s=s-385,n[s]},St(t,e)}function pi(){const t=["176aLIpBm","%c ","1045536LiZyke","aMWDx"," -  данные записаны","ywihw","52XPkQZj"," : данные не найдены","11EbfxYk","YKpkN","Данные ","yQozv","42DmfwEn","color: darkgreen","log",">>> Данные по ","1533474VjMnIv","Ошибка записи данных: ","exists","geltQ","15373690ruAQgo","catch","then","SKBRF","gKmBI","86109VKDyCS","15EnNOKt","tRVhG","66822rHRacx","stringify"," удалены!","363483LmcpOk","########### ########## Данные ","yiVXP","QtiNG","val","58165044XjXQOB"];return pi=function(){return t},pi()}const $o=wn;(function(t,e){const n=wn,s=t();for(;;)try{if(-parseInt(n(600))/1+parseInt(n(511))/2*(-parseInt(n(535))/3)+parseInt(n(556))/4*(-parseInt(n(469))/5)+-parseInt(n(440))/6*(parseInt(n(567))/7)+parseInt(n(457))/8+parseInt(n(444))/9*(parseInt(n(462))/10)+parseInt(n(480))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(_i,260451);const Jx={key:0},Zx={key:0},e0=[$o(459)],t0={key:1},n0={key:0},s0=[$o(459)],i0={key:1,class:"red-notice"},r0={key:2},o0={key:3},l0={key:4};function wn(t,e){const n=_i();return wn=function(s,i){return s=s-437,n[s]},wn(t,e)}const c0=_f({__name:"BinderComp",props:{game:{}},setup(t){const e=$o,n={oFtzW:e(449),PGmeo:function(p,f){return p(f)},LBBxv:function(p,f){return p*f},SyODb:e(519),qPJwt:function(p,f){return p(f)},VoFFa:function(p,f){return p+f},ZxeRz:e(524),tvWIu:function(p,f){return p+f},KwMKz:function(p,f){return p+f},ayZWR:e(555),IwzYg:function(p,f){return p+f},BTdAp:e(477),OPKuo:e(502),YkAmW:function(p,f){return p===f},ecIii:function(p,f){return p==f},dvFJg:function(p,f){return p>f},mFkVU:function(p){return p()},SBKyX:e(589),pmRHc:function(p,f){return p(f)},YgInv:"g1/look",gwsHU:function(p,f,h){return p(f,h)},HoVnS:function(p){return p()},SeLko:e(474),BSMDh:function(p,f,h){return p(f,h)},NTlRP:function(p){return p()},qwTXr:function(p,f){return p+f},knHaY:e(501),ifMnQ:function(p,f){return p+f},GAHNZ:function(p,f){return p+f},oVBpo:function(p,f){return p+f},rpOdw:function(p,f){return p+f},ypgtS:e(566),dAogm:"> >> > >> gotoStartgane",lcIxp:function(p,f){return p+f},fRgku:e(518),jQnjY:e(460),bsrZK:"ВСЕ НАСТРОЙКИ ИГРЫ",eoUxw:function(p){return p()},NbURV:function(p){return p()},LnwBP:e(596),PUgKV:function(p,f,h,v,R,ne){return p(f,h,v,R,ne)},PwSlM:e(529),FrGAM:function(p){return p()},PjKdn:function(p,f,h,v,R){return p(f,h,v,R)},MUFim:function(p,f,h,v,R){return p(f,h,v,R)},dTUci:"::::::: Связывание :::::::",bOXBo:function(p,f,h,v,R){return p(f,h,v,R)},fqUXc:function(p,f){return p+f},fdUWg:e(541),LQKmo:function(p,f){return p+f},txAkZ:" stage:",jkYTH:function(p,f){return p(f)},fCoNz:function(p,f){return p(f)},VxFOq:function(p,f,h,v){return p(f,h,v)},tWqRp:function(p,f){return p+f},wrkoK:e(437),zJVjC:function(p,f){return p(f)},HfauY:function(p,f,h,v){return p(f,h,v)},tyANP:function(p,f,h,v,R){return p(f,h,v,R)},NduDw:e(515),EGfDQ:e(533),aFXjT:e(483),bUGRE:function(p,f,h,v,R){return p(f,h,v,R)},GvTfa:e(602),iaOnb:e(503),gTAqi:function(p,f){return p>f},xJKmy:function(p){return p()},BjJAr:function(p,f,h,v,R){return p(f,h,v,R)},Sfqgv:"Список желающих играть:",mwIBl:function(p,f,h,v,R){return p(f,h,v,R)},iLiVZ:function(p,f,h){return p(f,h)},NHjAo:e(537),mDGqV:e(441),gIWaK:function(p,f,h){return p(f,h)},lTJLG:function(p){return p()},iKnSf:function(p,f,h,v){return p(f,h,v)},VToqT:function(p){return p()},mIImT:function(p,f,h,v){return p(f,h,v)},DmFbN:e(577),AzHrn:function(p,f,h,v,R){return p(f,h,v,R)},nrunm:function(p,f,h,v,R){return p(f,h,v,R)},gOyBu:function(p,f,h){return p(f,h)},mAdKH:function(p){return p()},dDylQ:e(544),sqPhH:function(p,f){return p===f},YYwUV:function(p,f){return p(f)},efMKR:function(p){return p()},EdhGO:" Жду игрока ",mQFMB:", поеп не откликнится ",KkGGH:function(p,f,h){return p(f,h)},jEnsC:function(p,f){return p===f},TIRCp:function(p,f,h,v,R){return p(f,h,v,R)},PlXRk:function(p,f,h,v,R){return p(f,h,v,R)},qkMDM:function(p,f,h,v,R){return p(f,h,v,R)},UaxWL:e(531),eZAQV:function(p,f,h,v){return p(f,h,v)},xAqZA:e(578),yywQD:"Играем",NJPCI:" с игроком ",gQHeA:function(p,f,h,v,R){return p(f,h,v,R)},yxTjB:function(p,f){return p(f)},oHYpK:e(594),NwQOt:function(p,f,h){return p(f,h)},FwTRU:function(p,f,h,v,R){return p(f,h,v,R)},XXKFc:function(p,f,h,v,R){return p(f,h,v,R)},EQEBj:"myNickName"},s=gh(),i=n.YYwUV(Gt,localStorage[e(471)](n[e(585)])),r=Gt([]),o=n[e(505)](Gt),l=Gt(),c=n[e(558)](Gt,""),a=function(){const p=e;location.href.includes(n.oFtzW)&&(s[p(563)]=s[p(563)]||n[p(558)](parseInt,n[p(558)](String,n.LBBxv(Math[p(546)](),1e3))),s[p(486)]=s[p(526)]||s[p(486)]||n[p(508)]+parseInt(n.qPJwt(String,n[p(534)](Math[p(546)](),100))))},u=function(){const p=e;s.nickName=i[p(452)],i.value&&localStorage[p(553)](p(559),i[p(452)])};function d(){const p=e;console[p(574)](p(573),t[p(586)]),s.getField(n[p(450)](n[p(560)](t[p(586)],n[p(581)]),s.myId))[p(484)](f=>{const h=p;f?(o[h(452)]={id:f.id,name:n[h(564)](n[h(564)](f[h(548)],n[h(472)]),f.id)},s[h(488)]=5,s.getField(n[h(450)](n.KwMKz(t[h(586)],n[h(527)]),f[h(586)])).then(v=>{c.value=v})):(x(),s[h(488)]=1)})}const g=function(p){const f=e;console[f(574)](f(588),p),r[f(452)]=[],s[f(488)]=1;let h=!1;p&&Object.keys(p)[f(499)](v=>{const R=f,ne=n[R(453)][R(504)]("|");let O=0;for(;;){switch(ne[O++]){case"0":n[R(568)](v,n[R(550)](String,s[R(563)]))&&v&&(h=!0,s[R(488)]=2,p[v][R(490)]&&(o[R(452)]={id:p[v].id2,name:p[v][R(443)]},s[R(488)]=4));continue;case"1":n[R(448)](p[v][R(490)],s[R(563)])&&(h=!0,s[R(488)]=3);continue;case"2":v&&p[v]&&r[R(452)].push({id:v,name:p[v][R(548)]});continue;case"3":if(n[R(475)](s[R(488)],3))return!1;continue;case"4":p[v].accept&&n[R(539)](j);continue;case"5":n[R(475)](s[R(488)],2)&&!h&&(console[R(574)](n[R(493)]),n[R(539)](alert),location[R(575)]());continue}break}})};function x(){const p=e,f={GCrWN:function(h,v){return n[wn(593)](h,v)}};s.onValue(n[p(542)])[p(484)](h=>{const v=p;console[v(574)]("111",h),f[v(523)](g,h)}),n[p(570)](_n,()=>s[p(512)],h=>g(h)),_n(()=>s[p(563)],()=>setTimeout(d,500))}function E(){const p=e;n[p(579)](a),s.setField(n[p(442)]("g1/look/",s.myId),{name:s[p(526)]||s[p(486)]})}function D(p){const f=e;if(n.ecIii(p.id,s[f(563)]))return l[f(452)]=!0,n[f(595)](setTimeout,()=>l[f(452)]=!1,1500),!1;n.NTlRP(a),s[f(509)](n[f(530)](n.knHaY,p.id),{name:p[f(548)],id2:s[f(563)],name2:s[f(486)]})[f(484)](h=>{const v=f;console[v(574)](n[v(458)],h),o[v(452)]={id:p.id,name:p.name},s.stage=3})}function V(p){const f=e;a(),p&&o.value&&s[f(509)](n[f(590)](n[f(561)],o[f(452)].id),{name:o[f(452)][f(548)],id2:s[f(563)],name2:s.myName,accept:!0})[f(484)](h=>{console.log(n[f(458)],h)})}function j(){var v,R,ne;const p=e;let f=Date[p(445)](),h=String(o.value.id);n.dvFJg(o.value.id,s[p(563)])?h+=n[p(492)]("::",s[p(563)]):h=n[p(450)](s.myId+"::",h),console[p(574)](n[p(467)],h),console[p(574)](n[p(446)]),s[p(509)](n[p(481)](n[p(583)],s.myId),{id:(v=o[p(452)])==null?void 0:v.id,name:(R=o[p(452)])==null?void 0:R[p(548)],game:h,date:f}),s.setField(n[p(583)]+((ne=o[p(452)])==null?void 0:ne.id),{id:s[p(563)],name:s[p(486)],game:h,date:f}),s.setField(n[p(540)]+h,{game:n[p(461)]}),setTimeout(()=>{var M;const O=p;s[O(451)](n.GAHNZ(n[O(561)],(M=o[O(452)])==null?void 0:M.id)),s[O(451)](n.oVBpo(O(501),s[O(563)])),location.reload()},2e3)}return n[e(593)](lo,()=>{n[e(557)](d)}),(p,f)=>{var R,ne;const h=e,v={CjFVZ:function(O){return n[wn(478)](O)},GmowA:function(O,M,Z,ve,Ae,Ue){return O(M,Z,ve,Ae,Ue)},PUVTh:n[h(536)],jgrOX:function(O,M,Z,ve,Ae,Ue){return n[h(543)](O,M,Z,ve,Ae,Ue)},JChaI:n[h(522)],jokyT:function(O,M){return n[h(593)](O,M)}};return n.FrGAM(be),n[h(554)](De,je,null,[f[32]||(f[32]=W("hr",null,null,-1)),f[33]||(f[33]=n[h(506)](W,"i",null,n[h(496)],-1)),f[34]||(f[34]=n[h(592)](W,"br",null,null,-1)),n[h(570)](ut,n[h(481)](n[h(442)](n[h(517)](" ",Ge(Ve(s)[h(563)]))+n[h(569)],n[h(558)](Ge,Ve(s)[h(486)]))," "),1),f[35]||(f[35]=n[h(506)](W,"br",null,null,-1)),ut(n[h(442)](n.LQKmo(n[h(597)],n[h(593)](Ge,n[h(468)](Ve,s)[h(488)]))," "),1),f[36]||(f[36]=W("hr",null,null,-1)),n[h(568)](n[h(601)](Ve,s).stage,1)?(n[h(516)](be),n[h(584)](De,h(577),Jx,[n.MUFim(W,"p",null,n.tWqRp(n[h(447)],n[h(591)](Ge,Ve(s)[h(526)]||Ve(s).myName))+h(580),1),n[h(547)](W,"p",null,[ff(n[h(456)](W,h(465),{"onUpdate:modelValue":f[0]||(f[0]=O=>i[h(452)]=O),maxlength:"16",style:{"font-size":"larger",padding:n.NduDw,"text-align":n[h(438)]},onInput:f[1]||(f[1]=O=>u()),placeholder:n[h(485)]},null,544),[[Wd,i.value]])]),f[8]||(f[8]=n[h(538)](W,h(577),{class:n[h(532)]},n.iaOnb,-1)),r[h(452)]&&n[h(528)](r.value[h(473)],1)?(n[h(470)](be),n[h(547)](De,"div",Zx,[f[5]||(f[5]=n[h(572)](W,"h3",null,n[h(525)],-1)),(be(!0),n[h(538)](De,je,null,n[h(570)](el,r.value,O=>{const M=h;return v[M(455)](be),v.GmowA(De,"button",{class:v[M(552)],key:O.id,onClick:Z=>D(O)},Ge(O[M(548)]),9,e0)}),128)),f[6]||(f[6]=n[h(538)](W,"br",null,null,-1)),f[7]||(f[7]=n[h(498)](W,"br",null,null,-1))])):n[h(549)](bt,"",!0),n[h(547)](W,n.PwSlM,{class:n.NHjAo,onClick:f[2]||(f[2]=O=>E())},n[h(489)]),f[9]||(f[9]=W("br",null,null,-1)),f[10]||(f[10]=W("br",null,null,-1))])):n[h(587)](bt,"",!0),Ve(s)[h(488)]===2?(n[h(505)](be),n[h(571)](De,h(577),t0,[f[14]||(f[14]=n[h(554)](W,"p",null,h(497),-1)),r[h(452)].length?(n[h(454)](be),n.mIImT(De,n[h(545)],n0,[f[11]||(f[11]=n[h(491)](W,"h3",null,n[h(525)],-1)),(be(!0),n[h(592)](De,je,null,n.gIWaK(el,r[h(452)],O=>{const M=h;return v[M(455)](be),v[M(551)](De,v.JChaI,{class:v[M(552)],key:O.id,onClick:Z=>D(O)},v.jokyT(Ge,O.name),9,s0)}),128)),f[12]||(f[12]=n[h(592)](W,"br",null,null,-1)),f[13]||(f[13]=n[h(521)](W,"br",null,null,-1))])):n[h(598)](bt,"",!0),l[h(452)]?(n[h(513)](be),n.VxFOq(De,n.DmFbN,i0,n[h(476)])):n[h(595)](bt,"",!0)])):n[h(595)](bt,"",!0),n[h(466)](n[h(520)](Ve,s).stage,3)?(n[h(463)](be),De(h(577),r0,[n[h(571)](W,"p",null,[f[15]||(f[15]=n.YYwUV(ut,n.EdhGO)),n[h(538)](W,"b",null,Ge((R=o[h(452)])==null?void 0:R.name),1),f[16]||(f[16]=n[h(593)](ut,n[h(487)]))]),f[17]||(f[17]=W("h3",null,n.Sfqgv,-1))])):n.KkGGH(bt,"",!0),n[h(514)](Ve(s).stage,4)&&((ne=o[h(452)])!=null&&ne.id)?(be(),n[h(464)](De,"div",o0,[f[18]||(f[18]=n[h(601)](ut,h(507))),f[19]||(f[19]=n[h(479)](W,"br",null,null,-1)),f[20]||(f[20]=n[h(495)](W,"br",null,null,-1)),W("b",null,n[h(558)](Ge,o[h(452)][h(548)]),1),f[21]||(f[21]=n[h(538)](W,"br",null,null,-1)),f[22]||(f[22]=n.qkMDM(W,"br",null,null,-1)),W(n[h(522)],{class:"green-bt",onClick:f[3]||(f[3]=O=>V(!1))},n[h(599)]),n[h(576)](W,n[h(522)],{class:n[h(536)],onClick:f[4]||(f[4]=O=>V(!0))},n.xAqZA)])):n.BSMDh(bt,"",!0),n[h(466)](n.pmRHc(Ve,s)[h(488)],5)&&o.value?(be(),n[h(576)](De,n.DmFbN,l0,[f[23]||(f[23]=W("h3",null,n[h(510)],-1)),f[24]||(f[24]=n.zJVjC(ut,n.NJPCI)),f[25]||(f[25]=n[h(498)](W,"br",null,null,-1)),W("b",null,n[h(558)](Ge,o[h(452)][h(548)]),1),f[26]||(f[26]=n[h(582)](W,"br",null,null,-1)),f[27]||(f[27]=n.bOXBo(W,"br",null,null,-1)),f[28]||(f[28]=n[h(482)](ut,n[h(494)])),f[29]||(f[29]=n[h(500)](W,"br",null,null,-1)),n[h(439)](ut,n[h(590)](" ",n[h(550)](Ge,c[h(452)]))+" ",1),f[30]||(f[30]=W("br",null,null,-1)),f[31]||(f[31]=n[h(562)](W,"br",null,null,-1))])):bt("",!0),f[37]||(f[37]=W("br",null,null,-1)),f[38]||(f[38]=n[h(565)](W,"br",null,null,-1))],64)}}});function _i(){const t=["dDylQ","/play/","NbURV","TIRCp","8510436WAXVeG","lcIxp","yxTjB","Сменить nickName","then","aFXjT","myName","mQFMB","stage","mDGqV","id2","AzHrn","rpOdw","SBKyX","oHYpK","PlXRk","dTUci","Добавился в список, жду","mwIBl","forEach","qkMDM","g1/look/","3|0|1|5|4|2","* тут можно поменять ваш Никнейм","split","lTJLG","MUFim"," Вас выбрал игрок: ","SyODb","setField","yywQD","6GilTrr","lookField","mAdKH","jEnsC","4px","NTlRP","fqUXc","g1/play/","Имя","YYwUV","nrunm","PwSlM","GCrWN","::::","Sfqgv","nickName","ayZWR","gTAqi","button","qwTXr","Отказаться","GvTfa","center","LBBxv","222231cDqbPL","LnwBP","red-bt","bUGRE","mFkVU","jQnjY"," : ","YgInv","PUgKV","* нельзя выбирать себя","DmFbN","random","HfauY","name","iLiVZ","qPJwt","jgrOX","PUVTh","setItem","PjKdn","/game/","1234060BHeJMk","eoUxw","PGmeo","myNickName","IwzYg","knHaY","FwTRU","myId","VoFFa","XXKFc","gameLink","14tFKsnK","YkAmW","fdUWg","gwsHU","iKnSf","BjJAr","game = ","log","reload","eZAQV","div","Согласиться","HoVnS"," ! ","BTdAp","gQHeA","fRgku","VxFOq","EQEBj","game","gIWaK","ANALIZ ","................ОБНОВИЛСЯ А Я ПРОПАЛ","ifMnQ","zJVjC","bOXBo","pmRHc"," Контекс игры:","BSMDh","green-bt","txAkZ","gOyBu","UaxWL","321393befNDv","fCoNz","red-notice"," Привет, ","EGfDQ","NwQOt","1128534jivjdK"," Зарегистрироваться в поиске ","KwMKz","name2","9KvOdXs","now","dAogm","wrkoK","ecIii","localhost:","tvWIu","removeField","value","OPKuo","VToqT","CjFVZ","tyANP","1994168ODmpAa","SeLko","onClick","g1/game/","bsrZK","4658210YOLZOt","efMKR","mIImT","input","sqPhH","ypgtS","jkYTH","5IToZQj","xJKmy","getItem","ZxeRz","length","res","dvFJg"];return _i=function(){return t},_i()}const a0={class:"game"},u0={__name:"RockPaperSScissors",setup(t){return(e,n)=>(be(),De("div",a0,[n[0]||(n[0]=W("h1",null,"♕",-1)),n[1]||(n[1]=W("h2",null,null,-1)),W("div",null,[ot(c0,{game:"g1"})])]))}},h0=Zd(u0,[["__scopeId","data-v-7afa5ccc"]]),f0={__name:"App",setup(t){const e=gh();let n=Xh(h0);return lo(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"")}),(s,i)=>(be(),Ia(Nf(Ve(n))))}},yc=mi;(function(t,e){const n=mi,s=t();for(;;)try{if(-parseInt(n(168))/1+-parseInt(n(177))/2+parseInt(n(175))/3*(-parseInt(n(170))/4)+parseInt(n(169))/5*(parseInt(n(173))/6)+parseInt(n(171))/7+-parseInt(n(172))/8+parseInt(n(167))/9*(parseInt(n(176))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,812787);function gi(){const t=["2991084NyohHo","mount","27775773tdwcbv","1312920lsnTZM","2444390EoyGGq","20dUWFjv","8797579rqbNGU","10784248iAkjBz","12XGrHhN","#app","210882cFHObT","10sqogVo"];return gi=function(){return t},gi()}const d0=Gd(),vc=jd(f0);function mi(t,e){const n=gi();return mi=function(s,i){return s=s-166,n[s]},mi(t,e)}vc.use(d0),vc[yc(166)](yc(174));
