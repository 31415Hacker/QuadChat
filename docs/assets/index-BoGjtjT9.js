(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Ew(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ed={exports:{}},Na={},td={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function ww(){if(Ym)return ke;Ym=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Y={};function q(x,B,ue){this.props=x,this.context=B,this.refs=Y,this.updater=ue||j}q.prototype.isReactComponent={},q.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ye(){}ye.prototype=q.prototype;function de(x,B,ue){this.props=x,this.context=B,this.refs=Y,this.updater=ue||j}var ge=de.prototype=new ye;ge.constructor=de,K(ge,q.prototype),ge.isPureReactComponent=!0;var Ie=Array.isArray,$e=Object.prototype.hasOwnProperty,Re={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(x,B,ue){var Se,Ae={},Ne=null,Fe=null;if(B!=null)for(Se in B.ref!==void 0&&(Fe=B.ref),B.key!==void 0&&(Ne=""+B.key),B)$e.call(B,Se)&&!D.hasOwnProperty(Se)&&(Ae[Se]=B[Se]);var te=arguments.length-2;if(te===1)Ae.children=ue;else if(1<te){for(var fe=Array(te),Ce=0;Ce<te;Ce++)fe[Ce]=arguments[Ce+2];Ae.children=fe}if(x&&x.defaultProps)for(Se in te=x.defaultProps,te)Ae[Se]===void 0&&(Ae[Se]=te[Se]);return{$$typeof:r,type:x,key:Ne,ref:Fe,props:Ae,_owner:Re.current}}function R(x,B){return{$$typeof:r,type:x.type,key:B,ref:x.ref,props:x.props,_owner:x._owner}}function k(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function V(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ue){return B[ue]})}var O=/\/+/g;function S(x,B){return typeof x=="object"&&x!==null&&x.key!=null?V(""+x.key):B.toString(36)}function We(x,B,ue,Se,Ae){var Ne=typeof x;(Ne==="undefined"||Ne==="boolean")&&(x=null);var Fe=!1;if(x===null)Fe=!0;else switch(Ne){case"string":case"number":Fe=!0;break;case"object":switch(x.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=x,Ae=Ae(Fe),x=Se===""?"."+S(Fe,0):Se,Ie(Ae)?(ue="",x!=null&&(ue=x.replace(O,"$&/")+"/"),We(Ae,B,ue,"",function(Ce){return Ce})):Ae!=null&&(k(Ae)&&(Ae=R(Ae,ue+(!Ae.key||Fe&&Fe.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+x)),B.push(Ae)),1;if(Fe=0,Se=Se===""?".":Se+":",Ie(x))for(var te=0;te<x.length;te++){Ne=x[te];var fe=Se+S(Ne,te);Fe+=We(Ne,B,ue,fe,Ae)}else if(fe=P(x),typeof fe=="function")for(x=fe.call(x),te=0;!(Ne=x.next()).done;)Ne=Ne.value,fe=Se+S(Ne,te++),Fe+=We(Ne,B,ue,fe,Ae);else if(Ne==="object")throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Le(x,B,ue){if(x==null)return x;var Se=[],Ae=0;return We(x,Se,"","",function(Ne){return B.call(ue,Ne,Ae++)}),Se}function mt(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(ue){(x._status===0||x._status===-1)&&(x._status=1,x._result=ue)},function(ue){(x._status===0||x._status===-1)&&(x._status=2,x._result=ue)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var xe={current:null},Z={transition:null},ce={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Re};function ee(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Le,forEach:function(x,B,ue){Le(x,function(){B.apply(this,arguments)},ue)},count:function(x){var B=0;return Le(x,function(){B++}),B},toArray:function(x){return Le(x,function(B){return B})||[]},only:function(x){if(!k(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ke.Component=q,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=de,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ke.act=ee,ke.cloneElement=function(x,B,ue){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Se=K({},x.props),Ae=x.key,Ne=x.ref,Fe=x._owner;if(B!=null){if(B.ref!==void 0&&(Ne=B.ref,Fe=Re.current),B.key!==void 0&&(Ae=""+B.key),x.type&&x.type.defaultProps)var te=x.type.defaultProps;for(fe in B)$e.call(B,fe)&&!D.hasOwnProperty(fe)&&(Se[fe]=B[fe]===void 0&&te!==void 0?te[fe]:B[fe])}var fe=arguments.length-2;if(fe===1)Se.children=ue;else if(1<fe){te=Array(fe);for(var Ce=0;Ce<fe;Ce++)te[Ce]=arguments[Ce+2];Se.children=te}return{$$typeof:r,type:x.type,key:Ae,ref:Ne,props:Se,_owner:Fe}},ke.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},ke.createElement=I,ke.createFactory=function(x){var B=I.bind(null,x);return B.type=x,B},ke.createRef=function(){return{current:null}},ke.forwardRef=function(x){return{$$typeof:m,render:x}},ke.isValidElement=k,ke.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:mt}},ke.memo=function(x,B){return{$$typeof:v,type:x,compare:B===void 0?null:B}},ke.startTransition=function(x){var B=Z.transition;Z.transition={};try{x()}finally{Z.transition=B}},ke.unstable_act=ee,ke.useCallback=function(x,B){return xe.current.useCallback(x,B)},ke.useContext=function(x){return xe.current.useContext(x)},ke.useDebugValue=function(){},ke.useDeferredValue=function(x){return xe.current.useDeferredValue(x)},ke.useEffect=function(x,B){return xe.current.useEffect(x,B)},ke.useId=function(){return xe.current.useId()},ke.useImperativeHandle=function(x,B,ue){return xe.current.useImperativeHandle(x,B,ue)},ke.useInsertionEffect=function(x,B){return xe.current.useInsertionEffect(x,B)},ke.useLayoutEffect=function(x,B){return xe.current.useLayoutEffect(x,B)},ke.useMemo=function(x,B){return xe.current.useMemo(x,B)},ke.useReducer=function(x,B,ue){return xe.current.useReducer(x,B,ue)},ke.useRef=function(x){return xe.current.useRef(x)},ke.useState=function(x){return xe.current.useState(x)},ke.useSyncExternalStore=function(x,B,ue){return xe.current.useSyncExternalStore(x,B,ue)},ke.useTransition=function(){return xe.current.useTransition()},ke.version="18.3.1",ke}var Xm;function zd(){return Xm||(Xm=1,td.exports=ww()),td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function Tw(){if(Jm)return Na;Jm=1;var r=zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,A={},P=null,j=null;v!==void 0&&(P=""+v),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(A[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:m,key:P,ref:j,props:A,_owner:o.current}}return Na.Fragment=t,Na.jsx=h,Na.jsxs=h,Na}var Zm;function Iw(){return Zm||(Zm=1,ed.exports=Tw()),ed.exports}var H=Iw(),ze=zd();const Sw=Ew(ze);var Ru={},nd={exports:{}},tn={},rd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Aw(){return eg||(eg=1,(function(r){function e(Z,ce){var ee=Z.length;Z.push(ce);e:for(;0<ee;){var x=ee-1>>>1,B=Z[x];if(0<o(B,ce))Z[x]=ce,Z[ee]=B,ee=x;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],ee=Z.pop();if(ee!==ce){Z[0]=ee;e:for(var x=0,B=Z.length,ue=B>>>1;x<ue;){var Se=2*(x+1)-1,Ae=Z[Se],Ne=Se+1,Fe=Z[Ne];if(0>o(Ae,ee))Ne<B&&0>o(Fe,Ae)?(Z[x]=Fe,Z[Ne]=ee,x=Ne):(Z[x]=Ae,Z[Se]=ee,x=Se);else if(Ne<B&&0>o(Fe,ee))Z[x]=Fe,Z[Ne]=ee,x=Ne;else break e}}return ce}function o(Z,ce){var ee=Z.sortIndex-ce.sortIndex;return ee!==0?ee:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,A=null,P=3,j=!1,K=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(Z){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=Z)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function Ie(Z){if(Y=!1,ge(Z),!K)if(t(g)!==null)K=!0,mt($e);else{var ce=t(v);ce!==null&&xe(Ie,ce.startTime-Z)}}function $e(Z,ce){K=!1,Y&&(Y=!1,ye(I),I=-1),j=!0;var ee=P;try{for(ge(ce),A=t(g);A!==null&&(!(A.expirationTime>ce)||Z&&!V());){var x=A.callback;if(typeof x=="function"){A.callback=null,P=A.priorityLevel;var B=x(A.expirationTime<=ce);ce=r.unstable_now(),typeof B=="function"?A.callback=B:A===t(g)&&s(g),ge(ce)}else s(g);A=t(g)}if(A!==null)var ue=!0;else{var Se=t(v);Se!==null&&xe(Ie,Se.startTime-ce),ue=!1}return ue}finally{A=null,P=ee,j=!1}}var Re=!1,D=null,I=-1,R=5,k=-1;function V(){return!(r.unstable_now()-k<R)}function O(){if(D!==null){var Z=r.unstable_now();k=Z;var ce=!0;try{ce=D(!0,Z)}finally{ce?S():(Re=!1,D=null)}}else Re=!1}var S;if(typeof de=="function")S=function(){de(O)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Le=We.port2;We.port1.onmessage=O,S=function(){Le.postMessage(null)}}else S=function(){q(O,0)};function mt(Z){D=Z,Re||(Re=!0,S())}function xe(Z,ce){I=q(function(){Z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){K||j||(K=!0,mt($e))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(P){case 1:case 2:case 3:var ce=3;break;default:ce=P}var ee=P;P=ce;try{return Z()}finally{P=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ee=P;P=Z;try{return ce()}finally{P=ee}},r.unstable_scheduleCallback=function(Z,ce,ee){var x=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?x+ee:x):ee=x,Z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,Z={id:w++,callback:ce,priorityLevel:Z,startTime:ee,expirationTime:B,sortIndex:-1},ee>x?(Z.sortIndex=ee,e(v,Z),t(g)===null&&Z===t(v)&&(Y?(ye(I),I=-1):Y=!0,xe(Ie,ee-x))):(Z.sortIndex=B,e(g,Z),K||j||(K=!0,mt($e))),Z},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(Z){var ce=P;return function(){var ee=P;P=ce;try{return Z.apply(this,arguments)}finally{P=ee}}}})(id)),id}var tg;function Rw(){return tg||(tg=1,rd.exports=Aw()),rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Cw(){if(ng)return tn;ng=1;var r=zd(),e=Rw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function P(n){return g.call(A,n)?!0:g.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,a,c,d,p,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=_}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];q[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ye,de);q[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ye,de);q[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ye,de);q[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,i,a,c){var d=q.hasOwnProperty(i)?q[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(K(i,a,d,c)&&(a=null),c||d===null?P(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ie=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Re=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,x;function B(n){if(x===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);x=i&&i[1]||""}return`
`+x+n}var ue=!1;function Se(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=T);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ae(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Re:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case We:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Le:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case mt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(n){var i=fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ze(n){n._valueTracker||(n._valueTracker=Ce(n))}function hr(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Gt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ki(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vs(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=te(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mo(n,i){i=i.checked,i!=null&&ge(n,"checked",i,!1)}function bo(n,i){Mo(n,i);var a=te(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Es(n,i.type,a):i.hasOwnProperty("defaultValue")&&Es(n,i.type,te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function hl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Es(n,i,a){(i!=="number"||Gt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var dr=Array.isArray;function fr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+te(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Fo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ws(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(dr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:te(a)}}function Ts(n,i){var a=te(i.value),c=te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Uo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function gt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?gt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pr,jo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Fr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Di=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(n){Di.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ni[i]=Ni[n]})});function zo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ni.hasOwnProperty(n)&&Ni[n]?(""+i).trim():i+"px"}function Bo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $o=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qo(n,i){if(i){if($o[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ho(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ss=null,dn=null,Hn=null;function As(n){if(n=ma(n)){if(typeof Ss!="function")throw Error(t(280));var i=n.stateNode;i&&(i=zl(i),Ss(n.stateNode,n.type,i))}}function Wn(n){dn?Hn?Hn.push(n):Hn=[n]:dn=n}function Wo(){if(dn){var n=dn,i=Hn;if(Hn=dn=null,As(n),i)for(n=0;n<i.length;n++)As(i[n])}}function xi(n,i){return n(i)}function Go(){}var mr=!1;function Ko(n,i,a){if(mr)return n(i,a);mr=!0;try{return xi(n,i,a)}finally{mr=!1,(dn!==null||Hn!==null)&&(Go(),Wo())}}function ot(n,i){var a=n.stateNode;if(a===null)return null;var c=zl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Rs=!1;if(m)try{var An={};Object.defineProperty(An,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Rs=!1}function Oi(n,i,a,c,d,p,_,T,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var Li=!1,Cs=null,Rn=!1,Qo=null,Pc={onError:function(n){Li=!0,Cs=n}};function Ps(n,i,a,c,d,p,_,T,C){Li=!1,Cs=null,Oi.apply(Pc,arguments)}function dl(n,i,a,c,d,p,_,T,C){if(Ps.apply(this,arguments),Li){if(Li){var F=Cs;Li=!1,Cs=null}else throw Error(t(198));Rn||(Rn=!0,Qo=F)}}function Cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Mi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Pn(n){if(Cn(n)!==n)throw Error(t(188))}function fl(n){var i=n.alternate;if(!i){if(i=Cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Pn(d),n;if(p===c)return Pn(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Yo(n){return n=fl(n),n!==null?ks(n):null}function ks(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ks(n);if(i!==null)return i;n=n.sibling}return null}var Ns=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,pl=e.unstable_shouldYield,kc=e.unstable_requestPaint,Ge=e.unstable_now,ml=e.unstable_getCurrentPriorityLevel,bi=e.unstable_ImmediatePriority,Ur=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,Jo=e.unstable_LowPriority,gl=e.unstable_IdlePriority,Fi=null,rn=null;function yl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Fi,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:vl,Zo=Math.log,_l=Math.LN2;function vl(n){return n>>>=0,n===0?32:31-(Zo(n)/_l|0)|0}var Ds=64,Vs=4194304;function jr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ui(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=jr(T):(p&=_,p!==0&&(c=jr(p)))}else _=a&~d,_!==0?c=jr(_):p!==0&&(c=jr(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-$t(i),d=1<<a,c|=n[a],i&=~d;return c}function Nc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-$t(p),T=1<<_,C=d[_];C===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Nc(T,i)):C<=i&&(n.expiredLanes|=T),p&=~T}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ji(){var n=Ds;return Ds<<=1,(Ds&4194240)===0&&(Ds=64),n}function zr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Br(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-$t(i),n[i]=a}function He(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-$t(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function $r(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-$t(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Oe=0;function qr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var El,xs,wl,Tl,Il,ea=!1,Gn=[],Pt=null,kn=null,Nn=null,Hr=new Map,pn=new Map,Kn=[],Dc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sl(n,i){switch(n){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Hr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(i.pointerId)}}function Kt(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ma(i),i!==null&&xs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Vc(n,i,a,c,d){switch(i){case"focusin":return Pt=Kt(Pt,n,i,a,c,d),!0;case"dragenter":return kn=Kt(kn,n,i,a,c,d),!0;case"mouseover":return Nn=Kt(Nn,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return Hr.set(p,Kt(Hr.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,pn.set(p,Kt(pn.get(p)||null,n,i,a,c,d)),!0}return!1}function Al(n){var i=Hi(n.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=Mi(a),i!==null){n.blockedOn=i,Il(n.priority,function(){wl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Os(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return i=ma(a),i!==null&&xs(i),n.blockedOn=a,!1;i.shift()}return!0}function zi(n,i,a){yr(n)&&a.delete(i)}function Rl(){ea=!1,Pt!==null&&yr(Pt)&&(Pt=null),kn!==null&&yr(kn)&&(kn=null),Nn!==null&&yr(Nn)&&(Nn=null),Hr.forEach(zi),pn.forEach(zi)}function Dn(n,i){n.blockedOn===i&&(n.blockedOn=null,ea||(ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rl)))}function Vn(n){function i(d){return Dn(d,n)}if(0<Gn.length){Dn(Gn[0],n);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Pt!==null&&Dn(Pt,n),kn!==null&&Dn(kn,n),Nn!==null&&Dn(Nn,n),Hr.forEach(i),pn.forEach(i),a=0;a<Kn.length;a++)c=Kn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Kn.length&&(a=Kn[0],a.blockedOn===null);)Al(a),a.blockedOn===null&&Kn.shift()}var _r=Ie.ReactCurrentBatchConfig,Wr=!0;function et(n,i,a,c){var d=Oe,p=_r.transition;_r.transition=null;try{Oe=1,ta(n,i,a,c)}finally{Oe=d,_r.transition=p}}function xc(n,i,a,c){var d=Oe,p=_r.transition;_r.transition=null;try{Oe=4,ta(n,i,a,c)}finally{Oe=d,_r.transition=p}}function ta(n,i,a,c){if(Wr){var d=Os(n,i,a,c);if(d===null)qc(n,i,c,Bi,a),Sl(n,c);else if(Vc(d,n,i,a,c))c.stopPropagation();else if(Sl(n,c),i&4&&-1<Dc.indexOf(n)){for(;d!==null;){var p=ma(d);if(p!==null&&El(p),p=Os(n,i,a,c),p===null&&qc(n,i,c,Bi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else qc(n,i,c,null,a)}}var Bi=null;function Os(n,i,a,c){if(Bi=null,n=Is(c),n=Hi(n),n!==null)if(i=Cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Mi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Bi=n,null}function na(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ml()){case bi:return 1;case Ur:return 4;case fn:case Jo:return 16;case gl:return 536870912;default:return 16}default:return 16}}var on=null,Ls=null,Qt=null;function ra(){if(Qt)return Qt;var n,i=Ls,a=i.length,c,d="value"in on?on.value:on.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[p-c];c++);return Qt=d.slice(n,1<c?1-c:void 0)}function Ms(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Qn(){return!0}function ia(){return!1}function kt(n){function i(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Qn:ia,this.isPropagationStopped=ia,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=kt(xn),Yn=ee({},xn,{view:0,detail:0}),Oc=kt(Yn),Fs,vr,Gr,$i=ee({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gr&&(Gr&&n.type==="mousemove"?(Fs=n.screenX-Gr.screenX,vr=n.screenY-Gr.screenY):vr=Fs=0,Gr=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:vr}}),Us=kt($i),sa=ee({},$i,{dataTransfer:0}),Cl=kt(sa),js=ee({},Yn,{relatedTarget:0}),zs=kt(js),Pl=ee({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=kt(Pl),kl=ee({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nl=kt(kl),Dl=ee({},xn,{data:0}),oa=kt(Dl),Bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vl[n])?!!i[n]:!1}function Xn(){return xl}var l=ee({},Yn,{key:function(n){if(n.key){var i=Bs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ms(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(n){return n.type==="keypress"?Ms(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ms(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=kt(l),y=ee({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=kt(y),L=ee({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),U=kt(L),J=ee({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=kt(J),_t=ee({},$i,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=kt(_t),It=[9,13,27,32],ut=m&&"CompositionEvent"in window,mn=null;m&&"documentMode"in document&&(mn=document.documentMode);var an=m&&"TextEvent"in window&&!mn,qi=m&&(!ut||mn&&8<mn&&11>=mn),$s=" ",qf=!1;function Hf(n,i){switch(n){case"keyup":return It.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function yE(n,i){switch(n){case"compositionend":return Wf(i);case"keypress":return i.which!==32?null:(qf=!0,$s);case"textInput":return n=i.data,n===$s&&qf?null:n;default:return null}}function _E(n,i){if(qs)return n==="compositionend"||!ut&&Hf(n,i)?(n=ra(),Qt=Ls=on=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qi&&i.locale!=="ko"?null:i.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!vE[n.type]:i==="textarea"}function Kf(n,i,a,c){Wn(c),i=Fl(i,"onChange"),0<i.length&&(a=new bs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var aa=null,la=null;function EE(n){dp(n,0)}function Ol(n){var i=Qs(n);if(hr(i))return n}function wE(n,i){if(n==="change")return i}var Qf=!1;if(m){var Lc;if(m){var Mc="oninput"in document;if(!Mc){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),Mc=typeof Yf.oninput=="function"}Lc=Mc}else Lc=!1;Qf=Lc&&(!document.documentMode||9<document.documentMode)}function Xf(){aa&&(aa.detachEvent("onpropertychange",Jf),la=aa=null)}function Jf(n){if(n.propertyName==="value"&&Ol(la)){var i=[];Kf(i,la,n,Is(n)),Ko(EE,i)}}function TE(n,i,a){n==="focusin"?(Xf(),aa=i,la=a,aa.attachEvent("onpropertychange",Jf)):n==="focusout"&&Xf()}function IE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ol(la)}function SE(n,i){if(n==="click")return Ol(i)}function AE(n,i){if(n==="input"||n==="change")return Ol(i)}function RE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var On=typeof Object.is=="function"?Object.is:RE;function ua(n,i){if(On(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!On(n[d],i[d]))return!1}return!0}function Zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,i){var a=Zf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function tp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?tp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function np(){for(var n=window,i=Gt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Gt(n.document)}return i}function bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function CE(n){var i=np(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&tp(a.ownerDocument.documentElement,a)){if(c!==null&&bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=ep(a,p);var _=ep(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var PE=m&&"documentMode"in document&&11>=document.documentMode,Hs=null,Fc=null,ca=null,Uc=!1;function rp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||Hs==null||Hs!==Gt(c)||(c=Hs,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ca&&ua(ca,c)||(ca=c,c=Fl(Fc,"onSelect"),0<c.length&&(i=new bs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Hs)))}function Ll(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ws={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},jc={},ip={};m&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Ml(n){if(jc[n])return jc[n];if(!Ws[n])return n;var i=Ws[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ip)return jc[n]=i[a];return n}var sp=Ml("animationend"),op=Ml("animationiteration"),ap=Ml("animationstart"),lp=Ml("transitionend"),up=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(n,i){up.set(n,i),u(i,[n])}for(var zc=0;zc<cp.length;zc++){var Bc=cp[zc],kE=Bc.toLowerCase(),NE=Bc[0].toUpperCase()+Bc.slice(1);Kr(kE,"on"+NE)}Kr(sp,"onAnimationEnd"),Kr(op,"onAnimationIteration"),Kr(ap,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(lp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function hp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,dl(c,i,void 0,n),n.currentTarget=null}function dp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var _=c.length-1;0<=_;_--){var T=c[_],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;hp(d,T,F),p=C}else for(_=0;_<c.length;_++){if(T=c[_],C=T.instance,F=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;hp(d,T,F),p=C}}}if(Rn)throw n=Qo,Rn=!1,Qo=null,n}function Ye(n,i){var a=i[Yc];a===void 0&&(a=i[Yc]=new Set);var c=n+"__bubble";a.has(c)||(fp(i,n,2,!1),a.add(c))}function $c(n,i,a){var c=0;i&&(c|=4),fp(a,n,c,i)}var bl="_reactListening"+Math.random().toString(36).slice(2);function da(n){if(!n[bl]){n[bl]=!0,s.forEach(function(a){a!=="selectionchange"&&(DE.has(a)||$c(a,!1,n),$c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[bl]||(i[bl]=!0,$c("selectionchange",!1,i))}}function fp(n,i,a,c){switch(na(i)){case 1:var d=et;break;case 4:d=xc;break;default:d=ta}a=d.bind(null,i,a,n),d=void 0,!Rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function qc(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Hi(T),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Ko(function(){var F=p,G=Is(a),Q=[];e:{var W=up.get(n);if(W!==void 0){var ne=bs,oe=n;switch(n){case"keypress":if(Ms(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":oe="focus",ne=zs;break;case"focusout":oe="blur",ne=zs;break;case"beforeblur":case"afterblur":ne=zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=U;break;case sp:case op:case ap:ne=Er;break;case lp:ne=qe;break;case"scroll":ne=Oc;break;case"wheel":ne=Me;break;case"copy":case"cut":case"paste":ne=Nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=E}var ae=(i&4)!==0,at=!ae&&n==="scroll",M=ae?W!==null?W+"Capture":null:W;ae=[];for(var N=F,b;N!==null;){b=N;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=ot(N,M),X!=null&&ae.push(fa(N,X,b)))),at)break;N=N.return}0<ae.length&&(W=new ne(W,oe,null,a,G),Q.push({event:W,listeners:ae}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",W&&a!==Vi&&(oe=a.relatedTarget||a.fromElement)&&(Hi(oe)||oe[wr]))break e;if((ne||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=F,oe=oe?Hi(oe):null,oe!==null&&(at=Cn(oe),oe!==at||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=F),ne!==oe)){if(ae=Us,X="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,X="onPointerLeave",M="onPointerEnter",N="pointer"),at=ne==null?W:Qs(ne),b=oe==null?W:Qs(oe),W=new ae(X,N+"leave",ne,a,G),W.target=at,W.relatedTarget=b,X=null,Hi(G)===F&&(ae=new ae(M,N+"enter",oe,a,G),ae.target=b,ae.relatedTarget=at,X=ae),at=X,ne&&oe)t:{for(ae=ne,M=oe,N=0,b=ae;b;b=Gs(b))N++;for(b=0,X=M;X;X=Gs(X))b++;for(;0<N-b;)ae=Gs(ae),N--;for(;0<b-N;)M=Gs(M),b--;for(;N--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Gs(ae),M=Gs(M)}ae=null}else ae=null;ne!==null&&pp(Q,W,ne,ae,!1),oe!==null&&at!==null&&pp(Q,at,oe,ae,!0)}}e:{if(W=F?Qs(F):window,ne=W.nodeName&&W.nodeName.toLowerCase(),ne==="select"||ne==="input"&&W.type==="file")var le=wE;else if(Gf(W))if(Qf)le=AE;else{le=IE;var pe=TE}else(ne=W.nodeName)&&ne.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(le=SE);if(le&&(le=le(n,F))){Kf(Q,le,a,G);break e}pe&&pe(n,W,F),n==="focusout"&&(pe=W._wrapperState)&&pe.controlled&&W.type==="number"&&Es(W,"number",W.value)}switch(pe=F?Qs(F):window,n){case"focusin":(Gf(pe)||pe.contentEditable==="true")&&(Hs=pe,Fc=F,ca=null);break;case"focusout":ca=Fc=Hs=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,rp(Q,a,G);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":rp(Q,a,G)}var me;if(ut)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else qs?Hf(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(qi&&a.locale!=="ko"&&(qs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&qs&&(me=ra()):(on=G,Ls="value"in on?on.value:on.textContent,qs=!0)),pe=Fl(F,Ee),0<pe.length&&(Ee=new oa(Ee,n,null,a,G),Q.push({event:Ee,listeners:pe}),me?Ee.data=me:(me=Wf(a),me!==null&&(Ee.data=me)))),(me=an?yE(n,a):_E(n,a))&&(F=Fl(F,"onBeforeInput"),0<F.length&&(G=new oa("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=me))}dp(Q,i)})}function fa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ot(n,a),p!=null&&c.unshift(fa(n,p,d)),p=ot(n,i),p!=null&&c.push(fa(n,p,d))),n=n.return}return c}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,i,a,c,d){for(var p=i._reactName,_=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=ot(a,p),C!=null&&_.unshift(fa(a,C,T))):d||(C=ot(a,p),C!=null&&_.push(fa(a,C,T)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var VE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(VE,`
`).replace(xE,"")}function Ul(n,i,a){if(i=mp(i),mp(n)!==i&&a)throw Error(t(425))}function jl(){}var Hc=null,Wc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,OE=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(ME)}:Kc;function ME(n){setTimeout(function(){throw n})}function Qc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Vn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(i)}function Qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function yp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ks,pa="__reactProps$"+Ks,wr="__reactContainer$"+Ks,Yc="__reactEvents$"+Ks,bE="__reactListeners$"+Ks,FE="__reactHandles$"+Ks;function Hi(n){var i=n[Jn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wr]||a[Jn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=yp(n);n!==null;){if(a=n[Jn])return a;n=yp(n)}return i}n=a,a=n.parentNode}return null}function ma(n){return n=n[Jn]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zl(n){return n[pa]||null}var Xc=[],Ys=-1;function Yr(n){return{current:n}}function Xe(n){0>Ys||(n.current=Xc[Ys],Xc[Ys]=null,Ys--)}function Ke(n,i){Ys++,Xc[Ys]=n.current,n.current=i}var Xr={},Lt=Yr(Xr),Yt=Yr(!1),Wi=Xr;function Xs(n,i){var a=n.type.contextTypes;if(!a)return Xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(n){return n=n.childContextTypes,n!=null}function Bl(){Xe(Yt),Xe(Lt)}function _p(n,i,a){if(Lt.current!==Xr)throw Error(t(168));Ke(Lt,i),Ke(Yt,a)}function vp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Fe(n)||"Unknown",d));return ee({},a,c)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Wi=Lt.current,Ke(Lt,n),Ke(Yt,Yt.current),!0}function Ep(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vp(n,i,Wi),c.__reactInternalMemoizedMergedChildContext=n,Xe(Yt),Xe(Lt),Ke(Lt,n)):Xe(Yt),Ke(Yt,a)}var Tr=null,ql=!1,Jc=!1;function wp(n){Tr===null?Tr=[n]:Tr.push(n)}function UE(n){ql=!0,wp(n)}function Jr(){if(!Jc&&Tr!==null){Jc=!0;var n=0,i=Oe;try{var a=Tr;for(Oe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Tr=null,ql=!1}catch(d){throw Tr!==null&&(Tr=Tr.slice(n+1)),Ns(bi,Jr),d}finally{Oe=i,Jc=!1}}return null}var Js=[],Zs=0,Hl=null,Wl=0,gn=[],yn=0,Gi=null,Ir=1,Sr="";function Ki(n,i){Js[Zs++]=Wl,Js[Zs++]=Hl,Hl=n,Wl=i}function Tp(n,i,a){gn[yn++]=Ir,gn[yn++]=Sr,gn[yn++]=Gi,Gi=n;var c=Ir;n=Sr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var p=32-$t(i)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Ir=1<<32-$t(i)+d|a<<d|c,Sr=p+n}else Ir=1<<p|a<<d|c,Sr=n}function Zc(n){n.return!==null&&(Ki(n,1),Tp(n,1,0))}function eh(n){for(;n===Hl;)Hl=Js[--Zs],Js[Zs]=null,Wl=Js[--Zs],Js[Zs]=null;for(;n===Gi;)Gi=gn[--yn],gn[yn]=null,Sr=gn[--yn],gn[yn]=null,Ir=gn[--yn],gn[yn]=null}var ln=null,un=null,tt=!1,Ln=null;function Ip(n,i){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Sp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ln=n,un=Qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ln=n,un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gi!==null?{id:Ir,overflow:Sr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function th(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nh(n){if(tt){var i=un;if(i){var a=i;if(!Sp(n,i)){if(th(n))throw Error(t(418));i=Qr(a.nextSibling);var c=ln;i&&Sp(n,i)?Ip(c,a):(n.flags=n.flags&-4097|2,tt=!1,ln=n)}}else{if(th(n))throw Error(t(418));n.flags=n.flags&-4097|2,tt=!1,ln=n}}}function Ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function Gl(n){if(n!==ln)return!1;if(!tt)return Ap(n),tt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=un)){if(th(n))throw Rp(),Error(t(418));for(;i;)Ip(n,i),i=Qr(i.nextSibling)}if(Ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){un=Qr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}un=null}}else un=ln?Qr(n.stateNode.nextSibling):null;return!0}function Rp(){for(var n=un;n;)n=Qr(n.nextSibling)}function eo(){un=ln=null,tt=!1}function rh(n){Ln===null?Ln=[n]:Ln.push(n)}var jE=Ie.ReactCurrentBatchConfig;function ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Kl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Cp(n){var i=n._init;return i(n._payload)}function Pp(n){function i(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)i(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=oi(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,b,X){return N===null||N.tag!==6?(N=Kh(b,M.mode,X),N.return=M,N):(N=d(N,b),N.return=M,N)}function C(M,N,b,X){var le=b.type;return le===D?G(M,N,b.props.children,X,b.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===mt&&Cp(le)===N.type)?(X=d(N,b.props),X.ref=ga(M,N,b),X.return=M,X):(X=_u(b.type,b.key,b.props,null,M.mode,X),X.ref=ga(M,N,b),X.return=M,X)}function F(M,N,b,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Qh(b,M.mode,X),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function G(M,N,b,X,le){return N===null||N.tag!==7?(N=ns(b,M.mode,X,le),N.return=M,N):(N=d(N,b),N.return=M,N)}function Q(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Kh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case $e:return b=_u(N.type,N.key,N.props,null,M.mode,b),b.ref=ga(M,null,N),b.return=M,b;case Re:return N=Qh(N,M.mode,b),N.return=M,N;case mt:var X=N._init;return Q(M,X(N._payload),b)}if(dr(N)||ce(N))return N=ns(N,M.mode,b,null),N.return=M,N;Kl(M,N)}return null}function W(M,N,b,X){var le=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,N,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $e:return b.key===le?C(M,N,b,X):null;case Re:return b.key===le?F(M,N,b,X):null;case mt:return le=b._init,W(M,N,le(b._payload),X)}if(dr(b)||ce(b))return le!==null?null:G(M,N,b,X,null);Kl(M,b)}return null}function ne(M,N,b,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,T(N,M,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $e:return M=M.get(X.key===null?b:X.key)||null,C(N,M,X,le);case Re:return M=M.get(X.key===null?b:X.key)||null,F(N,M,X,le);case mt:var pe=X._init;return ne(M,N,b,pe(X._payload),le)}if(dr(X)||ce(X))return M=M.get(b)||null,G(N,M,X,le,null);Kl(N,X)}return null}function oe(M,N,b,X){for(var le=null,pe=null,me=N,Ee=N=0,Rt=null;me!==null&&Ee<b.length;Ee++){me.index>Ee?(Rt=me,me=null):Rt=me.sibling;var je=W(M,me,b[Ee],X);if(je===null){me===null&&(me=Rt);break}n&&me&&je.alternate===null&&i(M,me),N=p(je,N,Ee),pe===null?le=je:pe.sibling=je,pe=je,me=Rt}if(Ee===b.length)return a(M,me),tt&&Ki(M,Ee),le;if(me===null){for(;Ee<b.length;Ee++)me=Q(M,b[Ee],X),me!==null&&(N=p(me,N,Ee),pe===null?le=me:pe.sibling=me,pe=me);return tt&&Ki(M,Ee),le}for(me=c(M,me);Ee<b.length;Ee++)Rt=ne(me,M,Ee,b[Ee],X),Rt!==null&&(n&&Rt.alternate!==null&&me.delete(Rt.key===null?Ee:Rt.key),N=p(Rt,N,Ee),pe===null?le=Rt:pe.sibling=Rt,pe=Rt);return n&&me.forEach(function(ai){return i(M,ai)}),tt&&Ki(M,Ee),le}function ae(M,N,b,X){var le=ce(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var pe=le=null,me=N,Ee=N=0,Rt=null,je=b.next();me!==null&&!je.done;Ee++,je=b.next()){me.index>Ee?(Rt=me,me=null):Rt=me.sibling;var ai=W(M,me,je.value,X);if(ai===null){me===null&&(me=Rt);break}n&&me&&ai.alternate===null&&i(M,me),N=p(ai,N,Ee),pe===null?le=ai:pe.sibling=ai,pe=ai,me=Rt}if(je.done)return a(M,me),tt&&Ki(M,Ee),le;if(me===null){for(;!je.done;Ee++,je=b.next())je=Q(M,je.value,X),je!==null&&(N=p(je,N,Ee),pe===null?le=je:pe.sibling=je,pe=je);return tt&&Ki(M,Ee),le}for(me=c(M,me);!je.done;Ee++,je=b.next())je=ne(me,M,Ee,je.value,X),je!==null&&(n&&je.alternate!==null&&me.delete(je.key===null?Ee:je.key),N=p(je,N,Ee),pe===null?le=je:pe.sibling=je,pe=je);return n&&me.forEach(function(vw){return i(M,vw)}),tt&&Ki(M,Ee),le}function at(M,N,b,X){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case $e:e:{for(var le=b.key,pe=N;pe!==null;){if(pe.key===le){if(le=b.type,le===D){if(pe.tag===7){a(M,pe.sibling),N=d(pe,b.props.children),N.return=M,M=N;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===mt&&Cp(le)===pe.type){a(M,pe.sibling),N=d(pe,b.props),N.ref=ga(M,pe,b),N.return=M,M=N;break e}a(M,pe);break}else i(M,pe);pe=pe.sibling}b.type===D?(N=ns(b.props.children,M.mode,X,b.key),N.return=M,M=N):(X=_u(b.type,b.key,b.props,null,M.mode,X),X.ref=ga(M,N,b),X.return=M,M=X)}return _(M);case Re:e:{for(pe=b.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else i(M,N);N=N.sibling}N=Qh(b,M.mode,X),N.return=M,M=N}return _(M);case mt:return pe=b._init,at(M,N,pe(b._payload),X)}if(dr(b))return oe(M,N,b,X);if(ce(b))return ae(M,N,b,X);Kl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Kh(b,M.mode,X),N.return=M,M=N),_(M)):a(M,N)}return at}var to=Pp(!0),kp=Pp(!1),Ql=Yr(null),Yl=null,no=null,ih=null;function sh(){ih=no=Yl=null}function oh(n){var i=Ql.current;Xe(Ql),n._currentValue=i}function ah(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ro(n,i){Yl=n,ih=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jt=!0),n.firstContext=null)}function _n(n){var i=n._currentValue;if(ih!==n)if(n={context:n,memoizedValue:i,next:null},no===null){if(Yl===null)throw Error(t(308));no=n,Yl.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return i}var Qi=null;function lh(n){Qi===null?Qi=[n]:Qi.push(n)}function Np(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,lh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ar(n,c)}function Ar(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Zr=!1;function uh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ei(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ue&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ar(n,a)}return d=c.interleaved,d===null?(i.next=i,lh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ar(n,a)}function Xl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,$r(n,a)}}function Vp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jl(n,i,a,c){var d=n.updateQueue;Zr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,_===null?p=F:_.next=F,_=C;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==_&&(T===null?G.firstBaseUpdate=F:T.next=F,G.lastBaseUpdate=C))}if(p!==null){var Q=d.baseState;_=0,G=F=C=null,T=p;do{var W=T.lane,ne=T.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:ne,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(W=i,ne=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Q=oe.call(ne,Q,W);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,W=typeof oe=="function"?oe.call(ne,Q,W):oe,W==null)break e;Q=ee({},Q,W);break e;case 2:Zr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else ne={eventTime:ne,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(F=G=ne,C=Q):G=G.next=ne,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ji|=_,n.lanes=_,n.memoizedState=Q}}function xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ya={},Zn=Yr(ya),_a=Yr(ya),va=Yr(ya);function Yi(n){if(n===ya)throw Error(t(174));return n}function ch(n,i){switch(Ke(va,i),Ke(_a,n),Ke(Zn,ya),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:yt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=yt(i,n)}Xe(Zn),Ke(Zn,i)}function io(){Xe(Zn),Xe(_a),Xe(va)}function Op(n){Yi(va.current);var i=Yi(Zn.current),a=yt(i,n.type);i!==a&&(Ke(_a,n),Ke(Zn,a))}function hh(n){_a.current===n&&(Xe(Zn),Xe(_a))}var nt=Yr(0);function Zl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var dh=[];function fh(){for(var n=0;n<dh.length;n++)dh[n]._workInProgressVersionPrimary=null;dh.length=0}var eu=Ie.ReactCurrentDispatcher,ph=Ie.ReactCurrentBatchConfig,Xi=0,rt=null,vt=null,St=null,tu=!1,Ea=!1,wa=0,zE=0;function Mt(){throw Error(t(321))}function mh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!On(n[a],i[a]))return!1;return!0}function gh(n,i,a,c,d,p){if(Xi=p,rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,eu.current=n===null||n.memoizedState===null?HE:WE,n=a(c,d),Ea){p=0;do{if(Ea=!1,wa=0,25<=p)throw Error(t(301));p+=1,St=vt=null,i.updateQueue=null,eu.current=GE,n=a(c,d)}while(Ea)}if(eu.current=iu,i=vt!==null&&vt.next!==null,Xi=0,St=vt=rt=null,tu=!1,i)throw Error(t(300));return n}function yh(){var n=wa!==0;return wa=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?rt.memoizedState=St=n:St=St.next=n,St}function vn(){if(vt===null){var n=rt.alternate;n=n!==null?n.memoizedState:null}else n=vt.next;var i=St===null?rt.memoizedState:St.next;if(i!==null)St=i,vt=n;else{if(n===null)throw Error(t(310));vt=n,n={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?rt.memoizedState=St=n:St=St.next=n}return St}function Ta(n,i){return typeof i=="function"?i(n):i}function _h(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,C=null,F=p;do{var G=F.lane;if((Xi&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,_=c):C=C.next=Q,rt.lanes|=G,Ji|=G}F=F.next}while(F!==null&&F!==p);C===null?_=c:C.next=T,On(c,i.memoizedState)||(Jt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,rt.lanes|=p,Ji|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function vh(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);On(p,i.memoizedState)||(Jt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Lp(){}function Mp(n,i){var a=rt,c=vn(),d=i(),p=!On(c.memoizedState,d);if(p&&(c.memoizedState=d,Jt=!0),c=c.queue,Eh(Up.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Fp.bind(null,a,c,d,i),void 0,null),At===null)throw Error(t(349));(Xi&30)!==0||bp(a,i,d)}return d}function bp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=rt.updateQueue,i===null?(i={lastEffect:null,stores:null},rt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Fp(n,i,a,c){i.value=a,i.getSnapshot=c,jp(i)&&zp(n)}function Up(n,i,a){return a(function(){jp(i)&&zp(n)})}function jp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!On(n,a)}catch{return!0}}function zp(n){var i=Ar(n,1);i!==null&&Un(i,n,1,-1)}function Bp(n){var i=er();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i.queue=n,n=n.dispatch=qE.bind(null,rt,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=rt.updateQueue,i===null?(i={lastEffect:null,stores:null},rt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function $p(){return vn().memoizedState}function nu(n,i,a,c){var d=er();rt.flags|=n,d.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function ru(n,i,a,c){var d=vn();c=c===void 0?null:c;var p=void 0;if(vt!==null){var _=vt.memoizedState;if(p=_.destroy,c!==null&&mh(c,_.deps)){d.memoizedState=Ia(i,a,p,c);return}}rt.flags|=n,d.memoizedState=Ia(1|i,a,p,c)}function qp(n,i){return nu(8390656,8,n,i)}function Eh(n,i){return ru(2048,8,n,i)}function Hp(n,i){return ru(4,2,n,i)}function Wp(n,i){return ru(4,4,n,i)}function Gp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Kp(n,i,a){return a=a!=null?a.concat([n]):null,ru(4,4,Gp.bind(null,i,n),a)}function wh(){}function Qp(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Yp(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Xp(n,i,a){return(Xi&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(On(a,i)||(a=ji(),rt.lanes|=a,Ji|=a,n.baseState=!0),i)}function BE(n,i){var a=Oe;Oe=a!==0&&4>a?a:4,n(!0);var c=ph.transition;ph.transition={};try{n(!1),i()}finally{Oe=a,ph.transition=c}}function Jp(){return vn().memoizedState}function $E(n,i,a){var c=ii(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zp(n))em(i,a);else if(a=Np(n,i,a,c),a!==null){var d=Wt();Un(a,n,c,d),tm(a,i,c)}}function qE(n,i,a){var c=ii(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zp(n))em(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var _=i.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,On(T,_)){var C=i.interleaved;C===null?(d.next=d,lh(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Np(n,i,d,c),a!==null&&(d=Wt(),Un(a,n,c,d),tm(a,i,c))}}function Zp(n){var i=n.alternate;return n===rt||i!==null&&i===rt}function em(n,i){Ea=tu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function tm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,$r(n,a)}}var iu={readContext:_n,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},HE={readContext:_n,useCallback:function(n,i){return er().memoizedState=[n,i===void 0?null:i],n},useContext:_n,useEffect:qp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,nu(4194308,4,Gp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return nu(4194308,4,n,i)},useInsertionEffect:function(n,i){return nu(4,2,n,i)},useMemo:function(n,i){var a=er();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=er();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=$E.bind(null,rt,n),[c.memoizedState,n]},useRef:function(n){var i=er();return n={current:n},i.memoizedState=n},useState:Bp,useDebugValue:wh,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=Bp(!1),i=n[0];return n=BE.bind(null,n[1]),er().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=rt,d=er();if(tt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),At===null)throw Error(t(349));(Xi&30)!==0||bp(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,qp(Up.bind(null,c,p,n),[n]),c.flags|=2048,Ia(9,Fp.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=er(),i=At.identifierPrefix;if(tt){var a=Sr,c=Ir;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=zE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},WE={readContext:_n,useCallback:Qp,useContext:_n,useEffect:Eh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Yp,useReducer:_h,useRef:$p,useState:function(){return _h(Ta)},useDebugValue:wh,useDeferredValue:function(n){var i=vn();return Xp(i,vt.memoizedState,n)},useTransition:function(){var n=_h(Ta)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Lp,useSyncExternalStore:Mp,useId:Jp,unstable_isNewReconciler:!1},GE={readContext:_n,useCallback:Qp,useContext:_n,useEffect:Eh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Yp,useReducer:vh,useRef:$p,useState:function(){return vh(Ta)},useDebugValue:wh,useDeferredValue:function(n){var i=vn();return vt===null?i.memoizedState=n:Xp(i,vt.memoizedState,n)},useTransition:function(){var n=vh(Ta)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Lp,useSyncExternalStore:Mp,useId:Jp,unstable_isNewReconciler:!1};function Mn(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Th(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ii(n),p=Rr(c,d);p.payload=i,a!=null&&(p.callback=a),i=ei(n,p,d),i!==null&&(Un(i,n,d,c),Xl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ii(n),p=Rr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ei(n,p,d),i!==null&&(Un(i,n,d,c),Xl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=ii(n),d=Rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ei(n,d,c),i!==null&&(Un(i,n,c,a),Xl(i,n,c))}};function nm(n,i,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):i.prototype&&i.prototype.isPureReactComponent?!ua(a,c)||!ua(d,p):!0}function rm(n,i,a){var c=!1,d=Xr,p=i.contextType;return typeof p=="object"&&p!==null?p=_n(p):(d=Xt(i)?Wi:Lt.current,c=i.contextTypes,p=(c=c!=null)?Xs(n,d):Xr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=su,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function im(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&su.enqueueReplaceState(i,i.state,null)}function Ih(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},uh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=_n(p):(p=Xt(i)?Wi:Lt.current,d.context=Xs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Th(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&su.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Sh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ah(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var KE=typeof WeakMap=="function"?WeakMap:Map;function sm(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){du||(du=!0,jh=c),Ah(n,i)},a}function om(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ah(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Ah(n,i),typeof c!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function am(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new KE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=lw.bind(null,n,i,a),i.then(n,n))}function lm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function um(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,ei(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var QE=Ie.ReactCurrentOwner,Jt=!1;function Ht(n,i,a,c){i.child=n===null?kp(i,null,a,c):to(i,n.child,a,c)}function cm(n,i,a,c,d){a=a.render;var p=i.ref;return ro(i,d),c=gh(n,i,a,c,p,d),a=yh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(tt&&a&&Zc(i),i.flags|=1,Ht(n,i,c,d),i.child)}function hm(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Gh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,dm(n,i,p,c,d)):(n=_u(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(_,c)&&n.ref===i.ref)return Cr(n,i,d)}return i.flags|=1,n=oi(p,c),n.ref=i.ref,n.return=i,i.child=n}function dm(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(ua(p,c)&&n.ref===i.ref)if(Jt=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return i.lanes=n.lanes,Cr(n,i,d)}return Rh(n,i,a,c,d)}function fm(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(ao,cn),cn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ke(ao,cn),cn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ke(ao,cn),cn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Ke(ao,cn),cn|=c;return Ht(n,i,d,a),i.child}function pm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Rh(n,i,a,c,d){var p=Xt(a)?Wi:Lt.current;return p=Xs(i,p),ro(i,d),a=gh(n,i,a,c,p,d),c=yh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(tt&&c&&Zc(i),i.flags|=1,Ht(n,i,a,d),i.child)}function mm(n,i,a,c,d){if(Xt(a)){var p=!0;$l(i)}else p=!1;if(ro(i,d),i.stateNode===null)au(n,i),rm(i,a,c),Ih(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,T=i.memoizedProps;_.props=T;var C=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=_n(F):(F=Xt(a)?Wi:Lt.current,F=Xs(i,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||C!==F)&&im(i,_,c,F),Zr=!1;var W=i.memoizedState;_.state=W,Jl(i,c,_,d),C=i.memoizedState,T!==c||W!==C||Yt.current||Zr?(typeof G=="function"&&(Th(i,a,G,c),C=i.memoizedState),(T=Zr||nm(i,a,T,c,W,C,F))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),_.props=c,_.state=C,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,Dp(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:Mn(i.type,T),_.props=F,Q=i.pendingProps,W=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=_n(C):(C=Xt(a)?Wi:Lt.current,C=Xs(i,C));var ne=a.getDerivedStateFromProps;(G=typeof ne=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||W!==C)&&im(i,_,c,C),Zr=!1,W=i.memoizedState,_.state=W,Jl(i,c,_,d);var oe=i.memoizedState;T!==Q||W!==oe||Yt.current||Zr?(typeof ne=="function"&&(Th(i,a,ne,c),oe=i.memoizedState),(F=Zr||nm(i,a,F,c,W,oe,C)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,C)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),_.props=c,_.state=oe,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Ch(n,i,a,c,p,d)}function Ch(n,i,a,c,d,p){pm(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&Ep(i,a,!1),Cr(n,i,p);c=i.stateNode,QE.current=i;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=to(i,n.child,null,p),i.child=to(i,null,T,p)):Ht(n,i,T,p),i.memoizedState=c.state,d&&Ep(i,a,!0),i.child}function gm(n){var i=n.stateNode;i.pendingContext?_p(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_p(n,i.context,!1),ch(n,i.containerInfo)}function ym(n,i,a,c,d){return eo(),rh(d),i.flags|=256,Ht(n,i,a,c),i.child}var Ph={dehydrated:null,treeContext:null,retryLane:0};function kh(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,i,a){var c=i.pendingProps,d=nt.current,p=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ke(nt,d&1),n===null)return nh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=i.mode,p=i.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=vu(_,c,0,null),n=ns(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=kh(a),i.memoizedState=Ph,n):Nh(i,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return YE(n,i,_,c,T,d,a);if(p){p=c.fallback,_=i.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=oi(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=oi(T,p):(p=ns(p,_,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,_=n.child.memoizedState,_=_===null?kh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,i.memoizedState=Ph,c}return p=n.child,n=p.sibling,c=oi(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Nh(n,i){return i=vu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ou(n,i,a,c){return c!==null&&rh(c),to(i,n.child,null,a),n=Nh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function YE(n,i,a,c,d,p,_){if(a)return i.flags&256?(i.flags&=-257,c=Sh(Error(t(422))),ou(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=vu({mode:"visible",children:c.children},d,0,null),p=ns(p,d,_,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&to(i,n.child,null,_),i.child.memoizedState=kh(_),i.memoizedState=Ph,p);if((i.mode&1)===0)return ou(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Sh(p,c,void 0),ou(n,i,_,c)}if(T=(_&n.childLanes)!==0,Jt||T){if(c=At,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ar(n,d),Un(c,n,d,-1))}return Wh(),c=Sh(Error(t(421))),ou(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=uw.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,un=Qr(d.nextSibling),ln=i,tt=!0,Ln=null,n!==null&&(gn[yn++]=Ir,gn[yn++]=Sr,gn[yn++]=Gi,Ir=n.id,Sr=n.overflow,Gi=i),i=Nh(i,c.children),i.flags|=4096,i)}function vm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ah(n.return,i,a)}function Dh(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Em(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Ht(n,i,c.children,a),c=nt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vm(n,a,i);else if(n.tag===19)vm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ke(nt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Zl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Dh(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Zl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Dh(i,!0,a,null,p);break;case"together":Dh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function au(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ji|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=oi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=oi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function XE(n,i,a){switch(i.tag){case 3:gm(i),eo();break;case 5:Op(i);break;case 1:Xt(i.type)&&$l(i);break;case 4:ch(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ke(Ql,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ke(nt,nt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?_m(n,i,a):(Ke(nt,nt.current&1),n=Cr(n,i,a),n!==null?n.sibling:null);Ke(nt,nt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Em(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(nt,nt.current),c)break;return null;case 22:case 23:return i.lanes=0,fm(n,i,a)}return Cr(n,i,a)}var wm,Vh,Tm,Im;wm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Vh=function(){},Tm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Yi(Zn.current);var p=null;switch(a){case"input":d=ki(n,d),c=ki(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=Fo(n,d),c=Fo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=jl)}qo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&T[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&Ye("scroll",n),p||T===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},Im=function(n,i,a,c){a!==c&&(i.flags|=4)};function Sa(n,i){if(!tt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function JE(n,i,a){var c=i.pendingProps;switch(eh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(i),null;case 1:return Xt(i.type)&&Bl(),bt(i),null;case 3:return c=i.stateNode,io(),Xe(Yt),Xe(Lt),fh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ln!==null&&($h(Ln),Ln=null))),Vh(n,i),bt(i),null;case 5:hh(i);var d=Yi(va.current);if(a=i.type,n!==null&&i.stateNode!=null)Tm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bt(i),null}if(n=Yi(Zn.current),Gl(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Jn]=i,c[pa]=p,n=(i.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<ha.length;d++)Ye(ha[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":vs(c,p),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ye("invalid",c);break;case"textarea":ws(c,p),Ye("invalid",c)}qo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Ul(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Ul(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Ye("scroll",c)}switch(a){case"input":Ze(c),hl(c,p,!0);break;case"textarea":Ze(c),Uo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=jl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Jn]=i,n[pa]=c,wm(n,i,!1,!1),i.stateNode=n;e:{switch(_=Ho(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<ha.length;d++)Ye(ha[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":vs(n,c),d=ki(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":ws(n,c),d=Fo(n,c),Ye("invalid",n);break;default:d=c}qo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?Bo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&jo(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Fr(n,C):typeof C=="number"&&Fr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Ye("scroll",n):C!=null&&ge(n,p,C,_))}switch(a){case"input":Ze(n),hl(n,c,!1);break;case"textarea":Ze(n),Uo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+te(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?fr(n,!!c.multiple,p,!1):c.defaultValue!=null&&fr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bt(i),null;case 6:if(n&&i.stateNode!=null)Im(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yi(va.current),Yi(Zn.current),Gl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Jn]=i,(p=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:Ul(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ul(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=i,i.stateNode=c}return bt(i),null;case 13:if(Xe(nt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tt&&un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Rp(),eo(),i.flags|=98560,p=!1;else if(p=Gl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Jn]=i}else eo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bt(i),p=!1}else Ln!==null&&($h(Ln),Ln=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(nt.current&1)!==0?Et===0&&(Et=3):Wh())),i.updateQueue!==null&&(i.flags|=4),bt(i),null);case 4:return io(),Vh(n,i),n===null&&da(i.stateNode.containerInfo),bt(i),null;case 10:return oh(i.type._context),bt(i),null;case 17:return Xt(i.type)&&Bl(),bt(i),null;case 19:if(Xe(nt),p=i.memoizedState,p===null)return bt(i),null;if(c=(i.flags&128)!==0,_=p.rendering,_===null)if(c)Sa(p,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=Zl(n),_!==null){for(i.flags|=128,Sa(p,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ke(nt,nt.current&1|2),i.child}n=n.sibling}p.tail!==null&&Ge()>lo&&(i.flags|=128,c=!0,Sa(p,!1),i.lanes=4194304)}else{if(!c)if(n=Zl(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!tt)return bt(i),null}else 2*Ge()-p.renderingStartTime>lo&&a!==1073741824&&(i.flags|=128,c=!0,Sa(p,!1),i.lanes=4194304);p.isBackwards?(_.sibling=i.child,i.child=_):(a=p.last,a!==null?a.sibling=_:i.child=_,p.last=_)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ge(),i.sibling=null,a=nt.current,Ke(nt,c?a&1|2:a&1),i):(bt(i),null);case 22:case 23:return Hh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(cn&1073741824)!==0&&(bt(i),i.subtreeFlags&6&&(i.flags|=8192)):bt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ZE(n,i){switch(eh(i),i.tag){case 1:return Xt(i.type)&&Bl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return io(),Xe(Yt),Xe(Lt),fh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return hh(i),null;case 13:if(Xe(nt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));eo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xe(nt),null;case 4:return io(),null;case 10:return oh(i.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var lu=!1,Ft=!1,ew=typeof WeakSet=="function"?WeakSet:Set,se=null;function oo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,i,c)}else a.current=null}function xh(n,i,a){try{a()}catch(c){st(n,i,c)}}var Sm=!1;function tw(n,i){if(Hc=Wr,n=np(),bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,C=-1,F=0,G=0,Q=n,W=null;t:for(;;){for(var ne;Q!==a||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||c!==0&&Q.nodeType!==3||(C=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)W=Q,Q=ne;for(;;){if(Q===n)break t;if(W===a&&++F===d&&(T=_),W===p&&++G===c&&(C=_),(ne=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=ne}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wc={focusedElem:n,selectionRange:a},Wr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,at=oe.memoizedState,M=i.stateNode,N=M.getSnapshotBeforeUpdate(i.elementType===i.type?ae:Mn(i.type,ae),at);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){st(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=Sm,Sm=!1,oe}function Aa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&xh(i,a,p)}d=d.next}while(d!==c)}}function uu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Oh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Am(n){var i=n.alternate;i!==null&&(n.alternate=null,Am(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Jn],delete i[pa],delete i[Yc],delete i[bE],delete i[FE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rm(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=jl));else if(c!==4&&(n=n.child,n!==null))for(Lh(n,i,a),n=n.sibling;n!==null;)Lh(n,i,a),n=n.sibling}function Mh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mh(n,i,a),n=n.sibling;n!==null;)Mh(n,i,a),n=n.sibling}var Nt=null,bn=!1;function ti(n,i,a){for(a=a.child;a!==null;)Pm(n,i,a),a=a.sibling}function Pm(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Fi,a)}catch{}switch(a.tag){case 5:Ft||oo(a,i);case 6:var c=Nt,d=bn;Nt=null,ti(n,i,a),Nt=c,bn=d,Nt!==null&&(bn?(n=Nt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(bn?(n=Nt,a=a.stateNode,n.nodeType===8?Qc(n.parentNode,a):n.nodeType===1&&Qc(n,a),Vn(n)):Qc(Nt,a.stateNode));break;case 4:c=Nt,d=bn,Nt=a.stateNode.containerInfo,bn=!0,ti(n,i,a),Nt=c,bn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&xh(a,i,_),d=d.next}while(d!==c)}ti(n,i,a);break;case 1:if(!Ft&&(oo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){st(a,i,T)}ti(n,i,a);break;case 21:ti(n,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,ti(n,i,a),Ft=c):ti(n,i,a);break;default:ti(n,i,a)}}function km(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ew),i.forEach(function(c){var d=cw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Fn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 5:Nt=T.stateNode,bn=!1;break e;case 3:Nt=T.stateNode.containerInfo,bn=!0;break e;case 4:Nt=T.stateNode.containerInfo,bn=!0;break e}T=T.return}if(Nt===null)throw Error(t(160));Pm(p,_,d),Nt=null,bn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){st(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Nm(i,n),i=i.sibling}function Nm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fn(i,n),tr(n),c&4){try{Aa(3,n,n.return),uu(3,n)}catch(ae){st(n,n.return,ae)}try{Aa(5,n,n.return)}catch(ae){st(n,n.return,ae)}}break;case 1:Fn(i,n),tr(n),c&512&&a!==null&&oo(a,a.return);break;case 5:if(Fn(i,n),tr(n),c&512&&a!==null&&oo(a,a.return),n.flags&32){var d=n.stateNode;try{Fr(d,"")}catch(ae){st(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Mo(d,p),Ho(T,_);var F=Ho(T,p);for(_=0;_<C.length;_+=2){var G=C[_],Q=C[_+1];G==="style"?Bo(d,Q):G==="dangerouslySetInnerHTML"?jo(d,Q):G==="children"?Fr(d,Q):ge(d,G,Q,F)}switch(T){case"input":bo(d,p);break;case"textarea":Ts(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?fr(d,!!p.multiple,ne,!1):W!==!!p.multiple&&(p.defaultValue!=null?fr(d,!!p.multiple,p.defaultValue,!0):fr(d,!!p.multiple,p.multiple?[]:"",!1))}d[pa]=p}catch(ae){st(n,n.return,ae)}}break;case 6:if(Fn(i,n),tr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){st(n,n.return,ae)}}break;case 3:if(Fn(i,n),tr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(i.containerInfo)}catch(ae){st(n,n.return,ae)}break;case 4:Fn(i,n),tr(n);break;case 13:Fn(i,n),tr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Uh=Ge())),c&4&&km(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(F=Ft)||G,Fn(i,n),Ft=F):Fn(i,n),tr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(se=n,G=n.child;G!==null;){for(Q=se=G;se!==null;){switch(W=se,ne=W.child,W.tag){case 0:case 11:case 14:case 15:Aa(4,W,W.return);break;case 1:oo(W,W.return);var oe=W.stateNode;if(typeof oe.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(ae){st(c,a,ae)}}break;case 5:oo(W,W.return);break;case 22:if(W.memoizedState!==null){xm(Q);continue}}ne!==null?(ne.return=W,se=ne):xm(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=zo("display",_))}catch(ae){st(n,n.return,ae)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(ae){st(n,n.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Fn(i,n),tr(n),c&4&&km(n);break;case 21:break;default:Fn(i,n),tr(n)}}function tr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Fr(d,""),c.flags&=-33);var p=Cm(n);Mh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Cm(n);Lh(n,T,_);break;default:throw Error(t(161))}}catch(C){st(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function nw(n,i,a){se=n,Dm(n)}function Dm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||lu;if(!_){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Ft;T=lu;var F=Ft;if(lu=_,(Ft=C)&&!F)for(se=d;se!==null;)_=se,C=_.child,_.tag===22&&_.memoizedState!==null?Om(d):C!==null?(C.return=_,se=C):Om(d);for(;p!==null;)se=p,Dm(p),p=p.sibling;se=d,lu=T,Ft=F}Vm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Vm(n)}}function Vm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||uu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Mn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&xp(i,p,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xp(i,_,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Vn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&Oh(i)}catch(W){st(i,i.return,W)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function xm(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Om(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{uu(4,i)}catch(C){st(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){st(i,d,C)}}var p=i.return;try{Oh(i)}catch(C){st(i,p,C)}break;case 5:var _=i.return;try{Oh(i)}catch(C){st(i,_,C)}}}catch(C){st(i,i.return,C)}if(i===n){se=null;break}var T=i.sibling;if(T!==null){T.return=i.return,se=T;break}se=i.return}}var rw=Math.ceil,cu=Ie.ReactCurrentDispatcher,bh=Ie.ReactCurrentOwner,En=Ie.ReactCurrentBatchConfig,Ue=0,At=null,ct=null,Dt=0,cn=0,ao=Yr(0),Et=0,Ra=null,Ji=0,hu=0,Fh=0,Ca=null,Zt=null,Uh=0,lo=1/0,Pr=null,du=!1,jh=null,ni=null,fu=!1,ri=null,pu=0,Pa=0,zh=null,mu=-1,gu=0;function Wt(){return(Ue&6)!==0?Ge():mu!==-1?mu:mu=Ge()}function ii(n){return(n.mode&1)===0?1:(Ue&2)!==0&&Dt!==0?Dt&-Dt:jE.transition!==null?(gu===0&&(gu=ji()),gu):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:na(n.type)),n)}function Un(n,i,a,c){if(50<Pa)throw Pa=0,zh=null,Error(t(185));Br(n,a,c),((Ue&2)===0||n!==At)&&(n===At&&((Ue&2)===0&&(hu|=a),Et===4&&si(n,Dt)),en(n,c),a===1&&Ue===0&&(i.mode&1)===0&&(lo=Ge()+500,ql&&Jr()))}function en(n,i){var a=n.callbackNode;gr(n,i);var c=Ui(n,n===At?Dt:0);if(c===0)a!==null&&Xo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Xo(a),i===1)n.tag===0?UE(Mm.bind(null,n)):wp(Mm.bind(null,n)),LE(function(){(Ue&6)===0&&Jr()}),a=null;else{switch(qr(c)){case 1:a=bi;break;case 4:a=Ur;break;case 16:a=fn;break;case 536870912:a=gl;break;default:a=fn}a=qm(a,Lm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Lm(n,i){if(mu=-1,gu=0,(Ue&6)!==0)throw Error(t(327));var a=n.callbackNode;if(uo()&&n.callbackNode!==a)return null;var c=Ui(n,n===At?Dt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=yu(n,c);else{i=c;var d=Ue;Ue|=2;var p=Fm();(At!==n||Dt!==i)&&(Pr=null,lo=Ge()+500,es(n,i));do try{ow();break}catch(T){bm(n,T)}while(!0);sh(),cu.current=p,Ue=d,ct!==null?i=0:(At=null,Dt=0,i=Et)}if(i!==0){if(i===2&&(d=sn(n),d!==0&&(c=d,i=Bh(n,d))),i===1)throw a=Ra,es(n,0),si(n,c),en(n,Ge()),a;if(i===6)si(n,c);else{if(d=n.current.alternate,(c&30)===0&&!iw(d)&&(i=yu(n,c),i===2&&(p=sn(n),p!==0&&(c=p,i=Bh(n,p))),i===1))throw a=Ra,es(n,0),si(n,c),en(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ts(n,Zt,Pr);break;case 3:if(si(n,c),(c&130023424)===c&&(i=Uh+500-Ge(),10<i)){if(Ui(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Kc(ts.bind(null,n,Zt,Pr),i);break}ts(n,Zt,Pr);break;case 4:if(si(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-$t(c);p=1<<_,_=i[_],_>d&&(d=_),c&=~p}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rw(c/1960))-c,10<c){n.timeoutHandle=Kc(ts.bind(null,n,Zt,Pr),c);break}ts(n,Zt,Pr);break;case 5:ts(n,Zt,Pr);break;default:throw Error(t(329))}}}return en(n,Ge()),n.callbackNode===a?Lm.bind(null,n):null}function Bh(n,i){var a=Ca;return n.current.memoizedState.isDehydrated&&(es(n,i).flags|=256),n=yu(n,i),n!==2&&(i=Zt,Zt=a,i!==null&&$h(i)),n}function $h(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function iw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!On(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function si(n,i){for(i&=~Fh,i&=~hu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-$t(i),c=1<<a;n[a]=-1,i&=~c}}function Mm(n){if((Ue&6)!==0)throw Error(t(327));uo();var i=Ui(n,0);if((i&1)===0)return en(n,Ge()),null;var a=yu(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=Bh(n,c))}if(a===1)throw a=Ra,es(n,0),si(n,i),en(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ts(n,Zt,Pr),en(n,Ge()),null}function qh(n,i){var a=Ue;Ue|=1;try{return n(i)}finally{Ue=a,Ue===0&&(lo=Ge()+500,ql&&Jr())}}function Zi(n){ri!==null&&ri.tag===0&&(Ue&6)===0&&uo();var i=Ue;Ue|=1;var a=En.transition,c=Oe;try{if(En.transition=null,Oe=1,n)return n()}finally{Oe=c,En.transition=a,Ue=i,(Ue&6)===0&&Jr()}}function Hh(){cn=ao.current,Xe(ao)}function es(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,OE(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bl();break;case 3:io(),Xe(Yt),Xe(Lt),fh();break;case 5:hh(c);break;case 4:io();break;case 13:Xe(nt);break;case 19:Xe(nt);break;case 10:oh(c.type._context);break;case 22:case 23:Hh()}a=a.return}if(At=n,ct=n=oi(n.current,null),Dt=cn=i,Et=0,Ra=null,Fh=hu=Ji=0,Zt=Ca=null,Qi!==null){for(i=0;i<Qi.length;i++)if(a=Qi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Qi=null}return n}function bm(n,i){do{var a=ct;try{if(sh(),eu.current=iu,tu){for(var c=rt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}tu=!1}if(Xi=0,St=vt=rt=null,Ea=!1,wa=0,bh.current=null,a===null||a.return===null){Et=1,Ra=i,ct=null;break}e:{var p=n,_=a.return,T=a,C=i;if(i=Dt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=T,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var ne=lm(_);if(ne!==null){ne.flags&=-257,um(ne,_,T,p,i),ne.mode&1&&am(p,F,i),i=ne,C=F;var oe=i.updateQueue;if(oe===null){var ae=new Set;ae.add(C),i.updateQueue=ae}else oe.add(C);break e}else{if((i&1)===0){am(p,F,i),Wh();break e}C=Error(t(426))}}else if(tt&&T.mode&1){var at=lm(_);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),um(at,_,T,p,i),rh(so(C,T));break e}}p=C=so(C,T),Et!==4&&(Et=2),Ca===null?Ca=[p]:Ca.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var M=sm(p,C,i);Vp(p,M);break e;case 1:T=C;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ni===null||!ni.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var X=om(p,T,i);Vp(p,X);break e}}p=p.return}while(p!==null)}jm(a)}catch(le){i=le,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function Fm(){var n=cu.current;return cu.current=iu,n===null?iu:n}function Wh(){(Et===0||Et===3||Et===2)&&(Et=4),At===null||(Ji&268435455)===0&&(hu&268435455)===0||si(At,Dt)}function yu(n,i){var a=Ue;Ue|=2;var c=Fm();(At!==n||Dt!==i)&&(Pr=null,es(n,i));do try{sw();break}catch(d){bm(n,d)}while(!0);if(sh(),Ue=a,cu.current=c,ct!==null)throw Error(t(261));return At=null,Dt=0,Et}function sw(){for(;ct!==null;)Um(ct)}function ow(){for(;ct!==null&&!pl();)Um(ct)}function Um(n){var i=$m(n.alternate,n,cn);n.memoizedProps=n.pendingProps,i===null?jm(n):ct=i,bh.current=null}function jm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=JE(a,i,cn),a!==null){ct=a;return}}else{if(a=ZE(a,i),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Et=6,ct=null;return}}if(i=i.sibling,i!==null){ct=i;return}ct=i=n}while(i!==null);Et===0&&(Et=5)}function ts(n,i,a){var c=Oe,d=En.transition;try{En.transition=null,Oe=1,aw(n,i,a,c)}finally{En.transition=d,Oe=c}return null}function aw(n,i,a,c){do uo();while(ri!==null);if((Ue&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(He(n,p),n===At&&(ct=At=null,Dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fu||(fu=!0,qm(fn,function(){return uo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=En.transition,En.transition=null;var _=Oe;Oe=1;var T=Ue;Ue|=4,bh.current=null,tw(n,a),Nm(a,n),CE(Wc),Wr=!!Hc,Wc=Hc=null,n.current=a,nw(a),kc(),Ue=T,Oe=_,En.transition=p}else n.current=a;if(fu&&(fu=!1,ri=n,pu=d),p=n.pendingLanes,p===0&&(ni=null),yl(a.stateNode),en(n,Ge()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(du)throw du=!1,n=jh,jh=null,n;return(pu&1)!==0&&n.tag!==0&&uo(),p=n.pendingLanes,(p&1)!==0?n===zh?Pa++:(Pa=0,zh=n):Pa=0,Jr(),null}function uo(){if(ri!==null){var n=qr(pu),i=En.transition,a=Oe;try{if(En.transition=null,Oe=16>n?16:n,ri===null)var c=!1;else{if(n=ri,ri=null,pu=0,(Ue&6)!==0)throw Error(t(331));var d=Ue;for(Ue|=4,se=n.current;se!==null;){var p=se,_=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(se=F;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:Aa(8,G,p)}var Q=G.child;if(Q!==null)Q.return=G,se=Q;else for(;se!==null;){G=se;var W=G.sibling,ne=G.return;if(Am(G),G===F){se=null;break}if(W!==null){W.return=ne,se=W;break}se=ne}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var at=ae.sibling;ae.sibling=null,ae=at}while(ae!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,se=_;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Aa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var N=n.current;for(se=N;se!==null;){_=se;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,se=b;else e:for(_=N;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:uu(9,T)}}catch(le){st(T,T.return,le)}if(T===_){se=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,se=X;break e}se=T.return}}if(Ue=d,Jr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Fi,n)}catch{}c=!0}return c}finally{Oe=a,En.transition=i}}return!1}function zm(n,i,a){i=so(a,i),i=sm(n,i,1),n=ei(n,i,1),i=Wt(),n!==null&&(Br(n,1,i),en(n,i))}function st(n,i,a){if(n.tag===3)zm(n,n,a);else for(;i!==null;){if(i.tag===3){zm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ni===null||!ni.has(c))){n=so(a,n),n=om(i,n,1),i=ei(i,n,1),n=Wt(),i!==null&&(Br(i,1,n),en(i,n));break}}i=i.return}}function lw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,At===n&&(Dt&a)===a&&(Et===4||Et===3&&(Dt&130023424)===Dt&&500>Ge()-Uh?es(n,0):Fh|=a),en(n,i)}function Bm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Vs,Vs<<=1,(Vs&130023424)===0&&(Vs=4194304)));var a=Wt();n=Ar(n,i),n!==null&&(Br(n,i,a),en(n,a))}function uw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Bm(n,a)}function cw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Bm(n,a)}var $m;$m=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Yt.current)Jt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jt=!1,XE(n,i,a);Jt=(n.flags&131072)!==0}else Jt=!1,tt&&(i.flags&1048576)!==0&&Tp(i,Wl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;au(n,i),n=i.pendingProps;var d=Xs(i,Lt.current);ro(i,a),d=gh(null,i,c,n,d,a);var p=yh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xt(c)?(p=!0,$l(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,uh(i),d.updater=su,i.stateNode=d,d._reactInternals=i,Ih(i,c,n,a),i=Ch(null,i,c,!0,p,a)):(i.tag=0,tt&&p&&Zc(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(au(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=dw(c),n=Mn(c,n),d){case 0:i=Rh(null,i,c,n,a);break e;case 1:i=mm(null,i,c,n,a);break e;case 11:i=cm(null,i,c,n,a);break e;case 14:i=hm(null,i,c,Mn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Rh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),mm(n,i,c,d,a);case 3:e:{if(gm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Dp(n,i),Jl(i,c,null,a);var _=i.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=so(Error(t(423)),i),i=ym(n,i,c,a,d);break e}else if(c!==d){d=so(Error(t(424)),i),i=ym(n,i,c,a,d);break e}else for(un=Qr(i.stateNode.containerInfo.firstChild),ln=i,tt=!0,Ln=null,a=kp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===d){i=Cr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Op(i),n===null&&nh(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Gc(c,d)?_=null:p!==null&&Gc(c,p)&&(i.flags|=32),pm(n,i),Ht(n,i,_,a),i.child;case 6:return n===null&&nh(i),null;case 13:return _m(n,i,a);case 4:return ch(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=to(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),cm(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,_=d.value,Ke(Ql,c._currentValue),c._currentValue=_,p!==null)if(On(p.value,_)){if(p.children===d.children&&!Yt.current){i=Cr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=Rr(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),ah(p.return,a,i),T.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===i.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),ah(_,a,i),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===i){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ro(i,a),d=_n(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=Mn(c,i.pendingProps),d=Mn(c.type,d),hm(n,i,c,d,a);case 15:return dm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),au(n,i),i.tag=1,Xt(c)?(n=!0,$l(i)):n=!1,ro(i,a),rm(i,c,d),Ih(i,c,d,a),Ch(null,i,c,!0,n,a);case 19:return Em(n,i,a);case 22:return fm(n,i,a)}throw Error(t(156,i.tag))};function qm(n,i){return Ns(n,i)}function hw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,i,a,c){return new hw(n,i,a,c)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dw(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Le)return 14}return 2}function oi(n,i){var a=n.alternate;return a===null?(a=wn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _u(n,i,a,c,d,p){var _=2;if(c=n,typeof n=="function")Gh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return ns(a.children,d,p,i);case I:_=8,d|=8;break;case R:return n=wn(12,a,i,d|2),n.elementType=R,n.lanes=p,n;case S:return n=wn(13,a,i,d),n.elementType=S,n.lanes=p,n;case We:return n=wn(19,a,i,d),n.elementType=We,n.lanes=p,n;case xe:return vu(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case V:_=9;break e;case O:_=11;break e;case Le:_=14;break e;case mt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function ns(n,i,a,c){return n=wn(7,n,c,i),n.lanes=a,n}function vu(n,i,a,c){return n=wn(22,n,c,i),n.elementType=xe,n.lanes=a,n.stateNode={isHidden:!1},n}function Kh(n,i,a){return n=wn(6,n,null,i),n.lanes=a,n}function Qh(n,i,a){return i=wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function fw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zr(0),this.expirationTimes=zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Yh(n,i,a,c,d,p,_,T,C){return n=new fw(n,i,a,T,C),i===1?(i=1,p===!0&&(i|=8)):i=0,p=wn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(p),n}function pw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Hm(n){if(!n)return Xr;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xt(a))return vp(n,a,i)}return i}function Wm(n,i,a,c,d,p,_,T,C){return n=Yh(a,c,!0,n,d,p,_,T,C),n.context=Hm(null),a=n.current,c=Wt(),d=ii(a),p=Rr(c,d),p.callback=i??null,ei(a,p,d),n.current.lanes=d,Br(n,d,c),en(n,c),n}function Eu(n,i,a,c){var d=i.current,p=Wt(),_=ii(d);return a=Hm(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(p,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ei(d,i,_),n!==null&&(Un(n,d,_,p),Xl(n,d,_)),_}function wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xh(n,i){Gm(n,i),(n=n.alternate)&&Gm(n,i)}function mw(){return null}var Km=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jh(n){this._internalRoot=n}Tu.prototype.render=Jh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Eu(n,i,null,null)},Tu.prototype.unmount=Jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Zi(function(){Eu(null,n,null,null)}),i[wr]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Tl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Kn.length&&i!==0&&i<Kn[a].priority;a++);Kn.splice(a,0,n),a===0&&Al(n)}};function Zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function gw(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=wu(_);p.call(F)}}var _=Wm(i,c,n,0,null,!1,!1,"",Qm);return n._reactRootContainer=_,n[wr]=_.current,da(n.nodeType===8?n.parentNode:n),Zi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=wu(C);T.call(F)}}var C=Yh(n,0,!1,null,null,!1,!1,"",Qm);return n._reactRootContainer=C,n[wr]=C.current,da(n.nodeType===8?n.parentNode:n),Zi(function(){Eu(i,C,a,c)}),C}function Su(n,i,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var C=wu(_);T.call(C)}}Eu(i,_,n,d)}else _=gw(a,i,n,d,c);return wu(_)}El=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=jr(i.pendingLanes);a!==0&&($r(i,a|1),en(i,Ge()),(Ue&6)===0&&(lo=Ge()+500,Jr()))}break;case 13:Zi(function(){var c=Ar(n,1);if(c!==null){var d=Wt();Un(c,n,1,d)}}),Xh(n,1)}},xs=function(n){if(n.tag===13){var i=Ar(n,134217728);if(i!==null){var a=Wt();Un(i,n,134217728,a)}Xh(n,134217728)}},wl=function(n){if(n.tag===13){var i=ii(n),a=Ar(n,i);if(a!==null){var c=Wt();Un(a,n,i,c)}Xh(n,i)}},Tl=function(){return Oe},Il=function(n,i){var a=Oe;try{return Oe=n,i()}finally{Oe=a}},Ss=function(n,i,a){switch(i){case"input":if(bo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=zl(c);if(!d)throw Error(t(90));hr(c),bo(c,d)}}}break;case"textarea":Ts(n,a);break;case"select":i=a.value,i!=null&&fr(n,!!a.multiple,i,!1)}},xi=qh,Go=Zi;var yw={usingClientEntryPoint:!1,Events:[ma,Qs,zl,Wn,Wo,qh]},ka={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_w={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yo(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Fi=Au.inject(_w),rn=Au}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw,tn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(i))throw Error(t(200));return pw(n,i,null,a)},tn.createRoot=function(n,i){if(!Zh(n))throw Error(t(299));var a=!1,c="",d=Km;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Yh(n,1,!1,null,null,a,!1,c,d),n[wr]=i.current,da(n.nodeType===8?n.parentNode:n),new Jh(i)},tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Yo(i),n=n===null?null:n.stateNode,n},tn.flushSync=function(n){return Zi(n)},tn.hydrate=function(n,i,a){if(!Iu(i))throw Error(t(200));return Su(null,n,i,!0,a)},tn.hydrateRoot=function(n,i,a){if(!Zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Km;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=Wm(i,null,n,1,a??null,d,!1,p,_),n[wr]=i.current,da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Tu(i)},tn.render=function(n,i,a){if(!Iu(i))throw Error(t(200));return Su(null,n,i,!1,a)},tn.unmountComponentAtNode=function(n){if(!Iu(n))throw Error(t(40));return n._reactRootContainer?(Zi(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},tn.unstable_batchedUpdates=qh,tn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Iu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Su(n,i,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var rg;function Pw(){if(rg)return nd.exports;rg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),nd.exports=Cw(),nd.exports}var ig;function kw(){if(ig)return Ru;ig=1;var r=Pw();return Ru.createRoot=r.createRoot,Ru.hydrateRoot=r.hydrateRoot,Ru}var Nw=kw();const Dw=()=>{};var sg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Vw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Hy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let P=(m&15)<<2|v>>6,j=v&63;g||(j=64,h||(P=64)),s.push(t[w],t[A],t[P],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(qy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Vw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const A=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new xw;const P=u<<2|m>>4;if(s.push(P),v!==64){const j=m<<4&240|v>>2;if(s.push(j),A!==64){const K=v<<6&192|A;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ow=function(r){const e=qy(r);return Hy.encodeByteArray(e,!0)},Hu=function(r){return Ow(r).replace(/\./g,"")},Wy=function(r){try{return Hy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mw=()=>Lw().__FIREBASE_DEFAULTS__,bw=()=>{if(typeof process>"u"||typeof sg>"u")return;const r=sg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Fw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Wy(r[1]);return e&&JSON.parse(e)},cc=()=>{try{return Dw()||Mw()||bw()||Fw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Gy=r=>{var e,t;return(t=(e=cc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Uw=r=>{const e=Gy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ky=()=>{var r;return(r=cc())===null||r===void 0?void 0:r.config},Qy=r=>{var e;return(e=cc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yy(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function zw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Hu(JSON.stringify(t)),Hu(JSON.stringify(h)),""].join(".")}const Fa={};function Bw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Fa))Fa[e]?r.emulator.push(e):r.prod.push(e);return r}function $w(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let og=!1;function Xy(r,e){if(typeof window>"u"||typeof document>"u"||!Po(window.location.host)||Fa[r]===e||Fa[r]||og)return;Fa[r]=e;function t(P){return`__firebase__banner__${P}`}const s="__firebase__banner",u=Bw().prod.length>0;function h(){const P=document.getElementById(s);P&&P.remove()}function m(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function g(P,j){P.setAttribute("width","24"),P.setAttribute("id",j),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function v(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{og=!0,h()},P}function w(P,j){P.setAttribute("id",j),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function A(){const P=$w(s),j=t("text"),K=document.getElementById(j)||document.createElement("span"),Y=t("learnmore"),q=document.getElementById(Y)||document.createElement("a"),ye=t("preprendIcon"),de=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const ge=P.element;m(ge),w(q,Y);const Ie=v();g(de,ye),ge.append(de,K,q,Ie),document.body.appendChild(ge)}u?(K.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function Hw(){var r;const e=(r=cc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ww(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qw(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Yw(){return!Hw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Jw(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="FirebaseError";class br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Zw,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?e0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new br(o,m,s)}}function e0(r,e){return r.replace(t0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const t0=/\{\$([^}]+)}/g;function n0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ls(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(ag(u)&&ag(h)){if(!ls(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function ag(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Va(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function xa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function r0(r,e){const t=new i0(r,e);return t.subscribe.bind(t)}class i0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");s0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=sd),o.error===void 0&&(o.error=sd),o.complete===void 0&&(o.complete=sd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function sd(){}/**
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
 */function Tt(r){return r&&r._delegate?r._delegate:r}class us{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rs="[DEFAULT]";/**
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
 */class o0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new jw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l0(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:a0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a0(r){return r===rs?void 0:r}function l0(r){return r.instantiationMode==="EAGER"}/**
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
 */class u0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(De||(De={}));const c0={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},h0=De.INFO,d0={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},f0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=d0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=h0,this._logHandler=f0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const p0=(r,e)=>e.some(t=>r instanceof t);let lg,ug;function m0(){return lg||(lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g0(){return ug||(ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jy=new WeakMap,gd=new WeakMap,Zy=new WeakMap,od=new WeakMap,$d=new WeakMap;function y0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(fi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Jy.set(t,r)}).catch(()=>{}),$d.set(e,r),e}function _0(r){if(gd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});gd.set(r,e)}let yd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return gd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Zy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function v0(r){yd=r(yd)}function E0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ad(this),e,...t);return Zy.set(s,e.sort?e.sort():[e]),fi(s)}:g0().includes(r)?function(...e){return r.apply(ad(this),e),fi(Jy.get(this))}:function(...e){return fi(r.apply(ad(this),e))}}function w0(r){return typeof r=="function"?E0(r):(r instanceof IDBTransaction&&_0(r),p0(r,m0())?new Proxy(r,yd):r)}function fi(r){if(r instanceof IDBRequest)return y0(r);if(od.has(r))return od.get(r);const e=w0(r);return e!==r&&(od.set(r,e),$d.set(e,r)),e}const ad=r=>$d.get(r);function T0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=fi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(fi(h.result),g.oldVersion,g.newVersion,fi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const I0=["get","getKey","getAll","getAllKeys","count"],S0=["put","add","delete","clear"],ld=new Map;function cg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ld.get(e))return ld.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=S0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||I0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return ld.set(e,u),u}v0(r=>({...r,get:(e,t,s)=>cg(e,t)||r.get(e,t,s),has:(e,t)=>!!cg(e,t)||r.has(e,t)}));/**
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
 */class A0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(R0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function R0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",hg="0.13.2";/**
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
 */const xr=new Bd("@firebase/app"),C0="@firebase/app-compat",P0="@firebase/analytics-compat",k0="@firebase/analytics",N0="@firebase/app-check-compat",D0="@firebase/app-check",V0="@firebase/auth",x0="@firebase/auth-compat",O0="@firebase/database",L0="@firebase/data-connect",M0="@firebase/database-compat",b0="@firebase/functions",F0="@firebase/functions-compat",U0="@firebase/installations",j0="@firebase/installations-compat",z0="@firebase/messaging",B0="@firebase/messaging-compat",$0="@firebase/performance",q0="@firebase/performance-compat",H0="@firebase/remote-config",W0="@firebase/remote-config-compat",G0="@firebase/storage",K0="@firebase/storage-compat",Q0="@firebase/firestore",Y0="@firebase/ai",X0="@firebase/firestore-compat",J0="firebase",Z0="11.10.0";/**
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
 */const vd="[DEFAULT]",eT={[_d]:"fire-core",[C0]:"fire-core-compat",[k0]:"fire-analytics",[P0]:"fire-analytics-compat",[D0]:"fire-app-check",[N0]:"fire-app-check-compat",[V0]:"fire-auth",[x0]:"fire-auth-compat",[O0]:"fire-rtdb",[L0]:"fire-data-connect",[M0]:"fire-rtdb-compat",[b0]:"fire-fn",[F0]:"fire-fn-compat",[U0]:"fire-iid",[j0]:"fire-iid-compat",[z0]:"fire-fcm",[B0]:"fire-fcm-compat",[$0]:"fire-perf",[q0]:"fire-perf-compat",[H0]:"fire-rc",[W0]:"fire-rc-compat",[G0]:"fire-gcs",[K0]:"fire-gcs-compat",[Q0]:"fire-fst",[X0]:"fire-fst-compat",[Y0]:"fire-vertex","fire-js":"fire-js",[J0]:"fire-js-all"};/**
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
 */const Wu=new Map,tT=new Map,Ed=new Map;function dg(r,e){try{r.container.addComponent(e)}catch(t){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function wo(r){const e=r.name;if(Ed.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,r);for(const t of Wu.values())dg(t,r);for(const t of tT.values())dg(t,r);return!0}function qd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function hn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const nT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new el("app","Firebase",nT);/**
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
 */class rT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const ko=Z0;function e_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(t||(t=Ky()),!t)throw pi.create("no-options");const u=Wu.get(o);if(u){if(ls(t,u.options)&&ls(s,u.config))return u;throw pi.create("duplicate-app",{appName:o})}const h=new u0(o);for(const g of Ed.values())h.addComponent(g);const m=new rT(t,s,h);return Wu.set(o,m),m}function t_(r=vd){const e=Wu.get(r);if(!e&&r===vd&&Ky())return e_();if(!e)throw pi.create("no-app",{appName:r});return e}function mi(r,e,t){var s;let o=(s=eT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(m.join(" "));return}wo(new us(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const iT="firebase-heartbeat-database",sT=1,qa="firebase-heartbeat-store";let ud=null;function n_(){return ud||(ud=T0(iT,sT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(qa)}catch(t){console.warn(t)}}}}).catch(r=>{throw pi.create("idb-open",{originalErrorMessage:r.message})})),ud}async function oT(r){try{const t=(await n_()).transaction(qa),s=await t.objectStore(qa).get(r_(r));return await t.done,s}catch(e){if(e instanceof br)xr.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(t.message)}}}async function fg(r,e){try{const s=(await n_()).transaction(qa,"readwrite");await s.objectStore(qa).put(e,r_(r)),await s.done}catch(t){if(t instanceof br)xr.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xr.warn(s.message)}}}function r_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const aT=1024,lT=30;class uT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=pg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>lT){const h=dT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pg(),{heartbeatsToSend:s,unsentEntries:o}=cT(this._heartbeatsCache.heartbeats),u=Hu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return xr.warn(t),""}}}function pg(){return new Date().toISOString().substring(0,10)}function cT(r,e=aT){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),mg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),mg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function mg(r){return Hu(JSON.stringify({version:2,heartbeats:r})).length}function dT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function fT(r){wo(new us("platform-logger",e=>new A0(e),"PRIVATE")),wo(new us("heartbeat",e=>new uT(e),"PRIVATE")),mi(_d,hg,r),mi(_d,hg,"esm2017"),mi("fire-js","")}fT("");function Hd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pT=i_,s_=new el("auth","Firebase",i_());/**
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
 */const Gu=new Bd("@firebase/auth");function mT(r,...e){Gu.logLevel<=De.WARN&&Gu.warn(`Auth (${ko}): ${r}`,...e)}function Lu(r,...e){Gu.logLevel<=De.ERROR&&Gu.error(`Auth (${ko}): ${r}`,...e)}/**
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
 */function Sn(r,...e){throw Gd(r,...e)}function Bn(r,...e){return Gd(r,...e)}function Wd(r,e,t){const s=Object.assign(Object.assign({},pT()),{[e]:t});return new el("auth","Firebase",s).create(e,{appName:r.name})}function Vr(r){return Wd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gT(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Sn(r,"argument-error"),Wd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return s_.create(r,...e)}function _e(r,e,...t){if(!r)throw Gd(e,...t)}function Nr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Lu(e),new Error(e)}function Or(r,e){r||Nr(e)}/**
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
 */function wd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function yT(){return gg()==="http:"||gg()==="https:"}function gg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function _T(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yT()||Gw()||"connection"in navigator)?navigator.onLine:!0}function vT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=qw()||Kw()}get(){return _T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kd(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class o_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ET={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TT=new nl(3e4,6e4);function Ri(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ur(r,e,t,s,o={}){return a_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=tl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},u);return Ww()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Po(r.emulatorConfig.host)&&(v.credentials="include"),o_.fetch()(await l_(r,r.config.apiHost,t,m),v)})}async function a_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},ET),e);try{const o=new ST(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Cu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Cu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Cu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Wd(r,w,v);Sn(r,w)}}catch(o){if(o instanceof br)throw o;Sn(r,"network-request-failed",{message:String(o)})}}async function rl(r,e,t,s,o={}){const u=await ur(r,e,t,s,o);return"mfaPendingCredential"in u&&Sn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function l_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Kd(r.config,o):`${r.config.apiScheme}://${o}`;return wT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function IT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ST{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Bn(this.auth,"network-request-failed")),TT.get())})}}function Cu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Bn(r,e,s);return o.customData._tokenResponse=t,o}function yg(r){return r!==void 0&&r.enterprise!==void 0}class AT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return IT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function RT(r,e){return ur(r,"GET","/v2/recaptchaConfig",Ri(r,e))}/**
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
 */async function CT(r,e){return ur(r,"POST","/v1/accounts:delete",e)}async function Ku(r,e){return ur(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ua(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PT(r,e=!1){const t=Tt(r),s=await t.getIdToken(e),o=Qd(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ua(cd(o.auth_time)),issuedAtTime:Ua(cd(o.iat)),expirationTime:Ua(cd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function cd(r){return Number(r)*1e3}function Qd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Wy(t);return o?JSON.parse(o):(Lu("Failed to decode base64 JWT payload"),null)}catch(o){return Lu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function _g(r){const e=Qd(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cs(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof br&&kT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function kT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class NT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await cs(r,Ku(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?u_(u.providerUserInfo):[],m=VT(r.providerData,h),g=r.isAnonymous,v=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Td(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,A)}async function DT(r){const e=Tt(r);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function u_(r){return r.map(e=>{var{providerId:t}=e,s=Hd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function xT(r,e){const t=await a_(r,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await l_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Po(r.emulatorConfig.host)&&(g.credentials="include"),o_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function OT(r,e){return ur(r,"POST","/v2/accounts:revokeToken",Ri(r,e))}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=_g(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await xT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new go;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
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
 */function li(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Td(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await cs(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return PT(this,e)}reload(){return DT(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await cs(this,CT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,P=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,K=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ye=(v=t.createdAt)!==null&&v!==void 0?v:void 0,de=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ge,emailVerified:Ie,isAnonymous:$e,providerData:Re,stsTokenManager:D}=t;_e(ge&&D,e,"internal-error");const I=go.fromJSON(this.name,D);_e(typeof ge=="string",e,"internal-error"),li(A,e.name),li(P,e.name),_e(typeof Ie=="boolean",e,"internal-error"),_e(typeof $e=="boolean",e,"internal-error"),li(j,e.name),li(K,e.name),li(Y,e.name),li(q,e.name),li(ye,e.name),li(de,e.name);const R=new jn({uid:ge,auth:e,email:P,emailVerified:Ie,displayName:A,isAnonymous:$e,photoURL:K,phoneNumber:j,tenantId:Y,stsTokenManager:I,createdAt:ye,lastLoginAt:de});return Re&&Array.isArray(Re)&&(R.providerData=Re.map(k=>Object.assign({},k))),q&&(R._redirectEventId=q),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new go;o.updateFromServerResponse(t);const u=new jn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Qu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?u_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new go;m.updateFromIdToken(s);const g=new jn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Td(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const vg=new Map;function Dr(r){Or(r instanceof Function,"Expected a class definition");let e=vg.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,vg.set(r,e),e)}/**
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
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}c_.type="NONE";const Eg=c_;/**
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
 */function Mu(r,e,t){return`firebase:${r}:${e}:${t}`}class yo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Mu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Mu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ku(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new yo(Dr(Eg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Dr(Eg);const h=Mu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const P=await Ku(e,{idToken:w}).catch(()=>{});if(!P)break;A=await jn._fromGetAccountInfoResponse(e,P,w)}else A=jn._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new yo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new yo(u,e,s))}}/**
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
 */function wg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(p_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g_(e))return"Blackberry";if(y_(e))return"Webos";if(d_(e))return"Safari";if((e.includes("chrome/")||f_(e))&&!e.includes("edge/"))return"Chrome";if(m_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h_(r=Bt()){return/firefox\//i.test(r)}function d_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f_(r=Bt()){return/crios\//i.test(r)}function p_(r=Bt()){return/iemobile/i.test(r)}function m_(r=Bt()){return/android/i.test(r)}function g_(r=Bt()){return/blackberry/i.test(r)}function y_(r=Bt()){return/webos/i.test(r)}function Yd(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function LT(r=Bt()){var e;return Yd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MT(){return Qw()&&document.documentMode===10}function __(r=Bt()){return Yd(r)||m_(r)||y_(r)||g_(r)||/windows phone/i.test(r)||p_(r)}/**
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
 */function v_(r,e=[]){let t;switch(r){case"Browser":t=wg(Bt());break;case"Worker":t=`${wg(Bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ko}/${s}`}/**
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
 */class bT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(r,e={}){return ur(r,"GET","/v2/passwordPolicy",Ri(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=6;class jT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:UT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class zT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tg(this),this.idTokenSubscription=new Tg(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ku(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(hn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Vr(this));const t=e?Tt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FT(this),t=new jT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await OT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ci(r){return Tt(r)}class Tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=r0(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BT(r){hc=r}function E_(r){return hc.loadJS(r)}function $T(){return hc.recaptchaEnterpriseScript}function qT(){return hc.gapiScript}function HT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class WT{constructor(){this.enterprise=new GT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const KT="recaptcha-enterprise",w_="NO_RECAPTCHA";class QT{constructor(e){this.type=KT,this.auth=Ci(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{RT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new AT(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;yg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(w_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&yg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=$T();g.length!==0&&(g+=m),E_(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function Ig(r,e,t,s=!1,o=!1){const u=new QT(r);let h;if(o)h=w_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Id(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Ig(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Ig(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function YT(r,e){const t=qd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ls(u,e??{}))return o;Sn(o,"already-initialized")}return t.initialize({options:e})}function XT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function JT(r,e,t){const s=Ci(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=T_(e),{host:h,port:m}=ZT(e),g=m===null?"":`:${m}`,v={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(ls(v,s.config.emulator)&&ls(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Po(h)?(Yy(`${u}//${h}${g}`),Xy("Auth",!0)):eI()}function T_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ZT(r){const e=T_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Sg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Sg(h)}}}function Sg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function eI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}async function tI(r,e){return ur(r,"POST","/v1/accounts:update",e)}async function nI(r,e){return ur(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function rI(r,e){return rl(r,"POST","/v1/accounts:signInWithPassword",Ri(r,e))}/**
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
 */async function iI(r,e){return rl(r,"POST","/v1/accounts:signInWithEmailLink",Ri(r,e))}async function sI(r,e){return rl(r,"POST","/v1/accounts:signInWithEmailLink",Ri(r,e))}/**
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
 */class Ha extends Xd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ha(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ha(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Id(e,t,"signInWithPassword",rI);case"emailLink":return iI(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Id(e,s,"signUpPassword",nI);case"emailLink":return sI(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _o(r,e){return rl(r,"POST","/v1/accounts:signInWithIdp",Ri(r,e))}/**
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
 */const oI="http://localhost";class hs extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Hd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new hs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return _o(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,_o(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_o(e,t)}buildRequest(){const e={requestUri:oI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
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
 */function aI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lI(r){const e=Va(xa(r)).link,t=e?Va(xa(e)).deep_link_id:null,s=Va(xa(r)).deep_link_id;return(s?Va(xa(s)).link:null)||s||t||e||r}class Jd{constructor(e){var t,s,o,u,h,m;const g=Va(xa(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,A=aI((o=g.mode)!==null&&o!==void 0?o:null);_e(v&&w&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=lI(e);try{return new Jd(t)}catch{return null}}}/**
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
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,t){return Ha._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Jd.parseLink(t);return _e(s,"argument-error"),Ha._fromEmailAndCode(e,s.code,s.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class il extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ui extends il{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
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
 */class kr extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return kr.credential(t,s)}catch{return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com";kr.PROVIDER_ID="google.com";/**
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
 */class ci extends il{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
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
 */class hi extends il{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
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
 */async function uI(r,e){return rl(r,"POST","/v1/accounts:signUp",Ri(r,e))}/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await jn._fromIdTokenResponse(e,s,o),h=Ag(s);return new ds({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Ag(s);return new ds({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Ag(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Yu extends br{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Yu(e,t,s,o)}}function I_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(r,u,e,s):u})}async function cI(r,e,t=!1){const s=await cs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ds._forOperation(r,"link",s)}/**
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
 */async function hI(r,e,t=!1){const{auth:s}=r;if(hn(s.app))return Promise.reject(Vr(s));const o="reauthenticate";try{const u=await cs(r,I_(s,o,e,r),t);_e(u.idToken,s,"internal-error");const h=Qd(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(r.uid===m,s,"user-mismatch"),ds._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),u}}/**
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
 */async function S_(r,e,t=!1){if(hn(r.app))return Promise.reject(Vr(r));const s="signIn",o=await I_(r,s,e),u=await ds._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function dI(r,e){return S_(Ci(r),e)}/**
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
 */async function A_(r){const e=Ci(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fI(r,e,t){if(hn(r.app))return Promise.reject(Vr(r));const s=Ci(r),h=await Id(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&A_(r),g}),m=await ds._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function pI(r,e,t){return hn(r.app)?Promise.reject(Vr(r)):dI(Tt(r),No.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&A_(r),s})}/**
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
 */async function mI(r,e){return ur(r,"POST","/v1/accounts:update",e)}/**
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
 */async function Rg(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Tt(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await cs(s,mI(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function gI(r,e){return yI(Tt(r),null,e)}async function yI(r,e,t){const{auth:s}=r,u={idToken:await r.getIdToken(),returnSecureToken:!0};t&&(u.password=t);const h=await cs(r,tI(s,u));await r._updateTokensIfNecessary(h,!0)}function _I(r,e,t,s){return Tt(r).onIdTokenChanged(e,t,s)}function vI(r,e,t){return Tt(r).beforeAuthStateChanged(e,t)}function EI(r,e,t,s){return Tt(r).onAuthStateChanged(e,t,s)}function wI(r){return Tt(r).signOut()}async function TI(r){return Tt(r).delete()}const Xu="__sak";/**
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
 */class R_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const II=1e3,SI=10;class C_ extends R_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);MT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,SI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}C_.type="LOCAL";const AI=C_;/**
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
 */class P_ extends R_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}P_.type="SESSION";const k_=P_;/**
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
 */function RI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await RI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function ef(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class CI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=ef("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const P=A;if(P.data.eventId===v)switch(P.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(P.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function rr(){return window}function PI(r){rr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function kI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function DI(){return N_()?self:null}/**
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
 */const D_="firebaseLocalStorageDb",VI=1,Ju="firebaseLocalStorage",V_="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fc(r,e){return r.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function xI(){const r=indexedDB.deleteDatabase(D_);return new sl(r).toPromise()}function Sd(){const r=indexedDB.open(D_,VI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ju,{keyPath:V_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ju)?e(s):(s.close(),await xI(),e(await Sd()))})})}async function Cg(r,e,t){const s=fc(r,!0).put({[V_]:e,value:t});return new sl(s).toPromise()}async function OI(r,e){const t=fc(r,!1).get(e),s=await new sl(t).toPromise();return s===void 0?null:s.value}function Pg(r,e){const t=fc(r,!0).delete(e);return new sl(t).toPromise()}const LI=800,MI=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>MI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(DI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kI(),!this.activeServiceWorker)return;this.sender=new CI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sd();return await Cg(e,Xu,"1"),await Pg(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>OI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=fc(o,!1).getAll();return new sl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const bI=x_;new nl(3e4,6e4);/**
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
 */function O_(r,e){return e?Dr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class tf extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FI(r){return S_(r.auth,new tf(r),r.bypassAuthState)}function UI(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),hI(t,new tf(r),r.bypassAuthState)}async function jI(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),cI(t,new tf(r),r.bypassAuthState)}/**
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
 */class L_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FI;case"linkViaPopup":case"linkViaRedirect":return jI;case"reauthViaPopup":case"reauthViaRedirect":return UI;default:Sn(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zI=new nl(2e3,1e4);async function BI(r,e,t){if(hn(r.app))return Promise.reject(Bn(r,"operation-not-supported-in-this-environment"));const s=Ci(r);gT(r,e,Zd);const o=O_(s,t);return new is(s,"signInViaPopup",e,o).executeNotNull()}class is extends L_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zI.get())};e()}}is.currentPopupAction=null;/**
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
 */const $I="pendingRedirect",bu=new Map;class qI extends L_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const s=await HI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HI(r,e){const t=KI(e),s=GI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function WI(r,e){bu.set(r._key(),e)}function GI(r){return Dr(r._redirectPersistence)}function KI(r){return Mu($I,r.config.apiKey,r.name)}async function QI(r,e,t=!1){if(hn(r.app))return Promise.reject(Vr(r));const s=Ci(r),o=O_(s,e),h=await new qI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const YI=600*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!M_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Bn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YI&&this.cachedEventUids.clear(),this.cachedEventUids.has(kg(e))}saveEventToCache(e){this.cachedEventUids.add(kg(e)),this.lastProcessedEventTime=Date.now()}}function kg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function M_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M_(r);default:return!1}}/**
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
 */async function ZI(r,e={}){return ur(r,"GET","/v1/projects",e)}/**
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
 */const e1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t1=/^https?/;async function n1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ZI(r);for(const t of e)try{if(r1(t))return}catch{}Sn(r,"unauthorized-domain")}function r1(r){const e=wd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!t1.test(t))return!1;if(e1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new nl(3e4,6e4);function Ng(){const r=rr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function s1(r){return new Promise((e,t)=>{var s,o,u;function h(){Ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ng(),t(Bn(r,"network-request-failed"))},timeout:i1.get()})}if(!((o=(s=rr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=rr().gapi)===null||u===void 0)&&u.load)h();else{const m=HT("iframefcb");return rr()[m]=()=>{gapi.load?h():t(Bn(r,"network-request-failed"))},E_(`${qT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Fu=null,e})}let Fu=null;function o1(r){return Fu=Fu||s1(r),Fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=new nl(5e3,15e3),l1="__/auth/iframe",u1="emulator/auth/iframe",c1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d1(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Kd(e,u1):`https://${r.config.authDomain}/${l1}`,s={apiKey:e.apiKey,appName:r.name,v:ko},o=h1.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${tl(s).slice(1)}`}async function f1(r){const e=await o1(r),t=rr().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:d1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Bn(r,"network-request-failed"),m=rr().setTimeout(()=>{u(h)},a1.get());function g(){rr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m1=500,g1=600,y1="_blank",_1="http://localhost";class Dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v1(r,e,t,s=m1,o=g1){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},p1),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Bt().toLowerCase();t&&(m=f_(v)?y1:t),h_(v)&&(e=e||_1,g.scrollbars="yes");const w=Object.entries(g).reduce((P,[j,K])=>`${P}${j}=${K},`,"");if(LT(v)&&m!=="_self")return E1(e||"",m),new Dg(null);const A=window.open(e||"",m,w);_e(A,r,"popup-blocked");try{A.focus()}catch{}return new Dg(A)}function E1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const w1="__/auth/handler",T1="emulator/auth/handler",I1=encodeURIComponent("fac");async function Vg(r,e,t,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:ko,eventId:o};if(e instanceof Zd){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",n0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof il){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),v=g?`#${I1}=${encodeURIComponent(g)}`:"";return`${S1(r)}?${tl(m).slice(1)}${v}`}function S1({config:r}){return r.emulator?Kd(r,T1):`https://${r.authDomain}/${w1}`}/**
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
 */const hd="webStorageSupport";class A1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k_,this._completeRedirectFn=QI,this._overrideRedirectResult=WI}async _openPopup(e,t,s,o){var u;Or((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Vg(e,t,s,wd(),o);return v1(e,h,ef())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Vg(e,t,s,wd(),o);return PI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Or(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await f1(e),s=new XI(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hd,{type:hd},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[hd];h!==void 0&&t(!!h),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return __()||d_()||Yd()}}const R1=A1;var xg="@firebase/auth",Og="1.10.8";/**
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
 */class C1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function P1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k1(r){wo(new us("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v_(r)},v=new zT(s,o,u,g);return XT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),wo(new us("auth-internal",e=>{const t=Ci(e.getProvider("auth").getImmediate());return(s=>new C1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(xg,Og,P1(r)),mi(xg,Og,"esm2017")}/**
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
 */const N1=300,D1=Qy("authIdTokenMaxAge")||N1;let Lg=null;const V1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>D1)return;const o=t==null?void 0:t.token;Lg!==o&&(Lg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function x1(r=t_()){const e=qd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=YT(r,{popupRedirectResolver:R1,persistence:[bI,AI,k_]}),s=Qy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=V1(u.toString());vI(t,h,()=>h(t.currentUser)),_I(t,m=>h(m))}}const o=Gy("auth");return o&&JT(t,`http://${o}`),t}function O1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}BT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Bn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",O1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k1("Browser");var Mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,b_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(k,V,O){for(var S=Array(arguments.length-2),We=2;We<arguments.length;We++)S[We-2]=arguments[We];return I.prototype[V].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);var k=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)k[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)k[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];var O=D.g[3],S=I+(O^R&(V^O))+k[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[2]+606105819&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[3]+3250441966&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[6]+2821735955&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[7]+4249261313&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[10]+4294925233&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[11]+2304563134&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[14]+2792965006&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[15]+1236535329&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(V^O&(R^V))+k[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[11]+643717713&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[0]+3921069994&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[15]+3634488961&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[4]+3889429448&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[3]+4107603335&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[8]+1163531501&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[7]+1735328473&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[12]+2368359562&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(R^V^O)+k[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[11]+1839030562&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[14]+4259657740&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[7]+4139469664&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[10]+3200236656&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[3]+3572445317&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[6]+76029189&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[15]+530742520&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[2]+3299628645&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(V^(R|~O))+k[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[14]+2878612391&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[5]+4237533241&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[10]+4293915773&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[1]+2240044497&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[6]+2734768916&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[13]+1309151649&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[2]+718787259&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,k=this.B,V=this.h,O=0;O<I;){if(V==0)for(;O<=R;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<I;)if(k[V++]=D.charCodeAt(O++),V==this.blockSize){o(this,k),V=0;break}}else for(;O<I;)if(k[V++]=D[O++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var k=0;32>k;k+=8)D[R++]=this.g[I]>>>k&255;return D};function u(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;for(var R=[],k=!0,V=D.length-1;0<=V;V--){var O=D[V]|0;k&&O==I||(R[V]=O,k=!1)}this.g=R}var m={};function g(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return A;if(0>D)return q(v(-D));for(var I=[],R=1,k=0;D>=R;k++)I[k]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return q(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),k=A,V=0;V<D.length;V+=8){var O=Math.min(8,D.length-V),S=parseInt(D.substring(V,V+O),I);8>O?(O=v(Math.pow(I,O)),k=k.j(O).add(v(S))):(k=k.j(R),k=k.add(v(S)))}return k}var A=g(0),P=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-q(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var k=this.i(R);D+=(0<=k?k:4294967296+k)*I,I*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(K(this))return"0";if(Y(this))return"-"+q(this).toString(D);for(var I=v(Math.pow(D,6)),R=this,k="";;){var V=Ie(R,I).g;R=ye(R,V.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,K(R))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function K(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function Y(D){return D.h==-1}r.l=function(D){return D=ye(this,D),Y(D)?-1:K(D)?0:1};function q(D){for(var I=D.g.length,R=[],k=0;k<I;k++)R[k]=~D.g[k];return new h(R,~D.h).add(P)}r.abs=function(){return Y(this)?q(this):this},r.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0,V=0;V<=I;V++){var O=k+(this.i(V)&65535)+(D.i(V)&65535),S=(O>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);k=S>>>16,O&=65535,S&=65535,R[V]=S<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ye(D,I){return D.add(q(I))}r.j=function(D){if(K(this)||K(D))return A;if(Y(this))return Y(D)?q(this).j(q(D)):q(q(this).j(D));if(Y(D))return q(this.j(q(D)));if(0>this.l(j)&&0>D.l(j))return v(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],k=0;k<2*I;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<D.g.length;V++){var O=this.i(k)>>>16,S=this.i(k)&65535,We=D.i(V)>>>16,Le=D.i(V)&65535;R[2*k+2*V]+=S*Le,de(R,2*k+2*V),R[2*k+2*V+1]+=O*Le,de(R,2*k+2*V+1),R[2*k+2*V+1]+=S*We,de(R,2*k+2*V+1),R[2*k+2*V+2]+=O*We,de(R,2*k+2*V+2)}for(k=0;k<I;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=I;k<2*I;k++)R[k]=0;return new h(R,0)};function de(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function ge(D,I){this.g=D,this.h=I}function Ie(D,I){if(K(I))throw Error("division by zero");if(K(D))return new ge(A,A);if(Y(D))return I=Ie(q(D),I),new ge(q(I.g),q(I.h));if(Y(I))return I=Ie(D,q(I)),new ge(q(I.g),I.h);if(30<D.g.length){if(Y(D)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=P,k=I;0>=k.l(D);)R=$e(R),k=$e(k);var V=Re(R,1),O=Re(k,1);for(k=Re(k,2),R=Re(R,2);!K(k);){var S=O.add(k);0>=S.l(D)&&(V=V.add(R),O=S),k=Re(k,1),R=Re(R,1)}return I=ye(D,V.j(I)),new ge(V,I)}for(V=A;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=v(R),S=O.j(I);Y(S)||0<S.l(D);)R-=k,O=v(R),S=O.j(I);K(O)&&(O=P),V=V.add(O),D=ye(D,S)}return new ge(V,D)}r.A=function(D){return Ie(this,D).h},r.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)&D.i(k);return new h(R,this.h&D.h)},r.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)|D.i(k);return new h(R,this.h|D.h)},r.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)^D.i(k);return new h(R,this.h^D.h)};function $e(D){for(var I=D.g.length+1,R=[],k=0;k<I;k++)R[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(R,D.h)}function Re(D,I){var R=I>>5;I%=32;for(var k=D.g.length-R,V=[],O=0;O<k;O++)V[O]=0<I?D.i(O+R)>>>I|D.i(O+R+1)<<32-I:D.i(O+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,b_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,gi=h}).apply(typeof Mg<"u"?Mg:typeof self<"u"?self:typeof window<"u"?window:{});var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F_,Oa,U_,Uu,Ad,j_,z_,B_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pu=="object"&&Pu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function P(l,f,y){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,P.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function K(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var J=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)J[qe-2]=arguments[qe];return f.prototype[L].apply(E,J)}}function Y(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function q(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let J=0;J<U;J++)l[L+J]=E[J]}else l.push(E)}}class ye{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function de(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ie(l){return Ie[" "](l),l}Ie[" "]=function(){};var $e=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Re(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function V(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class We{constructor(){this.h=this.g=null}add(f,y){const E=Le.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Le=new ye(()=>new mt,l=>l.reset());class mt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,Z=!1,ce=new We,ee=()=>{const l=m.Promise.resolve(void 0);xe=()=>{l.then(x)}};var x=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){O(y)}var f=Le;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Ae(l,f){if(ue.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if($e){e:{try{Ie(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}K(Ae,ue);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),te=0;function fe(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++te,this.da=this.fa=!1}function Ce(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ze(l){this.src=l,this.g={},this.h=0}Ze.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Gt(l,f,E,L);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new fe(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function hr(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(Ce(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Gt(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),vs={};function Mo(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Mo(l,f[U],y,E,L);return null}return y=Uo(y),l&&l[Fe]?l.K(f,y,v(E)?!!E.capture:!1,L):bo(l,f,y,!1,E,L)}function bo(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var J=v(L)?!!L.capture:!!L,qe=ws(l);if(qe||(l[ki]=qe=new Ze(l)),y=qe.add(f,y,E,J,U),y.proxy)return y;if(E=hl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Se||(L=J),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(fr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function hl(){function l(y){return f.call(l.src,l.listener,y)}const f=Fo;return l}function Es(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)Es(l,f[U],y,E,L);else E=v(E)?!!E.capture:!!E,y=Uo(y),l&&l[Fe]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Gt(U,y,E,L),-1<y&&(Ce(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ws(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Gt(f,y,E,L)),(y=-1<l?f[l]:null)&&dr(y))}function dr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Fe])hr(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(fr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ws(f))?(hr(y,l),y.h==0&&(y.src=null,f[ki]=null)):Ce(l)}}}function fr(l){return l in vs?vs[l]:vs[l]="on"+l}function Fo(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&dr(l),l=y.call(E,f)}return l}function ws(l){return l=l[ki],l instanceof Ze?l:null}var Ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(l){return typeof l=="function"?l:(l[Ts]||(l[Ts]=function(f){return l.handleEvent(f)}),l[Ts])}function gt(){B.call(this),this.i=new Ze(this),this.M=this,this.F=null}K(gt,B),gt.prototype[Fe]=!0,gt.prototype.removeEventListener=function(l,f,y,E){Es(this,l,f,y,E)};function yt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ue(f,l);else if(f instanceof ue)f.target=f.target||l;else{var L=f;f=new ue(E,l),k(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];L=pr(J,E,!0,f)&&L}if(J=f.g=l,L=pr(J,E,!0,f)&&L,L=pr(J,E,!1,f)&&L,y)for(U=0;U<y.length;U++)J=f.g=y[U],L=pr(J,E,!1,f)&&L}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)Ce(y[E]);delete l.g[f],l.h--}}this.F=null},gt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},gt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function pr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var qe=J.listener,_t=J.ha||J.src;J.fa&&hr(l.i,J),L=qe.call(_t,E)!==!1&&L}}return L&&!E.defaultPrevented}function jo(l,f,y){if(typeof l=="function")y&&(l=P(l,y));else if(l&&typeof l.handleEvent=="function")l=P(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Fr(l){l.g=jo(()=>{l.g=null,l.i&&(l.i=!1,Fr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ni extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Fr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(l){B.call(this),this.h=l,this.g={}}K(Di,B);var zo=[];function Bo(l){Re(l.g,function(f,y){this.g.hasOwnProperty(y)&&dr(f)},l),l.g={}}Di.prototype.N=function(){Di.aa.N.call(this),Bo(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $o=m.JSON.stringify,qo=m.JSON.parse,Ho=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Vi(){}Vi.prototype.h=null;function Is(l){return l.h||(l.h=l.i())}function Ss(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){ue.call(this,"d")}K(Hn,ue);function As(){ue.call(this,"c")}K(As,ue);var Wn={},Wo=null;function xi(){return Wo=Wo||new gt}Wn.La="serverreachability";function Go(l){ue.call(this,Wn.La,l)}K(Go,ue);function mr(l){const f=xi();yt(f,new Go(f))}Wn.STAT_EVENT="statevent";function Ko(l,f){ue.call(this,Wn.STAT_EVENT,l),this.stat=f}K(Ko,ue);function ot(l){const f=xi();yt(f,new Ko(f,l))}Wn.Ma="timingevent";function Rs(l,f){ue.call(this,Wn.Ma,l),this.size=f}K(Rs,ue);function An(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Oi(){this.g=!0}Oi.prototype.xa=function(){this.g=!1};function Li(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var J="",qe=U.split("&"),_t=0;_t<qe.length;_t++){var Me=qe[_t].split("=");if(1<Me.length){var It=Me[0];Me=Me[1];var ut=It.split("_");J=2<=ut.length&&ut[1]=="type"?J+(It+"="+Me+"&"):J+(It+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function Cs(l,f,y,E,L,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+J})}function Rn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Pc(l,y)+(E?" "+E:"")})}function Qo(l,f){l.info(function(){return"TIMEOUT: "+f})}Oi.prototype.info=function(){};function Pc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return $o(y)}catch{return f}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Mi(){}K(Mi,Vi),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Cn=new Mi;function Pn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fl}function fl(){this.i=null,this.g="",this.h=!1}var Yo={},ks={};function Ns(l,f,y){l.L=1,l.v=$r(sn(f)),l.m=y,l.P=!0,Xo(l,null)}function Xo(l,f){l.F=Date.now(),Ge(l),l.A=sn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Hr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new fl,l.g=Dl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ni(P(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(zo[0]=L.toString()),L=zo);for(var U=0;U<L.length;U++){var J=Mo(y,L[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),mr(),Li(l.i,l.u,l.A,l.l,l.R,l.m)}Pn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Qt(l)==3?f.j():this.Y(l)},Pn.prototype.Y=function(l){try{if(l==this.g)e:{const ut=Qt(this.g);var f=this.g.Ba();const mn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||ra(this.g)))){this.J||ut!=4||f==7||(f==8||0>=mn?mr(3):mr(2)),bi(this);var y=this.g.Z();this.X=y;t:if(pl(this)){var E=ra(this.g);l="";var L=E.length,U=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Ur(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Cs(this.i,this.u,this.A,this.l,this.R,ut,y),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,_t=this.g;if((qe=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(qe)){var Me=qe;break t}}Me=null}if(y=Me)Rn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jo(this,y);else{this.o=!1,this.s=3,ot(12),fn(this),Ur(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<J.length;)if(an=kc(this,J),an==ks){ut==4&&(this.s=4,ot(14),y=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Yo){this.s=4,ot(15),Rn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Rn(this.i,this.l,an,null),Jo(this,an);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||J.length!=0||this.h.h||(this.s=1,ot(16),y=!1),this.o=this.o&&y,!y)Rn(this.i,this.l,J,"[Invalid Chunked Response]"),fn(this),Ur(this);else if(0<J.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),sa(It),It.M=!0,ot(11))}}else Rn(this.i,this.l,J,null),Jo(this,J);ut==4&&fn(this),this.o&&!this.J&&(ut==4?zs(this.j,this):(this.o=!1,Ge(this)))}else Ms(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),fn(this),Ur(this)}}}catch{}finally{}};function pl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function kc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ks:(y=Number(f.substring(y,E)),isNaN(y)?Yo:(E+=1,E+y>f.length?ks:(f=f.slice(E,E+y),l.C=E+y,f)))}Pn.prototype.cancel=function(){this.J=!0,fn(this)};function Ge(l){l.S=Date.now()+l.I,ml(l,l.I)}function ml(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=An(P(l.ba,l),f)}function bi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Pn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Qo(this.i,this.A),this.L!=2&&(mr(),ot(17)),fn(this),this.s=2,Ur(this)):ml(this,this.S-l)};function Ur(l){l.j.G==0||l.J||zs(l.j,l)}function fn(l){bi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Bo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Jo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||$t(y.h,l))){if(!l.K&&$t(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)js(y),xn(y);else break e;Us(y),ot(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=An(P(y.Za,y),6e3));if(1>=yl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Er(y,11)}else if((l.K||y.g==l)&&js(y),!de(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Me=L[f];if(y.T=Me[0],Me=Me[1],y.G==2)if(Me[0]=="c"){y.K=Me[1],y.ia=Me[2];const It=Me[3];It!=null&&(y.la=It,y.j.info("VER="+y.la));const ut=Me[4];ut!=null&&(y.Aa=ut,y.j.info("SVER="+y.Aa));const mn=Me[5];mn!=null&&typeof mn=="number"&&0<mn&&(E=1.5*mn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const an=l.g;if(an){const qi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var U=E.h;U.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Zo(U,U.h),U.h=null))}if(E.D){const $s=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(E.ya=$s,He(E.I,E.D,$s))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=Nl(E,E.J?E.ia:null,E.W),J.K){_l(E.h,J);var qe=J,_t=E.L;_t&&(qe.I=_t),qe.B&&(bi(qe),Ge(qe)),E.g=J}else $i(E);0<y.i.length&&Yn(y)}else Me[0]!="stop"&&Me[0]!="close"||Er(y,7);else y.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Er(y,7):kt(y):Me[0]!="noop"&&y.l&&y.l.ta(Me),y.v=0)}}mr(4)}catch{}}var gl=class{constructor(l,f){this.g=l,this.map=f}};function Fi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function yl(l){return l.h?1:l.g?l.g.size:0}function $t(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Zo(l,f){l.g?l.g.add(f):l.h=f}function _l(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Fi.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function vl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Y(l.i)}function Ds(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Vs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function jr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Vs(l),E=Ds(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function gr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof gr){this.h=l.h,ji(this,l.j),this.o=l.o,this.g=l.g,zr(this,l.s),this.l=l.l;var f=l.i,y=new Gn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Br(this,y),this.m=l.m}else l&&(f=String(l).match(Ui))?(this.h=!1,ji(this,f[1]||"",!0),this.o=Oe(f[2]||""),this.g=Oe(f[3]||"",!0),zr(this,f[4]),this.l=Oe(f[5]||"",!0),Br(this,f[6]||"",!0),this.m=Oe(f[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}gr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(qr(f,xs,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(qr(f,xs,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(qr(y,y.charAt(0)=="/"?Tl:wl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",qr(y,ea)),l.join("")};function sn(l){return new gr(l)}function ji(l,f,y){l.j=y?Oe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function zr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Br(l,f,y){f instanceof Gn?(l.i=f,Kn(l.i,l.h)):(y||(f=qr(f,Il)),l.i=new Gn(f,l.h))}function He(l,f,y){l.i.set(f,y)}function $r(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Oe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function qr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,El),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function El(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var xs=/[#\/\?@]/g,wl=/[#\?:]/g,Tl=/[#\?]/g,Il=/[#\?@]/g,ea=/#/g;function Gn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Pt(l){l.g||(l.g=new Map,l.h=0,l.i&&Nc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Gn.prototype,r.add=function(l,f){Pt(this),this.i=null,l=pn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function kn(l,f){Pt(l),f=pn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Nn(l,f){return Pt(l),f=pn(l,f),l.g.has(f)}r.forEach=function(l,f){Pt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},r.na=function(){Pt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},r.V=function(l){Pt(this);let f=[];if(typeof l=="string")Nn(this,l)&&(f=f.concat(this.g.get(pn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Pt(this),this.i=null,l=pn(this,l),Nn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Hr(l,f,y){kn(l,f),0<y.length&&(l.i=null,l.g.set(pn(l,f),Y(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=U;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),l.push(L)}}return this.i=l.join("&")};function pn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Kn(l,f){f&&!l.j&&(Pt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(kn(this,E),Hr(this,L,y))},l)),l.j=f}function Dc(l,f){const y=new Oi;if(m.Image){const E=new Image;E.onload=j(Kt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Kt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Kt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Kt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Sl(l,f){const y=new Oi,E=new AbortController,L=setTimeout(()=>{E.abort(),Kt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Kt(y,"TestPingServer: ok",!0,f):Kt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Kt(y,"TestPingServer: error",!1,f)})}function Kt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Vc(){this.g=new Ho}function Al(l,f,y){const E=y||"";try{jr(l,function(L,U){let J=L;v(L)&&(J=$o(L)),f.push(E+U+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function yr(l){this.l=l.Ub||null,this.j=l.eb||!1}K(yr,Vi),yr.prototype.g=function(){return new zi(this.l,this.j)},yr.prototype.i=(function(l){return function(){return l}})({});function zi(l,f){gt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(zi,gt),r=zi.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Vn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Dn(this):Vn(this),this.readyState==3&&Rl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Dn(this))},r.Qa=function(l){this.g&&(this.response=l,Dn(this))},r.ga=function(){this.g&&Dn(this)};function Dn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Vn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Vn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _r(l){let f="";return Re(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Wr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=_r(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):He(l,f,y))}function et(l){gt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(et,gt);var xc=/^https?$/i,ta=["POST","PUT"];r=et.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Is(this.o):Is(Cn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Bi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ta,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ls(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Bi(this,U)}};function Bi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Os(l),on(l)}function Os(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,yt(this,"complete"),yt(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),et.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},r.bb=function(){na(this)};function na(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Qt(l)!=4||l.Z()!=2)){if(l.u&&Qt(l)==4)jo(l.Ea,0,l);else if(yt(l,"readystatechange"),Qt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(l.D).match(Ui)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!xc.test(L?L.toLowerCase():"")}y=E}if(y)yt(l,"complete"),yt(l,"success");else{l.m=6;try{var U=2<Qt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Os(l)}}finally{on(l)}}}}function on(l,f){if(l.g){Ls(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||yt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Ls(l){l.I&&(m.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Qt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),qo(f)}};function ra(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ms(l){const f={};l=(l.g&&2<=Qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(de(l[E]))continue;var y=V(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function ia(l){this.Aa=0,this.i=[],this.j=new Oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,l),this.cb=Qn("retryDelaySeedMs",1e4,l),this.Wa=Qn("forwardChannelMaxRetries",2,l),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(l&&l.concurrentRequestLimit),this.Da=new Vc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ia.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,E){ot(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Nl(this,null,this.W),Yn(this)};function kt(l){if(bs(l),l.G==3){var f=l.U++,y=sn(l.I);if(He(y,"SID",l.K),He(y,"RID",f),He(y,"TYPE","terminate"),vr(l,y),f=new Pn(l,l.j,f),f.L=2,f.v=$r(sn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Dl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ge(f)}kl(l)}function xn(l){l.g&&(sa(l),l.g.cancel(),l.g=null)}function bs(l){xn(l),l.u&&(m.clearTimeout(l.u),l.u=null),js(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Yn(l){if(!rn(l.h)&&!l.s){l.s=!0;var f=l.Ga;xe||ee(),Z||(xe(),Z=!0),ce.add(f,l),l.B=0}}function Oc(l,f){return yl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=An(P(l.Ga,l,f),Pl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Pn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Gr(this,L,f),y=sn(this.I),He(y,"RID",l),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),vr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(_r(U)))+"&"+f:this.m&&Wr(y,this.m,U)),Zo(this.h,L),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",f),He(y,"SID","null"),L.T=!0,Ns(L,y,null)):Ns(L,y,f),this.G=2}}else this.G==3&&(l?Fs(this,l):this.i.length==0||rn(this.h)||Fs(this))};function Fs(l,f){var y;f?y=f.l:y=l.U++;const E=sn(l.I);He(E,"SID",l.K),He(E,"RID",y),He(E,"AID",l.T),vr(l,E),l.m&&l.o&&Wr(E,l.m,l.o),y=new Pn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Gr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Zo(l.h,y),Ns(y,E,f)}function vr(l,f){l.H&&Re(l.H,function(y,E){He(f,E,y)}),l.l&&jr({},function(y,E){He(f,E,y)})}function Gr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?P(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=L[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let qe=!0;for(let _t=0;_t<y;_t++){let Me=L[_t].g;const It=L[_t].map;if(Me-=U,0>Me)U=Math.max(0,L[_t].g-100),qe=!1;else try{Al(It,J,"req"+Me+"_")}catch{E&&E(It)}}if(qe){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function $i(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;xe||ee(),Z||(xe(),Z=!0),ce.add(f,l),l.v=0}}function Us(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=An(P(l.Fa,l),Pl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,Cl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=An(P(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),xn(this),Cl(this))};function sa(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Cl(l){l.g=new Pn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=sn(l.qa);He(f,"RID","rpc"),He(f,"SID",l.K),He(f,"AID",l.T),He(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(f,"TO",l.ja),He(f,"TYPE","xmlhttp"),vr(l,f),l.m&&l.o&&Wr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=$r(sn(f)),y.m=null,y.P=!0,Xo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),Us(this),ot(19))};function js(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function zs(l,f){var y=null;if(l.g==f){js(l),sa(l),l.g=null;var E=2}else if($t(l.h,f))y=f.D,_l(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=xi(),yt(E,new Rs(E,y)),Yn(l)}else $i(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Oc(l,f)||E==2&&Us(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:Er(l,5);break;case 4:Er(l,10);break;case 3:Er(l,6);break;default:Er(l,2)}}}function Pl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function Er(l,f){if(l.j.info("Error code "+f),f==2){var y=P(l.fb,l),E=l.Xa;const L=!E;E=new gr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ji(E,"https"),$r(E),L?Dc(E.toString(),y):Sl(E.toString(),y)}else ot(2);l.G=0,l.l&&l.l.sa(f),kl(l),bs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function kl(l){if(l.G=0,l.ka=[],l.l){const f=vl(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function Nl(l,f,y){var E=y instanceof gr?sn(y):new gr(y);if(E.g!="")f&&(E.g=f+"."+E.g),zr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new gr(null);E&&ji(U,E),f&&(U.g=f),L&&zr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&He(E,y,f),He(E,"VER",l.la),vr(l,E),E}function Dl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new et(new yr({eb:y})):new et(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function oa(){}r=oa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Bs(){}Bs.prototype.g=function(l,f){return new qt(l,f)};function qt(l,f){gt.call(this),this.g=new ia(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!de(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!de(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Xn(this)}K(qt,gt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){kt(this.g)},qt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=$o(l),l=y);f.i.push(new gl(f.Ya++,l)),f.G==3&&Yn(f)},qt.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,qt.aa.N.call(this)};function Vl(l){Hn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}K(Vl,Hn);function xl(){As.call(this),this.status=1}K(xl,As);function Xn(l){this.g=l}K(Xn,oa),Xn.prototype.ua=function(){yt(this.g,"a")},Xn.prototype.ta=function(l){yt(this.g,new Vl(l))},Xn.prototype.sa=function(l){yt(this.g,new xl)},Xn.prototype.ra=function(){yt(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,B_=function(){return new Bs},z_=function(){return xi()},j_=Wn,Ad={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,Uu=Ps,dl.COMPLETE="complete",U_=dl,Ss.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Oa=Ss,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,F_=et}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});const bg="@firebase/firestore",Fg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Bd("@firebase/firestore");function ho(){return fs.logLevel}function re(r,...e){if(fs.logLevel<=De.DEBUG){const t=e.map(nf);fs.debug(`Firestore (${Do}): ${r}`,...t)}}function Lr(r,...e){if(fs.logLevel<=De.ERROR){const t=e.map(nf);fs.error(`Firestore (${Do}): ${r}`,...t)}}function vi(r,...e){if(fs.logLevel<=De.WARN){const t=e.map(nf);fs.warn(`Firestore (${Do}): ${r}`,...t)}}function nf(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,$_(r,s,t)}function $_(r,e,t){let s=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Lr(s),new Error(s)}function Be(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||$_(e,o,s)}function Te(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class M1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class b1{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new os;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new os,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new os)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new q_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class F1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new F1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ug(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ug(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function z1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=z1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Pe(r,e){return r<e?-1:r>e?1:0}function Rd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Pe(s,o);{const u=H_(),h=B1(u.encode(jg(r,t)),u.encode(jg(e,t)));return h!==0?h:Pe(s,o)}}t+=s>65535?2:1}return Pe(r.length,e.length)}function jg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function B1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Pe(r[t],e[t]);return Pe(r.length,e.length)}function To(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="__name__";class nr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=nr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Pe(e.length,t.length)}static compareSegments(e,t){const s=nr.isNumericId(e),o=nr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):Rd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class Qe extends nr{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const $1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends nr{construct(e,t,s){return new xt(e,t,s)}static isValidIdentifier(e){return $1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zg}static keyField(){return new xt([zg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Qe.fromString(e))}static fromName(e){return new he(Qe.fromString(e).popFirst(5))}static empty(){return new he(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(r,e,t){if(!t)throw new ie(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function q1(r,e,t,s){if(e===!0&&s===!0)throw new ie(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Bg(r){if(!he.isDocumentKey(r))throw new ie(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $g(r){if(he.isDocumentKey(r))throw new ie(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function G_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function pc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function yi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ie(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pc(r);throw new ie(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(r,e){const t={typeString:r};return e&&(t.value=e),t}function ol(r,e){if(!G_(r))throw new ie(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ie(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=-62135596800,Hg=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Hg);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qg)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hg}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ol(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:ft("string",Je._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Je(0,0))}static max(){return new we(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wa=-1;function H1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Ei(o,he.empty(),e)}function W1(r){return new Ei(r.readTime,r.key,Wa)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(we.min(),he.empty(),Wa)}static max(){return new Ei(we.max(),he.empty(),Wa)}}function G1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(r.documentKey,e.documentKey),t!==0?t:Pe(r.largestBatchId,e.largestBatchId))}/**
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
 */const K1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==K1)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function Y1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}mc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=-1;function gc(r){return r==null}function Zu(r){return r===0&&1/r==-1/0}function X1(r){return typeof r=="number"&&Number.isInteger(r)&&!Zu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="";function J1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Wg(e)),e=Z1(r.get(t),e);return Wg(e)}function Z1(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case K_:t+="";break;default:t+=u}}return t}function Wg(r){return r+K_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ms(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Q_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||Vt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ku(this.root,e,this.comparator,!0)}}class ku{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Vt.RED,this.left=o??Vt.EMPTY,this.right=u??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Vt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Vt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Vt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kg(this.data.getIterator())}getIteratorFrom(e){return new Kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class Kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new wt(xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Y_("Invalid base64 string: "+u):u}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const eS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(r){if(Be(!!r,39018),typeof r=="string"){let e=0;const t=eS.exec(r);if(Be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ti(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
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
 */const X_="server_timestamp",J_="__type__",Z_="__previous_value__",ev="__local_write_time__";function of(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[J_])===null||t===void 0?void 0:t.stringValue)===X_}function yc(r){const e=r.mapValue.fields[Z_];return of(e)?yc(e):e}function Ga(r){const e=wi(r.mapValue.fields[ev].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,s,o,u,h,m,g,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=w}}const ec="(default)";class Ka{constructor(e,t){this.projectId=e,this.database=t||ec}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database===ec}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tv="__type__",nS="__max__",Nu={mapValue:{}},nv="__vector__",tc="value";function Ii(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?of(r)?4:iS(r)?9007199254740991:rS(r)?10:11:ve(28295,{value:r})}function lr(r,e){if(r===e)return!0;const t=Ii(r);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ga(r).isEqual(Ga(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=wi(o.timestampValue),m=wi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?Zu(h)===Zu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Gg(h)!==Gg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!lr(h[g],m[g])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function Qa(r,e){return(r.values||[]).find((t=>lr(t,e)))!==void 0}function Io(r,e){if(r===e)return 0;const t=Ii(r),s=Ii(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=lt(u.integerValue||u.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Qg(r.timestampValue,e.timestampValue);case 4:return Qg(Ga(r),Ga(e));case 5:return Rd(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),g=Ti(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Pe(m[v],g[v]);if(w!==0)return w}return Pe(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Pe(lt(u.latitude),lt(h.latitude));return m!==0?m:Pe(lt(u.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Yg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,v,w;const A=u.fields||{},P=h.fields||{},j=(m=A[tc])===null||m===void 0?void 0:m.arrayValue,K=(g=P[tc])===null||g===void 0?void 0:g.arrayValue,Y=Pe(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((w=K==null?void 0:K.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:Yg(j,K)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Nu.mapValue&&h===Nu.mapValue)return 0;if(u===Nu.mapValue)return 1;if(h===Nu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const P=Rd(g[A],w[A]);if(P!==0)return P;const j=Io(m[g[A]],v[w[A]]);if(j!==0)return j}return Pe(g.length,w.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function Qg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const t=wi(r),s=wi(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function Yg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Io(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function So(r){return Cd(r)}function Cd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ti(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return he.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Cd(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Cd(t.fields[h])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function ju(r){switch(Ii(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(r);return e?16+ju(e):16;case 5:return 2*r.stringValue.length;case 6:return Ti(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ju(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ms(s.fields,((u,h)=>{o+=u.length+ju(h)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function Xg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Pd(r){return!!r&&"integerValue"in r}function af(r){return!!r&&"arrayValue"in r}function Jg(r){return!!r&&"nullValue"in r}function Zg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zu(r){return!!r&&"mapValue"in r}function rS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[tv])===null||t===void 0?void 0:t.stringValue)===nv}function ja(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ms(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ja(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ja(r.arrayValue.values[t]);return e}return Object.assign({},r)}function iS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===nS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(t)}setAll(e){let t=xt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=ja(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ms(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Tn(ja(this.value))}}function rv(r){const e=[];return ms(r.fields,((t,s)=>{const o=new xt([t]);if(zu(s)){const u=rv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,we.min(),we.min(),we.min(),Tn.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,we.min(),we.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,we.min(),we.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nc{constructor(e,t){this.position=e,this.inclusive=t}}function ey(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ty(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!lr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ya{constructor(e,t="asc"){this.field=e,this.dir=t}}function sS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class iv{}class dt extends iv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new aS(e,t,s):t==="array-contains"?new cS(e,s):t==="in"?new hS(e,s):t==="not-in"?new dS(e,s):t==="array-contains-any"?new fS(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lS(e,s):new uS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends iv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new qn(e,t)}matches(e){return sv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function sv(r){return r.op==="and"}function ov(r){return oS(r)&&sv(r)}function oS(r){for(const e of r.filters)if(e instanceof qn)return!1;return!0}function kd(r){if(r instanceof dt)return r.field.canonicalString()+r.op.toString()+So(r.value);if(ov(r))return r.filters.map((e=>kd(e))).join(",");{const e=r.filters.map((t=>kd(t))).join(",");return`${r.op}(${e})`}}function av(r,e){return r instanceof dt?(function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&lr(s.value,o.value)})(r,e):r instanceof qn?(function(s,o){return o instanceof qn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&av(h,o.filters[m])),!0):!1})(r,e):void ve(19439)}function lv(r){return r instanceof dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(r):r instanceof qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(lv).join(" ,")+"}"})(r):"Filter"}class aS extends dt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class lS extends dt{constructor(e,t){super(e,"in",t),this.keys=uv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uS extends dt{constructor(e,t){super(e,"not-in",t),this.keys=uv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function uv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>he.fromName(s.referenceValue)))}class cS extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return af(t)&&Qa(t.arrayValue,this.value)}}class hS extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qa(this.value.arrayValue,t)}}class dS extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qa(this.value.arrayValue,t)}}class fS extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!af(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Qa(this.value.arrayValue,s)))}}/**
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
 */class pS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function ny(r,e=null,t=[],s=[],o=null,u=null,h=null){return new pS(r,e,t,s,o,u,h)}function lf(r){const e=Te(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>kd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.Pe=t}return e.Pe}function uf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!sS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!av(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ty(r.startAt,e.startAt)&&ty(r.endAt,e.endAt)}function Nd(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mS(r,e,t,s,o,u,h,m){return new Oo(r,e,t,s,o,u,h,m)}function cf(r){return new Oo(r)}function ry(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function cv(r){return r.collectionGroup!==null}function za(r){const e=Te(r);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new wt(xt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Ya(u,s))})),t.has(xt.keyField().canonicalString())||e.Te.push(new Ya(xt.keyField(),s))}return e.Te}function ir(r){const e=Te(r);return e.Ie||(e.Ie=gS(e,za(r))),e.Ie}function gS(r,e){if(r.limitType==="F")return ny(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ya(o.field,u)}));const t=r.endAt?new nc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new nc(r.startAt.position,r.startAt.inclusive):null;return ny(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Dd(r,e){const t=r.filters.concat([e]);return new Oo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function rc(r,e,t){return new Oo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function _c(r,e){return uf(ir(r),ir(e))&&r.limitType===e.limitType}function hv(r){return`${lf(ir(r))}|lt:${r.limitType}`}function fo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>lv(o))).join(", ")}]`),gc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(ir(r))}; limitType=${r.limitType})`}function vc(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of za(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const v=ey(h,m,g);return h.inclusive?v<=0:v<0})(s.startAt,za(s),o)||s.endAt&&!(function(h,m,g){const v=ey(h,m,g);return h.inclusive?v>=0:v>0})(s.endAt,za(s),o))})(r,e)}function yS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function dv(r){return(e,t)=>{let s=!1;for(const o of za(r)){const u=_S(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function _S(r,e,t){const s=r.field.isKeyField()?he.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?Io(g,v):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return Q_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new it(he.comparator);function Mr(){return vS}const fv=new it(he.comparator);function La(...r){let e=fv;for(const t of r)e=e.insert(t.key,t);return e}function pv(r){let e=fv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ss(){return Ba()}function mv(){return Ba()}function Ba(){return new gs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const ES=new it(he.comparator),wS=new wt(he.comparator);function Ve(...r){let e=wS;for(const t of r)e=e.add(t);return e}const TS=new wt(Pe);function IS(){return TS}/**
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
 */function hf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function gv(r){return{integerValue:""+r}}function SS(r,e){return X1(e)?gv(e):hf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this._=void 0}}function AS(r,e,t){return r instanceof Xa?(function(o,u){const h={fields:{[J_]:{stringValue:X_},[ev]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&of(u)&&(u=yc(u)),u&&(h.fields[Z_]=u),{mapValue:h}})(t,e):r instanceof Ja?_v(r,e):r instanceof Za?vv(r,e):(function(o,u){const h=yv(o,u),m=iy(h)+iy(o.Ee);return Pd(h)&&Pd(o.Ee)?gv(m):hf(o.serializer,m)})(r,e)}function RS(r,e,t){return r instanceof Ja?_v(r,e):r instanceof Za?vv(r,e):t}function yv(r,e){return r instanceof ic?(function(s){return Pd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Xa extends Ec{}class Ja extends Ec{constructor(e){super(),this.elements=e}}function _v(r,e){const t=Ev(e);for(const s of r.elements)t.some((o=>lr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Za extends Ec{constructor(e){super(),this.elements=e}}function vv(r,e){let t=Ev(e);for(const s of r.elements)t=t.filter((o=>!lr(o,s)));return{arrayValue:{values:t}}}class ic extends Ec{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function iy(r){return lt(r.integerValue||r.doubleValue)}function Ev(r){return af(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,t){this.field=e,this.transform=t}}function PS(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ja&&o instanceof Ja||s instanceof Za&&o instanceof Za?To(s.elements,o.elements,lr):s instanceof ic&&o instanceof ic?lr(s.Ee,o.Ee):s instanceof Xa&&o instanceof Xa})(r.transform,e.transform)}class kS{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class wc{}function wv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new df(r.key,$n.none()):new al(r.key,r.data,$n.none());{const t=r.data,s=Tn.empty();let o=new wt(xt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ys(r.key,s,new zn(o.toArray()),$n.none())}}function NS(r,e,t){r instanceof al?(function(o,u,h){const m=o.value.clone(),g=oy(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof ys?(function(o,u,h){if(!Bu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=oy(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Tv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function $a(r,e,t,s){return r instanceof al?(function(u,h,m,g){if(!Bu(u.precondition,h))return m;const v=u.value.clone(),w=ay(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof ys?(function(u,h,m,g){if(!Bu(u.precondition,h))return m;const v=ay(u.fieldTransforms,g,h),w=h.data;return w.setAll(Tv(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(r,e,t,s):(function(u,h,m){return Bu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function DS(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=yv(s.transform,o||null);u!=null&&(t===null&&(t=Tn.empty()),t.set(s.field,u))}return t||null}function sy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,((u,h)=>PS(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class al extends wc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ys extends wc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Tv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function oy(r,e,t){const s=new Map;Be(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,RS(h,m,t[o]))}return s}function ay(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,AS(u,h,e))}return s}class df extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VS extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&NS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=$a(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=$a(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=wv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,s)=>sy(t,s)))&&To(this.baseMutations,e.baseMutations,((t,s)=>sy(t,s)))}}class ff{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return ES})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new ff(e,t,s,o)}}/**
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
 */class OS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,be;function MS(r){switch(r){case z.OK:return ve(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function Iv(r){if(r===void 0)return Lr("GRPC error has no .code"),z.UNKNOWN;switch(r){case ht.OK:return z.OK;case ht.CANCELLED:return z.CANCELLED;case ht.UNKNOWN:return z.UNKNOWN;case ht.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ht.INTERNAL:return z.INTERNAL;case ht.UNAVAILABLE:return z.UNAVAILABLE;case ht.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ht.NOT_FOUND:return z.NOT_FOUND;case ht.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ht.ABORTED:return z.ABORTED;case ht.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ht.DATA_LOSS:return z.DATA_LOSS;default:return ve(39323,{code:r})}}(be=ht||(ht={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const bS=new gi([4294967295,4294967295],0);function ly(r){const e=H_().encode(r),t=new b_;return t.update(e),new Uint8Array(t.digest())}function uy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new gi([t,s],0),new gi([o,u],0)]}class pf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ma(`Invalid padding: ${t}`);if(s<0)throw new Ma(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=gi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(gi.fromNumber(s)));return o.compare(bS)===1&&(o=new gi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ly(e),[s,o]=uy(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new pf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=ly(e),[s,o]=uy(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ll.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Tc(we.min(),o,new it(Pe),Mr(),Ve())}}class ll{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ll(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Sv{constructor(e,t){this.targetId=e,this.De=t}}class Av{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class cy{constructor(){this.ve=0,this.Ce=hy(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),s=Ve();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:u})}})),new ll(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=hy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class FS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Mr(),this.je=Du(),this.Je=Du(),this.He=new it(Pe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Nd(u))if(s===0){const h=new he(u.path);this.Xe(t,h,zt.newNoDocument(h,we.min()))}else Be(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(g){if(g instanceof Y_)return vi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new pf(h,o,u)}catch(g){return vi(g instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Nd(m.target)){const g=new he(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,zt.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Ve();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new Tc(e,t,this.He,this.ze,s);return this.ze=Mr(),this.je=Du(),this.Je=Du(),this.He=new it(Pe),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new cy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Pe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Pe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new cy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Du(){return new it(he.comparator)}function hy(){return new it(he.comparator)}const US={asc:"ASCENDING",desc:"DESCENDING"},jS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zS={and:"AND",or:"OR"};class BS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vd(r,e){return r.useProto3Json||gc(e)?e:{value:e}}function sc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function $S(r,e){return sc(r,e.toTimestamp())}function sr(r){return Be(!!r,49232),we.fromTimestamp((function(t){const s=wi(t);return new Je(s.seconds,s.nanos)})(r))}function mf(r,e){return xd(r,e).canonicalString()}function xd(r,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Cv(r){const e=Qe.fromString(r);return Be(Vv(e),10190,{key:e.toString()}),e}function Od(r,e){return mf(r.databaseId,e.path)}function dd(r,e){const t=Cv(e);if(t.get(1)!==r.databaseId.projectId)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new he(kv(t))}function Pv(r,e){return mf(r.databaseId,e)}function qS(r){const e=Cv(r);return e.length===4?Qe.emptyPath():kv(e)}function Ld(r){return new Qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function kv(r){return Be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function dy(r,e,t){return{name:Od(r,e),fields:t.value.mapValue.fields}}function HS(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(Be(w===void 0||typeof w=="string",58123),Ot.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ot.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?z.UNKNOWN:Iv(v.code);return new ie(w,v.message||"")})(h);t=new Av(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=dd(r,s.document.name),u=sr(s.document.updateTime),h=s.document.createTime?sr(s.document.createTime):we.min(),m=new Tn({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new $u(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=dd(r,s.document),u=s.readTime?sr(s.readTime):we.min(),h=zt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new $u([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=dd(r,s.document),u=s.removedTargetIds||[];t=new $u([],u,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new LS(o,u),m=s.targetId;t=new Sv(m,h)}}return t}function WS(r,e){let t;if(e instanceof al)t={update:dy(r,e.key,e.value)};else if(e instanceof df)t={delete:Od(r,e.key)};else if(e instanceof ys)t={update:dy(r,e.key,e.data),updateMask:tA(e.fieldMask)};else{if(!(e instanceof VS))return ve(16599,{Rt:e.type});t={verify:Od(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Za)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ic)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw ve(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:$S(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)})(r,e.precondition)),t}function GS(r,e){return r&&r.length>0?(Be(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?sr(o.updateTime):sr(u);return h.isEqual(we.min())&&(h=sr(u)),new kS(h,o.transformResults||[])})(t,e)))):[]}function KS(r,e){return{documents:[Pv(r,e.path)]}}function QS(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Pv(r,o);const u=(function(v){if(v.length!==0)return Dv(qn.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(P){return{field:po(P.field),direction:JS(P.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Vd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function YS(r){let e=qS(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const P=Nv(A);return P instanceof qn&&ov(P)?P.getFilters():[P]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((P=>(function(K){return new Ya(mo(K.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(P)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let P;return P=typeof A=="object"?A.value:A,gc(P)?null:P})(t.limit));let g=null;t.startAt&&(g=(function(A){const P=!!A.before,j=A.values||[];return new nc(j,P)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const P=!A.before,j=A.values||[];return new nc(j,P)})(t.endAt)),mS(e,o,h,u,m,"F",g,v)}function XS(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mo(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=mo(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return dt.create(mo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return qn.create(t.compositeFilter.filters.map((s=>Nv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function JS(r){return US[r]}function ZS(r){return jS[r]}function eA(r){return zS[r]}function po(r){return{fieldPath:r.canonicalString()}}function mo(r){return xt.fromServerFormat(r.fieldPath)}function Dv(r){return r instanceof dt?(function(t){if(t.op==="=="){if(Zg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(Jg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(Jg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:ZS(t.op),value:t.value}}})(r):r instanceof qn?(function(t){const s=t.getFilters().map((o=>Dv(o)));return s.length===1?s[0]:{compositeFilter:{op:eA(t.op),filters:s}}})(r):ve(54877,{filter:r})}function tA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Vv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,s,o,u=we.min(),h=we.min(),m=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.gt=e}}function rA(r){const e=YS({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rc(e,e.limit,"L"):e}/**
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
 */class iA{constructor(){this.Dn=new sA}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ei.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class sA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new wt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new wt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xv=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(xv,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ao(0)}static ur(){return new Ao(-1)}}/**
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
 */const py="LruGarbageCollector",oA=1048576;function my([r,e],[t,s]){const o=Pe(r,t);return o===0?Pe(e,s):o}class aA{constructor(e){this.Tr=e,this.buffer=new wt(my),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();my(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(py,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xo(t)?re(py,"Ignoring IndexedDB error during garbage collection: ",t):await Vo(t)}await this.Rr(3e5)}))}}class uA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(mc.ue);const s=new aA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(fy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),ho()<=De.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function cA(r,e){return new uA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.changes=new gs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class dA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&$a(s.mutation,o,zn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=La();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ss();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Mr();const h=Ba(),m=(function(){return Ba()})();return t.forEach(((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof ys)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),$a(w.mutation,v,w.mutation.getFieldMask(),Je.now())):h.set(v.key,zn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>{var A;return m.set(v,new dA(w,(A=h.get(v))!==null&&A!==void 0?A:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Ba();let o=new it(((h,m)=>h-m)),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||zn.empty();w=m.applyToLocalView(v,w),s.set(g,w);const A=(o.get(m.batchId)||Ve()).add(g);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,A=mv();w.forEach((P=>{if(!u.has(P)){const j=wv(t.get(P),s.get(P));j!==null&&A.set(P,j),u=u.add(P)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(ss());let m=Wa,g=u;return h.next((v=>$.forEach(v,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((P=>{g=g.insert(w,P)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,g,v,Ve()))).next((w=>({batchId:m,changes:pv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next((s=>{let o=La();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=La();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const v=(function(A,P){return new Oo(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((A,P)=>{h=h.insert(A,P)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let m=La();return h.forEach(((g,v)=>{const w=u.get(g);w!==void 0&&$a(w.mutation,v,zn.empty(),Je.now()),vc(t,v)&&(m=m.insert(g,v))})),m}))}}/**
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
 */class pA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:sr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:rA(o.bundledQuery),readTime:sr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class mA{constructor(){this.overlays=new it(he.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ss();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ss(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new it(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=ss(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=ss(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return $.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new OS(t,s));let u=this.kr.get(t);u===void 0&&(u=Ve(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.qr=new wt(Ct.Qr),this.$r=new wt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Ct(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new he(new Qe([])),s=new Ct(t,e),o=new Ct(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new he(new Qe([])),s=new Ct(t,e),o=new Ct(t,e+1);let u=Ve();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Ct(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return he.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Ct.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new xS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new Ct(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?sf:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new wt(Pe);return t.forEach((o=>{const u=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Ct(new he(u),0);let m=new wt(Pe);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.Hr)),!0)}),h),$.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(o=>{const u=new Ct(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Ct(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.ni=e,this.docs=(function(){return new it(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Mr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():zt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Mr();const h=t.path,m=new he(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||G1(W1(w),s)<=0||(o.has(w.key)||vc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new vA(this)}getSize(e){return $.resolve(this.size)}}class vA extends hA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.persistence=e,this.ii=new gs((t=>lf(t)),uf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new gf,this.targetCount=0,this._i=Ao.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.ai={},this.overlays={},this.ui=new mc(0),this.ci=!1,this.ci=!0,this.li=new gA,this.referenceDelegate=e(this),this.hi=new EA(this),this.indexManager=new iA,this.remoteDocumentCache=(function(o){return new _A(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new nA(t),this.Ti=new pA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new yA(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new wA(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class wA extends Q1{constructor(e){super(),this.currentSequenceNumber=e}}class yf{constructor(e){this.persistence=e,this.Ai=new gf,this.Ri=null}static Vi(e){return new yf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const o=he.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,we.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class oc{constructor(e,t){this.persistence=e,this.gi=new gs((s=>J1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=cA(this,t)}static Vi(e,t){return new oc(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,we.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ju(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new _f(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Yw()?8:Y1(Bt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new TA;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(ho()<=De.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(ho()<=De.DEBUG&&re("QueryEngine","Query:",fo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ho()<=De.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):$.resolve())}ps(e,t){if(ry(t))return $.resolve(null);let s=ir(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=rc(t,null,"F"),s=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ve(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.bs(t,m);return this.Ds(t,v,h,g.readTime)?this.ps(e,rc(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,s,o){return ry(t)||o.isEqual(we.min())?$.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?$.resolve(null):(ho()<=De.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.vs(e,h,t,H1(o,Wa)).next((m=>m)))}))}bs(e,t){let s=new wt(dv(e));return t.forEach(((o,u)=>{vc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return ho()<=De.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",fo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ei.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const vf="LocalStore",SA=3e8;class AA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(Pe),this.Ms=new gs((u=>lf(u)),uf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function RA(r,e,t,s){return new AA(r,e,t,s)}async function Lv(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Ve();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function CA(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,w){const A=v.batch,P=A.keys();let j=$.resolve();return P.forEach((K=>{j=j.next((()=>w.getEntry(g,K))).next((Y=>{const q=v.docVersions.get(K);Be(q!==null,48541),Y.version.compareTo(q)<0&&(A.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(g,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Ve();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Mv(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function PA(r,e){const t=Te(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,A)=>{const P=o.get(A);if(!P)return;m.push(t.hi.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.hi.addMatchingKeys(u,w.addedDocuments,A))));let j=P.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(Ot.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(A,j),(function(Y,q,ye){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=SA?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0})(P,j,w)&&m.push(t.hi.updateTargetData(u,j))}));let g=Mr(),v=Ve();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(kA(u,h,e.documentUpdates).next((w=>{g=w.Ls,v=w.ks}))),!s.isEqual(we.min())){const w=t.hi.getLastRemoteSnapshotVersion(u).next((A=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,v))).next((()=>g))})).then((u=>(t.Fs=o,u)))}function kA(r,e,t){let s=Ve(),o=Ve();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Mr();return t.forEach(((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(vf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function NA(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=sf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function DA(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Md(r,e,t){const s=Te(r),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!xo(h))throw h;re(vf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function gy(r,e,t){const s=Te(r);let o=we.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,w){const A=Te(g),P=A.Ms.get(w);return P!==void 0?$.resolve(A.Fs.get(P)):A.hi.getTargetData(v,w)})(s,h,ir(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Ve()))).next((m=>(VA(s,yS(e),m),{documents:m,qs:u})))))}function VA(r,e,t){let s=r.xs.get(e)||we.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.xs.set(e,s)}class yy{constructor(){this.activeTargetIds=IS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xA{constructor(){this.Fo=new yy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new yy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OA{xo(e){}shutdown(){}}/**
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
 */const _y="ConnectivityMonitor";class vy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(_y,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(_y,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu=null;function bd(){return Vu===null?Vu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vu++,"0x"+Vu.toString(16)}/**
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
 */const fd="RestConnection",LA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===ec?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=bd(),m=this.Go(e,t.toUriEncodedString());re(fd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:v}=new URL(m),w=Po(v);return this.jo(e,m,g,s,w).then((A=>(re(fd,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw vi(fd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Do})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=LA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class FA extends MA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=bd();return new Promise(((m,g)=>{const v=new F_;v.setWithCredentials(!0),v.listenOnce(U_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Uu.NO_ERROR:const A=v.getResponseJson();re(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Uu.TIMEOUT:re(Ut,`RPC '${e}' ${h} timed out`),g(new ie(z.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const P=v.getStatus();if(re(Ut,`RPC '${e}' ${h} failed with status:`,P,"response text:",v.getResponseText()),P>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const K=j==null?void 0:j.error;if(K&&K.status&&K.message){const Y=(function(ye){const de=ye.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(de)>=0?de:z.UNKNOWN})(K.status);g(new ie(Y,K.message))}else g(new ie(z.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ie(z.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{re(Ut,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Ut,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=bd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=B_(),m=z_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");re(Ut,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);this.T_(A);let P=!1,j=!1;const K=new bA({Ho:q=>{j?re(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(P||(re(Ut,`Opening RPC '${e}' stream ${o} transport.`),A.open(),P=!0),re(Ut,`RPC '${e}' stream ${o} sending:`,q),A.send(q))},Yo:()=>A.close()}),Y=(q,ye,de)=>{q.listen(ye,(ge=>{try{de(ge)}catch(Ie){setTimeout((()=>{throw Ie}),0)}}))};return Y(A,Oa.EventType.OPEN,(()=>{j||(re(Ut,`RPC '${e}' stream ${o} transport opened.`),K.s_())})),Y(A,Oa.EventType.CLOSE,(()=>{j||(j=!0,re(Ut,`RPC '${e}' stream ${o} transport closed`),K.__(),this.I_(A))})),Y(A,Oa.EventType.ERROR,(q=>{j||(j=!0,vi(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),K.__(new ie(z.UNAVAILABLE,"The operation could not be completed")))})),Y(A,Oa.EventType.MESSAGE,(q=>{var ye;if(!j){const de=q.data[0];Be(!!de,16349);const ge=de,Ie=(ge==null?void 0:ge.error)||((ye=ge[0])===null||ye===void 0?void 0:ye.error);if(Ie){re(Ut,`RPC '${e}' stream ${o} received error:`,Ie);const $e=Ie.status;let Re=(function(R){const k=ht[R];if(k!==void 0)return Iv(k)})($e),D=Ie.message;Re===void 0&&(Re=z.INTERNAL,D="Unknown error status: "+$e+" with message "+Ie.message),j=!0,K.__(new ie(Re,D)),A.close()}else re(Ut,`RPC '${e}' stream ${o} received:`,de),K.a_(de)}})),Y(m,j_.STAT_EVENT,(q=>{q.stat===Ad.PROXY?re(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===Ad.NOPROXY&&re(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.o_()}),0),K}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function pd(){return typeof document<"u"?document:null}/**
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
 */function Ic(r){return new BS(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="PersistentStream";class Fv{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new bv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ie(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(Ey,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(Ey,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class UA extends Fv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=HS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?sr(h.readTime):we.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Ld(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Nd(g)?{documents:KS(u,g)}:{query:QS(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Rv(u,h.resumeToken);const v=Vd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=sc(u,h.snapshotVersion.toTimestamp());const v=Vd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=XS(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Ld(this.serializer),t.removeTarget=e,this.k_(t)}}class jA extends Fv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=GS(e.writeResults,e.commitTime),s=sr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Ld(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>WS(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{}class BA extends zA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,xd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(z.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,xd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(z.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class $A{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Lr(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RemoteStore";class qA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{_s(this)&&(re(ps,"Restarting streams for network reachability change."),await(async function(g){const v=Te(g);v.Ia.add(4),await ul(v),v.Aa.set("Unknown"),v.Ia.delete(4),await Sc(v)})(this))}))})),this.Aa=new $A(s,o)}}async function Sc(r){if(_s(r))for(const e of r.da)await e(!0)}async function ul(r){for(const e of r.da)await e(!1)}function Uv(r,e){const t=Te(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),If(t)?Tf(t):Lo(t).x_()&&wf(t,e))}function Ef(r,e){const t=Te(r),s=Lo(t);t.Ta.delete(e),s.x_()&&jv(t,e),t.Ta.size===0&&(s.x_()?s.B_():_s(t)&&t.Aa.set("Unknown"))}function wf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lo(r).H_(e)}function jv(r,e){r.Ra.$e(e),Lo(r).Y_(e)}function Tf(r){r.Ra=new FS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Lo(r).start(),r.Aa.aa()}function If(r){return _s(r)&&!Lo(r).M_()&&r.Ta.size>0}function _s(r){return Te(r).Ia.size===0}function zv(r){r.Ra=void 0}async function HA(r){r.Aa.set("Online")}async function WA(r){r.Ta.forEach(((e,t)=>{wf(r,e)}))}async function GA(r,e){zv(r),If(r)?(r.Aa.la(e),Tf(r)):r.Aa.set("Unknown")}async function KA(r,e,t){if(r.Aa.set("Online"),e instanceof Av&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(r,e)}catch(s){re(ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ac(r,s)}else if(e instanceof $u?r.Ra.Ye(e):e instanceof Sv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(we.min()))try{const s=await Mv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ta.get(v);w&&u.Ta.set(v,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const w=u.Ta.get(g);if(!w)return;u.Ta.set(g,w.withResumeToken(Ot.EMPTY_BYTE_STRING,w.snapshotVersion)),jv(u,g);const A=new di(w.target,g,v,w.sequenceNumber);wf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){re(ps,"Failed to raise snapshot:",s),await ac(r,s)}}async function ac(r,e,t){if(!xo(e))throw e;r.Ia.add(1),await ul(r),r.Aa.set("Offline"),t||(t=()=>Mv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(ps,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Sc(r)}))}function Bv(r,e){return e().catch((t=>ac(r,t,e)))}async function Ac(r){const e=Te(r),t=Si(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:sf;for(;QA(e);)try{const o=await NA(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,YA(e,o)}catch(o){await ac(e,o)}$v(e)&&qv(e)}function QA(r){return _s(r)&&r.Pa.length<10}function YA(r,e){r.Pa.push(e);const t=Si(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function $v(r){return _s(r)&&!Si(r).M_()&&r.Pa.length>0}function qv(r){Si(r).start()}async function XA(r){Si(r).na()}async function JA(r){const e=Si(r);for(const t of r.Pa)e.X_(t.mutations)}async function ZA(r,e,t){const s=r.Pa.shift(),o=ff.from(s,e,t);await Bv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Ac(r)}async function eR(r,e){e&&Si(r).Z_&&await(async function(s,o){if((function(h){return MS(h)&&h!==z.ABORTED})(o.code)){const u=s.Pa.shift();Si(s).N_(),await Bv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ac(s)}})(r,e),$v(r)&&qv(r)}async function wy(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),re(ps,"RemoteStore received new credentials");const s=_s(t);t.Ia.add(3),await ul(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Sc(t)}async function tR(r,e){const t=Te(r);e?(t.Ia.delete(2),await Sc(t)):e||(t.Ia.add(2),await ul(t),t.Aa.set("Unknown"))}function Lo(r){return r.Va||(r.Va=(function(t,s,o){const u=Te(t);return u.ia(),new UA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:HA.bind(null,r),e_:WA.bind(null,r),n_:GA.bind(null,r),J_:KA.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),If(r)?Tf(r):r.Aa.set("Unknown")):(await r.Va.stop(),zv(r))}))),r.Va}function Si(r){return r.ma||(r.ma=(function(t,s,o){const u=Te(t);return u.ia(),new jA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:XA.bind(null,r),n_:eR.bind(null,r),ea:JA.bind(null,r),ta:ZA.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Ac(r)):(await r.ma.stop(),r.Pa.length>0&&(re(ps,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Sf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Af(r,e){if(Lr("AsyncQueue",`${e}: ${r}`),xo(r))return new ie(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{static emptySet(e){return new vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=La(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.fa=new it(he.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ro{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ro(e,t,vo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class rR{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=Iy(),u.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new ie(z.ABORTED,"Firestore shutting down"))}}function Iy(){return new gs((r=>hv(r)),_c)}async function iR(r,e){const t=Te(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new nR,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Af(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Rf(t)}async function sR(r,e){const t=Te(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function oR(r,e){const t=Te(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Rf(t)}function aR(r,e,t){const s=Te(r),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Rf(r){r.Da.forEach((e=>{e.next()}))}var Fd,Sy;(Sy=Fd||(Fd={})).Fa="default",Sy.Cache="cache";class lR{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ro(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.key=e}}class Wv{constructor(e){this.key=e}}class uR{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=dv(e),this.eu=new vo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Ty,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const P=o.get(w),j=vc(this.query,A)?A:null,K=!!P&&this.mutatedKeys.has(P.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let q=!1;P&&j?P.data.isEqual(j.data)?K!==Y&&(s.track({type:3,doc:j}),q=!0):this.iu(P,j)||(s.track({type:2,doc:j}),q=!0,(g&&this.Xa(j,g)>0||v&&this.Xa(j,v)<0)&&(m=!0)):!P&&j?(s.track({type:0,doc:j}),q=!0):P&&!j&&(s.track({type:1,doc:P}),q=!0,(g||v)&&(m=!0)),q&&(j?(h=h.add(j),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,A)=>(function(j,K){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:q})}};return Y(j)-Y(K)})(w.type,A.type)||this.Xa(w.doc,A.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new Ro(this.query,e.eu,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ty,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Wv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Hv(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ro.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Cf="SyncEngine";class cR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class hR{constructor(e){this.key=e,this.lu=!1}}class dR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new gs((m=>hv(m)),_c),this.Tu=new Map,this.Iu=new Set,this.du=new it(he.comparator),this.Eu=new Map,this.Au=new gf,this.Ru={},this.Vu=new Map,this.mu=Ao.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function fR(r,e,t=!0){const s=Jv(r);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await Gv(s,e,t,!0),o}async function pR(r,e){const t=Jv(r);await Gv(t,e,!0,!1)}async function Gv(r,e,t,s){const o=await DA(r.localStore,ir(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await mR(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Uv(r.remoteStore,o),m}async function mR(r,e,t,s,o){r.gu=(A,P,j)=>(async function(Y,q,ye,de){let ge=q.view.nu(ye);ge.Ds&&(ge=await gy(Y.localStore,q.query,!1).then((({documents:D})=>q.view.nu(D,ge))));const Ie=de&&de.targetChanges.get(q.targetId),$e=de&&de.targetMismatches.get(q.targetId)!=null,Re=q.view.applyChanges(ge,Y.isPrimaryClient,Ie,$e);return Ry(Y,q.targetId,Re._u),Re.snapshot})(r,A,P,j);const u=await gy(r.localStore,e,!0),h=new uR(e,u.qs),m=h.nu(u.documents),g=ll.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(m,r.isPrimaryClient,g);Ry(r,t,v._u);const w=new cR(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function gR(r,e,t){const s=Te(r),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!_c(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Md(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Ef(s.remoteStore,o.targetId),Ud(s,o.targetId)})).catch(Vo)):(Ud(s,o.targetId),await Md(s.localStore,o.targetId,!0))}async function yR(r,e){const t=Te(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ef(t.remoteStore,s.targetId))}async function _R(r,e,t){const s=AR(r);try{const o=await(function(h,m){const g=Te(h),v=Je.now(),w=m.reduce(((j,K)=>j.add(K.key)),Ve());let A,P;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let K=Mr(),Y=Ve();return g.Os.getEntries(j,w).next((q=>{K=q,K.forEach(((ye,de)=>{de.isValidDocument()||(Y=Y.add(ye))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,K))).next((q=>{A=q;const ye=[];for(const de of m){const ge=DS(de,A.get(de.key).overlayedDocument);ge!=null&&ye.push(new ys(de.key,ge,rv(ge.value.mapValue),$n.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,ye,m)})).next((q=>{P=q;const ye=q.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(j,q.batchId,ye)}))})).then((()=>({batchId:P.batchId,changes:pv(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new it(Pe)),v=v.insert(m,g),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await cl(s,o.changes),await Ac(s.remoteStore)}catch(o){const u=Af(o,"Failed to persist write");t.reject(u)}}async function Kv(r,e){const t=Te(r);try{const s=await PA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Be(h.lu,14607):o.removedDocuments.size>0&&(Be(h.lu,42227),h.lu=!1))})),await cl(t,s,e)}catch(s){await Vo(s)}}function Ay(r,e,t){const s=Te(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Te(h);g.onlineState=m;let v=!1;g.queries.forEach(((w,A)=>{for(const P of A.wa)P.va(m)&&(v=!0)})),v&&Rf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vR(r,e,t){const s=Te(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new it(he.comparator);h=h.insert(u,zt.newNoDocument(u,we.min()));const m=Ve().add(u),g=new Tc(we.min(),new Map,new it(Pe),h,m);await Kv(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Pf(s)}else await Md(s.localStore,e,!1).then((()=>Ud(s,e,t))).catch(Vo)}async function ER(r,e){const t=Te(r),s=e.batch.batchId;try{const o=await CA(t.localStore,e);Yv(t,s,null),Qv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await cl(t,o)}catch(o){await Vo(o)}}async function wR(r,e,t){const s=Te(r);try{const o=await(function(h,m){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next((A=>(Be(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(v,A)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>g.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);Yv(s,e,t),Qv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await cl(s,o)}catch(o){await Vo(o)}}function Qv(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Yv(r,e,t){const s=Te(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Ud(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Xv(r,s)}))}function Xv(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Ef(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Pf(r))}function Ry(r,e,t){for(const s of t)s instanceof Hv?(r.Au.addReference(s.key,e),TR(r,s)):s instanceof Wv?(re(Cf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Xv(r,s.key)):ve(19791,{yu:s})}function TR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(re(Cf,"New document in limbo: "+t),r.Iu.add(s),Pf(r))}function Pf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new he(Qe.fromString(e)),s=r.mu.next();r.Eu.set(s,new hR(t)),r.du=r.du.insert(t,s),Uv(r.remoteStore,new di(ir(cf(t.path)),s,"TargetPurposeLimboResolution",mc.ue))}}async function cl(r,e,t){const s=Te(r),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=_f.Es(g.targetId,v);u.push(A)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,v){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>$.forEach(v,(P=>$.forEach(P.Is,(j=>w.persistence.referenceDelegate.addReference(A,P.targetId,j))).next((()=>$.forEach(P.ds,(j=>w.persistence.referenceDelegate.removeReference(A,P.targetId,j)))))))))}catch(A){if(!xo(A))throw A;re(vf,"Failed to update sequence numbers: "+A)}for(const A of v){const P=A.targetId;if(!A.fromCache){const j=w.Fs.get(P),K=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(K);w.Fs=w.Fs.insert(P,Y)}}})(s.localStore,u))}async function IR(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){re(Cf,"User change. New user:",e.toKey());const s=await Lv(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((g=>{g.reject(new ie(z.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cl(t,s.Bs)}}function SR(r,e){const t=Te(r),s=t.Eu.get(e);if(s&&s.lu)return Ve().add(s.key);{let o=Ve();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Jv(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vR.bind(null,e),e.hu.J_=oR.bind(null,e.eventManager),e.hu.pu=aR.bind(null,e.eventManager),e}function AR(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ER.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wR.bind(null,e),e}class lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return RA(this.persistence,new IA,e.initialUser,this.serializer)}Du(e){return new Ov(yf.Vi,this.serializer)}bu(e){return new xA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lc.provider={build:()=>new lc};class RR extends lc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Be(this.persistence.referenceDelegate instanceof oc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new lA(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Ov((s=>oc.Vi(s,t)),this.serializer)}}class jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ay(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=IR.bind(null,this.syncEngine),await tR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rR})()}createDatastore(e){const t=Ic(e.databaseInfo.databaseId),s=(function(u){return new FA(u)})(e.databaseInfo);return(function(u,h,m,g){return new BA(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new qA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ay(this.syncEngine,t,0)),(function(){return vy.C()?new vy:new OA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,v,w){const A=new dR(o,u,h,m,g,v);return w&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Te(o);re(ps,"RemoteStore shutting down."),u.Ia.add(5),await ul(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}jd.provider={build:()=>new jd};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="FirestoreClient";class PR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Af(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function md(r,e){r.asyncQueue.verifyOperationInProgress(),re(Ai,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Lv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{vi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{vi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function Cy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await kR(r);re(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>wy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>wy(e.remoteStore,o))),r._onlineComponents=e}async function kR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Ai,"Using user provided OfflineComponentProvider");try{await md(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;vi("Error using user provided cache. Falling back to memory cache: "+t),await md(r,new lc)}}else re(Ai,"Using default OfflineComponentProvider"),await md(r,new RR(void 0));return r._offlineComponents}async function Zv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Ai,"Using user provided OnlineComponentProvider"),await Cy(r,r._uninitializedComponentsProvider._online)):(re(Ai,"Using default OnlineComponentProvider"),await Cy(r,new jd))),r._onlineComponents}function NR(r){return Zv(r).then((e=>e.syncEngine))}async function Py(r){const e=await Zv(r),t=e.eventManager;return t.onListen=fR.bind(null,e.syncEngine),t.onUnlisten=gR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yR.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const ky=new Map;/**
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
 */const tE="firestore.googleapis.com",Ny=!0;class Dy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tE,this.ssl=Ny}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ny;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oA)throw new ie(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new L1;switch(s.type){case"firstParty":return new U1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ky.get(t);s&&(re("ComponentProvider","Removing Datastore"),ky.delete(t),s.terminate())})(this),Promise.resolve()}}function DR(r,e,t,s={}){var o;r=yi(r,Rc);const u=Po(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Yy(`https://${g}`),Xy("Firestore",!0)),h.host!==tE&&h.host!==g&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!ls(v,m)&&(r._setSettings(v),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=jt.MOCK_USER;else{w=zw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new ie(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new jt(P)}r._authCredentials=new M1(new q_(w,A))}}/**
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
 */class Pi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pi(this.firestore,e,this._query)}}class pt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ol(t,pt._jsonSchema))return new pt(e,s||null,new he(Qe.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:ft("string",pt._jsonSchemaVersion),referencePath:ft("string")};class _i extends Pi{constructor(e,t,s){super(e,t,cf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new he(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function nE(r,e,...t){if(r=Tt(r),W_("collection","path",e),r instanceof Rc){const s=Qe.fromString(e,...t);return $g(s),new _i(r,null,s)}{if(!(r instanceof pt||r instanceof _i))throw new ie(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Qe.fromString(e,...t));return $g(s),new _i(r.firestore,null,s)}}function kf(r,e,...t){if(r=Tt(r),arguments.length===1&&(e=rf.newId()),W_("doc","path",e),r instanceof Rc){const s=Qe.fromString(e,...t);return Bg(s),new pt(r,null,new he(s))}{if(!(r instanceof pt||r instanceof _i))throw new ie(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Qe.fromString(e,...t));return Bg(s),new pt(r.firestore,r instanceof _i?r.converter:null,new he(s))}}/**
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
 */const Vy="AsyncQueue";class xy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new bv(this,"async_queue_retry"),this.oc=()=>{const s=pd();s&&re(Vy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=pd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=pd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new os;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!xo(e))throw e;re(Vy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Lr("INTERNAL UNHANDLED ERROR: ",Oy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Sf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:Oy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Oy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class Co extends Rc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new xy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function VR(r,e){const t=typeof r=="object"?r:t_(),s=typeof r=="string"?r:ec,o=qd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Uw("firestore");u&&DR(o,...u)}return o}function rE(r){if(r._terminated)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||xR(r),r._firestoreClient}function xR(r){var e,t,s;const o=r._freezeSettings(),u=(function(m,g,v,w){return new tS(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,eE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new PR(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class In{constructor(e){this._byteString=e}static fromBase64String(e){try{return new In(Ot.fromBase64String(e))}catch(t){throw new ie(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new In(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:In._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ol(e,In._jsonSchema))return In.fromBase64String(e.bytes)}}In._jsonSchemaVersion="firestore/bytes/1.0",In._jsonSchema={type:ft("string",In._jsonSchemaVersion),bytes:ft("string")};/**
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
 */class Nf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Df{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:or._jsonSchemaVersion}}static fromJSON(e){if(ol(e,or._jsonSchema))return new or(e.latitude,e.longitude)}}or._jsonSchemaVersion="firestore/geoPoint/1.0",or._jsonSchema={type:ft("string",or._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ar._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ol(e,ar._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ar(e.vectorValues);throw new ie(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ar._jsonSchemaVersion="firestore/vectorValue/1.0",ar._jsonSchema={type:ft("string",ar._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=/^__.*__$/;class LR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new al(e,this.data,t,this.fieldTransforms)}}function iE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:r})}}class Vf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return uc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(iE(this.Ec)&&OR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class MR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ic(e)}Dc(e,t,s,o=!1){return new Vf({Ec:e,methodName:t,bc:s,path:xt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xf(r){const e=r._freezeSettings(),t=Ic(r._databaseId);return new MR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function sE(r,e,t,s,o,u={}){const h=r.Dc(u.merge||u.mergeFields?2:0,e,t,o);lE("Data must be an object, but it was:",h,s);const m=oE(s,h);let g,v;if(u.merge)g=new zn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const P=FR(e,A,t);if(!h.contains(P))throw new ie(z.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);jR(w,P)||w.push(P)}g=new zn(w),v=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,v=h.fieldTransforms;return new LR(new Tn(m),g,v)}class Of extends Df{_toFieldTransform(e){return new CS(e.path,new Xa)}isEqual(e){return e instanceof Of}}function bR(r,e,t,s=!1){return Lf(t,r.Dc(s?4:3,e))}function Lf(r,e){if(aE(r=Tt(r)))return lE("Unsupported field value:",e,r),oE(r,e);if(r instanceof Df)return(function(s,o){if(!iE(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Lf(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return SS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Je.fromDate(s);return{timestampValue:sc(o.serializer,u)}}if(s instanceof Je){const u=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sc(o.serializer,u)}}if(s instanceof or)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof In)return{bytesValue:Rv(o.serializer,s._byteString)};if(s instanceof pt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:mf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ar)return(function(h,m){return{mapValue:{fields:{[tv]:{stringValue:nv},[tc]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return hf(m.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${pc(s)}`)})(r,e)}function oE(r,e){const t={};return Q_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(r,((s,o)=>{const u=Lf(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function aE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof or||r instanceof In||r instanceof pt||r instanceof Df||r instanceof ar)}function lE(r,e,t){if(!aE(t)||!G_(t)){const s=pc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function FR(r,e,t){if((e=Tt(e))instanceof Nf)return e._internalPath;if(typeof e=="string")return uE(r,e);throw uc("Field path arguments must be of type string or ",r,!1,void 0,t)}const UR=new RegExp("[~\\*/\\[\\]]");function uE(r,e,t){if(e.search(UR)>=0)throw uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Nf(...e.split("."))._internalPath}catch{throw uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function uc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(z.INVALID_ARGUMENT,m+r+g)}function jR(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class cE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zR extends cE{data(){return super.data()}}function Mf(r,e){return typeof e=="string"?uE(r,e):e instanceof Nf?e._internalPath:e._delegate._internalPath}/**
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
 */function BR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ie(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bf{}class Ff extends bf{}function $R(r,e,...t){let s=[];e instanceof bf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof jf)).length,m=u.filter((g=>g instanceof Uf)).length;if(h>1||h>0&&m>0)throw new ie(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Uf extends Ff{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Uf(e,t,s)}_apply(e){const t=this._parse(e);return hE(e._query,t),new Pi(e.firestore,e.converter,Dd(e._query,t))}_parse(e){const t=xf(e.firestore);return(function(u,h,m,g,v,w,A){let P;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){by(A,w);const K=[];for(const Y of A)K.push(My(g,u,Y));P={arrayValue:{values:K}}}else P=My(g,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||by(A,w),P=bR(m,h,A,w==="in"||w==="not-in");return dt.create(v,w,P)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class jf extends bf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)hE(h,g),h=Dd(h,g)})(e._query,t),new Pi(e.firestore,e.converter,Dd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zf extends Ff{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ie(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ya(u,h)})(e._query,this._field,this._direction);return new Pi(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Oo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function qR(r,e="asc"){const t=e,s=Mf("orderBy",r);return zf._create(s,t)}class Bf extends Ff{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Bf(e,t,s)}_apply(e){return new Pi(e.firestore,e.converter,rc(e._query,this._limit,this._limitType))}}function HR(r){return Bf._create("limit",r,"F")}function My(r,e,t){if(typeof(t=Tt(t))=="string"){if(t==="")throw new ie(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cv(e)&&t.indexOf("/")!==-1)throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Qe.fromString(t));if(!he.isDocumentKey(s))throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Xg(r,new he(s))}if(t instanceof pt)return Xg(r,t._key);throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc(t)}.`)}function by(r,e){if(!Array.isArray(r)||r.length===0)throw new ie(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hE(r,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WR{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ms(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[tc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>lt(h.doubleValue)));return new ar(u)}convertGeoPoint(e){return new or(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=yc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Be(Vv(s),9688,{name:e});const o=new Ka(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Lr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function dE(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends cE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Mf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=as._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}as._jsonSchemaVersion="firestore/documentSnapshot/1.0",as._jsonSchema={type:ft("string",as._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class qu extends as{data(e={}){return super.data(e)}}class Eo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ba(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new qu(this._firestore,this._userDataWriter,s.key,s,new ba(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new qu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ba(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new qu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ba(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:GR(m.type),doc:g,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Eo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}Eo._jsonSchemaVersion="firestore/querySnapshot/1.0",Eo._jsonSchema={type:ft("string",Eo._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class fE extends WR{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function KR(r,e,t){r=yi(r,pt);const s=yi(r.firestore,Co),o=dE(r.converter,e,t);return $f(s,[sE(xf(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,$n.none())])}function QR(r){return $f(yi(r.firestore,Co),[new df(r._key,$n.none())])}function YR(r,e){const t=yi(r.firestore,Co),s=kf(r),o=dE(r.converter,e);return $f(t,[sE(xf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,$n.exists(!1))]).then((()=>s))}function Fy(r,...e){var t,s,o;r=Tt(r);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Ly(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Ly(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,v,w;if(r instanceof pt)v=yi(r.firestore,Co),w=cf(r._key.path),g={next:A=>{e[h]&&e[h](XR(v,r,A))},error:e[h+1],complete:e[h+2]};else{const A=yi(r,Pi);v=yi(A.firestore,Co),w=A._query;const P=new fE(v);g={next:j=>{e[h]&&e[h](new Eo(v,P,A,j))},error:e[h+1],complete:e[h+2]},BR(r._query)}return(function(P,j,K,Y){const q=new CR(Y),ye=new lR(j,q,K);return P.asyncQueue.enqueueAndForget((async()=>iR(await Py(P),ye))),()=>{q.Ou(),P.asyncQueue.enqueueAndForget((async()=>sR(await Py(P),ye)))}})(rE(v),w,m,g)}function $f(r,e){return(function(s,o){const u=new os;return s.asyncQueue.enqueueAndForget((async()=>_R(await NR(s),o,u))),u.promise})(rE(r),e)}function XR(r,e,t){const s=t.docs.get(e._key),o=new fE(r);return new as(r,o,e._key,s,new ba(t.hasPendingWrites,t.fromCache),e.converter)}function pE(){return new Of("serverTimestamp")}(function(e,t=!0){(function(o){Do=o})(ko),wo(new us("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Co(new b1(s.getProvider("auth-internal")),new j1(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(v.options.projectId,w)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),mi(bg,Fg,e),mi(bg,Fg,"esm2017")})();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mE=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=ze.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>ze.createElement("svg",{ref:g,...ZR,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:mE("lucide",o),...m},[...h.map(([v,w])=>ze.createElement(v,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=(r,e)=>{const t=ze.forwardRef(({className:s,...o},u)=>ze.createElement(eC,{ref:u,iconNode:e,className:mE(`lucide-${JR(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=cr("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=cr("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=cr("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=cr("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=cr("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=cr("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=cr("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=cr("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=cr("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=cr("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);var aC="firebase",lC="11.10.0";/**
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
 */mi(aC,lC,"app");const uC={apiKey:"AIzaSyB22Y06cUUhfSweTGIhHaziHCJTytUkqLI",authDomain:"quadchat-cf697.firebaseapp.com",projectId:"quadchat-cf697",storageBucket:"quadchat-cf697.firebasestorage.app",messagingSenderId:"738776494798",appId:"1:738776494798:web:58454b37922a44fa98969f"},gE=e_(uC),co=x1(gE),Cc=VR(gE),By=nE(Cc,"messages"),cC=nE(Cc,"users"),hC=new kr;function dC(r){return r!=null&&r.toDate?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit"}).format(r.toDate()):"sending"}function Da(r){switch(r.code){case"auth/email-already-in-use":return"That email already has an account. Sign in instead.";case"auth/invalid-email":return"Enter a valid email address.";case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":return"The email or password is incorrect.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/operation-not-allowed":return"This sign-in method is not enabled in Firebase.";case"auth/popup-closed-by-user":return"The Google sign-in popup was closed before finishing.";case"auth/popup-blocked":return"Your browser blocked the Google sign-in popup.";case"auth/unauthorized-domain":return"This domain is not authorized in Firebase Authentication settings.";case"auth/requires-recent-login":return"Please sign out, sign back in, and try again.";default:return r.message}}function fC(r){return r.split(/\s+/).filter(Boolean).slice(0,2).map(e=>{var t;return(t=e[0])==null?void 0:t.toUpperCase()}).join("")||"?"}function $y(r,e="Anonymous"){var t;return((t=r==null?void 0:r.displayName)==null?void 0:t.trim())||(r==null?void 0:r.email)||e}async function Ou(r,e){if(!r)return;const t=e||r.displayName||r.email||"User";await KR(kf(Cc,"users",r.uid),{id:r.uid,displayName:t,email:r.email||"",photoURL:r.photoURL||"",updatedAt:pE()},{merge:!0})}function pC(){const[r,e]=ze.useState(null),[t,s]=ze.useState(!1),[o,u]=ze.useState("signin"),[h,m]=ze.useState(""),[g,v]=ze.useState(""),[w,A]=ze.useState(""),[P,j]=ze.useState(""),[K,Y]=ze.useState([]),[q,ye]=ze.useState({}),[de,ge]=ze.useState(!1),[Ie,$e]=ze.useState(!1),[Re,D]=ze.useState(!1),[I,R]=ze.useState(!1),[k,V]=ze.useState(""),[O,S]=ze.useState(""),[We,Le]=ze.useState(""),[mt,xe]=ze.useState(""),Z=ze.useRef(null),ce=r?q[r.uid]:null,ee=ze.useMemo(()=>$y(ce,(r==null?void 0:r.displayName)||(r==null?void 0:r.email)||""),[ce,r]);ze.useEffect(()=>EI(co,fe=>{e(fe),s(!0),fe&&Ou(fe).catch(Ce=>{Le(Ce.message)})}),[]),ze.useEffect(()=>{r&&V(ee||"")},[ee,r]),ze.useEffect(()=>{if(!r){ye({});return}return Fy(cC,fe=>{ye(fe.docs.reduce((Ce,Ze)=>(Ce[Ze.id]={id:Ze.id,...Ze.data()},Ce),{}))},fe=>{Le(fe.message)})},[r]),ze.useEffect(()=>{if(!r){Y([]);return}const te=$R(By,qR("createdAt","asc"),HR(100));return Fy(te,Ce=>{Y(Ce.docs.map(Ze=>({id:Ze.id,...Ze.data()}))),Le("")},Ce=>{Le(Ce.message)})},[r]),ze.useEffect(()=>{var te;(te=Z.current)==null||te.scrollIntoView({behavior:"smooth",block:"end"})},[K]);async function x(te){te.preventDefault();const fe=h.trim(),Ce=g.trim(),Ze=w.trim(),hr=o==="signup";if(!(!Ce||!Ze||hr&&!fe)){Le("");try{if(hr){const Gt=await fI(co,Ce,Ze);await Rg(Gt.user,{displayName:fe}),await Ou(Gt.user,fe),e({...Gt.user,displayName:fe})}else await pI(co,Ce,Ze);m(""),v(""),A("")}catch(Gt){Le(Da(Gt))}}}async function B(){Le("");try{const te=await BI(co,hC);await Ou(te.user),m(""),v(""),A("")}catch(te){Le(Da(te))}}async function ue(){try{await wI(co),j(""),Le("")}catch(te){Le(Da(te))}}function Se(){V(ee||""),S(""),xe(""),Le(""),D(!1),R(!0)}async function Ae(te){te.preventDefault();const fe=k.trim(),Ce=O.trim();if(!(!r||!fe&&!Ce)){$e(!0),xe(""),Le("");try{fe&&fe!==r.displayName&&await Rg(r,{displayName:fe}),fe&&await Ou(r,fe),Ce&&await gI(r,Ce),await r.reload(),e(co.currentUser),S(""),xe("Settings saved.")}catch(Ze){xe(Da(Ze))}finally{$e(!1)}}}async function Ne(){if(!(!r||!window.confirm("Remove this account? This cannot be undone."))){$e(!0),xe("");try{await QR(kf(Cc,"users",r.uid)),await TI(r),R(!1),j(""),Le("")}catch(fe){xe(Da(fe))}finally{$e(!1)}}}async function Fe(te){te.preventDefault();const fe=P.trim();if(!(!fe||!ee||de)){ge(!0),Le("");try{await YR(By,{text:fe,userId:r.uid,createdAt:pE()}),j("")}catch(Ce){Le(Ce.message)}finally{ge(!1)}}}return H.jsxs("main",{className:"app-shell",children:[t?r?H.jsxs("section",{className:"chat-panel","aria-label":"QuadChat room",children:[H.jsxs("header",{className:"chat-header",children:[H.jsxs("div",{className:"chat-title",children:[H.jsx("div",{className:"brand-mark","aria-hidden":"true",children:H.jsx(xu,{size:26,strokeWidth:2.3})}),H.jsxs("div",{children:[H.jsx("h1",{children:"QuadChat"}),H.jsxs("p",{children:["Signed in as ",ee," · ",K.length," messages"]})]})]}),H.jsxs("button",{className:"icon-text-button",type:"button",onClick:ue,title:"Sign out",children:[H.jsx(jy,{size:18}),H.jsx("span",{children:"Sign out"})]}),H.jsxs("div",{className:"profile-actions",children:[H.jsx("button",{className:"avatar-button",type:"button",onClick:()=>D(te=>!te),title:"Profile options",children:r.photoURL?H.jsx("img",{src:r.photoURL,alt:""}):H.jsx("span",{children:fC(ee)})}),Re?H.jsxs("div",{className:"profile-menu",children:[H.jsxs("button",{type:"button",onClick:Se,children:[H.jsx(iC,{size:17}),H.jsx("span",{children:"Settings"})]}),H.jsxs("button",{type:"button",onClick:ue,children:[H.jsx(jy,{size:17}),H.jsx("span",{children:"Sign out"})]})]}):null]})]}),We?H.jsx("div",{className:"error-banner",children:We}):null,H.jsxs("div",{className:"messages",role:"log","aria-live":"polite",children:[K.length===0?H.jsxs("div",{className:"empty-state",children:[H.jsx(xu,{size:42}),H.jsx("p",{children:"No messages yet. Say hello when you are ready."})]}):K.map(te=>{const fe=q[te.userId],Ce=$y(fe,te.name),Ze=te.userId===r.uid;return H.jsxs("article",{className:`message ${Ze?"message-mine":""}`,children:[H.jsxs("div",{className:"message-meta",children:[H.jsx("strong",{children:Ce}),H.jsx("span",{children:dC(te.createdAt)})]}),H.jsx("p",{children:te.text})]},te.id)}),H.jsx("div",{ref:Z})]}),H.jsxs("form",{className:"composer",onSubmit:Fe,children:[H.jsx("input",{type:"text",value:P,onChange:te=>j(te.target.value),placeholder:"Type a message",maxLength:500}),H.jsx("button",{type:"submit","aria-label":"Send message",title:"Send message",disabled:!P.trim()||!ee||de,children:H.jsx(rC,{size:20})})]})]}):H.jsxs("section",{className:"signin-panel","aria-label":"Sign in to QuadChat",children:[H.jsxs("div",{className:"signin-brand",children:[H.jsx("div",{className:"brand-mark","aria-hidden":"true",children:H.jsx(xu,{size:28,strokeWidth:2.3})}),H.jsxs("div",{children:[H.jsx("h1",{children:"QuadChat"}),H.jsx("p",{children:o==="signup"?"Create an account to start chatting.":"Sign in to continue chatting."})]})]}),H.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication view",children:[H.jsx("button",{className:o==="signin"?"active":"",type:"button",onClick:()=>{u("signin"),Le("")},children:"Sign in"}),H.jsx("button",{className:o==="signup"?"active":"",type:"button",onClick:()=>{u("signup"),Le("")},children:"Sign up"})]}),H.jsxs("form",{className:"signin-form",onSubmit:x,children:[o==="signup"?H.jsxs(H.Fragment,{children:[H.jsxs("label",{htmlFor:"signin-name",children:[H.jsx(zy,{size:18}),H.jsx("span",{children:"Display name"})]}),H.jsx("input",{id:"signin-name",type:"text",value:h,onChange:te=>m(te.target.value),placeholder:"Enter your name",autoComplete:"name",maxLength:32})]}):null,H.jsxs("label",{htmlFor:"signin-email",children:[H.jsx(zy,{size:18}),H.jsx("span",{children:"Email"})]}),H.jsx("input",{id:"signin-email",type:"email",value:g,onChange:te=>v(te.target.value),placeholder:"you@example.com",autoComplete:"email",maxLength:120}),H.jsxs("label",{htmlFor:"signin-password",children:[H.jsx(Uy,{size:18}),H.jsx("span",{children:"Password"})]}),H.jsx("input",{id:"signin-password",type:"password",value:w,onChange:te=>A(te.target.value),placeholder:"Enter your password",autoComplete:"current-password",maxLength:64}),We?H.jsx("div",{className:"error-banner inline-error",children:We}):null,H.jsx("button",{type:"submit",disabled:!g.trim()||!w.trim()||o==="signup"&&!h.trim(),children:o==="signup"?"Create account":"Sign in"})]}),H.jsx("div",{className:"auth-divider",children:H.jsx("span",{children:"or"})}),H.jsxs("button",{className:"google-button",type:"button",onClick:B,children:[H.jsx(tC,{size:18}),H.jsx("span",{children:"Continue with Google"})]}),H.jsxs("div",{className:"mode-note",children:[H.jsx(sC,{size:18}),H.jsx("span",{children:"Production mode: Firebase Authentication manages accounts."})]})]}):H.jsx("section",{className:"signin-panel","aria-label":"Loading QuadChat",children:H.jsxs("div",{className:"signin-brand",children:[H.jsx("div",{className:"brand-mark","aria-hidden":"true",children:H.jsx(xu,{size:28,strokeWidth:2.3})}),H.jsxs("div",{children:[H.jsx("h1",{children:"QuadChat"}),H.jsx("p",{children:"Checking your session."})]})]})}),I&&r?H.jsx("div",{className:"modal-backdrop",role:"presentation",children:H.jsxs("section",{className:"settings-modal","aria-label":"Account settings",role:"dialog","aria-modal":"true",children:[H.jsxs("header",{className:"settings-header",children:[H.jsxs("div",{children:[H.jsx("h2",{children:"Settings"}),H.jsx("p",{children:r.email}),H.jsxs("p",{children:["ID: ",r.uid]})]}),H.jsx("button",{className:"modal-close",type:"button",onClick:()=>R(!1),title:"Close settings",children:"X"})]}),H.jsxs("form",{className:"settings-form",onSubmit:Ae,children:[H.jsxs("label",{htmlFor:"settings-name",children:[H.jsx(nC,{size:18}),H.jsx("span",{children:"Username"})]}),H.jsx("input",{id:"settings-name",type:"text",value:k,onChange:te=>V(te.target.value),maxLength:32,placeholder:"Your display name"}),H.jsxs("label",{htmlFor:"settings-password",children:[H.jsx(Uy,{size:18}),H.jsx("span",{children:"New password"})]}),H.jsx("input",{id:"settings-password",type:"password",value:O,onChange:te=>S(te.target.value),minLength:6,maxLength:64,placeholder:"Leave blank to keep current password",autoComplete:"new-password"}),mt?H.jsx("div",{className:"error-banner inline-error settings-note",children:mt}):null,H.jsxs("div",{className:"settings-actions",children:[H.jsx("button",{type:"submit",disabled:Ie,children:"Save changes"}),H.jsxs("button",{className:"danger-button",type:"button",onClick:Ne,disabled:Ie,children:[H.jsx(oC,{size:17}),H.jsx("span",{children:"Remove account"})]})]})]})]})}):null]})}Nw.createRoot(document.getElementById("root")).render(H.jsx(Sw.StrictMode,{children:H.jsx(pC,{})}));
