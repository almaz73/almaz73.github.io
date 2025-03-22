function js(t,e){const n=$s();return js=function(s,i){return s=s-108,n[s]},js(t,e)}function $s(){const t=["observe","crossOrigin","credentials","href","VDQKm","modulepreload","1869600IavNKQ","supports","mtxYd","5spOofh","NeLfK","10oeXysB","3020262UspSEd","1LbGyxg","tagName","ZqlZQ","link","NFmhX","1600108UbCWON","anonymous","addedNodes","984693JWACqC","2206534mKArri","type","omit","relList","rel","16119603mSxunI","TYDxS","referrerPolicy","querySelectorAll","6524427dMCqkN"];return $s=function(){return t},$s()}(function(t,e){const n=js,s=t();for(;;)try{if(-parseInt(n(130))/1*(parseInt(n(139))/2)+-parseInt(n(138))/3+-parseInt(n(135))/4*(-parseInt(n(126))/5)+parseInt(n(129))/6+-parseInt(n(116))/7+parseInt(n(123))/8+-parseInt(n(112))/9*(-parseInt(n(128))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})($s,564612),function(){const e=js,n={YFUqK:function(o,l){return o!==l},ErKMP:"childList",VDQKm:function(o,l){return o===l},UeXLR:"LINK",ZqlZQ:function(o,l){return o(l)},JDOid:"include",NeLfK:e(136),VSTxb:e(109),EvsNH:"same-origin",mtxYd:function(o,l,a){return o(l,a)},NFmhX:e(133),TYDxS:'link[rel="modulepreload"]'},s=document.createElement(n[e(134)])[e(110)];if(s&&s[e(124)]&&s[e(124)]("modulepreload"))return;for(const o of document[e(115)](n[e(113)]))n.ZqlZQ(r,o);new MutationObserver(o=>{const l=e;for(const a of o)if(!n.YFUqK(a[l(108)],n.ErKMP))for(const c of a[l(137)])n[l(121)](c[l(131)],n.UeXLR)&&c[l(111)]===l(122)&&n.ZqlZQ(r,c)})[e(117)](document,{childList:!0,subtree:!0});function i(o){const l=e,a={};return o.integrity&&(a.integrity=o.integrity),o[l(114)]&&(a[l(114)]=o[l(114)]),n.VDQKm(o[l(118)],"use-credentials")?a[l(119)]=n.JDOid:n[l(121)](o[l(118)],n[l(127)])?a.credentials=n.VSTxb:a.credentials=n.EvsNH,a}function r(o){const l=e;if(o.ep)return;o.ep=!0;const a=n[l(132)](i,o);n[l(125)](fetch,o[l(120)],a)}}();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function io(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},pn=[],ft=()=>{},Ph=()=>!1,Ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ro=t=>t.startsWith("onUpdate:"),Pe=Object.assign,oo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oh=Object.prototype.hasOwnProperty,se=(t,e)=>Oh.call(t,e),H=Array.isArray,_n=t=>Ai(t)==="[object Map]",Da=t=>Ai(t)==="[object Set]",U=t=>typeof t=="function",ye=t=>typeof t=="string",Ht=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",ka=t=>(_e(t)||U(t))&&U(t.then)&&U(t.catch),Ma=Object.prototype.toString,Ai=t=>Ma.call(t),Dh=t=>Ai(t).slice(8,-1),Fa=t=>Ai(t)==="[object Object]",lo=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=io(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kh=/-(\w)/g,Xe=Pi(t=>t.replace(kh,(e,n)=>n?n.toUpperCase():"")),Mh=/\B([A-Z])/g,on=Pi(t=>t.replace(Mh,"-$1").toLowerCase()),Oi=Pi(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=Pi(t=>t?`on${Oi(t)}`:""),Pt=(t,e)=>!Object.is(t,e),Bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},La=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Tr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ol;const Di=()=>ol||(ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ao(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ye(s)?Bh(s):ao(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ye(t)||_e(t))return t}const Fh=/;(?![^(]*\))/g,Lh=/:([^]+)/,Wh=/\/\*[^]*?\*\//g;function Bh(t){const e={};return t.replace(Wh,"").split(Fh).forEach(n=>{if(n){const s=n.split(Lh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function gn(t){let e="";if(ye(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=gn(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uh=io(Hh);function Wa(t){return!!t||t===""}const Ba=t=>!!(t&&t.__v_isRef===!0),$e=t=>ye(t)?t:t==null?"":H(t)||_e(t)&&(t.toString===Ma||!U(t.toString))?Ba(t)?$e(t.value):JSON.stringify(t,Ha,2):String(t),Ha=(t,e)=>Ba(e)?Ha(t,e.value):_n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ir(s,r)+" =>"]=i,n),{})}:Da(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ir(n))}:Ht(e)?ir(e):_e(e)&&!H(e)&&!Fa(e)?String(e):e,ir=(t,e="")=>{var n;return Ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class Ua{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Va(t){return new Ua(t)}function ja(){return ke}function Vh(t,e=!1){ke&&ke.cleanups.push(t)}let ue;const rr=new WeakSet;class $a{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rr.has(this)&&(rr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||za(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ll(this),qa(this);const e=ue,n=nt;ue=this,nt=!0;try{return this.fn()}finally{Ga(this),ue=e,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ho(e);this.deps=this.depsTail=void 0,ll(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nr(this)&&this.run()}get dirty(){return Nr(this)}}let Ka=0,jn,$n;function za(t,e=!1){if(t.flags|=8,e){t.next=$n,$n=t;return}t.next=jn,jn=t}function co(){Ka++}function uo(){if(--Ka>0)return;if($n){let e=$n;for($n=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;jn;){let e=jn;for(jn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function qa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ga(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ho(s),jh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Nr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ya(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ya(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ns))return;t.globalVersion=ns;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Nr(t)){t.flags&=-3;return}const n=ue,s=nt;ue=t,nt=!0;try{qa(t);const i=t.fn(t._value);(e.version===0||Pt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ue=n,nt=s,Ga(t),t.flags&=-3}}function ho(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ho(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nt=!0;const Qa=[];function Ut(){Qa.push(nt),nt=!1}function Vt(){const t=Qa.pop();nt=t===void 0?!0:t}function ll(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ue;ue=void 0;try{e()}finally{ue=n}}}let ns=0;class $h{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ue||!nt||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new $h(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,Xa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=s)}return n}trigger(e){this.version++,ns++,this.notify(e)}notify(e){co();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uo()}}}function Xa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Xa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ks=new WeakMap,Xt=Symbol(""),Rr=Symbol(""),ss=Symbol("");function Ne(t,e,n){if(nt&&ue){let s=Ks.get(t);s||Ks.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new fo),i.map=s,i.key=n),i.track()}}function yt(t,e,n,s,i,r){const o=Ks.get(t);if(!o){ns++;return}const l=a=>{a&&a.trigger()};if(co(),e==="clear")o.forEach(l);else{const a=H(t),c=a&&lo(n);if(a&&n==="length"){const f=Number(s);o.forEach((p,g)=>{(g==="length"||g===ss||!Ht(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(ss)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Xt)),_n(t)&&l(o.get(Rr)));break;case"delete":a||(l(o.get(Xt)),_n(t)&&l(o.get(Rr)));break;case"set":_n(t)&&l(o.get(Xt));break}}uo()}function Kh(t,e){const n=Ks.get(t);return n&&n.get(e)}function an(t){const e=ee(t);return e===t?e:(Ne(e,"iterate",ss),Ye(t)?e:e.map(Re))}function ki(t){return Ne(t=ee(t),"iterate",ss),t}const zh={__proto__:null,[Symbol.iterator](){return or(this,Symbol.iterator,Re)},concat(...t){return an(this).concat(...t.map(e=>H(e)?an(e):e))},entries(){return or(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return mt(this,"every",t,e,void 0,arguments)},filter(t,e){return mt(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return mt(this,"find",t,e,Re,arguments)},findIndex(t,e){return mt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mt(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return mt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mt(this,"forEach",t,e,void 0,arguments)},includes(...t){return lr(this,"includes",t)},indexOf(...t){return lr(this,"indexOf",t)},join(t){return an(this).join(t)},lastIndexOf(...t){return lr(this,"lastIndexOf",t)},map(t,e){return mt(this,"map",t,e,void 0,arguments)},pop(){return kn(this,"pop")},push(...t){return kn(this,"push",t)},reduce(t,...e){return al(this,"reduce",t,e)},reduceRight(t,...e){return al(this,"reduceRight",t,e)},shift(){return kn(this,"shift")},some(t,e){return mt(this,"some",t,e,void 0,arguments)},splice(...t){return kn(this,"splice",t)},toReversed(){return an(this).toReversed()},toSorted(t){return an(this).toSorted(t)},toSpliced(...t){return an(this).toSpliced(...t)},unshift(...t){return kn(this,"unshift",t)},values(){return or(this,"values",Re)}};function or(t,e,n){const s=ki(t),i=s[e]();return s!==t&&!Ye(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const qh=Array.prototype;function mt(t,e,n,s,i,r){const o=ki(t),l=o!==t&&!Ye(t),a=o[e];if(a!==qh[e]){const p=a.apply(t,r);return l?Re(p):p}let c=n;o!==t&&(l?c=function(p,g){return n.call(this,Re(p),g,t)}:n.length>2&&(c=function(p,g){return n.call(this,p,g,t)}));const f=a.call(o,c,s);return l&&i?i(f):f}function al(t,e,n,s){const i=ki(t);let r=n;return i!==t&&(Ye(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Re(l),a,t)}),i[e](r,...s)}function lr(t,e,n){const s=ee(t);Ne(s,"iterate",ss);const i=s[e](...n);return(i===-1||i===!1)&&go(n[0])?(n[0]=ee(n[0]),s[e](...n)):i}function kn(t,e,n=[]){Ut(),co();const s=ee(t)[e].apply(t,n);return uo(),Vt(),s}const Gh=io("__proto__,__v_isRef,__isVue"),Ja=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ht));function Yh(t){Ht(t)||(t=String(t));const e=ee(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class Za{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?of:sc:r?nc:tc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let a;if(o&&(a=zh[n]))return a;if(n==="hasOwnProperty")return Yh}const l=Reflect.get(e,n,xe(e)?e:s);return(Ht(n)?Ja.has(n):Gh(n))||(i||Ne(e,"get",n),r)?l:xe(l)?o&&lo(n)?l:l.value:_e(l)?i?ic(l):Mi(l):l}}class ec extends Za{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=en(r);if(!Ye(s)&&!en(s)&&(r=ee(r),s=ee(s)),!H(e)&&xe(r)&&!xe(s))return a?!1:(r.value=s,!0)}const o=H(e)&&lo(n)?Number(n)<e.length:se(e,n),l=Reflect.set(e,n,s,xe(e)?e:i);return e===ee(i)&&(o?Pt(s,r)&&yt(e,"set",n,s):yt(e,"add",n,s)),l}deleteProperty(e,n){const s=se(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ht(n)||!Ja.has(n))&&Ne(e,"has",n),s}ownKeys(e){return Ne(e,"iterate",H(e)?"length":Xt),Reflect.ownKeys(e)}}class Qh extends Za{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xh=new ec,Jh=new Qh,Zh=new ec(!0);const Ar=t=>t,Ps=t=>Reflect.getPrototypeOf(t);function ef(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=_n(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),f=n?Ar:e?Pr:Re;return!e&&Ne(r,"iterate",a?Rr:Xt),{next(){const{value:p,done:g}=c.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Os(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tf(t,e){const n={get(i){const r=this.__v_raw,o=ee(r),l=ee(i);t||(Pt(i,l)&&Ne(o,"get",i),Ne(o,"get",l));const{has:a}=Ps(o),c=e?Ar:t?Pr:Re;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ne(ee(i),"iterate",Xt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ee(r),l=ee(i);return t||(Pt(i,l)&&Ne(o,"has",i),Ne(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=ee(l),c=e?Ar:t?Pr:Re;return!t&&Ne(a,"iterate",Xt),l.forEach((f,p)=>i.call(r,c(f),c(p),o))}};return Pe(n,t?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(i){!e&&!Ye(i)&&!en(i)&&(i=ee(i));const r=ee(this);return Ps(r).has.call(r,i)||(r.add(i),yt(r,"add",i,i)),this},set(i,r){!e&&!Ye(r)&&!en(r)&&(r=ee(r));const o=ee(this),{has:l,get:a}=Ps(o);let c=l.call(o,i);c||(i=ee(i),c=l.call(o,i));const f=a.call(o,i);return o.set(i,r),c?Pt(r,f)&&yt(o,"set",i,r):yt(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:l}=Ps(r);let a=o.call(r,i);a||(i=ee(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&yt(r,"delete",i,void 0),c},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&yt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ef(i,t,e)}),n}function po(t,e){const n=tf(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(se(n,i)&&i in s?n:s,i,r)}const nf={get:po(!1,!1)},sf={get:po(!1,!0)},rf={get:po(!0,!1)};const tc=new WeakMap,nc=new WeakMap,sc=new WeakMap,of=new WeakMap;function lf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function af(t){return t.__v_skip||!Object.isExtensible(t)?0:lf(Dh(t))}function Mi(t){return en(t)?t:_o(t,!1,Xh,nf,tc)}function cf(t){return _o(t,!1,Zh,sf,nc)}function ic(t){return _o(t,!0,Jh,rf,sc)}function _o(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=af(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ot(t){return en(t)?Ot(t.__v_raw):!!(t&&t.__v_isReactive)}function en(t){return!!(t&&t.__v_isReadonly)}function Ye(t){return!!(t&&t.__v_isShallow)}function go(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function mo(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&La(t,"__v_skip",!0),t}const Re=t=>_e(t)?Mi(t):t,Pr=t=>_e(t)?ic(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function Ge(t){return rc(t,!1)}function uf(t){return rc(t,!0)}function rc(t,e){return xe(t)?t:new hf(t,e)}class hf{constructor(e,n){this.dep=new fo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ye(e)||en(e);e=s?e:ee(e),Pt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function Ee(t){return xe(t)?t.value:t}const ff={get:(t,e,n)=>e==="__v_raw"?t:Ee(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function oc(t){return Ot(t)?t:new Proxy(t,ff)}function df(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=_f(t,n);return e}class pf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Kh(ee(this._object),this._key)}}function _f(t,e,n){const s=t[e];return xe(s)?s:new pf(t,e,n)}class gf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return za(this,!0),!0}get value(){const e=this.dep.track();return Ya(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mf(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new gf(s,i,n)}const Ds={},zs=new WeakMap;let zt;function xf(t,e=!1,n=zt){if(n){let s=zs.get(n);s||zs.set(n,s=[]),s.push(t)}}function yf(t,e,n=le){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=F=>i?F:Ye(F)||i===!1||i===0?vt(F,1):vt(F);let f,p,g,x,w=!1,D=!1;if(xe(t)?(p=()=>t.value,w=Ye(t)):Ot(t)?(p=()=>c(t),w=!0):H(t)?(D=!0,w=t.some(F=>Ot(F)||Ye(F)),p=()=>t.map(F=>{if(xe(F))return F.value;if(Ot(F))return c(F);if(U(F))return a?a(F,2):F()})):U(t)?e?p=a?()=>a(t,2):t:p=()=>{if(g){Ut();try{g()}finally{Vt()}}const F=zt;zt=f;try{return a?a(t,3,[x]):t(x)}finally{zt=F}}:p=ft,e&&i){const F=p,Z=i===!0?1/0:i;p=()=>vt(F(),Z)}const K=ja(),V=()=>{f.stop(),K&&K.active&&oo(K.effects,f)};if(r&&e){const F=e;e=(...Z)=>{F(...Z),V()}}let J=D?new Array(t.length).fill(Ds):Ds;const ne=F=>{if(!(!(f.flags&1)||!f.dirty&&!F))if(e){const Z=f.run();if(i||w||(D?Z.some((Je,ve)=>Pt(Je,J[ve])):Pt(Z,J))){g&&g();const Je=zt;zt=f;try{const ve=[Z,J===Ds?void 0:D&&J[0]===Ds?[]:J,x];a?a(e,3,ve):e(...ve),J=Z}finally{zt=Je}}}else f.run()};return l&&l(ne),f=new $a(p),f.scheduler=o?()=>o(ne,!1):ne,x=F=>xf(F,!1,f),g=f.onStop=()=>{const F=zs.get(f);if(F){if(a)a(F,4);else for(const Z of F)Z();zs.delete(f)}},e?s?ne(!0):J=f.run():o?o(ne.bind(null,!0),!0):f.run(),V.pause=f.pause.bind(f),V.resume=f.resume.bind(f),V.stop=V,V}function vt(t,e=1/0,n){if(e<=0||!_e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xe(t))vt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)vt(t[s],e,n);else if(Da(t)||_n(t))t.forEach(s=>{vt(s,e,n)});else if(Fa(t)){for(const s in t)vt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(t,e,n,s){try{return s?t(...s):t()}catch(i){Fi(i,e,n)}}function dt(t,e,n,s){if(U(t)){const i=ys(t,e,n,s);return i&&ka(i)&&i.catch(r=>{Fi(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(dt(t[r],e,n,s));return i}}function Fi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,a,c)===!1)return}l=l.parent}if(r){Ut(),ys(r,null,10,[t,a,c]),Vt();return}}vf(t,n,i,s,o)}function vf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Me=[];let ct=-1;const mn=[];let Rt=null,hn=0;const lc=Promise.resolve();let qs=null;function ac(t){const e=qs||lc;return t?e.then(this?t.bind(this):t):e}function bf(t){let e=ct+1,n=Me.length;for(;e<n;){const s=e+n>>>1,i=Me[s],r=is(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function xo(t){if(!(t.flags&1)){const e=is(t),n=Me[Me.length-1];!n||!(t.flags&2)&&e>=is(n)?Me.push(t):Me.splice(bf(e),0,t),t.flags|=1,cc()}}function cc(){qs||(qs=lc.then(hc))}function Cf(t){H(t)?mn.push(...t):Rt&&t.id===-1?Rt.splice(hn+1,0,t):t.flags&1||(mn.push(t),t.flags|=1),cc()}function cl(t,e,n=ct+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function uc(t){if(mn.length){const e=[...new Set(mn)].sort((n,s)=>is(n)-is(s));if(mn.length=0,Rt){Rt.push(...e);return}for(Rt=e,hn=0;hn<Rt.length;hn++){const n=Rt[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,hn=0}}const is=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hc(t){try{for(ct=0;ct<Me.length;ct++){const e=Me[ct];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ct<Me.length;ct++){const e=Me[ct];e&&(e.flags&=-2)}ct=-1,Me.length=0,uc(),qs=null,(Me.length||mn.length)&&hc()}}let We=null,fc=null;function Gs(t){const e=We;return We=t,fc=t&&t.type.__scopeId||null,e}function Ef(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&vl(-1);const r=Gs(e);let o;try{o=t(...i)}finally{Gs(r),s._d&&vl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function If(t,e){if(We===null)return t;const n=Ui(We),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=le]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&vt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function $t(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Ut(),dt(a,n,8,[t.el,l,t,e]),Vt())}}const wf=Symbol("_vte"),Sf=t=>t.__isTeleport;function yo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Li(t,e){return U(t)?Pe({name:t.name},e,{setup:t}):t}function dc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ys(t,e,n,s,i=!1){if(H(t)){t.forEach((w,D)=>Ys(w,e&&(H(e)?e[D]:e),n,s,i));return}if(Kn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ys(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ui(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,f=l.refs===le?l.refs={}:l.refs,p=l.setupState,g=ee(p),x=p===le?()=>!1:w=>se(g,w);if(c!=null&&c!==a&&(ye(c)?(f[c]=null,x(c)&&(p[c]=null)):xe(c)&&(c.value=null)),U(a))ys(a,l,12,[o,f]);else{const w=ye(a),D=xe(a);if(w||D){const K=()=>{if(t.f){const V=w?x(a)?p[a]:f[a]:a.value;i?H(V)&&oo(V,r):H(V)?V.includes(r)||V.push(r):w?(f[a]=[r],x(a)&&(p[a]=f[a])):(a.value=[r],t.k&&(f[t.k]=a.value))}else w?(f[a]=o,x(a)&&(p[a]=o)):D&&(a.value=o,t.k&&(f[t.k]=o))};o?(K.id=-1,Ke(K,n)):K()}}}Di().requestIdleCallback;Di().cancelIdleCallback;const Kn=t=>!!t.type.__asyncLoader,pc=t=>t.type.__isKeepAlive;function Tf(t,e){_c(t,"a",e)}function Nf(t,e){_c(t,"da",e)}function _c(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Wi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)pc(i.parent.vnode)&&Rf(s,e,n,i),i=i.parent}}function Rf(t,e,n,s){const i=Wi(e,t,s,!0);gc(()=>{oo(s[e],i)},n)}function Wi(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ut();const l=vs(n),a=dt(e,n,t,o);return l(),Vt(),a});return s?i.unshift(r):i.push(r),r}}const wt=t=>(e,n=Te)=>{(!os||t==="sp")&&Wi(t,(...s)=>e(...s),n)},Af=wt("bm"),vo=wt("m"),Pf=wt("bu"),Of=wt("u"),Df=wt("bum"),gc=wt("um"),kf=wt("sp"),Mf=wt("rtg"),Ff=wt("rtc");function Lf(t,e=Te){Wi("ec",t,e)}const Wf="components",mc=Symbol.for("v-ndc");function Bf(t){return ye(t)?Hf(Wf,t,!1)||t:t||mc}function Hf(t,e,n=!0,s=!1){const i=We||Te;if(i){const r=i.type;{const l=Nd(r,!1);if(l&&(l===e||l===Xe(e)||l===Oi(Xe(e))))return r}const o=ul(i[t]||r[t],e)||ul(i.appContext[t],e);return!o&&s?r:o}}function ul(t,e){return t&&(t[e]||t[Xe(e)]||t[Oi(Xe(e))])}function hl(t,e,n,s){let i;const r=n&&n[s],o=H(t);if(o||ye(t)){const l=o&&Ot(t);let a=!1;l&&(a=!Ye(t),t=ki(t)),i=new Array(t.length);for(let c=0,f=t.length;c<f;c++)i[c]=e(a?Re(t[c]):t[c],c,void 0,r&&r[c])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r&&r[a]));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const f=l[a];i[a]=e(t[f],f,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Or=t=>t?Hc(t)?Ui(t):Or(t.parent):null,zn=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yc(t),$forceUpdate:t=>t.f||(t.f=()=>{xo(t.update)}),$nextTick:t=>t.n||(t.n=ac.bind(t.proxy)),$watch:t=>cd.bind(t)}),ar=(t,e)=>t!==le&&!t.__isScriptSetup&&se(t,e),Uf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ar(s,e))return o[e]=1,s[e];if(i!==le&&se(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,r[e];if(n!==le&&se(n,e))return o[e]=4,n[e];Dr&&(o[e]=0)}}const f=zn[e];let p,g;if(f)return e==="$attrs"&&Ne(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==le&&se(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,se(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ar(i,e)?(i[e]=n,!0):s!==le&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==le&&se(t,o)||ar(e,o)||(l=r[0])&&se(l,o)||se(s,o)||se(zn,o)||se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Dr=!0;function Vf(t){const e=yc(t),n=t.proxy,s=t.ctx;Dr=!1,e.beforeCreate&&dl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:f,beforeMount:p,mounted:g,beforeUpdate:x,updated:w,activated:D,deactivated:K,beforeDestroy:V,beforeUnmount:J,destroyed:ne,unmounted:F,render:Z,renderTracked:Je,renderTriggered:ve,errorCaptured:h,serverPrefetch:u,expose:d,inheritAttrs:b,components:C,directives:k,filters:j}=e;if(c&&jf(c,s,null),o)for(const $ in o){const re=o[$];U(re)&&(s[$]=re.bind(n))}if(i){const $=i.call(n,n);_e($)&&(t.data=Mi($))}if(Dr=!0,r)for(const $ in r){const re=r[$],gt=U(re)?re.bind(n,n):U(re.get)?re.get.bind(n,n):ft,Rs=!U(re)&&U(re.set)?re.set.bind(n):ft,jt=Vc({get:gt,set:Rs});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>jt.value,set:it=>jt.value=it})}if(l)for(const $ in l)xc(l[$],s,n,$);if(a){const $=U(a)?a.call(n):a;Reflect.ownKeys($).forEach(re=>{Yf(re,$[re])})}f&&dl(f,t,"c");function X($,re){H(re)?re.forEach(gt=>$(gt.bind(n))):re&&$(re.bind(n))}if(X(Af,p),X(vo,g),X(Pf,x),X(Of,w),X(Tf,D),X(Nf,K),X(Lf,h),X(Ff,Je),X(Mf,ve),X(Df,J),X(gc,F),X(kf,u),H(d))if(d.length){const $=t.exposed||(t.exposed={});d.forEach(re=>{Object.defineProperty($,re,{get:()=>n[re],set:gt=>n[re]=gt})})}else t.exposed||(t.exposed={});Z&&t.render===ft&&(t.render=Z),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),k&&(t.directives=k),u&&dc(t)}function jf(t,e,n=ft){H(t)&&(t=kr(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=qn(i.from||s,i.default,!0):r=qn(i.from||s):r=qn(i),xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function dl(t,e,n){dt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xc(t,e,n,s){let i=s.includes(".")?Dc(n,s):()=>n[s];if(ye(t)){const r=e[t];U(r)&&Zt(i,r)}else if(U(t))Zt(i,t.bind(n));else if(_e(t))if(H(t))t.forEach(r=>xc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&Zt(i,r,t)}}function yc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Qs(a,c,o,!0)),Qs(a,e,o)),_e(e)&&r.set(e,a),a}function Qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Qs(t,r,n,!0),i&&i.forEach(o=>Qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=$f[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const $f={data:pl,props:_l,emits:_l,methods:Un,computed:Un,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Un,directives:Un,watch:zf,provide:pl,inject:Kf};function pl(t,e){return e?t?function(){return Pe(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Kf(t,e){return Un(kr(t),kr(e))}function kr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?Pe(Object.create(null),t,e):e}function _l(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),fl(t),fl(e??{})):e}function zf(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function vc(){return{app:null,config:{isNativeTag:Ph,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function Gf(t,e){return function(s,i=null){U(s)||(s=Pe({},s)),i!=null&&!_e(i)&&(i=null);const r=vc(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:qf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ad,get config(){return r.config},set config(f){},use(f,...p){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(c,...p)):U(f)&&(o.add(f),f(c,...p))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,p){return p?(r.components[f]=p,c):r.components[f]},directive(f,p){return p?(r.directives[f]=p,c):r.directives[f]},mount(f,p,g){if(!a){const x=c._ceVNode||Qe(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,f,g),a=!0,c._container=f,f.__vue_app__=c,Ui(x.component)}},onUnmount(f){l.push(f)},unmount(){a&&(dt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(f,p){return r.provides[f]=p,c},runWithContext(f){const p=Jt;Jt=c;try{return f()}finally{Jt=p}}};return c}}let Jt=null;function Yf(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function qn(t,e,n=!1){const s=Te||We;if(s||Jt){const i=Jt?Jt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function Qf(){return!!(Te||We||Jt)}const bc={},Cc=()=>Object.create(bc),Ec=t=>Object.getPrototypeOf(t)===bc;function Xf(t,e,n,s=!1){const i={},r=Cc();t.propsDefaults=Object.create(null),Ic(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:cf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Jf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=ee(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Bi(t.emitsOptions,g))continue;const x=e[g];if(a)if(se(r,g))x!==r[g]&&(r[g]=x,c=!0);else{const w=Xe(g);i[w]=Mr(a,l,w,x,t,!1)}else x!==r[g]&&(r[g]=x,c=!0)}}}else{Ic(t,e,i,r)&&(c=!0);let f;for(const p in l)(!e||!se(e,p)&&((f=on(p))===p||!se(e,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=Mr(a,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!se(e,p))&&(delete r[p],c=!0)}c&&yt(t.attrs,"set","")}function Ic(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Vn(a))continue;const c=e[a];let f;i&&se(i,f=Xe(a))?!r||!r.includes(f)?n[f]=c:(l||(l={}))[f]=c:Bi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=ee(n),c=l||le;for(let f=0;f<r.length;f++){const p=r[f];n[p]=Mr(i,a,p,c[p],t,!se(c,p))}}return o}function Mr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=se(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&U(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const f=vs(i);s=c[n]=a.call(null,e),f()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===on(n))&&(s=!0))}return s}const Zf=new WeakMap;function wc(t,e,n=!1){const s=n?Zf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const f=p=>{a=!0;const[g,x]=wc(p,e,!0);Pe(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!a)return _e(t)&&s.set(t,pn),pn;if(H(r))for(let f=0;f<r.length;f++){const p=Xe(r[f]);gl(p)&&(o[p]=le)}else if(r)for(const f in r){const p=Xe(f);if(gl(p)){const g=r[f],x=o[p]=H(g)||U(g)?{type:g}:Pe({},g),w=x.type;let D=!1,K=!0;if(H(w))for(let V=0;V<w.length;++V){const J=w[V],ne=U(J)&&J.name;if(ne==="Boolean"){D=!0;break}else ne==="String"&&(K=!1)}else D=U(w)&&w.name==="Boolean";x[0]=D,x[1]=K,(D||se(x,"default"))&&l.push(p)}}const c=[o,l];return _e(t)&&s.set(t,c),c}function gl(t){return t[0]!=="$"&&!Vn(t)}const Sc=t=>t[0]==="_"||t==="$stable",bo=t=>H(t)?t.map(ht):[ht(t)],ed=(t,e,n)=>{if(e._n)return e;const s=Ef((...i)=>bo(e(...i)),n);return s._c=!1,s},Tc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Sc(i))continue;const r=t[i];if(U(r))e[i]=ed(i,r,s);else if(r!=null){const o=bo(r);e[i]=()=>o}}},Nc=(t,e)=>{const n=bo(e);t.slots.default=()=>n},Rc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},td=(t,e,n)=>{const s=t.slots=Cc();if(t.vnode.shapeFlag&32){const i=e._;i?(Rc(s,e,n),n&&La(s,"_",i,!0)):Tc(e,s)}else e&&Nc(t,e)},nd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Rc(i,e,n):(r=!e.$stable,Tc(e,i)),o=e}else e&&(Nc(t,e),o={default:1});if(r)for(const l in i)!Sc(l)&&o[l]==null&&delete i[l]},Ke=gd;function sd(t){return id(t)}function id(t,e){const n=Di();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:f,parentNode:p,nextSibling:g,setScopeId:x=ft,insertStaticContent:w}=t,D=(_,m,y,S=null,E=null,I=null,P=void 0,A=null,R=!!m.dynamicChildren)=>{if(_===m)return;_&&!Mn(_,m)&&(S=As(_),it(_,E,I,!0),_=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:T,ref:L,shapeFlag:O}=m;switch(T){case Hi:K(_,m,y,S);break;case tn:V(_,m,y,S);break;case ur:_==null&&J(m,y,S,P);break;case ze:C(_,m,y,S,E,I,P,A,R);break;default:O&1?Z(_,m,y,S,E,I,P,A,R):O&6?k(_,m,y,S,E,I,P,A,R):(O&64||O&128)&&T.process(_,m,y,S,E,I,P,A,R,On)}L!=null&&E&&Ys(L,_&&_.ref,I,m||_,!m)},K=(_,m,y,S)=>{if(_==null)s(m.el=l(m.children),y,S);else{const E=m.el=_.el;m.children!==_.children&&c(E,m.children)}},V=(_,m,y,S)=>{_==null?s(m.el=a(m.children||""),y,S):m.el=_.el},J=(_,m,y,S)=>{[_.el,_.anchor]=w(_.children,m,y,S,_.el,_.anchor)},ne=({el:_,anchor:m},y,S)=>{let E;for(;_&&_!==m;)E=g(_),s(_,y,S),_=E;s(m,y,S)},F=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},Z=(_,m,y,S,E,I,P,A,R)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),_==null?Je(m,y,S,E,I,P,A,R):u(_,m,E,I,P,A,R)},Je=(_,m,y,S,E,I,P,A)=>{let R,T;const{props:L,shapeFlag:O,transition:M,dirs:B}=_;if(R=_.el=o(_.type,I,L&&L.is,L),O&8?f(R,_.children):O&16&&h(_.children,R,null,S,E,cr(_,I),P,A),B&&$t(_,null,S,"created"),ve(R,_,_.scopeId,P,S),L){for(const ce in L)ce!=="value"&&!Vn(ce)&&r(R,ce,null,L[ce],I,S);"value"in L&&r(R,"value",null,L.value,I),(T=L.onVnodeBeforeMount)&&at(T,S,_)}B&&$t(_,null,S,"beforeMount");const Q=rd(E,M);Q&&M.beforeEnter(R),s(R,m,y),((T=L&&L.onVnodeMounted)||Q||B)&&Ke(()=>{T&&at(T,S,_),Q&&M.enter(R),B&&$t(_,null,S,"mounted")},E)},ve=(_,m,y,S,E)=>{if(y&&x(_,y),S)for(let I=0;I<S.length;I++)x(_,S[I]);if(E){let I=E.subTree;if(m===I||Mc(I.type)&&(I.ssContent===m||I.ssFallback===m)){const P=E.vnode;ve(_,P,P.scopeId,P.slotScopeIds,E.parent)}}},h=(_,m,y,S,E,I,P,A,R=0)=>{for(let T=R;T<_.length;T++){const L=_[T]=A?At(_[T]):ht(_[T]);D(null,L,m,y,S,E,I,P,A)}},u=(_,m,y,S,E,I,P)=>{const A=m.el=_.el;let{patchFlag:R,dynamicChildren:T,dirs:L}=m;R|=_.patchFlag&16;const O=_.props||le,M=m.props||le;let B;if(y&&Kt(y,!1),(B=M.onVnodeBeforeUpdate)&&at(B,y,m,_),L&&$t(m,_,y,"beforeUpdate"),y&&Kt(y,!0),(O.innerHTML&&M.innerHTML==null||O.textContent&&M.textContent==null)&&f(A,""),T?d(_.dynamicChildren,T,A,y,S,cr(m,E),I):P||re(_,m,A,null,y,S,cr(m,E),I,!1),R>0){if(R&16)b(A,O,M,y,E);else if(R&2&&O.class!==M.class&&r(A,"class",null,M.class,E),R&4&&r(A,"style",O.style,M.style,E),R&8){const Q=m.dynamicProps;for(let ce=0;ce<Q.length;ce++){const ie=Q[ce],Ve=O[ie],Le=M[ie];(Le!==Ve||ie==="value")&&r(A,ie,Ve,Le,E,y)}}R&1&&_.children!==m.children&&f(A,m.children)}else!P&&T==null&&b(A,O,M,y,E);((B=M.onVnodeUpdated)||L)&&Ke(()=>{B&&at(B,y,m,_),L&&$t(m,_,y,"updated")},S)},d=(_,m,y,S,E,I,P)=>{for(let A=0;A<m.length;A++){const R=_[A],T=m[A],L=R.el&&(R.type===ze||!Mn(R,T)||R.shapeFlag&70)?p(R.el):y;D(R,T,L,null,S,E,I,P,!0)}},b=(_,m,y,S,E)=>{if(m!==y){if(m!==le)for(const I in m)!Vn(I)&&!(I in y)&&r(_,I,m[I],null,E,S);for(const I in y){if(Vn(I))continue;const P=y[I],A=m[I];P!==A&&I!=="value"&&r(_,I,A,P,E,S)}"value"in y&&r(_,"value",m.value,y.value,E)}},C=(_,m,y,S,E,I,P,A,R)=>{const T=m.el=_?_.el:l(""),L=m.anchor=_?_.anchor:l("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:B}=m;B&&(A=A?A.concat(B):B),_==null?(s(T,y,S),s(L,y,S),h(m.children||[],y,L,E,I,P,A,R)):O>0&&O&64&&M&&_.dynamicChildren?(d(_.dynamicChildren,M,y,E,I,P,A),(m.key!=null||E&&m===E.subTree)&&Ac(_,m,!0)):re(_,m,y,L,E,I,P,A,R)},k=(_,m,y,S,E,I,P,A,R)=>{m.slotScopeIds=A,_==null?m.shapeFlag&512?E.ctx.activate(m,y,S,P,R):j(m,y,S,E,I,P,R):Y(_,m,R)},j=(_,m,y,S,E,I,P)=>{const A=_.component=Ed(_,S,E);if(pc(_)&&(A.ctx.renderer=On),Id(A,!1,P),A.asyncDep){if(E&&E.registerDep(A,X,P),!_.el){const R=A.subTree=Qe(tn);V(null,R,m,y)}}else X(A,_,m,y,E,I,P)},Y=(_,m,y)=>{const S=m.component=_.component;if(pd(_,m,y))if(S.asyncDep&&!S.asyncResolved){$(S,m,y);return}else S.next=m,S.update();else m.el=_.el,S.vnode=m},X=(_,m,y,S,E,I,P)=>{const A=()=>{if(_.isMounted){let{next:O,bu:M,u:B,parent:Q,vnode:ce}=_;{const ot=Pc(_);if(ot){O&&(O.el=ce.el,$(_,O,P)),ot.asyncDep.then(()=>{_.isUnmounted||A()});return}}let ie=O,Ve;Kt(_,!1),O?(O.el=ce.el,$(_,O,P)):O=ce,M&&Bs(M),(Ve=O.props&&O.props.onVnodeBeforeUpdate)&&at(Ve,Q,O,ce),Kt(_,!0);const Le=xl(_),rt=_.subTree;_.subTree=Le,D(rt,Le,p(rt.el),As(rt),_,E,I),O.el=Le.el,ie===null&&_d(_,Le.el),B&&Ke(B,E),(Ve=O.props&&O.props.onVnodeUpdated)&&Ke(()=>at(Ve,Q,O,ce),E)}else{let O;const{el:M,props:B}=m,{bm:Q,m:ce,parent:ie,root:Ve,type:Le}=_,rt=Kn(m);Kt(_,!1),Q&&Bs(Q),!rt&&(O=B&&B.onVnodeBeforeMount)&&at(O,ie,m),Kt(_,!0);{Ve.ce&&Ve.ce._injectChildStyle(Le);const ot=_.subTree=xl(_);D(null,ot,y,S,_,E,I),m.el=ot.el}if(ce&&Ke(ce,E),!rt&&(O=B&&B.onVnodeMounted)){const ot=m;Ke(()=>at(O,ie,ot),E)}(m.shapeFlag&256||ie&&Kn(ie.vnode)&&ie.vnode.shapeFlag&256)&&_.a&&Ke(_.a,E),_.isMounted=!0,m=y=S=null}};_.scope.on();const R=_.effect=new $a(A);_.scope.off();const T=_.update=R.run.bind(R),L=_.job=R.runIfDirty.bind(R);L.i=_,L.id=_.uid,R.scheduler=()=>xo(L),Kt(_,!0),T()},$=(_,m,y)=>{m.component=_;const S=_.vnode.props;_.vnode=m,_.next=null,Jf(_,m.props,S,y),nd(_,m.children,y),Ut(),cl(_),Vt()},re=(_,m,y,S,E,I,P,A,R=!1)=>{const T=_&&_.children,L=_?_.shapeFlag:0,O=m.children,{patchFlag:M,shapeFlag:B}=m;if(M>0){if(M&128){Rs(T,O,y,S,E,I,P,A,R);return}else if(M&256){gt(T,O,y,S,E,I,P,A,R);return}}B&8?(L&16&&Pn(T,E,I),O!==T&&f(y,O)):L&16?B&16?Rs(T,O,y,S,E,I,P,A,R):Pn(T,E,I,!0):(L&8&&f(y,""),B&16&&h(O,y,S,E,I,P,A,R))},gt=(_,m,y,S,E,I,P,A,R)=>{_=_||pn,m=m||pn;const T=_.length,L=m.length,O=Math.min(T,L);let M;for(M=0;M<O;M++){const B=m[M]=R?At(m[M]):ht(m[M]);D(_[M],B,y,null,E,I,P,A,R)}T>L?Pn(_,E,I,!0,!1,O):h(m,y,S,E,I,P,A,R,O)},Rs=(_,m,y,S,E,I,P,A,R)=>{let T=0;const L=m.length;let O=_.length-1,M=L-1;for(;T<=O&&T<=M;){const B=_[T],Q=m[T]=R?At(m[T]):ht(m[T]);if(Mn(B,Q))D(B,Q,y,null,E,I,P,A,R);else break;T++}for(;T<=O&&T<=M;){const B=_[O],Q=m[M]=R?At(m[M]):ht(m[M]);if(Mn(B,Q))D(B,Q,y,null,E,I,P,A,R);else break;O--,M--}if(T>O){if(T<=M){const B=M+1,Q=B<L?m[B].el:S;for(;T<=M;)D(null,m[T]=R?At(m[T]):ht(m[T]),y,Q,E,I,P,A,R),T++}}else if(T>M)for(;T<=O;)it(_[T],E,I,!0),T++;else{const B=T,Q=T,ce=new Map;for(T=Q;T<=M;T++){const je=m[T]=R?At(m[T]):ht(m[T]);je.key!=null&&ce.set(je.key,T)}let ie,Ve=0;const Le=M-Q+1;let rt=!1,ot=0;const Dn=new Array(Le);for(T=0;T<Le;T++)Dn[T]=0;for(T=B;T<=O;T++){const je=_[T];if(Ve>=Le){it(je,E,I,!0);continue}let lt;if(je.key!=null)lt=ce.get(je.key);else for(ie=Q;ie<=M;ie++)if(Dn[ie-Q]===0&&Mn(je,m[ie])){lt=ie;break}lt===void 0?it(je,E,I,!0):(Dn[lt-Q]=T+1,lt>=ot?ot=lt:rt=!0,D(je,m[lt],y,null,E,I,P,A,R),Ve++)}const il=rt?od(Dn):pn;for(ie=il.length-1,T=Le-1;T>=0;T--){const je=Q+T,lt=m[je],rl=je+1<L?m[je+1].el:S;Dn[T]===0?D(null,lt,y,rl,E,I,P,A,R):rt&&(ie<0||T!==il[ie]?jt(lt,y,rl,2):ie--)}}},jt=(_,m,y,S,E=null)=>{const{el:I,type:P,transition:A,children:R,shapeFlag:T}=_;if(T&6){jt(_.component.subTree,m,y,S);return}if(T&128){_.suspense.move(m,y,S);return}if(T&64){P.move(_,m,y,On);return}if(P===ze){s(I,m,y);for(let O=0;O<R.length;O++)jt(R[O],m,y,S);s(_.anchor,m,y);return}if(P===ur){ne(_,m,y);return}if(S!==2&&T&1&&A)if(S===0)A.beforeEnter(I),s(I,m,y),Ke(()=>A.enter(I),E);else{const{leave:O,delayLeave:M,afterLeave:B}=A,Q=()=>s(I,m,y),ce=()=>{O(I,()=>{Q(),B&&B()})};M?M(I,Q,ce):ce()}else s(I,m,y)},it=(_,m,y,S=!1,E=!1)=>{const{type:I,props:P,ref:A,children:R,dynamicChildren:T,shapeFlag:L,patchFlag:O,dirs:M,cacheIndex:B}=_;if(O===-2&&(E=!1),A!=null&&Ys(A,null,y,_,!0),B!=null&&(m.renderCache[B]=void 0),L&256){m.ctx.deactivate(_);return}const Q=L&1&&M,ce=!Kn(_);let ie;if(ce&&(ie=P&&P.onVnodeBeforeUnmount)&&at(ie,m,_),L&6)Ah(_.component,y,S);else{if(L&128){_.suspense.unmount(y,S);return}Q&&$t(_,null,m,"beforeUnmount"),L&64?_.type.remove(_,m,y,On,S):T&&!T.hasOnce&&(I!==ze||O>0&&O&64)?Pn(T,m,y,!1,!0):(I===ze&&O&384||!E&&L&16)&&Pn(R,m,y),S&&nl(_)}(ce&&(ie=P&&P.onVnodeUnmounted)||Q)&&Ke(()=>{ie&&at(ie,m,_),Q&&$t(_,null,m,"unmounted")},y)},nl=_=>{const{type:m,el:y,anchor:S,transition:E}=_;if(m===ze){Rh(y,S);return}if(m===ur){F(_);return}const I=()=>{i(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(_.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:A}=E,R=()=>P(y,I);A?A(_.el,I,R):R()}else I()},Rh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Ah=(_,m,y)=>{const{bum:S,scope:E,job:I,subTree:P,um:A,m:R,a:T}=_;ml(R),ml(T),S&&Bs(S),E.stop(),I&&(I.flags|=8,it(P,_,m,y)),A&&Ke(A,m),Ke(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Pn=(_,m,y,S=!1,E=!1,I=0)=>{for(let P=I;P<_.length;P++)it(_[P],m,y,S,E)},As=_=>{if(_.shapeFlag&6)return As(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[wf];return y?g(y):m};let nr=!1;const sl=(_,m,y)=>{_==null?m._vnode&&it(m._vnode,null,null,!0):D(m._vnode||null,_,m,null,null,null,y),m._vnode=_,nr||(nr=!0,cl(),uc(),nr=!1)},On={p:D,um:it,m:jt,r:nl,mt:j,mc:h,pc:re,pbc:d,n:As,o:t};return{render:sl,hydrate:void 0,createApp:Gf(sl)}}function cr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ac(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=At(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ac(o,l)),l.type===Hi&&(l.el=o.el)}}function od(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Pc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pc(e)}function ml(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ld=Symbol.for("v-scx"),ad=()=>qn(ld);function Zt(t,e,n){return Oc(t,e,n)}function Oc(t,e,n=le){const{immediate:s,deep:i,flush:r,once:o}=n,l=Pe({},n),a=e&&s||!e&&r!=="post";let c;if(os){if(r==="sync"){const x=ad();c=x.__watcherHandles||(x.__watcherHandles=[])}else if(!a){const x=()=>{};return x.stop=ft,x.resume=ft,x.pause=ft,x}}const f=Te;l.call=(x,w,D)=>dt(x,f,w,D);let p=!1;r==="post"?l.scheduler=x=>{Ke(x,f&&f.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(x,w)=>{w?x():xo(x)}),l.augmentJob=x=>{e&&(x.flags|=4),p&&(x.flags|=2,f&&(x.id=f.uid,x.i=f))};const g=yf(t,e,l);return os&&(c?c.push(g):a&&g()),g}function cd(t,e,n){const s=this.proxy,i=ye(t)?t.includes(".")?Dc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=vs(this),l=Oc(i,r.bind(s),n);return o(),l}function Dc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ud=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xe(e)}Modifiers`]||t[`${on(e)}Modifiers`];function hd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&ud(s,e.slice(7));o&&(o.trim&&(i=n.map(f=>ye(f)?f.trim():f)),o.number&&(i=n.map(Tr)));let l,a=s[l=sr(e)]||s[l=sr(Xe(e))];!a&&r&&(a=s[l=sr(on(e))]),a&&dt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,dt(c,t,6,i)}}function kc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const f=kc(c,e,!0);f&&(l=!0,Pe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(_e(t)&&s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):Pe(o,r),_e(t)&&s.set(t,o),o)}function Bi(t,e){return!t||!Ri(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,on(e))||se(t,e))}function xl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:f,props:p,data:g,setupState:x,ctx:w,inheritAttrs:D}=t,K=Gs(t);let V,J;try{if(n.shapeFlag&4){const F=i||s,Z=F;V=ht(c.call(Z,F,f,p,x,g,w)),J=l}else{const F=e;V=ht(F.length>1?F(p,{attrs:l,slots:o,emit:a}):F(p,null)),J=e.props?l:fd(l)}}catch(F){Gn.length=0,Fi(F,t,1),V=Qe(tn)}let ne=V;if(J&&D!==!1){const F=Object.keys(J),{shapeFlag:Z}=ne;F.length&&Z&7&&(r&&F.some(ro)&&(J=dd(J,r)),ne=bn(ne,J,!1,!0))}return n.dirs&&(ne=bn(ne,null,!1,!0),ne.dirs=ne.dirs?ne.dirs.concat(n.dirs):n.dirs),n.transition&&yo(ne,n.transition),V=ne,Gs(K),V}const fd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ri(n))&&((e||(e={}))[n]=t[n]);return e},dd=(t,e)=>{const n={};for(const s in t)(!ro(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function pd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?yl(s,o,c):!!o;if(a&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==s[g]&&!Bi(c,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?yl(s,o,c):!0:!!o;return!1}function yl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Bi(n,r))return!0}return!1}function _d({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mc=t=>t.__isSuspense;function gd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Cf(t)}const ze=Symbol.for("v-fgt"),Hi=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),ur=Symbol.for("v-stc"),Gn=[];let qe=null;function oe(t=!1){Gn.push(qe=t?null:[])}function md(){Gn.pop(),qe=Gn[Gn.length-1]||null}let rs=1;function vl(t,e=!1){rs+=t,t<0&&qe&&e&&(qe.hasOnce=!0)}function Fc(t){return t.dynamicChildren=rs>0?qe||pn:null,md(),rs>0&&qe&&qe.push(t),t}function de(t,e,n,s,i,r){return Fc(v(t,e,n,s,i,r,!0))}function Lc(t,e,n,s,i){return Fc(Qe(t,e,n,s,i,!0))}function Wc(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const Bc=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||xe(t)||U(t)?{i:We,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,i=null,r=t===ze?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bc(e),ref:e&&Hs(e),scopeId:fc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return l?(Co(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ye(n)?8:16),rs>0&&!o&&qe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&qe.push(a),a}const Qe=xd;function xd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===mc)&&(t=tn),Wc(t)){const l=bn(t,e,!0);return n&&Co(l,n),rs>0&&!r&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag=-2,l}if(Rd(t)&&(t=t.__vccOpts),e){e=yd(e);let{class:l,style:a}=e;l&&!ye(l)&&(e.class=gn(l)),_e(a)&&(go(a)&&!H(a)&&(a=Pe({},a)),e.style=ao(a))}const o=ye(t)?1:Mc(t)?128:Sf(t)?64:_e(t)?4:U(t)?2:0;return v(t,e,n,s,i,o,r,!0)}function yd(t){return t?go(t)||Ec(t)?Pe({},t):t:null}function bn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?vd(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Bc(c),ref:e&&e.ref?n&&r?H(r)?r.concat(Hs(e)):[r,Hs(e)]:Hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&yo(f,a.clone(f)),f}function ge(t=" ",e=0){return Qe(Hi,null,t,e)}function De(t="",e=!1){return e?(oe(),Lc(tn,null,t)):Qe(tn,null,t)}function ht(t){return t==null||typeof t=="boolean"?Qe(tn):H(t)?Qe(ze,null,t.slice()):Wc(t)?At(t):Qe(Hi,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function Co(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Co(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ec(e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[ge(e)]):n=8);t.children=e,t.shapeFlag|=n}function vd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=gn([e.class,s.class]));else if(i==="style")e.style=ao([e.style,s.style]);else if(Ri(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function at(t,e,n,s=null){dt(t,e,7,[n,s])}const bd=vc();let Cd=0;function Ed(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||bd,r={uid:Cd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ua(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wc(s,i),emitsOptions:kc(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hd.bind(null,r),t.ce&&t.ce(r),r}let Te=null,Xs,Fr;{const t=Di(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Xs=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),Fr=e("__VUE_SSR_SETTERS__",n=>os=n)}const vs=t=>{const e=Te;return Xs(t),t.scope.on(),()=>{t.scope.off(),Xs(e)}},bl=()=>{Te&&Te.scope.off(),Xs(null)};function Hc(t){return t.vnode.shapeFlag&4}let os=!1;function Id(t,e=!1,n=!1){e&&Fr(e);const{props:s,children:i}=t.vnode,r=Hc(t);Xf(t,s,r,e),td(t,i,n);const o=r?wd(t,e):void 0;return e&&Fr(!1),o}function wd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Uf);const{setup:s}=n;if(s){Ut();const i=t.setupContext=s.length>1?Td(t):null,r=vs(t),o=ys(s,t,0,[t.props,i]),l=ka(o);if(Vt(),r(),(l||t.sp)&&!Kn(t)&&dc(t),l){if(o.then(bl,bl),e)return o.then(a=>{Cl(t,a)}).catch(a=>{Fi(a,t,0)});t.asyncDep=o}else Cl(t,o)}else Uc(t)}function Cl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=oc(e)),Uc(t)}function Uc(t,e,n){const s=t.type;t.render||(t.render=s.render||ft);{const i=vs(t);Ut();try{Vf(t)}finally{Vt(),i()}}}const Sd={get(t,e){return Ne(t,"get",""),t[e]}};function Td(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sd),slots:t.slots,emit:t.emit,expose:e}}function Ui(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(oc(mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zn)return zn[n](t)},has(e,n){return n in e||n in zn}})):t.proxy}function Nd(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function Rd(t){return U(t)&&"__vccOpts"in t}const Vc=(t,e)=>mf(t,e,os),Ad="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lr;const El=typeof window<"u"&&window.trustedTypes;if(El)try{Lr=El.createPolicy("vue",{createHTML:t=>t})}catch{}const jc=Lr?t=>Lr.createHTML(t):t=>t,Pd="http://www.w3.org/2000/svg",Od="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,Il=xt&&xt.createElement("template"),Dd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?xt.createElementNS(Pd,t):e==="mathml"?xt.createElementNS(Od,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Il.innerHTML=jc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Il.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kd=Symbol("_vtc");function Md(t,e,n){const s=t[kd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wl=Symbol("_vod"),Fd=Symbol("_vsh"),Ld=Symbol(""),Wd=/(^|;)\s*display\s*:/;function Bd(t,e,n){const s=t.style,i=ye(n);let r=!1;if(n&&!i){if(e)if(ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Us(s,l,"")}else for(const o in e)n[o]==null&&Us(s,o,"");for(const o in n)o==="display"&&(r=!0),Us(s,o,n[o])}else if(i){if(e!==n){const o=s[Ld];o&&(n+=";"+o),s.cssText=n,r=Wd.test(n)}}else e&&t.removeAttribute("style");wl in t&&(t[wl]=r?s.display:"",t[Fd]&&(s.display="none"))}const Sl=/\s*!important$/;function Us(t,e,n){if(H(n))n.forEach(s=>Us(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Hd(t,e);Sl.test(n)?t.setProperty(on(s),n.replace(Sl,""),"important"):t[s]=n}}const Tl=["Webkit","Moz","ms"],hr={};function Hd(t,e){const n=hr[e];if(n)return n;let s=Xe(e);if(s!=="filter"&&s in t)return hr[e]=s;s=Oi(s);for(let i=0;i<Tl.length;i++){const r=Tl[i]+s;if(r in t)return hr[e]=r}return e}const Nl="http://www.w3.org/1999/xlink";function Rl(t,e,n,s,i,r=Uh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nl,e.slice(6,e.length)):t.setAttributeNS(Nl,e,n):n==null||r&&!Wa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ht(n)?String(n):n)}function Al(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wa(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function fn(t,e,n,s){t.addEventListener(e,n,s)}function Ud(t,e,n,s){t.removeEventListener(e,n,s)}const Pl=Symbol("_vei");function Vd(t,e,n,s,i=null){const r=t[Pl]||(t[Pl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=jd(e);if(s){const c=r[e]=zd(s,i);fn(t,l,c,a)}else o&&(Ud(t,l,o,a),r[e]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function jd(t){let e;if(Ol.test(t)){e={};let s;for(;s=t.match(Ol);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let fr=0;const $d=Promise.resolve(),Kd=()=>fr||($d.then(()=>fr=0),fr=Date.now());function zd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(qd(s,n.value),e,5,[s])};return n.value=t,n.attached=Kd(),n}function qd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Dl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Md(t,s,o):e==="style"?Bd(t,n,s):Ri(e)?ro(e)||Vd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yd(t,e,s,o))?(Al(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(s))?Al(t,Xe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rl(t,e,s,o))};function Yd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Dl(e)&&ye(n)?!1:e in t}const kl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Bs(e,n):e};function Qd(t){t.target.composing=!0}function Ml(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dr=Symbol("_assign"),Xd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[dr]=kl(i);const r=s||i.props&&i.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Tr(l)),t[dr](l)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",Qd),fn(t,"compositionend",Ml),fn(t,"change",Ml))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[dr]=kl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Tr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Jd=Pe({patchProp:Gd},Dd);let Fl;function Zd(){return Fl||(Fl=sd(Jd))}const ep=(...t)=>{const e=Zd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=np(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,tp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function np(t){return ye(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $c;const Vi=t=>$c=t,Kc=Symbol();function Wr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yn||(Yn={}));function sp(){const t=Va(!0),e=t.run(()=>Ge({}));let n=[],s=[];const i=mo({install(r){Vi(i),i._a=r,r.provide(Kc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const zc=()=>{};function Ll(t,e,n,s=zc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ja()&&Vh(i),i}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}const ip=t=>t(),Wl=Symbol(),pr=Symbol();function Br(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Wr(i)&&Wr(s)&&t.hasOwnProperty(n)&&!xe(s)&&!Ot(s)?t[n]=Br(i,s):t[n]=s}return t}const rp=Symbol();function op(t){return!Wr(t)||!t.hasOwnProperty(rp)}const{assign:Nt}=Object;function lp(t){return!!(xe(t)&&t.effect)}function ap(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const f=df(n.state.value[t]);return Nt(f,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=mo(Vc(()=>{Vi(n);const x=n._s.get(t);return o[g].call(x,x)})),p),{}))}return a=qc(t,c,e,n,s,!0),a}function qc(t,e,n={},s,i,r){let o;const l=Nt({actions:{}},n),a={deep:!0};let c,f,p=[],g=[],x;const w=s.state.value[t];!r&&!w&&(s.state.value[t]={}),Ge({});let D;function K(h){let u;c=f=!1,typeof h=="function"?(h(s.state.value[t]),u={type:Yn.patchFunction,storeId:t,events:x}):(Br(s.state.value[t],h),u={type:Yn.patchObject,payload:h,storeId:t,events:x});const d=D=Symbol();ac().then(()=>{D===d&&(c=!0)}),f=!0,cn(p,u,s.state.value[t])}const V=r?function(){const{state:u}=n,d=u?u():{};this.$patch(b=>{Nt(b,d)})}:zc;function J(){o.stop(),p=[],g=[],s._s.delete(t)}const ne=(h,u="")=>{if(Wl in h)return h[pr]=u,h;const d=function(){Vi(s);const b=Array.from(arguments),C=[],k=[];function j($){C.push($)}function Y($){k.push($)}cn(g,{args:b,name:d[pr],store:Z,after:j,onError:Y});let X;try{X=h.apply(this&&this.$id===t?this:Z,b)}catch($){throw cn(k,$),$}return X instanceof Promise?X.then($=>(cn(C,$),$)).catch($=>(cn(k,$),Promise.reject($))):(cn(C,X),X)};return d[Wl]=!0,d[pr]=u,d},F={_p:s,$id:t,$onAction:Ll.bind(null,g),$patch:K,$reset:V,$subscribe(h,u={}){const d=Ll(p,h,u.detached,()=>b()),b=o.run(()=>Zt(()=>s.state.value[t],C=>{(u.flush==="sync"?f:c)&&h({storeId:t,type:Yn.direct,events:x},C)},Nt({},a,u)));return d},$dispose:J},Z=Mi(F);s._s.set(t,Z);const ve=(s._a&&s._a.runWithContext||ip)(()=>s._e.run(()=>(o=Va()).run(()=>e({action:ne}))));for(const h in ve){const u=ve[h];if(xe(u)&&!lp(u)||Ot(u))r||(w&&op(u)&&(xe(u)?u.value=w[h]:Br(u,w[h])),s.state.value[t][h]=u);else if(typeof u=="function"){const d=ne(u,h);ve[h]=d,l.actions[h]=u}}return Nt(Z,ve),Nt(ee(Z),ve),Object.defineProperty(Z,"$state",{get:()=>s.state.value[t],set:h=>{K(u=>{Nt(u,h)})}}),s._p.forEach(h=>{Nt(Z,o.run(()=>h({store:Z,app:s._a,pinia:s,options:l})))}),w&&r&&n.hydrate&&n.hydrate(Z.$state,w),c=!0,f=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function cp(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=Qf();return o=o||(a?qn(Kc,null):null),o&&Vi(o),o=$c,o._s.has(t)||(i?qc(t,e,s,o):ap(t,s,o)),o._s.get(t)}return r.$id=t,r}const up=()=>{};var Bl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Sn(e)},Sn=function(t){return new Error("Firebase Database ("+Gc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|c>>6,x=c&63;a||(x=64,o||(g=64)),s.push(n[f],n[p],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||p==null)throw new fp;const g=r<<2|l>>4;if(s.push(g),c!==64){const x=l<<4&240|c>>2;if(s.push(x),p!==64){const w=c<<6&192|p;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qc=function(t){const e=Yc(t);return Eo.encodeByteArray(e,!0)},Js=function(t){return Qc(t).replace(/\./g,"")},Hr=function(t){try{return Eo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){return Xc(void 0,t)}function Xc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pp(n)||(t[n]=Xc(t[n],e[n]));return t}function pp(t){return t!=="__proto__"}/**
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
 */const gp=()=>_p().__FIREBASE_DEFAULTS__,mp=()=>{if(typeof process>"u"||typeof Bl>"u")return;const t=Bl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hr(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return up()||gp()||mp()||xp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yp=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vp=t=>{const e=yp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Zc=()=>{var t;return(t=Jc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Js(JSON.stringify(n)),Js(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cp())}function Ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ip(){return Gc.NODE_ADMIN===!0}function wp(){try{return typeof indexedDB=="object"}catch{return!1}}function Sp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="FirebaseError";class bs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tp,Object.setPrototypeOf(this,bs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tu.prototype.create)}}class tu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Np(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bs(i,l,s)}}function Np(t,e){return t.replace(Rp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Rp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ls(Hr(r[0])||""),n=ls(Hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ap=function(t){const e=nu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Pp=function(t){const e=nu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ei(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ul(r)&&Ul(o)){if(!ei(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ul(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,f;for(let p=0;p<80;p++){p<40?p<20?(c=l^r&(o^l),f=1518500249):(c=r^o^l,f=1859775393):p<60?(c=r&o|l&(r|o),f=2400959708):(c=r^o^l,f=3395469782);const g=(i<<5|i>>>27)+c+a+f+s[p]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Io(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,N(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$i=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Tn(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Wp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Bp={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Hp=he.INFO,Up={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Vp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Up[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class su{constructor(e){this.name=e,this._logLevel=Hp,this._logHandler=Vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const jp=(t,e)=>e.some(n=>t instanceof n);let Vl,jl;function $p(){return Vl||(Vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kp(){return jl||(jl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iu=new WeakMap,Ur=new WeakMap,ru=new WeakMap,_r=new WeakMap,wo=new WeakMap;function zp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Dt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iu.set(n,t)}).catch(()=>{}),wo.set(e,t),e}function qp(t){if(Ur.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ur.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ru.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gp(t){Vr=t(Vr)}function Yp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gr(this),e,...n);return ru.set(s,e.sort?e.sort():[e]),Dt(s)}:Kp().includes(t)?function(...e){return t.apply(gr(this),e),Dt(iu.get(this))}:function(...e){return Dt(t.apply(gr(this),e))}}function Qp(t){return typeof t=="function"?Yp(t):(t instanceof IDBTransaction&&qp(t),jp(t,$p())?new Proxy(t,Vr):t)}function Dt(t){if(t instanceof IDBRequest)return zp(t);if(_r.has(t))return _r.get(t);const e=Qp(t);return e!==t&&(_r.set(t,e),wo.set(e,t)),e}const gr=t=>wo.get(t);function Xp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Dt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Dt(o.result),a.oldVersion,a.newVersion,Dt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Jp=["get","getKey","getAll","getAllKeys","count"],Zp=["put","add","delete","clear"],mr=new Map;function $l(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mr.get(e))return mr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Zp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Jp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return mr.set(e,r),r}Gp(t=>({...t,get:(e,n,s)=>$l(e,n)||t.get(e,n,s),has:(e,n)=>!!$l(e,n)||t.has(e,n)}));/**
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
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function t_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",Kl="0.11.2";/**
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
 */const Et=new su("@firebase/app"),n_="@firebase/app-compat",s_="@firebase/analytics-compat",i_="@firebase/analytics",r_="@firebase/app-check-compat",o_="@firebase/app-check",l_="@firebase/auth",a_="@firebase/auth-compat",c_="@firebase/database",u_="@firebase/data-connect",h_="@firebase/database-compat",f_="@firebase/functions",d_="@firebase/functions-compat",p_="@firebase/installations",__="@firebase/installations-compat",g_="@firebase/messaging",m_="@firebase/messaging-compat",x_="@firebase/performance",y_="@firebase/performance-compat",v_="@firebase/remote-config",b_="@firebase/remote-config-compat",C_="@firebase/storage",E_="@firebase/storage-compat",I_="@firebase/firestore",w_="@firebase/vertexai",S_="@firebase/firestore-compat",T_="firebase",N_="11.4.0";/**
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
 */const $r="[DEFAULT]",R_={[jr]:"fire-core",[n_]:"fire-core-compat",[i_]:"fire-analytics",[s_]:"fire-analytics-compat",[o_]:"fire-app-check",[r_]:"fire-app-check-compat",[l_]:"fire-auth",[a_]:"fire-auth-compat",[c_]:"fire-rtdb",[u_]:"fire-data-connect",[h_]:"fire-rtdb-compat",[f_]:"fire-fn",[d_]:"fire-fn-compat",[p_]:"fire-iid",[__]:"fire-iid-compat",[g_]:"fire-fcm",[m_]:"fire-fcm-compat",[x_]:"fire-perf",[y_]:"fire-perf-compat",[v_]:"fire-rc",[b_]:"fire-rc-compat",[C_]:"fire-gcs",[E_]:"fire-gcs-compat",[I_]:"fire-fst",[S_]:"fire-fst-compat",[w_]:"fire-vertex","fire-js":"fire-js",[T_]:"fire-js-all"};/**
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
 */const ti=new Map,A_=new Map,Kr=new Map;function zl(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Kr.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Kr.set(e,t);for(const n of ti.values())zl(n,t);for(const n of A_.values())zl(n,t);return!0}function P_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function O_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const D_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new tu("app","Firebase",D_);/**
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
 */class k_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const M_=N_;function ou(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$r,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(n||(n=Zc()),!n)throw kt.create("no-options");const r=ti.get(i);if(r){if(ei(n,r.options)&&ei(s,r.config))return r;throw kt.create("duplicate-app",{appName:i})}const o=new Wp(i);for(const a of Kr.values())o.addComponent(a);const l=new k_(n,s,o);return ti.set(i,l),l}function F_(t=$r){const e=ti.get(t);if(!e&&t===$r&&Zc())return ou();if(!e)throw kt.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let i=(s=R_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}ni(new as(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const L_="firebase-heartbeat-database",W_=1,cs="firebase-heartbeat-store";let xr=null;function lu(){return xr||(xr=Xp(L_,W_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),xr}async function B_(t){try{const n=(await lu()).transaction(cs),s=await n.objectStore(cs).get(au(t));return await n.done,s}catch(e){if(e instanceof bs)Et.warn(e.message);else{const n=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(n.message)}}}async function ql(t,e){try{const s=(await lu()).transaction(cs,"readwrite");await s.objectStore(cs).put(e,au(t)),await s.done}catch(n){if(n instanceof bs)Et.warn(n.message);else{const s=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(s.message)}}}function au(t){return`${t.name}!${t.options.appId}`}/**
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
 */const H_=1024,U_=30;class V_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>U_){const o=K_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Et.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gl(),{heartbeatsToSend:s,unsentEntries:i}=j_(this._heartbeatsCache.heartbeats),r=Js(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Et.warn(n),""}}}function Gl(){return new Date().toISOString().substring(0,10)}function j_(t,e=H_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wp()?Sp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await B_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yl(t){return Js(JSON.stringify({version:2,heartbeats:t})).length}function K_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function z_(t){ni(new as("platform-logger",e=>new e_(e),"PRIVATE")),ni(new as("heartbeat",e=>new V_(e),"PRIVATE")),xn(jr,Kl,t),xn(jr,Kl,"esm2017"),xn("fire-js","")}z_("");var q_="firebase",G_="11.4.0";/**
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
 */xn(q_,G_,"app");var Ql={};const Xl="@firebase/database",Jl="1.0.13";/**
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
 */let cu="";function Y_(t){cu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Q_(e)}}catch{}return new X_},Yt=uu("localStorage"),J_=uu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new su("@firebase/database"),Z_=function(){let t=1;return function(){return t++}}(),hu=function(t){const e=kp(t),n=new Dp;n.update(e);const s=n.digest();return Eo.encodeByteArray(s)},Cs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Cs.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let Qn=null,Zl=!0;const eg=function(t,e){N(!0,"Can't turn on custom loggers persistently."),yn.logLevel=he.VERBOSE,Qn=yn.log.bind(yn)},Ae=function(...t){if(Zl===!0&&(Zl=!1,Qn===null&&J_.get("logging_enabled")===!0&&eg()),Qn){const e=Cs.apply(null,t);Qn(e)}},Es=function(t){return function(...e){Ae(t,...e)}},zr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cs(...t);yn.error(e)},It=function(...t){const e=`FIREBASE FATAL ERROR: ${Cs(...t)}`;throw yn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Cs(...t);yn.warn(e)},tg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ng=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},En="[MIN_NAME]",nn="[MAX_NAME]",Nn=function(t,e){if(t===e)return 0;if(t===En||e===nn)return-1;if(e===En||t===nn)return 1;{const n=ea(t),s=ea(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},sg=function(t,e){return t===e?0:t<e?-1:1},Fn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},So=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=So(t[e[s]]);return n+="}",n},du=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pu=function(t){N(!fu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const f=c.join("");let p="";for(a=0;a<64;a+=8){let g=parseInt(f.substr(a,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},ig=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function og(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const lg=new RegExp("^-?(0*)\\d{1,10}$"),ag=-2147483648,cg=2147483647,ea=function(t){if(lg.test(t)){const e=Number(t);if(e>=ag&&e<=cg)return e}return null},Rn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},ug=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */const To="5",_u="v",gu="s",mu="r",xu="f",yu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vu="ls",bu="p",qr="ac",Cu="websocket",Eu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wu(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let s;if(e===Cu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Eu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dg(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="start",mg="close",xg="pLPCommand",yg="pRTLPCB",Su="id",Tu="pw",Nu="ser",vg="cb",bg="seg",Cg="ts",Eg="d",Ig="dframe",Ru=1870,Au=30,wg=Ru-Au,Sg=25e3,Tg=3e4;class dn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=No(n),this.urlFn=a=>(this.appCheckToken&&(a[qr]=this.appCheckToken),wu(n,Eu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Tg)),ng(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ro((...r)=>{const[o,l,a,c,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ta)this.id=l,this.password=a;else if(o===mg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ta]="t",s[Nu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_u]=To,this.transportSessionId&&(s[gu]=this.transportSessionId),this.lastSessionId&&(s[vu]=this.lastSessionId),this.applicationId&&(s[bu]=this.applicationId),this.appCheckToken&&(s[qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&yu.test(location.hostname)&&(s[mu]=xu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dn.forceAllow_=!0}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){return dn.forceAllow_?!0:!dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ig()&&!rg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qc(n),i=du(s,wg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ig]="t",s[Su]=e,s[Tu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ro{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Z_(),window[xg+this.uniqueCallbackIdentifier]=e,window[yg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ro.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Su]=this.myID,e[Tu]=this.myPW,e[Nu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Au+s.length<=Ru;){const o=this.pendingSegs.shift();s=s+"&"+bg+i+"="+o.seg+"&"+Cg+i+"="+o.ts+"&"+Eg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Sg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=16384,Rg=45e3;let si=null;typeof MozWebSocket<"u"?si=MozWebSocket:typeof WebSocket<"u"&&(si=WebSocket);class Ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=No(n),this.connURL=Ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_u]=To,typeof location<"u"&&location.hostname&&yu.test(location.hostname)&&(o[mu]=xu),n&&(o[gu]=n),s&&(o[vu]=s),i&&(o[qr]=i),r&&(o[bu]=r),wu(e,Cu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{let s;Ip(),this.mySock=new si(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&si!==null&&!Ze.forceDisallow_}static previouslyFailed(){return Yt.isInMemoryStorage||Yt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=du(n,Ng);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static get ALL_TRANSPORTS(){return[dn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ze&&Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=6e4,Pg=5e3,Og=10*1024,Dg=100*1024,br="t",na="d",kg="s",sa="r",Mg="e",ia="o",ra="a",oa="n",la="p",Fg="h";class Lg{constructor(e,n,s,i,r,o,l,a,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Og?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(br in e){const n=e[br];n===ra?this.upgradeIfSecondaryHealthy_():n===sa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ia&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:la,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ra,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fn(br,e);if(na in e){const s=e[na];if(n===Fg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===oa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kg?this.onConnectionShutdown_(s):n===sa?this.onReset_(s):n===Mg?zr("Server Error: "+s):n===ia?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),To!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ag))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:la,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ou{static getInstance(){return new ii}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=32,ca=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new ae("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lt(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function Du(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Wg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ku(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ae(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Fe(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ao(t,e){if(Lt(t)!==Lt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Lt(t)>Lt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Bg{constructor(e,n){this.errorPrefix_=n,this.parts_=ku(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$i(this.parts_[s]);Fu(this)}}function Hg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$i(e),Fu(t)}function Ug(t){const e=t.parts_.pop();t.byteLength_-=$i(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fu(t){if(t.byteLength_>ca)throw new Error(t.errorPrefix_+"has a key path longer than "+ca+" bytes ("+t.byteLength_+").");if(t.parts_.length>aa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+aa+") or object contains a cycle "+Gt(t))}function Gt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Ou{static getInstance(){return new Po}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=1e3,Vg=60*5*1e3,ua=30*1e3,jg=1.3,$g=3e4,Kg="server_kill",ha=3;class Ct extends Pu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ct.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ln,this.maxReconnectDelay_=Vg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Po.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ii.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ct.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ua)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ap(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zr("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$g&&(this.reconnectDelay_=Ln),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(p){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:a,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Lg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{He(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kg)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&He(p),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hl(this.interruptReasons_)&&(this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>So(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ha&&(this.reconnectDelay_=ua,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ha&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cu.replace(/\./g,"-")]=1,eu()?e["framework.cordova"]=1:Ep()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ii.getInstance().currentlyOnline();return Hl(this.interruptReasons_)&&e}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(En,e),i=new q(En,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;class Lu extends Ki{static get __EMPTY_NODE(){return ks}static set __EMPTY_NODE(e){ks=e}compare(e,n){return Nn(e.name,n.name)}isDefinedOn(e){throw Sn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(nn,ks)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,ks)}toString(){return".key"}}const vn=new Lu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??Be.EMPTY_NODE,this.right=r??Be.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class zg{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ms(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){return Nn(t.name,e.name)}function Oo(t,e){return Nn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;function Gg(t){Gr=t}const Wu=function(t){return typeof t=="number"?"number:"+pu(t):"string:"+t},Bu=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else N(t===Gr||t.isEmpty(),"priority of unexpected type.");N(t===Gr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;class Ie{static set __childrenNodeConstructor(e){fa=e}static get __childrenNodeConstructor(){return fa}constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:z(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(N(s!==".priority"||Lt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pu(this.value_):e+=this.value_,this.lazyHash_=hu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ie.VALUE_TYPE_ORDER.indexOf(n),r=Ie.VALUE_TYPE_ORDER.indexOf(s);return N(i>=0,"Unknown leaf type: "+n),N(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu,Uu;function Yg(t){Hu=t}function Qg(t){Uu=t}class Xg extends Ki{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(nn,new Ie("[PRIORITY-POST]",Uu))}makePost(e,n){const s=Hu(e);return new q(n,new Ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new Xg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=Math.log(2);class Zg{constructor(e){const n=r=>parseInt(Math.log(r)/Jg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ri=function(t,e,n,s){t.sort(e);const i=function(a,c){const f=c-a;let p,g;if(f===0)return null;if(f===1)return p=t[a],g=n?n(p):p,new we(g,p.node,we.BLACK,null,null);{const x=parseInt(f/2,10)+a,w=i(a,x),D=i(x+1,c);return p=t[x],g=n?n(p):p,new we(g,p.node,we.BLACK,w,D)}},r=function(a){let c=null,f=null,p=t.length;const g=function(w,D){const K=p-w,V=p;p-=w;const J=i(K+1,V),ne=t[K],F=n?n(ne):ne;x(new we(F,ne.node,D,null,J))},x=function(w){c?(c.left=w,c=w):(f=w,c=w)};for(let w=0;w<a.count;++w){const D=a.nextBitIsOne(),K=Math.pow(2,a.count-(w+1));D?g(K,we.BLACK):(g(K,we.BLACK),g(K,we.RED))}return f},o=new Zg(t.length),l=r(o);return new Be(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;const un={};class bt{static get Default(){return N(un&&me,"ChildrenNode.ts has not been loaded"),Cr=Cr||new bt({".priority":un},{".priority":me}),Cr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){N(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ri(s,e.getCompare()):l=un;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const f=Object.assign({},this.indexes_);return f[a]=l,new bt(f,c)}addToIndexes(e,n){const s=Zs(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ri(l,o.getCompare())}else return un;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new q(e.name,l))),a.insert(e,e.node)}});return new bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Zs(this.indexes_,i=>{if(i===un)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new bt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn;class W{static get EMPTY_NODE(){return Wn||(Wn=new W(new Be(Oo),null,bt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bu(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wn}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wn:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Wn:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{N(z(e)!==".priority"||Lt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wu(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Is?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),i=n.getIterator(me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class em extends W{constructor(){super(new Be(Oo),W.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Is=new em;Object.defineProperties(q,{MIN:{value:new q(En,W.EMPTY_NODE)},MAX:{value:new q(nn,Is)}});Lu.__EMPTY_NODE=W.EMPTY_NODE;Ie.__childrenNodeConstructor=W;Gg(Is);Qg(Is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=!0;function Se(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,Se(e))}if(!(t instanceof Array)&&tm){const n=[];let s=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Se(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new q(o,a)))}}),n.length===0)return W.EMPTY_NODE;const r=ri(n,qg,o=>o.name,Oo);if(s){const o=ri(n,me.getCompare());return new W(r,Se(e),new bt({".priority":o},{".priority":me}))}else return new W(r,Se(e),bt.Default)}else{let n=W.EMPTY_NODE;return Ue(t,(s,i)=>{if(St(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}Yg(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends Ki{constructor(e){super(),this.indexPath_=e,N(!G(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Is);return new q(nn,e)}toString(){return ku(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends Ki{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Nn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=Se(e);return new q(n,s)}toString(){return".value"}}const im=new sm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(In(n,s)):o.trackChildChange(fs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(i,r)=>{n.hasChild(i)||s.trackChildChange(hs(i,r))}),n.isLeafNode()||n.forEachChild(me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fs(i,r,o))}else s.trackChildChange(In(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.indexedFilter_=new Do(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ds.getStartPost_(e),this.endPost_=ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,l)=>{r.matches(new q(o,l))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,x)=>p(x,g)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new q(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,a);if(f&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(fs(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(hs(n,p));const D=l.updateImmediateChild(n,W.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(In(g.name,g.node)),D.updateImmediateChild(g.name,g.node)):D}}else return s.isEmpty()?e:f&&o(c,a)>=0?(r!=null&&(r.trackChildChange(hs(c.name,c.node)),r.trackChildChange(In(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new ko;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lm(t){return t.loadsAllData()?new Do(t.getIndex()):t.hasLimit()?new om(t):new ds(t)}function da(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===im?n="$value":t.index_===vn?n="$key":(N(t.index_ instanceof nm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function pa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Pu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=oi.getListenId_(e,s),l={};this.listens_[o]=l;const a=da(e._queryParams);this.restRequest_(r+".json",a,(c,f)=>{let p=f;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(r,p,!1,s),Cn(this.listens_,o)===l){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",i(g,null)}})}unlisten(e,n){const s=oi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=da(e._queryParams),s=e._path.toString(),i=new ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Op(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ls(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){return{value:null,children:new Map}}function ju(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,li());const i=t.children.get(s);e=fe(e),ju(i,e,n)}}function Yr(t,e,n){t.value!==null?n(e,t.value):cm(t,(s,i)=>{const r=new ae(e.toString()+"/"+s);Yr(i,r,n)})}function cm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=10*1e3,hm=30*1e3,fm=5*60*1e3;class dm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new um(e);const s=_a+(hm-_a)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ue(e,(i,r)=>{r>0&&St(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*fm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function $u(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=$u()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new ai(te(),n,this.revert)}}else return N(z(this.path)===e,"operationForChild called for unrelated child."),new ai(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new ps(this.source,te()):new ps(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return G(this.path)?new sn(this.source,te(),this.snap.getImmediateChild(e)):new sn(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new sn(this.source,te(),n.value):new _s(this.source,te(),n)}else return N(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _m(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rm(o.childName,o.snapshotNode))}),Bn(t,i,"child_removed",e,s,n),Bn(t,i,"child_added",e,s,n),Bn(t,i,"child_moved",r,s,n),Bn(t,i,"child_changed",e,s,n),Bn(t,i,"value",e,s,n),i}function Bn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>mm(t,l,a)),o.forEach(l=>{const a=gm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function gm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mm(t,e,n){if(e.childName==null||n.childName==null)throw Sn("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e){return{eventCache:t,serverCache:e}}function Jn(t,e,n,s){return zi(new Wt(e,n,s),t.serverCache)}function Ku(t,e,n,s){return zi(t.eventCache,new Wt(e,n,s))}function ci(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;const xm=()=>(Er||(Er=new Be(sg)),Er);class pe{static fromObject(e){let n=new pe(null);return Ue(e,(s,i)=>{n=n.set(new ae(s),i)}),n}constructor(e,n=xm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(G(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(fe(e),n);return r!=null?{path:Ce(new ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new pe(null)}}set(e,n){if(G(e))return new pe(n,this.children);{const s=z(e),r=(this.children.get(s)||new pe(null)).set(fe(e),n),o=this.children.insert(s,r);return new pe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(fe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(G(e))return n;{const s=z(e),r=(this.children.get(s)||new pe(null)).setTree(fe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new pe(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(fe(e),Ce(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(fe(e),Ce(n,i),s):new pe(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new pe(null))}}function Zn(t,e,n){if(G(e))return new st(new pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new st(t.writeTree_.set(i,r))}else{const i=new pe(n),r=t.writeTree_.setTree(e,i);return new st(r)}}}function ga(t,e,n){let s=t;return Ue(n,(i,r)=>{s=Zn(s,Ce(e,i),r)}),s}function ma(t,e){if(G(e))return st.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new st(n)}}function Qr(t,e){return ln(t,e)!=null}function ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function xa(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Mt(t,e){if(G(e))return t;{const n=ln(t,e);return n!=null?new st(new pe(n)):new st(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function wn(t,e){return zu(te(),t.writeTree_,e)}function zu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=zu(Ce(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){return Qu(e,t)}function ym(t,e,n,s,i){N(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zn(t.visibleWrites,e,n)),t.lastWriteId=s}function vm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function bm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Cm(l,s.path)?i=!1:et(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Em(t),!0;if(s.snap)t.visibleWrites=ma(t.visibleWrites,s.path);else{const l=s.children;Ue(l,a=>{t.visibleWrites=ma(t.visibleWrites,Ce(s.path,a))})}return!0}else return!1}function Cm(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(Ce(t.path,n),e))return!0;return!1}function Em(t){t.visibleWrites=qu(t.allWrites,Im,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Im(t){return t.visible}function qu(t,e,n){let s=st.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=Fe(n,o),s=Zn(s,l,r.snap)):et(o,n)&&(l=Fe(o,n),s=Zn(s,te(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=Fe(n,o),s=ga(s,l,r.children);else if(et(o,n))if(l=Fe(o,n),G(l))s=ga(s,te(),r.children);else{const a=Cn(r.children,z(l));if(a){const c=a.getChild(fe(l));s=Zn(s,te(),c)}}}else throw Sn("WriteRecord should have .snap or .children")}}return s}function Gu(t,e,n,s,i){if(!s&&!i){const r=ln(t.visibleWrites,e);if(r!=null)return r;{const o=Mt(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,te()))return null;{const l=n||W.EMPTY_NODE;return wn(o,l)}}}else{const r=Mt(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,te()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(et(c.path,e)||et(e,c.path))},l=qu(t.allWrites,o,e),a=n||W.EMPTY_NODE;return wn(l,a)}}}function wm(t,e,n){let s=W.EMPTY_NODE;const i=ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Mt(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=wn(Mt(r,new ae(o)),l);s=s.updateImmediateChild(o,a)}),xa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Mt(t.visibleWrites,e);return xa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Sm(t,e,n,s,i){N(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Mt(t.visibleWrites,r);return Xr(o)?i.getChild(n):wn(o,i.getChild(n))}}function Tm(t,e,n,s){const i=Ce(e,n),r=ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Mt(t.visibleWrites,i);return wn(o,s.getNode().getImmediateChild(n))}else return null}function Nm(t,e){return ln(t.visibleWrites,e)}function Rm(t,e,n,s,i,r,o){let l;const a=Mt(t.visibleWrites,e),c=ln(a,te());if(c!=null)l=c;else if(n!=null)l=wn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&f.length<i;)p(x,s)!==0&&f.push(x),x=g.getNext();return f}else return[]}function Am(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function ui(t,e,n,s){return Gu(t.writeTree,t.treePath,e,n,s)}function Lo(t,e){return wm(t.writeTree,t.treePath,e)}function ya(t,e,n,s){return Sm(t.writeTree,t.treePath,e,n,s)}function hi(t,e){return Nm(t.writeTree,Ce(t.treePath,e))}function Pm(t,e,n,s,i,r){return Rm(t.writeTree,t.treePath,e,n,s,i,r)}function Wo(t,e,n){return Tm(t.writeTree,t.treePath,e,n)}function Yu(t,e){return Qu(Ce(t.treePath,e),t.writeTree)}function Qu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,In(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fs(s,e.snapshotNode,i.oldSnap));else throw Sn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xu=new Dm;class Bo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),r=Pm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){return{filter:t}}function Mm(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fm(t,e,n,s,i){const r=new Om;let o,l;if(n.type===tt.OVERWRITE){const c=n;c.source.fromUser?o=Jr(t,e,c.path,c.snap,s,i,r):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=fi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===tt.MERGE){const c=n;c.source.fromUser?o=Wm(t,e,c.path,c.children,s,i,r):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===tt.ACK_USER_WRITE){const c=n;c.revert?o=Um(t,e,c.path,s,i,r):o=Bm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=Hm(t,e,n.path,s,r);else throw Sn("Unknown operation type: "+n.type);const a=r.getChanges();return Lm(e,o,a),{viewCache:o,changes:a}}function Lm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ci(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Vu(ci(e)))}}function Ju(t,e,n,s,i,r){const o=e.eventCache;if(hi(s,n)!=null)return e;{let l,a;if(G(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rn(e),f=c instanceof W?c:W.EMPTY_NODE,p=Lo(s,f);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const c=ui(s,rn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){N(Lt(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const p=ya(s,n,f,a);p!=null?l=t.filter.updatePriority(f,p):l=o.getNode()}else{const f=fe(n);let p;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const g=ya(s,n,o.getNode(),a);g!=null?p=o.getNode().getImmediateChild(c).updateChild(f,g):p=o.getNode().getImmediateChild(c)}else p=Wo(s,c,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),c,p,f,i,r):l=o.getNode()}}return Jn(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function fi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=f.updateFullNode(a.getNode(),s,null);else if(f.filtersNodes()&&!a.isFiltered()){const x=a.getNode().updateChild(n,s);c=f.updateFullNode(a.getNode(),x,null)}else{const x=z(n);if(!a.isCompleteForPath(n)&&Lt(n)>1)return e;const w=fe(n),K=a.getNode().getImmediateChild(x).updateChild(w,s);x===".priority"?c=f.updatePriority(a.getNode(),K):c=f.updateChild(a.getNode(),x,K,w,Xu,null)}const p=Ku(e,c,a.isFullyInitialized()||G(n),f.filtersNodes()),g=new Bo(i,p,r);return Ju(t,p,n,i,g,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const f=new Bo(i,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Jn(e,c,!0,t.filter.filtersNodes());else{const p=z(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Jn(e,c,l.isFullyInitialized(),l.isFiltered());else{const g=fe(n),x=l.getNode().getImmediateChild(p);let w;if(G(g))w=s;else{const D=f.getCompleteChild(p);D!=null?Du(g)===".priority"&&D.getChild(Mu(g)).isEmpty()?w=D:w=D.updateChild(g,s):w=W.EMPTY_NODE}if(x.equals(w))a=e;else{const D=t.filter.updateChild(l.getNode(),p,w,g,f,o);a=Jn(e,D,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function va(t,e){return t.eventCache.isCompleteForChild(e)}function Wm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const f=Ce(n,a);va(e,z(f))&&(l=Jr(t,l,f,c,i,r,o))}),s.foreach((a,c)=>{const f=Ce(n,a);va(e,z(f))||(l=Jr(t,l,f,c,i,r,o))}),l}function ba(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;G(n)?c=s:c=new pe(null).setTree(n,s);const f=e.serverCache.getNode();return c.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),w=ba(t,x,g);a=fi(t,a,new ae(p),w,i,r,o,l)}}),c.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!x){const w=e.serverCache.getNode().getImmediateChild(p),D=ba(t,w,g);a=fi(t,a,new ae(p),D,i,r,o,l)}}),a}function Bm(t,e,n,s,i,r,o){if(hi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return fi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(G(n)){let c=new pe(null);return a.getNode().forEachChild(vn,(f,p)=>{c=c.set(new ae(f),p)}),Zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new pe(null);return s.foreach((f,p)=>{const g=Ce(n,f);a.isCompleteForPath(g)&&(c=c.set(f,a.getNode().getChild(g)))}),Zr(t,e,n,c,i,r,l,o)}}function Hm(t,e,n,s,i){const r=e.serverCache,o=Ku(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return Ju(t,o,n,s,Xu,i)}function Um(t,e,n,s,i,r){let o;if(hi(s,n)!=null)return e;{const l=new Bo(s,e,i),a=e.eventCache.getNode();let c;if(G(n)||z(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=ui(s,rn(e));else{const p=e.serverCache.getNode();N(p instanceof W,"serverChildren would be complete if leaf node"),f=Lo(s,p)}f=f,c=t.filter.updateFullNode(a,f,r)}else{const f=z(n);let p=Wo(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=a.getImmediateChild(f)),p!=null?c=t.filter.updateChild(a,f,p,fe(n),l,r):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(a,f,W.EMPTY_NODE,fe(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ui(s,rn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||hi(s,te())!=null,Jn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Do(s.getIndex()),r=lm(s);this.processor_=km(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(W.EMPTY_NODE,l.getNode(),null),f=new Wt(a,o.isFullyInitialized(),i.filtersNodes()),p=new Wt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=zi(p,f),this.eventGenerator_=new pm(this.query_)}get query(){return this.query_}}function jm(t){return t.viewCache_.serverCache.getNode()}function $m(t){return ci(t.viewCache_)}function Km(t,e){const n=rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Ca(t){return t.eventRegistrations_.length===0}function zm(t,e){t.eventRegistrations_.push(e)}function Ea(t,e,n){const s=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ia(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(N(rn(t.viewCache_),"We should always have a full cache before handling merges"),N(ci(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Fm(t.processor_,i,e,n,s);return Mm(t.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(r,o)=>{s.push(In(r,o))}),n.isFullyInitialized()&&s.push(Vu(n.getNode())),Zu(t,s,n.getNode(),e)}function Zu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return _m(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class eh{constructor(){this.views=new Map}}function Gm(t){N(!di,"__referenceConstructor has already been defined"),di=t}function Ym(){return N(di,"Reference.ts has not been loaded"),di}function Qm(t){return t.views.size===0}function Ho(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return N(r!=null,"SyncTree gave us an op for an invalid query."),Ia(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ia(o,e,n,s));return r}}function th(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ui(n,i?s:null),a=!1;l?a=!0:s instanceof W?(l=Lo(n,s),a=!1):(l=W.EMPTY_NODE,a=!1);const c=zi(new Wt(l,a,!1),new Wt(s,i,!1));return new Vm(e,c)}return o}function Xm(t,e,n,s,i,r){const o=th(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zm(o,n),qm(o,n)}function Jm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Bt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ea(c,n,s)),Ca(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ea(a,n,s)),Ca(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Bt(t)&&r.push(new(Ym())(e._repo,e._path)),{removed:r,events:o}}function nh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ft(t,e){let n=null;for(const s of t.views.values())n=n||Km(s,e);return n}function sh(t,e){if(e._queryParams.loadsAllData())return Gi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ih(t,e){return sh(t,e)!=null}function Bt(t){return Gi(t)!=null}function Gi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;function Zm(t){N(!pi,"__referenceConstructor has already been defined"),pi=t}function e0(){return N(pi,"Reference.ts has not been loaded"),pi}let t0=1;class wa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=Am(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rh(t,e,n,s,i){return ym(t.pendingWriteTree_,e,n,s,i),i?Ss(t,new sn($u(),e,n)):[]}function Qt(t,e,n=!1){const s=vm(t.pendingWriteTree_,e);if(bm(t.pendingWriteTree_,e)){let r=new pe(null);return s.snap!=null?r=r.set(te(),!0):Ue(s.children,o=>{r=r.set(new ae(o),!0)}),Ss(t,new ai(s.path,r,n))}else return[]}function ws(t,e,n){return Ss(t,new sn(Mo(),e,n))}function n0(t,e,n){const s=pe.fromObject(n);return Ss(t,new _s(Mo(),e,s))}function s0(t,e){return Ss(t,new ps(Mo(),e))}function i0(t,e,n){const s=Vo(t,n);if(s){const i=jo(s),r=i.path,o=i.queryId,l=Fe(r,e),a=new ps(Fo(o),l);return $o(t,r,a)}else return[]}function _i(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ih(o,e))){const a=Jm(o,e,n,s);Qm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const f=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,x)=>Bt(x));if(f&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=l0(g);for(let w=0;w<x.length;++w){const D=x[w],K=D.query,V=ch(t,D);t.listenProvider_.startListening(es(K),gs(t,K),V.hashFn,V.onComplete)}}}!p&&c.length>0&&!s&&(f?t.listenProvider_.stopListening(es(e),null):c.forEach(g=>{const x=t.queryToTagMap.get(Yi(g));t.listenProvider_.stopListening(es(g),x)}))}a0(t,c)}return l}function oh(t,e,n,s){const i=Vo(t,s);if(i!=null){const r=jo(i),o=r.path,l=r.queryId,a=Fe(o,e),c=new sn(Fo(l),a,n);return $o(t,o,c)}else return[]}function r0(t,e,n,s){const i=Vo(t,s);if(i){const r=jo(i),o=r.path,l=r.queryId,a=Fe(o,e),c=pe.fromObject(n),f=new _s(Fo(l),a,c);return $o(t,o,f)}else return[]}function eo(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const w=Fe(g,i);r=r||Ft(x,w),o=o||Bt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Bt(l),r=r||Ft(l,te())):(l=new eh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,w)=>{const D=Ft(w,te());D&&(r=r.updateImmediateChild(x,D))}));const c=ih(l,e);if(!c&&!e._queryParams.loadsAllData()){const g=Yi(e);N(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=c0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const f=qi(t.pendingWriteTree_,i);let p=Xm(l,e,n,f,r,a);if(!c&&!o&&!s){const g=sh(l,e);p=p.concat(u0(t,e,g))}return p}function Uo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Fe(o,e),c=Ft(l,a);if(c)return c});return Gu(i,e,r,n,!0)}function o0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const p=Fe(c,n);s=s||Ft(f,p)});let i=t.syncPointTree_.get(n);i?s=s||Ft(i,te()):(i=new eh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=qi(t.pendingWriteTree_,e._path),a=th(i,e,l,r?o.getNode():W.EMPTY_NODE,r);return $m(a)}function Ss(t,e){return lh(e,t.syncPointTree_,null,qi(t.pendingWriteTree_,te()))}function lh(t,e,n,s){if(G(t.path))return ah(t,e,n,s);{const i=e.get(te());n==null&&i!=null&&(n=Ft(i,te()));let r=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,f=Yu(s,o);r=r.concat(lh(l,a,c,f))}return i&&(r=r.concat(Ho(i,t,s,n))),r}}function ah(t,e,n,s){const i=e.get(te());n==null&&i!=null&&(n=Ft(i,te()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Yu(s,o),f=t.operationForChild(o);f&&(r=r.concat(ah(f,l,a,c)))}),i&&(r=r.concat(Ho(i,t,s,n))),r}function ch(t,e){const n=e.query,s=gs(t,n);return{hashFn:()=>(jm(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?i0(t,n._path,s):s0(t,n._path);{const r=og(i,n);return _i(t,n,null,r)}}}}function gs(t,e){const n=Yi(e);return t.queryToTagMap.get(n)}function Yi(t){return t._path.toString()+"$"+t._queryIdentifier}function Vo(t,e){return t.tagToQueryMap.get(e)}function jo(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function $o(t,e,n){const s=t.syncPointTree_.get(e);N(s,"Missing sync point for query tag that we're tracking");const i=qi(t.pendingWriteTree_,e);return Ho(s,n,i,null)}function l0(t){return t.fold((e,n,s)=>{if(n&&Bt(n))return[Gi(n)];{let i=[];return n&&(i=nh(n)),Ue(s,(r,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(e0())(t._repo,t._path):t}function a0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Yi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function c0(){return t0++}function u0(t,e,n){const s=e._path,i=gs(t,e),r=ch(t,n),o=t.listenProvider_.startListening(es(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)N(!Bt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,f,p)=>{if(!G(c)&&f&&Bt(f))return[Gi(f).query];{let g=[];return f&&(g=g.concat(nh(f).map(x=>x.query))),Ue(p,(x,w)=>{g=g.concat(w)}),g}});for(let c=0;c<a.length;++c){const f=a[c];t.listenProvider_.stopListening(es(f),gs(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ko(n)}node(){return this.node_}}class zo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new zo(this.syncTree_,n)}node(){return Uo(this.syncTree_,this.path_)}}const h0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sa=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return f0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return d0(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},f0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},d0=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&N(!1,"Unexpected increment value: "+s);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},p0=function(t,e,n,s){return qo(e,new zo(n,t),s)},uh=function(t,e,n){return qo(t,new Ko(e),n)};function qo(t,e,n){const s=t.getPriority().val(),i=Sa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Sa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ie(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ie(i))),o.forEachChild(me,(l,a)=>{const c=qo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yo(t,e){let n=e instanceof ae?e:new ae(e),s=t,i=z(n);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new Go(i,s,r),n=fe(n),i=z(n)}return s}function An(t){return t.node.value}function hh(t,e){t.node.value=e,to(t)}function fh(t){return t.node.childCount>0}function _0(t){return An(t)===void 0&&!fh(t)}function Qi(t,e){Ue(t.node.children,(n,s)=>{e(new Go(n,t,s))})}function dh(t,e,n,s){n&&e(t),Qi(t,i=>{dh(i,e,!0)})}function g0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ts(t){return new ae(t.parent===null?t.name:Ts(t.parent)+"/"+t.name)}function to(t){t.parent!==null&&m0(t.parent,t.name,t)}function m0(t,e,n){const s=_0(n),i=St(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,to(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,to(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=/[\[\].#$\/\u0000-\u001F\u007F]/,y0=/[\[\].#$\u0000-\u001F\u007F]/,Ir=10*1024*1024,ph=function(t){return typeof t=="string"&&t.length!==0&&!x0.test(t)},_h=function(t){return typeof t=="string"&&t.length!==0&&!y0.test(t)},v0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_h(t)},b0=function(t,e,n,s){Qo(Io(t,"value"),e,n)},Qo=function(t,e,n){const s=n instanceof ae?new Bg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Gt(s)+" with contents = "+e.toString());if(fu(e))throw new Error(t+"contains "+e.toString()+" "+Gt(s));if(typeof e=="string"&&e.length>Ir/3&&$i(e)>Ir)throw new Error(t+"contains a string greater than "+Ir+" utf8 bytes "+Gt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ph(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hg(s,o),Qo(t,l,s),Ug(s)}),i&&r)throw new Error(t+' contains ".value" child '+Gt(s)+" in addition to actual children.")}},gh=function(t,e,n,s){if(!_h(n))throw new Error(Io(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},C0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gh(t,e,n)},mh=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},E0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!v0(n))throw new Error(Io(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ao(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function xh(t,e,n){Xo(t,n),yh(t,s=>Ao(s,e))}function pt(t,e,n){Xo(t,n),yh(t,s=>et(s,e)||et(e,s))}function yh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(w0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Qn&&Ae("event: "+n.toString()),Rn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="repo_interrupt",T0=25;class N0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new I0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=li(),this.transactionQueueTree_=new Go,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function R0(t,e,n){if(t.stats_=No(t.repoInfo_),t.forceRestClient_||ug())t.server_=new oi(t.repoInfo_,(s,i,r,o)=>{Ta(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Na(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ct(t.repoInfo_,e,(s,i,r,o)=>{Ta(t,s,i,r,o)},s=>{Na(t,s)},s=>{P0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=_g(t.repoInfo_,()=>new dm(t.stats_,t.server_)),t.infoData_=new am,t.infoSyncTree_=new wa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ws(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Zo(t,"connected",!1),t.serverSyncTree_=new wa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);pt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function A0(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jo(t){return h0({timestamp:A0(t)})}function Ta(t,e,n,s,i){t.dataUpdateCount++;const r=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Zs(n,c=>Se(c));o=r0(t.serverSyncTree_,r,a,i)}else{const a=Se(n);o=oh(t.serverSyncTree_,r,a,i)}else if(s){const a=Zs(n,c=>Se(c));o=n0(t.serverSyncTree_,r,a)}else{const a=Se(n);o=ws(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ji(t,r)),pt(t.eventQueue_,l,o)}function Na(t,e){Zo(t,"connected",e),e===!1&&k0(t)}function P0(t,e){Ue(e,(n,s)=>{Zo(t,n,s)})}function Zo(t,e,n){const s=new ae("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=ws(t.infoSyncTree_,s,i);pt(t.eventQueue_,s,r)}function vh(t){return t.nextWriteId_++}function O0(t,e,n){const s=o0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());eo(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ws(t.serverSyncTree_,e._path,r);else{const l=gs(t.serverSyncTree_,e);o=oh(t.serverSyncTree_,e._path,r,l)}return pt(t.eventQueue_,e._path,o),_i(t.serverSyncTree_,e,n,null,!0),r},i=>(Xi(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function D0(t,e,n,s,i){Xi(t,"set",{path:e.toString(),value:n,priority:s});const r=Jo(t),o=Se(n,s),l=Uo(t.serverSyncTree_,e),a=uh(o,l,r),c=vh(t),f=rh(t.serverSyncTree_,e,a,c,!0);Xo(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const w=g==="ok";w||He("set at "+e+" failed: "+g);const D=Qt(t.serverSyncTree_,c,!w);pt(t.eventQueue_,e,D),L0(t,i,g,x)});const p=wh(t,e);Ji(t,p),pt(t.eventQueue_,p,[])}function k0(t){Xi(t,"onDisconnectEvents");const e=Jo(t),n=li();Yr(t.onDisconnect_,te(),(i,r)=>{const o=p0(i,r,t.serverSyncTree_,e);ju(n,i,o)});let s=[];Yr(n,te(),(i,r)=>{s=s.concat(ws(t.serverSyncTree_,i,r));const o=wh(t,i);Ji(t,o)}),t.onDisconnect_=li(),pt(t.eventQueue_,te(),s)}function M0(t,e,n){let s;z(e._path)===".info"?s=eo(t.infoSyncTree_,e,n):s=eo(t.serverSyncTree_,e,n),xh(t.eventQueue_,e._path,s)}function Ra(t,e,n){let s;z(e._path)===".info"?s=_i(t.infoSyncTree_,e,n):s=_i(t.serverSyncTree_,e,n),xh(t.eventQueue_,e._path,s)}function F0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(S0)}function Xi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function L0(t,e,n,s){e&&Rn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function bh(t,e,n){return Uo(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function el(t,e=t.transactionQueueTree_){if(e||Zi(t,e),An(e)){const n=Eh(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&W0(t,Ts(e),n)}else fh(e)&&Qi(e,n=>{el(t,n)})}function W0(t,e,n){const s=n.map(c=>c.currentWriteId),i=bh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];N(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Fe(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Xi(t,"transaction put response",{path:a.toString(),status:c});let f=[];if(c==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(Qt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Zi(t,Yo(t.transactionQueueTree_,e)),el(t,t.transactionQueueTree_),pt(t.eventQueue_,e,f);for(let g=0;g<p.length;g++)Rn(p[g])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{He("transaction at "+a.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}Ji(t,e)}},o)}function Ji(t,e){const n=Ch(t,e),s=Ts(n),i=Eh(t,n);return B0(t,i,s),s}function B0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Fe(n,a.path);let f=!1,p;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,p=a.abortReason,i=i.concat(Qt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=T0)f=!0,p="maxretry",i=i.concat(Qt(t.serverSyncTree_,a.currentWriteId,!0));else{const g=bh(t,a.path,o);a.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){Qo("transaction failed: Data returned ",x,a.path);let w=Se(x);typeof x=="object"&&x!=null&&St(x,".priority")||(w=w.updatePriority(g.getPriority()));const K=a.currentWriteId,V=Jo(t),J=uh(w,g,V);a.currentOutputSnapshotRaw=w,a.currentOutputSnapshotResolved=J,a.currentWriteId=vh(t),o.splice(o.indexOf(K),1),i=i.concat(rh(t.serverSyncTree_,a.path,J,a.currentWriteId,a.applyLocally)),i=i.concat(Qt(t.serverSyncTree_,K,!0))}else f=!0,p="nodata",i=i.concat(Qt(t.serverSyncTree_,a.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Zi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Rn(s[l]);el(t,t.transactionQueueTree_)}function Ch(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&An(s)===void 0;)s=Yo(s,n),e=fe(e),n=z(e);return s}function Eh(t,e){const n=[];return Ih(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ih(t,e,n){const s=An(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qi(e,i=>{Ih(t,i,n)})}function Zi(t,e){const n=An(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,hh(e,n.length>0?n:void 0)}Qi(e,s=>{Zi(t,s)})}function wh(t,e){const n=Ts(Ch(t,e)),s=Yo(t.transactionQueueTree_,e);return g0(s,i=>{wr(t,i)}),wr(t,s),dh(s,i=>{wr(t,i)}),n}function wr(t,e){const n=An(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hh(e,void 0):n.length=r+1,pt(t.eventQueue_,Ts(e),i);for(let o=0;o<s.length;o++)Rn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function U0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Aa=function(t,e){const n=V0(t),s=n.namespace;n.domain==="firebase.com"&&It(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Iu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ae(n.pathString)}},V0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(i=H0(t.substring(f,p)));const g=U0(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const x=e.slice(0,c);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class tl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:Du(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=pa(this._queryParams),n=So(e);return n==="{}"?"default":n}get _queryObject(){return pa(this._queryParams)}isEqual(e){if(e=Tn(e),!(e instanceof tl))return!1;const n=this._repo===e._repo,s=Ao(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wg(this._path)}}class Tt extends tl{constructor(e,n){super(e,n,new ko,!1)}get parent(){const e=Mu(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),s=no(this.ref,e);return new ms(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,no(this.ref,s),me)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fs(t,e){return t=Tn(t),t._checkNotDeleted("ref"),e!==void 0?no(t._root,e):t._root}function no(t,e){return t=Tn(t),z(t._path)===null?C0("child","path",e):gh("child","path",e),new Tt(t._repo,Ce(t._path,e))}function K0(t){return mh("remove",t._path),Th(t,null)}function Th(t,e){t=Tn(t),mh("set",t._path),b0("set",e,t._path);const n=new ji;return D0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function z0(t){t=Tn(t);const e=new Sh(()=>{}),n=new er(e);return O0(t._repo,t,n).then(s=>new ms(s,new Tt(t._repo,t._path),t._queryParams.getIndex()))}class er{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new j0("value",this,new ms(e.snapshotNode,new Tt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $0(this,e,n):null}matches(e){return e instanceof er?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function q0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(f,p)=>{Ra(t._repo,t,l),a(f,p)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Sh(n,r||void 0),l=new er(o);return M0(t._repo,t,l),()=>Ra(t._repo,t,l)}function G0(t,e,n,s){return q0(t,"value",e,n,s)}Gm(Tt);Zm(Tt);/**
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
 */const Y0="FIREBASE_DATABASE_EMULATOR_HOST",so={};let Q0=!1;function X0(t,e,n,s){t.repoInfo_=new Iu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function J0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Aa(r,i),l=o.repoInfo,a;typeof process<"u"&&Ql&&(a=Ql[Y0]),a?(r=`http://${a}?ns=${l.namespace}`,o=Aa(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new fg(t.name,t.options,e);E0("Invalid Firebase Database URL",o),G(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const f=ex(l,t,c,new hg(t,n));return new tx(f,t)}function Z0(t,e){const n=so[e];(!n||n[t.key]!==t)&&It(`Database ${e}(${t.repoInfo_}) has already been deleted.`),F0(t),delete n[t.key]}function ex(t,e,n,s){let i=so[e.name];i||(i={},so[e.name]=i);let r=i[t.toURLString()];return r&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new N0(t,Q0,n,s),i[t.toURLString()]=r,r}class tx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(R0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}}function nx(t=F_(),e){const n=P_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=vp("database");s&&sx(n,...s)}return n}function sx(t,e,n,s={}){t=Tn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ei(s,r.repoInfo_.emulatorOptions))return;It("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&It('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Vs(Vs.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:bp(s.mockUserToken,t.app.options.projectId);o=new Vs(l)}X0(r,i,s,o)}/**
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
 */function ix(t){Y_(M_),ni(new as("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return J0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xn(Xl,Jl,t),xn(Xl,Jl,"esm2017")}Ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ix();const Ls=mi;(function(t,e){const n=mi,s=t();for(;;)try{if(-parseInt(n(489))/1+-parseInt(n(493))/2*(-parseInt(n(484))/3)+parseInt(n(486))/4+-parseInt(n(488))/5*(-parseInt(n(482))/6)+-parseInt(n(492))/7*(parseInt(n(481))/8)+-parseInt(n(487))/9+-parseInt(n(483))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(gi,590628);function gi(){const t=["AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","8eCFkPg","12SsttUo","457710chKubA","39sXNmdh","iamwait","2078000OVzPxN","2624805uopkai","2294965NkblHZ","1078661wqjqRs","G-3RRDNZ9ME5","1:720775593565:web:1a263bf6a87ecfea3817b4","3971779DlGptk","174864sgzOhR"];return gi=function(){return t},gi()}function mi(t,e){const n=gi();return mi=function(s,i){return s=s-480,n[s]},mi(t,e)}const rx={apiKey:Ls(480),authDomain:"iamwait.firebaseapp.com",databaseURL:"https://iamwait-default-rtdb.europe-west1.firebasedatabase.app",projectId:Ls(485),storageBucket:"iamwait.firebasestorage.app",messagingSenderId:"720775593565",appId:Ls(491),measurementId:Ls(490)},ox=ou(rx),Ws=nx(ox),ut=yi;(function(t,e){const n=yi,s=t();for(;;)try{if(-parseInt(n(450))/1+-parseInt(n(424))/2+parseInt(n(420))/3+parseInt(n(452))/4*(-parseInt(n(417))/5)+parseInt(n(451))/6+-parseInt(n(449))/7*(parseInt(n(426))/8)+parseInt(n(442))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,851362);function xi(){const t=["lookField","Морской бой"," -  данные записаны","fbStore2","oMZES"," : данные не найдены","TKTaU","ABVdf","14668893swkqVc","FHmrl","bulKq","stringify","%c ","color: darkgreen","catch","7453845yVfVvW","446549MnfYTi","9171648rbAJUc","667204VivVtV","BPQQj"," удалены!","45KScGFd",">>> Данные по ","Крестики нолики","4966902JJaPhT","uHeQX","then","error","1900328yKGmIH","Ошибка записи данных: ","8IeNuMU","sUosK","HzYcf","log","########### ########## Данные ","exists","Данные ","val"];return xi=function(){return t},xi()}function yi(t,e){const n=xi();return yi=function(s,i){return s=s-415,n[s]},yi(t,e)}const tr=cp(ut(437),{state:()=>({gameId:"",gameNames:{g1:"Камень ножницы бумага",g2:ut(419),g3:ut(435)},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:-1,playNumber:0,gameLink:""}),actions:{async getField(t){const e=ut,n={uHeQX:function(i,r){return i(r)},FHmrl:function(i,r){return i+r},BPQQj:e(439),sUosK:function(i,r,o){return i(r,o)}},s=n[e(427)](Fs,Ws,t);return z0(s)[e(422)](i=>{const r=e;if(i[r(431)]()){const o=i.val();return n.uHeQX(Hn,n[r(443)](r(418)+t+" = ",JSON[r(445)](o))),o}else n[r(421)](Hn,n[r(443)](t,n[r(415)]))})},async setField(t,e){const n=ut,s={TKTaU:function(r,o){return r(o)},ABVdf:function(r,o){return r+o},HzYcf:n(436),oMZES:function(r,o,l){return r(o,l)}},i=s[n(438)](Fs,Ws,t);return Th(i,e)[n(422)](()=>{const r=n;s[r(440)](Hn,s[r(441)](t,s[r(428)]))})[n(448)](r=>{const o=n;console[o(423)](o(425),r)})},async onValue(t){const e=ut,n={pzsbB:function(i,r,o){return i(r,o)},bulKq:function(i,r,o){return i(r,o)}},s=n.pzsbB(Fs,Ws,t);n[e(444)](G0,s,i=>{const r=e;Hn(r(430)+t+" на прослушке"),this[r(434)]=i[r(433)]()})},async removeField(t){const e=ut,n={fnEyf:function(i,r){return i(r)}};console[e(429)](t);const s=Fs(Ws,t);K0(s)[e(422)](()=>{const i=e;n.fnEyf(Hn,i(432)+t+i(416))})}}}),Hn=t=>console[ut(429)](ut(446)+t,ut(447)),Sr=bi;(function(t,e){const n=bi,s=t();for(;;)try{if(parseInt(n(158))/1+parseInt(n(153))/2+-parseInt(n(178))/3*(parseInt(n(170))/4)+parseInt(n(168))/5+-parseInt(n(179))/6*(-parseInt(n(172))/7)+parseInt(n(143))/8*(parseInt(n(174))/9)+-parseInt(n(157))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(vi,209975);function vi(){const t=["dejXX","button"," Камень ножницы бумага "," Морской бой ","iwzZB","59400EKPrKF","ListGames","KUNGS","nyhWb","OCeOj","tkHDh","VTqwU","dORja","lSpJU","Dqxpn","378374YuBlUT","iAmWaitingForYou","mPWHf","cmjgz","9340450urdilc","358216XlDtTi","uKlhQ","div","gameId","JDfgB"," Необходимо будет попросить другого участника найти этот miniapp по имени: ","yDzEl","FPPlm","Выберите игру","KzvxR","1722040diwHTw"," Начальная страница ","4xkDwIJ"," Крестики нолики ","26033JEVbmJ","mxOiB","171nHywce","gameChanged","atVez","ULsSF","514530uludxz","456ScgcaW"];return vi=function(){return t},vi()}function bi(t,e){const n=vi();return bi=function(s,i){return s=s-140,n[s]},bi(t,e)}const lx=Li({__name:Sr(144),emits:[Sr(175)],setup(t,{emit:e}){const n=Sr,s={tkHDh:function(l,a){return l+a},dORja:function(l,a){return l(a)},iwzZB:n(175),OCeOj:function(l){return l()},zBvYr:function(l,a,c,f){return l(a,c,f)},KzvxR:n(160),lSpJU:n(169),nyhWb:function(l,a,c,f,p){return l(a,c,f,p)},EYnQK:n(166),VTqwU:function(l,a,c,f,p){return l(a,c,f,p)},Dqxpn:function(l,a,c,f){return l(a,c,f)},uKlhQ:n(140),yDzEl:function(l,a,c,f,p){return l(a,c,f,p)},JDfgB:function(l,a,c,f){return l(a,c,f)},ULsSF:function(l){return l()},cmjgz:n(181),atVez:function(l,a,c,f,p){return l(a,c,f,p)},mPWHf:function(l){return l()},QaqZJ:n(163),FPPlm:n(154),mxOiB:function(l){return l()},dejXX:function(l,a){return l(a)},KUNGS:function(l){return l()}},i=s[n(145)](tr),r=e;function o(l){const a=n;console.log(l),i[a(161)]=s[a(148)]("g",l),s.dORja(r,s[a(142)])}return(l,a)=>{const c=n;return s[c(147)](oe),s.zBvYr(de,s[c(167)],null,[a[3]||(a[3]=s[c(150)](ge,s[c(151)])),a[4]||(a[4]=s[c(146)](v,"h3",null,s.EYnQK,-1)),a[5]||(a[5]=s[c(149)](v,"br",null,null,-1)),s[c(152)](v,"button",{onClick:a[0]||(a[0]=f=>o(1))},s[c(159)]),a[6]||(a[6]=s[c(164)](v,"br",null,null,-1)),a[7]||(a[7]=ge()),a[8]||(a[8]=s[c(146)](v,"br",null,null,-1)),s[c(162)](v,c(181),{onClick:a[1]||(a[1]=f=>o(2))},c(171)),a[9]||(a[9]=v("br",null,null,-1)),a[10]||(a[10]=s[c(177)](ge)),a[11]||(a[11]=v("br",null,null,-1)),s.Dqxpn(v,s[c(156)],{onClick:a[2]||(a[2]=f=>o(3))},c(141)),a[12]||(a[12]=s[c(176)](v,"br",null,null,-1)),a[13]||(a[13]=s[c(164)](v,"br",null,null,-1)),a[14]||(a[14]=s[c(155)](ge)),a[15]||(a[15]=v("br",null,null,-1)),a[16]||(a[16]=ge(s.QaqZJ)),a[17]||(a[17]=v("br",null,null,-1)),a[18]||(a[18]=ge()),a[19]||(a[19]=s[c(146)](v,"br",null,null,-1)),a[20]||(a[20]=s.VTqwU(v,"b",null,s[c(165)],-1)),a[21]||(a[21]=s.atVez(v,"br",null,null,-1)),a[22]||(a[22]=s[c(173)](ge)),a[23]||(a[23]=s.atVez(v,"br",null,null,-1)),a[24]||(a[24]=s[c(180)](ge," и договориться о выборе игры "))])}}}),ts=Ci;(function(t,e){const n=Ci,s=t();for(;;)try{if(parseInt(n(114))/1+-parseInt(n(108))/2*(parseInt(n(128))/3)+-parseInt(n(125))/4*(parseInt(n(107))/5)+parseInt(n(132))/6+parseInt(n(109))/7*(parseInt(n(126))/8)+parseInt(n(119))/9+-parseInt(n(116))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ei,143561);function Ci(t,e){const n=Ei();return Ci=function(s,i){return s=s-107,n[s]},Ci(t,e)}const ax={class:ts(110)},cx={key:0,class:ts(120)};function Ei(){const t=["1932VXcayl","menuBt","value","sghir","aBUbj","154952ayWHYH","AdWQg","2049970hYXROJ","qiaCZ","BcGBV","1364985fhHCFv","panel","dhXrY","Удалить игру","MenuButton","IuzUR","3044RTFYEY","3608WeAdyA","goZFv","5871iGYteM","toExit","Инфо","div","768348fRdNWP","175LxcGig","188JoNyZN"];return Ei=function(){return t},Ei()}const ux=Li({__name:ts(123),emits:[ts(129)],setup(t,{emit:e}){const n=ts,s={sghir:function(l,a){return l(a)},BcGBV:function(l){return l()},eteRk:function(l,a,c,f){return l(a,c,f)},QnMUW:function(l,a,c,f){return l(a,c,f)},DypbN:n(131),AdWQg:function(l,a,c,f){return l(a,c,f)},vUmnz:"button",qiaCZ:"menuBt_bt",AUuGt:function(l,a,c,f){return l(a,c,f)},aBUbj:function(l,a,c,f){return l(a,c,f)},YuZxf:n(122),dhXrY:function(l,a,c,f,p){return l(a,c,f,p)},goZFv:n(130),IuzUR:function(l,a,c){return l(a,c)}},i=e,r=s[n(118)](Ge);function o(l){const a=n;switch(l){case(l=1):s[a(112)](i,"toExit");break}r[a(111)]=!1}return(l,a)=>{const c=n;return s.BcGBV(oe),s.eteRk(de,c(131),ax,[s.QnMUW(v,s.DypbN,null,[s[c(115)](v,s.vUmnz,{class:s[c(117)],onClick:a[0]||(a[0]=f=>r[c(111)]=!r[c(111)])},"❁")]),r[c(111)]?(s[c(118)](oe),s.AUuGt(de,"div",cx,[s[c(113)](v,"a",{onClick:a[1]||(a[1]=f=>o(1))},s.YuZxf),a[2]||(a[2]=s[c(118)](ge)),a[3]||(a[3]=s[c(121)](v,"br",null,null,-1)),a[4]||(a[4]=v("a",null,s[c(127)],-1))])):s[c(124)](De,"",!0)])}}}),Ns=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},hx=Ns(ux,[["__scopeId","data-v-ff2e1591"]]),_t=xs;(function(t,e){const n=xs,s=t();for(;;)try{if(-parseInt(n(339))/1*(parseInt(n(319))/2)+parseInt(n(371))/3*(-parseInt(n(331))/4)+-parseInt(n(411))/5*(parseInt(n(394))/6)+parseInt(n(328))/7+parseInt(n(397))/8+parseInt(n(444))/9+-parseInt(n(450))/10*(-parseInt(n(396))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,168850);function Ii(){const t=[" ИГРАЙТЕ ВДВОЕМ ","54FAYnyD","Нахожусь в списке, жду соперника","11KeFrMH","1465744TDVUjg","now","myNickName","input","UysTi","dXUgL","length","mduiL","1|7|0|4|6|2|5|3","AHwAO","Mjmmi","FmivA","red-bt","split","29375ClHSgV","cYPKn","Euhff","slice","* можете поменять ваш Никнейм","res","tmZot","OpYWa","div","3|5|2|1|0|4","myId","QpPhw","OIvgc","larger","aEDIA","qrlYV","OtHpp","qZyLa","/list/","then","LxNbs","onValue","amUpi","gameNames","Zyazk","nick","lYKFt","ovecB","YSLza","ZVkUf","bvSSP","SQzIr","RMXvk","1441233PZbEUl","mKsMH","Хорошо бы сообщить сопернику, что вы ушли из игры","eJanV","brSzz","center","2628980ezeseN","gbDMq","aWCHK","xdZry","value","Npnrm","* nickname не может быть меньше 2 букв","pGBsr","jBoTM","keys","NHWfn","EUShp","YWJXE","FwXWz","GOjQF","inhjN","DyhCk","bwajr","lmvXD","pwJYy","SGaPP","stage","tRphX","getField","button","Lovmj","push","pOTZg","muxbF","dKvbN","reload","#ddd","accept","Сменить nickName","jnPaj","XAQvi","/look/","lookField","id2","red-notice","OLfal","NlbKx","HjHuc","dnrrc","жду пока не откликнится ","NXeUI","Edhsg","aszFi","JFEEM","MpfqT","pKdBZ","bPhSH","VzBdu","qCNNZ","xIXpL","::::::: Связывание :::::::","gydNV","setField","ZeLAL","ByVYJ","aFgBn","MqeXs","WZupE","tHwRn","oPQKP","LggHT","zyWLm","EZvNx","Отказаться","seqTZ","YaLzd","IbSww","cNTtt","LtXGC","hiXuw","ScqTO","WhtKt","pfNON","gameLink","58peGeqR","tZdJP","* нельзя выбирать себя"," Вас выбрал игрок: ","qWYwS","context","eWraY"," с игроком ","red","1334662JtXsXt","/games/"," Выбрал игрока ","152XMfwgP","playNumber","WzOUZ","log","green-bt"," Привет ","RwdTh","uCUMh","9780WTBmdd","fCidN","ptQYE","Играем","RNHWR","removeField","ВСЕ НАСТРОЙКИ ИГРЫ","PBBTS","QuWXv","LEuoX","getItem","onClick","pyNqw","Нет желающих, отменяю ожидание","TJqUB","BinderComp","lkzcQ","LXHnW","Список желающих играть:","Вперед","IGWuD",">>>> ANALIZ ","PnrmR","hQbYp","qGrSv","iLaDU"," : ","pKMQz","forEach"," Зарегистрироваться в поиске ","NJMbs","gameId","23019tYRNRr","Wtjiz","APlKP","setItem","nVUMA","MCEyT","KwWxR"," stage:","WVSRT","HPtFw","name","nCEwc","aRoaW","uNdyn","myName","30px","small","QihFZ","LTVcl","yjbJQ","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","kntKO"];return Ii=function(){return t},Ii()}const fx={key:0},dx={key:1},px={key:2},_x={key:3},gx={key:4},mx={class:_t(279)},xx={key:0},yx=[_t(350)],vx={key:5},bx={key:0},Cx=[_t(350)],Ex={key:1,class:_t(279)},Ix={key:6},wx={key:7},Sx={key:8},Tx={style:{"font-size":_t(386)}},Nx={style:{color:_t(327),"font-size":"20px"}},Rx={key:9},Ax={style:{"font-size":_t(386),background:_t(271)}},Px={key:10};function xs(t,e){const n=Ii();return xs=function(s,i){return s=s-271,n[s]},xs(t,e)}const Ox=!1,Dx=Li({__name:_t(354),setup(t){const e=_t,n={AHwAO:e(420),zyWLm:function(h){return h()},jBoTM:function(h,u){return h+u},MCEyT:e(329),dnrrc:e(405),JFEEM:function(h,u){return h>u},qGrSv:function(h,u){return h===u},jnPaj:function(h,u){return h(u)},qqGQh:function(h,u){return h!==u},hQbYp:function(h){return h()},TGzLx:function(h,u){return h===u},EnaHP:"/look",aszFi:function(h,u,d){return h(u,d)},jbMsP:function(h,u){return h<u},Npnrm:function(h,u){return h+u},aRoaW:e(276),qrlYV:function(h,u){return h==u},EUShp:function(h,u,d){return h(u,d)},OtHpp:function(h,u){return h+u},rztFn:function(h,u){return h+u},mduiL:function(h,u){return h(u)},QpPhw:function(h,u){return h>u},lYKFt:function(h,u){return h+u},mKsMH:function(h,u){return h+u},Euhff:e(429),DiveI:function(h,u){return h+u},Zyazk:function(h,u){return h+u},LeSqV:function(h,u){return h>u},lkzcQ:function(h,u){return h+u},SnMEq:"gameLink",DyhCk:function(h,u){return h+u},ovecB:e(345),Wtjiz:function(h,u,d){return h(u,d)},nVUMA:e(474),gydNV:"green-bt",IbSww:function(h,u){return h(u)},nCEwc:function(h){return h()},WhtKt:function(h){return h()},RwdTh:function(h,u,d,b){return h(u,d,b)},pwJYy:e(419),pKMQz:function(h,u,d,b,C){return h(u,d,b,C)},ofOsz:e(295),SGaPP:function(h,u){return h+u},SZItw:function(h,u){return h+u},WVSRT:function(h,u){return h(u)},sBNQO:function(h,u){return h(u)},ptQYE:e(365),lmvXD:function(h,u,d,b,C){return h(u,d,b,C)},bwajr:function(h,u,d){return h(u,d)},eJanV:function(h,u){return h+u},LEuoX:e(378),ByVYJ:function(h,u){return h(u)},iLaDU:function(h,u){return h(u)},Mjmmi:function(h,u,d,b,C){return h(u,d,b,C)},PBBTS:function(h,u){return h===u},qZyLa:function(h,u){return h===u},NlbKx:function(h,u,d,b){return h(u,d,b)},qCNNZ:function(h,u,d,b,C){return h(u,d,b,C)},muxbF:function(h,u){return h(u)},tZdJP:e(393),amUpi:e(358),FmivA:function(h,u,d,b,C){return h(u,d,b,C)},VzBdu:function(h,u){return h===u},yjbJQ:function(h,u,d){return h(u,d)},PnQZs:function(h,u){return h===u},uCUMh:function(h,u,d,b){return h(u,d,b)},UysTi:function(h,u,d,b,C){return h(u,d,b,C)},tmZot:e(336),Edhsg:function(h,u,d,b,C){return h(u,d,b,C)},ZVkUf:e(400),RNHWR:e(424),LXHnW:"4px",PnrmR:e(273),GOjQF:function(h,u,d,b,C){return h(u,d,b,C)},tRphX:function(h){return h()},YaLzd:e(357),bPhSH:function(h,u){return h(u)},NXeUI:function(h,u,d){return h(u,d)},LtXGC:function(h,u,d,b,C){return h(u,d,b,C)},LggHT:function(h,u,d,b,C){return h(u,d,b,C)},RMXvk:function(h,u,d,b){return h(u,d,b)},aFgBn:e(409),dXUgL:e(368),dKvbN:function(h){return h()},GPonm:function(h,u,d,b,C){return h(u,d,b,C)},WZupE:e(387),HjHuc:e(391),ojXbS:function(h,u){return h===u},cNTtt:function(h,u){return h(u)},fCidN:e(395),ehmxL:function(h,u,d){return h(u,d)},brSzz:function(h){return h()},QuWXv:e(321),pGBsr:function(h,u,d,b,C){return h(u,d,b,C)},KwWxR:function(h,u,d,b){return h(u,d,b)},McAwE:e(352),MqyWh:function(h,u,d){return h(u,d)},ScqTO:function(h,u,d,b){return h(u,d,b)},eWraY:function(h,u){return h(u)},YWJXE:function(h,u,d,b,C){return h(u,d,b,C)},Lovmj:e(284),seqTZ:function(h,u,d,b){return h(u,d,b)},tHwRn:function(h,u){return h===u},SQzIr:function(h,u){return h(u)},gstSN:function(h,u,d,b){return h(u,d,b)},ggoAi:function(h,u){return h(u)},hiXuw:e(322),MpfqT:function(h,u,d,b,C){return h(u,d,b,C)},gbDMq:function(h,u,d,b){return h(u,d,b)},QihFZ:"Согласиться",YSLza:function(h,u,d,b){return h(u,d,b)},APlKP:e(342),DqFos:function(h,u){return h(u)},xIXpL:e(326),NJMbs:function(h,u,d,b,C){return h(u,d,b,C)},bvSSP:function(h,u,d,b){return h(u,d,b)},tHcxM:function(h,u){return h(u)},LTVcl:function(h,u,d,b,C){return h(u,d,b,C)},ZeLAL:function(h,u){return h(u)},zqVFo:function(h,u,d,b,C){return h(u,d,b,C)},TJqUB:function(h,u,d,b,C){return h(u,d,b,C)},OLfal:function(h,u,d,b,C){return h(u,d,b,C)},AmhHz:function(h,u,d,b,C){return h(u,d,b,C)},OpYWa:function(h,u){return h(u)},LxNbs:function(h,u,d,b){return h(u,d,b)},unBAL:"Играть",aEDIA:function(h,u,d,b,C){return h(u,d,b,C)},MqeXs:function(h,u){return h(u)},pOTZg:e(399),NnRiV:e(436),kntKO:function(h){return h()},KKyhy:function(h){return h()},EZvNx:function(h,u){return h(u)},NHWfn:e(415)},s=tr(),i=n[e(301)](Ge,localStorage[e(349)](n[e(477)])||n.NnRiV),r=n[e(442)](Ge,[]),o=n[e(392)](Ge),l=n.KKyhy(Ge),a=Ge(""),c=n[e(307)](Ge,""),f=n.DqFos(Ge,n[e(460)]),p=function(){const h=e;i[h(454)]&&localStorage[h(374)](h(399),i[h(454)])};function g(){const h=e;i[h(454)]||(i[h(454)]=s.myName),s[h(473)](n[h(458)](h(429),s[h(421)]))[h(430)](u=>{const d=h,b={uNdyn:n[d(406)],WzOUZ:function(C){return n[d(306)](C)}};u&&(o[d(454)]={id:u.id,name:u[d(381)]},s.getField(n.jBoTM(n[d(376)],u[d(318)])).then(C=>{const k=d,j=b[k(384)][k(410)]("|");let Y=0;for(;;){switch(j[Y++]){case"0":s[k(318)]=u.gameLink;continue;case"1":s.stage=5;continue;case"2":a[k(454)]=C;continue;case"3":console[k(334)](k(324),C);continue;case"4":b[k(333)](ve);continue;case"5":s[k(370)]=C[k(370)];continue}break}}))})}const x=function(h){const u=e,d={IGWuD:n[u(283)],GatCz:function(C,k){return n[u(288)](C,k)},pKdBZ:function(C,k){return n[u(363)](C,k)},aWCHK:function(C,k){return n.jnPaj(C,k)},oPQKP:function(C,k){return n.qqGQh(C,k)},NRHOD:function(C){return n[u(362)](C)},HPtFw:function(C,k){return C==k}};if(console[u(334)](u(360),h),r.value=[],n.TGzLx(s[u(471)],0))return!1;s.stage=1;let b=!1;h&&Object[u(459)](h)[u(367)](C=>{const k=u,j=d[k(359)][k(410)]("|");let Y=0;for(;;){switch(j[Y++]){case"0":if(d.GatCz(s[k(471)],3))return!1;continue;case"1":h[C].id2&&d[k(290)](h[C][k(278)],s[k(421)])&&(o[k(454)]={id:C,name:h[C][k(381)]});continue;case"2":d.GatCz(s[k(471)],2)&&!b&&location[k(480)]();continue;case"3":C&&h[C]&&r[k(454)][k(476)]({id:C,name:h[C][k(381)]});continue;case"4":C===d[k(452)](String,s[k(421)])&&C&&(b=!0,d[k(304)](s[k(471)],3)&&(s[k(471)]=2),h[C][k(278)]&&(s[k(471)]=4));continue;case"5":h[C][k(272)]&&d.NRHOD(Je);continue;case"6":d[k(380)](h[C].id2,s[k(421)])&&(b=!0,s[k(471)]=3);continue;case"7":d[k(290)](C,String(s[k(421)]))&&(o[k(454)]={id:h[C][k(278)],name:h[C].name2});continue}break}})};Zt(()=>s[e(421)],h=>h&&setTimeout(g,500));function w(){D(),s.stage=1}function D(){const h=e;s[h(432)](n[h(458)](s[h(370)],n.EnaHP))[h(430)](u=>x(u)),n.aszFi(Zt,()=>s[h(277)],u=>x(u))}function K(){const h=e;if(n.jbMsP(i.value.length,2))return f[h(454)]=h(456),!1;s.setField(n[h(455)](n[h(455)](s[h(370)],n.aRoaW),s[h(421)]),{name:i[h(454)]})}function V(h){const u=e,d={xdZry:u(416)};if(n[u(426)](h.id,s[u(421)]))return l.value=!0,n.EUShp(setTimeout,()=>l[u(454)]=!1,2e3),!1;s[u(297)](n[u(427)](n.Npnrm(s[u(370)],n[u(383)]),h.id),{name:h.name,id2:s[u(421)],name2:i[u(454)]||s[u(385)]})[u(430)](b=>{const C=u;console[C(334)](d[C(453)],b),o[C(454)]={id:h.id,name:h[C(381)]},s[C(471)]=3})}function J(h){const u=e;h&&o[u(454)]&&s[u(297)](n[u(458)](n.jBoTM(s.gameId,u(276)),o.value.id),{name:o.value.name,id2:s.myId,name2:i[u(454)]||s[u(385)],accept:!0}),!h&&s.setField(n[u(427)](n.OtHpp(s[u(370)],n[u(383)]),s[u(421)]),{name:i[u(454)]||s[u(385)]})[u(430)](()=>s[u(471)]=2)}function ne(){const h=e;s.setField(n[h(458)](n[h(458)](s[h(370)],n.aRoaW),o.value.id),{name:o[h(454)][h(381)]})[h(430)](()=>s[h(471)]=2)}function F(){const h=e;s[h(344)](n.rztFn(n[h(455)](s.gameId,"/look/"),s.myId))[h(430)](()=>s.stage=0)}function Z(){var d;const h=e;debugger;c[h(454)]=h(446);let u=n[h(404)](String,o[h(454)].id);n[h(422)](o[h(454)].id,s[h(421)])?u+="::"+s[h(421)]:u=n.lYKFt(n[h(445)](s[h(421)],"::"),u),s[h(344)](n.lYKFt(n[h(413)],s[h(421)])),s[h(344)](n[h(437)](n[h(413)],(d=o[h(454)])==null?void 0:d.id)),s[h(344)](n[h(376)]+u),n[h(287)](setTimeout,()=>location[h(480)](),3e3)}function Je(){var C,k,j;const h=e,u={pfNON:function(Y,X){return n.DiveI(Y,X)},OIvgc:function(Y,X){return n[xs(435)](Y,X)},qWYwS:n[h(383)]};let d=Date[h(398)](),b=n.mduiL(String,o[h(454)].id);n.LeSqV(o[h(454)].id,s[h(421)])?b+=n[h(355)]("::",s[h(421)]):b=n.DiveI(n[h(455)](s[h(421)],"::"),b),console[h(334)](n.SnMEq,b),s.setField(n[h(413)]+s[h(421)],{id:(C=o.value)==null?void 0:C.id,name:(k=o[h(454)])==null?void 0:k.name,gameLink:b,date:d}),s[h(297)](n[h(437)](n[h(413)],(j=o[h(454)])==null?void 0:j.id),{id:s[h(421)],name:i[h(454)]||s[h(385)],gameLink:b,date:d}),s[h(297)](n.DyhCk(n[h(376)],b),{game:n[h(438)],gameId:s[h(370)]}),n[h(372)](setTimeout,()=>{var X;const Y=h;s[Y(344)](u[Y(317)](s.gameId,Y(276))+((X=o.value)==null?void 0:X.id)),s.removeField(u[Y(423)](s.gameId+u[Y(323)],s[Y(421)])),location[Y(480)]()},2e3)}function ve(){const h=e;s[h(332)]=+s[h(370)][h(414)](1)}return(h,u)=>{var C,k;const d=e,b={XAQvi:function(j){return j()},inhjN:function(j,Y,X,$,re,gt){return j(Y,X,$,re,gt)},FwXWz:n[d(375)],cYPKn:n[d(296)],pyNqw:function(j,Y){return n[d(311)](j,Y)}};return n.nCEwc(oe),de(ze,null,[Ox?(n[d(316)](oe),n[d(337)](de,n[d(469)],fx,[u[10]||(u[10]=n[d(366)](v,"hr",null,null,-1)),u[11]||(u[11]=n[d(366)](v,"i",null,n.ofOsz,-1)),u[12]||(u[12]=n[d(366)](v,"br",null,null,-1)),ge(n[d(470)](n.SZItw(n[d(466)](" ",n.WVSRT($e,n.sBNQO(Ee,s)[d(421)])),n[d(341)])+n[d(274)]($e,i[d(454)])," "),1),u[13]||(u[13]=n[d(468)](v,"br",null,null,-1)),n[d(467)](ge,n[d(447)](n[d(348)],n[d(299)]($e,n[d(364)](Ee,s)[d(471)]))+" ",1),u[14]||(u[14]=n[d(407)](v,"hr",null,null,-1))])):n[d(461)](De,"",!0),n[d(346)](n.WVSRT(Ee,s)[d(471)],5)?(oe(),n.RwdTh(de,n[d(469)],dx,[Qe(hx,{onToExit:u[0]||(u[0]=j=>Z())})])):De("",!0),n[d(428)](Ee(s)[d(471)],-1)?(oe(),n.NlbKx(de,n[d(469)],px,[u[15]||(u[15]=v("br",null,null,-1)),u[16]||(u[16]=n[d(293)](v,"br",null,null,-1)),u[17]||(u[17]=v("br",null,null,-1)),u[18]||(u[18]=v("br",null,null,-1)),u[19]||(u[19]=n[d(478)](ge,n[d(320)])),u[20]||(u[20]=n.Mjmmi(v,"br",null,null,-1)),u[21]||(u[21]=v("br",null,null,-1)),u[22]||(u[22]=v("br",null,null,-1)),u[23]||(u[23]=v("br",null,null,-1)),v(n[d(375)],{onClick:u[1]||(u[1]=j=>Ee(s)[d(471)]=0)},n[d(433)]),u[24]||(u[24]=v("br",null,null,-1)),u[25]||(u[25]=n[d(408)](v,"br",null,null,-1))])):n[d(372)](De,"",!0),n.VzBdu(n[d(311)](Ee,s)[d(471)],0)?(oe(),de(n[d(469)],_x,[Qe(lx,{onGameChanged:w})])):n.yjbJQ(De,"",!0),n.PnQZs(n[d(404)](Ee,s)[d(471)],1)?(n[d(362)](oe),n[d(338)](de,n[d(469)],gx,[u[29]||(u[29]=n.UysTi(v,"p",null,n[d(417)],-1)),n[d(337)](v,"p",null,[n[d(390)](If,n[d(286)](v,n[d(440)],{"onUpdate:modelValue":u[2]||(u[2]=j=>i[d(454)]=j),maxlength:"16",minlength:"3",style:{"font-size":n[d(343)],padding:n[d(356)],"text-align":d(449)},onInput:u[3]||(u[3]=j=>p()),placeholder:n[d(361)]},null,544),[[Xd,i[d(454)]]])]),n.GOjQF(v,n[d(469)],mx,$e(f[d(454)]),1),r.value&&r[d(454)].length>1?(n[d(472)](oe),de(n[d(469)],xx,[u[26]||(u[26]=n[d(408)](v,"h3",null,n[d(310)],-1)),(n[d(291)](oe,!0),de(ze,null,n[d(285)](hl,r[d(454)],j=>{const Y=d;return b[Y(275)](oe),b[Y(465)](de,b[Y(463)],{class:b[Y(412)],key:j.id,onClick:X=>V(j)},b[Y(351)]($e,j[Y(381)]),9,yx)}),128)),u[27]||(u[27]=n[d(313)](v,"br",null,null,-1)),u[28]||(u[28]=n.LggHT(v,"br",null,null,-1))])):De("",!0),n[d(443)](v,n[d(375)],{class:n[d(300)],onClick:u[4]||(u[4]=j=>K())},n[d(402)]),u[30]||(u[30]=v("br",null,null,-1)),u[31]||(u[31]=n[d(479)](ge)),u[32]||(u[32]=n[d(305)](v,"br",null,null,-1)),u[33]||(u[33]=n.GPonm(v,n[d(302)],null,n[d(282)],-1)),u[34]||(u[34]=n[d(313)](v,"br",null,null,-1)),u[35]||(u[35]=v("br",null,null,-1))])):n[d(390)](De,"",!0),n.ojXbS(n[d(312)](Ee,s).stage,2)?(oe(),de(d(419),vx,[u[39]||(u[39]=v("p",null,n[d(340)],-1)),r[d(454)][d(403)]?(n[d(382)](oe),n[d(281)](de,n[d(469)],bx,[u[36]||(u[36]=n[d(408)](v,"h3",null,n[d(310)],-1)),(oe(!0),n[d(464)](de,ze,null,hl(r[d(454)],j=>{const Y=d;return oe(),b.inhjN(de,b[Y(463)],{class:Y(335),key:j.id,onClick:X=>V(j)},b[Y(351)]($e,j[Y(381)]),9,Cx)}),128)),u[37]||(u[37]=v("br",null,null,-1)),u[38]||(u[38]=v("br",null,null,-1))])):n.ehmxL(De,"",!0),l[d(454)]?(n[d(448)](oe),n[d(443)](de,"div",Ex,n[d(347)])):n.NXeUI(De,"",!0),u[40]||(u[40]=n.LtXGC(v,"br",null,null,-1)),u[41]||(u[41]=n[d(457)](v,"br",null,null,-1)),n[d(377)](v,n[d(375)],{onClick:u[5]||(u[5]=j=>F())},n.McAwE),u[42]||(u[42]=v("br",null,null,-1)),u[43]||(u[43]=v("br",null,null,-1))])):n.MqyWh(De,"",!0),n[d(346)](n[d(404)](Ee,s).stage,3)?(n[d(362)](oe),n[d(315)](de,d(419),Ix,[v("p",null,[u[44]||(u[44]=n[d(299)](ge,d(330))),u[45]||(u[45]=n[d(366)](v,"br",null,null,-1)),n[d(293)](v,"b",null,n.eWraY($e,(C=o[d(454)])==null?void 0:C[d(381)]),1),u[46]||(u[46]=n[d(479)](ge)),u[47]||(u[47]=n[d(462)](v,"br",null,null,-1)),u[48]||(u[48]=n.mduiL(ge,n[d(475)]))]),n[d(309)](v,n[d(375)],{onClick:u[6]||(u[6]=j=>ne())},"Нет ответа, отменяю выбор")])):n[d(390)](De,"",!0),n[d(303)](n[d(442)](Ee,s).stage,4)&&((k=o[d(454)])!=null&&k.id)?(n[d(382)](oe),n.gstSN(de,n.pwJYy,wx,[u[49]||(u[49]=n.ggoAi(ge,n[d(314)])),u[50]||(u[50]=n[d(407)](v,"br",null,null,-1)),u[51]||(u[51]=n[d(407)](v,"br",null,null,-1)),n[d(462)](v,"b",null,$e(o[d(454)][d(381)]),1),u[52]||(u[52]=n[d(401)](v,"br",null,null,-1)),u[53]||(u[53]=n[d(289)](v,"br",null,null,-1)),v(n.nVUMA,{class:d(335),onClick:u[7]||(u[7]=j=>J(!1))},d(308)),n[d(451)](v,n[d(375)],{class:d(335),onClick:u[8]||(u[8]=j=>J(!0))},n[d(388)])])):n[d(285)](De,"",!0),n[d(292)](Ee(s).stage,5)&&o[d(454)]?(n.dKvbN(oe),n[d(439)](de,n[d(469)],Sx,[u[54]||(u[54]=n[d(293)](v,"h3",null,n[d(373)],-1)),u[55]||(u[55]=n.DqFos(ge,n[d(294)])),u[56]||(u[56]=n[d(457)](v,"br",null,null,-1)),u[57]||(u[57]=n.NJMbs(v,"br",null,null,-1)),n[d(441)](v,n[d(469)],Tx,[v("b",null,n.tHcxM($e,o[d(454)][d(381)]),1)]),u[58]||(u[58]=n[d(389)](v,"br",null,null,-1)),u[59]||(u[59]=n[d(369)](v,"br",null,null,-1)),n.KwWxR(v,d(419),Nx,[n[d(462)](v,"b",null,n[d(298)]($e,c[d(454)]),1)])])):n[d(287)](De,"",!0),n[d(379)](Ee,s)[d(471)]&&[1,2,3,4,5].includes(n.IbSww(Ee,s)[d(471)])?(oe(),n.RMXvk(de,n[d(469)],Rx,[u[60]||(u[60]=v("hr",null,null,-1)),u[61]||(u[61]=n.zqVFo(v,"br",null,null,-1)),n[d(353)](v,n.pwJYy,Ax,n[d(404)]($e,n[d(404)](Ee,s)[d(434)][n[d(325)](Ee,s)[d(370)]]),1),u[62]||(u[62]=n[d(280)](v,"br",null,null,-1)),u[63]||(u[63]=n.AmhHz(v,"br",null,null,-1))])):De("",!0),n[d(292)](n[d(418)](Ee,s)[d(471)],5)?(n.hQbYp(oe),n[d(431)](de,d(419),Px,[v(n[d(375)],{onClick:u[9]||(u[9]=j=>ve())},n.unBAL)])):De("",!0),u[64]||(u[64]=n[d(425)](v,"br",null,null,-1)),u[65]||(u[65]=n[d(286)](v,"br",null,null,-1))],64)}}}),kx={class:"game"},Mx={__name:"StartPage",setup(t){return(e,n)=>(oe(),de("div",kx,[n[0]||(n[0]=v("h1",null,"♕",-1)),v("div",null,[Qe(Dx)])]))}},Fx=Ns(Mx,[["__scopeId","data-v-8b01c1fe"]]),Nh=wi;(function(t,e){const n=wi,s=t();for(;;)try{if(-parseInt(n(251))/1+-parseInt(n(231))/2+-parseInt(n(276))/3+-parseInt(n(244))/4+-parseInt(n(237))/5+parseInt(n(283))/6+parseInt(n(256))/7===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Si,270421);function wi(t,e){const n=Si();return wi=function(s,i){return s=s-229,n[s]},wi(t,e)}const Lx={class:Nh(262)},Wx=Li({__name:"StounScissorsPaper",setup(t){const e=Nh,n={eFOhZ:e(266),mmCRk:function(l,a){return l+a},qiVzr:"/games/",mpcJq:e(252),vgeNJ:"? 200? ? ?  ? ?res = ",uNIob:function(l,a){return l+a},rulLj:function(l,a){return l+a},KZnKZ:e(281),DGIBt:e(264),EPBNW:function(l){return l()},kifZU:function(l,a,c,f){return l(a,c,f)},lemdW:"div",IWfdx:function(l,a,c,f,p){return l(a,c,f,p)},iPOAy:e(274),pKekq:function(l,a,c,f,p){return l(a,c,f,p)},nfGxB:function(l,a,c,f,p){return l(a,c,f,p)},FFbIQ:"button",rOHEW:function(l,a){return l(a)},pBkYH:e(239),ujdBM:function(l,a,c,f,p){return l(a,c,f,p)},DWRpn:function(l,a){return l===a},pPSbW:e(238),RWAkP:e(240),ahMVW:function(l,a,c,f,p){return l(a,c,f,p)},MaAjw:"green-bt",SbleT:"Свериться",mJyhw:function(l){return l()},tpxOY:function(l,a,c){return l(a,c)},KxdTb:function(l,a){return l+a},vuicZ:function(l,a){return l+a},AtNvu:e(269),yUifb:e(278),qpsCB:function(l){return l()},GMiyR:function(l,a){return l(a)},cQiMY:function(l){return l()},zvfTz:function(l,a){return l(a)}},s=n[e(285)](tr),i=n[e(258)](Ge,0),r=n[e(241)](Ge);function o(){const l=e;s[l(229)](n.mmCRk(n[l(249)](n.mmCRk(n.qiVzr,s.gameLink),n[l(235)]),s.myId),{q:i.value}).then(a=>{console[l(255)](n.eFOhZ,a)})}return n[e(265)](vo,()=>{const l=e,a={BLILu:n[l(280)]};s[l(277)](n[l(267)](n[l(248)](l(261),s[l(234)]),n.KZnKZ))[l(260)](c=>{const f=l;console[f(255)](a[f(275)],c),console.log(c),r[f(284)]=c}),console[l(255)](n[l(250)]),s[l(279)](n[l(248)](n[l(248)](l(261),s[l(234)]),n[l(243)]))[l(260)](c=>{const f=l;console[f(255)](f(268),c),console[f(255)](c),r[f(284)]=c})}),(l,a)=>{const c=e;return n[c(232)](oe),n[c(270)](de,n.lemdW,Lx,[a[4]||(a[4]=n[c(259)](v,"br",null,null,-1)),a[5]||(a[5]=v("h2",null,"Камень ножницы бумага",-1)),a[6]||(a[6]=n[c(259)](v,"br",null,null,-1)),a[7]||(a[7]=n[c(259)](v,"br",null,null,-1)),a[8]||(a[8]=ge(n.iPOAy)),a[9]||(a[9]=n.pKekq(v,"br",null,null,-1)),a[10]||(a[10]=n[c(259)](v,"br",null,null,-1)),a[11]||(a[11]=n[c(271)](v,"br",null,null,-1)),n[c(271)](v,n[c(247)],{class:n[c(242)](gn,{active:i[c(284)]===1}),onClick:a[0]||(a[0]=f=>i[c(284)]=1)},n.pBkYH,2),a[12]||(a[12]=n[c(282)](v,"br",null,null,-1)),a[13]||(a[13]=n[c(253)](v,"br",null,null,-1)),n[c(282)](v,n[c(247)],{class:n[c(242)](gn,{active:n[c(263)](i[c(284)],2)}),onClick:a[1]||(a[1]=f=>i[c(284)]=2)},n[c(236)],2),a[14]||(a[14]=v("br",null,null,-1)),a[15]||(a[15]=n[c(259)](v,"br",null,null,-1)),n.IWfdx(v,"button",{class:n[c(242)](gn,{active:n[c(263)](i[c(284)],3)}),onClick:a[2]||(a[2]=f=>i[c(284)]=3)},n[c(273)],2),a[16]||(a[16]=n[c(271)](v,"br",null,null,-1)),a[17]||(a[17]=n[c(282)](v,"br",null,null,-1)),a[18]||(a[18]=v("br",null,null,-1)),a[19]||(a[19]=n[c(282)](v,"br",null,null,-1)),a[20]||(a[20]=n[c(254)](v,"br",null,null,-1)),a[21]||(a[21]=v("br",null,null,-1)),v(n.FFbIQ,{class:n[c(245)],onClick:a[3]||(a[3]=f=>o())},n[c(272)]),a[22]||(a[22]=v("br",null,null,-1)),a[23]||(a[23]=n[c(230)](ge)),a[24]||(a[24]=n[c(282)](v,"br",null,null,-1)),n.tpxOY(ge,n[c(257)](n[c(233)](n[c(246)],n[c(242)]($e,r.value)),n.yUifb),1)])}}});function Si(){const t=[" >> ","onValue","vgeNJ","/game","ujdBM","2056824LDNKsn","value","qpsCB","setField","mJyhw","240uOmWVA","EPBNW","vuicZ","gameLink","mpcJq","pPSbW","624375ZPSRSB","Ножницы","Камень","Бумага","cQiMY","rOHEW","KZnKZ","1650848aziRVO","MaAjw","AtNvu","FFbIQ","rulLj","mmCRk","DGIBt","242097qzSbkW","/game/","pKekq","ahMVW","log","5451117TENJTw","KxdTb","GMiyR","IWfdx","then","/games/","rama","DWRpn","9999999999999","zvfTz","!!! res","uNIob","? ? ? ?  ? ?res = "," << ","kifZU","nfGxB","SbleT","RWAkP"," Выбери: ","BLILu","213930NevCPg","getField"];return Si=function(){return t},Si()}const Bx=Ns(Wx,[["__scopeId","data-v-dc1da9fe"]]),Hx={};function Ux(t,e){return oe(),de(ze,null,[e[0]||(e[0]=v("h3",null,"Крестики нолики!!!",-1)),e[1]||(e[1]=v("br",null,null,-1)),e[2]||(e[2]=v("br",null,null,-1))],64)}const Vx=Ns(Hx,[["render",Ux]]),jx={};function $x(t,e){return" SeaWar "}const Kx=Ns(jx,[["render",$x]]),zx={__name:"App",setup(t){const e=tr();let n=uf(Fx);Zt(()=>e.playNumber,i=>{console.log("- - - - - - - res",i),s(i)});function s(i){switch(console.log(i),i){case 1:n.value=Bx;break;case 2:n.value=Vx;break;case 3:n.value=Kx;break}}return vo(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.myId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||0,e.myName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")&&(e.myId=261538035)},500))}),(i,r)=>(oe(),Lc(Bf(Ee(n))))}},Pa=Ni;(function(t,e){const n=Ni,s=t();for(;;)try{if(parseInt(n(199))/1*(-parseInt(n(200))/2)+-parseInt(n(202))/3*(parseInt(n(194))/4)+-parseInt(n(196))/5+-parseInt(n(198))/6*(-parseInt(n(197))/7)+-parseInt(n(206))/8*(parseInt(n(195))/9)+-parseInt(n(201))/10+parseInt(n(205))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ti,786024);function Ti(){const t=["1676072ZRoDdG","9MxzqOK","5240015yOQfFr","7EiWrhJ","5786346rQvntj","57basAQR","22584CBnAie","8901620izvyuD","3lhWVKg","use","mount","36749878QgTCZd","4147504tDBfPl"];return Ti=function(){return t},Ti()}function Ni(t,e){const n=Ti();return Ni=function(s,i){return s=s-194,n[s]},Ni(t,e)}const qx=sp(),Oa=ep(zx);Oa[Pa(203)](qx),Oa[Pa(204)]("#app");
