function Ws(t,e){const n=Bs();return Ws=function(s,i){return s=s-280,n[s]},Ws(t,e)}(function(t,e){const n=Ws,s=t();for(;;)try{if(-parseInt(n(309))/1+parseInt(n(306))/2*(-parseInt(n(304))/3)+-parseInt(n(323))/4*(-parseInt(n(282))/5)+-parseInt(n(285))/6+parseInt(n(292))/7*(-parseInt(n(302))/8)+-parseInt(n(287))/9*(parseInt(n(315))/10)+parseInt(n(288))/11*(parseInt(n(301))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Bs,517855),function(){const e=Ws,n={vMRSu:function(o,l){return o!==l},wWEPC:"childList",bRTIo:function(o,l){return o===l},hZSlF:e(290),WAvOs:"modulepreload",cmQTh:function(o,l){return o(l)},WwEzn:function(o,l){return o===l},uwrcv:e(280),RnZCs:e(305),PWSHR:e(281),dVrNN:function(o,l){return o(l)},Totpq:function(o,l,c){return o(l,c)},lqSLX:e(299),sfjvR:function(o,l){return o(l)}},s=document.createElement(n[e(316)])[e(298)];if(s&&s[e(321)]&&s[e(321)](n[e(283)]))return;for(const o of document[e(284)](e(294)))n[e(286)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(!n[l(291)](c[l(307)],n[l(303)]))for(const a of c[l(295)])n[l(311)](a[l(320)],n[l(317)])&&n.bRTIo(a.rel,n[l(283)])&&n[l(312)](r,a)})[e(289)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o[l(310)]&&(c.integrity=o.integrity),o.referrerPolicy&&(c[l(308)]=o.referrerPolicy),o[l(296)]===l(319)?c[l(314)]=l(318):n[l(293)](o[l(296)],n.uwrcv)?c[l(314)]=n[l(322)]:c[l(314)]=n[l(297)],c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(300)](i,o);n.Totpq(fetch,o[l(313)],c)}}();function Bs(){const t=["tagName","supports","RnZCs","92yBIqdu","anonymous","same-origin","92530rNsjhI","WAvOs","querySelectorAll","80550drayrp","sfjvR","60687egSDjY","869xklSCz","observe","LINK","vMRSu","77grXQvW","WwEzn",'link[rel="modulepreload"]',"addedNodes","crossOrigin","PWSHR","relList","link","dVrNN","235332xBxPXb","250256QFCCJd","wWEPC","2594739YveWnu","omit","2LoFJKQ","type","referrerPolicy","39065jzSnCt","integrity","bRTIo","cmQTh","href","credentials","290NMuCsg","lqSLX","hZSlF","include","use-credentials"];return Bs=function(){return t},Bs()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},fn=[],rt=()=>{},yh=()=>!1,vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vh=Object.prototype.hasOwnProperty,J=(t,e)=>vh.call(t,e),B=Array.isArray,dn=t=>bi(t)==="[object Map]",bc=t=>bi(t)==="[object Set]",U=t=>typeof t=="function",de=t=>typeof t=="string",kt=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Cc=t=>(ae(t)||U(t))&&U(t.then)&&U(t.catch),Ec=Object.prototype.toString,bi=t=>Ec.call(t),bh=t=>bi(t).slice(8,-1),Ic=t=>bi(t)==="[object Object]",Yr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bn=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ci=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ch=/-(\w)/g,$e=Ci(t=>t.replace(Ch,(e,n)=>n?n.toUpperCase():"")),Eh=/\B([A-Z])/g,nn=Ci(t=>t.replace(Eh,"-$1").toLowerCase()),Ei=Ci(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ki=Ci(t=>t?`on${Ei(t)}`:""),wt=(t,e)=>!Object.is(t,e),ks=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},_r=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yo;const Ii=()=>Yo||(Yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?Th(s):Qr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(de(t)||ae(t))return t}const Ih=/;(?![^(]*\))/g,wh=/:([^]+)/,Sh=/\/\*[^]*?\*\//g;function Th(t){const e={};return t.replace(Sh,"").split(Ih).forEach(n=>{if(n){const s=n.split(wh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(de(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=Kr(Nh);function Sc(t){return!!t||t===""}const Tc=t=>!!(t&&t.__v_isRef===!0),Ge=t=>de(t)?t:t==null?"":B(t)||ae(t)&&(t.toString===Ec||!U(t.toString))?Tc(t)?Ge(t.value):JSON.stringify(t,Nc,2):String(t),Nc=(t,e)=>Tc(e)?Nc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[zi(s,r)+" =>"]=i,n),{})}:bc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>zi(n))}:kt(e)?zi(e):ae(e)&&!B(e)&&!Ic(e)?String(e):e,zi=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Rc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ac(t){return new Rc(t)}function Pc(){return Se}function Ah(t,e=!1){Se&&Se.cleanups.push(t)}let re;const qi=new WeakSet;class Oc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qi.has(this)&&(qi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qo(this),Mc(this);const e=re,n=Ye;re=this,Ye=!0;try{return this.fn()}finally{Fc(this),re=e,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eo(e);this.deps=this.depsTail=void 0,Qo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gr(this)&&this.run()}get dirty(){return gr(this)}}let Dc=0,Hn,Un;function kc(t,e=!1){if(t.flags|=8,e){t.next=Un,Un=t;return}t.next=Hn,Hn=t}function Xr(){Dc++}function Zr(){if(--Dc>0)return;if(Un){let e=Un;for(Un=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hn;){let e=Hn;for(Hn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Mc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),eo(s),Ph(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function gr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zn))return;t.globalVersion=Zn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gr(t)){t.flags&=-3;return}const n=re,s=Ye;re=t,Ye=!0;try{Mc(t);const i=t.fn(t._value);(e.version===0||wt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{re=n,Ye=s,Fc(t),t.flags&=-3}}function eo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)eo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ph(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ye=!0;const Wc=[];function Mt(){Wc.push(Ye),Ye=!1}function Ft(){const t=Wc.pop();Ye=t===void 0?!0:t}function Qo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Zn=0;class Oh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class to{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!Ye||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Oh(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,Bc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=s)}return n}trigger(e){this.version++,Zn++,this.notify(e)}notify(e){Xr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zr()}}}function Bc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Bc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hs=new WeakMap,Yt=Symbol(""),mr=Symbol(""),es=Symbol("");function be(t,e,n){if(Ye&&re){let s=Hs.get(t);s||Hs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new to),i.map=s,i.key=n),i.track()}}function ft(t,e,n,s,i,r){const o=Hs.get(t);if(!o){Zn++;return}const l=c=>{c&&c.trigger()};if(Xr(),e==="clear")o.forEach(l);else{const c=B(t),a=c&&Yr(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,g)=>{(g==="length"||g===es||!kt(g)&&g>=u)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(es)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Yt)),dn(t)&&l(o.get(mr)));break;case"delete":c||(l(o.get(Yt)),dn(t)&&l(o.get(mr)));break;case"set":dn(t)&&l(o.get(Yt));break}}Zr()}function Dh(t,e){const n=Hs.get(t);return n&&n.get(e)}function on(t){const e=Y(t);return e===t?e:(be(e,"iterate",es),je(t)?e:e.map(Ce))}function wi(t){return be(t=Y(t),"iterate",es),t}const kh={__proto__:null,[Symbol.iterator](){return Yi(this,Symbol.iterator,Ce)},concat(...t){return on(this).concat(...t.map(e=>B(e)?on(e):e))},entries(){return Yi(this,"entries",t=>(t[1]=Ce(t[1]),t))},every(t,e){return at(this,"every",t,e,void 0,arguments)},filter(t,e){return at(this,"filter",t,e,n=>n.map(Ce),arguments)},find(t,e){return at(this,"find",t,e,Ce,arguments)},findIndex(t,e){return at(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return at(this,"findLast",t,e,Ce,arguments)},findLastIndex(t,e){return at(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return at(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qi(this,"includes",t)},indexOf(...t){return Qi(this,"indexOf",t)},join(t){return on(this).join(t)},lastIndexOf(...t){return Qi(this,"lastIndexOf",t)},map(t,e){return at(this,"map",t,e,void 0,arguments)},pop(){return Pn(this,"pop")},push(...t){return Pn(this,"push",t)},reduce(t,...e){return Jo(this,"reduce",t,e)},reduceRight(t,...e){return Jo(this,"reduceRight",t,e)},shift(){return Pn(this,"shift")},some(t,e){return at(this,"some",t,e,void 0,arguments)},splice(...t){return Pn(this,"splice",t)},toReversed(){return on(this).toReversed()},toSorted(t){return on(this).toSorted(t)},toSpliced(...t){return on(this).toSpliced(...t)},unshift(...t){return Pn(this,"unshift",t)},values(){return Yi(this,"values",Ce)}};function Yi(t,e,n){const s=wi(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Mh=Array.prototype;function at(t,e,n,s,i,r){const o=wi(t),l=o!==t&&!je(t),c=o[e];if(c!==Mh[e]){const p=c.apply(t,r);return l?Ce(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Ce(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function Jo(t,e,n,s){const i=wi(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Ce(l),c,t)}),i[e](r,...s)}function Qi(t,e,n){const s=Y(t);be(s,"iterate",es);const i=s[e](...n);return(i===-1||i===!1)&&io(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function Pn(t,e,n=[]){Mt(),Xr();const s=Y(t)[e].apply(t,n);return Zr(),Ft(),s}const Fh=Kr("__proto__,__v_isRef,__isVue"),Hc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function Lh(t){kt(t)||(t=String(t));const e=Y(this);return be(e,"has",t),e.hasOwnProperty(t)}class Uc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?zh:Gc:r?$c:jc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!i){let c;if(o&&(c=kh[n]))return c;if(n==="hasOwnProperty")return Lh}const l=Reflect.get(e,n,fe(e)?e:s);return(kt(n)?Hc.has(n):Fh(n))||(i||be(e,"get",n),r)?l:fe(l)?o&&Yr(n)?l:l.value:ae(l)?i?Kc(l):Si(l):l}}class Vc extends Uc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Jt(r);if(!je(s)&&!Jt(s)&&(r=Y(r),s=Y(s)),!B(e)&&fe(r)&&!fe(s))return c?!1:(r.value=s,!0)}const o=B(e)&&Yr(n)?Number(n)<e.length:J(e,n),l=Reflect.set(e,n,s,fe(e)?e:i);return e===Y(i)&&(o?wt(s,r)&&ft(e,"set",n,s):ft(e,"add",n,s)),l}deleteProperty(e,n){const s=J(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!kt(n)||!Hc.has(n))&&be(e,"has",n),s}ownKeys(e){return be(e,"iterate",B(e)?"length":Yt),Reflect.ownKeys(e)}}class Wh extends Uc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bh=new Vc,Hh=new Wh,Uh=new Vc(!0);const xr=t=>t,Ts=t=>Reflect.getPrototypeOf(t);function Vh(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=dn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?xr:e?yr:Ce;return!e&&be(r,"iterate",c?mr:Yt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function Ns(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jh(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(wt(i,l)&&be(o,"get",i),be(o,"get",l));const{has:c}=Ts(o),a=e?xr:t?yr:Ce;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&be(Y(i),"iterate",Yt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(wt(i,l)&&be(o,"has",i),be(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Y(l),a=e?xr:t?yr:Ce;return!t&&be(c,"iterate",Yt),l.forEach((u,p)=>i.call(r,a(u),a(p),o))}};return Ie(n,t?{add:Ns("add"),set:Ns("set"),delete:Ns("delete"),clear:Ns("clear")}:{add(i){!e&&!je(i)&&!Jt(i)&&(i=Y(i));const r=Y(this);return Ts(r).has.call(r,i)||(r.add(i),ft(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!Jt(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=Ts(o);let a=l.call(o,i);a||(i=Y(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?wt(r,u)&&ft(o,"set",i,r):ft(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Ts(r);let c=o.call(r,i);c||(i=Y(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&ft(r,"delete",i,void 0),a},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&ft(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Vh(i,t,e)}),n}function no(t,e){const n=jh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const $h={get:no(!1,!1)},Gh={get:no(!1,!0)},Kh={get:no(!0,!1)};const jc=new WeakMap,$c=new WeakMap,Gc=new WeakMap,zh=new WeakMap;function qh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yh(t){return t.__v_skip||!Object.isExtensible(t)?0:qh(bh(t))}function Si(t){return Jt(t)?t:so(t,!1,Bh,$h,jc)}function Qh(t){return so(t,!1,Uh,Gh,$c)}function Kc(t){return so(t,!0,Hh,Kh,Gc)}function so(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Yh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function St(t){return Jt(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function io(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function ro(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&wc(t,"__v_skip",!0),t}const Ce=t=>ae(t)?Si(t):t,yr=t=>ae(t)?Kc(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function Gt(t){return zc(t,!1)}function Jh(t){return zc(t,!0)}function zc(t,e){return fe(t)?t:new Xh(t,e)}class Xh{constructor(e,n){this.dep=new to,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:Ce(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||je(e)||Jt(e);e=s?e:Y(e),wt(e,n)&&(this._rawValue=e,this._value=s?e:Ce(e),this.dep.trigger())}}function Ue(t){return fe(t)?t.value:t}const Zh={get:(t,e,n)=>e==="__v_raw"?t:Ue(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function qc(t){return St(t)?t:new Proxy(t,Zh)}function ef(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=nf(t,n);return e}class tf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Dh(Y(this._object),this._key)}}function nf(t,e,n){const s=t[e];return fe(s)?s:new tf(t,e,n)}class sf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new to(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return kc(this,!0),!0}get value(){const e=this.dep.track();return Lc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rf(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new sf(s,i,n)}const Rs={},Us=new WeakMap;let Vt;function of(t,e=!1,n=Vt){if(n){let s=Us.get(n);s||Us.set(n,s=[]),s.push(t)}}function lf(t,e,n=Z){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=f=>i?f:je(f)||i===!1||i===0?dt(f,1):dt(f);let u,p,g,x,E=!1,P=!1;if(fe(t)?(p=()=>t.value,E=je(t)):St(t)?(p=()=>a(t),E=!0):B(t)?(P=!0,E=t.some(f=>St(f)||je(f)),p=()=>t.map(f=>{if(fe(f))return f.value;if(St(f))return a(f);if(U(f))return c?c(f,2):f()})):U(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Mt();try{g()}finally{Ft()}}const f=Vt;Vt=u;try{return c?c(t,3,[x]):t(x)}finally{Vt=f}}:p=rt,e&&i){const f=p,v=i===!0?1/0:i;p=()=>dt(f(),v)}const V=Pc(),j=()=>{u.stop(),V&&V.active&&qr(V.effects,u)};if(r&&e){const f=e;e=(...v)=>{f(...v),j()}}let d=P?new Array(t.length).fill(Rs):Rs;const h=f=>{if(!(!(u.flags&1)||!u.dirty&&!f))if(e){const v=u.run();if(i||E||(P?v.some((O,te)=>wt(O,d[te])):wt(v,d))){g&&g();const O=Vt;Vt=u;try{const te=[v,d===Rs?void 0:P&&d[0]===Rs?[]:d,x];c?c(e,3,te):e(...te),d=v}finally{Vt=O}}}else u.run()};return l&&l(h),u=new Oc(p),u.scheduler=o?()=>o(h,!1):h,x=f=>of(f,!1,u),g=u.onStop=()=>{const f=Us.get(u);if(f){if(c)c(f,4);else for(const v of f)v();Us.delete(u)}},e?s?h(!0):d=u.run():o?o(h.bind(null,!0),!0):u.run(),j.pause=u.pause.bind(u),j.resume=u.resume.bind(u),j.stop=j,j}function dt(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))dt(t.value,e,n);else if(B(t))for(let s=0;s<t.length;s++)dt(t[s],e,n);else if(bc(t)||dn(t))t.forEach(s=>{dt(s,e,n)});else if(Ic(t)){for(const s in t)dt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&dt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _s(t,e,n,s){try{return s?t(...s):t()}catch(i){Ti(i,e,n)}}function lt(t,e,n,s){if(U(t)){const i=_s(t,e,n,s);return i&&Cc(i)&&i.catch(r=>{Ti(r,e,n)}),i}if(B(t)){const i=[];for(let r=0;r<t.length;r++)i.push(lt(t[r],e,n,s));return i}}function Ti(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,c,a)===!1)return}l=l.parent}if(r){Mt(),_s(r,null,10,[t,c,a]),Ft();return}}cf(t,n,i,s,o)}function cf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Te=[];let st=-1;const pn=[];let Et=null,an=0;const Yc=Promise.resolve();let Vs=null;function Qc(t){const e=Vs||Yc;return t?e.then(this?t.bind(this):t):e}function af(t){let e=st+1,n=Te.length;for(;e<n;){const s=e+n>>>1,i=Te[s],r=ts(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function oo(t){if(!(t.flags&1)){const e=ts(t),n=Te[Te.length-1];!n||!(t.flags&2)&&e>=ts(n)?Te.push(t):Te.splice(af(e),0,t),t.flags|=1,Jc()}}function Jc(){Vs||(Vs=Yc.then(Zc))}function uf(t){B(t)?pn.push(...t):Et&&t.id===-1?Et.splice(an+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),Jc()}function Xo(t,e,n=st+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Xc(t){if(pn.length){const e=[...new Set(pn)].sort((n,s)=>ts(n)-ts(s));if(pn.length=0,Et){Et.push(...e);return}for(Et=e,an=0;an<Et.length;an++){const n=Et[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,an=0}}const ts=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zc(t){try{for(st=0;st<Te.length;st++){const e=Te[st];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;st<Te.length;st++){const e=Te[st];e&&(e.flags&=-2)}st=-1,Te.length=0,Xc(),Vs=null,(Te.length||pn.length)&&Zc()}}let Oe=null,ea=null;function js(t){const e=Oe;return Oe=t,ea=t&&t.type.__scopeId||null,e}function hf(t,e=Oe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&al(-1);const r=js(e);let o;try{o=t(...i)}finally{js(r),s._d&&al(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ff(t,e){if(Oe===null)return t;const n=Pi(Oe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Z]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&dt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Bt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Mt(),lt(c,n,8,[t.el,l,t,e]),Ft())}}const df=Symbol("_vte"),pf=t=>t.__isTeleport;function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _f(t,e){return U(t)?Ie({name:t.name},e,{setup:t}):t}function ta(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $s(t,e,n,s,i=!1){if(B(t)){t.forEach((E,P)=>$s(E,e&&(B(e)?e[P]:e),n,s,i));return}if(Vn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$s(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Pi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===Z?l.refs={}:l.refs,p=l.setupState,g=Y(p),x=p===Z?()=>!1:E=>J(g,E);if(a!=null&&a!==c&&(de(a)?(u[a]=null,x(a)&&(p[a]=null)):fe(a)&&(a.value=null)),U(c))_s(c,l,12,[o,u]);else{const E=de(c),P=fe(c);if(E||P){const V=()=>{if(t.f){const j=E?x(c)?p[c]:u[c]:c.value;i?B(j)&&qr(j,r):B(j)?j.includes(r)||j.push(r):E?(u[c]=[r],x(c)&&(p[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else E?(u[c]=o,x(c)&&(p[c]=o)):P&&(c.value=o,t.k&&(u[t.k]=o))};o?(V.id=-1,We(V,n)):V()}}}Ii().requestIdleCallback;Ii().cancelIdleCallback;const Vn=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function gf(t,e){sa(t,"a",e)}function mf(t,e){sa(t,"da",e)}function sa(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ni(e,s,n),n){let i=n.parent;for(;i&&i.parent;)na(i.parent.vnode)&&xf(s,e,n,i),i=i.parent}}function xf(t,e,n,s){const i=Ni(e,t,s,!0);ia(()=>{qr(s[e],i)},n)}function Ni(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Mt();const l=gs(n),c=lt(e,n,t,o);return l(),Ft(),c});return s?i.unshift(r):i.push(r),r}}const xt=t=>(e,n=ye)=>{(!ss||t==="sp")&&Ni(t,(...s)=>e(...s),n)},yf=xt("bm"),co=xt("m"),vf=xt("bu"),bf=xt("u"),Cf=xt("bum"),ia=xt("um"),Ef=xt("sp"),If=xt("rtg"),wf=xt("rtc");function Sf(t,e=ye){Ni("ec",t,e)}const Tf="components",ra=Symbol.for("v-ndc");function Nf(t){return de(t)?Rf(Tf,t,!1)||t:t||ra}function Rf(t,e,n=!0,s=!1){const i=Oe||ye;if(i){const r=i.type;{const l=md(r,!1);if(l&&(l===e||l===$e(e)||l===Ei($e(e))))return r}const o=Zo(i[t]||r[t],e)||Zo(i.appContext[t],e);return!o&&s?r:o}}function Zo(t,e){return t&&(t[e]||t[$e(e)]||t[Ei($e(e))])}function el(t,e,n,s){let i;const r=n&&n[s],o=B(t);if(o||de(t)){const l=o&&St(t);let c=!1;l&&(c=!je(t),t=wi(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Ce(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const vr=t=>t?Na(t)?Pi(t):vr(t.parent):null,jn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>la(t),$forceUpdate:t=>t.f||(t.f=()=>{oo(t.update)}),$nextTick:t=>t.n||(t.n=Qc.bind(t.proxy)),$watch:t=>Xf.bind(t)}),Ji=(t,e)=>t!==Z&&!t.__isScriptSetup&&J(t,e),Af={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ji(s,e))return o[e]=1,s[e];if(i!==Z&&J(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&J(a,e))return o[e]=3,r[e];if(n!==Z&&J(n,e))return o[e]=4,n[e];br&&(o[e]=0)}}const u=jn[e];let p,g;if(u)return e==="$attrs"&&be(t.attrs,"get",""),u(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Z&&J(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,J(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ji(i,e)?(i[e]=n,!0):s!==Z&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Z&&J(t,o)||Ji(e,o)||(l=r[0])&&J(l,o)||J(s,o)||J(jn,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tl(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let br=!0;function Pf(t){const e=la(t),n=t.proxy,s=t.ctx;br=!1,e.beforeCreate&&nl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:p,mounted:g,beforeUpdate:x,updated:E,activated:P,deactivated:V,beforeDestroy:j,beforeUnmount:d,destroyed:h,unmounted:f,render:v,renderTracked:O,renderTriggered:te,errorCaptured:D,serverPrefetch:k,expose:ne,inheritAttrs:Re,components:He,directives:Je,filters:rn}=e;if(a&&Of(a,s,null),o)for(const z in o){const se=o[z];U(se)&&(s[z]=se.bind(n))}if(i){const z=i.call(n,n);ae(z)&&(t.data=Si(z))}if(br=!0,r)for(const z in r){const se=r[z],Lt=U(se)?se.bind(n,n):U(se.get)?se.get.bind(n,n):rt,ws=!U(se)&&U(se.set)?se.set.bind(n):rt,Wt=Aa({get:Lt,set:ws});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Xe=>Wt.value=Xe})}if(l)for(const z in l)oa(l[z],s,n,z);if(c){const z=U(c)?c.call(n):c;Reflect.ownKeys(z).forEach(se=>{Wf(se,z[se])})}u&&nl(u,t,"c");function he(z,se){B(se)?se.forEach(Lt=>z(Lt.bind(n))):se&&z(se.bind(n))}if(he(yf,p),he(co,g),he(vf,x),he(bf,E),he(gf,P),he(mf,V),he(Sf,D),he(wf,O),he(If,te),he(Cf,d),he(ia,f),he(Ef,k),B(ne))if(ne.length){const z=t.exposed||(t.exposed={});ne.forEach(se=>{Object.defineProperty(z,se,{get:()=>n[se],set:Lt=>n[se]=Lt})})}else t.exposed||(t.exposed={});v&&t.render===rt&&(t.render=v),Re!=null&&(t.inheritAttrs=Re),He&&(t.components=He),Je&&(t.directives=Je),k&&ta(t)}function Of(t,e,n=rt){B(t)&&(t=Cr(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=$n(i.from||s,i.default,!0):r=$n(i.from||s):r=$n(i),fe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function nl(t,e,n){lt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function oa(t,e,n,s){let i=s.includes(".")?ba(n,s):()=>n[s];if(de(t)){const r=e[t];U(r)&&Gn(i,r)}else if(U(t))Gn(i,t.bind(n));else if(ae(t))if(B(t))t.forEach(r=>oa(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&Gn(i,r,t)}}function la(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Gs(c,a,o,!0)),Gs(c,e,o)),ae(e)&&r.set(e,c),c}function Gs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Gs(t,r,n,!0),i&&i.forEach(o=>Gs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Df[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Df={data:sl,props:il,emits:il,methods:Wn,computed:Wn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Wn,directives:Wn,watch:Mf,provide:sl,inject:kf};function sl(t,e){return e?t?function(){return Ie(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function kf(t,e){return Wn(Cr(t),Cr(e))}function Cr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?Ie(Object.create(null),t,e):e}function il(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Ie(Object.create(null),tl(t),tl(e??{})):e}function Mf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function ca(){return{app:null,config:{isNativeTag:yh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ff=0;function Lf(t,e){return function(s,i=null){U(s)||(s=Ie({},s)),i!=null&&!ae(i)&&(i=null);const r=ca(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:Ff++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:yd,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(a,...p)):U(u)&&(o.add(u),u(a,...p))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,p){return p?(r.components[u]=p,a):r.components[u]},directive(u,p){return p?(r.directives[u]=p,a):r.directives[u]},mount(u,p,g){if(!c){const x=a._ceVNode||ot(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,u,g),c=!0,a._container=u,u.__vue_app__=a,Pi(x.component)}},onUnmount(u){l.push(u)},unmount(){c&&(lt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,p){return r.provides[u]=p,a},runWithContext(u){const p=Qt;Qt=a;try{return u()}finally{Qt=p}}};return a}}let Qt=null;function Wf(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function $n(t,e,n=!1){const s=ye||Oe;if(s||Qt){const i=Qt?Qt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function Bf(){return!!(ye||Oe||Qt)}const aa={},ua=()=>Object.create(aa),ha=t=>Object.getPrototypeOf(t)===aa;function Hf(t,e,n,s=!1){const i={},r=ua();t.propsDefaults=Object.create(null),fa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Qh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Uf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(Ri(t.emitsOptions,g))continue;const x=e[g];if(c)if(J(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const E=$e(g);i[E]=Er(c,l,E,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{fa(t,e,i,r)&&(a=!0);let u;for(const p in l)(!e||!J(e,p)&&((u=nn(p))===p||!J(e,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=Er(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!J(e,p))&&(delete r[p],a=!0)}a&&ft(t.attrs,"set","")}function fa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Bn(c))continue;const a=e[c];let u;i&&J(i,u=$e(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ri(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||Z;for(let u=0;u<r.length;u++){const p=r[u];n[p]=Er(i,c,p,a[p],t,!J(a,p))}}return o}function Er(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=gs(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}const Vf=new WeakMap;function da(t,e,n=!1){const s=n?Vf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!U(t)){const u=p=>{c=!0;const[g,x]=da(p,e,!0);Ie(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ae(t)&&s.set(t,fn),fn;if(B(r))for(let u=0;u<r.length;u++){const p=$e(r[u]);rl(p)&&(o[p]=Z)}else if(r)for(const u in r){const p=$e(u);if(rl(p)){const g=r[u],x=o[p]=B(g)||U(g)?{type:g}:Ie({},g),E=x.type;let P=!1,V=!0;if(B(E))for(let j=0;j<E.length;++j){const d=E[j],h=U(d)&&d.name;if(h==="Boolean"){P=!0;break}else h==="String"&&(V=!1)}else P=U(E)&&E.name==="Boolean";x[0]=P,x[1]=V,(P||J(x,"default"))&&l.push(p)}}const a=[o,l];return ae(t)&&s.set(t,a),a}function rl(t){return t[0]!=="$"&&!Bn(t)}const pa=t=>t[0]==="_"||t==="$stable",ao=t=>B(t)?t.map(it):[it(t)],jf=(t,e,n)=>{if(e._n)return e;const s=hf((...i)=>ao(e(...i)),n);return s._c=!1,s},_a=(t,e,n)=>{const s=t._ctx;for(const i in t){if(pa(i))continue;const r=t[i];if(U(r))e[i]=jf(i,r,s);else if(r!=null){const o=ao(r);e[i]=()=>o}}},ga=(t,e)=>{const n=ao(e);t.slots.default=()=>n},ma=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},$f=(t,e,n)=>{const s=t.slots=ua();if(t.vnode.shapeFlag&32){const i=e._;i?(ma(s,e,n),n&&wc(s,"_",i,!0)):_a(e,s)}else e&&ga(t,e)},Gf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Z;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ma(i,e,n):(r=!e.$stable,_a(e,i)),o=e}else e&&(ga(t,e),o={default:1});if(r)for(const l in i)!pa(l)&&o[l]==null&&delete i[l]},We=rd;function Kf(t){return zf(t)}function zf(t,e){const n=Ii();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:p,nextSibling:g,setScopeId:x=rt,insertStaticContent:E}=t,P=(_,m,y,I=null,b=null,C=null,R=void 0,N=null,T=!!m.dynamicChildren)=>{if(_===m)return;_&&!On(_,m)&&(I=Ss(_),Xe(_,b,C,!0),_=null),m.patchFlag===-2&&(T=!1,m.dynamicChildren=null);const{type:w,ref:F,shapeFlag:A}=m;switch(w){case Ai:V(_,m,y,I);break;case Xt:j(_,m,y,I);break;case Zi:_==null&&d(m,y,I,R);break;case Ve:He(_,m,y,I,b,C,R,N,T);break;default:A&1?v(_,m,y,I,b,C,R,N,T):A&6?Je(_,m,y,I,b,C,R,N,T):(A&64||A&128)&&w.process(_,m,y,I,b,C,R,N,T,Rn)}F!=null&&b&&$s(F,_&&_.ref,C,m||_,!m)},V=(_,m,y,I)=>{if(_==null)s(m.el=l(m.children),y,I);else{const b=m.el=_.el;m.children!==_.children&&a(b,m.children)}},j=(_,m,y,I)=>{_==null?s(m.el=c(m.children||""),y,I):m.el=_.el},d=(_,m,y,I)=>{[_.el,_.anchor]=E(_.children,m,y,I,_.el,_.anchor)},h=({el:_,anchor:m},y,I)=>{let b;for(;_&&_!==m;)b=g(_),s(_,y,I),_=b;s(m,y,I)},f=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},v=(_,m,y,I,b,C,R,N,T)=>{m.type==="svg"?R="svg":m.type==="math"&&(R="mathml"),_==null?O(m,y,I,b,C,R,N,T):k(_,m,b,C,R,N,T)},O=(_,m,y,I,b,C,R,N)=>{let T,w;const{props:F,shapeFlag:A,transition:M,dirs:W}=_;if(T=_.el=o(_.type,C,F&&F.is,F),A&8?u(T,_.children):A&16&&D(_.children,T,null,I,b,Xi(_,C),R,N),W&&Bt(_,null,I,"created"),te(T,_,_.scopeId,R,I),F){for(const ie in F)ie!=="value"&&!Bn(ie)&&r(T,ie,null,F[ie],C,I);"value"in F&&r(T,"value",null,F.value,C),(w=F.onVnodeBeforeMount)&&nt(w,I,_)}W&&Bt(_,null,I,"beforeMount");const q=qf(b,M);q&&M.beforeEnter(T),s(T,m,y),((w=F&&F.onVnodeMounted)||q||W)&&We(()=>{w&&nt(w,I,_),q&&M.enter(T),W&&Bt(_,null,I,"mounted")},b)},te=(_,m,y,I,b)=>{if(y&&x(_,y),I)for(let C=0;C<I.length;C++)x(_,I[C]);if(b){let C=b.subTree;if(m===C||Ea(C.type)&&(C.ssContent===m||C.ssFallback===m)){const R=b.vnode;te(_,R,R.scopeId,R.slotScopeIds,b.parent)}}},D=(_,m,y,I,b,C,R,N,T=0)=>{for(let w=T;w<_.length;w++){const F=_[w]=N?It(_[w]):it(_[w]);P(null,F,m,y,I,b,C,R,N)}},k=(_,m,y,I,b,C,R)=>{const N=m.el=_.el;let{patchFlag:T,dynamicChildren:w,dirs:F}=m;T|=_.patchFlag&16;const A=_.props||Z,M=m.props||Z;let W;if(y&&Ht(y,!1),(W=M.onVnodeBeforeUpdate)&&nt(W,y,m,_),F&&Bt(m,_,y,"beforeUpdate"),y&&Ht(y,!0),(A.innerHTML&&M.innerHTML==null||A.textContent&&M.textContent==null)&&u(N,""),w?ne(_.dynamicChildren,w,N,y,I,Xi(m,b),C):R||se(_,m,N,null,y,I,Xi(m,b),C,!1),T>0){if(T&16)Re(N,A,M,y,b);else if(T&2&&A.class!==M.class&&r(N,"class",null,M.class,b),T&4&&r(N,"style",A.style,M.style,b),T&8){const q=m.dynamicProps;for(let ie=0;ie<q.length;ie++){const X=q[ie],Fe=A[X],Ae=M[X];(Ae!==Fe||X==="value")&&r(N,X,Fe,Ae,b,y)}}T&1&&_.children!==m.children&&u(N,m.children)}else!R&&w==null&&Re(N,A,M,y,b);((W=M.onVnodeUpdated)||F)&&We(()=>{W&&nt(W,y,m,_),F&&Bt(m,_,y,"updated")},I)},ne=(_,m,y,I,b,C,R)=>{for(let N=0;N<m.length;N++){const T=_[N],w=m[N],F=T.el&&(T.type===Ve||!On(T,w)||T.shapeFlag&70)?p(T.el):y;P(T,w,F,null,I,b,C,R,!0)}},Re=(_,m,y,I,b)=>{if(m!==y){if(m!==Z)for(const C in m)!Bn(C)&&!(C in y)&&r(_,C,m[C],null,b,I);for(const C in y){if(Bn(C))continue;const R=y[C],N=m[C];R!==N&&C!=="value"&&r(_,C,N,R,b,I)}"value"in y&&r(_,"value",m.value,y.value,b)}},He=(_,m,y,I,b,C,R,N,T)=>{const w=m.el=_?_.el:l(""),F=m.anchor=_?_.anchor:l("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:W}=m;W&&(N=N?N.concat(W):W),_==null?(s(w,y,I),s(F,y,I),D(m.children||[],y,F,b,C,R,N,T)):A>0&&A&64&&M&&_.dynamicChildren?(ne(_.dynamicChildren,M,y,b,C,R,N),(m.key!=null||b&&m===b.subTree)&&xa(_,m,!0)):se(_,m,y,F,b,C,R,N,T)},Je=(_,m,y,I,b,C,R,N,T)=>{m.slotScopeIds=N,_==null?m.shapeFlag&512?b.ctx.activate(m,y,I,R,T):rn(m,y,I,b,C,R,T):Is(_,m,T)},rn=(_,m,y,I,b,C,R)=>{const N=_.component=fd(_,I,b);if(na(_)&&(N.ctx.renderer=Rn),dd(N,!1,R),N.asyncDep){if(b&&b.registerDep(N,he,R),!_.el){const T=N.subTree=ot(Xt);j(null,T,m,y)}}else he(N,_,m,y,b,C,R)},Is=(_,m,y)=>{const I=m.component=_.component;if(sd(_,m,y))if(I.asyncDep&&!I.asyncResolved){z(I,m,y);return}else I.next=m,I.update();else m.el=_.el,I.vnode=m},he=(_,m,y,I,b,C,R)=>{const N=()=>{if(_.isMounted){let{next:A,bu:M,u:W,parent:q,vnode:ie}=_;{const et=ya(_);if(et){A&&(A.el=ie.el,z(_,A,R)),et.asyncDep.then(()=>{_.isUnmounted||N()});return}}let X=A,Fe;Ht(_,!1),A?(A.el=ie.el,z(_,A,R)):A=ie,M&&ks(M),(Fe=A.props&&A.props.onVnodeBeforeUpdate)&&nt(Fe,q,A,ie),Ht(_,!0);const Ae=ll(_),Ze=_.subTree;_.subTree=Ae,P(Ze,Ae,p(Ze.el),Ss(Ze),_,b,C),A.el=Ae.el,X===null&&id(_,Ae.el),W&&We(W,b),(Fe=A.props&&A.props.onVnodeUpdated)&&We(()=>nt(Fe,q,A,ie),b)}else{let A;const{el:M,props:W}=m,{bm:q,m:ie,parent:X,root:Fe,type:Ae}=_,Ze=Vn(m);Ht(_,!1),q&&ks(q),!Ze&&(A=W&&W.onVnodeBeforeMount)&&nt(A,X,m),Ht(_,!0);{Fe.ce&&Fe.ce._injectChildStyle(Ae);const et=_.subTree=ll(_);P(null,et,y,I,_,b,C),m.el=et.el}if(ie&&We(ie,b),!Ze&&(A=W&&W.onVnodeMounted)){const et=m;We(()=>nt(A,X,et),b)}(m.shapeFlag&256||X&&Vn(X.vnode)&&X.vnode.shapeFlag&256)&&_.a&&We(_.a,b),_.isMounted=!0,m=y=I=null}};_.scope.on();const T=_.effect=new Oc(N);_.scope.off();const w=_.update=T.run.bind(T),F=_.job=T.runIfDirty.bind(T);F.i=_,F.id=_.uid,T.scheduler=()=>oo(F),Ht(_,!0),w()},z=(_,m,y)=>{m.component=_;const I=_.vnode.props;_.vnode=m,_.next=null,Uf(_,m.props,I,y),Gf(_,m.children,y),Mt(),Xo(_),Ft()},se=(_,m,y,I,b,C,R,N,T=!1)=>{const w=_&&_.children,F=_?_.shapeFlag:0,A=m.children,{patchFlag:M,shapeFlag:W}=m;if(M>0){if(M&128){ws(w,A,y,I,b,C,R,N,T);return}else if(M&256){Lt(w,A,y,I,b,C,R,N,T);return}}W&8?(F&16&&Nn(w,b,C),A!==w&&u(y,A)):F&16?W&16?ws(w,A,y,I,b,C,R,N,T):Nn(w,b,C,!0):(F&8&&u(y,""),W&16&&D(A,y,I,b,C,R,N,T))},Lt=(_,m,y,I,b,C,R,N,T)=>{_=_||fn,m=m||fn;const w=_.length,F=m.length,A=Math.min(w,F);let M;for(M=0;M<A;M++){const W=m[M]=T?It(m[M]):it(m[M]);P(_[M],W,y,null,b,C,R,N,T)}w>F?Nn(_,b,C,!0,!1,A):D(m,y,I,b,C,R,N,T,A)},ws=(_,m,y,I,b,C,R,N,T)=>{let w=0;const F=m.length;let A=_.length-1,M=F-1;for(;w<=A&&w<=M;){const W=_[w],q=m[w]=T?It(m[w]):it(m[w]);if(On(W,q))P(W,q,y,null,b,C,R,N,T);else break;w++}for(;w<=A&&w<=M;){const W=_[A],q=m[M]=T?It(m[M]):it(m[M]);if(On(W,q))P(W,q,y,null,b,C,R,N,T);else break;A--,M--}if(w>A){if(w<=M){const W=M+1,q=W<F?m[W].el:I;for(;w<=M;)P(null,m[w]=T?It(m[w]):it(m[w]),y,q,b,C,R,N,T),w++}}else if(w>M)for(;w<=A;)Xe(_[w],b,C,!0),w++;else{const W=w,q=w,ie=new Map;for(w=q;w<=M;w++){const Le=m[w]=T?It(m[w]):it(m[w]);Le.key!=null&&ie.set(Le.key,w)}let X,Fe=0;const Ae=M-q+1;let Ze=!1,et=0;const An=new Array(Ae);for(w=0;w<Ae;w++)An[w]=0;for(w=W;w<=A;w++){const Le=_[w];if(Fe>=Ae){Xe(Le,b,C,!0);continue}let tt;if(Le.key!=null)tt=ie.get(Le.key);else for(X=q;X<=M;X++)if(An[X-q]===0&&On(Le,m[X])){tt=X;break}tt===void 0?Xe(Le,b,C,!0):(An[tt-q]=w+1,tt>=et?et=tt:Ze=!0,P(Le,m[tt],y,null,b,C,R,N,T),Fe++)}const zo=Ze?Yf(An):fn;for(X=zo.length-1,w=Ae-1;w>=0;w--){const Le=q+w,tt=m[Le],qo=Le+1<F?m[Le+1].el:I;An[w]===0?P(null,tt,y,qo,b,C,R,N,T):Ze&&(X<0||w!==zo[X]?Wt(tt,y,qo,2):X--)}}},Wt=(_,m,y,I,b=null)=>{const{el:C,type:R,transition:N,children:T,shapeFlag:w}=_;if(w&6){Wt(_.component.subTree,m,y,I);return}if(w&128){_.suspense.move(m,y,I);return}if(w&64){R.move(_,m,y,Rn);return}if(R===Ve){s(C,m,y);for(let A=0;A<T.length;A++)Wt(T[A],m,y,I);s(_.anchor,m,y);return}if(R===Zi){h(_,m,y);return}if(I!==2&&w&1&&N)if(I===0)N.beforeEnter(C),s(C,m,y),We(()=>N.enter(C),b);else{const{leave:A,delayLeave:M,afterLeave:W}=N,q=()=>s(C,m,y),ie=()=>{A(C,()=>{q(),W&&W()})};M?M(C,q,ie):ie()}else s(C,m,y)},Xe=(_,m,y,I=!1,b=!1)=>{const{type:C,props:R,ref:N,children:T,dynamicChildren:w,shapeFlag:F,patchFlag:A,dirs:M,cacheIndex:W}=_;if(A===-2&&(b=!1),N!=null&&$s(N,null,y,_,!0),W!=null&&(m.renderCache[W]=void 0),F&256){m.ctx.deactivate(_);return}const q=F&1&&M,ie=!Vn(_);let X;if(ie&&(X=R&&R.onVnodeBeforeUnmount)&&nt(X,m,_),F&6)xh(_.component,y,I);else{if(F&128){_.suspense.unmount(y,I);return}q&&Bt(_,null,m,"beforeUnmount"),F&64?_.type.remove(_,m,y,Rn,I):w&&!w.hasOnce&&(C!==Ve||A>0&&A&64)?Nn(w,m,y,!1,!0):(C===Ve&&A&384||!b&&F&16)&&Nn(T,m,y),I&&Go(_)}(ie&&(X=R&&R.onVnodeUnmounted)||q)&&We(()=>{X&&nt(X,m,_),q&&Bt(_,null,m,"unmounted")},y)},Go=_=>{const{type:m,el:y,anchor:I,transition:b}=_;if(m===Ve){mh(y,I);return}if(m===Zi){f(_);return}const C=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(_.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:N}=b,T=()=>R(y,C);N?N(_.el,C,T):T()}else C()},mh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},xh=(_,m,y)=>{const{bum:I,scope:b,job:C,subTree:R,um:N,m:T,a:w}=_;ol(T),ol(w),I&&ks(I),b.stop(),C&&(C.flags|=8,Xe(R,_,m,y)),N&&We(N,m),We(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Nn=(_,m,y,I=!1,b=!1,C=0)=>{for(let R=C;R<_.length;R++)Xe(_[R],m,y,I,b)},Ss=_=>{if(_.shapeFlag&6)return Ss(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[df];return y?g(y):m};let Gi=!1;const Ko=(_,m,y)=>{_==null?m._vnode&&Xe(m._vnode,null,null,!0):P(m._vnode||null,_,m,null,null,null,y),m._vnode=_,Gi||(Gi=!0,Xo(),Xc(),Gi=!1)},Rn={p:P,um:Xe,m:Wt,r:Go,mt:rn,mc:D,pc:se,pbc:ne,n:Ss,o:t};return{render:Ko,hydrate:void 0,createApp:Lf(Ko)}}function Xi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ht({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xa(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=It(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&xa(o,l)),l.type===Ai&&(l.el=o.el)}}function Yf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ya(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ya(e)}function ol(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qf=Symbol.for("v-scx"),Jf=()=>$n(Qf);function Gn(t,e,n){return va(t,e,n)}function va(t,e,n=Z){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ie({},n),c=e&&s||!e&&r!=="post";let a;if(ss){if(r==="sync"){const x=Jf();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=rt,x.resume=rt,x.pause=rt,x}}const u=ye;l.call=(x,E,P)=>lt(x,u,E,P);let p=!1;r==="post"?l.scheduler=x=>{We(x,u&&u.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(x,E)=>{E?x():oo(x)}),l.augmentJob=x=>{e&&(x.flags|=4),p&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const g=lf(t,e,l);return ss&&(a?a.push(g):c&&g()),g}function Xf(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=gs(this),l=va(i,r.bind(s),n);return o(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Zf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$e(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const r=e.startsWith("update:"),o=r&&Zf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>de(u)?u.trim():u)),o.number&&(i=n.map(_r)));let l,c=s[l=Ki(e)]||s[l=Ki($e(e))];!c&&r&&(c=s[l=Ki(nn(e))]),c&&lt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,lt(a,t,6,i)}}function Ca(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const c=a=>{const u=Ca(a,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ae(t)&&s.set(t,null),null):(B(r)?r.forEach(c=>o[c]=null):Ie(o,r),ae(t)&&s.set(t,o),o)}function Ri(t,e){return!t||!vi(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,nn(e))||J(t,e))}function ll(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:p,data:g,setupState:x,ctx:E,inheritAttrs:P}=t,V=js(t);let j,d;try{if(n.shapeFlag&4){const f=i||s,v=f;j=it(a.call(v,f,u,p,x,g,E)),d=l}else{const f=e;j=it(f.length>1?f(p,{attrs:l,slots:o,emit:c}):f(p,null)),d=e.props?l:td(l)}}catch(f){Kn.length=0,Ti(f,t,1),j=ot(Xt)}let h=j;if(d&&P!==!1){const f=Object.keys(d),{shapeFlag:v}=h;f.length&&v&7&&(r&&f.some(zr)&&(d=nd(d,r)),h=xn(h,d,!1,!0))}return n.dirs&&(h=xn(h,null,!1,!0),h.dirs=h.dirs?h.dirs.concat(n.dirs):n.dirs),n.transition&&lo(h,n.transition),j=h,js(V),j}const td=t=>{let e;for(const n in t)(n==="class"||n==="style"||vi(n))&&((e||(e={}))[n]=t[n]);return e},nd=(t,e)=>{const n={};for(const s in t)(!zr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function sd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?cl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(o[g]!==s[g]&&!Ri(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?cl(s,o,a):!0:!!o;return!1}function cl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ri(n,r))return!0}return!1}function id({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ea=t=>t.__isSuspense;function rd(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):uf(t)}const Ve=Symbol.for("v-fgt"),Ai=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Zi=Symbol.for("v-stc"),Kn=[];let Be=null;function ve(t=!1){Kn.push(Be=t?null:[])}function od(){Kn.pop(),Be=Kn[Kn.length-1]||null}let ns=1;function al(t,e=!1){ns+=t,t<0&&Be&&e&&(Be.hasOnce=!0)}function Ia(t){return t.dynamicChildren=ns>0?Be||fn:null,od(),ns>0&&Be&&Be.push(t),t}function Pe(t,e,n,s,i,r){return Ia(H(t,e,n,s,i,r,!0))}function wa(t,e,n,s,i){return Ia(ot(t,e,n,s,i,!0))}function Sa(t){return t?t.__v_isVNode===!0:!1}function On(t,e){return t.type===e.type&&t.key===e.key}const Ta=({key:t})=>t??null,Ms=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||fe(t)||U(t)?{i:Oe,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,i=null,r=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ta(e),ref:e&&Ms(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return l?(uo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),ns>0&&!o&&Be&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Be.push(c),c}const ot=ld;function ld(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ra)&&(t=Xt),Sa(t)){const l=xn(t,e,!0);return n&&uo(l,n),ns>0&&!r&&Be&&(l.shapeFlag&6?Be[Be.indexOf(t)]=l:Be.push(l)),l.patchFlag=-2,l}if(xd(t)&&(t=t.__vccOpts),e){e=cd(e);let{class:l,style:c}=e;l&&!de(l)&&(e.class=Jr(l)),ae(c)&&(io(c)&&!B(c)&&(c=Ie({},c)),e.style=Qr(c))}const o=de(t)?1:Ea(t)?128:pf(t)?64:ae(t)?4:U(t)?2:0;return H(t,e,n,s,i,o,r,!0)}function cd(t){return t?io(t)||ha(t)?Ie({},t):t:null}function xn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?ad(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ta(a),ref:e&&e.ref?n&&r?B(r)?r.concat(Ms(e)):[r,Ms(e)]:Ms(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&lo(u,c.clone(u)),u}function ut(t=" ",e=0){return ot(Ai,null,t,e)}function bt(t="",e=!1){return e?(ve(),wa(Xt,null,t)):ot(Xt,null,t)}function it(t){return t==null||typeof t=="boolean"?ot(Xt):B(t)?ot(Ve,null,t.slice()):Sa(t)?It(t):ot(Ai,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xn(t)}function uo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),uo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ha(e)?e._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),s&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function ad(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(i==="style")e.style=Qr([e.style,s.style]);else if(vi(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function nt(t,e,n,s=null){lt(t,e,7,[n,s])}const ud=ca();let hd=0;function fd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ud,r={uid:hd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:da(s,i),emitsOptions:Ca(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ed.bind(null,r),t.ce&&t.ce(r),r}let ye=null,Ks,Ir;{const t=Ii(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Ks=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Ir=e("__VUE_SSR_SETTERS__",n=>ss=n)}const gs=t=>{const e=ye;return Ks(t),t.scope.on(),()=>{t.scope.off(),Ks(e)}},ul=()=>{ye&&ye.scope.off(),Ks(null)};function Na(t){return t.vnode.shapeFlag&4}let ss=!1;function dd(t,e=!1,n=!1){e&&Ir(e);const{props:s,children:i}=t.vnode,r=Na(t);Hf(t,s,r,e),$f(t,i,n);const o=r?pd(t,e):void 0;return e&&Ir(!1),o}function pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Af);const{setup:s}=n;if(s){Mt();const i=t.setupContext=s.length>1?gd(t):null,r=gs(t),o=_s(s,t,0,[t.props,i]),l=Cc(o);if(Ft(),r(),(l||t.sp)&&!Vn(t)&&ta(t),l){if(o.then(ul,ul),e)return o.then(c=>{hl(t,c)}).catch(c=>{Ti(c,t,0)});t.asyncDep=o}else hl(t,o)}else Ra(t)}function hl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=qc(e)),Ra(t)}function Ra(t,e,n){const s=t.type;t.render||(t.render=s.render||rt);{const i=gs(t);Mt();try{Pf(t)}finally{Ft(),i()}}}const _d={get(t,e){return be(t,"get",""),t[e]}};function gd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_d),slots:t.slots,emit:t.emit,expose:e}}function Pi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qc(ro(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jn)return jn[n](t)},has(e,n){return n in e||n in jn}})):t.proxy}function md(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function xd(t){return U(t)&&"__vccOpts"in t}const Aa=(t,e)=>rf(t,e,ss),yd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wr;const fl=typeof window<"u"&&window.trustedTypes;if(fl)try{wr=fl.createPolicy("vue",{createHTML:t=>t})}catch{}const Pa=wr?t=>wr.createHTML(t):t=>t,vd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,dl=ht&&ht.createElement("template"),Cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ht.createElementNS(vd,t):e==="mathml"?ht.createElementNS(bd,t):n?ht.createElement(t,{is:n}):ht.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ht.createTextNode(t),createComment:t=>ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{dl.innerHTML=Pa(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=dl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ed=Symbol("_vtc");function Id(t,e,n){const s=t[Ed];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pl=Symbol("_vod"),wd=Symbol("_vsh"),Sd=Symbol(""),Td=/(^|;)\s*display\s*:/;function Nd(t,e,n){const s=t.style,i=de(n);let r=!1;if(n&&!i){if(e)if(de(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Fs(s,l,"")}else for(const o in e)n[o]==null&&Fs(s,o,"");for(const o in n)o==="display"&&(r=!0),Fs(s,o,n[o])}else if(i){if(e!==n){const o=s[Sd];o&&(n+=";"+o),s.cssText=n,r=Td.test(n)}}else e&&t.removeAttribute("style");pl in t&&(t[pl]=r?s.display:"",t[wd]&&(s.display="none"))}const _l=/\s*!important$/;function Fs(t,e,n){if(B(n))n.forEach(s=>Fs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rd(t,e);_l.test(n)?t.setProperty(nn(s),n.replace(_l,""),"important"):t[s]=n}}const gl=["Webkit","Moz","ms"],er={};function Rd(t,e){const n=er[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return er[e]=s;s=Ei(s);for(let i=0;i<gl.length;i++){const r=gl[i]+s;if(r in t)return er[e]=r}return e}const ml="http://www.w3.org/1999/xlink";function xl(t,e,n,s,i,r=Rh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ml,e.slice(6,e.length)):t.setAttributeNS(ml,e,n):n==null||r&&!Sc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":kt(n)?String(n):n)}function yl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Pa(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function Ad(t,e,n,s){t.removeEventListener(e,n,s)}const vl=Symbol("_vei");function Pd(t,e,n,s,i=null){const r=t[vl]||(t[vl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Od(e);if(s){const a=r[e]=Md(s,i);un(t,l,a,c)}else o&&(Ad(t,l,o,c),r[e]=void 0)}}const bl=/(?:Once|Passive|Capture)$/;function Od(t){let e;if(bl.test(t)){e={};let s;for(;s=t.match(bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let tr=0;const Dd=Promise.resolve(),kd=()=>tr||(Dd.then(()=>tr=0),tr=Date.now());function Md(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(Fd(s,n.value),e,5,[s])};return n.value=t,n.attached=kd(),n}function Fd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ld=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Id(t,s,o):e==="style"?Nd(t,n,s):vi(e)?zr(e)||Pd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wd(t,e,s,o))?(yl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(s))?yl(t,$e(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xl(t,e,s,o))};function Wd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Cl(e)&&de(n)?!1:e in t}const El=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>ks(e,n):e};function Bd(t){t.target.composing=!0}function Il(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nr=Symbol("_assign"),Hd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[nr]=El(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=_r(l)),t[nr](l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",Bd),un(t,"compositionend",Il),un(t,"change",Il))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[nr]=El(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?_r(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Ud=Ie({patchProp:Ld},Cd);let wl;function Vd(){return wl||(wl=Kf(Ud))}const jd=(...t)=>{const e=Vd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Gd(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,$d(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $d(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gd(t){return de(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Oa;const Oi=t=>Oa=t,Da=Symbol();function Sr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zn||(zn={}));function Kd(){const t=Ac(!0),e=t.run(()=>Gt({}));let n=[],s=[];const i=ro({install(r){Oi(i),i._a=r,r.provide(Da,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ka=()=>{};function Sl(t,e,n,s=ka){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Pc()&&Ah(i),i}function ln(t,...e){t.slice().forEach(n=>{n(...e)})}const zd=t=>t(),Tl=Symbol(),sr=Symbol();function Tr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Sr(i)&&Sr(s)&&t.hasOwnProperty(n)&&!fe(s)&&!St(s)?t[n]=Tr(i,s):t[n]=s}return t}const qd=Symbol();function Yd(t){return!Sr(t)||!t.hasOwnProperty(qd)}const{assign:Ct}=Object;function Qd(t){return!!(fe(t)&&t.effect)}function Jd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=ef(n.state.value[t]);return Ct(u,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=ro(Aa(()=>{Oi(n);const x=n._s.get(t);return o[g].call(x,x)})),p),{}))}return c=Ma(t,a,e,n,s,!0),c}function Ma(t,e,n={},s,i,r){let o;const l=Ct({actions:{}},n),c={deep:!0};let a,u,p=[],g=[],x;const E=s.state.value[t];!r&&!E&&(s.state.value[t]={}),Gt({});let P;function V(D){let k;a=u=!1,typeof D=="function"?(D(s.state.value[t]),k={type:zn.patchFunction,storeId:t,events:x}):(Tr(s.state.value[t],D),k={type:zn.patchObject,payload:D,storeId:t,events:x});const ne=P=Symbol();Qc().then(()=>{P===ne&&(a=!0)}),u=!0,ln(p,k,s.state.value[t])}const j=r?function(){const{state:k}=n,ne=k?k():{};this.$patch(Re=>{Ct(Re,ne)})}:ka;function d(){o.stop(),p=[],g=[],s._s.delete(t)}const h=(D,k="")=>{if(Tl in D)return D[sr]=k,D;const ne=function(){Oi(s);const Re=Array.from(arguments),He=[],Je=[];function rn(z){He.push(z)}function Is(z){Je.push(z)}ln(g,{args:Re,name:ne[sr],store:v,after:rn,onError:Is});let he;try{he=D.apply(this&&this.$id===t?this:v,Re)}catch(z){throw ln(Je,z),z}return he instanceof Promise?he.then(z=>(ln(He,z),z)).catch(z=>(ln(Je,z),Promise.reject(z))):(ln(He,he),he)};return ne[Tl]=!0,ne[sr]=k,ne},f={_p:s,$id:t,$onAction:Sl.bind(null,g),$patch:V,$reset:j,$subscribe(D,k={}){const ne=Sl(p,D,k.detached,()=>Re()),Re=o.run(()=>Gn(()=>s.state.value[t],He=>{(k.flush==="sync"?u:a)&&D({storeId:t,type:zn.direct,events:x},He)},Ct({},c,k)));return ne},$dispose:d},v=Si(f);s._s.set(t,v);const te=(s._a&&s._a.runWithContext||zd)(()=>s._e.run(()=>(o=Ac()).run(()=>e({action:h}))));for(const D in te){const k=te[D];if(fe(k)&&!Qd(k)||St(k))r||(E&&Yd(k)&&(fe(k)?k.value=E[D]:Tr(k,E[D])),s.state.value[t][D]=k);else if(typeof k=="function"){const ne=h(k,D);te[D]=ne,l.actions[D]=k}}return Ct(v,te),Ct(Y(v),te),Object.defineProperty(v,"$state",{get:()=>s.state.value[t],set:D=>{V(k=>{Ct(k,D)})}}),s._p.forEach(D=>{Ct(v,o.run(()=>D({store:v,app:s._a,pinia:s,options:l})))}),E&&r&&n.hydrate&&n.hydrate(v.$state,E),a=!0,u=!0,v}/*! #__NO_SIDE_EFFECTS__ */function Xd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Bf();return o=o||(c?$n(Da,null):null),o&&Oi(o),o=Oa,o._s.has(t)||(i?Ma(t,e,s,o):Jd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Zd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ep=()=>{};var Nl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const S=function(t,e){if(!t)throw En(e)},En=function(t){return new Error("Firebase Database ("+Fa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[u],n[p],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(La(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new np;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),p!==64){const E=a<<6&192|p;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wa=function(t){const e=La(t);return ho.encodeByteArray(e,!0)},zs=function(t){return Wa(t).replace(/\./g,"")},Nr=function(t){try{return ho.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){return Ba(void 0,t)}function Ba(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ip(n)||(t[n]=Ba(t[n],e[n]));return t}function ip(t){return t!=="__proto__"}/**
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
 */const op=()=>rp().__FIREBASE_DEFAULTS__,lp=()=>{if(typeof process>"u"||typeof Nl>"u")return;const t=Nl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nr(t[1]);return e&&JSON.parse(e)},Ha=()=>{try{return ep()||op()||lp()||cp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},up=t=>{const e=ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ua=()=>{var t;return(t=Ha())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mp="FirebaseError";class ms extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mp,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ms(i,l,s)}}function xp(t,e){return t.replace(yp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $a=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=is(Nr(r[0])||""),n=is(Nr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vp=function(t){const e=$a(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(t){const e=$a(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ys(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Al(r)&&Al(o)){if(!Ys(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Al(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ep{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):p<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const g=(i<<5|i>>>27)+a+c+u+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function fo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ki=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function In(t){return t&&t._delegate?t._delegate:t}class rs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class wp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Di;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tp(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sp(t){return t===jt?void 0:t}function Tp(t){return t.instantiationMode==="EAGER"}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Rp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Ap=oe.INFO,Pp={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Op=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Pp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=Ap,this._logHandler=Op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Dp=(t,e)=>e.some(n=>t instanceof n);let Pl,Ol;function kp(){return Pl||(Pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mp(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ka=new WeakMap,Rr=new WeakMap,za=new WeakMap,ir=new WeakMap,po=new WeakMap;function Fp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ka.set(n,t)}).catch(()=>{}),po.set(e,t),e}function Lp(t){if(Rr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rr.set(t,e)}let Ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||za.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wp(t){Ar=t(Ar)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rr(this),e,...n);return za.set(s,e.sort?e.sort():[e]),Tt(s)}:Mp().includes(t)?function(...e){return t.apply(rr(this),e),Tt(Ka.get(this))}:function(...e){return Tt(t.apply(rr(this),e))}}function Hp(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&Lp(t),Dp(t,kp())?new Proxy(t,Ar):t)}function Tt(t){if(t instanceof IDBRequest)return Fp(t);if(ir.has(t))return ir.get(t);const e=Hp(t);return e!==t&&(ir.set(t,e),po.set(e,t)),e}const rr=t=>po.get(t);function Up(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Vp=["get","getKey","getAll","getAllKeys","count"],jp=["put","add","delete","clear"],or=new Map;function Dl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(or.get(e))return or.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=jp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return or.set(e,r),r}Wp(t=>({...t,get:(e,n,s)=>Dl(e,n)||t.get(e,n,s),has:(e,n)=>!!Dl(e,n)||t.has(e,n)}));/**
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
 */class $p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pr="@firebase/app",kl="0.11.2";/**
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
 */const gt=new Ga("@firebase/app"),Kp="@firebase/app-compat",zp="@firebase/analytics-compat",qp="@firebase/analytics",Yp="@firebase/app-check-compat",Qp="@firebase/app-check",Jp="@firebase/auth",Xp="@firebase/auth-compat",Zp="@firebase/database",e_="@firebase/data-connect",t_="@firebase/database-compat",n_="@firebase/functions",s_="@firebase/functions-compat",i_="@firebase/installations",r_="@firebase/installations-compat",o_="@firebase/messaging",l_="@firebase/messaging-compat",c_="@firebase/performance",a_="@firebase/performance-compat",u_="@firebase/remote-config",h_="@firebase/remote-config-compat",f_="@firebase/storage",d_="@firebase/storage-compat",p_="@firebase/firestore",__="@firebase/vertexai",g_="@firebase/firestore-compat",m_="firebase",x_="11.4.0";/**
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
 */const Or="[DEFAULT]",y_={[Pr]:"fire-core",[Kp]:"fire-core-compat",[qp]:"fire-analytics",[zp]:"fire-analytics-compat",[Qp]:"fire-app-check",[Yp]:"fire-app-check-compat",[Jp]:"fire-auth",[Xp]:"fire-auth-compat",[Zp]:"fire-rtdb",[e_]:"fire-data-connect",[t_]:"fire-rtdb-compat",[n_]:"fire-fn",[s_]:"fire-fn-compat",[i_]:"fire-iid",[r_]:"fire-iid-compat",[o_]:"fire-fcm",[l_]:"fire-fcm-compat",[c_]:"fire-perf",[a_]:"fire-perf-compat",[u_]:"fire-rc",[h_]:"fire-rc-compat",[f_]:"fire-gcs",[d_]:"fire-gcs-compat",[p_]:"fire-fst",[g_]:"fire-fst-compat",[__]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const Qs=new Map,v_=new Map,Dr=new Map;function Ml(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(Dr.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const n of Qs.values())Ml(n,t);for(const n of v_.values())Ml(n,t);return!0}function b_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function C_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const E_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new ja("app","Firebase",E_);/**
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
 */class I_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const w_=x_;function qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Or,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=Ua()),!n)throw Nt.create("no-options");const r=Qs.get(i);if(r){if(Ys(n,r.options)&&Ys(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new Np(i);for(const c of Dr.values())o.addComponent(c);const l=new I_(n,s,o);return Qs.set(i,l),l}function S_(t=Or){const e=Qs.get(t);if(!e&&t===Or&&Ua())return qa();if(!e)throw Nt.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=y_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}Js(new rs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const T_="firebase-heartbeat-database",N_=1,os="firebase-heartbeat-store";let lr=null;function Ya(){return lr||(lr=Up(T_,N_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(os)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),lr}async function R_(t){try{const n=(await Ya()).transaction(os),s=await n.objectStore(os).get(Qa(t));return await n.done,s}catch(e){if(e instanceof ms)gt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function Fl(t,e){try{const s=(await Ya()).transaction(os,"readwrite");await s.objectStore(os).put(e,Qa(t)),await s.done}catch(n){if(n instanceof ms)gt.warn(n.message);else{const s=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(s.message)}}}function Qa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const A_=1024,P_=30;class O_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ll();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>P_){const o=M_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ll(),{heartbeatsToSend:s,unsentEntries:i}=D_(this._heartbeatsCache.heartbeats),r=zs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return gt.warn(n),""}}}function Ll(){return new Date().toISOString().substring(0,10)}function D_(t,e=A_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class k_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _p()?gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wl(t){return zs(JSON.stringify({version:2,heartbeats:t})).length}function M_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function F_(t){Js(new rs("platform-logger",e=>new $p(e),"PRIVATE")),Js(new rs("heartbeat",e=>new O_(e),"PRIVATE")),_n(Pr,kl,t),_n(Pr,kl,"esm2017"),_n("fire-js","")}F_("");var L_="firebase",W_="11.4.0";/**
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
 */_n(L_,W_,"app");var Bl={};const Hl="@firebase/database",Ul="1.0.13";/**
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
 */let Ja="";function B_(t){Ja=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xa=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new H_(e)}}catch{}return new U_},zt=Xa("localStorage"),V_=Xa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Ga("@firebase/database"),j_=function(){let t=1;return function(){return t++}}(),Za=function(t){const e=Ip(t),n=new Ep;n.update(e);const s=n.digest();return ho.encodeByteArray(s)},xs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xs.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let qn=null,Vl=!0;const $_=function(t,e){S(!0,"Can't turn on custom loggers persistently."),gn.logLevel=oe.VERBOSE,qn=gn.log.bind(gn)},Ee=function(...t){if(Vl===!0&&(Vl=!1,qn===null&&V_.get("logging_enabled")===!0&&$_()),qn){const e=xs.apply(null,t);qn(e)}},ys=function(t){return function(...e){Ee(t,...e)}},kr=function(...t){const e="FIREBASE INTERNAL ERROR: "+xs(...t);gn.error(e)},mt=function(...t){const e=`FIREBASE FATAL ERROR: ${xs(...t)}`;throw gn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+xs(...t);gn.warn(e)},G_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},K_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vn="[MIN_NAME]",Zt="[MAX_NAME]",wn=function(t,e){if(t===e)return 0;if(t===vn||e===Zt)return-1;if(e===vn||t===Zt)return 1;{const n=jl(t),s=jl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},z_=function(t,e){return t===e?0:t<e?-1:1},Dn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},_o=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=_o(t[e[s]]);return n+="}",n},tu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nu=function(t){S(!eu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(u.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},q_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Q_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const J_=new RegExp("^-?(0*)\\d{1,10}$"),X_=-2147483648,Z_=2147483647,jl=function(t){if(J_.test(t)){const e=Number(t);if(e>=X_&&e<=Z_)return e}return null},Sn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},eg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ng{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="5",su="v",iu="s",ru="r",ou="f",lu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cu="ls",au="p",Mr="ac",uu="websocket",hu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function du(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===uu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sg(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const cr={},ar={};function mo(t){const e=t.toString();return cr[e]||(cr[e]=new ig),cr[e]}function rg(t,e){const n=t.toString();return ar[n]||(ar[n]=e()),ar[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $l="start",lg="close",cg="pLPCommand",ag="pRTLPCB",pu="id",_u="pw",gu="ser",ug="cb",hg="seg",fg="ts",dg="d",pg="dframe",mu=1870,xu=30,_g=mu-xu,gg=25e3,mg=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ys(e),this.stats_=mo(n),this.urlFn=c=>(this.appCheckToken&&(c[Mr]=this.appCheckToken),du(n,hu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new og(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mg)),K_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$l)this.id=l,this.password=c;else if(o===lg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[$l]="t",s[gu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ug]=this.scriptTagHolder.uniqueCallbackIdentifier),s[su]=go,this.transportSessionId&&(s[iu]=this.transportSessionId),this.lastSessionId&&(s[cu]=this.lastSessionId),this.applicationId&&(s[au]=this.applicationId),this.appCheckToken&&(s[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(s[ru]=ou);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!q_()&&!Y_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wa(n),i=tu(s,_g);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[pg]="t",s[pu]=e,s[_u]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j_(),window[cg+this.uniqueCallbackIdentifier]=e,window[ag+this.uniqueCallbackIdentifier]=n,this.myIFrame=xo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pu]=this.myID,e[_u]=this.myPW,e[gu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xu+s.length<=mu;){const o=this.pendingSegs.shift();s=s+"&"+hg+i+"="+o.seg+"&"+fg+i+"="+o.ts+"&"+dg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(gg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=16384,yg=45e3;let Xs=null;typeof MozWebSocket<"u"?Xs=MozWebSocket:typeof WebSocket<"u"&&(Xs=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ys(this.connId),this.stats_=mo(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[su]=go,typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(o[ru]=ou),n&&(o[iu]=n),s&&(o[cu]=s),i&&(o[Mr]=i),r&&(o[au]=r),du(e,uu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;pp(),this.mySock=new Xs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Xs!==null&&!Ke.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=is(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tu(n,xg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vg=6e4,bg=5e3,Cg=10*1024,Eg=100*1024,ur="t",Gl="d",Ig="s",Kl="r",wg="e",zl="o",ql="a",Yl="n",Ql="p",Sg="h";class Tg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ys("c:"+this.id+":"),this.transportManager_=new ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Yn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ur in e){const n=e[ur];n===ql?this.upgradeIfSecondaryHealthy_():n===Kl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Dn("t",e),s=Dn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ql,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Dn("t",e),s=Dn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Dn(ur,e);if(Gl in e){const s=e[Gl];if(n===Sg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ig?this.onConnectionShutdown_(s):n===Kl?this.onReset_(s):n===wg?kr("Server Error: "+s):n===zl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),go!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Yn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zs extends vu{static getInstance(){return new Zs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Va()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=32,Xl=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ee("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pt(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ng(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Eu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Ne(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yo(t,e){if(Pt(t)!==Pt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Pt(t)>Pt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Rg{constructor(e,n){this.errorPrefix_=n,this.parts_=Cu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ki(this.parts_[s]);Iu(this)}}function Ag(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ki(e),Iu(t)}function Pg(t){const e=t.parts_.pop();t.byteLength_-=ki(e),t.parts_.length>0&&(t.byteLength_-=1)}function Iu(t){if(t.byteLength_>Xl)throw new Error(t.errorPrefix_+"has a key path longer than "+Xl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jl+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends vu{static getInstance(){return new vo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=1e3,Og=60*5*1e3,Zl=30*1e3,Dg=1.3,kg=3e4,Mg="server_kill",ec=3;class _t extends yu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=_t.nextPersistentConnectionId_++,this.log_=ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kn,this.maxReconnectDelay_=Og,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Di,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;_t.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=yn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kr("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kg&&(this.reconnectDelay_=kn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Tg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{ke(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mg)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ke(p),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rl(this.interruptReasons_)&&(this.reconnectDelay_=kn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>_o(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ec&&(this.reconnectDelay_=Zl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ec&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ja.replace(/\./g,"-")]=1,Va()?e["framework.cordova"]=1:dp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zs.getInstance().currentlyOnline();return Rl(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(vn,e),i=new G(vn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class wu extends Mi{static get __EMPTY_NODE(){return As}static set __EMPTY_NODE(e){As=e}compare(e,n){return wn(e.name,n.name)}isDefinedOn(e){throw En("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Zt,As)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,As)}toString(){return".key"}}const mn=new wu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??me.RED,this.left=i??De.EMPTY_NODE,this.right=r??De.EMPTY_NODE}copy(e,n,s,i,r){return new me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Fg{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ps(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ps(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ps(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ps(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new Fg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){return wn(t.name,e.name)}function bo(t,e){return wn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;function Wg(t){Fr=t}const Su=function(t){return typeof t=="number"?"number:"+nu(t):"string:"+t},Tu=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else S(t===Fr||t.isEmpty(),"priority of unexpected type.");S(t===Fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;class ge{static set __childrenNodeConstructor(e){tc=e}static get __childrenNodeConstructor(){return tc}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:$(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Su(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nu(this.value_):e+=this.value_,this.lazyHash_=Za(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu,Ru;function Bg(t){Nu=t}function Hg(t){Ru=t}class Ug extends Mi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Zt,new ge("[PRIORITY-POST]",Ru))}makePost(e,n){const s=Nu(e);return new G(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new Ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=Math.log(2);class jg{constructor(e){const n=r=>parseInt(Math.log(r)/Vg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ei=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let p,g;if(u===0)return null;if(u===1)return p=t[c],g=n?n(p):p,new me(g,p.node,me.BLACK,null,null);{const x=parseInt(u/2,10)+c,E=i(c,x),P=i(x+1,a);return p=t[x],g=n?n(p):p,new me(g,p.node,me.BLACK,E,P)}},r=function(c){let a=null,u=null,p=t.length;const g=function(E,P){const V=p-E,j=p;p-=E;const d=i(V+1,j),h=t[V],f=n?n(h):h;x(new me(f,h.node,P,null,d))},x=function(E){a?(a.left=E,a=E):(u=E,a=E)};for(let E=0;E<c.count;++E){const P=c.nextBitIsOne(),V=Math.pow(2,c.count-(E+1));P?g(V,me.BLACK):(g(V,me.BLACK),g(V,me.RED))}return u},o=new jg(t.length),l=r(o);return new De(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;const cn={};class pt{static get Default(){return S(cn&&ue,"ChildrenNode.ts has not been loaded"),hr=hr||new pt({".priority":cn},{".priority":ue}),hr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=yn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ei(s,e.getCompare()):l=cn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new pt(u,a)}addToIndexes(e,n){const s=qs(this.indexes_,(i,r)=>{const o=yn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===cn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ei(l,o.getCompare())}else return cn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=qs(this.indexes_,i=>{if(i===cn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn;class L{static get EMPTY_NODE(){return Mn||(Mn=new L(new De(bo),null,pt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Tu(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Mn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{S($(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Su(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Za(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vs?-1:0}withIndex(e){if(e===mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $g extends L{constructor(){super(new De(bo),L.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const vs=new $g;Object.defineProperties(G,{MIN:{value:new G(vn,L.EMPTY_NODE)},MAX:{value:new G(Zt,vs)}});wu.__EMPTY_NODE=L.EMPTY_NODE;ge.__childrenNodeConstructor=L;Wg(vs);Hg(vs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=!0;function xe(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,xe(e))}if(!(t instanceof Array)&&Gg){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=ei(n,Lg,o=>o.name,bo);if(s){const o=ei(n,ue.getCompare());return new L(r,xe(e),new pt({".priority":o},{".priority":ue}))}else return new L(r,xe(e),pt.Default)}else{let n=L.EMPTY_NODE;return Me(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Bg(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg extends Mi{constructor(e){super(),this.indexPath_=e,S(!K(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?wn(e.name,n.name):r}makePost(e,n){const s=xe(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,vs);return new G(Zt,e)}toString(){return Cu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Mi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?wn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=xe(e);return new G(n,s)}toString(){return".value"}}const qg=new zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function as(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Yg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(cs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(bn(n,s)):o.trackChildChange(as(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(cs(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(as(i,r,o))}else s.trackChildChange(bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.indexedFilter_=new Co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,x)=>p(x,g)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(u&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(as(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(cs(n,p));const P=l.updateImmediateChild(n,L.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(bn(g.name,g.node)),P.updateImmediateChild(g.name,g.node)):P}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(cs(a.name,a.node)),r.trackChildChange(bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Eo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jg(t){return t.loadsAllData()?new Co(t.getIndex()):t.hasLimit()?new Qg(t):new us(t)}function nc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===qg?n="$value":t.index_===mn?n="$key":(S(t.index_ instanceof Kg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends yu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ys("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ti.getListenId_(e,s),l={};this.listens_[o]=l;const c=nc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let p=u;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),yn(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=ti.getListenId_(e,n);delete this.listens_[s]}get(e){const n=nc(e._queryParams),s=e._path.toString(),i=new Di;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=is(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return{value:null,children:new Map}}function Pu(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,ni());const i=t.children.get(s);e=le(e),Pu(i,e,n)}}function Lr(t,e,n){t.value!==null?n(e,t.value):Zg(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);Lr(i,r,n)})}function Zg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ic=10*1e3,tm=30*1e3,nm=5*60*1e3;class sm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new em(e);const s=ic+(tm-ic)*Math.random();Yn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Yn(this.reportStats_.bind(this),Math.floor(Math.random()*2*nm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function Ou(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Io(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qe.ACK_USER_WRITE,this.source=Ou()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new si(Q(),n,this.revert)}}else return S($(this.path)===e,"operationForChild called for unrelated child."),new si(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.source=e,this.path=n,this.type=qe.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new hs(this.source,Q()):new hs(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qe.OVERWRITE}operationForChild(e){return K(this.path)?new en(this.source,Q(),this.snap.getImmediateChild(e)):new en(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qe.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new en(this.source,Q(),n.value):new fs(this.source,Q(),n)}else return S($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Yg(o.childName,o.snapshotNode))}),Fn(t,i,"child_removed",e,s,n),Fn(t,i,"child_added",e,s,n),Fn(t,i,"child_moved",r,s,n),Fn(t,i,"child_changed",e,s,n),Fn(t,i,"value",e,s,n),i}function Fn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>lm(t,l,c)),o.forEach(l=>{const c=om(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function om(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lm(t,e,n){if(e.childName==null||n.childName==null)throw En("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){return{eventCache:t,serverCache:e}}function Qn(t,e,n,s){return Fi(new Ot(e,n,s),t.serverCache)}function Du(t,e,n,s){return Fi(t.eventCache,new Ot(e,n,s))}function ii(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;const cm=()=>(fr||(fr=new De(z_)),fr);class ce{static fromObject(e){let n=new ce(null);return Me(e,(s,i)=>{n=n.set(new ee(s),i)}),n}constructor(e,n=cm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:_e(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new ce(null)}}set(e,n){if(K(e))return new ce(n,this.children);{const s=$(e),r=(this.children.get(s)||new ce(null)).set(le(e),n),o=this.children.insert(s,r);return new ce(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(K(e))return n;{const s=$(e),r=(this.children.get(s)||new ce(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ce(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(le(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),_e(n,i),s):new ce(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new ce(null))}}function Jn(t,e,n){if(K(e))return new Qe(new ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new ce(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function rc(t,e,n){let s=t;return Me(n,(i,r)=>{s=Jn(s,_e(e,i),r)}),s}function oc(t,e){if(K(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new Qe(n)}}function Wr(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function lc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Rt(t,e){if(K(e))return t;{const n=sn(t,e);return n!=null?new Qe(new ce(n)):new Qe(t.writeTree_.subtree(e))}}function Br(t){return t.writeTree_.isEmpty()}function Cn(t,e){return ku(Q(),t.writeTree_,e)}function ku(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ku(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e){return Wu(e,t)}function am(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Jn(t.visibleWrites,e,n)),t.lastWriteId=s}function um(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function hm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&fm(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return dm(t),!0;if(s.snap)t.visibleWrites=oc(t.visibleWrites,s.path);else{const l=s.children;Me(l,c=>{t.visibleWrites=oc(t.visibleWrites,_e(s.path,c))})}return!0}else return!1}function fm(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(_e(t.path,n),e))return!0;return!1}function dm(t){t.visibleWrites=Mu(t.allWrites,pm,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pm(t){return t.visible}function Mu(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Ne(n,o),s=Jn(s,l,r.snap)):ze(o,n)&&(l=Ne(o,n),s=Jn(s,Q(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Ne(n,o),s=rc(s,l,r.children);else if(ze(o,n))if(l=Ne(o,n),K(l))s=rc(s,Q(),r.children);else{const c=yn(r.children,$(l));if(c){const a=c.getChild(le(l));s=Jn(s,Q(),a)}}}else throw En("WriteRecord should have .snap or .children")}}return s}function Fu(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=Rt(t.visibleWrites,e);if(Br(o))return n;if(n==null&&!Wr(o,Q()))return null;{const l=n||L.EMPTY_NODE;return Cn(o,l)}}}else{const r=Rt(t.visibleWrites,e);if(!i&&Br(r))return n;if(!i&&n==null&&!Wr(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(ze(a.path,e)||ze(e,a.path))},l=Mu(t.allWrites,o,e),c=n||L.EMPTY_NODE;return Cn(l,c)}}}function _m(t,e,n){let s=L.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Rt(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const c=Cn(Rt(r,new ee(o)),l);s=s.updateImmediateChild(o,c)}),lc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Rt(t.visibleWrites,e);return lc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gm(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Wr(t.visibleWrites,r))return null;{const o=Rt(t.visibleWrites,r);return Br(o)?i.getChild(n):Cn(o,i.getChild(n))}}function mm(t,e,n,s){const i=_e(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Rt(t.visibleWrites,i);return Cn(o,s.getNode().getImmediateChild(n))}else return null}function xm(t,e){return sn(t.visibleWrites,e)}function ym(t,e,n,s,i,r,o){let l;const c=Rt(t.visibleWrites,e),a=sn(c,Q());if(a!=null)l=a;else if(n!=null)l=Cn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&u.length<i;)p(x,s)!==0&&u.push(x),x=g.getNext();return u}else return[]}function vm(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function ri(t,e,n,s){return Fu(t.writeTree,t.treePath,e,n,s)}function So(t,e){return _m(t.writeTree,t.treePath,e)}function cc(t,e,n,s){return gm(t.writeTree,t.treePath,e,n,s)}function oi(t,e){return xm(t.writeTree,_e(t.treePath,e))}function bm(t,e,n,s,i,r){return ym(t.writeTree,t.treePath,e,n,s,i,r)}function To(t,e,n){return mm(t.writeTree,t.treePath,e,n)}function Lu(t,e){return Wu(_e(t.treePath,e),t.writeTree)}function Wu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,as(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,cs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,as(s,e.snapshotNode,i.oldSnap));else throw En("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Bu=new Em;class No{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return To(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=bm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){return{filter:t}}function wm(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Sm(t,e,n,s,i){const r=new Cm;let o,l;if(n.type===qe.OVERWRITE){const a=n;a.source.fromUser?o=Hr(t,e,a.path,a.snap,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!K(a.path),o=li(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===qe.MERGE){const a=n;a.source.fromUser?o=Nm(t,e,a.path,a.children,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Ur(t,e,a.path,a.children,s,i,l,r))}else if(n.type===qe.ACK_USER_WRITE){const a=n;a.revert?o=Pm(t,e,a.path,s,i,r):o=Rm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===qe.LISTEN_COMPLETE)o=Am(t,e,n.path,s,r);else throw En("Unknown operation type: "+n.type);const c=r.getChanges();return Tm(e,o,c),{viewCache:o,changes:c}}function Tm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ii(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Au(ii(e)))}}function Hu(t,e,n,s,i,r){const o=e.eventCache;if(oi(s,n)!=null)return e;{let l,c;if(K(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=tn(e),u=a instanceof L?a:L.EMPTY_NODE,p=So(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=ri(s,tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){S(Pt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const p=cc(s,n,u,c);p!=null?l=t.filter.updatePriority(u,p):l=o.getNode()}else{const u=le(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=cc(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(u,g):p=o.getNode().getImmediateChild(a)}else p=To(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,u,i,r):l=o.getNode()}}return Qn(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function li(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),x,null)}else{const x=$(n);if(!c.isCompleteForPath(n)&&Pt(n)>1)return e;const E=le(n),V=c.getNode().getImmediateChild(x).updateChild(E,s);x===".priority"?a=u.updatePriority(c.getNode(),V):a=u.updateChild(c.getNode(),x,V,E,Bu,null)}const p=Du(e,a,c.isFullyInitialized()||K(n),u.filtersNodes()),g=new No(i,p,r);return Hu(t,p,n,i,g,l)}function Hr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new No(i,e,r);if(K(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Qn(e,a,!0,t.filter.filtersNodes());else{const p=$(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Qn(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=le(n),x=l.getNode().getImmediateChild(p);let E;if(K(g))E=s;else{const P=u.getCompleteChild(p);P!=null?bu(g)===".priority"&&P.getChild(Eu(g)).isEmpty()?E=P:E=P.updateChild(g,s):E=L.EMPTY_NODE}if(x.equals(E))c=e;else{const P=t.filter.updateChild(l.getNode(),p,E,g,u,o);c=Qn(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ac(t,e){return t.eventCache.isCompleteForChild(e)}function Nm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=_e(n,c);ac(e,$(u))&&(l=Hr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=_e(n,c);ac(e,$(u))||(l=Hr(t,l,u,a,i,r,o))}),l}function uc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ur(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;K(n)?a=s:a=new ce(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(u.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),E=uc(t,x,g);c=li(t,c,new ee(p),E,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!u.hasChild(p)&&!x){const E=e.serverCache.getNode().getImmediateChild(p),P=uc(t,E,g);c=li(t,c,new ee(p),P,i,r,o,l)}}),c}function Rm(t,e,n,s,i,r,o){if(oi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return li(t,e,n,c.getNode().getChild(n),i,r,l,o);if(K(n)){let a=new ce(null);return c.getNode().forEachChild(mn,(u,p)=>{a=a.set(new ee(u),p)}),Ur(t,e,n,a,i,r,l,o)}else return e}else{let a=new ce(null);return s.foreach((u,p)=>{const g=_e(n,u);c.isCompleteForPath(g)&&(a=a.set(u,c.getNode().getChild(g)))}),Ur(t,e,n,a,i,r,l,o)}}function Am(t,e,n,s,i){const r=e.serverCache,o=Du(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Hu(t,o,n,s,Bu,i)}function Pm(t,e,n,s,i,r){let o;if(oi(s,n)!=null)return e;{const l=new No(s,e,i),c=e.eventCache.getNode();let a;if(K(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ri(s,tn(e));else{const p=e.serverCache.getNode();S(p instanceof L,"serverChildren would be complete if leaf node"),u=So(s,p)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let p=To(s,u,e.serverCache);p==null&&e.serverCache.isCompleteForChild(u)&&(p=c.getImmediateChild(u)),p!=null?a=t.filter.updateChild(c,u,p,le(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,L.EMPTY_NODE,le(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ri(s,tn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||oi(s,Q())!=null,Qn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Co(s.getIndex()),r=Jg(s);this.processor_=Im(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new Ot(c,o.isFullyInitialized(),i.filtersNodes()),p=new Ot(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fi(p,u),this.eventGenerator_=new im(this.query_)}get query(){return this.query_}}function Dm(t){return t.viewCache_.serverCache.getNode()}function km(t){return ii(t.viewCache_)}function Mm(t,e){const n=tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function hc(t){return t.eventRegistrations_.length===0}function Fm(t,e){t.eventRegistrations_.push(e)}function fc(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function dc(t,e,n,s){e.type===qe.MERGE&&e.source.queryId!==null&&(S(tn(t.viewCache_),"We should always have a full cache before handling merges"),S(ii(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Sm(t.processor_,i,e,n,s);return wm(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(Au(n.getNode())),Uu(t,s,n.getNode(),e)}function Uu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return rm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class Vu{constructor(){this.views=new Map}}function Wm(t){S(!ci,"__referenceConstructor has already been defined"),ci=t}function Bm(){return S(ci,"Reference.ts has not been loaded"),ci}function Hm(t){return t.views.size===0}function Ro(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),dc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(dc(o,e,n,s));return r}}function ju(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ri(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=So(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=Fi(new Ot(l,c,!1),new Ot(s,i,!1));return new Om(e,a)}return o}function Um(t,e,n,s,i,r){const o=ju(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Fm(o,n),Lm(o,n)}function Vm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Dt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(fc(a,n,s)),hc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(fc(c,n,s)),hc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Dt(t)&&r.push(new(Bm())(e._repo,e._path)),{removed:r,events:o}}function $u(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function At(t,e){let n=null;for(const s of t.views.values())n=n||Mm(s,e);return n}function Gu(t,e){if(e._queryParams.loadsAllData())return Wi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ku(t,e){return Gu(t,e)!=null}function Dt(t){return Wi(t)!=null}function Wi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;function jm(t){S(!ai,"__referenceConstructor has already been defined"),ai=t}function $m(){return S(ai,"Reference.ts has not been loaded"),ai}let Gm=1;class pc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=vm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zu(t,e,n,s,i){return am(t.pendingWriteTree_,e,n,s,i),i?Cs(t,new en(Ou(),e,n)):[]}function qt(t,e,n=!1){const s=um(t.pendingWriteTree_,e);if(hm(t.pendingWriteTree_,e)){let r=new ce(null);return s.snap!=null?r=r.set(Q(),!0):Me(s.children,o=>{r=r.set(new ee(o),!0)}),Cs(t,new si(s.path,r,n))}else return[]}function bs(t,e,n){return Cs(t,new en(Io(),e,n))}function Km(t,e,n){const s=ce.fromObject(n);return Cs(t,new fs(Io(),e,s))}function zm(t,e){return Cs(t,new hs(Io(),e))}function qm(t,e,n){const s=Po(t,n);if(s){const i=Oo(s),r=i.path,o=i.queryId,l=Ne(r,e),c=new hs(wo(o),l);return Do(t,r,c)}else return[]}function ui(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ku(o,e))){const c=Vm(o,e,n,s);Hm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,x)=>Dt(x));if(u&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=Jm(g);for(let E=0;E<x.length;++E){const P=x[E],V=P.query,j=Ju(t,P);t.listenProvider_.startListening(Xn(V),ds(t,V),j.hashFn,j.onComplete)}}}!p&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(Xn(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Bi(g));t.listenProvider_.stopListening(Xn(g),x)}))}Xm(t,a)}return l}function qu(t,e,n,s){const i=Po(t,s);if(i!=null){const r=Oo(i),o=r.path,l=r.queryId,c=Ne(o,e),a=new en(wo(l),c,n);return Do(t,o,a)}else return[]}function Ym(t,e,n,s){const i=Po(t,s);if(i){const r=Oo(i),o=r.path,l=r.queryId,c=Ne(o,e),a=ce.fromObject(n),u=new fs(wo(l),c,a);return Do(t,o,u)}else return[]}function Vr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const E=Ne(g,i);r=r||At(x,E),o=o||Dt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Dt(l),r=r||At(l,Q())):(l=new Vu,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,E)=>{const P=At(E,Q());P&&(r=r.updateImmediateChild(x,P))}));const a=Ku(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Bi(e);S(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=Zm();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const u=Li(t.pendingWriteTree_,i);let p=Um(l,e,n,u,r,c);if(!a&&!o&&!s){const g=Gu(l,e);p=p.concat(ex(t,e,g))}return p}function Ao(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ne(o,e),a=At(l,c);if(a)return a});return Fu(i,e,r,n,!0)}function Qm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const p=Ne(a,n);s=s||At(u,p)});let i=t.syncPointTree_.get(n);i?s=s||At(i,Q()):(i=new Vu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Ot(s,!0,!1):null,l=Li(t.pendingWriteTree_,e._path),c=ju(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return km(c)}function Cs(t,e){return Yu(e,t.syncPointTree_,null,Li(t.pendingWriteTree_,Q()))}function Yu(t,e,n,s){if(K(t.path))return Qu(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=At(i,Q()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Lu(s,o);r=r.concat(Yu(l,c,a,u))}return i&&(r=r.concat(Ro(i,t,s,n))),r}}function Qu(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=At(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Lu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Qu(u,l,c,a)))}),i&&(r=r.concat(Ro(i,t,s,n))),r}function Ju(t,e){const n=e.query,s=ds(t,n);return{hashFn:()=>(Dm(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?qm(t,n._path,s):zm(t,n._path);{const r=Q_(i,n);return ui(t,n,null,r)}}}}function ds(t,e){const n=Bi(e);return t.queryToTagMap.get(n)}function Bi(t){return t._path.toString()+"$"+t._queryIdentifier}function Po(t,e){return t.tagToQueryMap.get(e)}function Oo(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Do(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Li(t.pendingWriteTree_,e);return Ro(s,n,i,null)}function Jm(t){return t.fold((e,n,s)=>{if(n&&Dt(n))return[Wi(n)];{let i=[];return n&&(i=$u(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function Xn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($m())(t._repo,t._path):t}function Xm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Bi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Zm(){return Gm++}function ex(t,e,n){const s=e._path,i=ds(t,e),r=Ju(t,n),o=t.listenProvider_.startListening(Xn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Dt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,p)=>{if(!K(a)&&u&&Dt(u))return[Wi(u).query];{let g=[];return u&&(g=g.concat($u(u).map(x=>x.query))),Me(p,(x,E)=>{g=g.concat(E)}),g}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(Xn(u),ds(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ko(n)}node(){return this.node_}}class Mo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Mo(this.syncTree_,n)}node(){return Ao(this.syncTree_,this.path_)}}const tx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_c=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sx(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},sx=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ix=function(t,e,n,s){return Fo(e,new Mo(n,t),s)},Xu=function(t,e,n){return Fo(t,new ko(e),n)};function Fo(t,e,n){const s=t.getPriority().val(),i=_c(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=_c(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(ue,(l,c)=>{const a=Fo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Wo(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=$(n);for(;i!==null;){const r=yn(s.node.children,i)||{children:{},childCount:0};s=new Lo(i,s,r),n=le(n),i=$(n)}return s}function Tn(t){return t.node.value}function Zu(t,e){t.node.value=e,jr(t)}function eh(t){return t.node.childCount>0}function rx(t){return Tn(t)===void 0&&!eh(t)}function Hi(t,e){Me(t.node.children,(n,s)=>{e(new Lo(n,t,s))})}function th(t,e,n,s){n&&e(t),Hi(t,i=>{th(i,e,!0)})}function ox(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Es(t){return new ee(t.parent===null?t.name:Es(t.parent)+"/"+t.name)}function jr(t){t.parent!==null&&lx(t.parent,t.name,t)}function lx(t,e,n){const s=rx(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,jr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=/[\[\].#$\/\u0000-\u001F\u007F]/,ax=/[\[\].#$\u0000-\u001F\u007F]/,dr=10*1024*1024,nh=function(t){return typeof t=="string"&&t.length!==0&&!cx.test(t)},sh=function(t){return typeof t=="string"&&t.length!==0&&!ax.test(t)},ux=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sh(t)},hx=function(t,e,n,s){Bo(fo(t,"value"),e,n)},Bo=function(t,e,n){const s=n instanceof ee?new Rg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(eu(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>dr/3&&ki(e)>dr)throw new Error(t+"contains a string greater than "+dr+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nh(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ag(s,o),Bo(t,l,s),Pg(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},ih=function(t,e,n,s){if(!sh(n))throw new Error(fo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fx=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ih(t,e,n)},rh=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ux(n))throw new Error(fo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ho(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!yo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function oh(t,e,n){Ho(t,n),lh(t,s=>yo(s,e))}function ct(t,e,n){Ho(t,n),lh(t,s=>ze(s,e)||ze(e,s))}function lh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(_x(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _x(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();qn&&Ee("event: "+n.toString()),Sn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="repo_interrupt",mx=25;class xx{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new px,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ni(),this.transactionQueueTree_=new Lo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yx(t,e,n){if(t.stats_=mo(t.repoInfo_),t.forceRestClient_||eg())t.server_=new ti(t.repoInfo_,(s,i,r,o)=>{gc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{gc(t,s,i,r,o)},s=>{mc(t,s)},s=>{bx(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=rg(t.repoInfo_,()=>new sm(t.stats_,t.server_)),t.infoData_=new Xg,t.infoSyncTree_=new pc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=bs(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Vo(t,"connected",!1),t.serverSyncTree_=new pc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ct(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function vx(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Uo(t){return tx({timestamp:vx(t)})}function gc(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=qs(n,a=>xe(a));o=Ym(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=qu(t.serverSyncTree_,r,c,i)}else if(s){const c=qs(n,a=>xe(a));o=Km(t.serverSyncTree_,r,c)}else{const c=xe(n);o=bs(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Vi(t,r)),ct(t.eventQueue_,l,o)}function mc(t,e){Vo(t,"connected",e),e===!1&&Ix(t)}function bx(t,e){Me(e,(n,s)=>{Vo(t,n,s)})}function Vo(t,e,n){const s=new ee("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=bs(t.infoSyncTree_,s,i);ct(t.eventQueue_,s,r)}function ch(t){return t.nextWriteId_++}function Cx(t,e,n){const s=Qm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Vr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bs(t.serverSyncTree_,e._path,r);else{const l=ds(t.serverSyncTree_,e);o=qu(t.serverSyncTree_,e._path,r,l)}return ct(t.eventQueue_,e._path,o),ui(t.serverSyncTree_,e,n,null,!0),r},i=>(Ui(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ex(t,e,n,s,i){Ui(t,"set",{path:e.toString(),value:n,priority:s});const r=Uo(t),o=xe(n,s),l=Ao(t.serverSyncTree_,e),c=Xu(o,l,r),a=ch(t),u=zu(t.serverSyncTree_,e,c,a,!0);Ho(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const E=g==="ok";E||ke("set at "+e+" failed: "+g);const P=qt(t.serverSyncTree_,a,!E);ct(t.eventQueue_,e,P),Nx(t,i,g,x)});const p=dh(t,e);Vi(t,p),ct(t.eventQueue_,p,[])}function Ix(t){Ui(t,"onDisconnectEvents");const e=Uo(t),n=ni();Lr(t.onDisconnect_,Q(),(i,r)=>{const o=ix(i,r,t.serverSyncTree_,e);Pu(n,i,o)});let s=[];Lr(n,Q(),(i,r)=>{s=s.concat(bs(t.serverSyncTree_,i,r));const o=dh(t,i);Vi(t,o)}),t.onDisconnect_=ni(),ct(t.eventQueue_,Q(),s)}function wx(t,e,n){let s;$(e._path)===".info"?s=Vr(t.infoSyncTree_,e,n):s=Vr(t.serverSyncTree_,e,n),oh(t.eventQueue_,e._path,s)}function Sx(t,e,n){let s;$(e._path)===".info"?s=ui(t.infoSyncTree_,e,n):s=ui(t.serverSyncTree_,e,n),oh(t.eventQueue_,e._path,s)}function Tx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gx)}function Ui(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function Nx(t,e,n,s){e&&Sn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ah(t,e,n){return Ao(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function jo(t,e=t.transactionQueueTree_){if(e||ji(t,e),Tn(e)){const n=hh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Rx(t,Es(e),n)}else eh(e)&&Hi(e,n=>{jo(t,n)})}function Rx(t,e,n){const s=n.map(a=>a.currentWriteId),i=ah(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const p=Ne(e,u.path);r=r.updateChild(p,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ui(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,u=u.concat(qt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();ji(t,Wo(t.transactionQueueTree_,e)),jo(t,t.transactionQueueTree_),ct(t.eventQueue_,e,u);for(let g=0;g<p.length;g++)Sn(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{ke("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}Vi(t,e)}},o)}function Vi(t,e){const n=uh(t,e),s=Es(n),i=hh(t,n);return Ax(t,i,s),s}function Ax(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Ne(n,c.path);let u=!1,p;if(S(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,p=c.abortReason,i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=mx)u=!0,p="maxretry",i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=ah(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Bo("transaction failed: Data returned ",x,c.path);let E=xe(x);typeof x=="object"&&x!=null&&yt(x,".priority")||(E=E.updatePriority(g.getPriority()));const V=c.currentWriteId,j=Uo(t),d=Xu(E,g,j);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=d,c.currentWriteId=ch(t),o.splice(o.indexOf(V),1),i=i.concat(zu(t.serverSyncTree_,c.path,d,c.currentWriteId,c.applyLocally)),i=i.concat(qt(t.serverSyncTree_,V,!0))}else u=!0,p="nodata",i=i.concat(qt(t.serverSyncTree_,c.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}ji(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Sn(s[l]);jo(t,t.transactionQueueTree_)}function uh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Tn(s)===void 0;)s=Wo(s,n),e=le(e),n=$(e);return s}function hh(t,e){const n=[];return fh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function fh(t,e,n){const s=Tn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Hi(e,i=>{fh(t,i,n)})}function ji(t,e){const n=Tn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Zu(e,n.length>0?n:void 0)}Hi(e,s=>{ji(t,s)})}function dh(t,e){const n=Es(uh(t,e)),s=Wo(t.transactionQueueTree_,e);return ox(s,i=>{pr(t,i)}),pr(t,s),th(s,i=>{pr(t,i)}),n}function pr(t,e){const n=Tn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zu(e,void 0):n.length=r+1,ct(t.eventQueue_,Es(e),i);for(let o=0;o<s.length;o++)Sn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ox(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const xc=function(t,e){const n=Dx(t),s=n.namespace;n.domain==="firebase.com"&&mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||G_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},Dx=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(u,p)),u<p&&(i=Px(t.substring(u,p)));const g=Ox(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $o{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:bu(this._path)}get ref(){return new vt(this._repo,this._path)}get _queryIdentifier(){const e=sc(this._queryParams),n=_o(e);return n==="{}"?"default":n}get _queryObject(){return sc(this._queryParams)}isEqual(e){if(e=In(e),!(e instanceof $o))return!1;const n=this._repo===e._repo,s=yo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ng(this._path)}}class vt extends $o{constructor(e,n){super(e,n,new Eo,!1)}get parent(){const e=Eu(this._path);return e===null?null:new vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=$r(this.ref,e);return new ps(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ps(i,$r(this.ref,s),ue)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Os(t,e){return t=In(t),t._checkNotDeleted("ref"),e!==void 0?$r(t._root,e):t._root}function $r(t,e){return t=In(t),$(t._path)===null?fx("child","path",e):ih("child","path",e),new vt(t._repo,_e(t._path,e))}function Fx(t){return rh("remove",t._path),_h(t,null)}function _h(t,e){t=In(t),rh("set",t._path),hx("set",e,t._path);const n=new Di;return Ex(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Lx(t){t=In(t);const e=new ph(()=>{}),n=new $i(e);return Cx(t._repo,t,n).then(s=>new ps(s,new vt(t._repo,t._path),t._queryParams.getIndex()))}class $i{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new kx("value",this,new ps(e.snapshotNode,new vt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mx(this,e,n):null}matches(e){return e instanceof $i?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Wx(t,e,n,s,i){const r=new ph(n,void 0),o=new $i(r);return wx(t._repo,t,o),()=>Sx(t._repo,t,o)}function Bx(t,e,n,s){return Wx(t,"value",e)}Wm(vt);jm(vt);/**
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
 */const Hx="FIREBASE_DATABASE_EMULATOR_HOST",Gr={};let Ux=!1;function Vx(t,e,n,s){t.repoInfo_=new fu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function jx(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xc(r,i),l=o.repoInfo,c;typeof process<"u"&&Bl&&(c=Bl[Hx]),c?(r=`http://${c}?ns=${l.namespace}`,o=xc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new ng(t.name,t.options,e);dx("Invalid Firebase Database URL",o),K(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Gx(l,t,a,new tg(t,n));return new Kx(u,t)}function $x(t,e){const n=Gr[e];(!n||n[t.key]!==t)&&mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Tx(t),delete n[t.key]}function Gx(t,e,n,s){let i=Gr[e.name];i||(i={},Gr[e.name]=i);let r=i[t.toURLString()];return r&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xx(t,Ux,n,s),i[t.toURLString()]=r,r}class Kx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&($x(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function zx(t=S_(),e){const n=b_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=up("database");s&&qx(n,...s)}return n}function qx(t,e,n,s={}){t=In(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Ys(s,r.repoInfo_.emulatorOptions))return;mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ls(Ls.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:hp(s.mockUserToken,t.app.options.projectId);o=new Ls(l)}Vx(r,i,s,o)}/**
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
 */function Yx(t){B_(w_),Js(new rs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jx(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_n(Hl,Ul,t),_n(Hl,Ul,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Yx();const Ut=hi;(function(t,e){const n=hi,s=t();for(;;)try{if(parseInt(n(463))/1*(parseInt(n(464))/2)+parseInt(n(465))/3*(-parseInt(n(462))/4)+-parseInt(n(461))/5+parseInt(n(470))/6+-parseInt(n(467))/7+-parseInt(n(466))/8+parseInt(n(468))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(fi,702177);const Qx={apiKey:Ut(460),authDomain:Ut(471),databaseURL:"https://iamwait-default-rtdb.europe-west1.firebasedatabase.app",projectId:Ut(474),storageBucket:Ut(475),messagingSenderId:Ut(469),appId:Ut(472),measurementId:Ut(473)},Jx=qa(Qx),Ds=zx(Jx);function hi(t,e){const n=fi();return hi=function(s,i){return s=s-460,n[s]},hi(t,e)}function fi(){const t=["1940384epasew","6056946ZsxEus","14143455yRjPsh","720775593565","5744136YKFlYa","iamwait.firebaseapp.com","1:720775593565:web:1a263bf6a87ecfea3817b4","G-3RRDNZ9ME5","iamwait","iamwait.firebasestorage.app","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","5435610dxHmik","131660xnRbeG","763254XapoBk","2GhTiug","36LndNeR"];return fi=function(){return t},fi()}const Kt=pi;function di(){const t=["Данные "," на прослушке","815bHPkgT","rBIOP","hxZRt","atcLV","########### ########## Данные ","CxNrZ","1555804mOOSEF","then","290XcCdOl","Ошибка записи данных: ","2208132iRwZDI","log","lookField","catch","%c ","55223SFHWvi",">>> Данные по ","545FmhJqK","4924971tyMZxw","12113360GczJZR","val","EqbML","248iplKpK"," удалены!","oWjKk","color: darkgreen","fbStore2"," : данные не найдены","error","itJvp","21984MSuVGI","ORGtB","exists"];return di=function(){return t},di()}(function(t,e){const n=pi,s=t();for(;;)try{if(-parseInt(n(404))/1*(-parseInt(n(377))/2)+-parseInt(n(379))/3+-parseInt(n(375))/4+-parseInt(n(386))/5*(parseInt(n(399))/6)+parseInt(n(384))/7*(parseInt(n(391))/8)+parseInt(n(387))/9+parseInt(n(388))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(di,596918);const gh=Xd(Kt(395),{state:()=>({gameId:"",myId:0,myName:"",nickName:"",opponentId:0,opponentName:"",lookField:null,stage:4}),actions:{async getField(t){const e=Kt,n={oWjKk:function(i,r){return i(r)},CxNrZ:function(i,r,o){return i(r,o)},atcLV:function(i,r){return i(r)}},s=n[e(374)](Os,Ds,t);return n[e(407)](Lx,s)[e(376)](i=>{const r=e;if(i[r(401)]()){const o=i[r(389)]();return n[r(393)](Ln,r(385)+t+" = "+JSON.stringify(o)),o}else Ln(t+r(396))})},async setField(t,e){const n=Kt,s={hxZRt:function(r,o){return r(o)},itJvp:function(r,o){return r+o},rBIOP:function(r,o,l){return r(o,l)}},i=s[n(405)](Os,Ds,t);return s.rBIOP(_h,i,e)[n(376)](()=>{const r=n;s[r(406)](Ln,s[r(398)](t," -  данные записаны"))})[n(382)](r=>{const o=n;console[o(397)](o(378),r)})},async onValue(t){const e=Kt,n={EqbML:function(i,r,o){return i(r,o)}},s=n[e(390)](Os,Ds,t);Bx(s,i=>{const r=e;Ln(r(408)+t+r(403)),this[r(381)]=i.val()})},async removeField(t){const e=Kt,n={VbPiQ:function(i,r,o){return i(r,o)},ORGtB:function(i,r){return i(r)}};console[e(380)](t);const s=n.VbPiQ(Os,Ds,t);n[e(400)](Fx,s)[e(376)](()=>{const i=e;Ln(i(402)+t+i(392))})}}});function pi(t,e){const n=di();return pi=function(s,i){return s=s-374,n[s]},pi(t,e)}const Ln=t=>console.log(Kt(383)+t,Kt(394));function _i(t,e){const n=mi();return _i=function(s,i){return s=s-492,n[s]},_i(t,e)}const gi=_i;(function(t,e){const n=_i,s=t();for(;;)try{if(parseInt(n(564))/1+-parseInt(n(561))/2*(parseInt(n(550))/3)+-parseInt(n(559))/4*(parseInt(n(568))/5)+-parseInt(n(563))/6+parseInt(n(652))/7*(-parseInt(n(598))/8)+-parseInt(n(572))/9*(parseInt(n(600))/10)+parseInt(n(510))/11*(parseInt(n(501))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(mi,342992);function mi(){const t=["vrchc","jriTk","AtUjg","OyzTA","Отказаться","4px","nickName","MQcDe","PESZr","vjEns","length","KoWpP","bYWjs","larger","FmFwY","bifHo","ljUHw","KxqYy","VfWZF","KEfrs","lookField","Konzc","DVHxA","fFthV","g1/game/","YIBag","random","uvhcF"," Зарегистрироваться в поиске ","> >> > >> gotoStartgane","DynER","AkZqg","tXElD","126LJUJVc","keys","Nvshn","forEach","ANALIZ ","FvEEA","localhost:","ssTuB","rtIru","UbJvw","yjNDC","HPdhc","bfuRZ","yprZC","xNhGJ","red-bt",", поеп не откликнится ","eUYhp","xVmea","MsAXx","FybDX","FAIfG"," ! ","setItem","onClick","GOYCD","Список желающих играть:","Играем","124044LHIEyO","RpNoY","gkYJN","sVLDk","green-bt","QxKYj","Uuzzh","input","Имя","2607IrLLtK","................ОБНОВИЛСЯ А Я ПРОПАЛ","Txnri","removeField","setField","IlMkj","VRXPh","RkjyH","FFSke","yvWvK","XIguu","JoqUM","OTPyy","ZdOAW","game","hOBks","GXjNP","RomOF","::::::: Связывание :::::::","kmQxf","onValue","LiQOt","RfofC","includes","flGId","kxWcM","* тут можно поменять ваш Никнейм","then","href","FGsCC","div","xIZVf","reload","value","lIxah","KmnvX","bsdjN","Согласиться","fgaow","myName","12381uUyLua","lMkfg","WSXfC","BinderComp","qFayp","oweKM"," Вас выбрал игрок: ","link","zwDiO","764IPNiEH","xzmjZ","164GYOwru","VupJv","3976098NSYBtS","98667pUdLcZ","RES=","g1/play/","MfBlb","5015HyvyNx","red-notice","g1/look/","getField","36Ijlqoa","res","UPfDI","AHCMW","QDHvc","qyXLP","WVYzg","TzlkK","IbRGt","HJVJN","aKqdR","accept","gameLink","myNickName"," с игроком ","getItem","oABJm","cLAPc","PvnOl","ZQscg","KGVYD"," stage:","fCZiB","stage","USyyc","bnaMt","206168GWEGyf","TnByK","1372490aQtSIn","Сменить nickName","jYNZk","name2","hgQeR"," : ","111","button"," Контекс игры:","name","GQhKt","log","id2","Zswrp","* нельзя выбирать себя","nJGHK","myId","now","Добавился в список, жду"];return mi=function(){return t},mi()}const Xx={key:0},Zx={key:0},ey=[gi(497)],ty={key:1},ny={key:0},sy=["onClick"],iy={key:1,class:gi(569)},ry={key:2},oy={key:3},ly={key:4},cy=_f({__name:gi(553),props:{game:{}},setup(t){const e=gi,n={jriTk:function(d,h){return d(h)},bYWjs:function(d,h){return d+h},Nvshn:e(509),OyzTA:function(d,h){return d(h)},KGVYD:function(d,h){return d*h},QDHvc:e(585),vjEns:function(d){return d()},qFayp:e(557),fgaow:"/game/",PPOQH:"game = ",FGsCC:function(d,h){return d>h},eVawJ:function(d,h){return d===h},oweKM:function(d,h){return d(h)},YIBag:function(d,h){return d==h},VupJv:function(d,h){return d>h},bARAp:e(511),UPfDI:function(d){return d()},kmQxf:e(656),lMkfg:e(606),JoqUM:function(d,h,f){return d(h,f)},MsAXx:function(d){return d()},xzmjZ:function(d,h){return d+h},PvnOl:e(570),zwDiO:e(573),qyXLP:function(d,h,f){return d(h,f)},FAIfG:function(d){return d()},HJVJN:function(d,h){return d+h},tXElD:function(d,h){return d+h},bsdjN:function(d,h){return d+h},OTPyy:e(648),AmeXG:function(d,h){return d+h},FFSke:function(d,h){return d+h},TnByK:e(566),USyyc:e(643),sVLDk:"ВСЕ НАСТРОЙКИ ИГРЫ",fCZiB:function(d){return d()},yprZC:e(607),ZdOAW:function(d,h,f,v,O,te){return d(h,f,v,O,te)},AHCMW:function(d,h,f,v,O){return d(h,f,v,O)},VfWZF:function(d,h){return d+h},uvhcF:function(d,h){return d+h},PESZr:function(d,h){return d+h},DVHxA:e(605),bxskG:function(d,h){return d(h)},kxWcM:function(d,h){return d+h},VRXPh:e(593),bifHo:function(d,h,f,v){return d(h,f,v)},xIZVf:" Привет, ",FybDX:function(d,h){return d(h)},DPZDo:function(d,h){return d(h)},QxKYj:function(d,h){return d(h)},KoWpP:e(495),Txnri:function(d,h,f){return d(h,f)},Uuzzh:e(632),MfBlb:e(624),KmnvX:"center",Konzc:e(601),hOBks:"red-notice",UbJvw:function(d,h,f,v){return d(h,f,v)},vrchc:e(540),hgQeR:function(d,h,f,v,O){return d(h,f,v,O)},yjNDC:"Список желающих играть:",DynER:function(d,h,f,v){return d(h,f,v)},dmlZL:e(647),mjGLj:function(d,h,f,v,O){return d(h,f,v,O)},nJGHK:function(d,h,f){return d(h,f)},cLAPc:function(d,h){return d===h},WSXfC:function(d){return d()},IlMkj:function(d,h,f,v){return d(h,f,v)},jYNZk:function(d,h){return d(h)},rtIru:function(d,h,f){return d(h,f)},TzlkK:function(d,h,f,v){return d(h,f,v)},RkjyH:function(d,h,f){return d(h,f)},xNhGJ:function(d,h){return d===h},aKqdR:function(d,h,f,v){return d(h,f,v)},AkZqg:" Жду игрока ",KxqYy:function(d,h,f){return d(h,f)},gkYJN:function(d,h){return d===h},bfuRZ:function(d,h,f,v){return d(h,f,v)},HPdhc:function(d,h){return d(h)},BJGuF:function(d,h,f,v,O){return d(h,f,v,O)},RpNoY:function(d,h,f,v,O){return d(h,f,v,O)},bnaMt:function(d,h,f,v,O){return d(h,f,v,O)},KEfrs:function(d,h){return d(h)},AMVpp:e(623),GQhKt:function(d,h,f,v){return d(h,f,v)},flGId:e(505),Zswrp:e(547),wNSWT:function(d){return d()},GOdVW:function(d,h,f,v){return d(h,f,v)},AtUjg:function(d,h,f,v,O){return d(h,f,v,O)},WVYzg:e(500),ssTuB:function(d,h){return d(h)},IbRGt:function(d,h,f,v,O){return d(h,f,v,O)},ZQscg:function(d,h){return d(h)},xVmea:function(d,h,f,v,O){return d(h,f,v,O)},MQcDe:function(d,h){return d(h)},fFthV:e(608),LiQOt:function(d,h,f,v,O){return d(h,f,v,O)},XIguu:function(d,h,f){return d(h,f)},yvWvK:function(d,h){return d(h)},DziRd:function(d,h,f,v,O){return d(h,f,v,O)},RfofC:function(d,h,f,v,O){return d(h,f,v,O)},JKnor:function(d,h){return d(h)}},s=gh(),i=Gt(localStorage[e(587)](n[e(576)])),r=n[e(591)](Gt,[]),o=n[e(594)](Gt),l=Gt(),c=Gt(""),a=function(){const d=e;location[d(538)][d(533)](d(658))&&(s[d(616)]=s[d(616)]||n[d(620)](parseInt,String(Math[d(645)]()*1e3)),s[d(549)]=s.nickName||s.myName||n[d(631)](n[d(654)],n[d(622)](parseInt,String(n[d(592)](Math[d(645)](),100)))))},u=function(){const d=e;s[d(625)]=i[d(543)],i[d(543)]&&localStorage[d(496)](n.QDHvc,i.value)};function p(){const d=e,h={FEJIl:d(565),GXjNP:function(f){return n[d(628)](f)},kiTKk:function(f,v){return n[d(631)](f,v)},cPZrr:n[d(554)],RomOF:function(f,v){return f+v},FwTZS:n[d(548)]};console[d(611)](n.PPOQH,t[d(524)]),s.getField(n[d(631)](n.bYWjs(t[d(524)],"/play/"),s[d(616)]))[d(537)](f=>{const v=d;if(console.log(h.FEJIl,f),!f)h[v(526)](x),s[v(595)]=1;else{o.value={id:f.id,name:f[v(609)]},s[v(595)]=5;let O=h.kiTKk(t[v(524)]+"/game/",f[v(524)]);console[v(611)](h.cPZrr,O),s[v(571)](h[v(527)](t[v(524)]+h.FwTZS,f[v(524)]))[v(537)](te=>{const D=v;c[D(543)]=te})}})}const g=function(d){const h=e;console.log(n[h(529)],d),r[h(543)]=[],s.stage=1;let f=!1;d&&Object[h(653)](d)[h(655)](v=>{const O=h;if(n[O(539)](s.stage,3))return!1;n.eVawJ(v,n.oweKM(String,s.myId))&&v&&(f=!0,s[O(595)]=2,d[v][O(612)]&&(o[O(543)]={id:d[v][O(612)],name:d[v][O(603)]},s[O(595)]=4)),n[O(644)](d[v][O(612)],s[O(616)])&&(f=!0,s.stage=3),n[O(562)](s[O(595)],2)&&!f&&(console.log(n.bARAp),alert(),location[O(542)]()),d[v][O(583)]&&n[O(574)](j),v&&d[v]&&r[O(543)].push({id:v,name:d[v][O(609)]})})};function x(){const d=e;s[d(530)]("g1/look")[d(537)](h=>{const f=d;console[f(611)](n[f(551)],h),g(h)}),n[d(521)](Gn,()=>s[d(639)],h=>g(h))}function E(){const d=e;n[d(492)](a),s.setField(n[d(560)](n[d(590)],s[d(616)]),{name:s[d(549)]})}function P(d){const h=e,f={ljUHw:n.zwDiO};if(n[h(644)](d.id,s[h(616)]))return l.value=!0,n[h(577)](setTimeout,()=>l[h(543)]=!1,1500),!1;n.FAIfG(a),s[h(514)](n.PvnOl+d.id,{name:d[h(609)],id2:s[h(616)],name2:s.myName})[h(537)](v=>{const O=h;console.log(f[O(635)],v),o[O(543)]={id:d.id,name:d[O(609)]},s[O(595)]=3})}function V(d){const h=e;a(),d&&o[h(543)]&&s[h(514)](n[h(590)]+o[h(543)].id,{name:o[h(543)][h(609)],id2:s[h(616)],name2:s.myName,accept:!0})[h(537)](f=>{const v=h;console[v(611)](n[v(558)],f)})}function j(){var v,O,te;const d=e;let h=Date[d(617)](),f=String(o.value.id);n[d(539)](o[d(543)].id,s[d(616)])?f+=n.bsdjN("::",s[d(616)]):f=n.bsdjN(s[d(616)]+"::",f),console[d(611)](d(584),f),console[d(611)](n[d(522)]),s.setField(n.AmeXG("g1/play/",s[d(616)]),{id:(v=o[d(543)])==null?void 0:v.id,name:(O=o.value)==null?void 0:O[d(609)],game:f,date:h}),s[d(514)](n[d(518)](n[d(599)],(te=o[d(543)])==null?void 0:te.id),{id:s.myId,name:s[d(549)],game:f,date:h}),s[d(514)](n[d(546)](n[d(596)],f),{game:n[d(504)]}),setTimeout(()=>{var k;const D=d;s[D(513)](n[D(581)](n.PvnOl,(k=o[D(543)])==null?void 0:k.id)),s.removeField(n[D(651)](n.PvnOl,s[D(616)])),location.reload()},2e3)}return n.JKnor(co,()=>{n[e(594)](p)}),(d,h)=>{var O,te;const f=e,v={GOYCD:function(D){return n.FAIfG(D)},FmFwY:n.yprZC,oABJm:f(505),FvEEA:function(D,k){return n[f(555)](D,k)},eUYhp:function(D,k,ne,Re,He,Je){return n[f(523)](D,k,ne,Re,He,Je)},lIxah:function(D,k){return n[f(620)](D,k)}};return n[f(492)](ve),n[f(575)](Pe,Ve,null,[h[32]||(h[32]=H("hr",null,null,-1)),h[33]||(h[33]=H("i",null,f(528),-1)),h[34]||(h[34]=n[f(575)](H,"br",null,null,-1)),n[f(577)](ut,n[f(637)](n[f(646)](n.VfWZF(n[f(627)](" ",n[f(555)](Ge,Ue(s)[f(616)])),n[f(641)]),n.bxskG(Ge,n[f(555)](Ue,s).myName))," "),1),h[35]||(h[35]=H("br",null,null,-1)),n.JoqUM(ut,n[f(518)](n[f(535)](n[f(516)],n.oweKM(Ge,n.oweKM(Ue,s)[f(595)]))," "),1),h[36]||(h[36]=H("hr",null,null,-1)),n.eVawJ(Ue(s).stage,1)?(ve(),n.bifHo(Pe,f(540),Xx,[H("p",null,n[f(535)](n[f(541)]+n[f(493)](Ge,n.DPZDo(Ue,s).nickName||n[f(506)](Ue,s).myName),n[f(630)]),1),n[f(634)](H,"p",null,[n[f(512)](ff,n[f(575)](H,f(508),{"onUpdate:modelValue":h[0]||(h[0]=D=>i[f(543)]=D),maxlength:"16",style:{"font-size":n[f(507)],padding:n[f(567)],"text-align":n[f(545)]},onInput:h[1]||(h[1]=D=>u()),placeholder:n[f(640)]},null,544),[[Hd,i[f(543)]]])]),h[8]||(h[8]=H(f(540),{class:n[f(525)]},f(536),-1)),r.value&&r[f(543)].length>1?(n[f(628)](ve),n[f(661)](Pe,n[f(619)],Zx,[h[5]||(h[5]=n[f(604)](H,"h3",null,n.yjNDC,-1)),(n[f(555)](ve,!0),n[f(604)](Pe,Ve,null,n[f(512)](el,r.value,D=>{const k=f;return v[k(498)](ve),Pe(v[k(633)],{class:v[k(588)],key:D.id,onClick:ne=>P(D)},v[k(657)](Ge,D[k(609)]),9,ey)}),128)),h[6]||(h[6]=H("br",null,null,-1)),h[7]||(h[7]=n[f(604)](H,"br",null,null,-1))])):n[f(521)](bt,"",!0),n[f(649)](H,n[f(665)],{class:f(667),onClick:h[2]||(h[2]=D=>E())},n.dmlZL),h[9]||(h[9]=n.mjGLj(H,"br",null,null,-1)),h[10]||(h[10]=n[f(575)](H,"br",null,null,-1))])):n[f(615)](bt,"",!0),n[f(589)](Ue(s)[f(595)],2)?(n[f(494)](ve),n[f(649)](Pe,f(540),ty,[h[14]||(h[14]=n[f(575)](H,"p",null,f(618),-1)),r[f(543)][f(629)]?(n.WSXfC(ve),n[f(515)](Pe,f(540),ny,[h[11]||(h[11]=n[f(575)](H,"h3",null,n[f(662)],-1)),(n[f(602)](ve,!0),Pe(Ve,null,n[f(660)](el,r.value,D=>{const k=f;return v[k(498)](ve),v[k(669)](Pe,v[k(633)],{class:k(505),key:D.id,onClick:ne=>P(D)},v[k(544)](Ge,D[k(609)]),9,sy)}),128)),h[12]||(h[12]=n[f(575)](H,"br",null,null,-1)),h[13]||(h[13]=n[f(604)](H,"br",null,null,-1))])):bt("",!0),l.value?(n[f(574)](ve),n[f(579)](Pe,n.vrchc,iy,f(614))):n[f(517)](bt,"",!0)])):n[f(577)](bt,"",!0),n[f(666)](Ue(s)[f(595)],3)?(n[f(552)](ve),n[f(634)](Pe,f(540),ry,[n[f(582)](H,"p",null,[h[15]||(h[15]=ut(n[f(650)])),H("b",null,Ge((O=o[f(543)])==null?void 0:O[f(609)]),1),h[16]||(h[16]=n[f(602)](ut,f(668)))]),h[17]||(h[17]=n[f(604)](H,"h3",null,f(499),-1))])):n[f(636)](bt,"",!0),n[f(503)](Ue(s)[f(595)],4)&&((te=o[f(543)])!=null&&te.id)?(n[f(552)](ve),n[f(664)](Pe,n.vrchc,oy,[h[18]||(h[18]=n[f(663)](ut,f(556))),h[19]||(h[19]=n.BJGuF(H,"br",null,null,-1)),h[20]||(h[20]=n[f(502)](H,"br",null,null,-1)),n[f(597)](H,"b",null,n[f(638)](Ge,o.value.name),1),h[21]||(h[21]=n[f(575)](H,"br",null,null,-1)),h[22]||(h[22]=n[f(502)](H,"br",null,null,-1)),n[f(634)](H,n[f(665)],{class:f(505),onClick:h[3]||(h[3]=D=>V(!1))},n.AMVpp),n[f(610)](H,n.yprZC,{class:n[f(534)],onClick:h[4]||(h[4]=D=>V(!0))},n[f(613)])])):bt("",!0),n[f(589)](Ue(s)[f(595)],5)&&o[f(543)]?(n.wNSWT(ve),n.GOdVW(Pe,n[f(619)],ly,[h[23]||(h[23]=n[f(621)](H,"h3",null,n[f(578)],-1)),h[24]||(h[24]=n[f(659)](ut,f(586))),h[25]||(h[25]=n[f(580)](H,"br",null,null,-1)),n[f(597)](H,"b",null,n[f(591)](Ge,o[f(543)][f(609)]),1),h[26]||(h[26]=n[f(670)](H,"br",null,null,-1)),h[27]||(h[27]=n[f(604)](H,"br",null,null,-1)),h[28]||(h[28]=n[f(626)](ut,n[f(642)])),h[29]||(h[29]=n[f(531)](H,"br",null,null,-1)),n[f(520)](ut,n.tXElD(n[f(637)](" ",n[f(519)](Ge,c[f(543)]))," "),1),h[30]||(h[30]=n.DziRd(H,"br",null,null,-1)),h[31]||(h[31]=H("br",null,null,-1))])):n[f(615)](bt,"",!0),h[37]||(h[37]=n[f(532)](H,"br",null,null,-1)),h[38]||(h[38]=n[f(531)](H,"br",null,null,-1))],64)}}}),ay={class:"game"},uy={__name:"RockPaperSScissors",setup(t){return(e,n)=>(ve(),Pe("div",ay,[n[0]||(n[0]=H("h1",null,"♕",-1)),n[1]||(n[1]=H("h2",null,null,-1)),H("div",null,[ot(cy,{game:"g1"})])]))}},hy=Zd(uy,[["__scopeId","data-v-8ac6bc89"]]),fy={__name:"App",setup(t){const e=gh();let n=Jh(hy);return co(()=>{var i,r,o;let s=(i=window.Telegram)==null?void 0:i.WebApp;s&&(e.myId=((r=s.initDataUnsafe.user)==null?void 0:r.id)||"",e.myName=((o=s.initDataUnsafe.user)==null?void 0:o.username)||"")}),(s,i)=>(ve(),wa(Nf(Ue(n))))}},yc=yi;(function(t,e){const n=yi,s=t();for(;;)try{if(parseInt(n(413))/1+-parseInt(n(415))/2*(-parseInt(n(411))/3)+parseInt(n(414))/4+parseInt(n(408))/5+-parseInt(n(412))/6+-parseInt(n(410))/7+parseInt(n(407))/8*(parseInt(n(416))/9)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,135941);function xi(){const t=["624424KLAUqw","486665XCoMiC","use","965041uqiKdR","6ozetPs","1240806umIbfr","200316BTNBUH","59612IaBhgG","90000WEXCwt","9ojMyth","mount"];return xi=function(){return t},xi()}function yi(t,e){const n=xi();return yi=function(s,i){return s=s-406,n[s]},yi(t,e)}const dy=Kd(),vc=jd(fy);vc[yc(409)](dy),vc[yc(406)]("#app");
