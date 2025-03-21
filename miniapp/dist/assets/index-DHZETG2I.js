(function(t,e){const n=Hs,s=t();for(;;)try{if(parseInt(n(455))/1*(-parseInt(n(471))/2)+-parseInt(n(464))/3+parseInt(n(469))/4*(-parseInt(n(465))/5)+parseInt(n(477))/6+parseInt(n(458))/7+-parseInt(n(486))/8+parseInt(n(476))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Us,863347),function(){const e=Hs,n={gkiow:function(o,l){return o!==l},xMoyu:e(475),aiSLe:function(o,l){return o===l},ggcam:e(474),BEFmz:function(o,l){return o===l},sHUkN:"modulepreload",VAJOj:function(o,l){return o(l)},FDQtt:e(478),uKFdf:function(o,l){return o===l},YOSdH:"anonymous",SFNey:e(459),UGkyD:"same-origin",cxYxR:function(o,l){return o(l)},PgWbx:function(o,l,c){return o(l,c)},BKGOP:"link",FdxgD:e(467),rKyGT:function(o,l){return o(l)}},s=document.createElement(n.BKGOP)[e(466)];if(s&&s[e(461)]&&s[e(461)](n[e(479)]))return;for(const o of document.querySelectorAll(n[e(481)]))n[e(483)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(487)](c[l(480)],n[l(488)]))for(const a of c.addedNodes)n[l(482)](a[l(462)],n.ggcam)&&n[l(468)](a.rel,n.sHUkN)&&n[l(484)](r,a)})[e(456)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o.integrity&&(c[l(473)]=o[l(473)]),o[l(460)]&&(c.referrerPolicy=o[l(460)]),n[l(468)](o[l(470)],"use-credentials")?c[l(463)]=n.FDQtt:n.uKFdf(o.crossOrigin,n[l(457)])?c[l(463)]=n.SFNey:c[l(463)]=n[l(472)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(485)](i,o);n.PgWbx(fetch,o.href,c)}}();function Hs(t,e){const n=Us();return Hs=function(s,i){return s=s-455,n[s]},Hs(t,e)}function Us(){const t=["BEFmz","220oIsbVb","crossOrigin","89926IEipBA","UGkyD","integrity","LINK","childList","29366478HKHicR","4132350KnDfIm","include","sHUkN","type","FdxgD","aiSLe","rKyGT","VAJOj","cxYxR","5246984tjxVWJ","gkiow","xMoyu","19WeMaoo","observe","YOSdH","1962681RgLGTF","omit","referrerPolicy","supports","tagName","credentials","4827984lznfAM","22655UyUECH","relList",'link[rel="modulepreload"]'];return Us=function(){return t},Us()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},un=[],rt=()=>{},yh=()=>!1,vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vh=Object.prototype.hasOwnProperty,J=(t,e)=>vh.call(t,e),W=Array.isArray,hn=t=>bi(t)==="[object Map]",vc=t=>bi(t)==="[object Set]",H=t=>typeof t=="function",fe=t=>typeof t=="string",Mt=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",bc=t=>(ce(t)||H(t))&&H(t.then)&&H(t.catch),Cc=Object.prototype.toString,bi=t=>Cc.call(t),bh=t=>bi(t).slice(8,-1),Ec=t=>bi(t)==="[object Object]",Yr=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ci=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ch=/-(\w)/g,$e=Ci(t=>t.replace(Ch,(e,n)=>n?n.toUpperCase():"")),Eh=/\B([A-Z])/g,tn=Ci(t=>t.replace(Eh,"-$1").toLowerCase()),Ei=Ci(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ki=Ci(t=>t?`on${Ei(t)}`:""),St=(t,e)=>!Object.is(t,e),Fs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ic=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},_r=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qo;const Ii=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=fe(s)?Th(s):Qr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(fe(t)||ce(t))return t}const Ih=/;(?![^(]*\))/g,wh=/:([^]+)/,Sh=/\/\*[^]*?\*\//g;function Th(t){const e={};return t.replace(Sh,"").split(Ih).forEach(n=>{if(n){const s=n.split(wh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(fe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=Kr(Nh);function wc(t){return!!t||t===""}const Sc=t=>!!(t&&t.__v_isRef===!0),Ge=t=>fe(t)?t:t==null?"":W(t)||ce(t)&&(t.toString===Cc||!H(t.toString))?Sc(t)?Ge(t.value):JSON.stringify(t,Tc,2):String(t),Tc=(t,e)=>Sc(e)?Tc(t,e.value):hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[zi(s,r)+" =>"]=i,n),{})}:vc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>zi(n))}:Mt(e)?zi(e):ce(e)&&!W(e)&&!Ec(e)?String(e):e,zi=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Nc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Rc(t){return new Nc(t)}function Ac(){return Se}function Ah(t,e=!1){Se&&Se.cleanups.push(t)}let se;const qi=new WeakSet;class Pc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qi.has(this)&&(qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yo(this),kc(this);const e=se,n=Ye;se=this,Ye=!0;try{return this.fn()}finally{Mc(this),se=e,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eo(e);this.deps=this.depsTail=void 0,Yo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gr(this)&&this.run()}get dirty(){return gr(this)}}let Dc=0,Vn,jn;function Oc(t,e=!1){if(t.flags|=8,e){t.next=jn,jn=t;return}t.next=Vn,Vn=t}function Xr(){Dc++}function Zr(){if(--Dc>0)return;if(jn){let e=jn;for(jn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vn;){let e=Vn;for(Vn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function kc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Mc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),eo(s),Ph(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function gr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Fc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===es))return;t.globalVersion=es;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gr(t)){t.flags&=-3;return}const n=se,s=Ye;se=t,Ye=!0;try{kc(t);const i=t.fn(t._value);(e.version===0||St(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{se=n,Ye=s,Mc(t),t.flags&=-3}}function eo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)eo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ph(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ye=!0;const Lc=[];function Ft(){Lc.push(Ye),Ye=!1}function Lt(){const t=Lc.pop();Ye=t===void 0?!0:t}function Yo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let es=0;class Dh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class to{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!se||!Ye||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new Dh(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Bc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=s)}return n}trigger(e){this.version++,es++,this.notify(e)}notify(e){Xr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zr()}}}function Bc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Bc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vs=new WeakMap,qt=Symbol(""),mr=Symbol(""),ts=Symbol("");function be(t,e,n){if(Ye&&se){let s=Vs.get(t);s||Vs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new to),i.map=s,i.key=n),i.track()}}function ht(t,e,n,s,i,r){const o=Vs.get(t);if(!o){es++;return}const l=c=>{c&&c.trigger()};if(Xr(),e==="clear")o.forEach(l);else{const c=W(t),a=c&&Yr(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,g)=>{(g==="length"||g===ts||!Mt(g)&&g>=u)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ts)),e){case"add":c?a&&l(o.get("length")):(l(o.get(qt)),hn(t)&&l(o.get(mr)));break;case"delete":c||(l(o.get(qt)),hn(t)&&l(o.get(mr)));break;case"set":hn(t)&&l(o.get(qt));break}}Zr()}function Oh(t,e){const n=Vs.get(t);return n&&n.get(e)}function sn(t){const e=Y(t);return e===t?e:(be(e,"iterate",ts),je(t)?e:e.map(Ce))}function wi(t){return be(t=Y(t),"iterate",ts),t}const kh={__proto__:null,[Symbol.iterator](){return Yi(this,Symbol.iterator,Ce)},concat(...t){return sn(this).concat(...t.map(e=>W(e)?sn(e):e))},entries(){return Yi(this,"entries",t=>(t[1]=Ce(t[1]),t))},every(t,e){return at(this,"every",t,e,void 0,arguments)},filter(t,e){return at(this,"filter",t,e,n=>n.map(Ce),arguments)},find(t,e){return at(this,"find",t,e,Ce,arguments)},findIndex(t,e){return at(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return at(this,"findLast",t,e,Ce,arguments)},findLastIndex(t,e){return at(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return at(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qi(this,"includes",t)},indexOf(...t){return Qi(this,"indexOf",t)},join(t){return sn(this).join(t)},lastIndexOf(...t){return Qi(this,"lastIndexOf",t)},map(t,e){return at(this,"map",t,e,void 0,arguments)},pop(){return Dn(this,"pop")},push(...t){return Dn(this,"push",t)},reduce(t,...e){return Qo(this,"reduce",t,e)},reduceRight(t,...e){return Qo(this,"reduceRight",t,e)},shift(){return Dn(this,"shift")},some(t,e){return at(this,"some",t,e,void 0,arguments)},splice(...t){return Dn(this,"splice",t)},toReversed(){return sn(this).toReversed()},toSorted(t){return sn(this).toSorted(t)},toSpliced(...t){return sn(this).toSpliced(...t)},unshift(...t){return Dn(this,"unshift",t)},values(){return Yi(this,"values",Ce)}};function Yi(t,e,n){const s=wi(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Mh=Array.prototype;function at(t,e,n,s,i,r){const o=wi(t),l=o!==t&&!je(t),c=o[e];if(c!==Mh[e]){const f=c.apply(t,r);return l?Ce(f):f}let a=n;o!==t&&(l?a=function(f,g){return n.call(this,Ce(f),g,t)}:n.length>2&&(a=function(f,g){return n.call(this,f,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function Qo(t,e,n,s){const i=wi(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ce(l),c,t)}),i[e](r,...s)}function Qi(t,e,n){const s=Y(t);be(s,"iterate",ts);const i=s[e](...n);return(i===-1||i===!1)&&io(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function Dn(t,e,n=[]){Ft(),Xr();const s=Y(t)[e].apply(t,n);return Zr(),Lt(),s}const Fh=Kr("__proto__,__v_isRef,__isVue"),Wc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function Lh(t){Mt(t)||(t=String(t));const e=Y(this);return be(e,"has",t),e.hasOwnProperty(t)}class Hc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?zh:$c:r?jc:Vc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let c;if(o&&(c=kh[n]))return c;if(n==="hasOwnProperty")return Lh}const l=Reflect.get(e,n,he(e)?e:s);return(Mt(n)?Wc.has(n):Fh(n))||(i||be(e,"get",n),r)?l:he(l)?o&&Yr(n)?l:l.value:ce(l)?i?Gc(l):Si(l):l}}class Uc extends Hc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Qt(r);if(!je(s)&&!Qt(s)&&(r=Y(r),s=Y(s)),!W(e)&&he(r)&&!he(s))return c?!1:(r.value=s,!0)}const o=W(e)&&Yr(n)?Number(n)<e.length:J(e,n),l=Reflect.set(e,n,s,he(e)?e:i);return e===Y(i)&&(o?St(s,r)&&ht(e,"set",n,s):ht(e,"add",n,s)),l}deleteProperty(e,n){const s=J(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ht(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Mt(n)||!Wc.has(n))&&be(e,"has",n),s}ownKeys(e){return be(e,"iterate",W(e)?"length":qt),Reflect.ownKeys(e)}}class Bh extends Hc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Wh=new Uc,Hh=new Bh,Uh=new Uc(!0);const xr=t=>t,Rs=t=>Reflect.getPrototypeOf(t);function Vh(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=hn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?xr:e?yr:Ce;return!e&&be(r,"iterate",c?mr:qt),{next(){const{value:f,done:g}=a.next();return g?{value:f,done:g}:{value:l?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function As(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jh(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(St(i,l)&&be(o,"get",i),be(o,"get",l));const{has:c}=Rs(o),a=e?xr:t?yr:Ce;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&be(Y(i),"iterate",qt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(St(i,l)&&be(o,"has",i),be(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Y(l),a=e?xr:t?yr:Ce;return!t&&be(c,"iterate",qt),l.forEach((u,f)=>i.call(r,a(u),a(f),o))}};return Ie(n,t?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(i){!e&&!je(i)&&!Qt(i)&&(i=Y(i));const r=Y(this);return Rs(r).has.call(r,i)||(r.add(i),ht(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!Qt(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=Rs(o);let a=l.call(o,i);a||(i=Y(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?St(r,u)&&ht(o,"set",i,r):ht(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Rs(r);let c=o.call(r,i);c||(i=Y(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&ht(r,"delete",i,void 0),a},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&ht(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Vh(i,t,e)}),n}function no(t,e){const n=jh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const $h={get:no(!1,!1)},Gh={get:no(!1,!0)},Kh={get:no(!0,!1)};const Vc=new WeakMap,jc=new WeakMap,$c=new WeakMap,zh=new WeakMap;function qh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yh(t){return t.__v_skip||!Object.isExtensible(t)?0:qh(bh(t))}function Si(t){return Qt(t)?t:so(t,!1,Wh,$h,Vc)}function Qh(t){return so(t,!1,Uh,Gh,jc)}function Gc(t){return so(t,!0,Hh,Kh,$c)}function so(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Yh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Tt(t){return Qt(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function io(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function ro(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&Ic(t,"__v_skip",!0),t}const Ce=t=>ce(t)?Si(t):t,yr=t=>ce(t)?Gc(t):t;function he(t){return t?t.__v_isRef===!0:!1}function Gt(t){return Kc(t,!1)}function Jh(t){return Kc(t,!0)}function Kc(t,e){return he(t)?t:new Xh(t,e)}class Xh{constructor(e,n){this.dep=new to,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:Ce(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||je(e)||Qt(e);e=s?e:Y(e),St(e,n)&&(this._rawValue=e,this._value=s?e:Ce(e),this.dep.trigger())}}function Ue(t){return he(t)?t.value:t}const Zh={get:(t,e,n)=>e==="__v_raw"?t:Ue(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return he(i)&&!he(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function zc(t){return Tt(t)?t:new Proxy(t,Zh)}function ef(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=nf(t,n);return e}class tf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Oh(Y(this._object),this._key)}}function nf(t,e,n){const s=t[e];return he(s)?s:new tf(t,e,n)}class sf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new to(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Oc(this,!0),!0}get value(){const e=this.dep.track();return Fc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rf(t,e,n=!1){let s,i;return H(t)?s=t:(s=t.get,i=t.set),new sf(s,i,n)}const Ps={},js=new WeakMap;let Vt;function of(t,e=!1,n=Vt){if(n){let s=js.get(n);s||js.set(n,s=[]),s.push(t)}}function lf(t,e,n=Z){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=x=>i?x:je(x)||i===!1||i===0?ft(x,1):ft(x);let u,f,g,y,E=!1,D=!1;if(he(t)?(f=()=>t.value,E=je(t)):Tt(t)?(f=()=>a(t),E=!0):W(t)?(D=!0,E=t.some(x=>Tt(x)||je(x)),f=()=>t.map(x=>{if(he(x))return x.value;if(Tt(x))return a(x);if(H(x))return c?c(x,2):x()})):H(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){Ft();try{g()}finally{Lt()}}const x=Vt;Vt=u;try{return c?c(t,3,[y]):t(y)}finally{Vt=x}}:f=rt,e&&i){const x=f,C=i===!0?1/0:i;f=()=>ft(x(),C)}const V=Ac(),d=()=>{u.stop(),V&&V.active&&qr(V.effects,u)};if(r&&e){const x=e;e=(...C)=>{x(...C),d()}}let h=D?new Array(t.length).fill(Ps):Ps;const p=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const C=u.run();if(i||E||(D?C.some((de,G)=>St(de,h[G])):St(C,h))){g&&g();const de=Vt;Vt=u;try{const G=[C,h===Ps?void 0:D&&h[0]===Ps?[]:h,y];c?c(e,3,G):e(...G),h=C}finally{Vt=de}}}else u.run()};return l&&l(p),u=new Pc(f),u.scheduler=o?()=>o(p,!1):p,y=x=>of(x,!1,u),g=u.onStop=()=>{const x=js.get(u);if(x){if(c)c(x,4);else for(const C of x)C();js.delete(u)}},e?s?p(!0):h=u.run():o?o(p.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ft(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))ft(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)ft(t[s],e,n);else if(vc(t)||hn(t))t.forEach(s=>{ft(s,e,n)});else if(Ec(t)){for(const s in t)ft(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ft(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(t,e,n,s){try{return s?t(...s):t()}catch(i){Ti(i,e,n)}}function lt(t,e,n,s){if(H(t)){const i=ms(t,e,n,s);return i&&bc(i)&&i.catch(r=>{Ti(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(lt(t[r],e,n,s));return i}}function Ti(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,a)===!1)return}l=l.parent}if(r){Ft(),ms(r,null,10,[t,c,a]),Lt();return}}cf(t,n,i,s,o)}function cf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Te=[];let st=-1;const fn=[];let Et=null,ln=0;const qc=Promise.resolve();let $s=null;function Yc(t){const e=$s||qc;return t?e.then(this?t.bind(this):t):e}function af(t){let e=st+1,n=Te.length;for(;e<n;){const s=e+n>>>1,i=Te[s],r=ns(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function oo(t){if(!(t.flags&1)){const e=ns(t),n=Te[Te.length-1];!n||!(t.flags&2)&&e>=ns(n)?Te.push(t):Te.splice(af(e),0,t),t.flags|=1,Qc()}}function Qc(){$s||($s=qc.then(Xc))}function uf(t){W(t)?fn.push(...t):Et&&t.id===-1?Et.splice(ln+1,0,t):t.flags&1||(fn.push(t),t.flags|=1),Qc()}function Jo(t,e,n=st+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Jc(t){if(fn.length){const e=[...new Set(fn)].sort((n,s)=>ns(n)-ns(s));if(fn.length=0,Et){Et.push(...e);return}for(Et=e,ln=0;ln<Et.length;ln++){const n=Et[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,ln=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xc(t){try{for(st=0;st<Te.length;st++){const e=Te[st];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;st<Te.length;st++){const e=Te[st];e&&(e.flags&=-2)}st=-1,Te.length=0,Jc(),$s=null,(Te.length||fn.length)&&Xc()}}let De=null,Zc=null;function Gs(t){const e=De;return De=t,Zc=t&&t.type.__scopeId||null,e}function hf(t,e=De,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&cl(-1);const r=Gs(e);let o;try{o=t(...i)}finally{Gs(r),s._d&&cl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ff(t,e){if(De===null)return t;const n=Pi(De),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Z]=e[i];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&ft(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ht(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Ft(),lt(c,n,8,[t.el,l,t,e]),Lt())}}const df=Symbol("_vte"),pf=t=>t.__isTeleport;function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _f(t,e){return H(t)?Ie({name:t.name},e,{setup:t}):t}function ea(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ks(t,e,n,s,i=!1){if(W(t)){t.forEach((E,D)=>Ks(E,e&&(W(e)?e[D]:e),n,s,i));return}if($n(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ks(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Pi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===Z?l.refs={}:l.refs,f=l.setupState,g=Y(f),y=f===Z?()=>!1:E=>J(g,E);if(a!=null&&a!==c&&(fe(a)?(u[a]=null,y(a)&&(f[a]=null)):he(a)&&(a.value=null)),H(c))ms(c,l,12,[o,u]);else{const E=fe(c),D=he(c);if(E||D){const V=()=>{if(t.f){const d=E?y(c)?f[c]:u[c]:c.value;i?W(d)&&qr(d,r):W(d)?d.includes(r)||d.push(r):E?(u[c]=[r],y(c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else E?(u[c]=o,y(c)&&(f[c]=o)):D&&(c.value=o,t.k&&(u[t.k]=o))};o?(V.id=-1,Be(V,n)):V()}}}Ii().requestIdleCallback;Ii().cancelIdleCallback;const $n=t=>!!t.type.__asyncLoader,ta=t=>t.type.__isKeepAlive;function gf(t,e){na(t,"a",e)}function mf(t,e){na(t,"da",e)}function na(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ni(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ta(i.parent.vnode)&&xf(s,e,n,i),i=i.parent}}function xf(t,e,n,s){const i=Ni(e,t,s,!0);ia(()=>{qr(s[e],i)},n)}function Ni(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ft();const l=xs(n),c=lt(e,n,t,o);return l(),Lt(),c});return s?i.unshift(r):i.push(r),r}}const mt=t=>(e,n=ye)=>{(!is||t==="sp")&&Ni(t,(...s)=>e(...s),n)},yf=mt("bm"),sa=mt("m"),vf=mt("bu"),bf=mt("u"),Cf=mt("bum"),ia=mt("um"),Ef=mt("sp"),If=mt("rtg"),wf=mt("rtc");function Sf(t,e=ye){Ni("ec",t,e)}const Tf="components",ra=Symbol.for("v-ndc");function Nf(t){return fe(t)?Rf(Tf,t,!1)||t:t||ra}function Rf(t,e,n=!0,s=!1){const i=De||ye;if(i){const r=i.type;{const l=md(r,!1);if(l&&(l===e||l===$e(e)||l===Ei($e(e))))return r}const o=Xo(i[t]||r[t],e)||Xo(i.appContext[t],e);return!o&&s?r:o}}function Xo(t,e){return t&&(t[e]||t[$e(e)]||t[Ei($e(e))])}function Zo(t,e,n,s){let i;const r=n&&n[s],o=W(t);if(o||fe(t)){const l=o&&Tt(t);let c=!1;l&&(c=!je(t),t=wi(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Ce(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const vr=t=>t?Na(t)?Pi(t):vr(t.parent):null,Gn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>la(t),$forceUpdate:t=>t.f||(t.f=()=>{oo(t.update)}),$nextTick:t=>t.n||(t.n=Yc.bind(t.proxy)),$watch:t=>Xf.bind(t)}),Ji=(t,e)=>t!==Z&&!t.__isScriptSetup&&J(t,e),Af={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ji(s,e))return o[e]=1,s[e];if(i!==Z&&J(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&J(a,e))return o[e]=3,r[e];if(n!==Z&&J(n,e))return o[e]=4,n[e];br&&(o[e]=0)}}const u=Gn[e];let f,g;if(u)return e==="$attrs"&&be(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Z&&J(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,J(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ji(i,e)?(i[e]=n,!0):s!==Z&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Z&&J(t,o)||Ji(e,o)||(l=r[0])&&J(l,o)||J(s,o)||J(Gn,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function el(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let br=!0;function Pf(t){const e=la(t),n=t.proxy,s=t.ctx;br=!1,e.beforeCreate&&tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:f,mounted:g,beforeUpdate:y,updated:E,activated:D,deactivated:V,beforeDestroy:d,beforeUnmount:h,destroyed:p,unmounted:x,render:C,renderTracked:de,renderTriggered:G,errorCaptured:O,serverPrefetch:U,expose:le,inheritAttrs:Re,components:He,directives:vt,filters:Nn}=e;if(a&&Df(a,s,null),o)for(const z in o){const te=o[z];H(te)&&(s[z]=te.bind(n))}if(i){const z=i.call(n,n);ce(z)&&(t.data=Si(z))}if(br=!0,r)for(const z in r){const te=r[z],Bt=H(te)?te.bind(n,n):H(te.get)?te.get.bind(n,n):rt,Ts=!H(te)&&H(te.set)?te.set.bind(n):rt,Wt=Aa({get:Bt,set:Ts});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Je=>Wt.value=Je})}if(l)for(const z in l)oa(l[z],s,n,z);if(c){const z=H(c)?c.call(n):c;Reflect.ownKeys(z).forEach(te=>{Bf(te,z[te])})}u&&tl(u,t,"c");function ue(z,te){W(te)?te.forEach(Bt=>z(Bt.bind(n))):te&&z(te.bind(n))}if(ue(yf,f),ue(sa,g),ue(vf,y),ue(bf,E),ue(gf,D),ue(mf,V),ue(Sf,O),ue(wf,de),ue(If,G),ue(Cf,h),ue(ia,x),ue(Ef,U),W(le))if(le.length){const z=t.exposed||(t.exposed={});le.forEach(te=>{Object.defineProperty(z,te,{get:()=>n[te],set:Bt=>n[te]=Bt})})}else t.exposed||(t.exposed={});C&&t.render===rt&&(t.render=C),Re!=null&&(t.inheritAttrs=Re),He&&(t.components=He),vt&&(t.directives=vt),U&&ea(t)}function Df(t,e,n=rt){W(t)&&(t=Cr(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=Kn(i.from||s,i.default,!0):r=Kn(i.from||s):r=Kn(i),he(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function tl(t,e,n){lt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function oa(t,e,n,s){let i=s.includes(".")?ba(n,s):()=>n[s];if(fe(t)){const r=e[t];H(r)&&dn(i,r)}else if(H(t))dn(i,t.bind(n));else if(ce(t))if(W(t))t.forEach(r=>oa(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&dn(i,r,t)}}function la(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>zs(c,a,o,!0)),zs(c,e,o)),ce(e)&&r.set(e,c),c}function zs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&zs(t,r,n,!0),i&&i.forEach(o=>zs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Of[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Of={data:nl,props:sl,emits:sl,methods:Hn,computed:Hn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Hn,directives:Hn,watch:Mf,provide:nl,inject:kf};function nl(t,e){return e?t?function(){return Ie(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function kf(t,e){return Hn(Cr(t),Cr(e))}function Cr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?Ie(Object.create(null),t,e):e}function sl(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ie(Object.create(null),el(t),el(e??{})):e}function Mf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function ca(){return{app:null,config:{isNativeTag:yh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ff=0;function Lf(t,e){return function(s,i=null){H(s)||(s=Ie({},s)),i!=null&&!ce(i)&&(i=null);const r=ca(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Ff++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:yd,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(a,...f)):H(u)&&(o.add(u),u(a,...f))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,f){return f?(r.components[u]=f,a):r.components[u]},directive(u,f){return f?(r.directives[u]=f,a):r.directives[u]},mount(u,f,g){if(!c){const y=a._ceVNode||ot(s,i);return y.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(y,u,g),c=!0,a._container=u,u.__vue_app__=a,Pi(y.component)}},onUnmount(u){l.push(u)},unmount(){c&&(lt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,f){return r.provides[u]=f,a},runWithContext(u){const f=Yt;Yt=a;try{return u()}finally{Yt=f}}};return a}}let Yt=null;function Bf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Kn(t,e,n=!1){const s=ye||De;if(s||Yt){const i=Yt?Yt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function Wf(){return!!(ye||De||Yt)}const aa={},ua=()=>Object.create(aa),ha=t=>Object.getPrototypeOf(t)===aa;function Hf(t,e,n,s=!1){const i={},r=ua();t.propsDefaults=Object.create(null),fa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Qh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Uf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(Ri(t.emitsOptions,g))continue;const y=e[g];if(c)if(J(r,g))y!==r[g]&&(r[g]=y,a=!0);else{const E=$e(g);i[E]=Er(c,l,E,y,t,!1)}else y!==r[g]&&(r[g]=y,a=!0)}}}else{fa(t,e,i,r)&&(a=!0);let u;for(const f in l)(!e||!J(e,f)&&((u=tn(f))===f||!J(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Er(c,l,f,void 0,t,!0)):delete i[f]);if(r!==l)for(const f in r)(!e||!J(e,f))&&(delete r[f],a=!0)}a&&ht(t.attrs,"set","")}function fa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Un(c))continue;const a=e[c];let u;i&&J(i,u=$e(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ri(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||Z;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Er(i,c,f,a[f],t,!J(a,f))}}return o}function Er(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=xs(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===tn(n))&&(s=!0))}return s}const Vf=new WeakMap;function da(t,e,n=!1){const s=n?Vf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[g,y]=da(f,e,!0);Ie(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ce(t)&&s.set(t,un),un;if(W(r))for(let u=0;u<r.length;u++){const f=$e(r[u]);il(f)&&(o[f]=Z)}else if(r)for(const u in r){const f=$e(u);if(il(f)){const g=r[u],y=o[f]=W(g)||H(g)?{type:g}:Ie({},g),E=y.type;let D=!1,V=!0;if(W(E))for(let d=0;d<E.length;++d){const h=E[d],p=H(h)&&h.name;if(p==="Boolean"){D=!0;break}else p==="String"&&(V=!1)}else D=H(E)&&E.name==="Boolean";y[0]=D,y[1]=V,(D||J(y,"default"))&&l.push(f)}}const a=[o,l];return ce(t)&&s.set(t,a),a}function il(t){return t[0]!=="$"&&!Un(t)}const pa=t=>t[0]==="_"||t==="$stable",co=t=>W(t)?t.map(it):[it(t)],jf=(t,e,n)=>{if(e._n)return e;const s=hf((...i)=>co(e(...i)),n);return s._c=!1,s},_a=(t,e,n)=>{const s=t._ctx;for(const i in t){if(pa(i))continue;const r=t[i];if(H(r))e[i]=jf(i,r,s);else if(r!=null){const o=co(r);e[i]=()=>o}}},ga=(t,e)=>{const n=co(e);t.slots.default=()=>n},ma=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},$f=(t,e,n)=>{const s=t.slots=ua();if(t.vnode.shapeFlag&32){const i=e._;i?(ma(s,e,n),n&&Ic(s,"_",i,!0)):_a(e,s)}else e&&ga(t,e)},Gf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Z;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ma(i,e,n):(r=!e.$stable,_a(e,i)),o=e}else e&&(ga(t,e),o={default:1});if(r)for(const l in i)!pa(l)&&o[l]==null&&delete i[l]},Be=rd;function Kf(t){return zf(t)}function zf(t,e){const n=Ii();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:f,nextSibling:g,setScopeId:y=rt,insertStaticContent:E}=t,D=(_,m,v,w=null,b=null,I=null,A=void 0,R=null,N=!!m.dynamicChildren)=>{if(_===m)return;_&&!On(_,m)&&(w=Ns(_),Je(_,b,I,!0),_=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:M,shapeFlag:P}=m;switch(S){case Ai:V(_,m,v,w);break;case Jt:d(_,m,v,w);break;case Zi:_==null&&h(m,v,w,A);break;case Ve:He(_,m,v,w,b,I,A,R,N);break;default:P&1?C(_,m,v,w,b,I,A,R,N):P&6?vt(_,m,v,w,b,I,A,R,N):(P&64||P&128)&&S.process(_,m,v,w,b,I,A,R,N,An)}M!=null&&b&&Ks(M,_&&_.ref,I,m||_,!m)},V=(_,m,v,w)=>{if(_==null)s(m.el=l(m.children),v,w);else{const b=m.el=_.el;m.children!==_.children&&a(b,m.children)}},d=(_,m,v,w)=>{_==null?s(m.el=c(m.children||""),v,w):m.el=_.el},h=(_,m,v,w)=>{[_.el,_.anchor]=E(_.children,m,v,w,_.el,_.anchor)},p=({el:_,anchor:m},v,w)=>{let b;for(;_&&_!==m;)b=g(_),s(_,v,w),_=b;s(m,v,w)},x=({el:_,anchor:m})=>{let v;for(;_&&_!==m;)v=g(_),i(_),_=v;i(m)},C=(_,m,v,w,b,I,A,R,N)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),_==null?de(m,v,w,b,I,A,R,N):U(_,m,b,I,A,R,N)},de=(_,m,v,w,b,I,A,R)=>{let N,S;const{props:M,shapeFlag:P,transition:k,dirs:L}=_;if(N=_.el=o(_.type,I,M&&M.is,M),P&8?u(N,_.children):P&16&&O(_.children,N,null,w,b,Xi(_,I),A,R),L&&Ht(_,null,w,"created"),G(N,_,_.scopeId,A,w),M){for(const ne in M)ne!=="value"&&!Un(ne)&&r(N,ne,null,M[ne],I,w);"value"in M&&r(N,"value",null,M.value,I),(S=M.onVnodeBeforeMount)&&tt(S,w,_)}L&&Ht(_,null,w,"beforeMount");const q=qf(b,k);q&&k.beforeEnter(N),s(N,m,v),((S=M&&M.onVnodeMounted)||q||L)&&Be(()=>{S&&tt(S,w,_),q&&k.enter(N),L&&Ht(_,null,w,"mounted")},b)},G=(_,m,v,w,b)=>{if(v&&y(_,v),w)for(let I=0;I<w.length;I++)y(_,w[I]);if(b){let I=b.subTree;if(m===I||Ea(I.type)&&(I.ssContent===m||I.ssFallback===m)){const A=b.vnode;G(_,A,A.scopeId,A.slotScopeIds,b.parent)}}},O=(_,m,v,w,b,I,A,R,N=0)=>{for(let S=N;S<_.length;S++){const M=_[S]=R?It(_[S]):it(_[S]);D(null,M,m,v,w,b,I,A,R)}},U=(_,m,v,w,b,I,A)=>{const R=m.el=_.el;let{patchFlag:N,dynamicChildren:S,dirs:M}=m;N|=_.patchFlag&16;const P=_.props||Z,k=m.props||Z;let L;if(v&&Ut(v,!1),(L=k.onVnodeBeforeUpdate)&&tt(L,v,m,_),M&&Ht(m,_,v,"beforeUpdate"),v&&Ut(v,!0),(P.innerHTML&&k.innerHTML==null||P.textContent&&k.textContent==null)&&u(R,""),S?le(_.dynamicChildren,S,R,v,w,Xi(m,b),I):A||te(_,m,R,null,v,w,Xi(m,b),I,!1),N>0){if(N&16)Re(R,P,k,v,b);else if(N&2&&P.class!==k.class&&r(R,"class",null,k.class,b),N&4&&r(R,"style",P.style,k.style,b),N&8){const q=m.dynamicProps;for(let ne=0;ne<q.length;ne++){const X=q[ne],Fe=P[X],Ae=k[X];(Ae!==Fe||X==="value")&&r(R,X,Fe,Ae,b,v)}}N&1&&_.children!==m.children&&u(R,m.children)}else!A&&S==null&&Re(R,P,k,v,b);((L=k.onVnodeUpdated)||M)&&Be(()=>{L&&tt(L,v,m,_),M&&Ht(m,_,v,"updated")},w)},le=(_,m,v,w,b,I,A)=>{for(let R=0;R<m.length;R++){const N=_[R],S=m[R],M=N.el&&(N.type===Ve||!On(N,S)||N.shapeFlag&70)?f(N.el):v;D(N,S,M,null,w,b,I,A,!0)}},Re=(_,m,v,w,b)=>{if(m!==v){if(m!==Z)for(const I in m)!Un(I)&&!(I in v)&&r(_,I,m[I],null,b,w);for(const I in v){if(Un(I))continue;const A=v[I],R=m[I];A!==R&&I!=="value"&&r(_,I,R,A,b,w)}"value"in v&&r(_,"value",m.value,v.value,b)}},He=(_,m,v,w,b,I,A,R,N)=>{const S=m.el=_?_.el:l(""),M=m.anchor=_?_.anchor:l("");let{patchFlag:P,dynamicChildren:k,slotScopeIds:L}=m;L&&(R=R?R.concat(L):L),_==null?(s(S,v,w),s(M,v,w),O(m.children||[],v,M,b,I,A,R,N)):P>0&&P&64&&k&&_.dynamicChildren?(le(_.dynamicChildren,k,v,b,I,A,R),(m.key!=null||b&&m===b.subTree)&&xa(_,m,!0)):te(_,m,v,M,b,I,A,R,N)},vt=(_,m,v,w,b,I,A,R,N)=>{m.slotScopeIds=R,_==null?m.shapeFlag&512?b.ctx.activate(m,v,w,A,N):Nn(m,v,w,b,I,A,N):Ss(_,m,N)},Nn=(_,m,v,w,b,I,A)=>{const R=_.component=fd(_,w,b);if(ta(_)&&(R.ctx.renderer=An),dd(R,!1,A),R.asyncDep){if(b&&b.registerDep(R,ue,A),!_.el){const N=R.subTree=ot(Jt);d(null,N,m,v)}}else ue(R,_,m,v,b,I,A)},Ss=(_,m,v)=>{const w=m.component=_.component;if(sd(_,m,v))if(w.asyncDep&&!w.asyncResolved){z(w,m,v);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},ue=(_,m,v,w,b,I,A)=>{const R=()=>{if(_.isMounted){let{next:P,bu:k,u:L,parent:q,vnode:ne}=_;{const Ze=ya(_);if(Ze){P&&(P.el=ne.el,z(_,P,A)),Ze.asyncDep.then(()=>{_.isUnmounted||R()});return}}let X=P,Fe;Ut(_,!1),P?(P.el=ne.el,z(_,P,A)):P=ne,k&&Fs(k),(Fe=P.props&&P.props.onVnodeBeforeUpdate)&&tt(Fe,q,P,ne),Ut(_,!0);const Ae=ol(_),Xe=_.subTree;_.subTree=Ae,D(Xe,Ae,f(Xe.el),Ns(Xe),_,b,I),P.el=Ae.el,X===null&&id(_,Ae.el),L&&Be(L,b),(Fe=P.props&&P.props.onVnodeUpdated)&&Be(()=>tt(Fe,q,P,ne),b)}else{let P;const{el:k,props:L}=m,{bm:q,m:ne,parent:X,root:Fe,type:Ae}=_,Xe=$n(m);Ut(_,!1),q&&Fs(q),!Xe&&(P=L&&L.onVnodeBeforeMount)&&tt(P,X,m),Ut(_,!0);{Fe.ce&&Fe.ce._injectChildStyle(Ae);const Ze=_.subTree=ol(_);D(null,Ze,v,w,_,b,I),m.el=Ze.el}if(ne&&Be(ne,b),!Xe&&(P=L&&L.onVnodeMounted)){const Ze=m;Be(()=>tt(P,X,Ze),b)}(m.shapeFlag&256||X&&$n(X.vnode)&&X.vnode.shapeFlag&256)&&_.a&&Be(_.a,b),_.isMounted=!0,m=v=w=null}};_.scope.on();const N=_.effect=new Pc(R);_.scope.off();const S=_.update=N.run.bind(N),M=_.job=N.runIfDirty.bind(N);M.i=_,M.id=_.uid,N.scheduler=()=>oo(M),Ut(_,!0),S()},z=(_,m,v)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,Uf(_,m.props,w,v),Gf(_,m.children,v),Ft(),Jo(_),Lt()},te=(_,m,v,w,b,I,A,R,N=!1)=>{const S=_&&_.children,M=_?_.shapeFlag:0,P=m.children,{patchFlag:k,shapeFlag:L}=m;if(k>0){if(k&128){Ts(S,P,v,w,b,I,A,R,N);return}else if(k&256){Bt(S,P,v,w,b,I,A,R,N);return}}L&8?(M&16&&Rn(S,b,I),P!==S&&u(v,P)):M&16?L&16?Ts(S,P,v,w,b,I,A,R,N):Rn(S,b,I,!0):(M&8&&u(v,""),L&16&&O(P,v,w,b,I,A,R,N))},Bt=(_,m,v,w,b,I,A,R,N)=>{_=_||un,m=m||un;const S=_.length,M=m.length,P=Math.min(S,M);let k;for(k=0;k<P;k++){const L=m[k]=N?It(m[k]):it(m[k]);D(_[k],L,v,null,b,I,A,R,N)}S>M?Rn(_,b,I,!0,!1,P):O(m,v,w,b,I,A,R,N,P)},Ts=(_,m,v,w,b,I,A,R,N)=>{let S=0;const M=m.length;let P=_.length-1,k=M-1;for(;S<=P&&S<=k;){const L=_[S],q=m[S]=N?It(m[S]):it(m[S]);if(On(L,q))D(L,q,v,null,b,I,A,R,N);else break;S++}for(;S<=P&&S<=k;){const L=_[P],q=m[k]=N?It(m[k]):it(m[k]);if(On(L,q))D(L,q,v,null,b,I,A,R,N);else break;P--,k--}if(S>P){if(S<=k){const L=k+1,q=L<M?m[L].el:w;for(;S<=k;)D(null,m[S]=N?It(m[S]):it(m[S]),v,q,b,I,A,R,N),S++}}else if(S>k)for(;S<=P;)Je(_[S],b,I,!0),S++;else{const L=S,q=S,ne=new Map;for(S=q;S<=k;S++){const Le=m[S]=N?It(m[S]):it(m[S]);Le.key!=null&&ne.set(Le.key,S)}let X,Fe=0;const Ae=k-q+1;let Xe=!1,Ze=0;const Pn=new Array(Ae);for(S=0;S<Ae;S++)Pn[S]=0;for(S=L;S<=P;S++){const Le=_[S];if(Fe>=Ae){Je(Le,b,I,!0);continue}let et;if(Le.key!=null)et=ne.get(Le.key);else for(X=q;X<=k;X++)if(Pn[X-q]===0&&On(Le,m[X])){et=X;break}et===void 0?Je(Le,b,I,!0):(Pn[et-q]=S+1,et>=Ze?Ze=et:Xe=!0,D(Le,m[et],v,null,b,I,A,R,N),Fe++)}const Ko=Xe?Yf(Pn):un;for(X=Ko.length-1,S=Ae-1;S>=0;S--){const Le=q+S,et=m[Le],zo=Le+1<M?m[Le+1].el:w;Pn[S]===0?D(null,et,v,zo,b,I,A,R,N):Xe&&(X<0||S!==Ko[X]?Wt(et,v,zo,2):X--)}}},Wt=(_,m,v,w,b=null)=>{const{el:I,type:A,transition:R,children:N,shapeFlag:S}=_;if(S&6){Wt(_.component.subTree,m,v,w);return}if(S&128){_.suspense.move(m,v,w);return}if(S&64){A.move(_,m,v,An);return}if(A===Ve){s(I,m,v);for(let P=0;P<N.length;P++)Wt(N[P],m,v,w);s(_.anchor,m,v);return}if(A===Zi){p(_,m,v);return}if(w!==2&&S&1&&R)if(w===0)R.beforeEnter(I),s(I,m,v),Be(()=>R.enter(I),b);else{const{leave:P,delayLeave:k,afterLeave:L}=R,q=()=>s(I,m,v),ne=()=>{P(I,()=>{q(),L&&L()})};k?k(I,q,ne):ne()}else s(I,m,v)},Je=(_,m,v,w=!1,b=!1)=>{const{type:I,props:A,ref:R,children:N,dynamicChildren:S,shapeFlag:M,patchFlag:P,dirs:k,cacheIndex:L}=_;if(P===-2&&(b=!1),R!=null&&Ks(R,null,v,_,!0),L!=null&&(m.renderCache[L]=void 0),M&256){m.ctx.deactivate(_);return}const q=M&1&&k,ne=!$n(_);let X;if(ne&&(X=A&&A.onVnodeBeforeUnmount)&&tt(X,m,_),M&6)xh(_.component,v,w);else{if(M&128){_.suspense.unmount(v,w);return}q&&Ht(_,null,m,"beforeUnmount"),M&64?_.type.remove(_,m,v,An,w):S&&!S.hasOnce&&(I!==Ve||P>0&&P&64)?Rn(S,m,v,!1,!0):(I===Ve&&P&384||!b&&M&16)&&Rn(N,m,v),w&&$o(_)}(ne&&(X=A&&A.onVnodeUnmounted)||q)&&Be(()=>{X&&tt(X,m,_),q&&Ht(_,null,m,"unmounted")},v)},$o=_=>{const{type:m,el:v,anchor:w,transition:b}=_;if(m===Ve){mh(v,w);return}if(m===Zi){x(_);return}const I=()=>{i(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(_.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:R}=b,N=()=>A(v,I);R?R(_.el,I,N):N()}else I()},mh=(_,m)=>{let v;for(;_!==m;)v=g(_),i(_),_=v;i(m)},xh=(_,m,v)=>{const{bum:w,scope:b,job:I,subTree:A,um:R,m:N,a:S}=_;rl(N),rl(S),w&&Fs(w),b.stop(),I&&(I.flags|=8,Je(A,_,m,v)),R&&Be(R,m),Be(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Rn=(_,m,v,w=!1,b=!1,I=0)=>{for(let A=I;A<_.length;A++)Je(_[A],m,v,w,b)},Ns=_=>{if(_.shapeFlag&6)return Ns(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),v=m&&m[df];return v?g(v):m};let Gi=!1;const Go=(_,m,v)=>{_==null?m._vnode&&Je(m._vnode,null,null,!0):D(m._vnode||null,_,m,null,null,null,v),m._vnode=_,Gi||(Gi=!0,Jo(),Jc(),Gi=!1)},An={p:D,um:Je,m:Wt,r:$o,mt:Nn,mc:O,pc:te,pbc:le,n:Ns,o:t};return{render:Go,hydrate:void 0,createApp:Lf(Go)}}function Xi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ut({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xa(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=It(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&xa(o,l)),l.type===Ai&&(l.el=o.el)}}function Yf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ya(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ya(e)}function rl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qf=Symbol.for("v-scx"),Jf=()=>Kn(Qf);function dn(t,e,n){return va(t,e,n)}function va(t,e,n=Z){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ie({},n),c=e&&s||!e&&r!=="post";let a;if(is){if(r==="sync"){const y=Jf();a=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=rt,y.resume=rt,y.pause=rt,y}}const u=ye;l.call=(y,E,D)=>lt(y,u,E,D);let f=!1;r==="post"?l.scheduler=y=>{Be(y,u&&u.suspense)}:r!=="sync"&&(f=!0,l.scheduler=(y,E)=>{E?y():oo(y)}),l.augmentJob=y=>{e&&(y.flags|=4),f&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const g=lf(t,e,l);return is&&(a?a.push(g):c&&g()),g}function Xf(t,e,n){const s=this.proxy,i=fe(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=xs(this),l=va(i,r.bind(s),n);return o(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Zf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$e(e)}Modifiers`]||t[`${tn(e)}Modifiers`];function ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const r=e.startsWith("update:"),o=r&&Zf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>fe(u)?u.trim():u)),o.number&&(i=n.map(_r)));let l,c=s[l=Ki(e)]||s[l=Ki($e(e))];!c&&r&&(c=s[l=Ki(tn(e))]),c&&lt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,lt(a,t,6,i)}}function Ca(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!H(t)){const c=a=>{const u=Ca(a,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ce(t)&&s.set(t,null),null):(W(r)?r.forEach(c=>o[c]=null):Ie(o,r),ce(t)&&s.set(t,o),o)}function Ri(t,e){return!t||!vi(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,tn(e))||J(t,e))}function ol(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:f,data:g,setupState:y,ctx:E,inheritAttrs:D}=t,V=Gs(t);let d,h;try{if(n.shapeFlag&4){const x=i||s,C=x;d=it(a.call(C,x,u,f,y,g,E)),h=l}else{const x=e;d=it(x.length>1?x(f,{attrs:l,slots:o,emit:c}):x(f,null)),h=e.props?l:td(l)}}catch(x){zn.length=0,Ti(x,t,1),d=ot(Jt)}let p=d;if(h&&D!==!1){const x=Object.keys(h),{shapeFlag:C}=p;x.length&&C&7&&(r&&x.some(zr)&&(h=nd(h,r)),p=mn(p,h,!1,!0))}return n.dirs&&(p=mn(p,null,!1,!0),p.dirs=p.dirs?p.dirs.concat(n.dirs):n.dirs),n.transition&&lo(p,n.transition),d=p,Gs(V),d}const td=t=>{let e;for(const n in t)(n==="class"||n==="style"||vi(n))&&((e||(e={}))[n]=t[n]);return e},nd=(t,e)=>{const n={};for(const s in t)(!zr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function sd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ll(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(o[g]!==s[g]&&!Ri(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ll(s,o,a):!0:!!o;return!1}function ll(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ri(n,r))return!0}return!1}function id({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ea=t=>t.__isSuspense;function rd(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):uf(t)}const Ve=Symbol.for("v-fgt"),Ai=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Zi=Symbol.for("v-stc"),zn=[];let We=null;function ve(t=!1){zn.push(We=t?null:[])}function od(){zn.pop(),We=zn[zn.length-1]||null}let ss=1;function cl(t,e=!1){ss+=t,t<0&&We&&e&&(We.hasOnce=!0)}function Ia(t){return t.dynamicChildren=ss>0?We||un:null,od(),ss>0&&We&&We.push(t),t}function Pe(t,e,n,s,i,r){return Ia(B(t,e,n,s,i,r,!0))}function wa(t,e,n,s,i){return Ia(ot(t,e,n,s,i,!0))}function Sa(t){return t?t.__v_isVNode===!0:!1}function On(t,e){return t.type===e.type&&t.key===e.key}const Ta=({key:t})=>t??null,Ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||he(t)||H(t)?{i:De,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,s=0,i=null,r=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ta(e),ref:e&&Ls(e),scopeId:Zc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return l?(ao(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),ss>0&&!o&&We&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&We.push(c),c}const ot=ld;function ld(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ra)&&(t=Jt),Sa(t)){const l=mn(t,e,!0);return n&&ao(l,n),ss>0&&!r&&We&&(l.shapeFlag&6?We[We.indexOf(t)]=l:We.push(l)),l.patchFlag=-2,l}if(xd(t)&&(t=t.__vccOpts),e){e=cd(e);let{class:l,style:c}=e;l&&!fe(l)&&(e.class=Jr(l)),ce(c)&&(io(c)&&!W(c)&&(c=Ie({},c)),e.style=Qr(c))}const o=fe(t)?1:Ea(t)?128:pf(t)?64:ce(t)?4:H(t)?2:0;return B(t,e,n,s,i,o,r,!0)}function cd(t){return t?io(t)||ha(t)?Ie({},t):t:null}function mn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?ad(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ta(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Ls(e)):[r,Ls(e)]:Ls(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&lo(u,c.clone(u)),u}function nt(t=" ",e=0){return ot(Ai,null,t,e)}function bt(t="",e=!1){return e?(ve(),wa(Jt,null,t)):ot(Jt,null,t)}function it(t){return t==null||typeof t=="boolean"?ot(Jt):W(t)?ot(Ve,null,t.slice()):Sa(t)?It(t):ot(Ai,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mn(t)}function ao(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ao(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ha(e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function ad(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(i==="style")e.style=Qr([e.style,s.style]);else if(vi(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function tt(t,e,n,s=null){lt(t,e,7,[n,s])}const ud=ca();let hd=0;function fd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ud,r={uid:hd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:da(s,i),emitsOptions:Ca(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ed.bind(null,r),t.ce&&t.ce(r),r}let ye=null,qs,Ir;{const t=Ii(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Ir=e("__VUE_SSR_SETTERS__",n=>is=n)}const xs=t=>{const e=ye;return qs(t),t.scope.on(),()=>{t.scope.off(),qs(e)}},al=()=>{ye&&ye.scope.off(),qs(null)};function Na(t){return t.vnode.shapeFlag&4}let is=!1;function dd(t,e=!1,n=!1){e&&Ir(e);const{props:s,children:i}=t.vnode,r=Na(t);Hf(t,s,r,e),$f(t,i,n);const o=r?pd(t,e):void 0;return e&&Ir(!1),o}function pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Af);const{setup:s}=n;if(s){Ft();const i=t.setupContext=s.length>1?gd(t):null,r=xs(t),o=ms(s,t,0,[t.props,i]),l=bc(o);if(Lt(),r(),(l||t.sp)&&!$n(t)&&ea(t),l){if(o.then(al,al),e)return o.then(c=>{ul(t,c)}).catch(c=>{Ti(c,t,0)});t.asyncDep=o}else ul(t,o)}else Ra(t)}function ul(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=zc(e)),Ra(t)}function Ra(t,e,n){const s=t.type;t.render||(t.render=s.render||rt);{const i=xs(t);Ft();try{Pf(t)}finally{Lt(),i()}}}const _d={get(t,e){return be(t,"get",""),t[e]}};function gd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_d),slots:t.slots,emit:t.emit,expose:e}}function Pi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zc(ro(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function md(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function xd(t){return H(t)&&"__vccOpts"in t}const Aa=(t,e)=>rf(t,e,is),yd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wr;const hl=typeof window<"u"&&window.trustedTypes;if(hl)try{wr=hl.createPolicy("vue",{createHTML:t=>t})}catch{}const Pa=wr?t=>wr.createHTML(t):t=>t,vd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,fl=ut&&ut.createElement("template"),Cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ut.createElementNS(vd,t):e==="mathml"?ut.createElementNS(bd,t):n?ut.createElement(t,{is:n}):ut.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ut.createTextNode(t),createComment:t=>ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{fl.innerHTML=Pa(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=fl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ed=Symbol("_vtc");function Id(t,e,n){const s=t[Ed];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dl=Symbol("_vod"),wd=Symbol("_vsh"),Sd=Symbol(""),Td=/(^|;)\s*display\s*:/;function Nd(t,e,n){const s=t.style,i=fe(n);let r=!1;if(n&&!i){if(e)if(fe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Bs(s,l,"")}else for(const o in e)n[o]==null&&Bs(s,o,"");for(const o in n)o==="display"&&(r=!0),Bs(s,o,n[o])}else if(i){if(e!==n){const o=s[Sd];o&&(n+=";"+o),s.cssText=n,r=Td.test(n)}}else e&&t.removeAttribute("style");dl in t&&(t[dl]=r?s.display:"",t[wd]&&(s.display="none"))}const pl=/\s*!important$/;function Bs(t,e,n){if(W(n))n.forEach(s=>Bs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rd(t,e);pl.test(n)?t.setProperty(tn(s),n.replace(pl,""),"important"):t[s]=n}}const _l=["Webkit","Moz","ms"],er={};function Rd(t,e){const n=er[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return er[e]=s;s=Ei(s);for(let i=0;i<_l.length;i++){const r=_l[i]+s;if(r in t)return er[e]=r}return e}const gl="http://www.w3.org/1999/xlink";function ml(t,e,n,s,i,r=Rh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gl,e.slice(6,e.length)):t.setAttributeNS(gl,e,n):n==null||r&&!wc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Mt(n)?String(n):n)}function xl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Pa(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function cn(t,e,n,s){t.addEventListener(e,n,s)}function Ad(t,e,n,s){t.removeEventListener(e,n,s)}const yl=Symbol("_vei");function Pd(t,e,n,s,i=null){const r=t[yl]||(t[yl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Dd(e);if(s){const a=r[e]=Md(s,i);cn(t,l,a,c)}else o&&(Ad(t,l,o,c),r[e]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function Dd(t){let e;if(vl.test(t)){e={};let s;for(;s=t.match(vl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tn(t.slice(2)),e]}let tr=0;const Od=Promise.resolve(),kd=()=>tr||(Od.then(()=>tr=0),tr=Date.now());function Md(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(Fd(s,n.value),e,5,[s])};return n.value=t,n.attached=kd(),n}function Fd(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ld=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Id(t,s,o):e==="style"?Nd(t,n,s):vi(e)?zr(e)||Pd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bd(t,e,s,o))?(xl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ml(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!fe(s))?xl(t,$e(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ml(t,e,s,o))};function Bd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&bl(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return bl(e)&&fe(n)?!1:e in t}const Cl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Fs(e,n):e};function Wd(t){t.target.composing=!0}function El(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nr=Symbol("_assign"),Hd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[nr]=Cl(i);const r=s||i.props&&i.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=_r(l)),t[nr](l)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",Wd),cn(t,"compositionend",El),cn(t,"change",El))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[nr]=Cl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?_r(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Ud=Ie({patchProp:Ld},Cd);let Il;function Vd(){return Il||(Il=Kf(Ud))}const jd=(...t)=>{const e=Vd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Gd(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,$d(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $d(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gd(t){return fe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Da;const Di=t=>Da=t,Oa=Symbol();function Sr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qn||(qn={}));function Kd(){const t=Rc(!0),e=t.run(()=>Gt({}));let n=[],s=[];const i=ro({install(r){Di(i),i._a=r,r.provide(Oa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ka=()=>{};function wl(t,e,n,s=ka){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ac()&&Ah(i),i}function rn(t,...e){t.slice().forEach(n=>{n(...e)})}const zd=t=>t(),Sl=Symbol(),sr=Symbol();function Tr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Sr(i)&&Sr(s)&&t.hasOwnProperty(n)&&!he(s)&&!Tt(s)?t[n]=Tr(i,s):t[n]=s}return t}const qd=Symbol();function Yd(t){return!Sr(t)||!t.hasOwnProperty(qd)}const{assign:Ct}=Object;function Qd(t){return!!(he(t)&&t.effect)}function Jd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=ef(n.state.value[t]);return Ct(u,r,Object.keys(o||{}).reduce((f,g)=>(f[g]=ro(Aa(()=>{Di(n);const y=n._s.get(t);return o[g].call(y,y)})),f),{}))}return c=Ma(t,a,e,n,s,!0),c}function Ma(t,e,n={},s,i,r){let o;const l=Ct({actions:{}},n),c={deep:!0};let a,u,f=[],g=[],y;const E=s.state.value[t];!r&&!E&&(s.state.value[t]={}),Gt({});let D;function V(O){let U;a=u=!1,typeof O=="function"?(O(s.state.value[t]),U={type:qn.patchFunction,storeId:t,events:y}):(Tr(s.state.value[t],O),U={type:qn.patchObject,payload:O,storeId:t,events:y});const le=D=Symbol();Yc().then(()=>{D===le&&(a=!0)}),u=!0,rn(f,U,s.state.value[t])}const d=r?function(){const{state:U}=n,le=U?U():{};this.$patch(Re=>{Ct(Re,le)})}:ka;function h(){o.stop(),f=[],g=[],s._s.delete(t)}const p=(O,U="")=>{if(Sl in O)return O[sr]=U,O;const le=function(){Di(s);const Re=Array.from(arguments),He=[],vt=[];function Nn(z){He.push(z)}function Ss(z){vt.push(z)}rn(g,{args:Re,name:le[sr],store:C,after:Nn,onError:Ss});let ue;try{ue=O.apply(this&&this.$id===t?this:C,Re)}catch(z){throw rn(vt,z),z}return ue instanceof Promise?ue.then(z=>(rn(He,z),z)).catch(z=>(rn(vt,z),Promise.reject(z))):(rn(He,ue),ue)};return le[Sl]=!0,le[sr]=U,le},x={_p:s,$id:t,$onAction:wl.bind(null,g),$patch:V,$reset:d,$subscribe(O,U={}){const le=wl(f,O,U.detached,()=>Re()),Re=o.run(()=>dn(()=>s.state.value[t],He=>{(U.flush==="sync"?u:a)&&O({storeId:t,type:qn.direct,events:y},He)},Ct({},c,U)));return le},$dispose:h},C=Si(x);s._s.set(t,C);const G=(s._a&&s._a.runWithContext||zd)(()=>s._e.run(()=>(o=Rc()).run(()=>e({action:p}))));for(const O in G){const U=G[O];if(he(U)&&!Qd(U)||Tt(U))r||(E&&Yd(U)&&(he(U)?U.value=E[O]:Tr(U,E[O])),s.state.value[t][O]=U);else if(typeof U=="function"){const le=p(U,O);G[O]=le,l.actions[O]=U}}return Ct(C,G),Ct(Y(C),G),Object.defineProperty(C,"$state",{get:()=>s.state.value[t],set:O=>{V(U=>{Ct(U,O)})}}),s._p.forEach(O=>{Ct(C,o.run(()=>O({store:C,app:s._a,pinia:s,options:l})))}),E&&r&&n.hydrate&&n.hydrate(C.$state,E),a=!0,u=!0,C}/*! #__NO_SIDE_EFFECTS__ */function Xd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Wf();return o=o||(c?Kn(Oa,null):null),o&&Di(o),o=Da,o._s.has(t)||(i?Ma(t,e,s,o):Jd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Zd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ep=()=>{};var Tl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const T=function(t,e){if(!t)throw En(e)},En=function(t){return new Error("Firebase Database ("+Fa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,y=a&63;c||(y=64,o||(g=64)),s.push(n[u],n[f],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(La(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||f==null)throw new np;const g=r<<2|l>>4;if(s.push(g),a!==64){const y=l<<4&240|a>>2;if(s.push(y),f!==64){const E=a<<6&192|f;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ba=function(t){const e=La(t);return uo.encodeByteArray(e,!0)},Ys=function(t){return Ba(t).replace(/\./g,"")},Nr=function(t){try{return uo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){return Wa(void 0,t)}function Wa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ip(n)||(t[n]=Wa(t[n],e[n]));return t}function ip(t){return t!=="__proto__"}/**
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
 */const op=()=>rp().__FIREBASE_DEFAULTS__,lp=()=>{if(typeof process>"u"||typeof Tl>"u")return;const t=Tl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nr(t[1]);return e&&JSON.parse(e)},Ha=()=>{try{return ep()||op()||lp()||cp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},up=t=>{const e=ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ua=()=>{var t;return(t=Ha())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function hp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ys(JSON.stringify(n)),Ys(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mp="FirebaseError";class ys extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mp,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ys(i,l,s)}}function xp(t,e){return t.replace(yp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $a=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rs(Nr(r[0])||""),n=rs(Nr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vp=function(t){const e=$a(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(t){const e=$a(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rl(r)&&Rl(o)){if(!Js(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ep{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let f=0;f<80;f++){f<40?f<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):f<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[f]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ho(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ki=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class wp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tp(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sp(t){return t===jt?void 0:t}function Tp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Rp={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Ap=ie.INFO,Pp={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Dp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Pp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=Ap,this._logHandler=Dp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Op=(t,e)=>e.some(n=>t instanceof n);let Al,Pl;function kp(){return Al||(Al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mp(){return Pl||(Pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ka=new WeakMap,Rr=new WeakMap,za=new WeakMap,ir=new WeakMap,fo=new WeakMap;function Fp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ka.set(n,t)}).catch(()=>{}),fo.set(e,t),e}function Lp(t){if(Rr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rr.set(t,e)}let Ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||za.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bp(t){Ar=t(Ar)}function Wp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rr(this),e,...n);return za.set(s,e.sort?e.sort():[e]),Nt(s)}:Mp().includes(t)?function(...e){return t.apply(rr(this),e),Nt(Ka.get(this))}:function(...e){return Nt(t.apply(rr(this),e))}}function Hp(t){return typeof t=="function"?Wp(t):(t instanceof IDBTransaction&&Lp(t),Op(t,kp())?new Proxy(t,Ar):t)}function Nt(t){if(t instanceof IDBRequest)return Fp(t);if(ir.has(t))return ir.get(t);const e=Hp(t);return e!==t&&(ir.set(t,e),fo.set(e,t)),e}const rr=t=>fo.get(t);function Up(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Vp=["get","getKey","getAll","getAllKeys","count"],jp=["put","add","delete","clear"],or=new Map;function Dl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(or.get(e))return or.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=jp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return or.set(e,r),r}Bp(t=>({...t,get:(e,n,s)=>Dl(e,n)||t.get(e,n,s),has:(e,n)=>!!Dl(e,n)||t.has(e,n)}));/**
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
 */class $p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pr="@firebase/app",Ol="0.11.2";/**
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
 */const _t=new Ga("@firebase/app"),Kp="@firebase/app-compat",zp="@firebase/analytics-compat",qp="@firebase/analytics",Yp="@firebase/app-check-compat",Qp="@firebase/app-check",Jp="@firebase/auth",Xp="@firebase/auth-compat",Zp="@firebase/database",e_="@firebase/data-connect",t_="@firebase/database-compat",n_="@firebase/functions",s_="@firebase/functions-compat",i_="@firebase/installations",r_="@firebase/installations-compat",o_="@firebase/messaging",l_="@firebase/messaging-compat",c_="@firebase/performance",a_="@firebase/performance-compat",u_="@firebase/remote-config",h_="@firebase/remote-config-compat",f_="@firebase/storage",d_="@firebase/storage-compat",p_="@firebase/firestore",__="@firebase/vertexai",g_="@firebase/firestore-compat",m_="firebase",x_="11.4.0";/**
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
 */const Dr="[DEFAULT]",y_={[Pr]:"fire-core",[Kp]:"fire-core-compat",[qp]:"fire-analytics",[zp]:"fire-analytics-compat",[Qp]:"fire-app-check",[Yp]:"fire-app-check-compat",[Jp]:"fire-auth",[Xp]:"fire-auth-compat",[Zp]:"fire-rtdb",[e_]:"fire-data-connect",[t_]:"fire-rtdb-compat",[n_]:"fire-fn",[s_]:"fire-fn-compat",[i_]:"fire-iid",[r_]:"fire-iid-compat",[o_]:"fire-fcm",[l_]:"fire-fcm-compat",[c_]:"fire-perf",[a_]:"fire-perf-compat",[u_]:"fire-rc",[h_]:"fire-rc-compat",[f_]:"fire-gcs",[d_]:"fire-gcs-compat",[p_]:"fire-fst",[g_]:"fire-fst-compat",[__]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const Xs=new Map,v_=new Map,Or=new Map;function kl(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(Or.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,t);for(const n of Xs.values())kl(n,t);for(const n of v_.values())kl(n,t);return!0}function b_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function C_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const E_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new ja("app","Firebase",E_);/**
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
 */class I_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const w_=x_;function qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(n||(n=Ua()),!n)throw Rt.create("no-options");const r=Xs.get(i);if(r){if(Js(n,r.options)&&Js(s,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new Np(i);for(const c of Or.values())o.addComponent(c);const l=new I_(n,s,o);return Xs.set(i,l),l}function S_(t=Dr){const e=Xs.get(t);if(!e&&t===Dr&&Ua())return qa();if(!e)throw Rt.create("no-app",{appName:t});return e}function pn(t,e,n){var s;let i=(s=y_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(l.join(" "));return}Zs(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const T_="firebase-heartbeat-database",N_=1,ls="firebase-heartbeat-store";let lr=null;function Ya(){return lr||(lr=Up(T_,N_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),lr}async function R_(t){try{const n=(await Ya()).transaction(ls),s=await n.objectStore(ls).get(Qa(t));return await n.done,s}catch(e){if(e instanceof ys)_t.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(n.message)}}}async function Ml(t,e){try{const s=(await Ya()).transaction(ls,"readwrite");await s.objectStore(ls).put(e,Qa(t)),await s.done}catch(n){if(n instanceof ys)_t.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(s.message)}}}function Qa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const A_=1024,P_=30;class D_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>P_){const o=M_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_t.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fl(),{heartbeatsToSend:s,unsentEntries:i}=O_(this._heartbeatsCache.heartbeats),r=Ys(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return _t.warn(n),""}}}function Fl(){return new Date().toISOString().substring(0,10)}function O_(t,e=A_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ll(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ll(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class k_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _p()?gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ll(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}function M_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function F_(t){Zs(new os("platform-logger",e=>new $p(e),"PRIVATE")),Zs(new os("heartbeat",e=>new D_(e),"PRIVATE")),pn(Pr,Ol,t),pn(Pr,Ol,"esm2017"),pn("fire-js","")}F_("");var L_="firebase",B_="11.4.0";/**
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
 */pn(L_,B_,"app");var Bl={};const Wl="@firebase/database",Hl="1.0.13";/**
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
 */let Ja="";function W_(t){Ja=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class U_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new H_(e)}}catch{}return new U_},Kt=Xa("localStorage"),V_=Xa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Ga("@firebase/database"),j_=function(){let t=1;return function(){return t++}}(),Za=function(t){const e=Ip(t),n=new Ep;n.update(e);const s=n.digest();return uo.encodeByteArray(s)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vs.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let Yn=null,Ul=!0;const $_=function(t,e){T(!0,"Can't turn on custom loggers persistently."),_n.logLevel=ie.VERBOSE,Yn=_n.log.bind(_n)},Ee=function(...t){if(Ul===!0&&(Ul=!1,Yn===null&&V_.get("logging_enabled")===!0&&$_()),Yn){const e=vs.apply(null,t);Yn(e)}},bs=function(t){return function(...e){Ee(t,...e)}},kr=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);_n.error(e)},gt=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw _n.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+vs(...t);_n.warn(e)},G_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},K_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yn="[MIN_NAME]",Xt="[MAX_NAME]",wn=function(t,e){if(t===e)return 0;if(t===yn||e===Xt)return-1;if(e===yn||t===Xt)return 1;{const n=Vl(t),s=Vl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},z_=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},po=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=po(t[e[s]]);return n+="}",n},tu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nu=function(t){T(!eu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},q_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Q_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const J_=new RegExp("^-?(0*)\\d{1,10}$"),X_=-2147483648,Z_=2147483647,Vl=function(t){if(J_.test(t)){const e=Number(t);if(e>=X_&&e<=Z_)return e}return null},Sn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},eg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class tg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,C_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Ws{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ws.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="5",su="v",iu="s",ru="r",ou="f",lu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cu="ls",au="p",Mr="ac",uu="websocket",hu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function du(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===uu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sg(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr={},ar={};function go(t){const e=t.toString();return cr[e]||(cr[e]=new ig),cr[e]}function rg(t,e){const n=t.toString();return ar[n]||(ar[n]=e()),ar[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Sn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="start",lg="close",cg="pLPCommand",ag="pRTLPCB",pu="id",_u="pw",gu="ser",ug="cb",hg="seg",fg="ts",dg="d",pg="dframe",mu=1870,xu=30,_g=mu-xu,gg=25e3,mg=3e4;class an{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=go(n),this.urlFn=c=>(this.appCheckToken&&(c[Mr]=this.appCheckToken),du(n,hu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new og(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mg)),K_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jl)this.id=l,this.password=c;else if(o===lg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[jl]="t",s[gu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ug]=this.scriptTagHolder.uniqueCallbackIdentifier),s[su]=_o,this.transportSessionId&&(s[iu]=this.transportSessionId),this.lastSessionId&&(s[cu]=this.lastSessionId),this.applicationId&&(s[au]=this.applicationId),this.appCheckToken&&(s[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(s[ru]=ou);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){an.forceAllow_=!0}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){return an.forceAllow_?!0:!an.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!q_()&&!Y_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ba(n),i=tu(s,_g);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[pg]="t",s[pu]=e,s[_u]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j_(),window[cg+this.uniqueCallbackIdentifier]=e,window[ag+this.uniqueCallbackIdentifier]=n,this.myIFrame=mo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pu]=this.myID,e[_u]=this.myPW,e[gu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xu+s.length<=mu;){const o=this.pendingSegs.shift();s=s+"&"+hg+i+"="+o.seg+"&"+fg+i+"="+o.ts+"&"+dg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(gg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=16384,yg=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=go(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[su]=_o,typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(o[ru]=ou),n&&(o[iu]=n),s&&(o[cu]=s),i&&(o[Mr]=i),r&&(o[au]=r),du(e,uu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;pp(),this.mySock=new ei(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ei!==null&&!Ke.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tu(n,xg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static get ALL_TRANSPORTS(){return[an,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of cs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=6e4,bg=5e3,Cg=10*1024,Eg=100*1024,ur="t",$l="d",Ig="s",Gl="r",wg="e",Kl="o",zl="a",ql="n",Yl="p",Sg="h";class Tg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ur in e){const n=e[ur];n===zl?this.upgradeIfSecondaryHealthy_():n===Gl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ql,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(ur,e);if($l in e){const s=e[$l];if(n===Sg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ql){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ig?this.onConnectionShutdown_(s):n===Gl?this.onReset_(s):n===wg?kr("Server Error: "+s):n===Kl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_o!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vu{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends vu{static getInstance(){return new ti}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Va()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=32,Jl=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ee("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ng(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Eu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return Ne(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xo(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Rg{constructor(e,n){this.errorPrefix_=n,this.parts_=Cu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ki(this.parts_[s]);Iu(this)}}function Ag(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ki(e),Iu(t)}function Pg(t){const e=t.parts_.pop();t.byteLength_-=ki(e),t.parts_.length>0&&(t.byteLength_-=1)}function Iu(t){if(t.byteLength_>Jl)throw new Error(t.errorPrefix_+"has a key path longer than "+Jl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ql)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ql+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends vu{static getInstance(){return new yo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=1e3,Dg=60*5*1e3,Xl=30*1e3,Og=1.3,kg=3e4,Mg="server_kill",Zl=3;class pt extends yu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=pt.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mn,this.maxReconnectDelay_=Dg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Oi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;pt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const s=xn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kr("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kg&&(this.reconnectDelay_=Mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Og)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(f){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,l=new Tg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,y=>{ke(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mg)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ke(f),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nl(this.interruptReasons_)&&(this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>po(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zl&&(this.reconnectDelay_=Xl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ja.replace(/\./g,"-")]=1,Va()?e["framework.cordova"]=1:dp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Nl(this.interruptReasons_)&&e}}pt.nextPersistentConnectionId_=0;pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new $(yn,e),i=new $(yn,n);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class wu extends Mi{static get __EMPTY_NODE(){return Ds}static set __EMPTY_NODE(e){Ds=e}compare(e,n){return wn(e.name,n.name)}isDefinedOn(e){throw En("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(Xt,Ds)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Ds)}toString(){return".key"}}const gn=new wu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??me.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Fg{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Os(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new Fg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){return wn(t.name,e.name)}function vo(t,e){return wn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;function Bg(t){Fr=t}const Su=function(t){return typeof t=="number"?"number:"+nu(t):"string:"+t},Tu=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else T(t===Fr||t.isEmpty(),"priority of unexpected type.");T(t===Fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;class ge{static set __childrenNodeConstructor(e){ec=e}static get __childrenNodeConstructor(){return ec}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:j(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Su(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nu(this.value_):e+=this.value_,this.lazyHash_=Za(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu,Ru;function Wg(t){Nu=t}function Hg(t){Ru=t}class Ug extends Mi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Xt,new ge("[PRIORITY-POST]",Ru))}makePost(e,n){const s=Nu(e);return new $(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ae=new Ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=Math.log(2);class jg{constructor(e){const n=r=>parseInt(Math.log(r)/Vg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let f,g;if(u===0)return null;if(u===1)return f=t[c],g=n?n(f):f,new me(g,f.node,me.BLACK,null,null);{const y=parseInt(u/2,10)+c,E=i(c,y),D=i(y+1,a);return f=t[y],g=n?n(f):f,new me(g,f.node,me.BLACK,E,D)}},r=function(c){let a=null,u=null,f=t.length;const g=function(E,D){const V=f-E,d=f;f-=E;const h=i(V+1,d),p=t[V],x=n?n(p):p;y(new me(x,p.node,D,null,h))},y=function(E){a?(a.left=E,a=E):(u=E,a=E)};for(let E=0;E<c.count;++E){const D=c.nextBitIsOne(),V=Math.pow(2,c.count-(E+1));D?g(V,me.BLACK):(g(V,me.BLACK),g(V,me.RED))}return u},o=new jg(t.length),l=r(o);return new Oe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;const on={};class dt{static get Default(){return T(on&&ae,"ChildrenNode.ts has not been loaded"),hr=hr||new dt({".priority":on},{".priority":ae}),hr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=xn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ni(s,e.getCompare()):l=on;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new dt(u,a)}addToIndexes(e,n){const s=Qs(this.indexes_,(i,r)=>{const o=xn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===on)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator($.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ni(l,o.getCompare())}else return on;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new $(e.name,l))),c.insert(e,e.node)}});return new dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Qs(this.indexes_,i=>{if(i===on)return i;{const r=n.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;class F{static get EMPTY_NODE(){return Fn||(Fn=new F(new Oe(vo),null,dt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Tu(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fn:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new $(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{T(j(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Su(this.getPriority().val())+":"),this.forEachChild(ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Za(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===gn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ae),i=n.getIterator(ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $g extends F{constructor(){super(new Oe(vo),F.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Cs=new $g;Object.defineProperties($,{MIN:{value:new $(yn,F.EMPTY_NODE)},MAX:{value:new $(Xt,Cs)}});wu.__EMPTY_NODE=F.EMPTY_NODE;ge.__childrenNodeConstructor=F;Bg(Cs);Hg(Cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=!0;function xe(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,xe(e))}if(!(t instanceof Array)&&Gg){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new $(o,c)))}}),n.length===0)return F.EMPTY_NODE;const r=ni(n,Lg,o=>o.name,vo);if(s){const o=ni(n,ae.getCompare());return new F(r,xe(e),new dt({".priority":o},{".priority":ae}))}else return new F(r,xe(e),dt.Default)}else{let n=F.EMPTY_NODE;return Me(t,(s,i)=>{if(xt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Wg(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg extends Mi{constructor(e){super(),this.indexPath_=e,T(!K(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}makePost(e,n){const s=xe(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new $(Xt,e)}toString(){return Cu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Mi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?wn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const s=xe(e);return new $(n,s)}toString(){return".value"}}const qg=new zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){return{type:"value",snapshotNode:t}}function vn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function as(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function us(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Yg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(as(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vn(n,s)):o.trackChildChange(us(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(as(i,r))}),n.isLeafNode()||n.forEachChild(ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(us(i,r,o))}else s.trackChildChange(vn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new bo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new $(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(ae,(o,l)=>{r.matches(new $(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new $(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,y)=>f(y,g)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new $(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const f=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const y=g==null?1:o(g,c);if(u&&!s.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(us(n,s,f)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(as(n,f));const D=l.updateImmediateChild(n,F.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(vn(g.name,g.node)),D.updateImmediateChild(g.name,g.node)):D}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(as(a.name,a.node)),r.trackChildChange(vn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new Co;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jg(t){return t.loadsAllData()?new bo(t.getIndex()):t.hasLimit()?new Qg(t):new hs(t)}function tc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===qg?n="$value":t.index_===gn?n="$key":(T(t.index_ instanceof Kg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends yu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=si.getListenId_(e,s),l={};this.listens_[o]=l;const c=tc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let f=u;if(a===404&&(f=null,a=null),a===null&&this.onDataUpdate_(r,f,!1,s),xn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=si.getListenId_(e,n);delete this.listens_[s]}get(e){const n=tc(e._queryParams),s=e._path.toString(),i=new Oi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=rs(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return{value:null,children:new Map}}function Pu(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,ii());const i=t.children.get(s);e=re(e),Pu(i,e,n)}}function Lr(t,e,n){t.value!==null?n(e,t.value):Zg(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);Lr(i,r,n)})}function Zg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=10*1e3,tm=30*1e3,nm=5*60*1e3;class sm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new em(e);const s=sc+(tm-sc)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&xt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*nm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function Du(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Io(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qe.ACK_USER_WRITE,this.source=Du()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new ri(Q(),n,this.revert)}}else return T(j(this.path)===e,"operationForChild called for unrelated child."),new ri(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=qe.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new fs(this.source,Q()):new fs(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qe.OVERWRITE}operationForChild(e){return K(this.path)?new Zt(this.source,Q(),this.snap.getImmediateChild(e)):new Zt(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qe.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new Zt(this.source,Q(),n.value):new ds(this.source,Q(),n)}else return T(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Yg(o.childName,o.snapshotNode))}),Ln(t,i,"child_removed",e,s,n),Ln(t,i,"child_added",e,s,n),Ln(t,i,"child_moved",r,s,n),Ln(t,i,"child_changed",e,s,n),Ln(t,i,"value",e,s,n),i}function Ln(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>lm(t,l,c)),o.forEach(l=>{const c=om(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function om(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lm(t,e,n){if(e.childName==null||n.childName==null)throw En("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){return{eventCache:t,serverCache:e}}function Jn(t,e,n,s){return Fi(new Ot(e,n,s),t.serverCache)}function Ou(t,e,n,s){return Fi(t.eventCache,new Ot(e,n,s))}function oi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function en(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;const cm=()=>(fr||(fr=new Oe(z_)),fr);class oe{static fromObject(e){let n=new oe(null);return Me(e,(s,i)=>{n=n.set(new ee(s),i)}),n}constructor(e,n=cm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:_e(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new oe(null)}}set(e,n){if(K(e))return new oe(n,this.children);{const s=j(e),r=(this.children.get(s)||new oe(null)).set(re(e),n),o=this.children.insert(s,r);return new oe(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(K(e))return n;{const s=j(e),r=(this.children.get(s)||new oe(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new oe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(re(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),_e(n,i),s):new oe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new oe(null))}}function Xn(t,e,n){if(K(e))return new Qe(new oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new oe(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function ic(t,e,n){let s=t;return Me(n,(i,r)=>{s=Xn(s,_e(e,i),r)}),s}function rc(t,e){if(K(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new Qe(n)}}function Br(t,e){return nn(t,e)!=null}function nn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function oc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(s,i)=>{e.push(new $(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function At(t,e){if(K(e))return t;{const n=nn(t,e);return n!=null?new Qe(new oe(n)):new Qe(t.writeTree_.subtree(e))}}function Wr(t){return t.writeTree_.isEmpty()}function bn(t,e){return ku(Q(),t.writeTree_,e)}function ku(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ku(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e){return Bu(e,t)}function am(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function um(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function hm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&fm(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return dm(t),!0;if(s.snap)t.visibleWrites=rc(t.visibleWrites,s.path);else{const l=s.children;Me(l,c=>{t.visibleWrites=rc(t.visibleWrites,_e(s.path,c))})}return!0}else return!1}function fm(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(_e(t.path,n),e))return!0;return!1}function dm(t){t.visibleWrites=Mu(t.allWrites,pm,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pm(t){return t.visible}function Mu(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Ne(n,o),s=Xn(s,l,r.snap)):ze(o,n)&&(l=Ne(o,n),s=Xn(s,Q(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Ne(n,o),s=ic(s,l,r.children);else if(ze(o,n))if(l=Ne(o,n),K(l))s=ic(s,Q(),r.children);else{const c=xn(r.children,j(l));if(c){const a=c.getChild(re(l));s=Xn(s,Q(),a)}}}else throw En("WriteRecord should have .snap or .children")}}return s}function Fu(t,e,n,s,i){if(!s&&!i){const r=nn(t.visibleWrites,e);if(r!=null)return r;{const o=At(t.visibleWrites,e);if(Wr(o))return n;if(n==null&&!Br(o,Q()))return null;{const l=n||F.EMPTY_NODE;return bn(o,l)}}}else{const r=At(t.visibleWrites,e);if(!i&&Wr(r))return n;if(!i&&n==null&&!Br(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(ze(a.path,e)||ze(e,a.path))},l=Mu(t.allWrites,o,e),c=n||F.EMPTY_NODE;return bn(l,c)}}}function _m(t,e,n){let s=F.EMPTY_NODE;const i=nn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=At(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const c=bn(At(r,new ee(o)),l);s=s.updateImmediateChild(o,c)}),oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(t.visibleWrites,e);return oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gm(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Br(t.visibleWrites,r))return null;{const o=At(t.visibleWrites,r);return Wr(o)?i.getChild(n):bn(o,i.getChild(n))}}function mm(t,e,n,s){const i=_e(e,n),r=nn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=At(t.visibleWrites,i);return bn(o,s.getNode().getImmediateChild(n))}else return null}function xm(t,e){return nn(t.visibleWrites,e)}function ym(t,e,n,s,i,r,o){let l;const c=At(t.visibleWrites,e),a=nn(c,Q());if(a!=null)l=a;else if(n!=null)l=bn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let y=g.getNext();for(;y&&u.length<i;)f(y,s)!==0&&u.push(y),y=g.getNext();return u}else return[]}function vm(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function li(t,e,n,s){return Fu(t.writeTree,t.treePath,e,n,s)}function wo(t,e){return _m(t.writeTree,t.treePath,e)}function lc(t,e,n,s){return gm(t.writeTree,t.treePath,e,n,s)}function ci(t,e){return xm(t.writeTree,_e(t.treePath,e))}function bm(t,e,n,s,i,r){return ym(t.writeTree,t.treePath,e,n,s,i,r)}function So(t,e,n){return mm(t.writeTree,t.treePath,e,n)}function Lu(t,e){return Bu(_e(t.treePath,e),t.writeTree)}function Bu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,us(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,vn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,us(s,e.snapshotNode,i.oldSnap));else throw En("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wu=new Em;class To{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return So(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=bm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){return{filter:t}}function wm(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Sm(t,e,n,s,i){const r=new Cm;let o,l;if(n.type===qe.OVERWRITE){const a=n;a.source.fromUser?o=Hr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!K(a.path),o=ai(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===qe.MERGE){const a=n;a.source.fromUser?o=Nm(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Ur(t,e,a.path,a.children,s,i,l,r))}else if(n.type===qe.ACK_USER_WRITE){const a=n;a.revert?o=Pm(t,e,a.path,s,i,r):o=Rm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===qe.LISTEN_COMPLETE)o=Am(t,e,n.path,s,r);else throw En("Unknown operation type: "+n.type);const c=r.getChanges();return Tm(e,o,c),{viewCache:o,changes:c}}function Tm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=oi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Au(oi(e)))}}function Hu(t,e,n,s,i,r){const o=e.eventCache;if(ci(s,n)!=null)return e;{let l,c;if(K(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=en(e),u=a instanceof F?a:F.EMPTY_NODE,f=wo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const a=li(s,en(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=j(n);if(a===".priority"){T(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const f=lc(s,n,u,c);f!=null?l=t.filter.updatePriority(u,f):l=o.getNode()}else{const u=re(n);let f;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=lc(s,n,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(a).updateChild(u,g):f=o.getNode().getImmediateChild(a)}else f=So(s,a,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),a,f,u,i,r):l=o.getNode()}}return Jn(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function ai(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const y=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),y,null)}else{const y=j(n);if(!c.isCompleteForPath(n)&&Dt(n)>1)return e;const E=re(n),V=c.getNode().getImmediateChild(y).updateChild(E,s);y===".priority"?a=u.updatePriority(c.getNode(),V):a=u.updateChild(c.getNode(),y,V,E,Wu,null)}const f=Ou(e,a,c.isFullyInitialized()||K(n),u.filtersNodes()),g=new To(i,f,r);return Hu(t,f,n,i,g,l)}function Hr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new To(i,e,r);if(K(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Jn(e,a,!0,t.filter.filtersNodes());else{const f=j(n);if(f===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Jn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=re(n),y=l.getNode().getImmediateChild(f);let E;if(K(g))E=s;else{const D=u.getCompleteChild(f);D!=null?bu(g)===".priority"&&D.getChild(Eu(g)).isEmpty()?E=D:E=D.updateChild(g,s):E=F.EMPTY_NODE}if(y.equals(E))c=e;else{const D=t.filter.updateChild(l.getNode(),f,E,g,u,o);c=Jn(e,D,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function cc(t,e){return t.eventCache.isCompleteForChild(e)}function Nm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=_e(n,c);cc(e,j(u))&&(l=Hr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=_e(n,c);cc(e,j(u))||(l=Hr(t,l,u,a,i,r,o))}),l}function ac(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ur(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;K(n)?a=s:a=new oe(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((f,g)=>{if(u.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),E=ac(t,y,g);c=ai(t,c,new ee(f),E,i,r,o,l)}}),a.children.inorderTraversal((f,g)=>{const y=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!u.hasChild(f)&&!y){const E=e.serverCache.getNode().getImmediateChild(f),D=ac(t,E,g);c=ai(t,c,new ee(f),D,i,r,o,l)}}),c}function Rm(t,e,n,s,i,r,o){if(ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(t,e,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new oe(null);return c.getNode().forEachChild(gn,(u,f)=>{a=a.set(new ee(u),f)}),Ur(t,e,n,a,i,r,l,o)}else return e}else{let a=new oe(null);return s.foreach((u,f)=>{const g=_e(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Ur(t,e,n,a,i,r,l,o)}}function Am(t,e,n,s,i){const r=e.serverCache,o=Ou(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Hu(t,o,n,s,Wu,i)}function Pm(t,e,n,s,i,r){let o;if(ci(s,n)!=null)return e;{const l=new To(s,e,i),c=e.eventCache.getNode();let a;if(K(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=li(s,en(e));else{const f=e.serverCache.getNode();T(f instanceof F,"serverChildren would be complete if leaf node"),u=wo(s,f)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=j(n);let f=So(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=c.getImmediateChild(u)),f!=null?a=t.filter.updateChild(c,u,f,re(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,F.EMPTY_NODE,re(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=li(s,en(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ci(s,Q())!=null,Jn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bo(s.getIndex()),r=Jg(s);this.processor_=Im(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Ot(c,o.isFullyInitialized(),i.filtersNodes()),f=new Ot(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fi(f,u),this.eventGenerator_=new im(this.query_)}get query(){return this.query_}}function Om(t){return t.viewCache_.serverCache.getNode()}function km(t){return oi(t.viewCache_)}function Mm(t,e){const n=en(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function uc(t){return t.eventRegistrations_.length===0}function Fm(t,e){t.eventRegistrations_.push(e)}function hc(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function fc(t,e,n,s){e.type===qe.MERGE&&e.source.queryId!==null&&(T(en(t.viewCache_),"We should always have a full cache before handling merges"),T(oi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Sm(t.processor_,i,e,n,s);return wm(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(r,o)=>{s.push(vn(r,o))}),n.isFullyInitialized()&&s.push(Au(n.getNode())),Uu(t,s,n.getNode(),e)}function Uu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return rm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class Vu{constructor(){this.views=new Map}}function Bm(t){T(!ui,"__referenceConstructor has already been defined"),ui=t}function Wm(){return T(ui,"Reference.ts has not been loaded"),ui}function Hm(t){return t.views.size===0}function No(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),fc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(fc(o,e,n,s));return r}}function ju(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=li(n,i?s:null),c=!1;l?c=!0:s instanceof F?(l=wo(n,s),c=!1):(l=F.EMPTY_NODE,c=!1);const a=Fi(new Ot(l,c,!1),new Ot(s,i,!1));return new Dm(e,a)}return o}function Um(t,e,n,s,i,r){const o=ju(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Fm(o,n),Lm(o,n)}function Vm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=kt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(hc(a,n,s)),uc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(hc(c,n,s)),uc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!kt(t)&&r.push(new(Wm())(e._repo,e._path)),{removed:r,events:o}}function $u(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pt(t,e){let n=null;for(const s of t.views.values())n=n||Mm(s,e);return n}function Gu(t,e){if(e._queryParams.loadsAllData())return Bi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ku(t,e){return Gu(t,e)!=null}function kt(t){return Bi(t)!=null}function Bi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function jm(t){T(!hi,"__referenceConstructor has already been defined"),hi=t}function $m(){return T(hi,"Reference.ts has not been loaded"),hi}let Gm=1;class dc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=vm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zu(t,e,n,s,i){return am(t.pendingWriteTree_,e,n,s,i),i?Is(t,new Zt(Du(),e,n)):[]}function zt(t,e,n=!1){const s=um(t.pendingWriteTree_,e);if(hm(t.pendingWriteTree_,e)){let r=new oe(null);return s.snap!=null?r=r.set(Q(),!0):Me(s.children,o=>{r=r.set(new ee(o),!0)}),Is(t,new ri(s.path,r,n))}else return[]}function Es(t,e,n){return Is(t,new Zt(Eo(),e,n))}function Km(t,e,n){const s=oe.fromObject(n);return Is(t,new ds(Eo(),e,s))}function zm(t,e){return Is(t,new fs(Eo(),e))}function qm(t,e,n){const s=Ao(t,n);if(s){const i=Po(s),r=i.path,o=i.queryId,l=Ne(r,e),c=new fs(Io(o),l);return Do(t,r,c)}else return[]}function fi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ku(o,e))){const c=Vm(o,e,n,s);Hm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(g,y)=>kt(y));if(u&&!f){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const y=Jm(g);for(let E=0;E<y.length;++E){const D=y[E],V=D.query,d=Ju(t,D);t.listenProvider_.startListening(Zn(V),ps(t,V),d.hashFn,d.onComplete)}}}!f&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(Zn(e),null):a.forEach(g=>{const y=t.queryToTagMap.get(Wi(g));t.listenProvider_.stopListening(Zn(g),y)}))}Xm(t,a)}return l}function qu(t,e,n,s){const i=Ao(t,s);if(i!=null){const r=Po(i),o=r.path,l=r.queryId,c=Ne(o,e),a=new Zt(Io(l),c,n);return Do(t,o,a)}else return[]}function Ym(t,e,n,s){const i=Ao(t,s);if(i){const r=Po(i),o=r.path,l=r.queryId,c=Ne(o,e),a=oe.fromObject(n),u=new ds(Io(l),c,a);return Do(t,o,u)}else return[]}function Vr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,y)=>{const E=Ne(g,i);r=r||Pt(y,E),o=o||kt(y)});let l=t.syncPointTree_.get(i);l?(o=o||kt(l),r=r||Pt(l,Q())):(l=new Vu,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,E)=>{const D=Pt(E,Q());D&&(r=r.updateImmediateChild(y,D))}));const a=Ku(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Wi(e);T(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const y=Zm();t.queryToTagMap.set(g,y),t.tagToQueryMap.set(y,g)}const u=Li(t.pendingWriteTree_,i);let f=Um(l,e,n,u,r,c);if(!a&&!o&&!s){const g=Gu(l,e);f=f.concat(e0(t,e,g))}return f}function Ro(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ne(o,e),a=Pt(l,c);if(a)return a});return Fu(i,e,r,n,!0)}function Qm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const f=Ne(a,n);s=s||Pt(u,f)});let i=t.syncPointTree_.get(n);i?s=s||Pt(i,Q()):(i=new Vu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ot(s,!0,!1):null,l=Li(t.pendingWriteTree_,e._path),c=ju(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return km(c)}function Is(t,e){return Yu(e,t.syncPointTree_,null,Li(t.pendingWriteTree_,Q()))}function Yu(t,e,n,s){if(K(t.path))return Qu(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Pt(i,Q()));let r=[];const o=j(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Lu(s,o);r=r.concat(Yu(l,c,a,u))}return i&&(r=r.concat(No(i,t,s,n))),r}}function Qu(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Pt(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Lu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Qu(u,l,c,a)))}),i&&(r=r.concat(No(i,t,s,n))),r}function Ju(t,e){const n=e.query,s=ps(t,n);return{hashFn:()=>(Om(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?qm(t,n._path,s):zm(t,n._path);{const r=Q_(i,n);return fi(t,n,null,r)}}}}function ps(t,e){const n=Wi(e);return t.queryToTagMap.get(n)}function Wi(t){return t._path.toString()+"$"+t._queryIdentifier}function Ao(t,e){return t.tagToQueryMap.get(e)}function Po(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Do(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Li(t.pendingWriteTree_,e);return No(s,n,i,null)}function Jm(t){return t.fold((e,n,s)=>{if(n&&kt(n))return[Bi(n)];{let i=[];return n&&(i=$u(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($m())(t._repo,t._path):t}function Xm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Wi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Zm(){return Gm++}function e0(t,e,n){const s=e._path,i=ps(t,e),r=Ju(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)T(!kt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,f)=>{if(!K(a)&&u&&kt(u))return[Bi(u).query];{let g=[];return u&&(g=g.concat($u(u).map(y=>y.query))),Me(f,(y,E)=>{g=g.concat(E)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(Zn(u),ps(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oo(n)}node(){return this.node_}}class ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new ko(this.syncTree_,n)}node(){return Ro(this.syncTree_,this.path_)}}const t0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pc=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return n0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return s0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},n0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},s0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},i0=function(t,e,n,s){return Mo(e,new ko(n,t),s)},Xu=function(t,e,n){return Mo(t,new Oo(e),n)};function Mo(t,e,n){const s=t.getPriority().val(),i=pc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=pc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(ae,(l,c)=>{const a=Mo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Lo(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=j(n);for(;i!==null;){const r=xn(s.node.children,i)||{children:{},childCount:0};s=new Fo(i,s,r),n=re(n),i=j(n)}return s}function Tn(t){return t.node.value}function Zu(t,e){t.node.value=e,jr(t)}function eh(t){return t.node.childCount>0}function r0(t){return Tn(t)===void 0&&!eh(t)}function Hi(t,e){Me(t.node.children,(n,s)=>{e(new Fo(n,t,s))})}function th(t,e,n,s){n&&e(t),Hi(t,i=>{th(i,e,!0)})}function o0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ws(t){return new ee(t.parent===null?t.name:ws(t.parent)+"/"+t.name)}function jr(t){t.parent!==null&&l0(t.parent,t.name,t)}function l0(t,e,n){const s=r0(n),i=xt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,jr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=/[\[\].#$\/\u0000-\u001F\u007F]/,a0=/[\[\].#$\u0000-\u001F\u007F]/,dr=10*1024*1024,nh=function(t){return typeof t=="string"&&t.length!==0&&!c0.test(t)},sh=function(t){return typeof t=="string"&&t.length!==0&&!a0.test(t)},u0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sh(t)},h0=function(t,e,n,s){Bo(ho(t,"value"),e,n)},Bo=function(t,e,n){const s=n instanceof ee?new Rg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(eu(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>dr/3&&ki(e)>dr)throw new Error(t+"contains a string greater than "+dr+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nh(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ag(s,o),Bo(t,l,s),Pg(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},ih=function(t,e,n,s){if(!sh(n))throw new Error(ho(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},f0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ih(t,e,n)},rh=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},d0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!u0(n))throw new Error(ho(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!xo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function oh(t,e,n){Wo(t,n),lh(t,s=>xo(s,e))}function ct(t,e,n){Wo(t,n),lh(t,s=>ze(s,e)||ze(e,s))}function lh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(_0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&Ee("event: "+n.toString()),Sn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="repo_interrupt",m0=25;class x0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new p0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new Fo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function y0(t,e,n){if(t.stats_=go(t.repoInfo_),t.forceRestClient_||eg())t.server_=new si(t.repoInfo_,(s,i,r,o)=>{_c(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>gc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pt(t.repoInfo_,e,(s,i,r,o)=>{_c(t,s,i,r,o)},s=>{gc(t,s)},s=>{b0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=rg(t.repoInfo_,()=>new sm(t.stats_,t.server_)),t.infoData_=new Xg,t.infoSyncTree_=new dc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Es(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Uo(t,"connected",!1),t.serverSyncTree_=new dc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ct(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function v0(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ho(t){return t0({timestamp:v0(t)})}function _c(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Qs(n,a=>xe(a));o=Ym(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=qu(t.serverSyncTree_,r,c,i)}else if(s){const c=Qs(n,a=>xe(a));o=Km(t.serverSyncTree_,r,c)}else{const c=xe(n);o=Es(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Vi(t,r)),ct(t.eventQueue_,l,o)}function gc(t,e){Uo(t,"connected",e),e===!1&&I0(t)}function b0(t,e){Me(e,(n,s)=>{Uo(t,n,s)})}function Uo(t,e,n){const s=new ee("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Es(t.infoSyncTree_,s,i);ct(t.eventQueue_,s,r)}function ch(t){return t.nextWriteId_++}function C0(t,e,n){const s=Qm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Vr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Es(t.serverSyncTree_,e._path,r);else{const l=ps(t.serverSyncTree_,e);o=qu(t.serverSyncTree_,e._path,r,l)}return ct(t.eventQueue_,e._path,o),fi(t.serverSyncTree_,e,n,null,!0),r},i=>(Ui(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function E0(t,e,n,s,i){Ui(t,"set",{path:e.toString(),value:n,priority:s});const r=Ho(t),o=xe(n,s),l=Ro(t.serverSyncTree_,e),c=Xu(o,l,r),a=ch(t),u=zu(t.serverSyncTree_,e,c,a,!0);Wo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,y)=>{const E=g==="ok";E||ke("set at "+e+" failed: "+g);const D=zt(t.serverSyncTree_,a,!E);ct(t.eventQueue_,e,D),T0(t,i,g,y)});const f=dh(t,e);Vi(t,f),ct(t.eventQueue_,f,[])}function I0(t){Ui(t,"onDisconnectEvents");const e=Ho(t),n=ii();Lr(t.onDisconnect_,Q(),(i,r)=>{const o=i0(i,r,t.serverSyncTree_,e);Pu(n,i,o)});let s=[];Lr(n,Q(),(i,r)=>{s=s.concat(Es(t.serverSyncTree_,i,r));const o=dh(t,i);Vi(t,o)}),t.onDisconnect_=ii(),ct(t.eventQueue_,Q(),s)}function w0(t,e,n){let s;j(e._path)===".info"?s=Vr(t.infoSyncTree_,e,n):s=Vr(t.serverSyncTree_,e,n),oh(t.eventQueue_,e._path,s)}function mc(t,e,n){let s;j(e._path)===".info"?s=fi(t.infoSyncTree_,e,n):s=fi(t.serverSyncTree_,e,n),oh(t.eventQueue_,e._path,s)}function S0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(g0)}function Ui(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function T0(t,e,n,s){e&&Sn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ah(t,e,n){return Ro(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Vo(t,e=t.transactionQueueTree_){if(e||ji(t,e),Tn(e)){const n=hh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&N0(t,ws(e),n)}else eh(e)&&Hi(e,n=>{Vo(t,n)})}function N0(t,e,n){const s=n.map(a=>a.currentWriteId),i=ah(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ne(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ui(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(zt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();ji(t,Lo(t.transactionQueueTree_,e)),Vo(t,t.transactionQueueTree_),ct(t.eventQueue_,e,u);for(let g=0;g<f.length;g++)Sn(f[g])}else{if(a==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ke("transaction at "+c.toString()+" failed: "+a);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=a}Vi(t,e)}},o)}function Vi(t,e){const n=uh(t,e),s=ws(n),i=hh(t,n);return R0(t,i,s),s}function R0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Ne(n,c.path);let u=!1,f;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,f=c.abortReason,i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=m0)u=!0,f="maxretry",i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=ah(t,c.path,o);c.currentInputSnapshot=g;const y=e[l].update(g.val());if(y!==void 0){Bo("transaction failed: Data returned ",y,c.path);let E=xe(y);typeof y=="object"&&y!=null&&xt(y,".priority")||(E=E.updatePriority(g.getPriority()));const V=c.currentWriteId,d=Ho(t),h=Xu(E,g,d);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=h,c.currentWriteId=ch(t),o.splice(o.indexOf(V),1),i=i.concat(zu(t.serverSyncTree_,c.path,h,c.currentWriteId,c.applyLocally)),i=i.concat(zt(t.serverSyncTree_,V,!0))}else u=!0,f="nodata",i=i.concat(zt(t.serverSyncTree_,c.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}ji(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Sn(s[l]);Vo(t,t.transactionQueueTree_)}function uh(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&Tn(s)===void 0;)s=Lo(s,n),e=re(e),n=j(e);return s}function hh(t,e){const n=[];return fh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function fh(t,e,n){const s=Tn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Hi(e,i=>{fh(t,i,n)})}function ji(t,e){const n=Tn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Zu(e,n.length>0?n:void 0)}Hi(e,s=>{ji(t,s)})}function dh(t,e){const n=ws(uh(t,e)),s=Lo(t.transactionQueueTree_,e);return o0(s,i=>{pr(t,i)}),pr(t,s),th(s,i=>{pr(t,i)}),n}function pr(t,e){const n=Tn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zu(e,void 0):n.length=r+1,ct(t.eventQueue_,ws(e),i);for(let o=0;o<s.length;o++)Sn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function P0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const xc=function(t,e){const n=D0(t),s=n.namespace;n.domain==="firebase.com"&&gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||G_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},D0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=A0(t.substring(u,f)));const g=P0(t.substring(Math.min(t.length,f)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const y=e.slice(0,a);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class k0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:bu(this._path)}get ref(){return new yt(this._repo,this._path)}get _queryIdentifier(){const e=nc(this._queryParams),n=po(e);return n==="{}"?"default":n}get _queryObject(){return nc(this._queryParams)}isEqual(e){if(e=In(e),!(e instanceof jo))return!1;const n=this._repo===e._repo,s=xo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ng(this._path)}}class yt extends jo{constructor(e,n){super(e,n,new Co,!1)}get parent(){const e=Eu(this._path);return e===null?null:new yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=$r(this.ref,e);return new _s(this._node.getChild(n),s,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,$r(this.ref,s),ae)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ks(t,e){return t=In(t),t._checkNotDeleted("ref"),e!==void 0?$r(t._root,e):t._root}function $r(t,e){return t=In(t),j(t._path)===null?f0("child","path",e):ih("child","path",e),new yt(t._repo,_e(t._path,e))}function M0(t){return rh("remove",t._path),_h(t,null)}function _h(t,e){t=In(t),rh("set",t._path),h0("set",e,t._path);const n=new Oi;return E0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function F0(t){t=In(t);const e=new ph(()=>{}),n=new $i(e);return C0(t._repo,t,n).then(s=>new _s(s,new yt(t._repo,t._path),t._queryParams.getIndex()))}class $i{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new O0("value",this,new _s(e.snapshotNode,new yt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new k0(this,e,n):null}matches(e){return e instanceof $i?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function L0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,f)=>{mc(t._repo,t,l),c(u,f)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new ph(n,r||void 0),l=new $i(o);return w0(t._repo,t,l),()=>mc(t._repo,t,l)}function B0(t,e,n,s){return L0(t,"value",e,n,s)}Bm(yt);jm(yt);/**
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
 */const W0="FIREBASE_DATABASE_EMULATOR_HOST",Gr={};let H0=!1;function U0(t,e,n,s){t.repoInfo_=new fu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function V0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xc(r,i),l=o.repoInfo,c;typeof process<"u"&&Bl&&(c=Bl[W0]),c?(r=`http://${c}?ns=${l.namespace}`,o=xc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new ng(t.name,t.options,e);d0("Invalid Firebase Database URL",o),K(o.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=$0(l,t,a,new tg(t,n));return new G0(u,t)}function j0(t,e){const n=Gr[e];(!n||n[t.key]!==t)&&gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),S0(t),delete n[t.key]}function $0(t,e,n,s){let i=Gr[e.name];i||(i={},Gr[e.name]=i);let r=i[t.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new x0(t,H0,n,s),i[t.toURLString()]=r,r}class G0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(y0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(j0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function K0(t=S_(),e){const n=b_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=up("database");s&&z0(n,...s)}return n}function z0(t,e,n,s={}){t=In(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Js(s,r.repoInfo_.emulatorOptions))return;gt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ws(Ws.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:hp(s.mockUserToken,t.app.options.projectId);o=new Ws(l)}U0(r,i,s,o)}/**
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
 */function q0(t){W_(w_),Zs(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return V0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),pn(Wl,Hl,t),pn(Wl,Hl,"esm2017")}pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};q0();const Bn=pi;(function(t,e){const n=pi,s=t();for(;;)try{if(-parseInt(n(432))/1*(parseInt(n(434))/2)+-parseInt(n(441))/3*(parseInt(n(437))/4)+parseInt(n(438))/5+-parseInt(n(443))/6+parseInt(n(433))/7+-parseInt(n(435))/8*(parseInt(n(442))/9)+-parseInt(n(446))/10*(-parseInt(n(431))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(di,542023);function di(){const t=["108yZRGvz","5088294mOxTYg","720775593565","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","10utWHRZ","21401589NfNnpq","5101DMQyVf","6338794OtwVUV","226HMHNmB","486696zZnVIy","1:720775593565:web:1a263bf6a87ecfea3817b4","4XlGlwd","2687300VgPgkQ","iamwait.firebasestorage.app","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","2076216aDySlM"];return di=function(){return t},di()}const Y0={apiKey:Bn(440),authDomain:"iamwait.firebaseapp.com",databaseURL:Bn(445),projectId:"iamwait",storageBucket:Bn(439),messagingSenderId:Bn(444),appId:Bn(436),measurementId:"G-3RRDNZ9ME5"},Q0=qa(Y0),Ms=K0(Q0);function pi(t,e){const n=di();return pi=function(s,i){return s=s-431,n[s]},pi(t,e)}const wt=gi;(function(t,e){const n=gi,s=t();for(;;)try{if(-parseInt(n(266))/1+parseInt(n(248))/2+parseInt(n(270))/3*(parseInt(n(282))/4)+parseInt(n(249))/5+parseInt(n(269))/6*(-parseInt(n(274))/7)+parseInt(n(246))/8+parseInt(n(253))/9*(parseInt(n(279))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(_i,668349);function _i(){const t=["val","28170TgacDJ"," : данные не найдены","fbStore2","Ошибка записи данных: "," удалены!","%c ","MPJAJ","########### ########## Данные "," = "," на прослушке","GzjIp",">>> Данные по ","zwdtq","375532OUBvWB","rYnBR","eAyVx","38970lqgbcH","42XpvtEh","EMGMT","error","lookField","917flcBGA","log","color: darkgreen","SfbJN","bqhgA","450cRxPYh","VyViL","stringify","15956yXBrip","then","4794240PQIkcT","poZBc","1580124NPrwku","1543440eIPEyx","MJypC","Данные "];return _i=function(){return t},_i()}const gh=Xd(wt(255),{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:4}),actions:{async getField(t){const e=wt,n={SfbJN:function(i,r){return i(r)},poZBc:function(i,r){return i+r},MJypC:e(254)},s=ks(Ms,t);return n.SfbJN(F0,s)[e(245)](i=>{const r=e;if(i.exists()){const o=i[r(252)]();return n[r(277)](Wn,r(264)+t+r(261)+JSON[r(281)](o)),o}else n[r(277)](Wn,n[r(247)](t,n[r(250)]))})},async setField(t,e){const n=wt,s={rYnBR:function(r,o){return r(o)},VyViL:" -  данные записаны",EMGMT:n(256),MPJAJ:function(r,o,l){return r(o,l)}},i=s[n(259)](ks,Ms,t);return s[n(259)](_h,i,e)[n(245)](()=>{const r=n;s[r(267)](Wn,t+s[r(280)])}).catch(r=>{const o=n;console[o(272)](s[o(271)],r)})},async onValue(t){const e=wt,n={eAyVx:function(i,r){return i(r)},zwdtq:function(i,r,o){return i(r,o)}},s=ks(Ms,t);n[e(265)](B0,s,i=>{const r=e;n[r(268)](Wn,r(260)+t+r(262)),this[r(273)]=i[r(252)]()})},async removeField(t){const e=wt,n={GzjIp:function(i,r){return i(r)},bqhgA:function(i,r,o){return i(r,o)}};console[e(275)](t);const s=n[e(278)](ks,Ms,t);n[e(263)](M0,s)[e(245)](()=>{const i=e;n[i(263)](Wn,i(251)+t+i(257))})}}});function gi(t,e){const n=_i();return gi=function(s,i){return s=s-245,n[s]},gi(t,e)}const Wn=t=>console[wt(275)](wt(258)+t,wt(276)),gs=Cn;(function(t,e){const n=Cn,s=t();for(;;)try{if(parseInt(n(273))/1+parseInt(n(246))/2*(-parseInt(n(251))/3)+parseInt(n(314))/4*(parseInt(n(237))/5)+parseInt(n(274))/6+parseInt(n(222))/7*(parseInt(n(340))/8)+-parseInt(n(263))/9*(parseInt(n(262))/10)+-parseInt(n(272))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(mi,439154);const J0={key:0},X0={key:0},Z0=[gs(238)],ex={key:1},tx={key:0},nx=[gs(238)],sx={key:1,class:gs(288)},ix={key:2},rx={key:3},ox={key:4};function mi(){const t=["lookField","QExMb","* нельзя выбирать себя","Wvgrh","res","trrnf","now","VnMLu","YIPML","gNMbl"," ! ","Сменить nickName","setItem","rgDAU","fcBIC","24GgTefo","forEach","cvKUQ","FmFnC"," Вас выбрал игрок: ","aHXhr","111","VDDWO","then","Kjhiz","myId","LuQAP","ZXtXq","vICZY","length","hwkNV","PKKjJ","oHgnt","RLtOH","LMcNA","wFRkL","QsDlZ","gGYVh","onValue","ZrORL","ZVUST","xulOf"," stage:","bKzpW","/play/","bXrjM","button","removeField"," Зарегистрироваться в поиске ","GUfqt","id2","vPGcl","dnmvw","yLkTQ","wGfNo","yozJo","fBHId","FmmEk","edNAv","BkKNI","getField","oYYWn","qdzmn","837158OzncPR","Zofvb","GoSqP","vDbJD","BinderComp","accept","dKeok","jNjBV","oMswx","g1/look/","iQtie","log","ymFsj","red-bt","WBaxp","236695fLYLEt","onClick","dXzMR","stage","green-bt","getItem","Kxfod","LJywn","value","153724ZOqkaf","BGvpF","nickName","RJbLK","hXIoW","9EYFUIA","Csqqj","mwVHC","name","Xekuq"," Контекс игры:","YlZpn","WdEzv","> >> > >> gotoStartgane","g1/play/","NZIRw","411540oLWNcf","108dywMMv","setField","* тут можно поменять ваш Никнейм","BlRii","OOnPS","Список желающих играть:","myNickName","EAGwx","rlDey","4461600KVmfTR","164547IezWhj","1446576qyDsFF","unIiK","Bgfjr","ZrLGe","TNsck","ltrvp","larger","reload","FzBDU","Ppsaw","stringify","hRorw","SopKe","szdJP","red-notice","hQYzQ","OIIFh","Отказаться","HMMVB","div","fHvRx","teSeX","Играем","::::","................ОБНОВИЛСЯ А Я ПРОПАЛ","Согласиться","Opponent"," Привет, ","gZXnt","Добавился в список, жду","center","zuhMC","SHmZo","CeXWT","nymOd","myName","meoqX"," Жду игрока ","keys","eTckS","68PnLXCB","game","zNzjG","parse","g1/game/","ruttq","PQQcA","mhiIL","hIhtV"," : ","NvDJZ"];return mi=function(){return t},mi()}function Cn(t,e){const n=mi();return Cn=function(s,i){return s=s-184,n[s]},Cn(t,e)}const lx=_f({__name:gs(226),props:{game:{}},setup(t){const e=gs,n={Ppsaw:e(269),BGvpF:function(d){return d()},QsDlZ:function(d,h){return d+h},VDDWO:e(297),NZIRw:function(d,h){return d+h},szdJP:e(203),ZrORL:function(d,h){return d>h},BkKNI:function(d,h){return d===h},PQQcA:function(d,h){return d(h)},QExMb:function(d,h){return d==h},meoqX:e(298),FmmEk:function(d){return d()},rlDey:function(d){return d()},Csqqj:"ANALIZ ",zuhMC:e(346),vDbJD:function(d,h){return d(h)},wGfNo:"g1/look",vPGcl:function(d,h,p){return d(h,p)},iQtie:e(231),CeXWT:"res",HMMVB:function(d,h){return d==h},OIIFh:function(d,h){return d+h},YlZpn:"Opponent",trrnf:function(d,h){return d+h},LMcNA:function(d,h){return d+h},gGYVh:"gameLink",mwVHC:e(259),yozJo:e(260),aHXhr:function(d,h){return d+h},Ekcnv:e(318),qdzmn:"ВСЕ НАСТРОЙКИ ИГРЫ",yLkTQ:function(d,h,p){return d(h,p)},GUfqt:function(d){return d()},NvDJZ:function(d,h,p,x,C,de){return d(h,p,x,C,de)},Xekuq:"button",hIhtV:e(241),LJywn:function(d,h){return d(h)},RLtOH:function(d){return d()},hwkNV:function(d,h,p,x,C){return d(h,p,x,C)},TNsck:"::::::: Связывание :::::::",zNzjG:function(d,h,p){return d(h,p)},FzBDU:function(d,h){return d+h},ltrvp:function(d,h){return d(h)},RJbLK:e(323),kovWJ:function(d,h){return d(h)},WRlwV:function(d,h,p){return d(h,p)},bXrjM:function(d,h){return d+h},YIPML:e(201),rgDAU:function(d,h){return d===h},SopKe:function(d){return d()},WdEzv:function(d,h,p,x){return d(h,p,x)},GoSqP:e(293),qgslo:function(d,h,p,x,C){return d(h,p,x,C)},LuQAP:function(d,h){return d+h},Kjhiz:function(d,h){return d+h},jNjBV:e(301),BlRii:function(d,h){return d(h)},KhZZL:e(335),FmFnC:function(d,h,p,x){return d(h,p,x)},dKeok:function(d,h,p){return d(h,p)},EAGwx:function(d,h,p,x,C){return d(h,p,x,C)},dXzMR:"input",Bgfjr:e(280),aKZuV:"4px",YeAKn:e(304),SHmZo:e(336),ymFsj:e(265),hXIoW:function(d,h){return d>h},Zofvb:function(d){return d()},edNAv:e(268),fHvRx:function(d,h){return d(h)},XmWUf:function(d,h,p,x,C){return d(h,p,x,C)},gNMbl:function(d,h,p,x,C){return d(h,p,x,C)},oHgnt:e(235),aKwHc:e(207),ttFKq:function(d,h,p,x,C){return d(h,p,x,C)},YTBuk:function(d,h,p,x,C){return d(h,p,x,C)},qIRLF:function(d,h,p,x){return d(h,p,x)},ruttq:function(d,h,p,x,C){return d(h,p,x,C)},dnmvw:e(303),PKKjJ:function(d,h,p,x,C){return d(h,p,x,C)},unIiK:function(d,h,p,x,C){return d(h,p,x,C)},cvKUQ:function(d,h,p,x){return d(h,p,x)},ZXtXq:function(d,h,p){return d(h,p)},fcBIC:function(d,h){return d===h},Wvgrh:function(d,h){return d(h)},bKzpW:function(d,h,p,x){return d(h,p,x)},cBgrp:e(311),hRorw:function(d,h,p,x,C){return d(h,p,x,C)},eTckS:function(d,h){return d(h)},WBaxp:function(d,h,p,x,C){return d(h,p,x,C)},oYYWn:function(d,h,p,x,C){return d(h,p,x,C)},fBHId:e(291),ssjNV:function(d,h,p,x){return d(h,p,x)},ZrLGe:e(299),VnMLu:function(d,h){return d(h)},Kxfod:function(d,h,p,x){return d(h,p,x)},AWGpY:e(296),gZXnt:" с игроком ",mhiIL:function(d,h,p,x,C){return d(h,p,x,C)},nymOd:e(256),kInSv:function(d,h,p,x,C){return d(h,p,x,C)},wFRkL:function(d,h,p,x,C){return d(h,p,x,C)},OOnPS:function(d,h,p,x,C){return d(h,p,x,C)},xulOf:function(d,h,p,x,C){return d(h,p,x,C)},oMswx:function(d,h){return d(h)},EDhZx:function(d,h){return d(h)},teSeX:function(d,h,p){return d(h,p)}},s=n[e(192)](gh),i=n[e(230)](Gt,localStorage.getItem(e(269))),r=n[e(266)](Gt,[]),o=n[e(271)](Gt),l=n[e(247)](Gt),c=n.EDhZx(Gt,""),a=function(){const d=e;s[d(248)]=i[d(245)],i.value&&localStorage[d(337)](n[d(283)],i.value)};function u(){const d=e;console.log("game = ",t.game),s[d(219)](n.QsDlZ(n[d(261)](t.game,n[d(287)]),s[d(184)])).then(h=>{const p=d;h?(o.value={id:h.id,name:n.QsDlZ(h[p(254)]+n[p(347)],h.id)},s[p(240)]=5,s[p(219)](n[p(195)](t[p(315)]+"/game/",h[p(315)])).then(x=>{c.value=x})):(n.BGvpF(g),s[p(240)]=1)})}const f=function(d){const h=e;console[h(233)](n[h(252)],d),r[h(245)]=[],s[h(240)]=1;let p=!1;d&&Object[h(312)](d)[h(341)](x=>{const C=h;if(n.ZrORL(s[C(240)],3))return!1;if(n[C(218)](x,n.PQQcA(String,s.myId))&&x&&(p=!0,s.stage=2,d[x][C(209)])){s.stage=4;let de=localStorage[C(242)](C(300));de&&(o[C(245)]=JSON[C(317)](de))}n[C(326)](d[x][C(209)],s[C(184)])&&(p=!0,s[C(240)]=3),n[C(198)](s.stage,2)&&!p&&(console[C(233)](n[C(310)]),n[C(216)](alert),location[C(281)]()),d[x][C(227)]&&n[C(271)](V),x&&d[x]&&r[C(245)].push({id:x,name:d[x][C(254)]})})};n[e(295)](dn,()=>s[e(184)],d=>d&&setTimeout(u,500));function g(){const d=e;s[d(197)](n[d(213)])[d(348)](h=>{const p=d;console.log(n[p(305)],h),n[p(225)](f,h)}),n[d(210)](dn,()=>s[d(325)],h=>f(h))}function y(){const d=e;s[d(264)](n.QsDlZ(n[d(232)],s.myId),{name:s[d(248)]||s[d(309)]})}function E(d){const h=e;if(n[h(292)](d.id,s[h(184)]))return l[h(245)]=!0,n[h(210)](setTimeout,()=>l.value=!1,1500),!1;s[h(264)](n[h(290)](n[h(232)],d.id),{name:d[h(254)],id2:s[h(184)],name2:s.nickName||s[h(309)]})[h(348)](p=>{const x=h;console.log(n[x(307)],p),o[x(245)]={id:d.id,name:d[x(254)]},s[x(240)]=3})}function D(d){const h=e;d&&o[h(245)]&&s[h(264)](n[h(290)](n[h(232)],o.value.id),{name:o[h(245)][h(254)],id2:s.myId,name2:s[h(309)],accept:!0}).then(p=>{const x=h;let C={id:o[x(245)].id,name:o.value[x(254)]};localStorage[x(337)](n[x(257)],JSON[x(284)](C)),console[x(233)](x(329),p)}),!d&&o.value&&s[h(264)](n[h(290)](n[h(232)],o[h(245)].id),{name:o[h(245)][h(254)]})[h(348)](()=>{s.stage=2})}function V(){var C,de,G;const d=e,h={vICZY:function(O,U){return n[Cn(330)](O,U)},MXNKp:"g1/look/"};let p=Date[d(331)](),x=n[d(225)](String,o[d(245)].id);o[d(245)].id>s[d(184)]?x+=n[d(261)]("::",s[d(184)]):x=n[d(290)](n[d(193)](s[d(184)],"::"),x),console[d(233)](n[d(196)],x),console[d(233)](n[d(253)]),s[d(264)](n[d(214)]+s[d(184)],{id:(C=o[d(245)])==null?void 0:C.id,name:(de=o[d(245)])==null?void 0:de[d(254)],game:x,date:p}),s[d(264)](d(260)+((G=o[d(245)])==null?void 0:G.id),{id:s[d(184)],name:s[d(309)],game:x,date:p}),s.setField(n[d(345)](n.Ekcnv,x),{game:n[d(221)]}),n[d(212)](setTimeout,()=>{var U;const O=d;s.removeField(h[O(187)](h.MXNKp,(U=o[O(245)])==null?void 0:U.id)),s[O(206)](O(231)+s[O(184)]),location[O(281)]()},2e3)}return(d,h)=>{var C,de;const p=e,x={hQYzQ:function(G,O,U,le,Re,He){return G(O,U,le,Re,He)},ZVUST:function(G,O){return n[Cn(320)](G,O)}};return n[p(192)](ve),Pe(Ve,null,[h[34]||(h[34]=B("hr",null,null,-1)),h[35]||(h[35]=n.hwkNV(B,"i",null,n[p(278)],-1)),h[36]||(h[36]=B("br",null,null,-1)),n[p(316)](nt,n[p(195)](n[p(282)](" ",n.PQQcA(Ge,n[p(279)](Ue,s)[p(184)]))+n[p(249)],n[p(244)](Ge,n.kovWJ(Ue,s)[p(309)]))+" ",1),h[37]||(h[37]=n[p(189)](B,"br",null,null,-1)),n.WRlwV(nt,n.LMcNA(n[p(204)](n[p(333)],n.kovWJ(Ge,Ue(s)[p(240)]))," "),1),h[38]||(h[38]=n[p(189)](B,"hr",null,null,-1)),n[p(338)](n[p(244)](Ue,s)[p(240)],1)?(n[p(286)](ve),n[p(258)](Pe,n[p(224)],J0,[n.qgslo(B,"p",null,n[p(185)](n[p(349)](n[p(229)],n.PQQcA(Ge,n[p(279)](Ue,s)[p(248)]||n[p(266)](Ue,s)[p(309)])),n.KhZZL),1),n[p(343)](B,"p",null,[n[p(228)](ff,n.EAGwx(B,n[p(239)],{"onUpdate:modelValue":h[0]||(h[0]=G=>i[p(245)]=G),maxlength:"16",style:{"font-size":n[p(276)],padding:n.aKZuV,"text-align":n.YeAKn},onInput:h[1]||(h[1]=G=>a()),placeholder:n[p(306)]},null,544),[[Hd,i[p(245)]]])]),h[8]||(h[8]=n[p(270)](B,n.GoSqP,{class:p(288)},n[p(234)],-1)),r.value&&n[p(250)](r.value.length,1)?(n[p(223)](ve),Pe(n[p(224)],X0,[h[5]||(h[5]=n[p(270)](B,"h3",null,n[p(217)],-1)),(n[p(294)](ve,!0),Pe(Ve,null,n[p(316)](Zo,r[p(245)],G=>{const O=p;return n[O(208)](ve),n[O(324)](Pe,n[O(255)],{class:n[O(322)],key:G.id,onClick:U=>E(G)},n.LJywn(Ge,G[O(254)]),9,Z0)}),128)),h[6]||(h[6]=n.XmWUf(B,"br",null,null,-1)),h[7]||(h[7]=n[p(334)](B,"br",null,null,-1))])):n.yLkTQ(bt,"",!0),n[p(343)](B,n[p(255)],{class:n[p(191)],onClick:h[2]||(h[2]=G=>y())},n.aKwHc),h[9]||(h[9]=n.ttFKq(B,"br",null,null,-1)),h[10]||(h[10]=n.YTBuk(B,"br",null,null,-1))])):n[p(210)](bt,"",!0),Ue(s)[p(240)]===2?(ve(),n.qIRLF(Pe,n.GoSqP,ex,[h[14]||(h[14]=n[p(319)](B,"p",null,n[p(211)],-1)),r[p(245)][p(188)]?(n.SopKe(ve),Pe("div",tx,[h[11]||(h[11]=B("h3",null,n[p(217)],-1)),(ve(!0),n[p(190)](Pe,Ve,null,n[p(210)](Zo,r[p(245)],G=>{const O=p;return ve(),x[O(289)](Pe,O(205),{class:O(241),key:G.id,onClick:U=>E(G)},x[O(199)](Ge,G[O(254)]),9,nx)}),128)),h[12]||(h[12]=n[p(275)](B,"br",null,null,-1)),h[13]||(h[13]=n[p(334)](B,"br",null,null,-1))])):bt("",!0),l[p(245)]?(n[p(192)](ve),n.cvKUQ(Pe,n[p(224)],sx,p(327))):n[p(186)](bt,"",!0)])):bt("",!0),n[p(339)](n[p(328)](Ue,s)[p(240)],3)?(ve(),n[p(202)](Pe,n[p(224)],ix,[B("p",null,[h[15]||(h[15]=n[p(294)](nt,n.cBgrp)),h[16]||(h[16]=B("br",null,null,-1)),B("b",null,Ge((C=o[p(245)])==null?void 0:C.name),1),h[17]||(h[17]=nt(", ")),h[18]||(h[18]=n[p(285)](B,"br",null,null,-1)),h[19]||(h[19]=n[p(313)](nt,"пока не откликнится "))])])):n[p(228)](bt,"",!0),n[p(218)](Ue(s)[p(240)],4)&&((de=o.value)!=null&&de.id)?(ve(),Pe(n[p(224)],rx,[h[20]||(h[20]=nt(p(344))),h[21]||(h[21]=n[p(236)](B,"br",null,null,-1)),h[22]||(h[22]=n[p(285)](B,"br",null,null,-1)),B("b",null,Ge(o[p(245)][p(254)]),1),h[23]||(h[23]=n[p(334)](B,"br",null,null,-1)),h[24]||(h[24]=n[p(220)](B,"br",null,null,-1)),n[p(342)](B,n[p(255)],{class:n[p(322)],onClick:h[3]||(h[3]=G=>D(!1))},n[p(215)]),n.ssjNV(B,p(205),{class:n[p(322)],onClick:h[4]||(h[4]=G=>D(!0))},n[p(277)])])):n[p(212)](bt,"",!0),n[p(332)](Ue,s)[p(240)]===5&&o[p(245)]?(ve(),n[p(243)](Pe,n.GoSqP,ox,[h[25]||(h[25]=B("h3",null,n.AWGpY,-1)),h[26]||(h[26]=n[p(266)](nt,n[p(302)])),h[27]||(h[27]=n.EAGwx(B,"br",null,null,-1)),B("b",null,Ge(o[p(245)][p(254)]),1),h[28]||(h[28]=n[p(321)](B,"br",null,null,-1)),h[29]||(h[29]=n.unIiK(B,"br",null,null,-1)),h[30]||(h[30]=n.PQQcA(nt,n[p(308)])),h[31]||(h[31]=n.kInSv(B,"br",null,null,-1)),n[p(210)](nt,n[p(193)](" ",n[p(279)](Ge,c[p(245)]))+" ",1),h[32]||(h[32]=n[p(194)](B,"br",null,null,-1)),h[33]||(h[33]=n[p(267)](B,"br",null,null,-1))])):n[p(228)](bt,"",!0),h[39]||(h[39]=n[p(200)](B,"br",null,null,-1)),h[40]||(h[40]=B("br",null,null,-1))],64)}}}),cx={class:"game"},ax={__name:"RockPaperSScissors",setup(t){return(e,n)=>(ve(),Pe("div",cx,[n[0]||(n[0]=B("h1",null,"♕",-1)),n[1]||(n[1]=B("h2",null,null,-1)),B("div",null,[ot(lx,{game:"g1"})])]))}},ux=Zd(ax,[["__scopeId","data-v-7afa5ccc"]]),hx={__name:"App",setup(t){const e=gh();let n=Jh(ux);return sa(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||0,e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),e.myId=953446309,e.myId=261538035},500))}),(s,i)=>(ve(),wa(Nf(Ue(n))))}},fx=xi;(function(t,e){const n=xi,s=t();for(;;)try{if(parseInt(n(455))/1+-parseInt(n(458))/2*(parseInt(n(454))/3)+-parseInt(n(447))/4+parseInt(n(449))/5*(parseInt(n(452))/6)+-parseInt(n(457))/7*(-parseInt(n(448))/8)+-parseInt(n(456))/9*(parseInt(n(453))/10)+parseInt(n(450))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,787837);function xi(t,e){const n=yi();return xi=function(s,i){return s=s-447,n[s]},xi(t,e)}function yi(){const t=["13548440qCHLbA","3190851QasCCu","11833IZonqa","9NVFmWj","1389766MnWuAh","2PpBOVB","2036472kBGzRj","8gdSQQe","2005JizGPA","29305628xpwbaM","use","12582SJwatW"];return yi=function(){return t},yi()}const dx=Kd(),yc=jd(hx);yc[fx(451)](dx),yc.mount("#app");
