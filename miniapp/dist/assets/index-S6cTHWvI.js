function $s(t,e){const n=Gs();return $s=function(s,i){return s=s-208,n[s]},$s(t,e)}(function(t,e){const n=$s,s=t();for(;;)try{if(-parseInt(n(234))/1*(-parseInt(n(237))/2)+-parseInt(n(247))/3+-parseInt(n(225))/4*(parseInt(n(229))/5)+-parseInt(n(220))/6*(parseInt(n(242))/7)+parseInt(n(221))/8+-parseInt(n(223))/9*(-parseInt(n(238))/10)+-parseInt(n(240))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Gs,613666),function(){const e=$s,n={Vzerl:e(226),aGVrU:function(o,l){return o===l},mFPUy:e(231),taMcO:function(o,l){return o(l)},SaRBS:function(o,l){return o===l},dgRUR:e(232),heuEB:function(o,l){return o===l},TEcIF:e(216),Srwyq:e(210),rCESp:function(o,l){return o(l)},lcqeL:function(o,l,c){return o(l,c)},ryGhu:e(211),omOml:function(o,l){return o(l)}},s=document[e(219)](n[e(213)])[e(209)];if(s&&s[e(230)]&&s.supports(n.mFPUy))return;for(const o of document[e(236)](e(227)))n[e(217)](r,o);new MutationObserver(o=>{const l=e;for(const c of o)if(c[l(222)]===n[l(244)])for(const a of c.addedNodes)n[l(239)](a.tagName,l(243))&&n.aGVrU(a[l(246)],n[l(224)])&&n[l(241)](r,a)})[e(215)](document,{childList:!0,subtree:!0});function i(o){const l=e,c={};return o.integrity&&(c[l(214)]=o.integrity),o[l(249)]&&(c.referrerPolicy=o[l(249)]),n.SaRBS(o.crossOrigin,"use-credentials")?c.credentials=n[l(218)]:n[l(212)](o[l(233)],l(208))?c[l(228)]=n[l(235)]:c[l(228)]=n.Srwyq,c}function r(o){const l=e;if(o.ep)return;o.ep=!0;const c=n[l(245)](i,o);n.lcqeL(fetch,o[l(248)],c)}}();function Gs(){const t=["rCESp","rel","268668nZKYcg","href","referrerPolicy","anonymous","relList","same-origin","link","heuEB","ryGhu","integrity","observe","omit","omOml","dgRUR","createElement","6lESAeG","4414712epiNua","type","171ULGfqN","mFPUy","141688HSgXuq","childList",'link[rel="modulepreload"]',"credentials","25swoZoH","supports","modulepreload","include","crossOrigin","266351hpMMCn","TEcIF","querySelectorAll","6pVvDJi","203010VAJBEC","aGVrU","4279847UCguSD","taMcO","3270414xfZSRN","LINK","Vzerl"];return Gs=function(){return t},Gs()}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function so(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},gn=[],ht=()=>{},Ah=()=>!1,Ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),io=t=>t.startsWith("onUpdate:"),Oe=Object.assign,ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oh=Object.prototype.hasOwnProperty,te=(t,e)=>Oh.call(t,e),U=Array.isArray,mn=t=>Ai(t)==="[object Map]",Pc=t=>Ai(t)==="[object Set]",V=t=>typeof t=="function",xe=t=>typeof t=="string",Wt=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",kc=t=>(_e(t)||V(t))&&V(t.then)&&V(t.catch),Dc=Object.prototype.toString,Ai=t=>Dc.call(t),Ph=t=>Ai(t).slice(8,-1),Mc=t=>Ai(t)==="[object Object]",oo=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zn=so(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kh=/-(\w)/g,Qe=Oi(t=>t.replace(kh,(e,n)=>n?n.toUpperCase():"")),Dh=/\B([A-Z])/g,ln=Oi(t=>t.replace(Dh,"-$1").toLowerCase()),Pi=Oi(t=>t.charAt(0).toUpperCase()+t.slice(1)),nr=Oi(t=>t?`on${Pi(t)}`:""),At=(t,e)=>!Object.is(t,e),Us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},wr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rl;const ki=()=>rl||(rl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lo(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Bh(s):lo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(xe(t)||_e(t))return t}const Mh=/;(?![^(]*\))/g,Fh=/:([^]+)/,Lh=/\/\*[^]*?\*\//g;function Bh(t){const e={};return t.replace(Lh,"").split(Mh).forEach(n=>{if(n){const s=n.split(Fh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xn(t){let e="";if(xe(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=xn(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uh=so(Wh);function Lc(t){return!!t||t===""}const Bc=t=>!!(t&&t.__v_isRef===!0),Ke=t=>xe(t)?t:t==null?"":U(t)||_e(t)&&(t.toString===Dc||!V(t.toString))?Bc(t)?Ke(t.value):JSON.stringify(t,Wc,2):String(t),Wc=(t,e)=>Bc(e)?Wc(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[sr(s,r)+" =>"]=i,n),{})}:Pc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sr(n))}:Wt(e)?sr(e):_e(e)&&!U(e)&&!Mc(e)?String(e):e,sr=(t,e="")=>{var n;return Wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class Uc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Hc(t){return new Uc(t)}function Vc(){return De}function Hh(t,e=!1){De&&De.cleanups.push(t)}let ce;const ir=new WeakSet;class jc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ir.has(this)&&(ir.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ol(this),zc(this);const e=ce,n=nt;ce=this,nt=!0;try{return this.fn()}finally{Kc(this),ce=e,nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uo(e);this.deps=this.depsTail=void 0,ol(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ir.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sr(this)&&this.run()}get dirty(){return Sr(this)}}let $c=0,Kn,qn;function Gc(t,e=!1){if(t.flags|=8,e){t.next=qn,qn=t;return}t.next=Kn,Kn=t}function co(){$c++}function ao(){if(--$c>0)return;if(qn){let e=qn;for(qn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Kn;){let e=Kn;for(Kn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function zc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),uo(s),Vh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Sr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function qc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===os))return;t.globalVersion=os;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sr(t)){t.flags&=-3;return}const n=ce,s=nt;ce=t,nt=!0;try{zc(t);const i=t.fn(t._value);(e.version===0||At(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,nt=s,Kc(t),t.flags&=-3}}function uo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)uo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nt=!0;const Yc=[];function Ut(){Yc.push(nt),nt=!1}function Ht(){const t=Yc.pop();nt=t===void 0?!0:t}function ol(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let os=0;class jh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ho{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!nt||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new jh(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Qc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,os++,this.notify(e)}notify(e){co();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ao()}}}function Qc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Qc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zs=new WeakMap,Xt=Symbol(""),Tr=Symbol(""),ls=Symbol("");function Ne(t,e,n){if(nt&&ce){let s=zs.get(t);s||zs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ho),i.map=s,i.key=n),i.track()}}function mt(t,e,n,s,i,r){const o=zs.get(t);if(!o){os++;return}const l=c=>{c&&c.trigger()};if(co(),e==="clear")o.forEach(l);else{const c=U(t),a=c&&oo(n);if(c&&n==="length"){const f=Number(s);o.forEach((p,g)=>{(g==="length"||g===ls||!Wt(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(ls)),e){case"add":c?a&&l(o.get("length")):(l(o.get(Xt)),mn(t)&&l(o.get(Tr)));break;case"delete":c||(l(o.get(Xt)),mn(t)&&l(o.get(Tr)));break;case"set":mn(t)&&l(o.get(Xt));break}}ao()}function $h(t,e){const n=zs.get(t);return n&&n.get(e)}function an(t){const e=J(t);return e===t?e:(Ne(e,"iterate",ls),qe(t)?e:e.map(Re))}function Di(t){return Ne(t=J(t),"iterate",ls),t}const Gh={__proto__:null,[Symbol.iterator](){return rr(this,Symbol.iterator,Re)},concat(...t){return an(this).concat(...t.map(e=>U(e)?an(e):e))},entries(){return rr(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return _t(this,"every",t,e,void 0,arguments)},filter(t,e){return _t(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return _t(this,"find",t,e,Re,arguments)},findIndex(t,e){return _t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _t(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return _t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _t(this,"forEach",t,e,void 0,arguments)},includes(...t){return or(this,"includes",t)},indexOf(...t){return or(this,"indexOf",t)},join(t){return an(this).join(t)},lastIndexOf(...t){return or(this,"lastIndexOf",t)},map(t,e){return _t(this,"map",t,e,void 0,arguments)},pop(){return Bn(this,"pop")},push(...t){return Bn(this,"push",t)},reduce(t,...e){return ll(this,"reduce",t,e)},reduceRight(t,...e){return ll(this,"reduceRight",t,e)},shift(){return Bn(this,"shift")},some(t,e){return _t(this,"some",t,e,void 0,arguments)},splice(...t){return Bn(this,"splice",t)},toReversed(){return an(this).toReversed()},toSorted(t){return an(this).toSorted(t)},toSpliced(...t){return an(this).toSpliced(...t)},unshift(...t){return Bn(this,"unshift",t)},values(){return rr(this,"values",Re)}};function rr(t,e,n){const s=Di(t),i=s[e]();return s!==t&&!qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const zh=Array.prototype;function _t(t,e,n,s,i,r){const o=Di(t),l=o!==t&&!qe(t),c=o[e];if(c!==zh[e]){const p=c.apply(t,r);return l?Re(p):p}let a=n;o!==t&&(l?a=function(p,g){return n.call(this,Re(p),g,t)}:n.length>2&&(a=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,a,s);return l&&i?i(f):f}function ll(t,e,n,s){const i=Di(t);let r=n;return i!==t&&(qe(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Re(l),c,t)}),i[e](r,...s)}function or(t,e,n){const s=J(t);Ne(s,"iterate",ls);const i=s[e](...n);return(i===-1||i===!1)&&_o(n[0])?(n[0]=J(n[0]),s[e](...n)):i}function Bn(t,e,n=[]){Ut(),co();const s=J(t)[e].apply(t,n);return ao(),Ht(),s}const Kh=so("__proto__,__v_isRef,__isVue"),Xc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt));function qh(t){Wt(t)||(t=String(t));const e=J(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class Jc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?rf:na:r?ta:ea).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let c;if(o&&(c=Gh[n]))return c;if(n==="hasOwnProperty")return qh}const l=Reflect.get(e,n,me(e)?e:s);return(Wt(n)?Xc.has(n):Kh(n))||(i||Ne(e,"get",n),r)?l:me(l)?o&&oo(n)?l:l.value:_e(l)?i?sa(l):Mi(l):l}}class Zc extends Jc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=tn(r);if(!qe(s)&&!tn(s)&&(r=J(r),s=J(s)),!U(e)&&me(r)&&!me(s))return c?!1:(r.value=s,!0)}const o=U(e)&&oo(n)?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,me(e)?e:i);return e===J(i)&&(o?At(s,r)&&mt(e,"set",n,s):mt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&mt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Wt(n)||!Xc.has(n))&&Ne(e,"has",n),s}ownKeys(e){return Ne(e,"iterate",U(e)?"length":Xt),Reflect.ownKeys(e)}}class Yh extends Jc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qh=new Zc,Xh=new Yh,Jh=new Zc(!0);const Nr=t=>t,ks=t=>Reflect.getPrototypeOf(t);function Zh(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),f=n?Nr:e?Rr:Re;return!e&&Ne(r,"iterate",c?Tr:Xt),{next(){const{value:p,done:g}=a.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Ds(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ef(t,e){const n={get(i){const r=this.__v_raw,o=J(r),l=J(i);t||(At(i,l)&&Ne(o,"get",i),Ne(o,"get",l));const{has:c}=ks(o),a=e?Nr:t?Rr:Re;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ne(J(i),"iterate",Xt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=J(r),l=J(i);return t||(At(i,l)&&Ne(o,"has",i),Ne(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=J(l),a=e?Nr:t?Rr:Re;return!t&&Ne(c,"iterate",Xt),l.forEach((f,p)=>i.call(r,a(f),a(p),o))}};return Oe(n,t?{add:Ds("add"),set:Ds("set"),delete:Ds("delete"),clear:Ds("clear")}:{add(i){!e&&!qe(i)&&!tn(i)&&(i=J(i));const r=J(this);return ks(r).has.call(r,i)||(r.add(i),mt(r,"add",i,i)),this},set(i,r){!e&&!qe(r)&&!tn(r)&&(r=J(r));const o=J(this),{has:l,get:c}=ks(o);let a=l.call(o,i);a||(i=J(i),a=l.call(o,i));const f=c.call(o,i);return o.set(i,r),a?At(r,f)&&mt(o,"set",i,r):mt(o,"add",i,r),this},delete(i){const r=J(this),{has:o,get:l}=ks(r);let c=o.call(r,i);c||(i=J(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&mt(r,"delete",i,void 0),a},clear(){const i=J(this),r=i.size!==0,o=i.clear();return r&&mt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Zh(i,t,e)}),n}function fo(t,e){const n=ef(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const tf={get:fo(!1,!1)},nf={get:fo(!1,!0)},sf={get:fo(!0,!1)};const ea=new WeakMap,ta=new WeakMap,na=new WeakMap,rf=new WeakMap;function of(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lf(t){return t.__v_skip||!Object.isExtensible(t)?0:of(Ph(t))}function Mi(t){return tn(t)?t:po(t,!1,Qh,tf,ea)}function cf(t){return po(t,!1,Jh,nf,ta)}function sa(t){return po(t,!0,Xh,sf,na)}function po(t,e,n,s,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=lf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ot(t){return tn(t)?Ot(t.__v_raw):!!(t&&t.__v_isReactive)}function tn(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function _o(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function go(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Fc(t,"__v_skip",!0),t}const Re=t=>_e(t)?Mi(t):t,Rr=t=>_e(t)?sa(t):t;function me(t){return t?t.__v_isRef===!0:!1}function Je(t){return ia(t,!1)}function af(t){return ia(t,!0)}function ia(t,e){return me(t)?t:new uf(t,e)}class uf{constructor(e,n){this.dep=new ho,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||qe(e)||tn(e);e=s?e:J(e),At(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function Ee(t){return me(t)?t.value:t}const hf={get:(t,e,n)=>e==="__v_raw"?t:Ee(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ra(t){return Ot(t)?t:new Proxy(t,hf)}function ff(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=pf(t,n);return e}class df{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $h(J(this._object),this._key)}}function pf(t,e,n){const s=t[e];return me(s)?s:new df(t,e,n)}class _f{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ho(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Gc(this,!0),!0}get value(){const e=this.dep.track();return qc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gf(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new _f(s,i,n)}const Ms={},Ks=new WeakMap;let Gt;function mf(t,e=!1,n=Gt){if(n){let s=Ks.get(n);s||Ks.set(n,s=[]),s.push(t)}}function xf(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=M=>i?M:qe(M)||i===!1||i===0?xt(M,1):xt(M);let f,p,g,x,I=!1,k=!1;if(me(t)?(p=()=>t.value,I=qe(t)):Ot(t)?(p=()=>a(t),I=!0):U(t)?(k=!0,I=t.some(M=>Ot(M)||qe(M)),p=()=>t.map(M=>{if(me(M))return M.value;if(Ot(M))return a(M);if(V(M))return c?c(M,2):M()})):V(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Ut();try{g()}finally{Ht()}}const M=Gt;Gt=f;try{return c?c(t,3,[x]):t(x)}finally{Gt=M}}:p=ht,e&&i){const M=p,X=i===!0?1/0:i;p=()=>xt(M(),X)}const $=Vc(),j=()=>{f.stop(),$&&$.active&&ro($.effects,f)};if(r&&e){const M=e;e=(...X)=>{M(...X),j()}}let Q=k?new Array(t.length).fill(Ms):Ms;const ee=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(e){const X=f.run();if(i||I||(k?X.some((Xe,Ce)=>At(Xe,Q[Ce])):At(X,Q))){g&&g();const Xe=Gt;Gt=f;try{const Ce=[X,Q===Ms?void 0:k&&Q[0]===Ms?[]:Q,x];c?c(e,3,Ce):e(...Ce),Q=X}finally{Gt=Xe}}}else f.run()};return l&&l(ee),f=new jc(p),f.scheduler=o?()=>o(ee,!1):ee,x=M=>mf(M,!1,f),g=f.onStop=()=>{const M=Ks.get(f);if(M){if(c)c(M,4);else for(const X of M)X();Ks.delete(f)}},e?s?ee(!0):Q=f.run():o?o(ee.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function xt(t,e=1/0,n){if(e<=0||!_e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))xt(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)xt(t[s],e,n);else if(Pc(t)||mn(t))t.forEach(s=>{xt(s,e,n)});else if(Mc(t)){for(const s in t)xt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&xt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cs(t,e,n,s){try{return s?t(...s):t()}catch(i){Fi(i,e,n)}}function ft(t,e,n,s){if(V(t)){const i=Cs(t,e,n,s);return i&&kc(i)&&i.catch(r=>{Fi(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}}function Fi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,a)===!1)return}l=l.parent}if(r){Ut(),Cs(r,null,10,[t,c,a]),Ht();return}}yf(t,n,i,s,o)}function yf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Me=[];let at=-1;const yn=[];let Nt=null,dn=0;const oa=Promise.resolve();let qs=null;function la(t){const e=qs||oa;return t?e.then(this?t.bind(this):t):e}function bf(t){let e=at+1,n=Me.length;for(;e<n;){const s=e+n>>>1,i=Me[s],r=cs(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function mo(t){if(!(t.flags&1)){const e=cs(t),n=Me[Me.length-1];!n||!(t.flags&2)&&e>=cs(n)?Me.push(t):Me.splice(bf(e),0,t),t.flags|=1,ca()}}function ca(){qs||(qs=oa.then(ua))}function vf(t){U(t)?yn.push(...t):Nt&&t.id===-1?Nt.splice(dn+1,0,t):t.flags&1||(yn.push(t),t.flags|=1),ca()}function cl(t,e,n=at+1){for(;n<Me.length;n++){const s=Me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function aa(t){if(yn.length){const e=[...new Set(yn)].sort((n,s)=>cs(n)-cs(s));if(yn.length=0,Nt){Nt.push(...e);return}for(Nt=e,dn=0;dn<Nt.length;dn++){const n=Nt[dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,dn=0}}const cs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ua(t){try{for(at=0;at<Me.length;at++){const e=Me[at];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;at<Me.length;at++){const e=Me[at];e&&(e.flags&=-2)}at=-1,Me.length=0,aa(),qs=null,(Me.length||yn.length)&&ua()}}let Be=null,ha=null;function Ys(t){const e=Be;return Be=t,ha=t&&t.type.__scopeId||null,e}function Cf(t,e=Be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yl(-1);const r=Ys(e);let o;try{o=t(...i)}finally{Ys(r),s._d&&yl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ef(t,e){if(Be===null)return t;const n=Hi(Be),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=re]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&xt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Ut(),ft(c,n,8,[t.el,l,t,e]),Ht())}}const If=Symbol("_vte"),wf=t=>t.__isTeleport;function xo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Li(t,e){return V(t)?Oe({name:t.name},e,{setup:t}):t}function fa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qs(t,e,n,s,i=!1){if(U(t)){t.forEach((I,k)=>Qs(I,e&&(U(e)?e[k]:e),n,s,i));return}if(Yn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Qs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Hi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,f=l.refs===re?l.refs={}:l.refs,p=l.setupState,g=J(p),x=p===re?()=>!1:I=>te(g,I);if(a!=null&&a!==c&&(xe(a)?(f[a]=null,x(a)&&(p[a]=null)):me(a)&&(a.value=null)),V(c))Cs(c,l,12,[o,f]);else{const I=xe(c),k=me(c);if(I||k){const $=()=>{if(t.f){const j=I?x(c)?p[c]:f[c]:c.value;i?U(j)&&ro(j,r):U(j)?j.includes(r)||j.push(r):I?(f[c]=[r],x(c)&&(p[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else I?(f[c]=o,x(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};o?($.id=-1,$e($,n)):$()}}}ki().requestIdleCallback;ki().cancelIdleCallback;const Yn=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function Sf(t,e){pa(t,"a",e)}function Tf(t,e){pa(t,"da",e)}function pa(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Bi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)da(i.parent.vnode)&&Nf(s,e,n,i),i=i.parent}}function Nf(t,e,n,s){const i=Bi(e,t,s,!0);ga(()=>{ro(s[e],i)},n)}function Bi(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ut();const l=Es(n),c=ft(e,n,t,o);return l(),Ht(),c});return s?i.unshift(r):i.push(r),r}}const It=t=>(e,n=Te)=>{(!us||t==="sp")&&Bi(t,(...s)=>e(...s),n)},Rf=It("bm"),_a=It("m"),Af=It("bu"),Of=It("u"),Pf=It("bum"),ga=It("um"),kf=It("sp"),Df=It("rtg"),Mf=It("rtc");function Ff(t,e=Te){Bi("ec",t,e)}const Lf="components",ma=Symbol.for("v-ndc");function Bf(t){return xe(t)?Wf(Lf,t,!1)||t:t||ma}function Wf(t,e,n=!0,s=!1){const i=Be||Te;if(i){const r=i.type;{const l=Td(r,!1);if(l&&(l===e||l===Qe(e)||l===Pi(Qe(e))))return r}const o=al(i[t]||r[t],e)||al(i.appContext[t],e);return!o&&s?r:o}}function al(t,e){return t&&(t[e]||t[Qe(e)]||t[Pi(Qe(e))])}function ul(t,e,n,s){let i;const r=n&&n[s],o=U(t);if(o||xe(t)){const l=o&&Ot(t);let c=!1;l&&(c=!qe(t),t=Di(t)),i=new Array(t.length);for(let a=0,f=t.length;a<f;a++)i[a]=e(c?Re(t[a]):t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r&&r[l])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r&&r[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const f=l[c];i[c]=e(t[f],f,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Ar=t=>t?Ua(t)?Hi(t):Ar(t.parent):null,Qn=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ar(t.parent),$root:t=>Ar(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ya(t),$forceUpdate:t=>t.f||(t.f=()=>{mo(t.update)}),$nextTick:t=>t.n||(t.n=la.bind(t.proxy)),$watch:t=>cd.bind(t)}),lr=(t,e)=>t!==re&&!t.__isScriptSetup&&te(t,e),Uf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const x=o[e];if(x!==void 0)switch(x){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(lr(s,e))return o[e]=1,s[e];if(i!==re&&te(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&te(a,e))return o[e]=3,r[e];if(n!==re&&te(n,e))return o[e]=4,n[e];Or&&(o[e]=0)}}const f=Qn[e];let p,g;if(f)return e==="$attrs"&&Ne(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==re&&te(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,te(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return lr(i,e)?(i[e]=n,!0):s!==re&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==re&&te(t,o)||lr(e,o)||(l=r[0])&&te(l,o)||te(s,o)||te(Qn,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hl(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Or=!0;function Hf(t){const e=ya(t),n=t.proxy,s=t.ctx;Or=!1,e.beforeCreate&&fl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:f,beforeMount:p,mounted:g,beforeUpdate:x,updated:I,activated:k,deactivated:$,beforeDestroy:j,beforeUnmount:Q,destroyed:ee,unmounted:M,render:X,renderTracked:Xe,renderTriggered:Ce,errorCaptured:h,serverPrefetch:u,expose:d,inheritAttrs:v,components:T,directives:F,filters:H}=e;if(a&&Vf(a,s,null),o)for(const G in o){const se=o[G];V(se)&&(s[G]=se.bind(n))}if(i){const G=i.call(n,n);_e(G)&&(t.data=Mi(G))}if(Or=!0,r)for(const G in r){const se=r[G],pt=V(se)?se.bind(n,n):V(se.get)?se.get.bind(n,n):ht,Dn=!V(se)&&V(se.set)?se.set.bind(n):ht,Vt=Va({get:pt,set:Dn});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:it=>Vt.value=it})}if(l)for(const G in l)xa(l[G],s,n,G);if(c){const G=V(c)?c.call(n):c;Reflect.ownKeys(G).forEach(se=>{qf(se,G[se])})}f&&fl(f,t,"c");function he(G,se){U(se)?se.forEach(pt=>G(pt.bind(n))):se&&G(se.bind(n))}if(he(Rf,p),he(_a,g),he(Af,x),he(Of,I),he(Sf,k),he(Tf,$),he(Ff,h),he(Mf,Xe),he(Df,Ce),he(Pf,Q),he(ga,M),he(kf,u),U(d))if(d.length){const G=t.exposed||(t.exposed={});d.forEach(se=>{Object.defineProperty(G,se,{get:()=>n[se],set:pt=>n[se]=pt})})}else t.exposed||(t.exposed={});X&&t.render===ht&&(t.render=X),v!=null&&(t.inheritAttrs=v),T&&(t.components=T),F&&(t.directives=F),u&&fa(t)}function Vf(t,e,n=ht){U(t)&&(t=Pr(t));for(const s in t){const i=t[s];let r;_e(i)?"default"in i?r=Xn(i.from||s,i.default,!0):r=Xn(i.from||s):r=Xn(i),me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function fl(t,e,n){ft(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,s){let i=s.includes(".")?ka(n,s):()=>n[s];if(xe(t)){const r=e[t];V(r)&&Zt(i,r)}else if(V(t))Zt(i,t.bind(n));else if(_e(t))if(U(t))t.forEach(r=>xa(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&Zt(i,r,t)}}function ya(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Xs(c,a,o,!0)),Xs(c,e,o)),_e(e)&&r.set(e,c),c}function Xs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Xs(t,r,n,!0),i&&i.forEach(o=>Xs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=jf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const jf={data:dl,props:pl,emits:pl,methods:Gn,computed:Gn,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Gn,directives:Gn,watch:Gf,provide:dl,inject:$f};function dl(t,e){return e?t?function(){return Oe(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function $f(t,e){return Gn(Pr(t),Pr(e))}function Pr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Gn(t,e){return t?Oe(Object.create(null),t,e):e}function pl(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Oe(Object.create(null),hl(t),hl(e??{})):e}function Gf(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function ba(){return{app:null,config:{isNativeTag:Ah,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function Kf(t,e){return function(s,i=null){V(s)||(s=Oe({},s)),i!=null&&!_e(i)&&(i=null);const r=ba(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:zf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Rd,get config(){return r.config},set config(f){},use(f,...p){return o.has(f)||(f&&V(f.install)?(o.add(f),f.install(a,...p)):V(f)&&(o.add(f),f(a,...p))),a},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),a},component(f,p){return p?(r.components[f]=p,a):r.components[f]},directive(f,p){return p?(r.directives[f]=p,a):r.directives[f]},mount(f,p,g){if(!c){const x=a._ceVNode||Ye(s,i);return x.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(x,f,g),c=!0,a._container=f,f.__vue_app__=a,Hi(x.component)}},onUnmount(f){l.push(f)},unmount(){c&&(ft(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(f,p){return r.provides[f]=p,a},runWithContext(f){const p=Jt;Jt=a;try{return f()}finally{Jt=p}}};return a}}let Jt=null;function qf(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function Xn(t,e,n=!1){const s=Te||Be;if(s||Jt){const i=Jt?Jt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}function Yf(){return!!(Te||Be||Jt)}const va={},Ca=()=>Object.create(va),Ea=t=>Object.getPrototypeOf(t)===va;function Qf(t,e,n,s=!1){const i={},r=Ca();t.propsDefaults=Object.create(null),Ia(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:cf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Xf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Wi(t.emitsOptions,g))continue;const x=e[g];if(c)if(te(r,g))x!==r[g]&&(r[g]=x,a=!0);else{const I=Qe(g);i[I]=kr(c,l,I,x,t,!1)}else x!==r[g]&&(r[g]=x,a=!0)}}}else{Ia(t,e,i,r)&&(a=!0);let f;for(const p in l)(!e||!te(e,p)&&((f=ln(p))===p||!te(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=kr(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!te(e,p))&&(delete r[p],a=!0)}a&&mt(t.attrs,"set","")}function Ia(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(zn(c))continue;const a=e[c];let f;i&&te(i,f=Qe(c))?!r||!r.includes(f)?n[f]=a:(l||(l={}))[f]=a:Wi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=J(n),a=l||re;for(let f=0;f<r.length;f++){const p=r[f];n[p]=kr(i,c,p,a[p],t,!te(a,p))}}return o}function kr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=te(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const f=Es(i);s=a[n]=c.call(null,e),f()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===ln(n))&&(s=!0))}return s}const Jf=new WeakMap;function wa(t,e,n=!1){const s=n?Jf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!V(t)){const f=p=>{c=!0;const[g,x]=wa(p,e,!0);Oe(o,g),x&&l.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return _e(t)&&s.set(t,gn),gn;if(U(r))for(let f=0;f<r.length;f++){const p=Qe(r[f]);_l(p)&&(o[p]=re)}else if(r)for(const f in r){const p=Qe(f);if(_l(p)){const g=r[f],x=o[p]=U(g)||V(g)?{type:g}:Oe({},g),I=x.type;let k=!1,$=!0;if(U(I))for(let j=0;j<I.length;++j){const Q=I[j],ee=V(Q)&&Q.name;if(ee==="Boolean"){k=!0;break}else ee==="String"&&($=!1)}else k=V(I)&&I.name==="Boolean";x[0]=k,x[1]=$,(k||te(x,"default"))&&l.push(p)}}const a=[o,l];return _e(t)&&s.set(t,a),a}function _l(t){return t[0]!=="$"&&!zn(t)}const Sa=t=>t[0]==="_"||t==="$stable",yo=t=>U(t)?t.map(ut):[ut(t)],Zf=(t,e,n)=>{if(e._n)return e;const s=Cf((...i)=>yo(e(...i)),n);return s._c=!1,s},Ta=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Sa(i))continue;const r=t[i];if(V(r))e[i]=Zf(i,r,s);else if(r!=null){const o=yo(r);e[i]=()=>o}}},Na=(t,e)=>{const n=yo(e);t.slots.default=()=>n},Ra=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},ed=(t,e,n)=>{const s=t.slots=Ca();if(t.vnode.shapeFlag&32){const i=e._;i?(Ra(s,e,n),n&&Fc(s,"_",i,!0)):Ta(e,s)}else e&&Na(t,e)},td=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Ra(i,e,n):(r=!e.$stable,Ta(e,i)),o=e}else e&&(Na(t,e),o={default:1});if(r)for(const l in i)!Sa(l)&&o[l]==null&&delete i[l]},$e=_d;function nd(t){return sd(t)}function sd(t,e){const n=ki();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:f,parentNode:p,nextSibling:g,setScopeId:x=ht,insertStaticContent:I}=t,k=(_,m,y,w=null,C=null,E=null,O=void 0,A=null,R=!!m.dynamicChildren)=>{if(_===m)return;_&&!Wn(_,m)&&(w=Ps(_),it(_,C,E,!0),_=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:S,ref:L,shapeFlag:P}=m;switch(S){case Ui:$(_,m,y,w);break;case nn:j(_,m,y,w);break;case ar:_==null&&Q(m,y,w,O);break;case Ge:T(_,m,y,w,C,E,O,A,R);break;default:P&1?X(_,m,y,w,C,E,O,A,R):P&6?F(_,m,y,w,C,E,O,A,R):(P&64||P&128)&&S.process(_,m,y,w,C,E,O,A,R,Fn)}L!=null&&C&&Qs(L,_&&_.ref,E,m||_,!m)},$=(_,m,y,w)=>{if(_==null)s(m.el=l(m.children),y,w);else{const C=m.el=_.el;m.children!==_.children&&a(C,m.children)}},j=(_,m,y,w)=>{_==null?s(m.el=c(m.children||""),y,w):m.el=_.el},Q=(_,m,y,w)=>{[_.el,_.anchor]=I(_.children,m,y,w,_.el,_.anchor)},ee=({el:_,anchor:m},y,w)=>{let C;for(;_&&_!==m;)C=g(_),s(_,y,w),_=C;s(m,y,w)},M=({el:_,anchor:m})=>{let y;for(;_&&_!==m;)y=g(_),i(_),_=y;i(m)},X=(_,m,y,w,C,E,O,A,R)=>{m.type==="svg"?O="svg":m.type==="math"&&(O="mathml"),_==null?Xe(m,y,w,C,E,O,A,R):u(_,m,C,E,O,A,R)},Xe=(_,m,y,w,C,E,O,A)=>{let R,S;const{props:L,shapeFlag:P,transition:D,dirs:W}=_;if(R=_.el=o(_.type,E,L&&L.is,L),P&8?f(R,_.children):P&16&&h(_.children,R,null,w,C,cr(_,E),O,A),W&&jt(_,null,w,"created"),Ce(R,_,_.scopeId,O,w),L){for(const le in L)le!=="value"&&!zn(le)&&r(R,le,null,L[le],E,w);"value"in L&&r(R,"value",null,L.value,E),(S=L.onVnodeBeforeMount)&&ct(S,w,_)}W&&jt(_,null,w,"beforeMount");const Y=id(C,D);Y&&D.beforeEnter(R),s(R,m,y),((S=L&&L.onVnodeMounted)||Y||W)&&$e(()=>{S&&ct(S,w,_),Y&&D.enter(R),W&&jt(_,null,w,"mounted")},C)},Ce=(_,m,y,w,C)=>{if(y&&x(_,y),w)for(let E=0;E<w.length;E++)x(_,w[E]);if(C){let E=C.subTree;if(m===E||Ma(E.type)&&(E.ssContent===m||E.ssFallback===m)){const O=C.vnode;Ce(_,O,O.scopeId,O.slotScopeIds,C.parent)}}},h=(_,m,y,w,C,E,O,A,R=0)=>{for(let S=R;S<_.length;S++){const L=_[S]=A?Rt(_[S]):ut(_[S]);k(null,L,m,y,w,C,E,O,A)}},u=(_,m,y,w,C,E,O)=>{const A=m.el=_.el;let{patchFlag:R,dynamicChildren:S,dirs:L}=m;R|=_.patchFlag&16;const P=_.props||re,D=m.props||re;let W;if(y&&$t(y,!1),(W=D.onVnodeBeforeUpdate)&&ct(W,y,m,_),L&&jt(m,_,y,"beforeUpdate"),y&&$t(y,!0),(P.innerHTML&&D.innerHTML==null||P.textContent&&D.textContent==null)&&f(A,""),S?d(_.dynamicChildren,S,A,y,w,cr(m,C),E):O||se(_,m,A,null,y,w,cr(m,C),E,!1),R>0){if(R&16)v(A,P,D,y,C);else if(R&2&&P.class!==D.class&&r(A,"class",null,D.class,C),R&4&&r(A,"style",P.style,D.style,C),R&8){const Y=m.dynamicProps;for(let le=0;le<Y.length;le++){const ne=Y[le],Ve=P[ne],Le=D[ne];(Le!==Ve||ne==="value")&&r(A,ne,Ve,Le,C,y)}}R&1&&_.children!==m.children&&f(A,m.children)}else!O&&S==null&&v(A,P,D,y,C);((W=D.onVnodeUpdated)||L)&&$e(()=>{W&&ct(W,y,m,_),L&&jt(m,_,y,"updated")},w)},d=(_,m,y,w,C,E,O)=>{for(let A=0;A<m.length;A++){const R=_[A],S=m[A],L=R.el&&(R.type===Ge||!Wn(R,S)||R.shapeFlag&70)?p(R.el):y;k(R,S,L,null,w,C,E,O,!0)}},v=(_,m,y,w,C)=>{if(m!==y){if(m!==re)for(const E in m)!zn(E)&&!(E in y)&&r(_,E,m[E],null,C,w);for(const E in y){if(zn(E))continue;const O=y[E],A=m[E];O!==A&&E!=="value"&&r(_,E,A,O,C,w)}"value"in y&&r(_,"value",m.value,y.value,C)}},T=(_,m,y,w,C,E,O,A,R)=>{const S=m.el=_?_.el:l(""),L=m.anchor=_?_.anchor:l("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:W}=m;W&&(A=A?A.concat(W):W),_==null?(s(S,y,w),s(L,y,w),h(m.children||[],y,L,C,E,O,A,R)):P>0&&P&64&&D&&_.dynamicChildren?(d(_.dynamicChildren,D,y,C,E,O,A),(m.key!=null||C&&m===C.subTree)&&Aa(_,m,!0)):se(_,m,y,L,C,E,O,A,R)},F=(_,m,y,w,C,E,O,A,R)=>{m.slotScopeIds=A,_==null?m.shapeFlag&512?C.ctx.activate(m,y,w,O,R):H(m,y,w,C,E,O,R):pe(_,m,R)},H=(_,m,y,w,C,E,O)=>{const A=_.component=Cd(_,w,C);if(da(_)&&(A.ctx.renderer=Fn),Ed(A,!1,O),A.asyncDep){if(C&&C.registerDep(A,he,O),!_.el){const R=A.subTree=Ye(nn);j(null,R,m,y)}}else he(A,_,m,y,C,E,O)},pe=(_,m,y)=>{const w=m.component=_.component;if(dd(_,m,y))if(w.asyncDep&&!w.asyncResolved){G(w,m,y);return}else w.next=m,w.update();else m.el=_.el,w.vnode=m},he=(_,m,y,w,C,E,O)=>{const A=()=>{if(_.isMounted){let{next:P,bu:D,u:W,parent:Y,vnode:le}=_;{const ot=Oa(_);if(ot){P&&(P.el=le.el,G(_,P,O)),ot.asyncDep.then(()=>{_.isUnmounted||A()});return}}let ne=P,Ve;$t(_,!1),P?(P.el=le.el,G(_,P,O)):P=le,D&&Us(D),(Ve=P.props&&P.props.onVnodeBeforeUpdate)&&ct(Ve,Y,P,le),$t(_,!0);const Le=ml(_),rt=_.subTree;_.subTree=Le,k(rt,Le,p(rt.el),Ps(rt),_,C,E),P.el=Le.el,ne===null&&pd(_,Le.el),W&&$e(W,C),(Ve=P.props&&P.props.onVnodeUpdated)&&$e(()=>ct(Ve,Y,P,le),C)}else{let P;const{el:D,props:W}=m,{bm:Y,m:le,parent:ne,root:Ve,type:Le}=_,rt=Yn(m);$t(_,!1),Y&&Us(Y),!rt&&(P=W&&W.onVnodeBeforeMount)&&ct(P,ne,m),$t(_,!0);{Ve.ce&&Ve.ce._injectChildStyle(Le);const ot=_.subTree=ml(_);k(null,ot,y,w,_,C,E),m.el=ot.el}if(le&&$e(le,C),!rt&&(P=W&&W.onVnodeMounted)){const ot=m;$e(()=>ct(P,ne,ot),C)}(m.shapeFlag&256||ne&&Yn(ne.vnode)&&ne.vnode.shapeFlag&256)&&_.a&&$e(_.a,C),_.isMounted=!0,m=y=w=null}};_.scope.on();const R=_.effect=new jc(A);_.scope.off();const S=_.update=R.run.bind(R),L=_.job=R.runIfDirty.bind(R);L.i=_,L.id=_.uid,R.scheduler=()=>mo(L),$t(_,!0),S()},G=(_,m,y)=>{m.component=_;const w=_.vnode.props;_.vnode=m,_.next=null,Xf(_,m.props,w,y),td(_,m.children,y),Ut(),cl(_),Ht()},se=(_,m,y,w,C,E,O,A,R=!1)=>{const S=_&&_.children,L=_?_.shapeFlag:0,P=m.children,{patchFlag:D,shapeFlag:W}=m;if(D>0){if(D&128){Dn(S,P,y,w,C,E,O,A,R);return}else if(D&256){pt(S,P,y,w,C,E,O,A,R);return}}W&8?(L&16&&Mn(S,C,E),P!==S&&f(y,P)):L&16?W&16?Dn(S,P,y,w,C,E,O,A,R):Mn(S,C,E,!0):(L&8&&f(y,""),W&16&&h(P,y,w,C,E,O,A,R))},pt=(_,m,y,w,C,E,O,A,R)=>{_=_||gn,m=m||gn;const S=_.length,L=m.length,P=Math.min(S,L);let D;for(D=0;D<P;D++){const W=m[D]=R?Rt(m[D]):ut(m[D]);k(_[D],W,y,null,C,E,O,A,R)}S>L?Mn(_,C,E,!0,!1,P):h(m,y,w,C,E,O,A,R,P)},Dn=(_,m,y,w,C,E,O,A,R)=>{let S=0;const L=m.length;let P=_.length-1,D=L-1;for(;S<=P&&S<=D;){const W=_[S],Y=m[S]=R?Rt(m[S]):ut(m[S]);if(Wn(W,Y))k(W,Y,y,null,C,E,O,A,R);else break;S++}for(;S<=P&&S<=D;){const W=_[P],Y=m[D]=R?Rt(m[D]):ut(m[D]);if(Wn(W,Y))k(W,Y,y,null,C,E,O,A,R);else break;P--,D--}if(S>P){if(S<=D){const W=D+1,Y=W<L?m[W].el:w;for(;S<=D;)k(null,m[S]=R?Rt(m[S]):ut(m[S]),y,Y,C,E,O,A,R),S++}}else if(S>D)for(;S<=P;)it(_[S],C,E,!0),S++;else{const W=S,Y=S,le=new Map;for(S=Y;S<=D;S++){const je=m[S]=R?Rt(m[S]):ut(m[S]);je.key!=null&&le.set(je.key,S)}let ne,Ve=0;const Le=D-Y+1;let rt=!1,ot=0;const Ln=new Array(Le);for(S=0;S<Le;S++)Ln[S]=0;for(S=W;S<=P;S++){const je=_[S];if(Ve>=Le){it(je,C,E,!0);continue}let lt;if(je.key!=null)lt=le.get(je.key);else for(ne=Y;ne<=D;ne++)if(Ln[ne-Y]===0&&Wn(je,m[ne])){lt=ne;break}lt===void 0?it(je,C,E,!0):(Ln[lt-Y]=S+1,lt>=ot?ot=lt:rt=!0,k(je,m[lt],y,null,C,E,O,A,R),Ve++)}const sl=rt?rd(Ln):gn;for(ne=sl.length-1,S=Le-1;S>=0;S--){const je=Y+S,lt=m[je],il=je+1<L?m[je+1].el:w;Ln[S]===0?k(null,lt,y,il,C,E,O,A,R):rt&&(ne<0||S!==sl[ne]?Vt(lt,y,il,2):ne--)}}},Vt=(_,m,y,w,C=null)=>{const{el:E,type:O,transition:A,children:R,shapeFlag:S}=_;if(S&6){Vt(_.component.subTree,m,y,w);return}if(S&128){_.suspense.move(m,y,w);return}if(S&64){O.move(_,m,y,Fn);return}if(O===Ge){s(E,m,y);for(let P=0;P<R.length;P++)Vt(R[P],m,y,w);s(_.anchor,m,y);return}if(O===ar){ee(_,m,y);return}if(w!==2&&S&1&&A)if(w===0)A.beforeEnter(E),s(E,m,y),$e(()=>A.enter(E),C);else{const{leave:P,delayLeave:D,afterLeave:W}=A,Y=()=>s(E,m,y),le=()=>{P(E,()=>{Y(),W&&W()})};D?D(E,Y,le):le()}else s(E,m,y)},it=(_,m,y,w=!1,C=!1)=>{const{type:E,props:O,ref:A,children:R,dynamicChildren:S,shapeFlag:L,patchFlag:P,dirs:D,cacheIndex:W}=_;if(P===-2&&(C=!1),A!=null&&Qs(A,null,y,_,!0),W!=null&&(m.renderCache[W]=void 0),L&256){m.ctx.deactivate(_);return}const Y=L&1&&D,le=!Yn(_);let ne;if(le&&(ne=O&&O.onVnodeBeforeUnmount)&&ct(ne,m,_),L&6)Rh(_.component,y,w);else{if(L&128){_.suspense.unmount(y,w);return}Y&&jt(_,null,m,"beforeUnmount"),L&64?_.type.remove(_,m,y,Fn,w):S&&!S.hasOnce&&(E!==Ge||P>0&&P&64)?Mn(S,m,y,!1,!0):(E===Ge&&P&384||!C&&L&16)&&Mn(R,m,y),w&&tl(_)}(le&&(ne=O&&O.onVnodeUnmounted)||Y)&&$e(()=>{ne&&ct(ne,m,_),Y&&jt(_,null,m,"unmounted")},y)},tl=_=>{const{type:m,el:y,anchor:w,transition:C}=_;if(m===Ge){Nh(y,w);return}if(m===ar){M(_);return}const E=()=>{i(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(_.shapeFlag&1&&C&&!C.persisted){const{leave:O,delayLeave:A}=C,R=()=>O(y,E);A?A(_.el,E,R):R()}else E()},Nh=(_,m)=>{let y;for(;_!==m;)y=g(_),i(_),_=y;i(m)},Rh=(_,m,y)=>{const{bum:w,scope:C,job:E,subTree:O,um:A,m:R,a:S}=_;gl(R),gl(S),w&&Us(w),C.stop(),E&&(E.flags|=8,it(O,_,m,y)),A&&$e(A,m),$e(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Mn=(_,m,y,w=!1,C=!1,E=0)=>{for(let O=E;O<_.length;O++)it(_[O],m,y,w,C)},Ps=_=>{if(_.shapeFlag&6)return Ps(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const m=g(_.anchor||_.el),y=m&&m[If];return y?g(y):m};let tr=!1;const nl=(_,m,y)=>{_==null?m._vnode&&it(m._vnode,null,null,!0):k(m._vnode||null,_,m,null,null,null,y),m._vnode=_,tr||(tr=!0,cl(),aa(),tr=!1)},Fn={p:k,um:it,m:Vt,r:tl,mt:H,mc:h,pc:se,pbc:d,n:Ps,o:t};return{render:nl,hydrate:void 0,createApp:Kf(nl)}}function cr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $t({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function id(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Aa(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Rt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Aa(o,l)),l.type===Ui&&(l.el=o.el)}}function rd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Oa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Oa(e)}function gl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const od=Symbol.for("v-scx"),ld=()=>Xn(od);function Zt(t,e,n){return Pa(t,e,n)}function Pa(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,l=Oe({},n),c=e&&s||!e&&r!=="post";let a;if(us){if(r==="sync"){const x=ld();a=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=ht,x.resume=ht,x.pause=ht,x}}const f=Te;l.call=(x,I,k)=>ft(x,f,I,k);let p=!1;r==="post"?l.scheduler=x=>{$e(x,f&&f.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(x,I)=>{I?x():mo(x)}),l.augmentJob=x=>{e&&(x.flags|=4),p&&(x.flags|=2,f&&(x.id=f.uid,x.i=f))};const g=xf(t,e,l);return us&&(a?a.push(g):c&&g()),g}function cd(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?ka(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=Es(this),l=Pa(i,r.bind(s),n);return o(),l}function ka(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ad=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qe(e)}Modifiers`]||t[`${ln(e)}Modifiers`];function ud(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&ad(s,e.slice(7));o&&(o.trim&&(i=n.map(f=>xe(f)?f.trim():f)),o.number&&(i=n.map(wr)));let l,c=s[l=nr(e)]||s[l=nr(Qe(e))];!c&&r&&(c=s[l=nr(ln(e))]),c&&ft(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ft(a,t,6,i)}}function Da(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const c=a=>{const f=Da(a,e,!0);f&&(l=!0,Oe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(_e(t)&&s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):Oe(o,r),_e(t)&&s.set(t,o),o)}function Wi(t,e){return!t||!Ri(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,ln(e))||te(t,e))}function ml(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:f,props:p,data:g,setupState:x,ctx:I,inheritAttrs:k}=t,$=Ys(t);let j,Q;try{if(n.shapeFlag&4){const M=i||s,X=M;j=ut(a.call(X,M,f,p,x,g,I)),Q=l}else{const M=e;j=ut(M.length>1?M(p,{attrs:l,slots:o,emit:c}):M(p,null)),Q=e.props?l:hd(l)}}catch(M){Jn.length=0,Fi(M,t,1),j=Ye(nn)}let ee=j;if(Q&&k!==!1){const M=Object.keys(Q),{shapeFlag:X}=ee;M.length&&X&7&&(r&&M.some(io)&&(Q=fd(Q,r)),ee=En(ee,Q,!1,!0))}return n.dirs&&(ee=En(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&xo(ee,n.transition),j=ee,Ys($),j}const hd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ri(n))&&((e||(e={}))[n]=t[n]);return e},fd=(t,e)=>{const n={};for(const s in t)(!io(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function dd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?xl(s,o,a):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==s[g]&&!Wi(a,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?xl(s,o,a):!0:!!o;return!1}function xl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Wi(n,r))return!0}return!1}function pd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ma=t=>t.__isSuspense;function _d(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):vf(t)}const Ge=Symbol.for("v-fgt"),Ui=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),Jn=[];let ze=null;function ie(t=!1){Jn.push(ze=t?null:[])}function gd(){Jn.pop(),ze=Jn[Jn.length-1]||null}let as=1;function yl(t,e=!1){as+=t,t<0&&ze&&e&&(ze.hasOnce=!0)}function Fa(t){return t.dynamicChildren=as>0?ze||gn:null,gd(),as>0&&ze&&ze.push(t),t}function fe(t,e,n,s,i,r){return Fa(b(t,e,n,s,i,r,!0))}function La(t,e,n,s,i){return Fa(Ye(t,e,n,s,i,!0))}function Ba(t){return t?t.__v_isVNode===!0:!1}function Wn(t,e){return t.type===e.type&&t.key===e.key}const Wa=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||me(t)||V(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wa(e),ref:e&&Hs(e),scopeId:ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Be};return l?(bo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),as>0&&!o&&ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ze.push(c),c}const Ye=md;function md(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ma)&&(t=nn),Ba(t)){const l=En(t,e,!0);return n&&bo(l,n),as>0&&!r&&ze&&(l.shapeFlag&6?ze[ze.indexOf(t)]=l:ze.push(l)),l.patchFlag=-2,l}if(Nd(t)&&(t=t.__vccOpts),e){e=xd(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=xn(l)),_e(c)&&(_o(c)&&!U(c)&&(c=Oe({},c)),e.style=lo(c))}const o=xe(t)?1:Ma(t)?128:wf(t)?64:_e(t)?4:V(t)?2:0;return b(t,e,n,s,i,o,r,!0)}function xd(t){return t?_o(t)||Ea(t)?Oe({},t):t:null}function En(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?yd(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wa(a),ref:e&&e.ref?n&&r?U(r)?r.concat(Hs(e)):[r,Hs(e)]:Hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&xo(f,c.clone(f)),f}function ye(t=" ",e=0){return Ye(Ui,null,t,e)}function ke(t="",e=!1){return e?(ie(),La(nn,null,t)):Ye(nn,null,t)}function ut(t){return t==null||typeof t=="boolean"?Ye(nn):U(t)?Ye(Ge,null,t.slice()):Ba(t)?Rt(t):Ye(Ui,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:En(t)}function bo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),bo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ea(e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function yd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=xn([e.class,s.class]));else if(i==="style")e.style=lo([e.style,s.style]);else if(Ri(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){ft(t,e,7,[n,s])}const bd=ba();let vd=0;function Cd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||bd,r={uid:vd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wa(s,i),emitsOptions:Da(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ud.bind(null,r),t.ce&&t.ce(r),r}let Te=null,Js,Dr;{const t=ki(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Js=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),Dr=e("__VUE_SSR_SETTERS__",n=>us=n)}const Es=t=>{const e=Te;return Js(t),t.scope.on(),()=>{t.scope.off(),Js(e)}},bl=()=>{Te&&Te.scope.off(),Js(null)};function Ua(t){return t.vnode.shapeFlag&4}let us=!1;function Ed(t,e=!1,n=!1){e&&Dr(e);const{props:s,children:i}=t.vnode,r=Ua(t);Qf(t,s,r,e),ed(t,i,n);const o=r?Id(t,e):void 0;return e&&Dr(!1),o}function Id(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Uf);const{setup:s}=n;if(s){Ut();const i=t.setupContext=s.length>1?Sd(t):null,r=Es(t),o=Cs(s,t,0,[t.props,i]),l=kc(o);if(Ht(),r(),(l||t.sp)&&!Yn(t)&&fa(t),l){if(o.then(bl,bl),e)return o.then(c=>{vl(t,c)}).catch(c=>{Fi(c,t,0)});t.asyncDep=o}else vl(t,o)}else Ha(t)}function vl(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=ra(e)),Ha(t)}function Ha(t,e,n){const s=t.type;t.render||(t.render=s.render||ht);{const i=Es(t);Ut();try{Hf(t)}finally{Ht(),i()}}}const wd={get(t,e){return Ne(t,"get",""),t[e]}};function Sd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wd),slots:t.slots,emit:t.emit,expose:e}}function Hi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ra(go(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qn)return Qn[n](t)},has(e,n){return n in e||n in Qn}})):t.proxy}function Td(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Nd(t){return V(t)&&"__vccOpts"in t}const Va=(t,e)=>gf(t,e,us),Rd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mr;const Cl=typeof window<"u"&&window.trustedTypes;if(Cl)try{Mr=Cl.createPolicy("vue",{createHTML:t=>t})}catch{}const ja=Mr?t=>Mr.createHTML(t):t=>t,Ad="http://www.w3.org/2000/svg",Od="http://www.w3.org/1998/Math/MathML",gt=typeof document<"u"?document:null,El=gt&&gt.createElement("template"),Pd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?gt.createElementNS(Ad,t):e==="mathml"?gt.createElementNS(Od,t):n?gt.createElement(t,{is:n}):gt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>gt.createTextNode(t),createComment:t=>gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{El.innerHTML=ja(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=El.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kd=Symbol("_vtc");function Dd(t,e,n){const s=t[kd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Il=Symbol("_vod"),Md=Symbol("_vsh"),Fd=Symbol(""),Ld=/(^|;)\s*display\s*:/;function Bd(t,e,n){const s=t.style,i=xe(n);let r=!1;if(n&&!i){if(e)if(xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Vs(s,l,"")}else for(const o in e)n[o]==null&&Vs(s,o,"");for(const o in n)o==="display"&&(r=!0),Vs(s,o,n[o])}else if(i){if(e!==n){const o=s[Fd];o&&(n+=";"+o),s.cssText=n,r=Ld.test(n)}}else e&&t.removeAttribute("style");Il in t&&(t[Il]=r?s.display:"",t[Md]&&(s.display="none"))}const wl=/\s*!important$/;function Vs(t,e,n){if(U(n))n.forEach(s=>Vs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Wd(t,e);wl.test(n)?t.setProperty(ln(s),n.replace(wl,""),"important"):t[s]=n}}const Sl=["Webkit","Moz","ms"],ur={};function Wd(t,e){const n=ur[e];if(n)return n;let s=Qe(e);if(s!=="filter"&&s in t)return ur[e]=s;s=Pi(s);for(let i=0;i<Sl.length;i++){const r=Sl[i]+s;if(r in t)return ur[e]=r}return e}const Tl="http://www.w3.org/1999/xlink";function Nl(t,e,n,s,i,r=Uh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tl,e.slice(6,e.length)):t.setAttributeNS(Tl,e,n):n==null||r&&!Lc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Wt(n)?String(n):n)}function Rl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ja(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function pn(t,e,n,s){t.addEventListener(e,n,s)}function Ud(t,e,n,s){t.removeEventListener(e,n,s)}const Al=Symbol("_vei");function Hd(t,e,n,s,i=null){const r=t[Al]||(t[Al]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Vd(e);if(s){const a=r[e]=Gd(s,i);pn(t,l,a,c)}else o&&(Ud(t,l,o,c),r[e]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function Vd(t){let e;if(Ol.test(t)){e={};let s;for(;s=t.match(Ol);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let hr=0;const jd=Promise.resolve(),$d=()=>hr||(jd.then(()=>hr=0),hr=Date.now());function Gd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(zd(s,n.value),e,5,[s])};return n.value=t,n.attached=$d(),n}function zd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Pl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Kd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Dd(t,s,o):e==="style"?Bd(t,n,s):Ri(e)?io(e)||Hd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qd(t,e,s,o))?(Rl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(s))?Rl(t,Qe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Nl(t,e,s,o))};function qd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pl(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Pl(e)&&xe(n)?!1:e in t}const kl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Us(e,n):e};function Yd(t){t.target.composing=!0}function Dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fr=Symbol("_assign"),Qd={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[fr]=kl(i);const r=s||i.props&&i.props.type==="number";pn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=wr(l)),t[fr](l)}),n&&pn(t,"change",()=>{t.value=t.value.trim()}),e||(pn(t,"compositionstart",Yd),pn(t,"compositionend",Dl),pn(t,"change",Dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[fr]=kl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?wr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Xd=Oe({patchProp:Kd},Pd);let Ml;function Jd(){return Ml||(Ml=nd(Xd))}const Zd=(...t)=>{const e=Jd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=tp(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,ep(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ep(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tp(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $a;const Vi=t=>$a=t,Ga=Symbol();function Fr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zn||(Zn={}));function np(){const t=Hc(!0),e=t.run(()=>Je({}));let n=[],s=[];const i=go({install(r){Vi(i),i._a=r,r.provide(Ga,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const za=()=>{};function Fl(t,e,n,s=za){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Vc()&&Hh(i),i}function un(t,...e){t.slice().forEach(n=>{n(...e)})}const sp=t=>t(),Ll=Symbol(),dr=Symbol();function Lr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Fr(i)&&Fr(s)&&t.hasOwnProperty(n)&&!me(s)&&!Ot(s)?t[n]=Lr(i,s):t[n]=s}return t}const ip=Symbol();function rp(t){return!Fr(t)||!t.hasOwnProperty(ip)}const{assign:Tt}=Object;function op(t){return!!(me(t)&&t.effect)}function lp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const f=ff(n.state.value[t]);return Tt(f,r,Object.keys(o||{}).reduce((p,g)=>(p[g]=go(Va(()=>{Vi(n);const x=n._s.get(t);return o[g].call(x,x)})),p),{}))}return c=Ka(t,a,e,n,s,!0),c}function Ka(t,e,n={},s,i,r){let o;const l=Tt({actions:{}},n),c={deep:!0};let a,f,p=[],g=[],x;const I=s.state.value[t];!r&&!I&&(s.state.value[t]={}),Je({});let k;function $(h){let u;a=f=!1,typeof h=="function"?(h(s.state.value[t]),u={type:Zn.patchFunction,storeId:t,events:x}):(Lr(s.state.value[t],h),u={type:Zn.patchObject,payload:h,storeId:t,events:x});const d=k=Symbol();la().then(()=>{k===d&&(a=!0)}),f=!0,un(p,u,s.state.value[t])}const j=r?function(){const{state:u}=n,d=u?u():{};this.$patch(v=>{Tt(v,d)})}:za;function Q(){o.stop(),p=[],g=[],s._s.delete(t)}const ee=(h,u="")=>{if(Ll in h)return h[dr]=u,h;const d=function(){Vi(s);const v=Array.from(arguments),T=[],F=[];function H(G){T.push(G)}function pe(G){F.push(G)}un(g,{args:v,name:d[dr],store:X,after:H,onError:pe});let he;try{he=h.apply(this&&this.$id===t?this:X,v)}catch(G){throw un(F,G),G}return he instanceof Promise?he.then(G=>(un(T,G),G)).catch(G=>(un(F,G),Promise.reject(G))):(un(T,he),he)};return d[Ll]=!0,d[dr]=u,d},M={_p:s,$id:t,$onAction:Fl.bind(null,g),$patch:$,$reset:j,$subscribe(h,u={}){const d=Fl(p,h,u.detached,()=>v()),v=o.run(()=>Zt(()=>s.state.value[t],T=>{(u.flush==="sync"?f:a)&&h({storeId:t,type:Zn.direct,events:x},T)},Tt({},c,u)));return d},$dispose:Q},X=Mi(M);s._s.set(t,X);const Ce=(s._a&&s._a.runWithContext||sp)(()=>s._e.run(()=>(o=Hc()).run(()=>e({action:ee}))));for(const h in Ce){const u=Ce[h];if(me(u)&&!op(u)||Ot(u))r||(I&&rp(u)&&(me(u)?u.value=I[h]:Lr(u,I[h])),s.state.value[t][h]=u);else if(typeof u=="function"){const d=ee(u,h);Ce[h]=d,l.actions[h]=u}}return Tt(X,Ce),Tt(J(X),Ce),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:h=>{$(u=>{Tt(u,h)})}}),s._p.forEach(h=>{Tt(X,o.run(()=>h({store:X,app:s._a,pinia:s,options:l})))}),I&&r&&n.hydrate&&n.hydrate(X.$state,I),a=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function cp(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const c=Yf();return o=o||(c?Xn(Ga,null):null),o&&Vi(o),o=$a,o._s.has(t)||(i?Ka(t,e,s,o):lp(t,s,o)),o._s.get(t)}return r.$id=t,r}const ap=()=>{};var Bl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Rn(e)},Rn=function(t){return new Error("Firebase Database ("+qa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},up=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},vo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|a>>6,x=a&63;c||(x=64,o||(g=64)),s.push(n[f],n[p],n[g],n[x])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ya(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):up(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||p==null)throw new hp;const g=r<<2|l>>4;if(s.push(g),a!==64){const x=l<<4&240|a>>2;if(s.push(x),p!==64){const I=a<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qa=function(t){const e=Ya(t);return vo.encodeByteArray(e,!0)},Zs=function(t){return Qa(t).replace(/\./g,"")},Br=function(t){try{return vo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){return Xa(void 0,t)}function Xa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dp(n)||(t[n]=Xa(t[n],e[n]));return t}function dp(t){return t!=="__proto__"}/**
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
 */function pp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _p=()=>pp().__FIREBASE_DEFAULTS__,gp=()=>{if(typeof process>"u"||typeof Bl>"u")return;const t=Bl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Br(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return ap()||_p()||gp()||mp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xp=t=>{var e,n;return(n=(e=Ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yp=t=>{const e=xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Za=()=>{var t;return(t=Ja())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zs(JSON.stringify(n)),Zs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vp())}function Cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ep(){return qa.NODE_ADMIN===!0}function Ip(){try{return typeof indexedDB=="object"}catch{return!1}}function wp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="FirebaseError";class Is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Sp,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tu.prototype.create)}}class tu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Tp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Is(i,l,s)}}function Tp(t,e){return t.replace(Np,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Np=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=hs(Br(r[0])||""),n=hs(Br(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Rp=function(t){const e=nu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ap=function(t){const e=nu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function In(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ul(r)&&Ul(o)){if(!ti(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ul(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)s[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,f;for(let p=0;p<80;p++){p<40?p<20?(a=l^r&(o^l),f=1518500249):(a=r^o^l,f=1859775393):p<60?(a=r&o|l&(r|o),f=2400959708):(a=r^o^l,f=3395469782);const g=(i<<5|i>>>27)+a+c+f+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Co(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function An(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zt="[DEFAULT]";/**
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
 */class Dp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ji;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fp(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mp(t){return t===zt?void 0:t}function Fp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Bp={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Wp=ae.INFO,Up={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Hp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Up[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class su{constructor(e){this.name=e,this._logLevel=Wp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Vp=(t,e)=>e.some(n=>t instanceof n);let Hl,Vl;function jp(){return Hl||(Hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $p(){return Vl||(Vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iu=new WeakMap,Wr=new WeakMap,ru=new WeakMap,pr=new WeakMap,Eo=new WeakMap;function Gp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iu.set(n,t)}).catch(()=>{}),Eo.set(e,t),e}function zp(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let Ur={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ru.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kp(t){Ur=t(Ur)}function qp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_r(this),e,...n);return ru.set(s,e.sort?e.sort():[e]),Pt(s)}:$p().includes(t)?function(...e){return t.apply(_r(this),e),Pt(iu.get(this))}:function(...e){return Pt(t.apply(_r(this),e))}}function Yp(t){return typeof t=="function"?qp(t):(t instanceof IDBTransaction&&zp(t),Vp(t,jp())?new Proxy(t,Ur):t)}function Pt(t){if(t instanceof IDBRequest)return Gp(t);if(pr.has(t))return pr.get(t);const e=Yp(t);return e!==t&&(pr.set(t,e),Eo.set(e,t)),e}const _r=t=>Eo.get(t);function Qp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Xp=["get","getKey","getAll","getAllKeys","count"],Jp=["put","add","delete","clear"],gr=new Map;function jl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gr.get(e))return gr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Jp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Xp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return gr.set(e,r),r}Kp(t=>({...t,get:(e,n,s)=>jl(e,n)||t.get(e,n,s),has:(e,n)=>!!jl(e,n)||t.has(e,n)}));/**
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
 */class Zp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(e_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function e_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hr="@firebase/app",$l="0.11.2";/**
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
 */const vt=new su("@firebase/app"),t_="@firebase/app-compat",n_="@firebase/analytics-compat",s_="@firebase/analytics",i_="@firebase/app-check-compat",r_="@firebase/app-check",o_="@firebase/auth",l_="@firebase/auth-compat",c_="@firebase/database",a_="@firebase/data-connect",u_="@firebase/database-compat",h_="@firebase/functions",f_="@firebase/functions-compat",d_="@firebase/installations",p_="@firebase/installations-compat",__="@firebase/messaging",g_="@firebase/messaging-compat",m_="@firebase/performance",x_="@firebase/performance-compat",y_="@firebase/remote-config",b_="@firebase/remote-config-compat",v_="@firebase/storage",C_="@firebase/storage-compat",E_="@firebase/firestore",I_="@firebase/vertexai",w_="@firebase/firestore-compat",S_="firebase",T_="11.4.0";/**
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
 */const Vr="[DEFAULT]",N_={[Hr]:"fire-core",[t_]:"fire-core-compat",[s_]:"fire-analytics",[n_]:"fire-analytics-compat",[r_]:"fire-app-check",[i_]:"fire-app-check-compat",[o_]:"fire-auth",[l_]:"fire-auth-compat",[c_]:"fire-rtdb",[a_]:"fire-data-connect",[u_]:"fire-rtdb-compat",[h_]:"fire-fn",[f_]:"fire-fn-compat",[d_]:"fire-iid",[p_]:"fire-iid-compat",[__]:"fire-fcm",[g_]:"fire-fcm-compat",[m_]:"fire-perf",[x_]:"fire-perf-compat",[y_]:"fire-rc",[b_]:"fire-rc-compat",[v_]:"fire-gcs",[C_]:"fire-gcs-compat",[E_]:"fire-fst",[w_]:"fire-fst-compat",[I_]:"fire-vertex","fire-js":"fire-js",[S_]:"fire-js-all"};/**
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
 */const ni=new Map,R_=new Map,jr=new Map;function Gl(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(jr.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;jr.set(e,t);for(const n of ni.values())Gl(n,t);for(const n of R_.values())Gl(n,t);return!0}function A_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function O_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const P_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new tu("app","Firebase",P_);/**
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
 */class k_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const D_=T_;function ou(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(n||(n=Za()),!n)throw kt.create("no-options");const r=ni.get(i);if(r){if(ti(n,r.options)&&ti(s,r.config))return r;throw kt.create("duplicate-app",{appName:i})}const o=new Lp(i);for(const c of jr.values())o.addComponent(c);const l=new k_(n,s,o);return ni.set(i,l),l}function M_(t=Vr){const e=ni.get(t);if(!e&&t===Vr&&Za())return ou();if(!e)throw kt.create("no-app",{appName:t});return e}function bn(t,e,n){var s;let i=(s=N_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(l.join(" "));return}si(new fs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const F_="firebase-heartbeat-database",L_=1,ds="firebase-heartbeat-store";let mr=null;function lu(){return mr||(mr=Qp(F_,L_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ds)}catch(n){console.warn(n)}}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),mr}async function B_(t){try{const n=(await lu()).transaction(ds),s=await n.objectStore(ds).get(cu(t));return await n.done,s}catch(e){if(e instanceof Is)vt.warn(e.message);else{const n=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function zl(t,e){try{const s=(await lu()).transaction(ds,"readwrite");await s.objectStore(ds).put(e,cu(t)),await s.done}catch(n){if(n instanceof Is)vt.warn(n.message);else{const s=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(s.message)}}}function cu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const W_=1024,U_=30;class H_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>U_){const o=$_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kl(),{heartbeatsToSend:s,unsentEntries:i}=V_(this._heartbeatsCache.heartbeats),r=Zs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return vt.warn(n),""}}}function Kl(){return new Date().toISOString().substring(0,10)}function V_(t,e=W_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ql(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ql(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class j_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ip()?wp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await B_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ql(t){return Zs(JSON.stringify({version:2,heartbeats:t})).length}function $_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function G_(t){si(new fs("platform-logger",e=>new Zp(e),"PRIVATE")),si(new fs("heartbeat",e=>new H_(e),"PRIVATE")),bn(Hr,$l,t),bn(Hr,$l,"esm2017"),bn("fire-js","")}G_("");var z_="firebase",K_="11.4.0";/**
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
 */bn(z_,K_,"app");var Yl={};const Ql="@firebase/database",Xl="1.0.13";/**
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
 */let au="";function q_(t){au=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y_(e)}}catch{}return new Q_},Yt=uu("localStorage"),X_=uu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new su("@firebase/database"),J_=function(){let t=1;return function(){return t++}}(),hu=function(t){const e=kp(t),n=new Pp;n.update(e);const s=n.digest();return vo.encodeByteArray(s)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ws.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let es=null,Jl=!0;const Z_=function(t,e){N(!0,"Can't turn on custom loggers persistently."),vn.logLevel=ae.VERBOSE,es=vn.log.bind(vn)},Ae=function(...t){if(Jl===!0&&(Jl=!1,es===null&&X_.get("logging_enabled")===!0&&Z_()),es){const e=ws.apply(null,t);es(e)}},Ss=function(t){return function(...e){Ae(t,...e)}},$r=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);vn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw vn.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+ws(...t);vn.warn(e)},eg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wn="[MIN_NAME]",sn="[MAX_NAME]",On=function(t,e){if(t===e)return 0;if(t===wn||e===sn)return-1;if(e===wn||t===sn)return 1;{const n=Zl(t),s=Zl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ng=function(t,e){return t===e?0:t<e?-1:1},Un=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},Io=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=Io(t[e[s]]);return n+="}",n},du=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pu=function(t){N(!fu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const f=a.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},sg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ig=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const og=new RegExp("^-?(0*)\\d{1,10}$"),lg=-2147483648,cg=2147483647,Zl=function(t){if(og.test(t)){const e=Number(t);if(e>=lg&&e<=cg)return e}return null},Pn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},ag=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ug{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,O_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class js{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}js.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="5",_u="v",gu="s",mu="r",xu="f",yu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bu="ls",vu="p",Gr="ac",Cu="websocket",Eu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,a=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wu(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let s;if(e===Cu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Eu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fg(t)&&(n.ns=t.namespace);const i=[];return He(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={},yr={};function So(t){const e=t.toString();return xr[e]||(xr[e]=new dg),xr[e]}function pg(t,e){const n=t.toString();return yr[n]||(yr[n]=e()),yr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Pn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="start",gg="close",mg="pLPCommand",xg="pRTLPCB",Su="id",Tu="pw",Nu="ser",yg="cb",bg="seg",vg="ts",Cg="d",Eg="dframe",Ru=1870,Au=30,Ig=Ru-Au,wg=25e3,Sg=3e4;class _n{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ss(e),this.stats_=So(n),this.urlFn=c=>(this.appCheckToken&&(c[Gr]=this.appCheckToken),wu(n,Eu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _g(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sg)),tg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new To((...r)=>{const[o,l,c,a,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ec)this.id=l,this.password=c;else if(o===gg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ec]="t",s[Nu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_u]=wo,this.transportSessionId&&(s[gu]=this.transportSessionId),this.lastSessionId&&(s[bu]=this.lastSessionId),this.applicationId&&(s[vu]=this.applicationId),this.appCheckToken&&(s[Gr]=this.appCheckToken),typeof location<"u"&&location.hostname&&yu.test(location.hostname)&&(s[mu]=xu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sg()&&!ig()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qa(n),i=du(s,Ig);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Eg]="t",s[Su]=e,s[Tu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class To{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=J_(),window[mg+this.uniqueCallbackIdentifier]=e,window[xg+this.uniqueCallbackIdentifier]=n,this.myIFrame=To.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Su]=this.myID,e[Tu]=this.myPW,e[Nu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Au+s.length<=Ru;){const o=this.pendingSegs.shift();s=s+"&"+bg+i+"="+o.seg+"&"+vg+i+"="+o.ts+"&"+Cg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(wg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=16384,Ng=45e3;let ii=null;typeof MozWebSocket<"u"?ii=MozWebSocket:typeof WebSocket<"u"&&(ii=WebSocket);class Ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ss(this.connId),this.stats_=So(n),this.connURL=Ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_u]=wo,typeof location<"u"&&location.hostname&&yu.test(location.hostname)&&(o[mu]=xu),n&&(o[gu]=n),s&&(o[bu]=s),i&&(o[Gr]=i),r&&(o[vu]=r),wu(e,Cu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{let s;Ep(),this.mySock=new ii(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ii!==null&&!Ze.forceDisallow_}static previouslyFailed(){return Yt.isInMemoryStorage||Yt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=hs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=du(n,Tg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ng))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{static get ALL_TRANSPORTS(){return[_n,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ze&&Ze.isAvailable();let s=n&&!Ze.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ze];else{const i=this.transports_=[];for(const r of ps.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=6e4,Ag=5e3,Og=10*1024,Pg=100*1024,br="t",tc="d",kg="s",nc="r",Dg="e",sc="o",ic="a",rc="n",oc="p",Mg="h";class Fg{constructor(e,n,s,i,r,o,l,c,a,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ss("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Og?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(br in e){const n=e[br];n===ic?this.upgradeIfSecondaryHealthy_():n===nc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Un("t",e),s=Un("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:oc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ic,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Un("t",e),s=Un("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Un(br,e);if(tc in e){const s=e[tc];if(n===Mg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kg?this.onConnectionShutdown_(s):n===nc?this.onReset_(s):n===Dg?$r("Server Error: "+s):n===sc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$r("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wo!==s&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ag))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:oc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pu{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Pu{static getInstance(){return new ri}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=32,cc=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new oe("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ft(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function ku(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Lg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Du(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Fe(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function No(t,e){if(Ft(t)!==Ft(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ft(t)>Ft(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Bg{constructor(e,n){this.errorPrefix_=n,this.parts_=Du(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$i(this.parts_[s]);Fu(this)}}function Wg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$i(e),Fu(t)}function Ug(t){const e=t.parts_.pop();t.byteLength_-=$i(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fu(t){if(t.byteLength_>cc)throw new Error(t.errorPrefix_+"has a key path longer than "+cc+" bytes ("+t.byteLength_+").");if(t.parts_.length>lc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lc+") or object contains a cycle "+Kt(t))}function Kt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Pu{static getInstance(){return new Ro}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=1e3,Hg=60*5*1e3,ac=30*1e3,Vg=1.3,jg=3e4,$g="server_kill",uc=3;class bt extends Ou{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=bt.nextPersistentConnectionId_++,this.log_=Ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hn,this.maxReconnectDelay_=Hg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;bt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const s=In(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ap(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ac)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Rp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$r("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jg&&(this.reconnectDelay_=Hn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Vg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(p){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:a};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Fg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{Ue(x+" ("+this.repoInfo_.toString()+")"),this.interrupt($g)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ue(p),c())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wl(this.interruptReasons_)&&(this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Io(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uc&&(this.reconnectDelay_=ac,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+au.replace(/\./g,"-")]=1,eu()?e["framework.cordova"]=1:Cp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ri.getInstance().currentlyOnline();return Wl(this.interruptReasons_)&&e}}bt.nextPersistentConnectionId_=0;bt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(wn,e),i=new K(wn,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class Lu extends Gi{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,n){return On(e.name,n.name)}isDefinedOn(e){throw Rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(sn,Fs)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Fs)}toString(){return".key"}}const Cn=new Lu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class Gg{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ls(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ls(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new Gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){return On(t.name,e.name)}function Ao(t,e){return On(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr;function Kg(t){zr=t}const Bu=function(t){return typeof t=="number"?"number:"+pu(t):"string:"+t},Wu=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else N(t===zr||t.isEmpty(),"priority of unexpected type.");N(t===zr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;class Ie{static set __childrenNodeConstructor(e){hc=e}static get __childrenNodeConstructor(){return hc}constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(N(s!==".priority"||Ft(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pu(this.value_):e+=this.value_,this.lazyHash_=hu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ie.VALUE_TYPE_ORDER.indexOf(n),r=Ie.VALUE_TYPE_ORDER.indexOf(s);return N(i>=0,"Unknown leaf type: "+n),N(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu,Hu;function qg(t){Uu=t}function Yg(t){Hu=t}class Qg extends Gi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?On(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(sn,new Ie("[PRIORITY-POST]",Hu))}makePost(e,n){const s=Uu(e);return new K(n,new Ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new Qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=Math.log(2);class Jg{constructor(e){const n=r=>parseInt(Math.log(r)/Xg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oi=function(t,e,n,s){t.sort(e);const i=function(c,a){const f=a-c;let p,g;if(f===0)return null;if(f===1)return p=t[c],g=n?n(p):p,new we(g,p.node,we.BLACK,null,null);{const x=parseInt(f/2,10)+c,I=i(c,x),k=i(x+1,a);return p=t[x],g=n?n(p):p,new we(g,p.node,we.BLACK,I,k)}},r=function(c){let a=null,f=null,p=t.length;const g=function(I,k){const $=p-I,j=p;p-=I;const Q=i($+1,j),ee=t[$],M=n?n(ee):ee;x(new we(M,ee.node,k,null,Q))},x=function(I){a?(a.left=I,a=I):(f=I,a=I)};for(let I=0;I<c.count;++I){const k=c.nextBitIsOne(),$=Math.pow(2,c.count-(I+1));k?g($,we.BLACK):(g($,we.BLACK),g($,we.RED))}return f},o=new Jg(t.length),l=r(o);return new We(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr;const hn={};class yt{static get Default(){return N(hn&&ge,"ChildrenNode.ts has not been loaded"),vr=vr||new yt({".priority":hn},{".priority":ge}),vr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=In(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=oi(s,e.getCompare()):l=hn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new yt(f,a)}addToIndexes(e,n){const s=ei(this.indexes_,(i,r)=>{const o=In(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),i===hn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(K.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),oi(l,o.getCompare())}else return hn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new K(e.name,l))),c.insert(e,e.node)}});return new yt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ei(this.indexes_,i=>{if(i===hn)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new yt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class B{static get EMPTY_NODE(){return Vn||(Vn=new B(new We(Ao),null,yt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Wu(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vn:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Vn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{N(z(e)!==".priority"||Ft(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bu(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zg extends B{constructor(){super(new We(Ao),B.EMPTY_NODE,yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ts=new Zg;Object.defineProperties(K,{MIN:{value:new K(wn,B.EMPTY_NODE)},MAX:{value:new K(sn,Ts)}});Lu.__EMPTY_NODE=B.EMPTY_NODE;Ie.__childrenNodeConstructor=B;Kg(Ts);Yg(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=!0;function Se(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,Se(e))}if(!(t instanceof Array)&&em){const n=[];let s=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Se(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new K(o,c)))}}),n.length===0)return B.EMPTY_NODE;const r=oi(n,zg,o=>o.name,Ao);if(s){const o=oi(n,ge.getCompare());return new B(r,Se(e),new yt({".priority":o},{".priority":ge}))}else return new B(r,Se(e),yt.Default)}else{let n=B.EMPTY_NODE;return He(t,(s,i)=>{if(wt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}qg(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Gi{constructor(e){super(),this.indexPath_=e,N(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?On(e.name,n.name):r}makePost(e,n){const s=Se(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new K(sn,e)}toString(){return Du(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends Gi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?On(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Se(e);return new K(n,s)}toString(){return".value"}}const sm=new nm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return{type:"value",snapshotNode:t}}function Sn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function im(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(_s(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Sn(n,s)):o.trackChildChange(gs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ge,(i,r)=>{n.hasChild(i)||s.trackChildChange(_s(i,r))}),n.isLeafNode()||n.forEachChild(ge,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(gs(i,r,o))}else s.trackChildChange(Sn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.indexedFilter_=new Oo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,x)=>p(x,g)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const c=new K(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(n)){const p=l.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,a,this.reverse_);for(;g!=null&&(g.name===n||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const x=g==null?1:o(g,c);if(f&&!s.isEmpty()&&x>=0)return r!=null&&r.trackChildChange(gs(n,s,p)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(_s(n,p));const k=l.updateImmediateChild(n,B.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(Sn(g.name,g.node)),k.updateImmediateChild(g.name,g.node)):k}}else return s.isEmpty()?e:f&&o(a,c)>=0?(r!=null&&(r.trackChildChange(_s(a.name,a.node)),r.trackChildChange(Sn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wn}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Po;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function om(t){return t.loadsAllData()?new Oo(t.getIndex()):t.hasLimit()?new rm(t):new ms(t)}function fc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===sm?n="$value":t.index_===Cn?n="$key":(N(t.index_ instanceof tm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Ou{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ss("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=li.getListenId_(e,s),l={};this.listens_[o]=l;const c=fc(e._queryParams);this.restRequest_(r+".json",c,(a,f)=>{let p=f;if(a===404&&(p=null,a=null),a===null&&this.onDataUpdate_(r,p,!1,s),In(this.listens_,o)===l){let g;a?a===401?g="permission_denied":g="rest_error:"+a:g="ok",i(g,null)}})}unlisten(e,n){const s=li.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fc(e._queryParams),s=e._path.toString(),i=new ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Op(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=hs(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return{value:null,children:new Map}}function ju(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,ci());const i=t.children.get(s);e=ue(e),ju(i,e,n)}}function Kr(t,e,n){t.value!==null?n(e,t.value):cm(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Kr(i,r,n)})}function cm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=10*1e3,um=30*1e3,hm=5*60*1e3;class fm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new am(e);const s=pc+(um-pc)*Math.random();ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*hm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function $u(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ko(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Do(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tt.ACK_USER_WRITE,this.source=$u()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new ai(Z(),n,this.revert)}}else return N(z(this.path)===e,"operationForChild called for unrelated child."),new ai(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new xs(this.source,Z()):new xs(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tt.OVERWRITE}operationForChild(e){return q(this.path)?new rn(this.source,Z(),this.snap.getImmediateChild(e)):new rn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new rn(this.source,Z(),n.value):new ys(this.source,Z(),n)}else return N(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ys(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(im(o.childName,o.snapshotNode))}),jn(t,i,"child_removed",e,s,n),jn(t,i,"child_added",e,s,n),jn(t,i,"child_moved",r,s,n),jn(t,i,"child_changed",e,s,n),jn(t,i,"value",e,s,n),i}function jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>gm(t,l,c)),o.forEach(l=>{const c=_m(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function _m(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gm(t,e,n){if(e.childName==null||n.childName==null)throw Rn("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e){return{eventCache:t,serverCache:e}}function ns(t,e,n,s){return zi(new Lt(e,n,s),t.serverCache)}function Gu(t,e,n,s){return zi(t.eventCache,new Lt(e,n,s))}function ui(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;const mm=()=>(Cr||(Cr=new We(ng)),Cr);class de{static fromObject(e){let n=new de(null);return He(e,(s,i)=>{n=n.set(new oe(s),i)}),n}constructor(e,n=mm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:ve(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new de(null)}}set(e,n){if(q(e))return new de(n,this.children);{const s=z(e),r=(this.children.get(s)||new de(null)).set(ue(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new de(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),ve(n,i),s):new de(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new de(null))}}function ss(t,e,n){if(q(e))return new st(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new st(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new st(r)}}}function _c(t,e,n){let s=t;return He(n,(i,r)=>{s=ss(s,ve(e,i),r)}),s}function gc(t,e){if(q(e))return st.empty();{const n=t.writeTree_.setTree(e,new de(null));return new st(n)}}function qr(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function mc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function Dt(t,e){if(q(e))return t;{const n=cn(t,e);return n!=null?new st(new de(n)):new st(t.writeTree_.subtree(e))}}function Yr(t){return t.writeTree_.isEmpty()}function Tn(t,e){return zu(Z(),t.writeTree_,e)}function zu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=zu(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t,e){return Qu(e,t)}function xm(t,e,n,s,i){N(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ss(t.visibleWrites,e,n)),t.lastWriteId=s}function ym(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function bm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&vm(l,s.path)?i=!1:et(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Cm(t),!0;if(s.snap)t.visibleWrites=gc(t.visibleWrites,s.path);else{const l=s.children;He(l,c=>{t.visibleWrites=gc(t.visibleWrites,ve(s.path,c))})}return!0}else return!1}function vm(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(ve(t.path,n),e))return!0;return!1}function Cm(t){t.visibleWrites=Ku(t.allWrites,Em,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Em(t){return t.visible}function Ku(t,e,n){let s=st.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=Fe(n,o),s=ss(s,l,r.snap)):et(o,n)&&(l=Fe(o,n),s=ss(s,Z(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=Fe(n,o),s=_c(s,l,r.children);else if(et(o,n))if(l=Fe(o,n),q(l))s=_c(s,Z(),r.children);else{const c=In(r.children,z(l));if(c){const a=c.getChild(ue(l));s=ss(s,Z(),a)}}}else throw Rn("WriteRecord should have .snap or .children")}}return s}function qu(t,e,n,s,i){if(!s&&!i){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=Dt(t.visibleWrites,e);if(Yr(o))return n;if(n==null&&!qr(o,Z()))return null;{const l=n||B.EMPTY_NODE;return Tn(o,l)}}}else{const r=Dt(t.visibleWrites,e);if(!i&&Yr(r))return n;if(!i&&n==null&&!qr(r,Z()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(et(a.path,e)||et(e,a.path))},l=Ku(t.allWrites,o,e),c=n||B.EMPTY_NODE;return Tn(l,c)}}}function Im(t,e,n){let s=B.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Dt(t.visibleWrites,e);return n.forEachChild(ge,(o,l)=>{const c=Tn(Dt(r,new oe(o)),l);s=s.updateImmediateChild(o,c)}),mc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Dt(t.visibleWrites,e);return mc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function wm(t,e,n,s,i){N(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(qr(t.visibleWrites,r))return null;{const o=Dt(t.visibleWrites,r);return Yr(o)?i.getChild(n):Tn(o,i.getChild(n))}}function Sm(t,e,n,s){const i=ve(e,n),r=cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Dt(t.visibleWrites,i);return Tn(o,s.getNode().getImmediateChild(n))}else return null}function Tm(t,e){return cn(t.visibleWrites,e)}function Nm(t,e,n,s,i,r,o){let l;const c=Dt(t.visibleWrites,e),a=cn(c,Z());if(a!=null)l=a;else if(n!=null)l=Tn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let x=g.getNext();for(;x&&f.length<i;)p(x,s)!==0&&f.push(x),x=g.getNext();return f}else return[]}function Rm(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function hi(t,e,n,s){return qu(t.writeTree,t.treePath,e,n,s)}function Mo(t,e){return Im(t.writeTree,t.treePath,e)}function xc(t,e,n,s){return wm(t.writeTree,t.treePath,e,n,s)}function fi(t,e){return Tm(t.writeTree,ve(t.treePath,e))}function Am(t,e,n,s,i,r){return Nm(t.writeTree,t.treePath,e,n,s,i,r)}function Fo(t,e,n){return Sm(t.writeTree,t.treePath,e,n)}function Yu(t,e){return Qu(ve(t.treePath,e),t.writeTree)}function Qu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,gs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_s(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Sn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,gs(s,e.snapshotNode,i.oldSnap));else throw Rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xu=new Pm;class Lo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Lt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Am(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){return{filter:t}}function Dm(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Mm(t,e,n,s,i){const r=new Om;let o,l;if(n.type===tt.OVERWRITE){const a=n;a.source.fromUser?o=Qr(t,e,a.path,a.snap,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!q(a.path),o=di(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===tt.MERGE){const a=n;a.source.fromUser?o=Lm(t,e,a.path,a.children,s,i,r):(N(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Xr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===tt.ACK_USER_WRITE){const a=n;a.revert?o=Um(t,e,a.path,s,i,r):o=Bm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===tt.LISTEN_COMPLETE)o=Wm(t,e,n.path,s,r);else throw Rn("Unknown operation type: "+n.type);const c=r.getChanges();return Fm(e,o,c),{viewCache:o,changes:c}}function Fm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ui(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Vu(ui(e)))}}function Ju(t,e,n,s,i,r){const o=e.eventCache;if(fi(s,n)!=null)return e;{let l,c;if(q(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=on(e),f=a instanceof B?a:B.EMPTY_NODE,p=Mo(s,f);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const a=hi(s,on(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=z(n);if(a===".priority"){N(Ft(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=xc(s,n,f,c);p!=null?l=t.filter.updatePriority(f,p):l=o.getNode()}else{const f=ue(n);let p;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const g=xc(s,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(a).updateChild(f,g):p=o.getNode().getImmediateChild(a)}else p=Fo(s,a,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),a,p,f,i,r):l=o.getNode()}}return ns(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function di(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const f=o?t.filter:t.filter.getIndexedFilter();if(q(n))a=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const x=c.getNode().updateChild(n,s);a=f.updateFullNode(c.getNode(),x,null)}else{const x=z(n);if(!c.isCompleteForPath(n)&&Ft(n)>1)return e;const I=ue(n),$=c.getNode().getImmediateChild(x).updateChild(I,s);x===".priority"?a=f.updatePriority(c.getNode(),$):a=f.updateChild(c.getNode(),x,$,I,Xu,null)}const p=Gu(e,a,c.isFullyInitialized()||q(n),f.filtersNodes()),g=new Lo(i,p,r);return Ju(t,p,n,i,g,l)}function Qr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const f=new Lo(i,e,r);if(q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ns(e,a,!0,t.filter.filtersNodes());else{const p=z(n);if(p===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ns(e,a,l.isFullyInitialized(),l.isFiltered());else{const g=ue(n),x=l.getNode().getImmediateChild(p);let I;if(q(g))I=s;else{const k=f.getCompleteChild(p);k!=null?ku(g)===".priority"&&k.getChild(Mu(g)).isEmpty()?I=k:I=k.updateChild(g,s):I=B.EMPTY_NODE}if(x.equals(I))c=e;else{const k=t.filter.updateChild(l.getNode(),p,I,g,f,o);c=ns(e,k,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function yc(t,e){return t.eventCache.isCompleteForChild(e)}function Lm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const f=ve(n,c);yc(e,z(f))&&(l=Qr(t,l,f,a,i,r,o))}),s.foreach((c,a)=>{const f=ve(n,c);yc(e,z(f))||(l=Qr(t,l,f,a,i,r,o))}),l}function bc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;q(n)?a=s:a=new de(null).setTree(n,s);const f=e.serverCache.getNode();return a.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),I=bc(t,x,g);c=di(t,c,new oe(p),I,i,r,o,l)}}),a.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!x){const I=e.serverCache.getNode().getImmediateChild(p),k=bc(t,I,g);c=di(t,c,new oe(p),k,i,r,o,l)}}),c}function Bm(t,e,n,s,i,r,o){if(fi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return di(t,e,n,c.getNode().getChild(n),i,r,l,o);if(q(n)){let a=new de(null);return c.getNode().forEachChild(Cn,(f,p)=>{a=a.set(new oe(f),p)}),Xr(t,e,n,a,i,r,l,o)}else return e}else{let a=new de(null);return s.foreach((f,p)=>{const g=ve(n,f);c.isCompleteForPath(g)&&(a=a.set(f,c.getNode().getChild(g)))}),Xr(t,e,n,a,i,r,l,o)}}function Wm(t,e,n,s,i){const r=e.serverCache,o=Gu(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Ju(t,o,n,s,Xu,i)}function Um(t,e,n,s,i,r){let o;if(fi(s,n)!=null)return e;{const l=new Lo(s,e,i),c=e.eventCache.getNode();let a;if(q(n)||z(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=hi(s,on(e));else{const p=e.serverCache.getNode();N(p instanceof B,"serverChildren would be complete if leaf node"),f=Mo(s,p)}f=f,a=t.filter.updateFullNode(c,f,r)}else{const f=z(n);let p=Fo(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?a=t.filter.updateChild(c,f,p,ue(n),l,r):e.eventCache.getNode().hasChild(f)?a=t.filter.updateChild(c,f,B.EMPTY_NODE,ue(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hi(s,on(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||fi(s,Z())!=null,ns(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Oo(s.getIndex()),r=om(s);this.processor_=km(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),f=new Lt(c,o.isFullyInitialized(),i.filtersNodes()),p=new Lt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=zi(p,f),this.eventGenerator_=new dm(this.query_)}get query(){return this.query_}}function Vm(t){return t.viewCache_.serverCache.getNode()}function jm(t){return ui(t.viewCache_)}function $m(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function vc(t){return t.eventRegistrations_.length===0}function Gm(t,e){t.eventRegistrations_.push(e)}function Cc(t,e,n){const s=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ec(t,e,n,s){e.type===tt.MERGE&&e.source.queryId!==null&&(N(on(t.viewCache_),"We should always have a full cache before handling merges"),N(ui(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Mm(t.processor_,i,e,n,s);return Dm(t.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function zm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(r,o)=>{s.push(Sn(r,o))}),n.isFullyInitialized()&&s.push(Vu(n.getNode())),Zu(t,s,n.getNode(),e)}function Zu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return pm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class eh{constructor(){this.views=new Map}}function Km(t){N(!pi,"__referenceConstructor has already been defined"),pi=t}function qm(){return N(pi,"Reference.ts has not been loaded"),pi}function Ym(t){return t.views.size===0}function Bo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return N(r!=null,"SyncTree gave us an op for an invalid query."),Ec(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ec(o,e,n,s));return r}}function th(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=hi(n,i?s:null),c=!1;l?c=!0:s instanceof B?(l=Mo(n,s),c=!1):(l=B.EMPTY_NODE,c=!1);const a=zi(new Lt(l,c,!1),new Lt(s,i,!1));return new Hm(e,a)}return o}function Qm(t,e,n,s,i,r){const o=th(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Gm(o,n),zm(o,n)}function Xm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Bt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Cc(a,n,s)),vc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Cc(c,n,s)),vc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Bt(t)&&r.push(new(qm())(e._repo,e._path)),{removed:r,events:o}}function nh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mt(t,e){let n=null;for(const s of t.views.values())n=n||$m(s,e);return n}function sh(t,e){if(e._queryParams.loadsAllData())return qi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ih(t,e){return sh(t,e)!=null}function Bt(t){return qi(t)!=null}function qi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;function Jm(t){N(!_i,"__referenceConstructor has already been defined"),_i=t}function Zm(){return N(_i,"Reference.ts has not been loaded"),_i}let e0=1;class Ic{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Rm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rh(t,e,n,s,i){return xm(t.pendingWriteTree_,e,n,s,i),i?Rs(t,new rn($u(),e,n)):[]}function Qt(t,e,n=!1){const s=ym(t.pendingWriteTree_,e);if(bm(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Z(),!0):He(s.children,o=>{r=r.set(new oe(o),!0)}),Rs(t,new ai(s.path,r,n))}else return[]}function Ns(t,e,n){return Rs(t,new rn(ko(),e,n))}function t0(t,e,n){const s=de.fromObject(n);return Rs(t,new ys(ko(),e,s))}function n0(t,e){return Rs(t,new xs(ko(),e))}function s0(t,e,n){const s=Uo(t,n);if(s){const i=Ho(s),r=i.path,o=i.queryId,l=Fe(r,e),c=new xs(Do(o),l);return Vo(t,r,c)}else return[]}function gi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ih(o,e))){const c=Xm(o,e,n,s);Ym(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const f=a.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(r,(g,x)=>Bt(x));if(f&&!p){const g=t.syncPointTree_.subtree(r);if(!g.isEmpty()){const x=o0(g);for(let I=0;I<x.length;++I){const k=x[I],$=k.query,j=ah(t,k);t.listenProvider_.startListening(is($),bs(t,$),j.hashFn,j.onComplete)}}}!p&&a.length>0&&!s&&(f?t.listenProvider_.stopListening(is(e),null):a.forEach(g=>{const x=t.queryToTagMap.get(Yi(g));t.listenProvider_.stopListening(is(g),x)}))}l0(t,a)}return l}function oh(t,e,n,s){const i=Uo(t,s);if(i!=null){const r=Ho(i),o=r.path,l=r.queryId,c=Fe(o,e),a=new rn(Do(l),c,n);return Vo(t,o,a)}else return[]}function i0(t,e,n,s){const i=Uo(t,s);if(i){const r=Ho(i),o=r.path,l=r.queryId,c=Fe(o,e),a=de.fromObject(n),f=new ys(Do(l),c,a);return Vo(t,o,f)}else return[]}function Jr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,x)=>{const I=Fe(g,i);r=r||Mt(x,I),o=o||Bt(x)});let l=t.syncPointTree_.get(i);l?(o=o||Bt(l),r=r||Mt(l,Z())):(l=new eh,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((x,I)=>{const k=Mt(I,Z());k&&(r=r.updateImmediateChild(x,k))}));const a=ih(l,e);if(!a&&!e._queryParams.loadsAllData()){const g=Yi(e);N(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const x=c0();t.queryToTagMap.set(g,x),t.tagToQueryMap.set(x,g)}const f=Ki(t.pendingWriteTree_,i);let p=Qm(l,e,n,f,r,c);if(!a&&!o&&!s){const g=sh(l,e);p=p.concat(a0(t,e,g))}return p}function Wo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Fe(o,e),a=Mt(l,c);if(a)return a});return qu(i,e,r,n,!0)}function r0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,f)=>{const p=Fe(a,n);s=s||Mt(f,p)});let i=t.syncPointTree_.get(n);i?s=s||Mt(i,Z()):(i=new eh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Lt(s,!0,!1):null,l=Ki(t.pendingWriteTree_,e._path),c=th(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return jm(c)}function Rs(t,e){return lh(e,t.syncPointTree_,null,Ki(t.pendingWriteTree_,Z()))}function lh(t,e,n,s){if(q(t.path))return ch(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=Mt(i,Z()));let r=[];const o=z(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,f=Yu(s,o);r=r.concat(lh(l,c,a,f))}return i&&(r=r.concat(Bo(i,t,s,n))),r}}function ch(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=Mt(i,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Yu(s,o),f=t.operationForChild(o);f&&(r=r.concat(ch(f,l,c,a)))}),i&&(r=r.concat(Bo(i,t,s,n))),r}function ah(t,e){const n=e.query,s=bs(t,n);return{hashFn:()=>(Vm(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?s0(t,n._path,s):n0(t,n._path);{const r=rg(i,n);return gi(t,n,null,r)}}}}function bs(t,e){const n=Yi(e);return t.queryToTagMap.get(n)}function Yi(t){return t._path.toString()+"$"+t._queryIdentifier}function Uo(t,e){return t.tagToQueryMap.get(e)}function Ho(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Vo(t,e,n){const s=t.syncPointTree_.get(e);N(s,"Missing sync point for query tag that we're tracking");const i=Ki(t.pendingWriteTree_,e);return Bo(s,n,i,null)}function o0(t){return t.fold((e,n,s)=>{if(n&&Bt(n))return[qi(n)];{let i=[];return n&&(i=nh(n)),He(s,(r,o)=>{i=i.concat(o)}),i}})}function is(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Zm())(t._repo,t._path):t}function l0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Yi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function c0(){return e0++}function a0(t,e,n){const s=e._path,i=bs(t,e),r=ah(t,n),o=t.listenProvider_.startListening(is(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)N(!Bt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,f,p)=>{if(!q(a)&&f&&Bt(f))return[qi(f).query];{let g=[];return f&&(g=g.concat(nh(f).map(x=>x.query))),He(p,(x,I)=>{g=g.concat(I)}),g}});for(let a=0;a<c.length;++a){const f=c[a];t.listenProvider_.stopListening(is(f),bs(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jo(n)}node(){return this.node_}}class $o{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new $o(this.syncTree_,n)}node(){return Wo(this.syncTree_,this.path_)}}const u0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wc=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return h0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return f0(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},h0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},f0=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&N(!1,"Unexpected increment value: "+s);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},d0=function(t,e,n,s){return Go(e,new $o(n,t),s)},uh=function(t,e,n){return Go(t,new jo(e),n)};function Go(t,e,n){const s=t.getPriority().val(),i=wc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=wc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ie(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ie(i))),o.forEachChild(ge,(l,c)=>{const a=Go(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ko(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=z(n);for(;i!==null;){const r=In(s.node.children,i)||{children:{},childCount:0};s=new zo(i,s,r),n=ue(n),i=z(n)}return s}function kn(t){return t.node.value}function hh(t,e){t.node.value=e,Zr(t)}function fh(t){return t.node.childCount>0}function p0(t){return kn(t)===void 0&&!fh(t)}function Qi(t,e){He(t.node.children,(n,s)=>{e(new zo(n,t,s))})}function dh(t,e,n,s){n&&e(t),Qi(t,i=>{dh(i,e,!0)})}function _0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function As(t){return new oe(t.parent===null?t.name:As(t.parent)+"/"+t.name)}function Zr(t){t.parent!==null&&g0(t.parent,t.name,t)}function g0(t,e,n){const s=p0(n),i=wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Zr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Zr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=/[\[\].#$\/\u0000-\u001F\u007F]/,x0=/[\[\].#$\u0000-\u001F\u007F]/,Er=10*1024*1024,ph=function(t){return typeof t=="string"&&t.length!==0&&!m0.test(t)},_h=function(t){return typeof t=="string"&&t.length!==0&&!x0.test(t)},y0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_h(t)},b0=function(t,e,n,s){qo(Co(t,"value"),e,n)},qo=function(t,e,n){const s=n instanceof oe?new Bg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kt(s)+" with contents = "+e.toString());if(fu(e))throw new Error(t+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>Er/3&&$i(e)>Er)throw new Error(t+"contains a string greater than "+Er+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(He(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ph(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wg(s,o),qo(t,l,s),Ug(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},gh=function(t,e,n,s){if(!_h(n))throw new Error(Co(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},v0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gh(t,e,n)},mh=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},C0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!y0(n))throw new Error(Co(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!No(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function xh(t,e,n){Yo(t,n),yh(t,s=>No(s,e))}function dt(t,e,n){Yo(t,n),yh(t,s=>et(s,e)||et(e,s))}function yh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(I0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function I0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();es&&Ae("event: "+n.toString()),Pn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="repo_interrupt",S0=25;class T0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new E0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ci(),this.transactionQueueTree_=new zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N0(t,e,n){if(t.stats_=So(t.repoInfo_),t.forceRestClient_||ag())t.server_=new li(t.repoInfo_,(s,i,r,o)=>{Sc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new bt(t.repoInfo_,e,(s,i,r,o)=>{Sc(t,s,i,r,o)},s=>{Tc(t,s)},s=>{A0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=pg(t.repoInfo_,()=>new fm(t.stats_,t.server_)),t.infoData_=new lm,t.infoSyncTree_=new Ic({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ns(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Xo(t,"connected",!1),t.serverSyncTree_=new Ic({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);dt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function R0(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qo(t){return u0({timestamp:R0(t)})}function Sc(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ei(n,a=>Se(a));o=i0(t.serverSyncTree_,r,c,i)}else{const c=Se(n);o=oh(t.serverSyncTree_,r,c,i)}else if(s){const c=ei(n,a=>Se(a));o=t0(t.serverSyncTree_,r,c)}else{const c=Se(n);o=Ns(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ji(t,r)),dt(t.eventQueue_,l,o)}function Tc(t,e){Xo(t,"connected",e),e===!1&&k0(t)}function A0(t,e){He(e,(n,s)=>{Xo(t,n,s)})}function Xo(t,e,n){const s=new oe("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=Ns(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function bh(t){return t.nextWriteId_++}function O0(t,e,n){const s=r0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());Jr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ns(t.serverSyncTree_,e._path,r);else{const l=bs(t.serverSyncTree_,e);o=oh(t.serverSyncTree_,e._path,r,l)}return dt(t.eventQueue_,e._path,o),gi(t.serverSyncTree_,e,n,null,!0),r},i=>(Xi(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function P0(t,e,n,s,i){Xi(t,"set",{path:e.toString(),value:n,priority:s});const r=Qo(t),o=Se(n,s),l=Wo(t.serverSyncTree_,e),c=uh(o,l,r),a=bh(t),f=rh(t.serverSyncTree_,e,c,a,!0);Yo(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(g,x)=>{const I=g==="ok";I||Ue("set at "+e+" failed: "+g);const k=Qt(t.serverSyncTree_,a,!I);dt(t.eventQueue_,e,k),F0(t,i,g,x)});const p=wh(t,e);Ji(t,p),dt(t.eventQueue_,p,[])}function k0(t){Xi(t,"onDisconnectEvents");const e=Qo(t),n=ci();Kr(t.onDisconnect_,Z(),(i,r)=>{const o=d0(i,r,t.serverSyncTree_,e);ju(n,i,o)});let s=[];Kr(n,Z(),(i,r)=>{s=s.concat(Ns(t.serverSyncTree_,i,r));const o=wh(t,i);Ji(t,o)}),t.onDisconnect_=ci(),dt(t.eventQueue_,Z(),s)}function D0(t,e,n){let s;z(e._path)===".info"?s=Jr(t.infoSyncTree_,e,n):s=Jr(t.serverSyncTree_,e,n),xh(t.eventQueue_,e._path,s)}function Nc(t,e,n){let s;z(e._path)===".info"?s=gi(t.infoSyncTree_,e,n):s=gi(t.serverSyncTree_,e,n),xh(t.eventQueue_,e._path,s)}function M0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(w0)}function Xi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function F0(t,e,n,s){e&&Pn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function vh(t,e,n){return Wo(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Jo(t,e=t.transactionQueueTree_){if(e||Zi(t,e),kn(e)){const n=Eh(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&L0(t,As(e),n)}else fh(e)&&Qi(e,n=>{Jo(t,n)})}function L0(t,e,n){const s=n.map(a=>a.currentWriteId),i=vh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const f=n[a];N(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Fe(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Xi(t,"transaction put response",{path:c.toString(),status:a});let f=[];if(a==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(Qt(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Zi(t,Ko(t.transactionQueueTree_,e)),Jo(t,t.transactionQueueTree_),dt(t.eventQueue_,e,f);for(let g=0;g<p.length;g++)Pn(p[g])}else{if(a==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ue("transaction at "+c.toString()+" failed: "+a);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=a}Ji(t,e)}},o)}function Ji(t,e){const n=Ch(t,e),s=As(n),i=Eh(t,n);return B0(t,i,s),s}function B0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Fe(n,c.path);let f=!1,p;if(N(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=S0)f=!0,p="maxretry",i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0));else{const g=vh(t,c.path,o);c.currentInputSnapshot=g;const x=e[l].update(g.val());if(x!==void 0){qo("transaction failed: Data returned ",x,c.path);let I=Se(x);typeof x=="object"&&x!=null&&wt(x,".priority")||(I=I.updatePriority(g.getPriority()));const $=c.currentWriteId,j=Qo(t),Q=uh(I,g,j);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=Q,c.currentWriteId=bh(t),o.splice(o.indexOf($),1),i=i.concat(rh(t.serverSyncTree_,c.path,Q,c.currentWriteId,c.applyLocally)),i=i.concat(Qt(t.serverSyncTree_,$,!0))}else f=!0,p="nodata",i=i.concat(Qt(t.serverSyncTree_,c.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Zi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Pn(s[l]);Jo(t,t.transactionQueueTree_)}function Ch(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&kn(s)===void 0;)s=Ko(s,n),e=ue(e),n=z(e);return s}function Eh(t,e){const n=[];return Ih(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ih(t,e,n){const s=kn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qi(e,i=>{Ih(t,i,n)})}function Zi(t,e){const n=kn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,hh(e,n.length>0?n:void 0)}Qi(e,s=>{Zi(t,s)})}function wh(t,e){const n=As(Ch(t,e)),s=Ko(t.transactionQueueTree_,e);return _0(s,i=>{Ir(t,i)}),Ir(t,s),dh(s,i=>{Ir(t,i)}),n}function Ir(t,e){const n=kn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hh(e,void 0):n.length=r+1,dt(t.eventQueue_,As(e),i);for(let o=0;o<s.length;o++)Pn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function U0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const Rc=function(t,e){const n=H0(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Iu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},H0=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(i=W0(t.substring(f,p)));const g=U0(t.substring(Math.min(t.length,p)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const x=e.slice(0,a);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class j0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:ku(this._path)}get ref(){return new St(this._repo,this._path)}get _queryIdentifier(){const e=dc(this._queryParams),n=Io(e);return n==="{}"?"default":n}get _queryObject(){return dc(this._queryParams)}isEqual(e){if(e=An(e),!(e instanceof Zo))return!1;const n=this._repo===e._repo,s=No(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lg(this._path)}}class St extends Zo{constructor(e,n){super(e,n,new Po,!1)}get parent(){const e=Mu(this._path);return e===null?null:new St(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=eo(this.ref,e);return new vs(this._node.getChild(n),s,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new vs(i,eo(this.ref,s),ge)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bs(t,e){return t=An(t),t._checkNotDeleted("ref"),e!==void 0?eo(t._root,e):t._root}function eo(t,e){return t=An(t),z(t._path)===null?v0("child","path",e):gh("child","path",e),new St(t._repo,ve(t._path,e))}function $0(t){return mh("remove",t._path),Th(t,null)}function Th(t,e){t=An(t),mh("set",t._path),b0("set",e,t._path);const n=new ji;return P0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function G0(t){t=An(t);const e=new Sh(()=>{}),n=new er(e);return O0(t._repo,t,n).then(s=>new vs(s,new St(t._repo,t._path),t._queryParams.getIndex()))}class er{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new V0("value",this,new vs(e.snapshotNode,new St(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new j0(this,e,n):null}matches(e){return e instanceof er?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function z0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(f,p)=>{Nc(t._repo,t,l),c(f,p)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Sh(n,r||void 0),l=new er(o);return D0(t._repo,t,l),()=>Nc(t._repo,t,l)}function K0(t,e,n,s){return z0(t,"value",e,n,s)}Km(St);Jm(St);/**
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
 */const q0="FIREBASE_DATABASE_EMULATOR_HOST",to={};let Y0=!1;function Q0(t,e,n,s){t.repoInfo_=new Iu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function X0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Rc(r,i),l=o.repoInfo,c;typeof process<"u"&&Yl&&(c=Yl[q0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Rc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new hg(t.name,t.options,e);C0("Invalid Firebase Database URL",o),q(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Z0(l,t,a,new ug(t,n));return new ex(f,t)}function J0(t,e){const n=to[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),M0(t),delete n[t.key]}function Z0(t,e,n,s){let i=to[e.name];i||(i={},to[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new T0(t,Y0,n,s),i[t.toURLString()]=r,r}class ex{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new St(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function tx(t=M_(),e){const n=A_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=yp("database");s&&nx(n,...s)}return n}function nx(t,e,n,s={}){t=An(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ti(s,r.repoInfo_.emulatorOptions))return;Ct("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new js(js.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:bp(s.mockUserToken,t.app.options.projectId);o=new js(l)}Q0(r,i,s,o)}/**
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
 */function sx(t){q_(D_),si(new fs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return X0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bn(Ql,Xl,t),bn(Ql,Xl,"esm2017")}bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};sx();function mi(t,e){const n=xi();return mi=function(s,i){return s=s-291,n[s]},mi(t,e)}const fn=mi;(function(t,e){const n=mi,s=t();for(;;)try{if(parseInt(n(299))/1+parseInt(n(300))/2+-parseInt(n(305))/3*(-parseInt(n(297))/4)+parseInt(n(294))/5+parseInt(n(302))/6*(parseInt(n(301))/7)+parseInt(n(295))/8+-parseInt(n(304))/9===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(xi,826759);function xi(){const t=["25834fqervx","810132CoFLpE","301WwJDXV","34698mJLxPO","G-3RRDNZ9ME5","12664071WhaBgA","572685QuCmkA","iamwait.firebasestorage.app","1:720775593565:web:1a263bf6a87ecfea3817b4","https://iamwait-default-rtdb.europe-west1.firebasedatabase.app","1342340KyunGY","2650928SUTyql","AIzaSyAjPiSVzEEN6JywDXNxXaV9QC8OrB5Oebw","20gwqpIX","iamwait"];return xi=function(){return t},xi()}const ix={apiKey:fn(296),authDomain:"iamwait.firebaseapp.com",databaseURL:fn(293),projectId:fn(298),storageBucket:fn(291),messagingSenderId:"720775593565",appId:fn(292),measurementId:fn(303)},rx=ou(ix),Ws=tx(rx),qt=Nn;(function(t,e){const n=Nn,s=t();for(;;)try{if(-parseInt(n(455))/1*(parseInt(n(477))/2)+parseInt(n(470))/3+-parseInt(n(468))/4*(parseInt(n(445))/5)+parseInt(n(461))/6+parseInt(n(450))/7*(parseInt(n(465))/8)+parseInt(n(458))/9+parseInt(n(469))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(yi,557458);function Nn(t,e){const n=yi();return Nn=function(s,i){return s=s-443,n[s]},Nn(t,e)}function yi(){const t=["stringify","YIGEO","########### ########## Данные ","error","rdydV","Камень ножницы бумага","4PRDzkJ","then","bdeEM","Крестики нолики","282065FCwhIt","cQGmq","kvYjB","TdzWd","pyAod","154gurKMS","IStXD","lookField","val","exists","252729KVgRcA","log","SziOt","7864884yatEGe"," удалены!",">>> Данные по ","5024178jEVRUB"," : данные не найдены"," = ","talNY","19624NIbbRu"," на прослушке","Морской бой","68Dgxbva","1598020tOtiSl","290790XCWPIj"];return yi=function(){return t},yi()}const el=cp("fbStore2",{state:()=>({gameId:"",gameNames:{g1:qt(476),g2:qt(444),g3:qt(467)},myId:0,myName:"",opponentId:0,opponentName:"",lookField:null,stage:-1,playNumber:0}),actions:{async getField(t){const e=qt,n={kvYjB:function(i,r){return i(r)},SziOt:function(i,r){return i+r},TdzWd:function(i,r){return i(r)},bdeEM:e(462),talNY:function(i,r,o){return i(r,o)}},s=n[e(464)](Bs,Ws,t);return n[e(447)](G0,s)[e(478)](i=>{const r=e;if(i[r(454)]()){const o=i[r(453)]();return n[r(447)]($n,n.SziOt(r(460)+t+r(463),JSON[r(471)](o))),o}else n[r(448)]($n,n[r(457)](t,n[r(443)]))})},async setField(t,e){const n={rdydV:function(i,r){return i+r},KnitD:" -  данные записаны",WtlXG:"Ошибка записи данных: ",WJOBD:function(i,r,o){return i(r,o)}},s=n.WJOBD(Bs,Ws,t);return n.WJOBD(Th,s,e).then(()=>{$n(n[Nn(475)](t,n.KnitD))}).catch(i=>{console[Nn(474)](n.WtlXG,i)})},async onValue(t){const e=qt,n={CWpOc:function(i,r){return i(r)},IStXD:function(i,r,o){return i(r,o)}},s=Bs(Ws,t);n[e(451)](K0,s,i=>{const r=e;n.CWpOc($n,r(473)+t+r(466)),this[r(452)]=i[r(453)]()})},async removeField(t){const e=qt,n={pyAod:function(i,r){return i(r)},YIGEO:function(i,r,o){return i(r,o)},cQGmq:function(i,r){return i(r)}};console[e(456)](t);const s=n[e(472)](Bs,Ws,t);n[e(446)]($0,s)[e(478)](()=>{const i=e;n[i(449)]($n,"Данные "+t+i(459))})}}}),$n=t=>console[qt(456)]("%c "+t,"color: darkgreen"),Ac=vi;function bi(){const t=["OeHWr","rHThX","log"," Необходимо будет попросить другого участника найти этот miniapp по имени: ","770370oiFMaq","55wgIeRi","rhxpf"," Камень ножницы бумага ","gYwyh","NoUcp","div","yxwOT","KzqEY"," Начальная страница ","861594pRxaLN","jxdwl","XtZJj"," Крестики нолики ","Выберите игру","ksozL","Sydnp","610536ffAUCQ","iAmWaitingForYou","button","5129887eVBENr","NwVLM","4643640LHviQE","QBapr","386290cDfNGm","gameChanged","jidQY","31097528pUXSko"];return bi=function(){return t},bi()}(function(t,e){const n=vi,s=t();for(;;)try{if(-parseInt(n(380))/1+-parseInt(n(356))/2+-parseInt(n(378))/3+parseInt(n(373))/4+parseInt(n(357))/5*(-parseInt(n(366))/6)+parseInt(n(376))/7+parseInt(n(383))/8===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(bi,873722);function vi(t,e){const n=bi();return vi=function(s,i){return s=s-354,n[s]},vi(t,e)}const ox=Li({__name:"ListGames",emits:[Ac(381)],setup(t,{emit:e}){const n=Ac,s={xSOPJ:function(l,c){return l+c},dgcMm:function(l,c){return l(c)},KzqEY:"gameChanged",OeHWr:function(l,c,a,f){return l(c,a,f)},NoUcp:n(362),gYwyh:function(l,c){return l(c)},jidQY:n(365),yxwOT:function(l,c,a,f,p){return l(c,a,f,p)},rHThX:n(370),Sydnp:n(375),NwVLM:n(359),QBapr:function(l){return l()},rhxpf:function(l,c,a,f,p){return l(c,a,f,p)},XtZJj:n(374),ksozL:function(l,c,a,f,p){return l(c,a,f,p)},jxdwl:function(l){return l()}},i=s[n(367)](el),r=e;function o(l){const c=n;console[c(354)](l),i.gameId=s.xSOPJ("g",l),s.dgcMm(r,s[c(364)])}return(l,c)=>{const a=n;return ie(),s[a(384)](fe,s[a(361)],null,[c[3]||(c[3]=s[a(360)](ye,s[a(382)])),c[4]||(c[4]=s.yxwOT(b,"h3",null,s[a(385)],-1)),c[5]||(c[5]=s.yxwOT(b,"br",null,null,-1)),s[a(384)](b,s.Sydnp,{onClick:c[0]||(c[0]=f=>o(1))},s[a(377)]),c[6]||(c[6]=s.yxwOT(b,"br",null,null,-1)),c[7]||(c[7]=ye()),c[8]||(c[8]=s[a(363)](b,"br",null,null,-1)),s[a(384)](b,s[a(372)],{onClick:c[1]||(c[1]=f=>o(2))},a(369)),c[9]||(c[9]=b("br",null,null,-1)),c[10]||(c[10]=s.QBapr(ye)),c[11]||(c[11]=s[a(363)](b,"br",null,null,-1)),b(s.Sydnp,{onClick:c[2]||(c[2]=f=>o(3))}," Морской бой "),c[12]||(c[12]=s[a(363)](b,"br",null,null,-1)),c[13]||(c[13]=s.yxwOT(b,"br",null,null,-1)),c[14]||(c[14]=s[a(379)](ye)),c[15]||(c[15]=s.rhxpf(b,"br",null,null,-1)),c[16]||(c[16]=ye(a(355))),c[17]||(c[17]=s[a(358)](b,"br",null,null,-1)),c[18]||(c[18]=s.QBapr(ye)),c[19]||(c[19]=s.yxwOT(b,"br",null,null,-1)),c[20]||(c[20]=s[a(358)](b,"b",null,s[a(368)],-1)),c[21]||(c[21]=s[a(371)](b,"br",null,null,-1)),c[22]||(c[22]=ye()),c[23]||(c[23]=b("br",null,null,-1)),c[24]||(c[24]=ye(" и договориться о выборе игры "))])}}}),rs=Ci;(function(t,e){const n=Ci,s=t();for(;;)try{if(-parseInt(n(192))/1+parseInt(n(191))/2*(-parseInt(n(200))/3)+-parseInt(n(183))/4*(parseInt(n(197))/5)+parseInt(n(201))/6+parseInt(n(210))/7+-parseInt(n(189))/8*(-parseInt(n(208))/9)+parseInt(n(196))/10*(parseInt(n(188))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ei,809460);function Ci(t,e){const n=Ei();return Ci=function(s,i){return s=s-182,n[s]},Ci(t,e)}const lx={class:rs(212)},cx={key:0,class:rs(198)},ax=Li({__name:rs(187),emits:[rs(194)],setup(t,{emit:e}){const n=rs,s={BhAVr:n(194),hOZRE:function(l){return l()},BjYtQ:n(190),UwRSr:function(l,c,a,f){return l(c,a,f)},naMVF:"button",qkWjk:n(207),kxMMI:function(l,c,a,f){return l(c,a,f)},AZRLc:n(199),pXiUd:function(l,c,a,f,p){return l(c,a,f,p)},coOkV:function(l,c,a){return l(c,a)},qlUee:function(l){return l()}},i=e,r=s[n(209)](Je);function o(l){const c=n;switch(l){case(l=1):i(s[c(206)]);break}r[c(182)]=!1}return(l,c)=>{const a=n;return s[a(203)](ie),fe(s.BjYtQ,lx,[s[a(204)](b,s[a(205)],null,[s[a(204)](b,s[a(186)],{class:s[a(185)],onClick:c[0]||(c[0]=f=>r.value=!r[a(182)])},"❁")]),r.value?(s.hOZRE(ie),s[a(193)](fe,s[a(205)],cx,[b("a",{onClick:c[1]||(c[1]=f=>o(1))},s[a(202)]),c[2]||(c[2]=s[a(203)](ye)),c[3]||(c[3]=s[a(184)](b,"br",null,null,-1)),c[4]||(c[4]=b("a",null,a(211),-1))])):s[a(195)](ke,"",!0)])}}});function Ei(){const t=["279eWMZHZ","357486dIutXB","AZRLc","hOZRE","UwRSr","BjYtQ","BhAVr","menuBt_bt","2133aaavvq","qlUee","3832955RGqCrV","Инфо","menuBt","value","4xQtyAN","pXiUd","qkWjk","naMVF","MenuButton","27434FMPkKi","4696hWwoiZ","div","1130SWjBdh","541375eYIcJB","kxMMI","toExit","coOkV","5580KTWapu","3672685jEHOBN","panel","Удалить игру"];return Ei=function(){return t},Ei()}const Os=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ux=Os(ax,[["__scopeId","data-v-ff2e1591"]]),Et=en;(function(t,e){const n=en,s=t();for(;;)try{if(parseInt(n(379))/1*(parseInt(n(362))/2)+parseInt(n(424))/3*(-parseInt(n(333))/4)+parseInt(n(370))/5+-parseInt(n(482))/6+-parseInt(n(331))/7+parseInt(n(413))/8*(parseInt(n(363))/9)+-parseInt(n(375))/10===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ii,420175);function Ii(){const t=["CDAfO","TRKfA","uXLWc","BinderComp","aUNxA","NIvcW","accept","then","KFxtq","gsCQV","log","lcWyD","onValue","::::::: Связывание :::::::","slice","EhGsH","SSyle","YzGEo","setField","input","Daxog","center","/list/","hMxXE","ueHIg","qKDuV","red-notice","#ddd","1190000tDwahE","keys","27340stFRop","GLNWY","includes","uaWHR","dvOKG","kZneF","kqBdu","gdadk","uejnr","ZPlZr","EqELz","larger","fdGqS","Ccqbh","name2","NFaVT","/games/","Нет ответа, отменяю выбор","/look/","CktIz","mckgu","TRdkJ","LBLmV","4px","spWQH","QiPLZ","uGgTb","myNickName","Нет желающих, отменяю ожидание","218kGhvnq","27198vsrpWY","OImIg","Список желающих играть:","/look","uDwmg","Xkfxv","fmNhI","3093480GgWxbo","Вперед","OhOWv","setItem","* nickname не может быть меньше 2 букв","5684230cxHWZf",">>>> ANALIZ ","RNitr"," stage:","3635kmGFlL","BTjYb","bHFAx","TVWje","JPcTU","Сменить nickName","ckWEW","playNumber","GUBVA","QdWwx","getField","RpaEb","KyOmK","20px","Хорошо бы сообщить сопернику, что вы ушли из игры","PpYGP","DSHVd","kAQdb","Согласиться","jWXhe","ySPeS","YIoVE","liVLP","green-bt","yKVIz","zEggo","oLqJN","iKGOs","FFUFk","zuNHr","hvORY","zvvqO","ZkZvF","ВСЕ НАСТРОЙКИ ИГРЫ","1800YuvhOX","VErFc","JFBHE","WZjng","res","SDTAI","hlSkf","AlzWl","sNgPs","nFZwy","TQNuu","3vqYtKO","nick","LuhLy","uInYq","length","stage","DBmfC","lookField","myName"," Зарегистрироваться в поиске ","XsfBt","gameId","Нахожусь в списке, жду соперника","MdbKJ","WHgcR","now","name","IkBlL","gmFGh","LDtde","QkGxP","value","nVZdU","getItem","push"," : ","game","yUotz","id2","small","Нужно дать ссылку на бот другому игроку. И сообщить какую игру выбрать","HjohI","IjzUR"," Вас выбрал игрок: ","FSYBk","split","CoRAU","EdgkL","OiBXS","reload","tnUkz","eOivw","zIxhl","Играем","gameLink","жду пока не откликнится ","oGXiT","button","ZPHim","OKPkU","SNIeD","30px","div","removeField","zXgFB","TyKBR","NCwBI","ITEDN","3176568OebsYw","myId","momPe","yZpnX","GFzJr","eMwjN","cQVvF","maFjU","onClick"];return Ii=function(){return t},Ii()}const hx={key:0},fx={key:1},dx={key:2},px={key:3},_x={key:4},gx={class:Et(517)},mx={key:0},xx=[Et(490)],yx={key:5},bx={key:0},vx=["onClick"],Cx={key:1,class:Et(517)},Ex={key:6},Ix={key:7},wx={key:8},Sx={style:{"font-size":Et(475)}},Tx={style:{color:"red","font-size":Et(392)}},Nx={key:9},Rx={style:{"font-size":Et(475),background:Et(518)}},Ax={key:10};function en(t,e){const n=Ii();return en=function(s,i){return s=s-331,n[s]},en(t,e)}const Ox=!1,Px=Li({__name:Et(494),setup(t){const e=Et,n={zEggo:e(360),QiPLZ:function(h,u){return h+u},Xkfxv:function(h,u){return h+u},hvORY:e(513),JPcTU:function(h,u){return h===u},EdgkL:function(h,u){return h(u)},mckgu:e(376),AlzWl:function(h){return h()},RNitr:e(366),uInYq:e(351),zXgFB:function(h,u){return h==u},ZPlZr:function(h,u,d){return h(u,d)},IjzUR:function(h,u){return h+u},jWXhe:function(h,u){return h+u},NIvcW:function(h,u){return h+u},yZpnX:function(h,u){return h+u},MdbKJ:function(h,u){return h+u},HjohI:function(h,u){return h+u},kZneF:e(393),Daxog:function(h,u){return h(u)},NFaVT:function(h,u){return h>u},eOivw:function(h,u){return h+u},LBLmV:function(h,u,d){return h(u,d)},GLNWY:e(349),hMxXE:e(412),lcWyD:function(h,u,d){return h(u,d)},EhGsH:function(h){return h()},YzGEo:function(h,u,d,v,T,F){return h(u,d,v,T,F)},CoRAU:"button",NCwBI:e(402),WKIjZ:function(h,u){return h(u)},liVLP:function(h,u,d,v,T){return h(u,d,v,T)},uejnr:e(476),zuNHr:function(h,u,d,v,T){return h(u,d,v,T)},JFBHE:e(504),BTjYb:function(h,u){return h+u},gsCQV:function(h,u){return h+u},yKVIz:function(h,u){return h(u)},aLpmo:e(449),KFxtq:function(h,u){return h(u)},ckWEW:function(h){return h()},cQVvF:function(h,u,d,v){return h(u,d,v)},QkGxP:function(h,u,d){return h(u,d)},CDAfO:function(h){return h()},dvOKG:function(h,u,d,v,T){return h(u,d,v,T)},hlSkf:function(h,u,d,v,T){return h(u,d,v,T)},eMwjN:function(h,u){return h(u)},WZjng:" ИГРАЙТЕ ВДВОЕМ ",nFZwy:function(h,u,d,v,T){return h(u,d,v,T)},oLqJN:function(h,u,d,v){return h(u,d,v)},yUotz:e(371),HfKof:function(h,u,d){return h(u,d)},KyOmK:function(h,u,d,v){return h(u,d,v)},QdWwx:function(h,u,d){return h(u,d)},jGmOH:function(h,u,d){return h(u,d)},GFzJr:function(h,u){return h(u)},LuhLy:function(h){return h()},zvvqO:function(h,u,d,v){return h(u,d,v)},LDtde:e(510),kqBdu:e(356),PpYGP:e(512),RpaEb:e(384),WHgcR:function(h,u,d,v,T){return h(u,d,v,T)},YIoVE:function(h,u){return h(u)},pqYGB:function(h,u,d,v,T){return h(u,d,v,T)},sNgPs:function(h,u,d){return h(u,d)},FSYBk:function(h,u,d,v,T){return h(u,d,v,T)},TQNuu:"red-bt",SDTAI:e(433),SSyle:function(h){return h()},IkBlL:function(h,u,d,v,T){return h(u,d,v,T)},GUBVA:function(h){return h()},bWIpI:e(436),SNIeD:e(365),ZPHim:function(h){return h()},TRdkJ:"* нельзя выбирать себя",rwZqb:function(h,u,d,v,T){return h(u,d,v,T)},TRKfA:function(h,u,d,v,T){return h(u,d,v,T)},uLqVo:e(361),fmNhI:function(h,u,d,v,T){return h(u,d,v,T)},TVWje:function(h,u){return h===u},uDwmg:function(h){return h()},bHFAx:function(h,u,d,v){return h(u,d,v)},zIxhl:function(h,u,d,v){return h(u,d,v)},ueHIg:function(h,u){return h(u)},TyKBR:function(h,u){return h(u)},gmFGh:function(h,u){return h(u)},XsfBt:e(350),momPe:function(h,u){return h(u)},uGgTb:function(h,u,d,v,T){return h(u,d,v,T)},tnUkz:function(h,u,d,v,T){return h(u,d,v,T)},CktIz:e(397),ySPeS:function(h,u,d){return h(u,d)},uXLWc:function(h,u){return h===u},iKGOs:function(h,u){return h(u)},Ccqbh:function(h){return h()},FFUFk:e(467),ioJvi:" с игроком ",OhOWv:function(h,u,d,v,T){return h(u,d,v,T)},fdGqS:function(h,u,d,v,T){return h(u,d,v,T)},OiBXS:function(h,u){return h(u)},KNrcl:function(h,u,d,v,T){return h(u,d,v,T)},SIyYl:function(h,u,d,v,T){return h(u,d,v,T)},maFjU:function(h,u){return h(u)},VUkmb:function(h,u,d,v,T){return h(u,d,v,T)},qKDuV:function(h,u,d,v,T){return h(u,d,v,T)},OKPkU:function(h,u){return h(u)},VErFc:function(h,u,d,v,T){return h(u,d,v,T)},ipFKr:function(h,u,d,v,T){return h(u,d,v,T)},aGUHr:function(h,u,d){return h(u,d)},hBYAZ:function(h,u){return h===u},DSHVd:function(h,u){return h(u)},spWQH:function(h,u,d,v){return h(u,d,v)},nVZdU:"Играть",sNTRS:function(h,u){return h(u)},EqELz:function(h){return h()},ZkZvF:function(h){return h()},oGXiT:function(h,u){return h(u)},DBmfC:"* можете поменять ваш Никнейм"},s=n[e(472)](el),i=n.sNTRS(Je,localStorage[e(447)](e(360))||e(425)),r=n.ueHIg(Je,[]),o=n[e(343)](Je),l=n[e(411)](Je),c=Je(""),a=n[e(470)](Je,""),f=Je(n[e(430)]),p=function(){const h=e;i[h(445)]&&localStorage[h(373)](n[h(404)],i[h(445)])};function g(){const h=e,u={aUNxA:function(d,v){return n[en(358)](d,v)},OImIg:"/games/"};i.value||(i.value=s[h(432)]),s.getField(n[h(368)](n[h(409)],s[h(483)]))[h(498)](d=>{const v=h;d&&(o[v(445)]={id:d.id,name:d[v(440)]},s[v(429)]=5,s[v(389)](u[v(495)](u[v(364)],d[v(450)]))[v(498)](T=>{const F=v;console[F(501)]("context",T),s.gameId=T.gameId,c[F(445)]=T}))})}const x=function(h){const u=e,d={kAQdb:function(T,F){return n.JPcTU(T,F)},UqeWg:function(T,F){return n[en(461)](T,F)},sVCdD:function(T,F){return T>F}};if(console[u(501)](n[u(353)],h),r.value=[],n.JPcTU(s[u(429)],0))return!1;s[u(429)]=1;let v=!1;h&&Object[u(332)](h).forEach(T=>{const F=u,H="2|6|0|3|4|5|7|1"[F(459)]("|");let pe=0;for(;;){switch(H[pe++]){case"0":if(s[F(429)]>3)return!1;continue;case"1":T&&h[T]&&r[F(445)][F(448)]({id:T,name:h[T][F(440)]});continue;case"2":h[T].id2&&h[T][F(452)]===s.myId&&(o[F(445)]={id:T,name:h[T][F(440)]});continue;case"3":d[F(396)](T,d.UqeWg(String,s.myId))&&T&&(v=!0,s[F(429)]!==3&&(s[F(429)]=2),h[T][F(452)]&&(s[F(429)]=4));continue;case"4":h[T][F(452)]==s[F(483)]&&(v=!0,s[F(429)]=3);continue;case"5":d.sVCdD(s.stage,2)&&!v&&location[F(463)]();continue;case"6":d[F(396)](T,d.UqeWg(String,s[F(483)]))&&(o[F(445)]={id:h[T][F(452)],name:h[T][F(347)]});continue;case"7":h[T][F(497)]&&Xe();continue}break}})};Zt(()=>s[e(483)],h=>h&&setTimeout(g,500));function I(){const h=e;n[h(420)](k),s[h(429)]=1}function k(){const h=e;s[h(503)](n.Xkfxv(s.gameId,n[h(377)]))[h(498)](u=>x(u)),Zt(()=>s[h(431)],u=>x(u))}function $(){const h=e;if(i[h(445)][h(428)]<2)return f[h(445)]=h(374),!1;s[h(509)](s[h(435)]+n[h(427)]+s[h(483)],{name:i[h(445)]})}function j(h){const u=e;if(n[u(478)](h.id,s.myId))return l[u(445)]=!0,n.ZPlZr(setTimeout,()=>l[u(445)]=!1,2e3),!1;s[u(509)](n[u(358)](n[u(456)](s[u(435)],n[u(427)]),h.id),{name:h[u(440)],id2:s[u(483)],name2:i.value||s.myName})[u(498)](d=>{const v=u;console[v(501)](v(417),d),o[v(445)]={id:h.id,name:h[v(440)]},s.stage=3})}function Q(h){const u=e;h&&o[u(445)]&&s[u(509)](s[u(435)]+n[u(427)]+o.value.id,{name:o.value.name,id2:s[u(483)],name2:i[u(445)]||s.myName,accept:!0}),!h&&s[u(509)](n[u(398)](s[u(435)]+n[u(427)],s[u(483)]),{name:i[u(445)]||s[u(432)]})[u(498)](()=>s.stage=2)}function ee(){const h=e;s[h(509)](n.NIvcW(n[h(485)](s[h(435)],h(351)),o[h(445)].id),{name:o[h(445)][h(440)]})[h(498)](()=>s.stage=2)}function M(){const h=e;s.removeField(n[h(437)](n.HjohI(s.gameId,n[h(427)]),s[h(483)]))[h(498)](()=>s[h(429)]=0)}function X(){var d;const h=e;debugger;a[h(445)]=n[h(338)];let u=n[h(511)](String,o.value.id);n[h(348)](o[h(445)].id,s[h(483)])?u+=n[h(465)]("::",s[h(483)]):u=n[h(485)](n[h(368)](s.myId,"::"),u),s[h(477)](n.HjohI(n.hvORY,s[h(483)])),s[h(477)](n[h(409)]+((d=o[h(445)])==null?void 0:d.id)),s[h(477)](n[h(455)](h(349),u)),n.LBLmV(setTimeout,()=>location[h(463)](),3e3)}function Xe(){var v,T,F;const h=e;let u=Date[h(439)](),d=String(o.value.id);o[h(445)].id>s[h(483)]?d+=n[h(496)]("::",s.myId):d=s[h(483)]+"::"+d,console.log(h(468),d),s[h(509)](n[h(398)](n.hvORY,s[h(483)]),{id:(v=o[h(445)])==null?void 0:v.id,name:(T=o[h(445)])==null?void 0:T[h(440)],game:d,date:u}),s[h(509)](n.yZpnX(n[h(409)],(F=o.value)==null?void 0:F.id),{id:s.myId,name:i.value||s[h(432)],game:d,date:u}),s.setField(n[h(334)]+d,{game:n[h(514)],gameId:s[h(435)]}),n.lcWyD(setTimeout,()=>{var pe;const H=h;s[H(477)](n[H(437)](s[H(435)]+n[H(427)],(pe=o[H(445)])==null?void 0:pe.id)),s[H(477)](s[H(435)]+H(351)+s[H(483)]),location[H(463)]()},2e3)}function Ce(){const h=e;s[h(386)]=+s[h(435)][h(505)](1)}return(h,u)=>{var T,F;const d=e,v={gdadk:function(H){return n.AlzWl(H)},ITEDN:function(H,pe,he,G,se,pt){return n[en(508)](H,pe,he,G,se,pt)},OiQxw:n[d(460)],uaWHR:function(H,pe){return n.WKIjZ(H,pe)}};return ie(),n[d(401)](fe,Ge,null,[Ox?(ie(),fe(n.uejnr,hx,[u[10]||(u[10]=b("hr",null,null,-1)),u[11]||(u[11]=n[d(408)](b,"i",null,n[d(415)],-1)),u[12]||(u[12]=n[d(408)](b,"br",null,null,-1)),ye(n[d(380)](n[d(496)](n[d(500)](" "+n[d(461)](Ke,n[d(403)](Ee,s).myId),n.aLpmo),n.yKVIz(Ke,i.value))," "),1),u[13]||(u[13]=b("br",null,null,-1)),n[d(342)](ye,n[d(398)](d(378),n[d(499)](Ke,n[d(511)](Ee,s)[d(429)]))+" ",1),u[14]||(u[14]=b("hr",null,null,-1))])):ke("",!0),n.WKIjZ(Ee,s)[d(429)]===5?(n[d(385)](ie),n[d(488)](fe,n[d(341)],fx,[n[d(502)](Ye,ux,{onToExit:u[0]||(u[0]=H=>X())})])):n[d(444)](ke,"",!0),n[d(511)](Ee,s)[d(429)]===-1?(n[d(491)](ie),n.cQVvF(fe,d(476),dx,[u[15]||(u[15]=n[d(337)](b,"br",null,null,-1)),u[16]||(u[16]=n[d(401)](b,"br",null,null,-1)),u[17]||(u[17]=n[d(419)](b,"br",null,null,-1)),u[18]||(u[18]=b("br",null,null,-1)),u[19]||(u[19]=n[d(487)](ye,n[d(416)])),u[20]||(u[20]=b("br",null,null,-1)),u[21]||(u[21]=n.nFZwy(b,"br",null,null,-1)),u[22]||(u[22]=b("br",null,null,-1)),u[23]||(u[23]=b("br",null,null,-1)),n.oLqJN(b,d(471),{onClick:u[1]||(u[1]=H=>Ee(s)[d(429)]=0)},n[d(451)]),u[24]||(u[24]=n[d(419)](b,"br",null,null,-1)),u[25]||(u[25]=n[d(408)](b,"br",null,null,-1))])):n.HfKof(ke,"",!0),n.Daxog(Ee,s).stage===0?(ie(),n[d(391)](fe,d(476),px,[n[d(388)](Ye,ox,{onGameChanged:I})])):n.jGmOH(ke,"",!0),n[d(383)](n[d(486)](Ee,s)[d(429)],1)?(n[d(426)](ie),n[d(410)](fe,"div",_x,[u[29]||(u[29]=b("p",null," Привет ",-1)),b("p",null,[n[d(342)](Ef,b(n[d(443)],{"onUpdate:modelValue":u[2]||(u[2]=H=>i[d(445)]=H),maxlength:"16",minlength:"3",style:{"font-size":d(344),padding:n[d(339)],"text-align":n[d(394)]},onInput:u[3]||(u[3]=H=>p()),placeholder:n[d(390)]},null,544),[[Qd,i.value]])]),n[d(438)](b,n.uejnr,gx,n[d(400)](Ke,f[d(445)]),1),r[d(445)]&&n[d(348)](r[d(445)].length,1)?(ie(),n[d(405)](fe,"div",mx,[u[26]||(u[26]=n.pqYGB(b,"h3",null,d(365),-1)),(n[d(487)](ie,!0),fe(Ge,null,n.sNgPs(ul,r[d(445)],H=>{const pe=d;return v[pe(340)](ie),v[pe(481)](fe,v.OiQxw,{class:"green-bt",key:H.id,onClick:he=>j(H)},v[pe(336)](Ke,H.name),9,xx)}),128)),u[27]||(u[27]=n.zuNHr(b,"br",null,null,-1)),u[28]||(u[28]=n[d(458)](b,"br",null,null,-1))])):ke("",!0),n[d(488)](b,n.CoRAU,{class:n[d(423)],onClick:u[4]||(u[4]=H=>$())},n[d(418)]),u[30]||(u[30]=n[d(438)](b,"br",null,null,-1)),u[31]||(u[31]=n[d(507)](ye)),u[32]||(u[32]=n[d(441)](b,"br",null,null,-1)),u[33]||(u[33]=b(d(453),null,d(454),-1)),u[34]||(u[34]=n[d(337)](b,"br",null,null,-1)),u[35]||(u[35]=n[d(422)](b,"br",null,null,-1))])):ke("",!0),n[d(487)](Ee,s)[d(429)]===2?(n[d(387)](ie),n[d(410)](fe,n[d(341)],yx,[u[39]||(u[39]=b("p",null,n.bWIpI,-1)),r[d(445)][d(428)]?(n[d(385)](ie),fe("div",bx,[u[36]||(u[36]=n[d(408)](b,"h3",null,n[d(474)],-1)),(n[d(403)](ie,!0),n[d(401)](fe,Ge,null,n[d(355)](ul,r[d(445)],H=>{const pe=d;return n[pe(506)](ie),n.YzGEo(fe,n[pe(460)],{class:n[pe(480)],key:H.id,onClick:he=>j(H)},n[pe(461)](Ke,H[pe(440)]),9,vx)}),128)),u[37]||(u[37]=b("br",null,null,-1)),u[38]||(u[38]=n[d(422)](b,"br",null,null,-1))])):ke("",!0),l.value?(n[d(472)](ie),n[d(405)](fe,n[d(341)],Cx,n[d(354)])):ke("",!0),u[40]||(u[40]=n.rwZqb(b,"br",null,null,-1)),u[41]||(u[41]=n[d(492)](b,"br",null,null,-1)),b(n[d(460)],{onClick:u[5]||(u[5]=H=>M())},n.uLqVo),u[42]||(u[42]=b("br",null,null,-1)),u[43]||(u[43]=n.fmNhI(b,"br",null,null,-1))])):n.QkGxP(ke,"",!0),n[d(382)](n.KFxtq(Ee,s)[d(429)],3)?(n[d(367)](ie),n[d(381)](fe,n[d(341)],Ex,[n[d(466)](b,"p",null,[u[44]||(u[44]=n[d(515)](ye," Выбрал игрока ")),u[45]||(u[45]=n[d(337)](b,"br",null,null,-1)),b("b",null,n[d(479)](Ke,(T=o[d(445)])==null?void 0:T.name),1),u[46]||(u[46]=n[d(472)](ye)),u[47]||(u[47]=n[d(369)](b,"br",null,null,-1)),u[48]||(u[48]=n[d(442)](ye,d(469)))]),b(d(471),{onClick:u[6]||(u[6]=H=>ee())},n[d(434)])])):n[d(421)](ke,"",!0),n[d(382)](n[d(484)](Ee,s)[d(429)],4)&&((F=o[d(445)])!=null&&F.id)?(n[d(387)](ie),fe(n.uejnr,Ix,[u[49]||(u[49]=n.momPe(ye,d(457))),u[50]||(u[50]=n[d(359)](b,"br",null,null,-1)),u[51]||(u[51]=b("br",null,null,-1)),n[d(492)](b,"b",null,Ke(o[d(445)][d(440)]),1),u[52]||(u[52]=n[d(492)](b,"br",null,null,-1)),u[53]||(u[53]=n[d(464)](b,"br",null,null,-1)),n.KyOmK(b,d(471),{class:d(402),onClick:u[7]||(u[7]=H=>Q(!1))},"Отказаться"),n[d(488)](b,n[d(460)],{class:n[d(480)],onClick:u[8]||(u[8]=H=>Q(!0))},n[d(352)])])):n[d(399)](ke,"",!0),n[d(493)](n[d(406)](Ee,s)[d(429)],5)&&o.value?(n[d(346)](ie),n[d(410)](fe,n[d(341)],wx,[u[54]||(u[54]=b("h3",null,n[d(407)],-1)),u[55]||(u[55]=n[d(487)](ye,n.ioJvi)),u[56]||(u[56]=n[d(372)](b,"br",null,null,-1)),u[57]||(u[57]=n[d(345)](b,"br",null,null,-1)),n[d(410)](b,n[d(341)],Sx,[b("b",null,n[d(462)](Ke,o.value[d(440)]),1)]),u[58]||(u[58]=n.KNrcl(b,"br",null,null,-1)),u[59]||(u[59]=n.SIyYl(b,"br",null,null,-1)),b(n[d(341)],Tx,[n[d(408)](b,"b",null,n[d(489)](Ke,a.value),1)])])):n[d(355)](ke,"",!0),n[d(484)](Ee,s)[d(429)]&&[1,2,3,4,5][d(335)](n.eMwjN(Ee,s)[d(429)])?(ie(),n.zIxhl(fe,d(476),Nx,[u[60]||(u[60]=n.VUkmb(b,"hr",null,null,-1)),u[61]||(u[61]=n[d(516)](b,"br",null,null,-1)),n[d(408)](b,"div",Rx,Ke(n[d(442)](Ee,s).gameNames[n[d(473)](Ee,s)[d(435)]]),1),u[62]||(u[62]=n[d(414)](b,"br",null,null,-1)),u[63]||(u[63]=n.ipFKr(b,"br",null,null,-1))])):n.aGUHr(ke,"",!0),n.hBYAZ(n[d(395)](Ee,s).stage,5)?(ie(),fe(n.uejnr,Ax,[n[d(357)](b,"button",{onClick:u[9]||(u[9]=H=>Ce())},n[d(446)])])):ke("",!0),u[64]||(u[64]=n[d(337)](b,"br",null,null,-1)),u[65]||(u[65]=b("br",null,null,-1))],64)}}}),kx={class:"game"},Dx={__name:"StartPage",setup(t){return(e,n)=>(ie(),fe("div",kx,[n[0]||(n[0]=b("h1",null,"♕",-1)),b("div",null,[Ye(Px,{game:"g1"})])]))}},Mx=Os(Dx,[["__scopeId","data-v-9eccdede"]]);function wi(t,e){const n=Si();return wi=function(s,i){return s=s-257,n[s]},wi(t,e)}const no=wi;(function(t,e){const n=wi,s=t();for(;;)try{if(parseInt(n(280))/1+parseInt(n(267))/2*(parseInt(n(285))/3)+-parseInt(n(293))/4+-parseInt(n(286))/5+-parseInt(n(268))/6+-parseInt(n(262))/7*(-parseInt(n(270))/8)+parseInt(n(260))/9*(-parseInt(n(271))/10)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Si,323560);function Si(){const t=["jOYUX","2ReiEqG","1704372orgBaw","SnFkO","151880kBpoOK","10EwSLIN","Камень ножницы бумага","green-bt","STuGf"," Выбери: ","button","Свериться","kQDrC","StounScissorsPaper","359606QZnRPU","Бумага","FxcuV","asPVJ","vUxby","1500195zGjxCF","455940pEJJaK","EIGMU","HaQzx","Ножницы","oimBL","ByyJx","kYczQ","1144972JmKmpX","Камень","rama","cYQsw","GIqqn","snrWl","4168377eONLqb","FsWoa","217xlJmba","div","YLzds","value"];return Si=function(){return t},Si()}const Fx={class:no(295)},Lx=Li({__name:no(279),setup(t){const e=no,n={GIqqn:function(i){return i()},tDFFF:e(263),STuGf:e(272),NXXUm:function(i,r,o,l,c){return i(r,o,l,c)},vUxby:function(i,r,o,l,c){return i(r,o,l,c)},EIGMU:function(i,r){return i(r)},ByyJx:e(275),SAHBc:function(i,r,o,l,c){return i(r,o,l,c)},pJTKf:function(i,r,o,l,c){return i(r,o,l,c)},SnFkO:function(i,r,o,l,c){return i(r,o,l,c)},FxcuV:e(276),PmOBg:function(i,r){return i(r)},HaQzx:function(i,r){return i===r},FsWoa:function(i,r,o,l,c){return i(r,o,l,c)},IaArr:function(i,r,o,l,c){return i(r,o,l,c)},kYczQ:function(i,r,o,l,c){return i(r,o,l,c)},jOYUX:e(281),cYQsw:function(i,r,o,l,c){return i(r,o,l,c)},YLzds:function(i,r,o,l,c){return i(r,o,l,c)},oimBL:function(i,r,o,l,c){return i(r,o,l,c)},kQDrC:function(i,r,o,l,c){return i(r,o,l,c)},snrWl:e(273),asPVJ:e(277)},s=n[e(287)](Je,0);return(i,r)=>{const o=e;return n[o(258)](ie),fe(n.tDFFF,Fx,[r[3]||(r[3]=b("br",null,null,-1)),r[4]||(r[4]=b("h2",null,n[o(274)],-1)),r[5]||(r[5]=n.NXXUm(b,"br",null,null,-1)),r[6]||(r[6]=n[o(284)](b,"br",null,null,-1)),r[7]||(r[7]=n.EIGMU(ye,n[o(291)])),r[8]||(r[8]=n.SAHBc(b,"br",null,null,-1)),r[9]||(r[9]=n.pJTKf(b,"br",null,null,-1)),r[10]||(r[10]=b("br",null,null,-1)),n[o(269)](b,n[o(282)],{class:n.PmOBg(xn,{active:n.HaQzx(s[o(265)],1)}),onClick:r[0]||(r[0]=l=>s[o(265)]=1)},o(294),2),r[11]||(r[11]=b("br",null,null,-1)),r[12]||(r[12]=n.SnFkO(b,"br",null,null,-1)),n[o(261)](b,n[o(282)],{class:n.PmOBg(xn,{active:n.HaQzx(s[o(265)],2)}),onClick:r[1]||(r[1]=l=>s.value=2)},o(289),2),r[13]||(r[13]=n[o(261)](b,"br",null,null,-1)),r[14]||(r[14]=n.IaArr(b,"br",null,null,-1)),n[o(292)](b,n.FxcuV,{class:n[o(287)](xn,{active:n[o(288)](s[o(265)],3)}),onClick:r[2]||(r[2]=l=>s.value=3)},n[o(266)],2),r[15]||(r[15]=n[o(257)](b,"br",null,null,-1)),r[16]||(r[16]=n[o(264)](b,"br",null,null,-1)),r[17]||(r[17]=n[o(290)](b,"br",null,null,-1)),r[18]||(r[18]=n[o(257)](b,"br",null,null,-1)),r[19]||(r[19]=b("br",null,null,-1)),r[20]||(r[20]=n[o(278)](b,"br",null,null,-1)),r[21]||(r[21]=n[o(292)](b,n[o(282)],{class:n[o(259)]},n[o(283)],-1))])}}}),Bx=Os(Lx,[["__scopeId","data-v-9f73b1bf"]]),Wx={};function Ux(t,e){return ie(),fe(Ge,null,[e[0]||(e[0]=b("h3",null,"Крестики нолики!!!",-1)),e[1]||(e[1]=b("br",null,null,-1)),e[2]||(e[2]=b("br",null,null,-1))],64)}const Hx=Os(Wx,[["render",Ux]]),Vx={};function jx(t,e){return" SeaWar "}const $x=Os(Vx,[["render",jx]]),Gx={__name:"App",setup(t){const e=el();let n=af(Mx);Zt(()=>e.playNumber,i=>{console.log("- - - - - - - res",i),s(i)});function s(i){switch(console.log(i),i){case 1:n.value=Bx;break;case 2:n.value=Hx;break;case 3:n.value=$x;break}}return _a(()=>{var r,o,l;let i=(r=window.Telegram)==null?void 0:r.WebApp;i&&(e.myId=((o=i.initDataUnsafe.user)==null?void 0:o.id)||0,e.myName=((l=i.initDataUnsafe.user)==null?void 0:l.username)||"",e.myId||setTimeout(()=>{e.myId=e.myId||parseInt(String(Math.random()*1e3)),e.myName=e.nickName||e.myName||"Имя_"+parseInt(String(Math.random()*100)),location.host.includes("localhost")},500))}),(i,r)=>(ie(),La(Bf(Ee(n))))}},zx=Ni;(function(t,e){const n=Ni,s=t();for(;;)try{if(-parseInt(n(263))/1+-parseInt(n(266))/2*(-parseInt(n(258))/3)+-parseInt(n(262))/4+parseInt(n(260))/5*(-parseInt(n(265))/6)+-parseInt(n(257))/7*(parseInt(n(256))/8)+-parseInt(n(264))/9+-parseInt(n(261))/10*(-parseInt(n(259))/11)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Ti,514712);function Ti(){const t=["mount","959968sMcSdd","28YcDrTJ","39fgINcV","14105575HbVzuU","15jbfskh","20eMXVkW","1550424hXaKkZ","913761EjhboC","7778835dvzUtp","809322JOQdGh","153906DsSDfv"];return Ti=function(){return t},Ti()}const Kx=np(),Oc=Zd(Gx);function Ni(t,e){const n=Ti();return Ni=function(s,i){return s=s-255,n[s]},Ni(t,e)}Oc.use(Kx),Oc[zx(255)]("#app");
