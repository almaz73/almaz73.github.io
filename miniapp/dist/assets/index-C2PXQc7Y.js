function Ws(t,e){const n=Us();return Ws=function(s,i){return s=s-247,n[s]},Ws(t,e)}(function(t,e){const n=Ws,s=t();for(;;)try{if(parseInt(n(251))/1+-parseInt(n(261))/2*(parseInt(n(281))/3)+parseInt(n(271))/4*(parseInt(n(264))/5)+-parseInt(n(248))/6+parseInt(n(280))/7*(parseInt(n(265))/8)+parseInt(n(247))/9*(-parseInt(n(284))/10)+-parseInt(n(269))/11*(parseInt(n(266))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Us,278313),function(){const e=Ws,n={JlatQ:function(o,l){return o!==l},VQRGm:e(274),abxsD:function(o,l){return o===l},gscSY:e(250),aBKjU:function(o,l){return o===l},NWQYS:e(272),FPWSj:function(o,l){return o(l)},vokOm:e(279),YjLBF:e(249),Vmkze:e(253),ekslf:function(o,l,c){return o(l,c)},QiUnk:function(o,l){return o(l)}},s=document[e(252)](e(254))[e(288)];if(s&&s.supports&&s[e(259)](n[e(267)]))return;for(const o of document[e(273)]('link[rel="modulepreload"]'))n[e(258)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n.JlatQ(c[l(270)],n[l(275)]))for(const a of c[l(255)])n[l(276)](a[l(285)],n[l(277)])&&n[l(268)](a[l(283)],n[l(267)])&&n[l(289)](r,a)})[e(260)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(257)]&&(c[l(257)]=o[l(257)]),o[l(286)]&&(c[l(286)]=o[l(286)]),o[l(282)]===n[l(278)]?c[l(263)]=n.YjLBF:n[l(276)](o[l(282)],"anonymous")?c.credentials=l(262):c[l(263)]=n[l(287)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n.FPWSj(i,o);n[l(256)](fetch,o.href,c)}}();function Us(){const t=["36IFnCUR","NWQYS","aBKjU","1166737FCTEcS","type","244GJbMUu","modulepreload","querySelectorAll","childList","VQRGm","abxsD","gscSY","vokOm","use-credentials","910eHeEsz","99LNFyVB","crossOrigin","rel","3933310jAHbcQ","tagName","referrerPolicy","Vmkze","relList","FPWSj","9ibtykb","543618mvuCfV","include","LINK","341842DsqlZH","createElement","same-origin","link","addedNodes","ekslf","integrity","QiUnk","supports","observe","1784AMqTuC","omit","credentials","24860bVFoKl","28600fGjCUf"];return Us=function(){return t},Us()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},fn=[],rt=()=>{},vh=()=>!1,yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Yr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ch=Object.prototype.hasOwnProperty,X=(t,e)=>Ch.call(t,e),W=Array.isArray,dn=t=>vi(t)==="[object Map]",bc=t=>vi(t)==="[object Set]",H=t=>typeof t=="function",de=t=>typeof t=="string",kt=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Ec=t=>(ae(t)||H(t))&&H(t.then)&&H(t.catch),Ic=Object.prototype.toString,vi=t=>Ic.call(t),bh=t=>vi(t).slice(8,-1),wc=t=>vi(t)==="[object Object]",Qr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ci=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Eh=/-(\w)/g,$e=Ci(t=>t.replace(Eh,(e,n)=>n?n.toUpperCase():"")),Ih=/\B([A-Z])/g,tn=Ci(t=>t.replace(Ih,"-$1").toLowerCase()),bi=Ci(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gi=Ci(t=>t?`on${bi(t)}`:""),wt=(t,e)=>!Object.is(t,e),Ms=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},_r=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qo;const Ei=()=>Qo||(Qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?Nh(s):Xr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(de(t)||ae(t))return t}const wh=/;(?![^(]*\))/g,Sh=/:([^]+)/,Th=/\/\*[^]*?\*\//g;function Nh(t){const e={};return t.replace(Th,"").split(wh).forEach(n=>{if(n){const s=n.split(Sh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(de(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ah=qr(Rh);function Tc(t){return!!t||t===""}const Nc=t=>!!(t&&t.__v_isRef===!0),Ge=t=>de(t)?t:t==null?"":W(t)||ae(t)&&(t.toString===Ic||!H(t.toString))?Nc(t)?Ge(t.value):JSON.stringify(t,Rc,2):String(t),Rc=(t,e)=>Nc(e)?Rc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ki(s,r)+" =>"]=i,n),{})}:bc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ki(n))}:kt(e)?Ki(e):ae(e)&&!W(e)&&!wc(e)?String(e):e,Ki=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Ac{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Pc(t){return new Ac(t)}function Dc(){return Se}function Ph(t,e=!1){Se&&Se.cleanups.push(t)}let ie;const qi=new WeakSet;class Oc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qi.has(this)&&(qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xo(this),Fc(this);const e=ie,n=Ye;ie=this,Ye=!0;try{return this.fn()}finally{Lc(this),ie=e,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)to(e);this.deps=this.depsTail=void 0,Xo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gr(this)&&this.run()}get dirty(){return gr(this)}}let kc=0,Hn,Vn;function Mc(t,e=!1){if(t.flags|=8,e){t.next=Vn,Vn=t;return}t.next=Hn,Hn=t}function Zr(){kc++}function eo(){if(--kc>0)return;if(Vn){let e=Vn;for(Vn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hn;){let e=Hn;for(Hn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Fc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),to(s),Dh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function gr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zn))return;t.globalVersion=Zn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gr(t)){t.flags&=-3;return}const n=ie,s=Ye;ie=t,Ye=!0;try{Fc(t);const i=t.fn(t._value);(e.version===0||wt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ie=n,Ye=s,Lc(t),t.flags&=-3}}function to(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)to(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ye=!0;const Wc=[];function Mt(){Wc.push(Ye),Ye=!1}function Ft(){const t=Wc.pop();Ye=t===void 0?!0:t}function Xo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let Zn=0;class Oh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class no{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!Ye||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new Oh(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,Uc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=s)}return n}trigger(e){this.version++,Zn++,this.notify(e)}notify(e){Zr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{eo()}}}function Uc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Uc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hs=new WeakMap,zt=Symbol(""),mr=Symbol(""),es=Symbol("");function Ce(t,e,n){if(Ye&&ie){let s=Hs.get(t);s||Hs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new no),i.map=s,i.key=n),i.track()}}function ft(t,e,n,s,i,r){const o=Hs.get(t);if(!o){Zn++;return}const l=c=>{c&&c.trigger()};if(Zr(),e==="clear")o.forEach(l);else{const c=W(t),a=c&&Qr(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,g)=>{(g==="length"||g===es||!kt(g)&&g>=u)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(es)),e){case"add":c?a&&l(o.get("length")):(l(o.get(zt)),dn(t)&&l(o.get(mr)));break;case"delete":c||(l(o.get(zt)),dn(t)&&l(o.get(mr)));break;case"set":dn(t)&&l(o.get(zt));break}}eo()}function kh(t,e){const n=Hs.get(t);return n&&n.get(e)}function rn(t){const e=Y(t);return e===t?e:(Ce(e,"iterate",es),je(t)?e:e.map(be))}function Ii(t){return Ce(t=Y(t),"iterate",es),t}const Mh={__proto__:null,[Symbol.iterator](){return zi(this,Symbol.iterator,be)},concat(...t){return rn(this).concat(...t.map(e=>W(e)?rn(e):e))},entries(){return zi(this,"entries",t=>(t[1]=be(t[1]),t))},every(t,e){return at(this,"every",t,e,void 0,arguments)},filter(t,e){return at(this,"filter",t,e,n=>n.map(be),arguments)},find(t,e){return at(this,"find",t,e,be,arguments)},findIndex(t,e){return at(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return at(this,"findLast",t,e,be,arguments)},findLastIndex(t,e){return at(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return at(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yi(this,"includes",t)},indexOf(...t){return Yi(this,"indexOf",t)},join(t){return rn(this).join(t)},lastIndexOf(...t){return Yi(this,"lastIndexOf",t)},map(t,e){return at(this,"map",t,e,void 0,arguments)},pop(){return Dn(this,"pop")},push(...t){return Dn(this,"push",t)},reduce(t,...e){return Jo(this,"reduce",t,e)},reduceRight(t,...e){return Jo(this,"reduceRight",t,e)},shift(){return Dn(this,"shift")},some(t,e){return at(this,"some",t,e,void 0,arguments)},splice(...t){return Dn(this,"splice",t)},toReversed(){return rn(this).toReversed()},toSorted(t){return rn(this).toSorted(t)},toSpliced(...t){return rn(this).toSpliced(...t)},unshift(...t){return Dn(this,"unshift",t)},values(){return zi(this,"values",be)}};function zi(t,e,n){const s=Ii(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Fh=Array.prototype;function at(t,e,n,s,i,r){const o=Ii(t),l=o!==t&&!je(t),c=o[e];if(c!==Fh[e]){const f=c.apply(t,r);return l?be(f):f}let a=n;o!==t&&(l?a=function(f,g){return n.call(this,be(f),g,t)}:n.length>2&&(a=function(f,g){return n.call(this,f,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function Jo(t,e,n,s){const i=Ii(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,be(l),c,t)}),i[e](r,...s)}function Yi(t,e,n){const s=Y(t);Ce(s,"iterate",es);const i=s[e](...n);return(i===-1||i===!1)&&ro(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function Dn(t,e,n=[]){Mt(),Zr();const s=Y(t)[e].apply(t,n);return eo(),Ft(),s}const Lh=qr("__proto__,__v_isRef,__isVue"),Hc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function Bh(t){kt(t)||(t=String(t));const e=Y(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class Vc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?zh:Kc:r?Gc:$c).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let c;if(o&&(c=Mh[n]))return c;if(n==="hasOwnProperty")return Bh}const l=Reflect.get(e,n,fe(e)?e:s);return(kt(n)?Hc.has(n):Lh(n))||(i||Ce(e,"get",n),r)?l:fe(l)?o&&Qr(n)?l:l.value:ae(l)?i?qc(l):wi(l):l}}class jc extends Vc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Qt(r);if(!je(s)&&!Qt(s)&&(r=Y(r),s=Y(s)),!W(e)&&fe(r)&&!fe(s))return c?!1:(r.value=s,!0)}const o=W(e)&&Qr(n)?Number(n)<e.length:X(e,n),l=Reflect.set(e,n,s,fe(e)?e:i);return e===Y(i)&&(o?wt(s,r)&&ft(e,"set",n,s):ft(e,"add",n,s)),l}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!kt(n)||!Hc.has(n))&&Ce(e,"has",n),s}ownKeys(e){return Ce(e,"iterate",W(e)?"length":zt),Reflect.ownKeys(e)}}class Wh extends Vc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uh=new jc,Hh=new Wh,Vh=new jc(!0);const xr=t=>t,Ns=t=>Reflect.getPrototypeOf(t);function jh(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?xr:e?yr:be;return!e&&Ce(r,"iterate",c?mr:zt),{next(){const{value:f,done:g}=a.next();return g?{value:f,done:g}:{value:l?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function Rs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $h(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(wt(i,l)&&Ce(o,"get",i),Ce(o,"get",l));const{has:c}=Ns(o),a=e?xr:t?yr:be;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ce(Y(i),"iterate",zt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(wt(i,l)&&Ce(o,"has",i),Ce(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Y(l),a=e?xr:t?yr:be;return!t&&Ce(c,"iterate",zt),l.forEach((u,f)=>i.call(r,a(u),a(f),o))}};return Ie(n,t?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(i){!e&&!je(i)&&!Qt(i)&&(i=Y(i));const r=Y(this);return Ns(r).has.call(r,i)||(r.add(i),ft(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!Qt(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=Ns(o);let a=l.call(o,i);a||(i=Y(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?wt(r,u)&&ft(o,"set",i,r):ft(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Ns(r);let c=o.call(r,i);c||(i=Y(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&ft(r,"delete",i,void 0),a},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&ft(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=jh(i,t,e)}),n}function so(t,e){const n=$h(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const Gh={get:so(!1,!1)},Kh={get:so(!1,!0)},qh={get:so(!0,!1)};const $c=new WeakMap,Gc=new WeakMap,Kc=new WeakMap,zh=new WeakMap;function Yh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qh(t){return t.__v_skip||!Object.isExtensible(t)?0:Yh(bh(t))}function wi(t){return Qt(t)?t:io(t,!1,Uh,Gh,$c)}function Xh(t){return io(t,!1,Vh,Kh,Gc)}function qc(t){return io(t,!0,Hh,qh,Kc)}function io(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Qh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function St(t){return Qt(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function ro(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function oo(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Sc(t,"__v_skip",!0),t}const be=t=>ae(t)?wi(t):t,yr=t=>ae(t)?qc(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function Gt(t){return zc(t,!1)}function Jh(t){return zc(t,!0)}function zc(t,e){return fe(t)?t:new Zh(t,e)}class Zh{constructor(e,n){this.dep=new no,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||je(e)||Qt(e);e=s?e:Y(e),wt(e,n)&&(this._rawValue=e,this._value=s?e:be(e),this.dep.trigger())}}function He(t){return fe(t)?t.value:t}const ef={get:(t,e,n)=>e==="__v_raw"?t:He(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Yc(t){return St(t)?t:new Proxy(t,ef)}function tf(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=sf(t,n);return e}class nf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kh(Y(this._object),this._key)}}function sf(t,e,n){const s=t[e];return fe(s)?s:new nf(t,e,n)}class rf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new no(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return Mc(this,!0),!0}get value(){const e=this.dep.track();return Bc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function of(t,e,n=!1){let s,i;return H(t)?s=t:(s=t.get,i=t.set),new rf(s,i,n)}const As={},Vs=new WeakMap;let Vt;function lf(t,e=!1,n=Vt){if(n){let s=Vs.get(n);s||Vs.set(n,s=[]),s.push(t)}}function cf(t,e,n=Z){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=h=>i?h:je(h)||i===!1||i===0?dt(h,1):dt(h);let u,f,g,x,E=!1,P=!1;if(fe(t)?(f=()=>t.value,E=je(t)):St(t)?(f=()=>a(t),E=!0):W(t)?(P=!0,E=t.some(h=>St(h)||je(h)),f=()=>t.map(h=>{if(fe(h))return h.value;if(St(h))return a(h);if(H(h))return c?c(h,2):h()})):H(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){Mt();try{g()}finally{Ft()}}const h=Vt;Vt=u;try{return c?c(t,3,[x]):t(x)}finally{Vt=h}}:f=rt,e&&i){const h=f,v=i===!0?1/0:i;f=()=>dt(h(),v)}const V=Dc(),j=()=>{u.stop(),V&&V.active&&Yr(V.effects,u)};if(r&&e){const h=e;e=(...v)=>{h(...v),j()}}let p=P?new Array(t.length).fill(As):As;const d=h=>{if(!(!(u.flags&1)||!u.dirty&&!h))if(e){const v=u.run();if(i||E||(P?v.some((D,te)=>wt(D,p[te])):wt(v,p))){g&&g();const D=Vt;Vt=u;try{const te=[v,p===As?void 0:P&&p[0]===As?[]:p,x];c?c(e,3,te):e(...te),p=v}finally{Vt=D}}}else u.run()};return l&&l(d),u=new Oc(f),u.scheduler=o?()=>o(d,!1):d,x=h=>lf(h,!1,u),g=u.onStop=()=>{const h=Vs.get(u);if(h){if(c)c(h,4);else for(const v of h)v();Vs.delete(u)}},e?s?d(!0):p=u.run():o?o(d.bind(null,!0),!0):u.run(),j.pause=u.pause.bind(u),j.resume=u.resume.bind(u),j.stop=j,j}function dt(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))dt(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)dt(t[s],e,n);else if(bc(t)||dn(t))t.forEach(s=>{dt(s,e,n)});else if(wc(t)){for(const s in t)dt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&dt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(t,e,n,s){try{return s?t(...s):t()}catch(i){Si(i,e,n)}}function lt(t,e,n,s){if(H(t)){const i=gs(t,e,n,s);return i&&Ec(i)&&i.catch(r=>{Si(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(lt(t[r],e,n,s));return i}}function Si(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,a)===!1)return}l=l.parent}if(r){Mt(),gs(r,null,10,[t,c,a]),Ft();return}}af(t,n,i,s,o)}function af(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Te=[];let st=-1;const pn=[];let Et=null,cn=0;const Qc=Promise.resolve();let js=null;function Xc(t){const e=js||Qc;return t?e.then(this?t.bind(this):t):e}function uf(t){let e=st+1,n=Te.length;for(;e<n;){const s=e+n>>>1,i=Te[s],r=ts(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function lo(t){if(!(t.flags&1)){const e=ts(t),n=Te[Te.length-1];!n||!(t.flags&2)&&e>=ts(n)?Te.push(t):Te.splice(uf(e),0,t),t.flags|=1,Jc()}}function Jc(){js||(js=Qc.then(ea))}function hf(t){W(t)?pn.push(...t):Et&&t.id===-1?Et.splice(cn+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),Jc()}function Zo(t,e,n=st+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Zc(t){if(pn.length){const e=[...new Set(pn)].sort((n,s)=>ts(n)-ts(s));if(pn.length=0,Et){Et.push(...e);return}for(Et=e,cn=0;cn<Et.length;cn++){const n=Et[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,cn=0}}const ts=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ea(t){try{for(st=0;st<Te.length;st++){const e=Te[st];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;st<Te.length;st++){const e=Te[st];e&&(e.flags&=-2)}st=-1,Te.length=0,Zc(),js=null,(Te.length||pn.length)&&ea()}}let De=null,ta=null;function $s(t){const e=De;return De=t,ta=t&&t.type.__scopeId||null,e}function ff(t,e=De,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ul(-1);const r=$s(e);let o;try{o=t(...i)}finally{$s(r),s._d&&ul(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function df(t,e){if(De===null)return t;const n=Ai(De),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Z]=e[i];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&dt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Mt(),lt(c,n,8,[t.el,l,t,e]),Ft())}}const pf=Symbol("_vte"),_f=t=>t.__isTeleport;function co(t,e){t.shapeFlag&6&&t.component?(t.transition=e,co(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function gf(t,e){return H(t)?Ie({name:t.name},e,{setup:t}):t}function na(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gs(t,e,n,s,i=!1){if(W(t)){t.forEach((E,P)=>Gs(E,e&&(W(e)?e[P]:e),n,s,i));return}if(jn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ai(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===Z?l.refs={}:l.refs,f=l.setupState,g=Y(f),x=f===Z?()=>!1:E=>X(g,E);if(a!=null&&a!==c&&(de(a)?(u[a]=null,x(a)&&(f[a]=null)):fe(a)&&(a.value=null)),H(c))gs(c,l,12,[o,u]);else{const E=de(c),P=fe(c);if(E||P){const V=()=>{if(t.f){const j=E?x(c)?f[c]:u[c]:c.value;i?W(j)&&Yr(j,r):W(j)?j.includes(r)||j.push(r):E?(u[c]=[r],x(c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else E?(u[c]=o,x(c)&&(f[c]=o)):P&&(c.value=o,t.k&&(u[t.k]=o))};o?(V.id=-1,Be(V,n)):V()}}}Ei().requestIdleCallback;Ei().cancelIdleCallback;const jn=t=>!!t.type.__asyncLoader,sa=t=>t.type.__isKeepAlive;function mf(t,e){ia(t,"a",e)}function xf(t,e){ia(t,"da",e)}function ia(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ti(e,s,n),n){let i=n.parent;for(;i&&i.parent;)sa(i.parent.vnode)&&yf(s,e,n,i),i=i.parent}}function yf(t,e,n,s){const i=Ti(e,t,s,!0);ra(()=>{Yr(s[e],i)},n)}function Ti(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Mt();const l=ms(n),c=lt(e,n,t,o);return l(),Ft(),c});return s?i.unshift(r):i.push(r),r}}const xt=t=>(e,n=ye)=>{(!ss||t==="sp")&&Ti(t,(...s)=>e(...s),n)},vf=xt("bm"),ao=xt("m"),Cf=xt("bu"),bf=xt("u"),Ef=xt("bum"),ra=xt("um"),If=xt("sp"),wf=xt("rtg"),Sf=xt("rtc");function Tf(t,e=ye){Ti("ec",t,e)}const Nf="components",oa=Symbol.for("v-ndc");function Rf(t){return de(t)?Af(Nf,t,!1)||t:t||oa}function Af(t,e,n=!0,s=!1){const i=De||ye;if(i){const r=i.type;{const l=xd(r,!1);if(l&&(l===e||l===$e(e)||l===bi($e(e))))return r}const o=el(i[t]||r[t],e)||el(i.appContext[t],e);return!o&&s?r:o}}function el(t,e){return t&&(t[e]||t[$e(e)]||t[bi($e(e))])}function tl(t,e,n,s){let i;const r=n&&n[s],o=W(t);if(o||de(t)){const l=o&&St(t);let c=!1;l&&(c=!je(t),t=Ii(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?be(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const vr=t=>t?Ra(t)?Ai(t):vr(t.parent):null,$n=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ca(t),$forceUpdate:t=>t.f||(t.f=()=>{lo(t.update)}),$nextTick:t=>t.n||(t.n=Xc.bind(t.proxy)),$watch:t=>Zf.bind(t)}),Qi=(t,e)=>t!==Z&&!t.__isScriptSetup&&X(t,e),Pf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Qi(s,e))return o[e]=1,s[e];if(i!==Z&&X(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&X(a,e))return o[e]=3,r[e];if(n!==Z&&X(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const u=$n[e];let f,g;if(u)return e==="$attrs"&&Ce(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Z&&X(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,X(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Qi(i,e)?(i[e]=n,!0):s!==Z&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Z&&X(t,o)||Qi(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X($n,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nl(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cr=!0;function Df(t){const e=ca(t),n=t.proxy,s=t.ctx;Cr=!1,e.beforeCreate&&sl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:f,mounted:g,beforeUpdate:x,updated:E,activated:P,deactivated:V,beforeDestroy:j,beforeUnmount:p,destroyed:d,unmounted:h,render:v,renderTracked:D,renderTriggered:te,errorCaptured:O,serverPrefetch:L,expose:ce,inheritAttrs:Re,components:Ue,directives:Xe,filters:sn}=e;if(a&&Of(a,s,null),o)for(const q in o){const ne=o[q];H(ne)&&(s[q]=ne.bind(n))}if(i){const q=i.call(n,n);ae(q)&&(t.data=wi(q))}if(Cr=!0,r)for(const q in r){const ne=r[q],Lt=H(ne)?ne.bind(n,n):H(ne.get)?ne.get.bind(n,n):rt,Ss=!H(ne)&&H(ne.set)?ne.set.bind(n):rt,Bt=Pa({get:Lt,set:Ss});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Je=>Bt.value=Je})}if(l)for(const q in l)la(l[q],s,n,q);if(c){const q=H(c)?c.call(n):c;Reflect.ownKeys(q).forEach(ne=>{Wf(ne,q[ne])})}u&&sl(u,t,"c");function he(q,ne){W(ne)?ne.forEach(Lt=>q(Lt.bind(n))):ne&&q(ne.bind(n))}if(he(vf,f),he(ao,g),he(Cf,x),he(bf,E),he(mf,P),he(xf,V),he(Tf,O),he(Sf,D),he(wf,te),he(Ef,p),he(ra,h),he(If,L),W(ce))if(ce.length){const q=t.exposed||(t.exposed={});ce.forEach(ne=>{Object.defineProperty(q,ne,{get:()=>n[ne],set:Lt=>n[ne]=Lt})})}else t.exposed||(t.exposed={});v&&t.render===rt&&(t.render=v),Re!=null&&(t.inheritAttrs=Re),Ue&&(t.components=Ue),Xe&&(t.directives=Xe),L&&na(t)}function Of(t,e,n=rt){W(t)&&(t=br(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=Gn(i.from||s,i.default,!0):r=Gn(i.from||s):r=Gn(i),fe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function sl(t,e,n){lt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function la(t,e,n,s){let i=s.includes(".")?ba(n,s):()=>n[s];if(de(t)){const r=e[t];H(r)&&_n(i,r)}else if(H(t))_n(i,t.bind(n));else if(ae(t))if(W(t))t.forEach(r=>la(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&_n(i,r,t)}}function ca(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Ks(c,a,o,!0)),Ks(c,e,o)),ae(e)&&r.set(e,c),c}function Ks(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ks(t,r,n,!0),i&&i.forEach(o=>Ks(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=kf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const kf={data:il,props:rl,emits:rl,methods:Wn,computed:Wn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Wn,directives:Wn,watch:Ff,provide:il,inject:Mf};function il(t,e){return e?t?function(){return Ie(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Mf(t,e){return Wn(br(t),br(e))}function br(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?Ie(Object.create(null),t,e):e}function rl(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ie(Object.create(null),nl(t),nl(e??{})):e}function Ff(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function aa(){return{app:null,config:{isNativeTag:vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lf=0;function Bf(t,e){return function(s,i=null){H(s)||(s=Ie({},s)),i!=null&&!ae(i)&&(i=null);const r=aa(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Lf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:vd,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(a,...f)):H(u)&&(o.add(u),u(a,...f))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,f){return f?(r.components[u]=f,a):r.components[u]},directive(u,f){return f?(r.directives[u]=f,a):r.directives[u]},mount(u,f,g){if(!c){const x=a._ceVNode||ot(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,u,g),c=!0,a._container=u,u.__vue_app__=a,Ai(x.component)}},onUnmount(u){l.push(u)},unmount(){c&&(lt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,f){return r.provides[u]=f,a},runWithContext(u){const f=Yt;Yt=a;try{return u()}finally{Yt=f}}};return a}}let Yt=null;function Wf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Gn(t,e,n=!1){const s=ye||De;if(s||Yt){const i=Yt?Yt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function Uf(){return!!(ye||De||Yt)}const ua={},ha=()=>Object.create(ua),fa=t=>Object.getPrototypeOf(t)===ua;function Hf(t,e,n,s=!1){const i={},r=ha();t.propsDefaults=Object.create(null),da(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Xh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Vf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(Ni(t.emitsOptions,g))continue;const x=e[g];if(c)if(X(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const E=$e(g);i[E]=Er(c,l,E,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{da(t,e,i,r)&&(a=!0);let u;for(const f in l)(!e||!X(e,f)&&((u=tn(f))===f||!X(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Er(c,l,f,void 0,t,!0)):delete i[f]);if(r!==l)for(const f in r)(!e||!X(e,f))&&(delete r[f],a=!0)}a&&ft(t.attrs,"set","")}function da(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Un(c))continue;const a=e[c];let u;i&&X(i,u=$e(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ni(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||Z;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Er(i,c,f,a[f],t,!X(a,f))}}return o}function Er(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=ms(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===tn(n))&&(s=!0))}return s}const jf=new WeakMap;function pa(t,e,n=!1){const s=n?jf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[g,x]=pa(f,e,!0);Ie(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ae(t)&&s.set(t,fn),fn;if(W(r))for(let u=0;u<r.length;u++){const f=$e(r[u]);ol(f)&&(o[f]=Z)}else if(r)for(const u in r){const f=$e(u);if(ol(f)){const g=r[u],x=o[f]=W(g)||H(g)?{type:g}:Ie({},g),E=x.type;let P=!1,V=!0;if(W(E))for(let j=0;j<E.length;++j){const p=E[j],d=H(p)&&p.name;if(d==="Boolean"){P=!0;break}else d==="String"&&(V=!1)}else P=H(E)&&E.name==="Boolean";x[0]=P,x[1]=V,(P||X(x,"default"))&&l.push(f)}}const a=[o,l];return ae(t)&&s.set(t,a),a}function ol(t){return t[0]!=="$"&&!Un(t)}const _a=t=>t[0]==="_"||t==="$stable",uo=t=>W(t)?t.map(it):[it(t)],$f=(t,e,n)=>{if(e._n)return e;const s=ff((...i)=>uo(e(...i)),n);return s._c=!1,s},ga=(t,e,n)=>{const s=t._ctx;for(const i in t){if(_a(i))continue;const r=t[i];if(H(r))e[i]=$f(i,r,s);else if(r!=null){const o=uo(r);e[i]=()=>o}}},ma=(t,e)=>{const n=uo(e);t.slots.default=()=>n},xa=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Gf=(t,e,n)=>{const s=t.slots=ha();if(t.vnode.shapeFlag&32){const i=e._;i?(xa(s,e,n),n&&Sc(s,"_",i,!0)):ga(e,s)}else e&&ma(t,e)},Kf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Z;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:xa(i,e,n):(r=!e.$stable,ga(e,i)),o=e}else e&&(ma(t,e),o={default:1});if(r)for(const l in i)!_a(l)&&o[l]==null&&delete i[l]},Be=od;function qf(t){return zf(t)}function zf(t,e){const n=Ei();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:f,nextSibling:g,setScopeId:x=rt,insertStaticContent:E}=t,P=(_,m,y,I=null,C=null,b=null,R=void 0,N=null,T=!!m.dynamicChildren)=>{if(_===m)return;_&&!On(_,m)&&(I=Ts(_),Je(_,C,b,!0),_=null),m.patchFlag===-2&&(T=!1,m.dynamicChildren=null);const{type:w,ref:M,shapeFlag:A}=m;switch(w){case Ri:V(_,m,y,I);break;case Xt:j(_,m,y,I);break;case Ji:_==null&&p(m,y,I,R);break;case Ve:Ue(_,m,y,I,C,b,R,N,T);break;default:A&1?v(_,m,y,I,C,b,R,N,T):A&6?Xe(_,m,y,I,C,b,R,N,T):(A&64||A&128)&&w.process(_,m,y,I,C,b,R,N,T,An)}M!=null&&C&&Gs(M,_&&_.ref,b,m||_,!m)},V=(_,m,y,I)=>{if(_==null)s(m.el=l(m.children),y,I);else{const C=m.el=_.el;m.children!==_.children&&a(C,m.children)}},j=(_,m,y,I)=>{_==null?s(m.el=c(m.children||""),y,I):m.el=_.el},p=(_,m,y,I)=>{[_.el,_.anchor]=E(_.children,m,y,I,_.el,_.anchor)},d=({el:_,anchor:m},y,I)=>{let C;for(;_&&_!==m;)C=g(_),s(_,y,I),_=C;s(m,y,I)},h=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},v=(_,m,y,I,C,b,R,N,T)=>{m.type==="svg"?R="svg":m.type==="math"&&(R="mathml"),_==null?D(m,y,I,C,b,R,N,T):L(_,m,C,b,R,N,T)},D=(_,m,y,I,C,b,R,N)=>{let T,w;const{props:M,shapeFlag:A,transition:k,dirs:B}=_;if(T=_.el=o(_.type,b,M&&M.is,M),A&8?u(T,_.children):A&16&&O(_.children,T,null,I,C,Xi(_,b),R,N),B&&Wt(_,null,I,"created"),te(T,_,_.scopeId,R,I),M){for(const se in M)se!=="value"&&!Un(se)&&r(T,se,null,M[se],b,I);"value"in M&&r(T,"value",null,M.value,b),(w=M.onVnodeBeforeMount)&&nt(w,I,_)}B&&Wt(_,null,I,"beforeMount");const z=Yf(C,k);z&&k.beforeEnter(T),s(T,m,y),((w=M&&M.onVnodeMounted)||z||B)&&Be(()=>{w&&nt(w,I,_),z&&k.enter(T),B&&Wt(_,null,I,"mounted")},C)},te=(_,m,y,I,C)=>{if(y&&x(_,y),I)for(let b=0;b<I.length;b++)x(_,I[b]);if(C){let b=C.subTree;if(m===b||Ia(b.type)&&(b.ssContent===m||b.ssFallback===m)){const R=C.vnode;te(_,R,R.scopeId,R.slotScopeIds,C.parent)}}},O=(_,m,y,I,C,b,R,N,T=0)=>{for(let w=T;w<_.length;w++){const M=_[w]=N?It(_[w]):it(_[w]);P(null,M,m,y,I,C,b,R,N)}},L=(_,m,y,I,C,b,R)=>{const N=m.el=_.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=m;T|=_.patchFlag&16;const A=_.props||Z,k=m.props||Z;let B;if(y&&Ut(y,!1),(B=k.onVnodeBeforeUpdate)&&nt(B,y,m,_),M&&Wt(m,_,y,"beforeUpdate"),y&&Ut(y,!0),(A.innerHTML&&k.innerHTML==null||A.textContent&&k.textContent==null)&&u(N,""),w?ce(_.dynamicChildren,w,N,y,I,Xi(m,C),b):R||ne(_,m,N,null,y,I,Xi(m,C),b,!1),T>0){if(T&16)Re(N,A,k,y,C);else if(T&2&&A.class!==k.class&&r(N,"class",null,k.class,C),T&4&&r(N,"style",A.style,k.style,C),T&8){const z=m.dynamicProps;for(let se=0;se<z.length;se++){const J=z[se],Fe=A[J],Ae=k[J];(Ae!==Fe||J==="value")&&r(N,J,Fe,Ae,C,y)}}T&1&&_.children!==m.children&&u(N,m.children)}else!R&&w==null&&Re(N,A,k,y,C);((B=k.onVnodeUpdated)||M)&&Be(()=>{B&&nt(B,y,m,_),M&&Wt(m,_,y,"updated")},I)},ce=(_,m,y,I,C,b,R)=>{for(let N=0;N<m.length;N++){const T=_[N],w=m[N],M=T.el&&(T.type===Ve||!On(T,w)||T.shapeFlag&70)?f(T.el):y;P(T,w,M,null,I,C,b,R,!0)}},Re=(_,m,y,I,C)=>{if(m!==y){if(m!==Z)for(const b in m)!Un(b)&&!(b in y)&&r(_,b,m[b],null,C,I);for(const b in y){if(Un(b))continue;const R=y[b],N=m[b];R!==N&&b!=="value"&&r(_,b,N,R,C,I)}"value"in y&&r(_,"value",m.value,y.value,C)}},Ue=(_,m,y,I,C,b,R,N,T)=>{const w=m.el=_?_.el:l(""),M=m.anchor=_?_.anchor:l("");let{patchFlag:A,dynamicChildren:k,slotScopeIds:B}=m;B&&(N=N?N.concat(B):B),_==null?(s(w,y,I),s(M,y,I),O(m.children||[],y,M,C,b,R,N,T)):A>0&&A&64&&k&&_.dynamicChildren?(ce(_.dynamicChildren,k,y,C,b,R,N),(m.key!=null||C&&m===C.subTree)&&ya(_,m,!0)):ne(_,m,y,M,C,b,R,N,T)},Xe=(_,m,y,I,C,b,R,N,T)=>{m.slotScopeIds=N,_==null?m.shapeFlag&512?C.ctx.activate(m,y,I,R,T):sn(m,y,I,C,b,R,T):ws(_,m,T)},sn=(_,m,y,I,C,b,R)=>{const N=_.component=dd(_,I,C);if(sa(_)&&(N.ctx.renderer=An),pd(N,!1,R),N.asyncDep){if(C&&C.registerDep(N,he,R),!_.el){const T=N.subTree=ot(Xt);j(null,T,m,y)}}else he(N,_,m,y,C,b,R)},ws=(_,m,y)=>{const I=m.component=_.component;if(id(_,m,y))if(I.asyncDep&&!I.asyncResolved){q(I,m,y);return}else I.next=m,I.update();else m.el=_.el,I.vnode=m},he=(_,m,y,I,C,b,R)=>{const N=()=>{if(_.isMounted){let{next:A,bu:k,u:B,parent:z,vnode:se}=_;{const et=va(_);if(et){A&&(A.el=se.el,q(_,A,R)),et.asyncDep.then(()=>{_.isUnmounted||N()});return}}let J=A,Fe;Ut(_,!1),A?(A.el=se.el,q(_,A,R)):A=se,k&&Ms(k),(Fe=A.props&&A.props.onVnodeBeforeUpdate)&&nt(Fe,z,A,se),Ut(_,!0);const Ae=cl(_),Ze=_.subTree;_.subTree=Ae,P(Ze,Ae,f(Ze.el),Ts(Ze),_,C,b),A.el=Ae.el,J===null&&rd(_,Ae.el),B&&Be(B,C),(Fe=A.props&&A.props.onVnodeUpdated)&&Be(()=>nt(Fe,z,A,se),C)}else{let A;const{el:k,props:B}=m,{bm:z,m:se,parent:J,root:Fe,type:Ae}=_,Ze=jn(m);Ut(_,!1),z&&Ms(z),!Ze&&(A=B&&B.onVnodeBeforeMount)&&nt(A,J,m),Ut(_,!0);{Fe.ce&&Fe.ce._injectChildStyle(Ae);const et=_.subTree=cl(_);P(null,et,y,I,_,C,b),m.el=et.el}if(se&&Be(se,C),!Ze&&(A=B&&B.onVnodeMounted)){const et=m;Be(()=>nt(A,J,et),C)}(m.shapeFlag&256||J&&jn(J.vnode)&&J.vnode.shapeFlag&256)&&_.a&&Be(_.a,C),_.isMounted=!0,m=y=I=null}};_.scope.on();const T=_.effect=new Oc(N);_.scope.off();const w=_.update=T.run.bind(T),M=_.job=T.runIfDirty.bind(T);M.i=_,M.id=_.uid,T.scheduler=()=>lo(M),Ut(_,!0),w()},q=(_,m,y)=>{m.component=_;const I=_.vnode.props;_.vnode=m,_.next=null,Vf(_,m.props,I,y),Kf(_,m.children,y),Mt(),Zo(_),Ft()},ne=(_,m,y,I,C,b,R,N,T=!1)=>{const w=_&&_.children,M=_?_.shapeFlag:0,A=m.children,{patchFlag:k,shapeFlag:B}=m;if(k>0){if(k&128){Ss(w,A,y,I,C,b,R,N,T);return}else if(k&256){Lt(w,A,y,I,C,b,R,N,T);return}}B&8?(M&16&&Rn(w,C,b),A!==w&&u(y,A)):M&16?B&16?Ss(w,A,y,I,C,b,R,N,T):Rn(w,C,b,!0):(M&8&&u(y,""),B&16&&O(A,y,I,C,b,R,N,T))},Lt=(_,m,y,I,C,b,R,N,T)=>{_=_||fn,m=m||fn;const w=_.length,M=m.length,A=Math.min(w,M);let k;for(k=0;k<A;k++){const B=m[k]=T?It(m[k]):it(m[k]);P(_[k],B,y,null,C,b,R,N,T)}w>M?Rn(_,C,b,!0,!1,A):O(m,y,I,C,b,R,N,T,A)},Ss=(_,m,y,I,C,b,R,N,T)=>{let w=0;const M=m.length;let A=_.length-1,k=M-1;for(;w<=A&&w<=k;){const B=_[w],z=m[w]=T?It(m[w]):it(m[w]);if(On(B,z))P(B,z,y,null,C,b,R,N,T);else break;w++}for(;w<=A&&w<=k;){const B=_[A],z=m[k]=T?It(m[k]):it(m[k]);if(On(B,z))P(B,z,y,null,C,b,R,N,T);else break;A--,k--}if(w>A){if(w<=k){const B=k+1,z=B<M?m[B].el:I;for(;w<=k;)P(null,m[w]=T?It(m[w]):it(m[w]),y,z,C,b,R,N,T),w++}}else if(w>k)for(;w<=A;)Je(_[w],C,b,!0),w++;else{const B=w,z=w,se=new Map;for(w=z;w<=k;w++){const Le=m[w]=T?It(m[w]):it(m[w]);Le.key!=null&&se.set(Le.key,w)}let J,Fe=0;const Ae=k-z+1;let Ze=!1,et=0;const Pn=new Array(Ae);for(w=0;w<Ae;w++)Pn[w]=0;for(w=B;w<=A;w++){const Le=_[w];if(Fe>=Ae){Je(Le,C,b,!0);continue}let tt;if(Le.key!=null)tt=se.get(Le.key);else for(J=z;J<=k;J++)if(Pn[J-z]===0&&On(Le,m[J])){tt=J;break}tt===void 0?Je(Le,C,b,!0):(Pn[tt-z]=w+1,tt>=et?et=tt:Ze=!0,P(Le,m[tt],y,null,C,b,R,N,T),Fe++)}const zo=Ze?Qf(Pn):fn;for(J=zo.length-1,w=Ae-1;w>=0;w--){const Le=z+w,tt=m[Le],Yo=Le+1<M?m[Le+1].el:I;Pn[w]===0?P(null,tt,y,Yo,C,b,R,N,T):Ze&&(J<0||w!==zo[J]?Bt(tt,y,Yo,2):J--)}}},Bt=(_,m,y,I,C=null)=>{const{el:b,type:R,transition:N,children:T,shapeFlag:w}=_;if(w&6){Bt(_.component.subTree,m,y,I);return}if(w&128){_.suspense.move(m,y,I);return}if(w&64){R.move(_,m,y,An);return}if(R===Ve){s(b,m,y);for(let A=0;A<T.length;A++)Bt(T[A],m,y,I);s(_.anchor,m,y);return}if(R===Ji){d(_,m,y);return}if(I!==2&&w&1&&N)if(I===0)N.beforeEnter(b),s(b,m,y),Be(()=>N.enter(b),C);else{const{leave:A,delayLeave:k,afterLeave:B}=N,z=()=>s(b,m,y),se=()=>{A(b,()=>{z(),B&&B()})};k?k(b,z,se):se()}else s(b,m,y)},Je=(_,m,y,I=!1,C=!1)=>{const{type:b,props:R,ref:N,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:A,dirs:k,cacheIndex:B}=_;if(A===-2&&(C=!1),N!=null&&Gs(N,null,y,_,!0),B!=null&&(m.renderCache[B]=void 0),M&256){m.ctx.deactivate(_);return}const z=M&1&&k,se=!jn(_);let J;if(se&&(J=R&&R.onVnodeBeforeUnmount)&&nt(J,m,_),M&6)yh(_.component,y,I);else{if(M&128){_.suspense.unmount(y,I);return}z&&Wt(_,null,m,"beforeUnmount"),M&64?_.type.remove(_,m,y,An,I):w&&!w.hasOnce&&(b!==Ve||A>0&&A&64)?Rn(w,m,y,!1,!0):(b===Ve&&A&384||!C&&M&16)&&Rn(T,m,y),I&&Ko(_)}(se&&(J=R&&R.onVnodeUnmounted)||z)&&Be(()=>{J&&nt(J,m,_),z&&Wt(_,null,m,"unmounted")},y)},Ko=_=>{const{type:m,el:y,anchor:I,transition:C}=_;if(m===Ve){xh(y,I);return}if(m===Ji){h(_);return}const b=()=>{i(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(_.shapeFlag&1&&C&&!C.persisted){const{leave:R,delayLeave:N}=C,T=()=>R(y,b);N?N(_.el,b,T):T()}else b()},xh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},yh=(_,m,y)=>{const{bum:I,scope:C,job:b,subTree:R,um:N,m:T,a:w}=_;ll(T),ll(w),I&&Ms(I),C.stop(),b&&(b.flags|=8,Je(R,_,m,y)),N&&Be(N,m),Be(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Rn=(_,m,y,I=!1,C=!1,b=0)=>{for(let R=b;R<_.length;R++)Je(_[R],m,y,I,C)},Ts=_=>{if(_.shapeFlag&6)return Ts(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[pf];return y?g(y):m};let $i=!1;const qo=(_,m,y)=>{_==null?m._vnode&&Je(m._vnode,null,null,!0):P(m._vnode||null,_,m,null,null,null,y),m._vnode=_,$i||($i=!0,Zo(),Zc(),$i=!1)},An={p:P,um:Je,m:Bt,r:Ko,mt:sn,mc:O,pc:ne,pbc:ce,n:Ts,o:t};return{render:qo,hydrate:void 0,createApp:Bf(qo)}}function Xi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ut({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ya(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=It(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ya(o,l)),l.type===Ri&&(l.el=o.el)}}function Qf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function va(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:va(e)}function ll(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xf=Symbol.for("v-scx"),Jf=()=>Gn(Xf);function _n(t,e,n){return Ca(t,e,n)}function Ca(t,e,n=Z){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ie({},n),c=e&&s||!e&&r!=="post";let a;if(ss){if(r==="sync"){const x=Jf();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=rt,x.resume=rt,x.pause=rt,x}}const u=ye;l.call=(x,E,P)=>lt(x,u,E,P);let f=!1;r==="post"?l.scheduler=x=>{Be(x,u&&u.suspense)}:r!=="sync"&&(f=!0,l.scheduler=(x,E)=>{E?x():lo(x)}),l.augmentJob=x=>{e&&(x.flags|=4),f&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const g=cf(t,e,l);return ss&&(a?a.push(g):c&&g()),g}function Zf(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=ms(this),l=Ca(i,r.bind(s),n);return o(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ed=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$e(e)}Modifiers`]||t[`${tn(e)}Modifiers`];function td(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const r=e.startsWith("update:"),o=r&&ed(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>de(u)?u.trim():u)),o.number&&(i=n.map(_r)));let l,c=s[l=Gi(e)]||s[l=Gi($e(e))];!c&&r&&(c=s[l=Gi(tn(e))]),c&&lt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,lt(a,t,6,i)}}function Ea(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!H(t)){const c=a=>{const u=Ea(a,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ae(t)&&s.set(t,null),null):(W(r)?r.forEach(c=>o[c]=null):Ie(o,r),ae(t)&&s.set(t,o),o)}function Ni(t,e){return!t||!yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,tn(e))||X(t,e))}function cl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:f,data:g,setupState:x,ctx:E,inheritAttrs:P}=t,V=$s(t);let j,p;try{if(n.shapeFlag&4){const h=i||s,v=h;j=it(a.call(v,h,u,f,x,g,E)),p=l}else{const h=e;j=it(h.length>1?h(f,{attrs:l,slots:o,emit:c}):h(f,null)),p=e.props?l:nd(l)}}catch(h){Kn.length=0,Si(h,t,1),j=ot(Xt)}let d=j;if(p&&P!==!1){const h=Object.keys(p),{shapeFlag:v}=d;h.length&&v&7&&(r&&h.some(zr)&&(p=sd(p,r)),d=yn(d,p,!1,!0))}return n.dirs&&(d=yn(d,null,!1,!0),d.dirs=d.dirs?d.dirs.concat(n.dirs):n.dirs),n.transition&&co(d,n.transition),j=d,$s(V),j}const nd=t=>{let e;for(const n in t)(n==="class"||n==="style"||yi(n))&&((e||(e={}))[n]=t[n]);return e},sd=(t,e)=>{const n={};for(const s in t)(!zr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function id(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?al(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(o[g]!==s[g]&&!Ni(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?al(s,o,a):!0:!!o;return!1}function al(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ni(n,r))return!0}return!1}function rd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ia=t=>t.__isSuspense;function od(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):hf(t)}const Ve=Symbol.for("v-fgt"),Ri=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Ji=Symbol.for("v-stc"),Kn=[];let We=null;function ve(t=!1){Kn.push(We=t?null:[])}function ld(){Kn.pop(),We=Kn[Kn.length-1]||null}let ns=1;function ul(t,e=!1){ns+=t,t<0&&We&&e&&(We.hasOnce=!0)}function wa(t){return t.dynamicChildren=ns>0?We||fn:null,ld(),ns>0&&We&&We.push(t),t}function Pe(t,e,n,s,i,r){return wa(U(t,e,n,s,i,r,!0))}function Sa(t,e,n,s,i){return wa(ot(t,e,n,s,i,!0))}function Ta(t){return t?t.__v_isVNode===!0:!1}function On(t,e){return t.type===e.type&&t.key===e.key}const Na=({key:t})=>t??null,Fs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||fe(t)||H(t)?{i:De,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,i=null,r=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Na(e),ref:e&&Fs(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return l?(ho(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),ns>0&&!o&&We&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&We.push(c),c}const ot=cd;function cd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===oa)&&(t=Xt),Ta(t)){const l=yn(t,e,!0);return n&&ho(l,n),ns>0&&!r&&We&&(l.shapeFlag&6?We[We.indexOf(t)]=l:We.push(l)),l.patchFlag=-2,l}if(yd(t)&&(t=t.__vccOpts),e){e=ad(e);let{class:l,style:c}=e;l&&!de(l)&&(e.class=Jr(l)),ae(c)&&(ro(c)&&!W(c)&&(c=Ie({},c)),e.style=Xr(c))}const o=de(t)?1:Ia(t)?128:_f(t)?64:ae(t)?4:H(t)?2:0;return U(t,e,n,s,i,o,r,!0)}function ad(t){return t?ro(t)||fa(t)?Ie({},t):t:null}function yn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?ud(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Na(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Fs(e)):[r,Fs(e)]:Fs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&co(u,c.clone(u)),u}function ut(t=" ",e=0){return ot(Ri,null,t,e)}function Ct(t="",e=!1){return e?(ve(),Sa(Xt,null,t)):ot(Xt,null,t)}function it(t){return t==null||typeof t=="boolean"?ot(Xt):W(t)?ot(Ve,null,t.slice()):Ta(t)?It(t):ot(Ri,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function ho(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ho(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!fa(e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function ud(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(i==="style")e.style=Xr([e.style,s.style]);else if(yi(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function nt(t,e,n,s=null){lt(t,e,7,[n,s])}const hd=aa();let fd=0;function dd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hd,r={uid:fd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pa(s,i),emitsOptions:Ea(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=td.bind(null,r),t.ce&&t.ce(r),r}let ye=null,qs,Ir;{const t=Ei(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Ir=e("__VUE_SSR_SETTERS__",n=>ss=n)}const ms=t=>{const e=ye;return qs(t),t.scope.on(),()=>{t.scope.off(),qs(e)}},hl=()=>{ye&&ye.scope.off(),qs(null)};function Ra(t){return t.vnode.shapeFlag&4}let ss=!1;function pd(t,e=!1,n=!1){e&&Ir(e);const{props:s,children:i}=t.vnode,r=Ra(t);Hf(t,s,r,e),Gf(t,i,n);const o=r?_d(t,e):void 0;return e&&Ir(!1),o}function _d(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Pf);const{setup:s}=n;if(s){Mt();const i=t.setupContext=s.length>1?md(t):null,r=ms(t),o=gs(s,t,0,[t.props,i]),l=Ec(o);if(Ft(),r(),(l||t.sp)&&!jn(t)&&na(t),l){if(o.then(hl,hl),e)return o.then(c=>{fl(t,c)}).catch(c=>{Si(c,t,0)});t.asyncDep=o}else fl(t,o)}else Aa(t)}function fl(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Yc(e)),Aa(t)}function Aa(t,e,n){const s=t.type;t.render||(t.render=s.render||rt);{const i=ms(t);Mt();try{Df(t)}finally{Ft(),i()}}}const gd={get(t,e){return Ce(t,"get",""),t[e]}};function md(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gd),slots:t.slots,emit:t.emit,expose:e}}function Ai(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Yc(oo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $n)return $n[n](t)},has(e,n){return n in e||n in $n}})):t.proxy}function xd(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function yd(t){return H(t)&&"__vccOpts"in t}const Pa=(t,e)=>of(t,e,ss),vd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wr;const dl=typeof window<"u"&&window.trustedTypes;if(dl)try{wr=dl.createPolicy("vue",{createHTML:t=>t})}catch{}const Da=wr?t=>wr.createHTML(t):t=>t,Cd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,pl=ht&&ht.createElement("template"),Ed={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ht.createElementNS(Cd,t):e==="mathml"?ht.createElementNS(bd,t):n?ht.createElement(t,{is:n}):ht.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ht.createTextNode(t),createComment:t=>ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{pl.innerHTML=Da(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=pl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Id=Symbol("_vtc");function wd(t,e,n){const s=t[Id];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _l=Symbol("_vod"),Sd=Symbol("_vsh"),Td=Symbol(""),Nd=/(^|;)\s*display\s*:/;function Rd(t,e,n){const s=t.style,i=de(n);let r=!1;if(n&&!i){if(e)if(de(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ls(s,l,"")}else for(const o in e)n[o]==null&&Ls(s,o,"");for(const o in n)o==="display"&&(r=!0),Ls(s,o,n[o])}else if(i){if(e!==n){const o=s[Td];o&&(n+=";"+o),s.cssText=n,r=Nd.test(n)}}else e&&t.removeAttribute("style");_l in t&&(t[_l]=r?s.display:"",t[Sd]&&(s.display="none"))}const gl=/\s*!important$/;function Ls(t,e,n){if(W(n))n.forEach(s=>Ls(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ad(t,e);gl.test(n)?t.setProperty(tn(s),n.replace(gl,""),"important"):t[s]=n}}const ml=["Webkit","Moz","ms"],Zi={};function Ad(t,e){const n=Zi[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return Zi[e]=s;s=bi(s);for(let i=0;i<ml.length;i++){const r=ml[i]+s;if(r in t)return Zi[e]=r}return e}const xl="http://www.w3.org/1999/xlink";function yl(t,e,n,s,i,r=Ah(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xl,e.slice(6,e.length)):t.setAttributeNS(xl,e,n):n==null||r&&!Tc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":kt(n)?String(n):n)}function vl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Da(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function an(t,e,n,s){t.addEventListener(e,n,s)}function Pd(t,e,n,s){t.removeEventListener(e,n,s)}const Cl=Symbol("_vei");function Dd(t,e,n,s,i=null){const r=t[Cl]||(t[Cl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Od(e);if(s){const a=r[e]=Fd(s,i);an(t,l,a,c)}else o&&(Pd(t,l,o,c),r[e]=void 0)}}const bl=/(?:Once|Passive|Capture)$/;function Od(t){let e;if(bl.test(t)){e={};let s;for(;s=t.match(bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tn(t.slice(2)),e]}let er=0;const kd=Promise.resolve(),Md=()=>er||(kd.then(()=>er=0),er=Date.now());function Fd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(Ld(s,n.value),e,5,[s])};return n.value=t,n.attached=Md(),n}function Ld(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const El=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?wd(t,s,o):e==="style"?Rd(t,n,s):yi(e)?zr(e)||Dd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wd(t,e,s,o))?(vl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(s))?vl(t,$e(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yl(t,e,s,o))};function Wd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&El(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return El(e)&&de(n)?!1:e in t}const Il=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ms(e,n):e};function Ud(t){t.target.composing=!0}function wl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),Hd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[tr]=Il(i);const r=s||i.props&&i.props.type==="number";an(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=_r(l)),t[tr](l)}),n&&an(t,"change",()=>{t.value=t.value.trim()}),e||(an(t,"compositionstart",Ud),an(t,"compositionend",wl),an(t,"change",wl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[tr]=Il(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?_r(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Vd=Ie({patchProp:Bd},Ed);let Sl;function jd(){return Sl||(Sl=qf(Vd))}const $d=(...t)=>{const e=jd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Kd(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Gd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Gd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Kd(t){return de(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Oa;const Pi=t=>Oa=t,ka=Symbol();function Sr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qn||(qn={}));function qd(){const t=Pc(!0),e=t.run(()=>Gt({}));let n=[],s=[];const i=oo({install(r){Pi(i),i._a=r,r.provide(ka,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ma=()=>{};function Tl(t,e,n,s=Ma){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Dc()&&Ph(i),i}function on(t,...e){t.slice().forEach(n=>{n(...e)})}const zd=t=>t(),Nl=Symbol(),nr=Symbol();function Tr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Sr(i)&&Sr(s)&&t.hasOwnProperty(n)&&!fe(s)&&!St(s)?t[n]=Tr(i,s):t[n]=s}return t}const Yd=Symbol();function Qd(t){return!Sr(t)||!t.hasOwnProperty(Yd)}const{assign:bt}=Object;function Xd(t){return!!(fe(t)&&t.effect)}function Jd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=tf(n.state.value[t]);return bt(u,r,Object.keys(o||{}).reduce((f,g)=>(f[g]=oo(Pa(()=>{Pi(n);const x=n._s.get(t);return o[g].call(x,x)})),f),{}))}return c=Fa(t,a,e,n,s,!0),c}function Fa(t,e,n={},s,i,r){let o;const l=bt({actions:{}},n),c={deep:!0};let a,u,f=[],g=[],x;const E=s.state.value[t];!r&&!E&&(s.state.value[t]={}),Gt({});let P;function V(O){let L;a=u=!1,typeof O=="function"?(O(s.state.value[t]),L={type:qn.patchFunction,storeId:t,events:x}):(Tr(s.state.value[t],O),L={type:qn.patchObject,payload:O,storeId:t,events:x});const ce=P=Symbol();Xc().then(()=>{P===ce&&(a=!0)}),u=!0,on(f,L,s.state.value[t])}const j=r?function(){const{state:L}=n,ce=L?L():{};this.$patch(Re=>{bt(Re,ce)})}:Ma;function p(){o.stop(),f=[],g=[],s._s.delete(t)}const d=(O,L="")=>{if(Nl in O)return O[nr]=L,O;const ce=function(){Pi(s);const Re=Array.from(arguments),Ue=[],Xe=[];function sn(q){Ue.push(q)}function ws(q){Xe.push(q)}on(g,{args:Re,name:ce[nr],store:v,after:sn,onError:ws});let he;try{he=O.apply(this&&this.$id===t?this:v,Re)}catch(q){throw on(Xe,q),q}return he instanceof Promise?he.then(q=>(on(Ue,q),q)).catch(q=>(on(Xe,q),Promise.reject(q))):(on(Ue,he),he)};return ce[Nl]=!0,ce[nr]=L,ce},h={_p:s,$id:t,$onAction:Tl.bind(null,g),$patch:V,$reset:j,$subscribe(O,L={}){const ce=Tl(f,O,L.detached,()=>Re()),Re=o.run(()=>_n(()=>s.state.value[t],Ue=>{(L.flush==="sync"?u:a)&&O({storeId:t,type:qn.direct,events:x},Ue)},bt({},c,L)));return ce},$dispose:p},v=wi(h);s._s.set(t,v);const te=(s._a&&s._a.runWithContext||zd)(()=>s._e.run(()=>(o=Pc()).run(()=>e({action:d}))));for(const O in te){const L=te[O];if(fe(L)&&!Xd(L)||St(L))r||(E&&Qd(L)&&(fe(L)?L.value=E[O]:Tr(L,E[O])),s.state.value[t][O]=L);else if(typeof L=="function"){const ce=d(L,O);te[O]=ce,l.actions[O]=L}}return bt(v,te),bt(Y(v),te),Object.defineProperty(v,"$state",{get:()=>s.state.value[t],set:O=>{V(L=>{bt(L,O)})}}),s._p.forEach(O=>{bt(v,o.run(()=>O({store:v,app:s._a,pinia:s,options:l})))}),E&&r&&n.hydrate&&n.hydrate(v.$state,E),a=!0,u=!0,v}/*! #__NO_SIDE_EFFECTS__ */function Zd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Uf();return o=o||(c?Gn(ka,null):null),o&&Pi(o),o=Oa,o._s.has(t)||(i?Fa(t,e,s,o):Jd(t,s,o)),o._s.get(t)}return r.$id=t,r}const ep=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},tp=()=>{};var Rl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw In(e)},In=function(t){return new Error("Firebase Database ("+La.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},np=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[u],n[f],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ba(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):np(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||f==null)throw new sp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),f!==64){const E=a<<6&192|f;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wa=function(t){const e=Ba(t);return fo.encodeByteArray(e,!0)},zs=function(t){return Wa(t).replace(/\./g,"")},Nr=function(t){try{return fo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){return Ua(void 0,t)}function Ua(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rp(n)||(t[n]=Ua(t[n],e[n]));return t}function rp(t){return t!=="__proto__"}/**
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
 */function op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lp=()=>op().__FIREBASE_DEFAULTS__,cp=()=>{if(typeof process>"u"||typeof Rl>"u")return;const t=Rl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ap=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nr(t[1]);return e&&JSON.parse(e)},Ha=()=>{try{return tp()||lp()||cp()||ap()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},up=t=>{var e,n;return(n=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hp=t=>{const e=up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Va=()=>{var t;return(t=Ha())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function fp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zs(JSON.stringify(n)),zs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dp())}function pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _p(){return La.NODE_ADMIN===!0}function gp(){try{return typeof indexedDB=="object"}catch{return!1}}function mp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="FirebaseError";class xs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=xp,Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xs(i,l,s)}}function yp(t,e){return t.replace(vp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=is(Nr(r[0])||""),n=is(Nr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Cp=function(t){const e=Ga(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(t){const e=Ga(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Al(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ys(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Qs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Pl(r)&&Pl(o)){if(!Qs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Pl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let f=0;f<80;f++){f<40?f<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):f<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[f]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function po(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function wn(t){return t&&t._delegate?t._delegate:t}class rs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Sp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Di;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Np(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tp(t){return t===jt?void 0:t}function Np(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Ap={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Pp=re.INFO,Dp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Op=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Dp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=Pp,this._logHandler=Op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ap[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const kp=(t,e)=>e.some(n=>t instanceof n);let Dl,Ol;function Mp(){return Dl||(Dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fp(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Rr=new WeakMap,za=new WeakMap,sr=new WeakMap,_o=new WeakMap;function Lp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qa.set(n,t)}).catch(()=>{}),_o.set(e,t),e}function Bp(t){if(Rr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rr.set(t,e)}let Ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||za.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wp(t){Ar=t(Ar)}function Up(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ir(this),e,...n);return za.set(s,e.sort?e.sort():[e]),Tt(s)}:Fp().includes(t)?function(...e){return t.apply(ir(this),e),Tt(qa.get(this))}:function(...e){return Tt(t.apply(ir(this),e))}}function Hp(t){return typeof t=="function"?Up(t):(t instanceof IDBTransaction&&Bp(t),kp(t,Mp())?new Proxy(t,Ar):t)}function Tt(t){if(t instanceof IDBRequest)return Lp(t);if(sr.has(t))return sr.get(t);const e=Hp(t);return e!==t&&(sr.set(t,e),_o.set(e,t)),e}const ir=t=>_o.get(t);function Vp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const jp=["get","getKey","getAll","getAllKeys","count"],$p=["put","add","delete","clear"],rr=new Map;function kl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rr.get(e))return rr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$p.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return rr.set(e,r),r}Wp(t=>({...t,get:(e,n,s)=>kl(e,n)||t.get(e,n,s),has:(e,n)=>!!kl(e,n)||t.has(e,n)}));/**
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
 */class Gp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pr="@firebase/app",Ml="0.11.2";/**
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
 */const gt=new Ka("@firebase/app"),qp="@firebase/app-compat",zp="@firebase/analytics-compat",Yp="@firebase/analytics",Qp="@firebase/app-check-compat",Xp="@firebase/app-check",Jp="@firebase/auth",Zp="@firebase/auth-compat",e_="@firebase/database",t_="@firebase/data-connect",n_="@firebase/database-compat",s_="@firebase/functions",i_="@firebase/functions-compat",r_="@firebase/installations",o_="@firebase/installations-compat",l_="@firebase/messaging",c_="@firebase/messaging-compat",a_="@firebase/performance",u_="@firebase/performance-compat",h_="@firebase/remote-config",f_="@firebase/remote-config-compat",d_="@firebase/storage",p_="@firebase/storage-compat",__="@firebase/firestore",g_="@firebase/vertexai",m_="@firebase/firestore-compat",x_="firebase",y_="11.4.0";/**
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
 */const Dr="[DEFAULT]",v_={[Pr]:"fire-core",[qp]:"fire-core-compat",[Yp]:"fire-analytics",[zp]:"fire-analytics-compat",[Xp]:"fire-app-check",[Qp]:"fire-app-check-compat",[Jp]:"fire-auth",[Zp]:"fire-auth-compat",[e_]:"fire-rtdb",[t_]:"fire-data-connect",[n_]:"fire-rtdb-compat",[s_]:"fire-fn",[i_]:"fire-fn-compat",[r_]:"fire-iid",[o_]:"fire-iid-compat",[l_]:"fire-fcm",[c_]:"fire-fcm-compat",[a_]:"fire-perf",[u_]:"fire-perf-compat",[h_]:"fire-rc",[f_]:"fire-rc-compat",[d_]:"fire-gcs",[p_]:"fire-gcs-compat",[__]:"fire-fst",[m_]:"fire-fst-compat",[g_]:"fire-vertex","fire-js":"fire-js",[x_]:"fire-js-all"};/**
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
 */const Xs=new Map,C_=new Map,Or=new Map;function Fl(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(Or.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,t);for(const n of Xs.values())Fl(n,t);for(const n of C_.values())Fl(n,t);return!0}function b_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function E_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const I_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new $a("app","Firebase",I_);/**
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
 */class w_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const S_=y_;function Ya(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=Va()),!n)throw Nt.create("no-options");const r=Xs.get(i);if(r){if(Qs(n,r.options)&&Qs(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new Rp(i);for(const c of Or.values())o.addComponent(c);const l=new w_(n,s,o);return Xs.set(i,l),l}function T_(t=Dr){const e=Xs.get(t);if(!e&&t===Dr&&Va())return Ya();if(!e)throw Nt.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=v_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}Js(new rs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const N_="firebase-heartbeat-database",R_=1,os="firebase-heartbeat-store";let or=null;function Qa(){return or||(or=Vp(N_,R_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(os)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),or}async function A_(t){try{const n=(await Qa()).transaction(os),s=await n.objectStore(os).get(Xa(t));return await n.done,s}catch(e){if(e instanceof xs)gt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function Ll(t,e){try{const s=(await Qa()).transaction(os,"readwrite");await s.objectStore(os).put(e,Xa(t)),await s.done}catch(n){if(n instanceof xs)gt.warn(n.message);else{const s=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(s.message)}}}function Xa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P_=1024,D_=30;class O_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new M_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>D_){const o=F_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bl(),{heartbeatsToSend:s,unsentEntries:i}=k_(this._heartbeatsCache.heartbeats),r=zs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return gt.warn(n),""}}}function Bl(){return new Date().toISOString().substring(0,10)}function k_(t,e=P_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class M_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wl(t){return zs(JSON.stringify({version:2,heartbeats:t})).length}function F_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function L_(t){Js(new rs("platform-logger",e=>new Gp(e),"PRIVATE")),Js(new rs("heartbeat",e=>new O_(e),"PRIVATE")),gn(Pr,Ml,t),gn(Pr,Ml,"esm2017"),gn("fire-js","")}L_("");var B_="firebase",W_="11.4.0";/**
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
 */gn(B_,W_,"app");var Ul={};const Hl="@firebase/database",Vl="1.0.13";/**
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
 */let Ja="";function U_(t){Ja=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new H_(e)}}catch{}return new V_},Kt=Za("localStorage"),j_=Za("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Ka("@firebase/database"),$_=function(){let t=1;return function(){return t++}}(),eu=function(t){const e=wp(t),n=new Ip;n.update(e);const s=n.digest();return fo.encodeByteArray(s)},ys=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ys.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let zn=null,jl=!0;const G_=function(t,e){S(!0,"Can't turn on custom loggers persistently."),mn.logLevel=re.VERBOSE,zn=mn.log.bind(mn)},Ee=function(...t){if(jl===!0&&(jl=!1,zn===null&&j_.get("logging_enabled")===!0&&G_()),zn){const e=ys.apply(null,t);zn(e)}},vs=function(t){return function(...e){Ee(t,...e)}},kr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ys(...t);mn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${ys(...t)}`;throw mn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+ys(...t);mn.warn(e)},K_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},q_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",Jt="[MAX_NAME]",Sn=function(t,e){if(t===e)return 0;if(t===Cn||e===Jt)return-1;if(e===Cn||t===Jt)return 1;{const n=$l(t),s=$l(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},z_=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},go=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=go(t[e[s]]);return n+="}",n},nu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const su=function(t){S(!tu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},Y_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Q_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function X_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const J_=new RegExp("^-?(0*)\\d{1,10}$"),Z_=-2147483648,eg=2147483647,$l=function(t){if(J_.test(t)){const e=Number(t);if(e>=Z_&&e<=eg)return e}return null},Tn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},tg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ng{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,E_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Bs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="5",iu="v",ru="s",ou="r",lu="f",cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,au="ls",uu="p",Mr="ac",hu="websocket",fu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ig(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pu(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===hu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ig(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ip(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={},cr={};function xo(t){const e=t.toString();return lr[e]||(lr[e]=new rg),lr[e]}function og(t,e){const n=t.toString();return cr[n]||(cr[n]=e()),cr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Tn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="start",cg="close",ag="pLPCommand",ug="pRTLPCB",_u="id",gu="pw",mu="ser",hg="cb",fg="seg",dg="ts",pg="d",_g="dframe",xu=1870,yu=30,gg=xu-yu,mg=25e3,xg=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vs(e),this.stats_=xo(n),this.urlFn=c=>(this.appCheckToken&&(c[Mr]=this.appCheckToken),pu(n,fu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xg)),q_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gl)this.id=l,this.password=c;else if(o===cg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Gl]="t",s[mu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[iu]=mo,this.transportSessionId&&(s[ru]=this.transportSessionId),this.lastSessionId&&(s[au]=this.lastSessionId),this.applicationId&&(s[uu]=this.applicationId),this.appCheckToken&&(s[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(s[ou]=lu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Y_()&&!Q_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wa(n),i=nu(s,gg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[_g]="t",s[_u]=e,s[gu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$_(),window[ag+this.uniqueCallbackIdentifier]=e,window[ug+this.uniqueCallbackIdentifier]=n,this.myIFrame=yo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_u]=this.myID,e[gu]=this.myPW,e[mu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yu+s.length<=xu;){const o=this.pendingSegs.shift();s=s+"&"+fg+i+"="+o.seg+"&"+dg+i+"="+o.ts+"&"+pg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=16384,vg=45e3;let Zs=null;typeof MozWebSocket<"u"?Zs=MozWebSocket:typeof WebSocket<"u"&&(Zs=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vs(this.connId),this.stats_=xo(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[iu]=mo,typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(o[ou]=lu),n&&(o[ru]=n),s&&(o[au]=s),i&&(o[Mr]=i),r&&(o[uu]=r),pu(e,hu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;_p(),this.mySock=new Zs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zs!==null&&!Ke.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=is(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nu(n,yg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static get ALL_TRANSPORTS(){return[hn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of ls.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=6e4,bg=5e3,Eg=10*1024,Ig=100*1024,ar="t",Kl="d",wg="s",ql="r",Sg="e",zl="o",Yl="a",Ql="n",Xl="p",Tg="h";class Ng{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vs("c:"+this.id+":"),this.transportManager_=new ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Yn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ig?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Eg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ar in e){const n=e[ar];n===Yl?this.upgradeIfSecondaryHealthy_():n===ql?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ql,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(ar,e);if(Kl in e){const s=e[Kl];if(n===Tg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ql){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wg?this.onConnectionShutdown_(s):n===ql?this.onReset_(s):n===Sg?kr("Server Error: "+s):n===zl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mo!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Yn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Cg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Cu{static getInstance(){return new ei}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=32,Zl=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ee("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pt(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Rg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Eu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Iu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Ne(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vo(t,e){if(Pt(t)!==Pt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Pt(t)>Pt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ag{constructor(e,n){this.errorPrefix_=n,this.parts_=Eu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oi(this.parts_[s]);wu(this)}}function Pg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oi(e),wu(t)}function Dg(t){const e=t.parts_.pop();t.byteLength_-=Oi(e),t.parts_.length>0&&(t.byteLength_-=1)}function wu(t){if(t.byteLength_>Zl)throw new Error(t.errorPrefix_+"has a key path longer than "+Zl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jl+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Cu{static getInstance(){return new Co}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=1e3,Og=60*5*1e3,ec=30*1e3,kg=1.3,Mg=3e4,Fg="server_kill",tc=3;class _t extends vu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=_t.nextPersistentConnectionId_++,this.log_=vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mn,this.maxReconnectDelay_=Og,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Co.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Di,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;_t.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ec)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Cp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kr("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mg&&(this.reconnectDelay_=Mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(f){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,l=new Ng(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{ke(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fg)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ke(f),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Al(this.interruptReasons_)&&(this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>go(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tc&&(this.reconnectDelay_=ec,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ja.replace(/\./g,"-")]=1,ja()?e["framework.cordova"]=1:pp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ei.getInstance().currentlyOnline();return Al(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Cn,e),i=new G(Cn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;class Su extends ki{static get __EMPTY_NODE(){return Ps}static set __EMPTY_NODE(e){Ps=e}compare(e,n){return Sn(e.name,n.name)}isDefinedOn(e){throw In("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Jt,Ps)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ps)}toString(){return".key"}}const xn=new Su;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??me.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Lg{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new Lg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t,e){return Sn(t.name,e.name)}function bo(t,e){return Sn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;function Wg(t){Fr=t}const Tu=function(t){return typeof t=="number"?"number:"+su(t):"string:"+t},Nu=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else S(t===Fr||t.isEmpty(),"priority of unexpected type.");S(t===Fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;class ge{static set __childrenNodeConstructor(e){nc=e}static get __childrenNodeConstructor(){return nc}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:$(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=su(this.value_):e+=this.value_,this.lazyHash_=eu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru,Au;function Ug(t){Ru=t}function Hg(t){Au=t}class Vg extends ki{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Sn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Jt,new ge("[PRIORITY-POST]",Au))}makePost(e,n){const s=Ru(e);return new G(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new Vg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=Math.log(2);class $g{constructor(e){const n=r=>parseInt(Math.log(r)/jg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ti=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let f,g;if(u===0)return null;if(u===1)return f=t[c],g=n?n(f):f,new me(g,f.node,me.BLACK,null,null);{const x=parseInt(u/2,10)+c,E=i(c,x),P=i(x+1,a);return f=t[x],g=n?n(f):f,new me(g,f.node,me.BLACK,E,P)}},r=function(c){let a=null,u=null,f=t.length;const g=function(E,P){const V=f-E,j=f;f-=E;const p=i(V+1,j),d=t[V],h=n?n(d):d;x(new me(h,d.node,P,null,p))},x=function(E){a?(a.left=E,a=E):(u=E,a=E)};for(let E=0;E<c.count;++E){const P=c.nextBitIsOne(),V=Math.pow(2,c.count-(E+1));P?g(V,me.BLACK):(g(V,me.BLACK),g(V,me.RED))}return u},o=new $g(t.length),l=r(o);return new Oe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const ln={};class pt{static get Default(){return S(ln&&ue,"ChildrenNode.ts has not been loaded"),ur=ur||new pt({".priority":ln},{".priority":ue}),ur}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ti(s,e.getCompare()):l=ln;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new pt(u,a)}addToIndexes(e,n){const s=Ys(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===ln)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ti(l,o.getCompare())}else return ln;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ys(this.indexes_,i=>{if(i===ln)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;class F{static get EMPTY_NODE(){return Fn||(Fn=new F(new Oe(bo),null,pt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nu(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{S($(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tu(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":eu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gg extends F{constructor(){super(new Oe(bo),F.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Cs=new Gg;Object.defineProperties(G,{MIN:{value:new G(Cn,F.EMPTY_NODE)},MAX:{value:new G(Jt,Cs)}});Su.__EMPTY_NODE=F.EMPTY_NODE;ge.__childrenNodeConstructor=F;Wg(Cs);Hg(Cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=!0;function xe(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,xe(e))}if(!(t instanceof Array)&&Kg){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return F.EMPTY_NODE;const r=ti(n,Bg,o=>o.name,bo);if(s){const o=ti(n,ue.getCompare());return new F(r,xe(e),new pt({".priority":o},{".priority":ue}))}else return new F(r,xe(e),pt.Default)}else{let n=F.EMPTY_NODE;return Me(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Ug(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg extends ki{constructor(e){super(),this.indexPath_=e,S(!K(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Sn(e.name,n.name):r}makePost(e,n){const s=xe(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new G(Jt,e)}toString(){return Eu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends ki{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Sn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=xe(e);return new G(n,s)}toString(){return".value"}}const Yg=new zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function as(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Qg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(cs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(bn(n,s)):o.trackChildChange(as(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(cs(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(as(i,r,o))}else s.trackChildChange(bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.indexedFilter_=new Eo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,x)=>f(x,g)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const f=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(u&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(as(n,s,f)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(cs(n,f));const P=l.updateImmediateChild(n,F.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(bn(g.name,g.node)),P.updateImmediateChild(g.name,g.node)):P}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(cs(a.name,a.node)),r.trackChildChange(bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Io;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jg(t){return t.loadsAllData()?new Eo(t.getIndex()):t.hasLimit()?new Xg(t):new us(t)}function sc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===Yg?n="$value":t.index_===xn?n="$key":(S(t.index_ instanceof qg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ic(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends vu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=vs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ni.getListenId_(e,s),l={};this.listens_[o]=l;const c=sc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let f=u;if(a===404&&(f=null,a=null),a===null&&this.onDataUpdate_(r,f,!1,s),vn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ni.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sc(e._queryParams),s=e._path.toString(),i=new Di;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ep(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=is(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return{value:null,children:new Map}}function Du(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,si());const i=t.children.get(s);e=oe(e),Du(i,e,n)}}function Lr(t,e,n){t.value!==null?n(e,t.value):em(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);Lr(i,r,n)})}function em(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=10*1e3,nm=30*1e3,sm=5*60*1e3;class im{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tm(e);const s=rc+(nm-rc)*Math.random();Yn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Yn(this.reportStats_.bind(this),Math.floor(Math.random()*2*sm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function Ou(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function So(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ze.ACK_USER_WRITE,this.source=Ou()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new ii(Q(),n,this.revert)}}else return S($(this.path)===e,"operationForChild called for unrelated child."),new ii(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.source=e,this.path=n,this.type=ze.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new hs(this.source,Q()):new hs(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ze.OVERWRITE}operationForChild(e){return K(this.path)?new Zt(this.source,Q(),this.snap.getImmediateChild(e)):new Zt(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ze.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new Zt(this.source,Q(),n.value):new fs(this.source,Q(),n)}else return S($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function om(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qg(o.childName,o.snapshotNode))}),Ln(t,i,"child_removed",e,s,n),Ln(t,i,"child_added",e,s,n),Ln(t,i,"child_moved",r,s,n),Ln(t,i,"child_changed",e,s,n),Ln(t,i,"value",e,s,n),i}function Ln(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>cm(t,l,c)),o.forEach(l=>{const c=lm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function lm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cm(t,e,n){if(e.childName==null||n.childName==null)throw In("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e){return{eventCache:t,serverCache:e}}function Qn(t,e,n,s){return Mi(new Dt(e,n,s),t.serverCache)}function ku(t,e,n,s){return Mi(t.eventCache,new Dt(e,n,s))}function ri(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function en(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;const am=()=>(hr||(hr=new Oe(z_)),hr);class le{static fromObject(e){let n=new le(null);return Me(e,(s,i)=>{n=n.set(new ee(s),i)}),n}constructor(e,n=am()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(oe(e),n);return r!=null?{path:_e(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(oe(e)):new le(null)}}set(e,n){if(K(e))return new le(n,this.children);{const s=$(e),r=(this.children.get(s)||new le(null)).set(oe(e),n),o=this.children.insert(s,r);return new le(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(oe(e)):null}}setTree(e,n){if(K(e))return n;{const s=$(e),r=(this.children.get(s)||new le(null)).setTree(oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new le(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(oe(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(oe(e),_e(n,i),s):new le(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new le(null))}}function Xn(t,e,n){if(K(e))return new Qe(new le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new le(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function oc(t,e,n){let s=t;return Me(n,(i,r)=>{s=Xn(s,_e(e,i),r)}),s}function lc(t,e){if(K(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new le(null));return new Qe(n)}}function Br(t,e){return nn(t,e)!=null}function nn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function cc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Rt(t,e){if(K(e))return t;{const n=nn(t,e);return n!=null?new Qe(new le(n)):new Qe(t.writeTree_.subtree(e))}}function Wr(t){return t.writeTree_.isEmpty()}function En(t,e){return Mu(Q(),t.writeTree_,e)}function Mu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Mu(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){return Wu(e,t)}function um(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function hm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function fm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&dm(l,s.path)?i=!1:qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return pm(t),!0;if(s.snap)t.visibleWrites=lc(t.visibleWrites,s.path);else{const l=s.children;Me(l,c=>{t.visibleWrites=lc(t.visibleWrites,_e(s.path,c))})}return!0}else return!1}function dm(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(_e(t.path,n),e))return!0;return!1}function pm(t){t.visibleWrites=Fu(t.allWrites,_m,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _m(t){return t.visible}function Fu(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)qe(n,o)?(l=Ne(n,o),s=Xn(s,l,r.snap)):qe(o,n)&&(l=Ne(o,n),s=Xn(s,Q(),r.snap.getChild(l)));else if(r.children){if(qe(n,o))l=Ne(n,o),s=oc(s,l,r.children);else if(qe(o,n))if(l=Ne(o,n),K(l))s=oc(s,Q(),r.children);else{const c=vn(r.children,$(l));if(c){const a=c.getChild(oe(l));s=Xn(s,Q(),a)}}}else throw In("WriteRecord should have .snap or .children")}}return s}function Lu(t,e,n,s,i){if(!s&&!i){const r=nn(t.visibleWrites,e);if(r!=null)return r;{const o=Rt(t.visibleWrites,e);if(Wr(o))return n;if(n==null&&!Br(o,Q()))return null;{const l=n||F.EMPTY_NODE;return En(o,l)}}}else{const r=Rt(t.visibleWrites,e);if(!i&&Wr(r))return n;if(!i&&n==null&&!Br(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(qe(a.path,e)||qe(e,a.path))},l=Fu(t.allWrites,o,e),c=n||F.EMPTY_NODE;return En(l,c)}}}function gm(t,e,n){let s=F.EMPTY_NODE;const i=nn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Rt(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const c=En(Rt(r,new ee(o)),l);s=s.updateImmediateChild(o,c)}),cc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Rt(t.visibleWrites,e);return cc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mm(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Br(t.visibleWrites,r))return null;{const o=Rt(t.visibleWrites,r);return Wr(o)?i.getChild(n):En(o,i.getChild(n))}}function xm(t,e,n,s){const i=_e(e,n),r=nn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Rt(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function ym(t,e){return nn(t.visibleWrites,e)}function vm(t,e,n,s,i,r,o){let l;const c=Rt(t.visibleWrites,e),a=nn(c,Q());if(a!=null)l=a;else if(n!=null)l=En(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&u.length<i;)f(x,s)!==0&&u.push(x),x=g.getNext();return u}else return[]}function Cm(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function oi(t,e,n,s){return Lu(t.writeTree,t.treePath,e,n,s)}function To(t,e){return gm(t.writeTree,t.treePath,e)}function ac(t,e,n,s){return mm(t.writeTree,t.treePath,e,n,s)}function li(t,e){return ym(t.writeTree,_e(t.treePath,e))}function bm(t,e,n,s,i,r){return vm(t.writeTree,t.treePath,e,n,s,i,r)}function No(t,e,n){return xm(t.writeTree,t.treePath,e,n)}function Bu(t,e){return Wu(_e(t.treePath,e),t.writeTree)}function Wu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,as(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,cs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,as(s,e.snapshotNode,i.oldSnap));else throw In("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Uu=new Im;class Ro{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return No(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=bm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){return{filter:t}}function Sm(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Tm(t,e,n,s,i){const r=new Em;let o,l;if(n.type===ze.OVERWRITE){const a=n;a.source.fromUser?o=Ur(t,e,a.path,a.snap,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!K(a.path),o=ci(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===ze.MERGE){const a=n;a.source.fromUser?o=Rm(t,e,a.path,a.children,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Hr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===ze.ACK_USER_WRITE){const a=n;a.revert?o=Dm(t,e,a.path,s,i,r):o=Am(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===ze.LISTEN_COMPLETE)o=Pm(t,e,n.path,s,r);else throw In("Unknown operation type: "+n.type);const c=r.getChanges();return Nm(e,o,c),{viewCache:o,changes:c}}function Nm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ri(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Pu(ri(e)))}}function Hu(t,e,n,s,i,r){const o=e.eventCache;if(li(s,n)!=null)return e;{let l,c;if(K(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=en(e),u=a instanceof F?a:F.EMPTY_NODE,f=To(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const a=oi(s,en(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){S(Pt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const f=ac(s,n,u,c);f!=null?l=t.filter.updatePriority(u,f):l=o.getNode()}else{const u=oe(n);let f;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=ac(s,n,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(a).updateChild(u,g):f=o.getNode().getImmediateChild(a)}else f=No(s,a,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),a,f,u,i,r):l=o.getNode()}}return Qn(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function ci(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),x,null)}else{const x=$(n);if(!c.isCompleteForPath(n)&&Pt(n)>1)return e;const E=oe(n),V=c.getNode().getImmediateChild(x).updateChild(E,s);x===".priority"?a=u.updatePriority(c.getNode(),V):a=u.updateChild(c.getNode(),x,V,E,Uu,null)}const f=ku(e,a,c.isFullyInitialized()||K(n),u.filtersNodes()),g=new Ro(i,f,r);return Hu(t,f,n,i,g,l)}function Ur(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Ro(i,e,r);if(K(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Qn(e,a,!0,t.filter.filtersNodes());else{const f=$(n);if(f===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Qn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=oe(n),x=l.getNode().getImmediateChild(f);let E;if(K(g))E=s;else{const P=u.getCompleteChild(f);P!=null?bu(g)===".priority"&&P.getChild(Iu(g)).isEmpty()?E=P:E=P.updateChild(g,s):E=F.EMPTY_NODE}if(x.equals(E))c=e;else{const P=t.filter.updateChild(l.getNode(),f,E,g,u,o);c=Qn(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function uc(t,e){return t.eventCache.isCompleteForChild(e)}function Rm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=_e(n,c);uc(e,$(u))&&(l=Ur(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=_e(n,c);uc(e,$(u))||(l=Ur(t,l,u,a,i,r,o))}),l}function hc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Hr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;K(n)?a=s:a=new le(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((f,g)=>{if(u.hasChild(f)){const x=e.serverCache.getNode().getImmediateChild(f),E=hc(t,x,g);c=ci(t,c,new ee(f),E,i,r,o,l)}}),a.children.inorderTraversal((f,g)=>{const x=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!u.hasChild(f)&&!x){const E=e.serverCache.getNode().getImmediateChild(f),P=hc(t,E,g);c=ci(t,c,new ee(f),P,i,r,o,l)}}),c}function Am(t,e,n,s,i,r,o){if(li(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ci(t,e,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new le(null);return c.getNode().forEachChild(xn,(u,f)=>{a=a.set(new ee(u),f)}),Hr(t,e,n,a,i,r,l,o)}else return e}else{let a=new le(null);return s.foreach((u,f)=>{const g=_e(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Hr(t,e,n,a,i,r,l,o)}}function Pm(t,e,n,s,i){const r=e.serverCache,o=ku(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Hu(t,o,n,s,Uu,i)}function Dm(t,e,n,s,i,r){let o;if(li(s,n)!=null)return e;{const l=new Ro(s,e,i),c=e.eventCache.getNode();let a;if(K(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oi(s,en(e));else{const f=e.serverCache.getNode();S(f instanceof F,"serverChildren would be complete if leaf node"),u=To(s,f)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let f=No(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=c.getImmediateChild(u)),f!=null?a=t.filter.updateChild(c,u,f,oe(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,F.EMPTY_NODE,oe(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oi(s,en(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||li(s,Q())!=null,Qn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Eo(s.getIndex()),r=Jg(s);this.processor_=wm(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Dt(c,o.isFullyInitialized(),i.filtersNodes()),f=new Dt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Mi(f,u),this.eventGenerator_=new rm(this.query_)}get query(){return this.query_}}function km(t){return t.viewCache_.serverCache.getNode()}function Mm(t){return ri(t.viewCache_)}function Fm(t,e){const n=en(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function fc(t){return t.eventRegistrations_.length===0}function Lm(t,e){t.eventRegistrations_.push(e)}function dc(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function pc(t,e,n,s){e.type===ze.MERGE&&e.source.queryId!==null&&(S(en(t.viewCache_),"We should always have a full cache before handling merges"),S(ri(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Tm(t.processor_,i,e,n,s);return Sm(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Vu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Bm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(Pu(n.getNode())),Vu(t,s,n.getNode(),e)}function Vu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return om(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class ju{constructor(){this.views=new Map}}function Wm(t){S(!ai,"__referenceConstructor has already been defined"),ai=t}function Um(){return S(ai,"Reference.ts has not been loaded"),ai}function Hm(t){return t.views.size===0}function Ao(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),pc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pc(o,e,n,s));return r}}function $u(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=oi(n,i?s:null),c=!1;l?c=!0:s instanceof F?(l=To(n,s),c=!1):(l=F.EMPTY_NODE,c=!1);const a=Mi(new Dt(l,c,!1),new Dt(s,i,!1));return new Om(e,a)}return o}function Vm(t,e,n,s,i,r){const o=$u(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Lm(o,n),Bm(o,n)}function jm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(dc(a,n,s)),fc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(dc(c,n,s)),fc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Ot(t)&&r.push(new(Um())(e._repo,e._path)),{removed:r,events:o}}function Gu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function At(t,e){let n=null;for(const s of t.views.values())n=n||Fm(s,e);return n}function Ku(t,e){if(e._queryParams.loadsAllData())return Li(t);{const s=e._queryIdentifier;return t.views.get(s)}}function qu(t,e){return Ku(t,e)!=null}function Ot(t){return Li(t)!=null}function Li(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;function $m(t){S(!ui,"__referenceConstructor has already been defined"),ui=t}function Gm(){return S(ui,"Reference.ts has not been loaded"),ui}let Km=1;class _c{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=Cm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zu(t,e,n,s,i){return um(t.pendingWriteTree_,e,n,s,i),i?Es(t,new Zt(Ou(),e,n)):[]}function qt(t,e,n=!1){const s=hm(t.pendingWriteTree_,e);if(fm(t.pendingWriteTree_,e)){let r=new le(null);return s.snap!=null?r=r.set(Q(),!0):Me(s.children,o=>{r=r.set(new ee(o),!0)}),Es(t,new ii(s.path,r,n))}else return[]}function bs(t,e,n){return Es(t,new Zt(wo(),e,n))}function qm(t,e,n){const s=le.fromObject(n);return Es(t,new fs(wo(),e,s))}function zm(t,e){return Es(t,new hs(wo(),e))}function Ym(t,e,n){const s=Do(t,n);if(s){const i=Oo(s),r=i.path,o=i.queryId,l=Ne(r,e),c=new hs(So(o),l);return ko(t,r,c)}else return[]}function hi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||qu(o,e))){const c=jm(o,e,n,s);Hm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(g,x)=>Ot(x));if(u&&!f){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=Jm(g);for(let E=0;E<x.length;++E){const P=x[E],V=P.query,j=Ju(t,P);t.listenProvider_.startListening(Jn(V),ds(t,V),j.hashFn,j.onComplete)}}}!f&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(Jn(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Bi(g));t.listenProvider_.stopListening(Jn(g),x)}))}Zm(t,a)}return l}function Yu(t,e,n,s){const i=Do(t,s);if(i!=null){const r=Oo(i),o=r.path,l=r.queryId,c=Ne(o,e),a=new Zt(So(l),c,n);return ko(t,o,a)}else return[]}function Qm(t,e,n,s){const i=Do(t,s);if(i){const r=Oo(i),o=r.path,l=r.queryId,c=Ne(o,e),a=le.fromObject(n),u=new fs(So(l),c,a);return ko(t,o,u)}else return[]}function Vr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const E=Ne(g,i);r=r||At(x,E),o=o||Ot(x)});let l=t.syncPointTree_.get(i);l?(o=o||Ot(l),r=r||At(l,Q())):(l=new ju,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,E)=>{const P=At(E,Q());P&&(r=r.updateImmediateChild(x,P))}));const a=qu(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Bi(e);S(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=e0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const u=Fi(t.pendingWriteTree_,i);let f=Vm(l,e,n,u,r,c);if(!a&&!o&&!s){const g=Ku(l,e);f=f.concat(t0(t,e,g))}return f}function Po(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ne(o,e),a=At(l,c);if(a)return a});return Lu(i,e,r,n,!0)}function Xm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const f=Ne(a,n);s=s||At(u,f)});let i=t.syncPointTree_.get(n);i?s=s||At(i,Q()):(i=new ju,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Dt(s,!0,!1):null,l=Fi(t.pendingWriteTree_,e._path),c=$u(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return Mm(c)}function Es(t,e){return Qu(e,t.syncPointTree_,null,Fi(t.pendingWriteTree_,Q()))}function Qu(t,e,n,s){if(K(t.path))return Xu(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=At(i,Q()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Bu(s,o);r=r.concat(Qu(l,c,a,u))}return i&&(r=r.concat(Ao(i,t,s,n))),r}}function Xu(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=At(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Bu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Xu(u,l,c,a)))}),i&&(r=r.concat(Ao(i,t,s,n))),r}function Ju(t,e){const n=e.query,s=ds(t,n);return{hashFn:()=>(km(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ym(t,n._path,s):zm(t,n._path);{const r=X_(i,n);return hi(t,n,null,r)}}}}function ds(t,e){const n=Bi(e);return t.queryToTagMap.get(n)}function Bi(t){return t._path.toString()+"$"+t._queryIdentifier}function Do(t,e){return t.tagToQueryMap.get(e)}function Oo(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function ko(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Fi(t.pendingWriteTree_,e);return Ao(s,n,i,null)}function Jm(t){return t.fold((e,n,s)=>{if(n&&Ot(n))return[Li(n)];{let i=[];return n&&(i=Gu(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function Jn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Gm())(t._repo,t._path):t}function Zm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Bi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function e0(){return Km++}function t0(t,e,n){const s=e._path,i=ds(t,e),r=Ju(t,n),o=t.listenProvider_.startListening(Jn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,f)=>{if(!K(a)&&u&&Ot(u))return[Li(u).query];{let g=[];return u&&(g=g.concat(Gu(u).map(x=>x.query))),Me(f,(x,E)=>{g=g.concat(E)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(Jn(u),ds(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mo(n)}node(){return this.node_}}class Fo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Fo(this.syncTree_,n)}node(){return Po(this.syncTree_,this.path_)}}const n0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gc=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return s0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return i0(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},s0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},i0=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},r0=function(t,e,n,s){return Lo(e,new Fo(n,t),s)},Zu=function(t,e,n){return Lo(t,new Mo(e),n)};function Lo(t,e,n){const s=t.getPriority().val(),i=gc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=gc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(ue,(l,c)=>{const a=Lo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Wo(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=$(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new Bo(i,s,r),n=oe(n),i=$(n)}return s}function Nn(t){return t.node.value}function eh(t,e){t.node.value=e,jr(t)}function th(t){return t.node.childCount>0}function o0(t){return Nn(t)===void 0&&!th(t)}function Wi(t,e){Me(t.node.children,(n,s)=>{e(new Bo(n,t,s))})}function nh(t,e,n,s){n&&e(t),Wi(t,i=>{nh(i,e,!0)})}function l0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Is(t){return new ee(t.parent===null?t.name:Is(t.parent)+"/"+t.name)}function jr(t){t.parent!==null&&c0(t.parent,t.name,t)}function c0(t,e,n){const s=o0(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,jr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=/[\[\].#$\/\u0000-\u001F\u007F]/,u0=/[\[\].#$\u0000-\u001F\u007F]/,fr=10*1024*1024,sh=function(t){return typeof t=="string"&&t.length!==0&&!a0.test(t)},ih=function(t){return typeof t=="string"&&t.length!==0&&!u0.test(t)},h0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ih(t)},f0=function(t,e,n,s){Uo(po(t,"value"),e,n)},Uo=function(t,e,n){const s=n instanceof ee?new Ag(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(tu(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>fr/3&&Oi(e)>fr)throw new Error(t+"contains a string greater than "+fr+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!sh(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pg(s,o),Uo(t,l,s),Dg(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},rh=function(t,e,n,s){if(!ih(n))throw new Error(po(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},d0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rh(t,e,n)},oh=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},p0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!h0(n))throw new Error(po(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ho(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!vo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function lh(t,e,n){Ho(t,n),ch(t,s=>vo(s,e))}function ct(t,e,n){Ho(t,n),ch(t,s=>qe(s,e)||qe(e,s))}function ch(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(g0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function g0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();zn&&Ee("event: "+n.toString()),Tn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="repo_interrupt",x0=25;class y0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new Bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function v0(t,e,n){if(t.stats_=xo(t.repoInfo_),t.forceRestClient_||tg())t.server_=new ni(t.repoInfo_,(s,i,r,o)=>{mc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{mc(t,s,i,r,o)},s=>{xc(t,s)},s=>{b0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=og(t.repoInfo_,()=>new im(t.stats_,t.server_)),t.infoData_=new Zg,t.infoSyncTree_=new _c({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=bs(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),jo(t,"connected",!1),t.serverSyncTree_=new _c({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ct(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function C0(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vo(t){return n0({timestamp:C0(t)})}function mc(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ys(n,a=>xe(a));o=Qm(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=Yu(t.serverSyncTree_,r,c,i)}else if(s){const c=Ys(n,a=>xe(a));o=qm(t.serverSyncTree_,r,c)}else{const c=xe(n);o=bs(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Hi(t,r)),ct(t.eventQueue_,l,o)}function xc(t,e){jo(t,"connected",e),e===!1&&w0(t)}function b0(t,e){Me(e,(n,s)=>{jo(t,n,s)})}function jo(t,e,n){const s=new ee("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=bs(t.infoSyncTree_,s,i);ct(t.eventQueue_,s,r)}function ah(t){return t.nextWriteId_++}function E0(t,e,n){const s=Xm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Vr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bs(t.serverSyncTree_,e._path,r);else{const l=ds(t.serverSyncTree_,e);o=Yu(t.serverSyncTree_,e._path,r,l)}return ct(t.eventQueue_,e._path,o),hi(t.serverSyncTree_,e,n,null,!0),r},i=>(Ui(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function I0(t,e,n,s,i){Ui(t,"set",{path:e.toString(),value:n,priority:s});const r=Vo(t),o=xe(n,s),l=Po(t.serverSyncTree_,e),c=Zu(o,l,r),a=ah(t),u=zu(t.serverSyncTree_,e,c,a,!0);Ho(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const E=g==="ok";E||ke("set at "+e+" failed: "+g);const P=qt(t.serverSyncTree_,a,!E);ct(t.eventQueue_,e,P),N0(t,i,g,x)});const f=ph(t,e);Hi(t,f),ct(t.eventQueue_,f,[])}function w0(t){Ui(t,"onDisconnectEvents");const e=Vo(t),n=si();Lr(t.onDisconnect_,Q(),(i,r)=>{const o=r0(i,r,t.serverSyncTree_,e);Du(n,i,o)});let s=[];Lr(n,Q(),(i,r)=>{s=s.concat(bs(t.serverSyncTree_,i,r));const o=ph(t,i);Hi(t,o)}),t.onDisconnect_=si(),ct(t.eventQueue_,Q(),s)}function S0(t,e,n){let s;$(e._path)===".info"?s=Vr(t.infoSyncTree_,e,n):s=Vr(t.serverSyncTree_,e,n),lh(t.eventQueue_,e._path,s)}function yc(t,e,n){let s;$(e._path)===".info"?s=hi(t.infoSyncTree_,e,n):s=hi(t.serverSyncTree_,e,n),lh(t.eventQueue_,e._path,s)}function T0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(m0)}function Ui(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function N0(t,e,n,s){e&&Tn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function uh(t,e,n){return Po(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function $o(t,e=t.transactionQueueTree_){if(e||Vi(t,e),Nn(e)){const n=fh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&R0(t,Is(e),n)}else th(e)&&Wi(e,n=>{$o(t,n)})}function R0(t,e,n){const s=n.map(a=>a.currentWriteId),i=uh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ne(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ui(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(qt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Vi(t,Wo(t.transactionQueueTree_,e)),$o(t,t.transactionQueueTree_),ct(t.eventQueue_,e,u);for(let g=0;g<f.length;g++)Tn(f[g])}else{if(a==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ke("transaction at "+c.toString()+" failed: "+a);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=a}Hi(t,e)}},o)}function Hi(t,e){const n=hh(t,e),s=Is(n),i=fh(t,n);return A0(t,i,s),s}function A0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Ne(n,c.path);let u=!1,f;if(S(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,f=c.abortReason,i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=x0)u=!0,f="maxretry",i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=uh(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Uo("transaction failed: Data returned ",x,c.path);let E=xe(x);typeof x=="object"&&x!=null&&yt(x,".priority")||(E=E.updatePriority(g.getPriority()));const V=c.currentWriteId,j=Vo(t),p=Zu(E,g,j);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=p,c.currentWriteId=ah(t),o.splice(o.indexOf(V),1),i=i.concat(zu(t.serverSyncTree_,c.path,p,c.currentWriteId,c.applyLocally)),i=i.concat(qt(t.serverSyncTree_,V,!0))}else u=!0,f="nodata",i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}Vi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Tn(s[l]);$o(t,t.transactionQueueTree_)}function hh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Nn(s)===void 0;)s=Wo(s,n),e=oe(e),n=$(e);return s}function fh(t,e){const n=[];return dh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function dh(t,e,n){const s=Nn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Wi(e,i=>{dh(t,i,n)})}function Vi(t,e){const n=Nn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,eh(e,n.length>0?n:void 0)}Wi(e,s=>{Vi(t,s)})}function ph(t,e){const n=Is(hh(t,e)),s=Wo(t.transactionQueueTree_,e);return l0(s,i=>{dr(t,i)}),dr(t,s),nh(s,i=>{dr(t,i)}),n}function dr(t,e){const n=Nn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?eh(e,void 0):n.length=r+1,ct(t.eventQueue_,Is(e),i);for(let o=0;o<s.length;o++)Tn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function D0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const vc=function(t,e){const n=O0(t),s=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new du(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},O0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=P0(t.substring(u,f)));const g=D0(t.substring(Math.min(t.length,f)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class M0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Go{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:bu(this._path)}get ref(){return new vt(this._repo,this._path)}get _queryIdentifier(){const e=ic(this._queryParams),n=go(e);return n==="{}"?"default":n}get _queryObject(){return ic(this._queryParams)}isEqual(e){if(e=wn(e),!(e instanceof Go))return!1;const n=this._repo===e._repo,s=vo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Rg(this._path)}}class vt extends Go{constructor(e,n){super(e,n,new Io,!1)}get parent(){const e=Iu(this._path);return e===null?null:new vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=$r(this.ref,e);return new ps(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ps(i,$r(this.ref,s),ue)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Os(t,e){return t=wn(t),t._checkNotDeleted("ref"),e!==void 0?$r(t._root,e):t._root}function $r(t,e){return t=wn(t),$(t._path)===null?d0("child","path",e):rh("child","path",e),new vt(t._repo,_e(t._path,e))}function F0(t){return oh("remove",t._path),gh(t,null)}function gh(t,e){t=wn(t),oh("set",t._path),f0("set",e,t._path);const n=new Di;return I0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function L0(t){t=wn(t);const e=new _h(()=>{}),n=new ji(e);return E0(t._repo,t,n).then(s=>new ps(s,new vt(t._repo,t._path),t._queryParams.getIndex()))}class ji{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new k0("value",this,new ps(e.snapshotNode,new vt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M0(this,e,n):null}matches(e){return e instanceof ji?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function B0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,f)=>{yc(t._repo,t,l),c(u,f)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new _h(n,r||void 0),l=new ji(o);return S0(t._repo,t,l),()=>yc(t._repo,t,l)}function W0(t,e,n,s){return B0(t,"value",e,n,s)}Wm(vt);$m(vt);/**
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
 */const U0="FIREBASE_DATABASE_EMULATOR_HOST",Gr={};let H0=!1;function V0(t,e,n,s){t.repoInfo_=new du(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function j0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vc(r,i),l=o.repoInfo,c;typeof process<"u"&&Ul&&(c=Ul[U0]),c?(r=`http://${c}?ns=${l.namespace}`,o=vc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new sg(t.name,t.options,e);p0("Invalid Firebase Database URL",o),K(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=G0(l,t,a,new ng(t,n));return new K0(u,t)}function $0(t,e){const n=Gr[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),T0(t),delete n[t.key]}function G0(t,e,n,s){let i=Gr[e.name];i||(i={},Gr[e.name]=i);let r=i[t.toURLString()];return r&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new y0(t,H0,n,s),i[t.toURLString()]=r,r}class K0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(v0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&($0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function q0(t=T_(),e){const n=b_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=hp("database");s&&z0(n,...s)}return n}function z0(t,e,n,s={}){t=wn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Qs(s,r.repoInfo_.emulatorOptions))return;mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Bs(Bs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:fp(s.mockUserToken,t.app.options.projectId);o=new Bs(l)}V0(r,i,s,o)}/**
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
 */function Y0(t){U_(S_),Js(new rs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return j0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(Hl,Vl,t),gn(Hl,Vl,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Y0();const Ht=di;(function(t,e){const n=di,s=t();for(;;)try{if(parseInt(n(284))/1+parseInt(n(293))/2*(parseInt(n(280))/3)+-parseInt(n(279))/4+parseInt(n(289))/5+-parseInt(n(291))/6*(parseInt(n(294))/7)+-parseInt(n(285))/8+parseInt(n(282))/9*(parseInt(n(290))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(fi,554629);function fi(){const t=["AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","163279XDGFaq","8835384LjwGNO","iamwait.firebasestorage.app","iamwait.firebaseapp.com","720775593565","4229960eKJFTB","260viQoKb","10722rYcssf","1:720775593565:web:1a263bf6a87ecfea3817b4","2169106tazlWx","3367wqyitg","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","1830140XRnjLQ","3qevUNB","iamwait","305415mkNiXA"];return fi=function(){return t},fi()}function di(t,e){const n=fi();return di=function(s,i){return s=s-279,n[s]},di(t,e)}const Q0={apiKey:Ht(283),authDomain:Ht(287),databaseURL:Ht(295),projectId:Ht(281),storageBucket:Ht(286),messagingSenderId:Ht(288),appId:Ht(292),measurementId:"G-3RRDNZ9ME5"},X0=Ya(Q0),ks=q0(X0),un=_i;(function(t,e){const n=_i,s=t();for(;;)try{if(-parseInt(n(316))/1*(-parseInt(n(320))/2)+parseInt(n(327))/3+-parseInt(n(332))/4+-parseInt(n(318))/5*(parseInt(n(336))/6)+parseInt(n(324))/7*(-parseInt(n(330))/8)+-parseInt(n(325))/9*(-parseInt(n(321))/10)+parseInt(n(306))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(pi,860873);function pi(){const t=["%c ","error","then","lookField","UhsWR","fbStore2","JzVWE","368453oNNJpZ","val","1009320rSWrgA","CLtIE","2ADANER","314790ORWJwm","log","catch","735ZylMlO","387WgnukP"," удалены!","2137485NwwfhP","stringify"," -  данные записаны","48648xwvPFj","cLPZd","2745572qMDZsK","XKUEW"," на прослушке","Ошибка записи данных: ","42yPwplM","Данные ","EOsoD","KbOvP","fQupD","TNuCF","12807014jpYIvy"," = ","TAisk"];return pi=function(){return t},pi()}const mh=Zd(un(314),{state:()=>({gameId:"",myId:953446309,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:4}),actions:{async getField(t){const e=un,n={DaLVe:function(i,r){return i+r},TNuCF:function(i,r,o){return i(r,o)},UhsWR:function(i,r){return i(r)}},s=n[e(305)](Os,ks,t);return n[e(313)](L0,s)[e(311)](i=>{const r=e;if(i.exists()){const o=i[r(317)]();return Bn(n.DaLVe(">>> Данные по "+t+r(307),JSON[r(328)](o))),o}else Bn(t+" : данные не найдены")})},async setField(t,e){const n=un,s={JzVWE:function(r,o){return r(o)},fQupD:function(r,o){return r+o},cLPZd:n(329),MVJSh:n(335),XKUEW:function(r,o,l){return r(o,l)}},i=Os(ks,t);return s[n(333)](gh,i,e)[n(311)](()=>{const r=n;s[r(315)](Bn,s[r(304)](t,s[r(331)]))})[n(323)](r=>{console[n(310)](s.MVJSh,r)})},async onValue(t){const e=un,n={TAisk:function(i,r){return i(r)},CLtIE:function(i,r,o){return i(r,o)}},s=n[e(319)](Os,ks,t);n[e(319)](W0,s,i=>{const r=e;n[r(308)](Bn,"########### ########## Данные "+t+r(334)),this[r(312)]=i[r(317)]()})},async removeField(t){const e=un,n={KbOvP:function(i,r){return i(r)},EOsoD:function(i,r,o){return i(r,o)}};console[e(322)](t);const s=n[e(338)](Os,ks,t);n[e(339)](F0,s).then(()=>{const i=e;n[i(339)](Bn,i(337)+t+i(326))})}}});function _i(t,e){const n=pi();return _i=function(s,i){return s=s-304,n[s]},_i(t,e)}const Bn=t=>console.log(un(309)+t,"color: darkgreen");function gi(){const t=["4770029OcVWNG","QyvUw"," с игроком ","Yksda","gameLink","g1/look/","qkCjK","Имя","lookField"," ! ","g1/look","myName","qETkS","avqpv","onClick","aldYc","111","nMuNm","removeField","green-bt","bEMdf","name2","larger","sqnCn","MrUSO","accept","iOhkn","unkYw","xIyKj","dglFd","sQRPV","32PHVeEl","MUrWD","ulbAU","getField","19934VpUZLu","VbWTC","g1/game/","CkZQH","vkQWc","nIOqG","cDxPm","/play/","EdtST","href","iZxgK","id2","length","zqKhe","5595300vEvVbG","div","input","PTsFA","Добавился в список, жду","game","7213227uGDFgR","syXXC","ABAXw","qHgyr","includes","rToIy","reload","QfMPt","ShNUy","36177bKdeMt","NFHJC","/game/","red-bt","* тут можно поменять ваш Никнейм","MTgpw","HACkZ","hLSRP","OCdzx","90HhfOhA",", поеп не откликнится ","kBkTj","JKTgw","game = ","pEqfT","name","ZLJiY","SczuQ","button","Список желающих играть:"," : ","CmIjp","bEjJB","UVwop","1355048bVXDsw","getItem","myNickName"," Контекс игры:"," Вас выбрал игрок: ","tnjHS","KAwei","CaiHj","mpGBF","RES=","CXrlQ","ODrde","kWgJD"," Привет, ","Jvjoc","> >> > >> gotoStartgane","431125ZhmGCZ","* нельзя выбирать себя","ANALIZ ","onValue","sUvoD","RPmMj","random","NXPyO","VGBIY","nickName","mlqAW","xtNNr","FRMRu","DzCxX","value","res","Yhabd","9DgTrWW","bTyQj","then","stage","XXYBs","kOVLP","setField","MRwlY","Отказаться","iWDQf","log","tZgcf","WnXDF","myId","ScDKH","rUxWl","Согласиться","link","forEach"," Жду игрока ","bFPgp","jxDZM","dmyaZ","................ОБНОВИЛСЯ А Я ПРОПАЛ","Сменить nickName","129JEQVva","FRbLi","XiZid","BMaqI","YHhgR","cVoYQ","NRHQT","KwrMr","Играем","BinderComp","ndYft","CZgtY","VFIth","nbZXv","xniUB"];return gi=function(){return t},gi()}const Kr=_s;(function(t,e){const n=_s,s=t();for(;;)try{if(-parseInt(n(255))/1+parseInt(n(226))/2*(-parseInt(n(176))/3)+parseInt(n(222))/4*(-parseInt(n(134))/5)+-parseInt(n(240))/6+-parseInt(n(246))/7+parseInt(n(279))/8*(-parseInt(n(151))/9)+-parseInt(n(264))/10*(-parseInt(n(191))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,615801);function _s(t,e){const n=gi();return _s=function(s,i){return s=s-122,n[s]},_s(t,e)}const J0={key:0},Z0={key:0},ex=["onClick"],tx={key:1},nx={key:0},sx=[Kr(205)],ix={key:1,class:"red-notice"},rx={key:2},ox={key:3},lx={key:4},cx=gf({__name:Kr(185),props:{game:{}},setup(t){const e=Kr,n={bFPgp:function(p,d){return p(d)},sqnCn:function(p,d){return p(d)},HACkZ:function(p,d){return p*d},PTsFA:function(p,d){return p+d},UVwop:e(198),KAwei:function(p,d){return p(d)},QyvUw:function(p,d){return p*d},ODrde:e(127),iZxgK:e(257),RPmMj:function(p,d){return p+d},dmyaZ:e(233),ulbAU:function(p,d){return p===d},mpGBF:function(p,d){return p(d)},NXPyO:function(p,d){return p==d},Jvjoc:function(p,d){return p>d},EdtST:function(p){return p()},WnXDF:e(136),OCdzx:e(207),VFIth:function(p,d){return p(d)},BWoYt:e(201),NRHQT:function(p,d,h){return p(d,h)},xniUB:function(p){return p()},hLSRP:function(p,d){return p+d},qETkS:e(196),ScDKH:e(149),NFHJC:function(p,d){return p(d)},nbZXv:"g1/play/",SczuQ:e(228),dglFd:"ВСЕ НАСТРОЙКИ ИГРЫ",xtNNr:function(p,d,h){return p(d,h)},nMuNm:function(p){return p()},CaiHj:e(273),rToIy:e(210),xIyKj:function(p,d,h,v,D,te){return p(d,h,v,D,te)},FRbLi:function(p,d,h,v,D){return p(d,h,v,D)},rUxWl:function(p,d,h,v,D){return p(d,h,v,D)},MRwlY:function(p,d){return p+d},fXVyO:function(p,d){return p+d},nIOqG:function(p,d){return p(d)},dZIga:function(p,d){return p(d)},iOhkn:function(p,d,h,v,D){return p(d,h,v,D)},mlqAW:function(p){return p()},CXrlQ:function(p,d,h,v){return p(d,h,v)},BMaqI:e(131),eHNck:e(200),qHgyr:function(p,d,h,v){return p(d,h,v)},ogaAc:e(242),CZgtY:"4px",CmIjp:"center",CkHob:e(175),KwrMr:function(p,d,h,v,D){return p(d,h,v,D)},XXYBs:"div",bEMdf:function(p,d){return p>d},CkZQH:function(p,d,h,v){return p(d,h,v)},aldYc:e(274),ABAXw:function(p,d){return p(d)},FRMRu:function(p,d,h){return p(d,h)},ndYft:function(p,d,h,v){return p(d,h,v)},iWDQf:" Зарегистрироваться в поиске ",ZLJiY:function(p,d,h,v,D){return p(d,h,v,D)},MTgpw:function(p,d,h){return p(d,h)},zqKhe:function(p){return p()},avqpv:function(p,d,h,v,D){return p(d,h,v,D)},MUrWD:function(p,d,h,v){return p(d,h,v)},sUvoD:function(p,d,h){return p(d,h)},VGBIY:function(p,d,h){return p(d,h)},kTVqT:function(p){return p()},kOVLP:e(135),Yhabd:function(p,d,h){return p(d,h)},tnjHS:e(170),tZgcf:function(p,d){return p(d)},sQRPV:e(122),JKTgw:function(p,d,h,v,D){return p(d,h,v,D)},bEjJB:function(p,d,h,v,D){return p(d,h,v,D)},Yksda:function(p,d,h,v){return p(d,h,v)},XiZid:function(p){return p()},VARwq:function(p,d,h,v){return p(d,h,v)},bTyQj:function(p,d,h,v,D){return p(d,h,v,D)},cVoYQ:e(184),qkCjK:e(193),QfMPt:function(p,d,h,v,D){return p(d,h,v,D)},cDxPm:function(p,d,h,v,D){return p(d,h,v,D)},VbWTC:function(p,d){return p(d)},MrUSO:e(282),ShNUy:function(p,d){return p+d},BUczt:function(p,d,h,v,D){return p(d,h,v,D)},syXXC:function(p,d,h){return p(d,h)},kBkTj:function(p,d,h,v,D){return p(d,h,v,D)}},s=mh(),i=n.bFPgp(Gt,localStorage[e(280)](e(281))),r=n[e(227)](Gt,[]),o=n.EdtST(Gt),l=Gt(),c=n[e(214)](Gt,""),a=function(){const p=e;location[p(235)][p(250)]("localhost:")&&(s[p(164)]=s[p(164)]||n[p(171)](parseInt,n[p(214)](String,n[p(261)](Math[p(140)](),1e3))),s[p(202)]=s[p(143)]||s[p(202)]||n.PTsFA(n[p(278)],n.KAwei(parseInt,n[p(124)](String,n[p(192)](Math[p(140)](),100)))))},u=function(){const p=e;s[p(143)]=i[p(148)],i.value&&localStorage.setItem(p(281),i.value)};function f(){const p=e,d={kWgJD:n[p(129)],vkQWc:function(h){return h()},pEqfT:function(h,v){return n[p(243)](h,v)},unkYw:n[p(236)],DzCxX:p(168),jxDZM:function(h,v){return n[p(243)](h,v)}};console[p(161)](p(268),t[p(245)]),s[p(225)](n.RPmMj(n[p(243)](t[p(245)],n[p(173)]),s.myId))[p(153)](h=>{const v=p;if(console[v(161)](d[v(130)],h),!h)d[v(230)](x),s[v(154)]=1;else{o.value={id:h.id,name:h.name},s[v(154)]=5;let D=d[v(269)](d[v(269)](t.game,d.unkYw),h[v(245)]);console[v(161)](d[v(147)],D),s.getField(d[v(269)](d[v(172)](t.game,d[v(218)]),h.game)).then(te=>{const O=v;c[O(148)]=te})}})}const g=function(p){const d=e;console[d(161)](n[d(163)],p),r.value=[],s[d(154)]=1;let h=!1;p&&Object.keys(p)[d(169)](v=>{const D=d;if(s[D(154)]>3)return!1;n[D(224)](v,n[D(126)](String,s.myId))&&v&&(h=!0,s.stage=2,p[v][D(237)]&&(o[D(148)]={id:p[v].id2,name:p[v][D(212)]},s[D(154)]=4)),n[D(141)](p[v][D(237)],s.myId)&&(h=!0,s[D(154)]=3),n[D(132)](s[D(154)],2)&&!h&&(console[D(161)](D(174)),n[D(234)](alert),location[D(252)]()),p[v][D(216)]&&j(),v&&p[v]&&r[D(148)].push({id:v,name:p[v].name})})};function x(){const p=e;s[p(137)](n.BWoYt)[p(153)](d=>{const h=p;console[h(161)](n[h(263)],d),n.VFIth(g,d)}),n[p(182)](_n,()=>s[p(199)],d=>g(d)),n[p(182)](_n,()=>s[p(164)],()=>f())}function E(){const p=e;n[p(190)](a),s[p(157)](n[p(262)](n[p(203)],s[p(164)]),{name:s[p(202)]})}function P(p){const d=e;if(n.NXPyO(p.id,s.myId))return l[d(148)]=!0,n.NRHQT(setTimeout,()=>l.value=!1,1500),!1;n.xniUB(a),s[d(157)](n[d(243)](n[d(203)],p.id),{name:p[d(270)],id2:s[d(164)],name2:s[d(202)]})[d(153)](h=>{const v=d;console.log(v(149),h),o.value={id:p.id,name:p[v(270)]},s[v(154)]=3})}function V(p){const d=e;n[d(234)](a),p&&o[d(148)]&&s[d(157)](n[d(203)]+o[d(148)].id,{name:o[d(148)][d(270)],id2:s.myId,name2:s.myName,accept:!0})[d(153)](h=>{const v=d;console[v(161)](n[v(165)],h)})}function j(){var v,D,te;const p=e;let d=Date.now(),h=n[p(256)](String,o[p(148)].id);o[p(148)].id>s[p(164)]?h+="::"+s[p(164)]:h=n[p(262)](n[p(262)](s.myId,"::"),h),console.log(p(195),h),console.log(p(133)),s[p(157)](n[p(243)](n[p(189)],s[p(164)]),{id:(v=o[p(148)])==null?void 0:v.id,name:(D=o.value)==null?void 0:D[p(270)],game:h,date:d}),s.setField(n[p(243)](n[p(189)],(te=o[p(148)])==null?void 0:te.id),{id:s[p(164)],name:s[p(202)],game:h,date:d}),s[p(157)](n[p(272)]+h,{game:n[p(220)]}),n[p(145)](setTimeout,()=>{var L;const O=p;s[O(209)](n[O(203)]+((L=o[O(148)])==null?void 0:L.id)),s[O(209)](n[O(139)](n[O(203)],s[O(164)])),location[O(252)]()},2e3)}return n[e(231)](ao,()=>{f()}),(p,d)=>{var D,te;const h=e,v={YHhgR:function(O,L,ce,Re,Ue,Xe){return n[_s(219)](O,L,ce,Re,Ue,Xe)},oOiMe:n[h(125)]};return n.xniUB(ve),n[h(177)](Pe,Ve,null,[d[32]||(d[32]=n.rUxWl(U,"hr",null,null,-1)),d[33]||(d[33]=n[h(166)](U,"i",null,"::::::: Связывание :::::::",-1)),d[34]||(d[34]=n[h(177)](U,"br",null,null,-1)),n[h(145)](ut,n.RPmMj(n[h(158)](n.fXVyO(" ",n.nIOqG(Ge,n.VFIth(He,s)[h(164)])),h(275))+n.dZIga(Ge,He(s)[h(202)])," "),1),d[35]||(d[35]=n[h(217)](U,"br",null,null,-1)),ut(n[h(158)](" stage:",Ge(He(s)[h(154)]))+" ",1),d[36]||(d[36]=U("hr",null,null,-1)),n[h(224)](n[h(171)](He,s)[h(154)],1)?(n[h(144)](ve),n[h(128)](Pe,h(241),J0,[n.FRbLi(U,"p",null,n[h(139)](n[h(243)](n[h(179)],n[h(124)](Ge,n[h(171)](He,s).nickName||He(s)[h(202)])),n.eHNck),1),n[h(249)](U,"p",null,[n.xtNNr(df,n[h(217)](U,n.ogaAc,{"onUpdate:modelValue":d[0]||(d[0]=O=>i[h(148)]=O),maxlength:"16",style:{"font-size":h(213),padding:n[h(187)],"text-align":n[h(276)]},onInput:d[1]||(d[1]=O=>u()),placeholder:n.CkHob},null,544),[[Hd,i[h(148)]]])]),d[8]||(d[8]=n[h(183)](U,n[h(155)],{class:"red-notice"},h(259),-1)),r[h(148)]&&n[h(211)](r[h(148)][h(238)],1)?(n[h(208)](ve),n[h(229)](Pe,h(241),Z0,[d[5]||(d[5]=n[h(217)](U,"h3",null,n[h(206)],-1)),(n.ABAXw(ve,!0),n[h(177)](Pe,Ve,null,tl(r[h(148)],O=>{const L=h;return ve(),v[L(180)](Pe,v.oOiMe,{class:"green-bt",key:O.id,onClick:ce=>P(O)},Ge(O[L(270)]),9,ex)}),128)),d[6]||(d[6]=n[h(166)](U,"br",null,null,-1)),d[7]||(d[7]=U("br",null,null,-1))])):n[h(146)](Ct,"",!0),n[h(186)](U,n[h(125)],{class:h(258),onClick:d[2]||(d[2]=O=>E())},n[h(160)]),d[9]||(d[9]=n[h(271)](U,"br",null,null,-1)),d[10]||(d[10]=n[h(183)](U,"br",null,null,-1))])):n.MTgpw(Ct,"",!0),n.dZIga(He,s)[h(154)]===2?(n[h(239)](ve),n[h(186)](Pe,n.XXYBs,tx,[d[14]||(d[14]=n[h(204)](U,"p",null,h(244),-1)),r[h(148)][h(238)]?(ve(),n[h(223)](Pe,n[h(155)],nx,[d[11]||(d[11]=U("h3",null,n[h(206)],-1)),(n[h(214)](ve,!0),Pe(Ve,null,n[h(138)](tl,r[h(148)],O=>{const L=h;return n[L(208)](ve),Pe(n[L(125)],{class:n[L(251)],key:O.id,onClick:ce=>P(O)},n.KAwei(Ge,O[L(270)]),9,sx)}),128)),d[12]||(d[12]=n[h(204)](U,"br",null,null,-1)),d[13]||(d[13]=n.rUxWl(U,"br",null,null,-1))])):n[h(142)](Ct,"",!0),l[h(148)]?(n.kTVqT(ve),n.qHgyr(Pe,n[h(155)],ix,n[h(156)])):Ct("",!0)])):n[h(150)](Ct,"",!0),n[h(224)](n[h(214)](He,s)[h(154)],3)?(n.zqKhe(ve),n[h(128)](Pe,n[h(155)],rx,[n.CXrlQ(U,"p",null,[d[15]||(d[15]=n[h(248)](ut,n[h(123)])),U("b",null,n[h(188)](Ge,(D=o[h(148)])==null?void 0:D[h(270)]),1),d[16]||(d[16]=n[h(162)](ut,h(265)))]),d[17]||(d[17]=n[h(217)](U,"h3",null,n[h(206)],-1))])):n[h(138)](Ct,"",!0),n[h(224)](n.ABAXw(He,s)[h(154)],4)&&((te=o[h(148)])!=null&&te.id)?(ve(),Pe(n[h(155)],ox,[d[18]||(d[18]=n.tZgcf(ut,n[h(221)])),d[19]||(d[19]=U("br",null,null,-1)),d[20]||(d[20]=n[h(267)](U,"br",null,null,-1)),U("b",null,Ge(o.value[h(270)]),1),d[21]||(d[21]=U("br",null,null,-1)),d[22]||(d[22]=n[h(277)](U,"br",null,null,-1)),n[h(223)](U,n.CaiHj,{class:n[h(251)],onClick:d[3]||(d[3]=O=>V(!1))},h(159)),n[h(194)](U,n[h(125)],{class:h(210),onClick:d[4]||(d[4]=O=>V(!0))},h(167))])):Ct("",!0),n.ulbAU(He(s).stage,5)&&o[h(148)]?(n[h(178)](ve),n.VARwq(Pe,n.XXYBs,lx,[d[23]||(d[23]=n.bTyQj(U,"h3",null,n[h(181)],-1)),d[24]||(d[24]=n[h(188)](ut,n[h(197)])),d[25]||(d[25]=n[h(253)](U,"br",null,null,-1)),U("b",null,n.ABAXw(Ge,o[h(148)][h(270)]),1),d[26]||(d[26]=n[h(232)](U,"br",null,null,-1)),d[27]||(d[27]=U("br",null,null,-1)),d[28]||(d[28]=n[h(227)](ut,n[h(215)])),d[29]||(d[29]=U("br",null,null,-1)),n[h(260)](ut,n[h(254)](" "+n[h(231)](Ge,c[h(148)])," "),1),d[30]||(d[30]=n.BUczt(U,"br",null,null,-1)),d[31]||(d[31]=n[h(204)](U,"br",null,null,-1))])):n[h(247)](Ct,"",!0),d[37]||(d[37]=n[h(152)](U,"br",null,null,-1)),d[38]||(d[38]=n[h(266)](U,"br",null,null,-1))],64)}}}),ax={class:"game"},ux={__name:"RockPaperSScissors",setup(t){return(e,n)=>(ve(),Pe("div",ax,[n[0]||(n[0]=U("h1",null,"♕",-1)),n[1]||(n[1]=U("h2",null,null,-1)),U("div",null,[ot(cx,{game:"g1"})])]))}},hx=ep(ux,[["__scopeId","data-v-7afa5ccc"]]),fx={__name:"App",setup(t){const e=mh();let n=Jh(hx);return ao(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"")}),(s,i)=>(ve(),Sa(Rf(He(n))))}},pr=mi;function mi(t,e){const n=xi();return mi=function(s,i){return s=s-196,n[s]},mi(t,e)}(function(t,e){const n=mi,s=t();for(;;)try{if(-parseInt(n(203))/1+-parseInt(n(196))/2+parseInt(n(205))/3*(-parseInt(n(201))/4)+-parseInt(n(200))/5*(parseInt(n(204))/6)+parseInt(n(206))/7*(-parseInt(n(199))/8)+parseInt(n(202))/9+-parseInt(n(198))/10*(-parseInt(n(208))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,495929);const dx=qd(),Cc=$d(fx);function xi(){const t=["613935UgddhP","6FuFBNg","24498buUXVD","862533vsNndN","use","33rUhSpY","mount","977778dsnQlA","#app","8409010hfiYcx","16loyzwW","4610105YuTNTs","184LXKdIt","5581305BqfjFD"];return xi=function(){return t},xi()}Cc[pr(207)](dx),Cc[pr(209)](pr(197));
